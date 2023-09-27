import React from 'react';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { IPost, getPost, getPublishedPosts } from '../../services/PostsService';
import Layout from '../../components/Layout';
import { Markdown } from "../../libs/lib-lnx/utils/Markdown";
import { getLNXNavigationHeaderHeight } from '../../libs/lib-lnx/utils';

export const getStaticPaths = async () => {
    const paths = getPublishedPosts("posts/services").map(({ slug }) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }: { params: any }) => {
    const { content, frontmatter } = await getPost(params.slug, "posts/services");

    return {
        props: {
            content: content,
            frontmatter: frontmatter,
        },
    };
};


export default function post({ content, frontmatter }: IPost): React.JSX.Element {
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
            const imageSize = marginRight > 200 ? marginRight * 1.95 : 1;
            setImageSize(imageSize);
            setImageTop(-(imageSize / 3) + headerHeight);
            setImageRight(-(imageSize / 2));
            setMinHeight(imageSize - imageSize / 3);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
    })

    return (
        <Layout>
            <div ref={ref} className="Slim">

                {/* Article section */}
                <div className='pt-16' style={{ minHeight: minHeight + 'px' }}>
                    <Markdown content={content} />
                </div>

                {/* Lower bar */}
                <div className='bg-theme-g-4 text-white mt-2 p-4 rounded'>
                    <h2>{frontmatter.title}</h2>
                    <span>Published: {frontmatter.publishedDate} / Tags: {frontmatter.tags.join(', ')}</span>
                </div>
            </div>
            <div className='bg-cover bg-demo absolute rounded-full z-0'
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