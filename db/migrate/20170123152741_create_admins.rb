class CreateAdmins < ActiveRecord::Migration[5.0]
  def change
    create_table :admins do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password, null: false
      t.string :image
    end
  end
end
