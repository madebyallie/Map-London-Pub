function getPubs (callback) {
	$.getJSON('map.json', callback)
}

function initialize() {

	var mapOptions = {
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	 map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

 // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'You are here.'
     });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

	getPubs(function (data) {
		var hostelries = data.hostelries;
		var hostelry, latLng;

		for (i in hostelries) {
			hostelry = hostelries[i];
			latLng = new google.maps.LatLng(hostelry.latitude, hostelry.longitude)

			var marker = new google.maps.Marker({
				position: latLng,
				map: map
			})
		}
	})

google.maps.event.addDomListener(window, 'load', initialize);