import React from 'react';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { IPost, getPost, getPublishedPosts } from '../../services/PostsService';
import Layout from '../../components/Layout';
import { Markdown } from "../../libs/lib-lnx/utils/Markdown";
import { getLNXNavigationHeaderHeight } from '../../libs/lib-lnx/utils';
import { ILNXMetadata } from '../../libs/lib-lnx/types/Metadata';
import { getLNXFullUrl, getLNXTitle } from '../../libs/lib-lnx/utils/Metadata';

const section = 'services';

export const getStaticPaths = async () => {
    const paths = getPublishedPosts("posts/services").map(({ slug }) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }: { params: any }) => {
    const { content, frontmatter } = await getPost(params.slug, 'posts/' + section);

    const metadata: ILNXMetadata = {
        title: getLNXTitle(frontmatter.title, section),
        description: frontmatter.description,
        keywords: frontmatter.keywords,
        url: getLNXFullUrl(section, params.slug),
        thumb: getLNXFullUrl(frontmatter.thumb),
        section: section,
    }

    return {
        props: {
            content: content,
            frontmatter: frontmatter,
            metadata: metadata,
        },
    };
};


export default function ServicePage({ content, frontmatter, metadata }: IPost): React.JSX.Element {
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


    return (
        <Layout metadata={metadata}>
            <div ref={ref} className="Slim">

                {/* Article section */}
                <div className='pt-16 md:pr-96' style={{ minHeight: minHeight + 'px' }}>
                    <Markdown content={content} />
                </div>
            </div>
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