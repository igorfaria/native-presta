import { useState } from 'react'
import { HStack, VStack } from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import { StyleSheet, Image, Text } from 'react-native'
import { Title } from '../../product/_parts/Title'

export const CartRow = ({product, quantity, onDelete}) => {

    const [hidden, setHidden] = useState(false)

    const handlerDelete = (id) => {
        setHidden(true)
        return (typeof onDelete === 'function') ? onDelete(id) : null
    }

    if(hidden) return null

    return (
        <HStack style={ styles.row }>
            <VStack>
                <Image source={ {uri: product.getCover()} } style={ styles.image } mode={ 'cover' }/>
            </VStack>
            <VStack style={ styles.content }>
                <HStack spacing={15}>
                    <VStack>
                        <Title style={ styles.title } content={product.getName()}  />
                        <Text>{ `Quantity: ${quantity}` } {quantity>1 ? `(${product.getPrice(quantity)})` : null}</Text>
                        
                    </VStack>
                    <VStack>
                        <Title style={ styles.price } content={product.getPrice()} />
                       
                    </VStack>
                    <VStack>
                        <Icon
                            onPress={() => handlerDelete(product.getId())} 
                            name="delete" style={ styles.deleteIcon } />
                    </VStack>
                </HStack> 
            </VStack>
        </HStack>
    )
}

const styles = StyleSheet.create({
    row: {
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        minWidth: 90,
        minHeight: 100,
    },
    content: {
        paddingHorizontal: 15,
        backgroundColor: 'rgba(255,255,255,.05)',
        flex: 1,
    },
    title: {
        fontSize: 14,
        marginVertical: 0,
        marginBottom: 15,
    },
    price: {
        color: 'green',
        fontSize: 16,
        marginVertical: 0,
    },
    delete: {
        alignSelf: 'center'
    },
    deleteIcon: {
        fontSize: 24,
        color: '#ccc',
        marginHorizontal: 15,
    }
})