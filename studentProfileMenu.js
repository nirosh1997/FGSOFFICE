function formStudentProfileMenu(dsp) {

		str = "";
		title = "Student Profile";
		
	if(dsp == "formStudentProfileMenu"){

		str  = "<div id='maintainformStudentProfileMenu'>";
		str +="<div></div><br/>";
			

			
		str += "<table><tr><td>"
		str += '<h2 >'+title+'</h2><hr>';
		
		str += "<div style='float:left;clear:both;' id='btnsection'>";
		str += '<input type = "button" class ="btn2" value="Applicants" onclick="sendForm('+"'data4ApplicantList'"+')">';
		str += '<input type = "button" class ="btn2" value="Students" onclick="sendForm('+"'data4SelectedStudentList'"+')">';
		
		str += '<input type = "button" class ="btn2" value="Student Details" onclick="sendForm('+"'data4StudentProfileDetails'"+')">';
		
		//str += '<input type = "button" class ="btn2" value="Notification" onclick="sendForm('+"'data4ThesisNotification'"+')">';


		str += '<input type = "button" class ="btn2" value="logout" onclick=logOut();>';
		str += "</div>";
		
		
		str += '</td></tr></table>';
		str += "</div>";
		
	}
		return str;
}
