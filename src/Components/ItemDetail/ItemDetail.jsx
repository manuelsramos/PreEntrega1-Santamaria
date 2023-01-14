import React from 'react'
import { useState } from 'react';
import { ItemCount } from '../../Components/ItemCount/ItemCount';
import { useCartContext } from '../../Context/Cartcontext';
import InterCart from '../InterCart/InterCart';

const ItemDetail = ({ product }) => {

    const [interButton, setInterButton] = useState(true)
    const { addCart, cartList } = useCartContext();


    const onAdd = (cantidad) => {
        addCart({ ...product, cantidad })
        setInterButton(false);
    };

    console.log(cartList)
    return (
        <div className="row">
            <h2>{product.name}</h2>
            <img src={product.photo} className='w-50' alt="Product image" />
            <h4>{product.description}</h4>

            <h5>Just in time! My price is: {product.price}</h5>
            {interButton
                ?
                < ItemCount stock={5}
                    initial={1}
                    onAdd={onAdd} />
                : <InterCart />
            }

        </div>
    )
}

export default ItemDetail