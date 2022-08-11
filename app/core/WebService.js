import { Component } from "react";
import axios from "react-native-axios"; 
import AppConfig from "./AppConfig";

export class WebService extends Component {
     
    constructor(props){
        super(props);
        this.state = {
            resource: '',
            data: {},
            body: {},
            protocol: 'http',
            domain: 'presta.example.com',
            path: '/api/',
            query: [
                'output_format=JSON',
                'ws_key=' + AppConfig.api_key,
                'display=full',
            ],
            response: 'initial',
            status: false,
            handler: (response) => {},
            cache: true,
        };

        if(props && 'query' in props) {
            for (const [key, value] of Object.entries(props.query)) {
                this.state.query.push(`${key}=${value}`);
            };
        }

    }

    componentDidMount(){
        if(this.props.check) return this.requestResource();
    }

    request(method){
        const request = this.requestResource(
            (response) => {
                    if(this.props.check) return response;
                    if(response) return this.state.data = response;
                    return false;
            }
        );
        return request;
    }

    getRequestLink(){
        return [
            this.state.protocol,
            '://',
            this.state.domain,
            this.state.path,
            this.state.resource.replace(/\s+/, ''),
            '?',
            this.state.query.join('&')
        ].join('');
    }

    async requestResource(handlerFunction){
        const headers = {
            'Content-Type': 'text/plain',
            'SameSite': 'Strict',
        };

        const link = this.getRequestLink();

        const setResponse = (link, response, status)=> {

            this.setState({
                response: response,
                data: (('data' in response) && (this.state.resource in response.data) !== -1) ? response.data[this.state.resource] : {},
                status: ( status && Object.keys(this.state.data).length > 0 ),
            });

            if(this.state.cache) {
                // The values to be cached comes from the actual state
                this.saveCache();
            }
            
            this.handlerFunction(this.state.handler);
        }

        // If is to use cache responses
        if(this.state.cache){
            const userIsConnected = true;
            const cache = this.getCache(link, userIsConnected);
            // If there is a valid cache response 
            if(cache && 'status' in cache && cache.status == true && 'link' in cache && 'response' in cache){
                setResponse(link, cache.response, true)
                return cache;
            }
        }

        const response = await axios.get(
            link
            ).then(response => {
                if(this.props.check) return response;
                setResponse(link, response, true);
            })
            .catch(error => {
                if(this.props.check) return false;
                setResponse(link, error, false);
            }
        )

        return response;
    }

    async handlerFunction(handler) {
        if(typeof this.state.handler == 'function'){
            const handlerResponse = await handler(this.state.data);
            return handlerResponse;
        }
        return null;
    }

    saveCache(){
        // resource, response from the state 
        console.log('Status', this.state.status, 'from', this.state.resource, this.getRequestLink(), 'with response', this.state.response);
    }

    getCache(link, userIsConnected){
        // look to see if there is a valid cache < 5 or the user is offline 
    }

}