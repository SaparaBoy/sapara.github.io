<?php
$to="saparajaypal0007@gmail.com";
$subject=$_POST['uname'];
$message=$_POST['msg'];
$email=$_POST['email'];
$header="From:$email";
$result= mail($to,$subject,$message,$header);
if($result==true)
{
    echo "your mail is sent";
}
else {
    echo "something wrong!!";
}
?>