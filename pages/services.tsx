import { LNXHeaderSection, LNXRow, LNXTextGridCard } from '../libs/lib-lnx/components';
import {
    isLNXStagingMode,
    getLNXRevalidationTime,
} from '../libs/lib-lnx/utils';
import { getPublishedPosts } from '../services/PostsService';
import Layout from '../components/Layout';
import { LNXPostCard } from '../libs/lib-lnx/components/Cards';

interface IPost {
    slug: string,
    title: string,
    frontmatter?: any,
}

const categoryName = 'posts/services';
const categoryPath = 'services';

export const getStaticProps = async () => {
    const posts = getPublishedPosts(categoryName);
    return {
        props: {
            posts,
            draftMode: isLNXStagingMode(),
            revalidate: getLNXRevalidationTime(),
            header_data: {},
        }
    };
};

export default function ServicesPage(props: any): React.JSX.Element {
    return (
        <Layout header_data={props.header_data} footer_data={props.footer_data} metadata={props.metadata}>
            <LNXHeaderSection>
                <div>
                    <b>It is OK to ask for help!</b><br />
                    <span className='text-xl sm:text-2xl md:text-3xl'>And we can help in a lot of different areas. Take a deep-dive!</span>
                </div>
            </LNXHeaderSection>
            <div className='PostsSection'>
                <LNXRow cols='4'>

                    {props.posts && props.posts.length > 0 ? props.posts.map((post: IPost) => (
                        <LNXPostCard
                            key={post.slug}
                            header={post.frontmatter.title}
                            text={post.frontmatter.description}
                            link_href={`${categoryPath}/${post.slug}`}
                            link_text='Read now'
                            image_src={post.frontmatter.image}
                        />
                    )) : null}
                </LNXRow>
            </div>
        </Layout>
    );
}
