


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
