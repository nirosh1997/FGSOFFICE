var applicantDTable;


function downloadListForFBApproveWord(listtype) {


	let findData = {
		action: "getDataForBatchUpdate",
		degreeCode: $("#selectedDegreeName option:selected").val(),
		academicYear: document.getElementById('achedamicYear').value,
		authcode: authcode,
		username: dataRep['userId'],
	};

	$.ajax({
		type: 'POST',
		url: 'rules/batch.php',
		data: findData,
		dataType: 'json',
		success: function (batch) {
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
			newStr += "<div class='investLabel' style='text-align:center;font-size: 20px;'><b>" + batch[0].facultyTitle + "</b></div>";
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>(Batch : " + batch[0].batchName + ")</div>";

			let status = "";
			if (listtype == 1) {
				status = "- Graduate";
			} else if (listtype == 2) {
				status = "- Professional Qualification";
			} else if (listtype == 4) {
				status = "- Pending Qualification";
			} else if (listtype == 5) {
				status = "- Special Approved";
			}
			newStr += "<br/><div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Selected Candidate List " + status + "</div>";

			newStr += "<br/>";



			newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';

			newStr += "<thead>";
			newStr += "<tr>";
			newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:5%;height: 50px;">No</th>';
			newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:20%;height: 50px;">Application No</th>';
			newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:20%;height: 50px;">Name With Initial</th>';
			newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:55%;height: 50px;">Qualifications</th>';
			newStr += "</tr>";
			newStr += "</thead>";




			count = 1;
			applicantDTable.rows().every(function (i) {
				var isChecked = false;
				if (listtype == 1) {
					if (selectedFromGraduateArr[i] == 1) {
						isChecked = true;
					}
				} else if (listtype == 2) {
					if (selectedFromProfessionalArr[i] == 1) {
						isChecked = true;
					}
				} else if (listtype == 4) {
					if (selectedFromPendingQulificationArr[i] == 1) {
						isChecked = true;
					}
				} else if (listtype == 5) {
					if (selectedFromSpecialApproveArr[i] == 1) {
						isChecked = true;
					}
				}

				if (isChecked) {

					newStr += "<tr>";
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:5%;height: 50px;">' + count + '</td>';
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:20%;height: 50px;">' + applicationNoArr[i] + '</td>';
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:20%;height: 50px;">' + studentInitialArr[i] + '</td>';
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:55%;height: 50px;"><p>- ' + studentInterViewDesesion[i].replace(/\n/g, '<br>- ') + '</p></td>';
					newStr += "</tr>";
					count++;

					// if (i == 12 && ex_CodeLength != 14) {
					// 	newStr += "</table>";
					// 	newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
					// 	newStr += "<tr>";
					// 	newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
					// 	newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Student No</th>';
					// 	newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:35%;height: 50px;">Name With Initial</th>';
					// 	newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">NIC</th>';
					// 	newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Status</th>';
					// 	newStr += "</tr>";
					// } else if (i > 12 && ex_CodeLength != 14) {
					// 	if ((i - 12) % 18 == 0) {
					// 		newStr += "</table>";
					// 		newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
					// 		newStr += "<tr>";
					// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
					// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Student No</th>';
					// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:35%;height: 50px;">Name With Initial</th>';
					// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">NIC</th>';
					// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Status</th>';
					// 		newStr += "</tr>";
					// 	}
					// }
				}
			});



			newStr += "</table></div>";
			newStr += "<br/><br/>";
			const today = new Date();
			const formattedDate = today.getFullYear() + '.' +
				String(today.getMonth() + 1).padStart(2, '0') + '.' +
				String(today.getDate()).padStart(2, '0');

			newStr += '<table border="0" width="100%" style="border-collapse: collapse;">';
			newStr += "<tr style='border-bottom:1px solid #000 !important'>";
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left; width:50%;height: 50px;">Date : ' + formattedDate + '</td>';
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:50%;height: 50px;">...........................................<br>Coordinator</td>';
			newStr += "</tr>";
			newStr += "</table>";

			newStr += "<hr/>";

			newStr += '<table border="0" width="100%" style="border-collapse: collapse;">';
			newStr += "<tr style='border-bottom:1px solid #000 !important'>";
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left; width:50%;height: 50px;"><br/>Date : .................................</td>';
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:50%;height: 50px;"><br/>...........................................<br>Head of the Department</td>';
			newStr += "</tr>";
			newStr += "</table>";

			newStr += "<hr/>";

			newStr += '<table border="0" width="100%" style="border-collapse: collapse;">';
			newStr += "<tr>";
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left; width:50%;height: 50px;"><br/>Recommended by the BoS on : .................................<br/>Date : .................................</td>';
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:50%;height: 50px;"><br/>Meeting No: .................................<br/>...........................................<br/>Chair of the BoS</td>';
			newStr += "</tr>";
			newStr += "</table>";

			newStr += "<hr/>";

			newStr += '<table border="0" width="100%" style="border-collapse: collapse;">';
			newStr += "<tr>";
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left; width:50%;height: 50px;"><br/>Recommended by the Faculty Board of Graduate Studies on : .................................<br/><br/>Date : .................................</td>';
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:50%;height: 50px;"><br/>Meeting No: .................................<br/><br/>...........................................<br/>Dean of the FGS</td>';
			newStr += "</tr>";
			newStr += "<tr>";
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left; width:50%;height: 50px;"><br/><br/>Approved by the Senate on : ......................................</td>';
			newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:50%;height: 50px;"></td>';
			newStr += "</tr>";
			newStr += "</table>";

			var exportFilename = "Interview Decision.doc";
			let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
			sendDataList += "&sheetName=" + "Interview Decision";
			isrHandle.getDoc(newStr, exportFilename);
		},
		error: function (error) {
			console.log(error);
		}
	});




}


function DataTableForDownloadListForFBapprove() {

	var buttons = [];

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator'
		|| dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar'
		|| dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar'
		|| dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'Program Assistant/Clerk') {
		buttons.push({
			text: 'Download Graduate List',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				var dataArray = [];
				downloadListForFBApproveWord(1);// 1 for graduate
			}
		});

		buttons.push({
			text: 'Download Professional List',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				var dataArray = [];
				downloadListForFBApproveWord(2);// 2 for professional
			}
		});

		// buttons.push({
		// 	text: 'Download Both Graduate & Professional List',
		// 	className: 'btn btn-primary h-46',
		// 	action: function (e, dt, node, config) {
		// 		var dataArray = [];
		// 		downloadListForFBApproveWord(3);// 3 for graduate and professional
		// 	}
		// });

		buttons.push({
			text: 'Download Pending Qualification List',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				var dataArray = [];
				downloadListForFBApproveWord(4);// 4 for pending qualification
			}
		});

		buttons.push({
			text: 'Download Special Approved List',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				var dataArray = [];
				downloadListForFBApproveWord(5);// 5 for special approved
			}
		});





	}


	applicantDTable = $('#applicantTable').DataTable({
		// dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row

		dom: "<'row'<'col col-md-12 text-right' B>>" + // Search and buttons in a 1-line row
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
		columnDefs: [

		],
		select: {
			style: 'multi',
			selector: 'td:first-child',
		},
		order: [0, 'asc'],
	});

}


function formDownloadListForFBapprove(dsp) {

	var selectedChecked = "";
	var registeredChecked = "";
	str = "";
	title = "Download List for Senate approval";

	if (dsp == "formDownloadListForFBapprove") {
		filterListInterViewPanelSummeryOnchange2();
		console.log(dsp);
		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper  align-items-center" style="width: 100%;">';
		str += '<div class="navbar-nav mr-lg-2" style="display:block">';
		str += '<div class="nav-item ml-0">';
		str += '<div class="row" style="padding:3px 0;    display: -webkit-box;">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-2 d-flex align-items-center"><h4 class="navTitle">' + title + '</h4></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department') {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListInterViewPanelSummeryOnchange2();" >';
			str += '</select>';
		}
		else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListInterViewPanelSummeryOnchange2();" >';
			str += '</select>';
		}
		str += '</div>';
		let date = new Date().getFullYear();
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7">';
		str += '<div class="row">';
		str += '<div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterListInterViewPanelSummeryOnchange2();">';
		str += "<option  value='0'>Select Academic Year</option>";
		str += setAcademicYearNewNear();
		str += '</select>';
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-lg-flex d-xl-flex align-items-center labelPanel" style="">';
		str += '<label style="width: 100px;margin-bottom: 0;">Panel : </label>';
		str += '<select class="form-control form-control-sm" id="selectedPanel" onchange="dataRep[this.id]=this.value;">';
		str += '</select>'
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 d-flex align-items-center">';
		str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="filterListApplicantInterViewPanelSummerySelected2();" id="filterBtn">View List</button>';
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
		// str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		str += '<th></th>';
		// str += '<th>#</th>';
		str += '<th width="10%">Application No</th>';
		str += "<th>Applicant's Name</th>";
		str += '<th>Selected Category</th>';
		str += '<th>Qualification</th>';
		str += '</tr></thead>';
		str += '<tbody>';

		if (applicationNoLength > 0 && document.getElementById('selectedDegreeName')) {

			count = 0;
			for (var i = 0; i < applicationNoLength; i++) {

				if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
						count++;
						str += '<tr>';
						// str += "<td><input type='checkbox' id='checkSelected" + i + "' name='checkSelected" + i + "''/></td>";
						str += "<div id='notesDiv" + i + "' style='width:200px;display:none' class='investView'><textarea rows='5' name='notes" + i + "'  id='notes" + i + "' style='width:100%;float:left;'  onchange='dataRep[this.name]=this.value'></textarea></div></td>";
						str += '<td>' + count + '</td>';
						str += '<td>' + applicationNoArr[i] + "</td>";
						str += '<td style="text-align: left;">' + studentInitialArr[i] + '</td>';
						let selectedCat = "";
						if (selectedFromGraduateArr[i] == 1) {
							if (selectedCat == "") {
								selectedCat += "Graduate";
							} else {
								selectedCat += ", Graduate";

							}
						}

						if (selectedFromProfessionalArr[i] == 1) {
							if (selectedCat == "") {
								selectedCat += "Professional";
							} else {
								selectedCat += ", Professional";

							}
						}

						if (selectedFromPendingQulificationArr[i] == 1) {
							if (selectedCat == "") {
								selectedCat += "Pending Qualification";
							} else {
								selectedCat += ", Pending Qualification";

							}
						}

						if (selectedFromSpecialApproveArr[i] == 1) {
							if (selectedCat == "") {
								selectedCat += "Special Approval";
							} else {
								selectedCat += ", Special Approval";

							}
						}

						str += '<td>' + selectedCat + '</td>';
						str += '<td><p>- ' + studentInterViewDesesion[i].replace(/\n/g, '<br>- ') + '</p></td>';
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

function filterListInterViewPanelSummeryOnchange2() {


	if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "" && $("#achedamicYear").val() != "0") {
		FindPanelSummery2($("#selectedDegreeName").val(), $("#achedamicYear").val());

	}

}



function filterListApplicantInterViewPanelSummerySelected2() {
	if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "" && $("#achedamicYear").val() != "0" && $("#selectedPanel").val() != "" && $("#selectedPanel").val() != null) {
		let getApplicant = {
			action: "data4getApplicantPanelListWithDecision",
			degreeCode: $("#selectedDegreeName").val(),
			academicYear: $("#achedamicYear").val(),
			panelId: $("#selectedPanel").val(),
			desicion: 1,
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
				studentInterViewDesesion.length = 0;
				selectedFromGraduateArr.length = 0;
				selectedFromProfessionalArr.length = 0;
				selectedFromPendingQulificationArr.length = 0;
				selectedFromSpecialApproveArr.length = 0;
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
						studentInterViewDesesion[applicationNoLength] = applicant.panel_decision_dec;
						selectedFromGraduateArr[applicationNoLength] = applicant.selectedFromGraduate;
						selectedFromProfessionalArr[applicationNoLength] = applicant.selectedFromProfessional;
						selectedFromPendingQulificationArr[applicationNoLength] = applicant.selectedFromPendingQulification;
						selectedFromSpecialApproveArr[applicationNoLength] = applicant.selectedFromSpecialApprove;
						applicationNoLength++;
					});

				}


				showMenu('formDownloadListForFBapprove');
				setDegrees();
				DataTableForDownloadListForFBapprove();
				// console.log(getApplicant.degreeCode)
				FindPanelSummery2(getApplicant.degreeCode, getApplicant.academicYear);

				if ($("#selectedPanel").val() != 0) {
					$.ajax({
						type: 'POST',
						url: 'rules/applicant.php',
						data: findData,
						dataType: 'json',
						success: function (panels) {

							if (panels && panels.length > 0 && panels[0].status === 200) {
								$(".datetime").html("<p><b>Interview Schedule Date : <span style='color:#3B86D1'>" + panels[0].interviewdate + "</span><br>Interview Schedule  Time : <span style='color:#3B86D1'>" + formatTimeWithAmPm(panels[0].interviewtime) + "</span></b></p>");
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


function FindPanelSummery2(degreeCode, achedamicYear) {
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
				options += "<option value=" + (-1) + " " + ((dataRep["selectedPanel"] == (-1)) ? "selected" : "") + ">Panel of Transfered Applicant</option>";

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







