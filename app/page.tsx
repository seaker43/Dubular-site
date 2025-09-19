import dynamic from "next/dynamic";

const LegacyHome = dynamic(() => import("../components/LegacyHome"), { ssr: true });

export default function Page() {
  return <LegacyHome />;
}
