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
      kyle_json = get_kyles(@matches)
      render json: kyle_json
    end
  end

  private

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
