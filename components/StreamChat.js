import { useEffect, useRef, useState } from "react";

export default function StreamChat({ channel }) {
  const [messages, setMessages] = useState([
    { id: 1, user: "mod", text: `Welcome to #${channel}!` },
  ]);
  const [text, setText] = useState("");
  const scrollerRef = useRef(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo({
      top: scrollerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function send(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), user: "you", text }]);
    setText("");
  }

  return (
    <div className="chat">
      <div ref={scrollerRef} className="chat-scroll">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`chat-row ${m.user === "you" ? "mine" : ""}`}
          >
            <span className="chat-user">{m.user}</span>
            <span className="chat-text">{m.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={send} className="chat-input-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`Message #${channel}`}
          className="chat-input"
        />
        <button className="glow-bg" className="chat-send" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
