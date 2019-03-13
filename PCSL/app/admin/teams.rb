ActiveAdmin.register Team do
  permit_params do
    permitted = [
      :name,
      :division,
      :captain
    ]
    permitted
  end
end
