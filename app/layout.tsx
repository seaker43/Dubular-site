import "../styles/globals.css";

export const metadata = {
  title: "Dubular",
  description: "Dubular beta",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
