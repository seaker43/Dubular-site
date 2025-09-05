export default function Search() {
  return (
    <div className="page">
      <h1 className="title">Search</h1>
      <form onSubmit={(e)=>e.preventDefault()} style={{display:'flex',gap:'12px',marginTop:'16px'}}>
        <input className="search-bar" placeholder="Search streams, users..." style={{flex:1}} />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
