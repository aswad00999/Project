<?php
$host = "localhost";
$dbname = "brooks_website";
$username = "root";
$password = ""; // XAMPP default password is empty

// Connect to database
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Insert into database
$sql = "INSERT INTO contact_messages (name, email, subject, message)
        VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $subject, $message);

if ($stmt->execute()) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
