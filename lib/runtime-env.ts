export type RuntimeEnv = {
  DB?: D1Database;
  CLERK_PUBLISHABLE_KEY?: string;
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?: string;
  CLERK_SECRET_KEY?: string;
};
export function getRuntimeEnv(): RuntimeEnv {
  try {
    const { getRequestContext } = require("@cloudflare/next-on-pages");
    const env = getRequestContext().env as RuntimeEnv | undefined;
    if (env) return { ...env, ...process.env };
  } catch {}
  return { ...process.env } as RuntimeEnv;
}
