export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 flex justify-around py-3 z-50">
      <a href="/" className="text-emerald-400 hover:text-emerald-300 transition">🏠</a>
      <a href="/search" className="text-emerald-400 hover:text-emerald-300 transition">🔍</a>
      <a href="/wallet" className="text-emerald-400 hover:text-emerald-300 transition">🪙</a>
      <a href="/ranks" className="text-emerald-400 hover:text-emerald-300 transition">🏆</a>
    </nav>
  );
}
