import { Component } from 'react'
import { View, ScrollView } from 'react-native'
import _l from '../../core/Language'
import { CartRow } from './_parts/CartRow'
import { CartBottom } from './_parts/CartBottom'
import { Product } from '../../model/resource/Product'
import { Cart } from '../../model/cart/Cart'

export class CartPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidUpdate = () => this.setItemsState()

    setItemsState(){
        if(this.state.items !== this.props.items){
            this.setState({items: this.props.items})
        }
    }

    onDeleteHandler = (id) => {
        const removed = (new Cart()).removeItem(id)
        if(this.props?.update ?? false) this.props.update(id)
        return removed
    }

    render() {
        let totalValue = 0
        if(this.state.items.length == 0) return <></>
        return (
            <View style={ {flex: 1} }>
            <ScrollView style={ {paddingBottom: 60} }>
                { 
                    this.state.items.map( (value ,index) => {
                    const {item, quantity} = value
                    const product = new Product(item)
                    totalValue += parseFloat(product.getPrice(quantity, true))
                    return <CartRow 
                        onDelete={this.onDeleteHandler}
                        key={index} 
                        quantity={quantity} 
                        product={product} />
                    }
             )  }
            </ScrollView>
            
            <CartBottom total={totalValue}/>    
            </View>
        )
    }

}