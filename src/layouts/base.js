import Footer from '@/components/organisms/Footer';
import Head from 'next/head';

const BaseLayout = ({ children, structuredData }) => {
  return (
    <>
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
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
