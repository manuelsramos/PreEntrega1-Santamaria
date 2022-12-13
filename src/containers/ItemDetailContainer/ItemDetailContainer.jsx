import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const { productId } = useParams()
    console.log(productId)

    return (
        <ItemDetail />
    )
}

export default ItemDetailContainer