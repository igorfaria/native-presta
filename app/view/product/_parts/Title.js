import { Text } from '@react-native-material/core'
import { StyleSheet } from 'react-native'

export const Title = (props) => {
    let propsStyle = props?.style ?? {}
    if(typeof propsStyle === 'number') propsStyle = StyleSheet.flatten(propsStyle)
    
    return <Text style={ { ...styles.title, ...propsStyle} }>{props.content}</Text>
}

const styles = {
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 15,
    }
}