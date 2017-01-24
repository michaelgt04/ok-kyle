class Api::V1::AdminsController < ApplicationController

  def index
    admin = current_user
    matches = Match.all
    matched_users = get_matched_users(matches)
    unique_matches = get_unique_matches(matched_users)
    unique_matches_json = { unique_matches_json: unique_matches }
    render json: unique_matches_json
  end

  private

  def get_matched_users(match_array)
    @user_matches = []
    match_array.each do |match|
      user = match.user
      match_object = { match_id: match.id, user_id: user.id, user_name: user.name, user_image: user.image }
      @user_matches << match_object
    end
    return @user_matches
  end

  def get_unique_matches(users_array)
    users_array.uniq { |user| user[:user_id] }
  end

end
