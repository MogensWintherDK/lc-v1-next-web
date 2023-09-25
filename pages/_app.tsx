import '../styles/global.scss';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}