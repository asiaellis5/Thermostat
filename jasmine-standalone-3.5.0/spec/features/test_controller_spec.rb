require 'capybara/rspec'
require_relative '../../app'

feature "params" do
  scenario "has params of 20" do
    visit('/')
    expect(page).to have_content 20
  end
end