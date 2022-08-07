import { Product } from "../../model/@exports";
import { VStack,HStack, Text, Button } from "@react-native-material/core";
import { _l } from '../../core/@exports';

export class Page404 extends Product {
    render(){
        return (
            <VStack spacing={ 4 } center>
                <Text style={ { fontSize: "2em", fontWeight: 500 } }>
                    { this.props.title ? this.props.title : "404" }
                </Text>
                <Text>
                    { this.props.content ? this.props.content : _l("Page not found") }
                 </Text>
            </VStack>
        );
    }

}