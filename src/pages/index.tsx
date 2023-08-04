import Categories from '@/components/Categories'
import HeroSection from '@/components/HeroSection'
import Products from '@/components/Products'
import SortingWidget from '@/components/SortingWidget'
import { queryClient } from '@/queryClient'
import { Category, Product } from '@/types/shop'
import {
  dehydrate, useQuery
} from '@tanstack/react-query'
import { useState } from 'react'
export const dynamic = 'force-dynamic'

type Sort = 'asc' | 'desc'
interface ProductQuery {
  category: string,
  sort: Sort
}

const initialProductQuery = {
  category: 'all categories',
  sort: 'desc' as const
}
const getProducts  = async({category, sort}: ProductQuery): Promise<Product[]> => {
  const data = await fetch(`https://fakestoreapi.com/products${category==='all categories' ? '' : `/category/${category}`}?sort=${sort}`)

  return await data.json()

}



const getCategories = async () : Promise<Category[]> => {
  const data = await fetch(`https://fakestoreapi.com/products/categories`)

  return data.json()
  
}
export default  function Home({categories}: {categories: Category[]}) {
  const [productQuery, setProductQuery] = useState(initialProductQuery)
  const { data: products} = useQuery(['products', productQuery], () => getProducts(productQuery))
  
  const handleCategoryChange = (category: Category) => {
    setProductQuery((query) => ({...query, category}))
  }

  const handleSort = (sort: Sort) => {
    setProductQuery((query) => ({...query, sort}))

  }

  

  return (
    <main >
        <HeroSection />
        <Categories activeCategory={productQuery.category} onCategoryChange={handleCategoryChange} categories={categories} />
        <SortingWidget onSort={handleSort} sort={productQuery.sort} />
        <Products  products={products} />
     
    </main>
  )
}

export const getServerSideProps = async() => {
  const categories =  await getCategories()
  await queryClient.fetchQuery(['products', initialProductQuery], () => getProducts(initialProductQuery))
  return {
    props: {
      categories,
      dehydratedState: dehydrate(queryClient),
    }
  }
}
