<?php
    if(isset($_POST['name'])&&isset($_POST['email'])&&isset($_POST['message']))
    {
        if(!empty($_POST['name'])&&!empty($_POST['email'])&&!empty($_POST['message']))
        {
            $name=$_POST['name'];
            $email=$_POST['email'];
            $message=$_POST['message'];
            $reciever='shravanyoserene1729@gmail.com';
            $subject='Feedback';
            mail($reciever,$subject,$message,'Personal Portfolio');
            echo "Feedback submitted successfully";
        }
        else
        {
            echo "Invalid details.Try Again !";
        }
    }
?>