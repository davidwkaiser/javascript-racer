class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many  :games

  validates :name, uniqueness: true

end
