import { getTheCamperPageData } from '@/lib/api/camper';
import BaseLayout from '@/layouts/base';

export default function TheCamperPage({ data }) {
  return <BaseLayout page={data?.theCamperPage}>The Camper</BaseLayout>;
}

export async function getServerSideProps({ locale = 'nl', preview = false }) {
  const data = await getTheCamperPageData(locale, preview);

  return {
    props: {
      data,
      preview,
    },
  };
}
