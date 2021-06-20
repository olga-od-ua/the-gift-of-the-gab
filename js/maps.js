function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.9,
        center: {
            lat: 53.49899570031606,
            lng: -7.778300960952471
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.929227723840555, lng: -8.57254406916652 },
        { lat: 53.33791982381405, lng: -6.219443846805048 },
        { lat: 53.26312906052003, lng: -9.070384516165081 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}