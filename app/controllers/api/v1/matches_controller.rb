class Api::V1::MatchesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    binding.pry
  end

  def create
    data = JSON.parse(request.body.read)
    kyle = Kyle.find(data["id"])
    Match.create(user: current_user, kyle: kyle)
  end
end
