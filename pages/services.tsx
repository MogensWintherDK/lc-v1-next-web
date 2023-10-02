import { LNXHeaderSection, LNXRow, LNXTextGridCard } from '../libs/lib-lnx/components';
import {
    isLNXStagingMode,
    getLNXRevalidationTime,
} from '../libs/lib-lnx/utils';
import { getPublishedPosts } from '../services/PostsService';
import Layout from '../components/Layout';
import { LNXPostCard } from '../libs/lib-lnx/components/Cards';
import { ILNXMetadata } from '../libs/lib-lnx/types/Metadata';
import { getLNXFullUrl, getLNXTitle } from '../libs/lib-lnx/utils/Metadata';
import { IPost } from '../services/PostsService';

const categoryName = 'posts/services';
const categoryPath = 'services';

export const getStaticProps = async () => {
    const posts = getPublishedPosts(categoryName);

    const metadata: ILNXMetadata = {
        title: getLNXTitle('Services'),
        description: 'It is OK to ask for help!',
        keywords: 'Services, Help',
        url: getLNXFullUrl(categoryPath),
        thumb: getLNXFullUrl('/images/small/migration.jpg'),
    }
    return {
        props: {
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
            <LNXHeaderSection>
                <div>
                    <b>It is OK to ask for help!</b><br />
                    <span className='text-xl sm:text-2xl md:text-3xl'>Take a deep-dive!</span>
                </div>
            </LNXHeaderSection>
            <div className='PostsSection'>
                <LNXRow cols='3'>

                    {props.posts && props.posts.length > 0 ? props.posts.map((post: IPost) => (
                        <LNXPostCard
                            key={post.slug}
                            header={post.frontmatter.title}
                            text={post.frontmatter.description}
                            link_href={`${categoryPath}/${post.slug}`}
                            link_text='Read now'
                            image_src={post.frontmatter.thumb}
                        />
                    )) : null}
                </LNXRow>
            </div>
        </Layout>
    );
}
