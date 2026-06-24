var applicantDTable;
function DataTableForInterViewPanelList() {

	var buttons = [];

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator'
		|| dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar'
		|| dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Subject Clerk'
		|| dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
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
				applicantDTable.rows().every(function (index) {
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

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator'
		|| dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar'

		|| dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Subject Clerk'
		|| dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'Program Assistant/Clerk') {
		buttons.push({
			text: 'Remove Applicant from Panel',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				var dataArray = [];
				applicantDTable.rows().every(function (index) {
					var rowData = this.data();
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						applicationNoArr[index];
						var rowData = {
							"Application No": applicationNoArr[index]
						};
						dataArray.push(rowData);
					}
				});

				var jsonData = JSON.stringify(dataArray);

				let Applicants = {
					action: "data4removeApplicantPanel",
					degreeCode: $("#selectedDegreeName").val(),
					academicYear: $("#achedamicYear").val(),
					stu_Data: jsonData,
					authcode: authcode,
					username: dataRep['userId'],
				};

				// Show SweetAlert confirmation dialog
				Swal.fire({
					title: "Are you sure?",
					text: "Do you want to remove the selected applicant(s) form this panel.",
					icon: "warning",
					showCancelButton: true,
					confirmButtonText: "Yes, delete it!",
					cancelButtonText: "No, cancel!",
					dangerMode: true
				}).then((result) => {
					if (result.isConfirmed) {
						$.ajax({
							type: 'POST',
							url: 'rules/applicant.php',
							data: Applicants,
							dataType: 'json',
							success: function (applicants) {
								console.log(applicants)
								if (applicants && applicants.status === 200) {
									Swal.fire({
										title: "Success",
										text: "Applicant has been removed.",
										icon: "success",
										timer: 5000, // 5 seconds
										showConfirmButton: false // Automatically closes after the timer
									}).then(() => {
										showMenu('formInterViewPanelList');
										setDegrees();
										DataTableForInterViewPanelList();
										FindPanel(Applicants.degreeCode, Applicants.academicYear);
									});

									// Automatically call the function after 5 seconds
									setTimeout(() => {
										showMenu('formInterViewPanelList');
										setDegrees();
										DataTableForInterViewPanelList();
										FindPanel(Applicants.degreeCode, Applicants.academicYear);
									}, 5000);
								} else {
									console.log()
									Swal.fire("Error", "Failed to remove the applicant.", "error");
								}
							},
							error: function (error) {
								console.log(error);
								Swal.fire("Error", "An error occurred while processing your request.", "error");
							}
						});
					}
				});
			}
		});




		buttons.push({
			text: 'Edit Panel',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "" && $("#achedamicYear").val() != "0" && $("#selectedPanel").val() != "" && $("#selectedPanel").val() != null) {
					//get Panel Details and Set Students

					let getApplicant = {
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
						success: function (panels) {
							if (panels && panels.length > 0 && panels[0].status === 200) {

								//get applicants
								let getApplicantData = {
									action: "data4getApplicantPanelList",
									panelId: $("#selectedPanel").val(),
									degreeCode: $("#selectedDegreeName").val(),
									academicYear: $("#achedamicYear").val(),
									paneName: panels[0].panel_name,
									panelDate: panels[0].interviewdate,
									panelTime: panels[0].interviewtime,
									authcode: authcode,
									username: dataRep['userId'],
								};
								$.ajax({
									type: 'POST',
									url: 'rules/applicant.php',
									data: getApplicantData,
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
												degreeCodeArr[applicationNoLength] = applicant.sdegreeCode;
												achedamicYearArr[applicationNoLength] = applicant.achedamicYear;
												applicationNoLength++;
											});

											// console.log($("#selectedPanel").val())
											// console.log(getApplicantData.paneName)
											// console.log(getApplicantData.panelDate)
											// console.log(getApplicantData.panelTime)
											showMenu('appointPanelEditForm', $("#selectedPanel").val(), getApplicantData.paneName, getApplicantData.panelDate, getApplicantData.panelTime);
											setDegrees();
											DataTableInterViewAppointForm();
										} else {
										}
									},
									error: function (error) {
										console.log(error)

									}
								});

							} else {
							}
						},
						error: function (error) {
							console.log(error)

						}
					});




				} else {
					alert("Please Select a value from the select Box(s)");
				}
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
			// "info": "Showing page _PAGE_ of _PAGES_ | Total Applicants : _MAX_",
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


function formInterViewPanelList(dsp) {

	var selectedChecked = "";
	var registeredChecked = "";
	str = "";
	title = "Interview Panel List";

	if (dsp == "formInterViewPanelList") {
		filterListInterViewPanelOnchange();
		console.log(dsp);
		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper  align-items-center" style="width: 100%;">';
		str += '<div class="navbar-nav mr-lg-2" style="display:block">';
		str += '<div class="nav-item ml-0">';
		str += '<div class="row" style="padding:3px 0;    display: -webkit-box;">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-2 d-flex align-items-center"><h4 class="navTitle">' + title + '</h4></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department') {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListInterViewPanelOnchange();" >';
			str += '</select>';
		}
		else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListInterViewPanelOnchange();" >';
			str += '</select>';
		}
		str += '</div>';
		let date = new Date().getFullYear();
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-7">';
		str += '<div class="row">';
		str += '<div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterListInterViewPanelOnchange();">';
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
		str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="filterListApplicantInterViewPanel();" id="filterBtn">View List</button>';
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
		str += '<th width="7%">Mobile No</th>';

		str += '<th>Tel:No.</th>';
		str += '<th>Email</th>';
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
						str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactMobileArr[i].replace(/\s/g, '') + '"])>' + studentContactMobileArr[i] + '</span></td>';

						str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactLanArr[i].replace(/\s/g, '') + '"])>' + studentContactLanArr[i] + '</span></td>';
						str += '<td><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + studentContactEmailArr[i] + '" target="_blank"> ' + studentContactEmailArr[i] + '</a></td>';

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
function checkdeleteorsaveapplication() {
	checkdeleteorsave = 'deletefunction';
}
function CompleteApplicationEng(type) {

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
				var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
				newStr += "<div id='topics1' class='info'></div>";
				// newStr += '<img src="img/wordTitle3-l.png" width="1000"/>';

				newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>" + $("#selectedDegreeName option:selected").text(); + " Degree Programme</div>";
				newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year " + academicYear + "</div>";
				newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch : " + batch + "</div>";
				newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List of Applicants</div>";
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
					isrHandle.getDoc(newStr, exportFilename);
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
function filterListApplicantInterViewPanel() {
	if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "" && $("#achedamicYear").val() != "0" && $("#selectedPanel").val() != "" && $("#selectedPanel").val() != null) {
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
						degreeCodeArr[applicationNoLength] = applicant.sdegreeCode;
						achedamicYearArr[applicationNoLength] = applicant.achedamicYear;

						applicationNoLength++;
					});
					showMenu('formInterViewPanelList');
					setDegrees();
					DataTableForInterViewPanelList();
					// console.log(getApplicant.degreeCode)
					FindPanel(getApplicant.degreeCode, getApplicant.academicYear);



					// console.log(findData);
					$.ajax({
						type: 'POST',
						url: 'rules/applicant.php',
						data: findData,
						dataType: 'json',
						success: function (panels) {

							// console.log(panels);
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


function FindPanel(degreeCode, achedamicYear) {
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
function filterListInterViewPanelOnchange() {


	if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "" && $("#achedamicYear").val() != "0") {
		FindPanel($("#selectedDegreeName").val(), $("#achedamicYear").val());

	}

}





