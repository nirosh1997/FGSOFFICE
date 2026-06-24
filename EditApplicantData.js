//Coded By S.Suraweera
var applicantNoList = "";
//dataRep["applicationNo1"]="";
dataRep["studentNationality"] = dataRep["studentCitizenship"] = dataRep['roleName'] = dataRep["studentDateofbirth"] = "";
dataRep['selectedMediumE'] = dataRep['selectedMediumS'] = "";
dataRep["selectedMedium"] = "";

var EnglishChecked = SinhalaChecked = "";


function setValuesForEditApplicants() {

	dataRep["studentName"] = "";
	dataRep["studentNIC"] = "";
	dataRep["studentNationality"] = "";
	dataRep["studentCitizenship"] = "";
	dataRep["studentDateofbirth"] = "";
	dataRep["studentPermanentAddress"] = "";
	dataRep["studentContactLan"] = "";
	dataRep["studentContactMobile"] = "";
	dataRep["studentContactEmail"] ="";
	dataRep["studentEmployment"] = "";
	dataRep["studentInitial"] = "";
	dataRep["facultyCode"] = "";
	dataRep["programmeTypeCode"] = "";
	dataRep["degreeCode"] = "";
	dataRep["universityCode"] = "";
	dataRep["achedamicYear"] = "";
	dataRep["medium"] = "";


	for (j = 0; j < applicationNoArr.length; j++) {

		if (dataRep["applicationNo"] == applicationNoArr[j]) {

			//alert(dataRep["applicationNo"]);

			dataRep["studentName"] = studentNameArr[j];
			dataRep["studentNIC"] = studentNICArr[j];
			dataRep["studentNationality"] = studentNationalityArr[i];
			dataRep["studentCitizenship"] = studentCitizenshipArr[i];
			dataRep["studentDateofbirth"] = studentDateofbirthArr[i];
			dataRep["studentPermanentAddress"] = studentPermanentAddressArr[j];
			dataRep["studentContactLan"] = studentContactLanArr[j];
			dataRep["studentContactMobile"] = studentContactMobileArr[j];
			dataRep["studentContactEmail"] = studentContactEmailArr[j];
			dataRep["studentEmployment"] = studentEmploymentArr[j];
			dataRep["studentInitial"] = studentInitialArr[j];
			dataRep["facultyCode"] = facultyCodeArr[j];
			dataRep["programmeTypeCode"] = programmeTypeCodeArr[j];
			dataRep["degreeCode"] = degreeCodeArr[j];
			dataRep["universityCode"] = universityCodeArr[j];
			dataRep["achedamicYear"] = achedamicYearArr[j];
			dataRep["medium"] = mediumArr[j];

		}

	}
}

function formEditApplicantDetails(dsp) {

	title = "Edit Applicant";
	str = "";
	var keyDisabled = fieldDisabled = "";
	if (dsp == "updateEditApplicantDetails") {
		keyDisabled = "Disabled";
		// var u = document.cookie;
		// var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		// var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		// for (i = 0; i < userIdLength; i++) {
		// 	if (use == userIdArr[i]) {
		// 		dataRep['roleName'] = roleNameArr[i];
		// 	}
		// }

		if(applicationNoArr.length>0){
			setValuesForEditApplicants();
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
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Application No</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += "<input type='text' class='form-control form-control-sm' name='applicationNo'  id='applicationNo' value= '" + dataRep["applicationNo"].trim() + "'  onchange='dataRep[this.name]=this.value;setValuesForEditApplicants();'>";
		// for (i = 0; i < applicationNoArr.length; i++) {
		// 	applicantNoList += "<option value='" + applicationNoArr[i] + "'>";
		// }
		// str += "<datalist id='listApplicantNo'>" + applicantNoList + "</datalist>";
		str += "<button type='button' class='btn btn-info mr-2'  onclick=sendForm('data4ApplicantDetailsEdit'); style='margin-left: 10px;'>Find</button>";

		str += '</div></div>';
		str += '</div></div>';
		str += '</div></div></div>';

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';
		str += '<div class="form-group row">';
		str += '<div class="col-sm-9" style="margin: auto;border: 1px solid #eee;padding: 10px;	margin-bottom: 2rem;">';
		str += '<div class="form-group row">';

		str += '<div class="col-sm-6">';
		str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Degree Code</label></div>';
		str += '<div class="col-sm-7" style="display: inline-flex;"><label for="exampleInputUsername2" class="">'+dataRep['degreeCode']+'</label></div>';
		str += '</div>';

		str += '<div class="col-sm-6">';
		str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">University Code</label></div>';
		str += '<div class="col-sm-7" style="display: inline-flex;"><label for="exampleInputUsername2" class="">'+dataRep['universityCode']+'</label></div>';
		str += '</div>';

		str += '<div class="col-sm-6">';
		str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme Type Code</label></div>';
		str += '<div class="col-sm-7" style="display: inline-flex;"><label for="exampleInputUsername2" class="">'+dataRep['programmeTypeCode']+'</label></div>';
		str += '</div>';

		str += '<div class="col-sm-6">';
		str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">BoS Code</label></div>';
		str += '<div class="col-sm-7" style="display: inline-flex;"><label for="exampleInputUsername2" class="">'+dataRep['facultyCode']+'</label></div>';
		str += '</div>';

		str += '</div>';
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Name in Full</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text'  name='studentName'  id='studentName' value= '" + dataRep["studentName"] + "'  onchange='dataRep[this.name]=this.value;'  class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Name with initial</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text'  name='studentInitial'  id='studentInitial' value= '" + dataRep["studentInitial"] + "'  onchange='dataRep[this.name]=this.value;' class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Student NIC Number</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentNIC'  id='studentNIC' value= '" + dataRep["studentNIC"] + "'  onchange='dataRep[this.name]=this.value;' class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Application Number</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='applicationNo'  id='applicationNo' value= '" + dataRep["applicationNo"] + "'  onchange='dataRep[this.name]=this.value;'  " + keyDisabled + " class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Home Number</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentContactLan'  id='studentContactLan' value= '" + dataRep["studentContactLan"] + "'  onchange='dataRep[this.name]=this.value;' class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Mobile Number</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentContactMobile'  id='studentContactMobile' value= '" + dataRep["studentContactMobile"] + "'  onchange='dataRep[this.name]=this.value;' class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Email</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentContactEmail'  id='studentContactEmail' value= '" + dataRep["studentContactEmail"] + "'  onchange='dataRep[this.name]=this.value;'  class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Permanent Address</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='studentPermanentAddress'  id='studentPermanentAddress' value= '" + dataRep["studentPermanentAddress"] + "'  onchange='dataRep[this.name]=this.value;'  class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Academic Year</label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='achedamicYear'  id='achedamicYear' value= '" + dataRep["achedamicYear"] + "' " + keyDisabled + " onchange='dataRep[this.name]=this.value;'  class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Medium</label></div>';
		let medium = "";
		if(dataRep["medium"]=="en" || dataRep["medium"]=="English"){
			medium = "English";
		}

		if(dataRep["medium"]=="si" || dataRep["medium"]=="Sinhala"){
			medium = "Sinhala";

		}

		str += "<div class='col-sm-9' style='display: inline-flex;'><input type='text' name='medium'  id='medium' value= '" + medium + "' " + keyDisabled + "  onchange='dataRep[this.name]=this.value;'  class='form-control form-control-sm'></div>";
		str += '</div>';

		str += '<div class="col-sm-7 col-xs-12" style="margin: auto;padding-bottom: 0.25rem;">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r"></label></div>';
		str += "<div class='col-sm-9' style='display: inline-flex;'><button type='button' class='btn btn-info mr-2'  onclick=formEditApplicantDetailssendForm('updateEditApplicantDetails'); style='margin-left: 10px;'>Save</button>";
		str += "<button type='button' class='btn btn-info mr-2'  onclick='cleardata();sendForm(" + '"data4ApplicantDetailsEdit"' + ");' style='margin-left: 10px;'>Clear</button></div>";
		str += '</div>';


		str += '</div></div></div>';


	}

	return str;
}





function formEditApplicantDetailssendForm(frm) {

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

	if (frm == 'updateEditApplicantDetails') {


		doc = document.maintainEditApplicantDetails;
		dataStr += "&interface=" + frm;



		//dataStr += "&universityCode="+dataRep["universityCode"]+"&facultyCode="+dataRep["facultyCode"]+"&programmeTypeCode="+dataRep["programmeTypeCode"]+"&degreeCode="+dataRep["degreeCode"]+"&studentNIC="+dataRep["studentNIC"]+"&applicationNo="+dataRep["applicationNo"]+"&pin="+dataRep["pin"]+"&applicationCode="+dataRep["applicationCode"];

		dataStr += "&universityCode=" + dataRep["universityCode"] + "&facultyCode=" + dataRep["facultyCode"] + "&programmeTypeCode=" + dataRep["programmeTypeCode"] + "&degreeCode=" + dataRep["degreeCode"] + "&applicationNo=" + dataRep["applicationNo"]; //+"&pin="+dataRep["pin"]+"&applicationCode="+dataRep["applicationCode"];

		//dataStr += "&universityCode="+"KLN"+"&facultyCode="+"FAC06"+"&programmeTypeCode="+"PRO0000011"+"&degreeCode="+"MBus"+"&studentNIC="+"908281179V"+"&applicationNo="+"00001/2015";




		dataStr += "&studentName=" + dataRep["studentName"];
		dataStr += "&studentInitial=" + dataRep["studentInitial"];
		dataStr += "&studentNIC=" + dataRep["studentNIC"];
		//	dataStr += "&studentDateofbirth="+dataRep["studentDateofbirth"];
		dataStr += "&studentPermanentAddress=" + dataRep["studentPermanentAddress"];
		dataStr += "&studentContactLan=" + dataRep["studentContactLan"];
		dataStr += "&studentContactMobile=" + dataRep["studentContactMobile"];
		dataStr += "&studentContactEmail=" + dataRep["studentContactEmail"];
		dataStr += "&achedamicYear=" + dataRep["achedamicYear"];
		let mediumData = "";
		if(dataRep["medium"]=="en" || dataRep["medium"]=="English"){
			mediumData = "en";
		}

		if(dataRep["medium"]=="si" || dataRep["medium"]=="Sinhala"){
			mediumData = "si";

		}
		dataStr += "&medium=" + mediumData;
		//alert(dataStr);
	}

	isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
	Swal.fire({
		icon: 'success',
		title: 'Update Successful',
		text: 'Your update has been completed successfully!',
		confirmButtonText: 'OK'
	});

	return 0;

}


function cleardata() {


	dataRep["applicationNo"] = "";
	dataRep["studentName"] = "";
	dataRep["studentNIC"] = "";
	// dataRep["studentNationality"]="";
	// dataRep["studentCitizenship"]="";
	// dataRep["studentDateofbirth"]="";	
	dataRep["studentPermanentAddress"] = "";
	dataRep["studentContactLan"] = "";
	dataRep["studentContactMobile"] = "";
	dataRep["studentContactEmail"] = "";
	dataRep["achedamicYear"] = "";
	dataRep["studentInitial"] = "";
	//dataRep["facultyCode"]="";
	dataRep["programmeTypeCode"] = "";
	dataRep["degreeCode"] = "";
	dataRep["universityCode"] = "";
	document.getElementById("applicationNo").value = "";
	document.getElementById("studentName").value = "";
	document.getElementById("studentNIC").value = "";
	// document.getElementById("studentNationality").value="";
	// document.getElementById("studentCitizenship").value="";
	// document.getElementById("studentDateofbirth").value="";
	document.getElementById("studentPermanentAddress").value = "";
	document.getElementById("studentContactLan").value = "";
	document.getElementById("studentContactMobile").value = "";
	document.getElementById("studentContactEmail").value = "";
	// document.getElementById("studentEmployment").value="";
	document.getElementById("studentInitial").value = "";
	//document.getElementById("facultyCode").value="";
	// document.getElementById("programmeTypeCode").value="";
	// document.getElementById("universityCode").value="";
}