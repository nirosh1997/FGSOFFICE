var degreeTitleList = "";
var applicationNoList = "";
var degreeCodeList = "";
var programmeTypeCodeList = "";
var programmeTypeTitleList = "";
dataRep['roleName'] = "";



function transferStudentDetails() {

	// var postData = {
	// 	action: "getsingelStudents",
	// 	st_no: dataRep["studentNo"]
	// };

	let postData = {
		action: "data4StudentProfileDetailsTransfer",
		st_no: dataRep["studentNo"],
		authcode: authcode,
		username: dataRep['userId'],
	};
	console.log(postData);
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
					if (Students.studentNoArr != "" && Students.status != 400) {
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
						// degreeTitleArr[studentNoLength] = Students.degreeTitle;
						studentPermanentAddressArr[studentNoLength] = Students.studentPermanentAddress;
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



						$('#facultyTypeCode1').val(facultyCodeArr[studentNoLength]);

						$('#degreeCode').val(degreeCodeArr[studentNoLength]);
						$('#programmeTypeCode').val(programmeTypeCodeArr[studentNoLength]);
						$('#medium').val(mediumArr[studentNoLength]);
						$('#trYYYY').val(dataRep["academicYear"]);
						$('#aname').val(studentNameArr[studentNoLength]);
						$('#asNo').val(studentNoArr[studentNoLength]);
						$('#aapNo').val(applicationNoArr[studentNoLength]);

						$('#aacademicyear').val(achedamicYearArr[studentNoLength]);


						$('#aNic').val(studentNICArr[studentNoLength]);
						$('#degreeTitle1').val(degreeTitleArr[studentNoLength]);
						$('#degreeCode1').val(degreeCodeArr[studentNoLength]);
						$('#programmeTypeCode1').val(programmeTypeCodeArr[studentNoLength]);

						$("#medium1").val(mediumArr[studentNoLength]);
						$('#selectedTransferType').val(1);
						$('#trYYYY').prop("disabled", true);
						$('#medium1').prop("disabled", false);
						$('#degreeTitle1').prop("disabled", false);


						studentNoLength++;


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
						subjectCreditsArr.length = 0;
						subjectExamStatus.length = 0;
						MarksLength = 0;
						$.each(Students.data4profilExamResults, function (index, data4profilExamResults) {
							subjectNameArr[MarksLength] = data4profilExamResults.subjectName;
							subjectTitleArr[MarksLength] = data4profilExamResults.subjectTitle;
							subjectSemesterArr[MarksLength] = data4profilExamResults.subjectSemester;
							marksArr[MarksLength] = data4profilExamResults.Grade;
							subjectCreditsArr[MarksLength] = data4profilExamResults.credits;
							subjectExamStatus[MarksLength] = data4profilExamResults.Status;

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
						GradeArrLength = 0;
						$.each(Students.data4profilRepeatExamResults, function (index, data4profilRepeatExamResults) {
							rep_subjectNameArr[GradeArrLength] = data4profilRepeatExamResults.rep_subjectName;
							Rep_subjectTitleArr[GradeArrLength] = data4profilRepeatExamResults.subjectTitle;
							Rep_subjectSemesterArr[GradeArrLength] = data4profilRepeatExamResults.subjectSemester;
							rep_GradeArr[GradeArrLength] = data4profilRepeatExamResults.rep_Grade;
							rep_StatusArr[GradeArrLength] = data4profilRepeatExamResults.rep_Status;

							GradeArrLength++;
						});




						ReRep_subjectNameArr.length = 0;
						ReRep_subjectTitleArr.length = 0;
						ReRep_subjectSemesterArr.length = 0;
						ReRep_GradeArr.length = 0;
						ReRep_attempt_time.length = 0;
						subjectReRepExamStatus.length = 0;
						ReRepLength = 0;
						$.each(Students.data4profilReRepeatExamResults, function (index, data4profilReRepeatExamResults) {
							ReRep_subjectNameArr[ReRepLength] = data4profilReRepeatExamResults.ReRep_subjectName;
							ReRep_subjectTitleArr[ReRepLength] = data4profilReRepeatExamResults.rereptitle;
							ReRep_subjectSemesterArr[ReRepLength] = data4profilReRepeatExamResults.rerepsem;
							ReRep_GradeArr[ReRepLength] = data4profilReRepeatExamResults.ReRep_Grade;
							ReRep_attempt_time[ReRepLength] = data4profilReRepeatExamResults.re_repeat_attempt_time;
							subjectReRepExamStatus[ReRepLength] = data4profilReRepeatExamResults.ReRep_Status;
							ReRepLength++;
						});


						let vTmpSTR = "";
						if (MarksLength > 0) {
							// vTmpSTR += '<div class="tab-pane fade" id="v-pills-exam" role="tabpanel" aria-labelledby="v-pills-exam-tab">';
							vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
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
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Transfer</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Tranfer Subject Code</th>";

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
								vTmpSTR += "<td style='border: 1px solid black;padding: 5px 75px 5px 5px;text-wrap: auto;line-height: 17px;'><div class='investView_l'  style='text-align:left; width:auto;'>" + subjectTitleArr[i] + "</div></td>";
								vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + marksArr[i] + "</div></td>";

								let mstatus = "";
								if (subjectExamStatus[i] == 1) {
									mstatus = "Not Released";
								} else if (subjectExamStatus[i] == 0) {
									mstatus = "Released";
								} else if (subjectExamStatus[i] == "H") {
									mstatus = "Hold";
								} else if (subjectExamStatus[i] == "NP") {
									mstatus = "Not Payed";
								}
								vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + mstatus + "</div></td>";


								vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'><input type='checkbox'  id='checkSelectedResultF" + i + "' name='checkSelectedResultF" + i + "'' onchange=subjectTransferSelectFirst(" + i + ") /></div></td>";
								vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px' id='checkSelectedResultDF" + i + "'>";
								vTmpSTR += "<select class='form-control form-control-sm2' id='checkSelectedResultDCF" + i + "' style='outline: 1px solid #aaa;'>";
								vTmpSTR += '</select>';
								vTmpSTR += "</div></td>";

								vTmpSTR += "</tr>";
							}

							sem0Count = 0;
							sem1Count = 0;
							sem2Count = 0;
							sem3Count = 0;
							sem4Count = 0;

							for (var j = 0; j < MarksLength; j++) {
								switch (subjectSemesterArr[j]) {
									case '0': sem0Count++; break;
									case '1': sem1Count++; break;
									case '2': sem2Count++; break;
									case '3': sem3Count++; break;
									case '4': sem4Count++; break;
								}
							}



							vTmpSTR += "</table><br>";

						}
						vTmpSTR += '</fieldset>';

						//Repeat Results 	
						if (GradeArrLength != 0) {
							vTmpSTR += "<div align='center' style='clear:both; margin-bottom: 10px;'>";
							vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
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
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";

							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Transfer</th>";
							vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Tranfer Subject Code</th>";
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


									vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem1Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>1</div></td>";
									Repsem1Count = 0;

								} else if (Rep_subjectSemesterArr[i] == '2' && Repsem2Count != 0) {

									vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem2Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>2</div></td>";
									Repsem2Count = 0;
								} else if (Rep_subjectSemesterArr[i] == '3' && Repsem3Count != 0) {

									vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem3Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>3</div></td>";
									Repsem3Count = 0;
								} else if (Rep_subjectSemesterArr[i] == '4' && Repsem4Count != 0) {

									vTmpSTR += "<td style='padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem4Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>4</div></td>";
									Repsem4Count = 0;
								}


								vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto;' >" + rep_subjectNameArr[i] + "</div></td>";
								vTmpSTR += "<td style='padding: 5px 75px 5px 5px;text-align:left;text-wrap: auto;line-height: 17px;'><div class='investView_l'  style='text-align:left; width:auto;'>" + Rep_subjectTitleArr[i] + "</div></td>";
								vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + rep_GradeArr[i] + "</div></td>";
								let mstatus = "";
								if (rep_StatusArr[i] == 1) {
									mstatus = "Not Released";
								} else if (rep_StatusArr[i] == 0) {
									mstatus = "Released";
								} else if (rep_StatusArr[i] == "H") {
									mstatus = "Hold";
								} else if (rep_StatusArr[i] == "NP") {
									mstatus = "Not Payed";
								}
								vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + mstatus + "</div></td>";

								vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'><input type='checkbox'  id='checkSelectedResultR" + i + "' name='checkSelectedResultR" + i + "'' onchange=subjectTransferSelectRepeat(" + i + ") /></div></td>";
								vTmpSTR += "<td style='padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px' id='checkSelectedResultDR" + i + "'>";
								vTmpSTR += "<select class='form-control form-control-sm2' id='checkSelectedResultDCR" + i + "' style='outline: 1px solid #aaa;'>";
								vTmpSTR += '</select>';
								vTmpSTR += "</div></td>";


								vTmpSTR += "</tr>";


							}



							vTmpSTR += "</table><br>";



							vTmpSTR += "</div>";
						}
						vTmpSTR += '</fieldset>';

						let countResult = 0;
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
										vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
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

										vTmpSTR += '<table class="table table-bordered">';

										vTmpSTR += "<tr style=''>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";

										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Transfer</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Tranfer Subject Code</th>";
										vTmpSTR += "</tr>";

										for (var i = startSet; i < countSet; i++) {
											if (ReRep_GradeArr[i] == '-') {
												ReRep_GradeArr[i] = '(ab)';
											}

											vTmpSTR += "<tr style='border: 1px solid black;'>";

											if (ReRep_subjectSemesterArr[i] == '0' && ReRepsem0Count != 0) {
												vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
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
											vTmpSTR += "<td style='border: 1px solid black;padding: 5px 5px 5px 5px;text-wrap: auto;text-wrap: auto;line-height: 17px;'><div class='investView_l'  style='text-align:center; width:auto;'>" + ReRep_subjectTitleArr[i] + "</div></td>";
											vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + ReRep_GradeArr[i] + "</div></td>";
											let mstatus = "";
											if (subjectReRepExamStatus[i] == 1) {
												mstatus = "Not Released";
											} else if (subjectReRepExamStatus[i] == 0) {
												mstatus = "Released";
											} else if (subjectReRepExamStatus[i] == "H") {
												mstatus = "Hold";
											} else if (subjectReRepExamStatus[i] == "NP") {
												mstatus = "Not Payed";
											}
											vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + mstatus + "</div></td>";


											vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'><input type='checkbox'  id='checkSelectedResultRR1" + countResult + "' name='checkSelectedResultRR1" + countResult + "'' onchange=subjectTransferSelectReRepeat(1," + i + "," + countResult + ") /></div></td>";
											vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px' id='checkSelectedResultDRR1" + countResult + "'></div>";
											vTmpSTR += "<select class='form-control form-control-sm2' id='checkSelectedResultDCRR1" + i + "' style='outline: 1px solid #aaa;'>";
											vTmpSTR += '</select>';
											vTmpSTR += '</td>';

											vTmpSTR += "</tr>";
											countResult++;
										}

										vTmpSTR += "</table><br>";
										vTmpSTR += '</fieldset>';

										startSet = k + 1;
									}
									else if (ReRep_attempt_time[k + 1] != attemptTime) {
										attemptTime = ReRep_attempt_time[k];
										vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
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

										vTmpSTR += '<table class="table table-bordered">';
										vTmpSTR += "<tr style=''>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Semester</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Code</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Subject Title</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Grade</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Status</th>";

										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Transfer</th>";
										vTmpSTR += "<th style='padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Tranfer Subject Code</th>";
										vTmpSTR += "</tr>";

										for (var i = startSet; i < countSet; i++) {
											if (ReRep_GradeArr[i] == '-') {
												ReRep_GradeArr[i] = '(ab)';
											}

											vTmpSTR += "<tr style='border: 1px solid black;'>";

											if (ReRep_subjectSemesterArr[i] == '0' && ReRepsem0Count != 0) {
												vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center;vertical-align: middle' rowspan='" + Repsem0Count + "'><div class='investView_l'  style='text-align:center; width:auto;padding-left:1.5em'>Year End</div></td>";
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
											vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + ReRep_GradeArr[i] + "</div></td>";
											let mstatus = "";
											if (subjectReRepExamStatus[i] == 1) {
												mstatus = "Not Released";
											} else if (subjectReRepExamStatus[i] == 0) {
												mstatus = "Released";
											} else if (subjectReRepExamStatus[i] == "H") {
												mstatus = "Hold";
											} else if (subjectReRepExamStatus[i] == "NP") {
												mstatus = "Not Payed";
											}
											vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'>" + mstatus + "</div></td>";

											vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'><input type='checkbox'  id='checkSelectedResultRR" + attemptTime + countResult + "' name='checkSelectedResultRR" + attemptTime + countResult + "'' onchange=subjectTransferSelectReRepeat(" + attemptTime + "," + i + "," + countResult + ")/></div></td>";
											vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'  id='checkSelectedResultDRR" + attemptTime + countResult + "'></div>";
											vTmpSTR += "<select class='form-control form-control-sm2' id='checkSelectedResultDCRR" + attemptTime + i + "' style='outline: 1px solid #aaa;'>";
											vTmpSTR += '</select>';
											vTmpSTR += '</td>';
											countResult++;

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


						$("#transferResult").html(vTmpSTR);




						vTmpSTR = "";
						vTmpSTR2 = "";
						// data4paymentProfile
						// data4StudentpaymentView

						// $.each(Students.data4paymentProfile, function (index, data4paymentProfile) {
						// 	tCodeArr[tCodeLength] = data4paymentProfile.tCode;
						// 	paymentStudentArr[tCodeLength] = data4paymentProfile.studentNo;
						// 	feeCatArr[tCodeLength] = data4paymentProfile.feeCat;
						// 	amountArr[tCodeLength] = data4paymentProfile.amount;
						// 	paymentDateArr[tCodeLength] = data4paymentProfile.paymentdate;
						// 	tCodeLength++;
						// });

						if (tCodeLength > 0 || RefNoLength > 0) {

							vTmpSTR += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
							vTmpSTR += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Payment History</legend>';

							vTmpSTR += '<table class="table table-bordered" style="width:100%;margin-top:1rem">';
							vTmpSTR += "<tr style='border: 1px solid black;'>";
							vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Reference Number</th>";
							vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Paid Date</th>";
							vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;'>Amount</th>";

							// vTmpSTR += "<th style='border: 1px solid black;padding: 5px; text-align:center; color: #bd3303; font-family: Tahoma;font-size: 13px;width:50px'>Transfer</th>";
							vTmpSTR += "</tr>";
							let total = 0;
							let count_P = 0;
							if (tCodeLength > 0) {
								for (var i = 0; i < tCodeLength; i++) {
									count_P++;
									vTmpSTR += "<tr style='border: 1px solid black;'>";
									vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:left;'>" + tCodeArr[i] + "</td>";
									vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + paymentDateArr[i] + "</td>";
									vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:right;'>" + parseInt(amountArr[i]).toFixed(2).toLocaleString() + "</td>";
									total = total + parseInt(amountArr[i]);
									// vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;width:50px'><input type='checkbox'  id='checkSelectedPay" + count_P + "' name='checkSelected" + count_P + "''/></td>";
									vTmpSTR += "</tr>";
								}
							}


							if (RefNoLength > 0) {
								for (var i = 0; i < RefNoLength; i++) {
									if (Response_ProgressArr[i] == 1) {
										count_P++;
										vTmpSTR += "<tr style='border: 1px solid black;'>";
										vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + Pay_RefNoArr[i] + "</td>";
										vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + Response_Progress_TimeArr[i] + "</td>";
										vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + parseInt(Pay_amountArr[i]).toFixed(2).toLocaleString() + "</td>";
										total = total + parseInt(Pay_amountArr[i]);
										// vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'><input type='checkbox' id='checkSelectedPay" + count_P + "' name='checkSelected" + count_P + "''/></td>";
										vTmpSTR += "</tr>";
									}
								}
							}
							vTmpSTR += "<tr style='border: 1px solid black;'>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;' colspan ='2'> Total : </td>";
							vTmpSTR += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + parseInt(total).toFixed(2).toLocaleString() + "</td>";
							vTmpSTR += "</tr></tabel>";



							vTmpSTR += '</fieldset>';
							vTmpSTR += '</fieldset>';


							vTmpSTR2 += '<fieldset class="field" style="width:100%;border: 1px solid #ccc;padding: 10px;margin-bottom:1rem">';
							vTmpSTR2 += '<legend class="fieldHead text-info" style="font-weight: bolder;width: fit-content;font-size: 1.25rem;">Payment Transfer</legend>';
							vTmpSTR2 += '<div class="form-group row mb-1">';
							vTmpSTR2 += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Transfer Amount</label></div>';
							vTmpSTR2 += '<div class="col-sm-8" style="display: inline-flex;">';
							vTmpSTR2 += "<input type='number' name='transamount'  id='transamount' class='form-control form-control-sm2' style='outline: 1px solid #aaa;'value = '" + total + "' max = '" + total + "' min = '0' onchange='calculateDeduction()'>";
							vTmpSTR2 += '</div>';
							vTmpSTR2 += '</div>';

							vTmpSTR2 += '<div class="form-group row mb-1">';
							vTmpSTR2 += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Deducted Amount</label></div>';
							vTmpSTR2 += '<div class="col-sm-8" style="display: inline-flex;">';
							vTmpSTR2 += "<input type='number' name='deductedamount'  id='deductedamount' class='form-control form-control-sm2' disabled style='outline: 1px solid #aaa;' value = '0'>";
							vTmpSTR2 += '</div>';
							vTmpSTR2 += '</div>';
							vTmpSTR2 += '</fieldset>';

						}



						// Pay_RefNoArr[RefNoLength] = data4StudentpaymentView.Pay_RefNo;
						// Pay_studentNoArr[RefNoLength] = data4StudentpaymentView.Pay_studentNo;
						// Pay_CategoryCodeArr[RefNoLength] = data4StudentpaymentView.Pay_CategoryCode;
						// Pay_amountArr[RefNoLength] = data4StudentpaymentView.Pay_amount;
						// Pay_Time_StampArr[RefNoLength] = data4StudentpaymentView.Pay_Time_Stamp;
						// Pay_MethodArr[RefNoLength] = data4StudentpaymentView.Pay_Method;
						// Response_ProgressArr[RefNoLength] = data4StudentpaymentView.Response_Progress;
						// Response_Progress_TimeArr[RefNoLength] = data4StudentpaymentView.Response_Progress_Time;
						// PayTitileArr[RefNoLength] = data4StudentpaymentView.PayTitile;
						// RefNoLength++;



						$("#transferPayment").html(vTmpSTR);
						$("#transferPayment2").html(vTmpSTR2);




					} else {
						Swal.fire({
							icon: 'error',
							title: 'Invalid Student No or Already Transfered',
							html: "Please enter check student no or status.",
							showConfirmButton: true,
						});
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























	// $.ajax({
	// 	type: 'POST',
	// 	url: 'rules/students.php', // Replace with your server-side script URL
	// 	data: postData,
	// 	dataType: 'json',
	// 	success: function (response) {


	// 		if (response[0].status == 200) {


	// 		} else {
	// 			Swal.fire({
	// 				title: "Error!",
	// 				text: response.message,
	// 				icon: "error"
	// 			});
	// 		}
	// 	},
	// 	error: function (error) {

	// 		console.log(error);
	// 		Swal.fire({
	// 			title: "Error!",
	// 			text: "Invalid application no",
	// 			icon: "error"
	// 		});
	// 	}
	// });

	// for (j = 0; j < applicationNoCodeLength; j++) {
	// 	if (dataRep["applicationNo"] == applicationNoArr[j]) {
	// 		dataRep["degreeCode"] = degreeCodeArr[j];
	// 		dataRep["programmeTypeCode"] = programmeTypeCodeArr[j];
	// 	}
	// }
}

function calculateDeduction() {
	let total = 0;
	if (tCodeLength > 0) {
		for (var i = 0; i < tCodeLength; i++) {
			total = total + parseInt(amountArr[i]);
		}
	}
	if (RefNoLength > 0) {
		for (var i = 0; i < RefNoLength; i++) {
			if (Response_ProgressArr[i] == 1) {
				total = total + parseInt(Pay_amountArr[i]);
			}
		}
	}
	let transamount = $('#transamount').val();
	let deductedamount = total - transamount;
	$('#deductedamount').val(deductedamount);


}


function subjectTransferSelectFirst(i) {
	for (var j = 0; j < MarksLength; j++) {
		if (i == j) {

			if ($('#checkSelectedResultF' + i).prop("checked")) {
				var postData = {
					action: "checkHasSubjectForTransfer",
					subjectCode: subjectNameArr[i],
					degreeCode: $('#degreeCode1').val(),
					academicYear: $('#trYYYY').val(),
					authcode: authcode,
					username: dataRep['userId'],
				};
				console.log(postData)

				$.ajax({
					type: 'POST',
					url: 'rules/subject.php', // Replace with your server-side script URL
					data: postData,
					dataType: 'json',
					success: function (response) {
						var postData2 = {
							action: "GetAllSubjectForTransfer",
							subjectCode: subjectNameArr[i],
							degreeCode: $('#degreeCode1').val(),
							academicYear: $('#trYYYY').val(),
							authcode: authcode,
							username: dataRep['userId'],
						};

						$.ajax({
							type: 'POST',
							url: 'rules/subject.php',
							data: postData2,
							dataType: 'json',
							success: function (response2) {
								$('#checkSelectedResultDCF' + i).empty();
								if (response2[0].status == 200) {
									response2.forEach(function (item) {
										// Add each subject code as the value and subject title as the text
										$('#checkSelectedResultDCF' + i).append(
											$('<option></option>')
												.val(item.subjectCode) // Use subjectCode as the value
												.text(item.subjectTitle + " (" + item.subjectCode + ")") // Use subjectTitle as the text
										);
									});
									if (response[0].status == 200) {
										$('#checkSelectedResultDCF' + i).val(subjectNameArr[i]);
										$('#checkSelectedResultDCF' + i).prop("disabled", true);

									} else {
										$('#checkSelectedResultDCF' + i).prop("disabled", false);
									}
								} else {
									Swal.fire({
										title: "Error!",
										text: "No Subject Found. Please Add Subject For Selected Batch",
										icon: "error"
									});
								}
							},
							error: function (error) {
								Swal.fire({
									title: "Error!",
									text: "ds",
									icon: "error"
								});
							}
						});

					},
					error: function (error) {
						console.log(error)
						Swal.fire({
							title: "Error!",
							text: "ds2",
							icon: "error"
						});
					}
				});
			} else {
				$('#checkSelectedResultDCF' + i).empty();
				$('#checkSelectedResultDCF' + i).prop("disabled", false);

			}
		}


	}
}

function subjectTransferSelectRepeat(i) {
	for (var j = 0; j < GradeArrLength; j++) {
		if (i == j) {

			if ($('#checkSelectedResultR' + i).prop("checked")) {
				var postData = {
					action: "checkHasSubjectForTransfer",
					subjectCode: rep_subjectNameArr[i],
					degreeCode: $('#degreeCode1').val(),
					academicYear: $('#trYYYY').val(),
					authcode: authcode,
					username: dataRep['userId'],
				};
				console.log(postData)

				$.ajax({
					type: 'POST',
					url: 'rules/subject.php', // Replace with your server-side script URL
					data: postData,
					dataType: 'json',
					success: function (response) {
						var postData2 = {
							action: "GetAllSubjectForTransfer",
							subjectCode: rep_subjectNameArr[i],
							degreeCode: $('#degreeCode1').val(),
							academicYear: $('#trYYYY').val(),
							authcode: authcode,
							username: dataRep['userId'],
						};

						$.ajax({
							type: 'POST',
							url: 'rules/subject.php',
							data: postData2,
							dataType: 'json',
							success: function (response2) {
								$('#checkSelectedResultDCR' + i).empty();
								if (response2[0].status == 200) {
									response2.forEach(function (item) {
										// Add each subject code as the value and subject title as the text
										$('#checkSelectedResultDCR' + i).append(
											$('<option></option>')
												.val(item.subjectCode) // Use subjectCode as the value
												.text(item.subjectTitle + " (" + item.subjectCode + ")") // Use subjectTitle as the text
										);
									});
									if (response[0].status == 200) {
										$('#checkSelectedResultDCR' + i).val(rep_subjectNameArr[i]);
										$('#checkSelectedResultDCR' + i).prop("disabled", true);

									} else {
										$('#checkSelectedResultDCR' + i).prop("disabled", false);
									}
								} else {
									Swal.fire({
										title: "Error!",
										text: "No Subject Found. Please Add Subject For Selected Batch",
										icon: "error"
									});
								}
							},
							error: function (error) {
								Swal.fire({
									title: "Error!",
									text: "ds",
									icon: "error"
								});
							}
						});

					},
					error: function (error) {
						console.log(error)
						Swal.fire({
							title: "Error!",
							text: "ds2",
							icon: "error"
						});
					}
				});
			} else {
				$('#checkSelectedResultDCR' + i).empty();
				$('#checkSelectedResultDCR' + i).prop("disabled", false);

			}
		}


	}

}

function subjectTransferSelectReRepeat(attempt, set_i, countResult2) {
	let countResult = 0;
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

				for (var i = startSet; i < countSet; i++) {
					if (set_i == i && attempt == "1") {


						if ($('#checkSelectedResultRR1' + countResult).prop("checked")) {
							var postData = {
								action: "checkHasSubjectForTransfer",
								subjectCode: ReRep_subjectNameArr[set_i],
								degreeCode: $('#degreeCode1').val(),
								academicYear: $('#trYYYY').val(),
								authcode: authcode,
								username: dataRep['userId'],
							};
							console.log(postData)

							$.ajax({
								type: 'POST',
								url: 'rules/subject.php', // Replace with your server-side script URL
								data: postData,
								dataType: 'json',
								success: function (response) {
									var postData2 = {
										action: "GetAllSubjectForTransfer",
										subjectCode: ReRep_subjectNameArr[set_i],
										degreeCode: $('#degreeCode1').val(),
										academicYear: $('#trYYYY').val(),
										authcode: authcode,
										username: dataRep['userId'],
									};

									$.ajax({
										type: 'POST',
										url: 'rules/subject.php',
										data: postData2,
										dataType: 'json',
										success: function (response2) {
											$('#checkSelectedResultRR1' + countResult).empty();
											if (response2[0].status == 200) {
												console.log("***********");
												console.log('#checkSelectedResultDCRR1' + set_i)
												console.log('#checkSelectedResultDCRR1' + set_i)
												console.log("***********");
												console.log(response2)
												response2.forEach(function (item) {

													$('#checkSelectedResultDCRR1' + set_i).append(
														$('<option></option>')
															.val(item.subjectCode) // Use subjectCode as the value
															.text(item.subjectTitle + " (" + item.subjectCode + ")") // Use subjectTitle as the text
													);
												});
												if (response[0].status == 200) {
													$('#checkSelectedResultDCRR1' + set_i).val(ReRep_subjectNameArr[set_i]);
													$('#checkSelectedResultDCRR1' + set_i).prop("disabled", true);

												} else {
													$('#checkSelectedResultDCRR1' + set_i).prop("disabled", false);
												}
											} else {
												Swal.fire({
													title: "Error!",
													text: "No Subject Found. Please Add Subject For Selected Batch",
													icon: "error"
												});
											}
										},
										error: function (error) {
											Swal.fire({
												title: "Error!",
												text: "ds",
												icon: "error"
											});
										}
									});

								},
								error: function (error) {
									console.log(error)
									Swal.fire({
										title: "Error!",
										text: "ds2",
										icon: "error"
									});
								}
							});
						} else {
							$('#checkSelectedResultDCRR1' + set_i).empty();
							$('#checkSelectedResultDCRR1' + set_i).prop("disabled", false);

						}
						// vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px' id='checkSelectedResultDRR1" + countResult + "'></div>";
						// vTmpSTR += "<select class='form-control form-control-sm2' id='checkSelectedResultDCRR1" + i + "' style='outline: 1px solid #aaa;'>";
						// vTmpSTR += '</select>';
					}
					countResult++;
				}

				startSet = k + 1;
			}
			else if (ReRep_attempt_time[k + 1] != attemptTime) {
				attemptTime = ReRep_attempt_time[k];

				for (var i = startSet; i < countSet; i++) {
					if (set_i == i && attempt == attemptTime) {
						if ($('#checkSelectedResultRR' + attemptTime + countResult).prop("checked")) {
							var postData = {
								action: "checkHasSubjectForTransfer",
								subjectCode: ReRep_subjectNameArr[set_i],
								degreeCode: $('#degreeCode1').val(),
								academicYear: $('#trYYYY').val(),
								authcode: authcode,
								username: dataRep['userId'],
							};
							console.log(postData)

							$.ajax({
								type: 'POST',
								url: 'rules/subject.php', // Replace with your server-side script URL
								data: postData,
								dataType: 'json',
								success: function (response) {
									var postData2 = {
										action: "GetAllSubjectForTransfer",
										subjectCode: ReRep_subjectNameArr[set_i],
										degreeCode: $('#degreeCode1').val(),
										academicYear: $('#trYYYY').val(),
										authcode: authcode,
										username: dataRep['userId'],
									};

									$.ajax({
										type: 'POST',
										url: 'rules/subject.php',
										data: postData2,
										dataType: 'json',
										success: function (response2) {
											$('#checkSelectedResultRR' + attemptTime + countResult).empty();
											if (response2[0].status == 200) {
												response2.forEach(function (item) {
													// Add each subject code as the value and subject title as the text
													$('#checkSelectedResultDCRR' + attemptTime + set_i).append(
														$('<option></option>')
															.val(item.subjectCode) // Use subjectCode as the value
															.text(item.subjectTitle + " (" + item.subjectCode + ")") // Use subjectTitle as the text
													);
												});
												if (response[0].status == 200) {
													$('#checkSelectedResultDCRR' + attemptTime + set_i).val(ReRep_subjectNameArr[set_i]);
													$('#checkSelectedResultDCRR' + attemptTime + set_i).prop("disabled", true);

												} else {
													$('#checkSelectedResultDCRR' + attemptTime + set_i).prop("disabled", false);
												}
											} else {
												Swal.fire({
													title: "Error!",
													text: "No Subject Found. Please Add Subject For Selected Batch",
													icon: "error"
												});
											}
										},
										error: function (error) {
											Swal.fire({
												title: "Error!",
												text: "ds",
												icon: "error"
											});
										}
									});

								},
								error: function (error) {
									console.log(error)
									Swal.fire({
										title: "Error!",
										text: "ds2",
										icon: "error"
									});
								}
							});
						} else {
							$('#checkSelectedResultDCRR' + attemptTime + set_i).empty();
							$('#checkSelectedResultDCRR' + attemptTime + set_i).prop("disabled", false);

						}
						// vTmpSTR += "<td style='border: 1px solid black;padding: 5px;text-align:center'><div class='investView_l'  style='text-align:center; width:auto; padding-left:10px'  id='checkSelectedResultDRR" + attemptTime + countResult + "'></div>";
						// vTmpSTR += "<select class='form-control form-control-sm2' id='checkSelectedResultDCRR" + attemptTime + i + "' style='outline: 1px solid #aaa;'>";
						// vTmpSTR += '</select>';
					}
					countResult++;
				}
				startSet = k + 1;
			}

		}
	}


}

function getNewStudentNo(lastStudentNo) {
	// Split the string at the last '/' to get the two main parts
	const lastSlashIndex = lastStudentNo.lastIndexOf('/');
	const part1 = lastStudentNo.substring(0, lastSlashIndex + 1); // Includes the last '/'
	let part2 = lastStudentNo.substring(lastSlashIndex + 1); // The part after the last '/'

	// Check if part2 contains a letter and split it further
	const match = part2.match(/^(\d+)([A-Z]?)$/);
	if (match) {
		const numberPart = match[1]; // Extract the numeric part
		const letterPart = match[2] || ""; // Extract the optional letter part

		// Increment the numeric part
		const incrementedNumber = (parseInt(numberPart, 10) + 1).toString().padStart(3, '0');


		// Concatenate the updated parts
		return part1 + incrementedNumber + letterPart;
	}

	// If no match, throw an error (unexpected format)
	throw new Error("Unexpected format for the serial number");
}



function doTransfer(newstno) {
	let transamount = $('#transamount').val();
	let deductedamount = 0;
	if ($('#deductedamount').val() !== undefined) {
		deductedamount = $('#deductedamount').val();
	}

	let selectedSubjects = []; // Array to store selected subjects

	for (let i = 0; i < MarksLength; i++) {
		let checkbox = document.getElementById(`checkSelectedResultF${i}`);
		let transferSelect = document.getElementById(`checkSelectedResultDCF${i}`);

		if (checkbox.checked) {
			let subjectCode = subjectNameArr[i]; // Assuming subjectNameArr holds subject codes
			let toSubjectCode = transferSelect.value; // Get the selected transfer value

			selectedSubjects.push({ subjectCode, toSubjectCode });
		}
	}

	console.log(selectedSubjects);


	let selectedRepeatSubjects = []; // Array to store selected subjects

	for (let i = 0; i < GradeArrLength; i++) {
		let checkbox = document.getElementById(`checkSelectedResultR${i}`);
		let transferSelect = document.getElementById(`checkSelectedResultDCR${i}`);

		if (checkbox.checked) {
			let subjectCode = rep_subjectNameArr[i]; // Assuming subjectNameArr holds subject codes
			let toSubjectCode = transferSelect.value; // Get the selected transfer value

			selectedRepeatSubjects.push({ subjectCode, toSubjectCode });
		}
	}

	console.log(selectedRepeatSubjects);

	let selectedReRepeatSubjects = []; // Array to store selected subjects
	let countResult = 0;
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

				for (var i = startSet; i < countSet; i++) {
					let checkbox = document.getElementById(`checkSelectedResultRR1${countResult}`);
					let transferSelect = document.getElementById(`checkSelectedResultDCRR1${i}`);
					if (checkbox.checked) {
						let subjectCode = ReRep_subjectNameArr[i];
						let toSubjectCode = transferSelect.value;
						let sattemptTime = attemptTime;
						selectedReRepeatSubjects.push({ subjectCode, toSubjectCode, sattemptTime });
					}
					countResult++;
				}

				startSet = k + 1;
			}
			else if (ReRep_attempt_time[k + 1] != attemptTime) {
				attemptTime = ReRep_attempt_time[k];

				for (var i = startSet; i < countSet; i++) {
					let checkbox = document.getElementById(`checkSelectedResultRR${attemptTime}${countResult}`);
					let transferSelect = document.getElementById(`checkSelectedResultDCRR${attemptTime}${i}`);
					if (checkbox.checked) {
						let subjectCode = ReRep_subjectNameArr[i];
						let toSubjectCode = transferSelect.value;
						let sattemptTime = attemptTime;
						selectedReRepeatSubjects.push({ subjectCode, toSubjectCode, sattemptTime });
					}
					countResult++;
				}
				startSet = k + 1;
			}

		}
	}
	if (deductedamount >= 0) {


		const IncomeSourceCode = $('#IncomeSourceCode1').val();

		let unitCode = "2";
		let sourceCode = IncomeSourceCode;
		let CategoryCode = "029";
		let academicYear = $('#trYYYY').val();
		let yr = academicYear.substr(academicYear.length - 2);
		let yy = "0";
		let position = 0;
		let year = [yr.slice(0, position), yy, yr.slice(position)].join('');
		let studentNo = newstno;
		let ref = "";
		if (studentNo.substr(studentNo.length - 1) == "E") {
			let se = studentNo.substring(0, studentNo.length - 1);
			let stuE = se.substr(se.length - 3);
			let xy = "07";
			let position = 0;
			let stuNoE = [stuE.slice(0, position), xy, stuE.slice(position)].join('');
			let partcodeE = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuNoE);
			let ok = /^\d+$/.test(partcodeE)
			let checkdigit = ok ? luhn_caclulate(partcodeE) : ""
			let fullcode = ok ? partcodeE + checkdigit : ""
			ref = fullcode;
		}
		else {
			let ss = studentNo.substr(studentNo.length - 3);
			let xx = "00";
			let position = 0;
			let stuNo = [ss.slice(0, position), xx, ss.slice(position)].join('');
			let partcode = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuNo);
			let ok = /^\d+$/.test(partcode)
			let checkdigit = ok ? luhn_caclulate(partcode) : ""
			let fullcode = ok ? partcode + checkdigit : ""
			ref = fullcode;
		}

		let transfer16DigitCode = ref;
		CategoryCode = "030";
		ref = "";
		if (studentNo.substr(studentNo.length - 1) == "E") {
			let se = studentNo.substring(0, studentNo.length - 1);
			let stuE = se.substr(se.length - 3);
			let xy = "07";
			let position = 0;
			let stuNoE = [stuE.slice(0, position), xy, stuE.slice(position)].join('');
			let partcodeE = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuNoE);
			let ok = /^\d+$/.test(partcodeE)
			let checkdigit = ok ? luhn_caclulate(partcodeE) : ""
			let fullcode = ok ? partcodeE + checkdigit : ""
			ref = fullcode;
		}
		else {
			let ss = studentNo.substr(studentNo.length - 3);
			let xx = "00";
			let position = 0;
			let stuNo = [ss.slice(0, position), xx, ss.slice(position)].join('');
			let partcode = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuNo);
			let ok = /^\d+$/.test(partcode)
			let checkdigit = ok ? luhn_caclulate(partcode) : ""
			let fullcode = ok ? partcode + checkdigit : ""
			ref = fullcode;
		}
		let transferDedicted16DigitCode = ref;



		let timestamp = Date.now();
		let random_number = Math.floor(Math.random() * 1000000);
		let transferID = parseInt(timestamp + ('000000' + random_number).slice(-6));

		let transferType = "";
		let eligible = false;
		if ($('#degreeCode1').val() != $('#degreeCode').val() || $('#medium').val() != $('#medium1').val() || $('#aacademicyear').val() != $('#trYYYY').val()) {
			eligible = true;
		}
		if ($('#selectedTransferType').val() == 1) {
			transferType = "Programme Transfer";

		} else if ($('#selectedTransferType').val() == 2) {
			transferType = "Medium Transfer";

		} else if ($('#selectedTransferType').val() == 3) {
			transferType = "Batch Differ";

		}

		if (transferType != "") {
			if (eligible) {
				var postData3 = {
					action: "TransferStudenttoNewBatch",
					oldstudentNo: $('#asNo').val(),
					oldstudentNIC: $('#aNic').val(),
					oldaacademicyear: $('#aacademicyear').val(),
					olddegreeCode: $('#degreeCode').val(),
					oldapplicationNo: $('#aapNo').val(),

					transferType: transferType,
					transferID: transferID,
					newStudentNo: newstno,
					newAcademicYear: $('#trYYYY').val(),
					newdegereeCode: $('#degreeCode1').val(),
					newProgrameTypeCode: $('#programmeTypeCode1').val(),
					newFacultyCode: $('#facultyTypeCode1').val(),
					newIncomeSourceCode1: $('#IncomeSourceCode1').val(),
					newMedium: $('#medium1').val(),
					transferAmount: transamount,
					deductedAmount: deductedamount,
					transfer16DigitCode: transfer16DigitCode,
					transferDedicted16DigitCode: transferDedicted16DigitCode,
					firstTimerResult: JSON.stringify(selectedSubjects),
					repeatResult: JSON.stringify(selectedRepeatSubjects),
					rerepeatResult: JSON.stringify(selectedReRepeatSubjects),
					authcode: authcode,
					username: dataRep['userId'],
				};

				Swal.fire({
					title: "Are you sure?",
					html: "<p style='text-align:left'>Old Student No:" + $('#asNo').val() + "<br>" + "Student Name:" + $('#aname').val() + "<br>" + "Student NIC:" + $('#aNic').val() + "<br><br>*please check new studnet number format is correct before transfer." + "New Student No: <span style='color:#ff4747'>" + newstno + "</span></p>",
					icon: "warning",
					showCancelButton: true,
					confirmButtonText: "Yes, Transfer",
					cancelButtonText: "Cancel"
				}).then((result) => {
					if (result.isConfirmed) {


						console.log(postData3);
						$.ajax({
							type: 'POST',
							url: 'rules/students.php', // Replace with your server-side script URL
							data: postData3,
							dataType: 'json',
							success: function (response) {
								console.log(response);
								if (response.status == 200) {
									Swal.fire({
										title: "Transferred!",
										html: "The student has been transferred successfully.<br><br><strong>Your new student number is:</strong> " + newstno,
										icon: "success",
										allowOutsideClick: false,
										showCancelButton: false,
										confirmButtonText: "OK"
									}).then((result) => {
										if (result.isConfirmed) {
											sendForm('data4UpdateInfoStudentTransfer');
											// yourNextFunction(); // Call your function here
										}
									});
								} else {
									Swal.fire("Transferred Failed!", "Transferred failed.Please try again later", "error");

								}
							}, error: function (error) {
								console.log(error);
							}
						});



					}
				});
			} else {
				Swal.fire({
					title: "warning",
					text: "Please Check Change Required Details",
					icon: "warning"
				});
			}
		} else {
			Swal.fire({
				title: "warning",
				text: "Invalid Transfer Type",
				icon: "warning"
			});
		}




	} else {
		Swal.fire({
			title: "warning",
			text: "Transfer amount can't exceed the total paid amount",
			icon: "warning"
		});
	}
}
function savetransferStudent() {


	//create student number and ask for correctness
	var postData = {
		action: "getLastStudentNo",
		degreeCode: $('#degreeCode1').val(),
		academicYear: $('#trYYYY').val(),
		medium: $('#medium1').val(),
		authcode: authcode,
		username: dataRep['userId'],
	};
	console.log(postData)

	$.ajax({
		type: 'POST',
		url: 'rules/students.php', // Replace with your server-side script URL
		data: postData,
		dataType: 'json',
		success: function (response) {
			if (response[0].status == 200) {
				let newstno = getNewStudentNo(response[0].last_student_no);
				Swal.fire({
					title: "New Registered Student No",
					text: "Please change student no if you want (not recommended).",
					icon: "warning",
					input: "text",
					inputValue: newstno,
					inputPlaceholder: "Enter student number (e.g., FGS/MBus/2025/001)",
					showCancelButton: true,
					confirmButtonText: "Submit",
					preConfirm: (inputValue) => {
						// if (!/^\d{3}$/.test(inputValue)) {
						// 	Swal.showValidationMessage("Please enter a valid 3-digit student number (e.g., 001)");
						// 	return false;
						// }
						return inputValue; // Return input for further processing
					}
				}).then((result) => {
					if (result.isConfirmed) {
						let newstno = result.value; // Get the entered student number
						doTransfer(newstno);
					}
				});
				// doTransfer(newstno);
			} else {
				Swal.fire({
					title: "No Registered Student Found",
					text: "There is no already registered student found. Please enter a new student number, starting from 001.",
					icon: "warning",
					input: "text",
					inputPlaceholder: "Enter student number (e.g., FGS/MBus/2025/001)",
					showCancelButton: true,
					confirmButtonText: "Submit",
					preConfirm: (inputValue) => {
						// if (!/^\d{3}$/.test(inputValue)) {
						// 	Swal.showValidationMessage("Please enter a valid 3-digit student number (e.g., 001)");
						// 	return false;
						// }
						return inputValue; // Return input for further processing
					}
				}).then((result) => {
					if (result.isConfirmed) {
						let newstno = result.value; // Get the entered student number
						doTransfer(newstno);
					}
				});
			}
		},
		error: function (error) {
			console.log(error);
		}
	});

	// for (j = 0; j < applicationNoCodeLength; j++) {
	// 	if (dataRep["applicationNo"] == applicationNoArr[j]) {
	// 		dataRep["degreeCode"] = degreeCodeArr[j];
	// 		dataRep["programmeTypeCode"] = programmeTypeCodeArr[j];
	// 	}
	// }
}

function setDegreePro2() {
	var degreeCodeselect = "";
	var programmeCodeselect = "";
	var facultyCodeselect = "";
	var IncomeSourceCodeselect = "";
	let degreeName = document.getElementById('degreeTitle1').value;
	for (j = 0; j < degreeCode1Length; j++) {
		if (degreeName != null && degreeName != "" && degreeName == degreeTitleArr[j]) {
			degreeCodeselect = degreeCode1Arr[j];
			programmeCodeselect = programmeTypeCode1Arr[j];
			facultyCodeselect = facultyCode1Arr[j];
			IncomeSourceCodeselect = IncomeSourceCodeArr1[j];
			console.log(IncomeSourceCodeselect);
			break;
		}
	}
	console.log("fd")
	document.getElementById('degreeCode1').value = degreeCodeselect;
	document.getElementById('programmeTypeCode1').value = programmeCodeselect;
	document.getElementById('facultyTypeCode1').value = facultyCodeselect;
	document.getElementById('IncomeSourceCode1').value = IncomeSourceCodeselect;


}


function formStudentTransfer(dsp) {

	title = "Student Transfers";
	str = "";
	var keyDisabled = fieldDisabled = "";
	if (dsp == "formStudentTransfer") {

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
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Student No</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += "<input type='text' name='studentNo'  id='studentNo' class='form-control form-control-sm' value= '" + dataRep["studentNo"].trim() + "'  onchange='dataRep[this.name]=this.value;'>";
		str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="transferStudentDetails();">Find</button>';
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
		str += '<h6 style="text-decoration: underline;margin-bottom: 3rem;">Student Details</h6>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Student No</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='asNo'  id='asNo' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Application No</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='aapNo'  id='aapNo' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='aacademicyear'  id='aacademicyear' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Student Name</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='aname'  id='aname' class='form-control form-control-sm' disabled>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Student NIC</label></div>';
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

		str += '<div class="form-group row mb-3">';
		str += '<div class="col-sm-12" style="block" id="transferPayment">';

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
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Transfer Type</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<select class='form-control form-control-sm2' id='selectedTransferType' onchange='resetFormTransfer();' style='outline: 1px solid #aaa;'>";
		str += "<option value='1'>Programme Transfer</option>";
		str += "<option value='2'>Medium Transfer</option>";
		str += "<option value='3'>Batch Differ</option>";
		str += '</select>';
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Degree Title</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm2" id="degreeTitle1" name="degreeTitle1" onchange="dataRep[this.id]=this.value;setDegreePro2()" style="outline: 1px solid #aaa;">';
		str += degreeTitleList;
		str += '</select>';
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row  mb-1"  id="displayTransferYear">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Transfer Year</label></div>';
		str += '<div class="col-sm-8">';
		str += "<select class='form-control dateSelect form-control-sm2' name='trYYYY' id='trYYYY' value='trYYYY'  onchange='dataRep[this.name]=this.value;' style='outline: 1px solid #aaa;'>";
		let date = new Date().getFullYear();
		str += generateNumberOptions((date - 3), (date + 5), 4, date);
		str += "</select>";
		str += '</div>';
		str += '</div>';


		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Degree Code</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='degreeCode1'  id='degreeCode1' class='form-control form-control-sm2' disabled style='outline: 1px solid #aaa;'>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		// str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Income Source Code</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='hidden' name='IncomeSourceCode1'  id='IncomeSourceCode1' class='form-control form-control-sm2' disabled style='outline: 1px solid #aaa;'>";
		str += '</div>';
		str += '</div>';



		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme Type Code</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='programmeTypeCode1'  id='programmeTypeCode1' class='form-control form-control-sm2' disabled style='outline: 1px solid #aaa;'>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Faculty Code</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += "<input type='text' name='facultyTypeCode1'  id='facultyTypeCode1' class='form-control form-control-sm2' disabled style='outline: 1px solid #aaa;'>";
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mb-3">';
		str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Medium</label></div>';
		str += '<div class="col-sm-8" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm2" id="medium1" name="medium1" onchange="dataRep[this.id]=this.value;" style="outline: 1px solid #aaa;">';
		str += '<option value="si">Sinhala</option>';
		str += '<option value="en">English</option>';
		str += '</select>';
		str += '</div>';
		str += '</div>';



		str += '<div class="form-group row mb-3">';
		str += '<div class="col-sm-12" style="block" id="transferPayment2">';

		str += '</div>';
		str += '</div>';


		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-12" style="block" id="transferResult">';

		str += '</div>';
		str += '</div>';






		str += '<div class="form-group row mb-1">';
		str += '<div class="col-sm-12">';
		str += '<button type="button" class="btn btn-info" style="float:right; margin-top: 1rem;" onclick="savetransferStudent();">Transfer Student</button>';
		str += '</div>';
		str += '</div>';









		str += '</div>';



		str += '</div>';
		str += '</div></div>';
		str += '</div></div>';

	}




	return str;
}

function resetFormTransfer() {

	$('#trYYYY').prop("disabled", true);
	$('#medium1').prop("disabled", true);
	$('#degreeTitle1').prop("disabled", true);


	var postData = {
		action: "getsingelStudents",
		st_no: dataRep["studentNo"],
		authcode: authcode,
		username: dataRep['userId'],
	};

	$.ajax({
		type: 'POST',
		url: 'rules/students.php', // Replace with your server-side script URL
		data: postData,
		dataType: 'json',
		success: function (response) {
			console.log(response);
			if (response[0].status == 200) {
				console.log(response[0].achedamicYear);
				$('#degreeCode').val(response[0].degreeCode);
				$('#programmeTypeCode').val(response[0].programmeTypeCode);
				$('#medium').val(response[0].medium);
				$('#trYYYY').val(response[0].achedamicYear);
				$('#aname').val(response[0].studentName);
				$('#asNo').val(response[0].studentNo);
				$('#aapNo').val(response[0].applicationNo);

				$('#aacademicyear').val(response[0].achedamicYear);

				$('#aNic').val(response[0].studentNIC);
				for (j = 0; j < degreeCode1Length; j++) {
					if (degreeTitleArr[j] != null) {
						if (degreeTitleArr.indexOf(degreeTitleArr[j]) == degreeTitleArr.lastIndexOf(degreeTitleArr[j]) || (degreeTitleArr.indexOf(degreeTitleArr[j]) != degreeTitleArr.lastIndexOf(degreeTitleArr[j]) && degreeTitleArr.indexOf(degreeTitleArr[j]) == j)) {
							if (degreeCode1Arr[j] == response[0].degreeCode) {
								$("#degreeTitle1").val(degreeTitleArr[j]);
								setDegreePro2();
								break;
							}
						}

					}
				}
				$("#medium1").val(response[0].medium);
				let transferType = $("#selectedTransferType").val();
				if (transferType == 1) {
					//Programme Transfer
					$('#trYYYY').prop("disabled", true);
					$('#medium1').prop("disabled", false);
					$('#degreeTitle1').prop("disabled", false);

				} else if (transferType == 2) {
					//Medium Transfer
					$('#trYYYY').prop("disabled", true);
					$('#medium1').prop("disabled", false);
					$('#degreeTitle1').prop("disabled", true);

				} else if (transferType == 3) {
					//Batch Differ
					$('#trYYYY').prop("disabled", false);
					$('#medium1').prop("disabled", false);
					$('#degreeTitle1').prop("disabled", false);

				}



			} else {
				Swal.fire({
					title: "Error!",
					text: response.message,
					icon: "error"
				});
			}
		},
		error: function (error) {

			console.log(error);
			Swal.fire({
				title: "Error!",
				text: "Invalid application no",
				icon: "error"
			});
		}
	});
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
		newstr += "<input type='text'  name='degreeTitle1' id='degreeTitle1' list='degreeTitleList' value= ''  onchange='dataRep[this.name]=this.value;setDegreePro2();'>";
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
