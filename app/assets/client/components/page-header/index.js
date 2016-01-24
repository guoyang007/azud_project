//= require components/common/index
//
//
//= require_self


;
(function($, window, document, undefined) {
    var param = {};

    var PageHeader= function(el, opts) {
        this.el = el;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);
    }


    PageHeader.prototype = {
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
                collapse=false;

                $(window).on("scroll",function(e){
                	var scrollTop=$(window).scrollTop();
                	if (!collapse&&scrollTop>90) {
                		el.addClass("collapse");
                		collapse=true;
                	}else if(collapse&&scrollTop<90){
                		el.removeClass("collapse");
                		collapse=false;
                	}
                })

                $(".page-bd").on("click",function(e){
                    e.preventDefault();
                    var elcurrent=e.currentTarget;
                    $(elcurrent).addClass("cur").siblings().removeClass("cur");
                })


        }
    }

    $.fn.PageHeader= function(opts) {
        var comPageHeader;

        return this.each(function() {
            var elNode = $(this);

            if (elNode.attr('data-initialized') == 'true') {
                return;
            }

            comPageHeader= new PageHeader(elNode, opts);
            comPageHeader.init();
        });
    }
})(window.jQuery || window.Zepto, window, document);
