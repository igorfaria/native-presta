import { Controller } from '../core/Controller'
import _l from '../core/Language'
import { Cart } from '../model/cart/Cart'
import { CartPage } from '../view/cart/CartPage'

export class CartController extends Controller {

    constructor(props){
        super(props)
        this.state = {
            cart: new Cart(),
            items: {}
        }

        
    }

    componentDidMount(){
        this.state.cart.getItems().then(items => {
            if(items){
                const products = {}
                items.forEach(item => {
                    if(item.id in products) {
                        products[item.id].quantity += 1
                    } else {
                        products[item.id] = {quantity: 1, item}
                    }
                })
                this.setState({items: products})
            }
        })
    }

    getListItems(){
        const list = []
        Object.keys(this.state.items).forEach((v,i) => list.push({...this.state.items[v]}))
        return list
    }

    render(){
        return <CartPage {...this.props} items={this.getListItems()}/>  
    }
}
