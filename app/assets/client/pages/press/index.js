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
    el.find('.text-overflow').each(function(){
    	var maxwidth=125;
    	if($(this).text().length>maxwidth){
    		$(this).text($(this).text().substring(0,maxwidth));
    		$(this).html($(this).text()+"...");
    	}
    });
    $('.page-container').css('min-height',elClientHeight);
});
