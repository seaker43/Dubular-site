export default function Home() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '20px', fontSize: '32px', fontWeight: 'bold' }}>dubUlar</header>

      <section style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '24px' }}>Trending Now</h2>
          <button style={{ background: '#111', border: '1px solid #444', borderRadius: '4px', color: '#fff', padding: '4px 10px' }}>
            See all &gt;
          </button>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '16px', overflowX: 'auto' }}>
          <div style={{ minWidth: '200px', backgroundColor: '#1c1c1c', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <img src="https://i.imgur.com/jS1b6Rn.jpg" alt="Thumbnail" style={{ width: '100%', display: 'block' }} />
            <div style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: 'red', color: '#fff', fontSize: '12px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>
              LIVE
            </div>
            <div style={{ padding: '8px', fontWeight: 'bold', color: 'cyan' }}>Night Raid Tactics #1</div>
          </div>

          <div style={{ minWidth: '200px', backgroundColor: '#1c1c1c', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <img src="https://i.imgur.com/m3QTP9M.jpg" alt="Thumbnail" style={{ width: '100%', display: 'block' }} />
            <div style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: 'red', color: '#fff', fontSize: '12px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>
              LIVE
            </div>
            <div style={{ padding: '8px', fontWeight: 'bold', color: 'cyan' }}>DJ Krillz Party</div>
          </div>

          <div style={{ minWidth: '200px', backgroundColor: '#1c1c1c', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
            <img src="https://i.imgur.com/9JMYk9r.jpg" alt="Thumbnail" style={{ width: '100%', display: 'block' }} />
            <div style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: 'red', color: '#fff', fontSize: '12px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px' }}>
              LIVE
            </div>
            <div style={{ padding: '8px', fontWeight: 'bold', color: 'cyan' }}>Urban Exploration IRL</div>
          </div>
        </div>
      </section>
    </div>
  );
}
