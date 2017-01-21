
require "rails_helper"

describe "user signs in" do
  it "can sign in with a Facebook account" do
    visit '/'
    page.should have_content("Sign in with Facebook")
    click_link "Sign in"
    page.should have_content("Keyan")
  end

  it "can handle authentication error" do

    OmniAuth.config.mock_auth[:facebook] = :invalid_credentials
    visit '/'
    page.should have_content("Sign in with Facebook")
    click_link 'Sign in'
    page.should have_content("Authentication failed")
  end
end
