import { Component } from 'react'
import { ScrollView } from 'react-native'
import _l from '../../core/Language'
import { CartRow } from './_parts/CartRow'
import { Product } from '../../model/resource/Product'

export class CartPage extends Component {

    constructor(props){
        super(props)
    }

    render() {
        if(this.props.items.length == 0) return <></>
        return (
            <ScrollView>
                { 
                    this.props.items.map( (value ,index) => <CartRow 
                        key={index} 
                        quantity={value.quantity} 
                        product={new Product(value.item)} />
             )  }
            </ScrollView>
        )
    }

}