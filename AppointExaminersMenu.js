function formAppointExaminersMenu(dsp) {

		str = "";
		title = "Appoint Examiners By Faculty";
		
	if(dsp == "formAppointExaminersMenu"){

		str  = "<div id='maintainformAppointExaminersMenu'>";
		str +="<div></div><br/>";
			

			
		str += "<table><tr><td>"
		str += '<h2 >'+title+'</h2><hr>';
		
		str += "<div style='float:left;clear:both;' id='btnsection'>";
		str += '<input type = "button" class ="btn2" value="BOS Request" onclick="showMenu('+"'formAppointExaminersDeptNomination'"+')">';
		str += '<input type = "button" class ="btn2" value="BOS Reject Modification" onclick="showMenu('+"'formAppointExaminersBOSRejectModification'"+')">';
		str += '<input type = "button" class ="btn2" value="BOS Recommendations" onclick="showMenu('+"'formExaminerBOSRecommendation'"+')">';
		str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formThesisSubmitMenu'"+');>';		
		//str += '<input type = "button" class ="btn2" value="Notes" onclick="">';


		str += '<input type = "button" class ="btn2" value="logout" onclick=logOut();>';
		str += "</div>";
		
		
		str += '</td></tr></table>';
		str += "</div>";
		
	}
		return str;
}
