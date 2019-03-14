Rails.application.routes.draw do
  resources :players, :teams, :roster_spots
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  scope '/api' do
    resources :players
    resources :teams
    resources :roster_spots

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
