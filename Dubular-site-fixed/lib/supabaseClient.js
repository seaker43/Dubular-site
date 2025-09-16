import { createClient } from"@supabase/supabase-js";

let _supabase = null;

/**
 * Returns a singleton Supabase client.
 * - Safe during build/SSR: does not throw if env vars are absent on the server.
 * - In the browser, it reads NEXT_PUBLIC_* vars.
 */
export function getSupabase() {
 if (_supabase) return _supabase;

 const isBrowser = typeof window !=="undefined";
 const url =
 process.env.NEXT_PUBLIC_SUPABASE_URL ||
 (isBrowser ? window.__SUPABASE_URL__ :"");
 const key =
 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
 (isBrowser ? window.__SUPABASE_ANON_KEY__ :"");

 // During build/SSR we may not have envs—return a minimal stub so pages can render.
 if (!url || !key) {
 return {
 auth: {
 async signInWithPassword() {
 throw new Error(
"Supabase env not configured on server. Try in the browser or add env vars."
 );
 },
 async resetPasswordForEmail() {
 throw new Error(
"Supabase env not configured on server. Try in the browser or add env vars."
 );
 },
 },
 };
 }

 _supabase = createClient(url, key, { auth: { flowType:"pkce" } });
 return _supabase;
}
