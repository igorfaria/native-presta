import { Component } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { VStack, HStack, Text, Button } from "@react-native-material/core"
import _l from '../../core/Language'
import StyleMediaQuery from '../../component/StyleMediaQuery'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export class ProductItem extends Component {

    constructor(props){
      super(props);
    }

    handleButtonPress({navigation, id}){
      alert('Add to cart ' + id.id);
    }

    handleCardPress(props){
      const {navigation, data} = props
      navigation.navigate('product', data);
    }

    render(){
      return (
        <VStack style={ styles.card } spacing={ 4 }>
          <TouchableOpacity onPress={ this.props.onCardPress ? this.props.onCardPress : () => { this.handleCardPress(this.props) } }>
                
                <Text variant="h1" style={ styles.title }>{ this.props.name }</Text>
                
                <Image style={ styles.cover } source={{ uri: this.props.cover }} resizeMode={ 'cover' }  />

                <HStack m={ 4 } style={ styles.actions }>
                  <Text style={ styles.price }>{ this.props.price }</Text>
                  <Button
                      style={ styles.button }
                      mode="contained"
                      disableElevation
                      onPress={ this.props.onButtonPress ? this.props.onButtonPress : () => { this.handleButtonPress(this.props) } }
                      title={ this.props.buttonLabel ? this.props.buttonLabel : _l('View more') }
                    />  

                  <Button
                      style={ styles.buttonMobile }
                      mode="contained"
                      disableElevation
                      compact
                      onPress={ this.props.onButtonPress ? this.props.onButtonPress : () => { this.handleButtonPress(this.props) } }
                      title={<Icon name="cart-plus" style={ styles.buttonMobile } />}
                    />  


                </HStack>

              </TouchableOpacity>
        </VStack>
      )
    }
}


const styles = StyleSheet.create({
    card: {
      margin: 5,
      minWidth: 120,
      maxWidth: 350,
      width: '45%',
      flexGrow: 1,
      ...StyleMediaQuery({
          1024: {
            minWidth: 320,
            width: '100%',
          }
      }), 
      paddingTop: 5,
      backgroundColor: '#FFFFFF',
      borderColor: '#D9D9D9',
      borderWidth: 1,
      borderStyle: 'solid',
    },
    actions: {
      justifyContent: 'space-between',
      margin: 5,
      paddingHorizontal: 0,
      ...StyleMediaQuery({
        1024: {
          paddingHorizontal: 5,
        }
      }),
    },
    price: {
      fontSize: 16,
      fontWeight: '700',
      ...StyleMediaQuery({
        1024: {
          fontSize: 22,
        }
      }),
      color: '#00a124',
      alignSelf:'center',
    },
    title: {
      marginVertical: 5,
      marginHorizontal: 10,
      marginTop: 0,
      fontSize: 14,
      fontWeight: '700',
      letterSpacing: 1, 
      ...StyleMediaQuery({
        1024: {
          fontSize: 18,
          letterSpacing: 0.9, 
        }
    }),
    },
    cover: {
      flexDirection: 'column',
      minHeight: 200,
      ...StyleMediaQuery({
          1024: {
            minHeight: 250,
          }
      }),
    },
    button: {
      display: 'none',
      color: 'white',
      ...StyleMediaQuery({
          1024: {
            display: 'flex'
          }
      }),
    },
    buttonMobile: {
      color: 'white',
      paddingHorizontal: 0,
      width: 'auto',
      fontSize: 18,
      ...StyleMediaQuery({
        1024: {
          display: 'none',
        }
      }),
    }
});