class CreateMessage < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.belongs_to :chatroom
      t.belongs_to :user

      t.timestamps
    end
  end
end
