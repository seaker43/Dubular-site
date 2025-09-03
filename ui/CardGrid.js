export default function CardGrid({ children }) {
  return <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">{children}</div>;
}
