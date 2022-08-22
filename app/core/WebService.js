import { Component } from "react";
import axios from "react-native-axios"; 
import AppConfig from "./AppConfig";
import { CacheRequest } from './CacheRequest';

export class WebService extends Component {
     
    constructor(props){
        super(props);
        const userIsConnected = !('routes' in props ) || !('params' in props.routes) ? true : props.routes.params.userIsConnected
        this.state = {
            resource: '',
            data: {},
            body: {},
            protocol: AppConfig.domain_protocol,
            domain: AppConfig.domain_uri,
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
            userIsConnected: userIsConnected,
        };

        if(props && 'query' in props) {
            for (const [key, value] of Object.entries(props.query)) {
                this.state.query.push(`${key}=${value}`)
            }
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
        return this.createRequestLink(
            this.state.query,
            this.state.resource,
            this.state.path,
            this.state.domain,
            this.state.protocol
        )
        
        
    }

    createRequestLink(query, resource, path, domain, protocol){
        if(!query) query = this.state.query
        if(!resource) resource = this.state.resource
        if(!path) path = this.state.path
        if(!domain) domain = this.state.domain
        if(!protocol) protocol = this.state.protocol
        return [
            protocol,
            '://',
            domain,
            path,
            resource.replace(/\s+/, ''),
            '?',
            query.join('&')
        ].join('');
    }

    async requestResource(handlerFunction){
        const headers = {
            'Content-Type': 'text/plain',
            'SameSite': 'Strict',
        };

        const link = this.getRequestLink();

        const setResponse = (link, response, status)=> {

            if(this.state.cache && !status) {
                response = this.getCache(link)
                console.log('Response: Cache =>', response)
            }

            this.setState({
                response: response,
                data: (('data' in response)) ? response.data[this.state.resource] : {},
                status: ( status && Object.keys(response.data).length > 0 ),
            })

            if(this.state.cache && status) {
                // The values to be cached comes from the actual state
                this.saveCache()
            }
            
            this.handlerFunction(this.state.handler)
        }


        // If is to use cache responses
        if(false && this.state.cache){
            const getCache = this.getCache(link)
            getCache.then(r => {
                if(r){
                    console.log('CACHEEE', r)
                    const cache = JSON.parse(r)
                    if(cache && 'status' in cache && cache.status == true && 'link' in cache && 'response' in cache){
                        setResponse(link, cache.response, true)
                        return cache
                    }
                }
            })
        }

        const response = await axios.get(
            link
            ).then(r => {
                if(this.props.check) return r;
                console.log('Response: AXIOS =>', r)
                setResponse(link, r, true)
                return r
            })
            .catch(e => {
                if(this.props.check) return false;
                setResponse(link, e, false)
                return e
            }
        )
        return response
    }

    async handlerFunction(handler) {
        if(typeof this.state.handler == 'function'){
            const handlerResponse = await handler(this.state.data)
            return handlerResponse
        }
        return null;
    }

    saveCache(){
        if( !this.state.status ) return false
        const data = {
            status: this.state.status,
            resource: this.state.resource,
            link: this.getRequestLink(),
            response: this.state.response,
        }
        return new CacheRequest({key: data.link}).write(data)
    }

    getCache(link){
        return getCache(link,this.state.userIsConnected)
    }

}

const getCache = (link, userIsConnected) => {
    if(true || !userIsConnected){
        const cache = new CacheRequest({key: link})
        return cache.read()
    } 
}