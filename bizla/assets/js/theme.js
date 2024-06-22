(function($){
	"use-strict";
	
	// Venobox
	$(document).ready(function(){
		$('.venobox').venobox(); 
	});
	
	$('.testimonial_carousel').owlCarousel({
		loop: true,
		autoplay: false,
		autoplayTimeout: 10000,
		dots: false,
		dotsEach: false,
		lazyLoad:true,
		smartSpeed: 1000,
		margin:20,
		nav:false,
		navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1000: {
				items: 2
			},
			1199: {
				items: 2
			},
			1920: {
				items: 2
			}
		}
	});
	
	// Counterup
    $('.counter').counterUp({
        delay: 100,
        time: 10000
    });
	
})(jQuery);