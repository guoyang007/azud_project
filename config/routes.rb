Azud::Application.routes.draw do
  root :to => 'homes#index'

  get 'contactus(.html)' => 'contactus#contactus'
  get 'watertech(.html)' => 'watertech#watertech'

  resources :fiteration do#关于
    collection do
      get "/helix" => "fiteration#helix"
      get "/luxon" => "fiteration#luxon"
      get "/semiauto" => "fiteration#semiauto"
      get "/helix/detail" => "fiteration#detail"
    end
  end

end
