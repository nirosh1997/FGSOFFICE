<?php
include '../dbsetting.php';
include '../log.php';

$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}

if (($_POST["action"] == "getApplicant")) {
    $response = "";
    $sql = "SELECT * FROM applicantspersonal WHERE applicationNo = '" . $_POST["applicationNo"] . "' LIMIT 1";

    logfiles($sql);
    $result = $dbCon->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $response = [
                'status' => 200,
                'message' => 'Valid Application No',
                'universityCode' => $row["universityCode"],
                'facultyCode' => $row["facultyCode"],
                'programmeTypeCode' => $row["programmeTypeCode"],
                'degreeCode' => $row["degreeCode"],
                'applicationNo ' => $row["applicationNo"],
                'temporaryNo' => $row["temporaryNo"],
                'studentNIC' => $row["studentNIC"],
                'studentName' => $row["studentName"],
                'studentPersonalTitle' => $row["studentPersonalTitle"],
                'studentInitial' => $row["studentInitial"],
                'studentDateofbirth' => $row["studentDateofbirth"],
                'studentGender' => $row["studentGender"],
                'studentNationality' => $row["studentNationality"],
                'studentCitizenship' => $row["studentCitizenship"],
                'studentEmployment' => $row["studentEmployment"],
                'studentPermanentAddress' => $row["studentPermanentAddress"],
                'studentOfficeAddress' => $row["studentOfficeAddress"],
                'correspondence' => $row["correspondence"],
                'studentContactLan' => $row["studentContactLan"],
                'studentContactMobile' => $row["studentContactMobile"],
                'studentContactEmail' => $row["studentContactEmail"],
                'studentContactEmail2' => $row["studentContactEmail2"],
                'selected' => $row["selected"],
                'notes' => $row["notes"],
                'achedamicYear' => $row["achedamicYear"],
                'medium' => $row["medium"],
                'pin' => $row["pin"],
                'applicationCode' => $row["applicationCode"],
                'countryRegion' => $row["countryRegion"],
                'streamName' => $row["streamName"],
                'Main_Subject' => $row["Main_Subject"],
                'Study_Field' => $row["Study_Field"],
                'Research_Title' => $row["Research_Title"],
                'projectGrant' => $row["projectGrant"],
                'projectGrantDetails' => $row["projectGrantDetails"],
                'projectFinanced' => $row["projectFinanced"],
                'selectionCategory' => $row["selectionCategory"],
                'studentDesignation' => $row["studentDesignation"],
                'sendToDep' => $row["sendToDep"],
                'selectedFromGraduate' => $row["selectedFromGraduate"],
                'selectedFromProfessional' => $row["selectedFromProfessional"],
                'selectedFromPendingQulification' => $row["selectedFromPendingQulification"],
                'selectedFromSpecialApprove' => $row["selectedFromSpecialApprove"]
            ];
        }
    } else {
        $response = ['status' => 400, 'message' => 'Invalid Application No'];
    }
    echo json_encode($response);
}


if (($_POST["action"] == "saveApplicant")) {
    $response = "";
    if ($_POST["applicationNo"] != "" && $_POST["degreeCode"] != "" && $_POST["programmeTypeCode"] != "" && $_POST["medium"] != "") {
        $sql = " UPDATE applicantspersonal SET degreeCode = '" . $_POST["degreeCode"] . "',programmeTypeCode = '" . $_POST["programmeTypeCode"] . "',medium = '" . $_POST["medium"] . "',transfered = '1'   WHERE applicationNo = '" . $_POST["applicationNo"] . "'";
        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);
            $recordCount = $dbCon->affected_rows;
            $response = ['status' => 200, 'message' => 'Applicant transfer was successful.'];
        } else {
            $response = ['status' => 400, 'message' => 'An error occurred during the applicant transfer. Please try again.'];;
        }
        echo json_encode($response);
    }
}

$dbCon->close();
