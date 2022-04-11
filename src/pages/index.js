import { getHomePageData } from '@/lib/api/home';
import Blocks from '@/components/organisms/Blocks';
import BaseLayout from '@/layouts/Base';

export default function Home({ data, preview }) {
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
    url: 'https://viaventuro.be',
  };

  return (
    <BaseLayout structuredData={structuredData}>
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
