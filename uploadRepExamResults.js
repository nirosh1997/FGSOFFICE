dataRep["uploadSemester"] = "";
dataRep["degCode"] = "";
dataRep["degSem"] = "";
dataRep["degSub"] = "";
dataRep["acYear"] = "";
var degreeCodeList1 = "";
function formUploadRepExaminationResults(dsp) {


	str = "";
	title = "Repeat Attempt Upload/Download Examination Results";

	if (dsp == "formUploadRepExaminationResults") {

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
		str += '<form id="formUploadRepExaminationResultsServer">';
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
		str += '<select class="form-control form-control-sm" id="degreeWiseResults" name="degreeWiseResults" onchange="dataRep[this.id]=this.selectedIndex;updateRepUploadTitle()">';
		str += degreeCodeList;
		str += '</select>';
		str += '</div></div>';

		let date = new Date().getFullYear();


		str += '<div class="col-sm-3">'
		str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-sm-7" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="batch_year"  onchange="updateRepUploadTitle()">';
		str += "<option>Please Select Date</option>";

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
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem1' class='form-check-input' name='uploadSemester' value='1' onclick='dataRep[this.name]=this.value;updateRepUploadTitle()' " + ((dataRep["selectedSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem2' class='form-check-input' name='uploadSemester' value='2' onclick='dataRep[this.name]=this.value;updateRepUploadTitle()' " + ((dataRep["selectedSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem3' class='form-check-input' name='uploadSemester' value='3' onclick='dataRep[this.name]=this.value;updateRepUploadTitle()' " + ((dataRep["selectedSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem4' class='form-check-input' name='uploadSemester' value='4' onclick='dataRep[this.name]=this.value;updateRepUploadTitle()' " + ((dataRep["selectedSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem0' class='form-check-input' name='uploadSemester' value='0' onclick='dataRep[this.name]=this.value;updateRepUploadTitle()' " + ((dataRep["selectedSemester"] == '0') ? "checked" : "") + ">All<i class='input-helper'></i></label></div></div>";

		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row">'
		str += '<div class="col-sm-4">'
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Subjects</label></div>';
		str += '<div class="col-sm-7" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" name="subjectUPTitle" id="subjectUPTitle" onchange="enableRepUpDownload()">';
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
		str += '<button type="button" class="btn btn-primary" style="display:none" id="ex_download" onclick="RepexamDownloadSheet()">Download Final Mark Sheets</button>';
		str += '<button type="button" class="btn btn-primary" style="display:none;margin-left:10px" id="ex_downloadMedi" onclick="RepexamDownloadMedicalList()">Download Medical List</button>';
		str += '</div>';
		str += '<div class="col-sm-8">';

		str += '<div class="row"><div class="offset-sm-4 col-sm-6">';
		str += '<input type="file" name="fileToUploadRep" id="fileToUploadRep" accept=".csv" class="customUpload form-control form-control-sm" style="padding: 0;border: 1px solid #ccc;display:none;">';
		str += '</div>';
		str += '<div class="col-sm-2">';
		str += '<input type="button" class="btn btn-primary" id="ex_upload" style="display:none;" value="Upload Results" onclick="examRepUploadSheet()">';


		str += '</div>';

		str += '</div>';
		str += '</div>';


		str += '</div>';



		str += '</fieldset></div></div>';




		str += '<div class="form-group row" id="subjectshowTitleMainDivDownload" style="display:none;margin-top: 2rem;"><div class="col-sm-12">';
		str += '<fieldset style="border: 1px solid #000;width: auto;padding: 10px;margin: 5px;">';

		str += "<legend style='color: black;text-align: left;width: max-content;' id='subjectshowTitleDownload'></legend>";

		str += '<div class="row" id="ex_downloadSub">';
		str += '<div class="col-sm-12"><div class="template-demo">';
		str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 2.6rem;font-size: 18px;font-weight: 500;">Subject Vise : </label>';
		str += '<input type="button" class="btn btn-primary" value="Grades" onclick="RepexamDownloadSubjectGrades()">';
		str += '<input type="button" class="btn btn-primary" value="Marks" onclick="RepexamDownloadSubjectMarks()">';
		str += '</div></div>';
		str += '</div>';




		str += '<div class="row" id="ex_downloadSem">';
		str += '<div class="col-sm-12"><div class="template-demo">';
		str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 1.5rem;font-size: 18px;font-weight: 500;">Semester Vise : </label>';
		str += '<input type="button" class="btn btn-primary" value="Grades" onclick="RepexamDownloadSemesterGrades()">';
		str += '<input type="button" class="btn btn-primary" value="Marks" onclick="RepexamDownloadSemesterMarks()">';
		str += '</div></div>';
		str += '</div>';



		str += '<div class="row" id="ex_downloadYear">';
		str += '<div class="col-sm-12"><div class="template-demo">';
		str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 4.3rem;font-size: 18px;font-weight: 500;">Year Vise : </label>';
		str += '<input type="button" class="btn btn-primary" value="Grades" onclick="examDownloadYearGrades()">';
		str += '<input type="button" class="btn btn-primary" value="Marks" onclick="examDownloadYearMarks()">';
		str += '</div></div>';
		str += '</div>';


		str += '<div class="row" id="ex_fulReportDownload">';
		str += '<div class="col-sm-12"><div class="template-demo">';
		str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 3.2rem;font-size: 18px;font-weight: 500;">Final Result : </label>';
		str += '<input type="button" class="btn btn-primary" value="Download" onclick="examDownloadFinalReport()">';
		str += '</div></div>';
		str += '</div>';

		str += '<div class="row" id="ex_passDownload">';
		str += '<div class="col-sm-12"><div class="template-demo">';
		str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 4.8rem;font-size: 18px;font-weight: 500;">Pass List : </label>';
		str += '<input type="button" class="btn btn-primary" value="Download" onclick="examDownloadPassReport()">';
		str += '</div></div>';
		str += '</div>';


		str += "<div style='clear:both'>";
		str += '<input type="button" id="ex_fulReportDownload" style="margin-top:1px;float:left; display:none" class="btnD" value="Download Final Results Sheet" onclick="examDownloadFinalReport();">';
		str += "</div>";

		str += "<div style='clear:both'>";
		str += '<input type="button" id="ex_passDownload" style="margin-top:1px;float:left; display:none" class="btnD" value="Download Pass List" onclick="examDownloadPassReport();">';
		str += "</div>";
		str += '</fieldset></div></div>';

		str += '</div></div>';
		str += '</div></div>';

		str += '</form">';
		str += "<div>";


	}
	return str;

}

function updateRepUploadTitle() {

	if (document.getElementById('degreeWiseResults').selectedIndex != 0 && document.getElementById('batch_year').selectedIndex != 0 && dataRep["uploadSemester"] != "") {

		selectionRepSubCodeList = "";
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		var temprepYear = document.getElementById('batch_year').value;
		document.getElementById('subjectUPTitle').value = "";
		document.getElementById('subjectUPName').value = "";
		document.getElementById('subjectshowTitleMainDiv').style.display = "none";
		document.getElementById('subjectshowTitleMainDivDownload').style.display = "none";
		document.getElementById('subjectshowTitle').innerHTML = "";
		document.getElementById('subjectshowTitleDownload').innerHTML = "";
		document.getElementById('ex_download').style.display = "none";
		document.getElementById('ex_upload').style.display = "none";
		document.getElementById('ex_downloadSub').style.display = "none";
		document.getElementById('ex_downloadSem').style.display = "";
		document.getElementById('fileToUploadRep').style.display = "none";
		// document.getElementById('ex_downloadAtt').style.display = "none";
		// document.getElementById('ex_downloadMrk').style.display = "none";
		// document.getElementById('ex_downloadStickers').style.display = "none";
		//document.getElementById('ex_downloadMod').style.display = "none";
		document.getElementById('ex_downloadMedi').style.display = "none";
		//document.getElementById('ex_fulReportRepDownload').style.display = "none";
		//document.getElementById('ex_passDownload').style.display = "none";

		document.getElementById('fileToUploadRep').value = "";
		document.getElementById("msgArea").innerHTML = "";
		selectionRepSubCodeList = "";
		selectionRepSubCodeList += "<option>Please Select Subject</option>";

		for (i = 0; i < sub_CodeLength; i++) {
			if (tmpDId == sub_degreeCodeArr[i] && temprepYear == sub_academicYearArr[i] && dataRep["uploadSemester"] == sub_semesterArr[i]) {
				//if (sub_subjectCodeArr.indexOf(sub_subjectCodeArr[i]) == sub_subjectCodeArr.lastIndexOf(sub_subjectCodeArr[i]) || (sub_subjectCodeArr.indexOf(sub_subjectCodeArr[i]) != sub_subjectCodeArr.lastIndexOf(sub_subjectCodeArr[i]) && sub_subjectCodeArr.indexOf(sub_subjectCodeArr[i])==i)){

				selectionRepSubCodeList += "<option>" + sub_subjectCodeArr[i] + "</option>";

				//}
			}
		}
		document.getElementById('subjectUPTitle').innerHTML = selectionRepSubCodeList;
		// document.getElementById('subjectUPTitle').setAttribute("list", "selectionRepSubCodeList");
		return;
	} else if (document.getElementById('degreeWiseResults').selectedIndex != 0 && document.getElementById('batch_year').selectedIndex != 0) {
		//document.getElementById('ex_downloadYear').style.display = "";
		//document.getElementById('ex_fulReportRepDownload').style.display = "";
		//document.getElementById('ex_passDownload').style.display = "";
	} else {
		//document.getElementById('ex_downloadYear').style.display = "none";
		document.getElementById('ex_downloadSem').style.display = "none";
		document.getElementById('subjectUPTitle').value = "";
		document.getElementById('subjectUPName').value = "";
		document.getElementById('ex_download').style.display = "none";
		document.getElementById('ex_upload').style.display = "none";
		document.getElementById('ex_downloadSub').style.display = "none";
		document.getElementById('fileToUploadRep').style.display = "none";
		// document.getElementById('ex_downloadAtt').style.display = "none";
		// document.getElementById('ex_downloadMrk').style.display = "none";
		// document.getElementById('ex_downloadStickers').style.display = "none";
		//document.getElementById('ex_downloadMod').style.display = "none";
		document.getElementById('ex_downloadMedi').style.display = "none";
		//document.getElementById('ex_fulReportRepDownload').style.display = "none";
		//document.getElementById('ex_passDownload').style.display = "none";
		document.getElementById('fileToUploadRep').value = "";
		document.getElementById("msgArea").innerHTML = "";
	}
	// document.getElementById('selectionRepSubCodeList').innerHTML = "";
}

function enableRepUpDownload() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;

		for (i = 0; i < sub_CodeLength; i++) {
			if (tmpDId == sub_degreeCodeArr[i] && dataRep["uploadSemester"] == sub_semesterArr[i]
				&& document.getElementById('subjectUPTitle').value == sub_subjectCodeArr[i]) {

				document.getElementById('subjectUPName').value = sub_subjectTitleArr[i];
				document.getElementById('ex_download').style.display = "";
				document.getElementById('ex_downloadSem').style.display = "";
				document.getElementById('subjectshowTitleMainDiv').style.display = "block";
				document.getElementById('subjectshowTitleMainDivDownload').style.display = "block";
				document.getElementById('subjectshowTitle').innerHTML = "Upload Results (" + sub_subjectTitleArr[i] + ")";
				document.getElementById('subjectshowTitleDownload').innerHTML = "Download Results (" + sub_subjectTitleArr[i] + ")";

				//document.getElementById('ex_downloadYear').style.display = "";
				document.getElementById('ex_downloadSub').style.display = "";
				document.getElementById('ex_upload').style.display = "";
				document.getElementById('fileToUploadRep').style.display = "";
				// document.getElementById('ex_downloadAtt').style.display = "";
				// document.getElementById('ex_downloadMrk').style.display = "";
				// document.getElementById('ex_downloadStickers').style.display = "";
				//document.getElementById('ex_downloadMod').style.display = "";
				document.getElementById('ex_downloadMedi').style.display = "";
				//document.getElementById('ex_fulReportRepDownload').style.display = "";
				//document.getElementById('ex_passDownload').style.display = "";
				return;
			}
		}

		//alert(tttt);
	}
}

function RepexamDownloadSheet() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {

		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4DownloadRepeatStudentList');

		RepexamDownloadSheetTemp(degTitle, SubName, SubCode, BatchYear);

	}
}

function RepexamDownloadMark() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {

		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4DownloadRepeatStudentList');

		RepexamDownloadMarkSheetTemp(degTitle, SubName, SubCode, BatchYear);

	}
}

function RepexamDownloadStickers() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {

		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4DownloadRepeatStudentList');

		examDownloadStickersTemp(degTitle, SubName, SubCode, BatchYear);

	}
}




function RepexamDownloadModeratingSheet() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {

		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4DownloadRepeatStudentList');

		RepexamDownloadModeratingSheetTemp(degTitle, SubName, SubCode, BatchYear);

	}
}



function examRepUploadSheet() {
	var exportFilename = document.getElementById('batch_year').value + " - " + document.getElementById('subjectUPName').value + " (" + document.getElementById('subjectUPTitle').value + ").csv";
	if (document.getElementById("fileToUploadRep").value == "") {
		alert("Please select a file to upload");
	} else if (!document.getElementById("fileToUploadRep").value.includes(".csv")) {
		alert("Please upload a .csv file");
	}/*else if(document.getElementById("fileToUploadRep").value != exportFilename){
		//alert("Please import correct file - : " +exportFilename);
	}*/
	else if (!document.getElementById("fileToUploadRep").value.includes(document.getElementById('subjectUPName').value)) {
		//alert("Please import correct file - : ");
	} else {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		var repstatus = 1;
		var form = document.getElementById("formUploadRepExaminationResultsServer");
		var formData = new FormData(form);
		//formData.append("file",form);
		formData.append("action", "uploadRep");
		formData.append("interface", "uploadRepMarksList");
		formData.append("rep_degreeCode", tmpDId);
		formData.append("rep_achedamicYear", document.getElementById('batch_year').value);
		formData.append("rep_subjectName", document.getElementById('subjectUPTitle').value);
		formData.append("rep_Status", repstatus);
		isrHandle.uploadCSV(eval("clientController"), "serverController.php", formData);
	}
}


function RepexamDownloadAttendance() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4DownloadRepeatStudentList');

		RepexamDownloadAttendanceTemp(degTitle, SubName, SubCode, BatchYear);
	}
}



function RepexamDownloadMedicalList() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {

		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4DownloadRepeatStudentMedicalList');

		RepexamDownloadMedicalListTemp(degTitle, SubName, SubCode, BatchYear);


	}
}


function RepexamDownloadSubjectMarks() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4RepexamResultsSubWise');

		RepexamDownloadSubjectMarksTemp(degTitle, SubName, SubCode, BatchYear);
	}
}

function RepexamDownloadSubjectGrades() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != ""
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4RepexamResultsSubWise');

		RepexamDownloadSubjectGradeTemp(degTitle, SubName, SubCode, BatchYear);
	}
}

function RepexamDownloadSemesterMarks() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubSem = dataRep["degSem"];
		var BatchYear = document.getElementById('batch_year').value;


		resetResultUploadRep()
		sendForm('data4RepexamResultsSemWiseSubjects');
		sendForm('data4RepexamResultsSemWise');

		RepexamDownloadSemesterMarksTemp(degTitle, SubSem, BatchYear);
	}
}

function RepexamDownloadSemesterGrades() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& dataRep["uploadSemester"] != "") {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubSem = dataRep["degSem"];
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4RepexamResultsSemWiseSubjects');
		sendForm('data4RepexamResultsSemWise');
		sendForm('data4RepexamResultsSemWiseFinal');

		RepexamDownloadSemesterGradeTemp(degTitle, SubSem, BatchYear);
	}
}


function examDownloadFinalReportRepeat() {

	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0) {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUploadRep()
		sendForm('data4RepexamResultsYearWiseSubjects');
		sendForm('data4RepexamResultsYearWise');
		sendForm('data4RepexamResultsYearWiseFinal');

		examDownloadFinalReportRepeatTemp(degTitle, BatchYear);
	}
}





// function examDownloadYearGrades(){
// if(document.getElementById('degreeWiseResults').selectedIndex != 0
// && document.getElementById('batch_year').selectedIndex != 0){
// var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;		
// dataRep["degCode"] = tmpDId;
// dataRep["acYear"] = document.getElementById('batch_year').value;

// var degTitle = document.getElementById('degreeWiseResults').value;
// var BatchYear = document.getElementById('batch_year').value;

// resetResultUploadRep()
// sendForm('data4examResultsYearWiseSubjects');
// sendForm('data4examResultsYearWise');
// sendForm('data4examResultsYearWiseFinal');

// examDownloadYearGradeTemp(degTitle, BatchYear);
// }
// }	

// function examDownloadYearMarks(){
// if(document.getElementById('degreeWiseResults').selectedIndex != 0
// && document.getElementById('batch_year').selectedIndex != 0){
// var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;		
// dataRep["degCode"] = tmpDId;
// dataRep["acYear"] = document.getElementById('batch_year').value;

// var degTitle = document.getElementById('degreeWiseResults').value;
// var BatchYear = document.getElementById('batch_year').value;

// resetResultUploadRep()
// sendForm('data4examResultsYearWiseSubjects');
// sendForm('data4examResultsYearWise');
// sendForm('data4examResultsYearWiseFinal');

// examDownloadYearMarksTemp(degTitle, BatchYear);
// }
// }

// function examDownloadPassReport(){

// if(document.getElementById('degreeWiseResults').selectedIndex != 0
// && document.getElementById('batch_year').selectedIndex != 0){
// var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;		
// dataRep["degCode"] = tmpDId;
// dataRep["acYear"] = document.getElementById('batch_year').value;

// var degTitle = document.getElementById('degreeWiseResults').value;
// var BatchYear = document.getElementById('batch_year').value;

// resetResultUploadRep()

// sendForm('data4examResultsYearWiseSubjects');
// //sendForm('data4examResultsYearWise');
// //sendForm('data4examResultsYearWiseFinal');
// sendForm('data4examPassReport');

// examDownloadPassReportTemp(degTitle, BatchYear);
// }
// }






function resetResultUploadRep() {
	degreeCodeLength = 0;
	sub_CodeLength = 0;
	dataRep["uploadSemester"] = "";
	document.getElementById("msgArea").innerHTML = "";
}