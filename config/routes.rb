Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: { format: :json } do
    resources :users, only: [:index, :create, :show, :update] do
      resources :videos, only: [:index, :create, :show, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :games, only: [:index, :show]
  end

  root to: 'static_pages#root'
end 