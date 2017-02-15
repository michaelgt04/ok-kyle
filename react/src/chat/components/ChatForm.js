import React from 'react';

const ChatForm = props => {
  let text = "Type message..."
  return(
    <form id="chat-input-form">
      <input className="chat-input" type="text" onChange={props.handleMessageChange} value={props.value} placeholder={text}/>

      <input className="chat-button" type="submit" onClick={props.handleSubmit}/>
    </form>
  )
}

export default ChatForm;
