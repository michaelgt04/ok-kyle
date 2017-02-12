Rails.application.routes.draw do
  root 'users#new'
  get 'auth/:provider/callback' => 'sessions#create'
  get "/log-in" => "sessions#new"
  post "/log-in" => "sessions#create", as: :sign_in
  get '/signout' => 'sessions#destroy', :as => :signout
  get 'auth/failure'

  resources :sessions
  resources :users, only: [:index]
  resources :admins

  get 'ok-kyle' => "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :kyles, only: [:index]
      resources :matches, only: [:index, :destroy, :create]
      resources :users, only: [:index]
      resources :admins, only: [:index]
    end
  end

  mount ActionCable.server => '/cable'
  resources :chatrooms, param: :id
  resources :messages
end
