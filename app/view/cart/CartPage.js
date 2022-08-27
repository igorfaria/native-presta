import { Component } from 'react'
import { ScrollView } from 'react-native'
import _l from '../../core/Language'
import { CartRow } from './_parts/CartRow'
import { Product } from '../../model/resource/Product'

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

    render() {
        if(this.state.items.length == 0) return <></>
        return (
            <ScrollView>
                { 
                    this.state.items.map( (value ,index) => <CartRow 
                        key={index} 
                        quantity={value.quantity} 
                        product={new Product(value.item)} />
             )  }
            </ScrollView>
        )
    }

}