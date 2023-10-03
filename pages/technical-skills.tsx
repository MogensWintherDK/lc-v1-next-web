import { LNXMarkdownBlock } from '../libs/lib-lnx/components/Blocks';
import { getPostPageProps } from '../services/PostsService';
import Layout from '../components/Layout';

const slug = 'technical-skills';

export const getStaticProps = async () => {
    return getPostPageProps(slug);
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
