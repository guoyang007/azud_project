//
// =require components/common/index
// =require components/page-header/index
//
//=require_self

$(function(){
	var el=$('body'),
		curPath=window.location.pathname,
		filteration=new RegExp("filteration");

	el.find('.com-page-header').PageHeader();
	// if(filteration.test(curPath)){
	//     $('.page-container').css("padding-top","197px");
	// }

})