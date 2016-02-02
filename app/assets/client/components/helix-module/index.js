// 
// 
// =require_self
;
(function($, window, document, undefined) {
    var param = {};

    var HelixModule= function(el, opts) {
        this.el = el;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);
    }


    HelixModule.prototype = {
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
            
         

        }
    }

    $.fn.HelixModule= function(opts) {
        var comHelixModule;

        return this.each(function() {
            var elNode = $(this);

            if (elNode.attr('data-initialized') == 'true') {
                return;
            }

            comHelixModule= new HelixModule(elNode, opts);
            comHelixModule.init();
        });
    }
})(window.jQuery || window.Zepto, window, document);
			