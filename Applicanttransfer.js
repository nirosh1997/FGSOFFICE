var degreeTitleList = "";
var applicationNoList = "";
var degreeCodeList = "";
var programmeTypeCodeList = "";
var programmeTypeTitleList = "";
dataRep['roleName'] = "";



function transferApplicant() {

	var postData = {
		action: "getApplicant",
		applicationNo: dataRep["applicationNo"],
		authcode: authcode,
		username: dataRep['userId'],
	};

	$.ajax({
		type: 'POST',
		url: 'rules/applicantTransfer.php', // Replace with your server-side script URL
		data: postData,
		dataType: 'json',
		success: function (response) {
			if (response.status == 200) {
				$('#degreeCode').val(response.degreeCode);
				$('#programmeTypeCode').val(response.programmeTypeCode);
				$('#medium').val(response.medium);
				$('#aname').val(response.studentName);
				$('#aNic').val(response.studentNIC);
				for (j = 0; j < degreeCode1Length; j++) {
					if (degreeTitleArr[j] != null) {
						if (degreeTitleArr.indexOf(degreeTitleArr[j]) == degreeTitleArr.lastIndexOf(degreeTitleArr[j]) || (degreeTitleArr.indexOf(degreeTitleArr[j]) != degreeTitleArr.lastIndexOf(degreeTitleArr[j]) && degreeTitleArr.indexOf(degreeTitleArr[j]) == j)) {
							if (degreeCode1Arr[j] == response.degreeCode) {
								$("#degreeTitle1").val(degreeTitleArr[j]);
								setDegreePro();
								break;
							}
						}

					}
				}
				$("#medium1").val(response.medium);

			} else {
				Swal.fire({
					title: "Error!",
					text: response.message,
					icon: "error"
				});
			}
		},
		error: function (error) {
			Swal.fire({
				title: "Error!",
				text: "Invalid application no",
				icon: "error"
			});
		}
	});

	// for (j = 0; j < applicationNoCodeLength; j++) {
	// 	if (dataRep["applicationNo"] == applicationNoArr[j]) {
	// 		dataRep["degreeCode"] = degreeCodeArr[j];
	// 		dataRep["programmeTypeCode"] = programmeTypeCodeArr[j];
	// 	}
	// }
}


function savetransferApplicant() {

	var postData = {
		action: "saveApplicant",
		applicationNo: $('#applicationNo').val(),
		degreeCode: $('#degreeCode1').val(),
		programmeTypeCode: $('#programmeTypeCode1').val(),
		medium: $('#medium1').val(),
		authcode: authcode,
		username: dataRep['userId'],
	};

	$.ajax({
		type: 'POST',
		url: 'rules/applicantTransfer.php', // Replace with your server-side script URL
		data: postData,
		dataType: 'json',
		success: function (response) {
			if (response.status == 200) {
				Swal.fire({
					title: "Success",
					text: response.message,
					icon: "success"
				});
			} else {
				Swal.fire({
					title: "Error!",
					text: response.message,
					icon: "error"
				});
			}
		},
		error: function (error) {
			Swal.fire({
				title: "Error!",
				text: error,
				icon: "error"
			});
		}
	});

	// for (j = 0; j < applicationNoCodeLength; j++) {
	// 	if (dataRep["applicationNo"] == applicationNoArr[j]) {
	// 		dataRep["degreeCode"] = degreeCodeArr[j];
	// 		dataRep["programmeTypeCode"] = programmeTypeCodeArr[j];
	// 	}
	// }
}

function setDegreePro() {
	var degreeCodeselect = "";
	var programmeCodeselect = "";
	let degreeName = document.getElementById('degreeTitle1').value;
	for (j = 0; j < degreeCode1Length; j++) {
		if (degreeName != null && degreeName != "" && degreeName == degreeTitleArr[j]) {
			degreeCodeselect = degreeCode1Arr[j];
			programmeCodeselect = programmeTypeCode1Arr[j];
			break;
		}
	}
	document.getElementById('degreeCode1').value = degreeCodeselect;
	document.getElementById('programmeTypeCode1').value = programmeCodeselect;

}


function formTransferApplicant(dsp) {

	title = "Applicant Transfer";
	str = "";
	var keyDisabled = fieldDisabled = "";
	if (dsp == "transferApplicant") {

		// keyDisabled = "Disabled";
		// var u = document.cookie;
		// var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		// var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		// for (i = 0; i < userIdLength; i++) {
		// 	if (use == userIdArr[i]) {
		// 		dataRep['roleName'] = roleNameArr[i];
		// 	}
		// }



		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';


		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		str += '<div class="form-group row">';
		str += '<div class="col-sm-6">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Application No</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += "<input type='text' name='applicationNo'  id='applicationNo' class='form-control form-control-sm' value= '" + dataRep["applicationNo"].trim() + "'  onchange='dataRep[this.name]=this.value;'>";
		str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="transferApplicant();">Find</button>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div></div>';
		str += '</div></div>';

























		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card" id="applicantDetails">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		str += '<div class="form-group row" >';

		str += '<div class="col-sm-6" style="border-right: 1px solid #CCD;">';
		str += '<h6 style="text-decoration: underline;margin-bottom: 3rem;">Applicant Details</h6>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Applicant Name</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='aname'  id='aname' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Applicant NIC</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='aNic'  id='aNic' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Degree Code</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='degreeCode'  id='degreeCode' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme Type Code</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='programmeTypeCode'  id='programmeTypeCode' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Medium</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='medium'  id='medium' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';



		str += '</div>';

		degreeTitleList = "<option value='0'>-- Select Degree Title -- </option>";
		for (j = 0; j < degreeCode1Length; j++) {
			if (degreeTitleArr[j] != null) {
				if (degreeTitleArr.indexOf(degreeTitleArr[j]) == degreeTitleArr.lastIndexOf(degreeTitleArr[j]) || (degreeTitleArr.indexOf(degreeTitleArr[j]) != degreeTitleArr.lastIndexOf(degreeTitleArr[j]) && degreeTitleArr.indexOf(degreeTitleArr[j]) == j)) {
					degreeTitleList += "<option value='" + degreeTitleArr[j] + "'>" + degreeTitleArr[j] + "</option>";
				}
				degreeCodeList += "<option value='" + degreeCode1Arr[j] + "'>";
				programmeTypeCodeList += "<option value='" + programmeTypeCode1Arr[j] + "'>";

			}
		}




		str += '<div class="col-sm-6">';
		str += '<h6 style="text-decoration: underline;margin-bottom: 3rem;">Transfer To</h6>';
		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Degree Title</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="degreeTitle1" name="degreeTitle1" onchange="dataRep[this.id]=this.value;setDegreePro()">';
		str += degreeTitleList;
		str += '</select>';
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Degree Code</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='degreeCode1'  id='degreeCode1' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme Type Code</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='programmeTypeCode1'  id='programmeTypeCode1' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Medium</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="medium1" name="medium1" onchange="dataRep[this.id]=this.value;">';
		str += '<option value="si">Sinhala</option>';
		str += '<option value="en">English</option>';
		str += '</select>';
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-12">';
		str += '<button type="button" class="btn btn-info" style="float:right; margin-top: 1rem;" onclick="savetransferApplicant();">Transfer Applicant</button>';
		str += '</div>';
		str += '</div>';




		str += '</div>';



		str += '</div>';
		str += '</div></div>';
		str += '</div></div>';

	}




	return str;
}

function updateInfo() {

	//alert(dataRep["applicationNo"]);
	if (dataRep["applicationNo"] != null && dataRep["applicationNo"] != "") {
		var newstr = "";
		newstr += "<div class='section1' id='marks'  style='margin-left:-2px;'><fieldset  class='field'><legend class='fieldHead'>Applicant Transfer</legend>";
		//newstr += "<div id='updateDegree&Programme'></div>";
		//	newstr +='<input type="button" id="addbtn1" class="btn" value="Update Degree and Programme" onclick="updateDegree&Programme();">';



		for (j = 0; j < degreeCode1Length; j++) {

			//if(dataRep["degreeCode"]==degreeCode1Arr[j] & dataRep["degreeTitle"]==degreeTitleArr[j] & dataRep["programmeTypeCode"]==programmeTypeCode1Arr[j]){

			if (degreeTitleArr[j] != null) {
				if (degreeTitleArr.indexOf(degreeTitleArr[j]) == degreeTitleArr.lastIndexOf(degreeTitleArr[j]) || (degreeTitleArr.indexOf(degreeTitleArr[j]) != degreeTitleArr.lastIndexOf(degreeTitleArr[j]) && degreeTitleArr.indexOf(degreeTitleArr[j]) == j)) {
					degreeTitleList += "<option value='" + degreeTitleArr[j] + "'>";
				}


				degreeCodeList += "<option value='" + degreeCode1Arr[j] + "'>";


				programmeTypeCodeList += "<option value='" + programmeTypeCode1Arr[j] + "'>";

			}
			//}
		}

		newstr += "<div style='margin-top:20px;float:left;clear:both;'>";
		newstr += "<div class='longIdentifier' style='clear:none;'>Degree	Title</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		newstr += "<input type='text'  name='degreeTitle1' id='degreeTitle1' list='degreeTitleList' value= ''  onchange='dataRep[this.name]=this.value;setDegreePro();'>";
		newstr += "<datalist id='degreeTitleList'>" + degreeTitleList + "</datalist>";

		newstr += "<div style='margin-top:20px;float:left;clear:both;'>";
		newstr += "<div class='longIdentifier' style='clear:none;'>Degree Code</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		newstr += "<input type='text'  name='degreeCode1' id='degreeCode1' list='degreeCodeList' value= ''  onchange='dataRep[this.name]=this.value;'" + keyDisabled + ">";
		newstr += "<datalist id='degreeCodeList'>" + degreeCodeList + "</datalist>";



		newstr += "<div style='margin-top:20px;float:left;clear:both;'>";
		newstr += "<div class='longIdentifier' style='clear:none;'>Programme Type</div><div class='colon'>&nbsp;:&nbsp;</div> ";
		newstr += "<input type='text'  name='programmeTypeCode1' id='programmeTypeCode1' list='programmeTypeCodeList' value= ''  onchange='dataRep[this.name]=this.value;'" + keyDisabled + ">";
		newstr += "<datalist id='programmeTypeCodeList'>" + programmeTypeCodeList + "</datalist>";






		newstr += "<div><input type='button' style='margin-top:0px' class='btn' value='Save' onclick=formTransferApplicantsendForm('updatetransferApplicant');>";
		newstr += "</div>";

		//alert(newstr);
		newstr += "</fieldset></div>";


		//document.getElementById('addbtn1').style.display='none';
		//document.getElementById('addbtn2').style.display='block';
		document.getElementById("testUpdate").innerHTML += newstr;


		//newstr+= "<div><input type='button' style='margin-top:0px' class='btn' value='Save' onclick=formTransferApplicantsendForm('transferApplicant');>";
		//newstr += "</div>";


	}


}

function formTransferApplicantsendForm(frm) {

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

	if (confirm("Confirm your changes")) {
		if (frm == 'updatetransferApplicant') {

			// alert("yes");
			if (document.getElementById('degreeCode1').value != null && document.getElementById('programmeTypeCode1').value != null && document.getElementById('degreeCode1').value != "" && document.getElementById('programmeTypeCode1').value != "") {
				doc = document.maintaintransferApplicant;
				dataStr += "&interface=" + frm;
				dataStr += "&applicationNo=" + dataRep["applicationNo"];
				dataStr += "&degreeCode=" + document.getElementById('degreeCode1').value;
				dataStr += "&programmeTypeCode=" + document.getElementById('programmeTypeCode1').value;

				dataStr += "&notes=" + "degreeCode:-" + document.getElementById('degreeCode').value + " programmeCode:-" + document.getElementById('programmeTypeCode').value;
				//dataStr += "&degreeCode="+;	
				//dataStr += "&programmeTypeCode="+;


			}
		}

		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
	}

	return 0;


}
