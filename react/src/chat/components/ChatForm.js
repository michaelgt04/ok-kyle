import React from 'react';

const ChatForm = props => {
  return(
    <form>
      <label>Message: </label>
      <input type="text" onChange={props.handleMessageChange} value={props.value}/>

      <input type="submit" onClick={props.handleSubmit}/>
    </form>
  )
}

export default ChatForm;
