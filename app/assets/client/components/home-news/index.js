//
//=require components/common/util
//=require_self
//
//

;
(function($, window, document, undefined) {
    var param = {};

    var HomeNews= function(el, opts) {
        this.el = el;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);
    }


    HomeNews.prototype = {
        init: function() {
            var me = this,
                el = me.el;

            me.bindEvents();
            $.fn.utils.smartDate(el.find('.smart-date'));
            $.fn.utils.smartDotdotdot(el.find('.excerpt'));
            window.COMS = window.COMS || [];
            el.attr('data-initialized', 'true');
            el.attr('data-guid', window.COMS.length);
            window.COMS.push(me);

            return me;
        },
        bindEvents: function() {
            var me = this,
                el = me.el;
     
        }
    }

    $.fn.HomeNews= function(opts) {
        var comHomeNews;

        return this.each(function() {
            var elNode = $(this);

            if (elNode.attr('data-initialized') == 'true') {
                return;
            }

            comHomeNews= new HomeNews(elNode, opts);
            comHomeNews.init();
        });
    }
})(window.jQuery || window.Zepto, window, document);
