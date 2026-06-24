//dataRep["userName"]="";  

function formClerkMenu(dsp) {

	str = "";
	if (dataRep["roleName"] == "Subject Clerk") {
		title = "Subject Clerk";
	}
	if (dataRep["roleName"] == "FGS Deputy Registrar") {
		title = "Administrator";
	}

	if (dsp == "formClerkMenu") {

		str = "<div id='maintainformClerkMenu'>";
		str += "<div></div><br/>";



		str += "<table><tr><td>"
		str += '<h2 >' + title + '</h2><hr>';
		//var u=document.cookie;
		///var ur=(u.split(";",2)[u.split(";",2).length-2]);
		//var use =(ur.split("=",2)[ur.split(";",2).length-0]);
		//dataRep["userName"]=use;		
		str += "<div style='float:left;clear:both;' id='btnsection'>";

		str += '<input type = "button" class ="btnD" value="Add New Applicatins" onclick="OpenLink();">';


		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm(' + "'data4checkdepartment'" + ');sendForm(' + "'data4checkUser'" + ');">';//sendForm('+"'data4ApplicationComplete'"+')">'

		
		//added 23/8/2016..............
		str += '<input type = "button" class ="btnD" value="Interview List" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');">';//sendForm('+"'data4ApplicationComplete'"+')">'

		str += '<input type = "button" class ="btnD" value="Applicants Selection" onclick="sendForm(' + "'data4ApplicantSelection'" + ');sendForm(' + "'data4checkdepartmentSelection'" + ');sendForm(' + "'data4checkUserSelection'" + ');">';//sendForm('+"'data4ApplicationComplete'"+')">'
		//...............................

		//added 1.9.2016....................
		str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm('+"'data4returnApplicantList'"+');sendForm('+"'data4checkUserSelectedApplicant'"+');sendForm('+"'data4checkdepartmentSelectedApplicant'"+');">';
		// str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm('+"'data4SelectedApplicantList'"+');sendForm('+"'data4returnApplicantList'"+');sendForm('+"'data4checkUserSelectedApplicant'"+');sendForm('+"'data4checkdepartmentSelectedApplicant'"+');">';  
		
		//.........................

		//str += '<input type = "button" class ="btn2" value=" Register Applicants" onclick="sendForm('+"'data4LastRegistrationNo'"+');sendForm('+"'data4SelectedStudentList'"+');sendForm('+"'data4TransferStudentList'"+');sendForm('+"'data4returnStudent'"+');">';

		str += '<input type = "button" class ="btnD" value="Registered Students" onclick="sendForm(' + "'data4returnStudent'" + ');sendForm(' + "'data4checkUserRegisterStudent'" + ');sendForm(' + "'data4checkdepartmentRegisterStudent'" + ');sendForm(' + "'data4getLibCode'" + ');">';





		//str += '<input type="button" class="btn2" value = "List Document" onclick ="sendForm('+"'data4ListDocName'"+');sendForm('+"'data4ApplicantListPrint'"+');sendForm('+"'data4AddListDocument'"+');sendForm('+"'data4SequanceNumberList'"+');sendForm('+"'data4SessionIDList'"+');sendForm('+"'data4returnListDocument'"+');">';//sendForm('+"'data4RegisteredStudentListPrint'"+');">';


		str += '<input type = "button" class ="btnD" value="Reprint Applicants" onclick="sendForm(' + "'data4ReprintCheckUser'" + ');">';



		str += '<input type = "button" class ="btnD" value="Add Student Accounts" onclick="sendForm(' + "'data4AddStudentAccount'" + ');">';//sendForm('+"'data4UpdateStudentAccount'"+');


		str += '<input type = "button" class ="btnD" value="Student Profile" onclick="sendForm(' + "'data4DisplayStudentNoforProfile'" + ');sendForm(' + "'data4DisplayApplicatProfile'" + ');sendForm(' + "'data4StudentProfileDeteilsCheckUser'" + ');">';//


		str += '<input type = "button" class ="btnD" value="Edit Applicant" onclick="sendForm(' + "'data4returnEditApplicant'" + ');sendForm(' + "'data4ApplicantDetailsEdit'" + ');">';

		str += '<input type = "button" class ="btnD" value="Edit Student" onclick="sendForm(' + "'data4returnEditStudent'" + ');sendForm(' + "'data4StudentDetailsEdit'" + ');">';

		str += '<input type = "button" class ="btnD" value="Print StudentID" onclick="sendForm(' + "'data4PrintStudentIDCard'" + ');sendForm(' + "'data4checkUserPrintIDList'" + ');sendForm(' + "'data4checkdepartmentPrintIDList'" + ');">';



		//str += '<input type="button" class="btn2" value = "Note and Notification" onclick ="sendForm('+"'data4returnNoteAndNotification'"+');sendForm('+"'data4Notificationcheckdepartment'"+');sendForm('+"'data4StudentNotificationList'"+');">';
		str += '<input type="button" class="btnD" value = "Note and Notification" onclick ="sendForm(' + "'data4returnNoteAndNotification'" + ');sendForm(' + "'data4Notificationcheckdepartment'" + ');sendForm(' + "'data4StudentNotificationList'" + ');sendForm(' + "'data4PendingConfirmNote'" + ');sendForm(' + "'data4ApplicantNotificationList'" + ');sendForm(' + "'data4MessageList'" + ');sendForm(' + "'data4FacultyList'" + ');">';





		str += '<input type="button" class="btnD" value = "Print Letter" onclick ="sendForm(' + "'data4returnPrintLetters'" + ');">';

		//add to admin menu	
		//str += '<input type = "button" class ="btn2" value="Transfer Students" onclick="sendForm('+"'data4returnStudentsTransfer'"+');">';
		//str += '<input type="button" class="btn2" value = "Document Template Management" onclick ="sendForm('+"'data4returnDocumtMgt'"+');">';
		//str += '<input type = "button" class ="btn2" value="Add Degree Budget Details" onclick="sendForm('+"'data4returnBudgetDetails'"+');sendForm('+"'data4addDegreeDetails'"+');">'; 
		//str += '<input type="button" class="btn2" value = "Edit User" onclick ="sendForm('+"'data4ViewUser'"+')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');



		//str += '<input type="button" class="btnD" value = "Add Student Paymentns" onclick ="sendForm('+"'data4returnBulkPayment'"+');sendForm('+"'data4StudentPaymentRecord'"+'); sendForm('+"'data4InstallmentDetails'"+');sendForm('+"'data4StudentPaymentDetails'"+');sendForm('+"'data4StudentPaymentDetails1'"+');sendForm('+"'data4StudentPaymentDetails2'"+');">'; //sendForm('+"'data4StudentPayDetails"+');



		str += '<input type="button" class="btnD" value = "Student Payments" onclick ="sendForm(' + "'data4returnBulkPayment1'" + ');sendForm(' + "'data4StudentPaymentRecordAB'" + '); sendForm(' + "'data4InstallmentDetailsAB'" + ');sendForm(' + "'data4StudentPaymentDetailsAB'" + ');sendForm(' + "'data4StudentPaymentDetails1AB'" + ');sendForm(' + "'data4StudentPaymentDetails2AB'" + ');">';







		//Exam Results
		//	str += '<input type = "button" class ="btn2" value="Exam Results" onclick="sendForm('+"'data4addExamResults'"+');">';
		//str += "</div>";

		//Applicant Transfer
		str += '<input type = "button" class ="btnD" value="Applicant Transfer" onclick="sendForm(' + "'data4TransferApplicant'" + ');sendForm(' + "'data4UpdateInfo'" + ');">';
		//str += "</div>";
		str += '<input type="button" class="btnD" value = "View Online Payments" onclick ="Viewonlinepayment();">';

		str += '<input type="button" class="btnD" value = "Exam Application Form" onclick ="showMenu(' + "'formExamApplication'" + ')">';

		str += '<input type="button" class="btnD" value = "Print Admission Form" onclick ="showMenu(' + "'formAdmissionMenu'" + ');">';//sendForm('+"'data4Admission'"+'); //sendForm('+"'data4getAdmissionDegree'"+');  sendForm('+"'data4checkUserExamAdmission'"+');sendForm('+"'data4checkdepartmentExamAdmission'"+');


		str += '<input type="button" class="btnD" value = "Upload Photo & Signature" onclick ="uploadImage();">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');


		str += '<input type="button" class="btnD" value = "Change Password" onclick ="sendForm(' + "'data4ViewUser'" + ')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');



		str += '<input type = "button" class ="btnD" value="Download 16 Digit Paid Student List " onclick="sendForm(' + "'data4GetPaid16DigitList'" + ');sendForm(' + "'data4checkUserPaid16DigitList'" + ');sendForm(' + "'data4checkdepartment16DigitList'" + ');sendForm(' + "'data4return16DigitList'" + ');">';


		str += '<input type="button" class="btnD" value = "View 16 Digit Paid List" onclick ="sendForm(' + "'data4checkdepartmentABView16Digit'" + ');sendForm(' + "'data4returnABView16Digit'" + ');sendForm(' + "'data4IncomeCategoryDetailsABView'" + ');sendForm(' + "'data416DigitStudentPaymentDetailsABView'" + ');sendForm(' + "'data416DigitCAlPaidAmountABView'" + ');">';
		// str += '<input type="button" class="btnD" value = "New Payment View" onclick ="sendForm('+"'data4checkdepartmentABView16DigitNew'"+');sendForm('+"'data4returnABView16DigitNew'"+');sendForm('+"'data4IncomeCategoryDetailsABViewNew'"+');">';
		str += '<input type="button" class="btnD" value = "New Payment View" onclick ="sendForm('+"'data4checkdepartmentABView16DigitNew'"+'); sendForm('+"'data4InstallmentDetailsAB'"+');sendForm('+"'data4returnABView16DigitNew'"+');sendForm('+"'data4IncomeCategoryDetailsABViewNew'"+');">';



		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		str += "</div>";




		if (dataRep['userName'] != "SAR-GWAI") {

			//Reseach Student-----------------------------------------------------------

			str += "<div><br><br> </div>";
			str += "<div class='section1' style='margin-left:-2px;'><fieldset  class='field' style='width:1300px;'><div style='clear:both'>";
			str += "<div style='float:left;clear:both;' id='btnsection'>";


			str += '<input type = "button" class ="btnD" value="PhD/MPhil Applicants List" onclick="sendForm(' + "'data4ResearchApplicantList'" + ');sendForm(' + "'data4Researchcheckdepartment'" + ');sendForm(' + "'data4ResearchcheckUser'" + ');">';

			str += '<input type = "button" class ="btnD" value="PhD/MPhil Applicants Selection" onclick="sendForm(' + "'data4ResearchApplicantSelection'" + ');sendForm(' + "'data4ResearchcheckdepartmentSelection'" + ');sendForm(' + "'data4ResearchcheckUserSelection'" + ');">';


			// str += '<input type = "button" class ="btnD" value="Update PhD/MPhil Applicants Details" onclick="sendForm('+"'data4returnEditResearchApplicant'"+');sendForm('+"'data4ResearchApplicantDetailsEdit'"+');sendForm('+"'data4EditResearchType'"+');">';


			str += '<input type = "button" class ="btnD" value="PhD/MPhil Student Register" onclick="sendForm(' + "'data4ResearchLastRegistrationNo'" + ');sendForm(' + "'data4ResearchSelectedStudentList'" + ');sendForm(' + "'data4ResearchreturnStudent'" + ');sendForm(' + "'data4ResearchcheckUserRegisterStudent'" + ');sendForm(' + "'data4ResearchcheckdepartmentRegisterStudent'" + ');">';

			str += '<input type = "button" class ="btnD" value="PhD/MPhil Student Profile" onclick="sendForm(' + "'data4DisplayResearchStudentNoforProfile'" + ');sendForm(' + "'data4DisplayResearchApplicatProfile'" + ');sendForm(' + "'data4ResearchStudentProfileDeteilsCheckUser'" + ');">';// 



			str += "</div></fieldset>";
			str += "</div>";

			str += "<div><br><br> </div>";
			str += "<div class='section1' style='margin-left:-2px;padding: 10px;'><fieldset><div style='clear:both'>";
			str += "<div style='float:left;clear:both;' id='btnsection'>";
			str += '<input type = "button" class ="btnD" value="List for Wifi Creation" onclick="sendForm(' + "'data4getDegrees'" + ');">';// 
			// str += '<input type = "button" class ="btnD" value="Upload Wifi Created Students" onclick="sendForm('+"'data4DisplayResearchStudentNoforProfile'"+');">';// 
			
			str += "</div></fieldset>";
			str += "</div>";

		}














		//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		str += '</td></tr></table>';
		str += "</div>";

	}

	return str;
}

function OpenLink() {
	window.open('https://sis.kln.ac.lk/FGSeApplicationSC/');
}

function Viewonlinepayment() {
	window.open('https://sis.kln.ac.lk/PayService/ClientApp/info.php');
}


function uploadImage() {
	window.open('https://sis.kln.ac.lk/FGS2015c/uploadimg.php');
}