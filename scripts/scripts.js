$(document).ready(function(){
	// Viewport Resizer
	var url = window.location,
		height = $(document).height() - 92;

	if (url == window.parent.location) {
		$('.stylebar-wrapper').show().nextAll().wrapAll('<div id="stylebar-site-container"><iframe id="stylebar-site" src="' + url + '?iframe" style="height: ' + height + 'px"></iframe></div>');
	}

	$('#stylebar-site-container').height(height);

	function viewportResize(device) {
		$('#stylebar-site-container').removeClass().addClass('stylebar-' + device);
	}

	$('.stylebar-viewport-container a').click(function(event){
		event.preventDefault();
		var device = $(this).attr('class').substring(17);
		viewportResize(device);

		if (device == 'desktop') {
			$('#stylebar-site').height(height);
		}

		$('.stylebar-active-device').removeClass('stylebar-active-device');

		$(this).addClass('stylebar-active-device');
	});

	// Tooltips
	$('.stylebar-hasTooltip').hover(function(){
	        // Hover over code
	        var title = $(this).attr('title');
	        $(this).data('tipText', title).removeAttr('title');
	        $('<p class="stylebar-tooltip"></p>')
	        .text(title)
	        .appendTo('body')
	        .fadeIn('slow');
	}, function() {
	        // Hover out code
	        $(this).attr('title', $(this).data('tipText'));
	        $('.stylebar-tooltip').remove();
	}).mousemove(function(e) {
	        var mousex = e.pageX; //Get X coordinates
	        var mousey = e.pageY + 10; //Get Y coordinates
	        $('.stylebar-tooltip')
	        .css({ top: mousey, left: mousex })
	});
});
