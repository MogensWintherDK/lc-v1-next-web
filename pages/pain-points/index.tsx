import { LNXHeaderSection, LNXRow, LNXTextGridCard, LNXTextSection } from '../../libs/lib-lnx/components';
import {
    isLNXStagingMode,
    getLNXRevalidationTime,
} from '../../libs/lib-lnx/utils';
import { getPublishedPosts } from '../../services/PostsService';
import Layout from '../../components/Layout';
import { LNXCircleTextCard } from '../../libs/lib-lnx/components/Cards';
import { ILNXMetadata } from '../../libs/lib-lnx/types/Metadata';
import { getLNXFullUrl, getLNXTitle } from '../../libs/lib-lnx/utils/Metadata';
import { IPost } from '../../services/PostsService';

const slug = 'pain-points';

export const getStaticProps = async () => {
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
            posts,
            draftMode: isLNXStagingMode(),
            revalidate: getLNXRevalidationTime(),
            metadata: metadata,
        }
    };
};

export default function PainPointsPage(props: any): React.JSX.Element {
    return (
        <Layout metadata={props.metadata}>
            <LNXHeaderSection>
                <div>
                    <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>Pain points</h1>
                </div>
            </LNXHeaderSection>
            <LNXTextSection>
                <b>Can you identify yourself with one or more of these common pain point categories?</b>
                <br />Click on one of the main categories to read more.
            </LNXTextSection>
            <div className='PostsSection'>
                <LNXRow cols='3'>

                    {props.posts && props.posts.length > 0 ? props.posts.map((post: IPost) => (
                        <LNXCircleTextCard
                            key={post.slug}
                            header={post.frontmatter.title}
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
