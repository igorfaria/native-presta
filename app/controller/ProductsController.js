import { Controller } from '../core/Controller' 
import { ProductsPage } from '../view/products/ProductsPage'

export class ProductsController extends Controller {

    constructor(props){
        super(props)
    }

    render(){
        return <ProductsPage {...this.props} />
    }
}
