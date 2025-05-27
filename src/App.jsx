import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>Gemini Chat</h1>
        <ChatWindow />
        <ChatInput />
      </div>
    </ChatProvider>
  );
}

export default App;