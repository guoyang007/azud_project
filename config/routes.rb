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
      get "/download_helix_200" => "filteration#download_helix_200"
      get "/download_helix_201" => "filteration#download_helix_201"
      get "/download_helix_dcl" => "filteration#download_helix_dcl"
      get "/download_helix_400" => "filteration#download_helix_400"
      get "/download_luxon_lca" => "filteration#download_luxon_lca"
      get "/download_luxon_mfh" => "filteration#download_luxon_mfh"
      get "/download_luxon_ldb" => "filteration#download_luxon_ldb"
      get "/download_luxon_lxe" => "filteration#download_luxon_lxe"
      get "/download_luxon_lem" => "filteration#download_luxon_lem"
      get "/download_luxon_lkm" => "filteration#download_luxon_lkm"
      get "/download_luxon_lpf" => "filteration#download_luxon_lpf"
    end
  end

  resources :papers
  resources :feedbacks
end
