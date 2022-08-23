import { ScrollView, View } from 'react-native'
import StyleMediaQuery from '../../component/StyleMediaQuery'

export const ScrollContainer = ({props, children}) => {
    return (
        <ScrollView {...props}>
            <View style={ { paddingTop: 90 } }>{children}</View>
        </ScrollView>
    )
    
}

const styles = {
    padding: 10,
    marginTop: 90,
    paddingBottom: 100,
    ...StyleMediaQuery({
        650: {
            paddingBottom: 10, 
        }
    }),
    backgroundColor: '#e5e5e5',
}