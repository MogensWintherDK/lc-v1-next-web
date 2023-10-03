import { ServerResponse } from "http";
import { getPublishedPosts } from '../services/PostsService';
import { IPost } from '../services/PostsService';

const BASE_URL = 'https://www.linuxconsulting.dk';

function generateSiteMap(posts: IPost[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.linuxconsulting.dk</loc>
     </url>
     <url>
       <loc>https://www.linuxconsulting.dk/services</loc>
     </url>
     <url>
       <loc>https://www.linuxconsulting.dk/process</loc>
     </url>
     <url>
       <loc>https://www.linuxconsulting.dk/about</loc>
     </url>
     <url>
       <loc>https://www.linuxconsulting.dk/get-in-touch</loc>
     </url>
     ${posts
            .map(({ slug, category }: IPost) => {
                return `
       <url>
           <loc>${`${BASE_URL}/${category}/${slug}`}</loc>
       </url>
     `;
            })
            .join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: ServerResponse }) {
    // Get posts dynamically
    const posts = getPublishedPosts('services');

    // Generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');

    // Send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;