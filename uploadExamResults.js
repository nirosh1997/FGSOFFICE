dataRep["uploadSemester"] = "";
dataRep["degCode"] = "";
dataRep["degSem"] = "";
dataRep["degSub"] = "";
dataRep["acYear"] = "";
var degreeCodeList1 = "";
function formUploadExaminationResults(dsp) {


	str = "";
	title = "First Attempt Upload/Download Examination Results";

	if (dsp == "formUploadExaminationResults") {


		tmpDownLength = 0;

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

		// programName1 = "";

		// if (role == "cordinator") {
		// 	programName = "<option>Please scroll down to see the records</option>";
		// 	for (j = 0; j < degreeCodeLength; j++) {
		// 		if (degreeCodeArr[j] != null) {
		// 			if (degreeCodeArr.indexOf(degreeCodeArr[j]) == degreeCodeArr.lastIndexOf(degreeCodeArr[j]) || (degreeCodeArr.indexOf(degreeCodeArr[j]) != degreeCodeArr.lastIndexOf(degreeCodeArr[j]) && degreeCodeArr.indexOf(degreeCodeArr[j]) == j)) {
		// 				if (degreeCodeArr[j] == dataRep['departmentCode']) {
		// 					programName += "<option  id='" + degreeTitleArr[j] + "' title='" + degreeCodeArr[j] + "' " + ((dataRep["selectedDegreeName"] == degreeTitleArr[j]) ? "selected" : "") + " >" + degreeTitleArr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		// else if (role1 == "head") {
		// 	programName = "<option>Please scroll down to see the records</option>";
		// 	for (j = 0; j < degreeCodeLength; j++) {
		// 		if (degreeCodeArr[j] != null) {
		// 			if (degreeCodeArr.indexOf(degreeCodeArr[j]) == degreeCodeArr.lastIndexOf(degreeCodeArr[j]) || (degreeCodeArr.indexOf(degreeCodeArr[j]) != degreeCodeArr.lastIndexOf(degreeCodeArr[j]) && degreeCodeArr.indexOf(degreeCodeArr[j]) == j)) {
		// 				if (departmentCodeappArr[j] == dataRep['departmentCode']) {
		// 					programName += "<option  id='" + degreeTitleArr[j] + "' title='" + degreeCodeArr[j] + "' " + ((dataRep["selectedDegreeName"] == degreeTitleArr[j]) ? "selected" : "") + " >" + degreeTitleArr[j] + "</option>";
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
		// 				if (degreeCodeArr[j] != null) {
		// 					if (degreeCodeArr.indexOf(degreeCodeArr[j]) == degreeCodeArr.lastIndexOf(degreeCodeArr[j]) || (degreeCodeArr.indexOf(degreeCodeArr[j]) != degreeCodeArr.lastIndexOf(degreeCodeArr[j]) && degreeCodeArr.indexOf(degreeCodeArr[j]) == j)) {
		// 						programName += "<option  id='" + degreeTitleArr[j] + "' title='" + degreeCodeArr[j] + "' " + ((dataRep["selectedDegreeName"] == degreeTitleArr[j]) ? "selected" : "") + " >" + degreeTitleArr[j] + "</option>";
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// 	else if (dataRep['userName'] == "SAR-GWAI") {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (facultyCode3Arr[j] == "FAC10" & degreeTitle1Arr[j] != null) {
		// 				if (degreeCodeArr[j] != null) {
		// 					if (degreeCodeArr.indexOf(degreeCodeArr[j]) == degreeCodeArr.lastIndexOf(degreeCodeArr[j]) || (degreeCodeArr.indexOf(degreeCodeArr[j]) != degreeCodeArr.lastIndexOf(degreeCodeArr[j]) && degreeCodeArr.indexOf(degreeCodeArr[j]) == j)) {
		// 						programName += "<option  id='" + degreeTitleArr[j] + "' title='" + degreeCodeArr[j] + "' " + ((dataRep["selectedDegreeName"] == degreeTitleArr[j]) ? "selected" : "") + " >" + degreeTitleArr[j] + "</option>";
		// 					}
		// 				}
		// 			}
		// 		}

		// 	}
		// 	else {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (degreeCodeArr[j] != null) {
		// 				if (degreeCodeArr.indexOf(degreeCodeArr[j]) == degreeCodeArr.lastIndexOf(degreeCodeArr[j]) || (degreeCodeArr.indexOf(degreeCodeArr[j]) != degreeCodeArr.lastIndexOf(degreeCodeArr[j]) && degreeCodeArr.indexOf(degreeCodeArr[j]) == j)) {
		// 					programName += "<option  id='" + degreeTitleArr[j] + "' title='" + degreeCodeArr[j] + "' " + ((dataRep["selectedDegreeName"] == degreeTitleArr[j]) ? "selected" : "") + " >" + degreeTitleArr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		str = '<form id="formUploadExaminationResultsServer">';
		str += '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';


		str += "<div id='updateApplicantList'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="form-group row">';

		// if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Head of the Department') {
		// 	str += '<div class="col-sm-4">';
		// 	str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		// 	str += '<div class="col-sm-9" style="display: inline-flex;">';
		// 	str += '<select class="form-control form-control-sm"  id="degreeWiseResults" name="degreeWiseResults"  onchange="dataRep[this.id]=this.selectedIndex;updateUploadTitle()">';
		// 	str += programName;
		// 	str += programName1;
		// 	str += '</select>';
		// 	str += '</div></div>';
		// }
		// else {
		// 	str += '<div class="col-sm-4">';
		// 	str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		// 	str += '<div class="col-sm-9" style="display: inline-flex;">';
		// 	str += '<select class="form-control form-control-sm" id="degreeWiseResults" name="degreeWiseResults" onchange="dataRep[this.id]=this.selectedIndex;updateUploadTitle()">';
		// 	str += programName;
		// 	str += '</select>';
		// 	str += '</div></div>';
		// }

		str += '<div class="col-xl-6 col-lg-6 col-md-12">';
		str += '<div class="col-xl-4 col-lg-4 col-md-12" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		str += '<div class="col-xl-8 col-lg-8 col-md-12" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedDegreeName" name="degreeWiseResults" onchange="dataRep[this.id]=this.selectedIndex;updateUploadTitle()">';
		str += programName;
		str += '</select>';
		str += '</div></div>';


		let date = new Date().getFullYear();


		str += '<div class="col-xl-6 col-lg-6 col-md-12">'
		str += '<div class="col-xl-4 col-lg-4 col-md-12" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-xl-8 col-lg-8 col-md-12" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="batch_year" onchange="updateUploadTitle()">';
		str += "<option>Please scroll down to see the records</option>";
		for (i = 2014; i <= date + 1; i++) {
			str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
		}

		str += '</select>';
		str += '</div>';
		str += '</div>';

		str += '<div class="col-xl-6 col-lg-6 col-md-12">'
		str += '<div class="col-xl-4 col-lg-4 col-md-12" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Semester </label></div>';
		str += '<div class="col-xl-8 col-lg-8 col-md-12" style="display: inline-flex;">';
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem1' class='form-check-input' name='uploadSemester' value='1' onclick='dataRep[this.name]=this.value;updateUploadTitle()' " + ((dataRep["selectedSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem2' class='form-check-input' name='uploadSemester' value='2' onclick='dataRep[this.name]=this.value;updateUploadTitle()' " + ((dataRep["selectedSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem3' class='form-check-input' name='uploadSemester' value='3' onclick='dataRep[this.name]=this.value;updateUploadTitle()' " + ((dataRep["selectedSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem4' class='form-check-input' name='uploadSemester' value='4' onclick='dataRep[this.name]=this.value;updateUploadTitle()' " + ((dataRep["selectedSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div></div>";
		str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='Upsem0' class='form-check-input' name='uploadSemester' value='0' onclick='dataRep[this.name]=this.value;updateUploadTitle()' " + ((dataRep["selectedSemester"] == '0') ? "checked" : "") + ">All<i class='input-helper'></i></label></div></div>";

		str += '</div>';
		str += '</div>';
		str += '</div>';


		str += '<div class="form-group row">'
		str += '<div class="col-xl-6 col-lg-6 col-md-12">'
		str += '<div class="col-xl-4 col-lg-4 col-md-12" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Subjects</label></div>';
		str += '<div class="col-xl-8 col-lg-8 col-md-12" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" name="subjectUPTitle" id="subjectUPTitle" onchange="enableUpDownload()">';
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
		str += '<button type="button" class="btn btn-primary" style="display:none" id="ex_download" onclick="examDownloadSheet()">Download Final Mark Sheet</button>';
		str += '</div>';
		str += '<div class="col-sm-8">';

		str += '<div class="row"><div class="offset-sm-4 col-sm-6">';
		str += '<input type="file" name="fileToUpload" id="fileToUpload" accept=".csv" class="customUpload form-control form-control-sm" style="padding: 0;border: 1px solid #ccc;display:none;">';
		str += '</div>';
		str += '<div class="col-sm-2">';
		str += '<input type="button" class="btn btn-primary" id="ex_upload" style="display:none;" value="Upload Results" onclick="examUploadSheet()">';

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
		str += '<input type="button" class="btn btn-primary" value="Grades" onclick="examDownloadSubjectGrades()">';
		str += '<input type="button" class="btn btn-primary" value="Marks" onclick="examDownloadSubjectMarks()">';
		str += '</div></div>';
		str += '</div>';




		str += '<div class="row" id="ex_downloadSem">';
		str += '<div class="col-sm-12"><div class="template-demo">';
		str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 1.5rem;font-size: 18px;font-weight: 500;">Semester Vise : </label>';
		str += '<input type="button" class="btn btn-primary" value="Grades" onclick="examDownloadSemesterGrades()">';
		str += '<input type="button" class="btn btn-primary" value="Marks" onclick="examDownloadSemesterMarks()">';
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


		// str += "<div class='showhim' id='ex_downloadSub' style='display:none;width: 100%;'>";
		// str += "<div class='showme'>"
		// str += '<input type="button" style="margin-top:1px;float:left" class="btnD" value="Grades" onclick="examDownloadSubjectGrades()">';
		// str += '<input type="button" style="margin-top:1px;float:left" class="btnD" value="Marks" onclick="examDownloadSubjectMarks()">';
		// str += "</div>";
		// str += "<div class='ok'>"
		// str += '<input type="button" style="margin-top:1px;float:left" class="btnD" value="Results (Subject)">';
		// str += "</div>";
		// str += "</div>";

		// str += "<div class='showhim' id='ex_downloadSem' style='display:none;width: 100%;'>";
		// str += "<div class='showme'>"
		// str += '<input type="button" style="margin-top:1px;float:left" class="btnD" value="Grades" onclick="examDownloadSemesterGrades()">';
		// str += '<input type="button" style="margin-top:1px;float:left" class="btnD" value="Marks" onclick="examDownloadSemesterMarks()">';
		// str += "</div>";
		// str += "<div class='ok'>"
		// str += '<input type="button" style="margin-top:1px;float:left" class="btnD" value="Results (Semester)">';

		// str += "</div>";
		// str += "</div>";
		// str += "<div class='showhim' id='ex_downloadYear' style='display:none;width: 100%;'>";
		// str += "<div class='showme'>"
		// str += '<input type="button" style="margin-top:1px;float:left" class="btnD" value="Grades" onclick="examDownloadYearGrades()">';
		// str += '<input type="button" style="margin-top:1px;float:left" class="btnD" value="Marks" onclick="examDownloadYearMarks()">';
		// str += "</div>";
		// str += "<div class='ok'>"
		// str += '<input type="button" style="margin-top:1px;float:left" class="btnD" value="Results (Year)">';
		// str += "</div>";
		// str += "</div>";

		str += "<div style='clear:both'>";
		str += '<input type="button" id="ex_fulReportDownload" style="margin-top:1px;float:left; display:none" class="btnD" value="Download Final Results Sheet" onclick="examDownloadFinalReport();">';
		str += "</div>";

		str += "<div style='clear:both'>";
		str += '<input type="button" id="ex_passDownload" style="margin-top:1px;float:left; display:none" class="btnD" value="Download Pass List" onclick="examDownloadPassReport();">';
		str += "</div>";
		str += '</fieldset></div></div>';
		str += '</form>';


	}
	return str;

}

function updateUploadTitle() {

	if (document.getElementById('selectedDegreeName').selectedIndex != 0 && document.getElementById('batch_year').selectedIndex != 0) {


		let postData = {
			action: "getSubject",
			degreeCode: document.getElementById('selectedDegreeName').value,
			semester: dataRep["uploadSemester"],
			achedamicYear: document.getElementById('batch_year').value,
			authcode: authcode,
			username: dataRep['userId'],
		};

		$.ajax({
			type: 'POST',
			url: 'rules/subject.php',
			data: postData,
			dataType: 'json',
			success: function (response) {

				console.log(response);
				selectionSubCodeList = "";
				// var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
				// var tempYear = document.getElementById('batch_year').value;
				document.getElementById('subjectUPTitle').innerHTML = "";
				document.getElementById('subjectUPName').value = "";
				document.getElementById('subjectshowTitle').innerHTML = "";
				document.getElementById('subjectshowTitleDownload').innerHTML = "";
				document.getElementById('subjectshowTitleMainDiv').style.display = "none";
				document.getElementById('subjectshowTitleMainDivDownload').style.display = "none";
				document.getElementById('ex_download').style.display = "none";
				document.getElementById('ex_upload').style.display = "none";
				document.getElementById('ex_downloadSub').style.display = "none";
				document.getElementById('ex_downloadSem').style.display = "";
				document.getElementById('fileToUpload').style.display = "none";
				document.getElementById('ex_fulReportDownload').style.display = "none";
				document.getElementById('ex_passDownload').style.display = "none";
				document.getElementById('fileToUpload').value = "";
				document.getElementById("msgArea").innerHTML = "";
				selectionSubCodeList = "";
				if (sub_CodeLength > 0) {
					selectionSubCodeList += "<option>Please Select Subject</option>";

				}

				$.each(response, function (index, subject) {
					if (subject.subjectCode != undefined)
						selectionSubCodeList += "<option value='" + subject.subjectCode + "'> " + subject.subjectTitle + " (" + subject.subjectCode + ")</option>";
				});

				// for (i = 0; i < sub_CodeLength; i++) {
				// 	if (tmpDId == sub_degreeCodeArr[i] && tempYear == sub_academicYearArr[i] && dataRep["uploadSemester"] == sub_semesterArr[i]) {
				// 		selectionSubCodeList += "<option>" + sub_subjectCodeArr[i] + "</option>";
				// 	}
				// }
				document.getElementById('subjectUPTitle').innerHTML = selectionSubCodeList;
			}, error: function (error) {
				console.log(error)
				// console.log(postData)

			}
		});


	} else if (document.getElementById('selectedDegreeName').selectedIndex != 0 && document.getElementById('batch_year').selectedIndex != 0) {
		document.getElementById('ex_downloadYear').style.display = "";
		document.getElementById('ex_fulReportDownload').style.display = "";
		document.getElementById('ex_passDownload').style.display = "";
	} else {
		document.getElementById('ex_downloadYear').style.display = "none";
		document.getElementById('ex_downloadSem').style.display = "none";
		document.getElementById('subjectUPTitle').value = "";
		document.getElementById('subjectUPName').value = "";
		document.getElementById('subjectshowTitle').innerHTML = "";
		document.getElementById('subjectshowTitleDownload').innerHTML = "";

		document.getElementById('subjectshowTitleMainDiv').style.display = "none";
		document.getElementById('subjectshowTitleMainDivDownload').style.display = "none";


		document.getElementById('ex_download').style.display = "none";
		document.getElementById('ex_upload').style.display = "none";
		document.getElementById('ex_downloadSub').style.display = "none";
		document.getElementById('fileToUpload').style.display = "none";
		document.getElementById('ex_fulReportDownload').style.display = "none";
		document.getElementById('ex_passDownload').style.display = "none";
		document.getElementById('fileToUpload').value = "";
		document.getElementById("msgArea").innerHTML = "";
	}
	// document.getElementById('selectionSubCodeList').innerHTML = "";
}

function enableUpDownload() {
	if (document.getElementById('selectedDegreeName').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& document.getElementById('subjectUPTitle').value != "" && document.getElementById('subjectUPTitle').value != "Please Select Subject") {
		// var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		// var tempYear = document.getElementById('batch_year').value;
		// for (i = 0; i < sub_CodeLength; i++) {
		// if (tmpDId == sub_degreeCodeArr[i] && tempYear == sub_academicYearArr[i] && dataRep["uploadSemester"] == sub_semesterArr[i]
		// 	&& document.getElementById('subjectUPTitle').value == sub_subjectCodeArr[i]) {

		document.getElementById('subjectUPName').value = $("#subjectUPTitle option:selected").text();
		document.getElementById('subjectshowTitle').innerHTML = "Upload Results (" + $("#subjectUPTitle option:selected").text() + ")";
		document.getElementById('subjectshowTitleDownload').innerHTML = "Download Results (" + $("#subjectUPTitle  option:selected").text() + ")";
		document.getElementById('subjectshowTitleMainDiv').style.display = "block";
		document.getElementById('subjectshowTitleMainDivDownload').style.display = "block";

		document.getElementById('ex_download').style.display = "";
		document.getElementById('ex_downloadSem').style.display = "flex";
		document.getElementById('ex_downloadYear').style.display = "flex";
		document.getElementById('ex_downloadSub').style.display = "flex";
		document.getElementById('ex_upload').style.display = "";
		document.getElementById('fileToUpload').style.display = "";
		document.getElementById('ex_fulReportDownload').style.display = "";
		document.getElementById('ex_passDownload').style.display = "";
		return;
		// }
		// }

	} else {
		document.getElementById('ex_downloadYear').style.display = "none";
		document.getElementById('ex_downloadSem').style.display = "none";
		document.getElementById('subjectUPTitle').value = "";
		document.getElementById('subjectUPName').value = "";
		document.getElementById('subjectshowTitle').innerHTML = "";
		document.getElementById('subjectshowTitleDownload').innerHTML = "";

		document.getElementById('subjectshowTitleMainDiv').style.display = "none";
		document.getElementById('subjectshowTitleMainDivDownload').style.display = "none";


		document.getElementById('ex_download').style.display = "none";
		document.getElementById('ex_upload').style.display = "none";
		document.getElementById('ex_downloadSub').style.display = "none";
		document.getElementById('fileToUpload').style.display = "none";
		// document.getElementById('ex_downloadAtt').style.display = "none";
		// document.getElementById('ex_downloadMrk').style.display = "none";
		// document.getElementById('ex_downloadStickers').style.display = "none";
		//document.getElementById('ex_downloadMod').style.display = "none";
		document.getElementById('ex_fulReportDownload').style.display = "none";
		document.getElementById('ex_passDownload').style.display = "none";
		document.getElementById('fileToUpload').value = "";
		document.getElementById("msgArea").innerHTML = "";
	}
}

function examDownloadSheet() {
	if (document.getElementById('selectedDegreeName').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {

		let tmpDId = document.getElementById('selectedDegreeName').value;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		let SubName = document.getElementById('subjectUPName').value;
		let SubCode = document.getElementById('subjectUPTitle').value;
		let BatchYear = document.getElementById('batch_year').value;
		resetResultUpload();

		let postData = {
			action: "data4DownloadStudentMarks",
			degreeCode: dataRep["degCode"],
			SubjectCode: dataRep["degSub"],
			Semester: dataRep["degSem"],
			AchademicYear: dataRep["acYear"],
			authcode: authcode,
			username: dataRep['userId'],
		};

		$.ajax({
			type: 'POST',
			url: 'rules/students.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				console.log(response);

				ex_studentNoArr.length = 0;
				ex_studentNameArr.length = 0;
				ex_studentMediumArr.length = 0;
				ex_CodeLength = 0;
				$.each(response, function (index, data) {
					ex_studentNoArr[ex_CodeLength] = data.studentNoMarks;
					ex_studentNameArr[ex_CodeLength] = data.studentName;
					ex_studentMediumArr[ex_CodeLength] = data.studentMedium;
					ex_CodeLength++;
				});
				console.log(ex_CodeLength)
				console.log(ex_studentMediumArr)
				console.log(ex_studentNoArr)
				if (ex_CodeLength != 0) {
					//alert(ex_studentMediumArr);

					//eng
					let data = new Array();
					let engCount = 0;
					//sin
					let dataSin = new Array();
					let sinCount = 0;
					//eng
					for (i = 0; i < ex_CodeLength; i++) {
						if (ex_studentMediumArr[i] == "en") {
							data[i] = [[ex_studentNoArr[i], ex_studentNameArr[i], '', '']];
							engCount++;
						}
						else if (ex_studentMediumArr[i] == "si") {
							dataSin[i] = [[ex_studentNoArr[i], ex_studentNameArr[i], '', '']];
							sinCount++;
						}
					}

					//eng
					let csvHead = 'Student No,Name,Examiner 1,Examiner 2\n';
					data.forEach(function (row) {
						csvHead += row.join(',');
						csvHead += "\n";
					});

					//sin
					let csvHeadSin = 'Student No,Name,Examiner 1,Examiner 2\n';
					dataSin.forEach(function (row) {
						csvHeadSin += row.join(',');
						csvHeadSin += "\n";
					});


					//eng
					let exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ").csv";
					let csvData = new Blob([csvHead], { type: 'text/csv;charset=utf-8;' });

					//sin
					let exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ").csv";
					let csvDataSin = new Blob([csvHeadSin], { type: 'text/csv;charset=utf-8;' });

					//IE11 & Edge
					//eng
					if (engCount != 0) {
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvData, exportFilename);
						} else {
							//In FF link must be added to DOM to be clicked
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvData);
							link.setAttribute('download', exportFilename);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}
					}

					//sin
					if (sinCount != 0) {
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvDataSin, exportFilenameSin);
						} else {
							//In FF link must be added to DOM to be clicked
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvDataSin);
							link.setAttribute('download', exportFilenameSin);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}
					}

				} else {

				}




			}, error: function (error) {
				console.log(error)
				// console.log(postData)

			}
		});







		// sendForm('data4DownloadStudentMarks');

		// examDownloadSheetTemp(degTitle, SubName, SubCode, BatchYear);

	}
}

function examDownloadMark() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
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

		resetResultUpload()
		sendForm('data4DownloadStudentMarks');

		examDownloadMarkSheetTemp(degTitle, SubName, SubCode, BatchYear);

	}
}

function examDownloadModeratingSheet() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
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

		resetResultUpload()
		sendForm('data4DownloadStudentMarks');

		examDownloadModeratingSheetTemp(degTitle, SubName, SubCode, BatchYear);

	}
}


function examDownloadStickers() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
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

		resetResultUpload()
		sendForm('data4DownloadStudentMarks');

		examDownloadStickersTemp(degTitle, SubName, SubCode, BatchYear);

	}
}

// function examUploadSheet(){
// var exportFilename = document.getElementById('batch_year').value + " - " + document.getElementById('subjectUPName').value+" ("+document.getElementById('subjectUPTitle').value+").csv";
// if(document.getElementById("fileToUpload").value==""){
// //alert("ok");
// alert("Please select a file to upload");
// }else if(!document.getElementById("fileToUpload").value.includes(".csv")){
// //alert("ok1");
// alert("Please upload a .csv file");
// }/*else if(document.getElementById("fileToUpload").value != exportFilename){
// alert("Please import correct file - : " +exportFilename);
// }*/else{
// //alert("ok2");
// var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
// var form=document.getElementById("formUploadExaminationResultsServer");
// var formData = new FormData(form);
// //formData.append("file",form);
// formData.append("action","upload");
// formData.append("interface","uploadMarksList");
// formData.append("degreeCode",tmpDId);
// formData.append("achedamicYear",document.getElementById('batch_year').value);
// formData.append("subjectName",document.getElementById('subjectUPTitle').value);
// isrHandle.uploadCSV(eval("clientController"), "serverController.php", formData);
// }
// }


// function examUploadSheet(){
// var exportFilename = document.getElementById('batch_year').value + " - Sinhala - " + document.getElementById('subjectUPName').value+" ("+document.getElementById('subjectUPTitle').value+").csv";

// //2018 - Sinhala - Archaeological Heritage Management (ARCH53015)

// if(document.getElementById("fileToUpload").value==""){
// alert("Please select a file to upload");
// }else if(!document.getElementById("fileToUpload").value.includes(".csv")){
// alert("Please upload a .csv file");
// }else if(document.getElementById("fileToUpload").value != exportFilename){
// //alert("Please import correct file - : " +exportFilename);
// }else{
// var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
// var status = 1;
// var form=document.getElementById("formUploadExaminationResultsServer");
// var formData = new FormData(form);
// //formData.append("file",form);
// formData.append("action","upload");
// formData.append("interface","uploadMarksList");
// formData.append("degreeCode",tmpDId);
// formData.append("achedamicYear",document.getElementById('batch_year').value);
// formData.append("subjectName",document.getElementById('subjectUPTitle').value);
// formData.append("Status",status);
// isrHandle.uploadCSV(eval("clientController"), "serverController.php", formData);
// }
// }


function examUploadSheet() {
	var exportFilename = document.getElementById('batch_year').value + " - " + document.getElementById('subjectUPName').value + " (" + document.getElementById('subjectUPTitle').value + ").csv";
	var regex = /[\/:*?"'<>|]/g;

	let filename = document.getElementById("fileToUpload").value.replace(regex, '');
	let subjectname = document.getElementById('subjectUPName').value.replace(regex, '');


	if (document.getElementById("fileToUpload").value == "") {
		alert("Please select a file to upload");
	} else if (!document.getElementById("fileToUpload").value.includes(".csv")) {
		alert("Please upload a .csv file");
	}/*else if(document.getElementById("fileToUpload").value != exportFilename){
		alert("Please import correct file - : " +exportFilename);
	}*/
	else if (!filename.includes(subjectname)) {
		//alert("Please import correct file - : ");
	} else {
		var tmpDId = document.getElementById('selectedDegreeName').value;
		var status = 1;
		var form = document.getElementById("formUploadExaminationResultsServer");

		var formData = new FormData(form);
		console.log(document.getElementById('batch_year').value)
		console.log(document.getElementById('subjectUPTitle').value)
		//formData.append("file",form);
		formData.append("action", "upload");
		formData.append("interface", "uploadMarksList");
		formData.append("degreeCode", tmpDId);
		formData.append("achedamicYear", document.getElementById('batch_year').value);
		formData.append("subjectName", document.getElementById('subjectUPTitle').value);
		formData.append("Status", status);
		isrHandle.uploadCSV(eval("clientController"), "serverController.php", formData);
	}
}





function examDownloadAttendance() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
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

		resetResultUpload()
		sendForm('data4DownloadStudentMarks');

		examDownloadAttendanceTemp(degTitle, SubName, SubCode, BatchYear);
	}
}



function examDownloadSubjectMarks() {
	if (document.getElementById('selectedDegreeName').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {
		var tmpDId = document.getElementById('selectedDegreeName').value;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = $("#selectedDegreeName option:selected").text();
		var SubName = document.getElementById('subjectUPName').value;
		var SubCode = document.getElementById('subjectUPTitle').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUpload();
		let postData = {
			action: "getExamMarkSheetData",
			degreeCode: dataRep["degCode"],
			SubjectCode: dataRep["degSub"],
			Semester: dataRep["degSem"],
			AchademicYear: dataRep["acYear"],
			authcode: authcode,
			username: dataRep['userId'],
		};

		$.ajax({
			type: 'POST',
			url: 'rules/students.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				console.log(response);
				// let batch

				tmpDownStudNoArr.length = 0;
				tmpDownStudNameArr.length = 0;
				tmpDownGradeArr.length = 0;
				tmpDownExm1Arr.length = 0;
				tmpDownExm2Arr.length = 0;
				tmpDownMarksArr.length = 0;
				ex_studentMediumArr.length = 0;
				tmpDownLength = 0;
				$.each(response, function (index, data) {
					tmpDownStudNoArr[tmpDownLength] = data.SudentNoSub;
					tmpDownStudNameArr[tmpDownLength] = data.StudentName;
					tmpDownGradeArr[tmpDownLength] = data.Grade;
					tmpDownExm1Arr[tmpDownLength] = data.Examiner1;
					tmpDownExm2Arr[tmpDownLength] = data.Examiner2;
					tmpDownMarksArr[tmpDownLength] = data.Marks;
					ex_studentMediumArr[tmpDownLength] = data.studentMedium;
					tmpDownLength++;
				});

				if (tmpDownLength != 0) {
					//en
					var engCount = 0;
					var engRowCount = 1;

					var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr += "<div id='topics1' class='info'></div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

					newStr += "<br>";
					newStr += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
					newStr += "<tr>";
					newStr += "<th style='border: 1px solid #524f4f;'>No</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Student No</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Name</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Examiner 1</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Examiner 2</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Average</th>";
					newStr += "</tr>";
					//en

					//sin
					var sinCount = 0;
					var sinRowCount = 1;

					var newStrSin = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStrSin += "<div id='topics1' class='info'></div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

					newStrSin += "<br>";
					newStrSin += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
					newStrSin += "<tr>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>No</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Student No</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Name</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Examiner 1</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Examiner 2</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Average</th>";
					newStrSin += "</tr>";
					//sin

					for (i = 0; i < tmpDownLength; i++) {

						//en
						if (ex_studentMediumArr[i] == "en") {
							if (tmpDownExm1Arr[i] == '125') {
								tmpDownExm1Arr[i] = '-';
							}
							if (tmpDownExm2Arr[i] == '125') {
								tmpDownExm2Arr[i] = '-';
							}
							if (tmpDownMarksArr[i] == '125') {
								tmpDownMarksArr[i] = '(ab)';
							}
							newStr += "<tr>";
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownExm1Arr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownExm2Arr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStr += "</tr>";
							newStr += "</div><dev><br>";
							engCount++;
							engRowCount++;
						}
						//en

						//si
						if (ex_studentMediumArr[i] == "si") {
							if (tmpDownExm1Arr[i] == '125') {
								tmpDownExm1Arr[i] = '-';
							}
							if (tmpDownExm2Arr[i] == '125') {
								tmpDownExm2Arr[i] = '-';
							}
							if (tmpDownMarksArr[i] == '125') {
								tmpDownMarksArr[i] = '(ab)';
							}
							newStrSin += "<tr>";
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownExm1Arr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownExm2Arr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStrSin += "</tr>";
							newStrSin += "</div><dev><br>";
							sinCount++;
							sinRowCount++;
						}
						//si
					}
					newStr += "</table>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coordinator...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Head of the Department...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
					//en

					//si
					newStrSin += "</table>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coordinator...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Head of the Department...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
					//si


					//en		
					var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ")Subject Marks.xls";
					var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
					//en

					//si
					var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ")Subject Marks.xls";
					var csvDataSin = new Blob([newStrSin], { type: 'text/csv;charset=utf-8;' });
					//si

					//IE11 & Edge
					if (engCount != 0) {
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
					if (sinCount != 0) {
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvDataSin, exportFilenameSin);
						} else {
							//In FF link must be added to DOM to be clicked
							var link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvDataSin);
							link.setAttribute('download', exportFilenameSin);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}
					}
					// resetResultDownload()
					// sendForm('data4DownloadsubjectDetails');
					// sendForm('data4DownloaddegreeSubjects');
				} else {
					// resetResultDownload()
					// sendForm('data4DownloadsubjectDetails');
					// sendForm('data4DownloaddegreeSubjects');
					alert("Data not available");

				}



			}, error: function (error) {
				console.log(error)
				// console.log(postData)

			}
		});


	}


}

function examDownloadSubjectGrades() {
	if (document.getElementById('selectedDegreeName').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0
		&& document.getElementById('subjectUPTitle').value != ""
		&& document.getElementById('subjectUPName').value != "") {
		let tmpDId = document.getElementById('selectedDegreeName').value;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["degSub"] = document.getElementById('subjectUPTitle').value;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		let degTitle = $("#selectedDegreeName option:selected").text();
		let SubName = document.getElementById('subjectUPName').value;
		let SubCode = document.getElementById('subjectUPTitle').value;
		let BatchYear = document.getElementById('batch_year').value;

		resetResultUpload();
		let postData = {
			action: "getExamMarkSheetData",
			degreeCode: dataRep["degCode"],
			SubjectCode: dataRep["degSub"],
			Semester: dataRep["degSem"],
			AchademicYear: dataRep["acYear"],
			authcode: authcode,
			username: dataRep['userId'],
		};

		$.ajax({
			type: 'POST',
			url: 'rules/students.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				tmpDownStudNoArr.length = 0;
				tmpDownStudNameArr.length = 0;
				tmpDownGradeArr.length = 0;
				tmpDownExm1Arr.length = 0;
				tmpDownExm2Arr.length = 0;
				tmpDownMarksArr.length = 0;
				ex_studentMediumArr.length = 0;
				tmpDownLength = 0;
				$.each(response, function (index, data) {
					tmpDownStudNoArr[tmpDownLength] = data.SudentNoSub;
					tmpDownStudNameArr[tmpDownLength] = data.StudentName;
					tmpDownGradeArr[tmpDownLength] = data.Grade;
					tmpDownExm1Arr[tmpDownLength] = data.Examiner1;
					tmpDownExm2Arr[tmpDownLength] = data.Examiner2;
					tmpDownMarksArr[tmpDownLength] = data.Marks;
					ex_studentMediumArr[tmpDownLength] = data.studentMedium;
					tmpDownLength++;
				});

				if (tmpDownLength != 0) {

					//en
					let engCount = 0;
					let engRowCount = 1;

					let newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr += "<div id='topics1' class='info'></div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

					newStr += "<br>";
					newStr += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
					newStr += "<tr>";
					newStr += "<th style='border: 1px solid #524f4f;'>No</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Student No</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Name</th>";
					newStr += "<th style='border: 1px solid #524f4f;' >Grade</th>";
					newStr += "</tr>";

					//en

					//sin
					let sinCount = 0;
					let sinRowCount = 1;

					let newStrSin = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStrSin += "<div id='topics1' class='info'></div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

					newStrSin += "<br>";
					newStrSin += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
					newStrSin += "<tr>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>No</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Student No</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Name</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;' >Grade</th>";
					newStrSin += "</tr>";

					//sin

					for (i = 0; i < tmpDownLength; i++) {

						//en
						if (ex_studentMediumArr[i] == "en") {
							if (tmpDownGradeArr[i] == '-') {
								tmpDownGradeArr[i] = '(ab)';
							}
							newStr += "<tr>";
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStr += "</tr>";
							newStr += "</div><dev><br>";
							engCount++;
							engRowCount++;
						}
						//en

						//si
						if (ex_studentMediumArr[i] == "si") {
							if (tmpDownGradeArr[i] == '-') {
								tmpDownGradeArr[i] = '(ab)';
							}
							newStrSin += "<tr>";
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStrSin += "</tr>";
							newStrSin += "</div><dev><br>";
							sinCount++;
							sinRowCount++;
						}
						//si
					}

					//en
					newStr += "</table>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coordinator...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Head of the Department...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
					//en

					//si
					newStrSin += "</table>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coordinator...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Head of the Department...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
					//si

					//en
					let exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ")Subject Grades.xls";
					let csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
					//en

					//si
					let exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ")Subject Grades.xls";
					let csvDataSin = new Blob([newStrSin], { type: 'text/csv;charset=utf-8;' });
					//si

					//IE11 & Edge

					if (engCount != 0) {
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvData, exportFilename);
						} else {
							//In FF link must be added to DOM to be clicked
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvData);
							link.setAttribute('download', exportFilename);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}
					}

					if (sinCount != 0) {
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvDataSin, exportFilenameSin);
						} else {
							//In FF link must be added to DOM to be clicked
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvDataSin);
							link.setAttribute('download', exportFilenameSin);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}
					}
				} else {
					// resetResultDownload()
					alert("Data not available");

				}

			}, error: function (error) {
				console.log(error)
				// console.log(postData)

			}
		});


	}
}


//USE FOR MULTIPLE SHEET DOWNLOAD
function MyexamDownloadSubjectMarks() {
	let degTitle = "Master of Arts in Music Degree Programme";
	let BatchYear = "2018";
	let subjectCodes = ["MMUS51014", "MMUS51024", "MMUS51154", "MMUS52034", "MMUS52043", "MMUS52055", "MMUS5306A", "MMUS5307A", "MMUS5308A", "MMUS5309A", "MMUS5310A", "MMUS5311A", "MMUS5312A", "MMUS5313A", "MMUS5314A", "MMUS5316A", "MMUS61014", "MMUS63026", "MMUS6303A", "MMUS6304A", "MMUS6305A", "MMUS6306A", "MMUS6307A", "MMUS6308A", "MMUS6309A", "MMUS6310A", "MMUS6311A", "MMUS6312A", "MMUS6313A"];
	let semesters = ["1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"];
	let subName = ["Sri Lankan Music I â€“ from Antiquity to the 20th Century", "History and Theory of Hindustani and Carnatic Music", "History and Theory of Western Music", "Music Education and Music in Education", "Global trends in Music ", "Thesis Writing I- Research Methodology and Proposal Writing", "Practical - North Indian Classical Music â€“Vocal I", "Practical - North Indian Classical Music- Instrumental -Violin- I", "Practical - North Indian Classical Music- Instrumental â€“Sitar-I", "Practical - North Indian Classical Music- Instrumental â€“Esraj-I", "Practical - North Indian Classical Music- Instrumental â€“Tabla- I", "Western Music- Music Theory, and Keyboard Proficiency", "Western Music- Guitar- Classical and Flamenco", "Western Music- Violin", "Western Music- Violoncello*", "Practical - North Indian Classical Music- Instrumental  â€“Flute-I", "Sri Lankan Music II- Contemporary Sri Lankan Music", "Music Composition and Studio Art", "Thesis Writing II-Independent Research Thesis", "Practical - North Indian Classical Music- Vocal II", "Practical - North Indian Classical Music- Instrumental -Violin-II ", "Practical - North Indian Classical Music- Instrumental â€“Sitar-II", "Practical - North Indian Classical Music- Instrumental â€“Esraj-II", "Practical - North Indian Classical Music- Instrumental â€“Tabla-II", "Practical - Western Music - Harmony and Piano Recital", "Western Music- Guitar- Classical and Flamenco ", "Western Music- Violin", "Western Music- Violoncello", "Practical - North Indian Classical Music- Instrumental â€“Flute-II"];
	for (let i = 0; i < subjectCodes.length; i++) {
		resetResultUpload();
		let SubCode = subjectCodes[i];
		let SubName = subName[i];
		let postData = {
			action: "getMyExamMarkSheetData",
			degreeCode: "MAMUSC",
			SubjectCode: subjectCodes[i],
			Semester: semesters[i],
			AchademicYear: "2018",
			SubCode: SubCode,
			SubName: SubName,
			BatchYear: BatchYear,
			degTitle: degTitle,
			authcode: authcode,
			username: dataRep['userId'],
		};



		$.ajax({
			type: 'POST',
			url: 'rules/students.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				console.log(response);
				// let batch
				let responseData = response.responseReturn;
				let degTitle = response.degTitle;
				let SubName = response.SubName;
				let SubCode = response.SubCode;
				let BatchYear = response.BatchYear;
				console.log(responseData);
				alert(SubCode);
				tmpDownStudNoArr.length = 0;
				tmpDownStudNameArr.length = 0;
				tmpDownGradeArr.length = 0;
				tmpDownExm1Arr.length = 0;
				tmpDownExm2Arr.length = 0;
				tmpDownMarksArr.length = 0;
				ex_studentMediumArr.length = 0;
				tmpDownLength = 0;
				$.each(responseData, function (index, data) {
					tmpDownStudNoArr[tmpDownLength] = data.SudentNoSub;
					tmpDownStudNameArr[tmpDownLength] = data.StudentName;
					tmpDownGradeArr[tmpDownLength] = data.Grade;
					tmpDownExm1Arr[tmpDownLength] = data.Examiner1;
					tmpDownExm2Arr[tmpDownLength] = data.Examiner2;
					tmpDownMarksArr[tmpDownLength] = data.Marks;
					ex_studentMediumArr[tmpDownLength] = data.studentMedium;
					tmpDownLength++;
				});

				if (tmpDownLength != 0) {
					//en
					var engCount = 0;
					var engRowCount = 1;

					var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr += "<div id='topics1' class='info'></div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

					newStr += "<br>";
					newStr += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
					newStr += "<tr>";
					newStr += "<th style='border: 1px solid #524f4f;'>No</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Student No</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Name</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Examiner 1</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Examiner 2</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Average</th>";
					newStr += "</tr>";
					//en

					//sin
					var sinCount = 0;
					var sinRowCount = 1;

					var newStrSin = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStrSin += "<div id='topics1' class='info'></div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

					newStrSin += "<br>";
					newStrSin += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
					newStrSin += "<tr>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>No</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Student No</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Name</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Examiner 1</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Examiner 2</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Average</th>";
					newStrSin += "</tr>";
					//sin

					for (i = 0; i < tmpDownLength; i++) {

						//en
						if (ex_studentMediumArr[i] == "en") {
							if (tmpDownExm1Arr[i] == '125') {
								tmpDownExm1Arr[i] = '-';
							}
							if (tmpDownExm2Arr[i] == '125') {
								tmpDownExm2Arr[i] = '-';
							}
							if (tmpDownMarksArr[i] == '125') {
								tmpDownMarksArr[i] = '(ab)';
							}
							newStr += "<tr>";
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownExm1Arr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownExm2Arr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStr += "</tr>";
							newStr += "</div><dev><br>";
							engCount++;
							engRowCount++;
						}
						//en

						//si
						if (ex_studentMediumArr[i] == "si") {
							if (tmpDownExm1Arr[i] == '125') {
								tmpDownExm1Arr[i] = '-';
							}
							if (tmpDownExm2Arr[i] == '125') {
								tmpDownExm2Arr[i] = '-';
							}
							if (tmpDownMarksArr[i] == '125') {
								tmpDownMarksArr[i] = '(ab)';
							}
							newStrSin += "<tr>";
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownExm1Arr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownExm2Arr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStrSin += "</tr>";
							newStrSin += "</div><dev><br>";
							sinCount++;
							sinRowCount++;
						}
						//si
					}
					newStr += "</table>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coordinator...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Head of the Department...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
					//en

					//si
					newStrSin += "</table>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coordinator...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Head of the Department...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
					//si


					//en		
					var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ")Subject Marks.xls";
					var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
					//en

					//si
					var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ")Subject Marks.xls";
					var csvDataSin = new Blob([newStrSin], { type: 'text/csv;charset=utf-8;' });
					//si

					//IE11 & Edge
					if (engCount != 0) {
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
					if (sinCount != 0) {
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvDataSin, exportFilenameSin);
						} else {
							//In FF link must be added to DOM to be clicked
							var link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvDataSin);
							link.setAttribute('download', exportFilenameSin);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}
					}
					// resetResultDownload()
					// sendForm('data4DownloadsubjectDetails');
					// sendForm('data4DownloaddegreeSubjects');
				} else {
					// resetResultDownload()
					// sendForm('data4DownloadsubjectDetails');
					// sendForm('data4DownloaddegreeSubjects');
					alert("Data not available");

				}



			}, error: function (error) {
				console.log(error)
				// console.log(postData)

			}
		});

	}

}

//USE FOR MULTIPLE SHEET DOWNLOAD
function MYexamDownloadSubjectGrades() {

	let degTitle = "Master of Arts in Music Degree Programme";
	let BatchYear = "2018";
	let subjectCodes = ["MMUS51014", "MMUS51024", "MMUS51154", "MMUS52034", "MMUS52043", "MMUS52055", "MMUS5306A", "MMUS5307A", "MMUS5308A", "MMUS5309A", "MMUS5310A", "MMUS5311A", "MMUS5312A", "MMUS5313A", "MMUS5314A", "MMUS5316A", "MMUS61014", "MMUS63026", "MMUS6303A", "MMUS6304A", "MMUS6305A", "MMUS6306A", "MMUS6307A", "MMUS6308A", "MMUS6309A", "MMUS6310A", "MMUS6311A", "MMUS6312A", "MMUS6313A"];
	let semesters = ["1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"];
	let subName = ["Sri Lankan Music I â€“ from Antiquity to the 20th Century", "History and Theory of Hindustani and Carnatic Music", "History and Theory of Western Music", "Music Education and Music in Education", "Global trends in Music ", "Thesis Writing I- Research Methodology and Proposal Writing", "Practical - North Indian Classical Music â€“Vocal I", "Practical - North Indian Classical Music- Instrumental -Violin- I", "Practical - North Indian Classical Music- Instrumental â€“Sitar-I", "Practical - North Indian Classical Music- Instrumental â€“Esraj-I", "Practical - North Indian Classical Music- Instrumental â€“Tabla- I", "Western Music- Music Theory, and Keyboard Proficiency", "Western Music- Guitar- Classical and Flamenco", "Western Music- Violin", "Western Music- Violoncello*", "Practical - North Indian Classical Music- Instrumental  â€“Flute-I", "Sri Lankan Music II- Contemporary Sri Lankan Music", "Music Composition and Studio Art", "Thesis Writing II-Independent Research Thesis", "Practical - North Indian Classical Music- Vocal II", "Practical - North Indian Classical Music- Instrumental -Violin-II ", "Practical - North Indian Classical Music- Instrumental â€“Sitar-II", "Practical - North Indian Classical Music- Instrumental â€“Esraj-II", "Practical - North Indian Classical Music- Instrumental â€“Tabla-II", "Practical - Western Music - Harmony and Piano Recital", "Western Music- Guitar- Classical and Flamenco ", "Western Music- Violin", "Western Music- Violoncello", "Practical - North Indian Classical Music- Instrumental â€“Flute-II"];
	for (let i = 0; i < subjectCodes.length; i++) {
		resetResultUpload();
		let SubCode = subjectCodes[i];
		let SubName = subName[i];
		let postData = {
			action: "getMyExamMarkSheetData",
			degreeCode: "MAMUSC",
			SubjectCode: subjectCodes[i],
			Semester: semesters[i],
			AchademicYear: "2018",
			SubCode: SubCode,
			SubName: SubName,
			BatchYear: BatchYear,
			degTitle: degTitle,
			authcode: authcode,
			username: dataRep['userId'],
		};



		$.ajax({
			type: 'POST',
			url: 'rules/students.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				console.log(response);
				// let batch
				let responseData = response.responseReturn;
				let degTitle = response.degTitle;
				let SubName = response.SubName;
				let SubCode = response.SubCode;
				let BatchYear = response.BatchYear;
				console.log(responseData);
				alert(SubCode);
				tmpDownStudNoArr.length = 0;
				tmpDownStudNameArr.length = 0;
				tmpDownGradeArr.length = 0;
				tmpDownExm1Arr.length = 0;
				tmpDownExm2Arr.length = 0;
				tmpDownMarksArr.length = 0;
				ex_studentMediumArr.length = 0;
				tmpDownLength = 0;
				$.each(responseData, function (index, data) {
					tmpDownStudNoArr[tmpDownLength] = data.SudentNoSub;
					tmpDownStudNameArr[tmpDownLength] = data.StudentName;
					tmpDownGradeArr[tmpDownLength] = data.Grade;
					tmpDownExm1Arr[tmpDownLength] = data.Examiner1;
					tmpDownExm2Arr[tmpDownLength] = data.Examiner2;
					tmpDownMarksArr[tmpDownLength] = data.Marks;
					ex_studentMediumArr[tmpDownLength] = data.studentMedium;
					tmpDownLength++;
				});

				if (tmpDownLength != 0) {

					//en
					let engCount = 0;
					let engRowCount = 1;

					let newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr += "<div id='topics1' class='info'></div>";
					// newStr += '<img src="'+hostname+'/img/wordTitle3.png" width="580"/>';
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

					newStr += "<br>";
					newStr += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
					newStr += "<tr>";
					newStr += "<th style='border: 1px solid #524f4f;'>No</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Student No</th>";
					newStr += "<th style='border: 1px solid #524f4f;'>Name</th>";
					newStr += "<th style='border: 1px solid #524f4f;' >Grade</th>";
					newStr += "</tr>";

					//en

					//sin
					let sinCount = 0;
					let sinRowCount = 1;

					let newStrSin = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStrSin += "<div id='topics1' class='info'></div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
					newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

					newStrSin += "<br>";
					newStrSin += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
					newStrSin += "<tr>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>No</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Student No</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;'>Name</th>";
					newStrSin += "<th style='border: 1px solid #524f4f;' >Grade</th>";
					newStrSin += "</tr>";

					//sin

					for (i = 0; i < tmpDownLength; i++) {

						//en
						if (ex_studentMediumArr[i] == "en") {
							if (tmpDownGradeArr[i] == '-') {
								tmpDownGradeArr[i] = '(ab)';
							}
							newStr += "<tr>";
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';
							newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStr += "</tr>";
							newStr += "</div><dev><br>";
							engCount++;
							engRowCount++;
						}
						//en

						//si
						if (ex_studentMediumArr[i] == "si") {
							if (tmpDownGradeArr[i] == '-') {
								tmpDownGradeArr[i] = '(ab)';
							}
							newStrSin += "<tr>";
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStrSin += "</tr>";
							newStrSin += "</div><dev><br>";
							sinCount++;
							sinRowCount++;
						}
						//si
					}

					//en
					newStr += "</table>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coordinator...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Head of the Department...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
					newStr += "<br>";
					newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
					//en

					//si
					newStrSin += "</table>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coordinator...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date.....................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Head of the Department...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
					newStrSin += "<br>";
					newStrSin += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
					//si

					//en
					let exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ")Subject Grades.xls";
					let csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
					//en

					//si
					let exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ")Subject Grades.xls";
					let csvDataSin = new Blob([newStrSin], { type: 'text/csv;charset=utf-8;' });
					//si

					//IE11 & Edge

					if (engCount != 0) {
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvData, exportFilename);
						} else {
							//In FF link must be added to DOM to be clicked
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvData);
							link.setAttribute('download', exportFilename);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}
					}

					if (sinCount != 0) {
						if (navigator.msSaveBlob) {
							navigator.msSaveBlob(csvDataSin, exportFilenameSin);
						} else {
							//In FF link must be added to DOM to be clicked
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(csvDataSin);
							link.setAttribute('download', exportFilenameSin);
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}
					}

					// resetResultDownload()
					// sendForm('data4DownloadsubjectDetails');
					// sendForm('data4DownloaddegreeSubjects');
				} else {
					console.log("No data -" + SubCode)
					// resetResultDownload()
					// sendForm('data4DownloadsubjectDetails');
					// sendForm('data4DownloaddegreeSubjects');
					// alert("Data not available");

				}

			}, error: function (error) {
				console.log(error)
				// console.log(postData)

			}
		});

	}

}

function examDownloadSemesterMarks() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0) {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubSem = dataRep["degSem"];
		var BatchYear = document.getElementById('batch_year').value;


		resetResultUpload()
		sendForm('data4examResultsSemWiseSubjects');
		sendForm('data4examResultsSemWise');

		examDownloadSemesterMarksTemp(degTitle, SubSem, BatchYear);
	}
}

function examDownloadSemesterGrades() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0) {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["degSem"] = dataRep["uploadSemester"];
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var SubSem = dataRep["degSem"];
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUpload()
		sendForm('data4examResultsSemWiseSubjects');
		sendForm('data4examResultsSemWise');
		sendForm('data4examResultsSemWiseFinal');
		examDownloadSemesterGradeTemp(degTitle, SubSem, BatchYear);
	}
}

function examDownloadYearGrades() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0) {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUpload()
		sendForm('data4examResultsYearWiseSubjects');
		sendForm('data4examResultsYearWise');
		sendForm('data4examResultsYearWiseFinal');

		examDownloadYearGradeTemp(degTitle, BatchYear);
	}
}

function examDownloadYearMarks() {
	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0) {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUpload()
		sendForm('data4examResultsYearWiseSubjects');
		sendForm('data4examResultsYearWise');
		sendForm('data4examResultsYearWiseFinal');

		examDownloadYearMarksTemp(degTitle, BatchYear);
	}
}

function examDownloadFinalReport() {

	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0) {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUpload()
		sendForm('data4examResultsYearWiseSubjects');
		sendForm('data4examResultsYearWise');
		sendForm('data4examResultsYearWiseFinal');

		examDownloadFinalReportTemp(degTitle, BatchYear);
	}
}

function examDownloadPassReport() {

	if (document.getElementById('degreeWiseResults').selectedIndex != 0
		&& document.getElementById('batch_year').selectedIndex != 0) {
		var tmpDId = document.getElementById(document.getElementById('degreeWiseResults').value).title;
		dataRep["degCode"] = tmpDId;
		dataRep["acYear"] = document.getElementById('batch_year').value;

		var degTitle = document.getElementById('degreeWiseResults').value;
		var BatchYear = document.getElementById('batch_year').value;

		resetResultUpload()

		sendForm('data4examResultsYearWiseSubjects');
		//sendForm('data4examResultsYearWise');
		//sendForm('data4examResultsYearWiseFinal');
		sendForm('data4examPassReport');

		examDownloadPassReportTemp(degTitle, BatchYear);
	}
}






function resetResultUpload() {
	// degreeCodeLength = 0;
	// sub_CodeLength = 0;
	// // dataRep["uploadSemester"] = "";
	// document.getElementById("msgArea").innerHTML = "";
}