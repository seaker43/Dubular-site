// pages/_app.js
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="pt-0"> {/* or just remove className entirely */}
      <Component {...pageProps} />
    </main>
  )
}
