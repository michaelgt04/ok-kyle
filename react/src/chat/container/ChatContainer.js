import React, { Component } from 'react';
import Message from '../components/Message'

class ChatContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    }
    this.recieveMessages = this.recieveMessages.bind(this)
  }

  recieveMessages(){
    App.cable.subscriptions.create('MessagesChannel', {
      received: (data) => {
        let newMessages = [...this.state.messages, data]
        this.setState({ messages: newMessages })
        let lastMessageId = this.state.messages[this.state.messages.length - 1]
        let lastMessage = document.getElementById(`${lastMessageId.id}`)
        lastMessage.scrollIntoView(false)
      }
    });
  }

  componentDidMount(){
    $.ajax({
        method: "GET",
        url: "/api/v1/messages",
      })
      .done(data => {
        this.setState({
          messages: data
        })
        if (data == false){
          let lastMessageId = this.state.messages[this.state.messages.length - 1]
          let lastMessage = document.getElementById(`${lastMessageId.id}`)
          lastMessage.scrollIntoView(false)
        }
      })
    this.recieveMessages()
  }

  render(){
    let messages = this.state.messages.map(message => {
      return(
        <Message
          key={message.id}
          id={message.id}
          name={message.name}
          content={message.content}
        />
      )
    })

    return(
      <div>
        <h1>Chat with Kyle</h1>
        <div className="chatbox">
          {messages}
        </div>
      </div>
    )
  }
}

export default ChatContainer;
