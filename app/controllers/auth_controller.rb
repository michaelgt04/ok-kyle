class AuthController < ApplicationController
  def failure
    flash[:notice] = "Authentication failed"
    redirect_to root_path
  end
end
