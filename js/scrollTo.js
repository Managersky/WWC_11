jQuery(function ($) {
				//reset scroll
				$.scrollTo(0);
				//scroll To - header menu
				$('#itemHome').click(function () { $.scrollTo($('.planner-section'), 500); });
				$('#itemDestination').click(function () { $.scrollTo($('.gallery-section'), 500); });
				$('#itemIttinary').click(function () { $.scrollTo($('.planner-section'), 500); });
				$('#itemReview').click(function () { $.scrollTo($('.contact-section'), 500); });
				$('#itemContact').click(function () { $.scrollTo($('.contact-section'), 500); });
				//scroll to - CTA button
				$('#cta-btn').click(function () { $.scrollTo($('.planner-section'), 500); });
			}
);