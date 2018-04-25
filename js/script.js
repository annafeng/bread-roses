$(window).on('load', function() {

	// A. TITLE CARD
	// 1. Show title card
	// 2. Fade out after 2 seconds
	setTimeout(function() {
		$('.title_card').fadeOut()
	}, 2000)


		// B. RELATED VIDEOS
		// 3. Put all videos and corresponding thumbnails in an array
		// 4. Put templates in an array
		// 5. On videoEnded, randomly choose between the 3 templates
		// 6. From the array, pull out videos and thumbnails and inject them into the corresponding box in the template

		// Video array
		var relatedVideos = [
			"videos/LIASS_01.mp4",
			"videos/LIASS_02.mp4",
			"videos/LIASS_03.mp4",
			"videos/LIASS_04.mp4",
			"videos/LIASS_05.mp4",
			"videos/LIASS_06.mp4",
			"videos/LIASS_07.mp4",
			"videos/LIASS_08.mp4",
			"videos/LIASS_09.mp4",
			"videos/LIASS_10.mp4",
			"videos/LIASS_11.mp4",
			"videos/LIASS_12.mp4",
			"videos/LIASS_13.mp4",
			"videos/LIASS_14.mp4",
			"videos/LIASS_15.mp4",
			"videos/LIASS_16.mp4",
			"videos/LIASS_17.mp4",
			"videos/LIASS_18.mp4",
			"videos/LIASS_19.mp4",
			"videos/LIASS_20.mp4",
			"videos/LIASS_21.mp4",
			"videos/LIASS_22.mp4",
			"videos/LIASS_23.mp4",
			"videos/LIASS_24.mp4",
			"videos/LIASS_25.mp4",
			"videos/LIASS_26.mp4",
			"videos/LIASS_27.mp4",
			"videos/LIASS_28.mp4",
			"videos/LIASS_29.mp4",
			"videos/LIASS_30.mp4",
		];

		// Thumbnail array
		var relatedThumbnails = [
			"videos/LIASS_PIC_01.jpg",
			"videos/LIASS_PIC_02.jpg",
			"videos/LIASS_PIC_03.jpg",
			"videos/LIASS_PIC_04.jpg",
			"videos/LIASS_PIC_05.jpg",
			"videos/LIASS_PIC_06.jpg",
			"videos/LIASS_PIC_07.jpg",
			"videos/LIASS_PIC_08.jpg",
			"videos/LIASS_PIC_09.jpg",
			"videos/LIASS_PIC_10.jpg",
			"videos/LIASS_PIC_11.jpg",
			"videos/LIASS_PIC_12.jpg",
			"videos/LIASS_PIC_13.jpg",
			"videos/LIASS_PIC_14.jpg",
			"videos/LIASS_PIC_15.jpg",
			"videos/LIASS_PIC_16.jpg",
			"videos/LIASS_PIC_17.jpg",
			"videos/LIASS_PIC_18.jpg",
			"videos/LIASS_PIC_19.jpg",
			"videos/LIASS_PIC_20.jpg",
			"videos/LIASS_PIC_21.jpg",
			"videos/LIASS_PIC_22.jpg",
			"videos/LIASS_PIC_23.jpg",
			"videos/LIASS_PIC_24.jpg",
			"videos/LIASS_PIC_25.jpg",
			"videos/LIASS_PIC_26.jpg",
			"videos/LIASS_PIC_27.jpg",
			"videos/LIASS_PIC_28.jpg",
			"videos/LIASS_PIC_29.jpg",
			"videos/LIASS_PIC_30.jpg",
		];

		// Template array
		var randomTemplate = [
			"col_2",
			"col_3",
			"col_6",
		];

		var videoLIASS = relatedVideos[Math.floor(Math.random() * relatedVideos.length)];

		var thumbLIASS = relatedThumbnails[Math.floor(Math.random() * relatedThumbnails.length)];

		var templateLIASS = randomTemplate[Math.floor(Math.random() * randomTemplate.length)];


	    // Select related videos container
	    // var selectedTemplate = $('#related_videos');
	    
	    // // Loop through all a-tags and apply color randomly
	    // $.each( links, function(key, value) {
	    //     // get random value/class-name from array and add it using the addClass function
	    //     console.log ("IN");
	    //     $(value).addClass( classes[ Math.floor ( Math.random() * length ) ] );
	    // });
















	 // 	// OLD RELATED VIDEOS CODE
	 	
		// var vid = document.getElementById('LIASS');

		// vid.addEventListener("ended", showRelated, false);

		// function showRelated() {
		// 	var vid = document.getElementById('LIASS');
		// 	var more = document.getElementsByClassName('col_3');
		// 	vid.removeEventListener("ended", showRelated, false);
		// 	// vid.style.display = 'hidden';
		// 	more.style.display = 'block';
		// }


		// // clicking on a thumbnail > changes src > hides thumbnails > shows video

		// $('#LIASS_02').click(function() {
		// 	$('#LIASS').attr('src','videos/LIASS_02.mp4').get(0).play();
		// 	$('.col_3').hide();
		// 	$('#LIASS').show();
		// });

		// $('#LIASS_03').click(function() {
		// 	$('#LIASS').attr('src','videos/LIASS_03.mp4').get(0).play();
		// 	$('.col_3').hide();
		// 	$('#LIASS').show();
		// });

		// $('#LIASS_04').click(function() {
		// 	$('#LIASS').attr('src','videos/LIASS_04.mp4').get(0).play();
		// 	$('.col_3').hide();
		// 	$('#LIASS').show();
		// });

		// $('#LIASS_05').click(function() {
		// 	$('#LIASS').attr('src','videos/LIASS_05.mp4').get(0).play();
		// 	$('.col_3').hide();
		// 	$('#LIASS').show();
		// });

		// $('#LIASS_06').click(function() {
		// 	$('#LIASS').attr('src','videos/LIASS_06.mp4').get(0).play();
		// 	$('.col_3').hide();
		// 	$('#LIASS').show();
		// });

		// $('#LIASS_07').click(function() {
		// 	$('#LIASS').attr('src','videos/LIASS_07.mp4').get(0).play();
		// 	$('.col_3').hide();
		// 	$('#LIASS').show();
		// });


		// // display related videos again

		// document.getElementById('LIASS').addEventListener('ended',function(){
		// 	console.log(' video ended ');
		// 	$('.col_3').show();
		// }, false);



});



