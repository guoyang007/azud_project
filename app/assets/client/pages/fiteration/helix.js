//
// =require components/common/index
// =require components/page-header/index
// =require components/helix-module/index
// =require components/helix-apply/index
// =require_self
 //
$(function(){
	var el=$('body');

	el.find('.com-page-header').PageHeader();
	el.find('.com-apply').HelixApply();
})