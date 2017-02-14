class CreateMessage < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.belongs_to :chatroom
      t.belongs_to :user, optional: true
      t.belongs_to :admin, optional: true

      t.timestamps
    end
  end
end
