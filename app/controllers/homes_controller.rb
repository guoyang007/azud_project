class HomesController < BaseController
	def index
		@papers = Paper.where("state = true").order("id DESC").limit(3)
		respond_to do |format|
			format.html
			format.json { render json: @papers }
		end
	end
end