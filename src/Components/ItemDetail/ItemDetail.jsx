import React from 'react'
import { useState } from 'react';
import { ItemCount } from '../../Components/ItemCount/ItemCount';
import { useCartContext } from '../../Context/Cartcontext';
import InterCart from '../InterCart/InterCart';
import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    const [interButton, setInterButton] = useState(true)
    const { addCart, cartList } = useCartContext();


    const onAdd = (cantidad) => {
        addCart({ ...product, cantidad })
        setInterButton(false);
    };


    return (
        <div className="divDetail">
            <div className='divItem'>
                <h1 className='productTitle'>{product.name}</h1>
                <img src={product.photo} className='w-50' alt="Product image" />
                <div className='itemInfo'>
                    <h4 className='descriptionDetail'>{product.description}</h4>

                    <h5 className='priceDetail'>Just in time! My price is: {product.price}</h5>

                </div>
            </div>
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