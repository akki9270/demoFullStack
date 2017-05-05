'use strict';

angular.module('testfullstackApp')
        .controller('MapsCtrl',function() {
    var vm = this;

    vm.Latitude = 23;
    vm.Longitude = 79;
    vm.zoom = 5;
    var pos;
    var marker;

    vm.setPos = function() {
      // Set center of map
      pos = new google.maps.LatLng(vm.Latitude, vm.Longitude);

    };

    vm.setPos();

    vm.setMarker = function(){
      // set Marker position
     marker = new google.maps.Marker({
        position: pos
        //animation:google.maps.Animation.BOUNCE,
        //icon:'assets/icons/menu.svg'
      });
    };
    vm.setMarker();

    vm.inItMap = function(zoom){

      vm.setPos();
    // initial map property
    var mapProp = {
      center: pos,
      zoom: zoom ? zoom : vm.zoom
    };

    // attach map to div with given Id
    var map = new google.maps.Map(document.getElementById("mapContainer"), mapProp);

      vm.setMarker();
    //set marker on map
    marker.setMap(map);

    };

    //google.maps.event.addListener(marker,'click',function() {
    //  map.setZoom(vm.zoom++);
    //  map.setCenter(marker.getPosition());
    //});

    //google.maps.event.addListener(marker,'mouseover',function(a) {
    //      console.log(marker)
    //});

});
