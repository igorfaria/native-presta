import { Component } from "react";

export class Language extends Component {
    getTranslation(string, domain){
        return string;
    }
}

const _l = (string,domain) => {
    return (new Language).getTranslation(string,domain);
}

export default _l;