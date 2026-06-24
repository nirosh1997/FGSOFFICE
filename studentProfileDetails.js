var stdProfileSearch = false;
dataRep['searchType'] = '';
var studengenderoArr = new Array();

var eduDetailsLength = 0;
var newEduApplicationNo = new Array();
var newEduQulificaitionId = new Array();
var newEduUniversity = new Array();
var newEduAwardingCountry = new Array();
var newEduQualificationType = new Array();
var newEduDesignator = new Array();
var newEduQualifier = new Array();
var newEduGraduateYear = new Array();
var newEduGraduateMonth = new Array();
var newEduDuration = new Array();
var newEduEffectiveDate = new Array();
var newEduGpa = new Array();
var newEduClass = new Array();
var newEduDegreeCertificate = new Array();
var newEduDegreeDetailCertificate = new Array();
var newEduResultStatus = new Array();
var newEduSub1 = new Array();
var newEduSub2 = new Array();
var newEduSub3 = new Array();
var newEduSub4 = new Array();
var newEduResearchCredit = new Array();
var newEduResearchDuration = new Array();
var newEduResearchCompHas = new Array(); // Assuming this is the last field and name is correct

var newProfDetailsLength = 0;
var newProfApplicationNo = new Array();
var newProfQulificaitionId = new Array();
var newProfQualification = new Array();
var newProfQualificationLevel = new Array();
var newProfAwardingAuthority = new Array();
var newProfAwardingYear = new Array();
var newProfAwardingCountry = new Array();
var newProfEffectiveDate = new Array();
var newProfCertificate = new Array(); // assuming 'certificate' is the final column

var newRefApplicationNo = new Array();
var newRefRefId = new Array();
var newRefName = new Array();
var newRefOrganization = new Array();
var newRefDesignation = new Array();
var newRefAddress = new Array();
var newRefCountry = new Array();
var newRefEmail = new Array();
var newRefMobile = new Array();
var newRefHome = new Array();
var newRefOffice = new Array();
var paymentDeadline = new Array();
var paymentTypeSource = new Array();

var newRefDetailsLength = 0;


var newWorkApplicationNo = new Array();
var newWorkQulificaitionId = new Array();
var newWorkOrganization = new Array();
var newWorkDesignation = new Array();
var newWorkAwardingCountry = new Array();
var newWorkAddress = new Array();
var newWorkStartDate = new Array();
var newWorkEndDate = new Array();
var newWorkCertificate = new Array();
var newWorkVerified = new Array();
var PayTypeArr = new Array();
var studentProvinceArr = new Array();
var studentZipArr = new Array();
var studentCityArr = new Array();
var studentWhatsAppArr = new Array();
var studentContactAlterEmailArr = new Array();

var newWorkDetailsLength = 0;



function getCurrentDateTime() {
	const now = new Date();

	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');

	let hour = now.getHours();
	const minute = String(now.getMinutes()).padStart(2, '0');
	const meridiem = hour >= 12 ? 'pm' : 'am';
	hour = hour % 12 || 12; // Convert hour to 12-hour format

	return year + "/" + month + "/" + day + " " + hour + "." + minute + " " + meridiem;
}


function formStudentProfileDeteils(dsp) {
	str = "";
	title = "Student/Applicant Profile";

	if (dsp == "formStudentProfileDeteilsView") {

		var applicantSearch = "";
		var studentSearch = "";
		var applicantDisplay = "none";
		var studentDisplay = "none";
		var disabledRdo = "";


		if (dataRep['searchType'] != "") {
			disabledRdo = 'disabled';
		}

		if (dataRep['searchType'] == 'applicantSearch') {
			applicantSearch = 'checked';
			applicantDisplay = 'block';
		} else if (dataRep['searchType'] == 'studentSearch') {
			studentSearch = 'checked';
			studentDisplay = 'block';
		}








		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 2rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';

		str += "<div id='addStudentProfileDeteils'>";

		str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-6 grid-margin stretch-card">';
		str += '<div class="card">';
		str += '<div class="card-body">';

		str += '<div class="form-group row">';
		str += '<div class="col-sm-6">';
		str += '<div class="form-check tabs">';
		str += '<label class="form-check-label tab">';
		str += '<input type="radio" class="form-check-input tab-input" name="searchType" id="searchApplicant" value="applicantSearch" ' + applicantSearch + " " + ' onclick="dataRep[this.name]=this.value;serchApplicant1();"><div class="tab-box">Search Applicant<i class="input-helper"></i></div></label>';
		str += '</div>';
		str += '</div>';
		str += '<div class="col-sm-6">';
		str += '<div class="form-check tabs">';
		str += '<label class="form-check-label tab">';
		str += '<input type="radio" class="form-check-input tab-input" name="searchType" id="searchStudent" value="studentSearch" ' + studentSearch + " " + ' onclick="dataRep[this.name]=this.value;serchStudent1();"><div class="tab-box">Search Student<i class="input-helper"></i></div></label>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row" styel= "border: 1px solid #ccc;margin: auto;padding: 10px;">';

		str += '<div id="searchStudent2" style="display:' + studentDisplay + '" class="box-border-div"><h4 class="text-blod-center">Search Student</h4>';
		str += '<form id="searchStudentProfileS" class="form-inline" style="margin: auto;width: fit-content;">';
		str += '<label class="sr-only" for="inlineFormInputName2">Name</label>';
		str += '<input type="text" class="form-control mb-2 mr-sm-2" name="studentNo" id="studentNo" placeholder="Enter Student No" value= "' + dataRep["studentNo"].trim() + '" onchange="dataRep[this.name]=this.value;">';
		str += '<button type="button" class="btn btn-primary mb-2" value="Search" onclick="checkStudentAvailable();">Search</button>';
		str += '</form>';
		str += '</div>';
		str += '<div id="searchApplicant2" style="display:' + applicantDisplay + '" class="box-border-div"><h4 class="text-blod-center">Search Applicants</h4>';
		str += '<form id="searchApplicantProfileS" class="form-inline" style="margin: auto;width: fit-content;">';
		str += '<label class="sr-only" for="inlineFormInputName2">Name</label>';
		str += '<input type="text" class="form-control mb-2 mr-sm-2" name="applicationNo" id="applicationNo" placeholder="Enter Application No" value= "' + dataRep["applicationNo"].trim() + '" onchange="dataRep[this.name]=this.value;">';
		str += '<button type="button" class="btn btn-primary mb-2" value="Search" onclick="checkApplicationAvailable();">Search</button>';
		str += '</form>';
		str += '</div>';
		str += '</div></div></div></div></div>';



	}
	return str;
}

//---------------------------------------------SEARCH STUDENT RADIO BYTTON FUNCTION START-----------------------------------
function serchStudent1() {
	document.getElementById('searchStudent2').style.display = 'block';
	document.getElementById('searchApplicant2').style.display = 'none';
}
//---------------------------------------------SEARCH STUDENT RADIO BYTTON FUNCTION END-----------------------------------

//---------------------------------------------SEARCH APPLICANT RADIO BYTTON FUNCTION START-----------------------------------
function serchApplicant1() {
	document.getElementById('searchStudent2').style.display = 'none';
	document.getElementById('searchApplicant2').style.display = 'block';
}
//---------------------------------------------SEARCH APPLICANT RADIO BYTTON FUNCTION END-----------------------------------

//---------------------------------------------RESET STUDENT PROFILE START-----------------------------------

function resetStudentProfile() {
	studentNoProLength = 0;
	applicationNoLength = 0;
	roleIdLength = 0;
	studentNoLength = 0;
	tmp_studentNolenght = 0;
	dataItemIDLength = 0;
	batchdetailsLength = 0;
	documentIDLength = 0;
	sessionIDLength = 0;
	educationPinLength = 0;
	workPinLength = 0;
	MarksLength = 0;
	messageTypeLength = 0;
	oldStudentNoLength = 0;
	tCodeLength = 0;
	messageIdLength = 0;
	studentNICLength = 0;
	trdegreeCodeLength = 0;
	ruleIDLength = 0;
	transferIDLength = 0;
	coursecommenceLength = 0;

	checkboxCount = 0;
	Vcount = 0;
	RulCount = 0;
	commDate = "";
	duration = "";
	CheckRules = "";
	DegreeCatArr = new Array();
	studentTmpi = -1;
	applicantTmpi = -1;
	newStudentNo = "";
	selectedPrg = "";

	// dataRep['searchType'] = '';
	// dataRep['studentNo'] = "";
	// dataRep['applicationNo'] = "";
	dataRep["Fcode"] = "";
	dataRep["degreeCode"] = "";
	dataRep["academicYear"] = "";
	// sendForm('data4DisplayStudentNoforProfile');
	// sendForm('data4DisplayApplicatProfile');
	// sendForm('data4StudentProfileDeteilsCheckUser');
	stdProfileSearch = false;
}

function returnStudentProfile() {
	studentNoProLength = 0;
	applicationNoLength = 0;
	roleIdLength = 0;
	studentNoLength = 0;
	tmp_studentNolenght = 0;
	dataItemIDLength = 0;
	batchdetailsLength = 0;
	documentIDLength = 0;
	sessionIDLength = 0;
	educationPinLength = 0;
	workPinLength = 0;
	MarksLength = 0;
	messageTypeLength = 0;
	oldStudentNoLength = 0;
	tCodeLength = 0;
	messageIdLength = 0;
	studentNICLength = 0;
	trdegreeCodeLength = 0;
	ruleIDLength = 0;
	transferIDLength = 0;
	coursecommenceLength = 0;


	checkboxCount = 0;
	Vcount = 0;
	RulCount = 0;
	commDate = "";
	duration = "";
	CheckRules = "";
	DegreeCatArr = new Array();
	studentTmpi = -1;
	applicantTmpi = -1;
	newStudentNo = "";
	selectedPrg = "";

	dataRep['searchType'] = '';
	dataRep['studentNo'] = "";
	dataRep['applicationNo'] = "";
	dataRep["Fcode"] = "";
	dataRep["degreeCode"] = "";
	dataRep["academicYear"] = "";
	stdProfileSearch = false;
}

//---------------------------------------------RESET STUDENT PROFILE END-----------------------------------

//---------------------------------------------SEARCH STUDENT PROFILE START-----------------------------------


function searchStudentProfile() {
	if (document.getElementById('studentNo').value != "") {
		// returnStudentProfile();
		getStudentProfile(document.getElementById('studentNo').value);
	} else {
		document.getElementById('studentNo').value = '';
		alert("Student No not available");
	}
}

function setSearchApplicantStudent(type) {
	if (type == 'student') {
		dataRep['searchType'] = 'studentSearch'
	}
	if (type == 'applicant') {
		dataRep['searchType'] = 'applicantSearch'
	}
}

var resultFStatus = new Array();
var resultRStatus = new Array();
var resultRRStatus = new Array();
var stregistered = new Array();

function getStudentProfile(studentNo) {
	resetProfileData();
	//trim studen No

	dataRep['studentNo'] = studentNo.trim();


	// sendForm('data4StudentProfileDetails');


	let postData = {
		action: "data4StudentProfileDetails",
		st_no: dataRep["studentNo"],
		authcode: authcode,
		username: dataRep['userId'],
	};
	$.ajax({
		type: 'POST',
		url: 'rules/students.php',
		data: postData,
		dataType: 'json',
		success: function (response) {
			$('#departmentTable').empty();
			departmentArray.length = 0;
			if (response && response.length > 0) {
				studentNoLength = 0;
				$.each(response, function (index, Students) {
					console.log(Students);
					if (Students.studentNoArr != "") {
						dataRep["degreeCode"] = Students.degreeCode;
						dataRep["academicYear"] = Students.achedamicYear;
						studentNoArr[studentNoLength] = Students.studentNo;
						studentNameArr[studentNoLength] = Students.studentName;
						studentNICArr[studentNoLength] = Students.studentNIC;
						universityCodeArr[studentNoLength] = Students.universityCode;
						facultyCodeArr[studentNoLength] = Students.facultyCode;
						facultyTitleArr[studentNoLength] = Students.facultyTitle;
						programmeTypeCodeArr[studentNoLength] = Students.programmeTypeCode;
						programmeTypeTitleArr[studentNoLength] = Students.programmeTypeTitle;
						degreeCodeArr[studentNoLength] = Students.degreeCode;
						degreeTitleArr[studentNoLength] = Students.degreeTitle;
						studentPermanentAddressArr[studentNoLength] = Students.studentPermanentAddress;
						studentProvinceArr[studentNoLength] = Students.living_state;					
						studentCityArr[studentNoLength] = Students.city;	
						studentZipArr[studentNoLength] = Students.zipcode;	
						studentWhatsAppArr[studentNoLength] = Students.whatsapp;	
						studentContactAlterEmailArr[studentNoLength] = Students.studentContactEmail2;	

						studentContactLanArr[studentNoLength] = Students.studentContactLan;
						studentContactMobileArr[studentNoLength] = Students.studentContactMobile;
						studentContactEmailArr[studentNoLength] = Students.studentContactEmail;
						studentEmploymentArr[studentNoLength] = Students.studentEmployment;
						studentInitialArr[studentNoLength] = Students.studentInitial;
						applicationNoArr[studentNoLength] = Students.applicationNo;
						mediumArr[studentNoLength] = Students.medium;
						achedamicYearArr[studentNoLength] = Students.achedamicYear;
						studentPersonalTitleArr[studentNoLength] = Students.studentPersonalTitle;
						studentDateofbirthArr[studentNoLength] = Students.studentDateofbirth;
						studentOfficeAddressArr[studentNoLength] = Students.studentOfficeAddress;
						studentNationalityArr[studentNoLength] = Students.studentNationality;
						studentCitizenshipArr[studentNoLength] = Students.studentCitizenship;
						correspondenceArr[studentNoLength] = Students.correspondence;
						librarycodeArr[studentNoLength] = Students.LibraryIdCode;
						librarycodeArr[studentNoLength] = Students.LibraryIdCode;
						departmentCodeArr[studentNoLength] = Students.departmentCode;
						slqlArr[studentNoLength] = Students.slql;
						studengenderoArr[studentNoLength] = Students.studengender;

						stregistered[studentNoLength] = Students.registered;

						studentNoLength++;
						// studentTmpi = studentNoLength;
						// applicantTmpi = -1;

						tCodeArr.length = 0;
						paymentStudentArr.length = 0;
						feeCatArr.length = 0;
						amountArr.length = 0;
						paymentDateArr.length = 0;
						tCodeLength = 0;
						$.each(Students.data4paymentProfile, function (index, data4paymentProfile) {
							tCodeArr[tCodeLength] = data4paymentProfile.tCode;
							paymentStudentArr[tCodeLength] = data4paymentProfile.studentNo;
							feeCatArr[tCodeLength] = data4paymentProfile.feeCat;
							amountArr[tCodeLength] = data4paymentProfile.amount;
							paymentDateArr[tCodeLength] = data4paymentProfile.paymentdate;
							tCodeLength++;
						});


						batchDegreeCodeArr.length = 0;
						batchYearArr.length = 0;
						batchCourseFeeArr.length = 0;
						batchLibraryFeeArr.length = 0;
						batchdetailsLength = 0;
						$.each(Students.data4paymentBatch, function (index, data4paymentBatch) {
							batchDegreeCodeArr[batchdetailsLength] = data4paymentBatch.degcd1;
							batchYearArr[batchdetailsLength] = data4paymentBatch.degacy1;
							batchCourseFeeArr[batchdetailsLength] = data4paymentBatch.degcrs1;
							batchLibraryFeeArr[batchdetailsLength] = data4paymentBatch.deglibf1;
							batchdetailsLength++;
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
						$.each(Students.data4profilenewEducation, function (index, data4qualification) {
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

						$.each(Students.data4profilenewProfessional, function (index, data4otherQualification) {
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

						$.each(Students.data4profilenewRefrees, function (index, data4references) {
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

						$.each(Students.data4profilenewWork, function (index, data4work) {
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


						Pay_RefNoArr.length = 0;
						Pay_studentNoArr.length = 0;
						Pay_CategoryCodeArr.length = 0;
						Pay_amountArr.length = 0;
						Pay_Time_StampArr.length = 0;
						Pay_MethodArr.length = 0;
						Response_ProgressArr.length = 0;
						Response_Progress_TimeArr.length = 0;
						PayTitileArr.length = 0;
						PayTypeArr.length = 0;
						RefNoLength = 0;
						$.each(Students.data4StudentpaymentView, function (index, data4StudentpaymentView) {
							Pay_RefNoArr[RefNoLength] = data4StudentpaymentView.Pay_RefNo;
							Pay_studentNoArr[RefNoLength] = data4StudentpaymentView.Pay_studentNo;
							Pay_CategoryCodeArr[RefNoLength] = data4StudentpaymentView.Pay_CategoryCode;
							Pay_amountArr[RefNoLength] = data4StudentpaymentView.Pay_amount;
							Pay_Time_StampArr[RefNoLength] = data4StudentpaymentView.Pay_Time_Stamp;
							PayTypeArr[RefNoLength] = data4StudentpaymentView.incomeCatType;
							Pay_MethodArr[RefNoLength] = data4StudentpaymentView.Pay_Method;
							Response_ProgressArr[RefNoLength] = data4StudentpaymentView.Response_Progress;
							Response_Progress_TimeArr[RefNoLength] = data4StudentpaymentView.Response_Progress_Time;
							PayTitileArr[RefNoLength] = data4StudentpaymentView.PayTitile;
							RefNoLength++;
						});


						educationFieldNameArr.length = 0;
						educationValueArr.length = 0;
						educationPinArr.length = 0;
						educationPinLength = 0;
						console.log(Students.data4profileEducationalDetails);

						$.each(Students.data4profileEducationalDetails, function (index, data4profileEducationalDetails) {
							educationFieldNameArr[educationPinLength] = data4profileEducationalDetails.educationFieldName;
							educationValueArr[educationPinLength] = data4profileEducationalDetails.educationValue;
							educationPinArr[educationPinLength] = data4profileEducationalDetails.educationPin;
							educationPinLength++;
						});
						console.log(educationPinLength);




						workFieldNameArr.length = 0;
						workValueArr.length = 0;
						workPinArr.length = 0;
						workPinLength = 0;
						$.each(Students.data4profilerefreeDetails, function (index, data4profilerefreeDetails) {
							workFieldNameArr[workPinLength] = data4profilerefreeDetails.workFieldName;
							workValueArr[workPinLength] = data4profilerefreeDetails.workValue;
							workPinArr[workPinLength] = data4profilerefreeDetails.workPin;
							workPinLength++;
						});



						IncomeSourceCodeArr.length = 0;
						IncomeCategoryCodeArr.length = 0;
						IncomeCategoryTitleArr.length = 0;
						achedamicYearIncomeArr.length = 0;
						IncomeCategoryValueArr.length = 0;
						Income_degreeCodeArr.length = 0;
						CurrencyArr.length = 0;
						IncomeSourceCodeLength = 0;
						$.each(Students.data4IncomeCategoryDetails, function (index, data4IncomeCategoryDetails) {
							IncomeSourceCodeArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.IncomeSourceCode;
							IncomeCategoryCodeArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.IncomeCategoryCode;
							IncomeCategoryTitleArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.IncomeCategoryTitle;
							achedamicYearIncomeArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.achedamicYear;
							IncomeCategoryValueArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.IncomeCategoryValue;
							Income_degreeCodeArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.Income_degreeCode;
							CurrencyArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.Currency;
							paymentDeadline[IncomeSourceCodeLength] = data4IncomeCategoryDetails.payment_deadline;
							paymentTypeSource[IncomeSourceCodeLength] = data4IncomeCategoryDetails.paytypesource;
							IncomeSourceCodeLength++;
						});



						tmp_studentNoArr.length = 0;
						tmp_degreeCodeArr.length = 0;
						tmp_academicYearArr.length = 0;
						tmp_studentNolenght = 0;
						$.each(Students.data4StudentProfileTransferStudent, function (index, data4StudentProfileTransferStudent) {
							tmp_studentNoArr[tmp_studentNolenght] = data4StudentProfileTransferStudent.tran_studentNo;
							tmp_degreeCodeArr[tmp_studentNolenght] = data4StudentProfileTransferStudent.tran_degreeCode;
							tmp_mediumArr[tmp_studentNolenght] = data4StudentProfileTransferStudent.tran_medium;
							tmp_academicYearArr[tmp_studentNolenght] = data4StudentProfileTransferStudent.tran_achedamicYear;
							tmp_studentNolenght++;
						});



						subjectNameArr.length = 0;
						subjectTitleArr.length = 0;
						subjectSemesterArr.length = 0;
						marksArr.length = 0;
						resultFStatus.length = 0;
						subjectCreditsArr.length = 0;
						examiner1Arr.length = 0;
						examiner2Arr.length = 0;
						exam_releasedDate.length = 0;
						avgMarksArr.length = 0;
						MarksLength = 0;

						$.each(Students.data4profilExamResults, function (index, data4profilExamResults) {
							subjectNameArr[MarksLength] = data4profilExamResults.subjectName;
							subjectTitleArr[MarksLength] = data4profilExamResults.subjectTitle;
							subjectSemesterArr[MarksLength] = data4profilExamResults.subjectSemester;
							marksArr[MarksLength] = data4profilExamResults.Grade;
							examiner1Arr[MarksLength] = data4profilExamResults.Examiner1;
							examiner2Arr[MarksLength] = data4profilExamResults.Examiner2;
							exam_releasedDate[MarksLength] = data4profilExamResults.releasedDate;
							avgMarksArr[MarksLength] = data4profilExamResults.Marks;
							subjectCreditsArr[MarksLength] = data4profilExamResults.credits;
							resultFStatus[MarksLength] = data4profilExamResults.sStatus;
							MarksLength++;
						});


						oldStudentNoArr.length = 0;
						TransferstudentNoArr.length = 0;
						transferTypeArr.length = 0;
						transferIDArr.length = 0;
						notesArr.length = 0;
						TransferapplicationNoArr.length = 0;
						transferDateArr.length = 0;
						ruleIDArr.length = 0;
						ruleTitleArr.length = 0;
						oldStudentNoLength = 0;
						$.each(Students.data4TransferProfile, function (index, data4TransferProfile) {
							oldStudentNoArr[oldStudentNoLength] = data4TransferProfile.soldStudentNo;
							TransferstudentNoArr[oldStudentNoLength] = data4TransferProfile.studentNo;
							transferTypeArr[oldStudentNoLength] = data4TransferProfile.transferType;
							transferIDArr[oldStudentNoLength] = data4TransferProfile.transferID;
							notesArr[oldStudentNoLength] = data4TransferProfile.notes;
							TransferapplicationNoArr[oldStudentNoLength] = data4TransferProfile.applicationNo;
							transferDateArr[oldStudentNoLength] = data4TransferProfile.transferDate;
							ruleIDArr[oldStudentNoLength] = data4TransferProfile.ruleID;
							ruleTitleArr[oldStudentNoLength] = data4TransferProfile.ruleTitle;
							oldStudentNoLength++;
						});


						trfacultyCodeArr.length = 0;
						trprogrammeTypeCodeArr.length = 0;
						trdegreeCodeArr.length = 0;
						trdegreeTitleArr.length = 0;
						trfacultyTitleArr.length = 0;
						trprogrammeTypeTitleArr.length = 0;
						trdegreeCodeLength = 0;
						$.each(Students.data4Transferprogramme, function (index, data4Transferprogramme) {
							trfacultyCodeArr[trdegreeCodeLength] = data4Transferprogramme.tr_facultyCode;
							trprogrammeTypeCodeArr[trdegreeCodeLength] = data4Transferprogramme.tr_programmeTypeCode;
							trdegreeCodeArr[trdegreeCodeLength] = data4Transferprogramme.tr_degreeCode;
							trdegreeTitleArr[trdegreeCodeLength] = data4Transferprogramme.tr_degreeTitle;
							trfacultyTitleArr[trdegreeCodeLength] = data4Transferprogramme.tr_facultyTitle;
							trprogrammeTypeTitleArr[trdegreeCodeLength] = data4Transferprogramme.tr_programmeTypeTitle;
							trdegreeCodeLength++;
						});



						oldStudentNoArr.length = 0;
						TransferstudentNoArr.length = 0;
						transferTypeArr.length = 0;
						transferIDArr.length = 0;
						notesArr.length = 0;
						TransferapplicationNoArr.length = 0;
						transferDateArr.length = 0;
						transferIDLength = 0;
						$.each(Students.data4getTransferID, function (index, data4getTransferID) {
							oldStudentNoArr[transferIDLength] = data4getTransferID.oldStudentNo;
							TransferstudentNoArr[transferIDLength] = data4getTransferID.studentNo;
							transferTypeArr[transferIDLength] = data4getTransferID.transferType;
							transferIDArr[transferIDLength] = data4getTransferID.transferID;
							notesArr[transferIDLength] = data4getTransferID.notes;
							TransferapplicationNoArr[transferIDLength] = data4getTransferID.applicationNo;
							transferDateArr[transferIDLength] = data4getTransferID.transferDate;
							transferIDLength++;
						});



						ruleIDArr.length = 0;
						ruleTitleArr.length = 0;
						transferTypeArr.length = 0;
						ruleIDLength = 0;
						$.each(Students.data4DisplayTransferRules, function (index, data4DisplayTransferRules) {
							ruleIDArr[ruleIDLength] = data4DisplayTransferRules.ruleID;
							ruleTitleArr[ruleIDLength] = data4DisplayTransferRules.ruleTitle;
							transferTypeArr[ruleIDLength] = data4DisplayTransferRules.transferType;
							ruleIDLength++;
						});



						commencedegreeCodeArr.length = 0;
						commencedegreeTitleArr.length = 0;
						durationArr.length = 0;
						coursecommenceArr.length = 0;
						commenceacademicYearArr.length = 0;
						coursecommenceLength = 0;
						$.each(Students.data4CommenceDate, function (index, data4CommenceDate) {
							commencedegreeCodeArr[coursecommenceLength] = data4CommenceDate.degreeCode;
							commencedegreeTitleArr[coursecommenceLength] = data4CommenceDate.degreeTitle;
							durationArr[coursecommenceLength] = data4CommenceDate.duration;
							coursecommenceArr[coursecommenceLength] = data4CommenceDate.coursecommence;
							commenceacademicYearArr[coursecommenceLength] = data4CommenceDate.academicYear;
							coursecommenceLength++;
						});




						cr_resitArr.length = 0;
						cr_yearArr.length = 0;
						cr_finalResultArr.length = 0;
						cr_descriptionArr.length = 0;
						cr_Length = 0;
						$.each(Students.data4profilExamResit, function (index, data4profilExamResit) {
							cr_resitArr[cr_Length] = data4profilExamResit.cr_resit;
							cr_yearArr[cr_Length] = data4profilExamResit.cr_year;
							cr_finalResultArr[cr_Length] = data4profilExamResit.cr_finalResult;
							cr_descriptionArr[cr_Length] = data4profilExamResit.cr_description;
							cr_Length++;
						});


						final_SemArr.length = 0;
						final_GPAArr.length = 0;
						final_ResultArr.length = 0;
						final_Length = 0;
						$.each(Students.data4profilExamFinalResults, function (index, data4profilExamFinalResults) {
							final_SemArr[final_Length] = data4profilExamFinalResults.final_semester;
							final_GPAArr[final_Length] = data4profilExamFinalResults.finalGPA;
							final_ResultArr[final_Length] = data4profilExamFinalResults.finalResult;
							final_Length++;
						});



						rep_cr_resitArr.length = 0;
						rep_cr_yearArr.length = 0;
						rep_cr_finalResultArr.length = 0;
						rep_cr_descriptionArr.length = 0;
						rep_cr_Length = 0;
						$.each(Students.data4profilRepExamResit, function (index, data4profilRepExamResit) {
							rep_cr_resitArr[rep_cr_Length] = data4profilRepExamResit.rep_resit;
							rep_cr_yearArr[rep_cr_Length] = data4profilRepExamResit.rep_year;
							rep_cr_finalResultArr[rep_cr_Length] = data4profilRepExamResit.rep_cr_finalResult;
							rep_cr_descriptionArr[rep_cr_Length] = data4profilRepExamResit.rep_cr_description;
							rep_cr_Length++;
						});




						rep_final_SemArr.length = 0;
						rep_final_GPAArr.length = 0;
						rep_final_ResultArr.length = 0;
						rep_final_Length = 0;
						$.each(Students.data4profilRepExamFinalResults, function (index, data4profilRepExamFinalResults) {
							rep_final_SemArr[rep_final_Length] = data4profilRepExamFinalResults.rep_final_semester;
							rep_final_GPAArr[rep_final_Length] = data4profilRepExamFinalResults.rep_finalGPA;
							rep_final_ResultArr[rep_final_Length] = data4profilRepExamFinalResults.rep_finalResult;
							rep_final_Length++;
						});


						rep_subjectNameArr.length = 0;
						Rep_subjectTitleArr.length = 0;
						Rep_subjectSemesterArr.length = 0;
						rep_GradeArr.length = 0;
						rep_StatusArr.length = 0;
						rep_examiner1Arr.length = 0;
						rep_examiner2Arr.length = 0;
						rep_exam_releasedDate.length = 0;
						rep_avgMarksArr.length = 0;
						GradeArrLength = 0;
						$.each(Students.data4profilRepeatExamResults, function (index, data4profilRepeatExamResults) {
							rep_subjectNameArr[GradeArrLength] = data4profilRepeatExamResults.rep_subjectName;
							Rep_subjectTitleArr[GradeArrLength] = data4profilRepeatExamResults.subjectTitle;
							Rep_subjectSemesterArr[GradeArrLength] = data4profilRepeatExamResults.subjectSemester;
							rep_GradeArr[GradeArrLength] = data4profilRepeatExamResults.rep_Grade;
							rep_StatusArr[GradeArrLength] = data4profilRepeatExamResults.rep_Status;

							rep_examiner1Arr[GradeArrLength] = data4profilRepeatExamResults.rep_Examiner1;
							rep_examiner2Arr[GradeArrLength] = data4profilRepeatExamResults.rep_Examiner2;
							rep_exam_releasedDate[GradeArrLength] = data4profilRepeatExamResults.releasedDate;
							rep_avgMarksArr[GradeArrLength] = data4profilRepeatExamResults.rep_Marks;

							GradeArrLength++;
						});




						ReRep_subjectNameArr.length = 0;
						ReRep_subjectTitleArr.length = 0;
						ReRep_subjectSemesterArr.length = 0;
						ReRep_GradeArr.length = 0;
						resultRRStatus.length = 0;
						RErep_examiner1Arr.length = 0;
						RErep_examiner2Arr.length = 0;
						RErep_exam_releasedDate.length = 0;
						RErep_avgMarksArr.length = 0;
						ReRep_attempt_time.length = 0;

						ReRepLength = 0;
						$.each(Students.data4profilReRepeatExamResults, function (index, data4profilReRepeatExamResults) {
							ReRep_subjectNameArr[ReRepLength] = data4profilReRepeatExamResults.ReRep_subjectName;
							ReRep_subjectTitleArr[ReRepLength] = data4profilReRepeatExamResults.rereptitle;
							ReRep_subjectSemesterArr[ReRepLength] = data4profilReRepeatExamResults.rerepsem;
							ReRep_GradeArr[ReRepLength] = data4profilReRepeatExamResults.ReRep_Grade;
							ReRep_attempt_time[ReRepLength] = data4profilReRepeatExamResults.re_repeat_attempt_time;
							resultRRStatus[ReRepLength] = data4profilReRepeatExamResults.sStatus;

							RErep_examiner1Arr[ReRepLength] = data4profilReRepeatExamResults.ReRep_Examiner1;
							RErep_examiner2Arr[ReRepLength] = data4profilReRepeatExamResults.ReRep_Examiner2;
							RErep_exam_releasedDate[ReRepLength] = data4profilReRepeatExamResults.releasedDate;
							RErep_avgMarksArr[ReRepLength] = data4profilReRepeatExamResults.ReRep_Marks;

							ReRepLength++;
						});

						// data4SubjectSelection
						ss_subjectCodeArr.length = 0;
						ss_subjectTitleArr.length = 0;
						ss_achedamicYearArr.length = 0;
						ss_subjectSemesterArr.length = 0;
						ss_attemptArr.length = 0;
						ss_DegreeArr.length = 0;
						ss_SubLength = 0;
						$.each(Students.data4SubjectSelection, function (index, data4SubjectSelection) {
							ss_subjectCodeArr[ss_SubLength] = data4SubjectSelection.subjectCode;
							ss_subjectTitleArr[ss_SubLength] = data4SubjectSelection.firstSubTitle;
							ss_achedamicYearArr[ss_SubLength] = data4SubjectSelection.achedamicYear;
							ss_subjectSemesterArr[ss_SubLength] = data4SubjectSelection.subjectSemester;
							ss_attemptArr[ss_SubLength] = data4SubjectSelection.attempt;
							ss_DegreeArr[ss_SubLength] = data4SubjectSelection.degreeCode;
							ss_SubLength++;
						});

						// data4RepeatSubjectSelection
						rr_subjectCodeArr.length = 0;
						rr_subjectTitleArr.length = 0;
						rr_achedamicYearArr.length = 0;
						rr_subjectSemesterArr.length = 0;
						rr_attemptArr.length = 0;
						rr_DegreeArr.length = 0;
						rr_reasonArr.length = 0;
						rr_SubLength = 0;
						$.each(Students.data4RepeatSubjectSelection, function (index, data4RepeatSubjectSelection) {
							rr_subjectCodeArr[rr_SubLength] = data4RepeatSubjectSelection.rsubjectCode;
							rr_subjectTitleArr[rr_SubLength] = data4RepeatSubjectSelection.rsubjectTitle;
							rr_achedamicYearArr[rr_SubLength] = data4RepeatSubjectSelection.rachedamicYear;
							rr_subjectSemesterArr[rr_SubLength] = data4RepeatSubjectSelection.rsubjectSemester;
							rr_attemptArr[rr_SubLength] = data4RepeatSubjectSelection.attempt;
							rr_DegreeArr[rr_SubLength] = data4RepeatSubjectSelection.degreeCode;
							rr_reasonArr[rr_SubLength] = data4RepeatSubjectSelection.rReason;
							rr_SubLength++;
						});


						// data4ReRepeatSubjectSelection
						Ress_subjectCodeArr.length = 0;
						Ress_subjectTitleArr.length = 0;
						Ress_achedamicYearArr.length = 0;
						ss_subjectSemesterRepeatArr.length = 0;
						Ress_attemptArr.length = 0;
						Ress_DegreeArr.length = 0;
						Ress_attemptTimeArr.length = 0;
						ReRep_SubLength = 0;
						$.each(Students.data4ReRepeatSubjectSelection, function (index, data4ReRepeatSubjectSelection) {
							Ress_subjectCodeArr[ReRep_SubLength] = data4ReRepeatSubjectSelection.ReRep_subjectCode;
							Ress_subjectTitleArr[ReRep_SubLength] = data4ReRepeatSubjectSelection.rerepSubTitle;
							Ress_achedamicYearArr[ReRep_SubLength] = data4ReRepeatSubjectSelection.ReRep_achedamicYear;
							ss_subjectSemesterRepeatArr[ReRep_SubLength] = data4ReRepeatSubjectSelection.subjectSemester;
							Ress_attemptArr[ReRep_SubLength] = data4ReRepeatSubjectSelection.ReRep_attempt;
							Ress_DegreeArr[ReRep_SubLength] = data4ReRepeatSubjectSelection.ReRep_degreeCode;
							Ress_attemptTimeArr[ReRep_SubLength] = data4ReRepeatSubjectSelection.re_repeat_attempt_time;
							ReRep_SubLength++;
						});




						let locApp = -1;
						if (dataRep['searchType'] == 'studentSearch') {
							for (i = 0; i < studentNoLength; i++) {
								if (dataRep["studentNo"] == studentNoArr[i] & studentNICArr[i] != null) {
									locApp = i;
									break;
								}
							}
						}
						if (locApp != -1) {
							dataRep['applicationNo'] = applicationNoArr[locApp];
						}

						// sendForm('data4paymentProfile');
						// sendForm('data4paymentBatch');
						// sendForm('data4StudentpaymentView');
						// sendForm('data4profileEducationalDetails');
						// sendForm('data4profilerefreeDetails');
						// sendForm('data4IncomeCategoryDetails');
						// sendForm('data4StudentProfileTransferStudent');

						// sendForm('data4profilExamResults');
						// sendForm('data4TransferProfile');
						// sendForm('data4Transferprogramme');
						// sendForm('data4getTransferID');
						// sendForm('data4DisplayTransferRules');
						// sendForm('data4CommenceDate');
						// sendForm('data4profilExamResit');
						// // sendForm('data4profilExamCriteria');
						// sendForm('data4profilExamFinalResults');
						// sendForm('data4profilRepExamResit');
						// sendForm('data4profilRepExamCriteria');
						// sendForm('data4profilRepExamFinalResults');
						// sendForm('data4profilRepeatExamResults');
						// // sendForm('data4ReRepeatSubjectSelection');
						// sendForm('data4profilReRepeatExamResults');


						// facultyCodeArr[studentNoLength] = Students.facultyCode;
						// 						facultyTitleArr[studentNoLength] = Students.facultyTitle;
						// 						programmeTypeCodeArr[st
						if (programmeCode != "") {
							console.log("!")
							let programmeArray = programmeCode.split(',');
							if (programmeArray.includes(degreeCodeArr[studentNoLength - 1])) {
								stdProfileSearch = true;
								sendForm('data4DisplayStudentNoforProfile');
								setDataforStudentProfile();
							} else if (degreeCodeArr[studentNoLength - 1] == "") {
								Swal.fire({
									icon: 'error',
									title: 'Invalid Student No1',
									html: "Please enter valid student no.",
									showConfirmButton: true,
								});
							} else {
								Swal.fire({
									icon: 'error',
									title: 'Invalid Student No2',
									html: "Please enter valid student no.",
									showConfirmButton: true,
								});
							}
						} else if (departmentCode != "") {
							console.log("!2")

							if (departmentCodeArr[studentNoLength - 1] == departmentCode) {
								stdProfileSearch = true;
								sendForm('data4DisplayStudentNoforProfile');
								setDataforStudentProfile();
							} else {
								Swal.fire({
									icon: 'error',
									title: 'Invalid Student No3',
									html: "Please enter valid student no.",
									showConfirmButton: true,
								});
							}
						} else if (facultyCode != "") {
							console.log("3!")

							console.log(facultyCodeArr);
							console.log(studentNoLength);
							console.log(facultyCodeArr[studentNoLength]);
							console.log(facultyCode);
							if (facultyCodeArr[studentNoLength - 1] == facultyCode) {
								stdProfileSearch = true;
								sendForm('data4DisplayStudentNoforProfile');
								setDataforStudentProfile();
							} else {
								Swal.fire({
									icon: 'error',
									title: 'Invalid Student No4',
									html: "Please enter valid student no.",
									showConfirmButton: true,
								});
							}
						} else if (degreeCodeArr[studentNoLength - 1] == "") {
							console.log("!5")

							Swal.fire({
								icon: 'error',
								title: 'Invalid Student No65',
								html: "Please enter valid student no.",
								showConfirmButton: true,
							});
						}
						else {
							studentTmpi = -1;
							for (i = 0; i < studentNoLength; i++) {
								if (dataRep["studentNo"] == studentNoArr[i] & studentNICArr[i] != null) {
									studentTmpi = i;
									title = "Student Profile"
									break;
								}
							}
							if (studentTmpi != -1) {
								stdProfileSearch = true;
								sendForm('data4DisplayStudentNoforProfile');
								setDataforStudentProfile();
							} else {
								Swal.fire({
									icon: 'error',
									title: 'Invalid Student No',
									html: "Please enter valid student no.",
									showConfirmButton: true,
								});
							}


						}





					}
				});



			} else {
				Swal.fire({
					icon: 'error',
					title: 'Invalid Student No',
					html: "Please enter valid student no.",
					showConfirmButton: true,
				});
			}
		},
		error: function (error) {
			console.log(error)
		}
	});



}


function checkStudentAvailable() {
	// var checkStdAvailable = false;

	// for (i = 0; i < studentNoProLength; i++) {

	// 	if (studentNoProArr.indexOf(studentNoProArr[i]) == studentNoProArr.lastIndexOf(studentNoProArr[i]) || (studentNoProArr.indexOf(studentNoProArr[i]) != studentNoProArr.lastIndexOf(studentNoProArr[i]) && studentNoProArr.indexOf(studentNoProArr[i]) == i)) {
	// 		if (studentNoProArr[i] != "") {
	// 			if (studentNoProArr[i] == dataRep["studentNo"]) {
	// 				dataRep["applicationNo"] = applcationNoProArr[i];
	// 				checkStdAvailable = true;
	// 				break;
	// 			}
	// 		}
	// 	}
	// }
	// if (checkStdAvailable) {
	// 	document.getElementById('studentNo').value = '';
	// 	alert("Student No not available");
	// } else {
	// 	searchStudentProfile();
	// }
	searchStudentProfile();

}


//---------------------------------------------SEARCH STUDENT PROFILE END-----------------------------------

//---------------------------------------------SEARCH APPLICANT PROFILE START-----------------------------------




function searchApplicantProfile() {
	if (document.getElementById('applicationNo').value != "") {
		// returnStudentProfile();
		GetApplicantProfile(document.getElementById('applicationNo').value);

		// setDataforStudentProfile();
	}
}

function GetApplicantProfile(applicationNo) {
	dataRep['applicationNo'] = applicationNo.trim();
	resetProfileData();
	stdProfileSearch = true;

	// sendForm('data4paymentBatch');
	// sendForm('data4profileEducationalDetails');
	// sendForm('data4profilerefreeDetails');	
	// sendForm('data4GetReleventApplicant');
	// sendForm('data4DisplayApplicatProfile');


	let postData = {
		action: "data4ApplicantProfileDetails",
		ap_no: dataRep['applicationNo'],
		authcode: authcode,
		username: dataRep['userId'],
	};
	$.ajax({
		type: 'POST',
		url: 'rules/students.php',
		data: postData,
		dataType: 'json',
		success: function (response) {
			$('#departmentTable').empty();
			departmentArray.length = 0;
			console.log(response)
			// console.log(response.length)
			if (response && response.length > 0) {
				studentNICLength = 0;
				$.each(response, function (index, Students) {

					if (Students.studentNoArr != "") {
						dataRep["degreeCode"] = Students.degreeCode;
						dataRep["academicYear"] = Students.achedamicYear;

						profileapplicationNoArr1[studentNICLength] = Students.applicationNo;
						profilestudentNameArr[studentNICLength] = Students.studentName;
						profilestudentNICArr[studentNICLength] = Students.studentNIC;
						profiledegreeCodeArr[studentNICLength] = Students.degreeCode;
						profiledegreeTitleArr[studentNICLength] = Students.degreeTitle;
						profilestudentPermanentAddressArr[studentNICLength] = Students.studentPermanentAddress;
						studentProvinceArr[studentNICLength] = Students.living_state;	
						studentCityArr[studentNICLength] = Students.city;	
						studentZipArr[studentNICLength] = Students.zipcode;	
						studentWhatsAppArr[studentNICLength] = Students.whatsapp;	
						studentContactAlterEmailArr[studentNICLength] = Students.studentContactEmail2;	
											
						profilestudentContactLanArr[studentNICLength] = Students.studentContactLan;
						profilestudentContactMobileArr[studentNICLength] = Students.studentContactMobile;
						profilestudentContactEmailArr[studentNICLength] = Students.studentContactEmail;
						profilestudentEmploymentArr[studentNICLength] = Students.studentEmployment;
						profilestudentInitialArr[studentNICLength] = Students.studentInitial;
						studentNationalityArr[studentNoLength] = Students.studentNationality;
						correspondenceArr[studentNoLength] = Students.correspondence;
						studentCitizenshipArr[studentNoLength] = Students.studentCitizenship;
						studentDateofbirthArr[studentNoLength] = Students.studentDateofbirth;
						achedamicYearArr[studentNoLength] = Students.achedamicYear;
						mediumArr[studentNoLength] = Students.medium;
						studengenderoArr[studentNoLength] = Students.studengender;

						studentNICLength++;

						tCodeArr.length = 0;
						paymentStudentArr.length = 0;
						feeCatArr.length = 0;
						amountArr.length = 0;
						paymentDateArr.length = 0;
						tCodeLength = 0;
						$.each(Students.data4paymentProfile, function (index, data4paymentProfile) {
							tCodeArr[tCodeLength] = data4paymentProfile.tCode;
							paymentStudentArr[tCodeLength] = data4paymentProfile.studentNo;
							feeCatArr[tCodeLength] = data4paymentProfile.feeCat;
							amountArr[tCodeLength] = data4paymentProfile.amount;
							paymentDateArr[tCodeLength] = data4paymentProfile.paymentdate;
							tCodeLength++;
						});

						IncomeSourceCodeArr.length = 0;
						IncomeCategoryCodeArr.length = 0;
						IncomeCategoryTitleArr.length = 0;
						achedamicYearIncomeArr.length = 0;
						IncomeCategoryValueArr.length = 0;
						Income_degreeCodeArr.length = 0;
						CurrencyArr.length = 0;
						IncomeSourceCodeLength = 0;
						$.each(Students.data4IncomeCategoryDetails, function (index, data4IncomeCategoryDetails) {
							IncomeSourceCodeArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.IncomeSourceCode;
							IncomeCategoryCodeArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.IncomeCategoryCode;
							IncomeCategoryTitleArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.IncomeCategoryTitle;
							achedamicYearIncomeArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.achedamicYear;
							IncomeCategoryValueArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.IncomeCategoryValue;
							Income_degreeCodeArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.Income_degreeCode;
							CurrencyArr[IncomeSourceCodeLength] = data4IncomeCategoryDetails.Currency;
							IncomeSourceCodeLength++;
						});


						batchDegreeCodeArr.length = 0;
						batchYearArr.length = 0;
						batchCourseFeeArr.length = 0;
						batchLibraryFeeArr.length = 0;
						batchdetailsLength = 0;
						$.each(Students.data4paymentBatch, function (index, data4paymentBatch) {
							batchDegreeCodeArr[batchdetailsLength] = data4paymentBatch.degcd1;
							batchYearArr[batchdetailsLength] = data4paymentBatch.degacy1;
							batchCourseFeeArr[batchdetailsLength] = data4paymentBatch.degcrs1;
							batchLibraryFeeArr[batchdetailsLength] = data4paymentBatch.deglibf1;
							batchdetailsLength++;
						});


						Pay_RefNoArr.length = 0;
						Pay_studentNoArr.length = 0;
						Pay_CategoryCodeArr.length = 0;
						Pay_amountArr.length = 0;
						Pay_Time_StampArr.length = 0;
						Pay_MethodArr.length = 0;
						Response_ProgressArr.length = 0;
						Response_Progress_TimeArr.length = 0;
						PayTitileArr.length = 0;
						RefNoLength = 0;
						$.each(Students.data4StudentpaymentView, function (index, data4StudentpaymentView) {
							Pay_RefNoArr[RefNoLength] = data4StudentpaymentView.Pay_RefNo;
							Pay_studentNoArr[RefNoLength] = data4StudentpaymentView.Pay_studentNo;
							Pay_CategoryCodeArr[RefNoLength] = data4StudentpaymentView.Pay_CategoryCode;
							Pay_amountArr[RefNoLength] = data4StudentpaymentView.Pay_amount;
							Pay_Time_StampArr[RefNoLength] = data4StudentpaymentView.Pay_Time_Stamp;
							Pay_MethodArr[RefNoLength] = data4StudentpaymentView.Pay_Method;
							Response_ProgressArr[RefNoLength] = data4StudentpaymentView.Response_Progress;
							Response_Progress_TimeArr[RefNoLength] = data4StudentpaymentView.Response_Progress_Time;
							PayTitileArr[RefNoLength] = data4StudentpaymentView.PayTitile;
							RefNoLength++;
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
						$.each(Students.data4profilenewEducation, function (index, data4qualification) {
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

						$.each(Students.data4profilenewProfessional, function (index, data4otherQualification) {
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

						$.each(Students.data4profilenewRefrees, function (index, data4references) {
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

						$.each(Students.data4profilenewWork, function (index, data4work) {
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




						educationFieldNameArr.length = 0;
						educationValueArr.length = 0;
						educationPinArr.length = 0;
						educationPinLength = 0;

						$.each(Students.data4profileEducationalDetails, function (index, data4profileEducationalDetails) {
							educationFieldNameArr[educationPinLength] = data4profileEducationalDetails.educationFieldName;
							educationValueArr[educationPinLength] = data4profileEducationalDetails.educationValue;
							educationPinArr[educationPinLength] = data4profileEducationalDetails.educationPin;
							educationPinLength++;
						});

						workFieldNameArr.length = 0;
						workValueArr.length = 0;
						workPinArr.length = 0;
						workPinLength = 0;
						$.each(Students.data4profilerefreeDetails, function (index, data4profilerefreeDetails) {
							workFieldNameArr[workPinLength] = data4profilerefreeDetails.workFieldName;
							workValueArr[workPinLength] = data4profilerefreeDetails.workValue;
							workPinArr[workPinLength] = data4profilerefreeDetails.workPin;
							workPinLength++;
						});


						let locApp = 0;
						dataRep['applicationNo'] = Students.applicationNo;



						if (programmeCode != "") {
							let programmeArray = programmeCode.split(',');
							if (programmeArray.includes(profiledegreeCodeArr[studentNoLength])) {
								stdProfileSearch = true;
								sendForm('data4DisplayApplicatProfile');
								setDataforStudentProfile();
							} else if (profiledegreeCodeArr[studentNoLength] == "") {
								Swal.fire({
									icon: 'error',
									title: 'Invalid Application No',
									html: "Please enter valid application no.",
									showConfirmButton: true,
								});
							} else {
								Swal.fire({
									icon: 'error',
									title: 'Invalid Application No',
									html: "Please enter valid application no.",
									showConfirmButton: true,
								});
							}
						} else if (departmentCode != "") {
							if (departmentCodeArr[studentNoLength] == departmentCode) {
								stdProfileSearch = true;
								sendForm('data4DisplayApplicatProfile');
								setDataforStudentProfile();
							} else {
								Swal.fire({
									icon: 'error',
									title: 'Invalid Application No',
									html: "Please enter valid application no.",
									showConfirmButton: true,
								});
							}
						} else if (facultyCode != "") {
							if (facultyCodeArr[studentNoLength] == facultyCode) {
								stdProfileSearch = true;
								sendForm('data4DisplayApplicatProfile');
								setDataforStudentProfile();
							} else {
								Swal.fire({
									icon: 'error',
									title: 'Invalid Application No',
									html: "Please enter valid application no.",
									showConfirmButton: true,
								});
							}
						} else if (degreeCodeArr[studentNoLength] == "") {
							Swal.fire({
								icon: 'error',
								title: 'Invalid Application No',
								html: "Please enter valid application no.",
								showConfirmButton: true,
							});
						}
						else {
							stdProfileSearch = true;
							sendForm('data4DisplayApplicatProfile');
							setDataforStudentProfile();
						}








						// stdProfileSearch = true;
						// let programmeArray = programmeCode.split(',');

						// if (programmeArray.includes(profiledegreeCodeArr[studentNICLength])) {
						// 	sendForm('data4DisplayApplicatProfile');
						// 	setDataforStudentProfile();
						// }else if (profiledegreeCodeArr[studentNICLength] == "") {
						// 	Swal.fire({
						// 		icon: 'error',
						// 		title: 'Invalid Application Number',
						// 		html: "Please enter valid application number",
						// 		showConfirmButton: true,
						// 	});
						// } else {
						// 	Swal.fire({
						// 		icon: 'error',
						// 		title: 'Invalid Application Number',
						// 		html: "Please enter valid application number",
						// 		showConfirmButton: true,
						// 	});
						// }
					}
				});



			} else {
				Swal.fire({
					icon: 'error',
					title: 'Invalid Application Number',
					html: "Please enter valid application number",
					showConfirmButton: true,
				});
			}
		},
		error: function (error) {
			console.log(error)
		}
	});




}


function checkApplicationAvailable() {
	// var checkApplicantAvailable = false;
	// for (i = 0; i < applicationProfile; i++) {
	// 	if (profileapplicationNoArr[i] == dataRep['applicationNo']) {
	// 		checkApplicantAvailable = true;
	// 		break;
	// 	}
	// }
	// if (!checkApplicantAvailable) {
	// 	document.getElementById('applicationNo').value = '';
	// 	alert("Applicant No not available");
	// } else {
	// 	searchApplicantProfile();
	// }
	searchApplicantProfile();

}

//---------------------------------------------SEARCH APPLICANT PROFILE END-----------------------------------

//---------------------------------------------SET DATA START-------------------------------------------------
var studentTmpi = -1;
var applicantTmpi = -1;
function setDataforStudentProfile(dsp) {
	var IncomeCategoryTitleList = IncomeCategoryValueList = IncomeCategoryCodeList = '';
	var vTmpSTR = "";
	let bgTItle = "";
	let studentStatus = "";
	if (dsp == "formStudentProfileDeteils") {
		studentTmpi = -1;
		applicantTmpi = -1;
		if (dataRep['searchType'] == 'studentSearch') {
			for (i = 0; i < studentNoLength; i++) {
				if (dataRep["studentNo"] == studentNoArr[i] & studentNICArr[i] != null) {
					studentTmpi = i;
					studentStatus = stregistered[i];
					if (studentStatus == "tr") {
						title = "Student Profile(Transferd)";
						bgTItle = "bg-warning";
					} else if (studentStatus == "del") {
						title = "Student Profile(Deleted)";
						bgTItle = "bg-danger";

					} else if (studentStatus == "withdraw") {
						title = "Student Profile(Withdraw Transfer)";
						bgTItle = "bg-danger";

					} else if (studentStatus == "prg") {
						title = "Student Profile (Pre-Registered)";
						bgTItle = "bg-info";

					} else {
						title = "Student Profile";
						bgTItle = "bg-success";

					}
					break;
				}
			}
		} else {
			for (i = 0; i < studentNICLength; i++) {
				if (dataRep["applicationNo"] == profileapplicationNoArr1[i] & profilestudentNICArr[i] != null) {
					applicantTmpi = i;
					title = "Applicant Profile"
					break;
				}
			}
		}




		vTmpSTR += '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0 ' + bgTItle + '" style="margin-top: 0;margin-bottom: 0.5rem;">';

		vTmpSTR += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-between" style="width: 100%;padding:5px 10px">';

		// LEFT SIDE (Title)
		vTmpSTR += '<ul class="navbar-nav mr-lg-2">';
		vTmpSTR += '<li class="nav-item ml-0">';
		vTmpSTR += '<h4 class="mb-0">' + title + '</h4>';
		vTmpSTR += '</li></ul>';

		// RIGHT SIDE (Button)
		vTmpSTR += '<div>';
		if (dataRep['searchType'] == 'studentSearch') {
			vTmpSTR += '<button class="btn btn-sm btn-danger" onclick="getStudentProfile(\'' + studentNoArr[studentTmpi] + '\')">';
			vTmpSTR += '<i class="fa fa-refresh"></i> Refresh Student Profile';
			vTmpSTR += '</button>';
		}
		vTmpSTR += '</div>';

		vTmpSTR += '</div></nav>';




		if (studentTmpi != -1) {
			var commDate = "";
			var duration = "";
			for (q = 0; q < coursecommenceLength; q++) {
				if (commencedegreeCodeArr[q] == degreeCodeArr[studentTmpi] && commenceacademicYearArr[q] == achedamicYearArr[studentTmpi]) {
					commDate = coursecommenceArr[q];
					duration = durationArr[q];
					if (durationArr[q].substring(0, 1) == "1") {
						duration = 1;
					}
					if (durationArr[q].substring(0, 1) == "2") {
						duration = 2;
					}
					if (durationArr[q].substring(0, 1) == "3") {
						duration = 3;
					}
					if (durationArr[q].substring(0, 2) == "1-2") {
						duration = 2;
					}
				}
			}

			var endy = (commDate.split("-", 3)[commDate.split("-", 3).length - 3]);
			var endm = (commDate.split("-", 3)[commDate.split("-", 3).length - 2]);
			var endd = (commDate.split("-", 3)[commDate.split("-", 3).length - 1]);
			endy = parseInt(endy) + duration;
			endd = parseInt(endd) - 1;
			var EndDate = "";
			if (!isNaN(endy) && !isNaN(endm) && !isNaN(endm) && endy !== undefined && endm !== undefined && endd !== undefined)
				EndDate = endy + "-" + endm + "-" + endd;

		} else if (applicantTmpi != -1) {

		}


		vTmpSTR += '<div class="row col-12" >';
		vTmpSTR += '<div class="row" style="background-color:#fff;margin: 0;padding:10px 0"> <div class="col-12 col-md-4">';
		vTmpSTR += '<div class="card-header bg-transparent text-center">';
		if (studentTmpi != -1) {
			vTmpSTR += '<div id="studentImage">' + '<img src="pic/' + studentNICArr[studentTmpi] + '.jpg" class="profile_img" alt=""/>' + '</div>';
			vTmpSTR += "<h3 id='studentName1'>" + '<label style="fontcolor:red;">' + studentInitialArr[studentTmpi] + '</label>' + "</h3>";
		} else if (applicantTmpi != -1) {
			vTmpSTR += '<div id="studentImage">' + '<img src="studentPhotos/pic/' + profilestudentNICArr[applicantTmpi] + '.jpg" class="profile_img" alt=""/>' + '</div>';
			vTmpSTR += "<h3 id='studentName1'>" + '<label style="fontcolor:red;">' + profilestudentNameArr[applicantTmpi] + '</label>' + "</h3>";
		}
		vTmpSTR += "</div>";

		vTmpSTR += '<br>';
		vTmpSTR += '<h5 class="text-info">Student Details</h5>';

		vTmpSTR += '<table class="table table-striped profiletable">';
		vTmpSTR += '<tbody>';
		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<th>Full Name</th>';
			vTmpSTR += '<td>' + studentNameArr[studentTmpi] + '</td>';
			vTmpSTR += '</tr>';
		} else if (applicantTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<th>Full Name</th>';
			vTmpSTR += '<td>' + profilestudentNameArr[applicantTmpi] + '</td>';
			vTmpSTR += '</tr>';
		}


		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Student No</strong></td>';
			vTmpSTR += '<td>' + studentNoArr[studentTmpi] + '</td>';
			vTmpSTR += '</tr>';
		}

		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Application Number</strong></td>';
			vTmpSTR += '<td>' + applicationNoArr[studentTmpi] + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Application Number</strong></td>';
			vTmpSTR += '<td>' + profileapplicationNoArr1[applicantTmpi] + '</td>';
			vTmpSTR += '</tr>';
		}

		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>NIC</strong></td>';
			vTmpSTR += '<td>' + studentNICArr[studentTmpi] + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>NIC</strong></td>';
			vTmpSTR += '<td>' + profilestudentNICArr[applicantTmpi] + '</td>';
			vTmpSTR += '</tr>';
		}

		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Date of Birth</strong></td>';
			vTmpSTR += '<td>' + studentDateofbirthArr[studentTmpi] + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Date of Birth</strong></td>';
			vTmpSTR += '<td>' + studentDateofbirthArr[applicantTmpi] + '</td>';
			vTmpSTR += '</tr>';
		}

		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Gender</strong></td>';
			vTmpSTR += '<td>' + studengenderoArr[studentTmpi] + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Gender</strong></td>';
			vTmpSTR += '<td>' + studengenderoArr[applicantTmpi] + '</td>';
			vTmpSTR += '</tr>';
		}

		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Nationality</strong></td>';
			vTmpSTR += '<td>' + studentNationalityArr[studentTmpi] + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Nationality</strong></td>';
			vTmpSTR += '<td>' + studentNationalityArr[applicantTmpi] + '</td>';
			vTmpSTR += '</tr>';
		}

		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Citizenship</strong></td>';
			vTmpSTR += '<td>' + studentCitizenshipArr[studentTmpi] + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Citizenship</strong></td>';
			vTmpSTR += '<td>' + studentCitizenshipArr[applicantTmpi] + '</td>';
			vTmpSTR += '</tr>';
		}

		// if (studentTmpi != -1) {

		// 	vTmpSTR += '<tr class="table-active">';
		// 	vTmpSTR += '<th>Employment </th>';
		// 	vTmpSTR += '<td>' + studentEmploymentArr[studentTmpi] + '</td>';
		// 	vTmpSTR += '</tr>';


		// } else if (applicantTmpi != -1) {	
		// 	vTmpSTR += '<tr class="table-active">';
		// 	vTmpSTR += '<th>Employment </th>';
		// 	vTmpSTR += '<td>' + profilestudentEmploymentArr[applicantTmpi] + '</td>';
		// 	vTmpSTR += '</tr>';
		// }

		vTmpSTR += '</tbody>';
		vTmpSTR += '</table>';

		vTmpSTR += '<br>';

		vTmpSTR += '<br>';
		vTmpSTR += '<h5 class="text-info">Contact Details</h5>';
		vTmpSTR += '<table class="table table-striped profiletable main">';
		vTmpSTR += '<tbody>';
		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td style="width:12rem"><strong>Address</strong></td>';
			vTmpSTR += '<td>' + (studentPermanentAddressArr[studentTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td style="width:12rem"><strong>Address</strong></td>';
			vTmpSTR += '<td>' + (profilestudentPermanentAddressArr[applicantTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		}

		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>State/Province</strong></td>';
			vTmpSTR += '<td>' + (studentProvinceArr[studentTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>State/Province</strong></td>';
			vTmpSTR += '<td>' + (studentProvinceArr[applicantTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		}

		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>City</strong></td>';
			vTmpSTR += '<td>' + (studentCityArr[studentTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>City</strong></td>';
			vTmpSTR += '<td>' + (studentCityArr[applicantTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		}

		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Zip/Postal Code</strong></td>';
			vTmpSTR += '<td>' + (studentZipArr[studentTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Zip/Postal Code</strong></td>';
			vTmpSTR += '<td>' + (studentZipArr[applicantTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		}
		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Home No</strong></td>';
			vTmpSTR += '<td>' + (studentContactLanArr[studentTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Home No</strong></td>';
			vTmpSTR += '<td>' + (profilestudentContactLanArr[applicantTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';

		}
		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Mobile No</strong></td>';
			vTmpSTR += '<td>' + (studentContactMobileArr[studentTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Mobile No</strong></td>';
			vTmpSTR += '<td>' + (profilestudentContactMobileArr[applicantTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		}
		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Whatsapp Number </strong></td>';
			vTmpSTR += '<td>' + (studentWhatsAppArr[studentTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Whatsapp Number </strong></td>';
			vTmpSTR += '<td>' + (studentWhatsAppArr[applicantTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		}
		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>E-mail</strong></td>';
			vTmpSTR += '<td>' + (studentContactEmailArr[studentTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>E-mail</strong></td>';
			vTmpSTR += '<td>' + (profilestudentContactEmailArr[applicantTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		}
		if (studentTmpi != -1) {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Alternative Email</strong></td>';
			vTmpSTR += '<td>' + (studentContactAlterEmailArr[studentTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		} else {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<td><strong>Alternative Email</strong></td>';
			vTmpSTR += '<td>' + (studentContactAlterEmailArr[applicantTmpi] ?? '') + '</td>';
			vTmpSTR += '</tr>';
		}

		vTmpSTR += '</tbody>';
		vTmpSTR += '</table>';


		vTmpSTR += '<br>';
		// vTmpSTR += '<h5 class="text-info">Current Employment Details</h5>';
		// vTmpSTR += '<table class="table table-striped profiletable main">';
		// vTmpSTR += '<tbody>';

		// vTmpSTR += '<tr class="table-active">';
		// vTmpSTR += '<td style="width:12rem"><strong>Organization</strong></td>';
		// vTmpSTR += '<td>' + (studentEmploymentArr[0] ?? '') + '</td>';
		// vTmpSTR += '</tr>';

		// vTmpSTR += '<tr class="table-active">';
		// vTmpSTR += '<td><strong>Designation</strong></td>';
		// vTmpSTR += '<td>' + (studentstudentDesignationArr[0] ?? '') + '</td>';
		// vTmpSTR += '</tr>';

		// vTmpSTR += '<tr class="table-active">';
		// vTmpSTR += '<td><strong>Address</strong></td>';
		// vTmpSTR += '<td>' + (studentOfficeAddressArr[0] ?? '') + '</td>';
		// vTmpSTR += '</tr>';

		// vTmpSTR += '<tr class="table-active">';
		// vTmpSTR += '<td><strong>Date of Appointment</strong></td>';
		// vTmpSTR += '<td>' + (studentAppointmentDateArr[0] ?? '') + '</td>';
		// vTmpSTR += '</tr>';

		// vTmpSTR += '<tr class="table-active">';
		// vTmpSTR += '<td><strong>Working Country</strong></td>';
		// vTmpSTR += '<td>' + (studentOfficeCountryArr[0] ?? '') + '</td>';
		// vTmpSTR += '</tr>';

		// vTmpSTR += '<tr class="table-active">';
		// vTmpSTR += '<td><strong>Office Number</strong></td>';
		// vTmpSTR += '<td>' + (studentOfficeNumberArr[0] ?? '') + '</td>';
		// vTmpSTR += '</tr>';

		// vTmpSTR += '<tr class="table-active">';
		// vTmpSTR += '<td><strong>Office Email</strong></td>';
		// vTmpSTR += '<td>' + (studentOfficeEmailArr[0] ?? '') + '</td>';
		// vTmpSTR += '</tr>';

		// vTmpSTR += '</tbody>';
		// vTmpSTR += '</table>';

		//Degree Details
		vTmpSTR += '<h5 class="text-info">Program Details</h5>';
		vTmpSTR += '<table class="table table-striped">';

		vTmpSTR += '<tbody>';
		vTmpSTR += '<tr class="table-active">';
		vTmpSTR += '<th>Degree</th>';
		if (studentTmpi != -1) {
			vTmpSTR += '<td>' + degreeTitleArr[studentTmpi] + '</td>';

		} else if (applicantTmpi != -1) {
			vTmpSTR += '<td>' + profiledegreeTitleArr[applicantTmpi] + '</td>';

		} else {
			vTmpSTR += '<td></td>';
		}
		vTmpSTR += '</tr>';
		vTmpSTR += '<tr class="table-active">';
		vTmpSTR += '<th>Degree Code</th>';
		if (studentTmpi != -1) {
			vTmpSTR += '<td>' + degreeCodeArr[studentTmpi] + '</td>';

		} else if (applicantTmpi != -1) {
			vTmpSTR += '<td>' + profiledegreeCodeArr[applicantTmpi] + '</td>';

		} else {
			vTmpSTR += '<td></td>';

		}
		vTmpSTR += '</tr>';

		vTmpSTR += '<tr class="table-active">';
		vTmpSTR += '<th>Medium</th>';



		if (studentTmpi != -1) {
			if (mediumArr[studentTmpi] == "en") {
				vTmpSTR += '<td>Englsh</td>';
			}

			if (mediumArr[studentTmpi] == "si") {
				vTmpSTR += '<td>Sinhala</td>';
			}
		} else if (applicantTmpi != -1) {
			if (mediumArr[applicantTmpi] == "en") {
				vTmpSTR += '<td>Englsh</td>';
			}

			if (mediumArr[applicantTmpi] == "si") {
				vTmpSTR += '<td>Sinhala</td>';
			}

		} else {
			vTmpSTR += '<td></td>';

		}

		vTmpSTR += '</tr>';

		if (dataRep['searchType'] == 'studentSearch') {
			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<th>Duration</th>';
			vTmpSTR += '<td>' + duration + '</td>';
			vTmpSTR += '</tr>';

			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<th>Start Date</th>';
			vTmpSTR += '<td>' + commDate + '</td>';
			vTmpSTR += '</tr>';

			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<th>End Date</th>';
			vTmpSTR += '<td>' + EndDate + '</td>';
			vTmpSTR += '</tr>';

			vTmpSTR += '<tr class="table-active">';
			vTmpSTR += '<th>Library ID</th>';
			vTmpSTR += '<td>' + librarycodeArr[studentTmpi] + '</td>';
			vTmpSTR += '</tr>';
		}
		vTmpSTR += '</tbody>';
		vTmpSTR += '</table>';

		vTmpSTR += '<div>';
		if (studentTmpi != -1) {
			dataRep['ApplicationNo'] = applicationNoArr[studentTmpi];
		} else if (applicantTmpi != -1) {
			dataRep['ApplicationNo'] = profileapplicationNoArr1[applicantTmpi];
		}

		vTmpSTR += '<table class="table table-bordered table-sm mt-3" style="width:100%">';
		vTmpSTR += '<tbody>';

		if (dataRep['roleName'] == "Administrator" ||
			dataRep['roleName'] == "FGS Deputy Registrar" ||
			dataRep['roleName'] == "Dean") {

			if (studentTmpi != -1) {

				if (studentStatus == "yes") {

					vTmpSTR += '<tr>';
					vTmpSTR += '<td>Special Approve for Exam (With Hold Result)</td>';
					vTmpSTR += '<td><button type="button" class="btn btn-danger btn-sm" onclick="specialApprovedforExam(' + studentTmpi + ')">Approve</button></td>';
					vTmpSTR += '</tr>';

					vTmpSTR += '<tr>';
					vTmpSTR += '<td>Special Approve for Exam (Without Hold Result)</td>';
					vTmpSTR += '<td><button type="button" class="btn btn-warning btn-sm" onclick="specialApprovedforExamWithoutHold(' + studentTmpi + ')">Approve</button></td>';
					vTmpSTR += '</tr>';

					// Reset Password
					vTmpSTR += '<tr>';
					vTmpSTR += '<td>Reset Password</td>';
					vTmpSTR += '<td><button type="button" class="btn btn-success btn-sm" onclick="resetPassword(' + studentTmpi + ')">Reset</button></td>';
					vTmpSTR += '</tr>';

				} else {

					vTmpSTR += '<tr>';
					vTmpSTR += '<td>Special Approve for Exam (With Hold Result)</td>';
					vTmpSTR += '<td><button type="button" class="btn btn-danger btn-sm" disabled>Approve</button></td>';
					vTmpSTR += '</tr>';

					vTmpSTR += '<tr>';
					vTmpSTR += '<td>Special Approve for Exam (Without Hold Result)</td>';
					vTmpSTR += '<td><button type="button" class="btn btn-warning btn-sm" disabled>Approve</button></td>';
					vTmpSTR += '</tr>';

					// Reset Password
					vTmpSTR += '<tr>';
					vTmpSTR += '<td>Reset Password</td>';
					vTmpSTR += '<td><button type="button" class="btn btn-success btn-sm" disabled>Reset</button></td>';
					vTmpSTR += '</tr>';
				}
			}

		}

		// Print Application
		vTmpSTR += '<tr>';
		vTmpSTR += '<td>Print Application</td>';
		vTmpSTR += '<td><button type="button" class="btn btn-info btn-sm" onclick="callPrintFunctionNew()">Print</button></td>';
		vTmpSTR += '</tr>';

		vTmpSTR += '</tbody></table>';
		vTmpSTR += '</div>';


		vTmpSTR += '</div>';


		vTmpSTR += '<div class="col-12 col-md-8">';








		// vTmpSTR += '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;;margin-bottom: 1rem;background-color: #9A0A0A;	">';
		// vTmpSTR += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		// vTmpSTR += '<ul class="navbar-nav mr-lg-2">';
		// vTmpSTR += '<li class="nav-item ml-0">';
		// if (studentTmpi != -1) {

		// 	vTmpSTR += '<h6 class="mb-0">Student Name - ' + studentNameArr[studentTmpi] + ' | ' + studentNoArr[studentTmpi] + '</h6>';
		// } else if (applicantTmpi != -1) {
		// 	vTmpSTR += '<h6 class="mb-0">Applicant Name - ' + profilestudentNameArr[applicantTmpi] + ' | ' + profileapplicationNoArr1[applicantTmpi] + '</h6>';

		// }
		// vTmpSTR += '</li></ul></div></nav>';
		// vTmpSTR += '<div class="row"><div class="col-md-12">';
		// vTmpSTR += '<table class="table table-bordered mb-2" style="background-color:#fff">';
		// vTmpSTR += '<thead>';
		// vTmpSTR += '<tr>';
		// vTmpSTR += '<th scope="col">Degree</th>';
		// vTmpSTR += '<th scope="col">Medium</th>';
		// if (dataRep['searchType'] == 'studentSearch') {
		// vTmpSTR += '<th scope="col">Duration</th>';
		// vTmpSTR += '<th scope="col">Start Date</th>';
		// vTmpSTR += '<th scope="col">End Date</th>';
		// }
		// vTmpSTR += '</tr>';
		// vTmpSTR += '</thead>';
		// vTmpSTR += '<tbody>';
		// vTmpSTR += '<tr>';
		// if (studentTmpi != -1) {
		// 	vTmpSTR += '<th scope="row">' + degreeTitleArr[studentTmpi] + '</th>';

		// } else if (applicantTmpi != -1) {
		// 	vTmpSTR += '<th scope="row">' + profiledegreeTitleArr[applicantTmpi] + '</th>';

		// } else {
		// 	vTmpSTR += '<th scope="row"></th>';

		// }
		// vTmpSTR += '<th scope="row"></th>';

		// if (dataRep['searchType'] == 'studentSearch') {
		// 	vTmpSTR += '<td>'+duration+'</td>';
		// 	vTmpSTR += '<td>'+commDate+'</td>';
		// 	vTmpSTR += '<td>'+EndDate+'</td>';
		// }
		// vTmpSTR += '</tr>';
		// vTmpSTR += '<tbody>';
		// vTmpSTR += '</table>';

		// vTmpSTR += '</div></div>';


		vTmpSTR += '<div><div class="row"><div class="col-md-12">';
		vTmpSTR += '<div class="nav nav-pills nav-pills-custom me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">';
		vTmpSTR += '<a class="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" style="width: 9rem;text-align:center;margin: 0 10px 5px;font-size:12px">View Educational Qualifications</a>';
		vTmpSTR += '<a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" style="width: 9rem;text-align:center;margin: 0 10px 5px;font-size:12px">View Professional Qualifications</a>';
		vTmpSTR += '<a class="nav-link" id="v-pills-wrkExperience-tab" data-bs-toggle="pill" data-bs-target="#v-pills-wrkExperience" type="button" role="tab" aria-controls="v-pills-wrkExperience" aria-selected="false" style="width: 9rem;text-align:center;margin: 0 10px 5px;font-size:12px">View Work Experience</a>';
		vTmpSTR += '<a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" style="width: 9rem;text-align:center;margin: 0 10px 5px;font-size:12px">View Referees</a>';

		if (dataRep['roleName'] == "Coordinator" || dataRep['roleName'] == "FGS Deputy Registrar" || dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "Program Assistant/Clerk" || dataRep['roleName'] == "Head of the Department" || dataRep['roleName'] == "Technical Coordinator"
			|| dataRep['roleName'] == "Assistant Manager - Finance" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Book keeper" || dataRep['roleName'] == "Subject Clerk" || dataRep['roleName'] == "Book Keeper - FGS Finanace"
		) {
			vTmpSTR += '<a class="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill" data-bs-target="#v-pills-payment" type="button" role="tab" aria-controls="v-pills-payment" aria-selected="false" style="width: 9rem;text-align:center;margin: 0 10px 5px;font-size:12px">View Payment Details</a>';
		}

		if (dataRep['searchType'] == 'studentSearch') {
			vTmpSTR += '<a class="nav-link" id="v-pills-exam-apply-tab" data-bs-toggle="pill" data-bs-target="#v-pills-exam-apply" type="button" role="tab" aria-controls="v-pills-exam-apply" aria-selected="false" style="width: 9rem;text-align:center;margin: 0 10px 5px;font-size:12px">View Exam Apllication History</a>';
		}

		if (dataRep['searchType'] == 'studentSearch') {
			if (dataRep['roleName'] == "Coordinator" || dataRep['roleName'] == "Examination Department" || dataRep['roleName'] == "Subject Clerk" || dataRep['roleName'] == "FGS Deputy Registrar" || dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "Program Assistant/Clerk" || dataRep['roleName'] == "Head of the Department" || dataRep['roleName'] == "Technical Coordinator") {
				vTmpSTR += '<a class="nav-link" id="v-pills-exam-tab" data-bs-toggle="pill" data-bs-target="#v-pills-exam" type="button" role="tab" aria-controls="v-pills-exam" aria-selected="false" style="width: 9rem;text-align:center;margin: 0 10px 5px;font-size:12px">View Exam Results</a>';
			}
		}

		if (dataRep['searchType'] == 'studentSearch') {
			vTmpSTR += '<a class="nav-link" id="v-pills-tdetails-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tdetails" type="button" role="tab" aria-controls="v-pills-tdetails" aria-selected="false" style="width: 9rem;text-align:center;margin: 0 10px 5px;font-size:12px">View Transfer Details</a>';
		}
		vTmpSTR += '</div></div>';


		vTmpSTR += '<div class="col-md-12"><div class="tab-content" id="v-pills-tabContent" style="background: #fff;margin: 0 10px; padding: 10px;height: 100%;">';

		// program Details
		vTmpSTR += '<div class="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">';

		vTmpSTR += "<div style ='clear:both;' id='transferDisplay01' style='display:block;'>";


		vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>Degree Code :</div><div class='col col-sm-10' id='stdProfile_degreeCode'>" + degreeCodeArr[studentTmpi] + "</div></div>";
		vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>University Code :</div><div class='col col-sm-10' id='stdProfile_uniCode'>" + universityCodeArr[studentTmpi] + "</div></div>";
		if (studentTmpi != -1) {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>Student Name :</div><div class='col col-sm-10' id='stdProfile_studentName'>" + studentNameArr[studentTmpi] + "</div></div>";

		} else if (applicantTmpi != -1) {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>Student Name :</div><div class='col col-sm-10' id='stdProfile_studentName'>" + profilestudentNameArr[applicantTmpi] + "</div></div>";

		}
		if (dataRep['searchType'] == 'applicantSearch') {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>Application No :</div><div class='col col-sm-10' id='stdProfile_studentapplication'>" + profileapplicationNoArr1[applicantTmpi] + "</div></div>";
		}

		if (dataRep['searchType'] == 'studentSearch') {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>Student No :</div><div class='col col-sm-10' id='stdProfile_studentNonew'>" + studentNoArr[studentTmpi] + "</div></div>";
		}

		if (studentTmpi != -1) {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>Programme :</div><div class='col col-sm-10' id='stdProfile_degreeTitle'>" + degreeTitleArr[studentTmpi] + "</div></div>";

		} else if (applicantTmpi != -1) {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>Programme :</div><div class='col col-sm-10' id='stdProfile_degreeTitle'>" + profiledegreeTitleArr[applicantTmpi] + "</div></div>";

		}

		if (dataRep['searchType'] == 'studentSearch') {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>Duration(Years) :</div><div class='col col-sm-10' id='stdProfile_duration'>" + duration + ' &nbsp;&nbsp;(Start Date:' + commDate + '&nbsp;&nbsp;End Date:' + EndDate + ')' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-2' style='font-weight: bolder;'>Library ID :</div><div class='col col-sm-10' id='stdProfile_libraryId'>" + librarycodeArr[studentTmpi] + "</div></div>";
		}
		vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;display:none' id='displayInacive'><div class='col col-sm-2' style='font-weight: bolder;'>Active Status :</div><div class='col col-sm-10'>Inactive</div></div>";

		vTmpSTR += "</div>";
		vTmpSTR += '</div>';
		// end program Details

		// Personal Details
		vTmpSTR += '<div class="tab-pane fade" id="v-pills-personal" role="tabpanel" aria-labelledby="v-pills-personal-tab">';

		vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-12' style='font-weight: bolder;'>";
		vTmpSTR += '<div class="card-header bg-transparent text-center">';

		if (studentTmpi != -1) {
			vTmpSTR += '<div id="studentImage">' + '<img src="studentPhotos/pic/' + studentNICArr[studentTmpi] + '.jpg" class="profile_img" alt="ds"/>' + '</div>';
			vTmpSTR += "<h3 id='studentName1'>" + '<label style="fontcolor:red;">' + studentNameArr[studentTmpi] + '</label>' + "</h3>";
		} else if (applicantTmpi != -1) {
			vTmpSTR += '<div id="studentImage">' + '<img src="studentPhotos/pic/' + profilestudentNICArr[applicantTmpi] + '.jpg" class="profile_img" alt="ds"/>' + '</div>';
			vTmpSTR += "<h3 id='studentName1'>" + '<label style="fontcolor:red;">' + profilestudentNameArr[applicantTmpi] + '</label>' + "</h3>";
		}


		vTmpSTR += "</div>";
		vTmpSTR += "</div></div>";
		if (dataRep['searchType'] == 'studentSearch') {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Student Number :</div><div class='col col-sm-9' id='studentNo1'>" + '<label style="fontcolor:red;">' + studentNoArr[studentTmpi] + '</label>' + "</div></div>";
		}

		if (studentTmpi != -1) {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Application Number :</div><div class='col col-sm-9' id='applicationNodisplay'>" + '<label style="fontcolor:red;">' + applicationNoArr[studentTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Student NIC :</div><div class='col col-sm-9' id='studentNIC1'>" + '<label style="fontcolor:red;">' + studentNICArr[studentTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Address :</div><div class='col col-sm-9' id='studentPermanentAddress'>" + '<label style="fontcolor:red;">' + studentPermanentAddressArr[studentTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Employment :</div><div class='col col-sm-9' id='studentEmployment'>" + '<label style="fontcolor:red;">' + studentEmploymentArr[studentTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Home No :</div><div class='col col-sm-9' id='studentContactLan1'>" + '<label style="fontcolor:red;">' + studentContactLanArr[studentTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Mobile No :</div><div class='col col-sm-9' id='studentContactMobile1'>" + '<label style="fontcolor:red;">' + studentContactMobileArr[studentTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>E-mail :</div><div class='col col-sm-9' id='studentContactEmail1'>" + '<label style="fontcolor:red;">' + studentContactEmailArr[studentTmpi] + '</label>' + "</div></div>";

		} else if (applicantTmpi != -1) {
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Application Number :</div><div class='col col-sm-9' id='applicationNodisplay'>" + '<label style="fontcolor:red;">' + profileapplicationNoArr1[applicantTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Student NIC :</div><div class='col col-sm-9' id='studentNIC1'>" + '<label style="fontcolor:red;">' + profilestudentNICArr[applicantTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Address :</div><div class='col col-sm-9' id='studentPermanentAddress'>" + '<label style="fontcolor:red;">' + profilestudentPermanentAddressArr[applicantTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Employment :</div><div class='col col-sm-9' id='studentEmployment'>" + '<label style="fontcolor:red;">' + profilestudentEmploymentArr[applicantTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Home No :</div><div class='col col-sm-9' id='studentContactLan1'>" + '<label style="fontcolor:red;">' + profilestudentContactLanArr[applicantTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>Mobile No :</div><div class='col col-sm-9' id='studentContactMobile1'>" + '<label style="fontcolor:red;">' + profilestudentContactMobileArr[applicantTmpi] + '</label>' + "</div></div>";
			vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-3' style='font-weight: bolder;'>E-mail :</div><div class='col col-sm-9' id='studentContactEmail1'>" + '<label style="fontcolor:red;">' + profilestudentContactEmailArr[applicantTmpi] + '</label>' + "</div></div>";

		}



		vTmpSTR += '</div>';
		// End Personal Details

		// Educational Qualifications
		vTmpSTR += '<div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">';


		vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-12' >";
		if (educationPinLength != 0 || eduDetailsLength != 0) {
			var count = 0;
			let start = false;
			for (var i = 0; i < educationPinLength; i++) {
				if (educationPinArr.indexOf(educationPinArr[i]) == educationPinArr.lastIndexOf(educationPinArr[i]) || (educationPinArr.indexOf(educationPinArr[i]) != educationPinArr.lastIndexOf(educationPinArr[i]) && educationPinArr.indexOf(educationPinArr[i]) == i)) {
					if (educationFieldNameArr[i] != undefined & educationFieldNameArr[i] != " " & educationValueArr[i] != undefined & educationValueArr[i] != " ") {
						if (educationFieldNameArr[i] != "Qualification" && educationFieldNameArr[i] != "Awarding Authority" && educationFieldNameArr[i] != "Awarding Year" &&
							educationFieldNameArr[i] != "Qualification Level" && educationFieldNameArr[i] != "Awarding Country" && educationFieldNameArr[i] != "Country") {

							if (educationFieldNameArr[i].toUpperCase() == ("University/Institute name").toUpperCase()) {
								if (start) {
									vTmpSTR += '</tbody>';
									vTmpSTR += '</table>';

									vTmpSTR += '</fieldset>';
									start = false;
								}
								start = true;
								count++;
								vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
								vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Educational Qualification ' + count + '</legend>';
								vTmpSTR += '<table class="table table-striped">';
								vTmpSTR += '<tbody>';
							}
							if (start) {
								vTmpSTR += "<tr><td>" + educationFieldNameArr[i] + " </td><td>: " + educationValueArr[i] + "</td></tr>";
							}
							if (educationFieldNameArr[i + 1]) {
								if (educationFieldNameArr[i + 1].toUpperCase() == ("University/Institute name").toUpperCase()) {
									vTmpSTR += '</tbody>';
									vTmpSTR += '</table>';
									vTmpSTR += '</fieldset>';
									start = false;
								}
							}

						}
					}
				}
			}
			if (start) {
				vTmpSTR += '</tbody>';
				vTmpSTR += '</table>';
				vTmpSTR += '</fieldset>';
				start = false;
			}
			for (var i = 0; i < eduDetailsLength; i++) {
				count++;
				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
				vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Educational Qualification ' + count + '</legend>';
				vTmpSTR += '<table class="table table-striped">';
				vTmpSTR += '<tbody>';
				if (newEduUniversity[i]) vTmpSTR += "<tr><td>University</td><td>: " + newEduUniversity[i] + "</td></tr>";
				if (newEduAwardingCountry[i]) vTmpSTR += "<tr><td>Awarding Country</td><td>: " + newEduAwardingCountry[i] + "</td></tr>";
				if (newEduQualificationType[i]) vTmpSTR += "<tr><td>Qualification Type</td><td>: " + newEduQualificationType[i] + "</td></tr>";
				if (newEduDesignator[i]) vTmpSTR += "<tr><td>Designator</td><td>: " + newEduDesignator[i] + "</td></tr>";
				if (newEduQualifier[i]) vTmpSTR += "<tr><td>Qualifier</td><td>: " + newEduQualifier[i] + "</td></tr>";
				if (newEduGraduateYear[i]) vTmpSTR += "<tr><td>Graduate Year</td><td>: " + newEduGraduateYear[i] + "</td></tr>";
				if (newEduGraduateMonth[i]) vTmpSTR += "<tr><td>Graduate Month</td><td>: " + newEduGraduateMonth[i] + "</td></tr>";
				if (newEduDuration[i]) vTmpSTR += "<tr><td>Duration</td><td>: " + newEduDuration[i] + "</td></tr>";
				if (newEduEffectiveDate[i]) vTmpSTR += "<tr><td>Effective Date</td><td>: " + newEduEffectiveDate[i] + "</td></tr>";
				if (newEduGpa[i]) vTmpSTR += "<tr><td>GPA</td><td>: " + newEduGpa[i] + "</td></tr>";
				if (newEduClass[i]) vTmpSTR += "<tr><td>Class</td><td>: " + newEduClass[i] + "</td></tr>";
				if (newEduDegreeCertificate[i]) {
					vTmpSTR += "<tr><td>Degree Certificate</td><td>: <a href='" + newEduDegreeCertificate[i] + "' target='_blank'>View Document</a></td></tr>";
				}

				if (newEduDegreeDetailCertificate[i]) {
					vTmpSTR += "<tr><td>Degree Detail Certificate</td><td>: <a href='" + newEduDegreeDetailCertificate[i] + "' target='_blank'>View Document</a></td></tr>";
				}
				if (newEduResultStatus[i]) vTmpSTR += "<tr><td>Result Status</td><td>: " + newEduResultStatus[i] + "</td></tr>";
				if (newEduSub1[i]) vTmpSTR += "<tr><td>Subject 1</td><td>: " + newEduSub1[i] + "</td></tr>";
				if (newEduSub2[i]) vTmpSTR += "<tr><td>Subject 2</td><td>: " + newEduSub2[i] + "</td></tr>";
				if (newEduSub3[i]) vTmpSTR += "<tr><td>Subject 3</td><td>: " + newEduSub3[i] + "</td></tr>";
				if (newEduSub4[i]) vTmpSTR += "<tr><td>Subject 4</td><td>: " + newEduSub4[i] + "</td></tr>";
				if (newEduResearchCredit[i]) vTmpSTR += "<tr><td>Research Credit</td><td>: " + newEduResearchCredit[i] + "</td></tr>";
				if (newEduResearchDuration[i]) vTmpSTR += "<tr><td>Research Duration</td><td>: " + newEduResearchDuration[i] + "</td></tr>";
				if (newEduResearchCompHas[i]) vTmpSTR += "<tr><td>Research Component Has</td><td>: " + newEduResearchCompHas[i] + "</td></tr>";


				vTmpSTR += '</tbody>';
				vTmpSTR += '</table>';
				vTmpSTR += '</fieldset>';
			}

			if (count == 0) {
				vTmpSTR += '<p>Educational Qualification details not availabls</p>';
			}
		} else {
			vTmpSTR += '<p style="text-align:center">Educational Qualification details not available</p>';
		}

		vTmpSTR += '</div></div>';
		vTmpSTR += '</div>';
		//End Educational Qualifications

		//Professional Qualifications
		vTmpSTR += '<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">';
		vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-12' >";

		if (educationPinLength != 0 || newProfDetailsLength != 0) {
			var count = 0;
			let start = false;
			for (var i = 0; i < educationPinLength; i++) {
				//if(dataRep["applicationNo"] == applicationNoArr[i]){
				if (educationPinArr.indexOf(educationPinArr[i]) == educationPinArr.lastIndexOf(educationPinArr[i]) || (educationPinArr.indexOf(educationPinArr[i]) != educationPinArr.lastIndexOf(educationPinArr[i]) && educationPinArr.indexOf(educationPinArr[i]) == i)) {
					if (educationFieldNameArr[i] != undefined & educationFieldNameArr[i] != " " & educationValueArr[i] != undefined & educationValueArr[i] != " ") {
						if (educationFieldNameArr[i] == "Qualification" ||
							educationFieldNameArr[i] == "Awarding Authority" ||
							educationFieldNameArr[i] == "Qualification Level" || educationFieldNameArr[i] == "Awarding Year"
							|| educationFieldNameArr[i] == "Country" ||
							educationFieldNameArr[i] == "Qualification Level" ||
							educationFieldNameArr[i] == "Awarding Country") {
							if (educationFieldNameArr[i].toUpperCase() == ("Qualification").toUpperCase()) {
								if (educationFieldNameArr[i + 1] != "Awarding Authority" &&
									educationFieldNameArr[i + 1] != "Qualification Level" &&
									educationFieldNameArr[i + 1] != "Awarding Year" && educationFieldNameArr[i + 1] != "Country" &&
									educationFieldNameArr[i + 1] != "Qualification Level" && educationFieldNameArr[i + 1] != "Awarding Country") {

									continue;
								}
								if (start) {

									vTmpSTR += '</fieldset>';
									start = false;
								}
								start = true;
								count++;

								vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
								vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Professional Qualification ' + count + '</legend>';
								vTmpSTR += '<table class="table table-striped">';
								vTmpSTR += '<tbody>';
							}
							if (start) {
								vTmpSTR += "<tr><td>" + educationFieldNameArr[i] + " </td><td>: " + educationValueArr[i] + "</td></tr>";
							}
							if (educationFieldNameArr[i + 1]) {
								if (educationFieldNameArr[i + 1].toUpperCase() == ("Qualification").toUpperCase()) {
									vTmpSTR += '</tbody>';
									vTmpSTR += '</table>';
									vTmpSTR += '</fieldset>';
									start = false;
								}
							}
						}
					}
				}
			}
			if (start) {
				vTmpSTR += '</fieldset>';
				start = false;
			}

			for (var i = 0; i < newProfDetailsLength; i++) {
				count++;
				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
				vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Professional Qualification ' + count + '</legend>';
				vTmpSTR += '<table class="table table-striped">';
				vTmpSTR += '<tbody>';
				// if (newProfApplicationNo[i]) vTmpSTR += "<tr><td>Application No</td><td>: " + newProfApplicationNo[i] + "</td></tr>";
				// if (newProfQulificaitionId[i]) vTmpSTR += "<tr><td>Qualification ID</td><td>: " + newProfQulificaitionId[i] + "</td></tr>";
				if (newProfQualification[i]) vTmpSTR += "<tr><td>Qualification</td><td>: " + newProfQualification[i] + "</td></tr>";
				if (newProfQualificationLevel[i]) vTmpSTR += "<tr><td>Qualification Level</td><td>: " + newProfQualificationLevel[i] + "</td></tr>";
				if (newProfAwardingAuthority[i]) vTmpSTR += "<tr><td>Awarding Authority</td><td>: " + newProfAwardingAuthority[i] + "</td></tr>";
				if (newProfAwardingYear[i]) vTmpSTR += "<tr><td>Awarding Year</td><td>: " + newProfAwardingYear[i] + "</td></tr>";
				if (newProfAwardingCountry[i]) vTmpSTR += "<tr><td>Awarding Country</td><td>: " + newProfAwardingCountry[i] + "</td></tr>";
				if (newProfEffectiveDate[i]) vTmpSTR += "<tr><td>Effective Date</td><td>: " + newProfEffectiveDate[i] + "</td></tr>";

				if (newProfCertificate[i]) {
					vTmpSTR += "<tr><td>Certificate</td><td>: <a href='" + newProfCertificate[i] + "' target='_blank'>View Document</a></td></tr>";
				}

				vTmpSTR += '</tbody>';
				vTmpSTR += '</table>';
				vTmpSTR += '</fieldset>';
			}

			if (count == 0) {
				vTmpSTR += '<p>Professional Qualification details not available</p>';
			}

		} else {
			vTmpSTR += '<p>Professional Qualification details not available</p>';
		}

		vTmpSTR += '</tbody>';
		vTmpSTR += '</table>';
		vTmpSTR += '</fieldset>';
		vTmpSTR += '</div></div>';
		vTmpSTR += '</div>';
		//EndProfessional Qualifications

		// Work Experince
		vTmpSTR += '<div class="tab-pane fade" id="v-pills-wrkExperience" role="tabpanel" aria-labelledby="v-pills-wrkExperience-tab">';
		vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-12' >";

		if (workPinLength != 0 || newWorkDetailsLength != 0) {
			var count = 0;
			let start = false;
			for (var i = 0; i < workPinLength; i++) {
				if (workPinArr.indexOf(workPinArr[i]) == workPinArr.lastIndexOf(workPinArr[i]) || (workPinArr.indexOf(workPinArr[i]) != workPinArr.lastIndexOf(workPinArr[i]) && workPinArr.indexOf(workPinArr[i]) == i)) {
					if (workFieldNameArr[i] != undefined & workFieldNameArr[i] != " " & workValueArr[i] != undefined & workValueArr[i] != " ") {
						if (workFieldNameArr[i] == "Company/Institute/Organization" || workFieldNameArr[i] == "Designation" || workFieldNameArr[i] == "Applicant Designation"
							|| workFieldNameArr[i] == "From" || workFieldNameArr[i] == "To" || workFieldNameArr[i] == "Country" || workFieldNameArr[i] == "Applicant Country") {
							if (workFieldNameArr[i].toUpperCase() == ("Company/Institute/Organization").toUpperCase() || workFieldNameArr[i].toUpperCase() == ("Company / Institute / Organization").toUpperCase()) {
								if (start) {
									vTmpSTR += '</fieldset>';
									start = false;
								}
								count++;
								start = true;
								vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
								vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Work Experience ' + count + '</legend>';
								vTmpSTR += '<table class="table table-striped">';
								vTmpSTR += '<tbody>';
							} if (start) {
								if (workFieldNameArr[i] == "Applicant Country") {
									vTmpSTR += "<tr><td>Awarding Country </td><td>: " + workValueArr[i] + "</td></tr>";

								} else {
									vTmpSTR += "<tr><td>" + workFieldNameArr[i] + " </td><td>: " + workValueArr[i] + "</td></tr>";
								}
							}
							if (workFieldNameArr[i + 1]) {
								if (workFieldNameArr[i + 1] == "Company/Institute/Organization" || workFieldNameArr[i + 1].toUpperCase() == ("Company / Institute / Organization").toUpperCase()) {
									vTmpSTR += '</tbody>';
									vTmpSTR += '</table>';
									vTmpSTR += '</fieldset>';
									start = false;
								}
							}
						}
					}
				}
			}

			if (start) {
				vTmpSTR += '</fieldset>';
				start = false;
			}


			for (var i = 0; i < newWorkDetailsLength; i++) {
				count++;
				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
				vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Work Experience ' + count + '</legend>';
				vTmpSTR += '<table class="table table-striped">';
				vTmpSTR += '<tbody>';
				// if (newWorkApplicationNo[i]) vTmpSTR += "<tr><td>Application No</td><td>: " + newWorkApplicationNo[i] + "</td></tr>";
				// if (newWorkQulificaitionId[i]) vTmpSTR += "<tr><td>Qualification ID</td><td>: " + newWorkQulificaitionId[i] + "</td></tr>";
				if (newWorkOrganization[i]) vTmpSTR += "<tr><td>Organization</td><td>: " + newWorkOrganization[i] + "</td></tr>";
				if (newWorkDesignation[i]) vTmpSTR += "<tr><td>Designation</td><td>: " + newWorkDesignation[i] + "</td></tr>";
				if (newWorkAwardingCountry[i]) vTmpSTR += "<tr><td>Awarding Country</td><td>: " + newWorkAwardingCountry[i] + "</td></tr>";
				if (newWorkAddress[i]) vTmpSTR += "<tr><td>Address</td><td>: " + newWorkAddress[i] + "</td></tr>";
				if (newWorkStartDate[i]) vTmpSTR += "<tr><td>Start Date</td><td>: " + newWorkStartDate[i] + "</td></tr>";
				if (newWorkEndDate[i]) vTmpSTR += "<tr><td>End Date</td><td>: " + newWorkEndDate[i] + "</td></tr>";

				if (newWorkCertificate[i]) {
					vTmpSTR += "<tr><td>Certificate</td><td>: <a href='" + newWorkCertificate[i] + "' target='_blank'>View Document</a></td></tr>";
				}

				if (newWorkVerified[i]) vTmpSTR += "<tr><td>Verified</td><td>: " + newWorkVerified[i] + "</td></tr>";


				vTmpSTR += '</tbody>';
				vTmpSTR += '</table>';
				vTmpSTR += '</fieldset>';
			}


			if (count == 0) {
				vTmpSTR += '<p>Work Experience details not available</p>';
			}

		} else {
			vTmpSTR += '<p>Work Experience details not available</p>';
		}
		vTmpSTR += '</tbody>';
		vTmpSTR += '</table>';
		vTmpSTR += '</fieldset>';

		vTmpSTR += '</div></div>';
		vTmpSTR += '</div>';
		//End Work Experince


		// Referies
		vTmpSTR += '<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">';
		vTmpSTR += "<div class='row' style='margin-bottom: 0.8rem;'><div class='col col-sm-12' >";

		if (workPinLength != 0 || newRefDetailsLength != 0) {
			var count = 0;
			let start = false;
			for (var i = 0; i < workPinLength; i++) {
				if (workPinArr.indexOf(workPinArr[i]) == workPinArr.lastIndexOf(workPinArr[i]) || (workPinArr.indexOf(workPinArr[i]) != workPinArr.lastIndexOf(workPinArr[i]) && workPinArr.indexOf(workPinArr[i]) == i)) {
					if (workFieldNameArr[i] != undefined & workFieldNameArr[i] != " " & workValueArr[i] != undefined & workValueArr[i] != " ") {
						if (workFieldNameArr[i] == "Name" || workFieldNameArr[i] == "Designation Of Refree" || workFieldNameArr[i] == "Address" || workFieldNameArr[i] == "Office No" || workFieldNameArr[i] == "Office" || workFieldNameArr[i] == "Mobile" || workFieldNameArr[i] == "Mobile No" || workFieldNameArr[i] == "Home No" || workFieldNameArr[i] == "Home" || workFieldNameArr[i] == "E-Mail Address"
							|| workFieldNameArr[i] == "Name with Initials" || workFieldNameArr[i] == "Country of referee" || workFieldNameArr[i] == "Company / Institute / Organization" || workFieldNameArr[i] == "Ref.Designation" || workFieldNameArr[i] == "Contact Address" || workFieldNameArr[i] == "Ref.Country" || workFieldNameArr[i] == "Email Address") {

							if (workFieldNameArr[i].toUpperCase() == ("Name").toUpperCase() || workFieldNameArr[i].toUpperCase() == ("Name with Initials").toUpperCase()) {
								if (workFieldNameArr[i - 1] != "Name" || workFieldNameArr[i - 1] != "Name with Initials") {
									if (start) {
										vTmpSTR += '</fieldset>';
										start = false;
									}
									count++;
									start = true;
									vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
									vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Referees ' + count + '</legend>';
									vTmpSTR += '<table class="table table-striped">';
									vTmpSTR += '<tbody>';
								}
							} if (start) {
								vTmpSTR += "<tr><td>" + workFieldNameArr[i] + " </td><td>: " + workValueArr[i] + "</td></tr>";

							}
							if (workFieldNameArr[i + 1]) {
								if (workFieldNameArr[i + 1] == "Name" || workFieldNameArr[i + 1] == "Name with Initials") {
									vTmpSTR += '</tbody>';
									vTmpSTR += '</table>';
									vTmpSTR += '</fieldset>';
									start = false;
								}
							}
						}
					}
				}
			}

			if (start) {
				vTmpSTR += '</tbody>';
				vTmpSTR += '</table>';
				vTmpSTR += '</fieldset>';
				start = false;
			}

			for (var i = 0; i < newRefDetailsLength; i++) {
				if (newRefName[i]) {
					count++;
					vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
					vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Referees ' + count + '</legend>';
					vTmpSTR += '<table class="table table-striped">';
					vTmpSTR += '<tbody>';
					// if (newRefApplicationNo[i]) vTmpSTR += "<tr><td>Application No</td><td>: " + newRefApplicationNo[i] + "</td></tr>";
					// if (newRefRefId[i]) vTmpSTR += "<tr><td>Reference ID</td><td>: " + newRefRefId[i] + "</td></tr>";
					if (newRefName[i]) vTmpSTR += "<tr><td>Name</td><td>: " + newRefName[i] + "</td></tr>";
					if (newRefOrganization[i]) vTmpSTR += "<tr><td>Organization</td><td>: " + newRefOrganization[i] + "</td></tr>";
					if (newRefDesignation[i]) vTmpSTR += "<tr><td>Designation</td><td>: " + newRefDesignation[i] + "</td></tr>";
					if (newRefAddress[i]) vTmpSTR += "<tr><td>Address</td><td>: " + newRefAddress[i] + "</td></tr>";
					if (newRefCountry[i]) vTmpSTR += "<tr><td>Country</td><td>: " + newRefCountry[i] + "</td></tr>";
					if (newRefEmail[i]) vTmpSTR += "<tr><td>Email</td><td>: " + newRefEmail[i] + "</td></tr>";
					if (newRefMobile[i]) vTmpSTR += "<tr><td>Mobile</td><td>: " + newRefMobile[i] + "</td></tr>";
					if (newRefHome[i]) vTmpSTR += "<tr><td>Home</td><td>: " + newRefHome[i] + "</td></tr>";
					if (newRefOffice[i]) vTmpSTR += "<tr><td>Office</td><td>: " + newRefOffice[i] + "</td></tr>";


					vTmpSTR += '</tbody>';
					vTmpSTR += '</table>';
					vTmpSTR += '</fieldset>';
				}
			}

			if (count == 0) {
				vTmpSTR += '<p>Referees not available</p>';
			}

		} else {
			vTmpSTR += '<p>Referees not available</p>';
		}

		vTmpSTR += '</tbody>';
		vTmpSTR += '</table>';
		vTmpSTR += '</fieldset>';

		vTmpSTR += '</div></div>';
		vTmpSTR += '</div>';




		if (dataRep['searchType'] == 'studentSearch') {
			/**************************Exam Results Start***************************************/
			vTmpSTR += '<div class="tab-pane fade" id="v-pills-exam" role="tabpanel" aria-labelledby="v-pills-exam-tab">';
			vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem;overflow:auto">';
			vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Exam Results</legend>';
			var sem0Count = 0;
			var sem1Count = 0;
			var sem2Count = 0;
			var sem3Count = 0;
			var sem4Count = 0;

			for (var j = 0; j < MarksLength; j++) {
				switch (subjectSemesterArr[j]) {
					case '0': sem0Count++; break;
					case '1': sem1Count++; break;
					case '2': sem2Count++; break;
					case '3': sem3Count++; break;
					case '4': sem4Count++; break;
				}
			}

			var gradeArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];
			vTmpSTR += '<table  class="table table-bordered">';
			vTmpSTR += "<tr style=''>";
			vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
			vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
			vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
			if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Examiner 1</th>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Examiner 2</th>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Avarage</th>";
			}
			vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
			vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Credit</th>";
			vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";
			vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Release Date</th>";
			vTmpSTR += "</tr>";

			for (var i = 0; i < MarksLength; i++) {

				if (marksArr[i] == '-') {
					marksArr[i] = '(ab)';
				}

				vTmpSTR += "<tr style='border: 1px solid black;'>";

				if (subjectSemesterArr[i] == '0' && sem0Count != 0) {
					vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>End</div></td>";
					sem0Count = 0;
				} else if (subjectSemesterArr[i] == '1' && sem1Count != 0) {

					vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
					sem1Count = 0;
				} else if (subjectSemesterArr[i] == '2' && sem2Count != 0) {

					vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
					sem2Count = 0;
				} else if (subjectSemesterArr[i] == '3' && sem3Count != 0) {

					vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
					sem3Count = 0;
				} else if (subjectSemesterArr[i] == '4' && sem4Count != 0) {

					vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
					sem4Count = 0;
				}

				vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + subjectNameArr[i] + "</div></td>";
				vTmpSTR += "<td style='border: 1px solid black;padding: 5px 160px 5px 5px;text-align:center'><div class='investView_l'  style='text-align:left; width:auto;'>" + subjectTitleArr[i] + "</div></td>";
				if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
					vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + examiner1Arr[i] + "</div></td>";
					vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + examiner2Arr[i] + "</div></td>";
					vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + avgMarksArr[i] + "</div></td>";
				}
				if (resultFStatus[i] == 0 || (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator")) {
					vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + marksArr[i] + "</div></td>";
					vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + subjectCreditsArr[i] + "</div></td>";
				}

				if (resultFStatus[i] == 0) {

					var tmpTestGrade = "";
					for (var j = 0; j < cr_Length; j++) {
						if (gradeArray.indexOf(cr_resitArr[j]) < gradeArray.indexOf(marksArr[i])) {
							tmpTestGrade = 'Fail';
							break;
						}
						else if (gradeArray.indexOf(cr_resitArr[j]) >= gradeArray.indexOf(marksArr[i])) {
							tmpTestGrade = 'Pass';
							break;
						}
					}


					if (tmpTestGrade == "Fail") {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;color: red'>" + tmpTestGrade + "</div></td>";
					}
					else {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto'>" + tmpTestGrade + "</div></td>";

					}
					if (exam_releasedDate[i] != null) {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + exam_releasedDate[i] + "</div></td>";

					} else {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>-</div></td>";
					}
				} else {
					let statusshow = "";
					if (resultFStatus[i] == 1) {
						statusshow = "Not Released";
					} else if (resultFStatus[i] == 'H') {
						statusshow = "Hold";
					} else if (resultFStatus[i] == 'NP' || resultFStatus[i] == 'BP') {
						statusshow = "Not Payed";
					}
					if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Administrator') {
						let op = "<option " + ((resultFStatus[i] == 1 || resultFStatus[i] == '') ? "selected" : "") + " value='1'>Not Released</option>";
						op += "<option " + ((resultFStatus[i] == 0) ? "selected" : "") + " value='0'>Released</option>";
						op += "<option " + ((resultFStatus[i] == 'H') ? "selected" : "") + " value='H'>Hold</option>";
						let BGcolor = statusBackGroundColor(resultFStatus[i]);
						let resReleasedDisabled = "disabled";
						if (dataRep['roleName'] == 'Administrator') {
							if (resultFStatus[i] == 'H' || resultFStatus[i] == 0) {
								resReleasedDisabled = "disabled";
							} else {
								resReleasedDisabled = "";
							}
						} else {
							resReleasedDisabled = "";
						}

						let datarelesedresult = {
							studentId: studentNoArr[studentTmpi],
							attempt: "F",
							re_repeat_attempt_time: 1,
							degreeCode: degreeCodeArr[studentTmpi],
							achedamicYear: achedamicYearArr[studentTmpi],
							subjectName: subjectNameArr[i]
						};

						vTmpSTR += '<td><select class="form-control form-control-sm" style="background-color:' + BGcolor + ';color:#FFF !important;min-width:100px" id="resultStatus' + i + '" ' + resReleasedDisabled + ' data-student=\'' + JSON.stringify(datarelesedresult) + '\' onchange="updateResultStatusProfile(this);">';
						vTmpSTR += op;
						vTmpSTR += '</select></td>';
						vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'></div></td>";

					} else {
						vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'></div></td>";
						vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'></div></td>";
						vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + statusshow + "</div></td>";
						vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'></div></td>";

					}
				}



				vTmpSTR += "</tr>";
			}

			// sem0Count = 0;
			// sem1Count = 0;
			// sem2Count = 0;
			// sem3Count = 0;
			// sem4Count = 0;

			// for (var j = 0; j < MarksLength; j++) {
			// 	switch (subjectSemesterArr[j]) {
			// 		case '0': sem0Count++; break;
			// 		case '1': sem1Count++; break;
			// 		case '2': sem2Count++; break;
			// 		case '3': sem3Count++; break;
			// 		case '4': sem4Count++; break;
			// 	}
			// }

			// for (var i = 0; i < MarksLength; i++) {
			// 	if (subjectSemesterArr[i] == '0' && sem0Count != 0) {
			// 		sem0Count = 0;
			// 	} else if (subjectSemesterArr[i] == '1' && sem1Count != 0) {
			// 		for (var k = 0; k < final_Length; k++) {
			// 			if (final_SemArr[k] == '0') {
			// 				vTmpSTR += "<tr style=''>";
			// 				vTmpSTR += "<td style=''></td>";
			// 				vTmpSTR += "<td style='padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:right; width:auto' >GPA : </div></td>";
			// 				vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_GPAArr[k] + "</div></td>";
			// 				vTmpSTR += "<td style=' padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_ResultArr[k] + "</div></td>";
			// 				vTmpSTR += "<td></td>";

			// 				vTmpSTR += "</tr>";
			// 			}
			// 		}
			// 		sem1Count = 0;
			// 	} else if (subjectSemesterArr[i] == '2' && sem2Count != 0) {
			// 		for (var k = 0; k < final_Length; k++) {
			// 			if (final_SemArr[k] == '1') {

			// 				vTmpSTR += "<tr style=''>";
			// 				vTmpSTR += "<td style=' border-right:1px solid black;'></td>";
			// 				vTmpSTR += "<td style=' padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:right; width:auto' >GPA : </div></td>";
			// 				vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_GPAArr[k] + "</div></td>";
			// 				vTmpSTR += "<td style=' padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_ResultArr[k] + "</div></td>";
			// 				vTmpSTR += "<td></td>";

			// 				vTmpSTR += "</tr>";
			// 			}
			// 		}

			// 		sem2Count = 0;
			// 	} else if (subjectSemesterArr[i] == '3' && sem3Count != 0) {
			// 		for (var k = 0; k < final_Length; k++) {
			// 			if (final_SemArr[k] == '2') {
			// 				vTmpSTR += "<tr style=''>";
			// 				vTmpSTR += "<td style=''></td>";
			// 				vTmpSTR += "<td style=' padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:right; width:auto' >GPA : </div></td>";
			// 				vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_GPAArr[k] + "</div></td>";
			// 				vTmpSTR += "<td style=' padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_ResultArr[k] + "</div></td>";
			// 				vTmpSTR += "<td></td>";

			// 				vTmpSTR += "</tr>";
			// 			}
			// 		}
			// 		sem3Count = 0;
			// 	} else if (subjectSemesterArr[i] == '4' && sem4Count != 0) {
			// 		for (var k = 0; k < final_Length; k++) {
			// 			if (final_SemArr[k] == '3') {
			// 				vTmpSTR += "<tr style=''>";
			// 				vTmpSTR += "<td style='></td>";
			// 				vTmpSTR += "<td style=' padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:right; width:auto' >GPA : </div></td>";
			// 				vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_GPAArr[k] + "</div></td>";
			// 				vTmpSTR += "<td style=' padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_ResultArr[k] + "</div></td>";
			// 				vTmpSTR += "<td></td>";

			// 				vTmpSTR += "</tr>";
			// 			}
			// 		}
			// 		sem4Count = 0;
			// 	}
			// }



			// for (var k = 0; k < final_Length; k++) {
			// 	if (final_SemArr[k] == subjectSemesterArr[MarksLength - 1]) {
			// 		vTmpSTR += "<tr style=''>";
			// 		vTmpSTR += "<td style=''></td>";
			// 		vTmpSTR += "<td style=' padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:right; width:auto' >GPA : </div></td>";
			// 		vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_GPAArr[k] + "</div></td>";
			// 		vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_ResultArr[k] + "</div></td>";
			// 		vTmpSTR += "<td></td>";

			// 		vTmpSTR += "</tr>";
			// 	}
			// }

			vTmpSTR += "</table><br>";

			// for (var m = 0; m < final_Length; m++) {
			// 	if (final_SemArr[m] == '-1') {
			// 		vTmpSTR += "<table style='margin-top:10px; margin-bottom:10px'>";
			// 		vTmpSTR += "<tr style=''>";
			// 		vTmpSTR += "<td style=' padding: 5px 80px;'><div class='investView_l'  style='text-align:center; width:auto' >Final Classification</div></td>";
			// 		vTmpSTR += "<td style='padding: 5px 80px 5px 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto' >GPA : </div></td>";
			// 		vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_GPAArr[m] + "</div></td>";
			// 		vTmpSTR += "<td style='padding: 5px 80px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + final_ResultArr[m] + "</div></td>";
			// 		vTmpSTR += "<td></td>";
			// 		vTmpSTR += "</tr>";
			// 		vTmpSTR += "</table>";
			// 	}
			// }



			vTmpSTR += '</fieldset>';













			//Repeat Results 					

			if (GradeArrLength != 0) {
				vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;'>";
				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem;overflow:auto">';
				vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Repeat Exam Results</legend>';


				var Repsem0Count = 0;
				var Repsem1Count = 0;
				var Repsem2Count = 0;
				var Repsem3Count = 0;
				var Repsem4Count = 0;

				for (var j = 0; j < GradeArrLength; j++) {
					switch (Rep_subjectSemesterArr[j]) {
						case '0': Repsem0Count++; break;
						case '1': Repsem1Count++; break;
						case '2': Repsem2Count++; break;
						case '3': Repsem3Count++; break;
						case '4': Repsem4Count++; break;
					}
				}
				var gradeRepArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];

				vTmpSTR += '<table class="table table-bordered">';

				vTmpSTR += "<tr style=''>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
				if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
					vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Examiner 1</th>";
					vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Examiner 2</th>";
					vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Avarage</th>";
				}
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Release Date</th>";
				vTmpSTR += "</tr>";

				for (var i = 0; i < GradeArrLength; i++) {

					if (rep_GradeArr[i] == '-') {
						rep_GradeArr[i] = '(ab)';
					}



					vTmpSTR += "<tr style=''>";

					if (Rep_subjectSemesterArr[i] == '0' && Repsem0Count != 0) {
						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
						Repsem0Count = 0;
					} else if (Rep_subjectSemesterArr[i] == '1' && Repsem1Count != 0) {
						for (var k = 0; k < rep_final_Length; k++) {
							// if(rep_final_SemArr[k] == '0'){
							// str += "<tr style='border-bottom:3px double black'>";
							// str += "<td style='border-left:1px solid black; border-right:1px solid black;'></td>";
							// str += "<td style='border-top:1px solid black; padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:center; width:auto' >GPA : </div></td>";	
							// str += "<td style='border-right:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_GPAArr[k]+"</div></td>";	
							// str += "<td style='border: 1px solid black; padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_ResultArr[k]+"</div></td>";	
							// str += "</tr>";
							// }
						}

						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
						Repsem1Count = 0;

					} else if (Rep_subjectSemesterArr[i] == '2' && Repsem2Count != 0) {
						for (var k = 0; k < rep_final_Length; k++) {
							// if(rep_final_SemArr[k] == '1'){

							// str += "<tr style='border-bottom:3px double black'>";
							// str += "<td style='border-left:1px solid black; border-right:1px solid black;'></td>";
							// str += "<td style='border-top:1px solid black; padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:center; width:auto' >GPA : </div></td>";	
							// str += "<td style='border-right:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_GPAArr[k]+"</div></td>";	
							// str += "<td style='border: 1px solid black; padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_ResultArr[k]+"</div></td>";	
							// str += "</tr>";
							// }
						}

						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
						Repsem2Count = 0;
					} else if (Rep_subjectSemesterArr[i] == '3' && Repsem3Count != 0) {
						for (var k = 0; k < rep_final_Length; k++) {
							// if(rep_final_SemArr[k] == '2'){
							// str += "<tr style='border-bottom:3px double black'>";
							// str += "<td style='border-left:1px solid black; border-right:1px solid black;'></td>";
							// str += "<td style='border-top:1px solid black; padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:center; width:auto' >GPA : </div></td>";	
							// str += "<td style='border-right:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_GPAArr[k]+"</div></td>";	
							// str += "<td style='border: 1px solid black; padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_ResultArr[k]+"</div></td>";	
							// str += "</tr>";
							// }
						}

						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
						Repsem3Count = 0;
					} else if (Rep_subjectSemesterArr[i] == '4' && Repsem4Count != 0) {
						for (var k = 0; k < rep_final_Length; k++) {
							// if(rep_final_SemArr[k] == '3'){
							// str += "<tr style='border-bottom:3px double black'>";
							// str += "<td style='border-left:1px solid black; border-right:1px solid black;'></td>";
							// str += "<td style='border-top:1px solid black; padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:center; width:auto' >GPA : </div></td>";	
							// str += "<td style='border-right:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_GPAArr[k]+"</div></td>";	
							// str += "<td style='border: 1px solid black; padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_ResultArr[k]+"</div></td>";	
							// str += "</tr>";
							// }
						}

						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
						Repsem4Count = 0;
					}


					vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + rep_subjectNameArr[i] + "</div></td>";
					vTmpSTR += "<td style='padding: 5px 160px 5px 5px;text-align:left'><div class='investView_l'  style='text-align:left; width:auto;'>" + Rep_subjectTitleArr[i] + "</div></td>";
					if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + rep_examiner1Arr[i] + "</div></td>";
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + rep_examiner2Arr[i] + "</div></td>";
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + rep_avgMarksArr[i] + "</div></td>";
					}

					if (rep_StatusArr[i] == 0) {
						vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + rep_GradeArr[i] + "</div></td>";

					} else {
						if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
							vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + rep_GradeArr[i] + "</div></td>";
						}

					}

					if (rep_StatusArr[i] == 0) {


						var tmpTestRepGrade = "";
						//var tmpGradeHolder = new Array();
						for (var j = 0; j < rep_cr_Length; j++) {
							if (gradeRepArray.indexOf(rep_cr_resitArr[j]) < gradeRepArray.indexOf(rep_GradeArr[i])) {
								tmpTestRepGrade = 'Fail';
								break;
							}
							else if (gradeRepArray.indexOf(rep_cr_resitArr[j]) >= gradeRepArray.indexOf(rep_GradeArr[i])) {    //	else if(gradeArray.indexOf(cr_resitArr[j]) >= gradeArray.indexOf(marksArr[i])){
								//tmpTestGrade = cr_finalResultArr[j];
								tmpTestRepGrade = 'Pass';
								//tmpGradeHolder.push(j);
								break;
							}

						}

						if (tmpTestRepGrade == "Fail") {
							vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;color: red'>" + tmpTestRepGrade + "</div></td>";
						}
						else {
							vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto'>" + tmpTestRepGrade + "</div></td>";
						}
					} else {
						let statusshow = "";
						if (rep_StatusArr[i] == 1) {
							statusshow = "Not Released";
						} else if (rep_StatusArr[i] == 'H') {
							statusshow = "Hold";
						} else if (rep_StatusArr[i] == 'NP' || rep_StatusArr[i] == 'BP') {
							statusshow = "Not Payed";
						} else if (rep_StatusArr[i] == 0) {
							statusshow = "Released";

						}

						if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Administrator') {
							let op = "<option " + ((rep_StatusArr[i] == 1 || rep_StatusArr[i] == '') ? "selected" : "") + " value='1'>Not Released</option>";
							op += "<option " + ((rep_StatusArr[i] == 0) ? "selected" : "") + " value='0'>Released</option>";
							op += "<option " + ((rep_StatusArr[i] == 'H') ? "selected" : "") + " value='H'>Hold</option>";
							let BGcolor = statusBackGroundColor(rep_StatusArr[i]);
							let resReleasedDisabled = "disabled";
							if (dataRep['roleName'] == 'Administrator') {
								if (rep_StatusArr[i] == 'H' || rep_StatusArr[i] == 0) {
									resReleasedDisabled = "disabled";
								} else {
									resReleasedDisabled = "";
								}
							} else {
								resReleasedDisabled = "";
							}

							// vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'></div></td>";
							let datarelesedresult = {
								studentId: studentNoArr[studentTmpi],
								attempt: "R",
								re_repeat_attempt_time: 1,
								degreeCode: degreeCodeArr[studentTmpi],
								achedamicYear: achedamicYearArr[studentTmpi],
								subjectName: rep_subjectNameArr[i]
							};

							vTmpSTR += '<td><select class="form-control form-control-sm" style="background-color:' + BGcolor + ';color:#FFF !important;min-width:100px" id="resultStatus' + i + '" ' + resReleasedDisabled + ' data-student=\'' + JSON.stringify(datarelesedresult) + '\' onchange="updateResultStatusProfile(this);">';
							vTmpSTR += op;
							vTmpSTR += '</select></td>';
						} else {
							vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'></div></td>";
							vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + statusshow + "</div></td>";
						}
					}

					if (rep_exam_releasedDate[i] != null) {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + rep_exam_releasedDate[i] + "</div></td>";
					} else {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>-</div></td>";
					}

					vTmpSTR += "</tr>";


				}

				for (var k = 0; k < rep_final_Length; k++) {
					// if(rep_final_SemArr[k] == Rep_subjectSemesterArr[GradeArrLength-1]){
					// str += "<tr style='border-bottom:3px double black'>";
					// str += "<td style='border-left:1px solid black; border-right:1px solid black;'></td>";
					// str += "<td style='border-top:1px solid black; padding: 5px;text-align:center' colspan='2'><div class='investView_l'  style='text-align:center; width:auto' >GPA : </div></td>";	
					// str += "<td style='border-right:1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_GPAArr[k]+"</div></td>";	
					// str += "<td style='border: 1px solid black; padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_ResultArr[k]+"</div></td>";	
					// str += "</tr>";
					// }
				}

				vTmpSTR += "</table><br>";

				for (var m = 0; m < rep_final_Length; m++) {
					// if(rep_final_SemArr[m] == '-1'){
					// str += "<table style='margin-top:10px; margin-bottom:10px'>";
					// str += "<tr style='border:1px solid black'>";
					// str += "<td style='border:1px solid black; padding: 5px 80px;'><div class='investView_l'  style='text-align:center; width:auto' >Final Classification</div></td>";
					// str += "<td style='padding: 5px 80px 5px 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto' >GPA : </div></td>";	
					// str += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_GPAArr[m]+"</div></td>";	
					// str += "<td style='border: 1px solid black; padding: 5px 80px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+rep_final_ResultArr[m]+"</div></td>";	
					// str += "</tr>";
					// str += "</table>";
					// }
				}

				vTmpSTR += "</div>";
			}


			vTmpSTR += '</fieldset>';


			//Rerepeat Results

			if (ReRepLength != 0) {
				vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px; ' id='RerepeatResults'>"; //display: none;
				let attemptTime = 0;
				let countSet = 0;
				let startSet = 0;

				for (var k = startSet; k < ReRep_attempt_time.length; k++) {
					if (attemptTime == 0) {
						attemptTime = ReRep_attempt_time[k];
					}

					if ((k + 1) <= ReRep_attempt_time.length) {
						countSet++;

						if ((k + 1) == ReRep_attempt_time.length) {
							attemptTime = ReRep_attempt_time[k];
							vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem;overflow:auto">';
							vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Re-Repeat Exam Results - Attempt ' + attemptTime + '</legend>';
							var ReRepsem0Count = 0;
							var ReRepsem1Count = 0;
							var ReRepsem2Count = 0;
							var ReRepsem3Count = 0;
							var ReRepsem4Count = 0;

							for (var j = startSet; j < countSet; j++) {
								switch (ReRep_subjectSemesterArr[j]) {
									case '0': ReRepsem0Count++; break;
									case '1': ReRepsem1Count++; break;
									case '2': ReRepsem2Count++; break;
									case '3': ReRepsem3Count++; break;
									case '4': ReRepsem4Count++; break;
								}
							}
							console.log(ReRepsem0Count);
							var gradeReRepArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];

							vTmpSTR += '<table class="table table-bordered">';

							vTmpSTR += "<tr style=''>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
							if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
								vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Examiner 1</th>";
								vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Examiner 2</th>";
								vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Avarage</th>";
							}
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Release Date</th>";

							vTmpSTR += "</tr>";
							// vTmpSTR += '<table align="center" style="width:auto; margin-top:10px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;">';

							// vTmpSTR += "<tr style='border: 1px solid black;'>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";
							// vTmpSTR += "</tr>";

							for (var i = startSet; i < countSet; i++) {
								if (ReRep_GradeArr[i] == '-') {
									ReRep_GradeArr[i] = '(ab)';
								}

								vTmpSTR += "<tr style='border: 1px solid black;'>";

								if (ReRep_subjectSemesterArr[i] == '0' && ReRepsem0Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
									ReRepsem0Count = 0;
								} else if (ReRep_subjectSemesterArr[i] == '1' && ReRepsem1Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
									ReRepsem1Count = 0;
								} else if (ReRep_subjectSemesterArr[i] == '2' && ReRepsem2Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
									ReRepsem2Count = 0;
								} else if (ReRep_subjectSemesterArr[i] == '3' && ReRepsem3Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
									ReRepsem3Count = 0;
								} else if (ReRep_subjectSemesterArr[i] == '4' && ReRepsem4Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
									ReRepsem4Count = 0;
								}


								vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + ReRep_subjectNameArr[i] + "</div></td>";
								vTmpSTR += "<td style='border: 1px solid black;padding: 5px 5px 5px 5px;text-wrap: auto;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;'>" + ReRep_subjectTitleArr[i] + "</div></td>";

								if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + RErep_examiner1Arr[i] + "</div></td>";
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + RErep_examiner2Arr[i] + "</div></td>";
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + RErep_avgMarksArr[i] + "</div></td>";
								}
								if (resultRRStatus[i] == 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + ReRep_GradeArr[i] + "</div></td>";

								} else {
									if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
										vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + ReRep_GradeArr[i] + "</div></td>";
									}
								}

								if (resultRRStatus[i] == 0) {


									var tmpTestReRepGrade = "";
									//var tmpGradeHolder = new Array();
									for (var j = 0; j < rep_cr_Length; j++) {
										if (gradeReRepArray.indexOf(rep_cr_resitArr[j]) < gradeReRepArray.indexOf(ReRep_GradeArr[i])) {
											if (ReRep_GradeArr[i] == '(ab)' || ReRep_GradeArr[i] == '-') {
												tmpTestReRepGrade = 'Absent';
											} else {
												tmpTestReRepGrade = 'Fail';
											}
											break;
										}
										else if (gradeReRepArray.indexOf(rep_cr_resitArr[j]) >= gradeReRepArray.indexOf(ReRep_GradeArr[i])) {    // else if(gradeArray.indexOf(cr_resitArr[j]) >= gradeArray.indexOf(marksArr[i])){
											//tmpTestGrade = cr_finalResultArr[j];
											tmpTestReRepGrade = 'Pass';
											//tmpGradeHolder.push(j);
											break;
										}
									}

									if (tmpTestReRepGrade == "Fail" || tmpTestReRepGrade == "Absent") {
										vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;color: red'>" + tmpTestReRepGrade + "</div></td>";
									}
									else {
										vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto'>" + tmpTestReRepGrade + "</div></td>";
									}

								} else {
									let statusshow = "";
									if (resultRRStatus[i] == 1) {
										statusshow = "Not Released";
									} else if (resultRRStatus[i] == 'H') {
										statusshow = "Hold";
									} else if (resultRRStatus[i] == 'NP' || resultRRStatus[i] == 'BP') {
										statusshow = "Not Payed";
									}
									if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Administrator') {
										let op = "<option " + ((resultRRStatus[i] == 1 || resultRRStatus[i] == '') ? "selected" : "") + " value='1'>Not Released</option>";
										op += "<option " + ((resultRRStatus[i] == 0) ? "selected" : "") + " value='0'>Released</option>";
										op += "<option " + ((resultRRStatus[i] == 'H') ? "selected" : "") + " value='H'>Hold</option>";
										let BGcolor = statusBackGroundColor(resultRRStatus[i]);
										let resReleasedDisabled = "disabled";
										if (dataRep['roleName'] == 'Administrator') {
											if (resultRRStatus[i] == 'H' || resultRRStatus[i] == 0) {
												resReleasedDisabled = "disabled";
											} else {
												resReleasedDisabled = "";
											}
										} else {
											resReleasedDisabled = "";
										}

										let datarelesedresult = {
											studentId: studentNoArr[studentTmpi],
											attempt: "RR",
											re_repeat_attempt_time: attemptTime,
											degreeCode: degreeCodeArr[studentTmpi],
											achedamicYear: achedamicYearArr[studentTmpi],
											subjectName: ReRep_subjectNameArr[i]
										};

										vTmpSTR += '<td><select class="form-control form-control-sm" style="background-color:' + BGcolor + ';color:#FFF !important;min-width:100px" id="resultStatus' + i + '" ' + resReleasedDisabled + ' data-student=\'' + JSON.stringify(datarelesedresult) + '\' onchange="updateResultStatusProfile(this);">';
										vTmpSTR += op;
										vTmpSTR += '</select></td>';
									} else {
										vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'></div></td>";
										vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + statusshow + "</div></td>";
									}
								}

								if (rep_exam_releasedDate[i] != null) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + RErep_exam_releasedDate[i] + "</div></td>";
								} else {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>-</div></td>";
								}

								vTmpSTR += "</tr>";
							}

							vTmpSTR += "</table><br>";
							vTmpSTR += '</fieldset>';

							startSet = k + 1;
						}
						else if (ReRep_attempt_time[k + 1] != attemptTime) {
							attemptTime = ReRep_attempt_time[k];
							vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem;overflow:auto">';
							vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Re-Repeat Exam Results - Attempt ' + attemptTime + '</legend>';

							var ReRepsem0Count = 0;
							var ReRepsem1Count = 0;
							var ReRepsem2Count = 0;
							var ReRepsem3Count = 0;
							var ReRepsem4Count = 0;

							for (var j = startSet; j < countSet; j++) {
								switch (ReRep_subjectSemesterArr[j]) {
									case '0': ReRepsem0Count++; break;
									case '1': ReRepsem1Count++; break;
									case '2': ReRepsem2Count++; break;
									case '3': ReRepsem3Count++; break;
									case '4': ReRepsem4Count++; break;
								}
							}
							var gradeReRepArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];

							// vTmpSTR += '<table align="center" style="width:auto; margin-top:10px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;">';

							// vTmpSTR += "<tr style='border: 1px solid black;'>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";
							// vTmpSTR += "</tr>";

							vTmpSTR += '<table class="table table-bordered">';
							vTmpSTR += "<tr style=''>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
							if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
								vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Examiner 1</th>";
								vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Examiner 2</th>";
								vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Avarage</th>";
							}
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Release Date</th>";

							vTmpSTR += "</tr>";

							for (var i = startSet; i < countSet; i++) {
								if (ReRep_GradeArr[i] == '-') {
									ReRep_GradeArr[i] = '(ab)';
								}

								vTmpSTR += "<tr style='border: 1px solid black;'>";

								if (ReRep_subjectSemesterArr[i] == '0' && ReRepsem0Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
									ReRepsem0Count = 0;
								} else if (ReRep_subjectSemesterArr[i] == '1' && ReRepsem1Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
									ReRepsem1Count = 0;
								} else if (ReRep_subjectSemesterArr[i] == '2' && ReRepsem2Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
									ReRepsem2Count = 0;
								} else if (ReRep_subjectSemesterArr[i] == '3' && ReRepsem3Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
									ReRepsem3Count = 0;
								} else if (ReRep_subjectSemesterArr[i] == '4' && ReRepsem4Count != 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
									ReRepsem4Count = 0;
								}


								vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + ReRep_subjectNameArr[i] + "</div></td>";
								vTmpSTR += "<td style='border: 1px solid black;padding: 5px 5px 5px 5px;text-wrap: auto;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;'>" + ReRep_subjectTitleArr[i] + "</div></td>";
								if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + RErep_examiner1Arr[i] + "</div></td>";
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + RErep_examiner2Arr[i] + "</div></td>";
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + RErep_avgMarksArr[i] + "</div></td>";
								}

								if (resultRRStatus[i] == 0) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + ReRep_GradeArr[i] + "</div></td>";

								} else {
									if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep["roleName"] == "Administrator") {
										vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + ReRep_GradeArr[i] + "</div></td>";
									}
								}
								if (resultRRStatus[i] == 0) {


									var tmpTestReRepGrade = "";
									//var tmpGradeHolder = new Array();
									for (var j = 0; j < rep_cr_Length; j++) {
										if (gradeReRepArray.indexOf(rep_cr_resitArr[j]) < gradeReRepArray.indexOf(ReRep_GradeArr[i])) {
											if (ReRep_GradeArr[i] == '(ab)' || ReRep_GradeArr[i] == '-') {
												tmpTestReRepGrade = 'Absent';
											} else {
												tmpTestReRepGrade = 'Fail';
											}
											break;
										}
										else if (gradeReRepArray.indexOf(rep_cr_resitArr[j]) >= gradeReRepArray.indexOf(ReRep_GradeArr[i])) {    // else if(gradeArray.indexOf(cr_resitArr[j]) >= gradeArray.indexOf(marksArr[i])){
											//tmpTestGrade = cr_finalResultArr[j];
											tmpTestReRepGrade = 'Pass';
											//tmpGradeHolder.push(j);
											break;
										}
									}

									if (tmpTestReRepGrade == "Repeat" || tmpTestReRepGrade == "Absent") {
										vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;color: red'>" + tmpTestReRepGrade + "</div></td>";
									}
									else {
										vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto'>" + tmpTestReRepGrade + "</div></td>";
									}
								}
								else {
									let statusshow = "";
									if (resultRRStatus[i] == 1) {
										statusshow = "Not Released";
									} else if (resultRRStatus[i] == 'H') {
										statusshow = "Hold";
									} else if (resultRRStatus[i] == 'NP' || resultRRStatus[i] == 'BP') {
										statusshow = "Not Payed";
									}


									if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Administrator') {
										let op = "<option " + ((resultRRStatus[i] == 1 || resultRRStatus[i] == '') ? "selected" : "") + " value='1'>Not Released</option>";
										op += "<option " + ((resultRRStatus[i] == 0) ? "selected" : "") + " value='0'>Released</option>";
										op += "<option " + ((resultRRStatus[i] == 'H') ? "selected" : "") + " value='H'>Hold</option>";
										let BGcolor = statusBackGroundColor(resultRRStatus[i]);
										let resReleasedDisabled = "disabled";
										if (dataRep['roleName'] == 'Administrator') {
											if (resultRRStatus[i] == 'H' || resultRRStatus[i] == 0) {
												resReleasedDisabled = "disabled";
											} else {
												resReleasedDisabled = "";
											}
										} else {
											resReleasedDisabled = "";
										}

										vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'></div></td>";
										let datarelesedresult = {
											studentId: studentNoArr[studentTmpi],
											attempt: "RR",
											re_repeat_attempt_time: attemptTime,
											degreeCode: degreeCodeArr[studentTmpi],
											achedamicYear: achedamicYearArr[studentTmpi],
											subjectName: ReRep_subjectNameArr[i]
										};

										vTmpSTR += '<td><select class="form-control form-control-sm" style="background-color:' + BGcolor + ';color:#FFF !important;min-width:100px" id="resultStatus' + i + '" ' + resReleasedDisabled + ' data-student=\'' + JSON.stringify(datarelesedresult) + '\' onchange="updateResultStatusProfile(this);">';
										vTmpSTR += op;
										vTmpSTR += '</select></td>';
									} else {
										vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'></div></td>";
										vTmpSTR += "<td colspan ='' style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + statusshow + "</div></td>";

									}


								}
								if (rep_exam_releasedDate[i] != null) {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + RErep_exam_releasedDate[i] + "</div></td>";
								} else {
									vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>-</div></td>";
								}

								vTmpSTR += "</tr>";
							}

							vTmpSTR += "</table><br>";
							vTmpSTR += '</fieldset>';

							startSet = k + 1;
						}

					}
				}


				vTmpSTR += "</div>";
			}






			if (MarksLength == 0 && GradeArrLength == 0 && ReRepLength == 0) {

				vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;' id='notAttempt'>";
				vTmpSTR += "<p>No Result Available</p>";
				vTmpSTR += "</div>";
			} else {
				// vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;color:#ff4747'>";
				// // vTmpSTR += '<p>*The results may change based on the bylaws of the university.</p>';
				// vTmpSTR += '<p style="text-align: left;margin: 5px 0;padding-left: 2rem;    line-height: 20px;"># The results may change based on the bylaws/regulation  of the university (eg:- Repeating subjects, submit the thesis after the stipulated period). This is only a computer-generated result sheet of the student and it cannot be considered as an academic certificate.</p>';
				// vTmpSTR += '<p style="text-align: left;margin: 5px 0;padding-left: 2rem;    line-height: 20px;"># Final result will be released by the Senate upon obtaining recommendation of the Results Board.</p>';

				// vTmpSTR += "</div>";
				// vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;'>";
				// vTmpSTR += "<input type='button' class='btn btn-primary mb-2  btn-lg'style='margin-top:0px;text-align:right'  id='transferButton' value='Print Result' onclick=printExamSheet();>";//
				// vTmpSTR += "</div>";
				vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;display: none;' id='note2Results'>";
				vTmpSTR += "<hr>";
				for (var j = 0; j < cr_Length; j++) {
					if (cr_descriptionArr.indexOf(cr_descriptionArr[j]) == cr_descriptionArr.lastIndexOf(cr_descriptionArr[j]) || (cr_descriptionArr.indexOf(cr_descriptionArr[j]) != cr_descriptionArr.lastIndexOf(cr_descriptionArr[j]) && cr_descriptionArr.indexOf(cr_descriptionArr[j]) == j)) {
						vTmpSTR += '<p style="text-align:left; font-weight: bold">' + cr_finalResultArr[j] + '</p>';
						vTmpSTR += "<p style='text-align:left;margin-left:30px'>" + cr_descriptionArr[j] + "</p><br>";
					}
				}

				vTmpSTR += "<hr>";
				vTmpSTR += '<p>*This is only the result sheet of the student and it cannot be considered as an academic certificate.This is only a computer generated results sheet</p>';

				vTmpSTR += '<p>If you have any inquires please contact FGS on 0112903953 </p>';
				vTmpSTR += '<br>';
				vTmpSTR += '<br>';
				vTmpSTR += "</div>";
				vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;'>";
				vTmpSTR += "<input type='button' class='btn btn-primary mb-2  btn-lg'style='margin-top:0px;'  id='transferButton' value='Print ' onclick=printExamSheet();>";//

				vTmpSTR += "</div>";
			}
			vTmpSTR += '</div>';


		}


		if (dataRep['searchType'] == 'studentSearch') {



			/************************** EXAM APPLIED TAB START **************************/
			vTmpSTR += '<div class="tab-pane fade " id="v-pills-exam-apply" role="tabpanel" aria-labelledby="v-pills-exam-apply-tab">';
			const Today_Date = new Date();

			if (ExamDetailsLength != 0) {
				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
				vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Apply For Exam</legend>';
				dataRep["degreeCode"] = degreeCodeArr[0];
				dataRep["academicYear"] = achedamicYearArr[0];


				var totFee = 0
				// MANUAL PAYMENT CALCULATE
				for (var j = 0; j < batchdetailsLength; j++) {
					if (batchDegreeCodeArr[j] == degreeCodeArr[0] && batchYearArr[j] == achedamicYearArr[0]) {
						totFee = parseInt(batchCourseFeeArr[j]);
						totFee = totFee + parseInt(batchLibraryFeeArr[j]);
					}
				}
				var feeCatCount = 0;
				for (var i = 0; i < tCodeLength; i++) {
					if (tCodeArr.indexOf(tCodeArr[i]) == tCodeArr.lastIndexOf(tCodeArr[i]) || (tCodeArr.indexOf(tCodeArr[i]) != tCodeArr.lastIndexOf(tCodeArr[i]) && tCodeArr.indexOf(tCodeArr[i]) == i)) {
						if (feeCatArr[i] != feeCatArr[i - 1]) {
							for (var j = 0; j < tCodeLength; j++) {
								if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j]) == j)) {
									if (feeCatArr[i] == feeCatArr[j]) {
										feeCatCount++;
									}
								}
							}

							var totalAmountPaid = 0;
							if (feeCatArr[i] != feeCatArr[i - 1]) {
								for (var j = 0; j < tCodeLength; j++) {
									if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j]) == j)) {
										if (feeCatArr[i] == feeCatArr[j]) {
											feeCatCount++;
											var n = Number(amountArr[j]);
											totalAmountPaid = totalAmountPaid + n;

										}
									}
								}
								var remainamount2 = totFee - totalAmountPaid;
							}
						}
					}
				}
				// MANUAL PAYMENT CALCULATE

				// 16 DIGIT PAYMENT CALCULATE
				var totalAmountPaidStu = 0;
				for (var j = 0; j < RefNoLength; j++) {
					if (Pay_RefNoArr.indexOf(Pay_RefNoArr[j]) == Pay_RefNoArr.lastIndexOf(Pay_RefNoArr[j]) || (Pay_RefNoArr.indexOf(Pay_RefNoArr[j]) != Pay_RefNoArr.lastIndexOf(Pay_RefNoArr[j]) && Pay_RefNoArr.indexOf(Pay_RefNoArr[j]) == j)) {
						PayCatCount++;
						var n = Number(Pay_amountArr[j]);
						if (Response_Progress_TimeArr[j] == "0000-00-00" & Response_ProgressArr[j] == " ") {
							totalAmountPaidStu = 0;
						}
						if (Response_Progress_TimeArr[j] != "0000-00-00" & Response_ProgressArr[j] == "1") {
							totalAmountPaidStu = totalAmountPaidStu + n;
						}

					}
				}
				// 16 DIGIT PAYMENT CALCULATE END


				let examAvailable = false;
				let strNote = "";
				let strFirstTime = "";
				let strRepeatTime = "";
				let strReRepeatTime = "";
				let strExamBtn = "";


				for (let i = 0; i < ExamDetailsLength; i++) {

					if (degreeCodeArr[0] == Examd_degreecodeArr[i] & achedamicYearArr[0] == Examd_achedamicyearArr[i]) {
						let givenExamClosingDate = new Date(Examd_closingdateArr[i]);
						givenExamClosingDate.setDate(givenExamClosingDate.getDate() + 1);
						if ((totalAmountPaid >= Examd_amountArr[i] || totalAmountPaidStu >= Examd_amountArr[i]) && Date.parse(givenExamClosingDate) >= Date.parse(Today_Date)) {
							const price = Examd_amountArr[i];
							const formattedPrice = new Intl.NumberFormat('en-LK', {
								style: 'currency',
								currency: 'LKR',
								currencyDisplay: 'symbol',
								minimumFractionDigits: 2,
								maximumFractionDigits: 2
							}).format(price);

							const amount = `Rs.${formattedPrice.substring(3)}`;

							if (Examd_attemptArr[i] == 'First') {


								// 						<fieldset style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">
								// <legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">First Attempt Exam</legend>
								// <div style="width:50%;margin-bottom: 10px;text-align:left"><p style="text-align: left;color:#073844">Amount to be paid for applying for the first attempt exam : 
								// 	<span style="color: red;">Rs.&nbsp;600,000.00</span></p></div></fieldset>

								strFirstTime = "<fieldset style='width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem'>";
								strFirstTime += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">First Attempt Exam</legend>';
								strFirstTime += "<div style='width:100%; margin-bottom: 10px;text-align:left'>";
								strFirstTime += "<p style='text-align: left;color:#073844'>Amount to be paid for applying for the exam : <span style='color: red;'>" + amount + "</span></p>";
								strFirstTime += "</div>";
								strFirstTime += "<div style='width:100%; margin-bottom: 10px;text-align:right'>";
								strFirstTime += "<p style='text-align: left;color:#073844'>Exam application closing date :  <span style='color: red;'>" + Examd_closingdateArr[i] + "</span></p>";
								strFirstTime += "</div>";
								strFirstTime += "</fieldset>";
							}
							if (Examd_attemptArr[i] == 'Repeat') {
								strRepeatTime = "<fieldset style='width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem'>";
								strRepeatTime += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">Repeat Attempt Exam</legend>';
								strRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:left'>";
								strRepeatTime += "<p style='text-align: left;color:#073844'>Amount to be paid for applying for the exam : <span style='color: red;'>" + amount + "</span></p>";
								strRepeatTime += "</div>";
								strRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:right'>";
								strRepeatTime += "<p style='text-align: left;color:#073844'>Exam application closing date :  <span style='color: red;'>" + Examd_closingdateArr[i] + "</span></p>";
								strRepeatTime += "</div>";
								strRepeatTime += "</fieldset>";
							}
							if (Examd_attemptArr[i] == 'Re-Repeat') {
								strReRepeatTime = "<fieldset style='width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem'>";
								strReRepeatTime += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">Re-Repeat Attempt Exam</legend>';
								strReRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:left'>";
								strReRepeatTime += "<p style='text-align: left;color:#073844'>Amount to be paid for applying for the exam : <span style='color: red;'>" + amount + "</span></p>";
								strReRepeatTime += "</div>";
								strReRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:right'>";
								strReRepeatTime += "<p style='text-align: left;color:#073844'>Exam application closing date :  <span style='color: red;'>" + Examd_closingdateArr[i] + "</span></p>";
								strReRepeatTime += "</div>";
								strReRepeatTime += "</fieldset>";
							}
						} else {


							if (Date.parse(givenExamClosingDate) >= Date.parse(Today_Date)) {
								const price = Examd_amountArr[i];
								const formattedPrice = new Intl.NumberFormat('en-LK', {
									style: 'currency',
									currency: 'LKR',
									currencyDisplay: 'symbol',
									minimumFractionDigits: 2,
									maximumFractionDigits: 2
								}).format(price);

								const amount = `Rs.${formattedPrice.substring(3)}`;


								if (Examd_attemptArr[i] == 'First') {
									strFirstTime = "<fieldset style='width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem'>";
									strFirstTime += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">First Attempt Exam</legend>';
									strFirstTime += "<div style='width:100%; margin-bottom: 10px;text-align:left'>";
									strFirstTime += "<p style='text-align: left;color:#073844'>Amount to be paid for applying for the exam : <span style='color: red;'>" + amount + "</span></p>";
									strFirstTime += "</div>";
									strFirstTime += "<div style='width:100%; margin-bottom: 10px;text-align:right'>";
									strFirstTime += "<p style='text-align: left;color:#073844'>Exam application closing date :  <span style='color: red;'>" + Examd_closingdateArr[i] + "</span></p>";
									strFirstTime += "</div>";
									strFirstTime += "</fieldset>";
								}
								if (Examd_attemptArr[i] == 'Repeat') {
									strRepeatTime = "<fieldset style='width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem'>";
									strRepeatTime += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">Repeat Attempt Exam</legend>';
									strRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:left'>";
									strRepeatTime += "<p style='text-align: left;color:#073844'>Amount to be paid for applying for the exam : <span style='color: red;'>" + amount + "</span></p>";
									strRepeatTime += "</div>";
									strRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:right'>";
									strRepeatTime += "<p style='text-align: left;color:#073844'>Exam application closing date :  <span style='color: red;'>" + Examd_closingdateArr[i] + "</span></p>";
									strRepeatTime += "</div>";
									strRepeatTime += "</fieldset>";
								}
								if (Examd_attemptArr[i] == 'Re-Repeat') {
									strReRepeatTime = "<fieldset style='width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem'>";
									strReRepeatTime += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">Re-Repeat Attempt Exam</legend>';
									strReRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:left'>";
									strReRepeatTime += "<p style='text-align: left;color:#073844'>Amount to be paid for applying for the exam : <span style='color: red;'>" + amount + "</span></p>";
									strReRepeatTime += "</div>";
									strReRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:right'>";
									strReRepeatTime += "<p style='text-align: left;color:#073844'>Exam application closing date :  <span style='color: red;'>" + Examd_closingdateArr[i] + "</span></p>";
									strReRepeatTime += "</div>";
									strReRepeatTime += "</fieldset>";
								}


							} else {

								const price = Examd_amountArr[i];
								const formattedPrice = new Intl.NumberFormat('en-LK', {
									style: 'currency',
									currency: 'LKR',
									currencyDisplay: 'symbol',
									minimumFractionDigits: 2,
									maximumFractionDigits: 2
								}).format(price);

								const amount = `Rs.${formattedPrice.substring(3)}`;


								if (Examd_attemptArr[i] == 'First') {
									strFirstTime = "<fieldset style='width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem'>";
									strFirstTime += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">First Attempt Exam</legend>';
									strFirstTime += "<div style='width:100%; margin-bottom: 10px;text-align:left'>";
									strFirstTime += "<p style='text-align: left;color:#073844'>Amount to be paid for applying for the exam : <span style='color: red;'>" + amount + "</span></p>";
									strFirstTime += "</div>";
									strFirstTime += "<div style='width:100%; margin-bottom: 10px;text-align:right'>";
									strFirstTime += "<p style='text-align: left;color:#073844'>Exam application closing date :  <span style='color: red;'>" + Examd_closingdateArr[i] + "</span></p>";
									strFirstTime += "</div>";
									strFirstTime += "</fieldset>";
								}
								if (Examd_attemptArr[i] == 'Repeat') {
									strRepeatTime = "<fieldset style='width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem'>";
									strRepeatTime += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">Repeat Attempt Exam</legend>';
									strRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:left'>";
									strRepeatTime += "<p style='text-align: left;color:#073844'>Amount to be paid for applying for the exam : <span style='color: red;'>" + amount + "</span></p>";
									strRepeatTime += "</div>";
									strRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:right'>";
									strRepeatTime += "<p style='text-align: left;color:#073844'>Exam application closing date :  <span style='color: red;'>" + Examd_closingdateArr[i] + "</span></p>";
									strRepeatTime += "</div>";
									strRepeatTime += "</fieldset>";
								}
								if (Examd_attemptArr[i] == 'Re-Repeat') {
									strReRepeatTime = "<fieldset style='width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem'>";
									strReRepeatTime += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">Re-Repeat Attempt Exam</legend>';
									strReRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:left'>";
									strReRepeatTime += "<p style='text-align: left;color:#073844'>Amount to be paid for applying for the exam : <span style='color: red;'>" + amount + "</span></p>";
									strReRepeatTime += "</div>";
									strReRepeatTime += "<div style='width:100%; margin-bottom: 10px;text-align:right'>";
									strReRepeatTime += "<p style='text-align: left;color:#073844'>Exam application closing date :  <span style='color: red;'>" + Examd_closingdateArr[i] + "</span></p>";
									strReRepeatTime += "</div>";
									strReRepeatTime += "</fieldset>";
								}
							}


						}

					}
				}




				for (let i = 0; i < ExamDetailsLength; i++) {


					if ((degreeCodeArr[0] == Examd_degreecodeArr[i] && achedamicYearArr[0] == Examd_achedamicyearArr[i])) {

						let givenExamClosingDate = new Date(Examd_closingdateArr[i]);
						givenExamClosingDate.setDate(givenExamClosingDate.getDate() + 1);


						if (((totalAmountPaid >= Examd_amountArr[i] || totalAmountPaidStu >= Examd_amountArr[i]) && Date.parse(givenExamClosingDate) >= Date.parse(Today_Date)) || studentSpecialApproveArr[0] == 1) {
							strExamBtn = "<div align='center' style='clear:both; margin-bottom: 10px;'>";
							strExamBtn += '<input type="button" class="btnD btn btn-primary mr-2 mb-2" value = "View Exam Timetable" onclick ="ViewExamTimeTable()">';
							strExamBtn += '<input type="button" class="btnD btn btn-primary mr-2 mb-2" value = "Apply For Exam" onclick ="applyForFirstTimeExam()">';
							strExamBtn += '</div>';
						}

						examAvailable = true;
					}
				}
				vTmpSTR += strNote;
				vTmpSTR += strFirstTime;
				vTmpSTR += strRepeatTime;
				vTmpSTR += strReRepeatTime;
				vTmpSTR += strExamBtn;


				vTmpSTR += "</fieldset>";
			}

			vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px; '>";
			vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
			vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Exam Application History</legend>';

			//FIRST ATTEMPT APPLIED SUBJECT
			if (ss_SubLength != 0) {
				vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px; ' id='firstAttempt'>";
				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
				vTmpSTR += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">First Time Subjects</legend>';
				var sem0Count = 0;
				var sem1Count = 0;
				var sem2Count = 0;
				var sem3Count = 0;
				var sem4Count = 0;

				for (var j = 0; j < ss_SubLength; j++) {
					switch (ss_subjectSemesterArr[j]) {
						case '0': sem0Count++; break;
						case '1': sem1Count++; break;
						case '2': sem2Count++; break;
						case '3': sem3Count++; break;
						case '4': sem4Count++; break;
					}
				}


				let vTmpSTRMobile = "";
				vTmpSTRMobile += '<table class="table table-bordered main2tableMobile">';
				vTmpSTRMobile += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
				vTmpSTRMobile += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Details</th>";
				vTmpSTRMobile += "</tr>";

				vTmpSTR += '<table class="table table-bordered main2table">';
				vTmpSTR += "<tr style='border: 1px solid black;'>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Attempt</th>";
				//vTmpSTR+= "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Academic Year</th>";
				vTmpSTR += "</tr>";

				for (var i = 0; i < ss_SubLength; i++) {
					// if (ss_subjectCodeArr.indexOf(ss_subjectCodeArr[i]) == ss_subjectCodeArr.lastIndexOf(ss_subjectCodeArr[i]) || (ss_subjectCodeArr.indexOf(ss_subjectCodeArr[i]) != ss_subjectCodeArr.lastIndexOf(ss_subjectCodeArr[i]) && ss_subjectCodeArr.indexOf(ss_subjectCodeArr[i]) == i)) {


					vTmpSTRMobile += "<tr style='border: 1px solid black;'>";
					vTmpSTR += "<tr style='border: 1px solid black;'>";

					if (ss_subjectSemesterArr[i] == '0' && sem0Count != 0) {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
						vTmpSTRMobile += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
						sem0Count = 0;
					} else if (ss_subjectSemesterArr[i] == '1' && sem1Count != 0) {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
						vTmpSTRMobile += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
						sem1Count = 0;
					} else if (ss_subjectSemesterArr[i] == '2' && sem2Count != 0) {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
						vTmpSTRMobile += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
						sem2Count = 0;
					} else if (ss_subjectSemesterArr[i] == '3' && sem3Count != 0) {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
						vTmpSTRMobile += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
						sem3Count = 0;
					} else if (ss_subjectSemesterArr[i] == '4' && sem4Count != 0) {
						vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
						vTmpSTRMobile += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
						sem4Count = 0;
					}

					//vTmpSTR+= "<td style='border: 1px solid black;padding: 5px 5px 5px 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;'>"+ss_attemptArr[i]+"</div></td>";
					vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + ss_subjectCodeArr[i] + "</div></td>";
					vTmpSTR += "<td style='border: 1px solid black;padding: 5px 5px 5px 5px;text-wrap: auto;text-align:center'><div class='investView_l'  style='text-align:left; width:auto;'>" + ss_subjectTitleArr[i] + "</div></td>";
					vTmpSTR += "<td style='border: 1px solid black;padding: 5px 5px 5px 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;'>FIRST</div></td>";
					vTmpSTRMobile += "<td style='border: 1px solid black;padding: 5px 5px 5px 5px;text-align:center'><div class='investView_l'  style='text-align: left;width: auto;text-wrap: auto;line-height: 20px;'><strong>Subject Code: </strong><br>" + ss_subjectCodeArr[i] + "<br><strong>Subject Title: </strong><br>" + ss_subjectTitleArr[i] + "<br><strong>Attempt: </strong><br>FIRST</div></td>";

					//vTmpSTR+= "<td></td>";

					vTmpSTRMobile += "</tr>";
					vTmpSTR += "</tr>";
					// }
				}
				vTmpSTR += '</table>';
				vTmpSTRMobile += '</table>';
				vTmpSTR += vTmpSTRMobile;

				let admissionBtn = "";
				let printBtnAdd = 0;
				for (let i = 0; i < ExamDetailsLength; i++) {
					if (degreeCodeArr[0] == Examd_degreecodeArr[i] & achedamicYearArr[0] == Examd_achedamicyearArr[i]) {
						let givenExamClosingDate = new Date(Examd_closingdateArr[i]);
						givenExamClosingDate.setDate(givenExamClosingDate.getDate() + 1);

						// if(Date.parse(addmissionPrintLastDate) >= Date.parse(Today_Date)) {
						// if(givenExamClosingDate >= Date.parse(Today_Date)) {
						if (printBtnAdd == 0) {
							if (Examd_attemptArr[i] == "First") {
								let addmissionPrintLastDate = "";
								for (k = 0; k < DD_degreeCodeArr.length; k++) {
									if (Examd_semesterArr[i].includes(DD_timeSemArr[k])) {
										if (isDateTodayOrGreater(DD_examdateArr[k])) {
											addmissionPrintLastDate = DD_examdateArr[k];
										}
									}
								}


								if (addmissionPrintLastDate != "") {

									if (isDateTodayOrGreater(addmissionPrintLastDate)) {
										admissionBtn = '<br>';
										admissionBtn += "<input type='button' class='btnD' value='Print Admission' onclick=downloadAdmissionCommon(" + i + ");  style='float: right;' >";
										admissionBtn += '<br>';
										printBtnAdd++;
									}
								}

							}
						}
					}
				}


				vTmpSTR += admissionBtn;

				vTmpSTR += '</fieldset>';
				vTmpSTR += "</div>";

			}
			//END FIRST ATTEMPT APPLIED SUBJECT

			//REPEAT ATTEMPT APPLIED SUBJECT
			if (rr_SubLength != 0) {
				vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;' id='repeatAttempt'>";
				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
				vTmpSTR += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">Repeat Subjects</legend>';
				var sem0Count = 0;
				var sem1Count = 0;
				var sem2Count = 0;
				var sem3Count = 0;
				var sem4Count = 0;

				for (var j = 0; j < rr_SubLength; j++) {
					switch (rr_subjectSemesterArr[j]) {
						case '0': sem0Count++; break;
						case '1': sem1Count++; break;
						case '2': sem2Count++; break;
						case '3': sem3Count++; break;
						case '4': sem4Count++; break;
					}
				}


				let vTmpSTRMobile = "";
				vTmpSTRMobile += '<table class="table table-bordered main2tableMobile">';
				vTmpSTRMobile += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
				vTmpSTRMobile += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Details</th>";
				vTmpSTRMobile += "</tr>";


				vTmpSTR += '<table class="table table-bordered main2table">';
				vTmpSTR += "<tr style=''>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
				vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'></th>";
				vTmpSTR += "</tr>";

				for (var i = 0; i < rr_SubLength; i++) {
					if (rr_subjectCodeArr.indexOf(rr_subjectCodeArr[i]) == rr_subjectCodeArr.lastIndexOf(rr_subjectCodeArr[i]) || (rr_subjectCodeArr.indexOf(rr_subjectCodeArr[i]) != rr_subjectCodeArr.lastIndexOf(rr_subjectCodeArr[i]) && rr_subjectCodeArr.indexOf(rr_subjectCodeArr[i]) == i)) {

						vTmpSTR += "<tr style=''>";
						vTmpSTRMobile += "<tr style=''>";

						if (rr_subjectSemesterArr[i] == '0' && sem0Count != 0) {
							vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
							vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
							sem0Count = 0;
						} else if (rr_subjectSemesterArr[i] == '1' && sem1Count != 0) {
							vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
							vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
							sem1Count = 0;
						} else if (rr_subjectSemesterArr[i] == '2' && sem2Count != 0) {
							vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
							vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
							sem2Count = 0;
						} else if (rr_subjectSemesterArr[i] == '3' && sem3Count != 0) {
							vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
							vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
							sem3Count = 0;
						} else if (rr_subjectSemesterArr[i] == '4' && sem4Count != 0) {
							vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
							vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
							sem4Count = 0;
						}

						vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + rr_subjectCodeArr[i] + "</div></td>";
						vTmpSTR += "<td style='padding: 5px 5px 5px 5px;text-wrap: auto;text-align:center'><div class='investView_l'  style='text-align:left; width:auto;'>" + rr_subjectTitleArr[i] + "</div></td>";
						vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;'>" + rr_reasonArr[i] + "</div></td>";
						vTmpSTRMobile += "<td style='border: 1px solid black;padding: 5px 5px 5px 5px;text-align:center'><div class='investView_l'  style='text-align: left;width: auto;text-wrap: auto;line-height: 20px;'><strong>Subject Code: </strong><br>" + rr_subjectCodeArr[i] + "<br><strong>Subject Title: </strong><br>" + rr_subjectTitleArr[i] + "<br><strong>Reason: </strong><br>" + rr_reasonArr[i] + "</div></td>";

						vTmpSTRMobile += "</tr>";
						vTmpSTR += "</tr>";
					}
				}

				vTmpSTR += '</table>';
				vTmpSTRMobile += '</table>';
				vTmpSTR += vTmpSTRMobile;
				vTmpSTR += '</fieldset>';
				vTmpSTR += "</div>";
			}

			//END REPEAT ATTEMPT APPLIED SUBJECT


			//RE-REPEAT ATTEMPT APPLIED SUBJECT
			if (ReRep_SubLength != 0) {
				vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;' id='ReRepeatAttempt'>";

				let attempt = "";
				var sem0Count = 0;
				var sem1Count = 0;
				var sem2Count = 0;
				var sem3Count = 0;
				var sem4Count = 0;

				let vTmpSTRMobile = "";

				for (var i = 0; i < ReRep_SubLength; i++) {
					if (attempt == "") {

						console.log("------------");
						attempt = Ress_attemptTimeArr[i];
						vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
						vTmpSTR += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">Re-Repeat Subjects - Attempt ' + attempt + '</legend>';
						sem0Count = 0;
						sem1Count = 0;
						sem2Count = 0;
						sem3Count = 0;
						sem4Count = 0;
						for (var j = i; j < ReRep_SubLength; j++) {
							if (Ress_attemptTimeArr[j] == attempt) {
								switch (ss_subjectSemesterRepeatArr[j]) {
									case '0': sem0Count++; break;
									case '1': sem1Count++; break;
									case '2': sem2Count++; break;
									case '3': sem3Count++; break;
									case '4': sem4Count++; break;
								}
							}
						}


						vTmpSTRMobile += '<table class="table table-bordered main2tableMobile">';
						vTmpSTRMobile += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
						vTmpSTRMobile += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Details</th>";
						vTmpSTRMobile += "</tr>";


						vTmpSTR += '<table class="table table-bordered main2table">';
						vTmpSTR += "<tr style=''>";
						vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
						vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
						vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
						vTmpSTR += "</tr>";

					} else if (i <= ReRep_SubLength - 1) {
						console.log("------------2");

						if (attempt != Ress_attemptTimeArr[i]) {
							console.log("------------1");

							attempt = Ress_attemptTimeArr[i];
							vTmpSTRMobile += '</table>';
							vTmpSTR += '</table>';
							vTmpSTR += '</fieldset>';
							vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
							vTmpSTR += '<legend class="fieldHead text-danger" style="font-weight: bolder;width: fit-content;font-size: 1rem;">Re-Repeat Subjects - Attempt ' + attempt + '</legend>';
							sem0Count = 0;
							sem1Count = 0;
							sem2Count = 0;
							sem3Count = 0;
							sem4Count = 0;
							for (var j = i; j < ReRep_SubLength; j++) {
								if (Ress_attemptTimeArr[j] == attempt) {
									switch (ss_subjectSemesterRepeatArr[j]) {
										case '0': sem0Count++; break;
										case '1': sem1Count++; break;
										case '2': sem2Count++; break;
										case '3': sem3Count++; break;
										case '4': sem4Count++; break;
									}
								}
							}
							vTmpSTRMobile += '<table class="table table-bordered main2tableMobile">';
							vTmpSTRMobile += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
							vTmpSTRMobile += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Details</th>";
							vTmpSTRMobile += "</tr>";


							vTmpSTR += '<table class="table table-bordered main2table">';
							vTmpSTR += "<tr style=''>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
							vTmpSTR += "</tr>";
						}
					}

					vTmpSTR += "<tr style=''>";
					vTmpSTRMobile += "<tr style=''>";
					if (ss_subjectSemesterRepeatArr[i] == '0' && sem0Count != 0) {
						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
						vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
						sem0Count = 0;
					} else if (ss_subjectSemesterRepeatArr[i] == '1' && sem1Count != 0) {
						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
						vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
						sem1Count = 0;
					} else if (ss_subjectSemesterRepeatArr[i] == '2' && sem2Count != 0) {
						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
						vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
						sem2Count = 0;
					} else if (ss_subjectSemesterRepeatArr[i] == '3' && sem3Count != 0) {
						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
						vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
						sem3Count = 0;
					} else if (ss_subjectSemesterRepeatArr[i] == '4' && sem4Count != 0) {
						vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
						vTmpSTRMobile += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
						sem4Count = 0;
					}

					vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + Ress_subjectCodeArr[i] + "</div></td>";
					vTmpSTR += "<td style='padding: 5px 5px 5px 5px;text-wrap: auto;text-align:center'><div class='investView_l'  style='text-align:left; width:auto;'>" + Ress_subjectTitleArr[i] + "</div></td>";
					vTmpSTRMobile += "<td style='border: 1px solid black;padding: 5px 5px 5px 5px;text-align:center'><div class='investView_l'  style='text-align: left;width: auto;text-wrap: auto;line-height: 20px;'><strong>Subject Code: </strong><br>" + Ress_subjectCodeArr[i] + "<br><strong>Subject Title: </strong><br>" + Ress_subjectTitleArr[i] + "</div></td>";

					vTmpSTR += "</tr>";
					vTmpSTRMobile += "</tr>";
					console.log("myflor")
				}

				vTmpSTR += '</table>';
				vTmpSTRMobile += '</table>';
				vTmpSTR += vTmpSTRMobile;
				vTmpSTR += '</fieldset>';
				vTmpSTR += "</div>";

			}

			vTmpSTR += '</fieldset>';
			vTmpSTR += "</div>";

			//END RE-REPEAT ATTEMPT APPLIED SUBJECT

			//DONT HAVE APPLIED SUBJECTS
			if (ss_SubLength == 0 && rr_SubLength == 0 && ReRep_SubLength == 0) {

				vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;' id='notAttempt'>";
				vTmpSTR += "<p>Please apply for the exam</p>";
				vTmpSTR += "</div>";
			}
			//END DONT HAVE APPLIED SUBJECTS



			vTmpSTR += "</div>";



		}


		vTmpSTR += '<div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">';
		//-------------------------PAYMENT DETAILS Tab START------------------------------------------

		vTmpSTR += "<div class='section1'>";
		vTmpSTR += "<fieldset  class='field'>";
		// vTmpSTR += "<legend class='fieldHead'>Payment Details</legend>";
		vTmpSTR += "<div style='clear:both'>";

		vTmpSTR += "<div style='margin-left:20px;'>";

		vTmpSTR += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";

		if (achedamicYearArr[0] <= "2019") {
			if (tCodeLength != 0) {
				/**Copy**/
				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
				vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Transactions through Manual Payment</legend>';

				for (var j = 0; j < batchdetailsLength; j++) {
					if (batchDegreeCodeArr[j] == degreeCodeArr[0] && batchYearArr[j] == achedamicYearArr[0]) {
						vTmpSTR += "<p style='text-align:left;font-weight: bold;color: #bd3303;'>Library Fee (includes in the 1st installment): " + batchLibraryFeeArr[j] + "</p>";
					}
				}
				/**Copy**/

				//else{	

				vTmpSTR += '<table  class="table table-bordered" style="margin-top: 1rem;">';
				vTmpSTR += "<tr style='border: 1px solid black;'>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Total Course Fee</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Paid Installments</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Total Paid Installments</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Remain to pay</th>";
				vTmpSTR += "</tr>";

				vTmpSTR += "<tr style='border: 1px solid black;'>";

				var totFee = 0;



				for (var j = 0; j < batchdetailsLength; j++) {
					if (batchDegreeCodeArr[j] == degreeCodeArr[0] && batchYearArr[j] == achedamicYearArr[0]) {
						//alert(batchDegreeCodeArr[j]);												
						totFee = parseInt(batchCourseFeeArr[j]);
						/**Copy**/
						totFee = totFee + parseInt(batchLibraryFeeArr[j]);
						/**Copy**/
					}
				}

				var feeCatCount = 0;
				for (var i = 0; i < tCodeLength; i++) {
					if (tCodeArr.indexOf(tCodeArr[i]) == tCodeArr.lastIndexOf(tCodeArr[i]) || (tCodeArr.indexOf(tCodeArr[i]) != tCodeArr.lastIndexOf(tCodeArr[i]) && tCodeArr.indexOf(tCodeArr[i]) == i)) {
						if (feeCatArr[i] != feeCatArr[i - 1]) {
							for (var j = 0; j < tCodeLength; j++) {
								if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j]) == j)) {
									if (feeCatArr[i] == feeCatArr[j]) {
										feeCatCount++;
									}
								}
							}

							vTmpSTR += "<td id='tot_courseFee' style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' rowspan=" + feeCatCount + ">" + totFee.toLocaleString() + "</td>";//"+feeCatArr[i]+"
							feeCatCount = 0;
						}
						vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' >" + parseInt(amountArr[i]).toLocaleString() + "</td>";
						totalAmountPaid = 0;
						if (feeCatArr[i] != feeCatArr[i - 1]) {
							for (var j = 0; j < tCodeLength; j++) {
								if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j]) == j)) {
									if (feeCatArr[i] == feeCatArr[j]) {
										feeCatCount++;
										var n = Number(amountArr[j]);
										totalAmountPaid = totalAmountPaid + n;
									}
								}
							}
							//var remainamount1 = parseInt(document.getElementById('tot_courseFee').value);
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' rowspan=" + feeCatCount + " >" + totalAmountPaid.toLocaleString() + "</td>";
							var remainamount2 = totFee - totalAmountPaid;
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' rowspan=" + feeCatCount + ">" + remainamount2.toLocaleString() + "</td>";
							totalAmountPaid = 0;
						}
					}
					vTmpSTR += "</tr>";
				}
				vTmpSTR += "</table>";
			}
			else {
				vTmpSTR += '<p>Payment Details not available</p>';
			}
			vTmpSTR += '</fieldset>';
		}
		//-----------------------------------------------------------------------------------------------------------------

		//---For 2020 and forward-------------------------------------------------------------------------------
		else if (achedamicYearArr[0] >= "2020") { //& IncomeSourceCodeLength != 0

			if (tCodeLength != 0) {

				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
				vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Transactions through Manual Payment</legend>';

				/**Copy**/
				for (var j = 0; j < batchdetailsLength; j++) {
					if (batchDegreeCodeArr[j] == degreeCodeArr[0] && batchYearArr[j] == achedamicYearArr[0]) {
						vTmpSTR += "<p style='text-align:left;font-weight: bold;    color: #bd3303;'>Library Fee (includes in the 1st installment): " + batchLibraryFeeArr[j] + "</p>";
					}
				}
				/**Copy**/

				//else{	


				vTmpSTR += '<table class="table table-bordered" style="margin-top: 1rem;">';
				vTmpSTR += "<tr style='border: 1px solid black;'>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Total Course Fee</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Paid Installments</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Total Paid Installments</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Remain to pay</th>";
				vTmpSTR += "</tr>";


				vTmpSTR += "<tr style='border: 1px solid black;'>";

				var totFee = 0;



				for (var j = 0; j < batchdetailsLength; j++) {
					if (batchDegreeCodeArr[j] == degreeCodeArr[0] && batchYearArr[j] == achedamicYearArr[0]) {
						//alert(batchDegreeCodeArr[j]);												
						totFee = parseInt(batchCourseFeeArr[j]);
						/**Copy**/
						totFee = totFee + parseInt(batchLibraryFeeArr[j]);
						/**Copy**/
					}
				}

				var feeCatCount = 0;
				for (var i = 0; i < tCodeLength; i++) {
					if (tCodeArr.indexOf(tCodeArr[i]) == tCodeArr.lastIndexOf(tCodeArr[i]) || (tCodeArr.indexOf(tCodeArr[i]) != tCodeArr.lastIndexOf(tCodeArr[i]) && tCodeArr.indexOf(tCodeArr[i]) == i)) {
						if (feeCatArr[i] != feeCatArr[i - 1]) {
							for (var j = 0; j < tCodeLength; j++) {
								if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j]) == j)) {
									if (feeCatArr[i] == feeCatArr[j]) {
										feeCatCount++;
									}
								}
							}

							vTmpSTR += "<td id='tot_courseFee' style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' rowspan=" + feeCatCount + ">" + totFee.toFixed(2).toLocaleString() + "</td>";//"+feeCatArr[i]+"
							feeCatCount = 0;
						}
						vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' >" + parseInt(amountArr[i]).toFixed(2).toLocaleString() + "</td>";
						totalAmountPaid = 0;
						if (feeCatArr[i] != feeCatArr[i - 1]) {
							for (var j = 0; j < tCodeLength; j++) {
								if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j]) == j)) {
									if (feeCatArr[i] == feeCatArr[j]) {
										feeCatCount++;
										var n = Number(amountArr[j]);
										totalAmountPaid = totalAmountPaid + n;
									}
								}
							}
							//var remainamount1 = parseInt(document.getElementById('tot_courseFee').value);
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' rowspan=" + feeCatCount + " >" + totalAmountPaid.toFixed(2).toLocaleString() + "</td>";



							var remainamount2 = totFee - totalAmountPaid;
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' rowspan=" + feeCatCount + ">" + remainamount2.toFixed(2).toLocaleString() + "</td>";
							totalAmountPaid = 0;



						}
					}
					vTmpSTR += "</tr>";
				}
				vTmpSTR += "</table>";
				vTmpSTR += '</fieldset>';
			}
			else {
				vTmpSTR += '<p></p>';
			}

			if (IncomeSourceCodeLength != 0) {


				vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
				vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Transactions through 16 Digit Code</legend>';
				vTmpSTR += '<div class="alert alert-warning border-left border-4" role="alert" style="background-color: #fff8e1; border-color: #ffc107;">';
				vTmpSTR += '<h5 class="mb-3"><span style="font-size: 1.2rem;">🔔</span> <strong>Important Notice</strong></h5>';
				vTmpSTR += '<p>Please note that the <strong>Course Fee (Total)</strong>, <strong>Installments</strong>, <strong>Installment Amount</strong>, <strong>Total Paid Installments</strong>, and <strong>Due Amount</strong> displayed in the system are applicable only for <strong>local students</strong>.</p>';
				vTmpSTR += '<p>For <strong>foreign student</strong> fee details and related information, kindly contact the <strong>Faculty of Graduate Studies / Finance Division</strong> at: 📞 +94 112 903 528, 📞 +94 112 903 786</p>';
				vTmpSTR += '<p>We are currently in the process of upgrading the system to support <strong>USD payments</strong>, and this feature will be available soon. We apologize for any inconvenience caused and appreciate your understanding.</p>';
				vTmpSTR += '</div>';


				vTmpSTR += '<table class="table table-bordered" style="width:auto;    margin: auto;">';
				vTmpSTR += "<tr style='border: 1px solid black;'>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Cost Component</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Amount (LKR)</th>";
				vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Payment Deadline</th>";

				vTmpSTR += "</tr>";

				vTmpSTR += '<tbody>';

				let indexArray = IncomeSourceCodeArr
					.map((value, index) => ({ value: parseInt(value), index: index }))
					.sort((a, b) => a.value - b.value)
					.map(x => x.index);


				for (let j = 0; j < indexArray.length; j++) {
					let i = indexArray[j];
					if (IncomeCategoryTitleArr[i] != "") {
						if (paymentTypeSource[i] == "coursefee") {
							vTmpSTR += "<tr style='border: 1px solid black;'>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:14px;text-align:center;'>" + IncomeCategoryTitleArr[i] + "</td>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:14px;text-align:center;'>" + (parseInt(IncomeCategoryValueArr[i]).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</td>";
							if (paymentDeadline[i] && paymentDeadline[i] != "0000-00-00") {
								vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:14px;text-align:center;'>" + paymentDeadline[i] + "</td>";
							} else {
								vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:14px;text-align:center;'>-</td>";
							}
							vTmpSTR += '</tr>';
						}
					}
				}

				vTmpSTR += '</tbody>';
				vTmpSTR += '</table>';


				//-----------------------------------------------------------------------------------------------------------------

				//-------------------------new payment details view with 16 digit code------------------------------------------------------------
				if (RefNoLength != 0) {



					vTmpSTR += '<table class="table table-bordered" style="width:auto;margin-top:2rem">';
					vTmpSTR += "<tr style='border: 1px solid black;'>";
					vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Reference Number</th>";
					vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Paymant Category</th>";
					vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;width:250px'>Voucher Generated Date & Time</th>";
					vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Installments Amount</th>";
					vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Paid Date</th>";
					vTmpSTR += "</tr>";



					vTmpSTR += "<tr style='border: 1px solid black;'>";

					var totalFee = 0;

					for (j = 0; j < IncomeSourceCodeLength; j++) {
						if (IncomeCategoryTitleArr[j] != "" & IncomeCategoryTitleArr[j] == "Course fee - Total") {
							totalFee = parseInt(IncomeCategoryValueArr[j]);
						}

					}

					var PayCatCount = 0;
					for (var i = 0; i < RefNoLength; i++) {
						if (Pay_RefNoArr.indexOf(Pay_RefNoArr[i]) == Pay_RefNoArr.lastIndexOf(Pay_RefNoArr[i]) || (Pay_RefNoArr.indexOf(Pay_RefNoArr[i]) != Pay_RefNoArr.lastIndexOf(Pay_RefNoArr[i]) && Pay_RefNoArr.indexOf(Pay_RefNoArr[i]) == i)) {
							PayCatCount++;
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + Pay_RefNoArr[i] + "</td>"; // rowspan="+PayCatCount+" 
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + PayTitileArr[i] + "</td>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + Pay_Time_StampArr[i] + "</td>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + parseInt(Pay_amountArr[i]).toFixed(2).toLocaleString() + "</td>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + Response_Progress_TimeArr[i] + "</td>";
							PayCatCount = 0;
						}

						vTmpSTR += "</tr>";
					}


					totalAmountPaidStu = 0;


					for (var j = 0; j < RefNoLength; j++) {
						if (Pay_RefNoArr.indexOf(Pay_RefNoArr[j]) == Pay_RefNoArr.lastIndexOf(Pay_RefNoArr[j]) || (Pay_RefNoArr.indexOf(Pay_RefNoArr[j]) != Pay_RefNoArr.lastIndexOf(Pay_RefNoArr[j]) && Pay_RefNoArr.indexOf(Pay_RefNoArr[j]) == j)) {

							PayCatCount++;
							var n = Number(Pay_amountArr[j]);
							if (Response_Progress_TimeArr[j] == "0000-00-00" & Response_ProgressArr[j] == " ") {
								totalAmountPaidStu = 0;
							}
							if (Response_Progress_TimeArr[j] != "0000-00-00" & Response_ProgressArr[j] == "1") {
								if (PayTypeArr[j] == "coursefee") {
									totalAmountPaidStu = totalAmountPaidStu + n;
								}
							}

						}
					}
					vTmpSTR += "<tr style='border: 1px solid black;'>";
					vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' colspan='3'><strong>Total Paid Installments</strong></td>";
					vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'colspan='3'>" + parseInt(totalAmountPaidStu).toFixed(2).toLocaleString() + "</td>";
					vTmpSTR += "</tr>";

					if (tCodeLength != 0) {
						var totFee = 0

						for (var j = 0; j < batchdetailsLength; j++) {
							if (batchDegreeCodeArr[j] == degreeCodeArr[0] && batchYearArr[j] == achedamicYearArr[0]) {

								totFee = parseInt(batchCourseFeeArr[j]);
								totFee = totFee + parseInt(batchLibraryFeeArr[j]);

							}
						}
						var feeCatCount = 0;
						for (var i = 0; i < tCodeLength; i++) {
							if (tCodeArr.indexOf(tCodeArr[i]) == tCodeArr.lastIndexOf(tCodeArr[i]) || (tCodeArr.indexOf(tCodeArr[i]) != tCodeArr.lastIndexOf(tCodeArr[i]) && tCodeArr.indexOf(tCodeArr[i]) == i)) {
								if (feeCatArr[i] != feeCatArr[i - 1]) {
									for (var j = 0; j < tCodeLength; j++) {
										if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j]) == j)) {
											if (feeCatArr[i] == feeCatArr[j]) {
												feeCatCount++;
											}
										}
									}

									var totalAmountPaid = 0;
									if (feeCatArr[i] != feeCatArr[i - 1]) {
										for (var j = 0; j < tCodeLength; j++) {
											if (tCodeArr.indexOf(tCodeArr[j]) == tCodeArr.lastIndexOf(tCodeArr[j]) || (tCodeArr.indexOf(tCodeArr[j]) != tCodeArr.lastIndexOf(tCodeArr[j]) && tCodeArr.indexOf(tCodeArr[j]) == j)) {
												if (feeCatArr[i] == feeCatArr[j]) {
													feeCatCount++;
													var n = Number(amountArr[j]);
													totalAmountPaid = totalAmountPaid + n;

												}
											}
										}
										var remainamount2 = totFee - totalAmountPaid;

									}
								}
							}
						}
						console.log(remainamount2);
						console.log(totalAmountPaidStu);


						if (remainamount2 == 0) {
							var remainamountStu = 0;
							vTmpSTR += "<tr style='border: 1px solid black;'>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' colspan='3'><strong>Due Amount</strong></td>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' colspan='3'>0</td>";
							vTmpSTR += "</tr>";
							totalAmountPaidStu = 0;
						}
						else {
							var remainamountStu = remainamount2 - totalAmountPaidStu;
							vTmpSTR += "<tr style='border: 1px solid black;'>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' colspan='3'><strong>Due Amount</strong></td>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' colspan='3'>" + parseInt(remainamountStu).toFixed(2).toLocaleString() + "</td>";
							vTmpSTR += "</tr>";
							totalAmountPaidStu = 0;
						}
					}

					else {
						var remainamountStu = totalFee - totalAmountPaidStu;
						vTmpSTR += "<tr style='border: 1px solid black;'>";
						vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' colspan='3'><strong>Due Amount</strong></td>";
						vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' colspan='3'>" + parseInt(remainamountStu).toFixed(2).toLocaleString() + "</td>";
						vTmpSTR += "</tr>";
						totalAmountPaidStu = 0;
					}

					vTmpSTR += "</table>";
				}
				else {
					vTmpSTR += '<p></p>';
				}

				vTmpSTR += '</fieldset>';


			}
		}

		else {
			vTmpSTR += '<p>Payment Details not available</p>';
		}

		vTmpSTR += "</div>";
		vTmpSTR += "</div>";
		vTmpSTR += "</fieldset>";
		vTmpSTR += "</div>";

		//-------------------------PAYMENT DETAILS Tab END------------------------------------------



		//-------------------------Transter Student DETAILS Tab------------------------------------------

		vTmpSTR += '</div>';
		vTmpSTR += '<div class="tab-pane fade" id="v-pills-tdetails" role="tabpanel" aria-labelledby="v-pills-tdetails-tab">';
		vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
		vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Student Transfer Details</legend>';

		var newtransfer = "";
		trC = 0;
		for (var i = 0; i < transferIDLength; i++) {
			if (TransferapplicationNoArr[i] == dataRep["applicationNo"]) {
				trC++;
			}
		}

		newtransfer += "<div class='col-md-12'><label>Transfer Times :-" + trC + " </label></div>";

		if (trC != 0) {
			newtransfer += "<table style='border-collapse: collapse;border: 1px solid black;margin: auto;'>";
			newtransfer += "<tr style='border: 1px solid black;'>";
			newtransfer += "<th style='border: 1px solid black;width:240px;font-size:12px;text-align: center;padding: 10px;'>Student Number(before Transfer)</th>";
			newtransfer += "<th style='border: 1px solid black;width:240px;font-size:12px;text-align: center;padding: 10px;'>Student Number(After Transfer)</th>";
			newtransfer += "<th style='border: 1px solid black;width:240px;font-size:12px;text-align: center;padding: 10px;'>Type</th>";
			newtransfer += "</tr>";
			newtransfer += "<tr style='border: 1px solid black;'>";

			for (var i = 0; i < transferIDLength; i++) {
				if (TransferapplicationNoArr[i] == dataRep["applicationNo"]) {
					newtransfer += "<td style='border: 1px solid black;width:240px;font-size:12px;text-align: center;padding: 10px;'>" + oldStudentNoArr[i] + "</td>";

					if (TransferstudentNoArr[i] == 'Special Transfer') {
						newtransfer += "<td style='border: 1px solid black;width:240px;font-size:12px;text-align: center;padding: 10px;'>" + oldStudentNoArr[i] + "</td>";
					} else {
						newtransfer += "<td style='border: 1px solid black;width:240px;font-size:12px;text-align: center;padding: 10px;'>" + TransferstudentNoArr[i] + "</td>";
					}

					if (oldStudentNoArr[i] != TransferstudentNoArr[i] && TransferstudentNoArr[i] != 'Special Transfer') {
						newtransfer += "<td style='border: 1px solid black;width:240px;font-size:12px;text-align: center;padding: 10px;'>" + transferTypeArr[i] + "</td>";
					} else if (TransferstudentNoArr[i] == 'Special Transfer') {
						newtransfer += "<td style='border: 1px solid black;width:240px;font-size:12px;text-align: center;padding: 10px;'>Special Transfer</td>";
					} else {
						newtransfer += "<td style='border: 1px solid black;width:240px;font-size:12px;text-align: center;padding: 10px;'>Degrade Degree</td>";
					}
				}
				newtransfer += "</tr>";

			}

			newtransfer += "</table>";
		}

		vTmpSTR += "<div class='row' id='displayTransferTimes'>" + newtransfer + "</div>";

		vTmpSTR += '</fieldset>';


		vTmpSTR += '</div>';


		vTmpSTR += '</div>';
		//-------------------------Transter Student DETAILS Tab End------------------------------------------


		vTmpSTR += '</div></div>';
		vTmpSTR += '</div>';



		vTmpSTR += "</div>";
		vTmpSTR += '</div>';

		vTmpSTR += '</div>';
		vTmpSTR += '</div>';
		vTmpSTR += '</div>';

		if (studentTmpi != -1) {
			dataRep["Fcode"] = facultyCodeArr[studentTmpi];
			dataRep["degreeCode"] = degreeCodeArr[studentTmpi];
			dataRep["academicYear"] = achedamicYearArr[studentTmpi];
		}


		//----------Tab Menues END--------------

		// document.getElementById('viewProfileBtn').style.display='none';


		/***************************INACTIVE PROFILE*****************************************/
		// for(var i=0; i<oldStudentNoLength; i++){
		// 	if (oldStudentNoArr.indexOf(oldStudentNoArr[i]) == oldStudentNoArr.lastIndexOf(oldStudentNoArr[i]) || (oldStudentNoArr.indexOf(oldStudentNoArr[i]) != oldStudentNoArr.lastIndexOf(oldStudentNoArr[i]) && oldStudentNoArr.indexOf(oldStudentNoArr[i])==i)){
		// 		if (oldStudentNoArr[i]==dataRep["studentNo"] && oldStudentNoArr[i]!=TransferstudentNoArr[i] && TransferstudentNoArr[i] !='Special Transfer'){					
		// 			document.getElementById('displayInacive').style.display='block';//
		// 			document.getElementById('transferDisplay01').style.display='none';
		// 			checkInactiveCount++;
		// 		}
		// 	}
		// }
		/***************************INACTIVE PROFILE*****************************************/

	}
	return vTmpSTR;

}
//---------------------------------------------SET DATA START END-------------------------------------------------



function updateResultStatusProfile(statusComEle) {
	let objStudentData = statusComEle.getAttribute("data-student");
	let data = JSON.parse(objStudentData);
	Swal.fire({
		title: 'Are you sure?',
		text: 'This action released results you select!',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, Released!',
		cancelButtonText: 'No, Cancel!',
	}).then((result) => {
		if (result.isConfirmed) {

			var postData = {
				action: "updateIndividualResultStatus",
				attempt: data.attempt,
				studentId: data.studentId,
				degreeCode: data.degreeCode,
				achedamicYear: data.achedamicYear,
				subjectName: data.subjectName,
				re_repeat_attempt_time: data.re_repeat_attempt_time,
				Status: statusComEle.value,
				authcode: authcode,
				username: dataRep['userId'],
			};

			$.ajax({
				type: 'POST',
				url: 'rules/insertMarks.php', // Replace with your server-side script URL
				data: postData,
				dataType: 'json',
				success: function (response) {
					// if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar') {
					// 	$('#resultsApprove' + data.studentId).prop("disabled", false);
					// }
					if (statusComEle.value == 0) {
						//send sms as released result
						const postDataForGetStudentData = {
							action: "data4StudentProfileDetails",
							st_no: data.studentId,
							authcode: authcode,
							username: dataRep['userId']
						};
						sendNotificationResultRelease(postDataForGetStudentData, data.subjectName);

					}
				},
				error: function (error) {
					console.log(error)
				}
			});

			statusComEle.style.backgroundColor = statusBackGroundColor(statusComEle.value);
		}
	});

}


function displayTabDiv(divName, buttonName) {

	document.getElementById('PersonnelDetails').style.display = 'none';
	document.getElementById('Qualifications').style.display = 'none';
	document.getElementById('profqualification').style.display = 'none';
	document.getElementById('workExperience').style.display = 'none';
	document.getElementById('referies').style.display = 'none';
	document.getElementById('DocumenNames').style.display = 'none';
	document.getElementById('Notes').style.display = 'none';

	document.getElementById('personalDetailsbutton').style.backgroundImage = "url(img/button.png)";
	document.getElementById('qalificationalDetailsbutton').style.backgroundImage = "url(img/button.png)";
	document.getElementById('professionalqalification').style.backgroundImage = "url(img/button.png)";
	document.getElementById('wrkExperience').style.backgroundImage = "url(img/button.png)";
	document.getElementById('applicantsreferies').style.backgroundImage = "url(img/button.png)";
	document.getElementById('notesDetailsbutton').style.backgroundImage = "url(img/button.png)";
	document.getElementById('documentDetailsbutton').style.backgroundImage = "url(img/button.png)";

	if (dataRep['searchType'] == 'studentSearch') {
		document.getElementById('examresultsdiv').style.display = 'none';
		document.getElementById('payment').style.display = 'none';
		document.getElementById('tdetails').style.display = 'none';

		document.getElementById('exmresults').style.backgroundImage = "url(img/button.png)";
		document.getElementById('paymentDetailsbutton').style.backgroundImage = "url(img/button.png)";
		document.getElementById('tdetailsbutton').style.backgroundImage = "url(img/button.png)";
	}

	document.getElementById(divName).style.display = 'block';
	document.getElementById(buttonName).style.backgroundImage = "url(img/buttonoff.png)";
}


//---------------------------------------------GENERATE FUNCTION FUNCTION START-----------------------------------

function generateDocuments(dID) {
	var documentID = dID.id;
	var documentID = documentID.substr(documentID.indexOf("studentBttn") + 11);

	for (var i = 0; i < documentIDLength; i++) {
		if (i == documentID) {
			var docName = documentNameArr[i]
		}
	}

	if (document.getElementById('studentBttn' + documentID).value == '+') {
		document.getElementById('documentInfo' + documentID).innerHTML = document.getElementById('documentInfo' + documentID).innerHTML.replace = "";

		var newstr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		var rowCount = 1;

		for (var i = 0; i < documentIDLength; i++) {
			if (documentNameArr[i] == docName && sequenceNoArr[i] != sequenceNoArr[i - 1]) {
				rowCount++;
			}
		}

		for (var i = 0; i < documentIDLength; i++) {

			//	if (documentNameArr.indexOf(documentNameArr[i]) == documentNameArr.lastIndexOf(documentNameArr[i]) || (documentNameArr.indexOf(documentNameArr[i]) != documentNameArr.lastIndexOf(documentNameArr[i]) && documentNameArr.indexOf(documentNameArr[i])==i)){
			//alert(dataRep["studentNo"]);
			//if(itemValueArr[i] != dataRep["studentNo"]){                                                	
			//alert(itemValueArr[i]);
			//alert(dataRep["studentNo"]);
			if (documentNameArr[i] == docName) {
				newstr += "<div class='info'   name='testInfo" + i + "'>";
				if (sequenceNoArr[i] != sequenceNoArr[i - 1]) {
					rowCount--;//documentItemIDArr[i]==documentID1Arr[j] &&documentName1Arr[j]== &&
				}

				if (sequenceNoArr[i] != sequenceNoArr[i - 1] || documentNameArr[i] != documentNameArr[i - 1]) {
					newstr += "<div id='myDiv' class='viewArea' style='clear:none;background-color:#ff9999;width:810px;height:auto' >";
					for (var j = 0; j < dataItemIDLength; j++) {//
						//if (dataItemNameArr.indexOf(dataItemNameArr[j]) == dataItemNameArr.lastIndexOf(dataItemNameArr[j]) || (dataItemNameArr.indexOf(dataItemNameArr[j]) != dataItemNameArr.lastIndexOf(dataItemNameArr[j]) && dataItemNameArr.indexOf(dataItemNameArr[j])==j)){
						if (documentName1Arr[j] == docName && sequenceNoArr[i] == sequenceNo1Arr[j] & dataItemIDArr[j] != '1' & dataItemIDArr[j] != '2' & dataItemIDArr[j] != '3' & dataItemIDArr[j] != '4') {//
							// newstr +=" <label>"+dataItemNameArr[j]+":"+itemValueArr[j]+"</label><br>";
							// newstr +="<div class='investLabel_l' style='clear:none;'>"+dataItemNameArr[j]+":"+itemValueArr[j]+"</div><br>";
							newstr += "<div class='longIdentifier' style='clear:none;width:auto;font-color:black;'><font color='black' size='2'>" + dataItemNameArr[j] + ":</font></div>";
							newstr += "<div class='viewArea' style='clear:none;'>" + itemValueArr[j] + "</div>";
						}
					}
					newstr += "</div>";
					newstr += "<br>";
					newstr += "<div id='topics1' class='info'></div>";
					//newstr +="<div id='topics1' class='info'>&nbsp;</div>";
					//newstr +="<div class='investLabel_l'  style='width:30px'>&nbsp;</div>";
					newstr += "<div class='investLabel_l'  style='width:160px'>Document</div>";
					newstr += "<div class='investLabel_l'  style='width:160px'>Send To</div>";
					newstr += "<div class='investLabel_l' style='width:80px;text-align:left'>Date</div>";
					newstr += "<div class='investLabel_l'  style='width:75px;text-align:left'>Decision</div>";
					newstr += "<div class='investLabel_l'  style='width:80px;text-align:left'>Number</div>";
					newstr += "<div class='investLabel_l'  style='width:160px'>Remarks</div>";
					newstr += "<br>";
				}

				newstr += "<div class='investView_l'  style='width:160px' name='studentName" + inum + "' id='studentName" + inum + "' onchange='dataRep[this.name]=this.value;'>";
				newstr += documentNameArr[i] + "-" + rowCount + "</div>";

				newstr += "<div class='investView_l'  style='width:160px' name='studentName" + inum + "' id='studentName" + inum + "' onchange='dataRep[this.name]=this.value;'>";
				newstr += decisionMakingPointNameArr[i] + "</div>";

				newstr += "<div class='investView_l'  style='width:80px;text-align:left' name='studentName" + inum + "' id='studentName" + inum + "' onchange='dataRep[this.name]=this.value;'>";
				newstr += dateArr[i] + "</div>";

				newstr += "<div  class='investView_l'   style='width:75px;text-align:left' name='applicationNo" + inum + "' id='applicationNo1" + inum + "' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
				newstr += decisionArr[i] + "</div>";

				newstr += "<div class='investView_l'  style='width:80px;text-align:left' name='studentName" + inum + "' id='studentName" + inum + "' onchange='dataRep[this.name]=this.value;'>";
				newstr += numberArr[i] + "</div>";

				newstr += "<div  class='investView_l'   style='width:160px' name='applicationNo" + inum + "' id='applicationNo1" + inum + "' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
				newstr += remarksArr[i] + "</div>";


				newstr += "</div><br>";
			}
		}
		document.getElementById('documentInfo' + documentID).innerHTML = document.getElementById('documentInfo' + documentID).innerHTML.replace = "";
		document.getElementById('documentInfo' + documentID).innerHTML += newstr;
	}

	if (document.getElementById('studentBttn' + documentID).value == '-') {
		document.getElementById('documentInfo' + documentID).innerHTML = document.getElementById('documentInfo' + documentID).innerHTML.replace = "";
	}

	var val = document.getElementById('studentBttn' + documentID)
	if (val.value == "+") {
		val.value = "-";
	} else {
		val.value = "+";
	}

}
//---------------------------------------------GENERATE FUNCTION FUNCTION END-----------------------------------

function transferTimes() {
	var newtransfer = "";
	trC = 0;
	document.getElementById('displayTransferTimes').innerHTML = document.getElementById('displayTransferTimes').innerHTML.replace = "";

	for (var i = 0; i < transferIDLength; i++) {
		if (oldStudentNoArr.indexOf(oldStudentNoArr[i]) == oldStudentNoArr.lastIndexOf(oldStudentNoArr[i]) || (oldStudentNoArr.indexOf(oldStudentNoArr[i]) != oldStudentNoArr.lastIndexOf(oldStudentNoArr[i]) && oldStudentNoArr.indexOf(oldStudentNoArr[i]) == i)) {
			if (TransferapplicationNoArr[i] == dataRep["applicationNo"]) {
				trC++;
			}
		}
	}

	newtransfer += "<label><font size='2' color='blue'>Transfer Times :-" + trC + " </label>";

	if (trC != 0) {
		newtransfer += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newtransfer += "<tr style='border: 1px solid black;'>";
		newtransfer += "<th style='border: 1px solid black;width:200px;font-size:12px;'>Student Number(before Transfer)</th>";
		newtransfer += "<th style='border: 1px solid black;width:200px;font-size:12px;'>Student Number(After Transfer)</th>";
		newtransfer += "<th style='border: 1px solid black;width:200px;font-size:12px;'>Type</th>";
		newtransfer += "</tr>";
		newtransfer += "<tr style='border: 1px solid black;'>";

		for (var i = 0; i < transferIDLength; i++) {
			if (oldStudentNoArr.indexOf(oldStudentNoArr[i]) == oldStudentNoArr.lastIndexOf(oldStudentNoArr[i]) || (oldStudentNoArr.indexOf(oldStudentNoArr[i]) != oldStudentNoArr.lastIndexOf(oldStudentNoArr[i]) && oldStudentNoArr.indexOf(oldStudentNoArr[i]) == i)) {
				if (TransferapplicationNoArr[i] == dataRep["applicationNo"]) {
					newtransfer += "<td style='border: 1px solid black;width:200px;font-size:12px;'>" + oldStudentNoArr[i] + "</td>";

					if (TransferstudentNoArr[i] == 'Special Transfer') {
						newtransfer += "<td style='border: 1px solid black;width:200px;font-size:12px;'>" + oldStudentNoArr[i] + "</td>";
					} else {
						newtransfer += "<td style='border: 1px solid black;width:200px;font-size:12px;'>" + TransferstudentNoArr[i] + "</td>";
					}

					if (oldStudentNoArr[i] != TransferstudentNoArr[i] && TransferstudentNoArr[i] != 'Special Transfer') {
						newtransfer += "<td style='border: 1px solid black;width:200px;font-size:12px;'>" + transferTypeArr[i] + "</td>";
					} else if (TransferstudentNoArr[i] == 'Special Transfer') {
						newtransfer += "<td style='border: 1px solid black;width:200px;font-size:12px;'>Special Transfer</td>";
					} else {
						newtransfer += "<td style='border: 1px solid black;width:200px;font-size:12px;'>Degrade Degree</td>";
					}
				}
				newtransfer += "</tr>";
			}
		}

		newtransfer += "</table>";
	}
	document.getElementById('displayTransferTimes').innerHTML += newtransfer;
}

//---------------------------------------------------DISPLY PREVIUS TRANSFER DETAILS FUNCTION END--------------------------	

//---------------------------------------------------DISPLY PROGRAMMES IN TRANSFER FUNCTION START-----------------------------------
function getProgrames() {

	document.getElementById('selectedProgramme').innerHTML = document.getElementById('selectedProgramme').innerHTML.replace = "";
	var programmeList = "";;
	for (i = 0; i < trdegreeCodeLength; i++) {
		if (trdegreeCodeArr.indexOf(trdegreeCodeArr[i]) == trdegreeCodeArr.lastIndexOf(trdegreeCodeArr[i]) || (trdegreeCodeArr.indexOf(trdegreeCodeArr[i]) != trdegreeCodeArr.lastIndexOf(trdegreeCodeArr[i]) && trdegreeCodeArr.indexOf(trdegreeCodeArr[i]) == i)) {
			if (trdegreeCodeArr[i] != "" & trdegreeCodeArr[i] != trdegreeCodeArr[i - 1] && trfacultyCodeArr[i] == dataRep["Fcode"]) {
				programmeList += "<option> " + trdegreeTitleArr[i] + "</option>";
			}
		}
	}
	document.getElementById('selectedProgramme').innerHTML = programmeList;
}
//---------------------------------------------------DISPLY PROGRAMMES IN TRANSFER FUNCTION END-----------------------------------

//---------------------------------------------------DISPLY PROGRAM TYPES FUNCTION START-----------------------------------

function getProgramType() {
	var programmeTypeList = "";
	document.getElementById('selectedTransferType').innerHTML = document.getElementById('selectedTransferType').innerHTML.replace = "";
	programmeTypeList += "<option>Please scroll down to see the records</option>";

	if (dataRep["Fcode"] == "FAC02") {
		programmeTypeList += "<option>Special Transfer</option>";
		programmeTypeList += "<option>Degrade Degree</option>";
		programmeTypeList += "<option>Programme Transfer</option>";
		programmeTypeList += "<option>Medium Transfer</option>";
		programmeTypeList += "<option>Batch Transfer</option>";
	}

	if (dataRep["Fcode"] == "FAC03") {
		programmeTypeList += "<option>Mssc to MA</option>";
		programmeTypeList += "<option>MA to Mssc</option>";
		programmeTypeList += "<option>Special Transfer</option>";
		programmeTypeList += "<option>Degrade Degree</option>";
		programmeTypeList += "<option>Programme Transfer</option>";
		programmeTypeList += "<option>Medium Transfer</option>";
	}

	if (dataRep["Fcode"] == "FAC04") {
		programmeTypeList += "<option>Special Transfer</option>";
		programmeTypeList += "<option>Degrade Degree</option>";
		programmeTypeList += "<option>Programme Transfer</option>";
		programmeTypeList += "<option>Medium Transfer</option>";
	}

	if (dataRep["Fcode"] == "FAC01") {
		programmeTypeList += "<option>Special Transfer</option>";
		programmeTypeList += "<option>Degrade Degree</option>";
	}

	document.getElementById('selectedTransferType').innerHTML = programmeTypeList;
}
//---------------------------------------------------DISPLY PROGRAM TYPES FUNCTION END-----------------------------------

//---------------------------------------------------DISPLY DEGRADE TYPES FUNCTION START-----------------------------------

function AddReleventType() {

	var degradeTypeList = "";
	var labelName = "";
	document.getElementById('TypeLabel').innerHTML = document.getElementById('TypeLabel').innerHTML.replace = "";
	document.getElementById('degradeType01').innerHTML = document.getElementById('degradeType01').innerHTML.replace = "";

	if (document.getElementById('selectedTransferType').value == 'Special Transfer') {
		labelName += "Special Transfer Type";
	}
	if (document.getElementById('selectedTransferType').value == 'Degrade Degree') {
		labelName += "Degrade Type";
	}
	//alert(dataRep["Fcode"]);
	degradeTypeList = "<option>Please scroll down to see the records</option>";
	if (dataRep["Fcode"] == "FAC02" && document.getElementById('selectedTransferType').value == 'Special Transfer') {
		degradeTypeList += "<option>Two year degree to one year degree</option>";
		degradeTypeList += "<option>Two year degree to postgraduate diploma</option>";
		degradeTypeList += "<option>Two year degree to postgraduate certificate</option>";
		degradeTypeList += "<option>one year degree to postgraduate diploma</option>";
		degradeTypeList += "<option>one year degree to postgraduate certificate</option>";
	} else if (dataRep["Fcode"] == "FAC02" && document.getElementById('selectedTransferType').value != 'Special Transfer') {
		degradeTypeList += "<option>PhD to MPhil</option>";
		degradeTypeList += "<option>Two year degree to one year degree</option>";
		degradeTypeList += "<option>Two year degree to postgraduate diploma</option>";
		degradeTypeList += "<option>Two year degree to postgraduate certificate</option>";
		degradeTypeList += "<option>one year degree to postgraduate diploma</option>";
		degradeTypeList += "<option>one year degree to postgraduate certificate</option>";
	} else if (dataRep["Fcode"] == "FAC03") {
		degradeTypeList += "<option>Mssc to Postgraduate diploma</option>";
		degradeTypeList += "<option>Mssc to Postgraduate caertificate</option>";
		degradeTypeList += "<option>MA to Postgraduate diploma</option>";
		degradeTypeList += "<option>MA to Postgraduate caertificate</option>";
	} else if (dataRep["Fcode"] == "FAC04") {
		degradeTypeList += "<option>Two year degree to one year degree</option>";
		degradeTypeList += "<option>MA to Postgraduate diploma</option>";
		degradeTypeList += "<option>MA to Postgraduate caertificate</option>";
	} else if (dataRep["Fcode"] == "FAC01") {
		degradeTypeList += "<option>Two year degree to one year degree</option>";
		degradeTypeList += "<option>Two year degree to postgraduate diploma</option>";
		degradeTypeList += "<option>Two year degree to postgraduate certificate</option>";
		degradeTypeList += "<option>one year degree to postgraduate diploma</option>";
		degradeTypeList += "<option>one year degree to postgraduate certificate</option>";
	}
	document.getElementById('TypeLabel').innerHTML = labelName;
	document.getElementById('degradeType01').innerHTML = degradeTypeList;
}
//---------------------------------------------------DISPLY DEGRADE TYPES FUNCTION END-----------------------------------	

//--------------------------------------------------DISPLY DEGRADE DEGREE TYPE FUNCTION START----------------------------
function displaydegradeType() {
	if (document.getElementById('selectedTransferType').value == 'Degrade Degree' || document.getElementById('selectedTransferType').value == 'Special Transfer') {
		document.getElementById('degradeType').style.display = '';
		document.getElementById('mediumDiv').style.display = 'none';
		document.getElementById('programmeDiv').style.display = 'none';
		//document.getElementById('displayTransferYear').style.display='none'; 
	} else {
		document.getElementById('degradeType').style.display = 'none';
		//document.getElementById('displayTransferYear').style.display='none'; 	 
	}

	if (document.getElementById('selectedTransferType').value == 'Medium Transfer') {
		document.getElementById('mediumDiv').style.display = '';
		document.getElementById('programmeDiv').style.display = 'none';
		//document.getElementById('displayTransferYear').style.display='none'; 
	}

	if (document.getElementById('selectedTransferType').value != 'Medium Transfer' && document.getElementById('selectedTransferType').value != 'Degrade Degree' && document.getElementById('selectedTransferType').value != 'Special Transfer') {
		document.getElementById('mediumDiv').style.display = '';
		document.getElementById('programmeDiv').style.display = '';
		//document.getElementById('displayTransferYear').style.display='none'; 
	}
	if (document.getElementById('selectedTransferType').value == 'Batch Transfer') {
		document.getElementById('displayTransferYear').style.display = '';
		document.getElementById('programmeDiv').style.display = '';
		document.getElementById('degradeType').style.display = 'none';
		document.getElementById('mediumDiv').style.display = '';

	}
}
//--------------------------------------------------DISPLY DEGRADE DEGREE TYPE FUNCTION END----------------------------			
//---------------------------------------------------DISPLY RELEVENT RULS FUNCTION START--------------------------

var RulCount = 0;
var commDate = "";
var duration = "";
var CheckRules = "";
var DegreeCatArr = new Array();

function displayRelevantRules() {
	var newstr = "";

	document.getElementById('displayTransferRules').innerHTML = document.getElementById('displayTransferRules').innerHTML.replace = "";

	for (q = 0; q < coursecommenceLength; q++) {
		//if (commencedegreeCodeArr.indexOf(commencedegreeCodeArr[q]) == commencedegreeCodeArr.lastIndexOf(commencedegreeCodeArr[q]) || (commencedegreeCodeArr.indexOf(commencedegreeCodeArr[q]) != //commencedegreeCodeArr.lastIndexOf(commencedegreeCodeArr[q]) && commencedegreeCodeArr.indexOf(commencedegreeCodeArr[q])==q)){
		if (commencedegreeCodeArr[q] == dataRep["degreeCode"] && commenceacademicYearArr[q] == dataRep["academicYear"]) {
			commDate = coursecommenceArr[q];
			duration = durationArr[q];
			if (durationArr[q].substring(0, 1) == "1") {
				duration = 1;
			}
			if (durationArr[q].substring(0, 1) == "2") {
				duration = 2;
			}
			if (durationArr[q].substring(0, 1) == "3") {
				duration = 3;
			}
			if (durationArr[q].substring(0, 2) == "1-2") {
				duration = 2;
			}
		}
		//}
	}

	var endy = (commDate.split("-", 3)[commDate.split("-", 3).length - 3]);
	var endm = (commDate.split("-", 3)[commDate.split("-", 3).length - 2]);
	var endd = (commDate.split("-", 3)[commDate.split("-", 3).length - 1]);
	endy = parseInt(endy) + duration;
	endd = parseInt(endd) - 1;
	var EndDate = "";
	if (commDate != "") {
		var EndDate = endy + "-" + endm + "-" + endd;
	}

	var DegreeCatLegth = 0;

	for (var i = 0; i < educationPinLength; i++) {
		//if(dataRep["applicationNo"] == appNo){ //Specify the Qualification category
		if (educationFieldNameArr[i] == "Subject") {
			DegreeCatArr[DegreeCatLegth] = educationValueArr[i];
			DegreeCatLegth++;
		}
		//}
	}

	var amount = "";

	for (var i = 0; i < tCodeLength; i++) {
		if (tCodeArr.indexOf(tCodeArr[i]) == tCodeArr.lastIndexOf(tCodeArr[i]) || (tCodeArr.indexOf(tCodeArr[i]) != tCodeArr.lastIndexOf(tCodeArr[i]) && tCodeArr.indexOf(tCodeArr[i]) == i)) {
			if (paymentStudentArr[i] == dataRep["studentNo"] && feeCatArr[i] == 'Transfer fee') {
				amount = amountArr[i];
			}
		}
	}

	for (i = 0; i < ruleIDLength; i++) {
		//if (ruleIDArr.indexOf(ruleIDArr[i]) == ruleIDArr.lastIndexOf(ruleIDArr[i]) || (ruleIDArr.indexOf(ruleIDArr[i]) != ruleIDArr.lastIndexOf(ruleIDArr[i]) && ruleIDArr.indexOf(ruleIDArr[i])==i)){
		if (transferTypeArr[i] == document.getElementById('selectedTransferType').value && ruleTitleArr[i] != null) {
			if (ruleIDArr[i] == '2' || ruleIDArr[i] == '1') {
				newstr = "<div>";
				newstr = "<legend class='fieldHead'><u>Transfer Rules</u></legend>";
				newstr += "<input type='text' name='transferTypeText" + i + "' style='display:none;width:240px;' disabled='disabled'  id='transferTypeText" + i + "' value= " + ruleIDArr[i] + "  onchange='dataRep[this.name]=this.value;'>";
				newstr += "<label><font color='red' size='3'><i>* " + ruleTitleArr[i] + " &nbsp;&nbsp;</i></font><br><font color='black' size='2' >&nbsp;&nbsp;&nbsp;&nbsp;Start Date:" + commDate + "</font><br><font color='black' size='2' > &nbsp;&nbsp;&nbsp;&nbsp;End Date:" + EndDate + "</font></label>";
				newstr += "<label  id='warning' style='display:none'><font color='Red' size='3'>Warning</font></label><br>";

				if (ruleIDArr[i] == '2') {
					CheckRules = '2';
				} else {
					CheckRules = '1';
				}
			} else if (ruleIDArr[i] == '3') {
				newstr = "<div>";
				newstr = "<legend class='fieldHead'><u>Transfer Rules</u></legend>";
				newstr += "<input type='text' name='transferTypeText" + i + "' style='display:none;width:240px;' disabled='disabled'  id='transferTypeText" + i + "' value= " + ruleIDArr[i] + "  onchange='dataRep[this.name]=this.value;'>";
				newstr += "<label><font color='red' size='3'><i>* " + ruleTitleArr[i] + "</i></font><br/>";

				for (var c = 0; c < DegreeCatArr.length; c++) {
					if (c != DegreeCatLegth - 1) {
						newstr += "<font color='black' size='2' > " + DegreeCatArr[c] + "/</font></label><br/>";
					} else if (c == 0) {
						newstr += "<font color='black' size='2' >  Degree category:" + DegreeCatArr[c] + "/</font></label><br/>";
					} else {
						newstr += "<font color='black' size='2' > " + DegreeCatArr[c] + "</font></label><br/>";
					}

				}

			} else if (ruleIDArr[i] == '4') {
				newstr = "<div>";
				newstr = "<legend class='fieldHead'><u>Transfer Rules</u></legend>";
				newstr += "<input type='text' name='transferTypeText" + i + "' style='display:none;width:240px;' disabled='disabled'  id='transferTypeText" + i + "' value= " + ruleIDArr[i] + "  onchange='dataRep[this.name]=this.value;'>";
				if (amount != "") {
					newstr += "<label><font color='red' size='3'><i>* " + ruleTitleArr[i] + "</i></font><br/><font color='black' size='2' > &nbsp;&nbsp;Transfer fee " + amount + "Rs is Paid</font></label><br>";
				} else {
					newstr += "<label><font color='red' size='3'><i>* " + ruleTitleArr[i] + "</i></font><br/><font color='black' size='2' > &nbsp;&nbsp;Transfer fee is not paid</font></label><br>";
				}
			}
		}

		newstr += "</div>";
		RulCount++;
		// }
	}

	document.getElementById('displayTransferRules').innerHTML = newstr;
	document.getElementById('disrulefield').style.display = '';

}
//}
//---------------------------------------------------DISPLY RELEVENT RULS FUNCTION START--------------------------

//---------------------------------------------DISPLAY HISTORY FUNCTION START-----------------------------------	
function displayHistory(sNo) {
	var getID = sNo.id;
	var getlastChar = getID.substr(getID.indexOf("historybutton") + 13);
	getOldStudentNo = document.getElementById('oldStudentNo' + getlastChar).value;
	document.getElementById('studentNo').value = "";
	dataRep["studentNo"] = "";
	dataRep["studentNo"] = getOldStudentNo;
}
//---------------------------------------------DISPLAY HISTORY FUNCTION END-----------------------------------	


//-----------------------------------------------------TRANSFER DEATILS GENERATE FUNCTION START-----------------------------------------

var newStudentNo = "";
var selectedPrg = "";
function transferStudent01() {

	var commy = (commDate.split("-", 3)[commDate.split("-", 3).length - 3]);
	var commm = (commDate.split("-", 3)[commDate.split("-", 3).length - 2]);
	var commd = (commDate.split("-", 3)[commDate.split("-", 3).length - 1]);

	if (commd > document.getElementById('ReDateDD').value) {
		var reDate = parseInt(document.getElementById('ReDateDD').value) + 31;
		var reMonth = parseInt(document.getElementById('ReDateMM').value) - 1;
		var dateDiff = parseInt(reDate) - parseInt(commd);
	} else {
		var dateDiff = parseInt(document.getElementById('ReDateDD').value) - parseInt(commd);
		var reMonth = parseInt(document.getElementById('ReDateMM').value);
	}

	if (commm > reMonth) {
		reMonth = parseInt(document.getElementById('ReDateMM').value) + 12;
		var reYear = parseInt(document.getElementById('ReDateYYYY').value) - 1;
		var MonthDiff = parseInt(reMonth) - parseInt(commm);
	} else {
		var MonthDiff = parseInt(reMonth) - parseInt(commm);
		var reYear = parseInt(document.getElementById('ReDateYYYY').value);
	}

	if (commy > reYear) {
		alert('Invalid Date');
	} else {
		var YearDiff = parseInt(reYear) - parseInt(commy);
	}
	let warning = false;
	let warningMsg = "";
	if (CheckRules == '2') {
		if (MonthDiff < 3 && YearDiff == 0) {

		} else {
			warning = true;
			warningMsg = "Are you Sure? Transfer time is over(3 Month)!";
			// document.getElementById('warning').style.display = 'block';
		}

	}

	if (CheckRules == '1') {
		if (YearDiff > 0) {
			warning = true;
			warningMsg = "Are you Sure? 1 year is over!";
			// document.getElementById('warning').style.display = 'block';
		}
	}

	if (document.getElementById('selectedTransferType').value != 'Medium Transfer') {
		selectedPrg = document.getElementById("selectedProgramme").value;
	} else {
		selectedPrg = degreeTitleArr[studentTmpi];
	}
	let pt = "";
	if (document.getElementById('selectedTransferType').value != 'Medium Transfer') {
		for (i = 0; i < trdegreeCodeLength; i++) {
			if (selectedPrg == trdegreeTitleArr[i]) {
				selectedDegreeCode = trdegreeCodeArr[i];
				pt = trprogrammeTypeTitleArr[i];
			}
		}
	} else {
		selectedDegreeCode = dataRep["degreeCode"];
	}

	if (document.getElementById("selectedMedium").value == 'Sinhala') {
		m = 'si'
	} else {
		m = 'en';
	}

	if (document.getElementById('selectedTransferType').value != 'Degrade Degree' && document.getElementById('selectedTransferType').value != 'Special Transfer') {

		var q = 0;
		for (i = 0; i < tmp_studentNolenght; i++) {
			if (selectedDegreeCode == tmp_degreeCodeArr[i] & m == tmp_mediumArr[i] & (dataRep["academicYear"] == tmp_academicYearArr[i] || dataRep['achedamicYear'] == tmp_academicYearArr[i])) {
				var sNo = tmp_studentNoArr[i];
				q++;

			}
		}
		if (q == 0) {
			var y = 0;
			for (i = 0; i < tmp_studentNolenght; i++) {
				if (selectedDegreeCode == tmp_degreeCodeArr[i] & (dataRep["academicYear"] == tmp_academicYearArr[i] || dataRep['achedamicYear'] == tmp_academicYearArr[i])) {
					var sNo = tmp_studentNoArr[i];
				}
			}

		}

		if (sNo === undefined) {
			//MBus 2 Year

			if (selectedPrg == 'Master of Business Management in Accounting') {
				sNo = 'FGS/Mbus2/Acc/' + dataRep["academicYear"] + '/000';
			}
			if (selectedPrg == 'Master of Finance') {
				sNo = 'FGS/Mbus2/Fin/' + dataRep["academicYear"] + '/000';
			}

			//MBus 1 Year
			if (selectedPrg == 'Master of Business Accounting') {
				sNo = 'FGS/Mbus1/Acc/' + dataRep["academicYear"] + '/000';
			}
			if (selectedPrg == 'Master of Business Finance') {
				sNo = 'FGS/Mbus1/Fin/' + dataRep["academicYear"] + '/000';
			}

		}
		var x = sNo;
		sNo = (sNo.split("/", 5)[sNo.split("/", 5).length - 1]);
		if (m == 'en') {
			var studentNoCode = x.split(sNo);
			sNo = sNo.slice(0, 3);
		} else {
			var studentNoCode = x.split(sNo);
		}
		studentNoCode = studentNoCode[0];

		sNo++;




		var str = "" + sNo;
		var pad = "000"
		let dCode = selectedDegreeCode;

		if (pt != dCode) {
			if (pt == 'MA') {
				dCode = dCode.substr(dCode.indexOf("MA") + 2);
			}
			else if (pt == 'MSSC') {

				dCode = dCode.substr(dCode.indexOf("MSSC") + 4);
			}
			else if (dCode == 'MBA') {

				pt = "MBA";
			}
			else if (dCode == 'MSCIEC') {
				pt = "MSc";
			}
			else {
				var x = dCode.split(pt);
				if (x.length == 1) {
					dCode = x[0];
				} else {
					dCode = x[1];
				}

			}

		}

		if (selectedPrg == 'MA Degree in Mass Communication') {
			dCode = 'MACO';
		}
		if (selectedPrg == 'MSSc Degree in Mass Communication') {
			dCode = 'MACO';
			pt = 'MSSC';
		}
		if (selectedPrg == 'Postgraduate Diploma in Marketing') {
			dCode = 'PGDM';
		}
		if (selectedPrg == 'Postgraduate Diploma in Kayacikitsa') {
			dCode = 'PGDKY';
		}
		if (selectedPrg == 'Postgraduate Diploma in Pancakarma') {
			dCode = 'PGDPN';
		}
		if (selectedPrg == 'Postgraduate Diploma in Management and Administration of Ayurveda Institutions') {
			dCode = 'PGDMAAI';
		}
		if (selectedPrg == 'Master of Business Management in Accounting') {
			dCode = 'MBusAcc';
		}
		if (selectedPrg == 'Master of Finance') {
			dCode = 'MBusFin';
		}


		if (selectedPrg == 'Master of Business Accounting') {
			dCode = 'MBusAcc1';
		}
		if (selectedPrg == 'Master of Business Finance') {
			dCode = 'MBusFin1';
		}

		if (dCode == "MBusFin" || dCode == "MBusAcc" || dCode == "MBusFin1" || dCode == "MBusAcc1") {
			var ans = (studentNoArr[studentTmpi].split("/", 5)[studentNoArr[studentTmpi].split("/", 5).length - 1]);

		} else {
			var ans = pad.substring(0, pad.length - str.length) + str;
		}


		if (dCode == 'MHRM' || dCode == 'MCom' || dCode == 'MBus' || dCode == 'MBA' || dCode == 'DBA' || dCode == 'PGDM' || dCode == 'PGDIT' || dCode == 'MBM' || dCode == 'PGDKY' || dCode == 'PGDMAAI' || dCode == 'PGDPN') {
			newStudentNo = studentNoCode + ans;


		} else if (pt == 'MHRM') {
			newStudentNo = studentNoCode + ans;
		} else if (pt == 'MCom' || pt == 'MBus') {
			newStudentNo = studentNoCode + ans;
		} else if (pt == 'MBA') {
			newStudentNo = studentNoCode + ans;
		} else if (pt == 'MSc') {
			var newDegreeCode;

			if (dCode.substring(0, 3) == "MSC") {
				newDegreeCode = dCode.substring(3, 8);
			}

			let yr = "";
			if (document.getElementById('selectedTransferType').value == 'Batch Transfer') {
				yr = $('#trYYYY').val();
			} else {
				yr = $('#achedamicYear').val();
			}



			newStudentNo = 'FGS/' + pt + '/' + newDegreeCode + '/' + yr + '/' + ans;
		} else if (dCode == "MBusFin") {
			newStudentNo = 'FGS/MBus2/Fin/' + dataRep['academicYear'] + '/' + ans;
		} else if (dCode == "MBusAcc") {
			newStudentNo = 'FGS/MBus2/Acc/' + dataRep['academicYear'] + '/' + ans;
		} else if (dCode == "MBusFin1") {
			newStudentNo = 'FGS/MBus1/Fin/' + dataRep['academicYear'] + '/' + ans;
		} else if (dCode == "MBusAcc1") {
			newStudentNo = 'FGS/MBus1/Acc/' + dataRep['academicYear'] + '/' + ans;
		} else {
			if (m == 'si') {
				newStudentNo = studentNoCode + ans;
			} else {
				newStudentNo = studentNoCode + ans + 'E';
			}
		}
		if (warning) {
			Swal.fire({
				title: 'Are you sure?',
				text: warningMsg,
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
			}).then((result) => {
				if (result.isConfirmed) {
					let medium = document.getElementById("selectedMedium").value;
					formTrnsferStudentsendForm('addTransferStudent');
					formTrnsferDetailssendForm('addTransferDetails');
					formTrnsferStudentDetailssendForm('updateTransferDetails');
					formTrnsferApplicationDetailssendForm('updateTransferapplication');
					createStUserAccountData(newStudentNo);
					CreateStudentUserAccount("addStudentAccounts");
					formstudentRulssendForm('addstudentruls');

					Swal.fire({
						icon: 'success',
						title: 'Success',
						html: 'Successfully Trasfer to <br> Student No: ' + newStudentNo + "<br>Medium: " + medium + "<br> Programme: " + selectedPrg,

						showConfirmButton: true,
					});
				}
			});

		} else {

			Swal.fire({
				title: 'Are you sure?',
				text: 'This action will transfer student. Do you want to proceed?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, transfer it!',
			}).then((result) => {
				if (result.isConfirmed) {
					let medium = document.getElementById("selectedMedium").value;

					formTrnsferStudentsendForm('addTransferStudent');
					formTrnsferDetailssendForm('addTransferDetails');
					formTrnsferStudentDetailssendForm('updateTransferDetails');
					formTrnsferApplicationDetailssendForm('updateTransferapplication');
					createStUserAccountData(newStudentNo);
					CreateStudentUserAccount("addStudentAccounts");
					formstudentRulssendForm('addstudentruls');

					Swal.fire({
						icon: 'success',
						title: 'Success',
						html: 'Successfully Trasfer to <br> Student No: ' + newStudentNo + "<br>Medium: " + medium + "<br> Programme: " + selectedPrg,

						showConfirmButton: true,
					});
				}
			});
		}








	} else {

		if (mediumArr[studentTmpi] == 'en') {
			var datarepmedium = 'English'
		} else {
			var datarepmedium = 'Sinhala'
		}
		Swal.fire({
			title: 'Are you sure?',
			text: 'This action will transfer student. Do you want to proceed?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, transfer it!',
		}).then((result) => {
			if (result.isConfirmed) {
				formTrnsferStudentsendForm('addTransferStudent');
				formTrnsferDetailssendForm('addTransferDetails');
				formTrnsferStudentDetailssendForm('updateTransferDetails');
				formTrnsferApplicationDetailssendForm('updateTransferapplication');
				createStUserAccountData(dataRep["studentNo"]);
				CreateStudentUserAccount("addStudentAccounts");
				formstudentRulssendForm('addstudentruls');
				Swal.fire({
					icon: 'success',
					title: 'Success',
					html: 'Successfully Trasfer to <br> Student No: ' + dataRep["studentNo"] + "<br> Medium: " + datarepmedium + "<br> Degree: " + degreeTitleArr[studentTmpi],
					showConfirmButton: true,
				});
			}
		});

	}
	//}
}

//-----------------------------------------------------TRANSFER DEATILS GENERATE FUNCTION END-----------------------------------------

//-----------------------------------------------------STUDENT DEATILS ADD FUNCTION START-----------------------------------------
function createStUserAccountData(stNo) {
	//create Student account
	dataStrUpForAccountCreate = "action=addBulk";
	dataStrUpForAccountCreate += "&interface=addStudentAccounts";
	dataStrUpForAccountCreate += "&data=";
	Studentdata = "";

	dataStr2 = "action=createStudentAccoutn";
	dataStr2 += "&interface=addStudentAccounts";
	// create user account set data

	let newStrCreateAccount = "&sUserName=" + stNo;
	var splitting = stNo;
	var test1 = splitting.split("/");
	var test = "";
	for (var i = 0; i < test1.length; i++) {
		if (i != 0) {
			if (i == 1) {
				test = test1[i];
			}
			else {
				test += "-" + test1[i];
			}
		}
	}
	newStrCreateAccount += "&sPassWord=" + studentNICArr[studentTmpi];
	newStrCreateAccount += "&roleId=" + 11;
	newStrCreateAccount += "&sUName=" + test;
	let stData = new Array();
	stData[0] = dataStr2 + newStrCreateAccount;
	// end create user account set data

	if (stData[0] != "" && stData[0] != undefined) {
		if (stData[0]) {
			Studentdata += "{" + stData[0] + "}";
			counttimes = 0;
		}
	}

	const jsonArrayAccountCreate = queryStringToJson(Studentdata);
	dataStrUpForAccountCreate += JSON.stringify(jsonArrayAccountCreate);
	//end create Student account
}


function formTrnsferStudentsendForm(frm) {

	for (i = 0; i < trdegreeCodeLength; i++) {
		if (selectedPrg == trdegreeTitleArr[i] && trdegreeCodeArr[i] != undefined) {
			//alert(selectedDegreeCode);
			selectedDegreeCode = trdegreeCodeArr[i];
			selectedFacultyCode = trfacultyCodeArr[i];
			selectedProgrammeCode = trprogrammeTypeCodeArr[i];
		}
	}

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


	if (frm == 'addTransferStudent') {
		doc = document.formStudentTransfer;
		dataStr += "&interface=" + frm;

		if (document.getElementById("selectedMedium").value == 'Sinhala') {
			m = 'si'
		} else {
			m = 'en';
		}

		dataStr += "&achedamicYear=" + dataRep["academicYear"];
		dataStr += "&medium=" + m;

		if (document.getElementById('selectedTransferType').value != 'Degrade Degree') {
			dataStr += "&universityCode=" + universityCodeArr[studentTmpi]
				+ "&facultyCode=" + dataRep["Fcode"]
				+ "&programmeTypeCode=" + selectedProgrammeCode
				+ "&degreeCode=" + selectedDegreeCode
				+ "&studentNIC=" + studentNICArr[studentTmpi]
				+ "&applicationNo=" + dataRep["applicationNo"]
				+ "&studentName=" + studentNameArr[studentTmpi]
				+ "&studentPersonalTitle=" + studentPersonalTitleArr[studentTmpi]
				+ "&studentInitial=" + studentInitialArr[studentTmpi]
				+ "&studentDateofbirth=" + studentDateofbirthArr[studentTmpi]
				+ "&studentEmployment=" + studentEmploymentArr[studentTmpi]
				+ "&studentPermanentAddress=" + studentPermanentAddressArr[studentTmpi]
				+ "&studentOfficeAddress=" + studentOfficeAddressArr[studentTmpi]
				+ "&studentContactLan=" + studentContactLanArr[studentTmpi]
				+ "&studentContactMobile=" + studentContactMobileArr[studentTmpi]
				+ "&studentContactEmail=" + studentContactEmailArr[studentTmpi]
				+ "&studentNationality=" + studentNationalityArr[studentTmpi]
				+ "&studentCitizenship=" + studentCitizenshipArr[studentTmpi]
				+ "&correspondence=" + correspondenceArr[studentTmpi]

			dataStr += "&studentNo=" + newStudentNo;
			dataStr += "&registered=" + "yes";
			dataStr += "&notes=" + document.getElementById("tNotes").value;
		}

		//--------------------------------------add data for second table---------------------

		var transferID = 0;
		for (i = 0; i < transferIDLength; i++) {
			transferID = transferIDArr[i]
		}

		transferID++;
		var str1 = "" + transferID;
		var pad1 = "0000"
		var ans1 = pad1.substring(0, pad1.length - str1.length) + str1
		newStr10 = "action=add";
		newStr10 += "&interface=" + "addTransferDetails";
		var timestamp = Date.now();
		var random_number = Math.floor(Math.random() * 1000000);
		var unique_number = parseInt(timestamp + ('000000' + random_number).slice(-6));

		newStr10 += "&transferID=" + unique_number;
		newStr10 += "&applicationNo=" + dataRep["applicationNo"];

		if (document.getElementById('selectedTransferType').value == 'Degrade Degree') {
			newStr10 += "&studentNo=" + dataRep["studentNo"];
		} else if (document.getElementById('selectedTransferType').value == 'Special Transfer') {
			var s = 'Special Transfer'
			newStr10 += "&studentNo=" + s;
		} else {
			newStr10 += "&studentNo=" + newStudentNo;
		}

		newStr10 += "&oldStudentNo=" + dataRep["studentNo"];
		if (document.getElementById('selectedTransferType').value == 'Degrade Degree' || document.getElementById('selectedTransferType').value == 'Special Transfer') {
			newStr10 += "&transferType=" + document.getElementById("degradeType01").value;
		} else {
			newStr10 += "&transferType=" + document.getElementById("selectedTransferType").value;
		}

		newStr10 += "&notes=" + document.getElementById("tNotes").value;
		var currentdate = new Date();
		var datelbl = + currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getFullYear();

		newStr10 += "&transferDate=" + datelbl;
		newStr10 += "&transferReqDate=" + document.getElementById('ReDateYYYY').value + "-" + document.getElementById('ReDateMM').value + "-" + document.getElementById('ReDateDD').value;
		newStr10 += "&bosDate=" + document.getElementById('bosDateYYYY').value + "-" + document.getElementById('bosDateMM').value + "-" + document.getElementById('bosDateDD').value;
		newStr10 += "&bosNumber=" + document.getElementById('bosnumber').value;
		newStr10 += "&fgsDate=" + document.getElementById('fgsDateYYYY').value + "-" + document.getElementById('fgsDateMM').value + "-" + document.getElementById('fgsDateDD').value;
		newStr10 += "&fgsNumber=" + document.getElementById('fgsnumber').value;

		//--------------------------------------update student table --------------------------	

		newStr11 = "action=update";
		newStr11 += "&interface=" + "updateTransferDetails";

		newStr11 += "&studentNo=" + dataRep["studentNo"];

		if (document.getElementById('selectedTransferType').value == 'Degrade Degree') {
			newStr11 += "&registered=" + "dg";
		} else if (document.getElementById('selectedTransferType').value == 'Special Transfer') {
			newStr11 += "&registered=" + "sp";
		} else {
			newStr11 += "&registered=" + "tr";
		}

		//---------------------------------------update application No---------------------------

		newStr12 = "action=update";
		newStr12 += "&interface=" + "updateTransferapplication";
		if (document.getElementById('selectedTransferType').value != 'Degrade Degree' || document.getElementById('selectedTransferType').value != 'Special Transfer') {
			newStr12 += "&applicationNo=" + dataRep["applicationNo"];
			newStr12 += "&facultyCode=" + selectedFacultyCode;
			newStr12 += "&programmeTypeCode=" + selectedProgrammeCode;
			newStr12 += "&degreeCode=" + selectedDegreeCode;
		}

		dataRep["keepType"] = document.getElementById('selectedTransferType').value;

		//---------------------------------------------add student Ruls-----------------------------
		newStr13 = "action=add";
		newStr13 += "&interface=" + "addstudentruls";
		for (i = 0; i < ruleIDLength; i++) {
			if (document.getElementById('transferType' + i)) {
				//if(document.getElementById('transferType'+i).checked==true)
				//{

				newStr13 += "&transferID=" + ans1;
				newStr13 += "&ruleID=" + document.getElementById('transferTypeText' + i).value;
				addRuls[i] = newStr13;
				//}
			}
		}

		if (document.getElementById('selectedTransferType').value != 'Degrade Degree') {
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		}
	}
	return 0;
}
//-----------------------------------------------------STUDENT DEATILS ADD FUNCTION END-----------------------------------------

//-----------------------------------------------------TRANSFER DETAILS ADD FUNCTION START-----------------------------------------

function formTrnsferDetailssendForm(frm) {
	//alert(newStr10)
	isrHandle.getDataFromDB(eval("clientController"), "serverController.php", newStr10);
	return 0;
}
//-----------------------------------------------------TRANSFER DETAILS ADD FUNCTION START-----------------------------------------


//---------------------------------------------------UPDATE STUDENT TABLE AS TR FUNCTION START--------------------------
function formTrnsferStudentDetailssendForm(frm) {
	isrHandle.getDataFromDB(eval("clientController"), "serverController.php", newStr11);
	return 0;
}
//---------------------------------------------------UPDATE STUDENT TABLE AS TR FUNCTION END--------------------------

//---------------------------------------------------UPDATE APPLICANT DETAILS(DEGREE CODE) FUNCTION START--------------------------

function formTrnsferApplicationDetailssendForm(frm) {
	if (dataRep['selectType'] == 'applicantTransfer') {
		for (i = 0; i < trdegreeCodeLength; i++) {
			if (selectedPrg == trdegreeTitleArr[i]) {
				selectedDegreeCode = trdegreeCodeArr[i];
				selectedFacultyCode = trfacultyCodeArr[i];
				selectedProgrammeCode = trprogrammeTypeTitleArr[i];
			}
		}

		var doc, dataStr;

		if (frm.substring(0, 3) == "add") {
			newStr12 = "action=add";
		} else if (frm.substring(0, 6) == "update") {
			newStr12 = "action=update";
		} else if (frm.substring(0, 6) == "delete") {
			newStr12 = "action=delete";
		} else if (frm.substring(0, 6) == "search") {
			newStr12 = "action=get";
		}

		if (frm == 'updateTransferapplication') {
			doc = document.formStudentTransfer;
			newStr12 += "&interface=" + frm;

			newStr12 += "&applicationNo=" + dataRep["applicationNo"];
			newStr12 += "&facultyCode=" + selectedFacultyCode;
			newStr12 += "&programmeTypeCode=" + selectedProgrammeCode;
			newStr12 += "&degreeCode=" + selectedDegreeCode;
		}
	}

	if ((dataRep["keepType"] != 'Degrade Degree' || dataRep["keepType"] != 'Special Transfer') && dataRep['selectType'] != 'applicantTransfer') {
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", newStr12);
	}
	if (dataRep['selectType'] == 'applicantTransfer') {
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", newStr12);
	}
	return 0;
}
//---------------------------------------------------UPDATE APPLICANT DETAILS(DEGREE CODE) FUNCTION END--------------------------

//---------------------------------------------------RELEVENT RULS ADD FUNCTION START--------------------------
function formstudentRulssendForm(frm) {
	for (var i = 0; i < ruleIDLength; i++) {
		if (addRuls[i] != "" & addRuls[i] != undefined) {
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", addRuls[i]);
		}
	}
	return 0;
}
//---------------------------------------------------RELEVENT RULS ADD FUNCTION START--------------------------


function open_Payment1() {
	window.open("https://sis.kln.ac.lk/PayService/ClientApp/", "_blank");
}

function PrintResultSheet() {

	var exprint = "";


	// exprint += "<div class='section1' id='examresultsdiv' style=display:none;'>";
	// exprint +="<div style='margin-top:20px;float:left;clear:both;'>";
	// exprint +="<div class='longIdentifier' style='clear:none;'>Student</div><div class='colon'>&nbsp;:&nbsp;</div>";
	// exprint +="<div class='viewArea' style='clear:none;'>";
	// exprint += '<label id="stdProfile_studentName" style="fontcolor:red;"></label>';
	// exprint +="</div>";
	// exprint +="<div class=hideLabel>&nbsp;</div>";
	// exprint +="</div>";

	// exprint +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
	// exprint +="<div class='longIdentifier' style='clear:none;'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
	// exprint +="<div class='viewArea' style='clear:none;'>";
	// exprint += '<label id="stdProfile_degreeTitle" style="fontcolor:red;"></label>';
	// exprint +="</div>";
	// exprint +="<div class=hideLabel>&nbsp;</div>";
	// exprint +="</div>";

	exprint += "<div style='margin-left:20px; width:95%; height:95%; fontColor:black;'>";
	exprint += "<div  id='inputs' style='margin:0px 10px;clear:both; padding-top: 2em;'>";

	if (MarksLength != 0) {

		var sem0Count = 0;
		var sem1Count = 0;
		var sem2Count = 0;
		var sem3Count = 0;
		var sem4Count = 0;

		for (var j = 0; j < MarksLength; j++) {
			switch (subjectSemesterArr[j]) {
				case '0': sem0Count++; break;
				case '1': sem1Count++; break;
				case '2': sem2Count++; break;
				case '3': sem3Count++; break;
				case '4': sem4Count++; break;
			}
		}

		var gradeArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];

		//	Compare Result Point Equal the minimum marks							
		var tmpTestGrade = 'B-';

		exprint += '<table align="center" style="width:auto; margin-top:10px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;">';

		exprint += "<tr style='border: 1px solid black;'>";
		exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
		exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
		exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
		exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
		exprint += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";
		exprint += "</tr>";

		var tmpGPA = 0;
		var tmpcredits = 0;
		for (var i = 0; i < MarksLength; i++) {

			if (marksArr[i] == '-') {
				marksArr[i] = '(ab)';
			}

			exprint += "<tr style='border: 1px solid black;'>";

			if (subjectSemesterArr[i] == '0' && sem0Count != 0) {
				exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>0</div></td>";
				sem0Count = 0;
			} else if (subjectSemesterArr[i] == '1' && sem1Count != 0) {
				exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
				sem1Count = 0;
			} else if (subjectSemesterArr[i] == '2' && sem2Count != 0) {
				exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
				sem2Count = 0;
			} else if (subjectSemesterArr[i] == '3' && sem3Count != 0) {
				exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
				sem3Count = 0;
			} else if (subjectSemesterArr[i] == '4' && sem4Count != 0) {
				exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
				sem4Count = 0;
			}

			exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + subjectNameArr[i] + "</div></td>";
			exprint += "<td style='border: 1px solid black;padding: 5px 160px 5px 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;'>" + subjectTitleArr[i] + "</div></td>";
			exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + marksArr[i] + "</div></td>";

			var pFstatus = "";

			if (gradeArray.indexOf(tmpTestGrade) < gradeArray.indexOf(marksArr[i])) {
				pFstatus = "Repeat";
			} else {
				pFstatus = "Pass";
			}

			exprint += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + pFstatus + "</div></td>";
			tmpGPA += (parseFloat(subjectGPAArr[i]) * parseInt(subjectCreditsArr[i]));
			tmpcredits += parseInt(subjectCreditsArr[i]);
			exprint += "</tr>";
		}
		var tmpCalGPA = tmpGPA / tmpcredits;
		exprint += "<tr style='border: 1px solid black;'>";
		exprint += "<td style='padding: 5px;text-align:center' colspan='3'><div class='investView_l'  style='text-align:center; width:auto'>GPA : </div></td>";
		exprint += "<td></td>";
		exprint += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + tmpCalGPA.toFixed(1) + "</div></td>";
		exprint += "</tr>";
		exprint += "</table>";
		exprint += '<p>*This is only the result sheet of the student and it cannot be considered as an academic certificate.This is only a computer generated results sheet</p>';

	} else {
		exprint += '<p>Results not available</p>';
	}
	exprint += "</div>";
	exprint += "</div>";
	exprint += "</fieldset>";
	exprint += '</div>';

	newPrint = window.open('', '');
	doc = newPrint.document;
	doc.open();

	doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
	doc.write('<style type="text/css">label{font-family:tahoma;font-size:14px}.investView_l,.investView,.investLabel_l,.investLabel,br{margin-left:20px;float:left;font-family:tahoma;font-size:12px;}body{margin:10px auto;font-family:tahoma;width:800px;border:1px solid #000000;text-align:center;padding:15px;}br{display:none;}.hideLabel{clear:both;font-size:12px;}.hideCheckBox,.hidehr{display:none;}textarea{border:none;width:100%;font-size:12px;}#print,#noprint,#printsec3,#logDiv,#issue,#return,#btnlog{display:none;}.demoprint{margin-top:0px;clear:both;float:left;width:700px;font-size:12px;}#printsec1,#printsec2{float:left;clear:both;width:680px;font-size:12px;}.longIdentifier{clear:none;float:left;width:150px;font-size:12px;}#instituteDiv{float:left;width:auto;clear:right;font-size:12px;}.investView_l{float:left; }#results{clear:right;}</style>');
	doc.write('</head><body>');
	doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0096c7;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
	doc.write(exprint);
	doc.write('</body></html>');
	doc.close();
}







function displayResultsDiv() {
	if (MarksLength == 0 && GradeArrLength == 0) {
		document.getElementById('note1Results').style.display = 'block';
	}
	else if (MarksLength == 0 && GradeArrLength != 0) {
		document.getElementById('note2Results').style.display = 'block';
		document.getElementById('repeatResults').style.display = 'block';
	}
	else if (MarksLength != 0 && GradeArrLength == 0) {
		document.getElementById('firstResults').style.display = 'block';
		document.getElementById('note2Results').style.display = 'block';
		//document.getElementById('repeatResults').style.display='block';
	}
	else if (MarksLength != 0 || GradeArrLength != 0) {
		document.getElementById('firstResults').style.display = 'block';
		document.getElementById('note2Results').style.display = 'block';
		document.getElementById('repeatResults').style.display = 'block';
	}
	else if (MarksLength != 0 && GradeArrLength != 0) {
		document.getElementById('firstResults').style.display = 'block';
		document.getElementById('repeatResults').style.display = 'block';
		document.getElementById('note2Results').style.display = 'block';
	}
	else {
		document.getElementById('firstResults').style.display = 'block';
		document.getElementById('repeatResults').style.display = 'block';
		document.getElementById('note2Results').style.display = 'block';
	}

}

// var pFstatus = "";

// if(gradeArray.indexOf(tmpTestGrade) < gradeArray.indexOf(marksArr[i])){
// pFstatus = "Repeat";
// }else{
// pFstatus = "Pass";
// }

// vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >"+pFstatus+"</div></td>";	
// tmpGPA += (parseFloat(subjectGPAArr[i]) * parseInt(subjectCreditsArr[i]));
// tmpcredits += parseInt(subjectCreditsArr[i]);
function resetProfileData() {
	studentNoProArr.length = 0;
	applcationNoProArr.length = 0;
	studentNoProfileDataLength = 0;

	batchDegreeCodeArr.length = 0;
	batchYearArr.length = 0;
	batchCourseFeeArr.length = 0;
	batchLibraryFeeArr.length = 0;
	batchdetailsLength = 0;

	studentNoArr.length = 0;
	studentNameArr.length = 0;
	studentNICArr.length = 0;
	universityCodeArr.length = 0;
	facultyCodeArr.length = 0;
	facultyTitleArr.length = 0;
	programmeTypeCodeArr.length = 0;
	programmeTypeTitleArr.length = 0;
	degreeCodeArr.length = 0;
	degreeTitleArr.length = 0;
	studentPermanentAddressArr.length = 0;
	studentContactLanArr.length = 0;
	studentContactMobileArr.length = 0;
	studentContactEmailArr.length = 0;
	studentEmploymentArr.length = 0;
	studentInitialArr.length = 0;
	applicationNoArr.length = 0;
	mediumArr.length = 0;
	achedamicYearArr.length = 0;
	studentPersonalTitleArr.length = 0;
	studentDateofbirthArr.length = 0;
	studentOfficeAddressArr.length = 0;
	studentNationalityArr.length = 0;
	studentCitizenshipArr.length = 0;
	correspondenceArr.length = 0;
	librarycodeArr.length = 0;
	studentNoLength = 0;

	tmp_studentNoArr.length = 0;
	tmp_degreeCodeArr.length = 0;
	tmp_mediumArr.length = 0;
	tmp_academicYearArr.length = 0;
	tmp_studentNolenght = 0;

	documentID1Arr.length = 0;
	documentName1Arr.length = 0;
	dataItemIDArr.length = 0;
	dataItemNameArr.length = 0;
	itemValueArr.length = 0;
	sequenceNo1Arr.length = 0;
	dataItemIDLength = 0;


	documentItemIDArr.length = 0;
	documentNameArr.length = 0;
	sequenceNoArr.length = 0;
	decisionMakingPointIDArr.length = 0;
	decisionMakingPointNameArr.length = 0;
	numberArr.length = 0;
	dateArr.length = 0;
	decisionArr.length = 0;
	remarksArr.length = 0;
	documentIDLength = 0;

	sdocumentItemIDArr.length = 0;
	sdocumentNameArr.length = 0;
	sdataItemIDArr.length = 0;
	sitemValueArr.length = 0;
	ssequenceNoArr.length = 0;
	ssessionIDArr.length = 0;
	sessionIDLength = 0;

	educationFieldNameArr.length = 0;
	educationValueArr.length = 0;
	educationPinArr.length = 0;

	educationPinLength = 0;

	workFieldNameArr.length = 0;
	workValueArr.length = 0;
	workPinArr.length = 0;
	workPinLength = 0;


	subjectNameArr.length = 0;
	subjectTitleArr.length = 0;
	subjectSemesterArr.length = 0;
	marksArr.length = 0;
	MarksLength = 0;

	final_SemArr.length = 0;
	final_GPAArr.length = 0;
	final_ResultArr.length = 0; final_Length = 0;

	cr_resitArr.length = 0;
	cr_yearArr.length = 0;
	cr_finalResultArr.length = 0;
	cr_descriptionArr.length = 0;
	cr_Length = 0;

	rep_subjectNameArrlength = 0;
	Rep_subjectTitleArr.length = 0;
	Rep_subjectSemesterArr.length = 0;
	rep_GradeArr.length = 0;
	rep_StatusArr.length = 0;
	GradeArrLength = 0;

	rep_cr_finalResultArr.length = 0;
	rep_cr_descriptionArr.length = 0;
	rep_cr_Length = 0;

	rep_final_SemArr.length = 0;
	rep_final_GPAArr.length = 0;
	rep_final_ResultArr.length = 0;
	rep_final_Length = 0;

	rep_cr_resitArr.length = 0;
	rep_cr_yearArr.length = 0;
	rep_cr_Length = 0;

	studentNICProfileArr.length = 0;
	applicationNoProfileArr.length = 0;
	workFieldNameProfileArr.length = 0;
	workValueProfileArr.length = 0;
	workPinProfileArr.length = 0;
	profesionalprofileLength = 0;

	studentNoArr.length = 0;
	messageTypeArr.length = 0;
	messageArr.length = 0;
	subjectArr.length = 0;
	messageTypeLength = 0;



	oldStudentNoArr.length = 0;
	TransferstudentNoArr.length = 0;
	transferTypeArr.length = 0;
	transferIDArr.length = 0;
	notesArr.length = 0;
	TransferapplicationNoArr.length = 0;
	transferDateArr.length = 0;
	ruleIDArr.length = 0;
	ruleTitleArr.length = 0;
	oldStudentNoLength = 0;

	tCodeArr.length = 0;
	paymentStudentArr.length = 0;
	feeCatArr.length = 0;
	amountArr.length = 0;

	tCodeLength = 0;

	Pay_RefNoArr.length = 0;
	Pay_studentNoArr.length = 0;
	Pay_sourceCodeArr.length = 0;
	Pay_CategoryCodeArr.length = 0;
	Pay_amountArr.length = 0;
	Pay_Time_StampArr.length = 0;
	Response_ProgressArr.length = 0;
	Response_Progress_TimeArr.length = 0;
	Pay_MethodArr.length = 0;
	paydegreeCodeArr.length = 0;
	payIncomeSourceCodeArr.length = 0;
	RefNoLength = 0;


	messageIdArr.length = 0;
	referenceNoArr.length = 0;
	notesuserIdArr.length = 0;
	messageArr.length = 0;
	notesuserNameArr.length = 0;
	messageIdLength = 0;

	profileapplicationNoArr.length = 0;
	applicationProfile = 0;

	profileapplicationNoArr1.length = 0;
	profilestudentNameArr.length = 0;
	profilestudentNICArr.length = 0;
	profiledegreeCodeArr.length = 0;
	profiledegreeTitleArr.length = 0;
	profilestudentPermanentAddressArr.length = 0;
	profilestudentContactLanArr.length = 0;
	profilestudentContactMobileArr.length = 0;
	profilestudentContactEmailArr.length = 0;
	profilestudentEmploymentArr.length = 0;
	profilestudentInitialArr.length = 0;
	studentNICLength = 0;

	trfacultyCodeArr.length = 0;
	trprogrammeTypeCodeArr.length = 0;
	trdegreeCodeArr.length = 0;
	trdegreeTitleArr.length = 0;
	trfacultyTitleArr.length = 0;
	trprogrammeTypeTitleArr.length = 0;
	ruleIDArr.length = 0;
	ruleTitleArr.length = 0;
	transferTypeArr.length = 0;
	oldStudentNoArr.length = 0;
	TransferstudentNoArr.length = 0;
	transferTypeArr.length = 0;
	transferIDArr.length = 0;
	notesArr.length = 0;
	TransferapplicationNoArr.length = 0;
	transferDateArr.length = 0;
	commencedegreeCodeArr.length = 0;
	commencedegreeTitleArr.length = 0;
	durationArr.length = 0;
	coursecommenceArr.length = 0;
	commenceacademicYearArr.length = 0;
	trdegreeCodeLength = 0;
	ruleIDLength = 0;
	transferIDLength = 0;
	coursecommenceLength = 0;


	Pay_RefNoArr.length = 0;
	Pay_studentNoArr.length = 0;
	Pay_CategoryCodeArr.length = 0;
	Pay_amountArr.length = 0;
	Pay_Time_StampArr.length = 0;
	Pay_MethodArr.length = 0;
	Response_ProgressArr.length = 0;
	Response_Progress_TimeArr.length = 0;
	PayTitileArr.length = 0;
	RefNoLength = 0;



}



function printExamSheet() {

	var examDiv = "";


	examDiv += '<table>';
	// examDiv += '<thead>';
	//   examDiv += '<tr>';
	//     examDiv += '<td>';
	//       examDiv += '<div class="page-header-space"></div>';
	//     examDiv += '</td>';
	//   examDiv += '</tr>';
	// examDiv += '</thead>';

	examDiv += '<tbody>';
	examDiv += '<tr>';
	examDiv += ' <td>';
	examDiv += '<div class="page" style="line-height: 3">';






	examDiv += '<div id="tab_Exam" class="tabcontent" style="page-break-after: always;">';

	examDiv += '<fieldset class="field" style="width:96%; margin-bottom:10px;text-align: center;">';
	examDiv += '<img src="img/fgslogo2.png" style="width: 35%;">';
	// examDiv += '<center><h3 style="margin: 5px;">Faculty of Graduate Studies</h3></center>'
	// examDiv += '<center><h3 style="margin: 5px;">Sri Lanka</h3></center>'
	examDiv += '<center><h4 style="margin: 15px 5px 5px;line-height: 0px;">' + degreeTitleArr[0] + ' Degree Programme</h4></center>'
	examDiv += '<center><h4 style="margin: 20px 5px 15px;line-height: 0px;">Temporary Examination Results Sheet</h4></center>'
	//examDiv += '<center><h4>'+achedamicYearArr[0]+'</h4></center>'




	examDiv += "<table style='width:100%'>";
	examDiv += "<tbody>";
	examDiv += "<tr>";
	examDiv += "<td colspan='2' style='color: #000000; font-family: Tahoma;font-size: 14px;'>Student Name &nbsp;&nbsp;&nbsp;: <span style='color: #b70909; font-family: Tahoma;font-size: 13px;'>" + studentNameArr[0] + "</span></td>";
	examDiv += "</tr>";
	examDiv += "<tr>";
	examDiv += "<td style='color: #000000; font-family: Tahoma;font-size: 14px;'>Student Number : <span style='color: #b70909; font-family: Tahoma;font-size: 13px;'>" + studentNoArr[0] + "</span></td>";
	examDiv += "<td style='color: #000000; font-family: Tahoma;font-size: 13px;text-align:right'>Academic Year :&nbsp;&nbsp;&nbsp; <span style='color: #b70909; font-family: Tahoma;font-size: 13px;'>" + achedamicYearArr[0] + "</span></td>";
	examDiv += "</tr>";

	let stMedium;
	if (mediumArr[0] == "en") {
		stMedium = "English";
	}
	if (mediumArr[0] == "si") {
		stMedium = "Sinhala";
	}

	for (q = 0; q < coursecommenceLength; q++) {
		if (commencedegreeCodeArr[q] == degreeCodeArr[studentTmpi] && commenceacademicYearArr[q] == achedamicYearArr[studentTmpi]) {
			commDate = coursecommenceArr[q];
			duration = durationArr[q];
			if (durationArr[q].substring(0, 1) == "1") {
				duration = 1 + " Year";
			}
			if (durationArr[q].substring(0, 1) == "2") {
				duration = 2 + " Years";
			}
			if (durationArr[q].substring(0, 1) == "3") {
				duration = 3 + " Years";
			}
			if (durationArr[q].substring(0, 2) == "1-2") {
				duration = 2 + " Years";
			}
		}
	}
	examDiv += "<tr>";
	examDiv += "<td style='color: #000000; font-family: Tahoma;font-size: 14px;'>Medium &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span style='color: #b70909; font-family: Tahoma;font-size: 13px;'>" + stMedium + "</span></td>";
	examDiv += "<td style='color: #000000; font-family: Tahoma;font-size: 13px;text-align:right'>Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span style='color: #b70909; font-family: Tahoma;font-size: 13px;'>" + duration + "</span></td>";
	examDiv += "</tr>";
	if (slqlArr[0] != "" && !(slqlArr[0] === null)) {
		examDiv += "<tr>";
		examDiv += "<td colspan='2' style='color: #000000; font-family: Tahoma;font-size: 14px;'>*SLQF Level  &nbsp; &nbsp; &nbsp; : <span style='color: #b70909; font-family: Tahoma;font-size: 13px;'>" + slqlArr[0] + "</span></td>";
		examDiv += "</tr>";
	}
	examDiv += "</tbody>";
	examDiv += "</table>";


	examDiv += '<div id="tab_Exam" class="tabcontent">';
	examDiv += '<fieldset class="field" style="width:96%; margin-bottom:10px">';
	//First Time Results

	if (MarksLength != 0) {
		examDiv += "<div style='clear:both; margin-bottom: 20px; ' id='firstResults'>";
		// examDiv += "<hr>";
		// examDiv += '<legend class="fieldHead">Exam Results</legend>';


		var sem0Count = 0;
		var sem1Count = 0;
		var sem2Count = 0;
		var sem3Count = 0;
		var sem4Count = 0;

		for (var j = 0; j < MarksLength; j++) {
			if (resultFStatus[j] == 0) {

				switch (subjectSemesterArr[j]) {
					case '0': sem0Count++; break;
					case '1': sem1Count++; break;
					case '2': sem2Count++; break;
					case '3': sem3Count++; break;
					case '4': sem4Count++; break;
				}
			}
		}

		var gradeArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];


		examDiv += '<table align="center" style="width: -webkit-fill-available;margin: 10px 55px 0px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;">';

		examDiv += "<tr style='border: 1px solid black;'>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;width: 15%;'>Semester</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;width: 20%;'>Subject Code</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;    width: 10%;'>Grade</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;    width: 10%;'>Status</th>";
		examDiv += "</tr>";


		for (var i = 0; i < MarksLength; i++) {
			if (resultFStatus[i] == 0) {

				if (marksArr[i] == '-') {
					marksArr[i] = '(ab)';
				}

				examDiv += "<tr style='border: 1px solid black;'>";

				if (subjectSemesterArr[i] == '0' && sem0Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
					sem0Count = 0;
				} else if (subjectSemesterArr[i] == '1' && sem1Count != 0) {
					for (var k = 0; k < final_Length; k++) {
						if (final_SemArr[k] == '0') {

						}
					}

					examDiv += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
					sem1Count = 0;
				} else if (subjectSemesterArr[i] == '2' && sem2Count != 0) {
					for (var k = 0; k < final_Length; k++) {
						if (final_SemArr[k] == '1') {


						}
					}

					examDiv += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
					sem2Count = 0;
				} else if (subjectSemesterArr[i] == '3' && sem3Count != 0) {
					for (var k = 0; k < final_Length; k++) {
						if (final_SemArr[k] == '2') {

						}
					}

					examDiv += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
					sem3Count = 0;
				} else if (subjectSemesterArr[i] == '4' && sem4Count != 0) {
					for (var k = 0; k < final_Length; k++) {
						if (final_SemArr[k] == '3') {

						}
					}

					examDiv += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + sem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
					sem4Count = 0;
				}

				examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:100%;margin: 0;' >" + subjectNameArr[i] + "</div></td>";
				examDiv += "<td style='border: 1px solid black;padding: 5px 15px 5px 5px;text-align:center'><div class='investView_l'  style='text-align: left;margin: 0;width:100%;'>" + subjectTitleArr[i] + "</div></td>";
				examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>" + marksArr[i] + "</div></td>";

				var tmpTestGrade = "";
				//var tmpGradeHolder = new Array();
				for (var j = 0; j < cr_Length; j++) {
					if (gradeArray.indexOf(cr_resitArr[j]) < gradeArray.indexOf(marksArr[i])) {
						if (marksArr[i] == '(ab)' || marksArr[i] == '-') {
							tmpTestGrade = 'Absent';
						} else {
							tmpTestGrade = 'Fail';
						}
						break;
					}
					else if (gradeArray.indexOf(cr_resitArr[j]) >= gradeArray.indexOf(marksArr[i])) {    //	else if(gradeArray.indexOf(cr_resitArr[j]) >= gradeArray.indexOf(marksArr[i])){
						//tmpTestGrade = cr_finalResultArr[j];
						tmpTestGrade = 'Pass';
						//tmpGradeHolder.push(j);
						break;
					}



				}


				if (tmpTestGrade == "Fail" || tmpTestGrade == "Absent") {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;color: red'>" + tmpTestGrade + "</div></td>";
				}
				else {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>" + tmpTestGrade + "</div></td>";

				}



				//tmpGPA += (parseFloat(subjectGPAArr[i]) * parseInt(subjectCreditsArr[i]));
				//tmpcredits += parseInt(subjectCreditsArr[i]);
				examDiv += "</tr>";
			}
		}


		for (var k = 0; k < final_Length; k++) {
			if (final_SemArr[k] == subjectSemesterArr[MarksLength - 1]) {

			}
		}



		examDiv += "</table><br>";

		for (var m = 0; m < final_Length; m++) {
			if (final_SemArr[m] == '-1') {

			}
		}

		examDiv += '</div>';
	}


	//Repeat Results 

	if (GradeArrLength != 0) {
		examDiv += "<div align='center' style='clear:both; margin-bottom: 10px; ' id='repeatResults'>";
		// examDiv += "<hr>";
		examDiv += '<legend class="fieldHead" align="left" style="    line-height: 1;">Repeat Exam Results</legend>';


		var Repsem0Count = 0;
		var Repsem1Count = 0;
		var Repsem2Count = 0;
		var Repsem3Count = 0;
		var Repsem4Count = 0;

		for (var j = 0; j < GradeArrLength; j++) {
			if (rep_StatusArr[j] == 0) {
				switch (Rep_subjectSemesterArr[j]) {
					case '0': Repsem0Count++; break;
					case '1': Repsem1Count++; break;
					case '2': Repsem2Count++; break;
					case '3': Repsem3Count++; break;
					case '4': Repsem4Count++; break;
				}
			}
		}
		var gradeRepArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];

		examDiv += '<table align="center" style="width: -webkit-fill-available;margin-top:10px;margin: 10px 55px 0px;border-collapse: collapse;border: 1px solid black;table-layout:fixed;">';

		examDiv += "<tr style='border: 1px solid black;'>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;width: 15%;'>Semester</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;width: 20%;'>Subject Code</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;    width: 10%;'>Grade</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;    width: 10%;'>Status</th>";
		examDiv += "</tr>";

		for (var i = 0; i < GradeArrLength; i++) {
			if (rep_StatusArr[i] == 0) {

				if (rep_GradeArr[i] == '-') {
					rep_GradeArr[i] = '(ab)';
				}



				examDiv += "<tr style='border: 1px solid black;'>";

				if (Rep_subjectSemesterArr[i] == '0' && Repsem0Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem0Count + "'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>Year End</div></td>";
					Repsem0Count = 0;
				} else if (Rep_subjectSemesterArr[i] == '1' && Repsem1Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem1Count + "'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>1</div></td>";
					Repsem1Count = 0;
				} else if (Rep_subjectSemesterArr[i] == '2' && Repsem2Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem2Count + "'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>2</div></td>";
					Repsem2Count = 0;
				} else if (Rep_subjectSemesterArr[i] == '3' && Repsem3Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem3Count + "'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>3</div></td>";
					Repsem3Count = 0;
				} else if (Rep_subjectSemesterArr[i] == '4' && Repsem4Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem4Count + "'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>4</div></td>";
					Repsem4Count = 0;
				}


				examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;' >" + rep_subjectNameArr[i] + "</div></td>";
				examDiv += "<td style='border: 1px solid black;padding: 5px 15px 5px 5px;text-align:left'><div class='investView_l'  style='text-align:left;width:100%;margin: 0;'>" + Rep_subjectTitleArr[i] + "</div></td>";
				examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>" + rep_GradeArr[i] + "</div></td>";

				var tmpTestRepGrade = "";
				//var tmpGradeHolder = new Array();
				for (var j = 0; j < rep_cr_Length; j++) {
					if (gradeRepArray.indexOf(rep_cr_resitArr[j]) < gradeRepArray.indexOf(rep_GradeArr[i])) {
						if (rep_GradeArr[i] == '(ab)' || rep_GradeArr[i] == '-') {
							tmpTestRepGrade = 'Absent';
						} else {
							tmpTestRepGrade = 'Repeat';
						}
						break;
					}
					else if (gradeRepArray.indexOf(rep_cr_resitArr[j]) >= gradeRepArray.indexOf(rep_GradeArr[i])) {    //	else if(gradeArray.indexOf(cr_resitArr[j]) >= gradeArray.indexOf(marksArr[i])){
						//tmpTestGrade = cr_finalResultArr[j];
						tmpTestRepGrade = 'Pass';
						//tmpGradeHolder.push(j);
						break;
					}
				}

				if (tmpTestRepGrade == "Repeat" || tmpTestRepGrade == "Absent") {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;color: red'>" + tmpTestRepGrade + "</div></td>";
				}
				else {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>" + tmpTestRepGrade + "</div></td>";
				}

				examDiv += "</tr>";
			}

		}
		examDiv += "</table><br>";
		examDiv += "</div>";
	}

	//Rerepeat Results

	if (ReRepLength != 0) {

		examDiv += "<div align='center' style='clear:both; margin-bottom: 10px; ' id='RerepeatResults'>";
		// examDiv += "<hr>";
		examDiv += '<legend class="fieldHead" align="left" style="    line-height: 1;">Re-Repeat Exam Results</legend>';


		var ReRepsem0Count = 0;
		var ReRepsem1Count = 0;
		var ReRepsem2Count = 0;
		var ReRepsem3Count = 0;
		var ReRepsem4Count = 0;

		for (var j = 0; j < ReRepLength; j++) {
			if (resultRRStatus[j] == 0) {
				switch (ReRep_subjectSemesterArr[j]) {
					case '0': ReRepsem0Count++; break;
					case '1': ReRepsem1Count++; break;
					case '2': ReRepsem2Count++; break;
					case '3': ReRepsem3Count++; break;
					case '4': ReRepsem4Count++; break;
				}
			}
		}
		var gradeReRepArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];

		examDiv += '<table align="center" style="width: -webkit-fill-available;margin-top:10px;margin: 10px 55px 0px;border-collapse: collapse;border: 1px solid black;table-layout:fixed;">';

		examDiv += "<tr style='border: 1px solid black;'>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;width: 15%;'>Semester</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;width: 20%;'>Subject Code</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;    width: 10%;'>Grade</th>";
		examDiv += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;    width: 10%;'>Status</th>";
		examDiv += "</tr>";

		for (var i = 0; i < ReRepLength; i++) {
			if (resultRRStatus[i] == 0) {

				if (ReRep_GradeArr[i] == '-') {
					ReRep_GradeArr[i] = '(ab)';
				}



				examDiv += "<tr style='border: 1px solid black;'>";

				if (ReRep_subjectSemesterArr[i] == '0' && ReRepsem0Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
					ReRepsem0Count = 0;
				} else if (ReRep_subjectSemesterArr[i] == '1' && ReRepsem1Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
					ReRepsem1Count = 0;
				} else if (ReRep_subjectSemesterArr[i] == '2' && ReRepsem2Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
					ReRepsem2Count = 0;
				} else if (ReRep_subjectSemesterArr[i] == '3' && ReRepsem3Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
					ReRepsem3Count = 0;
				} else if (ReRep_subjectSemesterArr[i] == '4' && ReRepsem4Count != 0) {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + ReRepsem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
					ReRepsem4Count = 0;
				}


				examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:100%;margin: 0;' >" + ReRep_subjectNameArr[i] + "</div></td>";
				examDiv += "<td style='border: 1px solid black;padding: 5px 15px 5px 5px;text-align:left'><div class='investView_l'  style='text-align: left;margin: 0;width:100%;'>" + ReRep_subjectTitleArr[i] + "</div></td>";
				examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center;width:100%;margin: 0;'>" + ReRep_GradeArr[i] + "</div></td>";

				var tmpTestReRepGrade = "";
				//var tmpGradeHolder = new Array();
				for (var j = 0; j < rep_cr_Length; j++) {
					if (gradeReRepArray.indexOf(rep_cr_resitArr[j]) < gradeReRepArray.indexOf(ReRep_GradeArr[i])) {
						if (ReRep_GradeArr[i] == '(ab)' || ReRep_GradeArr[i] == '-') {
							tmpTestGrade = 'Absent';
						} else {
							tmpTestReRepGrade = 'Repeat';
						}
						break;
					}
					else if (gradeReRepArray.indexOf(rep_cr_resitArr[j]) >= gradeReRepArray.indexOf(ReRep_GradeArr[i])) {    //	else if(gradeArray.indexOf(cr_resitArr[j]) >= gradeArray.indexOf(marksArr[i])){
						//tmpTestGrade = cr_finalResultArr[j];
						tmpTestReRepGrade = 'Pass';
						//tmpGradeHolder.push(j);
						break;
					}
				}

				if (tmpTestReRepGrade == "Repeat" || tmpTestReRepGrade == "Absent") {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:100%;margin: 0;color: red'>" + tmpTestReRepGrade + "</div></td>";
				}
				else {
					examDiv += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center;margin: 0; width:100%'>" + tmpTestReRepGrade + "</div></td>";
				}

				examDiv += "</tr>";
			}
		}

		examDiv += "</table><br>";

		examDiv += "</div>";
	}

	//	examDiv += "<div align='center' style='clear:both; margin-bottom: 10px; ' id='note1Results'>";
	//	examDiv += '<p>Results not available</p>';
	//	examDiv += "</div>";
	examDiv += "<hr>";
	examDiv += "<div align='left' style='clear:both; margin-bottom: 10px; ' >";
	examDiv += '<p style="text-align:left; font-weight: bold;font-size: 12px;    line-height: 1;">Grading System</p>';
	examDiv += '<table align="center" style="width: -webkit-fill-available;margin: 10px 55px 0px; margin-top:10px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;">';
	examDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>Range of Marks</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>Grade</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>Grade Point Value</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>Range of Marks</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>Grade</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>Grade Point Value</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>Range of Marks</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>Grade</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>Grade Point Value</td>";
	examDiv += "</tr>";

	examDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>85-100</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>A+</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>4.0</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>55-59</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>B</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>3.0</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>35-39</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>C-</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>1.7</td>";
	examDiv += "</tr>";

	examDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>70-84</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>A</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>4.0</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>50-54</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>B-</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>2.7</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>30-34</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>D+</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>1.3</td>";
	examDiv += "</tr>";

	examDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>65-69</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>A-</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>3.7</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>45-49</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>C+</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>2.3</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>25-29</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>D</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>1.0</td>";
	examDiv += "</tr>";

	examDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>60-64</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>B+</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>3.3</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>40-44</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>C</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>2.0</td>";

	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>00-24</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>E</td>";
	examDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>0.0</td>";
	examDiv += "</tr>";

	examDiv += "</table>";
	examDiv += "</div>";
	examDiv += "<div align='center' style='clear:both; margin-bottom: 10px; ' id='note2Results'>";





	// examDiv += "<hr>";
	for (var j = 0; j < cr_Length; j++) {

		if (cr_descriptionArr.indexOf(cr_descriptionArr[j]) == cr_descriptionArr.lastIndexOf(cr_descriptionArr[j]) || (cr_descriptionArr.indexOf(cr_descriptionArr[j]) != cr_descriptionArr.lastIndexOf(cr_descriptionArr[j]) && cr_descriptionArr.indexOf(cr_descriptionArr[j]) == j)) {

			examDiv += '<p style="text-align:left; font-weight: bold;font-size: 12px;margin: 0;line-height: 1;">Conditions to ' + cr_finalResultArr[j] + '</p>';


			examDiv += "<p style='text-align:left;margin-left:30px;font-size: 11px;margin: 5px 0 0 2rem;line-height: 1;'>" + cr_descriptionArr[j] + "</p><br>";
		}
	}

	// examDiv += "<hr>";
	examDiv += '<p style="font-size: 11px;text-align: left;margin: 5px 0;padding-left: 2rem;line-height: 1;">*Sri Lanka Qualification Framework Level</p>';
	examDiv += '<p style="font-size: 11px;text-align: left;margin: 5px 0;padding-left: 2rem;    line-height: 1;">#The results may change based on the bylaws/regulation  of the university (eg:- Repeating subjects, submit the thesis after the stipulated period). This is only a computer-generated result sheet of the student and it cannot be considered as an academic certificate.</p>';
	examDiv += '<p style="font-size: 11px;text-align: left;margin: 5px 0;padding-left: 2rem;    line-height: 1;">#Final result will be released by the Senate upon obtaining recommendation of the Results Board.</p>';
	// examDiv += '<p style="font-size: 11px;text-align: left;margin: 5px 0;padding-left: 2rem;">This is only a computer generated result sheet of the student and it cannot be considered as an academic certificate.</p>';

	// examDiv += '<p>If you have any inquires please contact FGS on 0112903953 </p>';	
	examDiv += '<br>';
	//examDiv += "<input type='button' class='btnD' value='Print' onclick='printExamSheet();' style='float: right;' >";
	examDiv += '<br>';
	examDiv += "</div>";

	examDiv += '</fieldset>';

	examDiv += '</div>';
	examDiv += printFooter2();





	examDiv += '</div>';
	examDiv += '</td>';
	examDiv += '</tr>';
	examDiv += '</tbody>';
	examDiv += '<tfoot>';
	examDiv += '<tr>';
	examDiv += '<td>';
	examDiv += '<div class="page-footer-space"></div>';
	examDiv += ' </td>';
	examDiv += '</tr>';
	examDiv += '</tfoot>';
	examDiv += '</table>';














	newPrint = window.open('', '');
	doc = newPrint.document;
	doc.open();

	doc.write('<html><head><script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none";window.print();}</script>');
	doc.write('<style type="text/css">.page-header,.page-header-space { height: 20px;}.page-footer,.page-footer-space { height: 100px;}.page-footer { position: fixed; bottom: 0; width: 100%; }.page-header { position: fixed;  top: 0mm;  width: 100%;}.page {page-break-after: always;}@page {margin: 5mm 0 0 0;}@media print {thead {display: table-header-group;} tfoot {display: table-footer-group;} button {display: none;}body {margin: 0; }}label{font-family:tahoma;font-size:14px}.investView_l,.investView,.investLabel_l,.investLabel,br{margin-left:20px;float:left;font-family:tahoma;font-size:12px;}body{margin:10px auto;font-family:tahoma;width:800px;text-align:center;padding:15px;}br{display:none;}.hideLabel{clear:both;font-size:12px;}.hideCheckBox,.hidehr{display:none;}textarea{border:none;width:100%;font-size:12px;}#print,#noprint,#printsec3,#logDiv,#issue,#return,#btnlog{display:none;}.demoprint{margin-top:0px;clear:both;float:left;width:700px;font-size:12px;}#printsec1,#printsec2{float:left;clear:both;width:680px;font-size:12px;}.longIdentifier{clear:none;float:left;width:150px;font-size:12px;}#instituteDiv{float:left;width:auto;clear:right;font-size:12px;}.investView_l{float:left; }#results{clear:right;}</style>');
	doc.write('</head><body>');
	doc.write('<button id="prbtn" style="width:100px;left:30px;top:100%;background-color:#0096c7;border-radius:15px;color:#ffffff;padding:3px 5px;" onclick=toPrint();>Print</button>');
	doc.write(examDiv);
	doc.write('</body></html>');
	doc.close();

	// console.log(document.getElementById('firstResults').clientHeight);
	// console.log(document.getElementById('repeatResults').clientHeight);
	// console.log(document.getElementById('repeatResults').clientHeight);

}

function printFooter2() {
	let gtDiv = '<footer class="page-footer" style="left:0;padding: 0 3rem 0 0;width: 100%;">';

	gtDiv += "<table style='width:100%;margin-top:10px'>";
	gtDiv += "<tbody>";
	gtDiv += "<tr>";
	gtDiv += "<td colspan='2' style='color: #000000; font-family: Tahoma;font-size: 14px;padding-left: 3.2rem;'>Printed Date and Time : <span style='color: #000; font-family: Tahoma;font-size: 13px;'>" + getCurrentDateTime() + "</span></td>";
	gtDiv += "</tr>";
	// examDiv +="<tr>";
	// examDiv +="<td style='color: #000000; font-family: Tahoma;font-size: 14px;'>Student Number : <span style='color: #b70909; font-family: Tahoma;font-size: 13px;'>"+studentNoArr[0]+"</span></td>";
	// examDiv +="<td style='color: #000000; font-family: Tahoma;font-size: 13px;text-align:right'>Achedamic Year : <span style='color: #b70909; font-family: Tahoma;font-size: 13px;'>"+achedamicYearArr[0]+"</span></td>";
	// examDiv +="</tr>";
	gtDiv += "</tbody>";
	gtDiv += "</table>";

	gtDiv += '<div style="text-align:center;"><h4 style="margin: -5px 0 5px 0; color:#000000;line-height: 0;">';
	gtDiv += '_____________________________________________________________________________';
	gtDiv += '</h4></div>';
	gtDiv += '<div style="width:100%text-align:center;font-size:12px;line-height: 2;">Tel: Dean : 011-2986124/011-2903950 &nbsp;&nbsp; Deputy Registrar : 011-2903951/011-2908165 &nbsp;&nbsp; Office : 011-2903952/3</div>';
	gtDiv += '<div style="width:100%text-align:center;line-height: 0;font-size:12px;">Web:<a href="www.fgs.kln.ac.lk">www.fgs.kln.ac.lk</a> &nbsp;&nbsp; Email:<a href="mailto:fgs@kln.ac.lk">fgs@kln.ac.lk</a> &nbsp;&nbsp; Facebook: <a href="www.facebook.com/FGSKelaniya">www.facebook.com/FGSKelaniya</a></div><br>';
	// gtDiv += '<div style="width:100%text-align:center;"><u style="line-height: 2;font-size:12px;"></u></div>';




	gtDiv += '</footer>';

	gtDiv += '<div class="page-header" style="text-align: center"></div>';
	return gtDiv;
}

async function specialApprovedforExam(studentTmpi) {
	let formData = new FormData();
	formData.append('action', "applyExamsSpecialApprove");
	formData.append('studentNo', studentNoArr[studentTmpi]);
	formData.append('authcode', authcode);
	formData.append('username', dataRep['userId']);

	try {
		const response5 = await $.ajax({
			type: 'POST',
			url: 'rules/students.php',
			data: formData,
			processData: false,
			contentType: false
		});

		// Display a success alert with SweetAlert
		Swal.fire({
			title: 'Approved Successfully!',
			text: "The exam has been approved successfully! The student can now apply through their portal.", // Display the response message if needed
			icon: 'success',
			confirmButtonText: 'OK'
		});

	} catch (error) {
		// Display an error alert if the request fails
		console.log(error);
		Swal.fire({
			title: 'Error!',
			text: 'An error occurred while approving the exam.',
			icon: 'error',
			confirmButtonText: 'Try Again'
		});
	}
}

async function specialApprovedforExamWithoutHold(studentTmpi) {
	let formData = new FormData();
	formData.append('action', "applyExamsSpecialApproveWithoutHold");
	formData.append('studentNo', studentNoArr[studentTmpi]);
	formData.append('authcode', authcode);
	formData.append('username', dataRep['userId']);

	try {
		const response5 = await $.ajax({
			type: 'POST',
			url: 'rules/students.php',
			data: formData,
			processData: false,
			contentType: false
		});

		// Display a success alert with SweetAlert
		Swal.fire({
			title: 'Approved Successfully!',
			text: "The exam has been approved successfully! The student can now apply through their portal.", // Display the response message if needed
			icon: 'success',
			confirmButtonText: 'OK'
		});

	} catch (error) {
		// Display an error alert if the request fails
		console.log(error);
		Swal.fire({
			title: 'Error!',
			text: 'An error occurred while approving the exam.',
			icon: 'error',
			confirmButtonText: 'Try Again'
		});
	}
}


async function resetPassword(studentTmpi) {

	// Ask confirmation first
	const result = await Swal.fire({
		title: 'Are you sure?',
		text: "You are about to reset this student's password!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, reset it!',
		cancelButtonText: 'Cancel'
	});

	// If user cancels → stop function
	if (!result.isConfirmed) {
		return;
	}

	let formData = new FormData();
	formData.append('action', "resetStudentPassword");
	formData.append('studentNo', studentNoArr[studentTmpi]);
	formData.append('authcode', authcode);
	formData.append('username', dataRep['userId']);

	try {
		const response5 = await $.ajax({
			type: 'POST',
			url: 'rules/students.php',
			data: formData,
			processData: false,
			contentType: false
		});

		Swal.fire({
			title: 'Successfully Reset!',
			text: "The student password successfully reset.",
			icon: 'success',
			confirmButtonText: 'OK'
		});

	} catch (error) {
		console.log(error);
		Swal.fire({
			title: 'Error!',
			text: 'An error occurred while resetting the password.',
			icon: 'error',
			confirmButtonText: 'Try Again'
		});
	}
}

