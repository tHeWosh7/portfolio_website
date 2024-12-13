<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// catch (mysqli_sql_exception)
// {
// echo "couldnot connect <br>";
// }
// if ($_SERVER["REQUEST_METHOD"]=="POST"){
// $fname = $_POST['FirstName'];
// $lname = $_POST['LastName'];
// $email = $_POST['email'];
// $mobile = $_POST['mobile'];
// $message = $_POST['Message'];
// }
// else{
//     echo"out of range";
// }
// if(empty($fname)){
// echo "Enter your name <br>";
// }
// elseif(empty($lname)){
// echo "Enter your name <br>";
// }
// elseif (empty($email)){
// echo "Enter your email <br>";
// }
// elseif (empty($mobile)){
//     echo "Enter your number <br>";
//     }
// elseif (empty($message)){
// echo "Enter a message <br>";
// }
// else{
// echo"all connected";
// }
// $sql = "INSERT INTO website (Fname,Lname,email,mobile,message)
// VALUES ('$fname','$lname','$email','$mobile','$message')";
// try{
// mysqli_query($conn,$sql);
// echo "Message Sent";
// }
// catch(mysqli_sql_exception){
// echo "Error in taking data!!";
// }
// }
// mysqli_close($conn);

/* ?>*/