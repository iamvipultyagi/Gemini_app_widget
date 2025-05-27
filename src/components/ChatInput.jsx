import { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { sendMessageToGemini } from '../utils/geminiApi';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { addUserMessage, addAssistantMessage } = useChat();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addUserMessage(input);
    setInput('');
    setLoading(true);

    try {
      const response = await sendMessageToGemini(input);
      addAssistantMessage(response);
    } catch {
      addAssistantMessage("⚠️ Sorry, there was an error fetching a response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px', display: 'flex' }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
        style={{ flex: 1, padding: '10px' }}
        aria-label="Chat message input"
      />
      <button type="submit" disabled={loading} style={{ padding: '10px' }}>
        {loading ? '...' : 'Send'}
      </button>
    </form>
  );
};

export default ChatInput;