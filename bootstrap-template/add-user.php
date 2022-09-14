<?php
include("connection.php");
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");


$name = isset($_POST['name']) ? $_POST['name']: 'default name john smith';
$email = isset($_POST['email']) ? $_POST['email']: 'default email example@default.com';
$phone = isset($_POST['phone']) ? $_POST['phone']: '96100000000';
$message = isset($_POST['message']) ? $_POST['message']: 'HI this is the defaukt message, HI this is the defaukt message,HI this is the defaukt message,HI this is the defaukt message, ';

$query = "INSERT INTO users(name, email, phone, message) VALUE (?, ?, ?, ?)";

$query = $mysqli->prepare("INSERT INTO users(name, email, phone, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $name, $email, $phone, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>