export default function Robots() {}

export async function getServerSideProps({ res }) {
  if (!process.env.SITE_URL) {
    throw new Error('Env variable "SITE_URL" should be defined.');
  }

  let txt = `User-agent: *\n`;
  txt += `Allow: /\n`;
  txt += `\n`;
  txt += `Sitemap: ${process.env.SITE_URL}/sitemap.xml\n`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(txt);
  res.end();

  return {
    props: {},
  };
}
