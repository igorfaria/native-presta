import { SwiperSlider } from '../../_parts/SwiperSlider'
import { View, Image, StyleSheet } from 'react-native'

export class Gallery extends SwiperSlider {

    constructor(props){
        super(props)
        this.state.slides = [...props.slides]
        this.state.options = {
            autoplay: true,
            showsButtons: this.getShowsButtons() ? true : false,
        }
    }

    getShowsButtons(){
        return (this.state.slides.length > 1) ? true : false
    }

    getSlides(){
        const slides = this.props.slides.map(slide => {
            slide.style = {...StyleSheet.flatten(styles.slide)}
            slide.content = this.getContent(slide)
            return slide
        })
        this.state.slides = slides
        this.state.options.showsButtons = this.getShowsButtons()
        return slides
    }

    getContent(slide){
        return (
            <View style={ styles.container }>
                <Image style={ {...StyleSheet.flatten(styles.slideItem), ...StyleSheet.flatten(styles.cover) }} blurRadius={10} source={{ uri: slide.uri }} resizeMode={ 'cover' }  />
                <Image style={ styles.slideItem } source={{ uri: slide.uri }} resizeMode={ 'contain' }  />
            </View>
        )
    }

    render(){
        return (
            <View style={ styles.wrapper }>
                <SwiperSlider 
                    {...this.props} {...this.state} 
                    slides={this.getSlides()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        maxWidth: '100%'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
    },
    slide: {
        padding: 0,
    },
    slideItem: {
        position: 'absolute',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    cover: {
        width: '1000%',
        height: '1000%'
    }
})