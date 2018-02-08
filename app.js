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
	var location = { lat: 6.244203, lng: -75.5812119 };
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

	//getGeolocation();	
			
	$scope.initMap = function(){
		$scope.showMap = true;
		$scope.showBtnMap = true;		
		map = new google.maps.Map(document.getElementById('map'), {
			scaleControl: true,
		  	center: location,
		  	zoom: 10
		});

        var infowindow = new google.maps.InfoWindow;
        infowindow.setContent('<h2>I AM HERE!!!</h2>');

        var marker = new google.maps.Marker({map: map, position: location});
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });		
	};

	$scope.hideMap = function(){
		$scope.showBtnMap = false;
		$scope.showMap = false;
	};

});


