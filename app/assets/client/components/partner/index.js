//=require swiper/swiper.jquery.min
//=require_self
//
//

;
(function($, window, document, undefined) {
    var param = {};

    var Partner= function(el, opts) {
        this.el = el;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);
    }


    Partner.prototype = {
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

                var mySwiper = new Swiper ('.com-partner .swiper-container', {
	    loop: false,
	    speed:500,
	    simulateTouch:false,
	    slidesPerView:6,
	    prevButton:'.swiper-button-prev',
	    nextButton:'.swiper-button-next',
	    slidesPerGroup : 6,
	  })        
        }
    }

    $.fn.Partner= function(opts) {
        var comPartner;

        return this.each(function() {
            var elNode = $(this);

            if (elNode.attr('data-initialized') == 'true') {
                return;
            }

            comPartner= new Partner(elNode, opts);
            comPartner.init();
        });
    }
})(window.jQuery || window.Zepto, window, document);
