<?php
$host = "sql209.infinityfree.com";
$username = "if0_39112919";
$password = "r9VWPyo6C6";
$dbname = "if0_39112919_brooks_db";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Query to fetch all products
$sql = "SELECT id, name, price, category, image_url FROM products";
$result = $conn->query($sql);

$products = [];

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $products[] = $row;
  }
}

// Return JSON
header('Content-Type: application/json');
echo json_encode($products);

$conn->close();
?>
