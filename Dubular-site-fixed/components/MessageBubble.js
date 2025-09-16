
export default function MessageBubble({ role, content, time }) {
 const isUser = role ==="user";
 return (
 <div className={`msg ${isUser ?"user" :"assistant"}`}>
 {!isUser && (
 <div className="avatar">
 <span>🤖</span>
 </div>
 )}
 <div className="bubble">
 <div className="content">{content}</div>
 <div className="meta">{time}</div>
 </div>
 </div>
 );
}
