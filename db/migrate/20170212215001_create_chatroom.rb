class CreateChatroom < ActiveRecord::Migration[5.0]
  def change
    create_table :chatrooms do |t|
      t.belongs_to :match
      t.timestamps
    end
  end
end
