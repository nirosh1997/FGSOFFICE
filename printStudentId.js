//Coded By S.Suraweera

dataRep["IssueDate"] = "";
dataRep["ExpireDate"] = "";
dataRep["Registration"] = "";
var idate, edate;

var countId = 0;

var PrintStudentIdDTable;

function DataTableForRegisterdStudentList(type) {

	var buttons = [];
	if (type == 1) {
		if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == "FGS Deputy Registrar" || dataRep['roleName'] == "Dean") {
			// buttons.push({
			// 	text: 'Print All ID',
			// 	className: 'btn btn-primary',
			// 	action: function (e, dt, node, config) {
			// 		printStudentID2();
			// 	}
			// });

			// buttons.push({
			// 	text: 'Print Selected Student ID',
			// 	className: 'btn btn-primary',
			// 	action: function (e, dt, node, config) {
			// 		printSelectedStudentID2();
			// 	}
			// });

			buttons.push({
				text: 'ID Issuing List',
				className: 'btn btn-primary',
				action: function (e, dt, node, config) {
					getRegStudentlist2();
				}
			});

			// buttons.push({
			// 	text: 'Id Issuing List Sinhala',
			// 	className: 'btn btn-primary',
			// 	action: function (e, dt, node, config) {
			// 		getRegStudentlistSinhala2();
			// 	}
			// });

			buttons.push({
				text: 'Print File Tags',
				className: 'btn btn-primary',
				action: function (e, dt, node, config) {
					getstudentlist2();
				}
			});

			// buttons.push({
			// 	text: 'New ID English',
			// 	className: 'btn btn-primary',
			// 	action: function (e, dt, node, config) {
			// 		newIdEnglish2();
			// 	}
			// });
			buttons.push({
				text: 'ID Card Printing Sheet',
				className: 'btn btn-primary',
				action: function (e, dt, node, config) {
					// newIdSinhala2();
					newIdDownload();
				}
			});

			buttons.push({
				text: 'Download Full List - Word',
				className: 'btn btn-primary',
				action: function (e, dt, node, config) {
					DownloadStudentListwithAddress2('w');
				}
			});

			buttons.push({
				text: 'Download Full List - Excel',
				className: 'btn btn-primary',
				action: function (e, dt, node, config) {
					DownloadStudentListwithAddress2('e');
				}
			});


			buttons.push({
				text: 'Send SMS',
				className: 'btn btn-primary h-46',
				action: function (e, dt, node, config) {
					const mobileNumber = [];
					PrintStudentIdDTable.rows().every(function (index) {
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
					PrintStudentIdDTable.rows().every(function (index) {
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


		// if () {
		// 	buttons.push({
		// 		text: 'Download',
		// 		className: 'btn btn-primary',
		// 		action: function (e, dt, node, config) {
		// 			getAllRegStudentList();
		// 		}
		// 	});

		// }

		if (dataRep['roleName'] == 'Examination Department' || dataRep['roleName'] == 'ICT Center' || dataRep['roleName'] == "Senior Assistant Librarian") {
			buttons.push({
				text: 'Download Full List - Word',
				className: 'btn btn-primary',
				action: function (e, dt, node, config) {
					DownloadStudentListwithAddress2('w');
				}
			});

			buttons.push({
				text: 'Download Full List - Excel',
				className: 'btn btn-primary',
				action: function (e, dt, node, config) {
					DownloadStudentListwithAddress2('e');
				}
			});

		}



		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Technical Coordinator') {

			buttons.push({
				text: 'Download Attendance Sheet',
				className: 'btn btn-primary',
				action: function (e, dt, node, config) {
					getEnglishAttendenceSheet12();
				}
			});
			// buttons.push({
			// 	text: 'Sinhala Medium Attendance Sheet',
			// 	className: 'btn btn-primary',
			// 	action: function (e, dt, node, config) {
			// 		getSinhalaAttendenceSheet12();
			// 	}
			// });
			buttons.push({
				text: 'Download Registered List',
				className: 'btn btn-primary',
				action: function (e, dt, node, config) {
					getRegisterdListDownloads();
				}
			});
		}
	}

	if (type == 2) {
		buttons.push({
			text: 'Transfer',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				$('#bosModal').modal('show');
			}
		});

	}

	if (type == 3) {
		buttons.push({
			text: 'Enroll',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				// Swal.fire({
				// 	icon: 'warning',
				// 	title: 'Comming Soon',
				// 	text: 'This Feature Not Yet work.',
				// 	showConfirmButton: true,
				// });


				let hasStudent = false;

				PrintStudentIdDTable.rows().every(function (index) {
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						hasStudent = true;
						return false;
					}
				});



				if (hasStudent) {


					let mdata = {
						action: "getAllSubjectforBatch",
						degreeCode: $('#selectedDegreeName').val(),
						academicYear: $('#achedamicYear').val(),
						authcode: authcode,
						username: dataRep['userId'],
						// medium: md
					};

					$.ajax({
						type: 'POST',
						url: 'rules/subject.php',
						data: mdata,
						dataType: 'json',
						success: function (response) {
							console.log(response);

							if (response && response[0].status === 200) {
								let subList = "";
								response.forEach(subject => {
									if (dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "Dean" || dataRep['roleName'] == "FGS Deputy Registrar") {
										subList += '<tr>';
										subList += '<td style="text-align:center"><input type="checkbox" class="form paper-checkbox" data-semester="' + subject.subjectSemester + '" value="' + subject.subjectCode + '"></td>';
										// subList += `<td style="text-align:center"><input type="checkbox" class="form-check-input paper-checkbox"  value="${subject.subjectCode}"></td>`;
										subList += `<td>${(subject.subjectSemester).toLowerCase() == "0" ? "End" : subject.subjectSemester}</td>`;
										subList += `<td>${subject.subjectCode}</td>`;
										subList += `<td>${subject.subjectTitle}</td>`;
										subList += `<td>${(subject.sstatus).toLowerCase() == "c" ? "Compulsory" : (subject.sstatus).toLowerCase() == "o" ? "Optional" : "Thesis"}</td>`;
										subList += '</tr>';
									}
									else {
										if ((subject.sstatus).toLowerCase() == "t") {
											subList += '<tr>';
											subList += '<td style="text-align:center"><input type="checkbox" class="form paper-checkbox" data-semester="' + subject.subjectSemester + '" value="' + subject.subjectCode + '"></td>';
											// subList += `<td style="text-align:center"><input type="checkbox" class="form-check-input paper-checkbox"  value="${subject.subjectCode}"></td>`;
											subList += `<td>${(subject.subjectSemester).toLowerCase() == "0" ? "End" : subject.subjectSemester}</td>`;
											subList += `<td>${subject.subjectCode}</td>`;
											subList += `<td>${subject.subjectTitle}</td>`;
											subList += `<td>${(subject.sstatus).toLowerCase() == "c" ? "Compulsory" : (subject.sstatus).toLowerCase() == "o" ? "Optional" : "Thesis"}</td>`;
											subList += '</tr>';
										}
									}

								});

								Swal.fire({
									title: 'Select Subjects',
									html: `
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead class="table-light">
                                <tr>
                                    <th>Select</th>
                                    <th>Semester</th>
                                    <th>Subject Code</th>
                                    <th>Subject Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody id="paperTable">
                                ${subList}
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-3 ">
									<div class="row" style="margin:0">
										<div class="col-2" style="text-align:left">
											<label for="attemptType" class="form-label" style="margin:15px 0;font-size:16px">Attempt :</label>
										</div>
										<div class="col-5" style="text-align:left">
											<select class="form-control form-select" id="attemptType">
												<option value="F">First time</option>
												<option value="R">Repeat</option>
												<option value="RR">Re-repeat</option>
											</select>
										</div>
										</div>
									</div>

								<div class="mt-3 " id="repeatGroup" style="display: none;">
									<div class="row" style="margin:0">
										<div class="col-2" style="text-align:left">
											<label for="attemptType" class="form-label" style="margin:15px 0;font-size:16px">Repeat Reason :</label>
										</div>
										<div class="col-5" style="text-align:left">
											<select class="form-control form-select" id="repeatReason">
												<option value="Repeat">Repeat</option>
												<option value="Medical/Other_Reasons">Medical/Other_Reasons</option>
											</select>
                            			</div>
                           			</div>
                        		</div>

                    			<div class="mt-3 " id="rerepeatGroup" style="display: none;">
									<div class="row" style="margin:0">
										<div class="col-2" style="text-align:left">
											<label for="attemptType" class="form-label" style="margin:15px 0;font-size:16px">Re-repeat Attempt :</label>
										</div>
										<div class="col-5" style="text-align:left">
											<select class="form-control form-select" id="rerepeatAttempt">
												${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
											</select>
                            			</div>
                           			</div>
                        		</div>
                    </div>
                    <br>
                `,
									showCancelButton: true,
									width: 600,
									confirmButtonText: 'Enroll',
									customClass: { popup: 'swal-wide' },
									preConfirm: () => {
										// Get selected subjects
										let selectedSubjectsData = []; // ✅ Move array outside the loop

										document.querySelectorAll(".paper-checkbox:checked").forEach(checkbox => {
											let sdata = {
												SubjectCode: checkbox.value,
												SubjectSemester: checkbox.getAttribute("data-semester"),
											};
											selectedSubjectsData.push(sdata);
										});

										if (selectedSubjectsData.length === 0) {
											Swal.showValidationMessage("Please select at least one subject.");
											return false;
										}

										selecteStudentData = [];
										PrintStudentIdDTable.rows().every(function (i) {
											// Get the data for the current row
											var checkbox = $(this.node()).find('input[type="checkbox"]');
											var isChecked = checkbox.prop('checked');

											if (isChecked) {

												if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

													if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	
														selecteStudentData.push(studentNoArr[i]);
													}
												}
											}
										});

										let attemptType = document.getElementById("attemptType").value;
										let rerepeatAttempt = attemptType === "RR" ? document.getElementById("rerepeatAttempt").value : 1;
										let repeatReason = attemptType === "R" ? document.getElementById("repeatReason").value : "";

										return {
											StudentList: selecteStudentData,
											subjectData: selectedSubjectsData,
											attempt: attemptType,
											rerepeatAttempt: rerepeatAttempt,
											repeatReason: repeatReason
										};
									}

								}).then((result) => {
									if (result.isConfirmed) {
										console.log(result.value);

										Swal.fire({
											title: 'Are you sure?',
											text: 'This action enrolls selected students into the selected subject!',
											icon: 'warning',
											showCancelButton: true,
											confirmButtonText: 'Yes, Enroll!',
											cancelButtonText: 'No, Cancel!',
										}).then((result2) => {
											if (result2.isConfirmed) {
												let sendData = {
													action: "FRREnroll",
													degreeCode: $('#selectedDegreeName').val(),
													academicYear: $('#achedamicYear').val(),
													subjectCodes: JSON.stringify(result.value.subjectData),
													attempt: result.value.attempt,
													rerepeatAttempt: result.value.rerepeatAttempt,
													studentNo: JSON.stringify(result.value.StudentList),
													reason: result.value.repeatReason,
													createdBy: dataRep['userId'],
													authcode: authcode,
													username: dataRep['userId'],
												};
												console.log(sendData)
												$.ajax({
													type: 'POST',
													url: 'rules/examApply.php',
													data: sendData,
													dataType: 'json',
													success: function (response) {
														if (response && response.status === 200) {
															Swal.fire({
																title: "Enrollment Completed",
																text: `Success: ${response.success}\nFailed: ${response.failed}`,
																icon: response.failed > 0 ? "warning" : "success",
																html: `<strong>Success:</strong> ${response.success}<br>
																	   <strong>Failed:</strong> ${response.failed}<br>
																	   <strong>Details:</strong> ${response.failedDetails ? response.failedDetails : "None"}`,
																confirmButtonText: "OK"
															});
														} else {
															Swal.fire({
																title: "Error",
																text: response.message || "Something went wrong!",
																icon: "error",
																confirmButtonText: "OK"
															});
														}
													},
													error: function (error) {
														console.log(error);
														resolve(false);
													}
												});

												Swal.fire("Enrolled!", `Selected Subjects: ${result.value.selectedSubjects.join(", ")}`, "success");


											}
										});



									}
								});

								// Show/hide Re-repeat Attempt dropdown
								$(document).on("change", "#attemptType", function () {
									if ($(this).val() === "RR") {
										$("#rerepeatGroup").slideDown();
									} else {
										$("#rerepeatGroup").slideUp();
									}
								});

								$(document).on("change", "#attemptType", function () {
									if ($(this).val() === "R") {
										$("#repeatGroup").slideDown();
									} else {
										$("#repeatGroup").slideUp();
									}
								});



							}
						},
						error: function (error) {
							console.log(error);
						}
					});

				} else {
					Swal.fire({
						icon: 'warning',
						title: 'No Student Selected',
						text: 'Please select at least one student.',
						confirmButtonText: 'OK'
					});
				}








			}
		});

	}

	PrintStudentIdDTable = $('#regStudentTable').DataTable({
		dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
			"<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
			"<'row'<'col-12't>>" + // Table in a single line
			"<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
		buttons: buttons,
		columnDefs: [{
			targets: 0,
			orderable: false,
			searchable: false,
			className: 'selectall-checkbox',
		},
		{
			targets: 1,
			orderable: false,
			searchable: false
		},
		],
		select: {
			style: 'multi',
			selector: 'td:first-child',
		},
		order: [3, 'asc'],
	});


	PrintStudentIdDTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		var countSelectedRows = PrintStudentIdDTable.rows({ selected: true }).count();
		var countItems = PrintStudentIdDTable.rows().count();

		if (countItems > 0) {
			if (countSelectedRows == countItems) {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
			} else {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
			}
		}

		if (e.type === 'select') {
			$('.selectall-checkbox input[type="checkbox"]', PrintStudentIdDTable.rows({ selected: true }).nodes()).prop('checked', true);
		} else {
			$('.selectall-checkbox input[type="checkbox"]', PrintStudentIdDTable.rows({ selected: false }).nodes()).prop('checked', false);
		}
	});

	// When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	PrintStudentIdDTable.on('click', 'thead .selectall-checkbox', function () {
		$('input[type="checkbox"]', this).trigger('click');
	});


	// When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	PrintStudentIdDTable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
		if (this.checked) {
			PrintStudentIdDTable.rows().select();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkRegistered' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
					console.log($(checkBoxDivIdRegistered));
				}
			}
		} else {
			PrintStudentIdDTable.rows().deselect();
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






function formEnrollStudent(dsp) {
	str = "";
	if (dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "Dean" || dataRep['roleName'] == "FGS Deputy Registrar") {
		// SAR-GWAI
		title = "Enroll Students";
	} else {
		title = "Enroll Students for Thesis";
	}
	//alert(dataRep['userName']);	

	if (dsp == "formEnrollStudent") {


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

		str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;hideMediums();filterStudentID1(3);">';

		str += '</select>';
		str += '</div></div>';


		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">'
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-4" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterStudentID1(3);">';



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
		str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();filterStudentID1(3)' " + mediumSinhalaChecked + ">Sinhala<i class='input-helper'></i></label></div>";
		str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();filterStudentID1(3)' " + mediumEnglishChecked + ">English<i class='input-helper'></i></label></div></div>";


		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-7"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterStudentID1(2);">View List</button></div>';

		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '</div></div>';
		str += '</div></div></div>';










		// str += '<div class="col-sm-4">'
		// if (dsp == "formBulkTransterStudent") {
		// 	str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterStudentID1(2);">View List</button>';
		// } else {
		// 	str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterStudentID1(1);">View List</button>';
		// }
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
		str += '<th>Address</th>';
		str += '<th>Email</th>';
		str += '<th>Mobile</th>';

		str += '</tr></thead>';
		str += '<tbody>';

		if (studentNoLength > 0) {

			count = 0;
			for (i = 0; i < studentNoLength; i++) {
				if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {
					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

						if (studentTransferStudentNoArr[i] != "") {
							str += '<tr style="background-color:#ff4747">';
						} else {
							str += '<tr>';
						}

						// commDate = coursecommenceArr[i];
						commDate = RegisteredDateArr[i];
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

						var checkBoxDivIdRegistered = 'checkRegistered' + i;
						if (document.getElementById(checkBoxDivIdRegistered)) {
							if (document.getElementById(checkBoxDivIdRegistered).checked) {
								registeredChecked = 'checked';
							}
						}

						str += "<td><input type='checkbox' " + registeredChecked + "  id='checkRegistered" + i + "' name='checkRegistered" + i + "''/></td>";
						str += '<td>' + studentInitialArr[i] + '</td>';
						if (studentTransferStudentNoArr[i] != "") {
							str += '<td>' + studentNoArr[i] + '<br>(Transfer from : ' + studentTransferStudentNoArr[i] + ')</td>';
						} else {
							str += '<td>' + studentNoArr[i] + '</td>';
						}

						str += '<td>' + studentNICArr[i] + '</td>';
						str += '<td>' + studentPermanentAddressArr[i] + '</td>';
						str += '<td>' + studentContactEmailArr[i] + '</td>';
						str += '<td>' + studentContactMobileArr[i] + '</td>';

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





function formPrintStudentID(dsp) {
	str = "";
	if (dataRep["roleName"] == "ICT Center" || dataRep['roleName'] == "Librarian" || dataRep['roleName'] == "Coordinator" || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Assistant Registrar') {// SAR-GWAI
		title = "Registered Students";
	} else {
		title = "Registered Students";
	}
	//alert(dataRep['userName']);	

	if (dsp == "formPrintStudentID" || dsp == "formBulkTransterStudent") {
		if (dsp == "formBulkTransterStudent") {
			title = "Student Bulk Transfer";
		}
		if (dataRep["UserAR"] == "Assistant Registrar") {
			dataRep['roleName'] = 'Assistant Registrar';
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
		if (dsp == "formBulkTransterStudent") {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;hideMediums();filterStudentID1(2);">';

		} else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;hideMediums();filterStudentID1(1);">';

		}
		str += '</select>';
		str += '</div></div>';


		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">'
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-4" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" style="display: inline-flex;">';

		if (dsp == "formBulkTransterStudent") {
			str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterStudentID1(2);">';
		} else {
			str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterStudentID1(1);">';
		}


		let dateToday = new Date().getFullYear();
		str += "<option " + ((dataRep["achedamicYear"] == "All") ? "selected" : "") + " value='All'>All</option>";

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
		if (dsp == "formBulkTransterStudent") {
			str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();filterStudentID1(2)' " + mediumSinhalaChecked + ">Sinhala<i class='input-helper'></i></label></div>";
			str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();filterStudentID1(2)' " + mediumEnglishChecked + ">English<i class='input-helper'></i></label></div></div>";
		} else {
			str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();filterStudentID1(1)' " + mediumSinhalaChecked + ">Sinhala<i class='input-helper'></i></label></div>";
			str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();filterStudentID1(1)' " + mediumEnglishChecked + ">English<i class='input-helper'></i></label></div></div>";

		}

		str += '</div>';
		str += '</div>';


		str += '</div>';

		str += '</div>';
		if (dsp == "formBulkTransterStudent") {
			str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterStudentID1(2);">View List</button></div>';
		} else {
			str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterStudentID1(1);">View List</button></div>';

		}
		str += '</div></div>';
		str += '</div></div></div>';










		// str += '<div class="col-sm-4">'
		// if (dsp == "formBulkTransterStudent") {
		// 	str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterStudentID1(2);">View List</button>';
		// } else {
		// 	str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterStudentID1(1);">View List</button>';
		// }
		// str += '</div>';

		// str += '</div></div>';
		// str += '</div></div></div>';






		if (dataRep["roleName"] != "ICT Center" && dataRep["roleName"] != "Coordinator" && dataRep['roleName'] != 'Technical Coordinator' && dataRep["roleName"] != "Assistant Registrar") {

			var dd = new Date();
			var date = dd.getUTCDate();
			var mm = dd.getUTCMonth();
			var yr = dd.getUTCFullYear();
			var mn = ("0" + (mm + 1)).slice(-2);
			var currentdate = yr + "-" + mn + "-" + date;

			if (dataRep['roleName'] != 'Librarian') {
				str += "<input type='text' style='width:180px;display:none' name='IssueDate'  id='IssueDate' value= '" + currentdate + "'  onchange='dataRep[this.name]=this.value;'>";
			}
		}


		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="regStudentTable">';
		str += '<thead><tr>';
		str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		str += '<th>Student Name</th>';
		str += '<th>Application No</th>';
		str += '<th>Student Reg. No</th>';
		str += '<th>NIC</th>';
		str += '<th>Address</th>';
		str += '<th>Email</th>';
		str += '<th>Mobile</th>';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator') {
			str += '<th>Registration Date</th>';
		}
		else {
			if (dsp != "formBulkTransterStudent") {
				str += '<th>Library ID</th>';
				str += '<th>Registration Date</th>';
				str += '<th>Expire Date</th>';
			}
		}
		str += '<th>Applciaiton Fee</th>';

		str += '</tr></thead>';
		str += '<tbody>';

		if (studentNoLength > 0) {

			count = 0;
			for (i = 0; i < studentNoLength; i++) {
				if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {
					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] && (document.getElementById('achedamicYear').value == achedamicYearArr[i] || document.getElementById('achedamicYear').value == "All")) {

						if (studentTransferStudentNoArr[i] != "" && studentTransferStudentNoArr[i] != null) {
							str += '<tr style="background-color:#ff4747">';
						} else {
							str += '<tr>';
						}

						// commDate = coursecommenceArr[i];
						commDate = RegisteredDateArr[i];
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

						var checkBoxDivIdRegistered = 'checkRegistered' + i;
						if (document.getElementById(checkBoxDivIdRegistered)) {
							if (document.getElementById(checkBoxDivIdRegistered).checked) {
								registeredChecked = 'checked';
							}
						}

						str += "<td><input type='checkbox' " + registeredChecked + "  id='checkRegistered" + i + "' name='checkRegistered" + i + "''/></td>";

						str += '<td>' + studentInitialArr[i] + '</td>';
						str += '<td>' + applicationNoArr[i] + '</td>';

						if (studentTransferStudentNoArr[i] != "" && studentTransferStudentNoArr[i] != null) {
							str += '<td>' + studentNoArr[i] + '<br>(Transfer from : ' + studentTransferStudentNoArr[i] + ')</td>';
						} else {
							str += '<td>' + studentNoArr[i] + '</td>';
						}

						str += '<td>' + studentNICArr[i] + '</td>';
						str += '<td>' + studentPermanentAddressArr[i] + '</td>';
						str += '<td>' + studentContactEmailArr[i] + '</td>';
						str += '<td>' + studentContactMobileArr[i] + '</td>';
						if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator') {
							str += '<td>' + RegisteredDateArr[i] + '</td>';
						} else {

							if (dsp != "formBulkTransterStudent") {
								str += '<td>' + studentLibraryIdCodeArr[i] + '</td>';
								str += '<td>' + RegisteredDateArr[i] + '</td>';

								var EndDate = "";
								if (commDate) {
									var endy = (commDate.split("-", 3)[commDate.split("-", 3).length - 3]);
									var endm = (commDate.split("-", 3)[commDate.split("-", 3).length - 2]);
									var endd = (commDate.split("-", 3)[commDate.split("-", 3).length - 1]);

									endy = parseInt(endy) + duration;
									endd = parseInt(endd)-01;
									EndDate = endy + "-" + endm + "-" + endd;
								}
								if (document.getElementById('selectedDegreeName').value == "MA in Buddhist Studies One Year" & document.getElementById('achedamicYear').value == "2017") {
									str += '<td>2018-03-31</td>';
								}
								else if (document.getElementById('selectedDegreeName').value == "Master of Business Management in Marketing" & document.getElementById('achedamicYear').value == "2018") {
									str += '<td>2020-11-31</td>';
								}
								else {
									str += '<td>' + EndDate + '</td>';
								}
							}


						}
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




		str += '<div class="modal fade " id="bosModal" tabindex="-1" role="dialog" aria-labelledby="bosModalLabel" aria-hidden="true">';
		str += '<div class="modal-dialog modal-lg" role="document">';
		str += '<div class="modal-content">';
		str += '<div class="modal-header">';
		str += '<h5 class="modal-title" id="bosModalLabel">Enter BOS Information</h5>';
		str += '</div>';
		str += '<form id="bosForm">';
		str += '<div class="modal-body">';
		let vTmpSTR = "";
		if (dataRep['roleName'] == "Subject Clerk" || dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "Dean" || dataRep['roleName'] == "FGS Deputy Registrar") {
			vTmpSTR += '<div class="form-group row" style="margin-top: 2rem;">';
			vTmpSTR += '<div class="col-md-12">';
			vTmpSTR += '<legend class="fieldHead">Student Transfer Form</legend>';

			// Transfer Type
			vTmpSTR += '<div class="form-group row">';
			vTmpSTR += '<label for="exampleInputUsername2" class="col-sm-2 col-form-label">Transfer Type</label>';
			vTmpSTR += '<div class="col-sm-5">';
			vTmpSTR += "<select class='form-control' id='selectedTransferType' onchange='dataRep[this.id]=this.selectedIndex;displaydegradeType();AddReleventType();displayRelevantRules();getProgrames();' style='outline: 1px solid #aaa;'>";
			let programmeTypeList = "";
			programmeTypeList += "<option>Please scroll down to see the records</option>";
			if (dataRep["Fcode"] == "FAC02") {
				programmeTypeList += "<option>Special Transfer</option>";
				programmeTypeList += "<option>Degrade Degree</option>";
				programmeTypeList += "<option>Programme Transfer</option>";
				programmeTypeList += "<option>Medium Transfer</option>";
				programmeTypeList += "<option>Batch Transfer</option>";
			}

			else if (dataRep["Fcode"] == "FAC03") {
				programmeTypeList += "<option>Mssc to MA</option>";
				programmeTypeList += "<option>MA to Mssc</option>";
				programmeTypeList += "<option>Special Transfer</option>";
				programmeTypeList += "<option>Degrade Degree</option>";
				programmeTypeList += "<option>Programme Transfer</option>";
				programmeTypeList += "<option>Medium Transfer</option>";
				programmeTypeList += "<option>Batch Transfer</option>";

			}

			else if (dataRep["Fcode"] == "FAC04") {
				programmeTypeList += "<option>Special Transfer</option>";
				programmeTypeList += "<option>Degrade Degree</option>";
				programmeTypeList += "<option>Programme Transfer</option>";
				programmeTypeList += "<option>Medium Transfer</option>";
				programmeTypeList += "<option>Batch Transfer</option>";

			}

			else if (dataRep["Fcode"] == "FAC01") {
				programmeTypeList += "<option>Special Transfer</option>";
				programmeTypeList += "<option>Degrade Degree</option>";
				programmeTypeList += "<option>Programme Transfer</option>";
				programmeTypeList += "<option>Medium Transfer</option>";
				programmeTypeList += "<option>Batch Transfer</option>";

			} else {
				programmeTypeList += "<option>Programme Transfer</option>";
				programmeTypeList += "<option>Medium Transfer</option>";
				programmeTypeList += "<option>Batch Transfer</option>";

			}
			vTmpSTR += programmeTypeList;
			vTmpSTR += '</select>';
			vTmpSTR += '</div>';
			vTmpSTR += '</div>';
			// Transfer Type End




			// Special Transfer Type or Degrade Type
			vTmpSTR += '<div class="form-group row"  id="degradeType" style="display:none;">';
			vTmpSTR += '<label for="exampleInputUsername2" class="col-sm-2 col-form-label" id="TypeLabel"></label>';
			vTmpSTR += '<div class="col-sm-5">';
			vTmpSTR += "<select  class='form-control' id='degradeType01' onchange='dataRep[this.id]=this.selectedIndex;' style='outline: 1px solid #aaa;'>";
			vTmpSTR += "<option>Please scroll down to see the records</option>";
			vTmpSTR += '</select>';
			vTmpSTR += '</div>';
			vTmpSTR += '</div>';
			// Special Transfer Type or Degrade Type End



			// Programe Transfer
			vTmpSTR += '<div class="form-group row"  id="programmeDiv" style="display:none;">';
			vTmpSTR += '<label for="exampleInputUsername2" class="col-sm-2 col-form-label">Programme</label>';
			vTmpSTR += '<div class="col-sm-5">';
			vTmpSTR += "<select  class='form-control' id='selectedProgramme' onchange='dataRep[this.id]=this.selectedIndex;' style='outline: 1px solid #aaa;'>";
			vTmpSTR += "<option>Please scroll down to see the records</option>";

			var programmeList = "";


			for (j = 0; j < trdegreeCodeLength; j++) {
				if (trdegreeCodeArr[j] == $('#selectedDegreeName').val()) {
					// alert(trdegreeCodeArr[j]);
					// alert(j);
					dataRep["Fcode"] = trfacultyCodeArr[j];
					break;
				}
			}

			for (i = 0; i < trdegreeCodeLength; i++) {

				if (trdegreeCodeArr.indexOf(trdegreeCodeArr[i]) == trdegreeCodeArr.lastIndexOf(trdegreeCodeArr[i]) || (trdegreeCodeArr.indexOf(trdegreeCodeArr[i]) != trdegreeCodeArr.lastIndexOf(trdegreeCodeArr[i]) && trdegreeCodeArr.indexOf(trdegreeCodeArr[i]) == i)) {
					console.log(i);
					if (trdegreeCodeArr[i] != "" & trdegreeCodeArr[i] != trdegreeCodeArr[i - 1] && trfacultyCodeArr[i] == dataRep["Fcode"]) {
						programmeList += "<option> " + trdegreeTitleArr[i] + "</option>";
					}
				}
			}
			vTmpSTR += programmeList;

			vTmpSTR += '</select>';
			vTmpSTR += '</div>';
			vTmpSTR += '</div>';
			// End Programe Transfer

			// Medium Transfer
			vTmpSTR += '<div class="form-group row"  id="mediumDiv" style="display:none;">';
			vTmpSTR += '<label for="exampleInputUsername2" class="col-sm-2 col-form-label">Medium</label>';
			vTmpSTR += '<div class="col-sm-5">';
			vTmpSTR += "<select class='form-control' id='selectedMedium' onchange='dataRep[this.id]=this.selectedIndex;' style='outline: 1px solid #aaa;'>";
			vTmpSTR += "<option>Please scroll down to see the records</option>";
			vTmpSTR += "<option>Sinhala</option>";
			vTmpSTR += "<option>English</option>";
			vTmpSTR += "</select>";
			vTmpSTR += '</div>';
			vTmpSTR += '</div>';
			// Medium Transfer End

			// Year Transfer
			vTmpSTR += '<div class="form-group row"  id="displayTransferYear" style="display:none;">';
			vTmpSTR += '<label for="exampleInputUsername2" class="col-sm-2 col-form-label">Transfer Year</label>';
			vTmpSTR += '<div class="col-sm-5">';
			vTmpSTR += "<select class='form-control dateSelect' name='trYYYY' id='trYYYY' value='trYYYY'  onchange='dataRep[this.name]=this.value;' style='outline: 1px solid #aaa;'>";
			let date = new Date().getFullYear();
			vTmpSTR += generateNumberOptions(2015, (date + 5), 4, dataRep['trYYYY']);
			vTmpSTR += "</select>";
			vTmpSTR += '</div>';
			vTmpSTR += '</div>';
			// Year Transfer End


			// Request Date 
			vTmpSTR += '<div class="form-group row"">';
			vTmpSTR += '<label for="exampleInputUsername2" class="col-sm-2 col-form-label">Request Date</label>';
			vTmpSTR += '<div class="col-sm-5">';
			vTmpSTR += "<select class='form-control dateSelect' name='ReDateYYYY' id='ReDateYYYY' value='ReDateYYYY'  onchange='dataRep[this.name]=this.value;' style='width: 6rem;display: inline-block;outline: 1px solid #aaa;  margin: 0px 2px;'>";
			vTmpSTR += generateNumberOptions(2015, (date + 5), 4, dataRep['trYYYY']);
			vTmpSTR += "</select>";
			vTmpSTR += "<select class='form-control dateSelect' name='ReDateMM' id='ReDateMM' value='ReDateMM' ' onchange='dataRep[this.name]=this.value;' style='width: 6rem;display: inline-block;outline: 1px solid #aaa;  margin: 0px 2px;'>";
			vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['ReDateMM']);
			vTmpSTR += "</select>";
			vTmpSTR += "<select class='form-control dateSelect' name='ReDateDD' id='ReDateDD' value='ReDateDD'  onchange='dataRep[this.name]=this.value;' style='width: 6rem;display: inline-block;outline: 1px solid #aaa;  margin: 0px 2px;'>";
			vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['ReDateDD']);
			vTmpSTR += "</select>";
			vTmpSTR += '</div>';
			vTmpSTR += '</div>';
			// Request Date End


			// BOS Date 
			vTmpSTR += '<div class="form-group row"">';
			vTmpSTR += '<label for="exampleInputUsername2" class="col-sm-2 col-form-label">BOS Date</label>';
			vTmpSTR += '<div class="col-sm-4">';
			vTmpSTR += "<select class='form-control dateSelect'name='bosDateYYYY' id='bosDateYYYY' value='bosDateYYYY'  onchange='dataRep[this.name]=this.value;' style='width: 6rem;display: inline-block;outline: 1px solid #aaa;  margin: 0px 2px;'>";
			vTmpSTR += generateNumberOptions(2015, (date + 5), 4, dataRep['trYYYY']);
			vTmpSTR += "</select>";
			vTmpSTR += "<select class='form-control dateSelect' name='bosDateMM' id='bosDateMM' value='bosDateMM' ' onchange='dataRep[this.name]=this.value;' style='width: 6rem;display: inline-block;outline: 1px solid #aaa;  margin: 0px 2px;'>";
			vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['ReDateMM']);
			vTmpSTR += "</select>";
			vTmpSTR += "<select class='form-control dateSelect' name='bosDateDD' id='bosDateDD' value='bosDateDD'  onchange='dataRep[this.name]=this.value;' style='width: 6rem;display: inline-block;outline: 1px solid #aaa;  margin: 0px 2px;'>";
			vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['ReDateDD']);
			vTmpSTR += "</select>";
			vTmpSTR += '</div>';
			vTmpSTR += '<div class="col-sm-6">';
			vTmpSTR += "<input class='form-control' type='text'  name='fgsnumber'  id='fgsnumber' value= '' placeholder='BOS Number' onchange='dataRep[this.name]=this.value;' style='outline: 1px solid #aaa;'>";
			vTmpSTR += '</div>';
			vTmpSTR += '</div>';
			// BOS Date End

			// FGS Date 
			vTmpSTR += '<div class="form-group row"">';
			vTmpSTR += '<label for="exampleInputUsername2" class="col-sm-2 col-form-label">FGS Date</label>';
			vTmpSTR += '<div class="col-sm-4">';
			vTmpSTR += "<select class='form-control dateSelect'name='fgsDateYYYY' id='fgsDateYYYY' value='fgsDateYYYY'  onchange='dataRep[this.name]=this.value;' style='width: 6rem;display: inline-block; outline: 1px solid #aaa;  margin: 0px 2px;'>";
			vTmpSTR += generateNumberOptions(2015, (date + 5), 4, dataRep['trYYYY']);
			vTmpSTR += "</select>";
			vTmpSTR += "<select class='form-control dateSelect' name='fgsDateMM' id='fgsDateMM' value='fgsDateMM' ' onchange='dataRep[this.name]=this.value;' style='width: 6rem;display: inline-block;outline: 1px solid #aaa;  margin: 0px 2px;'>";
			vTmpSTR += generateNumberOptions(1, 12, 2, dataRep['ReDateMM']);
			vTmpSTR += "</select>";
			vTmpSTR += "<select class='form-control dateSelect' name='fgsDateDD' id='fgsDateDD' value='fgsDateDD'  onchange='dataRep[this.name]=this.value;' style='width: 6rem;display: inline-block;outline: 1px solid #aaa;  margin: 0px 2px;'>";
			vTmpSTR += generateNumberOptions(1, 31, 2, dataRep['ReDateDD']);
			vTmpSTR += "</select>";
			vTmpSTR += '</div>';
			vTmpSTR += '<div class="col-sm-6">';
			vTmpSTR += "<input class='form-control' type='text'  name='bosnumber'  id='bosnumber' value= '' placeholder='FGS Number' onchange='dataRep[this.name]=this.value;' style='outline: 1px solid #aaa;'>";
			vTmpSTR += '</div>';
			vTmpSTR += '</div>';
			// FGS Date End

			// Note 
			vTmpSTR += '<div class="form-group row"">';
			vTmpSTR += '<label for="exampleInputUsername2" class="col-sm-2 col-form-label">Notes</label>';
			vTmpSTR += '<div class="col-sm-6">';
			vTmpSTR += "<textarea rows='6' class='form-control' name='tNotes' id ='tNotes' style ='text-transform:capitalize;outline: 1px solid #aaa;' onchange = 'dataRep [this.name] = this.value;'></textarea>";
			vTmpSTR += "</div>";
			vTmpSTR += "</div>";
			// Note End



			vTmpSTR += '<div class="form-group row" id="disrulefield" style="display:none">';
			vTmpSTR += '<div class="col-sm-8">';
			vTmpSTR += "<div id='displayTransferRules' class='section1' style='text-align:left;'></div>";
			vTmpSTR += '</div>';
			vTmpSTR += '<div class="col-sm-4" style="text-align:right">';
			vTmpSTR += "<input type='button' class='btn btn-primary mb-2  btn-lg'style='margin-top:0px;'  id='transferButton' value='Transfer' onclick=transferStudent01();>";//
			vTmpSTR += '</div>';
			vTmpSTR += '</div>';
		}
		str += vTmpSTR;
		str += '</div>';
		str += '<div class="modal-footer">';
		str += '<button type="button" class="btn btn-secondary"onclick="closeModel()">Cancel</button>';
		str += '</form>';

		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

	}
	return str;
}

function filterStudentID1(type) {
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select a value from the select Box(s)");
	} else {
		dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
		dataRep["selectedMedium"] = md;
		// console.log(dataRep["achedamicYear"]);
		// console.log(dataRep["selectedDegreeName"]);
		// console.log(dataRep["selectedMedium"]);
		if (type == 1) {
			sendForm("data4PrintStudentIDCard");
		}
		if (type == 2) {
			sendForm("data4BulkTransfer");
		}
		if (type == 3) {
			PrintStudentIdDTable.clear().draw();
			sendForm("data4GetEnrollment");
		}
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

function printStudentID2() {

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

					let title = studentPersonalTitleArr[i].trim(); // remove spaces
					// check if last character is '.'
					if (!title.endsWith(".")) {
						title += ".";
					}
					gtDiv += '<td height="26" colspan="2" style="font-size: medium">Name : ' + title + studentInitialArr[i] + '<br></td>';
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
					// gtDiv+='<td height="30" colspan="2"><span style="font-size: x-small">Student&rsquo;s  Signature  </span></td>';
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


function printSelectedStudentID2() {

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
							let title = studentPersonalTitleArr[i].trim(); // remove spaces
							// check if last character is '.'
							if (!title.endsWith(".")) {
								title += ".";
							}
							gtDiv += '<td height="26" colspan="2" style="font-size: medium">Name : ' + title + studentInitialArr[i] + '<br></td>';
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
function getAllRegStudentList() {

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
		// newStr +="<th style='border: 1px solid black;'>Application Number</th>";
		// newStr +="<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Student Initials</th>";
		newStr += "<th style='border: 1px solid black;'>Student Name</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		// newStr +="<th style='border: 1px solid black;'>Address</th>";
		// newStr +="<th style='border: 1px solid black;'>Tel:No.</th>";
		// newStr +="<th style='border: 1px solid black;'>Mobile No</th>";
		newStr += "<th style='border: 1px solid black;'>Email</th>";
		// newStr +="<th style='border: 1px solid black;'>Signature</th>";
		newStr += "</tr>";

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	

					//if(medium1Arr[i] == "en"){


					// for( i=0; i<studentNoLength.length; i++){

					// if(applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i])==i)){

					// if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & selectedArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i]){	
					// newStr +="<div class='info'   name='testInfo"+i+"'>";
					newStr += "<tr style='border: 1px solid black;'>";

					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';

					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';


					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'</td>';

					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';
					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNameArr[i] + '</td>';

					newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';

					newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
					//newStr+='<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddressArr[i]+'</td>';
					//newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLanArr[i]+'</td>';
					// newStr+='<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobileArr[i]+'</td>';

					newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

					//newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					newStr += "</tr>";
					newStr += "</div><dev><br>";
					inum++;
					rwcnt++;
					count++;
					//	}

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



//ICT center Download all list ends------------------------------------------------------------------------
function getRegStudentlist2() {

	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		// if(document.getElementById('selectedDocName').value=="Application List" ){
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		let image = '<img src="' + host + 'images/fgslogo.png" style="width: 40%;height:auto;margin-bottom: 5px;">';
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + image + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + $("#selectedDegreeName option:selected").text() + " - " + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>ID Issuing List</div>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;text-align:center'><p style='font-weight:bold'>Application Numbers</p></th>";
		// newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;text-align:center'>Student Initials</th>";
		// newStr += "<th style='border: 1px solid black;'>Student Name</th>";
		newStr += "<th style='border: 1px solid black;text-align:center'>Student No</th>";
		newStr += "<th style='border: 1px solid black;text-align:center'>NIC Number</th>";
		// newStr += "<th style='border: 1px solid black;'>Address</th>";
		// newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
		// newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
		// newStr += "<th style='border: 1px solid black;'>Email</th>";
		newStr += "<th style='border: 1px solid black;text-align:center'>Signature</th>";
		newStr += "</tr>";



		PrintStudentIdDTable.rows().every(function (i) {
			// Get the data for the current row
			var checkbox = $(this.node()).find('input[type="checkbox"]');
			var isChecked = checkbox.prop('checked');

			if (isChecked) {


				if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	

						newStr += "<tr style='border: 1px solid black;heigth:100px;'>";

						newStr += '<td  style="border:1px solid black;width:300px;heigth:100px;font-size:12px;font-family:tahoma;padding-left:10px">' + count + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:100px;font-size:12px;font-family:tahoma;padding-left:10px">' + applicationNoArr[i] + '</td>';
						// newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPersonalTitleArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:100px;font-size:12px;font-family:tahoma;padding-left:10px">' + studentInitialArr[i] + '</td>';
						// newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNameArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:100px;font-size:12px;font-family:tahoma;padding-left:10px">' + studentNoArr[i] + '</td>';

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:100px;font-size:12px;font-family:tahoma;padding-left:10px">' + studentNICArr[i] + '</td>';
						// newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';
						// newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
						// newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

						// newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;width:300px;heigth:100px;font-size:12px;font-family:tahoma;"></td>';
						newStr += "</tr>";
						// newStr += "</div><div><br>";
						inum++;
						rwcnt++;
						count++;
						// }


					}
				}
			}
		});
		// }
		// }
		newStr += "</table>";



	}

	var myWindow = window.open('', '');
	var doc = myWindow.document;
	doc.open();
	doc.write('<html><head><title>Print</title>');
	doc.write('<style>@media print {* {-webkit-print-color-adjust: exact;}}</style><link href="' + host + '/css/assets/css/argon-dashboard.css?v=2.0.4" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"><script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none"; window.print();}</script>');
	doc.write('<style>tr{line-height: 2.5rem;}.identifiers{width:100px;float:left;font-size: 12px;text-align: left;margin:0px 15px 0px 10px;line-height: 20px;font-weight:bold;}.viewArea{float:left;width:auto;line-height: 20px;font-family: Verdana;font-size: 12px;text-align: left;}#wraper{width:1000px;margin:0px auto;}.divLeft{float:left;font-family:tahoma;font-size:14px;width:auto;line-height:20px}.colonDiv{line-height:20px;float:left;font-size: 14px;font-weight:bold;margin:0px 5px;width: auto;}.divRight{line-height:20px;float:left;font-family:tahoma;font-size:14px;width:auto;clear:right;}body{font-family:tahoma;}#genderDiv{clear:left;}#btnsub,#getbtn,#btnbk,#btnsrch{display:none}.forview{float:left;width:150px;font-family:tahoma;font-size:12px;}#invest1{margin:25px 0px;font-size:12px;}img{margin:10px; width:50px;height:50px;}p,h2{text-align:center;}input,textarea{border:none;font-family:tahoma;font-size:12px}textarea{min-width:150px;width:450px}</style></head>');
	doc.write('<body id="pdfContent">');
	doc.write(newStr);
	doc.write('</body>');
	doc.write('<script>window.print();window.addEventListener("afterprint", function(event) { window.close();});</script>');
	doc.close();


	// var csvData = new Array();
	// csvData.push(newStr);
	// if (md == "en") {
	// 	var fileName = $("#selectedDegreeName option:selected").text() + "-ID Issuing List English.doc";
	// }
	// if (md == "si") {
	// 	var fileName = $("#selectedDegreeName option:selected").text() + "-ID Issuing List Sinhala.doc";
	// }
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

function getRegStudentlistSinhala2() {

	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		// if(document.getElementById('selectedDocName').value=="Application List" ){
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
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
	var fileName = $("#selectedDegreeName option:selected").text() + "-ID Issuing List Sinhala.doc";

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

function getstudentlist2() {
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
					// newStr += "<tr style='border: 4px solid black;heigth:0%;'>";
					// newStr += "<td>";
					// newStr += "</td>";
					// newStr += "</tr>";

					//
					newStr += "<td style='border: 4px solid black;text-align:center;heigth:0%;'>";
					let title = studentPersonalTitleArr[i].trim(); // remove spaces
					// check if last character is '.'
					if (!title.endsWith(".")) {
						title += ".";
					}
					newStr += title + studentInitialArr[i];
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
					// newStr += "</div>";
					inum++;
					rwcnt++;

				}
			}
		}

		newStr += "</table><br><br>";

		newStr += "<table style='border-collapse: collapse;border: 4px solid black;font-size:16px;font-family:tahoma;width:100%'>";
		for (i = 0; i < studentNoLength; i++) {
			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {
				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					newStr += "<tr style='border: 4px solid black;heigth:0%;'>";
					newStr += "<td style='border: 4px solid black;text-align:center;heigth:0%;'>";
					let title = studentPersonalTitleArr[i].trim(); // remove spaces
					// check if last character is '.'
					if (!title.endsWith(".")) {
						title += ".";
					}
					// newStr += title + studentInitialArr[i];
					// newStr += "<h2>" + studentPersonalTitleArr[i] + " ." + studentInitialArr[i] + "</h2>";

					newStr += "<h2>" + title + studentInitialArr[i] + "</h2>";
					newStr += "<h2>" + studentNoArr[i] + "</h2>";
					newStr += "</td>";
					newStr += "</tr>";
				}
			}
		}

		newStr += "</table>";
		newStr += "</div>";



	}


	var exportFilename = $("#selectedDegreeName option:selected").text() + "-File Tags.doc";
	let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
	sendDataList += "&sheetName=" + $("#selectedDegreeName option:selected").text() + "-File Tags";
	isrHandle.getDoc(newStr, exportFilename);

	// var csvData = new Array();

	// csvData.push(newStr);
	// var fileName = $("#selectedDegreeName option:selected").text() + "-File Tags.doc";

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



function newIdEnglish2() {
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
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
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

						let title = studentPersonalTitleArr[i].trim(); // remove spaces
						// check if last character is '.'
						if (!title.endsWith(".")) {
							title += ".";
						}
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + title + studentInitialArr[i] + '</td>';
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
	var exportFilenameENG = $("#selectedDegreeName option:selected").text() + " - English - " + "ID List.xls";
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



function newIdDownload() {
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
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
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


		PrintStudentIdDTable.rows().every(function (i) {
			// Get the data for the current row
			var checkbox = $(this.node()).find('input[type="checkbox"]');
			var isChecked = checkbox.prop('checked');

			if (isChecked) {

				if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	

						var stuAddress = studentPermanentAddressArr[i];
						var convertstuAddress = stuAddress.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
						var testAdd = titleCase(convertstuAddress);
						testAdd = removeDash(testAdd);
						var test1 = testAdd.split(",");
						var test = 1;
						let title = studentPersonalTitleArr[i].trim(); // remove spaces
						// check if last character is '.'
						if (!title.endsWith(".")) {
							title += ".";
						}
						newStr += "<tr style='border: 1px solid black;'>";
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + title + studentInitialArr[i] + '</td>';
						newStr += '<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentLibraryIdCodeArr[i] + '</td>';
						var EndDate = "";
						if (coursecommenceArr[i]) {
							var endy = (coursecommenceArr[i].split("-", 3)[coursecommenceArr[i].split("-", 3).length - 3]);
							var endm = (coursecommenceArr[i].split("-", 3)[coursecommenceArr[i].split("-", 3).length - 2]);
							var endd = (coursecommenceArr[i].split("-", 3)[coursecommenceArr[i].split("-", 3).length - 1]);
							// console.log(commDate.split("-", 3))
							// console.log(commDate.split("-", 3)[commDate.split("-", 3).length])
							endy = parseInt(endy) + duration;
							endd = parseInt(endd)-01;
							EndDate = endy + "-" + endm + "-" + endd;
						}

						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + coursecommenceArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">' + EndDate + '</td>';
						newStr += "</tr>";
						newStr += "</div><dev><br>";
						inum++;
						rwcnt++;
						count++;

					}
				}

			}
		});

		newStr += "</table>";


	}

	//SIN
	if (md == "si") {
		var exportFilename = $("#selectedDegreeName option:selected").text() + " - Sinhala - " + "ID List.xls";
	}
	if (md == "en") {
		var exportFilename = $("#selectedDegreeName option:selected").text() + " - English - " + "ID List.xls";

	}
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

// function getSinhalaAttendenceSheet12() {
// 	var count = 1;
// 	var Rcount = 1;
// 	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
// 		alert("Please Select Programm and the Year.");
// 	}
// 	else {

// 		var newStr = `<style>
// 		@font-face
// 		{font-family:"Cambria Math";
// 		panose-1:2 4 5 3 5 4 6 3 2 4;
// 		mso-font-charset:0;
// 		mso-generic-font-family:roman;
// 		mso-font-pitch:variable;
// 		mso-font-signature:-536869121 1107305727 33554432 0 415 0;}
// 	 p.MsoNormal, li.MsoNormal, div.MsoNormal
// 		{mso-style-unhide:no;
// 		mso-style-qformat:yes;
// 		mso-style-parent:"";
// 		margin:0cm;
// 		mso-pagination:widow-orphan;
// 		font-size:12.0pt;
// 		font-family:"Times New Roman",serif;
// 		mso-fareast-font-family:"Times New Roman";
// 		mso-fareast-theme-font:minor-fareast;}
// 	p.MsoHeader, li.MsoHeader, div.MsoHeader
// 		{mso-style-priority:99;
// 		mso-style-link:"Header Char";
// 		margin:0cm;
// 		mso-pagination:widow-orphan;
// 		tab-stops:center 225.65pt right 451.3pt;
// 		font-size:12.0pt;
// 		font-family:"Times New Roman",serif;
// 		mso-fareast-font-family:"Times New Roman";
// 		mso-fareast-theme-font:minor-fareast;}
// 	p.MsoFooter, li.MsoFooter, div.MsoFooter
// 		{mso-style-priority:99;
// 		mso-style-link:"Footer Char";
// 		margin:0cm;
// 		mso-pagination:widow-orphan;
// 		tab-stops:center 225.65pt right 451.3pt;
// 		font-size:12.0pt;
// 		font-family:"Times New Roman",serif;
// 		mso-fareast-font-family:"Times New Roman";
// 		mso-fareast-theme-font:minor-fareast;}
// 	p
// 		{mso-style-noshow:yes;
// 		mso-style-priority:99;
// 		mso-margin-top-alt:auto;
// 		margin-right:0cm;
// 		mso-margin-bottom-alt:auto;
// 		margin-left:0cm;
// 		mso-pagination:widow-orphan;
// 		font-size:12.0pt;
// 		font-family:"Times New Roman",serif;
// 		mso-fareast-font-family:"Times New Roman";
// 		mso-fareast-theme-font:minor-fareast;}
// 	p.msonormal0, li.msonormal0, div.msonormal0
// 		{mso-style-name:msonormal;
// 		mso-style-noshow:yes;
// 		mso-style-priority:99;
// 		mso-style-unhide:no;
// 		mso-margin-top-alt:auto;
// 		margin-right:0cm;
// 		mso-margin-bottom-alt:auto;
// 		margin-left:0cm;
// 		mso-pagination:widow-orphan;
// 		font-size:12.0pt;
// 		font-family:"Times New Roman",serif;
// 		mso-fareast-font-family:"Times New Roman";
// 		mso-fareast-theme-font:minor-fareast;}
// 	span.HeaderChar
// 		{mso-style-name:"Header Char";
// 		mso-style-priority:99;
// 		mso-style-unhide:no;
// 		mso-style-locked:yes;
// 		mso-style-link:Header;
// 		mso-ansi-font-size:12.0pt;
// 		mso-bidi-font-size:12.0pt;
// 		font-family:"Times New Roman",serif;
// 		mso-ascii-font-family:"Times New Roman";
// 		mso-fareast-font-family:"Times New Roman";
// 		mso-fareast-theme-font:minor-fareast;
// 		mso-hansi-font-family:"Times New Roman";
// 		mso-bidi-font-family:"Times New Roman";}
// 	span.FooterChar
// 		{mso-style-name:"Footer Char";
// 		mso-style-priority:99;
// 		mso-style-unhide:no;
// 		mso-style-locked:yes;
// 		mso-style-link:Footer;
// 		mso-ansi-font-size:12.0pt;
// 		mso-bidi-font-size:12.0pt;
// 		font-family:"Times New Roman",serif;
// 		mso-ascii-font-family:"Times New Roman";
// 		mso-fareast-font-family:"Times New Roman";
// 		mso-fareast-theme-font:minor-fareast;
// 		mso-hansi-font-family:"Times New Roman";
// 		mso-bidi-font-family:"Times New Roman";}
// 	span.GramE
// 		{mso-style-name:"";
// 		mso-gram-e:yes;}
// 	.MsoChpDefault
// 		{mso-style-type:export-only;
// 		mso-default-props:yes;
// 		font-size:10.0pt;
// 		mso-ansi-font-size:10.0pt;
// 		mso-bidi-font-size:10.0pt;
// 		mso-font-kerning:0pt;
// 		mso-ligatures:none;}
// 	   @page WordSection1
// 		   {size:595.3pt 841.9pt;
// 			margin:36.0pt 36.0pt 36.0pt 36.0pt;
// 			mso-header-margin:35.4pt;
// 			mso-footer-margin:35.4pt;
// 		   mso-paper-source:0;}
// 	   div.WordSection1
// 		   {page:WordSection1;}

// 	   </style>
// 	   `;

// 		newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
// 		newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
// 		newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
// 		newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
// 		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Attendance Sheet</div>";
// 		newStr += "<br/>";

// 		newStr += '<table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0 width=700 style="width:525.05pt;border-collapse:collapse;border:none;mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:none;mso-border-insidev:none">';
// 		newStr += '<tbody>';
// 		newStr += '<tr>';
// 		newStr += '<td  width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt"><p class=MsoNormal><b><span style="font-size:10.0pt;mso-fareast-font-family:Times New Roman">Course Unit<o:p></o:p></span></b></p></td>';

// 		newStr += "<td width=183 style='width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>";
// 		newStr += '<p><span style="font-size:10.0pt">:&nbsp;.............................................<o:p></o:p></span></p>';
// 		newStr += '</td>';

// 		newStr += '<td  width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt"><p class=MsoNormal><b><span style="font-size:10.0pt;mso-fareast-font-family:Times New Roman"><o:p></o:p></span></b></p></td>';

// 		newStr += "<td width=183 style='width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>";
// 		newStr += '<p><span style="font-size:10.0pt">&nbsp;<o:p></o:p></span></p>';
// 		newStr += '</td>';
// 		newStr += '</tr>';



// 		newStr += '<tr style="mso-yfti-irow:2;height:20.5pt">';
// 		newStr += '<td width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
// 		newStr += '<p><b><span style="font-size:10.0pt">Date<o:p></o:p></span></b></p>';
// 		newStr += '</td>';
// 		newStr += '<td width=183 style="width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
// 		newStr += '<p><span style="font-size:10.0pt">: .............................................<o:p></o:p></span></p>';
// 		newStr += '</td>';

// 		newStr += '<td width=157 style="width:118.1pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
// 		newStr += '<p><b><span style="font-size:10.0pt">Time<o:p></o:p></span></b></p>';
// 		newStr += '</td>';
// 		newStr += '<td  width=217 style="width:162.65pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
// 		newStr += '<p><span style="font-size:10.0pt">:&nbsp;..................................................<o:p></o:p></span></p>';
// 		newStr += '</td>';
// 		newStr += '</tr>';
// 		newStr += '<tr>';
// 		newStr += "<td  width=143 style='width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'><p class=MsoNormal><b><span style='font-size:10.0pt;mso-fareast-font-family:Times New Roman'>Lecturer's Name<o:p></o:p></span></b></p></td>";

// 		newStr += "<td width=183 style='width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>";
// 		newStr += '<p><span style="font-size:10.0pt">:&nbsp;.............................................<o:p></o:p></span></p>';
// 		newStr += '</td>';

// 		newStr += '<td  width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt"><p class=MsoNormal><b><span style="font-size:10.0pt;mso-fareast-font-family:Times New Roman"><o:p></o:p></span></b></p></td>';

// 		newStr += "<td width=183 style='width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>";
// 		newStr += '<p><span style="font-size:10.0pt">&nbsp;<o:p></o:p></span></p>';
// 		newStr += '</td>';
// 		newStr += '</tr>';



// 		newStr += '</tbody>';
// 		newStr += '</table><br/>';


// 		newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
// 		newStr += "<tr>";
// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%;height: 50px;">Student No</th>';
// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%;height: 50px;">Name With Initial</th>';
// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Signature</th>';
// 		newStr += "</tr>";
// 		let count = 1;

// 		for (var i = 0; i < studentNoLength; i++) {
// 			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

// 				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

// 					if (medium1Arr[i] == "si") {

// 						newStr += "<tr>";
// 						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">' + count + '</td>';
// 						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + studentNoArr[i] + '</td>';
// 						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:45%;height: 50px;">' + studentInitialArr[i] + '</td>';
// 						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;"></td>';
// 						newStr += "</tr>";
// 						count++;

// 						if (i == 12 && ex_CodeLength != 14) {
// 							newStr += "</table>";
// 							newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
// 							newStr += "<tr>";
// 							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
// 							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%;height: 50px;">Student No</th>';
// 							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%;height: 50px;">Name With Initial</th>';
// 							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Signature</th>';
// 							newStr += "</tr>";
// 						} else if (i > 12 && ex_CodeLength != 14) {
// 							if ((i - 12) % 18 == 0) {
// 								newStr += "</table>";
// 								newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
// 								newStr += "<tr>";
// 								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
// 								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%;height: 50px;">Student No</th>';
// 								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%;height: 50px;">Name With Initial</th>';
// 								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Signature</th>';
// 								newStr += "</tr>";
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}

// 		newStr += "</table></div>";

// 	}

// 	var exportFilename = "Attendace Sheet.doc";
// 	// newStr += "</table></div>";

// 	let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
// 	sendDataList += "&sheetName=" + "Exam Attendece Sheet";
// 	isrHandle.getDoc(newStr, exportFilename);

// }



function getEnglishAttendenceSheet12() {

	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
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
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Attendance Sheet</div>";
		newStr += "<br/>";

		newStr += '<table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0 width=700 style="width:525.05pt;border-collapse:collapse;border:none;mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:none;mso-border-insidev:none">';
		newStr += '<tbody>';
		newStr += '<tr>';
		newStr += '<td  width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt"><p class=MsoNormal><b><span style="font-size:10.0pt;mso-fareast-font-family:Times New Roman">Course Unit<o:p></o:p></span></b></p></td>';

		newStr += "<td width=183 style='width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>";
		newStr += '<p><span style="font-size:10.0pt">:&nbsp;.............................................<o:p></o:p></span></p>';
		newStr += '</td>';

		newStr += '<td  width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt"><p class=MsoNormal><b><span style="font-size:10.0pt;mso-fareast-font-family:Times New Roman"><o:p></o:p></span></b></p></td>';

		newStr += "<td width=183 style='width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>";
		newStr += '<p><span style="font-size:10.0pt">&nbsp;<o:p></o:p></span></p>';
		newStr += '</td>';
		newStr += '</tr>';



		newStr += '<tr style="mso-yfti-irow:2;height:20.5pt">';
		newStr += '<td width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
		newStr += '<p><b><span style="font-size:10.0pt">Date<o:p></o:p></span></b></p>';
		newStr += '</td>';
		newStr += '<td width=183 style="width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
		newStr += '<p><span style="font-size:10.0pt">: .............................................<o:p></o:p></span></p>';
		newStr += '</td>';

		newStr += '<td width=157 style="width:118.1pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
		newStr += '<p><b><span style="font-size:10.0pt">Time<o:p></o:p></span></b></p>';
		newStr += '</td>';
		newStr += '<td  width=217 style="width:162.65pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
		newStr += '<p><span style="font-size:10.0pt">:&nbsp;..................................................<o:p></o:p></span></p>';
		newStr += '</td>';
		newStr += '</tr>';
		newStr += '<tr>';
		newStr += "<td  width=143 style='width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'><p class=MsoNormal><b><span style='font-size:10.0pt;mso-fareast-font-family:Times New Roman'>Lecturer's Name<o:p></o:p></span></b></p></td>";

		newStr += "<td width=183 style='width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>";
		newStr += '<p><span style="font-size:10.0pt">:&nbsp;.............................................<o:p></o:p></span></p>';
		newStr += '</td>';

		newStr += '<td  width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt"><p class=MsoNormal><b><span style="font-size:10.0pt;mso-fareast-font-family:Times New Roman"><o:p></o:p></span></b></p></td>';

		newStr += "<td width=183 style='width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>";
		newStr += '<p><span style="font-size:10.0pt">&nbsp;<o:p></o:p></span></p>';
		newStr += '</td>';
		newStr += '</tr>';



		newStr += '</tbody>';
		newStr += '</table><br/>';


		newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
		newStr += "<tr>";
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Student No</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:40%;height: 50px;">Name With Initial</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Signature</th>';
		newStr += "</tr>";
		let count = 1;

		PrintStudentIdDTable.rows().every(function (i) {
			// Get the data for the current row
			var checkbox = $(this.node()).find('input[type="checkbox"]');
			var isChecked = checkbox.prop('checked');

			if (isChecked) {

				if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {// & (medium1Arr[i] == "en" )){	

						newStr += "<tr>";
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">' + count + '</td>';
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:25%;height: 50px;">' + studentNoArr[i] + '</td>';
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:40%;height: 50px;">' + studentInitialArr[i] + '</td>';
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;"></td>';
						newStr += "</tr>";
						count++;

						if (i == 12 && ex_CodeLength != 14) {
							newStr += "</table>";
							newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
							newStr += "<tr>";
							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Student No</th>';
							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:40%;height: 50px;">Name With Initial</th>';
							newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Signature</th>';;
							newStr += "</tr>";
						} else if (i > 12 && ex_CodeLength != 14) {
							if ((i - 12) % 18 == 0) {
								newStr += "</table>";
								newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
								newStr += "<tr>";
								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Student No</th>';
								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:40%;height: 50px;">Name With Initial</th>';
								newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:25%;height: 50px;">Signature</th>';
								newStr += "</tr>";
							}
						}

					}
				}

			}
		});






















		// for (var i = 0; i < studentNoLength; i++) {
		// 	if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

		// 		if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

		// 			if (medium1Arr[i] == "en") {

		// 				newStr += "<tr>";
		// 				newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">' + count + '</td>';
		// 				newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + studentNoArr[i] + '</td>';
		// 				newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:45%;height: 50px;">' + studentInitialArr[i] + '</td>';
		// 				newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;"></td>';
		// 				newStr += "</tr>";
		// 				count++;

		// 				if (i == 12 && ex_CodeLength != 14) {
		// 					newStr += "</table>";
		// 					newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
		// 					newStr += "<tr>";
		// 					newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
		// 					newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%;height: 50px;">Student No</th>';
		// 					newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%;height: 50px;">Name With Initial</th>';
		// 					newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Signature</th>';
		// 					newStr += "</tr>";
		// 				} else if (i > 12 && ex_CodeLength != 14) {
		// 					if ((i - 12) % 18 == 0) {
		// 						newStr += "</table>";
		// 						newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
		// 						newStr += "<tr>";
		// 						newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
		// 						newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%;height: 50px;">Student No</th>';
		// 						newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%;height: 50px;">Name With Initial</th>';
		// 						newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Signature</th>';
		// 						newStr += "</tr>";
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		newStr += "</table></div>";

	}

	var exportFilename = "Attendace Sheet.doc";
	// newStr += "</table></div>";

	let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
	sendDataList += "&sheetName=" + "Exam Attendece Sheet";
	isrHandle.getDoc(newStr, exportFilename);

	// var exportFilename = "Attendance Sheet - English.doc";
	// var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });


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

//--------------------------------------------------------------Registered List------------------------------------------


function getRegisterdListDownloads() {

	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {

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
		newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Attendance Sheet</div>";
		newStr += "<br/>";



		newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';

		newStr += "<thead>";
		newStr += "<tr>";

		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:20%;height: 50px;">Student No</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%;height: 50px;">Name With Initial</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%;height: 50px;">Full Name</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">NIC/Passport Number</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Address</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Mobile No</th>';
		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Email</th>';
		newStr += "</tr>";
		newStr += "</thead>";

		let count = 1;

		for (i = 0; i < studentNoLength; i++) {

			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

					newStr += "<tr>";
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">' + count + '</td>';
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:45%;height: 50px;">' + studentNoArr[i] + '</td>';
					let title = studentPersonalTitleArr[i].trim(); // remove spaces
					// check if last character is '.'
					if (!title.endsWith(".")) {
						title += ".";
					}
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + title + studentInitialArr[i] + '</td>';
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + studentNameArr[i] + '</td>';
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + studentNICArr[i] + '</td>';
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + studentPermanentAddressArr[i] + '</td>';

					if (studentContactMobileArr[i] != "" && studentContactLanArr[i] != "") {
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + studentContactMobileArr[i] + '/' + studentContactLanArr[i] + '</td>';
					} else if (studentContactMobileArr[i] != "") {
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + studentContactMobileArr[i] + '</td>';
					} else if (studentContactLanArr[i] != "") {
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + studentContactLanArr[i] + '</td>';
					} else {
						newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;"></td>';
					}
					newStr += '<td style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;">' + studentContactEmailArr[i] + '</td>';
					newStr += "</tr>";
					count++;

					// if (i == 12 && ex_CodeLength != 14) {
					// 	newStr += "</table>";
					// 	newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
					// 	newStr += "<tr>";
					// 	newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
					// 	newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%;height: 50px;">Student No</th>';
					// 	newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%;height: 50px;">Name With Initial</th>';
					// 	newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Signature</th>';
					// 	newStr += "</tr>";
					// } else if (i > 12 && ex_CodeLength != 14) {
					// 	if ((i - 12) % 18 == 0) {
					// 		newStr += "</table>";
					// 		newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
					// 		newStr += "<tr>";
					// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
					// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%;height: 50px;">Student No</th>';
					// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%;height: 50px;">Name With Initial</th>';
					// 		newStr += '<th style="font-size: 14px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%;height: 50px;">Signature</th>';
					// 		newStr += "</tr>";
					// 	}

					// }
				}
			}
		}

		newStr += "</table></div>";

	}

	var exportFilename = "Attendace Sheet.doc";
	// newStr += "</table></div>";

	let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
	sendDataList += "&sheetName=" + "Registered Students List";
	isrHandle.getDoc(newStr, exportFilename);



}





function DownloadStudentListwithAddress2(type) {

	var count = 1;
	var Rcount = 1;


	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}

	else {
		newStr = "";
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
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
			newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Registered</div>";
			newStr += "<br/>";


		}

		if (type == "e") {
			newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
			newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
			newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Registered</div>";
			newStr += "<br/>";
		}
		// newStr += "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		// newStr += "<div id='topics1' class='info'></div>";
		// newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
		// newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('achedamicYear').value + "</div>";

		// newStr += "<br>";


		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<thead>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Application No</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Name With Initial</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		newStr += "<th style='border: 1px solid black;'>Signature Number</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		// newStr += "<th style='border: 1px solid black;'>Ad 2</th>";
		// newStr += "<th style='border: 1px solid black;'>Ad 3</th>";
		// newStr += "<th style='border: 1px solid black;'>Ad 4</th>";
		// newStr += "<th style='border: 1px solid black;'>Ad 5</th>";
		newStr += "<th style='border: 1px solid black;'>Tel:No.</th>";
		newStr += "<th style='border: 1px solid black;'>Mobile No</th>";
		newStr += "<th style='border: 1px solid black;'>Email</th>";
		//newStr +="<th style='border: 1px solid black;'>Selected Criteria</th>";
		newStr += "</tr>";
		newStr += "</thead>";

		PrintStudentIdDTable.rows().every(function (i) {
			// Get the data for the current row
			var checkbox = $(this.node()).find('input[type="checkbox"]');
			var isChecked = checkbox.prop('checked');

			if (isChecked) {

				if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & (document.getElementById('achedamicYear').value == achedamicYearArr[i] || document.getElementById('achedamicYear').value == "All")) {
						var stuAddress = studentPermanentAddressArr[i];
						var convertstuAddress = stuAddress.toLowerCase().replace(/\b[a-z]/g, function (letter) { return letter.toUpperCase(); });
						var testAdd = titleCase(convertstuAddress);
						testAdd = removeDash(testAdd);
						var test1 = testAdd.split(",");
						var test = 1;

						newStr += "<tr style='border: 1px solid black;'>";

						newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';

						newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + applicationNoArr[i] + '</td>';
						newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr[i] + '</td>';

						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">S' + studentNICArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentPermanentAddressArr[i] + '</td>';
						// if(test1[0] != undefined){
						// 	newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + test1[0] + '</td>';

						// }else{
						// 	newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// }

						// 			if(test1[1] != undefined){
						// 							newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + test1[1] + '</td>';

						// }else{
						// 	newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// }


						// 			if(test1[2] != undefined){
						// 	newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + test1[2] + '</td>';

						// }else{
						// 	newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// }

						// 			if(test1[3] != undefined){
						// 	newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + test1[3] + '</td>';

						// }else{
						// 	newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';

						// }
						// let other = "";
						// for (var q = 4; q < test1.length; q++) {
						// 	if(test1[q] == undefined){
						// 	other = other + "," + "";

						// 	}else{
						// 	other = other + "," + test1[q];

						// 	}
						// }
						// newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + other + '</td>';


						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactLanArr[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactMobileArr[i] + '</td>';

						newStr += '<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentContactEmailArr[i] + '</td>';
						newStr += "</tr>";
						// newStr += "</div><br>";
						count++;


					}
				}



			}
		});

		newStr += "</table>";




		if (type == "w") {

			var exportFilename = "Registered Students List.doc";
			// newStr += "</table></div>";

			let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
			sendDataList += "&sheetName=" + "Registered Students List";
			isrHandle.getDoc(newStr, exportFilename);

		}

		if (type == "e") {
			//eng
			var exportFilename = "Registered Students List.xls";
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
		// var exportFilename = $("#selectedDegreeName option:selected").text() + " - Student List.doc";
		// var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });


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
