$(window).on('load', function() {


	// 1. TITLE CARD
	setTimeout(function() {
		$('.title_card').fadeOut()
	}, 2000)


	// setTimeout(function() {

	// 	// after 2s, show video
	// 	// in the meantime, show card
	// 	setTimeout(function() {
	// 		$('.title_card').fadeOut()
	// 	}, 2000)


	// 	// $('.player').show();

	// }, 0);


		// related videos

		var vid = document.getElementById('LIASS');

		vid.addEventListener("ended", showRelated, false);

		function showRelated() {
			var vid = document.getElementById('LIASS');
			var more = document.getElementById('related_videos');
			vid.removeEventListener("ended", showRelated, false);
			// vid.style.display = 'hidden';
			more.style.display = 'block';
		}


		// clicking on a thumbnail > changes src > hides thumbnails > shows video

		$('#LIASS_02').click(function() {
			$('#LIASS').attr('src','videos/LIASS_02.mp4').get(0).play();
			$('#related_videos').hide();
			$('#LIASS').show();
		});

		$('#LIASS_03').click(function() {
			$('#LIASS').attr('src','videos/LIASS_03.mp4').get(0).play();
			$('#related_videos').hide();
			$('#LIASS').show();
		});

		$('#LIASS_04').click(function() {
			$('#LIASS').attr('src','videos/LIASS_04.mp4').get(0).play();
			$('#related_videos').hide();
			$('#LIASS').show();
		});

		$('#LIASS_05').click(function() {
			$('#LIASS').attr('src','videos/LIASS_05.mp4').get(0).play();
			$('#related_videos').hide();
			$('#LIASS').show();
		});

		$('#LIASS_06').click(function() {
			$('#LIASS').attr('src','videos/LIASS_06.mp4').get(0).play();
			$('#related_videos').hide();
			$('#LIASS').show();
		});

		$('#LIASS_07').click(function() {
			$('#LIASS').attr('src','videos/LIASS_07.mp4').get(0).play();
			$('#related_videos').hide();
			$('#LIASS').show();
		});


		// display related videos again

		document.getElementById('LIASS').addEventListener('ended',function(){
			console.log(' video ended ');
			$('#related_videos').show();
		}, false);



});









