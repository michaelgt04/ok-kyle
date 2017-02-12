class ChatroomsController < ApplicationController

  def show
    @chatroom = Chatroom.find_by(id: params[:id])
    @message = Message.new
  end

end
