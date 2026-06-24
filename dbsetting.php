<?php
date_default_timezone_set('Asia/Colombo');
$hostName = "localhost";
$userName = "root";
$passWord = "1997@Ni#97";
$dbName = "universitytest2";
$dbName2 = "mphil_applicaition";

// $userName = "root";
// $passWord = "mySqlAdminPassword@SIS~2012";
// $dbName = "university";
$dbConNew = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbConNew->connect_errno) {
    header('Content-Type: application/json', true, 503);
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

if (isset($_POST['action'])) {
    if ($_POST['action'] != "checkUser") {
        if (isset($_REQUEST['authcode']) && isset($_REQUEST['username'])) {
            $authcode = $_REQUEST['authcode'];
            $username = $_REQUEST['username'];
            // $stmt = $dbConNew->prepare("SELECT userId FROM user WHERE userId = ? AND auth_code = ?");
            $stmt = $dbConNew->prepare("SELECT userId FROM temp_auth_codes WHERE userId = ? AND auth_code = ?");
            $stmt->bind_param("ss", $username, $authcode);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows === 0) {
                header("HTTP/1.1 401 Unauthorized");
                die("Unauthorized");
            }
        } else {
            header("HTTP/1.1 401 Unauthorized");
            die("Unauthorized");
        }
    }
} else {
    if (isset($_REQUEST['authcode']) && isset($_REQUEST['username'])) {
        $authcode = $_REQUEST['authcode'];   // will get from POST or GET
        $username = $_REQUEST['username'];
        $stmt = $dbConNew->prepare("SELECT userId FROM temp_auth_codes WHERE userId = ? AND auth_code = ?");
        $stmt->bind_param("ss", $username, $authcode);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 0) {
            header("HTTP/1.1 401 Unauthorized");
            die("Unauthorized");
        }
    } else {
        header("HTTP/1.1 401 Unauthorized");
        die("Unauthorized");
    }
}

$dbConNew->close();
