var applicantDTable;
function DataTableForInterViewPanelAddDecision() {

	var buttons = [];




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
			// orderable: false,
			searchable: false,
			// className: 'selectall-checkbox',
		},
			// {
			// 	targets: 1,
			// 	orderable: false,
			// 	searchable: false
			// },
		],
		// select: {
		// 	style: 'multi',
		// 	selector: 'td:first-child',
		// },
		order: [0, 'asc'],
	});


	// applicantDTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
	// 	var countSelectedRows = applicantDTable.rows({ selected: true }).count();
	// 	var countItems = applicantDTable.rows().count();

	// 	if (countItems > 0) {
	// 		if (countSelectedRows == countItems) {
	// 			$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
	// 		} else {
	// 			$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
	// 		}
	// 	}

	// 	if (e.type === 'select') {
	// 		$('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: true }).nodes()).prop('checked', true);
	// 	} else {
	// 		$('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: false }).nodes()).prop('checked', false);
	// 	}
	// });

	// // When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	// applicantDTable.on('click', 'thead .selectall-checkbox', function () {
	// 	$('input[type="checkbox"]', this).trigger('click');
	// });


	// // When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	// applicantDTable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
	// 	if (this.checked) {
	// 		applicantDTable.rows().select();
	// 		for (i = 0; i < applicationNoLength; i++) {
	// 			var checkBoxDivIdRegistered = '#checkSelected' + i;
	// 			if ($(checkBoxDivIdRegistered)) {
	// 				$(checkBoxDivIdRegistered).prop("checked", true);
	// 			}
	// 		}
	// 	} else {
	// 		applicantDTable.rows().deselect();
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


function formInterViewPanelAddDecision(dsp) {

	var selectedChecked = "";
	var registeredChecked = "";
	str = "";
	title = "Add Interview Panel Decision";

	if (dsp == "formInterViewPanelAddDecision") {
		filterListInterViewPanelAddDecisionOnchange();
		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper  align-items-center" style="width: 100%;">';
		str += '<div class="navbar-nav mr-lg-2" style="display:block">';
		str += '<div class="nav-item ml-0">';
		str += '<div class="row" style="padding:3px 0;    display: -webkit-box;">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-2 d-flex align-items-center"><h4 class="navTitle">' + title + '</h4></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department') {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListInterViewPanelAddDecisionOnchange();" >';
			str += '</select>';
		}
		else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListInterViewPanelAddDecisionOnchange();" >';
			str += '</select>';
		}
		str += '</div>';
		let date = new Date().getFullYear();
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7">';
		str += '<div class="row">';
		str += '<div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterListInterViewPanelAddDecisionOnchange();">';
		str += "<option  value='0'>Select Academic Year</option>";
		str += setAcademicYearNewNear();
		str += '</select>';
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 d-lg-flex d-xl-flex align-items-center labelPanel" style="">';

		str += '<label style="width: 100px;margin-bottom: 0;">Panel : </label>';
		str += '<select class="form-control form-control-sm" id="selectedPanel" onchange="dataRep[this.id]=this.value;">';

		str += '</select>'
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex align-items-center">';
		str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="filterListApplicantInterViewDecisionPanel();" id="filterBtn">View List</button>';
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
		str += "<th>Applicant's Name</th>";
		str += '<th width="10%">Application No</th>';
		str += '<th>NIC</th>';
		// str += '<th>Address</th>';
		// str += '<th>Tel:No.</th>';
		// str += '<th width="7%">Mobile No</th>';
		str += '<th>Decision</th>';
		str += '<th width="10%"></th>';
		str += '<th width="10%"></th>';
		str += '<th width="10%"></th>';
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
						// str += "<td><input type='checkbox' id='checkSelected" + i + "' name='checkSelected" + i + "''/></td>";
						// str += "<div id='notesDiv" + i + "' style='width:200px;display:none' class='investView'><textarea rows='5' name='notes" + i + "'  id='notes" + i + "' style='width:100%;float:left;'  onchange='dataRep[this.name]=this.value'></textarea></div></td>";
						str += '<td>' + count + '</td>';
						str += '<td style="text-align: left;">' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</td>';

						// str += '<td>' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</td>';
						str += '<td>' + applicationNoArr[i] + "<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3" + i + "' value= '" + applicationNoArr[i] + "' ></input></td>";

						str += '<td>' + studentNICArr[i] + '</td>';
						// str += '<td>' + studentPermanentAddressArr[i] + '</td>';

						// str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactLanArr[i].replace(/\s/g, '') + '"])>' + studentContactLanArr[i] + '</span></td>';
						// str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactMobileArr[i].replace(/\s/g, '') + '"])>' + studentContactMobileArr[i] + '</span></td>';
						// str += '<td><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + studentContactEmailArr[i] + '" target="_blank"> ' + studentContactEmailArr[i] + '</a></td>';
						let btnDisable = "";
						console.log(applicantSelected[i]);
						if (applicantSelected[i].toUpperCase() == "YES") {
							btnDisable = "disabled";
						}
						if (studentInterViewStatus[i] == 0) {
							str += '<td id="statusLabel' + i + '">Not yet decided</td>';

						} else if (studentInterViewStatus[i] == 1) {
							if (studentInterViewDesesion[i] == undefined || studentInterViewDesesion[i] == "") {
								str += '<td id="statusLabel' + i + '">Selected</td>';
							} else {
								console.log(studentInterViewDesesion[i])
								str += '<td id="statusLabel' + i + '"><b>Selected</b><br><p>- ' + studentInterViewDesesion[i].replace(/\n/g, '<br>- ') + '</p></td>';
							}

						} else if (studentInterViewStatus[i] == 2) {
							str += '<td id="statusLabel' + i + '">Not selected</td>';

						} else if (studentInterViewStatus[i] == 3) {
							str += '<td id="statusLabel' + i + '">Absent</td>';

						} else {
							str += '<td id="statusLabel' + i + '"></td>';
						}

						str += '<td style="text-align: center;"><button id="statusBtnS' + i + '" class="btn btn-success" ' + btnDisable + ' onclick="updateInterViewDecision(1,' + i + ')">Selected</button></td>';
						str += '<td style="text-align: center;"><button id="statusBtnNS' + i + '" class="btn btn-warning" ' + btnDisable + ' onclick="updateInterViewDecision(2,' + i + ')">Not selected</button></td>';
						str += '<td style="text-align: center;"><button id="statusBtnA' + i + '" class="btn btn-danger" ' + btnDisable + ' onclick="updateInterViewDecision(3,' + i + ')">Absent</button></td>';


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


function filterListApplicantInterViewDecisionPanel() {
	if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "" && $("#achedamicYear").val() != "0" && $("#selectedPanel").val() != "0" && $("#selectedPanel").val() != "" && $("#selectedPanel").val() != null) {
		let getApplicant = {
			action: "data4getApplicantPanelList",
			degreeCode: $("#selectedDegreeName").val(),
			academicYear: $("#achedamicYear").val(),
			panelId: $("#selectedPanel").val(),
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
				if (applicants && applicants.length > 0 && applicants[0].status === 200) {

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
					applicationNoLength = 0;

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
						studentInterViewDesesion[applicationNoLength] = applicant.panel_decision_dec;
						applicantSelected[applicationNoLength] = applicant.selected;
						degreeCodeArr[applicationNoLength] = applicant.sdegreeCode;
						achedamicYearArr[applicationNoLength] = applicant.achedamicYear;

						applicationNoLength++;
					});
					showMenu('formInterViewPanelAddDecision');
					setDegrees();
					DataTableForInterViewPanelAddDecision();
					// console.log(getApplicant.degreeCode)
					FindPanelAddDecision(getApplicant.degreeCode, getApplicant.academicYear);



					// console.log(findData);
					$.ajax({
						type: 'POST',
						url: 'rules/applicant.php',
						data: findData,
						dataType: 'json',
						success: function (panels) {
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


function FindPanelAddDecision(degreeCode, achedamicYear) {
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
				let options = "";
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

function openQualificationDialog(studentQualifications = {}) {

	const { applicationNo, apNo, graduate, professional, pendingQualification, specialApproval, education, professionalExperience, workExperience } = studentQualifications;

	let postData = {
		action: "data4ApplicantProfileDetails",
		ap_no: applicationNo,
		authcode: authcode,
		username: dataRep['userId'],
	};
	$.ajax({
		type: 'POST',
		url: 'rules/students.php',
		data: postData,
		dataType: 'json',
		success: function (response) {
			$('#departmentTable').empty();
			departmentArray.length = 0;
			if (response && response.length > 0) {
				studentNICLength = 0;
				$.each(response, function (index, Students) {

					if (Students.studentNoArr != "") {
						dataRep["degreeCode"] = Students.degreeCode;
						dataRep["academicYear"] = Students.achedamicYear;

						profileapplicationNoArr1[studentNICLength] = Students.applicationNo;
						profilestudentNameArr[studentNICLength] = Students.studentName;
						profilestudentNICArr[studentNICLength] = Students.studentNIC;
						profiledegreeCodeArr[studentNICLength] = Students.degreeCode;
						profiledegreeTitleArr[studentNICLength] = Students.degreeTitle;
						profilestudentPermanentAddressArr[studentNICLength] = Students.studentPermanentAddress;
						profilestudentContactLanArr[studentNICLength] = Students.studentContactLan;
						profilestudentContactMobileArr[studentNICLength] = Students.studentContactMobile;
						profilestudentContactEmailArr[studentNICLength] = Students.studentContactEmail;
						profilestudentEmploymentArr[studentNICLength] = Students.studentEmployment;
						profilestudentInitialArr[studentNICLength] = Students.studentInitial;
						studentNationalityArr[studentNoLength] = Students.studentNationality;
						correspondenceArr[studentNoLength] = Students.correspondence;
						studentCitizenshipArr[studentNoLength] = Students.studentCitizenship;
						studentDateofbirthArr[studentNoLength] = Students.studentDateofbirth;
						achedamicYearArr[studentNoLength] = Students.achedamicYear;
						mediumArr[studentNoLength] = Students.medium;
						studentNICLength++;

						tCodeArr.length = 0;
						paymentStudentArr.length = 0;
						feeCatArr.length = 0;
						amountArr.length = 0;
						paymentDateArr.length = 0;
						tCodeLength = 0;
						$.each(Students.data4paymentProfile, function (index, data4paymentProfile) {
							tCodeArr[tCodeLength] = data4paymentProfile.tCode;
							paymentStudentArr[tCodeLength] = data4paymentProfile.studentNo;
							feeCatArr[tCodeLength] = data4paymentProfile.feeCat;
							amountArr[tCodeLength] = data4paymentProfile.amount;
							paymentDateArr[tCodeLength] = data4paymentProfile.paymentdate;
							tCodeLength++;
						});


						batchDegreeCodeArr.length = 0;
						batchYearArr.length = 0;
						batchCourseFeeArr.length = 0;
						batchLibraryFeeArr.length = 0;
						batchdetailsLength = 0;
						$.each(Students.data4paymentBatch, function (index, data4paymentBatch) {
							batchDegreeCodeArr[batchdetailsLength] = data4paymentBatch.degcd1;
							batchYearArr[batchdetailsLength] = data4paymentBatch.degacy1;
							batchCourseFeeArr[batchdetailsLength] = data4paymentBatch.degcrs1;
							batchLibraryFeeArr[batchdetailsLength] = data4paymentBatch.deglibf1;
							batchdetailsLength++;
						});

						educationFieldNameArr.length = 0;
						educationValueArr.length = 0;
						educationPinArr.length = 0;
						educationPinLength = 0;

						$.each(Students.data4profileEducationalDetails, function (index, data4profileEducationalDetails) {
							educationFieldNameArr[educationPinLength] = data4profileEducationalDetails.educationFieldName;
							educationValueArr[educationPinLength] = data4profileEducationalDetails.educationValue;
							educationPinArr[educationPinLength] = data4profileEducationalDetails.educationPin;
							educationPinLength++;
						});

						workFieldNameArr.length = 0;
						workValueArr.length = 0;
						workPinArr.length = 0;
						workPinLength = 0;
						$.each(Students.data4profilerefreeDetails, function (index, data4profilerefreeDetails) {
							workFieldNameArr[workPinLength] = data4profilerefreeDetails.workFieldName;
							workValueArr[workPinLength] = data4profilerefreeDetails.workValue;
							workPinArr[workPinLength] = data4profilerefreeDetails.workPin;
							workPinLength++;
						});




						newEduApplicationNo.length = 0;
						newEduQulificaitionId.length = 0;
						newEduUniversity.length = 0;
						newEduAwardingCountry.length = 0;
						newEduQualificationType.length = 0;
						newEduDesignator.length = 0;
						newEduQualifier.length = 0;
						newEduGraduateYear.length = 0;
						newEduGraduateMonth.length = 0;
						newEduDuration.length = 0;
						newEduEffectiveDate.length = 0;
						newEduGpa.length = 0;
						newEduClass.length = 0;
						newEduDegreeCertificate.length = 0;
						newEduDegreeDetailCertificate.length = 0;
						newEduResultStatus.length = 0;
						newEduSub1.length = 0;
						newEduSub2.length = 0;
						newEduSub3.length = 0;
						newEduSub4.length = 0;
						newEduResearchCredit.length = 0;
						newEduResearchDuration.length = 0;
						newEduResearchCompHas.length = 0;
						eduDetailsLength = 0;
						$.each(Students.data4profilenewEducation, function (index, data4qualification) {
							newEduApplicationNo[eduDetailsLength] = data4qualification.application_no;
							newEduQulificaitionId[eduDetailsLength] = data4qualification.qulificaition_id;
							newEduUniversity[eduDetailsLength] = data4qualification.university;
							newEduAwardingCountry[eduDetailsLength] = data4qualification.awarding_country;
							newEduQualificationType[eduDetailsLength] = data4qualification.qualification_type;
							newEduDesignator[eduDetailsLength] = data4qualification.designator;
							newEduQualifier[eduDetailsLength] = data4qualification.qualifier;
							newEduGraduateYear[eduDetailsLength] = data4qualification.graduate_year;
							newEduGraduateMonth[eduDetailsLength] = data4qualification.graduate_month;
							newEduDuration[eduDetailsLength] = data4qualification.duration;
							newEduEffectiveDate[eduDetailsLength] = data4qualification.effective_date;
							newEduGpa[eduDetailsLength] = data4qualification.gpa;
							newEduClass[eduDetailsLength] = data4qualification.class;
							newEduDegreeCertificate[eduDetailsLength] = data4qualification.degree_certificate;
							newEduDegreeDetailCertificate[eduDetailsLength] = data4qualification.degree_detail_certificate;
							newEduResultStatus[eduDetailsLength] = data4qualification.result_status;
							newEduSub1[eduDetailsLength] = data4qualification.sub1;
							newEduSub2[eduDetailsLength] = data4qualification.sub2;
							newEduSub3[eduDetailsLength] = data4qualification.sub3;
							newEduSub4[eduDetailsLength] = data4qualification.sub4;
							newEduResearchCredit[eduDetailsLength] = data4qualification.researchCredit;
							newEduResearchDuration[eduDetailsLength] = data4qualification.researchDuration;
							newEduResearchCompHas[eduDetailsLength] = data4qualification.researchCompHas;
							eduDetailsLength++;
						});




						newProfApplicationNo.length = 0;
						newProfQulificaitionId.length = 0;
						newProfQualification.length = 0;
						newProfQualificationLevel.length = 0;
						newProfAwardingAuthority.length = 0;
						newProfAwardingYear.length = 0;
						newProfAwardingCountry.length = 0;
						newProfEffectiveDate.length = 0;
						newProfCertificate.length = 0;
						newProfDetailsLength = 0;

						$.each(Students.data4profilenewProfessional, function (index, data4otherQualification) {
							newProfApplicationNo[newProfDetailsLength] = data4otherQualification.application_no;
							newProfQulificaitionId[newProfDetailsLength] = data4otherQualification.qulificaition_id;
							newProfQualification[newProfDetailsLength] = data4otherQualification.qualification;
							newProfQualificationLevel[newProfDetailsLength] = data4otherQualification.qualification_level;
							newProfAwardingAuthority[newProfDetailsLength] = data4otherQualification.awarding_authority;
							newProfAwardingYear[newProfDetailsLength] = data4otherQualification.awarding_year;
							newProfAwardingCountry[newProfDetailsLength] = data4otherQualification.awarding_country;
							newProfEffectiveDate[newProfDetailsLength] = data4otherQualification.effective_date;
							newProfCertificate[newProfDetailsLength] = data4otherQualification.certificate;
							newProfDetailsLength++;
						});




						newRefApplicationNo.length = 0;
						newRefRefId.length = 0;
						newRefName.length = 0;
						newRefOrganization.length = 0;
						newRefDesignation.length = 0;
						newRefAddress.length = 0;
						newRefCountry.length = 0;
						newRefEmail.length = 0;
						newRefMobile.length = 0;
						newRefHome.length = 0;
						newRefOffice.length = 0;
						newRefDetailsLength = 0;

						$.each(Students.data4profilenewRefrees, function (index, data4references) {
							newRefApplicationNo[newRefDetailsLength] = data4references.application_no;
							newRefRefId[newRefDetailsLength] = data4references.ref_id;
							newRefName[newRefDetailsLength] = data4references.name;
							newRefOrganization[newRefDetailsLength] = data4references.organization;
							newRefDesignation[newRefDetailsLength] = data4references.designation;
							newRefAddress[newRefDetailsLength] = data4references.address;
							newRefCountry[newRefDetailsLength] = data4references.country;
							newRefEmail[newRefDetailsLength] = data4references.email;
							newRefMobile[newRefDetailsLength] = data4references.mobile;
							newRefHome[newRefDetailsLength] = data4references.home;
							newRefOffice[newRefDetailsLength] = data4references.office;
							newRefDetailsLength++;
						});


						newWorkApplicationNo.length = 0;
						newWorkQulificaitionId.length = 0;
						newWorkOrganization.length = 0;
						newWorkDesignation.length = 0;
						newWorkAwardingCountry.length = 0;
						newWorkAddress.length = 0;
						newWorkStartDate.length = 0;
						newWorkEndDate.length = 0;
						newWorkCertificate.length = 0;
						newWorkVerified.length = 0;
						newWorkDetailsLength = 0;

						$.each(Students.data4profilenewWork, function (index, data4work) {
							newWorkApplicationNo[newWorkDetailsLength] = data4work.application_no;
							newWorkQulificaitionId[newWorkDetailsLength] = data4work.qulificaition_id;
							newWorkOrganization[newWorkDetailsLength] = data4work.organization;
							newWorkDesignation[newWorkDetailsLength] = data4work.designation;
							newWorkAwardingCountry[newWorkDetailsLength] = data4work.awarding_country;
							newWorkAddress[newWorkDetailsLength] = data4work.address;
							newWorkStartDate[newWorkDetailsLength] = data4work.start_date;
							newWorkEndDate[newWorkDetailsLength] = data4work.end_date;
							newWorkCertificate[newWorkDetailsLength] = data4work.certificate;
							newWorkVerified[newWorkDetailsLength] = data4work.verified;
							newWorkDetailsLength++;
						});



						let educationDataST = "";
						if (educationPinLength != 0 || eduDetailsLength != 0) {
							educationDataST += '<div class="row mb-3">' + '<div class="col-sm-12">' + '<label class="form-label"><b>Education Qualification:</b></label><br>';
							var count = 0;
							let start = false;

							let qulificationCat = "";
							let qulificationType = "";
							let graduateYear = "";
							let university = "";


							for (var i = 0; i < educationPinLength; i++) {
								if (educationPinArr.indexOf(educationPinArr[i]) == educationPinArr.lastIndexOf(educationPinArr[i]) || (educationPinArr.indexOf(educationPinArr[i]) != educationPinArr.lastIndexOf(educationPinArr[i]) && educationPinArr.indexOf(educationPinArr[i]) == i)) {
									if (educationFieldNameArr[i] != undefined & educationFieldNameArr[i] != " " & educationValueArr[i] != undefined & educationValueArr[i] != " ") {
										if (educationFieldNameArr[i] != "Qualification" && educationFieldNameArr[i] != "Awarding Authority" && educationFieldNameArr[i] != "Awarding Year" &&
											educationFieldNameArr[i] != "Qualification Level" && educationFieldNameArr[i] != "Awarding Country" && educationFieldNameArr[i] != "Country") {

											if (educationFieldNameArr[i].toUpperCase() == ("University/Institute name").toUpperCase()) {
												if (start) {
													start = false;
												}
												qulificationCat = "";
												qulificationType = "";
												graduateYear = "";
												university = "";
												start = true;
												count++;


											}
											if (start) {

												if (educationFieldNameArr[i] == "Specify the Qualification Category") {
													qulificationCat = educationValueArr[i];
												}

												if (educationFieldNameArr[i] == "Qualification Type") {
													qulificationType = educationValueArr[i];
												}

												if (educationFieldNameArr[i] == "Graduation Year") {
													graduateYear = educationValueArr[i];
												}

												if (educationFieldNameArr[i] == "University/Institute Name") {
													university = educationValueArr[i];
												}


												// vTmpSTR += "<tr><td>" + educationFieldNameArr[i] + " </td><td>: " + educationValueArr[i] + "</td></tr>";
												// console.log("<tr><td>" + educationFieldNameArr[i] + " </td><td>: " + educationValueArr[i] + "</td></tr>")
											}
											if (educationFieldNameArr[i + 1]) {
												// console.log((educationFieldNameArr[i].toUpperCase()) + " - " + educationValueArr[i].toUpperCase());
												// console.log(educationFieldNameArr[i + 1].toUpperCase() + " = " +("University/Institute name").toUpperCase() + "/  " + (educationFieldNameArr[i + 1].toUpperCase() == ("University/Institute name").toUpperCase()));
												if (educationFieldNameArr[i + 1].toUpperCase() == ("University/Institute name").toUpperCase()) {

													let chkData = qulificationCat + "(" + qulificationType + ") - " + graduateYear + ", " + university;
													// console.log(chkData)
													educationDataST += '<input type="checkbox" name="educationExp" class="qualification-checkbox" id="education" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';

													qulificationCat = "";
													qulificationType = "";
													graduateYear = "";
													university = "";
													start = false;
												}
											}

										} else {
											if (qulificationCat != "" || qulificationType != "" || graduateYear != "" || university != "") {
												let chkData = qulificationCat + "(" + qulificationType + ") - " + graduateYear + ", " + university;
												// console.log(chkData)
												educationDataST += '<input type="checkbox" name="educationExp" class="qualification-checkbox" id="education" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';

												qulificationCat = "";
												qulificationType = "";
												graduateYear = "";
												university = "";
												start = false;
											}

										}
									}
								}
							}
							if (start) {
								let chkData = qulificationCat + "(" + qulificationType + ") - " + graduateYear + ", " + university;
								educationDataST += '<input type="checkbox" name="educationExp" class="qualification-checkbox" id="education" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';

								start = false;
							}


							for (var i = 0; i < newWorkDetailsLength; i++) {
								qulificationCat = newEduDesignator[i] + " " + newEduQualifier[i];
								qulificationType = newEduQualificationType[i];
								graduateYear = newEduGraduateYear[i];
								university = newEduUniversity[i];
								let chkData = qulificationCat + "(" + qulificationType + ") - " + graduateYear + ", " + university;
								educationDataST += '<input type="checkbox" name="educationExp" class="qualification-checkbox" id="education" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';
							}


							if (count == 0) {
								// vTmpSTR += '<p>Educational Qualification details not availabls</p>';
							}

							educationDataST += '</div></div>';

						}

						let profDataST = "";
						if (educationPinLength != 0 || newProfDetailsLength != 0) {
							profDataST += '<div class="row mb-3">' + '<div class="col-sm-12">' + '<label class="form-label"><b>Professional Qualification:</b></label><br>';
							var count = 0;
							let start = false;

							let qulificationCat = "";
							let qulificationType = "";
							let graduateYear = "";
							let university = "";

							for (var i = 0; i < educationPinLength; i++) {
								//if(dataRep["applicationNo"] == applicationNoArr[i]){
								if (educationPinArr.indexOf(educationPinArr[i]) == educationPinArr.lastIndexOf(educationPinArr[i]) || (educationPinArr.indexOf(educationPinArr[i]) != educationPinArr.lastIndexOf(educationPinArr[i]) && educationPinArr.indexOf(educationPinArr[i]) == i)) {
									if (educationFieldNameArr[i] != undefined & educationFieldNameArr[i] != " " & educationValueArr[i] != undefined & educationValueArr[i] != " ") {
										if (educationFieldNameArr[i] == "Qualification" ||
											educationFieldNameArr[i] == "Awarding Authority" ||
											educationFieldNameArr[i] == "Qualification Level" || educationFieldNameArr[i] == "Awarding Year"
											|| educationFieldNameArr[i] == "Country" ||
											educationFieldNameArr[i] == "Qualification Level" ||
											educationFieldNameArr[i] == "Awarding Country") {
											if (educationFieldNameArr[i].toUpperCase() == ("Qualification").toUpperCase()) {
												if (educationFieldNameArr[i + 1] != "Awarding Authority" &&
													educationFieldNameArr[i + 1] != "Qualification Level" &&
													educationFieldNameArr[i + 1] != "Awarding Year" && educationFieldNameArr[i + 1] != "Country" &&
													educationFieldNameArr[i + 1] != "Qualification Level" && educationFieldNameArr[i + 1] != "Awarding Country") {

													continue;
												}
												if (start) {
													qulificationCat = "";
													qulificationType = "";
													graduateYear = "";
													university = "";
													// vTmpSTR += '</fieldset>';
													start = false;
												}
												start = true;
												count++;
											}
											if (start) {

												if (educationFieldNameArr[i] == "Qualification") {
													qulificationCat = educationValueArr[i];
												}

												if (educationFieldNameArr[i] == "Qualification Level") {
													qulificationType = educationValueArr[i];
												}

												if (educationFieldNameArr[i] == "Awarding Year") {
													graduateYear = educationValueArr[i];
												}

												if (educationFieldNameArr[i] == "Awarding Authority") {
													university = educationValueArr[i];
												}
											}
											if (educationFieldNameArr[i + 1]) {
												if (educationFieldNameArr[i + 1].toUpperCase() == ("Qualification").toUpperCase()) {
													let chkData = qulificationCat + "(" + qulificationType + ") - " + graduateYear + ", " + university;
													profDataST += '<input type="checkbox" name="profExp" class="qualification-checkbox" id="prof" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';

													qulificationCat = "";
													qulificationType = "";
													graduateYear = "";
													university = "";
													start = false;
												}
											}
										}
									}
								}
							}
							if (start) {
								let chkData = qulificationCat + "(" + qulificationType + ") - " + graduateYear + ", " + university;
								profDataST += '<input type="checkbox" name="profExp" class="qualification-checkbox" id="prof" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';

								start = false;
							}

							for (var i = 0; i < newProfDetailsLength; i++) {
								qulificationCat = newProfQualification[i];
								qulificationType = newProfQualificationLevel[i];
								graduateYear = newProfAwardingYear[i];
								university = newProfAwardingAuthority[i];
								let chkData = qulificationCat + "(" + qulificationType + ") - " + graduateYear + ", " + university;
								profDataST += '<input type="checkbox" name="profExp" class="qualification-checkbox" id="prof" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';

							}

							if (count == 0) {
								profDataST += '</div></div>';
							}

						}

						let workDataST = "";
						if (workPinLength != 0 || newWorkDetailsLength != 0) {
							workDataST += '<br><div class="row mb-3">' + '<div class="col-sm-12">' + '<label class="form-label"><b>Work Experience:</b></label><br>';

							var count = 0;
							let start = false;
							let workDesignation = "";
							let workFrom = "";
							let workTo = "";
							let workCompany = "";
							let workCountry = "";


							for (var i = 0; i < workPinLength; i++) {
								if (workPinArr.indexOf(workPinArr[i]) == workPinArr.lastIndexOf(workPinArr[i]) || (workPinArr.indexOf(workPinArr[i]) != workPinArr.lastIndexOf(workPinArr[i]) && workPinArr.indexOf(workPinArr[i]) == i)) {
									if (workFieldNameArr[i] != undefined & workFieldNameArr[i] != " " & workValueArr[i] != undefined & workValueArr[i] != " ") {
										if (workFieldNameArr[i] == "Company/Institute/Organization" || workFieldNameArr[i] == "Designation" || workFieldNameArr[i] == "Applicant Designation"
											|| workFieldNameArr[i] == "From" || workFieldNameArr[i] == "To" || workFieldNameArr[i] == "Country" || workFieldNameArr[i] == "Applicant Country") {
											if (workFieldNameArr[i].toUpperCase() == ("Company/Institute/Organization").toUpperCase() || workFieldNameArr[i].toUpperCase() == ("Company / Institute / Organization").toUpperCase()) {
												if (start) {
													start = false;
												}
												count++;
												start = true;
											} if (start) {

												if (workFieldNameArr[i] == "Designation" || workFieldNameArr[i] == "Applicant Designation") {
													workDesignation = workValueArr[i];
												}

												if (workFieldNameArr[i] == "From") {
													workFrom = workValueArr[i];
												}

												if (workFieldNameArr[i] == "To") {
													workTo = workValueArr[i];
												}

												if (workFieldNameArr[i] == "Company/Institute/Organization") {
													workCompany = workValueArr[i];
												}

												if (workFieldNameArr[i] == "Applicant Country" || workFieldNameArr[i] == "Country") {
													workCountry = workValueArr[i];
												}

											}
											if (workFieldNameArr[i + 1]) {
												if (workFieldNameArr[i + 1] == "Company/Institute/Organization" || workFieldNameArr[i + 1].toUpperCase() == ("Company / Institute / Organization").toUpperCase()) {
													let chkData = "";
													if (workFrom != "") {
														const date1 = new Date(workFrom);
														let date2 = "";
														if (workTo != "") {
															date2 = new Date(workTo);
														} else {
															date2 = new Date();
														}
														const timeDiff = date2 - date1;
														const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
														const years = Math.floor(daysDiff / 365);
														const remainingDaysAfterYears = daysDiff % 365;
														const months = Math.floor(remainingDaysAfterYears / 30);
														const days = remainingDaysAfterYears % 30;
														let result = '';

														if (years > 0) {
															result += `${years} y `;
														}
														if (months > 0) {
															result += `${months} m `;
														}
														if (days > 0) {
															result += `${days} d `;
														}
														chkData = workDesignation + "(" + result.trim() + ") - " + workCompany + ", " + workCountry;

													} else {
														chkData = workDesignation + " - " + workCompany + ", " + workCountry;
													}


													workDataST += '<input type="checkbox" name="workExp" class="qualification-checkbox" id="prof" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';

													workDesignation = "";
													workFrom = "";
													workTo = "";
													workCompany = "";
													workCountry = "";
													start = false;
												}
											}
										}
									}
								}
							}

							if (start) {
								let chkData = "";
								if (workFrom != "") {
									const date1 = new Date(workFrom);
									let date2 = "";
									if (workTo != "") {
										date2 = new Date(workTo);
									} else {
										date2 = new Date();
									}
									const timeDiff = date2 - date1;
									const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
									const years = Math.floor(daysDiff / 365);
									const remainingDaysAfterYears = daysDiff % 365;
									const months = Math.floor(remainingDaysAfterYears / 30);
									const days = remainingDaysAfterYears % 30;
									let result = '';

									if (years > 0) {
										result += `${years} y `;
									}
									if (months > 0) {
										result += `${months} m `;
									}
									if (days > 0) {
										result += `${days} d `;
									}
									chkData = workDesignation + "(" + result.trim() + ") - " + workCompany + ", " + workCountry;

								} else {
									chkData = workDesignation + " - " + workCompany + ", " + workCountry;
								}


								workDataST += '<input type="checkbox" name="workExp" class="qualification-checkbox" id="prof" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';

								workDesignation = "";
								workFrom = "";
								workTo = "";
								workCompany = "";
								workCountry = "";
								start = false;
							}




							for (var i = 0; i < newWorkDetailsLength; i++) {
								workDesignation = newWorkDesignation[i];
								workFrom = newWorkStartDate[i];
								workTo = newWorkEndDate[i];
								workCompany = newWorkOrganization[i];
								workCountry = newWorkAwardingCountry[i];
								let chkData = "";
								if (workFrom != "") {
									const date1 = new Date(workFrom);
									let date2 = "";
									if (workTo != "") {
										date2 = new Date(workTo);
									} else {
										date2 = new Date();
									}
									const timeDiff = date2 - date1;
									const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
									const years = Math.floor(daysDiff / 365);
									const remainingDaysAfterYears = daysDiff % 365;
									const months = Math.floor(remainingDaysAfterYears / 30);
									const days = remainingDaysAfterYears % 30;
									let result = '';

									if (years > 0) {
										result += `${years} y `;
									}
									if (months > 0) {
										result += `${months} m `;
									}
									if (days > 0) {
										result += `${days} d `;
									}
									chkData = workDesignation + "(" + result.trim() + ") - " + workCompany + ", " + workCountry;

								} else {
									chkData = workDesignation + " - " + workCompany + ", " + workCountry;
								}
								workDataST += '<input type="checkbox" name="workExp" class="qualification-checkbox" id="prof" data-target="#educationList" value="' + chkData + '"> ' + chkData + '</input><br>';


							}

							if (count == 0) {
								workDataST += '</div></div>';

							}

						}



						Swal.fire({
							title: 'Select Student Qualification',
							html: `
							<form>
								<div class="row mb-3">
									<div class="col-sm-12" style="text-align: left;">
										<label class="form-label">Select Qualification:</label><br>
										<input type="radio" name="selectedForm" id="graduate" ${(graduate ? 'checked' : '')} value="E"><span style="margin-right: 1rem; padding-left: 5px;">Graduate</span>
										<input type="radio" name="selectedForm" id="professional" ${(professional ? 'checked' : '')} value="P"><span style="margin-right: 1rem; padding-left: 5px;">Professional</span>
										<input type="radio" name="selectedForm" id="pendingQualification" ${(pendingQualification ? 'checked' : '')} value="Pe"><span style="margin-right: 1rem; padding-left: 5px;">Pending Qualification</span>
										<input type="radio" name="selectedForm" id="specialApproval" ${(specialApproval ? 'checked' : '')} value="S"><span style="margin-right: 1rem; padding-left: 5px;">Special Approval</span>
									</div>
									<div class="col-sm-12" style="text-align: left;"><br><br>
										${educationDataST}${profDataST}${workDataST}
									</div>
								</div>
							</form>`,
							focusConfirm: false,
							showCancelButton: true,
							confirmButtonText: 'Save',
							showDenyButton: true,
							denyButtonText: 'Edit & Save',  // Add Edit button
							customClass: {
								popup: 'custom-width-popup'
							}

						}).then((result) => {

							if (result.isDenied) {
								let arrayEXp_ = [];
								let selectionCategory = "";
								let selectedFromGraduate = "0";
								let selectedFromProfessional = "0";
								let selectedFromPendingQulification = "0";
								let selectedFromSpecialApprove = "0";

								if ($('input[name="selectedForm"]:checked').val() == "P") {
									if (selectionCategory == "E") {
										selectionCategory = "P,E";
									} else {
										selectionCategory = "P";
									}
									selectedFromProfessional = "1";
								}
								if ($('input[name="selectedForm"]:checked').val() == "E") {
									if (selectionCategory == "P") {
										selectionCategory = "P,E";
									} else {
										selectionCategory = "E";
									}
									selectedFromGraduate = "1";
								}
								if ($('input[name="selectedForm"]:checked').val() == "Pe") {
									selectionCategory = "Pe";
									selectedFromPendingQulification = "1";
								}
								if ($('input[name="selectedForm"]:checked').val() == "S") {
									selectionCategory = "S";
									selectedFromSpecialApprove = "1";
								}


								$("input:checkbox[name=educationExp]:checked").each(function () {
									arrayEXp_.push($(this).val());
								});
								$("input:checkbox[name=profExp]:checked").each(function () {
									arrayEXp_.push($(this).val());
								});
								$("input:checkbox[name=workExp]:checked").each(function () {
									arrayEXp_.push($(this).val());
								});

								let arrayEXp = arrayEXp_.join("\n");

								Swal.fire({
									title: 'Edit Experience',
									html: `<textarea id="expTextarea" class="form-control" rows="10">${arrayEXp}</textarea>`,
									focusConfirm: false,
									showCancelButton: true,
									confirmButtonText: 'Save',
									preConfirm: () => {
										let formattedExp = document.getElementById('expTextarea').value;
										let getApplicant = {
											action: "data4UpdateInterViewDecision",
											status: "1",
											apNo: applicationNo,
											selectedNote: formattedExp,
											selectionCategory: selectionCategory,
											selectedFromGraduate: selectedFromGraduate,
											selectedFromProfessional: selectedFromProfessional,
											selectedFromPendingQulification: selectedFromPendingQulification,
											selectedFromSpecialApprove: selectedFromSpecialApprove,
											authcode: authcode,
											username: dataRep['userId'],
										};
										$.ajax({
											type: 'POST',
											url: 'rules/applicant.php',
											data: getApplicant,
											dataType: 'json',
											success: function (res) {
												if (res.status === 200) {
													$("#statusLabel" + apNo).html('<b>Selected</b><br><p>- ' + formattedExp.replace(/\n/g, '<br>- ') + '</p>');

												} else {
													console.log(res);
												}
											},
											error: function (error) {
												console.log(error)

											}
										});

									}
								});

							} else if (result.isConfirmed) {


								let arrayEXp_ = [];
								let selectionCategory = "";
								let selectedFromGraduate = "0";
								let selectedFromProfessional = "0";
								let selectedFromPendingQulification = "0";
								let selectedFromSpecialApprove = "0";

								if ($('input[name="selectedForm"]:checked').val() == "P") {
									if (selectionCategory == "E") {
										selectionCategory = "P,E";
									} else {
										selectionCategory = "P";
									}
									selectedFromProfessional = "1";
								}
								if ($('input[name="selectedForm"]:checked').val() == "E") {
									if (selectionCategory == "P") {
										selectionCategory = "P,E";
									} else {
										selectionCategory = "E";
									}
									selectedFromGraduate = "1";
								}
								if ($('input[name="selectedForm"]:checked').val() == "Pe") {
									selectionCategory = "Pe";
									selectedFromPendingQulification = "1";
								}
								if ($('input[name="selectedForm"]:checked').val() == "S") {
									selectionCategory = "S";
									selectedFromSpecialApprove = "1";
								}

								$("input:checkbox[name=educationExp]:checked").each(function () {
									arrayEXp_.push($(this).val());
								});
								$("input:checkbox[name=profExp]:checked").each(function () {
									arrayEXp_.push($(this).val());
								});
								$("input:checkbox[name=workExp]:checked").each(function () {
									arrayEXp_.push($(this).val());
								});

								let formattedExp = arrayEXp_.join("\n");
								// console.log(formattedExp)

								let getApplicant = {
									action: "data4UpdateInterViewDecision",
									status: "1",
									apNo: applicationNo,
									selectedNote: formattedExp,
									selectionCategory: selectionCategory,
									selectedFromGraduate: selectedFromGraduate,
									selectedFromProfessional: selectedFromProfessional,
									selectedFromPendingQulification: selectedFromPendingQulification,
									selectedFromSpecialApprove: selectedFromSpecialApprove,
									authcode: authcode,
									username: dataRep['userId'],
								};
								// console.log(getApplicant);


								$.ajax({
									type: 'POST',
									url: 'rules/applicant.php',
									data: getApplicant,
									dataType: 'json',
									success: function (res) {
										if (res.status === 200) {
											$("#statusLabel" + apNo).html('<b>Selected</b><br><p>- ' + formattedExp.replace(/\n/g, '<br>- ') + '</p>');
										} else {
											console.log(res);
										}
									},
									error: function (error) {
										console.log(error)

									}
								});




							}

						});

					}
				});



			} else {
				Swal.fire({
					icon: 'error',
					title: 'Invalid Application Number',
					html: "Please enter valid application number",
					showConfirmButton: true,
				});
			}
		},
		error: function (error) {
			console.log(error)
		}
	});




}

// Call the function with example data



function updateInterViewDecision(status, apNo) {

	if (status == 1) {
		openQualificationDialog({
			applicationNo: applicationNoArr[apNo],
			apNo: apNo,
			graduate: false,
			professional: false,
			pendingQualification: false,
			specialApproval: false,
			education: '',
			professionalExperience: '',
			workExperience: ''
		});
	} else {

		let getApplicant = {
			action: "data4UpdateInterViewDecision",
			status: status,
			apNo: applicationNoArr[apNo],
			selectedNote: "",
			selectionCategory: "",
			selectedFromGraduate: 0,
			selectedFromProfessional: 0,
			selectedFromPendingQulification: 0,
			selectedFromSpecialApprove: 0,
			authcode: authcode,
			username: dataRep['userId'],

		};

		$.ajax({
			type: 'POST',
			url: 'rules/applicant.php',
			data: getApplicant,
			dataType: 'json',
			success: function (res) {
				if (res.status === 200) {
					if (status == 0) {
						$("#statusLabel" + apNo).text("Not yet decided");
					} else if (status == 1) {
						$("#statusLabel" + apNo).text("Selected");
					} else if (status == 2) {
						$("#statusLabel" + apNo).text("Not selected");
					} else if (status == 3) {
						$("#statusLabel" + apNo).text("Absent");
					}

				} else {
					console.log(res)

				}
			},
			error: function (error) {
				console.log(error)

			}
		});
	}


}


function filterListInterViewPanelAddDecisionOnchange() {


	if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "" && $("#achedamicYear").val() != "0") {
		FindPanelAddDecision($("#selectedDegreeName").val(), $("#achedamicYear").val());
	}

}





