# coding: utf-8
class FeedbacksController < BaseController
	def new
		@feedback = Feedback.new
	end

	def create
		@feedback = Feedback.new(params[:feedback])
		respond_to do |format|
			if @feedback.save
				format.html { redirect_to "/contactus" , notice: "您的需求已提交,我们将尽快为您处理!"}
			else
				format.html { redirect_to "/contactus" , notice: "抱歉,未上传成功,请您重新填写"}	
			end
		end
	end
end