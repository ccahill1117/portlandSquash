class PlayersController < ApplicationController


  # GET /players
def index
  @players = Player.select("id", "name", "dob", "read_legal", "current_position", "current_division", "phone_no", "address", "email").all
  render json: @players.to_json
end

# GET / players by id
def show
  @players = Player.find(params[:id])
  render json: @players.to_json
end

def create
  @players = Player.create!(player_params)
  json_response(@players, :created)
end






  private

  def json_response(object, status = :ok)
    render json: object, status: status
  end

  def player_params
    params.permit(:name, :dob, :read_legal, :current_position, :current_division, :phone_no, :address, :email)
  end
end
