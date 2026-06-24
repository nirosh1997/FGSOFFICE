
dataRep["ApplicationNo"] = dataRep['senateYYYY'] = dataRep['senateMM'] = dataRep['senateDD'] = dataRep["senateNo"] = "";

dataRep['BOSYYYY'] = dataRep['BOSMM'] = dataRep['BOSDD'] = dataRep["boardOfStudyNo"] = "";

dataRep['FBYYYY'] = dataRep['FBMM'] = dataRep['FBDD'] = dataRep["facultyBoardNo"] = dataRep['userName'] = "";
dataRep['programmeCode'] = "";
var BulkNote;
var TempBulkNote;
var user;
var BulkNoteArr = new Array();
var newStr1;
var countviewList = 0;
var divid = 1;
var checkdeleteorsave = "";
var breakingpoint = 50;
var pagenew = " ";
var nextpage = 0;

var applicantDTable;

function BulkReprintApplication(appno, count) {
	//alert('ok');

	var divText = "";
	let medium = "";
	divText += '<div class="page-break"></div>';

	divText += '<div class="col-md-12 pagebreak" id="pdfContent" style="padding:20px;width: 785px;border: 1px solid #ccc;margin: auto;page-break-before: left;break-after: page;">';

	divText += '<table style="border-bottom: 1px solid #000;width: 100%; " id="header">';
	divText += '<tr>';
	divText += '<td colspan="10" style="border: none;text-align:center"><img src="' + host + 'images/fgslogo.png" style="width: 40%;height:auto;margin: -10px;"></td>';
	divText += '</tr>';
	divText += '<tr>';
	divText += '<td colspan="10" style="text-align: center;border: none;">';
	divText += '<p style="font-size: 24px;margin-bottom: 0px;font-weight: bolder;">Application Form</p>';

	for (var i = 0; i < applicationNoLength; i++) {

		if (applicationNo1Arr.indexOf(applicationNo1Arr[i]) == applicationNo1Arr.lastIndexOf(applicationNo1Arr[i]) || (applicationNo1Arr.indexOf(applicationNo1Arr[i]) != applicationNo1Arr.lastIndexOf(applicationNo1Arr[i]) && applicationNo1Arr.indexOf(applicationNo1Arr[i]) == i)) {

			if (appno == applicationNo1Arr[i]) {
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
	divText += '<td style="text-align: right;width: 239px;font-size: 20px;">' + appno + '</td>';
	divText += ' </tr>';
	divText += '</table>';
	divText += '</div>';





	//applicant Info
	var count = 0;
	for (var i = 0; i < applicationNoLength; i++) {
		if (appno == applicationNo1Arr[i] && count == 0) {
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
	if (educationArray.length > 0) {
		for (let index = 0; index < educationArray[0].length - 1; index++) {

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
	if (profQulificationArray.length > 0) {
		for (let index = 0; index < profQulificationArray[0].length - 1; index++) {

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
	if (WorkExperinceArray.length > 0) {
		for (let index = 0; index < WorkExperinceArray[0].length - 1; index++) {

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
	if (NonRelatedRefereesArray.length > 0) {
		for (let index = 0; index < NonRelatedRefereesArray[0].length - 1; index++) {

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
	return divText;




}



function DataTableForApplicantList() {

	var buttons = [];

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {

		buttons.push({
			text: 'Print Selected Application',
			className: 'btn btn-primary h-46',
			action: async function (e, dt, node, config) {
				const applicationNo = [];
				applicantDTable.rows().every(function (index) {
					// Get the data for the current row
					var rowData = this.data();
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						applicationNo.push(applicationNoArr[index]);
					}
				});
				let strData = "";
				for (const appNo of applicationNo) {
					let postData = {
						action: "data4ApplicarionReprint",
						applicationNo: appNo,
						authcode: authcode,
						username: dataRep['userId'],
					};

					try {
						// Await each AJAX call
						const response = await $.ajax({
							type: 'POST',
							url: 'rules/students.php',
							data: postData,
							dataType: 'json'
						});

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


							strData += BulkReprintApplication(appNo);

						} else {
							console.log("Failed to retrieve application data for application number: " + appNo);
						}
					} catch (error) {
						console.log(error);
					}
				}

				console.log(strData);
				var myWindow = window.open('', '');
				var doc = myWindow.document;
				doc.open();
				doc.write('<html><head><title>Print</title><?php date_default_timezone_set("Asia/Kolkata");$date = date("Y-m-d h:i:sa").""; ?>');
				doc.write('<style>@page { margin: 15px 15px 30px 15px; @bottom-left { content: attr(data-datetime) ; }}@media print {* {-webkit-print-color-adjust: exact;}.page-break{page-break-before: always;break-after: page}}</style><link href="' + host + '/css/assets/css/argon-dashboard.css?v=2.0.4" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"><script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none"; window.print();}</script>');
				doc.write('<style>.sub-title,.sub-title-ans{font-weight: 600;}tr{line-height: 1.5rem;}.identifiers{width:100px;float:left;font-size: 12px;text-align: left;margin:0px 15px 0px 10px;line-height: 20px;font-weight:bold;}.viewArea{float:left;width:auto;line-height: 20px;font-family: Verdana;font-size: 12px;text-align: left;}#wraper{width:1000px;margin:0px auto;}.divLeft{float:left;font-family:tahoma;font-size:14px;width:auto;line-height:20px}.colonDiv{line-height:20px;float:left;font-size: 14px;font-weight:bold;margin:0px 5px;width: auto;}.divRight{line-height:20px;float:left;font-family:tahoma;font-size:14px;width:auto;clear:right;}body{font-family:tahoma;}#genderDiv{clear:left;}#btnsub,#getbtn,#btnbk,#btnsrch{display:none}.forview{float:left;width:150px;font-family:tahoma;font-size:12px;}#invest1{margin:25px 0px;font-size:12px;}img{margin:10px; width:50px;height:50px;}p,h2{text-align:center;}input,textarea{border:none;font-family:tahoma;font-size:12px}textarea{min-width:150px;width:450px}</style></head>');
				doc.write('<body id="pdfContent">');
				doc.write(strData);
				doc.write('</body>');

				doc.write('<script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>');
				doc.write('<script>window.onload = function () {setTimeout(function () {window.print();}, 1000);};window.addEventListener("afterprint", function(event) { window.close(); });</script>');
				// doc.write("<script>function saveAsPdf(){const options = {filename: 'example.pdf',image: { type: 'jpeg', quality: 1 },html2canvas: { scale: 5 },margin: [10, 10, 15, 10],jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },encoding: 'utf-8',};const content = document.getElementById('pdfContent');html2pdf().from(content).set(options).toPdf().get('pdf').then(pdf => {const totalPages = pdf.internal.getNumberOfPages();for (let i = 1; i <= totalPages; i++) {pdf.setPage(i);pdf.setFontSize(10);pdf.setTextColor(150);pdf.text(`Page ${i} of ${totalPages}`,pdf.internal.pageSize.getWidth() - 25, pdf.internal.pageSize.getHeight() - 5);}pdf.save();});}</script>");
				doc.close();


			}
		});


		buttons.push({
			text: '<i class="fa fa-file-excel-o"></i> Sinhala Medium List - Excel',
			className: 'btn btn-primary SinMedium',
			action: function (e, dt, node, config) {
				CompleteApplicationSin('e');
			}
		});


		buttons.push({
			text: '<i class="fa fa-file-excel-o"></i> English Medium List - Excel',
			className: 'btn btn-primary EngMedium',
			action: function (e, dt, node, config) {
				CompleteApplicationEng2('e');
			}
		});

		buttons.push({
			text: '<i class="fa fa-file-word-o"></i> Sinhala Medium List - Word',
			className: 'btn btn-primary SinMedium',
			action: function (e, dt, node, config) {
				CompleteApplicationSin('w');
			}
		});

		buttons.push({
			text: '<i class="fa fa-file-word-o"></i> English Medium List - Word',
			className: 'btn btn-primary EngMedium',
			action: function (e, dt, node, config) {
				CompleteApplicationEng2('w');
			}
		});
	}

	if (dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator') {
		buttons.push({
			text: 'Remove Application',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				checkdeleteorsaveapplication();
				formDeleteApplicationsendFormSwal('deleteApplicationForm');
			}
		});

	}

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' ||
		dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' ||
		dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
		buttons.push({
			text: 'Send SMS',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				const mobileNumber = [];
				applicantDTable.rows().every(function (index) {
					// Get the data for the current row
					var rowData = this.data();
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						if (mobileNumberValid(studentContactLanArr[index]) != 0) {
							mobileNumber.push(studentContactLanArr[index]);
						} else if (mobileNumberValid(studentContactMobileArr[index]) != 0) {
							mobileNumber.push(studentContactMobileArr[index]);
						}
					}
				});

				openInputDialogBulkSMS(mobileNumber);
			}
		});

	}


	applicantDTable = $('#applicantTable').DataTable({
		dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
			"<'row'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
			"<'row'<'col-12't>>" + // Table in a single line
			"<'row'<'col-12 col-md-6'i><'col-12 col-md-6'p>>", // Processing display element right, pagination right
		buttons: buttons,
		"language": {
			"lengthMenu": "Display _MENU_ applicants per page",
			"zeroRecords": "Applicants not found. please select valid program and year",
			// "info": "Found _MAX_ Applicants",
			"info": "Showing page _PAGE_ of _PAGES_ | Total Applicants : _MAX_ | ",
			"infoEmpty": "",
			"infoFiltered": "(filtered from _MAX_ total records)",
			"sSearch": "Find Applicant: "
		},
		"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
		columnDefs: [{
			targets: 0,
			orderable: false,
			searchable: false,
			className: 'selectall-checkbox',
		},
			// {
			// 	targets: 1,
			// 	orderable: false,
			// 	searchable: false
			// },
		],
		select: {
			style: 'multi',
			selector: 'td:first-child',
		},
		order: [1, 'asc'],
	});


	applicantDTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		var countSelectedRows = applicantDTable.rows({ selected: true }).count();
		var countItems = applicantDTable.rows().count();

		if (countItems > 0) {
			if (countSelectedRows == countItems) {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
			} else {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
			}
		}

		if (e.type === 'select') {
			$('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: true }).nodes()).prop('checked', true);
		} else {
			$('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: false }).nodes()).prop('checked', false);
		}
	});

	// When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	applicantDTable.on('click', 'thead .selectall-checkbox', function () {
		$('input[type="checkbox"]', this).trigger('click');
	});


	// When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	applicantDTable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
		if (this.checked) {
			applicantDTable.rows().select();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
				}
			}
		} else {
			applicantDTable.rows().deselect();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", false);
				}
			}
		}

		e.stopPropagation();
	});

	// hideMediums();







	// $('#all').click(function (e) {
	// 	// $('#applicantTable tbody :checkbox').prop('checked', $(this).is(':checked'));
	// 	// e.stopImmediatePropagation();
	// 	console.log($('#all').is(':checked'))
	// 	if ($('#all').is(':checked')) {
	// 		for (i = 0; i < applicationNoLength; i++) {
	// 			var checkBoxDivIdRegistered = '#checkSelected' + i;
	// 			if ($(checkBoxDivIdRegistered)) {
	// 				$(checkBoxDivIdRegistered).prop("checked", true);
	// 				console.log($(checkBoxDivIdRegistered));
	// 			}
	// 		}
	// 	} else {
	// 		for (i = 0; i < applicationNoLength; i++) {
	// 			var checkBoxDivIdRegistered = '#checkSelected' + i;
	// 			if ($(checkBoxDivIdRegistered)) {
	// 				$(checkBoxDivIdRegistered).prop("checked", false);
	// 			}
	// 		}
	// 	}
	// });
}

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


			sendForm('data4ApplicantProfile');


		}
		//sendForm('data4ApplicantProfile');
	} while (index != i++);
}



function setuserName() {
	user = document.loginForm.username.value;
}

var currentdate = "";
var datetime = "";
var TempUser = "";

//------------------------------------------------------MAIN FUNCTION START---------------------------
function formApplicantList(dsp) {

	var selectedChecked = "";
	var registeredChecked = "";
	str = "";
	title = "List of Applicants";

	if (dsp == "formApplicantList") {



		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center" style="width: 100%;display:block !important">';
		str += '<ul class="navbar-nav mr-lg-2" style="display:block">';
		str += '<li class="nav-item ml-0">';
		str += '<div class="row" style="padding:3px 0">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 d-flex align-items-center"><h4 class="navTitle">' + title + '</h4></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department') {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListApplicantOnchange();" >';
			str += programName;
			str += programName1;
			str += '</select>';
		}
		else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListApplicantOnchange();" >';
			str += programName;
			str += '</select>';
		}
		str += '</div>';
		let date = new Date().getFullYear();

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterListApplicantOnchange();">';
		for (i = 2014; i <= date + 2; i++) {
			if (i == date + 2) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-2">';
		str += '<select class="form-control form-control-sm" id="batchnumber" onchange="dataRep[this.id]=this.value;filterListApplicantOnchange();">';

		str += '</select>';
		str += '</div>';



		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1 d-flex align-items-center">';
		str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="filterListApplicant();" id="filterBtn">View List</button>';
		str += '</div>';

		str += '</div>';

		str += '</div>';
		str += '</li>';
		str += '</ul>';
		str += '</div>';
		str += '</nav >';


		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="applicantTable">';
		str += '<thead><tr>';
		str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		str += '<th></th>';
		// str += '<th>#</th>';
		str += "<th>Applicant's Name</th>";
		str += '<th width="10%">Application No</th>';
		str += '<th>NIC</th>';
		str += '<th>Address</th>';
		str += '<th>Tel:No.</th>';
		str += '<th width="7%">Mobile No</th>';
		str += '<th>Email</th>';
		str += '<th>Submitted Date</th>';
		str += '<th>Application Fee</th>';
		if (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") {
			str += '<th>Add Payment</th>';
		}
		// str += '<th>PIN No</th>';
		str += '</tr></thead>';
		str += '<tbody>';

		if (applicationNoLength > 0 && document.getElementById('selectedDegreeName')) {

			count = 0;
			for (var i = 0; i < applicationNoLength; i++) {

				if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
						count++;
						str += '<tr>';
						varselectedChecked = "";
						if (selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes") {
							selectedChecked = "checked";
						} else {
							selectedChecked = "";
						}
						str += "<td><input type='checkbox' " + selectedChecked + "  id='checkSelected" + i + "' name='checkSelected" + i + "''/></td>";
						str += "<div id='notesDiv" + i + "' style='width:200px;display:none' class='investView'><textarea rows='5' name='notes" + i + "'  id='notes" + i + "' style='width:100%;float:left;'  onchange='dataRep[this.name]=this.value'></textarea></div></td>";
						str += '<td>' + count + '</td>';
						str += '<td style="text-align: center;"><button id="Namebtn' + i + '" onclick="loadProfileApplicant(this);" class="btn btn-info btn-rounded btn-fw" style="padding: 8px 20px;width: 100%;">' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</button></td>';

						// str += '<td>' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</td>';
						str += '<td>' + applicationNoArr[i] + "<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3" + i + "' value= '" + applicationNoArr[i] + "' ></input></td>";

						str += '<td>' + studentNICArr[i] + '</td>';
						str += '<td>' + studentPermanentAddressArr[i] + '</td>';

						str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactLanArr[i].replace(/\s/g, '') + '"])>' + studentContactLanArr[i] + '</span></td>';
						str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactMobileArr[i].replace(/\s/g, '') + '"])>' + studentContactMobileArr[i] + '</span></td>';
						str += '<td><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + studentContactEmailArr[i] + '" target="_blank"> ' + studentContactEmailArr[i] + '</a></td>';
						str += '<td>' + applicant_appliedDate[i] + '</td>';
						str += '<td id="applicationFee+' + i + '">' + applicant_Pay_amount[i] + '</td>';
						if (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") {
							str += '<td style="text-align: center;"><button id="Namebtn' + i + '" onclick="changeApplicationPaymentNew(' + i + ');" class="btn btn-success btn-rounded btn-fw" style="padding: 8px 20px;white-space: nowrap;">Add Payment</button></td>';
						}

						// str += '<td>' + pinArr[i] + '</td>';
						str += '</tr>';

					}
				}
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

function changeApplicationPaymentNew(index) {
	//jobStatus 1 = add , 2 = deduct
	//paymentType 1 = 16digitpayment, 2 = ManualPayment


	let getData = {
		action: "getIncomeCatDataForBatchUpdate",
		degreeCode: document.getElementById('selectedDegreeName').value,
		academicYear: document.getElementById('achedamicYear').value,
		batchNumber: document.getElementById('batchnumber').value,
		authcode: authcode,
		username: dataRep['userId'],
	};
	console.log(getData);

	$.ajax({
		type: 'POST',
		url: 'rules/batch.php',
		data: getData,
		dataType: 'json',
		success: function (incomeSource) {
			if (incomeSource && incomeSource.length > 0 && incomeSource[0].status === 200) {
				let incomeSourceData = "";
				$.each(incomeSource, function (index2, incomeSources) {
					incomeSourceData += '<option value="' + incomeSources.IncomeCategoryCode + '" data-amount="' + incomeSources.IncomeCategoryValue + '">' + incomeSources.IncomeCategoryTitle + '</option>';
				});

				Swal.fire({
					title: 'Payment Details',
					html: `
								<form>
									<div class="row mb-3">
									<div class="col-sm-12" style="text-align: left;">
										<div class="row">
											<div class="col-sm-4">
												<label class="form-label" for="paymentType">Select Payment Type:</label>
											</div>										
											<div class="col-sm-6">
												<select id="paymentType" class="form-control" onchange="updateAmount()">
												<option value="0" data-amount="0">Select Type</option>
												`+ incomeSourceData + `
												</select>
											</div>
										<div>
									</div>
									<div class="col-sm-12" style="text-align: left; margin-top: 10px;">
										<div class="row">
											<div class="col-sm-4">
												<label class="form-label" for="paymentAmount">Payment Amount:</label>
											</div>										
											<div class="col-sm-6">
												<input type="number" id="paymentAmount" name="paymentAmount" class="form-control" required>
											</div>
										<div>
									</div>
									<div class="col-sm-12" style="text-align: left;margin-top: 10px;">
										<div class="row">
											<div class="col-sm-4">
												<label class="form-label" for="paymentMethod">Payment Method:</label>
											</div>										
											<div class="col-sm-6">
												<select id="paymentMethod" class="form-control"">
												<option value="Bank">Bank</option>
												<option value="Card">Card</option>
												</select>
											</div>
										<div>
									</div>
									<div class="col-sm-12" style="text-align: left; margin-top: 10px;">
										<div class="row">
											<div class="col-sm-4">
												<label class="form-label" for="paidDate">Paid Date:</label><br>
											</div>										
											<div class="col-sm-6">
												<input type="date" id="paidDate" name="paidDate" class="form-control">
											</div>
										<div>
									</div>							
									
									</div>
								</form>   
								`,
					focusConfirm: false,
					showCancelButton: true,
					confirmButtonText: 'Save Payment',
					customClass: {
						popup: 'custom-width-popup'
					}
				}).then((result) => {
					if (result.isConfirmed) {
						const paymentAmount = document.getElementById('paymentAmount').value;
						const paidDate = document.getElementById('paidDate').value;
						const IncomeCategoryCode = document.getElementById('paymentType').value;
						const paymentMethod = document.getElementById('paymentMethod').value;


						let getData2 = {
							action: "getDataForBatchUpdate",
							degreeCode: document.getElementById('selectedDegreeName').value,
							academicYear: document.getElementById('achedamicYear').value,
							batchNumber: document.getElementById('batchnumber').value,
							authcode: authcode,
							username: dataRep['userId'],
						};

						$.ajax({
							type: 'POST',
							url: 'rules/batch.php',
							data: getData2,
							dataType: 'json',
							success: function (batchData) {
								let biledAmmount = 0;


								if (batchData && batchData.length > 0 && batchData[0].status === 200) {
									const IncomeSourceCode = batchData[0].dIncomeSourceCode;
									$.each(incomeSource, function (index2, incomeSources) {
										if (IncomeCategoryCode == incomeSources.IncomeCategoryCode) {
											biledAmmount = incomeSources.IncomeCategoryValue;
										}
									});
									let unitCode = "2";
									let sourceCode = IncomeSourceCode;
									let CategoryCode = IncomeCategoryCode;
									let academicYear = document.getElementById('achedamicYear').value;
									let yr = academicYear.substr(academicYear.length - 2);
									let yy = (applicantBatchNumber[index] - 1);
									let position = 0;
									let year = [yr.slice(0, position), yy, yr.slice(position)].join('');
									let studentNo = applicationNoArr[index];
									let ss = studentNo.substring(studentNo.length - 3);
									let medium = medium1Arr[index];
									var ref = "";
									let stuE;
									if (medium == "en") {
										stuE = "7" + ss.toString().padStart(4, "0");
									} else {
										stuE = ss.toString().padStart(5, "0");

									}
									// 	let se = studentNo.substring(0, studentNo.length - 1);
									// 	let stuE = se.substr(se.length - 3);
									// 	let xy = "07";
									// 	let position = 0;
									// 	let stuNoE = [stuE.slice(0, position), xy, stuE.slice(position)].join('');
									let partcodeE = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuE);
									let ok = /^\d+$/.test(partcodeE)
									let checkdigit = ok ? luhn_caclulate(partcodeE) : ""
									let fullcode = ok ? partcodeE + checkdigit : ""
									ref = fullcode;
									console.log(ref);


									// }
									// else {
									// 	// let ss = studentNo.substr(studentNo.length - 3);
									// 	// let xx = "00";
									// 	// let position = 0;
									// 	// let stuNo = [ss.slice(0, position), xx, ss.slice(position)].join('');
									// 	let parts = studentNo.split("/");
									// 	let lastPart = parts[parts.length - 1];
									// 	let number = lastPart.match(/\d+/);
									// 	let numericPart = number ? number[0] : "0";
									// 	let stuNo = numericPart.padStart(5, "0");

									// 	let partcode = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuNo);
									// 	let ok = /^\d+$/.test(partcode)
									// 	let checkdigit = ok ? luhn_caclulate(partcode) : ""
									// 	let fullcode = ok ? partcode + checkdigit : ""
									// 	ref = fullcode;


									// }

									let bankdate = paidDate;
									let setData16Digit = {
										action: "data4Add16DigitPayment",
										Pay_RefNo: ref,
										Pay_studentNo: studentNo,
										Pay_sourceCode: sourceCode,
										Pay_CategoryCode: CategoryCode,
										Pay_amount: parseFloat(paymentAmount).toFixed(2),
										Response_Progress_Time: bankdate, //vf
										Pay_Method: paymentMethod,
										Response_Progress: 1,
										authcode: authcode,
										username: dataRep['userId'],
										// Response_Progress_Time: installment,
									};
									console.log(setData16Digit);
									let paymentStatus = "";
									let paidamount = parseFloat(paymentAmount).toFixed(2);
									let biledAmount = parseFloat(biledAmmount).toFixed(2);
									if (paidamount >= biledAmount && biledAmount >= 0) {
										paymentStatus = 'Paid';
									} else if (paidamount > 0 && paidamount < biledAmount) {
										paymentStatus = 'Partially Paid';
									} else {
										paymentStatus = 'Unpaid';
									}
									console.log(paymentStatus)

									let updateApplicationSystem = {
										action: "data4Update16DigitPaymentApplicantionFee",
										paidamount: paidamount,
										dateofpaid: bankdate,
										payment_status: paymentStatus,
										payed_mode: paymentMethod,
										applicationNo: studentNo,
										authcode: authcode,
										username: dataRep['userId'],
									};


									$.ajax({
										type: 'POST',
										url: 'rules/payment.php',
										data: setData16Digit,
										dataType: 'json',
										success: function (res) {
											if (res.status === 200) {
												$.ajax({
													type: 'POST',
													url: 'rules/payment.php',
													data: updateApplicationSystem,
													dataType: 'json',
													success: function (res) {

														// let tempay = (Number(applicant_Pay_amount[index])) + Number(paymentAmount);
														// applicantDTable.cell("#applicationFee" + index).data(tempay.toLocaleString());
														// applicantDTable.draw();

														Swal.fire({
															title: 'Payment Updated',
															text: `The payment has been processed successfully.`,
															icon: 'success',
															confirmButtonText: 'Okay',
															timer: 5000,
															timerProgressBar: true,

															allowOutsideClick: false,
															allowEscapeKey: false,
															showCloseButton: false
														}).then((result) => {
															filterListApplicant();
														});


													},
													error: function (error) {
														console.log(error)

													}
												});

											} else {

												Swal.fire({
													title: 'Warning',
													text: 'This payment already has a generated 16-digit code. Are you sure you want to process this payment? If you proceed, the existing amount in the student’s profile will be updated by adding the new amount to the current balance.',
													icon: 'warning',
													showCancelButton: true,
													confirmButtonText: 'Yes, Process',
													cancelButtonText: 'No, Cancel',
												}).then((result) => {
													if (result.isConfirmed) {

														let setData16Digit = {
															action: "data4Update16DigitPayment",
															Pay_RefNo: ref,
															Pay_studentNo: studentNo,
															Pay_sourceCode: sourceCode,
															Pay_CategoryCode: CategoryCode,
															Pay_amount: parseFloat(paymentAmount).toFixed(2),
															Response_Progress_Time: bankdate, //vf
															Pay_Method: paymentMethod,
															Response_Progress: 1,
															authcode: authcode,
															username: dataRep['userId'],
														};


														$.ajax({
															type: 'POST',
															url: 'rules/payment.php',
															data: setData16Digit,
															dataType: 'json',
															success: function (res) {
																if (res.status === 200) {
																	$.ajax({
																		type: 'POST',
																		url: 'rules/payment.php',
																		data: updateApplicationSystem,
																		dataType: 'json',
																		success: function (res) {
																			Swal.fire({
																				title: 'Payment Updated',
																				text: `The payment has been processed successfully.`,
																				icon: 'success',
																				confirmButtonText: 'Okay',
																				timer: 5000,
																				timerProgressBar: true,

																				allowOutsideClick: false,
																				allowEscapeKey: false,
																				showCloseButton: false
																			}).then((result) => {
																				filterListApplicant();
																			});
																			// let tempay = (Number(applicant_Pay_amount[index])) + Number(paymentAmount);
																			// applicantDTable.cell("#applicationFee" + index).data(tempay.toLocaleString());
																			// applicantDTable.draw();

																			// Swal.fire({
																			// 	title: 'Success',
																			// 	text: `The payment has been processed successfully.`,
																			// 	icon: 'success',
																			// 	confirmButtonText: 'Okay',
																			// });
																		},
																		error: function (error) {
																			console.log(error)

																		}
																	});

																}
															}, error: function (error) {
																console.log(error)

															}
														});

													} else {
														Swal.fire({
															title: 'Cancelled',
															text: 'The payment process was cancelled, and no changes were made to the student’s profile.',
															icon: 'info',
															confirmButtonText: 'Okay',
														});
													}
												});
											}
										},
										error: function (error) {
											console.log(error)

										}
									});



								}
							}
						});

					}
				});

			}
		},
		error: function (error) {
			console.log(error)

		}
	});





}


function truncateString(inputString, maxLength) {
	if (inputString.length > maxLength) {
		return inputString.substring(0, maxLength) + '...';
	} else {
		return inputString;
	}
}

function refresshStudentList() {

	applicationNoLength = 0;
	countviewList = 0;
	divid = 0;
	pagenew = " ";
	nextpage = 0;
	document.getElementById("list").innerHTML = "";

}
//------------------------------------------------------MAIN FUNCTION END---------------------------	

//------------------------------------------------------SELECT ALL FUNCTION START---------------------------	
function SelectAllList() {
	for (i = 0; i < applicationNoLength; i++) {
		//alert('ok');
		var checkBoxDivIdRegistered = 'checkSelected' + i;
		if (document.getElementById('checkSelected' + i)) {
			document.getElementById('checkSelected' + i).checked = true;
			document.getElementById("select-all").disabled = true;
			document.getElementById("select-non").disabled = false;

			//for( var x=0; x<applicationNoLength; x++){

			//if (applicationNoArr.indexOf(applicationNoArr[x]) == applicationNoArr.lastIndexOf(applicationNoArr[x]) || (applicationNoArr.indexOf(applicationNoArr[x]) != applicationNoArr.lastIndexOf(applicationNoArr[x]) && applicationNoArr.indexOf(applicationNoArr[x])==x)){

			//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[x] & document.getElementById('achedamicYear').value==achedamicYearArr[x] ){
			var nam = "Alist";
			nam += x;
			if (count == 1) {
				count = 0;
				document.getElementById(nam).style.backgroundColor = '#d0d0fb';
			}
			else {
				count++;
				document.getElementById(nam).style.backgroundColor = '#e7e7fd';
			}
			//alert(nam);
			//}
			//}
			//}
		}
	}
}
//------------------------------------------------------SELECT ALL FUNCTION END---------------------------	

//------------------------------------------------------UNSELECT FUNCTION STRAT---------------------------
function UnselectAllList() {
	for (i = 0; i < applicationNoLength; i++) {
		var checkBoxDivIdRegistered = 'checkSelected' + i;
		if (document.getElementById(checkBoxDivIdRegistered)) {
			document.getElementById(checkBoxDivIdRegistered).checked = false;
			document.getElementById("select-all").disabled = false;
			document.getElementById("select-non").disabled = true;
			var nam = "Alist";
			nam += x;
			if (count == 1) {
				count = 0;
				document.getElementById(nam).style.backgroundColor = '#FDFDFD';
			}
			else {
				count++;
				document.getElementById(nam).style.backgroundColor = '#FDFDFD';
			}

		}
	}
}
//------------------------------------------------------UNSELECT FUNCTION END---------------------------

//------------------------------------------------------ADD ROW COLOUR FUNCTION START---------------------------
function AddRowColor(x, _this) {

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
function formApplicantListsendForm(frm) {

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
	if (confirm("Confirm Save!") == true) {
		if (frm == 'updateApplicantList') {

			doc = document.maintainformApplicantList;
			dataStr += "&interface=" + frm;
			var newStr = "";

			for (var i = 0; i < applicationNoLength; i++) {
				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					if (document.getElementById('checkSelected' + i)) {
						if (document.getElementById('checkSelected' + i).checked == true) {

							newStr = "&universityCode=" + universityCodeArr[i] + "&facultyCode=" + facultyCodeArr[i] + "&programmeTypeCode=" + programmeTypeCodeArr[i] + "&degreeCode=" + degreeCodeArr[i] + "&studentNIC=" + studentNICArr[i] + "&applicationNo=" + applicationNoArr[i];

							newStr += "&selected=" + "YES";
							//newStr += "&notes="+TempBulkNote;
							ApplicantData[i] = dataStr + newStr;


						}
					}

				}

			}
			//-----------------------------------------------------add Bulk Note--------------------------------
			var checkNotes = 0;
			for (var i = 0; i < applicationNoLength; i++) {
				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					if (document.getElementById('checkSelected' + i)) {
						if (document.getElementById('checkSelected' + i).checked == true) {
							if (document.getElementById('notes' + i).value != " ") {
								checkNotes++;
							}
						}
					}
				}
			}

			if (BulkNote != " " || checkNotes != 0) {
				newStr1 = "action=add";
				newStr1 += "&interface=" + "addBulkNotes";
				for (var i = 0; i < applicationNoLength; i++) {
					if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
						if (document.getElementById('checkSelected' + i)) {
							if (document.getElementById('checkSelected' + i).checked == true) {
								currentdate = new Date();
								datetime = + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/"
									+ currentdate.getFullYear() + "/"
									+ currentdate.getHours() + "/"
									+ currentdate.getMinutes() + "/"
									+ currentdate.getSeconds();

								if (document.getElementById('notes' + i).value != " " && TempBulkNote != undefined) {
									newStr1 += "&messageId=" + datetime;
									newStr1 += "&referenceNo=" + applicationNoArr[i];
									newStr1 += "&userId=" + TempUser;
									newStr1 += "&message=" + TempBulkNote + "/" + document.getElementById('notes' + i).value;
								}
								else if (document.getElementById('notes' + i).value != " " && TempBulkNote == undefined) {
									newStr1 += "&messageId=" + datetime;
									newStr1 += "&referenceNo=" + applicationNoArr[i];
									newStr1 += "&userId=" + TempUser;
									newStr1 += "&message=" + document.getElementById('notes' + i).value;
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

				}
			}
			for (var j = 0; j < applicationNoLength; j++) {
				if (ApplicantData[j] != "" || ApplicantData[j] != undefined) {
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", ApplicantData[j]);
				}
			}



		}
	} else {
		//x = "You pressed Cancel!";
	}


	return 0;

}
//------------------------------------------------------UPDATE SELECTED FUNCTION END---------------------------

//------------------------------------------------------SEND BULK NOTE FUNCTION START---------------------------	
function formBulkNotesendForm(frm) {
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
function formDeleteApplicationsendFormSwal(frm) {

	var doc, dataStr;
	const applicationRemove = [];
	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}

	Swal.fire({
		title: 'Are you sure?',
		text: 'Once deleted, you will not be able to recover this application data!',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: 'No, Cancel!',
	}).then((result) => {
		if (result.isConfirmed) {
			if (frm == 'deleteApplicationForm') {

				doc = document.maintainformApplicantList;
				dataStr += "&interface=" + frm;
				var newStr = "";

				applicantDTable.rows().every(function (i) {
					// Get the data for the current row
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						dataRep["ApplicationNo"] = applicationNoArr[i];
						newStr = "&applicationNo=" + applicationNoArr[i];
						let data = dataStr + newStr;
						applicationRemove.push(data);
					}
				});

				applicationRemove.forEach((item, index) => {
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", item);
				});


				// for (var i = 0; i < applicationNoLength; i++) {
				// 	if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
				// 		if (document.getElementById('checkSelected' + i)) {
				// 			if (document.getElementById('checkSelected' + i).checked == true) {

				// 				//newStr ="&universityCode="+universityCodeArr[i]+"&facultyCode="+facultyCodeArr[i]+"&programmeTypeCode="+programmeTypeCodeArr[i]+"&degreeCode="+degreeCodeArr[i]+"&studentNIC="+studentNICArr[i]+"&applicationNo="+applicationNoArr[i];

				// 				dataRep["ApplicationNo"] = applicationNoArr[i];
				// 				newStr = "&applicationNo=" + applicationNoArr[i];
				// 				ApplicantData[i] = dataStr + newStr;
				// 			}
				// 		}
				// 	}
				// }

				// for (var j = 0; j < applicationNoLength; j++) {
				// 	if (ApplicantData[j] != "") {
				// 		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", ApplicantData[j]);
				// 	}
				// }

			}
		}
	});

	return 0;

}
//----------------------------------------------------------DELETE APPLICATION FUNCTION END--------------------------

//----------------------------------------------------------CHACK DELETE OR SAVE FUNCTION START--------------------------
function checkdeleteorsaveapplication() {
	checkdeleteorsave = 'deletefunction';
}
//----------------------------------------------------------CHACK DELETE OR SAVE FUNCTION END--------------------------
//-----------------------------------------------------------------------GET COMPLETE APPLICATION FUNCTION START------------	
function CompleteApplicationEng2(type) {

	var count = 1;
	if (document.getElementById('selectedDegreeName').value == "Please Select Programme") {
		alert("Please Select Programm and the Year.");
	}

	else {


		let degreeCode = document.getElementById('selectedDegreeName').value;
		let academicYear = document.getElementById('achedamicYear').value;
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
				let batch
				if (response[0].status === 200) {
					batch = response[0].batchName;
				}

				let newStr = "";
				if (type == "w") {
					newStr += `<style>
		@font-face
		{font-family:"Cambria Math";
		panose-1:2 4 5 3 5 4 6 3 2 4;
		mso-font-charset:0;
		mso-generic-font-family:roman;
		mso-font-pitch:variable;
		mso-font-signature:-536869121 1107305727 33554432 0 415 0;}
	 p.MsoNormal, li.MsoNormal, div.MsoNormal
		{mso-style-unhide:no;
		mso-style-qformat:yes;
		mso-style-parent:"";
		margin:0cm;
		mso-pagination:widow-orphan;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	p.MsoHeader, li.MsoHeader, div.MsoHeader
		{mso-style-priority:99;
		mso-style-link:"Header Char";
		margin:0cm;
		mso-pagination:widow-orphan;
		tab-stops:center 225.65pt right 451.3pt;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	p.MsoFooter, li.MsoFooter, div.MsoFooter
		{mso-style-priority:99;
		mso-style-link:"Footer Char";
		margin:0cm;
		mso-pagination:widow-orphan;
		tab-stops:center 225.65pt right 451.3pt;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	p
		{mso-style-noshow:yes;
		mso-style-priority:99;
		mso-margin-top-alt:auto;
		margin-right:0cm;
		mso-margin-bottom-alt:auto;
		margin-left:0cm;
		mso-pagination:widow-orphan;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	p.msonormal0, li.msonormal0, div.msonormal0
		{mso-style-name:msonormal;
		mso-style-noshow:yes;
		mso-style-priority:99;
		mso-style-unhide:no;
		mso-margin-top-alt:auto;
		margin-right:0cm;
		mso-margin-bottom-alt:auto;
		margin-left:0cm;
		mso-pagination:widow-orphan;
		font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;}
	span.HeaderChar
		{mso-style-name:"Header Char";
		mso-style-priority:99;
		mso-style-unhide:no;
		mso-style-locked:yes;
		mso-style-link:Header;
		mso-ansi-font-size:12.0pt;
		mso-bidi-font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-ascii-font-family:"Times New Roman";
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;
		mso-hansi-font-family:"Times New Roman";
		mso-bidi-font-family:"Times New Roman";}
	span.FooterChar
		{mso-style-name:"Footer Char";
		mso-style-priority:99;
		mso-style-unhide:no;
		mso-style-locked:yes;
		mso-style-link:Footer;
		mso-ansi-font-size:12.0pt;
		mso-bidi-font-size:12.0pt;
		font-family:"Times New Roman",serif;
		mso-ascii-font-family:"Times New Roman";
		mso-fareast-font-family:"Times New Roman";
		mso-fareast-theme-font:minor-fareast;
		mso-hansi-font-family:"Times New Roman";
		mso-bidi-font-family:"Times New Roman";}
	span.GramE
		{mso-style-name:"";
		mso-gram-e:yes;}
	.MsoChpDefault
		{mso-style-type:export-only;
		mso-default-props:yes;
		font-size:10.0pt;
		mso-ansi-font-size:10.0pt;
		mso-bidi-font-size:10.0pt;
		mso-font-kerning:0pt;
		mso-ligatures:none;}
	   @page WordSection1
		   { size:841.9pt 595.3pt;
	mso-page-orientation:landscape;
	margin:36.0pt 36.0pt 36.0pt 36.0pt;
	mso-header-margin:35.4pt;
	mso-footer-margin:35.4pt;
	mso-paper-source:0;}
	   div.WordSection1
		   {page:WordSection1;}
	   
	   </style>
	   `;

					newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
					newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + academicYear + "s</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch - " + batch + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List of Applicants - English Medium</div>";
					newStr += "<br/>";
				} else {
					newStr += "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr += "<div id='topics1' class='info'></div>";
					// newStr += '<img src="img/wordTitle3-l.png" width="1000"/>';

					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>" + $("#selectedDegreeName option:selected").text(); + " Degree Programme</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year " + academicYear + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch : " + batch + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List of Applicants - English Medium</div>";

				}
				if (checkdeleteorsave == 'deletefunction') {
					newStr += "<div class='investLabel' style='text-align:left;font-weight:bold;'>user:" + dataRep['userName'] + "</div>";
				}
				newStr += "<br/>";
				newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
				newStr += "<tr>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:5%'>No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Application No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:5%'>Title</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:13%'>Name With Initial</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:17%'>Applicant Full Name</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>NIC Number</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:16%'>Address</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Tel:No.</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Mobile No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:8%'>Email</th>";
				newStr += "</tr>";

				applicantDTable.rows().every(function (i) {
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
							if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] && document.getElementById('achedamicYear').value == achedamicYearArr[i] && (medium1Arr[i] == "en")) {
								newStr += "<tr>";
								newStr += '<td  style="word-wrap:break-word;width:5%;font-size:12px;font-family:Times New Roman;text-align: center;">' + count + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + applicationNoArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:5%;font-size:12px;font-family:Times New Roman;text-align: center;">' + studentPersonalTitleArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:13%;font-size:12px;font-family:Times New Roman;">' + studentInitialArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:17%;font-size:12px;font-family:Times New Roman;">' + studentNameArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentNICArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:16%;font-size:12px;font-family:Times New Roman;">' + studentPermanentAddressArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentContactLanArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentContactMobileArr[i] + '</td>';
								newStr += '<td  style="word-wrap:break-word;width:8%;font-size:12px;font-family:Times New Roman;">' + studentContactEmailArr[i] + '</td>';
								newStr += "</tr>";
								count++;
							}
						}
					}
				});

				newStr += "</table>";
				newStr += "</div>";
				var exportFilename = "Applicant List - English Medium.doc";
				let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
				sendDataList += "&sheetName=" + "Applicant List - English";
				sendDataList += "&orientation=" + "l";

				if (type == "w") {
					isrHandle.getDoc(newStr, exportFilename, "landscape");
				}

				if (type == "e") {
					//eng
					var exportFilename = "Applicant List - English Medium.xls";
					var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
					//eng

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

					//eng
				}
			}

		});




	}

}
//-----------------------------------------------------------------------GET COMPLETE APPLICATION FUNCTION END------------

//-------------------------------------------------------------------------------SEARCH FUNCTION STRART---------------	
function serachApplicant() {

	divid = 1;
	var pagenew = "yes";
	var nextpage = 0;

	var countSearch = 0;
	if (countviewList != 0) {
		var c = 0;
		var appNIC = document.getElementById('searchApplicant').value;
		var tempName = document.getElementById('searchApplicantName').value;
		for (var i = 0; i < applicationNoLength; i++) {
			if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					if (document.getElementById('studentNIC' + i)) {
						c++;
						if (c % 2 == 0) {
							document.getElementById('Alist' + i).style.backgroundColor = '#ffece6';
							document.getElementById('Namebtn' + i).style.backgroundColor = '#ffece6';
						}
						else {
							document.getElementById('Alist' + i).style.backgroundColor = '#ffd9cc';
							document.getElementById('Namebtn' + i).style.backgroundColor = '#ffd9cc';
						}

					}
				}

			}
		}
		var check = 0;
		for (var i = 0; i < applicationNoLength; i++) {
			if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					if (document.getElementById('searchApplicantName').value != "" & document.getElementById('searchApplicant').value != "") {
						if (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) != -1) {
							check++;
							countSearch++;
							document.getElementById('Alist' + i).style.backgroundColor = '#ccffeb';
							document.getElementById('Namebtn' + i).style.backgroundColor = '#ccffeb';
						}
					}
					else {
						if ((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0 & check == 0) || (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) == 0 & check == 0)) {
							countSearch++;
							document.getElementById('Alist' + i).style.backgroundColor = '#ccffeb';
							document.getElementById('Namebtn' + i).style.backgroundColor = '#ccffeb';
						}
					}
				}

			}
		}
		if (countSearch == 0) {
			alert('There is No Matching Data');
		}
	}
	else {
		if (document.getElementById('selectedDegreeName').value == "Please Select Programme") {
			alert('Please enter Relevent Details');
		}
		else {
			document.getElementById('list').innerHTML = document.getElementById('list').innerHTML.replace = "";
			if (document.getElementById('searchApplicantName').value != "" & document.getElementById('searchApplicant').value != "") {

				var viewStr = "<table id='myTable' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
				viewStr += "<tr style='background-Color:#ff9f80'>";
				viewStr += "<th style='width:20px;padding-right:10px;'><div style='width:20px;'></div></th>";
				viewStr += "<th style='width:250px;fontColor:white' align='center'><div class='investLabel_l' style='width:250px;'><font color='black'>Applicant Name</font></div></th>";
				viewStr += "<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Application No</font></div></th>";
				viewStr += "<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;' ><font color='black'>NIC</font></div></th>";
				viewStr += "<th style='width:150px;'><div class='investLabel_l' style='width:150px;word-wrap:break-word;'><font color='black'>Address</font></div></th>";
				viewStr += "<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Tel:No.</font></div></th>";
				viewStr += "<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Mobile No</font></div></th>";
				viewStr += "<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Email</font></div></th>";
				viewStr += "<th style='width:25px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:25px;word-wrap:break-word;'><font color='black'>PIN No</font></div></th>";
				viewStr += "<th style='width:30px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:30px;word-wrap:break-word;'><font color='black'>Select</font></div></th>";
				viewStr += "<th style='width:40px;'><div class='investLabel' style='width:40px;'><font color='black'>Notes</font></div></th>";
				viewStr += "</tr>";

				var count = 0;
				var tempName = document.getElementById('searchApplicantName').value;
				var appNIC = document.getElementById('searchApplicant').value;
				for (var i = 0; i < applicationNoLength; i++) {
					if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
						if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
							//alert(studentInitialArr[i].indexOf(tempName));
							if (studentInitialArr[i].indexOf(tempName) != -1 && studentNICArr[i] == appNIC) {
								countSearch++;
								count++;


								if (pagenew == "yes") {
									viewStr += "<div  id='displaying" + divid + "' style='margin:0px 10px;clear:both'>";
									pagenew = "no";
								}

								if (count % 2 == 0) {

									viewStr += "<tr style='background-Color:#ffece6;>";
								}
								else {
									viewStr += "<tr style='background-Color:#ffd9cc;>";
								}
								viewStr += "<div class='info'  id='Alist" + i + "' name='testInfo" + i + "' style='background-Color:#ffece6;'>";

								viewStr += "<td style='width:20px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:20px;' name='count" + i + "' id='count" + i + "' onchange='dataRep[this.name]=this.value;'>";
								viewStr += count + "</div></td>";

								viewStr += "<td style='width:250px;word-wrap:break-word' align='center'><div class='investView_l' style='width:250px;' name='studentName" + i + "' id='studentName" + i + "' onchange='dataRep[this.name]=this.value;'>";
								if (count % 2 == 0) {

									//newStr+='<td  style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitleArr[i]+'.'+studentInitialArr[i]+'</td>';	

									viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffece6;font-size:12px;" id="Namebtn' + i + '" onclick="loadProfile(this);">' + studentInitialArr[i] + '</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
								}
								else {
									viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffd9cc;font-size:12px;" id="Namebtn' + i + '" onclick="loadProfile(this);">' + studentInitialArr[i] + '</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
								}
								viewStr += "<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3" + i + "' value= '" + applicationNoArr[i] + "' >";

								viewStr += "<td style='width:150px;word-wrap:break-word' align='center'><div  class='investView' style='width:150px;' name='applicationNo" + i + "' id='applicationNo" + i + "' onchange='dataRep[this.name]=this.value;'>";
								viewStr += applicationNoArr[i] + "</div></td>";

								viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='studentNIC" + i + "' id='studentNIC" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentNICArr[i] + "</div></td>";

								viewStr += "<td style='width:150px;word-wrap:break-word'><div class='investView' style='width:150px;' name='studentNIC" + i + "' id='studentNIC" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentPermanentAddressArr[i] + "</div></td>";

								viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='TelNo" + i + "' id='TelNo" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentContactLanArr[i] + "</div></td>";

								viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='MobNo" + i + "' id='MobNo" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentContactMobileArr[i] + "</div></td>";


								viewStr += "<td style='width:200px;word-wrap:break-word' align='center'><div class='investView' style='width:200px;' name='EmailAdd" + i + "' id='EmailAdd" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentContactEmailArr[i] + "</div></td>";

								if (selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes") {
									selectedChecked = "checked";
								} else {
									selectedChecked = "";
								}


								var checkBoxDivIdSelected = 'checkSelected' + i;
								if (document.getElementById(checkBoxDivIdSelected)) {
									if (document.getElementById(checkBoxDivIdSelected).checked) {
										selectedChecked = 'checked';
									}
								}

								viewStr += "<td style='width:25px;word-wrap:break-word' align='center'><div class='investView' style='width:25px;' name='pin" + i + "' id='pin" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + pinArr[i] + "</div></td>";

								viewStr += "<td style='width:30px;word-wrap:break-word' align='center'><div style='width:30px;' class='investView' name='selected" + i + "' id='selected" + i + "'>"; //Alist"+i+"
								viewStr += "<input type='checkbox' " + selectedChecked + "  id='checkSelected" + i + "' onChange='AddRowColor(" + i + ", this)' name='checkSelected" + i + "''/>";
								viewStr += "</div></td>";

								viewStr += "<td style='width:40px;word-wrap:break-word'><div style='width:30px;' class='investView'><input type='button' name='notesBttn" + i + "' id='notesBttn" + i + "' style='margin-top:0px' value='+' onclick='generateNotes(this);dataRep[this.name]=this.value; '>";
								viewStr += " </textarea></div>";

								viewStr += "<div id='notesDiv" + i + "' style='width:130px;display:none' class='investView'><textarea rows='auto' name='notes" + i + "'  id='notes" + i + "' style='width:80%;float:left;'  onchange='dataRep[this.name]=this.value'>";
								viewStr += " </textarea></div></td>";

								viewStr += "</div>";
								viewStr += "</tr>";
								nextpage++;
								if (nextpage == 50) {
									nextpage = 0;
									pagenew = "yes";
									divid++;
								}

							}
						}

					}
				}
				if (countSearch == 0) {
					alert('There is No Matching Data');
				}
				viewStr += "</table><br>";
				if (count >= 1) {

					if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk') {
						var viewStr1 = '<input type="button" class="btnB"  id="Download3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';
						viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formCoordinatorMenu'" + ');>';//width:157px;height:37px; Get Application List
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						for (make = 1; make <= divid; make++) {
							viewStr1 += '<input type = "button" class ="btnB" value="' + divid + '" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						}

					}
					if (dataRep['roleName'] == 'Head of the Department') {
						var viewStr1 = '<input type="button" class="btnB"  id="Download3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';
						viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formHeadMenu'" + ');>';//width:157px;height:37px; Get Application List
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						for (make = 1; make <= divid; make++) {
							viewStr1 += '<input type = "button" class ="btnB" value="' + divid + '" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						}
					}
					if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {

						var viewStr1 = '<input type="button" class="btnB"  id="Download1" value = "Download Sinhala Medium" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download2" value = "Download English Medium" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';


						viewStr1 += "<input type='button' class='btnB'  style='background-Color:#ff6633;padding-right:20px;height:30px;' id='reApplication' value='Remove Application'  onclick=checkdeleteorsaveapplication();formDeleteApplicationsendForm('deleteApplicationForm');>";
						viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note'  onclick=generateBulkNote();>";
						viewStr1 += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" id="Reset" value="Reset"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formClerkMenu'" + ');>';
						viewStr1 += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="logout" onclick=logOut();>';

						for (make = 1; make <= divid; make++) {
							viewStr1 += '<input type = "button" class ="btnB" value="' + divid + '" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						}

					}

					if (dataRep['roleName'] == 'Assistant Registrar') {
						//var viewStr1 = "<input type='button' class='btnB' id='save' value='Save' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+")>"; 
						var viewStr1 = '<input type="button" class="btnB"  id="Download1" value = "Download Sinhala Medium" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download2" value = "Download English Medium" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';

						// viewStr1 += "<input type='button' class='btnB' id='reApplication' style='background-Color:#ff6633;padding-right:20px;height:30px;' value='Remove Application' onclick=formDeleteApplicationsendForm('deleteApplicationForm');>"; 
						//viewStr1 += '<input type="button" class="btnB"  id="Download" value = "Download"  style="margin-top:0px;padding-right:20px;width:157px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplication1();>';
						//viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note' onclick=generateBulkNote();>";            

						viewStr1 += '<input type = "button" class ="btnB" id="Reset" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refresshStudentList();showMenu(' + "'main'" + ');>';
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						for (make = 1; make <= divid; make++) {
							viewStr1 += '<input type = "button" class ="btnB" value="' + divid + '" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						}

					}



					if (dataRep['roleName'] == 'Administrator') {
						var viewStr1 = '<input type="button" class="btnB"  id="Download3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';
						viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formAdministratorMenu'" + ');>';//width:157px;height:37px; Get Application List
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						for (make = 1; make <= divid; make++) {
							viewStr1 += '<input type = "button" class ="btnB" value="' + divid + '" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						}
					}
					if (dataRep['roleName'] == 'Dean') {
						var viewStr1 = '<input type="button" class="btnB"  id="Download3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';
						viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formDeanMenu'" + ');>';//width:157px;height:37px; Get Application List
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						for (make = 1; make <= divid; make++) {
							viewStr1 += '<input type = "button" class ="btnB" value="' + divid + '" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

						}
					}
					//document.getElementById('Buttonlist').innerHTML += viewStr1;
				}
				viewStr += viewStr1;
				document.getElementById('list').innerHTML += viewStr;
				document.getElementById("View-List").disabled = true;
				document.getElementById('select-all').style = "display";
				document.getElementById('select-non').style = "display";

			}
			if ((document.getElementById('searchApplicantName').value != "" & document.getElementById('searchApplicant').value == "") || (document.getElementById('searchApplicantName').value == "" & document.getElementById('searchApplicant').value != "")) {

				var viewStr = "<table id='myTable' style='margin-left:20px;border-collapse:separate;border-spacing:2px 0;'>";
				viewStr += "<tr style='background-Color:#ff9f80'>";
				viewStr += "<th style='width:20px;padding-right:10px;'><div style='width:20px;'></div></th>";
				viewStr += "<th style='width:250px;fontColor:white' align='center'><div class='investLabel_l' style='width:250px;'><font color='black'>Applicant Name</font></div></th>";
				viewStr += "<th style='width:150px;' align='center'><div class='investLabel' style='width:150px;'><font color='black'>Application No</font></div></th>";
				viewStr += "<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;' ><font color='black'>NIC</font></div></th>";
				viewStr += "<th style='width:150px;'><div class='investLabel_l' style='width:150px;word-wrap:break-word;'><font color='black'>Address</font></div></th>";
				viewStr += "<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Tel:No.</font></div></th>";
				viewStr += "<th style='width:80px;' align='center'><div class='investLabel' style='width:80px;'><font color='black'>Mobile No</font></div></th>";
				viewStr += "<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Email</font></div></th>";
				viewStr += "<th style='width:25px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:25px;word-wrap:break-word;'><font color='black'>PIN No</font></div></th>";
				viewStr += "<th style='width:30px;word-wrap:break-word;' align='center'><div class='investLabel' style='width:30px;word-wrap:break-word;'><font color='black'>Select</font></div></th>";
				viewStr += "<th style='width:40px;'><div class='investLabel' style='width:40px;'><font color='black'>Notes</font></div></th>";
				viewStr += "</tr>";

				var count = 0;
				var tempName = document.getElementById('searchApplicantName').value;
				var appNIC = document.getElementById('searchApplicant').value;
				for (var i = 0; i < applicationNoLength; i++) {
					if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
						if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
							if ((studentInitialArr[i].indexOf(tempName) != -1 & studentInitialArr[i].indexOf(tempName) != 0) || (studentNICArr[i] == appNIC & studentInitialArr[i].indexOf(tempName) == 0)) {
								countSearch++;
								count++;
								if (count % 2 == 0) {

									viewStr += "<tr style='background-Color:#ffece6;>";
								}
								else {
									viewStr += "<tr style='background-Color:#ffd9cc;>";
								}
								viewStr += "<div class='info'  id='Alist" + i + "' name='testInfo" + i + "' style='background-Color:#ffece6;'>";

								viewStr += "<td style='width:20px;word-wrap:break-word;padding-right:10px;' align='center'><div class='investView' style='width:20px;' name='count" + i + "' id='count" + i + "' onchange='dataRep[this.name]=this.value;'>";
								viewStr += count + "</div></td>";

								viewStr += "<td style='width:250px;word-wrap:break-word' align='center'><div class='investView_l' style='width:250px;' name='studentName" + i + "' id='studentName" + i + "' onchange='dataRep[this.name]=this.value;'>";
								if (count % 2 == 0) {
									viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffece6;font-size:12px;" id="Namebtn' + i + '" onclick="loadProfile(this);">' + studentInitialArr[i] + '</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
								}
								else {
									viewStr += '<button  style="width:250px;text-align:left;background-Color:#ffd9cc;font-size:12px;" id="Namebtn' + i + '" onclick="loadProfile(this);">' + studentInitialArr[i] + '</button></div></td>';//sendForm('+"data4StudentProfileDeteilsCheckUser"+');
								}
								viewStr += "<input type='text' name='applicationNo3' style='display:none;' id='applicationNo3" + i + "' value= '" + applicationNoArr[i] + "' >";

								viewStr += "<td style='width:150px;word-wrap:break-word' align='center'><div  class='investView' style='width:150px;' name='applicationNo" + i + "' id='applicationNo" + i + "' onchange='dataRep[this.name]=this.value;'>";
								viewStr += applicationNoArr[i] + "</div></td>";

								viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='studentNIC" + i + "' id='studentNIC" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentNICArr[i] + "</div></td>";

								viewStr += "<td style='width:150px;word-wrap:break-word'><div class='investView' style='width:150px;' name='studentNIC" + i + "' id='studentNIC" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentPermanentAddressArr[i] + "</div></td>";

								viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='TelNo" + i + "' id='TelNo" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentContactLanArr[i] + "</div></td>";

								viewStr += "<td style='width:80px;word-wrap:break-word' align='center'><div class='investView' style='width:80px;' name='MobNo" + i + "' id='MobNo" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentContactMobileArr[i] + "</div></td>";


								viewStr += "<td style='width:200px;word-wrap:break-word' align='center'><div class='investView' style='width:200px;' name='EmailAdd" + i + "' id='EmailAdd" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + studentContactEmailArr[i] + "</div></td>";

								if (selectedArr[i] == "YES" || selectedArr[i] == "Yes" || selectedArr[i] == "yes") {
									selectedChecked = "checked";
								} else {
									selectedChecked = "";
								}


								var checkBoxDivIdSelected = 'checkSelected' + i;
								if (document.getElementById(checkBoxDivIdSelected)) {
									if (document.getElementById(checkBoxDivIdSelected).checked) {
										selectedChecked = 'checked';
									}
								}

								viewStr += "<td style='width:25px;word-wrap:break-word' align='center'><div class='investView' style='width:25px;' name='pin" + i + "' id='pin" + i + "'";
								viewStr += " onchange='dataRep[this.name]=this.value;'>" + pinArr[i] + "</div></td>";

								viewStr += "<td style='width:30px;word-wrap:break-word' align='center'><div style='width:30px;' class='investView' name='selected" + i + "' id='selected" + i + "'>"; //Alist"+i+"
								viewStr += "<input type='checkbox' " + selectedChecked + "  id='checkSelected" + i + "' onChange='AddRowColor(" + i + ", this)' name='checkSelected" + i + "''/>";
								viewStr += "</div></td>";

								viewStr += "<td style='width:40px;word-wrap:break-word'><div style='width:30px;' class='investView'><input type='button' name='notesBttn" + i + "' id='notesBttn" + i + "' style='margin-top:0px' value='+' onclick='generateNotes(this);dataRep[this.name]=this.value; '>";
								viewStr += " </textarea></div>";

								viewStr += "<div id='notesDiv" + i + "' style='width:130px;display:none' class='investView'><textarea rows='auto' name='notes" + i + "'  id='notes" + i + "' style='width:80%;float:left;'  onchange='dataRep[this.name]=this.value'>";
								viewStr += " </textarea></div></td>";

								viewStr += "</div>";
								viewStr += "</tr>";

							}
						}

					}
				}
				if (countSearch == 0) {
					alert('There is No Matching Data');
				}
				viewStr += "</table><br>";
				if (count >= 1) {

					if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk') {
						var viewStr1 = '<input type="button" class="btnB"  id="Download3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';
						viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formCoordinatorMenu'" + ');>';//width:157px;height:37px; Get Application List
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
					}

					if (dataRep['roleName'] == 'Head of the Department') {
						var viewStr1 = '<input type="button" class="btnB"  id="Download3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';
						viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formHeadMenu'" + ');>';//width:157px;height:37px; Get Application List
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
					}
					if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
						var viewStr1 = '<input type="button" class="btnB"  id="Download1" value = "Download Sinhala Medium" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download2" value = "Download English Medium" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';


						viewStr1 += "<input type='button' class='btnB'  style='background-Color:#ff6633;padding-right:20px;height:30px;' id='reApplication' value='Remove Application'  onclick=checkdeleteorsaveapplication();formDeleteApplicationsendForm('deleteApplicationForm');>";
						viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note'  onclick=generateBulkNote();>";
						viewStr1 += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" id="Reset" value="Reset"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formClerkMenu'" + ');>';
						viewStr1 += '<input type = "button" class ="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value="logout" onclick=logOut();>';

					}

					if (dataRep['roleName'] == 'Assistant Registrar') {
						//var viewStr1 = "<input type='button' class='btnB' id='save' value='Save' style='background-Color:#ff6633;padding-right:20px;height:30px;' onclick=formApplicantListsendForm("+'"updateApplicantList"'+");formBulkNotesendForm("+'"addBulkNotes"'+");>"; 
						var viewStr1 = '<input type="button" class="btnB"  id="Download1" value = "Download Sinhala Medium" style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download2" value = "Download English Medium"style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';

						//viewStr1 += "<input type='button' class='btnB' id='reApplication' style='background-Color:#ff6633;padding-right:20px;height:30px;' value='Remove Application' onclick=formDeleteApplicationsendForm('deleteApplicationForm');>"; 
						//viewStr1 += '<input type="button" class="btnB"  id="Download" value = "Download"  style="margin-top:0px;padding-right:20px;width:157px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplication1();>';
						//viewStr1 += "<input type='button' class='btnB' style='background-Color:#ff6633;padding-right:20px;height:30px;' id='AddNote' value='Add Note' onclick=generateBulkNote();>";            

						viewStr1 += '<input type = "button" class ="btnB" id="Reset" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" value = "Return" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick = refresshStudentList();showMenu(' + "'main'" + ');>';
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

					}
					if (dataRep['roleName'] == 'Administrator') {
						var viewStr1 = '<input type="button" class="btnB"  id="Download3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';
						viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formAdministratorMenu'" + ');>';//width:157px;height:37px; Get Application List
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
					}
					if (dataRep['roleName'] == 'Dean') {
						var viewStr1 = '<input type="button" class="btnB"  id="Download3" value = "Download Sinhala Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationSin();>';
						viewStr1 += '<input type="button" class="btnB"  id="Download4" value = "Download English Medium"  style="margin-top:0px;width:190px;background-image:url(img/wbutton.png);height:30px;" onclick = CompleteApplicationEng2();>';
						viewStr1 += '<input type = "button" class ="btnB" id="Resetsc" value="Reset" style="background-Color:#ff6633;padding-right:20px;height:30px;"  onclick="refresshStudentList();sendForm(' + "'data4ApplicantList'" + ');sendForm(' + "'data4checkUser'" + ');sendForm(' + "'data4checkdepartment'" + ');">';
						viewStr1 += '<input type="button" class="btnB" style="background-Color:#ff6633;padding-right:20px;height:30px;" value = "Return" onclick = refresshStudentList();showMenu(' + "'formDeanMenu'" + ');>';//width:157px;height:37px; Get Application List
						viewStr1 += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';
					}
					//document.getElementById('Buttonlist').innerHTML += viewStr1;
				}
				viewStr += viewStr1;

			}
		}
	}
}

//-------------------------------------------------------------------------SEARCH FUNCTION END------------------------------					

//-------------------------------------------------------------------------BUTTON DISABLE FUNCTION START--------------------
function enableButton() {
	//document.getElementById("search").disabled=false;
	// document.getElementById("Reset").disabled = false;
	//document.getElementById("Download1").disabled=false;
	//document.getElementById("Download2").disabled=false;
	// document.getElementById("reApplication").disabled = false;
	// document.getElementById("AddNote").disabled = false;


	// document.getElementById("Resetsc").disabled = false;
	//document.getElementById("Download3").disabled=false;
	//document.getElementById("Download4").disabled=false;
	// document.getElementById("reApplicationsc").disabled = false;
	// document.getElementById("AddNotesc").disabled = false;
}
//-------------------------------------------------------------------------BUTTON DISABLE FUNCTION END--------------------


//-------------------------------------------------------------------------VIEW LIST FUNCTION START--------------------	
function filterListApplicant() {
	if (document.getElementById('selectedDegreeName').value == "Please Select Programme") {
		alert("Please Select a value from the select Box(s)");
	} else {
		dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
		dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
		dataRep["batchnumber"] = document.getElementById('batchnumber').value;
		sendForm("data4ApplicantList");
	}
}
function filterListApplicantOnchange() {

	dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
	dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
	dataRep["batchnumber"] = document.getElementById('batchnumber').value;
	sendForm("data4ApplicantList");

}
//-------------------------------------------------------------------------VIEW LIST FUNCTION END--------------------		

//-------------------------------------------------------------------------GENERATE NOTES FUNCTION START-------------	
function generateNotes(nID) {

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
function generateBulkNote() {
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

function loadProfileApplicant(app) {
	returnStudentProfile();
	var adID = app.id;
	var lastChar = adID.substr(adID.indexOf("Namebtn") + 7);
	console.log(document.getElementById('applicationNo3' + lastChar).value);
	setSearchApplicantStudent('applicant');
	GetApplicantProfile(document.getElementById('applicationNo3' + lastChar).value);
}

function sendMail() {
	var link = "mailto:me@example.com" +
		"?cc=CCaddress@example.com" +
		"&subject=" + escape("This is subject") +
		"&body=" + escape("This is body");
	window.location.href = link;
}

function CompleteApplicationSin(type) {
	//alert(medium1Arr);
	var count = 1;
	if (document.getElementById('selectedDegreeName').value == "Please Select Programme") {
		alert("Please Select Programm and the Year.");
	}

	else {


		let degreeCode = document.getElementById('selectedDegreeName').value;
		let academicYear = document.getElementById('achedamicYear').value;
		let postData = {
			action: "getIndividualBatchUsingDegreeName",
			degreeCode: degreeCode,
			academicYear: academicYear,
			authcode: authcode,
			username: dataRep['userId']
		};
		$.ajax({
			type: 'POST',
			url: 'rules/batch.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				console.log(response)
				let batch;
				if (response[0].status === 200) {
					batch = response[0].batchName
				}
				var newStr = "";
				if (type == "w") {
					newStr += `<style>
							@font-face
							{font-family:"Cambria Math";
							panose-1:2 4 5 3 5 4 6 3 2 4;
							mso-font-charset:0;
							mso-generic-font-family:roman;
							mso-font-pitch:variable;
							mso-font-signature:-536869121 1107305727 33554432 0 415 0;}
						p.MsoNormal, li.MsoNormal, div.MsoNormal
							{mso-style-unhide:no;
							mso-style-qformat:yes;
							mso-style-parent:"";
							margin:0cm;
							mso-pagination:widow-orphan;
							font-size:12.0pt;
							font-family:"Times New Roman",serif;
							mso-fareast-font-family:"Times New Roman";
							mso-fareast-theme-font:minor-fareast;}
						p.MsoHeader, li.MsoHeader, div.MsoHeader
							{mso-style-priority:99;
							mso-style-link:"Header Char";
							margin:0cm;
							mso-pagination:widow-orphan;
							tab-stops:center 225.65pt right 451.3pt;
							font-size:12.0pt;
							font-family:"Times New Roman",serif;
							mso-fareast-font-family:"Times New Roman";
							mso-fareast-theme-font:minor-fareast;}
						p.MsoFooter, li.MsoFooter, div.MsoFooter
							{mso-style-priority:99;
							mso-style-link:"Footer Char";
							margin:0cm;
							mso-pagination:widow-orphan;
							tab-stops:center 225.65pt right 451.3pt;
							font-size:12.0pt;
							font-family:"Times New Roman",serif;
							mso-fareast-font-family:"Times New Roman";
							mso-fareast-theme-font:minor-fareast;}
						p
							{mso-style-noshow:yes;
							mso-style-priority:99;
							mso-margin-top-alt:auto;
							margin-right:0cm;
							mso-margin-bottom-alt:auto;
							margin-left:0cm;
							mso-pagination:widow-orphan;
							font-size:12.0pt;
							font-family:"Times New Roman",serif;
							mso-fareast-font-family:"Times New Roman";
							mso-fareast-theme-font:minor-fareast;}
						p.msonormal0, li.msonormal0, div.msonormal0
							{mso-style-name:msonormal;
							mso-style-noshow:yes;
							mso-style-priority:99;
							mso-style-unhide:no;
							mso-margin-top-alt:auto;
							margin-right:0cm;
							mso-margin-bottom-alt:auto;
							margin-left:0cm;
							mso-pagination:widow-orphan;
							font-size:12.0pt;
							font-family:"Times New Roman",serif;
							mso-fareast-font-family:"Times New Roman";
							mso-fareast-theme-font:minor-fareast;}
						span.HeaderChar
							{mso-style-name:"Header Char";
							mso-style-priority:99;
							mso-style-unhide:no;
							mso-style-locked:yes;
							mso-style-link:Header;
							mso-ansi-font-size:12.0pt;
							mso-bidi-font-size:12.0pt;
							font-family:"Times New Roman",serif;
							mso-ascii-font-family:"Times New Roman";
							mso-fareast-font-family:"Times New Roman";
							mso-fareast-theme-font:minor-fareast;
							mso-hansi-font-family:"Times New Roman";
							mso-bidi-font-family:"Times New Roman";}
						span.FooterChar
							{mso-style-name:"Footer Char";
							mso-style-priority:99;
							mso-style-unhide:no;
							mso-style-locked:yes;
							mso-style-link:Footer;
							mso-ansi-font-size:12.0pt;
							mso-bidi-font-size:12.0pt;
							font-family:"Times New Roman",serif;
							mso-ascii-font-family:"Times New Roman";
							mso-fareast-font-family:"Times New Roman";
							mso-fareast-theme-font:minor-fareast;
							mso-hansi-font-family:"Times New Roman";
							mso-bidi-font-family:"Times New Roman";}
						span.GramE
							{mso-style-name:"";
							mso-gram-e:yes;}
						.MsoChpDefault
							{mso-style-type:export-only;
							mso-default-props:yes;
							font-size:10.0pt;
							mso-ansi-font-size:10.0pt;
							mso-bidi-font-size:10.0pt;
							mso-font-kerning:0pt;
							mso-ligatures:none;}
						@page WordSection1
							{ size:841.9pt 595.3pt;
						mso-page-orientation:landscape;
						margin:36.0pt 36.0pt 36.0pt 36.0pt;
						mso-header-margin:35.4pt;
						mso-footer-margin:35.4pt;
						mso-paper-source:0;}
						div.WordSection1
							{page:WordSection1;}
						
						</style>
						`;

					newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
					newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + academicYear + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch - " + batch + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List of Applicants - Sinhala Medium</div>";
					newStr += "<br/>";
				} else {
					newStr += "<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr += "<div id='topics1' class='info'></div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>" + $("#selectedDegreeName option:selected").text(); + " Degree Programme</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year " + academicYear + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch : " + batch + "</div>";
					newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List of Applicants - Sinhala Medium</div>";
				}


				if (checkdeleteorsave == 'deletefunction') {
					newStr += "<div class='investLabel' style='text-align:left;font-weight:bold;'>user:" + dataRep['userName'] + "</div>";
				}
				newStr += "<br/>";
				newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
				newStr += "<tr>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:5%'>Serial</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:8%'>Application No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:5%'>Title</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:13%'>Name With Initials</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:17%'>Applicant's Full Name</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>NIC/Passport Number</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:16%'>Address</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Tel:No.</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:10%'>Mobile No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center; width:8%'>Email</th>";
				newStr += "</tr>";

				applicantDTable.rows().every(function (i) {
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						// if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {
						if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i] & (medium1Arr[i] == "si")) {
							newStr += "<tr>";
							newStr += '<td  style="word-wrap:break-word;width:5%;font-size:12px;font-family:Times New Roman;text-align: center;">' + count + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + applicationNoArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:5%;font-size:12px;font-family:Times New Roman;text-align: center;">' + studentPersonalTitleArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:13%;font-size:12px;font-family:Times New Roman;">' + studentInitialArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:17%;font-size:12px;font-family:Times New Roman;">' + studentNameArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentNICArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:16%;font-size:12px;font-family:Times New Roman;">' + studentPermanentAddressArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentContactLanArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:10%;font-size:12px;font-family:Times New Roman;">' + studentContactMobileArr[i] + '</td>';
							newStr += '<td  style="word-wrap:break-word;width:8%;font-size:12px;font-family:Times New Roman;">' + studentContactEmailArr[i] + '</td>';
							newStr += "</tr>";
							count++;
						}
						// }
					}
				});
				newStr += "</table>";
				newStr += "</div>"

				var exportFilename = "Applicant List - Sinhala Medium.doc";
				let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
				sendDataList += "&sheetName=" + "Applicant List - Sinhala";
				sendDataList += "&orientation=" + "l";

				if (type == "w") {



					isrHandle.getDoc(newStr, exportFilename);
				}

				if (type == "e") {
					//eng
					var exportFilename = "Applicant List - Sinhala Medium.xls";
					var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
					//eng
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

					//eng
				}

			}, error: function (error) {
				console.log(error)
				// console.log(postData)

			}
		});




	}



}

function showDivPage(idpass) {
	if (document.getElementById('myTable' + idpass)) {
		document.getElementById('myTable' + idpass).style = "display";
		document.getElementById('page' + idpass).disabled = true;
	}

	for (make = 1; make <= divid; make++) {
		if (document.getElementById('myTable' + make)) {
			if (make != idpass) {
				document.getElementById('myTable' + make).style.display = 'none';
				document.getElementById('page' + idpass).disabled = false;
			}
		}
	}


}


function setBreakingpoint() {

	var useramount = prompt("Please enter number of records you wish to view in one page", "50");

	if (useramount != null) {
		breakingpoint = useramount;
	}

}