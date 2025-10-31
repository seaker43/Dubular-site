// @ts-ignore

export const runtime="nodejs";
async function resolveId(qs: URLSearchParams, db: any) {
  const id = qs.get("creator_id");
  if (id && /^\d+$/.test(id)) return +id;
  const h = qs.get("handle");
  if (!h) return null;
  return (
    (
      (await db
        .prepare("SELECT id FROM creators WHERE handle=?")
        .bind(h)
        .first()) as any
    )?.id ?? null
  );
}
