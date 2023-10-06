import Layout from '../components/Layout';
import { LNXHeaderSection, LNXLineDark, LNXTextSection, LNXTwoGrid } from '../libs/lib-lnx/components';
import {
  isLNXStagingMode,
  getLNXRevalidationTime,
} from '../libs/lib-lnx/utils';
import { LNXRow, LNXCircleTextCard, LNXSquareTextCard } from '../libs/lib-lnx/components';
import { getPostBlock } from '../services/PostsService';
import { LNXBackgroundImageBlock, LNXMarkdownBlock } from '../libs/lib-lnx/components/Blocks';
import { getLNXFullUrl } from '../libs/lib-lnx/utils/Metadata';
import { ILNXMetadata } from '../libs/lib-lnx/types/Metadata';

export async function getStaticProps() {

  return {
    props: {
      blocks: {
        intro: await getPostBlock('intro'),
        direction: await getPostBlock('direction'),
        empower: await getPostBlock('empower'),
        forward: await getPostBlock('forward'),
        hybrid: await getPostBlock('hybrid'),
        get_in_touch: await getPostBlock('get-in-touch'),
      },
      draftMode: isLNXStagingMode(),
      revalidate: getLNXRevalidationTime(),
      metadata: {
        title: 'IT Technical and Managing Consultant',
        description: 'Get experienced help to solve your challenges faster',
        keywords: 'IT, Technical, Managing, Experience, Developer, Empower, Team, Big picture, Direction',
        url: getLNXFullUrl('/'),
        thumb: getLNXFullUrl('/images/logo/W-Logo-Circle-V2-300px.png'),
      } as ILNXMetadata,
    },
    revalidate: getLNXRevalidationTime(),
  };
}

export default function Home(props: any) {

  return (
    <Layout metadata={props.metadata}>
      {props.draftMode && (
        <div className="bg-alert fixed top-0 z-[1000] p-2 m-2 rounded">Staging - Cache expires in {props.revalidate} sec</div>
      )}
      <LNXHeaderSection>
        <div>
          <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>Need a strong Technical Managing Consultant?</h1>
          <span className='text-xl sm:text-2xl md:text-3xl'>Getting a good start is half the job, and I can help with that!</span>
        </div>
      </LNXHeaderSection>

      <LNXTextSection>
        When we are busy with everyday tasks and don&apos;t have a movement to stop and get some perspective, then it can be very hard to see how to move forward.
      </LNXTextSection>


      <LNXRow>
        <LNXCircleTextCard image_src='/images/small/management.jpg' header='Management' link_text='Read more' link_href='/services/management' />
        <LNXCircleTextCard image_src='/images/small/optimization_code.jpg' header='Optimization' link_text='Read more' link_href='/services/optimization' />
        <LNXCircleTextCard image_src='/images/small/migration.jpg' header='Migration' link_text='Read more' link_href='/services/migration' />
        <LNXCircleTextCard image_src='/images/small/perspective.jpg' header='Perspective' link_text='Read more' link_href='/services/perspective' />
        <LNXCircleTextCard image_src='/images/small/strategy_road.jpg' header='Strategy' link_text='Read more' link_href='/services/strategy' />
      </LNXRow>

      <div className='mt-8 py-8 bg-theme-g-0'>
        <LNXTwoGrid>
          <LNXMarkdownBlock data={props.blocks.intro} />
          <LNXBackgroundImageBlock src='/images/large/ocean.jpg' />
        </LNXTwoGrid>
        <div className='h-8' />
        <LNXTwoGrid>
          <LNXBackgroundImageBlock src='/images/large/perspective.jpg' />
          <LNXMarkdownBlock data={props.blocks.direction} />
        </LNXTwoGrid>
        <div className='h-8' />
        <LNXTwoGrid>
          <LNXMarkdownBlock data={props.blocks.empower} />
          <LNXBackgroundImageBlock src='/images/large/team.jpg' />
        </LNXTwoGrid>
        <div className='h-8' />
        <LNXTwoGrid>
          <LNXBackgroundImageBlock src='/images/large/shore.jpg' />
          <LNXMarkdownBlock data={props.blocks.forward} />
        </LNXTwoGrid>
      </div>

      <div className='Slim mt-8'>
        <LNXHeaderSection>Cases</LNXHeaderSection>
        <LNXRow cols='2'>
          <LNXSquareTextCard image_src='/images/external/cloudprinter.png' header='Cloudprinter.com' link_text='Read more' link_href='/cases/cloudprintercom' />
          <LNXSquareTextCard image_src='/images/external/fotodk.png' header='Foto.dk' link_text='Read more' link_href='/cases/fotodk' />
        </LNXRow>
      </div>

      <LNXLineDark />

      <div className='Slim mt-8'>
        <LNXTwoGrid>
          <LNXMarkdownBlock data={props.blocks.hybrid} />
          <LNXMarkdownBlock data={props.blocks.get_in_touch} />
        </LNXTwoGrid>
      </div>
    </Layout>
  );
}
