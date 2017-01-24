class SessionsController < ApplicationController
  def new

  end

  def create
    @auth=request.env["omniauth.auth"]
    if !@auth.nil?
      create_user
    else
      create_admin
    end

  end

  def destroy
    if session[:user_id]
      session[:user_id] = nil
      redirect_to root_url
    elsif session[:admin_id]
      session[:admin_id] = nil
      redirect_to root_url
    end
  end

  private

  def create_user
    user = User.find_by_provider_and_uid(@auth["provider"], @auth["uid"]) || User.create_with_omniauth(@auth)
    session[:user_id] = user.id
    redirect_to ok_kyle_path
  end

  def create_admin
    admin = Admin.authenticate(params[:email], params[:password])
    if admin
      session[:admin_id] = admin.id
      redirect_to admins_path
    else
      flash[:notice] = "problem"
      redirect_to log_in_path
    end
  end
end
