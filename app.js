/*
Se declara la apicación como HTML5 a través de la declaración <!DOCTYPE html>.
Se crea un elemento div con el nombre “map” para que contenga el mapa.
Se define una función JavasScript que crea un mapa en el elemento div.
Se carga la Maps JavaScript API usando una etiqueta script.
ZOOM
1: Mundo
5: Tierra firme y continente
10: Ciudad
15: Calles
20: Edificios
*/

var app = angular.module('App', ['ngMaterial']);

app.controller('AppCtrl', function($scope, $mdDialog) {

	var map;
	var location = { lat: 6.244203, lng: -75.5812119, content: '<h1>Medellín</h1>' };
	// var bogota = { lat: 4.624335, lng: -74.063644, content: '<h1>Bogota</h1>' };
	// var pereira = {
	// 	lat: 4.8133300,
	// 	lng: -75.6961100,
	// 	content: '<h1>Pereira</h1>',
	// 	iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' };
	// var cali = { lat: 3.4372200, lng: -76.5225000, content: '<h1>Cali</h1>' };
	// var barranquilla = { lat: 10.9685400, lng: -74.7813200, content: '<h1>Barranquilla</h1>' };
	var markers = [
		{
			lat: 6.244203,
			lng: -75.5812119,
			content: '<h1>Medellín</h1>'
		},
		{
			lat: 4.8133300,
			lng: -75.6961100,
			content: '<h1>Pereira</h1>',
			iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
		},
		{
			lat: 3.4372200,
			lng: -76.5225000,
			content: '<h1>Cali</h1>'
		},
		{
			lat: 10.9685400,
			lng: -74.7813200,
			content: '<h1>Barranquilla</h1>'
		}
	];
	/* Map Options */
	var set = {
		scaleControl: true,
		zoom:5,
		center: location
	};
	$scope.showMap = false;
	$scope.showBtnMap = false;

	var getGeolocation = function(){
        /* Option */
        var options = {
            maximumAge: 3000,
            timeout: 5000,
            enableHighAccuracy: true
        };

        /* Callback Success */
        var onSuccess = function(position) {
			console.log(position)
        };

        /* Callback Error */
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        };
        /* Run Geolocation */
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	};

	//getGeolocation(); scaleControl: true,

	$scope.initMap = function(){
		$scope.showMap = true;
		$scope.showBtnMap = true;
		/* New Map */
		map = new google.maps.Map(document.getElementById('map'), set);
		// /* Add Marker */
    // var marker = new google.maps.Marker({
		// 	map: map,
		// 	position: location,
		// 	icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
		// });
    //
		// var infowindow = new google.maps.InfoWindow({
		// 	content: '<h2>I STAY HERE!!!</h2>'
		// });
    //
    // marker.addListener('click', function() {
    //   infowindow.open(map, marker);
    // });
		var addMarker = function(coords){
			var marker = new google.maps.Marker({
				position: coords,
				map: map,
			});
			/* Check for customicon */
			if(coords.iconImage) marker.setIcon(coords.iconImage);
			/* Check content */
			if(coords.content){
				var infowindow = new google.maps.InfoWindow({
					content: coords.content
				});
		    marker.addListener('click', function() {
		      infowindow.open(map, marker);
		    });
			}
		};
		// addMarker(medellin);
		// addMarker(bogota);
		// addMarker(pereira);
		// addMarker(cali);
		// addMarker(barranquilla);
		/* Loop markers */
		for (var i = 0; i < markers.length; i++) {
			addMarker(markers[i]);
		}
	};

	$scope.hideMap = function(){
		$scope.showBtnMap = false;
		$scope.showMap = false;
	};

});
