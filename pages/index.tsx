import Layout from '../components/Layout';
import { LNXHeaderSection, LNXTextSection, LNXTwoGrid } from '../libs/lib-lnx/components';
import {
  isLNXStagingMode,
  getLNXRevalidationTime,
} from '../libs/lib-lnx/utils';
import { LNXRow, LNXCircleTextCard } from '../libs/lib-lnx/components';
import { getPost } from '../services/PostsService';
import { LNXBackgroundImageBlock, LNXMarkdownBlock } from '../libs/lib-lnx/components/Blocks';

export async function getStaticProps() {

  return {
    props: {
      blocks: {
        chaos: await getPost('chaos', "posts/blocks"),
        empower: await getPost('empower', "posts/blocks"),
        direction: await getPost('direction', "posts/blocks"),
        hybrid: await getPost('hybrid', "posts/blocks"),
        get_in_touch: await getPost('get-in-touch', "posts/blocks"),
      },
      draftMode: isLNXStagingMode(),
      revalidate: getLNXRevalidationTime(),
    },
    revalidate: getLNXRevalidationTime(),
  };
}

export default function Home(props: any) {

  return (
    <Layout header_data={props.header_data} footer_data={props.footer_data} metadata={props.metadata}>
      {props.draftMode && (
        <div className="bg-alert fixed top-0 z-[1000] p-2 m-2 rounded">Staging - Cache expires in {props.revalidate} sec</div>
      )}
      <LNXHeaderSection>
        <div>
          <b>Need a strong technical Managing Consultant?</b><br />
          <span className='text-xl sm:text-2xl md:text-3xl'>Getting a good start is half the job, and I can help with that!</span>
        </div>
      </LNXHeaderSection>

      <LNXTextSection>
        When we are busy with everyday tasks and don&apos;t have a movement to stop and get some perspective, then it can be very hard to see how to move forward.
      </LNXTextSection>


      <LNXRow>
        <LNXCircleTextCard image_src='/images/small/management.jpg' header='Management' link_text='Read more' link_href='/services/management' />
        <LNXCircleTextCard image_src='/images/small/optimization.jpg' header='Optimization' link_text='Read more' link_href='/services/optimization' />
        <LNXCircleTextCard image_src='/images/small/migration.jpg' header='Migration' link_text='Read more' link_href='/services/migration' />
        <LNXCircleTextCard image_src='/images/small/perspective.jpg' header='Perspective' link_text='Read more' link_href='/services/perspective' />
        <LNXCircleTextCard image_src='/images/small/strategy.jpg' header='Strategy' link_text='Read more' link_href='/services/strategy' />
      </LNXRow>

      <div className='mt-8 py-8 bg-theme-g-0'>
        <LNXTwoGrid>
          <LNXMarkdownBlock data={props.blocks.chaos} />
          <LNXBackgroundImageBlock src='/images/large/chaos.jpg' />
        </LNXTwoGrid>
        <div className='h-8' />
        <LNXTwoGrid>
          <LNXBackgroundImageBlock src='/images/large/team.jpg' />
          <LNXMarkdownBlock data={props.blocks.empower} />
        </LNXTwoGrid>
        <div className='h-8' />
        <LNXTwoGrid>
          <LNXMarkdownBlock data={props.blocks.direction} />
          <LNXBackgroundImageBlock src='/images/large/perspective.jpg' />
        </LNXTwoGrid>
      </div>

      <div className='Slim mt-8'>
        <LNXTwoGrid>
          <LNXMarkdownBlock data={props.blocks.hybrid} />
          <LNXMarkdownBlock data={props.blocks.get_in_touch} />
        </LNXTwoGrid>
      </div>

    </Layout>
  );
}
