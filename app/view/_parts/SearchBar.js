import { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Stack, HStack, VStack, IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { _l } from "../../core/@exports";

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
                    underlineColorAndroid={'trnasparent'}
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
        marginVertical: '1rem',
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        fontSize: '1rem',
        paddingVertical: '1rem',
        paddingHorizontal: '0.5rem',
    },
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 100,
        paddingStart: '2rem',
        width: '94vw',
        ...StyleMediaQuery({
            1024: {
                width: '60vw',
            }
        }),
    },
    buttonSearch: {
        marginRight: 2,
        backgroundColor: '#f5f5f5'
    },
    iconSearch: {
        fontSize: '1.5rem',
    }
});