$(document).ready(function(){
  initialize();
});

var map;
var map2;
var results;
var address;
var address2 = [];

function initialize(){
   // grabbing address from location input
  if ($('#address').html()) {
    console.log($('#address').html());
    address = $('#address').html();
  } else if ($('#cross-streets').html()){
    address = $('#cross-streets').html();
  } else if ($('#l_address').val()){
    address2.push($('#l_address').val()+ ", " + $('#l_city').val());
    for(i = 0; i < address2.length; i++){
      address = address2[i];
    };
  };

  var geocoder = new google.maps.Geocoder();
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

