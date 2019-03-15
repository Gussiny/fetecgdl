<?php 
    $name   =   $_POST['name'];
    $mail   =   $_POST['email'];
    $tel    =   $_POST['tel'];
    $message=   $_POST['message'];
    $email_message = "Nombre: $name \nTelefono: $tel \nCorreo: $mail \nMensaje: $message";
    $email_to = "correosorteo69@gmail.com";
    $email_subject = "Mensaje de Contacto";
    $headers = "From: $mail" . "\r\n";
    mail($email_to, $email_subject, $email_message, $headers)or die("Error!");
    echo "Thank You!". " -" . "<a href="/" style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>