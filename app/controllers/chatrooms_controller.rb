class ChatroomsController < ApplicationController

  def index
    if current_user.admin?
      @chatrooms = Chatroom.all
    else
      @chatroom = Chatroom.find_by(user: current_user)
      @message = Message.new
    end
  end

  def show
    @chatroom = Chatroom.find_by(id: params[:id])
    @message = Message.new
  end

end
