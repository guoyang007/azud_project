//= require jquery/jquery
//= require components/common/util
//
//= require_self


;
(function($, window, document, undefined) {
    function initLink() {
        var el = $('body');

        el.on('click', 'a', function(e) {
            var elCurrentTarget = $(e.currentTarget);

            if (elCurrentTarget.attr('target') != '_self') {
                elCurrentTarget.attr('target', '_blank');
            }

            return true;
        });
    }

    $.fn.initLink = initLink;
})(window.jQuery || window.Zepto, window, document);
