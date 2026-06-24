var selectedChecked = "";
var registeredChecked = "";
var changeRow = 0;
var me, pt, dCode;
var count = 0;
dataRep['roleName'] = "";
var BulkNote01;
var TempBulkNote01;
var BulkNoteArr01 = new Array();
var SelectedStudentData = new Array();
var datetime = "";
var TempUser01 = "";
var SelectedStudentDatacount = 0;
var LibraryId = "";
var LibraryIdArr = new Array();
//-------------------------------------------------MAIN FUNCTION START---------------------------------------------
function formSelectedStudentList(dsp) {
	return "";
}


function DataTableForRegisterStudentsClerk() {

	var buttons = [];

	if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI') {
		buttons.push({
			text: 'Register',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				formSelectedStudentListsendForm("addSelectedStudentList");
				CreateStudentUserAccount("addStudentAccounts");
				formRegisterBulkNotesendFormNew("addBulkRegisterNotes");
				resetdata();
				// sendForm('data4returnStudent');
				// sendForm('data4checkUserRegisterStudent');
				// sendForm('data4checkdepartmentRegisterStudent');
				// sendForm('data4getLibCode');
			}
		});

		buttons.push({
			text: 'Add Note',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				generateBulkNote01();
			}
		});

	}

	var table = $('#regStudentTableClerk').DataTable({
		dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
			"<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
			"<'row'<'col-12't>>" + // Table in a single line
			"<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
		buttons: buttons,
		columnDefs: [{
			targets: 0,
			orderable: false,
			searchable: false,
		},

		],
		// select: {
		// 	style: 'multi',
		// 	selector: 'td:first-child',
		// },
		order: [0, 'asc'],
	});


	table.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		var countSelectedRows = table.rows({ selected: true }).count();
		var countItems = table.rows().count();

		if (countItems > 0) {
			if (countSelectedRows == countItems) {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
			} else {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
			}
		}

		if (e.type === 'select') {
			$('.selectall-checkbox input[type="checkbox"]', table.rows({ selected: true }).nodes()).prop('checked', true);
		} else {
			$('.selectall-checkbox input[type="checkbox"]', table.rows({ selected: false }).nodes()).prop('checked', false);
		}
	});

	// When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	table.on('click', 'thead .selectall-checkbox', function () {
		$('input[type="checkbox"]', this).trigger('click');
	});


	// When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	table.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
		if (this.checked) {
			table.rows().select();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkRegistered' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
				}
			}
		} else {
			table.rows().deselect();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkRegistered' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", false);
				}
			}
		}

		e.stopPropagation();
	});

}

function checkFileExists(url) {
	return fetch(url, { method: 'HEAD' })
		.then(response => {
			// Check if the response status is OK (200) or Not Found (404)
			return response.ok || response.status === 404;
		})
		.catch(() => false); // Handle network errors
}

function formNewSelectedStudentList(dsp) {
	str = "";
	title = "List of Selected Applicants for Registration";
	var mediumSinhalaChecked = mediumEnglishChecked = "";

	if (dsp == "formSelectedStudentList") {

		var role;
		var role1;
		var role2;
		var u = document.cookie;
		var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		for (i = 0; i < userIdLength; i++) {
			if (use == userIdArr[i]) {
				TempUser = use;
				dataRep['roleName'] = roleNameArr[i];
				dataRep['departmentCode'] = departmentCodeArr[i];
				dataRep['userName'] = userNameArr[i];
				dataRep['programmeCode'] = programmeCodeArr[i];
			}

		}
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName']=='Technical Coordinator') {
			var dcode = dataRep['departmentCode']
			role = "cordinator";


			var pcode = dataRep['programmeCode']
			role = "cordinator";

		}
		else if (dataRep['roleName'] == 'Head of the Department') {
			var dcode1 = dataRep['departmentCode']
			role1 = "head";

			var pcode1 = dataRep['programmeCode']
			role1 = "head";
		}
		else {

			role2 = "other";
		}

		if (role == "cordinator") {
			programName = "<option>Please scroll down to see the records</option>";
			for (j = 0; j < degreeCodeLength; j++) {
				if (degreeCodappeArr[j] != null) {
					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
						if (degreeCodappeArr[j] == dataRep['departmentCode']) {
							programName1 += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + ">" + degreeTitle1Arr[j] + "</option>";
						}
					}
				}
			}
		}

		else if (role1 == "head") {
			programName = "<option>Please scroll down to see the records</option>";
			for (j = 0; j < degreeCodeLength; j++) {
				if (degreeCodappeArr[j] != null) {
					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
						if (departmentCodeappArr[j] == dataRep['departmentCode']) {
							programName1 += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + ">" + degreeTitle1Arr[j] + "</option>";
						}
					}
				}
			}
		}

		if (role2 == "other") {
			if (dataRep['userName'] == "ssdean" || dataRep['userName'] == "ssar" || dataRep['userName'] == "Asanka") {
				programName = "<option>Please scroll down to see the records</option>";
				for (j = 0; j < degreeCodeLength; j++) {
					if (facultyCode3Arr[j] == "FAC03" & degreeTitle1Arr[j] != null) {
						if (degreeCodappeArr[j] != null) {
							if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
								programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
							}
						}
					}
				}
			}
			else if (dataRep['userName'] == "SAR-GWAI") {
				programName = "<option>Please scroll down to see the records</option>";
				for (j = 0; j < degreeCodeLength; j++) {
					if (facultyCode3Arr[j] == "FAC10" & degreeTitle1Arr[j] != null) {
						if (degreeCodappeArr[j] != null) {
							if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
								programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
							}
						}
					}
				}

			}
			else {
				programName = "<option>Please scroll down to see the records</option>";
				for (j = 0; j < degreeCodeLength; j++) {
					if (degreeCodappeArr[j] != null) {
						if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
							programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
						}
					}
				}
			}
		}

		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';

		str += "<div id='addSelectedStudentList'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName']=='Technical Coordinator' || dataRep['roleName'] == 'Head of the Department') {
			str += '<div class="form-group row"><div class="col-sm-4">';
			str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
			str += '<div class="col-sm-9" style="display: inline-flex;">';
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;">';
			str += programName;
			str += programName1;
			str += '</select>';
			str += '</div></div>';
		}
		else {
			str += '<div class="form-group row"><div class="col-sm-4">';
			str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
			str += '<div class="col-sm-9" style="display: inline-flex;">';
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;">';
			str += programName;
			str += '</select>';
			str += '</div></div>';
		}


		let date = new Date().getFullYear();


		str += '<div class="col-sm-3">'
		str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-sm-7" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;">';
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


		if (dataRep['selectMedium'] == 'mediumSinhala') {
			mediumSinhalaChecked = 'checked';
		} else if (dataRep['selectMedium'] == 'mediumEnglish') {
			mediumEnglishChecked = 'checked'
		}

		str += '<div class="col-sm-5">'
		str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium : </label></div>';
		str += '<div class="col-sm-10" style="display: inline-flex;">';
		str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();' " + mediumSinhalaChecked + ">Sinhala<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();' " + mediumEnglishChecked + ">English<i class='input-helper'></i></label></div></div>";
		str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="RegStudentList();DataTableForRegisterStudentsClerk();">View List</button></div>';

		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '</div></div>';
		str += '</div></div></div>';



		if (applicationNoLength > 0) {

			str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
			str += '<div class="card">';
			str += '<div class="card-body"><div class="table-responsive">';
			str += '<table class="table table-bordered" id="regStudentTableClerk">';
			str += '<thead><tr>';
			str += '<th>#</th>';
			str += '<th>Student Name</th>';
			str += '<th>NIC</th>';
			str += '<th>Student No</th>';
			if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI') {
				str += '<th>Register</th>';
			}
			str += '<th>Note</th>';
			str += '<th></th>';
			if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI') {
				str += '<th></th>';

			}
			str += '</tr></thead>';
			str += '<tbody>';
			rcount = 0;
			let strNew = "";
			for (var i = rcount; i < applicationNoArr.length; i++) {

				if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
					rcount++;
					if (studentNoArr[i]) {
						let background = "unset";
						if (registeredStudentArr[i] == 'tr' || registeredStudentArr[i] == 'dg' || registeredStudentArr[i] == 'sp') {
							background = "#59b300 !important"
						}


						str += "<tr>";
						str += '<td>' + rcount + '</td>';
						str += '<td>' + studentInitialArr[i] + '</td>';
						str += '<td>' + studentNICArr[i] + '</td>';
						str += '<td style="background-color:' + background + '">' + studentNoArr[i] + '</td>';

						if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI') {
							var checkBoxDivIdRegistered = 'checkRegistered' + i;
							if (document.getElementById(checkBoxDivIdRegistered)) {
								if (document.getElementById(checkBoxDivIdRegistered).checked) {
									registeredChecked = 'checked';
								}
							}
							str += "<td><input type='checkbox' " + registeredChecked + "  id='checkRegistered" + i + "' name='checkRegistered" + i + "'' disabled='disabled' style='margin: auto;width: -webkit-fill-available;'  onchange='generateStudentNo(this);dataRep[this.name]=this.value;'/></td>";

						}

						if (registeredStudentArr[i] == 'tr' || registeredStudentArr[i] == 'dg' || registeredStudentArr[i] == 'sp') {
							if (registeredStudentArr[i] == 'tr') {
								var transferDetails = newStudentNoArr[i];
							} else {
								var transferDetails = transferTypeArr[i];
							}

							str += '<td>';
							if (registeredStudentArr[i] == 'tr') {
								str += 'New Student No : ' + transferDetails;
							} else if (registeredStudentArr[i] == 'sp') {
								str += 'Special Transfer : ' + transferDetails;
							} else {
								str += 'Degrade Degree : ' + transferDetails;
							}
							str += '</td>';

						}
						else {

							str += '<td>&nbsp</td>';


						}


						var imageUrl = 'pic/' + studentNICArr[i] + '.jpg';
						str += '<td style="width:100px;" align="center"><div style="width:100px;" class="investView"><img src="' + imageUrl + '" width="70" height="85"  alt=""/></div></td>';
						if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI') {
							str += '<td align="center"><input type="button" class="btn btn-danger btn-rounded btn-fw" onclick="ResetUserAccount(' + i + ');" value="Reset Password"/></td>';
						}
						str += '</tr>';
					} else {
						strNew += "<tr>";
						strNew += '<td>' + rcount + '</td>';
						strNew += '<td>' + studentInitialArr[i] + '</td>';
						strNew += '<td>' + studentNICArr[i] + '</td>';
						strNew += '<td><input type="text" style="width:180px" name="studentNo' + i + '" id="studentNo' + i + '";></td>';
						var checkBoxDivIdRegistered = 'checkRegistered' + i;
						if (document.getElementById(checkBoxDivIdRegistered)) {
							if (document.getElementById(checkBoxDivIdRegistered).checked) {
								registeredChecked = 'checked';
							}
						}

						if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI') {
							strNew += "<td><input type='checkbox'  id='checkRegistered" + i + "' name='checkRegistered" + i + "'' style='margin: auto;width: -webkit-fill-available;'  onchange='generateStudentNo(this);dataRep[this.name]=this.value;'/></td>";
						}
						strNew += "<td><textarea rows='auto' name='notes" + i + "'  id='notes" + i + "' style='width:80%;float:left;'  onchange='dataRep[this.name]=this.value'></textarea></td>";
						strNew += '<td style="width:100px;" align="center"><div style="width:100px;" class="investView"><img src="pic/' + studentNICArr[i] + '.jpg" width="70" height="85"  alt=""/></div></td>';
						if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI') {
							strNew += '<td></td>';
						}
						strNew += '</tr>';
					}

				}
			}


			str += strNew;

			str += '</tbody>';
			str += '</table>';
			str += '</div>';
			str += '</div>';
			str += '</div>';
			str += '</div>';
			count = studentNoArr[rcount - 1];
		}



		str = str + newStr

	}
	return str;

}
//-------------------------------------------------MAIN FUNCTION END--------------------------------------------- 
var temArr = new Array();
var tNo = 0;

//-------------------------------------------------VIEW STUDENT LIST FUNCTION START---------------------------------------------
function RegStudentList() {
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select a value from the select Box(s)");
	} else {
		resetdata();
		dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
		dataRep["selectedMedium"] = md;
		sendForm("data4RegisterList");
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
	rcount = 0;
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


//-------------------------------------------------GENERATE STUDENT NO FUNCTION START---------------------------------------------
var adID ;
function generateStudentNo(sNo) {
	counttimes++;

	var ans = libpt = libdcode = libyr = tempDcodetest = tempPttest = "";
	if (counttimes == 1 && md == 'si' && count != "") {
		count = (count.split("/", 5)[count.split("/", 5).length - 1]);
	}
	if (counttimes == 1 && md == 'en' && count != "") {
		count = (count.split("/", 5)[count.split("/", 5).length - 1]);
		count = count.slice(0, 3);
	}

	adID = sNo.id;
	var lastChar = adID.substr(adID.indexOf("checkRegistered") + 15);
	var dTitle = document.getElementById('selectedDegreeName').value;
	var yr = document.getElementById('achedamicYear').value;

	if (document.getElementById(adID).checked == false) {
		tempNo = document.getElementById('studentNo' + lastChar).value;
		document.getElementById('studentNo' + lastChar).value = "";
		LibraryIdArr[lastChar] = "";
	}
	if (document.getElementById(adID).checked == true) {

		if (dTitle == degreeTitleArr[lastChar]) {
			pt = programmeTypeTitleArr[lastChar];
			tempPttest = programmeTypeTitleArr[lastChar];
			dCode = degreeCodeArr[lastChar];
			tempDcodetest = degreeCodeArr[lastChar];
			var tempdCode = degreeCodeArr[lastChar];
		}

		if (tempNo != "") {
			document.getElementById('studentNo' + lastChar).value = tempNo;
			tempNo = "";
		}
		else {
			count++;

			if (pt != dCode) {
				if (pt == 'MA') {
					dCode = dCode.substr(dCode.indexOf("MA") + 2);
				}
				else if (pt == 'MSSC') {

					dCode = dCode.substr(dCode.indexOf("MSSC") + 4);
				}
				else if (dCode == 'MBA') {

					pt = "MBA";
				}
				else if (dCode == 'MSCIEC') {

					pt = "MSc";
				}
				else {
					var x = dCode.split(pt);
					dCode = x[1];
				}

			}
			if (dCode == undefined) {
				dCode = tempdCode;
			}
			var str = "" + count;
			var pad = "000"
			if (dTitle == 'MA Degree in Mass Communication') {
				dCode = 'MACO';
			}
			if (dTitle == 'MSSc Degree in Mass Communication') {
				dCode = 'MACO';
				pt = 'MSSC';
			}
			if (dTitle == 'Postgraduate Diploma in Marketing') {
				dCode = 'PGDM';
			}
			if (dTitle == 'Postgraduate Diploma in Kayacikitsa') {
				dCode = 'PGDKY';
			}
			if (dTitle == 'Postgraduate Diploma in Pancakarma') {
				dCode = 'PGDPN';
			}
			if (dTitle == 'Postgraduate Diploma in Management and Administration of Ayurveda Institutions') {
				dCode = 'PGDMAAI';
			}
			ans = pad.substring(0, pad.length - str.length) + str





			if (dCode == 'MHRM' || dCode == 'MCom' || dCode == 'MBus' || dCode == 'MBA' || dCode == 'DBA' || dCode == 'PGDM' || dCode == 'PGDIT' || dCode == 'MBM' || dCode == 'PGDKY' || dCode == 'PGDMAAI' || dCode == 'PGDPN') {

				document.getElementById('studentNo' + lastChar).value = 'FGS/' + dCode + '/' + yr + '/' + ans;
				for (var n = 0; n < libraryCodeLenth; n++) {
					if (pt == libptcode[n]) {
						libpt = newlibptcode[n];
					}
					if (tempDcodetest == libdegreecode[n]) {
						libdcode = newlibdegreecode[n];
					}
					libyr = yr.substring(3, 4);

				}
				LibraryId = libpt + libdcode + libyr + ans;
				LibraryIdArr[lastChar] = LibraryId;
			}
			else if (pt == 'MHRM') {
				document.getElementById('studentNo' + lastChar).value = 'FGS/' + dCode + '/' + yr + '/' + ans;
				for (var n = 0; n < libraryCodeLenth; n++) {
					if (pt == libptcode[n]) {
						libpt = newlibptcode[n]; //
					}
					if (tempDcodetest == libdegreecode[n]) {
						libdcode = newlibdegreecode[n];
					}
					libyr = yr.substring(3, 4);

				}
				LibraryId = libpt + libdcode + libyr + ans;
				LibraryIdArr[lastChar] = LibraryId;
			}
			else if (pt == 'MCom' || pt == 'MBus') {
				document.getElementById('studentNo' + lastChar).value = 'FGS/' + dCode + '/' + yr + '/' + ans;
				for (var n = 0; n < libraryCodeLenth; n++) {

					if (pt == libptcode[n]) {
						libpt = newlibptcode[n];
					}
					if (tempDcodetest == libdegreecode[n]) {
						libdcode = newlibdegreecode[n];
					}
					libyr = yr.substring(3, 4);

				}
				LibraryId = libpt + libdcode + libyr + ans;
				LibraryIdArr[lastChar] = LibraryId;
			}
			else if (pt == 'MBA') {
				document.getElementById('studentNo' + lastChar).value = 'FGS/' + dCode + '/' + yr + '/' + ans;
				for (var n = 0; n < libraryCodeLenth; n++) {

					if (pt == libptcode[n]) {
						libpt = newlibptcode[n]; //
					}
					if (tempDcodetest == libdegreecode[n]) {
						libdcode = newlibdegreecode[n];
					}
					libyr = yr.substring(3, 4);

				}
				LibraryId = libpt + libdcode + libyr + ans;
				LibraryIdArr[lastChar] = LibraryId;
			}

			else if (pt == 'MSc') {
				var newDegreeCode;
				if (dCode.substring(0, 3) == "MSC") {
					newDegreeCode = dCode.substring(3, 8);
				}

				document.getElementById('studentNo' + lastChar).value = 'FGS/' + pt + '/' + newDegreeCode + '/' + yr + '/' + ans;
				for (var n = 0; n < libraryCodeLenth; n++) {
					if (pt == libptcode[n]) {
						libpt = newlibptcode[n];
					}
					if (tempDcodetest == libdegreecode[n]) {
						libdcode = newlibdegreecode[n];
					}
					libyr = yr.substring(3, 4);

				}
				LibraryId = libpt + libdcode + libyr + ans;
				LibraryIdArr[lastChar] = LibraryId;
			}

			else {
				if (md == 'si') {
					document.getElementById('studentNo' + lastChar).value = 'FGS/' + pt + '/' + dCode + '/' + yr + '/' + ans;
					for (var n = 0; n < libraryCodeLenth; n++) {

						if (pt == libptcode[n]) {
							libpt = newlibptcode[n]; //
						}
						if (tempDcodetest == libdegreecode[n]) {
							libdcode = newlibdegreecode[n];
						}
						libyr = yr.substring(3, 4);
					}
					LibraryId = libpt + libdcode + libyr + ans;
					LibraryIdArr[lastChar] = LibraryId;

				} else {
					document.getElementById('studentNo' + lastChar).value = 'FGS/' + pt + '/' + dCode + '/' + yr + '/' + ans + 'E';
					for (var n = 0; n < libraryCodeLenth; n++) {

						if (tempPttest == libptcode[n]) {
							libpt = newlibptcode[n]; //
						}
						if (tempDcodetest == libdegreecode[n]) {
							libdcode = newlibdegreecode[n];
						}
						libyr = yr.substring(3, 4);

					}
					if (libdcode == "DB") {
						LibraryId = "DB" + libdcode + libyr + ans;
						LibraryIdArr[lastChar] = LibraryId;
					}
					else {

						LibraryId = libpt + libdcode + libyr + ans;
						LibraryIdArr[lastChar] = LibraryId;
					}
				}
			}
		}
	}
}
//-------------------------------------------------GENERATE STUDENT NO FUNCTION END---------------------------------------------



//-------------------------------------------------REFRESH STUDENT LIST FUNCTION START---------------------------------------------

function refreshStudentList() {
	applicationNoLength = 0;
	dataRep['selectMedium'] = "";
	counttimes = 0;
}
//-------------------------------------------------REFRESH STUDENT LIST FUNCTION END---------------------------------------------

//-------------------------------------------------REGISTER STUDENT SENDFORM FUNCTION START---------------------------------------------

function formSelectedStudentListsendForm(frm) {

	var doc, dataStr, dataStr2;

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=regStudent";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}

	if (frm == 'addSelectedStudentList') {
		doc = document.maintainformSelectedStudentList;
		dataStr += "&interface=" + frm;
		dataStr2 = "action=createStudentAccoutn";
		dataStr2 += "&interface=addStudentAccounts";
		var newStr = "";
		let newStrCreateAccount = "";
		var dd = new Date();
		var d = dd.getUTCDate();
		var m = dd.getUTCMonth();
		var y = dd.getUTCFullYear();
		var mn = m + 1;
		var currentdate = y + "-" + mn + "-" + d;
		var SelectedStudentDataCreateAccount = new Array();

		newStr += "&achedamicYear=" + dataRep["achedamicYear"];
		newStr += "&medium=" + dataRep["selectedMedium"];
		for (var k = 0; k < applicationNoArr.length; k++) {
			if (dataRep["selectedDegreeName"] == degreeTitleArr[k] & dataRep["achedamicYear"] == achedamicYearArr[k]) {
				if (document.getElementById('checkRegistered' + k)) {
					if (document.getElementById('checkRegistered' + k).checked == true) {
						// student Register set data		
						newStr += "&universityCode=" + universityCodeArr[k] + "&facultyCode=" + facultyCodeArr[k] + "&programmeTypeCode=" + programmeTypeCodeArr[k] + "&degreeCode=" + degreeCodeArr[k] + "&studentNIC=" + studentNICArr[k]
							+ "&applicationNo=" + applicationNoArr[k] + "&studentName=" + studentNameArr[k] + "&studentPersonalTitle=" + studentPersonalTitleArr[k] + "&studentInitial=" + studentInitialArr[k]
							+ "&studentDateofbirth=" + studentDateofbirthArr[k] + "&studentEmployment=" + studentEmploymentArr[k] + "&studentPermanentAddress=" + studentPermanentAddressArr[k]
							+ "&studentOfficeAddress=" + studentOfficeAddressArr[k] + "&studentContactLan=" + studentContactLanArr[k] + "&studentContactMobile=" + studentContactMobileArr[k] + "&studentContactEmail=" + studentContactEmailArr[k];
						newStr += "&studentNo=" + document.getElementById('studentNo' + k).value;
						newStr += "&LibraryIdCode=" + LibraryIdArr[k];

						newStr += "&registered=" + "yes";
						newStr += "&notes=" + document.getElementById('notes' + k).value;
						newStr += "&RegisteredDate=" + currentdate;
						SelectedStudentData[k] = dataStr + newStr;
						// end student Register set data		


						// create user account set data
						newStrCreateAccount += "&sUserName=" + document.getElementById('studentNo' + k).value;
						var splitting = document.getElementById('studentNo' + k).value;
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
						newStrCreateAccount += "&sPassWord=" + studentNICArr[k];
						newStrCreateAccount += "&roleId=" + 11;
						newStrCreateAccount += "&sUName=" + test;

						SelectedStudentDataCreateAccount[k] = dataStr2 + newStrCreateAccount;
						// end create user account set data

					}
				}
			}
		}
		//---------------------------------------------------------add bulk notes--------------------------------
		var checkNotes01 = 0;
		for (var k = 0; k < applicationNoArr.length; k++) {
			if (dataRep["selectedDegreeName"] == degreeTitleArr[k] & dataRep["achedamicYear"] == achedamicYearArr[k]) {
				if (document.getElementById('checkRegistered' + k)) {
					if (document.getElementById('checkRegistered' + k).checked == true) {
						if (document.getElementById('notes' + k).value != " ") {
							checkNotes01++;
						}
					}
				}
			}
		}
		if (BulkNote01 != " " || checkNotes != 0) {

			for (var k = 0; k < applicationNoArr.length; k++) {
				if (dataRep["selectedDegreeName"] == degreeTitleArr[k] & dataRep["achedamicYear"] == achedamicYearArr[k]) {
					if (document.getElementById('checkRegistered' + k)) {
						if (document.getElementById('checkRegistered' + k).checked == true) {

							currentdate = new Date();
							datetime = + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/"
								+ currentdate.getFullYear() + "/"
								+ currentdate.getHours() + "/"
								+ currentdate.getMinutes() + "/"
								+ currentdate.getSeconds();

							if (document.getElementById('notes' + k).value != " " && TempBulkNote01 != undefined) {
								newStr1 = "action=addNote";
								newStr1 += "&interface=" + "addBulkRegisterNotes";
								newStr1 += "&messageId=" + datetime;
								newStr1 += "&referenceNo=" + document.getElementById('studentNo' + k).value;
								newStr1 += "&userId=" + TempUser01;
								newStr1 += "&message=" + TempBulkNote01 + "/" + document.getElementById('notes' + k).value;
								BulkNoteArr01[k] = newStr1;
							}
							else if (document.getElementById('notes' + k).value != " " && TempBulkNote01 == undefined) {
								newStr1 = "action=addNote";
								newStr1 += "&interface=" + "addBulkRegisterNotes";
								newStr1 += "&messageId=" + datetime;
								newStr1 += "&referenceNo=" + document.getElementById('studentNo' + k).value;
								newStr1 += "&userId=" + TempUser01;
								newStr1 += "&message=" + document.getElementById('notes' + k).value;
								BulkNoteArr01[k] = newStr1;
							}
							else if (TempBulkNote01 != undefined) {
								newStr1 = "action=addNote";
								newStr1 += "&interface=" + "addBulkRegisterNotes";
								newStr1 += "&messageId=" + datetime;

								newStr1 += "&referenceNo=" + document.getElementById('studentNo' + k).value;
								newStr1 += "&userId=" + TempUser01;
								newStr1 += "&message=" + TempBulkNote01;
								BulkNoteArr01[k] = newStr1;
							}

						}
					}

				}

			}
		}





		//register Student
		dataStrUp = "action=addBulk";
		dataStrUp += "&interface=" + frm;
		dataStrUp += "&data=";
		let Studentdata = "";
		for (var j = 0; j < applicationNoArr.length; j++) {
			if (SelectedStudentData[j]) {
				Studentdata += "{" + SelectedStudentData[j] + "}";
				counttimes = 0;
			}
		}
		const jsonArray = queryStringToJson(Studentdata);
		dataStrUp += JSON.stringify(jsonArray);
		//end register Student


		//create  Student Note 
		dataStrUpNoteForStudent = "action=addBulk";
		dataStrUpNoteForStudent += "&interface=addBulkRegisterNotes";
		dataStrUpNoteForStudent += "&data=";
		Studentdata = "";
		for (var j = 0; j < applicationNoArr.length; j++) {
			if (BulkNoteArr01[j]) {
				Studentdata += "{" + BulkNoteArr01[j] + "}";
				p['sedataRelectMedium'] = "";
				dataRep['selectMedium'] = "";
				counttimes = 0;
			}


		}
		const jsonArrayNote = queryStringToJson(Studentdata);
		dataStrUpNoteForStudent += JSON.stringify(jsonArrayNote);
		//end register Student

		//create Student account
		dataStrUpForAccountCreate = "action=addBulk";
		dataStrUpForAccountCreate += "&interface=addStudentAccounts";
		dataStrUpForAccountCreate += "&data=";
		Studentdata = "";
		for (var j = 0; j < applicationNoArr.length; j++) {
			if (SelectedStudentDataCreateAccount[j] != "" && SelectedStudentDataCreateAccount[j] != undefined) {
				if (SelectedStudentDataCreateAccount[j]) {

					Studentdata += "{" + SelectedStudentDataCreateAccount[j] + "}";
					counttimes = 0;
				}
			}
		}

		const jsonArrayAccountCreate = queryStringToJson(Studentdata);
		dataStrUpForAccountCreate += JSON.stringify(jsonArrayAccountCreate);
		//end create Student account

		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStrUp);

	}
	return 0;

}

var dataStrUpForAccountCreate = "";
var dataStrUpNoteForStudent = "";

function CreateStudentUserAccount(frm) {
	isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStrUpForAccountCreate);
}

function ResetUserAccount(loc) {
	Swal.fire({
		title: 'Are you sure?',
		text: 'This action will reset the password. Do you want to proceed?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, reset it!',
	}).then((result) => {
		if (result.isConfirmed) {
			// If the user confirms, proceed with the password reset
			var newStr = "action=update";
			newStr += "&interface=updateStudentAccounts";
			newStr += "&sUserName=" + studentNoArr[loc];
			newStr += "&sPassWord=" + studentNICArr[loc];
			newStr += "&roleId=" + 11;

			// Perform the password reset operation
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", newStr);
			Swal.fire({
				icon: 'success',
				title: 'Success',
				text: 'Successfully reset',
				showConfirmButton: true,
			});
		}
	});

}


function queryStringToJson(inputString) {
	// Split the input string into individual objects using '}{'
	const objectsArray = inputString.split('}{');

	// Initialize an array to store JSON objects
	const jsonArray = [];

	// Process each object and convert it to a JSON object
	for (let objectString of objectsArray) {

		while (objectString.startsWith('{')) {
			objectString = objectString.substring(1);
		}

		while (objectString.endsWith('}')) {
			objectString = objectString.slice(0, -1);;
		}


		// Add back the missing curly braces and split into key-value pairs
		objectString = `{${objectString}}`;
		const keyValuePairs = objectString.split('&');

		// Initialize an empty object to store the JSON data for this object
		const jsonObject = {};

		// Iterate through the key-value pairs
		keyValuePairs.forEach((pair) => {
			const [key, value] = pair.split('=');

			let newKey = key;
			while (newKey.startsWith('{')) {
				newKey = newKey.substring(1);
			}

			while (newKey.endsWith('}')) {
				newKey = newKey.slice(0, -1);;
			}


			let newValue = value;
			while (newValue.startsWith('{')) {
				newValue = newValue.substring(1);
			}

			while (newValue.endsWith('}')) {
				newValue = newValue.slice(0, -1);;
			}



			jsonObject[newKey] = decodeURIComponent(newValue);
		});

		jsonArray.push(jsonObject);
	}

	return jsonArray;
}

//-------------------------------------------------REGISTER STUDENT SENDFORM FUNCTION END---------------------------------------------

//-------------------------------------------------SEND BULKNOTES FUNCTION START--------------------------------------------
function formRegisterBulkNotesendFormNew(frm) {
	isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStrUpNoteForStudent);
}

function formRegisterBulkNotesendForm_(frm) {
	for (var i = 0; i < BulkNoteArr01.length; i++) {
		if (BulkNoteArr01[i] != undefined) {
			//alert(BulkNoteArr01[i]);
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", BulkNoteArr01[i]);
		}
	}
	return 0;

}
//-------------------------------------------------SEND BULKNOTES FUNCTION START--------------------------------------------

//-------------------------------------------------PRINT ID FUNCTION START---------------------------------------------

function printStudentIDNow() {

	var gtDiv = "";
	for (i = 0; i < applicationNoArr.length; i++) {
		if (document.getElementById('checkRegistered' + i)) {
			if (document.getElementById('checkRegistered' + i).checked == true) {
				gtDiv += '<table width="752" border="1" cellpadding="0">';
				gtDiv += '<tr>';
				gtDiv += '<td width="275" height="225"><table width="391" border="0" cellpadding="0">';
				gtDiv += '<tr>';
				gtDiv += '<td bgcolor="#4B0A0A" width="70"><h>';
				gtDiv += '<img src="img/logoid.gif"  alt="" width="70" height="64" align="left"/></td>';
				gtDiv += '<td bgcolor="#430102" colspan="2">';
				gtDiv += '<img src="img/h1logo.jpg"  alt="" width="318" height="62" align="left"/></td>';
				gtDiv += '</td></tr>';
				gtDiv += '<tr>';
				gtDiv += '<td height="87" rowspan="3"><img src="pic/' + studentNICArr[i] + '.jpg" width="70" height="85"  alt=""/></td>';
				gtDiv += '<td height="26" colspan="2" style="font-size: medium">Name : ' + studentPersonalTitleArr[i] + '. ' + studentInitialArr[i] + '<br></td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';
				gtDiv += '<td height="28" colspan="2" style="font-size: medium">Student No: ' + document.getElementById('studentNo' + i).value + ' </td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';
				gtDiv += '<td colspan="2" style="font-size: medium">Date of Expiry: 13.11.2016</td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';


				gtDiv += '<td colspan="2"><img src="sig/S' + studentNICArr[i] + '.jpg" width="90" height="60"  alt=""/>';

				gtDiv += '</td>';

				gtDiv += '<td width="153"><img src="studentPhotos/sar.jpg" width="90" height="60"  alt=""/>';
				gtDiv += '</td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';

				gtDiv += '<td height="30" colspan="2"><span style="font-size: small">Student&rsquo;s  Signature  </span></td>';

				gtDiv += '<td width="153"><span style="font-size: small">Senior Assistant Registrar </span><br><span style="font-size: x-small"> Faculty of Graduate Studies<br/></span></td>';
				gtDiv += '</tr>';
				gtDiv += '</table></td>';
				gtDiv += '<td width="30">&nbsp;</td>';
				gtDiv += '<td width="296"><table width="391" height="254" border="0" cellpadding="0">';
				gtDiv += '<tr>';
				gtDiv += '<td height="55" style="font-size: small"> National Identity card  No : </td>';
				gtDiv += '<td style="font-size: small">' + studentNICArr[i] + '</td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';
				gtDiv += '<td width="134" style="font-size: small"> Address :</td>';
				gtDiv += '<td width="150" style="font-size: small">' + studentPermanentAddressArr[i] + '</td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';
				gtDiv += '<td><p style="font-size: small"> Date of Registration : </p></td>';
				gtDiv += '<td style="font-size: small">14.11.2015</td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';
				gtDiv += '<td><p style="font-size: small"> Date of Issue : </p></td>';
				gtDiv += '<td style="font-size: small">14.11.2015</td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';
				gtDiv += '<td height="100" colspan="2" style="font-size: small"> This ID card is a property of the University of Kelaniya, Sri Lanka. On termination of the  studentship, this card should be handed over to the Faculty of Graduate  Studies. </td>';
				gtDiv += '</tr>';
				gtDiv += '</table></td>';
				gtDiv += '</tr>';
				gtDiv += '</table>';
				gtDiv += '<p></P>';
				gtDiv += '<p>&nbsp;</P>';

			}
		}
	}

	newPrint = window.open('', '');
	doc = newPrint.document;
	doc.open();

	doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
	doc.write('<style type="text/css">label{font-family:tahoma;font-size:14px}.investView_l,.investView,.investLabel_l,.investLabel,br{margin-left:20px;float:left;font-family:tahoma;font-size:12px;}body{margin:10px auto;font-family:tahoma;width:800px;border:1px solid #000000;text-align:center;padding:15px;}br{display:none;}.hideLabel{clear:both;font-size:12px;}.hideCheckBox,.hidehr{display:none;}textarea{border:none;width:100%;font-size:12px;}#print,#noprint,#printsec3,#logDiv,#issue,#return,#btnlog{display:none;}.demoprint{margin-top:0px;clear:both;float:left;width:700px;font-size:12px;}#printsec1,#printsec2{float:left;clear:both;width:680px;font-size:12px;}.longIdentifier{clear:none;float:left;width:150px;font-size:12px;}#instituteDiv{float:left;width:auto;clear:right;font-size:12px;}.investView_l{float:left; }#results{clear:right;}</style>');
	doc.write('</head><body>');
	doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0096c7;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
	doc.write(gtDiv);
	doc.write('</body></html>');
	doc.close();
}
//-------------------------------------------------PRINT ID FUNCTION END---------------------------------------------

//-------------------------------------------------COMPLETE APPLICATION FUNCTION START---------------------------------------------

function CompleteApplication() {
	count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Application No</th>";
		newStr += "<th style='border: 1px solid black;'>Name With Initial</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		newStr += "</tr>";

		for (i = 0; i < applicationNoLength; i++) {
			if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
				if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	
					newStr += "<tr style='border: 1px solid black;'>";
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + applicationNoArr[i] + '</td>';
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';

					newStr += "</tr>";
					newStr += "</div><dev><br>";
					count++;
				}
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

	if (link.download !== undefined) {
		link.setAttribute("href", window.URL.createObjectURL(blob));
		link.setAttribute("download", fileName);
	}
	else {
		link.setAttribute("href", "http://www.example.com/export");
	}
	link.innerHTML = "";
	document.body.appendChild(link);
	window.location.replace(link);
}

//-------------------------------------------------COMPLETE APPLICATION FUNCTION END---------------------------------------------



//-------------------------------------------------DEAN LIST DOWNLOAD FUNCTION START----------------------------------------------

function AttendListDown() {

	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {

		var count = 1;
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + " - " + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Attendence Sheet</div><br>";
		newStr += "<div class='investLabel' style='font-weight:bold;'>Course Unit:</div>";
		newStr += "<div class='investLabel' style='font-weight:bold;'>Date:</div>";
		newStr += "<div class='investLabel' style='font-weight:bold;'>Lecturer's Name:</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Name</th>";
		newStr += "<th style='border: 1px solid black;'>Signature</th>";
		newStr += "</tr>";


		for (var i = 0; i < applicationNoArr.length; i++) {

			if (studentNoArr[i]) {

				newStr += "<tr>";
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + count + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">' + studentInitialArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr += "</tr>";
				newStr += "</div><dev><br>";
				count++;
			}
		}
		newStr += "</table>";
		newStr += "<br>";
	}

	var exportFilename = "Attendence Sheet.doc";
	var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });


	if (navigator.msSaveBlob) {
		navigator.msSaveBlob(csvData, exportFilename);
	} else {
		//In FF link must be added to DOM to be clicked
		var link = document.createElement('a');
		link.href = window.URL.createObjectURL(csvData);
		link.setAttribute('download', exportFilename);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
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
			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i] && studentNoArr[i] == "") {
				if (document.getElementById('studentNIC' + i)) {
					c++;
					if (c % 2 == 0) {
						document.getElementById('Alist' + i).style.backgroundColor = '#ffece6';
					}
					else {
						document.getElementById('Alist' + i).style.backgroundColor = '#ffd9cc';
					}

				}
			}

		}
	}
	var check = 0;
	for (var i = 0; i < applicationNoArr.length; i++) {
		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i] && studentNoArr[i] == "") {
				if (document.getElementById('searchApplicantName01').value != "" & document.getElementById('searchApplicant01').value != "") {
					if (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) != -1) {
						check++;
						countSearch++;
						document.getElementById('Alist' + i).style.backgroundColor = '#ccffeb';
					}
				}
				else {
					if ((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0 & check == 0) || (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) == 0 & check == 0)) {
						countSearch++;
						document.getElementById('Alist' + i).style.backgroundColor = '#ccffeb';
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
function btndisabledreStudent() {
	document.getElementById("search01").disabled = false;
	document.getElementById("resetbtn").disabled = false;

	if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI') {
		document.getElementById("registerbtn").disabled = false;
		document.getElementById("AddNote01").disabled = false;
	}
	else {
	}
}
