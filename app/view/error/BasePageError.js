import { Component } from "react";
import { VStack, Text } from "@react-native-material/core";
import { _l } from '../../core/@exports';

export class BasePageError extends Component {
    render(){
        return (
            <VStack spacing={ 4 } center style={ { flex: 1 } } >
                <Text style={ { fontSize: "2em", fontWeight: 500 } }>
                    { this.props.title ? this.props.title : _l("Title") }
                </Text>
                <Text>
                    { this.props.content ? this.props.content : _l("Error description :P") }
                 </Text>
            </VStack>
        );
    }

}