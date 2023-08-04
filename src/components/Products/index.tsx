"use client"
import { Product } from '@/types/shop'
import React from 'react'
import SingleProduct from './Product'
type Props = {
    products: Product[]
}

const Products : React.FC<Props> = ({products}) => {
  return (
    <div className='container grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {products?.map((product) => <SingleProduct key={product.id} {...product} />)}
    </div>
  )
}

export default Products