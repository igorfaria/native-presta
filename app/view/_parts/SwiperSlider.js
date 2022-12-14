/*
    https://github.com/leecade/react-native-swiper#properties
    https://github.com/leecade/react-native-swiper#custom-basic-style--content
*/
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper/src";

export class SwiperSlider extends Component {

    constructor(props){
      super(props);
      this.state = {
        options: props.options ? props.options : { autoplay: true },
        optionsWrapper: props.optionsWrapper ? props.optionsWrapper : {},
        optionsSlide: props.optionsSlide ? props.optionsSlide : {},
        slides: props.slides ? props.slides : []
      }
    }
    render(){
      const slides = [...this.props.slides]
      const wrapperStyle = {...StyleSheet.flatten(styles.wrapper), ...(this.state.optionsWrapper.style || {})}
      return (
          <View {...this.state.optionsWrapper} style={ wrapperStyle } >
            <View style={ {flex: 1, maxWidth: '100%' } }>
            <Swiper {...this.state.options}>
            {slides.map((item, idx) => {
              const slideStyle =  Object.assign({}, 
                StyleSheet.flatten(styles.slide), 
                this.state.optionsSlide.style || {},
                item.style || {}
              );
              return (
                <View 
                  key={ idx } {...this.state.optionsSlide} 
                  style={ slideStyle }>
                  {item.content ? item.content : <></>}
                </View>
              );
            })}
            </Swiper>
            </View>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        maxHeight: 350,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      padding: 10,
    }
  })