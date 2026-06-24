var applicantDTable;
function DataTableForInterViewPanelListSummery() {

	var buttons = [];

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' ||
		dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' ||
		dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
		buttons.push({
			text: 'Send SMS',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				const mobileNumber = [];
				applicantDTable.rows().every(function (index) {
					// Get the data for the current row
					var rowData = this.data();
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						if (mobileNumberValid(studentContactLanArr[index]) != 0) {
							mobileNumber.push(studentContactLanArr[index]);
						} else if (mobileNumberValid(studentContactMobileArr[index]) != 0) {
							mobileNumber.push(studentContactMobileArr[index]);
						}
					}
				});

				openInputDialogBulkSMS(mobileNumber);
			}
		});

	}

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' ||
		dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' ||
		dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {

		buttons.push({
			text: 'Download Selected Student',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				var dataArray = [];

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

				newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
				newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
				newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
				newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
				newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Applicant List</div>";
				newStr += "<br/>";



				newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
				newStr += "<tr>";
				newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
				newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Application No</th>';
				newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:35%;height: 50px;">Name with Initial</th>';
				newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">NIC</th>';
				newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Status</th>';
				newStr += "</tr>";




				let count = 1;
				applicantDTable.rows().every(function (i) {
					var rowData = this.data();
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {

						newStr += "<tr>";
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">' + count + '</td>';
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:25%;height: 50px;">' + applicationNoArr[i] + '</td>';
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:35%;height: 50px;">' + studentInitialArr[i] + '</td>';
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:15%;height: 50px;">' + studentNICArr[i] + '</td>';
						if (studentInterViewStatus[i] == 0) {
							newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center;width:15%;height: 50px;">Not yet decided</td>';

						} else if (studentInterViewStatus[i] == 1) {
							newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center;width:15%;height: 50px;">Selected</td>';

						} else if (studentInterViewStatus[i] == 2) {
							newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center;width:15%;height: 50px;">Not selected</td>';

						} else if (studentInterViewStatus[i] == 3) {
							newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center;width:15%;height: 50px;">Absent</td>';

						} else {
							newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center;width:15%;height: 50px;"></td>';
						}
						newStr += "</tr>";
						count++;

						if (i == 14 && ex_CodeLength != 16) {
							newStr += "</table>";
							newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
							newStr += "<tr>";
							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Student No</th>';
							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:35%;height: 50px;">Name With Initial</th>';
							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">NIC</th>';
							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Status</th>';
							newStr += "</tr>";
						} else if (i > 14 && ex_CodeLength != 16) {
							if ((i - 13) % 19 == 0) {
								newStr += "</table>";
								newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
								newStr += "<tr>";
								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Student No</th>';
								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:35%;height: 50px;">Name With Initial</th>';
								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">NIC</th>';
								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Status</th>';
								newStr += "</tr>";
							}
						}
					}
				});



				newStr += "</table></div>";

				var exportFilename = "Interview Decision.doc";
				let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
				sendDataList += "&sheetName=" + "Exam Attendece Sheet";
				isrHandle.getDoc(newStr, exportFilename);












			}

		});




	}


	applicantDTable = $('#applicantTable').DataTable({
		// dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row

		dom: "<'row'<'col col-md-6 datetime'><'col col-md-6 text-right' B>>" + // Search and buttons in a 1-line row
			"<'row'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
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

}


function formInterViewPanelSummery(dsp) {

	var selectedChecked = "";
	var registeredChecked = "";
	str = "";
	title = "Interview Summary";

	if (dsp == "formInterViewPanelSummery") {
		filterListInterViewPanelSummeryOnchange();
		console.log(dsp);
		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper  align-items-center" style="width: 100%;">';
		str += '<div class="navbar-nav mr-lg-2" style="display:block">';
		str += '<div class="nav-item ml-0">';
		str += '<div class="row" style="padding:3px 0;    display: -webkit-box;">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-2 d-flex align-items-center"><h4 class="navTitle">' + title + '</h4></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department') {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListInterViewPanelSummeryOnchange();" >';
			str += '</select>';
		}
		else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListInterViewPanelSummeryOnchange();" >';
			str += '</select>';
		}
		str += '</div>';
		let date = new Date().getFullYear();
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7">';
		str += '<div class="row">';
		str += '<div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterListInterViewPanelSummeryOnchange();">';
		str += "<option  value='0'>Select Academic Year</option>";
		str += setAcademicYearNewNear();
		str += '</select>';
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-lg-flex d-xl-flex align-items-center labelPanel" style="">';
		str += '<label style="width: 100px;margin-bottom: 0;">Panel : </label>';
		str += '<select class="form-control form-control-sm" id="selectedPanel" onchange="dataRep[this.id]=this.value;">';
		str += '</select>'
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-lg-flex d-xl-flex align-items-center" style="">';
		str += '<label style="width: 150px;margin-bottom: 0;">Decision : </label>';
		str += '<select class="form-control form-control-sm" id="desicion" onchange="dataRep[this.id]=this.value;">';
		str += "<option  value='0' " + ((dataRep["desicion"] == 0) ? "selected" : "") + ">All</option>";
		str += "<option  value='1' " + ((dataRep["desicion"] == 1) ? "selected" : "") + ">Selected</option>";
		str += "<option  value='2' " + ((dataRep["desicion"] == 2) ? "selected" : "") + ">Not Selected</option>";
		str += "<option  value='3' " + ((dataRep["desicion"] == 3) ? "selected" : "") + ">Absent</option>";

		str += '</select>'
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 d-flex align-items-center">';
		str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="filterListApplicantInterViewPanelSummery();" id="filterBtn">View List</button>';
		str += '</div>';
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
		str += '<table class="table table-bordered" id="applicantTable">';
		str += '<thead><tr>';
		str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		str += '<th></th>';
		// str += '<th>#</th>';
		str += "<th>Applicant's Name</th>";
		str += '<th width="10%">Application No</th>';
		str += '<th>NIC</th>';
		str += '<th>Address</th>';
		str += '<th>Tel:No.</th>';
		str += '<th width="7%">Mobile No</th>';
		str += '<th>Email</th>';
		str += '<th>Decision</th>';
		// str += '<th>PIN No</th>';
		str += '</tr></thead>';
		str += '<tbody>';

		if (applicationNoLength > 0 && document.getElementById('selectedDegreeName')) {

			count = 0;
			for (var i = 0; i < applicationNoLength; i++) {

				if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
						count++;
						str += '<tr>';
						str += "<td><input type='checkbox' id='checkSelected" + i + "' name='checkSelected" + i + "''/></td>";
						str += "<div id='notesDiv" + i + "' style='width:200px;display:none' class='investView'><textarea rows='5' name='notes" + i + "'  id='notes" + i + "' style='width:100%;float:left;'  onchange='dataRep[this.name]=this.value'></textarea></div></td>";
						str += '<td>' + count + '</td>';
						str += '<td style="text-align: center;"><button id="Namebtn' + i + '" onclick="loadProfileApplicant(this);" class="btn btn-info btn-rounded btn-fw" style="padding: 8px 20px;width: 100%;">' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</button></td>';

						// str += '<td>' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</td>';
						str += '<td>' + applicationNoArr[i] + "<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3" + i + "' value= '" + applicationNoArr[i] + "' ></input></td>";

						str += '<td>' + studentNICArr[i] + '</td>';
						str += '<td>' + studentPermanentAddressArr[i] + '</td>';

						str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactLanArr[i].replace(/\s/g, '') + '"])>' + studentContactLanArr[i] + '</span></td>';
						str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactMobileArr[i].replace(/\s/g, '') + '"])>' + studentContactMobileArr[i] + '</span></td>';
						str += '<td><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + studentContactEmailArr[i] + '" target="_blank"> ' + studentContactEmailArr[i] + '</a></td>';
						if (studentInterViewStatus[i] == 0) {
							str += '<td id="statusLabel' + i + '">Not yet decided</td>';

						} else if (studentInterViewStatus[i] == 1) {
							str += '<td id="statusLabel' + i + '">Selected</td>';

						} else if (studentInterViewStatus[i] == 2) {
							str += '<td id="statusLabel' + i + '">Not selected</td>';

						} else if (studentInterViewStatus[i] == 3) {
							str += '<td id="statusLabel' + i + '">Absent</td>';

						} else {
							str += '<td id="statusLabel' + i + '"></td>';
						}

						// str += '<td>' + pinArr[i] + '</td>';
						str += '</tr>';

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



function filterListApplicantInterViewPanelSummery() {
	if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "" && $("#achedamicYear").val() != "0" && $("#selectedPanel").val() != "" && $("#selectedPanel").val() != null) {
		let getApplicant = {
			action: "data4getApplicantPanelListWithDecision",
			degreeCode: $("#selectedDegreeName").val(),
			academicYear: $("#achedamicYear").val(),
			panelId: $("#selectedPanel").val(),
			desicion: $("#desicion").val(),
			authcode: authcode,
			username: dataRep['userId'],
		};


		let findData = {
			action: "data4getAppointPanelListByID",
			panelId: $("#selectedPanel").val(),
			authcode: authcode,
			username: dataRep['userId'],
		};
		$.ajax({
			type: 'POST',
			url: 'rules/applicant.php',
			data: getApplicant,
			dataType: 'json',
			success: function (applicants) {
				studentNameArr.length = 0;
				applicationNoArr.length = 0;
				studentNICArr.length = 0;
				studentPersonalTitleArr.length = 0;
				studentInitialArr.length = 0;
				achedamicYearArr.length = 0;
				degreeCodeArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactLanArr.length = 0;
				studentContactEmailArr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentInterViewStatus.length = 0;
				applicationNoLength = 0;
				if (applicants && applicants.length > 0 && applicants[0].status === 200) {

					$.each(applicants, function (index, applicant) {
						studentNameArr[applicationNoLength] = applicant.studentName;
						applicationNoArr[applicationNoLength] = applicant.applicationNo;
						studentPersonalTitleArr[applicationNoLength] = applicant.studentPersonalTitle;
						studentInitialArr[applicationNoLength] = applicant.studentInitial;
						studentNICArr[applicationNoLength] = applicant.studentNIC;
						studentContactMobileArr[applicationNoLength] = applicant.studentContactMobile;
						studentContactLanArr[applicationNoLength] = applicant.studentContactLan;
						studentContactEmailArr[applicationNoLength] = applicant.studentContactEmail;
						studentPermanentAddressArr[applicationNoLength] = applicant.studentPermanentAddress;
						studentInterViewStatus[applicationNoLength] = applicant.panel_decision;

						degreeCodeArr[applicationNoLength] = applicant.sdegreeCode;
						achedamicYearArr[applicationNoLength] = applicant.achedamicYear;

						applicationNoLength++;
					});

				}


				showMenu('formInterViewPanelSummery');
				setDegrees();
				DataTableForInterViewPanelListSummery();
				// console.log(getApplicant.degreeCode)
				FindPanelSummery(getApplicant.degreeCode, getApplicant.academicYear);

				if ($("#selectedPanel").val() != 0) {
					$.ajax({
						type: 'POST',
						url: 'rules/applicant.php',
						data: findData,
						dataType: 'json',
						success: function (panels) {

							console.log(panels);
							if (panels && panels.length > 0 && panels[0].status === 200) {

								$(".datetime").html("<p><b>Interview Schedule Date : <span style='color:#3B86D1'>" + panels[0].interviewdate + "</span><br>Interview Schedule  Time : <span style='color:#3B86D1'>" + formatTimeWithAmPm(panels[0].interviewtime) + "</span></b></p>");
								// let getApplicantData = {
								// 	action: "data4getApplicantPanelList",
								// 	panelId: $("#selectedPanel").val(),
								// 	degreeCode: $("#selectedDegreeName").val(),
								// 	academicYear: $("#achedamicYear").val(),
								// 	paneName: panels[0].panel_name,
								// 	panelDate: panels[0].interviewdate,
								// 	panelTime: panels[0].interviewtime
								// };
							} else {
							}
						},
						error: function (error) {
							console.log(error);
						}
					});
				}
			},
			error: function (error) {
				console.log(error)

			}
		});
		// dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		// dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
		// sendForm("data4ApplicantList");
	}

	else {
		alert("Please Select a value from the select Box(s)");
	}


}


function FindPanelSummery(degreeCode, achedamicYear) {
	let getApplicant = {
		action: "data4getAppointPanelList",
		degreeCode: degreeCode,
		academicYear: achedamicYear,
		authcode: authcode,
		username: dataRep['userId'],
	};
	$.ajax({
		type: 'POST',
		url: 'rules/applicant.php',
		data: getApplicant,
		dataType: 'json',
		success: function (panels) {
			if (panels && panels.length > 0 && panels[0].status === 200) {
				let options = "<option value='0' " + ((dataRep["selectedPanel"] == 0) ? "selected" : "") + ">All Panel</option>";
				$.each(panels, function (index, panel) {
					options += "<option value=" + panel.panel_id + " " + ((dataRep["selectedPanel"] == panel.panel_id) ? "selected" : "") + ">" + panel.panel_name + "</option>";
				});
				options += "<option value='-1' " + ((dataRep["selectedPanel"] == -1) ? "selected" : "") + ">Panel of Transfered Applicant</option>";

				$("#selectedPanel").find("option").remove().end().append(options);
			} else {
				$("#selectedPanel").find("option").remove();
			}
		},
		error: function (error) {
			console.log(error)

		}
	});
}
function filterListInterViewPanelSummeryOnchange() {


	if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "" && $("#achedamicYear").val() != "0") {
		FindPanelSummery($("#selectedDegreeName").val(), $("#achedamicYear").val());

	}

}





