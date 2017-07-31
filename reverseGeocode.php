<?php

header("Access-Control-Allow-Origin: *");

class Location{

    public function getZip($latlng){
        $urlBase = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
        $mapsApiKey = '&key=[Insert Google maps APIkey here]';

        $constructedUrl = $urlBase.$latlng.$mapsApiKey;

        echo $this->getJSON($constructedUrl);

    }

    private function getJSON($requestUrl){

        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL,$requestUrl);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch,CURLOPT_CONNECTTIMEOUT, 4);
        $json = curl_exec($ch);
        if(!$json) {
            echo curl_error($ch);
        }
        curl_close($ch);
        return $json;
    }
}

$location = new Location();
$location->getZip($_GET['latlng']);