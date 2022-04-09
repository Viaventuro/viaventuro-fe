import Head from 'next/head';
import { getHomePageData } from '@/lib/api/home';
import styles from '../../styles/Home.module.css';

const Home = ({ data, preview }) => {
  console.log(data);
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

      <main className={styles.main}>
        <h1 className={styles.title}>Coming very soon...</h1>

        <p className={styles.description}>
          Maak binnenkort kennis met onze gloednieuwe Volkswagen California T6.1!
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.goboony.com/campers/belgium/limburg/lommel/17034"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Sneak preview &rarr;</h2>
            <p>Neem al eens een kijkje op onze GoBoony pagina.</p>
          </a>

          <a
            href="https://www.volkswagen-commercial-vehicles.be/nl/modellen/california-6-1.html"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>De California T6.1 &rarr;</h2>
            <p>Meer over de California T6.1 op de website van VW.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>&copy; Viaventuro {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Home;

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
