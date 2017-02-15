class MessagesController < ApplicationController

  def create
    message = Message.new(message_params)
    if current_user.admin?
      send_kyle_message(message)
    else
      send_user_message(message)
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :chatroom_id)
  end

  def send_user_message(message)
    message.user = current_user
    if message.save
      ActionCable.server.broadcast 'messages',
        id: message.id,
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
        id: message.id,
        content: message.content,
        name: message.admin.name
      head :ok
    else
      redirect_to chatrooms_path
    end
  end

end
