$(document).ready(function(){
	function viewportResize(device) {
		$('#stylebar-site-container').removeClass().addClass('stylebar-' + device);
	}

	$('.stylebar-viewport-container a').click(function(event){
		event.preventDefault();
	});

	$('.stylebar-emulate-mobile').click(function(){
		viewportResize('mobile');
	});
	$('.stylebar-emulate-tablet').click(function(){
		viewportResize('tablet');
	});
	$('.stylebar-emulate-desktop').click(function(){
		viewportResize('desktop');
	});
});
