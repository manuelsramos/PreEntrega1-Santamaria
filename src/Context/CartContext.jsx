import React, { createContext, useState, useContext } from 'react'


export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addCart = (item) => {

        const notDuplicate = cartList.findIndex(product => product.id === item.id)
        if (notDuplicate === -1) {
            setCartList([
                ...cartList,
                item
            ])
        } else {
            cartList[notDuplicate].cantidad += item.cantidad

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