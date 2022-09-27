function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 28.6542, lng: 77.2373};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'New Delhi' // Title Location
    });
}