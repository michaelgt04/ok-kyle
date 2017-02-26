require 'rails_helper'

RSpec.describe Api::V1::KylesController, type: :controller do
  let!(:kyle) { FactoryGirl.create(:kyle) }
  let!(:kyle2) { FactoryGirl.create(:kyle) }
  let!(:kyle3) { FactoryGirl.create(:kyle) }

  describe "GET#index" do
    it "should return a list of all of the kyles" do

      get :index

      json = JSON.parse(response.body)

      expect(json.length).to eq 3
      expect(json[0]["name"]).to eq kyle.name
      expect(json[0]["id"]).to eq kyle.id
      expect(json[0]["description"]).to eq kyle.description
      expect(json[0]["image_url"]).to eq kyle.image_url

      expect(json[1]["name"]).to eq kyle2.name
      expect(json[1]["id"]).to eq kyle2.id
      expect(json[1]["description"]).to eq kyle2.description
      expect(json[1]["image_url"]).to eq kyle2.image_url

      expect(json[2]["name"]).to eq kyle3.name
      expect(json[2]["id"]).to eq kyle3.id
      expect(json[2]["description"]).to eq kyle3.description
      expect(json[2]["image_url"]).to eq kyle3.image_url
    end
  end
end
