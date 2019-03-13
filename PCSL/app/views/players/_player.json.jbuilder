json.extract! player, :id, :name, :dob, :read_legal, :current_position, :current_division, :phone_no, :address, :email, :created_at, :updated_at
json.url player_url(player, format: :json)
