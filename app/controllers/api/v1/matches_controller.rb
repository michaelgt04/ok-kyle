class Api::V1::MatchesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index

  end

  def destroy
    id = params[:id]
    match = Match.find(id)
    if match.delete
      @matches = Match.all
      @matches.order(:created_at)
      determine_json
    end
  end

  def create
    data = JSON.parse(request.body.read)
    kyle = Kyle.find(data["id"])
    Match.create(user: current_user, kyle: kyle)
    render json: kyle
  end

  private

  def superlike
    superlike = true
    render json: superlike
  end

  def determine_json
    if current_user.admin?
      user_json = get_users(@matches)
      render json: user_json
    else
      kyle_json = get_kyles(@matches)
      render json: kyle_json
    end
  end

  def get_users(match_array)
    user_matches = []
    match_array.each do |match|
      user = match.user
      match_object = { match_id: match.id, user_id: user.id, user_name: user.name, user_image: user.image }
      user_matches << match_object
    end
    return user_matches
  end

  def get_kyles(match_array)
    kyle_matches = []
    match_array.each do |match|
      kyle = match.kyle
      match_object = { match_id: match.id, kyle_id: kyle.id, kyle_name: kyle.name, kyle_image: kyle.image_url  }
      kyle_matches << match_object
    end
    return kyle_matches
  end
end
