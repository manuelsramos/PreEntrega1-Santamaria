import React from 'react'
import { Item } from '../Item/Item'
import Card from 'react-bootstrap/Card';


const ItemList = ({ products }) => {
    return (
        <>
            {products.map(product => <Card style={{ width: '18rem' }}>
                <Card key={product.id}> </Card>
                <Card.Img variant="top" src={product.photo} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.category}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Adopt me</Card.Link>
                    <Card.Link href="#">More info</Card.Link>
                </Card.Body>
            </Card>)}
        </>
    )
}

export default ItemList