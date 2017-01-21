class Kyle < ApplicationRecord
  validates :name, presence: true
  validates :image_url, presence: true
  validates :description, presence: true

  has_many :matches
  has_many :users, through: :matches
end
