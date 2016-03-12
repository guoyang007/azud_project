//
//
//=require_self
//
;
(function($,window,document,undefined){
	function initRipple(){
		var el=$('body'),
			x,y,size;
		el.on('animationend webkitAnimationEnd','.ripple .ink',function(e){
			e.preventDefault();
			$(this).remove();
		});
		el.on("click",".ripple",function(e){
			e.preventDefault();
			var elCurrent=$(e.currentTarget);
			if(elCurrent.find('.ink').length==0){
				elCurrent.prepend('<span class="ink"></span>');
			}
			var elInk=el.find('.ink');
			elInk.removeClass('animate');
			if(!elInk.height()&&!elInk.width()){
				size=Math.max(elCurrent.outerHeight(),elCurrent.outerWidth());
				elInk.css({
					height:size,
					width:size
				});
			}
			x=e.pageX-elCurrent.offset().left-elInk.width()/2;
			y=e.pageY-elCurrent.offset().top-elInk.height()/2;
			elInk.css({
				left:x+"px",
				top:y+"px"
			}).addClass('animate');

		});
	}
	$.fn.initRipple=initRipple;
})(window.jQuery||window.Zepto,window,document);