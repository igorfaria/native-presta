import { Component } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import _l from '../../core/Language';
import { Products } from "../../model/resource/Products";
import { SearchBar } from "../_parts/SearchBar";
import { ProductGrid } from "../product/ProductGrid";

export class ProductsPage extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
        <ScrollView style={ styles.container }>
            
            <SearchBar search={ _l("Search value") } />

            <Text style={ styles.title }>{ _l('Products') }</Text>

            <ProductGrid><Products {...this.props} query={{limit: 32}} /></ProductGrid>
            
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        marginVertical: 5,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        padding: 10,
    }
});