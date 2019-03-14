class Team < ApplicationRecord
  has_many :roster_spots
  has_many :players, through: :roster_spots
  # accepts_nested_attributes_for :players
end
