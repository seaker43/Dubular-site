
export default function Sidebar({ open, chats, activeId, onSelect }) {
 return (
 <aside className={`beta-sidebar ${open ?"open" :""}`}>
 <div className="sidebar-section">
 <div className="section-title">Workspace</div>
 <button className="glow-bg wide-btn">+ New Chat</button>
 </div>

 <div className="sidebar-section">
 <div className="section-title">Recent</div>
 <ul className="chat-list">
 {chats.map((c) => (
 <li key={c.id}>
 <button
 className={`chat-item ${c.id === activeId ?"active" :""}`}
 onClick={() => onSelect(c.id)}
 title={c.title}
 >
 <span className="ci-icon">💬</span>
 <span className="ci-title">{c.title}</span>
 </button>
 </li>
 ))}
 </ul>
 </div>

 <div className="sidebar-footer">
 <button className="glow-bg wide-btn ghost">Settings</button>
 <button className="glow-bg wide-btn ghost">Support</button>
 </div>
 </aside>
 );
}
