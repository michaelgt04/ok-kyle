class ChatroomsController < ApplicationController

  def index
    authenticate_user!
    if current_user
      if current_user.admin?
        @chatrooms = Chatroom.all
      else
        @chatroom = Chatroom.find_by(user: current_user)
        @message = Message.new
      end
    end
  end

  def show
    authenticate_user!
    @chatroom = Chatroom.find_by(id: params[:id])
    @message = Message.new
  end

end
