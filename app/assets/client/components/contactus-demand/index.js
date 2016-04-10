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

            el.on("click",".submit",function(e){

                var name=$('#feedback_name').val().length,
                    email=$('#feedback_email').val().length,
                    tel=$('#feedback_phone').val().length,
                    demand=$('#feedback_content').val().length,
                    elForm=$('#new_feedback'),
                    elCurrent=$(e.currentTarget);
                if(!(name&&email&&tel&&demand)){
                    $.fn.utils.showNotification('请完善您的信息');
                    e.preventDefault();
                }else{
                     $.fn.utils.showNotification("发送成功");
                     // e.preventDefault();
                }
                
                // $.ajax({
                //     url:$('#new_feedback').attr('action'),
                //     type:'post',
                //     dataType:'json',
                //     data:{
                //         'name':$('#feedback_name').val(),
                //         'email':$('#feedback_email').val(),
                //         'phone':$('#feedback_phone').val(),
                //         'content':$('#feedback_content').val()
                //     },
                //     success:function(ret){
                //         $.fn.utils.showNotification(ret.msg);
                //         setTimeout(function(){
                //             elCurrent.removeClass('disable');
                //         },2000);
                //     },
                //     error:function(xhr){
                //         var ret=xhr.responseJSON;
                //         $.fn.utils.showNotification(ret.error);
                //         elCurrent.hasClass('disable')&&elCurrent.removeClass('disable');
                //     }

                // })
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
