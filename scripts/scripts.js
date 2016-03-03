$(document).ready(function(){
	/***********************
		Viewport Resizer 
	***********************/

	// Get viewport height
	var height = window.innerHeight - 60;

	$('#stylebar-site-container').height(height);

	// Resize to selected device
	function viewportResize(device) 
	{
		// Resize the iframe to the selected device dimensions
		$('#stylebar-site-container').removeClass().addClass('stylebar-' + device);
		// Make appropriate adjustements to body overflow
		$('#stylebar-site-container').removeClass().addClass('stylebar-resp stylebar-' + device);
	}

	// Assign the device click events and active states
	$('.stylebar-viewport-container a').click(function(event)
	{
		event.preventDefault();

		// Get the device name from the clicked icon class
		var device = $(this).attr('class').substring(17);

		// Resize the iframe to the device dimensions
		viewportResize(device);

		// Set the iframe to the height of the viewport
		if (device == 'desktop') {
			$('#stylebar-site').height(height);
		}

		// Assign the active state to the correct device icon
		$('.stylebar-active-device').removeClass('stylebar-active-device');
		$(this).addClass('stylebar-active-device');
	});


	/*******************
		Tooltips
	*******************/

	$('.stylebar-hasTooltip').hover(function(event)
	{
		event.stopPropagation();
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="stylebar-tooltip"></p>')
        .text(title)
        .appendTo('.stylebar-wrapper')
        .fadeIn('slow');
	}, function() 
	{
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.stylebar-tooltip').remove();
	}).mousemove(function(e) 
	{
        var mousex = e.pageX; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.stylebar-tooltip')
        .css({ top: mousey, left: mousex })
	});
});