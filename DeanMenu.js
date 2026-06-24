//Hiru

function formDeanMenu(dsp) {

		str = "";
		if(dataRep['userName']=="ssdean"){
		title = "Dean-Social Sciences";
		}
		else{
		title = "Dean";
		}

		if(dsp == "formDeanMenu") {

			str  = "<div id='maintainformDeanMenu'>";
			str +="<div></div><br/>";
			

			
			str += "<table><tr><td>"
			

		
		if(dataRep['userName']=="Dean Faculty of Graduate Studies" || dataRep['userName']=="profjayamaha"){
			
		str += '<h2 >Dean - Faculty of Graduate Studies</h2><hr>';
		
		//str += "<div style='float:left;clear:both;' id='btnsection'>";
		str +="<div><fieldset  class='field' style='height:20px; align-content: center;border:none;'></fieldset></div><div class='section1' id='TransferProfile' style='margin-left:-2px;'><fieldset  class='field' style='width:1300px; align-content: center;'><div style='clear:both;align-content: center;margin-left:20px;'>"; 
        	
		str += '</br><input type = "button" class ="btnD" value="Add New Applications" onclick="OpenLink();">';
		
		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm('+"'data4checkdepartment'"+');sendForm('+"'data4checkUser'"+');">';
		
		str += '<input type = "button" class ="btnD" value="Interview Screening List" onclick="sendForm('+"'data4ViewDegreeName'"+');sendForm('+"'data4checkUserInterview'"+');">';
        
		str += '<input type = "button" class ="btnD" value="Applicants Selection" onclick="sendForm('+"'data4ApplicantSelection'"+');sendForm('+"'data4checkdepartmentSelection'"+');sendForm('+"'data4checkUserSelection'"+');">';//sendForm('+"'data4ApplicationComplete'"+')">'
		
		str += '<input type = "button" class ="btnD" value="Selected Applicants List" onclick="sendForm('+"'data4SelectedApplicantList'"+');sendForm('+"'data4returnApplicantList'"+');">';
		
		str += '<input type = "button" class ="btnD" value="Registered Students" onclick="sendForm(' + "'data4returnStudent'" + ');sendForm(' + "'data4checkUserRegisterStudent'" + ');sendForm(' + "'data4checkdepartmentRegisterStudent'" + ');sendForm(' + "'data4getLibCode'" + ');">';
	



		str += '<input type = "button" class ="btnD" value="Print Student ID" onclick="sendForm('+"'data4returnPrintID'"+');sendForm('+"'data4PrintStudentIDCard'"+');">';
		
		str += '<input type="button" class="btnD" value = "Print Letters" onclick ="sendForm('+"'data4returnPrintLetters'"+');sendForm('+"'data4LetterApplicantListPrint'"+');">'; 
		
		str += '<input type = "button" class ="btnD" value="Student Login" onclick=Studentloginview();>';
		
		str += '<input type = "button" class ="btnD" value="View Log Details" onclick=logview();>';
		
		str += '<input type="button" class="btnD" value = "Online Payments" onclick ="onlinePayment();">';
		
		str += '<input type="button" class="btnD" value = "View Online Payments" onclick ="Viewonlinepayment();">';
		
		str += '<input type="button" class="btnD" value = "Change Password" onclick ="sendForm('+"'data4ViewUser'"+')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		
		
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		
		str += "</div></br></br></br>";
		
		str +="</div></fieldset></div><div></br><fieldset  class='field' style='height:20px; align-content: center;border:none;'></fieldset></div>";
		
		str +="</br></br></br><div class='section1' id='TransferProfile' style='margin-left:-2px;'><fieldset  class='field' style='width:1300px;'><div style='clear:both;margin-left:70px;'>"; 
        str += "</br><div style='float:left;clear:both;' id='btnsection'>";
		
		str += '<input type = "button" class ="btnD" value="Student Profile" onclick="sendForm('+"'data4DisplayStudentNoforProfile'"+');">';//sendForm('+"'data4StudentProfileDeteilsCheckUser'"+'); sendForm('+"'data4DisplayApplicatProfile'"+');
        str += '<input type = "button" class ="btnD" value="Edit Applicant Details" onclick="sendForm('+"'data4returnEditApplicant'"+');sendForm('+"'data4ApplicantDetailsEdit'"+');">';
		str += '<input type = "button" class ="btnD" value="Edit Student Details" onclick="sendForm('+"'data4returnEditStudent'"+');sendForm('+"'data4StudentDetailsEdit'"+');">';		str += '<input type="button" class="btnD" value = "Note and Notification" onclick ="sendForm('+"'data4returnNoteAndNotification'"+');sendForm('+"'data4Notificationcheckdepartment'"+');sendForm('+"'data4StudentNotificationList'"+');">';
		//str += '<input type = "button" class ="btnD" value="Add Degree Budget Details" onclick="sendForm('+"'data4returnBudgetDetails'"+');sendForm('+"'data4addDegreeDetails'"+');">';         
		//str += '<input type="button" class="btnD" value = "Edit User" onclick ="sendForm('+"'data4ViewUser'"+')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		//str += '<input type = "button" class ="btnD" value="Transfer Students" onclick="sendForm('+"'data4returnStudentsTransfer'"+');">';	
		str += '<input type="button" class="btnD" value = "Add Student Paymentns" onclick ="sendForm('+"'data4returnBulkPayment'"+');sendForm('+"'data4StudentPaymentRecord'"+');sendForm('+"'data4InstallmentDetails'"+');sendForm('+"'data4StudentPaymentDetails'"+');sendForm('+"'data4StudentPaymentDetails1'"+');sendForm('+"'data4StudentPaymentDetails2'"+');">';
//str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		str += "</div></br>";
		str += "</div></br></br>";
		str +="</div></fieldset></div>";
		
		str +="</br></br></br><div class='section1' style='margin-left:-2px;'><fieldset  class='field' style='width:1300px;'><div style='clear:both;margin-left:70px;'>"; 
        str += "</br><div style='float:left;clear:both;' id='btnsection'>";
		
		str += '<input type="button" class="btnD" value = "Add New Course Unit" onclick ="sendForm('+"'data4getsubjectDetails'"+');sendForm('+"'data4getdegree'"+');">';
		
		str += '<input type="button" class="btnD" value = "View Courses" onclick ="sendForm('+"'data4viewtsubjectDetails'"+');sendForm('+"'data4viewdegreeSubjects'"+');">';
		//str += "</div>";
		

		str += '<input type="button" class="btnD" value = "Exam Application Form" onclick ="showMenu('+"'formExamApplication'"+')">';
		
		str += '<input type="button" class="btnD" value = "Admission Form" onclick ="sendForm('+"'data4getAdmissionStudent'"+');sendForm('+"'data4getAdmissionSubject'"+');">';//sendForm('+"'data4Admission'"+'); //sendForm('+"'data4getAdmissionDegree'"+');  

		str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="sendForm('+"'data4DownloadsubjectDetails'"+');sendForm('+"'data4DownloadStudentMarks'"+');sendForm('+"'data4DownloaddegreeSubjects'"+');">'


		str += "</div></br>";
		str += "</div></br></br>";
		str +="</div></fieldset></div>";
		
		//Reseach Student-----------------------------------------------------------
		
		str +="<div></br></br></div>";
		str +="</br></br></br><div class='section1' style='margin-left:-2px;'><fieldset  class='field' style='width:1300px;'><div style='clear:both;margin-left:70px;'>"; 
        str += "<div style='float:left;clear:both;' id='btnsection'>";
		
		
		str += '<input type = "button" class ="btnD" value="PhD/MPhil Applicants List" onclick="sendForm('+"'data4ResearchApplicantList'"+');sendForm('+"'data4Researchcheckdepartment'"+');sendForm('+"'data4ResearchcheckUser'"+');">';
		
		str += '<input type = "button" class ="btnD" value="PhD/MPhil Applicants Selection" onclick="sendForm('+"'data4ResearchApplicantSelection'"+');sendForm('+"'data4ResearchcheckdepartmentSelection'"+');sendForm('+"'data4ResearchcheckUserSelection'"+');">';
		
		
		
		// str += '<input type = "button" class ="btnD" value="Update PhD/MPhil Applicants Details" onclick="sendForm('+"'data4returnEditResearchApplicant'"+');sendForm('+"'data4ResearchApplicantDetailsEdit'"+');sendForm('+"'data4EditResearchType'"+');">';
		
		
		str += '<input type = "button" class ="btnD" value="PhD/MPhil Student Register" onclick="sendForm('+"'data4ResearchLastRegistrationNo'"+');sendForm('+"'data4ResearchSelectedStudentList'"+');sendForm('+"'data4ResearchreturnStudent'"+');sendForm('+"'data4ResearchcheckUserRegisterStudent'"+');sendForm('+"'data4ResearchcheckdepartmentRegisterStudent'"+');">'; 
		
		str += '<input type = "button" class ="btnD" value="PhD/MPhil Student Profile" onclick="sendForm('+"'data4DisplayResearchStudentNoforProfile'"+');sendForm('+"'data4DisplayResearchApplicatProfile'"+');sendForm('+"'data4ResearchStudentProfileDeteilsCheckUser'"+');">';// 

	
	
	
		str +="</div></fieldset></div>";
		
		
		}
		else{
			
		str += '<h2 >'+title+'</h2><hr>';		
		str += "<div style='float:left;clear:both;' id='btnsection'>";
		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkdepartment'"+');">';
		str += '<input type = "button" class ="btnD" value="Reprint Applications" onclick="sendForm('+"'data4ReprintCheckUser'"+');">';
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		str += "</div>";
		}
		str += '</td></tr></table>';
		str += "</div>";
		
		}
		return str;
	}
	
	function logview()
	{
		//window.open="logView.php";
		window.open("logView.php", "_blank")
	}

	function Studentloginview(){
		window.open("https://sis.kln.ac.lk/StudentView", "_blank")
	}
	
	function Viewonlinepayment(){
		window.open('https://sis.kln.ac.lk/PayService/ClientApp/info.php');	
	}
	
	function onlinePayment(){
		window.open('https://sis.kln.ac.lk/PayService/ClientApp/');	
	}