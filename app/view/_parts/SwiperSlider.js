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
        options: props.options ? props.options : {
          autoplay: true,
        },
        optionsWrapper: props.optionsWrapper ? props.optionsWrapper : {},
        optionsSlide: props.optionsSlide ? props.optionsSlide : {},
        slides: props.slides ? props.slides : {}
      }
    }

    render(){
        return (
            <View style={styles.wrapper} {...this.state.optionsWrapper} >
              <View style={ {flex: 1 } }>
            <Swiper
              {...this.state.options} 
            >
              {this.state.slides.map((item, idx) => {
                const slideStyle =  Object.assign({}, 
                  StyleSheet.flatten(styles.slide), 
                  (this.state.optionsSlide.style ? this.state.optionsSlide.style : {}),
                  item.style ? item.style: {}
                );
                return (
                  <View 
                    key={ idx }
                    {...this.state.optionsSlide} style={ slideStyle }
                  >
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
        maxHeight: 350,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#888888',
      fontSize: 30,
      fontWeight: 'bold',
      padding: 10,
    }
  })