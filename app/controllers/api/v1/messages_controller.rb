class Api::V1::MessagesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def show
    chatroom = Chatroom.find_by(id: params[:id])
    messages = chatroom.messages
    response = []
    messages.each do |message|
      if message.admin
        response << {id: message.id, name: message.admin.name, content: message.content}
      else
        response << {id: message.id, name: message.user.name, content: message.content}
      end
    end
    render json: response
  end

  def create
    data = JSON.parse(request.body.read)
    content = data["content"]
    chatroom = Chatroom.find(data["chatroom"])
    message = Message.new(content: content, chatroom: chatroom)
    if current_user.admin?
      send_kyle_message(message)
    else
      send_user_message(message)
    end
  end

  private

  def send_user_message(message)
    message.user = current_user
    if message.save
      ActionCable.server.broadcast 'messages',
        id: "u#{message.id}",
        content: message.content,
        name: message.user.name
      head :ok
    else
      redirect_to chatrooms_path
    end
  end

  def send_kyle_message(message)
    message.admin = current_user
    if message.save
      ActionCable.server.broadcast 'messages',
        id: "k#{message.id}",
        content: message.content,
        name: message.admin.name
      head :ok
    else
      redirect_to chatrooms_path
    end
  end

end
