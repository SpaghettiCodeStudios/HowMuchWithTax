var URLBase = "http://maps.googleapis.com/maps/api/geocode/json?";
var TrailingFixedData = "&sensor=true";
a = document.getElementById('locationdis').value
finalURL = URLBase + a + TrailingFixedData;


function getJSONP(url, success){

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

getJSONP("http://maps.googleapis.com/maps/api/geocode/json?latlng=52.108662,6.307370&sensor=true", function(data){
    var json = JSON.stringify(data);
    JSON.parse(json)
    document.getElementById("zip").value = data.results.address_components[6].long_name;
});  
    

