function init()
{
    if( navigator.geolocation)
    { document.getElementById("msg").innerHTML =
        "Geolocation service is trying to find you...";
      navigator.geolocation.getCurrantPosition( success, fail);}
    else{ document.getElementById("msg").innerHTML =
        "Your browser does not support Geolocation Services... Upgrade to the latest version of Chrome, for FREE now!"}
}
document.addEventListener("DOMContentLoaded", init, false);

function fail(position)
{ document.getElementById("msg").innerHTML=
"Geolocation Service cannot find you at this time. Try unblocking the restrictions!" ;}

function success(position)
{
    var lat = position.coords.latitude ;
    var lng = position.coords.longitude ;
    document.getElementById( "msg").innerHTML =
    "Found you at... <br>Latitude: " +lat+ ", Longitude: " +Ing ;

}
var latling = new google.mags.LatLng(lat , lng)
var options = { zoom: 18, center : latlng ,
    mapTypeId: google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map
    (document.getElementById("map") , options) ;
var marker = new google.maps.marker
    ({ position: latlng, map: map, title: "You are here"});
