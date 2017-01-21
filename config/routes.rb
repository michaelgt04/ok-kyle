Rails.application.routes.draw do
  root 'users#new'
  get 'auth/:provider/callback' => 'sessions#create'
  get '/signout' => 'sessions#destroy', :as => :signout
  get 'auth/failure'

  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :kyles, only: [:index]
    end
  end
end
