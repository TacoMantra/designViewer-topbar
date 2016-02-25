$jq1(document).ready(function(){
	/***********************
		Viewport Resizer 
	***********************/

	// Get url and viewport height
	var url = window.location,
		height = window.innerHeight - 60;

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

	// If design is not in an iframe
	if (url == window.parent.location) 
	{
		// Show the bar on the parent but not the iframe
		$jq1('.stylebar-wrapper').show();

		// If design is responsive 
		if (responsive == 'true')
		{
			// Wrap the contents in an iframe
			$jq1('.stylebar-wrapper').nextAll().wrapAll('<div id="stylebar-site-container" class="stylebar-desktop"><iframe id="stylebar-site" src="' + url + '?iframe=true" style="height: ' + height + 'px"></iframe></div>');
			// Set the height of the iframe to the height of the content
			$jq1('#stylebar-site-container').height(height);
			// Show the device icons
			$jq1('body').addClass('stylebar-resp stylebar-resp-desktop');
			// Set the viewport meta
			$jq1('#stylebar-viewport-meta').attr('content', 'width=device-width, initial-scale=1.0');			
		}
	}
	// If in iframe
	else 
	{
		// Identify the contents as iframe
		$jq1('body').addClass('stylebar-iframe');

		// Add the responsive query string to links
		// so all pages get the stylebar
		$jq1.each( $jq1('.stylebar-iframe a'), function()
		{
			var loc = $jq1(this).attr('href');

			if ( loc.charAt(0) !== '#' ) 
			{
				loc += '?responsive=true';
				$(this).attr('href', loc);				
			}
		});
	}

	// Resize to selected device
	function viewportResize(device) 
	{
		// Resize the iframe to the selected device dimensions
		$jq1('#stylebar-site-container').removeClass().addClass('stylebar-' + device);
		// Make appropriate adjustements to body overflow
		$jq1('.stylebar-resp').removeClass().addClass('stylebar-resp stylebar-resp-' + device);
	}

	// Assign the device click events and active states
	$jq1('.stylebar-viewport-container a').click(function(event)
	{
		event.preventDefault();

		// Get the device name from the clicked icon class
		var device = $jq1(this).attr('class').substring(17);

		// Resize the iframe to the device dimensions
		viewportResize(device);

		// Set the iframe to the height of the viewport
		if (device == 'desktop') {
			$jq1('#stylebar-site').height(height);
		}

		// Assign the active state to the correct device icon
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