$(document).ready(function(){
  initialize();
});

var map;
var results;
var address;

function initialize(){
   // grabbing address from location input
  
  if ($('#address').html()) {
    address = $('#address').html();
  } else {
    address = $('#cross-streets').html();
  };

  var geocoder = new google.maps.Geocoder();
  console.log(address);
  geocoder.geocode({ 'address': address}, function(results, status){

    if (status == google.maps.GeocoderStatus.OK){
    var mapOptions = {
      // use current location as the center
      center: new google.maps.LatLng(results[0].geometry.location),
      zoom: 15,
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
