import React from 'react';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { IPostData } from '../services/PostsService';
import Layout from '../components/Layout';
import { Markdown } from "../libs/lib-lnx/utils/Markdown";
import { getLNXNavigationHeaderHeight } from '../libs/lib-lnx/utils';
import { LNXExternalLink } from '../libs/lib-lnx/components';

export default function LogoArticle({ content, frontmatter, metadata }: IPostData): React.JSX.Element {
    const [imageSize, setImageSize] = useState(100);
    const [imageTop, setImageTop] = useState(100);
    const [imageRight, setImageRight] = useState(100);
    const [minHeight, setMinHeight] = useState(100);
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const handleResize = () => {
            const headerHeight = getLNXNavigationHeaderHeight();
            const windowWidth = window.innerWidth;
            const boxWidth = ref.current.offsetWidth;
            const marginRight = (windowWidth - boxWidth) / 2;
            const imageSize = 260;//marginRight > 0 ? marginRight * 1.95 + 384 * 2 : 1;
            setImageSize(imageSize);
            setImageTop(headerHeight + 105);
            setImageRight(100);
            setMinHeight(imageSize + headerHeight + 100);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
    })

    console.log(frontmatter)
    return (
        <Layout metadata={metadata}>

            {/* Article section */}
            <div ref={ref} className="PricingPage Slim">
                <div className='pt-16 md:pr-96' style={{ minHeight: minHeight + 'px' }}>
                    <Markdown content={content} />
                </div>
            </div>

            {/* Logo photo section */}
            <div className='bg-white absolute z-0 hidden md:block text-center'
                style={{
                    width: `${imageSize}px`,
                    top: `${imageTop}px`,
                    right: `${imageRight}px`,
                }}
            >

                <div className='w-full h-full bg-cover'
                    style={{
                        backgroundImage: `url(${frontmatter.image})`,
                        width: `${imageSize}px`,
                        height: `${imageSize}px`,
                    }}
                />
                {frontmatter.external_link_href && (
                    <div className='mt-8 pt-8 border-t-2 border-theme-g-2'>
                        <LNXExternalLink href={frontmatter.external_link_href}>
                            {frontmatter.external_link_text}
                        </LNXExternalLink>
                    </div>
                )}
            </div>
        </Layout >
    );
};