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


