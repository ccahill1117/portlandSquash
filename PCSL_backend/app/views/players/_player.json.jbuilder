json.extract! player, :id, :first_name, :last_name, :dob, :read_legal, :current_position, :current_division, :phone_no, :address, :email, :created_at, :updated_at
json.url player_url(player, format: :json)
