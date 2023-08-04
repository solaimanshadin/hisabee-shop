
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface Props extends Partial<Omit<HTMLButtonElement, 'children'>> {
    fullWidth?: boolean
    children: React.ReactNode
    size?: 'sm' | 'md'
    colorScheme?: 'primary' | 'secondary' | 'default'
    variant?: 'outline' | 'solid'
    linkTo?: string
}

const Button = ({
    children,
    size = "md",
    colorScheme = "primary",
    variant = "solid", className,
    linkTo,
    fullWidth,
    ...rest 
}: Props) => {
    const mergedClassName = twMerge(
        size == 'sm' && 'h-8  px-2',
        size == 'md' && 'h-12 px-5 text-xl',
        variant === 'solid' && colorScheme === 'primary' && 'bg-brand-500 hover:bg-brand-600',
        variant === 'solid' && colorScheme === 'secondary' && 'bg-brand-50 hover:bg-brand-100 text-brand-700 hover:text-brand-800',
        variant === 'outline' && 'border-solid border-2 border-brand-500 hover:bg-brand-600 text-brand-500 hover:text-white',
        fullWidth && "w-full block",
        'rounded',

        className,

    )
    if(linkTo) {
        return (
            <Link href={linkTo}>
                <button  className={mergedClassName} {...rest as any}>{children}</button>
            </Link>
        )
    }
    return (
        <button  className={mergedClassName} {...rest as any}>{children}</button>
    )
}

export default Button