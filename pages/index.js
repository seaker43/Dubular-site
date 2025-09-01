import { useState } from "react";

export default function Home() {
  // ✅ safe defaults
  const [messages, setMessages] = useState([
    { id: "welcome", role: "assistant", content: "Welcome to Dubular Beta!" },
  ]);

  const navLinks = [
    { href: "#roadmap", label: "Roadmap" },
    { href: "#docs", label: "Docs" },
    { href: "#support", label: "Support" },
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", content: text },
    ]);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      {/* Header / Nav */}
      <header style={{ marginBottom: "2rem" }}>
        <h1>Dubular Beta</h1>
        <nav>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
            {(navLinks ?? []).map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Chat Section */}
      <main>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            minHeight: "200px",
          }}
        >
          {(messages ?? []).map((msg) => (
            <div
              key={msg.id}
              style={{
                margin: "0.5rem 0",
                textAlign: msg.role === "user" ? "right" : "left",
              }}
            >
              <strong>{msg.role === "user" ? "You" : "AI"}:</strong>{" "}
              {msg.content}
            </div>
          ))}
        </div>

        {/* Input */}
        <ChatInput onSend={handleSend} />
      </main>
    </div>
  );
}

function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        style={{ flex: 1, padding: "0.5rem" }}
      />
      <button type="submit">Send</button>
    </form>
  );
}
