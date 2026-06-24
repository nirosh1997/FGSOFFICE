
function formAdministratorMenu(dsp) {

	str = "";
	// title = "Administrator";


	// if (dsp == "formAdministratorMenu") {

	// 	str = "<div id='maintainformAdministratorMenu'>";
	// 	str += "<div></div><br/>";



	// 	str += "<table><tr><td>"
	// 	str += '<h2 >' + title + '</h2><hr>';

	// 	str += "<div style='float:left;clear:both;' id='btnsection'>";

	// 	str += '<input type = "button" class ="btn2" value="Department" onclick="sendForm(' + "'data4addDepartment'" + ')">';

	// 	str += '<input type = "button" class ="btn2" value="Programme Type" onclick="sendForm(' + "'data4addprogrammeType'" + ');">';

	// 	str += '<input type = "button" class ="btn2" value="Degree Programme" onclick="sendForm(' + "'data4addDegree'" + ');sendForm(' + "'data4EligibleCriteria'" + ');">';
	// 	str += '<input type = "button" class ="btn2" value="Add Degree Budget Details" onclick="sendForm(' + "'data4returnBudgetDetails'" + ');sendForm(' + "'data4addDegreeDetails'" + ');">';


	// 	str += '<input type="button" class="btn2" value = "New User" onclick ="sendForm(' + "'data4AddUser'" + ');sendForm(' + "'data4AddUser2'" + ');">';

	// 	str += '<input type="button" class="btn2" value = "New Role" onclick ="showMenu(' + "'formAddRole'" + ');">';

	// 	str += '<input type="button" class="btn2" value = "Document Template Management" onclick ="showMenu(' + "'formDocumentMenu'" + ');">';

	// 	//Thiwanka
	// 	str += '<input type = "button" class ="btn2" value="New Course Unit" onclick="showMenu(' + "'addNewCourseUnit'" + ');">';//data4StudentReport showMenu('+"'formAllReport'"+');

	// 	str += '<input type="button" class="btn2" value = "All Reports" onclick ="sendForm(' + "'data4ForeignReport'" + ');">';//sendForm('+"'data4TotalStudentReport'"+');sendForm('+"'data4ForeignReport'"+');  sendForm('+"'data4viewstudent'"+');

	// 	str += '<input type = "button" class ="btn2" value="Income Category Details" onclick="sendForm(' + "'data4IncomeCategoryDetails'" + ');sendForm(' + "'data4incomeSource'" + ');">';

	// 	str += '<input type = "button" class ="btn2" value="logout" onclick=logOut();>';

	// 	str += "</div>";




	// 	str += "<div class='section1' id='TransferProfile' style='margin-left:-2px;'><fieldset  class='field' style='width:1300px;'><div style='clear:both'>";
	// 	str += "<div style='float:left;clear:both;' id='btnsection'>";

	// 	str += '<br><input type = "button" class ="btn2" value="Applicants List" onclick="sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';

	// 	str += '<input type = "button" class ="btn2" value="Reprint Applicants" onclick="sendForm(' + "'data4ReprintCheckUser'" + ');">';

	// 	//str += '<input type = "button" class ="btn2" value = "List Document" onclick ="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');sendForm('+"'data4AddListDocument'"+');sendForm('+"'data4SequanceNumberList'"+');sendForm('+"'data4SessionIDList'"+');sendForm('+"'data4returnListDocument'"+');">';//sendForm('+"'data4RegisteredStudentListPrint'"+');">';
	// 	str += '<input type = "button" class ="btn2" value="Students" onclick="sendForm(' + "'data4LastRegistrationNo'" + ');sendForm(' + "'data4SelectedStudentList'" + ');sendForm(' + "'data4TransferStudentList'" + ');sendForm(' + "'data4returnStudent'" + ');">';
	// 	str += '<input type = "button" class ="btn2" value="Student Profile" onclick="sendForm(' + "'data4StudentProfileDetails'" + ');sendForm(' + "'data4DisplayApplicatProfile'" + ');sendForm(' + "'data4StudentProfileDeteilsCheckUser'" + ');">';//
	// 	str += '<input type = "button" class ="btn2" value="Edit Applicant" onclick="sendForm(' + "'data4returnEditApplicant'" + ');sendForm(' + "'data4ApplicantDetailsEdit'" + ');">';
	// 	str += '<input type = "button" class ="btn2" value="Edit Student" onclick="sendForm(' + "'data4returnEditStudent'" + ');sendForm(' + "'data4StudentDetailsEdit'" + ');">';
	// 	str += '<input type = "button" class ="btn2" value="Print StudentID" onclick="sendForm(' + "'data4returnPrintID'" + ');sendForm(' + "'data4PrintStudentIDCard'" + ');">';
	// 	str += '<input type = "button" class ="btn2" value = "Print Letter" onclick ="sendForm(' + "'data4returnPrintLetters'" + ');sendForm(' + "'data4LetterApplicantListPrint'" + ');">';
	// 	str += '<input type = "button" class ="btn2" value = "Note and Notification" onclick ="sendForm(' + "'data4returnNoteAndNotification'" + ');sendForm(' + "'data4Notificationcheckdepartment'" + ');sendForm(' + "'data4StudentNotificationList'" + ');">';
	// 	str += '<input type = "button" class ="btn2" value="Transfer Students" onclick="sendForm(' + "'data4returnStudentsTransfer'" + ');">';
	// 	str += '<input type = "button" class ="btn2" value = "Add Student Paymentns" onclick ="sendForm(' + "'data4returnBulkPayment'" + ');sendForm(' + "'data4StudentPaymentRecord'" + ');sendForm(' + "'data4PaymentCat'" + ');sendForm(' + "'data4StudentPaymentDetails'" + ');sendForm(' + "'data4PaymentsDegreeWise'" + ')">';


	// 	str += '<input type = "button" class ="btn2" value="Add Message" onclick="sendForm(' + "'data4viewMessage'" + ');">';//sendForm('+"'data4checkdepartment'"+');sendForm('+"'data4checkUser'"+');">';//sendForm('+"'data4ApplicationComplete'"+')">'
	// 	str += '<input type = "button" class ="btn2" value="Add Message New" onclick="sendForm(' + "'data4viewMessageUpdate'" + ');sendForm(' + "'data4viewMessageToUpdate'" + ');">';//sendForm('+"'data4checkdepartment'"+');sendForm('+"'data4checkUser'"+');">';//sendForm('+"'data4ApplicationComplete'"+')">'


	// 	// str += '<input type = "button" class ="btn2" value="Add New Applicatins" onclick="OpenLink();">';

	// 	// str += '<input type = "button" class ="btn2" value="Applicants List" onclick="sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkdepartment'"+');sendForm('+"'data4checkUser'"+');">';//sendForm('+"'data4ApplicationComplete'"+')">'

	// 	// //added 23/8/2016..............
	// 	// str += '<input type = "button" class ="btn2" value="Interview List" onclick="sendForm('+"'data4ViewDegreeName'"+');sendForm('+"'data4checkUserInterview'"+');">';//sendForm('+"'data4ApplicationComplete'"+')">'

	// 	// str += '<input type = "button" class ="btn2" value="Applicants Selection" onclick="sendForm('+"'data4ApplicantSelection'"+');sendForm('+"'data4checkdepartmentSelection'"+');sendForm('+"'data4checkUserSelection'"+');">';//sendForm('+"'data4ApplicationComplete'"+')">'
	// 	// //...............................

	// 	// //added 1.9.2016....................
	// 	// str += '<input type = "button" class ="btn2" value="Selected Applicant List" onclick="sendForm('+"'data4SelectedApplicantList'"+');sendForm('+"'data4returnApplicantList'"+');">';
	// 	// //.........................

	// 	// //str += '<input type = "button" class ="btn2" value=" Register Applicants" onclick="sendForm('+"'data4LastRegistrationNo'"+');sendForm('+"'data4SelectedStudentList'"+');sendForm('+"'data4TransferStudentList'"+');sendForm('+"'data4returnStudent'"+');">';

	// 	// str += '<input type = "button" class ="btn2" value="Registered Students" onclick="sendForm('+"'data4LastRegistrationNo'"+');sendForm('+"'data4SelectedStudentList'"+');sendForm('+"'data4TransferStudentList'"+');sendForm('+"'data4returnStudent'"+');sendForm('+"'data4checkUserRegisterStudent'"+');sendForm('+"'data4checkdepartmentRegisterStudent'"+');">';

	// 	// //str += '<input type="button" class="btn2" value = "List Document" onclick ="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');sendForm('+"'data4AddListDocument'"+');sendForm('+"'data4SequanceNumberList'"+');sendForm('+"'data4SessionIDList'"+');sendForm('+"'data4returnListDocument'"+');">';//sendForm('+"'data4RegisteredStudentListPrint'"+');">';

	// 	// str += '<input type = "button" class ="btn2" value="Reprint Applicants" onclick="sendForm('+"'data4ReprintCheckUser'"+');">';

	// 	// str += '<input type = "button" class ="btn2" value="Add Student Accounts" onclick="sendForm('+"'data4AddStudentAccount'"+');">';//sendForm('+"'data4UpdateStudentAccount'"+');

	// 	// str += '<input type = "button" class ="btn2" value="Student Profile" onclick="sendForm('+"'data4StudentProfileDetails'"+');sendForm('+"'data4DisplayApplicatProfile'"+');sendForm('+"'data4StudentProfileDeteilsCheckUser'"+');">';//

	// 	// str += '<input type = "button" class ="btn2" value="Edit Applicant" onclick="sendForm('+"'data4returnEditApplicant'"+');sendForm('+"'data4ApplicantDetailsEdit'"+');">';

	// 	// str += '<input type = "button" class ="btn2" value="Edit Student" onclick="sendForm('+"'data4returnEditStudent'"+');sendForm('+"'data4StudentDetailsEdit'"+');">';

	// 	// str += '<input type = "button" class ="btn2" value="Print StudentID" onclick="sendForm('+"'data4returnPrintID'"+');sendForm('+"'data4PrintStudentIDCard'"+');">';

	// 	// str += '<input type="button" class="btn2" value = "Document Template Management" onclick ="sendForm('+"'data4returnDocumtMgt'"+');">';

	// 	// //str += '<input type="button" class="btn2" value = "Note and Notification" onclick ="sendForm('+"'data4returnNoteAndNotification'"+');sendForm('+"'data4Notificationcheckdepartment'"+');sendForm('+"'data4StudentNotificationList'"+');">';
	// 	// str += '<input type="button" class="btn2" value = "Note and Notification" onclick ="sendForm('+"'data4returnNoteAndNotification'"+');sendForm('+"'data4Notificationcheckdepartment'"+');sendForm('+"'data4StudentNotificationList'"+');sendForm('+"'data4PendingConfirmNote'"+');sendForm('+"'data4ApplicantNotificationList'"+');sendForm('+"'data4MessageList'"+');sendForm('+"'data4FacultyList'"+');">';

	// 	// str += '<input type = "button" class ="btn2" value="Add Degree Budget Details" onclick="sendForm('+"'data4returnBudgetDetails'"+');sendForm('+"'data4addDegreeDetails'"+');">'; 

	// 	// str += '<input type="button" class="btn2" value = "Edit User" onclick ="sendForm('+"'data4ViewUser'"+')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');

	// 	// str += '<input type="button" class="btn2" value = "Print Letter" onclick ="sendForm('+"'data4returnPrintLetters'"+');sendForm('+"'data4LetterApplicantListPrint'"+');">';

	// 	// str += '<input type = "button" class ="btn2" value="Transfer Students" onclick="sendForm('+"'data4returnStudentsTransfer'"+');">';

	// 	// str += '<input type="button" class="btn2" value = "Add Student Paymentns" onclick ="sendForm('+"'data4returnBulkPayment'"+');sendForm('+"'data4StudentPaymentRecord'"+');sendForm('+"'data4InstallmentDetails'"+');sendForm('+"'data4StudentPaymentDetails'"+');sendForm('+"'data4StudentPaymentDetails1'"+');sendForm('+"'data4StudentPaymentDetails2'"+');">';

	// 	// //Exam Results
	// 	// str += '<input type = "button" class ="btn2" value="Exam Results" onclick="sendForm('+"'data4addExamResults'"+');">';
	// 	// //str += "</div>";

	// 	// //Applicant Transfer
	// 	// str += '<input type = "button" class ="btn2" value="Applicant Transfer" onclick="sendForm('+"'data4TransferApplicant'"+');sendForm('+"'data4UpdateInfo'"+');">';
	// 	// //str += "</div>";






	// 	str += '<input type = "button" class ="btn2" value="logout" onclick=logOut();>';
	// 	str += "</div>";



	// 	str += "</div></fieldset></div>";



	// 	str += '</td></tr></table>';
	// 	str += "</div>";

	// }
	return str;
}
