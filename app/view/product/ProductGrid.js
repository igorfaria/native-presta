import { Component } from "react";
import { View, Text } from "react-native";

export class ProductGrid extends Component {
    render(){
      return (
        <View style={
            {
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flex: 1,
                marginVertical: 15,
                ...this.props.style
            }
         }>
          {this.props.children}</View>
      )
    }
}
