$(window).on('load', function() {


	// TITLE CARD
	setTimeout(function() {

		// after 2s, show video
		// in the meantime, show card
		setTimeout(function() {
			$('.title_card').fadeOut()
		}, 0)


			$('.player').show();

	}, 2000);


		// MORE VIDEOS
		var vid = document.getElementById('LIASS');

		vid.addEventListener("ended", hideVideo, false);

		function hideVideo() {
			var vid = document.getElementById('LIASS');
			var more = document.getElementById('up_next');
			vid.removeEventListener("ended", hideVideo, false);
			vid.style.display = 'none';
			more.style.display = 'block';
		}


		$('#LIASS_02').click(function() {
			$('#LIASS').attr('src','videos/LIASS_02.mp4');
			$('#LIASS').get(0).play();
			$('#up_next').hide();
			$('#LIASS').show();
		});

});




