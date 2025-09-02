export default function StreamCard({ title }) {
  return (
    <div className="w-40 flex-shrink-0 mx-1">
      <div className="relative">
        <img
          src={`https://source.unsplash.com/random/300x200?sig=${title}`}
          alt={title}
          className="rounded-lg object-cover w-full h-24"
        />
        <span className="absolute top-1 left-1 bg-red-600 text-white text-xs px-1 rounded">
          LIVE
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-200 truncate">{title}</p>
    </div>
  );
}
