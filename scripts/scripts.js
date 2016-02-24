$jq1(document).ready(function(){
	/***********************
		Viewport Resizer 
	***********************/

	// Get url and document height
	var url = window.location,
		height = $jq1(document).height() - 90;

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
		// Show the bar on the parent but not the iframe
		$jq1('.stylebar-wrapper').show();

		// If design is responsive 
		if (responsive == 'true')
		{
			// Wrap the contents in an iframe,
			$jq1('.stylebar-wrapper').nextAll().wrapAll('<div id="stylebar-site-container" class="stylebar-desktop"><iframe id="stylebar-site" src="' + url + '?iframe=true" style="height: ' + height + 'px"></iframe></div>');
			// Set the height of the iframe to the height of the content
			$jq1('#stylebar-site-container').height(height);
			// Show the device icons
			$jq1('.stylebar-viewport-container').addClass('stylebar-resp');
			// Set the viewport meta
			$jq1('#stylebar-viewport-meta').attr('content', 'width=device-width, initial-scale=1.0');			
		}
	}
	// If not in iframe, don't identify as iframe
	else 
	{
		$('body').addClass('stylebar-iframe');
	}

	// Resize to selected device
	function viewportResize(device) 
	{
		$jq1('#stylebar-site-container').removeClass().addClass('stylebar-' + device);
	}

	// Assign the device click events and active states
	$jq1('.stylebar-viewport-container a').click(function(event)
	{
		event.preventDefault();
		var device = $jq1(this).attr('class').substring(17);
		viewportResize(device);

		if (device == 'desktop') {
			$jq1('#stylebar-site').height(height);
		}

		$jq1('.stylebar-active-device').removeClass('stylebar-active-device');

		$jq1(this).addClass('stylebar-active-device');
	});


	/*******************
		Tooltips
	*******************/

	$jq1('.stylebar-hasTooltip').hover(function(event)
	{
		event.stopPropagation();
        // Hover over code
        var title = $jq1(this).attr('title');
        $jq1(this).data('tipText', title).removeAttr('title');
        $jq1('<p class="stylebar-tooltip"></p>')
        .text(title)
        .appendTo('.stylebar-wrapper')
        .fadeIn('slow');
	}, function() 
	{
        // Hover out code
        $jq1(this).attr('title', $jq1(this).data('tipText'));
        $jq1('.stylebar-tooltip').remove();
	}).mousemove(function(e) 
	{
        var mousex = e.pageX; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $jq1('.stylebar-tooltip')
        .css({ top: mousey, left: mousex })
	});
});
