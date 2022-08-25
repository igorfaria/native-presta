import { Controller } from '../core/Controller'
import _l from '../core/Language'
import { ProductPage } from '../view/product/ProductPage'
import { Page404 } from '../view/error/Page404'


export class ProductController extends Controller {

    constructor(props){
        super(props)
    }
    
    render(){
        return (
            (this?.props?.route?.params?.id ?? false)
                ? <ProductPage {...this.props} />  
                : <Page404 content={ _('Product not found') }  />
        )
    }
}
