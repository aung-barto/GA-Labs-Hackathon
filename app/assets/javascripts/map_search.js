$(document).ready(function(){
  initialize();
});

var map;
var results;
function initialize(){

  // grabbing address from location input
  var address = $('#address').html();
  var geocoder = new google.maps.Geocoder();
  
  geocoder.geocode({ 'address': address}, function(results, status){

    if (status == google.maps.GeocoderStatus.OK){
    var mapOptions = {
      // use current location as the center
      center: new google.maps.LatLng(results[0].geometry.location),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map($('#map')[0], mapOptions);
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
