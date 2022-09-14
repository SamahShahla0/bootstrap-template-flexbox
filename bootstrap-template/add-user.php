<?php
include("connection.php");

$name = $_POST["name"];
$email = $_POST["email"];
$phonenumber = $_POST["phonenumber"];
$message = $_POST["message"];

$query = "INSERT INTO users(name, email, phonenumber, message) VALUE (?, ?)";

$query = $mysqli->prepare("INSERT INTO articles(name, author) VALUE (?, ?)");
$query->bind_param("ss", $name, $author);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>