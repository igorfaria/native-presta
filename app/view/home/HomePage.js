import { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { _l } from '../../core/@exports';
import { Products } from "../../model/@exports";
import { SearchBar } from "../_parts/SearchBar";
import { SwiperSlider } from "../_parts/SwiperSlider";
import { ProductGrid } from "../product/ProductGrid";

export class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
        <ScrollView style={ styles.container }>
            <SearchBar search={ _l("Search value") } />
            <SwiperSlider />
            <ProductGrid><Products {...this.props} query={{limit: 3}} /></ProductGrid>
        </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        marginTop: '2em',
        marginBottom: '2em',
        fontSize: '1.5em',
        fontWeight: 600,
    },
    container: {
        flex: 1,
        padding: "1rem",
        overflow: 'hidden',
    }
});