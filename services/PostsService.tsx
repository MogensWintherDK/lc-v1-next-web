import { getAllMarkdownFiles, getMarkdownFileContent, IMarkdownFile, IMarkdownSections } from "../utils/markdown"
import { ILNXMetadata } from "../libs/lib-lnx/types/Metadata";
import { getLNXFullUrl, getLNXTitle } from '../libs/lib-lnx/utils/Metadata';
import { isLNXStagingMode, getLNXRevalidationTime } from '../libs/lib-lnx/utils';

export interface IPost extends IMarkdownFile {
    category: string,
    slug: string,
    frontmatter: any,
    content?: string,
    sections?: IMarkdownSections,
    metadata?: ILNXMetadata,
}

export interface IPostData {
    category?: string,
    slug?: string,
    frontmatter: any,
    content: string,
    sections?: IMarkdownSections,
    metadata: ILNXMetadata,
}

export const getPublishedPosts = async (folder: string): Promise<IPost[]> => {
    const posts = await getAllPosts(folder)

    const published = posts.filter((post: IPost) => {
        return post.frontmatter && post.frontmatter.isPublished === true
    })

    return published;
}

export const getAllPosts = async (category: string): Promise<IPost[]> => {
    return await getAllMarkdownFiles(category);

}

export const getPost = async (slug: string, category: string): Promise<IPost> => {
    const post = await getMarkdownFileContent(slug, category);
    return post;
    // return await getMarkdownFileContent(slug, category);
}

export const getPostBlock = async (slug: string): Promise<IPost> => {
    return await getMarkdownFileContent(slug, 'blocks');
}

export const getPostPage = async (slug: string): Promise<IPost> => {
    return await getMarkdownFileContent(slug, 'pages');
}

export const getPostPageProps = async (slug: string) => {
    const post = await getPostPage(slug);

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