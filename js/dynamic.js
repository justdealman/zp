function content() {
	var h = $(window).height()-$('footer').height()-$('header').height()-$('nav').height()-$('.breadrumbs').height()-$('h1').height()-92;
	console.log(h);
	$('.content').css({
		'min-height': h+'px'
	});
}
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
	if ( $('.content').length > 0 ) {
		content();
	}
});
$(window).resize(function() {
	if ( $('.content').length > 0 ) {
		content();
	}
});