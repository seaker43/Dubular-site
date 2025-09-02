export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around py-2 border-t border-gray-800">
      <div className="flex flex-col items-center">
        <span className="text-yellow-400">⬆️</span>
        <span className="text-xs">Ranks</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-red-500">❤️</span>
        <span className="text-xs">Favs</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-white">🔍</span>
        <span className="text-xs">Search</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-green-400">👛</span>
        <span className="text-xs">Wallet</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-blue-400">👤</span>
        <span className="text-xs">Account</span>
      </div>
    </nav>
  )
}
