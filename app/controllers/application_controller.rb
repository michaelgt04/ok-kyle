class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :authenticate_user!

  def current_user
    if signed_in_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    elsif signed_in_admin
      @current_user ||= Admin.find(session[:admin_id]) if session[:admin_id]
    else
      nil
    end
  end

  def signed_in_user
    !session[:user_id].nil?
  end

  def signed_in_admin
    !session[:admin_id].nil?
  end

  def authenticate_user!
    unless signed_in_user || signed_in_admin
      redirect_to root_path
    end
  end
end
