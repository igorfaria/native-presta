import { StyleSheet, View } from 'react-native'
import { Product } from '../../model/resource/Product'

import { TopFixedSearch } from '../_parts/TopFixedSearch'
import { ScrollContainer } from '../_parts/ScrollContainer'
import { Section } from './_parts/Section'
import { Title } from './_parts/Title'
import { Description } from './_parts/Description'
import { Gallery } from './_parts/Gallery'

import _l from '../../core/Language'
const lDomain = 'productPage'

export class ProductPage extends Product {

    constructor(props){
        super(props)
        this.dataFromParams()
    }
  
    componentDidUpdate = () => this.dataFromParams()
    componentDidMount = () => this.dataFromParams()
    
    render(){
        console.log(this.getData())
        const topFixedProps = {'navigation': this.props.navigation, 'route': this.props.route }
        return (
        <>  
            <TopFixedSearch {...topFixedProps} />
            
            <ScrollContainer>
                    
                    <Title style={ {marginHorizontal: 15} } content={this.getName()} />
                
                    <Gallery 
                        optionsWrapper = { {style: styles.slideWrapper} }
                        slides={this.getImages()} />
                    
                    <Section>     
                       <Description 
                            title={ _l('Description', lDomain) }
                            content={ this.getDescription() } />
                    </Section>
                    
            </ScrollContainer>
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
    slideWrapper: {
        maxHeight: 250,
    }
})