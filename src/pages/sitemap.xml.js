import { getAllPagesSlugsWithLocalesForSitemap } from '@/lib/api/sitemap';

const Sitemap = () => {};

function renderUrlTag(path, slugs, _updatedAt) {
  return slugs.map((slug) => {
    return `
    <url>
      <loc>${process.env.SITE_URL}${path}</loc>
      <lastmod>${_updatedAt}</lastmod>
    </url>
    `;
  });
}

export const getServerSideProps = async ({ res }) => {
  const pages = await getAllPagesSlugsWithLocalesForSitemap();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages.map((page) => {
        const { path, slugs, _updatedAt } = page;
        return renderUrlTag(path, slugs, _updatedAt);
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
