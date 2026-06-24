<?php
include '../dbsetting.php';
include '../log.php';


$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}




if (($_POST["action"] == "data4getApplicantNo")) {
    $response = array();

    $sql = "SELECT t1.applicationNo as applicationNo,studentNIC,studentName,studentPermanentAddress,studentContactMobile,studentContactEmail

            FROM applicantspersonal as t1 
            where degreeCode= '" . $_POST['degreeCode'] . "' and
             achedamicYear= '" . $_POST['achedamicYear'] . "';";

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {

            $responseData;
            $count = 0;
            while ($row = $result->fetch_assoc()) {

                $responseData =  array(
                    'status' => 200,
                    'applicationNo' => $row["applicationNo"],
                    'studentNIC' => $row["studentNIC"],
                    'studentName' => $row["studentName"],
                    'studentPermanentAddress' => $row["studentPermanentAddress"],
                    'studentContactMobile' => $row["studentContactMobile"],
                    'studentContactEmail' => $row["studentContactEmail"]
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

if (($_POST["action"] == "data4getStudentNumberForApplicantion")) {
    $response = array();

    $sql = "SELECT s.studentNo as studentNo,t1.applicationNo as applicationNo,s.studentNIC,s.studentName,s.studentPermanentAddress,s.studentContactMobile,s.studentContactEmail

            FROM 
            `student`  s 
	        LEFT JOIN applicantspersonal t1 ON s.applicationNo = t1.applicationNo
            where s.degreeCode= '" . $_POST['degreeCode'] . "' and
             s.achedamicYear= '" . $_POST['achedamicYear'] . "';";
    // echo  $sql;
    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {

            $responseData;
            $count = 0;
            while ($row = $result->fetch_assoc()) {

                $responseData =  array(
                    'status' => 200,
                    'studentNo' => $row["studentNo"],
                    'applicationNo' => $row["applicationNo"],
                    'studentNIC' => $row["studentNIC"],
                    'studentName' => $row["studentName"],
                    'studentPermanentAddress' => $row["studentPermanentAddress"],
                    'studentContactMobile' => $row["studentContactMobile"],
                    'studentContactEmail' => $row["studentContactEmail"]
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


if (($_POST["action"] == "data4ApplicantInterviewPanelAppoint")) {
    $response = array();
    $sql = "SELECT t1.applicationNo as applicationNo, t1.studentName as studentName
    ,t1.studentNIC as studentNIC,t1.studentContactMobile as studentContactMobile,t1.studentContactEmail as studentContactEmail
    FROM applicantspersonal as t1  
    where degreeCode= '" . $_POST['degreeCode'] . "' and achedamicYear= '" . $_POST['academicYear'] . "'
    and (panel_no= 0 or panel_no= '' or panel_decision='2' or panel_decision='3')
    order by  CAST(SUBSTRING_INDEX(t1.applicationNo, '/', -1) AS UNSIGNED) ASC;;";

    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {

            $responseData;
            $count = 0;
            while ($row = $result->fetch_assoc()) {

                $responseData =  array(
                    'status' => 200,
                    'applicationNo' => $row["applicationNo"],
                    'studentName' => $row["studentName"],
                    'studentNIC' => $row["studentNIC"],
                    'studentContactMobile' => $row["studentContactMobile"],
                    'studentContactEmail' => $row["studentContactEmail"]
                );


                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}




if (($_POST["action"] == "data4getApplicantPanelList")) {
    $response = array();

    $sql = "";
    if($_POST['panelId']==-1){
        $sql = "SELECT t1.applicationNo as applicationNo, t1.studentName as studentName
        ,t1.studentNIC as studentNIC,t1.studentContactMobile as studentContactMobile,t1.studentContactEmail as studentContactEmail,
        t1.studentPersonalTitle as studentPersonalTitle,t1.studentInitial as studentInitial,t1.degreeCode as sdegreeCode,
        t1.achedamicYear as achedamicYear,t1.studentContactLan as studentContactLan, t1.studentPermanentAddress as studentPermanentAddress, 
        t1.panel_decision as panel_decision,t1.panel_decision_dec as panel_decision_dec,t1.selected as selected

        FROM applicantspersonal as t1 
        where degreeCode= '" . $_POST['degreeCode'] . "' and
         achedamicYear= '" . $_POST['academicYear'] . "' and
         transfered= '1'       
        ;";
    }else{
        $sql = "SELECT t1.applicationNo as applicationNo, t1.studentName as studentName
            ,t1.studentNIC as studentNIC,t1.studentContactMobile as studentContactMobile,t1.studentContactEmail as studentContactEmail,
            t1.studentPersonalTitle as studentPersonalTitle,t1.studentInitial as studentInitial,t1.degreeCode as sdegreeCode,
            t1.achedamicYear as achedamicYear,t1.studentContactLan as studentContactLan, t1.studentPermanentAddress as studentPermanentAddress, 
            t1.panel_decision as panel_decision,t1.panel_decision_dec as panel_decision_dec,t1.selected as selected

            FROM applicantspersonal as t1 
            where degreeCode= '" . $_POST['degreeCode'] . "' and
             achedamicYear= '" . $_POST['academicYear'] . "' and
             panel_no= '" . $_POST['panelId'] . "'       
            ;";
    }
    // echo $sql;
    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {

            $responseData;
            $count = 0;
            while ($row = $result->fetch_assoc()) {

                $responseData =  array(
                    'status' => 200,
                    'applicationNo' => $row["applicationNo"],
                    'studentName' => $row["studentName"],
                    'studentNIC' => $row["studentNIC"],
                    'studentContactMobile' => $row["studentContactMobile"],
                    'studentContactEmail' => $row["studentContactEmail"],
                    'studentPersonalTitle' => $row["studentPersonalTitle"],
                    'studentInitial' => $row["studentInitial"],
                    'sdegreeCode' => $row["sdegreeCode"],
                    'achedamicYear' => $row["achedamicYear"],
                    'studentContactLan' => $row["studentContactLan"],
                    'studentPermanentAddress' => $row["studentPermanentAddress"],
                    'panel_decision_dec' => $row["panel_decision_dec"],
                    'panel_decision' => $row["panel_decision"],
                    'selected' => $row["selected"],

                );


                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "data4getApplicantPanelListWithDecision")) {
    $response = array();

    $sql = "SELECT t1.applicationNo as applicationNo, t1.studentName as studentName
            ,t1.studentNIC as studentNIC,t1.studentContactMobile as studentContactMobile,t1.studentContactEmail as studentContactEmail,
            t1.studentPersonalTitle as studentPersonalTitle,t1.studentInitial as studentInitial,t1.degreeCode as sdegreeCode,
            t1.achedamicYear as achedamicYear,t1.studentContactLan as studentContactLan, t1.studentPermanentAddress as studentPermanentAddress, 
            t1.panel_decision as panel_decision,t1.panel_decision_dec as panel_decision_dec,
            t1.selectedFromGraduate as selectedFromGraduate,t1.selectedFromProfessional as selectedFromProfessional,
            t1.selectedFromPendingQulification as selectedFromPendingQulification,t1.selectedFromSpecialApprove as selectedFromSpecialApprove
            FROM applicantspersonal as t1 
            where degreeCode= '" . $_POST['degreeCode'] . "' AND selected != 'YES' AND
             achedamicYear= '" . $_POST['academicYear'] . "'";

    if ($_POST['panelId'] == 0) {
        $sql .= " and panel_no != 0 ";

    } else if($_POST['panelId'] == -1){
        $sql .= " and transfered = 1 ";        
    }else {
        $sql .= " and panel_no= " . $_POST['panelId'];
    }

    if ($_POST['desicion'] != 0) {
        $sql .= " and panel_decision= " . $_POST['desicion'];
    }

    // echo $sql;die();


    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {

            $responseData;
            $count = 0;
            while ($row = $result->fetch_assoc()) {

                $responseData =  array(
                    'status' => 200,
                    'applicationNo' => $row["applicationNo"],
                    'studentName' => $row["studentName"],
                    'studentNIC' => $row["studentNIC"],
                    'studentContactMobile' => $row["studentContactMobile"],
                    'studentContactEmail' => $row["studentContactEmail"],
                    'studentPersonalTitle' => $row["studentPersonalTitle"],
                    'studentInitial' => $row["studentInitial"],
                    'sdegreeCode' => $row["sdegreeCode"],
                    'achedamicYear' => $row["achedamicYear"],
                    'studentContactLan' => $row["studentContactLan"],
                    'studentPermanentAddress' => $row["studentPermanentAddress"],
                    'panel_decision' => $row["panel_decision"],
                    'panel_decision_dec' => $row["panel_decision_dec"],
                    'selectedFromGraduate' => $row["selectedFromGraduate"],
                    'selectedFromProfessional' => $row["selectedFromProfessional"],
                    'selectedFromPendingQulification' => $row["selectedFromPendingQulification"],
                    'selectedFromSpecialApprove' => $row["selectedFromSpecialApprove"],



                );


                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}



if (($_POST["action"] == "data4ApplicantData")) {
    $response = array();
    $sql = "SELECT t1.applicationNo as applicationNo, t1.studentName as studentName
            ,t1.studentNIC as studentNIC,t1.studentContactMobile as studentContactMobile,t1.studentContactEmail as studentContactEmail
            FROM applicantspersonal as t1 
            where applicationNo= '" . $_POST['applicationNo'] . "';";
    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {

            $responseData;
            $count = 0;
            while ($row = $result->fetch_assoc()) {

                $responseData =  array(
                    'status' => 200,
                    'applicationNo' => $row["applicationNo"],
                    'studentName' => $row["studentName"],
                    'studentNIC' => $row["studentNIC"],
                    'studentContactMobile' => $row["studentContactMobile"],
                    'studentContactEmail' => $row["studentContactEmail"]
                );


                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}




if (($_POST["action"] == "data4getAppointPanelList")) {
    $degreeCode = $_POST['degreeCode'];
    $academicYear = $_POST['academicYear'];


    $response = array();
    $sql = "SELECT *
            FROM interview_panel
            where degreeCode= '" . $degreeCode  . "' and achedamicYear= '" . $academicYear . "';";
    logfiles($sql);

    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {

            $responseData;
            $count = 0;
            while ($row = $result->fetch_assoc()) {

                $responseData =  array(
                    'status' => 200,
                    'panel_id' => $row["panel_id"],
                    'panel_name' => $row["panel_name"],
                    'degreeCode' => $row["degreeCode"],
                    'achedamicYear' => $row["achedamicYear"],
                    'interviewdate' => $row["interviewdate"],
                    'interviewtime' => $row["interviewtime"]
                );


                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}


if (($_POST["action"] == "data4getAppointPanelListByID")) {
    $panel_id = $_POST['panelId'];


    $response = array();
    $sql = "SELECT *
            FROM interview_panel
            where panel_id = '" . $panel_id  . "';";
    logfiles($sql);
    // echo $sql;
    $result = $dbCon->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {

            $responseData;
            $count = 0;
            while ($row = $result->fetch_assoc()) {

                $responseData =  array(
                    'status' => 200,
                    'panel_id' => $row["panel_id"],
                    'panel_name' => $row["panel_name"],
                    'degreeCode' => $row["degreeCode"],
                    'achedamicYear' => $row["achedamicYear"],
                    'interviewdate' => $row["interviewdate"],
                    'interviewtime' => $row["interviewtime"]
                );


                array_push($response, $responseData);
            }
        } else {
            $responseData = array('status' => 400, 'message' => 'Data is not availbale');
            array_push($response, $responseData);
        }
    } else {
        $responseData = array('status' => 400, 'message' => 'Invalid Application No');
        array_push($response, $responseData);
    }
    echo json_encode($response);
}




if (($_POST["action"] == "data4removeApplicantPanel")) {

    $stuData = json_decode($_POST['stu_Data'], true);
    foreach ($stuData as $student) {
        $applicationNo = $student['Application No'];
        $panelUpdate = "Update applicantspersonal set panel_no = '0' WHERE applicationNo ='" . $applicationNo . "'";
        logfiles($panelUpdate);

        $dbCon->query($panelUpdate);
    }
    $response = array('status' => 200, 'message' => 'Updated successfully');
    echo json_encode($response);
}


if (($_POST["action"] == "data4UpdateInterViewDecision")) {
    $response;
    $updateQ;
    if (isset($_POST['selectedNote'])) {

        $updateQ = "Update applicantspersonal set panel_decision = '" . $_POST['status'] . "' , 
        panel_decision_dec = '" . $_POST['selectedNote'] . "' ,
        selectionCategory = '" . $_POST['selectionCategory'] . "' ,
        selectedFromGraduate = '" . $_POST['selectedFromGraduate'] . "' ,
        selectedFromProfessional = '" . $_POST['selectedFromProfessional'] . "' ,
        selectedFromPendingQulification = '" . $_POST['selectedFromPendingQulification'] . "' ,
        selectedFromSpecialApprove = '" . $_POST['selectedFromSpecialApprove'] . "'         
        WHERE applicationNo ='" . $_POST['apNo'] . "'";
    } else {
        $updateQ = "Update applicantspersonal set panel_decision = '" . $_POST['status'] . "' WHERE applicationNo ='" . $_POST['apNo'] . "'";
    }
    if ($dbCon->query($updateQ)) {
        logfiles($updateQ);

        $response = array('status' => 200, 'message' => 'Updated successfully');
    } else {
        $response = array('status' => 400, 'message' => 'Not updated');
    }
    echo json_encode($response);
}




if (($_POST["action"] == "ShedueInterViewAndCreatePanel")) {

    $panelName = $_POST['panelName'];
    $interViewDate = $_POST['interViewDate'];
    $interViewTime = $_POST['interViewTime'];
    $degreeCode = $_POST['degreeCode'];
    $academicYear = $_POST['academicYear'];

    $sql = "INSERT INTO interview_panel  (panel_name, degreeCode, achedamicYear, interviewdate,interviewtime) VALUES (
        '" . $panelName . "',
        '" . $degreeCode . "',
        '" . $academicYear . "',
        '" . $interViewDate . "',
        '" . $interViewTime . "'
        )";

    $stuData = json_decode($_POST['stu_Data'], true);

    if ($dbCon->query($sql) === TRUE) {
        logfiles($sql);

        $panel_id = $dbCon->insert_id;

        foreach ($stuData as $student) {
            $applicationNo = $student['Application No'];
            $examSelection = "Update applicantspersonal set panel_no = '" . $panel_id . "' WHERE applicationNo ='" . $applicationNo . "'";
            logfiles($examSelection);

            $dbCon->query($examSelection);
        }

        $response = array('status' => 200, 'message' => 'Form submitted successfully');
        echo json_encode($response);
    } else {
        $response = array('status' => 400, 'message' => 'Form submission failed');
        echo json_encode($response);
    }
}


if (($_POST["action"] == "ShedueInterViewAndUpdatePanel")) {

    $panelName = $_POST['panelName'];
    $interViewDate = $_POST['interViewDate'];
    $interViewTime = $_POST['interViewTime'];
    $degreeCode = $_POST['degreeCode'];
    $panelId = $_POST['panelId'];
    $academicYear = $_POST['academicYear'];


    $sql = "Update interview_panel set 
    panel_name = '" . $panelName . "' ,
    interviewdate = '" . $interViewDate . "' ,
    interviewtime = '" . $interViewTime . "'    
    WHERE panel_id ='" . $panelId . "'";

    $stuData = json_decode($_POST['stu_Data'], true);
    // print_r($stuData);
    // die();
    if ($dbCon->query($sql) === TRUE) {
        logfiles($sql);

        $sql2 = "Update applicantspersonal set panel_no = '0' WHERE panel_no ='" . $panelId . "'";
        logfiles($sql2);

        $dbCon->query($sql2);
        foreach ($stuData as $student) {
            $applicationNo = $student['Application No'];
            $examSelection = "Update applicantspersonal set panel_no = '" . $panelId . "' WHERE applicationNo ='" . $applicationNo . "'";
            logfiles($examSelection);

            $dbCon->query($examSelection);
        }

        $response = array('status' => 200, 'message' => 'Form submitted successfully');
        echo json_encode($response);
    } else {
        $response = array('status' => 400, 'message' => 'Form submission failed');
        echo json_encode($response);
    }
}

$dbCon->close();
