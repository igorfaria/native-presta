import AppConfig from '../../core/AppConfig'
import { Model } from '../../core/Model'
import { ProductItem } from '../../view/product/ProductItem'

export class Product extends Model {

    constructor(props){
        super(props);
        this.state.resource = 'products'
        const data = ('id' in props) ? props : false
        if(data){
            this.state.data = data
            if('id' in this.state.data) this.state.resource += `/${this.state.data.id}`
        }
    
    }

    getId(){
        return this.getData()?.id
    }

    getData(){
        const params = this.props?.route?.params ?? {}
        const state = this.state?.data ?? {}
        const props = this.props?.data ?? {}
        const merged = { ...props, ...state, ...params}
        return merged
    }

    getName(){
        return this.getData()?.name[AppConfig.lang]?.value ?? 'No name'
    }

    getPrice(quantity,noFormat){
        const data = this.getData();
        const price = data?.price ?? 0 
        const finalPrice = (quantity ?? 1) * price
        return finalPrice == 0 ? '' : (noFormat ? finalPrice : this.formatPrice(finalPrice))
    }

    getCover(){
        const data = this.getData()
        return ('id_default_image' in data) ? this.getImageUri(this.getId(), data.id_default_image) : false
    }

    getImageUri(productId, imageId){
        return this.createRequestLink(false, `images/products/${productId}/${imageId}`)
    }

    getDescription(){
        return this.getData()?.description[AppConfig.lang]?.value ?? '' 
    }
    
    getImages(){
        const data = this.getData()
        const images = []
        if(data?.associations){
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
        const id = this.getId()
     }

    addProductToCart = () => {
        alert('Add product to cart: ' + this.getId())
    }

    dataFromParams(){
        if('route' in this.props && 'id' in this.props.route.params) {
            let fromParams = {...this.props.route.params}
            this.state.data = fromParams
        }
    }

    render(){
        return (<ProductItem
                    {...this.props}
                    id={this.getId()}
                    name={this.getName()}
                    price={this.getPrice()}
                    cover={this.getCover()}
                    buttonLabel={this.props.buttonLabel ? this.props.buttonLabel : 'View more'}
                    />)
    }

}