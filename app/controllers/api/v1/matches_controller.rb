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
    type = data["type"]
    if type == "superLike"
      Match.create(user: current_user, kyle: kyle, superlike: true)
    else
      Match.create(user: current_user, kyle: kyle)
    end
    create_match_chatroom
    render json: kyle
  end

  private

  def user_unmatch
    @match.destroy
    matches = Match.where(user_id: current_user.id)
    if matches.empty?
      delete_chatroom(current_user)
    end
    user_matches = get_kyles(matches)
    render json: user_matches
  end

  def admin_unmatch
    matches = Match.where(user_id: @user.id)
    matches.destroy_all
    delete_chatroom(@user)
    kyle_matches = get_users(Match.all)
    render json: kyle_matches
  end

  def delete_chatroom(user)
    chatroom = Chatroom.find_by(user: user)
    chatroom.delete
  end

  def get_kyles(match_array)
    kyle_matches = []
    match_array.each do |match|
      kyle = match.kyle
      match_object = { match_id: match.id, kyle_id: kyle.id, kyle_name: kyle.name, kyle_image: kyle.image_url, superlike: match.superlike  }
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

  def create_match_chatroom
    unless Chatroom.find_by(user: current_user)
      Chatroom.create(user: current_user)
    end
  end
end
