import React from 'react'
import { useCartContext } from '../../Context/Cartcontext'
import { AiOutlineShoppingCart } from 'react-icons/Ai';

export const CartWidget = () => {

    const { amountCartWidget } = useCartContext()

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '2', marginTop: '0' }}>
            <div style={{ fontSize: '15px' }}>
                {amountCartWidget() > 0 && amountCartWidget()}
            </div>
            <AiOutlineShoppingCart style={{ fontSize: '1.8rem' }} />
        </div>
    )
}
