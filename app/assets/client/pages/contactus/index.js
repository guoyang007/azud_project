//
// =require components/common/index
// =require components/page-header/index
// =require components/contactus-demand/index
// =reuqire components/common/initRipple
// =require_self
 //

$(function() {
    var el = $('body');


    // 初始化组件
    el.find('.com-page-header').PageHeader();
    el.find('.com-contactus-demand').ContactusDemand();
});
