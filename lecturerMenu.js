

function formLecturerMenu(dsp){

title = "Lecturer Details";

		str = "";

		if(dsp == "formLecturerMenu"){
				str  = "<div id='lecturerDetails'>";
				str += "<table ><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
			
				str += '<form name="maintainLecturerDetails">';
				str += "<center>";
				
				str += '<input type = "button" class ="btn2" value="Lecturer Registration" onclick="sendForm('+"'data4addLectureRegistration'"+')">';

				str += '<input type="button" class="btn2" value = "Appoint Lecturer for Course" onclick ="sendForm('+"'data4seeLecturerDetails'"+');">';
		
				str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
		}
		return str;
	}
	