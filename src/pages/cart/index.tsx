'use client';

import CartItem from '@/components/CartItem';
import Button from '@/components/common/Button';
import useCart from '@/hooks/useCart';

type Props = {};

const Cart = (props: Props) => {
  const { cart, clearCart, getTotalAmount } = useCart();
  return (
    <div className='container shadow py-10 mt-10 max-w-xl'>
        {cart.length > 0 && <>
            {cart.map((product, index) => (
        <CartItem key={product.id} {...product} />
      ))}
      <div className="border-t mt-5 border-solid border-gray-100 flex justify-between p-3">
              <strong>Total</strong>
              <strong>${getTotalAmount()}</strong>

        </div>
      <Button className='uppercase mt-10' fullWidth onClick={clearCart}>
        Clear Cart
      </Button>
        </>}
        
        {cart.length === 0 && <div className='text-center'>
            <h2 className='text-2xl font-semibold my-4'>Your Cart is empty</h2>
            <Button linkTo='/'>Shop Now</Button>
        </div>}
        
    </div>
  );
};

export default Cart;
