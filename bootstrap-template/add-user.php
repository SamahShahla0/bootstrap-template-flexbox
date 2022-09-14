<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$query = "INSERT INTO users(name, email, phone, message) VALUE (?, ?, ?, ?)";

$query = $mysqli->prepare("INSERT INTO users(name, email, phone, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $name, $email, $phone, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>