class Feedback < ActiveRecord::Base
  attr_accessible :content, :email, :name, :phone, :state
end