import React from 'react';

const Message = props => {
  return(
    <p id={props.id}>{props.name}: {props.content}</p>
  )
}

export default Message;
