import { LNXHeaderSection, LNXRow } from '../libs/lib-lnx/components';
import { LNXMarkdownBlock } from '../libs/lib-lnx/components/Blocks';
import {
    isLNXStagingMode,
    getLNXRevalidationTime,
} from '../libs/lib-lnx/utils';
import { getPostPage, getPublishedPosts } from '../services/PostsService';
import Layout from '../components/Layout';
import { LNXPostCard } from '../libs/lib-lnx/components/Cards';
import { ILNXMetadata } from '../libs/lib-lnx/types/Metadata';
import { getLNXFullUrl, getLNXTitle } from '../libs/lib-lnx/utils/Metadata';
import { IPost } from '../services/PostsService';

const slug = 'services';

export const getStaticProps = async () => {
    const post = await getPostPage(slug);
    const posts = await getPublishedPosts(slug);

    const metadata: ILNXMetadata = {
        title: getLNXTitle('Services'),
        description: 'It is OK to ask for help!',
        keywords: 'Services, Help',
        url: getLNXFullUrl(slug),
        thumb: getLNXFullUrl('/images/small/migration.jpg'),
    }
    return {
        props: {
            post: post,
            posts,
            draftMode: isLNXStagingMode(),
            revalidate: getLNXRevalidationTime(),
            metadata: metadata,
        }
    };
};

export default function ServicesPage(props: any): React.JSX.Element {
    return (
        <Layout metadata={props.metadata}>
            <div className='Slim text-center'>
                <LNXMarkdownBlock data={props.post} />
            </div>
            <div className='PostsSection'>
                <LNXRow cols='3'>

                    {props.posts && props.posts.length > 0 ? props.posts.map((post: IPost) => (
                        <LNXPostCard
                            key={post.slug}
                            header={post.frontmatter.title}
                            text={post.frontmatter.description}
                            link_href={`${post.category}/${post.slug}`}
                            link_text='Read now'
                            image_src={post.frontmatter.thumb}
                        />
                    )) : null}
                </LNXRow>
            </div>
        </Layout>
    );
}
