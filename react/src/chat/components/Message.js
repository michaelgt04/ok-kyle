import React from 'react';

const Message = props => {
  let sender;
  if (props.currentUserName === props.name){
    sender = "sender-message"
  } else {
    sender = "reply-message"
  }

  return(
    <p><span className={sender} id={props.id}>{props.content}</span></p>
  )
}

export default Message;
