import { Component } from "react";
import { BasePageError } from "./BasePageError";
import _l from '../../core/Language';

export class NotConnected extends Component {
    render(){
        return (
            <BasePageError 
                title={ this.props.title ? this.props.title : "503" } 
                content={ this.props.content ? this.props.content : _l("You have no connection with the internet :(") } />
        );
    }
}