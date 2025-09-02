import { useEffect, useRef, useState } from "react";

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export default function StreamChat({ channel }) {
  const [messages, setMessages] = useState([]);
  const [name] = useState(() => "user_" + uid());
  const inputRef = useRef(null);
  const bcRef = useRef(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`chat:${channel}`);
      if (saved) setMessages(JSON.parse(saved));
    } catch {}
  }, [channel]);

  // BroadcastChannel for demo realtime (same device / same origin tabs)
  useEffect(() => {
    try {
      bcRef.current = new BroadcastChannel(`chat:${channel}`);
      bcRef.current.onmessage = (ev) => {
        if (ev?.data?.type === "msg") {
          setMessages((m) => {
            const next = [...m, ev.data.payload];
            try {
              localStorage.setItem(`chat:${channel}`, JSON.stringify(next));
            } catch {}
            return next;
          });
        }
      };
    } catch {
      bcRef.current = null;
    }
    return () => {
      try {
        bcRef.current?.close();
      } catch {}
    };
  }, [channel]);

  function send(text) {
    const msg = {
      id: Date.now() + "_" + Math.random(),
      user: name,
      text,
      ts: new Date().toISOString(),
    };
    // Local append
    setMessages((m) => {
      const next = [...m, msg];
      try {
        localStorage.setItem(`chat:${channel}`, JSON.stringify(next));
      } catch {}
      return next;
    });
    // Broadcast
    try {
      bcRef.current?.postMessage({ type: "msg", payload: msg });
    } catch {}
  }

  return (
    <aside className="chat" aria-label="Live chat">
      <div className="chat-header">
        <div className="meta">
          <span className="badge">Chat</span>
          <span>#{channel}</span>
        </div>
        <div className="tipbar">
          {[1, 5, 10, 25, 50].map((t) => (
            <button className="btn tip" key={t} onClick={() => send(`💎 Tipped ${t} Dubular Tokens`)}>
              +{t} DT
            </button>
          ))}
        </div>
      </div>

      <div className="chat-log" id="chat-log">
        {messages.map((m) => (
          <div className="msg" key={m.id}>
            <span className="user">{m.user}:</span>
            <span>{m.text}</span>
          </div>
        ))}
      </div>

      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          const val = inputRef.current?.value?.trim();
          if (val) {
            send(val);
            inputRef.current.value = "";
          }
        }}
      >
        <input ref={inputRef} placeholder="Send a message" maxLength={280} />
        <button className="btn" type="submit">Send</button>
      </form>
    </aside>
  );
}
