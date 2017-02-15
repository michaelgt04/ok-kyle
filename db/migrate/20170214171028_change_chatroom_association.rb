class ChangeChatroomAssociation < ActiveRecord::Migration[5.0]
  def up
    remove_column :chatrooms, :match_id
    add_reference :chatrooms, :user, index: true
  end

  def down
    remove_column :chatrooms, :user_id
    add_reference :chatrooms, :match, index: true
  end
end
