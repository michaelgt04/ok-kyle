class Api::V1::UsersController < ApplicationController

  def show
    @user = current_user
    @matches = Matches.find_by(user_id: @user.id)
    render json: @matches
  end
end
