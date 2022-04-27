import { getFaqPageData } from '@/lib/api/faq';
import BaseLayout from '@/layouts/base';

export default function FaqPage({ data }) {
  return <BaseLayout page={data?.faqPage}>FAQ</BaseLayout>;
}

export async function getServerSideProps({ locale = 'nl', preview = false }) {
  const data = await getFaqPageData(locale, preview);

  return {
    props: {
      data,
      preview,
    },
  };
}
