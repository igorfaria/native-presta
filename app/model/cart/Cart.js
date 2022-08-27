import { Component } from 'react'
import { CartItem } from './CartItem'
import { CacheRequest } from '../../core/CacheRequest'

export class Cart extends Component {

    storage = new CacheRequest( {key: 'cart'} )

    constructor(item){
        super()
        this.state = {
            items: [],
        }

        if(item?.id ?? false) {
            this.addItem(item)
        }

        this.getItems().then(items => {
            if(!items) return false
            this.state.items = [...items]
        })

        // just to debug it 
        //this.storage.deleteAll()

    }
    
    addItem(item){
        if(item?.id ?? false){ 
            return this.getItems().then(items => {
                if(!items) items = []
                items.push(CartItem(item))
                this.state.items = items
                this.save()
            })
        } 
        return false
    }

    removeItem(id){
        if(id){
            return this.getItems().then(items => {
                if(!items) items = []
                items = items.filter((v,i) => v.id != id)
                //console.log('items', items)
                this.state.items = items
                this.save()
            })
        }
    }

    getItems(fromState){
        if(fromState) return this.state.items
        const read = this.storage.read()
        return read.then(
            (items) => {
                try {
                    items = JSON.parse(items)
                    this.state.items = items
                    return items 
                } catch(e) {
                    return false
                }
            }
        ) 
    }

    save(){
        return this.storage.write(this.state.items)
    }

}