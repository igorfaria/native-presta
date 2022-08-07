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

     /* List resource using a GET request */
     show(){}

     /* Create resource using a POST request */
     create(){}

     /* Update resource using a PUT request */  
     update(){}

     /* Delete resource using a DELETE request */
     delete(){}
}
