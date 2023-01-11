import React, { createContext, useState, useContext } from 'react'


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addCart = (product) => {

        const notDuplicate = cartList.findIndex(product => product.id === product.id)
        if (notDuplicate === -1) {
            setCartList([
                ...cartList,
                product
            ])
        } else {
            cartList[notDuplicate].cantidad += product.cantidad

            setCartList([...cartList])
        }
    }



    const amountCartWidget = () => cartList.reduce((count, product) => count += product.cantidad, 0)

    const finalPrice = () => cartList.reduce((count, product) => count += product.price * product.cantidad, 0)

    const deleteItem = (id) => setCartList(cartList.filter(product => product.id != id))

    const deleteCart = () => setCartList([])

    return (
        <CartContext.Provider value={{
            cartList,
            addCart,
            deleteCart,
            amountCartWidget,
            finalPrice,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    );
};