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
			vid.style.display = 'hidden';
			more.style.display = 'block';
		}


		$('#LIASS_02').click(function() {
			$('#LIASS').attr('src','videos/LIASS_02.mp4').get(0).play();
			$('#up_next').hide();
			$('#LIASS').show();
		});

		$('#LIASS_03').click(function() {
			$('#LIASS').attr('src','videos/LIASS_03.mp4').get(0).play();
			$('#up_next').hide();
			$('#LIASS').show();
		});

		$('#LIASS_04').click(function() {
			$('#LIASS').attr('src','videos/LIASS_04.mp4').get(0).play();
			$('#up_next').hide();
			$('#LIASS').show();
		});

		$('#LIASS_05').click(function() {
			$('#LIASS').attr('src','videos/LIASS_05.mp4').get(0).play();
			$('#up_next').hide();
			$('#LIASS').show();
		});

		$('#LIASS_06').click(function() {
			$('#LIASS').attr('src','videos/LIASS_06.mp4').get(0).play();
			$('#up_next').hide();
			$('#LIASS').show();
		});

		$('#LIASS_07').click(function() {
			$('#LIASS').attr('src','videos/LIASS_07.mp4').get(0).play();
			$('#up_next').hide();
			$('#LIASS').show();
		});
		

		document.getElementById('LIASS').addEventListener('ended',function(){
			console.log(' video ended ');
			$('#up_next').show();
		}, false);

});




