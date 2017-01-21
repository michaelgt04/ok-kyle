require 'rails_helper'

RSpec.describe User, type: :model do

  describe "user" do
    let!(:user) { FactoryGirl.create(:user) }

    it "has a provider, uid, and name" do
      expect(user.provider).to_not be_nil
      expect(user.uid).to_not be_nil
      expect(user.name).to_not be_nil
    end
  end
end
