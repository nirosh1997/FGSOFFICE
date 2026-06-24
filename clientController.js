//
// File    : clientController.js
// Author  : Gamini Wjayarathna
// Date    : 11/05/2013
// Descritpiton:
//         This file contains the main javascript required for the application.
//         It then loads the following javascript files dyamically as and when required.
// 
//         1. isrDBHandler.js - Contains all the database functions
//         


// Global varibles declaration
const isValidDate = dateString => !isNaN(new Date(dateString).getTime());
const INSTITUTECODELENGTH = 10;
const UNITCODELENGTH = 10;
const TESTCODELENGTH = 10;
const PATIENTCODELENGTH = 10;
const SPECIMENTYPECODELENGTH = 10;
const SPECIMENLENGTH = 10;//added- 13.11.2013
const UNIVERSITYCODELENGTH = 3;
const FACULTYCODELENGTH = 5;
const DEPARTMENTCODELENGTH = 10;
const PROGRAMMETYPECODELENGTH = 10;

var authcode;
//start..................
var documentIDLength = 0;
var dataItemIDLength = 0;
var decisionMakingPointIDLength = 0;
var studentNameLength = 0;
var ReRepLength = 0;
var ReRep_SubLength = 0;
var Ress_subjectCodeArr = new Array();
var Ress_subjectTitleArr = new Array();
var Ress_achedamicYearArr = new Array();
var Ress_attemptArr = new Array();
var Ress_DegreeArr = new Array();
var ReRep_subjectSemesterArr = new Array();
var ReRep_attempt_time = new Array();
var ExamDetailsLength = 0;


var edu_application_no = [];
var edu_university = [];
var edu_awarding_country = [];
var edu_qualification_type = [];
var edu_designator = [];
var edu_qualifier = [];
var edu_graduate_year = [];
var edu_graduate_month = [];
var edu_duration = [];
var edu_effective_date = [];
var edu_gpa = [];
var edu_class = [];
var edu_result_status = [];
var eduRowLength = 0;

var prof_application_no = [];
var prof_qualification = [];
var prof_qualification_level = [];
var prof_awarding_authority = [];
var prof_awarding_year = [];
var prof_awarding_country = [];
var prof_effective_date = [];
var profRowLength = 0;

var work_application_no = [];
var work_organization = [];
var work_designation = [];
var work_awarding_country = [];
var work_address = [];
var work_start_date = [];
var work_end_date = [];
var work_verified = [];
var workRowLength = 0;

var programmeTypeCode1Arr = new Array();
var ss_DegreeArr = new Array();
var ss_subjectCodeArr = new Array();
var ss_subjectTitleArr = new Array();
var ss_achedamicYearArr = new Array();
var ss_subjectSemesterArr = new Array();
var ss_attemptArr = new Array();
var ss_SubLength = 0;

var rr_subjectCodeArr = new Array();
var rr_subjectTitleArr = new Array();
var rr_achedamicYearArr = new Array();
var rr_subjectSemesterArr = new Array();
var rr_attemptArr = new Array();
var rr_DegreeArr = new Array();
var rr_reasonArr = new Array();
var rr_SubLength = 0;

var ss_subjectSemesterRepeatArr = new Array();
var ReRep_subjectNameArr = new Array();
var ReRep_GradeArr = new Array();
//end.........................

studentNICProfileArr
//Chinthaka profile----------
var studentNICWoArr = new Array();
var applicationNoWoArr = new Array();
var workFieldNameArr = new Array();
var workValueArr = new Array();
var workPinArr = new Array();
var workPinLength = 0;
var marksArr = new Array();
var examiner1Arr = new Array();
var examiner2Arr = new Array();
var avgMarksArr = new Array();
var exam_releasedDate = new Array();

var rep_examiner1Arr = new Array();
var rep_examiner2Arr = new Array();
var rep_avgMarksArr = new Array();
var rep_exam_releasedDate = new Array();

var RErep_examiner1Arr = new Array();
var RErep_examiner2Arr = new Array();
var RErep_avgMarksArr = new Array();
var RErep_exam_releasedDate = new Array();

var subjectGPAArr = new Array();
var subjectTitleArr = new Array();
var subjectCreditsArr = new Array();

var subjectNameArr = new Array();
var subjectExamStatus = new Array();
var subjectReRepExamStatus = new Array();
var MarksLength = 0;

var studentNICProfileArr = new Array();
var applicationNoProfileArr = new Array();
var workFieldNameProfileArr = new Array();
var workValueProfileArr = new Array();
var workPinProfileArr = new Array();
var profesionalprofileLength = 0;
var IncomeSourceCodeArr1 = new Array();
var successCount = 0;


var installmentNoLength = degreeCodeLength1 = tCLength = 0;
var messageTypeLength = 0;
var educationPinLength = 0;
var sequenceNoLength = 0;
var transactionCodeLength = 0;
var universityCodeLength = 0;
var criteriaCodeLength = 0;
var userLength = 0;
var testLength = 0;

var degreeCodeLength = facultyCodeLength = tCodeLength = programmeTypeCodeLength = departmentCodeLength = departmentCodeTitleLength = 0;
var programmeTypeTitleLength = courseUnitTitleLength = courseUnitCodeLength = degreeTitleLength = 0;
var lecturerEmpNoLength = lecturercourseunitIdLength = voucherIdLength = studentPaymentIdLength = 0;
var studentNoLength = studentNICLength = instalmentTypeLength = studentcourseunitIdLength = BOSNoLength = tidNoLength = ridNoLength = dataItemIDLength = applicationNoLength = sessionIDLength = transactionCodeNoLength = 0;
var categoryTitleLength = categoryCodeLength = subcategoryCodeLength = budgetCodeLength = TotStuReportLength = 0;
var userIdLength = roleIdLength = StudentCountLength = 0;
var invoiceNoLength = 0;
var keyIndex = keyIndexSub = instituteLastIndex = unitLastIndex = departmentLastIndex = testLastIndex = 0;
var instituteIndex = unitIndex = departmentIndex = testIndex = achedamicYearLength = 0;
var instituteCodeStr = unitCodeStr = departmentCodeStr = fieldDisabled = "";
var userName, roleName, str, numberOfRecords, clientInterface, errorMsg;
var instituteCode = instituteTitle = msg = "";
var errorCounter = new Array();
errorCounter["instituteCode"] = errorCounter["instituteTitle"] = "0";
var deptCode = deptName = new Array();

var facultyCodeStr = DepartmentCodeStr = degreeCodeStr = universityCodeStr = programmeTypeCodeStr = courseUnitCodeStr = categoryTypeStr = "";
var subcategoryCodeStr = "";
var sequenceNo1Arr = new Array();
var documentName1Arr = new Array();
var documentID1Arr = new Array();
var roleNameArr = new Array();
var roleIdArr = new Array();
var userIdArr = new Array();
var passWdArr = new Array();
var userNameArr = new Array();
var ridArr = new Array();
var sessionuserNameArr = new Array();
//var dataRep = new Array();
var userdepartmentCodeArr = new Array();
var dataRep = new Array();

dataRep["userId"] = dataRep["passWd"] = dataRep["userName"] = dataRep["roleName"] = "";
dataRep["universityCode"] = dataRep["universityTitle"] = "";
dataRep["criteriaCode"] = dataRep["criteriaTitle"] = "";
dataRep['facultyCode'] = dataRep['facultyTitle'] = dataRep['selecteduniversity'] = dataRep["selectedFaculty"] = "";
dataRep['departmentCode'] = dataRep['departmentTitle'] = "";
dataRep['selectedcriteria'] = "";
dataRep["degreeCode"] = dataRep["degreeTitle"] = dataRep["academicYear"] = dataRep["duration"] = dataRep["credits"] = dataRep["batchNo"] = "";
dataRep["selectedType"] = dataRep["semester"] = "";
dataRep["programmeTypeCode"] = dataRep["programmeTypeTitle"] = "";
dataRep['studentNo'] = dataRep['studentNIC'] = dataRep['studentName'] = dataRep['studentSex'] = dataRep['studentDOB'] = dataRep['studentAge'] = dataRep['studentPermanentAddress'] = dataRep['studentAddressLine02'] = dataRep['studentContactLan'] = dataRep['studentContactMobile'] = dataRep['studentContactEmail'] = "";
dataRep['dobYYYY'] = dataRep['dobMM'] = dataRep['dobDD'] = "";
dataRep['lectureEMPno'] = dataRep['lecturerPersonalTitle'] = dataRep['lectureName'] = dataRep['lectureGender'] = dataRep['lectureDOB'] = dataRep['lectureAge'] = dataRep['lectureAddressL1'] = dataRep['lectureAddressL2'] = dataRep['lectureContactLan'] = dataRep['lectureContactMobile'] = dataRep['lectureContactEmail'] = "";
dataRep["type"] = dataRep['paymentRate'] = "";
dataRep["studentPermanentAddress"] = "";
dataRep["studentAddressLine02"] = "";
dataRep["courseUnitCode"] = dataRep["courseUnitTitle"] = "";
dataRep['method1'] = dataRep['method2'] = "";
dataRep['applicationNo'] = "";
dataRep["calenderYear"] = dataRep["applicationFee"] = dataRep["registrationFee"] = dataRep["examinationFee"] = dataRep["tutionFeeFirstYear"] = dataRep["tutionFeeSecondYear"] = dataRep["courseFeeTotal"] = dataRep["firstinstalment"] = dataRep["secondinstalment"] = dataRep["thirdinstalment"] = dataRep["forthinstalment"] = dataRep["fifthinstalment"] = dataRep["sixthinstalment"] = dataRep["libraryFeeRefundable"] = dataRep["libraryFeeNonRefundable"] = dataRep["supervisionFee"] = dataRep["foreigntourFee"] = dataRep["firstYearPartOne"] = dataRep["fullpaymentDeadlineDate"] = dataRep["halfpaymentDeadlineDate"] = "";
dataRep["secondYearPartTwo"] = dataRep["secondYearPartTwo"] = dataRep["Feeforusingcomputerlab"] = dataRep["Feeforusingotherlaboratories"] = dataRep["FeeforInternetusagesandpaymentprocessingcharges"] = dataRep["fullTotalAmount"] = "";
dataRep["subTotalAmount"] = dataRep["NoOfInstalments"] = dataRep["extendedDuration"] = dataRep["addtionalPayments"] = dataRep["commenceDate"] = "";
dataRep["annualBenchFee"] = dataRep["certificateFee"] = dataRep["convocationFee"] = dataRep["renewalRegistrationFee"] = dataRep["repeatExamFee"] = "";
dataRep["date"] = "";
dataRep['amount'] = "";
dataRep["paymentId"] = dataRep["paymentTitle"] = dataRep["voucherId"] = "";

dataRep["UserAR"] = "";
var departmentCodeappArr = new Array();
var degreeCodappeArr = new Array();
var facultyCode3Arr = new Array();


var studentNICArr = new Array();
var usernameArr = new Array();
var studentNICArr1 = new Array();
var applicationNoArr = new Array();
var educationFieldNameArr = new Array();
var educationValueArr = new Array();
var educationPinArr = new Array();
var QstudentNICArr = new Array();
var QapplicationNoArr = new Array();
var WstudentNICArr = new Array();
var WapplicationNoArr = new Array();
var workFieldNameArr = new Array();
var workValueArr = new Array();
var workPinArr = new Array();
var workPinLength = 0;
//start............................
var documentIDArr = new Array();
var documentNameArr = new Array();
var dataItemIDArr = new Array();
var dataItemNameArr = new Array();
var documentData = new Array();
var decisionMakingPointIDArr = new Array();
var decisionMakingPointNameArr = new Array();
var studentlistArr = new Array();

//end.................................
var studentNoArr = new Array();
var messageTypeArr = new Array();
var messageArr = new Array();
var subjectArr = new Array();
//......Re print Application......
var universityCode1Arr = new Array();
var facultyCode1Arr = new Array();
var programmeTypeCode1Arr = new Array();
var degreeCode1Arr = new Array();
var applicationNo1Arr = new Array();
var temporaryNo1Arr = new Array();
var studentNIC1Arr = new Array();
var studentName1Arr = new Array();
var studentPersonalTitle1Arr = new Array();
var studentInitial1Arr = new Array();
var studentDateofbirth1Arr = new Array();
var studentNationality1Arr = new Array();
var countryRegion1Arr = new Array();
var studentCitizenship1Arr = new Array();
var studentDesignation1Arr = new Array();
var studentEmployment1Arr = new Array();
var studentPermanentAddress1Arr = new Array();
var studentOfficeAddress1Arr = new Array();
var correspondence1Arr = new Array();
var studentContactLan1Arr = new Array();
var studentContactMobile1Arr = new Array();
var studentContactEmail1Arr = new Array();
var achedamicYear1Arr = new Array();
var medium1Arr = new Array();
var medium2Arr = new Array();
var degreeTitle1Arr = new Array();
var applicantBatchNumber = new Array();

var studentNIC2Arr = new Array();
var applicationNo2Arr = new Array();
var educationFieldName2Arr = new Array();
var educationValue2Arr = new Array();
var educationPin2Arr = new Array();

var studentNIC3Arr = new Array();
var applicationNo3Arr = new Array();
var workFieldName3Arr = new Array();
var workValue3Arr = new Array();
var workPin3Arr = new Array();

//.........end...........................	

var degreeCodeUserArr = new Array();
var degreeTitleUserArr = new Array();

var userIdUserArr = new Array();
var userNameUserArr = new Array();

var universityCodeArr = new Array();
var universityTitleArr = new Array();

var facultyCodeArr = new Array();
var facultyTitleArr = new Array();

var departmentCodeArr = new Array();
var departmentTitleArr = new Array();

var programmeTypeCodeArr = new Array();
var programmeTypeTitleArr = new Array();

var degreeCodeArr = new Array();
var degreeCodeArr2 = new Array();
var degreeCodeArr1 = new Array();
var degreeTitleArr = new Array();
var degreeTitleArr2 = new Array();
var degreeTitleArr1 = new Array();
var academicYearArr = new Array();
var academicYearArr1 = new Array();
var batchNoArr = new Array();
var semesterArr = new Array();
var creditsArr = new Array();
var durationArr = new Array();

var courseUnitCodeArr = new Array();
var courseUnitTitleArr = new Array();
var typeArr = new Array();
var method1Arr = new Array();
var method2Arr = new Array();

var criteriaCodeArr = new Array();
var criteriaTitleArr = new Array();

var lecturerNameArr = new Array();
var lecturerEmpNoArr = new Array();
var lecturerNICArr = new Array();
var lecturerPersonalTitleArr = new Array();
var lecturerSexArr = new Array();
var lecturerDateofbirthArr = new Array();
var lecturerAgeArr = new Array();
var lecturerAddressLine01Arr = new Array();
var lecturerAddressLine02Arr = new Array();
var lecturerContactLand01Arr = new Array();
var lecturerContactMobile01Arr = new Array();
var lecturerContactEmailArr = new Array();
var lecturercourseunitIdArr = new Array();
var paymentRateArr = new Array();

var calenderYearArr = new Array();

var registrationFeeArr = new Array();
var applicationFeeArr = new Array();
var examinationFeeArr = new Array();
var courseFeeTotalArr = new Array();
var firstinstalmentArr = new Array();
var secondinstalmentArr = new Array();
var thirdinstalmentArr = new Array();
var forthinstalmentArr = new Array();
var fifthinstalmentArr = new Array();
var sixthinstalmentArr = new Array();
var libraryFeeRefundableArr = new Array();
var libraryFeeNonRefundableArr = new Array();
var FeeforusingcomputerlabArr = new Array();
var FeeforusingotherlaboratoriesArr = new Array();
var FeeforInternetusagesandpaymentprocessingchargesArr = new Array();
var NoOfInstalmentsArr = new Array();
var tutionFeeFirstYearArr = new Array();
var tutionFeeSecondYearArr = new Array();
var supervisionFeeArr = new Array();
var foreigntourFeeArr = new Array();
var firstYearPartOneArr = new Array();
var secondYearPartTwoArr = new Array();
var fullTotalAmountArr = new Array();
var subTotalAmountArr = new Array();
var extendedDurationArr = new Array();
var addtionalPaymentsArr = new Array();
var commenceDateArr = new Array();
var fullpaymentDeadlineDateArr = new Array();
var halfpaymentDeadlineDateArr = new Array();
var renewalRegistrationFeeArr = new Array();
var annualBenchFeeArr = new Array();
var convocationFeeArr = new Array();
var invoiceNoArr = new Array();
var timeExtendedArr = new Array();
var repeatExamFeeArr = new Array();
var certificateFeeArr = new Array();
var textbookFeeArr = new Array();
var internetFeeArr = new Array();

var studentTotalAmountArr = new Array();
var instalmentTypeArr = new Array();
//---------------------------------profile---------------------------------
var trfacultyCodeArr = new Array();
var trprogrammeTypeCodeArr = new Array();
var trdegreeCodeArr = new Array();
var trdegreeTitleArr = new Array();
var trfacultyTitleArr = new Array();
var trprogrammeTypeTitleArr = new Array();
var trdegreeCodeLength = 0;
//---------------------------------profile---------------------------------			
var studentNoArr = new Array();
var studentNameArr = new Array();
var studentNICArr = new Array();
var studentAgeArr = new Array();
var studentSexArr = new Array();
var studentDOBArr = new Array();
var studentPermanentAddressArr = new Array();
var studentInterViewStatus = new Array();
var studentInterViewDesesion = new Array();
var applicantSelected = new Array();
var studentPaidAmountArr = new Array();
var studentPermanentAddressArr1 = new Array();
var studentAddressL2Arr = new Array();
var studentContactLanArr = new Array();
var studentContactMobileArr = new Array();
var studentContactEmailArr = new Array();
var studenttotalPayedArr = new Array();

var studentRegisteredDateArr = new Array();
var studentDurationArr = new Array();
var studentLibraryIdCodeArr = new Array();
var studentcourseunitIdArr = new Array();
var courseUnitTypeArr = new Array();
var regionTypeArr = new Array();

var categoryCodeArr = new Array();
var categoryTitleArr = new Array();
var categoryType1Arr = new Array();
var categoryType2Arr = new Array();

var categoryTypeArr = new Array();
var paied1Arr = new Array();
var paied2Arr = new Array();
var paymentDateArr = new Array();
var paymentTimeArr = new Array();

var subcategoryCodeArr = new Array();
var subcategoryTitleArr = new Array();

var coursefeeTypeArr = new Array();


// var budgetDataArr2 = new Array();
// var budgetDataArr3  = new Array();

var noteNo1Arr = new Array();
var noteNo2Arr = new Array();
var noteNo3Arr = new Array();
var noteNo4Arr = new Array();
var rate1Arr = new Array();
var unit1Arr = new Array();
var rate2Arr = new Array();
var unit2Arr = new Array();
var incomeAmount1Arr = new Array();
var expenditureAmount1Arr = new Array();
var totalIncomeAmountArr = new Array();
var totalIncomeAfterTaxArr = new Array();
var TaxForTotalIncomeArr = new Array();
var totalExpenditureAmountArr = new Array();
var expenditureAmount2Arr = new Array();
var budgetIdArr = new Array();
var incomeAmount2Arr = new Array();

var budgetDataIncomeArr = new Array();
var budgetDataExpenditureArr = new Array();
var catArr = new Array();
var budgetIdDataArr = new Array();
var budgetDataExpenditureArr1 = new Array();
var paymentMethodArr = new Array();
var courseTypeArr = new Array();

var paymentIdLength = 0;
var paymentIdArr = new Array();
var paymentTitleArr = new Array();
var amountArr = new Array();
var feeCatArr = new Array();
var paymentStudentArr = new Array();
dataRep["amount"] = "";
var voucherPaymentArr = new Array();
var letterDataArr = new Array();
var batchPaymentArr = new Array();
var voucherArr = new Array();
var voucherIdArr = new Array();
var studentPaymentIdArr = new Array();
var voucherArr2 = new Array();
var tCodeArr = new Array();
var messageIdArr = new Array();
var referenceNoArr = new Array();
var notesuserIdArr = new Array();
var messageArr = new Array();
var notesuserNameArr = new Array();
var profileapplicationNoArr = new Array();
var profileapplicationNoArr1 = new Array();
var profilestudentNameArr = new Array();
// var profilestudentInitialArr = new Array();

var profilestudentNICArr = new Array();
var profiledegreeCodeArr = new Array();
var profiledegreeTitleArr = new Array();
var profilestudentPermanentAddressArr = new Array();
var profilestudentContactLanArr = new Array();
var profilestudentContactMobileArr = new Array();
var profilestudentContactEmailArr = new Array();
var profilestudentEmploymentArr = new Array();
var profilestudentInitialArr = new Array();
var messageIdLength = 0;
var studentNICLength = 0;
/*
var criteriaCodeArr  = new Array();
var criteriaTitleArr = new Array();*/
var criteriaCodeLength = 0;
var criteriaData = new Array();

var applicationNoArr = new Array();
var applicationNoLength = 0;
var applicationProfile = 0;
var applicationNo2Length = 0;
var applicationNo3Length = 0;
var maxapplicationNoArr = new Array();

var studentPersonalTitleArr = new Array();
var studentTransferStudentNoArr = new Array();
var studentPersonalTitleArr1 = new Array();
var studentInitialArr = new Array();
var studentInitialArr1 = new Array();
var studentDateofbirthArr = new Array();
var studentNationalityArr = new Array();
var studentCitizenshipArr = new Array();
var studentEmploymentArr = new Array();
var studentPermanentAddressArr = new Array();
var applicant_appliedDate = new Array();
var applicant_Pay_amount = new Array();

var studentOfficeAddressArr = new Array();
var correspondenceArr = new Array();
var librarycodeArr = new Array();
var studentContactLanArr = new Array();
var studentContactMobileArr = new Array();
var studentContactEmailArr = new Array();
var slqlArr = new Array();

var bachelorDegreeArr = new Array();
var bachelorDegreeTitleArr = new Array();
var bachelorDegreeobtainUniversityArr = new Array();
var bachelorDegreegraduationYearArr = new Array();
var bachelorDegreegraduationMonthArr = new Array();
var higherDegreeArr = new Array();
var higherDegreeTitleArr = new Array();
var higherDegreeobtainUniversityArr = new Array();
var higherDegreegraduationYearArr = new Array();
var higherDegreegraduationMonthArr = new Array();
var qualificationOneArr = new Array();
var qualificationAwardingAuthorityOneArr = new Array();
var qualificationAwardingYearOneArr = new Array();
var qualificationTwoArr = new Array();
var qulificationAwardingAuthorityTwoArr = new Array();
var qulificationAwardingYearTwoArr = new Array();

var companyOneArr = new Array();
var designationOneArr = new Array();
var fromOneArr = new Array();
var toOneArr = new Array();
var companyTwoArr = new Array();
var designationTwoArr = new Array();
var fromTwoArr = new Array();
var toTwoArr = new Array();
var companyThreeArr = new Array();
var designationThreeArr = new Array();
var fromThreeArr = new Array();
var toThreeArr = new Array();
var refreeNameOneArr = new Array();
var refreeAddressOneArr = new Array();
var refreeDesignationOneArr = new Array();
var refreeNameTwoArr = new Array();
var refreeAddressTwoArr = new Array();
var refreeDesignationTwoArr = new Array();

var registrationSougthArr = new Array();
var mainSubjectArr = new Array();
var fieldOfSpecializationArr = new Array();
var researchMediumArr = new Array();
var researchTitleArr = new Array();
var grantForProjectArr = new Array();
var grantDetailsArr = new Array();
var financedDetailsArr = new Array();
var registeredOtherDegreeArr = new Array();

var applicantNameArr = new Array();
var applicantInstitutionArr = new Array();
var applicantAddressArr = new Array();
var applicantResearchTitleArr = new Array();
var supervisorNameOneArr = new Array();
var supervisorPositionOneArr = new Array();
var supervisorInstitutionOneArr = new Array();
var supervisorNameTwoArr = new Array();
var supervisorPositionTwoArr = new Array();
var supervisorInstitutionTwoArr = new Array();
var applicantNameForSupervisorArr = new Array();
var supervisorSignatureNameOneArr = new Array();
var supervisorDateOneArr = new Array();
var supervisorSignatureOneArr = new Array();
var supervisorSignatureNameTwoArr = new Array();
var supervisorDateTwoArr = new Array();
var supervisorSignatureTwoArr = new Array();
var recHeadDepArr = new Array();
var recStudyBoardArr = new Array();
var recFacultyBoardArr = new Array();
var recSenateArr = new Array();

var currentdate = new Date();
var year = currentdate.getFullYear();
var month = (currentdate.getMonth() + 1);
var date = currentdate.getDate();
var hours = currentdate.getHours();
var min = currentdate.getMinutes();


var paymentDeadlineDateArr = new Array();
var notificationArr = new Array();
var paymentExtendedDateArr = new Array();

var ApplicantData = new Array();


var selectedArr = new Array();
var updateDataStrArray = new Array();

var SelectedStudentData = new Array();
//var UpdatedStudentData = new Array();
var updateDataArray = new Array();

var birthCertificateArr = new Array();
var degreeCertificateArr = new Array();
var paymentTypeOneArr = new Array();
var paymentDateOneArr = new Array();
var paymentAmountOneArr = new Array();
var payAmountArr = new Array();
var studentNoNewArr = new Array();
var degreeCodeNewArr = new Array();
var installmentArr = new Array();
var paymentTypeTwoArr = new Array();
var paymentDateTwoArr = new Array();
var courseFeeArr = new Array();
var libraryFeeArr = new Array();
var degreeCodeNewArr2 = new Array();
var acYearArr = new Array();
var paymentTypeThreeArr = new Array();
var paymentDateThreeArr = new Array();
var dueAmountArr = new Array();
var degreeCodeForInstArr = new Array();
var academicYrForInstArr = new Array();
var instNoForInstArr = new Array();
var amountForInstArr = new Array();
var deadlineForInstArr = new Array();
var degreeTitleForInstArr = new Array();
var courseFeeForInstArr = new Array();
var libraryFeeForInstArr = new Array();
var payAmountArr1 = new Array();
var courseFeeArr1 = new Array();
var dueAmountArr1 = new Array();
var inspayAmountArr = new Array();
var insdueAmountArr = new Array();
var installmentFieldNameArr1 = new Array();
var installmentValueArr1 = new Array();
var installmentDeadlineArr1 = new Array();
var insstudentNoArr = new Array();


var commenceDateArr = new Array();
var endDateArr = new Array();
var facultyBoardDateArr = new Array();
var facultyBoardNoArr = new Array();
var boardOfStudyDateArr = new Array();
var boardOfStudyNoArr = new Array();
var thesisTopicOneArr = new Array();
var thesisTopicTwoArr = new Array();
var thesisTopicThreeArr = new Array();
var thesisTopicFourArr = new Array();
var supervisorOneArr = new Array();
var supervisorTwoArr = new Array();
var examinerOneArr = new Array();
var examinerTwoArr = new Array();
var examinerThreeArr = new Array();
var progressReportOneArr = new Array();
var progressReportDateOneArr = new Array();
var progressReportTwoArr = new Array();
var progressReportDateTwoArr = new Array();
var progressReportThreeArr = new Array();
var progressReportDateThreeArr = new Array();
var progressReportFourArr = new Array();
var progressReportDateFourArr = new Array();
var progressReportFiveArr = new Array();
var progressReportDateFiveArr = new Array();
var progressReportSixArr = new Array();
var progressReportDateSixArr = new Array();
var extentionFromOneArr = new Array();
var extentionToOneArr = new Array();




var tidArr = new Array();
var titleArr = new Array();
var lecturerNameArr = new Array();
var RemDateArr = new Array();
var descriptionArr = new Array();
/*	var dobYYYYArr = new Array();
	var dobMMArr = new Array();
	var dobDDArr = new Array();*/

var BOSNoArr = new Array();
var BOSDateArr = new Array();
var DateReceivefromHeadArr = new Array();
var AcceptArr = new Array();
var DateRequestRenominateArr = new Array();

var reminderMethodArr = new Array();

var receivedByArr = new Array();
var receivedDateArr = new Array();
var forwardToArr = new Array();
var forwardedDateArr = new Array();

var FGSBoardNoArr = new Array();
var FGSBoardDateArr = new Array();
var DateReceivefromBOSArr = new Array();
var AcceptfgsArr = new Array();
var DateRequestRenominateFgsArr = new Array();

var SenateNoArr = new Array();
var SenateDateArr = new Array();
var DateReceivefromFGSBoadArr = new Array();
var AcceptSenateArr = new Array();
var DateRequestRenominateSenateArr = new Array();

var transactionCodeArr = new Array();
var transactionSubCodeArr = new Array();
var transacDescriptionArr = new Array();
var sendformuseArr = new Array();
// var facultyCodeArr = new Array();
// var degreeCodeArr = new Array();

var infaceEleName1Arr = new Array();
var infaceEleName2Arr = new Array();
var infaceEleName3Arr = new Array();
var infaceEleName4Arr = new Array();
var infaceEleName5Arr = new Array();
var infaceEleName6Arr = new Array();
var infaceEleName7Arr = new Array();
var infaceEleName8Arr = new Array();
var infaceEleName9Arr = new Array();
var infaceEleName10Arr = new Array();
var infaceEleName11Arr = new Array();
var infaceEleName12Arr = new Array();
var infaceEleName13Arr = new Array();
var infaceEleName14Arr = new Array();

var documentItemIDArr = new Array();
var sequenceNoArr = new Array();
var docmentIDArr = new Array();
var sessionIDArr = new Array();
var userIdArr = new Array();
var ipaddArr = new Array();
var durationArr = new Array();
var countryRegionArr = new Array();
var sequenceNoArr = new Array();
var valueArr = new Array();
var documentName1Arr = new Array();
var documentID1Arr = new Array();
var dataItemName1Arr = new Array();
var fieldNameArr = new Array();
var fieldValueArr = new Array();
var achedamicYearArr = new Array();
var achedamicYearArr1 = new Array();
var achedamicYearArr2 = new Array();
var insdegreeCodeArr = new Array();
var insacademicYearArr = new Array();
var insfieldNameArr = new Array();
var insvalueArr = new Array();
var insdeadlineArr = new Array();
var insdegreeTitleArr = new Array();

var mediumArr = new Array();
var registeredArr = new Array();
// transactionCodeNoLength++;
var documentID2Arr = new Array();
var dataItemID2Arr = new Array();
var sessionID2Arr = new Array();
var sequenceNo2Arr = new Array();
var value2Arr = new Array();
var documentName2Arr = new Array();
var dataItemName2Arr = new Array();

var itemValueArr = new Array();
var numberArr = new Array();
var remarksArr = new Array();
var dateArr = new Array();
var decisionArr = new Array();
var degreeMediumArr = new Array();
var degreeMediumArr1 = new Array();
var pinArr = new Array();


var sdocumentItemIDArr = new Array();
var sdocumentNameArr = new Array();
var sdataItemIDArr = new Array();
var sitemValueArr = new Array();
var ssequenceNoArr = new Array();
var ssessionIDArr = new Array();

/*	 var adocumentItemIDArr= new Array();
	var adocumentNameArr= new Array();
	var adataItemIDArr= new Array();
	var aitemValueArr= new Array();
	var asequenceNoArr= new Array();
	var asessionIDArr= new Array();*/
// End Global variables

var registeredstudentNoArr = new Array();
var registereddegreeCodeArr = new Array();
var registereddegreeTitleArr = new Array();
var registeredachedamicYearArr = new Array();
var registeredmediumArr = new Array();
var registeredprogrammeTypeTitleArr = new Array();
var registeredStudentArr = new Array();
var newStudentNoArr = new Array();
var registeredstudentInitialArr = new Array();
var registeredstudentNICArr = new Array();

var universityCodeArr1 = new Array();
var universityTitleArr1 = new Array();
var facultyCodeArr1 = new Array();
var facultyTitleArr1 = new Array();
var departmentCodeArr1 = new Array();
var departmentTitleArr1 = new Array();
var userIdArr1 = new Array();
var passWdArr1 = new Array();
var userNameArr1 = new Array();
var roleIdArr1 = new Array();
var roleNameArr1 = new Array();


var studentNo2Arr = new Array();
var studentName2Arr = new Array();
var studentNIC2Arr = new Array();
var universityCode2Arr = new Array();
var facultyCode2Arr = new Array();
var studentDateofbirth2Arr = new Array();
var programmeTypeCode2Arr = new Array();
var degreeCode2Arr = new Array();
var achedamicYear2Arr = new Array();
var applicationNo2Arr = new Array();
var degreeMedium2Arr = new Array();

//---------------student profile----------
var oldStudentNoArr = new Array();
var TransferstudentNoArr = new Array();
var transferTypeArr = new Array();


//var newValueArr=new Array();
//var oldValueArr=new Array();
var TransferapplicationNoArr = new Array();
var oldStudentNoLength = 0;
var transferIDArr = new Array();
var notesArr = new Array();
var transferDateArr = new Array();
var transferIDLength = 0;
var commencedegreeCodeArr = new Array();
var commencedegreeTitleArr = new Array();
var durationArr = new Array();
var coursecommenceArr = new Array();
var commenceacademicYearArr = new Array();
var RegisteredDateArr = new Array();
var coursecommenceLength = 0;
//-------------------end-----------

//--------------transfer rules-----------
var ruleIDArr = new Array();
var ruleTitleArr = new Array();
var transferTypeArr = new Array();
ruleIDLength = 0;
//-------------end-------------------------

//Thiwanka
var subjectStatusArr = new Array();
var subjectSemesterArr = new Array();
var subjectAchedamicYearArr = new Array();
var notesArr = new Array();
var studentNoArr1 = new Array();
var academicYearArr1 = new Array();


var applicationNoArrForeign = new Array();
var studentNICArrForeign = new Array();
var durationArrForeign = new Array();
var studentNationalityArrForeign = new Array();
var degreeCodeArrForeign = new Array();
var degreeTitleArrForeign = new Array();
var achedamicYearArrForeign = new Array();
var countryRegionArrForeign = new Array();
var courseFeeArrForeign = new Array();

var facultyCodeArrDegree = new Array();
var facultyTitleArrDegree = new Array();
var degreeCodeArrDegree = new Array();
var degreeTitleArrDegree = new Array();
var mediumArrDegree = new Array();

var degreeCodeArrCount = new Array();
var achedamicYearArrCount = new Array();
var studentNoArrCount = new Array();
var degreeTitleArrCount = new Array();
var nicArrCount = new Array();
var durationArrCount = new Array();


var degreeCodeArrRegistered = new Array();
var facultyCodeArrRegistered = new Array();
var studentNoArrRegistered = new Array();
var achedamicYearArrRegistered = new Array();
var degreeTitleArrRegistered = new Array();
var facultyTitleArrRegistered = new Array();
var courseFeeArrRegistered = new Array();


var studentgenderArr = new Array();
var studentContactEmai21Arr = new Array();

var programmeCodeArr = new Array();
var programmeCodeappeArr = new Array();


//added 23.8.2016**************************************
var degreeCodeForListDocArr = new Array();
var degreeTitleForListDocArr = new Array();

var studentNICForDocArr = new Array();
var applicationNoForDocArr = new Array();
var fieldNameForDocArr = new Array();
var valueForDocArr = new Array();
var appverticalPinForDocArr = new Array();

var appverticalPinLength = 0;

//********************************************				

var selectionCategoryArr = new Array();
var listNumber = new Array();
var BosDate = new Array();
var BosNumber = new Array();

var studentdegreeCodeArr = new Array();
var studentachedamicYearArr = new Array();
var nstudentNoArr = new Array();
var nstudentNICArr = new Array();
var nstudentInitialArr = new Array();
var studentIDArr = new Array();
var messageIdArr = new Array();
var additionalNotesArr = new Array();
var ndateArr = new Array();
var napplicantNoArr = new Array();
var napplicantInitialArr = new Array();
var applicantdegreeCodeArr = new Array();
var applicantachedamicYearArr = new Array();
var messageTypeIDArr = new Array();
var MIDArr = new Array();
var messageNoteArr = new Array();
var nfacultyCodeArr = new Array();
var nfacultyTitleArr = new Array();
var ndeanEmpNoArr = new Array();

var ndegreeCodeLength = nstudentNoLength = napplicantNoLength = confirmNoteLength = messageLength = facultyLength = 0;

var MessageCodeLength = 0;
var messageIDArr = new Array();
var messageTypeArr = new Array();
//var messageTypeArr=new Array();
var EditmessageIDArr = new Array();
var EditMessageCodeLength = 0;


var applicationNoCodeLength = 0;
var selectedFromGraduateArr = new Array();
var selectedFromProfessionalArr = new Array();
var selectedFromPendingQulificationArr = new Array();
var selectedFromSpecialApproveArr = new Array();
var applicationNoArr = new Array();
var degreeCodeArr = new Array();
var programmeCodeArr = new Array();
var studentNoCodeLength = 0;
var degreeCode1Length = 0;
var degreeCode1Arr = new Array();
var degreeTitleArr = new Array();
var programmeTypeCode1Arr = new Array();


var subjectCodeArr = new Array();
var subjectTitleArr = new Array();
var subjectCodeLength = 0;
var subjectdegreeCodeArr = new Array();

var dedegreeCodeArr = new Array();
var degreeCodeSubArr = new Array();
var dedegreeCodeLength = 0;
var academicYearSubArr = new Array();



//library id generate
var libptcode = new Array();
var newlibptcode = new Array();
var libdegreecode = new Array();
var newlibdegreecode = new Array();
var libraryCodeLenth = 0;

//profile----------
var studentNoProArr = new Array();
var applcationNoProArr = new Array();
var studentNoProLength = 0;
var studentNoProfileDataLength = 0;

var batchDegreeCodeArr = new Array();
var batchYearArr = new Array();
var batchCourseFeeArr = new Array();
var batchLibraryFeeArr = new Array();
var batchdetailsLength = 0;

//transferstudentProfile
var tmp_studentNoArr = new Array();
var tmp_degreeCodeArr = new Array();
var tmp_mediumArr = new Array();
var tmp_academicYearArr = new Array();
var tmp_studentNolenght = 0;
// var subjectCodeArr = new Array();
// var subjectTitleArr = new Array();
// var subjectCodeLength =0;
// var subjectdegreeCodeArr =new Array();

//subject
var sub_degreeCodeArr = new Array();
var sub_academicYearArr = new Array();
var sub_semesterArr = new Array();
var sub_subjectCodeArr = new Array();
var sub_subjectTitleArr = new Array();
var sub_statusArr = new Array();
var sub_creditsArr = new Array();
var sub_CodeLength = 0;

var ex_degreeCodeArr = new Array();
var ex_studentNoArr = new Array();
var ex_studentNameArr = new Array();
var ex_semesterArr = new Array();
var ex_attemptArr = new Array();
var ex_subCodeArr = new Array();
var ex_academicYearArr = new Array();
var ex_appliedDateArr = new Array();

var ex_grade = new Array();
var ex_examiner1 = new Array();
var ex_examiner2 = new Array();
var ex_latesubmission = new Array();
var ex_effectivedatethesis = new Array();
var ex_paidAmount = new Array();
var ex_mark = new Array();
var ex_status = new Array();
var ex_cstatus = new Array();
var ex_cstatusnotes = new Array();

var ex_holdstatus = new Array();
var ex_drApporve = new Array();
var ex_paymentApprove = new Array();
var ex_examReason = new Array();
var ex_examReasonDes = new Array();
var ex_examsisMedical = new Array();
var ex_examsmedicalApprove = new Array();
var ex_releasedDate = new Array();


var ex_studentMediumArr = new Array();
var ex_studentRStatusArr = new Array();

var ex_studentReasonArr = new Array();
var ex_CodeLength = 0;

/**Tmp Down**/
var tmpDownStudNoArr = new Array();
var tmpDownStudNameArr = new Array();
var tmpDownGradeArr = new Array();
var tmpDownSubCodeArr = new Array();
var tmpDownDegCodeArr = new Array();
var tmpDownExm1Arr = new Array();
var tmpDownExm2Arr = new Array();
var tmpDownMarksArr = new Array();
var tmpsusSemArr = new Array();
var tmpsubjectGPAArr = new Array();
var tmpDownstudentMediumArr = new Array();
var tmpDownLength = 0;

var tmpSubCodeArr = new Array();
var tmpSubTitleArr = new Array();
var tmpSemesterArr = new Array();
var subDownLength = 0;

var fi_StudNoArr = new Array();
var fi_semArr = new Array();
var fi_GPAArr = new Array();
var fi_ResultArr = new Array();
var fi_MediumArr = new Array();
var fi_AddressArr = new Array();
var fi_Length = 0;
var finalLength = 0;
var fi_PassStudNoArr = new Array();
var fi_PassStudNameArr = new Array();

var cr_degreeCodeArr = new Array();
var cr_finalResultArr = new Array();
var cr_gradeArr = new Array();
var cr_creditsArr = new Array();
var cr_gpaArr = new Array();
var cr_thesisArr = new Array();
var cr_optionalSubGArr = new Array();
var cr_optionalSubCArr = new Array();
var cr_academicYearsArr = new Array();
var cr_resitArr = new Array();
var cr_yearArr = new Array();
var cr_descriptionArr = new Array();
var cr_examHeldArr = new Array();
var cr_examValiddateArr = new Array();
var cr_Length = 0;


var subdegreeCodeArr = new Array();
var substudentnoArr = new Array();
var startdateArr = new Array();
var enddateArr = new Array();
var examdateArr = new Array();
var starttimeArr = new Array();
var endtimeArr = new Array();
var hallnoArr = new Array();
var timeSemArr = new Array();
var stdDegreeCodeArr = new Array();
dataRep["subjectCode"] = dataRep["examdate"] = dataRep["starttime"] = dataRep["endtime"] = dataRep["hallno"] = dataRep["degreeTitle"] = "";


var admissionDegreeCodeArr = new Array();
var admissionDegreeTitleArr = new Array();
var admissionDegreeCodeLength = 0;


var admissionFacultyCodeArr = new Array();
var resultsFacultyCodeArr = new Array();
var resultsdepartmentCodeArr = new Array();

var feebatchyearArr = new Array();

var tmpDownMediumArr = new Array();


var printStudNoArr = new Array();
var printsemArr = new Array();
var printGPAArr = new Array();
var printResultArr = new Array();
var printStuNameArr = new Array();
var printYearArr = new Array();
var printDegreeCodeArr = new Array();
var printstudentMediumArr = new Array();
var PrintsubjectNameArr = new Array();
var PrintsubjectTitleArr = new Array();
var PrintdegreeTitleArr = new Array();
var PrintdurationArr = new Array();
var PrintprogrammeTypeCodeArr = new Array();
var PrintExm1Arr = new Array();
var PrintExm2Arr = new Array();
var PrintMarksArr = new Array();
var PrintGradeArr = new Array();
var PrintsubjectSemArr = new Array();
var PrintsubjectYearArr = new Array();
var PrintsubjectCreditsArr = new Array();
var pr_Length = 0;
var cer_StudNoArr = new Array();
var cer_StuNameArr = new Array();
var printMediumArr = new Array();

var printexamHeldArr = new Array();
var printexamValiddateArr = new Array();
var printresitArr = new Array();
var printcreditsArr = new Array();

var repeatSudentNoArr = new Array();
var repeatAchedamicYearArr = new Array();
var repeatMarksArr = new Array();
var repeatGradeArr = new Array();
var repeatDegreeCodeArr = new Array();
var repeatStudentNameArr = new Array();
var repeatSubjectNameArr = new Array();
var repeatDegreeTitleArr = new Array();
var repeatSubjectTitleArr = new Array();
var repeatSubjectSemesterArr = new Array();
var repeatSubjectStatusArr = new Array();
var repeatSubjectCreditsArr = new Array();
var sub_subjectCodeLength = 0;

var sub_subjectCodeArr = new Array();
var sub_subjectTitleArr = new Array();
var sub_subjectdegreeCodeArr = new Array();
var sub_subjectStatusArr = new Array();
var sub_subjectSemesterArr = new Array();
var sub_subjectAchedamicYearArr = new Array();
var sub_subjectCodeLength = 0;



var paymentCompleteData = new Array();
var paymentConfirmData = new Array();

var rep_studentnoArr = new Array();
var rep_startdateArr = new Array();
var rep_enddateArr = new Array();
var rep_examdateArr = new Array();
var rep_starttimeArr = new Array();
var rep_endtimeArr = new Array();
var rep_hallnoArr = new Array();
var rep_timeSemArr = new Array();
var rep_degreeCodeArr = new Array();
var rep_achedamicYearArr = new Array();
var rep_subjectCodeArr = new Array();
var rep_semesterArr = new Array();
var rep_subjectTitleArr = new Array();
var rep_DegreeTitleArr = new Array();
var rep_facCodeArr = new Array();
var repSub_degreeCodeArr = new Array();

var studentCountArr = new Array();
var paymentCompletedArr = new Array();
var paymentCompletedArr1 = new Array();
var sarConfirmationArr = new Array();

var payCompleteDatedArr = new Array();
var payCompleteTimeArr = new Array();
var pin1Arr = new Array();

var streamNameArr = new Array();
var Main_SubjectArr = new Array();
var Study_FieldArr = new Array();
var Research_TitleArr = new Array();
var projectGrantArr = new Array();
var projectGrantDetailsArr = new Array();
var projectFinancedArr = new Array();


var studentNoArr2 = new Array();
var studentInitialArr2 = new Array();
var studentNICArr2 = new Array();
var degreeCodeArr2 = new Array();
var degreeTitleArr2 = new Array();
var achedamicYearArr2 = new Array();
var courseFeeArr2 = new Array();
var libraryFeeArr2 = new Array();
var feebatchyearArr2 = new Array();


var repDownStudNoArr = new Array();
var repDownStudNameArr = new Array();
var repDownGradeArr = new Array();
var repDownExm1Arr = new Array();
var repDownExm2Arr = new Array();
var repDownMarksArr = new Array();
var ex_studentMediumArr = new Array();
var repDownLength = 0;


var final_Length = 0;

var cr_resit = '';
var cr_year = '';


var final_SemArr = new Array();
var final_GPAArr = new Array();
var final_ResultArr = new Array();
var final_Length = 0;



var rep_subjectNameArr = new Array();
var rep_GradeArr = new Array();
var rep_StatusArr = new Array();
var rep_degreeCodeArr = new Array();
var rep_achedamicYearArr = new Array();
var Rep_subjectTitleArr = new Array();
var Rep_subjectSemesterArr = new Array();

var rep_GradeArrLength = 0;
var rep_GradeLength = 0;
var rr_MarksLength = 0;
var rep_subjectNameLength = 0;
var rep_MarksLength = 0;
var GradeArrLength = 0;


var rep_cr_Length = 0;
var rep_final_Length = 0;
var rep_cr_finalResultArr = new Array();
var rep_cr_descriptionArr = new Array();
var rep_cr_resitArr = new Array();
var rep_cr_yearArr = new Array();
var rep_final_SemArr = new Array();
var rep_final_GPAArr = new Array();
var rep_final_ResultArr = new Array();

var ReRep_studentNoArr = new Array();
var ReRep_degreeCodeArr = new Array();
var ReRep_achedamicYearArr = new Array();
var ReRep_semesterArr = new Array();
var ReRep_subjectTitleArr = new Array();
var ReRep_DegreeTitleArr = new Array();
var ReRep_facCodeArr = new Array();
var ReRepeat_subjectCodeArr = new Array();
var ReRepeat_startdateArr = new Array();
var ReRepeat_enddateArr = new Array();
var ReRepeat_examdateArr = new Array();
var ReRepeat_starttimeArr = new Array();
var ReRepeat_endtimeArr = new Array();
var ReRepeat_hallnoArr = new Array();
var ReRepeat_timeSemArr = new Array();
var ReRepeat_degreeCodeArr = new Array();
var Ress_attemptTimeArr = new Array();


//2021-3-30 //2022-02-12 16Digit----------------------------------
var IncomeSourceCodeArr = new Array();
var IncomeCategoryCodeArr = new Array();
var IncomeCategoryTitleArr = new Array();
var IncomeCategoryCodeLength = 0;

var achedamicYearIncomeArr = new Array();
var IncomeCategoryValueArr = new Array();
var CurrencyArr = new Array();
var Income_degreeCodeArr = new Array();
var IncomedegreeCodeArr = new Array();
var IncomedegreeTitleArr = new Array();


var Pay_RefNoArr = new Array();
var Pay_studentNoArr = new Array();
var Pay_sourceCodeArr = new Array();
var Pay_CategoryCodeArr = new Array();
var Pay_amountArr = new Array();
var Pay_Time_StampArr = new Array();
var Response_ProgressArr = new Array();
var Response_Progress_TimeArr = new Array();
var PayTitileArr = new Array();
var Pay_MethodArr = new Array();
var Pay_studentPersonalTitleArr = new Array();
var Pay_studentInitialArr = new Array();
var Pay_studentNICArr = new Array();

var paydegreeTitleArr = new Array();
var paydegreeCodeArr = new Array();
var payachedamicYearArr = new Array();
var payIncomeSourceCodeArr = new Array();

var RefNoLength = 0;
var IncomeSourceCodeLength = 0;
var Pay_studentNoLenght = 0;


//wifi creation
var studentNameTitleArr = new Array();
var payedStudentNoArr = new Array();
var payedAmountArr = new Array();
var payedResponseProgressArr = new Array();
var wifiNameArr = new Array();
//var studentNameArr= new Array();
//var studentNoArr= new Array();
//var studentNicArr= new Array();
//var	studentContactMobileArr= new Array();
//var	studentContactEmailArr= new Array();

function loadjsfile(filename) {

	var fileref = document.createElement('script');
	fileref.setAttribute("type", "text/javascript");
	fileref.setAttribute("src", filename + JSVersion);
	document.getElementsByTagName("head")[0].appendChild(fileref)

}



loadjsfile("DeanMenu.js");
loadjsfile("ForeignReport.js");
loadjsfile("DocDecisionTransactionTwo.js");
loadjsfile("reportHoldAndNotReleased.js");
//loadjsfile("viewUser.js");
//document stert
loadjsfile("LetterTemplate.js");
loadjsfile("Document.js");
loadjsfile("DataItem.js");
loadjsfile("decisionMakingPoint.js");
loadjsfile("DocumentItem.js");
loadjsfile("docMenu.js");
loadjsfile("DocDecisionTransaction.js");
//document End
loadjsfile("ReprintApplication.js");
loadjsfile("isrDBHandler.js");
loadjsfile("menu.js");
// loadjsfile("emaillog.js");
loadjsfile("AdministratorMenu.js");
loadjsfile("university.js");
loadjsfile("sendForm.js");
loadjsfile("degree.js");
loadjsfile("programmeType.js");
loadjsfile("faculty.js");
loadjsfile("Department.js");
loadjsfile("studentRegistration.js");
loadjsfile("lectureRegistration.js");
loadjsfile("courseUnit2.js");
//loadjsfile("LecturerDetails.js");
loadjsfile("StudentDetails.js");
loadjsfile("AddPaymentDetails.js");
loadjsfile("Bank.js");
loadjsfile("budgetsheet.js");
loadjsfile("BudgetDetails.js");
loadjsfile("Subcategory.js");
loadjsfile("addnewitem.js");
loadjsfile("AddNewCategory.js");
loadjsfile("selectedStudent.js");
loadjsfile("studentMenu.js");
loadjsfile("lecturerMenu.js");
loadjsfile("Report.js");
loadjsfile("BudgetReportMenu.js");
loadjsfile("StudentReportMenu.js");
loadjsfile("studentReport.js");
loadjsfile("user.js");
loadjsfile("Co-ordinatorMenu.js");
loadjsfile("reviseBudgetsheet.js");
loadjsfile("diplomaVoucher.js");
loadjsfile("RegistrationLetter.js");
//loadjsfile("studentAdditionalData.js");
loadjsfile("degreeDetails.js");
loadjsfile("studentExtendedTime.js");
loadjsfile("studentOtherpayment.js");
loadjsfile("studentpayment.js");
loadjsfile("extendedVoucher.js");
loadjsfile("registeredStudentList.js");

loadjsfile("paymentList.js");
loadjsfile("payment.js");

loadjsfile("ApplicationForm.js");
loadjsfile("ApplicationFormEducation.js");
loadjsfile("ApplicationFormReaserch.js");
loadjsfile("ApplicationFormOther.js");
loadjsfile("ApplicationFormWork.js");
loadjsfile("eligibleTest.js");
loadjsfile("criteria.js");
loadjsfile("FinalApplication.js");
loadjsfile("ExportCSV.js");
loadjsfile("ApplicationFeeVoucher.js");

loadjsfile("printApplicationFeeVoucher.js");
loadjsfile("printFinalApplicationForm.js");

loadjsfile("role.js");
loadjsfile("event.js");

loadjsfile("studentProfileMenu.js");
loadjsfile("studentProfileDetails.js");
loadjsfile("ApplicantList.js");
loadjsfile("PendingApplicantList.js");
loadjsfile("ApplicantProfile.js");
loadjsfile("StudentList.js");
loadjsfile("thisisNotification.js");
loadjsfile("tabmenu.js");
loadjsfile("printStudentId.js");
loadjsfile("PreRegStudentList.js");


//addes2015/05/11

loadjsfile("SendingThesisToExamBranch.js");
loadjsfile("PannelBoard.js");
loadjsfile("Evaluation.js");
loadjsfile("ExaminerDepartmentNomination.js");
loadjsfile("AppointExaminersMenu.js");
loadjsfile("AppointExaminersBOSRejectModification.js");
loadjsfile("ExaminerBOSRecommendation.js");
loadjsfile("RequestForFGSBoardRecommendation.js");
loadjsfile("RequestForSenateApproval.js");
loadjsfile("HandingOverThesisToFGSByStudent.js");
loadjsfile("SendingThesisToExaminers.js");
loadjsfile("AppointExaminersFGSRejectModification.js");
loadjsfile("AppointExaminersSenateRejectModification.js");
loadjsfile("ReceivingEvaluationReportFromExaminers.js");
loadjsfile("vivaBoard.js");
loadjsfile("ThesisSubmitMenu.js");
loadjsfile("Viva.js");
loadjsfile("ReceivingNotificationForThesisSubmission.js");
loadjsfile("EligibilityCheck.js");
loadjsfile("AppointExaminers.js");
loadjsfile("ExaminersDetailsView.js");
loadjsfile("ViewReminderDetails.js");
loadjsfile("ViewThesisNotification.js");
loadjsfile("ExaminerBoardUpdate.js");
loadjsfile("ExaminerFGSUpdate.js");
loadjsfile("ExaminerUpdateSenate.js");
loadjsfile("AddOldStudent.js");
//loadjsfile("NewMenu.js");
loadjsfile("AddOldStudentFormTwo.js");
loadjsfile("AddThesisTitle.js");
loadjsfile("BoardReccomendation.js");
loadjsfile("TransactionsDetailsView.js");
loadjsfile("AddDocumentData.js");
loadjsfile("ListDocument.js");
loadjsfile("ClerkMenu.js");
loadjsfile("ClerkDocMenu.js");
loadjsfile("UserActivity.js");
//transactionType strat
loadjsfile("formTransactionType.js");
//transactionType End
loadjsfile("EditApplicantData.js");
loadjsfile("EditStudent.js");
loadjsfile("noteNotification.js");
loadjsfile("BulkPayment.js");

//Thiwanka
loadjsfile("newCourseUnit.js");
loadjsfile("ReportStudent.js");
loadjsfile("ReportTotalStudent.js");
loadjsfile("ReportsAll.js");
loadjsfile("DegreeMediumReport.js");

loadjsfile("studentTransfer.js");
loadjsfile("TransferRules.js");
loadjsfile("TransferMenu.js");
loadjsfile("CreateStudentAccounts.js");
loadjsfile("HeadMenu.js");

//added 23/8/2016
loadjsfile("ApplicantSelection.js");//chinthaka
loadjsfile("interviewList.js");
loadjsfile("ApplicantsForInterview.js");

// added 1.9.2016
loadjsfile("selectedApplicantList.js");
loadjsfile("Message.js");
loadjsfile("editMessage.js");
loadjsfile("ARMenu.js");

//Exam Results
loadjsfile("examresults.js");
//Applicant Transfer
loadjsfile("Applicanttransfer.js");

loadjsfile("ICTMenu.js");
loadjsfile("examMenu.js");

loadjsfile("examresultsfgs.js");
loadjsfile("subject.js");
loadjsfile("subjectView.js");

loadjsfile("application.js");
loadjsfile("examApplication.js");
loadjsfile("repeteApplicationExam.js");
loadjsfile("uploadExamResults.js"); //sew
loadjsfile("uploadExamResultsDownTemp.js");
loadjsfile("finalResultsConfirm.js");
loadjsfile("finalResultsView.js");
loadjsfile("finalResultsViewSem.js");
loadjsfile("finalResultsCriteriaAdd.js");
loadjsfile("admissionForm.js");
loadjsfile("paperCount.js");
loadjsfile("ABMenu.js");
loadjsfile("certificatePrint.js");

loadjsfile("admissionMenu.js");
loadjsfile("repeatadmissionForm.js");
loadjsfile("downloadRepeatCount.js");
loadjsfile("formUploadResultsMenu.js");
loadjsfile("uploadRepExamResults.js");
loadjsfile("uploadRepDownloadList.js");

loadjsfile("ABPaymentView.js");
loadjsfile("libraryMenu.js");

//Phd/MPhil

loadjsfile("ApplicantResearchList.js");
loadjsfile("ResearchApplicantSelection.js");
loadjsfile("formSelectedResearchStudentList.js");
// loadjsfile("EditResearchApplicantData.js");	
loadjsfile("ResearchProfileDetails.js");


//Rerepeat

loadjsfile("ReRepeatAdmission.js");
loadjsfile("ReRepeatCount.js");

loadjsfile("uploadReRepeatExamResults.js");
loadjsfile("uploadReRepeatDownloadList.js");

loadjsfile("GWAIMenu.js");
loadjsfile("SSRegList.js");

loadjsfile("IncomeCategoryDetails.js");


//2022-02-11-----16Digit

loadjsfile("form16DigitPaidList.js");

//2022-02-12-----16Digit

loadjsfile("form16DigitABPaymentView.js");



//2023-09-22-----Wifi Cration Nirosh
loadjsfile("formWifiCreation.js");

//2023-10-23-----New Payment View Nirosh
loadjsfile("form16DigitABPaymentViewNew.js");
loadjsfile("examAppliedList.js");
loadjsfile("examResultUploadNew.js");

loadjsfile("updateUser.js");
loadjsfile("studentViolation.js");
loadjsfile("studentViolationForm.js");
loadjsfile("medicalStudentApprove.js");

loadjsfile("ReportstudentPayedCount.js");
loadjsfile("ReportstudentForeignCount.js");
loadjsfile("ReportstudentRegisterCount.js");
loadjsfile("ReportstudentRegisterCountDate.js");

loadjsfile("common.js");


loadjsfile("appointPanel.js");
loadjsfile("appointPanelView.js");
loadjsfile("appointPanelAddDesicion.js");
loadjsfile("appointPanelViewSummeryList.js");
loadjsfile("downloadListforFBapprove.js");



loadjsfile("SMS.js");
loadjsfile("Email.js");
loadjsfile("sendSMSForm.js");
loadjsfile("downloadFiles.js");
loadjsfile("rules/adminstrator/courseunit.js");
loadjsfile("rules/adminstrator/timetable.js");
loadjsfile("rules/adminstrator/degreeBudgetDetails.js");
loadjsfile("rules/adminstrator/templateManger.js");
loadjsfile("rules/adminstrator/degreeprogram.js");
loadjsfile("rules/adminstrator/department.js");
loadjsfile("rules/adminstrator/incomeCategory.js");
loadjsfile("rules/adminstrator/programType.js");
loadjsfile("rules/adminstrator/roles.js");
loadjsfile("rules/adminstrator/users.js");
loadjsfile("rules/adminstrator/emaillog.js");
loadjsfile("rules/adminstrator/smslog.js");

//reports
loadjsfile("rules/adminstrator/report/coordinatorDetailsReport.js");
loadjsfile("rules/adminstrator/report/paymentloghistroy.js");


function userLogin() {

	var user = document.loginForm2.username.value;
	var password = document.loginForm2.password.value;

	if (!(password && user)) {
		Swal.fire({
			icon: 'warning',
			title: 'User Name and Password Required',
			text: 'Please enter both user name and password to continue.',
			confirmButtonText: 'OK'
		});
		// document.getElementById("formArea").innerHTML += "<div class='MsgText'>User Name and Password are required</div>";
		return;
	} else {

		$('#loading-spinner').show();

		let postData = {
			action: "checkUser",
			user: user,
			password: password,
		};

		$.ajax({
			type: 'POST',
			url: 'rules/user.php',
			data: postData,
			dataType: 'json',
			success: function (response) {

				// 
				console.log(response)
				if (response && response.length > 0 && response[0].status === 200) {
					authcode = response[0].auth_code;
					dataRep['userId'] = user;
					departmentTitleArr[dataRep['selecteddepartment'] - 1]
					isrHandle = new isrDBHandler();
					dataStr = "action=log&interface=getInitial&userId=" + user + "&passWd=" + password;
					isrHandle.getDataFromDBLogin(eval("clientController"), "serverController.php", dataStr);
				} else if (response[0].status === 202) {
					Swal.fire({
						icon: 'error',
						title: 'Account Disabled',
						text: 'Your account has been disabled. Please contact support for assistance.'
					});
				} else {

					Swal.fire({
						icon: 'error',
						title: 'Invalid Username or Password',
						text: 'Please check your credentials and try again.'
					});
				}

			}, complete: function () {
				$('#loading-spinner').hide();
			},
			error: function (error) {
				console.log(error)
				$('#loading-spinner').hide();
			}
		});





		// onetime();
	}
}

function logOut() {
	isrHandle = new isrDBHandler();
	//dataStr = "action=get&interface=getInitial";
	//MODIFIED BY BUDDHIKA ||||||||||||||||||||||||||||||||||||||||||||||
	// var cookies = document.cookie.split(";");
	// //alert(cookies);

	// for (var i = 0; i < cookies.length; i++) {
	// var cookie = cookies[i];
	// var eqPos = cookie.indexOf("=");
	// var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
	// //alert(name+ "=; expires=Thu, 01 Jan 1970 00:00:00 UTC");
	// document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	// }
	// //alert(document.cookie.split(";"));
	dataStr = "action=logout&interface=";
	isrHandle.getDataFromDB(eval("reloadPage"), "serverController.php", dataStr);
	window.onbeforeunload = null;
	location.reload();

}

function reloadPage() {
	location.reload();
}

function clientController(xmlDocument) {
	initialization(xmlDocument);
	showMenu(clientInterface);

	if (clientInterface.substring(5, 21) == "FinalApplication") {
		printFinalApplicationForm(clientInterface);
	}

}


var tabMenuOptions =
{
	menuId: "tabmenu",
	linkIdToMenuHtml: null,
	preview: true,
	delay: 200,
	speed: 0.04,
	strictUrlMatch: false,
	defaultIndex: -1,
	license: "2c8m1"
};


//server date time_Starts
var currentdate = new Date();
var date = currentdate.getFullYear() + "/"
	+ (currentdate.getMonth() + 1) + "/"
	+ currentdate.getDate()

var time = currentdate.getHours() + ":"
	+ currentdate.getMinutes() + ":"
	+ currentdate.getSeconds();

var systemDateArr = new Array();
var systemTimeArr = new Array();

systemDateArr = date;
systemTimeArr = time;

//server date time_Ends

function initialization(xml) {


	/************************************ This section is common to all applications. Please donot change **********************/
	//alert(xml.getElementsByTagName("data").length);
	$('#loading-spinner').show();

	numberOfRecords = xml.getElementsByTagName("record").length;
	let wifiListStudent = false;
	let wifiListDegrees = false;
	let regStudent = false;
	let selectedApplicantListBool = false;
	let appliantListForm = false;
	let formPrintStudentIDVar = false;
	let formApplicantSelectionVar = false;
	let formABPaymentViewNew = false;
	let formApplication = false;



	let degreeForRegStudent = false;
	let degreeForAppliantListForm = false;
	let degreeForPrintStudentID = false;
	let degreeForNewPaymentView = false;
	let IncomeCategoryCodeForNewPaymentView = false;
	let InstallmentDetailsForNewPaymentView = false;
	let formExamAppliedListSubjects = false;






	for (i = 0; i < numberOfRecords; i++) {


		if (xml.getElementsByTagName("record")[i].getAttribute("error") != null) {
			errorMsg = xml.getElementsByTagName("record")[i].getAttribute("error");
			alert(errorMsg);
			exit;
		}
		if (clientInterface == "main") {
			if (xml.getElementsByTagName("record")[i].getAttribute("userName") != null) {
				userName = xml.getElementsByTagName("record")[i].getAttribute("userName");

				dataRep['userName'] = userName;
				roleName = xml.getElementsByTagName("record")[i].getAttribute("roleName");
				dataRep['roleName'] = roleName;
				departmentCode = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
				dataRep['departmentCode'] = departmentCode;
				userId = xml.getElementsByTagName("record")[i].getAttribute("userId");
				dataRep['userId'] = userId;
				facultyCode = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
				dataRep['facultyCode'] = facultyCode;
				programmeCode = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
				dataRep['programmeCode'] = programmeCode;
				mobile = xml.getElementsByTagName("record")[i].getAttribute("mobile");
				dataRep['userMobile'] = mobile;
				email = xml.getElementsByTagName("record")[i].getAttribute("email");
				dataRep['userEmail'] = email;

				//passWd = xml.getElementsByTagName("record")[i].getAttribute("passWd");
				//dataRep['passWd']=passWd;
				//alert(facultyCode+" "+programmeCode);
			}
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("interface") != null) {
			clientInterface = xml.getElementsByTagName("record")[i].getAttribute("interface");
			if (clientInterface == "login") {
				location.reload();
			}


			if (clientInterface == "formWifiCreation") {
				studentNoLength = 0;
				studentNameTitleArr.length = 0;
				payedStudentNoArr.length = 0;
				payedAmountArr.length = 0;
				payedResponseProgressArr.length = 0;
				wifiNameArr.length = 0;
				studentNameArr.length = 0;
				studentNoArr.length = 0;
				studentNICArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				studentRegisteredDateArr.length = 0;
				studentDurationArr.length = 0;
			} else if (clientInterface == "formABPaymentViewNew") {
				studentNoLength = 0;
				universityCodeArr.length = 0;
				universityTitleArr.length = 0;
				facultyCodeArr.length = 0;
				facultyTitleArr.length = 0;
				programmeTypeCodeArr.length = 0;
				programmeTypeTitleArr.length = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				studentNoArr.length = 0;
				studentNICArr.length = 0;
				applicationNoArr.length = 0;
				studentNameArr.length = 0;
				studentPersonalTitleArr.length = 0;
				studentInitialArr.length = 0;
				studentDateofbirthArr.length = 0;
				studentNationalityArr.length = 0;
				studentCitizenshipArr.length = 0;
				studentEmploymentArr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentOfficeAddressArr.length = 0;
				correspondenceArr.length = 0;
				studentContactLanArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				achedamicYearArr.length = 0;
				mediumArr.length = 0;
				tempPayAmount.length = 0;
				librarycodeArr.length = 0;

			}
			else if (clientInterface == "formSelectedStudentList") {
				applicationNoLength = 0;
				applicationNoLength.length = 0;
				universityCodeArr.length = 0;
				universityTitleArr.length = 0;
				facultyCodeArr.length = 0;
				facultyTitleArr.length = 0;
				programmeTypeCodeArr.length = 0;
				programmeTypeTitleArr.length = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				studentNICArr.length = 0;
				applicationNoArr.length = 0;
				studentNameArr.length = 0;
				studentPersonalTitleArr.length = 0;
				studentInitialArr.length = 0;
				studentDateofbirthArr.length = 0;
				studentNationalityArr.length = 0;
				studentCitizenshipArr.length = 0;
				studentEmploymentArr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentOfficeAddressArr.length = 0;
				correspondenceArr.length = 0;
				studentContactLanArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				achedamicYearArr.length = 0;
				studentNoArr.length = 0;
				mediumArr.length = 0;
				registeredStudentArr.length = 0;
				transferTypeArr.length = 0;
				newStudentNoArr.length = 0;

			} else if (clientInterface == "formSelectedApplicantList") {
				applicationNoLength = 0;
				universityCodeArr.length = 0;
				universityTitleArr.length = 0;
				facultyCodeArr.length = 0;
				facultyTitleArr.length = 0;
				programmeTypeCodeArr.length = 0;
				programmeTypeTitleArr.length = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				studentNICArr.length = 0;
				applicationNoArr.length = 0;
				studentNameArr.length = 0;
				studentPersonalTitleArr.length = 0;
				studentInitialArr.length = 0;
				studentDateofbirthArr.length = 0;
				studentNationalityArr.length = 0;
				studentCitizenshipArr.length = 0;
				studentEmploymentArr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentOfficeAddressArr.length = 0;
				correspondenceArr.length = 0;
				studentContactLanArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				achedamicYearArr.length = 0;
				studentNoArr.length = 0;
				mediumArr.length = 0;
				selectedFromGraduateArr.length = 0;
				selectedFromProfessionalArr.length = 0;
				selectedFromPendingQulificationArr.length = 0;
				selectedFromSpecialApproveArr.length = 0;
				listNumber.length = 0;
				BosDate.length = 0;
				BosNumber.length = 0;
				selectionCategoryArr.length = 0;
			} else if (clientInterface == "formPrintStudentID" || clientInterface == "formPreRegStudent" || clientInterface == "formEnrollStudent") {
				studentNoLength = 0;
				applicationNoArr.length = 0;
				studentTransferStudentNoArr.length = 0;
				studentNoArr.length = 0;
				studentPersonalTitleArr.length = 0;
				studentInitialArr.length = 0;
				studentNameArr.length = 0;
				studentNICArr.length = 0;
				studentPermanentAddressArr.length = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				achedamicYearArr.length = 0;
				medium1Arr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentContactLanArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				studentLibraryIdCodeArr.length = 0;
				durationArr.length = 0;
				coursecommenceArr.length = 0;
				commenceacademicYearArr.length = 0;
				RegisteredDateArr.length = 0;

			} else if (clientInterface == "formApplicantSelection") {
				if (!formApplicantSelectionVar) {
					applicationNoLength = 0;
					universityCodeArr.length = 0;
					universityTitleArr.length = 0;
					facultyCodeArr.length = 0;
					facultyTitleArr.length = 0;
					programmeTypeCodeArr.length = 0;
					programmeTypeTitleArr.length = 0;
					degreeCodeArr.length = 0;
					degreeTitleArr.length = 0;
					studentNICArr.length = 0;
					applicationNoArr.length = 0;
					studentNameArr.length = 0;
					studentPersonalTitleArr.length = 0;
					studentInitialArr.length = 0;
					studentDateofbirthArr.length = 0;
					studentNationalityArr.length = 0;
					studentCitizenshipArr.length = 0;
					studentEmploymentArr.length = 0;
					studentPermanentAddressArr.length = 0;
					studentOfficeAddressArr.length = 0;
					correspondenceArr.length = 0;
					studentContactLanArr.length = 0;
					studentContactMobileArr.length = 0;
					studentContactEmailArr.length = 0;
					achedamicYearArr.length = 0;
					pinArr.length = 0;
					educationFieldNameArr.length = 0;
					educationValueArr.length = 0;
					selectionCategoryArr.length = 0;
					educationPinArr.length = 0;
				}

			} else if (clientInterface == "formApplication") {
				studentNoLength = 0;
				applicationNoArr.length = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				studentNameArr.length = 0;
				studentNoArr.length = 0;
				achedamicYearArr.length = 0;
			} else if (clientInterface == "formExamAppliedListSubject" || clientInterface == "formExamAppliedListSubjectForRawMarkSheet" || clientInterface == "formExamAppliedListSubjectForStiker" || clientInterface == "formExamAppliedListSubjectForStudentsResultUpdate") {
				subjectCodeLength = 0;
				// do nothing. this code want because continue without clear universityCodeLength = facultyCodeLength = degreeCodeLength = 0;
			} else if (clientInterface == "formExamAppliedListStudent" || clientInterface == "formExamAppliedListStudentForRawMarkSheet" || clientInterface == "formExamAppliedListStudentForStiker" || clientInterface == "formExamAppliedListForStudentsResultUpdate" || clientInterface == "formExamAppliedListForGetFinalResult") {
				ex_CodeLength = 0;
				ex_degreeCodeArr.length = 0;
				ex_studentNoArr.length = 0;
				ex_holdstatus.length = 0;
				ex_cstatus.length = 0;
				ex_cstatusnotes.length = 0;
				ex_studentNameArr.length = 0;
				ex_studentMediumArr.length = 0;
				ex_semesterArr.length = 0;
				ex_attemptArr.length = 0;
				ex_subCodeArr.length = 0;
				ex_academicYearArr.length = 0;
				ex_appliedDateArr.length = 0;
				if (clientInterface == "formExamAppliedListForStudentsResultUpdate" || clientInterface == "formExamAppliedListForGetFinalResult") {
					ex_grade.length = 0;
					ex_examiner1.length = 0;
					ex_examiner2.length = 0;
					ex_latesubmission.length = 0;
					ex_effectivedatethesis.length = 0;
					ex_paidAmount.length = 0;
					ex_mark.length = 0;
					ex_status.length = 0;
					ex_examReason.length = 0;
					ex_examReasonDes.length = 0;
					ex_examsisMedical.length = 0;
					ex_examsmedicalApprove.length = 0;
					ex_releasedDate.length = 0;

				}
			}
			else if (clientInterface == "formStudentProfileDeteils") {
				applicationProfile = 0;
			}

			else if (clientInterface == "formStudentProfileDeteils") {
				applicationProfile = 0;
				studentNoProfileDataLength = 0;
			} else if (clientInterface == "" || clientInterface == "formLetterTemplate" || clientInterface == "formInterviewList" || clientInterface == "formStudentQulificationList") {

			}
			else {
				universityCodeLength = facultyCodeLength = degreeCodeLength = 0;
			}

		}
		//alert(clientInterface);

		if (xml.getElementsByTagName("record")[i].getAttribute("msg") != null) {
			msg = xml.getElementsByTagName("record")[i].getAttribute("msg");

		}


		/************************************** Do not change the above code ***********************************************************/
		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "addfaulty") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("universityCode"));
			universityCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");

			universityCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null && clientInterface == "formDocument") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("documentID"));
			documentIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentNameArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");

			documentIDLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("dataItemID") != null && clientInterface == "formDataItem") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("dataItemID"));
			dataItemIDArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemID");
			dataItemNameArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemName");

			dataItemIDLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null && clientInterface == "formDocumentItem") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("documentID"));
			documentIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentNameArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");

			documentIDLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("dataItemID") != null && clientInterface == "formDocumentItem") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("dataItemID"));
			dataItemIDArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemID");
			dataItemNameArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemName");

			dataItemIDLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointID") != null && clientInterface == "formDecisionMakingPoint") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointIDLength"));
			decisionMakingPointIDArr[decisionMakingPointIDLength] = xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointID");
			decisionMakingPointNameArr[decisionMakingPointIDLength] = xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointName");

			decisionMakingPointIDLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null && clientInterface == "formDocDecisionTransaction") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("documentID"));
			documentIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentNameArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");

			documentIDLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointID") != null && clientInterface == "formDocDecisionTransaction") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointName"));
			decisionMakingPointIDArr[decisionMakingPointIDLength] = xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointID");
			decisionMakingPointNameArr[decisionMakingPointIDLength] = xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointName");
			decisionMakingPointIDLength++;

		}
		//if(xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointID") != null && clientInterface == "formDocDecisionTransactionTwo"){
		//alert(xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointName"));
		//decisionMakingPointIDArr[decisionMakingPointIDLength] = xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointID");
		//decisionMakingPointNameArr[decisionMakingPointIDLength] = xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointName");
		//	decisionMakingPointIDLength++;
		//}




		if (xml.getElementsByTagName("record")[i].getAttribute("facultyCode") != null && clientInterface == "formTransactionType") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("sendformuse"));
			facultyCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			degreeCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			sendformuseArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sendformuse");
			transactionCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("transactionCode");
			transactionSubCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("transactionSubCode");
			transacDescriptionArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("transacDescription");
			programmeTypeCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			facultyCodeLength++;
		}










		if (xml.getElementsByTagName("record")[i].getAttribute("facultyCode") != null && clientInterface == "adddepartment") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("facultyCode"));
			universityCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");

			facultyCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "addDegree") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("facultyTitle"));
			universityCodeArr[programmeTypeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[programmeTypeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[programmeTypeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[programmeTypeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[programmeTypeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[programmeTypeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[programmeTypeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[programmeTypeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");

			programmeTypeTitleLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "formViewUniversity") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("universityCode"));
			universityCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");

			universityCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("facultyCode") != null && clientInterface == "formViewFaculty") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("facultyCode"));
			universityCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");

			facultyCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formViewDegree") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			academicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			durationArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");
			programmeTypeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			universityCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			criteriaCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaCode");
			criteriaTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaTitle");

			degreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode") != null && clientInterface == "formViewProgrammeType") {
			// alert(xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode"));
			programmeTypeCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			universityCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");

			programmeTypeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "addprogrammeType") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("universityCode"));
			universityCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");

			universityCodeLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "formViewDepartment") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("universityCode"));
			universityCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");

			departmentCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("departmentCode") != null && clientInterface == "formLectureRegistration") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("departmentCode"));
			universityCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");

			departmentCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "addCourseUnit") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeTitle"));
			universityCodeArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			courseUnitCodeArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode");
			courseUnitTitleArr[courseUnitTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitTitle");

			courseUnitTitleLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && (clientInterface == "transferApplicant" || clientInterface == "formStudentTransfer")) {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null) {
					degreeCode1Arr.length = 0;
					degreeTitleArr.length = 0;
					programmeTypeCode1Arr.length = 0;
					facultyCode1Arr.length = 0;
					IncomeSourceCodeArr1.length = 0;
					degreeCode1Length = 0;
				}
			}

			degreeCode1Arr[degreeCode1Length] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCode1Length] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			programmeTypeCode1Arr[degreeCode1Length] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			facultyCode1Arr[degreeCode1Length] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			IncomeSourceCodeArr1[degreeCode1Length] = xml.getElementsByTagName("record")[i].getAttribute("IncomeSourceCode");

			degreeCode1Length++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "formViewCourseUnit") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("type"));
			universityCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			courseUnitCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode");
			courseUnitTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitTitle");
			typeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("type");

			courseUnitCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo") != null && clientInterface == "formLecturerDeteilsRequest") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("lecturerPersonalTitle"));
			lecturerEmpNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo");
			lecturerNICArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerNIC");
			lecturerNameArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerName");
			lecturerPersonalTitleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerPersonalTitle");
			facultyCodeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			categoryTypeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryType");
			categoryCodeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			subcategoryCodeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("subcategoryCode");
			subcategoryTitleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("subcategoryTitle");
			rate2Arr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("rate2");
			budgetIdArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("budgetId");
			batchNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");

			lecturerEmpNoLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formLecturerDeteilsRequest") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode"));
			degreeCodeArr[degreeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			courseUnitCodeArr[degreeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode");
			courseUnitTitleArr[degreeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitTitle");
			//paymentRateArr[degreeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentRate");
			rate2Arr[degreeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("rate2");

			degreeTitleLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("lecturercourseunitId") != null && clientInterface == "formLecturerDeteilsRequest") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("lecturercourseunitId"));
			lecturercourseunitIdArr[lecturercourseunitIdLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturercourseunitId");

			lecturercourseunitIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode") != null && clientInterface == "addCourseUnit") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("method"));
			courseUnitCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode");
			courseUnitTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitTitle");
			method1Arr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("method");
			method2Arr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("method");
			courseUnitCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode") != null && clientInterface == "formViewNewCourseUnit") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("method"));
			courseUnitCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode");
			courseUnitTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitTitle");
			method1Arr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("method");
			method2Arr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("method");

			courseUnitCodeLength++;
		}

		//***studentCourseUnit xml starts//			
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formStudentDeteilsRequest") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentcourseunitId"));
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			academicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");

			studentNoLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentcourseunitId") != null && clientInterface == "formStudentDeteilsRequest") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentcourseunitId"));
			studentcourseunitIdArr[studentcourseunitIdLength] = xml.getElementsByTagName("record")[i].getAttribute("studentcourseunitId");

			studentcourseunitIdLength++;

		}




		if (xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode") != null && clientInterface == "formStudentDeteilsRequest") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("type"));
			courseUnitCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode");
			courseUnitTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitTitle");
			studentNoArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			programmeTypeCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			typeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("type");
			//studentcourseunitIdArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentcourseunitId");

			courseUnitCodeLength++;

		}
		//***studentCourseUnit xml ends//				 

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formViewPayments") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			academicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			programmeTypeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			paymentRateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentRate");
			registrationFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("registrationFee");
			applicationFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationFee");
			examinationFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("examinationFee");
			courseFeeTotalArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseFeeTotal");
			firstinstalmentArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("firstinstalment");
			secondinstalmentArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("secondinstalment");
			thirdinstalmentArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("thirdinstalment");
			libraryFeeRefundableArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("libraryFeeRefundable");
			libraryFeeNonRefundableArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("libraryFeeNonRefundable");
			textbookFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("textbookFee");
			internetFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("internetFee");
			studentTotalAmountArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentTotalAmount");

			degreeCodeLength++;
		}




		if (xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode") != null && clientInterface == "formStudentRegistration") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("type"));
			courseUnitCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode");
			courseUnitTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseUnitTitle");
			studentNoArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			programmeTypeCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			typeArr[courseUnitCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("type");

			courseUnitCodeLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addstudentpayment") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("batchNo"));
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentDOBArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentAgeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentAge");
			studentSexArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentSex");
			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLand01");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile01");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			rate1Arr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("rate1");
			categoryCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			budgetIdArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("budgetId");
			batchNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");


			studentNICLength++;

		}



		if (xml.getElementsByTagName("record")[i].getAttribute("studentPaymentId") != null && clientInterface == "addstudentpayment") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentPaymentId"));
			studentPaymentIdArr[studentPaymentIdLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPaymentId");

			studentPaymentIdLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formStudentRegistration") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("batchNo"));
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentDOBArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentAgeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentAge");
			studentSexArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentSex");
			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLand01");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile01");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			batchNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");

			studentNICLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("categoryCode") != null && clientInterface == "formBudgetSheet") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("categoryCode"));
			categoryCodeArr[budgetCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[budgetCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			categoryTypeArr[budgetCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryType");
			subcategoryCodeArr[budgetCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subcategoryCode");
			subcategoryTitleArr[budgetCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subcategoryTitle");

			budgetCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("categoryCode") != null && clientInterface == "addSubCategory") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("categoryCode"));
			categoryCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			//categoryType1Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryType");
			//categoryType2Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryType");

			categoryCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("subcategoryCode") != null && clientInterface == "formViewSubCategory") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("subcategoryCode"));
			subcategoryCodeArr[subcategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subcategoryCode");
			subcategoryTitleArr[subcategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subcategoryTitle");
			categoryCodeArr[subcategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[subcategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");

			subcategoryCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("categoryCode") != null && clientInterface == "formViewNewCategory") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("categoryType"));
			categoryCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			categoryType1Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryType");
			categoryType2Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryType");

			categoryCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("departmentCode") != null && clientInterface == "addSelectedStudent") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("facultyCode"));
			universityCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			departmentCodeLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode") != null && clientInterface == "addSelectedStudent") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			programmeTypeCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			batchNoArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");


			programmeTypeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "formViewFirstInstallementStudent") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			universityCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentNameArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			instalmentTypeArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("instalmentType");
			academicYearArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			studentTotalAmountArr[universityCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentTotalAmount");

			universityCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formStudentReportDetails") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("facultyTitle"));
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			instalmentTypeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("instalmentType");
			coursefeeTypeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("coursefeeType");
			studentTotalAmountArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentTotalAmount");
			paied1Arr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("paied");
			paied2Arr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("paied");
			paymentDateArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentDate");
			paymentTimeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentTime");

			studentNICLength++;

		}

		// if(xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null &&  clientInterface == "adduser"){

		// universityCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
		// universityTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
		// facultyCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
		// facultyTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
		// departmentCodeArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
		// departmentTitleArr[departmentCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");

		// departmentCodeLength++;
		// }


		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "adduser") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("facultyTitle"));

			universityCodeArr[testLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[testLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[testLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[testLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[testLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[testLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			degreeCodeArr[testLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[testLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");

			testLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("roleId") != null && clientInterface == "adduser") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("roleName"));
			roleIdArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			roleIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formViewUser") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("userId"));
			universityCodeArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			userIdArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			passWdArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("passWd");
			userNameArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr1[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "formBudgetSheet") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("courseUnitCode"));
			universityCodeArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			academicYearArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			programmeTypeCodeArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[departmentCodeTitleLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");


			departmentCodeTitleLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("budgetId") != null && clientInterface == "formReviseBudgetSheet") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("academicYear"));
			categoryCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			categoryTypeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryType");
			subcategoryCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subcategoryCode");
			subcategoryTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subcategoryTitle");
			noteNo1Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("noteNo1");
			noteNo2Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("noteNo2");
			noteNo3Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("noteNo3");
			noteNo4Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("noteNo4");
			rate1Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rate1");
			unit1Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("unit1");
			rate2Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rate2");
			unit2Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("unit2");
			incomeAmount1Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("incomeAmount1");
			expenditureAmount1Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("expenditureAmount1");
			totalIncomeAmountArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("totalIncomeAmount");
			totalIncomeAfterTaxArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("totalIncomeAfterTax");
			totalExpenditureAmountArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("totalExpenditureAmount");
			budgetIdArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("budgetId");

			categoryCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "formReviseBudgetSheet") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("academicYear"));


			universityCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			academicYearArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			programmeTypeCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");



			categoryCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("universityCode") != null && clientInterface == "addpayment") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("academicYear"));

			universityCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			academicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			programmeTypeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");

			degreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addVoucherDiploma") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentNIC"));		
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			batchNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");
			academicYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			calenderYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("calenderYear");
			commenceDateArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("commenceDate");
			fullpaymentDeadlineDateArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fullpaymentDeadlineDate");
			halfpaymentDeadlineDateArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("halfpaymentDeadlineDate");
			rate1Arr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("rate1");
			categoryCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			budgetIdArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("budgetId");

			studentNICLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("voucherId") != null && clientInterface == "addVoucherDiploma") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("voucherId"));		

			voucherIdArr[voucherIdLength] = xml.getElementsByTagName("record")[i].getAttribute("voucherId");

			voucherIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "updateRegistrationLetter") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("commenceDate"));		
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			invoiceNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("invoiceNo");
			batchNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");
			academicYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			calenderYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("calenderYear");
			extendedDurationArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("extendedDuration");
			commenceDateArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("commenceDate");
			fullpaymentDeadlineDateArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fullpaymentDeadlineDate");
			halfpaymentDeadlineDateArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("halfpaymentDeadlineDate");
			rate1Arr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("rate1");
			categoryCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			studentNICLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formStudentAdditionalDetails") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("universityCode"));		
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			durationArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");

			studentNICLength++;
		}

		//sewwandi 2/25/2014..........................................................................................................		
		// if(xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formIncomeCategoryDetails"){
		// alert(xml.getElementsByTagName("record")[i].getAttribute("batchNo"));
		// degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
		// degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
		// var IncomeSourceCodeArr  = new Array();
		// IncomeSourceCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeSourceCode");
		// universityTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
		// facultyCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
		// facultyTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
		// departmentCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
		// departmentTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
		// categoryCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
		// categoryTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
		// rate1Arr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rate1");						
		// categoryTypeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryType");	
		// batchNoArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo"); 

		// degreeCodeLength++;
		// }
		//....................................................................................................................................		
		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formStudentExtendedTime") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("categoryTitle"));		
			studentNameArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			programmeTypeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			batchNoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");
			extendedDurationArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("extendedDuration");
			certificateFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("certificateFee");
			renewalRegistrationFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("renewalRegistrationFee");
			convocationFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("convocationFee");
			repeatExamFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("repeatExamFee");

			degreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addstudentotherpayment") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("certificateFee"));
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentDOBArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentAgeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentAge");
			studentSexArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentSex");
			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			//studentAddressL2Arr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentAddressLine02");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLand01");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile01");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			certificateFeeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("certificateFee");
			renewalRegistrationFeeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("renewalRegistrationFee");
			convocationFeeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("convocationFee");
			repeatExamFeeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("repeatExamFee");

			studentNICLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentPaymentId") != null && clientInterface == "addstudentotherpayment") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentPaymentId"));
			studentPaymentIdArr[studentPaymentIdLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPaymentId");

			studentPaymentIdLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formStudentExtendedVoucher") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("paymentTitle"));		
			studentNameArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			programmeTypeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			batchNoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");
			extendedDurationArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("extendedDuration");
			certificateFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("certificateFee");
			renewalRegistrationFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("renewalRegistrationFee");
			convocationFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("convocationFee");
			repeatExamFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("repeatExamFee");

			degreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("voucherId") != null && clientInterface == "formStudentExtendedVoucher") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("voucherId"));		

			voucherIdArr[voucherIdLength] = xml.getElementsByTagName("record")[i].getAttribute("voucherId");

			voucherIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formRegisteredStudentList") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentNIC"));		
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");

			studentNICLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formPaymentList") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentNIC"));		
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			instalmentTypeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("instalmentType");
			paymentMethodArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentMethod");

			studentNICLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formViewDegreeDetails") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			universityCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			batchNoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");
			academicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			calenderYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("calenderYear");
			certificateFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("certificateFee");
			renewalRegistrationFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("renewalRegistrationFee");
			convocationFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("convocationFee");
			repeatExamFeeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("repeatExamFee");
			extendedDurationArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("extendedDuration");
			commenceDateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("commenceDate");
			fullpaymentDeadlineDateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("fullpaymentDeadlineDate");
			halfpaymentDeadlineDateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("halfpaymentDeadlineDate");
			categoryCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			rate1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rate1");
			notificationArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("notification");


			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("invoiceNo") != null && clientInterface == "addVoucherDiploma") {


			invoiceNoArr[invoiceNoLength] = xml.getElementsByTagName("record")[i].getAttribute("invoiceNo");

			invoiceNoLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("invoiceNo") != null && clientInterface == "formStudentExtendedVoucher") {


			invoiceNoArr[invoiceNoLength] = xml.getElementsByTagName("record")[i].getAttribute("invoiceNo");

			invoiceNoLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("paymentId") != null && clientInterface == "formViewPayment") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("universityCode"));
			paymentIdArr[paymentIdLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentId");
			paymentTitleArr[paymentIdLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentTitle");

			paymentIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode") != null && clientInterface == "addApplicationForm") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			programmeTypeCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			batchNoArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");
			facultyCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");



			programmeTypeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode") != null && clientInterface == "formEligibleTestForm") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			programmeTypeCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			batchNoArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");
			facultyCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");


			programmeTypeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("criteriaCode") != null && clientInterface == "formEligibleTestForm") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			criteriaCodeArr[criteriaCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaCode");
			criteriaTitleArr[criteriaCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaTitle");


			criteriaCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("criteriaCode") != null && clientInterface == "addDegree") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			criteriaCodeArr[criteriaCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaCode");
			criteriaTitleArr[criteriaCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaTitle");


			criteriaCodeLength++;


		}

		if (xml.getElementsByTagName("record")[i].getAttribute("criteriaCode") != null && clientInterface == "updateDegree") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			criteriaCodeArr[criteriaCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaCode");
			criteriaTitleArr[criteriaCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaTitle");


			criteriaCodeLength++;


		}

		/*if(xml.getElementsByTagName("record")[i].getAttribute("sUserName") != null && clientInterface == "updateStudentAccounts"){
//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));
			usernameArr[userLength] = xml.getElementsByTagName("record")[i].getAttribute("sUserName");
			//pArr[criteriaCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaTitle");
			alert(usernameArr[userLength])
			
			userLength++;


		}*/

		if (xml.getElementsByTagName("record")[i].getAttribute("criteriaCode") != null && clientInterface == "formViewCriteria") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("criteriaCode"));
			criteriaCodeArr[criteriaCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaCode");
			criteriaTitleArr[criteriaCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("criteriaTitle");


			criteriaCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addApplicationFormTwo") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("applicationNo"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");


			studentNICLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addApplicationFormThree") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("applicationNo"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");


			studentNICLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addApplicationFormFourth") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("applicationNo"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");


			studentNICLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addApplicationFormFive") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("applicationNo"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");


			studentNICLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addApplicationForm") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("applicationNo"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");

			studentNICLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addApplicationFormTwo") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("applicationNo"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			bachelorDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegree");
			bachelorDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeTitle");
			bachelorDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeobtainUniversity");
			bachelorDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationYear");
			bachelorDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationMonth");
			higherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegree");
			higherDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeTitle");
			higherDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeobtainUniversity");
			higherDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationYear");
			higherDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationMonth");
			qualificationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationOne");
			qualificationAwardingAuthorityOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingAuthorityOne");
			qualificationAwardingYearOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingYearOne");
			qualificationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationTwo");
			qulificationAwardingAuthorityTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingAuthorityTwo");
			qulificationAwardingYearTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingYearTwo");

			studentNICLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addApplicationFormThree") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("applicationNo"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			companyOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyOne");
			designationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationOne");
			fromOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromOne");
			toOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toOne");
			companyTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyTwo");
			designationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationTwo");
			fromTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromTwo");
			toTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toTwo");
			companyThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyThree");
			designationThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationThree");
			fromThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromThree");
			toThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toThree");
			refreeNameOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameOne");
			refreeAddressOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressOne");
			refreeDesignationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationOne");
			refreeNameTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameTwo");
			refreeAddressTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressTwo");
			refreeDesignationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationTwo");

			studentNICLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addApplicationFormFourth") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("applicationNo"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			registrationSougthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registrationSougth");
			mainSubjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("mainSubject");
			fieldOfSpecializationArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fieldOfSpecialization");
			researchMediumArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchMedium");
			researchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchTitle");
			grantForProjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantForProject");
			grantDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantDetails");
			financedDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("financedDetails");
			registeredOtherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registeredOtherDegree");


			studentNICLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "addApplicationFormFive") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("applicationNo"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			applicantNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantName");
			applicantInstitutionArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantInstitution");
			applicantAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantAddress");
			applicantResearchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantResearchTitle");
			supervisorNameOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorNameOne");
			supervisorPositionOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorPositionOne");
			supervisorInstitutionOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorInstitutionOne");
			supervisorNameTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorNameTwo");
			supervisorPositionTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorPositionTwo");
			supervisorInstitutionTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorInstitutionTwo");
			applicantNameForSupervisorArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantNameForSupervisor");
			supervisorSignatureNameOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorSignatureNameOne");
			supervisorDateOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorDateOne");
			supervisorSignatureOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorSignatureOne");
			supervisorSignatureNameTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorSignatureNameTwo");
			supervisorDateTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorDateTwo");
			supervisorSignatureTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorSignatureTwo");
			recHeadDepArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("recHeadDep");
			recStudyBoardArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("recStudyBoard");
			recFacultyBoardArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("recFacultyBoard");
			recSenateArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("recSenate");

			studentNICLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("maxapplicationNo") != null && clientInterface == "addApplicationForm") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("maxapplicationNo"));
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			maxapplicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("maxapplicationNo");

			studentNICLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formFinalApplication") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			bachelorDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegree");
			bachelorDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeTitle");
			bachelorDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeobtainUniversity");
			bachelorDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationYear");
			bachelorDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationMonth");
			higherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegree");
			higherDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeTitle");
			higherDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeobtainUniversity");
			higherDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationYear");
			higherDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationMonth");
			qualificationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationOne");
			qualificationAwardingAuthorityOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingAuthorityOne");
			qualificationAwardingYearOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingYearOne");
			qualificationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationTwo");
			qulificationAwardingAuthorityTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingAuthorityTwo");
			qulificationAwardingYearTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingYearTwo");
			companyOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyOne");
			designationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationOne");
			fromOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromOne");
			toOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toOne");
			companyTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyTwo");
			designationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationTwo");
			fromTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromTwo");
			toTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toTwo");
			companyThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyThree");
			designationThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationThree");
			fromThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromThree");
			toThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toThree");
			refreeNameOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameOne");
			refreeAddressOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressOne");
			refreeDesignationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationOne");
			refreeNameTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameTwo");
			refreeAddressTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressTwo");
			refreeDesignationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationTwo");
			registrationSougthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registrationSougth");
			mainSubjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("mainSubject");
			fieldOfSpecializationArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fieldOfSpecialization");
			researchMediumArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchMedium");
			researchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchTitle");
			grantForProjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantForProject");
			grantDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantDetails");
			financedDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("financedDetails");
			registeredOtherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registeredOtherDegree");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			applicantNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantName");
			applicantInstitutionArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantInstitution");
			applicantAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantAddress");
			applicantResearchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantResearchTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");

			studentNICLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "exportCSVForm") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeTitle"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			bachelorDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegree");
			bachelorDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeTitle");
			bachelorDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeobtainUniversity");
			bachelorDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationYear");
			bachelorDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationMonth");
			higherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegree");
			higherDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeTitle");
			higherDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeobtainUniversity");
			higherDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationYear");
			higherDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationMonth");
			qualificationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationOne");
			qualificationAwardingAuthorityOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingAuthorityOne");
			qualificationAwardingYearOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingYearOne");
			qualificationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationTwo");
			qulificationAwardingAuthorityTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingAuthorityTwo");
			qulificationAwardingYearTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingYearTwo");
			companyOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyOne");
			designationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationOne");
			fromOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromOne");
			toOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toOne");
			companyTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyTwo");
			designationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationTwo");
			fromTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromTwo");
			toTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toTwo");
			companyThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyThree");
			designationThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationThree");
			fromThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromThree");
			toThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toThree");
			refreeNameOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameOne");
			refreeAddressOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressOne");
			refreeDesignationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationOne");
			refreeNameTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameTwo");
			refreeAddressTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressTwo");
			refreeDesignationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationTwo");
			registrationSougthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registrationSougth");
			mainSubjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("mainSubject");
			fieldOfSpecializationArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fieldOfSpecialization");
			researchMediumArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchMedium");
			researchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchTitle");
			grantForProjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantForProject");
			grantDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantDetails");
			financedDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("financedDetails");
			registeredOtherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registeredOtherDegree");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			applicantNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantName");
			applicantInstitutionArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantInstitution");
			applicantAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantAddress");
			applicantResearchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantResearchTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");

			studentNICLength++;
		}




		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "printFinalApplication") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentName"));
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			bachelorDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegree");
			bachelorDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeTitle");
			bachelorDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeobtainUniversity");
			bachelorDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationYear");
			bachelorDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationMonth");
			higherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegree");
			higherDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeTitle");
			higherDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeobtainUniversity");
			higherDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationYear");
			higherDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationMonth");
			qualificationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationOne");
			qualificationAwardingAuthorityOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingAuthorityOne");
			qualificationAwardingYearOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingYearOne");
			qualificationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationTwo");
			qulificationAwardingAuthorityTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingAuthorityTwo");
			qulificationAwardingYearTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingYearTwo");
			companyOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyOne");
			designationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationOne");
			fromOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromOne");
			toOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toOne");
			companyTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyTwo");
			designationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationTwo");
			fromTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromTwo");
			toTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toTwo");
			companyThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyThree");
			designationThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationThree");
			fromThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromThree");
			toThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toThree");
			refreeNameOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameOne");
			refreeAddressOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressOne");
			refreeDesignationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationOne");
			refreeNameTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameTwo");
			refreeAddressTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressTwo");
			refreeDesignationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationTwo");
			registrationSougthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registrationSougth");
			mainSubjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("mainSubject");
			fieldOfSpecializationArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fieldOfSpecialization");
			researchMediumArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchMedium");
			researchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchTitle");
			grantForProjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantForProject");
			grantDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantDetails");
			financedDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("financedDetails");
			registeredOtherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registeredOtherDegree");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			applicantNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantName");
			applicantInstitutionArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantInstitution");
			applicantAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantAddress");
			applicantResearchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantResearchTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");

			studentNICLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "addEvent") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));

			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");

			degreeCodeLength++;

		}



		if (xml.getElementsByTagName("record")[i].getAttribute("categoryCode") != null && clientInterface == "addEvent") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("academicYear"));
			categoryCodeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			categoryTypeArr[categoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryType");

			categoryCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formViewEvent") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("degreeCode"));

			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			categoryCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryCode");
			categoryTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("categoryTitle");
			paymentDeadlineDateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentDeadlineDate");
			notificationArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("notification");
			//paymentExtendedDateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentExtendedDate");
			degreeCodeLength++;

		}




		// if(xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formViewStudent"){
		// //alert(xml.getElementsByTagName("record")[i].getAttribute("certificateFee"));
		// studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
		// studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
		// studentDOBArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
		// studentAgeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentAge");
		// studentSexArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentSex");
		// studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
		// studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLand01");
		// studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile01");
		// studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
		// universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
		// universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
		// facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
		// facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
		// departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
		// departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
		// programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
		// programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
		// degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
		// degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle"); 

		// studentNICLength++;

		// }


		if (xml.getElementsByTagName("record")[i].getAttribute("profile_StudNo") != null && clientInterface == "formStudentProfileDeteils") {


			studentNoProArr[studentNoProLength] = xml.getElementsByTagName("record")[i].getAttribute("profile_StudNo");
			applcationNoProArr[studentNoProLength] = xml.getElementsByTagName("record")[i].getAttribute("profile_ApplicationNo");
			studentNoProfileDataLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("degcd1") != null && clientInterface == "formStudentProfileDeteils") {


			//alert(xml.getElementsByTagName("record")[i].getAttribute("degcd1"));
			batchDegreeCodeArr[batchdetailsLength] = xml.getElementsByTagName("record")[i].getAttribute("degcd1");
			batchYearArr[batchdetailsLength] = xml.getElementsByTagName("record")[i].getAttribute("degacy1");
			batchCourseFeeArr[batchdetailsLength] = xml.getElementsByTagName("record")[i].getAttribute("degcrs1");
			batchLibraryFeeArr[batchdetailsLength] = xml.getElementsByTagName("record")[i].getAttribute("deglibf1");


			batchdetailsLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("Pay_RefNo") != null && clientInterface == "formStudentProfileDeteils") {


			//alert(xml.getElementsByTagName("record")[i].getAttribute("Pay_Time_Stamp"));
			Pay_RefNoArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_RefNo");
			Pay_studentNoArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_studentNo");
			Pay_CategoryCodeArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_CategoryCode");
			Pay_amountArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_amount");
			Pay_Time_StampArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_Time_Stamp");
			Pay_MethodArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_Method");
			Response_ProgressArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Response_Progress");
			Response_Progress_TimeArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Response_Progress_Time");
			PayTitileArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("PayTitile");
			RefNoLength++;
		}

		//9-16-2015 studentProfile-----------------------------------------------------------------------------------------------------------------------------			
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && xml.getElementsByTagName("record")[i].getAttribute("tCode") == null && xml.getElementsByTagName("record")[i].getAttribute("transferID") == null && clientInterface == "formStudentProfileDeteils") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentContactLan"));

			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");

			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			studentEmploymentArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			mediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentDateofbirthArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentOfficeAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			studentNationalityArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			correspondenceArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			librarycodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("LibraryIdCode");
			studentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("tran_studentNo") != null && clientInterface == "formStudentProfileDeteils") {


			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("tran_studentNo") != null) {
					tmp_studentNoArr.length = 0;
					tmp_degreeCodeArr.length = 0;
					tmp_mediumArr.length = 0;
					tmp_academicYearArr.length = 0;
					tmp_studentNolenght = 0;
				}
			}
			tmp_studentNoArr[tmp_studentNolenght] = xml.getElementsByTagName("record")[i].getAttribute("tran_studentNo");
			tmp_degreeCodeArr[tmp_studentNolenght] = xml.getElementsByTagName("record")[i].getAttribute("tran_degreeCode");
			tmp_mediumArr[tmp_studentNolenght] = xml.getElementsByTagName("record")[i].getAttribute("tran_medium");
			tmp_academicYearArr[tmp_studentNolenght] = xml.getElementsByTagName("record")[i].getAttribute("tran_achedamicYear");

			tmp_studentNolenght++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("dataItemID") != null && clientInterface == "formStudentProfileDeteils") {


			//alert(xml.getElementsByTagName("record")[i].getAttribute("documentName"));
			documentID1Arr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentName1Arr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");
			dataItemIDArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemID");
			dataItemNameArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemName");
			itemValueArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("itemValue");
			sequenceNo1Arr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sequenceNo");


			dataItemIDLength++;

		}



		if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null && clientInterface == "formStudentProfileDeteils") {


			//alert(xml.getElementsByTagName("record")[i].getAttribute("documentName"));
			documentItemIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentNameArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");
			sequenceNoArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sequenceNo");
			decisionMakingPointIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointID");
			decisionMakingPointNameArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("decisionMakingPointName");
			numberArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("number");
			dateArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("date");
			decisionArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("decision");
			remarksArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("remarks");
			documentIDLength++;

		}




		if (xml.getElementsByTagName("record")[i].getAttribute("sessionID") != null && clientInterface == "formStudentProfileDeteils") {


			//alert(xml.getElementsByTagName("record")[i].getAttribute("documentName"));
			sdocumentItemIDArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			sdocumentNameArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");
			sdataItemIDArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemID");
			sitemValueArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("itemValue");
			ssequenceNoArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sequenceNo");
			ssessionIDArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sessionID");

			sessionIDLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("educationPin") != null && clientInterface == "formStudentProfileDeteils") {


			//alert(xml.getElementsByTagName("record")[i].getAttribute("educationValue"));
			//studentNICArr[educationPinLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			//applicationNoArr[educationPinLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			educationFieldNameArr[educationPinLength] = xml.getElementsByTagName("record")[i].getAttribute("educationFieldName");
			educationValueArr[educationPinLength] = xml.getElementsByTagName("record")[i].getAttribute("educationValue");
			educationPinArr[educationPinLength] = xml.getElementsByTagName("record")[i].getAttribute("educationPin");

			educationPinLength++;
		}


		//--------------------------ADD NEW-----------------------------------------------------------
		if (xml.getElementsByTagName("record")[i].getAttribute("workPin") != null && clientInterface == "formStudentProfileDeteils") {


			//alert(xml.getElementsByTagName("record")[i].getAttribute("workValue"));
			//studentNICWoArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			//applicationNoWoArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			workFieldNameArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("workFieldName");
			workValueArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("workValue");
			workPinArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("workPin");

			workPinLength++;

		}

		// if(xml.getElementsByTagName("record")[i].getAttribute("Marks") != null && clientInterface == "formStudentProfileDeteils"){
		// //alert(xml.getElementsByTagName("record")[i].getAttribute("subjectName"));
		// //studentNICWoArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
		// //applicationNoWoArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
		// marksArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("Marks"); 
		// subjectNameArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");


		// MarksLength++;

		// }	  


		//--------------------------------------------First time results----------------------------------------------	




		if (xml.getElementsByTagName("record")[i].getAttribute("subjectName") != null && clientInterface == "formStudentProfileDeteils") {


			subjectNameArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");
			subjectTitleArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			subjectSemesterArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			//subjectGPAArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("GPA");
			marksArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("Grade");
			subjectCreditsArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");
			MarksLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("final_semester") != null && clientInterface == "formStudentProfileDeteils") {

			final_SemArr[final_Length] = xml.getElementsByTagName("record")[i].getAttribute("final_semester");
			final_GPAArr[final_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalGPA");
			final_ResultArr[final_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalResult");
			final_Length++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("cr_resit") != null && clientInterface == "formStudentProfileDeteils") {

			cr_resitArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_resit");
			cr_yearArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_year");
			cr_finalResultArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_finalResult");
			cr_descriptionArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_description");
			cr_Length++;
		}

		// if (xml.getElementsByTagName("record")[i].getAttribute("cr_finalResult") != null && clientInterface == "formStudentProfileDeteils") {

		// 	cr_finalResultArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_finalResult");
		// 	cr_descriptionArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_description");

		// 	cr_Length++;
		// }


		//--------------------------------------------Repeat results----------------------------------------------		







		if (xml.getElementsByTagName("record")[i].getAttribute("rep_subjectName") != null && clientInterface == "formStudentProfileDeteils") {

			//alert(xml.getElementsByTagName("record")[i].getAttribute("rep_Grade"));


			rep_subjectNameArr[GradeArrLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_subjectName");
			Rep_subjectTitleArr[GradeArrLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			Rep_subjectSemesterArr[GradeArrLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			rep_GradeArr[GradeArrLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Grade");
			rep_StatusArr[GradeArrLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Status");

			GradeArrLength++;
			//rep_MarksLength

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("ReRep_subjectName") != null && clientInterface == "formStudentProfileDeteils") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("ReRep_subjectName"));

			ReRep_subjectNameArr[ReRepLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_subjectName");
			ReRep_subjectTitleArr[ReRepLength] = xml.getElementsByTagName("record")[i].getAttribute("rereptitle");
			ReRep_subjectSemesterArr[ReRepLength] = xml.getElementsByTagName("record")[i].getAttribute("rerepsem");
			ReRep_GradeArr[ReRepLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_Grade");
			ReRepLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("ReRep_subjectCode") != null && clientInterface == "formStudentProfileDeteils") {

			//alert(xml.getElementsByTagName("record")[i].getAttribute("ReRep_subjectCode"));

			Ress_subjectCodeArr[ReRep_SubLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_subjectCode");
			Ress_subjectTitleArr[ReRep_SubLength] = xml.getElementsByTagName("record")[i].getAttribute("rerepSubTitle");
			Ress_achedamicYearArr[ReRep_SubLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_achedamicYear");
			ss_subjectSemesterRepeatArr[ReRep_SubLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			Ress_attemptArr[ReRep_SubLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_attempt");
			Ress_DegreeArr[ReRep_SubLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_degreeCode");
			ReRep_SubLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("rep_cr_finalResult") != null && clientInterface == "formStudentProfileDeteils") {


			rep_cr_finalResultArr[rep_cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("rep_cr_finalResult");
			rep_cr_descriptionArr[rep_cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("rep_cr_description");

			rep_cr_Length++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("rep_final_semester") != null && clientInterface == "formStudentProfileDeteils") {


			rep_final_SemArr[rep_final_Length] = xml.getElementsByTagName("record")[i].getAttribute("rep_final_semester");
			rep_final_GPAArr[rep_final_Length] = xml.getElementsByTagName("record")[i].getAttribute("rep_finalGPA");
			rep_final_ResultArr[rep_final_Length] = xml.getElementsByTagName("record")[i].getAttribute("rep_finalResult");

			rep_final_Length++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("rep_resit") != null && clientInterface == "formStudentProfileDeteils") {



			rep_cr_resitArr[rep_cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("rep_resit");
			rep_cr_yearArr[rep_cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("rep_year");

			rep_cr_Length++;
		}
		//---------------------------------------------------------------------------------



		//--------------------------END----------------------------------------------------------------
		/////////////////// chinthaka

		if (xml.getElementsByTagName("record")[i].getAttribute("workPin") != null && clientInterface == "formStudentProfileDeteils") {


			studentNICProfileArr[profesionalprofileLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoProfileArr[profesionalprofileLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			workFieldNameProfileArr[profesionalprofileLength] = xml.getElementsByTagName("record")[i].getAttribute("workFieldName");
			workValueProfileArr[profesionalprofileLength] = xml.getElementsByTagName("record")[i].getAttribute("workValue");
			workPinProfileArr[profesionalprofileLength] = xml.getElementsByTagName("record")[i].getAttribute("workPin");

			profesionalprofileLength++;

		}



		if (xml.getElementsByTagName("record")[i].getAttribute("messageType") != null && clientInterface == "formStudentProfileDeteils") {


			studentNoArr[messageTypeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			messageTypeArr[messageTypeLength] = xml.getElementsByTagName("record")[i].getAttribute("messageType");
			messageArr[messageTypeLength] = xml.getElementsByTagName("record")[i].getAttribute("message");
			subjectArr[messageTypeLength] = xml.getElementsByTagName("record")[i].getAttribute("subject");
			messageTypeLength++;

		}


		if ((xml.getElementsByTagName("record")[i].getAttribute("soldStudentNo") != null) && clientInterface == "formStudentProfileDeteils") {


			oldStudentNoArr[oldStudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("soldStudentNo");
			TransferstudentNoArr[oldStudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			transferTypeArr[oldStudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("transferType");
			transferIDArr[oldStudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("transferID");
			notesArr[oldStudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("notes");
			TransferapplicationNoArr[oldStudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			transferDateArr[oldStudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("transferDate");
			ruleIDArr[oldStudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("ruleID");
			ruleTitleArr[oldStudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("ruleTitle");
			oldStudentNoLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("tCode") != null && clientInterface == "formStudentProfileDeteils") {


			tCodeArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("tCode");
			paymentStudentArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			feeCatArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("feeCat");
			amountArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("amount");
			paymentDateArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentdate");

			tCodeLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("IncomeSourceCode") != null && clientInterface == "formStudentProfileDeteils") {


			IncomeSourceCodeArr[IncomeSourceCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeSourceCode");
			IncomeCategoryCodeArr[IncomeSourceCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryCode");
			IncomeCategoryTitleArr[IncomeSourceCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryTitle");
			achedamicYearArr[IncomeSourceCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			IncomeCategoryValueArr[IncomeSourceCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryValue");
			Income_degreeCodeArr[IncomeSourceCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("Income_degreeCode");
			CurrencyArr[IncomeSourceCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("Currency");
			IncomeSourceCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("messageId") != null && clientInterface == "formStudentProfileDeteils") {


			messageIdArr[messageIdLength] = xml.getElementsByTagName("record")[i].getAttribute("messageId");
			referenceNoArr[messageIdLength] = xml.getElementsByTagName("record")[i].getAttribute("referenceNo");
			notesuserIdArr[messageIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			messageArr[messageIdLength] = xml.getElementsByTagName("record")[i].getAttribute("message");
			notesuserNameArr[messageIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			messageIdLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("stdProfileapplicationNo") != null && clientInterface == "formStudentProfileDeteils") {
			profileapplicationNoArr[applicationProfile] = xml.getElementsByTagName("record")[i].getAttribute("stdProfileapplicationNo");
			applicationProfile++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formStudentProfileDeteils") {


			profileapplicationNoArr1[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			profilestudentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			profilestudentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			profiledegreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			profiledegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			profilestudentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			profilestudentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			profilestudentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			profilestudentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			profilestudentEmploymentArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			profilestudentInitialArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");

			studentNICLength++;

		}


		//-----------------------------------------------------------------------------------------------------------------------			

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formStudentTransfer") {


			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCode1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			studentDateofbirthArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			programmeTypeCode1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			degreeCode1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			studentEmploymentArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			degreeMediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			studentNationalityArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentOfficeAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			//degreeMediumArr1[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium1");
			studentNoLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formStudentTransfer") {


			studentNo2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentName2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNIC2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCode2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCode2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			studentDateofbirth2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			programmeTypeCode2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			degreeCode2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			achedamicYear2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			applicationNo2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			degreeMedium2Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			applicationNoLength++;

		}



		// if(xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formStudentProfileDeteils"){
		// trfacultyCodeArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
		// trprogrammeTypeCodeArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
		// trdegreeCodeArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
		// trdegreeTitleArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
		// trfacultyTitleArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
		// trprogrammeTypeTitleArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");

		// trdegreeCodeLength++;
		// }

		if (xml.getElementsByTagName("record")[i].getAttribute("tr_degreeCode") != null && clientInterface == "formStudentProfileDeteils") {


			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("tr_degreeCode") != null) {
					trfacultyCodeArr.length = 0;
					trprogrammeTypeCodeArr.length = 0;
					trdegreeCodeArr.length = 0;
					trdegreeTitleArr.length = 0;
					trfacultyTitleArr.length = 0;
					trprogrammeTypeTitleArr.length = 0;
					trdegreeCodeLength = 0;
				}
			}
			trfacultyCodeArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("tr_facultyCode");
			trprogrammeTypeCodeArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("tr_programmeTypeCode");
			trdegreeCodeArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("tr_degreeCode");
			trdegreeTitleArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("tr_degreeTitle");
			trfacultyTitleArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("tr_facultyTitle");
			trprogrammeTypeTitleArr[trdegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("tr_programmeTypeTitle");

			trdegreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("ruleID") != null && clientInterface == "formStudentProfileDeteils") {


			ruleIDArr[ruleIDLength] = xml.getElementsByTagName("record")[i].getAttribute("ruleID");
			ruleTitleArr[ruleIDLength] = xml.getElementsByTagName("record")[i].getAttribute("ruleTitle");
			transferTypeArr[ruleIDLength] = xml.getElementsByTagName("record")[i].getAttribute("transferType");

			ruleIDLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("transferID") != null && clientInterface == "formStudentProfileDeteils") {


			oldStudentNoArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("oldStudentNo");
			TransferstudentNoArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			transferTypeArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("transferType");
			transferIDArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("transferID");
			notesArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("notes");
			TransferapplicationNoArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			transferDateArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("transferDate");
			transferIDLength++;

		}



		if (xml.getElementsByTagName("record")[i].getAttribute("coursecommence") != null && clientInterface == "formStudentProfileDeteils") {


			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("coursecommence") != null) {
					commencedegreeCodeArr.length = 0;
					commencedegreeTitleArr.length = 0;
					durationArr.length = 0;
					coursecommenceArr.length = 0;
					commenceacademicYearArr.length = 0;
					coursecommenceLength = 0;
				}
			}


			commencedegreeCodeArr[coursecommenceLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			commencedegreeTitleArr[coursecommenceLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			durationArr[coursecommenceLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");
			coursecommenceArr[coursecommenceLength] = xml.getElementsByTagName("record")[i].getAttribute("coursecommence");
			commenceacademicYearArr[coursecommenceLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			coursecommenceLength++;

		}




		if (xml.getElementsByTagName("record")[i].getAttribute("ruleID") != null && clientInterface == "formTransferRules") {
			ruleIDArr[ruleIDLength] = xml.getElementsByTagName("record")[i].getAttribute("ruleID");
			ruleTitleArr[ruleIDLength] = xml.getElementsByTagName("record")[i].getAttribute("ruleTitle");


			ruleIDLength++;
		}




		if (xml.getElementsByTagName("record")[i].getAttribute("sendSMSapplicationNo") != null && (clientInterface == "formSendSMSBulk")) {

			if (i == 1) {
				applicationNoLength = 0;
				applicationNoArr.length = 0;
				studentNameArr.length = 0;
				studentNICArr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentContactMobileArr.length = 0;
			}

			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("nic");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sendSMSapplicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("name");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("adress");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("mobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("email");
			studenttotalPayedArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("totalPayed");
			applicationNoLength++;
		}
		// else if (i == 0) {
		// 	applicationNoLength = 0;
		// 	applicationNoArr.length = 0;
		// 	studentNameArr.length = 0;
		// 	studentNICArr.length = 0;
		// 	studentPermanentAddressArr.length = 0;
		// 	studentContactMobileArr.length = 0;
		// 	studentContactEmailArr.length = 0;
		// }





		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formApplicantList") {

			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null) {
					applicationNoLength = 0;
					universityCodeArr.length = 0;
					universityTitleArr.length = 0;
					facultyCodeArr.length = 0;
					facultyTitleArr.length = 0;
					programmeTypeCodeArr.length = 0;
					programmeTypeTitleArr.length = 0;
					degreeCodeArr.length = 0;
					degreeTitleArr.length = 0;
					studentNICArr.length = 0;
					applicationNoArr.length = 0;
					studentNameArr.length = 0;
					studentPersonalTitleArr.length = 0;
					studentInitialArr.length = 0;
					studentDateofbirthArr.length = 0;
					studentNationalityArr.length = 0;
					studentCitizenshipArr.length = 0;
					studentEmploymentArr.length = 0;
					studentPermanentAddressArr.length = 0;
					studentOfficeAddressArr.length = 0;
					correspondenceArr.length = 0;
					studentContactLanArr.length = 0;
					studentContactMobileArr.length = 0;
					studentContactEmailArr.length = 0;
					achedamicYearArr.length = 0;
					pinArr.length = 0;
					medium1Arr.length = 0;
					applicantBatchNumber.length = 0;
					streamNameArr.length = 0;
					Main_SubjectArr.length = 0;
					applicant_appliedDate.length = 0;
					applicant_Pay_amount.length = 0;
					appliantListForm = true;
				}
			}

			universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			pinArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("pin");
			medium1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			streamNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("streamName");
			Main_SubjectArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Main_Subject");
			applicant_appliedDate[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("appliedDate");
			applicant_Pay_amount[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_amount");
			applicantBatchNumber[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNumber");

			applicationNoLength++;
		}





		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formAplicantProfile") {
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			bachelorDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegree");
			bachelorDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeTitle");
			bachelorDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreeobtainUniversity");
			bachelorDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationYear");
			bachelorDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("bachelorDegreegraduationMonth");
			higherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegree");
			higherDegreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeTitle");
			higherDegreeobtainUniversityArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreeobtainUniversity");
			higherDegreegraduationYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationYear");
			higherDegreegraduationMonthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("higherDegreegraduationMonth");
			qualificationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationOne");
			qualificationAwardingAuthorityOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingAuthorityOne");
			qualificationAwardingYearOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationAwardingYearOne");
			qualificationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qualificationTwo");
			qulificationAwardingAuthorityTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingAuthorityTwo");
			qulificationAwardingYearTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("qulificationAwardingYearTwo");
			companyOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyOne");
			designationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationOne");
			fromOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromOne");
			toOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toOne");
			companyTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyTwo");
			designationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationTwo");
			fromTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromTwo");
			toTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toTwo");
			companyThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("companyThree");
			designationThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("designationThree");
			fromThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fromThree");
			toThreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("toThree");
			refreeNameOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameOne");
			refreeAddressOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressOne");
			refreeDesignationOneArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationOne");
			refreeNameTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeNameTwo");
			refreeAddressTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeAddressTwo");
			refreeDesignationTwoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("refreeDesignationTwo");
			registrationSougthArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registrationSougth");
			mainSubjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("mainSubject");
			fieldOfSpecializationArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("fieldOfSpecialization");
			researchMediumArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchMedium");
			researchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("researchTitle");
			grantForProjectArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantForProject");
			grantDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("grantDetails");
			financedDetailsArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("financedDetails");
			registeredOtherDegreeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("registeredOtherDegree");
			applicationNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			applicantNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantName");
			applicantInstitutionArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantInstitution");
			applicantAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantAddress");
			applicantResearchTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("applicantResearchTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");

			studentNICLength++;
		}


		// if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formSelectedStudentList") {
		// 	registeredstudentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
		// 	registeredstudentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
		// 	registeredstudentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
		// 	registereddegreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
		// 	registereddegreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
		// 	registeredachedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
		// 	registeredmediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
		// 	registeredprogrammeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
		// 	registeredStudentArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("registered");

		// 	studentNoLength++;
		// }



		// if (xml.getElementsByTagName("record")[i].getAttribute("transferID") != null && clientInterface == "formSelectedStudentList") {
		// 	transferIDArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("transferID");
		// 	studentNoArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
		// 	oldStudentNoArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("oldStudentNo");
		// 	transferTypeArr[transferIDLength] = xml.getElementsByTagName("record")[i].getAttribute("transferType");
		// 	transferIDLength++;
		// }

		// if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formSelectedStudentList") {

		// 	universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
		// 	universityTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
		// 	facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
		// 	facultyTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
		// 	programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
		// 	programmeTypeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
		// 	degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
		// 	degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
		// 	studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
		// 	applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
		// 	studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
		// 	studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
		// 	studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
		// 	studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
		// 	studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
		// 	studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
		// 	studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
		// 	studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
		// 	studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
		// 	correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
		// 	studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
		// 	studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
		// 	studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
		// 	achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
		// 	studentNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
		// 	mediumArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("appmedium");
		// 	applicationNoLength++;

		// }

		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formSelectedStudentList") {
			if (!regStudent) {
				applicationNoLength = 0;
				applicationNoLength.length = 0;
				universityCodeArr.length = 0;
				universityTitleArr.length = 0;
				facultyCodeArr.length = 0;
				facultyTitleArr.length = 0;
				programmeTypeCodeArr.length = 0;
				programmeTypeTitleArr.length = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				studentNICArr.length = 0;
				applicationNoArr.length = 0;
				studentNameArr.length = 0;
				studentPersonalTitleArr.length = 0;
				studentInitialArr.length = 0;
				studentDateofbirthArr.length = 0;
				studentNationalityArr.length = 0;
				studentCitizenshipArr.length = 0;
				studentEmploymentArr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentOfficeAddressArr.length = 0;
				correspondenceArr.length = 0;
				studentContactLanArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				achedamicYearArr.length = 0;
				studentNoArr.length = 0;
				mediumArr.length = 0;
				registeredStudentArr.length = 0;
				transferTypeArr.length = 0;
				newStudentNoArr.length = 0;

				regStudent = true;
			}
			universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeTitle");
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			mediumArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("appmedium");
			registeredStudentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("registered");
			transferTypeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("transferType");
			newStudentNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("newStudentNo");
			applicationNoLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formCreateStudentAccounts") {


			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");

			studentNoLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formThesisNotification") {
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");

			birthCertificateArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("birthCertificate");
			degreeCertificateArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCertificate");
			paymentTypeOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentTypeOne");
			paymentDateOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentDateOne");
			paymentAmountOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentAmountOne");

			paymentTypeTwoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentTypeTwo");
			paymentDateTwoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentDateTwo");
			paymentAmountTwoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentAmountTwo");
			paymentTypeThreeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentTypeThree");
			paymentDateThreeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentDateThree");
			paymentAmountThreeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentAmountThree");

			commenceDateArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("commenceDate");
			endDateArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("endDate");
			facultyBoardDateArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyBoardDate");
			facultyBoardNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyBoardNo");
			boardOfStudyDateArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("boardOfStudyDate");
			boardOfStudyNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("boardOfStudyNo");
			thesisTopicOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("thesisTopicOne");
			thesisTopicTwoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("thesisTopicTwo");
			thesisTopicThreeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("thesisTopicThree");
			thesisTopicFourArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("thesisTopicFour");

			supervisorOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorOne");
			supervisorTwoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("supervisorTwo");
			examinerOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("examinerOne");
			examinerTwoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("examinerTwo");
			examinerThreeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("examinerThree");
			progressReportOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportOne");
			progressReportDateOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportDateOne");
			progressReportTwoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportTwo");
			progressReportDateTwoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportDateTwo");
			progressReportThreeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportThree");
			progressReportDateThreeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportDateThree");
			progressReportFourArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportFour");
			progressReportDateFourArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportDateFour");
			progressReportFiveArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportFive");
			progressReportDateFiveArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportDateFive");
			progressReportSixArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportSix");
			progressReportDateSixArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("progressReportDateSix");
			extentionFromOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("extentionFromOne");
			extentionToOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("extentionToOne");


			studentNoLength++;
		}

		//addes2015/05/11

		// Notify Thesis Examiners XML StudentNo

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formReceivingNotificationForThesisSubmission") {
			studentNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			academicYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			batchNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");

			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLand01");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile01");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			tidArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("tid");
			titleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("title");
			lecturerNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerName");
			lecturerEmpNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo");

			studentNICLength++;

		}

		//Thesis evaluation 27.05.2015

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formThesisEvaluation") {
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			tidArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("tid");
			titleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("title");
			lecturerNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerName");
			lecturerEmpNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo");
			RemDateArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("RemDate");
			descriptionArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("description");



			studentNoLength++;
		}

		//Appoint ExaminersRecc

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formAppointExaminers") {
			studentNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			academicYearArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			batchNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");

			studentPermanentAddressArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLand01");
			studentContactMobileArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile01");
			studentContactEmailArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			tidArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("tid");
			titleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("title");
			lecturerNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerName");
			lecturerEmpNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo");

			studentNICLength++;
		}



		// Examiner Details View 06.06.2015

		if (xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo") != null && clientInterface == "formExaminersDetailsView") {

			studentNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			//studentNameArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			//studentNICArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			//universityCodeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			//facultyCodeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			// facultyTitleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			// departmentCodeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			// departmentTitleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			// programmeTypeCodeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			// programmeTypeTitleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			// degreeCodeArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			// degreeTitleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle"); 
			// academicYearArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			// batchNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");

			// studentPermanentAddressArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			// studentContactLanArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLand01");
			// studentContactMobileArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile01");
			// studentContactEmailArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			tidArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("tid");
			titleArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("title");
			lecturerNameArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerName");
			lecturerEmpNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo");
			BOSNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("BOSNo");
			BOSDateArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("BOSDate");
			DateReceivefromHeadArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("DateReceivefromHead");
			AcceptArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Accept");
			DateRequestRenominateArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("DateRequestRenominate");

			FGSBoardNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("FGSBoardNo");
			FGSBoardDateArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("FGSBoardDate");
			DateReceivefromBOSArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("DateReceivefromBOS");
			AcceptfgsArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Acceptfgs");
			DateRequestRenominateFgsArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("DateRequestRenominateFgs");

			SenateNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("SenateNo");
			SenateDateArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("SenateDate");
			DateReceivefromFGSBoadArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("DateReceivefromFGSBoad");
			AcceptSenateArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("AcceptSenate");
			DateRequestRenominateSenateArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("DateRequestRenominateSenate");


			lecturerEmpNoLength++;

		}

		//Thesis reminders 09.06.2015

		if (xml.getElementsByTagName("record")[i].getAttribute("tid") != null && clientInterface == "formViewReminderDetails") {
			studentNoArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			tidArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("tid");
			titleArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("title");
			lecturerNameArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerName");
			lecturerEmpNoArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo");
			ridArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("rid");

			RemDateArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("RemDate");
			descriptionArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("description");
			reminderMethodArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("reminderMethod");


			tidNoLength++;
		}

		//Thesis Notification View 9.06.2015

		if (xml.getElementsByTagName("record")[i].getAttribute("tid") != null && clientInterface == "formViewThesisNotification") {
			studentNoArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			tidArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("tid");
			titleArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("title");
			receivedByArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("receivedBy");
			receivedDateArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("receivedDate");
			forwardToArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("forwardTo");
			forwardedDateArr[tidNoLength] = xml.getElementsByTagName("record")[i].getAttribute("forwardedDate");



			tidNoLength++;
		}



		//add old students

		if (xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode") != null && clientInterface == "addOldStudentOne") {
			programmeTypeCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			batchNoArr[programmeTypeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");


			programmeTypeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("facultyCode") != null && clientInterface == "addOldStudentOne") {
			universityCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCodeArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			universityTitleArr[facultyCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");

			facultyCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && clientInterface == "formAddOldStudentFormTwo") {
			degreeCodeArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNoArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNICLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");

			studentNICLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo") != null && clientInterface == "formAddOldStudentFormTwo") {
			lecturerEmpNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo");
			lecturerNameArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerName");


			lecturerEmpNoLength++;

		}

		//Add thesis Topic			

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formAddThesisTitle") {
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			tidArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("tid");
			titleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("title");


			thesisTopicOneArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("thesisTopicOne");
			// thesisTopicTwoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("thesisTopicTwo");
			// thesisTopicThreeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("thesisTopicThree");
			// thesisTopicFourArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("thesisTopicFour");

			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");


			studentNoLength++;
		}

		//Transaction type


		if (xml.getElementsByTagName("record")[i].getAttribute("transactionCode") != null && clientInterface == "formBoardReccomendation") {
			transactionCodeArr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("transactionCode");
			transactionSubCodeArr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("transactionSubCode");
			transacDescriptionArr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("transacDescription");
			sendformuseArr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sendformuse");
			// facultyCodeArr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			// degreeCodeArr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");

			infaceEleName1Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName1");
			infaceEleName2Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName2");
			infaceEleName3Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName3");
			infaceEleName4Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName4");
			infaceEleName5Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName5");
			infaceEleName6Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName6");
			infaceEleName7Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName7");
			infaceEleName8Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName8");
			infaceEleName9Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName9");
			infaceEleName10Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName10");
			infaceEleName11Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName11");
			infaceEleName12Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName12");
			infaceEleName13Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName13");
			infaceEleName14Arr[transactionCodeNoLength] = xml.getElementsByTagName("record")[i].getAttribute("infaceEleName14");


			transactionCodeNoLength++;
		}

		//StudentTransaction

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formBoardReccomendation") {
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			departmentCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			departmentTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			academicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			batchNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("batchNo");

			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLand01");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile01");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");

			studentNoLength++;
		}

		//List examiner list


		if (xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo") != null && clientInterface == "formBoardReccomendation") {
			lecturerEmpNoArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo");
			lecturerNameArr[lecturerEmpNoLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerName");


			lecturerEmpNoLength++;

		}


		//Document Data4
		if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null && clientInterface == "formAddDocumentData") {
			documentItemIDArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentNameArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");
			dataItemIDArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemID");
			dataItemNameArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemName");

			dataItemIDLength++;

		}

		//Document List
		if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null && clientInterface == "formAddDocumentData") {
			documentIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentNameArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");

			documentIDLength++;

		}

		//Document sequence num
		if (xml.getElementsByTagName("record")[i].getAttribute("docmentID") != null && clientInterface == "formAddDocumentData") {
			docmentIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("docmentID");
			sequenceNoArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sequenceNo");

			documentIDLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("sessionID") != null && clientInterface == "formAddDocumentData") {
			sessionIDArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sessionID");
			userIdArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			ipaddArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("ip_add");

			sessionIDLength++;

		}

		//To list reflect data Degree,Lecturer
		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formAddDocumentData") {
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			lecturerEmpNoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerEmpNo");
			lecturerNameArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("lecturerName");

			degreeCodeLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("sequenceNo") != null && clientInterface == "formDocDecisionTransactionTwo") {
			documentID2Arr[sequenceNoLength] = xml.getElementsByTagName("record")[i].getAttribute("docmentID");
			dataItemID2Arr[sequenceNoLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemID");
			sessionID2Arr[sequenceNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sessionID");
			sequenceNo2Arr[sequenceNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sequenceNo");
			value2Arr[sequenceNoLength] = xml.getElementsByTagName("record")[i].getAttribute("itemValue");
			documentName2Arr[sequenceNoLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");
			dataItemName2Arr[sequenceNoLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemName");

			sequenceNoLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("sessionID") != null && clientInterface == "formDocDecisionTransaction") {
			documentID1Arr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("docmentID");
			dataItemIDArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemID");
			sessionIDArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sessionID");
			sequenceNoArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sequenceNo");
			valueArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("itemValue");
			documentName1Arr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");
			dataItemName1Arr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemName");

			sessionIDLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formDocDecisionTransaction") {
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");


			degreeCodeLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("studentName") != null && clientInterface == "formDocDecisionTransaction") {
			studentlistArr[studentNameLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");

			studentNameLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null && clientInterface == "formListDocument") {
			documentIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentNameArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");

			documentIDLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formListDocument") {
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			selectedArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selected");
			fieldNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("fieldName");
			fieldValueArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("value");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			departmentTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			degreeMediumArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			//studentContactEmai21Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail2");




			applicationNoLength++;
		}

		
		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "updateEditApplicantDetails") {
			// applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			// studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			// studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			// studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			// studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			// selectedArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selected");
			// //fieldNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("fieldName");
			// //fieldValueArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("value");
			// studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			// achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			// studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			// studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			// degreeMediumArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			// studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			// studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLand01");
			// studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile01");
			// studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");

			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			mediumArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");

			universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");







			applicationNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "updateEditStudentDetails") {

			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");




			studentNoLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formListDocument") {
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			selectedArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selected");
			fieldNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationFieldName");
			fieldValueArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationValue");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			registeredArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("registered");
			departmentTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");


			studentNoLength++;
		}

		//Document Data4 Add List
		if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null && clientInterface == "formListDocument") {
			documentItemIDArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentNameArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");
			dataItemIDArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemID");
			dataItemNameArr[dataItemIDLength] = xml.getElementsByTagName("record")[i].getAttribute("dataItemName");

			dataItemIDLength++;

		}

		//Document sequance num
		if (xml.getElementsByTagName("record")[i].getAttribute("docmentID") != null && clientInterface == "formListDocument") {
			docmentIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("docmentID");
			sequenceNoArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sequenceNo");

			documentIDLength++;

		}

		//PrintID	
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && (clientInterface == "formPrintStudentID" || clientInterface == "formPreRegStudent" || clientInterface == "formBulkTransterStudent" || clientInterface == "formEnrollStudent")) {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null) {
					applicationNoArr.length = 0;
					studentNoArr.length = 0;
					studentPersonalTitleArr.length = 0;
					studentTransferStudentNoArr.length = 0;
					studentInitialArr.length = 0;
					studentNameArr.length = 0;
					studentNICArr.length = 0;
					studentPermanentAddressArr.length = 0;
					degreeCodeArr.length = 0;
					degreeTitleArr.length = 0;
					achedamicYearArr.length = 0;
					medium1Arr.length = 0;
					studentPermanentAddressArr.length = 0;
					studentContactLanArr.length = 0;
					studentContactMobileArr.length = 0;
					studentContactEmailArr.length = 0;
					studentLibraryIdCodeArr.length = 0;
					durationArr.length = 0;
					coursecommenceArr.length = 0;
					commenceacademicYearArr.length = 0;
					RegisteredDateArr.length = 0;
					applicationFeeArr.length = 0;

					formPrintStudentIDVar = true;
				}
			}
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentTransferStudentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("oldStudentNo");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			medium1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			// studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			studentLibraryIdCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("LibraryIdCode");
			durationArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");
			coursecommenceArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("coursecommence");
			commenceacademicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("batchYear");
			RegisteredDateArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("RegisteredDate");
			applicationFeeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationFee");
			studentNoLength++;

		}



		/************************Add Student Payments - Nishadi START*************************************************************************/
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formBulkPayment") {

			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			medium1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			paymentCompletedArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentCompleted");
			sarConfirmationArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sarConfirmation");

			studentNoLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("installmentNo") != null && clientInterface == "formBulkPayment") {

			degreeCodeForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			academicYrForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			instNoForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("installmentNo");
			amountForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("amount");
			deadlineForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentdeadline");
			degreeTitleForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			courseFeeForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("icourseFee");
			libraryFeeForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("ilibraryFee");

			installmentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("tCode") != null && clientInterface == "formBulkPayment") {

			studentNoNewArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			payAmountArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("amount");
			degreeCodeNewArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			paymentDateArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentdate");
			installmentArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("installment");

			tCLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degCode2") != null && clientInterface == "formBulkPayment") {

			degreeCodeNewArr2[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degCode2");
			degreeTitleArr2[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			acYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");

			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("stdNo") != null && clientInterface == "formBulkPayment") {

			studentNoArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("stdNo");
			studentInitialArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNICArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			degreeCodeArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			medium1Arr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			courseFeeArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseFee");
			libraryFeeArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("libraryFee");
			feebatchyearArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("feebatchyear");
			paymentCompletedArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("payCom");
			payCompleteDatedArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("payCompleteDate");
			payCompleteTimeArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("payCompleteTime");

			tCodeLength++;
		}



		/************************Add Student Payments - Nishadi END*************************************************************************/

		if (xml.getElementsByTagName("record")[i].getAttribute("sessionID") != null && clientInterface == "formListDocument") {
			sessionIDArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("sessionID");
			sessionuserNameArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			ipaddArr[sessionIDLength] = xml.getElementsByTagName("record")[i].getAttribute("ip_add");

			sessionIDLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formUserActivity") {
			degreeCodeUserArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleUserArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");


			degreeCodeLength++;


		}
		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formReprintApplicantionData2") {

			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null) {
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


				}
			}


			universityCode1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCode1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			programmeTypeCode1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			degreeCode1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			applicationNo1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			temporaryNo1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("temporaryNo");
			studentNIC1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentName1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitle1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitial1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirth1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationality1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			countryRegion1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("countryRegion");
			studentCitizenship1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentDesignation1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDesignation");
			studentEmployment1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddress1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddress1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondence1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLan1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobile1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmail1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			degreeTitle1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYear1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			medium1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			pin1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("pin");
			studentContactEmai21Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail2");
			studentgenderArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentGender");

			streamNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("streamName");
			Main_SubjectArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Main_Subject");
			Study_FieldArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Study_Field");
			Research_TitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Research_Title");
			projectGrantArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("projectGrant");
			projectGrantDetailsArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("projectGrantDetails");
			projectFinancedArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("projectFinanced");




			applicationNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && xml.getElementsByTagName("record")[i].getAttribute("educationPin") != null && clientInterface == "formReprintApplicantionData") {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("educationPin") != null) {
					studentNIC2Arr.length = 0;
					applicationNo2Arr.length = 0;
					educationFieldName2Arr.length = 0;
					educationValue2Arr.length = 0;
					educationPin2Arr.length = 0;

					applicationNo2Length = 0;


				}
			}

			studentNIC2Arr[applicationNo2Length] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNo2Arr[applicationNo2Length] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			educationFieldName2Arr[applicationNo2Length] = xml.getElementsByTagName("record")[i].getAttribute("educationFieldName");
			educationValue2Arr[applicationNo2Length] = xml.getElementsByTagName("record")[i].getAttribute("educationValue");
			educationPin2Arr[applicationNo2Length] = xml.getElementsByTagName("record")[i].getAttribute("educationPin");

			applicationNo2Length++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && xml.getElementsByTagName("record")[i].getAttribute("workPin") != null && clientInterface == "formReprintApplicantionData2") {
			//alert(xml.getElementsByTagName("record")[i].getAttribute("studentNIC"));
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("workPin") != null) {
					studentNIC3Arr.length = 0;
					applicationNo3Arr.length = 0;
					workFieldName3Arr.length = 0;
					workValue3Arr.length = 0;
					workPin3Arr.length = 0;


					applicationNo3Length = 0;


				}
			}

			studentNIC3Arr[applicationNo3Length] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNo3Arr[applicationNo3Length] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			workFieldName3Arr[applicationNo3Length] = xml.getElementsByTagName("record")[i].getAttribute("workFieldName");
			workValue3Arr[applicationNo3Length] = xml.getElementsByTagName("record")[i].getAttribute("workValue");
			workPin3Arr[applicationNo3Length] = xml.getElementsByTagName("record")[i].getAttribute("workPin");

			applicationNo3Length++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formApplicantList") {
			if (!degreeForAppliantListForm) {
				universityCodeLength = facultyCodeLength = degreeCodeLength = 0;
				degreeForAppliantListForm = true;
			}

			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			facultyCode3Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && (clientInterface == "formAdmissionCardForm" || clientInterface == "formPaperCountForm")) {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null) {
					departmentCodeappArr.length = 0;
					degreeCodappeArr.length = 0;
					programmeCodeappeArr.length = 0;
					degreeTitle1Arr.length = 0;
					facultyCode3Arr.length = 0;
					degreeCodeLength = 0;
				}
			}
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			facultyCode3Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			degreeCodeLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formUserActivity") {
			userIdUserArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameUserArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");


			userIdLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeTitle") != null && clientInterface == "formNoteAndNotification") {
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			//degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");


			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formAllReport") {
			applicationNoArrForeign[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNICArrForeign[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("NIC");
			durationArrForeign[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");
			studentNationalityArrForeign[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			degreeCodeArrForeign[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArrForeign[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArrForeign[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			countryRegionArrForeign[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("countryRegion");
			courseFeeArrForeign[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("courseFee");
			applicationNoLength++;
		}


		//letter--------------------------------------------------------------------
		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formLetterTemplate") {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null) {
					applicationNoArr.length = 0;
					studentNameArr.length = 0;
					studentInitialArr.length = 0;
					studentNICArr.length = 0;
					studentPermanentAddressArr.length = 0;
					selectedArr.length = 0;
					degreeTitleArr.length = 0;
					achedamicYearArr.length = 0;
					studentPersonalTitleArr.length = 0;
					degreeMediumArr.length = 0;
					degreeCodeArr.length = 0;
					degreeMediumArr.length = 0;
					registeredArr.length = 0;
					degreeMediumArr1.length = 0;
					applicationNoLength = 0;
				}
			}

			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			selectedArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selected");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			degreeMediumArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			registeredArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("registered");
			studentNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			degreeMediumArr1[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium1");

			applicationNoLength++;
		}

		/*if(xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formLetterTemplate"){
					applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
					studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
					studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
					studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
					selectedArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selected");
					fieldNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationFieldName");
					fieldValueArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationValue");
					degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
					achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
					studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
					registeredArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("registered");
					departmentTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentTitle");
					
					
					studentNoLength++;
		}*/

		//letter end------------------------------------------------------------------

		//-------------------------------------------Return---------------------------------------------------------
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formListDocument") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			userIdLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formSelectedStudentList") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			userdepartmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			userIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formEditApplicantDetails") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formEditStudentDetails") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "updateEditStudentDetails") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formClerkDocumentMenu") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formNoteAndNotification") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formDegreeDetails") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formLetterTemplate") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formTransferMenu") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formBulkPayment") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");

			userIdLength++;
		}
		//--------------------------------------------Return End-------------------------------------------------------------			
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formNoteAndNotification") {
			/*universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle"); 
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle"); 
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial"); 
			studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth"); 
			studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality"); 
			studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment"); 
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress"); 
			studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress"); 
			correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan"); 
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");	
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			pinArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("pin");
			fieldNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationFieldName");
			fieldValueArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationValue");
	
			applicationNoLength++;*/
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			//studentEmploymentArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment"); 
			//studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial"); 
			//applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");


			studentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formAllReport") {
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");

			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");

			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");

			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");

			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");

			academicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");

			studentPersonalTitle1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitial1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirth1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationality1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenship1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmployment1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddress1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddress1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondence1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLan1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobile1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmail1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			registeredArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("registered");
			notesArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("notes");
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			mediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");

			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");


			/*applicationNoArrForeign[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
		studentNICArrForeign[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("NIC");
		durationArrForeign[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");
		studentNationalityArrForeign[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
		degreeCodeArrForeign[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
		degreeTitleArrForeign[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
		achedamicYearArrForeign[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
		countryRegionArrForeign[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("countryRegion");
		courseFeeArrForeign[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("courseFee");*/



			studentNoLength++;



		}

		//************************************************Degree Medium Report******************************************************************************************
		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formAllReport") {
			facultyCodeArrDegree[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArrDegree[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			degreeCodeArrDegree[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArrDegree[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			mediumArrDegree[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");

			degreeCodeLength++;
		}

		//if(xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formAllReport"){
		//	studentNoArr1[TotStuReportLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
		//	academicYearArr1[TotStuReportLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");

		//	TotStuReportLength++;



		//}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formAllReport") {
			degreeCodeArrCount[StudentCountLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			achedamicYearArrCount[StudentCountLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentNoArrCount[StudentCountLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			degreeTitleArrCount[StudentCountLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			nicArrCount[StudentCountLength] = xml.getElementsByTagName("record")[i].getAttribute("NIC");
			durationArrCount[StudentCountLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");
			StudentCountLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("roleId") != null && clientInterface == "formReprintApplicantion") {
			roleIdArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			userIdArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("roleId") != null && clientInterface == "formStudentProfileDeteils") {


			roleIdArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			userIdArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("achedamicYear") != null && clientInterface == "formAllReport") {
			degreeCodeArrRegistered[achedamicYearLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			facultyCodeArrRegistered[achedamicYearLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			studentNoArrRegistered[achedamicYearLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			achedamicYearArrRegistered[achedamicYearLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			degreeTitleArrRegistered[achedamicYearLength] = xml.getElementsByTagName("record")[i].getAttribute("Course");
			facultyTitleArrRegistered[achedamicYearLength] = xml.getElementsByTagName("record")[i].getAttribute("Faculty");
			courseFeeArrRegistered[achedamicYearLength] = xml.getElementsByTagName("record")[i].getAttribute("Course_Fee");

			achedamicYearLength++;

		}

		//***********added 23/8/2016**********************************************************************************************
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null && (clientInterface == "formInterviewList" || clientInterface == "formStudentQulificationList")) {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("studentNIC") != null) {
					studentNICForDocArr.length = 0;
					applicationNoForDocArr.length = 0;
					fieldNameForDocArr.length = 0;
					valueForDocArr.length = 0;
					appverticalPinLength = 0;
				}
			}
			studentNICForDocArr[appverticalPinLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoForDocArr[appverticalPinLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			fieldNameForDocArr[appverticalPinLength] = xml.getElementsByTagName("record")[i].getAttribute("FieldName");
			valueForDocArr[appverticalPinLength] = xml.getElementsByTagName("record")[i].getAttribute("value");
			appverticalPinLength++;
		}



		if (
			xml.getElementsByTagName("record")[i].getAttribute("edu_application_no") != null &&
			(clientInterface == "formInterviewList2" || clientInterface == "formStudentQulificationList2")
		) {
			console.log(xml.getElementsByTagName("record")[i].getAttribute("edu_application_no"));
			if (i == 1) {
				edu_application_no.length = 0;
				edu_university.length = 0;
				edu_awarding_country.length = 0;
				edu_qualification_type.length = 0;
				edu_designator.length = 0;
				edu_qualifier.length = 0;
				edu_graduate_year.length = 0;
				edu_graduate_month.length = 0;
				edu_duration.length = 0;
				edu_effective_date.length = 0;
				edu_gpa.length = 0;
				edu_class.length = 0;
				edu_result_status.length = 0;
				eduRowLength = 0;
			}

			edu_application_no[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_application_no");
			edu_university[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_university");
			edu_awarding_country[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_awarding_country");
			edu_qualification_type[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_qualification_type");
			edu_designator[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_designator");
			edu_qualifier[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_qualifier");
			edu_graduate_year[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_graduate_year");
			edu_graduate_month[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_graduate_month");
			edu_duration[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_duration");
			edu_effective_date[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_effective_date");
			edu_gpa[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_gpa");
			edu_class[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_class");
			edu_result_status[eduRowLength] = xml.getElementsByTagName("record")[i].getAttribute("edu_result_status");

			eduRowLength++;
		}

		if (
			xml.getElementsByTagName("record")[i].getAttribute("prof_application_no") != null &&
			(clientInterface == "formInterviewList3" || clientInterface == "formStudentQulificationList3")
		) {
			if (i == 1) {
				prof_application_no.length = 0;
				prof_qualification.length = 0;
				prof_qualification_level.length = 0;
				prof_awarding_authority.length = 0;
				prof_awarding_year.length = 0;
				prof_awarding_country.length = 0;
				prof_effective_date.length = 0;
				profRowLength = 0;
			}

			prof_application_no[profRowLength] = xml.getElementsByTagName("record")[i].getAttribute("prof_application_no");
			prof_qualification[profRowLength] = xml.getElementsByTagName("record")[i].getAttribute("prof_qualification");
			prof_qualification_level[profRowLength] = xml.getElementsByTagName("record")[i].getAttribute("prof_qualification_level");
			prof_awarding_authority[profRowLength] = xml.getElementsByTagName("record")[i].getAttribute("prof_awarding_authority");
			prof_awarding_year[profRowLength] = xml.getElementsByTagName("record")[i].getAttribute("prof_awarding_year");
			prof_awarding_country[profRowLength] = xml.getElementsByTagName("record")[i].getAttribute("prof_awarding_country");
			prof_effective_date[profRowLength] = xml.getElementsByTagName("record")[i].getAttribute("prof_effective_date");

			profRowLength++;
		}


		if (
			xml.getElementsByTagName("record")[i].getAttribute("work_application_no") != null &&
			(clientInterface == "formInterviewList4" || clientInterface == "formStudentQulificationList4")
		) {
			if (i == 1) {
				work_application_no.length = 0;
				work_organization.length = 0;
				work_designation.length = 0;
				work_awarding_country.length = 0;
				work_address.length = 0;
				work_start_date.length = 0;
				work_end_date.length = 0;
				work_verified.length = 0;
				workRowLength = 0;
			}

			work_application_no[workRowLength] = xml.getElementsByTagName("record")[i].getAttribute("work_application_no");
			work_organization[workRowLength] = xml.getElementsByTagName("record")[i].getAttribute("work_organization");
			work_designation[workRowLength] = xml.getElementsByTagName("record")[i].getAttribute("work_designation");
			work_awarding_country[workRowLength] = xml.getElementsByTagName("record")[i].getAttribute("work_awarding_country");
			work_address[workRowLength] = xml.getElementsByTagName("record")[i].getAttribute("work_address");
			work_start_date[workRowLength] = xml.getElementsByTagName("record")[i].getAttribute("work_start_date");
			work_end_date[workRowLength] = xml.getElementsByTagName("record")[i].getAttribute("work_end_date");
			work_verified[workRowLength] = xml.getElementsByTagName("record")[i].getAttribute("work_verified");

			workRowLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null && (clientInterface == "formInterviewList" || clientInterface == "formStudentQulificationList")) {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("documentID") != null) {
					documentIDArr.length = 0;
					documentNameArr.length = 0;
					documentIDLength = 0;
				}
			}
			documentIDArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentID");
			documentNameArr[documentIDLength] = xml.getElementsByTagName("record")[i].getAttribute("documentName");

			documentIDLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formApplicantsForInterview") {

			degreeCodeForListDocArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleForListDocArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");

			studentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formApplicantsForInterview") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");

			userIdLength++;
		}


		// if(xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formApplicantSelection"){
		// userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
		// userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
		// roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
		// roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
		// departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");	
		// userIdLength++;
		// }			



		//**********************************************************************************************************************
		//***********************************added 1.9.2016***********************************************************************************


		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formSelectedApplicantList") {
			if (!selectedApplicantListBool) {
				applicationNoLength = 0;
				universityCodeArr.length = 0;
				universityTitleArr.length = 0;
				facultyCodeArr.length = 0;
				facultyTitleArr.length = 0;
				programmeTypeCodeArr.length = 0;
				programmeTypeTitleArr.length = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				studentNICArr.length = 0;
				applicationNoArr.length = 0;
				studentNameArr.length = 0;
				studentPersonalTitleArr.length = 0;
				studentInitialArr.length = 0;
				studentDateofbirthArr.length = 0;
				studentNationalityArr.length = 0;
				studentCitizenshipArr.length = 0;
				studentEmploymentArr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentOfficeAddressArr.length = 0;
				correspondenceArr.length = 0;
				studentContactLanArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				achedamicYearArr.length = 0;
				studentNoArr.length = 0;
				mediumArr.length = 0;
				selectionCategoryArr.length = 0;
				selectedFromGraduateArr.length = 0;
				selectedFromProfessionalArr.length = 0;
				selectedFromPendingQulificationArr.length = 0;
				selectedFromSpecialApproveArr.length = 0;
				selectedApplicantListBool = true;
			}

			selectedFromGraduateArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectedFromGraduate");
			selectedFromProfessionalArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectedFromProfessional");
			selectedFromPendingQulificationArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectedFromPendingQulification");
			selectedFromSpecialApproveArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectedFromSpecialApprove");
			universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			mediumArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			selectionCategoryArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectionCategory");
			listNumber[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("listNumber");
			BosDate[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("bosDate");
			BosNumber[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("bosNumber");
			applicationNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formSelectedApplicantList") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			userdepartmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			userIdLength++;
		}

		//*********************************************added9.2.2016***********************************************************************************
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formApplicantSelection") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			userIdLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formApplicantSelection") {

			if (!formApplicantSelectionVar) {
				universityCodeArr.length = 0;
				universityTitleArr.length = 0;
				facultyCodeArr.length = 0;
				facultyTitleArr.length = 0;
				programmeTypeCodeArr.length = 0;
				programmeTypeTitleArr.length = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				studentNICArr.length = 0;
				applicationNoArr.length = 0;
				studentNameArr.length = 0;
				studentPersonalTitleArr.length = 0;
				studentInitialArr.length = 0;
				studentDateofbirthArr.length = 0;
				studentNationalityArr.length = 0;
				studentCitizenshipArr.length = 0;
				studentEmploymentArr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentOfficeAddressArr.length = 0;
				correspondenceArr.length = 0;
				studentContactLanArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				achedamicYearArr.length = 0;
				pinArr.length = 0;
				educationFieldNameArr.length = 0;
				educationValueArr.length = 0;
				educationPinArr.length = 0;
				selectionCategoryArr.length = 0;
				selectedFromGraduateArr.length = 0;
				selectedFromProfessionalArr.length = 0;
				selectedFromPendingQulificationArr.length = 0;
				selectedFromSpecialApproveArr.length = 0;
				formApplicantSelectionVar = true;
			}

			selectedFromGraduateArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectedFromGraduate");
			selectedFromProfessionalArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectedFromProfessional");
			selectedFromPendingQulificationArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectedFromPendingQulification");
			selectedFromSpecialApproveArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectedFromSpecialApprove");

			universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			studentNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			pinArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("pin");
			educationFieldNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationFieldName");
			educationValueArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationValue");
			educationPinArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationPin");
			selectionCategoryArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("selectionCategory");


			applicationNoLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode") != null && clientInterface == "formApplicantSelection") {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sdepartmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sprogrammeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeTitle");
			degreeCodeLength++;
		}
		//**************************************************************************************************************

		//19.9.2016
		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && (clientInterface == "formInterviewList" || clientInterface == "formStudentQulificationList")) {

			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null) {
					departmentCodeappArr.length = 0;
					degreeCodappeArr.length = 0;
					programmeCodeappeArr.length = 0;
					degreeTitle1Arr.length = 0;
					degreeCode1Length = 0;
				}
			}

			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");


			degreeCodeLength++;
		}
		//-----------Note and Notification Start-------------------------------------------------------------------------------------------

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formNoteAndNotification") {
			degreeCodeArr[ndegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[ndegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");

			ndegreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formNoteAndNotification") {
			nstudentNoArr[nstudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			nstudentNICArr[nstudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			nstudentInitialArr[nstudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentdegreeCodeArr[nstudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("stdegreeCode");
			studentachedamicYearArr[nstudentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");

			nstudentNoLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formNoteAndNotification") {
			napplicantNoArr[napplicantNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			napplicantInitialArr[napplicantNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			applicantdegreeCodeArr[napplicantNoLength] = xml.getElementsByTagName("record")[i].getAttribute("appdegreeCode");
			applicantachedamicYearArr[napplicantNoLength] = xml.getElementsByTagName("record")[i].getAttribute("appachedamicYear");
			napplicantNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("IDnotes") != null && clientInterface == "formNoteAndNotification") {
			studentIDArr[confirmNoteLength] = xml.getElementsByTagName("record")[i].getAttribute("IDnotes");
			messageIdArr[confirmNoteLength] = xml.getElementsByTagName("record")[i].getAttribute("messageId");
			additionalNotesArr[confirmNoteLength] = xml.getElementsByTagName("record")[i].getAttribute("additionalNotes");
			ndateArr[confirmNoteLength] = xml.getElementsByTagName("record")[i].getAttribute("requestedDate");

			confirmNoteLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("MID") != null && clientInterface == "formNoteAndNotification") {
			messageTypeIDArr[messageLength] = xml.getElementsByTagName("record")[i].getAttribute("messageTypeID");
			MIDArr[messageLength] = xml.getElementsByTagName("record")[i].getAttribute("MID");
			messageNoteArr[messageLength] = xml.getElementsByTagName("record")[i].getAttribute("message");

			messageLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("facultyCode") != null && clientInterface == "formNoteAndNotification") {
			nfacultyCodeArr[facultyLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			nfacultyTitleArr[facultyLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			ndeanEmpNoArr[facultyLength] = xml.getElementsByTagName("record")[i].getAttribute("deanEmpNo");

			facultyLength++;
		}

		//-----------Note and Notification End-------------------------------------------------------------------------------------------
		if (xml.getElementsByTagName("record")[i].getAttribute("MessageID") != null && clientInterface == "formAddMessage") {
			messageIDArr[MessageCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("MessageID");
			//messageTypeArr[MessageCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("MessageType");

			MessageCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("MessageID") != null && clientInterface == "formAddMessageNewMessage") {
			messageIDArr[MessageCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("MessageID");
			messageTypeArr[MessageCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("MessageType");

			MessageCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("messageTypeID") != null && clientInterface == "formAddMessageNewMessage") {
			EditmessageIDArr[EditMessageCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("messageTypeID");

			//EditmessageTypeArr[EditMessageCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("messageID");

			EditMessageCodeLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formSelectedStudentList") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formSelectedStudentList") {
			if (!degreeForRegStudent) {
				universityCodeLength = facultyCodeLength = degreeCodeLength = 0;
				degreeForRegStudent = true;
			}
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			facultyCode3Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			degreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "addExamResults") {
			studentNameArr[studentNoCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			degreeCodeArr[studentNoCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			studentNoArr[studentNoCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNoCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "transferApplicant") {
			applicationNoArr[applicationNoCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			degreeCodeArr[applicationNoCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeTypeCodeArr[applicationNoCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			applicationNoCodeLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "transferApplicant") {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null) {
					degreeCode1Arr.length = 0;
					degreeTitleArr.length = 0;
					programmeTypeCode1Arr.length = 0;
					degreeCode1Length = 0;
				}
			}

			degreeCode1Arr[degreeCode1Length] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCode1Length] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			programmeTypeCode1Arr[degreeCode1Length] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			degreeCode1Length++;

		}



		//exam results bulk
		if (xml.getElementsByTagName("record")[i].getAttribute("dedegreeCode") != null && clientInterface == "formAddResults") {
			dedegreeCodeArr[dedegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("dedegreeCode");
			degreeTitleArr[dedegreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("dedegreeTitle");
			dedegreeCodeLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formAddResults") {

			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("subjectCode") != null && clientInterface == "formAddResults") {
			subjectCodeArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectCode");
			subjectTitleArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			degreeCodeSubArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCodeSub");
			academicYearSubArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYearSub");
			semesterArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			subjectCodeLength++;
		}


		//subject
		if (xml.getElementsByTagName("record")[i].getAttribute("digCode") != null && clientInterface == "formAddSubject") {
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("digCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			//academicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");

			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formAddSubject") {
			sub_degreeCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			sub_academicYearArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			sub_semesterArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			sub_subjectCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectCode");
			sub_subjectTitleArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			sub_statusArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("status");
			sub_creditsArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");

			sub_CodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("digCode") != null && clientInterface == "formViewSubject") {
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("digCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			//academicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");

			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formViewSubject") {
			sub_degreeCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			sub_academicYearArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			sub_semesterArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			sub_subjectCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectCode");
			sub_subjectTitleArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			sub_statusArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("status");
			sub_creditsArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");

			sub_CodeLength++;
		}

		//upload
		if (xml.getElementsByTagName("record")[i].getAttribute("digCode") != null && clientInterface == "formUploadExaminationResults") {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("digCode") != null) {
					degreeCodeArr.length = 0;
					degreeTitleArr.length = 0;
					resultsFacultyCodeArr.length = 0;
					resultsdepartmentCodeArr.length = 0;
					degreeCodeLength = 0;
				}
			}
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("digCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			resultsFacultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("userFacCode");
			resultsdepartmentCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("userDepCode");

			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formUploadExaminationResults") {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null) {
					sub_degreeCodeArr.length = 0;
					sub_academicYearArr.length = 0;
					sub_semesterArr.length = 0;
					sub_subjectCodeArr.length = 0;
					sub_subjectTitleArr.length = 0;
					sub_statusArr.length = 0;
					sub_creditsArr.length = 0;
					sub_CodeLength = 0;
				}
			}
			sub_degreeCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			sub_academicYearArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			sub_semesterArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			sub_subjectCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectCode");
			sub_subjectTitleArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			sub_statusArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("status");
			sub_creditsArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");

			sub_CodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNoMarks") != null && clientInterface == "formUploadExamResultsDownTemp") {
			//ex_degreeCodeArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ex_degCode");
			ex_studentNoArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNoMarks");
			ex_studentNameArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			ex_studentMediumArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");
			//ex_semesterArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("semester");
			//ex_attemptArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("attempt");
			//ex_subCodeArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ex_subCode");
			//ex_academicYearArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ex_academicYear");

			ex_CodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("SudentNoSub") != null && clientInterface == "formUploadExamResultsDownTemp") {

			tmpDownStudNoArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("SudentNoSub");
			tmpDownStudNameArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("StudentName");
			tmpDownGradeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Grade");
			tmpDownExm1Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner1");
			tmpDownExm2Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner2");
			tmpDownMarksArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Marks");
			ex_studentMediumArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			tmpDownLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("SudentNo") != null && clientInterface == "formUploadExamResultsDownTemp") {


			tmpDownStudNoArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("SudentNo");
			tmpDownStudNameArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("StudentName");
			tmpDownDegCodeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			tmpDownSubCodeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");
			tmpDownGradeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Grade");
			tmpDownExm1Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner1");
			tmpDownExm2Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner2");
			tmpDownMarksArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Marks");
			tmpDownstudentMediumArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentSemMedium");

			tmpDownLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("subCode") != null && clientInterface == "formUploadExamResultsDownTemp") {

			tmpSubCodeArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subCode");
			tmpSubTitleArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subTitle");
			//ex_studentMediumArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			subDownLength++;
		}

		/**Year**/
		if (xml.getElementsByTagName("record")[i].getAttribute("SudentNoYear") != null && clientInterface == "formUploadExamResultsDownTemp") {

			tmpDownStudNoArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("SudentNoYear");
			tmpDownStudNameArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("StudentName");
			tmpDownDegCodeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			tmpDownSubCodeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");
			tmpDownGradeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Grade");
			tmpDownExm1Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner1");
			tmpDownExm2Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner2");
			tmpDownMarksArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Marks");
			tmpsusSemArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("susSem");
			tmpsubjectGPAArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("GPA");				//sewmi
			tmpDownstudentMediumArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentSemMedium");

			tmpDownLength++;
		}

		//passList


		if (xml.getElementsByTagName("record")[i].getAttribute("finalPassStudentNo") != null && clientInterface == "formUploadExamResultsDownTemp") {

			fi_PassStudNoArr[finalLength] = xml.getElementsByTagName("record")[i].getAttribute("finalPassStudentNo");
			fi_PassStudNameArr[finalLength] = xml.getElementsByTagName("record")[i].getAttribute("finalPassName");
			fi_semArr[finalLength] = xml.getElementsByTagName("record")[i].getAttribute("finalsemester");
			fi_GPAArr[finalLength] = xml.getElementsByTagName("record")[i].getAttribute("finalGPA");
			fi_ResultArr[finalLength] = xml.getElementsByTagName("record")[i].getAttribute("finalResult");
			fi_MediumArr[finalLength] = xml.getElementsByTagName("record")[i].getAttribute("finalMedium");
			fi_AddressArr[finalLength] = xml.getElementsByTagName("record")[i].getAttribute("finalAddress");


			finalLength++;
		}




		if (xml.getElementsByTagName("record")[i].getAttribute("subCodeYear") != null && clientInterface == "formUploadExamResultsDownTemp") {

			tmpSubCodeArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subCodeYear");
			tmpSubTitleArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subTitleYear");
			tmpSemesterArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			//ex_studentMediumArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			subDownLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("finalStudentNo") != null && clientInterface == "formUploadExamResultsDownTemp") {

			fi_StudNoArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalStudentNo");
			fi_semArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalsemester");
			fi_GPAArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalGPA");
			fi_ResultArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalResult");
			ex_studentMediumArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			fi_Length++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("finalStudentNoSem") != null && clientInterface == "formUploadExamResultsDownTemp") {

			fi_StudNoArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalStudentNoSem");
			fi_GPAArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalGPA");
			fi_ResultArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalResult");
			ex_studentMediumArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			fi_Length++;
		}

		//Final Result
		if (xml.getElementsByTagName("record")[i].getAttribute("digCode") != null && clientInterface == "formFinalResultConfirm") {
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("digCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			//academicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");

			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("SudentNo") != null && clientInterface == "formFinalResultView") {


			tmpDownStudNoArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("SudentNo");
			tmpDownStudNameArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("StudentName");
			academicYearArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			subjectNameArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");
			subjectTitleArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			subjectSemesterArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			subjectGPAArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("GPA");
			marksArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("Grade");
			subjectCreditsArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");
			ex_studentMediumArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			MarksLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("cr_degreeCode") != null && clientInterface == "formFinalResultView") {
			cr_degreeCodeArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_degreeCode");
			cr_finalResultArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_finalResult");
			cr_gradeArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_grade");
			cr_creditsArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_credits");
			cr_gpaArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_gpa");
			cr_thesisArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_thesis");
			cr_optionalSubGArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_optionalSubG");
			cr_optionalSubCArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_optionalSubC");
			cr_academicYearsArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_academicYears");
			cr_resitArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_resit");
			cr_descriptionArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_description");

			cr_Length++;

		}

		/*Sem*/

		if (xml.getElementsByTagName("record")[i].getAttribute("SudentNo") != null && clientInterface == "formFinalResultViewSem") {
			tmpDownStudNoArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("SudentNo");
			tmpDownStudNameArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("StudentName");
			academicYearArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			subjectNameArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");
			subjectTitleArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			subjectSemesterArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			subjectGPAArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("GPA");
			marksArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("Grade");
			subjectCreditsArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");
			ex_studentMediumArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			MarksLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("cr_degreeCode") != null && clientInterface == "formFinalResultViewSem") {
			cr_degreeCodeArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_degreeCode");
			cr_finalResultArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_finalResult");
			cr_gradeArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_grade");
			cr_creditsArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_credits");
			cr_gpaArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_gpa");
			cr_thesisArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_thesis");
			cr_optionalSubGArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_optionalSubG");
			cr_optionalSubCArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_optionalSubC");
			cr_academicYearsArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_academicYears");
			cr_resitArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_resit");
			cr_descriptionArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_description");

			cr_Length++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("cr_degreeCode") != null && clientInterface == "formFinalResultsCriteriaAdd") {
			cr_degreeCodeArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_degreeCode");
			cr_finalResultArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_finalResult");
			cr_gradeArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_grade");
			cr_creditsArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_credits");
			cr_gpaArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_gpa");
			cr_thesisArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_thesis");
			cr_optionalSubGArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_optionalSubG");
			cr_optionalSubCArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_optionalSubC");
			cr_academicYearsArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_academicYears");
			cr_resitArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_resit");
			cr_descriptionArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_description");
			cr_examHeldArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_examHeld");
			cr_examValiddateArr[cr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_examValiddate");

			cr_Length++;

		}

		//library id generate
		if (xml.getElementsByTagName("record")[i].getAttribute("LibProgrammeCode") != null && clientInterface == "formSelectedStudentList") {

			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("LibProgrammeCode") != null) {
					libptcode.length = 0;
					newlibptcode.length = 0;
					libdegreecode.length = 0;
					newlibdegreecode.length = 0;
					libraryCodeLenth = 0;
				}
			}

			libptcode[libraryCodeLenth] = xml.getElementsByTagName("record")[i].getAttribute("LibProgrammeCode");
			newlibptcode[libraryCodeLenth] = xml.getElementsByTagName("record")[i].getAttribute("NewLibProgrammeCode");
			libdegreecode[libraryCodeLenth] = xml.getElementsByTagName("record")[i].getAttribute("LibDegreeCode");
			newlibdegreecode[libraryCodeLenth] = xml.getElementsByTagName("record")[i].getAttribute("NewLibDegreeCode");



			libraryCodeLenth++;
		}
		//application
		if (xml.getElementsByTagName("record")[i].getAttribute("subjectCode") != null && clientInterface == "formApplication") {


			subjectCodeArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectCode");
			subjectTitleArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			subjectdegreeCodeArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			subjectStatusArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("status");
			subjectSemesterArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			subjectAchedamicYearArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");

			subjectCodeLength++;
		}
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formApplication") {

			if (formApplication) {
				studentNoLength = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				studentNameArr.length = 0;
				studentNoArr.length = 0;
				achedamicYearArr.length = 0;
				formApplication = true;
			}

			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentdegreecode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");


			studentNoLength++;
		}

		//repeatexamApplication --------------------------------------------------------------------------


		if (xml.getElementsByTagName("record")[i].getAttribute("subjectName") != null && clientInterface == "formApplicationRepete") {

			repeatSudentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("SudentNo");
			repeatStudentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("StudentName");
			repeatAchedamicYearArr[sub_subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			repeatSubjectNameArr[sub_subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");
			repeatDegreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			repeatMarksArr[sub_subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("repeatMarks");
			repeatGradeArr[sub_subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("repeatGrade");
			repeatDegreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			repeatSubjectTitleArr[sub_subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			repeatSubjectSemesterArr[sub_subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			repeatSubjectStatusArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("status");
			repeatSubjectCreditsArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");


			sub_subjectCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("sub_subjectCode") != null && clientInterface == "formApplicationRepete") {

			sub_subjectCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sub_subjectCode");
			sub_subjectTitleArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sub_subjectTitle");
			sub_subjectStatusArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sub_status");
			sub_subjectSemesterArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sub_subjectSemester");

			sub_CodeLength++;

		}





		//---------------------------------------------------------------------------------------------------------------

		//admission
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && (clientInterface == "formAdmissionCardForm" || clientInterface == "formPaperCountForm")) {

			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			mediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");

			studentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("subdegreeCode") != null && (clientInterface == "formAdmissionCardForm" || clientInterface == "formPaperCountForm")) {

			substudentnoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("substudentno");
			startdateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("startdate");
			enddateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("enddate");
			examdateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("examdate");
			starttimeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("starttime");
			endtimeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("endtime");
			hallnoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("hallno");
			timeSemArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("timeSem")
			subdegreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subdegreeCode");
			academicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subachedamicYear");
			subjectCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectCode");
			subjectSemesterArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subsemester");
			subjectTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			admissionDegreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("admissionDegreeTitle");
			admissionFacultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("addfacCode");


			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formSelectedApplicantList") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formSelectedApplicantList") {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			facultyCode3Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");

			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode") != null && clientInterface == "formLetterTemplate") {

			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			facultyCode3Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");

			degreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formApplication") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("appDegreeCode") != null && clientInterface == "formApplication") {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("appDegreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			facultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("faccode");


			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formUploadExaminationResults") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formUploadExaminationResults") {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");


			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("SudentNo") != null && clientInterface == "formCertificatePrintForm") {

			cer_StudNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("SudentNo");
			cer_StuNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("StudentName");

			PrintsubjectNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");
			PrintsubjectTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			PrintsubjectSemArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			PrintsubjectCreditsArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");
			PrintsubjectYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			PrintGradeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Grade");
			PrintExm1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner1");
			PrintExm2Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner2");
			PrintMarksArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Marks");
			PrintdegreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			PrintdurationArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");
			PrintprogrammeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");



			studentNoLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("printStudentNo") != null && clientInterface == "formCertificatePrintForm") {

			printStudNoArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("printStudentNo");
			printStuNameArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("printStudentName");
			printDegreeCodeArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			printYearArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("printYear");
			printsemArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("printsemester");
			printGPAArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalGPA");
			printResultArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalResult");
			printMediumArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("printMedium");
			printexamHeldArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_examHeld");
			printexamValiddateArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_examValiddate");
			printresitArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_resit");
			printcreditsArr[pr_Length] = xml.getElementsByTagName("record")[i].getAttribute("cr_credits");


			pr_Length++;
		}


		//repeatadmission
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formRepeatAdmissionCardForm") {

			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			mediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");

			studentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("repSub_degreeCode") != null && clientInterface == "formRepeatAdmissionCardForm") {

			rep_studentnoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_studentno");
			rep_startdateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_startdate");
			rep_enddateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_enddate");
			rep_examdateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_examdate");
			rep_starttimeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_starttime");
			rep_endtimeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_endtime");
			rep_hallnoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_hallno");
			rep_timeSemArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_timeSem");
			repSub_degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("repSub_degreeCode");
			rep_degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_degreeCode");
			rep_achedamicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_achedamicYear");
			rep_subjectCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_subjectCode");
			rep_semesterArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_semester");
			rep_subjectTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_subjectTitle");
			rep_DegreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_DegreeTitle");
			rep_facCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_facCode");


			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formDownloadRepeatCount") {

			studentNoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentCountArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCount");
			studentInitialArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			//degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			//achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear"); 

			degreeCodeLength++;
		}



		//repeat download

		// Repeat upload / download ----------------------------------------------------------------------------------
		if (xml.getElementsByTagName("record")[i].getAttribute("digRepCode") != null && clientInterface == "formUploadRepExaminationResults") {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("digRepCode") != null) {
					degreeCodeArr.length = 0;
					degreeTitleArr.length = 0;
					resultsFacultyCodeArr.length = 0;
					resultsdepartmentCodeArr.length = 0;
					degreeCodeLength = 0;
				}
			}
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("digRepCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			resultsFacultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("userFacultyCode");
			resultsdepartmentCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("userReDepCode");

			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formUploadRepExaminationResults") {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null) {
					sub_degreeCodeArr.length = 0;
					sub_academicYearArr.length = 0;
					sub_semesterArr.length = 0;
					sub_subjectCodeArr.length = 0;
					sub_subjectTitleArr.length = 0;
					sub_statusArr.length = 0;
					sub_creditsArr.length = 0;
					sub_CodeLength = 0;
				}
			}
			sub_degreeCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			sub_academicYearArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			sub_semesterArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			sub_subjectCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectCode");
			sub_subjectTitleArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			sub_statusArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("status");
			sub_creditsArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");

			sub_CodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNoMarks") != null && clientInterface == "formRepDownloadList") {

			ex_studentNoArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNoMarks");
			ex_studentNameArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			ex_studentMediumArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");
			ex_studentReasonArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("reason");


			ex_CodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNoMedical") != null && clientInterface == "formRepDownloadList") {

			ex_studentNoArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNoMedical");
			ex_studentNameArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNameMedical");
			ex_studentMediumArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMediumMedical");
			ex_studentReasonArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("reason");


			ex_CodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("RepSudentNoSub") != null && clientInterface == "formRepDownloadList") {


			repDownStudNoArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("RepSudentNoSub");
			repDownStudNameArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_StudentName");
			repDownGradeArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Grade");
			repDownExm1Arr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Examiner1");
			repDownExm2Arr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Examiner2");
			repDownMarksArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Marks");
			ex_studentMediumArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			repDownLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("rep_SudentNo") != null && clientInterface == "formRepDownloadList") {


			tmpDownStudNoArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_SudentNo");
			tmpDownStudNameArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_StudentName");
			tmpDownDegCodeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_degreeCode");
			tmpDownSubCodeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_subjectName");
			tmpDownGradeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Grade");
			tmpDownExm1Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Examiner1");
			tmpDownExm2Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Examiner2");
			tmpDownMarksArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("rep_Marks");
			tmpDownstudentMediumArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentSemMedium");

			tmpDownLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("subCode") != null && clientInterface == "formRepDownloadList") {

			tmpSubCodeArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subCode");
			tmpSubTitleArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subTitle");


			subDownLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("finalStudentNoSem") != null && clientInterface == "formRepDownloadList") {

			fi_StudNoArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalStudentNoSem");
			fi_GPAArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalGPA");
			fi_ResultArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalResult");
			ex_studentMediumArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			fi_Length++;
		}




		//----------------------------------------------------------------


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formABPaymentView") {

			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			medium1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			paymentCompletedArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentCompleted");
			sarConfirmationArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sarConfirmation");
			studentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("stNo") != null && clientInterface == "formABPaymentView") {
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			medium1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			paymentCompletedArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentCompleted");
			sarConfirmationArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sarConfirmation");
			studentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("installmentNo") != null && clientInterface == "formABPaymentView") {

			degreeCodeForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			academicYrForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			instNoForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("installmentNo");
			amountForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("amount");
			deadlineForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentdeadline");
			degreeTitleForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			courseFeeForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("icourseFee");
			libraryFeeForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("ilibraryFee");

			installmentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("tCode") != null && clientInterface == "formABPaymentView") {

			studentNoNewArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			payAmountArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("amount");
			degreeCodeNewArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			paymentDateArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentdate");
			installmentArr[tCLength] = xml.getElementsByTagName("record")[i].getAttribute("installment");

			tCLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degCode2") != null && clientInterface == "formABPaymentView") {

			degreeCodeNewArr2[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degCode2");
			degreeTitleArr2[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			acYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");

			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("stdNo") != null && clientInterface == "formABPaymentView") {

			studentNoArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("stdNo");
			studentInitialArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNICArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			degreeCodeArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			medium1Arr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			courseFeeArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("courseFee");
			libraryFeeArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("libraryFee");
			feebatchyearArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("feebatchyear");
			paymentCompletedArr1[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("payCom");
			payCompleteDatedArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("payCompleteDate");
			payCompleteTimeArr[tCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("payCompleteTime");

			tCodeLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formABPaymentView") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null
			&& xml.getElementsByTagName("record")[i].getAttribute("degreeTitle") != null
			&& xml.getElementsByTagName("record")[i].getAttribute("departmentCode") != null
			&& clientInterface == "formABPaymentView") {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && (clientInterface == "formPrintStudentID" || clientInterface == "formPreRegStudent" || clientInterface == "formEnrollStudent")) {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			//facultyCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && (clientInterface == "formPrintStudentID" || clientInterface == "formPreRegStudent" || clientInterface == "formEnrollStudent")) {
			if (!degreeForPrintStudentID) {
				universityCodeLength = facultyCodeLength = degreeCodeLength = 0;
				degreeForPrintStudentID = true;
			}
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			//facultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");


			degreeCodeLength++;
		}



		//-----------------------------------------------------------PhD/MPhil-------------------------------------------------------------------	
		//Research ApplicantList	


		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formApplicantResearchList") {
			universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			pinArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("pin");
			educationFieldNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationFieldName");
			educationValueArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationValue");
			educationPinArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationPin");
			medium1Arr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			streamNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("streamName");
			Main_SubjectArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Main_Subject");

			applicationNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formApplicantResearchList") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formApplicantResearchList") {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");


			degreeCodeLength++;
		}




		// Research Applicant Selection

		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formApplicantResearchSelection") {
			universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			pinArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("pin");
			educationFieldNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationFieldName");
			educationValueArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationValue");
			educationPinArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("educationPin");
			streamNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("streamName");

			applicationNoLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formApplicantResearchSelection") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			userIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formApplicantResearchSelection") {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");


			degreeCodeLength++;
		}




		// Research Applicant Register


		if (xml.getElementsByTagName("record")[i].getAttribute("applicationNo") != null && clientInterface == "formSelectedResearchStudentList") {

			universityCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNICArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			mediumArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("appmedium");
			streamNameArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("streamName");

			applicationNoLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formSelectedResearchStudentList") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formSelectedResearchStudentList") {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");


			degreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formSelectedResearchStudentList") {
			registeredstudentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			registeredstudentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			registeredstudentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			registereddegreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			registereddegreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			registeredachedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			registeredmediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			registeredprogrammeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			registeredStudentArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("registered");

			studentNoLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formSelectedResearchStudentList") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			userdepartmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");

			userIdLength++;
		}


		//----------------------------29-7-2019
		if (xml.getElementsByTagName("record")[i].getAttribute("subCodeYear") != null && clientInterface == "formRepDownloadList") {

			tmpSubCodeArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subCodeYear");
			tmpSubTitleArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subTitleYear");
			tmpSemesterArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			//ex_studentMediumArr[subDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			subDownLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("finalStudentNo") != null && clientInterface == "formRepDownloadList") {

			fi_StudNoArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalStudentNo");
			fi_semArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("finalsemester");
			fi_GPAArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("repFi_finalGPA");
			fi_ResultArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("repFi_finalResult");
			//ex_studentMediumArr[fi_Length] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			fi_Length++;

		}
		// if(xml.getElementsByTagName("record")[i].getAttribute("SudentNo") != null && clientInterface == "formFinalResultViewRepeat"){


		// tmpDownStudNoArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("SudentNo");
		// tmpDownStudNameArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("StudentName");
		// academicYearArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
		// subjectNameArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");
		// subjectTitleArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subTitile");
		// subjectSemesterArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("subSem");
		// subjectGPAArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("GPA");
		// marksArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("Grade"); 
		// subjectCreditsArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("credits"); 
		// ex_studentMediumArr[MarksLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

		// MarksLength++;

		// }
		if (xml.getElementsByTagName("record")[i].getAttribute("SudentNo") != null && clientInterface == "formRepDownloadList") {

			tmpDownStudNoArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("SudentNo");
			tmpDownStudNameArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("StudentName");
			tmpDownDegCodeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			tmpDownSubCodeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectName");
			tmpDownGradeArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Grade");
			tmpDownExm1Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner1");
			tmpDownExm2Arr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Examiner2");
			tmpDownMarksArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("Marks");
			tmpsusSemArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("subSem");
			tmpsubjectGPAArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("GPA");				//sewmi
			tmpDownstudentMediumArr[tmpDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentSemMedium");

			tmpDownLength++;
		}


		//-------------------------

		// if (xml.getElementsByTagName("record")[i].getAttribute("stdProfileapplicationNo") != null && clientInterface == "formStudentProfileDeteils") {
		// 	profileapplicationNoArr[applicationNoLength] = xml.getElementsByTagName("record")[i].getAttribute("stdProfileapplicationNo");
		// 	applicationNoLength++;

		// }


		if (xml.getElementsByTagName("record")[i].getAttribute("profile_StudNo") != null && clientInterface == "formResearchStudentProfileDeteils") {
			studentNoProArr[studentNoProLength] = xml.getElementsByTagName("record")[i].getAttribute("profile_StudNo");
			applcationNoProArr[studentNoProLength] = xml.getElementsByTagName("record")[i].getAttribute("profile_ApplicationNo");
			studentNoProLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("roleId") != null && clientInterface == "formResearchStudentProfileDeteils") {
			roleIdArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			userIdArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[roleIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formResearchStudentProfileDeteils") {
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			studentEmploymentArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			mediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentDateofbirthArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentOfficeAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			studentNationalityArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			correspondenceArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			librarycodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("LibraryIdCode");


			studentNoLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("educationPin") != null && clientInterface == "formResearchStudentProfileDeteils") {
			educationFieldNameArr[educationPinLength] = xml.getElementsByTagName("record")[i].getAttribute("educationFieldName");
			educationValueArr[educationPinLength] = xml.getElementsByTagName("record")[i].getAttribute("educationValue");
			educationPinArr[educationPinLength] = xml.getElementsByTagName("record")[i].getAttribute("educationPin");

			educationPinLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("workPin") != null && clientInterface == "formResearchStudentProfileDeteils") {
			workFieldNameArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("workFieldName");
			workValueArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("workValue");
			workPinArr[workPinLength] = xml.getElementsByTagName("record")[i].getAttribute("workPin");

			workPinLength++;

		}


		//Re-Repeat --------------------------------------------------------------------------------------------------------------------------------
		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formReRepeatAdmissionForm") {

			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			mediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");

			studentNoLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("ReRep_degreeCode") != null && clientInterface == "formReRepeatAdmissionForm") {

			ReRep_studentNoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_studentNo");
			ReRepeat_startdateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRepeat_startdate");
			ReRepeat_enddateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRepeat_enddate");
			ReRepeat_examdateArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRepeat_examdate");
			ReRepeat_starttimeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRepeat_starttime");
			ReRepeat_endtimeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRepeat_endtime");
			ReRepeat_hallnoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRepeat_hallno");
			ReRepeat_timeSemArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRepeat_timeSem");
			ReRep_degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_degreeCode");
			ReRepeat_degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRepeat_degreeCode");
			ReRep_achedamicYearArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_achedamicYear");
			ReRepeat_subjectCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRepeat_subjectCode");
			ReRep_semesterArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_semester");
			rep_subjectTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("Rerep_subjectTitle");
			rep_DegreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("Rerep_DegreeTitle");
			rep_facCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("Rerep_facCode");


			degreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formDownloadReRepeatCount") {

			studentNoArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentCountArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCount");
			studentInitialArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");

			degreeCodeLength++;
		}




		if (xml.getElementsByTagName("record")[i].getAttribute("digRepCode") != null && clientInterface == "formUploadReRepeatExaminationResults") {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("digRepCode") != null) {
					degreeCodeArr.length = 0;
					degreeTitleArr.length = 0;
					resultsFacultyCodeArr.length = 0;
					resultsdepartmentCodeArr.length = 0;
					degreeCodeLength = 0;
				}
			}
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("digRepCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			resultsFacultyCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("userFacultyCode");
			resultsdepartmentCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("userReRepDepCode");

			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formUploadReRepeatExaminationResults") {
			if (i == 1) {
				if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null) {
					sub_degreeCodeArr.length = 0;
					sub_academicYearArr.length = 0;
					sub_semesterArr.length = 0;
					sub_subjectCodeArr.length = 0;
					sub_subjectTitleArr.length = 0;
					sub_statusArr.length = 0;
					sub_creditsArr.length = 0;
					sub_CodeLength = 0;
				}
			}
			sub_degreeCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			sub_academicYearArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			sub_semesterArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectSemester");
			sub_subjectCodeArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectCode");
			sub_subjectTitleArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("subjectTitle");
			sub_statusArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("status");
			sub_creditsArr[sub_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("credits");

			sub_CodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNoMarks") != null && clientInterface == "formReRepeatDownloadList") {

			ex_studentNoArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNoMarks");
			ex_studentNameArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			ex_studentMediumArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");
			//ex_studentReasonArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("reason");


			ex_CodeLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("RepSudentNoSub") != null && clientInterface == "formReRepeatDownloadList") {


			repDownStudNoArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("RepSudentNoSub");
			repDownStudNameArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_StudentName");
			repDownGradeArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_Grade");
			repDownExm1Arr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_Examiner1");
			repDownExm2Arr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_Examiner2");
			repDownMarksArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("ReRep_Marks");
			ex_studentMediumArr[repDownLength] = xml.getElementsByTagName("record")[i].getAttribute("studentMedium");

			repDownLength++;
		}






		// Re-Repeat-------------------------------------------------------------------------------------------------------------------


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formSSStudentList") {
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			medium1Arr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			studentLibraryIdCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("LibraryIdCode");

			durationArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");
			coursecommenceArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("coursecommence");
			commenceacademicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("batchYear");



			studentNoLength++;

		}



		if (xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryCode") != null && clientInterface == "formIncomeCategoryDetails") {
			IncomeCategoryCodeArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryCode");
			IncomeCategoryTitleArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryTitle");


			IncomeCategoryCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formIncomeCategoryDetails") {
			degreeCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			IncomeSourceCodeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeSourceCode");

			degreeCodeLength++;
		}


		////2022-02-11-----16Digit -----------------------------------Clerk View-------------------------------------------------------------------

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "form16DigitPaidList") {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");


			degreeCodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "form16DigitPaidList") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");

			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formWifiCreation") {
			if (!wifiListStudent) {
				studentNoLength = 0;
				studentNameTitleArr.length = 0;
				payedStudentNoArr.length = 0;
				payedAmountArr.length = 0;
				payedResponseProgressArr.length = 0;
				wifiNameArr.length = 0;
				studentNameArr.length = 0;
				studentNoArr.length = 0;
				studentNICArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				studentRegisteredDateArr.length = 0;
				studentDurationArr.length = 0;
				wifiListStudent = true;
			}
			studentNameTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			payedStudentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_studentNo");
			payedAmountArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_amount");
			payedResponseProgressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Response_Progress");
			wifiNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("wifiName");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			studentRegisteredDateArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("RegisteredDate");
			studentDurationArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("duration");
			studentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "formWifiCreation") {
			if (!wifiListDegrees) {
				degreeCodeLength = 0;
				departmentCodeappArr.length = 0;
				degreeCodappeArr.length = 0;
				programmeCodeappeArr.length = 0;
				degreeTitle1Arr.length = 0;
				wifiListDegrees = true;
			}
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			degreeCodeLength++;
		}

		// //Return	
		// if(xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "form16DigitPaidList"){
		// userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
		// userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
		// roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
		// roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
		// userdepartmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");	
		// userIdLength++;
		// }


		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "form16DigitPaidList") {

			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentPaidAmountArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_amount");
			studentOfficeAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			mediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			librarycodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("LibraryIdCode");
			studentNoLength++;

		}






		//2023-10-23 New Payment View NIROSH

		if (xml.getElementsByTagName("record")[i].getAttribute("installmentNo") != null && clientInterface == "formABPaymentViewNew") {

			if (!InstallmentDetailsForNewPaymentView) {
				installmentNoLength = 0;
				IncomeCategoryCodeArr.length = 0;
				degreeCodeForInstArr.length = 0;
				academicYrForInstArr.length = 0;
				instNoForInstArr.length = 0;
				amountForInstArr.length = 0;
				deadlineForInstArr.length = 0;
				degreeTitleForInstArr.length = 0;
				courseFeeForInstArr.length = 0;
				libraryFeeForInstArr.length = 0;
				InstallmentDetailsForNewPaymentView = true;
			}
			degreeCodeForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			academicYrForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("academicYear");
			instNoForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("installmentNo");
			amountForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("amount");
			deadlineForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentdeadline");
			degreeTitleForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			courseFeeForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("icourseFee");
			libraryFeeForInstArr[installmentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("ilibraryFee");
			installmentNoLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "formABPaymentViewNew") {

			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null
			&& xml.getElementsByTagName("record")[i].getAttribute("degreeTitle") != null
			&& xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode") != null
			&& clientInterface == "formABPaymentViewNew") {
			if (!degreeForNewPaymentView) {
				degreeCodeLength = 0;
				departmentCodeappArr.length = 0;
				degreeCodappeArr.length = 0;
				programmeCodeappeArr.length = 0;
				degreeTitle1Arr.length = 0;
				degreeForNewPaymentView = true;
			}
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryCode") != null && clientInterface == "formABPaymentViewNew") {
			if (!IncomeCategoryCodeForNewPaymentView) {
				IncomeCategoryCodeLength = 0;
				IncomeCategoryCodeArr.length = 0;
				IncomeCategoryCodeArr.length = 0;
				IncomeCategoryTitleArr.length = 0;
				IncomeSourceCodeArr.length = 0;
				achedamicYearIncomeArr.length = 0;
				IncomeCategoryValueArr.length = 0;
				CurrencyArr.length = 0;
				IncomedegreeCodeArr.length = 0;
				IncomedegreeTitleArr.length = 0;
				IncomeCategoryCodeForNewPaymentView = true;
			}
			IncomeCategoryCodeArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryCode");
			IncomeCategoryTitleArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryTitle");
			IncomeSourceCodeArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeSourceCode");
			achedamicYearIncomeArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			IncomeCategoryValueArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryValue");
			CurrencyArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("Currency");
			IncomedegreeCodeArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			IncomedegreeTitleArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			IncomeCategoryCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "formABPaymentViewNew") {

			if (!formABPaymentViewNew) {
				studentNoLength = 0;
				universityCodeArr.length = 0;
				universityTitleArr.length = 0;
				facultyCodeArr.length = 0;
				facultyTitleArr.length = 0;
				programmeTypeCodeArr.length = 0;
				programmeTypeTitleArr.length = 0;
				degreeCodeArr.length = 0;
				degreeTitleArr.length = 0;
				studentNoArr.length = 0;
				studentNICArr.length = 0;
				applicationNoArr.length = 0;
				studentNameArr.length = 0;
				studentPersonalTitleArr.length = 0;
				studentInitialArr.length = 0;
				studentDateofbirthArr.length = 0;
				studentNationalityArr.length = 0;
				studentCitizenshipArr.length = 0;
				studentEmploymentArr.length = 0;
				studentPermanentAddressArr.length = 0;
				studentOfficeAddressArr.length = 0;
				correspondenceArr.length = 0;
				studentContactLanArr.length = 0;
				studentContactMobileArr.length = 0;
				studentContactEmailArr.length = 0;
				achedamicYearArr.length = 0;
				mediumArr.length = 0;
				tempPayAmount.length = 0;
				librarycodeArr.length = 0;
				formABPaymentViewNew = true;
			}

			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			mediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");
			tempPayAmount[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("amount");
			librarycodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("LibraryIdCode");

			// Pay_RefNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_RefNo");
			// Pay_studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_studentNo");
			// Pay_sourceCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_sourceCode");
			// Pay_CategoryCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_CategoryCode");
			// Pay_amountArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_amount");
			// Pay_Time_StampArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_Time_Stamp");
			// Response_ProgressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Response_Progress");
			// Response_Progress_TimeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Response_Progress_Time");
			// Pay_MethodArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_Method");



			studentNoLength++;

		}





		////2022-02-12-----16Digit -----------------------------------AB View-------------------------------------------------------------------

		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && clientInterface == "form16DigitABPaymentView") {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && clientInterface == "form16DigitABPaymentView") {

			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			degreeCodeLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryCode") != null && clientInterface == "form16DigitABPaymentView") {
			IncomeCategoryCodeArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryCode");
			IncomeCategoryTitleArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryTitle");
			IncomeSourceCodeArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeSourceCode");
			achedamicYearIncomeArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			IncomeCategoryValueArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("IncomeCategoryValue");
			CurrencyArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("Currency");
			IncomedegreeCodeArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			IncomedegreeTitleArr[IncomeCategoryCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			IncomeCategoryCodeLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("studentNo") != null && clientInterface == "form16DigitABPaymentView") {

			universityCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityCode");
			universityTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("universityTitle");
			facultyCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			facultyTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyTitle");
			programmeTypeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeCode");
			programmeTypeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeTypeTitle");
			degreeCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			degreeTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNo");
			studentNICArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNIC");
			applicationNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("applicationNo");
			studentNameArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentName");
			studentPersonalTitleArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPersonalTitle");
			studentInitialArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentInitial");
			studentDateofbirthArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentDateofbirth");
			studentNationalityArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentNationality");
			studentCitizenshipArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentCitizenship");
			studentEmploymentArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentEmployment");
			studentPermanentAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentPermanentAddress");
			studentOfficeAddressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentOfficeAddress");
			correspondenceArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("correspondence");
			studentContactLanArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactLan");
			studentContactMobileArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactMobile");
			studentContactEmailArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("studentContactEmail");
			achedamicYearArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("achedamicYear");
			mediumArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("medium");

			Pay_RefNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_RefNo");
			Pay_studentNoArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_studentNo");
			Pay_sourceCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_sourceCode");
			Pay_CategoryCodeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_CategoryCode");
			Pay_amountArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_amount");
			Pay_Time_StampArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_Time_Stamp");
			Response_ProgressArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Response_Progress");
			Response_Progress_TimeArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Response_Progress_Time");
			Pay_MethodArr[studentNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_Method");



			studentNoLength++;

		}


		if (xml.getElementsByTagName("record")[i].getAttribute("Pay_RefNo") != null && clientInterface == "form16DigitABPaymentView") {

			Pay_RefNoArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_RefNo");
			Pay_studentNoArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_studentNo");
			Pay_sourceCodeArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_sourceCode");
			Pay_CategoryCodeArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_CategoryCode");
			Pay_amountArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_amount");
			Pay_Time_StampArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_Time_Stamp");
			Response_ProgressArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Response_Progress");
			Response_Progress_TimeArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Response_Progress_Time");
			Pay_MethodArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("Pay_Method");
			paydegreeCodeArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("paydegreeCode");
			payIncomeSourceCodeArr[RefNoLength] = xml.getElementsByTagName("record")[i].getAttribute("PayIncomeSourceCode");
			RefNoLength++;

		}


		// Nirosh Exam Applied List 2023-10-26
		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && (clientInterface == "formExamAppliedListForGetFinalResult" || clientInterface == "formExamAppliedList" || clientInterface == "formExamAppliedListForStiker" || clientInterface == "formExamAppliedListForRawMarkSheet" || clientInterface == "formExamAppliedListForStudentsResultUpdate")) {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			userdepartmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			userIdLength++;
		}



		if (xml.getElementsByTagName("record")[i].getAttribute("userId") != null && (clientInterface == "formExamAppliedList" || clientInterface == "formExamAppliedListForStiker" || clientInterface == "formExamAppliedListForRawMarkSheet" || clientInterface == "formExamAppliedListForStudentsResultUpdate" || clientInterface == "formExamAppliedListForGetFinalResult")) {
			userIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userId");
			userNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("userName");
			roleIdArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleId");
			roleNameArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("roleName");
			departmentCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			programmeCodeArr[userIdLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			userIdLength++;
		}

		if (xml.getElementsByTagName("record")[i].getAttribute("degreeCode") != null && (clientInterface == "formExamAppliedList" || clientInterface == "formExamAppliedListForStiker" || clientInterface == "formExamAppliedListForRawMarkSheet" || clientInterface == "formExamAppliedListForStudentsResultUpdate" || clientInterface == "formExamAppliedListForGetFinalResult")) {
			departmentCodeappArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("departmentCode");
			degreeCodappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeCode");
			programmeCodeappeArr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("programmeCode");
			degreeTitle1Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("degreeTitle");
			facultyCode3Arr[degreeCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("facultyCode");
			degreeCodeLength++;
		}




		if (xml.getElementsByTagName("record")[i].getAttribute("examAppliedSubjects") != null && (clientInterface == "formExamAppliedListSubject" || clientInterface == "formExamAppliedListSubjectForRawMarkSheet" || clientInterface == "formExamAppliedListSubjectForStiker" || clientInterface == "formExamAppliedListSubjectForStudentsResultUpdate")) {
			if (!formExamAppliedListSubjects) {
				subjectCodeLength = 0;
				subjectCodeArr.length = 0;
				subjectTitleArr.length = 0;
				subjectdegreeCodeArr.length = 0;
				subjectStatusArr.length = 0;
				subjectSemesterArr.length = 0;
				subjectAchedamicYearArr.length = 0;
				subjectCreditsArr.length = 0;
				formExamAppliedListSubjects = true;
			}
			subjectCodeArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ssubjectCode");
			subjectTitleArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ssubjectTitle");
			subjectdegreeCodeArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode");
			subjectStatusArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sstatus");
			subjectSemesterArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ssemester");
			subjectAchedamicYearArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sachedamicYear");
			subjectCreditsArr[subjectCodeLength] = xml.getElementsByTagName("record")[i].getAttribute("scredits");
			subjectCodeLength++;

		}

		if (xml.getElementsByTagName("record")[i].getAttribute("examAppliedStudents") != null && (clientInterface == "formExamAppliedListStudent" || clientInterface == "formExamAppliedListStudentForStiker" || clientInterface == "formExamAppliedListStudentForRawMarkSheet")) {
			ex_degreeCodeArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode");
			ex_studentNoArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sstudentNo");
			ex_studentNameArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sstudentName");
			ex_studentMediumArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("smedium");
			ex_semesterArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ssemester");
			ex_attemptArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sattempt");
			ex_subCodeArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ssubjectCode");
			ex_academicYearArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sachedamicYear");
			ex_appliedDateArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sappliedDate");
			ex_CodeLength++;
		}


		if (xml.getElementsByTagName("record")[i].getAttribute("examAppliedStudents") != null && (clientInterface == "formExamAppliedListForStudentsResultUpdate" || clientInterface == "formExamAppliedListForGetFinalResult")) {
			ex_degreeCodeArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sdegreeCode");
			ex_studentNoArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sstudentNo");
			ex_studentNameArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sstudentName");
			ex_studentMediumArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("smedium");
			ex_semesterArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ssemester");
			ex_attemptArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sattempt");
			ex_subCodeArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("ssubjectCode");
			ex_academicYearArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sachedamicYear");
			ex_appliedDateArr[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sappliedDate");
			ex_grade[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sGrade");
			ex_examiner1[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sExaminer1");
			ex_examiner2[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sExaminer2");
			ex_latesubmission[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("slatesubmission");
			ex_effectivedatethesis[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("seffective_date");
			ex_paidAmount[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("payedammount");

			ex_mark[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sMarks");
			// ex_status[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("beforeStatus");
			ex_cstatus[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sStatus");
			ex_cstatusnotes[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sNotes");
			ex_holdstatus[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("holdstatus");
			// ex_drApporve[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("drApprove");
			// ex_paymentApprove[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentApprove");
			ex_examReason[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sexamReason");
			ex_examReasonDes[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sreason");
			ex_examsisMedical[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sisMedical");
			ex_examsmedicalApprove[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("smedicalApprove");
			ex_releasedDate[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sReleasedDate");
			ex_CodeLength++;
		}




		// End Exam Applied List





	}

	if (dataRep['roleName'] != "") {
		if (dataRep['userName'] != "") {
			document.getElementById('userDetails').innerHTML = dataRep['userName'] + " (" + dataRep['roleName'] + ")";
		} else {
			document.getElementById('userDetails').innerHTML = dataRep['roleName'];
		}
	} else {
		if (dataRep['userName'] != "") {
			document.getElementById('userDetails').innerHTML = dataRep['userName'];
		}
	}
	$('#loading-spinner').hide();

}
function showMenu(dsp, data1 = "", data2 = "", data3 = "", data4 = "") {

	if (dataRep["roleName"] == "Administrator" && dsp == "main") {
		dsp = "formAdministratorMenu";
	} else if ((dataRep["roleName"] == "Coordinator"
		|| dataRep['roleName'] == 'Technical Coordinator' || dataRep["roleName"] == "Assistant Manager - Finance") && dsp == "main") {
		dsp = "formCoordinatorMenu";
	} else if (dataRep["roleName"] == "Program Assistant/Clerk" && dsp == "main") {
		dsp = "formProgramClerkMenu";
	} else if (dataRep["roleName"] == "Subject Clerk" && dsp == "main") {
		dsp = "formClerkMenu";
	} else if (dataRep["roleName"] == "Dean" && dsp == "main") {
		dsp = "formDeanMenu";
	} else if ((dataRep["roleName"] == "Head of the Department" || dataRep["roleName"] == "Senior Assistant Registrar" || dataRep["roleName"] == "Assistant Registrar") && dsp == "main") {
		dsp = "formHeadMenu";
	} else if (dataRep["roleName"] == "Assistant Registrar" && dsp == "main") {
		dsp = "formAssistantRegistrarMenu";
	} else if (dataRep["roleName"] == "ICT Center" && dsp == "main") {
		dsp = "formICTMenu";
	} else if (dataRep["roleName"] == "Examination Department" && dsp == "main") {
		dsp = "formExamMenu";
	} else if (dataRep["roleName"] == "Assistant Bursar" && dsp == "main") {
		dsp = "formAssistantBursarMenu";
	} else if (dataRep["roleName"] == "Senior Assistant Librarian" && dsp == "main") {
		dsp = "formLibraryMenu";
	} else if (dataRep["roleName"] == "FGS Deputy Registrar" && dsp == "main") { //Examination Staff
		dsp = "formClerkMenu";
	}
	else if (dataRep["roleName"] == "SAR-GWAI" && dsp == "main") { //Examination Staff
		dsp = "formGWAIClerkMenu";
	}


	//formThesisSubmitMenu
	str = menuMain(dsp);
	if (str != "") {
		document.getElementById("menuArea").innerHTML = str;
		document.getElementById("msgArea").innerHTML = "";
	}


	str = formAdministratorMenu(dsp);
	str += formCoordinatorMenu(dsp);
	// str += formClerkMenu(dsp);

	str += formICTMenu(dsp); //12/30/2016
	// str += formExamMenu(dsp);

	str += formUserActivity(dsp);
	str += formClerkDocumentMenu(dsp);
	str += formAddUniversity(dsp);
	str += formDegree(dsp);
	str += formAddProgrammeType(dsp);
	str += formFaculty(dsp);
	str += formDepartment(dsp);
	str += formStudentRegistration(dsp);
	str += formLectureRegistration(dsp);
	str += formViewUniversity(dsp);
	str += formViewFaculty(dsp);
	str += formViewDegree(dsp);
	str += formViewDepartment(dsp);
	str += formViewProgrammeType(dsp);
	str += formCourseUnit(dsp);
	str += formViewCourseUnit(dsp);
	//str += formLecturerDeteilsRequest(dsp);
	str += formStudentDeteilsRequest(dsp);
	//str += formViewStudent(dsp);
	str += formAddNewCourseUnit(dsp);
	str += formViewNewCourseUnit(dsp);
	str += formViewPayments(dsp);
	str += formBankDetails(dsp);
	str += formBudgetSheet(dsp);
	str += formBudgetDetails(dsp);
	str += formAdditem(dsp);
	str += formAddNewCategory(dsp);
	str += formStudentPaymentDetails(dsp);
	str += formSelectedStudentRegistration(dsp);
	str += formStudentMenu(dsp);
	str += formLecturerMenu(dsp);
	str += formViewSubCategory(dsp);
	str += formAddSubcategory(dsp);
	str += formViewNewCategory(dsp);
	str += formReports(dsp);
	//str += formBudgetReport(dsp);
	str += formViewFirstInstallementStudent(dsp);
	str += formStudentReport(dsp);
	str += formStudentReportDetails(dsp);
	str += formUser(dsp);
	str += formViewUser(dsp);
	str += formReviseBudgetSheet(dsp);
	str += formVoucherDiploma(dsp);
	str += formRegistrationLetter(dsp);
	//str += formStudentAdditionalDetails(dsp);
	str += formDegreeDetails(dsp);
	str += formStudentExtendedTime(dsp);
	str += formStudentOtherPaymentDetails(dsp);
	str += formStudentExtendedVoucher(dsp);
	str += formRegisteredStudentList(dsp);
	str += formPaymentList(dsp);
	//str += formViewDegreeDetails(dsp);
	str += formAddPayment(dsp);
	str += formViewPayment(dsp);

	str += formApplicationForm(dsp);
	str += formApplicationFormTwo(dsp);
	str += formApplicationFormThree(dsp);
	str += formApplicationFormFourth(dsp);
	str += formApplicationFormFive(dsp);
	str += formEligibleTestForm(dsp);
	str += formAddCriteria(dsp);
	str += formViewCriteria(dsp);
	str += formFinalApplication(dsp);
	str += exportCSVForm(dsp);
	str += ApplicatonFeeVoucher(dsp);

	str += formAddRole(dsp);
	str += formEventManagment(dsp);
	str += formViewEvent(dsp);

	str += formStudentProfileMenu(dsp);
	str += formStudentProfileDeteils(dsp);
	str += setDataforStudentProfile(dsp);
	str += formApplicantList(dsp);
	str += formPendingApplicantList(dsp);
	
	str += formAplicantProfile(dsp);

	str += formNewSelectedStudentList(dsp);
	str += formSelectedStudentList(dsp);
	str += formThesisNotification(dsp);

	//addes2015/05/11

	str += formAppointExaminers(dsp);
	str += formThesisEvaluation(dsp);
	str += formPannelBoard(dsp);
	str += formAppointExaminersDeptNomination(dsp);
	str += formAppointExaminersMenu(dsp);
	str += formAppointExaminersBOSRejectModification(dsp);
	str += formExaminerBOSRecommendation(dsp);
	str += formRequestForFGSBoardRecommendation(dsp);
	str += formRequestForSenateApproval(dsp);
	str += formHandingOverThesisToFGSByStudent(dsp);
	str += formSendingThesisToExaminers(dsp);
	str += formAppointExaminersFGSRejectModification(dsp);
	str += formAppointExaminersSenateRejectModification(dsp);
	str += formReceivingEvaluationReportFromExaminers(dsp);
	str += formVivaBoard(dsp);
	str += formThesisSubmitMenu(dsp);
	str += formViva(dsp);
	str += formReceivingNotificationForThesisSubmission(dsp);
	str += formThesisSubmit(dsp);
	str += formSendingThesisToExamBranch(dsp);
	str += formExaminersDetailsView(dsp);
	str += formViewReminderDetails(dsp);
	str += formViewThesisNotification(dsp);
	str += formUpdateExaminerBoard(dsp);
	str += formExaminerFGSUpdate(dsp);
	str += formExaminerUpdateSenate(dsp);
	str += formAddOldStudent(dsp);
	str += formAddOldStudentFormTwo(dsp);
	str += formAddThesisTitle(dsp);
	str += formBoardReccomendation(dsp);
	str += formTransactionsDetailsView(dsp);
	//transactionType strat
	str += formTransactionType(dsp);
	//transactionType end
	str += formReprintApplicantion(dsp);
	//document starts
	str += formDocument(dsp);
	str += formDataItem(dsp);
	str += formDecisionMakingPoint(dsp);
	str += formDocumentItem(dsp);
	str += formDocumentMenu(dsp);
	str += formDocDecisionTransaction(dsp);
	str += formDocDecisionTransactionTwo(dsp);
	str += formAddDocumentData(dsp);
	str += formListDocument(dsp);
	str += formEditApplicantDetails(dsp);
	str += formPrintStudentID(dsp);
	str += formEnrollStudent(dsp);

	str += formPreRegStudent(dsp);
	str += formEditStudentDetails(dsp);
	str += formNoteAndNotification(dsp);
	str += formLetterTemplate(dsp);
	str += formBulkPayment(dsp);
	str += formForeignReport(dsp);
	str += formDegreeMediumReport(dsp);
	str += formTransferRules(dsp);
	str += formStudentTransfer(dsp);
	str += formTransferMenu(dsp);
	str += formCreateStudentAccounts(dsp);
	//document end 	

	//Thiwanka
	str += formstudentReport(dsp);
	str += formTotalStudentReport(dsp);
	str += formAllReport(dsp);
	// str += formDeanMenu(dsp);
	//sewwandi
	str += formHeadMenu(dsp);

	//added 23.8.2016...................  
	str += formApplicantSelection(dsp);//chinthaka
	str += formInterviewList(dsp);
	str += formStudentQulificationList(dsp);	
	str += formInterViewPanelList(dsp);
	str += formInterViewPanelSummery(dsp);
	str += formDownloadListForFBapprove(dsp);
	str += formApplicantsForInterview(dsp);
	//..........................................   

	//added 1.9.2016..........
	str += formSelectedApplicantList(dsp);
	//.....................................
	str += formAddMessage(dsp);
	str += formAddMessageNewMessage(dsp);

	str += formAssistantRegistrarMenu(dsp);
	//sajani
	str += formExamResults(dsp);
	str += formTransferApplicant(dsp);

	str += formAddResults(dsp);
	str += formAddSubject(dsp);
	str += formViewSubject(dsp);

	str += formApplication(dsp);
	str += formExamApplication(dsp);
	str += formApplicationRepete(dsp);

	str += formUploadExaminationResults(dsp);//sew

	str += formAdmissionCardForm(dsp);
	str += formPaperCountForm(dsp);

	str += formUploadExamResultsDownTemp(dsp);

	str += formFinalResultConfirm(dsp);
	str += formFinalResultView(dsp);
	str += formFinalResultViewSem(dsp);
	str += formFinalResultsCriteriaAdd(dsp);

	str += formAssistantBursarMenu(dsp);

	str += formCertificatePrintForm(dsp);

	str += formAdmissionMenu(dsp);
	str += formRepeatAdmissionCardForm(dsp);
	str += formDownloadRepeatCount(dsp);

	str += formUploadResultsMenu(dsp);
	str += formUploadRepExaminationResults(dsp);
	str += formRepDownloadList(dsp);

	str += formABPaymentView(dsp);
	// str += formLibraryMenu(dsp);

	//Phd/MPhil
	str += formApplicantResearchList(dsp);
	str += formApplicantResearchSelection(dsp);
	str += formSelectedResearchStudentList(dsp);
	// str += formEditResearchApplicantData(dsp);
	str += formResearchStudentProfileDeteils(dsp);



	//Rerepeat


	str += formReRepeatAdmissionForm(dsp);
	str += formDownloadReRepeatCount(dsp);

	str += formUploadReRepeatExaminationResults(dsp);
	str += formReRepeatDownloadList(dsp);

	str += formGWAIClerkMenu(dsp);
	str += formSSStudentList(dsp);

	str += formIncomeCategoryDetails(dsp);



	//2022-02-11-----16Digit

	str += form16DigitPaidList(dsp);

	//2022-02-12-----16Digit
	str += form16DigitABPaymentView(dsp);

	//2023-09-22-----WifiCration Nirosh
	str += formWifiCreation(dsp);

	//2023-10-23-----New Payment View Nirosh
	str += form16DigitABPaymentViewNew(dsp);
	str += formExamAppliedList(dsp);
	str += formExamAppliedListForStiker(dsp);
	str += formExamAppliedListForRawMarkSheet(dsp);

	str += formResultUploadNew(dsp);
	str += formResultUploadNewFinal(dsp);


	str += formStudentViolation(dsp);
	str += formStudentViolationForm(dsp);
	str += formStudentMedicalApprove(dsp);

	panelId = 0, panelName = "", panelDate = "", panelTime = ""

	if (dsp == "appointPanelEditForm") {
		str += formAppointPanelForm(dsp, data1, data2, data3, data4);

	} else {
		str += formAppointPanelForm(dsp);
	}

	str += formInterViewPanelAddDecision(dsp);


	str += formReportStPayedCount(dsp);
	str += formReportStRegisterCount(dsp);
	str += formReportStRegisterDateCount(dsp);
	str += formReportStForeignCount(dsp);
	str += form1stinstallmentpaidReportStDetails(dsp);
	str += formreportHoldAndNotReleased(dsp);
	str += formSendSMSBulk(dsp);
	str += formDownloadRequirdFile(dsp);
	str += formAddViewDepartment(dsp);
	str += formAddViewUser(dsp);
	str += formEmailLog(dsp);
	str += formSMSLog(dsp);
	str += formAddViewProgrameType(dsp);
	str += formAddViewDegreeProgramme(dsp);
	str += formAddViewBatch(dsp);
	str += formAddViewTemplates(dsp);
	str += formAddViewSubject(dsp);
	str += formAddViewTimeTable(dsp);


	// reports
	str += formCordinatoDetailsrReport(dsp);
	str += formPaymentLogReport(dsp);



	str += "<br><br><center><b><font size='4'>";

	if (msg.length != 0 && msg.indexOf("not been") != -1) {
		// str += '<img src="img/wrong3.png" align="middle">&nbsp;&nbsp;';
		// str += '<span class="MsgText">' + msg;
		// str += '</span>';
		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: msg,
			showConfirmButton: true,
		});
	}

	if (msg.length != 0 && (msg.indexOf("not been") == -1) && msg.indexOf("been") != -1) {
		// str += '<img src="img/right.png" align="middle">&nbsp;&nbsp;'
		// str += '<span class="MsgText">' + msg;
		// str += '</span>';
		successCount++;
		Swal.fire({
			icon: 'success',
			title: 'Success',
			text: msg,
			showConfirmButton: true,
		});
	}

	str += "</font></b></center>";
	msg = "";
	document.getElementById("formArea").innerHTML = str;
	setDatatableAll(dsp);



	return;

}

function setDatatableAll(dsp) {
	// console.log(dsp)
	if (dsp == "formApplicantList") {

		DataTableForApplicantList();
		setDegrees();
		if (dataRep["selectedDegreeName"] != "") {
			setBatches(dataRep["selectedDegreeName"], dataRep["achedamicYear"]);
		}


	}

	if (dsp == "formPendingApplicantList") {

		DataTableForPendingApplicantList();
		setDegrees();
		console.log("fda");
		if (dataRep["selectedDegreeName"] != "") {
			setBatches(dataRep["selectedDegreeName"], dataRep["achedamicYear"]);
		}


	}

	

	if (dsp == "formBulkPayment") {

		DataTableForformBulkPayment();
		setDegrees();

	}


	if (dsp == "formInterviewList" || dsp == "formInterviewList2" || dsp == "formInterviewList3" || dsp == "formInterviewList4") {
		ViewListInterview();
		DataTableForInterviewApplicationListTable();
	}

	

	if (dsp == "formStudentQulificationList" || dsp == "formStudentQulificationList2" || dsp == "formStudentQulificationList3" || dsp == "formStudentQulificationList4") {
		ViewListInterviewStudentQulification();
		DataTableForInterviewApplicationListTable();
	}

	if (dsp == "formApplicantSelection") {
		DataTableForApplicantSelection();
		setDegrees();

	}
	if (dsp == "formSelectedApplicantList") {
		DataTableForSelectedApplicantTable();
		setDegrees();
	}

	if (dsp == "formUploadExaminationResults") {
		DataTableForSelectedApplicantTable();
		setDegrees();
	}



	if (dsp == "formPreRegStudent") {
		DataTableForPreRegisterdStudentList();
		setDegrees();
	}

	if (dsp == "formAdmissionCardForm") {
		initializedPrintAdmssionDataTable();
		setDegrees();
	}

	if (dsp == "formPaperCountForm") {
		initializedPaperCountFormDataTable();
		setDegrees();
	}



	if (dsp == "formExamAppliedList" || dsp == "formExamAppliedListSubject" || dsp == "formExamAppliedListStudent") {
		DataTableForExamAppliedList();
		setDegrees();
	}

	if (dsp == "formExamAppliedListForStiker" || dsp == "formExamAppliedListSubjectForStiker" || dsp == "formExamAppliedListStudentForStiker") {
		DataTableForExamAppliedListForStiker();
		setDegrees();
	}

	if (dsp == "formExamAppliedListForRawMarkSheet" || dsp == "formExamAppliedListSubjectForRawMarkSheet" || dsp == "formExamAppliedListStudentForRawMarkSheet") {
		DataTableForExamAppliedListForRawMarkSheet();
		setDegrees();
	}

	if (dsp == "formInterviewList" || dsp == "formInterviewList2" || dsp == "formInterviewList3" || dsp == "formInterviewList4") {
		DataTableForInterviewApplicationListTable();
		setDegrees();
	}

	if (dsp == "formStudentQulificationList" || dsp == "formStudentQulificationList2" || dsp == "formStudentQulificationList3" || dsp == "formStudentQulificationList4") {
		DataTableForInterviewApplicationListTable();
		setDegrees();
	}

	if (dsp == "formReprintApplicantionData") {
		ReprintApplication();
	}
	if (dsp == "formSelectedStudentList") {
		DataTableForRegisterStudentsClerk();
	}

	if (dsp == "formPrintStudentID" || dsp == "formBulkTransterStudent") {
		if (dsp == "formBulkTransterStudent") {
			DataTableForRegisterdStudentList(2);
			setDegrees();
		} else {
			DataTableForRegisterdStudentList(1);
			setDegrees();
		}

	}

	if (dsp == "formEnrollStudent") {
		DataTableForRegisterdStudentList(3);
		setDegrees();
	}

	// if (dsp == "formLetterTemplate") {
	// 	DataTableForPrintLetterApplicant();
	// }
	if (dsp == "formWifiCreation") {
		DataTableForWIFIStudent();
		setDegrees();
	}
	if (dsp == "formABPaymentViewNew") {
		DataTableForStudentPayment();
		setDegrees();
	}

	if (dsp == "studentViolaion") {
		DataTableExamViolation();
		setDegrees();
	}


	if (dsp == "medicalstudentlist") {
		DataTableExamMedicalApprove();
		setDegrees();
	}

	if (dsp == "formAdmissionCardForm") {
		initializedPrintAdmssionDataTable();
	}

	if (dsp == "formPaperCountForm") {
		initializedPaperCountFormDataTable();
	}


	// if (dsp == "formExamAppliedListStudent") {
	// 	DataTableForExamAppliedList();
	// }

	if (dsp == "formExamAppliedListForStudentsResultUpdate" || dsp == "formExamAppliedListSubjectForStudentsResultUpdate" || dsp == "formExamAppliedListForStudentsResultUpdate") {
		DataTableForExamAppliedListResultUpload();
		setDegrees();
	}

	if (dsp == "formExamAppliedListForGetFinalResult") {
		DataTableForExamAppliedListResultUploadFinal();
		setDegrees();
	}

	if (dsp == "formSendSMSBulk") {
		DataTableForSendSMSBulk();
		setDegrees();
	}

}



function generateNumberOptions(from, to, length, selectedValue) {

	var str = "";

	for (i = from; i <= to; i++) {

		if (i == selectedValue) {
			str += "<option selected>";
		} else {
			str += "<option>";
		}

		if (i.toString().length < length) {
			for (j = 1; j < length; j++) {
				str += "0";
			}
		}
		str += i;
		str += "</option>";
	}

	return str;
}
//edited by sewwandi


/***********************functions*********************/

function closeText() {
	//document.getElementsByName('p_idNo').value = "HIN00001";
	//formNursemenu//showMenu("formDemograpicData");
	//dataRep['p_idNo'] = "HIN00001";
	fieldDisabled = "disabled";
}

function scrollTreatment(down) {
	document.getElementById(down).scrollIntoView();
	window.scrollBy(0, -40);
}
/************************/

/*************************  Form definition area starts here *****************************************/

function displayKey(key) {

	var index;
	var specimenIndex = keyIndex;


	if (key == 'institute' || key == 'unit' || key == 'department' || key == 'test') {

		index = keyIndex;
	} else {
		index = keyIndexSub;
	}

	instituteLastIndex = instituteTitleArr.lastIndexOf(instituteTitleArr[index]);
	instituteIndex = instituteTitleArr.indexOf(instituteTitleArr[index]);
	unitLastIndex = unitTitleArr.lastIndexOf(unitTitleArr[index], instituteLastIndex);
	unitIndex = unitTitleArr.indexOf(unitTitleArr[index], instituteIndex);
	departmentLastIndex = departmentTitleArr.lastIndexOf(departmentTitleArr[index], unitLastIndex);
	departmentIndex = departmentTitleArr.indexOf(departmentTitleArr[index], unitIndex);
	testLastIndex = testTitleArr.lastIndexOf(testTitleArr[index], departmentLastIndex);
	testIndex = testTitleArr.indexOf(testTitleArr[index], departmentIndex);

	if (key == 'institute' || key == 'instituteSub') {

		if ((instituteLastIndex + 1) >= instituteCodeLength) {
			index = 0;
		} else {
			index = instituteLastIndex + 1;
		}


	} else if (key == 'unit' || key == 'unitSub') {

		if ((instituteLastIndex - instituteIndex) >= (unitLastIndex - unitIndex)) {

			if ((unitLastIndex + 1) > instituteLastIndex) {

				index = instituteIndex;

			} else {

				index = unitLastIndex + 1;

			}
		}

	} else if (key == 'department' || key == 'departmentSub') {

		if ((unitLastIndex - unitIndex) >= (departmentLastIndex - departmentIndex)) {

			if ((departmentLastIndex + 1) > unitLastIndex) {

				index = unitIndex;

			} else {

				index = departmentLastIndex + 1;

			}
		}

	} else if (key == 'test' || key == 'testSub') {

		if ((departmentLastIndex - departmentIndex) >= (testLastIndex - testIndex)) {

			if ((testLastIndex + 1) > departmentLastIndex) {

				index = departmentIndex;


			} else {

				index = testLastIndex + 1;

			}
		}

	}

	if (key == 'institute' || key == 'unit' || key == 'department' || key == 'test') {
		keyIndex = index;
	} else if (key != 'subTestCode') {
		keyIndexSub = index;
	} else {
		keyIndex++;
		if (keyIndex >= subTestCodeArr.length) {
			keyIndex = 0;
		}
	}

	if (key == 'specimen') {
		specimenIndex++;
		if (specimenIndex >= instituteCodeArr.length) {
			keyIndex = keyIndexSub = 1;
		} else {
			keyIndex = keyIndexSub = specimenIndex;

		}
	}

	document.getElementById('instituteDiv').innerHTML = instituteTitleArr[keyIndex];
	document.getElementById('unitDiv').innerHTML = unitTitleArr[keyIndex];
	document.getElementById('departmentDiv').innerHTML = departmentTitleArr[keyIndex];
	document.getElementById('testDiv').innerHTML = testTitleArr[keyIndex];

	if (key == 'subTestCode' || key == 'specimen') {

		document.getElementById('instituteSubDiv').innerHTML = instituteTitleSubArr[keyIndex];
		document.getElementById('unitSubDiv').innerHTML = unitTitleSubArr[keyIndex];
		document.getElementById('departmentSubDiv').innerHTML = departmentTitleSubArr[keyIndex];
		document.getElementById('testSubDiv').innerHTML = testTitleSubArr[keyIndex];
		document.getElementById('subTestCodeDiv').innerHTML = subTestCodeArr[keyIndex];

	} else {

		document.getElementById('instituteSubDiv').innerHTML = instituteTitleArr[keyIndexSub];
		document.getElementById('unitSubDiv').innerHTML = unitTitleArr[keyIndexSub];
		document.getElementById('departmentSubDiv').innerHTML = departmentTitleArr[keyIndexSub];
		document.getElementById('testSubDiv').innerHTML = testTitleArr[keyIndexSub]

	}
}



function clickPredefinedText() {
	document.getElementById("predefinedTextArea").innerHTML = "Changed....";
}









/******************************* Form definitions end here **************************************************/
