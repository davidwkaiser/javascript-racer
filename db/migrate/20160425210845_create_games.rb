class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string  :winner
      t.integer :winning_time_in_seconds

      t.timestamps
    end
  end
end
