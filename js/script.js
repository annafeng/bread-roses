$(window).on('load', function() {

	setTimeout(function() {

		// after 2s, show video
		// in the meantime, show card
		setTimeout(function() {
			$('.title-card').fadeOut()
		}, 0)


			$('.player').show();

	}, 2000);

});