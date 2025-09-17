export const dynamic = "force-dynamic";
import "../styles/globals.css";
import "../styles/theme-overrides.css";

export const metadata = { title: "Dubular" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-build={process.env.NEXT_PUBLIC_BUILD || ""}>
      <body>{children}</body>
    </html>
  );
}
