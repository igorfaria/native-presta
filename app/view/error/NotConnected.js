import { Product } from "../../model/@exports";
import { VStack, Text } from "@react-native-material/core";
import { _l } from '../../core/@exports';

export class NotConnected extends Product {
    render(){
        return (
            <VStack spacing={ 4 } center>
                <Text style={ { fontSize: "2em", fontWeight: 500 } }>
                    { this.props.title ? this.props.title : "503" }
                </Text>
                <Text>
                    { this.props.content ? this.props.content : _l("You have no connection with the internet :(") }
                 </Text>
            </VStack>
        );
    }

}