class ChangeWinnerColumn < ActiveRecord::Migration
  def up
  remove_column :games, :winner
  add_column    :games, :winner_id, :integer

  end

  def down
    add_column  :games, :winner, :string
    remove_column :games, :winner_id
  end
end
