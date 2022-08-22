import { Component } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import _l from '../../core/Language';
import { Products } from "../../model/resource/Products";
import { SearchBar } from "../_parts/SearchBar";
import { SwiperSlider } from "../_parts/SwiperSlider";
import { ProductGrid } from "../product/ProductGrid";
import StyleMediaQuery from "../../component/StyleMediaQuery";

export class HomePage extends Component {

    constructor(props){
        super(props);
    }

    sliderHomeOptions(){
        return {
            optionsWrapper: {
                style: {
                    height: 200,
                    ...StyleMediaQuery({
                        768: {
                        height: 350,
                        }
                    }),
                    backgroundColor: 'lime',
                }
            },
            options: {
                horizontal: true,
                showsButtons: false,
                showsPagination: false,
            },
            optionsSlide: {
                style: {
                    backgroundColor: 'red',
                }
            }
        }
    }

    slidesHome(){
        return [
            {
                style: {
                    backgroundColor: 'blue',
                    color: 'lime',
                },
                content: (
                    <Text>Slide 1</Text>
                )
            },
            {
                style: {
                    backgroundColor: 'yellow'
                },
                content: (
                    <Text>Slide 2</Text>
                )
            },
            {
              style: {
                    backgroundColor: 'red'
                },
                content: (
                    <Text>Slide 3</Text>
                )
            }
        ];
    }

    render(){
        return (
        <ScrollView style={ styles.container }>
            
            <SearchBar search={ _l("Search value") } />
            
            <SwiperSlider 
                { ...this.sliderHomeOptions() }
                slides={ this.slidesHome() }
            />
            <ProductGrid><Products {...this.props} query={{limit: 6}} /></ProductGrid>
        </ScrollView>
        );
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
    }
});