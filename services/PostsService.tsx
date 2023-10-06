import { getAllMarkdownFiles, getMarkdownFileContent } from "../utils/markdown"
import { ILNXMetadata } from "../libs/lib-lnx/types/Metadata";
import { getLNXFullUrl, getLNXTitle } from '../libs/lib-lnx/utils/Metadata';
import { isLNXStagingMode, getLNXRevalidationTime } from '../libs/lib-lnx/utils';

export interface IPost {
    category: string,
    slug: string,
    frontmatter: any,
    content?: string,
    metadata?: ILNXMetadata,
}

export interface IPostData {
    category?: string,
    slug?: string,
    frontmatter: any,
    content: string,
    metadata: ILNXMetadata,
}

export const getPublishedPosts = (folder: string): IPost[] => {
    const posts = getAllPosts(folder)

    const published = posts.filter((post: IPost) => {
        return post.frontmatter.isPublished === true
    })

    return published;
}

export const getAllPosts = (category: string): IPost[] => {
    const posts = getAllMarkdownFiles(category);
    return posts;

}

export const getPost = (slug: string, category: string): IPost => {
    return getMarkdownFileContent(slug, category);
}

export const getPostBlock = (slug: string): IPost => {
    return getMarkdownFileContent(slug, 'blocks');
}

export const getPostPage = (slug: string): IPost => {
    return getMarkdownFileContent(slug, 'pages');
}

export const getPostPageProps = async (slug: string) => {
    const post = getPostPage(slug);

    const metadata = {
        title: getLNXTitle(post.frontmatter.title),
        description: post.frontmatter.description,
        keywords: post.frontmatter.keywords,
        url: getLNXFullUrl(post.slug),
        thumb: getLNXFullUrl(post.frontmatter.thumb),
    } as ILNXMetadata;

    return {
        props: {
            post: post,
            draftMode: isLNXStagingMode(),
            revalidate: getLNXRevalidationTime(),
            metadata: metadata,
        }
    };
}