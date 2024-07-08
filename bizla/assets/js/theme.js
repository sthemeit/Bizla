(function($){
	"use-strict";


// Counterup
$('.counter').counterUp({
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
	
	
//Header Search
if($('.search-box-outer').length) {
	$('.search-box-outer').on('click', function() {
		$('body').addClass('search-active');
	});
	$('.close-search').on('click', function() {
		$('body').removeClass('search-active');
	});}

// Offcanvas Bar

jQuery,
    jQuery(document).ready(function (o) {
        0 < o(".offset-side-bar").length &&
            o(".offset-side-bar").on("click", function (e) {
                e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
            }),
            0 < o(".close").length &&
                o(".close").on("click", function (e) {
                    e.preventDefault(), o(".cart-group").removeClass("isActive");
                }),
            0 < o(".navSidebar-button").length &&
                o(".navSidebar-button").on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
                }),
            0 < o(".close").length &&
                o(".close").on("click", function (e) {
                    e.preventDefault(), o(".info-group").removeClass("isActive");
                }),
            o("body").on("click", function (e) {
                o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
            }),
            o(".dt-sidebar-widget").on("click", function (e) {
                e.stopPropagation();
            }),
            0 < o(".xs-modal-popup").length &&
                o(".xs-modal-popup").magnificPopup({
                    type: "inline",
                    fixedContentPos: !1,
                    fixedBgPos: !0,
                    overflowX: "auto",
                    closeBtnInside: !1,
                    callbacks: {
                        beforeOpen: function () {
                            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                        },
                    },
                });
    });

// Mobile Menu
$('.mobile-menu nav').meanmenu({
	meanScreenWidth: "1200",
	meanMenuContainer: ".mobile-menu",
	onePage: false,
});

new VenoBox();


})(jQuery);