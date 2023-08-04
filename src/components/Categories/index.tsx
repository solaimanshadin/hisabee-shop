import { Category } from '@/types/shop'
import React from 'react'
type Props = {
  categories: Category[],
  activeCategory: Category,
  onCategoryChange: (_category: Category) => void,
}

const Categories : React.FC<Props> = ({categories, onCategoryChange, activeCategory}) => {
  return (
    <div className='container flex justify-center gap-4 flex-wrap my-16'>

        {['all categories',...categories]?.map((categoryName) => <button  onClick={() => onCategoryChange(categoryName)}  className={`px-4 py-2 capitalize   ${activeCategory === categoryName ? 'bg-brand-300': 'bg-brand-50'  }`} key={categoryName}> {categoryName}</button>)}
    </div>
  )
}

export default Categories