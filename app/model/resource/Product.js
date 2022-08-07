import { 
    AppConfig, 
    Model 
} from '../../core/@exports';
import { ProductItem } from '../../view/product/ProductItem';

export class Product extends Model {

    constructor(props){
        super(props);
        this.state.resource = 'products';
    }

    async getProduct(){
        const data = this.getData();
        if('id' in this.props) this.state.data = await this.get(this.props.id);
        return false;
    }

    getId(){
        if('id' in this.props) return this.props.id;
        return 0;
    }

    getData(){
        if('data' in this.props) return this.props.data;
        return {};
    }

    getName(){
        const data = this.getData();
        if('name' in data && Array.isArray(data.name) && 'value' in data.name[AppConfig.lang]) return data.name[AppConfig.lang].value; 
        return 'No name';
    }

    getPrice(){
        const data = this.getData();
        if('price' in data) return this.formatPrice(data.price);
        return '';
    }

    getCover(){
        return 'http://presta.example.com/3-home_default/the-best-is-yet-to-come-framed-poster.jpg';
    }

    goToProductPage = () => {
        const id = ('id' in this.getData()) ? this.getData().id : 0;
        console.log(this.getData());
        return id;
     }

    addProductToCart = () => {
        const id = ('id' in this.getData()) ? this.getData().id : 0;
        alert('Add product to cart: ' + id);
    }

    render(){
        return (
            <>
                <ProductItem
                    {...this.props}
                    id={this.getId()}
                    name={this.getName()}
                    price={this.getPrice()}
                    cover={this.getCover()}
                    buttonLabel={this.props.buttonLabel ? this.props.buttonLabel : 'View more'}
                    />
            </>
        );
    }

}