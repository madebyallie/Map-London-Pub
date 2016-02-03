<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
		<meta charset="utf-8">
		<title>A London Pub Crawl Google Map | madebyallie | Chichester Design</title>
		<script src="bower_components/modernizr/modernizr.js"></script>
	    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="../stylesheets/app.css" />
		<link rel="stylesheet" href="stylesheets/map.css" />
	</head>
	<body>
		<div class="medium-3 columns mapintro">
			<h1 class="text-center"><span>London Pubs</span></h1>
			<p class="text-center">it doesn't have to be a crawl...</p>
			<hr/>
			<div id="pub-details">
				<h4>Pub Name: </h4>
				<div id="pub-name">Click on a map marker for pub details</div>
				<h4>Pub Review: </h4>
				<div id="pub-review"></div>
			</div>
		</div>
		<div class="medium-9 columns no-padding">
			<div class="mapholder">
				<div id="map-canvas" class="map-canvas"></div>
			</div>
		</div>
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"></script>
		<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
		<script src="js/app_mappy.js"></script>
	</body>
</html>