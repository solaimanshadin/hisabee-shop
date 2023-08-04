import Button from "@/components/common/Button"
import useCart from "@/hooks/useCart"
import { Product } from "@/types/shop"
import Image from "next/image"
import toast, { Toaster } from 'react-hot-toast'
import { BiSolidCart } from "react-icons/bi"


const Product: React.FC<Product> = ({ id, title, price, category, image }) => {
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
        <div className="border-solid border-2	 border-slate-100 p-4 rounded-sm flex flex-col justify-between gap-4 ">
            <Toaster />
            <div>
                <Image className="w-[300px] h-[200px] object-contain pb-4" src={image} alt={title} width="300" height="300" />
                <h3>{title}</h3>
                <p className="px-2 mt-3 inline-block text-black/50 bg-yellow-100/25">{category}</p>
            </div>

            <div className="flex justify-between gap-2 items-center	">
                <h4 className="flex-1">${price}</h4>

                <Button linkTo={`/products/${id}`} size="sm" colorScheme="secondary" variant="outline">Details</Button>
                <Button onClick={handleAddToCart} size="sm" colorScheme="secondary" variant="solid"><BiSolidCart /></Button>



            </div>
        </div>
    )
}

export default Product