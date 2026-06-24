//dataRep["userName"]="";  
  
function formLibraryMenu(dsp) {

		str = "";
		if(dataRep["roleName"]=="Librarian"){
		title = "Librarian";
		}
		
		
		if(dsp == "formLibraryMenu") {

			str  = "<div id='maintainformLibraryMenu'>";
			str +="<div></div><br/>";
			

			
			str += "<table><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
					
		str += "<div style='float:left;clear:both;' id='btnsection'>";

		// str += '<input type = "button" class ="btnD" value="Registered Students" onclick="sendForm('+"'data4LastRegistrationNo'"+');sendForm('+"'data4SelectedStudentList'"+');sendForm('+"'data4TransferStudentList'"+');sendForm('+"'data4returnStudent'"+');sendForm('+"'data4checkUserRegisterStudent'"+');sendForm('+"'data4checkdepartmentRegisterStudent'"+');sendForm('+"'data4getLibCode'"+');">'; 
	
		str += '<input type = "button" class ="btnD" value="Student Details" onclick="sendForm('+"'data4returnPrintID'"+');sendForm('+"'data4PrintStudentIDCard'"+');">';

		
		str += '<input type="button" class="btnD" value = "Change Password" onclick ="sendForm('+"'data4ViewUser'"+')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		

		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		str += "</div>";
		
	
		str += '</td></tr></table>';
		str += "</div>";
		
		}
		
		return str;
	}