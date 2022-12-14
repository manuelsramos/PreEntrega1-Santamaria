import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'


export const Item = ({ product }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Link to={`/detail/${product.id}`}>
                <Card.Img variant="top" src={product.photo} />
                <Card.Body className='card-img'>
                    <Card.Title className="card-title">{product.name}</Card.Title>
                    <Card.Text className="card-category">
                        {product.category}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}



