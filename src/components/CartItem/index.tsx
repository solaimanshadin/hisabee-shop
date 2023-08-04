import useCart from "@/hooks/useCart"
import { CartProduct } from "@/types/cart"
import Image from "next/image"
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"
import Button from "../common/Button"
type Props = {

}

const CartItem: React.FC<CartProduct> = ({id, title, price, quantity, image}) => {
    const {removeFromCart, addToCart} = useCart()
    const handleAddToCart = () => addToCart({
        id,
        price,
        title,
        image
    })
    const handleRemoveFromCart = () => removeFromCart(id)
  return (
    <div  className="md:flex justify-between items-center gap-10 mb-5 ">
        <div className="w-30 hidden md:flex shrink-0 justify-center">
        <Image src={image} alt={title} className="object-contain w-20 h-16" width="70" height="70"/>

        </div>
        <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm">Price : ${price}</p>
        </div>
        
        <div className="shrink-0 flex items-center ">
            <Button colorScheme="default" className="text-green-400 p-3"  onClick={handleAddToCart}>
                <AiOutlinePlusSquare />
            </Button>
            <span>{quantity}</span>
            <Button className="text-red-400 p-3" colorScheme="default"  onClick={handleRemoveFromCart}>
                <AiOutlineMinusSquare />
            </Button>

        </div>
    </div>
  )
}

export default CartItem