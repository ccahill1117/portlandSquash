class RosterSpotsController < ApplicationController


  # GET /players
def index
  @roster_spots = RosterSpot.select("id", "player_id", "team_id").all
  render json: @roster_spots.to_json
end







end
