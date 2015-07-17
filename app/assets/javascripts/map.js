$(document).ready(function(){
  initialize();
});

function initialize(){
  var mapOptions = {
    center: new google.maps.LatLng(40.7903, -73.9597),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map($('#map')[0], mapOptions);
  $.ajax({
    method: "GET",
    url: "/location"
  }).done(function(locations){
    for(i=0; i<locations.length; i++){
      console.log(locations[i]);
      console.log(locations[i].address);
      // var l_address = locations[i].street_address;
      // var l_city = locations[i].city;
      // var l_state = locations[i].state;
      // var l_cross_st1 = locations[i].cross_st1;
      // var l_cross_st2 = locations[i].cross_st2;
      // var l_neighborhood = locations[i].neighborhood;
      // var l_name = locations[i].location_name;

      var get_address = {address: [locations[i].address], city: locations[i].city};
      
      console.log(get_address);
      geocode_address(map, get_address);
    }
  });

  var geocode_address = function(map, name, location_object) {
  var geocoder = new google.maps.Geocoder();
  console.log("location object " + location_object);
  var address = [
   location_object[address][0],
   location_object['city'],
   // location_object['country_code']
  ].join(', ');

  // geocode the address and get the lat/lng
  geocoder.geocode({address: address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {

      // create a marker and drop it on the name on the geocoded location
      var marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        map: map,
        position: results[0].geometry.location,
        title: name
      });

       // save the marker object so we can delete it later
       markersArray.push(marker);
      } else {
       console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  };
}
