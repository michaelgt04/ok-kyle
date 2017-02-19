class UsersController < ApplicationController

  def index
    authenticate_user!
  end

  def new
    if signed_in_user
      redirect_to users_path
    elsif signed_in_admin
      redirect_to admins_path
    end
  end

  def show
  end

end
