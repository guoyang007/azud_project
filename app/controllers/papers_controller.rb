# coding: utf-8
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
