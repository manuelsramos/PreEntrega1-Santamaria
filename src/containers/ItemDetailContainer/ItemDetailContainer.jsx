import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import { gFetch } from '../../helpers/gFetch'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()


    useEffect(() => {
        gFetch(productId)
            .then(resp => setProduct(resp))
    }, [])

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer