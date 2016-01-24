//= require jquery.dotdotdot/jquery.dotdotdot
//
//
//= require_self


/**
 * utils工具函数，提供基础的辅助函数
 */
;
(function($, window, document, undefined) {
    $.fn.utils = {

        getComponentInstance: function(selector) {
            var guid;

            if (typeof selector == 'undefined') {
                return null;
            }

            if (typeof selector == 'string') {
                selector = $(selector);
            }
            selector = selector.eq(0);

            guid = selector.attr('data-guid');

            return COMS[guid];
        },

        /**
         * tansitionEnd事件
         * @param  {[type]}   elNode   [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        transitionEnd: function(elNode, callback) {
            var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                i, j;

            function fireCallBack(e) {
                /*jshint validthis:true */
                if (e.target !== this) return;
                callback.call(this, e);
                for (i = 0; i < events.length; i++) {
                    elNode.off(events[i], fireCallBack);
                }
            }
            if (callback) {
                for (i = 0; i < events.length; i++) {
                    elNode.on(events[i], fireCallBack);
                }
            }
        },
        /**
         * 频率控制函数， fn执行次数不超过 1 次/delay
         * @param fn{Function}     传入的函数
         * @param delay{Number}    时间间隔
         * @param options{Object}  如果想忽略开始边界上的调用则传入 {leading:false},
         *                         如果想忽略结束边界上的调用则传入 {trailing:false},
         * @returns {Function}     返回调用函数
         */
        throttle: function(fn, delay, options) {
            var wait = false;
            if (!options) options = {};
            return function() {
                var that = this,
                    args = arguments;
                if (!wait) {
                    if (!(options.leading === false)) {
                        fn.apply(that, args);
                    }
                    wait = true;
                    setTimeout(function() {
                        if (!(options.trailing === false)) {
                            fn.apply(that, args);
                        }
                        wait = false;
                    }, delay);
                }
            }
        },

        /**
         * 空闲控制函数， fn仅执行一次
         * @param fn{Function}     传入的函数
         * @param delay{Number}    时间间隔
         * @param options{Object}  如果想忽略开始边界上的调用则传入 {leading:false},
         *                         如果想忽略结束边界上的调用则传入 {trailing:false},
         * @returns {Function}     返回调用函数
         */
        debounce: function(fn, delay, options) {
            var timeoutId;
            if (!options) options = {};
            var leadingExc = false;

            return function() {
                var that = this,
                    args = arguments;
                if (!leadingExc && !(options.leading === false)) {
                    fn.apply(that, args);
                }
                leadingExc = true;
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(function() {
                    if (!(options.trailing === false)) {
                        fn.apply(that, args);
                    }
                    leadingExc = false;
                }, delay);
            }
        },

        /**
         * 显示通知
         * @param  {[type]} msg [description]
         * @return {[type]}     [description]
         */
        showNotification: function(msg) {
            var notification = '<div class="com-notification">\
                                        <div class="notification-bd">\
                                            <p class="msg"></p>\
                                        </div>\
                                    </div>';

            if ($('.com-notification').length == 0) {
                $('body').append(notification);
            }

            $('.com-notification').find('.msg').text(msg || '网络不稳定，请稍后再试或刷新页面~');
            $('.com-notification').css({
                'left': ($(window).width() - $('.com-notification').outerWidth()) / 2,
                'top': ($(window).height() - $('.com-notification').outerHeight()) / 2 - 40
            });

            setTimeout(function() {
                $.fn.utils.hideNotification();
            }, 2 * 1000);
        },

        /**
         * 隐藏通知
         * @return {[type]} [description]
         */
        hideNotification: function() {
            $('.com-notification').length && $('.com-notification').remove();
        },


        /**
         * 判断登录状态
         * @return {Boolean} [description]
         */
        isLogined: function() {
            var elUser;

            if ($('.com-page-header').length) {
                elUser = $('.com-page-header .ribbon .user');
            } else {
                elUser = $('.com-card-header');
            }


            if (!elUser.attr('data-isLogined') || elUser.attr('data-isLogined') == 'false') {
                return false;
            }
            return true;
        },


        smartDate: function(elsSmartDate) {
            if (typeof elsSmartDate == 'string') {
                elsSmartDate = $(elsSmartDate);
            }

            elsSmartDate.each(function() {
                var elSmartDate = $(this),
                    isToday = false,
                    isYesterday = false,
                    isPastYear = false,
                    nowDate = new Date(),
                    originDate, diffMinute;

                if (!elSmartDate.attr('data-originDate')) {
                    return;
                }

                originDate = new Date(elSmartDate.attr('data-originDate').replace(/-/g, "/"));
                diffMinute = Math.round((nowDate.getTime() - originDate.getTime()) / (1000 * 60));

                if (diffMinute <= nowDate.getHours() * 60) {
                    isToday = true;
                }
                if (nowDate.getDate() - originDate.getDate() == 1) {
                    isYesterday = true;
                }
                if (nowDate.getFullYear() - originDate.getFullYear() >= 1) {
                    isPastYear = true;
                }

                if (diffMinute < 30 && isToday) {
                    elSmartDate.text('刚刚');
                } else if (diffMinute < 60 && isToday) {
                    elSmartDate.text(diffMinute + ' 分钟前');
                } else if (diffMinute < 60 * 24 && isToday) {
                    elSmartDate.text(Math.floor(diffMinute / 60) + ' 小时前');
                } else if (diffMinute < 60 * 24 * 2 && isYesterday) {
                    elSmartDate.text('昨天');
                } else if (isPastYear) {
                    elSmartDate.text(originDate.getFullYear() + ' 年 ' + (originDate.getMonth() + 1) + ' 月 ' + originDate.getDate() + ' 日');
                } else {
                    elSmartDate.text(originDate.getMonth() + 1 + ' 月 ' + originDate.getDate() + ' 日');
                }
            });
        },

        smartDotdotdot: function(elsSmartDotdotdot) {
            if (typeof elsSmartDotdotdot == 'string') {
                elsSmartDotdotdot = $(elsSmartDotdotdot);
            }


            elsSmartDotdotdot.each(function() {
                var elSmartDotdotdot = $(this);

                elsSmartDotdotdot.dotdotdot({
                    wrap: 'letter'
                });
            });
        }
    };
})(window.jQuery || window.Zepto, window, document);
