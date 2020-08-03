/********** */
mapboxgl.accessToken = 'pk.eyJ1IjoiYWlyeTE5OTEiLCJhIjoiY2p2YTMyaG5tMGhpNTN5bTdjYnVrbDVvaSJ9.8Q4cQXdI3lMDNEq1PlH3mQ';
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/airy1991/ckde1h17r4nhs1ip8i0dac365', // stylesheet location
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
    map.setLayoutProperty('pikaPlots_EvenYears', 'visibility', 'visible');
  } else {
    //Turn layer off
    map.setLayoutProperty('pikaPlots_EvenYears', 'visibility', 'none');
  }
};

var checkboxElementFoodStores = document.getElementById('layer-toggle-oddPlots');

checkboxElementFoodStores.onclick = function(e) {
  var isChecked = e.target.checked;

  if (isChecked){
    //Turn layer on
    map.setLayoutProperty('pikaPlots_oddYears', 'visibility', 'visible');
  } else {
    //Turn layer off
    map.setLayoutProperty('pikaPlots_oddYears', 'visibility', 'none');
  }
};

var checkboxElementFoodStores = document.getElementById('layer-toggle-everyYear');

checkboxElementFoodStores.onclick = function(e) {
  var isChecked = e.target.checked;

  if (isChecked){
    //Turn layer on
    map.setLayoutProperty('allYears_plots', 'visibility', 'visible');
  } else {
    //Turn layer off
    map.setLayoutProperty('allYears_plots', 'visibility', 'none');
  }
};
// Add full screen bottom
map.addControl(new mapboxgl.FullscreenControl());

var scale = new mapboxgl.ScaleControl({
    maxWidth: 100,
    unit: 'imperial'
});
map.addControl(scale);

scale.setUnit('imperial');



//Add building's pop-up on click

map.on('click', 'UpdatedPikaPlots_buffer12_wit-14oiqj', function(e) {
  var id = e.features[0].properties.PlotID;
  var date = e.features[0].properties.dateVisit;
  var notes = e.features[0].properties.notes;

  var popUpHTML = [`<p><h3>ID:</h3> ${id}</p><p><h3>Date to Visit:</h3> ${date}</p><p><h3>Notes:</h3> ${notes}</p>`];

  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    //['<h3>'+'Building type:'+'</h3><p>'+type + '</p><h3>'+'ID:'+'</h3><p>'+id+'</p>']
    .setHTML(popUpHTML)
    .addTo(map);

  // Find all features at a point
  var feature = map.queryRenderedFeatures(e.point,{ layers: ['UpdatedPikaPlots_buffer12_wit-14oiqj'] });
  console.log(feature)

  // get the coordinates to use with the centroid function from turf.js
  var polygon = turf.polygon(feature);
  var centroid = turf.centroid(polygon);
  console.log(centroid)



  // Query all rendered features from a single layer
  var features = map.queryRenderedFeatures({ layers: ['UpdatedPikaPlots_buffer12_wit-14oiqj'] });
  //console.log(features)
});



// Change the cursor to a crosshair style when the mouse is over the places layer.
map.on('mouseenter', 'UpdatedPikaPlots_buffer12_wit-14oiqj', function() {
  map.getCanvas().style.cursor = 'crosshair';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'UpdatedPikaPlots_buffer12_wit-14oiqj', function() {
  map.getCanvas().style.cursor = '';
});

