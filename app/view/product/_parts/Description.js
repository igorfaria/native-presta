import { StyleSheet } from 'react-native'
import { Title } from '../_parts/Title'
import { HTML } from '../../_parts/HTML'


export const Description = (props) => {
    return (
        <>
            <Title style={ styles.subtitle } content={props.title} />
            <HTML content={props.content} />
        </>
    )


}


const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 0,
    }
})