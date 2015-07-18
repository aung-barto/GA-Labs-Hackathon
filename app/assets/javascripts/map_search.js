$(document).ready(function(){
  initialize();
});

var map;
var results;
var address;
var address2 = [];

function initialize(){
   // grabbing address from location input
  
  // address2.push($('#l_address').val()+ ", " + $('#l_city').val());
  // for(i = 0; i < address2.length; i++){
  //   address = address2[i];
  // };

  $('body').find('span').each(function(){
    address2.push(this.html());
    console.log(this.html());
  });
  for (i = 0; i < address2.length; i++){
    address = address2[i];
  };
  console.log(address);

  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': address}, function(results, status){

    if (status == google.maps.GeocoderStatus.OK){
    var mapOptions = {
      // use current location as the center
      center: new google.maps.LatLng(results[0].geometry.location),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map($('#map-canvas')[0], mapOptions);
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}