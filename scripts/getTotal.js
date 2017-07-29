function getTotal(){

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        var date = new Date();
        if (this.readyState == 4 && this.status == 200) {
            dnsResp = JSON.parse(this.responseText);

            calculateTax(dnsResp);
            
        }
    };
    xmlhttp.open("GET", 'databaseQuery.php' + "?zip=" + document.getElementById('zip1').value, true);
    xmlhttp.send();

}

function calculateTax(dnsResp){

    subTotal = Number(document.getElementById('subTotal').value);

    var tax = dnsResp['estimatedCombinedRate'] * subTotal;
    var total = tax + subTotal;
    var roundedTotal = Math.round(total * 100) / 100;
    document.getElementById('locationdis').innerHTML =  '<h1> Your estimated total based on your location is $' + roundedTotal + '</h1>';
    console.log(roundedTotal);

}
