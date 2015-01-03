$(document).ready(function() {

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

	$('.ryu').mousedown(function() {
		playHadouken();
	    $('.ryu-still').hide();
		$('.ryu-ready').hide();
	    $('.ryu-throwing').show()
	    $('.hadouken').finish().show()


	    .animate(
	    	{'left': '300px'},
	    	500,
	    	function() {
	        	$(this).hide();
	        	$(this).css('left', '-212px');
	    	}
	    );
	})

	$('.ryu').mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('#ryu-cool').hide();
  		$('.ryu-ready').show();
	})

	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

	function playcool () {
		$('#cool')[0].volume = 0.5;
		$('#cool')[0].play();
	}

	function stopcool () {
		$('#cool')[0].pause();
		$('#cool')[0].load();
	}

	$(document).keydown(function (e) {
		console.log('x Pressed');
	
		if(e.keyCode ==88){
			playcool();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('#ryu-cool').show();
			console.log('Key: button down');
		}
		
	});
	
	$(document).keyup(function (e) {
		console.log('x Pressed');
		
		if(e.keyCode ==88){
			stopcool();
			$('#ryu-cool').hide();
			$('.ryu-still').show();
			console.log('Key: button up');
		}
		
	});

	
	function doIntro() {
	  $('#theme')[0].volume = 0.3;
	  $('#theme')[0].play();
	  $('.sf-logo').fadeIn(3500, function() {
	    $(this).fadeOut(1000, function() {
	      $('.brought-by').fadeIn(1500, function() {
	        $(this).fadeOut(1000, function() {
	          $('.jquery-logo').fadeIn(1500, function() {
	            $(this).fadeOut(1500, function() {
	              $('.how-to').fadeIn(1000);
	            });
	          })
	        })
	      })
	    })
	  })
	}

	doIntro();


















})