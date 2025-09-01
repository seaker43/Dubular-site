import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import ChatComposer from '../components/ChatComposer';
import '../styles/beta.css';

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: '👋 Welcome to Dubular Beta!' }
  ]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), role: 'user', content: text }]);
  };

  return (
    <div className="beta-shell">
      <Header />
      <div className="beta-main">
        <Sidebar />
        <div className="beta-chat">
          <ChatWindow messages={messages} />
          <ChatComposer onSend={handleSend} />
        </div>
      </div>
      <footer className="beta-footer">Build {Date.now()}</footer>
    </div>
  );
}
test 123
