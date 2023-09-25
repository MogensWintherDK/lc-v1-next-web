
import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

interface IProps {
    children: ReactNode,
    header_data?: any,
    footer_data?: any,
    metadata?: any,
}

const Layout: React.FC<IProps> = ({ children, ...props }) => {
    const metadata = {
        title: 'title',
        description: 'title',
        keywords: undefined,
        page_url: 'title',
    };
    const header_data = {};
    const footer_data = {};

    const [showBlur, setBlur] = useState(false);

    // Handler to toggle blur under overlays
    const toggleBlur = () => {
        setBlur(!showBlur);
    };

    return (
        <>
            <div className="bg-fdkgreen text-dark">

                <Head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    {
                        metadata.keywords && (
                            <meta name="keywords" content={metadata.keywords} />
                        )
                    }
                    {/* Facebook headers */}
                    <meta property="og:image" content={metadata.page_url} />
                    <meta property="og:title" content={metadata.title} />
                    <meta property="og:description" content={metadata.description} />
                    <meta property="og:url" content={metadata.page_url} />


                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Header data={header_data} blur={toggleBlur} />

                <main className={`${showBlur ? 'blur-sm' : ''} mt-[60px] md:mt-[110px]`}>
                    {children}
                </main>

                <Footer data={footer_data} />
            </div>
        </>
    );
}
export default Layout;