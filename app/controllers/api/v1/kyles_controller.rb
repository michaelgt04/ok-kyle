class Api::V1::KylesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    kyles = Kyle.all
    render json: kyles
  end
end
