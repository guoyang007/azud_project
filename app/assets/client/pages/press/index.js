//
// =require components/common/index
// =require components/page-header/index
// =require_self
 //

$(function() {
    var el = $('body');


    // 初始化组件
    el.find('.com-page-header').PageHeader();
    el.find('.text-overflow').each(function(){
    	var maxwidth=125;
    	if($(this).text().length>maxwidth){
    		$(this).text($(this).text().substring(0,maxwidth));
    		$(this).html($(this).text()+"...");
    	}
    });
    el.on('click','.more-btn',function(e){
        e.preventDefault();
        $.$.ajax({
            url: '',
            type: 'POST',
            dataType: 'json',
            data: {param1: 'value1'},
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        
    })
});
