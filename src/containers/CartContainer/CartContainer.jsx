import React, { useState } from 'react'
import BuyOrder from '../../Components/BuyOrder/BuyOrder';
import CartInfo from '../../Components/CartInfo/CartInfo';
import EmptyCart from '../../Components/EmptyCart/EmptyCart';
import InputForm from '../../Components/InputForm/InputForm'
import { useCartContext } from '../../Context/Cartcontext';

const CartContainer = () => {
    const { cartList } = useCartContext();

    const [orderId, setOrderId] = useState(null);

    return (
        <div className='emptycart'>
            {cartList.length > 0 && !orderId
                ? <>
                    <CartInfo />
                    <InputForm setOrderId={setOrderId} />
                </>
                : orderId
                    ? <BuyOrder id={orderId} />
                    : <div><EmptyCart /></div>
            }
        </div>
    )
};

export default CartContainer