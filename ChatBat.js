import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from '../components/ChatMessage';

const ChatBat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey everyone! What do you think will happen in Stranger Things next? 🤔",
      isUser: false,
      sender: "SeriesFan123"
    },
    {
      id: 2,
      text: "I'm betting Eleven will sacrifice herself to save Hawkins! 😭",
      isUser: false,
      sender: "PredictorPro"
    },
    {
      id: 3,
      text: "No way! Mike and Eleven will have a happy ending, I can feel it! 💕",
      isUser: true,
      sender: "You"
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        isUser: true,
        sender: "You"
      };
      
      setMessages([...messages, newMsg]);
      setNewMessage('');

      // Simulate bot response after a delay
      setTimeout(() => {
        const botResponses = [
          "Interesting theory! 🤔 What makes you think that?",
          "I haven't considered that angle! 🧐",
          "That would be an amazing plot twist! 🌟",
          "I disagree, but let's see what happens! 😄",
          "Great prediction! I'm adding that to my list! 📝"
        ];
        
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        
        const botMsg = {
          id: messages.length + 2,
          text: randomResponse,
          isUser: false,
          sender: "ChatBot"
        };
        
        setMessages(prev => [...prev, botMsg]);
      }, 1000 + Math.random() * 2000);
    }
  };

  return (
    <div className="main-content">
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
        💬 ChatBat - Community Discussions
      </h1>

      <div className="chatbat-container">
        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id}>
              {!message.isUser && (
                <div style={{ 
                  fontSize: '0.8rem', 
                  color: '#666', 
                  marginBottom: '0.2rem',
                  fontWeight: '600'
                }}>
                  {message.sender}
                </div>
              )}
              <ChatMessage 
                message={message.text} 
                isUser={message.isUser}
              />
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="chat-input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your prediction or theory... 💭"
            className="chat-input"
          />
          <button type="submit" className="chat-send">
            Send 🚀
          </button>
        </form>
      </div>

      {/* Quick Action Buttons */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginTop: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => setNewMessage("I think the main character will betray everyone! 😱")}
          style={{
            padding: '0.8rem 1.5rem',
            background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          🎭 Betrayal Theory
        </button>
        
        <button
          onClick={() => setNewMessage("There's definitely a secret twin involved! 👯")}
          style={{
            padding: '0.8rem 1.5rem',
            background: 'linear-gradient(45deg, #48dbfb, #0abde3)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          🔍 Secret Twin
        </button>
        
        <button
          onClick={() => setNewMessage("It's all a dream sequence! 💤")}
          style={{
            padding: '0.8rem 1.5rem',
            background: 'linear-gradient(45deg, #1dd1a1, #10ac84)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          💭 Dream Theory
        </button>
        
        <button
          onClick={() => setNewMessage("Time travel will explain everything! ⏰")}
          style={{
            padding: '0.8rem 1.5rem',
            background: 'linear-gradient(45deg, #f368e0, #ff9ff3)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          ⏰ Time Travel
        </button>
      </div>

      {/* Chat Guidelines */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '1.5rem', 
        borderRadius: '15px', 
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#6d28d9', marginBottom: '1rem' }}>💡 ChatBat Guidelines</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '1.5rem' }}>🎯</div>
            <div>Share your predictions</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem' }}>🤝</div>
            <div>Respect others' opinions</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem' }}>🚫</div>
            <div>No spoilers without warnings</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem' }}>💬</div>
            <div>Keep discussions friendly</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBat;