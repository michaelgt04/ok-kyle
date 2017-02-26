FactoryGirl.define do
  factory :kyle do
    sequence(:id) { |n| "#{n}"}
    sequence(:name) { |n| "Dreamy Kyle #{n}"}
    sequence(:image_url) { |n| "http://fakeurl.com/kyle#{n}"}
    sequence(:description) { |n| "The Kyle of your dreams #{n}"}
  end
end
