class IrrigationController < BaseController
	def irrigation
	end

	def download_line
	  send_file("files/20131025113427AZUD_LINE ENG_ESP.pdf" , disposition: :inline)
	end

	def download_sprint
	  send_file("files/2015121015724AZUD_SPRINT ENG_ESP.pdf" , disposition: :inline)
	end

	def download_as
	  send_file("files/201647132834AZUD_PREMIER_PC_AS ENG.pdf" , disposition: :inline)
	end

	def download_drip
	  send_file("files/2011617121143AZUDRIP ESP_ENG.pdf" , disposition: :inline)
	end

	def download_system
	  send_file("files/201322617358AZUD_PC_SYSTEM ESP_ENG.pdf" , disposition: :inline)
	end

	def download_greentec
	  send_file("files/20149192416AZUD_GREENTEC ENG.pdf" , disposition: :inline)
	end

	def download_navia
	  send_file("files/201612210449NAVIA ENG_ESP.pdf" , disposition: :inline)
	end

	def download_mbtech
	  send_file("files/2016541492MBTECH ESP_ENG.pdf" , disposition: :inline)
	end

	def download_fit
	  send_file("files/2011127114755AZUDFIT ESP_ENG.pdf" , disposition: :inline)
	end

	def download_plus
	  send_file("files/201552895646AZUD_FIT_PLUS ENG_ESP.pdf" , disposition: :inline)
	end

	def download_ag
	  send_file("files/201472583019AZUD_FIT_AG ESP_ENG.pdf" , disposition: :inline)
	end

	def download_raintec
	  send_file("files/2010329115233AZUD_RAINTEC ESP_ENG.pdf" , disposition: :inline)
	end

end