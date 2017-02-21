require "rails_helper"

describe "user signs in" do
  it "can sign in with a Facebook account" do
    OmniAuth.config.add_mock(:facebook, {
      :uid => '12345',
      :info => {
        :name => 'Keyan Estahbanaty',
        :email => 'kyle@keyan.com',
        :nickname => '#1KyleFan'
      }
    })
    visit '/'
    page.should have_css("img.facebook-button")
    page.first('.facebook-button').click
    page.should have_css("div#user-profile")
  end

  it "can handle authentication error" do

    OmniAuth.config.mock_auth[:facebook] = :invalid_credentials
    visit '/'
    page.should have_css("img.facebook-button")
    page.first('.facebook-button').click
    page.should have_content("Are you Kyle?")
  end
end
