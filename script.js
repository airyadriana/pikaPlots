/********** */
mapboxgl.accessToken = 'pk.eyJ1IjoiYWlyeTE5OTEiLCJhIjoiY2p2YTMyaG5tMGhpNTN5bTdjYnVrbDVvaSJ9.8Q4cQXdI3lMDNEq1PlH3mQ';
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/airy1991/ckc0vw62t5edj1jmsq1cjnpw8', // stylesheet location
        center: [-105.612098,40.055993], // starting position [lng, lat]
        zoom: 13, // starting zoom
        minZoom: 0,
        maxZoom: 18
      });

// Add zoom and rotation controls to the map.
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');

//Add layer toggling
var checkboxElementBuildings = document.getElementById('layer-toggle-evenPlots');

checkboxElementBuildings.onclick = function(e) {
  var isChecked = e.target.checked;

  if (isChecked){
    //Turn layer on
    map.setLayoutProperty('denver-buildings-47eoag', 'visibility', 'visible');
    map.setLayoutProperty('denver-buildings-47eoag (1)', 'visibility', 'visible');
  } else {
    //Turn layer off
    map.setLayoutProperty('denver-buildings-47eoag', 'visibility', 'none');
    map.setLayoutProperty('denver-buildings-47eoag (1)', 'visibility', 'none');
  }
};

var checkboxElementFoodStores = document.getElementById('layer-toggle-oddPlots');

checkboxElementFoodStores.onclick = function(e) {
  var isChecked = e.target.checked;

  if (isChecked){
    //Turn layer on
    map.setLayoutProperty('food-stores-c8wq25', 'visibility', 'visible');
  } else {
    //Turn layer off
    map.setLayoutProperty('food-stores-c8wq25', 'visibility', 'none');
  }
};

var checkboxElementFoodStores = document.getElementById('layer-toggle-everyYear');

checkboxElementFoodStores.onclick = function(e) {
  var isChecked = e.target.checked;

  if (isChecked){
    //Turn layer on
    map.setLayoutProperty('food-stores-c8wq25', 'visibility', 'visible');
  } else {
    //Turn layer off
    map.setLayoutProperty('food-stores-c8wq25', 'visibility', 'none');
  }
};
