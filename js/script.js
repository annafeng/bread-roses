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

		// VIDEOS
		var relatedVideos = [
			"videos/LIASS_01.mp4",
			"videos/LIASS_02.mp4",
			"videos/LIASS_03.mp4",
			"videos/LIASS_04.mp4",
			"videos/LIASS_05.mp4",
			"videos/LIASS_06.mp4",
			"videos/LIASS_07.mp4",
			// "videos/LIASS_08.mp4",
			// "videos/LIASS_09.mp4",
			// "videos/LIASS_10.mp4",
			// "videos/LIASS_11.mp4",
			// "videos/LIASS_12.mp4",
			// "videos/LIASS_13.mp4",
			// "videos/LIASS_14.mp4",
			// "videos/LIASS_15.mp4",
			// "videos/LIASS_16.mp4",
			// "videos/LIASS_17.mp4",
			// "videos/LIASS_18.mp4",
			// "videos/LIASS_19.mp4",
			// "videos/LIASS_20.mp4",
			// "videos/LIASS_21.mp4",
			// "videos/LIASS_22.mp4",
			// "videos/LIASS_23.mp4",
			// "videos/LIASS_24.mp4",
			// "videos/LIASS_25.mp4",
			// "videos/LIASS_26.mp4",
			// "videos/LIASS_27.mp4",
			// "videos/LIASS_28.mp4",
			// "videos/LIASS_29.mp4",
			// "videos/LIASS_30.mp4",
		];

		// THUMBNAILS
		var relatedThumbnails = [
			"images/LIASS_PIC_01.png",
			"images/LIASS_PIC_02.png",
			"images/LIASS_PIC_03.png",
			"images/LIASS_PIC_04.png",
			"images/LIASS_PIC_05.png",
			"images/LIASS_PIC_06.png",
			"images/LIASS_PIC_07.png",
			// "images/LIASS_PIC_08.png",
			// "images/LIASS_PIC_09.png",
			// "images/LIASS_PIC_10.png",
			// "images/LIASS_PIC_11.png",
			// "images/LIASS_PIC_12.png",
			// "images/LIASS_PIC_13.png",
			// "images/LIASS_PIC_14.png",
			// "images/LIASS_PIC_15.png",
			// "images/LIASS_PIC_16.png",
			// "images/LIASS_PIC_17.png",
			// "images/LIASS_PIC_18.png",
			// "images/LIASS_PIC_19.png",
			// "images/LIASS_PIC_20.png",
			// "images/LIASS_PIC_21.png",
			// "images/LIASS_PIC_22.png",
			// "images/LIASS_PIC_23.png",
			// "images/LIASS_PIC_24.png",
			// "images/LIASS_PIC_25.png",
			// "images/LIASS_PIC_26.png",
			// "images/LIASS_PIC_27.png",
			// "images/LIASS_PIC_28.png",
			// "images/LIASS_PIC_29.png",
			// "images/LIASS_PIC_30.png",
		];

		var getRandomNumber = [
			"01",
			"02",
			"03",
			"04",
			"05",
			"06",
			"07",
			// "08",
			// "09",
			// "10",
			// "11",
			// "12",
			// "13",
			// "14",
			// "15",
			// "16",
			// "17",
			// "18",
			// "19",
			// "20",
			// "21",
			// "22",
			// "23",
			// "24",
			// "25",
			// "26",
			// "27",
			// "28",
			// "29",
			// "30"
		];

		// TEMPLATES
		var randomTemplate = [
			"col_2",
			"col_3",
			"col_6"
		];


		// RANDOM NUMBERS
		var videoLIASS = relatedVideos[Math.floor(Math.random() * relatedVideos.length)];
		var thumbLIASS = relatedThumbnails[Math.floor(Math.random() * relatedThumbnails.length)];
		var templateLIASS = randomTemplate[Math.floor(Math.random() * randomTemplate.length)];
		var randomSrc = getRandomNumber[Math.floor(Math.random() * getRandomNumber.length)];


	 	
	 	// Randomly choose a template
		var vid = document.getElementById('LIASS');

		vid.addEventListener("ended", showRelated, false);

		function showRelated() {

			// choose a random type: 2, 3, 6
			// set the class of related_videos to correct class
			// clear contents of related_videos
			// for the number of videos that you need
			// append a div.thumbnail with an image inside
			// add video src to the data-video attribute of the image

			// i need to choose a random template,
			// then make corresponding amount of divs
			// then put random imgs in each div
				// and assign corresponding video source to the img

			var vid = document.getElementById('LIASS');
			var relVids = document.getElementById('related_videos');
			relVids.style.visibility = 'visible'; // making it visibile
			relVids.className = templateLIASS; // setting class
			// relVids.className = "col_2";
			relVids.innerHTML = ""; // clearing related_videos div
			// var randomSrc = getRandomNumber[Math.floor(Math.random() * getRandomNumber.length)];

				function shuffle(o) {
				    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
				    return o;
				}

				var randomSrc = shuffle(getRandomNumber);


			console.log( templateLIASS );
			console.log ( relVids.className );
			console.log ( relVids.innerHTML );

			console.log( randomSrc );


			if ( relVids.className == "col_2" ) {

				relVids.innerHTML = '<div id="col_2"> <div id="LIASS_' + randomSrc[0] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[0] + '.png" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[1] + '.png" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div> </div>';

				console.log (relVids.innerHTML);
				console.log ( randomSrc );


			} else if ( relVids.className == "col_3" ) {
				
				relVids.innerHTML = '<div id="col_3"> <div id="LIASS_' + randomSrc[0] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[0] + '.png" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[1] + '.png" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div><div id="LIASS_' + randomSrc[2] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[2] + '.png" data-video="videos/LIASS_' + randomSrc[2] + '.mp4"></div> </div>';

			} else if (relVids.ClassName == "col_6" ) {
				
				relVids.innerHTML = '<div id="col_3"> <div id="LIASS_' + randomSrc[0] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[0] + '.png" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[1] + '.png" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div><div id="LIASS_' + randomSrc[2] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[2] + '.png" data-video="videos/LIASS_' + randomSrc[2] + '.mp4"></div><div id="LIASS_' + randomSrc[3] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[3] + '.png" data-video="videos/LIASS_' + randomSrc[3] + '.mp4"></div><div id="LIASS_' + randomSrc[4] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[4] + '.png" data-video="videos/LIASS_' + randomSrc[4] + '.mp4"></div><div id="LIASS_' + randomSrc[5] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[5] + '.png" data-video="videos/LIASS_' + randomSrc[5] + '.mp4"></div> </div>';


			} else {

				relVids.innerHTML ='boo';


			}

		}


		// UP NEXT (going to next page)
		// After 5 videos, display up next

		// Make a counter
		// 0 when page loads, watched videos = 0
		// Every time someone clicks a video, increment the counter
		// If counter hits 5, show up next
		

		function timesWatched() {

			var watchCount = 0;
			var vid = document.getElementById('LIASS');

			vid.addEventListener("ended", function() {

				watchCount++;

			    if (watchCount > 5 ) {	
			    	window.location.href = "one-year-performance.html";
			    }
			}, true);
			// what is the diff between true and false?

		}

		timesWatched();


		function hideRelated() {

			var vid = document.getElementById('LIASS');
			var relVids = document.getElementById('related_videos');

			vid.addEventListener("playing", function() {

				relVids.style.visibility = 'hidden';
				// watchCount++;

			    // if (watchCount > 5 ) {	
			    	// window.location.href = "one-year-performance.html";
			    
			});
			// what is the diff between true and false?

		}

		hideRelated();

		
		

		// when an image inside of related_videos is clicked
		// hide related_videos
		// grab the src from image that was clicked from the data-video attribute
		// set the src of the #LIASS to new source
		// trigger play










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



}); // end page load



