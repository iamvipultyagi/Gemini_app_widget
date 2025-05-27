import { createContext, useContext, useState, useEffect } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { role: 'user', text, timestamp: new Date().toISOString() }]);
  };

  const addAssistantMessage = (text) => {
    setMessages(prev => [...prev, { role: 'assistant', text, timestamp: new Date().toISOString() }]);
  };

  return (
    <ChatContext.Provider value={{ messages, addUserMessage, addAssistantMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);