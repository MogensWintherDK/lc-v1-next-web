import { Html, Head, Main, NextScript } from 'next/document';
import { isLNXProductionMode } from '../libs/lib-lnx/utils/Env';

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.LNX_GOOGLE_ANALYTICS_ID}`;
const isProd = isLNXProductionMode();

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                {isProd && (
                    <>
                        <script async src={gtag}></script>
                        {/* Google tag (gtag.js) */}
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${process.env.LNX_GOOGLE_ANALYTICS_ID}', {
                                    page_path: window.location.pathname
                                    });
                                `,
                            }}
                        />

                    </>
                )}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html >
    )
}