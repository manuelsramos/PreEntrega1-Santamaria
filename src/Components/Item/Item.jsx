import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export const Item = ({ product }) => {
    return (
        <Link to={`/detail/${product.id}`}>
            <Card Card style={{ width: '18rem' }}>
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
            </Card>
        </Link>
    )
}



