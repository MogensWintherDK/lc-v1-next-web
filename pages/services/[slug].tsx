import React from 'react';
import { IPostData, getPost, getPublishedPosts } from '../../services/PostsService';
import { ILNXMetadata } from '../../libs/lib-lnx/types/Metadata';
import { getLNXFullUrl, getLNXTitle } from '../../libs/lib-lnx/utils/Metadata';
import BaloonArticle from '../../components/BaloonArticle';

const category = 'services';

export const getStaticPaths = async () => {
    const posts = await getPublishedPosts(category);
    const paths = posts.map(({ slug }) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }: { params: any }) => {
    const { content, frontmatter } = await getPost(params.slug, category);

    const metadata: ILNXMetadata = {
        title: getLNXTitle(frontmatter.title, category),
        description: frontmatter.description,
        keywords: frontmatter.keywords,
        url: getLNXFullUrl(category, params.slug),
        thumb: getLNXFullUrl(frontmatter.thumb),
        category: category,
    }

    return {
        props: {
            content: content,
            frontmatter: frontmatter,
            metadata: metadata,
        },
    };
};


export default function ServicePage(props: IPostData): React.JSX.Element {
    return <BaloonArticle content={props.content} frontmatter={props.frontmatter} metadata={props.metadata} />
};