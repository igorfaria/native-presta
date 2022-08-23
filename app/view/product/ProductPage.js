import { StyleSheet, Dimensions, ScrollView, View, Image } from 'react-native'
import { Product } from '../../model/resource/Product'
import { Text } from '@react-native-material/core'
import _l from '../../core/Language'
import { TopFixedSearch } from '../_parts/TopFixedSearch'
import { ProductGallery } from './ProductGallery'
import StyleMediaQuery from '../../component/StyleMediaQuery'

const lDomain = 'productPage'

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
        const screenHeight = Dimensions.get('screen').height
        return (
        <>  
            <TopFixedSearch {...this.props} />
            <ScrollView
                contentContainerStyle={ styles.scrollContainer } >
                
                <View style={ styles.container }>

                    <Text style={ styles.title }>{this.getName()}</Text>
                    
                    <View style={{maxWidth: '100%'}}>
                        <ProductGallery 
                            optionsWrapper = { {style: styles.slideWrapper} }
                            slides={this.getImages()}
                            />
                    </View>
                    
                    <View style={ styles.descriptionContainer }>
                        <Text style={ styles.subtitle }>{_l('Description', lDomain)}</Text>
                        
                        <Text>{this.getDescription()}</Text>
                        
                    </View>
                </View>
            </ScrollView>
        </>
        )
    }

}

const styles = StyleSheet.create({
    title: {
        marginVertical: 15,
        fontSize: 24,
        fontWeight: '600',
    },
    subtitle: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: '600',
    },
    slideWrapper: {
        maxHeight: 250,
    },
    container: {
        alignItems: 'flex-start',
    },
    scrollContainer: {
        padding: 10,
        marginTop: 90,
        paddingBottom: 100,
        ...StyleMediaQuery({
            650: {
                paddingBottom: 10, 
            }
        }),
        backgroundColor: '#e5e5e5',
    },
    descriptionContainer: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginVertical: 15,
        padding: 5,
    }
})