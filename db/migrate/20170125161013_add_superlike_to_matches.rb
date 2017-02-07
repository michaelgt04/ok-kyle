class AddSuperlikeToMatches < ActiveRecord::Migration[5.0]
  def change
    add_column :matches, :superlike, :boolean, default: false
  end
end
