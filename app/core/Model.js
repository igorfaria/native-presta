import AppConfig from './AppConfig'
import { WebService } from './WebService'
import Intl from 'intl'
import pt from 'intl/locale-data/jsonp/pt-PT'

export class Model extends WebService {

    constructor(props){
        super(props)
    }

    async get(){
        return this.request('GET')
    } 

    async add(){
        return this.request('POST')
    }

    async update(){
        return this.request('PUT')
    }

    async delete(){
        return this.request('DELETE')        
    }

    formatPrice(value) {
        var formatter = new Intl.NumberFormat(pt, {
            style: 'currency',
            currency: AppConfig.price.currency
        });
        return formatter.format(parseFloat(value));
    }
}
