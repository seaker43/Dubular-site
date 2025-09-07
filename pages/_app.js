import '@/styles/globals.css'
import BottomNav from '@/components/BottomNav'

export default function App({ Component, pageProps, router }) {
  // crude active detection from pathname
  const path = router?.router?.pathname ?? router.pathname
  const active =
    path.startsWith('/ranks') ? 'ranks' :
    path.startsWith('/favs') ? 'favs' :
    path.startsWith('/wallet') ? 'wallet' :
    path.startsWith('/account') ? 'account' :
    'home'

  return (
    <div className="pb-20"> {/* space for bottom nav */}
      <main className="mx-auto max-w-5xl pt-6 space-y-8">
        <Component {...pageProps} />
      </main>
      <BottomNav active={active} />
    </div>
  )
}
