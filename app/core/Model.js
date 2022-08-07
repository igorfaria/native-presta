import { AppConfig } from "./@exports";
import { WebService } from "./WebService";

export class Model extends WebService {

    constructor(props){
        super(props);
    }

    async get(){
        return this.request('GET');
    } 

    async add(){
        return this.request('POST');
    }

    async update(){
        return this.request('PUT');
    }

    async delete(){
        return this.request('DELETE');        
    }

    formatPrice(value) {
        var formatter = new Intl.NumberFormat(AppConfig.price.country, {
            style: 'currency',
            currency: AppConfig.price.currency
        });
        return formatter.format(parseFloat(value));
    }
}
