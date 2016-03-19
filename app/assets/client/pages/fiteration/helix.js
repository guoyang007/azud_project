//
// =require components/common/index
// =require components/page-header/index
// =require components/helix-module/index
// =require components/helix-apply/index
// =require_self
 //
$(function(){
	var el=$('body'),
		curPath=window.location.pathname,
		fiteration=new RegExp("fiteration");

	el.find('.com-page-header').PageHeader();
	el.find('.com-helix-module').HelixModule();
	el.find('.com-helix-apply').HelixApply();

	if(fiteration.test(curPath)){
	    $('.page-container').css("padding-top","197px");
	}
})