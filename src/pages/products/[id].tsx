import Button from '@/components/common/Button'
import useCart from '@/hooks/useCart'
import { Product } from '@/types/shop'
import { NextPage } from 'next'
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast'
import { BiSolidCart } from 'react-icons/bi'

type Props = {}


const getProductById  = async(productId: string): Promise<Product> => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`)
  
    return await data.json()
  
  }

const ProductDetails: NextPage<Product> = ({
  id,
  title,
  description,
  image,
  price,
}) => {
  const { addToCart } = useCart()
    const handleAddToCart = () => {
        addToCart({
            id,
            price,
            title,
            image
        })
        toast.success('Product Added to cart!', {
            duration: 2000,
            className: "!shadow-[0_0_3px_rgba(205,205,205,.4)]"
        })
    }
  return (
    <>      <Toaster />

    <div className='container md:px-24 mt-14 md:grid gap-20 grid-cols-3'>
      <div className='flex justify-center'>
        <Image alt={title} src={image} width="800" height={800} />
      </div>
      <div className='col-span-2'>
        <h1 className='text-2xl  '>{title}</h1>
        <p className='my-5'>{description}</p>
        <h2 className='text-xl  mb-5'>Price: $ {price} </h2>

        <Button size="md" className="flex items-center gap-2 mt-8" onClick={handleAddToCart}  colorScheme="secondary" variant="solid"><BiSolidCart /> <span>Add To Cart</span> </Button>

      </div>
    </div>
    </>
  )
}

export const getServerSideProps = async(ctx: any) => {
    const {id: productId} = ctx.params;
    let product: Product = {} as Product;
    try {
      product= await getProductById(productId)
    } catch (error) {
        
    }
    return {
        props: {
          ...product
        }
    }
}
export default ProductDetails