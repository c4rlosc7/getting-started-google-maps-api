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
	var location = { lat: -17.0000000, lng:  -65.0000000, content: '<h1>Medellín</h1>' };
	var markers = [
		{ id: 0, country: "Venezuela", lat: 8.0000000, lng: -66.0000000, content: '<h1>Venezuela</h1>' },
		{ id: 1, country: "Colombia", lat: 4.0000000, lng: -72.0000000, content: '<h1>Colombia</h1><br><img class="flags-map" src="image/flags/flag-colombia.png" alt="Colombia">',
		iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' },
		{ id: 2, country: "Ecuador", lat: -2.0000000, lng: -77.5000000, content: '<h1>Cali</h1>' },
		{ id: 3, country: "Perú", lat: -12.0431800, lng: -77.0282400, content: '<h1>Perú</h1>' },
		{ id: 4, country: "Brazil", lat: -10.0000000, lng: -55.0000000, content: '<h1>Brazil</h1>'},
		{ id: 5, country: "Bolivia", lat:  -17.0000000, lng: -65.0000000, content: '<h1>Bolivia</h1>'},
		{ id: 6, country: "Chile", lat: -33.4569400, 	lng: -70.6482700, content: '<h1>Chile</h1>'},
		{ id: 7, country: "Paraguay", lat: -23.0000000,	lng: -58.0000000, content: '<h1>Paraguay</h1>'},
		{ id: 8, country: "Uruguay", lat: -33.0000000, 	lng: -56.0000000, content: '<h1>Uruguay</h1>'},
		{ id: 9, country: "Argentina", lat: -34.0000000, lng: -64.0000000, content: '<h1>Argentina</h1>'}
	];
	/* Map Options */
	var set = {
		scaleControl: true,
		zoom:3,
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
