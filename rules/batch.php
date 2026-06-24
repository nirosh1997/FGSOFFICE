<?php
include '../dbsetting.php';
include '../log.php';

$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}

if (($_POST["action"] == "checkBatchAlreadyhave")) {
    $response = array();
    $sql = "";

    $sql = "SELECT * FROM batch WHERE degreeCode = '" . $_POST["degreeCode"] . "' AND academicYear  = '" . $_POST["academicYear"] . "' AND batchNumber  = '" . $_POST["batchNumber"] . "';";
    // echo $sql;

    $result = $dbCon->query($sql);

    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Data is not availbale');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "getIndividualBatchUsingDegreeName")) {
    $response = array();
    $sql = "";

    $sql = "SELECT * FROM batch WHERE degreeCode = '" . $_POST["degreeCode"] . "' AND academicYear  = '" . $_POST["academicYear"] . "';";
    // echo $sql;
    $result = $dbCon->query($sql);

    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'degreeCode' => $row["degreeCode"],
                    'academicYear' => $row["academicYear"],
                    'courseFee' => $row["courseFee"],
                    'libraryFee' => $row["libraryFee"],
                    'coursecommence' => $row["coursecommence"],
                    'courseend' => $row["courseend"],
                    'applicationstarts' => $row["applicationstarts"],
                    'applicationclose' => $row["applicationclose"],
                    'batchName' => $row["batchName"],
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Data is not availbale');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}




if (($_POST["action"] == "getBatch")) {
    $response = array();
    $sql = "";

    $sql = "SELECT b.*, d.degreeTitle as degreeTitle FROM batch b LEFT JOIN degree d ON b.degreeCode = d.degreeCode GROUP BY b.degreeCode,b.academicYear,b.batchNumber ;";
    // echo $sql;
    $result = $dbCon->query($sql);

    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'degreeCode' => $row["degreeCode"],
                    'academicYear' => $row["academicYear"],
                    'courseFee' => $row["courseFee"],
                    'libraryFee' => $row["libraryFee"],
                    'coursecommence' => $row["coursecommence"],
                    'applicationstarts' => $row["applicationstarts"],
                    'applicationclose' => $row["applicationclose"],
                    'degreeTitle' => $row["degreeTitle"],
                    'batchNumber' => $row["batchNumber"],
                    'batchName' => $row["batchName"],
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

if (($_POST["action"] == "getDataForBatchUpdate")) {
    $response = array();
    $sql = "";
    $batchNumebr = 1;
    if (isset($_POST["batchNumber"]) && $_POST["batchNumber"] != "") {
        $batchNumebr = $_POST["batchNumber"];
    }

    $sql = "SELECT b.*, d.degreeTitle as degreeTitle ,f.facultyTitle as facultyTitle,d.IncomeSourceCode as dIncomeSourceCode 
    FROM batch b 
    LEFT JOIN degree d ON b.degreeCode = d.degreeCode 
    LEFT JOIN faculty f ON d.facultyCode = f.facultyCode 
    WHERE d.degreeCode = '" . $_POST["degreeCode"] . "'  and b.academicYear = '" . $_POST["academicYear"] . "' and b.batchNumber = '" . $batchNumebr . "' GROUP BY b.degreeCode,b.academicYear ;";
    // echo $sql;
    $result = $dbCon->query($sql);

    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'degreeCode' => $row["degreeCode"],
                    'academicYear' => $row["academicYear"],
                    'batchNumber' => $row["batchNumber"],
                    'courseFee' => $row["courseFee"],
                    'libraryFee' => $row["libraryFee"],
                    'coursecommence' => $row["coursecommence"],
                    'courseend' => $row["courseend"],
                    'applicationstarts' => $row["applicationstarts"],
                    'applicationclose' => $row["applicationclose"],
                    'batchName' => $row["batchName"],
                    'medium' => $row["medium"],
                    'credits_complete' => $row["credits_complete"],
                    'pass_gpa' => $row["pass_gpa"],
                    'degreeTitle' => $row["degreeTitle"],
                    'facultyTitle' => $row["facultyTitle"],
                    'dIncomeSourceCode' => $row["dIncomeSourceCode"],
                    'no_of_extension' => $row["no_of_extension"],
                    'extension_to' => date('Y-m-d', is_numeric($row["extension_to"]) ? $row["extension_to"] : strtotime($row["extension_to"])),
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

if (($_POST["action"] == "getIncomeCatDataForBatchUpdate")) {
    $response = array();
    $sql = "";

    $sql = "SELECT icd.*,ic.IncomeCategoryTitle as IncomeCategoryTitle, b.batchNumber as batchNumber FROM 
    (select * from batch WHERE degreeCode = '" . $_POST["degreeCode"] . "' and  academicYear = '" . $_POST["academicYear"] . "' and  batchNumber = '" . $_POST["batchNumber"] . "' group by batchNumber) b 
    LEFT JOIN (select * from degree WHERE degreeCode = '" . $_POST["degreeCode"] . "' group by degreeCode) d 
    ON d.degreeCode = b.degreeCode
    LEFT JOIN IncomeCategoryDetails icd ON d.IncomeSourceCode = icd.IncomeSourceCode 
    LEFT JOIN IncomeCategory ic ON ic.IncomeCategoryCode = icd.IncomeCategoryCode 
    WHERE icd.achedamicYear = '" . $_POST["academicYear"] . "' and b.batchNumber = '" . $_POST["batchNumber"] . "' ORDER BY `icd`.`IncomeCategoryCode` ASC;";
    // echo $sql;
    $result = $dbCon->query($sql);

    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'IncomeCategoryTitle' => $row["IncomeCategoryTitle"],
                    'IncomeSourceCode' => $row["IncomeSourceCode"],
                    'batchNumber' => $row["batchNumber"],
                    'achedamicYear' => $row["achedamicYear"],
                    'IncomeCategoryCode' => $row["IncomeCategoryCode"],
                    'IncomeCategoryValue' => $row["IncomeCategoryValue"],
                    'Currency' => $row["Currency"],
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





if (($_POST["action"] == "CreateBatch")) {

    $response = "";

    if ($_POST["degreeCode"] != "" && $_POST["academicYear"] != "") {


        if (isset($_POST['incomeSource'])) {
            $incomeSources = $_POST['incomeSource'];
            foreach ($incomeSources as $incomeSource) {

                $sql = " INSERT INTO IncomeCategoryDetails (IncomeSourceCode, achedamicYear, batchNumber, IncomeCategoryCode, IncomeCategoryValue, Currency,payment_deadline) 
             VALUES ( (Select IncomeSourceCode FROM degree WHERE degreeCode = '" . $_POST["degreeCode"] . "' LIMIT 1) ,'" . $_POST["academicYear"] . "','" . $_POST["batchNumber"] . "','" . $incomeSource['category'] . "','" . $incomeSource['amount'] . "','LKR','" . $incomeSource['deadline'] . "')";
                $dbCon->query($sql);
                logfiles($sql);
            }
        }


        $sql2 = " INSERT INTO batch (degreeCode, academicYear,batchNumber, courseFee, libraryFee, coursecommence, applicationstarts, applicationclose, courseend, batchName, medium,credits_complete,pass_gpa) 
                             VALUES ( '" . $_POST["degreeCode"] . "','" . $_POST["academicYear"] . "','" . $_POST["batchNumber"] . "','" . $_POST["courseFee"] . "','" . $_POST["libraryFee"] . "','" . $_POST["coursecommence"] . "','" . $_POST["applicationstarts"] . "','" . $_POST["applicationclose"] . "','" . $_POST["courseend"] . "','" . $_POST["batchName"] . "','" . $_POST["mediums"] . "','" . $_POST["credits_complete"] . "','" . $_POST["pass_gpa"] . "')";


        // echo  $sql2;
        // die();
        $response = "";
        if ($dbCon->query($sql2) === TRUE) {
            logfiles($sql2);

            $response = ['status' => 200, 'message' => 'Batch Succesfully Created!'];
        } else {
            $response = ['status' => 400, 'message' => "Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}


if (($_POST["action"] == "deleteBatch")) {

    $response = "";

    if ($_POST["degreeCode"] != "" && $_POST["academicYear"] != "") {

        $sql = " DELETE FROM IncomeCategoryDetails WHERE IncomeSourceCode  = (Select IncomeSourceCode FROM degree WHERE degreeCode = '" . $_POST["degreeCode"] . "' LIMIT 1) and achedamicYear  = '" . $_POST["academicYear"] . "' and batchNumber  = '" . $_POST["batchNumber"] . "'";

        $sql2 = " DELETE FROM batch WHERE degreeCode  = '" . $_POST["degreeCode"] . "' and academicYear  = '" . $_POST["academicYear"] . "' and batchNumber  = '" . $_POST["batchNumber"] . "'";

        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            if ($dbCon->query($sql2) === TRUE) {
                logfiles($sql2);

                $response = ['status' => 200, 'message' => 'Batch has Succesfully Deleted!'];
            } else {
                $response = ['status' => 400, 'message' => "Deleted Failed! Please Try Again."];
            }
        } else {
            $response = ['status' => 400, 'message' => "Income category Details Deleted Failed! Please Try Again."];
        }
        echo json_encode($response);
    }
}

if (($_POST["action"] == "data4UpdateBatchStartEnd")) {
    $sql = " UPDATE batch SET coursecommence = '" . $_POST["startDate"] . "',courseend = '" . $_POST["endDate"] . "' WHERE degreeCode  = '" . $_POST["degreeCode"] . "' and academicYear  = '" . $_POST["academicYear"] . "'";
    // print_r($sql);
    $response = "";
    if ($dbCon->query($sql) === TRUE) {
        logfiles($sql);

        $response = ['status' => 200, 'message' => 'Succesfully Updated!'];
    } else {
        $response = ['status' => 400, 'message' => "Update Failed! Please Try Again."];
    }
    echo json_encode($response);
}




$dbCon->close();
