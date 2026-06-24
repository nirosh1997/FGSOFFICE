dataRep["ApplicationNo"] = dataRep['degreeTitle'] = "";
var ApplicationNoList = "";
var educationArray = [];
var profQulificationArray = [];
var WorkExperinceArray = [];
var NonRelatedRefereesArray = [];

function formReprintApplicantion(dsp) {

	str = "";
	title = "Reprint Applications";

	if (dsp == "formReprintApplicantion") {

		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;height: 40px;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';

		for (AppNoLoop = 0; AppNoLoop < applicationNoLength; AppNoLoop++) {
			ApplicationNoList += "<option value='" + applicationNo1Arr[AppNoLoop] + "'>";
		}


		// var u = document.cookie;
		// var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		// var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		// for (i = 0; i < roleIdLength; i++) {
		// 	if (use == userIdArr[i]) {
		// 		dataRep['roleName'] = roleNameArr[i];
		// 	}
		// }

		str += "<div id='addSelectedStudentList'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		str += '<div class="form-group row"><div class="col-sm-12">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Application Number</label></div>';
		str += '<div class="col-sm-5" style="display: inline-flex;">';
		str += "<input type='text' id='ApplicationNo'name='ApplicationNo'  value= '" + dataRep["ApplicationNo"] + "' onchange='dataRep[this.name]=this.value;' class='form-control'>";
		str += '</div>';
		str += '<div class="col-md-3 col-sm-12 col-12" style="display: inline-flex;">';
		str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="callPrintFunctionNew()">Print application</button>';
		str += '</div></div>';
		str += '</div>';
		str += '</div></div></div>';

	}

	return str;
}


function callPrintFunctionNew() {

	let postData = {
		action: "data4ApplicarionReprint",
		applicationNo: dataRep["ApplicationNo"],
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
			if (response.status == 200) {

				universityCode1Arr.length = 0;
				facultyCode1Arr.length = 0;
				programmeTypeCode1Arr.length = 0;
				degreeCode1Arr.length = 0;
				applicationNo1Arr.length = 0;
				temporaryNo1Arr.length = 0;
				studentNIC1Arr.length = 0;
				studentName1Arr.length = 0;
				studentPersonalTitle1Arr.length = 0;
				studentInitial1Arr.length = 0;
				studentDateofbirth1Arr.length = 0;
				studentNationality1Arr.length = 0;
				countryRegion1Arr.length = 0;
				studentCitizenship1Arr.length = 0;
				studentDesignation1Arr.length = 0;
				studentEmployment1Arr.length = 0;
				studentPermanentAddress1Arr.length = 0;
				studentOfficeAddress1Arr.length = 0;
				correspondence1Arr.length = 0;
				studentContactLan1Arr.length = 0;
				studentContactMobile1Arr.length = 0;
				studentContactEmail1Arr.length = 0;
				degreeTitle1Arr.length = 0;
				achedamicYear1Arr.length = 0;
				medium1Arr.length = 0;
				pin1Arr.length = 0;
				studentContactEmai21Arr.length = 0;
				studentgenderArr.length = 0;
				streamNameArr.length = 0;
				Main_SubjectArr.length = 0;
				Study_FieldArr.length = 0;
				Research_TitleArr.length = 0;
				projectGrantArr.length = 0;
				projectGrantDetailsArr.length = 0;
				projectFinancedArr.length = 0;
				applicationNoLength = 0;

				$.each(response.applicantData, function (index, applicant) {
					universityCode1Arr[applicationNoLength] = applicant.universityCode;
					facultyCode1Arr[applicationNoLength] = applicant.facultyCode;
					programmeTypeCode1Arr[applicationNoLength] = applicant.programmeTypeCode;
					degreeCode1Arr[applicationNoLength] = applicant.degreeCode;
					applicationNo1Arr[applicationNoLength] = applicant.applicationNo;
					temporaryNo1Arr[applicationNoLength] = applicant.temporaryNo;
					studentNIC1Arr[applicationNoLength] = applicant.studentNIC;
					studentName1Arr[applicationNoLength] = applicant.studentName;
					studentPersonalTitle1Arr[applicationNoLength] = applicant.studentPersonalTitle;
					studentInitial1Arr[applicationNoLength] = applicant.studentInitial;
					studentDateofbirth1Arr[applicationNoLength] = applicant.studentDateofbirth;
					studentNationality1Arr[applicationNoLength] = applicant.studentNationality;
					countryRegion1Arr[applicationNoLength] = applicant.countryRegion;
					studentCitizenship1Arr[applicationNoLength] = applicant.studentCitizenship;
					studentDesignation1Arr[applicationNoLength] = applicant.studentDesignation;
					studentEmployment1Arr[applicationNoLength] = applicant.studentEmployment;
					studentPermanentAddress1Arr[applicationNoLength] = applicant.studentPermanentAddress;
					studentOfficeAddress1Arr[applicationNoLength] = applicant.studentOfficeAddress;
					correspondence1Arr[applicationNoLength] = applicant.correspondence;
					studentContactLan1Arr[applicationNoLength] = applicant.studentContactLan;
					studentContactMobile1Arr[applicationNoLength] = applicant.studentContactMobile;
					studentContactEmail1Arr[applicationNoLength] = applicant.studentContactEmail;
					degreeTitle1Arr[applicationNoLength] = applicant.degreeTitle;
					achedamicYear1Arr[applicationNoLength] = applicant.achedamicYear;
					medium1Arr[applicationNoLength] = applicant.medium;
					pin1Arr[applicationNoLength] = applicant.pin;
					studentContactEmai21Arr[applicationNoLength] = applicant.studentContactEmail2;
					studentgenderArr[applicationNoLength] = applicant.studentGender;
					streamNameArr[applicationNoLength] = applicant.streamName;
					Main_SubjectArr[applicationNoLength] = applicant.Main_Subject;
					Study_FieldArr[applicationNoLength] = applicant.Study_Field;
					Research_TitleArr[applicationNoLength] = applicant.Research_Title;
					projectGrantArr[applicationNoLength] = applicant.projectGrant;
					projectGrantDetailsArr[applicationNoLength] = applicant.projectGrantDetails;
					projectFinancedArr[applicationNoLength] = applicant.projectFinanced;
					applicationNoLength++;
				});

				studentNIC3Arr.length = 0;
				applicationNo3Arr.length = 0;
				workFieldName3Arr.length = 0;
				workValue3Arr.length = 0;
				workPin3Arr.length = 0;
				applicationNo3Length = 0;
				$.each(response.WorkingData, function (index, applicantWorkingData) {
					studentNIC3Arr[applicationNo3Length] = applicantWorkingData.studentNIC;
					applicationNo3Arr[applicationNo3Length] = applicantWorkingData.applicationNo;
					workFieldName3Arr[applicationNo3Length] = applicantWorkingData.workFieldName;
					workValue3Arr[applicationNo3Length] = applicantWorkingData.workValue;
					workPin3Arr[applicationNo3Length] = applicantWorkingData.workPin;
					applicationNo3Length++;
				});


				studentNIC2Arr.length = 0;
				applicationNo2Arr.length = 0;
				educationFieldName2Arr.length = 0;
				educationValue2Arr.length = 0;
				educationPin2Arr.length = 0;
				applicationNo2Length = 0;
				$.each(response.EducationData, function (index, applicantEducationData) {
					studentNIC2Arr[applicationNo2Length] = applicantEducationData.studentNIC;
					applicationNo2Arr[applicationNo2Length] = applicantEducationData.applicationNo;
					educationFieldName2Arr[applicationNo2Length] = applicantEducationData.educationFieldName;
					educationValue2Arr[applicationNo2Length] = applicantEducationData.educationValue;
					educationPin2Arr[applicationNo2Length] = applicantEducationData.educationPin;
					applicationNo2Length++;
				});



				newEduApplicationNo.length = 0;
				newEduQulificaitionId.length = 0;
				newEduUniversity.length = 0;
				newEduAwardingCountry.length = 0;
				newEduQualificationType.length = 0;
				newEduDesignator.length = 0;
				newEduQualifier.length = 0;
				newEduGraduateYear.length = 0;
				newEduGraduateMonth.length = 0;
				newEduDuration.length = 0;
				newEduEffectiveDate.length = 0;
				newEduGpa.length = 0;
				newEduClass.length = 0;
				newEduDegreeCertificate.length = 0;
				newEduDegreeDetailCertificate.length = 0;
				newEduResultStatus.length = 0;
				newEduSub1.length = 0;
				newEduSub2.length = 0;
				newEduSub3.length = 0;
				newEduSub4.length = 0;
				newEduResearchCredit.length = 0;
				newEduResearchDuration.length = 0;
				newEduResearchCompHas.length = 0;
				eduDetailsLength = 0;
				$.each(response.data4profilenewEducation, function (index, data4qualification) {
					newEduApplicationNo[eduDetailsLength] = data4qualification.application_no;
					newEduQulificaitionId[eduDetailsLength] = data4qualification.qulificaition_id;
					newEduUniversity[eduDetailsLength] = data4qualification.university;
					newEduAwardingCountry[eduDetailsLength] = data4qualification.awarding_country;
					newEduQualificationType[eduDetailsLength] = data4qualification.qualification_type;
					newEduDesignator[eduDetailsLength] = data4qualification.designator;
					newEduQualifier[eduDetailsLength] = data4qualification.qualifier;
					newEduGraduateYear[eduDetailsLength] = data4qualification.graduate_year;
					newEduGraduateMonth[eduDetailsLength] = data4qualification.graduate_month;
					newEduDuration[eduDetailsLength] = data4qualification.duration;
					newEduEffectiveDate[eduDetailsLength] = data4qualification.effective_date;
					newEduGpa[eduDetailsLength] = data4qualification.gpa;
					newEduClass[eduDetailsLength] = data4qualification.class;
					newEduDegreeCertificate[eduDetailsLength] = data4qualification.degree_certificate;
					newEduDegreeDetailCertificate[eduDetailsLength] = data4qualification.degree_detail_certificate;
					newEduResultStatus[eduDetailsLength] = data4qualification.result_status;
					newEduSub1[eduDetailsLength] = data4qualification.sub1;
					newEduSub2[eduDetailsLength] = data4qualification.sub2;
					newEduSub3[eduDetailsLength] = data4qualification.sub3;
					newEduSub4[eduDetailsLength] = data4qualification.sub4;
					newEduResearchCredit[eduDetailsLength] = data4qualification.researchCredit;
					newEduResearchDuration[eduDetailsLength] = data4qualification.researchDuration;
					newEduResearchCompHas[eduDetailsLength] = data4qualification.researchCompHas;
					eduDetailsLength++;
				});




				newProfApplicationNo.length = 0;
				newProfQulificaitionId.length = 0;
				newProfQualification.length = 0;
				newProfQualificationLevel.length = 0;
				newProfAwardingAuthority.length = 0;
				newProfAwardingYear.length = 0;
				newProfAwardingCountry.length = 0;
				newProfEffectiveDate.length = 0;
				newProfCertificate.length = 0;
				newProfDetailsLength = 0;

				$.each(response.data4profilenewProfessional, function (index, data4otherQualification) {
					newProfApplicationNo[newProfDetailsLength] = data4otherQualification.application_no;
					newProfQulificaitionId[newProfDetailsLength] = data4otherQualification.qulificaition_id;
					newProfQualification[newProfDetailsLength] = data4otherQualification.qualification;
					newProfQualificationLevel[newProfDetailsLength] = data4otherQualification.qualification_level;
					newProfAwardingAuthority[newProfDetailsLength] = data4otherQualification.awarding_authority;
					newProfAwardingYear[newProfDetailsLength] = data4otherQualification.awarding_year;
					newProfAwardingCountry[newProfDetailsLength] = data4otherQualification.awarding_country;
					newProfEffectiveDate[newProfDetailsLength] = data4otherQualification.effective_date;
					newProfCertificate[newProfDetailsLength] = data4otherQualification.certificate;
					newProfDetailsLength++;
				});




				newRefApplicationNo.length = 0;
				newRefRefId.length = 0;
				newRefName.length = 0;
				newRefOrganization.length = 0;
				newRefDesignation.length = 0;
				newRefAddress.length = 0;
				newRefCountry.length = 0;
				newRefEmail.length = 0;
				newRefMobile.length = 0;
				newRefHome.length = 0;
				newRefOffice.length = 0;
				newRefDetailsLength = 0;

				$.each(response.data4profilenewRefrees, function (index, data4references) {
					newRefApplicationNo[newRefDetailsLength] = data4references.application_no;
					newRefRefId[newRefDetailsLength] = data4references.ref_id;
					newRefName[newRefDetailsLength] = data4references.name;
					newRefOrganization[newRefDetailsLength] = data4references.organization;
					newRefDesignation[newRefDetailsLength] = data4references.designation;
					newRefAddress[newRefDetailsLength] = data4references.address;
					newRefCountry[newRefDetailsLength] = data4references.country;
					newRefEmail[newRefDetailsLength] = data4references.email;
					newRefMobile[newRefDetailsLength] = data4references.mobile;
					newRefHome[newRefDetailsLength] = data4references.home;
					newRefOffice[newRefDetailsLength] = data4references.office;
					newRefDetailsLength++;
				});


				newWorkApplicationNo.length = 0;
				newWorkQulificaitionId.length = 0;
				newWorkOrganization.length = 0;
				newWorkDesignation.length = 0;
				newWorkAwardingCountry.length = 0;
				newWorkAddress.length = 0;
				newWorkStartDate.length = 0;
				newWorkEndDate.length = 0;
				newWorkCertificate.length = 0;
				newWorkVerified.length = 0;
				newWorkDetailsLength = 0;

				$.each(response.data4profilenewWork, function (index, data4work) {
					newWorkApplicationNo[newWorkDetailsLength] = data4work.application_no;
					newWorkQulificaitionId[newWorkDetailsLength] = data4work.qulificaition_id;
					newWorkOrganization[newWorkDetailsLength] = data4work.organization;
					newWorkDesignation[newWorkDetailsLength] = data4work.designation;
					newWorkAwardingCountry[newWorkDetailsLength] = data4work.awarding_country;
					newWorkAddress[newWorkDetailsLength] = data4work.address;
					newWorkStartDate[newWorkDetailsLength] = data4work.start_date;
					newWorkEndDate[newWorkDetailsLength] = data4work.end_date;
					newWorkCertificate[newWorkDetailsLength] = data4work.certificate;
					newWorkVerified[newWorkDetailsLength] = data4work.verified;
					newWorkDetailsLength++;
				});

				ReprintApplication();




			} else {

			}


		}, error: function (error) {
			console.log(error)
			// console.log(postData)

		}

	});



}

function callPrintFunction() {
	ReprintApplication();
}

function ReprintApplication() {
	//alert('ok');
	if (dataRep["ApplicationNo"] == "") {
		alert('please Enter Application No');
	} else {
		var divText = "";
		let medium = "";
		divText += '<div class="col-md-12" id="pdfContent" style="padding:20px;width: 785px;border: 1px solid #ccc;margin: auto;">';

		divText += '<table style="border-bottom: 1px solid #000;width: 100%; " id="header">';
		divText += '<tr>';
		divText += '<td colspan="10" style="border: none;text-align:center"><img src="' + host + 'images/fgslogo.png" style="width: 40%;height:auto;margin: -10px;"></td>';
		divText += '</tr>';
		divText += '<tr>';
		divText += '<td colspan="10" style="text-align: center;border: none;">';
		divText += '<p style="font-size: 24px;margin-bottom: 0px;font-weight: bolder;">Application Form</p>';


		for (var i = 0; i < applicationNoLength; i++) {
			if (applicationNo1Arr.indexOf(applicationNo1Arr[i]) == applicationNo1Arr.lastIndexOf(applicationNo1Arr[i]) || (applicationNo1Arr.indexOf(applicationNo1Arr[i]) != applicationNo1Arr.lastIndexOf(applicationNo1Arr[i]) && applicationNo1Arr.indexOf(applicationNo1Arr[i]) == i)) {

				if (dataRep["ApplicationNo"] == applicationNo1Arr[i]) {
					//alert(degreeTitle1Arr[i]);
					dataRep['degreeTitle'] = degreeTitle1Arr[i];
					appNo = applicationNo1Arr[i];
					var yr = achedamicYear1Arr[i];
					if (medium1Arr[i] == "en") {
						medium = "English";
					} else if (medium1Arr[i] == "si") {
						medium = "Sinhala";
					}

				}
			}
		}
		divText += '<p style="font-size: 22px;margin-bottom: 0px;font-weight: bolder;">' + dataRep['degreeTitle'] + '-' + yr + '</p>';

		divText += '</td>';
		divText += '</tr>';
		divText += '</table>';



		divText += '<div style="width: 100%;margin: auto;border: 1px solid #ccc;margin-top: 20px;margin-bottom: 35px; border-radius: 10px;padding: 0px 20px;" id="programMedium">';

		divText += '<table style="width: 100%;margin: auto;margin-top: 0rem;padding: 10px 0;">';
		divText += '<tr style="">';
		divText += '<td style="text-align: left;width: 300px;font-size: 20px;padding-bottom: 10px;"><span style="font-weight: bolder;font-size: 20px;">Degree: </span> ' + dataRep['degreeTitle'] + '</td>';
		divText += '<td style="font-weight: bolder;text-align: right;width: 239px;font-size: 20px;">Application Number</td>';

		divText += '</tr>';
		divText += '<tr>';
		divText += '<td style="text-align: left;width: 300px;font-size: 20px;"><span style="font-weight: bolder;font-size: 20px;">Medium:</span>' + medium + '</td>';
		divText += '<td style="text-align: right;width: 239px;font-size: 20px;">' + dataRep["ApplicationNo"] + '</td>';
		divText += ' </tr>';
		divText += '</table>';
		divText += '</div>';





		//applicant Info
		var count = 0;
		for (var i = 0; i < applicationNoLength; i++) {
			if (dataRep["ApplicationNo"] == applicationNo1Arr[i] && count == 0) {
				count++;
				divText += '<div style="width: 100%;margin: auto;border: 1px solid #ccc;margin-top: 20px;border-radius: 20px;" id="applicantinfo" >';
				divText += '<div style="margin-top: -15px;" id="title">';
				divText += '<h6 style="background-color: #ccc;background-color: #ccc;width: 50%;text-align: center;padding: 5px 15px;border-radius: 10px;margin-left: 20px;">1) Applicant\'s Information</h6>';
				divText += '</div>';

				divText += '<table style="margin-left: 25px;width: 100%;" class="tableData">';
				divText += '<tr>';
				divText += '<td class="sub-title">1.1) Title:</td>';
				divText += '<td class="sub-title-ans">' + studentPersonalTitle1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.2) Name with initials:</td>';
				divText += '<td class="sub-title-ans">' + studentInitial1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.3) Full Name:</td>';
				divText += '<td class="sub-title-ans">' + studentName1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.4) Gender:</td>';
				divText += '<td class="sub-title-ans">' + studentgenderArr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.5) Date of Birth:</td>';
				divText += '<td class="sub-title-ans">' + studentDateofbirth1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.6) Address:</td>';
				divText += ' <td class="sub-title-ans">' + studentPermanentAddress1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.7) NIC/Passport:</td>';
				divText += ' <td class="sub-title-ans">' + studentNIC1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.8) Nationality:</td>';
				divText += '<td class="sub-title-ans">' + studentNationality1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.9) Citizenship:</td>';
				divText += '<td class="sub-title-ans">' + studentCitizenship1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.10) Mobile Number:</td>';
				divText += '<td class="sub-title-ans">' + studentContactMobile1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.11) Home:</td>';
				divText += '<td class="sub-title-ans">' + studentContactLan1Arr[i] + '</td>';
				divText += '</tr>';



				divText += '<tr>';
				divText += '<td class="sub-title">1.12) Email 01:</td>';
				divText += '<td class="sub-title-ans">' + studentContactEmail1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title">1.13) Email 02:</td>';
				divText += '<td class="sub-title-ans">' + studentContactEmai21Arr[i] + '</td>';
				divText += '</tr>';

				divText += '</table>';
				divText += '</div>';




				//employement details
				divText += '<div style="width: 100%;margin: auto;border: 1px solid #ccc;margin-top: 20px;border-radius: 20px;" id="applicantinfo" >';
				divText += '<div style="margin-top: -15px;" id="title">';
				divText += '<h6 style="background-color: #ccc;background-color: #ccc;width: 50%;text-align: center;padding: 5px 15px;border-radius: 10px;margin-left: 20px;">2) Employment Details</h6>';
				divText += '</div>';

				divText += '<table style="margin-left: 25px;width: 100%;" class="tableData">';
				divText += '<tr>';
				divText += '<td class="sub-title">2.1) Employment  :</td>';
				divText += '<td class="sub-title-ans">' + studentEmployment1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '<tr>';
				divText += '<td class="sub-title" style="width: 180px;">2.2) Office Address:</td>';
				divText += '<td class="sub-title-ans">' + studentOfficeAddress1Arr[i] + '</td>';
				divText += '</tr>';

				divText += '</table>';
				divText += '</div>';
			}

		}


		//education details
		educationArray.length = 0
		let educount = 0;
		let fildCount = 0;
		count = 0;
		for (var i = 0; i < applicationNo2Length; i++) {
			if (appNo == applicationNo2Arr[i]) {
				if (educationPin2Arr.indexOf(educationPin2Arr[i]) == educationPin2Arr.lastIndexOf(educationPin2Arr[i]) || (educationPin2Arr.indexOf(educationPin2Arr[i]) != educationPin2Arr.lastIndexOf(educationPin2Arr[i]) && educationPin2Arr.indexOf(educationPin2Arr[i]) == i)) {
					if (educationFieldName2Arr[i] != undefined & educationFieldName2Arr[i] != " " & educationValue2Arr[i] != undefined & educationValue2Arr[i] != " ") {
						if (educationFieldName2Arr[j] == "Qualification Level" || educationFieldName2Arr[i] != "Qualification" && educationFieldName2Arr[i] != "Awarding Authority" && educationFieldName2Arr[i] != "Awarding Year" && (educationFieldName2Arr[i] != "Country" || educationFieldName2Arr[i] != "Awarding Country")) {
							if (educationFieldName2Arr[i] == "University/Institute name" || educationFieldName2Arr[i] == "University/Institute Name") {
								count++;
							}
							if (count == 1) {
								let educationDataArray = [];
								educount = 0;
								if (educationFieldName2Arr[i] != "") {
									if (educationFieldName2Arr[i] == "Result Status") {
										count++;
									}
									if (educationFieldName2Arr[i] == "University/Institute Name") {
										educationDataArray[educount] = "University/Institute";
										educount++;
									}
									else if (educationFieldName2Arr[i] == "Specify the Qualification Category") {
										educationDataArray[educount] = "Qualification Category";
										educount++;

									}
									else {
										educationDataArray[educount] = educationFieldName2Arr[i];
										educount++;

									}
								}
								for (var j = 0; j < applicationNo2Length; j++) {
									if (appNo == applicationNo2Arr[j]) {
										if (educationPin2Arr.indexOf(educationPin2Arr[j]) == educationPin2Arr.lastIndexOf(educationPin2Arr[j]) || (educationPin2Arr.indexOf(educationPin2Arr[j]) != educationPin2Arr.lastIndexOf(educationPin2Arr[j]) && educationPin2Arr.indexOf(educationPin2Arr[j]) == j)) {
											if (educationFieldName2Arr[j] != undefined & educationFieldName2Arr[j] != " " & educationValue2Arr[j] != undefined & educationValue2Arr[j] != " ") {
												if (educationFieldName2Arr[j] == "Qualification Level" || educationFieldName2Arr[j] != "Qualification" || educationFieldName2Arr[j] != "Awarding Authority" || educationFieldName2Arr[j] != "Awarding Year" || (educationFieldName2Arr[i] != "Country" || educationFieldName2Arr[i] != "Awarding Country")) {
													if (educationValue2Arr[j] != "" && educationFieldName2Arr[i] == educationFieldName2Arr[j]) {
														educationDataArray[educount] = educationValue2Arr[j];
														educount++;
													}

												}
											}
										}
									}
								}
								educationArray[fildCount] = educationDataArray;
								fildCount++;
							}
						}
					}
				}
			}
		}



		divText += '<div style="width: 100%;margin: auto;border: 1px solid #ccc;margin-top: 20px;border-radius: 20px;" id="applicantinfo" >';
		divText += '<div style="margin-top: -15px;" id="title">';
		divText += '<h6 style="background-color: #ccc;background-color: #ccc;width: 50%;text-align: center;padding: 5px 15px;border-radius: 10px;margin-left: 20px;">3) Educational Qualifications</h6>';
		divText += '</div>';
		let countedu = 0;

		if (educationArray.length > 0) {
			for (let index = 0; index < educationArray[0].length - 1; index++) {
				countedu++;
				divText += '<table style="margin-left: 15px;width: 100%;" class="tableData">';
				divText += '<tr>';
				divText += '<td  colspan="4" style="font-size: 16px !important;"><b><u>3.' + (index + 1) + ') Education ' + (index + 1) + '</u></b></td>';
				divText += '</tr>';
				divText += '</tr>';


				divText += '<table style="margin-left: 35px;width:auto" class="tableData">';
				let fcount = 1;
				for (let index2 = 0; index2 < educationArray.length; index2++) {
					if (educationArray[index2][index + 1] === undefined) {

					} else {
						divText += '<tr>';
						divText += '<td class="sub-title" style="width:300px">3.' + (index + 1) + '.' + fcount + ') ' + educationArray[index2][0] + '  :</td>';
						divText += '<td class="sub-title-ans">' + educationArray[index2][index + 1] + '</td>';
						divText += '</tr>';
						fcount++;
					}
				}
				divText += '</table>';
			}
		}


		if (eduDetailsLength > 0) {
			for (var i = 0; i < eduDetailsLength; i++) {
				countedu++;
				divText += '<table style="margin-left: 15px;width: 100%;" class="tableData">';
				divText += '<tr>';
				divText += '<td  colspan="4" style="font-size: 16px !important;"><b><u>3.' + (countedu) + ') Education ' + (countedu) + '</u></b></td>';
				divText += '</tr>';
				divText += '</tr>';
				divText += '<table style="margin-left: 35px;width:auto" class="tableData">';
				if (newEduUniversity[i]) divText += "<tr><td class='sub-title' style='width:300px'>University</td><td class='sub-title-ans'>: " + newEduUniversity[i] + "</td></tr>";
				if (newEduAwardingCountry[i]) divText += "<tr><td class='sub-title' style='width:300px'>Awarding Country</td><td class='sub-title-ans'>: " + newEduAwardingCountry[i] + "</td></tr>";
				if (newEduQualificationType[i]) divText += "<tr><td class='sub-title' style='width:300px'>Qualification Type</td><td class='sub-title-ans'>: " + newEduQualificationType[i] + "</td></tr>";
				if (newEduDesignator[i]) divText += "<tr><td class='sub-title' style='width:300px'>Designator</td><td class='sub-title-ans'>: " + newEduDesignator[i] + "</td></tr>";
				if (newEduQualifier[i]) divText += "<tr><td class='sub-title' style='width:300px'>Qualifier</td><td class='sub-title-ans'>: " + newEduQualifier[i] + "</td></tr>";
				if (newEduGraduateYear[i]) divText += "<tr><td class='sub-title' style='width:300px'>Graduate Year</td><td class='sub-title-ans'>: " + newEduGraduateYear[i] + "</td></tr>";
				if (newEduGraduateMonth[i]) divText += "<tr><td class='sub-title' style='width:300px'>Graduate Month</td><td class='sub-title-ans'>: " + newEduGraduateMonth[i] + "</td></tr>";
				if (newEduDuration[i]) divText += "<tr><td class='sub-title' style='width:300px'>Duration</td><td class='sub-title-ans'>: " + newEduDuration[i] + "</td></tr>";
				if (newEduEffectiveDate[i]) divText += "<tr><td class='sub-title' style='width:300px'>Effective Date</td><td class='sub-title-ans'>: " + newEduEffectiveDate[i] + "</td></tr>";
				if (newEduGpa[i]) divText += "<tr><td class='sub-title' style='width:300px'>GPA</td><td class='sub-title-ans'>: " + newEduGpa[i] + "</td></tr>";
				if (newEduClass[i]) divText += "<tr><td class='sub-title' style='width:300px'>Class</td><td class='sub-title-ans'>: " + newEduClass[i] + "</td></tr>";
				if (newEduDegreeCertificate[i]) {
					divText += "<tr><td class='sub-title' style='width:300px'>Degree Certificate</td><td class='sub-title-ans'>: <a href='" + newEduDegreeCertificate[i] + "' target='_blank'>View Document</a></td></tr>";
				}
				if (newEduDegreeDetailCertificate[i]) {
					divText += "<tr><td class='sub-title' style='width:300px'>Degree Detail Certificate</td><td class='sub-title-ans'>: <a href='" + newEduDegreeDetailCertificate[i] + "' target='_blank'>View Document</a></td></tr>";
				}
				if (newEduResultStatus[i]) divText += "<tr><td class='sub-title' style='width:300px'>Result Status</td><td class='sub-title-ans'>: " + newEduResultStatus[i] + "</td></tr>";
				if (newEduSub1[i]) divText += "<tr><td class='sub-title' style='width:300px'>Subject 1</td><td class='sub-title-ans'>: " + newEduSub1[i] + "</td></tr>";
				if (newEduSub2[i]) divText += "<tr><td class='sub-title' style='width:300px'>Subject 2</td><td class='sub-title-ans'>: " + newEduSub2[i] + "</td></tr>";
				if (newEduSub3[i]) divText += "<tr><td class='sub-title' style='width:300px'>Subject 3</td><td class='sub-title-ans'>: " + newEduSub3[i] + "</td></tr>";
				if (newEduSub4[i]) divText += "<tr><td class='sub-title' style='width:300px'>Subject 4</td><td class='sub-title-ans'>: " + newEduSub4[i] + "</td></tr>";
				if (newEduResearchCredit[i]) divText += "<tr><td class='sub-title' style='width:300px'>Research Credit</td><td class='sub-title-ans'>: " + newEduResearchCredit[i] + "</td></tr>";
				if (newEduResearchDuration[i]) divText += "<tr><td class='sub-title' style='width:300px'>Research Duration</td><td class='sub-title-ans'>: " + newEduResearchDuration[i] + "</td></tr>";
				if (newEduResearchCompHas[i]) divText += "<tr><td class='sub-title' style='width:300px'>Research Component Has</td><td class='sub-title-ans'>: " + newEduResearchCompHas[i] + "</td></tr>";


				divText += '</table>';
			}
		}





		divText += '</div>';







		//professinal qulification details
		count = 0;
		profQulificationArray.length = 0
		let profcount = 0;
		let proffildCount = 0;
		for (var i = 0; i < applicationNo2Length; i++) {
			if (appNo == applicationNo2Arr[i]) {
				if (educationPin2Arr.indexOf(educationPin2Arr[i]) == educationPin2Arr.lastIndexOf(educationPin2Arr[i]) || (educationPin2Arr.indexOf(educationPin2Arr[i]) != educationPin2Arr.lastIndexOf(educationPin2Arr[i]) && educationPin2Arr.indexOf(educationPin2Arr[i]) == i)) {
					if (educationFieldName2Arr[i] != undefined & educationFieldName2Arr[i] != " " & educationValue2Arr[i] != undefined & educationValue2Arr[i] != " ") {
						if (educationFieldName2Arr[i] == "Qualification" || educationFieldName2Arr[i] == "Awarding Authority" || educationFieldName2Arr[i] == "Awarding Year" || (educationFieldName2Arr[i] == "Country" || educationFieldName2Arr[i] == "Awarding Country") ||
							educationFieldName2Arr[i].trim().toLowerCase() == ("Qualification Level").trim().toLowerCase()) {	//|| educationFieldName2Arr[j] =="Qualification Level"		
							if (educationFieldName2Arr[i] == "Qualification") {
								count++;
							}
							if (count == 1) {
								let ProQuliDataArray = [];
								profcount = 0;
								if (educationFieldName2Arr[i] != "") {
									if (educationFieldName2Arr[i] == "Country" || educationFieldName2Arr[i] == "Awarding Country") {
										count++;
									}
									ProQuliDataArray[profcount] = educationFieldName2Arr[i];
									profcount++;
								}
								for (var j = 0; j < applicationNo2Length; j++) {
									if (appNo == applicationNo2Arr[j]) {
										if (educationPin2Arr.indexOf(educationPin2Arr[j]) == educationPin2Arr.lastIndexOf(educationPin2Arr[j]) || (educationPin2Arr.indexOf(educationPin2Arr[j]) != educationPin2Arr.lastIndexOf(educationPin2Arr[j]) && educationPin2Arr.indexOf(educationPin2Arr[j]) == j)) {
											if (educationFieldName2Arr[j] != undefined & educationFieldName2Arr[j] != " " & educationValue2Arr[j] != undefined & educationValue2Arr[j] != " ") {
												if (educationFieldName2Arr[j] == "Qualification" || educationFieldName2Arr[j] == "Awarding Authority" || educationFieldName2Arr[j] == "Awarding Year" || (educationFieldName2Arr[i] == "Country" || educationFieldName2Arr[i] == "Awarding Country") || educationFieldName2Arr[j] == "Qualification Level") {			//|| educationFieldName2Arr[j]== "Qualification Level"
													if (educationValue2Arr[j] != "" && educationFieldName2Arr[i] == educationFieldName2Arr[j]) {
														ProQuliDataArray[profcount] = educationValue2Arr[j];
														profcount++;
													}
												}
											}
										}
									}
								}
								profQulificationArray[proffildCount] = ProQuliDataArray;
								proffildCount++;
							}
						}
					}
				}
			}
		}




		divText += '<div style="width: 100%;margin: auto;border: 1px solid #ccc;margin-top: 20px;border-radius: 20px;" id="applicantinfo" >';
		divText += '<div style="margin-top: -15px;" id="title">';
		divText += '<h6 style="background-color: #ccc;background-color: #ccc;width: 50%;text-align: center;padding: 5px 15px;border-radius: 10px;margin-left: 20px;">4) Professional Qualifications</h6>';
		divText += '</div>';
		let countProf = 0;
		if (profQulificationArray.length > 0) {
			for (let index = 0; index < profQulificationArray[0].length - 1; index++) {
				countProf++;
				divText += '<table style="margin-left: 15px;width: 100%;" class="tableData">';
				divText += '<tr>';
				divText += '<td  colspan="4" style="font-size: 16px !important;"><b><u>4.' + (index + 1) + ') Qualification ' + (index + 1) + '</u></b></td>';
				divText += '</tr>';
				divText += '</tr>';


				divText += '<table style="margin-left: 35px;width: auto" class="tableData">';
				let fcount = 1;
				for (let index2 = 0; index2 < profQulificationArray.length; index2++) {
					if (profQulificationArray[index2][index + 1] === undefined) {

					} else {
						divText += '<tr>';
						divText += '<td class="sub-title" style="width:300px">4.' + (index + 1) + '.' + fcount + ') ' + profQulificationArray[index2][0] + '  :</td>';
						divText += '<td class="sub-title-ans">' + profQulificationArray[index2][index + 1] + '</td>';
						divText += '</tr>';
						fcount++;
					}
				}
				divText += '</table>';
			}
		}

		if (newProfDetailsLength > 0) {
			for (var i = 0; i < newProfDetailsLength; i++) {
				countProf++;
				count++;
				divText += '<table style="margin-left: 15px;width: 100%;" class="tableData">';
				divText += '<tr>';
				divText += '<td  colspan="4" style="font-size: 16px !important;"><b><u>4.' + (countProf) + ') Qualification ' + (countProf) + '</u></b></td>';
				divText += '</tr>';
				divText += '</tr>';
				divText += '<table style="margin-left: 35px;width:auto" class="tableData">';
				// if (newProfApplicationNo[i]) divText += "<tr><td class='sub-title' style='width:300px'>Application No</td><td class='sub-title-ans'>: " + newProfApplicationNo[i] + "</td></tr>";
				// if (newProfQulificaitionId[i]) divText += "<tr><td class='sub-title' style='width:300px'>Qualification ID</td><td class='sub-title-ans'>: " + newProfQulificaitionId[i] + "</td></tr>";
				if (newProfQualification[i]) divText += "<tr><td class='sub-title' style='width:300px'>Qualification</td><td class='sub-title-ans'>: " + newProfQualification[i] + "</td></tr>";
				if (newProfQualificationLevel[i]) divText += "<tr><td class='sub-title' style='width:300px'>Qualification Level</td><td class='sub-title-ans'>: " + newProfQualificationLevel[i] + "</td></tr>";
				if (newProfAwardingAuthority[i]) divText += "<tr><td class='sub-title' style='width:300px'>Awarding Authority</td><td class='sub-title-ans'>: " + newProfAwardingAuthority[i] + "</td></tr>";
				if (newProfAwardingYear[i]) divText += "<tr><td class='sub-title' style='width:300px'>Awarding Year</td><td class='sub-title-ans'>: " + newProfAwardingYear[i] + "</td></tr>";
				if (newProfAwardingCountry[i]) divText += "<tr><td class='sub-title' style='width:300px'>Awarding Country</td><td class='sub-title-ans'>: " + newProfAwardingCountry[i] + "</td></tr>";
				if (newProfEffectiveDate[i]) divText += "<tr><td class='sub-title' style='width:300px'>Effective Date</td><td class='sub-title-ans'>: " + newProfEffectiveDate[i] + "</td></tr>";

				if (newProfCertificate[i]) {
					divText += "<tr><td class='sub-title' style='width:300px'>Certificate</td><td class='sub-title-ans'>: <a href='" + newProfCertificate[i] + "' target='_blank'>View Document</a></td></tr>";
				}
				divText += '</table>';
			}
		}

		divText += '</div>';




		//Working Experience details

		count = 0;
		WorkExperinceArray.length = 0
		let WorkExcount = 0;
		let WorkExfildCount = 0;
		for (var i = 0; i < applicationNoLength; i++) {
			if (dataRep["ApplicationNo"] == applicationNo1Arr[i]) {
				if (workPin3Arr.indexOf(workPin3Arr[i]) == workPin3Arr.lastIndexOf(workPin3Arr[i]) || (workPin3Arr.indexOf(workPin3Arr[i]) != workPin3Arr.lastIndexOf(workPin3Arr[i]) && workPin3Arr.indexOf(workPin3Arr[i]) == i)) {
					if (workFieldName3Arr[i] != undefined & workFieldName3Arr[i] != " " & workValue3Arr[i] != undefined & workValue3Arr[i] != " ") {
						if (workFieldName3Arr[i] == "Company/Institute/Organization" || workFieldName3Arr[i] == "Applicant Designation" || workFieldName3Arr[i] == "From" || workFieldName3Arr[i] == "To" || workFieldName3Arr[i] == "Applicant Country") {
							if (workFieldName3Arr[i] == "Company/Institute/Organization") {
								count++;
							}
							if (count == 1) {
								let ProQuliDataArray = [];
								WorkExcount = 0;
								//count++;
								divText += '<tr style="border: 1px solid black;">';
								if (workFieldName3Arr[i] != "") {
									if (workFieldName3Arr[i] == "Applicant Country") {
										ProQuliDataArray[WorkExcount] = "Applicant Country";
										WorkExcount++;
									}
									if (workFieldName3Arr[i] == "Applicant Designation" || workFieldName3Arr[i] == "Designation") {
										ProQuliDataArray[WorkExcount] = "Designation";
										WorkExcount++;
									}
									else if (workFieldName3Arr[i] == "Applicant Country" || workFieldName3Arr[i] == "Country") {
										ProQuliDataArray[WorkExcount] = "Country";
										WorkExcount++;
									}
									else {
										ProQuliDataArray[WorkExcount] = workFieldName3Arr[i];
										WorkExcount++;
									}
								}
								for (var j = 0; j < applicationNoLength; j++) {
									if (dataRep["ApplicationNo"] == applicationNo1Arr[i]) {
										if (workPin3Arr.indexOf(workPin3Arr[j]) == workPin3Arr.lastIndexOf(workPin3Arr[j]) || (workPin3Arr.indexOf(workPin3Arr[j]) != workPin3Arr.lastIndexOf(workPin3Arr[j]) && workPin3Arr.indexOf(workPin3Arr[j]) == j)) {
											if (workFieldName3Arr[j] != undefined & workFieldName3Arr[j] != " " & workValue3Arr[j] != undefined & workValue3Arr[j] != " ") {
												if (workFieldName3Arr[j] == "Company/Institute/Organization" || workFieldName3Arr[j] == "Applicant Designation" || workFieldName3Arr[j] == "From" || workFieldName3Arr[j] == "To" || workFieldName3Arr[j] == "Applicant Country") {
													if (workValue3Arr[j] != "" && workFieldName3Arr[i] == workFieldName3Arr[j]) {
														ProQuliDataArray[WorkExcount] = workValue3Arr[j];
														WorkExcount++;
													}

												}
											}
										}
									}
								}
								WorkExperinceArray[WorkExfildCount] = ProQuliDataArray;
								WorkExfildCount++;
							}
						}
					}
				}
			}
		}




		divText += '<div style="width: 100%;margin: auto;border: 1px solid #ccc;margin-top: 20px;border-radius: 20px;" id="applicantinfo" >';
		divText += '<div style="margin-top: -15px;" id="title">';
		divText += '<h6 style="background-color: #ccc;background-color: #ccc;width: 50%;text-align: center;padding: 5px 15px;border-radius: 10px;margin-left: 20px;">5)Working Experience</h6>';
		divText += '</div>';
		let countWork = 0;
		if (WorkExperinceArray.length > 0) {
			for (let index = 0; index < WorkExperinceArray[0].length - 1; index++) {
				countWork++;
				divText += '<table style="margin-left: 15px;width: 100%;" class="tableData">';
				divText += '<tr>';
				divText += '<td  colspan="4" style="font-size: 16px !important;"><b><u>5.' + (index + 1) + ') Experience ' + (index + 1) + '</u></b></td>';
				divText += '</tr>';
				divText += '</tr>';


				divText += '<table style="margin-left: 35px;width: auto" class="tableData">';
				let fcount = 1;
				for (let index2 = 0; index2 < WorkExperinceArray.length; index2++) {
					if (WorkExperinceArray[index2][index + 1] === undefined) {

					} else {
						divText += '<tr>';
						divText += '<td class="sub-title" style="width:300px">5.' + (index + 1) + '.' + fcount + ') ' + WorkExperinceArray[index2][0] + '  :</td>';
						divText += '<td class="sub-title-ans">' + WorkExperinceArray[index2][index + 1] + '</td>';
						divText += '</tr>';
						fcount++;
					}
				}
				divText += '</table>';
			}
		}


		if (newWorkDetailsLength > 0) {
			for (var i = 0; i < newWorkDetailsLength; i++) {
				countWork++;
				count++;
				divText += '<table style="margin-left: 15px;width: 100%;" class="tableData">';
				divText += '<tr>';
				divText += '<td  colspan="4" style="font-size: 16px !important;"><b><u>5.' + (countWork) + ') Qualification ' + (countWork) + '</u></b></td>';
				divText += '</tr>';
				divText += '</tr>';
				divText += '<table style="margin-left: 35px;width:auto" class="tableData">';
				// if (newWorkApplicationNo[i]) divText += "<tr><td class='sub-title' style='width:300px'>Application No</td><td class='sub-title-ans'>: " + newWorkApplicationNo[i] + "</td></tr>";
				// if (newWorkQulificaitionId[i]) divText += "<tr><td class='sub-title' style='width:300px'>Qualification ID</td><td class='sub-title-ans'>: " + newWorkQulificaitionId[i] + "</td></tr>";
				if (newWorkOrganization[i]) divText += "<tr><td class='sub-title' style='width:300px'>Organization</td><td class='sub-title-ans'>: " + newWorkOrganization[i] + "</td></tr>";
				if (newWorkDesignation[i]) divText += "<tr><td class='sub-title' style='width:300px'>Designation</td><td class='sub-title-ans'>: " + newWorkDesignation[i] + "</td></tr>";
				if (newWorkAwardingCountry[i]) divText += "<tr><td class='sub-title' style='width:300px'>Awarding Country</td><td class='sub-title-ans'>: " + newWorkAwardingCountry[i] + "</td></tr>";
				if (newWorkAddress[i]) divText += "<tr><td class='sub-title' style='width:300px'>Address</td><td class='sub-title-ans'>: " + newWorkAddress[i] + "</td></tr>";
				if (newWorkStartDate[i]) divText += "<tr><td class='sub-title' style='width:300px'>Start Date</td><td class='sub-title-ans'>: " + newWorkStartDate[i] + "</td></tr>";
				if (newWorkEndDate[i]) divText += "<tr><td class='sub-title' style='width:300px'>End Date</td><td class='sub-title-ans'>: " + newWorkEndDate[i] + "</td></tr>";

				if (newWorkCertificate[i]) {
					divText += "<tr><td class='sub-title' style='width:300px'>Certificate</td><td class='sub-title-ans'>: <a href='" + newWorkCertificate[i] + "' target='_blank'>View Document</a></td></tr>";
				}

				if (newWorkVerified[i]) divText += "<tr><td class='sub-title' style='width:300px'>Verified</td><td class='sub-title-ans'>: " + newWorkVerified[i] + "</td></tr>";

				divText += '</table>';
			}
		}

		divText += '</div>';







		//Non-Related Referees details

		count = 0;
		NonRelatedRefereesArray.length = 0
		let NonRelatedRefereesAcount = 0;
		let NonRelatedRefereesAfildCount = 0;


		for (var i = 0; i < applicationNoLength; i++) {
			if (dataRep["ApplicationNo"] == applicationNo1Arr[i]) {
				if (workPin3Arr.indexOf(workPin3Arr[i]) == workPin3Arr.lastIndexOf(workPin3Arr[i]) || (workPin3Arr.indexOf(workPin3Arr[i]) != workPin3Arr.lastIndexOf(workPin3Arr[i]) && workPin3Arr.indexOf(workPin3Arr[i]) == i)) {
					if (workFieldName3Arr[i] != undefined & workFieldName3Arr[i] != " " & workValue3Arr[i] != undefined & workValue3Arr[i] != " ") {
						if (workFieldName3Arr[i] != "Company/Institute/Organization" && workFieldName3Arr[i] != "Designation" && workFieldName3Arr[i] != "From" && workFieldName3Arr[i] != "To" && workFieldName3Arr[i] != "Country") {
							if (workFieldName3Arr[i] == "Name with Initials") {
								count++;
							}
							//alert(count);
							if (count == 1) {
								let NonRelatedRefereesDataArray = [];
								NonRelatedRefereesAcount = 0;
								if (workFieldName3Arr[i] != "") {
									if (workFieldName3Arr[i] == "Home") {
										count++;
									}
									if (workFieldName3Arr[i] == "Ref.Designation" || workFieldName3Arr[i] == "Designation Of Refree") {
										NonRelatedRefereesDataArray[NonRelatedRefereesAcount] = "Designation";
										NonRelatedRefereesAcount++;
									}
									else if (workFieldName3Arr[i] == "Ref.Country" || workFieldName3Arr[i] == "Country of referee") {
										NonRelatedRefereesDataArray[NonRelatedRefereesAcount] = "Country";
										NonRelatedRefereesAcount++;
									}
									else if (workFieldName3Arr[i] == "Company / Institute / Organization") {
										NonRelatedRefereesDataArray[NonRelatedRefereesAcount] = "Organization";
										NonRelatedRefereesAcount++;
									}

									else {
										NonRelatedRefereesDataArray[NonRelatedRefereesAcount] = workFieldName3Arr[i];
										NonRelatedRefereesAcount++;
									}
								}

								for (var j = 0; j < applicationNoLength; j++) {
									if (dataRep["ApplicationNo"] == applicationNo1Arr[j]) {

										if (workPin3Arr.indexOf(workPin3Arr[j]) == workPin3Arr.lastIndexOf(workPin3Arr[j]) || (workPin3Arr.indexOf(workPin3Arr[j]) != workPin3Arr.lastIndexOf(workPin3Arr[j]) && workPin3Arr.indexOf(workPin3Arr[j]) == j)) {
											if (workFieldName3Arr[j] != undefined & workFieldName3Arr[j] != " " & workValue3Arr[j] != undefined & workValue3Arr[j] != " ") {
												if (workFieldName3Arr[j] != "Company/Institute/Organization" && workFieldName3Arr[j] != "Applicant Designation" && workFieldName3Arr[j] != "From" && workFieldName3Arr[j] != "To" && workFieldName3Arr[j] != "Applicant Country") {
													if (workValue3Arr[j] != "" && workFieldName3Arr[i] == workFieldName3Arr[j]) {
														NonRelatedRefereesDataArray[NonRelatedRefereesAcount] = workValue3Arr[j];
														NonRelatedRefereesAcount++;
													}


												}
											}
										}
									}
								}
								NonRelatedRefereesArray[NonRelatedRefereesAfildCount] = NonRelatedRefereesDataArray;
								NonRelatedRefereesAfildCount++;
							}
						}
					}
				}
			}
		}


		divText += '<div style="width: 100%;margin: auto;border: 1px solid #ccc;margin-top: 20px;border-radius: 20px;" id="applicantinfo" >';
		divText += '<div style="margin-top: -15px;" id="title">';
		divText += '<h6 style="background-color: #ccc;background-color: #ccc;width: 50%;text-align: center;padding: 5px 15px;border-radius: 10px;margin-left: 20px;">6)Non-Related Referees</h6>';
		divText += '</div>';
		let countRef = 0;
		if (NonRelatedRefereesArray.length > 0) {
			for (let index = 0; index < NonRelatedRefereesArray[0].length - 1; index++) {
				countRef++;
				divText += '<table style="margin-left: 15px;width: 100%;" class="tableData">';
				divText += '<tr>';
				divText += '<td  colspan="4" style="font-size: 16px !important;"><b><u>6.' + (index + 1) + ') Referee ' + (index + 1) + '</u></b></td>';
				divText += '</tr>';
				divText += '</tr>';


				divText += '<table style="margin-left: 35px;width: auto" class="tableData">';
				let fcount = 1;
				for (let index2 = 0; index2 < NonRelatedRefereesArray.length; index2++) {
					if (NonRelatedRefereesArray[index2][index + 1] === undefined) {

					} else {
						divText += '<tr>';
						divText += '<td class="sub-title" style="width:300px">6.' + (index + 1) + '.' + fcount + ') ' + NonRelatedRefereesArray[index2][0] + '  :</td>';
						divText += '<td class="sub-title-ans">' + NonRelatedRefereesArray[index2][index + 1] + '</td>';
						divText += '</tr>';
						fcount++;
					}
				}
				divText += '</table>';
			}
		}


		if (newRefDetailsLength > 0) {
			for (var i = 0; i < newRefDetailsLength; i++) {
				if (newRefName[i]) {
					countRef++;
					count++;
					divText += '<table style="margin-left: 15px;width: 100%;" class="tableData">';
					divText += '<tr>';
					divText += '<td  colspan="4" style="font-size: 16px !important;"><b><u>5.' + (countRef) + ') Qualification ' + (countRef) + '</u></b></td>';
					divText += '</tr>';
					divText += '</tr>';
					divText += '<table style="margin-left: 35px;width:auto" class="tableData">';
					// if (newRefApplicationNo[i]) divText += "<tr><td class='sub-title' style='width:300px'>Application No</td><td class='sub-title-ans'>: " + newRefApplicationNo[i] + "</td></tr>";
					// if (newRefRefId[i]) divText += "<tr><td class='sub-title' style='width:300px'>Reference ID</td><td class='sub-title-ans'>: " + newRefRefId[i] + "</td></tr>";
					if (newRefName[i]) divText += "<tr><td class='sub-title' style='width:300px'>Name</td><td class='sub-title-ans'>: " + newRefName[i] + "</td></tr>";
					if (newRefOrganization[i]) divText += "<tr><td class='sub-title' style='width:300px'>Organization</td><td class='sub-title-ans'>: " + newRefOrganization[i] + "</td></tr>";
					if (newRefDesignation[i]) divText += "<tr><td class='sub-title' style='width:300px'>Designation</td><td class='sub-title-ans'>: " + newRefDesignation[i] + "</td></tr>";
					if (newRefAddress[i]) divText += "<tr><td class='sub-title' style='width:300px'>Address</td><td class='sub-title-ans'>: " + newRefAddress[i] + "</td></tr>";
					if (newRefCountry[i]) divText += "<tr><td class='sub-title' style='width:300px'>Country</td><td class='sub-title-ans'>: " + newRefCountry[i] + "</td></tr>";
					if (newRefEmail[i]) divText += "<tr><td class='sub-title' style='width:300px'>Email</td><td class='sub-title-ans'>: " + newRefEmail[i] + "</td></tr>";
					if (newRefMobile[i]) divText += "<tr><td class='sub-title' style='width:300px'>Mobile</td><td class='sub-title-ans'>: " + newRefMobile[i] + "</td></tr>";
					if (newRefHome[i]) divText += "<tr><td class='sub-title' style='width:300px'>Home</td><td class='sub-title-ans'>: " + newRefHome[i] + "</td></tr>";
					if (newRefOffice[i]) divText += "<tr><td class='sub-title' style='width:300px'>Office</td><td class='sub-title-ans'>: " + newRefOffice[i] + "</td></tr>";

					divText += '</table>';
				}
			}
		}

		divText += '</div>';
		let today = new Date();

		// Extract day, month, and year
		let day = today.getDate();
		let month = today.getMonth() + 1; // Note: January is 0
		let year = today.getFullYear();

		// Pad day and month with leading zeros if needed
		day = (day < 10 ? '0' : '') + day;
		month = (month < 10 ? '0' : '') + month;

		// Create the formatted date string

		divText += '<table align="center" style="margin-top:40px;border:none;table-layout:fixed;width:100%">';
		divText += "<tr>";
		divText += "<td align='left'><div style='float:left;'><p style='margin-bottom: 0;'>" + day + '/' + month + '/' + year + "</p><p style='margin-bottom: 0;margin-top: -15px;'>--------------------------</p><p>Date</p></div></td>";
		divText += "<td align='right'><div style='float:right;'><p style='margin-bottom: 0;'></p><p  style='margin-bottom: 0;margin-top: -15px;'>--------------------------</p><p>Signature of the Applicant</p></div></td>";
		divText += "</tr>";
		divText += "</table>";


		divText += '</div>';

		divText += '</div>';

		// divText += '<input type="button" id="prbtn"  style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;margin:5px 40%;" onclick=saveAsPdf(); value="Print"/>';
		divText += "</div>";
		// showMenu('formReprintApplicantion');
		var myWindow = window.open('', '');
		var doc = myWindow.document;
		doc.open();
		doc.write('<html><head><title>Print</title><?php date_default_timezone_set("Asia/Kolkata");$date = date("Y-m-d h:i:sa").""; ?>');
		doc.write('<style>@page { margin: 15px 15px 30px 15px; @bottom-left { content: attr(data-datetime) ""; }@bottom-right { content: "Page " counter(page) " of " counter(pages); }}@media print {* {-webkit-print-color-adjust: exact;}}</style><link href="' + host + '/css/assets/css/argon-dashboard.css?v=2.0.4" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"><script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none"; window.print();}</script>');
		doc.write('<style>.sub-title,.sub-title-ans{font-weight: 600;}tr{line-height: 1.5rem;}.identifiers{width:100px;float:left;font-size: 12px;text-align: left;margin:0px 15px 0px 10px;line-height: 20px;font-weight:bold;}.viewArea{float:left;width:auto;line-height: 20px;font-family: Verdana;font-size: 12px;text-align: left;}#wraper{width:1000px;margin:0px auto;}.divLeft{float:left;font-family:tahoma;font-size:14px;width:auto;line-height:20px}.colonDiv{line-height:20px;float:left;font-size: 14px;font-weight:bold;margin:0px 5px;width: auto;}.divRight{line-height:20px;float:left;font-family:tahoma;font-size:14px;width:auto;clear:right;}body{font-family:tahoma;}#genderDiv{clear:left;}#btnsub,#getbtn,#btnbk,#btnsrch{display:none}.forview{float:left;width:150px;font-family:tahoma;font-size:12px;}#invest1{margin:25px 0px;font-size:12px;}img{margin:10px; width:50px;height:50px;}p,h2{text-align:center;}input,textarea{border:none;font-family:tahoma;font-size:12px}textarea{min-width:150px;width:450px}</style></head>');
		doc.write('<body id="pdfContent">');
		doc.write(divText);
		doc.write('</body>');

		doc.write('<script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>');
		doc.write('<script>window.onload = function () {setTimeout(function () {window.print();}, 1000);};window.addEventListener("afterprint", function(event) { window.close();});</script>');
		// doc.write("<script>function saveAsPdf(){const options = {filename: 'example.pdf',image: { type: 'jpeg', quality: 1 },html2canvas: { scale: 5 },margin: [10, 10, 15, 10],jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },encoding: 'utf-8',};const content = document.getElementById('pdfContent');html2pdf().from(content).set(options).toPdf().get('pdf').then(pdf => {const totalPages = pdf.internal.getNumberOfPages();for (let i = 1; i <= totalPages; i++) {pdf.setPage(i);pdf.setFontSize(10);pdf.setTextColor(150);pdf.text(`Page ${i} of ${totalPages}`,pdf.internal.pageSize.getWidth() - 25, pdf.internal.pageSize.getHeight() - 5);}pdf.save();});}</script>");
		doc.close();


	}

}







