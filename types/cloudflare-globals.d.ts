/* Temporary ambient Worker bindings so TS/IDE stop complaining while we migrate */
declare class D1Database {}
declare interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
}
