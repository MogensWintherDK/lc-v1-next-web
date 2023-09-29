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
                get_in_touch: await getPost('get-in-touch', "posts/pages"),
            },
            draftMode: isLNXStagingMode(),
            revalidate: getLNXRevalidationTime(),
        }
    };
};

export default function GetInTouchPage(props: any): React.JSX.Element {
    return (
        <Layout>
            <LNXTwoGrid>
                <LNXMarkdownBlock data={props.blocks.get_in_touch} />
                <LNXBackgroundImageBlock className='min-h-[600px]' src='/images/large/contact.jpg' />
            </LNXTwoGrid>
        </Layout >
    );
}
