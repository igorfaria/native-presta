import { Component, cloneElement } from "react";
import axios from "react-native-axios"; 
import AppConfig from "./AppConfig";
import { CacheRequest } from './CacheRequest';

export class WebService extends Component {
     
    constructor(props){
        super(props);
        const userIsConnected =  props?.routes?.params?.userIsConnected ?? false
                
        this.state = {
            resource: '',
            data: {},
            body: {},
            protocol: AppConfig?.domain_protocol ?? 'https',
            domain: AppConfig?.domain_uri,
            path: '/api/',
            query: [
                'output_format=JSON',
                'ws_key=' + AppConfig.api_key,
                'display=full',
            ],
            response: 'initial',
            status: false,
            handler: (response) => {},
            cache: props?.cache ?? true,
            userIsConnected: userIsConnected,
        }

        if(props?.query ?? false) for (const [key, value] of Object.entries(props.query)) this.state.query.push(`${key}=${value}`)
        
    }

    componentDidMount(){ return (this.props?.check ?? false) ? this.requestResource() : null }

    request(method){
        const request = this.requestResource( ( response ) => {
                    if(this.props.check) return response;
                    if(response) return this.state.data = response;
                    return false;
            }
        )
        return request
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
        return [ 
            protocol ?? this.state.protocol, '://', 
            domain ?? this.state.domain, 
            path ?? this.state.path, 
            (resource ?? this.state.resource).replace(/\s+/, ''), 
            '?', 
            (query ? query : this.state.query).join('&') 
        ].join('')
    }

    setResponse = (response, status) => {
        this.setState({
            response: response,
            data: response?.data[this.state.resource] ?? {},
            status: status,
        })
        if(this.state.cache && status) this.saveCache()            
        this.handlerFunction(this.state.handler)
    }


    async requestResource(handlerFunction){
        
        const link = this.getRequestLink()

        // If is to use cache responses
        const getCache = this.getCache(link)
        if(!this.props.check && this.state.cache){
            getCache.then(cache => {
                cache = JSON.parse(cache)
                
                if( (cache?.status ?? false) && (cache?.link ?? false) && (cache?.response ?? false) ){
                    this.setResponse(cache.response, true)
                    this.tryToRefreshCache()
                    return cache
                }
                
                return this.doRequest(link)
            })
        } else {
            return this.doRequest(link)
        }

    }

    async doRequest(link){
        return await axios.get( link ).then(response => {
                if(!this.props.check) this.setResponse(response, true)
                return response
            })
            .catch(error => {
                if(!this.props.check) this.setResponse(error, false)
                return error
            }
        )
    }

    async handlerFunction(handler) {
        return (typeof this.state.handler == 'function') ? await handler(this.state.data) : null
    }

    saveCache(){
        const data = {
            status: this.state.status,
            resource: this.state.resource,
            link: this.getRequestLink(),
            response: this.state.response,
        }
        return new CacheRequest({key: data.link}).write(data)
    }

    tryToRefreshCache(){
        this.state.cache = false
        this.requestResource( () => this.saveCache() )
    }

    getCache(link) { return getCache(link,this.state.userIsConnected) }

}

const getCache = (link, userIsConnected) => {
    if(true || !userIsConnected){
        const cache = new CacheRequest({key: link})
        return cache.read() ?? false
    } 
}