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


	/*******************
		Selector
	*******************/
	function updateIframe(layout) {
		$('#stylebar-site').attr('src', layout);
	} 

	$('#stylebar-selector').change(function()
	{
		var selected = $("option:selected", this),
			layout = selected.val(),
			layoutType = selected.parent('optgroup').attr('label');

		// Get rid of all the responsive stuff if adaptive layout chosen
		if (layoutType == "Adaptive Base Layouts")
		{
			$('.stylebar-viewport-container').children('.stylebar-device-icon').not('.stylebar-emulate-desktop').css('visibility', 'hidden');

			if(!$('#stylebar-site-container').hasClass('stylebar-desktop'))
			{
				// Resize the iframe to the device dimensions
				viewportResize('desktop');

				// Set the iframe to the height of the viewport
				$('#stylebar-site').height(height);

				// Assign the active state to the correct device icon
				$('.stylebar-active-device').removeClass('stylebar-active-device');
				$('.stylebar-emulate-desktop').addClass('stylebar-active-device');
			}
		}
		else
		{
			$('.stylebar-viewport-container').children('.stylebar-device-icon').not('.stylebar-emulate-desktop').css('visibility', 'visible');
		}

		switch (layout) {
			case 'base1R':
				updateIframe('http://baselayouts53354.td.prosites.com/');
				break;
			case 'base2R':
				updateIframe('http://baselayouts70584.td.prosites.com/');
				break; 
			case 'base3R':
				updateIframe('http://baselayouts20395.td.prosites.com/');
				break; 
			case 'base4R':
				updateIframe('http://baselayouts37025.td.prosites.com/');
				break; 
			case 'base1A':
				updateIframe('http://www.prosites.com/clients/CustomSite-BaseLayouts/BaseLayout1A.aspx');
				break;
			case 'base2A':
				updateIframe('http://www.prosites.com/clients/CustomSite-BaseLayouts/BaseLayout2A.aspx');
				break; 
			case 'base3A':
				updateIframe('http://www.prosites.com/clients/CustomSite-BaseLayouts/BaseLayout3A.aspx');
				break; 
			case 'base4A':
				updateIframe('http://www.prosites.com/clients/CustomSite-BaseLayouts/BaseLayout4A.aspx');
				break; 
			case 'base5A':
				updateIframe('http://www.prosites.com/clients/CustomSite-BaseLayouts/BaseLayout5A.aspx');
				break;
			case 'base6A':
				updateIframe('http://www.prosites.com/clients/CustomSite-BaseLayouts/BaseLayout6A.aspx');
				break;
			default:
				updateIframe('http://baselayouts53354.td.prosites.com/');
		}
	});
});