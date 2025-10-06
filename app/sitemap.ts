export default function sitemap() {
  const base = 'https://dubular.live';
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/rank`, lastModified: now },
    { url: `${base}/search`, lastModified: now },
    { url: `${base}/favorites`, lastModified: now },
    { url: `${base}/account`, lastModified: now },
  ];
}
