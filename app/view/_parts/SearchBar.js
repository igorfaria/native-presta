import { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Stack, HStack, IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import _l from "../../core/Language";

import StyleMediaQuery from "../../component/StyleMediaQuery";
 
// autocomplete
const lDomain = 'SearchBar';

export class SearchBar extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            containerStyle: !('containerStyle' in props) ? {} : this.handleStyle(props.containerStyle),
            containerInputStyle: !('containerInputStyle' in props) ? {} : this.handleStyle(props.containerInputStyle),
            textInputStyle: !('textInputStyle' in props) ? {} : this.handleStyle(props.textInputStyle),
            
        }
    }
    
    handleStyle(style){
        let parsedStyle = {}
        if(typeof style == 'number') parsedStyle = StyleSheet.flatten(style)
        if(typeof style == 'object') parsedStyle = style
        return parsedStyle
    }

    handleTextChange(search){
        console.log('SearchBar.handleTextChange', search)
    }

    handleTouchContainer(){
        const slides = []
        console.log(this)
        return slides
    }

    render(){

        const containerInputStyle = {...StyleSheet.flatten(styles.inputContainer), ...this.state.containerInputStyle}
        const containerStyle = {...StyleSheet.flatten(styles.container), ...this.state.containerStyle}
        const textInputStyle = {...StyleSheet.flatten(styles.searchInput), ...this.state.textInputStyle}

        return (
        <Stack center style={ { width: '100%'} }>
            <HStack style={ containerStyle }>
            <HStack center style={ containerInputStyle }>
                <TextInput
                    ref='InputSearch'
                    underlineColorAndroid={'transparent'}
                    onChangeText={this.handleTextChange}
                    style={ textInputStyle }
                    placeholder={ _l("Search for anything...", lDomain) }
                />
                <IconButton
                    style={ styles.buttonSearch } 
                    icon={props => <Icon name="magnify" style={ styles.iconSearch }  />}  />
            </HStack>
            </HStack>
        </Stack>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop:20,
        marginBottom: 15,
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        fontSize: 16,
        padding: 5,
    },
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 100,
        paddingVertical: 3,
        paddingStart: 8,
        width: '94%',
        ...StyleMediaQuery({
            1024: {
                width: '60%',
            }
        }),
    },
    buttonSearch: {
        marginRight: 5,
        backgroundColor: '#f5f5f5'
    },
    iconSearch: {
        fontSize: 22,
    }
});