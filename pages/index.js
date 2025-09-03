import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white px-4 py-6">
      <header className="text-4xl font-bold mb-6">dubUlar</header>

      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Trending Now</h2>
          <a href="#" className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">See all &gt;</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { title: 'Night Raid Tactics #1', img: '/trending1.jpg' },
            { title: 'DJ Krillz Party', img: '/trending2.jpg' },
            { title: 'Street Battle 9', img: '/trending3.jpg' },
            { title: 'Dubular Presents', img: '/trending4.jpg' },
            { title: 'Tech Live Coding', img: '/trending5.jpg' },
          ].map((video, i) => (
            <div key={i} className="bg-zinc-900 rounded overflow-hidden shadow-lg relative">
              <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded">LIVE</span>
              <Image src={video.img} alt={video.title} width={300} height={170} className="w-full h-auto object-cover" />
              <div className="p-2">
                <h3 className="text-cyan-400 font-medium text-sm">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add more rows (e.g., Recommended, Live Channels, etc.) here */}
    </main>
  );
}
