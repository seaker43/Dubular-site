import { getRequestContext } from "@cloudflare/next-on-pages";
export type Env = { DB: any };
export const getDB = () => (getRequestContext().env as Env).DB;
