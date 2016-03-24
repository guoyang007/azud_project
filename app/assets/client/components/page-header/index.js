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
                papers=new RegExp("papers"),
                fiteration=new RegExp("fiteration"),
                elTop=$('.com-page-header').outerHeight(),
                elHeight=el.find('.page-hd').outerHeight(),
                curPath=window.location.pathname;

                $('.list li a').each(function(e){
                    if($(this).attr('href')==curPath){
                        $('.lists').show();
                        $(this).parent().addClass('active');
                    }
                })
                //当前目录下高亮
                $('.navs .nav').each(function(e){
                    if($(this).attr('href')==curPath){
                        $(this).addClass('cur');
                    }
                })
                el.find("[href='/fiteration']").on("click",function(event) {
                    /* Act on the event */
                    event.preventDefault();
                })
                if(papers.test(curPath)){
                    $("[href='/papers']").addClass('cur');
                }
                // if(fiteration.test(curPath)){
                //     el.css("height","197px");
                // }
                if(fiteration.test(curPath)){
                    el.css("margin-bottom","-197px");
                }
                if(curPath=='/fiteration/helix/detail'){
                    $('.page-bd .lists').slideDown().find('li:first').addClass('active');
                }
                if(curPath=='/'){
                    $('.nav:first').addClass('cur');
                }
                //向下滚动一定距离后固定菜单
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
                //展开二级菜单
                el.find(".navs .nav").on('click',function(e){ 
                    var elcurrent=e.currentTarget;
                    $(elcurrent).addClass("cur").siblings().removeClass("cur");
                    // elIndex=$('.navs .nav').index(elcurrent);
                    // $(".page-bd .lists").slideDown();
                    $(".lists .list").eq(0).slideDown().siblings().slideUp();
                        
                });
                el.find('.navs .nav:eq(2)').on('click',function(e){
                    $(".page-bd .lists").slideDown();
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
