import React from 'react';
import { IPostData, getPost, getPublishedPosts } from '../../services/PostsService';
import { ILNXMetadata } from '../../libs/lib-lnx/types/Metadata';
import { getLNXFullUrl, getLNXTitle } from '../../libs/lib-lnx/utils/Metadata';
import VideoArticle from '../../components/VideoArticle';

const category = 'pain-points';

export const getStaticPaths = async () => {
    const posts = await getPublishedPosts(category);
    const paths = posts.map(({ slug }) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }: { params: any }) => {
    const { content, sections, frontmatter } = await getPost(params.slug, category);

    const metadata: ILNXMetadata = {
        title: getLNXTitle(frontmatter.title, category),
        description: frontmatter.description,
        keywords: frontmatter.keywords,
        url: getLNXFullUrl(category, params.slug),
        thumb: getLNXFullUrl(frontmatter.thumb),
        category: category,
    }

    console.log(frontmatter);
    return {
        props: {
            content: content,
            sections: sections,
            frontmatter: frontmatter,
            metadata: metadata,
        },
    };
};


export default function ServicePage(props: IPostData): React.JSX.Element {
    return <VideoArticle content={props.content} sections={props.sections} frontmatter={props.frontmatter} metadata={props.metadata} />
};