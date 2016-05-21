Azud::Application.routes.draw do
  root :to => 'homes#index'
  get 'contactus(.html)' => 'feedbacks#new'
  get 'watertech(.html)' => 'watertech#watertech'
  get 'introduce(.html)' => 'introduce#index'
  get "filteration(.html)" => "filteration#index"
  get 'irrigation(.html)' => 'irrigation#index'
  
  resources :watertech do
    collection do
      get "/download_dw" => "watertech#download_dw"
      get "/download_dwe" => "watertech#download_dwe"
      get "/download_osm" => "watertech#download_osm"
      get "/download_ww" => "watertech#download_ww"
      get "/download_rw" => "watertech#download_rw"
      get "/download_gw" => "watertech#download_gw"
    end
  end

  resources :filteration do
    collection do
      get "/helix" => "filteration#helix"
      get "/luxon" => "filteration#luxon"
      get "/semiauto" => "filteration#semiauto"
      get "/helix/detail" => "filteration#detail"
    end
  end

  resources :papers
  resources :feedbacks
end
