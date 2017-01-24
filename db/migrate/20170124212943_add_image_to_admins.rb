class AddImageToAdmins < ActiveRecord::Migration[5.0]
  def change
    add_column :admins, :image, :string
  end
end
