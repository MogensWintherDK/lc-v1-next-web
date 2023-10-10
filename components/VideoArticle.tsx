import React from 'react';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { IPostData } from '../services/PostsService';
import Layout from '../components/Layout';
import { Markdown } from "../libs/lib-lnx/utils/Markdown";
import { getLNXNavigationHeaderHeight, LNXYouTubePlayer } from '../libs/lib-lnx/utils';
import { LNXTwoGrid } from '../libs/lib-lnx/components';

export default function VideoArticle({ content, frontmatter, metadata }: IPostData): React.JSX.Element {
    const [imageSize, setImageSize] = useState(100);
    const [imageTop, setImageTop] = useState(100);
    const [imageLeft, setImageLeft] = useState(100);
    const [minHeight, setMinHeight] = useState(100);
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const handleResize = () => {
            const headerHeight = getLNXNavigationHeaderHeight();
            const windowWidth = window.innerWidth;
            const boxWidth = ref.current.offsetWidth;
            const marginLeft = (windowWidth - boxWidth) / 2;
            const imageSize = marginLeft > 270 ? 540 : 1;
            setImageSize(imageSize);
            setImageTop(-(imageSize / 3) + headerHeight);
            setImageLeft(-(imageSize / 2));
            setMinHeight(imageSize - imageSize / 3);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
    })

    console.log(frontmatter)
    return (
        <Layout metadata={metadata}>

            <div ref={ref} className="Slim">
                <LNXTwoGrid>
                    <Markdown content={content} />
                    <div className='w-full h-full pt-16'>
                        <LNXYouTubePlayer videoId={frontmatter.video_id} autoPlay={false} title='Demo video' />
                    </div>
                </LNXTwoGrid>
            </div>

            {/* Baloon photo section */}
            <div className='bg-cover bg-demo absolute rounded-full z-0 hidden md:block'
                style={{
                    backgroundImage: `url(${frontmatter.image})`,
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                    top: `${imageTop}px`,
                    left: `${imageLeft}px`,
                }}
            />
        </Layout >
    );
};
