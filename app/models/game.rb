class Game < ActiveRecord::Base
  has_many  :rounds
  has_many  :players, through: :rounds
  # validate :has_two_players

  # def has_two_players
  #   unless self.players.count == 2
  #     errors.add("The game must have exactly two players.")
  #   end
  # end

end
