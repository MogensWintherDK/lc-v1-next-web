import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { Analytics } from '@vercel/analytics/react';
import { isLNXProductionMode } from '../libs/lib-lnx/utils/Env';
import '../styles/global.scss';

const isProd = isLNXProductionMode();

export default function App({ Component, pageProps }: { Component: any, pageProps: any }) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            if (isProd) {
                window.gtag('config', process.env.LNX_GOOGLE_ANALYTICS_ID as string, {
                    page_path: url,
                });
            }
        }
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [router.events]);
    return (
        <>
            <Component {...pageProps} />
            {/* <Analytics /> */}
        </>
    );
}