export const dynamic="force-dynamic";
export const fetchCache="force-no-store";
export const revalidate=0;


import "../styles/globals.css";

export const metadata = { title: "Dubular" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-build={process.env.NEXT_PUBLIC_BUILD || ""}>
      <body>{children}</body>
    </html>
  );
}
