import AppBar from "@/components/common/AppBar";
import Footer from "@/components/common/Footer";
import CartContextProvider from "@/contexts/CartContext";
import { queryClient } from "@/queryClient";
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from "next/app";

import { useRef } from "react";
import './globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState} />

            <CartContextProvider>
                <main className='min-h-[calc(100vh-120px)] pt-[80px] '>
                    <AppBar />
                    <Component {...pageProps} />
                </main>
                <Footer />
            </CartContextProvider>
        </QueryClientProvider>
    )
}
