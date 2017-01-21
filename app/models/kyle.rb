class Kyle < ApplicationRecord
  validates :name, presence: true
  validates :image_url, presence: true
  validates :description, presence: true
end
