import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPath = (folder: string) => {
    return path.join(process.cwd(), `/${folder}`); // Get full path 
}

const getFileContent = (filename: string, folder: string) => {
    const POSTS_PATH = getPath(folder);
    return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

export const getAllMarkdownFiles = (category: string) => {
    const folder = 'posts/' + category;
    const POSTS_PATH = getPath(folder);

    return fs
        .readdirSync(POSTS_PATH) // get files in directory
        .filter((path) => /\.md$/.test(path)) // only .md files
        .map((filename) => { // map over each file
            const source = getFileContent(filename, folder); // retrieve the file contents
            const slug = filename.replace(/\.md$/, ""); // get the slug from the filename
            const { data } = matter(source); // extract frontmatter
            return {
                frontmatter: data,
                category: category,
                slug: slug,
            };
        });
};

export const getMarkdownFileContent = (slug: string, category: string) => {
    const filename = slug;
    const folder = 'posts/' + category;
    const source = getFileContent(filename + '.md', folder);
    const { data: frontmatter, content } = matter(source);
    return {
        slug,
        category,
        frontmatter,
        content,
    };
}