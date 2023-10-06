import { LNXTwoGrid } from '../libs/lib-lnx/components';
import { LNXBackgroundImageBlock, LNXMarkdownBlock } from '../libs/lib-lnx/components/Blocks';
import { getPostPageProps } from '../services/PostsService';
import Layout from '../components/Layout';

const slug = 'process';

export const getStaticProps = async () => {
    return getPostPageProps(slug);
};

export default function AboutPage(props: any): React.JSX.Element {
    return (
        <Layout metadata={props.metadata}>
            <LNXTwoGrid>
                <LNXMarkdownBlock data={props.post} />
                <LNXBackgroundImageBlock src={props.post.frontmatter.image} />
            </LNXTwoGrid>
        </Layout >
    );
}