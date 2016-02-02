Azud::Application.routes.draw do
  root :to => 'homes#index'
  get 'aboutus(.html)' => 'aboutus#aboutus'
  get 'contactus(.html)' => 'contactus#contactus'
 
  resources :fiteration do#关于
    collection do
      get "/helix" => "fiteration#helix"
      get "/luxon" => "fiteration#luxon"
      get "/semiauto" => "fiteration#semiauto"
    end
  end

end
