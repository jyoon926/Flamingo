 $(document).ready(function(){

	//BG On Big Displays
	if ( $(window).width() > 739) {
		var $win = $(window);
		var $bg = $('.bg');
		var $bg2 = $('.bgdarker');
		var $section2 = $('.section2');

		$win.on('scroll', function() {
			var top = $win.scrollTop()/-6000;
			var top1 = $win.scrollTop()/1300;
			var top2 = $win.scrollTop();
			var offset = $('.space').offset().top;
			var distance = (offset - top2);
			$bg.css('transform', 'scale(' + (top + 1.3) + ')');
			$bg2.css('opacity', top1);
			$section2.css('transform', 'translateX(' + ((top2 - distance - 2500) * -1) + 'px)');
			$section2.css('opacity', top1);
		});



	}

	//Smooth Scrolling Between Links
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			},1000, function(){
				window.location.hash = hash;
			});
		}
	});
});
