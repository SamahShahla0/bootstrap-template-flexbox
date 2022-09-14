<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");


$name = isset($_POST['name']);
$email = isset($_POST['email']);
$phone = isset($_POST['phone']);
$message = isset($_POST['message']);

$query = "INSERT INTO users(name, email, phone, message) VALUE (?, ?, ?, ?)";

$query = $mysqli->prepare("INSERT INTO users(name, email, phone, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $name, $email, $phone, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>