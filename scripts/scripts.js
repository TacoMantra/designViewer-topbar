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

	// Assign the device by query string
	var device = getQueryVariable('device');
	if ( device.length > 0 && device !== 'desktop')	
	{
		viewportResize(device);
		var deviceIcon = $('.stylebar-emulate-' + device)
		$('.stylebar-active-device').removeClass('stylebar-active-device');
		deviceIcon.addClass('stylebar-active-device');
	}


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
	var queryUrl = getQueryVariable('url');
	var startUrl = 'http://samples.cpasitesolutions.com/sample580/';

	if ( queryUrl.length > 0 ) 
	{
		startUrl = 'http://' + queryUrl.replace('http://', '');
		updateIframe(startUrl);
	}

	function updateIframe(url) {
		$('#stylebar-site').attr('src', url);
	} 

	$('#stylebar-selector').change(function()
	{
		var selected = $("option:selected", this).val();

		switch (selected) {
			case '580':
				updateIframe('http://samples.cpasitesolutions.com/sample580/');
				break;
			case '589':
				updateIframe('http://samples.cpasitesolutions.com/sample589/');
				break; 
			case '554':
				updateIframe('http://samples.cpasitesolutions.com/sample554/');
				break; 
			case '541':
				updateIframe('http://samples.cpasitesolutions.com/sample541/');
				break; 
			default:
				updateIframe(startUrl);
		}
	});

	/**********************
		Dynamic Phone #
	**********************/
	var IMA = getQueryVariable('IMA');
	var phoneLink = $('#stylebar-phone-link');

	function updatePhone(phone) {
		phoneLink.text(phone).attr('href', 'tel:+1' + phone.replace(/[^\w]/g, ''));
	}

	switch (IMA) {
		case 'Caitlin':
			updatePhone('(802) 655-8001');
			break;
		case 'Erika':
			updatePhone('(951) 395-8272');
			break;
		case 'Victoria':
			updatePhone('(951) 395-8271');
			break;
		default:
			updatePhone('(800) 896-4500');
	}

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
});