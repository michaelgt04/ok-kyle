class CreateMatches < ActiveRecord::Migration[5.0]
  def change
    create_table :matches do |t|
      t.belongs_to :user
      t.belongs_to :kyle

      t.timestamps
    end
  end
end
