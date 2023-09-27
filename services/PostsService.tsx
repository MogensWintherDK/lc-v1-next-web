import Image from "next/image";
import { getAllMarkdownFiles, getMarkdownFileContent } from "../utils/markdown"

export interface IPost {
    content: string,
    frontmatter: any,
}

export const getPublishedPosts = (folder: string) => {
    const posts = getAllPosts(folder)

    const published = posts.filter((post) => {
        return post.frontmatter.isPublished === true
    })

    return published
}

export const getAllPosts = (category: string) => {
    const posts = getAllMarkdownFiles(category);
    return posts;

}

export const getPost = (slug: string, category: string): IPost => {
    return getMarkdownFileContent(slug, category);
}

