import { LNXMarkdownBlock } from '../libs/lib-lnx/components/Blocks';
import { LNXRow, LNXCircleTextCard } from '../libs/lib-lnx/components';
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
            <LNXRow style='Slim justify-start' cols='5' centered={false}>
                {props.post.frontmatter.links.map((link: { image_src: string; text: string; href: string; }, index: any) => (
                    <LNXCircleTextCard key={index} image_src={link.image_src} header={link.text} link_text='Read more' link_href={link.href} />
                ))}
            </LNXRow>
        </Layout >
    );
}
