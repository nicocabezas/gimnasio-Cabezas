import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])


export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])


    const addProd = (prod, cantidad) => {
        let inCartList = cartList.find((cartProd) => cartProd.id === prod.id);

        if (inCartList) {
            inCartList.cantidad += cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...prod, cantidad }])
        }

    }


    const deleteProd = (id) => {
        setCartList(cartList.filter((i) => i.id !== id))
    }

    const cantProd = () => {
        return cartList.reduce((acum, prod) => acum = acum + prod.cantidad, 0)

    }
    
    const sumPrecioProd = () => {
        return cartList.reduce((acum, prod) => acum = acum + prod.price, 0)

    }   
  
    const totalPrice = () => {
        return cartList.reduce((acum, prod) => (acum += prod.price * prod.cantidad), 0)
    }
    


    const deleteCart = () => {
        setCartList([])
    }



    return (
        <CartContext.Provider value={
            {
                cartList,
                addProd,
                deleteCart,
                deleteProd,
                cantProd,
                sumPrecioProd,
                totalPrice
                
                
                
            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


