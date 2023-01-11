import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import { Loader } from '../../Components/Loader/Loader'
import { gFetch } from '../../helpers/gFetch'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        gFetch(productId)
            .then(resp => setProduct(resp))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {loading
                ? <Loader />
                : <Container>
                    <Row>
                        <ItemDetail product={product} />
                    </Row>
                </Container>}
        </>
    )
}

export default ItemDetailContainer