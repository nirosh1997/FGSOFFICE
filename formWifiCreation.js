dataRep["searchValue"] = "";
dataRep["selectedDegreeName"] = "";
dataRep["achedamicYear"] = "";
dataRep["filteredBy"] = "1";
dataRep["dateTo"] = "";
dataRep["dateFrom"] = "";


function selectprintlist() {


	var newselectStr = "";

	newselectStr += '<div class="modal fade " id="exampleModalLongWif" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongWifTitle" aria-hidden="true" >';
	newselectStr += '<div class="modal-dialog modal-md modal-dialog-centered" role="document">';
	newselectStr += '<div class="modal-content">';
	newselectStr += '<div class="modal-header">';
	newselectStr += '<h5 class="modal-title" id="exampleModalLongWifTitle">Download Options</h5>';
	newselectStr += '<button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="closeModel()">';
	newselectStr += '<span aria-hidden="true">&times;</span>';
	newselectStr += '</button>';
	newselectStr += '</div>';
	newselectStr += '<div class="modal-body">';
	// newselectStr += '<input type="button" id="select-all" style="margin-top:1px;float:left" class="btnB" value="Mark All" onclick=SelectAll();>';
	// newselectStr += '<input type="button" id="select-non" style="margin-top:1px;float:left" class="btnB" value="Unmark All" onclick=UnselectAll();>';
	// newselectStr += "<br>";
	//----------------------------------------------------- start implementing check box set -----------------------------------------

	newselectStr += '<table class="table table-borderless">';
	newselectStr += "<thead>";
	newselectStr += "<tr><td><input type='checkbox' id='chkWithOutFormatError' name='chkWithOutFormatError' value='1' checked></td>";
	newselectStr += "<td>Without format errors</td></tr>";
	newselectStr += "<tr><td><input type='checkbox' id='chkWithOutNotPayed' name='chkWithOutNotPayed' value='2' checked></td>";
	newselectStr += "<td>Payment complete student</td></tr>";
	newselectStr += "<tr><td><input type='checkbox' id='chkOnlyError' name='chkOnlyError' value='3'  onchange=downloadTypeChange(this.value) ></td>";
	newselectStr += "<td>Format errors</td></tr>";
	newselectStr += "<tr><td><input type='checkbox' id='chkOnlyErrorWithPayed' name='chkOnlyErrorWithPayed' value='5'  onchange=downloadTypeChange(this.value) ></td>";
	newselectStr += "<td>Format errors student (payment completed)</td></tr>";
	newselectStr += "<tr><td><input type='checkbox' id='chkOnlyNotPayed' name='chkOnlyNotPayed' value='4'  onchange=downloadTypeChange(this.value) ></td>";
	newselectStr += "<td>Payment incomplete students</td></tr>";
	newselectStr += "</thead>";

	newselectStr += '</table>';




	newselectStr += '<div class="template-demo" style="text-align: right;">';
	newselectStr += '<button type="button" class="btn btn-primary btn-icon-text" onclick=downloadWifiStudentList();><i class="mdi mdi-download" ></i>Download List</button>';
	newselectStr += '</div>';
	// newselectStr += '<div class="modal-footer">';
	// newselectStr += '<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="closeModel()">Close</button>';
	// newselectStr += '</div>';
	newselectStr += '</div>';
	newselectStr += '</div>';
	newselectStr += '</div>';
	// -------------------------------- end the implementing check box set ------------------------------

	return newselectStr;
	// document.getElementById("View-List").disabled = true;
	// document.getElementById('list').style.display = "none";

}






function openModelWifi() {
	downloadOptionModel.show();
}

function DataTableForWIFIStudent() {
	downloadOptionModel = new bootstrap.Modal(document.getElementById('exampleModalLongWif'), {
		keyboard: false,
		backdrop: true
	})
	var buttons = [];
	var inputHTML = "";
	inputHTML += '<div class="row" style="padding: 0px 10px 0 0px;">';

	inputHTML += '<div class="col-sm-5">';
	inputHTML += '<input type="button" class="btn btn-primary flBtn"  value="Download" onclick="openModelWifi()">';
	inputHTML += '</div>';
	if (dataRep['userId'] == "dsilva" || dataRep['userId'] == "ipnla241" || dataRep['userId'] == "wimarshani") {
		inputHTML += '<div class="col-sm-7"><form id="formUploadWifiListServer">';
		inputHTML += '<div class="row"><div class="offset-sm-5 col-sm-5" style="padding: 0px;">';
		inputHTML += '<input type="file" name="fileWifiList" id="fileWifiList" accept=".csv" class="customUpload form-control form-control-sm fileChosser" style="padding: 0;border: 1px solid #ccc;display:inline-block;">';
		inputHTML += '</div>';
		inputHTML += '<div class="col-sm-2">';
		inputHTML += '<input type="button" id="ex_uploadReRep"  class="btn btn-primary" style="" value="Update Wifi List" onclick="updateWifiList()">';
		inputHTML += '</div></form>';
		inputHTML += '</div>';
	}




	inputHTML += '</div>';

	inputHTML += '</div>';

	if (!$.fn.DataTable.isDataTable('#studentWIFILIST'))
		var table = $('#studentWIFILIST').DataTable({
			dom: "<'row no-overflow'<'col-12 text-right setdtwidth' B>>" + // Search and buttons in a 1-line row
				"<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
				"<'row'<'col-12't>>" + // Table in a single line
				"<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
			buttons: buttons,
			columnDefs: [
				{
					targets: 0,
					searchable: false
				},
			],
			order: [0, 'asc'],
		});
	table.buttons().container().append(inputHTML);

}

function formWifiCreation(dsp) {
	str = "";

	title = "Wifi Account Creation";

	if (dsp == "formWifiCreation") {

		programName = "<option selected>Please scroll down to see the records</option>";
		programName += "<option value='all' " + ((dataRep["selectedDegreeName"] == "all") ? "selected" : "") + " >All</option>";
		for (j = 0; j < degreeCodeLength; j++) {
			if (degreeCodappeArr[j] != null) {
				if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
					programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
				}
			}
		}



		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';



		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		str += '<div class="form-group row mb-2"><div class="col-sm-6">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Student Identify : </label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += "<input type='text' class='form-control form-control-sm' placeholder='Enter Name/Email/Student Id/Mobile/NIC' id='search' name='search' value='" + dataRep["searchValue"] + "'>";
		str += '</div></div></div>';

		str += '<div class="form-group row mb-2"><div class="col-sm-6">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme : </label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="changeProgram(this.value)">';
		// str += programName;
		str += '</select>';
		str += '</div></div></div>';


		let date = new Date().getFullYear();
		str += "<div class='form-group row mb-2' id='achedamicYearDIV' style='display:" + ((dataRep["selectedDegreeName"] == "all") ? "none" : "block") + "'><div class='col-sm-6'>";
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Academic Year : </label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" value="achedamicYear">';
		for (i = 2014; i <= date + 1; i++) {
			if (i == date + 1) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div></div></div>';


		str += "<div class='form-group row mb-2' id='DateRangeDIV' style='display:" + ((dataRep["selectedDegreeName"] == "all") ? "none" : "none") + "'><div class='col-sm-6'>";
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Date : </label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';

		str += '<input type="date" class="form-control form-control-sm" id="dateTo" name="dateTo"  value="' + dataRep["dateTo"] + '">';
		str += '<label for="exampleInputUsername2" class="" style="padding: 8px 3rem;font-weight: 700;">To</label><input type="date" class="form-control form-control-sm" id="dateFrom" name="dateFrom" value="' + dataRep["dateFrom"] + '">';
		str += '</div></div></div>';

		str += "<div class='form-group row mb-2'><div class='col-sm-9'>";
		str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Filter by : </label></div>';
		str += '<div class="col-sm-10" style="display: inline-flex;">';

		str += "<div class='col-sm-1'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='filteredBy' class='form-check-input' name='filteredBy' value='0' onchange='dataRep[this.id]=this.value;' " + ((dataRep["filteredBy"] == '0') ? "checked" : "") + ">All<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='filteredBy' class='form-check-input' name='filteredBy' value='1' onchange='dataRep[this.id]=this.value;' " + ((dataRep["filteredBy"] == '1') ? "checked" : "") + ">WIFI - Required <i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='filteredBy' class='form-check-input' name='filteredBy' value='2' onchange='dataRep[this.id]=this.value;' " + ((dataRep["filteredBy"] == '2') ? "checked" : "") + ">WIFI - Already Created<i class='input-helper'></i></label></div></div>";

		str += '</div></div></div>';

		str += "<div class='form-group row mb-2'><div class='col-sm-6'>";
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r"></label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="WifiStudentList();">Search</button>';

		str += '</div></div></div>';



		str += '</div></div>';
		str += '</div></div>';


		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="studentWIFILIST">';
		str += '<thead><tr>';
		str += '<th>#</th>';
		str += '<th>Student Initials</th>';
		str += '<th>Student No</th>';
		str += '<th>NIC Number</th>';
		str += '<th>Mobile</th>';
		str += '<th>Email</th>';
		str += '<th>WIFI Name</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		if (studentNoLength > 0) {


			rcount = 0;
			$count = "";
			counttimes = 0;
			for (var i = 0; i < studentNoLength; i++) {
				if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

					var color = "#ffece6";
					if (studentContactMobileArr[i] == "" || studentContactEmailArr[i] == "") {
						color = "#ffff47";
					} else if (!payedResponseProgressArr[i] || payedResponseProgressArr[i] == null || payedResponseProgressArr[i] != 1) {
						color = "#90afe7";
					}

					str += "<tr style='background-Color:" + color + ";'>";


					var title = studentNameTitleArr[i].replace(/\./g, "").trim();
					var Name = "";
					var newName = studentNameArr[i].split(/\./g).reduce(function (acc, newName) {
						return acc.concat(newName.split(/\s+/g));
					}, []);
					for (var j = 0; j <= newName.length - 1; j++) {
						if (newName[j] != "") {
							if (newName[j].length == 1) {
								Name += newName[j] + ".";
							} else {
								Name += " " + newName[j];
							}
						}
					}

					var nic = studentNICArr[i].replace(/\s+/g, "").trim();
					if (nic.length == 9) {
						nic = nic + "V";
					}

					var mobileNumber = studentContactMobileArr[i].replace(/^0+/, "").trim();
					mobileNumber = mobileNumber.replace(/^94+/, "").trim();
					if (!isValidCountryCode(mobileNumber)) {
						if (mobileNumber != "") {
							mobileNumber = "94" + mobileNumber;
						}
					}

					counttimes = counttimes + 1;
					str += '<td>' + counttimes + '</td>';
					str += '<td>' + title + ". " + Name + '</td>';
					str += '<td>' + studentNoArr[i] + '</td>';
					str += '<td>' + nic + '</td>';
					str += '<td>' + mobileNumber + '</td>';
					str += '<td>' + studentContactEmailArr[i] + '</td>';
					str += '<td>' + wifiNameArr[i] + '</td>';
					str += '</tr>';

				}

			}

		}
		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += selectprintlist();

	}

	return str;
}

function changeProgram(program) {
	if (program == "all") {
		document.getElementById("DateRangeDIV").style.display = "block";
		document.getElementById("achedamicYearDIV").style.display = "none";
	} else {
		document.getElementById("DateRangeDIV").style.display = "none";
		document.getElementById("achedamicYearDIV").style.display = "block";
	}
}

function downloadTypeChange(downloadType) {

	if (downloadType == 3 || downloadType == 4 || downloadType == 5) {

		if (document.getElementById('chkOnlyError').checked || document.getElementById('chkOnlyNotPayed').checked || document.getElementById('chkOnlyErrorWithPayed').checked) {
			document.getElementById("chkWithOutFormatError").checked = false;
			document.getElementById("chkWithOutNotPayed").checked = false;
			document.getElementById("chkWithOutFormatError").disabled = true;
			document.getElementById("chkWithOutNotPayed").disabled = true;
		} else {
			document.getElementById("chkWithOutFormatError").disabled = false;
			document.getElementById("chkWithOutNotPayed").disabled = false;
			document.getElementById("chkWithOutFormatError").checked = true;
			document.getElementById("chkWithOutNotPayed").checked = true;
		}

		if (downloadType == 3) {
			if (document.getElementById('chkOnlyError').checked) {
				document.getElementById('chkOnlyNotPayed').checked = false;
				document.getElementById("chkOnlyNotPayed").disabled = true;
				document.getElementById('chkOnlyErrorWithPayed').checked = false;
				document.getElementById("chkOnlyErrorWithPayed").disabled = true;
			} else {
				document.getElementById("chkOnlyNotPayed").disabled = false;
				document.getElementById("chkOnlyErrorWithPayed").disabled = false;
			}
		}


		if (downloadType == 4) {
			if (document.getElementById('chkOnlyNotPayed').checked) {
				document.getElementById('chkOnlyError').checked = false;
				document.getElementById("chkOnlyError").disabled = true;
				document.getElementById('chkOnlyErrorWithPayed').checked = false;
				document.getElementById("chkOnlyErrorWithPayed").disabled = true;
			} else {
				document.getElementById("chkOnlyError").disabled = false;
				document.getElementById("chkOnlyErrorWithPayed").disabled = false;

			}
		}

		if (downloadType == 5) {
			if (document.getElementById('chkOnlyErrorWithPayed').checked) {
				document.getElementById('chkOnlyError').checked = false;
				document.getElementById("chkOnlyError").disabled = true;
				document.getElementById('chkOnlyNotPayed').checked = false;
				document.getElementById("chkOnlyNotPayed").disabled = true;
			} else {
				document.getElementById("chkOnlyError").disabled = false;
				document.getElementById("chkOnlyNotPayed").disabled = false;

			}
		}



	} else {

	}

}



async function WifiStudentList() {
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select a value from the select Box(s)");
	} else {
		var ele = document.getElementsByName('filteredBy');
		for (i = 0; i < ele.length; i++) {
			if (ele[i].checked) {
				dataRep['filteredBy'] = ele[i].value;
			}
		}
		dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
		dataRep["searchValue"] = document.getElementById('search').value;
		dataRep["dateTo"] = document.getElementById('dateTo').value;
		dataRep["dateFrom"] = document.getElementById('dateFrom').value;
		sendForm("data4wifiCreation");
	}
}

function downloadWifiStudentList() {

	if (dataRep['filteredBy'] == 2) {
		var data = [
			['No', 'Student Initials', 'Student No', 'NIC Number', 'Mobile', 'Email', 'WIFI Name']
		];
	} else {
		var data = [
			['No', 'Student Initials', 'Student No', 'NIC Number', 'Mobile', 'Email', 'Start Date', 'End Date']
		];
	}

	var rcount = 0;
	for (var i = 0; i < studentNoLength; i++) {
		if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {



			document.getElementById('chkOnlyError').checked
			document.getElementById('chkOnlyNotPayed').checked

			document.getElementById('chkWithOutFormatError').checked
			document.getElementById('chkWithOutNotPayed').checked

			$show = false;


			if (document.getElementById('chkOnlyError').checked) {
				if (studentContactMobileArr[i] == "" || studentContactEmailArr[i] == "") {
					$show = true;
				}
			} else if (document.getElementById('chkOnlyNotPayed').checked) {
				if (!payedResponseProgressArr[i] || payedResponseProgressArr[i] == null || payedResponseProgressArr[i] != 1) {
					$show = true;
				}
			} else if (document.getElementById('chkOnlyErrorWithPayed').checked) {
				if (payedResponseProgressArr[i] && payedResponseProgressArr[i] != null && payedResponseProgressArr[i] == 1) {
					if (studentContactMobileArr[i] == "" || studentContactEmailArr[i] == "") {
						$show = true;
					}
				}
			}
			else {
				if (document.getElementById('chkWithOutFormatError').checked && !document.getElementById('chkWithOutNotPayed').checked) {
					if (studentContactMobileArr[i] != "" && studentContactEmailArr[i] != "") {
						$show = true;
					}
				} else if (document.getElementById('chkWithOutNotPayed').checked && !document.getElementById('chkWithOutFormatError').checked) {
					if (payedResponseProgressArr[i] && payedResponseProgressArr[i] != null && payedResponseProgressArr[i] == 1) {
						$show = true;
					}
				} else if (document.getElementById('chkWithOutNotPayed').checked && document.getElementById('chkWithOutFormatError').checked) {
					if (studentContactMobileArr[i] != "" && studentContactEmailArr[i] != "" && payedResponseProgressArr[i] && payedResponseProgressArr[i] != null && payedResponseProgressArr[i] == 1) {
						$show = true;
					}
				}

			}

			if ($show) {
				rcount++;
				var newRow = [];
				newRow.push(rcount);

				var title = studentNameTitleArr[i].replace(/\./g, "").trim();
				var Name = "";
				var newName = studentNameArr[i].split(/\./g).reduce(function (acc, newName) {
					return acc.concat(newName.split(/\s+/g));
				}, []);
				for (var j = 0; j <= newName.length - 1; j++) {
					if (newName[j] != "") {
						if (newName[j].length == 1) {
							Name += newName[j] + ".";
						} else {
							Name += " " + newName[j];
						}
					}
				}

				var nic = studentNICArr[i].replace(/\s+/g, "").trim();
				if (nic.length == 9) {
					nic = nic + "V";
				}

				var mobileNumber = studentContactMobileArr[i].replace(/^0+/, "").trim();
				mobileNumber = mobileNumber.replace(/^94+/, "").trim();
				if (!isValidCountryCode(mobileNumber)) {
					if (mobileNumber != "") {
						mobileNumber = "94" + mobileNumber;
					}
				}


				newRow.push(title + ". " + Name);
				newRow.push(studentNoArr[i]);
				newRow.push(nic);
				newRow.push(mobileNumber);
				newRow.push(studentContactEmailArr[i]);

				if (dataRep['filteredBy'] == 2) {
					newRow.push(wifiNameArr[i]);
				} else {
					var regDate = formatDate(new Date(studentRegisteredDateArr[i]));
					newRow.push(regDate);

					var year = 3;
					if (studentDurationArr[i] == "1 Year") {
						year = 3;
					} else if (studentDurationArr[i] == "2 Year") {
						year = 4;
					} else if (studentDurationArr[i] == "3 Year") {
						year = 6;
					}

					var date = new Date(studentRegisteredDateArr[i]);
					newRow.push(addYear(date, year));
				}


				data.push(newRow)
			}
		}
	}


	// Convert data to CSV format
	// const csvContent = data.map(row => row.join(',')).join('\n');
	const csvContent = data.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

	// Create a Blob (binary large object) containing the CSV data
	const blob = new Blob([csvContent], { type: 'text/csv' });

	// Create a temporary hidden anchor element
	const a = document.createElement('a');
	a.style.display = 'none';

	// Set the Blob URL as the anchor's href
	a.href = window.URL.createObjectURL(blob);

	// Specify the filename for the downloaded file
	a.download = 'List of students for Wifi account creation.csv';

	// Append the anchor to the document body
	document.body.appendChild(a);

	// Programmatically trigger a click event on the anchor to initiate the download
	a.click();

	// Clean up by revoking the Blob URL and removing the anchor element
	window.URL.revokeObjectURL(a.href);
	document.body.removeChild(a);


}

function addYear(date, year) {
	date.setFullYear(date.getFullYear() + year);
	return formatDate(date);
}

function formatDate(date) {
	var year = date.toLocaleString("default", { year: "numeric" });
	var month = date.toLocaleString("default", { month: "2-digit" });
	var day = date.toLocaleString("default", { day: "2-digit" });

	var formattedDate = month + "/" + day + "/" + year;

	return formattedDate;
}


function cleanInitials(initials) {
	let newInitials = initials.toLocaleUpperCase();
	newInitials = newInitials.replace(/[^A-Z]/g, '');
	newInitials = newInitials.replace(/./g, '$&. ');
	return newInitials;
}


async function updateWifiList() {

	if (document.getElementById("fileWifiList").value == "") {
		alert("Please select a file to upload");
	} else if (!document.getElementById("fileWifiList").value.includes(".csv")) {
		alert("Please upload a .csv file");
	} else {

		// var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;
		// var Rerepstatus = 1;
		var form = document.getElementById("formUploadWifiListServer");
		var formData = new FormData(form);
		//formData.append("file",form);
		formData.append("action", "uploadWifiList");
		formData.append("interface", "data4wifiCreation");
		formData.append('authcode', authcode);
		formData.append('username', dataRep['userId']);
		// console.log(formData);
		// Assuming isrHandle.uploadCSV accepts a callback function when it's done
		await isrHandle.uploadCSV(eval("clientController"), "serverController.php", formData, function () {
			// sendForm('data4wifiCreation');

		});
	}
}

function isValidCountryCode(number) {
	const countryCodes = [
		{ code: "1", name: "United States, Canada" },
		{ code: "44", name: "United Kingdom" },
		{ code: "91", name: "India" },
		{ code: "81", name: "Japan" },
		{ code: "33", name: "France" },
		{ code: "49", name: "Germany" },
		{ code: "61", name: "Australia" },
		{ code: "86", name: "China" },
		{ code: "7", name: "Russia" },
		{ code: "20", name: "Egypt" },
		{ code: "55", name: "Brazil" },
		{ code: "52", name: "Mexico" },
		{ code: "39", name: "Italy" },
		{ code: "34", name: "Spain" },
		{ code: "65", name: "Singapore" },
		{ code: "82", name: "South Korea" },
		{ code: "971", name: "United Arab Emirates" },
		{ code: "966", name: "Saudi Arabia" },
		{ code: "971", name: "United Arab Emirates" },
		{ code: "965", name: "Kuwait" },
		{ code: "20", name: "Egypt" },
		{ code: "65", name: "Singapore" },
		{ code: "64", name: "New Zealand" },
		{ code: "31", name: "Netherlands" },
		{ code: "41", name: "Switzerland" },
		{ code: "46", name: "Sweden" },
		{ code: "47", name: "Norway" },
		{ code: "358", name: "Finland" },
		{ code: "55", name: "Brazil" },
		{ code: "54", name: "Argentina" },
		{ code: "64", name: "New Zealand" },
		{ code: "63", name: "Philippines" },
		{ code: "60", name: "Malaysia" },
		{ code: "81", name: "Japan" },
		{ code: "90", name: "Turkey" },
		{ code: "380", name: "Ukraine" },
		{ code: "375", name: "Belarus" },
		{ code: "380", name: "Ukraine" },
		{ code: "7", name: "Kazakhstan" },
		{ code: "371", name: "Latvia" },
		{ code: "372", name: "Estonia" },
		{ code: "421", name: "Slovakia" },
		{ code: "420", name: "Czech Republic" },
		{ code: "36", name: "Hungary" },
		{ code: "373", name: "Moldova" },
		{ code: "386", name: "Slovenia" },
		{ code: "48", name: "Poland" },
		{ code: "381", name: "Serbia" },
		{ code: "385", name: "Croatia" },
		{ code: "387", name: "Bosnia and Herzegovina" },
		{ code: "40", name: "Romania" },
		{ code: "44", name: "United Kingdom" },
		{ code: "45", name: "Denmark" },
		{ code: "46", name: "Sweden" },
		{ code: "47", name: "Norway" },
		{ code: "48", name: "Poland" },
		{ code: "49", name: "Germany" },
		{ code: "30", name: "Greece" },
		{ code: "31", name: "Netherlands" },
		{ code: "32", name: "Belgium" },
		{ code: "33", name: "France" },
		{ code: "34", name: "Spain" },
		{ code: "351", name: "Portugal" },
		{ code: "352", name: "Luxembourg" },
		{ code: "353", name: "Ireland" },
		{ code: "354", name: "Iceland" },
		{ code: "355", name: "Albania" },
		{ code: "356", name: "Malta" },
		{ code: "357", name: "Cyprus" },
		{ code: "358", name: "Finland" },
		{ code: "359", name: "Bulgaria" },
		{ code: "370", name: "Lithuania" },
		{ code: "371", name: "Latvia" },
		{ code: "372", name: "Estonia" },
		{ code: "373", name: "Moldova" },
		{ code: "374", name: "Armenia" },
		{ code: "375", name: "Belarus" },
		{ code: "376", name: "Andorra" },
		{ code: "377", name: "Monaco" },
		{ code: "378", name: "San Marino" },
		{ code: "379", name: "Vatican City" },
		{ code: "380", name: "Ukraine" },
		{ code: "381", name: "Serbia" },
		{ code: "382", name: "Montenegro" },
		{ code: "383", name: "Kosovo" },
		{ code: "386", name: "Slovenia" },
		{ code: "387", name: "Bosnia and Herzegovina" },
		{ code: "388", name: "Group of countries, shared code" },
		{ code: "389", name: "North Macedonia" },
		{ code: "420", name: "Czech Republic" },
		{ code: "421", name: "Slovakia" },
		{ code: "423", name: "Liechtenstein" },
		{ code: "501", name: "Belize" },
		{ code: "502", name: "Guatemala" },
		{ code: "503", name: "El Salvador" },
		{ code: "504", name: "Honduras" },
		{ code: "505", name: "Nicaragua" },
		{ code: "506", name: "Costa Rica" },
		{ code: "507", name: "Panama" },
		{ code: "508", name: "Saint Pierre and Miquelon" },
		{ code: "509", name: "Haiti" },
		{ code: "590", name: "Guadeloupe, Saint Barthélemy, and Saint Martin (French part)" },
		{ code: "591", name: "Bolivia" },
		{ code: "592", name: "Guyana" },
		{ code: "593", name: "Ecuador" },
		{ code: "594", name: "French Guiana" },
		{ code: "595", name: "Paraguay" },
		{ code: "596", name: "Martinique" },
		{ code: "597", name: "Suriname" },
		{ code: "598", name: "Uruguay" },
		{ code: "599", name: "Curaçao and the Caribbean Netherlands (Bonaire, Sint Eustatius, and Saba)" },
		{ code: "670", name: "Timor-Leste" },
		{ code: "672", name: "Australian External Territories (Norfolk Island)" },
		{ code: "673", name: "Brunei" },
		{ code: "674", name: "Nauru" },
		{ code: "675", name: "Papua New Guinea" },
		{ code: "676", name: "Tonga" },
		{ code: "677", name: "Solomon Islands" },
		{ code: "678", name: "Vanuatu" },
		{ code: "679", name: "Fiji" },
		{ code: "680", name: "Palau" },
		{ code: "681", name: "Wallis and Futuna" },
		{ code: "682", name: "Cook Islands" },
		{ code: "683", name: "Niue" },
		{ code: "684", name: "American Samoa" },
		{ code: "685", name: "Samoa" },
		{ code: "686", name: "Kiribati" },
		{ code: "687", name: "New Caledonia" },
		{ code: "688", name: "Tuvalu" },
		{ code: "689", name: "French Polynesia" },
		{ code: "690", name: "Tokelau" },
		{ code: "691", name: "Federated States of Micronesia" },
		{ code: "692", name: "Marshall Islands" },
		{ code: "850", name: "North Korea" },
		{ code: "852", name: "Hong Kong" },
		{ code: "853", name: "Macau" },
		{ code: "855", name: "Cambodia" },
		{ code: "856", name: "Laos" },
		{ code: "880", name: "Bangladesh" },
		{ code: "886", name: "Taiwan" },
		{ code: "960", name: "Maldives" },
		{ code: "961", name: "Lebanon" },
		{ code: "962", name: "Jordan" },
		{ code: "963", name: "Syria" },
		{ code: "964", name: "Iraq" },
		{ code: "965", name: "Kuwait" },
		{ code: "966", name: "Saudi Arabia" },
		{ code: "967", name: "Yemen" },
		{ code: "968", name: "Oman" },
		{ code: "970", name: "Palestinian territories" },
		{ code: "971", name: "United Arab Emirates" },
		{ code: "972", name: "Israel" },
		{ code: "973", name: "Bahrain" },
		{ code: "974", name: "Qatar" },
		{ code: "975", name: "Bhutan" },
		{ code: "976", name: "Mongolia" },
		{ code: "977", name: "Nepal" },
		{ code: "992", name: "Tajikistan" },
		{ code: "993", name: "Turkmenistan" },
		{ code: "994", name: "Azerbaijan" },
		{ code: "995", name: "Georgia" },
		{ code: "996", name: "Kyrgyzstan" },
		{ code: "998", name: "Uzbekistan" },
		{ code: "999", name: "Reserved for potential future global services" }
	];
	const countryCode = number.substring(0, 2);
	let re = countryCodes.some((entry) => entry.code === countryCode);

	if (!re) {
		const countryCode = number.substring(0, 3);
		return countryCodes.some((entry) => entry.code === countryCode);
	}

	return re;
}