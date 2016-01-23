//= jquery/jquery
//
//= require_self


// ;
// (function($, window, document, undefined) {
//     if (!Array.prototype.indexOf) {
//         Array.prototype.indexOf = function(elt /*, from*/ ) {
//             var len = this.length >>> 0;

//             var from = Number(arguments[1]) || 0;
//             from = (from < 0) ? Math.ceil(from) : Math.floor(from);
//             if (from < 0)
//                 from += len;

//             for (; from < len; from++) {
//                 if (from in this &&
//                     this[from] === elt)
//                     return from;
//             }
//             return -1;
//         };
//     }
// })(window.jQuery || window.Zepto, window, document);


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
