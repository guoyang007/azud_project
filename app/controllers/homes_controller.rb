class HomesController < BaseController
	def index
		@papers = Paper.where(["status = ?", 2]).order("publish_time DESC").limit(3)
		respond_to do |format|
			format.html
			format.json { render json: @papers }
		end
	end
end