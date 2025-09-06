export default function BottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 h-16 bg-black/70 backdrop-blur-md border-t border-white/10">
      <nav className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between text-sm">
        <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
        <a href="/recommended" className="text-white/80 hover:text-white transition-colors">Browse</a>
        <a href="/search" className="text-white/80 hover:text-white transition-colors">Search</a>
        <a href="/account" className="text-white/80 hover:text-white transition-colors">Profile</a>
      </nav>
    </div>
  );
}
