<?php
session_start();
?>
<!DOCTYPE html>
	<script src="scripts/jquery.min.js"></script>
	<script>var $jq1 = jQuery.noConflict();</script>
	<script src="scripts/scripts.min.js"></script>

	<!-- Google Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:300,100|Open+Sans:400,300italic,300,400italic,600,600italic' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="css/stylebar2016.css">

	<!-- viewport meta to reset iPhone inital scale -->
	<meta name="viewport" id="stylebar-viewport-meta" content="">

	<div class="stylebar-body">
		<nav class="stylebar-wrapper">
			<div class="stylebar-container">
				<div class="stylebar-row">
					<div class="stylebar-logo-container">
						<a href="http://www.cpasitesolutions.com/cpa-website-design/styles.php" class="stylebar-logo-link">
							<i class="stylebar-logo"></i>
						</a>
					</div><!-- /stylebar-logo-container -->

					<div class="stylebar-viewport-container">
						<a href="" class="stylebar-emulate-mobile-landscape stylebar-hasTooltip" title="Emulate Mobile Device - Landscape Orientation"><i></i></a>
						<a href="" class="stylebar-emulate-mobile stylebar-hasTooltip" title="Emulate Mobile Device - Portrait Orientation"><i></i></a>
						<a href="" class="stylebar-emulate-tablet-landscape stylebar-hasTooltip" title="Emulate Tablet Device - Landscape Orientation"><i></i></a>
						<a href="" class="stylebar-emulate-tablet stylebar-hasTooltip" title="Emulate Tablet Device - Portait Orientation"><i></i></a>
						<a href="" class="stylebar-emulate-desktop stylebar-active-device stylebar-hasTooltip" title="Show at Full Size"><i></i></a>
					</div><!-- stylebar-viewport-container -->

					<div class="stylebar-contact-container">
						<a href="tel:+18008964500" class="stylebar-phone-link"><i class="stylebar-phone-icon"></i>(800) 896-4500</a>

						<a href="http://www.cpasitesolutions.com/getstarted.php" class="stylebar-getstarted-btn">Start Free Trial<i class="stylebar-angle-right"></i></a>
					</div><!-- /stylebar-phone-container -->
				</div><!-- /stylebar-row -->
			</div><!-- /stylebar-container -->
		</nav><!-- /stylebar-wrapper -->
	</div>

	<?php include('sample.php'); ?>