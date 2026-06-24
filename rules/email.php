<?php

// if authcode or secret key
if (isset($_REQUEST['authcode']) && isset($_REQUEST['username'])) {
    include 'dbsetting.php';
} else if (isset($_POST['secret_key'])) {
    if ($_POST['secret_key'] != "3dabb61f77d1a75127cf7d27614a1ceebfa0f0b8da2a8b9ea32e6ca7804f2aea") {
        header("HTTP/1.1 401 Unauthorized");
        die("Unauthorized");
    }
} else {
    header("HTTP/1.1 401 Unauthorized");
    die("Unauthorized");
}


// Include PHPMailer's autoload file
require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Create a new PHPMailer instance
$mail = new PHPMailer(true);
// print_r($_POST['attachments']);
// die();
try {
    // Server settings
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.kln.ac.lk';                        // Specify main and backup SMTP servers
    $mail->SMTPAuth = false;                               // Disable SMTP authentication if your server doesn't require it
    $mail->Port = 25;                                      // TCP port to connect to (default for non-secure SMTP)

    // Recipients
    // $mail->setFrom($_POST['from'], $_POST['senderName']);   // Replace with the sender's email address and name
    $mail->setFrom($_POST['from']);   // Replace with the sender's email address and name
    $mail->addAddress($_POST['to']);            // Replace with the recipient's email address


    if (isset($_POST['attachments']) && is_array($_POST['attachments'])) {
        foreach ($_POST['attachments'] as $attachment) {
            $fileName = $attachment['filename'];
            $fileContent = base64_decode($attachment['content']); // Decode the base64 content
            $mail->addStringAttachment($fileContent, $fileName);
        }
    }


    // Content
    $mail->isHTML(true);                                   // Set email format to HTML
    $mail->Subject = $_POST['subject'];
    $mail->Body    = $_POST['text'];

    // Send the email
    if ($mail->send()) {
        echo 200;
    } else {
        echo 201;
    }
} catch (Exception $e) {
}
