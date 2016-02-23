$(document).ready(function(){
	/***********************
		Viewport Resizer 
	***********************/

	// Get url and document height
	var url = window.location,
		height = $(document).height() - 92;

	// Parse all query string vars
	function getQueryVariable(variable)
	{
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	}

	// Is design responsive?
	var responsive = getQueryVariable('responsive');

	// If design is not in an iframe, show the bar
	if (url == window.parent.location) 
	{
		$('.stylebar-wrapper').show();

		// If design is responsive 
		if (responsive == 'true')
		{
			// Show the bar on the parent but not the iframe,
			// Wrap the contents in an iframe,
			$('.stylebar-wrapper').nextAll().wrapAll('<div id="stylebar-site-container"><iframe id="stylebar-site" src="' + url + '?iframe" style="height: ' + height + 'px"></iframe></div>');
			// Show the device icons
			$('.stylebar-viewport-container').addClass('stylebar-resp');
			// Set the viewport meta
			$('#stylebar-viewport-meta').attr('content', 'width=device-width, initial-scale=1.0');			
		}
	}

	// Set the height of the iframe to the height of the content
	$('#stylebar-site-container').height(height);

	// Resize to selected device
	function viewportResize(device) 
	{
		$('#stylebar-site-container').removeClass().addClass('stylebar-' + device);
	}

	// Assign the device click events and active states
	$('.stylebar-viewport-container a').click(function(event)
	{
		event.preventDefault();
		var device = $(this).attr('class').substring(17);
		viewportResize(device);

		if (device == 'desktop') {
			$('#stylebar-site').height(height);
		}

		$('.stylebar-active-device').removeClass('stylebar-active-device');

		$(this).addClass('stylebar-active-device');
	});


	/*******************
		Tooltips
	*******************/

	$('.stylebar-hasTooltip').hover(function()
	{
	        // Hover over code
	        var title = $(this).attr('title');
	        $(this).data('tipText', title).removeAttr('title');
	        $('<p class="stylebar-tooltip"></p>')
	        .text(title)
	        .appendTo('body')
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
