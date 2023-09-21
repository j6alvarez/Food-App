Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'categories#index'
  get "/categories", to: "categories#index"
  get "/categories/:category", to: "categories#obtain_meals_by_category"
  post :orders, to: 'orders#create'
end
