<?php
include '../dbsetting.php';
include '../log.php';


$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}



if (($_POST["action"] == "getDataForDegreeUpdate")) {
    $response = array();
    $sql = "";

    $sql = "SELECT d.universityCode,d.facultyCode,f.facultyTitle,d.departmentCode,d.programmeTypeCode ,d.slql,d.degreeCode ,d.degreeTitle,d.duration,d.criteriaCode,d.medium,d.IncomeSourceCode,
     d.slql as slql,d.exitslql as exitslql,LibProgrammeCode as LibProgrammeCode,NewLibProgrammeCode as NewLibProgrammeCode,NewLibDegreeCode as NewLibDegreeCode
    FROM degree d 
    LEFT JOIN faculty f ON d.facultyCode = f.facultyCode
    LEFT JOIN LibraryIdCode l ON d.degreeCode = l.LibDegreeCode WHERE degreeCode = '" . $_POST["degreeCode"] . "' GROUP BY degreeCode ORDER BY d.facultyCode ASC,degreeTitle ASC;";
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
                    'facultyTitle' => $row["facultyTitle"],
                    'departmentCode' => $row["departmentCode"],
                    'programmeTypeCode' => $row["programmeTypeCode"],
                    'slql' => $row["slql"],
                    'degreeCode' => $row["degreeCode"],
                    'degreeTitle' => $row["degreeTitle"],
                    'duration' => $row["duration"],
                    'criteriaCode' => $row["criteriaCode"],
                    'slql' => $row["slql"],
                    'exitslql' => $row["exitslql"],
                    'medium' => $row["medium"],
                    'IncomeSourceCode' => $row["IncomeSourceCode"],
                    'LibProgrammeCode' => $row["LibProgrammeCode"],
                    'NewLibProgrammeCode' => $row["NewLibProgrammeCode"],
                    'NewLibDegreeCode' => $row["NewLibDegreeCode"],
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



if (($_POST["action"] == "getCreteriaDataForDegreeUpdate")) {
    $response = array();
    $sql = "";

    $sql = "SELECT c.criteriaCode as criteriaCode,c.criteriaTitle as criteriaTitle
    FROM degree d LEFT JOIN criteria c ON d.criteriaCode = c.criteriaCode WHERE d.degreeCode = '" . $_POST["degreeCode"] . "';";
    // echo $sql;
    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'criteriaCode' => $row["criteriaCode"],
                    'criteriaTitle' => $row["criteriaTitle"]
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





if (($_POST["action"] == "getDegrees")) {
    $response = array();
    $sql = "";

    $sql = "SELECT d.universityCode,d.facultyCode,f.facultyTitle,d.departmentCode,d.programmeTypeCode ,d.slql,d.degreeCode ,d.degreeTitle,d.duration,d.criteriaCode,d.medium,d.IncomeSourceCode,
     d.slql as slql,d.exitslql as exitslql
    FROM degree d LEFT JOIN faculty f ON d.facultyCode = f.facultyCode GROUP BY degreeCode ORDER BY d.facultyCode ASC,degreeTitle ASC;";
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
                    'facultyTitle' => $row["facultyTitle"],
                    'departmentCode' => $row["departmentCode"],
                    'programmeTypeCode' => $row["programmeTypeCode"],
                    'slql' => $row["slql"],
                    'degreeCode' => $row["degreeCode"],
                    'degreeTitle' => $row["degreeTitle"],
                    'duration' => $row["duration"],
                    'criteriaCode' => $row["criteriaCode"],
                    'slql' => $row["slql"],
                    'exitslql' => $row["exitslql"],
                    'medium' => $row["medium"],
                    'IncomeSourceCode' => $row["IncomeSourceCode"],
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


if (($_POST["action"] == "deleteDegree")) {

    $response = "";

    if ($_POST["degreeCode"] != "") {

        $sql = " DELETE FROM LibraryIdCode WHERE LibDegreeCode = '" . $_POST["degreeCode"] . "'";
        // echo $sql ;
        // die();

        $sql2 = " DELETE FROM degree WHERE degreeCode  = '" . $_POST["degreeCode"] . "'";
        $sql3 = " DELETE FROM degreeforpayment WHERE degreeCode  = '" . $_POST["degreeCode"] . "'";

        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            if ($dbCon->query($sql2) === TRUE) {
                logfiles($sql2);
                $dbCon->query($sql3);
                logfiles($sql3);

                $response = ['status' => 200, 'message' => 'Degree has Succesfully Deleted!'];
            } else {
                $response = ['status' => 400, 'message' => "Deleted Failed! Please Try Again."];
            }
        } else {
            $response = ['status' => 400, 'message' => "Library Id Deleted Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}



if (($_POST["action"] == "getAvailableBatches")) {
    $response = array();
    $sql = "";

    $sql = "SELECT * FROM batch WHERE degreeCode = '" . $_POST["degreeCode"] . "' and academicYear = '" . $_POST["academicYear"] . "';";
    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'degreeCode' => $row["degreeCode"],
                    'academicYear' => $row["academicYear"],
                    'batchNumber' => $row["batchNumber"],
                    'batchName' => $row["batchName"]
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


if (($_POST["action"] == "getFacult")) {
    $response = array();
    $sql = "";

    $sql = "SELECT * FROM faculty;";

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'universityCode' => $row["universityCode"],
                    'facultyCode' => $row["facultyCode"],
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


if (($_POST["action"] == "CreateDegree")) {

    $response = "";

    if ($_POST["universityCode"] != "" && $_POST["facultyCode"] != "" && $_POST["programmeTypeCode"] != "" && $_POST["degreeCode"] != "" && $_POST["degreeTitle"] != "" && $_POST["criteriaCodes"] != "") {

        $criteriaCodes = $_POST['criteriaCodes'];

        foreach ($criteriaCodes as $criteriaCode) {
            $sqlMaxcriteriaCode = "SELECT max(`criteriaCode`) AS maxCode FROM criteria";
            logfiles($sqlMaxcriteriaCode);

            $result = $dbCon->query($sqlMaxcriteriaCode);
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $maxCriteriaCode = $row['maxCode'];
                $numericPart = (int)substr($maxCriteriaCode, 1);
                $nextNumericPart = $numericPart + 1;
                $nextCriteriaCode = 'C' . str_pad($nextNumericPart, 9, '0', STR_PAD_LEFT);
                $sqlInsert = "INSERT INTO `criteria`(`criteriaCode`, `criteriaTitle`) VALUES ('" . $nextCriteriaCode . "','" . $criteriaCode['cretriaName'] . "')";
                if ($dbCon->query($sqlInsert) === TRUE) {
                    logfiles($sqlInsert);

                    $sql = " INSERT INTO degree (universityCode, facultyCode, departmentCode, programmeTypeCode, slql, exitslql, degreeCode, degreeTitle, duration, criteriaCode, medium, IncomeSourceCode) 
                             VALUES ( '" . $_POST["universityCode"] . "','" . $_POST["facultyCode"] . "','" . $_POST["departmentCode"] . "','" . $_POST["programmeTypeCode"] . "','" . $_POST["slql"] . "','" . $_POST["exitslql"] . "', '" . $_POST["degreeCode"] . "','" . $_POST["degreeTitle"] . "','" . $_POST["duration"] . "','" . $nextCriteriaCode . "','" . $_POST["medium"] . "','" . $_POST["IncomeSourceCode"] . "')";
                    $dbCon->query($sql);
                }
            }
        }

        $sql3 = " INSERT INTO degreeforpayment (universityCode, facultyCode, departmentCode, programmeTypeCode, degreeCode, degreeTitle, duration, medium) 
                             VALUES ( '" . $_POST["universityCode"] . "','" . $_POST["facultyCode"] . "','" . $_POST["departmentCode"] . "','" . $_POST["programmeTypeCode"] . "','" . $_POST["degreeCode"] . "','" . $_POST["degreeTitle"] . "','" . $_POST["duration"] . "','" . $_POST["medium"] . "')";
        $dbCon->query($sql3);
        logfiles($sql3);

        $sql2 = " INSERT INTO LibraryIdCode (LibProgrammeCode, LibDegreeCode, NewLibProgrammeCode, NewLibDegreeCode) VALUES ( '" . $_POST["LibProgrammeCode"] . "','" . $_POST["LibDegreeCode"] . "','" . $_POST["NewLibProgrammeCode"] . "','" . $_POST["NewLibDegreeCode"] . "')";

        // echo  $sql2;
        $response = "";
        if ($dbCon->query($sql2) === TRUE) {
            logfiles($sql2);

            $response = ['status' => 200, 'message' => 'Degree Succesfully Created!'];
        } else {
            $response = ['status' => 400, 'message' => "Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}



$dbCon->close();
