Rails.application.routes.draw do

  resources :teams
  resources :players
  # resources :ingredients
  # resources :drinks
  # devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # resources :quotes

  scope '/api' do
    resources :drinks
    resources :players
  end
end
