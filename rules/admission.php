<?php
include '../dbsetting.php';
include '../log.php';


$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}
if (($_POST["action"] == "getExamPrimaryDataForAdmission")) {
    $response = array();
    $attempt = "";
    if ($_POST["attempt"] == "F") {
        $attempt = "First";
    } else if ($_POST["attempt"] == "R") {
        $attempt = "Repeat";
    } else if ($_POST["attempt"] == "RR") {
        $attempt = "Re-Repeat";
    }

    $sql = "SELECT 
    degreecode AS degreecode,
    achedamicyear AS achedamicyear,
    semester AS semester,
    closingdate AS closingdate,
    amount AS amount,
    attempt AS attempt,
    exam_year AS exam_year,
    exam_month AS exam_month
    FROM examdetails
    WHERE 
    achedamicyear = '" . $_POST["achademicYear"] . "' AND
    degreecode = '" . $_POST['degreeCode'] . "' AND
    semester = '" . $_POST["semester"] . "' AND
    attempt = '" . $attempt . "'
    ORDER BY degreecode ASC;";
    // echo $sql;
    // logfiles($sql);
    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'degreecode' => $row["degreecode"],
                    'achedamicyear' => $row["achedamicyear"],
                    'semester' => $row["semester"],
                    'amount' => $row["amount"],
                    'attempt' => $row["attempt"],
                    'exam_year' => $row["exam_year"],
                    'exam_month' => $row["exam_month"],
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


if (($_POST["action"] == "getExamPrimaryDataForAdmissionNew")) {
    $response = array();
    $attempt = "";

    if ($_POST["attempt"] == "First") {
        $attempt = "First";
    } else if ($_POST["attempt"] == "Repeat") {
        $attempt = "Repeat";
    } else if ($_POST["attempt"] == "Re-Repeat") {
        $attempt = "Re-Repeat";
    }

    $sql = "SELECT 
    degreecode AS degreecode,
    achedamicyear AS achedamicyear,
    semester AS semester,
    closingdate AS closingdate,
    amount AS amount,
    attempt AS attempt,
    exam_year AS exam_year,
    exam_month AS exam_month
    FROM examdetails
    WHERE     
    ref_no = '" . $_POST["examid"] . "' 
    ORDER BY degreecode ASC ;";
    // echo $sql;
    // logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'degreecode' => $row["degreecode"],
                    'achedamicyear' => $row["achedamicyear"],
                    'semester' => $row["semester"],
                    'amount' => $row["amount"],
                    'attempt' => $row["attempt"],
                    'exam_year' => $row["exam_year"],
                    'exam_month' => $row["exam_month"],
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


if (($_POST["action"] == "getStudentForAdmission")) {
    $response = array();
    $sql = "";
    if ($_POST["attempt"] == "F" || $_POST["attempt"] == "First") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        t2.studentName AS studentName,
        t2.studentNIC AS studentNIC,
        t2.studentPermanentAddress AS studentAddress,
        t2.studentContactMobile AS studentContactMobile,
        t2.studentContactEmail AS studentContactEmail

    FROM
        studentselection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = '" . $_POST['degreeCode'] . "' AND
        semester = '" . $_POST["semester"] . "'
    GROUP BY t1.studentNo
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "R" || $_POST["attempt"] == "Repeat") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        t2.studentName AS studentName,
        t2.studentNIC AS studentNIC,
        t2.studentPermanentAddress AS studentAddress,
        t2.studentContactMobile AS studentContactMobile,
        t2.studentContactEmail AS studentContactEmail
    FROM
    studentRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = '" . $_POST['degreeCode'] . "' AND
        semester = '" . $_POST["semester"] . "'
    GROUP BY t1.studentNo
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "RR" || $_POST["attempt"] == "Re-Repeat") {
        $sql = "SELECT DISTINCT
        t1.ReRep_studentNo AS studentNo,
        t2.studentName AS studentName,
        t2.studentNIC AS studentNIC,
        t2.studentPermanentAddress AS studentAddress,
        t2.studentContactMobile AS studentContactMobile,
        t2.studentContactEmail AS studentContactEmail
    FROM
    ReRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.ReRep_studentNo = t2.studentNo
    WHERE 
        t1.ReRep_achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = '" . $_POST['degreeCode'] . "' AND
        ReRep_semester = '" . $_POST["semester"] . "' AND
        re_repeat_attempt_time = '" . $_POST["attempttime"] . "'
        
    GROUP BY t1.ReRep_studentNo
    ORDER BY t1.ReRep_studentNo ASC;";
    }
    // logfiles($sql);

    $result = $dbCon->query($sql);
    // echo $sql;
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'message' => 'Valid Application No',
                    'studentNo' => $row["studentNo"],
                    'studentNIC' => $row["studentNIC"],
                    'studentName' => $row["studentName"],
                    'studentAddress' => $row["studentAddress"],
                    'studentContactMobile' => $row["studentContactMobile"],
                    'studentContactEmail' => $row["studentContactEmail"],
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Invalid Application No');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}

if (($_POST["action"] == "getStudentForAdmissionNew")) {
    $response = array();
    $sql = "";

    $semster = $_POST["semester"];
    $examid = $_POST["examid"];
    $semster_explode = explode(',', $semster);
    $semster_in_clause = implode(',', array_map('intval', $semster_explode));
    // degreeCode: batchArray[batchArray_i][0],
    // achademicYear: batchArray[batchArray_i][1],
    // semester: batchArray[batchArray_i][2],
    // attempt: batchArray[batchArray_i][3],
    // attempt_time: batchArray[batchArray_i][4]
    if ($_POST["attempt"] == "F" || $_POST["attempt"] == "First") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        t1.appliedDate as appliedDate,
        t2.studentName AS studentName,
        t2.studentNIC AS studentNIC,
        t2.studentPermanentAddress AS studentAddress,
        t2.studentContactMobile AS studentContactMobile,
        t2.studentContactEmail AS studentContactEmail
    FROM
        studentselection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.exam_ref = '" . $examid . "' 
    GROUP BY t1.studentNo
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "R" || $_POST["attempt"] == "Repeat") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        t1.appliedDate as appliedDate,
        t2.studentName AS studentName,
        t2.studentNIC AS studentNIC,
        t2.studentPermanentAddress AS studentAddress,
        t2.studentContactMobile AS studentContactMobile,
        t2.studentContactEmail AS studentContactEmail
    FROM
    studentRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.exam_ref = '" . $examid . "' 
    GROUP BY t1.studentNo
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "RR" || $_POST["attempt"] == "Re-Repeat") {
        $sql = "SELECT DISTINCT
        t1.ReRep_studentNo AS studentNo,
        t1.ReRep_appliedDate as appliedDate,
        t2.studentName AS studentName,
        t2.studentNIC AS studentNIC,
        t2.studentPermanentAddress AS studentAddress,
        t2.studentContactMobile AS studentContactMobile,
        t2.studentContactEmail AS studentContactEmail
    FROM
    ReRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.ReRep_studentNo = t2.studentNo
    WHERE 
        t1.exam_ref = '" . $examid . "' 
    GROUP BY t1.ReRep_studentNo
    ORDER BY t1.ReRep_studentNo ASC;";
    }
    // logfiles($sql);
    // echo $sql;

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'message' => 'Valid Application No',
                    'studentNo' => $row["studentNo"],
                    'appliedDate' => $row["appliedDate"],
                    'studentNIC' => $row["studentNIC"],
                    'studentName' => $row["studentName"],
                    'studentAddress' => $row["studentAddress"],
                    'studentContactMobile' => $row["studentContactMobile"],
                    'studentContactEmail' => $row["studentContactEmail"],
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Invalid Application No');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}

if (($_POST["action"] == "getTimeTableForAdmission")) {


    $response = array();
    $sql = "";
    if ($_POST["attempt"] == "F") {
        $sql = "SELECT DISTINCT
        t1.examdate AS examdate,
        t1.starttime AS starttime,
        t1.endtime AS endtime,
        t1.subjectCode AS subjectCode,
        t1.hallno AS hallno,
        t1.exam_year AS exam_year,
        t1.exam_month AS exam_month
    FROM
        timetable AS t1
    WHERE 
        t1.academicYear = '" . $_POST["achademicYear"] . "' AND
        t1.degreeCode = '" . $_POST['degreeCode'] . "' AND
        timeSem = '" . $_POST["semester"] . "'
        ORDER BY examdate ASC, STR_TO_DATE( t1.starttime, '%h %i %p' ) ASC;";
    } else if ($_POST["attempt"] == "R") {
        $sql = "SELECT DISTINCT
        t1.rep_examdate AS examdate,
        t1.rep_starttime AS starttime,
        t1.rep_endtime AS endtime,
        t1.rep_subjectCode AS subjectCode,
        t1.rep_hallno AS hallno,
        t1.exam_year AS exam_year,
        t1.exam_month AS exam_month
    FROM
        rep_timetable AS t1
    WHERE 
    t1.rep_academicYear = '" . $_POST["achademicYear"] . "' AND
        t1.rep_degreeCode = '" . $_POST['degreeCode'] . "' AND
        rep_timeSem = '" . $_POST["semester"] . "'
        ORDER BY rep_examdate ASC, STR_TO_DATE( t1.rep_starttime, '%h %i %p' ) ASC;";
    } else if ($_POST["attempt"] == "RR") {
        $sql = "SELECT DISTINCT
        t1.ReRepeat_examdate AS examdate,
        t1.ReRepeat_starttime AS starttime,
        t1.ReRepeat_endtime AS endtime,
        t1.ReRepeat_subjectCode AS subjectCode,
        t1.ReRepeat_hallno AS hallno,
        t1.exam_year AS exam_year,
        t1.exam_month AS exam_month
        FROM
        ReRepeat_timetable AS t1    
        WHERE 
        t1.ReRepeat_academicYear = '" . $_POST["achademicYear"] . "' AND
        t1.ReRepeat_degreeCode = '" . $_POST['degreeCode'] . "' AND
        ReRepeat_timeSem = '" . $_POST["semester"] . "'
        ORDER BY ReRepeat_examdate ASC, STR_TO_DATE( t1.ReRepeat_starttime, '%h %i %p' ) ASC;";
    }
    // logfiles($sql);

    $result = $dbCon->query($sql);
    // echo $sql;
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'message' => 'Valid Application No',
                    'examdate' => $row["examdate"],
                    'starttime' => $row["starttime"],
                    'endtime' => $row["endtime"],
                    'subjectCode' => $row["subjectCode"],
                    'hallno' => $row["hallno"],
                    'exam_year' => $row["exam_year"],
                    'exam_month' => $row["exam_month"],
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Time Tabel not Available');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Time Tabel not Available');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "getTimeTableForAdmissionNew")) {


    $response = array();

    $semster = $_POST["semester"];
    $semster_explode = explode(',', $semster);
    $semster_in_clause = implode(',', array_map('intval', $semster_explode));



    $sql = "";
    $sql = "SELECT DISTINCT
    t1.examdate AS examdate,
    t1.starttime AS starttime,
    t1.endtime AS endtime,
    t1.subjectCode AS subjectCode,
    t1.hallno AS hallno,
    t1.exam_year AS exam_year,
    t1.exam_month AS exam_month
FROM
    timetable AS t1
WHERE 
   timetable_ref_no = '" . $_POST["examid"] . "'
    ORDER BY examdate ASC, STR_TO_DATE( t1.starttime, '%h %i %p' ) ASC;";
    // logfiles($sql);

    $result = $dbCon->query($sql);
    // echo $sql;
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'message' => 'Valid Application No',
                    'examdate' => $row["examdate"],
                    'starttime' => $row["starttime"],
                    'endtime' => $row["endtime"],
                    'subjectCode' => $row["subjectCode"],
                    'hallno' => $row["hallno"],
                    'exam_year' => $row["exam_year"],
                    'exam_month' => $row["exam_month"],
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Time Tabel not Available');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Time Tabel not Available');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}



if (($_POST["action"] == "getApplyedSubject")) {
    $response = array();
    $sql = "";
    if ($_POST["attempt"] == "F") {
        $sql = "SELECT DISTINCT
        t1.subjectCode AS subjectCode,
        t1.semester AS semester,
        t1.achedamicYear AS achedamicYear
    FROM
        studentselection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = (
            SELECT
                degreeCode
            FROM
                degree
            WHERE
                degreeTitle LIKE '" . $_POST['degreeCode'] . "'
            LIMIT 1
        ) AND
        semester = '" . $_POST["semester"] . "' AND
        t1.studentNo = '" . $_POST["studentNo"] . "'
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "R") {
        $sql = "SELECT DISTINCT
        t1.subjectCode AS subjectCode,
        t1.semester AS semester,
        t1.achedamicYear AS achedamicYear
    FROM
    studentRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = (
            SELECT
                degreeCode
            FROM
                degree
            WHERE
                degreeTitle LIKE '" . $_POST['degreeCode'] . "'
            LIMIT 1
        ) AND
        semester = '" . $_POST["semester"] . "' AND
        t1.studentNo = '" . $_POST["studentNo"] . "'
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "RR") {
        $sql = "SELECT DISTINCT
        t1.ReRep_subjectCode AS subjectCode,
        t1.ReRep_semester AS semester,
        t1.ReRep_achedamicYear AS achedamicYear
    FROM
    ReRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.ReRep_studentNo = t2.studentNo
    WHERE 
        t1.ReRep_achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = (
            SELECT
                degreeCode
            FROM
                degree
            WHERE
                degreeTitle LIKE '" . $_POST['degreeCode'] . "'
            LIMIT 1
        ) AND
        ReRep_semester = '" . $_POST["semester"] . "' AND
        t1.ReRep_studentNo = '" . $_POST["studentNo"] . "'
    ORDER BY t1.ReRep_studentNo ASC;";
    }
    // logfiles($sql);

    $result = $dbCon->query($sql);
    // echo $sql;
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'subjectCode' => $row["subjectCode"],
                    'semester' => $row["semester"],
                    'achedamicYear' => $row["achedamicYear"]
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Invalid');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}



if (($_POST["action"] == "getApplyedSubjectSelectedStudent")) {

    $in_st_no = "";
    $studentNos = $_POST["studentNo"];
    $count = count($studentNos);
    foreach ($studentNos as $key => $st_no) {
        $in_st_no .= "'" . $st_no . "'";

        if ($key < $count - 1) {
            $in_st_no .= ",";
        }
    }

    $response = array();
    $sql = "";
    if ($_POST["attempt"] == "F") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        t1.subjectCode AS subjectCode,
        t1.semester AS semester,
        t1.achedamicYear AS achedamicYear
    FROM
        studentselection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = '" . $_POST['degreeCode'] . "' AND
        semester = '" . $_POST["semester"] . "' AND
        t1.studentNo in (" . $in_st_no . ")
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "R") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        t1.subjectCode AS subjectCode,
        t1.semester AS semester,
        t1.achedamicYear AS achedamicYear
    FROM
    studentRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = '" . $_POST['degreeCode'] . "' AND
        semester = '" . $_POST["semester"] . "' AND
        t1.studentNo in (" . $in_st_no . ")
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "RR") {
        $sql = "SELECT DISTINCT
        t1.ReRep_studentNo AS studentNo,
        t1.ReRep_subjectCode AS subjectCode,
        t1.ReRep_semester AS semester,
        t1.ReRep_achedamicYear AS achedamicYear
    FROM
    ReRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.ReRep_studentNo = t2.studentNo
    WHERE 
        t1.ReRep_achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = '" . $_POST['degreeCode'] . "' AND
        ReRep_semester = '" . $_POST["semester"] . "' AND
        t1.ReRep_studentNo in (" . $in_st_no . ")
    ORDER BY t1.ReRep_studentNo ASC;";
    }
    // logfiles($sql);

    $result = $dbCon->query($sql);
    // echo $sql;
    // die();
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'studentNo' => $row["studentNo"],
                    'subjectCode' => $row["subjectCode"],
                    'semester' => $row["semester"],
                    'achedamicYear' => $row["achedamicYear"]
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Invalid');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "getApplyedSubjectSelectedStudentNew")) {

    $in_st_no = "";
    $studentNos = $_POST["studentNo"];
    $count = count($studentNos);
    foreach ($studentNos as $key => $st_no) {
        $in_st_no .= "'" . $st_no . "'";

        if ($key < $count - 1) {
            $in_st_no .= ",";
        }
    }

    $response = array();
    $sql = "";

    $semster = $_POST["semester"];
    $semster_explode = explode(',', $semster);
    $semster_in_clause = implode(',', array_map('intval', $semster_explode));


    // if ($_POST["attempt"] == "First") {
    //     $attempt = "First";
    // } else if ($_POST["attempt"] == "Repeat") {
    //     $attempt = "Repeat";
    // } else if ($_POST["attempt"] == "Re-Repeat") {
    //     $attempt = "Re-Repeat";
    // }

    if ($_POST["attempt"] == "First") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        t1.subjectCode AS subjectCode,
        t1.semester AS semester,
        t1.achedamicYear AS achedamicYear
    FROM
        studentselection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
           t1.exam_ref = '" . $_POST["examid"] . "'

    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "Repeat") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        t1.subjectCode AS subjectCode,
        t1.semester AS semester,
        t1.achedamicYear AS achedamicYear
    FROM
    studentRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
                 t1.exam_ref = '" . $_POST["examid"] . "'

    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "Re-Repeat") {
        $sql = "SELECT DISTINCT
        t1.ReRep_studentNo AS studentNo,
        t1.ReRep_subjectCode AS subjectCode,
        t1.ReRep_semester AS semester,
        t1.ReRep_achedamicYear AS achedamicYear
    FROM
    ReRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.ReRep_studentNo = t2.studentNo
    WHERE 
                   t1.exam_ref = '" . $_POST["examid"] . "'

    ORDER BY t1.ReRep_studentNo ASC;";
    }
    // logfiles($sql);

    $result = $dbCon->query($sql);
    // echo $sql;
    // die();
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'studentNo' => $row["studentNo"],
                    'subjectCode' => $row["subjectCode"],
                    'semester' => $row["semester"],
                    'achedamicYear' => $row["achedamicYear"]
                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Invalid');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "getApplyedSubjectSelectedStudentGetPaperCount")) {

    $in_st_no = "";
    $studentNos = $_POST["studentNo"];
    $count = count($studentNos);
    foreach ($studentNos as $key => $st_no) {
        $in_st_no .= "'" . $st_no . "'";

        if ($key < $count - 1) {
            $in_st_no .= ",";
        }
    }

    $response = array();
    $sql = "";
    if ($_POST["attempt"] == "F") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        GROUP_CONCAT(t1.subjectCode ORDER BY t1.subjectCode ASC SEPARATOR ', ') AS subjectCodes,
        t1.semester AS semester,
        t1.achedamicYear AS achedamicYear,
        t2.studentName AS studentName,
        count(*) as paper_count
    FROM
        studentselection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = '" . $_POST['degreeCode'] . "' AND
        semester = '" . $_POST["semester"] . "' AND
        t1.studentNo in (" . $in_st_no . ")
        Group BY t1.studentNo
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "R") {
        $sql = "SELECT DISTINCT
        t1.studentNo AS studentNo,
        GROUP_CONCAT(t1.subjectCode ORDER BY t1.subjectCode ASC SEPARATOR ', ') AS subjectCodes,
        t1.semester AS semester,
        t1.achedamicYear AS achedamicYear,
        t2.studentName AS studentName,
        count(*) as paper_count
    FROM
    studentRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.studentNo = t2.studentNo
    WHERE 
        t1.achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = '" . $_POST['degreeCode'] . "' AND
        semester = '" . $_POST["semester"] . "' AND
        t1.studentNo in (" . $in_st_no . ")
        Group BY t1.studentNo
    ORDER BY t1.studentNo ASC;";
    } else if ($_POST["attempt"] == "RR") {
        $sql = "SELECT DISTINCT
        t1.ReRep_studentNo AS studentNo,
        GROUP_CONCAT(t1.ReRep_subjectCode ORDER BY t1.ReRep_subjectCode ASC SEPARATOR ', ') AS subjectCodes,
        t1.ReRep_semester AS semester,
        t1.ReRep_achedamicYear AS achedamicYear,
        t2.studentName AS studentName,
        count(*) as paper_count
    FROM
    ReRepeatSelection AS t1
    LEFT JOIN student AS t2
    ON
        t1.ReRep_studentNo = t2.studentNo
    WHERE 
        t1.ReRep_achedamicYear = '" . $_POST["achademicYear"] . "' AND
        t2.degreeCode = '" . $_POST['degreeCode'] . "' AND
        ReRep_semester = '" . $_POST["semester"] . "' AND
        re_repeat_attempt_time = '" . $_POST["attempttime"] . "' AND
        t1.ReRep_studentNo in (" . $in_st_no . ")
        Group BY t1.ReRep_studentNo
    ORDER BY t1.ReRep_studentNo ASC;";
    }
    // logfiles($sql);

    $result = $dbCon->query($sql);
    // echo $sql;
    // die();
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $responseData =  array(
                    'status' => 200,
                    'studentNo' => $row["studentNo"],
                    'subjectCode' => $row["subjectCodes"],
                    'semester' => $row["semester"],
                    'achedamicYear' => $row["achedamicYear"],
                    'paper_count' => $row["paper_count"],
                    'studentName' => $row["studentName"],

                );
                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Invalid');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}

if (($_POST["action"] == "getApplyedSubjectSelectedStudentGetPaperCountSunjectWise")) {

    $in_st_no = "";
    $studentNos = $_POST["studentNo"];
    $count = count($studentNos);
    foreach ($studentNos as $key => $st_no) {
        $in_st_no .= "'" . $st_no . "'";

        if ($key < $count - 1) {
            $in_st_no .= ",";
        }
    }

    $response = array();
    $sql = "";

    $sql = 'SELECT
            s.`subjectCode` as subjectCode,
            s.`subjectTitle` as subjectTitle
            FROM
            `subject` s  WHERE
            s.`degreeCode` = "' . $_POST["degreeCode"] . '" AND s.`academicYear` = "' . $_POST["achademicYear"] . '" AND s.`subjectSemester` = "' . $_POST["semester"] . '"
        GROUP BY
            s.`subjectCode`
            ';


    // logfiles($sql);

    $result = $dbCon->query($sql);
    // echo $sql;
    // // die();
    if ($result) {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {

                $sql2 = "";
                if ($_POST["attempt"] == "F") {
                    $sql2 = '
                        SELECT
                            COUNT(`studentNo`) as pcount
                        FROM
                            studentselection
                        WHERE
                            `degreeCode` = "' . $_POST["degreeCode"] . '" AND 
                            `achedamicYear` = "' . $_POST["achademicYear"] . '" AND 
                            `semester` = "' . $_POST["semester"] . '" AND  
                            studentNo in (' . $in_st_no . ') AND 
                            `subjectCode` = "' . $row["subjectCode"] . '";
                    ';
                } else if ($_POST["attempt"] == "R") {

                    $sql2 = '
                        SELECT
                         COUNT(`studentNo`) as pcount
                        FROM
                            studentRepeatSelection
                        WHERE
                            `degreeCode` = "' . $_POST["degreeCode"] . '" AND 
                            `achedamicYear` = "' . $_POST["achademicYear"] . '" AND 
                            `semester` = "' . $_POST["semester"] . '" AND
                            studentNo in (' . $in_st_no . ') AND 
                            `subjectCode` = "' . $row["subjectCode"] . '";';
                } else if ($_POST["attempt"] == "RR") {
                    $sql2 = '
                        SELECT
                            COUNT(`ReRep_studentNo`) as pcount
                        FROM
                            ReRepeatSelection
                        WHERE
                            `ReRep_degreeCode` = "' . $_POST["degreeCode"] . '" AND 
                            `ReRep_achedamicYear` = "' . $_POST["achademicYear"] . '" AND 
                            `ReRep_semester` = "' . $_POST["semester"] . '" AND
                            `re_repeat_attempt_time` = "' . $_POST["attempttime"] . '" AND
                            ReRep_studentNo in (' . $in_st_no . ') AND 
                            `ReRep_subjectCode` = "' . $row["subjectCode"] . '";;
                    ';
                }

                // echo $sql2;
                // die();
                // logfiles($sql2);

                $result2 = $dbCon->query($sql2);
                if ($result2) {
                    if ($result2->num_rows > 0) {
                        while ($row2 = $result2->fetch_assoc()) {
                            $responseData =  array(
                                'status' => 200,
                                'subjectCode' => $row["subjectCode"],
                                'subjectTitle' => $row["subjectTitle"],
                                'pcount' => $row2["pcount"],
                            );
                            array_push($response, $responseData);
                        }
                    } else {
                        $responseData =  array(
                            'status' => 200,
                            'subjectCode' => $row["subjectCode"],
                            'subjectTitle' => $row["subjectTitle"],
                            'pcount' => 0,
                        );
                        array_push($response, $responseData);
                    }
                } else {
                    $responseData =  array(
                        'status' => 200,
                        'subjectCode' => $row["subjectCode"],
                        'subjectTitle' => $row["subjectTitle"],
                        'pcount' => 0,
                    );
                    array_push($response, $responseData);
                }
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Invalid');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


$dbCon->close();
