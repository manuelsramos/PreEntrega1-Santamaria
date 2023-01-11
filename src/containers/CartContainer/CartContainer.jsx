import React from 'react'
import { useCartContext } from '../../Context/Cartcontext'


const CartContainer = () => {

    const { cartList, deleteCart, finalPrice, deleteItem } = useCartContext()


    return (
        <div>
            {cartList.map(product => <li key={product.id}>
                <img src={product.photo} alt="" className="w-25"></img>
                {product.name} - Amount: {product.cantidad}<button
                    className="btn btn-dark"
                    onClick={() => deleteItem(product.id)}
                >X</button></li>)}
            <h1>Total Price: {finalPrice()}</h1>
            <br></br>
            <button
                className="btn btn-dark"
                onClick={deleteCart}
            >Delete Cart</button>
        </div>
    )
}

export default CartContainer