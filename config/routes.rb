Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show, :update] do
      collection do
        get 'featured'
      end
    end
    resource :session, only: [:new, :create, :destroy]
    resources :albums
    resources :tracks
  end

end
