Rails.application.routes.draw do

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :albums, only: [:index, :show, :create, :destroy]
  end

end
