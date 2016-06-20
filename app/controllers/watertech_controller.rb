# coding: utf-8
class WatertechController < BaseController

  def watertech
  end

  def download_dw
    send_file("files/AZUD WATERTECH DW.pdf" , disposition: :inline)
  end

  def download_dwe
    send_file("files/AZUD WATERTECH DWE.pdf" , disposition: :inline)
  end

  def download_osm
    send_file("files/AZUD WATERTECH OSM.pdf" , disposition: :inline)
  end

  def download_gw
    send_file("files/AZUD WATERTECH GW DU.PDF" , disposition: :inline)
  end

  def download_rw
    send_file("files/AZUD WATERTECH RW DU.PDF" , disposition: :inline)
  end

  def download_ww
    send_file("files/AZUD WATERTECH WW.PDF" , disposition: :inline)
  end
end
