class Paper < ActiveRecord::Base
	attr_accessible :title, :subtitle, :abstract, :content, :status, :state
end