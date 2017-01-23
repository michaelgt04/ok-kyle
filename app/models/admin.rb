class Admin < ApplicationRecord
  validates :name, presence: true
  validates :password, presence: true
  validates :email, presence: true

  def admin?
    true
  end
end
