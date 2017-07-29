function populateZip(){

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        var date = new Date();
        if (this.readyState == 4 && this.status == 200) {
            dnsResp = JSON.parse(this.responseText);

            getNames(dnsResp.results[0].address_components, "types");
            
        }
    };
    xmlhttp.open("GET", 'https://secure.bluehost.com/~charlhp5/howmuchwithtax/reverseGeocode.php' + "?latlng=" + document.getElementById('coord').value, true);
    xmlhttp.send();

}

function getNames(obj, name) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key]["types"].indexOf("postal_code") == 0) {
                console.log(obj[key]["long_name"]);
                document.getElementById("zip1").value = obj[key]["long_name"];
            }
        }
    }
}