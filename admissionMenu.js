function formAdmissionMenu(dsp) {

	str = "";



	if (dsp == "formAdmissionMenu") {

		str = "<div id='maintainformExamMenu'>";
		str += "<div></div><br/>";



		str += "<table><tr><td>"
		//	str += '<h2 >'+title+'</h2><hr>';

		str += "<div style='float:left;clear:both;' id='btnsection'>";





		str += '<input type="button" class="btnD" value = "First Attempt Admission Form" onclick ="sendForm(' + "'data4getAdmissionStudent'" + ');sendForm(' + "'data4getAdmissionSubject'" + ');initializedPrintAdmssionDataTable();">';//sendForm('+"'data4Admission'"+'); //sendForm('+"'data4getAdmissionDegree'"+');  sendForm('+"'data4checkUserExamAdmission'"+');sendForm('+"'data4checkdepartmentExamAdmission'"+');
		str += '<input type="button" class="btnD" value = "Repeat Attempt Admission Form" onclick ="sendForm(' + "'data4getRep_AdmissionStudent'" + ');sendForm(' + "'data4getRep_AdmissionSubject'" + ');">';

		str += '<input type="button" class="btnD" value = "Re-Repeat Attempt Admission Form" onclick ="sendForm(' + "'data4getReRepeat_Admission'" + ');sendForm(' + "'data4getReRepeat_AdmissionSubject'" + ');">'; //

		if (dataRep['roleName'] == 'Subject Clerk') {
			str += '<input type="button" class="btnD" value = "Return" onclick =showMenu(' + "'main'" + ');>';
		}
		else {
			str += '<input type="button" class="btnD" value = "Return" onclick =showMenu(' + "'main'" + ');>';
		}
		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		str += "</div>";

		str += '</td></tr></table>';
		str += "</div>";

	}

	return str;
}