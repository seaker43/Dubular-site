import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Keep external file (cache-busted) */}
        <link rel="stylesheet" href="/overrides.css?v=10" />
        {/* Inline safety net so we bypass any external CSS caching */}
        <style id="inline-overrides">{`
          /* Dubular custom overrides */
          .live-badge{
            background:red;color:#fff;font-weight:bold;border-radius:4px;
            padding:2px 6px;font-size:.75rem;box-shadow:0 0 10px rgba(255,0,0,.8);
          }
          /* Thumbnail neon green glow */
          .thumbnail img{
            border-radius:8px;box-shadow:0 0 12px rgba(0,255,128,.8);
            transition:transform .2s ease, box-shadow .2s ease;
          }
          .thumbnail img:hover{
            transform:scale(1.05);box-shadow:0 0 18px rgba(0,255,128,1);
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
