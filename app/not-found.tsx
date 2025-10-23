export const runtime = 'edge';
export default function NotFound() {
  return (
    <div className="p-6 text-white text-center">
      <h1 className="text-2xl font-semibold mb-2">Not Found</h1>
      <p className="text-neutral-400">
        The page you requested could not be found.
      </p>
      <a href="/" className="underline mt-4 inline-block">Go home</a>
    </div>
  );
}


