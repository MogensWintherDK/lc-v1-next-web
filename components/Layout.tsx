
import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

interface IProps {
    children: ReactNode,
    metadata?: any,
}

const Layout: React.FC<IProps> = ({ children, metadata }) => {
    const meta = metadata || {
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
                    <title>{meta.title}</title>
                    <meta name="description" content={meta.description} />
                    {
                        meta.keywords && (
                            <meta name="keywords" content={meta.keywords} />
                        )
                    }
                    {/* Facebook headers */}
                    <meta property="og:image" content={meta.thumb} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:url" content={meta.url} />


                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Header data={header_data} blur={toggleBlur} />

                <main className={`${showBlur ? 'blur-sm' : ''} mt-[100px]`}>
                    {children}
                </main>

                <Footer data={footer_data} />
            </div>
        </>
    );
}
export default Layout;