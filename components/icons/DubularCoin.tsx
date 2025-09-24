export default function DubularCoin({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="10" opacity=".15" />
      <path d="M7.5 8.5h6a3 3 0 0 1 0 6h-6v-6Zm2 2v2h4a1 1 0 1 0 0-2h-4Z" />
    </svg>
  );
}
