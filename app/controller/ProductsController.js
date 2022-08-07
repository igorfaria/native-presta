import { Controller } from "../core/Controller";
import { StyleSheet, ScrollView } from "react-native";
import { ProductGrid } from "../view/product/ProductGrid";
import { Products } from "../model/resource/Products";

export class ProductsController extends Controller {

    render(){
        return (
            <ScrollView style={ styles.container }>
                <ProductGrid><Products {...this.props} query={{limit: 3}} /></ProductGrid>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "1rem",
        overflow: 'hidden',
    }
});