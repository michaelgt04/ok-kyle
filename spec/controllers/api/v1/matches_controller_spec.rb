require 'rails_helper'

RSpec.describe Api::V1::MatchesController, type: :controller do
  let!(:kyle) { FactoryGirl.create(:kyle) }
  let!(:user) { FactoryGirl.create(:user) }

  describe "POST#create" do
    it "changes the match count by 1" do
      post_json = { id: kyle.id, type: "swipe" }.to_json
      session[:user_id] = user.id

      expect{ post(:create, post_json)}.to change{ Match.count }.by 1
    end
  end
end
