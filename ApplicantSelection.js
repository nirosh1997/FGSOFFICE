dataRep["ApplicationNo"] = dataRep['senateYYYY'] = dataRep['senateMM'] = dataRep['senateDD'] = dataRep["senateNo"] = "";

dataRep['BOSYYYY'] = dataRep['BOSMM'] = dataRep['BOSDD'] = dataRep["boardOfStudyNo"] = "";

dataRep['FBYYYY'] = dataRep['FBMM'] = dataRep['FBDD'] = dataRep["facultyBoardNo"] = dataRep['userName'] = "";

var BulkNote;
var TempBulkNote;
var user;
var BulkNoteArr = new Array();
var newStr1;
var countviewList = 0;
var checkdeleteorsave = "";
var selectedCheckedE = "";
var selectedCheckedP = "";
function callNextFunctionApplicantProfile(index) {

	i = 0;
	do {
		if (index == i) {
			dataRep["studentNIC"] = studentNICArr[i];
			dataRep["applicationNo"] = applicationNoArr[i];
			dataRep["programmeTypeCode"] = programmeTypeCodeArr[i];
			dataRep["studentName"] = studentNameArr[i];
			dataRep["studentPersonalTitle"] = studentPersonalTitleArr[i];
			dataRep["studentInitial"] = studentInitialArr[i];
			dataRep["studentDateofbirth"] = studentDateofbirthArr[i];
			dataRep["studentNationality"] = studentNationalityArr[i];
			dataRep["studentCitizenship"] = studentCitizenshipArr[i];
			dataRep["studentEmployment"] = studentEmploymentArr[i];
			dataRep["studentPermanentAddress"] = studentPermanentAddressArr[i];
			dataRep["studentOfficeAddress"] = studentOfficeAddressArr[i];
			dataRep["correspondence"] = correspondenceArr[i];
			dataRep["studentContactLan"] = studentContactLanArr[i];
			dataRep["studentContactMobile"] = studentContactMobileArr[i];
			dataRep["studentContactEmail"] = studentContactEmailArr[i];

			dataRep["bachelorDegree"] = bachelorDegreeArr[i];
			dataRep["bachelorDegreeTitle"] = bachelorDegreeTitleArr[i];
			dataRep["bachelorDegreeobtainUniversity"] = bachelorDegreeobtainUniversityArr[i];
			dataRep["bachelorDegreegraduationYear"] = bachelorDegreegraduationYearArr[i];
			dataRep["bachelorDegreegraduationMonth"] = bachelorDegreegraduationMonthArr[i];
			dataRep["higherDegree"] = higherDegreeArr[i];
			dataRep["higherDegreeTitle"] = higherDegreeTitleArr[i];
			dataRep["higherDegreeobtainUniversity"] = higherDegreeobtainUniversityArr[i];
			dataRep["higherDegreegraduationYear"] = higherDegreegraduationYearArr[i];
			dataRep["higherDegreegraduationMonth"] = higherDegreegraduationMonthArr[i];
			dataRep["qualificationOne"] = qualificationOneArr[i];
			dataRep["qualificationAwardingAuthorityOne"] = qualificationAwardingAuthorityOneArr[i];
			dataRep["qualificationAwardingYearOne"] = qualificationAwardingYearOneArr[i];
			dataRep["qualificationTwo"] = qualificationTwoArr[i];
			dataRep["qulificationAwardingAuthorityTwo"] = qulificationAwardingAuthorityTwoArr[i];
			dataRep["qulificationAwardingYearTwo"] = qulificationAwardingYearTwoArr[i];

			dataRep["companyOne"] = companyOneArr[i];
			dataRep["designationOne"] = designationOneArr[i];
			dataRep["fromOne"] = fromOneArr[i];
			dataRep["toOne"] = toOneArr[i];
			dataRep["companyTwo"] = companyTwoArr[i];
			dataRep["designationTwo"] = designationTwoArr[i];
			dataRep["fromTwo"] = fromTwoArr[i];
			dataRep["toTwo"] = toTwoArr[i];
			dataRep["companyThree"] = companyThreeArr[i];
			dataRep["designationThree"] = designationThreeArr[i];
			dataRep["fromThree"] = fromThreeArr[i];
			dataRep["toThree"] = toThreeArr[i];
			dataRep["refreeNameOne"] = refreeNameOneArr[i];
			dataRep["refreeAddressOne"] = refreeAddressOneArr[i];
			dataRep["refreeDesignationOne"] = refreeDesignationOneArr[i];
			dataRep["refreeNameTwo"] = refreeNameTwoArr[i];
			dataRep["refreeAddressTwo"] = refreeAddressTwoArr[i];
			dataRep["refreeDesignationTwo"] = refreeDesignationTwoArr[i];

			dataRep["registrationSougth"] = registrationSougthArr[i];
			dataRep["mainSubject"] = mainSubjectArr[i];
			dataRep["fieldOfSpecialization"] = fieldOfSpecializationArr[i];
			dataRep["researchMedium"] = researchMediumArr[i];
			dataRep["researchTitle"] = researchTitleArr[i];
			dataRep["grantForProject"] = grantForProjectArr[i];
			dataRep["grantDetails"] = grantDetailsArr[i];
			dataRep["financedDetails"] = financedDetailsArr[i];
			dataRep["registeredOtherDegree"] = registeredOtherDegreeArr[i];

			dataRep["applicantName"] = applicantNameArr[i];
			dataRep["applicantInstitution"] = applicantInstitutionArr[i];
			dataRep["applicantAddress"] = applicantAddressArr[i];
			dataRep["applicantResearchTitle"] = applicantResearchTitleArr[i];

			dataRep["facultyTitle"] = facultyTitleArr[i];
			dataRep["facultyCode"] = facultyCodeArr[i];
			dataRep["programmeTypeTitle"] = programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"] = programmeTypeCodeArr[i];
			dataRep["degreeTitle"] = degreeTitleArr[i];
			dataRep["degreeCode"] = degreeCodeArr[i];
			dataRep["universityTitle"] = universityTitleArr[i];
			dataRep["universityCode"] = universityCodeArr[i];


			sendForm('data4ApplicantProfileSelection');


		}
		//sendForm('data4ApplicantProfile');
	} while (index != i++);
}



function setuserName1() {
	user = document.loginForm.username.value;
}

var currentdate = "";
var datetime = "";
var TempUser = "";

//------------------------------------------------------MAIN FUNCTION START---------------------------

var ApplicantSelectionDataTable;

var bosNumber;
var listNumber;
var bosDate;


function DataTableForApplicantSelection() {
	tempNo = "";
	var buttons = [];

	if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI'
		|| dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
		buttons.push({
			text: 'Save Applications',
			className: 'btn btn-success flBtn',
			action: function (e, dt, node, config) {
				let errorCount = 0;
				for (var i = 0; i < applicationNoLength; i++) {
					let checkbox = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelected' + i + '"]').prop('checked');
					let checkboxE = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelectedE' + i + '"]').prop('checked');
					let checkboxP = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelectedP' + i + '"]').prop('checked');
					let checkboxPe = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelectedPe' + i + '"]').prop('checked');
					let checkboxS = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelectedS' + i + '"]').prop('checked');
					if (checkbox == true) {
						if ((checkboxE == true || checkboxP == true || checkboxPe == true || checkboxS == true)) {

						} else {
							errorCount++;
						}
					}
				}
				if (errorCount > 0) {
					Swal.fire({
						icon: 'error',
						title: 'Error',
						text: "Please select relevant qualification category/ies.",
						showConfirmButton: true,
					});

				} else {
					degreeCode = dataRep["selectedDegreeName"];
					academicYear = dataRep["achedamicYear"];
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

							if (response[0].status === 200) {
								let disableCourseCommence = "";
								let disablecourseend = "";
								if (response[0].coursecommence != "") {
									disableCourseCommence = "disabled";
								}
								if (response[0].coursecommence != "") {
									disablecourseend = "disabled";
								}

								Swal.fire({
									title: "Enter BOS Information",
									html:
										'<lable style="text-align: left;display: block;width: 100%;font-size: 15px;">List Number :</lable><input id="listNumber" class="form-control form-control-sm" placeholder="List Number">' +
										'<lable style="text-align: left;display: block;width: 100%;font-size: 15px;" class="mt-2">BoS Number :</lable><input id="bosNumber" class="form-control form-control-sm" placeholder="BOS Number">' +
										'<lable style="text-align: left;display: block;width: 100%;font-size: 15px;" class="mt-2">BoS Date :</lable><input id="bosDate" class="form-control form-control-sm" type="date" placeholder="BOS Date">' +
										'<lable style="text-align: left;display: block;width: 100%;font-size: 15px;" class="mt-2">Programme Start Date :</lable><input id="startDate" class="form-control form-control-sm" type="date" placeholder="Start Date" value=' + response[0].coursecommence + ' ' + disableCourseCommence + '>' +
										'<lable style="text-align: left;display: block;width: 100%;font-size: 15px;" class="mt-2">Programme End Date :</lable><input id="endDate" class="form-control form-control-sm" type="date" placeholder="End Date"  value=' + response[0].courseend + ' ' + disablecourseend + '>',
									showCancelButton: true,
									confirmButtonText: "Save Applicaitons",
								}).then((result) => {
									if (result.isConfirmed) {
										bosNumber = document.getElementById('bosNumber').value;
										listNumber = document.getElementById('listNumber').value;
										bosDate = document.getElementById('bosDate').value;
										startDate = document.getElementById('startDate').value;
										endDate = document.getElementById('endDate').value;

										let postData = {
											action: "data4UpdateBatchStartEnd",
											startDate: startDate,
											endDate: endDate,
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
												// console.log(response)
												// console.log(postData)
											},
											error: function (error) {
												console.log(error)
												// console.log(postData)

											}
										});





										successCount == 0;
										let count = successCount;
										formApplicantListsendForm1('updateApplicantList');
										preRegApplicant("addSelectedStudentList");
										CreateStudentUserAccountNew("addStudentAccounts");
										formRegisterBulkNotesendFormNew2("addBulkRegisterNotes");
										resetdata();
										sendForm('data4LoadApplicantSelection');


										Swal.fire({
											icon: 'success',
											title: 'Success',
											text: "You've successfully selected " + ' applicaitions.',
											showConfirmButton: true,
										});
									} else if (result.isDenied) {
										Swal.fire("Applications are not selected", "", "info");
									}

								});

							} else {
								Swal.fire({
									icon: 'error',
									title: 'No Batch Found',
									text: "Please contact administrator and create batch for " + degreeCode + "-" + academicYear,
									showConfirmButton: true,
								});
							}
						},
						error: function (error) {
							console.log(error);
						}
					});






				}
			}
		});
	}

	if (dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
		buttons.push({
			text: 'Remove Applications',
			className: 'btn btn-success flBtn',
			action: function (e, dt, node, config) {
				successCount = 0;
				checkdeleteorsaveapplication1();
				formDeleteApplicationsendFormApplicantSelection('deleteApplicationForm');
				sendForm('data4checkdepartmentSelection');
				sendForm('data4checkUserSelection');

				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: "You've successfully removed " + successCount + ' applicaitions.',
					showConfirmButton: true,
				});
			}
		});
	}


	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'SAR-GWAI'
		|| dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
		// buttons.push({
		// 	text: 'Download Applications',
		// 	className: 'btn btn-primary',
		// 	action: function (e, dt, node, config) {
		// 		CompleteApplication1();
		// 	}
		// });
	}



	// ApplicantSelectionDataTable ="";
	if (!$.fn.DataTable.isDataTable('#applicantSelectionTable'))
		ApplicantSelectionDataTable = $('#applicantSelectionTable').DataTable({
			dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
				"<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
				"<'row'<'col-12't>>" + // Table in a single line
				"<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
			buttons: buttons,
			columnDefs: [
				// { "width": "2%", "targets": 0 },
				// { "width": "5%", "targets": 5 },
				// { "width": "5%", "targets": 6 },
				// { "width": "5%", "targets": 7 },
				// { "width": "5%", "targets": 8 },
				// { "width": "5%", "targets": 9 },
				// { "width": "10%", "targets": 4 },
				// { "width": "10%", "targets": 2 },
				// { "width": "15%", "targets": 1 },
				// { "width": "10%", "targets": 3 },
				// { "width": "30%", "targets": 10 },

				{
					targets: 5,
					orderable: false,
					searchable: false,
					className: 'selectall-checkbox-selectd',

				},
				{
					targets: 6,
					orderable: false,
					searchable: false,
					className: 'selectall-checkbox-educatuion',
				},
				{
					targets: 7,
					orderable: false,
					searchable: false,
					className: 'selectall-checkbox-professional',
				},
				{
					targets: 8,
					orderable: false,
					searchable: false,
					className: 'selectall-checkbox-pending',
				},
				{
					targets: 9,
					orderable: false,
					searchable: false,
					className: 'selectall-checkbox-special',
				}
			],
			select: {
				style: 'multi',
				selector: 'td:nth-child(6) input',
				blurable: false,
			},
			order: [0, 'asc'],
		});

	ApplicantSelectionDataTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		var countSelectedRows = ApplicantSelectionDataTable.rows({ selected: true }).count();
		var countItems = ApplicantSelectionDataTable.rows().count();

		if (countItems > 0) {
			if (countSelectedRows == countItems) {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
			} else {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
			}
		}

		if (e.type === 'select') {
			$('.selectall-checkbox input[type="checkbox"]', ApplicantSelectionDataTable.rows({ selected: true }).nodes()).prop('checked', true);
		} else {
			$('.selectall-checkbox input[type="checkbox"]', ApplicantSelectionDataTable.rows({ selected: false }).nodes()).prop('checked', false);
		}
	});

	// When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	ApplicantSelectionDataTable.on('click', 'thead .selectall-checkbox', function () {
		$('input[type="checkbox"]', this).trigger('click');
	});


	// When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	ApplicantSelectionDataTable.on('click', 'thead .selectall-checkbox-selectd input[type="checkbox"]', function (e) {
		if (this.checked) {
			ApplicantSelectionDataTable.rows().select();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
				}
			}
		} else {
			ApplicantSelectionDataTable.rows().deselect();
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

function CreateStudentUserAccountNew(frm) {
	// console.log(dataStrUpForAccountCreate);
	// isrHandle.getDataFromDB2(eval("clientController"), "serverController.php", dataStrUpForAccountCreate);
}

function formRegisterBulkNotesendFormNew2(frm) {
	isrHandle.getDataFromDB2(eval("clientController"), "serverController.php", dataStrUpNoteForStudent);
}


function preRegApplicant(frm) {

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
			let checkboxElement = $(ApplicantSelectionDataTable.row(k).node()).find('input[type="checkbox"][id="checkSelected' + k + '"]');
			let studentNoElement = $(ApplicantSelectionDataTable.row(k).node()).find('input[type="text"][id="studentNo' + k + '"]');
			if (checkboxElement.length && studentNoElement.length) {
				let isChecked = checkboxElement.prop('checked');
				let studentNo = studentNoElement.length ? studentNoElement.val() : null;
				let notesValue = $(ApplicantSelectionDataTable.row(k).node()).find('textarea[id="notes' + k + '"]').val();
				if (isChecked == true && studentNo != "" && studentNo != null) {
					// student Register set data	
					studentContactMobileArr[k] = studentContactMobileArr[k].replace(/[<>&"'+]/g, '');
					studentOfficeAddressArr[k] = studentOfficeAddressArr[k].replace(/[<>&"'+]/g, '');
					studentOfficeAddressArr[k] = studentOfficeAddressArr[k].replace(/[<>&"'+]/g, '');
					studentEmploymentArr[k] = studentEmploymentArr[k].replace(/[<>&"'+]/g, '');
					studentPermanentAddressArr[k] = studentPermanentAddressArr[k].replace(/[<>&"'+]/g, '');
					studentContactLanArr[k] = studentContactLanArr[k].replace(/[<>&"'+]/g, '');

					newStr += "&universityCode=" + universityCodeArr[k] + "&facultyCode=" + facultyCodeArr[k] + "&programmeTypeCode=" + programmeTypeCodeArr[k] + "&degreeCode=" + degreeCodeArr[k] + "&studentNIC=" + studentNICArr[k]
						+ "&applicationNo=" + applicationNoArr[k] + "&studentName=" + studentNameArr[k] + "&studentPersonalTitle=" + studentPersonalTitleArr[k] + "&studentInitial=" + studentInitialArr[k]
						+ "&studentDateofbirth=" + studentDateofbirthArr[k] + "&studentEmployment=" + studentEmploymentArr[k] + "&studentPermanentAddress=" + studentPermanentAddressArr[k]
						+ "&studentOfficeAddress=" + studentOfficeAddressArr[k] + "&studentContactLan=" + studentContactLanArr[k] + "&studentContactMobile=" + studentContactMobileArr[k] + "&studentContactEmail=" + studentContactEmailArr[k];
					newStr += "&studentNo=" + studentNo;
					newStr += "&LibraryIdCode=" + studentNo;

					newStr += "&registered=" + "prg";
					newStr += "&notes=" + notesValue;
					newStr += "&RegisteredDate=" + currentdate;
					SelectedStudentData[k] = dataStr + newStr;
					// end student Register set data		


					// create user account set data
					// newStrCreateAccount += "&sUserName=" + studentNo;
					var splitting = studentNo;
					var test1 = splitting.split("/");
					let test = "";

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


					// newStrCreateAccount += "&sPassWord=md5('" + studentNICArr[k]+"')";
					// newStrCreateAccount += "&roleId=" + 11;
					// newStrCreateAccount += "&sUName=" + test;


					var postData = {
						action: "CreateStudentUser",
						sUserName: studentNo,
						sPassWord: studentNICArr[k],
						roleId: 11,
						sUName: test,
						authcode: authcode,
						username: dataRep['userId'],
					};

					console.log(postData);
					$.ajax({
						type: 'POST',
						url: 'rules/user.php', // Replace with your server-side script URL
						data: postData,
						dataType: 'json',
						success: function (response) {
							if (response.status == 200) {
								// let pw = response.pw;	
								// const completeMessagesend = "Your FGS MIS account has been created. Please check your email. ";
								// // sendDirectSMS(mobileNumberValid(mobile), completeMessagesend);


								// let subject = "FGS MIS | Account Login";
								// let body = "Your <b>FGS MIS</b> has been successfully created. Your new credentials are as follows.";
								// body += "<p><b>Username : </b>" + userName + "</p>";
								// body += "<p><b>Password : </b>" + pw + "</p>";
								// body += "<br><p>Please make sure that you log into the FGS MIS using the given Username and Password.You can change your password accordingly once you have logged in to the system.</p><br>";

								// body += "<a href='" + baseUrl + "/staff' style='display: block; text-align: center; font-weight: 500; padding: 12px 20px; background: #c0392b; border-radius: 3px; color: #eee; font-size: 14px; text-decoration: none; margin: 20px 10px 20px 0;width: 200px;'>Click Here to Login</a>";

								// body += "<br>Thank you.<br><br>Best Regards,";

								// sendDirectEmail("fgs@kln.ac.lk", "FGS MIS", email, subject, body)


							}
						},
						error: function (error) {
							console.log(error)
						}
					});


					SelectedStudentDataCreateAccount[k] = dataStr2 + newStrCreateAccount;
					// end create user account set data

				}
			}

		}
		//---------------------------------------------------------add bulk notes--------------------------------
		var checkNotes01 = 0;
		for (var k = 0; k < applicationNoArr.length; k++) {
			let checkboxElement = $(ApplicantSelectionDataTable.row(k).node()).find('input[type="checkbox"][id="checkSelected' + k + '"]');
			let studentNoElement = $(ApplicantSelectionDataTable.row(k).node()).find('input[type="text"][id="studentNo' + k + '"]');
			if (checkboxElement.length && studentNoElement.length) {
				let isChecked = checkboxElement.prop('checked');
				let studentNo = studentNoElement.length ? studentNoElement.val() : null;
				let notesValue = $(ApplicantSelectionDataTable.row(k).node()).find('textarea[id="notes' + k + '"]').val();
				if (isChecked == true && studentNo != "" && studentNo != null) {
					if (notesValue != " ") {
						checkNotes01++;
					}
				}
			}
		}
		if (BulkNote01 != " " || checkNotes != 0) {
			for (var k = 0; k < applicationNoArr.length; k++) {
				let checkboxElement = $(ApplicantSelectionDataTable.row(k).node()).find('input[type="checkbox"][id="checkSelected' + k + '"]');
				let studentNoElement = $(ApplicantSelectionDataTable.row(k).node()).find('input[type="text"][id="studentNo' + k + '"]');
				if (checkboxElement.length && studentNoElement.length) {
					let isChecked = checkboxElement.prop('checked');
					let studentNo = studentNoElement.length ? studentNoElement.val() : null;
					let notesValue = $(ApplicantSelectionDataTable.row(k).node()).find('textarea[id="notes' + k + '"]').val();

					if (isChecked == true && studentNo != "" && studentNo != null) {
						currentdate = new Date();
						datetime = + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/"
							+ currentdate.getFullYear() + "/"
							+ currentdate.getHours() + "/"
							+ currentdate.getMinutes() + "/"
							+ currentdate.getSeconds();

						if (notesValue != " " && TempBulkNote01 != undefined) {
							newStr1 = "action=addNote";
							newStr1 += "&interface=" + "addBulkRegisterNotes";
							newStr1 += "&messageId=" + datetime;
							newStr1 += "&referenceNo=" + studentNo;
							newStr1 += "&userId=" + TempUser01;
							newStr1 += "&message=" + TempBulkNote01 + "/" + notesValue;
							BulkNoteArr01[k] = newStr1;
						}
						else if (notesValue != " " && TempBulkNote01 == undefined) {
							newStr1 = "action=addNote";
							newStr1 += "&interface=" + "addBulkRegisterNotes";
							newStr1 += "&messageId=" + datetime;
							newStr1 += "&referenceNo=" + studentNo;
							newStr1 += "&userId=" + TempUser01;
							newStr1 += "&message=" + notesValue;
							BulkNoteArr01[k] = newStr1;
						}
						else if (TempBulkNote01 != undefined) {
							newStr1 = "action=addNote";
							newStr1 += "&interface=" + "addBulkRegisterNotes";
							newStr1 += "&messageId=" + datetime;

							newStr1 += "&referenceNo=" + studentNo;
							newStr1 += "&userId=" + TempUser01;
							newStr1 += "&message=" + TempBulkNote01;
							BulkNoteArr01[k] = newStr1;
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
		console.log(dataStrUp)
		isrHandle.getDataFromDB2(eval("clientController"), "serverController.php", dataStrUp);

	}
	return 0;

}

function AddressFormat(address) {
	var inputString = address;
	var valuesArray = inputString.split(', ');
	var resultString = valuesArray.join(',<br>');
	return resultString;

}

function formApplicantSelection(dsp) {


	var selectedChecked = "";
	var registeredChecked = "";


	str = "";
	title = "Applicants Selection";
	if (dsp == "formApplicantSelection") {

		// var role;
		// var role1;
		// var role2;
		// var u = document.cookie;
		// var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		// var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		// for (i = 0; i < userIdLength; i++) {
		// 	if (use == userIdArr[i]) {
		// 		TempUser = use;
		// 		dataRep['roleName'] = roleNameArr[i];
		// 		dataRep['departmentCode'] = departmentCodeArr[i];
		// 		dataRep['userName'] = userNameArr[i];
		// 		dataRep['programmeCode'] = programmeCodeArr[i];
		// 	}

		// }

		// if (dataRep['roleName'] == 'Coordinator') {
		// 	var dcode = dataRep['departmentCode']
		// 	role = "cordinator";

		// 	var pcode = dataRep['programmeCode']
		// 	role = "cordinator";
		// }
		// else if (dataRep['roleName'] == 'Head of the Department') {
		// 	var dcode1 = dataRep['departmentCode']
		// 	role1 = "head";

		// 	var pcode1 = dataRep['programmeCode']
		// 	role1 = "head";
		// }
		// else {
		// 	role2 = "other";
		// }
		// programName = "";
		// programName1 = "";
		// if (role == "cordinator") {
		// 	programName = "<option>Please scroll down to see the records</option>";
		// 	for (j = 0; j < degreeCodeLength; j++) {
		// 		if (degreeCodappeArr[j] != null) {
		// 			if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 				if (degreeCodappeArr[j] == dataRep['departmentCode']) {
		// 					programName1 += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + ">" + degreeTitle1Arr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		// else if (role1 == "head") {
		// 	programName = "<option>Please scroll down to see the records</option>";
		// 	for (j = 0; j < degreeCodeLength; j++) {
		// 		if (degreeCodappeArr[j] != null) {
		// 			if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 				if (departmentCodeappArr[j] == dataRep['departmentCode']) {
		// 					programName1 += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + ">" + degreeTitle1Arr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		// if (role2 == "other") {
		// 	if (dataRep['userName'] == "ssdean" || dataRep['userName'] == "ssar" || dataRep['userName'] == "Asanka") {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (facultyCode3Arr[j] == "FAC03" & degreeTitle1Arr[j] != null) {
		// 				if (degreeCodappeArr[j] != null) {
		// 					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 						programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// 	else if (dataRep['userName'] == "SAR-GWAI") {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (facultyCode3Arr[j] == "FAC10" & degreeTitle1Arr[j] != null) {
		// 				if (degreeCodappeArr[j] != null) {
		// 					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 						programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
		// 					}
		// 				}
		// 			}
		// 		}

		// 	}
		// 	else {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (degreeCodappeArr[j] != null) {
		// 				if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 					programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }



		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;padding: 10px;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';

		str += "<div id='updateApplicantList'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		// if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Head of the Department') {
		// 	str += '<div class="form-group row"><div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">';
		// 	str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		// 	str += '<div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" style="display: inline-flex;">';
		// 	str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterList1();">';
		// 	str += programName;
		// 	str += programName1;
		// 	str += '</select>';
		// 	str += '</div></div>';
		// }
		// else {
		// 	str += '<div class="form-group row"><div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">';
		// 	str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		// 	str += '<div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" style="display: inline-flex;">';
		// 	str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterList1();">';
		// 	str += programName;
		// 	str += '</select>';
		// 	str += '</div></div>';
		// }

		str += '<div class="form-group row"><div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterList1();">';
		str += '</select>';
		str += '</div></div>';

		let date = new Date().getFullYear();


		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">'
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-4" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterList1();">';
		for (i = 2014; i <= date + 2; i++) {
			if (i == date + 2) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div>';
		str += '</div>';
		let mediumSinhalaChecked = mediumEnglishChecked = mediumJapaneseChecked = "";
		if (dataRep['selectMedium'] == 'mediumSinhala') {
			mediumSinhalaChecked = 'checked';
		} else if (dataRep['selectMedium'] == 'mediumEnglish') {
			mediumEnglishChecked = 'checked'
		}else if (dataRep['selectMedium'] == 'mediumJapanese') {
			mediumJapaneseChecked = 'checked'
		}
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="row" style="padding-left: 10px;">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium</label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10" style=""><div class="row">';
		str += "<div class='col-12 col-sm-12 col-md-12 col-lg-8 col-xl-5'>";
		str += "<div class='form-check form-check2-1'> <label class='form-check-label radio-inline'> <input type='radio' id='mediumSinhala' class='form-check-input' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();filterList1();' " + mediumSinhalaChecked + ">Sinhala<i class='input-helper'></i></label></div>";
		str += "<div class='form-check form-check2-2'> <label class='form-check-label radio-inline'> <input type='radio' id='mediumEnglish' class='form-check-input' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();filterList1();' " + mediumEnglishChecked + ">English<i class='input-helper'></i></label></div>";
		str += "<div class='form-check form-check2-2'> <label class='form-check-label radio-inline'> <input type='radio' id='mediumJapanese' class='form-check-input' name='selectMedium' value='mediumJapanese' onclick='dataRep[this.name]=this.value;getMediumJapanese();filterList1();' " + mediumJapaneseChecked + ">Japanese<i class='input-helper'></i></label></div></div>";
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-7"><div class="form-check"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="filterList1();">View List</button></div>';

		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '</div></div>';
		str += '</div></div></div>';
		str += '<div class="col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="applicantSelectionTable">';
		str += '<thead><tr>';
		// str += '<th></th>';
		str += '<th>#</th>';
		str += '<th>Applicant Name</th>';
		str += '<th>Application No</th>';
		str += '<th>NIC</th>';
		// str += '<th style="width=450px !important">Address</th>';
		// str += '<th>Tel:No.</th>';
		// str += '<th>Mobile No</th>';
		// str += '<th>Email</th>';
		str += '<th>Pre-register student No</th>';
		// str += '<th>PIN No</th>';
		str += '<th>Selected</th>';
		str += '<th>Graduate</th>';
		str += '<th>Professional</th>';
		str += '<th>Pending Qulification</th>';
		str += '<th>Special Aporval</th>';
		// str += '<th>Note</th>';
		// str += '<th>Selected<br><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;width: inherit;"></th>';
		// str += '<th>Education<br><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;width: inherit;"></th>';
		// str += '<th>Professional<br><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;width: inherit;"></th>';

		str += '</tr></thead>';
		str += '<tbody>';
		if (applicationNoLength > 0) {


			rcount = 0;
			count = "";
			counttimes = 0;
			for (var i = 0; i < applicationNoLength; i++) {
				rcount++;
				str += "<tr id='checkSelectedTR" + i + "'>";

				let selectedChecked = '';
				let selectedDisable = '';
				let selectedGraduate = '';
				let selectedProf = '';
				let selectedPending = '';
				let selectedSpecialApprove = '';
				if (studentNoArr[i] != "" && studentNoArr[i] != null) {
					selectedChecked = 'checked';
					selectedDisable = 'disabled';
					count = studentNoArr[i];

				}
				if (selectedFromGraduateArr[i] == 1) {
					selectedGraduate = 'checked';
				}
				if (selectedFromProfessionalArr[i] == 1) {
					selectedProf = 'checked';
				}
				if (selectedFromPendingQulificationArr[i] == 1) {
					selectedPending = 'checked';
				}
				if (selectedFromSpecialApproveArr[i] == 1) {
					selectedSpecialApprove = 'checked';
				}

				if (selectionCategoryArr[i] == "P,E") {
					selectedGraduate = 'checked';
					selectedProf = 'checked';
				}


				if (selectionCategoryArr[i] == "G" || selectionCategoryArr[i] == "E") {
					selectedGraduate = 'checked';
				}
				if (selectionCategoryArr[i] == "P") {
					selectedProf = 'checked';
				}
				if (selectionCategoryArr[i] == "Pe") {
					selectedPending = 'checked';
				}
				if (selectionCategoryArr[i] == "S") {
					selectedSpecialApprove = 'checked';
				}

				str += "<div id='notesDiv" + i + "' style='width:200px;display:none' class='investView'><textarea rows='5' name='notes" + i + "'  id='notes" + i + "' style='width:100%;float:left;'  onchange='dataRep[this.name]=this.value'></textarea></div></td>";
				// str += '<td style="text-align: center;"><button id="Namebtn' + i + '" onclick="loadProfileApplicant(this);" class="btn btn-info btn-rounded btn-fw" style="padding: 8px 20px;">Show Profile</button></td>';
				str += '<td>' + rcount + '</td>';
				str += '<td>' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</td>';
				str += '<td>' + applicationNoArr[i] + "<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3" + i + "' value= '" + applicationNoArr[i] + "' ></input></td>";

				str += '<td>' + studentNICArr[i] + '</td>';
				// str += '<td style="width=450px">' + AddressFormat(studentPermanentAddressArr[i]) + '</td>';
				// str += '<td>' + studentContactLanArr[i] + '</td>';
				// str += '<td>' + studentContactMobileArr[i] + '</td>';
				// str += '<td>' + studentContactEmailArr[i] + '</td>';
				// str += '<td>' + pinArr[i] + '</td>';
				if (studentNoArr[i] != "" && studentNoArr[i] != null) {
					str += '<td>' + studentNoArr[i] + '</td>';
				} else {
					str += '<td><input type="text" style="width:250px" name="studentNo' + i + '" id="studentNo' + i + '"; ></td>';

				}
				// if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'SAR-GWAI') {
				// 	strNew += "<td><input type='checkbox'  id='checkRegistered" + i + "' name='checkRegistered" + i + "'' style='margin: auto;width: -webkit-fill-available;'  onchange='generateStudentNo(this);dataRep[this.name]=this.value;'/></td>";
				// }
				str += "<td id='checkSelectedTD" + i + "'><input type='checkbox' " + selectedChecked + " " + selectedDisable + "  id='checkSelected" + i + "' name='checkSelected" + i + "'' style='margin: auto;width: -webkit-fill-available;'  onclick='generateStudentNoForApplicant(this);dataRep[this.name]=this.value;' /></td>";
				str += "<td><input type='checkbox' " + selectedGraduate + " " + selectedDisable + "  id='checkSelectedE" + i + "' name='checkSelectedE" + i + "'' style='margin: auto;width: -webkit-fill-available;'/></td>";
				str += "<td><input type='checkbox' " + selectedProf + " " + selectedDisable + "  id='checkSelectedP" + i + "' name='checkSelectedP" + i + "'' style='margin: auto;width: -webkit-fill-available;'/></td>";
				str += "<td><input type='checkbox' " + selectedPending + " " + selectedDisable + "  id='checkSelectedPe" + i + "' name='checkSelectedPe" + i + "'' style='margin: auto;width: -webkit-fill-available;'/></td>";
				str += "<td><input type='checkbox' " + selectedSpecialApprove + " " + selectedDisable + "  id='checkSelectedS" + i + "' name='checkSelectedS" + i + "'' style='margin: auto;width: -webkit-fill-available;'/></td>";
				if (studentNoArr[i] != "" && studentNoArr[i] != null) {
					// str += '<td></td>';

				} else {
					// str += "<td><textarea rows='5' name='notes" + i + "'  id='notes" + i + "' style='width:100%;'  onchange='dataRep[this.name]=this.value'></textarea></td>";

				}
				str += '</tr>';

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
var adID;
function generateStudentNoForApplicant(sNo) {
	// counttimes++;


	console.log(md)
	var ans = libpt = libdcode = libyr = tempDcodetest = tempPttest = "";
	// if (counttimes == 1 && md == 'si' && count != "") {
	// 	count = (count.split("/", 5)[count.split("/", 5).length - 1]);
	// }
	// if (counttimes == 1 && md == 'en' && count != "") {
	// 	count = (count.split("/", 5)[count.split("/", 5).length - 1]);
	// 	count = count.slice(0, 3);
	// }
	let count = 0;
	for (var i = 0; i < applicationNoLength; i++) {
		let checkbox = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelected' + i + '"]');
		let studentNoElement = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="text"][id="studentNo' + i + '"]');
		let studentNo = studentNoElement.length ? studentNoElement.val() : null;
		var isChecked = checkbox.prop('checked');
		if (isChecked == true) {
			let tempStNo;
			if (studentNoArr[i] == '' || studentNoArr[i] == null) {
				tempStNo = studentNo;
			} else {
				tempStNo = studentNoArr[i];
			}

			if (md == 'si') {

				tempStNo = (tempStNo.split("/", 5)[tempStNo.split("/", 5).length - 1]);
				if (count <= tempStNo) {
					count = tempStNo;
				}
			}
			if (md == 'en') {
				tempStNo = (tempStNo.split("/", 5)[tempStNo.split("/", 5).length - 1]);
				tempStNo = tempStNo.slice(0, 3);
				if (count <= tempStNo) {
					count = tempStNo;
				}
			}

			if (md == 'jp') {
				tempStNo = (tempStNo.split("/", 5)[tempStNo.split("/", 5).length - 1]);
				tempStNo = tempStNo.slice(0, 3);
				console.log(tempStNo);
				console.log(count);
				if (count <= tempStNo) {
					count = tempStNo;
				}
			}
		}
	}

	adID = sNo.id;
	var lastChar = adID.substr(adID.indexOf("checkSelected") + 13);
	var dTitle = document.getElementById('selectedDegreeName').value;
	var yr = document.getElementById('achedamicYear').value;

	if (document.getElementById(adID).checked == false) {
		tempNo = document.getElementById('studentNo' + lastChar).value;
		document.getElementById('studentNo' + lastChar).value = "";
		LibraryIdArr[lastChar] = "";
	}

	console.log(lastChar)
	if (document.getElementById(adID).checked == true) {

		pt = programmeTypeTitleArr[lastChar];
		tempPttest = programmeTypeTitleArr[lastChar];
		dCode = dTitle;
		tempDcodetest = degreeCodeArr[lastChar];
		var tempdCode = degreeCodeArr[lastChar];


		if (tempNo != "") {
			document.getElementById('studentNo' + lastChar).value = tempNo;
			tempNo = "";
		}
		else {
			count++;
			console.log(pt)
			console.log(dCode)
			if (pt != dCode) {
				if (pt == 'MA' && dCode != 'MIT') {
					dCode = dCode.substr(dCode.indexOf("MA") + 2);
				}
				else if (pt == 'MSSC') {

					dCode = dCode.substr(dCode.indexOf("MSSC") + 4);
				}
				else if (dCode == 'MBA') {

					pt = "MBA";
				}else if (dCode == 'MScMIT') {

					pt = "MSc";
				}
				else if (dCode == 'BD-MBA') {

					pt = "BD-MBA";
				}
				else if (dCode == 'PhD-Pub') {

					pt = "PhD-Pub";
				}
				else if (dCode == 'MSCIEC') {
					pt = "MSc";
				}
				else if (dCode == 'MBSC' || dCode == 'PGDM') {
					pt = "";
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
			if (dCode == 'PhD-Pub') {
				pad = "00"
			}
			ans = pad.substring(0, pad.length - str.length) + str




			console.log(ans)
			console.log(dCode)
			if (dCode == 'MHSM' || dCode == 'MPH' || dCode == 'MHE' || dCode == 'MMStats' || dCode == 'BD-MBA' || dCode == 'PhD-Pub' || dCode == 'MHRM' || dCode == 'MSCPPB' || dCode == 'MCom' || dCode == 'MEnv' || dCode == 'MSTAT' || dCode == 'MIT' || dCode == 'MBS' || dCode == 'MPF' ||
				dCode == 'MBus' || dCode == 'MDA' || dCode == 'MBA' || dCode == 'DBA' || dCode == 'PGDM' || dCode == 'MBSC' || dCode == 'PGDM' ||
				dCode == 'PGDIT'|| dCode == 'JL' || dCode == 'MBCBT' || dCode == 'MBM' || dCode == 'PGDKY' || dCode == 'PGDMAAI' || dCode == 'PGDPN' || dCode == 'MCPPB') {
				if (dCode == 'BD-MBA') {
					dCode = "BD/MBA";
				}
				if (dCode == 'PhD-Pub') {
					dCode = "CM/PhD-Pub";
				}

				if (dCode == 'JL') {
					dCode = "PGD/JL";
				}
				// if (dCode == 'MBCBT') {
				// 	dCode = "MA/BCBT";
				// }
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
				console.log(dCode);
				console.log(dCode.substring(0, 3));
				if (dCode.substring(0, 3).toUpperCase() == "MSC") {
					newDegreeCode = dCode.substring(3, 8);
				}
				if (dCode == "ANCH" || dCode == "BCBT" || dCode == "CS" || dCode == "Env" || dCode == "STAT") {
					newDegreeCode = dCode;
				}

				if (dCode == "PGDAM") {
					newDegreeCode = "AM";
				}

				if (dCode == "PGDFN") {
					newDegreeCode = "FN";
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
					console.log(dCode)
					if (dCode == "IT" && pt == "PGD") {
						document.getElementById('studentNo' + lastChar).value = 'FGS/' + pt + '/' + dCode + '/' + yr + '/' + ans;
					} else {
						document.getElementById('studentNo' + lastChar).value = 'FGS/' + pt + '/' + dCode + '/' + yr + '/' + ans + 'E';
					}
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

function refresshStudentList1() {

	applicationNoLength = 0;
	countviewList = 0;

}
//------------------------------------------------------MAIN FUNCTION END---------------------------	

//------------------------------------------------------ADD ROW COLOUR FUNCTION START---------------------------
function AddRowColor1(x, _this) {

	if (count == 1) {
		count = 0;
		x.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';

	}
	else {
		count++;
		x.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
	}

}
//------------------------------------------------------ADD ROW COLOUR FUNCTION END---------------------------

//------------------------------------------------------UPDATE SELECTED FUNCTION START---------------------------	
function formApplicantListsendForm1(frm) {

	var doc, dataStr;

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}



	if (frm == 'updateApplicantList') {

		doc = document.maintainformApplicantList;
		dataStr += "&interface=" + frm;
		var newStr = "";

		for (var i = 0; i < applicationNoLength; i++) {
			let checkbox = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelected' + i + '"]').prop('checked');
			let checkboxE = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelectedE' + i + '"]').prop('checked');
			let checkboxP = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelectedP' + i + '"]').prop('checked');
			let checkboxPe = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelectedPe' + i + '"]').prop('checked');
			let checkboxS = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelectedS' + i + '"]').prop('checked');

			if (checkbox == true) {
				if (checkboxE == true || checkboxP == true || dcheckboxPe == true || checkboxS == true) {

					newStr = "&universityCode=" + universityCodeArr[i] + "&facultyCode=" + facultyCodeArr[i] + "&programmeTypeCode=" + programmeTypeCodeArr[i] + "&degreeCode=" + degreeCodeArr[i] + "&studentNIC=" + studentNICArr[i] + "&applicationNo=" + applicationNoArr[i];
					if (checkboxE == true && checkboxP == true) {
						newStr += "&selectionCategory=" + "P,E";
					}
					else if (checkboxE == true) {
						newStr += "&selectionCategory=" + "E";
					}
					else if (checkboxP == true) {
						newStr += "&selectionCategory=" + "P";
					} else if (checkboxPe == true) {
						newStr += "&selectionCategory=" + "Pe";
					}
					else if (checkboxS == true) {
						newStr += "&selectionCategory=" + "S";
					}
					newStr += "&selected=" + "YES";


					if (checkboxE == true) {
						newStr += "&selectedFromGraduate=" + "1";
					}
					if (checkboxP == true) {
						newStr += "&selectedFromProfessional=" + "1";
					}
					if (checkboxPe == true) {
						newStr += "&selectedFromPendingQulification=" + "1";
					}
					if (checkboxS == true) {
						newStr += "&selectedFromSpecialApprove=" + "1";
					}

					newStr += "&bosNumber=" + bosNumber;
					newStr += "&listNumber=" + listNumber;
					newStr += "&bosDate=" + bosDate;

					//newStr += "&notes="+TempBulkNote;
					ApplicantData[i] = dataStr + newStr;
				}
				else {
					alert("Select atleast one register qualification");
				}
			}





		}
		//-----------------------------------------------------add Bulk Note--------------------------------
		var checkNotes = 0;
		for (var i = 0; i < applicationNoLength; i++) {
			let checkbox = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelected' + i + '"]').prop('checked');
			if (checkbox == true) {
				let notesValue = $(ApplicantSelectionDataTable.row(i).node()).find('textarea[id="notes' + i + '"]').val();
				if (notesValue != " ") {
					checkNotes++;
				}

			}

		}

		if (BulkNote != " " || checkNotes != 0) {
			newStr1 = "action=add";
			newStr1 += "&interface=" + "addBulkNotes";
			for (var i = 0; i < applicationNoLength; i++) {
				let checkbox = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelected' + i + '"]').prop('checked');
				if (checkbox == true) {
					currentdate = new Date();
					datetime = + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/"
						+ currentdate.getFullYear() + "/"
						+ currentdate.getHours() + "/"
						+ currentdate.getMinutes() + "/"
						+ currentdate.getSeconds();

					let notesValue = $(ApplicantSelectionDataTable.row(i).node()).find('textarea[id="notes' + i + '"]').val();
					if (notesValue != " " && TempBulkNote != undefined) {
						newStr1 += "&messageId=" + datetime;
						newStr1 += "&referenceNo=" + applicationNoArr[i];
						newStr1 += "&userId=" + TempUser;
						newStr1 += "&message=" + TempBulkNote + "/" + notesValue;
					}
					else if (notesValue != " " && TempBulkNote == undefined) {
						newStr1 += "&messageId=" + datetime;
						newStr1 += "&referenceNo=" + applicationNoArr[i];
						newStr1 += "&userId=" + TempUser;
						newStr1 += "&message=" + notesValue;
					}
					else if (TempBulkNote != undefined) {
						newStr1 += "&messageId=" + datetime;
						newStr1 += "&referenceNo=" + applicationNoArr[i];
						newStr1 += "&userId=" + TempUser;
						newStr1 += "&message=" + TempBulkNote;
					}



					BulkNoteArr[i] = newStr1;
				}

			}
		}
		for (var j = 0; j < applicationNoLength; j++) {
			let studentNoElement = $(ApplicantSelectionDataTable.row(j).node()).find('input[type="text"][id="studentNo' + j + '"]');
			if (studentNoElement.length) {
				let studentNo = studentNoElement.length ? studentNoElement.val() : null;
				if (ApplicantData[j] != "" && ApplicantData[j] != undefined && studentNo != "") {
					isrHandle.getDataFromDB2(eval("clientController"), "serverController.php", ApplicantData[j]);
				}
			}
		}

	}






	return 0;

}
//------------------------------------------------------UPDATE SELECTED FUNCTION END---------------------------

//------------------------------------------------------SEND BULK NOTE FUNCTION START---------------------------	
function formBulkNotesendForm1(frm) {
	//alert(BulkNoteArr.length)
	for (var i = 0; i < applicationNoLength; i++) {
		//alert( BulkNoteArr[i]);
		if (BulkNoteArr[i] != undefined) {
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", BulkNoteArr[i]);
		}
	}
	return 0;

}
//--------------------------------------------------------SEND BULK NOTE FUNCTION END------------------------

//------------------------------------------------------------------DELETE APPLICATION FUNCTION START-------------------
function formDeleteApplicationsendFormApplicantSelection(frm) {

	var doc, dataStr;

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}
	if (confirm("Confirm Delete!") == true) {
		if (frm == 'deleteApplicationForm') {
			doc = document.maintainformApplicantList;
			dataStr += "&interface=" + frm;
			var newStr = "";

			for (var i = 0; i < applicationNoLength; i++) {
				let checkboxElement = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="checkbox"][id="checkSelected' + i + '"]');
				let studentNoElement = $(ApplicantSelectionDataTable.row(i).node()).find('input[type="text"][id="studentNo' + i + '"]');
				if (checkboxElement.length && studentNoElement.length) {
					let isChecked = checkboxElement.prop('checked');
					let studentNo = studentNoElement.length ? studentNoElement.val() : null;
					if (isChecked == true && studentNo != "" && studentNo != null) {
						dataRep["ApplicationNo"] = applicationNoArr[i];
						newStr = "&applicationNo=" + applicationNoArr[i];
						ApplicantData[i] = dataStr + newStr;
					}
				}
			}

			for (var j = 0; j < applicationNoLength; j++) {
				if (ApplicantData[j] != "" && ApplicantData[j] != undefined) {
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", ApplicantData[j]);
				}
			}

		}
	} else {

	}

	return 0;

}
//----------------------------------------------------------DELETE APPLICATION FUNCTION END--------------------------

//----------------------------------------------------------CHACK DELETE OR SAVE FUNCTION START--------------------------
function checkdeleteorsaveapplication1() {
	checkdeleteorsave = 'deletefunction';
}
//----------------------------------------------------------CHACK DELETE OR SAVE FUNCTION END--------------------------


//-------------------------------------------------------------------------VIEW LIST FUNCTION START--------------------	


function filterList1() {
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		// alert("Please Select a value from the select Box(s)");
	} else {
		dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
		dataRep["selectedMedium"] = md;
		console.log(dataRep["selectedMedium"]);
		sendForm("data4ApplicantSelection");
	}
}

//-------------------------------------------------------------------------VIEW LIST FUNCTION END--------------------		

//-------------------------------------------------------------------------GENERATE NOTES FUNCTION START-------------	
function generateNotes1(nID) {

	var NoteID = nID.id;
	NoteID = NoteID.substr(NoteID.indexOf("notesBttn") + 9);

	document.getElementById('notesDiv' + NoteID).style.display = 'block';
	if (document.getElementById('notesBttn' + NoteID).value == '-') {

		document.getElementById('notesDiv' + NoteID).style.display = 'none';

	}
	var val = document.getElementById('notesBttn' + NoteID)
	if (val.value == "+") { val.value = "-"; }
	else { val.value = "+"; }
}
//-------------------------------------------------------------------------GENERATE NOTES FUNCTION END-------------	

//-------------------------------------------------------------------------GENERATE BULK NOTE FUNCTION START-------	
function generateBulkNote1() {
	if (TempBulkNote == undefined) {
		BulkNote = prompt("Please enter Note", "");
		TempBulkNote = BulkNote;

	}
	else {
		BulkNote = prompt("Please enter Note", TempBulkNote);
		if (BulkNote != null) {
			TempBulkNote = BulkNote;
		}

	}


}
//-------------------------------------------------------------------------GENERATE BULK NOTE FUNCTION END-------	

function loadProfile1(app) {

	returnStudentProfile();
	var adID = app.id;
	var lastChar = adID.substr(adID.indexOf("Namebtn") + 7);
	dataRep["applicationNo"] = document.getElementById('applicationNo3' + lastChar).value;
	dataRep['searchType'] = 'applicantSearch';
	sendForm('data4DisplayApplicatProfile');
	searchApplicantProfile();
	document.getElementById('applicationNo').value = dataRep["applicationNo"];




}

function sendMail1() {
	var link = "mailto:me@example.com" +
		"?cc=CCaddress@example.com" +
		"&subject=" + escape("This is subject") +
		"&body=" + escape("This is body");
	window.location.href = link;
}