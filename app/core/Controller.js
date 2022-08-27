import { Component } from "react";


export class Controller extends Component {

    views = {
        viewNotFound: 'ViewNotFound',
        view404: '404'
    }

    constructor(props){
        super(props);
        this.state = {
            route: '404',
            view: this.views.view404,
            data: {},
        }
     }

    componentDidMount(){
        const {navigation} = this.props
        return (!navigation) ? null : navigation.addListener('focus', () => this.componentMounted() )
    }

    componentMounted(handlerFunction){
        return null
    }
}
