import { Component } from "react"


export class Cart extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            items: {},
            total: 0.0,
        }
    }

    addItem = (item) => {
        const id = item?.id ?? false
        if(!id) return false
        const newItems = {...this.state.items, ...{id, item}} 
        return this.setState(newItems)
    }

    componentDidMount(){
        if(this.props?.id) this.addItem(this.props)
    }

    render(){
        console.log(this.state.items)
        return <></>
    }
}