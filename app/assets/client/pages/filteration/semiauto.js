//
// =require components/common/index
// =require components/page-header/index
//
//=require_self

$(function(){
	var el=$('body'),
		curPath=window.location.pathname,
		filtration=new RegExp("filtration");

	el.find('.com-page-header').PageHeader();
	if(filtration.test(curPath)){
	    $('.page-container').css({"padding-top":"197px"});
	}

})