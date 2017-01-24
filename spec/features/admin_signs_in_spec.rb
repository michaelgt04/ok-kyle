require "rails_helper"

describe "admin signs in" do
  admin = Admin.create(name: "Kyle", email: "kyle@kyle.kyle", password: "kyle")

  it "signs in successfully" do
    visit '/'
    click_link "Are you Kyle?"
    fill_in 'Email', with: admin.email
    fill_in 'Password', with: admin.password
    click_button 'Log in'

    expect(page).to have_content('Sign Out')
    expect(page).to have_content(admin.name)
  end

  it "does not sign in successfully" do
    visit '/'
    click_link "Are you Kyle?"
    click_button 'Log in'

    expect(page).to_not have_content('Sign Out')
    expect(page).to_not have_content(admin.name)
  end
end
