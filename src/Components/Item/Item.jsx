import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'



export const Item = ({ product }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem', border: 'solid 1px #8C8B8B' }}>
            <Link style={{ textDecoration: 'none' }} to={`/detail/${product.id}`}>
                <Card.Img variant="top" src={product.photo} />
                <Card.Body style={{ border: 'solid 2px #E4E4E4', padding: '10px 0px', margin: '1px 0px 10px', backgroundColor: '#FFFFFF' }} className='card-img'>
                    <Card.Title style={{}}>{product.name}<br />$: {product.price},00 </Card.Title>

                </Card.Body>
            </Link>
        </Card>
    )
}



