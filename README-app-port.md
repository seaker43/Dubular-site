This is a minimal App Router port of your ZIP source.

- app/layout.tsx wraps every page with Header and BottomBar, just like pages/_app.js.
- app/page.tsx is adapted from pages/index.js (Head removed, Header removed, default export renamed to Page).
- components/, public/, styles/ are copied from your ZIP.
- If you have API routes or other pages, repeat: move files from pages/ to app/ structure.

Deploy steps (Cloudflare Pages + next-on-pages):
Build command: npx @cloudflare/next-on-pages@1
Path: .vercel/output/static
