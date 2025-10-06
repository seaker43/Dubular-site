'use client';
export default function Error({
  error,
  reset,
}: { error: unknown; reset: () => void }) {
  return (
    <html>
      <body className="min-h-dvh grid place-items-center bg-black text-white p-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="text-neutral-400 text-sm">
            {(error as any)?.message ?? 'Unexpected error'}
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="rounded-lg border border-neutral-700 px-4 py-2 text-sm"
            >
              Try again
            </button>
            <a
              href="/"
              className="rounded-lg border border-[var(--laser-green,#00ff00)] px-4 py-2 text-sm text-[var(--laser-green,#00ff00)]"
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
