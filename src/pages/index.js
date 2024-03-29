import { getHomePageData } from '@/lib/api/home';
import BaseLayout from '@/layouts/base';
import Blocks from '@/components/organisms/blocks';

export default function HomePage({ data }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: 'Viaventuro',
    email: 'seppe.alaerts21@gmail.com',
    telephone: '+324 71 44 07 14',
    description: 'Op reis met de legendarische Volkswagen California T6.1',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Konijnenpijp 94',
      addressLocality: 'Lommel',
      postalCode: '3920',
      addressCountry: 'Belgium',
    },
    logo: 'https://www.viaventuro.be/assets/images/viaventuro.png',
    url: 'https://www.viaventuro.be',
  };

  console.log(data);

  return (
    <BaseLayout structuredData={structuredData} page={data?.homePage}>
      <Blocks content={data?.homePage?.content} />
    </BaseLayout>
  );
}

export async function getServerSideProps({ locale = 'nl', preview = false }) {
  const data = await getHomePageData(locale, preview);

  return {
    props: {
      data,
      preview,
    },
  };
}
