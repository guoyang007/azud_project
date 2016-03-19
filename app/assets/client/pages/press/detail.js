//
// =require components/common/index
// =require components/page-header/index
// =require_self
 //

$(function() {
    var el = $('body'),
    	elClientHeight=document.documentElement.clientHeight;


    // 初始化组件
    el.find('.com-page-header').PageHeader();
    $('.page-container').css('min-height',elClientHeight);
});
