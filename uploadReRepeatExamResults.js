dataRep["uploadSemester"] = "";
dataRep["degCode"] = "";
dataRep["degSem"] = "";
dataRep["degSub"] = "";
dataRep["acYear"] = "";
var degreeCodeList1 = "";
function formUploadReRepeatExaminationResults(dsp) {


	str = "";
	title = "Re-Repeat Attempt Upload/Download Examination Results";

	if (dsp == "formUploadReRepeatExaminationResults") {


		tmpDownLength = 0;
		var degreeCodeList = "<option>Please scroll down to see the records</option>";
		if (dataRep['roleName'] == "Assistant Registrar") {
			for (var degLoop = 0; degLoop < degreeCodeLength; degLoop++) {
				if (dataRep['roleName'] == "Assistant Registrar" & dataRep['facultyCode'] == resultsFacultyCodeArr[degLoop]) {
					if (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) == degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) != degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) && degreeTitleArr.indexOf(degreeTitleArr[degLoop]) == degLoop)) {
						if (degreeCodeArr.indexOf(degreeCodeArr[degLoop]) == degreeCodeArr.lastIndexOf(degreeCodeArr[degLoop]) || (degreeCodeArr.indexOf(degreeCodeArr[degLoop]) != degreeCodeArr.lastIndexOf(degreeCodeArr[degLoop]) && degreeCodeArr.indexOf(degreeCodeArr[degLoop]) == degLoop)) {
							degreeCodeList += "<option id='" + degreeTitleArr[degLoop] + "' title='" + degreeCodeArr[degLoop] + "'>" + degreeTitleArr[degLoop] + "</option>";
						}
					}
				}
			}
		}
		else if (dataRep['roleName'] == "Coordinator" || dataRep['roleName']=='Technical Coordinator') {
			for (var degLoop = 0; degLoop < degreeCodeLength; degLoop++) {
				if (((dataRep['roleName'] == "Coordinator" || dataRep['roleName']=='Technical Coordinator') && dataRep['departmentCode'] == resultsdepartmentCodeArr[degLoop]) || ((dataRep['roleName'] == "Coordinator" || dataRep['roleName']=='Technical Coordinator') && dataRep['programmeCode'] == degreeCodeArr[degLoop]) || (dataRep['departmentCode'] == degreeCodeArr[degLoop])) {
					degreeCodeList += "<option id='" + degreeTitleArr[degLoop] + "' title='" + degreeCodeArr[degLoop] + "'>" + degreeTitleArr[degLoop] + "</option>";
				}
			}
		}

		else {

			for (var degLoop = 0; degLoop < degreeCodeLength; degLoop++) {
				if (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) == degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[degLoop]) != degreeTitleArr.lastIndexOf(degreeTitleArr[degLoop]) && degreeTitleArr.indexOf(degreeTitleArr[degLoop]) == degLoop)) {
					if (degreeCodeArr.indexOf(degreeCodeArr[degLoop]) == degreeCodeArr.lastIndexOf(degreeCodeArr[degLoop]) || (degreeCodeArr.indexOf(degreeCodeArr[degLoop]) != degreeCodeArr.lastIndexOf(degreeCodeArr[degLoop]) && degreeCodeArr.indexOf(degreeCodeArr[degLoop]) == degLoop)) {
						degreeCodeList += "<option id='" + degreeTitleArr[degLoop] + "' title='" + degreeCodeArr[degLoop] + "'>" + degreeTitleArr[degLoop] + "</option>";
					}
				}
			}
		}



		str += "<div id='formUploadRepExaminationResults'>";
		str += '<form id="formUploadReRepeatExaminationResultsServer">';
		str += '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="form-group row">';

		str += '<div class="col-sm-4">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm"  id="degreeWiseReRepeatResults" name="degreeWiseReRepeatResults" onchange="dataRep[this.id]=this.selectedIndex;updateReRepeatUploadTitle()">';
		str += degreeCodeList;
		str += '</select>';
		str += '</div></div>';


		str += '<div class="col-sm-3">'
		str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-sm-7" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="batch_year"  onchange="updateReRepeatUploadTitle()">';
		str += "<option>Please Select Date</option>";
		let date = new Date().getFullYear();
		for (i = 2014; i <= date + 2; i++) {
			if (i == date + 1) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}

		str += '</select>';
		str += '</div>';
		str += '</div>';

		str += '<div class="col-sm-5">'
		str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Semester : </label></div>';
		str += '<div class="col-sm-10" style="display: inline-flex;">';
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem1' class='form-check-input' name='uploadSemester' value='1' onclick='dataRep[this.name]=this.value;updateReRepeatUploadTitle()' " + ((dataRep["selectedSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem2' class='form-check-input' name='uploadSemester' value='2' onclick='dataRep[this.name]=this.value;updateReRepeatUploadTitle()' " + ((dataRep["selectedSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem3' class='form-check-input' name='uploadSemester' value='3' onclick='dataRep[this.name]=this.value;updateReRepeatUploadTitle()' " + ((dataRep["selectedSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem4' class='form-check-input' name='uploadSemester' value='4' onclick='dataRep[this.name]=this.value;updateReRepeatUploadTitle()' " + ((dataRep["selectedSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem0' class='form-check-input' name='uploadSemester' value='0' onclick='dataRep[this.name]=this.value;updateReRepeatUploadTitle()' " + ((dataRep["selectedSemester"] == '0') ? "checked" : "") + ">All<i class='input-helper'></i></label></div></div>";

		str += '</div>';
		str += '</div>';
		str += '</div></div>';




		str += '<div class="form-group row">'
		str += '<div class="col-sm-4">'
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Subjects</label></div>';
		str += '<div class="col-sm-7" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" name="subjectUPTitle" id="subjectUPTitle" onchange="enableReRepeatUpDownload()">';
		str += '</select>';
		str += '</div>';
		str += '</div>';

		str += '<div class="col-sm-4">';
		str += "<div class='col-sm-12' style='display: none;'><input type='text' class='form-control' name='subjectUPName' id ='subjectUPName' value= '' disabled='true'  >";
		str += '</div>';
		str += '</div>';

		str += '</div>';





		str += '<div class="form-group row" id="subjectshowTitleMainDiv" style="display:none;margin-top: 2rem;"><div class="col-sm-12">';
		str += '<fieldset style="border: 1px solid #000;width: auto;padding: 10px;margin: 5px;">';
		str += "<legend style='color: black;text-align: left;width: max-content;' id='subjectshowTitle'></legend>";
		str += '<div class="row">';
		str += '<div class="col-sm-4">';
		str += '<button type="button" class="btn btn-primary" style="display:none" id="ex_download" onclick="ReRepeatexamDownloadSheet()">Download Final Mark Sheets</button>';
		str += '</div>';
		str += '<div class="col-sm-8">';

		str += '<div class="row"><div class="offset-sm-4 col-sm-6">';
		str += '<input type="file" name="fileToUploadReRepeat" id="fileToUploadReRepeat" accept=".csv" class="customUpload form-control form-control-sm" style="padding: 0;border: 1px solid #ccc;display:none;">';
		str += '</div>';
		str += '<div class="col-sm-2">';
		str += '<input type="button" class="btn btn-primary" id="ex_uploadReRep" style="display:none;" value="Upload Results" onclick="examReRepeatUploadSheet()">';

		str += '</div>';

		str += '</div>';
		str += '</div>';


		str += '</div>';



		str += '</fieldset></div></div>';



		str += '<div class="form-group row" id="subjectshowTitleMainDivDownload" style="display:none;margin-top: 2rem;"><div class="col-sm-12">';
		str += '<fieldset style="border: 1px solid #000;width: auto;padding: 10px;margin: 5px;">';

		str += "<legend style='color: black;text-align: left;width: max-content;' id='subjectshowTitleDownload'></legend>";


		str += '<div class="row" id="ex_downloadSem">';
		str += '<div class="col-sm-12"><div class="template-demo">';
		str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 1.5rem;font-size: 18px;font-weight: 500;">Subject Vise : </label>';
		str += '<input type="button" class="btn btn-primary" value="Grades" onclick="ReRepeatexamDownloadSubjectGrades()">';
		str += '<input type="button" class="btn btn-primary" value="Marks" onclick="ReRepeatexamDownloadSubjectMarks()">';
		str += '</div></div>';
		str += '</div>';


		str += '</fieldset></div></div>';

		str += '</div></div>';
		str += '</div></div>';

		str += '</form">';
		str += "<div>";


		str += '</form></div>';

	}
	return str;

}

function updateReRepeatUploadTitle() {

	if (document.getElementById('degreeWiseReRepeatResults').selectedIndex != 0 && document.getElementById('batch_year').selectedIndex != 0 && dataRep["uploadSemester"] != "") {

		selectionReRepeatSubCodeList = "";
		var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;
		var temprepYear = document.getElementById('batch_year').value;
		document.getElementById('subjectUPTitle').value = "";
		document.getElementById('subjectUPName').value = "";
		document.getElementById('ex_download').style.display = "none";
		document.getElementById('ex_uploadReRep').style.display = "none";
		// document.getElementById('ex_downloadSubReRep').style.display = "none";
		document.getElementById('subjectshowTitleMainDivDownload').style.display = "none";
		document.getElementById('subjectshowTitleMainDiv').style.display = "none";

		//document.getElementById('ex_downloadSem').style.display = "";
		document.getElementById('fileToUploadReRepeat').style.display = "none";
		// document.getElementById('ex_downloadAtt').style.display = "none";
		// document.getElementById('ex_downloadMrk').style.display = "none";
		// document.getElementById('ex_downloadStickers').style.display = "none";
		//document.getElementById('ex_downloadMod').style.display = "none";
		//document.getElementById('ex_downloadMedi').style.display = "none";
		//document.getElementById('ex_fulReportRepDownload').style.display = "none";
		//document.getElementById('ex_passDownload').style.display = "none";

		document.getElementById('fileToUploadReRepeat').value = "";
		document.getElementById("msgArea").innerHTML = "";
		selectionReRepeatSubCodeList += "<option>Please Select Subject</option>";
		for (i = 0; i < sub_CodeLength; i++) {
			if (tmpDId == sub_degreeCodeArr[i] && temprepYear == sub_academicYearArr[i] && dataRep["uploadSemester"] == sub_semesterArr[i]) {
				//if (sub_subjectCodeArr.indexOf(sub_subjectCodeArr[i]) == sub_subjectCodeArr.lastIndexOf(sub_subjectCodeArr[i]) || (sub_subjectCodeArr.indexOf(sub_subjectCodeArr[i]) != sub_subjectCodeArr.lastIndexOf(sub_subjectCodeArr[i]) && sub_subjectCodeArr.indexOf(sub_subjectCodeArr[i])==i)){

				selectionReRepeatSubCodeList += "<option>" + sub_subjectCodeArr[i] + "</option>";

				//}
			}
		}
		document.getElementById('subjectUPTitle').innerHTML = selectionReRepeatSubCodeList;

		// document.getElementById('selectionReRepeatSubCodeList').innerHTML = selectionReRepeatSubCodeList;
		// document.getElementById('subjectUPTitle').setAttribute("list", "selectionReRepeatSubCodeList");
		return;
	} else if (document.getElementById('degreeWiseReRepeatResults').selectedIndex != 0 && document.getElementById('batch_year').selectedIndex != 0) {
		//document.getElementById('ex_downloadYear').style.display = "";
		//document.getElementById('ex_fulReportRepDownload').style.display = "";
		//document.getElementById('ex_passDownload').style.display = "";
	} else {
		//document.getElementById('ex_downloadYear').style.display = "none";
		//document.getElementById('ex_downloadSem').style.display = "none";
		document.getElementById('subjectUPTitle').value = "";
		document.getElementById('subjectUPName').value = "";
		document.getElementById('ex_download').style.display = "none";
		document.getElementById('ex_uploadReRep').style.display = "none";
		// document.getElementById('ex_downloadSubReRep').style.display = "none";
		document.getElementById('subjectshowTitleMainDivDownload').style.display = "none";
		document.getElementById('subjectshowTitleMainDiv').style.display = "none";

		document.getElementById('fileToUploadReRepeat').style.display = "none";
		// document.getElementById('ex_downloadAtt').style.display = "none";
		// document.getElementById('ex_downloadMrk').style.display = "none";
		// document.getElementById('ex_downloadStickers').style.display = "none";
		//document.getElementById('ex_downloadMod').style.display = "none";
		//document.getElementById('ex_downloadMedi').style.display = "none";
		//document.getElementById('ex_fulReportRepDownload').style.display = "none";
		//document.getElementById('ex_passDownload').style.display = "none";
		document.getElementById('fileToUploadReRepeat').value = "";
		document.getElementById("msgArea").innerHTML = "";
	}
	// document.getElementById('selectionReRepeatSubCodeList').innerHTML = "";
}

function enableReRepeatUpDownload() {
	if (document.getElementById('degreeWiseReRepeatResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;

		for (i = 0; i < sub_CodeLength; i++) {
			if (tmpDId == sub_degreeCodeArr[i] && dataRep["uploadSemester"] == sub_semesterArr[i]
				&& document.getElementById('subjectUPTitle').value == sub_subjectCodeArr[i]) {

				document.getElementById('subjectUPName').value = sub_subjectTitleArr[i];
				document.getElementById('ex_download').style.display = "";
				//document.getElementById('ex_downloadSem').style.display = "";
				//document.getElementById('ex_downloadYear').style.display = "";
				// document.getElementById('ex_downloadSubReRep').style.display = "";
				document.getElementById('subjectshowTitleMainDivDownload').style.display = "";
				document.getElementById('subjectshowTitleMainDiv').style.display = "";
				document.getElementById('subjectshowTitle').innerHTML = "Upload Results (" + sub_subjectTitleArr[i] + ")";
				document.getElementById('subjectshowTitleDownload').innerHTML = "Download Results (" + sub_subjectTitleArr[i] + ")";
				document.getElementById('ex_uploadReRep').style.display = "";
				document.getElementById('fileToUploadReRepeat').style.display = "";
				// document.getElementById('ex_downloadAtt').style.display = "";
				// document.getElementById('ex_downloadMrk').style.display = "";
				// document.getElementById('ex_downloadStickers').style.display = "";
				//document.getElementById('ex_downloadMod').style.display = "";
				//document.getElementById('ex_downloadMedi').style.display = "";
				//document.getElementById('ex_fulReportRepDownload').style.display = "";
				//document.getElementById('ex_passDownload').style.display = "";
				return;
			}
		}

		//alert(tttt);
	}
}

function ReRepeatexamDownloadSheet() {
	if (document.getElementById('degreeWiseReRepeatResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {

		var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseReRepeatResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadReRepeat()
		sendForm('data4DownloadReRepeatStudentList');

		ReRepatexamDownloadSheetTemp(degTitle, SubName, SubCode, BatchYear);

	}
}

function ReRepeatexamDownloadMark() {
	if (document.getElementById('degreeWiseReRepeatResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {

		var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseReRepeatResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadReRepeat()
		sendForm('data4DownloadReRepeatStudentList');

		ReRepeatexamDownloadMarkSheetTemp(degTitle, SubName, SubCode, BatchYear);

	}
}


function ReRepeatexamDownloadStickers() {
	if (document.getElementById('degreeWiseReRepeatResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {

		var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseReRepeatResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadReRepeat()
		sendForm('data4DownloadReRepeatStudentList');

		ReRepeatexamDownloadStickersTemp(degTitle, SubName, SubCode, BatchYear);

	}
}

function ReRepeatexamDownloadAttendance() {
	if (document.getElementById('degreeWiseReRepeatResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseReRepeatResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadReRepeat()
		sendForm('data4DownloadReRepeatStudentList');

		ReRepeatexamDownloadAttendanceTemp(degTitle, SubName, SubCode, BatchYear);
	}
}





function examReRepeatUploadSheet() {
	var exportFilename = document.getElementById('batch_year').value + " - " + document.getElementById('subjectUPName').value + " (" + document.getElementById('subjectUPTitle').value + ").csv";

	//2018 - Sinhala - Archaeological Heritage Management (ARCH53015)

	if (document.getElementById("fileToUploadReRepeat").value == "") {
		alert("Please select a file to upload");
	} else if (!document.getElementById("fileToUploadReRepeat").value.includes(".csv")) {
		alert("Please upload a .csv file");
	}/*else if(document.getElementById("fileToUploadReRepeat").value != exportFilename){
		//alert("Please import correct file - : " +exportFilename);
	}*/
	else if (!document.getElementById("fileToUploadReRepeat").value.includes(document.getElementById('subjectUPName').value)) {
		//alert("Please import correct file - : ");
	} else {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;
		var Rerepstatus = 1;
		var form = document.getElementById("formUploadReRepeatExaminationResultsServer");
		var formData = new FormData(form);
		//formData.append("file",form);
		formData.append("action", "uploadReRep");
		formData.append("interface", "uploadReRepMarksList");
		formData.append("ReRep_degreeCode", tmpDId);
		formData.append("ReRep_achedamicYear", document.getElementById('batch_year').value);
		formData.append("ReRep_subjectName", document.getElementById('subjectUPTitle').value);
		formData.append("ReRep_Status", Rerepstatus);
		isrHandle.uploadCSV(eval("clientController"), "serverController.php", formData);
	}
}




function ReRepeatexamDownloadSubjectMarks() {
	if (document.getElementById('degreeWiseReRepeatResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseReRepeatResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadReRepeat()
		sendForm('data4ReRepeatexamResultsSubWise');

		ReRepeatexamDownloadSubjectMarksTemp(degTitle, SubName, SubCode, BatchYear);
	}
}

function ReRepeatexamDownloadSubjectGrades() {
	if (document.getElementById('degreeWiseReRepeatResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseReRepeatResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseReRepeatResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadReRepeat()
		sendForm('data4ReRepeatexamResultsSubWise');

		ReRepeatexamDownloadSubjectGradeTemp(degTitle, SubName, SubCode, BatchYear);
	}
}



function resetResultUploadReRepeat() {
	degreeCodeLength = 0;
	sub_CodeLength = 0;
	dataRep["uploadSemester"] = "";
	document.getElementById("msgArea").innerHTML = "";
}