Rails.application.routes.draw do
  root 'users#new'
  get 'auth/:provider/callback' => 'sessions#create'
  get '/signout' => 'sessions#destroy', :as => :signout
  get 'auth/failure'

  resources :users, only: [:index]

  get 'ok-kyle' => "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :kyles, only: [:index]
      resources :matches, only: [:index, :destroy]
      resources :users, only: [:index]
    end
  end
end
