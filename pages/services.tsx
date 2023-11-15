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
        title: getLNXTitle('Strategic Consulting for Business Transformation - Services'),
        description: 'Elevate your business with Winther Consulting\'s strategic services. From technology migration to supplier dependency solutions, our comprehensive consulting services drive transformative growth. Explore our tailored strategies and innovative approaches designed to optimize your business processes and propel you toward success.',
        keywords: 'Strategic Consulting, Business Transformation, Technology Migration, Supplier Dependency Solutions, Comprehensive Consulting Services, Transformative Growth Strategies, Business Process Optimization, Strategic Excellence, Innovation in Business, Tailored Business Solutions',
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
