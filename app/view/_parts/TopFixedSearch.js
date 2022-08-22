import { Component } from 'react'
import { StyleSheet } from 'react-native'
import { VStack, HStack, IconButton } from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SearchBar } from '../_parts/SearchBar'
import _l from '../../core/Language'
 
export class TopFixedSearch extends Component {

    constructor(props) {
        super(props)
    }

    handlerBackButton(){
        const { navigation, route } = this.props
        navigation.goBack()
    }

    render(){
        return (
            <HStack style={ styles.container }>
                <HStack style={ styles.containerColumn }>
                    <IconButton
                        style={ styles.iconButton } 
                        icon={props => <Icon name="arrow-left" style={ styles.icon }  />}  
                        onPress={() => this.handlerBackButton(this)}    
                    />
                </HStack>
                <HStack style={ styles.containerSearch }>
                    <SearchBar 
                        containerStyle={ styles.containerStyle }
                        containerInputStyle={ styles.containerInputStyle }
                        textInputStyle={ styles.textInputStyle }
                        search={ _l("Search value") } />
                </HStack>
                <HStack style={ styles.containerColumn }>
                    <IconButton
                        style={ styles.iconButton } 
                        icon={props => <Icon name="heart-outline" style={ styles.icon }  />}  />
                    <IconButton
                        style={ {...StyleSheet.flatten(styles.iconButton), marginHorizontal: 10} } 
                        icon={props => <Icon name="cart" style={ styles.icon }  />}  />
                </HStack>
            </HStack>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#f0f0f0',
        paddingVertical: 35,
        paddingHorizontal: 5,
        borderRadius: 3,
        marginTop: 40,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerColumn: {
    }, 
    iconButton: {
        backgroundColor: 'transparent',
    },
    icon: {
        fontSize: 22,
    },
    containerSearch: {
        flex: 1,
    },
    
    containerInputStyle: {
        marginTop: 0,
        marginBottom: 0,
        elevation: 1,
    },
    containerStyle: {
        flex: 1,
        marginBottom: 5,
        marginTop: 5,
    },
    textInputStyle: {

    }
})