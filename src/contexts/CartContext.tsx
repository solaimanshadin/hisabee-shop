import { cartReducer } from '@/hooks/useCart'
import { Cart } from '@/types/cart'
import React, { createContext, useReducer } from 'react'


const initialCart: Cart =  [] 

type Props = {
    children: React.ReactElement | React.ReactElement[]
}

export const CartContext = createContext({
    cart: initialCart,
    dispatch: (_dispatchOption: any) => { }
})

const CartContextProvider: React.FC<Props> = ({ children }) => {
    const [cart, dispatch] = useReducer(
        cartReducer,
        JSON.parse(typeof window != 'undefined' ? (localStorage.getItem('cart') as any) || "[]" : "[]")
    );
    return (
        <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>
    )
}

export default CartContextProvider