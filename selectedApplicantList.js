var selectedChecked = "";
var registeredChecked = "";
var changeRow = 0;
var me, pt, dCode;
var mediumSinhalaChecked = mediumEnglishChecked = "";
var count = 0;
dataRep['roleName'] = "";
var BulkNote01;
var TempBulkNote01;
var BulkNoteArr01 = new Array();
var datetime = "";
var TempUser01 = "";

function DataTableForSelectedApplicantTable() {

	var buttons = [];

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Head of the Department' ||
		dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' ||
		dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator'
		|| dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'Program Assistant/Clerk') {
		buttons.push({
			text: 'Download List',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				DownloadSelectedApplicantList2();
			}
		});
	}


	if (!$.fn.DataTable.isDataTable('#selectedapplicantTable'))
		var table = $('#selectedapplicantTable').DataTable({
			dom: "" + // Search and buttons in a 1-line row
				"<'row mt-3'<'col col-md-4' l><'col col-md-4 text-center' B><'col col-md-4' f>>" + // Filtering input and pagination in a 2-line row
				"<'row'<'col-12't>>" + // Table in a single line
				"<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
			buttons: buttons,
			"language": {
				"lengthMenu": "Display _MENU_ applicants per page",
				"zeroRecords": "Applicants not found. please select valid program and year",
				// "info": "Found _MAX_ Applicants",
				"info": "Showing page _PAGE_ of _PAGES_ | Total Applicants : _MAX_",
				"infoEmpty": "",
				"infoFiltered": "(filtered from _MAX_ total records)",
				"sSearch": "Find Applicant: "
			},
			"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
			columnDefs: [
				{
					targets: 8,
					orderable: false,
					searchable: false
				}
			],
			order: [0, 'asc'],
		});

}
//-------------------------------------------------MAIN FUNCTION START---------------------------------------------
function formSelectedApplicantList(dsp) {


	str = "";
	title = "FB/FGS Approved Selected List";
	// alert('fs')
	if (dsp == "formSelectedApplicantList") {

		// var role;
		// var role1;
		// var role2;
		// var u = document.cookie;
		// var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		// var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		// for (i = 0; i < userIdLength; i++) {
		// 	if (use == userIdArr[i]) {
		// 		TempUser = use;
		// 		dataRep['roleName'] = roleNameArr[i];
		// 		dataRep['departmentCode'] = departmentCodeArr[i];
		// 		dataRep['userName'] = userNameArr[i];
		// 		dataRep['programmeCode'] = programmeCodeArr[i];
		// 		//alert(dataRep['programmeCode']);
		// 	}

		// }
		// if (dataRep['roleName'] == 'Coordinator') {
		// 	//alert("ok");
		// 	var dcode = dataRep['departmentCode']
		// 	role = "cordinator";


		// 	var pcode = dataRep['programmeCode']
		// 	role = "cordinator";

		// }
		// else if (dataRep['roleName'] == 'Head of the Department') {
		// 	var dcode1 = dataRep['departmentCode']
		// 	role1 = "head";

		// 	var pcode1 = dataRep['programmeCode']
		// 	role1 = "head";
		// }
		// else {

		// 	role2 = "other";
		// }

		// programName1 = "";

		// if (role == "cordinator") {
		// 	programName = "<option>Please scroll down to see the records</option>";
		// 	for (j = 0; j < degreeCodeLength; j++) {
		// 		if (degreeCodappeArr[j] != null) {
		// 			if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 				if (degreeCodappeArr[j] == dataRep['departmentCode']) {
		// 					programName1 += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + ">" + degreeTitle1Arr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		// else if (role1 == "head") {
		// 	programName = "<option>Please scroll down to see the records</option>";
		// 	for (j = 0; j < degreeCodeLength; j++) {
		// 		if (degreeCodappeArr[j] != null) {
		// 			if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 				if (departmentCodeappArr[j] == dataRep['departmentCode']) {
		// 					programName1 += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + ">" + degreeTitle1Arr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		// if (role2 == "other") {
		// 	if (dataRep['userName'] == "ssdean" || dataRep['userName'] == "ssar" || dataRep['userName'] == "Asanka") {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (facultyCode3Arr[j] == "FAC03" & degreeTitle1Arr[j] != null) {
		// 				if (degreeCodappeArr[j] != null) {
		// 					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 						programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// 	else if (dataRep['userName'] == "SAR-GWAI") {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (facultyCode3Arr[j] == "FAC10" & degreeTitle1Arr[j] != null) {
		// 				if (degreeCodappeArr[j] != null) {
		// 					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 						programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
		// 					}
		// 				}
		// 			}
		// 		}

		// 	}
		// 	else {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (degreeCodappeArr[j] != null) {
		// 				if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 					programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }



		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';

		str += "<div id='updateApplicantList'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		// if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Head of the Department') {
		// 	str += '<div class="form-group row"><div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5">';
		// 	str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		// 	str += '<div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" style="display: inline-flex;">';
		// 	str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;RegStudentList1();">';
		// 	str += programName;
		// 	str += programName1;
		// 	str += '</select>';
		// 	str += '</div></div>';
		// }
		// else {
		// 	str += '<div class="form-group row"><div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5">';
		// 	str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		// 	str += '<div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" style="display: inline-flex;">';
		// 	str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;RegStudentList1();">';
		// 	str += programName;
		// 	str += '</select>';
		// 	str += '</div></div>';
		// }

		str += '<div class="form-group row"><div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;hideMediums();RegStudentList1();">';
		str += '</select>';
		str += '</div></div>';


		let date = new Date().getFullYear();


		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">'
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-4" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;hideMediums();RegStudentList1();">';
		for (i = 2014; i <= date + 1; i++) {
			if (i == date + 1) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div>';
		str += '</div>';

		console.log(dataRep['selectMedium']);
		console.log(dataRep['selectedMedium']);
		console.log(md);

		if (dataRep['selectMedium'] == 'mediumSinhala') {
			mediumSinhalaChecked = 'checked';
		} else if (dataRep['selectMedium'] == 'mediumEnglish') {
			mediumEnglishChecked = 'checked'
		}

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 MediumRadioFullBox"><div class="row" style="padding-left: 10px;">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10" style=""><div class="row">';
		str += "<div class='col-12 col-sm-12 col-md-12 col-lg-8 col-xl-5'>";
		str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();RegStudentList1()' " + mediumSinhalaChecked + ">Sinhala<i class='input-helper'></i></label></div>";
		str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();RegStudentList1()' " + mediumEnglishChecked + ">English<i class='input-helper'></i></label></div></div>";

		// str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectedMedium' value='si' onclick='getMediumSinhala();RegStudentList1();' " + ((dataRep["selectedMedium"] == 'si') ? "checked" : "") + ">Sinhala<i class='input-helper'></i></label></div>";
		// str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectedMedium' value='en' onclick='getMediumEnglish();RegStudentList1();' " + ((dataRep["selectedMedium"] == 'en') ? "checked" : "") + ">English<i class='input-helper'></i></label></div></div>";

		str += '</div>';
		str += '</div>';

		str += '</div>';

		str += '</div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="form-check"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="RegStudentList1();">View List</button></div>';







		// str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5"><div class="row" style="padding-left: 10px;">'
		// str += '<div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-4" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r" style="padding-top:5px">Medium </label></div>';
		// str += '<div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-7" style=""><div class="row">';
		// str += "<div class='col-12 col-sm-12 col-md-12 col-lg-2 col-xl-6'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input' name='selectedMedium' value='si' onclick='getMediumSinhala();RegStudentList1();' " + ((dataRep["selectedMedium"] == 'si') ? "checked" : "") + ">Sinhala<i class='input-helper'></i></label></div></div>";
		// str += "<div class='col-12 col-sm-12 col-md-12 col-lg-2 col-xl-6'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input' name='selectedMedium' value='en' onclick='getMediumEnglish();RegStudentList1();' " + ((dataRep["selectedMedium"] == 'en') ? "checked" : "") + ">English<i class='input-helper'></i></label></div></div>";
		// str += '</div>';
		// str += '</div>';
		// str += '</div>';
		// str += '</div>';
		// str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2"><div class="row" style="padding-left: 10px;">'
		// str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><button type="button" class="btn btn-info mr-2" style="float:right;line-height: 15px;" onclick="RegStudentList1();">View List</button></div></div>';

		// str += '</div>';
		// str += '</div>';
		// str += '</div>';
		// str += '</div>';

		str += '</div></div>';
		str += '</div></div></div>';








		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="selectedapplicantTable">';
		str += '<thead><tr>';
		str += '<th>#</th>';
		str += '<th>Applicant Name</th>';
		str += '<th>Application No</th>';
		str += '<th>NIC</th>';
		str += '<th>Selected Criteria</th>';
		str += '<th>List Number</th>';
		str += '<th>BoS Number</th>';
		str += '<th>BoS Date</th>';
		str += '<th></th>';
		str += '</tr></thead>';
		str += '<tbody>';
		if (applicationNoLength > 0) {

			rcount = 0;


			for (var i = rcount; i < applicationNoArr.length; i++) {
				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] && document.getElementById('achedamicYear').value == achedamicYearArr[i] && mediumArr[i] == md) {

					temArr[tNo] = i;
					tNo++;
					rcount++;
					count++;
					str += '<tr>';
					str += '<td>' + rcount + '</td>';
					str += '<td>' + studentInitialArr[i] + '</td>';
					str += '<td>' + applicationNoArr[i] + "</td>";
					str += "<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3" + i + "' value= '" + applicationNoArr[i] + "' >";

					str += '<td>' + studentNICArr[i] + '</td>';


					let selectedCat = "";
					let setBool = false;
					if (selectionCategoryArr[i] == "E" || selectedFromGraduateArr[i] == 1 || selectionCategoryArr[i] == "P,E") {
						selectedCat += "Degree";
						setBool = true;
					}

					if (selectionCategoryArr[i] == "P" || selectedFromProfessionalArr[i] == 1 || selectionCategoryArr[i] == "P,E") {
						if (setBool) {
							selectedCat += ", ";
						} else {
							setBool = true;
						}
						selectedCat += "Professional";
					}

					if (selectedFromPendingQulificationArr[i] == 1) {
						if (setBool) {
							selectedCat += ", ";
						} else {
							setBool = true;
						}
						selectedCat += "Pending Qulification";
					}

					if (selectedFromSpecialApproveArr[i] == 1) {
						if (setBool) {
							selectedCat += ", ";
						} else {
							setBool = true;
						}
						selectedCat += "Special Apporoved";
					}

					str += '<td>' + selectedCat + '</td>';

					str += '<td>' + listNumber[i] + '</td>';
					str += '<td>' + BosNumber[i] + '</td>';
					str += '<td>' + BosDate[i] + '</td>';
					// if (selectionCategoryArr[i] == "E") {
					// 	str += '<td>Educational</td>';
					// }
					// else if (selectionCategoryArr[i] == "P") {
					// 	str += '<td>Professional</td>';

					// }
					// else if (selectionCategoryArr[i] == "P,E") {
					// 	str += '<td>Both Qualifications</td>';
					// }
					// else {
					// 	str += '<td></td>';

					// }
					str += '<td style="text-align: center;"><button id="Namebtn' + i + '" onclick="loadProfileApplicant(this);" class="btn btn-info btn-rounded btn-fw" style="padding: 8px 20px;">Show Profile</button></td>';

					str += '</tr>';
				}
			}


		}
		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';


	}
	// console.log(str)
	return str;

}

function loadselectedProfileApplicant(app) {
	returnStudentProfile();
	var adID = app.id;
	var lastChar = adID.substr(adID.indexOf("Namebtn") + 7);
	setSearchApplicantStudent('applicant');
	GetApplicantProfile(document.getElementById('applicationNo3' + lastChar).value);
}

//-------------------------------------------------MAIN FUNCTION END--------------------------------------------- 
var temArr = new Array();
var tNo = 0;
var rcount = 0;
//-------------------------------------------------VIEW STUDENT LIST FUNCTION START---------------------------------------------
function RegStudentList1() {
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		// alert("Please Select a value from the select Box(s)");
	} else {
		dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
		dataRep["selectedMedium"] = md;


		sendForm("data4SelectedApplicantList");
	}
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
	Rcount = 1;
}
//-------------------------------------------------RESET DATA FUNCTION END---------------------------------------------

//-------------------------------------------------GET SINHALA MEDIUM FUNCTION START---------------------------------------------

function getMediumSinhala() {
	md = 'si';
}
//-------------------------------------------------GET SINHALA MEDIUM FUNCTION END---------------------------------------------

//-------------------------------------------------GET ENGLISH MEDIUM FUNCTION START---------------------------------------------

function getMediumEnglish() {
	md = 'en';
}
//-------------------------------------------------GET ENGLISH MEDIUM FUNCTION END---------------------------------------------



//-------------------------------------------------REFRESH STUDENT LIST FUNCTION START---------------------------------------------

function refreshStudentList() {
	applicationNoLength = 0;
	dataRep['selectedMedium'] = "";
	counttimes = 0;
}
//-------------------------------------------------REFRESH STUDENT LIST FUNCTION END---------------------------------------------

function loadProfileSelected(app) {

	returnStudentProfile();
	var adID = app.id;

	// var lastChar = adID.substr(adID.indexOf("Namebtn") + 7);
	dataRep["applicationNo"] = document.getElementById(adID).innerHTML;  //sendForm('data4GetReleventApplicant')


	/*sendForm('data4GetReleventApplicant');
	sendForm('data4StudentProfileDeteilsCheckUser');	
	sendForm('data4profileEducationalDetails');
	setValuesProfileabc();	*/

	dataRep['searchType'] = 'applicantSearch';

	sendForm('data4DisplayApplicatProfile');
	searchApplicantProfile();
	document.getElementById('applicationNo').value = dataRep["applicationNo"];

}

function DownloadSelectedApplicantList2() {

	var count = 1;
	var Rcount = 1;


	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}

	else {

		let newStr = `<style>
		@font-face
		{font-family:"Cambria Math";
		panose-1:2 4 5 3 5 4 6 3 2 4;
		mso-font-charset:0;
		mso-generic-font-family:roman;
		mso-font-pitch:variable;
		mso-font-signature:-536869121 1107305727 33554432 0 415 0;}
	 p.MsoNormal, li.MsoNormal, div.MsoNormal
		{mso-style-unhide:no;
		mso-style-qformat:yes;
		mso-style-parent:"";
		margin:0cm;
		mso-pagination:widow-orphan;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	p.MsoHeader, li.MsoHeader, div.MsoHeader
		{mso-style-priority:99;
		mso-style-link:"Header Char";
		margin:0cm;
		mso-pagination:widow-orphan;
		tab-stops:center 225.65pt right 451.3pt;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	p.MsoFooter, li.MsoFooter, div.MsoFooter
		{mso-style-priority:99;
		mso-style-link:"Footer Char";
		margin:0cm;
		mso-pagination:widow-orphan;
		tab-stops:center 225.65pt right 451.3pt;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	p
		{mso-style-noshow:yes;
		mso-style-priority:99;
		mso-margin-top-alt:auto;
		margin-right:0cm;
		mso-margin-bottom-alt:auto;
		margin-left:0cm;
		mso-pagination:widow-orphan;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	p.msonormal0, li.msonormal0, div.msonormal0
		{mso-style-name:msonormal;
		mso-style-noshow:yes;
		mso-style-priority:99;
		mso-style-unhide:no;
		mso-margin-top-alt:auto;
		margin-right:0cm;
		mso-margin-bottom-alt:auto;
		margin-left:0cm;
		mso-pagination:widow-orphan;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	span.HeaderChar
		{mso-style-name:"Header Char";
		mso-style-priority:99;
		mso-style-unhide:no;
		mso-style-locked:yes;
		mso-style-link:Header;
		mso-ansi-font-size:12.0pt;
		mso-bidi-font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-ascii-font-family:"Times New Roman";
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;
		mso-hansi-font-family:"Times New Roman";
		mso-bidi-font-family:"Times New Roman";}
	span.FooterChar
		{mso-style-name:"Footer Char";
		mso-style-priority:99;
		mso-style-unhide:no;
		mso-style-locked:yes;
		mso-style-link:Footer;
		mso-ansi-font-size:12.0pt;
		mso-bidi-font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-ascii-font-family:"Times New Roman";
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;
		mso-hansi-font-family:"Times New Roman";
		mso-bidi-font-family:"Times New Roman";}
	span.GramE
		{mso-style-name:"";
		mso-gram-e:yes;}
	.MsoChpDefault
		{mso-style-type:export-only;
		mso-default-props:yes;
		font-size:10.0pt;
		mso-ansi-font-size:10.0pt;
		mso-bidi-font-size:10.0pt;
		mso-font-kerning:0pt;
		mso-ligatures:none;}
	   @page WordSection1
		   { size:841.9pt 595.3pt;
	mso-page-orientation:landscape;
	margin:36.0pt 36.0pt 36.0pt 36.0pt;
	mso-header-margin:35.4pt;
	mso-footer-margin:35.4pt;
	mso-paper-source:0;}
	   div.WordSection1
		   {page:WordSection1;}
	   
	   </style>
	   `;



		// newStr += "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		// newStr += "<div id='topics1' class='info'></div>";
		// newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + $("#selectedDegreeName option:selected").text(); + "</div>";
		// newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
		// newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Faculty Board Approved Selected List</div>";


		newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
		newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
		newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "s</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Faculty Board Approved Selected List</div>";
		newStr += "<br/>";





		if (checkdeleteorsave == 'deletefunction') {
			newStr += "<div class='investLabel' style='text-align:left;font-weight:bold;'>user:" + dataRep['userName'] + "</div>";

		}
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<thead>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Application No</th>";
		newStr += "<th style='border: 1px solid black;'>Name With Initial</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		// newStr += "<th style='border: 1px solid black;'>Ad 2</th>";
		// newStr += "<th style='border: 1px solid black;'>Ad 3</th>";
		// newStr += "<th style='border: 1px solid black;'>Ad 4</th>";
		// newStr += "<th style='border: 1px solid black;'>Ad 5</th>";
		newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
		newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
		newStr += "<th style='border: 1px solid black;'>Email</th>";
		newStr += "<th style='border: 1px solid black;'>Selected Criteria</th>";
		newStr += "</tr>";
		newStr += "</thead>";


		for (i = 0; i < applicationNoLength; i++) {

			if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i] & mediumArr[i] == md) {// & (medium1Arr[i] == "en" )){	
					var stuAddress = studentPermanentAddressArr[i];
					var convertstuAddress = stuAddress.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
					var testAdd = titleCase(convertstuAddress);
					testAdd = removeDash(testAdd);
					var test1 = testAdd.split(",");
					var test = 1;

					newStr += "<tr style='border: 1px solid black;'>";

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:40px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + applicationNoArr[i] + '</td>';

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:150px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';

					newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
					newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';

					newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
					newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

					let selectedCat = "";
					let setBool = false;
					if (selectionCategoryArr[i] == "E" || selectedFromGraduateArr[i] == 1 || selectionCategoryArr[i] == "P,E") {
						selectedCat += "Degree";
						setBool = true;
					}

					if (selectionCategoryArr[i] == "P" || selectedFromProfessionalArr[i] == 1 || selectionCategoryArr[i] == "P,E") {
						if (setBool) {
							selectedCat += ", ";
						} else {
							setBool = true;
						}
						selectedCat += "Professional";
					}

					if (selectedFromPendingQulificationArr[i] == 1) {
						if (setBool) {
							selectedCat += ", ";
						} else {
							setBool = true;
						}
						selectedCat += "Pending Qulification";
					}

					if (selectedFromSpecialApproveArr[i] == 1) {
						if (setBool) {
							selectedCat += ", ";
						} else {
							setBool = true;
						}
						selectedCat += "Special Apporoved";
					}
					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;text-align:center">' + selectedCat + '</td>';






					newStr += "</tr>";
					// newStr += "</div><dev><br>";
					count++;

				}



			}
		}

		newStr += "</table>";

		// var exportFilename = "Selected Applicant List.doc";
		// var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });

		var exportFilename = "Faculty Board Approved Students List.doc";
		let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
		sendDataList += "&sheetName=" + "Faculty Board Approved Students List";
		isrHandle.getDoc(newStr, exportFilename);



		// if (navigator.msSaveBlob) {
		// 	navigator.msSaveBlob(csvData, exportFilename);
		// } else {
		// 	//In FF link must be added to DOM to be clicked
		// 	var link = document.createElement('a');
		// 	link.href = window.URL.createObjectURL(csvData);
		// 	link.setAttribute('download', exportFilename);
		// 	document.body.appendChild(link);
		// 	link.click();
		// 	document.body.removeChild(link);
		// }



	}



}








//-------------------------------------------------DEAN LIST DOWNLOAD FUNCTION START----------------------------------------------

function deanList() {
	count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		// for(var i=0; i<applicationNoLength; i++){
		// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  & document.getElementById('achedamicYear').value==achedamicYearArr[i] ){
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Name With Initial</th>";
		newStr += "<th style='border: 1px solid black;'>NIC No</th>";
		newStr += "</tr>";

		//for( i=0; i<applicationNoLength; i++){
		//if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
		//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i]){// & (medium1Arr[i] == "en" )){	
		for (var i = 0; i < studentNoLength; i++) {
			if (registeredstudentNoArr.indexOf(registeredstudentNoArr[i]) == registeredstudentNoArr.lastIndexOf(registeredstudentNoArr[i]) || (registeredstudentNoArr.indexOf(registeredstudentNoArr[i]) != registeredstudentNoArr.lastIndexOf(registeredstudentNoArr[i]) && registeredstudentNoArr.indexOf(registeredstudentNoArr[i]) == i)) {
				if (document.getElementById('selectedDegreeName').value == registereddegreeCodeArr[i] & document.getElementById('achedamicYear').value == registeredachedamicYearArr[i] && registeredmediumArr[i] == md && registeredStudentArr[i] == 'yes') {//&& registeredstudentNoArr[i] !=""	            


					//if(medium1Arr[i] == "en"){
					// for( i=0; i<studentNoLength.length; i++){
					// if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){
					// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
					// newStr +="<div class='info'   name='testInfo"+i+"'>";
					newStr += "<tr style='border: 1px solid black;'>";
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + registeredstudentNoArr[i] + '</td>';
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + registeredstudentInitialArr[i] + '</td>';
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + registeredstudentNICArr[i] + '</td>';
					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'/'+studentContactMobileArr[i]+'</td>';
					//newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmailArr[i]+'</td>';
					//for( i=0; i<applicationNoLength; i++){
					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+fieldNameArr[i]+'-'+fieldValueArr[i]+'</td>';
					//}
					newStr += "</tr>";
					newStr += "</div><br>";
					count++;
				}
				//}
				//}				
				//}
				//}
				//}
			}
		}
		newStr += "</table>";
	}
	var csvData = new Array();

	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], {
		"type": "text/doc;charset=utf8;"
	});
	var link = document.createElement("a");

	if (link.download !== undefined) { // feature detection
		// Browsers that support HTML5 download attribute
		link.setAttribute("href", window.URL.createObjectURL(blob));
		link.setAttribute("download", fileName);
	}
	else {
		// it needs to implement server side export
		link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";
	document.body.appendChild(link);
	window.location.replace(link);
}
//-----------------------------------------------------DEAN LIST DOWNLOAD FUNCTION END---------------------------------

//-------------------------------------------------------------------------GENERATE BULK NOTE FUNCTION START-------	
function generateBulkNote01() {
	if (TempBulkNote01 == undefined) {
		BulkNote01 = prompt("Please enter Note", "");
		TempBulkNote01 = BulkNote01;

	}
	else {
		BulkNote01 = prompt("Please enter Note", TempBulkNote01);
		if (BulkNote01 != null) {
			TempBulkNote01 = BulkNote01;
		}

	}


}
//-------------------------------------------------------------------------GENERATE BULK NOTE FUNCTION END-------	

//--------------------------------------------------------SEARCH FUNCTION START--------------------------------------------
function serachApplicant01() {

	var countSearch = 0;
	var c = 0;
	var appNIC = document.getElementById('searchApplicant01').value;
	var tempName = document.getElementById('searchApplicantName01').value;
	for (var i = 0; i < applicationNoArr.length; i++) {
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
			if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i] && studentNoArr[i] == "") {
				if (document.getElementById('studentNIC' + i)) {
					c++;
					if (c % 2 == 0) {
						document.getElementById('Alist' + i).style.backgroundColor = '#ffece6';
						//document.getElementById('Namebtn'+i).style.backgroundColor='#ffece6';                  
					}
					else {
						document.getElementById('Alist' + i).style.backgroundColor = '#ffd9cc';
						//document.getElementById('Namebtn'+i).style.backgroundColor='#ffd9cc'; 
					}

				}
			}

		}
	}
	var check = 0;
	for (var i = 0; i < applicationNoArr.length; i++) {
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
			if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i] && studentNoArr[i] == "") {
				if (document.getElementById('searchApplicantName01').value != "" & document.getElementById('searchApplicant01').value != "") {
					if (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) != -1) {
						check++;
						countSearch++;
						document.getElementById('Alist' + i).style.backgroundColor = '#ccffeb';
						//document.getElementById('Namebtn'+i).style.backgroundColor='#ccffeb'; 
					}
				}
				else {
					if ((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0 & check == 0) || (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) == 0 & check == 0)) {
						countSearch++;
						document.getElementById('Alist' + i).style.backgroundColor = '#ccffeb';
						//document.getElementById('Namebtn'+i).style.backgroundColor='#ccffeb';
					}
				}
			}

		}
	}
	if (countSearch == 0) {
		alert('There is No Matching Data');
	}
}
//--------------------------------------------------------SEARCH FUNCTION END-----------------------------------------------

//------------------------------------------------------BUTTON DISABLED FUNCTION START---------------------------------
function btndisabledApplicant() {

	document.getElementById("search01").disabled = false;

	//document.getElementById("Reset").disabled=false;	

	document.getElementById("Areturn").disabled = false;

	document.getElementById("download").disabled = false;

}
//------------------------------------------------------BUTTON DISABLED FUNCTION END---------------------------------


