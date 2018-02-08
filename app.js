/*
Se declara la apicación como HTML5 a través de la declaración <!DOCTYPE html>.
Se crea un elemento div con el nombre “map” para que contenga el mapa.
Se define una función JavasScript que crea un mapa en el elemento div.
Se carga la Maps JavaScript API usando una etiqueta script.
*/

var app = angular.module('App', ['ngMaterial']);

app.controller('AppCtrl', function($scope, $mdDialog) {
	
	var map;
	$scope.showMap = false;
	$scope.showBtnMap = false;
			
	$scope.initMap = function(){
		$scope.showMap = true;
		$scope.showBtnMap = true;		
		map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat: -34.397, lng: 150.644},
		  zoom: 8
		});
	};

	$scope.hideMap = function(){
		$scope.showBtnMap = false;
		$scope.showMap = false;
	};

});


