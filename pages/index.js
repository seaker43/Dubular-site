export default function Home() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', color: 'white', fontFamily: 'sans-serif', padding: '1rem' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>dubUlar</div>
      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem' }}>Trending Now</h2>
          <button style={{ backgroundColor: '#111', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px' }}>See all &gt;</button>
        </div>

        <div style={{ display: 'flex', overflowX: 'scroll', gap: '1rem', marginTop: '1rem' }}>
          {[{
            title: 'Night Raid Tactics #1',
            image: 'https://i.imgur.com/jS1b6Rn.jpg'
          }, {
            title: 'DJ Krillz Party',
            image: 'https://i.imgur.com/m3QTP9M.jpg'
          }, {
            title: 'Urban Exploration IRL',
            image: 'https://i.imgur.com/9JMYk9r.jpg'
          }].map((item, index) => (
            <div key={index} style={{
              minWidth: '200px',
              height: '120px',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              position: 'relative',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
              <div style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', fontSize: '0.75rem', width: 'fit-content', padding: '2px 6px', borderRadius: '4px' }}>LIVE</div>
              <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'cyan' }}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
