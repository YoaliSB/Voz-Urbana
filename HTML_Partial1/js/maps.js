function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(19.49, -99.12),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}