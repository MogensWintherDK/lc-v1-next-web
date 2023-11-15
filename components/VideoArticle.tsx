import React from 'react';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { IPostData } from '../services/PostsService';
import Layout from '../components/Layout';
import { LNXMarkdown } from "../libs/lib-lnx/utils/Markdown";
import { getLNXNavigationHeaderHeight, LNXYouTubePlayer } from '../libs/lib-lnx/utils';
import { IMarkdownSections } from '../utils/markdown';
import { LNXRow, LNXCircleTextCard } from '../libs/lib-lnx/components';

export default function VideoArticle({ content, sections, frontmatter, metadata }: IPostData): React.JSX.Element {
    const [imageSize, setImageSize] = useState(100);
    const [imageTop, setImageTop] = useState(100);
    const [imageRight, setImageRight] = useState(100);
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const handleResize = () => {
            const headerHeight = getLNXNavigationHeaderHeight();
            const windowWidth = window.innerWidth;
            const boxWidth = ref.current.offsetWidth || 0;
            const marginRight = (windowWidth - boxWidth) / 2;
            let imageSize = marginRight > 0 ? marginRight * 1.95 + 364 * 2 : 1;
            imageSize = imageSize > 1000 ? 1000 : imageSize;
            setImageSize(imageSize);
            setImageTop(-(imageSize / 3) + headerHeight);
            setImageRight(-(imageSize / 2));
        }
        window.addEventListener('resize', handleResize);
        handleResize();
    })


    let parsedSections: IMarkdownSections = { header: content, content: '' };
    // Data with sections
    if (sections) {
        // parsedSections = sections;
        parsedSections = sections;
    }

    return (
        <Layout metadata={metadata}>

            <div ref={ref} className="Slim md:pr-96">
                <div className='mt-8'>
                    <LNXMarkdown content={parsedSections['header']} />
                </div>

                {
                    parsedSections['video'] && (
                        <div className='mt-16'>
                            <LNXMarkdown content={parsedSections['video']} />
                        </div>
                    )

                }

                {/* <LNXTwoGrid style=''> */}
                <div className='w-full h-full ml-0 mt-4'>
                    <LNXYouTubePlayer videoId={frontmatter.video_id} autoPlay={false} title='Demo video' />
                </div>
                {/* </LNXTwoGrid> */}

                {
                    parsedSections['content'] && (
                        <div className='mt-8'>
                            {/* <div className='bg-theme-g-2 h-16 p-4'>
                                Interested?
                            </div> */}
                            <div className='pt-12'>
                                <LNXMarkdown content={parsedSections['content']} />
                            </div>
                        </div>
                    )
                }

                <LNXRow style='Slim' cols='3' centered={false}>
                    {frontmatter.links.map((link: { image_src: string; text: string; href: string; }, index: any) => (
                        <LNXCircleTextCard key={index} image_src={link.image_src} header={link.text} link_text='Read more' link_href={link.href} />
                    ))}
                </LNXRow>


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
