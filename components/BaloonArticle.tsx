import React from 'react';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { IPostData } from '../services/PostsService';
import Layout from '../components/Layout';
import { Markdown } from "../libs/lib-lnx/utils/Markdown";
import { getLNXNavigationHeaderHeight } from '../libs/lib-lnx/utils';

export default function BaloonArticle({ content, frontmatter, metadata }: IPostData): React.JSX.Element {
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
            const imageSize = marginRight > 0 ? marginRight * 1.95 + 384 * 2 : 1;
            setImageSize(imageSize);
            setImageTop(-(imageSize / 3) + headerHeight);
            setImageRight(-(imageSize / 2));
            setMinHeight(imageSize - imageSize / 3);
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

            {/* Baloon photo section */}
            <div className='bg-cover bg-demo absolute rounded-full z-0 hidden md:block'
                style={{
                    backgroundImage: `url(${frontmatter.image})`,
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                    top: `${imageTop}px`,
                    right: `${imageRight}px`,
                }}
            />
        </Layout >
    );
};