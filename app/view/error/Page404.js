import { BasePageError } from "./BasePageError";
import _l from "../../core/Language";

export class Page404 extends BasePageError {
    render(){
        return (
            <BasePageError 
                title={ this.props.title ? this.props.title : "404" } 
                content={ this.props.content ? this.props.content : _l("Page not found") } />
        );
    }

}