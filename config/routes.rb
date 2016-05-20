Azud::Application.routes.draw do
  root :to => 'homes#index'

  get 'contactus(.html)' => 'feedbacks#new'
  get 'watertech(.html)' => 'watertech#watertech'
  get 'introduce(.html)' => 'introduce#index'
  get "filteration(.html)" => "filteration#index"
  resources :filteration do#关于
    collection do
      get "/helix" => "filteration#helix"
      get "/luxon" => "filteration#luxon"
      get "/semiauto" => "filteration#semiauto"
      get "/helix/detail" => "filteration#detail"
    end
  end

  get 'irrigation(.html)' => 'irrigation#index'
  resources :papers#关于
  resources :feedbacks 
end
