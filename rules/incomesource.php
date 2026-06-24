<?php
include '../dbsetting.php';
include '../log.php';

$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}

if (($_POST["action"] == "getIncomeSource")) {
    $response = array();
    $sql = "";

    $sql = "SELECT * FROM programmetype;";
    // echo $sql;
    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'universityCode' => $row["universityCode"],
                    'programmeTypeCode' => $row["programmeTypeCode"],
                    'programmeTypeTitle' => $row["programmeTypeTitle"]
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "getIncomeCategory")) {
    $response = array();
    $sql = "";

    $sql = "SELECT * FROM IncomeCategory;";
    // echo $sql;
    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'IncomeCategoryCode' => $row["IncomeCategoryCode"],
                    'IncomeCategoryTitle' => $row["IncomeCategoryTitle"],
                    'IncomeCategoryType' => $row["type"],
                    'payment_deadline' => $row["payment_deadline"],
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "CreateProgrameType")) {

    $response = "";

    if ($_POST["universityCode"] != "" && $_POST["programmeTypeCode"] != "" && $_POST["programmeTypeTitle"] != "") {

        $sql = " INSERT INTO programmetype (universityCode,programmeTypeCode,programmeTypeTitle) VALUES ( '" . $_POST["universityCode"] . "','" . $_POST["programmeTypeCode"] . "','" . $_POST["programmeTypeTitle"] . "')";

        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            $response = ['status' => 200, 'message' => 'Programe Type Succesfully Updated!'];
        } else {
            $response = ['status' => 400, 'message' => "Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}


if (($_POST["action"] == "updateProgrameType")) {

    $response = "";

    if ($_POST["universityCode"] != "" && $_POST["programmeTypeCode"] != "" && $_POST["programmeTypeTitle"] != "") {

        $sql = " UPDATE programmetype SET programmeTypeTitle = '" . $_POST["programmeTypeTitle"] . "' WHERE universityCode = '" . $_POST["universityCode"] . "' and programmeTypeCode = '" . $_POST["programmeTypeCode"] . "' ";

        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            $response = ['status' => 200, 'message' => 'Programe Type Succesfully Updated!'];
        } else {
            $response = ['status' => 400, 'message' => "Update Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}


if (($_POST["action"] == "DeleteProgrameType")) {

    $response = "";

    if ($_POST["universityCode"] != "" && $_POST["programmeTypeCode"] != "") {

        $sql = " DELETE FROM programmetype WHERE universityCode = '" . $_POST["universityCode"] . "' and programmeTypeCode = '" . $_POST["programmeTypeCode"] . "'";

        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            $response = ['status' => 200, 'message' => 'Programe Type Succesfully Deleted!'];
        } else {
            $response = ['status' => 400, 'message' => "Deleted Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}


$dbCon->close();
