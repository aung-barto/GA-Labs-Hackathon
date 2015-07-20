// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks

//= require_tree .

var markersArray = [];
var NY_LAT = 40.735189;
var NY_LNG = -73.991829;
var QUERY_DELAY = 400;
var inactive = false;

$(document).ready(function() {
  if ($('#map-canvas')){
    // initialize the map on load
    manyMaps();

  /**
   * Initializes the map and some events on page load
   */
   function manyMaps() {
    // Define some options for the map
    var mapOptions = {
      center: new google.maps.LatLng(NY_LAT, NY_LNG),
      zoom: 16,

      // hide controls
      panControl: true,
      streetViewControl: true,

      // reconfigure the zoom controls
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
        style: google.maps.ZoomControlStyle.SMALL
      }
    };
    // create a new Google map with the options in the map element
     map = new google.maps.Map($('#map-canvas')[0], mapOptions);

      var classa = $('body').find('span').each(function(){
        var addArray = this.innerHTML.split(",");
        var addObj = {address: [addArray[0]], city: addArray[1]};
        var title = addArray[2];
        geocode_address(map, title, addObj);
      });

    };


  /**
   * Geocode the address from the business and drop a marker on it's
   * location on the map
   *
   * param: map - the Google map object to drop a marker on
   * param: name - the name of the business, used for when you hover
   *               over the dropped marker
   * param: location_object - an object of the businesses address
   */
  function geocode_address(map, name, location_object) {
    var geocoder = new google.maps.Geocoder();

    var address = [
      location_object['address'][0],
      location_object['city'],
      // location_object['country_code']
    ].join(', ');
    console.log("this is the outterscoped address "+ address);

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
        // console.log(position);

        // save the marker object so we can delete it later
        markersArray.push(marker);
      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  // var address = {address: ["140 tenth street"], city: "New York", country_code: 001}
  // geocode_address(map, "fritzyz", address)
  /**
   * Remove all of the markers from the map by setting them
   * to null
   */
    function clearMarkers() {
      markersArray.forEach(function(marker) {
        marker.setMap(null);
      });

      markersArray = [];
    };
  }
});

/**
 * Bind and setup search control for the map
 *
 * param: map - the Google map object
 */
// var bind_controls = function(map) {
//   // get the container for the search control and bind and event to it on submit
//   var controlContainer = $('#control_container')[0];
//   google.maps.event.addDomListener(controlContainer, 'submit', function(e) {
//     e.preventDefault();
//     search(map);
//   });

//   // get the search button and bind a click event to it for searching
//   var searchButton = $('#map_search_submit')[0];
//   google.maps.event.addDomListener(searchButton, 'click', function(e) {
//     e.preventDefault();
//     search(map);
//   });

//   // push the search controls onto the map
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlContainer);
// }

/**
 * Makes a post request to the server with the search term and
 * populates the map with the response businesses
 *
 * param: map - the Google map object
 */
// var search = function(map) {
//   var searchTerm = $('#map_search input[type=text]').val();

//   if (inactive === true) { return };

//   // post to the search with the search term, take the response data
//   // and process it
//   $.post('/search', { term: searchTerm }, function(data) {
//     inactive = true;

//     // do some clean up
//     $('#results').show();
//     $('#results').empty();
//     clearMarkers();

//     // iterate through each business in the response capture the data
//     // within a closure.
//     data['businesses'].forEach(function(business, index) {
//       capture(index, map, business);
//     });
//   });
// };
