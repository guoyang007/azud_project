// 
// 
// =require_self
;
(function($, window, document, undefined) {
    var param = {};

    var LuxonModule= function(el, opts) {
        this.el = el;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);
    }


    LuxonModule.prototype = {
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
                el = me.el,
                index,
                elIndex=null;

            el.find('.lists li').on('click',function(e){
                index=$(this).index();
                
                if(elIndex==null){
                    $('.module-detail').eq(index).slideDown();
                    elIndex=index;
                }
                else{
                    if(index==elIndex){return;}

                    $('.module-detail').eq(elIndex).slideUp().end().eq(index).slideDown();
                    // $('.module-detail').eq(index).slideDown();

                    
                    elIndex=index;
                }
            })
            
         

        }
    }

    $.fn.LuxonModule= function(opts) {
        var comLuxonModule;

        return this.each(function() {
            var elNode = $(this);

            if (elNode.attr('data-initialized') == 'true') {
                return;
            }

            comLuxonModule= new LuxonModule(elNode, opts);
            comLuxonModule.init();
        });
    }
})(window.jQuery || window.Zepto, window, document);
			