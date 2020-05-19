$('.mobile-js-menu').on('click', () => {
	$('.mobile-js-menu').toggleClass('active');
	$('.mobile-js-nav').toggleClass('open');
	$('.mobile-js-nav__list').toggleClass('show');
});