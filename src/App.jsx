import './App.css';
import ChatLog from './components/ChatLog.jsx';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const[messageData, setMessageData] = useState(messages);

  const likeFeature = (messageId) => {
    const messages = messageData.map(message => {
      if (message.id === messageId) {
        return { ...message, liked: !message.liked,
      };
      } else {
        return message;
      }
    });
    setMessageData(messages);
  };

  const getTotalLikes = () => messageData.filter(message => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>Total ❤️: {getTotalLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={messageData}
          likeClick={likeFeature}
        />
      </main>
    </div>
  );
};

export default App;
