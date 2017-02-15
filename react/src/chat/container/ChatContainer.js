import React, { Component } from 'react';
import Message from '../components/Message';
import ChatForm from '../components/ChatForm';


class ChatContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUserName: "",
      messages: [],
      formMessage: "",
      chatroomId: null,
      value: ""
    }
    this.recieveMessages = this.recieveMessages.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  recieveMessages(){
    App.cable.subscriptions.create('MessagesChannel', {
      received: (data) => {
        if (data.chatroom === this.state.chatroomId){
          let newMessages = [...this.state.messages, data]
          this.setState({ messages: newMessages })
          let chatDiv = document.getElementsByClassName("chatbox")[0]
          chatDiv.scrollTop = chatDiv.scrollHeight
        }
      }
    });
  }

  componentDidMount(){
    let chatId = $('#match-chat').data('chatroom')
    $.ajax({
        method: "GET",
        url: `/api/v1/messages/${chatId}`,
      })
      .done(data => {
        this.setState({
          currentUserName: data.name,
          messages: data.messages,
          chatroomId: chatId
        })
        let chatDiv = document.getElementsByClassName("chatbox")[0]
        chatDiv.scrollTop = chatDiv.scrollHeight
      })
    this.recieveMessages()
  }

  handleMessageChange(event) {
    let newMessage = event.target.value;
    this.setState({ formMessage: newMessage })
  }

  handleSubmit(event) {
    event.preventDefault()
    let fetchBody = {content: this.state.formMessage, chatroom: this.state.chatroomId}
    fetch('/api/v1/messages',
    { method: "POST",
    credentials: "include",
    body: JSON.stringify(fetchBody)})
    .then(response => {
      this.setState({ formMessage: "" })
    })
  }

  render(){
    let messages = this.state.messages.map(message => {
      return(
        <Message
          key={message.id}
          id={message.id}
          name={message.name}
          content={message.content}
          currentUserName={this.state.currentUserName}
        />
      )
    })

    let header;
    if (this.state.currentUserName === "Kyle Wood"){
      header = "Match Chat"
    } else {
      header = "Chat with Kyle"
    }

    return(
      <div>
        <h1 className="chat-header">{header}</h1>
        <div className="chatbox">
          {messages}
        </div>
        <ChatForm
          handleMessageChange={this.handleMessageChange}
          handleSubmit={this.handleSubmit}
          value={this.state.formMessage}
        />
      </div>
    )
  }
}

export default ChatContainer;
