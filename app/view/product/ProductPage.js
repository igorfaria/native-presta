import { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Product } from '../../model/resource/Product'
import { VStack, Text, Button } from '@react-native-material/core'
import _l from '../../core/Language'
import { TopFixedSearch } from '../_parts/TopFixedSearch'
import { ProductGallery } from './ProductGallery'

export class ProductPage extends Product {

    constructor(props){
        super(props)
        this.dataFromParams()
    }

    dataFromParams(){
        if('route' in this.props && 'id' in this.props.route.params) {
            let fromParams = {...this.props.route.params}
            this.state.data = fromParams
        }
    }
  
    componentDidUpdate(){
        this.dataFromParams()
    }

    componentDidMount(){
        this.dataFromParams()
    }

    render(){
        return (
        <VStack styles={ styles.container }>  
            <ScrollView style={ styles.scrollContainer }>
                <TopFixedSearch {...this.props} />
                <Text style={ styles.title }>{this.getName()}</Text>
                <ProductGallery 
                    optionsWrapper = { {style: styles.slideWrapper} }
                    slides={this.getImages()}
                />
            </ScrollView>
        </VStack>
        )
    }

}

const styles = StyleSheet.create({
    title: {
        marginVertical: 15,
        fontSize: 24,
        fontWeight: '600',
    },
    slideWrapper: {
        maxHeight: 400,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    scrollContainer: {
        flex: 1,
        padding: 10,
        minHeight: 5000,
    }
})