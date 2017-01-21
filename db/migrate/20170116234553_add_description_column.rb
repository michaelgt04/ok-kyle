class AddDescriptionColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :kyles, :description, :text
  end
end
