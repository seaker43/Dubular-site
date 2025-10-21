export const runtime = 'edge';
export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center bg-black text-white p-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-neutral-400">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="underline text-[var(--laser-green,#00ff00)]">Return home</a>
      </div>
    </div>
  );
}
