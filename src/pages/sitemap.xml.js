import { getAllPagesSlugsWithLocalesForSitemap } from '@/lib/api/sitemap';
import { getUrl } from '@/lib/helpers/get-url';

const Sitemap = () => {};

function renderUrlTag(locales, defaultLocale, path, slugs, lastmod) {
  return locales
    .map((locale) => {
      const slugsObject = slugs.find((slugsObject) => slugsObject.locale === locale);

      if (!slugsObject) {
        return '';
      }

      return `
      <url>
        <loc>${getUrl(locale, defaultLocale, path, slugsObject.slug)}</loc>
        <lastmod>${lastmod}</lastmod>

        ${locales
          .map((locale) => {
            const alternateSlugsObject = slugs.find(
              (alternateSlugsObject) => alternateSlugsObject.locale === locale,
            );

            if (!alternateSlugsObject) {
              return '';
            }

            return `
              <link
                rel="alternate"
                hreflang="${locale.toLowerCase()}"
                href="${getUrl(locale, defaultLocale, path, alternateSlugsObject.slug)}"
              />
            `;
          })
          .join('')}
        </url>`;
    })
    .join('');
}

export const getServerSideProps = async ({ res, locale, locales, defaultLocale }) => {
  const pages = await getAllPagesSlugsWithLocalesForSitemap();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages.map((page) => {
        const { path, slugs, _updatedAt } = page;
        return renderUrlTag(locales, defaultLocale, path, slugs, _updatedAt);
      })}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
