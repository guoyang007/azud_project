//
// =require components/common/index
// =require components/page-header/index
// =require components/luxon-module/index
//
// =require components/luxon-apply/index 
// =require_self
 //
$(function(){
	var el=$('body');

	el.find('.com-page-header').PageHeader();
	el.find('.com-luxon-apply').LuxonApply();
	el.find('.com-luxon-module').LuxonModule();
})