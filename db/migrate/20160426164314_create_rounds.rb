class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.integer   :player_id
      t.integer   :game_id

    end
  end
end
