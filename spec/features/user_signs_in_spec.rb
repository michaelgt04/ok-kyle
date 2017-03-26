require "rails_helper"



describe "user signs in" do
  before(:each) do
    Rails.application.env_config["omniauth.auth"] = OmniAuth.config.mock_auth[:facebook]

  end

  after(:each) do
    OmniAuth.config.mock_auth[:facebook] = nil
  end

  it "can handle authentication error" do

    OmniAuth.config.mock_auth[:facebook] = :invalid_credentials
    visit '/'
    page.should have_css("img.facebook-button")
    page.first('.facebook-button').click
    page.should have_content("Are you Kyle?")
  end
end
