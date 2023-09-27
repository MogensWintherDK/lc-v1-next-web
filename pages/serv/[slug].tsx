import React from 'react';
import { IPost, getPost, getPublishedPosts } from '../../services/PostsService';
import Layout from '../../components/Layout';
import { Markdown } from "../../libs/lib-lnx/utils/Markdown";

export const getStaticPaths = async () => {
    const paths = getPublishedPosts("posts").map(({ slug }) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }: { params: any }) => {
    const { content, frontmatter } = await getPost(params.slug, "posts");

    return {
        props: {
            content: content,
            frontmatter: frontmatter,
        },
    };
};


export default function post({ content, frontmatter }: IPost): React.JSX.Element {
    return (
        <Layout>
            <div className="Slim prose">
                <h2>{frontmatter.title}</h2>
                <span>Published: {frontmatter.publishedDate}</span>
                <p>Tags: {frontmatter.tags.join(', ')}</ p>
                <Markdown content={content} />
            </div >
        </Layout >
    );
};