export const runtime = 'edge';

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-6 py-24 text-white">
      <div className="text-center">
        <p className="text-sm/6 text-neutral-400">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm/6 text-neutral-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-6">
          <a href="/" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm">
            Go home
          </a>
        </div>
      </div>
    </main>
  );
}
