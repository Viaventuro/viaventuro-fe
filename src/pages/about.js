import { getAboutPageData } from '@/lib/api/about';
import BaseLayout from '@/layouts/base';

export default function AboutPage({ data }) {
  return <BaseLayout page={data?.aboutPage}>About</BaseLayout>;
}

export async function getServerSideProps({ locale = 'nl', preview = false }) {
  const data = await getAboutPageData(locale, preview);

  return {
    props: {
      data,
      preview,
    },
  };
}
