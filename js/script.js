 $(document).ready(function()
 {

	//Rand flying positions
	var awidth = document.body.clientWidth - 200;
	var aheight = $('#section3').height();
	var wmultiplier = Math.round(awidth / 200);
	var hmultiplier = Math.round(aheight / 200);
	$('#img1').css('left', Math.floor(((Math.random() * wmultiplier) * 200)));
	$('#img1').css('top', Math.floor(((Math.random() * hmultiplier) * 200)));
	$('#img2').css('left', Math.floor(((Math.random() * wmultiplier) * 200)));
	$('#img2').css('top', Math.floor(((Math.random() * hmultiplier) * 200)));
	$('#img3').css('left', Math.floor(((Math.random() * wmultiplier) * 200)));
	$('#img3').css('top', Math.floor(((Math.random() * hmultiplier) * 200)));
	$('#img4').css('left', Math.floor(((Math.random() * wmultiplier) * 200)));
	$('#img4').css('top', Math.floor(((Math.random() * hmultiplier) * 200)));
	$('#img5').css('left', Math.floor(((Math.random() * wmultiplier) * 200)));
	$('#img5').css('top', Math.floor(((Math.random() * hmultiplier) * 200)));
	$('#img6').css('left', Math.floor(((Math.random() * wmultiplier) * 200)));
	$('#img6').css('top', Math.floor(((Math.random() * hmultiplier) * 200)));
	$('#img7').css('left', Math.floor(((Math.random() * wmultiplier) * 200)));
	$('#img7').css('top', Math.floor(((Math.random() * hmultiplier) * 200)));

	//Smooth Scrolling Between Links
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			},1600, function(){
				window.location.hash = hash;
			});
		}
	});

	//BG On Big Displays
	if ( $(window).width() > 739) {
		var $win = $(window);
		var $bg = $('.bg');
		var $bg2 = $('.bgdarker');

		$win.on('scroll', function() {
			var top = $win.scrollTop()/-6000;
			var top1 = $win.scrollTop()/1200;
			var top2 = $win.scrollTop();
			$bg.css('transform', 'scale(' + (top + 1.3) + ')');
			$bg2.css('opacity', top1);
		});

	}

	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 200) {
    		$("header").css("background", "rgba(243, 10, 135, 1)");
    		$("header").css("box-shadow", "0 0 20px rgba(0,0,0,0.6)");
		}
		else {
	   		$("header").css("background", "rgba(0,0,0,0)");
			$("header").css("box-shadow", "0 0 0px rgba(0,0,0,0)");
		}
	});

	//******Hiding Header******
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = 90;
	// on scroll, let the interval function know the user has scrolled
	$(window).scroll(function(event){
	  didScroll = true;
	});
	// run hasScrolled() and reset didScroll status
	setInterval(function() {
	  if (didScroll) {
		hasScrolled();
		didScroll = false;
	  }
	}, 20);
	function hasScrolled() {
	  var st = $(this).scrollTop();
  
	  // Make sure they scroll more than delta
	  if(Math.abs(lastScrollTop - st) <= delta)
		  return;
  
	  // If they scrolled down and are past the navbar, add class .nav-up.
	  // This is necessary so you never see what is "behind" the navbar.
	  if (st > lastScrollTop && st > navbarHeight){
		  // Scroll Down
		  $('header').removeClass('nav-down').addClass('nav-up');
	  } else {
		  // Scroll Up
		  if(st + $(window).height() < $(document).height()) {
			  $('header').removeClass('nav-up').addClass('nav-down');
		  }
	  }
  
	  lastScrollTop = st;
	}

	//Albums
	var slideIndex = 1;
	
	function plusSlides(n) {
		slideIndex += 1;
		$('.album').removeClass('active');
		$('#album' + slideIndex).addClass('active');
		$('.heading').removeClass('on');
		$('#heading' + slideIndex).addClass('on');
		$('.slidetrack').css('margin-left', '-' + (slideIndex-1)*720 + 'px');
	}

	function minusSlides(n) {
		slideIndex += -1;
		$('.album').removeClass('active');
		$('#album' + slideIndex).addClass('active');
		$('.heading').removeClass('on');
		$('#heading' + slideIndex).addClass('on');
		$('.slidetrack').css('margin-left', '-' + (slideIndex-1)*720 + 'px');
	}
	
	$('.next').click(plusSlides);
	$('.previous').click(minusSlides);

});
