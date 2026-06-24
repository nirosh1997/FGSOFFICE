dataRep['examDateYYYY'] = dataRep['examDateMM'] = dataRep['examDateDD'] = "";
dataRep['examTimeHHFrom'] = dataRep['examTimeHHTo'] = dataRep['examTimeMMTo'] = dataRep['examTimeMMFrom'] = currentTime = "";
var repsemcount1 = repsemcount2 = repsemcount3 = repsemcount4 = repsemcount0 = 0;

currentdate = new Date();
var year = currentdate.getFullYear();
var month = (currentdate.getMonth() + 1);
var date = currentdate.getDate();
var hours = currentdate.getHours();
var min = currentdate.getMinutes();
var secnds = currentdate.getSeconds();
dataRep['examTimeHHFrom'] = hours;
dataRep['examTimeMMFrom'] = min;
dataRep['examTimeHHTo'] = hours;
dataRep['examTimeMMTo'] = min;


currentTime = hours + ":" + min + ":" + secnds;

dataRep['paperCode'] = "";

dataRep["substudentno"] = dataRep["substudentno"] = "";


dataRep["subjectTitle"] = dataRep["medium"] = "";







var studentNameList = studentNoList = studentNICList = "";
var examAdmissionFormDTable;
function initializedPaperCountFormDataTable() {
	var buttons = [];
	var d = new Date();
	var dYear = 0;
	var dYear = d.getFullYear();

	var date = d.getUTCDate();
	var mm = d.getUTCMonth();
	var yr = d.getUTCFullYear();
	var mn = ("0" + (mm + 1)).slice(-2);
	var currentdate = yr + "/" + mn + "/" + date;

	let examYear = dYear;
	let examMonth = "September";

	buttons.push({
		text: 'Paper Count',
		className: 'btn btn-primary',
		action: function (e, dt, node, config) {
			let studnetNo = [];
			let studnetName = [];
			let studnetAddress = [];
			let havest = false;
			examAdmissionFormDTable.rows().every(function (index) {
				let rowData = this.data();
				let checkbox = $(this.node()).find('input[type="checkbox"]');
				let isChecked = checkbox.prop('checked');
				if (isChecked) {
					studnetNo.push(rowData[3]);
					studnetName.push(rowData[2]);
					studnetAddress.push(rowData[5]);
					havest = true;
				}
			});

			if (havest) {
				var postData = {
					action: "getApplyedSubjectSelectedStudentGetPaperCount",
					studentNo: studnetNo,
					degreeCode: selectedDegreeCode,
					achademicYear: selectedAcademicYear,
					semester: selectedAppSemester,
					attempt: selectedAttempt,
					attempttime: selectedAttemptTime,
					authcode: authcode,
					username: dataRep['userId'],
				};

				$.ajax({
					type: 'POST',
					url: 'rules/admission.php',
					data: postData,
					dataType: 'json',
					success: function (response2) {
						let addsDiv = "";
						addsDiv += '<table border="0" width="100%" >';
						addsDiv += "<tr>";
						addsDiv += "<th colspan='5' style='font-size: 18px; font-family: Times New Roman; text-align: center; '><b>Faculty of Graduate Studies</b> - University of Kelaniya</th>";
						addsDiv += "</tr>";
						addsDiv += "<tr>";
						addsDiv += "<th colspan='5' style='font-size: 12px; font-family: Times New Roman; text-align: center; '>" + selectedDegreeName + ' - ' + selectedAcademicYear + "</th>";
						addsDiv += "</tr>";

						addsDiv += "<tr>";
						addsDiv += "<th colspan='5' style='font-size: 12px; font-family: Times New Roman; text-align: center; '>";
						if (selectedAppSemester == "1") {
							addsDiv += 'First Semester Examination';
						}
						if (selectedAppSemester == "2") {
							addsDiv += 'Second Semester Examination';
						}

						if (selectedAppSemester == "3") {
							addsDiv += 'Third Semester Examination';
						}
						if (selectedAppSemester == "4") {
							addsDiv += 'Fourth Semester Examination';
						}
						if (selectedAppSemester == "0") {
							addsDiv += 'End Semester Examination';
						}
						addsDiv += "</th>";
						addsDiv += "</tr>";

						addsDiv += "<tr>";
						addsDiv += "<th colspan='5' style='font-size: 12px; font-family: Times New Roman; text-align: center; '>Paper Count</th>";
						addsDiv += "</tr>";


						addsDiv += '<table border="1" width="100%" style="border-collapse: collapse;">';
						addsDiv += "<tr>";
						addsDiv += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:50px'>No</th>";
						addsDiv += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:450px'>Student Name</th>";
						addsDiv += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:250px'>Student No</th>";
						addsDiv += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:200px'>Applied Subjects</th>";
						addsDiv += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:50px'>Paper Count</th>";
						addsDiv += "</tr>";

						let count = 0;
						$.each(response2, function (selectedStNoIndex, selectedStNo) {
							count++;
							addsDiv += "<tr>";
							addsDiv += '<td  style="word-wrap:break-word;width:20px;font-size:12px;font-family:Times New Roman;text-align: center;">' + count + '</td>';
							addsDiv += '<td  style="word-wrap:break-word;width:450px;font-size:12px;font-family:Times New Roman;">' + selectedStNo.studentName + '</td>';

							addsDiv += '<td  style="word-wrap:break-word;width:250px;font-size:12px;font-family:Times New Roman;text-align: center;">' + selectedStNo.studentNo + '</td>';
							addsDiv += '<td  style="word-wrap:break-word;width:50px;font-size:12px;font-family:Times New Roman;">' + selectedStNo.subjectCode + '</td>';
							addsDiv += '<td  style="word-wrap:break-word;width:50px;font-size:12px;font-family:Times New Roman;">' + selectedStNo.paper_count + '</td>';
							addsDiv += "</tr>";
						});

						addsDiv += "</table>";
						addsDiv += "</div>";


						console.log(addsDiv);
						var exportFilename = "Student Count Report.xls";
						var csvData = new Blob([addsDiv], { type: 'text/csv;charset=utf-8;' });
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvData, exportFilename);
						} else {
							var link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvData);
							link.setAttribute('download', exportFilename);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}


					},
					error: function (error) {
						console.log(error)
					}
				});
			} else {
				Swal.fire({
					title: "Warning!",
					text: "Please select at least one student.",
					icon: "warning"
				});
			}

		}
	});

	buttons.push({
		text: 'Paper Count Subject-wise',
		className: 'btn btn-primary',
		action: function (e, dt, node, config) {
			let studnetNo = [];
			let studnetName = [];
			let studnetAddress = [];
			let havest = false;
			examAdmissionFormDTable.rows().every(function (index) {
				let rowData = this.data();
				let checkbox = $(this.node()).find('input[type="checkbox"]');
				let isChecked = checkbox.prop('checked');
				if (isChecked) {
					studnetNo.push(rowData[3]);
					studnetName.push(rowData[2]);
					studnetAddress.push(rowData[5]);
					havest = true;
				}
			});

			if (havest) {
				var postData = {
					action: "getApplyedSubjectSelectedStudentGetPaperCountSunjectWise",
					studentNo: studnetNo,
					degreeCode: selectedDegreeCode,
					achademicYear: selectedAcademicYear,
					semester: selectedAppSemester,
					attempt: selectedAttempt,
					attempttime: selectedAttemptTime,
					authcode: authcode,
					username: dataRep['userId'],
				};

				$.ajax({
					type: 'POST',
					url: 'rules/admission.php',
					data: postData,
					dataType: 'json',
					success: function (response2) {

						let addsDiv = "";
						addsDiv += '<table border="0" width="100%" >';
						addsDiv += "<tr>";
						addsDiv += "<th colspan='3' style='font-size: 18px; font-family: Times New Roman; text-align: center; '><b>Faculty of Graduate Studies</b> - University of Kelaniya</th>";
						addsDiv += "</tr>";
						addsDiv += "<tr>";
						addsDiv += "<th colspan='3' style='font-size: 12px; font-family: Times New Roman; text-align: center; '>" + selectedDegreeName + ' - ' + selectedAcademicYear + "</th>";
						addsDiv += "</tr>";

						addsDiv += "<tr>";
						addsDiv += "<th colspan='3' style='font-size: 12px; font-family: Times New Roman; text-align: center; '>";
						if (selectedAppSemester == "1") {
							addsDiv += 'First Semester Examination';
						}
						if (selectedAppSemester == "2") {
							addsDiv += 'Second Semester Examination';
						}

						if (selectedAppSemester == "3") {
							addsDiv += 'Third Semester Examination';
						}
						if (selectedAppSemester == "4") {
							addsDiv += 'Fourth Semester Examination';
						}
						if (selectedAppSemester == "0") {
							addsDiv += 'End Semester Examination';
						}
						addsDiv += "</th>";
						addsDiv += "</tr>";

						addsDiv += "<tr>";
						addsDiv += "<th colspan='3' style='font-size: 12px; font-family: Times New Roman; text-align: center; '>Paper Count</th>";
						addsDiv += "</tr>";


						addsDiv += '<table border="1" width="100%" style="border-collapse: collapse;">';
						addsDiv += "<tr>";
						addsDiv += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:450px'>Subject Name</th>";
						addsDiv += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:250px'>Subject Code</th>";
						addsDiv += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:50px'>Paper Count</th>";
						addsDiv += "</tr>";

						let count = 0;
						$.each(response2, function (subjectsIndex, subject) {
							count++;
							addsDiv += "<tr>";
							// addsDiv += '<td  style="word-wrap:break-word;width:20px;font-size:12px;font-family:Times New Roman;text-align: center;">' + count + '</td>';
							addsDiv += '<td  style="word-wrap:break-word;width:450px;font-size:12px;font-family:Times New Roman;">' + subject.subjectTitle + '</td>';
							addsDiv += '<td  style="word-wrap:break-word;width:250px;font-size:12px;font-family:Times New Roman;text-align: center;">' + subject.subjectCode + '</td>';
							addsDiv += '<td  style="word-wrap:break-word;width:50px;font-size:12px;font-family:Times New Roman;">' + subject.pcount + '</td>';
							addsDiv += "</tr>";
						});

						addsDiv += "</table>";
						addsDiv += "</div>";


						console.log(addsDiv);
						var exportFilename = "Student Count Report.xls";
						var csvData = new Blob([addsDiv], { type: 'text/csv;charset=utf-8;' });
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvData, exportFilename);
						} else {
							var link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvData);
							link.setAttribute('download', exportFilename);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}


					},
					error: function (error) {
						console.log(error)
					}
				});
			} else {
				Swal.fire({
					title: "Warning!",
					text: "Please select at least one student.",
					icon: "warning"
				});
			}

		}
	});

	if (!$.fn.DataTable.isDataTable('#studentAddmissionCardTabel'))
		examAdmissionFormDTable = $('#studentAddmissionCardTabel').DataTable({
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
			],
			select: {
				style: 'multi',
				selector: 'td:first-child',
			},
			order: [1, 'asc'],
		});


	examAdmissionFormDTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		var countSelectedRows = examAdmissionFormDTable.rows({ selected: true }).count();
		var countItems = examAdmissionFormDTable.rows().count();

		if (countItems > 0) {
			if (countSelectedRows == countItems) {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
			} else {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
			}
		}

		if (e.type === 'select') {
			$('.selectall-checkbox input[type="checkbox"]', examAdmissionFormDTable.rows({ selected: true }).nodes()).prop('checked', true);
		} else {
			$('.selectall-checkbox input[type="checkbox"]', examAdmissionFormDTable.rows({ selected: false }).nodes()).prop('checked', false);
		}
	});

	// When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	examAdmissionFormDTable.on('click', 'thead .selectall-checkbox', function () {
		$('input[type="checkbox"]', this).trigger('click');
	});


	// When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	examAdmissionFormDTable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
		if (this.checked) {
			examAdmissionFormDTable.rows().select();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
				}
			}
		} else {
			examAdmissionFormDTable.rows().deselect();
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


function formPaperCountForm(dsp) {
	if (!dataRep['selectedAttemptTime']) {
		dataRep['selectedAttemptTime'] = 1;
	}
	title1 = "Paper Count";
	str = "";

	if (dsp == "formPaperCountForm") {
		keyDisabled = "Disabled";

		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title1 + '</h4>';
		str += '</li></ul></div></nav>';


		str += "<div id='updateApplicantList'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="form-group row">';

		str += '<div class="col-xl-6 col-lg-6">';
		str += '<div class="col-xl-4 col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		str += '<div class="col-xl-8  col-sm-9" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="degreeWiseAdmision" name="degreeWiseAdmision" onchange="dataRep[this.id]=this.value;">';

		str += '</select>';
		str += '</div></div>';


		let date = new Date().getFullYear();


		str += '<div class="col-xl-6 col-lg-6">'
		str += '<div class="col-xl-5 col-lg-5 col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-xl-7 col-lg-7 col-sm-4" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="academicYear" onchange="dataRep[this.id]=this.value;">';
		for (i = 2014; i <= date + 1; i++) {
			if (i == date + 1) {
				str += "<option " + ((dataRep["academicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["academicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div>';
		str += '</div>';

		str += '<div class="col-xl-6 col-lg-6">'
		str += '<div class="col-xl-4 col-lg-3 col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Semester </label></div>';
		str += '<div class="col-xl-8 col-lg-9 col-sm-9" style="display: inline-flex;">';
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem1' class='form-check-input' name='appSemester' value='1' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem2' class='form-check-input' name='appSemester' value='2' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem3' class='form-check-input' name='appSemester' value='3' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem4' class='form-check-input' name='appSemester' value='4' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem0' class='form-check-input' name='appSemester' value='0' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '0') ? "checked" : "") + ">End of Year<i class='input-helper'></i></label></div></div>";

		str += '</div>';
		str += '</div>';
		str += '</div>';


		str += '<div class="form-group row"><div class="col-xl-6 col-lg-6">'
		str += '<div class="col-xl-4 col-lg-3 col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Attempt </label></div>';
		str += '<div class="col-xl-8 col-lg-9 col-sm-9" style="display: inline-flex;">';
		str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='attemptTimeChange(1);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='attemptTimeChange(2);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-5'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='attemptTimeChange(3);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-Repeat<i class='input-helper'></i></label></div></div>";
		// str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="RegStudentList1();DataTableForSelectedApplicantTable();">View List</button></div>';

		str += '</div>';
		str += '</div>';

		str += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 " id="attmeptTime" style="display:' + ((dataRep["selectedAttempt"] == "RR") ? "" : "none") + '">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Attempt Time</label></div>';
		str += '<div class="col-xl-9 col-lg-8 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedAttemptTime" onchange="dataRep[this.id]=this.value;">';
		str += '<option value="1" ' + ((dataRep["selectedAttemptTime"] == "1") ? "selected" : "") + '>1</option>';
		str += '<option value="2" ' + ((dataRep["selectedAttemptTime"] == "2") ? "selected" : "") + '>2</option>';
		str += '<option value="3" ' + ((dataRep["selectedAttemptTime"] == "3") ? "selected" : "") + '>3</option>';
		str += '<option value="4" ' + ((dataRep["selectedAttemptTime"] == "4") ? "selected" : "") + '>4</option>';
		str += '<option value="5" ' + ((dataRep["selectedAttemptTime"] == "5") ? "selected" : "") + '>5</option>';
		str += '<option value="6" ' + ((dataRep["selectedAttemptTime"] == "6") ? "selected" : "") + '>6</option>';
		str += '<option value="7" ' + ((dataRep["selectedAttemptTime"] == "7") ? "selected" : "") + '>7</option>';
		str += '<option value="8" ' + ((dataRep["selectedAttemptTime"] == "8") ? "selected" : "") + '>8</option>';
		str += '<option value="9" ' + ((dataRep["selectedAttemptTime"] == "9") ? "selected" : "") + '>9</option>';
		str += '<option value="10" ' + ((dataRep["selectedAttemptTime"] == "10") ? "selected" : "") + '>10</option>';
		str += '</select>';
		str += '</div></div>';
		str += '</div>';

		str += '<div class="form-group row">';

		str += '<div class="col-xl-12 col-lg-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="viewPaperCountlist();">View List</button></div>';



		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';



		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="studentAddmissionCardTabel">';
		str += '<thead><tr>';
		str += '<th width="3%"><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		str += '<th width="3%">No</th>';
		str += '<th width="25%">Student Name</th>';
		str += '<th width="15%">Student No</th>';
		str += '<th width="10%">NIC/Passport</th>';
		str += '<th>Address</th>';
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




var selectedDegreeCode;
var selectedDegreeName;
var selectedAcademicYear;
var selectedAttemptTime;
var selectedAppSemester;
var selectedAttempt;
function viewPaperCountlist() {

	if (dataRep['selectedAttempt'] == "F" || dataRep['selectedAttempt'] == "R" || dataRep['selectedAttempt'] == "RR") {
		examAdmissionFormDTable.clear();
		var postData = {
			action: "getStudentForAdmission",
			degreeCode: $('#degreeWiseAdmision').val(),
			achademicYear: $('#academicYear').val(),
			semester: dataRep['appSemester'],
			attempt: dataRep['selectedAttempt'],
			attempttime: dataRep['selectedAttemptTime'],
			authcode: authcode,
			username: dataRep['userId'],
		};

		selectedDegreeCode = $('#degreeWiseAdmision').val();
		selectedDegreeName = $("#degreeWiseAdmision option:selected").text();
		selectedAcademicYear = $('#academicYear').val();
		selectedAppSemester = dataRep['appSemester'];
		selectedAttempt = dataRep['selectedAttempt'];
		selectedAttemptTime = dataRep['selectedAttemptTime'];

		$.ajax({
			type: 'POST',
			url: 'rules/admission.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				if (response && response.length > 0 && response[0].status === 200) {
					$.each(response, function (index, student) {
						examAdmissionFormDTable.row.add([
							'<input type="checkbox" id="checkSelected' + index + '" name="checkSelected' + index + '" class="form-check-input" style="margin: 0;position: relative;">',  // Checkbox column
							index + 1,
							student.studentName,
							student.studentNo,
							student.studentNIC,
							student.studentAddress
						]).draw(false);
					});
					examAdmissionFormDTable.draw();
				} else {
					examAdmissionFormDTable.clear();
					examAdmissionFormDTable.draw();
					Swal.fire({
						title: "Error!",
						text: "No student available",
						icon: "error"
					});
				}
			},
			error: function (error) {
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








