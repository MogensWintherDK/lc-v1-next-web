import Layout from '../components/Layout';
// import {
//   getCMSHeaderData,
//   getCMSFooterData,
//   getCMSArticleByType,
// } from '../libs/lib-cms/services';
import {
  CMSArticleView,
} from '../libs/lib-cms/views';
import { LNXHeaderSection, LNXImageGridCard, LNXLineDark, LNXMarkdownGridCard, LNXTextSection, LNXTwoGrid } from '../libs/lib-lnx/components';
import {
  isLNXStagingMode,
  getLNXRevalidationTime,
} from '../libs/lib-lnx/utils';
import { LNXRow, LNXCircleTextCard } from '../libs/lib-lnx/components';
import ReactMarkdown from 'react-markdown';
import { getPost } from '../services/PostsService';
import { LNXBackgroundImageBlock, LNXMarkdownBlock } from '../libs/lib-lnx/components/Blocks';

export async function getStaticProps() {
  // const article = await getCMSArticleByType('index');

  return {
    props: {
      // ...article,
      // header_data: await getCMSHeaderData(),
      // footer_data: await getCMSFooterData(),
      blocks: {
        chaos: await getPost('chaos', "posts/blocks"),
        empower: await getPost('empower', "posts/blocks"),
        direction: await getPost('direction', "posts/blocks"),
        hybrid: await getPost('hybrid', "posts/blocks"),
        contact: await getPost('contact', "posts/blocks"),
      },
      draftMode: isLNXStagingMode(),
      revalidate: getLNXRevalidationTime(),
    },
    revalidate: getLNXRevalidationTime(),
  };
}

export default function Home(props: any) {

  return (
    <>
      <Layout header_data={props.header_data} footer_data={props.footer_data} metadata={props.metadata}>
        {props.draftMode && (
          <div className="bg-alert fixed top-0 z-[1000] p-2 m-2 rounded">Staging - Cache expires in {props.revalidate} sec</div>
        )}
        <LNXHeaderSection>
          <div>
            <b>Need strong technical help?</b><br />
            <span className='text-xl sm:text-2xl md:text-3xl'>Getting a good start, is half the job, and we can help with that!</span>
          </div>
        </LNXHeaderSection>

        <LNXTextSection>
          When we are busy with the everyday tasks and don&quot;t have a movement to stop and get some perspective, then it can be very hard to see how to move forward.
        </LNXTextSection>


        <LNXRow>
          <LNXCircleTextCard image_src='/images/small/cloud.webp' header='Cloud migration' link_text='Read more' link_href='/services/cloud-migration' />
          <LNXCircleTextCard image_src='/images/small/migration.webp' header='System optimization' link_text='Read more' link_href='#' />
          <LNXCircleTextCard image_src='/images/small/perspective.webp' header='Perspective' link_text='Read more' link_href='#' />
          <LNXCircleTextCard image_src='/images/small/system_design.webp' header='System design' link_text='Read more' link_href='#' />
          <LNXCircleTextCard image_src='/images/small/strategy.webp' header='Strategy' link_text='Read more' link_href='#' />
        </LNXRow>

        <div className='mt-8 py-8 bg-theme-g-0'>
          <LNXTwoGrid>
            <LNXMarkdownBlock data={props.blocks.chaos} />
            <LNXBackgroundImageBlock src='/images/small/chaos.webp' />
          </LNXTwoGrid>
          <div className='h-8' />
          <LNXTwoGrid>
            <LNXBackgroundImageBlock src='/images/small/team.webp' />
            <LNXMarkdownBlock data={props.blocks.empower} />
          </LNXTwoGrid>
          <div className='h-8' />
          <LNXTwoGrid>
            <LNXMarkdownBlock data={props.blocks.direction} />
            <LNXBackgroundImageBlock src='/images/small/perspective.webp' />
          </LNXTwoGrid>
        </div>

        <div className='Slim mt-8'>
          <LNXTwoGrid>
            <LNXMarkdownBlock data={props.blocks.hybrid} />
            <LNXMarkdownBlock data={props.blocks.contact} />
          </LNXTwoGrid>
        </div>

      </Layout>
    </>
  );
}
