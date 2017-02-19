class StaticPagesController < ApplicationController

  def index
    authenticate_user!
  end
end
