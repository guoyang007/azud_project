# coding: utf-8
class PapersController < BaseController
	def index
		page = params[:page] || 1
		@papers = Paper.where("state = true").paginate(:page => page, :per_page => 5).order("id DESC")
		tmp_page = page.to_i + 1
		tmp_paper = Paper.where("state = true").paginate(:page => tmp_page, :per_page => 1)
		has_more = (tmp_paper != [])
		p has_more, "11111111"
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