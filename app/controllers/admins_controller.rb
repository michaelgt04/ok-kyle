class AdminsController < ApplicationController

  def index
    authenticate_user!
  end

  def create
    @admin = Admin.new(admin_params)
    if @admin.save
      redirect_to admins_path
    else
      flash[:notice] = "Unable to sign in"
      redirect_to :back
    end
  end

  def new
    @admin = Admin.new
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :password, :password_confirmation)
  end
end
