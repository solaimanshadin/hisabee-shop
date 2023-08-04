"use client"
import useCart from '@/hooks/useCart'
import Image from 'next/image'
import Link from 'next/link'
import { BiSolidCart } from 'react-icons/bi'
import Button from '../Button'
type Props = {}

const AppBar = (props: Props) => {
    const { getCartSize, cart } = useCart()
    return (
        <div className='w-full bg-white shadow-sm fixed top-0'>
            <div className="container  flex justify-between items-center py-4">
                <Link href="/">
                <Image
                    src="/logo.png"
                    width={200}
                    height={50}
                    alt="Hisabee Store"
                />
                </Link>
                
                <Button size="md" className='relative' colorScheme='secondary' linkTo="/cart">
                    <small className='absolute rounded-full w-4 h-4 text-xs   bg-brand-800 text-white top-[6px] right-[6px]' >{getCartSize()}</small>
                    <BiSolidCart /> 
                </Button>
            </div>
        </div>

    )
}

export default AppBar