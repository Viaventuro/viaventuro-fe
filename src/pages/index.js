import Head from 'next/head';
import { getHomePageData } from '@/lib/api/home';
import styles from '../../styles/Home.module.css';
import Blocks from '@/components/organisms/blocks';

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
    <div className={styles.container}>
      <Head>
        <title>Viaventuro</title>
        <meta name="description" content="Op reis met de legendarische Volkswagen California." />
        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <Blocks content={data?.homePage?.content} />

      <footer className={styles.footer}>&copy; Viaventuro {new Date().getFullYear()}</footer>
    </div>
  );
}

export async function getServerSideProps({
  params,
  locale = 'nl',
  defaultLocale,
  preview = false,
}) {
  const data = await getHomePageData(locale, preview);

  return {
    props: {
      data,
      preview,
    },
  };
}
