Azud::Application.routes.draw do
  root :to => 'homes#index'

  get 'contactus(.html)' => 'feedbacks#new'
  get 'watertech(.html)' => 'watertech#watertech'
  get 'introduce(.html)' => 'introduce#index'

  resources :fiteration do#关于
    collection do
      get "/helix" => "fiteration#helix"
      get "/luxon" => "fiteration#luxon"
      get "/semiauto" => "fiteration#semiauto"
      get "/helix/detail" => "fiteration#detail"
    end
  end

  resources :papers#关于
  resources :feedbacks
end
