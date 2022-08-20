import { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { VStack,HStack, Text, Button } from "@react-native-material/core";
import _l from '../../core/Language';

export class ProductItem extends Component {

    constructor(props){
      super(props);
    }

    handleButtonPress(){
      alert('Add to cart');
    }

    handleCardPress({navigation, id}){
      navigation.navigate('product', {id});
    }

    render(){
      return (
        <VStack style={ styles.card } spacing={ 4 }>
          <TouchableOpacity onPress={ this.props.onCardPress ? this.props.onCardPress : () => { this.handleCardPress(this.props) } }>
                
                <Text variant="h1" style={ styles.title }>{ this.props.name }</Text>
                
                <Image
                  style={ styles.cover }
                  source={{ uri: this.props.cover }}
                  resizeMode={ 'cover' } 
                />

                <HStack m={ 4 } style={ styles.actions }>
                  <Text style={ styles.price }>{ this.props.price }</Text>
                  <Button
                      style={ styles.button }
                      mode="contained"
                      onPress={ this.props.onButtonPress ? this.props.onButtonPress : this.handleButtonPress }
                      title={ this.props.buttonLabel ? this.props.buttonLabel : _l('View more') }
                    />  
                </HStack>

              </TouchableOpacity>
        </VStack>
      )
    }
}


const styles = StyleSheet.create({
    card: {
      margin: 10,
      minWidth: 320,
      maxWidth: 320,
      width: '100%',
      flexGrow: 1,
      paddingTop: 5,
      backgroundColor: '#FFFFFF',
      borderColor: '#D9D9D9',
      borderWidth: 1,
      borderStyle: 'solid',
    },
    actions: {
      justifyContent: 'space-between',
      margin: 5,
      paddingHorizontal: 10,
    },
    price: {
      fontSize: 22,
      fontWeight: '500',
      color: '#00a124',
      alignSelf:'center',
    },
    title: {
      margin: 5,
      fontSize: 18,
      fontWeight: '500',
    },
    cover: {
      flexDirection: 'column',
      minHeight: 250,
    },
    button: {
      color: 'white',
    }
});