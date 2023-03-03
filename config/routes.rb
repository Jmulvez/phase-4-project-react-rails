Rails.application.routes.draw do
    get '/me', to: "users#show"
    post '/signup', to: "users#create"
    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"
    resources :games, only: [:index, :create]
    resources :reviews, only: [:show, :index, :create, :update, :delete]
end
