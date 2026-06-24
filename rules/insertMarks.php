<?php
include '../dbsetting.php';
include '../log.php';
include 'mark.php';


$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}


if (($_POST["action"] == "insertFirstTimerResult")) {
    if ($_POST["interface"] == "uploadMarksListNew") {
        if (($_POST["Examiner1"] == "" && $_POST["Examiner2"] == "") || (strtoupper($_POST["Examiner1"]) == "AB" && strtoupper($_POST["Examiner2"]) == "AB")) {
            $_POST["Examiner1"] = "125";
            $_POST["Examiner2"] = "125";
            $_POST["Marks"] = "125";
            $_POST["Grade"] = "-";
        } else if (($_POST["Examiner1"] != "" && $_POST["Examiner2"] != "")) {
            $tmpMarks = intval($_POST["Examiner1"]) + intval($_POST["Examiner2"]);
            $tmpMarks =  round($tmpMarks / 2);
            $_POST["Marks"] = $tmpMarks;
            if ($_POST["LateSub"] == 1) {
                lateSubmission($tmpMarks);
            } else {
                firstTimersGrade($tmpMarks);
            }
        }
        $response = "";
        if ($_POST["SudentNo"] != "") {

            $sqlGu = "SELECT * From studentselection where studentNo = '" . $_POST["SudentNo"] . "' and subjectCode = '" . $_POST["subjectName"] . "' and  holdForViolation =1";
            // logfiles($sqlGu);

            $resultGu = $dbCon->query($sqlGu);
            $guily = 0;
            if ($resultGu) {
                if ($resultGu->num_rows > 0) {
                    $guily = 1;
                }
            }

            $sql_delete = "DELETE FROM examresults where SudentNo ='" . $_POST["SudentNo"] . "' AND achedamicYear ='" . $_POST["achedamicYear"] . "' AND subjectName ='" . $_POST["subjectName"] . "'";
            logfiles($sql_delete);

            $dbCon->query($sql_delete);
            if ($guily == 1) {
                $_POST["Status"] = "H";
            }
            $sql = "INSERT INTO examresults (SudentNo, StudentName, degreeCode ,achedamicYear ,subjectName ,Grade,Examiner1,Examiner2,Marks,Status,guilty,latesubmission,effective_date) 
            VALUES ('" . $_POST["SudentNo"] . "', '" . $_POST["StudentName"] . "', '" . $_POST["degreeCode"] . "', '" . $_POST["achedamicYear"] . "', '" . $_POST["subjectName"] . "', '" . $_POST["Grade"] . "', '" . $_POST["Examiner1"] . "', '" . $_POST["Examiner2"] . "', '" . $_POST["Marks"] . "', '" . $_POST["Status"] . "', '" . $_POST["guily"] . "', '" . $_POST["LateSub"] . "', '" . $_POST["effectiveDate"] . "')";
            if ($dbCon->query($sql) === TRUE) {
                logfiles($sql);

                $response = ['status' => 'success', 'message' => 'Data Inserted'];
            } else {
                $response = ['status' => 'failed', 'message' => $sql];
            }
        } else {
            $response = ['status' => 'failed', 'message' => 'invalid'];
        }

        echo json_encode($response);
    }
}


if (($_POST["action"] == "insertRepeatersResult")) {
    if ($_POST["interface"] == "uploadMarksListNew") {
        if (($_POST["Examiner1"] == "" && $_POST["Examiner2"] == "") || (strtoupper($_POST["Examiner1"]) == "AB" && strtoupper($_POST["Examiner2"]) == "AB")) {
            $_POST["Examiner1"] = "125";
            $_POST["Examiner2"] = "125";
            $_POST["Marks"] = "125";
            $_POST["Grade"] = "-";
        } else if (($_POST["Examiner1"] != "" && $_POST["Examiner2"] != "" && $_POST["Reason"] == "R")) {
            $tmpMarks = intval($_POST["Examiner1"]) + intval($_POST["Examiner2"]);
            $tmpMarks =  round($tmpMarks / 2);
            $_POST["Marks"] = $tmpMarks;
            repetersGrade_repeat($tmpMarks);
        } else if (($_POST["Examiner1"] != "" && $_POST["Examiner2"] != "" && $_POST["Reason"] == "M")) {
            $tmpMarks = intval($_POST["Examiner1"]) + intval($_POST["Examiner2"]);
            $tmpMarks =  round($tmpMarks / 2);
            $_POST["Marks"] = $tmpMarks;
            if ($_POST["LateSub"] == 1) {
                lateSubmission($tmpMarks);
            } else {
                repetersGrade_medical($tmpMarks);
            }
        }
        $response = "";
        if ($_POST["SudentNo"] != "") {
            $sqlGu = "SELECT * From studentRepeatSelection where studentNo  = '" . $_POST["SudentNo"] . "' and subjectCode  = '" . $_POST["subjectName"] . "' and  holdForViolation =1";
            $resultGu = $dbCon->query($sqlGu);
            // logfiles($sqlGu);

            $guily = 0;
            if ($resultGu) {
                if ($resultGu->num_rows > 0) {
                    $guily = 1;
                }
            }

            $sql_delete = "DELETE FROM rep_examresults where rep_SudentNo ='" . $_POST["SudentNo"] . "' AND rep_achedamicYear ='" . $_POST["achedamicYear"] . "' AND rep_subjectName ='" . $_POST["subjectName"] . "'";
            logfiles($sql_delete);

            $dbCon->query($sql_delete);

            if ($guily == 1) {
                $_POST["Status"] = "H";
            }

            $sql = "INSERT INTO rep_examresults (rep_SudentNo , rep_StudentName, rep_degreeCode  ,rep_achedamicYear  ,rep_subjectName  ,rep_Grade,rep_Examiner1,rep_Examiner2,rep_Marks,rep_Status,rep_Reason,latesubmission,effective_date) 
            VALUES ('" . $_POST["SudentNo"] . "', '" . $_POST["StudentName"] . "', '" . $_POST["degreeCode"] . "', '" . $_POST["achedamicYear"] . "', '" . $_POST["subjectName"] . "', '" . $_POST["Grade"] . "', '" . $_POST["Examiner1"] . "', '" . $_POST["Examiner2"] . "', '" . $_POST["Marks"] . "', '" . $_POST["Status"] . "', '" . $_POST["Reason"] . "', '" . $_POST["LateSub"] . "', '" . $_POST["effectiveDate"] . "')";
            //    echo $sql;
            //    die();
            if ($dbCon->query($sql) === TRUE) {
                logfiles($sql);

                $response = ['status' => 'success', 'message' => 'Data Inserted'];
            } else {
                // echo $sql;
                $response = ['status' => 'failed', 'message' => $sql];
            }
        } else {
            $response = ['status' => 'failed', 'message' => 'invalid'];
        }

        echo json_encode($response);
    }
}


if (($_POST["action"] == "insertReRepeatersResult")) {
    if ($_POST["interface"] == "uploadMarksListNew") {
        if (($_POST["Examiner1"] == "" && $_POST["Examiner2"] == "") || (strtoupper($_POST["Examiner1"]) == "AB" && strtoupper($_POST["Examiner2"]) == "AB")) {
            $_POST["Examiner1"] = "125";
            $_POST["Examiner2"] = "125";
            $_POST["Marks"] = "125";
            $_POST["Grade"] = "-";
        } else if (($_POST["Examiner1"] != "" && $_POST["Examiner2"] != "")) {
            $tmpMarks = intval($_POST["Examiner1"]) + intval($_POST["Examiner2"]);
            $tmpMarks =  round($tmpMarks / 2);
            $_POST["Marks"] = $tmpMarks;
            if ($_POST["LateSub"] == 1) {
                lateSubmission($tmpMarks);
            } else {
                re_repetersGrade($tmpMarks);
            }
        }
        $response = "";
        if ($_POST["SudentNo"] != "") {
            $sqlGu = "SELECT * From ReRepeatSelection where ReRep_studentNo  = '" . $_POST["SudentNo"] . "' and ReRep_subjectCode  = '" . $_POST["subjectName"] . "' and  holdForViolation =1";

            // $sqlGu = "SELECT * as gcount From st_violation_final where guilty =1 and subjectCode = '" . $_POST["subjectName"] . "'";
            // logfiles($sqlGu);

            $resultGu = $dbCon->query($sqlGu);
            $guily = 0;
            if ($resultGu) {
                if ($result->num_rows > 0) {
                    $guily = 1;
                }
            }

            $sql_delete = "DELETE FROM ReRepeat_examresults where 
            ReRep_SudentNo ='" . $_POST["SudentNo"] . "' AND 
            ReRep_achedamicYear ='" . $_POST["achedamicYear"] . "' AND 
            re_repeat_attempt_time ='" . $_POST["re_repeat_attempt_time"] . "' AND 
            ReRep_subjectName ='" . $_POST["subjectName"] . "'";
            logfiles($sql_delete);

            $dbCon->query($sql_delete);
            // echo $sql_delete;
            // die();
            $sql = "INSERT INTO ReRepeat_examresults (ReRep_SudentNo  , ReRep_StudentName, ReRep_degreeCode   ,ReRep_achedamicYear   ,ReRep_subjectName   ,ReRep_Grade,ReRep_Examiner1,ReRep_Examiner2,ReRep_Marks,ReRep_Status,guilty,re_repeat_attempt_time,latesubmission,effective_date) 
            VALUES ('" . $_POST["SudentNo"] . "', '" . $_POST["StudentName"] . "', '" . $_POST["degreeCode"] . "', '" . $_POST["achedamicYear"] . "', '" . $_POST["subjectName"] . "', '" . $_POST["Grade"] . "', '" . $_POST["Examiner1"] . "', '" . $_POST["Examiner2"] . "', '" . $_POST["Marks"] . "', '" . $_POST["Status"] . "', '" . $guily . "','" . $_POST["re_repeat_attempt_time"] . "' , '" . $_POST["LateSub"] . "', '" . $_POST["effectiveDate"] . "')";
            // echo $sql;
            // die();
            if ($guily == 1) {
                $_POST["Status"] = "H";
            }
            if ($dbCon->query($sql) === TRUE) {
                logfiles($sql);

                $response = ['status' => 'success', 'message' => 'Data Inserted'];
            } else {
                $response = ['status' => 'failed', 'message' => $sql];
            }
        } else {
            $response = ['status' => 'failed', 'message' => 'invalid'];
        }

        echo json_encode($response);
    }
}


if (($_POST["action"] == "ReleaseResult")) {

    $response = "";

    if ($_POST["degreeCode"] != "" && $_POST["achedamicYear"] != "" && $_POST["subjectName"] != "" && $_POST["attempt"] != "") {
        $sql = "";
        $sql2 = "";
        if ($_POST["attempt"] == "F") {
            $sql = " UPDATE examresults SET Status = '0' WHERE degreeCode = '" . $_POST["degreeCode"] . "' and  achedamicYear = '" . $_POST["achedamicYear"] . "' and  subjectName = '" . $_POST["subjectName"] . "' and Status=1";
            $sql2 = " SELECT s.* FROM  examresults r LEFT JOIN student s ON r.SudentNo = s.studentNo WHERE r.degreeCode = '" . $_POST["degreeCode"] . "' and  r.achedamicYear = '" . $_POST["achedamicYear"] . "' and  r.subjectName = '" . $_POST["subjectName"] . "' and r.Status=1";
        } else if ($_POST["attempt"] == "R") {
            $sql = "UPDATE rep_examresults SET rep_Status = '0' WHERE rep_degreeCode = '" . $_POST["degreeCode"] . "' and  rep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  rep_subjectName = '" . $_POST["subjectName"] . "' and rep_Status=1";
            $sql2 = "SELECT s.* FROM rep_examresults r LEFT JOIN student s ON r.rep_SudentNo = s.studentNo WHERE r.rep_degreeCode = '" . $_POST["degreeCode"] . "' and  r.rep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  r.rep_subjectName = '" . $_POST["subjectName"] . "' and r.rep_Status=1";
        } else if ($_POST["attempt"] == "RR") {
            $sql = "UPDATE ReRepeat_examresults SET ReRep_Status = '0' WHERE ReRep_degreeCode = '" . $_POST["degreeCode"] . "' and  ReRep_achedamicYear = '" . $_POST["achedamicYear"] . "' 
            and  ReRep_subjectName = '" . $_POST["subjectName"] . "'  and  re_repeat_attempt_time = '" . $_POST["re_repeat_attempt_time"] . "' and ReRep_Status=1";
            $sql2 = "SELECT s.* FROM ReRepeat_examresults r LEFT JOIN student s ON r.ReRep_SudentNo = s.studentNo WHERE r.ReRep_degreeCode = '" . $_POST["degreeCode"] . "' and  r.ReRep_achedamicYear = '" . $_POST["achedamicYear"] . "' 
            and  r.ReRep_subjectName = '" . $_POST["subjectName"] . "'  and  r.re_repeat_attempt_time = '" . $_POST["re_repeat_attempt_time"] . "' and r.ReRep_Status=1";
        }

        $response2 = [];
        // logfiles($sql2);
        // echo $sql2;
        // die();
        $result = $dbCon->query($sql2);
        if ($result) {
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $responseData =  array(
                        'status' => 200,
                        'StudentNo' => $row["studentNo"],
                        'StudentName' => $row["studentName"],
                        'studentContactMobile' => $row["studentContactMobile"],
                        'studentContactEmail' => $row["studentContactEmail"]
                    );
                    array_push($response2, $responseData);
                }
                $response = "";
                if ($dbCon->query($sql) === TRUE) {
                    logfiles($sql);

                    $recordCount = $dbCon->affected_rows;
                    $response = ['status' => 'success', 'message' => $recordCount . ' student(s) results released', 'data' => $response2];
                } else {
                    $response = ['status' => 'failed', 'message' => "No results released!"];
                }
            } else {
                $response = ['status' => 'failed', 'message' => "No results released!"];
            }
        } else {
            $response = ['status' => 'failed', 'message' => "No results released!"];
        }
        echo json_encode($response);
    }
}


if (($_POST["action"] == "updateIndividualResultStatus")) {

    $response = "";

    if ($_POST["degreeCode"] != "" && $_POST["achedamicYear"] != "" && $_POST["subjectName"] != "" && $_POST["attempt"] != "" && $_POST["studentId"] != "" && $_POST["Status"] != "") {
        $sql = "";
        $sql2 = "";
        if ($_POST["attempt"] == "F") {
            $sql = " UPDATE examresults SET Status = '" . $_POST["Status"] . "' WHERE degreeCode = '" . $_POST["degreeCode"] . "' and  achedamicYear = '" . $_POST["achedamicYear"] . "' and  subjectName = '" . $_POST["subjectName"] . "' and SudentNo = '" . $_POST["studentId"] . "'";
            if ($_POST["Status"] == 0) {
                $sql2 = " UPDATE studentselection SET holdForViolation = '0' WHERE studentNo = '" . $_POST["studentId"] . "' and  subjectCode = '" . $_POST["subjectName"] . "'";
            }
            $sql3 = " SELECT s.*,r.Status as sstatus FROM  examresults r LEFT JOIN student s ON r.SudentNo = s.studentNo WHERE r.degreeCode = '" . $_POST["degreeCode"] . "' and  r.achedamicYear = '" . $_POST["achedamicYear"] . "' and  r.subjectName = '" . $_POST["subjectName"] . "' and SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($_POST["attempt"] == "R") {
            $sql = "UPDATE rep_examresults SET rep_Status = '" . $_POST["Status"] . "' WHERE rep_degreeCode = '" . $_POST["degreeCode"] . "' and  rep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  rep_subjectName = '" . $_POST["subjectName"] . "' and rep_SudentNo = '" . $_POST["studentId"] . "'";
            if ($_POST["Status"] == 0) {
                $sql2 = " UPDATE studentRepeatSelection SET holdForViolation = '0' WHERE studentNo = '" . $_POST["studentId"] . "' and  subjectCode = '" . $_POST["subjectName"] . "'";
            }
            $sql3 = "SELECT s.*,r.rep_Status as sstatus FROM rep_examresults r LEFT JOIN student s ON r.rep_SudentNo = s.studentNo WHERE r.rep_degreeCode = '" . $_POST["degreeCode"] . "' and  r.rep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  r.rep_subjectName = '" . $_POST["subjectName"] . "'  and rep_SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($_POST["attempt"] == "RR") {
            $sql = "UPDATE ReRepeat_examresults SET ReRep_Status = '" . $_POST["Status"] . "' WHERE ReRep_degreeCode = '" . $_POST["degreeCode"] . "' and  ReRep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  ReRep_subjectName = '" . $_POST["subjectName"] . "' 
            and ReRep_SudentNo = '" . $_POST["studentId"] . "' and  re_repeat_attempt_time = '" . $_POST["re_repeat_attempt_time"] . "'";
            if ($_POST["Status"] == 0) {
                $sql2 = " UPDATE ReRepeatSelection SET holdForViolation = '0' WHERE ReRep_studentNo = '" . $_POST["studentId"] . "' and  ReRep_subjectCode = '" . $_POST["subjectName"] . "' and  re_repeat_attempt_time = '" . $_POST["re_repeat_attempt_time"] . "'";
            }
            $sql3 = "SELECT s.*,r.ReRep_Status as sstatus as stNo FROM ReRepeat_examresults r LEFT JOIN student s ON r.ReRep_SudentNo = s.studentNo WHERE r.ReRep_degreeCode = '" . $_POST["degreeCode"] . "' and  r.ReRep_achedamicYear = '" . $_POST["achedamicYear"] . "' 
            and  r.ReRep_subjectName = '" . $_POST["subjectName"] . "'  and  r.re_repeat_attempt_time = '" . $_POST["re_repeat_attempt_time"] . "' and ReRep_SudentNo = '" . $_POST["studentId"] . "'";
        }
        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);
            logfiles($sql2);
            $dbCon->query($sql2);
            $recordCount = $dbCon->affected_rows;
            $response2 = [];

            $result = $dbCon->query($sql3);
            if ($result) {
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        $responseData =  array(
                            'status' => 200,
                            'StudentNo' => $row["studentNo"],
                            'StudentName' => $row["studentName"],
                            'studentContactMobile' => $row["studentContactMobile"],
                            'studentContactEmail' => $row["studentContactEmail"],
                            'result_status' => $row["sstatus"]
                        );
                        array_push($response2, $responseData);
                    }
                }
            }

            $response = ['status' => 'success', 'message' => $recordCount . ' student(s) results released', 'data' => $response2];
        } else {
            $response = ['status' => 'failed', 'message' => "No results released!"];
        }
        echo json_encode($response);
    }
}


if (($_POST["action"] == "updateIndividualResultRescrutiny")) {

    $response = "";

    if ($_POST["degreeCode"] != "" && $_POST["achedamicYear"] != "" && $_POST["subjectName"] != "" && $_POST["attempt"] != "" && $_POST["studentId"] != "" && $_POST["Status"] != "") {
        $sql = "";

        $attmeptTime = 0;
        $attmept = $_POST["attempt"];
        if ($_POST["attempt"] == "RR") {
            $attmeptTime = $_POST["re_repeat_attempt_time"];
        }

        if ($attmept == "F") {
            $sql = " UPDATE examresults SET Examiner1 = '" . $_POST["ex1_new"] . "',Examiner2 = '" . $_POST["ex2_new"] . "',Marks = '" . $_POST["avg_mark"] . "',Grade = '" . $_POST["grade_new"] . "' WHERE degreeCode = '" . $_POST["degreeCode"] . "' and  achedamicYear = '" . $_POST["achedamicYear"] . "' and  subjectName = '" . $_POST["subjectName"] . "' and SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($attmept == "R") {
            $sql = "UPDATE rep_examresults SET rep_Examiner1 = '" . $_POST["ex1_new"] . "',rep_Examiner2 = '" . $_POST["ex2_new"] . "',rep_Marks = '" . $_POST["avg_mark"] . "',rep_Grade = '" . $_POST["grade_new"] . "' WHERE rep_degreeCode = '" . $_POST["degreeCode"] . "' and  rep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  rep_subjectName = '" . $_POST["subjectName"] . "' and rep_SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($attmept == "RR") {
            $sql = "UPDATE ReRepeat_examresults SET ReRep_Examiner1 = '" . $_POST["ex1_new"] . "',ReRep_Examiner2 = '" . $_POST["ex2_new"] . "',ReRep_Marks = '" . $_POST["avg_mark"] . "',ReRep_Grade = '" . $_POST["grade_new"] . "' WHERE ReRep_degreeCode = '" . $_POST["degreeCode"] . "' and  ReRep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  ReRep_subjectName = '" . $_POST["subjectName"] . "' 
            and ReRep_SudentNo = '" . $_POST["studentId"] . "' and  re_repeat_attempt_time = '" . $_POST["re_repeat_attempt_time"] . "'";
        }
        $response = "";
        // echo $sql;
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            $logSql = "
                INSERT INTO result_rescrutiny_log (
                    student_number,
                    degree_code,
                    subject_code,
                    attempt,
                    attempt_time,

                    old_examiner1_mark,
                    old_examiner2_mark,
                    old_average_mark,
                    old_grade,

                    new_examiner1_mark,
                    new_examiner2_mark,
                    new_average_mark,
                    new_grade,

                    result_status,
                    updated_by
                ) VALUES (
                    '{$_POST["studentId"]}',
                    '{$_POST["degreeCode"]}',
                    '{$_POST["subjectName"]}',
                    '{$attmept}',
                    '{$attmeptTime}',

                    '{$_POST["ex1_old"]}',
                    '{$_POST["ex2_old"]}',
                    '{$_POST["avg_mark_old"]}',
                    '{$_POST["grade_old"]}',

                    '{$_POST["ex1_new"]}',
                    '{$_POST["ex2_new"]}',
                    '{$_POST["avg_mark"]}',
                    '{$_POST["grade_new"]}',

                    '{$_POST["Status"]}',
                    '{$_POST["username"]}'
                )
            ";

            $dbCon->query($logSql);
            logfiles($logSql);
            $response = ['status' => 'success', 'message' => ' student results updated'];
        } else {
            $response = ['status' => 'failed', 'message' => "No results released!"];
        }
        echo json_encode($response);
    }
}

if (($_POST["action"] == "updateIndividualResultRescrutinyLog")) {

    $response = "";

    if ($_POST["degreeCode"] != "" && $_POST["achedamicYear"] != "" && $_POST["subjectName"] != "" && $_POST["attempt"] != "" && $_POST["studentId"] != "" && $_POST["Status"] != "") {
        $response = "";
        $attmeptTime = 0;
        $attmept = $_POST["attempt"];
        if ($_POST["attempt"] == "RR") {
            $attmeptTime = $_POST["re_repeat_attempt_time"];
        }
        $logSql = "
                INSERT INTO result_rescrutiny_log (
                    student_number,
                    degree_code,
                    subject_code,
                    attempt,
                    attempt_time,
                    result_status,
                    updated_by
                ) VALUES (
                    '{$_POST["studentId"]}',
                    '{$_POST["degreeCode"]}',
                    '{$_POST["subjectName"]}',
                    '{$attmept}',
                    '{$attmeptTime}',
                    '{$_POST["Status"]}',
                    '{$_POST["username"]}'
                )
            ";
        // echo $logSql;
        $dbCon->query($logSql);
        logfiles($logSql);
        $response = ['status' => 'success', 'message' => ' student results updated'];

        echo json_encode($response);
    }
}



if (($_POST["action"] == "updateIndividualHoldStatus")) {

    $response = "";

    if ($_POST["degreeCode"] != "" && $_POST["achedamicYear"] != "" && $_POST["subjectName"] != "" && $_POST["attempt"] != "" && $_POST["studentId"] != "" && $_POST["Status"] != "") {
        $sql = "";
        $sql2 = "";
        // echo "d";
        if ($_POST["attempt"] == "F") {
            $sql2 = " UPDATE studentselection SET holdForViolation = '0' WHERE studentNo = '" . $_POST["studentId"] . "' and  subjectCode = '" . $_POST["subjectName"] . "'";
            $sql3 = " SELECT s.*,r.Status as sstatus FROM  examresults r LEFT JOIN student s ON r.SudentNo = s.studentNo WHERE r.degreeCode = '" . $_POST["degreeCode"] . "' and  r.achedamicYear = '" . $_POST["achedamicYear"] . "' and  r.subjectName = '" . $_POST["subjectName"] . "' and SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($_POST["attempt"] == "R") {
            $sql2 = " UPDATE studentRepeatSelection SET holdForViolation = '0' WHERE studentNo = '" . $_POST["studentId"] . "' and  subjectCode = '" . $_POST["subjectName"] . "'";
            $sql3 = "SELECT s.*,r.rep_Status as sstatus FROM rep_examresults r LEFT JOIN student s ON r.rep_SudentNo = s.studentNo WHERE r.rep_degreeCode = '" . $_POST["degreeCode"] . "' and  r.rep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  r.rep_subjectName = '" . $_POST["subjectName"] . "'  and rep_SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($_POST["attempt"] == "RR") {
            $sql2 = " UPDATE ReRepeatSelection SET holdForViolation = '0' WHERE ReRep_studentNo = '" . $_POST["studentId"] . "' and  ReRep_subjectCode = '" . $_POST["subjectName"] . "' and  re_repeat_attempt_time = '" . $_POST["re_repeat_attempt_time"] . "'";
            $sql3 = "SELECT s.*,r.ReRep_Status as sstatus as stNo FROM ReRepeat_examresults r LEFT JOIN student s ON r.ReRep_SudentNo = s.studentNo WHERE r.ReRep_degreeCode = '" . $_POST["degreeCode"] . "' and  r.ReRep_achedamicYear = '" . $_POST["achedamicYear"] . "' 
            and  r.ReRep_subjectName = '" . $_POST["subjectName"] . "'  and  r.re_repeat_attempt_time = '" . $_POST["re_repeat_attempt_time"] . "' and ReRep_SudentNo = '" . $_POST["studentId"] . "'";
        }
        $response = "";
        if ($dbCon->query($sql2) === TRUE) {
            $recordCount = $dbCon->affected_rows;
            $response2 = [];
            logfiles($sql2);

            $result = $dbCon->query($sql3);
            if ($result) {
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        $responseData =  array(
                            'status' => 200,
                            'StudentNo' => $row["studentNo"],
                            'StudentName' => $row["studentName"],
                            'studentContactMobile' => $row["studentContactMobile"],
                            'studentContactEmail' => $row["studentContactEmail"],
                            'result_status' => $row["sstatus"]
                        );
                        array_push($response2, $responseData);
                    }
                }
            }

            $response = ['status' => 'success', 'message' => $recordCount . ' student(s) results released', 'data' => $response2];
        } else {
            $response = ['status' => 'failed', 'message' => "No results released!"];
        }
        echo json_encode($response);
    }
}




if (($_POST["action"] == "approveDR")) {

    $response = "";

    if ($_POST["degreeCode"] != "" && $_POST["achedamicYear"] != "" && $_POST["subjectName"] != "" && $_POST["attempt"] != "" && $_POST["studentId"] != "") {
        $sql = "";
        if ($_POST["attempt"] == "F") {
            $sql = " UPDATE examresults SET dr_approve = 0 WHERE degreeCode = '" . $_POST["degreeCode"] . "' and  achedamicYear = '" . $_POST["achedamicYear"] . "' and  subjectName = '" . $_POST["subjectName"] . "' and SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($_POST["attempt"] == "R") {
            $sql = "UPDATE rep_examresults SET dr_approve = 0 WHERE rep_degreeCode = '" . $_POST["degreeCode"] . "' and  rep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  rep_subjectName = '" . $_POST["subjectName"] . "' and rep_SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($_POST["attempt"] == "RR") {
            $sql = "UPDATE ReRepeat_examresults SET dr_approve = 0 WHERE ReRep_degreeCode = '" . $_POST["degreeCode"] . "' and  ReRep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  ReRep_subjectName = '" . $_POST["subjectName"] . "' and ReRep_SudentNo = '" . $_POST["studentId"] . "'";
        }
        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            $recordCount = $dbCon->affected_rows;
            $response = ['status' => 200, 'message' => 'Approved'];
        } else {
            $response = ['status' => 400, 'message' => "Something Wrong!"];
        }
        echo json_encode($response);
    }
}

if (($_POST["action"] == "releaseResultIndividual")) {

    $response = "";

    if ($_POST["degreeCode"] != "" && $_POST["achedamicYear"] != "" && $_POST["subjectName"] != "" && $_POST["attempt"] != "" && $_POST["studentId"] != "") {
        $sql = "";
        if ($_POST["attempt"] == "F") {
            $sql = " UPDATE examresults SET Status = current_status WHERE degreeCode = '" . $_POST["degreeCode"] . "' and  achedamicYear = '" . $_POST["achedamicYear"] . "' and  subjectName = '" . $_POST["subjectName"] . "' and SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($_POST["attempt"] == "R") {
            $sql = "UPDATE rep_examresults SET rep_Status = current_status WHERE rep_degreeCode = '" . $_POST["degreeCode"] . "' and  rep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  rep_subjectName = '" . $_POST["subjectName"] . "' and rep_SudentNo = '" . $_POST["studentId"] . "'";
        } else if ($_POST["attempt"] == "RR") {
            $sql = "UPDATE ReRepeat_examresults SET ReRep_Status = current_status WHERE ReRep_degreeCode = '" . $_POST["degreeCode"] . "' and  ReRep_achedamicYear = '" . $_POST["achedamicYear"] . "' and  ReRep_subjectName = '" . $_POST["subjectName"] . "' and ReRep_SudentNo = '" . $_POST["studentId"] . "'";
        }
        $response = "";
        if ($dbCon->query($sql) === TRUE) {
            logfiles($sql);

            $recordCount = $dbCon->affected_rows;
            $response = ['status' => 200, 'message' => 'student results released'];
        } else {
            $response = ['status' => 400, 'message' => "No results released!"];
        }
        echo json_encode($response);
    }
}


if (($_POST["action"] == "getFinalResult")) {
    if ($_POST["degreeCode"] != "" && $_POST["achedamicYear"] != "") {
        $response = array();

        // echo $_POST["attampt"];
        // echo "st";
        if ($_POST["attampt"] == "Final") {
            $sql = "WITH combined_results AS (
                        SELECT
                            SudentNo AS StudentNo,
                            StudentName AS StudentName,
                            subjectName AS subjectName,
                            Marks AS Marks,
                            Grade AS Grade,
                            Examiner1 AS Examiner1,
                            Examiner2 AS Examiner2,
                            degreeCode AS degreeCode,
                            achedamicYear AS achedamicYear,
                            Status AS r_status
                        FROM examresults
                        UNION ALL
                        SELECT
                            rep_SudentNo AS StudentNo,
                            rep_StudentName AS StudentName,
                            rep_subjectName AS subjectName,
                            rep_Marks AS Marks,
                            rep_Grade AS Grade,
                            rep_Examiner1 AS Examiner1,
                            rep_Examiner2 AS Examiner2,
                            rep_degreeCode AS degreeCode,
                            rep_achedamicYear AS achedamicYear,
                            rep_Status AS r_status
                        FROM rep_examresults
                        UNION ALL
                        SELECT
                            ReRep_SudentNo AS StudentNo,
                            ReRep_StudentName AS StudentName,
                            ReRep_subjectName AS subjectName,
                            ReRep_Marks AS Marks,
                            ReRep_Grade AS Grade,
                            ReRep_Examiner1 AS Examiner1,
                            ReRep_Examiner2 AS Examiner2,
                            ReRep_degreeCode AS degreeCode,
                            ReRep_achedamicYear AS achedamicYear,
                            ReRep_Status AS r_status
                        FROM ReRepeat_examresults
                    ),";
        } else if ($_POST["attampt"] == "F") {
            $sql = "WITH combined_results AS (
                SELECT
                    SudentNo AS StudentNo,
                    StudentName AS StudentName,
                    subjectName AS subjectName,
                    Marks AS Marks,
                    Grade AS Grade,
                    Examiner1 AS Examiner1,
                    Examiner2 AS Examiner2,
                    degreeCode AS degreeCode,
                    achedamicYear AS achedamicYear,
                    Status AS r_status
                FROM examresults
            ),";
        } else if ($_POST["attampt"] == "R") {
            $sql = "WITH combined_results AS (
                SELECT
                    SudentNo AS StudentNo,
                    StudentName AS StudentName,
                    subjectName AS subjectName,
                    Marks AS Marks,
                    Grade AS Grade,
                    Examiner1 AS Examiner1,
                    Examiner2 AS Examiner2,
                    degreeCode AS degreeCode,
                    achedamicYear AS achedamicYear,
                    Status AS r_status
                FROM examresults
                UNION ALL
                SELECT
                    rep_SudentNo AS StudentNo,
                    rep_StudentName AS StudentName,
                    rep_subjectName AS subjectName,
                    rep_Marks AS Marks,
                    rep_Grade AS Grade,
                    rep_Examiner1 AS Examiner1,
                    rep_Examiner2 AS Examiner2,
                    rep_degreeCode AS degreeCode,
                    rep_achedamicYear AS achedamicYear,
                    rep_Status AS r_status
                FROM rep_examresults
            ),";
        } else if ($_POST["attampt"] == "RR") {
            $sql = "WITH combined_results AS (
                SELECT
                    SudentNo AS StudentNo,
                    StudentName AS StudentName,
                    subjectName AS subjectName,
                    Marks AS Marks,
                    Grade AS Grade,
                    Examiner1 AS Examiner1,
                    Examiner2 AS Examiner2,
                    degreeCode AS degreeCode,
                    achedamicYear AS achedamicYear,
                    Status AS r_status
                FROM examresults
                UNION ALL
                SELECT
                    rep_SudentNo AS StudentNo,
                    rep_StudentName AS StudentName,
                    rep_subjectName AS subjectName,
                    rep_Marks AS Marks,
                    rep_Grade AS Grade,
                    rep_Examiner1 AS Examiner1,
                    rep_Examiner2 AS Examiner2,
                    rep_degreeCode AS degreeCode,
                    rep_achedamicYear AS achedamicYear,
                    rep_Status AS r_status
                FROM rep_examresults
                UNION ALL
                SELECT
                    ReRep_SudentNo AS StudentNo,
                    ReRep_StudentName AS StudentName,
                    ReRep_subjectName AS subjectName,
                    ReRep_Marks AS Marks,
                    ReRep_Grade AS Grade,
                    ReRep_Examiner1 AS Examiner1,
                    ReRep_Examiner2 AS Examiner2,
                    ReRep_degreeCode AS degreeCode,
                    ReRep_achedamicYear AS achedamicYear,
                    ReRep_Status AS r_status
                FROM ReRepeat_examresults
                WHERE re_repeat_attempt_time = '" . $_POST["attamptTime"] . "' 
            ),";
        }



        $sql .= "ranked_results AS (
            SELECT
                *,
                ROW_NUMBER() OVER (PARTITION BY StudentNo, subjectName ORDER BY CASE 
                            WHEN Marks = 125 AND Marks > 100 THEN 0
                            ELSE Marks 
                        END DESC) AS rn
            FROM combined_results
                )
                SELECT DISTINCT
                    r.StudentNo AS StudentNoYear,
                    st.studentPersonalTitle AS studentPersonalTitle,
                    st.studentInitial AS studentInitial,
                    a.studentGender as studentGender,
                    r.StudentName,
                    r.degreeCode,
                    r.subjectName,
                    CASE WHEN r.r_status = 'H' THEN 'H' ELSE r.Grade END AS Grade,
                    CASE WHEN r.r_status = 'H' THEN 'H' ELSE r.Examiner1 END AS Examiner1,
                    CASE WHEN r.r_status = 'H' THEN 'H' ELSE r.Examiner2 END AS Examiner2,
                    CASE WHEN r.r_status = 'H' THEN 'H' ELSE r.Marks END AS Marks,
                    s.subjectSemester AS susSem,
                    st.medium AS studentSemMedium,
                    d.programmeTypeCode AS programmeTypeCode,
                    d.degreeTitle as degreeTitle,
                    d.duration as duration,
                    CASE 
                        WHEN r.Grade = 'A+' THEN '4.00' 
                        WHEN r.Grade = 'A' THEN '4.00' 
                        WHEN r.Grade = 'A-' THEN '3.70' 
                        WHEN r.Grade = 'B+' THEN '3.30' 
                        WHEN r.Grade = 'B' THEN '3.00' 
                        WHEN r.Grade = 'B-' THEN '2.70' 
                        WHEN r.Grade = 'C+' THEN '2.30' 
                        WHEN r.Grade = 'C' THEN '2.00' 
                        WHEN r.Grade = 'C-' THEN '1.70' 
                        WHEN r.Grade = 'D+' THEN '1.30' 
                        WHEN r.Grade = 'D' THEN '1.00' 
                        WHEN r.Grade = 'E' THEN '0.00'
                        ELSE '0.00'
                    END AS GPA
                FROM ranked_results r
                JOIN subject s ON r.subjectName = s.subjectCode AND r.degreeCode = s.degreeCode
                JOIN student st ON r.StudentNo = st.studentNo
                JOIN applicantspersonal a ON st.applicationNo = a.applicationNo
                JOIN degree d ON st.degreeCode = d.degreeCode
                WHERE
                    st.achedamicYear = s.academicYear 
                    AND s.degreeCode = '" . $_POST["degreeCode"] . "' 
                    AND r.achedamicYear = '" . $_POST["achedamicYear"] . "'
                    AND r.studentNo = '" . $_POST["studentNo"] . "'
                    AND (r_status = '0' OR r_status = 'H')
                    AND rn = '1'
                ORDER BY
                    r.StudentNo;";


        // echo $sql;
        // logfiles($sql);

        $result = $dbCon->query($sql);
        if ($result) {
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $responseData =  array(
                        'status' => 200,
                        'StudentNo' => $row["StudentNoYear"],
                        'StudentName' => $row["StudentName"],
                        'studentPersonalTitle' => $row["studentPersonalTitle"],
                        'studentGender' => $row["studentGender"],
                        'studentInitial' => $row["studentInitial"],
                        'degreeCode' => $row["degreeCode"],
                        'degreeTitle' => $row["degreeTitle"],
                        'duration' => $row["duration"],
                        'subjectCode' => $row["subjectName"],
                        'grade' => $row["Grade"],
                        'examiner1' => $row["Examiner1"],
                        'examiner2' => $row["Examiner2"],
                        'marks' => $row["Marks"],
                        'semester' => $row["susSem"],
                        'medium' => $row["studentSemMedium"],
                        'GPA' => $row["GPA"],
                        'programmeTypeCode' => $row["programmeTypeCode"],
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
}



if (($_POST["action"] == "getFinalResult2")) {
    if ($_POST["degreeCode"] != "" && $_POST["achedamicYear"] != "") {
        $response = array();

        // echo $_POST["attampt"];
        // echo "st";
        if ($_POST["attampt"] == "Final") {
            $sql = "WITH combined_results AS (
                        SELECT
                            SudentNo AS StudentNo,
                            StudentName AS StudentName,
                            subjectName AS subjectName,
                            Marks AS Marks,
                            Grade AS Grade,
                            Examiner1 AS Examiner1,
                            Examiner2 AS Examiner2,
                            degreeCode AS degreeCode,
                            achedamicYear AS achedamicYear,
                            Status AS r_status
                        FROM examresults
                        UNION ALL
                        SELECT
                            rep_SudentNo AS StudentNo,
                            rep_StudentName AS StudentName,
                            rep_subjectName AS subjectName,
                            rep_Marks AS Marks,
                            rep_Grade AS Grade,
                            rep_Examiner1 AS Examiner1,
                            rep_Examiner2 AS Examiner2,
                            rep_degreeCode AS degreeCode,
                            rep_achedamicYear AS achedamicYear,
                            rep_Status AS r_status
                        FROM rep_examresults
                        UNION ALL
                        SELECT
                            ReRep_SudentNo AS StudentNo,
                            ReRep_StudentName AS StudentName,
                            ReRep_subjectName AS subjectName,
                            ReRep_Marks AS Marks,
                            ReRep_Grade AS Grade,
                            ReRep_Examiner1 AS Examiner1,
                            ReRep_Examiner2 AS Examiner2,
                            ReRep_degreeCode AS degreeCode,
                            ReRep_achedamicYear AS achedamicYear,
                            ReRep_Status AS r_status
                        FROM ReRepeat_examresults
                    ),";
        } else if ($_POST["attampt"] == "F") {
            $sql = "WITH combined_results AS (
                SELECT
                    SudentNo AS StudentNo,
                    StudentName AS StudentName,
                    subjectName AS subjectName,
                    Marks AS Marks,
                    Grade AS Grade,
                    Examiner1 AS Examiner1,
                    Examiner2 AS Examiner2,
                    degreeCode AS degreeCode,
                    achedamicYear AS achedamicYear,
                    Status AS r_status
                FROM examresults
            ),";
        } else if ($_POST["attampt"] == "R") {
            $sql = "WITH combined_results AS (
                SELECT
                    SudentNo AS StudentNo,
                    StudentName AS StudentName,
                    subjectName AS subjectName,
                    Marks AS Marks,
                    Grade AS Grade,
                    Examiner1 AS Examiner1,
                    Examiner2 AS Examiner2,
                    degreeCode AS degreeCode,
                    achedamicYear AS achedamicYear,
                    Status AS r_status
                FROM examresults
                UNION ALL
                SELECT
                    rep_SudentNo AS StudentNo,
                    rep_StudentName AS StudentName,
                    rep_subjectName AS subjectName,
                    rep_Marks AS Marks,
                    rep_Grade AS Grade,
                    rep_Examiner1 AS Examiner1,
                    rep_Examiner2 AS Examiner2,
                    rep_degreeCode AS degreeCode,
                    rep_achedamicYear AS achedamicYear,
                    rep_Status AS r_status
                FROM rep_examresults
            ),";
        } else if ($_POST["attampt"] == "RR") {
            $sql = "WITH combined_results AS (
                SELECT
                    SudentNo AS StudentNo,
                    StudentName AS StudentName,
                    subjectName AS subjectName,
                    Marks AS Marks,
                    Grade AS Grade,
                    Examiner1 AS Examiner1,
                    Examiner2 AS Examiner2,
                    degreeCode AS degreeCode,
                    achedamicYear AS achedamicYear,
                    Status AS r_status
                FROM examresults
                UNION ALL
                SELECT
                    rep_SudentNo AS StudentNo,
                    rep_StudentName AS StudentName,
                    rep_subjectName AS subjectName,
                    rep_Marks AS Marks,
                    rep_Grade AS Grade,
                    rep_Examiner1 AS Examiner1,
                    rep_Examiner2 AS Examiner2,
                    rep_degreeCode AS degreeCode,
                    rep_achedamicYear AS achedamicYear,
                    rep_Status AS r_status
                FROM rep_examresults
                UNION ALL
                SELECT
                    ReRep_SudentNo AS StudentNo,
                    ReRep_StudentName AS StudentName,
                    ReRep_subjectName AS subjectName,
                    ReRep_Marks AS Marks,
                    ReRep_Grade AS Grade,
                    ReRep_Examiner1 AS Examiner1,
                    ReRep_Examiner2 AS Examiner2,
                    ReRep_degreeCode AS degreeCode,
                    ReRep_achedamicYear AS achedamicYear,
                    ReRep_Status AS r_status
                FROM ReRepeat_examresults
                WHERE re_repeat_attempt_time = '" . $_POST["attamptTime"] . "' 
            ),";
        }



        $sql .= "ranked_results AS (
            SELECT
                *,
                ROW_NUMBER() OVER (PARTITION BY StudentNo, subjectName ORDER BY CASE 
                            WHEN Marks = 125 AND Marks > 100 THEN 0
                            ELSE Marks 
                        END DESC) AS rn
            FROM combined_results
                )
                SELECT DISTINCT
                    r.StudentNo AS StudentNoYear,
                    st.studentPersonalTitle AS studentPersonalTitle,
                    st.studentInitial AS studentInitial,
                    a.studentGender as studentGender,
                    r.StudentName,
                    r.degreeCode,
                    r.subjectName,
                    CASE WHEN r.r_status = 'H' THEN 'H' ELSE r.Grade END AS Grade,
                    CASE WHEN r.r_status = 'H' THEN 'H' ELSE r.Examiner1 END AS Examiner1,
                    CASE WHEN r.r_status = 'H' THEN 'H' ELSE r.Examiner2 END AS Examiner2,
                    CASE WHEN r.r_status = 'H' THEN 'H' ELSE r.Marks END AS Marks,
                    s.subjectSemester AS susSem,
                    st.medium AS studentSemMedium,
                    d.programmeTypeCode AS programmeTypeCode,
                    d.degreeTitle as degreeTitle,
                    d.duration as duration,
                    CASE 
                        WHEN r.Grade = 'A+' THEN '4.00' 
                        WHEN r.Grade = 'A' THEN '4.00' 
                        WHEN r.Grade = 'A-' THEN '3.70' 
                        WHEN r.Grade = 'B+' THEN '3.30' 
                        WHEN r.Grade = 'B' THEN '3.00' 
                        WHEN r.Grade = 'B-' THEN '2.70' 
                        WHEN r.Grade = 'C+' THEN '2.30' 
                        WHEN r.Grade = 'C' THEN '2.00' 
                        WHEN r.Grade = 'C-' THEN '1.70' 
                        WHEN r.Grade = 'D+' THEN '1.30' 
                        WHEN r.Grade = 'D' THEN '1.00' 
                        WHEN r.Grade = 'E' THEN '0.00'
                        ELSE '0.00'
                    END AS GPA
                FROM ranked_results r
                JOIN subject s ON r.subjectName = s.subjectCode AND r.degreeCode = s.degreeCode
                JOIN student st ON r.StudentNo = st.studentNo
                JOIN applicantspersonal a ON st.applicationNo = a.applicationNo
                JOIN degree d ON st.degreeCode = d.degreeCode
                WHERE
                    st.achedamicYear = s.academicYear 
                    AND s.degreeCode = '" . $_POST["degreeCode"] . "' 
                    AND r.achedamicYear = '" . $_POST["achedamicYear"] . "'
                    AND r.studentNo = '" . $_POST["studentNo"] . "'
                    AND (r_status = '0' OR r_status = 'H')
                    AND rn = '1'
                ORDER BY
                    r.StudentNo;";


        // echo $sql;
        // logfiles($sql);

        $result = $dbCon->query($sql);
        if ($result) {
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {

                    $studentNo = $row["StudentNoYear"];
                    $degreeCode = $row["degreeCode"];
                    $subjectCode = $row["subjectName"];

                    // ==========================
                    // First Attempt
                    // ==========================
                    $firstAttempt = null;

                    $sqlFirst = "
                        SELECT Grade as Grade, Marks  as Marks, Examiner1  as Examiner1, Examiner2  as Examiner2
                        FROM examresults
                        WHERE SudentNo = '" . $studentNo . "'
                        AND degreeCode = '" . $degreeCode . "'
                        AND subjectName = '" . $subjectCode . "'
                        LIMIT 1
                    ";
                    $resFirst = $dbCon->query($sqlFirst);
                    if ($resFirst && $resFirst->num_rows > 0) {
                        $firstAttempt = $resFirst->fetch_assoc();
                    }

                    // ==========================
                    // Repeat Attempt
                    // ==========================
                    $repeatAttempt = null;

                    $sqlRepeat = "
                        SELECT rep_Grade as Grade, rep_Marks as Marks, rep_Examiner1 as Examiner1, rep_Examiner2 as Examiner2
                        FROM rep_examresults
                        WHERE rep_SudentNo =  '" .$studentNo. "'
                        AND rep_degreeCode =  '" .$degreeCode. "'
                        AND rep_subjectName =  '" .$subjectCode. "'
                        LIMIT 1
                    ";

                    $resRepeat = $dbCon->query($sqlRepeat);

                    if ($resRepeat && $resRepeat->num_rows > 0) {
                        $repeatAttempt = $resRepeat->fetch_assoc();
                    }

                    // ==========================
                    // Re-Repeat Attempts 1
                    // ==========================
                    $reRepeatAttempts1 = null;
                    $sqlReRepeat1 = "
                        SELECT                            
                            ReRep_Grade as Grade,
                            ReRep_Marks as Marks,
                            ReRep_Examiner1 as Examiner1,
                            ReRep_Examiner2 as Examiner2
                        FROM ReRepeat_examresults
                        WHERE ReRep_SudentNo = '$studentNo'
                        AND ReRep_degreeCode = '$degreeCode'
                        AND ReRep_subjectName = '$subjectCode'
                        AND re_repeat_attempt_time = 1
                        ORDER BY re_repeat_attempt_time ASC
                    ";
                    $resReRepeat1 = $dbCon->query($sqlReRepeat1);
                    if ($resReRepeat1 && $resReRepeat1->num_rows > 0) {
                        $reRepeatAttempts1 = $resReRepeat1->fetch_assoc();
                    }

                    // ==========================
                    // Re-Repeat Attempts 2
                    // ==========================
                    $reRepeatAttempts2 = null;
                    $sqlReRepeat2 = "
                        SELECT                            
                           ReRep_Grade as Grade,
                            ReRep_Marks as Marks,
                            ReRep_Examiner1 as Examiner1,
                            ReRep_Examiner2 as Examiner2
                        FROM ReRepeat_examresults
                        WHERE ReRep_SudentNo = '$studentNo'
                        AND ReRep_degreeCode = '$degreeCode'
                        AND ReRep_subjectName = '$subjectCode'
                        AND re_repeat_attempt_time = 2
                        ORDER BY re_repeat_attempt_time ASC
                    ";
                    $resReRepeat2 = $dbCon->query($sqlReRepeat2);
                    if ($resReRepeat2 && $resReRepeat2->num_rows > 0) {
                        $reRepeatAttempts2 = $resReRepeat2->fetch_assoc();
                    }

                    // ==========================
                    // Re-Repeat Attempts 3
                    // ==========================
                    $reRepeatAttempts3 = null;
                    $sqlReRepeat3 = "
                        SELECT                            
                           ReRep_Grade as Grade,
                            ReRep_Marks as Marks,
                            ReRep_Examiner1 as Examiner1,
                            ReRep_Examiner2 as Examiner2
                        FROM ReRepeat_examresults
                        WHERE ReRep_SudentNo = '$studentNo'
                        AND ReRep_degreeCode = '$degreeCode'
                        AND ReRep_subjectName = '$subjectCode'
                        AND re_repeat_attempt_time = 3
                        ORDER BY re_repeat_attempt_time ASC
                    ";
                    $resReRepeat3 = $dbCon->query($sqlReRepeat3);
                    if ($resReRepeat3 && $resReRepeat3->num_rows > 0) {
                        $reRepeatAttempts3 = $resReRepeat3->fetch_assoc();
                    }

                    // ==========================
                    // Re-Repeat Attempts 4
                    // ==========================
                    $reRepeatAttempts4 = null;
                    $sqlReRepeat4 = "
                        SELECT                            
                            ReRep_Grade as Grade,
                            ReRep_Marks as Marks,
                            ReRep_Examiner1 as Examiner1,
                            ReRep_Examiner2 as Examiner2
                        FROM ReRepeat_examresults
                        WHERE ReRep_SudentNo = '$studentNo'
                        AND ReRep_degreeCode = '$degreeCode'
                        AND ReRep_subjectName = '$subjectCode'
                        AND re_repeat_attempt_time = 4
                        ORDER BY re_repeat_attempt_time ASC
                    ";
                    $resReRepeat4 = $dbCon->query($sqlReRepeat4);
                    if ($resReRepeat4 && $resReRepeat4->num_rows > 0) {
                        $reRepeatAttempts4 = $resReRepeat4->fetch_assoc();
                    }


                    // ==========================
                    // Re-Repeat Attempts 5
                    // ==========================
                    $reRepeatAttempts5 = null;
                    $sqlReRepeat5 = "
                        SELECT                            
                            ReRep_Grade as Grade,
                            ReRep_Marks as Marks,
                            ReRep_Examiner1 as Examiner1,
                            ReRep_Examiner2 as Examiner2
                        FROM ReRepeat_examresults
                        WHERE ReRep_SudentNo = '$studentNo'
                        AND ReRep_degreeCode = '$degreeCode'
                        AND ReRep_subjectName = '$subjectCode'
                        AND re_repeat_attempt_time = 5
                        ORDER BY re_repeat_attempt_time ASC
                    ";
                    $resReRepeat5 = $dbCon->query($sqlReRepeat5);
                    if ($resReRepeat5 && $resReRepeat5->num_rows > 0) {
                        $reRepeatAttempts5 = $resReRepeat5->fetch_assoc();
                    }



                    $responseData =  array(
                        'status' => 200,
                        'StudentNo' => $row["StudentNoYear"],
                        'StudentName' => $row["StudentName"],
                        'studentPersonalTitle' => $row["studentPersonalTitle"],
                        'studentGender' => $row["studentGender"],
                        'studentInitial' => $row["studentInitial"],
                        'degreeCode' => $row["degreeCode"],
                        'degreeTitle' => $row["degreeTitle"],
                        'duration' => $row["duration"],
                        'subjectCode' => $row["subjectName"],
                        'grade' => $row["Grade"],
                        'examiner1' => $row["Examiner1"],
                        'examiner2' => $row["Examiner2"],
                        'marks' => $row["Marks"],
                        'semester' => $row["susSem"],
                        'medium' => $row["studentSemMedium"],
                        'GPA' => $row["GPA"],
                        'programmeTypeCode' => $row["programmeTypeCode"],
                        'firstAttempt' => $firstAttempt,
                        'repeatAttempt' => $repeatAttempt,
                        'reRepeatAttempt1' => $reRepeatAttempts1,
                        'reRepeatAttempt2' => $reRepeatAttempts2,
                        'reRepeatAttempt3' => $reRepeatAttempts3,
                        'reRepeatAttempt4' => $reRepeatAttempts4,
                        'reRepeatAttempt5' => $reRepeatAttempts5                      

                    );

                    // echo "WQ";

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
}




$dbCon->close();
