class Api::V1::UsersController < ApplicationController

  def index
    user = current_user
    matches = Match.where(user_id: user.id)
    kyles = get_kyles(matches)
    kyle_json = {kyle_json: kyles}
    render json: kyle_json
  end

  def get_kyles(match_array)
    kyle_matches = []
    match_array.each do |match|
      kyle = match.kyle
      match_object = { match_id: match.id, kyle_id: kyle.id, name: kyle.name, image: kyle.image_url  }
      kyle_matches << match_object
    end
    return kyle_matches
  end

end
