class Api::V1::MessagesController < ApplicationController

  def index
    chatroom = Chatroom.find_by(user: current_user)
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

end
