dataRep["IssueDate"] = "";
dataRep["ExpireDate"] = "";
dataRep["Registration"] = "";
var idate, edate;

var countId = 0;


function DataTableForPreRegisterdStudentList() {

	var buttons = [];

	buttons.push({
		text: 'Download List - Word',
		className: 'btn btn-primary',
		action: function (e, dt, node, config) {
			getAllRegStudentList2('w');
		}
	});

	buttons.push({
		text: 'Download List - Excel',
		className: 'btn btn-primary',
		action: function (e, dt, node, config) {
			getAllRegStudentList2('e');
		}
	});

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator'
		|| dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar'
		|| dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Subject Clerk'
		|| dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
		buttons.push({
			text: 'Send SMS',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				const mobileNumber = [];
				table.rows().every(function (index) {
					// Get the data for the current row
					var rowData = this.data();
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						if (mobileNumberValid(studentContactMobileArr[index]) != 0) {
							mobileNumber.push(studentContactMobileArr[index]);
						} else if (mobileNumberValid(studentContactLanArr[index]) != 0) {
							mobileNumber.push(studentContactLanArr[index]);
						}
					}
				});

				openInputDialogBulkSMS(mobileNumber);
			}
		});

		buttons.push({
			text: 'Send Bulk Email',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				const email = [];
				table.rows().every(function (index) {
					// Get the data for the current row
					var rowData = this.data();
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						if (emailValid(studentContactEmailArr[index])) {
							email.push(studentContactEmailArr[index]);
						}
					}
				});
				console.log(email)
				openInputBulkEmail(email);
			}
		});

	}

	var table = $('#regStudentTable').DataTable({
		dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
			"<'row'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
			"<'row'<'col-12't>>" + // Table in a single line
			"<'row'<'col-12 col-md-6'i><'col-12 col-md-6'p>>", // Processing display element right, pagination right
		buttons: buttons,
		"language": {
			"lengthMenu": "Display _MENU_ applicants per page",
			"zeroRecords": "Applicants not found. please select valid program and year",
			// "info": "Found _MAX_ Applicants",
			"info": "Showing page _PAGE_ of _PAGES_ | Total Student : _MAX_ | ",
			"infoEmpty": "",
			"infoFiltered": "(filtered from _MAX_ total records)",
			"sSearch": "Find Student: "
		},
		"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
		columnDefs: [{
			targets: 0,
			orderable: false,
			searchable: false,
			className: 'selectall-checkbox',
		},		
		],
		select: {
			style: 'multi',
			selector: 'td:first-child',
		},
		order: [1, 'asc'],
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
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
				}
			}
		} else {
			table.rows().deselect();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", false);
				}
			}
		}

		e.stopPropagation();
	});

}












function formPreRegStudent(dsp) {
	str = "";
	title = "Pre-Registered Student(s) List (Selected but not paid)";

	if (dsp == "formPreRegStudent") {
		if (dataRep["UserAR"] == "Assistant Registrar") {
			dataRep['roleName'] = 'Assistant Registrar';
		}
		if (dataRep['medium']) {
			md = dataRep['medium']
		}

		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;padding: 10px;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';


		str += "<div id='addPrintStudentID'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		str += '<div class="form-group row"><div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterStudentID1new();">';
		str += '</select>';
		str += '</div></div>';


		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">'
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-4" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterStudentID1new();">';
		let dateToday = new Date().getFullYear();
		for (i = 2014; i <= dateToday + 2; i++) {
			if (i == dateToday + 2) {
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

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 MediumRadioFullBox"><div class="row" style="padding-left: 10px;">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r" style="padding-top: 10px;">Medium </label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10" style=""><div class="row">';
		str += "<div class='col-12 col-sm-12 col-md-12 col-lg-8 col-xl-5'>";
		str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();filterStudentID1new()' " + mediumSinhalaChecked + ">Sinhala<i class='input-helper'></i></label></div>";
		str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();filterStudentID1new()' " + mediumEnglishChecked + ">English<i class='input-helper'></i></label></div></div>";
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-7"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterStudentID1new();">View List</button></div>';

		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '</div></div>';
		str += '</div></div></div>';






		// str += '<div class="col-sm-4">'
		// str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterStudentID1new();">View List</button>';
		// str += '</div>';
		// str += '</div></div>';
		// str += '</div></div></div>';



		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="regStudentTable">';
		str += '<thead><tr>';
		str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		str += '<th>Student Name</th>';
		str += '<th>Student Reg. No</th>';
		str += '<th>NIC</th>';
		str += '<th>Email</th>';
		str += '<th>Mobile</th>';
		str += '<th>Lan</th>';
		str += '<th>Applciaiton Fee</th>';

		str += '</tr></thead>';
		str += '<tbody>';

		if (studentNoLength > 0) {

			count = 0;
			for (i = 0; i < studentNoLength; i++) {
				if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {
					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
						str += '<tr>';
						commDate = coursecommenceArr[i];
						duration = durationArr[i];
						if (durationArr[i].substring(0, 1) == "1") {
							duration = 1;
						}
						if (durationArr[i].substring(0, 1) == "2") {
							duration = 2;
						}
						if (durationArr[i].substring(0, 1) == "3") {
							duration = 3;
						}
						if (durationArr[i].substring(0, 2) == "1-2") {
							duration = 2;
						}
						registeredChecked = '';

						var checkBoxDivIdRegistered = 'checkRegistered' + i;
						if (document.getElementById(checkBoxDivIdRegistered)) {
							if (document.getElementById(checkBoxDivIdRegistered).checked) {
								registeredChecked = 'checked';
							}
						}

						str += "<td><input type='checkbox' " + registeredChecked + "  id='checkRegistered" + i + "' name='checkRegistered" + i + "''/></td>";
						str += '<td>' + studentInitialArr[i] + '</td>';
						str += '<td>' + studentNoArr[i] + '</td>';
						str += '<td>' + studentNICArr[i] + '</td>';
						str += '<td>' + studentContactEmailArr[i] + '</td>';
						str += '<td>' + studentContactMobileArr[i] + '</td>';
						str += '<td>' + studentContactLanArr[i] + '</td>';
						str += '<td>' + applicationFeeArr[i] + '</td>';
						str += '</tr>';

						inum++;
						rwcnt++;

					}
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
	return str;
}

function filterStudentID1new() {
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		// alert("Please Select a value from the select Box(s)");
	} else {
		dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
		dataRep["selectedMedium"] = md;

		sendForm("data4PreRegStudent");
	}



}

function AddRowColorsid(x, _this) {
	//	 if (y.checked)
	//    x.style.backgroundColor = '#0000FF';
	// else
	//    x.style.backgroundColor = '#FF0000';
	if (countId == 1) {
		countId = 0;
		x.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';

	}
	else {
		countId++;
		x.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';

	}

	//alert(x);
}

function Select6() {
	for (i = 0; i < studentNoLength; i++) {
		var checkBoxDivIdRegistered = 'checkRegistered' + i;
		if (document.getElementById(checkBoxDivIdRegistered)) {
			document.getElementById(checkBoxDivIdRegistered).checked = true;
			document.getElementById("select-all").disabled = true;
			document.getElementById("select-non").disabled = false;

			//for( x=0; x<studentNoLength; x++){

			//if(studentNoArr.indexOf(studentNoArr[x]) == studentNoArr.lastIndexOf(studentNoArr[x]) || (studentNoArr.indexOf(studentNoArr[x]) != studentNoArr.lastIndexOf(studentNoArr[x]) && studentNoArr.indexOf(studentNoArr[x])==x)){

			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[x] & document.getElementById('achedamicYear').value==achedamicYearArr[x]){	
			var nam = "Alist";
			nam += i;
			if (countId == 1) {
				countId = 0;
				document.getElementById(nam).style.backgroundColor = '#d0d0fb';

			}
			else {
				countId++;
				document.getElementById(nam).style.backgroundColor = '#e7e7fd';

			}
			//alert(nam);

			//}
			//}
			//}
		}
	}
}

function Unselect6() {
	for (i = 0; i < studentNoLength; i++) {
		var checkBoxDivIdRegistered = 'checkRegistered' + i;
		if (document.getElementById(checkBoxDivIdRegistered)) {
			document.getElementById(checkBoxDivIdRegistered).checked = false;
			document.getElementById("select-all").disabled = false;
			document.getElementById("select-non").disabled = true;
			//for( var x=0; x<applicationNoLength; x++){

			//if (applicationNoArr.indexOf(applicationNoArr[x]) == applicationNoArr.lastIndexOf(applicationNoArr[x]) || (applicationNoArr.indexOf(applicationNoArr[x]) != applicationNoArr.lastIndexOf(applicationNoArr[x]) && applicationNoArr.indexOf(applicationNoArr[x])==x)){

			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[x] & document.getElementById('achedamicYear').value==achedamicYearArr[x] ){
			var nam = "Alist";
			nam += i;
			if (countId == 1) {
				countId = 0;
				document.getElementById(nam).style.backgroundColor = '#FDFDFD';

			}
			else {
				countId++;
				document.getElementById(nam).style.backgroundColor = '#FDFDFD';

			}
			//alert(nam);

			//}
			//}
			//}
		}
	}

}

function printStudentID() {

	var gtDiv = "";
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

		alert("Please get the proper list of data before print the list");
	}
	else {

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

					commDate = coursecommenceArr[i];
					duration = durationArr[i];
					if (durationArr[i].substring(0, 1) == "1") {
						duration = 1;
					}
					if (durationArr[i].substring(0, 1) == "2") {
						duration = 2;
					}
					if (durationArr[i].substring(0, 1) == "3") {
						duration = 3;
					}
					if (durationArr[i].substring(0, 2) == "1-2") {
						duration = 2;
					}

					//if(document.getElementById('registered'+i).checked == true){

					gtDiv += '<table width="752" border="1" cellpadding="0">';
					gtDiv += '<tr>';
					gtDiv += '<td width="275" height="225"><table width="391" border="0" cellpadding="0">';
					gtDiv += '<tr>';
					gtDiv += '<td bgcolor="#4B0A0A" width="70"><h>';
					gtDiv += '<img src="img/logoid.gif"  alt="" width="70" height="64" align="left"/></td>';

					// gtDiv+='<td bgcolor="#780C20" colspan="2" style="color: #F5D878; font-size: small;"><p align="center"><strong>University of Kelaniya</strong> <br>Faculty of Graduate  Studies<br/>';
					// gtDiv+='<strong><br>Student  Identification Card<br/></strong></p>';

					gtDiv += '<td bgcolor="#430102" colspan="2">';
					gtDiv += '<img src="img/h1logo.jpg"  alt="" width="318" height="62" align="left"/></td>';

					// gtDiv+='<tr>';
					// gtDiv+='<td bgcolor="#780C20" colspan="2" style="text-align: center;color: #F5D878; font-size: small;">Faculty of Graduate  Studies</td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td bgcolor="#780C20" colspan="2" style="text-align: center;color: #F5D878; font-size: small;"><strong>Student  Identification Card</strong></td>';
					// gtDiv+='</tr>';

					gtDiv += '</td></tr>';
					gtDiv += '<tr>';
					gtDiv += '<td height="87" rowspan="3"><img src="pic/' + studentNICArr[i] + '.jpg" width="70" height="85"  alt=""/></td>';

					gtDiv += '<td height="26" colspan="2" style="font-size: medium">Name : ' + studentPersonalTitleArr[i] + '. ' + studentInitialArr[i] + '<br></td>';
					gtDiv += '</tr>';
					gtDiv += '<tr>';
					gtDiv += '<td height="28" colspan="2" style="font-size: medium">Student No: ' + studentNoArr[i] + ' </td>';
					gtDiv += '</tr>';
					gtDiv += '<tr>';
					var endy = (commDate.split("-", 3)[commDate.split("-", 3).length - 3]);
					var endm = (commDate.split("-", 3)[commDate.split("-", 3).length - 2]);
					var endd = (commDate.split("-", 3)[commDate.split("-", 3).length - 1]);
					endy = parseInt(endy) + duration;
					endd = parseInt(endd)-01;
					var EndDate = endy + "-" + endm + "-" + endd;


					// gtDiv+='<td colspan="2" style="font-size: medium">Date of Expiry: '+EndDate+'</td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';

					if (document.getElementById('selectedDegreeName').value == "MA in Buddhist Studies One Year" & document.getElementById('achedamicYear').value == "2017") {
						gtDiv += '<td colspan="2" style="font-size: medium">Date of Expiry: 2018-03-31</td>';
						gtDiv += '</tr>';
						gtDiv += '<tr>';
					}
					else if (document.getElementById('selectedDegreeName').value == "Master of Business Management in Marketing" & document.getElementById('achedamicYear').value == "2018") {
						gtDiv += '<td colspan="2" style="font-size: medium">Date of Expiry: 2020-11-31</td>';
						gtDiv += '</tr>';
						gtDiv += '<tr>';
					}
					else {
						gtDiv += '<td colspan="2" style="font-size: medium">Date of Expiry: ' + EndDate + '</td>';
						gtDiv += '</tr>';
						gtDiv += '<tr>';
					}







					//var file = <img src="studentPhotos/sig/S'+studentNICArr[i]+'.jpg"'>;

					//if(/.+\.(jpg|jpeg|png|gif)$/i.test(file)){
					gtDiv += '<td colspan="2"><img src="sig/S' + studentNICArr[i] + '.jpg" width="90" height="60"  alt=""/>';
					//	}
					//else{
					//gtDiv+='<td colspan="2"><img src="studentPhotos/sig/S'+studentNICArr[i]+'.jpg" width="90" height="60"  alt=""/>';
					//}

					gtDiv += '</td>';

					gtDiv += '<td width="153"><img src="studentPhotos/sar.jpg" width="90" height="60"  alt=""/>';
					gtDiv += '</td>';
					gtDiv += '</tr>';
					gtDiv += '<tr>';

					gtDiv += "<td height='30' colspan='2'><span style='font-size: small'>Student's Signature</span></td>";

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
					gtDiv += '<td style="font-size: small">' + coursecommenceArr[i] + '</td>';
					gtDiv += '</tr>';
					gtDiv += '<tr>';

					var dd = new Date();
					var d = dd.getUTCDate();
					var m = dd.getUTCMonth();
					var y = dd.getUTCFullYear();
					var mn = m + 1;
					var currentdate = y + "-" + mn + "-" + d;

					gtDiv += '<td><p style="font-size: small"> Date of Issue : </p></td>';
					gtDiv += '<td style="font-size: small">' + currentdate + '</td>';
					gtDiv += '</tr>';
					gtDiv += '<tr>';
					gtDiv += '<td height="100" colspan="2" style="font-size: small"> This ID card is a property of the University of Kelaniya, Sri Lanka. On termination of the  studentship, this card should be handed over to the Faculty of Graduate  Studies. </td>';
					gtDiv += '</tr>';
					gtDiv += '</table></td>';
					gtDiv += '</tr>';
					gtDiv += '</table>';

					gtDiv += '<p></P>';
					gtDiv += '<p>--</P>';
					// gtDiv+='<table width="723" border="1" cellpadding="0">';
					// gtDiv+='<tr>';
					// gtDiv+='<td width="274" height="225"><table width="361" border="0" cellpadding="0">';
					// gtDiv+='<tr>';
					// gtDiv+='<td bgcolor="#780C20" width="70" rowspan="3"><h>';
					// gtDiv+='<img src="img/logo.gif"  alt="" width="61" height="62" align="left"/></td>';
					// gtDiv+='<td bgcolor="#780C20" colspan="2" style="color: #F5D878;text-align: center;font-size: small;"><p align="center"><strong>University of Kelaniya</strong><br>';
					// gtDiv+='</p></td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td bgcolor="#780C20" colspan="2" style="border-color:#F5D878;color: #F5D878;text-align: center;font-size: small;">Faculty of Graduate  Studies</td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td bgcolor="#780C20" colspan="2" style="color: #F5D878;text-align: center;font-size: small;"><strong>Student  Identification Card</strong></td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td height="87" rowspan="3"><img src="studentPhotos/Diploma in Business/922723346V.jpg" width="70" height="79"  alt=""/></td>';
					// gtDiv+='<td height="26" colspan="2" style="font-size: small">Name : ' +studentInitialArr[i]+'<br></td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td height="28" colspan="2" style="font-size: small">Student No: ' +studentNoArr[i]+' </td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td colspan="2" style="font-size: small">Date of Expire: 14.11.2015</td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td colspan="2"><img src="studentPhotos/sar.jpg" width="90" height="60"  alt=""/>';
					// gtDiv+='</td>';
					// gtDiv+='<td width="153"><img src="studentPhotos/sar.jpg" width="90" height="60"  alt=""/>';
					// gtDiv+='</td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td height="30" colspan="2"><span style="font-size: x-small">Student&rsquo;s  Signature  </span></td>';
					// gtDiv+='<td width="153"><span style="font-size: x-small">Senior Assistant Registrar Faculty of Graduate Studies</span></td>';
					// gtDiv+='</tr>';
					// gtDiv+='</table></td>';
					// gtDiv+='<td width="292"><table width="361" height="254" border="0" cellpadding="0">';
					// gtDiv+='<tr>';
					// gtDiv+='<td height="55" style="font-size: small">National Identicard  No : </td>';
					// gtDiv+='<td style="font-size: small">' +studentNICArr[i]+'</td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td width="134" style="font-size: small">Address :</td>';
					// gtDiv+='<td width="150" style="font-size: small">' +studentPermanentAddressArr[i]+'</td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td><p style="font-size: small">Date of Registration : </p></td>';
					// gtDiv+='<td style="font-size: small">14.11.2015</td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td><p style="font-size: small">Date of Issued : </p></td>';
					// gtDiv+='<td style="font-size: small">14.11.2015</td>';
					// gtDiv+='</tr>';
					// gtDiv+='<tr>';
					// gtDiv+='<td height="100" colspan="2" style="font-size: x-small">This card is the  property of the University of Kelaniya, Sri Lanka. On termination of the  studentship, this card should be handed over to the Faculty of graduate  studies. </td>';
					// gtDiv+='</tr>';
					// gtDiv+='</table></td>';
					// gtDiv+='</tr>';
					// gtDiv+='</table>';

					//}
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

}


function printSelectedStudentID() {

	var gtDiv = "";
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

		alert("Please get the proper list of data before print the list");
	}
	else {

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					if (document.getElementById('checkRegistered' + i)) {
						if (document.getElementById('checkRegistered' + i).checked == true) {

							commDate = coursecommenceArr[i];
							duration = durationArr[i];
							if (durationArr[i].substring(0, 1) == "1") {
								duration = 1;
							}
							if (durationArr[i].substring(0, 1) == "2") {
								duration = 2;
							}
							if (durationArr[i].substring(0, 1) == "3") {
								duration = 3;
							}
							if (durationArr[i].substring(0, 2) == "1-2") {
								duration = 2;
							}


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
							gtDiv += '<td height="28" colspan="2" style="font-size: medium">Student No: ' + studentNoArr[i] + ' </td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';
							var endy = (commDate.split("-", 3)[commDate.split("-", 3).length - 3]);
							var endm = (commDate.split("-", 3)[commDate.split("-", 3).length - 2]);
							var endd = (commDate.split("-", 3)[commDate.split("-", 3).length - 1]);
							endy = parseInt(endy) + duration;
							endd = parseInt(endd)-01;
							var EndDate = endy + "-" + endm + "-" + endd;

							if (document.getElementById('selectedDegreeName').value == "MA in Buddhist Studies One Year" & document.getElementById('achedamicYear').value == "2017") {
								gtDiv += '<td colspan="2" style="font-size: medium">Date of Expiry: 2018-03-31</td>';
								gtDiv += '</tr>';
								gtDiv += '<tr>';
							}
							else if (document.getElementById('selectedDegreeName').value == "Master of Business Management in Marketing" & document.getElementById('achedamicYear').value == "2018") {
								gtDiv += '<td colspan="2" style="font-size: medium">Date of Expiry: 2020-11-31</td>';
								gtDiv += '</tr>';
								gtDiv += '<tr>';
							}
							else {
								gtDiv += '<td colspan="2" style="font-size: medium">Date of Expiry: ' + EndDate + '</td>';
								gtDiv += '</tr>';
								gtDiv += '<tr>';
							}

							gtDiv += '<td colspan="2"><img src="sig/S' + studentNICArr[i] + '.jpg" width="90" height="60"  alt=""/>';

							gtDiv += '</td>';

							gtDiv += '<td width="153"><img src="studentPhotos/sar.jpg" width="90" height="60"  alt=""/>';
							gtDiv += '</td>';
							gtDiv += '</tr>';
							gtDiv += '<tr>';

							gtDiv += '<td height="30" colspan="2"><span style="font-size: small">Student&rsquo;s  Signature  </span></td>';

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
							gtDiv += '<td style="font-size: small">' + coursecommenceArr[i] + '</td>';
							gtDiv += '</tr>';

							var dd = new Date();
							var d = dd.getUTCDate();
							var m = dd.getUTCMonth();
							var y = dd.getUTCFullYear();
							var mn = m + 1;
							var currentdate = y + "-" + mn + "-" + d;
							//var currentdate = d+"/"+mn+"/"+y;

							gtDiv += '<tr>';
							gtDiv += '<td><p style="font-size: small"> Date of Issue : </p></td>';
							gtDiv += '<td style="font-size: small">' + currentdate + '</td>';
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
}
//ICT center Download all list starts----------------------------------------------------------------------
function getAllRegStudentList2(type) {

	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		// if(document.getElementById('selectedDocName').value=="Application List" ){
		if (type == "w") {

			var newStr = `<style>
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
		   {size:595.3pt 841.9pt;
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
			// newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + $( "#selectedDegreeName option:selected" ).text(); + "</div>";
			// newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
			// newStr += "<br>";

			newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
			newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
			newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Pre-Registered Students List</div>";
			newStr += "<br/>";
		}

		if (type == "e") {

			newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
			newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Pre-Registered Students List</div>";
		}

		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Student Initials</th>";
		newStr += "<th style='border: 1px solid black;'>Student Name</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		newStr += "<th style='border: 1px solid black;'>Signature Number</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		newStr += "<th style='border: 1px solid black;'>Mobile</th>";
		newStr += "<th style='border: 1px solid black;'>Email</th>";
		newStr += "</tr>";

		for (i = 0; i < studentNoLength; i++) {

			// if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {
			console.log("dsds")
			if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] && document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	

				newStr += "<tr style='border: 1px solid black;'>";
				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';

				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';
				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNameArr[i] + '</td>';

				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';

				newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
				newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">S' + studentNICArr[i] + '</td>';
				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';

				newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';


				newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';
				newStr += "</tr>";
				newStr += "</div><dev><br>";
				inum++;
				rwcnt++;
				count++;

				// }
			}
		}
		// }
		// }
		newStr += "</table>";



	}

	if (type == "w") {
		var exportFilename = "Pre-Registered Students List.doc";
		// newStr += "</table></div>";

		let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
		sendDataList += "&sheetName=" + "Pre-Registered Students List";
		isrHandle.getDoc(newStr, exportFilename);

	}


	if (type == "e") {
		//eng
		var exportFilename = "Pre-Registered Students List.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
		//eng
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

		//eng
	}


}



//ICT center Download all list ends------------------------------------------------------------------------
function getRegStudentlist() {

	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		// if(document.getElementById('selectedDocName').value=="Application List" ){
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Application Number</th>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Student Initials</th>";
		newStr += "<th style='border: 1px solid black;'>Student Name</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
		newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
		newStr += "<th style='border: 1px solid black;'>Email</th>";
		newStr += "<th style='border: 1px solid black;'>Signature</th>";
		newStr += "</tr>";

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	

					if (medium1Arr[i] == "en") {


						// for( i=0; i<studentNoLength.length; i++){

						// if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){

						// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
						// newStr +="<div class='info'   name='testInfo"+i+"'>";
						newStr += "<tr style='border: 1px solid black;'>";

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + applicationNoArr[i] + '</td>';


						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPersonalTitleArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNameArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
						newStr += "</tr>";
						newStr += "</div><dev><br>";
						inum++;
						rwcnt++;
						count++;
					}

				}
			}
		}
		// }
		// }
		newStr += "</table>";



	}
	var csvData = new Array();

	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
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

function getRegStudentlistSinhala() {

	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		// if(document.getElementById('selectedDocName').value=="Application List" ){
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Application Number</th>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Student Initials</th>";
		newStr += "<th style='border: 1px solid black;'>Student Name</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
		newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
		newStr += "<th style='border: 1px solid black;'>Email</th>";
		newStr += "<th style='border: 1px solid black;'>Signature</th>";
		newStr += "</tr>";

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

					if (medium1Arr[i] == "si") {
						//alert(medium1Arr[i]);

						// for( i=0; i<studentNoLength.length; i++){

						// if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){

						// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
						// newStr +="<div class='info'   name='testInfo"+i+"'>";
						newStr += "<tr style='border: 1px solid black;'>";

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + applicationNoArr[i] + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPersonalTitleArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNameArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
						newStr += "</tr>";
						newStr += "</div><dev><br>";
						inum++;
						rwcnt++;
						count++;
					}

				}
			}
		}
		// }
		// }
		newStr += "</table>";



	}
	var csvData = new Array();

	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
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

function getstudentlist() {
	var count = 0;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		// if(document.getElementById('selectedDocName').value=="Application List" ){
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<table style='border-collapse: collapse;border: 4px solid black;font-size:16px;font-family:tahoma;'>";

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					count++;
					// newStr+='<tr  style="border:1px solid black;width:250px;heigth:30%;font-size:16px;font-family:tahoma;">'+studentInitialArr[i]+'</tr>';
					if (count == 1) {
						newStr += "<tr style='border: 4px solid black;heigth:0%;'>";
					}
					//
					newStr += "<tr style='border: 4px solid black;heigth:0%;'>";
					newStr += "<td>";
					newStr += "</td>";
					newStr += "</tr>";

					//
					newStr += "<td style='border: 4px solid black;text-align:center;heigth:0%;'>";
					newStr += studentPersonalTitleArr[i] + "." + studentInitialArr[i];
					newStr += "<br>";
					newStr += studentNoArr[i];
					newStr += "</td>&nbsp;&nbsp;&nbsp;";
					if (count == 2) {
						newStr += "</tr>";
					}
					if (count == 2) {
						count = 0;
					}
					//newStr +="</tr>";
					newStr += "</div>";
					inum++;
					rwcnt++;

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



function newIdEnglish() {
	//alert("in");
	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		// if(document.getElementById('selectedDocName').value=="Application List" ){
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'>Name with Initials</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		// newStr +="<th style='border: 1px solid black;'>Ad 2</th>";
		// newStr +="<th style='border: 1px solid black;'>Ad 3</th>";
		// newStr +="<th style='border: 1px solid black;'>Ad 4</th>";
		// newStr +="<th style='border: 1px solid black;'>Ad 5</th>";
		newStr += "<th style='border: 1px solid black;'>NIC No</th>";
		newStr += "<th style='border: 1px solid black;'>Library Id No</th>";
		newStr += "<th style='border: 1px solid black;'>Start Date</th>";
		newStr += "<th style='border: 1px solid black;'>End Date</th>";
		newStr += "</tr>";

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	

					if (medium1Arr[i] == "en") {

						var stuAddress = studentPermanentAddressArr[i];
						var convertstuAddress = stuAddress.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
						var testAdd = titleCase(convertstuAddress);
						testAdd = removeDash(testAdd);
						var test1 = testAdd.split(",");
						var test = 1;


						newStr += "<tr style='border: 1px solid black;'>";


						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPersonalTitleArr[i] + '. ' + studentInitialArr[i] + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';

						//alert(test1);
						// for (var q = 0; q < 5; q++){

						// if(test1.length>4){
						// if (test<3 && test1[q]!=""){
						// //gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// test++;
						// }
						// else if(test<3 && test1[q]==""){

						// //gtDiv+="<br><label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// test++;
						// //alert(test);
						// }
						// else if(test==3 && test1[q]!=""){

						// //gtDiv+="<br><label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// test++;
						// //alert(test);
						// }
						// else if(test==3 && test1[q]==""){

						// //gtDiv+="<br><label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// test++;
						// //alert(test);
						// }
						// else if(test<6 && test1[q]!=""){
						// //alert(test1[q]);
						// //	gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// test++;
						// //alert(test);
						// }
						// else if(test<6 && test1[q]==""){
						// //alert(test1[q]);
						// //	gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// test++;
						// //alert(test);
						// }
						// // else if(test==5){
						// // //alert(test1[q]);
						// // newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// // test++;
						// // }
						// // else{
						// // //alert(test1[q]);
						// // gtDiv+="<label>"+test1[q]+",</label>";
						// // }

						// }
						// else
						// {
						// if (test<2 && test1[q]!="undefined"){
						// //gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// test++;
						// }
						// else if (test<2 && test1[q]=="undefined"){
						// //gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// test++;
						// }
						// else{
						// //gtDiv+="<label>"+test1[q]+",</label><br>";

						// if(test1[q]!="undefined"){

						// if(test1[q]==undefined){
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// }
						// else{
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
						// }
						// }
						// else{
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// }
						// }
						// }
						// }

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentLibraryIdCodeArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						//	newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						newStr += "</tr>";
						newStr += "</div><dev><br>";
						inum++;
						rwcnt++;
						count++;
					}

				}
			}
		}

		newStr += "</table>";

	}

	//ENG
	var exportFilenameENG = document.getElementById('selectedDegreeName').value + " - English - " + "ID List.xls";
	var csvDataENG = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

	if (navigator.msSaveBlob) {
		navigator.msSaveBlob(csvDataENG, exportFilenameENG);
	} else {
		//In FF link must be added to DOM to be clicked
		var link = document.createElement('a');
		link.href = window.URL.createObjectURL(csvDataENG);
		link.setAttribute('download', exportFilenameENG);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}



}



function newIdSinhala() {
	//alert("in");
	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		// if(document.getElementById('selectedDocName').value=="Application List" ){
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'>Name with Initials</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		// newStr +="<th style='border: 1px solid black;'>Ad 2</th>";
		// newStr +="<th style='border: 1px solid black;'>Ad 3</th>";
		// newStr +="<th style='border: 1px solid black;'>Ad 4</th>";
		// newStr +="<th style='border: 1px solid black;'>Ad 5</th>";
		newStr += "<th style='border: 1px solid black;'>NIC No</th>";
		newStr += "<th style='border: 1px solid black;'>Library Id No</th>";
		newStr += "<th style='border: 1px solid black;'>Start Date</th>";
		newStr += "<th style='border: 1px solid black;'>End Date</th>";
		newStr += "</tr>";

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	

					if (medium1Arr[i] == "si") {

						var stuAddress = studentPermanentAddressArr[i];
						var convertstuAddress = stuAddress.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
						var testAdd = titleCase(convertstuAddress);
						testAdd = removeDash(testAdd);
						var test1 = testAdd.split(",");
						var test = 1;


						newStr += "<tr style='border: 1px solid black;'>";


						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPersonalTitleArr[i] + '. ' + studentInitialArr[i] + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';

						//alert(test1);
						// for (var q = 0; q < 5; q++){

						// if(test1.length>4){
						// if (test<3 && test1[q]!=""){
						// //gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// test++;
						// }
						// else if(test<3 && test1[q]==""){

						// //gtDiv+="<br><label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// test++;
						// //alert(test);
						// }
						// else if(test==3 && test1[q]!=""){

						// //gtDiv+="<br><label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// test++;
						// //alert(test);
						// }
						// else if(test==3 && test1[q]==""){

						// //gtDiv+="<br><label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// test++;
						// //alert(test);
						// }
						// else if(test<6 && test1[q]!=""){
						// //alert(test1[q]);
						// //	gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// test++;
						// //alert(test);
						// }
						// else if(test<6 && test1[q]==""){
						// //alert(test1[q]);
						// //	gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// test++;
						// //alert(test);
						// }
						// // else if(test==5){
						// // //alert(test1[q]);
						// // newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// // test++;
						// // }
						// // else{
						// // //alert(test1[q]);
						// // gtDiv+="<label>"+test1[q]+",</label>";
						// // }

						// }
						// else
						// {
						// if (test<2 && test1[q]!="undefined"){
						// //gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

						// test++;
						// }
						// else if (test<2 && test1[q]=="undefined"){
						// //gtDiv+="<label>"+test1[q]+",</label>";
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// test++;
						// }
						// else{
						// //gtDiv+="<label>"+test1[q]+",</label><br>";

						// if(test1[q]!="undefined"){

						// if(test1[q]==undefined){
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// }
						// else{
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';
						// }
						// }
						// else{
						// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// }
						// }
						// }
						// }

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentLibraryIdCodeArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						//	newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						newStr += "</tr>";
						newStr += "</div><dev><br>";
						inum++;
						rwcnt++;
						count++;
					}

				}
			}
		}

		newStr += "</table>";

	}

	//SIN
	var exportFilename = document.getElementById('selectedDegreeName').value + " - Sinhala - " + "ID List.xls";
	var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

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



//-------------------------------------------------- Attendance Sheet----------------------------------------------------------------------------

function getSinhalaAttendenceSheet1() {
	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {

		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size:14px;font-family:Times New Roman;'>" + document.getElementById('selectedDegreeName').value + " - " + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size:14px;font-family:Times New Roman;'>Attendance Sheet</div>";
		newStr += "<br>";
		newStr += "<br>";
		newStr += "<hr/>";
		newStr += "<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Course Unit:</div>";
		newStr += "<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Date:</div>";
		newStr += "<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Lecturer's Name:</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>No</th>";
		newStr += "<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Name</th>";
		newStr += "<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Signature</th>";
		newStr += "</tr>";
		for (var i = 0; i < studentNoLength; i++) {
			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

					if (medium1Arr[i] == "si") {


						newStr += "<tr>";
						newStr += '<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;">' + count + '</td>';
						newStr += '<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;">' + studentNoArr[i] + '</td>';
						newStr += '<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;width:200px;">' + studentNameArr[i] + '</td>';
						newStr += '<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:14px;font-family:Times New Roman;"></td>';
						newStr += "</tr>";
						newStr += "</div><dev><br>";

						count++;

					}
				}
			}
		}
		newStr += "</table>";
		newStr += "<br>";
	}


	var exportFilename = "Attendance Sheet - Sinhala.doc";
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



function getEnglishAttendenceSheet1() {

	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {

		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size:14px;font-family:Times New Roman;'>" + document.getElementById('selectedDegreeName').value + " - " + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size:14px;font-family:Times New Roman;'>Attendance Sheet</div>";
		newStr += "<br>";
		newStr += "<br>";
		newStr += "<hr/>";
		newStr += "<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Course Unit:</div>";
		newStr += "<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Date:</div>";
		newStr += "<div class='investLabel' style='font-weight:bold;font-size:14px;font-family:Times New Roman;'>Lecturer's Name:</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>No</th>";
		newStr += "<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Name</th>";
		newStr += "<th style='border: 1px solid black;font-size:14px;font-family:Times New Roman;'>Signature</th>";
		newStr += "</tr>";

		for (var i = 0; i < studentNoLength; i++) {
			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

					if (medium1Arr[i] == "en") {


						newStr += "<tr>";
						newStr += '<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;">' + count + '</td>';
						newStr += '<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;">' + studentNoArr[i] + '</td>';
						newStr += '<td style="border:1px solid black;font-size:14px;font-family:Times New Roman;width:200px;">' + studentNameArr[i] + '</td>';
						newStr += '<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:14px;font-family:Times New Roman;"></td>';
						newStr += "</tr>";
						newStr += "</div><dev><br>";

						count++;

					}
				}
			}
		}
		newStr += "</table>";
		newStr += "<br>";
	}


	var exportFilename = "Attendance Sheet - English.doc";
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

//--------------------------------------------------------------Registered List------------------------------------------


function getRegisterdListDownload() {

	var count = 1;
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
		newStr += "<th style='border: 1px solid black;'></th>";
		//newStr +="<th style='border: 1px solid black;'>Application Number</th>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Student Initials</th>";
		newStr += "<th style='border: 1px solid black;'>Student Name</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
		newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
		newStr += "<th style='border: 1px solid black;'>Email</th>";
		//newStr +="<th style='border: 1px solid black;'>Signature</th>";
		newStr += "</tr>";

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {


					newStr += "<tr style='border: 1px solid black;'>";

					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';
					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPersonalTitleArr[i] + '</td>';

					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNameArr[i] + '</td>';

					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';

					newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
					newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';
					newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
					newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					newStr += "</tr>";
					newStr += "</div><div><br>";
					inum++;
					rwcnt++;
					count++;

				}
			}
		}

		newStr += "</table>";



	}
	var exportFilename = "Registered List.doc";
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





function DownloadStudentListwithAddress() {

	var count = 1;
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
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Name With Initial</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		newStr += "<th style='border: 1px solid black;'>Ad 1</th>";
		newStr += "<th style='border: 1px solid black;'>Ad 2</th>";
		newStr += "<th style='border: 1px solid black;'>Ad 3</th>";
		newStr += "<th style='border: 1px solid black;'>Ad 4</th>";
		newStr += "<th style='border: 1px solid black;'>Ad 5</th>";
		newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
		newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
		newStr += "<th style='border: 1px solid black;'>Email</th>";
		//newStr +="<th style='border: 1px solid black;'>Selected Criteria</th>";
		newStr += "</tr>";

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i] & mediumArr[i] == md) {



					// for( i=0; i<applicationNoLength; i++){

					// if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){

					// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & document.getElementById('achedamicYear').value==achedamicYearArr[i] & mediumArr[i] == md  ){// & (medium1Arr[i] == "en" )){	
					var stuAddress = studentPermanentAddressArr[i];
					var convertstuAddress = stuAddress.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
					var testAdd = titleCase(convertstuAddress);
					testAdd = removeDash(testAdd);
					var test1 = testAdd.split(",");
					var test = 1;

					newStr += "<tr style='border: 1px solid black;'>";

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';

					newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';


					for (var q = 0; q < 5; q++) {

						if (test1.length > 4) {
							if (test < 3 && test1[q] != "") {
								//gtDiv+="<label>"+test1[q]+",</label>";
								newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + test1[q] + '</td>';

								test++;
							}
							else if (test < 3 && test1[q] == "") {

								//gtDiv+="<br><label>"+test1[q]+",</label>";
								newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

								test++;
								//alert(test);
							}
							else if (test == 3 && test1[q] != "") {

								//gtDiv+="<br><label>"+test1[q]+",</label>";
								newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + test1[q] + '</td>';

								test++;
								//alert(test);
							}
							else if (test == 3 && test1[q] == "") {

								//gtDiv+="<br><label>"+test1[q]+",</label>";
								newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

								test++;
								//alert(test);
							}
							else if (test < 6 && test1[q] != "") {
								//alert(test1[q]);
								//	gtDiv+="<label>"+test1[q]+",</label>";
								newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + test1[q] + '</td>';

								test++;
								//alert(test);
							}
							else if (test < 6 && test1[q] == "") {
								//alert(test1[q]);
								//	gtDiv+="<label>"+test1[q]+",</label>";
								newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

								test++;
								//alert(test);
							}
							// else if(test==5){
							// //alert(test1[q]);
							// newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+test1[q]+'</td>';

							// test++;
							// }
							// else{
							// //alert(test1[q]);
							// gtDiv+="<label>"+test1[q]+",</label>";
							// }

						}
						else {
							if (test < 2 && test1[q] != "undefined") {
								//gtDiv+="<label>"+test1[q]+",</label>";
								newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + test1[q] + '</td>';

								test++;
							}
							else if (test < 2 && test1[q] == "undefined") {
								//gtDiv+="<label>"+test1[q]+",</label>";
								newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

								test++;
							}
							else {
								//gtDiv+="<label>"+test1[q]+",</label><br>";

								if (test1[q] != "undefined") {

									if (test1[q] == undefined) {
										newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

									}
									else {
										newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + test1[q] + '</td>';
									}
								}
								else {
									newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

								}
							}
						}
					}




					//newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';

					newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
					newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

					//newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+selectionCategoryArr[i]+'</td>';






					newStr += "</tr>";
					newStr += "</div><dev><br>";
					count++;

				}



			}
		}

		newStr += "</table>";

		var exportFilename = "Selected Student List.doc";
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



}