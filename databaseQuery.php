<?php

header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "Database username";
$password = "Database password";
$dbname = "database name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM charlhp5_howMuchWithTax.rates where zip = ".$_GET['zip'];
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        print_r(json_encode($row, JSON_PRETTY_PRINT));
    }
} else {
    echo "0 results";
}
$conn->close();
?>