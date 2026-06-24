

function formStudentMenu(dsp){

title = "Student Details";

		str = "";

		if(dsp == "formStudentMenu"){
				str  = "<div id='studentDetails'>";
				str += "<table ><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
			
				str += '<form name="maintainStudentDetails">';
				str += "<center>";
				
				str += '<input type = "button" class ="btn2" value="Add Selected Students" onclick="sendForm('+"'data4addSelectedStudent'"+');sendForm('+"'data4SelectedStudent'"+');">';
		
				str += '<input type = "button" class ="btn2" value="Student Registration Payment" onclick="sendForm('+"'data4selectedStudentpay'"+');">';
		
				
				str += '<input type="button" class="btn2" value = "Appoint Student for Courses" onclick ="sendForm('+"'data4seeStudentDetails'"+')">';
			
				str += '<input type = "button" class ="btn2" value="Extend Duration" onclick="sendForm('+"'data4studentExtendedTime'"+');">';
		
				str += '<input type = "button" class ="btn2" value="Student Other Payment" onclick="sendForm('+"'data4studentOtherPayment'"+');">';
				
				
				//str += '<input type="button" class="btn2" value = " Student Reports" onclick ="showMenu('+"'formReports'"+');">';

				
				
				str += '<input type="button" class="btn2" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
		}
		return str;
	}
			
		
				
