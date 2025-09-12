import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages }) {
 const scroller = useRef(null);
 useEffect(() => {
 scroller.current?.scrollTo({
 top: scroller.current.scrollHeight,
 behavior: "smooth",
 });
 }, [messages]);

 return (
 <main className="chat-window" ref={scroller}>
 {messages.length === 0 ? (
 <div className="empty-state">
 <h2>Welcome to Dubular</h2>
 <p>Start a conversation or choose a recent chat from the left.</p>
 <div className="tips">
 <span className="tip">/summarize</span>
 <span className="tip">/generate</span>
 <span className="tip">/plan</span>
 </div>
 </div>
 ) : (
 messages.map((m, i) => (
 <MessageBubble
 key={i}
 role={m.role}
 content={m.content}
 time={m.time}
 />
 ))
 )}
 </main>
 );
}
