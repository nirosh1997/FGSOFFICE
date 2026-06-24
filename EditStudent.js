
var studentNoList = "";
dataRep['roleName'] = "";
//dataRep["studentNationality"]=dataRep["studentCitizenship"]=dataRep["studentDateofbirth"]="";	

function setValuesForEditStudents() {
	dataRep["studentName"] = "";
	dataRep["studentNIC"] = "";
	dataRep["studentPermanentAddress"] = "";
	dataRep["studentInitial"] = "";
	dataRep["programmeTypeCode"] = "";
	dataRep["degreeCode"] = "";
	dataRep["universityCode"] = "";
	dataRep["programmeTypeCode"] = "";
	dataRep["applicationNo"] = "";
	dataRep["studentContactLan"] = "";
	dataRep["studentContactMobile"] = "";
	dataRep["studentContactEmail"] = "";


	dataRep["Old_studentName"] = "";
	dataRep["Old_studentNIC"] = "";
	dataRep["Old_studentPermanentAddress"] = "";
	dataRep["Old_studentInitial"] = "";
	dataRep["Old_programmeTypeCode"] = "";
	dataRep["Old_degreeCode"] = "";
	dataRep["Old_universityCode"] = "";
	dataRep["Old_programmeTypeCode"] = "";
	dataRep["Old_applicationNo"] = "";
	dataRep["Old_studentContactLan"] = "";
	dataRep["Old_studentContactMobile"] = "";
	dataRep["Old_studentContactEmail"] = "";

	for (j = 0; j < studentNoLength; j++) {

		if (dataRep["studentNo"] == studentNoArr[j]) {
			dataRep["studentName"] = studentNameArr[j];
			dataRep["studentNIC"] = studentNICArr[j];
			dataRep["studentPermanentAddress"] = studentPermanentAddressArr[j];
			dataRep["studentInitial"] = studentInitialArr[j];
			dataRep["programmeTypeCode"] = programmeTypeCodeArr[j];
			dataRep["degreeCode"] = degreeCodeArr[j];
			dataRep["universityCode"] = universityCodeArr[j];
			dataRep["programmeTypeCode"] = programmeTypeCodeArr[j];
			dataRep["applicationNo"] = applicationNoArr[j];
			dataRep["studentContactLan"] = studentContactLanArr[j];
			dataRep["studentContactMobile"] = studentContactMobileArr[j];
			dataRep["studentContactEmail"] = studentContactEmailArr[j];


			dataRep["Old_studentName"] = studentNameArr[j];
			dataRep["Old_studentNIC"] = studentNICArr[j];
			dataRep["Old_studentPermanentAddress"] = studentPermanentAddressArr[j];
			dataRep["Old_studentInitial"] = studentInitialArr[j];
			dataRep["Old_programmeTypeCode"] = programmeTypeCodeArr[j];
			dataRep["Old_degreeCode"] = degreeCodeArr[j];
			dataRep["Old_universityCode"] = universityCodeArr[j];
			dataRep["Old_programmeTypeCode"] = programmeTypeCodeArr[j];
			dataRep["Old_applicationNo"] = applicationNoArr[j];
			dataRep["Old_studentContactLan"] = studentContactLanArr[j];
			dataRep["Old_studentContactMobile"] = studentContactMobileArr[j];
			dataRep["Old_studentContactEmail"] = studentContactEmailArr[j];
		}

	}
}

function formEditStudentDetails(dsp) {

	title = "Edit Student Details";
	str = "";
	var keyDisabled = fieldDisabled = "";
	if (dsp == "updateEditStudentDetails") {
		keyDisabled = "Disabled";
		if (dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "Dean" || dataRep['roleName'] == "FGS Deputy Registrar") {
			keyDisabled = "";
		}
		// var u = document.cookie;
		// var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		// var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		// for (i = 0; i < userIdLength; i++) {
		// 	if (use == userIdArr[i]) {
		// 		dataRep['roleName'] = roleNameArr[i];
		// 	}
		// }


		if (studentNoArr.length > 0) {
			setValuesForEditStudents();
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

		str += '<div class="form-group row"><div class="col-sm-6" style="margin: auto;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Student No</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += "<input type='text' class='form-control form-control-sm' name='studentNo'  id='studentNo' value= '" + dataRep["studentNo"].trim() + "'  onchange='dataRep[this.name]=this.value;setValuesForEditStudents();'>";
		// for (i = 0; i < applicationNoArr.length; i++) {
		// 	applicantNoList += "<option value='" + applicationNoArr[i] + "'>";
		// }
		// str += "<datalist id='listApplicantNo'>" + applicantNoList + "</datalist>";
		str += "<button type='button' class='btn btn-info mr-2'  onclick=sendForm('data4StudentDetailsEdit'); style='margin-left: 10px;'>Find</button>";

		str += '</div></div>';
		str += '</div></div>';
		str += '</div></div></div>';

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';
		str += '<div class="form-group row">';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Name in Full</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text'  name='studentName'  id='studentName' value= '" + dataRep["studentName"] + "'  onchange='dataRep[this.name]=this.value;'  class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Name with Initial</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text'  name='studentInitial'  id='studentInitial' value= '" + dataRep["studentInitial"] + "'  onchange='dataRep[this.name]=this.value;' class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Student NIC Number</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentNIC'  id='studentNIC' value= '" + dataRep["studentNIC"] + "'  onchange='dataRep[this.name]=this.value;' " + keyDisabled + " class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Application No</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='applicationNo'  id='applicationNo' value= '" + dataRep["applicationNo"] + "'  onchange='dataRep[this.name]=this.value;' Disabled class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Fixed Number</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentContactLan'  id='studentContactLan' value= '" + dataRep["studentContactLan"] + "'  onchange='dataRep[this.name]=this.value;' class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Mobile Number</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentContactMobile'  id='studentContactMobile' value= '" + dataRep["studentContactMobile"] + "'  onchange='dataRep[this.name]=this.value;' class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Email</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentContactEmail'  id='studentContactEmail' value= '" + dataRep["studentContactEmail"] + "'  onchange='dataRep[this.name]=this.value;' class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Permanent Address</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentPermanentAddress'  id='studentPermanentAddress' value= '" + dataRep["studentPermanentAddress"] + "'  onchange='dataRep[this.name]=this.value;' class='form-control form-control-sm'></div>";
		str += '</div>';


		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r"></label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><button type='button' class='btn btn-info mr-2'  onclick=formEditStudentDetailssendForm('updateEditStudentDetails'); style='margin-left: 10px;'>Save</button>";
		str += '</div>';
		str += '</div></div></div>';

	}
	return str;
}





function formEditStudentDetailssendForm(frm) {

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

	if (frm == 'updateEditStudentDetails') {


		doc = document.maintainEditStudentDetails;
		dataStr += "&interface=" + frm;
		//dataStr += "&universityCode="+dataRep["universityCode"]+"&facultyCode="+dataRep["facultyCode"]+"&degreeCode="+dataRep["degreeCode"]+"&studentNIC="+dataRep["studentNIC"]+"&studentNo="+dataRep["studentNo"];

		//	dataStr += "&universityCode="+dataRep["universityCode"]+"&facultyCode="+dataRep["facultyCode"]+"&programmeTypeCode="+dataRep["programmeTypeCode"]+"&degreeCode="+dataRep["degreeCode"]+"&studentNIC="+dataRep["studentNIC"]+"&studentNo="+dataRep["studentNo"];

		dataStr += "&studentNo=" + dataRep["studentNo"];
		dataStr += "&studentName=" + dataRep["studentName"];
		dataStr += "&studentInitial=" + dataRep["studentInitial"];
		//dataStr += "&studentDateofbirth="+dataRep["studentDateofbirth"];
		//dataStr += "&studentNationality="+dataRep["studentNationality"];
		//dataStr += "&studentCitizenship="+dataRep["studentCitizenship"];
		//dataStr += "&studentEmployment="+dataRep["studentEmployment"];
		dataStr += "&studentPermanentAddress=" + dataRep["studentPermanentAddress"];
		dataStr += "&studentContactLan=" + dataRep["studentContactLan"];
		dataStr += "&studentContactMobile=" + dataRep["studentContactMobile"];
		dataStr += "&studentContactEmail=" + dataRep["studentContactEmail"];
		// if (dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "Dean" || dataRep['roleName'] == "FGS Deputy Registrar") {
		// 	dataStr += "&studentNIC=" + dataRep["studentNIC"];		
		// }
		//dataStr += "&studentOfficeAddress="+dataRep["studentOfficeAddress"];
		//dataStr += "&correspondence="+dataRep["correspondence"];

		console.log(dataStr)
		//alert(dataStr);
	}

	// dataRep["studentName"] = studentNameArr[j];
	// dataRep["studentNIC"] = studentNICArr[j];
	// dataRep["studentPermanentAddress"] = studentPermanentAddressArr[j];
	// dataRep["studentInitial"] = studentInitialArr[j];
	// dataRep["programmeTypeCode"] = programmeTypeCodeArr[j];
	// dataRep["degreeCode"] = degreeCodeArr[j];
	// dataRep["universityCode"] = universityCodeArr[j];
	// dataRep["programmeTypeCode"] = programmeTypeCodeArr[j];
	// dataRep["applicationNo"] = applicationNoArr[j];
	// dataRep["studentContactLan"] = studentContactLanArr[j];
	// dataRep["studentContactMobile"] = studentContactMobileArr[j];
	// dataRep["studentContactEmail"] = studentContactEmailArr[j];


	// dataRep["Old_studentName"] = studentNameArr[j];
	// dataRep["Old_studentNIC"] = studentNICArr[j];
	// dataRep["Old_studentPermanentAddress"] = studentPermanentAddressArr[j];
	// dataRep["Old_studentInitial"] = studentInitialArr[j];
	// dataRep["Old_programmeTypeCode"] = programmeTypeCodeArr[j];
	// dataRep["Old_degreeCode"] = degreeCodeArr[j];
	// dataRep["Old_universityCode"] = universityCodeArr[j];
	// dataRep["Old_programmeTypeCode"] = programmeTypeCodeArr[j];
	// dataRep["Old_applicationNo"] = applicationNoArr[j];
	// dataRep["Old_studentContactLan"] = studentContactLanArr[j];
	// dataRep["Old_studentContactMobile"] = studentContactMobileArr[j];
	// dataRep["Old_studentContactEmail"] = studentContactEmailArr[j];

	if (dataRep["studentNIC"] != dataRep["Old_studentNIC"]) {


		Swal.fire({
			icon: 'question',
			title: 'Confirm Update',
			html: '<strong>Do you want to update both NIC number and password?</strong>',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Change Both',
			denyButtonText: 'Only NIC',
			cancelButtonText: 'Cancel'
		}).then((result) => {
			if (result.isConfirmed || result.isDenied) {
				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
			}
			if (result.isConfirmed) {
				let postData = {
					action: "updatestudentNICandPassword",
					studentNo: dataRep["studentNo"],
					Old_studentNIC: ["Old_studentNIC"],
					studentNIC: dataRep["studentNIC"],
					authcode: authcode,
					username: dataRep['userId']
				};
				$.ajax({
					type: 'POST',
					url: 'rules/students.php',
					data: postData,
					dataType: 'json',
					success: function (response) {
						if (response.status == 200) {
							Swal.fire({
								icon: 'success',
								title: 'Update Successful',
								text: 'Your update has been completed successfully!',
								confirmButtonText: 'OK'
							});
						}
					}
				});
			} else if (result.isDenied) {
				let postData = {
					action: "updatestudentNICOnly",
					studentNo: dataRep["studentNo"],
					Old_studentNIC: ["Old_studentNIC"],
					studentNIC: dataRep["studentNIC"],
					authcode: authcode,
					username: dataRep['userId']
				};
				$.ajax({
					type: 'POST',
					url: 'rules/students.php',
					data: postData,
					dataType: 'json',
					success: function (response) {
						console.log(response);
						if (response.status == 200) {
							Swal.fire({
								icon: 'success',
								title: 'Update Successful',
								text: 'Your update has been completed successfully!',
								confirmButtonText: 'OK'
							});
						}
					}
				});
			} else {
				// console.log('User cancelled the update');
			}
		});





		return 0;
	} else {
		Swal.fire({
			icon: 'question',
			title: 'Confirm Update',
			html: 'Do you want to update?</strong>',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Update',
			cancelButtonText: 'Cancel'
		}).then((result) => {
			if (result.isConfirmed) {
				isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
				Swal.fire({
					icon: 'success',
					title: 'Update Successful',
					text: 'Your update has been completed successfully!',
					confirmButtonText: 'OK'
				});
				return 0;
			} else {
				return 0;
			}
		});
	}


} 