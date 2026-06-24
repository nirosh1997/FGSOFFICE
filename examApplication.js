function formExamApplication(dsp) {

	str = "";
	title = "Examination Application Form";


	if (dsp == "formExamApplication") {

		str = "<div id='maintainformExamMenu'>";
		str += "<div></div><br/>";



		str += "<table><tr><td>"
		str += '<h2 >' + title + '</h2><hr>';
		//var u=document.cookie;
		///var ur=(u.split(";",2)[u.split(";",2).length-2]);
		//var use =(ur.split("=",2)[ur.split(";",2).length-0]);
		//dataRep["userName"]=use;		
		str += "<div style='float:left;clear:both;' id='btnsection'>";



		str += '<input type="button" class="btnD" value = "First attempted" onclick ="clearApplicationData();sendForm(' + "'data4addApplicationForm'" + ');sendForm(' + "'data4checkUserExamApplication'" + ');sendForm(' + "'data4checkdepartmentExamApplication'" + ');initializedGetSubjectForApplyExamDataTable();">';

		//str += '<input type="button" class="btnD" value = "Repeat attempted" onclick ="sendForm('+"'data4addApplicationRepeteForm'"+');sendForm('+"'data4RepeteApplicationForm'"+');">';

		//str += '<input type="button" class="btnD" value = "Repeat attempted" onclick ="sendForm('+"'data4addApplicationRepeteForm'"+');">';

		str += '<input type="button" class="btnD"  value = "Return" onclick = showMenu(' + "'main'" + ')>';

		str += "</div>";

		str += '</td></tr></table>';
		str += "</div>";

	}

	return str;
}