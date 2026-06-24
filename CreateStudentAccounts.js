var selectedChecked = "";
var registeredChecked = "";
var changeRow = 0;
var me, pt, dCode;
var mediumSinhalaChecked = mediumEnglishChecked = "";
var count = 0;
dataRep['roleName'] = "";
dataRep["abc"] = "";
dataRep["bcd"] = "";
var UpdatedStudentData = new Array();

//-------------------------------------------------MAIN FUNCTION START---------------------------------------------
function formCreateStudentAccounts(dsp) {


	str = "";
	title = "Create Student Accounts";

	if (dsp == "formCreateStudentAccounts" || dsp == "updateStudentAccounts") {

		str = "<div id='addStudentAccounts'>";

		str += "<div>"
		str += '<h2 id="mainRequestTitle">' + title + '</h2><hr>';
		str += '<form name="maintainformCreateStudentAccounts"><br><br>';
		var u = document.cookie;
		var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		for (i = 0; i < userIdLength; i++) {
			if (use == userIdArr[i]) {
				dataRep['roleName'] = roleNameArr[i];
			}

		}



		programName = "<option>Please scroll down to see the records</option>";

		for (i = 0; i < studentNoLength; i++) {


			if (degreeTitleArr[i] != null) {

				if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i]) == i)) {

					programName += "<option>" + degreeTitleArr[i] + "</option>";

				}
			}
		}
		str += "<div class='colon' Style='width:100px;'>Programm &nbsp;:</div><div class='colon'></div>";
		str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName'   onchange='dataRep[this.id]=this.selectedIndex;'>";//ViewList()
		str += programName;
		str += "</select>";

		str += "<div class='colon'>";
		dataRep['achedamicYear'] = "";
		str += "<div class='identifiers'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
		str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
		str += "</select>";


		/*str +="<div class='rdo' style='float:center;position:relative;'>";//left:150px'
		if(dataRep['selectMedium']== 'mediumSinhala'){
			 mediumSinhalaChecked = 'checked';
		} else if(dataRep['selectMedium']=='mediumEnglish'){
			 mediumEnglishChecked = 'checked'}
	
	   str +="<input  type='radio'  name='selectMedium' id='mediumSinhala' value= 'mediumSinhala'";
	   str +=mediumSinhalaChecked;
	   str +=" onclick='dataRep[this.name]=this.value;getMediumSinhala();'>Sinhala";
	   str +="<input  type='radio' name='selectMedium' id='mediumEnglish' value= 'mediumEnglish'";
	   str +=mediumEnglishChecked;
	   str +=" onclick='dataRep[this.name]=this.value;getMediumEnglish();'>English";//</div></div>
	   str += "</div>";*/

		str += '<input type="button" style="float:center;position:relative;" class="btnB" value="View List" onclick=StudentListForAccounts();>';
		str += "</div>";


		// str +="<br>";
		str += "<div>____________________________________________________________________________________________________________________________________________</div>";

		//str +="<div style='clear:both'>&nbsp;</div>"

		if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
			str += '<div>';
			str += "<input type='button' class='btnB' value='Create New Accounts' id='createNewAccounts' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm1('addStudentAccounts');>"; //printStudentIDNow();
			str += "<input type='button' class='btnB' value='Reset Password' id='resetAccounts' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm2('updateStudentAccounts');>"; //printStudentIDNow();
			str += '<input type = "button" class ="btnB" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick="resetdata();sendForm(' + "'data4AddStudentAccount'" + ');">';
			str += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refreshStudentList();showMenu(' + "'formClerkMenu'" + ');>';
			str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
			str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
			str += '<input type="button" id="select-all" style="display:none;margin-top:1px;float:left" class="btnB" value="Mark All" onclick=SelectAll1();>';
			str += '<input type="button" id="select-non" style="display:none;margin-top:1px;float:left" class="btnB" value="Unmark All" onclick=UnselectAll1();>';
			str += '</div>';

		}
		if (dataRep['roleName'] == 'Dean') {
			str += "<input type='button' class='btnB' value='Create New Accounts' id='createNewAccounts' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm1('addStudentAccounts');>"; //printStudentIDNow();
			str += "<input type='button' class='btnB' value='Reset Password' id='resetAccounts' disabled='disabled' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm2('updateStudentAccounts');>"; //printStudentIDNow();
			str += '<input type = "button" class ="btnB" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick="resetdata();sendForm(' + "'data4AddStudentAccount'" + ');">';
			str += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick = refreshStudentList();showMenu(' + "'formDeanMenu'" + ');>';
			str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		str += "<div  id='list' style='margin:clear:both'>";
		str += "</div>";
		str += "<div  id='registerBtn1' style='margin:clear:both'>";
		str += "</div>";
		//str += '<input type="button" class="btn" value = "Get List" onclick = CompleteApplication();>';
		//str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';

		str += "</div>";

		str += '</form>';
		str += '</div>';
		str += "</div>";

	}

	return str;
}
//-------------------------------------------------MAIN FUNCTION END--------------------------------------------- 
var temArr = new Array();
var tNo = 0;
var rcount = 0;
//-------------------------------------------------VIEW STUDENT LIST FUNCTION START---------------------------------------------
function StudentListForAccounts() {
	document.getElementById("createNewAccounts").disabled = false;
	document.getElementById("resetAccounts").disabled = false;
	document.getElementById('select-all').style = "display";
	document.getElementById('select-non').style = "display";
	rcount = 0;
	dataRep["abc"] = document.getElementById('selectedDegreeName').value;
	dataRep["bcd"] = document.getElementById('achedamicYear').value;
	document.getElementById('list').innerHTML = document.getElementById('list').innerHTML.replace = "";

	var newStr = "<table id='myTable' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
	newStr += "<tr style='background-Color:#ff9f80'>";
	newStr += "<th style='width:50px;' align='center'><div class='investLabel' style='width:50px;'><font color='black'></font></div></th>";
	newStr += "<th style='width:250px;' align='center'><div class='investLabel_l' style='width:220px;'><font color='black'>Student No</font></div></th>";
	newStr += "<th style='width:150px;' align='center'><div class='investLabel' style='width:120px;'><font color='black'>NIC</font></div></th>";
	newStr += "<th style='width:400px;' align='center'><div class='investLabel' style='width:400px;'><font color='black'>Student Name &nbsp;&nbsp;</font></div></th>";

	newStr += "<th style='width:100px;' align='center'><div class='investLabel' style='width:100px;'><font color='black'>Check</font></div></th>";

	newStr += "</tr>";
	for (var i = 0; i < studentNoLength; i++) {

		if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {//&& registeredstudentNoArr[i] !=""	

				temArr[tNo] = i;
				tNo++;
				rcount++;
				if (rcount % 2 == 0) {
					newStr += "<tr style='background-Color:#ffece6;>";
				}
				else {
					newStr += "<tr style='background-Color:#ffd9cc;>";
				}

				newStr += "<div class='info' id='Alist" + i + "'  name='testInfo" + i + "'>";
				newStr += "<td style='width:50px;' align='center'><div style='width:50px;' class='investView' name='rc" + i + "' id='rc" + i + "'";
				newStr += " onchange='dataRep[this.name]=this.value;'>" + rcount + "</div></td>";
				newStr += "<td style='width:250px;' align='center'><div style='width:250px;' class='investView_l' name='studentNo" + i + "' id='studentNo" + i + "' onchange='dataRep[this.name]=this.value;'>";
				newStr += studentNoArr[i] + "</div></td>";
				newStr += "<td style='width:150px;' align='center'><div style='width:150px;' class='investView' name='studentNIC" + i + "' id='studentNIC" + i + "'";
				newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNICArr[i] + "</div></td>";
				newStr += "<td style='width:400px;' align='center'><div style='width:400px;' class='investView' name='studentName" + i + "' id='studentName" + i + "'";
				newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNameArr[i] + "</div></td>";

				//count= studentNoArr[i];
				if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
					var checkBoxDivIdRegistered = 'checkRegistered' + i;
					if (document.getElementById(checkBoxDivIdRegistered)) {
						if (document.getElementById(checkBoxDivIdRegistered).checked) {
							registeredChecked = 'checked';

						}
					}

					newStr += "<td style='width:50px;' align='center'><div  style='width:50px;' class='investView' style='text-align:center' name='registered" + i + "' id='registered" + i + "'>";
					newStr += "<input type='checkbox'  " + registeredChecked + "  id='checkRegistered" + i + "' name='checkRegistered" + i + "' />";
					newStr += "</div></td>";
				}
				//newStr +="</div>";
				newStr += "</tr>";
			}
		}
	}

	newStr += "</table></br>";


	if (rcount >= 20) {
		if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
			newStr += "<input type='button' class='btnB' value='Create New Accounts' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm1('addStudentAccounts');>"; //printStudentIDNow();
			newStr += "<input type='button' class='btnB' value='Reset Password' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm2('updateStudentAccounts');>"; //printStudentIDNow();
			newStr += '<input type = "button" class ="btnB" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick="resetdata();sendForm(' + "'data4AddStudentAccount'" + ');">';
			newStr += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refreshStudentList();showMenu(' + "'formClerkMenu'" + ');>';
			newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}
		if (dataRep['roleName'] == 'Dean') {
			newStr += "<input type='button' class='btnB' value='Create New Accounts' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm1('addStudentAccounts');>"; //printStudentIDNow();
			newStr += "<input type='button' class='btnB' value='Reset Password' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formSelectedStudentListsendForm2('updateStudentAccounts');>"; //printStudentIDNow();
			newStr += '<input type = "button" class ="btnB" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick="resetdata();sendForm(' + "'data4AddStudentAccount'" + ');">';
			newStr += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick = refreshStudentList();showMenu(' + "'formDeanMenu'" + ');>';
			newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
		}

	}
	//document.getElementById('registerBtn1').innerHTML = newStr1; 
	document.getElementById('list').innerHTML += newStr;
}
//-------------------------------------------------VIEW STUDENT LIST FUNCTION END---------------------------------------------

//-------------------------------------------------ADD ROW COLOURS FUNCTION START---------------------------------------------

function AddRowColorStudentList(x, _this) {
	if (changeRow == 1) {
		changeRow = 0;
		x.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';

	}
	else {
		changeRow++;
		x.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';

	}
}
//-------------------------------------------------ADD ROW COLOURS FUNCTION END---------------------------------------------

var tempNo = "";
var md;
var counttimes = 0;
//-------------------------------------------------RESET DATA FUNCTION START---------------------------------------------

function resetdata() {
	count = 0;
	counttimes = 0;
}
//-------------------------------------------------RESET DATA FUNCTION END---------------------------------------------



//-------------------------------------------------REFRESH STUDENT LIST FUNCTION START---------------------------------------------

function refreshStudentList() {
	studentNoLength = 0;
	//dataRep['selectMedium']="";
	counttimes = 0;
}
//-------------------------------------------------REFRESH STUDENT LIST FUNCTION END---------------------------------------------

//-------------------------------------------------SELECT ALL START---------------------------------------------	
function SelectAll1() {

	for (i = 0; i < studentNoLength; i++) {

		var checkBoxDivIdRegistered = 'checkRegistered' + i;
		if (document.getElementById('checkRegistered' + i)) {
			document.getElementById('checkRegistered' + i).checked = true;
			document.getElementById("select-all").disabled = true;
			document.getElementById("select-non").disabled = false;
		}
	}
}
//-------------------------------------------------SELECT ALL END---------------------------------------------

//-------------------------------------------------UNSELECT ALL START---------------------------------------------
function UnselectAll1() {
	for (i = 0; i < studentNoLength; i++) {
		var checkBoxDivIdRegistered = 'checkRegistered' + i;
		if (document.getElementById(checkBoxDivIdRegistered)) {
			document.getElementById(checkBoxDivIdRegistered).checked = false;
			document.getElementById("select-all").disabled = false;
			document.getElementById("select-non").disabled = true;
		}
	}

}
//-------------------------------------------------UNSELECT ALL END---------------------------------------------

//-------------------------------------------------REGISTER STUDENT SENDFORM FUNCTION START---------------------------------------------

function formSelectedStudentListsendForm1(frm) {

	var doc, dataStr;

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}

	if (frm == 'addStudentAccounts') {
		doc = document.maintainformCreateStudentAccounts;
		dataStr += "&interface=" + frm;
		var newStr = "";


		for (var k = 0; k < studentNoArr.length; k++) {
			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[k] & document.getElementById('achedamicYear').value == achedamicYearArr[k]) {

				if (document.getElementById('checkRegistered' + k)) {
					if (document.getElementById('checkRegistered' + k).checked == true) {

						newStr += "&sUserName=" + studentNoArr[k];
						var splitting = studentNoArr[k];
						var test1 = splitting.split("/");
						var test = "";
						for (var i = 0; i < test1.length; i++) {
							if (i != 0) {
								if (i == 1) {
									test = test1[i];
								}
								else {
									test += "-" + test1[i];
								}
							}
						}
						//test.join('');
						//alert("stno - "+splitting+" suname - " +test);
						newStr += "&sUName=" + test;
						newStr += "&sPassWord=" + studentNICArr[k];
						newStr += "&roleId=" + 11;

						SelectedStudentData[k] = dataStr + newStr;
					}
				}
			}


		}

		for (var j = 0; j < studentNoArr.length; j++) {
			if (SelectedStudentData[j] != "") {
				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", SelectedStudentData[j]);
				//isrHandle.getDataFromDB(eval("clientController"), "serverController.php",updateDataArray[j]);									
				//dataRep['selectMedium']="";
				//dataRep['selectMedium']="";
				counttimes = 0;
			}
		}
	}
}
function formSelectedStudentListsendForm2(frm) {

	var doc, dataStr;

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}

	if (frm == 'updateStudentAccounts') {

		doc = document.maintainformCreateStudentAccounts;
		var t = 0;
		var newStr = "";
		newStr = "action=update";
		newStr += "&interface=" + frm;

		var dd = new Date();
		var d = dd.getUTCDate();
		var m = dd.getUTCMonth();
		var y = dd.getUTCFullYear();
		var mn = m + 1;
		var currentdate = y + "-" + mn + "-" + d;


		for (var k = 0; k < studentNoArr.length; k++) {
			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[k] & document.getElementById('achedamicYear').value == achedamicYearArr[k]) {

				if (document.getElementById('checkRegistered' + k)) {
					if (document.getElementById('checkRegistered' + k).checked == true) {

						newStr += "&sUserName=" + studentNoArr[k];
						//newStr +="&activeDate="+"";
						newStr += "&sPassWord=" + studentNICArr[k];
						newStr += "&roleId=" + 11;


						UpdatedStudentData[t] = newStr;
						t++;
					}


				}


			}

		}

		for (var jj = 0; jj < UpdatedStudentData.length; jj++) {
			if (UpdatedStudentData[jj] != null) {


				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", UpdatedStudentData[jj]);

				counttimes = 0;
			}
		}

		if (qualificationDataArr[j] != "") {
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", qualificationDataArr[j]);
		}

	}

	return 0;

}

