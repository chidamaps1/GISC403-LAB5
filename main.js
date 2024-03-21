
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-40.57516364717771, 173.83368220736585], 5);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/Chapagain/mapbox://styles/gdmckenzie/clu1okfsi022801oi3cy1de0z /draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA, {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-43.506223, 172.580281]).addTo(map)
	.bindPopup('Me and my friends play football play football here at Jellie Park every sunday afternoon. We haven't missed a week in 7 years');

const marker2 = L.marker([-43.57817117924751, 172.54656944752773]).addTo(map)
	.bindPopup('Every morning starts with a Chai Latte here at Suburban Rascal cafe.');

const marker3 = L.marker([-43.528919450037606, 172.61091725401695]).addTo(map)
	.bindPopup('Arjee Bhajee is the best Nepalese resturants in Christchurch. It's a place I go to often, espically, when I am missing my moms cooking');

const marker4 = L.marker([-42.49051468800719, 173.16253358475484]).addTo(map)
	.bindPopup('I have spend many weekends in this cabin at Mt Lyford. It's a great place to get away with your family and friends. There are great hiking tracks and lakes nearby.').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'green',
		fillOpacity: 0.5,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-43.001022693302296, 171.5459717367826],
		[-42.81182471899739, 172.01014004947925],
		[-42.90293983675629, 172.33059097665478],
		[-43.24200897891815, 171.8741911712836],
		[-43.001022693302296, 171.5459717367826]
	],{
		color: 'blue',
		fillColor: '#f03',
	}).addTo(map).bindPopup('I am a polygon.');




// END OF DOCUMENT