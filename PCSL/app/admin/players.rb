ActiveAdmin.register Player do
  permit_params do
    permitted = [
    :name,
    :dob,
    :read_legal,
    :current_position,
    :current_division,
    :phone_no,
    :address,
    :email,
    :team_id
    ]
    permitted
  end
end
