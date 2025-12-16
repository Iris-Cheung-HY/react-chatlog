import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.jsx';

const ChatEntry = (props ) => {

    const clickLike = () => {
      props.likeClick(props.id);
    };

    return (
        <article className="chat-entry local">
          <h2 className="entry-name">{props.sender}</h2>
          <section className="entry-bubble">
            <p>{props.body}</p>
            <TimeStamp time={props.timeStamp} className="entry-time"/>
            <button className="like" onClick={clickLike}>{props.liked ? '❤️' : '🤍'}</button>
          </section>
        </article>
      );
    }; 

    ChatEntry.propTypes = {
          sender: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          timeStamp: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          liked: PropTypes.bool.isRequired,
          likeClick: PropTypes.func.isRequired,
    };
    
    export default ChatEntry;