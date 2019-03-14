ActiveAdmin.register RosterSpot do
  permit_params do
    permitted = [
      :id,
      :nextval,
      :player_id,
      :team_id,
      :created_at,
      :updated_at,
    ]
    permitted
  end
end
