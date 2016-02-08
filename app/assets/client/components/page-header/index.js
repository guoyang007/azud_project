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
                elTop=$('.com-page-header').outerHeight(),
                elHeight=el.find('.page-hd').outerHeight(),
                curPath=window.location.pathname;

                $('.list li a').each(function(e){
                    if($(this).attr('href')==curPath){
                        $(this).parent().addClass('active').parent().addClass('show');
                    }
                })
                if(curPath=='/fiteration/helix/detail'){
                    $('.page-bd .list').addClass('show').children('li:first').addClass('active');
                }
 
                $(window).on("scroll",function(e){
                	var scrollTop=$(window).scrollTop();
                	if (!collapse&&scrollTop>=elTop) {
                		el.addClass("collapse");
                		collapse=true;
                	}else if(collapse&&scrollTop<elHeight){
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
