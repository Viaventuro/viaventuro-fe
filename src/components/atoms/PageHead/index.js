import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';

const PageHead = ({ seo, slug, noIndex, noFollow, structuredData }) => {
  let metaTags = [...[], ...(seo && Object.keys(seo).length > 0 ? seo : [])];

  const robots = [
    noIndex === true ? 'noindex' : undefined,
    noFollow === true ? 'nofollow' : undefined,
  ].filter((x) => x !== undefined);

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      {metaTags.length ? renderMetaTags(metaTags) : <title>Viaventuro</title>}
      {robots.length > 0 && <meta name="robots" content={robots.join(', ')} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
};

export default PageHead;
