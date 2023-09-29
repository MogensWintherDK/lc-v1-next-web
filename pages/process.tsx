import { LNXTwoGrid } from '../libs/lib-lnx/components';
import { LNXBackgroundImageBlock, LNXMarkdownBlock } from '../libs/lib-lnx/components/Blocks';
import {
    isLNXStagingMode,
    getLNXRevalidationTime,
} from '../libs/lib-lnx/utils';
import { getPost } from '../services/PostsService';
import Layout from '../components/Layout';

interface IPost {
    slug: string,
    title: string,
    frontmatter?: any,
}

const categoryName = 'posts/services';
const categoryPath = 'services';

export const getStaticProps = async () => {
    return {
        props: {
            blocks: {
                process: await getPost('process', "posts/pages"),
            },
            draftMode: isLNXStagingMode(),
            revalidate: getLNXRevalidationTime(),
        }
    };
};

export default function AboutPage(props: any): React.JSX.Element {
    return (
        <Layout>
            <LNXTwoGrid>
                <LNXMarkdownBlock data={props.blocks.process} />
                <LNXBackgroundImageBlock src='/images/large/process.jpg' />
            </LNXTwoGrid>
        </Layout >
    );
}

