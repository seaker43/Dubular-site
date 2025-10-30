export const runtime="nodejs";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { handle: string } }) {
  const env: any = env;
  const { handle } = params;

  const row = await env.DB
    .prepare("SELECT display_name, bio, avatar_url FROM profiles WHERE handle = ?")
    .bind(handle)
    .first<{ display_name: string | null; bio: string | null; avatar_url: string | null }>();

  if (!row) return notFound();

  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <div className="rounded-2xl bg-neutral-900/60 p-6 border border-neutral-800 shadow-lg">
        <div className="flex items-center gap-4">
          {row.avatar_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={row.avatar_url}
              alt="Avatar"
              className="w-16 h-16 rounded-full ring-2 ring-[var(--laser-green,#00ff00)]"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-neutral-800" />
          )}
          <div>
            <h1 className="text-xl font-semibold">{row.display_name ?? handle}</h1>
            {row.bio && <p className="text-neutral-400 text-sm">{row.bio}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
