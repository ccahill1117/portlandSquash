class Team < ApplicationRecord
  has_many :players

  belongs_to :player_id_1, :class_name => 'Player', :foreign_key => 'player_id_1'

end
