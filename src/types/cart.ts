import { Product } from "./shop"

export type NewProductForCart = Pick<Product, 'id' | 'price' | 'title' | 'image'>

export type CartProduct = NewProductForCart & {
    quantity: number
}

export type Cart = CartProduct[]
