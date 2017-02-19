class Api::V1::AdminsController < ApplicationController

  def index
    admin = current_user
    matches = Match.all
    unique_matches = get_unique_users(matches)
    unique_matches_json = { unique_matches_json: unique_matches }
    render json: unique_matches_json
  end

  private

  def get_unique_users(match_array)
    user_matches = []
    superlike = false

    if match_array.exists?(superlike: true)
      superlike = true
    end

    unique_matches = match_array.to_a.uniq { |match| match[:user_id]}
    unique_matches.each do |match|
      user = match.user
      chatroom = Chatroom.find_by(user: user)
        match_object = { match_id: match.id, user_id: user.id, user_name: user.name, user_image: user.image, superlike: superlike, chatroom: chatroom.id }
      user_matches << match_object
    end
    return user_matches
  end
end
