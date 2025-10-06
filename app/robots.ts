export default function robots() {
  const base = 'https://dubular.live';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
