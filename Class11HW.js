
$(function() {


	$('#victorino').on('click', function(e) {

		e.preventDefault();

		$('#victorinoBig, #modalBG').fadeIn();
		

	});


	$('#pedroia').on('click', function(e) {

		e.preventDefault();

		$('#pedroiaBig, #modalBG').fadeIn();
		

	});

	$('#ortiz').on('click', function(e) {

		e.preventDefault();

		$('#ortizBig, #modalBG').fadeIn();
		

	});


	$('#napoli').on('click', function(e) {

		e.preventDefault();

		$('#napoliBig, #modalBG').fadeIn();
		

	});



	$('#modalBG').on('click', function(e) {

		e.preventDefault();

		$('#victorinoBig, #pedroiaBig, #ortizBig, #napoliBig, #modalBG').fadeOut();



	});

});