import { useState, useRef } from 'react';

export default function ChatComposer({ onSend }) {
 const [value, setValue] = useState("");
 const fileRef = useRef(null);

 const send = () => {
 if (!value.trim()) return;
 onSend(value.trim());
 setValue("");
 };

 const handleKey = (e) => {
 if (e.key === "Enter" && !e.shiftKey) {
 e.preventDefault();
 send();
 }
 };

 return (
 <div className="composer">
 <button
 className="glow-bg icon-btn"
 onClick={() => fileRef.current?.click()}
 title="Attach file"
 >
 <svg className="glow" viewBox="0 0 24 24" width="22" height="22">
 <path
 d="M21 15V6.5A4.5 4.5 0 0 0 16.5 2h0A4.5 4.5 0 0 0 12 6.5V17a3 3 0 0 1-6 0V8"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 />
 </svg>
 </button>
 <textarea
 className="composer-input"
 placeholder="Ask Dubular anything…"
 value={value}
 onChange={(e) => setValue(e.target.value)}
 onKeyDown={handleKey}
 rows={1}
 />
 <input ref={fileRef} type="file" hidden />
 <button className="glow-bg send-btn" onClick={send} aria-label="Send">
 <svg className="glow" viewBox="0 0 24 24" width="22" height="22">
 <path
 d="M22 2L11 13"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 />
 <path d="M22 2l-7 20-4-9-9-4 20-7z" fill="currentColor" />
 </svg>
 </button>
 </div>
 );
}
