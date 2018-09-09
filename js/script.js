 $(document).ready(function(){

	//BG On Big Displays
	if ( $(window).width() > 739) {
		var $win = $(window);
		var $bg = $('.bg');
		var $bg2 = $('.bgdarker');

		$win.on('scroll', function() {
			var top = $win.scrollTop()/-6000;
			var top1 = $win.scrollTop()/1300;
			var top2 = $win.scrollTop();
			var offset = $('.space').offset().top;
			var distance = (offset - top2);
			$bg.css('transform', 'scale(' + (top + 1.3) + ')');
			$bg2.css('opacity', top1);
		});

	}

	//Smooth Scrolling Between Links
	var slideIndex = 1;
	
	function plusSlides(n) {
		slideIndex += 1;
		$('.album').removeClass('active');
		$('#album' + slideIndex).addClass('active');
		$('.heading').removeClass('on');
		$('#heading' + slideIndex).addClass('on');
		$('.slidetrack').css('margin-left', '-' + (slideIndex-1)*620 + 'px');
	}

	function minusSlides(n) {
		slideIndex += -1;
		$('.album').removeClass('active');
		$('#album' + slideIndex).addClass('active');
		$('.heading').removeClass('on');
		$('#heading' + slideIndex).addClass('on');
		$('.slidetrack').css('margin-left', '-' + (slideIndex-1)*620 + 'px');
	}
	
	$('.next').click(plusSlides);
	$('.previous').click(minusSlides);

});
