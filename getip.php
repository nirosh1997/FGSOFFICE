<?php
session_start();
$_SESSION['onloadip'] =  $_SERVER['REMOTE_ADDR'] ;//Get ip in onLoad
//echo $_SESSION['onloadip'].'_ip';
$ipresult = isset($_SESSION['onloadip'])  ? "true_ip": "false_ip";

echo $ipresult;


?>