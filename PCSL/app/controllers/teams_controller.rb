class TeamsController < ApplicationController


  # GET /teams
def index
  @teams = Team.select("id, name").all
  render json: @teams.to_json
end

end
