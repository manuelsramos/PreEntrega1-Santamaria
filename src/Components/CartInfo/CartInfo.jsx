import React from 'react';
import { useCartContext } from '../../Context/Cartcontext';
import { BiTrash } from "react-icons/bi";

import './CartInfo.css'


const CartInfo = () => {
    const { cartList, deleteCart, finalPrice, deleteItem } = useCartContext();

    return (
        <>
            {cartList.map((product => (
                <div className="cartList-product">
                    <div key={product.id}>
                        <li>
                            <img src={product.photo} alt="" className="w-25" />
                            <label className='productInfo'>{product.name} - </label><label className="amountProduct">Amount: {product.cantidad} - $: {product.price} </label>

                            <button
                                className="btn btn-dark"
                                onClick={() => deleteItem(product.id)}
                            >
                                <BiTrash />
                            </button>
                        </li>

                    </div>
                </div >)))
            }

            <h1 className='totalPrice'>Total: {finalPrice()},00</h1>
            <br></br>
            <div className="delete-button">
                <button
                    className="btn btn-dark"
                    onClick={deleteCart}
                >
                    Delete Cart
                </button>
            </div>



        </>
    )

};

export default CartInfo;