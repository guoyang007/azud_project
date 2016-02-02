// 
// =require swiper/swiper.jquery.min
// 
// =require_self
;
(function($, window, document, undefined) {
    var param = {};

    var HelixApply= function(el, opts) {
        this.el = el;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);
    }


    HelixApply.prototype = {
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

    $.fn.HelixApply= function(opts) {
        var comHelixApply;

        return this.each(function() {
            var elNode = $(this);

            if (elNode.attr('data-initialized') == 'true') {
                return;
            }

            comHelixApply= new HelixApply(elNode, opts);
            comHelixApply.init();
        });
    }
})(window.jQuery || window.Zepto, window, document);
			