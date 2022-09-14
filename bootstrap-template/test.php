<?php
/*
Include CORS - how ? Allow Headers! 
*/

include("connection.php");

$query = $mysqli->prepare("SELECT name, author FROM articles");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>
