# coding: utf-8
class PapersController < BaseController
  def index
    @front_papers = Paper.where(["front = ?", true]).order("updated_at DESC").limit(3)
    page = params[:page] || 1
    @papers = Paper.paginate(:page => page, :per_page => 5).order("id DESC")
    respond_to do |format|
      format.html
      format.json{ render json: @papers }
    end
  end

  def show
    @paper = Paper.find(params[:id])
    @count = Paper.count
    @last_paper_id = Paper.last.id
    @first_paper_id = Paper.first.id
    @id_array = if @paper.id == @last_paper_id
      [Paper.where(["id < ?", @paper.id]).last.id , nil]
    elsif @paper.id == @first_paper_id
      [nil , @next_paper_id = Paper.where(["id > ?", @paper.id]).first.id]
    else
      [Paper.where(["id < ?", @paper.id]).last.id , Paper.where(["id > ?", @paper.id]).first.id]
    end
    @content = change_img_root(@paper.content)
  end

  private
  def change_img_root(html)
    xml = ["<paper_content>" , html , "</paper_content>"].join('')
    image = Nokogiri::XML(xml)
    image.css('img').each do |img|
      img.set_attribute('src' , File.join($AdminIp , img.attribute('src').value))
    end
    html = image.to_html
    return html
  end

end
