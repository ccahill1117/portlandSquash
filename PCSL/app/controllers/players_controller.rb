class PlayersController < ApplicationController


  # GET /players
def index
  @players = Player.select("id", "name", "dob", "read_legal", "current_position", "current_division", "phone_no", "address", "email").all
  render json: @players.to_json
end






  private

    def player_params
      params.require(:player).permit(:name, :dob, :read_legal, :current_position, :current_division, :phone_no, :address, :email)
    end
end
