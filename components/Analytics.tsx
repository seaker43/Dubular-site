import Script from "next/script";

export default function Analytics() {
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <>
      {umamiId && umamiSrc && (
        <Script async defer data-website-id={umamiId} src={umamiSrc} />
      )}
      {plausibleDomain && (
        <Script
          async
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.tagged-events.js"
        />
      )}
    </>
  );
}
