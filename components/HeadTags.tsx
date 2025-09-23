import Head from 'next/head';
export default function HeadTags({ title='Dubular', desc='Dubular site', url='https://dubular.app', image='/og.png' }) {
 return (
 <Head>
 <meta charSet="utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <title>{title}</title>
 <meta name="description" content={desc} />
 <meta property="og:type" content="website" />
 <meta property="og:title" content={title} />
 <meta property="og:description" content={desc} />
 <meta property="og:url" content={url} />
 <meta property="og:image" content={image} />
 <link rel="icon" href="/favicon.ico" />
 </Head>
 );
}
