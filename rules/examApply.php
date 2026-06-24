<?php
include '../dbsetting.php';
include '../log.php';


$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}



if (($_POST["action"] == "FRREnroll")) {
    $response = "";
    $StudentNoJSON = $_POST['studentNo'];
    $subjectCodesJSON = $_POST['subjectCodes'];

    $StudentNoArray = json_decode($StudentNoJSON, true);
    $subjectCodesArray = json_decode($subjectCodesJSON, true);
    $totalItems = count($subjectCodesArray) * count($StudentNoArray);
    $error = 0;
    $success = 0;
    $failedDetails = "";
    $appliedDate = date("Y-m-d");
    if ($_POST["attempt"] == "F") {


        foreach ($StudentNoArray as $index2 => $StudentNo) {
            foreach ($subjectCodesArray as $index => $subjectCode) {
                $sql = "INSERT INTO studentselection (degreeCode   , achedamicYear , studentNo    ,semester   ,attempt    ,subjectCode ,appliedDate,createdBy)  VALUES";
                $sql .= "('" . $_POST['degreeCode'] . "','" . $_POST["academicYear"] . "', '" . $StudentNo . "', '" . $subjectCode['SubjectSemester'] . "', '" . $_POST["attempt"] . "', '" . $subjectCode['SubjectCode'] . "', '" . $appliedDate . "', '" . $_POST["createdBy"] . "');";
                // echo $sql;
                // die();
                try {
                    if ($dbCon->query($sql) === TRUE) {
                        $success++;
                        logfiles($sql);
                    } else {
                        $error++;
                        $failedDetails = $StudentNo . " - " . $subjectCode['SubjectCode'] . "<br>";
                    }
                } catch (Exception $e) {
                    $error++;
                    $failedDetails = $StudentNo . " - " . $subjectCode['SubjectCode'] . "<br>";
                }
            }
        }

        $response = ['status' => 200, 'message' => 'Data Inserted', 'success' => $success, 'failed' => $error, 'failedDetails' => $failedDetails];
    } else if ($_POST["attempt"] == "R") {

        foreach ($StudentNoArray as $index2 => $StudentNo) {
            foreach ($subjectCodesArray as $index => $subjectCode) {
                $ismedical = 0;
                $medicalApprove = 0;
                
                if($_POST["reason"] == "Medical/Other_Reasons"){
                    $ismedical =1;
                    $medicalApprove =1;
                }
                $sql = "INSERT INTO studentRepeatSelection (degreeCode, achedamicYear, studentNo ,semester,attempt ,subjectCode ,reason,appliedDate,createdBy,isMedical,medicalApprove) VALUES";
                $sql .= "('" . $_POST['degreeCode'] . "','" . $_POST["academicYear"] . "', '" . $StudentNo . "', '" . $subjectCode['SubjectSemester']  . "', '" . $_POST["attempt"] . "', '" . $subjectCode['SubjectCode'] . "', '" . $_POST["reason"] . "', '" . $appliedDate . "', '" . $_POST["createdBy"] . "', '" . $ismedical . "','" . $medicalApprove . "');";
                try {
                    if ($dbCon->query($sql) === TRUE) {
                        $success++;
                        logfiles($sql);
                    } else {
                        $error++;
                        $failedDetails = $StudentNo . " - " . $subjectCode['SubjectCode'] . "<br>";
                    }
                } catch (Exception $e) {
                    $error++;
                    $failedDetails = $StudentNo . " - " . $subjectCode['SubjectCode'] . "<br>";
                }
            }
        }
        $response = ['status' => 200, 'message' => 'Data Inserted', 'success' => $success, 'failed' => $error, 'failedDetails' => $failedDetails];
    } else if ($_POST["attempt"] == "RR") {


        foreach ($StudentNoArray as $index2 => $StudentNo) {
            foreach ($subjectCodesArray as $index => $subjectCode) {
                $sql = "INSERT INTO ReRepeatSelection (ReRep_degreeCode , ReRep_achedamicYear  , ReRep_studentNo ,ReRep_semester   ,ReRep_attempt ,ReRep_subjectCode ,ReRep_appliedDate,createdBy,re_repeat_attempt_time ) VALUES";
                $sql .= "('" . $_POST['degreeCode'] . "', '" . $_POST["academicYear"] . "', '" .  $StudentNo  . "', '" . $subjectCode['SubjectSemester'] . "', '" . $_POST["attempt"] . "', '" .  $subjectCode['SubjectCode'] . "', '" . $appliedDate . "', '" . $_POST["createdBy"] . "','" . $_POST["rerepeatAttempt"] . "');";
                try {
                    if ($dbCon->query($sql) === TRUE) {
                        $success++;
                        logfiles($sql);
                    } else {
                        $error++;
                        $failedDetails = $StudentNo . " - " . $subjectCode['SubjectCode'] . "<br>";
                    }
                } catch (Exception $e) {
                    $error++;
                    $failedDetails = $StudentNo . " - " . $subjectCode['SubjectCode'] . "<br>";
                }
            }
        }
        $response = ['status' => 200, 'message' => 'Data Inserted', 'success' => $success, 'failed' => $error, 'failedDetails' => $failedDetails];
    } else {
        $response = ['status' => 400, 'message' => 'invalid'];
    }
    echo json_encode($response);
}





if (($_POST["action"] == "FRRexamApply")) {
    $response = "";
    if ($_POST["attempt"] == "F") {

        if ($_POST["studentNo"] != "") {
            $subjectCodesJSON = $_POST['subjectCodes'];
            $subjectCodesArray = json_decode($subjectCodesJSON, true);
            $sql = "INSERT INTO studentselection (degreeCode   , achedamicYear , studentNo    ,semester   ,attempt    ,subjectCode ,appliedDate,createdBy)  VALUES";
            $totalItems = count($subjectCodesArray);
            foreach ($subjectCodesArray as $index => $subjectCode) {
                $sql .= "((SELECT degreeCode FROM degree WHERE degreeTitle LIKE '" . $_POST['degreeCode'] . "' LIMIT 1),'" . $_POST["achedamicYear"] . "', '" . $_POST["studentNo"] . "', '" . $_POST["semester"] . "', '" . $_POST["attempt"] . "', '" . $subjectCode . "', '" . $_POST["appliedDate"] . "', '" . $_POST["createdBy"] . "')";
                if ($index != $totalItems - 1) {
                    $sql .= ",";
                } else {
                    $sql .= ";";
                }
            }

            if ($dbCon->query($sql) === TRUE) {
                logfiles($sql);

                $response = ['status' => 200, 'message' => 'Data Inserted'];
            } else {
                $response = ['status' => 400, 'message' => 'Please try again later'];
            }
        } else {
            $response = ['status' => 400, 'message' => 'invalid'];
        }
    } else if ($_POST["attempt"] == "R") {
        if ($_POST["studentNo"] != "") {

            $subjectCodesJSON = $_POST['subjectCodes'];
            $subjectCodesArray = json_decode($subjectCodesJSON, true);
            $sql = "INSERT INTO studentRepeatSelection (degreeCode, achedamicYear, studentNo ,semester,attempt ,subjectCode ,reason,appliedDate,createdBy) VALUES";
            $totalItems = count($subjectCodesArray);
            foreach ($subjectCodesArray as $index => $subjectCode) {
                $sql .= "((SELECT degreeCode FROM degree WHERE degreeTitle LIKE '" . $_POST['degreeCode'] . "' LIMIT 1),'" . $_POST["achedamicYear"] . "', '" . $_POST["studentNo"] . "', '" . $_POST["semester"] . "', '" . $_POST["attempt"] . "', '" . $subjectCode . "', '" . $_POST["reason"] . "', '" . $_POST["appliedDate"] . "', '" . $_POST["createdBy"] . "')";
                if ($index != $totalItems - 1) {
                    $sql .= ",";
                } else {
                    $sql .= ";";
                }
            }
            // echo $sql;
            if ($dbCon->query($sql) === TRUE) {
                logfiles($sql);

                $response = ['status' => 200, 'message' => 'Data Inserted'];
            } else {
                $response = ['status' => 400, 'message' => 'Please try again later'];
            }
        } else {
            $response = ['status' => 400, 'message' => 'invalid'];
        }
    } else if ($_POST["attempt"] == "RR") {
        if ($_POST["studentNo"] != "") {

            $subjectCodesJSON = $_POST['subjectCodes'];
            $subjectCodesArray = json_decode($subjectCodesJSON, true);
            $sql = "INSERT INTO ReRepeatSelection (ReRep_degreeCode , ReRep_achedamicYear  , ReRep_studentNo ,ReRep_semester   ,ReRep_attempt ,ReRep_subjectCode ,ReRep_appliedDate,createdBy) VALUES";
            $totalItems = count($subjectCodesArray);
            foreach ($subjectCodesArray as $index => $subjectCode) {
                $sql .= "((SELECT degreeCode FROM degree WHERE degreeTitle LIKE '" . $_POST['degreeCode'] . "' LIMIT 1),'" . $_POST["achedamicYear"] . "', '" . $_POST["studentNo"] . "', '" . $_POST["semester"] . "', '" . $_POST["attempt"] . "', '" . $subjectCode . "', '" . $_POST["appliedDate"] . "', '" . $_POST["createdBy"] . "')";
                if ($index != $totalItems - 1) {
                    $sql .= ",";
                } else {
                    $sql .= ";";
                }
            }

            if ($dbCon->query($sql) === TRUE) {
                logfiles($sql);

                $response = ['status' => 200, 'message' => 'Data Inserted'];
            } else {
                $response = ['status' => 400, 'message' => 'Please try again later'];
            }
        } else {
            $response = ['status' => 400, 'message' => 'invalid'];
        }
    } else {
        $response = ['status' => 400, 'message' => 'invalid'];
    }
    echo json_encode($response);
}



if (($_POST["action"] == "checkAlreadyApply") || ($_POST["action"] == "getAppliedSubject")) {
    $sqlCheckAlreadyApplyed = "";
    if ($_POST["attempt"] == "F") {
        $sql = "SELECT
                                     degreeCode as degreeCode,
                                     achedamicYear  as achedamicYear ,
                                     studentNo  as studentNo ,
                                     semester as semester,
                                     attempt  as attempt ,
                                     subjectCode  as subjectCode ,
                                     appliedDate  as appliedDate ,
                                     createdBy  as createdBy
                                    FROM
                                        studentselection AS t1            
                                    WHERE 
                                        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
                                        t1.degreeCode = (
                                            SELECT
                                                degreeCode
                                            FROM
                                                degree
                                            WHERE
                                                degreeTitle LIKE '" . $_POST['degreeCode'] . "'
                                            LIMIT 1
                                        ) AND
                                        semester = '" . $_POST["semester"] . "' AND
                                        studentNo = '" . $_POST["studentNo"] . "';";
    } else if ($_POST["attempt"] == "R") {
        $sql = "SELECT 
                                    degreeCode  as degreeCode,
                                    achedamicYear   as achedamicYear ,
                                    studentNo   as studentNo ,
                                    semester as semester,
                                    attempt   as attempt ,
                                    subjectCode   as subjectCode ,
                                    appliedDate  as appliedDate ,
                                    reason  as reason,
                                    createdBy  as createdBy
                                    FROM
                                    studentRepeatSelection AS t1            
                                    WHERE 
                                        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
                                        t1.degreeCode = (
                                            SELECT
                                                degreeCode
                                            FROM
                                                degree
                                            WHERE
                                                degreeTitle LIKE '" . $_POST['degreeCode'] . "'
                                            LIMIT 1
                                        ) AND
                                        semester = '" . $_POST["semester"] . "' AND
                                        studentNo = '" . $_POST["studentNo"] . "';";
    } else if ($_POST["attempt"] == "RR") {
        $sql = "SELECT
                                    ReRep_degreeCode as degreeCode,
                                    ReRep_achedamicYear as achedamicYear ,
                                    ReRep_studentNo  as studentNo ,
                                    ReRep_semester as semester,
                                    ReRep_attempt as attempt,
                                    ReRep_subjectCode as subjectCode,
                                    ReRep_appliedDate as appliedDate,
                                    createdBy as createdBy
                                    FROM
                                    ReRepeatSelection AS t1            
                                    WHERE 
                                        t1.ReRep_achedamicYear = '" . $_POST["achademicYear"] . "' AND
                                        t1.ReRep_degreeCode = (
                                            SELECT
                                                degreeCode
                                            FROM
                                                degree
                                            WHERE
                                                degreeTitle LIKE '" . $_POST['degreeCode'] . "'
                                            LIMIT 1
                                        ) AND
                                        ReRep_semester = '" . $_POST["semester"] . "' AND
                                        ReRep_studentNo = '" . $_POST["studentNo"] . "';";
    }


    if (($_POST["action"] == "checkAlreadyApply")) {
        $response = "";
    }
    if (($_POST["action"] == "getAppliedSubject")) {
        $response = array();
    }
    logfiles($sql);

    $result = $dbCon->query($sql);

    if (($_POST["action"] == "checkAlreadyApply")) {
        if ($result) {
            $response = ['status' => 200, 'rows' =>  $result->num_rows];
        } else {
            $response = ['status' => 400, 'rows' =>  'invalid'];
        }
    }




    if (($_POST["action"] == "getAppliedSubject")) {
        if ($result) {
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $responseData =  array(
                        'status' => 200,
                        'degreeCode' => $row["degreeCode"],
                        'achedamicYear' => $row["achedamicYear"],
                        'studentNo' => $row["studentNo"],
                        'semester' => $row["semester"],
                        'attempt' => $row["attempt"],
                        'subjectCode' => $row["subjectCode"],
                        'appliedDate' => $row["appliedDate"]
                    );
                    array_push($response, $responseData);
                }
            } else {
                $responseData = array('status' => 400, 'message' => 'Not Available');
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Not Available');
            array_push($response, $responseData);
        }
    }



    echo json_encode($response);
}



if (($_POST["action"] == "getSubject")) {
    $response = array();
    $sql = "";
    $sql = "SELECT DISTINCT
                t1.degreeCode AS degreeCode,
                t1.academicYear AS academicYear,
                t1.subjectSemester AS subjectSemester,
                t1.subjectCode AS subjectCode,
                t1.subjectTitle AS subjectTitle,
                t1.status AS sstatus,
                t1.credits AS credits
            FROM
                subject AS t1            
            WHERE 
                t1.academicYear = '" . $_POST["achademicYear"] . "' AND
                t1.degreeCode = (
                    SELECT
                        degreeCode
                    FROM
                        degree
                    WHERE
                        degreeTitle LIKE '" . $_POST['degreeCode'] . "'
                    LIMIT 1
                ) AND
                subjectSemester = '" . $_POST["semester"] . "'
            ORDER BY t1.subjectCode ASC;";

    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'degreeCode' => $row["degreeCode"],
                    'academicYear' => $row["academicYear"],
                    'subjectSemester' => $row["subjectSemester"],
                    'subjectCode' => $row["subjectCode"],
                    'subjectTitle' => $row["subjectTitle"],
                    'sstatus' => $row["sstatus"],
                    'credits' => $row["credits"],
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Not Available');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Not Available');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "DELexamApply")) {
    $response = "";
    if ($_POST["attempt"] == "F") {

        if ($_POST["studentNo"] != "") {
            $sql = "DELETE FROM studentselection WHERE 
                            degreeCode = (SELECT degreeCode FROM degree WHERE degreeTitle LIKE '" . $_POST['degreeCode'] . "' LIMIT 1) AND
                            achedamicYear  = '" . $_POST["achedamicYear"] . "' AND
                            studentNo = '" . $_POST["studentNo"] . "' AND
                            semester = '" . $_POST["semester"] . "'";
            if ($dbCon->query($sql) === TRUE) {
                logfiles($sql);

                $response = ['status' => 200, 'message' => 'Data Deleted'];
            } else {
                $response = ['status' => 400, 'message' => 'Please try again later'];
            }
        } else {
            $response = ['status' => 400, 'message' => 'invalid'];
        }
    } else if ($_POST["attempt"] == "R") {
        if ($_POST["studentNo"] != "") {
            $sql = "DELETE FROM studentRepeatSelection WHERE
                            degreeCode  = (SELECT degreeCode FROM degree WHERE degreeTitle LIKE '" . $_POST['degreeCode'] . "' LIMIT 1) AND
                            achedamicYear   = '" . $_POST["achedamicYear"] . "' AND
                            studentNo  = '" . $_POST["studentNo"] . "' AND
                            semester = '" . $_POST["semester"] . "'";

            if ($dbCon->query($sql) === TRUE) {
                logfiles($sql);

                $response = ['status' => 200, 'message' => 'Data Deleted'];
            } else {
                $response = ['status' => 400, 'message' => 'Please try again later'];
            }
        } else {
            $response = ['status' => 400, 'message' => 'invalid'];
        }
    } else if ($_POST["attempt"] == "RR") {
        if ($_POST["studentNo"] != "") {
            $sql = "DELETE FROM ReRepeatSelection WHERE
                            ReRep_degreeCode = (SELECT degreeCode FROM degree WHERE degreeTitle LIKE '" . $_POST['degreeCode'] . "' LIMIT 1) AND
                            ReRep_achedamicYear = '" . $_POST["achedamicYear"] . "' AND
                            ReRep_studentNo = '" . $_POST["studentNo"] . "' AND
                            ReRep_semester = '" . $_POST["semester"] . "'";

            if ($dbCon->query($sql) === TRUE) {
                logfiles($sql);

                $response = ['status' => 200, 'message' => 'Data Deleted'];
            } else {
                $response = ['status' => 400, 'message' => 'Please try again later'];
            }
        } else {
            $response = ['status' => 400, 'message' => 'invalid'];
        }
    } else {
        $response = ['status' => 400, 'message' => 'invalid'];
    }
    echo json_encode($response);
}


$dbCon->close();
