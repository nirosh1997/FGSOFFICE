
function formCoordinatorMenu(dsp) {


	str = "";
	if (dsp == "formAdministratorMenu" || dsp == "formCoordinatorMenu" || dsp == "formProgramClerkMenu" ||
		dsp == "formClerkMenu" || dsp == "formDeanMenu" || dsp == "formHeadMenu" ||
		dsp == "formAssistantRegistrarMenu" || dsp == "formICTMenu" || dsp == "formExamMenu" ||
		dsp == "formAssistantBursarMenu" || dsp == "formLibraryMenu" || dsp == "formClerkMenu" ||
		dsp == "formGWAIClerkMenu") {

		str += '<div class="row justify-content-md-center Dashboard-card">';



		if (dataRep["roleName"] == "Administrator" || dataRep["roleName"] == "FGS Deputy Registrar") {


			str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
			str += '<a style="cursor: pointer;" class="text-decoration-none" data-toggle="modal" data-target="#administratorModel">';
			str += '<div class="card shadow text-center border-0 cardorg">';
			str += '<div class="card-body">';
			str += '<img src="images/dashboard/administrator.png" class="dashboardImg">';
			str += '</div>';
			str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
			str += '<p class="card-title lead dashboardLabel" > Administrator Managment</p>';
			str += '</div>';
			str += '</div>';
			str += '</a>';
			str += '</div>';
		}

		if (dataRep["roleName"] == "Administrator" || dataRep["roleName"] == "Program Assistant/Clerk" 
			|| dataRep["roleName"] == "Coordinator" || dataRep['roleName']=='Technical Coordinator' 
			|| dataRep["roleName"] == "FGS Deputy Registrar" || dataRep["roleName"] == "Subject Clerk"
			|| dataRep["roleName"] == "Head of the Department" || dataRep["roleName"] == "Senior Assistant Registrar" || dataRep["roleName"] == "Assistant Registrar") {

			str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
			str += '<a style="cursor: pointer;" class="text-decoration-none" data-toggle="modal" data-target="#applicantModel">';
			str += '<div class="card shadow text-center border-0 cardorg">';
			str += '<div class="card-body">';
			str += '<img src="images/dashboard/Applicants.png" class="dashboardImg">';
			str += '</div>';
			str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
			str += '<p class="card-title lead dashboardLabel">Applicants</p>';
			str += '</div>';
			str += '</div>';
			str += '</a>';
			str += '</div>';
		}

		if (dataRep["roleName"] == "FGS Deputy Registrar" || dataRep["roleName"] == "Program Assistant/Clerk" || dataRep["roleName"] == "Administrator" 
			|| dataRep["roleName"] == "Coordinator" || dataRep['roleName']=='Technical Coordinator' 
			|| dataRep["roleName"] == "Subject Clerk" || dataRep["roleName"] == "Examination Department" || dataRep["roleName"] == "Senior Assistant Librarian"
			|| dataRep["roleName"] == "Head of the Department" || dataRep["roleName"] == "Senior Assistant Registrar" || dataRep["roleName"] == "Assistant Registrar") {
			str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
			str += '<a style="cursor: pointer;" class="text-decoration-none" data-toggle="modal" data-target="#studentModal">';
			str += '<div class="card shadow text-center border-0 cardorg">';
			str += '<div class="card-body">';
			str += '<img src="images/dashboard/Students.png" class="dashboardImg">';
			str += '</div>';
			str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
			str += '<p class="card-title lead dashboardLabel" >Students</p>';
			str += '</div>';
			str += '</div>';
			str += '</a>';
			str += '</div>';
		}

		if (dataRep["roleName"] == "FGS Deputy Registrar" || dataRep["roleName"] == "Program Assistant/Clerk" || dataRep["roleName"] == "Coordinator" || dataRep['roleName']=='Technical Coordinator' || dataRep["roleName"] == "Subject Clerk"
			|| dataRep["roleName"] == "Assistant Bursar" ||  dataRep["roleName"] == "Assistant Manager - Finance" || dataRep["roleName"] == "Head of the Department" || dataRep["roleName"] == "Administrator"  || dataRep["roleName"] == "Book Keeper - FGS Finanace"
			|| dataRep["roleName"] == "Senior Assistant Registrar" || dataRep["roleName"] == "Assistant Registrar"
		) {
			str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
			str += '<a style="cursor: pointer;" class="text-decoration-none" data-toggle="modal" data-target="#paymentModal">';
			str += '<div class="card shadow text-center border-0 cardorg">';
			str += '<div class="card-body">';
			str += '<img src="images/dashboard/payment.png" class="dashboardImg">';
			str += '</div>';
			str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
			str += '<p class="card-title lead dashboardLabel" >Payment</p>';
			str += '</div>';
			str += '</div>';
			str += '</a>';
			str += '</div>';
		}


		if (dataRep["roleName"] == "FGS Deputy Registrar" || dataRep["roleName"] == "Program Assistant/Clerk" 
			|| dataRep["roleName"] == "Coordinator"  || dataRep['roleName']=='Technical Coordinator'   || dataRep["roleName"] == "Head of the Department" || dataRep["roleName"] == "Administrator" 
			|| dataRep["roleName"] == "Subject Clerk") {

			str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
			str += '<a style="cursor: pointer;" class="text-decoration-none" data-toggle="modal" data-target="#examModal">';
			str += '<div class="card shadow text-center border-0 cardorg">';
			str += '<div class="card-body">';
			str += '<img src="images/dashboard/EXAM.png" class="dashboardImg">';
			str += '</div>';
			str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
			str += '<p class="card-title lead dashboardLabel" >Exams</p>';
			str += '</div>';
			str += '</div>';
			str += '</a>';
			str += '</div>';
		}

		if (dataRep["roleName"] == "FGS Deputy Registrar" || dataRep["roleName"] == "Program Assistant/Clerk"  || dataRep["roleName"] == "Administrator" 
			|| dataRep["roleName"] == "Coordinator" || dataRep['roleName']=='Technical Coordinator'  || dataRep["roleName"] == "Head of the Department"
			|| dataRep["roleName"] == "Examination Department" ) {

			str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
			str += '<a style="cursor: pointer;" class="text-decoration-none" data-toggle="modal" data-target="#upload_download_exam_resultModal">';
			str += '<div class="card shadow text-center border-0 cardorg">';
			str += '<div class="card-body">';
			str += '<img src="images/dashboard/UploadDownload.png" class="dashboardImg">';
			str += '</div>';
			str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
			str += '<p class="card-title lead dashboardLabel" >Exam Results</p>';
			// str += '<p class="card-title lead dashboardLabel" >Upload & Download Results</p>';Exam Results
			str += '</div>';
			str += '</div>';
			str += '</a>';
			str += '</div>';
		}

		if (dataRep["roleName"] == "FGS Deputy Registrar" || dataRep["roleName"] == "Program Assistant/Clerk"  || dataRep["roleName"] == "Administrator" 
			|| dataRep["roleName"] == "Coordinator" || dataRep['roleName']=='Technical Coordinator' || dataRep["roleName"] == "Senior Assistant Librarian"  
			|| dataRep["roleName"] == "Subject Clerk" || dataRep["roleName"] == "Head of the Department"
			|| dataRep["roleName"] == "Senior Assistant Registrar" || dataRep["roleName"] == "Assistant Registrar") {

			str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
			str += '<a style="cursor: pointer;" class="text-decoration-none" data-toggle="modal" data-target="#reportModal">';
			str += '<div class="card shadow text-center border-0 cardorg">';
			str += '<div class="card-body">';
			str += '<img src="images/dashboard/report.png" class="dashboardImg">';
			str += '</div>';
			str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
			str += '<p class="card-title lead dashboardLabel" >Reports	</p>';
			str += '</div>';
			str += '</div>';
			str += '</a>';
			str += '</div>';
		}

		if (dataRep["roleName"] == "FGS Deputy Registrar" || dataRep["roleName"] == "Program Assistant/Clerk"  || dataRep["roleName"] == "Administrator" 
			||  dataRep["roleName"] == "Assistant Manager - Finance" || dataRep["roleName"] == "Head of the Department"
			|| dataRep["roleName"] == "Coordinator" || dataRep['roleName']=='Technical Coordinator'  
			|| dataRep["roleName"] == "Subject Clerk" || dataRep["roleName"] == "Assistant Bursar" ) {


			str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
			str += '<a  style="cursor: pointer;" class="text-decoration-none" data-toggle="modal" data-target="#smsEmailModal">';
			str += '<div class="card shadow text-center border-0 cardorg">';
			str += '<div class="card-body">';
			str += '<img src="images/dashboard/SMSEmail.png" class="dashboardImg">';
			str += '</div>';
			str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
			str += '<p class="card-title lead dashboardLabel" >SMS/Email Communication</p>';
			str += '</div>';
			str += '</div>';
			str += '</a>';
			str += '</div>';
		}

		if (dataRep["roleName"] == "FGS Deputy Registrar" || dataRep["roleName"] == "Program Assistant/Clerk"  || dataRep["roleName"] == "Administrator" 
			||  dataRep["roleName"] == "Assistant Manager - Finance" || dataRep["roleName"] == "Head of the Department"
			|| dataRep["roleName"] == "Coordinator" || dataRep['roleName']=='Technical Coordinator'   || dataRep["roleName"] == "Book Keeper - FGS Finanace"
			|| dataRep["roleName"] == "Subject Clerk" || dataRep["roleName"] == "Assistant Bursar" || dataRep["roleName"] == "Examination Department") {
			str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
			str += '<a class="text-decoration-none" style="cursor: pointer;"  onclick ="setSearchApplicantStudent(' + "'applicant'" + ');sendForm(' + "'data4LoadApplicantView'" + ')">';
			str += '<div class="card shadow text-center border-0 cardorg">';
			str += '<div class="card-body">';
			str += '<img src="images/dashboard/Profile.png" class="dashboardImg">';
			str += '</div>';
			str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
			str += '<p class="card-title lead dashboardLabel" >Student/Applicant Profile</p>';
			str += '</div>';
			str += '</div>';
			str += '</a>';
			str += '</div>';
		}

		str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
		str += '<a  style="cursor: pointer;" class="text-decoration-none" onclick="showMenu(' + "'formDownloadRequirdFile'" + ');">';
		str += '<div class="card shadow text-center border-0 cardorg">';
		str += '<div class="card-body">';
		str += '<img src="images/dashboard/Download.png" class="dashboardImg">';
		str += '</div>';
		str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
		str += '<p class="card-title lead dashboardLabel" >Downloads</p>';
		str += '</div>';
		str += '</div>';
		str += '</a>';
		str += '</div>';


		str += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-2 p-2">';
		str += '<a class="text-decoration-none" style="cursor: pointer;" data-toggle="modal" data-target="#accountModal">';
		str += '<div class="card shadow text-center border-0 cardorg">';
		str += '<div class="card-body">';
		str += '<img src="images/dashboard/Account.png" class="dashboardImg">';
		str += '</div>';
		str += '<div class="card-footer d-flex align-items-center justify-content-center" style="height: 4.5rem;background-color:#282F3A">';
		str += '<p class="card-title lead dashboardLabel" >Settings</p>';
		str += '</div>';
		str += '</div>';
		str += '</a>';
		str += '</div>';

	}





	// str = "";
	// if (dataRep['userName'] == "Dean Medical") {
	// 	title = "Dean - Faculty of Medicine";
	// }
	// else if (dataRep['userName'] == "Dr. Prashanthi Narangoda" || dataRep['userName'] == "Mr. Aruna Lokuliyana" || dataRep['userName'] == "Prof. M.M. Gunathilake" || dataRep['userName'] == "Dr.M.P.N. Janadari" || dataRep['userName'] == "Ms.D.D.R. De Silva" || dataRep['userName'] == "Dr. U . Dissanayake" || dataRep['userName'] == "Prof. H. M. Nawarathna Banda" || dataRep['userName'] == "Dr. D. Koggalage") {
	// 	title = "Head of the Department"
	// }
	// else if (dataRep['userName'] == "ssdean") {
	// 	title = "Dean - Faculty of Social Sciences";
	// }
	// else if (dataRep['userName'] == "Chathurika Mabulage") {
	// 	title = "MHRM";
	// }
	// else {
	// 	title = "Programme Coordinator";
	// }

	// if (dsp == "formCoordinatorMenu") {

	// 	str = "<div id='maintainformCoordinatorMenu'>";
	// 	str += "<div></div><br/>";
	// 	str += "<table><tr><td>"
	// 	str += '<h2 >' + title + '</h2><hr>';
	// 	str += "<div style='float:left;clear:both;' id='btnsection'>";


	// 	if (dataRep['userName'] == "Dr.Ruwan Wickramarachchi") {
	// 		str += '<input type = "button" class ="btnD" value="Add New Applications" onclick="weblink();">';
	// 	}

	// 	if (dataRep['userName'] == "Chathurika Mabulage") {

	// 		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
	// 		str += '<input type = "button" class ="btnD" value="Reprint Applications" onclick="OpenLinkPrint()">';
	// 		str += '<input type="button" class="btnD" value = "Upload Photo & Signature" onclick ="uploadImage();">';
	// 		str += '<input type = "button" class ="btnD" value="Interview Screening List" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');sendForm(' + "'data4checkdepartmentInterview'" + ');">';
	// 		str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm(' + "'data4returnApplicantList'" + ');sendForm(' + "'data4checkUserSelectedApplicant'" + ');sendForm(' + "'data4checkdepartmentSelectedApplicant'" + ');">';
	// 		str += '<input type = "button" class ="btnD" value="Registered Students" onclick="sendForm(' + "'data4returnPrintID'" + ');sendForm(' + "'data4PrintStudentIDCard'" + ');sendForm(' + "'data4checkdepartmentPrintIDList'" + ');sendForm(' + "'data4checkUserPrintIDList'" + ');">';
	// 		str += '<input type="button" class="btnD" value = "Student Payments" onclick ="sendForm(' + "'data4checkdepartmentABView16DigitNew'" + '); sendForm(' + "'data4InstallmentDetailsAB'" + ');sendForm(' + "'data4returnABView16DigitNew'" + ');sendForm(' + "'data4IncomeCategoryDetailsABViewNew'" + ');">';
	// 	}
	// 	else if (dataRep['userName'] == "Prof. N. Jayathilaka") {

	// 		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
	// 		str += '<input type = "button" class ="btnD" value="Reprint Applications" onclick="OpenLinkPrint()">';
	// 		str += '<input type="button" class="btnD" value = "Upload Photo & Signature" onclick ="uploadImage();">';
	// 		str += '<input type = "button" class ="btnD" value="Interview Screening List" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');sendForm(' + "'data4checkdepartmentInterview'" + ');">';
	// 		str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm(' + "'data4returnApplicantList'" + ');sendForm(' + "'data4checkUserSelectedApplicant'" + ');sendForm(' + "'data4checkdepartmentSelectedApplicant'" + ');">';
	// 		str += '<input type="button" class="btnD" value = "Student Payments" onclick ="sendForm(' + "'data4checkdepartmentABView16DigitNew'" + '); sendForm(' + "'data4InstallmentDetailsAB'" + ');sendForm(' + "'data4returnABView16DigitNew'" + ');sendForm(' + "'data4IncomeCategoryDetailsABViewNew'" + ');">';
	// 		str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="showMenu(' + "'formUploadResultsMenu'" + ');">'

	// 	}
	// 	else {
	// 		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
	// 		str += '<input type = "button" class ="btnD" value="Reprint Applications" onclick="OpenLinkPrint()">';
	// 		str += '<input type="button" class="btnD" value = "Upload Photo & Signature" onclick ="uploadImage();">';
	// 		str += '<input type = "button" class ="btnD" value="Interview Screening List" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');sendForm(' + "'data4checkdepartmentInterview'" + ');">';
	// 		str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm(' + "'data4returnApplicantList'" + ');sendForm(' + "'data4checkUserSelectedApplicant'" + ');sendForm(' + "'data4checkdepartmentSelectedApplicant'" + ');">';
	// 		str += '<input type = "button" class ="btnD" value="Registered Students" onclick="sendForm(' + "'data4returnPrintID'" + ');sendForm(' + "'data4checkdepartmentPrintIDList'" + ');sendForm(' + "'data4checkUserPrintIDList'" + ');">';
	// 		str += '<input type="button" class="btnD" value = "Student Payments" onclick ="sendForm(' + "'data4checkdepartmentABView16DigitNew'" + '); sendForm(' + "'data4InstallmentDetailsAB'" + ');sendForm(' + "'data4returnABView16DigitNew'" + ');sendForm(' + "'data4IncomeCategoryDetailsABViewNew'" + ');">';
	// 		str += '<input type="button" class="btnD" value = "Exam Application Form" onclick ="showMenu(' + "'formExamApplication'" + ')">';
	// 		str += '<input type = "button" class ="btnD" value="Exam Applied List" onclick="sendForm(' + "'data4returnExamAppliedList'" + ');sendForm(' + "'data4checkUserExamAppliedList'" + ');sendForm(' + "'data4checkdepartmentExamAppliedList'" + ');">';

	// 		str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="showMenu(' + "'formUploadResultsMenu'" + ');">';
	// 	}

	// 	str += '<input type="button" class="btnD" value = "Change Password" onclick ="sendForm(' + "'data4ViewUser'" + ')">';
	// 	str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';

	// 	str += "</div>";


	// 	str += '</td></tr></table>';
	// 	str += "</div>";

	// }
	return str;
}

function OpenLinkPrint() {
	window.open('https://sis.kln.ac.lk/FGSApplication/');
}

function weblink() {
	window.open('https://sis.kln.ac.lk/eApplication/index.php?selectedDegreeType=Postgraduate%20Diploma%20in%20Defence%20Management');

}


