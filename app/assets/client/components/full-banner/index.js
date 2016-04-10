//=require swiper/swiper.jquery.min
//=require_self
//
//

;
(function($, window, document, undefined) {
    var param = {};

    var FullBanner= function(el, opts) {
        this.el = el;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);
    }


    FullBanner.prototype = {
        init: function() {
            var me = this,
                el = me.el;

            me.bindEvents();

            window.COMS = window.COMS || [];
            el.attr('data-initialized', 'true');
            el.attr('data-guid', window.COMS.length);
            window.COMS.push(me);

            return me;
        },
        bindEvents: function() {
            var me = this,
                el = me.el;

                var mySwiper = new Swiper ('.com-full-banner.swiper-container', {
	    loop: true,
	    speed:600,
	    autoplay:3000,
	    simulateTouch:false,
	    slideToClickedSlide:true,
        centeredSlides : true,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
        paginationClickable :true,

	  })        
        }
    }

    $.fn.FullBanner= function(opts) {
        var comFullBanner;

        return this.each(function() {
            var elNode = $(this);

            if (elNode.attr('data-initialized') == 'true') {
                return;
            }

            comFullBanner= new FullBanner(elNode, opts);
            comFullBanner.init();
        });
    }
})(window.jQuery || window.Zepto, window, document);
