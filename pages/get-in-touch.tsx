import { LNXHeaderSection, LNXRow, LNXTextGridCard } from '../libs/lib-lnx/components';
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
                about: await getPost('about', "posts/blocks"),
            },
            draftMode: isLNXStagingMode(),
            revalidate: getLNXRevalidationTime(),
        }
    };
};

export default function GetInTouchPage(props: any): React.JSX.Element {
    return (
        <Layout>
            <LNXHeaderSection>
                <div>
                    <b>Get in touch</b>
                </div>
            </LNXHeaderSection>
        </Layout >
    );
}
