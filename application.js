var selectedDegreeCode = studentNoList = selectedCheckboxChecked = "";
var checkboxCount = count = semcount1 = semcount2 = semcount3 = semcount4 = semcount0 = 0;
dataRep["appSemester"] = dataRep["degreeYer"] = "";
var degreeStr = degreeStr1 = "";



var selectedDegreeCode;
var selectedAcademicYear;
var selectedAppSemester;
var selectedDegreeCode;
var selectedStudentNo;
function viewSubjectListForExamApply() {

	if (dataRep['selectedAttempt'] == "F" || dataRep['selectedAttempt'] == "R" || dataRep['selectedAttempt'] == "RR") {
		GetSubjectForApplyDTable.clear();

		var postData2 = {
			action: "checkAlreadyApply",
			degreeCode: $('#selecteddegree').val(),
			achademicYear: $('#achedamicYear').val(),
			semester: dataRep['appSemester'],
			attempt: dataRep['selectedAttempt'],
			studentNo: $('#studentNo').val(),
			authcode: authcode,
			username: dataRep['userId'],
		};

		selectedDegreeCode = $('#selecteddegree').val();
		selectedAcademicYear = $('#achedamicYear').val();
		selectedAppSemester = dataRep['appSemester'];
		selectedAttempt = dataRep['selectedAttempt'];
		selectedStudentNo = $('#studentNo').val(),

			$.ajax({
				type: 'POST',
				url: 'rules/examApply.php',
				data: postData2,
				dataType: 'json',
				success: function (response2) {
					console.log(response2)
					if (response2.status === 200) {
						if (response2.rows > 0 && !(dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Dean')) {
							GetSubjectForApplyDTable.button(0).disable();
							GetSubjectForApplyDTable.button(1).disable();

							GetSubjectForApplyDTable.clear().draw();
							Swal.fire({
								title: "Already Applyed!",
								text: "Student Already Applyed for Exam!",
								icon: "warning"
							});
						} else {
							var postData = {
								action: "getSubject",
								degreeCode: $('#selecteddegree').val(),
								achademicYear: $('#achedamicYear').val(),
								semester: dataRep['appSemester'],
								authcode: authcode,
								username: dataRep['userId'],
							};

							$.ajax({
								type: 'POST',
								url: 'rules/examApply.php',
								data: postData,
								dataType: 'json',
								success: function (response) {
									if (response && response.length > 0 && response[0].status === 200) {

										if (response2.rows > 0) {
											if (dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Dean') {
												GetSubjectForApplyDTable.button(0).disable();
												GetSubjectForApplyDTable.button(1).enable();
											} else {
												GetSubjectForApplyDTable.button(0).enable();
											}


										} else {
											if (dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Dean') {
												GetSubjectForApplyDTable.button(0).enable();
												GetSubjectForApplyDTable.button(1).disable();
											} else {
												GetSubjectForApplyDTable.button(0).disable();
											}
										}

										if (dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Dean') {

											var postData3 = {
												action: "getAppliedSubject",
												degreeCode: selectedDegreeCode,
												achademicYear: selectedAcademicYear,
												semester: selectedAppSemester,
												attempt: selectedAttempt,
												studentNo: selectedStudentNo,
												authcode: authcode,
												username: dataRep['userId'],
											};

											$.ajax({
												type: 'POST',
												url: 'rules/examApply.php',
												data: postData3,
												dataType: 'json',
												success: function (response5) {
													console.log(response5)
													console.log(response2)
													console.log(response2.rows)

													console.log(response)
													if (response5 && response5.length > 0 && response5[0].status === 200) {

														if (response2.rows > 0) {

															$.each(response, function (index, subject) {
																let selected = "";
																$.each(response5, function (index, subjectApplied) {
																	if (subject.subjectCode == subjectApplied.subjectCode) {
																		selected = "checked";
																	}
																});
																let disabled = "disabled";

																GetSubjectForApplyDTable.row.add([
																	'<input type="checkbox" id="checkSelected' + index + '" name="checkSelected' + index + '" class="form-check-input" style="margin: 0;position: relative;" ' + selected + '  ' + disabled + '>',  // Checkbox column
																	subject.subjectCode,
																	subject.subjectTitle,
																	subject.credits
																]).draw(false);
															});
														} else {
															if (dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Dean') {
																GetSubjectForApplyDTable.button(0).enable();
																GetSubjectForApplyDTable.button(1).disable();
															} else {
																GetSubjectForApplyDTable.button(0).disable();
															}

															$.each(response, function (index, subject) {
																let selected = "";
																let disabled = "";
																if (subject.sstatus == "o") {
																	selected = "checked";
																	disabled = "disabled";
																} else {
																	selected = "";
																	disabled = "";
																}
																GetSubjectForApplyDTable.row.add([
																	'<input type="checkbox" id="checkSelected' + index + '" name="checkSelected' + index + '" class="form-check-input" style="margin: 0;position: relative;" ' + selected + '  ' + disabled + '>',  // Checkbox column
																	subject.subjectCode,
																	subject.subjectTitle,
																	subject.credits
																]).draw(false);
															});
														}



													} else {
														$.each(response, function (index, subject) {
															let selected = "";
															let disabled = "";
															if (subject.sstatus == "o") {
																selected = "checked";
																disabled = "disabled";
															} else {
																selected = "";
																disabled = "";
															}
															GetSubjectForApplyDTable.row.add([
																'<input type="checkbox" id="checkSelected' + index + '" name="checkSelected' + index + '" class="form-check-input" style="margin: 0;position: relative;" ' + selected + '  ' + disabled + '>',  // Checkbox column
																subject.subjectCode,
																subject.subjectTitle,
																subject.credits
															]).draw(false);
														});

													}
												},
												error: function (error) {
													GetSubjectForApplyDTable.button(0).disable();
													GetSubjectForApplyDTable.button(1).disable();

													Swal.fire({
														title: "Error!",
														text: "Please try again later!",
														icon: "error"
													});
												}
											});






										} else {

											$.each(response, function (index, subject) {

												let selected = "";
												let disabled = "";
												if (subject.sstatus == "o") {
													selected = "checked";
													disabled = "disabled";
												} else {
													selected = "";
													disabled = "";
												}

												GetSubjectForApplyDTable.row.add([
													'<input type="checkbox" id="checkSelected' + index + '" name="checkSelected' + index + '" class="form-check-input" style="margin: 0;position: relative;" ' + selected + '  ' + disabled + '>',  // Checkbox column
													subject.subjectCode,
													subject.subjectTitle,
													subject.credits
												]).draw(false);
											});
										}
										GetSubjectForApplyDTable.draw();
									} else {

										GetSubjectForApplyDTable.button(0).disable();
										GetSubjectForApplyDTable.button(1).disable();


										Swal.fire({
											title: "Error!",
											text: "No student available",
											icon: "error"
										});
									}
								},
								error: function (error) {
									GetSubjectForApplyDTable.button(0).disable();
									GetSubjectForApplyDTable.button(1).disable();

									Swal.fire({
										title: "Error!",
										text: "Please try again later!",
										icon: "error"
									});
								}
							});
						}
					} else {
						Swal.fire({
							title: "Error!",
							text: "Please try again later!",
							icon: "error"
						});
					}
				},
				error: function (error) {
					console.log(error)

					Swal.fire({
						title: "Error!",
						text: "Please try again later!",
						icon: "error"
					});
				}
			});


	}
	else {
		Swal.fire({
			title: "Please Select Attempt",
			text: "Please select attempt and click view list button",
			icon: "warning"
		});
	}


}


function getSubjectExamAppliedSelected() {
	let selectedSubjectCodes = [];
	GetSubjectForApplyDTable.rows().every(function (index) {
		// Get the data for the current row
		var rowData = this.data();

		var columns = {
			'checkbox': rowData[0],
			'subjectCode': rowData[1],
			'subjectName': rowData[2],
			'subjectCredit': rowData[3]
		};

		var checkbox = $(this.node()).find('input[type="checkbox"]');
		var isChecked = checkbox.prop('checked');

		if (isChecked) {
			selectedSubjectCodes.push(columns.subjectCode);
		}

	});
	return selectedSubjectCodes;
}

var GetSubjectForApplyDTable;
function initializedGetSubjectForApplyExamDataTable() {
	var buttons = [];

	if (dataRep['roleName'] == "Dean" || dataRep['roleName'] == "FGS Deputy Registrar") {
		buttons.push({
			text: 'Save',
			className: 'btn btn-primary',
			id: 'saveApplication',
			enabled: false,
			action: function (e, dt, node, config) {
				const currentDate = new Date();
				const formattedDate = currentDate.toISOString().split('T')[0];
				if (dataRep['selectedAttempt'] == "R") {
					Swal.fire({
						title: 'Select Repeat Reason',
						input: 'select',
						inputOptions: {
							1: 'Repeat',
							2: 'Medical/Other_Reasons',
							3: 'Batch Differ',
						},
						inputAttributes: {
							class: 'form-control',
						},
						inputPlaceholder: 'Select an option',
						showCancelButton: true,
						confirmButtonText: 'Next',
					}).then((result) => {
						if (result.isConfirmed) {
							const selectedOption = result.value;
							let reason = "";
							console.log(selectedOption);
							if (selectedOption == 1) {
								reason = "Repeat";
							} else if (selectedOption == 2) {
								reason = "Medical/Other_Reasons";
							} else if (selectedOption == 3) {
								reason = "BatchDiffer";
							} else {
								Swal.fire({
									title: "Not Selected Reason!",
									text: "Withut selecting repeat reason you can't applyed exam!",
									icon: "warning"
								});
							}

							if (reason != "") {
								let postDataForApply = {
									action: "FRRexamApply",
									degreeCode: selectedDegreeCode,
									achedamicYear: selectedAcademicYear,
									studentNo: selectedStudentNo,
									semester: selectedAppSemester,
									attempt: selectedAttempt,
									subjectCodes: JSON.stringify(getSubjectExamAppliedSelected()),
									appliedDate: formattedDate,
									reason: reason,
									createdBy: dataRep['userName'],
									authcode: authcode,
									username: dataRep['userId'],

								};

								//insert
								Swal.fire({
									title: 'Are you sure?',
									html: ``,
									icon: 'question',
									showCancelButton: true,
									confirmButtonText: 'Yes, apply!',
									cancelButtonText: 'No, cancel!',
								}).then((result) => {
									if (result.isConfirmed) {
										$.ajax({
											type: 'POST',
											url: 'rules/examApply.php',
											data: postDataForApply,
											dataType: 'json',
											success: function (response) {
												if (response.status === 200) {
													setValuesForApplication();
													Swal.fire({
														title: "Success!",
														text: "Exam successfully applied.",
														icon: "success"
													});
												} else {
													Swal.fire({
														title: "Error!",
														text: "Exam application failed. Please try again.",
														icon: "error"
													});
												}
											},
											error: function (error) {
												console.log(error)

												Swal.fire({
													title: "Error!",
													text: "Please try again later!",
													icon: "error"
												});
											}
										});

									}
								});



							}

						}
					});

				} else if (dataRep['selectedAttempt'] == "F" || dataRep['selectedAttempt'] == "RR") {

					let postDataForApply = {
						action: "FRRexamApply",
						degreeCode: selectedDegreeCode,
						achedamicYear: selectedAcademicYear,
						studentNo: selectedStudentNo,
						semester: selectedAppSemester,
						attempt: selectedAttempt,
						subjectCodes: JSON.stringify(getSubjectExamAppliedSelected()),
						appliedDate: formattedDate,
						createdBy: dataRep['userName'],
						authcode: authcode,
						username: dataRep['userId'],

					};

					//insert
					Swal.fire({
						title: 'Are you sure?',
						html: ``,
						icon: 'question',
						showCancelButton: true,
						confirmButtonText: 'Yes, apply!',
						cancelButtonText: 'No, cancel!',
					}).then((result) => {
						if (result.isConfirmed) {
							$.ajax({
								type: 'POST',
								url: 'rules/examApply.php',
								data: postDataForApply,
								dataType: 'json',
								success: function (response) {
									if (response.status === 200) {
										setValuesForApplication();
										Swal.fire({
											title: "Success!",
											text: "Exam successfully applied.",
											icon: "success"
										});
									} else {
										Swal.fire({
											title: "Error!",
											text: "Exam application failed. Please try again.",
											icon: "error"
										});
									}
								},
								error: function (error) {
									console.log(error)

									Swal.fire({
										title: "Error!",
										text: "Please try again later!",
										icon: "error"
									});
								}
							});

						}
					});


				}
			}
		});
	}


	buttons.push({
		text: 'Delete',
		className: 'btn btn-primary',
		id: 'saveApplication',
		enabled: false,
		action: function (e, dt, node, config) {
			let deletedExamData = {
				action: "DELexamApply",
				degreeCode: selectedDegreeCode,
				achedamicYear: selectedAcademicYear,
				studentNo: selectedStudentNo,
				semester: selectedAppSemester,
				attempt: selectedAttempt,
				deleteBy: dataRep['userName'],
				authcode: authcode,
				username: dataRep['userId'],
			};

			Swal.fire({
				title: 'Are you sure?',
				html: ``,
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Yes, Delete!',
				cancelButtonText: 'No, cancel!',
			}).then((result) => {
				if (result.isConfirmed) {
					$.ajax({
						type: 'POST',
						url: 'rules/examApply.php',
						data: deletedExamData,
						dataType: 'json',
						success: function (response) {
							if (response.status === 200) {
								setValuesForApplication();
								Swal.fire({
									title: "Success!",
									text: "Exam application deleted successfully completed.",
									icon: "success"
								});
							} else {
								Swal.fire({
									title: "Error!",
									text: "Exam application delete failed. Please try again.",
									icon: "error"
								});
							}
						},
						error: function (error) {
							console.log(error)

							Swal.fire({
								title: "Error!",
								text: "Please try again later!",
								icon: "error"
							});
						}
					});

				}
			});




		}
	});


	GetSubjectForApplyDTable = $('#examApplyedSubject').DataTable({
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
		select: {
			style: 'multi',
			selector: 'td:first-child',
		},
		order: [1, 'asc'],
	});

}



function getStudents() {
	if (document.getElementById('selecteddegree').value == "Please scroll down to see the records" || document.getElementById('achedamicYear').value == "Please Select Academic Year") {
		// alert("Please Select a value from the select Box(s)");

	} else {
		dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		dataRep["selectedDegreeName"] = document.getElementById('selecteddegree').value;

		if (document.getElementById('studentNo')) {
			document.getElementById('studentNo').value = "";
		}
		if (document.getElementById('studentName')) {
			document.getElementById('studentName').value = "";
		}
		sendForm("data4ApplicationFormExam");
		initializedGetSubjectForApplyExamDataTable();
	}
}

function clearApplicationData() {
	dataRep["achedamicYear"] = "";
	dataRep["selectedDegreeName"] = "";
}

function setValuesForApplication() {
	GetSubjectForApplyDTable.clear().draw();
	GetSubjectForApplyDTable.button(0).disable();
	GetSubjectForApplyDTable.button(1).disable();
	// for (var k = 0; k < studentNoLength; k++) {

	// 	if (dataRep["studentNo"] == studentNoArr[k]) {

	// 		dataRep["studentName"] = studentNameArr[k];
	// 		dataRep["degreeTitle"] = degreeTitleArr[k];
	// 		dataRep["degreeYer"] = achedamicYearArr[k];


	// 	}

	// }

	// var stuinfoSTR = "";

	// stuinfoSTR += "<div style='margin-top:20px;float:left;clear:both;'>";
	// stuinfoSTR += "<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div> ";
	// stuinfoSTR += "<input type='text'  name='studentName' disabled id='studentName' value= '" + dataRep["studentName"] + "'  onchange='dataRep[this.name]=this.value;' >";
	// document.getElementById('studentDetailListView').style.display = "block";
	// document.getElementById('studentDetailListView').innerHTML = stuinfoSTR;

}




function formApplication(dsp) {

	if (dataRep['roleName'] == "Dean" || dataRep['roleName'] == "FGS Deputy Registrar") {
		title = "Exam Application Form";
	} else {
		title = "Exam Application Delete";
	}

	str = "";
	var keyDisabled = fieldDisabled = "";
	if (dsp == "formApplication") {
		keyDisabled = "Disabled";

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
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator') {
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


		programName1 = "";

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


		str += "<div id='updateApplicantList'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Head of the Department') {
			str += '<div class="form-group row mb-2"><div class="col-sm-6">';
			str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
			str += '<div class="col-sm-9" style="display: inline-flex;">';
			str += '<select class="form-control form-control-sm" id="selecteddegree" onchange="dataRep[this.id]=this.value;getStudents();">';
			str += programName;
			str += programName1;
			str += '</select>';
			str += '</div></div>';
		}
		else {
			str += '<div class="form-group row mb-2"><div class="col-sm-6">';
			str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
			str += '<div class="col-sm-9" style="display: inline-flex;">';
			str += '<select class="form-control form-control-sm" id="selecteddegree" onchange="dataRep[this.id]=this.value;getStudents();">';
			str += programName;
			str += '</select>';
			str += '</div></div>';
		}


		let date = new Date().getFullYear();


		str += '<div class="col-sm-4">'
		str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-sm-6" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;getStudents();">';
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
		str += '</div>';

		if (studentNoLength > 0) {


			str += '<div id="studentData">';
			str += '<div class="form-group row mb-2"><div class="col-sm-6">';
			str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Student No</label></div>';
			str += '<div class="col-sm-7" style="display: inline-flex;">';
			studentNoList = "";

			for (var i = 0; i < studentNoLength; i++) {
				if (document.getElementById('selecteddegree').value == degreeTitleArr[i]) {
					selectedDegreeCode = degreeCodeArr[i];
					break;
				}
			}

			for (var j = 0; j < studentNoLength; j++) {
				if (degreeCodeArr[j] == selectedDegreeCode) {
					studentNoList += "<option value='" + studentNoArr[j] + "' " + ((studentNoArr[j].trim() == dataRep["studentNo"].trim()) ? "selected" : "") + ">" + studentNoArr[j] + "</option>";
				}
			}

			str += '<select class="form-control form-control-sm" id="studentNo" onchange="dataRep[this.name]=this.value;setValuesForApplication();">';
			str += studentNoList;
			str += '</select>';
			str += '</div>';
			str += '</div></div>';

			str += '<div class="form-group row mb-2"><div class="col-sm-6">';
			str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Attempt</label></div>';
			str += '<div class="col-sm-7" style="display: inline-flex;">';
			str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='dataRep[this.name]=this.value;setValuesForApplication();' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div></div>";
			str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='dataRep[this.name]=this.value;setValuesForApplication();' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div></div>";
			str += "<div class='col-sm-5'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='dataRep[this.name]=this.value;setValuesForApplication();' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-Repeat<i class='input-helper'></i></label></div></div>";
			str += '</div>';
			str += '</div></div>';

			str += '<div class="form-group row mb-2"><div class="col-sm-6">';

			str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Semester : </label></div>';
			str += '<div class="col-sm-7" style="display: inline-flex;">';
			str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem1' class='form-check-input' name='appSemester' value='1' onchange='dataRep[this.name]=this.value;setValuesForApplication();' " + ((dataRep["appSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div></div>";
			str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem2' class='form-check-input' name='appSemester' value='2' onchange='dataRep[this.name]=this.value;setValuesForApplication();' " + ((dataRep["appSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div></div>";
			str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem3' class='form-check-input' name='appSemester' value='3' onchange='dataRep[this.name]=this.value;setValuesForApplication();' " + ((dataRep["appSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div></div>";
			str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem4' class='form-check-input' name='appSemester' value='4' onchange='dataRep[this.name]=this.value;setValuesForApplication();' " + ((dataRep["appSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div></div>";
			str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem0' class='form-check-input' name='appSemester' value='0' onchange='dataRep[this.name]=this.value;setValuesForApplication();' " + ((dataRep["appSemester"] == '0') ? "checked" : "") + ">End of Year<i class='input-helper'></i></label></div></div>";

			str += '</div>';
			str += '</div>';
			str += '</div>';


			str += '<div class="form-group row mb-2"><div class="col-sm-6">';
			str += '<div class="col-sm-3" style="display: inline-flex;"></div>';
			str += '<div class="col-sm-7" style="display: inline-flex;">';

			str += '<button type="button" class="btn btn-info mr-2" style="float:left" onclick="viewSubjectListForExamApply();">Find</button>';

			str += '</div>';
			str += '</div>';
			str += '</div>';

		}

		str += '</div></div>';
		str += '</div></div></div>';

		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="examApplyedSubject">';
		str += '<thead><tr>';
		str += '<th></th>';
		str += '<th>Subject Code</th>';
		str += '<th>Subject Name</th>';
		str += '<th>Credits</th>';
		str += '</tr></thead>';
		str += '<tbody>';

		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

	}

	return str;
}

function showSemApplication() {
	var tStr = "";
	tStr += "<div class='longIdentifier' style='clear:none;'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
	tStr += "<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";

	for (var i = 0; i < subjectCodeLength; i++) {
		if (selectedDegreeCode == subjectdegreeCodeArr[i] && subjectSemesterArr[i] == "1") {
			if (semcount1 == 0) {
				tStr += "<input type='radio' name='appSemester' id='appSem1' value='1' onchange='dataRep[this.name]=this.value;showDivApplicationForm()'>1";
				semcount1++;
			}
		}
		if (selectedDegreeCode == subjectdegreeCodeArr[i] && subjectSemesterArr[i] == "2") {
			if (semcount2 == 0) {
				tStr += "<input type='radio' name='appSemester' id='appSem2' value='2' onchange='dataRep[this.name]=this.value;showDivApplicationForm()'>2";
				semcount2++;
			}

		}
		if (selectedDegreeCode == subjectdegreeCodeArr[i] && subjectSemesterArr[i] == "3") {
			if (semcount3 == 0) {
				tStr += "<input type='radio' name='appSemester' id='appSem3' value='3' onchange='dataRep[this.name]=this.value;showDivApplicationForm()'>3";
				semcount3++;
			}

		}
		if (selectedDegreeCode == subjectdegreeCodeArr[i] && subjectSemesterArr[i] == "4") {
			if (semcount4 == 0) {
				tStr += "<input type='radio' name='appSemester' id='appSem4' value='4' onchange='dataRep[this.name]=this.value;showDivApplicationForm()'>4";
				semcount4++;
			}

		}
		if (selectedDegreeCode == subjectdegreeCodeArr[i] && subjectSemesterArr[i] == "0") {
			if (semcount0 == 0) {
				tStr += "<input type='radio' name='appSemester' id='appSem0' value='0' onchange='dataRep[this.name]=this.value;showDivApplicationForm()'>End of Year";
				semcount0++;
			}

		}
	}
	tStr += "</div>";
	tStr += "</div></br>";

	document.getElementById('semAppDiv').innerHTML = tStr;
}


function showDivApplicationForm() {
	count = 0;
	checkboxCount = 0;

	var newStr = "";

	var keyDisabled = fieldDisabled = "";
	keyDisabled = "Disabled";

	for (var i = 0; i < subjectCodeLength; i++) {
		//alert(dataRep["degreeYer"]);
		//alert(subjectAchedamicYearArr[i]);
		if (selectedDegreeCode == subjectdegreeCodeArr[i] && dataRep["appSemester"] == subjectSemesterArr[i] && dataRep["degreeYer"] == subjectAchedamicYearArr[i]) {

			if (count == 0) {
				newStr += "<div style='clear:both' id='paperDiv'>";
				newStr += "<div class='longIdentifier'>Subjects</div><div class='colon'>&nbsp;:&nbsp;</div>";
				newStr += "<div style='float:left' >&nbsp;";
			}

			//alert(subjectStatusArr);
			newStr += "<div style='clear:both'>";
			newStr += "<div id='instituteDiv' class='investView' style='width:50px;'>";
			if (subjectStatusArr[i] == "c") {
				newStr += "<input type='checkbox'  class='viewArea' " + selectedCheckboxChecked + " id='selectedCheckbox" + count + "'  name='selectedCheckbox" + count + "' value =" + subjectCodeArr[i] + " checked  disabled  onchange='dataRep[this.id]=this.value;checkSubjectApplication(this.id);' >";
				checkboxCount++;
			} else if (subjectStatusArr[i] == "o") {
				newStr += "<input type='checkbox'  class='viewArea' " + selectedCheckboxChecked + " id='selectedCheckbox" + count + "'  name='selectedCheckbox" + count + "' value =" + subjectCodeArr[i] + "  onchange='dataRep[this.id]=this.value;checkSubjectApplication(this.id);' >";
			}
			newStr += "</div>";

			newStr += "<input type='text' style='width:130px;border:none;margin-right:10px;' name='paperCode'  id='paperCode" + count + "' value= '" + subjectCodeArr[i] + "' onchange='dataRep[this.name]=this.value' " + keyDisabled + ">";
			newStr += "<input type='text' style='width:400px;border:none;' name='paperTitle'  id='paperTitle" + count + "' value= '" + subjectTitleArr[i] + "' onchange='dataRep[this.name]=this.value' " + keyDisabled + "></div><div>";

			//newStr +="<input type='text' style='width:500px;border:none;' name='paperCode'  id='paperCode"+count+"' value= '"+subjectTitleArr[i]+" ("+subjectCodeArr[i]+") "+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div><div>";

			// newStr += "<input type='checkbox'  class='viewArea' "+selectedCheckboxChecked+" id='selectedCheckbox"+count+"'  name='selectedCheckbox"+count+"' value ="+subjectCodeArr[i]+"  onchange='dataRep[this.id]=this.value;checkSubjectApplication(this.id);' >";
			// newStr += "</div>";
			// newStr +="<input type='text' style='width:500px;border:none;' name='paperCode'  id='paperCode"+count+"' value= '"+subjectTitleArr[i]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+"></div><div>";
			count++;
		}
	}

	newStr += "</div></br>";
	newStr += "<div style='clear:both'><br>";
	newStr += "<input type='button' style='margin-top:0px' class='btnD' value='Save' onclick=formExamApplicationFormsendForm('addApplicationFormExam');>";
	newStr += '<input type="button" class="btnD"  value = "Reset" onclick = "returnApplicationFormsub();sendForm(' + "'data4ApplicationFormExam'" + ');sendForm(' + "'data4addApplicationForm'" + ');">';
	newStr += '<input type="button" class="btnD"  value = "Return" onclick = returnApplicationFormsub();showMenu(' + "'main'" + ')>';
	newStr += '<input type = "button" id="logout" class ="btnD" value="logout" onclick=logOut();>';
	newStr += "</div>";

	document.getElementById('searchid').style.display = "none";
	document.getElementById('returnapp').style.display = "none";

	document.getElementById('studentNo').disabled = true;
	document.getElementById('selecteddegree').disabled = true;

	//document.getElementById('returnapp').style.display="none";
	document.getElementById('logout1').style.display = "none";
	document.getElementById('paperDiv').innerHTML = newStr;
}

function checkSubjectApplication(CheckselectedCheckbox) {


	if (document.getElementById(CheckselectedCheckbox).checked == true) {
		for (i = 0; i < 5; i++) {
			if (document.getElementById('appSem' + i)) {
				document.getElementById('appSem' + i).disabled = true;
			}
		}
		checkboxCount++;
		if (checkboxCount > 6) {
			checkboxCount = checkboxCount - 1;
			alert("You have select maximum allowed subjects");
			document.getElementById(CheckselectedCheckbox).checked = false;
		}

	}
	else {
		checkboxCount = checkboxCount - 1;
	}
	//alert(checkboxCount);


}





function formExamApplicationFormsendForm(frm) {

	var doc, dataStr, dataStr2 = "";
	var applicationArray = new Array();
	var paperStr = "";

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}

	if (frm == 'addApplicationFormExam') {

		doc = document.maintainformApplication;
		dataStr += "&interface=" + frm;

		var forloopcount = 1;

		dataStr += "&studentNo=" + dataRep["studentNo"];
		dataStr += "&degreeCode=" + selectedDegreeCode;
		dataStr += "&semester=" + dataRep["appSemester"];
		dataStr += "&attempt=F";
		dataStr += "&achedamicYear=" + dataRep["degreeYer"];

		for (var y = 0; y <= count; y++) {


			if (document.getElementById('selectedCheckbox' + y)) {
				if (document.getElementById('selectedCheckbox' + y).checked == true) {
					//alert(dataRep["studentNo"+y]);
					if (forloopcount == 1) {
						dataStr2 += "&subjectCode=" + document.getElementById('selectedCheckbox' + y).value;
						applicationArray[forloopcount] = (dataStr + dataStr2);
						dataStr2 = "";
						forloopcount++;
					}
					else if (forloopcount == 2) {
						dataStr2 += "&subjectCode=" + document.getElementById('selectedCheckbox' + y).value;
						applicationArray[forloopcount] = (dataStr + dataStr2);
						dataStr2 = "";
						forloopcount++;
					}
					else if (forloopcount == 3) {
						dataStr2 += "&subjectCode=" + document.getElementById('selectedCheckbox' + y).value;
						applicationArray[forloopcount] = (dataStr + dataStr2);
						dataStr2 = "";
						forloopcount++;
					}
					else if (forloopcount == 4) {
						dataStr2 += "&subjectCode=" + document.getElementById('selectedCheckbox' + y).value;
						applicationArray[forloopcount] = (dataStr + dataStr2);
						dataStr2 = "";
						forloopcount++;
					}
					else if (forloopcount == 5) {
						dataStr2 += "&subjectCode=" + document.getElementById('selectedCheckbox' + y).value;
						applicationArray[forloopcount] = (dataStr + dataStr2);
						dataStr2 = "";
						forloopcount++;
					}
					else if (forloopcount == 6) {
						dataStr2 += "&subjectCode=" + document.getElementById('selectedCheckbox' + y).value;
						applicationArray[forloopcount] = (dataStr + dataStr2);
						dataStr2 = "";
						forloopcount++;
					}
					else if (forloopcount == 7) {
						dataStr2 += "&subjectCode=" + document.getElementById('selectedCheckbox' + y).value;
						applicationArray[forloopcount] = (dataStr + dataStr2);
						dataStr2 = "";
						forloopcount++;
					}
				}

			}
			//alert(dataStr);


		}



		if (frm == 'addApplicationFormExam') {
			//alert(applicationArray);
			for (var p = 0; p < forloopcount; p++) {

				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", applicationArray[p]);
			}
		}
	}


	returnApplicationFormsub();
	return 0;

}


function returnApplicationFormsub() {
	selectedDegreeCode = studentNoList = "";
	checkboxCount = count = semcount1 = semcount2 = semcount3 = semcount4 = semcount0 = 0;
	studentNoLength = subjectCodeLength = 0;
	dataRep["studentName"] = dataRep["studentNo"] = dataRep["degreeTitle"] = "";
	dataRep["appSemester"] = dataRep["degreeYer"] = "";
}
