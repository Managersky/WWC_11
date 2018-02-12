jQuery(function ($) {
				//reset scroll
				$.scrollTo(0);
				//scroll To - header menu
				$('#itemHome').click(function () { $.scrollTo($('.body'), 500); });
				$('#itemDestination').click(function () { $.scrollTo($('.gallery-section'), 500); });
				$('#itemIttinary').click(function () { $.scrollTo($('.planner-section'), 500); });
				$('#itemReview').click(function () { $.scrollTo($('.contact-section'), 500); });
				$('#itemContact').click(function () { $.scrollTo($('.contact-section'), 500); });
				//scroll to - CTA button
				$('#cta-btn').click(function () { $.scrollTo($('.planner-section'), 500); });
				//scroll to - Top
				$('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
			}
);

// The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation
//before the next repaint. The method takes a callback as an argument to be invoked before the repaint.

window.requestAnimFrame = (function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); };
})();

let width = screen.width;

	checkScreenSize = function () {
		if (screen.width > 768) {
			width = screen.width;
			$(window).trigger('resolutionchange');
		}
		else {
			$('.scrollup').hide();
		}
	};

(function loop() {
	requestAnimFrame(loop);
	checkScreenSize();
})();

$(window).bind('resolutionchange', function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1300) {
			$('.scrollup').fadeIn();
		}
		else {
			$('.scrollup').fadeOut();
		}
	});
});

