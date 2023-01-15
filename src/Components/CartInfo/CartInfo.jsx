import React from 'react';
import { useCartContext } from '../../Context/Cartcontext';
import { BiTrash } from "react-icons/bi";

import './CartInfo.css'


const CartInfo = () => {
    const { cartList, deleteCart, finalPrice, deleteItem } = useCartContext();

    return (
        <>
            {cartList.map((product => (
                <div key={product.id}>
                    <li >
                        <img src={product.photo} alt="" className="w-25" />
                        <label className='productInfo'>{product.name} - Amount: {product.cantidad}</label>
                        <button
                            className="btn btn-dark"
                            onClick={() => deleteItem(product.id)}
                        >
                            <BiTrash />
                        </button>
                    </li>
                </div>)))}

            <h1 className='totalPrice'>Total Price: {finalPrice()}</h1>
            <br></br>
            <button
                className="btn btn-dark"
                onClick={deleteCart}
            >
                Delete Cart
            </button>



        </>
    )

};

export default CartInfo;