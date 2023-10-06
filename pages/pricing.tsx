import { getPostPageProps } from '../services/PostsService';
import BaloonArticle from '../components/BaloonArticle';

const slug = 'pricing';

export const getStaticProps = async () => {
    return getPostPageProps(slug);
};

export default function Pricing(props: any): React.JSX.Element {
    return <BaloonArticle content={props.post.content} frontmatter={props.post.frontmatter} metadata={props.metadata} />
}