	
		var sliderPos=1;
		var liveDist=0;
		var magic=0;
		var sliderWidth = $('.RATTslider').width();
		var containerWidth = $('.RATTcontainer').width();
		var theEnd = 'start';
		var sliderTime=500;
		
		/* this is a window resize function that waits until the window resizing is complete to fire */
		var waitForFinalEvent = (function () {
			var timers = {};
			return function (callback, ms, uniqueId) {
				if (!uniqueId) {
				  uniqueId = "Don't call this twice without a uniqueId";
				}
				if (timers[uniqueId]) {
				  clearTimeout (timers[uniqueId]);
				}
				timers[uniqueId] = setTimeout(callback, ms);
			};
		})();
		
		function ratt(time) {sliderTime = time;}
		
		$(window).resize(function() {		
			containerWidth = $('.RATTcontainer').width();
			
			waitForFinalEvent(function(){
				var toTheRight = sliderWidth-containerWidth;
				var tooMutWidth = liveDist + containerWidth;
				if (tooMutWidth > sliderWidth || theEnd == 'yes') {
					$('.RATTslider').animate({
						marginLeft: -toTheRight
					}, sliderTime, function() {
						// run after complete
						$('.RATTnavright').hide();
					});
				}
			}, 500, "some unique string");
		});
		
		/* this is for debugging */
		function showStats() {
				$('.sliderwidthclass').html(sliderWidth);
				$('.containerwidthclass').html(containerWidth);
				$('.negativewidthclass').html(negativeWidth);
				$('.sliderposclass').html(sliderPos);
				$('.livedistclass').html(liveDist);
				$('.movedistclass').html(moveDist);
				$('.magicclass').html(magic);
		}
		
		/* clicking "right" */
		$('.RATTnavright').click(function () {
			moveDist = $('.RATTitem'+sliderPos).width();
			magic = liveDist;
			liveDist = liveDist+moveDist;
			negativeWidth=sliderWidth-containerWidth;
			if (liveDist > negativeWidth) { liveDist = negativeWidth; $('.RATTnavright').hide();theEnd='yes'; }
			sliderPos++;
			$('.RATTslider').animate({
				marginLeft: -liveDist
			}, sliderTime, function() {
				// run after complete
				$('.RATTnavleft').show();
				showStats();
			});
		});
		
		/* clicking "left" */
		$('.RATTnavleft').click(function () {
			theEnd='no';
			prevSliderPos = sliderPos-1;
			moveDist = $('.RATTitem'+prevSliderPos).width();
			if (liveDist == negativeWidth) { 
				liveDist=magic;  
			} else { 
				liveDist = liveDist-moveDist;
			}
			sliderPos--;
			$('.RATTslider').animate({
				marginLeft: -liveDist
			}, sliderTime, function() {
				// run after complete
				$('.RATTnavright').show();
				if (sliderPos==1) { $('.RATTnavleft').hide(); }
				showStats();
			});
		});