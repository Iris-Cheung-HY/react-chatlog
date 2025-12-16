import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.jsx';

const ChatLog = ( {entries, likeClick } ) => {

  const chatEntries = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        likeCount={entry.likeCount}
        likeClick={likeClick}
      />
    );
  });
    return(
      <article className="chat-log">
        {chatEntries}
      </article>
      
    );
  };

    ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })
    ).isRequired,
    likeClick: PropTypes.func,
    };

export default ChatLog;

