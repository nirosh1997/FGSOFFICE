//L.C.P.Perera
var downloadOptionModel;

var ItemValueArr = new Array();
var AppNoArr = new Array();
var sqnum = 0;
var docID = "";
dataRep["sessionID"] = dataRep["docName"] = dataRep["programYear"] = dataRep['roleName'] = dataRep["achedamicYear"] = dataRep['userName'] = dataRep['userName1'] = dataRep['userid'] = "";
var inum = 0;
var rwcnt = 1;
var count = 0;
var checkcount = 0;
var countviewSelectedList = 0;
//---------------------------------------MAIN FUNCTION START--------------------------------------------------------------
function formInterviewList(dsp) {


	str = "";
	title = "Interview Screening List";

	if (dsp == "formInterviewList" || dsp == "formInterviewList2" || dsp == "formInterviewList3" || dsp == "formInterviewList4") {

		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center" style="width: 100%;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<div class="row" style="padding:3px 0">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex align-items-center"><h4 class="navTitle">' + title + '</h4></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department') {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;dataRep[this.id' + 1 + ']=this.value;sendForm(' + "'data4ViewApplicants'" + ');sendForm(' + "'data4ViewApplicants2'" + ');sendForm(' + "'data4ViewApplicants3'" + ');sendForm(' + "'data4ViewApplicants4'" + ');" >';
			str += programName;
			str += programName1;
			str += '</select>';
		}
		else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;dataRep[this.id' + 1 + ']=this.value;sendForm(' + "'data4ViewApplicants'" + ');sendForm(' + "'data4ViewApplicants2'" + ');sendForm(' + "'data4ViewApplicants3'" + ');sendForm(' + "'data4ViewApplicants4'" + ');" >';
			str += programName;
			str += '</select>';
		}
		str += '</div>';
		let date = new Date().getFullYear();
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">';
		str += '<div class="row">';
		str += '<div class="col-12 col-sm-4 col-md-4 col-lg-5 col-xl-5">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;sendForm(' + "'data4ViewApplicants'" + ');sendForm(' + "'data4ViewApplicants2'" + ');sendForm(' + "'data4ViewApplicants3'" + ');sendForm(' + "'data4ViewApplicants4'" + ');">';
		for (i = 2014; i <= date + 2; i++) {
			if (i == date + 2) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 d-flex align-items-center">';
		str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="sendForm(' + "'data4ViewApplicants'" + ');sendForm(' + "'data4ViewApplicants2'" + ');sendForm(' + "'data4ViewApplicants3'" + ');sendForm(' + "'data4ViewApplicants4'" + ');" id="filterBtn">View List</button>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '</div>';
		str += '</li>';
		str += '</ul>';
		str += '</div>';
		str += '</nav >';










		str += "<div id='formInterviewList'>";


		str += "<div  id='selectedlistbtn' style='margin:clear:both'></div>";

		str += "<div  id='list' style='margin:clear:both'></div>";

		str += '</div>';
	}
	//buttondisable2();
	//ViewList();		
	return str;

}
//---------------------------------------MAIN FUNCTION END--------------------------------------------------------------

function formStudentQulificationList(dsp) {


	str = "";
	title = "Students Qulification List";

	if (dsp == "formStudentQulificationList" || dsp == "formStudentQulificationList2" || dsp == "formStudentQulificationList3" || dsp == "formStudentQulificationList4") {

		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center" style="width: 100%;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<div class="row" style="padding:3px 0">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex align-items-center"><h4 class="navTitle">' + title + '</h4></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department') {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;dataRep[this.id' + 1 + ']=this.value;sendForm(' + "'data4ViewEduApplicants'" + ');sendForm(' + "'data4ViewEduApplicants2'" + ');sendForm(' + "'data4ViewEduApplicants3'" + ');sendForm(' + "'data4ViewEduApplicants4'" + ');" >';
			str += programName;
			str += programName1;
			str += '</select>';
		}
		else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;dataRep[this.id' + 1 + ']=this.value;sendForm(' + "'data4ViewEduApplicants'" + ');sendForm(' + "'data4ViewEduApplicants2'" + ');sendForm(' + "'data4ViewEduApplicants3'" + ');sendForm(' + "'data4ViewEduApplicants4'" + ');" >';
			str += programName;
			str += '</select>';
		}
		str += '</div>';
		let date = new Date().getFullYear();
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">';
		str += '<div class="row">';
		str += '<div class="col-12 col-sm-4 col-md-4 col-lg-5 col-xl-5">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;sendForm(' + "'data4ViewEduApplicants'" + ');sendForm(' + "'data4ViewEduApplicants2'" + ');sendForm(' + "'data4ViewEduApplicants3'" + ');sendForm(' + "'data4ViewEduApplicants4'" + ');">';
		for (i = 2014; i <= date + 2; i++) {
			if (i == date + 2) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 d-flex align-items-center">';
		str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="sendForm(' + "'data4ViewEduApplicants'" + ');sendForm(' + "'data4ViewEduApplicants2'" + ');sendForm(' + "'data4ViewEduApplicants3'" + ');sendForm(' + "'data4ViewEduApplicants4'" + ');" id="filterBtn">View List</button>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '</div>';
		str += '</li>';
		str += '</ul>';
		str += '</div>';
		str += '</nav >';

		str += "<div id='formInterviewList'>";


		str += "<div  id='selectedlistbtn' style='margin:clear:both'></div>";

		str += "<div  id='list' style='margin:clear:both'></div>";

		str += '</div>';
	}
	//buttondisable2();
	//ViewList();		
	return str;

}

function DataTableForInterviewApplicationListTable() {

	var buttons = [];

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
		buttons.push({
			text: 'Download Options',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				openModelInterviewList();
			}
		});
	}


	if (!$.fn.DataTable.isDataTable('#applicationListTable')) {
		var table = $('#applicationListTable').DataTable({
			dom: "" + // Search and buttons in a 1-line row
				"<'row'<'col col-md-4' l><'col col-md-4 text-center' B><'col col-md-4' f>>" + // Filtering input and pagination in a 2-line row
				"<'row'<'col-12't>>" + // Table in a single line
				"<'row'<'col-12 col-md-6'i><'col-12 col-md-6'p>>", // Processing display element right, pagination right

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
			select: {
				style: 'multi',
				selector: 'td:first-child',
			},
			order: [0, 'asc'],
		});


		// table.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		// 	var countSelectedRows = table.rows({ selected: true }).count();
		// 	var countItems = table.rows().count();

		// 	if (countItems > 0) {
		// 		if (countSelectedRows == countItems) {
		// 			$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
		// 		} else {
		// 			$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
		// 		}
		// 	}

		// 	if (e.type === 'select') {
		// 		$('.selectall-checkbox input[type="checkbox"]', table.rows({ selected: true }).nodes()).prop('checked', true);
		// 	} else {
		// 		$('.selectall-checkbox input[type="checkbox"]', table.rows({ selected: false }).nodes()).prop('checked', false);
		// 	}
		// });

		// // When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
		// table.on('click', 'thead .selectall-checkbox', function () {
		// 	$('input[type="checkbox"]', this).trigger('click');
		// });


		// // When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
		// table.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
		// 	if (this.checked) {
		// 		table.rows().select();
		// 		for (i = 0; i < applicationNoLength; i++) {
		// 			var checkBoxDivIdRegistered = '#checkSelected' + i;
		// 			if ($(checkBoxDivIdRegistered)) {
		// 				$(checkBoxDivIdRegistered).prop("checked", true);
		// 			}
		// 		}
		// 	} else {
		// 		table.rows().deselect();
		// 		for (i = 0; i < applicationNoLength; i++) {
		// 			var checkBoxDivIdRegistered = '#checkSelected' + i;
		// 			if ($(checkBoxDivIdRegistered)) {
		// 				$(checkBoxDivIdRegistered).prop("checked", false);
		// 			}
		// 		}
		// 	}

		// 	e.stopPropagation();
		// });
	}



}

//---------------------------------------VIEW LIST FUNCTION START--------------------------------------------------------------	
async function ViewListInterview() {
	inum = 0; rwcnt = 1; str = "";
	var appNo = stdName = stdAdd = stdMob = stdEmail = "";
	var countSelectedRows = 0;
	for (i = 0; i < appverticalPinLength; i++) {
		if (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) || (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) != applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) && applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == i)) {
			countSelectedRows++;
		}
	}
	if (countSelectedRows == 0) {
		// alert('There is no matching data');
	}
	else {
		// if (document.getElementById('selectedDocName').value == "Application List") {
		countviewSelectedList++;


		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="applicationListTable">';
		str += '<thead><tr>';
		// str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		// str += '<th></th>';
		str += '<th>#</th>';
		str += '<th>Applicant Name</th>';
		str += '<th>Application No</th>';
		str += '<th>NIC</th>';
		str += '<th>Address</th>';
		str += '<th>Mobile No</th>';
		str += '<th>E-mail</th>';
		str += '</tr></thead>';
		str += '<tbody>';

		let postData = {
			action: "data4getApplicantNo",
			degreeCode: dataRep["selectedDegreeName"],
			achedamicYear: dataRep["achedamicYear"],
			authcode: authcode,
			username: dataRep['userId'],
		};

		// console.log(postData);
		let ajaxResponse = await new Promise((resolve, reject) => {
			$.ajax({
				type: 'POST',
				url: 'rules/applicant.php',
				data: postData,
				dataType: 'json',
				success: function (response5) {
					// console.log(response5)
					resolve(response5); // Resolve the Promise on success
				},
				error: function (error) {
					reject(error); // Reject the Promise on error
				}
			});
		});



		ajaxResponse.forEach((response, index) => {
			if (response && response.applicationNo) {
				str += '<tr>';
				str += '<td>' + rwcnt + '</td>';

				j = i;
				let name = "";
				let address = "";
				let mobile = "";
				let email = "";
				name += ' <td  name="studentName' + inum + '" id="studentName' + inum + '" >' + response.studentName + '</td>';

				address += ' <td  name="studentPermanentAddress' + inum + '" id="studentPermanentAddress' + inum + '" >' + response.studentPermanentAddress + '</td>';

				mobile += ' <td  name="studentContactMobile' + inum + '" id="studentContactMobile' + inum + '" >' + '<span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + response.studentContactMobile.replace(/\s/g, '') + '"])>' + response.studentContactMobile + '</span></td>';

				email += ' <td  name="studentContactEmail' + inum + '" id="studentContactEmail' + inum + '" >' + '<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + response.studentContactEmail + '" target="_blank"> ' + response.studentContactEmail + '</td></td>';

				if (name == "") {
					str += ' <td></td>';
				} else {
					str += name;
				}

				str += '<td>' + response.applicationNo + '</td>';
				str += '<td>' + response.studentNIC + '</td>';
				if (address == "") {
					str += ' <td></td>';
				} else {
					str += address;
				}

				if (mobile == "") {
					str += ' <td></td>';
				} else {
					str += mobile;
				}

				if (email == "") {
					str += ' <td></td>';
				} else {
					str += email;
				}
				str += '</tr>';
				inum++;
				rwcnt++;

			}
		});


		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		var newStr = str;


		for (i = 0; i < documentIDLength; i++) {

			if (documentIDArr[dataRep["selectedDocName"] - 1] == documentIDArr[i]) {
				docID = documentIDArr[i];
			}

		}

		for (var q = 0; q <= dataItemIDLength; q++) {

			if (docID == documentItemIDArr[q]) {
				if (dataItemNameArr[q] != null) {
					if (dataItemNameArr[q] == "Programm Title") {
						dataRep["programTitle"] = document.getElementById('selectedDegreeName').value;
						newStr += "<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='programTitle'  id='programTitle' value= '" + dataRep["programTitle"] + "-" + dataItemIDArr[q] + "' onchange='dataRep[this.name]=this.value'" + keyDisabled + "></div>";

					}
					if (dataItemNameArr[q] == "Achedamic Year") {
						newStr += "<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='achedamicYear'  id='achedamicYear1' value= '" + dataRep["programYear"] + "-" + dataItemIDArr[q] + "' onchange='dataRep[this.name]=this.value'" + keyDisabled + "></div>";

					}

				}
			}
		}
		selectprintlist2();
		document.getElementById('list').innerHTML = newStr;
		DataTableForInterviewApplicationListTable();
		// document.getElementById("View-List").disabled = true;
	}

}


async function ViewListInterviewStudentQulification() {
	inum = 0; rwcnt = 1; str = "";
	var appNo = stdName = stdAdd = stdMob = stdEmail = "";
	var countSelectedRows = 0;
	for (i = 0; i < appverticalPinLength; i++) {
		if (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) || (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) != applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) && applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == i)) {
			countSelectedRows++;
		}
	}
	if (countSelectedRows == 0) {
		// alert('There is no matching data');
	}
	else {
		// if (document.getElementById('selectedDocName').value == "Application List") {
		countviewSelectedList++;


		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="applicationListTable">';
		str += '<thead><tr>';
		// str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		// str += '<th></th>';
		str += '<th>#</th>';
		str += '<th>Applicant Name</th>';
		str += '<th>Student No</th>';
		str += '<th>Application No</th>';
		str += '<th>NIC</th>';
		str += '<th>Address</th>';
		str += '<th>Mobile No</th>';
		str += '<th>E-mail</th>';
		str += '</tr></thead>';
		str += '<tbody>';

		let postData = {
			action: "data4getStudentNumberForApplicantion",
			degreeCode: dataRep["selectedDegreeName"],
			achedamicYear: dataRep["achedamicYear"],
			authcode: authcode,
			username: dataRep['userId'],
		};

		// console.log(postData);
		let ajaxResponse = await new Promise((resolve, reject) => {
			$.ajax({
				type: 'POST',
				url: 'rules/applicant.php',
				data: postData,
				dataType: 'json',
				success: function (response5) {
					// console.log(response5)
					resolve(response5); // Resolve the Promise on success
				},
				error: function (error) {
					reject(error); // Reject the Promise on error
				}
			});
		});



		ajaxResponse.forEach((response, index) => {
			if (response && response.applicationNo) {
				str += '<tr>';
				str += '<td>' + rwcnt + '</td>';

				j = i;
				let name = "";
				let address = "";
				let mobile = "";
				let email = "";
				name += ' <td  name="studentName' + inum + '" id="studentName' + inum + '" >' + response.studentName + '</td>';

				address += ' <td  name="studentPermanentAddress' + inum + '" id="studentPermanentAddress' + inum + '" >' + response.studentPermanentAddress + '</td>';

				mobile += ' <td  name="studentContactMobile' + inum + '" id="studentContactMobile' + inum + '" >' + '<span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + response.studentContactMobile.replace(/\s/g, '') + '"])>' + response.studentContactMobile + '</span></td>';

				email += ' <td  name="studentContactEmail' + inum + '" id="studentContactEmail' + inum + '" >' + '<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + response.studentContactEmail + '" target="_blank"> ' + response.studentContactEmail + '</td></td>';

				if (name == "") {
					str += ' <td></td>';
				} else {
					str += name;
				}

				str += '<td>' + response.studentNo + '</td>';
				str += '<td>' + response.applicationNo + '</td>';
				
				str += '<td>' + response.studentNIC + '</td>';
				if (address == "") {
					str += ' <td></td>';
				} else {
					str += address;
				}

				if (mobile == "") {
					str += ' <td></td>';
				} else {
					str += mobile;
				}

				if (email == "") {
					str += ' <td></td>';
				} else {
					str += email;
				}
				str += '</tr>';
				inum++;
				rwcnt++;

			}
		});


		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		var newStr = str;


		for (i = 0; i < documentIDLength; i++) {

			if (documentIDArr[dataRep["selectedDocName"] - 1] == documentIDArr[i]) {
				docID = documentIDArr[i];
			}

		}

		for (var q = 0; q <= dataItemIDLength; q++) {

			if (docID == documentItemIDArr[q]) {
				if (dataItemNameArr[q] != null) {
					if (dataItemNameArr[q] == "Programm Title") {
						dataRep["programTitle"] = document.getElementById('selectedDegreeName').value;
						newStr += "<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='programTitle'  id='programTitle' value= '" + dataRep["programTitle"] + "-" + dataItemIDArr[q] + "' onchange='dataRep[this.name]=this.value'" + keyDisabled + "></div>";

					}
					if (dataItemNameArr[q] == "Achedamic Year") {
						newStr += "<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='achedamicYear'  id='achedamicYear1' value= '" + dataRep["programYear"] + "-" + dataItemIDArr[q] + "' onchange='dataRep[this.name]=this.value'" + keyDisabled + "></div>";

					}

				}
			}
		}
		selectprintlist2();
		document.getElementById('list').innerHTML = newStr;
		DataTableForInterviewApplicationListTable();
		// document.getElementById("View-List").disabled = true;
	}

}


//---------------------------------------VIEW LIST FUNCTION END--------------------------------------------------------------	

//---------------------------------------ADD ROW COLOUR FUNCTION START--------------------------------------------------------------	

function AddRowColorLdocument(n, _this) {
	if (checkcount == 1) {
		checkcount = 0;

		n.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';
	}
	else {
		checkcount++;
		n.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
	}

}
//---------------------------------------ADD ROW COLOUR FUNCTION END--------------------------------------------------------------	

//---------------------------------------SELECT ALL FUNCTION START--------------------------------------------------------------	

function Select1() {
	for (i = 0; i < applicationNoLength; i++) {
		var checkBoxDivIdRegistered = 'checkRegistered' + i;
		if (document.getElementById('checkRegistered' + i)) {
			document.getElementById('checkRegistered' + i).checked = true;
			document.getElementById("select-all").disabled = true;
			document.getElementById("select-non").disabled = false;
			var namid = "stdlist";
			namid += i;
			if (checkcount == 1) {
				checkcount = 0;
				//document.getElementById(namid).style.backgroundColor =  '#d0d0fb' ;

			}
			else {
				checkcount++;
				//document.getElementById(namid).style.backgroundColor = '#e7e7fd';

			}

		}
	}
}
//---------------------------------------SELECT ALL FUNCTION END--------------------------------------------------------------	

//---------------------------------------UNSELECT ALL FUNCTION START--------------------------------------------------------------	

function Unselect1() {
	for (i = 0; i < applicationNoLength; i++) {
		var checkBoxDivIdRegistered = 'checkRegistered' + i;
		if (document.getElementById(checkBoxDivIdRegistered)) {
			document.getElementById(checkBoxDivIdRegistered).checked = false;
			document.getElementById("select-all").disabled = false;
			document.getElementById("select-non").disabled = true;
			var idnam = "stdlist";
			idnam += i;
			if (checkcount == 1) {
				checkcount = 0;
				//document.getElementById(idnam).style.backgroundColor =  '#FDFDFD' ;

			}
			else {
				checkcount++;
				//document.getElementById(idnam).style.backgroundColor = '#FDFDFD';

			}

		}
	}

}
//---------------------------------------UNSELECT ALL FUNCTION END--------------------------------------------------------------	

//---------------------------------------ADD LIST FUNCTION START--------------------------------------------------------------	

function formAddListDocumentsendForm(frm) {

	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please get the proper list of data before save!");
	// }
	// else {
	var doc, dataStr, itemID1, itemID2, tempid1, tempid2, docid, dataid, x, y;


	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}


	if (frm == 'addListDocumentData') {

		doc = document.maintainListDocument;

		dataStr += "&interface=" + frm;



		for (var y = 0; y <= sessionIDLength; y++) {
			if (sessionuserNameArr[y] == dataRep["userName"]) {
				dataRep["sessionID"] = sessionIDArr[y];

			}
		}
		var row = inum + 3;
		for (var i = 0; i < 2; i++) {
			itemID1 = document.getElementById('programTitle').value;
			x = itemID1.split("-", 2);

			itemID2 = document.getElementById('achedamicYear1').value;
			y = itemID2.split("-", 2);

			for (var n = 0; n < documentIDLength; n++) {
				if (docmentIDArr[n] == docID) {
					if (sequenceNoArr[n] == null) {
						sqnum;
					}
					else {

						sqnum = sequenceNoArr[n];
						sqnum++;
					}
				}
			}

			if (i == 0) {

				dataStr += "&docmentID=" + docID
				dataStr += "&dataItemID=" + (x[x.length - 1]);
				dataStr += "&sessionID=" + dataRep["sessionID"];
				dataStr += "&sequenceNo=" + sqnum;
				dataStr += "&itemValue=" + document.getElementById('selectedDegreeName').value;
			}
			else {

				dataStr += "&docmentID=" + docID
				dataStr += "&dataItemID=" + (y[y.length - 1]);
				dataStr += "&sessionID=" + dataRep["sessionID"];
				dataStr += "&sequenceNo=" + sqnum;
				dataStr += "&itemValue=" + document.getElementById('achedamicYear').value;
			}
			documentDataArr[i] = dataStr;
		}
		for (var j = 0; j < 2; j++) {
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", documentDataArr[j]);

		}

	}

	return 0;
	// }
}
//---------------------------------------ADD LIST FUNCTION END--------------------------------------------------------------	

//---------------------------------------ADD LIST DOCUMENT FUNCTION START--------------------------------------------------------------	

function formAddApplicationListDocumentsendForm(frm) {

	var doc, dataStr, itemID1, itemID2, dataStr3, tempid1, tempid2, docid, dataid, x, y;


	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}


	if (frm == 'addListNumDocumentData') {

		doc = document.maintainListDocument;

		dataStr += "&interface=" + frm;



		for (var y = 0; y <= sessionIDLength; y++) {

			if (sessionuserNameArr[y] == dataRep["userName"]) {
				dataRep["sessionID"] = sessionIDArr[y];

			}
		}

		for (var i = 0; i < inum; i++) {

			tempid1 = dataRep["docName"];

			docid = tempid1.split("-", 2);

			sqnum++;

			for (var q = 0; q <= dataItemIDLength; q++) {
				if (docID == documentItemIDArr[q]) {

					if (dataItemNameArr[q] != null) {

						dataStr += "&docmentID=" + docID
						dataStr += "&dataItemID=" + dataItemIDArr[q];
						dataStr += "&sessionID=" + dataRep["sessionID"];
						dataStr += "&sequenceNo=" + sqnum;
						if (dataItemNameArr[q] == "Application No") {
							if (AppNoArr[i] != "undefined") {
								dataStr += "&itemValue=" + AppNoArr[i];
							}
						}
						documentDataArr[i] = dataStr;

					}
				}
			}


		}
		for (var j = 0; j < inum; j++) {
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", documentDataArr[j]);

		}

	}

	return 0;

}
//---------------------------------------ADD LIST DOCUMENT FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT LIST FUNCTION START--------------------------------------------------------------	

function getListPrint1() {
	var gtDiv = "";
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please get the proper list of data before print the list");
	// }
	// else {
	// if (document.getElementById('selectedDocName').value == "Application List") {
	gtDiv += '<div style="width:100%;height:70px;">';
	gtDiv += "<div style='float:left;width:10%;'>";
	gtDiv += "<img src='img/logo.gif' style='width:80px;height:80px;'/>";
	gtDiv += "</div>";
	gtDiv += "<div style='float:left;width:90%;'>";
	gtDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">FACULTY OF GRADUATE STUDIES - UNIVERSITY OF KELANIYA</h3></div>';
	gtDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-20px; ">Application List -' + document.getElementById('achedamicYear').value + '</h3></div>';
	gtDiv += "</div>";
	gtDiv += "<div id='topics1' class='info'></div>";
	gtDiv += "<div class='investLabel_l' style='width:200px'><h2 style='margin-top:-20px;float:left;text-align:center;'>Application No</h2></div>";
	gtDiv += "<div class='investLabel_l' style='width:240px'><h2 style='margin-top:-20px;'>Applicant Name</h2></div>";
	gtDiv += "<div class='investLabel' style='width:240px'><h2 style='margin-top:-20px;'>Qualification</h2></div>";

	for (i = 0; i < applicationNoLength; i++) {

		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & selectedArr[i] == "YES" & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
				if (document.getElementById('checkRegistered' + i)) {
					if (document.getElementById('checkRegistered' + i).checked == true) {
						gtDiv += "<br><div>";
						gtDiv += "<br><div  class='investView_l' style='float:left;width:100px' name='applicationNo" + inum + "' id='applicationNo" + inum + "' onchange='dataRep[this.name]=this.value;'>";
						gtDiv += applicationNoArr[i] + "</div>";

						gtDiv += "<div class='investView_l' style='float:left;width:400px' name='studentName" + inum + "' id='studentName" + inum + "' onchange='dataRep[this.name]=this.value;'>";
						gtDiv += studentInitialArr[i] + "</div>";
						gtDiv += "<div class='investView' name='qualification" + inum + "' id='qualification" + inum + "'";
						gtDiv += " onchange='dataRep[this.name]=this.value;'>" + fieldNameArr[i] + '-' + fieldValueArr[i] + "</div>";
						gtDiv += "</div><dev><br>";
					}
				}
			}
		}
	}
	// }

	// if (document.getElementById('selectedDocName').value == "Registered List") {

	// 	gtDiv += '<div style="width:100%;height:70px;">';
	// 	gtDiv += "<div style='float:left;width:10%;'>";
	// 	gtDiv += "<img src='img/logo.gif' style='width:80px;height:80px;'/>";
	// 	gtDiv += "</div>";
	// 	gtDiv += "<div style='float:left;width:90%;'>";
	// 	gtDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">FACULTY OF GRADUATE STUDIES - UNIVERSITY OF KELANIYA</h3></div>';
	// 	gtDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-20px; ">' + document.getElementById('selectedDocName').value + '-' + document.getElementById('achedamicYear').value + '</h3></div>';
	// 	gtDiv += "</div>";
	// 	gtDiv += "<div id='topics1' class='info'></div>";
	// 	gtDiv += "<div class='investLabel_l' style='width:160px'><h2 style='margin-top:-10px;float:left;text-align:center;'>Student No</h2></div>";
	// 	gtDiv += "<div class='investLabel_l' style='width:260px'><h2 style='margin-top:-10px;'>Applicant Name</h2></div>";
	// 	gtDiv += "<div class='investLabel' style='width:260px'><h2 style='margin-top:-10px;'>Qualification</h2></div>";

	// 	for (i = 0; i < studentNoLength; i++) {
	// 		if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {
	// 			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & registeredArr[i] == "YES" & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
	// 				gtDiv += "<br><div>";
	// 				gtDiv += "<br><div  class='investView_l' style='float:left;width:100px' name='applicationNo" + inum + "' id='applicationNo" + inum + "' onchange='dataRep[this.name]=this.value;'>";
	// 				gtDiv += studentNoArr[i] + "</div>";
	// 				gtDiv += "<div class='investView_l' style='float:left;width:400px' name='studentName" + inum + "' id='studentName" + inum + "' onchange='dataRep[this.name]=this.value;'>";
	// 				gtDiv += studentInitialArr[i] + "</div>";
	// 				gtDiv += "<div class='investView' name='qualification" + inum + "' id='qualification" + inum + "'";
	// 				gtDiv += " onchange='dataRep[this.name]=this.value;'>" + fieldNameArr[i] + '-' + fieldValueArr[i] + "</div>";
	// 				gtDiv += "</div><dev><br>";
	// 			}
	// 		}
	// 	}
	// }
	gtDiv += "<div></dev>";
	gtDiv += "<div id='List' style='margin-top:10px 10px;width:100%;clear:both'></div>";
	gtDiv += "<br><div style='clear:both;margin-top:30px'> Registrar/Coordinator:.............................. 			Date:........................ </div>";

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
	// }
}
//---------------------------------------PRINT LIST FUNCTION END--------------------------------------------------------------	

//---------------------------------------RESET ALL FUNCTION START--------------------------------------------------------------	

function ResetAll() {
	rwcnt = 1;
	dataItemIDLength = 0;
	documentIDLength = 0;
	inum = 0;
	testNum = 0;
	decisionMakingPointIDLength = 0;
	documentIDLength = 0;
	sessionIDLength = 0;
}
//---------------------------------------RESET ALL FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT ENGLISH LETTERS FUNCTION START--------------------------------------------------------------	

function printLetters() {

	var gtDiv = "";
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please get the proper list of data before print the list");
	// }
	// else {
	// if (document.getElementById('selectedDocName').value == "Application List") {

	for (i = 0; i < applicationNoLength; i++) {

		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
			if ((document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & selectedArr[i] == "YES") & (document.getElementById('achedamicYear').value == achedamicYearArr[i] & degreeMediumArr[i] == "en")) {
				if (document.getElementById('checkRegistered' + i)) {
					if (document.getElementById('checkRegistered' + i).checked == true) {
						gtDiv += "<div style='width:700; height:1120'>";
						gtDiv += '<fieldset class="field" style="border:0px">';//<legend style="font-weight:bolder;color:#FFF"></legend>';
						gtDiv += '<div style="width:100%;height:70px;">';
						gtDiv += "<div style='float:left;width:10%;'>";
						gtDiv += '<table width="690" border="0" cellpadding="0" align="center" style="margin-top:-10px">';
						gtDiv += '<tr>';
						gtDiv += "<td width='101'><img src='img/logo.gif' align='right' style='width:90px;height:90px;'/></td>";
						gtDiv += "<td width='472'><img src='img/nm.png' style='width:472px;height:100px;'/></td>";
						gtDiv += "<td width='101'><img src='img/fgs.jpg' align='right' style='width:80px;height:90px;'/></td>";
						gtDiv += '</tr>';
						gtDiv += '</table>';
						gtDiv += "</div></div>";
						gtDiv += "<div style='float:left;width:90%;'>";
						gtDiv += "</div>";
						gtDiv += '<div style="width:100%;height:0%;float:left;text-align:left;"><h4 style="margin-top:-20px;margin-bottom:5px">__________________________________________________________________________________________</h4></div>';
						gtDiv += '<div style="width:100%;height:0%;float:left;text-align:left;"><h4 style="margin-top:-5px;margin-bottom:5px"><span style="float:left;">Our Ref. No:&nbsp;&nbsp;' + dataRep['userName'] + '&nbsp;&nbsp;</span> 										<span style="float:right;">&nbsp;&nbsp;Temporary. No:&nbsp;&nbsp;' + applicationNoArr[i] + '</span></h4></div>';
						gtDiv += "<br><div style='float:left;width:270px;text-align:left' name='applicationNo' id='applicationNo' onchange='dataRep[this.name]=this.value;'>";
						var dd = new Date();
						var d = dd.getUTCDate();
						var m = dd.getUTCMonth();
						var y = dd.getUTCFullYear();
						var mn = m + 1;
						var datelbl = d + "/" + mn + "/" + y;

						gtDiv += studentPersonalTitleArr[i] + '. ' + studentInitialArr[i] + "<div>";
						gtDiv += studentPermanentAddressArr[i] + "</div></div><br>";
						gtDiv += "<br><div style='clear:both;margin-top:30px;text-align:left'><style='margin-top:10px;'>" + datelbl + "</div>";
						gtDiv += "<br><div style='clear:both;margin-top:10px;text-align:left'><h4 style='margin-top:-10px;'>Dear Applicant,</h4></div>";

						var acYear = document.getElementById('achedamicYear').value;
						acYear++;
						gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-10px; ">Admission for ' + document.getElementById('selectedDegreeName').value + '-' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						gtDiv += "<div style='clear:both;text-align:left;'>This refers to your application submitted for the above programme and the interview held thereafter.</div><br/>";

						var yname1 = document.getElementById('selectedDegreeName').value;
						var xx1 = yname1.split(" ", 2);
						var degname1 = xx1[0];
						var tname1, duration1;

						if (degname1 == "MA") {
							gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:-10px;text-align:justify;">I am pleased to inform you that you have been selected to follow the ' + document.getElementById('selectedDegreeName').value + '-' + document.getElementById('achedamicYear').value + '/' + acYear + ' programme conducted by the ' + departmentTitleArr[i] + ' of this University subject to confirmation of the senate. The duration of this course is one year. However you can complete this course within a period of three years, upon receiving the prior approval from the university. Accordingly, you are required to register yourself for the programme at the Faculty of Graduate Studies (FGS) and, pay the following fees (being payment of the first installment) on or before 06th November 2015.</div>';
							gtDiv += '<table width="700" height="211" border="0" cellpadding="0" align="center" style="margin-top:100px">';
							gtDiv += '<tr>';
							gtDiv += '<td width="283"><table width="304" height="234" border="1" cellpadding="0">';
							gtDiv += '<tr>';
							gtDiv += '<td colspan="2" style="text-align: center"><strong>One time payment</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td style="text-align: center"><strong>Payment Item</strong></td>';
							gtDiv += '<td style="text-align: center"><strong> Fee</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td width="198">Registration fee</td>';
							gtDiv += '<td width="100">Rs.    1,500.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Course fee</td>';
							gtDiv += '<td>Rs.  69,500.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Library fee (Non  refundable)</td>';
							gtDiv += '<td>Rs.    2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Library fee (refundable) </td>';
							gtDiv += '<td>Rs.    5,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Examination  fee</td>';
							gtDiv += '<td>Rs.    2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td><strong>Total</strong></td>';
							gtDiv += '<td><strong>Rs.   80,000.00</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '</table></td>';
							gtDiv += '<td width="10">&nbsp;</td>';
							gtDiv += '<td width="350"><table width="379" height="234" border="1" cellpadding="0">';
							gtDiv += '<tr>';
							gtDiv += '<td colspan="3" style="text-align: center"><strong>Installments</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td style="text-align: center"><strong><span style="text-align: center">Instalment</span></strong></td>';
							gtDiv += '<td style="text-align: center"><strong><span style="text-align: center">Instalment value</span></strong></td>';
							gtDiv += '<td style="text-align: center"><strong> payment due date</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td width="150">First Installment</td>';
							gtDiv += '<td width="150" style="font-style: normal">Rs. 30,000/= (course  fee Rs. 25,000/= and refundable library deposit Rs. 5000/=)</td>';
							gtDiv += '<td width="58" style="font-style: normal">06.11.2015 </td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Second installment</td>';
							gtDiv += '<td style="font-style: normal">Rs.  30,000.00</td>';
							gtDiv += '<td style="font-style: normal">30.04.2016</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Third Installment</td>';
							gtDiv += '<td style="font-style: normal">Rs.  20,000.00</td>';
							gtDiv += '<td style="font-style: normal">31.07.2016</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td><strong>Total</strong></td>';
							gtDiv += '<td style="font-style: normal"><strong>Rs.   80,000.00</strong></td>';
							gtDiv += '<td style="font-style: normal">&nbsp;</td>';
							gtDiv += '</tr>';
							gtDiv += '</table></td>';
							gtDiv += '</tr>';
							gtDiv += '</table>';

							tname1 = "one ";
							duration1 = 03;
						}

						if (degname1 == "MSSc") {
							gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:-10px;text-align:justify;">I am pleased to inform you that you have been selected to follow the ' + document.getElementById('selectedDegreeName').value + '-' + document.getElementById('achedamicYear').value + '/' + acYear + ' programme conducted by the ' + departmentTitleArr[i] + ' of this University subject to confirmation of the senate. The duration of this Course is two years. However you can complete this course within a period of four years, upon receiving the prior approval. Accordingly, you are required to register yourself for the programme at the Faculty of Graduate Studies (FGS) and, pay the following fees (being payment of the first installment) on or before 31st October 2015.</div>';
							gtDiv += '<table width="700" height="211" border="0" cellpadding="0" align="center" style="margin-top:100px">';
							gtDiv += '<tr>';
							gtDiv += '<td width="283"><table width="304" height="234" border="1" cellpadding="0">';
							gtDiv += '<tr>';
							gtDiv += '<td colspan="2" style="text-align: center"><strong>One time payment</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td style="text-align: center"><strong>Payment Item</strong></td>';
							gtDiv += '<td style="text-align: center"><strong> Fee</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td width="198">Registration fee</td>';
							gtDiv += '<td width="100">Rs.    2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Course fee</td>';
							gtDiv += '<td>Rs.  84,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Library fee (Non  refundable)</td>';
							gtDiv += '<td>Rs.    2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Library fee (refundable) </td>';
							gtDiv += '<td>Rs.    5,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Examination  fee</td>';
							gtDiv += '<td>Rs.    2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td><strong>Total</strong></td>';
							gtDiv += '<td><strong>Rs.   95,000.00</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '</table></td>';
							gtDiv += '<td width="10">&nbsp;</td>';
							gtDiv += '<td width="350"><table width="379" height="234" border="1" cellpadding="0">';
							gtDiv += '<tr>';
							gtDiv += '<td colspan="3" style="text-align: center"><strong>Instalments</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td style="text-align: center"><strong><span style="text-align: center">Instalment</span></strong></td>';
							gtDiv += '<td style="text-align: center"><strong><span style="text-align: center">Instalment value</span></strong></td>';
							gtDiv += '<td style="text-align: center"><strong> payment due date</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td width="150">First Installment</td>';
							gtDiv += '<td width="150" style="font-style: normal">Rs. 30,000/= (course  fee Rs. 25,000/= and refundable library deposit Rs. 5000/=)</td>';
							gtDiv += '<td width="58" style="font-style: normal">2015/10/31</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Second installment</td>';
							gtDiv += '<td style="font-style: normal">Rs.  30,000.00</td>';
							gtDiv += '<td style="font-style: normal">2016/01/30</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Third Installment</td>';
							gtDiv += '<td style="font-style: normal">Rs.  20,000.00</td>';
							gtDiv += '<td style="font-style: normal">2016/04/30</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>Fourth Installment</td>';
							gtDiv += '<td style="font-style: normal">Rs.  15,000.00</td>';
							gtDiv += '<td style="font-style: normal">2016/07/31</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td><strong>Total</strong></td>';
							gtDiv += '<td style="font-style: normal"><strong>Rs.   95,000.00</strong></td>';
							gtDiv += '<td style="font-style: normal">&nbsp;</td>';
							gtDiv += '</tr>';
							gtDiv += '</table></td>';
							gtDiv += '</tr>';
							gtDiv += '</table>';
							tname1 = "two ";
							duration1 = 04;
						}

						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:5px;text-align:justify;">Those who fail to make the payments on or before 06.11.2015  will not be registered for any reason. In the case of paying course fee by your employer or any other institution all the payments should be received to the FGS as per the due dates indicated above. If it is being late, it is the responsibility of the student to make the payments and to request for a reimbursement later.</div>';
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:-10px;text-align:justify;"><h4>Note :- Please note that the payment of library deposit (Rs. 5000/=) should be paid in the relevant voucher which is annexed herewith.</h4> </div>';
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:-15px;text-align:justify;">You may remit these fees to the credit of University of Kelaniya Account No: 055100130667553 of the People(s) Bank, Kelaniya branch by using paying-in-vouchers (PIV) enclosed herewith. Please send the first copy of the PIV certified by the Bank, to the Faculty of Graduate Studies. Further, certified copies of certificates in support of your educational qualifications and professional qualification etc. (if any), birth certificate, national identity card and two copy of photograph (2cm x 2½cm in size) should be sent to this office along with the paying-in-voucher. Please collect your student ID in the course.</div>';
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:5px;text-align:justify;">The inauguration ceremony of this programme will be held on saturday,14th November 2015 at 9.00 am at the Sri Dharmaloka hall. I cordially invite you to participate to this event.</div>';
						gtDiv += '<div style="width:100%;height:20%;float:left;margin-top:5px;margin-bottom:25px;text-align:left;">Yours faithfully,</div>';
						gtDiv += "<br><div style='width:50%;height:5%;margin-top:1px;text-align:left'>Senior Assistant Registrar</div>";
						gtDiv += "<br><div style='width:50%;height:5%;margin-top:-18px;text-align:left'>Faculty of Graduate Studies.</div>";
						gtDiv += '<div style="width:100%;height:5%;float:left;margin-top:-10px;text-align:left;">__________________________________________________________________________________________</div>';
						gtDiv += '<div style="width:100%;height:5%;float:center;margin-top:1px;margin-bottom:5px;text-align:center;">Tel: Dean : 011-2986124	&nbsp;&nbsp;  |&nbsp;&nbsp; Senior Assistant Registrar : 011-2903951    &nbsp;&nbsp;   |&nbsp;&nbsp; Office : 011-2903952/3</div><br>';
						gtDiv += "</fieldset></div>";
					}
				}
			}
		}
	}
	// }

	var reportWindow = window.open();
	reportWindow.document.write(gtDiv);
	reportWindow.print();
	reportWindow.document.close();



	// }
}
//---------------------------------------PRINT ENGLISH LETTERS FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT SINHALA LETTERS FUNCTION START--------------------------------------------------------------	

function printLettersSinhala() {

	var gtDiv = "";
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please get the proper list of data before print the list");
	// }
	// else {
	// if (document.getElementById('selectedDocName').value == "Application List") {

	for (i = 0; i < applicationNoLength; i++) {

		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
			if ((document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & selectedArr[i] == "YES") & (document.getElementById('achedamicYear').value == achedamicYearArr[i] & degreeMediumArr[i] == "si")) {
				if (document.getElementById('checkRegistered' + i)) {
					if (document.getElementById('checkRegistered' + i).checked == true) {
						gtDiv += "<div style='width:700; height:1140'>";
						gtDiv += '<fieldset class="field" style="border:0px">';//<legend style="font-weight:bolder;color:#FFF"></legend>';

						gtDiv += '<div style="width:107%;height:100px;">';
						gtDiv += "<div style='float:left;width:10%;'>";

						gtDiv += '<table width="690" border="0" cellpadding="0" align="center" style="margin-top:-10px">';
						gtDiv += '<tr>';
						gtDiv += "<td width='101'><img src='img/logo.gif' align='right' style='width:90px;height:90px;'/></td>";
						gtDiv += "<td width='472'><img src='img/nm.png' style='width:472px;height:100px;'/></td>";
						gtDiv += "<td width='101'><img src='img/fgs.jpg' align='right' style='width:80px;height:90px;'/></td>";
						gtDiv += '</tr>';
						gtDiv += '</table>';
						gtDiv += "</div></div>";
						gtDiv += "<div style='float:left;width:90%;'>";
						gtDiv += "</div>";

						gtDiv += '<div style="width:100%;height:0%;float:left;text-align:left;"><h4 style="margin-top:-20px;margin-bottom:5px">__________________________________________________________________________________________</h4></div>';
						gtDiv += '<div style="width:100%;height:0%;float:left;text-align:left;"><h4 style="margin-top:-5px;margin-bottom:5px"><span style="float:left;"> Our Ref. No:&nbsp;&nbsp;' + dataRep['userName'] + '&nbsp;&nbsp;</span>							<span style="float:right;">&nbsp;&nbsp;Temporary. No:&nbsp;&nbsp;' + applicationNoArr[i] + '</span></h4></div>';
						gtDiv += "<br><div style='float:left;width:270px;text-align:left' name='applicationNo' id='applicationNo' onchange='dataRep[this.name]=this.value;'>";
						var dd = new Date();
						var d = dd.getUTCDate();
						var m = dd.getUTCMonth();
						var y = dd.getUTCFullYear();
						var mn = m + 1;
						var datelbl = d + "/" + mn + "/" + y;

						gtDiv += studentPersonalTitleArr[i] + '. ' + studentInitialArr[i] + "<div>";
						gtDiv += studentPermanentAddressArr[i] + "</div></div><br>";
						gtDiv += "<br><div style='clear:both;margin-top:30px;text-align:left;margin-top:10px;'>" + datelbl + "</div>";
						var acYear = document.getElementById('achedamicYear').value;
						acYear++;

						var xname = degreeCodeArr[i];
						var pname;

						if (xname == "MAHIST") {
							pname = "ඉතිහාසය";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px;margin-bottom:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MAARCH") {
							pname = "පුරාවිද්‍යාව";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MAGEOG") {
							pname = "භුගෝල විද්‍යාව";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MAECON") {
							pname = "ආර්ථීක විද්‍යාව ";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MASOCI") {
							pname = "සමාජ විද්‍යාව";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MALISC") {
							pname = "පුස්තකාල හා විඥාපන විද්‍යාව ";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MAPHIL") {
							pname = "දර්ශනය";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MAPOLS") {
							pname = "දේශපාලන විද්‍යාව";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MAMACO") {
							pname = "ජනසන්නිවේදනය";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">ශාස්ත්‍රපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MSSCHIST") {
							pname = "ඉතිහාසය";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MSSCARCH") {
							pname = "පුරාවිද්‍යාව";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MSSCGEOG") {
							pname = "භුගෝල විද්‍යාව";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MSSCECON") {
							pname = "ආර්ථීක විද්‍යාව ";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MSSCSOCI") {
							pname = "සමාජ විද්‍යාව";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MSSCLISC") {
							pname = "පුස්තකාල හා විඥාපන විද්‍යාව ";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MSSCPHIL") {
							pname = "දර්ශනය";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MSSCPOLS") {
							pname = "දේශපාලන විද්‍යාව";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						if (xname == "MSSCMACO") {
							pname = "ජනසන්නිවේදනය";
							gtDiv += '<div style="width:100%;height:10%;float:left;text-align:center;"><h3 style="margin-top:-3px; ">සාමාජීය විද්‍යාපති උපාධි පාඨමාලාව  (' + pname + ') - ' + document.getElementById('achedamicYear').value + '/' + acYear + '</h3></div>';
						}
						gtDiv += "<div style='clear:both;text-align:left;margin-top:-30px'>ඉහත පාඨමාලාව සඳහා ඔබ විසින් ඉදිරිපත් කරන ලද අයදුම්පත හා අනතුරුව පැවති සම්මුඛ පරීක්ෂණය හා බැඳේ.</div><br/>";
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:-12px;text-align:justify;">01.	ඒ අනුව පූර්වෝක්ත පාඨමාලාව හැදෑරීම සඳහා සමාජීය විද්‍යා පීඨ අධ්‍යයන මණ්ඩලය විසින් සනාතන සභාවේ අනුමැතියට යටත්ව ඔබ තෝරාගෙන ඇති බව සතුටින් දන්වමි. <div>';
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:10px;text-align:justify;">02.	පාඨමාලාව සඳහා ලියාපදිංචි කිරීම පිණිස ඔබ විසින් ගෙවිය යුතු පහත සඳහන් ගාස්තු, මේ සමඟ එවා ඇති ගෙවීම් වවුචර්පත් මඟින් ඕනෑම මහජන බැංකු ශාඛාවකට ගෙවා බැංකුවෙන් සහතික කරන ලද වවුචර්වල මුල් පිටපත් (ගාස්තු හා පුස්තකාල තැන්පත්) 2015.11.06  දින හෝ එදිනට ප්‍රථම මෙම පීඨය වෙත එවීමට කටයුතු කරන මෙන්  දන්වමි.<div>';

						var yname = document.getElementById('selectedDegreeName').value;
						var xx = yname.split(" ", 2);
						var degname = xx[0];
						var tname, duration;

						if (degname == "MA") {

							gtDiv += '<div >';
							gtDiv += '<table width="700" height="211" border="0" cellpadding="0" align="center" style="margin-top:10px">';
							gtDiv += '<tr>';
							gtDiv += '<td width="283"><table width="304" height="234" border="1" cellpadding="0">';
							gtDiv += '<tr>';
							gtDiv += '<td colspan="2" style="text-align: center"><strong>එක්වර ගෙවන්නේ නම් </strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td style="text-align: center"><strong>ගාස්තුව</strong></td>';
							gtDiv += '<td style="text-align: center"><strong>මුදල (රු)</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td width="198">ලියාපදිංචි ගාස්තු</td>';
							gtDiv += '<td width="100">රු.      &nbsp;&nbsp;&nbsp;&nbsp;1,500.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>පාඨමාලා ගාස්තු</td>';
							gtDiv += '<td>රු.             &nbsp;69,500.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>පුස්තකාල ගාස්තු (ආපසු නොගෙවන)</td>';
							gtDiv += '<td>රු.       2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>පුස්තකාල තැන්පත් (ආපසු ගෙවන) </td>';
							gtDiv += '<td>රු.       5,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>විභාග ගාස්තු</td>';
							gtDiv += '<td>රු.       2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td><strong>ගෙවිය යුතු මුළු මුදල</strong></td>';
							gtDiv += '<td><strong>රු.        &nbsp;80,000.00</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '</table></td>';
							gtDiv += '<td width="10">&nbsp;</td>';
							gtDiv += '<td width="350"><table width="379" height="234" border="1" cellpadding="0">';
							gtDiv += '<tr>';
							gtDiv += '<td colspan="3" style="text-align: center"><strong>වාරික වශයෙන් ගෙවන්නේ නම්  </strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td style="text-align: center"><strong><span style="text-align: center">වාරික </span></strong></td>';
							gtDiv += '<td style="text-align: center"><strong><span style="text-align: center">වාරික මුදල (රු.)</span></strong></td>';
							gtDiv += '<td style="text-align: center"><strong> ගෙවිය යුතු දින</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td width="150">පළමු වාරිකය</td>';
							gtDiv += '<td width="150" style="font-style: normal">රු.  30,000 (පාඨමාලා ගාස්තු රු.25,000.00 ක්  හා පුස්තකාල තැන්පතුව රු.5,000.00)</td>';
							gtDiv += '<td width="58" style="font-style: normal">06.11.2015 </td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>දෙවන වාරිකය </td>';
							gtDiv += '<td style="font-style: normal">රු.    &nbsp;30,000.00</td>';
							gtDiv += '<td style="font-style: normal">30.04.2016</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>තෙවන වාරිකය </td>';
							gtDiv += '<td style="font-style: normal">රු.   &nbsp;20,000.00</td>';
							gtDiv += '<td style="font-style: normal">31.07.2016</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td><strong>එකතුව </strong></td>';
							gtDiv += '<td style="font-style: normal"><strong>රු.    &nbsp;&nbsp;80,000.00</strong></td>';
							gtDiv += '<td style="font-style: normal">&nbsp;</td>';
							gtDiv += '</tr>';
							gtDiv += '</table></td>';
							gtDiv += '</tr>';
							gtDiv += '</table>';

							gtDiv += '</div>';

							tname = "එක් ";
							duration = 03;
						}
						if (degname == "MSSc") {

							gtDiv += '<div >';

							gtDiv += '<table width="700" height="211" border="0" cellpadding="0" align="center" style="margin-top:10px">';
							gtDiv += '<tr>';
							gtDiv += '<td width="283"><table width="304" height="252" border="1" cellpadding="0">';
							gtDiv += '<tr>';
							gtDiv += '<td colspan="2" style="text-align: center"><strong>එක්වර ගෙවන්නේ නම් </strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td style="text-align: center"><strong>ගාස්තුව</strong></td>';
							gtDiv += '<td style="text-align: center"><strong>මුදල (රු)</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td width="198">ලියාපදිංචි ගාස්තු</td>';
							gtDiv += '<td width="100">රු.      &nbsp;&nbsp;&nbsp;&nbsp;2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>පාඨමාලා ගාස්තු</td>';
							gtDiv += '<td>රු.             &nbsp;84,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>පුස්තකාල ගාස්තු (ආපසු නොගෙවන)</td>';
							gtDiv += '<td>රු.       2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>පුස්තකාල තැන්පත් (ආපසු ගෙවන) </td>';
							gtDiv += '<td>රු.       5,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>විභාග ගාස්තු</td>';
							gtDiv += '<td>රු.       2,000.00</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td><strong>ගෙවිය යුතු මුළු මුදල</strong></td>';
							gtDiv += '<td><strong>රු.        &nbsp;95,000.00</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '</table></td>';
							gtDiv += '<td width="10">&nbsp;</td>';
							gtDiv += '<td width="350"><table width="379" height="234" border="1" cellpadding="0">';
							gtDiv += '<tr>';
							gtDiv += '<td colspan="3" style="text-align: center"><strong>වාරික වශයෙන් ගෙවන්නේ නම්  </strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td style="text-align: center"><strong><span style="text-align: center">වාරික </span></strong></td>';
							gtDiv += '<td style="text-align: center"><strong><span style="text-align: center">වාරික මුදල (රු.)</span></strong></td>';
							gtDiv += '<td style="text-align: center"><strong> ගෙවිය යුතු දින</strong></td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td width="150">පළමු වාරිකය</td>';
							gtDiv += '<td width="150" style="font-style: normal">රු.  30,000 (පාඨමාලා ගාස්තු රු.25,000.00 ක්  හා පුස්තකාල තැන්පතුව රු.5,000.00)</td>';
							gtDiv += '<td width="58" style="font-style: normal">2015/10/31</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>දෙවන වාරිකය </td>';
							gtDiv += '<td style="font-style: normal">රු.    &nbsp;30,000.00</td>';
							gtDiv += '<td style="font-style: normal">2016/01/30</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>තෙවන වාරිකය </td>';
							gtDiv += '<td style="font-style: normal">රු.   &nbsp;20,000.00</td>';
							gtDiv += '<td style="font-style: normal">2016/04/30</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td>සිව්වන වාරිකය </td>';
							gtDiv += '<td style="font-style: normal">රු.   &nbsp;15,000.00</td>';
							gtDiv += '<td style="font-style: normal">2016/07/31</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							gtDiv += '<td><strong>එකතුව </strong></td>';
							gtDiv += '<td style="font-style: normal"><strong>රු.    &nbsp;&nbsp;95,000.00</strong></td>';
							gtDiv += '<td style="font-style: normal">&nbsp;</td>';
							gtDiv += '</tr>';
							gtDiv += '</table></td>';
							gtDiv += '</tr>';
							gtDiv += '</table>';

							gtDiv += '</div>';
							tname = "දෙ ";
							duration = 04;
						}
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:10px;text-align:justify;">වාරික වශයෙන් ගෙවන්නේ නම්  පළමු වාරිකය ඉහත සඳහන් දිනට (2015.11.06 ) හෝ එදිනට පෙර අනිවාර්යයෙන්ම ගෙවිය යුතු අතර එසේ නොගෙවන අපේක්ෂකයින් කිසිඳු හේතුවක් මත ඉන් පසුව ලියාපදිංචි නොකරන බව සැලකුව මැනවි. පාඨමාලා ගාස්තු වෙනත් ආයතන මහින් ගෙවනු ලබන අවස්ථාවකදී ද ඉහත දක්වා ඇති ආකාරයෙන් අදාළ දිනට ප්‍රථම මුදල් ගෙවිය යුතුය. ආයතනය මගින් ඊට අදාළ මුදල් විශ්වවිද්‍යාලය වෙත ගෙවීමට ප්‍රමාද වන්නේ නම් ශිෂ්‍යයා  විසින් එම මුදල් පෞද්ගලිකව ගෙවිය යුතු වේ.  </div>';
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:-15px;text-align:justify;"><h4>සැ.යු. : පුස්තකාල තැන්පතුව (රු. 5000.00) ගෙවීමේදී ඒ වෙනුවෙන් එවනු ලබන වවුචරය පමණක් භාවිත කළ යුතු අතර, එම මුදල ආපසු ලබා ගැනීමේදී එම වවුචරයේ නිල් පැහැති පිටපත ඉදිරිපත් කළ යුතු වේ. එසේ නොකළහොත් තැන්පතු මුදල ආපසු ගෙවීමට අපහසු බව කාරුණිකව සලකන්න.  </h4> </div>';
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:-10px;text-align:justify;">03.	ඔබගේ ශිෂ්‍ය හැඳුනුම්පත සඳහා මේ සමඟ අමුණා ඇති ආකෘති පත්‍රය සම්පූර්ණ කොට, අධ්‍යාපන හා උප්පැන්න සහතිකවල සහතික කළ පිටපත් සහ සෙ.මි 2  x සෙ.මි 2 1/2  ප්‍රමාණයේ ඡායාරූප 2 ක් ද ඉහත සඳහන් වවුචර් පිටපත සමඟ මෙම පීඨය වෙත එවීමට කටයුතු කරන්න.</div>';
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:5px;text-align:justify;">04.	ඔබගේ ලියාපදිංචි අංකය ඇතුළත් හැඳුනුම්පත පශ්චාත් උපාධි අධ්‍යයන පීඨය මඟින් යථාකාලයේ දී නිකුත් කිරීමට කටයුතු කරනු ඇත.</div>';

						if (degname == "MA") {
							gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:7px;text-align:justify;">05.	මෙම එක් අවුරුදු ශාස්ත්‍රපති උපාධි පාඨමාලාව සම්පූර්ණ කළ යුතු උපරිම කාල සීමාව, කාලය දීර්ඝ කිරීම් ද ඇතුළුව වසර 03 ක් පමණක් වන බව වැඩිදුරටත් දන්වමි.</div>';
							tname = "එක් ";
							duration = 03;
						}
						if (degname == "MSSc") {
							gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:7px;text-align:justify;">05.	මෙම  දෑ  අවුරුදු  සමාජීය විද්‍යාපති උපාධි පාඨමාලාව සම්පුර්ණ කළ යුතු උපරිම කාල සීමාව, කාලය දීර්ඝ කිරීම් ද ඇතුළුව වසර 04 ක් පමණක් වන බව  වැඩිදුරටත් දන්වමි.</div>';
							tname = "දෙ ";
							duration = 04;
						}
						gtDiv += '<div style="width:100%;height:60%;float:left;margin-top:7px;text-align:justify;">06.	මෙම පාඨමාලාවේ සමාරම්භක උත්සවය 2015.11.14 වන සෙනසුරාදා පෙ.ව. 9.00ට කැලණිය විශ්වවිද්‍යාලයේ ශ්‍රී ධර්මාලෝක ශාලාවේදී පැවැත්වෙන අතර ඒ සඳහා සහභාගි වන ලෙස මෙයින් දන්වමි.</div>';
						gtDiv += '<div style="width:100%;height:20%;float:left;margin-top:5px;margin-bottom:25px;text-align:left;">මෙයට ,</div>';
						gtDiv += "<br><div style='width:60%;height:1%;margin-top:-18px;text-align:left'>ජ්‍යෙෂ්ඨ  සහකාර ලේඛකාධිකාරී </div>";
						gtDiv += "<br><div style='width:60%;height:1%;margin-top:-21px;text-align:left'>ලේඛකාධිකාරී වෙනුවට.</div>";
						gtDiv += '<div style="width:100%;height:1%;float:left;margin-top:-12px;text-align:left;">__________________________________________________________________________________________</div>';
						gtDiv += '<div style="width:100%;height:1%;float:center;margin-top:0px;margin-bottom:5px;text-align:center;">Tel: පීඨාධිපති   : 011-2986124	  | ජ්‍යෙෂ්ඨ  සහකාර ලේඛකාධිකාරී : 011-2903951      | කාර්යාලය  : 011-2903952/3</div><br>';
						gtDiv += "</fieldset></div>";
					}
				}
			}
		}
	}
	// }

	var reportWindow = window.open();
	reportWindow.document.write(gtDiv);
	reportWindow.print();
	reportWindow.document.close();



	// }
}
//---------------------------------------PRINT SINHALA LETTERS FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT ENVILOP FUNCTION START--------------------------------------------------------------	

function printEnvilop() {

	var gtDiv = "";
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please get the proper list of data before print the list");
	// }
	// else {
	// 	if (document.getElementById('selectedDocName').value == "Application List") {

	for (i = 0; i < applicationNoLength; i++) {

		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

			if ((document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & selectedArr[i] == "YES") & (document.getElementById('achedamicYear').value == achedamicYearArr[i] & degreeMediumArr[i] == "si")) {


				gtDiv += '<page size="#10">';
				gtDiv += "<div style='width:648; height:288'>";
				gtDiv += '<fieldset class="field" style="border:0px">';//<legend style="font-weight:bolder;color:#FFF"></legend>';

				gtDiv += '<table width="649" height="282" border="0" cellpadding="0">';
				gtDiv += '<tr>';
				gtDiv += '<td>&nbsp;</td>';
				gtDiv += '<td><div align="right">';
				gtDiv += '<p>&nbsp;</p>';
				gtDiv += '<table width="350" border="0" cellpadding="0">';
				gtDiv += '<tr>';
				gtDiv += '<td>&nbsp;</td>';
				gtDiv += '<td colspan="2" width="240" style="text-align: left;font-size: 18px"><div align="left">' + studentPersonalTitleArr[i] + '. ' + studentInitialArr[i] + '</div></td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';
				gtDiv += '<td>&nbsp;</td>';
				gtDiv += '<td width="240" style="text-align: left;font-size: 18px">' + studentPermanentAddressArr[i] + '</td>';
				gtDiv += '</tr>';
				gtDiv += '</table>';
				gtDiv += '</div></td>';
				gtDiv += '</tr>';
				gtDiv += '</table><br>';



				gtDiv += "</fieldset></div></page>";
			}
		}
	}
	// }

	var reportWindow = window.open();
	reportWindow.document.write(gtDiv);
	reportWindow.print();
	reportWindow.document.close();


	// }

}
//---------------------------------------PRINT ENVILOP FUNCTION END--------------------------------------------------------------	

//---------------------------------------PRINT ENGLISH ENVILOP FUNCTION START--------------------------------------------------------------	

function printEnvilopEnglish() {

	var gtDiv = "";
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please get the proper list of data before print the list");
	// }
	// else {
	// if (document.getElementById('selectedDocName').value == "Application List") {

	for (i = 0; i < applicationNoLength; i++) {

		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

			if ((document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & selectedArr[i] == "YES") & (document.getElementById('achedamicYear').value == achedamicYearArr[i] & degreeMediumArr[i] == "en")) {


				gtDiv += '<page size="#10">';
				gtDiv += "<div style='width:648; height:288'>";
				gtDiv += '<fieldset class="field" style="border:0px">';//<legend style="font-weight:bolder;color:#FFF"></legend>';

				gtDiv += '<table width="649" height="282" border="0" cellpadding="0">';
				gtDiv += '<tr>';
				gtDiv += '<td>&nbsp;</td>';
				gtDiv += '<td><div align="right">';
				gtDiv += '<p>&nbsp;</p>';
				gtDiv += '<table width="350" border="0" cellpadding="0">';
				gtDiv += '<tr>';
				gtDiv += '<td>&nbsp;</td>';
				gtDiv += '<td colspan="2" width="240" style="text-align: left;font-size: 18px"><div align="left">' + studentPersonalTitleArr[i] + '. ' + studentInitialArr[i] + '</div></td>';
				gtDiv += '</tr>';
				gtDiv += '<tr>';
				gtDiv += '<td>&nbsp;</td>';
				gtDiv += '<td width="240" style="text-align: left;font-size: 18px">' + studentPermanentAddressArr[i] + '</td>';
				gtDiv += '</tr>';
				gtDiv += '</table>';
				gtDiv += '</div></td>';
				gtDiv += '</tr>';
				gtDiv += '</table><br>';

				gtDiv += "</fieldset></div></page>";
			}
		}
	}
	// }

	var reportWindow = window.open();
	reportWindow.document.write(gtDiv);
	reportWindow.print();
	reportWindow.document.close();
	// }
}
//---------------------------------------PRINT ENGLISH ENVILOP FUNCTION END--------------------------------------------------------------	

//---------------------------------------GET SINHALA LIST FUNCTION START--------------------------------------------------------------	

function getlistSinhala() {
	var count1 = 1;
	var Rcount = 1;
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
	// }
	// else {
	// if (document.getElementById('selectedDocName').value == "Application List") {
	var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
	newStr += "<div id='topics1' class='info'></div>";
	newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + "- Application List (Sinhala Medium)</div>";
	newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
	newStr += "<br>";
	newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
	newStr += "<tr style='border: 1px solid black;'>";
	newStr += "<th style='border: 1px solid black;'></th>";
	newStr += "<th style='border: 1px solid black;'>Applicant Name</th>";
	newStr += "<th style='border: 1px solid black;'>Application No</th>";
	newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
	newStr += "<th style='border: 1px solid black;'>Address</th>";
	newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
	newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
	newStr += "<th style='border: 1px solid black;'>Email</th>";
	newStr += "</tr>";

	for (i = 0; i < applicationNoLength; i++) {

		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & selectedArr[i] == "YES" & document.getElementById('achedamicYear').value == achedamicYearArr[i] & degreeMediumArr[i] == "si") {
				if (document.getElementById('checkRegistered' + i)) {
					if (document.getElementById('checkRegistered' + i).checked == true) {
						newStr += "<div class='info'   name='testInfo" + i + "'>";
						newStr += "<tr style='border: 1px solid black;'>";

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + count1 + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + applicationNoArr[i] + '</td>';

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

						newStr += "</tr>";
						newStr += "</div><dev><br>";
						inum++;
						rwcnt++;
						count1++;
					}
				}
			}
		}
	}
	newStr += "</table>";
	// }

	// if (document.getElementById('selectedDocName').value == "Registered List") {
	// 	var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
	// 	newStr += "<div id='topics1' class='info'></div>";
	// 	newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + "-" + document.getElementById('selectedDocName').value + "(Sinhala Medium)</div>";
	// 	newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
	// 	newStr += "<br>";
	// 	newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
	// 	newStr += "<tr style='border: 1px solid black;'>";
	// 	newStr += "<th style='border: 1px solid black;'></th>";
	// 	newStr += "<th style='border: 1px solid black;'>Applicant Name</th>";
	// 	newStr += "<th style='border: 1px solid black;'>Application No</th>";
	// 	newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
	// 	newStr += "<th style='border: 1px solid black;'>Address</th>";
	// 	newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
	// 	newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
	// 	newStr += "<th style='border: 1px solid black;'>Email</th>";
	// 	newStr += "</tr>";

	// 	for (i = 0; i < studentNoLength; i++) {

	// 		if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {
	// 			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & registeredArr[i] == "YES" & document.getElementById('achedamicYear').value == achedamicYearArr[i] & degreeMediumArr[i] == "si") {


	// 				newStr += "<div class='info'   name='testInfo" + i + "'>";
	// 				newStr += "<tr style='border: 1px solid black;'>";
	// 				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + Rcount + '</td>';
	// 				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';
	// 				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';
	// 				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
	// 				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';
	// 				newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
	// 				newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

	// 				newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

	// 				newStr += "</tr>";
	// 				newStr += "</div><dev><br>";
	// 				inum++
	// 				Rcount++;
	// 			}
	// 		}
	// 	}
	// 	newStr += "</table>";
	// }
	// }
	var csvData = new Array();

	csvData.push(newStr);
	// download stuff 
	var fileName = "data.doc";
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
//---------------------------------------GET SINHALA LIST FUNCTION END--------------------------------------------------------------	

//---------------------------------------GET ENGLISH LIST FUNCTION START--------------------------------------------------------------	

function getlistEnglish() {
	//Released
	var count1 = 1;
	var Rcount = 1;
	var rwcnt = 1;
	var com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please Select a value from the select Box(s)");

	// }
	// else {
	var appNo = stdName = stdAdd = stdMob = stdEmail = "";
	var countSelectedRows = 0;
	for (i = 0; i < appverticalPinLength; i++) {
		if (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) || (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) != applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) && applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == i)) {
			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			countSelectedRows++;
			//}
		}
	}
	if (countSelectedRows == 0) {
		alert('There is no matching data');
	}
	else {
		// if (document.getElementById('selectedDocName').value == "Application List") {

		countviewSelectedList++;

		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + dataRep['selectedDegreeName'] + " - Application List</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + dataRep['achedamicYear'] + "</div>";
		newStr += "<br>";

		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'>Row Count</th>";

		// education qualification
		if (document.getElementById('selectApplicationNo').checked) {
			newStr += "<th style='border: 1px solid black;'>Application No</th>";
		}

		if (document.getElementById('selectStudentNumber').checked) {
			newStr += "<th style='border: 1px solid black;'>Student No</th>";
		}
		
		// if (document.getElementById('selectTemporaryNo').checked) {
		// 	newStr += "<th style='border: 1px solid black;'>Temporary No</th>";
		// }
		if (document.getElementById('selectName').checked) {
			newStr += "<th style='border: 1px solid black;'>Full Name</th>";
		}
		if (document.getElementById('selectNamewithInitials').checked) {
			newStr += "<th style='border: 1px solid black;'>Name with Initials</th>";
		}
		if (document.getElementById('selectQualificationCategory').checked) {
			newStr += "<th style='border: 1px solid black;'>Qualification Category</th>";
		}
		if (document.getElementById('selectGeneralSpecial').checked) {
			newStr += "<th style='border: 1px solid black;'>General/Special</th>";
		}
		if (document.getElementById('selectUniversityInstituteName').checked) {
			newStr += "<th style='border: 1px solid black;'>University/Institute Name</th>";
		}
		if (document.getElementById('selectQualificationType').checked) {
			newStr += "<th style='border: 1px solid black;'>Qualification Type</th>";
		}

		if (document.getElementById('selectGraduationYear').checked) {
			newStr += "<th style='border: 1px solid black;'>Graduation Year</th>";
		}
		if (document.getElementById('selectGraduationMonth').checked) {
			newStr += "<th style='border: 1px solid black;'>Graduation Month</th>";
		}
		if (document.getElementById('selectGPA').checked) {
			newStr += "<th style='border: 1px solid black;'>GPA (If any)</th>";
		}
		if (document.getElementById('selectClass').checked) {
			newStr += "<th style='border: 1px solid black;'>Class</th>";
		}
		if (document.getElementById('selectDuration').checked) {
			newStr += "<th style='border: 1px solid black;'>Duration (Years)</th>";
		}
		if (document.getElementById('selectDegreeAwardingCountry').checked) {
			newStr += "<th style='border: 1px solid black;'>Degree Awarding Country</th>";
		}

		if (document.getElementById('selectResultStatus').checked) {
			newStr += "<th style='border: 1px solid black;'>ResultStatus</th>";
		}
		// end of education qualification

		// professinal qualification
		if (document.getElementById('selectQuali').checked) {
			newStr += "<th style='border: 1px solid black;'>Professional Qualification</th>";
		}
		if (document.getElementById('selectQualiLevel').checked) {
			newStr += "<th style='border: 1px solid black;'>Professional Qualification Level</th>";
		}
		if (document.getElementById('selectAwardAutho').checked) {
			newStr += "<th style='border: 1px solid black;'>Awarding Authority</th>";
		}
		if (document.getElementById('selectAwardYear').checked) {
			newStr += "<th style='border: 1px solid black;'>Awarding Year</th>";
		}
		if (document.getElementById('selectAwardingCountry').checked) {
			newStr += "<th style='border: 1px solid black;'>Awarding Country</th>";
		}

		// end of professional qualification 

		// work experience

		if (document.getElementById('selectCompanyInstituteOrganization').checked) {
			newStr += "<th style='border: 1px solid black;'>Working Company/Institute/Organization</th>";
		}
		if (document.getElementById('selectDesignation').checked) {
			newStr += "<th style='border: 1px solid black;'>Designation</th>";
		}
		if (document.getElementById('selectFrom').checked) {
			newStr += "<th style='border: 1px solid black;'>From</th>";
		}
		if (document.getElementById('selectTO').checked) {
			newStr += "<th style='border: 1px solid black;'>To</th>";
		}
		if (document.getElementById('selectCountry').checked) {
			newStr += "<th style='border: 1px solid black;'>Country</th>";
		}

		// end the work experience  

		newStr += "</tr>";

		appNo = applicationNoForDocArr[0];

		var count01 = 1;
		var count02 = 1;
		var count03 = 1;
		var count04 = 1;
		var count05 = 1;
		var count06 = 1;
		var count07 = 1;
		var count08 = 1;
		var count09 = 1;
		var count10 = 1;
		var count11 = 1;
		var count12 = 1;
		var count13 = 1;
		var count14 = 1;
		var count15 = 1;
		var count16 = 1;
		var count17 = 1;
		var count18 = 1;
		var count19 = 1;
		var count20 = 1;
		var count21 = 1;

		for (i = 1; i < appverticalPinLength; i++) {
			//alert();

			if (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) || (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) != appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) && appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == i)) {

				newStr += "<tr style='border: 1px solid black;'>";

				newStr += "<td style='width:50px;padding-right:50px;' align='center'><div class='investView'  name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";//
				newStr += rwcnt + "</div></td>";


				if (document.getElementById('selectApplicationNo').checked) {
					newStr += "<td style='width:150px;padding-right:10px;' align='center'><div  class='investView' style='width:150px;' name='applicationNo" + inum + "' id='applicationNo1" + inum + "' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
					newStr += applicationNoForDocArr[i] + "</div></td>";
				}
				j = i;


				while (applicationNoForDocArr[i] == applicationNoForDocArr[j]) {

					if (fieldNameForDocArr[j] == "studentNo") {
						if (document.getElementById('selectStudentNumber').checked) {
							newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentName" + inum + "' id='studentName" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
						}
					}

					if (fieldNameForDocArr[j] == "studentName") {
						if (document.getElementById('selectName').checked) {
							newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentName" + inum + "' id='studentName" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
						}
					}

					if (fieldNameForDocArr[j] == "studentInitial") {
						if (document.getElementById('selectNamewithInitials').checked) {
							newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentInitial" + inum + "' id='studentInitial" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
						}
					}

					else if (fieldNameForDocArr[j] == "Company/Institute/Organization") {


						if (count01 == 4) {
							com += valueForDocArr[j] + "<br>";
							count01 = 0;
						}
						else {
							com += valueForDocArr[j] + "<hr></hr>";
							count01++;
						}
					}

					else if (fieldNameForDocArr[j] == "Applicant Designation") {
						if (count02 == 4) {
							des += valueForDocArr[j] + "<br>";
							count02 = 0;
						}
						else {
							des += valueForDocArr[j] + "<hr></hr>";
							count02++;
						}


					}

					else if (fieldNameForDocArr[j] == "To") {

						if (count03 == 4) {
							varto += valueForDocArr[j] + "<br>";
							count03 = 0;
						}
						else {
							varto += valueForDocArr[j] + "<hr></hr>";
							count03++;
						}
					}
					else if (fieldNameForDocArr[j] == "From") {
						if (count04 == 4) {
							varfrom += valueForDocArr[j] + "<br>";
							count04 = 0;
						}
						else {
							varfrom += valueForDocArr[j] + "<hr></hr>";
							count04++;
						}

					}
					else if (fieldNameForDocArr[j] == "Country") {
						if (count05 == 4) {
							varcountry += valueForDocArr[j] + "<br>";
							count05 = 0;
						}
						else {
							varcountry += valueForDocArr[j] + "<hr></hr>";
							count05++;
						}

					}
					else if (fieldNameForDocArr[j] == "Specify the Qualification Category" || fieldNameForDocArr[j] == "Specify the Qualification category") {
						if (count08 == 4) {
							varQCat += valueForDocArr[j] + "<br>";
							count08 = 0;
						}
						else {
							varQCat += valueForDocArr[j] + "<hr></hr>";
							count08++;
						}

					}
					else if (fieldNameForDocArr[j] == "General/Special") {
						if (count09 == 4) {
							varGenSp += valueForDocArr[j] + "<br>";
							count09 = 0;
						}
						else {
							varGenSp += valueForDocArr[j] + "<hr></hr>";
							count09++;
						}

					}
					else if (fieldNameForDocArr[j] == "University/Institute Name" || fieldNameForDocArr[j] == "University/Institute name") {
						if (count06 == 4) {
							varUni += valueForDocArr[j];
							count06 = 0;
						}
						else {
							varUni += valueForDocArr[j] + "<hr></hr>";
							count06++;
						}
						//alert(varUni);
					}
					else if (fieldNameForDocArr[j] == "Qualification Type") {
						if (count07 == 4) {
							varQType += valueForDocArr[j] + "<br>";
							count07 = 0;
						}
						else {
							varQType += valueForDocArr[j] + "<hr></hr>";
							count07++;
						}

					}
					else if (fieldNameForDocArr[j] == "Graduation Year") {
						if (count10 == 4) {
							varGradYr += valueForDocArr[j] + "<br>";
							count10 = 0;
						}
						else {
							varGradYr += valueForDocArr[j] + "<hr></hr>";
							count10++;
						}

					}
					else if (fieldNameForDocArr[j] == "Graduation Month") {
						if (count11 == 4) {
							varGradMnt += valueForDocArr[j] + "<br>";
							count11 = 0;
						}
						else {
							varGradMnt += valueForDocArr[j] + "<hr></hr>";
							count11++;
						}

					}
					else if (fieldNameForDocArr[j] == "GPA (If any)") {
						if (count12 == 4) {
							vargpa += valueForDocArr[j] + "<br>";
							count12 = 0;
						}
						else {
							vargpa += valueForDocArr[j] + "<hr></hr>";
							count12++;
						}

					}
					else if (fieldNameForDocArr[j] == "Class") {
						if (count13 == 4) {
							varclass += valueForDocArr[j] + "<br>";
							count13 = 0;
						}
						else {
							varclass += valueForDocArr[j] + "<hr></hr>";
							count13++;
						}

					}
					else if (fieldNameForDocArr[j] == "Duration (Years)") {
						if (count14 == 4) {
							varDueYr += valueForDocArr[j] + "<br>";
							count14 = 0;
						}
						else {
							varDueYr += valueForDocArr[j] + "<hr></hr>";
							count14++;
						}

					}
					else if (fieldNameForDocArr[j] == "Degree Awarding Country" || fieldNameForDocArr[j] == "Degree awarding country") {
						if (count15 == 4) {
							varDegCountry += valueForDocArr[j] + "<br>";
							count15 = 0;
						}
						else {
							varDegCountry += valueForDocArr[j] + "<hr></hr>";
							count15++;
						}

					}

					else if (fieldNameForDocArr[j] == "Result Status") {
						if (count16 == 4) {
							varResultStatus += valueForDocArr[j] + "<br>";
							count16 = 0;
						}
						else {
							varResultStatus += valueForDocArr[j] + "<hr></hr>";
							count16++;
						}

					}
					// professinal qualification
					else if (fieldNameForDocArr[j] == "Qualification") {
						if (count17 == 4) {
							varProfQualifi += valueForDocArr[j] + "<br>";
							count17 = 0;
						}
						else {
							varProfQualifi += valueForDocArr[j] + "<hr></hr>";
							count17++;
						}

					}

					else if (fieldNameForDocArr[j] == "Qualification Level") {
						if (count18 == 4) {
							varProfQualifilevel += valueForDocArr[j] + "<br>";
							count18 = 0;
						}
						else {
							varProfQualifilevel += valueForDocArr[j] + "<hr></hr>";
							count18++;
						}

					}

					else if (fieldNameForDocArr[j] == "Awarding Authority") {
						if (count19 == 4) {
							varProfAwardingAuthority += valueForDocArr[j] + "<br>";
							count19 = 0;
						}
						else {
							varProfAwardingAuthority += valueForDocArr[j] + "<hr></hr>";
							count19++;
						}

					}
					else if (fieldNameForDocArr[j] == "Awarding Year") {
						if (count20 == 4) {
							varprofAwardingYear += valueForDocArr[j] + "<br>";
							count20 = 0;
						}
						else {
							varprofAwardingYear += valueForDocArr[j] + "<hr></hr>";
							count20++;
						}

					}


					else if (fieldNameForDocArr[j] == "Country") {
						if (count21 == 4) {
							varprofawardingCountry += valueForDocArr[j] + "<br>";
							count21 = 0;
						}
						else {
							varprofawardingCountry += valueForDocArr[j] + "<hr></hr>";
							count21++;
						}

					}

					// end of professional qualification

					j++;
				}

				// education qualification 


				if (document.getElementById('selectQualificationCategory').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varQCat + "</div></td>";
				}
				if (document.getElementById('selectGeneralSpecial').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varGenSp + "</div></td>";
				}
				if (document.getElementById('selectUniversityInstituteName').checked) {
					newStr += "<td align='center'><div class='investView' style='width:150px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varUni + "</div></td>";
				}
				if (document.getElementById('selectQualificationType').checked) {
					newStr += "<td align='center'><div class='investView' style='width:150px;'  name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varQType + "</div></td>";
				}
				if (document.getElementById('selectGraduationYear').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varGradYr + "</div></td>";
				}
				if (document.getElementById('selectGraduationMonth').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varGradMnt + "</div></td>";
				}
				if (document.getElementById('selectGPA').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + vargpa + "</div></td>";
				}
				if (document.getElementById('selectClass').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varclass + "</div></td>";
				}
				if (document.getElementById('selectDuration').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varDueYr + "</div></td>";
				}

				if (document.getElementById('selectDegreeAwardingCountry').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varDegCountry + "</div></td>";
				}
				if (document.getElementById('selectResultStatus').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varResultStatus + "</div></td>";
				}
				// end of education qualification

				// professinal qualification

				if (document.getElementById('selectQuali').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varprofawardingCountry + "</div></td>";
				}
				if (document.getElementById('selectQualiLevel').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varprofAwardingYear + "</div></td>";
				}
				if (document.getElementById('selectAwardAutho').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varProfAwardingAuthority + "</div></td>";
				}
				if (document.getElementById('selectAwardYear').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varProfQualifilevel + "</div></td>";
				}
				if (document.getElementById('selectAwardingCountry').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varProfQualifi + "</div></td>";
				}
				// end of professional qualification


				// work experience

				if (document.getElementById('selectCompanyInstituteOrganization').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + com + "</div></td>";
				}
				if (document.getElementById('selectCompanyInstituteOrganization').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + des + "</div></td>";
				}
				if (document.getElementById('selectFrom').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varfrom + "</div></td>";
				}
				if (document.getElementById('selectTO').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varto + "</div></td>";
				}
				if (document.getElementById('selectCountry').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center';><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varcountry + "</div></td>";
				}

				// end the work experience

				i = j;
				com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
				vID = 'applicationNo1' + inum;
				AppNoArr[inum] = applicationNoForDocArr[i];
				newStr += "</tr>";
				//newStr +="</div>";  
				inum++;
				rwcnt++;

			}
		}
		// }
		newStr += "</table></br>";
	}


	// }

	var csvData = new Array();

	csvData.push(newStr);
	// download stuff 
	var fileName = "data.doc";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], { type: "text/doc;charset=utf8;" });
	//new Blob([buffer], {
	//  "type": "text/doc;charset=utf8;"			  
	//});
	var link = document.createElement("a");

	if (link.download !== undefined) { // feature detection
		// Browsers that support HTML5 download attribute

		if (navigator.userAgent.indexOf("Firefox") != -1) {
			link.setAttribute("href", window.URL.createObjectURL(blob));
			link.setAttribute("download", fileName);

		}
		else {
			link.href = URL.createObjectURL(blob);
			link.download = fileName;
			link.click();
		}



	}
	else {
		link.setAttribute("href", "http://www.example.com/export");
	}

	link.innerHTML = "";

	if (navigator.userAgent.indexOf("Firefox") != -1) {
		document.body.appendChild(link);
		window.location.replace(link);
	}

}

//---------------------------------------GET ENGLISH LIST FUNCTION END--------------------------------------------------------------	

//---------------------------------------DOWNLOAD ALL STUDENT  FUNCTION START--------------------------------------------------------------	

function getlistAll() {
	var count1 = 1;
	var Rcount = 1;
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
	// }
	// else {
	// if (document.getElementById('selectedDocName').value == "Application List") {
	var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
	newStr += "<div id='topics1' class='info'></div>";
	newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + "- Selected List</div>";
	newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
	newStr += "<br>";
	newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
	newStr += "<tr style='border: 1px solid black;'>";
	newStr += "<th style='border: 1px solid black;'></th>";
	newStr += "<th style='border: 1px solid black;'>Applicant Name</th>";
	newStr += "<th style='border: 1px solid black;'>Application No</th>";
	newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
	newStr += "<th style='border: 1px solid black;'>Address</th>";
	newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
	newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
	newStr += "<th style='border: 1px solid black;'>Email</th>";
	newStr += "</tr>";

	for (i = 0; i < applicationNoLength; i++) {

		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

			if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & selectedArr[i] == "YES" & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
				if (document.getElementById('selectedStudentNIC' + i)) {
					if (document.getElementById('selectedStudentNIC' + i).value == studentNICArr[i]) {
						newStr += "<div class='info'   name='testInfo" + i + "'>";
						newStr += "<tr style='border: 1px solid black;'>";

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + count1 + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + applicationNoArr[i] + '</td>';

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

						newStr += "</tr>";
						newStr += "</div><dev><br>";
						inum++;
						rwcnt++;
						count1++;
					}
				}
			}
		}
	}
	newStr += "</table>";
	// }
	// }
	var csvData = new Array();

	csvData.push(newStr);
	// download stuff 
	var fileName = "data.doc";
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

	link.innerHTML = "";
	document.body.appendChild(link);
	window.location.replace(link);
}
//---------------------------------------DOWNLOAD ALL STUDENT  FUNCTION END--------------------------------------------------------------	

//---------------------------------------SEARCH  FUNCTION START--------------------------------------------------------------	

function searchSelectedList() {
	var countSearch = 0;
	if (countviewSelectedList != 0) {
		var c = 0;
		var appNIC = document.getElementById('searchSelectedApplicant').value;
		var tempName = document.getElementById('searchSelectedApplicantName').value;
		// for (i = 1; i < appverticalPinLength; i++) {
		// 	//alert();

		// 	if (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) || (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) != appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) && appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == i)) {


		for (var i = 0; i < applicationNoLength; i++) {
			if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
				if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & selectedArr[i] == "YES" & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					//alert('ok');
					if (document.getElementById('stdlist' + i)) {

						c++;
						if (c % 2 == 0) {
							document.getElementById('stdlist' + i).style.backgroundColor = '#ffece6';
							document.getElementById('SelectedNamebtn' + i).style.backgroundColor = '#ffece6';
						}
						else {
							document.getElementById('stdlist' + i).style.backgroundColor = '#ffd9cc';
							document.getElementById('SelectedNamebtn' + i).style.backgroundColor = '#ffd9cc';
						}

					}
				}

			}
		}
		var check = 0;
		for (var i = 0; i < applicationNoLength; i++) {
			if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
				if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & selectedArr[i] == "YES" & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					if (document.getElementById('searchSelectedApplicant').value != "" & document.getElementById('searchSelectedApplicantName').value != "") {
						if (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) != -1) {
							check++;
							countSearch++;
							document.getElementById('stdlist' + i).style.backgroundColor = '#ccffeb';
							document.getElementById('SelectedNamebtn' + i).style.backgroundColor = '#ccffeb';
						}
					}
					else {
						if ((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0 & check == 0) || (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) == 0 & check == 0)) {
							countSearch++;
							document.getElementById('stdlist' + i).style.backgroundColor = '#ccffeb';
							document.getElementById('SelectedNamebtn' + i).style.backgroundColor = '#ccffeb';
						}
					}
				}

			}
		}
		if (countSearch == 0) {
			alert('There is No Matching Data');
		}
	}
	else {
		if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
			alert('Please enter Relevent Details');
		}
		else {
			document.getElementById('list').innerHTML = document.getElementById('list').innerHTML.replace = "";
			if (document.getElementById('searchSelectedApplicantName').value != "" & document.getElementById('searchSelectedApplicant').value != "") {
				var newStr = "<table id='my1Table' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
				newStr += "<tr style='background-Color:#ff9f80'>";
				if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
					newStr += "<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>List Selection</font></div></th>";
				}
				newStr += "<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>Row Count</font></div></th>";
				newStr += "<th style='width:200px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Applicant Name</font></div></th>";
				newStr += "<th style='width:150px;' align='center'><div class='investLabel_l' style='width:150px;' style='text-align:left'><font color='black'>Application No</font></div></th>";
				newStr += "<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>NIC Number</font></div></th>";
				newStr += "<th style='width:200px;' align='center'><div class='investLabel_l style='width:200px;'' style='text-align:left'><font color='black'>Address</font></div></th>";
				if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
					newStr += "<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Qualification</font></div></th>";
				}
				newStr += "</tr>";
				var tempName = document.getElementById('searchSelectedApplicantName').value;
				var appNIC = document.getElementById('searchSelectedApplicant').value;
				for (var i = 0; i < applicationNoLength; i++) {
					if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
						if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
							if (studentInitialArr[i].indexOf(tempName) != -1 && studentNICArr[i] == appNIC) {
								countSearch++;
								if (rwcnt % 2 == 0) {
									newStr += "<tr style='background-Color:#ffece6;>";
								}
								else {
									newStr += "<tr style='background-Color:#ffd9cc;>";
								}
								newStr += "<div class='info' id='stdlist" + i + "'  style='width:auto;clear:both;' name='testInfo" + i + "'>";
								if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
									var checkBoxDivIdRegistered = 'checkRegistered' + i;
									if (document.getElementById(checkBoxDivIdRegistered)) {
										if (document.getElementById(checkBoxDivIdRegistered).checked) {
											registeredChecked = 'checked';
										}
									}

									newStr += "<td style='width:20px;padding-right:10px;' align='center'><div  class='investView' style='text-align:center' name='registered" + i + "' id='registered" + i + "'>";
									newStr += "<input type='checkbox'  " + registeredChecked + "  id='checkRegistered" + i + "' onChange='' name='checkRegistered" + i + "' ' />";
									newStr += "</div></td>";//AddRowColorLdocument(stdlist"+i+", this)	
								}
								newStr += "<td style='width:20px;padding-right:10px;' align='center'><div class='investView'  name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";//
								newStr += rwcnt + "</div></td>";//

								newStr += "<td style='width:200px;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentName" + inum + "' id='studentName" + inum + "' onchange='dataRep[this.name]=this.value;'>";
								newStr += studentInitialArr[i] + "</div></td>";

								newStr += "<td style='width:150px;padding-right:10px;' align='center'><div  class='investView' style='width:150px;' name='applicationNo" + inum + "' id='applicationNo1" + inum + "' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
								newStr += applicationNoArr[i] + "</div></td>";

								newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentNIC" + inum + "' id='studentNIC" + inum + "'";
								newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNICArr[i] + "</div></td>";
								newStr += "<input type='text' name='selectedStudentNIC' style='display:none;' id='selectedStudentNIC" + i + "' value= '" + studentNICArr[i] + "' >";

								newStr += "<td style='width:200px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
								newStr += " onchange='dataRep[this.name]=this.value;'>" + studentPermanentAddressArr[i] + "</div></td>";

								if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
									if (fieldValueArr[i] != null) {
										newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification" + inum + "' id='qualification" + inum + "'";
										newStr += " onchange='dataRep[this.name]=this.value;'>" + fieldNameArr[i] + '-' + fieldValueArr[i] + "</div></td>";
									}
									else {
										newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification" + inum + "' id='qualification" + inum + "'";
										newStr += " onchange='dataRep[this.name]=this.value;'></div></td>";
									}
								}
								vID = 'applicationNo1' + inum;
								AppNoArr[inum] = applicationNoArr[i];
								newStr += "</tr>";
								newStr += "</div>";
								inum++;
								rwcnt++;
							}
						}
					}
				}
				newStr += "</table><br>";
				if (countSearch == 0) {
					alert('There is No Matching Data');
				}

				for (i = 0; i < documentIDLength; i++) {

					if (documentIDArr[dataRep["selectedDocName"] - 1] == documentIDArr[i]) {
						docID = documentIDArr[i];
					}

				}

				for (var q = 0; q <= dataItemIDLength; q++) {

					if (docID == documentItemIDArr[q]) {
						if (dataItemNameArr[q] != null) {
							if (dataItemNameArr[q] == "Programm Title") {
								dataRep["programTitle"] = document.getElementById('selectedDegreeName').value;
								newStr += "<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='programTitle'  id='programTitle' value= '" + dataRep["programTitle"] + "-" + dataItemIDArr[q] + "' onchange='dataRep[this.name]=this.value'" + keyDisabled + "></div>";

							}
							if (dataItemNameArr[q] == "Achedamic Year") {
								newStr += "<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='achedamicYear'  id='achedamicYear1' value= '" + dataRep["programYear"] + "-" + dataItemIDArr[q] + "' onchange='dataRep[this.name]=this.value'" + keyDisabled + "></div>";
							}
						}
					}
				}
				if (rwcnt >= 10) {
					if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
						var newStr1 = '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  disabled="disabled"  value="Download Options"class="btnB" id="ESinhala" onclick= selectprintlist2();btndownloaddisable();>';
						newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="Reset" disabled="disabled" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');">';

						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu(' + "'formClerkMenu'" + ');>';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';
					}
					if (dataRep['roleName'] == 'Assistant Registrar') {
						var newStr1 = '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  disabled="disabled"  value="Download Options"class="btnB" id="ESinhala" onclick= selectprintlist2();btndownloaddisable();>';
						newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="Reset" disabled="disabled" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');">';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu(' + "'formAssistantRegistrarMenu'" + ');>';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';
					}
					if (dataRep['roleName'] == 'Dean') {
						var newStr1 = '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  disabled="disabled"  value="Download Options"class="btnB" id="ESinhala" onclick= selectprintlist2();btndownloaddisable();>';
						newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="Reset" disabled="disabled" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');">';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu(' + "'formClerkMenu'" + ');>';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';
					}
					if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk') {
						var newStr1 = '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  disabled="disabled"  value="Download Options"class="btnB" id="ESinhala" onclick= selectprintlist2();btndownloaddisable();>';
						newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="Reset" disabled="disabled" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');">';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu(' + "'formClerkMenu'" + ');>';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';
					}
					document.getElementById('selectedlistbtn').innerHTML += newStr1;
				}
				document.getElementById('list').innerHTML += newStr;
				document.getElementById("View-List").disabled = true;
				document.getElementById('select-all').style = "display";
				document.getElementById('select-non').style = "display";
			}
			if ((document.getElementById('searchSelectedApplicantName').value != "" & document.getElementById('searchSelectedApplicant').value == "") || (document.getElementById('searchApplicantName').value == "" & document.getElementById('searchApplicant').value != "")) {

				var newStr = "<table id='my1Table' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
				newStr += "<tr style='background-Color:#ff9f80'>";
				if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
					newStr += "<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>List Selection</font></div></th>";
				}
				newStr += "<th style='width:20px;' align='center'><div class='investLabel' style='text-align:center'><font color='black'>Row Count</font></div></th>";
				newStr += "<th style='width:200px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Applicant Name</font></div></th>";
				newStr += "<th style='width:150px;' align='center'><div class='investLabel_l' style='width:150px;' style='text-align:left'><font color='black'>Application No</font></div></th>";
				newStr += "<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>NIC Number</font></div></th>";
				newStr += "<th style='width:200px;' align='center'><div class='investLabel_l style='width:200px;'' style='text-align:left'><font color='black'>Address</font></div></th>";
				if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
					newStr += "<th style='width:150px;' align='center'><div class='investLabel_l' style='text-align:left'><font color='black'>Qualification</font></div></th>";
				}
				newStr += "</tr>";
				var tempName = document.getElementById('searchSelectedApplicantName').value;
				var appNIC = document.getElementById('searchSelectedApplicant').value;
				for (var i = 0; i < applicationNoLength; i++) {
					if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
						if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
							if ((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0) || (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) == 0)) {
								countSearch++;
								if (rwcnt % 2 == 0) {

									newStr += "<tr style='background-Color:#ffece6;>";
								}
								else {
									newStr += "<tr style='background-Color:#ffd9cc;>";
								}
								newStr += "<div class='info' id='stdlist" + i + "'  style='width:auto;clear:both;' name='testInfo" + i + "'>";
								if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
									var checkBoxDivIdRegistered = 'checkRegistered' + i;
									if (document.getElementById(checkBoxDivIdRegistered)) {
										if (document.getElementById(checkBoxDivIdRegistered).checked) {
											registeredChecked = 'checked';
										}
									}

									newStr += "<td style='width:20px;padding-right:10px;' align='center'><div  class='investView' style='text-align:center' name='registered" + i + "' id='registered" + i + "'>";
									newStr += "<input type='checkbox'  " + registeredChecked + "  id='checkRegistered" + i + "' onChange='' name='checkRegistered" + i + "' ' />";
									newStr += "</div></td>";//AddRowColorLdocument(stdlist"+i+", this)	
								}
								newStr += "<td style='width:20px;padding-right:10px;' align='center'><div class='investView'  name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";//
								newStr += rwcnt + "</div></td>";//

								newStr += "<td style='width:200px;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentName" + inum + "' id='studentName" + inum + "' onchange='dataRep[this.name]=this.value;'>";
								newStr += studentInitialArr[i] + "</div></td>";

								newStr += "<td style='width:150px;padding-right:10px;' align='center'><div  class='investView' style='width:150px;' name='applicationNo" + inum + "' id='applicationNo1" + inum + "' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
								newStr += applicationNoArr[i] + "</div></td>";

								newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentNIC" + inum + "' id='studentNIC" + inum + "'";
								newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNICArr[i] + "</div></td>";
								newStr += "<input type='text' name='selectedStudentNIC' style='display:none;' id='selectedStudentNIC" + i + "' value= '" + studentNICArr[i] + "' >";

								newStr += "<td style='width:200px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
								newStr += " onchange='dataRep[this.name]=this.value;'>" + studentPermanentAddressArr[i] + "</div></td>";

								if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
									if (fieldValueArr[i] != null) {
										newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification" + inum + "' id='qualification" + inum + "'";
										newStr += " onchange='dataRep[this.name]=this.value;'>" + fieldNameArr[i] + '-' + fieldValueArr[i] + "</div></td>";
									}
									else {
										newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' name='qualification" + inum + "' id='qualification" + inum + "'";
										newStr += " onchange='dataRep[this.name]=this.value;'></div></td>";
									}
								}

								vID = 'applicationNo1' + inum;
								AppNoArr[inum] = applicationNoArr[i];
								newStr += "</tr>";
								newStr += "</div>";
								inum++;
								rwcnt++;
							}
						}
					}
				}
				newStr += "</table><br>";
				if (countSearch == 0) {
					alert('There is No Matching Data');
				}
				for (i = 0; i < documentIDLength; i++) {
					if (documentIDArr[dataRep["selectedDocName"] - 1] == documentIDArr[i]) {
						docID = documentIDArr[i];
					}
				}

				for (var q = 0; q <= dataItemIDLength; q++) {

					if (docID == documentItemIDArr[q]) {
						if (dataItemNameArr[q] != null) {
							if (dataItemNameArr[q] == "Programm Title") {
								dataRep["programTitle"] = document.getElementById('selectedDegreeName').value;
								newStr += "<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='programTitle'  id='programTitle' value= '" + dataRep["programTitle"] + "-" + dataItemIDArr[q] + "' onchange='dataRep[this.name]=this.value'" + keyDisabled + "></div>";

							}
							if (dataItemNameArr[q] == "Achedamic Year") {
								newStr += "<div class='hideLabel'><input type='text' style='width:150px';visibility:'hidden' name='achedamicYear'  id='achedamicYear1' value= '" + dataRep["programYear"] + "-" + dataItemIDArr[q] + "' onchange='dataRep[this.name]=this.value'" + keyDisabled + "></div>";
							}
						}
					}
				}
				if (rwcnt >= 10) {
					if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
						var newStr1 = '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  disabled="disabled"  value="Download Options"class="btnB" id="ESinhala" onclick= selectprintlist2();btndownloaddisable();>';
						newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="Reset" disabled="disabled" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');">';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu(' + "'formClerkMenu'" + ');>';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';
					}
					if (dataRep['roleName'] == 'Assistant Registrar') {
						var newStr1 = '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  disabled="disabled"  value="Download Options"class="btnB" id="ESinhala" onclick= selectprintlist2();btndownloaddisable();>';
						newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="Reset" disabled="disabled" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');">';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu(' + "'formAssistantRegistrarMenu'" + ');>';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';
					}
					if (dataRep['roleName'] == 'Dean') {
						var newStr1 = '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  disabled="disabled"  value="Download Options"class="btnB" id="ESinhala" onclick= selectprintlist2();btndownloaddisable();>';
						newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="Reset" disabled="disabled" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');">';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu(' + "'formClerkMenu'" + ');>';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';
					}
					if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk') {
						var newStr1 = '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;"  disabled="disabled"  value="Download Options"class="btnB" id="ESinhala" onclick= selectprintlist2();btndownloaddisable();>';
						newStr1 += '<input type="button"  class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="Reset" id="Reset" disabled="disabled" onclick="sendForm(' + "'data4ViewDegreeName'" + ');sendForm(' + "'data4checkUserInterview'" + ');">';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = ResetAll();showMenu(' + "'formClerkMenu'" + ');>';
						newStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "logout" onclick = logOut();>';
					}
					document.getElementById('selectedlistbtn').innerHTML += newStr1;
				}
				document.getElementById('list').innerHTML += newStr;
				document.getElementById("View-List").disabled = true;
				document.getElementById('select-all').style = "display";
				document.getElementById('select-non').style = "display";
			}
		}
	}
}

function SelectAll() {


	document.getElementById('selectApplicationNo').checked = true;
	document.getElementById('selectStudentNumber').checked = true;
	document.getElementById('selectNamewithInitials').checked = true;
	document.getElementById('selectName').checked = true;
	document.getElementById('selectTemporaryNo').checked = true;

	document.getElementById('selectQuali').checked = true;
	document.getElementById('selectQualiLevel').checked = true;
	document.getElementById('selectAwardAutho').checked = true;
	document.getElementById('selectAwardingCountry').checked = true;
	document.getElementById('selectAwardYear').checked = true;

	document.getElementById('selectCompanyInstituteOrganization').checked = true;
	document.getElementById('selectDesignation').checked = true;
	document.getElementById('selectFrom').checked = true;
	document.getElementById('selectTO').checked = true;
	document.getElementById('selectCountry').checked = true;

	document.getElementById('selectUniversityInstituteName').checked = true;
	document.getElementById('selectQualificationType').checked = true;
	document.getElementById('selectQualificationCategory').checked = true;
	document.getElementById('selectGeneralSpecial').checked = true;
	document.getElementById('selectGraduationYear').checked = true;
	document.getElementById('selectGraduationMonth').checked = true;
	document.getElementById('selectGPA').checked = true;
	document.getElementById('selectClass').checked = true;
	document.getElementById('selectDuration').checked = true;
	document.getElementById('selectDegreeAwardingCountry').checked = true;
	document.getElementById('selectResultStatus').checked = true;

}

function UnselectAll() {
	document.getElementById('selectApplicationNo').checked = false;
	document.getElementById('selectStudentNumber').checked = false;
	document.getElementById('selectNamewithInitials').checked = false;
	document.getElementById('selectTemporaryNo').checked = false;
	document.getElementById('selectUniversityInstituteName').checked = false;
	document.getElementById('selectQuali').checked = false;
	document.getElementById('selectCompanyInstituteOrganization').checked = false;
	document.getElementById('selectName').checked = false;
	document.getElementById('selectQualificationType').checked = false;
	document.getElementById('selectQualiLevel').checked = false;
	document.getElementById('selectDesignation').checked = false;
	document.getElementById('selectQualificationCategory').checked = false;
	document.getElementById('selectAwardAutho').checked = false;
	document.getElementById('selectFrom').checked = false;
	document.getElementById('selectGeneralSpecial').checked = false;
	document.getElementById('selectAwardingCountry').checked = false;
	document.getElementById('selectTO').checked = false;
	document.getElementById('selectGraduationYear').checked = false;
	document.getElementById('selectAwardYear').checked = false;
	document.getElementById('selectCountry').checked = false;
	document.getElementById('selectGraduationMonth').checked = false;
	document.getElementById('selectGPA').checked = false;
	document.getElementById('selectClass').checked = false;
	document.getElementById('selectDuration').checked = false;
	document.getElementById('selectDegreeAwardingCountry').checked = false;
	document.getElementById('selectResultStatus').checked = false;
}
//---------------------------------------SEARCH FUNCTION END--------------------------------------------------------------	
//---------------------------------------Select Print List Function Start-------------------------------------------------
function onCPersonalDetails() {
	let checkBox = document.getElementById("selectCPersonalDetails").checked;
	if (checkBox == true) {
		document.getElementById('selectApplicationNo').checked = true;
		document.getElementById('').checked = true;
		
		document.getElementById('selectNamewithInitials').checked = true;
		document.getElementById('selectName').checked = true;
		document.getElementById('selectTemporaryNo').checked = true;
	} else {
		document.getElementById('selectApplicationNo').checked = false;
		document.getElementById('selectStudentNumber').checked = false;
		document.getElementById('selectNamewithInitials').checked = false;
		document.getElementById('selectName').checked = false;
		document.getElementById('selectTemporaryNo').checked = false;
	}
}
function onCEducationDetails() {
	let checkBox = document.getElementById("selectCEducationDetails").checked;
	if (checkBox == true) {
		document.getElementById('selectUniversityInstituteName').checked = true;
		document.getElementById('selectQualificationType').checked = true;
		document.getElementById('selectQualificationCategory').checked = true;
		document.getElementById('selectGeneralSpecial').checked = true;
		document.getElementById('selectGraduationYear').checked = true;
		document.getElementById('selectGraduationMonth').checked = true;
		document.getElementById('selectGPA').checked = true;
		document.getElementById('selectClass').checked = true;
		document.getElementById('selectDuration').checked = true;
		document.getElementById('selectDegreeAwardingCountry').checked = true;
		document.getElementById('selectResultStatus').checked = true;
	} else {
		document.getElementById('selectUniversityInstituteName').checked = false;
		document.getElementById('selectQualificationType').checked = false;
		document.getElementById('selectQualificationCategory').checked = false;
		document.getElementById('selectGeneralSpecial').checked = false;
		document.getElementById('selectGraduationYear').checked = false;
		document.getElementById('selectGraduationMonth').checked = false;
		document.getElementById('selectGPA').checked = false;
		document.getElementById('selectClass').checked = false;
		document.getElementById('selectDuration').checked = false;
		document.getElementById('selectDegreeAwardingCountry').checked = false;
		document.getElementById('selectResultStatus').checked = false;
	}

}
function onCProfessionalDetails() {
	let checkBox = document.getElementById("selectCProfessionalDetails").checked;
	if (checkBox == true) {
		document.getElementById('selectQuali').checked = true;
		document.getElementById('selectQualiLevel').checked = true;
		document.getElementById('selectAwardAutho').checked = true;
		document.getElementById('selectAwardingCountry').checked = true;
		document.getElementById('selectAwardYear').checked = true;
	} else {
		document.getElementById('selectQuali').checked = false;
		document.getElementById('selectQualiLevel').checked = false;
		document.getElementById('selectAwardAutho').checked = false;
		document.getElementById('selectAwardingCountry').checked = false;
		document.getElementById('selectAwardYear').checked = false;
	}

}
function onCWorkExperience() {
	let checkBox = document.getElementById("selectCWorkExperience").checked;
	if (checkBox == true) {
		document.getElementById('selectCompanyInstituteOrganization').checked = true;
		document.getElementById('selectDesignation').checked = true;
		document.getElementById('selectFrom').checked = true;
		document.getElementById('selectTO').checked = true;
		document.getElementById('selectCountry').checked = true;
	} else {
		document.getElementById('selectCompanyInstituteOrganization').checked = false;
		document.getElementById('selectDesignation').checked = false;
		document.getElementById('selectFrom').checked = false;
		document.getElementById('selectTO').checked = false;
		document.getElementById('selectCountry').checked = false;
	}

}

function selectprintlist2() {

	var newselectStr = "";

	newselectStr += '<div class="modal fade " id="exampleModalLong" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >';
	newselectStr += '<div class="modal-dialog modal-lg modal-dialog-centered" role="document">';
	newselectStr += '<div class="modal-content">';
	newselectStr += '<div class="modal-header">';
	newselectStr += '<h5 class="modal-title" id="exampleModalLongTitle">Download Options</h5>';
	newselectStr += '<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close" onclick="InterviewList()">';
	newselectStr += '<span aria-hidden="true">&times;</span>';
	newselectStr += '</button>';
	newselectStr += '</div>';
	newselectStr += '<div class="modal-body" style="overflow-x: auto;">';
	// newselectStr += '<input type="button" id="select-all" style="margin-top:1px;float:left" class="btnB" value="Mark All" onclick=SelectAll();>';
	// newselectStr += '<input type="button" id="select-non" style="margin-top:1px;float:left" class="btnB" value="Unmark All" onclick=UnselectAll();>';
	// newselectStr += "<br>";
	//----------------------------------------------------- start implementing check box set -----------------------------------------

	newselectStr += '<table class="table table-bordered">';

	newselectStr += "<thead><tr style='background-color: bisque;'>";
	newselectStr += "<th style='padding: 5px 5px 20px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectCPersonalDetails' value='column one' checked onchange='onCPersonalDetails()'/></th>";
	newselectStr += "<th>Personal Details</th>";
	newselectStr += "<th style='padding: 5px 15px 20px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectCEducationDetails' value='column one' checked onchange='onCEducationDetails()'/></th>";
	newselectStr += "<th>Education Details</th>";
	newselectStr += "<th style='padding: 5px 5px 20px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectCProfessionalDetails' value='column one' checked onchange='onCProfessionalDetails()'/></th>";
	newselectStr += "<th>Professional Details</th>";
	newselectStr += "<th style='padding: 5px 5px 20px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectCWorkExperience' value='column one' checked onchange='onCWorkExperience()'/></th>";
	newselectStr += "<th>Work Experience</th>";
	newselectStr += "</tr></thead><tbody>";

	newselectStr += "<tr>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectApplicationNo' value='column one' checked/></td>";
	newselectStr += "<td>Application No</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectUniversityInstituteName' value='column one' checked/></td>";
	newselectStr += "<td>University/Institute Name</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectQuali' value='column one' checked/></td>";
	newselectStr += "<td>Professional Qualification</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectCompanyInstituteOrganization' value='column one' checked/></td>";
	newselectStr += "<td>Working Company/Institute/Organization</td>";
	newselectStr += "</tr>";

	newselectStr += "<tr>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectName' value='column one' checked/></td>";
	newselectStr += "<td>Full Name</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectQualificationType' value='column one' checked/></td>";
	newselectStr += "<td>Qualification Type</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectQualiLevel' value='column one' checked/></td>";
	newselectStr += "<td>Professional Qualification Level</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectDesignation' value='column one' checked/></td>";
	newselectStr += "<td>Designation</td>";
	newselectStr += "</tr>";

	newselectStr += "<tr >";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectNamewithInitials' value='column one' checked/></td>";
	newselectStr += "<td>Name with Initials</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectQualificationCategory' value='column one' checked/></td>";
	newselectStr += "<td>Qualification Category</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectAwardAutho' value='column one' checked/></td>";
	newselectStr += "<td>Awarding Authority</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectFrom' value='column one' checked/></td>";
	newselectStr += "<td>From</td>";
	newselectStr += "</tr>";

	newselectStr += "<tr >";
	// newselectStr += "<td style='padding: 5px 5px 15px 5px;'></td>";
	// newselectStr += "<td></td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectStudentNumber' value='column one' checked/></td>";
	newselectStr += "<td>Student Number</td>";
	// newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectTemporaryNo' value='column one' checked/></td>";
	// newselectStr += "<td>Temporary No</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectGeneralSpecial' value='column one' checked/></td>";
	newselectStr += "<td>General/Special</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectAwardingCountry' value='column one' checked/></td>";
	newselectStr += "<td>Country</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectTO' value='column one' checked/></td>";
	newselectStr += "<td>To</td>";
	newselectStr += "</tr>";

	newselectStr += "<tr >";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectGraduationYear' value='column one' checked/></td>";
	newselectStr += "<td>Graduation Year</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectAwardYear' value='column one' checked/></td>";
	newselectStr += "<td>Awarding Year</td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectCountry' value='column one' checked/></td>";
	newselectStr += "<td>Country</td>";
	newselectStr += "</tr>";

	newselectStr += "<tr >";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectGraduationMonth' value='column one' checked/></td>";
	newselectStr += "<td>Graduation Month</td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "</tr>";

	newselectStr += "<tr >";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input'  name='' id='selectGPA' value='column one' checked/></td>";
	newselectStr += "<td>GPA (If any)</td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "</tr>";

	newselectStr += "<tr >";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectClass' value='column one' checked/></td>";
	newselectStr += "<td>Class</td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "</tr>";

	newselectStr += "<tr >";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectDuration' value='column one' checked/></td>";
	newselectStr += "<td>Duration (Years)</td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "</tr>";

	newselectStr += "<tr >";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input type='checkbox' style='margin: 0;' class='form-check-input' name='' id='selectDegreeAwardingCountry' value='column one' checked/></td>";
	newselectStr += "<td>Degree Awarding Country</td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "</tr>";

	newselectStr += "<tr >";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td style='padding: 5px 5px 15px 5px;'><input class='form-check-input' style='margin: 0;' type='checkbox' name='' id='selectResultStatus' value='column one' checked/></td>";
	newselectStr += "<td>Result Status</td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "<td></td>";
	newselectStr += "</tr>";
	newselectStr += "</tbody></table>";


	newselectStr += '<div class="template-demo" style="text-align: right;">';
	newselectStr += '<button type="button" class="btn btn-primary btn-icon-text" onclick=getgraduatecompletelistEnglish("' + "graduateList" + '");><i class="mdi mdi-download" ></i>Download Graduate List</button>';
	newselectStr += '<button type="button" class="btn btn-primary btn-icon-text" onclick=getgraduatecompletelistEnglish("' + "graduatePendingList" + '");><i class="mdi mdi-download" ></i>Download Graduate Pending Result List</button>';
	newselectStr += '<button type="button" class="btn btn-primary btn-icon-text" onclick=getgraduatecompletelistEnglish("' + "profQulificationList" + '");><i class="mdi mdi-download" ></i>Download Professional Qualification List</button>';
	newselectStr += '<button type="button" class="btn btn-primary btn-icon-text" onclick=getgraduatecompletelistEnglish("' + "all" + '");><i class="mdi mdi-download" ></i>Download All</button>';
	newselectStr += '</div>';
	newselectStr += '</div>';
	newselectStr += '<div class="modal-footer">';
	newselectStr += '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="InterviewList()">Close</button>';
	newselectStr += '</div>';
	newselectStr += '</div>';
	newselectStr += '</div>';
	newselectStr += '</div>';
	// -------------------------------- end the implementing check box set ------------------------------

	document.getElementById('selectedlistbtn').innerHTML += newselectStr;
	downloadOptionModel = new bootstrap.Modal(document.getElementById('exampleModalLong'), {
		keyboard: false,
		backdrop: true
	})

	// document.getElementById("View-List").disabled = true;
	// document.getElementById('list').style.display = "none";

}
//---------------------------------------Select Print List Function End-------------------------------------------------





function openModelInterviewList() {
	downloadOptionModel.show();
}
function closeModelInterviewList() {
	downloadOptionModel.hide();
}

//------------------------------------------BUTTON DISABLE FUNCTION START------------------------------------------------------------------
function buttondisable2() {
	if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
		//document.getElementById("DSinhala").disabled=false;
		document.getElementById("ESinhala").disabled = false;
		//document.getElementById("save").disabled=false;
		document.getElementById("Reset").disabled = false;
	}
	else if (dataRep['roleName'] == 'Dean') {
		document.getElementById("ESinhala").disabled = false;
		document.getElementById("DReset").disabled = false;
		//document.getElementById("LDownload").style.display = "none";
	}
	else if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk') {
		document.getElementById("ESinhala").disabled = false;
		document.getElementById("DReset").disabled = false;
		//document.getElementById("LDownload").style.display = "none";
	}
	else if (dataRep['roleName'] == 'Head of the Department') {
		document.getElementById("ESinhala").disabled = false;
		document.getElementById("DReset").disabled = false;
		//document.getElementById("LDownload").style.display = "none";
	}
	else if (dataRep['roleName'] == 'Assistant Registrar') {
		document.getElementById("ESinhala").disabled = false;
		document.getElementById("DReset").disabled = false;
		//document.getElementById("LDownload").style.display = "none";
	}
	else if (dataRep['roleName'] == 'Administrator') {
		document.getElementById("ESinhala").disabled = false;
		document.getElementById("DReset").disabled = false;
		//document.getElementById("LDownload").style.display = "none";
	}
	else {
		//document.getElementById("LDownload").disabled=false;
		document.getElementById("DReset").disabled = false;
		//document.getElementById("ESinhala").disabled=false;			
	}

}
//------------------------------------------BUTTON DISABLE FUNCTION END------------------------------------------------------------------

function getgraduatecompletelistEnglish(type) {
	var count1 = 1;
	var Rcount = 1;
	var rwcnt = 1;
	var Released = "";
	var newstr1 = "";
	var com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please Select a value from the select Box(s)");

	// }
	// else {
	var appNo = stdName = stdAdd = stdMob = stdEmail = "";
	var countSelectedRows = 0;
	for (i = 0; i < appverticalPinLength; i++) {
		if (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) || (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) != applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) && applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == i)) {
			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			countSelectedRows++;
			//}
		}
	}
	if (countSelectedRows == 0) {
		alert('There is no matching data');
	}
	else {
		// if (document.getElementById('selectedDocName').value == "Application List") {

		countviewSelectedList++;
		let docHeading;
		if (type == "graduateList") {
			docHeading = "Graduation Complete Applicant List - " + document.getElementById('selectedDegreeName').value;
		} else if (type == "graduatePendingList") {
			docHeading = "Graduation Pending Applicant List - " + document.getElementById('selectedDegreeName').value;
		} else if (type == "profQulificationList") {
			docHeading = "Professional Qualification Applicant List - " + document.getElementById('selectedDegreeName').value;
		} else {
			docHeading = "Applicant List - " + document.getElementById('selectedDegreeName').value;
		}
		newstr1 = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newstr1 += "<div id='topics1' class='info'></div>";
		newstr1 += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size:24px;height:30px'>" + docHeading + " (" + dataRep['achedamicYear'] + ")</div>";
		newstr1 += "<br>";

		newstr1 += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newstr1 += "<tr style='border: 1px solid black;'>";
		newstr1 += "<th style='border: 1px solid black;'>Row Count</th>";

		// education qualification
		if (document.getElementById('selectApplicationNo').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Application No</th>";
		}
		if (document.getElementById('selectStudentNumber').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Student No</th>";
		}
		
		// if (document.getElementById('selectTemporaryNo').checked) {
		// 	newstr1 += "<th style='border: 1px solid black;'>Temporary No</th>";
		// }
		if (document.getElementById('selectName').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Full Name</th>";
		}
		if (document.getElementById('selectNamewithInitials').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Name with Initials</th>";
		}
		if (document.getElementById('selectUniversityInstituteName').checked) {
			newstr1 += "<th style='border: 1px solid black;'>University/Institute Name</th>";
		}
		if (document.getElementById('selectQualificationType').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Qualification Type</th>";
		}
		if (document.getElementById('selectQualificationCategory').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Qualification Category</th>";
		}
		if (document.getElementById('selectGeneralSpecial').checked) {
			newstr1 += "<th style='border: 1px solid black;'>General/Special</th>";
		}

		if (document.getElementById('selectGraduationYear').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Graduation Year</th>";
		}
		if (document.getElementById('selectGraduationMonth').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Graduation Month</th>";
		}
		if (document.getElementById('selectGPA').checked) {
			newstr1 += "<th style='border: 1px solid black;'>GPA (If any)</th>";
		}
		if (document.getElementById('selectClass').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Class</th>";
		}
		if (document.getElementById('selectDuration').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Duration (Years)</th>";
		}
		if (document.getElementById('selectDegreeAwardingCountry').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Degree Awarding Country</th>";
		}

		if (document.getElementById('selectResultStatus').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Result Status</th>";
		}
		// end of education qualification

		// professinal qualification
		if (document.getElementById('selectQuali').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Professional Qualifications</th>";
		}
		if (document.getElementById('selectQualiLevel').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Professional Qualification Level</th>";
		}
		if (document.getElementById('selectAwardAutho').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Awarding Authority</th>";
		}
		if (document.getElementById('selectAwardYear').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Awarding Year</th>";
		}
		if (document.getElementById('selectAwardingCountry').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Awarding Country</th>";
		}

		// end of professional qualification 

		// work experience

		if (document.getElementById('selectCompanyInstituteOrganization').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Working Company/Institute/Organization</th>";
		}
		if (document.getElementById('selectDesignation').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Designation</th>";
		}
		if (document.getElementById('selectFrom').checked) {
			newstr1 += "<th style='border: 1px solid black;'>From</th>";
		}
		if (document.getElementById('selectTO').checked) {
			newstr1 += "<th style='border: 1px solid black;'>To</th>";
		}

		if (document.getElementById('selectFrom').checked && document.getElementById('selectTO').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Duration</th>";
		}

		if (document.getElementById('selectCountry').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Country</th>";
		}

		// end the work experience  

		newstr1 += "</tr>";

		appNo = applicationNoForDocArr[0];


		for (i = 0; i < appverticalPinLength; i++) {

			if (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) || (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) != appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) && appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == i)) {

				j = i;


				var personal = [];
				var education = [];
				var professinal = [];
				let work = [];

				let workcount = 0;
				let educationcount = 0;
				let professinalcount = 0;

				education[educationcount] = new Array(11);
				professinal[professinalcount] = new Array(11);
				work[workcount] = new Array(11);
				let Released = false;
				let Pending = false;
				let ProfQu = false;
				let alreadyAddedProf = [];
				let alreadyAddedEdu = [];
				let alreadyAddedWork = [];
				while (applicationNoForDocArr[i] == applicationNoForDocArr[j]) {
					if (fieldNameForDocArr[j] == "studentName" && document.getElementById('selectName').checked) {
						personal[0] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "studentInitial" && document.getElementById('selectNamewithInitials').checked) {
						personal[1] = valueForDocArr[j];
					}

					if (fieldNameForDocArr[j] == "studentNo" && document.getElementById('selectStudentNumber').checked) {
						personal[2] = valueForDocArr[j];
					}
					// if (fieldNameForDocArr[j] == "temporaryNo" && document.getElementById('selectTemporaryNo').checked) {
					// 	personal[2] = valueForDocArr[j];
					// }


					//work experience
					if (fieldNameForDocArr[j] == "Company/Institute/Organization" && document.getElementById('selectCompanyInstituteOrganization').checked) {
						if (work[workcount] && work[workcount][0] != null) {
							workcount++;
							work[workcount] = new Array(5);
						}
						work[workcount][0] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "Applicant Designation" && document.getElementById('selectDesignation').checked) {
						if (work[workcount] && work[workcount][1] != null) {
							workcount++;
							work[workcount] = new Array(5);
						}
						work[workcount][1] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "To" && document.getElementById('selectFrom').checked) {
						if (work[workcount] && work[workcount][2] != null) {
							workcount++; work[workcount] = new Array(5);
						}
						work[workcount][2] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "From" && document.getElementById('selectTO').checked) {
						if (work[workcount] && work[workcount][3] != null) {
							workcount++; work[workcount] = new Array(5);
						}
						work[workcount][3] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "Country" && document.getElementById('selectCountry').checked) {
						if (work[workcount] && work[workcount][4] != null) {
							workcount++; work[workcount] = new Array(5);
						}
						work[workcount][4] = valueForDocArr[j];
					}


					//NEW APPLICATION
					if (!alreadyAddedWork.includes(applicationNoForDocArr[i])) {
						for (let index = 0; index < workRowLength; index++) {
							if (applicationNoForDocArr[i] == work_application_no[index]) {
								alreadyAddedWork.push(applicationNoForDocArr[i]);

								//Company/Institute/Organization
								if (work[workcount] && work[workcount][0] != null) {
									workcount++;
									work[workcount] = new Array(5);
								}
								work[workcount][0] = work_organization[index];

								//Applicant Designation
								if (work[workcount] && work[workcount][1] != null) {
									workcount++;
									work[workcount] = new Array(5);
								}
								work[workcount][1] = work_designation[index];

								//To
								if (work[workcount] && work[workcount][2] != null) {
									workcount++; work[workcount] = new Array(5);
								}
								work[workcount][2] = work_end_date[index];

								//FROM
								if (work[workcount] && work[workcount][3] != null) {
									workcount++; work[workcount] = new Array(5);
								}
								work[workcount][3] = work_start_date[index];

								//Country
								if (work[workcount] && work[workcount][4] != null) {
									workcount++; work[workcount] = new Array(5);
								}
								work[workcount][4] = work_awarding_country[index];


							}

						}
					}


					//education qulification
					if ((fieldNameForDocArr[j] == "University/Institute name" || fieldNameForDocArr[j] == "University/Institute Name") && document.getElementById('selectUniversityInstituteName').checked) {
						if (education[educationcount] && (education[educationcount][0])) {
							educationcount++;
							education[educationcount] = new Array(11);
						}
						education[educationcount][0] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "Qualification Type" && document.getElementById('selectQualificationType').checked) {
						if (education[educationcount] && (education[educationcount][1] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][1] = valueForDocArr[j];
					}
					if ((fieldNameForDocArr[j] == "Specify the Qualification Category" || fieldNameForDocArr[j] == "Specify the Qualification category") && document.getElementById('selectQualificationCategory').checked) {
						if (education[educationcount] && (education[educationcount][2] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][2] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "General/Special" && document.getElementById('selectGeneralSpecial').checked) {
						if (education[educationcount] && (education[educationcount][3] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][3] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "Graduation Year" && document.getElementById('selectGraduationYear').checked) {
						if (education[educationcount] && (education[educationcount][4] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][4] = valueForDocArr[j];
					}

					if (fieldNameForDocArr[j] == "Graduation Month" && document.getElementById('selectGraduationMonth').checked) {
						if (education[educationcount] && (education[educationcount][5] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][5] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "GPA (If any)" && document.getElementById('selectGPA').checked) {
						if (education[educationcount] && (education[educationcount][6] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][6] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "Class" && document.getElementById('selectClass').checked) {
						if (education[educationcount] && (education[educationcount][7] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][7] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "Duration (Years)" && document.getElementById('selectDuration').checked) {
						if (education[educationcount] && (education[educationcount][8] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][8] = valueForDocArr[j];
					}
					if ((fieldNameForDocArr[j] == "Degree Awarding Country" || fieldNameForDocArr[j] == "Degree awarding country") && document.getElementById('selectDegreeAwardingCountry').checked) {
						if (education[educationcount] && (education[educationcount][9] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][9] = valueForDocArr[j];
					}

					if (fieldNameForDocArr[j] == "Result Status" && document.getElementById('selectResultStatus').checked) {
						if (education[educationcount] && (education[educationcount][10] != null)) {
							educationcount++; education[educationcount] = new Array(11);
						}
						education[educationcount][10] = valueForDocArr[j];

						if (valueForDocArr[j].trim().toUpperCase() == ('Released').toUpperCase()) {

							Released = true;
							Pending = false;
							ProfQu = false;
						}

						if (valueForDocArr[j].trim().toUpperCase() == ('Pending').toUpperCase() && Released != true) {
							Pending = true;
						}


					}

					//NEW APPLICATION EDUCATION QULIFICATION FILETER
					if (!alreadyAddedEdu.includes(applicationNoForDocArr[i])) {
						for (let index = 0; index < eduRowLength; index++) {
							if (applicationNoForDocArr[i] == edu_application_no[index]) {
								alreadyAddedEdu.push(applicationNoForDocArr[i]);
								//START

								// University/Institute name
								if (education[educationcount] && (education[educationcount][0])) {
									educationcount++;
									education[educationcount] = new Array(11);
								}
								education[educationcount][0] = edu_university[index];

								//Qualification Type
								if (education[educationcount] && (education[educationcount][1] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								education[educationcount][1] = edu_qualification_type[index];



								// Specify the Qualification Category
								if (education[educationcount] && (education[educationcount][2] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								let qualiCat = "";
								if (edu_designator[index] != "" && edu_designator[index] != null && edu_designator[index] != "Other") {
									qualiCat += " " + edu_designator[index];
								}
								if (edu_qualifier[index] != "" && edu_qualifier[index] != null && edu_qualifier[index] != "Other") {
									qualiCat += " " + edu_qualifier[index];
								}
								education[educationcount][2] = qualiCat;

								// General/Special
								if (education[educationcount] && (education[educationcount][3] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								education[educationcount][3] = "";


								//Graduation Year
								if (education[educationcount] && (education[educationcount][4] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								education[educationcount][4] = edu_graduate_year[index];

								//Graduation Month
								if (education[educationcount] && (education[educationcount][5] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								education[educationcount][5] = edu_graduate_month[index];

								//GPA (If any)
								if (education[educationcount] && (education[educationcount][6] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								education[educationcount][6] = edu_gpa[index];


								// Class
								if (education[educationcount] && (education[educationcount][7] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								education[educationcount][7] = edu_class[index];

								// Duration (Years)
								if (education[educationcount] && (education[educationcount][8] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								education[educationcount][8] = edu_duration[index];

								//Degree Awarding Country
								if (education[educationcount] && (education[educationcount][9] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								education[educationcount][9] = edu_awarding_country[index];

								// Result Status
								if (education[educationcount] && (education[educationcount][10] != null)) {
									educationcount++; education[educationcount] = new Array(11);
								}
								education[educationcount][10] = edu_result_status[index];

								if (edu_result_status[index].trim().toUpperCase() == ('Released').toUpperCase()) {
									Released = true;
									Pending = false;
									ProfQu = false;
								}

								if (edu_result_status[index].trim().toUpperCase() == ('Pending').toUpperCase() && Released != true) {
									Pending = true;
								}



								//END


							}

						}
					}

					//professional
					if (fieldNameForDocArr[j] == "Qualification" && document.getElementById('selectQuali').checked) {
						if (professinal[professinalcount] && professinal[professinalcount][0] != null) {
							professinalcount++; professinal[professinalcount] = new Array(5);
						}
						professinal[professinalcount][0] = valueForDocArr[j];
						if (valueForDocArr[j] != '') {
							ProfQu = true;
							if (Released == true) {
								ProfQu = false;
							}
						}
					}
					if (fieldNameForDocArr[j] == "Qualification Level" && document.getElementById('selectQualiLevel').checked) {
						if (professinal[professinalcount] && professinal[professinalcount][1] != null) {
							professinalcount++; professinal[professinalcount] = new Array(5);
						}
						professinal[professinalcount][1] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "Awarding Authority" && document.getElementById('selectAwardAutho').checked) {
						if (professinal[professinalcount] && professinal[professinalcount][2] != null) {
							professinalcount++; professinal[professinalcount] = new Array(5);
						}
						professinal[professinalcount][2] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "Awarding Year" && document.getElementById('selectAwardYear').checked) {
						if (professinal[professinalcount] && professinal[professinalcount][3] != null) {
							professinalcount++; professinal[professinalcount] = new Array(5);
						}
						professinal[professinalcount][3] = valueForDocArr[j];
					}
					if (fieldNameForDocArr[j] == "Country" && document.getElementById('selectAwardingCountry').checked) {
						if (professinal[professinalcount] && professinal[professinalcount][4] != null) {
							professinalcount++; professinal[professinalcount] = new Array(5);
						}
						professinal[professinalcount][4] = valueForDocArr[j];
					}
					if (!alreadyAddedProf.includes(applicationNoForDocArr[i])) {
						for (let index = 0; index < profRowLength; index++) {
							if (applicationNoForDocArr[i] == prof_application_no[index]) {
								alreadyAddedProf.push(applicationNoForDocArr[i]);
								//Qualification
								if (professinal[professinalcount] && professinal[professinalcount][0] != null) {
									professinalcount++; professinal[professinalcount] = new Array(5);
								}
								professinal[professinalcount][0] = prof_qualification[index];
								if (prof_qualification[index] != '') {
									ProfQu = true;
									if (Released == true) {
										ProfQu = false;
									}
								}


								//Qualification Level
								if (professinal[professinalcount] && professinal[professinalcount][1] != null) {
									professinalcount++; professinal[professinalcount] = new Array(5);
								}
								professinal[professinalcount][1] = prof_qualification_level[index];
								

								// Awarding Authority
								if (professinal[professinalcount] && professinal[professinalcount][2] != null) {
									professinalcount++; professinal[professinalcount] = new Array(5);
								}
								professinal[professinalcount][2] = prof_awarding_authority[index];

								//Awarding Year
								if (professinal[professinalcount] && professinal[professinalcount][3] != null) {
									professinalcount++; professinal[professinalcount] = new Array(5);
								}
								professinal[professinalcount][3] = prof_awarding_year[index];

								//Country
								if (professinal[professinalcount] && professinal[professinalcount][4] != null) {
									professinalcount++; professinal[professinalcount] = new Array(5);
								}
								professinal[professinalcount][4] = prof_awarding_country[index];
							}
						}
					}

					j++;
				}


				maxRow = 0;
				if (work.length >= maxRow) {
					maxRow = work.length;
				}

				if (professinal.length >= maxRow) {
					maxRow = professinal.length;
				}

				if (education.length >= maxRow) {
					maxRow = education.length;
				}



				var newStr = "<tr style='border: 1px solid black;border-bottom: 2px dashed red;'>";
				newStr += "<td style='width:50px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'>" + rwcnt + "</td>";

				if (document.getElementById('selectApplicationNo').checked) {
					newStr += "<td style='width:150px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'>" + applicationNoForDocArr[i] + "</td>";
				}
				// if (personal[2]) {
				// 	newStr += "<td style='width:150px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'>" + personal[2] + "</td>";
				// } else {
				// 	newStr += "<td style='width:150px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'></td>";
				// }

				if (personal[2]) {
					newStr += "<td style='width:150px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'>" + personal[2] + "</td>";
				} else {
					newStr += "<td style='width:150px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'></td>";
				}


				if (personal[0]) {
					newStr += "<td style='width:150px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'>" + personal[0] + "</td>";
				} else {
					newStr += "<td style='width:150px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'></td>";
				}

				if (personal[1]) {
					newStr += "<td style='width:150px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'>" + personal[1] + "</td>";
				} else {
					newStr += "<td style='width:150px;padding-right:10px;text-align:center' rowspan='" + maxRow + "'></td>";
				}




				for (let index = 0; index < maxRow; index++) {

					if (index != 0) {
						newStr += "</tr>";
						newStr += "<tr style='border-left: 1px solid black;border-right: 1px solid black;border-top: 2px dashed red;'> ";
					}

					if (index <= educationcount) {
						for (let index2 = 0; index2 < 11; index2++) {
							if (education[index][index2] != null || education[index][index2] != undefined) {
								newStr += "<td rowspan='1' style='background-color:#EACEE6'>" + education[index][index2] + "</td>";
							} else {
								newStr += "<td rowspan='1' style='background-color:#EACEE6'></td>";
							}
						}
					} else {
						for (let index2 = 0; index2 < 11; index2++) {
							newStr += "<td rowspan='1' style='background-color:#EACEE6'></td>";
						}
					}

					if (index <= professinalcount) {
						for (let index2 = 0; index2 < 5; index2++) {
							if (professinal[index][index2] != null || professinal[index][index2] != undefined) {
								newStr += "<td rowspan='1' style='background-color:#DCE2C0'>" + professinal[index][index2] + "</td>";
							} else {
								newStr += "<td rowspan='1' style='background-color:#DCE2C0'></td>";
							}
						}
					} else {
						for (let index2 = 0; index2 < 5; index2++) {
							newStr += "<td rowspan='1' style='background-color:#DCE2C0'></td>";
						}
					}

					if (index <= workcount) {
						for (let index2 = 0; index2 < 5; index2++) {
							if (index2 == 4) {
								if (document.getElementById('selectFrom').checked && document.getElementById('selectTO').checked) {
									if (work[index] && work[index][2] != null && work[index][3] != null) {
										if (isValidDate(work[index][3]) && isValidDate(work[index][2])) {
											const dateFrom = new Date(work[index][3]);
											const dateTo = new Date(work[index][2]);
											// Calculate the difference
											const dateDifference = getDateDifference(dateFrom, dateTo);
											newStr += "<td rowspan='1' style='background-color:#EDB6A5'>" + dateDifference.years + " years, " + dateDifference.months + " months,  " + dateDifference.days + " days</td>";

										} else {
											newStr += "<td rowspan='1' style='background-color:#EDB6A5'></td>";

										}
									} else {
										newStr += "<td rowspan='1' style='background-color:#EDB6A5'></td>";
									}
								}
							} if (index2 == 5) {
								if (work[index][index2 - 1] != null || work[index][index2 - 1] != undefined) {
									newStr += "<td rowspan='1' style='background-color:#EDB6A5'>" + work[index][index2 - 1] + "</td>";
								} else {
									newStr += "<td rowspan='1' style='background-color:#EDB6A5'></td>";
								}
							} else {
								if (work[index][index2] != null || work[index][index2] != undefined) {
									newStr += "<td rowspan='1' style='background-color:#EDB6A5'>" + work[index][index2] + "</td>";
								} else {
									newStr += "<td rowspan='1' style='background-color:#EDB6A5'></td>";
								}
							}
						}
					} else {
						for (let index2 = 0; index2 <= 5; index2++) {
							if (index2 == 4) {
								if (document.getElementById('selectFrom').checked && document.getElementById('selectTO').checked) {
									newStr += "<td rowspan='1' style='background-color:#EDB6A5'></td>";
								}
							} else {
								newStr += "<td rowspan='1' style='background-color:#EDB6A5'></td>";
							}
						}
					}

					newStr += "</tr>";
				}


				i = j;
				com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
				vID = 'applicationNo1' + inum;
				AppNoArr[inum] = applicationNoForDocArr[i];
				newStr += "</tr>";
				inum++;


				if (type == "graduateList") {

					if (Released != true) {
						newStr = "";
					} else {

						rwcnt++;
						newstr1 += newStr;
					}
				} else if (type == "graduatePendingList") {
					if (Pending != true) {
						newStr = "";
					} else {
						rwcnt++;
						newstr1 += newStr;
					}
				} else if (type == "profQulificationList") {
					if (ProfQu != true) {
						newStr = "";
					} else {
						rwcnt++;
						newstr1 += newStr;
					}
				} else {
					rwcnt++;
					newstr1 += newStr;
				}

			}
		}

		// }
		newstr1 += "</table>";

	}


	// }


	// var csvData = new Array();

	// csvData.push(newstr1);
	let exportFilename = "Download Applicant List.xls"
	if (type == "graduateList") {
		exportFilename = "Download Graduate Applicant List.xls"
	} else if (type == "graduatePendingList") {
		exportFilename = "Download Graduate Pending Applicant List.xls"
	} else if (type == "profQulificationList") {
		exportFilename = "Download Professional Qualification Applicant List.xls"
	} else {
		exportFilename = "Download Applicant List.xls"
	}

	// console.log(newstr1);
	var csvData = new Blob([newstr1], { type: 'text/csv;charset=utf-8;' });
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

	// var fileName = "data.doc";
	// var buffer = csvData.join("\n");
	// var blob = new Blob([buffer], { type: "text/doc;charset=utf8;" });
	// var link = document.createElement("a");

	// if (link.download !== undefined) {
	// 	if (navigator.userAgent.indexOf("Firefox") != -1) {
	// 		link.setAttribute("href", window.URL.createObjectURL(blob));
	// 		link.setAttribute("download", fileName);
	// 	}
	// 	else {
	// 		link.href = URL.createObjectURL(blob);
	// 		link.download = fileName;
	// 		link.click();
	// 	}



	// }
	// else {
	// 	link.setAttribute("href", "http://www.example.com/export");
	// }
	// link.innerHTML = "";

	// if (navigator.userAgent.indexOf("Firefox") != -1) {
	// 	document.body.appendChild(link);
	// 	window.location.replace(link);
	// }



}

function getDateDifference(date1, date2) {
	const millisecondsInDay = 24 * 60 * 60 * 1000;

	// Calculate the difference in milliseconds
	const differenceInMilliseconds = Math.abs(date2 - date1);

	// Calculate years, months, and days
	const years = Math.floor(differenceInMilliseconds / (365.25 * millisecondsInDay));
	const remainingDays = differenceInMilliseconds % (365.25 * millisecondsInDay);
	const months = Math.floor(remainingDays / (30.44 * millisecondsInDay));
	const remainingDaysInMonth = remainingDays % (30.44 * millisecondsInDay);
	const days = Math.floor(remainingDaysInMonth / millisecondsInDay);

	return { years, months, days };
}

function getgraduatewithpendinglistEnglish()
//Released
{
	var count1 = 1;
	var Rcount = 1;
	var rwcnt = 1;

	var Pending = "";
	var newstr1 = "";
	var com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please Select a value from the select Box(s)");

	// }
	// else {
	var appNo = stdName = stdAdd = stdMob = stdEmail = "";
	var countSelectedRows = 0;
	for (i = 0; i < appverticalPinLength; i++) {
		if (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) || (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) != applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) && applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == i)) {
			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			countSelectedRows++;
			//}
		}
	}
	if (countSelectedRows == 0) {
		alert('There is no matching data');
	}
	else {
		// if (document.getElementById('selectedDocName').value == "Application List") {

		countviewSelectedList++;

		newstr1 = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newstr1 += "<div id='topics1' class='info'></div>";
		newstr1 += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + dataRep['selectedDegreeName'] + "- Application List</div>";
		newstr1 += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + dataRep['achedamicYear'] + "</div>";
		newstr1 += "<br>";

		newstr1 += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newstr1 += "<tr style='border: 1px solid black;'>";
		newstr1 += "<th style='border: 1px solid black;'>Row Count</th>";

		// education qualification
		if (document.getElementById('selectApplicationNo').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Application No</th>";
		}

		if (document.getElementById('selectStudentNumber').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Student No</th>";
		}

		
		// if (document.getElementById('selectTemporaryNo').checked) {
		// 	newstr1 += "<th style='border: 1px solid black;'>Temporary No</th>";
		// }
		if (document.getElementById('selectName').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Full Name</th>";
		}
		if (document.getElementById('selectNamewithInitials').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Name with Initials</th>";
		}
		if (document.getElementById('selectQualificationCategory').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Qualification Category</th>";
		}
		if (document.getElementById('selectGeneralSpecial').checked) {
			newstr1 += "<th style='border: 1px solid black;'>General/Special</th>";
		}
		if (document.getElementById('selectUniversityInstituteName').checked) {
			newstr1 += "<th style='border: 1px solid black;'>University/Institute Name</th>";
		}
		if (document.getElementById('selectQualificationType').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Qualification Type</th>";
		}
		if (document.getElementById('selectGraduationYear').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Graduation Year</th>";
		}
		if (document.getElementById('selectGraduationMonth').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Graduation Month</th>";
		}
		if (document.getElementById('selectGPA').checked) {
			newstr1 += "<th style='border: 1px solid black;'>GPA (If any)</th>";
		}
		if (document.getElementById('selectClass').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Class</th>";
		}
		if (document.getElementById('selectDuration').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Duration (Years)</th>";
		}
		if (document.getElementById('selectDegreeAwardingCountry').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Degree Awarding Country</th>";
		}

		if (document.getElementById('selectResultStatus').checked) {
			newstr1 += "<th style='border: 1px solid black;'>ResultStatus</th>";
		}
		// end of education qualification

		// professinal qualification
		if (document.getElementById('selectQuali').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Professional Qualification</th>";
		}
		if (document.getElementById('selectQualiLevel').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Professional Qualification Level</th>";
		}
		if (document.getElementById('selectAwardAutho').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Awarding Authority</th>";
		}
		if (document.getElementById('selectAwardYear').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Awarding Year</th>";
		}
		if (document.getElementById('selectAwardingCountry').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Awarding Country</th>";
		}

		// end of professional qualification 

		// work experience

		if (document.getElementById('selectCompanyInstituteOrganization').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Working Company/Institute/Organization</th>";
		}
		if (document.getElementById('selectDesignation').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Designation</th>";
		}
		if (document.getElementById('selectFrom').checked) {
			newstr1 += "<th style='border: 1px solid black;'>From</th>";
		}
		if (document.getElementById('selectTO').checked) {
			newstr1 += "<th style='border: 1px solid black;'>To</th>";
		}
		if (document.getElementById('selectCountry').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Country</th>";
		}

		// end the work experience  

		newstr1 += "</tr>";

		appNo = applicationNoForDocArr[0];

		var count01 = 1;
		var count02 = 1;
		var count03 = 1;
		var count04 = 1;
		var count05 = 1;
		var count06 = 1;
		var count07 = 1;
		var count08 = 1;
		var count09 = 1;
		var count10 = 1;
		var count11 = 1;
		var count12 = 1;
		var count13 = 1;
		var count14 = 1;
		var count15 = 1;
		var count16 = 1;
		var count17 = 1;
		var count18 = 1;
		var count19 = 1;
		var count20 = 1;
		var count21 = 1;

		for (i = 1; i < appverticalPinLength; i++) {
			//alert();

			if (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) || (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) != appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) && appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == i)) {

				var newStr = "<tr style='border: 1px solid black;'>";

				newStr += "<td style='width:50px;padding-right:10px;' align='center'><div class='investView'  name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";//
				newStr += rwcnt + "</div></td>";


				if (document.getElementById('selectApplicationNo').checked) {
					newStr += "<td style='width:150px;padding-right:10px;' align='center'><div  class='investView' style='width:150px;' name='applicationNo" + inum + "' id='applicationNo1" + inum + "' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
					newStr += applicationNoForDocArr[i] + "</div></td>";
				}
				j = i;
				while (applicationNoForDocArr[i] == applicationNoForDocArr[j]) {

					if (fieldNameForDocArr[j] == "studentNo") {
						if (document.getElementById('selectStudentNumber').checked) {
							newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentName" + inum + "' id='studentName" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
						}
					}

					if (fieldNameForDocArr[j] == "studentName") {
						if (document.getElementById('selectName').checked) {
							newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentName" + inum + "' id='studentName" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
						}
					}

					if (fieldNameForDocArr[j] == "studentInitial") {
						if (document.getElementById('selectNamewithInitials').checked) {
							newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentInitial" + inum + "' id='studentInitial" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
						}
					}
					// if (fieldNameForDocArr[j] == "temporaryNo") {
					// 	if (document.getElementById('selectTemporaryNo').checked) {
					// 		newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='temporaryNo" + inum + "' id='temporaryNo" + inum + "'";
					// 		newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
					// 	}
					// }

					else if (fieldNameForDocArr[j] == "Company/Institute/Organization") {


						if (count01 == 4) {
							com += valueForDocArr[j] + "<br>";
							count01 = 0;
						}
						else {
							com += valueForDocArr[j] + "<hr></hr>";
							count01++;
						}
					}

					else if (fieldNameForDocArr[j] == "Applicant Designation") {
						if (count02 == 4) {
							des += valueForDocArr[j] + "<br>";
							count02 = 0;
						}
						else {
							des += valueForDocArr[j] + "<hr></hr>";
							count02++;
						}


					}

					else if (fieldNameForDocArr[j] == "To") {

						if (count03 == 4) {
							varto += valueForDocArr[j] + "<br>";
							count03 = 0;
						}
						else {
							varto += valueForDocArr[j] + "<hr></hr>";
							count03++;
						}
					}
					else if (fieldNameForDocArr[j] == "From") {
						if (count04 == 4) {
							varfrom += valueForDocArr[j] + "<br>";
							count04 = 0;
						}
						else {
							varfrom += valueForDocArr[j] + "<hr></hr>";
							count04++;
						}

					}
					else if (fieldNameForDocArr[j] == "Country") {
						if (count05 == 4) {
							varcountry += valueForDocArr[j] + "<br>";
							count05 = 0;
						}
						else {
							varcountry += valueForDocArr[j] + "<hr></hr>";
							count05++;
						}

					}
					else if (fieldNameForDocArr[j] == "University/Institute Name" || fieldNameForDocArr[j] == "University/Institute name") {
						if (count06 == 4) {
							varUni += valueForDocArr[j];
							count06 = 0;
						}
						else {
							varUni += valueForDocArr[j] + "<hr></hr>";
							count06++;
						}
						//alert(varUni);
					}
					else if (fieldNameForDocArr[j] == "Qualification Type") {
						if (count07 == 4) {
							varQType += valueForDocArr[j] + "<br>";
							count07 = 0;
						}
						else {
							varQType += valueForDocArr[j] + "<hr></hr>";
							count07++;
						}

					}
					else if (fieldNameForDocArr[j] == "Specify the Qualification Category" || fieldNameForDocArr[j] == "Specify the Qualification category") {
						if (count08 == 4) {
							varQCat += valueForDocArr[j] + "<br>";
							count08 = 0;
						}
						else {
							varQCat += valueForDocArr[j] + "<hr></hr>";
							count08++;
						}

					}
					else if (fieldNameForDocArr[j] == "General/Special") {
						if (count09 == 4) {
							varGenSp += valueForDocArr[j] + "<br>";
							count09 = 0;
						}
						else {
							varGenSp += valueForDocArr[j] + "<hr></hr>";
							count09++;
						}

					}
					else if (fieldNameForDocArr[j] == "Graduation Year") {
						if (count10 == 4) {
							varGradYr += valueForDocArr[j] + "<br>";
							count10 = 0;
						}
						else {
							varGradYr += valueForDocArr[j] + "<hr></hr>";
							count10++;
						}

					}
					else if (fieldNameForDocArr[j] == "Graduation Month") {
						if (count11 == 4) {
							varGradMnt += valueForDocArr[j] + "<br>";
							count11 = 0;
						}
						else {
							varGradMnt += valueForDocArr[j] + "<hr></hr>";
							count11++;
						}

					}
					else if (fieldNameForDocArr[j] == "GPA (If any)") {
						if (count12 == 4) {
							vargpa += valueForDocArr[j] + "<br>";
							count12 = 0;
						}
						else {
							vargpa += valueForDocArr[j] + "<hr></hr>";
							count12++;
						}

					}
					else if (fieldNameForDocArr[j] == "Class") {
						if (count13 == 4) {
							varclass += valueForDocArr[j] + "<br>";
							count13 = 0;
						}
						else {
							varclass += valueForDocArr[j] + "<hr></hr>";
							count13++;
						}

					}
					else if (fieldNameForDocArr[j] == "Duration (Years)") {
						if (count14 == 4) {
							varDueYr += valueForDocArr[j] + "<br>";
							count14 = 0;
						}
						else {
							varDueYr += valueForDocArr[j] + "<hr></hr>";
							count14++;
						}

					}
					else if (fieldNameForDocArr[j] == "Degree Awarding Country" || fieldNameForDocArr[j] == "Degree awarding country") {
						if (count15 == 4) {
							varDegCountry += valueForDocArr[j] + "<br>";
							count15 = 0;
						}
						else {
							varDegCountry += valueForDocArr[j] + "<hr></hr>";
							count15++;
						}

					}

					else if (fieldNameForDocArr[j] == "Result Status") {
						if (valueForDocArr[j] == "Pending") {
							if (count16 == 4) {
								varResultStatus += valueForDocArr[j] + "<br>";
								count16 = 0;
							}
							else {
								varResultStatus += valueForDocArr[j] + "<hr></hr>";
								count16++;
							}
							Pending = "";
						}
						else {
							Pending = "true";
						}
					}
					// professinal qualification
					else if (fieldNameForDocArr[j] == "Qualification") {
						if (count17 == 4) {
							varProfQualifi += valueForDocArr[j] + "<br>";
							count17 = 0;
						}
						else {
							varProfQualifi += valueForDocArr[j] + "<hr></hr>";
							count17++;
						}

					}

					else if (fieldNameForDocArr[j] == "Qualification Level") {
						if (count18 == 4) {
							varProfQualifilevel += valueForDocArr[j] + "<br>";
							count18 = 0;
						}
						else {
							varProfQualifilevel += valueForDocArr[j] + "<hr></hr>";
							count18++;
						}

					}

					else if (fieldNameForDocArr[j] == "Awarding Authority") {
						if (count19 == 4) {
							varProfAwardingAuthority += valueForDocArr[j] + "<br>";
							count19 = 0;
						}
						else {
							varProfAwardingAuthority += valueForDocArr[j] + "<hr></hr>";
							count19++;
						}

					}
					else if (fieldNameForDocArr[j] == "Awarding Year") {
						if (count20 == 4) {
							varprofAwardingYear += valueForDocArr[j] + "<br>";
							count20 = 0;
						}
						else {
							varprofAwardingYear += valueForDocArr[j] + "<hr></hr>";
							count20++;
						}

					}


					else if (fieldNameForDocArr[j] == "Country") {
						if (count21 == 4) {
							varprofawardingCountry += valueForDocArr[j] + "<br>";
							count21 = 0;
						}
						else {
							varprofawardingCountry += valueForDocArr[j] + "<hr></hr>";
							count21++;
						}

					}

					// end of professional qualification

					j++;
				}

				// education qualification 
				if (Pending == "true") {
					com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
				}
				if (document.getElementById('selectQualificationCategory').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varQCat + "</div></td>";
				}
				if (document.getElementById('selectGeneralSpecial').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varGenSp + "</div></td>";
				}
				if (document.getElementById('selectUniversityInstituteName').checked) {
					newStr += "<td align='center'><div class='investView' style='width:150px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varUni + "</div></td>";
				}
				if (document.getElementById('selectQualificationType').checked) {
					newStr += "<td align='center'><div class='investView' style='width:150px;'  name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varQType + "</div></td>";
				}
				if (document.getElementById('selectGraduationYear').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varGradYr + "</div></td>";
				}
				if (document.getElementById('selectGraduationMonth').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varGradMnt + "</div></td>";
				}
				if (document.getElementById('selectGPA').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + vargpa + "</div></td>";
				}
				if (document.getElementById('selectClass').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varclass + "</div></td>";
				}
				if (document.getElementById('selectDuration').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varDueYr + "</div></td>";
				}

				if (document.getElementById('selectDegreeAwardingCountry').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varDegCountry + "</div></td>";
				}
				if (document.getElementById('selectResultStatus').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varResultStatus + "</div></td>";
				}
				// end of education qualification

				// professinal qualification

				if (document.getElementById('selectQuali').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varprofawardingCountry + "</div></td>";
				}
				if (document.getElementById('selectQualiLevel').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varprofAwardingYear + "</div></td>";
				}
				if (document.getElementById('selectAwardAutho').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varProfAwardingAuthority + "</div></td>";
				}
				if (document.getElementById('selectAwardYear').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varProfQualifilevel + "</div></td>";
				}
				if (document.getElementById('selectAwardingCountry').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varProfQualifi + "</div></td>";
				}
				// end of professional qualification


				// work experience

				if (document.getElementById('selectCompanyInstituteOrganization').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + com + "</div></td>";
				}
				if (document.getElementById('selectCompanyInstituteOrganization').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + des + "</div></td>";
				}
				if (document.getElementById('selectFrom').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varfrom + "</div></td>";
				}
				if (document.getElementById('selectTO').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varto + "</div></td>";
				}
				if (document.getElementById('selectCountry').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center';><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varcountry + "</div></td>";
				}

				// end the work experience

				i = j;
				com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
				vID = 'applicationNo1' + inum;
				AppNoArr[inum] = applicationNoForDocArr[i];
				newStr += "</tr>";
				//newStr +="</div>";  
				inum++;
				//Released		
				if (Pending == "true") {

					newStr = "";
				}
				else {

					rwcnt++;
					newstr1 += newStr;
				}
			}
		}

		// }
		newstr1 += "</table></br>";




	}


	// }


	var csvData = new Array();

	csvData.push(newstr1);
	// download stuff 
	var fileName = "data.doc";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], { type: "text/doc;charset=utf8;" });
	//new Blob([buffer], {
	//  "type": "text/doc;charset=utf8;"			  
	//});
	var link = document.createElement("a");

	if (link.download !== undefined) { // feature detection
		// Browsers that support HTML5 download attribute

		if (navigator.userAgent.indexOf("Firefox") != -1) {
			link.setAttribute("href", window.URL.createObjectURL(blob));
			link.setAttribute("download", fileName);

		}
		else {
			link.href = URL.createObjectURL(blob);
			link.download = fileName;
			link.click();
		}



	}
	else {
		// it needs to implement server side export
		link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";

	if (navigator.userAgent.indexOf("Firefox") != -1) {
		document.body.appendChild(link);
		window.location.replace(link);
	}



}



function getprofessionalcompletelistEnglish() {
	var count1 = 1;
	var Rcount = 1;
	var rwcnt = 1;
	//var Pending = "";
	var newstr1 = "";
	var prof = "";
	var com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
	// if (document.getElementById('selectedDocName').value == "Please scroll down to see the records" && document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

	// 	alert("Please Select a value from the select Box(s)");

	// }
	// else {
	var appNo = stdName = stdAdd = stdMob = stdEmail = "";
	var countSelectedRows = 0;
	for (i = 0; i < appverticalPinLength; i++) {
		if (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) || (applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) != applicationNoForDocArr.lastIndexOf(applicationNoForDocArr[i]) && applicationNoForDocArr.indexOf(applicationNoForDocArr[i]) == i)) {
			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
			countSelectedRows++;
			//}
		}
	}
	if (countSelectedRows == 0) {
		alert('There is no matching data');
	}
	else {
		// if (document.getElementById('selectedDocName').value == "Application List") {

		countviewSelectedList++;

		newstr1 = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newstr1 += "<div id='topics1' class='info'></div>";
		newstr1 += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + dataRep['selectedDegreeName'] + "- Application List</div>";
		newstr1 += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + dataRep['achedamicYear'] + "</div>";
		newstr1 += "<br>";

		newstr1 += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newstr1 += "<tr style='border: 1px solid black;'>";
		newstr1 += "<th style='border: 1px solid black;'>Row Count</th>";

		// education qualification
		if (document.getElementById('selectApplicationNo').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Application No</th>";
		}

		if (document.getElementById('selectStudentNumber').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Student No</th>";
		}
		
		// if (document.getElementById('selectTemporaryNo').checked) {
		// 	newstr1 += "<th style='border: 1px solid black;'>Temporary No</th>";
		// }

		if (document.getElementById('selectName').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Full Name</th>";
		}
		if (document.getElementById('selectNamewithInitials').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Name with Initials</th>";
		}
		if (document.getElementById('selectQualificationCategory').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Qualification Category</th>";
		}
		if (document.getElementById('selectGeneralSpecial').checked) {
			newstr1 += "<th style='border: 1px solid black;'>General/Special</th>";
		}
		if (document.getElementById('selectUniversityInstituteName').checked) {
			newstr1 += "<th style='border: 1px solid black;'>University/Institute Name</th>";
		}
		if (document.getElementById('selectQualificationType').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Qualification Type</th>";
		}
		if (document.getElementById('selectGraduationYear').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Graduation Year</th>";
		}
		if (document.getElementById('selectGraduationMonth').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Graduation Month</th>";
		}
		if (document.getElementById('selectGPA').checked) {
			newstr1 += "<th style='border: 1px solid black;'>GPA (If any)</th>";
		}
		if (document.getElementById('selectClass').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Class</th>";
		}
		if (document.getElementById('selectDuration').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Duration (Years)</th>";
		}
		if (document.getElementById('selectDegreeAwardingCountry').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Degree Awarding Country</th>";
		}

		if (document.getElementById('selectResultStatus').checked) {
			newstr1 += "<th style='border: 1px solid black;'>ResultStatus</th>";
		}
		// end of education qualification

		// professinal qualification
		if (document.getElementById('selectQuali').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Professional Qualification</th>";
		}
		if (document.getElementById('selectQualiLevel').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Professional Qualification Level</th>";
		}
		if (document.getElementById('selectAwardAutho').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Awarding Authority</th>";
		}
		if (document.getElementById('selectAwardYear').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Awarding Year</th>";
		}
		if (document.getElementById('selectAwardingCountry').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Awarding Country</th>";
		}

		// end of professional qualification 

		// work experience

		if (document.getElementById('selectCompanyInstituteOrganization').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Working Company/Institute/Organization</th>";
		}
		if (document.getElementById('selectDesignation').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Designation</th>";
		}
		if (document.getElementById('selectFrom').checked) {
			newstr1 += "<th style='border: 1px solid black;'>From</th>";
		}
		if (document.getElementById('selectTO').checked) {
			newstr1 += "<th style='border: 1px solid black;'>To</th>";
		}
		if (document.getElementById('selectCountry').checked) {
			newstr1 += "<th style='border: 1px solid black;'>Country</th>";
		}

		// end the work experience  

		newstr1 += "</tr>";

		appNo = applicationNoForDocArr[0];

		var count01 = 1;
		var count02 = 1;
		var count03 = 1;
		var count04 = 1;
		var count05 = 1;
		var count06 = 1;
		var count07 = 1;
		var count08 = 1;
		var count09 = 1;
		var count10 = 1;
		var count11 = 1;
		var count12 = 1;
		var count13 = 1;
		var count14 = 1;
		var count15 = 1;
		var count16 = 1;
		var count17 = 1;
		var count18 = 1;
		var count19 = 1;
		var count20 = 1;
		var count21 = 1;

		for (i = 1; i < appverticalPinLength; i++) {
			//alert();

			if (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) || (appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) != appverticalPinForDocArr.lastIndexOf(appverticalPinForDocArr[i]) && appverticalPinForDocArr.indexOf(appverticalPinForDocArr[i]) == i)) {

				var newStr = "<tr style='border: 1px solid black;'>";

				newStr += "<td style='width:50px;padding-right:10px;' align='center'><div class='investView'  name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";//
				newStr += rwcnt + "</div></td>";


				if (document.getElementById('selectApplicationNo').checked) {
					newStr += "<td style='width:150px;padding-right:10px;' align='center'><div  class='investView' style='width:150px;' name='applicationNo" + inum + "' id='applicationNo1" + inum + "' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
					newStr += applicationNoForDocArr[i] + "</div></td>";
				}
				j = i;
				while (applicationNoForDocArr[i] == applicationNoForDocArr[j]) {

					if (fieldNameForDocArr[j] == "studentNo") {
						if (document.getElementById('selectStudentNumber').checked) {
							newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentName" + inum + "' id='studentName" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
						}
					}
					
					if (fieldNameForDocArr[j] == "studentName") {
						if (document.getElementById('selectName').checked) {
							newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentName" + inum + "' id='studentName" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
						}
					}

					if (fieldNameForDocArr[j] == "studentInitial") {
						if (document.getElementById('selectNamewithInitials').checked) {
							newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='studentInitial" + inum + "' id='studentInitial" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
						}
					}

					// if (fieldNameForDocArr[j] == "temporaryNo") {
					// 	if (document.getElementById('selectTemporaryNo').checked) {
					// 		newStr += "<td style='width:150px;padding-right:10px;' align='center'><div class='investView' name='temporaryNo" + inum + "' id='temporaryNo" + inum + "'";
					// 		newStr += " onchange='dataRep[this.name]=this.value;'>" + valueForDocArr[j] + "</div></td>";
					// 	}
					// }

					else if (fieldNameForDocArr[j] == "Company/Institute/Organization") {


						if (count01 == 4) {
							com += valueForDocArr[j] + "<br>";
							count01 = 0;
						}
						else {
							com += valueForDocArr[j] + "<hr></hr>";
							count01++;
						}
					}

					else if (fieldNameForDocArr[j] == "Applicant Designation") {
						if (count02 == 4) {
							des += valueForDocArr[j] + "<br>";
							count02 = 0;
						}
						else {
							des += valueForDocArr[j] + "<hr></hr>";
							count02++;
						}


					}

					else if (fieldNameForDocArr[j] == "To") {

						if (count03 == 4) {
							varto += valueForDocArr[j] + "<br>";
							count03 = 0;
						}
						else {
							varto += valueForDocArr[j] + "<hr></hr>";
							count03++;
						}
					}
					else if (fieldNameForDocArr[j] == "From") {
						if (count04 == 4) {
							varfrom += valueForDocArr[j] + "<br>";
							count04 = 0;
						}
						else {
							varfrom += valueForDocArr[j] + "<hr></hr>";
							count04++;
						}

					}
					else if (fieldNameForDocArr[j] == "Country") {
						if (count05 == 4) {
							varcountry += valueForDocArr[j] + "<br>";
							count05 = 0;
						}
						else {
							varcountry += valueForDocArr[j] + "<hr></hr>";
							count05++;
						}

					}
					else if (fieldNameForDocArr[j] == "University/Institute Name" || fieldNameForDocArr[j] == "University/Institute name") {
						if (count06 == 4) {
							varUni += valueForDocArr[j];
							count06 = 0;
						}
						else {
							varUni += valueForDocArr[j] + "<hr></hr>";
							count06++;
						}
						//alert(varUni);
					}
					else if (fieldNameForDocArr[j] == "Qualification Type") {
						if (count07 == 4) {
							varQType += valueForDocArr[j] + "<br>";
							count07 = 0;
						}
						else {
							varQType += valueForDocArr[j] + "<hr></hr>";
							count07++;
						}

					}
					else if (fieldNameForDocArr[j] == "Specify the Qualification Category" || fieldNameForDocArr[j] == "Specify the Qualification category") {
						if (count08 == 4) {
							varQCat += valueForDocArr[j] + "<br>";
							count08 = 0;
						}
						else {
							varQCat += valueForDocArr[j] + "<hr></hr>";
							count08++;
						}

					}
					else if (fieldNameForDocArr[j] == "General/Special") {
						if (count09 == 4) {
							varGenSp += valueForDocArr[j] + "<br>";
							count09 = 0;
						}
						else {
							varGenSp += valueForDocArr[j] + "<hr></hr>";
							count09++;
						}

					}
					else if (fieldNameForDocArr[j] == "Graduation Year") {
						if (count10 == 4) {
							varGradYr += valueForDocArr[j] + "<br>";
							count10 = 0;
						}
						else {
							varGradYr += valueForDocArr[j] + "<hr></hr>";
							count10++;
						}

					}
					else if (fieldNameForDocArr[j] == "Graduation Month") {
						if (count11 == 4) {
							varGradMnt += valueForDocArr[j] + "<br>";
							count11 = 0;
						}
						else {
							varGradMnt += valueForDocArr[j] + "<hr></hr>";
							count11++;
						}

					}
					else if (fieldNameForDocArr[j] == "GPA (If any)") {
						if (count12 == 4) {
							vargpa += valueForDocArr[j] + "<br>";
							count12 = 0;
						}
						else {
							vargpa += valueForDocArr[j] + "<hr></hr>";
							count12++;
						}

					}
					else if (fieldNameForDocArr[j] == "Class") {
						if (count13 == 4) {
							varclass += valueForDocArr[j] + "<br>";
							count13 = 0;
						}
						else {
							varclass += valueForDocArr[j] + "<hr></hr>";
							count13++;
						}

					}
					else if (fieldNameForDocArr[j] == "Duration (Years)") {
						if (count14 == 4) {
							varDueYr += valueForDocArr[j] + "<br>";
							count14 = 0;
						}
						else {
							varDueYr += valueForDocArr[j] + "<hr></hr>";
							count14++;
						}

					}
					else if (fieldNameForDocArr[j] == "Degree Awarding Country" || fieldNameForDocArr[j] == "Degree awarding country") {
						if (count15 == 4) {
							varDegCountry += valueForDocArr[j] + "<br>";
							count15 = 0;
						}
						else {
							varDegCountry += valueForDocArr[j] + "<hr></hr>";
							count15++;
						}

					}

					else if (fieldNameForDocArr[j] == "Result Status") {

						if (count16 == 4) {
							varResultStatus += valueForDocArr[j] + "<br>";
							count16 = 0;
						}
						else {
							varResultStatus += valueForDocArr[j] + "<hr></hr>";
							count16++;
						}

					}
					// professinal qualification
					else if (fieldNameForDocArr[j] == "Qualification") {
						if (count17 == 4) {
							varProfQualifi += valueForDocArr[j] + "<br>";
							count17 = 0;
						}
						else {
							varProfQualifi += valueForDocArr[j] + "<hr></hr>";
							count17++;
						}
						prof = "true";
					}

					else if (fieldNameForDocArr[j] == "Qualification Level") {
						if (count18 == 4) {
							varProfQualifilevel += valueForDocArr[j] + "<br>";
							count18 = 0;
						}
						else {
							varProfQualifilevel += valueForDocArr[j] + "<hr></hr>";
							count18++;
						}

					}

					else if (fieldNameForDocArr[j] == "Awarding Authority") {
						if (count19 == 4) {
							varProfAwardingAuthority += valueForDocArr[j] + "<br>";
							count19 = 0;
						}
						else {
							varProfAwardingAuthority += valueForDocArr[j] + "<hr></hr>";
							count19++;
						}

					}
					else if (fieldNameForDocArr[j] == "Awarding Year") {
						if (count20 == 4) {
							varprofAwardingYear += valueForDocArr[j] + "<br>";
							count20 = 0;
						}
						else {
							varprofAwardingYear += valueForDocArr[j] + "<hr></hr>";
							count20++;
						}

					}


					else if (fieldNameForDocArr[j] == "Country") {
						if (count21 == 4) {
							varprofawardingCountry += valueForDocArr[j] + "<br>";
							count21 = 0;
						}
						else {
							varprofawardingCountry += valueForDocArr[j] + "<hr></hr>";
							count21++;
						}

					}

					// end of professional qualification

					j++;
				}

				// education qualification 
				if (prof != "true") {
					com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
				}
				if (document.getElementById('selectQualificationCategory').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varQCat + "</div></td>";
				}
				if (document.getElementById('selectGeneralSpecial').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varGenSp + "</div></td>";
				}
				if (document.getElementById('selectUniversityInstituteName').checked) {
					newStr += "<td align='center'><div class='investView' style='width:150px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varUni + "</div></td>";
				}
				if (document.getElementById('selectQualificationType').checked) {
					newStr += "<td align='center'><div class='investView' style='width:150px;'  name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varQType + "</div></td>";
				}
				if (document.getElementById('selectGraduationYear').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varGradYr + "</div></td>";
				}
				if (document.getElementById('selectGraduationMonth').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varGradMnt + "</div></td>";
				}
				if (document.getElementById('selectGPA').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + vargpa + "</div></td>";
				}
				if (document.getElementById('selectClass').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varclass + "</div></td>";
				}
				if (document.getElementById('selectDuration').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varDueYr + "</div></td>";
				}

				if (document.getElementById('selectDegreeAwardingCountry').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varDegCountry + "</div></td>";
				}
				if (document.getElementById('selectResultStatus').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varResultStatus + "</div></td>";
				}
				// end of education qualification

				// professinal qualification

				if (document.getElementById('selectQuali').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varprofawardingCountry + "</div></td>";
				}
				if (document.getElementById('selectQualiLevel').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varprofAwardingYear + "</div></td>";
				}
				if (document.getElementById('selectAwardAutho').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varProfAwardingAuthority + "</div></td>";
				}
				if (document.getElementById('selectAwardYear').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varProfQualifilevel + "</div></td>";
				}
				if (document.getElementById('selectAwardingCountry').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varProfQualifi + "</div></td>";
				}
				// end of professional qualification


				// work experience

				if (document.getElementById('selectCompanyInstituteOrganization').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + com + "</div></td>";
				}
				if (document.getElementById('selectCompanyInstituteOrganization').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + des + "</div></td>";
				}
				if (document.getElementById('selectFrom').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varfrom + "</div></td>";
				}
				if (document.getElementById('selectTO').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varto + "</div></td>";
				}
				if (document.getElementById('selectCountry').checked) {
					newStr += "<td style='width:150px;word-wrap:break-word;padding-right:10px;' align='center';><div class='investView' style='width:200px;' name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + varcountry + "</div></td>";
				}

				// end the work experience

				i = j;
				com = des = varto = varfrom = varcountry = varGradMnt = varGradYr = varGenSp = varQCat = varQType = varUni = vargpa = varclass = varDegCountry = varDueYr = varResultStatus = varProfQualifi = varProfQualifilevel = varProfAwardingAuthority = varprofAwardingYear = varprofawardingCountry = "";
				vID = 'applicationNo1' + inum;
				AppNoArr[inum] = applicationNoForDocArr[i];
				newStr += "</tr>";
				//newStr +="</div>";  
				inum++;
				//Released		
				if (prof != "true") {

					newStr = "";

				}
				else {

					rwcnt++;
					newstr1 += newStr;
					prof = "";
				}
			}
		}

		// }
		newstr1 += "</table></br>";




	}


	// }


	var csvData = new Array();

	csvData.push(newstr1);
	// download stuff 
	var fileName = "data.doc";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], { type: "text/doc;charset=utf8;" });
	//new Blob([buffer], {
	//  "type": "text/doc;charset=utf8;"			  
	//});
	var link = document.createElement("a");

	if (link.download !== undefined) { // feature detection
		// Browsers that support HTML5 download attribute

		if (navigator.userAgent.indexOf("Firefox") != -1) {
			link.setAttribute("href", window.URL.createObjectURL(blob));
			link.setAttribute("download", fileName);

		}
		else {
			link.href = URL.createObjectURL(blob);
			link.download = fileName;
			link.click();
		}



	}
	else {
		// it needs to implement server side export
		link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";

	if (navigator.userAgent.indexOf("Firefox") != -1) {
		document.body.appendChild(link);
		window.location.replace(link);
	}




}



function btndownloaddisable() {
	//document.getElementById("btndownload11").style.display="none";
	document.getElementById("ESinhala").disabled = true;

}

