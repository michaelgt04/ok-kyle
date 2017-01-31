class Api::V1::MatchesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index

  end

  def destroy
    @id = params[:id]
    @match = Match.find(@id)
    @user = @match.user
    if current_user.admin?
      admin_unmatch
    else
      user_unmatch
    end
  end

  def create
    data = JSON.parse(request.body.read)
    kyle = Kyle.find(data["id"])
    Match.create(user: current_user, kyle: kyle)
    render json: kyle
  end

  private

  def user_unmatch
    @match.destroy
    matches = Match.where(user_id: current_user.id)
    user_matches = get_kyles(matches)
    render json: user_matches
  end

  def admin_unmatch
    matches = Match.where(user_id: @user.id)
    matches.destroy_all
    kyle_matches = get_users(Match.all)
    render json: kyle_matches
  end

  def get_kyles(match_array)
    kyle_matches = []
    match_array.each do |match|
      kyle = match.kyle
      match_object = { match_id: match.id, kyle_id: kyle.id, kyle_name: kyle.name, kyle_image: kyle.image_url  }
      kyle_matches << match_object
    end
    return kyle_matches.uniq { |i| i[:kyle_id]}
  end

  def get_users(match_array)
    user_matches = []
    match_array.each do |match|
      user = match.user
      match_object = { match_id: match.id, user_id: user.id, user_name: user.name, user_image: user.image  }
      user_matches << match_object
    end
    return user_matches.uniq { |i| i[:user_id]}
  end
end
