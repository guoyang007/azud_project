//
// =require components/common/index
// =require components/page-header/index
// =require components/full-banner/index
// =require components/home-news/index
// =require components/partner/index
// =require_self
 //

$(function() {
    var el = $('body');


    // 初始化组件
    el.find('.com-page-header').PageHeader();
    el.find('.com-full-banner').FullBanner();
    el.find('.com-home-news').HomeNews();
    el.find('.com-partner').Partner();
});
