import { Cart, NewProductForCart } from '@/types/cart';
import { Product } from '@/types/shop';
import { useContext } from "react";
import { CartContext } from './../contexts/CartContext';

const useCart = () => {
    const {cart, dispatch} = useContext(CartContext)
    const addToCart = (product: NewProductForCart) => {
        dispatch({
            type: 'addProduct',
            payload: product
        })
     }

     const removeFromCart = (productId: number) => {
        dispatch({
            type: 'removeProduct',
            payload: productId
        })
     }

     const clearCart = () => {
        dispatch({
            type: 'clearCart',
        })
     }

     const getCartSize = () => {
        return cart.reduce((acc, curr) => acc + curr.quantity ,0)
     }

     const getTotalAmount = () => {
        return cart.reduce((acc, curr) => acc + (curr.price *  curr.quantity)  ,0).toFixed(2)
     }

     return {
        addToCart,
        removeFromCart,
        clearCart,
        getCartSize,
        getTotalAmount,
        cart,
     }
}


export const cartReducer = (cart: Cart, action: any) => {

    switch (action.type) {
        case 'addProduct': {
            const newProduct: Product = action.payload
            let cartProducts = [...cart]
            let isNewProduct = true;

            // Update quantity if the product is already in cart
            cartProducts?.map((product)  => {
                if(product.id === newProduct.id) {
                    isNewProduct = false
                    return {
                        ...product,
                        quantity: ++product.quantity
                    }
                } 
                return product
            })

            if(isNewProduct) {
                cartProducts.push({
                    id: newProduct.id,
                    title: newProduct.title,
                    price: newProduct.price,
                    quantity: 1,
                    image: newProduct.image
                })
            }
            localStorage.setItem('cart', JSON.stringify(cartProducts))
            return cartProducts
        }
        case 'removeProduct': {
            const productIdToRemove: number = action.payload;

            let cartProducts = [...cart]

            let isOneInQuantity = true;

            // Subtract quantity is it's more then 1
            cartProducts.map(product => {
                if(productIdToRemove === product.id && product.quantity > 1) {
                    isOneInQuantity = false;
                    return {
                        ...product,
                        quantity: --product.quantity
                    }
                }
                return product
            })

            if(isOneInQuantity) {
                cartProducts = cartProducts.filter((product) => product.id != productIdToRemove)
            }
            localStorage.setItem('cart', JSON.stringify(cartProducts))

            return cartProducts
        }
        case 'clearCart': {
            localStorage.setItem('cart', JSON.stringify([]))
            return []
        }
        
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}


export default useCart