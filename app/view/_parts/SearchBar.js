import { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Stack, HStack, IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import _l from "../../core/Language";

import StyleMediaQuery from "../../component/StyleMediaQuery";
 
// autocomplete
const lDomain = 'SearchBar';

export class SearchBar extends Component {
    
    handleTextChange(search){
        console.log('SearchBar.handleTextChange', search);
    }

    handleTouchContainer(){
        console.log(this);
    }

    render(){
        return (
        <Stack center>
            <HStack style={ styles.container }>
            <HStack center style={ styles.inputContainer }>
                <TextInput
                    ref='InputSearch'
                    underlineColorAndroid={'transparent'}
                    onChangeText={this.handleTextChange}
                    style={ styles.searchInput }
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