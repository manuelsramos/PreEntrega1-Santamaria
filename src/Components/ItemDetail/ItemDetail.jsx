import React from 'react'
import { ItemCount } from '../../Components/ItemCount/ItemCount';

const ItemDetail = ({ product }) => {

    console.log(product)
    return (
        <div className="row">
            <h2>{product.name}</h2>
            <img src={product.photo} className='w-50' alt="Product image" />
            <h4>{product.description}</h4>

            <h5>Love doesn't buy with money. My price is: {product.price}</h5>
            < ItemCount />
        </div>
    )
}

export default ItemDetail