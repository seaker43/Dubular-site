export default function Home() {
  const cards = [
    {
      title: 'Night Raid Tactics #1',
      image: 'https://cdn.pixabay.com/photo/2020/03/31/08/31/stream-4989263_1280.jpg'
    },
    {
      title: 'DJ Krillz Party',
      image: 'https://cdn.pixabay.com/photo/2017/10/19/10/55/concert-2861055_1280.jpg'
    },
    {
      title: 'Urban Exploration IRL',
      image: 'https://cdn.pixabay.com/photo/2021/02/04/11/10/urban-5979797_1280.jpg'
    }
  ];

  return (
    <div style={{ backgroundColor: '#0d0d0d', color: 'white', fontFamily: 'sans-serif', padding: '1rem' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>dubUlar</div>
      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem' }}>Trending Now</h2>
          <button style={{ backgroundColor: '#111', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px' }}>See all &gt;</button>
        </div>

        <div style={{ display: 'flex', overflowX: 'scroll', gap: '1rem', marginTop: '1rem' }}>
          {cards.map((item, index) => (
            <div key={index} style={{
              minWidth: '200px',
              backgroundColor: '#222',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
              <div style={{ padding: '0.5rem' }}>
                <div style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', fontSize: '0.75rem', width: 'fit-content', padding: '2px 6px', borderRadius: '4px', marginBottom: '0.25rem' }}>
                  LIVE
                </div>
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'cyan' }}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
