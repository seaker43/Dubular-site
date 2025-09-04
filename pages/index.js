export default function Home() {
  return (
    <main>
      {/* Trending Now */}
      <section className="section">
        <div className="section-head">
          <h2>Trending Now</h2>
          <a href="#" className="seeall">See all &gt;</a>
        </div>
        <div className="row">
          <a className="card" href="#">
            <div className="thumb">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" alt="AI Coding Jam"/>
              <span className="live">LIVE</span>
            </div>
            <div className="meta">
              <div className="title">AI Coding Jam</div>
            </div>
          </a>
          <a className="card" href="#">
            <div className="thumb">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" alt="Lo-Fi Study"/>
              <span className="live">LIVE</span>
            </div>
            <div className="meta">
              <div className="title">Lo-Fi Study Session</div>
            </div>
          </a>
        </div>
      </section>

      {/* Recommended */}
      <section className="section">
        <div className="section-head">
          <h2>Recommended</h2>
          <a href="#" className="seeall">See all &gt;</a>
        </div>
        <div className="row">
          <a className="card" href="#">
            <div className="thumb">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" alt="Coding Battle"/>
              <span className="live">LIVE</span>
            </div>
            <div className="meta">
              <div className="title">Street Battle 9</div>
            </div>
          </a>
        </div>
      </section>

      {/* Live Channels */}
      <section className="section">
        <div className="section-head">
          <h2>Live Channels</h2>
          <a href="#" className="seeall">See all &gt;</a>
        </div>
        <div className="row">
          <a className="card" href="#">
            <div className="thumb">
              <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?w=800" alt="Night Raid"/>
              <span className="live">LIVE</span>
            </div>
            <div className="meta">
              <div className="title">Night Raid Tactics #1</div>
            </div>
          </a>
        </div>
      </section>

      {/* Popular Now */}
      <section className="section">
        <div className="section-head">
          <h2>Popular Now</h2>
          <a href="#" className="seeall">See all &gt;</a>
        </div>
        <div className="row">
          <a className="card" href="#">
            <div className="thumb">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800" alt="Studio Session"/>
              <span className="live">LIVE</span>
            </div>
            <div className="meta">
              <div className="title">Studio Session</div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
