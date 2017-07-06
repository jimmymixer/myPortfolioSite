Rails.application.routes.draw do
  root 'mains#index'

  get '/index' => 'mains#index'

  # get 'mains/new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
