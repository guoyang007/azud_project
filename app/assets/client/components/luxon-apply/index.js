// 
// =require swiper/swiper.jquery.min
// 
// =require_self
;
(function($, window, document, undefined) {
    var param = {};

    var LuxonApply= function(el, opts) {
        this.el = el;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);
    }


    LuxonApply.prototype = {
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
            
            var mySwiper=new Swiper('.swiper-container',{
            	prevButton:'.swiper-button-prev',
            	nextButton:'.swiper-button-next',
            	slidesPerView : 4,
            	slidesPerGroup : 4,
            	spaceBetween : 0,
            })

        }
    }

    $.fn.LuxonApply= function(opts) {
        var comLuxonApply;

        return this.each(function() {
            var elNode = $(this);

            if (elNode.attr('data-initialized') == 'true') {
                return;
            }

            comLuxonApply= new LuxonApply(elNode, opts);
            comLuxonApply.init();
        });
    }
})(window.jQuery || window.Zepto, window, document);
			