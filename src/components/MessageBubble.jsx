const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user';
  return (
    <div style={{
      textAlign: isUser ? 'right' : 'left',
      background: isUser ? '#DCF8C6' : '#FFF',
      padding: '10px',
      margin: '5px 0',
      borderRadius: '10px',
      maxWidth: '70%',
      alignSelf: isUser ? 'flex-end' : 'flex-start'
    }}>
      <div>{message.text}</div>
      <div style={{ fontSize: '0.7em', color: '#888' }}>{new Date(message.timestamp).toLocaleTimeString()}</div>
    </div>
  );
};

export default MessageBubble;