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
                elIndex=null,
                collapse=false,
                elTop=el.find('.page-hd').outerHeight();
 
                $(window).on("scroll",function(e){
                	var scrollTop=$(window).scrollTop();
                	if (!collapse&&scrollTop>=elTop) {
                		el.addClass("collapse");
                		collapse=true;
                	}else if(collapse&&scrollTop<elTop){
                		el.removeClass("collapse");
                		collapse=false;
                	}
                })
                el.find(".navs .nav").on('click',function(e){ 
                    var elcurrent=e.currentTarget;
                    $(elcurrent).addClass("cur").siblings().removeClass("cur");
                    elIndex=$('.navs .nav').index(elcurrent);
                    $(".lists .list").eq(0).slideDown().siblings().slideUp();
                        
                })
                $(".lists .list").on('click',function(e){
                    var elcurrent=e.currentTarget;
                    $(elcurrent).addClass('active').siblings().removeClass('active');
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
