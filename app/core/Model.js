import { WebService } from './WebService'
import { FormatMoney } from '../component/FormatMoney'

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
        return FormatMoney(value)
    }
}
