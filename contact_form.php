<?php


$servername = "localhost";
$username = "aidenmac_ace_user";
$password = "AceUser101!";
$dbname = "aidenmac_Ace_final";
$users_name = $_POST['name'];
$users_email = $_POST['email'];
$users_website = $_POST['website'];
$users_comment = $_POST['comment'];

// Create connection
$conn = new mysqli($localhost, $aidenmac_ace_user, $AceUser101!, $aidenmac_Ace_final);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql ="
  INSERT INTO `instruct_contactform`.`contact` (`id`, `name`, `email`, `website`,
        `comment`, `time_stamp`) VALUES (NULL, '$users_name',
        '$users_email', '$users_website', '$users_comment',
        CURRENT_TIMESTAMP);";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>

