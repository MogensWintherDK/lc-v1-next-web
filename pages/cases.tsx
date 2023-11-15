import { LNXHeaderSection, LNXRow } from '../libs/lib-lnx/components';
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

const slug = 'cases';

export const getStaticProps = async () => {
    const posts = await getPublishedPosts(slug);

    const metadata: ILNXMetadata = {
        title: getLNXTitle('Cases'),
        description: 'The cases I have been involved in',
        keywords: 'Cases, Cloudprinter.com, Foto.dk, startups, co-founder',
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

export default function ServicesPage(props: any): React.JSX.Element {
    return (
        <Layout metadata={props.metadata}>
            <LNXHeaderSection>
                <div>
                    <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>Cases</h1>
                    <span className='text-sm sm:text-md md:text-xl'>I know that it is not a long list, but Cloudprinter.com and Foto.dk are both startups I have co-founded and been with for a total of 14 years.</span>
                </div>
            </LNXHeaderSection>
            <div className='PostsSection'>
                <LNXRow cols='2'>

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