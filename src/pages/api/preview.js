// Source: https://nextjs.org/docs/advanced-features/preview-mode
// Has been greatly simplified
export default async function preview(req, res) {
  const { secret, slug = '', locale } = req.query;

  if (secret !== process.env.DATOCMS_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Enable Preview Mode by setting the cookies
  // Max 30 minutes of preview time
  res.setPreviewData({}, { maxAge: 60 * 30 });

  // Redirect to the path from the page
  let url = locale ? `/${locale}/${slug}` : `/${slug}`;
  // Remove all double slashes from the url.
  url = url.replace(/([^:]\/)\/+/g, '$1');

  res.setHeader('content-type', 'text/html; charset=UTF-8');
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`,
  );
  res.end();
}
