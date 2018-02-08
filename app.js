/*
Se declara la apicación como HTML5 a través de la declaración <!DOCTYPE html>.
Se crea un elemento div con el nombre “map” para que contenga el mapa.
Se define una función JavasScript que crea un mapa en el elemento div.
Se carga la Maps JavaScript API usando una etiqueta script.
*/

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: -34.397, lng: 150.644},
	  zoom: 8
	});
};