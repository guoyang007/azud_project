Azud::Application.routes.draw do
  root :to => 'home#home'
  get 'aboutus(.html)' => 'aboutus#aboutus'
  get 'contactus(.html)' => 'contactus#contactus'
end
