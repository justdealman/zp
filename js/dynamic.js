$(document).ready(function() {
	if ( $('.slider').length > 0 ) {
		$('.slider .core > div > div').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'fade',
			fadeSpeed: 200,
			play: 10000,
			pause: 2500,
		});
	}
});