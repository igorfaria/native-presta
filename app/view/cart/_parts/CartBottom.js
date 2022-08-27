import { StyleSheet, Text } from 'react-native'
import { HStack, Button } from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { FormatMoney } from '../../../component/FormatMoney'
import _l from '../../../core/Language'

const lDomain = 'cartBottom'

export const CartBottom = ({total}) => {

    return (
            <HStack style={ styles.container }>
                <HStack>
                    <Text style={ styles.title }>Total:</Text> 
                    <Text style={ styles.price }>{FormatMoney(total)}</Text>
                </HStack>
                <Button title={_l('ORDER', lDomain)} trailing={props => <Icon name="send" {...props} />} />
            </HStack>
    )
    
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#EEE',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 600,
    },
    price: {
        marginLeft: 15,
        fontSize: 24,
        fontWeight: 600,
        color: 'green'
    }
})