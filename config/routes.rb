Azud::Application.routes.draw do
  root :to => 'homes#index'
  get 'contactus(.html)' => 'feedbacks#new'
  get 'watertech(.html)' => 'watertech#watertech'
  get 'introduce(.html)' => 'introduce#index'
  get "filtration(.html)" => "filtration#index"
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

  resources :filtration do
    collection do
      get "/helix" => "filtration#helix"
      get "/luxon" => "filtration#luxon"
      get "/semiauto" => "filtration#semiauto"
      get "/helix/detail" => "filtration#detail"
      get "/download_helix_200" => "filtration#download_helix_200"
      get "/download_helix_201" => "filtration#download_helix_201"
      get "/download_helix_dcl" => "filtration#download_helix_dcl"
      get "/download_helix_400" => "filtration#download_helix_400"
      get "/download_helix_dlp" => "filtration#download_helix_dlp"

      get "/download_luxon_lca" => "filtration#download_luxon_lca"
      get "/download_luxon_mfh" => "filtration#download_luxon_mfh"
      get "/download_luxon_ldb" => "filtration#download_luxon_ldb"
      get "/download_luxon_lxe" => "filtration#download_luxon_lxe"
      get "/download_luxon_lem" => "filtration#download_luxon_lem"
      get "/download_luxon_lkm" => "filtration#download_luxon_lkm"
      get "/download_luxon_lpf" => "filtration#download_luxon_lpf"

      get "/download_semi_lcm" => "filtration#download_semi_lcm"
      get "/download_semi_spiral" => "filtration#download_semi_spiral"
      get "/download_semi_system" => "filtration#download_semi_system"
      get "/download_semi_100" => "filtration#download_semi_100"
      get "/download_semi_300" => "filtration#download_semi_300"
      get "/download_semi_agl" => "filtration#download_semi_agl"
    end
  end

  resources :papers
  resources :feedbacks
end
