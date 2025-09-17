export const metadata = { title: 'Dubular' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0,background:'#000',color:'#0ff',fontFamily:'system-ui, sans-serif'}}>
        {children}
      </body>
    </html>
  );
}
