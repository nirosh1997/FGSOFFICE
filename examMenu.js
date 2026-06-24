function formExamMenu(dsp) {

		str = "";
		title = "Examination Department";
		

		if(dsp == "formExamMenu") {

			str  = "<div id='maintainformExamMenu'>";
			str +="<div></div><br/>";
			

			
			str += "<table><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			//var u=document.cookie;
			///var ur=(u.split(";",2)[u.split(";",2).length-2]);
			//var use =(ur.split("=",2)[ur.split(";",2).length-0]);
            //dataRep["userName"]=use;		
		str += "<div style='float:left;clear:both;' id='btnsection'>";

		//Exam Results
		//str += '<input type = "button" class ="btnD" value="Exam Results" onclick="sendForm('+"'data4addExamResults'"+');">';
		
		//str += '<input type = "button" class ="btnD" value="Add Bulk Examination Results" onclick="sendForm('+"'data4addProgramm'"+');sendForm('+"'data4addaccy'"+');sendForm('+"'data4addSubject'"+');">';
	
		str += '<input type="button" class="btnD" value = "Add New Course Unit" onclick ="sendForm('+"'data4getsubjectDetails'"+');sendForm('+"'data4getdegree'"+');">';
		
		str += '<input type="button" class="btnD" value = "View Courses" onclick ="sendForm('+"'data4viewtsubjectDetails'"+');sendForm('+"'data4viewdegreeSubjects'"+');">';
		//str += "</div>";
		

		//str += '<input type="button" class="btnD" value = "Exam Application Form" onclick ="sendForm('+"'data4ApplicationFormExam'"+');sendForm('+"'data4addApplicationForm'"+');sendForm('+"'data4checkUserExamApplication'"+');sendForm('+"'data4checkdepartmentExamApplication'"+');">';
		
		
		//correct one
		//str += '<input type="button" class="btnD" value = "Exam Application Form" onclick ="showMenu('+"'formExamApplication'"+')">';
		//correct one
	
		str += '<input type="button" class="btnD" value = "Print Admission Form" onclick ="showMenu('+"'formAdmissionMenu'"+');">';//sendForm('+"'data4Admission'"+'); //sendForm('+"'data4getAdmissionDegree'"+');  sendForm('+"'data4checkUserExamAdmission'"+');sendForm('+"'data4checkdepartmentExamAdmission'"+');

		//str += '<input type="button" class="btnD" value = "Admission Form" onclick ="sendForm('+"'data4getAdmissionStudent'"+');sendForm('+"'data4getAdmissionSubject'"+');">';//sendForm('+"'data4Admission'"+'); //sendForm('+"'data4getAdmissionDegree'"+');  sendForm('+"'data4checkUserExamAdmission'"+');sendForm('+"'data4checkdepartmentExamAdmission'"+');

		
		
		//str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="sendForm('+"'data4DownloadsubjectDetails'"+');sendForm('+"'data4DownloadStudentMarks'"+');sendForm('+"'data4DownloaddegreeSubjects'"+');">'
		
		
		//str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="sendForm('+"'data4DownloadsubjectDetails'"+');sendForm('+"'data4DownloaddegreeSubjects'"+');">'
		
		
		//str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="sendForm('+"'data4DownloadsubjectDetails'"+');sendForm('+"'data4DownloaddegreeSubjects'"+');">'
		
		//final
		//str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="sendForm('+"'data4DownloadsubjectDetails'"+');sendForm('+"'data4DownloaddegreeSubjects'"+');">'
		
		str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="showMenu('+"'formUploadResultsMenu'"+');">'
		
		
		str += '<input type="button" class="btnD" value = "Final Result" onclick ="sendForm('+"'data4viewdegreeforFinal'"+');">';
		
		// str += '<input type="button" class="btnD" value = "Reports" onclick ="">';
		
		
	//previous 
	//str += '<input type="button" class="btnD" value = "Upload & Downloads" onclick ="sendForm('+"'data4DownloadsubjectDetails'"+');sendForm('+"'data4DownloaddegreeSubjects'"+');sendForm('+"'data4checkUserExamUpDown'"+');sendForm('+"'data4checkdepartmentExamUpDown'"+');">'
		
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		str += "</div>";

		str += '</td></tr></table>';
		str += "</div>";
		
		}
		
		return str;
	}