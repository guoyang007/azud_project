class FilterationController < BaseController
	def index
	end

	def helix
	end

	def luxon
	end

	def semiauto
	end
	
	def detail
	end

	def download_helix_200
    		send_file("files/20160505_AZUD_HELIX_AUTO_200300 ENG.pdf" , disposition: :attachment)
  	end

  	def download_helix_201
    		send_file("files/20160505_AZUD_HELIX_AUTO_201 ENG.pdf" , disposition: :attachment)
  	end

    	def download_helix_dcl
    		send_file("files/20160505_AZUD_HELIX_AUTO_4DCL_4DCH ENG.pdf" , disposition: :attachment)
  	end

  	def download_helix_400
    		send_file("files/20160505_AZUD_HELIX_AUTO_4DCL_4DCH ENG.pdf" , disposition: :attachment)
  	end

  	def download_luxon_lca
  		send_file("files/20160505_AZUD_LUXON_LCA ENG.pdf" , disposition: :attachment)
  	end

  	def download_luxon_mfh
  		send_file("files/20160505_AZUD_LUXON_MFH ENG.pdf" , disposition: :attachment)
  	end

  	def download_luxon_ldb
  		send_file("files/20160505_AZUD_LUXON_LDB ENG.pdf" , disposition: :attachment)
  	end

  	def download_luxon_lxe
  		send_file("files/20160505_AZUD_LUXON_LXE ENG.pdf" , disposition: :attachment)
  	end

  	def download_luxon_lem
  		send_file("files/20160505_AZUD_LUXON_LEM ENG.pdf" , disposition: :attachment)
  	end

  	def download_luxon_lkm#???
  		send_file("files/20160505_AZUD_LUXON_LEM ENG.pdf" , disposition: :attachment)
  	end
  	
  	def download_luxon_lpf
  		send_file("files/20160505_AZUD_LUXON_LPF ENG.pdf" , disposition: :attachment)
  	end
end