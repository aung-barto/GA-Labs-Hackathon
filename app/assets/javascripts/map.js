$(document).ready(function(){
  initialize();
});

var map;

function initialize(){
  var mapOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map($('#map')[0], mapOptions);

  var address = $('#address').html();
  var geocoder = new google.maps.Geocoder();
  console.log(address);
  geocoder.geocode({ 'address': address}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
