class Api::V1::KylesController < ApplicationController
  def index
    kyles = Kyle.all
    render json: kyles
  end
end
