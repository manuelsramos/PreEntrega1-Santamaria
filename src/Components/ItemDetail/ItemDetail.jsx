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
                <img src={product.photo} className='w-50' alt="Product image" />
                <div className='itemInfo'>
                    <h3 className='productTitle'>{product.name}</h3>
                    <h3 className='descriptionDetail'>{product.description}</h3>

                    <h4 className='priceDetail'>$: {product.price},00</h4>

                </div>
            </div>
            <div className="counterButton">
                {interButton
                    ?
                    <ItemCount stock={5}
                        initial={1}
                        onAdd={onAdd} />
                    : <InterCart />
                }
            </div>

        </ div>
    )
}

export default ItemDetail