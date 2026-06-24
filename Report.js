function formReports(dsp){

title = "Student Reports";

		str = "";

		if(dsp == "formReports"){
				str  = "<div id='addReports'>";
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				str += '<form name="maintainReports">';
				str += "<center>";
				
				//str += '<input type = "button" class ="btn2" value="Budget Report"  onclick ="showMenu('+"'formBudgetReport'"+');">';
				str += '<input type = "button" class ="btn" value="Registered Student List" onclick="sendForm('+"'data4registeredStudentList'"+');">';
		
				
				//str += '<input type="button" id="btnlog" class="btn" value="View student payment list" onclick ="sendForm('+"'data4ViewStudentPayment'"+');" >';
				
				//str += '<input type="button" id="btnlog" class="btn" value="View first installement student list" onclick ="sendForm('+"'data4ViewFirstInstallementStudent'"+');" >';
				
				str += '<input type = "button" class ="btn" value="Student Payment List" onclick="sendForm('+"'data4formPaymentList'"+');">';
	
				
				str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
				
				str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
				str += '</center></form>';
				str += '</td></tr></table>';
				str += "</div>";
		}
		return str;
	}