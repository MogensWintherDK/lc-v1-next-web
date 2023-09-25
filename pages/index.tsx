import Layout from '../components/Layout';
// import {
//   getCMSHeaderData,
//   getCMSFooterData,
//   getCMSArticleByType,
// } from '../libs/lib-cms/services';
import {
  CMSArticleView,
} from '../libs/lib-cms/views';
import { LNXHeaderSection } from '../libs/lib-lnx/components';
import {
  isLNXStagingMode,
  getLNXRevalidationTime,
} from '../libs/lib-lnx/utils';
import { LNXRow, LNXCircleTextCard } from '../libs/lib-lnx/components';

export async function getStaticProps() {
  // const article = await getCMSArticleByType('index');

  return {
    props: {
      // ...article,
      // header_data: await getCMSHeaderData(),
      // footer_data: await getCMSFooterData(),
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
            <b>Har din virksomhed helt styr på cloud migrering?</b><br />
            <span className='text-xl sm:text-2xl md:text-3xl'>At få startet rigtigt er den halve opgave, og det kan vi hjælpe med!</span>
          </div>
        </LNXHeaderSection>

        <LNXRow>
          <LNXCircleTextCard image_src='/images/1.webp' header='Cloud migration' link_text='Læs mere' link_href='#' />
          <LNXCircleTextCard image_src='/images/2.webp' header='System optimering' link_text='Læs mere' link_href='#' />
          <LNXCircleTextCard image_src='/images/3.webp' header='Perspektiv' link_text='Læs mere' link_href='#' />
          <LNXCircleTextCard image_src='/images/4.webp' header='System udvilking' link_text='Læs mere' link_href='#' />
          <LNXCircleTextCard image_src='/images/5.webp' header='Strategi udvikling' link_text='Læs mere' link_href='#' />
        </LNXRow>

      </Layout>
    </>
  );
}
