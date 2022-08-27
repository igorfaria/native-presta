import { Text } from '@react-native-material/core'
import { StyleSheet } from 'react-native'

export const Title = ( {content, style} ) => {
    let propsStyle = Array.isArray(style) ? style[0] : style
    if(typeof propsStyle === 'undefined') propsStyle = {}
    if(typeof propsStyle === 'number') propsStyle = StyleSheet.flatten(propsStyle)
    let finalStyle = {...styles.title, ...propsStyle}                                                                                                                         
    return (
        (typeof content == 'string')  
        ? <Text style={ finalStyle }>{content}</Text>
        : <></>
    )
}

const styles = {
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 15,
    }
}