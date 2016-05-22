# coding: utf-8
class FeedbacksController < BaseController
	def new
		@feedback = Feedback.new
		@employs = Employ.where("state = true").order("id DESC")
	end

	def create
		@feedback = Feedback.new(params[:feedback])
		respond_to do |format|
			if @feedback.save
				format.js	
			end
		end
	end
end