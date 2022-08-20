import { Controller } from "../core/Controller";
import { HomePage } from "../view/home/HomePage";

export class HomeController extends Controller {
    
    constructor(props) {
        super(props);
    }

    render(){
        return <HomePage {...this.props} />
    }
}
