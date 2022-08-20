import { View, StyleSheet } from "react-native";
import { Product } from "../../model/resource/Product";
import { VStack, HStack, Text, Button } from "@react-native-material/core";
import _l from '../../core/Language';

export class ProductPage extends Product {
    render(){
        return (
        <View styles={ styles.container }>
            <VStack>
                
                <Text>Página do Produto</Text>
                
            </VStack>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    title: {
        marginVertical: 5,
        fontSize: 18,
        fontWeight: '600',
    },
    container: {
        flex: 1,
        padding: 10,
        overflow: 'hidden',
    }
});