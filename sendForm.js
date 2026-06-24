function sendForm(frm) {

	var doc, dataStr;

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	} else if (frm.substring(0, 5) == 'data4') {
		dataStr = "action=get&interface=" + frm;
	}



	if (frm == 'data4getAdmissionStudent' || frm == 'data4getRep_AdmissionStudent' || frm == 'data4getReRepeat_Admission') {
		dataStr += "&degreeCode=" + dataRep['degreeWiseAdmision'];
		dataStr += "&achademicYear=" + dataRep['academicYear'];
		dataStr += "&semester=" + dataRep['appSemester'];
		dataStr += "&attempt=" + dataRep['selectedAttempt'];
	}

	if (frm == 'data4wifiCreation') {

		dataStr += "&search=" + dataRep["searchValue"];
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&filter=" + dataRep['filteredBy'];
		dataStr += "&dateTo=" + dataRep['dateTo'];
		dataStr += "&dateFrom=" + dataRep['dateFrom'];

	}


	if (frm == 'data4LetterApplicantListPrint') {
		dataStr += "&achademicYear=" + dataRep["achedamicYear"];
		dataStr += "&degreeCode=" + dataRep["selectedDegreeName"];
		dataStr += "&Doctype=" + dataRep["selectedDocName"];

	}

	if (frm == 'data4ApplicantDetailsEdit') {
		dataStr += "&applicationNo=" + dataRep["applicationNo"];
	}

	if (frm == 'data4StudentDetailsEdit') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}



	if (frm == 'data4RegisterList') {

		dataStr += "&medium=" + dataRep["selectedMedium"];
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];

	}

	if (frm == 'data4SelectedApplicantList') {

		dataStr += "&medium=" + dataRep["selectedMedium"];
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];

	}

	if (frm == 'data4NewStudentPaymentDetails') {

		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&medium=" + dataRep['selectedMedium'];
		dataStr += "&type=" + dataRep['dataType'];
		// console.log(dataRep["selectedMedium"]);

		console.log(dataStr)
	}

	if (frm == 'data4ApplicationFormExam') {

		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];

	}

	if (frm == 'data4ExamAppliedListSubject' || frm == 'data4ExamAppliedListSubjectForStiker' || frm == 'data4ExamAppliedListSubjectForRawMarkSheet') {

		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&semester=" + dataRep['selectedSemester'];

	}
	if (frm == 'data4ExamAppliedListSubjectForStudentsResultUpdate') {

		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&semester=" + dataRep['selectedSemester'];

	}


	if (frm == 'data4ExamAppliedListStudents' || frm == 'data4ExamAppliedListStudentsForStiker' || frm == 'data4ExamAppliedListStudentsForRawMarkSheet') {

		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&semester=" + dataRep['selectedSemester'];
		dataStr += "&attempt=" + dataRep['selectedAttempt'];
		dataStr += "&subjectCode=" + dataRep['selectedSubject'];
		dataStr += "&re_repeat_attempt_time=" + dataRep['selectedAttemptTime'];
		if (frm == 'data4ExamAppliedListStudentsForStiker') {
			dataStr += "&medium=" + dataRep['selectedMedium'];
		}


	}

	if (frm == 'data4ExamAppliedListForStudentsResultUpdate') {

		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&semester=" + dataRep['selectedSemester'];
		dataStr += "&attempt=" + dataRep['selectedAttempt'];
		dataStr += "&subjectCode=" + dataRep['selectedSubject'];
		dataStr += "&selectedType=" + dataRep['selectedType'];
		dataStr += "&re_repeat_attempt_time=" + dataRep['selectedAttemptTime'];
		dataStr += "&medium=" + dataRep["selectedMedium"];



	}

	if (frm == 'data4PrintStudentIDCard') {
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&medium=" + dataRep["selectedMedium"];

	}

	if (frm == 'data4BulkTransfer') {
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&medium=" + dataRep["selectedMedium"];

	}
	if (frm == 'data4GetEnrollment') {
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&medium=" + dataRep["selectedMedium"];

	}


	if (frm == 'data4PreRegStudent') {
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&medium=" + dataRep["selectedMedium"];
	}

	if (frm == 'data4ApplicantSelection') {
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&medium=" + dataRep["selectedMedium"];
	}



	if (frm == 'data4ApplicantList') {
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&batchnumber=" + dataRep['batchnumber'];
		
	}

	if (frm == 'data4SendSMApplicantList' || frm == 'data4SendSMSelectedApplicantList' || frm == 'data4SendSMPreRegStudentList' || frm == 'data4SendSMRegStudentList') {
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&medium=" + dataRep["selectedMedium"];

	}

	if (frm == 'data4SendSMtDueAmmoutList') {
		dataStr += "&degreeCode=" + dataRep['selectedDegreeName'];
		dataStr += "&achademicYear=" + dataRep['achedamicYear'];
		dataStr += "&medium=" + dataRep["selectedMedium"];
		dataStr += "&requiredAmmout=" + dataRep["requiredAmmout"];
	}


	if (frm == 'data4formDocDecisionTransactionTwo') {

		dataStr += "&itemValue=" + dataRep['itemValue1'];
		dataStr += "&itemValue1=" + dataRep['itemValue2'];
		dataStr += "&docmentID=" + dataRep['docmentID'];

	}
	if (frm == 'data4StudentProfileDocument') {
		dataStr += "&itemValue=" + dataRep["studentNo"];
		//alert(dataRep["studentNo"]);
	}
	if (frm == 'data4profileDocument') {
		dataStr += "&itemValue=" + dataRep["studentNo"];
		//alert(dataRep["studentNo"]);
	}
	if (frm == 'data4profileEducationalDetails') {
		dataStr += "&applicationNo=" + dataRep["applicationNo"];

	}

	if (frm == 'data4DisplayApplicatProfile') {
		dataStr += "&applicationNo=" + dataRep["applicationNo"];

	}

	if (frm == 'data4DisplayStudentNoforProfile') {
		dataStr += "&studentNo=" + dataRep["studentNo"];

	}



	if (frm == 'data4GetReleventApplicant') {
		dataStr += "&applicationNo=" + dataRep["applicationNo"];

	}

	if (frm == 'data4ApplicarionReprint') {
		dataStr += "&applicationNo=" + dataRep["ApplicationNo"];
		//alert(dataRep["ApplicationNo"]);
	}

	if (frm == 'data4ApplicarionReprintWork') {
		dataStr += "&applicationNo=" + dataRep["ApplicationNo"];
		//alert(dataRep["ApplicationNo"]);
	}

	if (frm == 'data4ApplicationReprinteducation') {
		dataStr += "&applicationNo=" + dataRep["ApplicationNo"];
		//alert(dataRep["ApplicationNo"]);
	}

	if (frm == 'data4profileNote') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}

	if (frm == 'data4IncomeCategoryDetails') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}

	if (frm == 'data4StudentpaymentView') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}



	if (frm == 'data4paymentProfile') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}
	if (frm == 'data4ViewUser') {
		dataStr += "&userName=" + dataRep["userName"];
		//dataStr += "&role="+dataRep['roleName'];
		//alert(dataRep["userName"]);
	}
	if (frm == 'data4checkUser') {
		dataStr += "&userName=" + dataRep["userName"];
	}
	if (frm == 'data4DisplayNotes') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
		dataStr += "&applicationNo=" + dataRep["applicationNo"];
	}
	if (frm == 'data4ViewApplicants' || frm == 'data4ViewApplicants2' || frm == 'data4ViewApplicants3' || frm == 'data4ViewApplicants4') {
		dataStr += "&applicationNo=" + dataRep["sendapplicationNo1"];
		dataStr += "&AchademicYear=" + dataRep["achedamicYear"];
		dataStr += "&degreeCode=" + dataRep["selectedDegreeName"];
		//alert(dataStr);
		//alert(dataRep["achedamicYear"]);
	}

	if (frm == 'data4ViewEduApplicants' || frm == 'data4ViewEduApplicants2' || frm == 'data4ViewEduApplicants3' || frm == 'data4ViewEduApplicants4') {
		dataStr += "&applicationNo=" + dataRep["sendapplicationNo1"];
		dataStr += "&AchademicYear=" + dataRep["achedamicYear"];
		dataStr += "&degreeCode=" + dataRep["selectedDegreeName"];
		//alert(dataStr);
		//alert(dataRep["achedamicYear"]);
	}

	
	//------------------------ADD NEW-------------------------------
	if (frm == 'data4profilerefreeDetails') {
		dataStr += "&applicationNo=" + dataRep["applicationNo"];

	}
	if (frm == 'data4profilExamResults') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}
	//-------------------------END--------------------------------

	// Profile 
	if (frm == 'data4StudentProfileDetails') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}
	/***************************************************************/
	if (frm == 'data4DownloadStudentMarks') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&SubjectCode=" + dataRep["degSub"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4examResultsSubWise') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&SubjectCode=" + dataRep["degSub"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4examResultsSemWise') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4examResultsSemWiseSubjects') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4examResultsSemWiseFinal') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4examResultsYearWise') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4examResultsYearWiseSubjects') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4examResultsYearWiseFinal') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}
	/***************************************************************/

	if (frm == 'data4finalExamResultsView') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
		//dataStr += "&medium="+dataRep["selectedmediumFinal"];
	}

	if (frm == 'data4examPassReport') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4finalExamCriteria') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}


	if (frm == 'data4printReport') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
		dataStr += "&degreeTitle=" + dataRep["degTitle"];
	}

	if (frm == 'data4finalExamResultsPrint') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
		dataStr += "&degreeTitle=" + dataRep["degTitle"];
	}

	/*Sem*/
	if (frm == 'data4finalExamResultsViewSem') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
		dataStr += "&smester=" + dataRep["finsemester"];
		//dataStr += "&medium="+dataRep["selectedmediumFinal"];
	}

	if (frm == 'data4finalExamCriteriaSem') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
	}

	if (frm == 'data4finalExamCriteriaAdd') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
	}

	if (frm == 'data4rep_examDownload') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
		dataStr += "&Semester=" + dataRep["degSem"];

	}



	if (frm == 'data4DownloadRepeatStudentList') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&SubjectCode=" + dataRep["degSub"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}
	if (frm == 'data4DownloadRepeatStudentMedicalList') {

		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&SubjectCode=" + dataRep["degSub"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
		//dataStr += "&Reason="       +dataRep["reason"];
	}


	if (frm == 'data4RepexamResultsSubWise') {

		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&SubjectCode=" + dataRep["degSub"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];

	}


	if (frm == 'data4RepexamResultsSemWise') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4RepexamResultsSemWiseSubjects') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4RepexamResultsSemWiseFinal') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	//------------------------------
	if (frm == 'data4RepexamResultsYearWiseFinal') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4RepexamResultsYearWiseSubjects') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}


	if (frm == 'data4RepexamResultsYearWise') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4profilRepeatExamResults') {
		//alert(dataRep["studentNo"]);
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}


	if (frm == 'data4profilRepExamResit') {
		dataStr += "&degreeCode=" + dataRep["degreeCode"];
		dataStr += "&academicYear=" + dataRep["academicYear"];
	}

	if (frm == 'data4profilRepExamCriteria') {
		dataStr += "&degreeCode=" + dataRep["degreeCode"];
	}


	if (frm == 'data4profilRepExamFinalResults') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}



	if (frm == 'data4profilExamFinalResults') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}

	if (frm == 'data4profilExamResit') {
		dataStr += "&degreeCode=" + dataRep["degreeCode"];
		dataStr += "&academicYear=" + dataRep["academicYear"];
	}

	if (frm == 'data4ReRepeatSubjectSelection') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}
	if (frm == 'data4profilReRepeatExamResults') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}


	if (frm == 'data4profilExamCriteria') {
		dataStr += "&degreeCode=" + dataRep["degreeCode"];
		dataStr += "&academicYear=" + dataRep["academicYear"];

	}


	if (frm == 'data4ResearchStudentProfileDetails') {
		dataStr += "&studentNo=" + dataRep["studentNo"];
	}

	if (frm == 'data4ResearchprofileEducationalDetails') {
		dataStr += "&applicationNo=" + dataRep["applicationNo"];

	}
	if (frm == 'data4ResearchprofilerefreeDetails') {
		dataStr += "&applicationNo=" + dataRep["applicationNo"];

	}

	if (frm == 'data4Rerep_examDownload') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
		//dataStr += "&Semester="+dataRep["degSem"];

	}
	if (frm == 'data4DownloadReRepeatStudentList') {
		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&SubjectCode=" + dataRep["degSub"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];
	}

	if (frm == 'data4ReRepeatexamResultsSubWise') {

		dataStr += "&degreeCode=" + dataRep["degCode"];
		dataStr += "&SubjectCode=" + dataRep["degSub"];
		dataStr += "&Semester=" + dataRep["degSem"];
		dataStr += "&AchademicYear=" + dataRep["acYear"];

	}

	isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

	return 0;
}

str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="sendForm(' + "'data4ApplicarionReprint'" + ');sendForm(' + "'data4ApplicarionReprintWork'" + ');sendForm(' + "'data4ApplicationReprinteducation'" + ');">Print application</button>';
