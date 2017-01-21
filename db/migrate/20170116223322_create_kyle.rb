class CreateKyle < ActiveRecord::Migration[5.0]
  def change
    create_table :kyles do |t|
      t.string :name, null: false
      t.string :image_url, null: false

      t.timestamps null: false
    end
  end
end
