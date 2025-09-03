import CardGrid from '../ui/CardGrid'
import StreamCard from '../ui/StreamCard'

export default function Home() {
  const trending = [
    { title: 'Night Raid Tactics #1', img: '/trending1.jpg', live: true },
    { title: 'DJ Krillz Party', img: '/trending2.jpg', live: true },
    { title: 'Street Battle 9', img: '/trending3.jpg', live: true },
    { title: 'Dubular Presents', img: '/trending4.jpg', live: false },
    { title: 'Tech Live Coding', img: '/trending5.jpg', live: true },
  ]

  return (
    <main className="bg-black min-h-screen text-white px-6 py-8">
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Trending Now</h2>
          <a
            href="#"
            className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
          >
            See all &gt;
          </a>
        </div>

        {/* Use CardGrid with StreamCard children */}
        <CardGrid>
          {trending.map((video, i) => (
            <StreamCard key={i} {...video} />
          ))}
        </CardGrid>
      </section>
    </main>
  )
}
