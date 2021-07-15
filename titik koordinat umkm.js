var map;
var loc = [
{"loc" : "Bakule Jagung Tape","coords":[-7.659406, 110.577916]},
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -7.66, lng: 110.58 },
    zoom: 8,
  });
  mashLoc(loc);
}
function mashLoc(results) {
for (var i = 0; i < results.length;i++) {
var coords = results[i].coords;
var latLng = new google.maps.LatLng(coords[0], coords[1]);
var marker = new google.maps.Marker({
position: latLng,
map : map,
label :results[i].loc
});
}
}