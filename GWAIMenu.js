//dataRep["userName"]="";  

function formGWAIClerkMenu(dsp) {

	str = "";
	if (dataRep["roleName"] == "SAR-GWAI") {
		title = "Assistant Registrar";
	}
	if (dataRep["roleName"] == "FGS Deputy Registrar") {
		title = "Administrator";
	}
	if (dataRep["userId"] == "MA-GWAI") {
		title = "Management Assistant";
	}
	if (dsp == "formGWAIClerkMenu") {

		str = "<div id='maintainformGWAIClerkMenu'>";
		str += "<div></div><br/>";



		str += "<table><tr><td>"
		str += '<h2 >' + title + '</h2><hr>';
		//var u=document.cookie;
		///var ur=(u.split(";",2)[u.split(";",2).length-2]);
		//var use =(ur.split("=",2)[ur.split(";",2).length-0]);
		//dataRep["userName"]=use;		
		str += "<div style='float:left;clear:both;' id='btnsection'>";

		//str += '<input type = "button" class ="btnD" value="Add New Applicatins" onclick="OpenLink();">';


		str += '<input type = "button" class ="btnD" value="Applicants List" onclick="sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkdepartment'" + ');sendForm(' + "'data4checkUser'" + ');">';//sendForm('+"'data4ApplicationComplete'"+')">'


		str += '<input type = "button" class ="btnD" value="Applicants Selection" onclick="sendForm(' + "'data4ApplicantSelection'" + ');sendForm(' + "'data4checkdepartmentSelection'" + ');sendForm(' + "'data4checkUserSelection'" + ');">';//sendForm('+"'data4ApplicationComplete'"+')">'
		//...............................

		//added 1.9.2016....................
		// str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm(' + "'data4SelectedApplicantList'" + ');sendForm(' + "'data4returnApplicantList'" + ');">';
		str += '<input type = "button" class ="btnD" value="Selected Applicant List" onclick="sendForm('+"'data4returnApplicantList'"+');sendForm('+"'data4checkUserSelectedApplicant'"+');sendForm('+"'data4checkdepartmentSelectedApplicant'"+');">';

		//.........................

		str += '<input type = "button" class ="btnD" value="Registered Students" onclick="sendForm(' + "'data4returnStudent'" + ');sendForm(' + "'data4checkUserRegisterStudent'" + ');sendForm(' + "'data4checkdepartmentRegisterStudent'" + ');sendForm(' + "'data4getLibCode'" + ');">';
		
		str += '<input type = "button" class ="btnD" value="Reprint Applicants" onclick="sendForm(' + "'data4ReprintCheckUser'" + ');">';




		str += '<input type="button" class="btnD" value = "Upload Photo & Signature" onclick ="uploadImage();">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');


		//	str += '<input type = "button" class ="btnD" value="Print Student ID" onclick="sendForm('+"'data4returnPrintID'"+');sendForm('+"'data4PrintStudentIDCard'"+');sendForm('+"'data4checkdepartmentPrintIDList'"+');sendForm('+"'data4checkUserPrintIDList'"+');">';

		str += '<input type="button" class="btnD" value = "Change Password" onclick ="sendForm(' + "'data4ViewUser'" + ')">';//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');


		str += '<input type = "button" class ="btnD" value="logout" onclick=logOut();>';
		str += "</div>";



















		//sendForm('+"'data4LetterRegisteredStudentListPrint'"+');
		str += '</td></tr></table>';
		str += "</div>";

	}

	return str;
}

function OpenLink() {
	window.open('https://sis.kln.ac.lk/FGSeApplicationSC/');
}

function Viewonlinepayment() {
	window.open('https://sis.kln.ac.lk/PayService/ClientApp/info.php');
}


function uploadImage() {
	window.open(host+'uploadimg.php');
}