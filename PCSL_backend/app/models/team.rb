class Team < ApplicationRecord
  has_many :players, class_name: "Player", foreign_key: 'player_id'
end
