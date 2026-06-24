<?php
include '../dbsetting.php';
include '../log.php';

$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}




if (($_POST["action"] == "getDepartmentFacutlyWise")) {
    $response = array();
    $sql = "";

    $sql = "SELECT d.*,f.facultyTitle as facultyTitle FROM department d left join faculty f on f.facultyCode = d.facultyCode where f.facultyCode = '" . $_POST["facultyCode"] . "';";
    // echo $sql;
    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'universityCode' => $row["universityCode"],
                    'facultyCode' => $row["facultyCode"],
                    'departmentCode' => $row["departmentCode"],
                    'departmentTitle' => $row["departmentTitle"],
                    'facultyTitle' => $row["facultyTitle"]
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


if (($_POST["action"] == "geProgrammeFacutlyWise")) {
    $response = array();
    $sql = "";

    $sql = "SELECT d.*,f.facultyTitle as facultyTitle FROM degree d left join faculty f on f.facultyCode = d.facultyCode where f.facultyCode = '" . $_POST["facultyCode"] . "' GROUP BY d.degreeCode;";
    // echo $sql;
    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'universityCode' => $row["universityCode"],
                    'facultyCode' => $row["facultyCode"],
                    'departmentCode' => $row["departmentCode"],
                    'degreeCode' => $row["degreeCode"],                    
                    'degreeTitle' => $row["degreeTitle"],
                    'facultyTitle' => $row["facultyTitle"]
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



if (($_POST["action"] == "getDepartment")) {
    $response = array();
    $sql = "";

    $sql = "SELECT d.*,f.facultyTitle as facultyTitle FROM department d left join faculty f on f.facultyCode = d.facultyCode;";
    // echo $sql;
    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'universityCode' => $row["universityCode"],
                    'facultyCode' => $row["facultyCode"],
                    'departmentCode' => $row["departmentCode"],
                    'departmentTitle' => $row["departmentTitle"],
                    'facultyTitle' => $row["facultyTitle"]
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


if (($_POST["action"] == "CreateDepartment")) {

    $response = "";

    if ($_POST["universityCode"] != "" && $_POST["facultyCode"] != "" && $_POST["departmentCode"] != "" && $_POST["departmentTitle"] != "") {

        $sql = " INSERT INTO department (universityCode,facultyCode,departmentCode,departmentTitle) VALUES ( '" . $_POST["universityCode"] . "','" . $_POST["facultyCode"] . "','" . $_POST["departmentCode"] . "','" . $_POST["departmentTitle"] . "')";

        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            $response = ['status' => 200, 'message' => 'Department name Succesfully Updated!'];
        } else {
            $response = ['status' => 400, 'message' => "Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}


if (($_POST["action"] == "updateDepartment")) {

    $response = "";

    if ($_POST["universityCode"] != "" && $_POST["facultyCode"] != "" && $_POST["departmentCode"] != "" && $_POST["departmentTitle"] != "") {

        $sql = " UPDATE department SET departmentTitle = '" . $_POST["departmentTitle"] . "' WHERE universityCode = '" . $_POST["universityCode"] . "' and facultyCode = '" . $_POST["facultyCode"] . "' and departmentCode = '" . $_POST["departmentCode"] . "'";

        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            $response = ['status' => 200, 'message' => 'Department name Succesfully Updated!'];
        } else {
            $response = ['status' => 400, 'message' => "Update Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}


if (($_POST["action"] == "DeleteDepartment")) {

    $response = "";

    if ($_POST["universityCode"] != "" && $_POST["facultyCode"] != "" && $_POST["departmentCode"] != "") {

        $sql = " DELETE FROM department WHERE universityCode = '" . $_POST["universityCode"] . "' and facultyCode = '" . $_POST["facultyCode"] . "' and departmentCode = '" . $_POST["departmentCode"] . "'";

        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            $response = ['status' => 200, 'message' => 'Department name Succesfully Deleted!'];
        } else {
            $response = ['status' => 400, 'message' => "Deleted Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}


$dbCon->close();
