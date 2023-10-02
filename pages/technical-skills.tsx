import { LNXMarkdownBlock } from '../libs/lib-lnx/components/Blocks';
import {
    isLNXStagingMode,
    getLNXRevalidationTime,
} from '../libs/lib-lnx/utils';
import { getPost } from '../services/PostsService';
import Layout from '../components/Layout';
import { ILNXMetadata } from '../libs/lib-lnx/types/Metadata';
import { getLNXFullUrl, getLNXTitle } from '../libs/lib-lnx/utils/Metadata';

const categoryName = 'posts/pages';
const categoryPath = 'technical-skills';

export const getStaticProps = async () => {
    const post = getPost(categoryPath, categoryName);

    const metadata: ILNXMetadata = {
        title: getLNXTitle(post.frontmatter.title),
        description: post.frontmatter.description,
        keywords: post.frontmatter.keywords,
        url: getLNXFullUrl(categoryPath),
        thumb: getLNXFullUrl(post.frontmatter.thumb),
    }

    return {
        props: {
            post: post,
            draftMode: isLNXStagingMode(),
            revalidate: getLNXRevalidationTime(),
            metadata: metadata,
        }
    };
};

export default function AboutPage(props: any): React.JSX.Element {
    return (
        <Layout metadata={props.metadata}>
            <div className='Slim TechnicalSkills'>
                <LNXMarkdownBlock data={props.post} />
            </div>
        </Layout >
    );
}

