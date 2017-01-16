Rails.application.routes.draw do
  root 'users#new'
  get 'auth/:provider/callback' => 'sessions#create'
  get '/signout' => 'sessions#destroy', :as => :signout
  get 'auth/failure'
end
