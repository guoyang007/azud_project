class PapersController < BaseController
	def index
		page = params[:page] || 1
		@papers = Paper.where("state = true").paginate(:page => page, :per_page => 5).order("id DESC")
		respond_to do |format|
			format.html
			format.json{ render json: @papers }
		end
	end

	def show
		@paper = Paper.find(params[:id])
		respond_to do |format|
			format.html
			format.json { render json: @paper}
		end
	end
end