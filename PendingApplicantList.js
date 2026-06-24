
dataRep["ApplicationNo"] = dataRep['senateYYYY'] = dataRep['senateMM'] = dataRep['senateDD'] = dataRep["senateNo"] = "";

dataRep['BOSYYYY'] = dataRep['BOSMM'] = dataRep['BOSDD'] = dataRep["boardOfStudyNo"] = "";

dataRep['FBYYYY'] = dataRep['FBMM'] = dataRep['FBDD'] = dataRep["facultyBoardNo"] = dataRep['userName'] = "";
dataRep['programmeCode'] = "";
var BulkNote;
var TempBulkNote;
var user;
var BulkNoteArr = new Array();
var newStr1;
var countviewList = 0;
var divid = 1;
var checkdeleteorsave = "";
var breakingpoint = 50;
var pagenew = " ";
var nextpage = 0;

var applicantDTable;





function DataTableForPendingApplicantList() {

	var buttons = [];

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {



		// buttons.push({
		// 	text: '<i class="fa fa-file-excel-o"></i> Sinhala Medium List - Excel',
		// 	className: 'btn btn-primary SinMedium',
		// 	action: function (e, dt, node, config) {
		// 		CompleteApplicationSin('e');
		// 	}
		// });


		// buttons.push({
		// 	text: '<i class="fa fa-file-excel-o"></i> English Medium List - Excel',
		// 	className: 'btn btn-primary EngMedium',
		// 	action: function (e, dt, node, config) {
		// 		CompleteApplicationEng2('e');
		// 	}
		// });

		// buttons.push({
		// 	text: '<i class="fa fa-file-word-o"></i> Sinhala Medium List - Word',
		// 	className: 'btn btn-primary SinMedium',
		// 	action: function (e, dt, node, config) {
		// 		CompleteApplicationSin('w');
		// 	}
		// });

		// buttons.push({
		// 	text: '<i class="fa fa-file-word-o"></i> English Medium List - Word',
		// 	className: 'btn btn-primary EngMedium',
		// 	action: function (e, dt, node, config) {
		// 		CompleteApplicationEng2('w');
		// 	}
		// });
	}

	buttons.push({
		extend: 'excelHtml5',
		text: '<i class="fa fa-file-excel-o"></i> Export Excel',
		className: 'btn btn-primary',
   title: null, 
		filename: function () {
			return 'Pending Application List - '
				+ dataRep["selectedDegreeName"] + ' - '
				+ dataRep["achedamicYear"];
		},

		exportOptions: {
			modifier: {
				selected: true
			}
		},

		customize: function (xlsx) {
			var sheet = xlsx.xl.worksheets['sheet1.xml'];

			var academicYear = dataRep["achedamicYear"];
			var degreeName = dataRep["selectedDegreeName"];
			var batchNo = dataRep["batchnumber"];

			var customRow1 =
				'<row r="1">' +
				'<c t="inlineStr" r="A1"><is><t>Pending Application List - '
				+ degreeName + ' - ' + academicYear + '</t></is></c>' +
				'</row>';

			var customRow2 =
				'<row r="2">' +
				'<c t="inlineStr" r="A2"><is><t>Batch Number: '
				+ batchNo + '</t></is></c>' +
				'</row>';

			// Shift rows
			var rows = $('row', sheet);

			rows.each(function () {
				var rowIndex = parseInt($(this).attr('r'));
				$(this).attr('r', rowIndex + 2);
			});

			$('row c', sheet).each(function () {
				var cellRef = $(this).attr('r');
				var col = cellRef.replace(/[0-9]/g, '');
				var row = parseInt(cellRef.replace(/[A-Z]/g, ''));
				$(this).attr('r', col + (row + 2));
			});

			// Add new rows
			sheet.childNodes[0].childNodes[1].innerHTML =
				customRow1 + customRow2 + sheet.childNodes[0].childNodes[1].innerHTML;
		}
	});


	if (!$.fn.DataTable.isDataTable('#pendingapplicantTable'))
		applicantDTable = $('#pendingapplicantTable').DataTable({
			dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
				"<'row'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
				"<'row'<'col-12't>>" + // Table in a single line
				"<'row'<'col-12 col-md-6'i><'col-12 col-md-6'p>>", // Processing display element right, pagination right
			buttons: buttons,
			"language": {
				"lengthMenu": "Display _MENU_ applicants per page",
				"zeroRecords": "Applicants not found. please select valid program and year",
				// "info": "Found _MAX_ Applicants",
				"info": "Showing page _PAGE_ of _PAGES_ | Total Applicants : _MAX_ | ",
				"infoEmpty": "",
				"infoFiltered": "(filtered from _MAX_ total records)",
				"sSearch": "Find Applicant: "
			},
			"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
			columnDefs: [{
				targets: 0,
				orderable: false,
				searchable: false,
				className: 'selectall-checkbox',
			},
				// {
				// 	targets: 1,
				// 	orderable: false,
				// 	searchable: false
				// },
			],
			select: {
				style: 'multi',
				selector: 'td:first-child',
			},
			order: [1, 'asc'],
		});


	applicantDTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		var countSelectedRows = applicantDTable.rows({ selected: true }).count();
		var countItems = applicantDTable.rows().count();

		if (countItems > 0) {
			if (countSelectedRows == countItems) {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
			} else {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
			}
		}

		if (e.type === 'select') {
			$('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: true }).nodes()).prop('checked', true);
		} else {
			$('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: false }).nodes()).prop('checked', false);
		}
	});

	// When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	applicantDTable.on('click', 'thead .selectall-checkbox', function () {
		$('input[type="checkbox"]', this).trigger('click');
	});


	// When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	applicantDTable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
		if (this.checked) {
			applicantDTable.rows().select();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
				}
			}
		} else {
			applicantDTable.rows().deselect();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", false);
				}
			}
		}

		e.stopPropagation();
	});

	// hideMediums();







	// $('#all').click(function (e) {
	// 	// $('#applicantTable tbody :checkbox').prop('checked', $(this).is(':checked'));
	// 	// e.stopImmediatePropagation();
	// 	console.log($('#all').is(':checked'))
	// 	if ($('#all').is(':checked')) {
	// 		for (i = 0; i < applicationNoLength; i++) {
	// 			var checkBoxDivIdRegistered = '#checkSelected' + i;
	// 			if ($(checkBoxDivIdRegistered)) {
	// 				$(checkBoxDivIdRegistered).prop("checked", true);
	// 				console.log($(checkBoxDivIdRegistered));
	// 			}
	// 		}
	// 	} else {
	// 		for (i = 0; i < applicationNoLength; i++) {
	// 			var checkBoxDivIdRegistered = '#checkSelected' + i;
	// 			if ($(checkBoxDivIdRegistered)) {
	// 				$(checkBoxDivIdRegistered).prop("checked", false);
	// 			}
	// 		}
	// 	}
	// });
}



//------------------------------------------------------MAIN FUNCTION START---------------------------
function formPendingApplicantList(dsp) {

	var selectedChecked = "";
	var registeredChecked = "";
	str = "";
	title = "Pending List of Applicants";

	if (dsp == "formPendingApplicantList") {



		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center" style="width: 100%;display:block !important">';
		str += '<ul class="navbar-nav mr-lg-2" style="display:block">';
		str += '<li class="nav-item ml-0">';
		str += '<div class="row" style="padding:3px 0">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 d-flex align-items-center"><h4 class="navTitle">' + title + '</h4></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department') {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListPendingApplicantOnchange();" >';
			str += programName;
			str += programName1;
			str += '</select>';
		}
		else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListPendingApplicantOnchange();" >';
			str += programName;
			str += '</select>';
		}
		str += '</div>';
		let date = new Date().getFullYear();

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterListPendingApplicantOnchange();">';
		for (i = 2014; i <= date + 2; i++) {
			if (i == date + 2) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-2">';
		str += '<select class="form-control form-control-sm" id="batchnumber" onchange="dataRep[this.id]=this.value;filterListPendingApplicantOnchange();">';

		str += '</select>';
		str += '</div>';



		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 d-flex align-items-center">';
		str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="filterLisPendingApplicant();" id="filterBtn">View List</button>';
		str += '</div>';

		str += '</div>';

		str += '</div>';
		str += '</li>';
		str += '</ul>';
		str += '</div>';
		str += '</nav >';


		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="pendingapplicantTable">';
		str += '<thead><tr>';
		str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		// str += '<th>#</th>';
		str += "<th>Applicant's Name</th>";
		str += '<th width="10%">Application No</th>';
		str += '<th>NIC</th>';
		str += '<th>Address</th>';
		str += '<th>Tel:No.</th>';
		str += '<th width="7%">Mobile No</th>';
		str += '<th>Email</th>';
		str += '<th>Payment Status</th>';
		str += '<th>Applciation Status</th>';
		str += '</tr></thead>';
		str += '<tbody id="listOfPendingApplicant">';

		// if (applicationNoLength > 0 && document.getElementById('selectedDegreeName')) {

		// 	count = 0;
		// 	for (var i = 0; i < applicationNoLength; i++) {

		// 		if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

		// 			if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
		// 				count++;
		// 				str += '<tr>';
		// 				varselectedChecked = "";
		// 				if (selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes") {
		// 					selectedChecked = "checked";
		// 				} else {
		// 					selectedChecked = "";
		// 				}
		// 				str += "<td><input type='checkbox' " + selectedChecked + "  id='checkSelected" + i + "' name='checkSelected" + i + "''/></td>";
		// 				str += "<div id='notesDiv" + i + "' style='width:200px;display:none' class='investView'><textarea rows='5' name='notes" + i + "'  id='notes" + i + "' style='width:100%;float:left;'  onchange='dataRep[this.name]=this.value'></textarea></div></td>";
		// 				str += '<td>' + count + '</td>';
		// 				str += '<td style="text-align: center;"><button id="Namebtn' + i + '" onclick="loadProfileApplicant(this);" class="btn btn-info btn-rounded btn-fw" style="padding: 8px 20px;width: 100%;">' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</button></td>';

		// 				// str += '<td>' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</td>';
		// 				str += '<td>' + applicationNoArr[i] + "<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3" + i + "' value= '" + applicationNoArr[i] + "' ></input></td>";

		// 				str += '<td>' + studentNICArr[i] + '</td>';
		// 				str += '<td>' + studentPermanentAddressArr[i] + '</td>';

		// 				str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactLanArr[i].replace(/\s/g, '') + '"])>' + studentContactLanArr[i] + '</span></td>';
		// 				str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactMobileArr[i].replace(/\s/g, '') + '"])>' + studentContactMobileArr[i] + '</span></td>';
		// 				str += '<td><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + studentContactEmailArr[i] + '" target="_blank"> ' + studentContactEmailArr[i] + '</a></td>';
		// 				str += '<td>' + applicant_appliedDate[i] + '</td>';
		// 				str += '<td id="applicationFee+' + i + '">' + applicant_Pay_amount[i] + '</td>';
		// 				if (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") {
		// 					str += '<td style="text-align: center;"><button id="Namebtn' + i + '" onclick="changeApplicationPaymentNew(' + i + ');" class="btn btn-success btn-rounded btn-fw" style="padding: 8px 20px;white-space: nowrap;">Add Payment</button></td>';
		// 				}

		// 				// str += '<td>' + pinArr[i] + '</td>';
		// 				str += '</tr>';

		// 			}
		// 		}
		// 	}

		// }
		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

	}

	return str;
}


//------------------------------------------------------MAIN FUNCTION END---------------------------	


//------------------------------------------------------------------DELETE APPLICATION FUNCTION START-------------------
function formDeleteApplicationsendFormSwal(frm) {

	var doc, dataStr;
	const applicationRemove = [];
	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}

	Swal.fire({
		title: 'Are you sure?',
		text: 'Once deleted, you will not be able to recover this application data!',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: 'No, Cancel!',
	}).then((result) => {
		if (result.isConfirmed) {
			if (frm == 'deleteApplicationForm') {

				doc = document.maintainformApplicantList;
				dataStr += "&interface=" + frm;
				var newStr = "";

				applicantDTable.rows().every(function (i) {
					// Get the data for the current row
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						dataRep["ApplicationNo"] = applicationNoArr[i];
						newStr = "&applicationNo=" + applicationNoArr[i];
						let data = dataStr + newStr;
						applicationRemove.push(data);
					}
				});

				applicationRemove.forEach((item, index) => {
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", item);
				});


				// for (var i = 0; i < applicationNoLength; i++) {
				// 	if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
				// 		if (document.getElementById('checkSelected' + i)) {
				// 			if (document.getElementById('checkSelected' + i).checked == true) {

				// 				//newStr ="&universityCode="+universityCodeArr[i]+"&facultyCode="+facultyCodeArr[i]+"&programmeTypeCode="+programmeTypeCodeArr[i]+"&degreeCode="+degreeCodeArr[i]+"&studentNIC="+studentNICArr[i]+"&applicationNo="+applicationNoArr[i];

				// 				dataRep["ApplicationNo"] = applicationNoArr[i];
				// 				newStr = "&applicationNo=" + applicationNoArr[i];
				// 				ApplicantData[i] = dataStr + newStr;
				// 			}
				// 		}
				// 	}
				// }

				// for (var j = 0; j < applicationNoLength; j++) {
				// 	if (ApplicantData[j] != "") {
				// 		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", ApplicantData[j]);
				// 	}
				// }

			}
		}
	});

	return 0;

}
//----------------------------------------------------------DELETE APPLICATION FUNCTION END--------------------------

//----------------------------------------------------------CHACK DELETE OR SAVE FUNCTION START--------------------------
function checkdeleteorsaveapplication() {
	checkdeleteorsave = 'deletefunction';
}
//----------------------------------------------------------CHACK DELETE OR SAVE FUNCTION END--------------------------
//-----------------------------------------------------------------------GET COMPLETE APPLICATION FUNCTION START------------	
function CompleteApplicationEng2(type) {

	var count = 1;
	if (document.getElementById('selectedDegreeName').value == "Please Select Programme") {
		alert("Please Select Programm and the Year.");
	}

	else {


		let degreeCode = document.getElementById('selectedDegreeName').value;
		let academicYear = document.getElementById('achedamicYear').value;
		let postData = {
			action: "getIndividualBatchUsingDegreeName",
			degreeCode: degreeCode,
			academicYear: academicYear,
			authcode: authcode,
			username: dataRep['userId'],
		};

		$.ajax({
			type: 'POST',
			url: 'rules/batch.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				let batch
				if (response[0].status === 200) {
					batch = response[0].batchName;
				}

				let newStr = "";
				if (type == "w") {
					newStr += `<style>
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

					newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
					newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + academicYear + "s</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch - " + batch + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List of Applicants - English Medium</div>";
					newStr += "<br/>";
				} else {
					newStr += "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr += "<div id='topics1' class='info'></div>";
					// newStr += '<img src="img/wordTitle3-l.png" width="1000"/>';

					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>" + $("#selectedDegreeName option:selected").text(); + " Degree Programme</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year " + academicYear + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch : " + batch + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List of Applicants - English Medium</div>";

				}
				if (checkdeleteorsave == 'deletefunction') {
					newStr += "<div class='investLabel' style='text-align:left;font-weight:bold;'>user:" + dataRep['userName'] + "</div>";
				}
				newStr += "<br/>";
				newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
				newStr += "<tr>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:5%'>No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Application No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:5%'>Title</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:13%'>Name With Initial</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:17%'>Applicant Full Name</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>NIC Number</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:16%'>Address</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Tel:No.</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Mobile No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:8%'>Email</th>";
				newStr += "</tr>";

				applicantDTable.rows().every(function (i) {
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
							if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] && document.getElementById('achedamicYear').value == achedamicYearArr[i] && (medium1Arr[i] == "en")) {
								newStr += "<tr>";
								newStr += '<td  style="word-wrap:break-word;width:5%;font-size:12px;font-family:Times New Roman;text-align: center;">' + count + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + applicationNoArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:5%;font-size:12px;font-family:Times New Roman;text-align: center;">' + studentPersonalTitleArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:13%;font-size:12px;font-family:Times New Roman;">' + studentInitialArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:17%;font-size:12px;font-family:Times New Roman;">' + studentNameArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentNICArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:16%;font-size:12px;font-family:Times New Roman;">' + studentPermanentAddressArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentContactLanArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentContactMobileArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:8%;font-size:12px;font-family:Times New Roman;">' + studentContactEmailArr[i] + '</td>';
								newStr += "</tr>";
								count++;
							}
						}
					}
				});

				newStr += "</table>";
				newStr += "</div>";
				var exportFilename = "Applicant List - English Medium.doc";
				let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
				sendDataList += "&sheetName=" + "Applicant List - English";
				sendDataList += "&orientation=" + "l";

				if (type == "w") {
					isrHandle.getDoc(newStr, exportFilename, "landscape");
				}

				if (type == "e") {
					//eng
					var exportFilename = "Applicant List - English Medium.xls";
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

		});




	}

}
//-----------------------------------------------------------------------GET COMPLETE APPLICATION FUNCTION END------------




//-------------------------------------------------------------------------VIEW LIST FUNCTION START--------------------	
function filterLisPendingApplicant() {


	if (document.getElementById('selectedDegreeName').value == "Please Select Programme") {
		alert("Please Select a value from the select Box(s)");
	} else {
		dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
		dataRep["batchnumber"] = document.getElementById('batchnumber').value;
		// 	sendForm("data4ApplicantList");
		// }

		let degreeOption = "";
		let postData = {
			action: "getTimeTableBatchWise",
			academicYear: dataRep["achedamicYear"],
			program: dataRep["selectedDegreeName"],
			batchnumber: dataRep["batchnumber"],
			applicationType: "Incomplete",
			authcode: authcode,
			username: dataRep['userId'],

		};
		$.ajax({
			type: 'POST',
			url: 'https://sysfgs.kln.ac.lk/a_mphil_applicaiton/api/admin/getallapplication',
			data: postData,
			dataType: 'json',
			success: function (response) {
				console.log(response);
				// $('#pendingapplicantTable').empty();
				applicantDTable.clear();
				batchArray.length = 0;
				if (response && response.length > 0) {
					let count = 0;
					$.each(response, function (index, app) {
						count++;
						applicantDTable.row.add([
							"<input type='checkbox' " + selectedChecked + "  id='checkSelected" + i + "' name='checkSelected" + i + "''/>",  // Checkbox column
							(app.name_initials ?? "-"),
							(app.application_no ?? "-"),
							(app.nic ?? "-"),
							(app.contact_info?.address ?? "-"),
							(app.contact_info?.home_no ?? "-"),
							(app.contact_info?.mobile_no ?? "-"),
							(app.contact_info?.email_1 ?? "-"),
							getPaymentStatusBadge(app.payment_status ?? "-"),
							getApplicationStatusBadge(app.status ?? "-")
						]).draw(false);
						// let application = "";
						// application += "<tr>";
						// application += "<td ><input type='checkbox' " + selectedChecked + "  id='checkSelected" + i + "' name='checkSelected" + i + "''/></td>";
						// application += "<td >" + count + "</td>";
						// application += "<td>" + (app.name_initials ?? "-") + "</td>";
						// application += "<td>" + (app.application_no ?? "-") + "</td>";
						// application += "<td>" + (app.nic ?? "-") + "</td>";
						// application += "<td>" + (app.contact_info?.address ?? "-") + "</td>";
						// application += "<td>" + (app.contact_info?.home_no ?? "-") + "</td>";
						// application += "<td>" + (app.contact_info?.mobile_no ?? "-") + "</td>";
						// application += "<td>" + (app.contact_info?.email_1 ?? "-") + "</td>";
						// application += "<td style='text-align:center'>" + getPaymentStatusBadge(app.payment_status ?? "-") + "</td>";
						// application += "<td style='text-align:center'>" + getApplicationStatusBadge(app.status ?? "-") + "</td>";



						// application += "</tr>";

						// $('#listOfPendingApplicant').append(application);
					});

					// applicantDTable.draw();

					// DataTableForPendingApplicantList();


				}
				applicantDTable.draw();


			},
			error: function (error) {
				console.log(error)
			}
		});
	}


}


function getPaymentStatusBadge(status) {
	if (status == "Paid") {
		return '<span class="badge badge-success">Paid</span>';
	} else if (status == "Unpaid") {
		return '<span class="badge badge-danger">Unpaid</span>';
	} else {
		return '<span class="badge badge-info">-</span>';
	}
}

function getApplicationStatusBadge(status) {
	if (status == "Completed") {
		return '<span class="badge badge-success">Completed</span>';
	} else if (status == "Incomplete") {
		return '<span class="badge badge-danger">Incomplete</span>';
	} else {
		return '<span class="badge badge-info">-</span>';
	}
}


function filterListPendingApplicantOnchange() {

	if (dataRep["selectedDegreeName"] != "") {
		setBatches(dataRep["selectedDegreeName"], dataRep["achedamicYear"]);
	}
	// dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
	// dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
	// dataRep["batchnumber"] = document.getElementById('batchnumber').value;
	// sendForm("data4ApplicantList");

}
//-------------------------------------------------------------------------VIEW LIST FUNCTION END--------------------		

function loadProfileApplicant(app) {
	returnStudentProfile();
	var adID = app.id;
	var lastChar = adID.substr(adID.indexOf("Namebtn") + 7);
	console.log(document.getElementById('applicationNo3' + lastChar).value);
	setSearchApplicantStudent('applicant');
	GetApplicantProfile(document.getElementById('applicationNo3' + lastChar).value);
}


function CompleteApplicationSin(type) {
	//alert(medium1Arr);
	var count = 1;
	if (document.getElementById('selectedDegreeName').value == "Please Select Programme") {
		alert("Please Select Programm and the Year.");
	}

	else {


		let degreeCode = document.getElementById('selectedDegreeName').value;
		let academicYear = document.getElementById('achedamicYear').value;
		let postData = {
			action: "getIndividualBatchUsingDegreeName",
			degreeCode: degreeCode,
			academicYear: academicYear,
			authcode: authcode,
			username: dataRep['userId']
		};
		$.ajax({
			type: 'POST',
			url: 'rules/batch.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				console.log(response)
				let batch;
				if (response[0].status === 200) {
					batch = response[0].batchName
				}
				var newStr = "";
				if (type == "w") {
					newStr += `<style>
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

					newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
					newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + academicYear + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch - " + batch + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List of Applicants - Sinhala Medium</div>";
					newStr += "<br/>";
				} else {
					newStr += "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr += "<div id='topics1' class='info'></div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>" + $("#selectedDegreeName option:selected").text(); + " Degree Programme</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year " + academicYear + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch : " + batch + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List of Applicants - Sinhala Medium</div>";
				}


				if (checkdeleteorsave == 'deletefunction') {
					newStr += "<div class='investLabel' style='text-align:left;font-weight:bold;'>user:" + dataRep['userName'] + "</div>";
				}
				newStr += "<br/>";
				newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
				newStr += "<tr>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:5%'>Serial</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:8%'>Application No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:5%'>Title</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:13%'>Name With Initials</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:17%'>Applicant's Full Name</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>NIC/Passport Number</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:16%'>Address</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Tel:No.</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Mobile No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:8%'>Email</th>";
				newStr += "</tr>";

				applicantDTable.rows().every(function (i) {
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						// if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
						if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i] & (medium1Arr[i] == "si")) {
							newStr += "<tr>";
							newStr += '<td  style="word-wrap:break-word;width:5%;font-size:12px;font-family:Times New Roman;text-align: center;">' + count + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + applicationNoArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:5%;font-size:12px;font-family:Times New Roman;text-align: center;">' + studentPersonalTitleArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:13%;font-size:12px;font-family:Times New Roman;">' + studentInitialArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:17%;font-size:12px;font-family:Times New Roman;">' + studentNameArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentNICArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:16%;font-size:12px;font-family:Times New Roman;">' + studentPermanentAddressArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentContactLanArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentContactMobileArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:8%;font-size:12px;font-family:Times New Roman;">' + studentContactEmailArr[i] + '</td>';
							newStr += "</tr>";
							count++;
						}
						// }
					}
				});
				newStr += "</table>";
				newStr += "</div>"

				var exportFilename = "Applicant List - Sinhala Medium.doc";
				let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
				sendDataList += "&sheetName=" + "Applicant List - Sinhala";
				sendDataList += "&orientation=" + "l";

				if (type == "w") {



					isrHandle.getDoc(newStr, exportFilename);
				}

				if (type == "e") {
					//eng
					var exportFilename = "Applicant List - Sinhala Medium.xls";
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

			}, error: function (error) {
				console.log(error)
				// console.log(postData)

			}
		});




	}



}

function showDivPage(idpass) {
	if (document.getElementById('myTable' + idpass)) {
		document.getElementById('myTable' + idpass).style = "display";
		document.getElementById('page' + idpass).disabled = true;
	}

	for (make = 1; make <= divid; make++) {
		if (document.getElementById('myTable' + make)) {
			if (make != idpass) {
				document.getElementById('myTable' + make).style.display = 'none';
				document.getElementById('page' + idpass).disabled = false;
			}
		}
	}


}


function setBreakingpoint() {

	var useramount = prompt("Please enter number of records you wish to view in one page", "50");

	if (useramount != null) {
		breakingpoint = useramount;
	}

}