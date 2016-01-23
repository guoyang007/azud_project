Azud::Application.routes.draw do
  root :to => 'homes#index'
  get 'aboutus(.html)' => 'aboutus#aboutus'
  get 'contactus(.html)' => 'contactus#contactus'
end
