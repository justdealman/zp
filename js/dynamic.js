function content() {
	var h = $(window).height()-$('footer').height()-$('header').height()-$('nav').height()-$('.breadrumbs').height()-$('h1').height()-92;
	console.log(h);
	$('.content').css({
		'min-height': h+'px'
	});
}
function doctorsNav() {
	var w = ($('.doctors').width()-$('.doctors h6').width())/2;
	$('.doctors h6 a.ll span').css({
		'left': -w+'px',
		'width': w+'px'
	});
	$('.doctors h6 a.rl span').css({
		'right': -w+'px',
		'width': w+'px'
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
	if ( $('.doctors .nav').length > 0 ) {
		$('.doctors a').append('<span></span>');
		doctorsNav();
	}
});
$(window).resize(function() {
	if ( $('.content').length > 0 ) {
		content();
	}
	if ( $('.doctors .nav').length > 0 ) {
		doctorsNav();
	}
});