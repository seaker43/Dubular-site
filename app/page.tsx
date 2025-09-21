import LegacyHome from "../components/LegacyHome";

export default function Page() {
  // Server component must not pass functions or non-serializable props.
  return <LegacyHome />;
}
