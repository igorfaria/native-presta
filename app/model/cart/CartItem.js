import { useState } from 'react'

export const CartItem = (props) =>{

    const item = {
        ...props
    }

    return {id: props.id, item: item}

} 