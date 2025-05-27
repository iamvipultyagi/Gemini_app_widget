import { useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';
import MessageBubble from './MessageBubble';

const ChatWindow = () => {
  const { messages } = useChat();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ height: '400px', overflowY: 'auto', padding: '10px', border: '1px solid #ccc', display: 'flex', flexDirection: 'column' }}>
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;