# coding: utf-8
class FeedbacksController < BaseController
	def new
		@feedback = Feedback.new
		# render layout: nil
	end

	def create
		@feedback = Feedback.new(params[:feedback])
		respond_to do |format|
			if @feedback.save
				format.js
			else 
				
			end
		end
	end
end