import { Controller } from '../core/Controller'
import _l from '../core/Language'
import { Cart } from '../model/cart/Cart'
import { CartPage } from '../view/cart/CartPage'

export class CartController extends Controller {

    constructor(props){
        super(props)
        this.state = {
            cart: new Cart(),
        }
    }
    
    render(){
        return <CartPage {...this.props} {...this.state} />  
    }
}
