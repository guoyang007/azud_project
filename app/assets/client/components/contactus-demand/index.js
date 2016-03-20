//=require_self
//= require components/common/initRipple 
//
//

;
(function($, window, document, undefined) {
    var param = {};

    var ContactusDemand= function(el, opts) {
        this.el = el;
        this.defaults = {};
        this.options = $.extend({}, this.defaults, opts);
    }


    ContactusDemand.prototype = {
        init: function() {
            var me = this,
                el = me.el;

            me.bindEvents();
            $.fn.initRipple();
           

            window.COMS = window.COMS || [];
            el.attr('data-initialized', 'true');
            el.attr('data-guid', window.COMS.length);
            window.COMS.push(me);

            return me;
        },
        bindEvents: function() {
            var me = this,
                el = me.el;

            el.on("click",".content .submit",function(e){
                e.preventDefault();
                var name=$('input[type="text"]').val().length,
                    email=$('input[type="email"]').val().length,
                    tel=$('input[type="number"]').val().length,
                    demand=$('textarea').val().length,
                    elForm=$('.content'),
                    elCurrent=$(e.currentTarget);

                if(!(name&&email&&tel&&demand)){
                    $.fn.utils.showNotification('请完善您的信息');
                    return;
                }
                elCurrent.addClass('disable');
                $.ajax({
                    url:elForm.attr('action'),
                    type:'post',
                    dataType:'json',
                    data:{
                        'user[name]':elForm.find('input[type="text"]').val(),
                        'user[email]':elForm.find('input[type="email"]').val(),
                        'user[tel]':elForm.find('input[type=number]').val(),
                        'demand':elForm.find('textarea').val()
                    },
                    success:function(ret){
                        $.fn.utils.showNotification(ret.msg);
                        setTimeout(function(){
                            elCurrent.removeClass('disable');
                        },2000);
                    },
                    error:function(xhr){
                        var ret=xhr.responseJSON;
                        $.fn.utils.showNotification(ret.error);
                        elCurrent.hasClass('disable')&&elCurrent.removeClass('disable');
                    }

                })
            })    
        }
    }

    $.fn.ContactusDemand= function(opts) {
        var comContactusDemand;

        return this.each(function() {
            var elNode = $(this);

            if (elNode.attr('data-initialized') == 'true') {
                return;
            }

            comContactusDemand= new ContactusDemand(elNode, opts);
            comContactusDemand.init();
        });
    }
})(window.jQuery || window.Zepto, window, document);
