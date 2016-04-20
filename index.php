<!DOCTYPE html>
<html lang="en">
<head>
	<script src="scripts/jquery.min.js"></script>
	<script src="scripts/bootstrap.min.js"></script>
	<script src="scripts/scripts.min.js"></script>

	<!-- Google Fonts -->
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800|Montserrat:700,400|Architects+Daughter">

	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/stylebar2016.css">

	<!-- viewport meta to reset iPhone inital scale -->
	<meta name="viewport" content="width=device-width, initial-scale=1">	

	<meta name="robots" content="noindex">

	<title>Test Your Website's Device Compatibility</title>
</head>

<body>
	<nav class="stylebar-body" id="stylebar">
		<div class="stylebar-wrapper">
			<div class="stylebar-container">
				<div class="stylebar-row">
					<div class="stylebar-logo-container">
						<a href="http://www.cpasitesolutions.com/cpa-website-design/styles.php" class="stylebar-logo-link">
							<i class="stylebar-logo"></i>
						</a>
					</div><!-- /stylebar-logo-container -->

					<div class="stylebar-controls-container">
						<div class="stylebar-controls">
							<div class="stylebar-selector-container">
								<label for="stylebar-selector">Compare to: </label>
								<select name="stylebar-selector" id="stylebar-selector" class="stylebar-selector">
									<option value="">Select a Design...</option>
									<option value="580">Design #580</option>
									<option value="589">Design #589</option>
									<option value="561">Design #561</option>
									<option value="529">Design #529</option	>
								</select>
							</div><!-- /stylebar-selector-container -->

							<div class="stylebar-viewport-container">
								<a href="" class="stylebar-emulate-mobile-landscape stylebar-hasTooltip" title="Emulate Mobile Device - Landscape Orientation"><i></i></a>
								<a href="" class="stylebar-emulate-mobile stylebar-hasTooltip" title="Emulate Mobile Device - Portrait Orientation"><i></i></a>
								<a href="" class="stylebar-emulate-tablet-landscape stylebar-hasTooltip" title="Emulate Tablet Device - Landscape Orientation"><i></i></a>
								<a href="" class="stylebar-emulate-tablet stylebar-hasTooltip" title="Emulate Tablet Device - Portait Orientation"><i></i></a>
								<a href="" class="stylebar-emulate-desktop stylebar-active-device stylebar-hasTooltip" title="Show at Full Size"><i></i></a>
							</div><!-- stylebar-viewport-container -->
						</div><!-- /stylebar-controls -->
					</div><!-- /stylebar-controls-container -->

					<div class="stylebar-contact-container">
						<a href="tel:+18008964500" class="stylebar-phone-link"><i class="stylebar-phone-icon"></i>(800) 896-4500</a>
					</div><!-- /stylebar-phone-container -->
				</div><!-- /stylebar-row -->
			</div><!-- /stylebar-container -->
		</div><!-- /stylebar-wrapper -->
	</nav>

	<div id="stylebar-site-container" class="stylebar-desktop stylebar-resp">
		<iframe id="stylebar-site" src="http://samples.cpasitesolutions.com/sample589/"></iframe>
	</div>

	<a href="#" class="tester-cta" data-toggle="modal" data-target="#requestDemo">Request a FREE Demo</a>

	<!-- Modal -->
	<div class="modal fade" id="requestDemo" tabindex="-1" role="dialog" aria-labelledby="requestDemo-label">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h3 class="modal-title" id="requestDemo-label">Request a Demo</h3>
	      </div>
	      <div class="modal-body">
	        <?
              ShowLeadForm("crm", "/getstarted.php", false, true, "Request Your FREE Demo", "large");
            ?>
	      </div>
	    </div>
	  </div>
	</div>
</body>
</html>
