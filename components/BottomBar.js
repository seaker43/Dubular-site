export default function BottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 h-16 bg-black/70 backdrop-blur-md border-t border-white/10">
      <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between text-sm">
        <a href="#" className="text-white/80 hover:text-white">Home</a>
        <a href="#" className="text-white/80 hover:text-white">Browse</a>
        <a href="#" className="text-white/80 hover:text-white">Search</a>
        <a href="#" className="text-white/80 hover:text-white">Profile</a>
      </div>
    </div>
  );
}
