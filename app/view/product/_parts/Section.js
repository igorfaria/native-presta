import { View, StyleSheet, useWindowDimensions } from 'react-native'

export const Section = ({ props, children }) => {
    
    let propsStyle = props?.style ?? {}
    if(typeof propsStyle === 'number') propsStyle = StyleSheet.flatten(propsStyle)
    
    const viewStyle = {...styles, ...propsStyle}

    const paddingSize = viewStyle?.padding ?? viewStyle?.paddingHorizontal ?? viewStyle?.paddingLeft ?? viewStyle?.paddingRight ?? 0
    const marginSize = viewStyle?.margin ?? viewStyle?.marginHorizontal ?? viewStyle?.marginLeft ?? viewStyle?.marginRight ?? 0

    const { width }  = useWindowDimensions()
    const maxWidthValue = width - (1.5 * (paddingSize + marginSize))
    
    return <View {...props} style={ {...viewStyle , maxWidth: maxWidthValue} }>{children}</View>

}

const styles = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    margin: 15,
    padding: 15,
}