import { Controller } from "../core/Controller";
import AppConfig from "../core/AppConfig";
import _l from "../core/Language";
import { ProductPage } from "../view/product/ProductPage";
import { Page404 } from "../view/error/Page404";


export class ProductController extends Controller {

    constructor(props){
        super(props);
    }
    
    render(){
        if(!this.props.route.params || !this.props.route.params.id) return <Page404 content={ "Product not found" }  />
        return (
            <ProductPage 
                {...this.props}
            />
        )
    }

}

