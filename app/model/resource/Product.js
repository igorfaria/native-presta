import AppConfig from "../../core/AppConfig";
import { Model } from "../../core/Model";
import { ProductItem } from "../../view/product/ProductItem";

export class Product extends Model {

    constructor(props){
        super(props);
        this.state.resource = 'products';
        const data = ('id' in props) ? props : false
        if(data){
            this.state.data = data
            if('id' in this.state.data) this.state.resource += `/${this.state.data.id}`
        }
    
    }

    async getProduct(id){
        const hasProducts = ('data' in this.state && 'products' in this.state.data && this.state.data.products.length)

        if(!hasProducts) {
            await this.get()
            .then(t => {
                this.state.data = t
                t.data.products.forEach(product => {
                    if('id' in product && product.id == id){
                        this.setState({data: product})
                    }
                })
                return this
            })
            .catch(c => {
                return c
            }) 
            .finally(f => {
                return f
            })
        } else {
            this.state.data.products.forEach(product => {
                if('id' in product && product.id == id){
                    this.state.data = product
                }
            })
        }
       
        return this.getData();
    }

    getId(){
        const data = this.getData()
        if('id' in data) return data.id;
        return 0;
    }

    getData(){
        const params = this.props.route ? this.props.route.params : {}
        const state = this.state.data && this.state.data.length ? this.state.data : {}
        const props = this.props && this.props.data ? this.props.data : {}
        const data = {...props, ...params, ...state} 
        return data;
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
        const data = this.getData()
        if('id_default_image' in data){
            return this.getImageUri(data.id, data.id_default_image)
        }
    }

    getImageUri(productId, imageId){
        return this.createRequestLink(false, `images/products/${productId}/${imageId}`)
    }

    getImages(){
        const data = this.getData()
        const images = []
        if('associations' in data && 'images' in data.associations){
            data.associations.images.map(img => {
                images.push({
                    id: img.id,
                    uri: this.getImageUri(data.id, img.id)
                })
            })
        }
        return images 
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