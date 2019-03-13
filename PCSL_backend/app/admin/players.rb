ActiveAdmin.register Player do
  permit_params :id, :first_name, :last_name, :dob, :read_legal, :current_position, :current_division, :phone_no, :address, :email, :created_at, :updated_at
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
