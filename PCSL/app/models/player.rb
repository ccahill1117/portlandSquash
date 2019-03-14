class Player < ApplicationRecord
  has_many :roster_spots
  has_many :teams, through: :roster_spots
end
