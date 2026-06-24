<?php
// $getSQL["data4Rerep_examDownload"]
if(!session_id()){
	session_start();
}

include 'dbsetting.php';
include 'rules/mark.php';
include 'log.php';



$msg2Client = "";
$authenticated = 0;
/***********************************************************************************************
The following session varibles should be set by the client program and using Ajax send function.
These are used in the insert method of the dbOperation class.
 ************************************************************************************************/

/*********
patientSex=M&patientDateofbirth=&patientAge=53&patientCitizenship=LK&patientEthnicgroup=SIN&patientReligion=BU&patientMaritalstatus=BU&patientAddressLine01=415/4&patientAddressLine02=Thimbirigasyaya Road&patientAddressLine03=Colombo - 05&patientAddressDSdivision=Thimbirigasyaya&patientAddressDistrict=Colombo - 05&patientContactLand01=0112500318&patientContactLand02=&patientContactMobile01=0714449227&patientContactMobile02=&patientContactEmail=gamini@kln.ac.lk&=INS0000001&=UNIT000002&=WARD000001
 *********************/

//$_POST["action"]="get";
//$_POST["interface"] = "data4SocialScienceRegList";  

// $_POST["degreeCode"] = 'MAARCH';
// $_POST["studentNIC"] = '841410572V';
// $_POST["studentNo"]  = 'FGS/MA/ARCH/2016/001';

// $_POST["paymentCompleted"] = 'YES';



/***************************************************************************************************
Session Management 
 ****************************************************************************************************/

/********************************************removed***********************************************************************/
/*	if(!isset($_SESSION[$_POST['userId']['authenticated']])){
		if($_POST['interface']=='getInitial'){
			$authenticated = check4Authentication($hostName, $userName, $passWord, $dbName);
			if($authenticated){
				session_start();
				$_SESSION[$_POST['userId']['authenticated']] = 1; // 0 => Not Logged In

				//echo "Session has been started for the user: ".$_POST['userId'];
			} else {
				
				// Should take appropriate actions for unauthenticated users who try to login to the system
	
			}
		} else {
			
				// actions to be taken against unauthenticted, not logged in users who try to get the system services

		}
	} else {
		$_SESSION[$_POST['userId']['authenticated']] = 1; // should be removed after completing this section
		// actions for authenticated users who want some services
	}
*/

/********************************************removed***********************************************************************/



function check4Authentication($hostName, $userName, $passWord, $dbName)
{
	$indexCount = 'ok1';
	$mysqli = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

	if ($mysqli->connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	} else {
		$qry = "select * from user where userId='" . $_POST['userId'] . "';";
		$res = $mysqli->query($qry);
		if ($res->num_rows > 0) {
			$res->data_seek(0);
			$row = $res->fetch_assoc();

			//echo $row['userId']."--".$row['passWd']."--".$row['userName']."--".$row['roleId']."--".$row['instituteCode']."--".$row['unitCode']."--".$row['departmentCode'];
			return 1; // A vaid user

		} else {

			//echo "No Records";
			return 0; // No such user
		}
	}
}

/*******************************************************************************************************************/
/***************************************************************************************************
Server DateTime 
 ****************************************************************************************************/

date_default_timezone_set('Asia/Colombo');
$currentDate = date('Y-m-d');

if ($_POST["interface"] == "addstudentpayment") {
	$_POST["paymentDate"] = date("Y.m.d");
	$_POST["paymentTime"] = date("H:i:s");
}
if ($_POST["interface"] == "addnewBudget") {
	$_POST["budgetestimatedDate"] = date("Y.m.d");
	$_POST["budgetestimatedTime"] = date("H:i:s");
}
if ($_POST["interface"] == "addVoucherDiploma") {
	$_POST["issueDate"] = date("Y.m.d");
	$_POST["issueTime"] = date("H:i:s");
}
if ($_POST["interface"] == "addstudentotherpayment") {
	$_POST["paymentDate"] = date("Y.m.d");
	$_POST["paymentTime"] = date("H:i:s");
}
if ($_POST["interface"] == "addExtendedVoucher") {
	$_POST["issueDate"] = date("Y.m.d");
	$_POST["issueTime"] = date("H:i:s");
}
if ($_POST["interface"] == "addTransactionDetails") {
	$_POST["BOSTransactionDateTime"] = date("Y.m.d+H:i:s");
}
if ($_POST["interface"] == "updateTransactionDetailsFGS") {
	$_POST["FGSTransactionDateTime"] = date("Y.m.d+H:i:s");
}
if ($_POST["interface"] == "updateTransactionDetailsSenate") {
	$_POST["SenateTransactionDateTime"] = date("Y.m.d+H:i:s");
}

if ($_POST["interface"] == "adduser") {
	$_POST["createDateTime"] = date("Y.m.d+H:i:s");
}

if ($_POST["interface"] == "addStudentNote") {
	$_POST["requestedDate"] = date("Y-m-d");
}

if ($_POST["interface"] == "addApplicantNote") {
	$_POST["requestedDate"] = date("Y-m-d");
}

if ($_POST["interface"] == "updateNote") {
	$_POST["confirmedDate"] = date("Y-m-d");
}

if ($_POST["interface"] == "addStudentsPayments") {
	$_POST["paymentdate"] = date("Y-m-d");
}
if ($_POST["interface"] == "updatePaymentList") {
	$_POST["payCompleteDate"] = date("Y-m-d");
	$_POST["payCompleteTime"] = date("H:i:s");
}

if ($_POST["interface"] == "addStudentAccounts") {
	$_POST["activeDate"] = date("Y.m.d+H:i:s");
} //

if ($_POST["interface"] == "updateStudentAccounts") {
	$_POST["activeDate"] = date("Y.m.d+H:i:s");
} //addStudentAccounts

/*****************************************************************************************************
There should be $InterfaceTbls array element for each interface used for adding and updating database.
 ******************************************************************************************************/
//admission
$interfaceTbls["data4getAdmissionStudent"] = array("student", "university", "faculty", "degree");
$interfaceTbls["data4getAdmissionSubject"] = array("timetable", "studentselection", "subject", "degree");
$interfaceTbls["data4getAdmissionDegree"] = array("degree");

//repeat admission
$interfaceTbls["data4getRep_AdmissionStudent"] = array("student", "university", "faculty", "degree");
$interfaceTbls["data4getRep_AdmissionSubject"] = array("rep_timetable", "studentRepeatSelection", "subject", "degree");

//repeat count
$interfaceTbls["data4rep_examDownload"] = array("studentRepeatSelection", "student");



//admission check user
$interfaceTbls["data4checkUserExamAdmission"] = array("user", "role");
$interfaceTbls["data4checkdepartmentExamAdmission"] = array("degree");


// LibraryIdCode
$interfaceTbls["data4getLibCode"] = array("LibraryIdCode");
$interfaceTbls["data4RegisterList"] = array("applicantspersonal", "degree", "programmetype", "faculty", "university", "student", "studenttransfer");

//selected list check user
$interfaceTbls["data4checkUserSelectedApplicant"] = array("user", "role");
$interfaceTbls["data4checkdepartmentSelectedApplicant"] = array("degree");

//exam application check user
$interfaceTbls["data4checkUserExamApplication"] = array("user", "role");
$interfaceTbls["data4checkdepartmentExamApplication"] = array("degree");


//results upload & download check user
$interfaceTbls["data4checkUserExamUpDown"] = array("user", "role");
$interfaceTbls["data4checkdepartmentExamUpDown"] = array("degree");

$interfaceTbls["data4checkUserRegisterStudent"] = array("user", "role");
$interfaceTbls["data4checkdepartmentRegisterStudent"] = array("degree");
//Exam Results bulk
$interfaceTbls["data4addProgramm"] = array("degree");
$interfaceTbls["data4addaccy"] = array("student");
$interfaceTbls["data4addSubject"] = array("subject");
$interfaceTbls["addResults"] = array("examresults");

//subject
$interfaceTbls["data4getdegree"] = array("degree");
$interfaceTbls["data4getsubjectDetails"] = array("subject");
$interfaceTbls["addSubject"] = array("subject");
$interfaceTbls["updateSubject"] = array("subject");
$interfaceTbls["deleteSubject"] = array("subject");

$interfaceTbls["data4viewdegreeSubjects"] = array("degree");
$interfaceTbls["data4viewtsubjectDetails"] = array("subject");

$interfaceTbls["data4DownloadsubjectDetails"] = array("subject");
$interfaceTbls["data4DownloaddegreeSubjects"] = array("degree");
$interfaceTbls["data4DownloadStudentMarks"] = array("studentselection", "student");
$interfaceTbls["uploadMarksList"] = array("examresults");

/**Temp Down**/
//$interfaceTbls["data4DownloadStudentMarks"] = array("studentselection" , "student");
$interfaceTbls["data4examResultsSubWise"] = array("examresults", "subject", "student");
$interfaceTbls["data4examResultsSemWise"] = array("examresults", "subject", "student");
$interfaceTbls["data4examResultsSemWiseFinal"] = array("student_final_result");
$interfaceTbls["data4examResultsSemWiseSubjects"] = array("subject");

$interfaceTbls["data4examResultsYearWise"] = array("examresults", "subject", "student");
$interfaceTbls["data4examResultsYearWiseSubjects"] = array("subject");
$interfaceTbls["data4examResultsYearWiseFinal"] = array("student_final_result");
//Final Result
$interfaceTbls["data4viewdegreeforFinal"] = array("degree");
$interfaceTbls["data4finalExamResultsView"] = array("examresults", "subject", "student");
$interfaceTbls["data4finalExamCriteria"] = array("final_result_criteria");
$interfaceTbls["addStudentFinalResults"] = array("student_final_result");

$interfaceTbls["data4finalExamResultsViewSem"] = array("examresults", "subject", "student");
$interfaceTbls["data4finalExamCriteriaSem"] = array("final_result_criteria");
$interfaceTbls["addStudentFinalResultsSem"] = array("student_final_result");

$interfaceTbls["data4finalExamCriteriaAdd"] = array("final_result_criteria");
$interfaceTbls["addfinalCriteria"] = array("final_result_criteria");
$interfaceTbls["updatefinalCriteria"] = array("final_result_criteria");

//pass list
$interfaceTbls["data4examPassReport"] = array("student_final_result", "student");


//Exam Results
$interfaceTbls["data4addExamResults"] = array("student");
$interfaceTbls["addExamResults"] = array("examresults");
$interfaceTbls["data4UpdateInfoStudentTransfer"] = array("degree");

//Applicant Transfer
$interfaceTbls["data4TransferApplicant"] = array("applicantspersonal");
$interfaceTbls["data4UpdateInfo"] = array("degree");
$interfaceTbls["updatetransferApplicant"] = array("applicantspersonal");

//Note n Notification - Nishadi
$interfaceTbls["addStudentNote"] = array("notes");
$interfaceTbls["addApplicantNote"] = array("notes");
$interfaceTbls["updateNote"] = array("notes");
$interfaceTbls["data4StudentNotificationList"] = array("student");
$interfaceTbls["data4Notificationcheckdepartment"] = array("degree");
$interfaceTbls["data4PendingConfirmNote"] = array("notes");
$interfaceTbls["data4ApplicantNotificationList"] = array("applicantspersonal");
$interfaceTbls["data4MessageList"] = array("addmessage");
$interfaceTbls["data4FacultyList"] = array("faculty");

//****************added 23.8.2016*****************************
$interfaceTbls["data4ViewDegreeName"] = array("degree");
$interfaceTbls["data4checkUserInterview"] = array("user", "role");
$interfaceTbls["data4ViewApplicants"] = array("appverticalView");
$interfaceTbls["data4ViewApplicants2"] = array("appverticalView");
$interfaceTbls["data4ViewApplicants3"] = array("appverticalView");
$interfaceTbls["data4ViewApplicants4"] = array("appverticalView");

$interfaceTbls["data4ViewEduApplicants"] = array("appverticalView");
$interfaceTbls["data4ViewEduApplicants2"] = array("appverticalView");
$interfaceTbls["data4ViewEduApplicants3"] = array("appverticalView");
$interfaceTbls["data4ViewEduApplicants4"] = array("appverticalView");

$interfaceTbls["data4ListName"] = array("document");

//************************************************************

//******************************added 1.9.2016************************
$interfaceTbls["data4SelectedApplicantList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree", "student");
$interfaceTbls["data4returnApplicantList"] = array("user,role");

//***********************************

//******************************added 2.9.2016************************
$interfaceTbls["data4ApplicantSelection"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree", "applicantseducation");
$interfaceTbls["data4checkdepartmentSelection"] = array("degree");
$interfaceTbls["data4checkUserSelection"] = array("user");
$interfaceTbls["addBulkNotesSelection"] = array("notes");
$interfaceTbls["data4ApplicantProfileSelection"] = array("applicantspersonal", "applicantseducation", "applicantswork", "applicantsother", "applicantsresearch");
$interfaceTbls["data4ApplicantQualficationDetailsSelection"] = array("applicantseducation");
$interfaceTbls["data4ApplicantworkDetailsSelection"] = array("applicantswork");
$interfaceTbls["deleteApplicationFormSelection"] = array("applicantspersonal");
//**********************************************************************************


//************19.9.2016
$interfaceTbls["data4checkdepartmentInterview"] = array("degree");

//************22.9.2023
$interfaceTbls["data4wifiCreation"] = array("student");

$interfaceTbls["updateEditApplicantDetails"] = array("applicantspersonal");
$interfaceTbls["updateEditStudentDetails"] = array("student");

$interfaceTbls["getInitial"] = array("user");
//transactiontype
$interfaceTbls["data4formTransactionType"] = array("faculty", "department", "degree", "transactiontype");
$interfaceTbls["addTransactionType"] = array("transactiontype");

//University
$interfaceTbls["adduniversity"] = array("university");
$interfaceTbls["updateuniversity"] = array("university");
$interfaceTbls["deleteuniversity"] = array("university");
$interfaceTbls["data4ViewUniversity"] = array("university");

//Faculty
$interfaceTbls["data4addfaulty"] = array("university");
$interfaceTbls["addfaulty"] = array("faculty");
$interfaceTbls["updatefaulty"] = array("faculty");
$interfaceTbls["deletefaulty"] = array("faculty");
$interfaceTbls["data4ViewFaculty"] = array("faculty");

//Department
$interfaceTbls["data4addDepartment"] = array("faculty", "university");
$interfaceTbls["adddepartment"] = array("department");
$interfaceTbls["updatedepartment"] = array("department");
$interfaceTbls["deletedepartment"] = array("department");
$interfaceTbls["data4ViewDepartment"] = array("university", "faculty", "department");

//Degree
$interfaceTbls["data4addDegree"] = array("programmetype", "university", "faculty", "department");
$interfaceTbls["addDegree"] = array("degree", "degreeforpayment");
$interfaceTbls["updateDegree"] = array("degree");
$interfaceTbls["deleteDegree"] = array("degree");
$interfaceTbls["data4ViewDegree"] = array("degree", "programmetype", "university");
$interfaceTbls["data4EligibleCriteria"] = array("criteria");
$interfaceTbls["data4EligibleCriteria2"] = array("criteria");

//DegreeDetails
$interfaceTbls["data4addDegreeDetails"] = array("university", "faculty", "department", "degree", "budget", "category", "subcategory");
$interfaceTbls["addDegreeDetails"] = array("batch");
$interfaceTbls["updateDegreeDetails"] = array("batch");
$interfaceTbls["deleteDegreeDetails"] = array("batch");
$interfaceTbls["data4ViewDegreeDetails"] = array("university", "faculty", "department", "batch", "degree");

//Criteria
$interfaceTbls["addcriteria"] = array("criteria");
$interfaceTbls["updatecriteria"] = array("criteria");
$interfaceTbls["deletecriteria"] = array("criteria");
$interfaceTbls["data4ViewCriteria"] = array("criteria");

//ProgrammeType
//$interfaceTbls["addprogrammeType"]= array("programmetype");
$interfaceTbls["data4addprogrammeType"] = array("university", "faculty", "department", "programmetype");
$interfaceTbls["addprogrammeType"] = array("programmetype");
$interfaceTbls["updateprogrammeType"] = array("programmetype");
$interfaceTbls["deleteprogrammeType"] = array("programmetype");
$interfaceTbls["data4ViewProgrammeType"] = array("university", "faculty", "department", "programmetype");

//NewCourseUnit
$interfaceTbls["addNewCourseUnit"] = array("newcourseunit");
$interfaceTbls["updateNewCourseUnit"] = array("newcourseunit");
$interfaceTbls["deleteNewCourseUnit"] = array("newcourseunit");
$interfaceTbls["data4ViewNewCourseUnit"] = array("newcourseunit");

//CourseUnit
$interfaceTbls["data4addCourseUnit"] = array("university", "department", "faculty", "programmetype", "degree");
$interfaceTbls["addCourseUnit"] = array("courseunit");
$interfaceTbls["updateCourseUnit"] = array("courseunit");
$interfaceTbls["deleteCourseUnit"] = array("courseunit");
$interfaceTbls["data4ViewCourseUnit"] = array("university", "department", "faculty", "programmetype", "degree", "courseunit", "newcourseunit");
$interfaceTbls["data4getCourseUnits"] = array("newcourseunit");


//User
$interfaceTbls["data4AddUser"] = array("university", "faculty", "department", "degree");
$interfaceTbls["data4AddUser2"] = array("role");


$interfaceTbls["adduser"] = array("user");
$interfaceTbls["updateUser"] = array("user");
$interfaceTbls["deleteUser"] = array("user");
$interfaceTbls["data4ViewUser"] = array("user", "department", "unit", "institute");

//SelectedStudent
$interfaceTbls["data4addSelectedStudent"] = array("department", "faculty", "university");
$interfaceTbls["data4SelectedStudent"] = array("programmetype", "degree");
$interfaceTbls["addSelectedStudent"] = array("selectedstudent");
$interfaceTbls["updateSelectedStudent"] = array("applicantspersonal");
$interfaceTbls["addBulkRegisterNotes"] = array("notes");
//$interfaceTbls["data4ViewSelectedStudent"]= array("university" ,"department" ,"faculty" , "programmetype" , "degree" ,"selectedstudent");

//Voucher
$interfaceTbls["data4VoucherDetails"] = array("budget", "selectedstudent", "degree", "batch", "category", "studentvoucherdetails");
$interfaceTbls["data4VoucherDetails2"] = array("studentvoucherdetails");
$interfaceTbls["data4VoucherId"] = array("studentvoucherdetails");
$interfaceTbls["addVoucherDiploma"] = array("studentvoucherdetails");

//RegistrationLetter
$interfaceTbls["data4RegistrationLetter"] = array("selectedstudent", "degree");
$interfaceTbls["updateRegistrationLetter"] = array("studentvoucherdetails");

//StudentPayment
$interfaceTbls["data4selectedStudentpay"] = array("selectedstudent", "university", "department", "faculty", "programmetype", "degree");
$interfaceTbls["data4PaymentId"] = array("studentreceiptdetails");
$interfaceTbls["addstudentpayment"] = array("studentreceiptdetails");
$interfaceTbls["updatestudentpayment"] = array("studentreceiptdetails");
$interfaceTbls["deletestudentpayment"] = array("studentreceiptdetails");

//StudentRegistration
$interfaceTbls["data4selectedStudentregister"] = array("department", "faculty", "university", "programmetype", "degree");
$interfaceTbls["addStudent"] = array("student");

//StidentCourseUnit
$interfaceTbls["data4seeStudentDetails"] = array("student", "department", "faculty", "programmetype", "payment", "newcourseunit", "degree", "courseunit");
$interfaceTbls["data4StudentRequest"] = array("newcourseunit", "student");
$interfaceTbls["data4seeStudentDetails2"] = array("studentcourseunit");
$interfaceTbls["addStudentDeteilsRequest"] = array("studentcourseunit");

//ExtendedDuration
$interfaceTbls["data4studentExtendedTime"] = array("university", "faculty", "department", "degree", "student", "batch");
$interfaceTbls["data4studentExtendedTime2"] = array("university", "faculty", "department", "degree", "student", "batch", "paymentdetails");
$interfaceTbls["data4VoucherId2"] = array("studentvoucherdetails");

//ExtendedVoucher
$interfaceTbls["data4ExtendedVoucherInvoiceNo"] = array("studentvoucherdetails");
$interfaceTbls["addExtendedVoucher"] = array("studentvoucherdetails");
$interfaceTbls["UpdateExtendedTime"] = array("student");

//StudentOtherPayment
$interfaceTbls["data4studentOtherPayment"] = array("university", "faculty", "department", "programmetype", "degree", "student");
$interfaceTbls["addstudentotherpayment"] = array("studentreceiptdetails");
$interfaceTbls["updatestudentotherpayment"] = array("studentreceiptdetails");
$interfaceTbls["deletestudentotherpayment"] = array("studentreceiptdetails");
$interfaceTbls["data4PaymentId2"] = array("studentreceiptdetails");

//LecturerRegistration
$interfaceTbls["data4addLectureRegistration"] = array("university", "department", "faculty");
$interfaceTbls["addLecture"] = array("lecturer");

//LecturerDetails
$interfaceTbls["data4seeLecturerDetails"] = array("lecturer", "department", "faculty", "category", "subcategory", "budget");
$interfaceTbls["data4seeLecturerDetails2"] = array("lecturercourseunit");
$interfaceTbls["data4LecturerRequest"] = array("newcourseunit", "degree", "courseunit", "payment");
$interfaceTbls["addFormLecturerRequest"] = array("lecturercourseunit");

//Category
$interfaceTbls["addNewCategory"] = array("category");
$interfaceTbls["updateNewCategory"] = array("category");
$interfaceTbls["deleteNewCategory"] = array("category");
$interfaceTbls["data4ViewNewCategory"] = array("category");

//Subcategory
$interfaceTbls["data4addSubcategory"] = array("category");
$interfaceTbls["addSubCategory"] = array("subcategory");
$interfaceTbls["updateSubCategory"] = array("subcategory");
$interfaceTbls["deleteSubCategory"] = array("subcategory");
$interfaceTbls["data4ViewSubCategory"] = array("subcategory");

//BudgetSheet
$interfaceTbls["data4AddCategory"] = array("category", "subcategory");
$interfaceTbls["data4Budgetsheet"] = array("university", "faculty", "department");
$interfaceTbls["data4budgetId"] = array("budget");
$interfaceTbls["addnewBudget"] = array("budget");

//ReviseBudget
$interfaceTbls["data4BudgetSheetData"] = array("university", "faculty", "department", "programmetype", "degree", "budget");
$interfaceTbls["data4AddCategory1"] = array("budget", "subcategory", "category");

//Reports
$interfaceTbls["data4ViewStudentPayment"] = array("university", "faculty", "department", "programmetype", "degree", "studentreceiptdetails");
$interfaceTbls["data4viewstudentPayment2"] = array("university", "faculty", "department", "programmetype", "degree", "studentreceiptdetails");
$interfaceTbls["data4ViewFirstInstallementStudent"] = array("studentreceiptdetails");
$interfaceTbls["data4registeredStudentList"] = array("university", "faculty", "department", "programmetype", "degree", "student");
$interfaceTbls["data4formPaymentList"] = array("faculty", "department", "degree", "studentreceiptdetails");

//EligibleTest
$interfaceTbls["data4EligibleTest"] = array("programmetype", "degree", "criteria");

//ApplicationForm 
$interfaceTbls["data4ApplicationForm"] = array("programmetype", "degree", "faculty", "department");
$interfaceTbls["addApplicationForm"] = array("applicantspersonal");
$interfaceTbls["updateApplicationForm"] = array("applicantspersonal");
$interfaceTbls["data4EditApplicationForm"] = array("applicantspersonal");
$interfaceTbls["data4ApplicationNo"] = array("applicantspersonal");
$interfaceTbls["data4ApplicationFormTwo"] = array("applicantspersonal"); //NextButton

//ApplicationFormTwo
$interfaceTbls["addApplicationFormTwo"] = array("applicantseducation");
$interfaceTbls["updateApplicationFormTwo"] = array("applicantseducation");
$interfaceTbls["data4EditApplicationFormTwo"] = array("applicantseducation");
$interfaceTbls["data4ApplicationFormThree"] = array("applicantspersonal", "applicantseducation"); //NextButton

//ApplicationFormThree
$interfaceTbls["addApplicationFormThree"] = array("applicantswork");
$interfaceTbls["updateApplicationFormThree"] = array("applicantswork");
$interfaceTbls["data4EditApplicationFormThree"] = array("applicantswork");
$interfaceTbls["data4ApplicationFormFourth"] = array("applicantspersonal", "applicantseducation", "applicantswork"); //NextButton

//ApplicationFormFourth
$interfaceTbls["addApplicationFormFourth"] = array("applicantsother");
$interfaceTbls["updateApplicationFormFourth"] = array("applicantsother");
$interfaceTbls["data4EditApplicationFormFourth"] = array("applicantsother");
$interfaceTbls["data4ApplicationFormFive"] = array("applicantspersonal", "applicantseducation", "applicantswork", "applicantsother"); //NextButton

//ApplicationFormFive 
$interfaceTbls["addApplicationFormFive"] = array("applicantsresearch");
$interfaceTbls["updateApplicationFormFive"] = array("applicantsresearch");
$interfaceTbls["data4EditApplicationFormFive"] = array("applicantsresearch");

//FinalApplication	
$interfaceTbls["data4FinalApplication"] = array("applicantspersonal", "applicantseducation", "applicantswork", "applicantsother", "applicantsresearch");

//Hiru
$interfaceTbls["data4ReprintCheckUser"] = array("user", "role");
$interfaceTbls["data4StudentProfileDeteilsCheckUser"] = array("user", "role");

//ExportData
$interfaceTbls["data4ExportCSV"] = array("applicantspersonal", "applicantseducation", "applicantswork", "applicantsother", "applicantsresearch");

//$interfaceTbls["data4Budgetsheet2"]= array("programmetype","degree");1
//$interfaceTbls["data4paymentDetails"]= array("university","faculty","department","programmetype","degree");2
//$interfaceTbls["updateStudentAdditionalDetails"]= array("student");3
//$interfaceTbls["data4studentaddiDetails"]= array("university","faculty","department","programmetype","degree","student");4
//$interfaceTbls["data4addStudent"]= array("department","faculty","university");5
//$interfaceTbls["data4StudentPro"]= array("newcourseunit", "student");6
//$interfaceTbls["data4studentpayment"]= array("programmetype" , "degree");7
//$interfaceTbls["data4selectedStudentpayInstalment"]= array("selectedstudent" ,"studentreceiptdetails");8

//$interfaceTbls["addNewCategory"]= array("category");10
//$interfaceTbls["data4addSubcategory"]= array("category");11
// $interfaceTbls["data4selectedStudentpayInstallment"]=array("studentreceiptdetails"); 12
//$interfaceTbls["data4EligibleTestCriteria"]=array("criteria");13

//PrintApplication
$interfaceTbls["data4printFinalApplication"] = array("applicantspersonal", "applicantseducation", "applicantswork", "applicantsother", "applicantsresearch");


//Role
$interfaceTbls["addrole"] = array("role");


//EventManagment
$interfaceTbls["data4event"] = array("degree");
$interfaceTbls["data4event2"] = array("category");
$interfaceTbls["addEvent"] = array("event");
$interfaceTbls["updateEvent"] = array("event");
$interfaceTbls["deleteEvent"] = array("event");
$interfaceTbls["data4viewEvent"] = array("event", "degree", "category");

//Add Old Student
$interfaceTbls["data4AddOldStudent"] = array("programmetype", "degree");
$interfaceTbls["data4AddOldStudentTwo"] = array("university", "faculty");
$interfaceTbls["addOldStudentOne"] = array("student");
$interfaceTbls["data4addOldStudentFormTwo"] = array("student", "degree");
$interfaceTbls["addOldStudentTwo"] = array("studentprofile");
$interfaceTbls["data4LecturerStudentFormTwo"] = array("lecturer");

//StudentProfile
$interfaceTbls["data4DisplayStudentNoforProfile"] = array("student");

$interfaceTbls["data4StudentProfileDetails"] = array("student", "department", "faculty", "programmetype", "payment", "newcourseunit", "degree", "applicantspersonal", "applicantseducation", "applicantswork");
$interfaceTbls["data4StudentpaymentView"] = array("StudentPayment");

$interfaceTbls["data4StudentProfileBulkTransterStudent"] = array("student");
$interfaceTbls["data4StudentProfileTransferStudent"] = array("student");
$interfaceTbls["data4StudentProfileDocument"] = array("documentdata", "document", "decisionmakingpoint", "docdecisiontransaction");
$interfaceTbls["data4profileDocument"] = array("documentdata", "dataitem");
$interfaceTbls["data4profileEducationalDetails"] = array("applicantseducation");
$interfaceTbls["data4profileNote"] = array("noteandnotification");
$interfaceTbls["data4TransferProfile"] = array("studenttransfer");
$interfaceTbls["data4paymentProfile"] = array("coursefeepayments");
$interfaceTbls["data4DisplayNotes"] = array("notes", "user");
$interfaceTbls["data4DisplayApplicatProfile"] = array("applicantspersonal");
$interfaceTbls["data4LoadApplicantView"] = array("");

$interfaceTbls["data4GetReleventApplicant"] = array("applicantspersonal");
$interfaceTbls["data4CommenceDate"] = array("degree", "batch");
$interfaceTbls["data4BulkTransterStudentCommenceData"] = array("degree", "batch");

//Student And Applicant Search
$interfaceTbls["data4paymentBatch"] = array("batch");

//-------------------ADD NEW ---------------------------------------------
$interfaceTbls["data4profilerefreeDetails"] = array("applicantswork");
//$interfaceTbls["data4profilExamResults"]=array("examresults");

//------------------------END-----------------------------------------------

//ApplicantList & Profile
$interfaceTbls["data4ApplicantList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree");
$interfaceTbls["data4SendSMApplicantList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree");
$interfaceTbls["data4SendSMtDueAmmoutList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree");
$interfaceTbls["data4SendSMSelectedApplicantList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree");
$interfaceTbls["data4SendSMPreRegStudentList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree");
$interfaceTbls["data4SendSMRegStudentList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree");

// $interfaceTbls["data4checkdepartment"] = array("degree");
$interfaceTbls["data4LoadApplicantList"] = array("degree");
$interfaceTbls["data4LoadPendingApplicantList"] = array("degree");

$interfaceTbls["data4LoadInterviewScreenList"] = array("degree");
$interfaceTbls["data4LoadStudentQulificationList"] = array("degree");
$interfaceTbls["data4LoadApplicantSelection"] = array("degree");
$interfaceTbls["data4LoadListofSelectedApplicant"] = array("degree");
$interfaceTbls["data4LoadFirstAttemptExamResultUpload"] = array("degree");

$interfaceTbls["data4getDepartmentAdmissionForm"] = array("degree");
$interfaceTbls["data4getPaperCountForm"] = array("degree");

$interfaceTbls["data4ApplicantProfile"] = array("applicantspersonal", "applicantseducation", "applicantswork", "applicantsother", "applicantsresearch");
// $interfaceTbls["data4checkUser"] = array("user");
$interfaceTbls["addBulkNotes"] = array("notes");
//$interfaceTbls["addApplicantList"]=array("selectedstudent");
$interfaceTbls["updateApplicantList"] = array("applicantspersonal");
$interfaceTbls["data4ApplicantQualficationDetails"] = array("applicantseducation");
$interfaceTbls["data4ApplicantworkDetails"] = array("applicantswork");
//$interfaceTbls["UpdateApplicant"]=array("applicantspersonal");

$interfaceTbls["data4SelectedStudentList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree", "student");

$interfaceTbls["data4LastRegistrationNo"] = array("student", "degree", "programmetype");
//by Nishadi
$interfaceTbls["data4AddStudentAccount"] = array("student", "degree");
$interfaceTbls["data4UpdateStudentAccount"] = array("studentuser");
//
$interfaceTbls["addStudentAccounts"] = array("studentuser");
$interfaceTbls["updateStudentAccounts"] = array("studentuser");
$interfaceTbls["addSelectedStudentList"] = array("student");
$interfaceTbls["data4TransferStudentList"] = array("studenttransfer");


$interfaceTbls["addStudentProfileDeteils"] = array("studentprofile");

$interfaceTbls["data4ThesisNotification"] = array("student", "studentprofile", "faculty", "programmetype", "degree");

$interfaceTbls["addThesisNotification"] = array("thesisNotify");


//added 2015/05/11
//Appoint Examiner
$interfaceTbls["data4AppointExaminers"] = array("student", "faculty", "programmetype", "degree", "thesis", "department", "lecturer");

$interfaceTbls["data4ExaminerReccomand"] = array("student", "faculty", "programmetype", "degree", "thesis", "department", "lecturer");

$interfaceTbls["ThesisSubmission"] = array("examinerappointrequest");

$interfaceTbls["addExaminerReccomandBOS"] = array("examinerbos");
$interfaceTbls["updateExaminerReccomandBOS"] = array("examinerbos");


$interfaceTbls["addExaminerReccomandFGS"] = array("examinerfgsboard");
$interfaceTbls["updateExaminerReccomandFGS"] = array("examinerfgsboard");


$interfaceTbls["addExaminerReccomandSenate"] = array("examinersenate");
$interfaceTbls["updateExaminerReccomandSenate"] = array("examinersenate");


$interfaceTbls["addExaminerRemarks"] = array("examiner");
$interfaceTbls["updateExaminerRemarks"] = array("examiner");


$interfaceTbls["updateThesisNotifiDate"] = array("thesis");

$interfaceTbls["data4ThesisEvaluation"] = array("student", "lecturer", "examiner", "thesis", "examinersendingthesis", "reportreminder", "reports", "reportreminder");

$interfaceTbls["addThesisSending"] = array("examinersendingthesis");

$interfaceTbls["addReminders"] = array("reportreminder");

$interfaceTbls["addThesisReturn"] = array("reports");

$interfaceTbls["addPannelBoard"] = array("pannelboard");
$interfaceTbls["updatePannelBoard"] = array("pannelboard");

$interfaceTbls["updateThesisSubmit"] = array("thesis");

$interfaceTbls["addThesisSubmitUnderCondition"] = array("thesisundercondition");

$interfaceTbls["addThesisSendToExamBranch"] = array("thesisanddocumenttoexambranch");

$interfaceTbls["data4ExaminerDetailsView"] = array("student", "faculty", "programmetype", "degree", "thesis", "department", "lecturer", "examinerbos", "examinerfgsboard", "examinersenate");

$interfaceTbls["addVivaBoard"] = array("vivaofthesis");
$interfaceTbls["updateVivaBoard"] = array("vivaofthesis");

$interfaceTbls["data4ThesisReminders"] = array("student", "lecturer", "examiner", "thesis", "examinersendingthesis", "reportreminder", "reports", "reportreminder");

$interfaceTbls["data4ThesisNotifyView"] = array("student", "thesis", "thesisNotify");

//add Thesis title
$interfaceTbls["data4AddThesisTitle"] = array("studentprofile");
$interfaceTbls["addThesisTitle"] = array("thesis");
$interfaceTbls["updateThesisTitle"] = array("thesis");

//addTransaction
$interfaceTbls["addTransactionDetails"] = array("studenttransaction");
$interfaceTbls["updateTransactionDetailsFGS"] = array("studenttransaction");
$interfaceTbls["updateTransactionDetailsSenate"] = array("studenttransaction");

//data4board transaction
$interfaceTbls["data4TransactionTypeDetails"] = array("transactiontype", "guielement");

//data4transaction student
$interfaceTbls["data4StudentTransaction"] = array("student");

//To list the examiners
$interfaceTbls["data4ExaminerList"] = array("lecturer");

//chamoda..........................................................................
//document
$interfaceTbls["addDocument"] = array("document");
$interfaceTbls["data4formDocument"] = array("document");

//dataItem
$interfaceTbls["addDataItem"] = array("dataitem");
$interfaceTbls["data4formDataItem"] = array("dataitem");
//decision Making point
$interfaceTbls["addDecisionMakingPoint"] = array("decisionmakingpoint");
$interfaceTbls["data4formDecisionMakingPoint"] = array("decisionmakingpoint");
//document Item
$interfaceTbls["data4formDocumentItem"] = array("document");
$interfaceTbls["data4dataItems"] = array("dataItem");
$interfaceTbls["addDocumentItem"] = array("documentitem");
//doc decision transaction
//$interfaceTbls["data4formDocDecisionTransaction"]=array("document");
$interfaceTbls["data4decisionMakingPoint"] = array("decisionmakingpoint");
//$interfaceTbls["data4decisionMakingPointTwo"]=array("decisionmakingpoint");

$interfaceTbls["addDocDecisionTransaction"] = array("docdecisiontransaction");
$interfaceTbls["addDocDecisionTransactionTwo"] = array("docdecisiontransaction");
$interfaceTbls["data4AddDocument"] = array("documentitem ,dataitem");
$interfaceTbls["data4studentlist"] = array("student");

$interfaceTbls["data4document"] = array("document");
//$interfaceTbls["data4DocDecision"]=array("documentdata","document","dataitem");
$interfaceTbls["data4formDocDecisionTransaction"] = array("documentdata", "document", "dataitem");
$interfaceTbls["data4formDocDecisionTransactionTwo"] = array("documentdata", "document", "dataitem");
$interfaceTbls["data4decisionprogramm"] = array("degree");
//Sam
$interfaceTbls["addDocumentData"] = array("documentdata");
$interfaceTbls["data4DocName"] = array("document");
$interfaceTbls["data4SequanceNumber"] = array("documentdata");

$interfaceTbls["data4SessionID"] = array("ses_login");

$interfaceTbls["data4ListDocName"] = array("document");
$interfaceTbls["data4ApplicantListPrint"] = array("applicantspersonal,degree");
$interfaceTbls["data4RegisteredStudentListPrint"] = array("applicantspersonal,degree,student");

$interfaceTbls["data4AddListDocument"] = array("documentitem ,dataitem");
$interfaceTbls["data4SequanceNumberList"] = array("documentdata");
$interfaceTbls["data4SessionIDList"] = array("ses_login");
$interfaceTbls["addListDocumentData"] = array("documentdata");
$interfaceTbls["addListNumDocumentData"] = array("documentdata");

$interfaceTbls["data4DegreeList"] = array("degree,lecturer");
$interfaceTbls["data4LecturerList"] = array("lecturer");

$interfaceTbls["data4ApplicantDetailsEdit"] = array("applicantspersonal");
//edit student
$interfaceTbls["data4StudentDetailsEdit"] = array("student");
//user activity 
$interfaceTbls["data4UserActivityDegree"] = array("degree");
$interfaceTbls["data4UserActivity"] = array("user");
$interfaceTbls["addUserPrivilages"] = array("userprivilages");

//print id
$interfaceTbls["data4PrintStudentIDCard"] = array("degree", "student", "batch");
$interfaceTbls["data4BulkTransfer"] = array("degree", "student", "batch");
$interfaceTbls["data4GetEnrollment"] = array("degree", "student", "batch");

/******************Add Student Payments - Nishadi****************/
$interfaceTbls["data4StudentPaymentRecord"] = array("degreeforpayment,student");
$interfaceTbls["addStudentsPayments"] = array("coursefeepayments");
$interfaceTbls["updatePaymentList"] = array("student");
$interfaceTbls["updatePaymentConfirmList"] = array("student");
$interfaceTbls["data4StudentPaymentDetails"] = array("coursefeepayments");
$interfaceTbls["data4StudentPaymentDetails1"] = array("student,degreeforpayment,batch");
$interfaceTbls["data4StudentPaymentDetails2"] = array("degreeforpayment");
//$interfaceTbls["data4StudentPayDetails"]=array("student,degreeforpayment,batch");
$interfaceTbls["data4InstallmentDetails"] = array("installmentdetails");
/***************************************************************/

//re print application 
$interfaceTbls["data4ApplicarionReprint"] = array("applicantspersonal", "applicantseducation", "applicantswork", "degree");
//$interfaceTbls["data4ApplicarionReprint"]=array("applicantspersonal,degree");
$interfaceTbls["data4ApplicarionReprintWork"] = array("applicantswork");
$interfaceTbls["data4ApplicationReprinteducation"] = array("applicantseducation");

$interfaceTbls["deleteApplicationForm"] = array("applicantspersonal");
//	//Application Reporting
$interfaceTbls["data4ApplicationComplete"] = array("applicantspersonal,applicantseducation,applicantswork,degree");
$interfaceTbls["data4ApplicationInComplete"] = array("applicantspersonal,applicantseducation,applicantswork,degree");
$interfaceTbls["addNoteAndNotification"] = array("noteandnotification");

//Thiwanka
$interfaceTbls["data4StudentNotificationList"] = array("applicantspersonal", "student", "university", "faculty", "programmetype", "degree");
$interfaceTbls["data4Notificationcheckdepartment"] = array("degree");
$interfaceTbls["data4StudentReport"] = array("student", "degree", "university", "faculty", "programmetype");
$interfaceTbls["data4viewstudent"] = array("student", "degree", "applicantspersonal");
$interfaceTbls["data4formstudentnew"] = array("faculty", "student", "batch", "degree");
//$interfaceTbls["data4TotalStudentReport"]=array("student");


//letter------------------------------------------------
//$interfaceTbls["data4LetterListDocName"]=array("document");
$interfaceTbls["data4LetterApplicantListPrint"] = array("applicantspersonal", "degree", "student");
$interfaceTbls["data4checkdepartmentLetterApplicantListPrint"] = array("degree");


//$interfaceTbls["data4LetterRegisteredStudentListPrint"]=array("degree,student");
//letter end--------------------------------------------

$interfaceTbls["data4ForeignReport"] = array("applicantspersonal,degree,student");
$interfaceTbls["data4DegreeMediumReport"] = array("degree", "faculty");

//Student Trnansfer------------------------------------
$interfaceTbls["data4studentTransfer"] = array("student");
$interfaceTbls["data4Transferprogramme"] = array("degree");
$interfaceTbls["data4BulkTransferTransferprogramme"] = array("degree");

$interfaceTbls["data4DisplayTransferRules"] = array("transferrules,transfertyperules");
$interfaceTbls["addTransferStudent"] = array("student");
$interfaceTbls["addTransferDetails"] = array("studenttransfer");
$interfaceTbls["updateTransferDetails"] = array("student");
$interfaceTbls["updateTransferapplication"] = array("applicantspersonal");
$interfaceTbls["data4applicantTransfer"] = array("applicantspersonal");
$interfaceTbls["data4getTransferID"] = array("studenttransfer");
$interfaceTbls["addstudentruls"] = array("studentruls");
//Student Trnansfer end------------------------------------

//----------------transfer Rules--------------------------------
$interfaceTbls["data4transferRules"] = array("transferrules");
$interfaceTbls["addTransferRules"] = array("transferrules");
$interfaceTbls["addTransferRulesDetails"] = array("transfertyperules");
//----------------transfer Rules End-----------------------------
//------------------Return--------------------------------------
$interfaceTbls["data4returnListDocument"] = array("user,role");
$interfaceTbls["data4returnStudent"] = array("user,role");
$interfaceTbls["data4returnEditApplicant"] = array("user,role");
$interfaceTbls["data4returnEditStudent"] = array("user,role");
$interfaceTbls["data4returnEditStudentForm"] = array("user,role");

$interfaceTbls["data4returnPrintID"] = array("user,role");
$interfaceTbls["data4returnDocumtMgt"] = array("user,role");
$interfaceTbls["data4returnNoteAndNotification"] = array("user,role");
$interfaceTbls["data4returnBudgetDetails"] = array("user,role");
$interfaceTbls["data4returnPrintLetters"] = array("user,role");
$interfaceTbls["data4returnStudentsTransfer"] = array("user,role");
$interfaceTbls["data4returnBulkPayment"] = array("user,role");

//-------------------Return End-----------------------------------

//message
$interfaceTbls["addMessage"] = array("message");
$interfaceTbls["data4viewMessage"] = array("message");
$interfaceTbls["updateMessage"] = array("message");
$interfaceTbls["deleteMessage"] = array("message");

// $interfaceTbls["addMessage"]=array("message");
$interfaceTbls["data4viewMessageUpdate"] = array("message");
$interfaceTbls["data4viewMessageToUpdate"] = array("addmessage");
// $interfaceTbls["updateMessage"]=array("message");
// $interfaceTbls["deleteMessage"]=array("message");

$interfaceTbls["data4checkUserICT"] = array("user,role");


//application
$interfaceTbls["data4ApplicationFormExam"] = array("student", "degree", "subject");
$interfaceTbls["data4addApplicationForm"] = array("student", "degree", "subject");
$interfaceTbls["addApplicationFormExam"] = array("studentselection");


// $interfaceTbls["data4ApplicationFormRepeteExam"]=array("student", "degree", "subject");
// $interfaceTbls["data4addApplicationRepeteForm"]=array("examresults","subject","degree");
// $interfaceTbls["addApplicationFormRepeteExam"]=array("studentselection");
/*****************************************************************************************************
This section specifies next client interface to be called.
 ******************************************************************************************************/
$stopMain = "";


$nextClientInterface["data4RegisterList"] = "formSelectedStudentList";
// LibraryIdCode
$nextClientInterface["data4getLibCode"] = "formSelectedStudentList";


//admission
$nextClientInterface["data4getAdmissionStudent"] = "formAdmissionCardForm";
$nextClientInterface["data4getAdmissionSubject"] = "formAdmissionCardForm";
$nextClientInterface["data4getAdmissionDegree"] = "formAdmissionCardForm";

//repeat admission
$nextClientInterface["data4getRep_AdmissionStudent"] = "formRepeatAdmissionCardForm";
$nextClientInterface["data4getRep_AdmissionSubject"] = "formRepeatAdmissionCardForm";

//repeat count
$nextClientInterface["data4rep_examDownload"] = "formDownloadRepeatCount";


$nextClientInterface["data4checkUserExamAdmission"] = "formAdmissionCardForm";
$nextClientInterface["data4checkdepartmentExamAdmission"] = "formAdmissionCardForm";

//selected list check user
$nextClientInterface["data4checkUserSelectedApplicant"] = "formSelectedApplicantList";
$nextClientInterface["data4checkdepartmentSelectedApplicant"] = "formSelectedApplicantList";

//exam application check user
$nextClientInterface["data4checkUserExamApplication"] = "formApplication";
$nextClientInterface["data4checkdepartmentExamApplication"] = "formApplication";

//results upload & download check user
$nextClientInterface["data4checkUserExamUpDown"] = "formUploadExaminationResults";
$nextClientInterface["data4checkdepartmentExamUpDown"] = "formUploadExaminationResults";


//Exam Results bulk
$nextClientInterface["data4addProgramm"] = "formAddResults";
$nextClientInterface["data4addaccy"] = "formAddResults";
$nextClientInterface["data4addSubject"] = "formAddResults";
$nextClientInterface["addResults"] = "formAddResults";


//subject
$nextClientInterface["data4getdegree"] = "formAddSubject";
$nextClientInterface["data4getsubjectDetails"] = "formAddSubject";
$nextClientInterface["addSubject"] = "main";
$nextClientInterface["updateSubject"] = "main";
$nextClientInterface["deleteSubject"] = "main";

$nextClientInterface["data4viewdegreeSubjects"] = "formViewSubject";
$nextClientInterface["data4viewtsubjectDetails"] = "formViewSubject";

$nextClientInterface["data4DownloadsubjectDetails"] = "formUploadExaminationResults";
$nextClientInterface["data4DownloaddegreeSubjects"] = "formUploadExaminationResults";
//$nextClientInterface["data4DownloadStudentMarks"] = "formUploadExaminationResults";
$nextClientInterface["uploadMarksList"] = "formUploadExaminationResults";

/**Temp Down**/
$nextClientInterface["data4DownloadStudentMarks"] = "formUploadExamResultsDownTemp";
$nextClientInterface["data4examResultsSubWise"] = "formUploadExamResultsDownTemp";
$nextClientInterface["data4examResultsSemWise"] = "formUploadExamResultsDownTemp";
$nextClientInterface["data4examResultsSemWiseFinal"] = "formUploadExamResultsDownTemp";
$nextClientInterface["data4examResultsSemWiseSubjects"] = "formUploadExamResultsDownTemp";

$nextClientInterface["data4examResultsYearWise"] = "formUploadExamResultsDownTemp";
$nextClientInterface["data4examResultsYearWiseSubjects"] = "formUploadExamResultsDownTemp";
$nextClientInterface["data4examResultsYearWiseFinal"] = "formUploadExamResultsDownTemp";
//Final Result
$nextClientInterface["data4viewdegreeforFinal"] = "formFinalResultConfirm";

$nextClientInterface["data4finalExamResultsView"] = "formFinalResultView";
$nextClientInterface["data4finalExamCriteria"] = "formFinalResultView";
$nextClientInterface["addStudentFinalResults"] = "formExamMenu";

$nextClientInterface["data4finalExamResultsViewSem"] = "formFinalResultViewSem";
$nextClientInterface["data4finalExamCriteriaSem"] = "formFinalResultViewSem";
$nextClientInterface["addStudentFinalResultsSem"] = "formExamMenu";

$nextClientInterface["data4finalExamCriteriaAdd"] = "formFinalResultsCriteriaAdd";
$nextClientInterface["addfinalCriteria"] = "formFinalResultsCriteriaAdd";
$nextClientInterface["updatefinalCriteria"] = "formFinalResultsCriteriaAdd";

//pass list
$nextClientInterface["data4examPassReport"] = "formUploadExamResultsDownTemp";

//Exam Results
$nextClientInterface["data4addExamResults"] = "addExamResults";
$nextClientInterface["addExamResults"] = "addExamResults";
$nextClientInterface["data4UpdateInfoStudentTransfer"] = "formStudentTransfer";

//Applicant Transfer
$nextClientInterface["data4TransferApplicant"] = "transferApplicant";
$nextClientInterface["data4UpdateInfo"] = "transferApplicant";
$nextClientInterface["updatetransferApplicant"] = "transferApplicant";



$nextClientInterface["data4checkUserRegisterStudent"] = "formSelectedStudentList";
$nextClientInterface["data4checkdepartmentRegisterStudent"] = "formSelectedStudentList";


//Note n Notification - Nishadi
$nextClientInterface["addStudentNote"] = "formNoteAndNotification";
$nextClientInterface["addApplicantNote"] = "formNoteAndNotification";
$nextClientInterface["updateNote"] = "formNoteAndNotification";
$nextClientInterface["data4StudentNotificationList"] = "formNoteAndNotification";
$nextClientInterface["data4Notificationcheckdepartment"] = "formNoteAndNotification";
$nextClientInterface["data4PendingConfirmNote"] = "formNoteAndNotification";
$nextClientInterface["data4ApplicantNotificationList"] = "formNoteAndNotification";
$nextClientInterface["data4MessageList"] = "formNoteAndNotification";
$nextClientInterface["data4FacultyList"] = "formNoteAndNotification";


//***************added 23.8.2016***************************************************************

$nextClientInterface["data4ViewDegreeName"] = "formApplicantsForInterview";
$nextClientInterface["data4checkUserInterview"] = "formApplicantsForInterview";
$nextClientInterface["data4ViewApplicants"] = "formInterviewList";
$nextClientInterface["data4ViewApplicants2"] = "formInterviewList2";
$nextClientInterface["data4ViewApplicants3"] = "formInterviewList3";
$nextClientInterface["data4ViewApplicants4"] = "formInterviewList4";

$nextClientInterface["data4ViewEduApplicants"] = "formStudentQulificationList";
$nextClientInterface["data4ViewEduApplicants2"] = "formStudentQulificationList2";
$nextClientInterface["data4ViewEduApplicants3"] = "formStudentQulificationList3";
$nextClientInterface["data4ViewEduApplicants4"] = "formStudentQulificationList4";


$nextClientInterface["data4ListName"] = "formInterviewList";
//*******************************************************


//**********************added 1.9.2016*************************************************************************

$nextClientInterface["data4SelectedApplicantList"] = "formSelectedApplicantList";
$nextClientInterface["data4returnApplicantList"] = "formSelectedApplicantList";
//*******************************************************


//******************************added 2.9.2016*****************************

$nextClientInterface["data4ApplicantSelection"] = "formApplicantSelection";
$nextClientInterface["updateApplicantSelection"] = "formApplicantSelection";
$nextClientInterface["data4checkdepartmentSelection"] = "formApplicantSelection";
$nextClientInterface["data4checkUserSelection"] = "formApplicantSelection";
$nextClientInterface["addBulkNotesSelection"] = "formApplicantSelection";
$nextClientInterface["data4ApplicantProfileSelection"] = "formAplicantProfile";
$nextClientInterface["data4ApplicantQualficationDetailsSelection"] = "formApplicantSelection";
$nextClientInterface["data4ApplicantworkDetailsSelection"] = "formApplicantSelection";
$nextClientInterface["deleteApplicationFormSelection"] = "formApplicantSelection";
$nextClientInterface["data4ApplicationCompleteSelection"] = "formApplicantSelection";
$nextClientInterface["data4ApplicationInCompleteSelection"] = "formApplicantSelection";
//*************************************************************************************

//*************19.9.2016

$nextClientInterface["data4checkdepartmentInterview"] = "formInterviewList";

$nextClientInterface["data4DegreeMediumReport"] = "formAllReport";
$nextClientInterface["updateEditApplicantDetails"] = "updateEditApplicantDetails";
$nextClientInterface["updateEditStudentDetails"] = "updateEditStudentDetails";

//$nextClientInterface["getInitial"] = "main";
//transactiontype
$nextClientInterface["data4formTransactionType"] = "formTransactionType";
$nextClientInterface["addTransactionType"] = "addTransactionType";

//$nextClientInterface["data4formtransactionDetails"]="formtransactionDetails";
//University
$nextClientInterface["adduniversity"] = "adduniversity";
$nextClientInterface["updateuniversity"] = "adduniversity";
$nextClientInterface["deleteuniversity"] = "adduniversity";
$nextClientInterface["data4ViewUniversity"] = "formViewUniversity";

//Faculty
$nextClientInterface["data4addfaulty"] = "addfaulty";
$nextClientInterface["addfaulty"] = "addfaulty";
$nextClientInterface["updatefaulty"] = "addfaulty";
$nextClientInterface["deletefaulty"] = "addfaulty";
$nextClientInterface["data4ViewFaculty"] = "formViewFaculty";

//Department
$nextClientInterface["data4addDepartment"] = "adddepartment";
$nextClientInterface["adddepartment"] = "adddepartment";
$nextClientInterface["updatedepartment"] = "adddepartment";
$nextClientInterface["deletedepartment"] = "adddepartment";
$nextClientInterface["data4ViewDepartment"] = "formViewDepartment";

//Hiru
$nextClientInterface["data4ReprintCheckUser"] = "formReprintApplicantion";
$nextClientInterface["data4StudentProfileDeteilsCheckUser"] = "formStudentProfileDeteils";


//Degree
$nextClientInterface["data4addDegree"] = "addDegree";
$nextClientInterface["addDegree"] = "addDegree";
$nextClientInterface["updateDegree"] = "addDegree";
$nextClientInterface["deleteDegree"] = "addDegree";
$nextClientInterface["data4ViewDegree"] = "formViewDegree";
$nextClientInterface["data4EligibleCriteria"] = "addDegree";
$nextClientInterface["data4EligibleCriteria2"] = "updateDegree";

//DegreeDetails
$nextClientInterface["data4addDegreeDetails"] = "addDegreeDetails";
$nextClientInterface["addDegreeDetails"] = "addDegreeDetails";
$nextClientInterface["updateDegreeDetails"] = "addDegreeDetails";
$nextClientInterface["deleteDegreeDetails"] = "addDegreeDetails";
$nextClientInterface["data4ViewDegreeDetails"] = "formViewDegreeDetails";

//Criteria
$nextClientInterface["addcriteria"] = "addcriteria";
$nextClientInterface["updatecriteria"] = "addcriteria";
$nextClientInterface["deletecriteria"] = "addcriteria";
$nextClientInterface["data4ViewCriteria"] = "formViewCriteria";

//ProgrammeType
$nextClientInterface["data4addprogrammeType"] = "addprogrammeType";
$nextClientInterface["addprogrammeType"] = "addprogrammeType";
$nextClientInterface["updateprogrammeType"] = "addprogrammeType";
$nextClientInterface["deleteprogrammeType"] = "addprogrammeType";
$nextClientInterface["data4ViewProgrammeType"] = "formViewProgrammeType";

//NewCourseUnit
$nextClientInterface["addNewCourseUnit"] = "addNewCourseUnit";
$nextClientInterface["updateNewCourseUnit"] = "addNewCourseUnit";
$nextClientInterface["deleteNewCourseUnit"] = "addNewCourseUnit";
$nextClientInterface["data4ViewNewCourseUnit"] = "formViewNewCourseUnit";

//CourseUnit
$nextClientInterface["data4addCourseUnit"] = "addCourseUnit";
$nextClientInterface["addCourseUnit"] = "addCourseUnit";
$nextClientInterface["updateCourseUnit"] = "addCourseUnit";
$nextClientInterface["deleteCourseUnit"] = "addCourseUnit";
$nextClientInterface["data4ViewCourseUnit"] = "formViewCourseUnit";
$nextClientInterface["data4getCourseUnits"] = "addCourseUnit";

//User
$nextClientInterface["data4AddUser"] = "adduser";
$nextClientInterface["data4AddUser2"] = "adduser";
$nextClientInterface["adduser"] = "adduser";
$nextClientInterface["updateUser"] = "formViewUser";
$nextClientInterface["deleteUser"] = "formViewUser";
$nextClientInterface["data4ViewUser"] = "formViewUser";

//SelectedStudent
$nextClientInterface["data4addSelectedStudent"] = "addSelectedStudent";
$nextClientInterface["data4SelectedStudent"] = "addSelectedStudent";
$nextClientInterface["addSelectedStudent"] = "addSelectedStudent";
//$nextClientInterface["data4ViewSelectedStudent"] = "formViewStudent";

//Voucher
$nextClientInterface["data4VoucherDetails"] = "addVoucherDiploma";
$nextClientInterface["data4VoucherDetails2"] = "addVoucherDiploma";
$nextClientInterface["data4VoucherId"] = "addVoucherDiploma";
$nextClientInterface["addVoucherDiploma"] = "addVoucherDiploma";

//RegistrationLetter
$nextClientInterface["data4RegistrationLetter"] = "updateRegistrationLetter";
$nextClientInterface["updateRegistrationLetter"] = "updateRegistrationLetter";

//StudentPayment
$nextClientInterface["data4selectedStudentpay"] = "addstudentpayment";
$nextClientInterface["data4PaymentId"] = "addstudentpayment";
$nextClientInterface["addstudentpayment"] = "addstudentpayment";
$nextClientInterface["updatestudentpayment"] = "addstudentpayment";
$nextClientInterface["deletestudentpayment"] = "addstudentpayment";

//StudentRegistration
$nextClientInterface["data4selectedStudentregister"] = "formStudentRegistration";
$nextClientInterface["addStudent"] = "formStudentRegistration";

//StidentCourseUnit
$nextClientInterface["data4seeStudentDetails"] = "formStudentDeteilsRequest";
$nextClientInterface["data4StudentRequest"] = "formStudentDeteilsRequest";
$nextClientInterface["data4seeStudentDetails2"] = "formStudentDeteilsRequest";
$nextClientInterface["addStudentDeteilsRequest"] = "formStudentDeteilsRequest";

//ExtendedDuration
$nextClientInterface["data4studentExtendedTime"] = "formStudentExtendedTime";
$nextClientInterface["data4studentExtendedTime2"] = "formStudentExtendedVoucher";
$nextClientInterface["data4VoucherId2"] = "formStudentExtendedVoucher";

//ExtendedVoucher
$nextClientInterface["data4ExtendedVoucherInvoiceNo"] = "formStudentExtendedVoucher";
$nextClientInterface["addExtendedVoucher"] = "formStudentExtendedTime";
$nextClientInterface["UpdateExtendedTime"] = "formStudentExtendedTime";

//StudentOtherPayment
$nextClientInterface["data4studentOtherPayment"] = "addstudentotherpayment";
$nextClientInterface["addstudentotherpayment"] = "addstudentotherpayment";
$nextClientInterface["updatestudentotherpayment"] = "addstudentotherpayment";
$nextClientInterface["deletestudentotherpayment"] = "addstudentotherpayment";
$nextClientInterface["data4PaymentId2"] = "addstudentotherpayment";

//LecturerRegistration
$nextClientInterface["data4addLectureRegistration"] = "formLectureRegistration";
$nextClientInterface["addLecture"] = "formLectureRegistration";

//LecturerDetails
$nextClientInterface["data4seeLecturerDetails"] = "formLecturerDeteilsRequest";
$nextClientInterface["data4seeLecturerDetails2"] = "formLecturerDeteilsRequest";
$nextClientInterface["data4LecturerRequest"] = "formLecturerDeteilsRequest";
$nextClientInterface["addFormLecturerRequest"] = "formLecturerDeteilsRequest";

//Category
$nextClientInterface["addNewCategory"] = "addNewCategory";
$nextClientInterface["updateNewCategory"] = "addNewCategory";
$nextClientInterface["deleteNewCategory"] = "addNewCategory";
$nextClientInterface["data4ViewNewCategory"] = "formViewNewCategory";

//Subcategory
$nextClientInterface["data4addSubcategory"] = "addSubCategory";
$nextClientInterface["addSubCategory"] = "addSubCategory";
$nextClientInterface["updateSubCategory"] = "addSubCategory";
$nextClientInterface["deleteSubCategory"] = "addSubCategory";
$nextClientInterface["data4ViewSubCategory"] = "formViewSubCategory";

//BudgetSheet
$nextClientInterface["data4AddCategory"] = "formBudgetSheet";
$nextClientInterface["data4Budgetsheet"] = "formBudgetSheet";
$nextClientInterface["data4budgetId"] = "formBudgetSheet";
$nextClientInterface["addnewBudget"] = "formBudgetSheet";

//ReviseBudget
$nextClientInterface["data4BudgetSheetData"] = "formReviseBudgetSheet";
$nextClientInterface["data4AddCategory1"] = "formReviseBudgetSheet";

//Reports
$nextClientInterface["data4ViewStudentPayment"] = "formStudentReportDetails";
$nextClientInterface["data4viewstudentPayment2"] = "formStudentReportDetails";
$nextClientInterface["data4ViewFirstInstallementStudent"] = "formViewFirstInstallementStudent";
$nextClientInterface["data4registeredStudentList"] = "formRegisteredStudentList";
$nextClientInterface["data4formPaymentList"] = "formPaymentList";

//EligibleTest
$nextClientInterface["data4EligibleTest"] = "formEligibleTestForm";

//ApplicationForm 
$nextClientInterface["data4ApplicationForm"] = "addApplicationForm";
$nextClientInterface["addApplicationForm"] = "addApplicationForm";
$nextClientInterface["updateApplicationForm"] = "addApplicationForm";
$nextClientInterface["data4EditApplicationForm"] = "addApplicationForm";
$nextClientInterface["data4ApplicationNo"] = "addApplicationForm";
$nextClientInterface["data4ApplicationFormTwo"] = "addApplicationFormTwo"; //NextButton

//ApplicationFormTwo
$nextClientInterface["addApplicationFormTwo"] = "addApplicationFormTwo";
$nextClientInterface["updateApplicationFormTwo"] = "addApplicationFormTwo";
$nextClientInterface["data4EditApplicationFormTwo"] = "addApplicationFormTwo";
$nextClientInterface["data4ApplicationFormThree"] = "addApplicationFormThree"; //NextButton

//ApplicationFormThree
$nextClientInterface["addApplicationFormThree"] = "addApplicationFormThree";
$nextClientInterface["updateApplicationFormThree"] = "addApplicationFormThree";
$nextClientInterface["data4EditApplicationFormThree"] = "addApplicationFormThree";
$nextClientInterface["data4ApplicationFormFourth"] = "addApplicationFormFourth"; //NextButton

//ApplicationFormFourth
$nextClientInterface["addApplicationFormFourth"] = "addApplicationFormFourth";
$nextClientInterface["updateApplicationFormFourth"] = "addApplicationFormFourth";
$nextClientInterface["data4EditApplicationFormFourth"] = "addApplicationFormFourth";
$nextClientInterface["data4ApplicationFormFive"] = "addApplicationFormFive"; //NextButton

//ApplicationFormFive 
$nextClientInterface["addApplicationFormFive"] = "addApplicationFormFive";
$nextClientInterface["updateApplicationFormFive"] = "addApplicationFormFive";
$nextClientInterface["data4EditApplicationFormFive"] = "addApplicationFormFive";

//FinalApplication	
$nextClientInterface["data4FinalApplication"] = "formFinalApplication";

//ExportData
$nextClientInterface["data4ExportCSV"] = "exportCSVForm";


//$nextClientInterface["data4studentaddiDetails"] = "formStudentAdditionalDetails";1	
//$nextClientInterface["updateStudentAdditionalDetails"] = "formStudentAdditionalDetails";2
//$nextClientInterface["addprogrammeType"]="formAddProgrammeType";3
//$nextClientInterface["data4addStudent"]= "formStudentRegistration";4
//$nextClientInterface["data4StudentPro"]= "formStudentRegistration";5
//$nextClientInterface["data4paymentDetails"]= "formLecturerDeteilsRequest";6
//$nextClientInterface["data4studentpayment"]= "addstudentpayment";7
//$nextClientInterface["data4selectedStudentpayInstalment"]= "addstudentpayment";8

//$nextClientInterface["addNewCategory"] = "formAddNewCategory";10
//$nextClientInterface["data4addSubcategory"] = "formAddSubcategory";11
//$nextClientInterface["data4selectedStudentpayInstallment"] = "addstudentpayment";12
//$nextClientInterface["data4EligibleTestCriteria"] = "formEligibleTestForm";13


//PrintApplication
$nextClientInterface["data4printFinalApplication"] = "printFinalApplication";

//Role
$nextClientInterface["addrole"] = "formAddRole";

//EventManagment
$nextClientInterface["data4event"] = "addEvent";
$nextClientInterface["data4event2"] = "addEvent";
$nextClientInterface["addEvent"] = "addEvent";
$nextClientInterface["updateEvent"] = "addEvent";
$nextClientInterface["deleteEvent"] = "addEvent";

$nextClientInterface["data4viewEvent"] = "formViewEvent";


//---------------------------ADD NEW--------------------------------

$nextClientInterface["data4profilerefreeDetails"] = "formStudentProfileDeteils";
//$nextClientInterface["data4profilExamResults"]="formStudentProfileDeteils";
//----------------------------------------------------------------

//StudentProfile
$nextClientInterface["data4DisplayStudentNoforProfile"] = "formStudentProfileDeteils";

$nextClientInterface["data4StudentProfileDetails"] = "formStudentProfileDeteils";
$nextClientInterface["data4StudentpaymentView"] = "formStudentProfileDeteils";
$nextClientInterface["data4StudentProfileTransferStudent"] = "formStudentProfileDeteils";
$nextClientInterface["data4StudentProfileBulkTransterStudent"] = "formBulkTransterStudent";
$nextClientInterface["data4StudentProfileDocument"] = "formStudentProfileDeteils";
$nextClientInterface["data4profileDocument"] = "formStudentProfileDeteils";
$nextClientInterface["data4profileEducationalDetails"] = "formStudentProfileDeteils";
$nextClientInterface["data4profileNote"] = "formStudentProfileDeteils";
$nextClientInterface["data4TransferProfile"] = "formStudentProfileDeteils";
$nextClientInterface["data4paymentProfile"] = "formStudentProfileDeteils";
$nextClientInterface["data4DisplayNotes"] = "formStudentProfileDeteils";
$nextClientInterface["data4DisplayApplicatProfile"] = "formStudentProfileDeteils";
$nextClientInterface["data4LoadApplicantView"] = "formStudentProfileDeteilsView";
$nextClientInterface["data4GetReleventApplicant"] = "formStudentProfileDeteils";
$nextClientInterface["data4CommenceDate"] = "formStudentProfileDeteils";
$nextClientInterface["data4BulkTransterStudentCommenceData"] = "formBulkTransterStudent";

//Student And Applicant Search
$nextClientInterface["data4paymentBatch"] = "formStudentProfileDeteils";

//ApplicantList & Profile  
$nextClientInterface["data4ApplicantList"] = "formApplicantList";
$nextClientInterface["data4SendSMApplicantList"] = "formSendSMSBulk";
$nextClientInterface["data4SendSMtDueAmmoutList"] = "formSendSMSBulk";
$nextClientInterface["data4SendSMSelectedApplicantList"] = "formSendSMSBulk";
$nextClientInterface["data4SendSMPreRegStudentList"] = "formSendSMSBulk";
$nextClientInterface["data4SendSMRegStudentList"] = "formSendSMSBulk";

$nextClientInterface["updateApplicantList"] = "";
// $nextClientInterface["data4checkdepartment"] = "formApplicantList";
$nextClientInterface["data4LoadApplicantList"] = "formApplicantList";
$nextClientInterface["data4LoadPendingApplicantList"] = "formPendingApplicantList";
$nextClientInterface["data4LoadInterviewScreenList"] = "formInterviewList";
$nextClientInterface["data4LoadStudentQulificationList"] = "formStudentQulificationList";

$nextClientInterface["data4LoadApplicantSelection"] = "formApplicantSelection";
$nextClientInterface["data4LoadListofSelectedApplicant"] = "formSelectedApplicantList";
$nextClientInterface["data4LoadFirstAttemptExamResultUpload"] = "formUploadExaminationResults";

$nextClientInterface["data4getDepartmentAdmissionForm"] = "formAdmissionCardForm";
$nextClientInterface["data4getPaperCountForm"] = "formPaperCountForm";
// $nextClientInterface["data4checkUser"] = "formApplicantList";
$nextClientInterface["addBulkNotes"] = "";
$nextClientInterface["data4ApplicantProfile"] = "formAplicantProfile";
// $nextClientInterface["data4ApplicantQualficationDetails"] = "formApplicantList";
// $nextClientInterface["data4ApplicantworkDetails"] = "formApplicantList";

//$nextClientInterface["addApplicantList"]="formApplicantList";
//$nextClientInterface["addApplicantList"]="formApplicantList";

//$nextClientInterface["UpdateApplicant"]="formApplicantList";

//Nishadi
$nextClientInterface["data4AddStudentAccount"] = "formCreateStudentAccounts";
$nextClientInterface["addStudentAccounts"] = "";
$nextClientInterface["updateStudentAccounts"] = "formCreateStudentAccounts";
//

$nextClientInterface["data4SelectedStudentList"] = "formSelectedStudentList";
$nextClientInterface["data4LastRegistrationNo"] = "formSelectedStudentList";
$nextClientInterface["addSelectedStudentList"] = "";
$nextClientInterface["data4TransferStudentList"] = "formSelectedStudentList";
$nextClientInterface["UpdateSelectedstudent"] = "formSelectedStudentList";
$nextClientInterface["addBulkRegisterNotes"] = "formSelectedStudentList";
$nextClientInterface["addStudentProfileDeteils"] = "formStudentProfileDeteils";

$nextClientInterface["data4ThesisNotification"] = "formThesisNotification";



// Add Old Student
$nextClientInterface["data4AddOldStudent"] = "addOldStudentOne";
$nextClientInterface["data4AddOldStudentTwo"] = "addOldStudentOne";
$nextClientInterface["data4addOldStudentFormTwo"] = "formAddOldStudentFormTwo";
$nextClientInterface["addOldStudentOne"] = "addOldStudentOne";
$nextClientInterface["addOldStudentTwo"] = "formAddOldStudentFormTwo";
$nextClientInterface["data4LecturerStudentFormTwo"] = "formAddOldStudentFormTwo";


//added 2015/05/11
//Appoint Examiner
$nextClientInterface["addThesisNotification"] = "formReceivingNotificationForThesisSubmission";

$nextClientInterface["updateThesisNotifiDate"] = "formReceivingNotificationForThesisSubmission";

$nextClientInterface["data4AppointExaminers"] = "formReceivingNotificationForThesisSubmission";

$nextClientInterface["addExaminerReccomandBOS"] = "formAppointExaminers";
$nextClientInterface["updateExaminerReccomandBOS"] = "formUpdateExaminerBoard";

$nextClientInterface["addExaminerReccomandFGS"] = "formAppointExaminers";
$nextClientInterface["updateExaminerReccomandFGS"] = "formExaminerFGSUpdate";

$nextClientInterface["addExaminerReccomandSenate"] = "formAppointExaminers";
$nextClientInterface["updateExaminerReccomandSenate"] = "formAppointExaminers";

$nextClientInterface["addExaminerRemarks"] = "formBoardReccomendation";
$nextClientInterface["updateExaminerRemarks"] = "formAppointExaminers";


$nextClientInterface["data4ThesisEvaluation"] = "formThesisEvaluation";

$nextClientInterface["addThesisSending"] = "formThesisEvaluation";

$nextClientInterface["addReminders"] = "formThesisEvaluation";

$nextClientInterface["addThesisReturn"] = "formThesisEvaluation";

$nextClientInterface["addPannelBoard"] = "formPannelBoard";
$nextClientInterface["updatePannelBoard"] = "formPannelBoard";


$nextClientInterface["data4ExaminerReccomand"] = "formAppointExaminers";

$nextClientInterface["updateThesisSubmit"] = "formThesisSubmit";

$nextClientInterface["addThesisSubmitUnderCondition"] = "formThesisSubmit";

$nextClientInterface["addThesisSendToExamBranch"] = "formThesisSendToExamBranch";

$nextClientInterface["data4ExaminerDetailsView"] = "formExaminersDetailsView";

$nextClientInterface["addVivaBoard"] = "formVivaBoard";
$nextClientInterface["updateVivaBoard"] = "formVivaBoard";

$nextClientInterface["data4ThesisReminders"] = "formViewReminderDetails";

$nextClientInterface["data4ThesisNotifyView"] = "formViewThesisNotification";
// Thesis Title
$nextClientInterface["data4AddThesisTitle"] = "formAddThesisTitle";
$nextClientInterface["addThesisTitle"] = "formBoardReccomendation";
$nextClientInterface["updateThesisTitle"] = "formAddThesisTitle";

$nextClientInterface["addTransactionDetails"] = "formBoardReccomendation";
$nextClientInterface["updateTransactionDetailsFGS"] = "formBoardReccomendation";
$nextClientInterface["updateTransactionDetailsSenate"] = "formBoardReccomendation";

$nextClientInterface["data4TransactionTypeDetails"] = "formBoardReccomendation";
$nextClientInterface["data4StudentTransaction"] = "formBoardReccomendation";

$nextClientInterface["data4ExaminerList"] = "formBoardReccomendation";

//chamoda............................................................................
//document
$nextClientInterface["addDocument"] = "formDocument";
$nextClientInterface["data4formDocument"] = "formDocument";
//dataItem
$nextClientInterface["addDataItem"] = "formDataItem";
$nextClientInterface["data4formDataItem"] = "formDataItem";
//decision Making point
$nextClientInterface["addDecisionMakingPoint"] = "formDecisionMakingPoint";
$nextClientInterface["data4formDecisionMakingPoint"] = "formDecisionMakingPoint";
//document Item
$nextClientInterface["data4formDocumentItem"] = "formDocumentItem";
$nextClientInterface["data4dataItems"] = "formDocumentItem";
$nextClientInterface["addDocumentItem"] = "formDocumentItem";
//doc decision transaction
$nextClientInterface["data4formDocDecisionTransaction"] = "formDocDecisionTransaction";
$nextClientInterface["data4formDocDecisionTransactionTwo"] = "formDocDecisionTransactionTwo";
//$nextClientInterface["data4DocDecision"]="formDocDecisionTransactionTwo";
$nextClientInterface["data4decisionMakingPoint"] = "formDocDecisionTransaction";
//$nextClientInterface["data4decisionMakingPointTwo"]="formDocDecisionTransactionTwo";
$nextClientInterface["addDocDecisionTransactionTwo"] = "formDocDecisionTransactionTwo";
$nextClientInterface["addDocDecisionTransaction"] = "formDocDecisionTransaction";
$nextClientInterface["data4document"] = "formDocDecisionTransaction";
$nextClientInterface["data4studentlist"] = "formDocDecisionTransaction";
$nextClientInterface["data4decisionprogramm"] = "formDocDecisionTransaction";
//Add Document 
$nextClientInterface["data4AddDocument"] = "formAddDocumentData";

$nextClientInterface["addDocumentData"] = "formAddDocumentData";

$nextClientInterface["data4DocName"] = "formAddDocumentData";

$nextClientInterface["data4SequanceNumber"] = "formAddDocumentData";

$nextClientInterface["data4SessionID"] = "formAddDocumentData";

$nextClientInterface["data4ListDocName"] = "formListDocument";

// $nextClientInterface["data4ApplicantListPrint"] = "formListDocument";

$nextClientInterface["data4RegisteredStudentListPrint"] = "formListDocument";

$nextClientInterface["data4AddListDocument"] = "formListDocument";

$nextClientInterface["data4SequanceNumberList"] = "formListDocument";

$nextClientInterface["data4SessionIDList"] = "formListDocument";

$nextClientInterface["addListDocumentData"] = "formListDocument";

$nextClientInterface["addListNumDocumentData"] = "formListDocument";
//List Data to add Document
$nextClientInterface["data4DegreeList"] = "formAddDocumentData";
$nextClientInterface["data4LecturerList"] = "formAddDocumentData";

$nextClientInterface["data4ApplicantDetailsEdit"] = "updateEditApplicantDetails";
//edit students
$nextClientInterface["data4StudentDetailsEdit"] = "updateEditStudentDetails";
// User activity 
$nextClientInterface["data4UserActivityDegree"] = "formUserActivity";
$nextClientInterface["data4UserActivity"] = "formUserActivity";
$nextClientInterface["addUserPrivilages"] = "formUserActivity";

//print id
$nextClientInterface["data4PrintStudentIDCard"] = "formPrintStudentID";
$nextClientInterface["data4BulkTransfer"] = "formBulkTransterStudent";
$nextClientInterface["data4GetEnrollment"] = "formEnrollStudent";

//Payments
/******************Add Student Payments - Nishadi****************/
$nextClientInterface["data4StudentPaymentRecord"] = "formBulkPayment";
$nextClientInterface["addStudentsPayments"] = "formBulkPayment";
$nextClientInterface["updatePaymentList"] = "formBulkPayment";
$nextClientInterface["updatePaymentConfirmList"] = "formBulkPayment";
$nextClientInterface["data4StudentPaymentDetails"] = "formBulkPayment";
$nextClientInterface["data4StudentPaymentDetails1"] = "formBulkPayment";
$nextClientInterface["data4StudentPaymentDetails2"] = "formBulkPayment";
//$nextClientInterface["data4StudentPayDetails"]="formBulkPayment";		
$nextClientInterface["data4InstallmentDetails"] = "formBulkPayment";
/***************************************************************/

// Re print  Applications
$nextClientInterface["data4ApplicarionReprint"] = "formReprintApplicantionData2";
// $nextClientInterface["data4ApplicarionReprint"] = "formReprintApplicantionData";
// $nextClientInterface["data4ApplicarionReprintWork"] = "formReprintApplicantionData";
$nextClientInterface["data4ApplicarionReprintWork"] = "formReprintApplicantionData2";
$nextClientInterface["data4ApplicationReprinteducation"] = "formReprintApplicantionData";

//Delete
$nextClientInterface["deleteApplicationForm"] = "";

$nextClientInterface["data4ApplicationComplete"] = "formApplicantList";
$nextClientInterface["data4ApplicationInComplete"] = "formApplicantList";
$nextClientInterface["addNoteAndNotification"] = "formNoteAndNotification";


//Thiwanka
$nextClientInterface["data4StudentNotificationList"] = "formNoteAndNotification";
$nextClientInterface["data4Notificationcheckdepartment"] = "formNoteAndNotification";
$nextClientInterface["data4StudentReport"] = "formAllReport";
$nextClientInterface["data4viewstudent"] = "formAllReport";
$nextClientInterface["data4formstudentnew"] = "formAllReport";

//$nextClientInterface["data4TotalStudentReport"]="formAllReport";


//letter------------------------------------------------
$nextClientInterface["data4LetterApplicantListPrint"] = "formLetterTemplate";
$nextClientInterface["data4checkdepartmentLetterApplicantListPrint"] = "formLetterTemplate";

//$nextClientInterface["data4LetterRegisteredStudentListPrint"]="formLetterTemplate";
//letter end-------------------------------------------

$nextClientInterface["data4ForeignReport"] = "formAllReport";

//Student Trnansfer------------------------------------
//$nextClientInterface["data4StudentTransfers"]="formStudentTranser";
$nextClientInterface["data4studentTransfer"] = "formStudentTransfer";
$nextClientInterface["data4Transferprogramme"] = "formStudentProfileDeteils";
$nextClientInterface["data4BulkTransferTransferprogramme"] = "formBulkTransterStudent";

$nextClientInterface["data4DisplayTransferRules"] = "formStudentProfileDeteils";
$nextClientInterface["addTransferStudent"] = "formStudentProfileDeteils";
$nextClientInterface["addTransferDetails"] = "formStudentProfileDeteils";
$nextClientInterface["updateTransferDetails"] = "formStudentProfileDeteils";
$nextClientInterface["updateTransferapplication"] = "formStudentProfileDeteils";
$nextClientInterface["updateTransferapplication"] = "formStudentProfileDeteils";
$nextClientInterface["data4applicantTransfer"] = "formStudentTransfer";
$nextClientInterface["data4getTransferID"] = "formStudentProfileDeteils";
$nextClientInterface["addstudentruls"] = "formStudentProfileDeteils";
//Student Trnansfer end------------------------------------

//----------------transfer Rules--------------------------------
$nextClientInterface["data4transferRules"] = "formTransferRules";
$nextClientInterface["addTransferRules"] = "addTransferRules";
$nextClientInterface["addTransferRulesDetails"] = "formTransferRules";

//----------------transfer Rules End----------------------------
//----------------return----------------------------------------
$nextClientInterface["data4returnListDocument"] = "formListDocument";
$nextClientInterface["data4returnStudent"] = "formSelectedStudentList";
$nextClientInterface["data4returnEditApplicant"] = "formEditApplicantDetails";
$nextClientInterface["data4returnEditStudent"] = "formEditStudentDetails";
$nextClientInterface["data4returnEditStudentForm"] = "updateEditStudentDetails";
$nextClientInterface["data4returnPrintID"] = "formPrintStudentID";
$nextClientInterface["data4returnDocumtMgt"] = "formClerkDocumentMenu";
$nextClientInterface["data4returnNoteAndNotification"] = "formNoteAndNotification";
$nextClientInterface["data4returnBudgetDetails"] = "formDegreeDetails";
$nextClientInterface["data4returnPrintLetters"] = "formLetterTemplate";
$nextClientInterface["data4returnStudentsTransfer"] = "formTransferMenu";
$nextClientInterface["data4returnBulkPayment"] = "formBulkPayment";
//------------------------Return End------------------------------------

$nextClientInterface["addMessage"] = "formAddMessage";
$nextClientInterface["data4viewMessage"] = "formAddMessage";
$nextClientInterface["updateMessage"] = "formEditMessage";
$nextClientInterface["deleteMessage"] = "formEditMessage";

// $nextClientInterface["addMessage"]="formAddMessage";
$nextClientInterface["data4viewMessageUpdate"] = "formAddMessageNewMessage";
$nextClientInterface["data4viewMessageToUpdate"] = "formAddMessageNewMessage";
// $nextClientInterface["updateMessage"]="formEditMessage";
// $nextClientInterface["deleteMessage"]="formEditMessage";

$nextClientInterface["data4checkUserICT"] = "formPrintStudentID";

//application
$nextClientInterface["data4ApplicationFormExam"] = "formApplication";
$nextClientInterface["data4addApplicationForm"] = "formApplication";
$nextClientInterface["addApplicationFormExam"] = "formExamApplication";


$nextClientInterface["data4wifiCreation"] = "formWifiCreation";


// $nextClientInterface["data4ApplicationFormRepeteExam"] = "formApplicationRepete";
// $nextClientInterface["data4addApplicationRepeteForm"] = "formApplicationRepete";
// $nextClientInterface["addApplicationFormRepeteExam"] = "formExamApplication";


/*****************************************************************************************************
The following section define all the SQLs required for the application.
 *********************************************************************************************************/


//pass list
$interfaceTbls["data4printReport"] = array("student_final_result", "student");
$interfaceTbls["data4finalExamResultsPrint"] = array("examresults", "subject", "degree");

//pass list
$nextClientInterface["data4printReport"] = "formCertificatePrintForm";
$nextClientInterface["data4finalExamResultsPrint"] = "formCertificatePrintForm";

//pass list
if ($_POST['interface'] == "data4printReport") {
	$getSQL["data4printReport"] = "SELECT distinct t1.studentNo AS printStudentNo,
											t2.studentName as printStudentName,
											t1.degreeCode,
											t1.semester AS printsemester, 
											t1.achedamicYear  as printYear,
											t1.finalGPA,
											t1.finalResult,
											t2.medium as printMedium,
											t3.cr_resit,
											t3.cr_credits,
											t3.cr_examHeld,
											t3.cr_examValiddate
											FROM student_final_result as t1 left join student as t2 on 	t1.studentNo = t2.studentNo left join final_result_criteria as t3 on 
											t1.degreeCode = t3.cr_degreeCode 
											WHERE
											t1.degreeCode = '" . $_POST['degreeCode'] . "' AND 
											t1.achedamicYear = '" . $_POST['AchademicYear'] . "'
											ORDER BY t1.studentNo, t1.semester;";
}


if ($_POST['interface'] == 'data4finalExamResultsPrint') {
	$getSQL["data4finalExamResultsPrint"] = "SELECT distinct r.SudentNo, r.StudentName, r.achedamicYear, r.subjectName, s.subjectTitle, s.subjectSemester, s.credits, r.Examiner1, r.Examiner2, r.Marks,r.Grade,st.duration, st.programmeTypeCode,st.degreeTitle
												FROM examresults r, subject s, degree st
												WHERE 	r.subjectName = s.subjectCode AND
												r.degreeCode=s.degreeCode AND
												r.achedamicYear=s.academicYear AND
												r.degreeCode = st.degreeCode AND
												r.degreeCode = '" . $_POST['degreeCode'] . "' AND 
												r.achedamicYear = '" . $_POST['AchademicYear'] . "'				
												ORDER BY r.SudentNo, s.subjectSemester, r.subjectName;";
}





//admission
$getSQL["data4getAdmissionStudent"] = "select distinct  t1.studentNo, t1.achedamicYear, t1.studentName , t1.studentNIC , t1.studentPermanentAddress ,t1.medium , t2.universityTitle , t3.facultyTitle,t4.degreeTitle  from student as t1 left join university as t2 on t1.universityCode=t2.universityCode left join faculty as t3 on t1.facultyCode=t3.facultyCode left join degree as t4 on t1.degreeCode=t4.degreeCode ORDER BY t4.degreeTitle ASC,t1.studentNo ASC;";

//$getSQL["data4getAdmissionSubject"]="SELECT t1.*,t2.studentNo as substudentno,t2.degreeCode as subdegreeCode FROM timetable as t1 left join studentselection as t2 on t1.degreeCode=t2.degreeCode where t1.subjectCode=t2.subjectCodeOne or t1.subjectCode=t2.subjectCodeTwo or t1.subjectCode=t2.subjectCodeThree or t1.subjectCode=t2.subjectCodeFour or t1.subjectCode=t2.subjectCodeFive or t1.subjectCode=t2.subjectCodeSix;";
//$getSQL["data4getAdmissionSubject"]="SELECT t1.*,t2.studentNo as substudentno,t2.degreeCode as subdegreeCode,t2.semester as subsemester FROM timetable as t1 left join studentselection as t2 on t1.degreeCode=t2.degreeCode where t1.subjectCode=t2.subjectCode;";
//$getSQL["data4getAdmissionDegree"]="select distinct t1.degreeCode as admissionDegreeCode, t1.degreeTitle as admissionDegreeTitle from degree as t1 left join studentselection as t2 on  t1.degreeCode=t2.degreeCode where t1.degreeCode=t2.degreeCode;";

//$getSQL["data4getAdmissionSubject"]="SELECT distinct t1.*,t2.studentNo as substudentno,t2.degreeCode as subdegreeCode,t2.semester as subsemester,t3.subjectTitle, t4.degreeTitle as admissionDegreeTitle ,t4.facultyCode as addfacCode FROM timetable as t1 left join studentselection as t2 on t1.degreeCode=t2.degreeCode left join subject as t3 on t1.degreeCode=t3.degreeCode and t1.subjectCode=t3.subjectCode left join degree as t4 on t1.degreeCode=t4.degreeCode where t1.subjectCode=t2.subjectCode ORDER BY t2.studentNo ASC,t1.examdate ASC,t1.starttime DESC; ";// t1.examdate ASC

//changed starts 2020-01-13-----------------------------------------

// $getSQL["data4getAdmissionSubject"]="select distinct t1.studentNo as substudentno,t1.degreeCode as subdegreeCode,t1.semester as subsemester,t1.achedamicYear as subachedamicYear, t2.*,t3.subjectTitle ,t4.degreeTitle as admissionDegreeTitle ,
// t4.facultyCode as addfacCode from studentselection as t1 left join timetable as t2 on t1.degreeCode = t2.degreeCode and t1.achedamicYear = t2.academicYear left join subject as t3 on t1.degreeCode = t3.degreeCode and t2.subjectCode =t3.subjectCode left join degree as t4 on t1.degreeCode=t4.degreeCode
// where t1.subjectCode=t2.subjectCode ORDER BY t4.degreeTitle ASC,t1.studentNo ASC,t2.examdate ASC,t2.starttime DESC;";


$getSQL["data4getAdmissionSubject"] = "select distinct t1.studentNo as substudentno,t1.degreeCode as subdegreeCode,t1.semester as subsemester,t1.achedamicYear as subachedamicYear, t2.*,t3.subjectTitle ,t4.degreeTitle as admissionDegreeTitle ,t4.facultyCode as addfacCode from studentselection as t1 
	left join timetable as t2 
	on t1.degreeCode = t2.degreeCode and 
	t1.achedamicYear = t2.academicYear 
	left join subject as t3 
	on t1.degreeCode = t3.degreeCode 
	and t2.subjectCode =t3.subjectCode
	and t1.achedamicYear = t3.academicYear 
	left join degree as t4 
	on t1.degreeCode=t4.degreeCode
	where t1.subjectCode=t2.subjectCode ORDER BY t4.degreeTitle ASC,t1.studentNo ASC,t2.examdate ASC,t2.starttime DESC;";

//changed ends 2020-01-13-----------------------------------------



//repeat admission
$getSQL["data4getRep_AdmissionStudent"] = "select distinct  t1.studentNo, t1.achedamicYear, t1.studentName , t1.studentNIC , t1.studentPermanentAddress ,t1.medium , t2.universityTitle , t3.facultyTitle,t4.degreeTitle  from student as t1 left join university as t2 on t1.universityCode=t2.universityCode left join faculty as t3 on t1.facultyCode=t3.facultyCode left join degree as t4 on t1.degreeCode=t4.degreeCode ORDER BY t4.degreeTitle ASC,t1.studentNo ASC;";

$getSQL["data4getRep_AdmissionSubject"] = "select distinct t1.studentNo as rep_studentno,t1.degreeCode as repSub_degreeCode,t1.semester as rep_semester,t1.achedamicYear as rep_achedamicYear, 
												t2.*,
												t3.subjectTitle as rep_subjectTitle,
												t4.degreeTitle as rep_DegreeTitle ,t4.facultyCode as rep_facCode 
												from studentRepeatSelection as t1 
												left join rep_timetable as t2 
												on t1.degreeCode = t2.rep_degreeCode and t1.achedamicYear = t2.rep_academicYear 
												left join subject as t3 
												on t1.degreeCode = t3.degreeCode and t2.rep_subjectCode =t3.subjectCode and t1.achedamicYear=t3.academicYear 
												left join degree as t4 on 
												t1.degreeCode=t4.degreeCode
												where t1.subjectCode=t2.rep_subjectCode
												ORDER BY t4.degreeTitle ASC,t1.studentNo ASC,t2.rep_examdate ASC,
												STR_TO_DATE( t2.rep_starttime, '%h %i %p' ) ASC;"; // AND t1.appliedDate>='2020-11-30'
//ReRepeat Admission starts ----------------------------------


$interfaceTbls["data4getReRepeat_Admission"] = array("student", "university", "faculty", "degree");

$nextClientInterface["data4getReRepeat_Admission"] = "formReRepeatAdmissionForm";


$getSQL["data4getReRepeat_Admission"] = "select distinct  t1.studentNo, t1.achedamicYear, t1.studentName , t1.studentNIC , t1.studentPermanentAddress ,t1.medium , t2.universityTitle , t3.facultyTitle,t4.degreeTitle  from student as t1 left join university as t2 on t1.universityCode=t2.universityCode left join faculty as t3 on t1.facultyCode=t3.facultyCode left join degree as t4 on t1.degreeCode=t4.degreeCode ORDER BY t4.degreeTitle ASC,t1.studentNo ASC;";


$interfaceTbls["data4getReRepeat_AdmissionSubject"] = array("ReRepeat_timetable", "ReRepeatSelection", "subject", "degree");

$nextClientInterface["data4getReRepeat_AdmissionSubject"] = "formReRepeatAdmissionForm";


$getSQL["data4getReRepeat_AdmissionSubject"] = "select distinct t1.ReRep_studentNo,t1.ReRep_degreeCode,t1.ReRep_semester,t1.ReRep_achedamicYear, 
													t2.*,
													t3.subjectTitle as Rerep_subjectTitle,
													t4.degreeTitle as Rerep_DegreeTitle ,t4.facultyCode as Rerep_facCode 
													from ReRepeatSelection as t1 
													left join ReRepeat_timetable as t2 
													on t1.ReRep_degreeCode = t2.ReRepeat_degreeCode and t1.ReRep_achedamicYear = t2.ReRepeat_academicYear 
													left join subject as t3 
													on t1.ReRep_degreeCode = t3.degreeCode and t2.ReRepeat_subjectCode =t3.subjectCode and t1.ReRep_achedamicYear=t3.academicYear 
													left join degree as t4 on 
													t1.ReRep_degreeCode=t4.degreeCode
													where t1.ReRep_subjectCode=t2.ReRepeat_subjectCode
													ORDER BY t4.degreeTitle ASC,t1.ReRep_studentNo ASC,t2.ReRepeat_examdate ASC,
													STR_TO_DATE( t2.ReRepeat_starttime, '%h %i %p' ) ASC;"; // AND t1.ReRep_appliedDate >= '2020-11-30'


if ($_POST["interface"] == "data4wifiCreation") {


	$whereConditions = array();

	if (isset($_POST['search']) && !empty($_POST['search'])) {
		$searchNames = "(s.studentName LIKE '%" . $_POST['search'] . "%' OR ";
		$searchNames .= "s.studentContactEmail LIKE '%" . $_POST['search'] . "%' OR ";
		$searchNames .= "s.studentNo  LIKE '%" . $_POST['search'] . "%' OR ";
		$searchNames .= "s.studentContactMobile LIKE '%" . $_POST['search'] . "%' OR ";
		$searchNames .= "s.studentContactLan LIKE '%" . $_POST['search'] . "%' OR ";
		$searchNames .= "s.studentNIC  LIKE '%" . $_POST['search'] . "%')";
		$whereConditions[] = $searchNames;
	}



	if (isset($_POST['degreeCode']) && !empty($_POST['degreeCode'])) {
		if ($_POST['degreeCode'] != "all") {
			$whereConditions[] = "d.degreeCode = '" . $_POST['degreeCode'] . "'";
			if (isset($_POST['achademicYear']) && !empty($_POST['achademicYear'])) {
				$whereConditions[] = "s.achedamicYear = '" . $_POST['achademicYear'] . "'";
			}
		} else {
			if (isset($_POST['dateTo']) && !empty($_POST['dateTo']) && isset($_POST['dateFrom']) && !empty($_POST['dateFrom'])) {
				$whereConditions[] = "(s.RegisteredDate >= '" . $_POST['dateTo'] . "' AND s.RegisteredDate <= '" . $_POST['dateFrom'] . "')";
			}
		}
	}



	if (isset($_POST['filter']) && !empty($_POST['filter'])) {
		if ($_POST['filter'] == 1) {
			$whereConditions[] = "(isWifiCreated = '0' OR isWifiCreated = '' OR isWifiCreated IS NULL)";
		} else if ($_POST['filter'] == 2) {
			$whereConditions[] = "isWifiCreated = '1'";
		}
	}

	$whereClause = implode(" AND ", $whereConditions);

	$getSQL["data4wifiCreation"] = "SELECT DISTINCT studentPersonalTitle, studentInitial, studentNo, studentNIC, studentContactMobile, studentContactEmail, RegisteredDate,wifiName, duration,Pay_studentNo,Pay_amount,Response_Progress
										FROM student s
								LEFT JOIN degree d
					ON  d.degreeCode = s.degreeCode
			LEFT JOIN (SELECT Pay_studentNo,SUM(Pay_amount) as Pay_amount,Response_Progress FROM StudentPayment WHERE 
				(Pay_CategoryCode = '003' or Pay_CategoryCode = '002' or Pay_CategoryCode = '004' or Pay_CategoryCode = '005' or Pay_CategoryCode = '006' or Pay_CategoryCode = '007' or Pay_CategoryCode = '029') and Response_Progress = 1 GROUP BY  Pay_studentNo ) p
		ON p.Pay_studentNo = s.studentNo
	WHERE " . $whereClause . " ORDER BY s.studentNo ASC, d.degreeCode ASC;";

	// echo $getSQL["data4wifiCreation"];

}





//ReRepeat Count

$interfaceTbls["data4Rerep_examDownload"] = array("ReRepeatSelection", "student");

$nextClientInterface["data4Rerep_examDownload"] = "formDownloadReRepeatCount";

// $getSQL["data4Rerep_examDownload"] = "select t2.studentInitial, t2.studentNo, count(t1.ReRep_studentno) as studentCount from ReRepeatSelection as t1 left join student as t2 on t1.ReRep_studentno=t2.studentNo  WHERE t1.ReRep_degreeCode= '".$_POST['degreeCode']."' AND t1.ReRep_achedamicYear='".$_POST['AchademicYear']."' AND t1.ReRep_semester = '".$_POST['Semester']."' GROUP BY t1.ReRep_studentno;";




//ReRepeat Admission ends----------------------------------

//repeat count
//$getSQL["data4rep_examDownload"] = "select studentNo, count(studentNo) as studentCount from studentRepeatSelection WHERE degreeCode= '".$_POST['degreeCode']."' AND achedamicYear='".$_POST['AchademicYear']."' GROUP BY studentNo;";

//$getSQL["data4rep_examDownload"] = "select studentNo, count(studentNo) as studentCount from studentRepeatSelection WHERE degreeCode= 'MAECON' AND achedamicYear='2016' GROUP BY studentNo;";

// $getSQL["data4rep_examDownload"] = "select t2.studentInitial, t1.studentNo, count(t1.studentNo) as studentCount from studentRepeatSelection as t1 left join student as t2 on t1.studentNo=t2.studentNo  WHERE t1.degreeCode= '".$_POST['degreeCode']."' AND t1.achedamicYear='".$_POST['AchademicYear']."' AND t1.semester = '".$_POST['Semester']."' GROUP BY t1.studentNo;"; //


//tested query
//$getSQL["data4getAdmissionSubject"]="select distinct t1.*, t2.studentNo as substudentno,t2.semester as subsemester, t3.subjectTitle, t4.degreeTitle as admissionDegreeTitle ,t4.facultyCode AS addfacCode from timetable as t1 left join studentselection as t2 on t1.subjectCode=t2.subjectCode and t1.degreeCode=t2.degreeCode left join subject as t3 on t1.subjectCode=t3.subjectCode  left join degree as t4 on t1.degreeCode=t4.degreeCode ORDER BY t2.studentNo ASC,t1.examdate ASC,t1.starttime DESC;";


//admission check user
$getSQL["data4checkUserExamAdmission"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4checkdepartmentExamAdmission"] = "select * from degree ORDER BY degreeTitle ASC;";


//selected list check user

$getSQL["data4checkUserSelectedApplicant"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4checkdepartmentSelectedApplicant"] = "select * from degree ORDER BY degreeTitle ASC;";


//exam application check user
$getSQL["data4checkUserExamApplication"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4checkdepartmentExamApplication"] = "select distinct facultyCode as faccode,departmentCode,programmeTypeCode,degreeCode as appDegreeCode,degreeTitle from degree ORDER BY degreeTitle ASC;";


//results upload & download check user
$getSQL["data4checkUserExamUpDown"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4checkdepartmentExamUpDown"] = "select * from degree ORDER BY degreeTitle ASC;";

//application
if ($_POST["interface"] == "data4ApplicationFormExam") {
	if (isset($_POST['achademicYear']) && isset($_POST['degreeCode'])) {
		if ($_POST['achademicYear'] != "" && $_POST['degreeCode'] != "") {
			$getSQL["data4ApplicationFormExam"] = "SELECT DISTINCT
			t1.studentName,
			t1.achedamicYear,
			t1.studentNo,
			t1.degreeCode AS studentdegreecode,
			t2.degreeTitle
		FROM
			(
			SELECT
				studentName,
				achedamicYear,
				studentNo,
				degreeCode
			FROM
				student
			WHERE
				achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode =(
				SELECT
					degreeCode
				FROM
					degree
				WHERE
					degreeTitle LIKE '" . $_POST['degreeCode'] . "'
				LIMIT 1
			)
		) AS t1
		LEFT JOIN degree AS t2
		ON
			t1.degreeCode = t2.degreeCode
		ORDER BY
			t1.studentNo ASC;";

			// echo $getSQL["data4ApplicationFormExam"];
		}
	}
}

$getSQL["data4addApplicationForm"] = "select degreeCode,academicYear,subjectCode,subjectTitle,status, subjectSemester from subject;";



//REPEAT EXAM APPLICATION - STAFF---------------------------------------------------------

$interfaceTbls["data4addApplicationRepeteForm"] = array("subject", "examresults");
$interfaceTbls["data4RepeteApplicationForm"] = array("student", "subject", "studentselection");
$interfaceTbls["addApplicationFormRepeteExam"] = array("studentRepeatSelection");

$nextClientInterface["data4addApplicationRepeteForm"] = "formApplicationRepete";
$nextClientInterface["data4RepeteApplicationForm"] = "formApplicationRepete";
$nextClientInterface["addApplicationFormRepeteExam"] = "formExamApplication";

//if($_POST['interface']=='data4addApplicationRepeteForm'){

// $getSQL["data4addApplicationRepeteForm"]="SELECT r.subjectName,s.subjectTitle, s.subjectSemester, r.Grade as repeatGrade , r.Marks repeatMarks
// FROM examresults r, subject s
// WHERE r.subjectName = s.subjectCode AND r.degreeCode = s.degreeCode AND r.achedamicYear = s.academicYear AND (r.Marks<50 or r.Marks='125') 
// ORDER BY r.subjectName;";



// }
if ($_POST['interface'] == 'data4RepeteApplicationForm') {

	$getSQL["data4RepeteApplicationForm"] = "SELECT B.subjectCode AS sub_subjectCode,B.subjectTitle AS sub_subjectTitle ,B.subjectSemester As sub_subjectSemester,B.status AS 	sub_status FROM student S,subject B where S.degreeCode=B.degreeCode and S.achedamicYear=B.academicYear and S.studentNo not in (SELECT studentNo from studentselection);";
}








//$getSQL["data4ApplicationFormRepeteExam"]="select distinct t1.studentName,t1.achedamicYear,t1.studentNo,t1.degreeCode as studentdegreecode, t2.degreeTitle from student as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode;";


$getSQL["data4addApplicationRepeteForm"] = "SELECT distinct t1.SudentNo,t1.StudentName,t1.achedamicYear,t1.subjectName,t1.degreeCode as repeatDegreeCode, t1.Marks as repeatMarks, t1.Grade as repeatGrade , t2.degreeTitle, t3.subjectTitle , t3.subjectSemester , t3.status ,t3.credits 
	From examresults t1, degree t2 , subject t3 where t1.degreeCode=t2.degreeCode and t1.subjectName = t3.subjectCode and t1.degreeCode=t3.degreeCode and t1.achedamicYear=t3.academicYear and (t1.Marks<50 or t1.Marks='125');";

//REPEAT EXAM APPLICATION - STAFF---------------------------------------------------------

$getSQL["data4checkUserICT"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";



// LibraryIdCode
$getSQL["data4getLibCode"] = "select * from LibraryIdCode;";


if ($_POST["interface"] == "data4RegisterList") {
	$getSQL["data4RegisterList"] = "SELECT DISTINCT
    t1.universityCode,
    t1.facultyCode,
    t1.programmeTypeCode,
    t1.degreeCode as sdegreeCode,
    t1.applicationNo,
    t1.studentNIC,
    t1.studentName,
    t1.studentPersonalTitle,
    t1.studentInitial,
    t1.studentDateofbirth,
    t1.studentNationality,
    t1.studentCitizenship,
    t1.studentEmployment,
    t1.studentPermanentAddress,
    t1.studentOfficeAddress,
    t1.correspondence,
    t1.studentContactLan,
    t1.studentContactMobile,
    t1.studentContactEmail,
    t1.achedamicYear,
    t1.selected,
    t1.medium AS appmedium,
    t2.degreeTitle as sdegreeTitle,
    t3.programmeTypeTitle,
    t4.facultyTitle,
    t5.universityTitle,
    t6.studentNo,
    t6.medium,
	t6.registered,
	t7.transferType,
	t7.studentNo as newStudentNo
	
FROM
    (
    SELECT
        *
    FROM
        applicantspersonal
    WHERE
        applicationNo IN(
        SELECT DISTINCT
            *
        FROM
            (
            SELECT
                applicationNo
            FROM
                applicantspersonal t1
            WHERE
                selected = 'yes' AND achedamicYear = " . $_POST['achademicYear'] . " AND t1.medium = '" . $_POST['medium'] . "' AND t1.degreeCode = '" . $_POST['degreeCode'] . "'
            UNION ALL
        SELECT
            applicationNo
        FROM
            student t1
        WHERE
            achedamicYear = " . $_POST['achademicYear'] . " AND t1.medium = '" . $_POST['medium'] . "' AND t1.degreeCode = '" . $_POST['degreeCode'] . "'
        ) AS app
    )
) AS t1
LEFT JOIN degree AS t2
ON
    t1.degreeCode = t2.degreeCode
LEFT JOIN programmetype AS t3
ON
    t1.programmeTypeCode = t3.programmeTypeCode
LEFT JOIN faculty AS t4
ON
    t1.facultyCode = t4.facultyCode
LEFT JOIN university AS t5
ON
    t1.universityCode = t5.universityCode

LEFT JOIN(
    SELECT
        *
    FROM
        student
    WHERE
        achedamicYear = " . $_POST['achademicYear'] . "
) AS t6
ON
    t1.applicationNo = t6.applicationNo  
LEFT JOIN studenttransfer AS t7
ON
    t6.studentNo = t7.oldStudentNo
WHERE
    t1.selected = 'yes' AND(
        (t6.achedamicYear = " . $_POST['achademicYear'] . ") OR(
            t1.achedamicYear = " . $_POST['achademicYear'] . " AND t6.studentNo IS NULL
        )
    ) AND(
        (t6.medium = '" . $_POST['medium'] . "') OR(
            t1.medium = '" . $_POST['medium'] . "' AND t6.studentNo IS NULL
        )
    ) AND(
        (t6.degreeCode = '" . $_POST['degreeCode'] . "') OR(
            t1.degreeCode = '" . $_POST['degreeCode'] . "' AND t6.studentNo IS NULL
        )
    )
	ORDER BY t6.studentNo ASC";
	// echo $getSQL["data4RegisterList"] ;
}


//Exam Result bulk
$getSQL["data4addProgramm"] = "select distinct degreeCode as dedegreeCode, degreeTitle as dedegreeTitle  from degree;";
$getSQL["data4addaccy"] = "select studentNo, studentName, achedamicYear,degreeCode from student ;"; //order by studentNo ASC
$getSQL["data4addSubject"] = "select subjectCode,subjectSemester, subjectTitle, academicYear as academicYearSub,degreeCode as degreeCodeSub from subject;";

//subject
$getSQL["data4getdegree"] = "select distinct degreeCode AS digCode, degreeTitle from degree ;";
$getSQL["data4getsubjectDetails"] = "select * from subject;";

$getSQL["data4viewdegreeSubjects"] = "select distinct degreeCode AS digCode, degreeTitle from degree ;";
$getSQL["data4viewtsubjectDetails"] = "select * from subject;";

$getSQL["data4DownloaddegreeSubjects"] = "select distinct facultyCode As userFacCode, departmentCode as userDepCode, degreeCode AS digCode, degreeTitle from degree order by degreeTitle ASC;";
$getSQL["data4DownloadsubjectDetails"] = "select * from subject;";

/**Temp Down**/
//$getSQL["data4DownloadStudentMarks"]="SELECT ss.degreeCode AS ex_degCode, ss.studentNo, st.studentName, ss.semester, ss.attempt, ss.subjectCode AS ex_subCode FROM studentselection ss, student st WHERE ss.studentNo = st.studentNo;";
//$getSQL["data4DownloadStudentMarks"]="SELECT ss.degreeCode AS ex_degCode, ss.studentNo, st.studentName, ss.semester, ss.attempt, ss.subjectCode AS ex_subCode FROM studentselection ss, student st WHERE ss.studentNo = st.studentNo ORDER BY ss.studentNo;";

if ($_POST['interface'] == 'data4DownloadStudentMarks') {
	$getSQL["data4DownloadStudentMarks"] = "SELECT ss.studentNo AS studentNoMarks, st.medium AS studentMedium, st.studentName
												FROM studentselection ss, student st 
												WHERE ss.studentNo = st.studentNo AND
												ss.degreeCode = '" . $_POST['degreeCode'] . "' AND  
												ss.subjectCode = '" . $_POST['SubjectCode'] . "' AND 
												ss.semester = '" . $_POST['Semester'] . "' AND
												ss.achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY ss.studentNo;";
}

// SELECT ss.studentNo AS studentNoMarks, st.medium AS studentMedium, st.studentName ,su.subjectCode, su.subjectTitle
// FROM studentselection ss, student st, subject su 
// WHERE ss.studentNo = st.studentNo AND
// ss.subjectCode = su.subjectCode AND
// su.academicYear =ss.achedamicYear AND
// ss.degreeCode = 'MBA' AND  
// ss.subjectCode = 'MBA52063' AND 
// ss.semester = '2' AND
// ss.achedamicYear = '2019'
// ORDER BY ss.studentNo









/**Temp Down**/
if ($_POST['interface'] == 'data4examResultsSubWise') {
	$getSQL["data4examResultsSubWise"] = "SELECT distinct r.SudentNo AS SudentNoSub, r.StudentName, r.Grade, r.Examiner1, r.Examiner2, r.Marks, st.medium AS studentMedium
												FROM examresults r, subject s, student st
												WHERE r.subjectName = s.subjectCode AND r.degreeCode = s.degreeCode AND r.SudentNo = st.studentNo AND 
												s.degreeCode = '" . $_POST['degreeCode'] . "' AND  
												s.subjectCode = '" . $_POST['SubjectCode'] . "' AND 
												s.subjectSemester = '" . $_POST['Semester'] . "' AND
												r.achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY r.SudentNo;";
}

if ($_POST['interface'] == 'data4examResultsSemWise') { //2022-5-7
	$getSQL["data4examResultsSemWise"] = "SELECT distinct r.* ,st.medium AS studentSemMedium
												FROM examresults r, subject s , student st
												WHERE r.subjectName = s.subjectCode AND r.degreeCode = s.degreeCode AND r.SudentNo = st.studentNo AND st.achedamicYear=s.academicYear
												s.degreeCode = '" . $_POST['degreeCode'] . "' AND  
												s.subjectSemester = '" . $_POST['Semester'] . "' AND
												r.achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY r.SudentNo, r.subjectName;";
}
// '".$_POST['degreeCode']."' 
// '".$_POST['Semester']."'
// '".$_POST['AchademicYear']."'

if ($_POST['interface'] == 'data4examResultsSemWiseSubjects') {
	$getSQL["data4examResultsSemWiseSubjects"] = "SELECT distinct subjectCode AS subCode, subjectTitle AS subTitle 
												FROM subject
												WHERE degreeCode = '" . $_POST['degreeCode'] . "' AND  
												subjectSemester = '" . $_POST['Semester'] . "' AND
												academicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY subjectCode;";
}

if ($_POST['interface'] == 'data4examResultsSemWiseFinal') {
	$getSQL["data4examResultsSemWiseFinal"] = "SELECT distinct studentNo AS finalStudentNoSem, finalGPA 
												FROM student_final_result
												WHERE degreeCode = '" . $_POST['degreeCode'] . "' AND
												achedamicYear = '" . $_POST['AchademicYear'] . "' AND
												semester = '" . $_POST['Semester'] . "'
												ORDER BY studentNo, semester;";
}

if ($_POST['interface'] == 'data4examResultsYearWise') {
	$getSQL["data4examResultsYearWise"] = "SELECT distinct r.SudentNo AS SudentNoYear, r.StudentName, r.degreeCode, r.subjectName, r.Grade, r.Examiner1, r.Examiner2, r.Marks, s.subjectSemester AS susSem,st.medium AS studentSemMedium,
												CASE 	WHEN r.Grade = 'A+' THEN '4.00'
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
												WHEN r.Grade = 'E' THEN '0.00'END AS GPA
												FROM examresults r, subject s , student st
												WHERE r.subjectName = s.subjectCode AND 
												r.degreeCode = s.degreeCode AND 
												r.SudentNo = st.studentNo AND
												st.achedamicYear=s.academicYear AND
												s.degreeCode = '" . $_POST['degreeCode'] . "' AND  
												r.achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY r.SudentNo, r.subjectName;";
}

if ($_POST['interface'] == 'data4examResultsYearWiseSubjects') {
	$getSQL["data4examResultsYearWiseSubjects"] = "SELECT  distinct subjectCode AS subCodeYear, subjectTitle AS subTitleYear, subjectSemester 
												FROM subject
												WHERE degreeCode = '" . $_POST['degreeCode'] . "' AND
												academicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY subjectSemester ASC;"; // subjectCode
}

if ($_POST['interface'] == 'data4examResultsYearWiseFinal') {
	$getSQL["data4examResultsYearWiseFinal"] = "SELECT distinct studentNo AS finalStudentNo, semester AS finalsemester, finalGPA, finalResult   
												FROM student_final_result
												WHERE degreeCode = '" . $_POST['degreeCode'] . "' AND
												achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY studentNo, semester;";
}


if ($_POST['interface'] == "data4examPassReport") {
	$getSQL["data4examPassReport"] = "SELECT distinct t1.studentNo AS finalPassStudentNo, t1.semester AS finalsemester,t1.finalGPA,t1.finalResult,
											t2.studentName as finalPassName , t2.medium as finalMedium ,t2.studentPermanentAddress as finalAddress
											FROM student_final_result as t1 left join 
											student as t2 on t1.studentNo =t2.studentNo 
											WHERE t1.finalResult= 'Pass' AND 
											t1.degreeCode = '" . $_POST['degreeCode'] . "' AND 
											t1.achedamicYear = '" . $_POST['AchademicYear'] . "'
											ORDER BY t1.studentNo, t1.semester;";
}

// \SELECT distinct t1.studentNo AS finalStudentNo,
// t2.studentName, 
// t1.semester AS finalsemester, 
// t1.finalResult,
// t2.medium AS studentMedium
// FROM student_final_result as t1 left join student as t2 on t1.studentNo = t2.studentNo 
// WHERE t1.finalResult= 'Pass' AND 
// t1.degreeCode = '".$_POST['degreeCode']."' AND 
// t1.achedamicYear = '".$_POST['AchademicYear']."'
// ORDER BY t1.studentNo, t1.semester	

//Final Result
$getSQL["data4viewdegreeforFinal"] = "select distinct degreeCode AS digCode, degreeTitle from degree ORDER BY degreeTitle ASC ;";

if ($_POST['interface'] == 'data4finalExamResultsView') {
	$getSQL["data4finalExamResultsView"] = "SELECT distinct r.SudentNo, r.StudentName, r.achedamicYear, r.subjectName, s.subjectTitle, s.subjectSemester, r.Grade, s.credits,st.medium AS studentMedium, 
		CASE 	WHEN r.Grade = 'A+' THEN '4.00'
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
				WHEN r.Grade = 'E' THEN '0.00'END AS GPA
		FROM examresults r, subject s, student st
		WHERE 	r.subjectName = s.subjectCode AND
				r.degreeCode=s.degreeCode AND
				st.achedamicYear=s.academicYear AND
				st.studentNo = r.SudentNo AND
				st.degreeCode = '" . $_POST['degreeCode'] . "' AND		
				st.achedamicYear = '" . $_POST['AchademicYear'] . "'				
		ORDER BY r.SudentNo, s.subjectSemester, r.subjectName;";
}
//st.medium = '".$_POST['medium']."' AND	

if ($_POST['interface'] == 'data4finalExamCriteria') {
	$getSQL["data4finalExamCriteria"] = "SELECT * FROM final_result_criteria
		WHERE cr_degreeCode = '" . $_POST['degreeCode'] . "'
		ORDER BY cr_gpa DESC;";
}

// if($_POST['interface']=='data4finalExamCriteria'){
// $getSQL["data4finalExamCriteria"] = "SELECT * FROM final_result_criteria
// WHERE cr_degreeCode = '".$_POST['degreeCode']."'
// AND cr_year = '".$_POST['academicYear']."'
// ORDER BY cr_gpa DESC;";
// }

if ($_POST['interface'] == 'data4finalExamCriteriaAdd') {
	$getSQL["data4finalExamCriteriaAdd"] = "SELECT * FROM final_result_criteria
		WHERE cr_degreeCode = '" . $_POST['degreeCode'] . "'
		ORDER BY cr_gpa DESC;";
}
/*Sem*/
if ($_POST['interface'] == 'data4finalExamResultsViewSem') {
	$getSQL["data4finalExamResultsViewSem"] = "SELECT distinct r.SudentNo, r.StudentName, r.achedamicYear, r.subjectName, s.subjectTitle, s.subjectSemester, r.Grade, s.credits,st.medium AS studentMedium, 
		CASE 	WHEN r.Grade = 'A+' THEN '4.00'
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
				WHEN r.Grade = 'E' THEN '0.00'END AS GPA
		FROM examresults r, subject s, student st
		WHERE 	r.subjectName = s.subjectCode AND
				r.degreeCode=s.degreeCode AND
				st.studentNo = r.SudentNo AND
				st.degreeCode = '" . $_POST['degreeCode'] . "' AND 
				st.achedamicYear = '" . $_POST['AchademicYear'] . "' AND
				s.subjectSemester = '" . $_POST['smester'] . "'		
		ORDER BY r.SudentNo, s.subjectSemester, s.subjectTitle;";
}
//st.medium = '".$_POST['medium']."' AND

if ($_POST['interface'] == 'data4finalExamCriteriaSem') {
	$getSQL["data4finalExamCriteriaSem"] = "SELECT * FROM final_result_criteria
		WHERE cr_degreeCode = '" . $_POST['degreeCode'] . "'
		ORDER BY cr_gpa DESC;";
}


//Exam Results
$getSQL["data4addExamResults"] = "select * from student;";
$getSQL["data4UpdateInfoStudentTransfer"] = "select  degreeCode, degreeTitle, programmeTypeCode,facultyCode,IncomeSourceCode from degree ORDER BY degreeTitle ASC ;";

//Applicant Transfer
$getSQL["data4TransferApplicant"] = "select degreeCode, programmeTypeCode, applicationNo from applicantspersonal;";
$getSQL["data4UpdateInfo"] = "select  degreeCode, degreeTitle, programmeTypeCode from degree ORDER BY degreeTitle ASC ;";




$getSQL["data4checkUserRegisterStudent"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";

$getSQL["data4checkdepartmentRegisterStudent"] = "select * from degree ORDER BY degreeTitle ASC;";

//Note and Notification start------------------------------------------------------------------------------------------------------------------------------------------------
$getSQL["data4StudentNotificationList"] = "SELECT studentNo, studentNIC, studentInitial, degreeCode as stdegreeCode, achedamicYear FROM `student` WHERE registered='yes' ORDER BY studentNo;";

$getSQL["data4Notificationcheckdepartment"] = "select distinct degreeCode, degreeTitle from degree;";

$getSQL["data4PendingConfirmNote"] = "select ID as IDnotes, messageId, additionalNotes, requestedDate from notes where status=0;";

$getSQL["data4ApplicantNotificationList"] = "SELECT applicationNo, studentInitial, degreeCode as appdegreeCode, achedamicYear as appachedamicYear FROM `applicantspersonal` ORDER BY applicationNo;";

$getSQL["data4MessageList"] = "select messageTypeID, messageID as MID,message  from addmessage;";

$getSQL["data4FacultyList"] = "select facultyCode, facultyTitle,deanEmpNo  from faculty;";


//Note and Notification end------------------------------------------------------------------------------------------------------------------------------------------------

$getSQL["data4viewMessage"] = "select * from message;";

$getSQL["data4viewMessageUpdate"] = "select * from message;";
$getSQL["data4viewMessageToUpdate"] = "select * from addmessage;";
//test query
//select t1.docmentID,t1.dataItemID,t1.itemValue,t2.documentName,t3.dataItemName from documentdata as t1 left join document as t2 on t1.docmentID=t2.documentID left join dataitem as t3 on t1.dataItemID=t3.dataItemID;

//***************added 23.8.2016***************************************************************
$getSQL["data4ViewDegreeName"] = "SELECT DISTINCT degreeCode, degreeTitle FROM degree ORDER BY degreeTitle ASC;";
if ($_POST['interface'] == 'data4ViewApplicants2') {
	$getSQL["data4ViewApplicants2"] = "	 
	SELECT 
    ae.application_no             AS edu_application_no,
    ae.qulificaition_id           AS edu_qulificaition_id,
    ae.university                 AS edu_university,
    ae.awarding_country           AS edu_awarding_country,
    ae.qualification_type         AS edu_qualification_type,
    ae.designator                 AS edu_designator,
    ae.qualifier                  AS edu_qualifier,
    ae.graduate_year              AS edu_graduate_year,
    ae.graduate_month             AS edu_graduate_month,
    ae.duration                   AS edu_duration,
    ae.effective_date             AS edu_effective_date,
    ae.gpa                        AS edu_gpa,
    ae.class                      AS edu_class,
    ae.degree_certificate         AS edu_degree_certificate,
    ae.degree_detail_certificate  AS edu_degree_detail_certificate,
    ae.result_status              AS edu_result_status,
    ae.sub1                       AS edu_sub1,
    ae.sub2                       AS edu_sub2,
    ae.sub3                       AS edu_sub3,
    ae.sub4                       AS edu_sub4,
    ae.researchCredit             AS edu_researchCredit,
    ae.researchDuration           AS edu_researchDuration,
    ae.researchCompHas            AS edu_researchCompHas

	FROM `applicantspersonal`  a 
	LEFT JOIN applicant_education_qualifications ae ON a.applicationNo = ae.application_no
	WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "'
	";
	// echo $getSQL["data4ViewApplicants2"];

}

if ($_POST['interface'] == 'data4ViewApplicants3') {
	$getSQL["data4ViewApplicants3"] = "	 
	SELECT 
    ap.application_no             AS prof_application_no,
    ap.qulificaition_id           AS prof_qulificaition_id,
    ap.qualification              AS prof_qualification,
    ap.qualification_level        AS prof_qualification_level,
    ap.awarding_authority         AS prof_awarding_authority,
    ap.awarding_year              AS prof_awarding_year,
    ap.awarding_country           AS prof_awarding_country,
    ap.effective_date             AS prof_effective_date,
    ap.certificate                AS prof_certificate

	FROM `applicantspersonal`  a 
	LEFT JOIN applicant_prof_qualifications ap ON a.applicationNo = ap.application_no
	WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "'
	";
}

if ($_POST['interface'] == 'data4ViewApplicants4') {
	$getSQL["data4ViewApplicants4"] = "	 
	SELECT 
    aw.application_no             AS work_application_no,
    aw.qulificaition_id           AS work_qulificaition_id,
    aw.organization               AS work_organization,
    aw.designation                AS work_designation,
    aw.awarding_country           AS work_awarding_country,
    aw.address                    AS work_address,
    aw.start_date                 AS work_start_date,
    aw.end_date                   AS work_end_date,
    aw.certificate                AS work_certificate,
    aw.verified                   AS work_verified

	FROM `applicantspersonal`  a 
	LEFT JOIN applicant_work_experiences aw ON a.applicationNo = aw.application_no
	WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "'
	";
	// echo $getSQL["data4ViewApplicants4"];
}

if ($_POST['interface'] == 'data4ViewApplicants') {
	$acdyr = "%" . $_POST['AchademicYear'] . "%";
	$BIND = "WHERE `applicantspersonal`.`applicationNo` IN (SELECT applicationNo FROM `applicantspersonal` WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "' )";
	$BINDEd = "WHERE `applicantseducation`.`applicationNo` IN (SELECT applicationNo FROM `applicantspersonal` WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "' )";
	$BINDWor = "WHERE `applicantswork`.`applicationNo` IN (SELECT applicationNo FROM `applicantspersonal` WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "' )";

	$getSQL["data4ViewApplicants"] = "
	SELECT * FROM (SELECT
	REGEXP_REPLACE(`appvertical`.`studentNIC`, '[^[:alnum:][:punct:][:space:]]', '')  AS `studentNIC`,
	REGEXP_REPLACE(`appvertical`.`applicationNo`, '[^[:alnum:][:punct:][:space:]]', '')  AS `applicationNo`,
	REGEXP_REPLACE(`appvertical`.`FieldName`, '[^[:alnum:][:punct:][:space:]]', '')  AS `FieldName`,
	REGEXP_REPLACE(`appvertical`.`value`, '[^[:alnum:][:punct:][:space:]]', '')  AS `value`,
	'0'  AS `pin`
	FROM
		(
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'universityCode' AS `FieldName`,
		`applicantspersonal`.`universityCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "	
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'facultyCode' AS `FieldName`,
		`applicantspersonal`.`facultyCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "	
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'programmeTypeCode' AS `FieldName`,
		`applicantspersonal`.`programmeTypeCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'degreeCode' AS `FieldName`,
		`applicantspersonal`.`degreeCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'temporaryNo' AS `FieldName`,
		`applicantspersonal`.`temporaryNo` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentName' AS `FieldName`,
		`applicantspersonal`.`studentName` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentPersonalTitle' AS `FieldName`,
		`applicantspersonal`.`studentPersonalTitle` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentInitial' AS `FieldName`,
		`applicantspersonal`.`studentInitial` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentDateofbirth' AS `FieldName`,
		`applicantspersonal`.`studentDateofbirth` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentGender' AS `FieldName`,
		`applicantspersonal`.`studentGender` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentNationality' AS `FieldName`,
		`applicantspersonal`.`studentNationality` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentCitizenship' AS `FieldName`,
		`applicantspersonal`.`studentCitizenship` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentEmployment' AS `FieldName`,
		`applicantspersonal`.`studentEmployment` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentPermanentAddress' AS `FieldName`,
		`applicantspersonal`.`studentPermanentAddress` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentOfficeAddress' AS `FieldName`,
		`applicantspersonal`.`studentOfficeAddress` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'correspondence' AS `FieldName`,
		`applicantspersonal`.`correspondence` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentContactLan' AS `FieldName`,
		`applicantspersonal`.`studentContactLan` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentContactMobile' AS `FieldName`,
		`applicantspersonal`.`studentContactMobile` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentContactEmail' AS `FieldName`,
		`applicantspersonal`.`studentContactEmail` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentContactEmail2' AS `FieldName`,
		`applicantspersonal`.`studentContactEmail2` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'selected' AS `FieldName`,
		`applicantspersonal`.`selected` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'notes' AS `FieldName`,
		`applicantspersonal`.`notes` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'achedamicYear' AS `FieldName`,
		`applicantspersonal`.`achedamicYear` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'medium' AS `FieldName`,
		`applicantspersonal`.`medium` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'pin' AS `FieldName`,
		`applicantspersonal`.`pin` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'applicationCode' AS `FieldName`,
		`applicantspersonal`.`applicationCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'countryRegion' AS `FieldName`,
		`applicantspersonal`.`countryRegion` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'streamName' AS `FieldName`,
		`applicantspersonal`.`streamName` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'selectionCategory' AS `FieldName`,
		`applicantspersonal`.`selectionCategory` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentDesignation' AS `FieldName`,
		`applicantspersonal`.`studentDesignation` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	ORDER BY `applicationNo`) AS appvertical	
		) T1
		UNION ALL
	SELECT * FROM (		
		SELECT
		REGEXP_REPLACE(`applicantseducation`.`studentNIC`, '[^[:alnum:][:punct:][:space:]]', '')  AS `studentNIC`,
		REGEXP_REPLACE(`applicantseducation`.`applicationNo`, '[^[:alnum:][:punct:][:space:]]', '')  AS `applicationNo`,
		REGEXP_REPLACE(`applicantseducation`.`educationFieldName`, '[^[:alnum:][:punct:][:space:]]', '')  AS `FieldName`,
		REGEXP_REPLACE(`applicantseducation`.`educationValue`, '[^[:alnum:][:punct:][:space:]]', '')  AS `value`,
		REGEXP_REPLACE(`applicantseducation`.`educationPin`, '[^[:alnum:][:punct:][:space:]]', '')  AS `pin`
	FROM
		`applicantseducation` " . $BINDEd . "
	order by  `applicationNo`, `applicantseducation`.`educationPin` ASC
	) t2
	UNION ALL
	SELECT * FROM ( 
		SELECT
		REGEXP_REPLACE(`applicantswork`.`studentNIC`, '[^[:alnum:][:punct:][:space:]]', '')  AS `studentNIC`,
		REGEXP_REPLACE(`applicantswork`.`applicationNo`, '[^[:alnum:][:punct:][:space:]]', '')  AS `applicationNo`,
		REGEXP_REPLACE(`applicantswork`.`workFieldName`, '[^[:alnum:][:punct:][:space:]]', '')  AS `FieldName`,
		REGEXP_REPLACE(`applicantswork`.`workValue`, '[^[:alnum:][:punct:][:space:]]', '')  AS `value`,
		REGEXP_REPLACE(`applicantswork`.`workPin`, '[^[:alnum:][:punct:][:space:]]', '')  AS `pin`
	FROM
		`applicantswork` " . $BINDWor . "
	order by `applicationNo`,`applicantswork`.`workPin` ASC
	) t3
	ORDER BY
		`applicationNo`";
	// echo $getSQL["data4SelectedApplicantList"];

}






if ($_POST['interface'] == 'data4ViewEduApplicants2') {
	$getSQL["data4ViewEduApplicants2"] = "	 
	SELECT 
    ae.application_no             AS edu_application_no,
    ae.qulificaition_id           AS edu_qulificaition_id,
    ae.university                 AS edu_university,
    ae.awarding_country           AS edu_awarding_country,
    ae.qualification_type         AS edu_qualification_type,
    ae.designator                 AS edu_designator,
    ae.qualifier                  AS edu_qualifier,
    ae.graduate_year              AS edu_graduate_year,
    ae.graduate_month             AS edu_graduate_month,
    ae.duration                   AS edu_duration,
    ae.effective_date             AS edu_effective_date,
    ae.gpa                        AS edu_gpa,
    ae.class                      AS edu_class,
    ae.degree_certificate         AS edu_degree_certificate,
    ae.degree_detail_certificate  AS edu_degree_detail_certificate,
    ae.result_status              AS edu_result_status,
    ae.sub1                       AS edu_sub1,
    ae.sub2                       AS edu_sub2,
    ae.sub3                       AS edu_sub3,
    ae.sub4                       AS edu_sub4,
    ae.researchCredit             AS edu_researchCredit,
    ae.researchDuration           AS edu_researchDuration,
    ae.researchCompHas            AS edu_researchCompHas

	FROM 
	`student`  s 
	LEFT JOIN applicantspersonal a ON s.applicationNo = a.applicationNo
	LEFT JOIN applicant_education_qualifications ae ON a.applicationNo = ae.application_no
	WHERE s.degreeCode = '" . $_POST['degreeCode'] . "' and s.achedamicYear = '" . $_POST['AchademicYear'] . "'
	";
	// echo $getSQL["data4ViewApplicants3"];


}

if ($_POST['interface'] == 'data4ViewEduApplicants3') {
	$getSQL["data4ViewEduApplicants3"] = "	 
	SELECT 
    ap.application_no             AS prof_application_no,
    ap.qulificaition_id           AS prof_qulificaition_id,
    ap.qualification              AS prof_qualification,
    ap.qualification_level        AS prof_qualification_level,
    ap.awarding_authority         AS prof_awarding_authority,
    ap.awarding_year              AS prof_awarding_year,
    ap.awarding_country           AS prof_awarding_country,
    ap.effective_date             AS prof_effective_date,
    ap.certificate                AS prof_certificate

	FROM 
	`student`  s 
	LEFT JOIN applicantspersonal a ON s.applicationNo = a.applicationNo
	LEFT JOIN applicant_prof_qualifications ap ON a.applicationNo = ap.application_no
	WHERE s.degreeCode = '" . $_POST['degreeCode'] . "' and s.achedamicYear = '" . $_POST['AchademicYear'] . "'
	";
	// echo $getSQL["data4ViewEduApplicants3"];

}

if ($_POST['interface'] == 'data4ViewEduApplicants4') {
	$getSQL["data4ViewEduApplicants4"] = "	 
	SELECT 
    aw.application_no             AS work_application_no,
    aw.qulificaition_id           AS work_qulificaition_id,
    aw.organization               AS work_organization,
    aw.designation                AS work_designation,
    aw.awarding_country           AS work_awarding_country,
    aw.address                    AS work_address,
    aw.start_date                 AS work_start_date,
    aw.end_date                   AS work_end_date,
    aw.certificate                AS work_certificate,
    aw.verified                   AS work_verified

	FROM 
	`student`  s 
	LEFT JOIN applicantspersonal a ON s.applicationNo = a.applicationNo
	LEFT JOIN applicant_work_experiences aw ON a.applicationNo = aw.application_no
	WHERE s.degreeCode = '" . $_POST['degreeCode'] . "' and s.achedamicYear = '" . $_POST['AchademicYear'] . "'
	";
	// echo $getSQL["data4ViewApplicants4"];
}

if ($_POST['interface'] == 'data4ViewEduApplicants') {
	$acdyr = "%" . $_POST['AchademicYear'] . "%";
	$BIND = "WHERE `applicantspersonal`.`applicationNo` IN (SELECT applicationNo FROM `student` WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "' )";
	$BIND2 = "WHERE `student`.`applicationNo` IN (SELECT applicationNo FROM `student` WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "' )";
	$BINDEd = "WHERE `applicantseducation`.`applicationNo` IN (SELECT applicationNo FROM `student` WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "' )";
	$BINDWor = "WHERE `applicantswork`.`applicationNo` IN (SELECT applicationNo FROM `student` WHERE degreeCode = '" . $_POST['degreeCode'] . "' and achedamicYear = '" . $_POST['AchademicYear'] . "' )";

	$getSQL["data4ViewEduApplicants"] = "
	SELECT * FROM (SELECT
	REGEXP_REPLACE(`appvertical`.`studentNIC`, '[^[:alnum:][:punct:][:space:]]', '')  AS `studentNIC`,
	REGEXP_REPLACE(`appvertical`.`applicationNo`, '[^[:alnum:][:punct:][:space:]]', '')  AS `applicationNo`,
	REGEXP_REPLACE(`appvertical`.`FieldName`, '[^[:alnum:][:punct:][:space:]]', '')  AS `FieldName`,
	REGEXP_REPLACE(`appvertical`.`value`, '[^[:alnum:][:punct:][:space:]]', '')  AS `value`,
	'0'  AS `pin`
	FROM
		(
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'universityCode' AS `FieldName`,
		`applicantspersonal`.`universityCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "	
	UNION ALL
	SELECT
		`student`.`studentNIC` AS `studentNIC`,
		`student`.`applicationNo` AS `applicationNo`,
		'studentNo' AS `FieldName`,
		`student`.`studentNo` AS `value`
	FROM
		`student` " . $BIND2 . "	
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'facultyCode' AS `FieldName`,
		`applicantspersonal`.`facultyCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "	
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'programmeTypeCode' AS `FieldName`,
		`applicantspersonal`.`programmeTypeCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'degreeCode' AS `FieldName`,
		`applicantspersonal`.`degreeCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'temporaryNo' AS `FieldName`,
		`applicantspersonal`.`temporaryNo` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentName' AS `FieldName`,
		`applicantspersonal`.`studentName` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentPersonalTitle' AS `FieldName`,
		`applicantspersonal`.`studentPersonalTitle` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentInitial' AS `FieldName`,
		`applicantspersonal`.`studentInitial` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentDateofbirth' AS `FieldName`,
		`applicantspersonal`.`studentDateofbirth` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentGender' AS `FieldName`,
		`applicantspersonal`.`studentGender` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentNationality' AS `FieldName`,
		`applicantspersonal`.`studentNationality` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentCitizenship' AS `FieldName`,
		`applicantspersonal`.`studentCitizenship` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentEmployment' AS `FieldName`,
		`applicantspersonal`.`studentEmployment` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentPermanentAddress' AS `FieldName`,
		`applicantspersonal`.`studentPermanentAddress` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentOfficeAddress' AS `FieldName`,
		`applicantspersonal`.`studentOfficeAddress` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'correspondence' AS `FieldName`,
		`applicantspersonal`.`correspondence` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentContactLan' AS `FieldName`,
		`applicantspersonal`.`studentContactLan` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentContactMobile' AS `FieldName`,
		`applicantspersonal`.`studentContactMobile` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentContactEmail' AS `FieldName`,
		`applicantspersonal`.`studentContactEmail` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentContactEmail2' AS `FieldName`,
		`applicantspersonal`.`studentContactEmail2` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'selected' AS `FieldName`,
		`applicantspersonal`.`selected` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'notes' AS `FieldName`,
		`applicantspersonal`.`notes` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'achedamicYear' AS `FieldName`,
		`applicantspersonal`.`achedamicYear` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'medium' AS `FieldName`,
		`applicantspersonal`.`medium` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'pin' AS `FieldName`,
		`applicantspersonal`.`pin` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'applicationCode' AS `FieldName`,
		`applicantspersonal`.`applicationCode` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'countryRegion' AS `FieldName`,
		`applicantspersonal`.`countryRegion` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'streamName' AS `FieldName`,
		`applicantspersonal`.`streamName` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'selectionCategory' AS `FieldName`,
		`applicantspersonal`.`selectionCategory` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	UNION ALL
	SELECT
		`applicantspersonal`.`studentNIC` AS `studentNIC`,
		`applicantspersonal`.`applicationNo` AS `applicationNo`,
		'studentDesignation' AS `FieldName`,
		`applicantspersonal`.`studentDesignation` AS `value`
	FROM
		`applicantspersonal` " . $BIND . "
	ORDER BY `applicationNo`) AS appvertical	
		) T1
		UNION ALL
	SELECT * FROM (		
		SELECT
		REGEXP_REPLACE(`applicantseducation`.`studentNIC`, '[^[:alnum:][:punct:][:space:]]', '')  AS `studentNIC`,
		REGEXP_REPLACE(`applicantseducation`.`applicationNo`, '[^[:alnum:][:punct:][:space:]]', '')  AS `applicationNo`,
		REGEXP_REPLACE(`applicantseducation`.`educationFieldName`, '[^[:alnum:][:punct:][:space:]]', '')  AS `FieldName`,
		REGEXP_REPLACE(`applicantseducation`.`educationValue`, '[^[:alnum:][:punct:][:space:]]', '')  AS `value`,
		REGEXP_REPLACE(`applicantseducation`.`educationPin`, '[^[:alnum:][:punct:][:space:]]', '')  AS `pin`
	FROM
		`applicantseducation` " . $BINDEd . "
	order by  `applicationNo`, `applicantseducation`.`educationPin` ASC
	) t2
	UNION ALL
	SELECT * FROM ( 
		SELECT
		REGEXP_REPLACE(`applicantswork`.`studentNIC`, '[^[:alnum:][:punct:][:space:]]', '')  AS `studentNIC`,
		REGEXP_REPLACE(`applicantswork`.`applicationNo`, '[^[:alnum:][:punct:][:space:]]', '')  AS `applicationNo`,
		REGEXP_REPLACE(`applicantswork`.`workFieldName`, '[^[:alnum:][:punct:][:space:]]', '')  AS `FieldName`,
		REGEXP_REPLACE(`applicantswork`.`workValue`, '[^[:alnum:][:punct:][:space:]]', '')  AS `value`,
		REGEXP_REPLACE(`applicantswork`.`workPin`, '[^[:alnum:][:punct:][:space:]]', '')  AS `pin`
	FROM
		`applicantswork` " . $BINDWor . "
	order by `applicationNo`,`applicantswork`.`workPin` ASC
	) t3
	ORDER BY
		`applicationNo`";
	// echo $getSQL["data4ViewEduApplicants"];

}

// $nextClientInterface["data4ViewEduApplicants"] = "formStudentQulificationList";
// $nextClientInterface["data4ViewEduApplicants2"] = "formStudentQulificationList2";
// $nextClientInterface["data4ViewEduApplicants3"] = "formStudentQulificationList3";
// $nextClientInterface["data4ViewEduApplicants4"] = "formStudentQulificationList4";







$getSQL["data4checkUserInterview"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";

$getSQL["data4ListName"] = "select * from document where documentName like '%list%' OR '%List%';";


//***********************************************************************************************

//***************************added 1.9.2016********************************************************************

if ($_POST["interface"] == 'data4SelectedApplicantList') {
	$getSQL["data4SelectedApplicantList"] = "SELECT DISTINCT
    t1.universityCode,
    t1.facultyCode,
    t1.programmeTypeCode,
    t1.degreeCode as sdegreeCode,
    t1.studentNIC,
    t1.applicationNo,
    t1.studentName,
    t1.studentPersonalTitle,
    t1.studentInitial,
    t1.studentDateofbirth,
    t1.studentNationality,
    t1.studentCitizenship,
    t1.studentEmployment,
    t1.studentPermanentAddress,
    t1.studentOfficeAddress,
    t1.correspondence,
    t1.studentContactLan,
    t1.studentContactMobile,
    t1.studentContactEmail,
    t1.achedamicYear,
    t1.medium,
    t1.selectionCategory,
    t1.selectedFromGraduate,
    t1.selectedFromProfessional,
    t1.selectedFromPendingQulification,
    t1.selectedFromSpecialApprove,
    t1.bosNumber,
    t1.bosDate,
    t1.listNumber,
    t6.degreeTitle,
    t7.programmeTypeTitle,
    t8.facultyTitle,
    t9.universityTitle
FROM
    (
    SELECT
        *
    FROM
        applicantspersonal
    WHERE
        selected = 'yes' AND achedamicYear = " . $_POST['achademicYear'] . " AND medium = '" . $_POST['medium'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "' )AS t1
LEFT JOIN degree AS t6
ON
    t1.degreeCode = t6.degreeCode
LEFT JOIN programmetype AS t7
ON
    t1.programmeTypeCode = t7.programmeTypeCode
LEFT JOIN faculty AS t8
ON
    t1.facultyCode = t8.facultyCode
LEFT JOIN university AS t9
ON
    t1.universityCode = t9.universityCode
WHERE
    (t1.selected = 'YES')
ORDER BY
    t6.degreeTitle ASC,
    (t1.temporaryNo);";

	// echo $getSQL["data4SelectedApplicantList"];
}

$getSQL["data4returnApplicantList"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";


//***********************************************************************************************

//******************************************added2.9.2016***************************************************************
if ($_POST['interface'] == 'data4ApplicantSelection') {
	$getSQL["data4ApplicantSelection"] = "
	SELECT DISTINCT * FROM (SELECT
    t1.applicationNo AS aNo,
    t1.*,
    st.studentNo,
    t6.degreeTitle,
    t7.programmeTypeTitle,
    t8.facultyTitle,
    t9.universityTitle
FROM
    (
    SELECT
        *
    FROM
        applicantspersonal
    WHERE MEDIUM
        = '" . $_POST['medium'] . "' AND achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "'
) AS t1
LEFT JOIN(
    SELECT
        *
    FROM
        student
    WHERE
        degreeCode = '" . $_POST['degreeCode'] . "'
) AS st
ON
    t1.applicationNo = st.applicationNo
LEFT JOIN degree AS t6
ON
    t1.degreeCode = t6.degreeCode
LEFT JOIN programmetype AS t7
ON
    t1.programmeTypeCode = t7.programmeTypeCode
LEFT JOIN faculty AS t8
ON
    t1.facultyCode = t8.facultyCode
LEFT JOIN university AS t9
ON
    t1.universityCode = t9.universityCode
UNION ALL
SELECT
    t1.applicationNo AS aNo,
    t1.*,
    st.studentNo,
    t6.degreeTitle,
    t7.programmeTypeTitle,
    t8.facultyTitle,
    t9.universityTitle
FROM
    (
    SELECT
        *
    FROM
        student
    WHERE
        degreeCode = '" . $_POST['degreeCode'] . "' AND achedamicYear = '" . $_POST['achademicYear'] . "' AND  medium = '" . $_POST['medium'] . "'
) AS st
JOIN(
    SELECT
        *
    FROM
        applicantspersonal
    WHERE ((achedamicYear != '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "') OR (achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode != '" . $_POST['degreeCode'] . "') OR (achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "' AND medium != '" . $_POST['medium'] . "'))
) AS t1
ON
    t1.applicationNo = st.applicationNo
LEFT JOIN degree AS t6
ON
    t1.degreeCode = t6.degreeCode
LEFT JOIN programmetype AS t7
ON
    t1.programmeTypeCode = t7.programmeTypeCode
LEFT JOIN faculty AS t8
ON
    t1.facultyCode = t8.facultyCode
LEFT JOIN university AS t9
ON
    t1.universityCode = t9.universityCode) as t  
ORDER BY t.studentNo ASC
	
	
	
	
	
	
	
	";
	// echo $getSQL["data4ApplicantSelection"];
				
}
$getSQL["data4checkdepartmentSelection"] = "select universityCode as suniversityCode ,facultyCode as sfacultyCode ,departmentCode as sdepartmentCode ,programmeTypeCode as sprogrammeTypeCode ,slql as sslql ,degreeCode as sdegreeCode ,degreeTitle as sdegreeTitle ,duration as sduration ,criteriaCode as scriteriaCode ,medium as smedium ,IncomeSourceCode as sIncomeSourceCode from degree ORDER BY degreeTitle ASC;";

$getSQL["data4checkUserSelection"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";

$getSQL["data4ApplicantProfileSelection"] = "select distinct t1.universityCode,t1.facultyCode,t1.programmeTypeCode,t1.degreeCode,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle,t1.studentNIC,t1.applicationNo,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentDateofbirth,t1.studentNationality,t1.studentCitizenship,t1.studentEmployment,t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,
t2.bachelorDegree,t2.bachelorDegreeTitle,t2.bachelorDegreeobtainUniversity,t2.bachelorDegreegraduationYear,t2.bachelorDegreegraduationMonth,
t2.higherDegree,t2.higherDegreeTitle,t2.higherDegreeobtainUniversity,t2.higherDegreegraduationYear,t2.higherDegreegraduationMonth,	t2.qualificationOne,t2.qualificationAwardingAuthorityOne,t2.qualificationAwardingYearOne,t2.qualificationTwo,t2.qulificationAwardingAuthorityTwo,t2.qulificationAwardingYearTwo,
t3.companyOne,t3.designationOne,t3.fromOne,t3.toOne,t3.companyTwo,t3.designationTwo,t3.fromTwo,t3.toTwo,t3.companyThree,t3.designationThree,t3.fromThree,
t3.toThree,t3.refreeNameOne,t3.refreeAddressOne,t3.refreeDesignationOne,t3.refreeNameTwo,t3.refreeAddressTwo,t3.refreeDesignationTwo,
t4.registrationSougth,t4.mainSubject,t4.fieldOfSpecialization,t4.researchMedium,t4.researchTitle,t4.grantForProject,t4.grantDetails,t4.financedDetails,t4.registeredOtherDegree,t5.applicantName,t5.applicantInstitution,t5.applicantAddress,t5.applicantResearchTitle from applicantspersonal as t1 left join applicantseducation as t2 on t1.studentNIC=t2.studentNIC left join applicantswork as t3 on t1.studentNIC=t3.studentNIC left join applicantsother as t4 on t1.studentNIC=t4.studentNIC
left join applicantsresearch as t5 on t1.studentNIC=t5.studentNIC left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmeType as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode where t1.studentNIC<>'0000000000'order by applicationNo;";

$getSQL["data4ApplicantQualficationDetailsSelection"] = "select * from applicantseducation;";

$getSQL["data4ApplicantworkDetailsSelection"] = "select * from applicantswork;";

//******************************************************************************************

//**************19.9.2016
$getSQL["data4checkdepartmentInterview"] = "select * from degree ORDER BY degreeTitle ASC;";

if (isset($_POST['userId']) && isset($_POST['passWd'])) {
	$getSQL["getInitial"] = "select userName, passWd,userId,departmentCode,facultyCode,programmeCode,roleName,email,mobile from role, user where user.roleId=role.roleId and user.userId='" . $_POST['userId'] . "';";
}
//transactiontype
$getSQL["data4formTransactionType"] = "select distinct t1.facultyCode, t1.facultyTitle, t2.departmentCode, t2.departmentTitle, t3.degreeCode, t4.sendformuse, t4.transactionCode, t4.transactionSubCode, t4.transacDescription, t5.programmeTypeCode
	from department as t2 left join faculty as t1 on t2.facultyCode=t1.facultyCode left join degree as t3 on t2.departmentCode=t3.departmentCode left join transactiontype as t4 on t3.degreeCode=t4.degreeCode left join programmetype as t5 on t3.degreeCode=t5.programmeTypeTitle order by t1.facultyCode, t2.departmentTitle, t4.transacDescription ;";
//$getSQL["data4formtransactionDetails"]="select * from transactiontype;";
//University
$getSQL["data4ViewUniversity"] = "select * from university;";

//chamoda................................................................	
//Document
$getSQL["data4formDocument"] = "select * from document;";

//DataItem
$getSQL["data4formDataItem"] = "select * from dataitem;";

//Document Item
$getSQL["data4formDocumentItem"] = "select * from document;";
$getSQL["data4dataItems"] = "select * from dataitem;";

//decision Making Point
$getSQL["data4formDecisionMakingPoint"] = "select * from decisionmakingpoint;";

//doc decision transaction
//$getSQL["data4formDocDecisionTransaction"]="select * from document;";
$getSQL["data4decisionMakingPoint"] = "select * from decisionmakingpoint;";
//$getSQL["data4decisionMakingPointTwo"]="select * from decisionmakingpoint;";
$getSQL["data4studentlist"] = "select studentNo,studentName from student;";
//chamoda..............................................................................

//Faculty
$getSQL["data4addfaulty"] = "select * from university;";
$getSQL["data4ViewFaculty"] = "select faculty.universityCode, facultyCode, facultyTitle, universityTitle from faculty, university where faculty.universityCode = university.universityCode;";

//Department
$getSQL["data4addDepartment"] = "select t1.* , t2.universityTitle  from faculty as t1 left join university as t2 on t1.universityCode=t2.universityCode;";
$getSQL["data4ViewDepartment"] = "select t1.* , t2.facultyTitle , t3.universityTitle from department as t1 left join faculty as t2 on t1.facultyCode=t2.facultyCode left join university as t3 on t1.universityCode=t3.universityCode;";

//Degree
$getSQL["data4addDegree"] = "select t1.universityCode , t1.universityTitle , t2.facultyCode , t2.facultyTitle ,t3.departmentCode,t3.departmentTitle, t4.programmeTypeCode , t4.programmeTypeTitle from university as t1 left join faculty as t2 on t1.universityCode = t2.universityCode left join department as t3 on (t1.universityCode = t3.universityCode and t2.facultyCode=t3.facultyCode) left join programmetype as t4 on t1.universityCode = t4.universityCode;";
$getSQL["data4ViewDegree"] = "select t1.* ,t2.programmeTypeTitle , t3.universityTitle , t4.facultyTitle , t5.departmentTitle, t6.criteriaTitle  from degree as t1 left join programmetype as t2 on t1.programmeTypeCode = t2. programmeTypeCode  left join university as t3 on t1.universityCode = t3.universityCode left join faculty as t4 on t1.facultyCode= t4.facultyCode left join department as t5 on t1.departmentCode= t5.departmentCode left join criteria as t6 on t1.criteriaCode=t6.criteriaCode;";
$getSQL["data4EligibleCriteria"] = "select * from criteria;";
$getSQL["data4EligibleCriteria2"] = "select * from criteria;";
//$getSQL["data4addDegree"]="select t3.universityCode , t3.universityTitle , t2.facultyCode , t2.facultyTitle ,t1.departmentCode,t1.departmentTitle, t4.programmeTypeCode , t4.programmeTypeTitle from department as t1 left join faculty as t2 on t1.facultyCode= t2.facultyCode left join university as t3 on t1.universityCode = t3.universityCode left join programmetype as t4 on t3.universityCode = t4.universityCode ;";
//$getSQL["data4ViewDegree"]="select t1.* ,t2.programmeTypeTitle , t3.universityTitle , t4.facultyTitle , t5.departmentTitle  from degree as t1 left join programmetype as t2 on t1.programmeTypeCode = t2. programmeTypeCode  left join university as t3 on t1.universityCode = t3.universityCode left join faculty as t4 on t1.facultyCode= t4.facultyCode left join department as t5 on t1.departmentCode= t5.departmentCode;  ";

//DegreeDetails
//$getSQL["data4addDegreeDetails"] = "select DISTINCT  t1. * , t2.degreeTitle , t3.departmentTitle, t4.facultyTitle , t5.universityTitle, t6.categoryTitle , subcategoryTitle  from budget as t1 left join degree as t2 on t1.degreeCode = t2. degreeCode and t1. departmentCode = t2.departmentCode left join department as t3 on t1.departmentCode = t3.departmentCode left join faculty as t4 on t1.facultyCode=t4.facultyCode left join university as t5 on t1.universityCode=t5.universityCode left join category as t6 on t1.categoryCode =  t6.categoryCode left join subcategory as t7 on t1.subcategoryCode = t7.subcategoryCode and t6.categoryCode =  t7.categoryCode  where t6.categoryType = 'Income' ORDER BY t6.categoryCode , batchNo DESC;";

//sewwandi 2/25/2014 
$getSQL["data4addDegreeDetails"] = "select DISTINCT degreeCode , degreeTitle , IncomeSourceCode from degree";

//Hiru
$getSQL["data4ReprintCheckUser"] = "SELECT role.roleId, role.roleName, user.userId, user.userName FROM user LEFT JOIN role ON user.roleId=role.roleId;";
$getSQL["data4StudentProfileDeteilsCheckUser"] = "SELECT role.roleId, role.roleName, user.userId, user.userName FROM user LEFT JOIN role ON user.roleId=role.roleId;";


//$getSQL["data4addDegreeDetails"] = "select t1.* , t2.facultyTitle , t3.universityTitle , t4.departmentTitle from  degree as t1  left join faculty as t2 on t1.facultyCode = t2.facultyCode left join university as t3 on t1.universityCode = t3.universityCode left join department as t4 on  t1.departmentCode= t4.departmentCode and t1.facultyCode=t4.facultyCode ;";
//$getSQL["data4ViewDegreeDetails"] ="select distinct t1.*, t2.facultyTitle , t3.universityTitle , t4.departmentTitle , t5.degreeTitle from batch as t1 left join faculty as t2 on t1.facultyCode = t2.facultyCode left join university as t3 on t1.universityCode = t3.universityCode left join department as t4 on  t1.departmentCode= t4.departmentCode left join degree as t5 on  t1.degreeCode= t5.degreeCode and t1.facultyCode=t5.facultyCode;";

$getSQL["data4ViewDegreeDetails"] = "select distinct t1.*, t2.facultyTitle , t3.universityTitle , t4.departmentTitle , t5.degreeTitle , t6.categoryTitle from batch as t1 left join faculty as t2 on t1.facultyCode = t2.facultyCode left join university as t3 on t1.universityCode = t3.universityCode left join department as t4 on  t1.departmentCode= t4.departmentCode left join degree as t5 on  t1.degreeCode= t5.degreeCode and t1.facultyCode=t5.facultyCode left join category as t6 on t1.categoryCode=t6.categoryCode;";

//Criteria
$getSQL["data4ViewCriteria"] = "select * from criteria;";

//ProgrammeType
$getSQL["data4addprogrammeType"] = "select t1.* , t2.facultyTitle , t3.universityTitle from  department as t1  left join faculty as t2 on t1.facultyCode = t2.facultyCode left join university as t3 on t1.universityCode = t3.universityCode ;";
$getSQL["data4ViewProgrammeType"] = "select t1.* , t2.universityTitle  from programmetype as t1 left join university as t2 on  t1.universityCode=t2.universityCode ;";

//NewCourseUnit
$getSQL["data4ViewNewCourseUnit"] = "select * from newcourseunit;";

//CourseUnit
$getSQL["data4addCourseUnit"] = "select distinct t1.* , t2.universityTitle , t3.facultyTitle , t4.departmentTitle , t5.programmeTypeTitle  from degree as t1 left join university as t2 on t1.universityCode = t2.universityCode left join faculty as t3 on t1.facultyCode=t3.facultyCode left join department as t4 on t1.departmentCode= t4.departmentCode left join programmetype as t5 on t1.programmeTypeCode = t5.programmeTypeCode ;";
$getSQL["data4ViewCourseUnit"] = "select t1.* , t3.programmeTypeTitle , t2.degreeTitle,  t4.departmentTitle , t5.facultyTitle, t6.universityTitle , t7.courseUnitTitle from courseunit as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode left join department as t4 on t1.departmentCode= t4.departmentCode left join faculty as t5 on t1.facultyCode=t5.facultyCode left join university as t6 on t1.universityCode=t6.universityCode left join newcourseunit as t7 on t1.courseUnitCode=t7.courseUnitCode;";
$getSQL["data4getCourseUnits"] = "select * from newcourseunit;";

//User
//$getSQL["data4AddUser"] = "select distinct t1.departmentCode, t1.departmentTitle, t1.universityCode, t1.facultyCode, t2.facultyTitle, t3.universityTitle, t4.roleName ,t4.roleId from department as t1 inner join faculty as t2 on t1.universityCode=t2.universityCode and t1.facultyCode=t2.facultyCode inner join university as t3 on t1.universityCode=t3.universityCode left join role as t4 on roleId<>''ORDER BY `t1`.`departmentCode` ASC;";

$getSQL["data4AddUser"] = "SELECT t1.universityCode , t1.universityTitle ,t2.facultyCode, t2.facultyTitle ,t3.departmentCode, t3.departmentTitle ,t4.degreeCode,t4.degreeTitle  from university as t1 left join faculty as t2 on t1.universityCode=t2.universityCode left join department as t3 on t1.universityCode=t2.universityCode and t2.facultyCode=t3.facultyCode left join degree as t4 on t1.universityCode=t4.universityCode and t2.facultyCode=t4.facultyCode and t3.departmentCode = t4.departmentCode;";

$getSQL["data4AddUser2"] = "SELECT  * from role;";



//if($_POST['interface']=='data4ViewUser' && ( $_POST['role']!='Administrator'  || $_POST['role']!='Co-ordinator') ){
if ($_POST['interface'] == 'data4ViewUser') {

	//$getSQL["data4ViewUser"]="select userId, passWd, userName, user.departmentCode, departmentTitle, user.roleId,roleName,user.universityCode, user.facultyCode, facultyTitle, universityTitle from user, department, faculty, university,role where userName='".$_POST['userName']."' and user.roleId=role.roleId and user.universityCode = university.universityCode and (user.universityCode = faculty.universityCode and user.facultyCode = faculty.facultyCode) and (user.universityCode = department.universityCode and user.facultyCode = department.facultyCode and user.departmentCode = department.departmentCode);";
	//$getSQL["data4ViewUser"]="select t1.userId, t1. passWd, t1.userName, t1.departmentCode,t2.degreeTitle, t1.roleId, t3.roleName, t1.universityCode, t1.facultyCode, t4.facultyTitle from user as t1 left join degree as t2 on t1.departmentCode=t2.degreeCode left join faculty as t4 on t1.facultyCode=t4.facultyCode left join role as t3 on t1.roleId=t3.roleId where t1.userName='".$_POST['userName']."';";

	//$getSQL["data4ViewUser"]="select t1.userId, t1. passWd, t1.userName, t1.departmentCode,t2.degreeTitle, t1.roleId, t3.roleName, t1.universityCode, t1.facultyCode, t4.facultyTitle from user as t1 left join degree as t2 on t1.departmentCode=t2.degreeCode left join faculty as t4 on t1.facultyCode=t4.facultyCode left join role as t3 on t1.roleId=t3.roleId where t1.userName='Administrator';";
	$getSQL["data4ViewUser"] = "select t1.*, t2.degreeTitle,  t3.roleName, t4.facultyTitle from user as t1 left join degree as t2 on t1.departmentCode=t2.degreeCode left join faculty as t4 on t1.facultyCode=t4.facultyCode left join role as t3 on t1.roleId=t3.roleId where t1.userName='" . $_POST['userName'] . "';";
}

// if($_POST['interface']=='data4ViewUser' &&  $_POST['role']=='Administrator'){

// //$getSQL["data4ViewUser"]="select userId, passWd, userName, user.departmentCode, departmentTitle, user.universityCode, user.facultyCode, facultyTitle, universityTitle from user, department, faculty, university where user.universityCode = university.universityCode and (user.universityCode = faculty.universityCode and user.facultyCode = faculty.facultyCode) and (user.universityCode = department.universityCode and user.facultyCode = department.facultyCode and user.departmentCode = department.departmentCode);";
// $getSQL["data4ViewUser"]="select userId,passWd,userName,user.departmentCode, departmentTitle, user.roleId,roleName,user.universityCode, user.facultyCode, facultyTitle, universityTitle from user, department, faculty, university,role where user.roleId=role.roleId and user.universityCode = university.universityCode and (user.universityCode = faculty.universityCode and user.facultyCode = faculty.facultyCode) and (user.universityCode = department.universityCode and user.facultyCode = department.facultyCode and user.departmentCode = department.departmentCode) ORDER BY CASE WHEN user.userName = '".$_POST['userName']."' THEN null ELSE user.userName END DESC ;";
// // $getSQL["data4ViewUser"]="select userId,passWd,userName,user.departmentCode, departmentTitle, user.roleId,roleName,user.universityCode, user.facultyCode, facultyTitle, universityTitle from user, department, faculty, university,role where user.roleId=role.roleId and user.universityCode = university.universityCode and (user.universityCode = faculty.universityCode and user.facultyCode = faculty.facultyCode) and (user.universityCode = department.universityCode and user.facultyCode = department.facultyCode and user.departmentCode = department.departmentCode );";

// }

//SelectedStudent
$getSQL["data4addSelectedStudent"] = "select t1.* , t2.facultyTitle , t3.universityTitle from  department as t1  left join faculty as t2 on t1.facultyCode = t2.facultyCode left join university as t3 on t1.universityCode = t3.universityCode ;";
$getSQL["data4SelectedStudent"] = "select t1.degreeCode , t1. degreeTitle , t1.programmeTypeCode ,t2.programmeTypeTitle, t3.batchNo  from degree as t1 left join programmetype as t2 on t1.programmeTypeCode =  t2.programmeTypeCode left join batch as t3 on t1.degreeCode=t3.degreeCode and t1.departmentCode=t3.departmentCode;";
//$getSQL["data4ViewSelectedStudent"]="";

//without batch no //
//$getSQL["data4SelectedStudent"] = "select t1.degreeCode , t1. degreeTitle , t1.programmeTypeCode ,t2.programmeTypeTitle  from degree as t1 left join programmetype as t2 on t1.programmeTypeCode =  t2.programmeTypeCode;";

//Voucher
$getSQL["data4VoucherDetails"] = "select distinct t1.* ,t2.categoryCode,t2.rate1, t2.batchNo ,t2.academicYear,t2.calenderYear,t2.commenceDate,t2.fullpaymentDeadlineDate,t2.halfpaymentDeadlineDate ,t3.degreeTitle,t4.facultyTitle ,t5.categoryTitle,t6.budgetId ,t8.programmeTypeTitle
	from selectedstudent as t1 left join  batch as t2 on t1. degreeCode= t2.degreeCode  and t1.departmentCode=t2.departmentCode and t1.facultyCode=t2.facultyCode
	left join degree as t3 on t1.degreeCode=t3.degreeCode and  t2.degreeCode=t3.degreeCode and t2.facultyCode=t3.facultyCode left join faculty as t4 on t1.facultyCode = t4.facultyCode and t1.facultyCode= t4.facultyCode left join  category as t5 on t2.categoryCode=t5.categoryCode left join budget as t6 on  t6.rate1=t2.rate1 left join programmetype as t8 on t1.programmeTypeCode= t8.programmeTypeCode ;";

$getSQL["data4VoucherDetails2"] = "select t1.invoiceNo from studentvoucherdetails as t1 left join selectedstudent as t2 on t1.studentNIC=t2.studentNIC order by invoiceNo asc;";

$getSQL["data4VoucherId"] = "select t1.voucherId from studentvoucherdetails as t1 left join selectedstudent as t2 on t1.studentNIC=t2.studentNIC order by voucherId asc;";

//RegistrationLetter
$getSQL["data4RegistrationLetter"] = "select distinct t1.* , t2.categoryCode, t2.rate1, t2.batchNo,t2.academicYear,t2.calenderYear,t2.commenceDate,t2.fullpaymentDeadlineDate,t2.halfpaymentDeadlineDate, t3.degreeTitle,t4.facultyTitle ,t5.categoryTitle, t6.invoiceNo, t7.departmentTitle , t8.programmeTypeTitle
	from selectedstudent as t1 left join  batch as t2 on t1. degreeCode= t2.degreeCode   and t1.departmentCode=t2.departmentCode and t1.facultyCode=t2.facultyCode
	left join degree as t3 on t1.degreeCode=t3.degreeCode and  t2.degreeCode=t3.degreeCode and t2.facultyCode=t3.facultyCode left join faculty as t4 on t1.facultyCode = t4.facultyCode and t1.facultyCode= t4.facultyCode left join category as t5 on t2.categoryCode=t5.categoryCode left join studentvoucherdetails as t6 on  t1.studentNIC = t6.studentNIC  and  t2.categoryCode=t6.categoryCode left join department as t7 on t1.departmentCode = t7.departmentCode left join programmetype as t8 on t1.programmeTypeCode= t8.programmeTypeCode;";

// $getSQL["data4RegistrationLetter"]="select  t1.* , t2.categoryCode, t2.rate1, t2.batchNo,t2.academicYear,t2.calenderYear,t2.commenceDate,t2.fullpaymentDeadlineDate,t2.halfpaymentDeadlineDate, t3.degreeTitle,t4.facultyTitle ,t5.categoryTitle, t6.invoiceNo, t7.departmentTitle , t8.programmeTypeTitle
// from selectedstudent as t1 left join  batch as t2 on t1. degreeCode= t2.degreeCode   and t1.departmentCode=t2.departmentCode and t1.facultyCode=t2.facultyCode
// left join degree as t3 on t1.degreeCode=t3.degreeCode and  t2.degreeCode=t3.degreeCode and t2.facultyCode=t3.facultyCode left join faculty as t4 on t1.facultyCode = t4.facultyCode and t1.facultyCode= t4.facultyCode left join category as t5 on t2.categoryCode=t5.categoryCode left join studentvoucherdetails as t6 on  t1.studentNIC = t6.studentNIC  and  t2.categoryCode=t6.categoryCode left join department as t7 on t1.departmentCode = t7.departmentCode left join programmetype as t8 on t1.programmeTypeCode= t8.programmeTypeCode;";




//StudentPayment
//$getSQL["data4selectedStudentpay"]="select distinct t1.studentName,t1.studentNIC ,t1.studentDateofbirth ,t1.studentAge , t1.studentSex ,t1.studentPermanentAddress , t1.studentContactLand01,t1.studentContactMobile01,t1.studentContactEmail,t1.applicationNo,t1.universityCode , t1.facultyCode,t1.departmentCode,t1.programmeTypeCode,t1.degreeCode, t2.universityTitle,t3.facultyTitle,t4.departmentTitle ,t5.programmeTypeTitle,t6.degreeTitle , 
//t8.categoryCode,t8.rate1,t8.budgetId ,t8.batchNo ,t9.categoryTitle from selectedstudent as t1 left join university as t2 on t1.universityCode=t2.universityCode left join faculty as t3 on t1.facultyCode = t3.facultyCode left join department as t4 on t1.departmentCode = t4.departmentCode left join programmetype as t5 on t1.programmeTypeCode=t5.programmeTypeCode left join degree as t6 on t1.degreeCode=t6.degreeCode and t1.facultyCode= t6.facultyCode     left join studentvoucherdetails as t8 on t1.studentNIC = t8.studentNIC left join category as t9 on t8.categoryCode=t9.categoryCode  where t1.selected='selected'  and t1.degreeCode<>'' and t8.rate1<>'' order by t8.voucherId ,t8.categoryCode;";
//30/3/2015
$getSQL["data4selectedStudentpay"] = "select distinct t1.studentName,t1.studentNIC ,t1.studentDateofbirth  ,t1.studentPermanentAddress , t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,t1.applicationNo,t1.universityCode , t1.facultyCode,t1.programmeTypeCode,t1.degreeCode, t2.universityTitle,t3.facultyTitle ,t5.programmeTypeTitle,t6.degreeTitle , 
	t8.categoryCode,t8.rate1,t8.budgetId ,t8.batchNo ,t9.categoryTitle from selectedstudent as t1 left join university as t2 on t1.universityCode=t2.universityCode left join faculty as t3 on t1.facultyCode = t3.facultyCode left join programmetype as t5 on t1.programmeTypeCode=t5.programmeTypeCode left join degree as t6 on t1.degreeCode=t6.degreeCode and t1.facultyCode= t6.facultyCode     left join studentvoucherdetails as t8 on t1.studentNIC = t8.studentNIC left join category as t9 on t8.categoryCode=t9.categoryCode  where t1.selected='selected'  and t1.degreeCode<>'' and t8.rate1<>'' order by t8.voucherId ,t8.categoryCode;";



$getSQL["data4PaymentId"] = " select t1.studentPaymentId from  studentreceiptdetails as t1 left join selectedstudent as t2 on t1.studentNIC=t2.studentNIC order by studentPaymentId asc;";

//StudentRegistration
$getSQL["data4selectedStudentregister"] = "select distinct t1.studentName,t1.studentNIC ,t1.studentDateofbirth ,t1.studentAge , t1.studentSex ,t1.studentPermanentAddress , t1.studentContactLand01,t1.studentContactMobile01,t1.studentContactEmail,t1.applicationNo,t1.universityCode , t1.facultyCode,t1.departmentCode,t1.programmeTypeCode,t1.degreeCode, t2.universityTitle,t3.facultyTitle,t4.departmentTitle ,t5.programmeTypeTitle,t6.degreeTitle, t7.batchNo  from selectedstudent as t1 left join university as t2 on t1.universityCode=t2.universityCode left join faculty as t3 on t1.facultyCode = t3.facultyCode left join department as t4 on t1.departmentCode = t4.departmentCode left join programmetype as t5 on t1.programmeTypeCode=t5.programmeTypeCode left join degree as t6 on t1.degreeCode=t6.degreeCode and t1.facultyCode=t6.facultyCode left join batch as t7 on  t1.degreeCode=t7.degreeCode and t1.facultyCode=t7.facultyCode    where t1.selected='selected' ;";

//StidentCourseUnit
$getSQL["data4seeStudentDetails"] = "select distinct t1.studentNo ,t1.studentNIC,t1.studentName, t1.academicYear ,t1.degreeCode, t2.facultyTitle , t2.facultyCode , t3.departmentTitle , t3.departmentCode ,t4.programmeTypeTitle,t4.programmeTypeCode ,t5.degreeTitle from student as t1 left join faculty as t2 on t1.facultyCode= t2.facultyCode  left join department as t3 on  t1.departmentCode= t3.departmentCode and t1.facultyCode= t3.facultyCode  left join programmetype as t4 on t1.programmeTypeCode= t4.programmeTypeCode left join degree as t5 on t1.degreeCode= t5.degreeCode and t1.facultyCode=t5.facultyCode left join studentcourseunit as t7 on t1.studentNo=t7.studentNo where (t7.appointed='' or t7.appointed is null);";
$getSQL["data4StudentRequest"] = "select t1.courseUnitCode , t2.courseUnitTitle , t1.degreeCode , t1.programmeTypeCode, t1.type , t3.studentNo , t3.studentNIC,t3.studentName from courseunit as t1 left join newcourseunit as t2 on t1.courseUnitCode=t2.courseUnitCode  left join student as t3 on t1.degreeCode = t3.degreeCode;";
$getSQL["data4seeStudentDetails2"] = "select t1.studentcourseunitId from studentcourseunit as t1 left join student as t2 on t1.studentNo=t2.studentNo order by studentcourseunitId desc;";

//ExtendedDuration
$getSQL["data4studentExtendedTime"] = "select t1.*  ,t6.renewalRegistrationFee, t6.certificateFee,t6.repeatExamFee,t6.convocationFee,t6.extendedDuration ,t2.degreeTitle,t3.departmentTitle, t4.facultyTitle,t5.universityTitle  from student as t1 left join degree as t2 on t1.degreeCode= t2.degreeCode left join department as t3 on t1.departmentCode=t3.departmentCode and t2.departmentCode=t3.departmentCode left join faculty as t4 on t1.facultyCode=t4.facultyCode and t2.facultyCode=t4.facultyCode left join university as t5 on t1.universityCode=t5.universityCode left join batch as t6 on t1.degreeCode=t6.degreeCode  and t2.degreeCode=t6.degreeCode and t6.facultyCode=t1.facultyCode  where t4.facultyTitle<>'' and t1.registered='yes' and (t1.ExtendedTime='' or  t1.ExtendedTime is null) ;";
$getSQL["data4studentExtendedTime2"] = "select t1.*  ,t6.renewalRegistrationFee, t6.certificateFee,t6.repeatExamFee,t6.convocationFee,t6.extendedDuration ,t2.degreeTitle,t3.departmentTitle, t4.facultyTitle,t5.universityTitle  from student as t1 left join degree as t2 on t1.degreeCode= t2.degreeCode left join department as t3 on t1.departmentCode=t3.departmentCode and t2.departmentCode=t3.departmentCode left join faculty as t4 on t1.facultyCode=t4.facultyCode and t2.facultyCode=t4.facultyCode left join university as t5 on t1.universityCode=t5.universityCode left join batch as t6 on t1.degreeCode=t6.degreeCode  and t2.degreeCode=t6.degreeCode and t6.facultyCode=t1.facultyCode  where t4.facultyTitle<>'' and t1.registered='yes' and (t1.ExtendedTime='' or  t1.ExtendedTime is null) ;";
$getSQL["data4VoucherId2"] = "select t1.voucherId from studentvoucherdetails as t1 left join selectedstudent as t2 on t1.studentNIC=t2.studentNIC order by voucherId asc;";

//$getSQL["data4studentExtendedTime"] = "select t1.*  ,t6.categoryCode, t6.rate1,t6.extendedDuration ,t2.degreeTitle,t3.departmentTitle, t4.facultyTitle,t5.universityTitle,t7.categoryTitle  from student as t1 left join degree as t2 on t1.degreeCode= t2.degreeCode left join department as t3 on t1.departmentCode=t3.departmentCode and t2.departmentCode=t3.departmentCode left join faculty as t4 on t1.facultyCode=t4.facultyCode and t2.facultyCode=t4.facultyCode left join university as t5 on t1.universityCode=t5.universityCode left join batch as t6 on t1.degreeCode=t6.degreeCode  and t2.degreeCode=t6.degreeCode and t6.facultyCode=t1.facultyCode left join category as t7 on t6.categoryCode= t7.categoryCode where t4.facultyTitle<>'' and t1.registered='yes' and (t1.ExtendedTime='' or  t1.ExtendedTime is null) ;";
//$getSQL["data4studentExtendedTime2"] = "select t1.*  ,t6.categoryCode, t6.rate1,t6.extendedDuration ,t2.degreeTitle,t3.departmentTitle, t4.facultyTitle,t5.universityTitle,t7.categoryTitle  from student as t1 left join degree as t2 on t1.degreeCode= t2.degreeCode left join department as t3 on t1.departmentCode=t3.departmentCode and t2.departmentCode=t3.departmentCode left join faculty as t4 on t1.facultyCode=t4.facultyCode and t2.facultyCode=t4.facultyCode left join university as t5 on t1.universityCode=t5.universityCode left join batch as t6 on t1.degreeCode=t6.degreeCode  and t2.degreeCode=t6.degreeCode and t6.facultyCode=t1.facultyCode left join category as t7 on t6.categoryCode= t7.categoryCode where t4.facultyTitle<>'' and t1.registered='yes' and (t1.ExtendedTime='' or  t1.ExtendedTime is null) ;";

//ExtendedVoucher
$getSQL["data4ExtendedVoucherInvoiceNo"] = "select invoiceNo from studentvoucherdetails ORDER BY invoiceNo ASC;";

//StudentOtherPayment
$getSQL["data4studentOtherPayment"] = "select distinct  t1.studentName,t1.studentNIC ,t1.studentDateofbirth ,t1.studentAge , t1.studentSex ,t1.studentPermanentAddress , t1.studentContactLand01,t1.studentContactMobile01,t1.studentContactEmail,t1.universityCode , t1.facultyCode,t1.departmentCode,t1.programmeTypeCode,t1.degreeCode, t2.universityTitle,t3.facultyTitle,t4.departmentTitle ,t5.programmeTypeTitle,t6.degreeTitle , 
	t8.renewalRegistrationFee, t8.certificateFee,t8.repeatExamFee,t8.convocationFee from student as t1 left join university as t2 on t1.universityCode=t2.universityCode left join faculty as t3 on t1.facultyCode = t3.facultyCode left join department as t4 on t1.departmentCode = t4.departmentCode left join programmetype as t5 on t1.programmeTypeCode=t5.programmeTypeCode left join degree as t6 on t1.degreeCode=t6.degreeCode and t1.facultyCode= t6.facultyCode  left join studentreceiptdetails as t7 on t1.studentNIC  = t7. studentNIC   left join studentvoucherdetails as t8 on t1.studentNIC = t8.studentNIC where t8.renewalRegistrationFee<>'' and t8.certificateFee<>'' and t8.repeatExamFee<>'' and t8.convocationFee<>'' ;";

$getSQL["data4PaymentId2"] = " select t1.studentPaymentId from  studentreceiptdetails as t1 left join student as t2 on t1.studentNIC=t2.studentNIC order by studentPaymentId asc;";

//LecturerRegistration
$getSQL["data4addLectureRegistration"] = "select t1.* , t2.facultyTitle , t3.universityTitle from  department as t1  left join faculty as t2 on t1.facultyCode = t2.facultyCode left join university as t3 on t1.universityCode = t3.universityCode ;";

//LecturerDetails
$getSQL["data4seeLecturerDetails"] = "select t1.lecturerEmpNo, t1.lecturerNIC, t1.lecturerPersonalTitle, t1.lecturerName, t2.facultyTitle, t3.departmentTitle, t4.categoryCode, t4.subcategoryCode, t4.rate2, t4.budgetId, t4.batchNo,t5.categoryType, t6.subcategoryTitle from lecturer as t1 left join faculty as t2 on t1.facultyCode=t2.facultyCode left join department as t3 on t1.departmentCode = t3.departmentCode and t1.facultyCode= t3.facultyCode left join  budget as t4 on t1.universityCode=t4.universityCode and  t1.facultyCode=t4.facultyCode and  t1.departmentCode =t4.departmentCode left join category  as t5  on t4.categoryCode=t5.categoryCode left join subcategory as t6 on t6.subcategoryCode = t4.subcategoryCode and t6.categoryCode=t4.categoryCode  where t6.subcategoryTitle='Lecture fee' order by budgetId,batchNo asc;";
$getSQL["data4seeLecturerDetails2"] = "select t1. 	lecturercourseunitId from  lecturercourseunit as t1 left join lecturer as t2 on t1.lecturerEmpNo=t2.lecturerEmpNo order by lecturercourseunitId  desc;";
$getSQL["data4LecturerRequest"] = "select t1.*, t2. degreeTitle,t3.courseUnitTitle,t4.facultyTitle, t5.departmentTitle,t6.universityTitle  from courseunit as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode and t1.facultyCode=t2.facultyCode left join newcourseunit as t3 on t1.courseUnitCode=t3.courseUnitCode  left join faculty as t4 on t1.facultyCode=t4.facultyCode left join department as t5 on t1.departmentCode=t5.departmentCode left join university as t6 on t1.universityCode=t6.universityCode  where t1.courseunitCode<>'' ;";
//$getSQL["data4LecturerRequest"] = "select t1.*, t2. degreeTitle,t3.courseUnitTitle,t4.facultyTitle, t5.departmentTitle,t6.universityTitle  from courseunit as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode and t1.facultyCode=t2.facultyCode left join newcourseunit as t3 on t1.courseUnitCode=t3.courseUnitCode  left join faculty as t4 on t1.facultyCode=t4.facultyCode left join department as t5 on t1.departmentCode=t5.departmentCode left join university as t6 on t1.universityCode=t6.universityCode where t3.courseUnitTitle<>''  ;";


//Category
$getSQL["data4ViewNewCategory"] = "select * from category;";

//Subcategory
$getSQL["data4addSubcategory"] = "select * from category;";
$getSQL["data4ViewSubCategory"] = "select t1.* , t2.categoryTitle from subcategory as t1 left join category as t2 on t1.categoryCode=t2.categoryCode;";

//BudgetSheet
$getSQL["data4AddCategory"] = "select t1.* ,t2.subcategoryCode, t2.subcategoryTitle from category as t1 left join subcategory as t2 on t1.categoryCode=t2.categoryCode;";
$getSQL["data4Budgetsheet"] = "select t1.* ,  t2.programmeTypeTitle , t3.departmentTitle , t4.facultyTitle, t5.universityTitle  from degree as t1  left join programmetype as t2 on t1.programmeTypeCode=t2.programmeTypeCode left join department as t3 on t1.departmentCode= t3.departmentCode left join faculty as t4 on t1.facultyCode=t4.facultyCode left join university as t5 on t1.universityCode=t5.universityCode;";
$getSQL["data4budgetId"] = "select budgetId from  budget  order by  budgetId desc;";

//ReviseBudget
$getSQL["data4BudgetSheetData"] = "select t1.degreeCode ,t1.programmeTypeCode ,t1.departmentCode ,t1.facultyCode , t1.universityCode , t1.academicYear, t4.degreeTitle ,t6.programmeTypeTitle, t5.departmentTitle , t7.facultyTitle , t8.universityTitle from budget as t1 left join degree as t4 on t1.degreeCode=t4.degreeCode left join department as t5 on t1.departmentCode = t5.departmentCode and t4.departmentCode = t5.departmentCode left join programmetype as t6 on t1.programmeTypeCode = t6.programmeTypeCode and t4.programmeTypeCode =  t6.programmeTypeCode left join faculty as t7 on t1.facultyCode = t7.facultyCode and t4.facultyCode = t7.facultyCode left join university as t8 on t1.universityCode = t8.universityCode and t4.universityCode = t8.universityCode;";
$getSQL["data4AddCategory1"] = "select t1.* , t2.subcategoryTitle ,t3.categoryTitle, t3.categoryType from budget as t1 left join subcategory as t2 on t1.categoryCode = t2.categoryCode left join category as t3 on t1.categoryCode = t3.categoryCode;";

//$getSQL["data4AddCategory1"]="select t1.* , t2.subcategoryTitle ,t3.categoryTitle, t3.categoryType, t4.degreeTitle ,t6.programmeTypeTitle, t5.departmentTitle , t7.facultyTitle , t8.universityTitle from budget as t1 left join subcategory as t2 on t1.categoryCode = t2.categoryCode left join category as t3 on t1.categoryCode = t3.categoryCode left join degree as t4 on t1.degreeCode=t4.degreeCode left join department as t5 on t1.departmentCode = t5.departmentCode and t4.departmentCode = t5.departmentCode left join programmetype as t6 on t1.programmeTypeCode = t6.programmeTypeCode and t4.programmeTypeCode =  t6.programmeTypeCode left join faculty as t7 on t1.facultyCode = t7.facultyCode and t4.facultyCode = t7.facultyCode left join university as t8 on t1.universityCode = t8.universityCode and t4.universityCode = t8.universityCode;";

//Reports
$getSQL["data4ViewStudentPayment"] = "select t1.* , t2.degreeTitle, t3.programmeTypeTitle, t4.departmentTitle, t5.facultyTitle , t6.universityTitle from studentreceiptdetails as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode and t1.facultyCode=t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode left join department as t4 on t1.departmentCode=t4.departmentCode left join faculty as t5 on t1.facultyCode = t5.facultyCode left join university as t6 on t1.universityCode=t6.universityCode;";
$getSQL["data4viewstudentPayment2"] = "select t2.degreeTitle, t3.programmeTypeTitle , t4.departmentTitle , t5.facultyTitle, t6.universityTitle from studentreceiptdetails as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode left join department as t4 on t1.departmentCode= t4.departmentCode left join faculty as t5 on t1.facultyCode=t5.facultyCode left join university as t6 on t1.universityCode=t6.universityCode;";
$getSQL["data4ViewFirstInstallementStudent"] = " select t1.* , t2.degreeTitle, t3.programmeTypeTitle, t4.departmentTitle, t5.facultyTitle , t6.universityTitle from studentreceiptdetails as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode and t1.facultyCode=t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode left join department as t4 on t1.departmentCode=t4.departmentCode left join faculty as t5 on t1.facultyCode = t5.facultyCode left join university as t6 on t1.universityCode=t6.universityCode where t1.instalmentType='first';";
$getSQL["data4registeredStudentList"] = "select distinct t1.* , t2.degreeTitle, t3.programmeTypeTitle, t4.departmentTitle, t5.facultyTitle , t6.universityTitle from student as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode and t1.facultyCode=t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode left join department as t4 on t1.departmentCode=t4.departmentCode left join faculty as t5 on t1.facultyCode = t5.facultyCode left join university as t6 on t1.universityCode=t6.universityCode where t1.registered='yes';";
$getSQL["data4formPaymentList"] = "select t1.*, t2.degreeTitle, t3.departmentTitle, t4.facultyTitle  from studentreceiptdetails as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode and t1.facultyCode=t2.facultyCode left join department as t3 on t1.departmentCode=t3.departmentCode left join faculty as t4 on t1.facultyCode = t4.facultyCode where t1.paymentMethod='full' or 'half';";

//EligibleTest
//$getSQL["data4EligibleTest"] = "select distinct t1.* , t2.criteriaTitle, t3.programmeTypeTitle from degree as t1 left join criteria as t2 on t1.criteriaCode=t2.criteriaCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode;";


$getSQL["data4EligibleTest"] = "select distinct t1.* , t2.criteriaTitle, t3.programmeTypeTitle, t4.facultyTitle ,t5.departmentTitle from degree as t1 left join criteria as t2 on t1.criteriaCode=t2.criteriaCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode left join faculty as t4 on t1.facultyCode=t4.facultyCode left join department as t5 on t1.departmentCode=t5.departmentCode;";


if ($_POST['interface'] == 'data4StudentpaymentView') {

	$getSQL["data4StudentpaymentView"] = "SELECT t1.*,t2.IncomeCategoryTitle AS PayTitile FROM StudentPayment as t1 left join IncomeCategory as t2 on t1.Pay_CategoryCode=t2.IncomeCategoryCode where t1.Pay_studentNo = '" . $_POST['studentNo'] . "' ORDER BY t1.Pay_Time_Stamp ASC;";
}


//ApplicationForm 
//$getSQL["data4ApplicationForm"] = "select t1.degreeCode , t1. degreeTitle , t1.programmeTypeCode ,t2.programmeTypeTitle, t3.batchNo  from degree as t1 left join programmetype as t2 on t1.programmeTypeCode =  t2.programmeTypeCode left join batch as t3 on t1.degreeCode=t3.degreeCode and t1.departmentCode=t3.departmentCode;";

$getSQL["data4ApplicationForm"] = "select distinct t1.degreeCode , t1. degreeTitle , t1.programmeTypeCode,t1.facultyCode,t1.departmentCode ,t2.programmeTypeTitle, t3.batchNo, t4.facultyTitle ,t5.departmentTitle from degree as t1 left join programmetype as t2 on t1.programmeTypeCode =  t2.programmeTypeCode left join batch as t3 on t1.degreeCode=t3.degreeCode and t1.departmentCode=t3.departmentCode left join faculty as t4 on t1.facultyCode=t4.facultyCode left join department as t5 on t1.departmentCode=t5.departmentCode;";


$getSQL["data4EditApplicationForm"] = "select * from applicantspersonal;";
$getSQL["data4ApplicationNo"] = "SELECT max(applicationNo) as maxapplicationNo  FROM applicantspersonal;";
$getSQL["data4ApplicationFormTwo"] = "select * from applicantspersonal;"; //NextButton

//ApplicationFormTwo
$getSQL["data4EditApplicationFormTwo"] = "select t1.* from applicantseducation  as t1 left join applicantspersonal as t2 on t1.studentNIC=t2.studentNIC;";
$getSQL["data4ApplicationFormThree"] = "select t1.* from applicantspersonal as t1 left join applicantseducation as t2 on t1.studentNIC=t2.studentNIC;"; //NextButton

//ApplicationFormThree
$getSQL["data4EditApplicationFormThree"] = "select t1.* from applicantswork as t1 left join applicantseducation as t2 on t1.studentNIC=t2.studentNIC left join applicantspersonal as t3 on t1.studentNIC=t3.studentNIC;";
$getSQL["data4ApplicationFormFourth"] = "select t1.* from applicantspersonal as t1 left join applicantseducation as t2 on t1.studentNIC=t2.studentNIC left join applicantswork as t3 on t1.studentNIC=t3.studentNIC;"; //NextButton

//ApplicationFormFourth
$getSQL["data4EditApplicationFormFourth"] = "select t1.* from applicantsother as t1 left join  applicantswork as t2 on  t1.studentNIC=t2.studentNIC  left join applicantseducation as t3 on t1.studentNIC=t3.studentNIC left join applicantspersonal as t4 on t1.studentNIC=t4.studentNIC;";
$getSQL["data4ApplicationFormFive"] = "select t1.* from applicantspersonal as t1 left join applicantseducation as t2 on t1.studentNIC=t2.studentNIC left join applicantswork as t3 on t1.studentNIC=t3.studentNIC left join applicantsother as t4 on t1.studentNIC=t4.studentNIC;"; //NextButton

//ApplicationFormFive 
$getSQL["data4EditApplicationFormFive"] = "select t1.* from applicantsresearch as t1 left join  applicantsother as t2 on  t1.studentNIC=t2.studentNIC  left join applicantswork as t3 on t1.studentNIC=t3.studentNIC left join applicantseducation as t4 on t1.studentNIC=t4.studentNIC left join applicantspersonal as t5 on t1.studentNIC=t5.studentNIC;";

//FinalApplication	
$getSQL["data4FinalApplication"] = "select t1.studentNIC,t1.applicationNo,t1.programmeTypeCode,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentDateofbirth,t1.studentNationality,
	t1.studentCitizenship,t1.studentEmployment,t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,
	t2.bachelorDegree,t2.bachelorDegreeTitle,t2.bachelorDegreeobtainUniversity,t2.bachelorDegreegraduationYear,t2.bachelorDegreegraduationMonth,
	t2.higherDegree,t2.higherDegreeTitle,t2.higherDegreeobtainUniversity,t2.higherDegreegraduationYear,t2.higherDegreegraduationMonth,
	t2.qualificationOne,t2.qualificationAwardingAuthorityOne,t2.qualificationAwardingYearOne,t2.qualificationTwo,t2.qulificationAwardingAuthorityTwo,t2.qulificationAwardingYearTwo,
	t3.companyOne,t3.designationOne,t3.fromOne,t3.toOne,t3.companyTwo,t3.designationTwo,t3.fromTwo,t3.toTwo,t3.companyThree,t3.designationThree,t3.fromThree,
	t3.toThree,t3.refreeNameOne,t3.refreeAddressOne,t3.refreeDesignationOne,t3.refreeNameTwo,t3.refreeAddressTwo,t3.refreeDesignationTwo,
	t4.registrationSougth,t4.mainSubject,t4.fieldOfSpecialization,t4.researchMedium,t4.researchTitle,t4.grantForProject,t4.grantDetails,t4.financedDetails,t4.registeredOtherDegree,
	t5.applicantName,t5.applicantInstitution,t5.applicantAddress,t5.applicantResearchTitle from applicantspersonal as t1 left join applicantseducation as t2 on t1.studentNIC=t2.studentNIC left join applicantswork as t3 on t1.studentNIC=t3.studentNIC left join applicantsother as t4 on t1.studentNIC=t4.studentNIC
	left join applicantsresearch as t5 on t1.studentNIC=t5.studentNIC;";

//ExportData
$getSQL["data4ExportCSV"] = "select t1.studentNIC,t1.applicationNo,t1.programmeTypeCode,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentDateofbirth,t1.studentNationality,
	t1.studentCitizenship,t1.studentEmployment,t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,
	t2.bachelorDegree,t2.bachelorDegreeTitle,t2.bachelorDegreeobtainUniversity,t2.bachelorDegreegraduationYear,t2.bachelorDegreegraduationMonth,
	t2.higherDegree,t2.higherDegreeTitle,t2.higherDegreeobtainUniversity,t2.higherDegreegraduationYear,t2.higherDegreegraduationMonth,
	t2.qualificationOne,t2.qualificationAwardingAuthorityOne,t2.qualificationAwardingYearOne,t2.qualificationTwo,t2.qulificationAwardingAuthorityTwo,t2.qulificationAwardingYearTwo,
	t3.companyOne,t3.designationOne,t3.fromOne,t3.toOne,t3.companyTwo,t3.designationTwo,t3.fromTwo,t3.toTwo,t3.companyThree,t3.designationThree,t3.fromThree,
	t3.toThree,t3.refreeNameOne,t3.refreeAddressOne,t3.refreeDesignationOne,t3.refreeNameTwo,t3.refreeAddressTwo,t3.refreeDesignationTwo,
	t4.registrationSougth,t4.mainSubject,t4.fieldOfSpecialization,t4.researchMedium,t4.researchTitle,t4.grantForProject,t4.grantDetails,t4.financedDetails,t4.registeredOtherDegree,
	t5.applicantName,t5.applicantInstitution,t5.applicantAddress,t5.applicantResearchTitle from applicantspersonal as t1 left join applicantseducation as t2 on t1.studentNIC=t2.studentNIC left join applicantswork as t3 on t1.studentNIC=t3.studentNIC left join applicantsother as t4 on t1.studentNIC=t4.studentNIC
	left join applicantsresearch as t5 on t1.studentNIC=t5.studentNIC order by  t1.applicationNo,t1.studentInitial lock in share mode;";



//PrintApplication
$getSQL["data4printFinalApplication"] = "select t1.studentNIC,t1.applicationNo,t1.programmeTypeCode,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentDateofbirth,t1.studentNationality,
	t1.studentCitizenship,t1.studentEmployment,t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,
	t2.bachelorDegree,t2.bachelorDegreeTitle,t2.bachelorDegreeobtainUniversity,t2.bachelorDegreegraduationYear,t2.bachelorDegreegraduationMonth,
	t2.higherDegree,t2.higherDegreeTitle,t2.higherDegreeobtainUniversity,t2.higherDegreegraduationYear,t2.higherDegreegraduationMonth,
	t2.qualificationOne,t2.qualificationAwardingAuthorityOne,t2.qualificationAwardingYearOne,t2.qualificationTwo,t2.qulificationAwardingAuthorityTwo,t2.qulificationAwardingYearTwo,
	t3.companyOne,t3.designationOne,t3.fromOne,t3.toOne,t3.companyTwo,t3.designationTwo,t3.fromTwo,t3.toTwo,t3.companyThree,t3.designationThree,t3.fromThree,
	t3.toThree,t3.refreeNameOne,t3.refreeAddressOne,t3.refreeDesignationOne,t3.refreeNameTwo,t3.refreeAddressTwo,t3.refreeDesignationTwo,
	t4.registrationSougth,t4.mainSubject,t4.fieldOfSpecialization,t4.researchMedium,t4.researchTitle,t4.grantForProject,t4.grantDetails,t4.financedDetails,t4.registeredOtherDegree,
	t5.applicantName,t5.applicantInstitution,t5.applicantAddress,t5.applicantResearchTitle from applicantspersonal as t1 left join applicantseducation as t2 on t1.studentNIC=t2.studentNIC left join applicantswork as t3 on t1.studentNIC=t3.studentNIC left join applicantsother as t4 on t1.studentNIC=t4.studentNIC
	left join applicantsresearch as t5 on t1.studentNIC=t5.studentNIC;";




//EventManagment
$getSQL["data4event"] = "select degreeCode , degreeTitle from degree;";

$getSQL["data4event2"] = "select * from category;";

$getSQL["data4viewEvent"] = "select distinct  t1.* , t2.degreeTitle, t3.categoryTitle from event as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join category as t3 on t1.categoryCode=t3.categoryCode;";


//StudentProfile________________________________________________________
//$getSQL["data4StudentProfileDetails"]="select distinct t1.universityCode, t1.studentNo ,t1.studentNIC,t1.studentName  ,t1.studentPermanentAddress, t1.studentContactLan, t1.studentContactMobile , t1.studentContactEmail,t1.degreeCode,t2.facultyTitle , t2.facultyCode  ,t4.programmeTypeTitle,t4.programmeTypeCode ,t5.degreeTitle ,t6.studentEmployment ,t6.studentInitial ,t6.applicationNo , t7.fieldName,t7.value from student as t1 left join faculty as t2 on t1.facultyCode= t2.facultyCode    left join programmetype as t4 on t1.programmeTypeCode= t4.programmeTypeCode left join degree as t5 on t1.degreeCode= t5.degreeCode left join applicantspersonal as t6 on t1.studentNIC=t6.studentNIC left join applicantseducation as t7 on t1.studentNIC =t7.studentNIC and t6.applicationNo=t7.applicationNo ;";

if ($_POST['interface'] == 'data4DisplayStudentNoforProfile') {
	$getSQL["data4DisplayStudentNoforProfile"] = "select distinct studentNo AS profile_StudNo , applicationNo AS profile_ApplicationNo from student where applicationNo= '" . $_POST['studentNo'] . "' and student.registered='yes'  ORDER BY studentNo ASC;";
}


$getSQL["data4StudentProfileTransferStudent"] = "SELECT distinct studentNo AS tran_studentNo, achedamicYear AS tran_achedamicYear, medium AS tran_medium, degreeCode AS tran_degreeCode FROM student ORDER BY studentNo ASC;";
$getSQL["data4StudentProfileBulkTransterStudent"] = "SELECT distinct studentNo AS tran_studentNo, achedamicYear AS tran_achedamicYear, medium AS tran_medium, degreeCode AS tran_degreeCode FROM student ORDER BY studentNo ASC;";

//$getSQL["data4StudentProfileDetails"]="select distinct t1.universityCode, t1.studentNo ,t1.studentNIC,t1.studentName,t1.studentPersonalTitle,t1.studentNationality,t1.correspondence,t1.studentCitizenship,t1.studentOfficeAddress,t1.studentDateofbirth,t1.achedamicYear,t1.medium ,t1.studentPermanentAddress, t1.studentContactLan, t1.studentContactMobile , t1.studentContactEmail,t1.degreeCode,t2.facultyTitle , t2.facultyCode  ,t4.programmeTypeTitle,t4.programmeTypeCode ,t5.degreeTitle,t6.studentEmployment ,t6.studentInitial,t1.applicationNo from student as t1 left join faculty as t2 on t1.facultyCode= t2.facultyCode    left join programmetype as t4 on t1.programmeTypeCode= t4.programmeTypeCode left join degree as t5 on t1.degreeCode= t5.degreeCode left join applicantspersonal as t6 on t1.studentNIC=t6.studentNIC ORDER BY `t1`.`studentNo` ASC ;";
if ($_POST['interface'] == 'data4StudentProfileDetails') {
	$getSQL["data4StudentProfileDetails"] = "select distinct t1.universityCode, t1.studentNo ,t1.studentNIC, t1.studentName,t1.studentInitial, t1.studentPersonalTitle, t1.studentNationality, t1.correspondence, t1.studentCitizenship, t1.studentOfficeAddress, t1.studentDateofbirth, t1.achedamicYear, t1.medium, t1.studentPermanentAddress, t1.studentContactLan, t1.studentContactMobile,  t1.studentContactEmail, t1.degreeCode, t1.LibraryIdCode, t2.facultyTitle, t2.facultyCode , t4.programmeTypeTitle, t4.programmeTypeCode, t5.degreeTitle, t6.studentEmployment , t6.studentInitial,t1.applicationNo 
											from student as t1 
											left join faculty as t2 on t1.facultyCode= t2.facultyCode 
											left join programmetype as t4 on t1.programmeTypeCode = t4.programmeTypeCode 
											left join degree as t5 on t1.degreeCode = t5.degreeCode 
											left join applicantspersonal as t6 on t1.applicationNo = t6.applicationNo 
											 WHERE t1.studentNo = '" . $_POST['studentNo'] . "'
											ORDER BY t1.studentNo ASC;";

	//$getSQL["data4StudentProfileDetails"] = "select * from noteandnotification  where studentNo= '".$_POST['studentNo']."';";
}
//$getSQL["data4StudentProfileDocument"]="select distinct t1.docmentID,t1.dataItemID,t1.sequenceNo ,t1.itemValue,t2.documentName,t3.dataItemName,t4.date ,t4.decision ,t4.number,t5.decisionMakingPointName from documentdata as t1 left join document as t2 on t1.docmentID=t2.documentID left join dataitem as t3 on t1.dataItemID=t3.dataItemID left join docdecisiontransaction as t4 on t1.docmentId=t4.documentId left join decisionmakingpoint as t5 on t4.decisionMakingPointID =t5.decisionMakingPointID where t5.decisionMakingPointName!='null';";
$getSQL["data4paymentBatch"] = "select degreeCode as degcd1, academicYear as degacy1 ,courseFee as degcrs1, libraryFee as deglibf1 from batch;";

//------------------------ADD NEW----------------------------------------
if ($_POST['interface'] == 'data4profilerefreeDetails') {
	$getSQL["data4profilerefreeDetails"] = "select workFieldName, workValue, workPin from applicantswork  where applicationNo= '" . $_POST['applicationNo'] . "';";
	// echo $getSQL["data4profilerefreeDetails"];
}

// if($_POST['interface']=='data4profilExamResults'){
// $getSQL["data4profilExamResults"] = "select * from examresults  where SudentNo= '".$_POST['studentNo']."';";
// }
/*if($_POST['interface']=='data4profilExamResults'){
$getSQL["data4profilExamResults"] = "SELECT r.subjectName, s.subjectTitle, r.Grade, s.credits, 
CASE 	WHEN r.Grade = 'A+' THEN '4.00'
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
        WHEN r.Grade = 'E+' THEN '0.00' END AS GPA
FROM examresults r, subject s
WHERE r.subjectName = s.subjectCode AND r.SudentNo = '".$_POST['studentNo']."';";
}*/

// if($_POST['interface']=='data4profilExamResults'){
// $getSQL["data4profilExamResults"] = "SELECT r.subjectName, s.subjectTitle, s.subjectSemester, r.Grade, s.credits, 
// CASE 	WHEN r.Grade = 'A+' THEN '4.00'
// WHEN r.Grade = 'A' THEN '4.00'
// WHEN r.Grade = 'A-' THEN '3.70'
// WHEN r.Grade = 'B+' THEN '3.30'
// WHEN r.Grade = 'B' THEN '3.00'
// WHEN r.Grade = 'B-' THEN '2.70'
// WHEN r.Grade = 'C+' THEN '2.30'
// WHEN r.Grade = 'C' THEN '2.00'
// WHEN r.Grade = 'C-' THEN '1.70'
// WHEN r.Grade = 'D+' THEN '1.30'
// WHEN r.Grade = 'D' THEN '1.00'
// WHEN r.Grade = 'E' THEN '0.00' 
// WHEN r.Grade = '-' THEN '0.00'END AS GPA
// FROM examresults r, subject s
// WHERE r.subjectName = s.subjectCode AND r.degreeCode = s.degreeCode AND r.achedamicYear = s.academicYear AND r.SudentNo = '".$_POST['studentNo']."'
// ORDER BY s.subjectSemester, r.subjectName;";
// }



//--------------------------------------------First time results----------------------------------------------		



$interfaceTbls["data4profilExamResults"] = array("examresults");
$nextClientInterface["data4profilExamResults"] = "formStudentProfileDeteils";

if ($_POST['interface'] == 'data4profilExamResults') {
	$getSQL["data4profilExamResults"] = "SELECT r.subjectName, s.subjectTitle, s.subjectSemester, r.Grade  ,s.credits
									FROM examresults r, (select * from subject where academicYear= (select achedamicYear from student where student.studentNo = '" . $_POST['studentNo'] . "' Limit 1)) s
									WHERE r.subjectName = s.subjectCode AND r.degreeCode = s.degreeCode AND r.achedamicYear = s.academicYear AND r.SudentNo = '" . $_POST['studentNo'] . "' AND r.Status='0'
									ORDER BY s.subjectSemester, r.subjectName;"; //  
}

$interfaceTbls["data4profilExamResit"] = array("final_result_criteria");
$nextClientInterface["data4profilExamResit"] = "formStudentProfileDeteils";
if ($_POST['interface'] == 'data4profilExamResit') {
	$getSQL["data4profilExamResit"] = "SELECT DISTINCT cr_resit , cr_year ,cr_finalResult, cr_description FROM final_result_criteria WHERE  cr_degreeCode = '" . $_POST['degreeCode'] . "' and cr_year = '" . $_POST['academicYear'] . "' ;";
	// echo $getSQL["data4profilExamResit"];
}

$interfaceTbls["data4profilExamCriteria"] = array("final_result_criteria");
$nextClientInterface["data4profilExamCriteria"] = "formStudentProfileDeteils";
if ($_POST['interface'] == 'data4profilExamCriteria') {
	$getSQL["data4profilExamCriteria"] = "SELECT cr_finalResult, cr_description  FROM final_result_criteria WHERE  cr_degreeCode = '" . $_POST['degreeCode'] . "'  and cr_year = '" . $_POST['academicYear'] . "' ;;";
}


$interfaceTbls["data4ReRepeatSubjectSelection"] = array("ReRepeatSelection");
$nextClientInterface["data4ReRepeatSubjectSelection"] = "formStudentProfileDeteils";
if ($_POST['interface'] == 'data4ReRepeatSubjectSelection') {
	$getSQL["data4ReRepeatSubjectSelection"] = "SELECT rr.ReRep_subjectCode, s.subjectTitle as rerepSubTitle, rr.ReRep_achedamicYear, s.subjectSemester, rr.ReRep_attempt
	FROM ReRepeatSelection rr, subject s
	WHERE rr.ReRep_subjectCode = s.subjectCode AND rr.ReRep_studentNo = '" . $_POST['studentNo'] . "' and rr.ReRep_degreeCode=s.degreeCode and rr.ReRep_achedamicYear = s.academicYear
	ORDER BY s.subjectSemester, s.subjectCode;";
}

$interfaceTbls["data4profilReRepeatExamResults"] = array("ReRepeat_examresults");
$nextClientInterface["data4profilReRepeatExamResults"] = "formStudentProfileDeteils";

if ($_POST['interface'] == 'data4profilReRepeatExamResults') {
	$getSQL["data4profilReRepeatExamResults"] = "SELECT DISTINCT r.ReRep_subjectName, s.subjectTitle as rereptitle, s.subjectSemester as rerepsem, r.ReRep_Grade  
									FROM ReRepeat_examresults r, subject s
									WHERE r.ReRep_subjectName = s.subjectCode AND
									r.ReRep_degreeCode = s.degreeCode AND 
									r.ReRep_achedamicYear = s.academicYear AND
									r.ReRep_SudentNo = '" . $_POST['studentNo'] . "' AND 
									r.ReRep_Status='0'
									ORDER BY s.subjectSemester, r.ReRep_subjectName;";
}


$interfaceTbls["data4profilExamFinalResults"] = array("student_final_result");
$nextClientInterface["data4profilExamFinalResults"] = "formStudentProfileDeteils";
if ($_POST['interface'] == 'data4profilExamFinalResults') {
	$getSQL["data4profilExamFinalResults"] = "SELECT semester AS final_semester, finalGPA, finalResult FROM student_final_result WHERE  studentNo = '" . $_POST['studentNo'] . "';";
}

//---------------------------------------------------------------------------------------------------------------
//--------------------------------------------Repeat results----------------------------------------------		

$interfaceTbls["data4profilRepExamResit"] = array("final_result_criteria");
$nextClientInterface["data4profilRepExamResit"] = "formStudentProfileDeteils";


if ($_POST['interface'] == 'data4profilRepExamResit') {
	$getSQL["data4profilRepExamResit"] = "SELECT DISTINCT cr_resit as rep_resit , cr_year as rep_year FROM final_result_criteria WHERE  cr_degreeCode = '" . $_POST['degreeCode'] . "' and cr_year = '" . $_POST['academicYear'] . "' ;";
}

$interfaceTbls["data4profilRepExamCriteria"] = array("final_result_criteria");
$nextClientInterface["data4profilRepExamCriteria"] = "formStudentProfileDeteils";

if ($_POST['interface'] == 'data4profilRepExamCriteria') {
	$getSQL["data4profilRepExamCriteria"] = "SELECT cr_finalResult as rep_cr_finalResult, cr_description as rep_cr_description  FROM final_result_criteria WHERE  cr_degreeCode = '" . $_POST['degreeCode'] . "';";
}


$interfaceTbls["data4profilRepExamFinalResults"] = array("student_final_result");
$nextClientInterface["data4profilRepExamFinalResults"] = "formStudentProfileDeteils";

if ($_POST['interface'] == 'data4profilRepExamFinalResults') {
	$getSQL["data4profilRepExamFinalResults"] = "SELECT semester AS rep_final_semester, finalGPA as rep_finalGPA, finalResult as rep_finalResult FROM student_final_result WHERE  studentNo = '" . $_POST['studentNo'] . "';";
}

$interfaceTbls["data4profilRepeatExamResults"] = array("rep_examresults", "subject");

$nextClientInterface["data4profilRepeatExamResults"] = "formStudentProfileDeteils";

if ($_POST['interface'] == 'data4profilRepeatExamResults') {

	$getSQL["data4profilRepeatExamResults"] = " SELECT distinct r.rep_subjectName, r.rep_Grade, r.rep_Status,s.subjectTitle, s.subjectSemester
												FROM rep_examresults r, subject s, studentRepeatSelection p
												WHERE r.rep_subjectName = s.subjectCode 
												AND r.rep_subjectName = p.subjectCode
												AND r.rep_degreeCode = s.degreeCode 
												AND r.rep_degreeCode = p.degreeCode 
												AND r.rep_achedamicYear = s.academicYear 
												AND r.rep_achedamicYear = p.achedamicYear
												AND s.subjectSemester = p.semester
												AND r.rep_SudentNo='" . $_POST['studentNo'] . "' 
												AND r.rep_Status='0'
												ORDER BY s.subjectSemester, r.rep_subjectName;";
}



//---------------------------------------------------------------------------------------------------
















//---------------------------------END---------------------------------------- 


if ($_POST['interface'] == 'data4StudentProfileDocument') {
	$getSQL["data4StudentProfileDocument"] = "Select t1.documentID,t1.decisionMakingPointID,t1.sessionID,t1.sequenceNo,t1.number,t1.date,t1.decision,t1.remarks,t2.documentName,t3.decisionMakingPointName from docdecisiontransaction as t1 left join document as t2 on t1.documentID= t2.documentID left join decisionmakingpoint as t3 on t1.decisionMakingPointID=t3.decisionMakingPointID where (t1.sessionID,t1.sequenceNo,t1.documentID) = ANY (SELECT sessionID,sequenceNo,docmentID FROM documentdata WHERE itemValue='" . $_POST['itemValue'] . "') order by t1.documentID DESC,t1.sequenceNo DESC,t1.date DESC ;";
}
if ($_POST['interface'] == 'data4profileDocument') {
	$getSQL["data4profileDocument"] = "SELECT t1.*,t2.dataItemName,t3.documentName FROM documentdata as t1 left join dataitem as t2 on t1.dataItemID= t2.dataItemID left join document as t3 on t1.docmentID=t3.documentID WHERE sessionID = any(SELECT sessionID FROM documentdata WHERE itemValue='" . $_POST['itemValue'] . "') and sequenceNo= any(SELECT sequenceNo FROM documentdata WHERE itemValue='" . $_POST['itemValue'] . "') ORDER BY t1.docmentID ASC,t1.sequenceNo ASC ;";
}
if ($_POST['interface'] == 'data4profileEducationalDetails') {
	$getSQL["data4profileEducationalDetails"] = "select educationFieldName, educationValue, educationPin from applicantseducation  where applicationNo= '" . $_POST['applicationNo'] . "';";
}

if ($_POST['interface'] == 'data4profileNote') {
	$getSQL["data4profileNote"] = "select * from noteandnotification  where studentNo= '" . $_POST['studentNo'] . "';";
}

$getSQL["data4TransferProfile"] = "select t1.transferID,t1.applicationNo,t1.studentNo,t1.oldStudentNo as soldStudentNo,t1.transferType,t1.notes,t1.transferDate,t1.transferReqDate,t1.bosDate,t1.bosNumber,t1.fgsDate,t1.fgsNumber, t2.ruleID, t3.ruleTitle from studenttransfer as t1 left join studentruls as t2 on t1.transferID=t2.transferID left join transferrules as t3 on t2.ruleID= t3.ruleID ORDER BY t1.transferID ASC ;";

if ($_POST['interface'] == 'data4paymentProfile') {
	$getSQL["data4paymentProfile"] = "select * from coursefeepayments  where studentNo= '" . $_POST['studentNo'] . "' ORDER BY feeCat ASC;";
}

if ($_POST['interface'] == 'data4DisplayNotes') {
	$getSQL["data4DisplayNotes"] = "SELECT t1.*,t2.userName FROM `notes` as t1 left join user as t2 on t1.userId= t2.userId where t1.referenceNo= '" . $_POST['studentNo'] . "' or t1.referenceNo= '" . $_POST['applicationNo'] . "'ORDER BY t1.messageId DESC;";
}
if ($_POST['interface'] == 'data4DisplayApplicatProfile') {
	$getSQL["data4DisplayApplicatProfile"] = "SELECT applicationNo as stdProfileapplicationNo FROM applicantspersonal where applicationNo= '" . $_POST['applicationNo'] . "';";
}
$getSQL["data4LoadApplicantView"] = "select 'load view' as view";

if ($_POST['interface'] == 'data4GetReleventApplicant') {
	$getSQL["data4GetReleventApplicant"] = "SELECT t1.*, t2.degreeTitle FROM applicantspersonal as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode where applicationNo= '" . $_POST['applicationNo'] . "';";
}
$getSQL["data4CommenceDate"] = "SELECT distinct t1.degreeCode,t2.degreeTitle,t2.duration,t1.coursecommence,t1.academicYear FROM `batch` as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode ;";
$getSQL["data4BulkTransterStudentCommenceData"] = "SELECT distinct t1.degreeCode,t2.degreeTitle,t2.duration,t1.coursecommence,t1.academicYear FROM `batch` as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode ;";


/*()if($_POST['interface']=='data4profilStudentList'){
	$getSQL["data4profilStudentList"]="select t1.*,t2.documentName from documentdata as t1 left join document as t2 on t1.docmentID= t2.documentID where t1.dataItemID='1'and t2.documentName like '%List%' and t1.sessionID= any(SELECT sessionID FROM `documentdata` WHERE itemValue='".$_POST['itemValue']."' or itemValue='".$_POST['itemValue1']."')OR t1.dataItemID='2' and t1.sessionID= any(SELECT sessionID FROM `documentdata` WHERE itemValue='".$_POST['itemValue']."' or itemValue='".$_POST['itemValue1']."') ORDER BY t1.`sessionID` ASC  ;";
    }*/

// if($_POST['interface']=='data4StudentProfileDocument'){	
// $getSQL["data4StudentProfileDocument"]="select t1.docmentID,t1.dataItemID,t1.sequenceNo ,t1.itemValue,
// t2.documentName,t3.dataItemName from documentdata as t1 left join document
// as t2 on t1.docmentID=t2.documentID left join dataitem as t3 on t1.dataItemID=t3.dataItemID 
// where t1.dataItemID='3' and t1.itemValue='FGS/MBA/2015/002';";
// }

// if($_POST['interface']=='data4StudentProfileDocument'){
// $getSQL["data4StudentProfileDocument"]="select * from documentData  as t1 inner join documentData where documentData.sequenceNo = t1.sequenceNo and t1.dataItemID='3' and t1.itemValue='FGS/MBA/2015/002';";
//_______________________________________________________________________________________________________________

//ApplicantList & Profile

//.......................................................
//$getSQL["data4ApplicantList"]="select distinct t1.*,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle from applicantspersonal as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmetype as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode  where (t1.selected is null  or t1.selected='')order by (t1.temporaryNo);";
$fromYear = date('Y') - 5;

if ($_POST["interface"] == "data4ApplicantList") {
	$getSQL["data4ApplicantList"] = "SELECT DISTINCT
	t1.universityCode,
    t1.facultyCode,
    t1.programmeTypeCode,
    t1.degreeCode as sdegreeCode,
    t1.studentNIC,
    t1.applicationNo,
    t1.studentName,
	batch.batchNumber as batchNumber,
    t1.studentPersonalTitle,
    t1.studentInitial,
    t1.studentDateofbirth,
    t1.studentNationality,
    t1.studentCitizenship,
    t1.studentEmployment,
    t1.studentPermanentAddress,
    t1.studentOfficeAddress,
    t1.correspondence,
    t1.studentContactLan,
    t1.studentContactMobile,
    t1.studentContactEmail,
    t1.achedamicYear,
    t1.appliedDate,
    t1.pin,
    t1.medium,
    t1.streamName,
    t1.Main_Subject,
	t1.temporaryNo,
    t6.degreeTitle,
    t7.programmeTypeTitle,
    t8.facultyTitle,
    t9.universityTitle,
	tp.Pay_amount as Pay_amount
FROM
(select * FROM applicantspersonal WHERE achedamicYear = '" . $_POST['achademicYear'] . "') AS t1
LEFT JOIN (select degreeTitle,degreeCode FROM degree) AS t6
ON
t1.degreeCode = t6.degreeCode

LEFT JOIN (select degreeCode,academicYear,batchNumber FROM batch WHERE academicYear = '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "') AS batch
ON
t1.batch_number = batch.batchNumber and t1.achedamicYear = batch.academicYear and t1.degreeCode = batch.degreeCode 

LEFT JOIN (select Pay_studentNo ,Pay_RefNo,Pay_amount FROM StudentPayment where Pay_CategoryCode = '001' and Response_Progress = '1') AS tp
ON
t1.applicationNo = tp.Pay_studentNo
LEFT JOIN (select programmeTypeTitle,programmeTypeCode FROM programmetype) AS t7
ON
t1.programmeTypeCode = t7.programmeTypeCode
LEFT JOIN (select facultyTitle,facultyCode FROM faculty) AS t8
ON
t1.facultyCode = t8.facultyCode
LEFT JOIN (select universityTitle,universityCode FROM university) AS t9
ON
t1.universityCode = t9.universityCode
WHERE
achedamicYear = '" . $_POST['achademicYear'] . "' AND t6.degreeCode = '" . $_POST['degreeCode'] . "' AND batch.batchNumber = '" . $_POST['batchnumber'] . "'
ORDER BY
t6.degreeTitle ASC,
(t1.temporaryNo);";

	// echo $getSQL["data4ApplicantList"] ;
}

if ($_POST["interface"] == "data4SendSMApplicantList") {
	$getSQL["data4SendSMApplicantList"] = "SELECT DISTINCT
	
	t1.studentNIC as nic,
    t1.applicationNo as sendSMSapplicationNo,
    t1.studentName as name,
    t1.studentPermanentAddress  as adress,
    t1.studentContactMobile as mobile,
    t1.studentContactEmail as email	
	FROM
	(select * FROM applicantspersonal WHERE achedamicYear = '" . $_POST['achademicYear'] . "') AS t1
	LEFT JOIN (select degreeTitle,degreeCode FROM degree) AS t6
	ON
	t1.degreeCode = t6.degreeCode
	LEFT JOIN (select programmeTypeTitle,programmeTypeCode FROM programmetype) AS t7
	ON
	t1.programmeTypeCode = t7.programmeTypeCode
	LEFT JOIN (select facultyTitle,facultyCode FROM faculty) AS t8
	ON
	t1.facultyCode = t8.facultyCode
	LEFT JOIN (select universityTitle,universityCode FROM university) AS t9
	ON
	t1.universityCode = t9.universityCode
	WHERE
	achedamicYear = '" . $_POST['achademicYear'] . "' AND t6.degreeCode = '" . $_POST['degreeCode'] . "' AND t1.medium = '" . $_POST['medium'] . "'
	ORDER BY
	t6.degreeTitle ASC,
	(t1.temporaryNo);";
}

if ($_POST["interface"] == "data4SendSMtDueAmmoutList") {
	$getSQL["data4SendSMtDueAmmoutList"] = "SELECT DISTINCT
	
	t1.studentNIC as nic,
    t1.studentNo as sendSMSapplicationNo,
    t1.studentName as name,
    t1.studentPermanentAddress  as adress,
    t1.studentContactMobile as mobile,
    t1.studentContactEmail as email	,
	SUM(t10.Pay_amount) as totalPayed
	FROM
	(select * FROM student WHERE achedamicYear = '" . $_POST['achademicYear'] . "') AS t1
	LEFT JOIN StudentPayment AS t10
	ON
	t1.studentNo = t10.Pay_studentNo
	LEFT JOIN (select degreeTitle,degreeCode FROM degree) AS t6
	ON
	t1.degreeCode = t6.degreeCode
	LEFT JOIN (select programmeTypeTitle,programmeTypeCode FROM programmetype) AS t7
	ON
	t1.programmeTypeCode = t7.programmeTypeCode
	LEFT JOIN (select facultyTitle,facultyCode FROM faculty) AS t8
	ON
	t1.facultyCode = t8.facultyCode
	LEFT JOIN (select universityTitle,universityCode FROM university) AS t9
	ON
	t1.universityCode = t9.universityCode
	WHERE
	achedamicYear = '" . $_POST['achademicYear'] . "' AND t6.degreeCode = '" . $_POST['degreeCode'] . "' AND t1.medium = '" . $_POST['medium'] . "' AND t1.registered = 'yes'
	GROUP BY
	t1.studentNo
	ORDER BY
	t6.degreeTitle ASC,
	(t1.studentNo);";
}


if ($_POST["interface"] == "data4SendSMSelectedApplicantList") {
	$getSQL["data4SendSMSelectedApplicantList"] = "SELECT DISTINCT
	
	t1.studentNIC as nic,
    t1.applicationNo as sendSMSapplicationNo,
    t1.studentName as name,
    t1.studentPermanentAddress  as adress,
    t1.studentContactMobile as mobile,
    t1.studentContactEmail as email	
	
	FROM
	(select * FROM applicantspersonal WHERE achedamicYear = '" . $_POST['achademicYear'] . "') AS t1
	LEFT JOIN (select degreeTitle,degreeCode FROM degree) AS t6
	ON
	t1.degreeCode = t6.degreeCode
	LEFT JOIN (select programmeTypeTitle,programmeTypeCode FROM programmetype) AS t7
	ON
	t1.programmeTypeCode = t7.programmeTypeCode
	LEFT JOIN (select facultyTitle,facultyCode FROM faculty) AS t8
	ON
	t1.facultyCode = t8.facultyCode
	LEFT JOIN (select universityTitle,universityCode FROM university) AS t9
	ON
	t1.universityCode = t9.universityCode
	WHERE
	achedamicYear = '" . $_POST['achademicYear'] . "' AND t6.degreeCode = '" . $_POST['degreeCode'] . "' AND t1.medium = '" . $_POST['medium'] . "' AND t1.selected = 'YES'
	ORDER BY
	t6.degreeTitle ASC,
	(t1.temporaryNo);";

	// echo $getSQL["data4SendSMSelectedApplicantList"] ;
}

if ($_POST["interface"] == "data4SendSMPreRegStudentList") {
	$getSQL["data4SendSMPreRegStudentList"] = "SELECT DISTINCT
	
	t1.studentNIC as nic,
    t1.studentNo as sendSMSapplicationNo,
    t1.studentName as name,
    t1.studentPermanentAddress  as adress,
    t1.studentContactMobile as mobile,
    t1.studentContactEmail as email	
	
	FROM
	(select * FROM student WHERE achedamicYear = '" . $_POST['achademicYear'] . "') AS t1
	LEFT JOIN (select degreeTitle,degreeCode FROM degree) AS t6
	ON
	t1.degreeCode = t6.degreeCode
	LEFT JOIN (select programmeTypeTitle,programmeTypeCode FROM programmetype) AS t7
	ON
	t1.programmeTypeCode = t7.programmeTypeCode
	LEFT JOIN (select facultyTitle,facultyCode FROM faculty) AS t8
	ON
	t1.facultyCode = t8.facultyCode
	LEFT JOIN (select universityTitle,universityCode FROM university) AS t9
	ON
	t1.universityCode = t9.universityCode
	WHERE
	achedamicYear = '" . $_POST['achademicYear'] . "' AND t6.degreeCode = '" . $_POST['degreeCode'] . "' AND t1.medium = '" . $_POST['medium'] . "' AND t1.registered = 'prg'
	ORDER BY
	t6.degreeTitle ASC,
	(t1.studentNo);";
}

if ($_POST["interface"] == "data4SendSMRegStudentList") {
	$getSQL["data4SendSMRegStudentList"] = "SELECT DISTINCT
	
	t1.studentNIC as nic,
    t1.studentNo as sendSMSapplicationNo,
    t1.studentName as name,
    t1.studentPermanentAddress  as adress,
    t1.studentContactMobile as mobile,
    t1.studentContactEmail as email	
	
	FROM
	(select * FROM student WHERE achedamicYear = '" . $_POST['achademicYear'] . "') AS t1
	LEFT JOIN (select degreeTitle,degreeCode FROM degree) AS t6
	ON
	t1.degreeCode = t6.degreeCode
	LEFT JOIN (select programmeTypeTitle,programmeTypeCode FROM programmetype) AS t7
	ON
	t1.programmeTypeCode = t7.programmeTypeCode
	LEFT JOIN (select facultyTitle,facultyCode FROM faculty) AS t8
	ON
	t1.facultyCode = t8.facultyCode
	LEFT JOIN (select universityTitle,universityCode FROM university) AS t9
	ON
	t1.universityCode = t9.universityCode
	WHERE
	achedamicYear = '" . $_POST['achademicYear'] . "' AND t6.degreeCode = '" . $_POST['degreeCode'] . "' AND t1.medium = '" . $_POST['medium'] . "' AND t1.registered = 'yes'
	ORDER BY
	t6.degreeTitle ASC,
	(t1.studentNo);";
}

$getSQL["data4ApplicantQualficationDetails"] = "select * from applicantseducation;";
$getSQL["data4ApplicantworkDetails"] = "select * from applicantswork;";

// $getSQL["data4ApplicantList"]="select distinct t1.*,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle,t10.educationValue,t10.educationPin ,t10.educationFieldName from applicantspersonal as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmetype as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode left join applicantseducation as t10 on t1.applicationNo=t10.applicationNo and t1.studentNIC = t10.studentNIC where (t1.selected is null  or t1.selected='')order by (t1.temporaryNo);";

//.....................................................................
// $getSQL["data4checkdepartment"] = "select * from degree ORDER BY degreeTitle ASC;";
$getSQL["data4LoadApplicantList"] = "SELECT CURDATE() as date";
$getSQL["data4LoadPendingApplicantList"] = "SELECT CURDATE() as date";

$getSQL["data4LoadInterviewScreenList"] = "SELECT CURDATE() as date";
$getSQL["data4LoadStudentQulificationList"] = "SELECT CURDATE() as date";

$getSQL["data4LoadApplicantSelection"] = "SELECT CURDATE() as date";
$getSQL["data4LoadListofSelectedApplicant"] = "SELECT CURDATE() as date";
$getSQL["data4LoadFirstAttemptExamResultUpload"] = "SELECT CURDATE() as date";

$getSQL["data4getDepartmentAdmissionForm"] = "select * from degree ORDER BY degreeTitle ASC;";
$getSQL["data4getPaperCountForm"] = "select * from degree ORDER BY degreeTitle ASC;";


//if($_POST['interface']=='data4checkUser'){
//$getSQL["data4checkUser"]="select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId where userName='".$_POST['userName']."';";
// $getSQL["data4checkUser"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";

//}
$getSQL["data4ApplicantProfile"] = "select distinct t1.universityCode,t1.facultyCode,t1.programmeTypeCode,t1.degreeCode,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle,t1.studentNIC,t1.applicationNo,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentDateofbirth,t1.studentNationality,
	t1.studentCitizenship,t1.studentEmployment,t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,
	t2.bachelorDegree,t2.bachelorDegreeTitle,t2.bachelorDegreeobtainUniversity,t2.bachelorDegreegraduationYear,t2.bachelorDegreegraduationMonth,
	t2.higherDegree,t2.higherDegreeTitle,t2.higherDegreeobtainUniversity,t2.higherDegreegraduationYear,t2.higherDegreegraduationMonth,
	t2.qualificationOne,t2.qualificationAwardingAuthorityOne,t2.qualificationAwardingYearOne,t2.qualificationTwo,t2.qulificationAwardingAuthorityTwo,t2.qulificationAwardingYearTwo,
	t3.companyOne,t3.designationOne,t3.fromOne,t3.toOne,t3.companyTwo,t3.designationTwo,t3.fromTwo,t3.toTwo,t3.companyThree,t3.designationThree,t3.fromThree,
	t3.toThree,t3.refreeNameOne,t3.refreeAddressOne,t3.refreeDesignationOne,t3.refreeNameTwo,t3.refreeAddressTwo,t3.refreeDesignationTwo,
	t4.registrationSougth,t4.mainSubject,t4.fieldOfSpecialization,t4.researchMedium,t4.researchTitle,t4.grantForProject,t4.grantDetails,t4.financedDetails,t4.registeredOtherDegree,
	t5.applicantName,t5.applicantInstitution,t5.applicantAddress,t5.applicantResearchTitle from applicantspersonal as t1 left join applicantseducation as t2 on t1.studentNIC=t2.studentNIC left join applicantswork as t3 on t1.studentNIC=t3.studentNIC left join applicantsother as t4 on t1.studentNIC=t4.studentNIC
	left join applicantsresearch as t5 on t1.studentNIC=t5.studentNIC left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmeType as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode  where t1.studentNIC<>'0000000000'order by applicationNo;";


// t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,t1.achedamicYear,t1.selected,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle, t10.studentNo,t10.medium from applicantspersonal as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmeType as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode left join student as t10 on  t1.studentNIC= t10.studentNIC and t1.degreeCode=t10.degreeCode and t1.programmeTypeCode= t10.programmeTypeCode where (t1.selected <>'') order by studentNo;";

//2019-01-28----------------------------------------------------------------------------------------------

// $getSQL["data4SelectedStudentList"]="select distinct t1.universityCode,t1.facultyCode,t1.programmeTypeCode,t1.degreeCode,t1.applicationNo,t1.studentNIC,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentDateofbirth,t1.studentNationality,t1.studentCitizenship,t1.studentEmployment,t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,t1.achedamicYear,t1.selected,t1.medium as appmedium,

//t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle, t10.studentNo,t10.medium from applicantspersonal as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmetype as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode left join student as t10 on  t1.studentNIC= t10.studentNIC and t1.degreeCode=t10.degreeCode and t1.programmeTypeCode= t10.programmeTypeCode where (t1.selected <>'') order by t10.studentNo;"; //t6.degreeTitle ASC, 

//2019-01-28

//2019-01-28 edited one-------------------------
// $getSQL["data4SelectedStudentList"]="select distinct t1.universityCode,t1.facultyCode,t1.programmeTypeCode,t1.degreeCode,t1.applicationNo,t1.studentNIC,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentDateofbirth,t1.studentNationality,t1.studentCitizenship,t1.studentEmployment,t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,t1.achedamicYear,t1.selected,t1.medium as appmedium,
// t2.degreeTitle, 
// t3.studentNo,t3.medium 
// from applicantspersonal as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode
// left join student as t3 on  t1.studentNIC= t3.studentNIC and t1.degreeCode=t3.degreeCode and t1.programmeTypeCode= t3.programmeTypeCode where (t1.selected <>'') order by t2.degreeTitle ASC, t3.studentNo;";


// $getSQL["data4SelectedStudentList"]="select distinct t1.universityCode,t1.facultyCode,t1.programmeTypeCode,t1.degreeCode,t1.applicationNo,t1.studentNIC,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentPermanentAddress,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,t1.achedamicYear,t1.medium as appmedium,
// t2.degreeTitle, 
// t3.programmeTypeTitle,
// t4.facultyTitle,
// t5.universityTitle,
// t6.studentNo,t6.medium
// from applicantspersonal as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode
// left join programmetype as t3 on t1.programmeTypeCode =t3.programmeTypeCode
// left join faculty as t4 on t1.facultyCode = t4.facultyCode
// left join university as t5 on t1.universityCode=t5.universityCode 
// left join student as t6 on  t1.studentNIC= t6.studentNIC and t1.degreeCode=t6.degreeCode and t1.programmeTypeCode= t6.programmeTypeCode
// where t1.selected='yes' order by t2.degreeTitle ASC, t6.studentNo;";

$getSQL["data4SelectedStudentList"] = "select distinct t1.universityCode,t1.facultyCode,t1.programmeTypeCode,t1.degreeCode,t1.applicationNo,t1.studentNIC,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentDateofbirth,t1.studentNationality,t1.studentCitizenship,t1.studentEmployment,t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,t1.achedamicYear,t1.selected,t1.medium as appmedium,
	t2.degreeTitle, 
	t3.programmeTypeTitle,
	t4.facultyTitle,
	t5.universityTitle,
	t6.studentNo,t6.medium
	from applicantspersonal as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode
	left join programmetype as t3 on t1.programmeTypeCode =t3.programmeTypeCode
	left join faculty as t4 on t1.facultyCode = t4.facultyCode
	left join university as t5 on t1.universityCode=t5.universityCode 
	left join student as t6 on  t1.studentNIC= t6.studentNIC and t1.degreeCode=t6.degreeCode and t1.programmeTypeCode= t6.programmeTypeCode
	where t1.selected='yes' order by t2.degreeTitle ASC, t6.studentNo;";






//2019-01-28 edited one-------------------------


//-------------done by Nishadi
$getSQL["data4AddStudentAccount"] = "select distinct s.studentName, s.studentNIC, s.studentNo, s.degreeCode, s.achedamicYear, d.degreeTitle from student as s, degree as d where s.degreeCode=d.degreeCode and s.registered='yes' ORDER BY d.degreeTitle ASC, (s.studentNo);";
//-------------

$getSQL["data4LastRegistrationNo"] = "select distinct t1.*, t2.degreeTitle, t3.programmeTypeTitle from student as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode ORDER BY t2.degreeTitle ASC,t1.studentNo ASC";


$getSQL["data4ThesisNotification"] = "select distinct t1.*,t3.degreeTitle , t4.programmeTypeTitle , t5.facultyTitle from studentprofile as t1 left join student as t2 on t1.studentNo=t2.studentNo left join degree as t3 on t1.degreeCode=t3.degreeCode left join programmeType as t4 on t2.programmeTypeCode=t4.programmeTypeCode left join faculty as t5 on t2.facultyCode=t5.facultyCode;";
$getSQL["data4TransferStudentList"] = "select * from studenttransfer;";

//added 2015/05/11

//Appoint Examiner

$getSQL["data4AppointExaminers"] = "select distinct t1.universityCode, t1.studentNo,t1.studentNIC,t1.studentName,t1.studentPermanentAddress,t1.degreeCode,t2.facultyTitle ,t4.programmeTypeTitle,t4.programmeTypeCode, t5.departmentCode,t5.degreeTitle , t6.tid, t6.title , t7.departmentTitle,t7.hodEmpNo,t8.lecturerName,t8.lecturerEmpNo  from student as t1 left join faculty as t2 on t1.facultyCode=t2.facultyCode left join programmetype as t4 on t1.programmeTypeCode= t4.programmeTypeCode left join degree as t5 on t1.degreeCode= t5.degreeCode and t1.facultyCode=t5.facultyCode left join thesis as t6 on t1.studentNo=t6.studentNo left join department as t7 on t5.departmentCode = t7.departmentCode left join lecturer as t8 on t1.facultyCode=t8.facultyCode where t8.lecturerEmpNo = t7.hodEmpNo OR t8.lecturerEmpNo = t2.deanEmpNo;";

//ThesisEvaluation
$getSQL["data4ThesisEvaluation"] = "select distinct t1.studentNo,t1.studentNIC,t1.studentName,t1.facultyCode, t2.tid, t2.title, t3.lecturerName, t3.lecturerEmpNo, t4.eid, t5.RemDate, t5.description from student as t1 left join thesis as t2 on t1.studentNo=t2.studentNo left join lecturer as t3 on t1.facultyCode=t3.facultyCode left join examiner as t4 on t3.lecturerEmpNo = t4.eid left join reportreminder as t5 on t4.eid = t5.reminderid;";
//Appoint Examiner
$getSQL["data4ExaminerReccomand"] = "select distinct t1.universityCode, t1.studentNo,t1.studentNIC,t1.studentName,t1.studentPermanentAddress,t1.degreeCode,t2.facultyTitle ,t4.programmeTypeTitle,t4.programmeTypeCode, t5.departmentCode,t5.degreeTitle , t6.tid, t6.title , t7.departmentTitle,t8.lecturerName,t8.lecturerEmpNo from student as t1 left join faculty as t2 on t1.facultyCode=t2.facultyCode left join programmetype as t4 on t1.programmeTypeCode= t4.programmeTypeCode left join degree as t5 on t1.degreeCode= t5.degreeCode and t1.facultyCode=t5.facultyCode left join thesis as t6 on t1.studentNo=t6.studentNo left join department as t7 on t5.departmentCode = t7.departmentCode left join lecturer as t8 on t1.facultyCode=t8.facultyCode;";


//Examiner details View
//$getSQL["data4ExaminerDetailsView"]="select distinct t1.*,t2.facultyTitle ,t3.programmeTypeTitle , t4.degreeTitle ,t5.tid ,t6.lecturerEmpNo,t6.lecturerName ,t8.BOSNo,t8.BOSDate,t8.DateReceivefromHead,t8.Accept,t8.DateRequestRenominate,t9.FGSBoardNo,t9.FGSBoardDate,t9.DateReceivefromBOS,t9.Acceptfgs,t9.DateRequestRenominateFgs from student as t1 left join faculty as t2 on t1.facultyCode = t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode =t3.programmeTypeCode left join degree as t4 on t1.degreeCode =t4.degreeCode left join thesis as t5 on t1.studentNo =t5.studentNo left join lecturer as t6 on t1.facultyCode=t6.facultyCode left join examiner as t7 on t5.tid=t7.tid and t6.lecturerEmpNo=t7.eid left join examinerbos as t8 on t7.eid=t8.eid and t8.eid=t6.lecturerEmpNo left join examinerfgsboard as t9 on t7.eid=t9.eid where t8.BOSNo !='' AND t9.FGSBoardNo!='' ;"; 

//	$getSQL["data4ExaminerDetailsView"]="select distinct t1.*,t2.facultyTitle ,t3.programmeTypeTitle , t4.degreeTitle ,t5.tid ,t6.lecturerEmpNo,t6.lecturerName ,t8.BOSNo,t8.BOSDate,t8.DateReceivefromHead,t8.Accept,t8.DateRequestRenominate,t9.FGSBoardNo,t9.FGSBoardDate,t9.DateReceivefromBOS,t9.Acceptfgs,t9.DateRequestRenominateFgs,t10.SenateNo,t10.SenateDate,t10.DateReceivefromFGSBoad,t10.AcceptSenate,t10.DateRequestRenominateSenate from student as t1 left join faculty as t2 on t1.facultyCode = t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode =t3.programmeTypeCode left join degree as t4 on t1.degreeCode =t4.degreeCode left join thesis as t5 on t1.studentNo =t5.studentNo left join lecturer as t6 on t1.facultyCode=t6.facultyCode left join examiner as t7 on t5.tid=t7.tid and t6.lecturerEmpNo=t7.eid left join examinerbos as t8 on t7.eid=t8.eid and t8.eid=t6.lecturerEmpNo left join examinerfgsboard as t9 on t7.eid=t9.eid left join examinersenate as t10 on t7.eid = t10.eid and t10.eid=t6.lecturerEmpNo;";//"where t8.BOSNo is not null or t9.FGSBoardNo is not null;";

$getSQL["data4ExaminerDetailsView"] = "Select t1.eid, t2.lecturerEmpNo, t2.lecturerName, t3.tid, t3.title, t4.studentNo, t5.BOSNo, t5.BOSDate, t5.DateReceivefromHead, t5.Accept, t5.DateRequestRenominate, t6.FGSBoardNo, t6.FGSBoardDate, t6.DateReceivefromBOS, t6.Acceptfgs, t6.DateRequestRenominateFgs, t7.SenateNo, t7.SenateDate, t7.DateReceivefromFGSBoad, t7.AcceptSenate, t7.DateRequestRenominateSenate from examiner as t1 left join Lecturer as t2 on t1.eid =t2.lecturerEmpNo left join thesis as t3 on t1.tid=t3.tid left join student as t4 on t3.studentNo = t4.studentNo left join examinerbos as t5 on t1.eid = t5.eid Left join examinerfgsboard as t6 on t1.eid=t6.eid Left join examinersenate as t7 on t1.eid = t7.eid;";

//edited one 16/6/2015

//select distinct t1.*,t2.facultyTitle ,t3.programmeTypeTitle , t4.degreeTitle ,t5.tid ,t6.lecturerEmpNo,t6.lecturerName ,t8.BOSNo,t8.BOSDate,t8.DateReceivefromHead,t8.Accept,t8.DateRequestRenominate from student as t1 left join faculty as t2 on t1.facultyCode = t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode =t3.programmeTypeCode left join degree as t4 on t1.degreeCode =t4.degreeCode left join thesis as t5 on t1.studentNo =t5.studentNo left join lecturer as t6 on t1.facultyCode=t6.facultyCode left join examiner as t7 on t5.tid=t7.tid and t6.lecturerEmpNo=t7.eid left join examinerbos as t8 on t7.eid=t8.eid and t8.eid=t6.lecturerEmpNo where t8.BOSNo !='';"; 

//2.select distinct t1.*,t2.facultyTitle ,t3.programmeTypeTitle , t4.degreeTitle ,t5.tid ,t6.lecturerEmpNo,t6.lecturerName ,t8.BOSNo,t8.BOSDate,t8.DateReceivefromHead,t8.Accept,t8.DateRequestRenominate,t9.FGSBoardNo,t9.FGSBoardDate,t9.DateReceivefromBOS,t9.Accept,t9.DateRequestRenominate from student as t1 left join faculty as t2 on t1.facultyCode = t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode =t3.programmeTypeCode left join degree as t4 on t1.degreeCode =t4.degreeCode left join thesis as t5 on t1.studentNo =t5.studentNo left join lecturer as t6 on t1.facultyCode=t6.facultyCode left join examiner as t7 on t5.tid=t7.tid and t6.lecturerEmpNo=t7.eid left join examinerbos as t8 on t7.eid=t8.eid and t8.eid=t6.lecturerEmpNo left join examinerfgsboard as t9 on t7.eid=t9.eid where t8.BOSNo !='' 


//ThesisReminders

$getSQL["data4ThesisReminders"] = "select distinct t1.RemDate, t1.description,t1.reminderMethod, t2.tid, t2.title, t3.studentNo, t3.studentNIC, t3.studentName, t5.lecturerEmpNo, t5.facultyCode, t5.lecturerName from reportreminder as t1 left join thesis as t2 on t1.rid=t2.tid left join student as t3 on t2.studentNo=t3.studentNo left join lecturer as t5 on t1.reminderid = t5.lecturerEmpNo;";
//ThesisNotifyView
$getSQL["data4ThesisNotifyView"] = "select distinct t1.studentNo,t1.studentNIC,t1.studentName,t2.tid,t2.title,t3.receivedBy,t3.receivedDate,t3.forwardTo,t3.forwardedDate from student as t1 left join thesis as t2 on t1.studentNo=t2.studentNo left join thesisnotify as t3 on t2.tid=t3.tid where t3.tid !='';";

//Add Old Student	
$getSQL["data4AddOldStudent"] = "select distinct t1.degreeCode , t1. degreeTitle , t1.programmeTypeCode ,t2.programmeTypeTitle, t3.batchNo  from degree as t1 left join programmetype as t2 on t1.programmeTypeCode =  t2.programmeTypeCode left join batch as t3 on t1.degreeCode=t3.degreeCode and t1.departmentCode=t3.departmentCode;";
$getSQL["data4AddOldStudentTwo"] = "select t1.* , t2.universityTitle from   faculty as t1  left join university as t2 on t1.universityCode = t2.universityCode ;";
$getSQL["data4addOldStudentFormTwo"] = "select distinct t1.*, t2.degreeTitle from student as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode;";
$getSQL["data4LecturerStudentFormTwo"] = "select lecturerEmpNo , lecturerName from lecturer ;";


//Add thesis title
$getSQL["data4AddThesisTitle"] = "select distinct t1.studentNo,t1.studentName, t1.thesisTopicOne, t1.thesisTopicTwo, t2.tid,t2.title,t3.programmeTypeCode,t4.programmeTypeTitle from studentprofile as t1 left join thesis as t2 on t1.studentNo=t2.studentNo left join student as t3 on t1.studentNo=t3.studentNo left join programmetype as t4 on t3.programmeTypeCode = t4.programmeTypeCode;";

//select t1.thesisTopicOne, t1.thesisTopicTwo, t1.thesisTopicThree, t1.thesisTopicFour,t2.tid,t2.title from studentprofile as t1 left join thesis as t2 on t1.studentNo=t2.studentNo


//data4TransactionTypeDetails
$getSQL["data4TransactionTypeDetails"] = "select distinct t1.transactionCode,t1.transactionSubCode,t1.transacDescription,t1.sendformuse,t2.infaceEleName1,t2.infaceEleName2,t2.infaceEleName3,t2.infaceEleName4,t2.infaceEleName8,t2.infaceEleName9,t2.infaceEleName10,t2.infaceEleName11,t2.infaceEleName12,t2.infaceEleName13,t2.infaceEleName14 from transactiontype as t1 left join guielement as t2 on t1.transactionCode=t2.transactionCode and t1.transactionSubCode=t2.transactionSubCode where t2.transactionSubCode is not null;";

//select distinct t1.transactionCode,t1.transactionSubCode,t1.transacDescription,t2.infaceEleName1,t2.infaceEleName2,t2.infaceEleName3,t2.infaceEleName3,t2.infaceEleName4 from transactiontype as t1 left join guielement as t2 on t1.transactionCode=t2.transactionCode and t1.transactionSubCode=t2.transactionSubCode where t2.transactionSubCode is not null;";

//student details for transaction
$getSQL["data4StudentTransaction"] = "select * from student;";

//Examiner List
$getSQL["data4ExaminerList"] = "select lecturerEmpNo,lecturerName from lecturer;";

//Document data
$getSQL["data4AddDocument"] = "select distinct t1.documentID,t1.dataItemID,t2.dataItemName from documentitem as t1 left join dataitem as t2 on t1.dataItemID = t2.dataItemID;";

$getSQL["data4DocName"] = "select * from document;";

$getSQL["data4SequanceNumber"] = "select docmentID,sequenceNo from documentdata;";
$getSQL["data4SessionID"] = "select t1.sessionID,t2.userName from ses_login as t1 left join user as t2 on t1.user_id =t2.userId;";
$getSQL["data4decisionprogramm"] = "select * from degree ORDER BY degreeTitle ASC;";
$getSQL["data4formDocDecisionTransaction"] = "select t1.*, t2.documentName, t3.dataItemName from documentdata as t1 left join document as t2 on t1.docmentID=t2.documentID left join dataItem as t3 on t1.dataItemID=t3.dataItemID order by docmentID, sequenceNo;";
if ($_POST['interface'] == 'data4formDocDecisionTransactionTwo') {
	$getSQL["data4formDocDecisionTransactionTwo"] = "select t1.*,t2.documentName, t3.dataItemName from documentdata as t1 left join document as t2 on t1.docmentID=t2.documentID left join dataitem as t3 on t1.dataItemID=t3.dataItemID where t1.itemValue='" . $_POST['itemValue1'] . "' and t1.sequenceNo=any(select sequenceNo from documentdata where sequenceNo= any(SELECT sequenceNo FROM documentdata WHERE itemValue='" . $_POST['itemValue'] . "' and docmentID='" . $_POST['docmentID'] . "') and sessionID= any(SELECT sessionID FROM documentdata WHERE itemValue='" . $_POST['itemValue'] . "' and docmentID='" . $_POST['docmentID'] . "')) ORDER BY length(sequenceNo) ASC;";
}
$getSQL["data4document"] = "select * from document;";

$getSQL["data4ListDocName"] = "select * from document where documentName like '%list%' OR '%List%';";

///$getSQL["data4ApplicantListPrint"]="select distinct t1.*,t3.degreeTitle,t4.departmentTitle from documentdata,applicantspersonal as t1 left join degree as t3 on t1.degreeCode = t3.degreeCode left join department as t4 on t3.departmentCode = t4.departmentCode where t1.selected='YES' and t1.applicationNo NOT IN (SELECT applicationNo from applicantspersonal,documentdata where applicationNo=itemValue)  order by (t1.temporaryNo );";

//$getSQL["data4ApplicantListPrint"]="select distinct t1.*,t2.educationFieldName,t2.educationValue,t3.degreeTitle,t4.departmentTitle from applicantspersonal as t1 left join applicantseducation as t2 on t1.applicationNo=t2.applicationNo left join degree as t3 on t1.degreeCode = t3.degreeCode left join department as t4 on t3.departmentCode = t4.departmentCode;";
$getSQL["data4ApplicantListPrint"] = "select distinct t1.*,t3.degreeTitle,t4.departmentTitle from applicantspersonal as t1 left join degree as t3 on t1.degreeCode = t3.degreeCode left join department as t4 on t3.departmentCode = t4.departmentCode order by (t1.temporaryNo );";

//$getSQL["data4ApplicantListPrint"]="select distinct t1.*,t2.educationFieldName,t2.educationValue,t3.degreeTitle from applicantspersonal as t1 left join applicantseducation as t2 on t1.applicationNo=t2.applicationNo left join degree as t3 on t1.degreeCode = t3.degreeCode;";

$getSQL["data4RegisteredStudentListPrint"] = "select distinct t1.*,t2.educationFieldName,t2.educationValue,t3.degreeTitle,t4.studentNo,t4.registered from applicantspersonal as t1 left join applicantseducation as t2 on t1.applicationNo=t2.applicationNo left join degree as t3 on t1.degreeCode = t3.degreeCode left join student as t4 on t1.applicationNo=t4.applicationNo;";

$getSQL["data4AddListDocument"] = "select distinct t1.documentID,t1.dataItemID,t2.dataItemName from documentitem as t1 left join dataitem as t2 on t1.dataItemID = t2.dataItemID;";

$getSQL["data4SequanceNumberList"] = "select docmentID,sequenceNo from documentdata;";
$getSQL["data4SessionIDList"] = "select t1.sessionID,t2.userName from ses_login as t1 left join user as t2 on t1.user_id =t2.userId;";

$getSQL["data4DegreeList"] = "select distinct t1.degreeCode,t1.degreeTitle,t2.lecturerEmpNo,t2.lecturerName from degree as t1 left join lecturer as t2 on t1.universityCode=t2.universityCode;";
$getSQL["data4LecturerList"] = "select distinct lecturerEmpNo,lecturerName from lecturer;";

if ($_POST['interface'] == 'data4ApplicantDetailsEdit') {
	$getSQL["data4ApplicantDetailsEdit"] = "select * from applicantspersonal where applicationNo='" . $_POST['applicationNo'] . "';";
}
$getSQL["data4DegreeMediumReport"] = "select t1.facultyCode, t2.facultyTitle, t1.degreeCode, t1.degreeTitle, t1.medium from degree as t1 left join faculty as t2 on t1.facultyCode=t2.facultyCode;";


if ($_POST['interface'] == 'data4StudentDetailsEdit') {
	$getSQL["data4StudentDetailsEdit"] = "select * from student where studentNo ='" . $_POST['studentNo'] . "';";
}


if ($_POST['interface'] == 'data4ApplicarionReprint') {
	$getSQL["data4ApplicarionReprint"] = "select t1.*, t2.degreeTitle from applicantspersonal as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode 
	where  t1.applicationNo ='" . $_POST['applicationNo'] . "';";
}



// if($_POST['interface']=='data4ApplicarionReprint'){
// $getSQL["data4ApplicarionReprint"]= "select t1.*, t2.degreeTitle from applicantspersonal as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode where t1.studentNIC='".$_POST['studentNIC']."' and t1.pin='".$_POST['pin']."';";
// }
if ($_POST['interface'] == 'data4ApplicarionReprintWork') {
	$getSQL["data4ApplicarionReprintWork"] = "select * from applicantswork where applicationNo ='" . $_POST['applicationNo'] . "';";
}
if ($_POST['interface'] == 'data4ApplicationReprinteducation') {
	$getSQL["data4ApplicationReprinteducation"] = "select * from applicantseducation where applicationNo ='" . $_POST['applicationNo'] . "';";
}

// $getSQL["data4PrintStudentIDCard"] = "select distinct t1.applicationNo,t1.studentNo,t1.LibraryIdCode,t1.studentNIC,t1.studentPersonalTitle,t1.studentName,t1.studentInitial,t1.studentPermanentAddress,t1.studentContactLan, t1.studentContactMobile,t1.studentContactEmail, t1.achedamicYear,t1.medium,t2.degreeCode,t2.degreeTitle,t2.duration,t3.coursecommence,t3.academicYear as batchYear from student as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join batch as t3 on t1.degreeCode=t3.degreeCode and t1.achedamicYear=t3.academicYear where t1.registered ='yes' order by t2.degreeTitle ASC , (t1.studentNo);";
if ($_POST['interface'] == 'data4PrintStudentIDCard') {
	$seachAcademicYear = "";
	if($_POST['achademicYear'] != 'All'){
	$seachAcademicYear = "achedamicYear = '" . $_POST['achademicYear'] . "' AND ";
	}
	$getSQL["data4PrintStudentIDCard"] = "SELECT DISTINCT
    t1.applicationNo,
    t1.studentNo,
    t1.LibraryIdCode,
    t1.studentNIC,
    t1.studentPersonalTitle,
    t1.studentName,
    t1.studentInitial,
    t1.studentPermanentAddress,
    t1.studentContactLan,
    t1.studentContactMobile,
    t1.studentContactEmail,
    t1.achedamicYear,
    t1.RegisteredDate,
    t1.medium,
    t2.degreeCode,
    t2.degreeTitle,
    t2.duration,
    t3.coursecommence,
    t3.academicYear AS batchYear,
    t4.oldStudentNo as oldStudentNo,	
    t5.applicationFee as applicationFee
FROM
    (
        SELECT * FROM student
    WHERE
	" . $seachAcademicYear . " degreeCode = '" . $_POST['degreeCode'] . "' AND medium = '" . $_POST['medium'] . "'
    ) AS t1
LEFT JOIN studenttransfer AS t4
ON
    t1.studentNo = t4.studentNo
LEFT JOIN degree AS t2
ON
    t1.degreeCode = t2.degreeCode
LEFT JOIN batch AS t3
ON
    t1.degreeCode = t3.degreeCode AND t1.achedamicYear = t3.academicYear

LEFT JOIN (select Pay_studentNo,sum(Pay_amount) as applicationFee from StudentPayment where Pay_CategoryCode = '001' group by Pay_studentNo) AS t5
ON
    t1.applicationNo = t5.Pay_studentNo
WHERE
    t1.registered = 'yes'
ORDER BY
    t2.degreeTitle ASC,
    (t1.studentNo);
";
// echo $getSQL["data4PrintStudentIDCard"];
// die();

}

if ($_POST['interface'] == 'data4GetEnrollment') {
	$getSQL["data4GetEnrollment"] = "SELECT DISTINCT
    t1.applicationNo,
    t1.studentNo,
    t1.LibraryIdCode,
    t1.studentNIC,
    t1.studentPersonalTitle,
    t1.studentName,
    t1.studentInitial,
    t1.studentPermanentAddress,
    t1.studentContactLan,
    t1.studentContactMobile,
    t1.studentContactEmail,
    t1.achedamicYear,
    t1.RegisteredDate,
    t1.medium,
    t2.degreeCode,
    t2.degreeTitle,
    t2.duration,
    t3.coursecommence,
    t3.academicYear AS batchYear,
    t4.oldStudentNo as oldStudentNo
FROM
    (
        SELECT * FROM student
    WHERE
	achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "' AND medium = '" . $_POST['medium'] . "'
    ) AS t1
LEFT JOIN studenttransfer AS t4
ON
    t1.studentNo = t4.studentNo
LEFT JOIN degree AS t2
ON
    t1.degreeCode = t2.degreeCode
LEFT JOIN batch AS t3
ON
    t1.degreeCode = t3.degreeCode AND t1.achedamicYear = t3.academicYear
WHERE
    t1.registered = 'yes'
ORDER BY
    t2.degreeTitle ASC,
    (t1.studentNo);
";
// echo $getSQL["data4GetEnrollment"];
}

if ($_POST['interface'] == 'data4BulkTransfer') {
	$getSQL["data4BulkTransfer"] = "SELECT DISTINCT
    t1.applicationNo,
    t1.studentNo,
    t1.LibraryIdCode,
    t1.studentNIC,
    t1.studentPersonalTitle,
    t1.studentName,
    t1.studentInitial,
    t1.studentPermanentAddress,
    t1.studentContactLan,
    t1.studentContactMobile,
    t1.studentContactEmail,
    t1.achedamicYear,
    t1.medium,
    t2.degreeCode,
    t2.degreeTitle,
    t2.duration,
    t3.coursecommence,
    t3.academicYear AS batchYear
FROM
    (
        SELECT * FROM student
    WHERE
	achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "' AND medium = '" . $_POST['medium'] . "'
    ) AS t1
LEFT JOIN degree AS t2
ON
    t1.degreeCode = t2.degreeCode
LEFT JOIN batch AS t3
ON
    t1.degreeCode = t3.degreeCode AND t1.achedamicYear = t3.academicYear
WHERE
    t1.registered = 'yes'
ORDER BY
    t2.degreeTitle ASC,
    (t1.studentNo);
";
}




//

//getSQL["data4formTransactionType"] = "select departmentCode,departmentTitle from department where facultyCode ='".$selectfaculty."';";

// user activity
$getSQL["data4UserActivityDegree"] = "select distinct degreeCode,degreeTitle from degree;";
$getSQL["data4UserActivity"] = "select distinct userId,userName from user;";

//Report
$getSQL["data4ApplicationComplete"] = "SELECT t1.*,t2.educationFieldName,t2.educationValue,t3.workFieldName,t3.workValue,t4.degreeTitle  FROM applicantspersonal as t1 left join applicantseducation as t2 on t1.applicationNo=t2.applicationNo left join applicantswork as t3 on t1.applicationNo=t3.applicationNo left join degree as t4 on t1.degreeCode=t4.degreeCode order by (t1.temporaryNo);";
$getSQL["data4ApplicationInComplete"] = "SELECT t1.*,t2.educationFieldName,t2.educationValue,t3.workFieldName,t3.workValue,t4.degreeTitle  FROM applicantspersonal as t1 left join applicantseducation as t2 on t1.applicationNo=t2.applicationNo left join applicantswork as t3 on t1.applicationNo=t3.applicationNo where t1.applicationNo!=t2.applicationNo or t1.applicationNo!=t3.applicationNoleft join degree as t4 on t1.degreeCode=t4.degreeCode;";

/******************Add Student Payments - Nishadi****************/
$getSQL["data4StudentPaymentRecord"] = "select t1.studentNo,t1.studentNIC,t1.studentInitial,t1.achedamicYear,t1.medium,t1.paymentCompleted,t1.sarConfirmation, t2.degreeCode,t2.degreeTitle from student as t1 left join degreeforpayment as t2 on t1.degreeCode=t2.degreeCode where t1.registered ='yes' order by t2.degreeTitle ASC,(t1.studentNo);";

$getSQL["data4InstallmentDetails"] = "SELECT i.degreeCode,i.academicYear,i.installmentNo,i.amount,i.paymentdeadline,d.degreeTitle,b.courseFee as icourseFee,b.libraryFee as ilibraryFee FROM installmentdetails as i,degreeforpayment as d, batch as b WHERE d.degreeCode=i.degreeCode and b.degreeCode=i.degreeCode and i.academicYear=b.academicYear;";

$getSQL["data4StudentPaymentDetails"] = "SELECT * FROM `coursefeepayments` ORDER BY studentNo;";

$getSQL["data4StudentPaymentDetails2"] = "SELECT distinct d.degreeCode as degCode2, d.degreeTitle, b.academicYear FROM degreeforpayment as d, batch as b WHERE d.degreeCode=b.degreeCode;";

$getSQL["data4StudentPaymentDetails1"] = "SELECT s.studentNo as stdNo,s.studentInitial,s.studentNIC, s.achedamicYear,s.paymentCompleted as payCom,s.payCompleteDate, s.payCompleteTime,d.degreeCode, d.degreeTitle,b.courseFee,b.libraryFee, b.academicYear as feebatchyear FROM student as s,degreeforpayment as d,batch as b WHERE s.degreeCode=d.degreeCode and d.degreeCode=b.degreeCode and s.degreeCode=b.degreeCode and s.achedamicYear=b.academicYear and s.registered ='yes' GROUP BY s.studentNo;";

// 

// $getSQL["data4StudentPaymentDetails1"]= "SELECT s.studentNo as stdNo,s.studentInitial,s.studentNIC, s.achedamicYear,s.paymentCompleted as payCom,s.payCompleteDate, s.payCompleteTime,d.degreeCode, d.degreeTitle,b.courseFee,b.libraryFee, b.academicYear as feebatchyear FROM student as s,degreeforpayment as d,batch as b WHERE s.degreeCode=d.degreeCode and d.degreeCode=b.degreeCode and s.degreeCode=b.degreeCode and s.achedamicYear=b.academicYear and s.payCompleteDate>='2019-02-08' and s.registered ='yes' GROUP BY s.studentNo;";

// $getSQL["data4StudentPayDetails"]= "SELECT s.studentNo as stdNum,s.studentInitial as stuIni,s.studentNIC as NIC, s.achedamicYear as stuYear,d.degreeCode as stuCode, d.degreeTitle as stuTitle,b.courseFee as stucourseFee ,b.libraryFee as stuLibraryFee, b.academicYear as Stufeebatchyear FROM student as s,degreeforpayment as d,batch as b WHERE s.degreeCode=d.degreeCode and d.degreeCode=b.degreeCode and s.degreeCode=b.degreeCode and s.achedamicYear=b.academicYear and s.registered ='yes' GROUP BY s.studentNo;";



// $getSQL["data4StudentPaymentDetails1"]= "SELECT s.studentNo as stdNo,s.studentInitial,s.studentNIC, s.achedamicYear,s.paymentCompleted as payCom,s.payCompleteDate, s.payCompleteTime,d.degreeCode, d.degreeTitle,b.courseFee,b.libraryFee, b.academicYear as feebatchyear FROM student as s,degreeforpayment as d,batch as b WHERE s.degreeCode=d.degreeCode and d.degreeCode=b.degreeCode and s.degreeCode=b.degreeCode and s.achedamicYear=b.academicYear and s.registered ='yes' GROUP BY s.studentNo;";

/***************************************************************/



//Thiwanka
$getSQL["data4StudentNotificationList"] = "select distinct t1.*,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle from student as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmetype as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode  order by studentNo;";
//$getSQL["data4StudentReport"]="select * from student; ;";
// $getSQL["data4StudentReport"]="select t1.StudentInitial,t1.StudentPersonalTitle,t1.StudentName,t1.StudentNo,t1.studentNIC,t1.studentPermanentAddress,t1.StudentDateofbirth,t1.StudentCitizenship,t1.StudentEmployment,t1.StudentOfficeAddress,t1.Correspondence,t1.StudentContactLan,t1.StudentContactMobile,t1.StudentContactEmail,t1.registered,t1.Notes,t1.ApplicationNo,t1.UniversityCode,t1.FacultyCode,t1.DegreeCode,t1.ProgrammeTypeCode,t1.Medium,t1.AchedamicYear, MID(t1.studentNIC,3,3)as NIC, t2.facultyTitle , t3.universityTitle, t5.degreeTitle, t5.duration, t6.programmeTypeTitle, t8.studentNationality,t8.countryRegion, t10.courseFee from student as t1 left join faculty as t2 on t1.facultyCode = t2.facultyCode left join applicantspersonal as t8 on t1.applicationNo=t8.applicationNo left join university as t3 on t1.universityCode = t3.universityCode left join degree as t5 on t1.degreeCode = t5.degreeCode left join programmetype as t6 on t1.programmeTypeCode = t6.programmeTypeCode left join batch as t10 on t1.degreeCode=t10.degreeCode and t1.achedamicYear=t10.academicYear order by t1.degreeCode,t8.studentNationality;";
$getSQL["data4viewstudent"] = "SELECT t1.degreeCode, t1.achedamicYear,t1.studentNo, mid(t1.studentNIC,3,3) as NIC, t2.degreeTitle, t2.duration from student as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join applicantspersonal as t3 on t1.applicationNo=t3.applicationNo where t3.countryRegion='Local' and t1.registered='yes' group by t1.studentNo order by t1.degreeCode;";

$getSQL["data4formstudentnew"] = "select distinct t1.degreeCode, t1.facultyCode, t1.studentNo,t1.achedamicYear, t2.degreeTitle AS Course, t3.facultyTitle AS Faculty, t4.courseFee AS Course_Fee from student as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join faculty as t3 on t1.facultyCode= t3.facultyCode left join batch as t4 on t1.degreeCode=t4.degreeCode and t1.achedamicYear = t4.academicYear where t1.registered='yes' order by t1.facultyCode,t1.degreeCode ;";

$getSQL["data4StudentReport"] = "select distinct t1.* , t2.facultyTitle , t3.universityTitle, t5.degreeTitle, t6.programmeTypeTitle from  student as t1  left join faculty as t2 on t1.facultyCode = t2.facultyCode left join university as t3 on t1.universityCode = t3.universityCode left join degree as t5 on t1.degreeCode = t5.degreeCode left join programmetype as t6 on t1.programmeTypeCode = t6.programmeTypeCode where t1.registered='yes';";
//$getSQL["data4TotalStudentReport"]="select achedamicYear, studentNo from  student ;";


//$getSQL["data4StudentNotificationList"]="select distinct t1.*,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle from student as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmetype as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode  order by studentNo;"; 
//   $getSQL["data4StudentNotificationList"]="select distinct t1.*,t2.educationFieldName,t2.educationValue,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle from applicantspersonal as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join applicantseducation as t2 on t1.applicationNo=t2.applicationNo left join programmetype as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode  where (t1.selected is null  or t1.selected='')order by applicationNo;"; 

//	$getSQL["data4StudentNotificationList"]="select studentNo,studentName,studentNIC,studentContactLan,studentContactMobile,studentContactEmail from student;"; 

$getSQL["data4Notificationcheckdepartment"] = "select degreeTitle from degree;";
//letter------------------------------------------------
//$getSQL["data4LetterApplicantListPrint"]="select t1.*, t2.degreeTitle,t3.studentNo,t3.registered,t3.medium as medium1 from applicantspersonal as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join student as t3 on t1.applicationNo =t3.applicationNo ORDER BY t1.temporaryNo;";


$getSQL["data4checkdepartmentLetterApplicantListPrint"] = "select *,degreeCode as sdegreeCode from degree ORDER BY degreeTitle ASC;";

if ($_POST['interface'] == 'data4LetterApplicantListPrint') {
	if ($_POST['Doctype'] == 'Selected List') {
		$getSQL["data4LetterApplicantListPrint"] = "SELECT DISTINCT
		t1.*,
		t2.degreeTitle,
		t3.studentNo,
		t3.registered,
		t3.medium AS medium1
	FROM
		applicantspersonal AS t1
	LEFT JOIN degree AS t2
	ON
		t1.degreeCode = t2.degreeCode
	LEFT JOIN student AS t3
	ON
		t1.applicationNo = t3.applicationNo
	WHERE
		t1.achedamicYear = '" . $_POST['achademicYear'] . "' AND t1.degreeCode = (
        SELECT
            degreeCode
        FROM
            degree
        WHERE
            degreeTitle LIKE '" . $_POST['degreeCode'] . "'
        LIMIT 1
    )

	ORDER BY
		t2.degreeTitle ASC,
		(t1.temporaryNo);";
	} else if ($_POST['Doctype'] == 'Registered List') {
		$getSQL["data4LetterApplicantListPrint"] = "SELECT DISTINCT
		t1.*,
		t2.degreeTitle,
		t3.studentNo,
		t3.registered,
		t3.medium AS medium1
	FROM
		applicantspersonal AS t1
	LEFT JOIN degree AS t2
	ON
		t1.degreeCode = t2.degreeCode
	LEFT JOIN student AS t3
	ON
		t1.applicationNo = t3.applicationNo
	WHERE
		t3.achedamicYear = '" . $_POST['achademicYear'] . "' AND t3.degreeCode = (
        SELECT
            degreeCode
        FROM
            degree
        WHERE
            degreeTitle LIKE '" . $_POST['degreeCode'] . "'
        LIMIT 1
    )

	ORDER BY
		t2.degreeTitle ASC,
		(t1.temporaryNo);";
	}
}



//$getSQL["data4LetterApplicantListPrint"]="select distinct t1.*,t3.degreeTitle,t4.studentNo,t4.registered,t4.medium as medium1 from applicantspersonal as t1 left join degree as t3 on t1.degreeCode = t3.degreeCode left join student as t4 on t1.applicationNo=t4.applicationNo ORDER BY `t1`.`temporaryNo` ASC, t3.studentNo ASC  ;";

//$getSQL["data4LetterRegisteredStudentListPrint"]="select distinct t4.*,t3.degreeTitle from student as t4 left join degree as t3 on t4.degreeCode = t3.degreeCode;";

//letter end-----------------------------------------------

$getSQL["data4ForeignReport"] = "SELECT t1.degreeCode,t1.achedamicYear,t2.studentNationality,t2.countryRegion,t3.degreeTitle,t3.duration, MID(t1.studentNIC,3,3)as NIC, t1.applicationNo,  t4.courseFee FROM `student` as t1 left join applicantspersonal as t2 on t1.applicationNo=t2.applicationNo left join degree as t3 on t1.degreeCode=t3.degreeCode left join batch as t4 on t1.degreeCode=t4.degreeCode and t1.achedamicYear=t4.academicYear where t1.registered='yes' group by t1.applicationNo order by t1.degreeCode,t2.studentNationality ;";
//Student Trnansfer------------------------------------
//$getSQL["data4StudentTransfers"]="select * from student;";
$getSQL["data4studentTransfer"] = "select * from student ORDER BY `student`.`studentNo` ASC ;";
//$getSQL["data4Transferprogramme"]="select distinct t1.*,t2.facultyTitle,t3.programmeTypeTitle from degree as t1 left join faculty as t2 on t1.facultyCode= t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode ORDER BY `t1`.`degreeTitle` ASC ;";
$getSQL["data4Transferprogramme"] = "select distinct t1.facultyCode AS tr_facultyCode, t1.programmeTypeCode AS tr_programmeTypeCode, t1.degreeCode AS tr_degreeCode, t1.degreeTitle AS tr_degreeTitle, t2.facultyTitle AS tr_facultyTitle, t3.programmeTypeTitle AS tr_programmeTypeTitle from degree as t1 left join faculty as t2 on t1.facultyCode= t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode ORDER BY `t1`.`degreeTitle` ASC ;";
$getSQL["data4BulkTransferTransferprogramme"] = "select distinct t1.facultyCode AS tr_facultyCode, t1.programmeTypeCode AS tr_programmeTypeCode, t1.degreeCode AS tr_degreeCode, t1.degreeTitle AS tr_degreeTitle, t2.facultyTitle AS tr_facultyTitle, t3.programmeTypeTitle AS tr_programmeTypeTitle from degree as t1 left join faculty as t2 on t1.facultyCode= t2.facultyCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode ORDER BY `t1`.`degreeTitle` ASC ;";

$getSQL["data4applicantTransfer"] = "select * from applicantspersonal  ORDER BY `applicantspersonal`.`applicationNo` ASC ;";
$getSQL["data4DisplayTransferRules"] = "select t1.*,t2.ruleTitle from transfertyperules as t1 left join  transferrules as t2 on t1.ruleID=t2.ruleID";
$getSQL["data4getTransferID"] = "select * from studenttransfer ORDER BY transferID ASC ;";
//Student Trnansfer end------------------------------------

//----------------transfer Rules--------------------------------
$getSQL["data4transferRules"] = "select * from transferrules ORDER BY `transferrules`.`ruleID` ASC";
//----------------transfer Rules End-----------------------------
//---------------------------Return-------------------------------------- 
$getSQL["data4returnListDocument"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnStudent"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnEditApplicant"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnEditStudent"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnEditStudentForm"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnPrintID"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnDocumtMgt"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnNoteAndNotification"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnBudgetDetails"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnPrintLetters"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnStudentsTransfer"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4returnBulkPayment"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";

//-------------------------------Return End------------------------------------


//Repeat exam upload/download----------------------------------------------------------------------
$interfaceTbls["data4DownloadRepdegreeSubjects"] = array("subject");
$interfaceTbls["data4DownloadRepsubjectDetails"] = array("degree");

$nextClientInterface["data4DownloadRepdegreeSubjects"] = "formUploadRepExaminationResults";
$nextClientInterface["data4DownloadRepsubjectDetails"] = "formUploadRepExaminationResults";

$getSQL["data4DownloadRepdegreeSubjects"] = "select distinct facultyCode As userFacultyCode, departmentCode as userReDepCode, degreeCode AS digRepCode, degreeTitle from degree ORDER BY degreeTitle ASC ;";
$getSQL["data4DownloadRepsubjectDetails"] = "select * from subject;";


$interfaceTbls["data4DownloadRepeatStudentList"] = array("studentRepeatSelection");

$nextClientInterface["data4DownloadRepeatStudentList"] = "formRepDownloadList";


if ($_POST['interface'] == 'data4DownloadRepeatStudentList') {
	$getSQL["data4DownloadRepeatStudentList"] = "SELECT ss.studentNo AS studentNoMarks, st.medium AS studentMedium, st.studentName, ss.reason
												FROM studentRepeatSelection ss, student st 
												WHERE ss.studentNo = st.studentNo AND
												ss.degreeCode = '" . $_POST['degreeCode'] . "' AND  
												ss.subjectCode = '" . $_POST['SubjectCode'] . "' AND 
												ss.semester = '" . $_POST['Semester'] . "' AND
												ss.achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY ss.studentNo;";
}

$interfaceTbls["data4DownloadRepeatStudentMedicalList"] = array("studentRepeatSelection");
$nextClientInterface["data4DownloadRepeatStudentMedicalList"] = "formRepDownloadList";

if ($_POST['interface'] == 'data4DownloadRepeatStudentMedicalList') {
	$getSQL["data4DownloadRepeatStudentMedicalList"] = "SELECT ss.studentNo AS studentNoMedical, st.medium AS studentMediumMedical, st.studentName AS studentNameMedical
												FROM studentRepeatSelection ss, student st 
												WHERE ss.studentNo = st.studentNo AND
												ss.degreeCode = '" . $_POST['degreeCode'] . "' AND  
												ss.subjectCode = '" . $_POST['SubjectCode'] . "' AND 
												ss.semester = '" . $_POST['Semester'] . "' AND
												ss.achedamicYear = '" . $_POST['AchademicYear'] . "' AND
												ss.reason='Medical/Other_Reasons'
												ORDER BY ss.studentNo;";
}

$interfaceTbls["uploadRepMarksList"] = array("rep_examresults");
$nextClientInterface["uploadRepMarksList"] = "formUploadRepExaminationResults";


$interfaceTbls["data4RepexamResultsSubWise"] = array("rep_examresults", "subject", "student");
$nextClientInterface["data4RepexamResultsSubWise"] = "formRepDownloadList";

if ($_POST['interface'] == 'data4RepexamResultsSubWise') {

	$getSQL["data4RepexamResultsSubWise"] = "SELECT distinct r.rep_SudentNo AS RepSudentNoSub, r.rep_StudentName, r.rep_Grade, r.rep_Examiner1, r.rep_Examiner2, r.rep_Marks, st.medium AS studentMedium
												FROM rep_examresults r, subject s, student st
												WHERE r.rep_subjectName = s.subjectCode AND r.rep_degreeCode = s.degreeCode AND r.rep_SudentNo = st.studentNo AND 
												s.degreeCode = '" . $_POST['degreeCode'] . "' AND  
												s.subjectCode = '" . $_POST['SubjectCode'] . "' AND 
												s.subjectSemester = '" . $_POST['Semester'] . "' AND
												r.rep_achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY r.rep_SudentNo;";

	// $getSQL["data4RepexamResultsSubWise"] = "SELECT distinct r.rep_SudentNo AS RepSudentNoSub, r.rep_StudentName, r.rep_Grade, r.rep_Examiner1, r.rep_Examiner2, r.rep_Marks, st.medium AS studentMedium
	// FROM rep_examresults r, subject s, student st
	// WHERE r.rep_subjectName = s.subjectCode AND r.rep_degreeCode = s.degreeCode AND r.rep_SudentNo = st.studentNo AND 
	// s.degreeCode = 'MBus' AND  
	// s.subjectCode = 'MBACC51014' AND 
	// s.subjectSemester = '1' AND
	// r.rep_achedamicYear = '2017'
	// ORDER BY r.rep_SudentNo;";

	// if($_POST['interface']=='data4examResultsSubWise'){
	// $getSQL["data4examResultsSubWise"] = "SELECT distinct r.SudentNo AS SudentNoSub, r.StudentName, r.Grade, r.Examiner1, r.Examiner2, r.Marks, st.medium AS studentMedium
	// FROM examresults r, subject s, student st
	// WHERE r.subjectName = s.subjectCode AND r.degreeCode = s.degreeCode AND r.SudentNo = st.studentNo AND 
	// s.degreeCode = '".$_POST['degreeCode']."' AND  
	// s.subjectCode = '".$_POST['SubjectCode']."' AND 
	// s.subjectSemester = '".$_POST['Semester']."' AND
	// r.achedamicYear = '".$_POST['AchademicYear']."'
	// ORDER BY r.SudentNo;";


}



$interfaceTbls["data4RepexamResultsSemWiseSubjects"] = array("subject");
$nextClientInterface["data4RepexamResultsSemWiseSubjects"] = "formRepDownloadList";

if ($_POST['interface'] == 'data4RepexamResultsSemWiseSubjects') {
	$getSQL["data4RepexamResultsSemWiseSubjects"] = "SELECT distinct subjectCode AS subCode, subjectTitle AS subTitle 
												FROM subject
												WHERE degreeCode = '" . $_POST['degreeCode'] . "' AND  
												subjectSemester = '" . $_POST['Semester'] . "'
												ORDER BY subjectCode;";
}


$interfaceTbls["data4RepexamResultsSemWise"] = array("rep_examresults", "subject", "student");
$nextClientInterface["data4RepexamResultsSemWise"] = "formRepDownloadList";

if ($_POST['interface'] == 'data4RepexamResultsSemWise') {
	$getSQL["data4RepexamResultsSemWise"] = "SELECT distinct r.* ,st.medium AS studentSemMedium
												FROM rep_examresults r, subject s , student st
												WHERE r.rep_subjectName = s.subjectCode AND r.rep_degreeCode = s.degreeCode AND r.rep_SudentNo = st.studentNo AND
												s.degreeCode = '" . $_POST['degreeCode'] . "' AND  
												s.subjectSemester = '" . $_POST['Semester'] . "' AND
												r.rep_achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY r.rep_SudentNo, r.rep_subjectName;";
}


$interfaceTbls["data4RepexamResultsSemWiseFinal"] = array("student_final_result");
$nextClientInterface["data4RepexamResultsSemWiseFinal"] = "formRepDownloadList";

if ($_POST['interface'] == 'data4RepexamResultsSemWiseFinal') {
	$getSQL["data4RepexamResultsSemWiseFinal"] = "SELECT distinct studentNo AS finalStudentNoSem, finalGPA 
												FROM student_final_result
												WHERE degreeCode = '" . $_POST['degreeCode'] . "' AND
												achedamicYear = '" . $_POST['AchademicYear'] . "' AND
												semester = '" . $_POST['Semester'] . "'
												ORDER BY studentNo, semester;";
}





$interfaceTbls["data4RepexamResultsYearWise"] = array("examresults", "subject", "student", "rep_examresults");
$nextClientInterface["data4RepexamResultsYearWise"] = "formRepDownloadList";


if ($_POST['interface'] == 'data4RepexamResultsYearWise') {
	$getSQL["data4RepexamResultsYearWise"] = "SELECT * FROM (
SELECT distinct r.SudentNo, r.StudentName, r.achedamicYear, r.subjectName,r.degreeCode,r.Examiner1, r.Examiner2, s.subjectTitle as subTitile ,s.subjectSemester as subSem ,r.Marks, r.Grade,s.credits,st.medium AS studentMedium, 
		CASE 	WHEN r.Grade = 'A+' THEN '4.00'
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
				WHEN r.Grade = 'E' THEN '0.00'END AS GPA 
				FROM examresults r,subject s, student st
				WHERE r.subjectName = s.subjectCode AND
				r.degreeCode=s.degreeCode AND
				st.achedamicYear=s.academicYear AND
				st.studentNo = r.SudentNo AND
				r.Marks!='125' AND
				r.Marks>=50 AND	
				st.degreeCode = '" . $_POST['degreeCode'] . "' AND		
				st.achedamicYear = '" . $_POST['AchademicYear'] . "'	


				
UNION All 
SELECT distinct r.rep_SudentNo as SudentNo, r.rep_StudentName as StudentName, r.rep_achedamicYear as achedamicYear, r.rep_subjectName as subjectName,r.rep_degreeCode as degreeCode,r.rep_Examiner1 as Examiner1, r.rep_Examiner2 as Examiner2, s.subjectTitle as subTitile, s.subjectSemester as subSem,r.rep_Marks as Marks, r.rep_Grade as Grade, s.credits,st.medium AS studentMedium, 
		CASE 	WHEN r.rep_Grade = 'A+' THEN '4.00'
				WHEN r.rep_Grade = 'A' THEN '4.00'
				WHEN r.rep_Grade = 'A-' THEN '3.70'
				WHEN r.rep_Grade = 'B+' THEN '3.30'
				WHEN r.rep_Grade = 'B' THEN '3.00'
				WHEN r.rep_Grade = 'B-' THEN '2.70'
				WHEN r.rep_Grade = 'C+' THEN '2.30'
				WHEN r.rep_Grade = 'C' THEN '2.00'
				WHEN r.rep_Grade = 'C-' THEN '1.70'
				WHEN r.rep_Grade = 'D+' THEN '1.30'
				WHEN r.rep_Grade = 'D' THEN '1.00'
				WHEN r.rep_Grade = 'E' THEN '0.00'END AS GPA
		FROM rep_examresults r, subject s, student st
		WHERE 	r.rep_subjectName = s.subjectCode AND
				r.rep_degreeCode=s.degreeCode AND
				st.achedamicYear=s.academicYear AND
				st.studentNo = r.rep_SudentNo AND
				st.degreeCode = '" . $_POST['degreeCode'] . "' AND		
				st.achedamicYear = '" . $_POST['AchademicYear'] . "'
UNION ALL
SELECT distinct r.SudentNo, r.StudentName, r.achedamicYear, r.subjectName,r.degreeCode,r.Examiner1, r.Examiner2, s.subjectTitle as subTitile ,s.subjectSemester as subSem ,r.Marks, r.Grade,s.credits,st.medium AS studentMedium, 
		CASE 	WHEN r.Grade = 'A+' THEN '4.00'
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
				WHEN r.Grade = 'E' THEN '0.00'END AS GPA 
				FROM examresults r,subject s, student st
				WHERE r.subjectName = s.subjectCode AND
				r.degreeCode=s.degreeCode AND
				st.achedamicYear=s.academicYear AND
				st.studentNo = r.SudentNo AND
				(r.Marks='125' Or r.Marks<50) AND
				st.degreeCode = '" . $_POST['degreeCode'] . "' AND		
				st.achedamicYear = '" . $_POST['AchademicYear'] . "'
                and not exists (
								select * from rep_examresults e 
								where r.subjectName=e.rep_subjectName AND
								r.degreeCode=e.rep_degreeCode AND
								r.SudentNo = e.rep_SudentNo  ))A ORDER BY 1,4,6;";
}


$interfaceTbls["data4RepexamResultsYearWiseSubjects"] = array("subject");

$nextClientInterface["data4RepexamResultsYearWiseSubjects"] = "formRepDownloadList";

if ($_POST['interface'] == 'data4RepexamResultsYearWiseSubjects') {
	$getSQL["data4RepexamResultsYearWiseSubjects"] = "SELECT  distinct subjectCode AS subCodeYear, subjectTitle AS subTitleYear, subjectSemester 
												FROM subject
												WHERE degreeCode = '" . $_POST['degreeCode'] . "' AND
												academicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY subjectSemester ASC;"; // subjectCode
}


$interfaceTbls["data4RepexamResultsYearWiseFinal"] = array("rep_student_final_result");

$nextClientInterface["data4RepexamResultsYearWiseFinal"] = "formRepDownloadList";


if ($_POST['interface'] == 'data4RepexamResultsYearWiseFinal') {
	$getSQL["data4RepexamResultsYearWiseFinal"] = "SELECT distinct  repFi_studentNo AS finalStudentNo, repFi_semester AS finalsemester, repFi_finalGPA, repFi_finalResult   
												FROM rep_student_final_result
												WHERE repFi_degreeCode= '" . $_POST['degreeCode'] . "' AND
												repFi_achedamicYear= '" . $_POST['AchademicYear'] . "'
												ORDER BY  repFi_studentNo, repFi_semester;";
}





















//Repeat exam upload/download----------------------------------------------------------------------





//AB View
$interfaceTbls["data4checkdepartmentABView"] = array("degree");
$nextClientInterface["data4checkdepartmentABView"] = "formABPaymentView";
$getSQL["data4checkdepartmentABView"] = "select * from degree ORDER BY degreeTitle ASC;";


$interfaceTbls["data4returnBulkPayment1"] = array("user,role");
$nextClientInterface["data4returnBulkPayment1"] = "formABPaymentView";
$getSQL["data4returnBulkPayment1"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";

$interfaceTbls["data4StudentPaymentRecordAB"] = array("degreeforpayment,student");
$interfaceTbls["data4StudentPaymentDetailsAB"] = array("coursefeepayments");
$interfaceTbls["data4StudentPaymentDetails1AB"] = array("student,degreeforpayment,batch");
$interfaceTbls["data4StudentPaymentDetails2AB"] = array("degreeforpayment");
$interfaceTbls["data4InstallmentDetailsAB"] = array("installmentdetails");


$nextClientInterface["data4StudentPaymentRecordAB"] = "formABPaymentView";
$nextClientInterface["data4StudentPaymentDetailsAB"] = "formABPaymentView";
$nextClientInterface["data4StudentPaymentDetails1AB"] = "formABPaymentView";
$nextClientInterface["data4StudentPaymentDetails2AB"] = "formABPaymentView";
$nextClientInterface["data4InstallmentDetailsAB"] = "formABPaymentView";

$getSQL["data4StudentPaymentRecordAB"] = "select t1.studentNo,t1.studentNIC,t1.studentInitial,t1.achedamicYear,t1.medium,t1.paymentCompleted,t1.sarConfirmation, t2.degreeCode,t2.degreeTitle from student as t1 left join degreeforpayment as t2 on t1.degreeCode=t2.degreeCode where t1.registered ='yes' order by t2.degreeTitle ASC,(t1.studentNo);";

$getSQL["data4InstallmentDetailsAB"] = "SELECT i.degreeCode,i.academicYear,i.installmentNo,i.amount,i.paymentdeadline,d.degreeTitle,b.courseFee as icourseFee,b.libraryFee as ilibraryFee FROM installmentdetails as i,degreeforpayment as d, batch as b WHERE d.degreeCode=i.degreeCode and b.degreeCode=i.degreeCode and i.academicYear=b.academicYear;";

$getSQL["data4StudentPaymentDetailsAB"] = "SELECT * FROM `coursefeepayments` ORDER BY studentNo;";

$getSQL["data4StudentPaymentDetails2AB"] = "SELECT distinct d.degreeCode as degCode2, d.degreeTitle, b.academicYear FROM degreeforpayment as d, batch as b WHERE d.degreeCode=b.degreeCode;";

$getSQL["data4StudentPaymentDetails1AB"] = "SELECT s.studentNo as stdNo,s.studentInitial,s.studentNIC, s.achedamicYear,s.paymentCompleted as payCom,s.payCompleteDate, s.payCompleteTime,d.degreeCode, d.degreeTitle,b.courseFee,b.libraryFee, b.academicYear as feebatchyear FROM student as s,degreeforpayment as d,batch as b WHERE s.degreeCode=d.degreeCode and d.degreeCode=b.degreeCode and s.degreeCode=b.degreeCode and s.achedamicYear=b.academicYear and s.registered ='yes' GROUP BY s.studentNo;";


//Nirosh 2023-10-23 NEW PAYMENT VIEW

$nextClientInterface["data4InstallmentDetailsABNew"] = "formABPaymentViewNew";
$nextClientInterface["data4checkdepartmentABView16DigitNew"] = "formABPaymentViewNew";
$nextClientInterface["data4returnABView16DigitNew"] = "formABPaymentViewNew";
$nextClientInterface["data4IncomeCategoryDetailsABViewNew"] = "formABPaymentViewNew";
$nextClientInterface["data4NewStudentPaymentDetails"] = "formABPaymentViewNew";

$interfaceTbls["data4InstallmentDetailsABNew"] = array("installmentdetails");
$interfaceTbls["data4checkdepartmentABView16DigitNew"] = array("degree");
$interfaceTbls["data4returnABView16DigitNew"] = array("user,role");
$interfaceTbls["data4IncomeCategoryDetailsABViewNew"] = array("IncomeCategoryDetails", "IncomeCategory", "degree");
$interfaceTbls["data4NewStudentPaymentDetails"] = array("student,degreeforpayment,coursefeepayments");

$getSQL["data4returnABView16DigitNew"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4InstallmentDetailsABNew"] = "SELECT i.degreeCode,i.academicYear,i.installmentNo,i.amount,i.paymentdeadline,d.degreeTitle,b.courseFee as icourseFee,b.libraryFee as ilibraryFee FROM installmentdetails as i,degreeforpayment as d, batch as b WHERE d.degreeCode=i.degreeCode and b.degreeCode=i.degreeCode and i.academicYear=b.academicYear;";
$getSQL["data4checkdepartmentABView16DigitNew"] = "select * from degree ORDER BY degreeTitle ASC;";
$getSQL["data4IncomeCategoryDetailsABViewNew"] = "SELECT DISTINCT t1.* , t2.IncomeCategoryTitle, t3.degreeCode, t3. degreeTitle from IncomeCategoryDetails as t1 
	left join IncomeCategory as t2 on t1.IncomeCategoryCode=t2.IncomeCategoryCode 
	left join degree as t3 on t1.IncomeSourceCode = t3.IncomeSourceCode
	where t1.achedamicYear>='2021' ORDER BY t3.degreeTitle ASC,t1.IncomeCategoryCode;";
if ($_POST['interface'] == 'data4NewStudentPaymentDetails') {
	$where1 = "WHERE t1.registered = 'yes'";
	$where2 = "WHERE t2.registered = 'yes'";

	if($_POST['type']==2){
		$where1 = "WHERE (t1.registered = 'yes' or t1.registered = 'prg')";
	    $where2 = "WHERE (t2.registered = 'yes' or t2.registered = 'prg')";
	}
	$getSQL["data4NewStudentPaymentDetails"] = "SELECT 
			studentNo,
			studentNIC,
			studentInitial,
			achedamicYear,
			medium,
			degreeCode as sdegreeCode,
			degreeTitle,
			universityCode,
			universityTitle,
			facultyCode,
			facultyTitle,
			programmeTypeCode,
			programmeTypeTitle,
			applicationNo,
			studentName,
			studentPersonalTitle,
			studentDateofbirth,
			studentNationality,
			studentCitizenship,
			studentEmployment,
			studentPermanentAddress,
			studentOfficeAddress,
			correspondence,
			studentContactLan,
			studentContactMobile,
			studentContactEmail,
			LibraryIdCode,
			SUM(amount) AS amount
	
	 FROM
	(
		SELECT
			t1.studentNo,
			t1.studentNIC,
			t1.studentInitial,
			t1.achedamicYear,
			t1.medium,
			t2.degreeCode,
			t2.degreeTitle,
			t6.universityCode,
			t6.universityTitle,
			t5.facultyCode,
			t5.facultyTitle,
			t4.programmeTypeCode,
			t4.programmeTypeTitle,
			t1.applicationNo,
			t1.studentName,
			t1.studentPersonalTitle,
			t1.studentDateofbirth,
			t1.studentNationality,
			t1.studentCitizenship,
			t1.studentEmployment,
			t1.studentPermanentAddress,
			t1.studentOfficeAddress,
			t1.correspondence,
			t1.studentContactLan,
			t1.studentContactMobile,
			t1.studentContactEmail,
			t1.LibraryIdCode,
			SUM(t3.amount) AS amount
		FROM
			(SELECT * FROM student WHERE achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode =  '" . $_POST['degreeCode'] . "' AND medium='" . $_POST['medium'] . "') AS t1
		LEFT JOIN (SELECT * FROM degreeforpayment WHERE degreeCode  = '" . $_POST['degreeCode'] . "' LIMIT 1 )  AS t2 ON t1.degreeCode = t2.degreeCode
		LEFT JOIN coursefeepayments AS t3 ON t1.studentNo = t3.studentNo
		LEFT JOIN programmetype AS t4 ON t1.programmeTypeCode = t4.programmeTypeCode
		LEFT JOIN faculty AS t5 ON t1.facultyCode = t5.facultyCode
		LEFT JOIN university AS t6 ON t1.universityCode = t6.universityCode
		".$where1."
		GROUP BY t1.studentNo
	
		UNION ALL
	
		SELECT
			t2.studentNo,
			t2.studentNIC,
			t2.studentInitial,
			t2.achedamicYear,
			t2.medium,
			t3.degreeCode,
			t3.degreeTitle,
			t6.universityCode,
			t6.universityTitle,
			t5.facultyCode,
			t5.facultyTitle,
			t4.programmeTypeCode,
			t4.programmeTypeTitle,
			t2.applicationNo,
			t2.studentName,
			t2.studentPersonalTitle,
			t2.studentDateofbirth,
			t2.studentNationality,
			t2.studentCitizenship,
			t2.studentEmployment,
			t2.studentPermanentAddress,
			t2.studentOfficeAddress,
			t2.correspondence,
			t2.studentContactLan,
			t2.studentContactMobile,
			t2.studentContactEmail,
			t2.LibraryIdCode,		
			SUM(t1.Pay_amount) AS amount
		FROM
			(SELECT * FROM student WHERE achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "'  AND medium='" . $_POST['medium'] . "') AS t2
		LEFT JOIN (SELECT * FROM StudentPayment LEFT JOIN IncomeCategory ON StudentPayment.Pay_CategoryCode=IncomeCategory.IncomeCategoryCode WHERE Response_Progress = '1' AND IncomeCategory.type='coursefee') AS t1 ON t1.Pay_studentNo = t2.studentNo
		LEFT JOIN (SELECT * FROM degree WHERE degreeCode  = '" . $_POST['degreeCode'] . "' LIMIT 1 )  AS t3 ON t1.Pay_sourceCode = t3.IncomeSourceCode AND t2.degreeCode = t3.degreeCode
		LEFT JOIN programmetype AS t4 ON t2.programmeTypeCode = t4.programmeTypeCode
		LEFT JOIN faculty AS t5 ON t2.facultyCode = t5.facultyCode
		LEFT JOIN university AS t6 ON t2.universityCode = t6.universityCode
		".$where2."
		GROUP BY t2.studentNo
	) AS combined_results
	GROUP BY studentNo
	ORDER BY studentNo;
	";

	// echo $getSQL["data4NewStudentPaymentDetails"];
}

//Nirosh 2023-10-23 END NEW PAYMENT VIEW



$interfaceTbls["data4checkdepartmentPayments"] = array("degree");

$nextClientInterface["data4checkdepartmentPayments"] = "formABPaymentView";

$getSQL["data4checkdepartmentPayments"] = "select * from degree ORDER BY degreeTitle ASC;";


$interfaceTbls["data4checkUserPayments"] = array("user", "role");

$nextClientInterface["data4checkUserPayments"] = "formABPaymentView";

$getSQL["data4checkUserPayments"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";



$interfaceTbls["data4getDegrees"] = array("degree");

$nextClientInterface["data4getDegrees"] = "formWifiCreation";

$getSQL["data4getDegrees"] = "select * from degree ORDER BY degreeTitle ASC;";



$interfaceTbls["data4checkdepartmentPrintIDList"] = array("degree");

$nextClientInterface["data4checkdepartmentPrintIDList"] = "formPrintStudentID";

$getSQL["data4checkdepartmentPrintIDList"] = "select * from degree ORDER BY degreeTitle ASC;";


$interfaceTbls["data4checkUserPrintIDList"] = array("user", "role");

$nextClientInterface["data4checkUserPrintIDList"] = "formPrintStudentID";

$getSQL["data4checkUserPrintIDList"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";



$interfaceTbls["data4checkdepartmentPreRegStudent"] = array("degree");

$nextClientInterface["data4checkdepartmentPreRegStudent"] = "formPreRegStudent";

$getSQL["data4checkdepartmentPreRegStudent"] = "select * from degree ORDER BY degreeTitle ASC;";


$interfaceTbls["data4checkUserPreRegStudent"] = array("user", "role");

$nextClientInterface["data4checkUserPreRegStudent"] = "formPreRegStudent";

$getSQL["data4checkUserPreRegStudent"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";


$interfaceTbls["data4returnPreRegStudent"] = array("user,role");
$nextClientInterface["data4returnPreRegStudent"] = "formPreRegStudent";
$getSQL["data4returnPreRegStudent"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";

$interfaceTbls["data4PreRegStudent"] = array("degree", "student", "batch");
$nextClientInterface["data4PreRegStudent"] = "formPreRegStudent";
if ($_POST['interface'] == 'data4PreRegStudent') {
	$getSQL["data4PreRegStudent"] = "SELECT DISTINCT
    t1.applicationNo,
    t1.studentNo,
    t1.LibraryIdCode,
    t1.studentNIC,
    t1.studentPersonalTitle,
    t1.studentName,
    t1.studentInitial,
    t1.studentPermanentAddress,
    t1.studentContactLan,
    t1.studentContactMobile,
    t1.studentContactEmail,
    t1.RegisteredDate,
    t1.achedamicYear,
    t1.medium,
    t2.degreeCode,
    t2.degreeTitle,
    t2.duration,
    t3.coursecommence,
    t3.academicYear AS batchYear,
    t5.applicationFee as applicationFee

FROM
    (
        SELECT * FROM student
    WHERE
	achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "' AND medium = '" . $_POST['medium'] . "'
    ) AS t1
LEFT JOIN degree AS t2
ON
    t1.degreeCode = t2.degreeCode
LEFT JOIN batch AS t3
ON
    t1.degreeCode = t3.degreeCode AND t1.achedamicYear = t3.academicYear
LEFT JOIN (select Pay_studentNo,sum(Pay_amount) as applicationFee from StudentPayment where Pay_CategoryCode = '001') AS t5
ON
    t1.applicationNo = t5.Pay_studentNo
WHERE
    t1.registered = 'prg'
ORDER BY
    t2.degreeTitle ASC,
    (t1.studentNo);
";
}




//---------------------------------------------------------------------PhD/MPhil--------------------------------------------------		

//Research ApplicantList
$interfaceTbls["data4ResearchApplicantList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree");
$interfaceTbls["data4Researchcheckdepartment"] = array("degree");
$interfaceTbls["data4ResearchcheckUser"] = array("user");

$nextClientInterface["data4ResearchApplicantList"] = "formApplicantResearchList";
$nextClientInterface["data4Researchcheckdepartment"] = "formApplicantResearchList";
$nextClientInterface["data4ResearchcheckUser"] = "formApplicantResearchList";

$getSQL["data4ResearchApplicantList"] = "select distinct t1.*,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle from applicantspersonal as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmetype as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode where t1.degreeCode in ('MPhil','PhD') AND t1.sendToDep='' order by t6.degreeTitle ASC ,(t1.temporaryNo);";

$getSQL["data4Researchcheckdepartment"] = "select * from degree ORDER BY degreeTitle ASC;";
$getSQL["data4ResearchcheckUser"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";



//Research ApplicantSelection		
$interfaceTbls["data4ResearchApplicantSelection"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree", "applicantseducation");
$interfaceTbls["data4ResearchcheckdepartmentSelection"] = array("degree");
$interfaceTbls["data4ResearchcheckUserSelection"] = array("user");

$nextClientInterface["data4ResearchApplicantSelection"] = "formApplicantResearchSelection";
$nextClientInterface["data4ResearchcheckdepartmentSelection"] = "formApplicantResearchSelection";
$nextClientInterface["data4ResearchcheckUserSelection"] = "formApplicantResearchSelection";

$getSQL["data4ResearchApplicantSelection"] = "select distinct t1.*,t6.degreeTitle,t7.programmeTypeTitle,t8.facultyTitle,t9.universityTitle from applicantspersonal as t1 left join degree as t6 on t1.degreeCode=t6.degreeCode left join programmetype as t7 on t1.programmeTypeCode =t7.programmeTypeCode left join faculty as t8 on t1.facultyCode = t8.facultyCode left join university as t9 on t1.universityCode=t9.universityCode  where (t1.selected is null  or t1.selected='') AND t1.degreeCode in ('MPhil','PhD')  AND t1.sendToDep='YES' order by t6.degreeTitle ASC ,(t1.temporaryNo);";

$getSQL["data4ResearchcheckdepartmentSelection"] = "select * from degree ORDER BY degreeTitle ASC;";

$getSQL["data4ResearchcheckUserSelection"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";




//Research Applicant Register
$interfaceTbls["data4ResearchLastRegistrationNo"] = array("student", "degree", "programmetype");

$nextClientInterface["data4ResearchLastRegistrationNo"] = "formSelectedResearchStudentList";

$getSQL["data4ResearchLastRegistrationNo"] = "select distinct t1.*, t2.degreeTitle, t3.programmeTypeTitle from student as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join programmetype as t3 on t1.programmeTypeCode=t3.programmeTypeCode where t1.degreeCode in ('MPhil','PhD') ORDER BY t2.degreeTitle ASC,t1.studentNo ASC";


$interfaceTbls["data4ResearchSelectedStudentList"] = array("applicantspersonal", "university", "faculty", "programmetype", "degree", "student");

$nextClientInterface["data4ResearchSelectedStudentList"] = "formSelectedResearchStudentList";

$getSQL["data4ResearchSelectedStudentList"] = "select distinct t1.universityCode,t1.facultyCode,t1.programmeTypeCode,t1.degreeCode,t1.applicationNo,t1.studentNIC,t1.studentName,t1.studentPersonalTitle,t1.studentInitial,t1.studentDateofbirth,t1.studentNationality,t1.studentCitizenship,t1.studentEmployment,t1.studentPermanentAddress,t1.studentOfficeAddress,t1.correspondence,t1.studentContactLan,t1.studentContactMobile,t1.studentContactEmail,t1.achedamicYear,t1.selected,t1.streamName,t1.medium as appmedium,
	t2.degreeTitle, 
	t3.programmeTypeTitle,
	t4.facultyTitle,
	t5.universityTitle,
	t6.studentNo,t6.medium
	from applicantspersonal as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode
	left join programmetype as t3 on t1.programmeTypeCode =t3.programmeTypeCode
	left join faculty as t4 on t1.facultyCode = t4.facultyCode
	left join university as t5 on t1.universityCode=t5.universityCode 
	left join student as t6 on  t1.studentNIC= t6.studentNIC and t1.degreeCode=t6.degreeCode and t1.programmeTypeCode= t6.programmeTypeCode
	where t1.selected='yes' AND t1.degreeCode in ('MPhil','PhD') order by t2.degreeTitle ASC, t6.studentNo;";


$interfaceTbls["data4ResearchreturnStudent"] = array("user,role");
$nextClientInterface["data4ResearchreturnStudent"] = "formSelectedResearchStudentList";
$getSQL["data4ResearchreturnStudent"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";







//Research StudentProfile
$interfaceTbls["data4DisplayResearchStudentNoforProfile"] = array("student");

$nextClientInterface["data4DisplayResearchStudentNoforProfile"] = "formResearchStudentProfileDeteils";


$getSQL["data4DisplayResearchStudentNoforProfile"] = "select distinct studentNo AS profile_StudNo , applicationNo AS profile_ApplicationNo from student  WHERE studentNo = 'FGS/CT/PhD/2018/001' ORDER BY studentNo ASC;";



$interfaceTbls["data4DisplayResearchApplicatProfile"] = array("applicantspersonal");

$nextClientInterface["data4DisplayResearchApplicatProfile"] = "formResearchStudentProfileDeteils";


$getSQL["data4DisplayResearchApplicatProfile"] = "SELECT applicationNo as stdProfileapplicationNo FROM applicantspersonal;";



$interfaceTbls["data4ResearchStudentProfileDeteilsCheckUser"] = array("user", "role");

$nextClientInterface["data4ResearchStudentProfileDeteilsCheckUser"] = "formResearchStudentProfileDeteils";

$getSQL["data4ResearchStudentProfileDeteilsCheckUser"] = "SELECT role.roleId, role.roleName, user.userId, user.userName FROM user LEFT JOIN role ON user.roleId=role.roleId;";



$interfaceTbls["data4ResearchStudentProfileDetails"] = array("student", "department", "faculty", "programmetype", "payment", "newcourseunit", "degree", "applicantspersonal", "applicantseducation", "applicantswork");

$nextClientInterface["data4ResearchStudentProfileDetails"] = "formResearchStudentProfileDeteils";


if ($_POST['interface'] == 'data4ResearchStudentProfileDetails') {
	$getSQL["data4ResearchStudentProfileDetails"] = "select distinct t1.universityCode, t1.studentNo ,t1.studentNIC, t1.studentName, t1.studentPersonalTitle, t1.studentNationality, t1.correspondence, t1.studentCitizenship, t1.studentOfficeAddress, t1.studentDateofbirth, t1.achedamicYear, t1.medium, t1.studentPermanentAddress, t1.studentContactLan, t1.studentContactMobile,  t1.studentContactEmail, t1.degreeCode, t1.LibraryIdCode, t2.facultyTitle, t2.facultyCode , t4.programmeTypeTitle, t4.programmeTypeCode, t5.degreeTitle, t6.studentEmployment , t6.studentInitial,t1.applicationNo 
											from student as t1 
											left join faculty as t2 on t1.facultyCode= t2.facultyCode 
											left join programmetype as t4 on t1.programmeTypeCode = t4.programmeTypeCode 
											left join degree as t5 on t1.degreeCode = t5.degreeCode 
											left join applicantspersonal as t6 on t1.studentNIC = t6.studentNIC 
											 WHERE t1.studentNo = 'FGS/CT/PhD/2018/001'
											ORDER BY t1.studentNo ASC;";
}

$interfaceTbls["data4ResearchprofileEducationalDetails"] = array("applicantseducation");

$nextClientInterface["data4ResearchprofileEducationalDetails"] = "formResearchStudentProfileDeteils";


if ($_POST['interface'] == 'data4ResearchprofileEducationalDetails') {
	$getSQL["data4ResearchprofileEducationalDetails"] = "select educationFieldName, educationValue, educationPin from applicantseducation  where applicationNo= '" . $_POST['applicationNo'] . "';";
}

$interfaceTbls["data4ResearchprofilerefreeDetails"] = array("applicantswork");

$nextClientInterface["data4ResearchprofilerefreeDetails"] = "formResearchStudentProfileDeteils";

if ($_POST['interface'] == 'data4ResearchprofilerefreeDetails') {
	$getSQL["data4ResearchprofilerefreeDetails"] = "select workFieldName, workValue, workPin from applicantswork  where applicationNo= '" . $_POST['applicationNo'] . "';";
}


$interfaceTbls["addSelectedResearchStudentList"] = array("student");
$nextClientInterface["addSelectedResearchStudentList"] = "formSelectedResearchStudentList";



//Re-Repeat Examination

$interfaceTbls["data4DownloadReRepeatdegreeSubjects"] = array("subject");
$interfaceTbls["data4DownloadReRepeatsubjectDetails"] = array("degree");

$nextClientInterface["data4DownloadReRepeatdegreeSubjects"] = "formUploadReRepeatExaminationResults";
$nextClientInterface["data4DownloadReRepeatsubjectDetails"] = "formUploadReRepeatExaminationResults";

$getSQL["data4DownloadReRepeatdegreeSubjects"] = "select distinct facultyCode As userFacultyCode,departmentCode as userReRepDepCode, degreeCode AS digRepCode, degreeTitle from degree ORDER BY degreeTitle ASC ;";
$getSQL["data4DownloadReRepeatsubjectDetails"] = "select * from subject;";



$interfaceTbls["data4DownloadReRepeatStudentList"] = array("ReRepeatSelection");

$nextClientInterface["data4DownloadReRepeatStudentList"] = "formReRepeatDownloadList";


if ($_POST['interface'] == 'data4DownloadReRepeatStudentList') {
	$getSQL["data4DownloadReRepeatStudentList"] = "SELECT ss.ReRep_studentNo AS studentNoMarks, st.medium AS studentMedium, st.studentName
												FROM ReRepeatSelection ss, student st 
												WHERE ss.ReRep_studentNo = st.studentNo AND
												ss.ReRep_degreeCode = '" . $_POST['degreeCode'] . "' AND  
												ss.ReRep_subjectCode = '" . $_POST['SubjectCode'] . "' AND 
												ss.ReRep_semester = '" . $_POST['Semester'] . "' AND
												ss.ReRep_achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY ss.ReRep_studentNo;";
}





$interfaceTbls["uploadReRepMarksList"] = array("ReRepeat_examresults");
$nextClientInterface["uploadReRepMarksList"] = "formUploadReRepeatExaminationResults";



$interfaceTbls["data4ReRepeatexamResultsSubWise"] = array("ReRepeat_examresults", "subject", "student");
$nextClientInterface["data4ReRepeatexamResultsSubWise"] = "formReRepeatDownloadList";

if ($_POST['interface'] == 'data4ReRepeatexamResultsSubWise') {

	$getSQL["data4ReRepeatexamResultsSubWise"] = "SELECT distinct r.ReRep_SudentNo AS RepSudentNoSub, r.ReRep_StudentName, r.ReRep_Grade, r.ReRep_Examiner1, r.ReRep_Examiner2, r.ReRep_Marks, st.medium AS studentMedium
												FROM ReRepeat_examresults r, subject s, student st
												WHERE r.ReRep_subjectName = s.subjectCode AND r.ReRep_degreeCode = s.degreeCode AND r.ReRep_SudentNo = st.studentNo AND 
												s.degreeCode = '" . $_POST['degreeCode'] . "' AND  
												s.subjectCode = '" . $_POST['SubjectCode'] . "' AND 
												s.subjectSemester = '" . $_POST['Semester'] . "' AND
												r.ReRep_achedamicYear = '" . $_POST['AchademicYear'] . "'
												ORDER BY r.ReRep_SudentNo;";
}

$interfaceTbls["data4SocialScienceRegList"] = array("degree", "student", "batch");
$nextClientInterface["data4SocialScienceRegList"] = "formSSStudentList";

// if($_POST['interface']=='data4SocialScienceRegList'){

$getSQL["data4SocialScienceRegList"] = "select distinct t1.applicationNo,t1.studentNo,t1.LibraryIdCode,t1.studentNIC,t1.studentPersonalTitle,t1.studentName,t1.studentInitial,t1.studentPermanentAddress,t1.studentContactLan, t1.studentContactMobile,t1.studentContactEmail, t1.achedamicYear,t1.medium,t2.degreeCode,t2.degreeTitle,t2.duration,t3.coursecommence,t3.academicYear as batchYear from student as t1 left join degree as t2 on t1.degreeCode=t2.degreeCode left join batch as t3 on t1.degreeCode=t3.degreeCode and t1.achedamicYear=t3.academicYear where t1.registered ='yes' AND t2.facultyCode='FAC03' order by t2.degreeTitle ASC , (t1.studentNo);";

// }	

$interfaceTbls["data4IncomeCategoryDetails"] = array("IncomeCategory");
$nextClientInterface["data4IncomeCategoryDetails"] = "formIncomeCategoryDetails";

$getSQL["data4IncomeCategoryDetails"] = "SELECT * FROM IncomeCategory;";

$interfaceTbls["data4incomeSource"] = array("degree");
$nextClientInterface["data4incomeSource"] = "formIncomeCategoryDetails";
$getSQL["data4incomeSource"] = "select DISTINCT degreeCode , degreeTitle , IncomeSourceCode from degree ORDER BY degree.degreeTitle ASC;";

//addIncomeCategoryDetails	

$interfaceTbls["addIncomeCategoryDetails"] = array("IncomeCategoryDetails");
$nextClientInterface["addIncomeCategoryDetails"] = "formIncomeCategoryDetails";



//2022-02-11-----16Digit ----------------------------Clerk View--------------------------------------------------------------------------




$interfaceTbls["data4GetPaid16DigitList"] = array("StudentPayment", "student", "degree", "programmetype", "faculty", "university");

$nextClientInterface["data4GetPaid16DigitList"] = "form16DigitPaidList";

$getSQL["data4GetPaid16DigitList"] = "SELECT distinct t1.*, t2.* , t3.degreeTitle, t4.programmeTypeTitle,t5.facultyTitle,	t6.universityTitle FROM StudentPayment as t1 
	left join student as t2 on t1.Pay_studentNo=t2.studentNo 
	left join degree as t3 on t1.Pay_sourceCode=t3.IncomeSourceCode AND t2.degreeCode=t3.degreeCode
	left join programmetype as t4 on t2.programmeTypeCode =t4.programmeTypeCode
	left join faculty as t5 on t2.facultyCode = t5.facultyCode
	left join university as t6 on t2.universityCode=t6.universityCode 
	where t1.Response_Progress='1' AND t2.registered='yes' 
	ORDER BY t1.Pay_sourceCode ASC ,t1.Pay_studentNo;";


$interfaceTbls["data4checkUserPaid16DigitList"] = array("user", "role");
$nextClientInterface["data4checkUserPaid16DigitList"] = "form16DigitPaidList";
$getSQL["data4checkUserPaid16DigitList"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";


$interfaceTbls["data4checkdepartment16DigitList"] = array("degree");
$nextClientInterface["data4checkdepartment16DigitList"] = "form16DigitPaidList";
$getSQL["data4checkdepartment16DigitList"] = "select * from degree ORDER BY degreeTitle ASC;";


$interfaceTbls["data4return16DigitList"] = array("user,role");
$nextClientInterface["data4return16DigitList"] = "form16DigitPaidList";
$getSQL["data4return16DigitList"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";



//2022-02-12-----16Digit ----------------------------AB View--------------------------------------------------------------------------


$interfaceTbls["data4checkdepartmentABView16Digit"] = array("degree");
$nextClientInterface["data4checkdepartmentABView16Digit"] = "form16DigitABPaymentView";
$getSQL["data4checkdepartmentABView16Digit"] = "select * from degree ORDER BY degreeTitle ASC;";


$interfaceTbls["data4returnABView16Digit"] = array("user,role");
$nextClientInterface["data4returnABView16Digit"] = "form16DigitABPaymentView";
$getSQL["data4returnABView16Digit"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";


$interfaceTbls["data4IncomeCategoryDetailsABView"] = array("IncomeCategoryDetails", "IncomeCategory", "degree");

$nextClientInterface["data4IncomeCategoryDetailsABView"] = "form16DigitABPaymentView";

$getSQL["data4IncomeCategoryDetailsABView"] = "SELECT DISTINCT t1.* , t2.IncomeCategoryTitle, t3.degreeCode, t3. degreeTitle from IncomeCategoryDetails as t1 
	left join IncomeCategory as t2 on t1.IncomeCategoryCode=t2.IncomeCategoryCode 
	left join degree as t3 on t1.IncomeSourceCode = t3.IncomeSourceCode
	where t1.achedamicYear>='2021' ORDER BY t3.degreeTitle ASC,t1.IncomeCategoryCode;";


$interfaceTbls["data416DigitStudentPaymentDetailsABView"] = array("StudentPayment", "student", "degree");

$nextClientInterface["data416DigitStudentPaymentDetailsABView"] = "form16DigitABPaymentView";

//$getSQL["data416DigitStudentPaymentDetailsABView"]="SELECT t1.*, t2.studentPersonalTitle, t2.studentInitial,t2.studentNIC FROM StudentPayment as t1 left join student as t2 on t1.Pay_studentNo=t2.studentNo where t1.Response_Progress='1' AND t2.registered='yes' ORDER BY t1.Pay_sourceCode ASC;";

//$getSQL["data416DigitStudentPaymentDetailsABView"]="SELECT DISTINCT t1.*, t2.studentPersonalTitle, t2.studentInitial,t2.studentNIC,t2.achedamicYear as payachedamicYear,t2.degreeCode,t3.degreeTitle,t3.IncomeSourceCode FROM StudentPayment as t1 left join student as t2 on t1.Pay_studentNo=t2.studentNo left join degree as t3 on t2.degreeCode=t3.degreeCode where t1.Response_Progress='1' AND t2.registered='yes' ORDER BY t1.Pay_sourceCode ASC;";


//SELECT t1.*,t2.IncomeCategoryTitle AS PayTitile FROM StudentPayment as t1 left join IncomeCategory as t2 on t1.Pay_CategoryCode=t2.IncomeCategoryCode ORDER BY t1.Pay_Time_Stamp ASC


// $getSQL["data416DigitStudentPaymentDetailsABView"]="SELECT DISTINCT t1.*, t2.studentPersonalTitle, t2.studentInitial,t2.studentNIC , t3.degreeTitle, t3.degreeCode,t3.IncomeSourceCode as PayIncomeSourceCode FROM StudentPayment as t1 
// left join student as t2 on t1.Pay_studentNo=t2.studentNo 
// left join degree as t3 on t1.Pay_sourceCode=t3.IncomeSourceCode AND t2.degreeCode=t3.degreeCode
// where t1.Response_Progress='1' AND t2.registered='yes' 
// ORDER BY t1.Pay_sourceCode ASC ,t1.Pay_studentNo;";


$getSQL["data416DigitStudentPaymentDetailsABView"] = "SELECT distinct t1.*, t2.* , t3.degreeTitle, t4.programmeTypeTitle,t5.facultyTitle,	t6.universityTitle FROM StudentPayment as t1 
	left join student as t2 on t1.Pay_studentNo=t2.studentNo 
	left join degree as t3 on t1.Pay_sourceCode=t3.IncomeSourceCode AND t2.degreeCode=t3.degreeCode
	left join programmetype as t4 on t2.programmeTypeCode =t4.programmeTypeCode
	left join faculty as t5 on t2.facultyCode = t5.facultyCode
	left join university as t6 on t2.universityCode=t6.universityCode 
	where t1.Response_Progress='1' AND t2.registered='yes' 
	ORDER BY t1.Pay_sourceCode ASC ,t1.Pay_studentNo;";



// SELECT distinct t1.*, t2.* , t3.degreeTitle, t4.programmeTypeTitle,t5.facultyTitle,	t6.universityTitle FROM StudentPayment as t1 
// left join student as t2 on t1.Pay_studentNo=t2.studentNo 
// left join degree as t3 on t1.Pay_sourceCode=t3.IncomeSourceCode AND t2.degreeCode=t3.degreeCode
// left join programmetype as t4 on t2.programmeTypeCode =t4.programmeTypeCode
// left join faculty as t5 on t2.facultyCode = t5.facultyCode
// left join university as t6 on t2.universityCode=t6.universityCode 
// where t1.Response_Progress='1' AND t2.registered='yes' AND t5.facultyTitle="Faculty of Social Sciences" and t2.achedamicYear="2021"
// ORDER BY t1.Pay_sourceCode ASC ,t1.Pay_studentNo


$interfaceTbls["data416DigitCAlPaidAmountABView"] = array("StudentPayment", "student", "degree");

$nextClientInterface["data416DigitCAlPaidAmountABView"] = "form16DigitABPaymentView";


$getSQL["data416DigitCAlPaidAmountABView"] = "SELECT DISTINCT t1.*, t2.studentNo as ssNo , t3.degreeCode as paydegreeCode,t3.IncomeSourceCode as PayIncomeSourceCode FROM StudentPayment as t1 
	left join student as t2 on t1.Pay_studentNo=t2.studentNo 
	left join degree as t3 on t1.Pay_sourceCode=t3.IncomeSourceCode AND t2.degreeCode=t3.degreeCode
	where t1.Response_Progress='1' AND t2.registered='yes' 
	ORDER BY t1.Pay_sourceCode ASC ,t1.Pay_studentNo;";




//2023-10-26 Exam Applied List

$nextClientInterface["data4returnExamAppliedList"] = "formExamAppliedList";
$nextClientInterface["data4checkdepartmentExamAppliedList"] = "formExamAppliedList";
$nextClientInterface["data4checkdepartmentExamAppliedListForStiker"] = "formExamAppliedListForStiker";
$nextClientInterface["data4checkdepartmentExamAppliedListForRawMarkSheet"] = "formExamAppliedListForRawMarkSheet";
$nextClientInterface["data4checkUserExamAppliedList"] = "formExamAppliedList";

$nextClientInterface["data4ExamAppliedListSubject"] = "formExamAppliedListSubject";
$nextClientInterface["data4ExamAppliedListSubjectForStiker"] = "formExamAppliedListSubjectForStiker";
$nextClientInterface["data4ExamAppliedListSubjectForRawMarkSheet"] = "formExamAppliedListSubjectForRawMarkSheet";
$nextClientInterface["data4ExamAppliedListStudents"] = "formExamAppliedListStudent";
$nextClientInterface["data4ExamAppliedListStudentsForStiker"] = "formExamAppliedListStudentForStiker";
$nextClientInterface["data4ExamAppliedListStudentsForRawMarkSheet"] = "formExamAppliedListStudentForRawMarkSheet";

$nextClientInterface["data4checkdepartmentExamAppliedListForStudentsResultUpdate"] = "formExamAppliedListForStudentsResultUpdate";
$nextClientInterface["data4checkUserExamAppliedListForStudentsResultUpdate"] = "formExamAppliedListForStudentsResultUpdate";
$nextClientInterface["data4checkUserExamAppliedListForFinalResult"] = "formExamAppliedListForGetFinalResult";

$nextClientInterface["data4ExamAppliedListForStudentsResultUpdate"] = "formExamAppliedListForStudentsResultUpdate";
$nextClientInterface["data4ExamAppliedListForFinalResult"] = "formExamAppliedListForGetFinalResult";
$nextClientInterface["data4ExamAppliedListSubjectForStudentsResultUpdate"] = "formExamAppliedListSubjectForStudentsResultUpdate";


$interfaceTbls["data4returnExamAppliedList"] = array("user,role");
$interfaceTbls["data4checkUserExamAppliedList"] = array("user", "role");
$interfaceTbls["data4checkUserExamAppliedListForStudentsResultUpdate"] = array("user", "role");
$interfaceTbls["data4checkUserExamAppliedListForFinalResult"] = array("user", "role");
$interfaceTbls["data4checkdepartmentExamAppliedList"] = array("degree");
$interfaceTbls["data4checkdepartmentExamAppliedListForStiker"] = array("degree");
$interfaceTbls["data4checkdepartmentExamAppliedListForRawMarkSheet"] = array("degree");


$interfaceTbls["data4checkdepartmentExamAppliedListForStudentsResultUpdate"] = array("degree");
$interfaceTbls["data4ExamAppliedListSubject"] = array("subject");
$interfaceTbls["data4ExamAppliedListSubjectForStiker"] = array("subject");
$interfaceTbls["data4ExamAppliedListSubjectForRawMarkSheet"] = array("subject");

$interfaceTbls["data4ExamAppliedListSubjectForStudentsResultUpdate"] = array("subject");
$interfaceTbls["data4ExamAppliedListStudents"] = array("studentselection");
$interfaceTbls["data4ExamAppliedListStudentsForStiker"] = array("studentselection");
$interfaceTbls["data4ExamAppliedListStudentsForRawMarkSheet"] = array("studentselection");

$interfaceTbls["data4ExamAppliedListForStudentsResultUpdate"] = array("studentselection");
$interfaceTbls["data4ExamAppliedListForFinalResult"] = array("studentselection");


$getSQL["data4returnExamAppliedList"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4checkUserExamAppliedList"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";
$getSQL["data4checkUserExamAppliedListForStudentsResultUpdate"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";

$getSQL["data4checkUserExamAppliedListForFinalResult"] = "select t1.*,t2.roleName from user as t1 left join role as t2 on t1.roleId=t2.roleId;";

$getSQL["data4checkdepartmentExamAppliedList"] = "select * from degree ORDER BY degreeTitle ASC;";
$getSQL["data4checkdepartmentExamAppliedListForStiker"] = "select * from degree ORDER BY degreeTitle ASC;";
$getSQL["data4checkdepartmentExamAppliedListForRawMarkSheet"] = "select * from degree ORDER BY degreeTitle ASC;";

$getSQL["data4checkdepartmentExamAppliedListForStudentsResultUpdate"] = "select * from degree ORDER BY degreeTitle ASC;";

if ($_POST['interface'] == 'data4ExamAppliedListStudents' || $_POST['interface'] == 'data4ExamAppliedListStudentsForStiker' || $_POST['interface'] == 'data4ExamAppliedListStudentsForRawMarkSheet')  {

	if (isset($_POST['degreeCode']) && isset($_POST['achademicYear']) && isset($_POST['semester']) && isset($_POST['attempt'])) {
		if ($_POST['degreeCode'] != "" && $_POST['achademicYear'] != "" && $_POST['semester'] != ""  && $_POST['attempt'] != "") {
			$getSQL["data4ExamAppliedListStudents"] = "";
			$whereMedium = "";
				if($_POST['interface'] == 'data4ExamAppliedListStudentsForStiker'){
					$whereMedium = "where t2.medium =  '" . $_POST['medium'] . "'";
				}
			if ($_POST['attempt'] == "F") {
				
				$getSQL["data4ExamAppliedListStudentsForRawMarkSheet"] = $getSQL["data4ExamAppliedListStudentsForStiker"] = $getSQL["data4ExamAppliedListStudents"] = "
				SELECT
					'Applied Student' AS examAppliedStudents,
					t1.degreeCode AS sdegreeCode,
					t1.achedamicYear AS sachedamicYear,
					t1.studentNo AS sstudentNo,
					t1.semester AS ssemester,
					t1.attempt AS sattempt,
					t1.subjectCode AS ssubjectCode,
					t1.appliedDate AS sappliedDate,
					t2.studentName AS sstudentName,
					t2.medium AS smedium,
					'First Time' AS sreason
				FROM
					(
					SELECT
						*
					FROM
						studentselection
					WHERE
						achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "' AND semester = '" . $_POST['semester'] . "' AND subjectCode = '" . $_POST['subjectCode'] . "'
				) AS t1
				LEFT JOIN student t2 ON
					t1.studentNo = t2.studentNo
				".$whereMedium ."
				ORDER BY	
					t1.studentNo ASC;
				";
			} else if ($_POST['attempt'] == "R") {
				$getSQL["data4ExamAppliedListStudentsForRawMarkSheet"] = $getSQL["data4ExamAppliedListStudentsForStiker"] = $getSQL["data4ExamAppliedListStudents"] = "
				SELECT
					'Applied Student' AS examAppliedStudents,
					t1.degreeCode AS sdegreeCode,
					t1.achedamicYear AS sachedamicYear,
					t1.studentNo AS sstudentNo,
					t1.semester AS ssemester,
					t1.attempt AS sattempt,
					t1.subjectCode AS ssubjectCode,
					t1.appliedDate AS sappliedDate,
					t2.studentName AS sstudentName,
					t2.medium AS smedium,
					t1.reason AS sreason
				FROM
					(
					SELECT
						*
					FROM
						studentRepeatSelection
					WHERE
						achedamicYear = '" . $_POST['achademicYear'] . "' AND degreeCode = '" . $_POST['degreeCode'] . "' AND semester = '" . $_POST['semester'] . "' AND subjectCode = '" . $_POST['subjectCode'] . "'
				) AS t1
			LEFT JOIN student t2 ON
				t1.studentNo = t2.studentNo
				".$whereMedium ."
			ORDER BY	
					t1.studentNo ASC;
				";
			} else if ($_POST['attempt'] == "RR") {
				$getSQL["data4ExamAppliedListStudentsForRawMarkSheet"] = $getSQL["data4ExamAppliedListStudentsForStiker"] = $getSQL["data4ExamAppliedListStudents"] = "	
				SELECT
					'Applied Student' AS examAppliedStudents,
					t1.ReRep_degreeCode AS sdegreeCode,
					t1.ReRep_achedamicYear AS sachedamicYear,
					t1.ReRep_studentNo AS sstudentNo,
					t1.ReRep_semester AS ssemester,
					t1.ReRep_attempt AS sattempt,
					t1.ReRep_subjectCode AS ssubjectCode,
					t1.ReRep_appliedDate AS sappliedDate,
					t2.studentName AS sstudentName,
					t2.medium AS smedium,
					'Re-Repeat' AS sreason
				FROM
					(
					SELECT
						*
					FROM
						ReRepeatSelection
					WHERE
						ReRep_achedamicYear = '" . $_POST['achademicYear'] . "' AND ReRep_degreeCode = '" . $_POST['degreeCode'] . "' AND ReRep_semester = '" . $_POST['semester'] . "' AND ReRep_subjectCode = '" . $_POST['subjectCode'] . "' AND re_repeat_attempt_time = '" . $_POST['re_repeat_attempt_time'] . "'
				) AS t1
			LEFT JOIN student t2 ON
				t1.ReRep_studentNo = t2.studentNo
				".$whereMedium ."
			ORDER BY	
					t1.ReRep_studentNo ASC;
				";
			}

			// echo $getSQL["data4ExamAppliedListStudents"];
		}
	}
}




if ($_POST['interface'] == 'data4ExamAppliedListForStudentsResultUpdate') {

	if (isset($_POST['degreeCode']) && isset($_POST['achademicYear']) && isset($_POST['semester']) && isset($_POST['attempt'])) {
		if ($_POST['degreeCode'] != "" && $_POST['achademicYear'] != "" && $_POST['semester'] != ""  && $_POST['attempt'] != "") {
			$type = '';
			if ($_POST['selectedType'] == 2) {
				$type = 'AND dr_approve = 1';
			} else if ($_POST['selectedType'] == 3) {
				$type = 'AND payment_approve = 1';
			} else {
				$type = '';
			}


			$getSQL["data4ExamAppliedListForStudentsResultUpdate"] = "";
			if ($_POST['attempt'] == "F") {
				$getSQL["data4ExamAppliedListForStudentsResultUpdate"] = "
				SELECT
					'Applied Student' AS examAppliedStudents,
					t1.degreeCode AS sdegreeCode,
					t1.achedamicYear AS sachedamicYear,
					t1.studentNo AS sstudentNo,
					t1.semester AS ssemester,
					t1.attempt AS sattempt,
					t1.subjectCode AS ssubjectCode,
					t1.appliedDate AS sappliedDate,
					t1.holdForViolation as holdstatus,
					t6.studentName AS sstudentName,
					t2.medium AS smedium,
					'First Time' AS sreason,
					'0' AS sisMedical,
					'0' AS smedicalApprove,
					t3.Grade as sGrade,
					t3.Examiner1 as sExaminer1,
					t3.Examiner2 as sExaminer2,
					t3.latesubmission as slatesubmission,
					t3.effective_date as seffective_date,
					t3.Marks as sMarks,
					t3.Status as sStatus,
					t3.releasedDate as sReleasedDate,
					t2.payedammount as payedammount,
					'F' as sexamReason,
					t3.HoldReason as sNotes
				FROM
					(
					SELECT
						*
					FROM
						studentselection
					WHERE
						achedamicYear = '" . $_POST['achademicYear'] . "' 
						AND degreeCode = '" . $_POST['degreeCode'] . "' 
						AND studentNo IN (SELECT studentNo 
							FROM  student WHERE degreeCode = '" . $_POST['degreeCode'] . "'  
								AND achedamicYear = '" . $_POST['achademicYear'] . "' 
								AND  medium = '" . $_POST['medium'] . "' )
						AND semester = '" . $_POST['semester'] . "' 
						AND subjectCode = '" . $_POST['subjectCode'] . "'
				) AS t1
				LEFT JOIN student t6 ON
				t1.studentNo = t6.studentNo
				LEFT JOIN (select s.*, sum(sp.Pay_amount) as payedammount From student s left join StudentPayment sp ON s.studentNo = sp.Pay_studentNo WHERE sp.Response_Progress = 1 GROUP BY s.studentNo) t2 ON
					t1.studentNo = t2.studentNo
				LEFT JOIN (
				SELECT 
					SudentNo as SudentNo,
					StudentName as StudentName,
					degreeCode as degreeCode,
					achedamicYear as achedamicYear,
					subjectName as subjectName,
					Grade as Grade ,
					Examiner1 as Examiner1,
					Examiner2 as Examiner2,
					latesubmission as latesubmission,
					effective_date as effective_date,
					releasedDate as releasedDate,		

					Marks as Marks,
					Status as Status,					
					'First Time' as Reason,
					violated_st.reason as HoldReason
				FROM examresults LEFT JOIN violated_st 
				ON examresults.SudentNo = violated_st.st_reg_no 
				AND examresults.subjectName = violated_st.subject_code 
				AND violated_st.attempt = 'First'
				WHERE
					achedamicYear = '" . $_POST['achademicYear'] . "' 
					AND degreeCode = '" . $_POST['degreeCode'] . "' 
					AND subjectName = '" . $_POST['subjectCode'] . "' " . $type . "
				) t3 ON	
					t1.studentNo = t3.SudentNo
				ORDER BY	
					t1.studentNo ASC;
				";
			} else if ($_POST['attempt'] == "R") {
				$getSQL["data4ExamAppliedListForStudentsResultUpdate"] = "
				SELECT
					'Applied Student' AS examAppliedStudents,
					t1.degreeCode AS sdegreeCode,
					t1.achedamicYear AS sachedamicYear,
					t1.studentNo AS sstudentNo,
					t1.semester AS ssemester,
					t1.attempt AS sattempt,
					t1.subjectCode AS ssubjectCode,
					t1.appliedDate AS sappliedDate,
					t1.holdForViolation as holdstatus,
					t6.studentName AS sstudentName,
					t2.medium AS smedium,
					t1.reason AS sreason,
					t1.isMedical AS sisMedical,
					t1.medicalApprove AS smedicalApprove,
					t3.Grade as sGrade,
					t3.Examiner1 as sExaminer1,
					t3.Examiner2 as sExaminer2,
					t3.latesubmission as slatesubmission,
					t3.effective_date as seffective_date,
					t3.Marks as sMarks,
					t3.Status as sStatus,
					t3.releasedDate as sReleasedDate,	
					t2.payedammount as payedammount,
					t3.Reason as sexamReason
				FROM
					(
					SELECT
						*
					FROM
						studentRepeatSelection
					WHERE
						achedamicYear = '" . $_POST['achademicYear'] . "' 
						AND degreeCode = '" . $_POST['degreeCode'] . "' 
						AND semester = '" . $_POST['semester'] . "' 
						AND studentNo IN (
							SELECT studentNo FROM  student 
							WHERE degreeCode = '" . $_POST['degreeCode'] . "'  
								AND achedamicYear = '" . $_POST['achademicYear'] . "' 
								AND  medium = '" . $_POST['medium'] . "' )
						AND subjectCode = '" . $_POST['subjectCode'] . "'
				) AS t1
				 LEFT JOIN student t6 ON
				t1.studentNo = t6.studentNo
			LEFT JOIN (select s.*, sum(sp.Pay_amount) as payedammount From student s left join StudentPayment sp ON s.studentNo = sp.Pay_studentNo WHERE sp.Response_Progress = 1 GROUP BY s.studentNo) t2 ON
				t1.studentNo = t2.studentNo
				LEFT JOIN (
					SELECT 
					rep_SudentNo as SudentNo,
					rep_StudentName as StudentName,
					rep_degreeCode as degreeCode,
					rep_achedamicYear as achedamicYear,
					rep_subjectName as subjectName,
					rep_Grade as Grade ,
					rep_Examiner1 as Examiner1,
					rep_Examiner2 as Examiner2,
					latesubmission as latesubmission,
					effective_date as effective_date,

					rep_Marks as Marks,
					releasedDate as releasedDate,			

					rep_Status as Status,
					rep_Reason as Reason
					FROM rep_examresults
					WHERE
					rep_achedamicYear = '" . $_POST['achademicYear'] . "' AND rep_degreeCode =  '" . $_POST['degreeCode'] . "' AND rep_subjectName = '" . $_POST['subjectCode'] . "' " . $type . "
					) t3 ON	
						t1.studentNo = t3.SudentNo
			ORDER BY	
					t1.studentNo ASC;
				";
			} else if ($_POST['attempt'] == "RR") {
				$getSQL["data4ExamAppliedListForStudentsResultUpdate"] = "	
				SELECT
					'Applied Student' AS examAppliedStudents,
					t1.ReRep_degreeCode AS sdegreeCode,
					t1.ReRep_achedamicYear AS sachedamicYear,
					t1.ReRep_studentNo AS sstudentNo,
					t1.ReRep_semester AS ssemester,
					t1.ReRep_attempt AS sattempt,
					t1.ReRep_subjectCode AS ssubjectCode,
					t1.ReRep_appliedDate AS sappliedDate,
					t1.holdForViolation as holdstatus,
					t6.studentName AS sstudentName,
					t2.medium AS smedium,
					'Re-Repeat' AS sreason,
					'0' AS sisMedical,
					'0' AS smedicalApprove,
					t3.Grade as sGrade,
					t3.Examiner1 as sExaminer1,
					t3.Examiner2 as sExaminer2,
					t3.latesubmission as slatesubmission,
					t3.effective_date as seffective_date,
					t3.Marks as sMarks,
					t3.Status as sStatus,
					t3.releasedDate as sReleasedDate,		
					t2.payedammount as payedammount,
					'RR' as sexamReason
				FROM
					(
					SELECT
						*
					FROM
						ReRepeatSelection
					WHERE
						ReRep_achedamicYear = '" . $_POST['achademicYear'] . "' 
						AND ReRep_degreeCode = '" . $_POST['degreeCode'] . "' 
						AND ReRep_semester = '" . $_POST['semester'] . "' 
						AND ReRep_subjectCode = '" . $_POST['subjectCode'] . "'
						AND ReRep_studentNo IN (
							SELECT studentNo FROM  student 
							WHERE degreeCode = '" . $_POST['degreeCode'] . "'  
								AND achedamicYear = '" . $_POST['achademicYear'] . "' 
								AND  medium = '" . $_POST['medium'] . "' )
						AND re_repeat_attempt_time =  '" . $_POST['re_repeat_attempt_time'] . "'  
				) AS t1
				 LEFT JOIN student t6 ON
				t1.ReRep_studentNo = t6.studentNo
			LEFT JOIN (select s.*, sum(sp.Pay_amount) as payedammount From student s left join StudentPayment sp ON s.studentNo = sp.Pay_studentNo WHERE sp.Response_Progress = 1 GROUP BY s.studentNo) t2 ON
				t1.ReRep_studentNo = t2.studentNo
			LEFT JOIN (
					SELECT 
					ReRep_SudentNo as SudentNo,
					ReRep_StudentName as StudentName,
					ReRep_degreeCode as degreeCode,
					ReRep_achedamicYear as achedamicYear,
					ReRep_subjectName as subjectName,
					ReRep_Grade as Grade ,
					ReRep_Examiner1 as Examiner1,
					ReRep_Examiner2 as Examiner2,
					latesubmission as latesubmission,
					effective_date as effective_date,

					ReRep_Marks as Marks,
					ReRep_Status as Status,
					releasedDate as releasedDate,			

					'Re-Repeat' as Reason
					FROM ReRepeat_examresults
					WHERE
					ReRep_achedamicYear = '" . $_POST['achademicYear'] . "' 
					AND ReRep_degreeCode =  '" . $_POST['degreeCode'] . "' 
					AND re_repeat_attempt_time =  '" . $_POST['re_repeat_attempt_time'] . "'  
					AND ReRep_subjectName = '" . $_POST['subjectCode'] . "' " . $type . "
					) t3 ON	
						t1.ReRep_studentNo = t3.SudentNo
			ORDER BY	
					t1.ReRep_studentNo ASC;
				";
			}

			// echo $getSQL["data4ExamAppliedListForStudentsResultUpdate"];die();
		}
	}
}


if ($_POST['interface'] == 'data4ExamAppliedListSubject' || $_POST['interface'] == 'data4ExamAppliedListSubjectForStiker' || $_POST['interface'] == 'data4ExamAppliedListSubjectForRawMarkSheet') {

	if (isset($_POST['degreeCode']) && isset($_POST['achademicYear']) && isset($_POST['semester'])) {
		if ($_POST['degreeCode'] != "" && $_POST['achademicYear'] != "" && $_POST['semester'] != "") {

			$getSQL["data4ExamAppliedListSubjectForRawMarkSheet"] =  $getSQL["data4ExamAppliedListSubjectForStiker"] = $getSQL["data4ExamAppliedListSubject"] = "
				SELECT 'Applied Subject' AS examAppliedSubjects, 
						degreeCode AS sdegreeCode,
						academicYear AS sachedamicYear,
						subjectSemester AS ssemester,
						subjectTitle AS ssubjectTitle,
						subjectCode AS ssubjectCode,
						credits AS scredits,
						status AS sstatus
				FROM subject WHERE academicYear= '" . $_POST['achademicYear'] . "' and degreeCode = '" . $_POST['degreeCode'] . "' and subjectSemester= '" . $_POST['semester'] . "';";
			// echo $getSQL["data4ExamAppliedListSubjectForRawMarkSheet"];
		}
	}
}

if ($_POST['interface'] == 'data4ExamAppliedListSubjectForStudentsResultUpdate') {

	if (isset($_POST['degreeCode']) && isset($_POST['achademicYear']) && isset($_POST['semester'])) {
		if ($_POST['degreeCode'] != "" && $_POST['achademicYear'] != "" && $_POST['semester'] != "") {

			$getSQL["data4ExamAppliedListSubjectForStudentsResultUpdate"] = "
				SELECT 'Applied Subject' AS examAppliedSubjects, 
						degreeCode AS sdegreeCode,
						academicYear AS sachedamicYear,
						subjectSemester AS ssemester,
						subjectTitle AS ssubjectTitle,
						subjectCode AS ssubjectCode,
						credits AS scredits,
						status AS sstatus
				FROM subject WHERE academicYear= '" . $_POST['achademicYear'] . "' and degreeCode = '" . $_POST['degreeCode'] . "' and subjectSemester= '" . $_POST['semester'] . "';";
			// echo $getSQL["data4ExamAppliedListSubject"];
		}
	}
}
//2023-10-26 Close Exam Applied List

$interfaceTbls["data4IncomeCategoryDetails"] = array("IncomeCategory", "degree", "IncomeCategoryDetails", "student");
$nextClientInterface["data4IncomeCategoryDetails"] = "formStudentProfileDeteils";

if ($_POST['interface'] == 'data4IncomeCategoryDetails') {


	$getSQL["data4IncomeCategoryDetails"] = "SELECT distinct t1.IncomeSourceCode, t1.achedamicYear, t1.IncomeCategoryCode, t1.IncomeCategoryValue,t1.Currency, t2.degreeCode as Income_degreeCode ,t3.IncomeCategoryTitle 
												FROM 
												IncomeCategoryDetails as t1 
												left join degree as t2 
												on t1.IncomeSourceCode =t2.IncomeSourceCode
												left join IncomeCategory as t3 
												on t1.IncomeCategoryCode =t3.IncomeCategoryCode 
												left join student as t4 
												on t1.achedamicYear=t4.achedamicYear  AND t2.degreeCode = t4.degreeCode
												where t4.studentNo='" . $_POST['studentNo'] . "' AND 
												t4.registered='yes';";
}




/*****************************************************************************************************
The following section creats object from dbOperartion class and establishes the connection with database.
 *********************************************************************************************************/

$dbClass = new dbOperations();

$dbCon = new mysqli($hostName, $userName, $passWord, $dbName, 3306);

if ($dbCon->connect_errno) {
	echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}

/********************************************************************************************************
This area adds records to database tables.
 ********************************************************************************************************/
/*
if($_POST["action"]=="add"){

	$dbClass->insert($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);

} else if($_POST["action"]=="get"){

	$dbClass->get($dbCon, $interfaceTbls[$_POST["interface"]], $getSQL[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);

} else if($_POST["action"]=="update"){
	
	$dbClass->update($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);

} else if($_POST["action"]=="delete"){
	
	$dbClass->delete($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);
}

$dbCon->close();

*/




if ($_POST["action"] == "add") {

	$dbClass->insert($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);

	// if($dbClass->check_ses($dbCon)){//kaththa
	// $dbClass->timeout();
	// }else{
	// $dbClass->insert($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);
	// }

} else if ($_POST["action"] == "addBulk") {
	header("Content-type: text/xml");
	$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
	$xml .= '<data>';
	$xml .= '<record interface = "' . $nextClientInterface[$_POST["interface"]] . '" ></record>';
	$jsonData = json_decode($_POST["data"]);
	$srcount = 0;
	$rcount = 0;
	if (is_array($jsonData)) {
		foreach ($jsonData as $studnet) {
			$rcount++;
			foreach ($studnet as $key => $value) {
				$_POST[$key] = $value;
			}
			if ($dbClass->insert($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]])) {
				$srcount++;
			}
		}
	}
	$xml .= '<record msg="' . $srcount . ' of ' . $rcount . ' Records has been Inserted successfully"></record>';
	$xml .= '</data>';
	echo $xml;
} else if ($_POST["action"] == "get") {
	$dbClass->get($dbCon, $interfaceTbls[$_POST["interface"]], $getSQL[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);

	// if($dbClass->check_ses($dbCon)){//kaththa
	// $dbClass->timeout();
	// }else{
	// $dbClass->$dbClass->get($dbCon, $interfaceTbls[$_POST["interface"]], $getSQL[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);
	// }

} else if ($_POST["action"] == "update") {

	$dbClass->update($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);

	// if($dbClass->check_ses($dbCon)){//kaththa
	// $dbClass->timeout();
	// }else{
	// $dbClass->update($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);
	// }

} else if ($_POST["action"] == "delete") {

	$dbClass->delete($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);

	// if($dbClass->check_ses($dbCon)){//kaththa

	// $dbClass->timeout();
	// }else{
	// $dbClass->delete($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);
	// }
} else if ($_POST["action"] == "log") {

	$userId = $_POST["userId"];
	// $passWord = $_POST["passWd"];
	$role = "";
	$sql = "select roleId from user where userId ='" . $userId . "';";
	$out = $dbCon->query($sql);
	$role = $out->fetch_assoc();

	if ($role != "") {
		// if ($dbClass->create_ses($userId, $dbCon)) { //kaththa

		// 	$dbClass->multiple();
		// } else {

		if (isset($_COOKIE['user'])) {
			$u = $_COOKIE['user'];
		
		global $dbClass;
		$dbClass->user_log($u, $dbCon);
		$remote_ip = $_SERVER['REMOTE_ADDR'];
		$sql = "delete from ses_login where user_id='$u' and ip_add='$remote_ip'";
		setcookie('user', $u, time() - 100000000000);
		$res = $dbCon->query($sql);
}

			$stopMain = "main";
			$nextClientInterface["getInitial"] = $stopMain;
			//$getSQL["getInitial"] = "select roleId, userName from user where userId ='".$userId."' and passWd = '".$passWord."';";

			$getSQL["getInitial"] = "select userName, userId, departmentCode,facultyCode,programmeCode,roleName,email,mobile from role, user where user.roleId=role.roleId and user.userId= '" . $_POST['userId'] . "';";

			$remote_ip = $_SERVER['REMOTE_ADDR'];
			$logFile = fopen("logfile.txt", "a") or die("Unable to open file!");
			$date_time = ";Date " . date("Y/m/d") . ";Time " . date("h:i:sa");
			$d_log = PHP_EOL . ";UserName " . $userId . ";ip " . $remote_ip . $date_time;
			$u = $_COOKIE['user'];
			$_SESSION['userIdLog'] = $userId;
			fwrite($logFile, PHP_EOL . $d_log);
			fclose($logFile);


			$dbClass->get($dbCon, $interfaceTbls[$_POST["interface"]], $getSQL[$_POST["interface"]], $nextClientInterface[$_POST["interface"]]);
		// }
	}
}

///kaththa
else if (($_POST["action"] == "logout")) {
	$dbClass->clear_ses($dbCon);
} else if ($_POST["action"] == "upload") {
	header("Content-type: text/xml");
	$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
	$xml .= '<data>';
	$xml .= '<record interface = "' . $nextClientInterface[$_POST["interface"]] . '" ></record>';

	$targetDir = "temp/";

	$targetFile = $targetDir . basename($_FILES["fileToUpload"]["name"]);
	$uploadOk = 1;
	$fileType = pathinfo($targetFile, PATHINFO_EXTENSION);

	if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFile)) {
		// echo "moved file ***";
	}


	if ($_POST["interface"] == "uploadMarksList") {
		$totalR = 0;
		$successR = 0;
		$file = fopen($targetFile, "r");
		$csvLn = 0;
		$firstLn = array();
		$upStat = 1;
		$success = 0;

		while (!feof($file)) {
			if ($csvLn == 0) {
				$firstLn = fgetcsv($file);
				$csvLn++;
			} else {
				$csvStr = fgetcsv($file);
				if ($csvStr) {
					for ($i = 0; $i < sizeof($csvStr); $i++) {
						if ($firstLn[$i] == "Student No") {
							$_POST["SudentNo"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Name") {
							$_POST["StudentName"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Examiner 1") {
							$_POST["Examiner1"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Examiner 2") {
							$_POST["Examiner2"] = $csvStr[$i];
						}
					}

					if (($_POST["Examiner1"] == "" && $_POST["Examiner2"] == "") || (strtoupper($_POST["Examiner1"]) == "AB" && strtoupper($_POST["Examiner2"]) == "AB")) {
						$_POST["Examiner1"] = "125";
						$_POST["Examiner2"] = "125";
						$_POST["Marks"] = "125";
						$_POST["Grade"] = "-";
					} else if (($_POST["Examiner1"] != "" && $_POST["Examiner2"] != "")) {
						$tmpMarks = intval($_POST["Examiner1"]) + intval($_POST["Examiner2"]);
						$tmpMarks =  round($tmpMarks / 2);
						$_POST["Marks"] = $tmpMarks;
						firstTimersGrade($tmpMarks);
					}

					if ($_POST["SudentNo"] != "") {
						// echo $_POST["SudentNo"];
						if ($dbClass->insert($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]], true)) $success += 1;
					}

					$csvLn++;
				}
			}
		}
		$totalR = $csvLn - 1;
		$xml .= '<record msg="' . $success . ' of ' . $totalR . ' Records has been Inserted successfully"></record>';
	} else {
		$xml .= '<record msg="details has not been uploaded correctly, uploaded wrong File"></record>';
	}
	unlink($targetFile);
	$xml .= '</data>';
	// echo "dasdasd";
	echo $xml;
}

//------------------------------------------------------------------Repeat-----------------------------------------------------------------


else if ($_POST["action"] == "uploadRep") {

	header("Content-type: text/xml");
	$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
	$xml .= '<data>';
	$xml .= '<record interface = "' . $nextClientInterface[$_POST["interface"]] . '" ></record>';

	$targetDir = "temp/";

	$targetFile = $targetDir . basename($_FILES["fileToUploadRep"]["name"]);
	$uploadOk = 1;
	$fileType = pathinfo($targetFile, PATHINFO_EXTENSION);
	if (move_uploaded_file($_FILES["fileToUploadRep"]["tmp_name"], $targetFile)) {
		// echo "moved file ***";
	}

	if ($_POST["interface"] == "uploadRepMarksList") {
		// echo "uploadRepMarksList ***";
		$totalR = 0;
		$successR = 0;
		// echo $targetFile . "</br>";
		$file = fopen($targetFile, "r");
		$csvLn = 0;
		$firstLn = array();
		// echo "file is= " . $file;
		$upStat = 1;
		$success = 0;

		while (!feof($file)) {
			if ($csvLn == 0) {
				$firstLn = fgetcsv($file);
				// print_r($firstLn);
				// echo $firstLn;
				$csvLn++;
			} else {
				$csvStr = fgetcsv($file);
				if ($csvStr) {
					for ($i = 0; $i < sizeof($csvStr); $i++) {
						if ($firstLn[$i] == "Student No") {
							$_POST["rep_SudentNo"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Name") {
							$_POST["rep_StudentName"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Examiner 1") {
							$_POST["rep_Examiner1"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Examiner 2") {
							$_POST["rep_Examiner2"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Reason") {
							$_POST["rep_Reason"] = $csvStr[$i];
						}
					}

					if (($_POST["rep_Examiner1"] == "" && $_POST["rep_Examiner2"] == "") || (strtoupper($_POST["rep_Examiner1"]) == "AB" && strtoupper($_POST["rep_Examiner2"]) == "AB")) {
						$_POST["rep_Examiner1"] = "125";
						$_POST["rep_Examiner2"] = "125";
						$_POST["rep_Marks"] = "125";
						$_POST["rep_Grade"] = "-";
					} else if (($_POST["rep_Examiner1"] != "" && $_POST["rep_Examiner2"] != "" && $_POST["rep_Reason"] == "R")) {
						$tmpMarks = intval($_POST["rep_Examiner1"]) + intval($_POST["rep_Examiner2"]);
						$tmpMarks =  round($tmpMarks / 2);
						$_POST["rep_Marks"] = $tmpMarks;
						repetersGrade_repeat($tmpMarks);
					} else if (($_POST["rep_Examiner1"] != "" && $_POST["rep_Examiner2"] != "" && $_POST["rep_Reason"] == "M")) {
						$tmpMarks = intval($_POST["rep_Examiner1"]) + intval($_POST["rep_Examiner2"]);
						$tmpMarks =  round($tmpMarks / 2);
						$_POST["rep_Marks"] = $tmpMarks;
						repetersGrade_medical($tmpMarks);
					}

					if ($_POST["rep_SudentNo"] != "") {
						if ($dbClass->insert($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]], true)) $success += 1;
					}

					$csvLn++;
				}
			}
		}
		$totalR = $csvLn - 1;
		$xml .= '<record msg="' . $success . ' of ' . $totalR . ' Records has been Inserted successfully"></record>';
	} else {
		$xml .= '<record msg="details has not been uploaded correctly, uploaded wrong File"></record>';
	}
	$xml .= '</data>';
	unlink($targetFile);
	echo $xml;
}


//-------------------------------------------ReRepeat--------------------------------------------------------------

else if ($_POST["action"] == "uploadReRep") {
	header("Content-type: text/xml");
	$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
	$xml .= '<data>';
	$xml .= '<record interface = "' . $nextClientInterface[$_POST["interface"]] . '" ></record>';
	$targetDir = "temp/";

	$targetFile = $targetDir . basename($_FILES["fileToUploadReRepeat"]["name"]);
	$uploadOk = 1;
	$fileType = pathinfo($targetFile, PATHINFO_EXTENSION);
	if (move_uploaded_file($_FILES["fileToUploadReRepeat"]["tmp_name"], $targetFile)) {
		// echo "moved file ***";
	}

	if ($_POST["interface"] == "uploadReRepMarksList") {
		// echo "uploadReRepMarksList ***";
		$totalR = 0;
		$successR = 0;
		// echo $targetFile . "</br>";
		$file = fopen($targetFile, "r");
		$csvLn = 0;
		$firstLn = array();
		// echo "file is= " . $file;
		$upStat = 1;
		$success = 0;

		while (!feof($file)) {
			if ($csvLn == 0) {
				$firstLn = fgetcsv($file);
				$csvLn++;
			} else {
				$csvStr = fgetcsv($file);
				// echo sizeof($csvStr);
				if ($csvStr) {
					for ($i = 0; $i < sizeof($csvStr); $i++) {
						// echo "in for";
						if ($firstLn[$i] == "Student No") {
							$_POST["ReRep_SudentNo"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Name") {
							$_POST["ReRep_StudentName"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Examiner 1") {
							$_POST["ReRep_Examiner1"] = $csvStr[$i];
						} else if ($firstLn[$i] == "Examiner 2") {
							$_POST["ReRep_Examiner2"] = $csvStr[$i];
						}
					}

					if (($_POST["ReRep_Examiner1"] == "" && $_POST["ReRep_Examiner2"] == "") || (strtoupper($_POST["ReRep_Examiner1"]) == "AB" && strtoupper($_POST["ReRep_Examiner2"]) == "AB")) {
						$_POST["ReRep_Examiner1"] = "125";
						$_POST["ReRep_Examiner2"] = "125";
						$_POST["ReRep_Marks"] = "125";
						$_POST["ReRep_Grade"] = "-";
					} else if (($_POST["ReRep_Examiner1"] != "" && $_POST["ReRep_Examiner2"] != "")) {
						$tmpMarks = intval($_POST["ReRep_Examiner1"]) + intval($_POST["ReRep_Examiner2"]);
						$tmpMarks =  round($tmpMarks / 2);
						$_POST["ReRep_Marks"] = $tmpMarks;
						re_repetersGrade($tmpMarks);
					}

					if ($_POST["ReRep_SudentNo"] != "") {
						if ($dbClass->insert($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]], true)) $success += 1;
					}

					$csvLn++;
				}
			}
		}
		$totalR = $csvLn - 1;
		$xml .= '<record msg="' . $success . ' of ' . $totalR . ' Records has been Inserted successfully"></record>';
	} else {
		$xml .= '<record msg="details has not been uploaded correctly, uploaded wrong File"></record>';
	}
	$xml .= '</data>';
	unlink($targetFile);
	echo $xml;
} else if ($_POST["action"] == "uploadWifiList") {

	header("Content-type: text/xml");
	$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
	$xml .= '<data>';
	$xml .= '<record interface = "' . $_POST["interface"] . '" ></record>';


	$targetDir = "temp/";

	$targetFile = $targetDir . basename($_FILES["fileWifiList"]["name"]);
	$uploadOk = 1;
	$fileType = pathinfo($targetFile, PATHINFO_EXTENSION);
	if (move_uploaded_file($_FILES["fileWifiList"]["tmp_name"], $targetFile)) {
		// echo "moved file ***";
	}

	if ($_POST["interface"] == "data4wifiCreation") {
		// echo "uploadWifiList ***"; 
		// $xml .= '</data>'."\n";
		// echo $xml;
		// die();       
		// echo $targetFile."</br>";
		$file = fopen($targetFile, "r");
		$csvLn = 0;
		$firstLn = array();
		// echo "file is= ".$file;
		$success = 0;
		while (!feof($file)) {
			if ($csvLn == 0) {
				$firstLn = fgetcsv($file);
				// echo $firstLn;
				$csvLn++;
			} else {
				$csvStr = fgetcsv($file);
				if ($csvStr) {
					// echo sizeof($csvStr);
					for ($i = 0; $i < sizeof($csvStr); $i++) {
						// echo "in for";
						if ($firstLn[$i] == "Student No") {
							$_POST["studentNo"] = $csvStr[$i];
							$_POST["isWifiCreated"] = "1";
						}
						if ($firstLn[$i] == "UserName") {
							$_POST["wifiName"] = $csvStr[$i];
						}
					}

					if ($_POST["studentNo"] != "") {
						if ($dbClass->update($dbCon, $interfaceTbls[$_POST["interface"]], $nextClientInterface[$_POST["interface"]])) {
							$success++;
						}
					}
					$csvLn++;
				}
			}
		}
		$totalR = $csvLn - 1;
		$xml .= '<record msg="' . $success . ' of ' . $totalR . ' Records has been Updated successfully"></record>';
	} else {
		$xml .= '<record msg="details has not been uploaded correctly, uploaded wrong File"></record>';
	}
	unlink($targetFile);
	$xml .= '</data>' . "\n";
	echo $xml;
}

//////////////End Upload
///kaththa
$dbCon->close();





/**************** Database Operations class definition ***************************/

class dbOperations
{


	/********************************************************************************************************
This function adds new records to the database 
	 *********************************************************************************************************/
	function insert($con, $tblName, $interface)
	{

		if ($_POST["action"] == "add") {
			header("Content-type: text/xml");
		}

		$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
		$xml .= '<data>';
		$xml .= '<record interface = "' . $interface . '" ></record>';

		$msg2Client = "Record has not been inserted.";

		$con->autocommit(FALSE); // This stops physical updates. Commit will make the changes to the database permenant.

		$tblName4locks = "";

		for ($loopCnt = 0; $loopCnt < count($tblName); $loopCnt++) {
			$tblName4locks .= $tblName[$loopCnt];
			if ($loopCnt < count($tblName) - 1) {
				$tblName4locks .= " WRITE, ";
			}
		}


		$qryStat = 1;
		//$qryStat = $con->query("LOCK TABLES ".$tblName4locks. " WRITE;"); // This is not required for insert function.

		$loopCnt = 0;
		$success = false;
		do {


			if ($qryStat) {


				$qry = "show columns from " . $tblName[$loopCnt] . ";"; //Gets all the field names of a given database table.

				$res = $con->query($qry);

				$_POST["dbError"] = $con->error;

				//if(!$res || $res=null){
				if ($res)
					if ($res->num_rows == 0) {
						return $res;
					} else {
						$qry = "INSERT IGNORE INTO " . $tblName[$loopCnt] . " SET ";

						for ($row_no = 0; $row_no < $res->num_rows; $row_no++) {
							$res->data_seek($row_no);
							$row = $res->fetch_assoc();
							if (!isset($_POST[$row["Field"]])) {
								$_POST[$row["Field"]] = '';
							}
							$qry .= $row["Field"] . " = '" . $_POST[$row["Field"]];

							if ($row_no < $res->num_rows - 1) {
								$qry .= "', ";
							} else {
								$qry .= "';";
							}
						}
						$qryStat =  $con->query($qry);
						// echo $qry . "<br>";
						if ($qryStat == 1 && $con->affected_rows > 0) {


							$msg2Client = "Record has been inserted successfully.";

							$remote_ip = $_SERVER['REMOTE_ADDR'];
							$logFile = fopen("logfile.txt", "a") or die("Unable to open file!");
							$date_time = ";Date " . date("Y/m/d") . ";Time " . date("h:i:sa") . ";";
							$d_log = PHP_EOL . ";" . $qry . "ip " . $remote_ip . $date_time;
							$u = $_COOKIE['user'];

							fwrite($logFile, PHP_EOL . $d_log . "username " . $u);
							fclose($logFile);
						}
						if (!$qryStat) {
							printf("Error message: %s\n", $con->error); // This error message should be sent to the client.
						}
					}
			}

			$loopCnt++;
		} while ($qryStat && $loopCnt < count($tblName));

		if (!$qryStat) {
			$con->rollback(); //If something goes wrong, the database is rollbacked to the previous stable position.
		} else {
			$success = true;
			$con->commit();   //Makes changes to the database permenant.

		}

		$qryStat = $con->query("UNLOCK TABLES;");
		$xml .= '<record msg = "' . $msg2Client . '" ></record>';
		$xml .= '</data>' . "\n";

		if ($_POST["action"] == "add") {
			echo $xml;
		} else {
			return $success;
		}
	}


	/********************************************************************************************************
This function reads records from the database and send them to clinet as an XML document 
	 *********************************************************************************************************/

	function get($con, $tblName, $qry, $interface)
	{

		header("Content-type: text/xml");
		$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
		$xml .= '<data>';
		$xml .= '<record interface = "' . $interface . '" ></record>';

		$con->autocommit(FALSE); // This stops physical updates. Commit will make the changes to the database permenant.

		$tblName4locks = "";
		$qryStat = 1;

		for ($loopCnt = 0; $loopCnt < count($tblName); $loopCnt++) {
			$tblName4locks .= $tblName[$loopCnt];
			if ($loopCnt < count($tblName) - 1) {
				$tblName4locks .= " READ, ";
			}
		}


		//$qryStat = $con->query("LOCK TABLES ".$tblName4locks. " READ;"); // This locks tables for reading.

		if (!$qryStat) {
			//printf("Error message: %s\n", $con->error); // This error message should be sent to the client.
			$xml .= '<record error = "' . $con->error . '" ></record>';
		} else {

			$res =  $con->query($qry);
			$fieldNames = $res->fetch_fields();

			$res->field_count;

			//if(!$res){
			if ($res->num_rows == 0) {
				//return $res;

			} else {

				for ($row_no = 0; $row_no < $res->num_rows; $row_no++) {
					$res->data_seek($row_no);
					$row = $res->fetch_assoc();

					//comment by nirosh 2023-07-04
					// $xml .= '<record ';
					// for($col_no = 0; $col_no < $res->field_count; $col_no++){

					// 	$xml .= $fieldNames[$col_no]->name.'="'.$row[$fieldNames[$col_no]->name].'" ';
					// 	//echo $fieldNames[$col_no]->name.'="'.$row[$fieldNames[$col_no]->name].'" ';
					// }
					// $xml .= '></record>';
					//end comment by nirosh 2023-07-04


					//added by nirosh 2023-07-04
					$xml .= '<record ';
					for ($col_no = 0; $col_no < $res->field_count; $col_no++) {
						$fieldName = $fieldNames[$col_no]->name;
						$fieldValue = htmlspecialchars($row[$fieldName], ENT_XML1 | ENT_QUOTES, 'UTF-8');
						$xml .= $fieldName . '="' . $fieldValue . '" ';
					}
					$xml .= '></record>';
					//end added by nirosh 2023-07-04


				}
			}

			$fieldCount = $res->num_rows;

			$count = 0;
		}

		$qryStat = $con->query("UNLOCK TABLES;");
		$xml .= '</data>' . "\n";
		echo $xml; // SHOULD RETURN THIS TO CALLING CLIENT PROGRAM LATER. THIS SHOULD BE EHCO


	}

	/********************************************************************************************************
This function updates exisitng records in the database. The primary key is used in the where clause to 
identify the record to be updated. 
	 *********************************************************************************************************/

	function update($con, $tblName, $interface)
	{

		header("Content-type: text/xml");
		$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
		$xml .= '<data>';
		$xml .= '<record interface = "' . $interface . '" ></record>';
		//echo $qry;
		$msg2Client = "Record has not been updated.";

		$con->autocommit(FALSE); // This stops physical updates. Commit will make the changes to the database permenant.

		$tblName4locks = "";

		for ($loopCnt = 0; $loopCnt < count($tblName); $loopCnt++) {
			$tblName4locks .= $tblName[$loopCnt];
			if ($loopCnt < count($tblName) - 1) {
				$tblName4locks .= " WRITE, ";
			}
		}


		$qryStat = 1;
		$qryStat = $con->query("LOCK TABLES " . $tblName4locks . " WRITE;"); // This is required for update function.

		$loopCnt = 0;

		do {


			if ($qryStat) {


				$qry = "show columns from " . $tblName[$loopCnt] . ";"; //Gets all the field names of a given database table.
				$res = $con->query($qry);
				$_POST["dbError"] = $con->error;

				$condition = " where ";

				//if(!$res){
				if ($res->num_rows == 0) {
					return $res;
				} else {

					$keyCounter = 0;
					$updateFieldCounter = 0;


					$qry = "update " . $tblName[$loopCnt] . " SET ";

					for ($row_no = 0; $row_no < $res->num_rows; $row_no++) {
						$res->data_seek($row_no);
						$row = $res->fetch_assoc();

						if (isset($_POST[$row["Field"]])) {

							if ($row["Key"] == "PRI" || $row["Key"] == "UNI") {
								if ($keyCounter > 0) {
									$condition .= "' and ";
								}

								$condition .= $row["Field"] . " = '" . $_POST[$row["Field"]];
								$keyCounter++;
							} else {

								if ($updateFieldCounter > 0) {
									$qry .= "', ";
								}

								$qry .= $row["Field"] . " = '" . $_POST[$row["Field"]];
								$updateFieldCounter++;
							}
						}
					}

					$qry .= "' ";
					$condition .= "';";
					$qry .= $condition;
					//echo $qry;
					$qryStat =  $con->query($qry);
					if ($con->affected_rows > 0) {

						$msg2Client = "Record has been updated successfully.";
						$remote_ip = $_SERVER['REMOTE_ADDR'];
						$logFile = fopen("logfile.txt", "a") or die("Unable to open file!");

						$date_time = ";Date " . date("Y/m/d") . ";Time " . date("h:i:sa") . ";";
						$d_log = PHP_EOL . ";" . $qry . "ip " . $remote_ip . $date_time;
						$u = $_COOKIE['user'];

						fwrite($logFile, PHP_EOL . $d_log . "username " . $u);

						// $date_time = ";".date("Y/m/d").";".date("h:i:sa").";";
						// $d_log = PHP_EOL.$qry.$remote_ip.$date_time;
						// $u = $_COOKIE['user'];

						// fwrite($logFile,PHP_EOL .$d_log .$u);
						fclose($logFile);
					}

					if (!$qryStat) {
						// $msg2Client = "Error message: %s\n". $con->error;
						printf("Error message: %s\n", $con->error); // This error message should be sent to the client.
					}
				}
			}

			$loopCnt++;
		} while ($qryStat && $loopCnt < count($tblName));
		$success = false;
		if (!$qryStat) {
			$con->rollback(); //If something goes wrong, the database is rollbacked to the previous stable position.
		} else {
			$con->commit();   //Makes changes to the database permenant.
			$success = true;
		}

		$qryStat = $con->query("UNLOCK TABLES;");
		$xml .= '<record msg = "' . $msg2Client . '" ></record>';
		$xml .= '</data>' . "\n";
		return $success;
		// echo $xml;
	}

	/********************************************************************************************************
This function deletes exisiting records from the database.
The primary key has been used to idetify the records to be deleted. 
	 *********************************************************************************************************/

	function delete($con, $tblName, $interface)
	{

		header("Content-type: text/xml");
		$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
		$xml .= '<data>';
		$xml .= '<record interface = "' . $interface . '" ></record>';

		$msg2Client = "Record has not been deleted.";

		$con->autocommit(FALSE); // This stops physical updates. Commit will make the changes to the database permenant.

		$tblName4locks = "";

		for ($loopCnt = 0; $loopCnt < count($tblName); $loopCnt++) {
			$tblName4locks .= $tblName[$loopCnt];
			if ($loopCnt < count($tblName) - 1) {
				$tblName4locks .= " WRITE, ";
			}
		}


		$qryStat = $con->query("LOCK TABLES " . $tblName4locks . " WRITE;"); // This is required for delete function.

		$loopCnt = 0;

		do {


			if ($qryStat) {


				$qry = "show columns from " . $tblName[$loopCnt] . ";"; //Gets all the field names of a given database table.
				$res = $con->query($qry);
				$_POST["dbError"] = $con->error;

				$condition = " where ";

				//if(!$res){
				if ($res->num_rows == 0) {
					return $res;
				} else {

					$keyCounter = 0;

					$qry = "delete ignore from " . $tblName[$loopCnt];

					for ($row_no = 0; $row_no < $res->num_rows; $row_no++) {
						$res->data_seek($row_no);
						$row = $res->fetch_assoc();

						if (isset($_POST[$row["Field"]])) {

							if ($keyCounter > 0) {
								$condition .= "' and ";
							}
							$condition .= $row["Field"] . " = '" . $_POST[$row["Field"]];
							$keyCounter++;
						}
					}

					$condition .= "';";
					$qry .= $condition;
					//echo $qry;

					$qryStat =  $con->query($qry);
					if ($con->affected_rows > 0) {

						$remote_ip = $_SERVER['REMOTE_ADDR'];
						$logFile = fopen("logfile.txt", "a") or die("Unable to open file!");

						$date_time = ";Date " . date("Y/m/d") . ";Time " . date("h:i:sa") . ";";
						$d_log = PHP_EOL . ";" . $qry . "ip " . $remote_ip . $date_time;
						$u = $_COOKIE['user'];

						fwrite($logFile, PHP_EOL . $d_log . "username " . $u);

						// $date_time = ";".date("Y/m/d").";".date("h:i:sa").";";
						// $d_log = PHP_EOL.$qry.$remote_ip.$date_time;
						// $u = $_COOKIE['user'];

						// fwrite($logFile,PHP_EOL .$d_log .$u);
						fclose($logFile);

						$msg2Client = "Record has been deleted successfully.";
					}

					if (!$qryStat) {
						printf("Error message: %s\n", $con->error); // This error message should be sent to the client.
					}
				}
			}

			$loopCnt++;
		} while ($qryStat && $loopCnt < count($tblName));
		// $success =false;
		if (!$qryStat) {
			$con->rollback(); //If something goes wrong, the database is rollbacked to the previous stable position.
		} else {
			$con->commit();   //Makes changes to the database permenant.
			// $success = true;
		}

		$qryStat = $con->query("UNLOCK TABLES;");
		$xml .= '<record msg = "' . $msg2Client . '" ></record>';
		$xml .= '</data>' . "\n";
		echo $xml;
		// return $success;
	}



	/*********************start session functions******************************************/

	/*function which start the session*/

	/*After run the select query ,if # of rows is equal to 1 , user is already logged in.So delete that session and return "true" to index.php.
			else create new session by creating new record in the session_log data table with the values of below and return true to the index.php.
			Set a cookie variable with the value of user id to check whether the user is same in other operations.*/

	function create_ses($u, $con)
	{
		global $dbClass;
		$t 		= sprintf("%f", microtime(true));
		$done 	= false;

		$sql 	= "select user_id from ses_login where user_id='$u' and ip_add='$_SERVER[REMOTE_ADDR]'"; //Check whether the user is already logged in.

		$res = $con->query($sql);
		if ($res->num_rows == 1) {
			$sql = "delete from ses_login where user_id='$u' and ip_add='$_SERVER[REMOTE_ADDR]'";
			$con->query($sql);
		}

		$sql 	= "insert into ses_login values('$u','$u'+now(),'$_SERVER[REMOTE_ADDR]',now(),now())";
		$res = $con->query($sql); //or $done = false;

		setcookie('user', $u, time() + 100000000000);
		$dbClass->user_log($u, $con);
		return false;
	}

	//------------------PDF Function----------------------------------//

	// $pdf_data = generate_pdf();

	// // And a path where the file will be created
	// $path = '/path/to/your/www/root/public_html/newly_created_file.pdf';

	// // Then just save it like this
	// file_put_contents( $path, $pdf_data );

	//----------------------------------------------------------------------------------//

	/*function which check session is valid or not.
if session is the same continue the rest or go to login page.
session is time out after 15 minutes.
Here create a client side session variable.using that before doing an operation , check whether the current session id is equal to the session id which 
stored in the cookie variable.
	if it sis true
		continue the rest of the operation.then check whether the session is timeout using a select query.
				if query return a record session is timeout and then function return "true".
				
				if not call update_ses() function , regenerate the session id , return false to the index.php 
				
				regenerate the session id - session id is regenerated.because that helps to reject multiple logins with same ip addresses. 
	if it is not true
		
		call user_logerr($u,$con),clear_ses($u,$con) functions and return true.
*/

	function check_ses($con)
	{
		if (isset($_COOKIE['user'])) {
			$u = $_COOKIE['user'];
		}
		global $dbClass;
		$session_id = session_id();

		if (isset($_COOKIE["PHPSESSID"])) {

			if ($session_id == $_COOKIE["PHPSESSID"]) {
				$time_out = 900;
				$remote_ip = $_SERVER['REMOTE_ADDR'];

				$sql = "select (now()-last_acc) as duration from ses_login where ip_add='$remote_ip' and user_id ='$u'";

				$res = $con->query($sql);

				if ($res->num_rows == 0) {
					return true;
				}

				$row = $res->fetch_assoc();
				$d = $row['duration'];

				if ($d > $time_out) {

					$dbClass->clear_ses($u, $con);
					return true;
				} else {

					$dbClass->update_ses($u, $con);
					session_regenerate_id();
					return false;
				}
			} else {
				$dbClass->user_logerr($u, $con);
				$dbClass->clear_ses($u, $con);
				return true;
			}
		}
	}

	/*function which update the last access time of the user 
if session is valied then update the session with values below.
and call the function user_log to store the history of user operations.
*/
	function update_ses($u, $con)
	{

		global $dbClass;
		$remote_ip = $_SERVER['REMOTE_ADDR'];
		$sql = "update ses_login set last_acc=now() where ip_add='$remote_ip' and user_id='$u'";
		$res = $con->query($sql);
		$dbClass->user_log($u, $con);
	}

	/*function which clear the session.
and clear the cookie variable.
*/
	function clear_ses($con)
	{
		if (isset($_COOKIE['user'])) {
			$u = $_COOKIE['user'];
		}
		global $dbClass;
		$dbClass->user_log($u, $con);
		$remote_ip = $_SERVER['REMOTE_ADDR'];
		$sql = "delete from ses_login where user_id='$u' and ip_add='$remote_ip'";
		setcookie('user', $u, time() - 100000000000);
		$res = $con->query($sql);
	}

	/*function which write the user log in the database.*/
	function user_log($u, $con)
	{

		$remote_ip = $_SERVER['REMOTE_ADDR'];

		$x = file_get_contents("php://input");

		$sql = "insert into log_file values('$u',now(),'$_SERVER[REMOTE_ADDR]','$x',now())";
		$con->query($sql);
	}

	/*function which write the user log in the database,
if there is any user logged in different location.
*/
	function user_logerr($u, $con)
	{

		$remote_ip = $_SERVER['REMOTE_ADDR'];
		$x = "User loged in multiple locations.";
		$sql = "insert into log_file values('$u',now(),'$_SERVER[REMOTE_ADDR]','$x',now())";
		$con->query($sql);
	}


	/////////////////////////////////timeout xml

	function timeout()
	{
		header("Content-type: text/xml");
		$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
		$xml .= '<data>';
		$xml .= '<record interface = "' . "timeout" . '" ></record>';
		$xml .= '</data>' . "\n";
		echo $xml;
	}
	/////////////////////////////////multiple login
	function multiple()
	{
		header("Content-type: text/xml");
		$xml = '<?xml version="1.0" encoding="utf-8"?>' . "\n";
		$xml .= '<data>';
		$xml .= '<record interface = "' . "multiple" . '" ></record>';
		$xml .= '</data>' . "\n";
		echo $xml;
	}


	/*********************end the session functions******************************************/


	/********************* All the functions should be written above this line ****************************/
}


/******************** End of Database Operations class definition ********************/
