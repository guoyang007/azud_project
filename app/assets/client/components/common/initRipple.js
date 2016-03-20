//
//
//= require_self


;
(function($, window, document, undefined) {
    function initRipple() {
        var el = $('body'),
            x, y, size;
        //     isSupportCSSAnimations = $('html').hasClass('cssanimations');

        // if (!isSupportCSSAnimations) {
        //     return;
        // }

        el.on('animationend webkitanimationend mozanimationend msanimationend oanimationend', '.ripple .ink', function(e) {
            e.preventDefault();

            var elCurrentTarget = $(e.currentTarget);

            elCurrentTarget.remove();
        });

        el.on('click', '.ripple', function(e) {
            e.preventDefault();

            var elCurrentTarget = $(e.currentTarget);

            if (elCurrentTarget.find(".ink").length == 0) {
                elCurrentTarget.prepend("<span class='ink'></span>");
            }

            elInk = elCurrentTarget.find(".ink");
            //incase of quick double clicks stop the previous animation
            elInk.removeClass("animate");

            //set size of .ink
            if (!elInk.height() && !elInk.width()) {
                size = Math.max(elCurrentTarget.outerWidth(), elCurrentTarget.outerHeight());
                elInk.css({
                    height: size,
                    width: size
                });
            }

            x = e.pageX - elCurrentTarget.offset().left - elInk.width() / 2;
            y = e.pageY - elCurrentTarget.offset().top - elInk.height() / 2;


            elInk.css({
                top: y + 'px',
                left: x + 'px'
            }).addClass("animate");
        });
    }

    $.fn.initRipple = initRipple;
})(window.jQuery || window.Zepto, window, document);
