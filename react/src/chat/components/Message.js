import React from 'react';

const Message = props => {
  let sender;
  if (props.currentUserName === props.name){
    sender = "sender-message"
  } else {
    sender = "reply-message"
  }

  return(
    <div className="message-div">
      <span className={sender} id={props.id}>{props.content}</span>
    </div>
  )
}

export default Message;
