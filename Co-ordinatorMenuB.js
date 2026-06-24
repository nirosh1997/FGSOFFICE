    
function formCoordinatorMenu(dsp) {

		str = "";
		if(dataRep['userName']=="Dean Medical"){
			title = "Dean - Faculty of Medicine";
		}
		else if(dataRep['userName']=="Dr. Prashanthi Narangoda" || dataRep['userName']=="Mr. Aruna Lokuliyana" || dataRep['userName']=="Prof. M.M. Gunathilake" || dataRep['userName']=="Dr.M.P.N. Janadari" || dataRep['userName']=="Ms.D.D.R. De Silva" || dataRep['userName']=="Dr. U . Dissanayake" || dataRep['userName']=="Prof. H. M. Nawarathna Banda" || dataRep['userName']=="Dr. D. Koggalage"){
			title = "Head of the Department"
		}
		else if(dataRep['userName']=="ssdean"){
			title = "Dean - Faculty of Social Sciences";
		}
		else if(dataRep['userName']=="Chathurika Mabulage"){
			title = "MHRM";
		}
		else{
		title = "Programme Coordinator";
		}

		if(dsp == "formCoordinatorMenu") {

			str  = "<div id='maintainformCo-ordinatorMenu'>";
			str +="<div></div><br/>";
			

			
			str += "<table><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
	
       
		
		str += "<div style='float:left;clear:both;' id='btnsection'>";
		
		if(dataRep['userName']=="Dr.Ruwan Wickramarachchi"){
			
			
			str += '<input type = "button" class ="btnD" value="Add New Applications" onclick="weblink();">';
		
		}
		
		if(dataRep['userName']=="Chathurika Mabulage"){
			
		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
		
		str += '<input type = "button" class ="btnD" value="Reprint Applications" onclick="OpenLinkPrint()">';
		
		str += '<input type="button" class="btnD" value = "Upload Photo & Signature" onclick ="uploadImage();">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		
        
		str += '<input type = "button" class ="btnD" value="Interview Screening List" onclick="sendForm('+"'data4ViewDegreeName'"+');sendForm('+"'data4checkUserInterview'"+');sendForm('+"'data4checkdepartmentInterview'"+');">';
		
		str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm('+"'data4SelectedApplicantList'"+');sendForm('+"'data4returnApplicantList'"+');sendForm('+"'data4checkUserSelectedApplicant'"+');sendForm('+"'data4checkdepartmentSelectedApplicant'"+');">';  
		
		str += '<input type = "button" class ="btnD" value="Registered Students" onclick="sendForm('+"'data4returnPrintID'"+');sendForm('+"'data4PrintStudentIDCard'"+');sendForm('+"'data4checkdepartmentPrintIDList'"+');sendForm('+"'data4checkUserPrintIDList'"+');">';
		
		str += '<input type="button" class="btnD" value = "Student Payments" onclick ="sendForm('+"'data4returnBulkPayment1'"+');sendForm('+"'data4checkdepartmentABView'"+');sendForm('+"'data4StudentPaymentRecordAB'"+'); sendForm('+"'data4InstallmentDetailsAB'"+');sendForm('+"'data4StudentPaymentDetailsAB'"+');sendForm('+"'data4StudentPaymentDetails2AB'"+');sendForm('+"'data4StudentPaymentDetails1AB'"+');sendForm('+"'data4checkUserPayments'"+');sendForm('+"'data4checkdepartmentPayments'"+');">'; //
		
		str += '<input type="button" class="btnD" value = "Change Password" onclick ="sendForm('+"'data4ViewUser'"+')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		
		
		
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		
		}
		else if(dataRep['userName']=="Prof. N. Jayathilaka"){
			
		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
		
		str += '<input type = "button" class ="btnD" value="Reprint Applications" onclick="OpenLinkPrint()">';
		
		str += '<input type="button" class="btnD" value = "Upload Photo & Signature" onclick ="uploadImage();">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		
        
		str += '<input type = "button" class ="btnD" value="Interview Screening List" onclick="sendForm('+"'data4ViewDegreeName'"+');sendForm('+"'data4checkUserInterview'"+');sendForm('+"'data4checkdepartmentInterview'"+');">';
        
		str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm('+"'data4SelectedApplicantList'"+');sendForm('+"'data4returnApplicantList'"+');sendForm('+"'data4checkUserSelectedApplicant'"+');sendForm('+"'data4checkdepartmentSelectedApplicant'"+');">';  
		
			
		str += '<input type = "button" class ="btnD" value="Registered Student List (Paid from 16 Digit Code)" onclick="sendForm('+"'data4return16DigitList'"+');sendForm('+"'data4checkUserPaid16DigitList'"+');sendForm('+"'data4checkdepartment16DigitList'"+');sendForm('+"'data4GetPaid16DigitList'"+');">'; 
		
		str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="showMenu('+"'formUploadResultsMenu'"+');">'
		
		
		str += '<input type="button" class="btnD" value = "Change Password" onclick ="sendForm('+"'data4ViewUser'"+')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		
		
		
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		
			
			
		}
		else{
		
		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm('+"'data4ApplicantList'"+');sendForm('+"'data4checkUser'"+');sendForm('+"'data4checkdepartment'"+');">';
		
		str += '<input type = "button" class ="btnD" value="Reprint Applications" onclick="OpenLinkPrint()">';
		
		str += '<input type="button" class="btnD" value = "Upload Photo & Signature" onclick ="uploadImage();">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		
        
		str += '<input type = "button" class ="btnD" value="Interview Screening List" onclick="sendForm('+"'data4ViewDegreeName'"+');sendForm('+"'data4checkUserInterview'"+');sendForm('+"'data4checkdepartmentInterview'"+');">';
        
		//str += '<input type = "button" class ="btnD" value="Applicants Selection" onclick="sendForm('+"'data4ApplicantSelection'"+');sendForm('+"'data4checkdepartmentSelection'"+');sendForm('+"'data4checkUserSelection'"+');">';//sendForm('+"'data4ApplicationComplete'"+')">'
		
		//str += '<input type = "button" class ="btnD" value="Applicants Selection" onclick="sendForm('+"'data4ApplicantSelection'"+');sendForm('+"'data4checkdepartmentSelection'"+');sendForm('+"'data4checkUserSelection'"+');">';//sendForm('+"'data4ApplicationComplete'"+')">'

		str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm('+"'data4SelectedApplicantList'"+');sendForm('+"'data4returnApplicantList'"+');sendForm('+"'data4checkUserSelectedApplicant'"+');sendForm('+"'data4checkdepartmentSelectedApplicant'"+');">';  
		
		//str += '<input type = "button" class ="btnD" value="Registered Students" onclick="sendForm('+"'data4LastRegistrationNo'"+');sendForm('+"'data4SelectedStudentList'"+');sendForm('+"'data4TransferStudentList'"+');sendForm('+"'data4returnStudent'"+');sendForm('+"'data4checkUserRegisterStudent'"+');sendForm('+"'data4checkdepartmentRegisterStudent'"+');">';
		
		str += '<input type = "button" class ="btnD" value="Registered Student List (Paid from 16 Digit Code)" onclick="sendForm('+"'data4return16DigitList'"+');sendForm('+"'data4checkUserPaid16DigitList'"+');sendForm('+"'data4checkdepartment16DigitList'"+');sendForm('+"'data4GetPaid16DigitList'"+');">'; 
		
		
		
		
		
		str += '<input type = "button" class ="btnD" value="Registered Students" onclick="sendForm('+"'data4returnPrintID'"+');sendForm('+"'data4PrintStudentIDCard'"+');sendForm('+"'data4checkdepartmentPrintIDList'"+');sendForm('+"'data4checkUserPrintIDList'"+');">';
		// 
		
		str += '<input type="button" class="btnD" value = "Student Payments" onclick ="sendForm('+"'data4returnBulkPayment1'"+');sendForm('+"'data4checkdepartmentABView'"+');sendForm('+"'data4StudentPaymentRecordAB'"+'); sendForm('+"'data4InstallmentDetailsAB'"+');sendForm('+"'data4StudentPaymentDetailsAB'"+');sendForm('+"'data4StudentPaymentDetails2AB'"+');sendForm('+"'data4StudentPaymentDetails1AB'"+');sendForm('+"'data4checkUserPayments'"+');sendForm('+"'data4checkdepartmentPayments'"+');">'; //
		
		
		str += '<input type = "button" class ="btnD" value="Download 16 Digit Paid Student List " onclick="sendForm('+"'data4GetPaid16DigitList'"+');sendForm('+"'data4checkUserPaid16DigitList'"+');sendForm('+"'data4checkdepartment16DigitList'"+');sendForm('+"'data4return16DigitList'"+');">'; 
			
		str += '<input type="button" class="btnD" value = "View 16 Digit Paid List" onclick ="sendForm('+"'data4checkdepartmentABView16Digit'"+');sendForm('+"'data4returnABView16Digit'"+');sendForm('+"'data4IncomeCategoryDetailsABView'"+');sendForm('+"'data416DigitStudentPaymentDetailsABView'"+');sendForm('+"'data416DigitCAlPaidAmountABView'"+');">';

		
		
		
		
		str += '<input type="button" class="btnD" value = "Exam Application Form" onclick ="showMenu('+"'formExamApplication'"+')">';
		

		//str += '<input type="button" class="btnD" value = "Print Admission Form" onclick ="showMenu('+"'formAdmissionMenu'"+');">';
		

		str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="showMenu('+"'formUploadResultsMenu'"+');">'
		
		
		str += '<input type="button" class="btnD" value = "Change Password" onclick ="sendForm('+"'data4ViewUser'"+')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		
		
		
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		
		}
		
		str += "</div>";
		
		
		str += '</td></tr></table>';
		str += "</div>";
		
		}
		return str;
	}

	function OpenLinkPrint(){
window.open('https://sis.kln.ac.lk/FGSApplication/');
}

function weblink(){
	window.open('https://sis.kln.ac.lk/eApplication/index.php?selectedDegreeType=Postgraduate%20Diploma%20in%20Defence%20Management');
	
}


