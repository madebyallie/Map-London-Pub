$(document).ready(function() {

var map;

function getPubs (callback) {
	$.getJSON('map.json', callback)
}

function initialize() {

  var mapOptions = {
    zoom: 15
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var options = {
    map: map,
    position: new google.maps.LatLng(51.508284, -0.096570)
  };

  map.setCenter(options.position);

  getPubs(function (data) {
    var hostelries = data.hostelries;
    var hostelry, latLng;
  
  for (var i in hostelries) {
		var hostelry = hostelries[i];
		var latLng = new google.maps.LatLng(hostelry.latitude, hostelry.longitude);

		var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
			position: latLng,
			map: map,
      title: hostelry.name,
      review: hostelry.review
		});

      google.maps.event.addListener(marker, 'click', function () {
      document.getElementById("pub-name").innerHTML = (this.title),
      document.getElementById("pub-review").innerHTML = (this.review);
    });     
  }
  });
}


google.maps.event.addDomListener(window, 'load', initialize);

});