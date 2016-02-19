Azud::Application.routes.draw do
  root :to => 'homes#index'

  get 'contactus(.html)' => 'contactus#index'
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

  resources :press do#关于
    collection do
      get "/" => "press#index"
      get "/detail" => "press#detail"
    end
  end

end
