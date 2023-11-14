import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { hasLNXNoItems } from "../libs/lib-lnx/utils";

export interface IMarkdownFile {
    category: string,
    slug: string,
    frontmatter: any,
}

const getPath = (folder: string) => {
    return path.join(process.cwd(), `/${folder}`); // Get full path 
}

const getFileContent = async (filename: string, folder: string) => {
    const POSTS_PATH = getPath(folder);
    return fs.promises.readFile(path.join(POSTS_PATH, filename), "utf8");
};

export const getAllMarkdownFiles = async (category: string): Promise<IMarkdownFile[]> => {
    const folder = 'posts/' + category;
    const POSTS_PATH = getPath(folder);

    const fileNames = fs
        .readdirSync(POSTS_PATH) // get files in directory
        .filter((path) => /\.md$/.test(path)); // only .md files

    const fileContents = await Promise.all(
        fileNames.map(async (filename) => { // map over each file
            const source = await getFileContent(filename, folder); // retrieve the file contents
            const slug = filename.replace(/\.md$/, ""); // get the slug from the filename
            const { data } = matter(source); // extract frontmatter
            return {
                category: category,
                slug: slug,
                frontmatter: data,
            } as IMarkdownFile;
        })
    );

    return fileContents;
};

export interface IMarkdownSections {
    [key: string]: string;
}

export const getMarkdownFileContent = async (slug: string, category: string) => {
    const filename = slug;
    const folder = 'posts/' + category;
    const source = await getFileContent(filename + '.md', folder);
    let { data: frontmatter, content } = matter(source);

    const sectionPattern = /```([^`]+)```([^`]+)```/g;
    let match;

    const sections: IMarkdownSections = {};

    while ((match = sectionPattern.exec(content)) !== null) {
        const sectionKey = match[1].trim();
        const sectionContent = match[2].trim();
        sections[sectionKey] = sectionContent;
    }

    console.log('Sections:');
    console.log(sections);

    if (hasLNXNoItems(sections) == false) {
        content = '';
    }
    return {
        slug,
        category,
        frontmatter,
        content,
        sections,
    };
}