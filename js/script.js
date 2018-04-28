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

		var arrRandomNumber = [
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
		var arrRandomTemplate = [
			"col_2",
			"col_3",
			"col_6"
		];
	 	
		function shuffle(o) {
		    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		}

	 	// Randomly choose a template
		var vid = document.getElementById('LIASS');
		console.log(vid.src);

		vid.addEventListener("ended", showRelated, false);

		function showRelated() {

			var templateLIASS = arrRandomTemplate[Math.floor(Math.random() * arrRandomTemplate.length)];

			// choose a random type: 2, 3, 6
			// set the class of related_videos to correct class
			// clear contents of related_videos
			// for the number of videos that you need
			// append a div.thumbnail with an image inside
			// add video src to the data-video attribute of the image

			var relVids = document.getElementById('related_videos');
			relVids.style.visibility = 'visible'; // making it visibile
			relVids.className = templateLIASS; // setting class
			relVids.innerHTML = ""; // clearing related_videos div

			if ( relVids.className == "col_2" ) {

				var randomSrc = shuffle(arrRandomNumber);

				relVids.innerHTML = '<div id="col_2"> <div id="LIASS_' + randomSrc[0] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[0] + '.png" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[1] + '.png" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div> </div>';

				console.log ( 'this is relVids inner html ' + relVids.innerHTML);

				hideVideo();


			} else if ( relVids.className == "col_3" ) {

				var randomSrc = shuffle(arrRandomNumber);
				
				relVids.innerHTML = '<div id="col_3"> <div id="LIASS_' + randomSrc[0] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[0] + '.png" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[1] + '.png" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div><div id="LIASS_' + randomSrc[2] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[2] + '.png" data-video="videos/LIASS_' + randomSrc[2] + '.mp4"></div> </div>';

				hideVideo();

			} else if (relVids.className == "col_6" ) {

				var randomSrc = shuffle(arrRandomNumber);
				
				relVids.innerHTML = '<div id="col_3"> <div id="LIASS_' + randomSrc[0] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[0] + '.png" data-video="videos/LIASS_' + randomSrc[0] + '.mp4"></div><div id="LIASS_' + randomSrc[1] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[1] + '.png" data-video="videos/LIASS_' + randomSrc[1] + '.mp4"></div><div id="LIASS_' + randomSrc[2] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[2] + '.png" data-video="videos/LIASS_' + randomSrc[2] + '.mp4"></div><div id="LIASS_' + randomSrc[3] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[3] + '.png" data-video="videos/LIASS_' + randomSrc[3] + '.mp4"></div><div id="LIASS_' + randomSrc[4] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[4] + '.png" data-video="videos/LIASS_' + randomSrc[4] + '.mp4"></div><div id="LIASS_' + randomSrc[5] + '" class="thumbnail"><img src="images/LIASS_PIC_' + randomSrc[5] + '.png" data-video="videos/LIASS_' + randomSrc[5] + '.mp4"></div> </div>';

				hideVideo();

			} else {

				relVids.innerHTML ='boo';

			}

				// 6. HIDING RELATED
				// when an image inside of related_videos is clicked
				// hide related_videos

				function hideVideo(){

					var videosToHide = document.getElementById('related_videos');
					
					videosToHide.addEventListener('click', function(event) {

						videosToHide.style.visibility = "hidden";

					}, false);
						
				}

					function showingNewVideo() {

						relVids.addEventListener('click', function(event) {

							var target = event.target;
							console.log(target);

							var source = target.dataset.video;
							console.log(source);
							vid.src = source;

						}, true);

						// grab the src from image that was clicked from the data-video attribute
						// set the src of the #LIASS to new source
						// trigger play
						
					}

					showingNewVideo();


		} // end big event listener


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
			// what is the diffence between true and false?

		}

		timesWatched();



}); // end page load


// console.log ("great job team!")
console.log ("show me the ZUUUUUCC")
