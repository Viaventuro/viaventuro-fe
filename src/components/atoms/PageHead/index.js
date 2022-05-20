import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import getSiteUrl from '@/lib/helpers/getSiteUrl';
import { useRouter } from 'next/router';
import { getUrl } from '@/lib/helpers/get-url';

const PageHead = ({ seo, slug, noIndex, noFollow, path = '', structuredData }) => {
  let metaTags = [...[], ...(seo && Object.keys(seo).length > 0 ? seo : [])];

  const robots = [
    noIndex === true ? 'noindex' : undefined,
    noFollow === true ? 'nofollow' : undefined,
  ].filter((x) => x !== undefined);

  const { locale, defaultLocale } = useRouter();

  return (
    <Head>
      {metaTags.length ? renderMetaTags(metaTags) : <title>Viaventuro</title>}
      {robots.length > 0 && <meta name="robots" content={robots.join(', ')} />}
      <link rel="canonical" href={getUrl(locale, defaultLocale, path, slug)} />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/head/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/head/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/head/favicon-16x16.png" />
      <link rel="manifest" href="/assets/head/site.webmanifest" />
      <link rel="mask-icon" href="/assets/head/safari-pinned-tab.svg" color="#a0a0a0" />
      <link rel="shortcut icon" href="/assets/head/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/assets/head/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
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
