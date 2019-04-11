<?php
error_reporting(0);
$conn=new mysqli("localhost","root","","mrjapu");
$uname=$_POST['uname'];
$email=$_POST['email'];
 $getid="SELECT * FROM subscriber ORDER BY id";
    $findid=$conn->query($getid);
    if($findid->num_rows>0)
    {
        while($row=$findid->fetch_assoc())
        {
            $show=$row['id']+1;
        }
    }
    if($show!="")
    {
        $id=$show;
    }
    else{
        $id=0;
    }
    
$sql="insert into subscriber values('$id','$uname','$email')";
if($conn->query($sql)==true)
{
    echo "success";
}
else
{
    echo "error: ".$sql."<br>".$conn->error;
}
?>