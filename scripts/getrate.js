

var URLBase = "https://taxrates.api.avalara.com/postal?country=usa&postal=";
var TrailingFixedData = "&apikey=CQ2jf4pWZ%2BFNiiPTodxicht928vulmFygoamd09H%2FyqWtC0Ugvjhn40nqTXx8DyDhsu%2F0rZchSDww19Y3782mw%3D%3D";

var thing = document.forms['form'];
var thingzip = thing.elements['zip'];

TotalURL = URLBase + thingzip.value + TrailingFixedData;


function getJSONP(url, success){
TotalURL = URLBase + thingzip.value + TrailingFixedData;

    
    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    head.appendChild(script);

}

getJSONP(TotalURL, function(data){
    var json = JSON.stringify(data);
    JSON.parse(json);
});  
    