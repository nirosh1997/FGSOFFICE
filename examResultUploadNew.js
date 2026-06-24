var selectedChecked = "";
var registeredChecked = "";
var changeRow = 0;
var me, pt, dCode;
var mediumSinhalaChecked = mediumEnglishChecked = "";
var count = 0;
dataRep['roleName'] = "";
dataRep["selectedSemester"] = "";
dataRep["selectedAttempt"] = "";
var BulkNote01;
var TempBulkNote01;
var BulkNoteArr01 = new Array();
var datetime = "";
var TempUser01 = "";
//-------------------------------------------------MAIN FUNCTION START---------------------------------------------

var tableFinalDataTable;
var serchedAcadamicYear;
var serchedDegreeCode;
var serchedSubjectName;
var serchedSemester;
var serchedAttemped; // F, R, RR
var serchedAttemptTime; // 1,2,3,4,5,6,7,8


function statusBackGroundColor(Status) {
    let BGcolor = "#b84141";
    if (Status == 0) {
        BGcolor = "#5e9030";
    } else if (Status == 1) {
        BGcolor = "#b84141";
    } else if (Status == 'H') {
        BGcolor = "#bc951d";
    } else if (Status == 'NP') {
        BGcolor = "#bc1daf";
    } else {
        BGcolor = "#b84141";
    }
    return BGcolor;

}

function releaseResult(stNo) {
    return new Promise(function (resolve, reject) {
        let releaseResult = {
            action: "releaseResultIndividual",
            attempt: serchedAttemped,
            studentId: ex_studentNoArr[stNo],
            degreeCode: $('#selectedDegreeName').val(),
            achedamicYear: serchedAcadamicYear,
            subjectName: serchedSubjectName,
            Status: $('#resultStatus' + stNo).find('option:selected').val(),
            authcode: authcode,
            username: dataRep['userId'],
        };

        $.ajax({
            type: 'POST',
            url: 'rules/insertMarks.php',
            data: releaseResult,
            dataType: 'json',
            success: function (response) {
                if (response && response.status === 200) {
                    $('#resultsApprove' + stNo).prop("disabled", true);
                    resolve(true);
                } else {
                    $('#resultsApprove' + stNo).prop("disabled", false);
                    resolve(false);
                }
            },
            error: function (error) {
                console.log(error);
                resolve(false);
            }
        });
    });
}

function calculateAverage(m1, m2) {
    return Math.round((parseFloat(m1) + parseFloat(m2)) / 2);
}

function updateResultRescrutiny(statusComEle, stNo) {

    const studentNo = ex_studentNoArr[stNo];
    const degreeCode = $('#selectedDegreeName').val();
    const subjectCode = serchedSubjectName;

    const ex1_old = ex_examiner1[stNo];
    const ex2_old = ex_examiner2[stNo];
    const mark_old = ex_mark[stNo];
    const grade_old = ex_grade[stNo];

    /* ================= FIRST SWEETALERT ================= */
    Swal.fire({
        title: 'Rescrutiny Review',
        html: `
            <table style="width:100%; text-align:left">
                <tr><td><b>Student No</b></td><td>${studentNo}</td></tr>
                <tr><td><b>Degree Code</b></td><td>${degreeCode}</td></tr>
                <tr><td><b>Subject Code</b></td><td>${subjectCode}</td></tr>
                <tr><td><b>Examiner 1 Result</b></td><td>${ex1_old}</td></tr>
                <tr><td><b>Examiner 2 Result</b></td><td>${ex2_old}</td></tr>
                <tr><td><b>Marks</b></td><td>${mark_old}</td></tr>
                <tr><td><b>Current Grade</b></td><td>${grade_old}</td></tr>
            </table>
        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Change',
        denyButtonText: 'Not Change',
        cancelButtonText: 'Cancel'
    }).then((result) => {

        /* ================= NOT CHANGE ================= */
        if (result.isDenied) {
            Swal.fire({
                title: 'Confirm',
                text: 'Are you sure you want to mark this result as NOT CHANGED?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, Confirm'
            }).then((confirmResult) => {
                if (confirmResult.isConfirmed) {
                    sendSMSAndUpdateTable('NOT_CHANGED', stNo, 'NOT_CHANGED');
                }
            });
        }

        /* ================= CHANGE ================= */
        if (result.isConfirmed) {
            showChangePopup(stNo, studentNo, degreeCode, subjectCode);
        }

        /* ================= CANCEL ================= */
        if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.close();
        }
    });
}

function showChangePopup(stNo, studentNo, degreeCode, subjectCode) {

    Swal.fire({
        title: 'Change Result',
        width: 600,
        html: `
            <div class="container-fluid text-left">

                <div class="row mb-3">
                    <div class="col-6">
                        <label class="form-label">Examiner 1 Mark</label>
                        <input id="ex1_new" type="number" class="form-control form-control-sm" placeholder="Enter mark">
                    </div>
                    <div class="col-6">
                        <label class="form-label">Examiner 2 Mark</label>
                        <input id="ex2_new" type="number" class="form-control form-control-sm" placeholder="Enter mark">
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-6">
                        <label class="form-label">Average Mark</label>
                        <input id="avg_mark_new" type="number" class="form-control form-control-sm" placeholder="Enter average">
                    </div>
                    <div class="col-6">
                        <label class="form-label">Grade</label>
                        <select id="grade_new" class="form-select form-control form-control-sm">
                            <option value="">Select Grade</option>
                            <option>A+</option>
                            <option>A</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>B-</option>
                            <option>C+</option>
                            <option>C</option>
                            <option>C-</option>
                            <option>D+</option>
                            <option>D</option>
                            <option>E</option>
                        </select>
                    </div>
                </div>

            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Update',
        focusConfirm: false,
        preConfirm: () => {

            const ex1 = document.getElementById('ex1_new').value.trim();
            const ex2 = document.getElementById('ex2_new').value.trim();
            const avg = document.getElementById('avg_mark_new').value.trim();
            const grade = document.getElementById('grade_new').value;

            if (!ex1 || !ex2 || !avg || !grade) {
                Swal.showValidationMessage('Please fill all fields');
                return false;
            }

            if (isNaN(ex1) || isNaN(ex2) || isNaN(avg)) {
                Swal.showValidationMessage('Marks must be numeric values');
                return false;
            }

            return {
                ex1_new: ex1,
                ex2_new: ex2,
                avg_mark: avg,
                grade_new: grade
            };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            confirmFinalChange(
                stNo,
                studentNo,
                degreeCode,
                subjectCode,
                result.value
            );
        }
    });
}


function confirmFinalChange(stNo, studentNo, degreeCode, subjectCode, newData) {

    Swal.fire({
        title: 'Final Confirmation',
        html: `
            <table style="width:100%; text-align:left">
                <tr><td><b>Student No</b></td><td>${studentNo}</td></tr>
                <tr><td><b>Degree</b></td><td>${degreeCode}</td></tr>
                <tr><td><b>Subject</b></td><td>${subjectCode}</td></tr>

                <tr><td>Examiner 1</td><td>${ex_examiner1[stNo]} → ${newData.ex1_new}</td></tr>
                <tr><td>Examiner 2</td><td>${ex_examiner2[stNo]} → ${newData.ex2_new}</td></tr>
                <tr><td>Marks</td><td>${ex_mark[stNo]} → ${newData.avg_mark}</td></tr>
                <tr><td>Grade</td><td>${ex_grade[stNo]} → ${newData.grade_new}</td></tr>
            </table>
        `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Update'
    }).then((finalResult) => {
        if (finalResult.isConfirmed) {
            sendSMSAndUpdateTable('CHANGE', stNo, newData);
        }
    });
}

function sendSMSAndUpdateTable(status, stNo, payload) {

    if (status == "CHANGE") {
        //update result
        const postData = {
            action: "updateIndividualResultRescrutiny",
            attempt: serchedAttemped,
            studentId: ex_studentNoArr[stNo],
            degreeCode: $('#selectedDegreeName').val(),
            achedamicYear: serchedAcadamicYear,
            subjectName: serchedSubjectName,
            re_repeat_attempt_time: serchedAttemptTime,
            Status: status,
            ex1_new: payload.ex1_new,
            ex2_new: payload.ex2_new,
            avg_mark: payload.avg_mark,
            grade_new: payload.grade_new,
            ex1_old: ex_examiner1[stNo],
            ex2_old: ex_examiner2[stNo],
            avg_mark_old: ex_mark[stNo],
            grade_old: ex_grade[stNo],
            authcode: authcode,
            username: dataRep['userId']
        };

        // console.log(postData);
        $.ajax({
            type: 'POST',
            url: 'rules/insertMarks.php',
            data: postData,
            dataType: 'json',
            success: function (response) {
                if (response.status === "success") {
                    SendSMSForRescrutiny(ex_studentNoArr[stNo]);
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated',
                        text: 'The result has been updated successfully.',
                        confirmButtonText: 'OK',
                        allowOutsideClick: false,
                        allowEscapeKey: false
                    }).then((result) => {
                        if (result.isConfirmed || result.isDismissed) {
                            examAppliedListGetUpdateResult(1);
                            DataTableForExamAppliedListResultUpload();
                        }
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Not Updated',
                        text: 'Please try again later.'
                    });
                }
            },
            error: function (error) {
                console.log(error)
            }
        });

    } else {
        //update log
        const postData = {
            action: "updateIndividualResultRescrutinyLog",
            attempt: serchedAttemped,
            studentId: ex_studentNoArr[stNo],
            degreeCode: $('#selectedDegreeName').val(),
            achedamicYear: serchedAcadamicYear,
            subjectName: serchedSubjectName,
            re_repeat_attempt_time: serchedAttemptTime,
            Status: status,
            authcode: authcode,
            username: dataRep['userId']
        };

        $.ajax({
            type: 'POST',
            url: 'rules/insertMarks.php',
            data: postData,
            dataType: 'json',
            success: function (response) {
                if (response.status === "success") {
                    SendSMSForRescrutiny(ex_studentNoArr[stNo]);
                    Swal.fire({
                        icon: 'success',
                        title: 'Status Updated',
                        text: 'The result status has been updated as `NOT CHANGE`.',
                        confirmButtonText: 'OK',
                        allowOutsideClick: false,
                        allowEscapeKey: false
                    }).then((result) => {
                        if (result.isConfirmed || result.isDismissed) {
                            examAppliedListGetUpdateResult(1);
                            DataTableForExamAppliedListResultUpload();
                        }
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Not Updated',
                        text: 'Please try again later.'
                    });
                }
            },
            error: function (error) {
                console.log(error)
            }
        });
    }


}


function SendSMSForRescrutiny(stNo) {
    const postDataForGetStudentData = {
        action: "data4StudentProfileDetails",
        st_no: stNo,
        authcode: authcode,
        username: dataRep['userId']
    };
    $.ajax({
        type: 'POST',
        url: 'rules/students.php',
        data: postDataForGetStudentData,
        dataType: 'json',
        success: function (res) {
            let student = res[0];
            const completeMessagesend = "Dear Student,\nThe recorrection result for " + serchedSubjectName + " has been updated. Please check.Please log in to https://sysfgs.kln.ac.lk/ to view results.\nThanks.";
            if (mobileNumberValid(student.studentContactMobile) != 0) {
                sendDirectSMS(mobileNumberValid(student.studentContactMobile), completeMessagesend);
            }
            let subject = serchedSubjectName + " Subject Re-Correction Results Released";
            let body = "<h4>Dear " + student.studentInitial + ",</h4>The recorrection result for " + serchedSubjectName + " has been updated. Please log in to the FGS MIS to view your results.";
            body += "<a href='" + baseUrl + "' style='display: block; text-align: center; font-weight: 500; padding: 12px 20px; background: #c0392b; border-radius: 3px; color: #eee; font-size: 14px; text-decoration: none; margin: 20px 10px 20px 0;width: 200px;'>Click Here to Login</a>";
            body += "<br>Thank you.<br><br>Best Regards,";
            sendDirectEmail("exam.fgsmis.noreply@kln.ac.lk", "FGS MIS", student.studentContactEmail, subject, body)
        },
        error: function (error) {
            console.log(error)
        }
    });


}



function updateResultStatus(statusComEle, stNo) {

    Swal.fire({
        title: 'Are you sure?',
        text: 'This action released all results you searched!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Released!',
        cancelButtonText: 'No, Cancel!',
    }).then((result) => {
        if (result.isConfirmed) {

            var postData = {
                action: "updateIndividualResultStatus",
                attempt: serchedAttemped,
                studentId: ex_studentNoArr[stNo],
                degreeCode: $('#selectedDegreeName').val(),
                achedamicYear: serchedAcadamicYear,
                subjectName: serchedSubjectName,
                re_repeat_attempt_time: serchedAttemptTime,
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
                    //     $('#resultsApprove' + stNo).prop("disabled", false);
                    // }
                    if (statusComEle.value == 0) {
                        //send sms as released result
                        const postDataForGetStudentData = {
                            action: "data4StudentProfileDetails",
                            st_no: ex_studentNoArr[stNo],
                            authcode: authcode,
                            username: dataRep['userId']
                        };
                        sendNotificationResultRelease(postDataForGetStudentData, serchedSubjectName);

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


function sendNotificationResultRelease(postDataForGetStudentData, serchedSubjectName) {
    console.log(postDataForGetStudentData);
    $.ajax({
        type: 'POST',
        url: 'rules/students.php',
        data: postDataForGetStudentData,
        dataType: 'json',
        success: function (res) {
            let student = res[0];
            console.log(student);
            const completeMessagesend = "Dear Student,\nThe subject-wise result for " + serchedSubjectName + " have been released. Please check.Please log in to https://sysfgs.kln.ac.lk/ to view results.\nThanks.";
            if (mobileNumberValid(student.studentContactMobile) != 0) {
                sendDirectSMS(mobileNumberValid(student.studentContactMobile), completeMessagesend);
            }
            let subject = serchedSubjectName + " Subject Results Released";
            let body = "<h4>Dear " + student.studentInitial + ",</h4>The subject-wise result for " + serchedSubjectName + " have been released. Please log in to the FGS MIS to view your results.";
            body += "<a href='" + baseUrl + "' style='display: block; text-align: center; font-weight: 500; padding: 12px 20px; background: #c0392b; border-radius: 3px; color: #eee; font-size: 14px; text-decoration: none; margin: 20px 10px 20px 0;width: 200px;'>Click Here to Login</a>";
            body += "<br>Thank you.<br><br>Best Regards,";
            sendDirectEmail("exam.fgsmis.noreply@kln.ac.lk", "FGS MIS", student.studentContactEmail, subject, body)
        },
        error: function (error) {
            console.log(error)
        }
    });
}


function updateRemoveHoldResults(statusComEle, stNo) {

    Swal.fire({
        title: 'Are you sure?',
        text: 'This action remove hold status!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Removed Hold Status!',
        cancelButtonText: 'No, Cancel!',
    }).then((result) => {
        if (result.isConfirmed) {

            var postData = {
                action: "updateIndividualHoldStatus",
                attempt: serchedAttemped,
                studentId: ex_studentNoArr[stNo],
                degreeCode: $('#selectedDegreeName').val(),
                achedamicYear: serchedAcadamicYear,
                subjectName: serchedSubjectName,
                re_repeat_attempt_time: serchedAttemptTime,
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
                    if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar') {
                        $('#resultsApprove' + stNo).prop("disabled", false);
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

var downloadOptionModel2;

function openModelDownloadGradeSheetMarkSheet() {
    downloadOptionModel2.show();
}
function closeModelDownloadGradeSheetMarkSheet() {
    downloadOptionModel2.hide();
}

var st_count2 = 0;
function examDownloadFinalReportForTable() {
    //get subject
    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0) {

        let tmpDId = document.getElementById('selectedDegreeName').value;
        dataRep["acYear"] = document.getElementById('achedamicYear').value;
        dataRep["degCode"] = tmpDId;
        dataRep["BatchNumber"] = $("#selectedBatchNumber option:selected").val();


        let getBatchData = {
            action: "getDataForBatchUpdate",
            degreeCode: dataRep["degCode"],
            academicYear: dataRep["acYear"],
            batchNumber: dataRep["BatchNumber"],
            authcode: authcode,
            username: dataRep['userId'],
        };

        // totalGradeBody
        $.ajax({
            type: 'POST',
            url: 'rules/batch.php',
            data: getBatchData,
            dataType: 'json',
            success: async function (batch) {
                if (batch && batch[0].status === 200) {

                    if (batch[0].credits_complete > 0) {
                        if (batch[0].pass_gpa > 0) {

                            let GPAforPass = batch[0].pass_gpa;
                            let credits_complete = batch[0].credits_complete;

                            let getSubject = {
                                action: "getSubject2",
                                degreeCode: dataRep["degCode"],
                                achedamicYear: dataRep["acYear"],
                                batchNumber: dataRep["BatchNumber"],
                                medium: md,
                                authcode: authcode,
                                username: dataRep['userId'],
                            };
                            // console.log(getSubject)
                            $.ajax({
                                type: 'POST',
                                url: 'rules/subject.php',
                                data: getSubject,
                                dataType: 'json',
                                success: function (response) {
                                    console.log(response)




                                    let getStudent = {
                                        action: "getStudentsinBatch",
                                        degreeCode: dataRep["degCode"],
                                        achedamicYear: dataRep["acYear"],
                                        programmeTypeCode: dataRep["programmeTypeCode"],
                                        medium: md,
                                        authcode: authcode,
                                        username: dataRep['userId'],
                                    };

                                    $.ajax({
                                        type: 'POST',
                                        url: 'rules/students.php',
                                        data: getStudent,
                                        dataType: 'json',
                                        success: async function (response2) {
                                            let studentData = [];
                                            console.log(response2)

                                            // Store all promises in an array
                                            // const promises = response2.map(async (student) => {
                                            serchedAttemped = dataRep["selectedAttempt"];

                                            let repeatAttempt = "1";
                                            if (serchedAttemped == "RR") {
                                                repeatAttempt = $('#selectedAttemptTime').val();
                                            }
                                            dataRep["selectedAttemptTime"] = repeatAttempt;
                                            for (const student of response2) {
                                                let getResult = {
                                                    action: "getFinalResult",
                                                    degreeCode: dataRep["degCode"],
                                                    achedamicYear: dataRep["acYear"],
                                                    studentNo: student.studentNo,
                                                    studentName: student.studentName,
                                                    attampt: serchedAttemped,
                                                    attamptTime: repeatAttempt,
                                                    authcode: authcode,
                                                    username: dataRep['userId'],
                                                };

                                                // Await the result of this AJAX call
                                                const responseData = await $.ajax({
                                                    type: 'POST',
                                                    url: 'rules/insertMarks.php',
                                                    data: getResult,
                                                    dataType: 'json'
                                                });

                                                let subjectDetails = {};
                                                let st_no_data = "";
                                                let st_name_data = "";
                                                let st_programmeTypeCode_data = "";
                                                // console.log(response);
                                                $.each(response, function (subjectIndex, subject) {
                                                    $.each(responseData, function (resultIndex, result) {
                                                        if (subject.subjectCode == result.subjectCode) {
                                                            subjectDetails[result.subjectCode] = [
                                                                result.degreeCode, result.subjectCode, result.grade,
                                                                result.examiner1, result.examiner2, result.marks,
                                                                result.semester, result.medium, result.GPA
                                                            ];
                                                            if (st_no_data == "") {
                                                                st_no_data = result.StudentNo;
                                                                st_name_data = result.StudentName;
                                                                st_programmeTypeCode_data = result.programmeTypeCode;
                                                            }
                                                        }
                                                    });
                                                });
                                                if (st_no_data != "") {
                                                    studentData.push([st_no_data, st_name_data, subjectDetails, st_programmeTypeCode_data]);
                                                } else {
                                                    studentData.push([getResult.studentNo, getResult.studentName, subjectDetails, getResult.programmeTypeCode]);

                                                }
                                            };

                                            // });


                                            // await Promise.all(promises);
                                            // console.log(studentData);
                                            studentData.sort((a, b) => {
                                                let extractNumber = (str) => {
                                                    // Use a regular expression to capture the last numeric part in the string
                                                    let match = str.match(/\d+$/); // This matches the last number in the string
                                                    return match ? parseInt(match[0], 10) : 0; // Convert the matched part to an integer
                                                };

                                                let numA = extractNumber(a[0]);
                                                let numB = extractNumber(b[0]);

                                                return numA - numB;
                                            });




                                            let BatchYear = document.getElementById('achedamicYear').value;
                                            let degTitle = $("#selectedDegreeName option:selected").text();


                                            let newStr;
                                            // newStr += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
                                            // newStr += "<tr>";
                                            // newStr += "<th style='border: 1px solid #524f4f;' rowspan='2'>No</th>";
                                            // newStr += "<th style='border: 1px solid #524f4f;' rowspan='2'>Student No</th>";
                                            // newStr += "<th style='border: 1px solid #524f4f;' rowspan='2'>Name</th>";

                                            // newStr += "</tr>";
                                            // newStr += "<tr>";

                                            // $.each(response, function (subjectIndex, subject) {
                                            //     newStr += '<th style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="3">' + subject.subjectCode + '</th>';

                                            // });
                                            // newStr += "</tr>";

                                            let st_count = 0;
                                            st_count2 = 0;
                                            tableFinalDataTable.clear();
                                            let tblDat = [];
                                            $.each(studentData, function (stIn, studentRe) {
                                                st_count++;
                                                st_count2++;
                                                newStr += "<tr>";
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + st_count + '</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:left">' + studentRe[0] + '</td>';
                                                // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:left">' + studentRe[1] + '</td>';



                                                let studentPartisipateCredit = 0;
                                                let studentPartisipateCreditWithFailed = 0;
                                                let studentPartisipateSubject = 0;
                                                let studentEarnCredit = 0;
                                                let studentEarnCreditWithFailed = 0;

                                                let hasAbsent = false;
                                                let hasRepeat = false;
                                                let notContinue = true;
                                                $.each(response, function (subjectIndex, subject) {

                                                    if (studentRe[2][subject.subjectCode]) {
                                                        if (parseFloat(studentRe[2][subject.subjectCode][8]) >= parseFloat(GPAforPass)) {
                                                            notContinue = false;
                                                            studentEarnCredit = parseFloat(studentEarnCredit) + (parseFloat(studentRe[2][subject.subjectCode][8]) * parseFloat(subject.credits));
                                                            studentPartisipateCredit = parseFloat(studentPartisipateCredit) + parseFloat(subject.credits);
                                                            studentPartisipateSubject++;
                                                        } else {
                                                            if (studentRe[2][subject.subjectCode][5] == 125) {
                                                                hasAbsent = true;
                                                            }
                                                            if (parseFloat(studentRe[2][subject.subjectCode][8]) < parseFloat(GPAforPass)) {
                                                                hasRepeat = true;
                                                            }
                                                        }

                                                        if (parseFloat(studentRe[2][subject.subjectCode][8])) {
                                                            studentEarnCreditWithFailed = parseFloat(studentEarnCreditWithFailed) + (parseFloat(studentRe[2][subject.subjectCode][8]) * parseFloat(subject.credits));
                                                            studentPartisipateCreditWithFailed = parseFloat(studentPartisipateCreditWithFailed) + parseFloat(subject.credits);

                                                        }
                                                        let color = "";
                                                        if (studentRe[2][subject.subjectCode][5] == 125 || parseFloat(studentRe[2][subject.subjectCode][8]) < parseFloat(GPAforPass)) {
                                                            color = "#ff4747";
                                                        } else {
                                                            color = "#000";

                                                        }

                                                        // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][5] + '</td>';
                                                        // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][2] + '</td>';
                                                        // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][8] + '</td>';

                                                    } else {
                                                        // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                        // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                        // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                    }
                                                });

                                                let credit = credits_complete;
                                                let status = "";

                                                // console.log('-------------------------------------------------------');                                               
                                                // console.log(studentEarnCredit);
                                                // console.log(studentPartisipateSubject);
                                                // console.log(studentPartisipateCredit);
                                                // console.log('-------------------------------------------------------');


                                                let gpa = (studentEarnCredit / studentPartisipateCredit).toFixed(2);
                                                let gpawithFailedSubject = (studentEarnCreditWithFailed / studentPartisipateCredit).toFixed(2);
                                                let gpaforProgram = (studentEarnCreditWithFailed / credit).toFixed(2);
                                                if (studentPartisipateCredit >= credit) {
                                                    gpaforProgram = (studentEarnCreditWithFailed / studentPartisipateCredit).toFixed(2);
                                                }
                                                let gpaT = (studentEarnCredit / studentPartisipateCredit).toFixed(4);

                                                if (studentPartisipateCredit >= credit) {
                                                    if (gpa >= parseFloat(GPAforPass)) {
                                                        status = "Pass";
                                                    } else {
                                                        let hasAbsent = false;
                                                        let hasRepeat = false;
                                                        let notContinue = true;
                                                        if (notContinue) {
                                                            // status = "Not Participant";
                                                            status = "Not Yet Completed";
                                                        } else if (hasAbsent) {
                                                            status = "Has absent subject/s";
                                                        } else if (hasRepeat) {
                                                            status = "Has repeat subject/s";
                                                        } else {
                                                            status = "Repeat/Fail";
                                                        }
                                                    }
                                                } else {
                                                    if (notContinue) {
                                                        // status = "Not Participant";
                                                        status = "Not Yet Completed";
                                                    } else if (hasAbsent) {
                                                        status = "Has absent subject/s";
                                                    } else if (hasRepeat) {
                                                        status = "Has repeat subject/s";
                                                    } else {
                                                        status = "Not Yet Completed";
                                                    }
                                                }

                                                if (isNaN(gpa)) {
                                                    gpa = 0;
                                                }

                                                if (isNaN(gpaT)) {
                                                    gpaT = 0;
                                                }
                                                tblDat.push([
                                                    '<input type="checkbox" id="checkSelected' + st_count + '" name="checkSelected' + st_count + '" class="form-check-input" style="margin: 0;position: relative;">',  // Checkbox column
                                                    st_count,
                                                    studentRe[0],
                                                    gpa, 
                                                    gpawithFailedSubject, 
                                                    gpaforProgram, 
                                                    // gpaT,
                                                    credit, studentPartisipateCredit, studentEarnCredit.toFixed(2), status]);
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + gpa + '</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + gpawithFailedSubject + '</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + gpaforProgram + '</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + gpaT + '</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + credit + '</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + studentEarnCredit.toFixed(2) + '</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + status + '</td>';


                                                newStr += "</tr>";
                                            });
                                            console.log(tblDat);
                                            tableFinalDataTable.rows.add(tblDat);
                                            tableFinalDataTable.draw();
                                            // $("#totalGradeBody").html(newStr);
                                            // DataTableForExamAppliedListResultUploadFinal();
                                            // totalGradeBody
                                            // newStr += "</table>";

                                            // newStr += "<br>";
                                            // newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
                                            // newStr += "<br>";
                                            // newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
                                            // newStr += "<br>";
                                            // newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
                                            // newStr += "<br>";
                                            // newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
                                            // newStr += "<br>";
                                            // newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";


                                            // var exportFilename = BatchYear + " - English - " + degTitle + " Final Result Sheet.xls";
                                            // var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

                                            // if (navigator.msSaveBlob) {
                                            //     navigator.msSaveBlob(csvData, exportFilename);
                                            // } else {
                                            //     //In FF link must be added to DOM to be clicked
                                            //     var link = document.createElement('a');
                                            //     link.href = window.URL.createObjectURL(csvData);
                                            //     link.setAttribute('download', exportFilename);
                                            //     document.body.appendChild(link);
                                            //     link.click();
                                            //     document.body.removeChild(link);
                                            // }



                                            // console.log(newStr);
                                            // console.log(studentData);








                                        }
                                    });
                                }
                            });
                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Alert',
                                text: "Batch not updated. This batch hasn't set the required GPA to qualify for the degree."
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Alert',
                            text: "Batch not updated. This batch hasn't set the required credit limit to qualify for the degree."
                        });
                    }

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Alert',
                        text: 'Batch Not Availble.'
                    });
                }
            }
        });


    }
}



function examDownloadFinalReportForNew() {
    //get subject
    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0) {

        let tmpDId = document.getElementById('selectedDegreeName').value;
        dataRep["acYear"] = document.getElementById('achedamicYear').value;
        dataRep["degCode"] = tmpDId;
        dataRep["BatchNumber"] = $("#selectedBatchNumber option:selected").val();

        let getBatchData = {
            action: "getDataForBatchUpdate",
            degreeCode: dataRep["degCode"],
            academicYear: dataRep["acYear"],
            batchNumber: dataRep["BatchNumber"],
            authcode: authcode,
            username: dataRep['userId'],
        };
        $.ajax({
            type: 'POST',
            url: 'rules/batch.php',
            data: getBatchData,
            dataType: 'json',
            success: async function (batch) {
                if (batch && batch[0].status === 200) {

                    if (batch[0].credits_complete > 0) {
                        if (batch[0].pass_gpa > 0) {

                            let GPAforPass = batch[0].pass_gpa;
                            let credits_complete = batch[0].credits_complete;

                            let getSubject = {
                                action: "getSubject2",
                                degreeCode: dataRep["degCode"],
                                achedamicYear: dataRep["acYear"],
                                batchNumber: dataRep["BatchNumber"],
                                authcode: authcode,
                                username: dataRep['userId'],
                            };

                            $.ajax({
                                type: 'POST',
                                url: 'rules/subject.php',
                                data: getSubject,
                                dataType: 'json',
                                success: function (response) {
                                    let havest = false;
                                    let chkstudnetNo = [];
                                    tableFinalDataTable.rows().every(function (index) {
                                        let rowData = this.data();
                                        let checkbox = $(this.node()).find('input[type="checkbox"]');
                                        let isChecked = checkbox.prop('checked');
                                        if (isChecked) {
                                            chkstudnetNo.push(rowData[2]);
                                            havest = true;

                                        }
                                    });

                                    if (havest) {


                                        let getStudent = {
                                            action: "getStudentsinBatch_finalResult",
                                            studentNo: chkstudnetNo,
                                            degreeCode: dataRep["degCode"],
                                            achedamicYear: dataRep["acYear"],
                                            programmeTypeCode: dataRep["programmeTypeCode"],
                                            authcode: authcode,
                                            username: dataRep['userId'],
                                        };

                                        $.ajax({
                                            type: 'POST',
                                            url: 'rules/students.php',
                                            data: getStudent,
                                            dataType: 'json',
                                            success: async function (response2) {
                                                console.log(response2);
                                                let studentData = [];
                                                serchedAttemped = dataRep["selectedAttempt"];

                                                let repeatAttempt = "1";
                                                if (serchedAttemped == "RR") {
                                                    repeatAttempt = $('#selectedAttemptTime').val();
                                                }
                                                dataRep["selectedAttemptTime"] = repeatAttempt;
                                                // Store all promises in an array
                                                // const promises = response2.map(async (student) => {
                                                for (const student of response2) {


                                                    let getResult = {
                                                        action: "getFinalResult",
                                                        degreeCode: dataRep["degCode"],
                                                        achedamicYear: dataRep["acYear"],
                                                        studentNo: student.studentNo,
                                                        studentName: student.studentName,
                                                        attampt: serchedAttemped,
                                                        attamptTime: repeatAttempt,
                                                        authcode: authcode,
                                                        username: dataRep['userId'],
                                                    };

                                                    // Await the result of this AJAX call
                                                    const responseData = await $.ajax({
                                                        type: 'POST',
                                                        url: 'rules/insertMarks.php',
                                                        data: getResult,
                                                        dataType: 'json'
                                                    });

                                                    let subjectDetails = {};
                                                    let st_no_data = "";
                                                    let st_name_data = "";
                                                    let st_programmeTypeCode_data = "";

                                                    $.each(response, function (subjectIndex, subject) {
                                                        $.each(responseData, function (resultIndex, result) {
                                                            if (subject.subjectCode == result.subjectCode) {
                                                                subjectDetails[result.subjectCode] = [
                                                                    result.degreeCode, result.subjectCode, result.grade,
                                                                    result.examiner1, result.examiner2, result.marks,
                                                                    result.semester, result.medium, result.GPA
                                                                ];
                                                                if (st_no_data == "") {
                                                                    st_no_data = result.StudentNo;
                                                                    st_name_data = result.StudentName;
                                                                    st_programmeTypeCode_data = result.programmeTypeCode;
                                                                }
                                                            }
                                                        });
                                                    });
                                                    if (st_no_data != "") {
                                                        studentData.push([st_no_data, st_name_data, subjectDetails, st_programmeTypeCode_data]);
                                                    } else {
                                                        studentData.push([getResult.studentNo, getResult.studentName, subjectDetails, getResult.programmeTypeCode]);

                                                    }
                                                }
                                                // });


                                                // await Promise.all(promises);

                                                studentData.sort((a, b) => {
                                                    let extractNumber = (str) => {
                                                        // Use a regular expression to capture the last numeric part in the string
                                                        let match = str.match(/\d+$/); // This matches the last number in the string
                                                        return match ? parseInt(match[0], 10) : 0; // Convert the matched part to an integer
                                                    };

                                                    let numA = extractNumber(a[0]);
                                                    let numB = extractNumber(b[0]);

                                                    return numA - numB;
                                                });




                                                let BatchYear = document.getElementById('achedamicYear').value;
                                                let degTitle = $("#selectedDegreeName option:selected").text();


                                                let newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
                                                newStr += "<div id='topics1' class='info'></div>";
                                                newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
                                                newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
                                                newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
                                                newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";


                                                newStr += "<br>";
                                                newStr += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
                                                newStr += "<tr>";
                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan='2'>No</th>";
                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan='2'>Student No</th>";
                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan='2'>Name</th>";



                                                let sem0Count = 0;
                                                let sem1Count = 0;
                                                let sem2Count = 0;
                                                let sem3Count = 0;
                                                let sem4Count = 0;
                                                let sem5Count = 0;
                                                let sem6Count = 0;
                                                let sem7Count = 0;
                                                let sem8Count = 0;
                                                let sem1CreditComplesery = 0;
                                                let sem1OptionalComplesery = 0;
                                                let TotalCredit = 0;
                                                $.each(response, function (subjectIndex, subject) {

                                                    TotalCredit = TotalCredit + subject.credits;


                                                    if (subject.subjectSemester == 0) {
                                                        sem0Count++;
                                                    }
                                                    if (subject.subjectSemester == 1) {
                                                        sem1Count++;
                                                        if ((subject.sstatus).toUpperCase() == 'C') {
                                                            sem1CreditComplesery = sem1CreditComplesery + subject.credits
                                                        }
                                                        if ((subject.sstatus).toUpperCase() == 'O') {
                                                            sem1OptionalComplesery = sem1OptionalComplesery + subject.credits
                                                        }
                                                    }
                                                    if (subject.subjectSemester == 2) {
                                                        sem2Count++;
                                                    }
                                                    if (subject.subjectSemester == 3) {
                                                        sem3Count++;
                                                    }
                                                    if (subject.subjectSemester == 4) {
                                                        sem4Count++;
                                                    }
                                                    if (subject.subjectSemester == 5) {
                                                        sem5Count++;
                                                    }
                                                    if (subject.subjectSemester == 6) {
                                                        sem6Count++;
                                                    }
                                                    if (subject.subjectSemester == 7) {
                                                        sem7Count++;
                                                    }
                                                    if (subject.subjectSemester == 8) {
                                                        sem8Count++;
                                                    }
                                                });


                                                if (sem1Count > 0) {
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem1Count * 3) + '">Semester 1</td>';
                                                }
                                                if (sem2Count > 0) {
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem2Count * 3) + '">Semester 2</td>';
                                                }
                                                if (sem3Count > 0) {
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem3Count * 3) + '">Semester 3</td>';
                                                }
                                                if (sem4Count > 0) {
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem4Count * 3) + '">Semester 4</td>';
                                                }
                                                if (sem5Count > 0) {
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem5Count * 3) + '">Semester 5</td>';
                                                }
                                                if (sem6Count > 0) {
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem6Count * 3) + '">Semester 6</td>';
                                                }
                                                if (sem7Count > 0) {
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem7Count * 3) + '">Semester 7</td>';
                                                }
                                                if (sem8Count > 0) {
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem8Count * 3) + '">Semester 8</td>';
                                                }
                                                if (sem0Count > 0) {
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem0Count * 3) + '">End Semester</td>';
                                                }

                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan='2'>GPA</th>";
                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan='2'>Completed Credit</th>";
                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan='2'>Result Status</th>";

                                                newStr += "</tr>";
                                                newStr += "<tr>";

                                                $.each(response, function (subjectIndex, subject) {
                                                    newStr += '<th style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="3">' + subject.subjectCode + '</th>';

                                                });
                                                newStr += "</tr>";

                                                for (var j = 0; j < subDownLength; j++) {
                                                    if (tmpSemesterArr[j] == '0' && sem0Count != 0) {
                                                        newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem0Count + 1) + '">Semester 0</td>';
                                                        sem0Count = 0;
                                                    } else if (tmpSemesterArr[j] == '1' && sem1Count != 0) {
                                                        newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem1Count + 1) + '">Semester 1</td>';
                                                        sem1Count = 0;
                                                    } else if (tmpSemesterArr[j] == '2' && sem2Count != 0) {
                                                        newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem2Count + 1) + '">Semester 2</td>';
                                                        sem2Count = 0;
                                                    } else if (tmpSemesterArr[j] == '3' && sem3Count != 0) {
                                                        newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem3Count + 1) + '">Semester 3</td>';
                                                        sem3Count = 0;
                                                    } else if (tmpSemesterArr[j] == '4' && sem4Count != 0) {
                                                        newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem4Count + 1) + '">Semester 4</td>';
                                                        sem4Count = 0;
                                                    }
                                                }

                                                newStr += "</tr>";
                                                let st_count = 0;
                                                $.each(studentData, function (stIn, studentRe) {
                                                    st_count++;
                                                    newStr += "<tr>";
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + st_count + '</td>';
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:left">' + studentRe[0] + '</td>';
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:left">' + studentRe[1] + '</td>';



                                                    let studentPartisipateCredit = 0; // as a partisipate must be have 2.0 credits
                                                    let studentPartisipateSubject = 0; // 
                                                    let studentEarnCredit = 0;

                                                    let hasAbsent = false;
                                                    let hasRepeat = false;
                                                    let notContinue = true;
                                                    // console.log('-------------------------------------------------------');                                               
                                                    // console.log(studentRe[0] );
                                                    // console.log(studentRe[2]);

                                                    $.each(response, function (subjectIndex, subject) {

                                                        if (studentRe[2][subject.subjectCode]) {
                                                            if (parseFloat(studentRe[2][subject.subjectCode][8]) >= parseFloat(GPAforPass)) {
                                                                notContinue = false;
                                                                studentEarnCredit = parseFloat(studentEarnCredit) + (parseFloat(studentRe[2][subject.subjectCode][8]) * parseFloat(subject.credits));
                                                                studentPartisipateCredit = parseFloat(studentPartisipateCredit) + parseFloat(subject.credits);
                                                                // console.log(subject.subjectCode + " - "+subject.credits);

                                                                studentPartisipateSubject++;
                                                            } else {
                                                                if (studentRe[2][subject.subjectCode][5] == 125) {
                                                                    hasAbsent = true;
                                                                }
                                                                if (parseFloat(studentRe[2][subject.subjectCode][8]) < parseFloat(GPAforPass)) {
                                                                    hasRepeat = true;
                                                                }
                                                            }
                                                            let color = "";
                                                            if (studentRe[2][subject.subjectCode][5] == 125 || parseFloat(studentRe[2][subject.subjectCode][8]) < parseFloat(GPAforPass)) {
                                                                color = "#ff4747";
                                                            } else {
                                                                color = "#000";

                                                            }
                                                            if (studentRe[2][subject.subjectCode][5] == 125) {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">-</td>';
                                                            } else {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][5] + '</td>';
                                                            }
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][2] + '</td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][8] + '</td>';

                                                        } else {
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                        }
                                                    });

                                                    let credit = credits_complete;
                                                    let status = "";

                                                    // console.log('-------------------------------------------------------');                                               
                                                    // console.log(studentEarnCredit);
                                                    // console.log(studentPartisipateSubject);
                                                    // console.log(studentPartisipateCredit);
                                                    // console.log('-------------------------------------------------------');


                                                    let gpa = (studentEarnCredit / studentPartisipateCredit).toFixed(2);

                                                    if (studentPartisipateCredit >= credit) {
                                                        if (gpa >= parseFloat(GPAforPass)) {
                                                            status = "Pass";
                                                        } else {
                                                            let hasAbsent = false;
                                                            let hasRepeat = false;
                                                            let notContinue = true;
                                                            if (notContinue) {
                                                                status = "Not Participant";
                                                                status = "Not Yet Completed";
                                                            } else if (hasAbsent) {
                                                                status = "Has absent subject/s";
                                                            } else if (hasRepeat) {
                                                                status = "Has repeat subject/s";
                                                            } else {
                                                                status = "Repeat/Fail";
                                                            }
                                                        }
                                                    } else {
                                                        if (notContinue) {
                                                            status = "Not Participant";
                                                            status = "Not Yet Completed";

                                                        } else if (hasAbsent) {
                                                            status = "Has absent subject/s";
                                                        } else if (hasRepeat) {
                                                            status = "Has repeat subject/s";
                                                        } else {
                                                            status = "Not Yet Completed";
                                                        }
                                                    }

                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + gpa + '</td>';
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + studentPartisipateCredit + '</td>';
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center">' + status + '</td>';

                                                    newStr += "</tr>";
                                                });
                                                newStr += "</table>";

                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";


                                                var exportFilename = BatchYear + " - English - " + degTitle + " Final Result Sheet.xls";
                                                var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

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



                                                // console.log(newStr);
                                                // console.log(studentData);








                                            }, error: function (error) {
                                                console.log(error)

                                            }
                                        });
                                    } else {
                                        Swal.fire({
                                            icon: 'warning',
                                            title: 'Alert',
                                            text: "Please select at least one student."
                                        });
                                    }
                                }
                            });
                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Alert',
                                text: "Batch not updated. This batch hasn't set the required GPA to qualify for the degree."
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Alert',
                            text: "Batch not updated. This batch hasn't set the required credit limit to qualify for the degree."
                        });
                    }

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Alert',
                        text: 'Batch Not Availble.'
                    });
                }
            }
        });


    }
}


function examDownloadFinalReportForNew2() {
    //get subject
    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0) {

        let tmpDId = document.getElementById('selectedDegreeName').value;
        dataRep["acYear"] = document.getElementById('achedamicYear').value;
        dataRep["degCode"] = tmpDId;
        dataRep["BatchNumber"] = $("#selectedBatchNumber option:selected").val();

        let getBatchData = {
            action: "getDataForBatchUpdate",
            degreeCode: dataRep["degCode"],
            academicYear: dataRep["acYear"],
            batchNumber: dataRep["BatchNumber"],
            authcode: authcode,
            username: dataRep['userId'],
        };
        $.ajax({
            type: 'POST',
            url: 'rules/batch.php',
            data: getBatchData,
            dataType: 'json',
            success: async function (batch) {
                if (batch && batch[0].status === 200) {

                    if (batch[0].credits_complete > 0) {
                        if (batch[0].pass_gpa > 0) {

                            let GPAforPass = batch[0].pass_gpa;
                            let credits_complete = batch[0].credits_complete;

                            let getSubject = {
                                action: "getSubject2",
                                degreeCode: dataRep["degCode"],
                                achedamicYear: dataRep["acYear"],
                                batchNumber: dataRep["BatchNumber"],
                                authcode: authcode,
                                username: dataRep['userId'],
                            };

                            $.ajax({
                                type: 'POST',
                                url: 'rules/subject.php',
                                data: getSubject,
                                dataType: 'json',
                                success: function (response) {
                                    let havest = false;
                                    let chkstudnetNo = [];
                                    tableFinalDataTable.rows().every(function (index) {
                                        let rowData = this.data();
                                        let checkbox = $(this.node()).find('input[type="checkbox"]');
                                        let isChecked = checkbox.prop('checked');
                                        if (isChecked) {
                                            chkstudnetNo.push(rowData[2]);
                                            havest = true;

                                        }
                                    });

                                    if (havest) {


                                        let getStudent = {
                                            action: "getStudentsinBatch_finalResult",
                                            studentNo: chkstudnetNo,
                                            degreeCode: dataRep["degCode"],
                                            achedamicYear: dataRep["acYear"],
                                            programmeTypeCode: dataRep["programmeTypeCode"],
                                            authcode: authcode,
                                            username: dataRep['userId'],
                                        };

                                        $.ajax({
                                            type: 'POST',
                                            url: 'rules/students.php',
                                            data: getStudent,
                                            dataType: 'json',
                                            success: async function (response2) {
                                                console.log(response2);
                                                let studentData = [];
                                                serchedAttemped = dataRep["selectedAttempt"];

                                                let repeatAttempt = "1";
                                                if (serchedAttemped == "RR") {
                                                    repeatAttempt = $('#selectedAttemptTime').val();
                                                }
                                                dataRep["selectedAttemptTime"] = repeatAttempt;
                                                // Store all promises in an array
                                                // const promises = response2.map(async (student) => {
                                                for (const student of response2) {


                                                    let getResult = {
                                                        action: "getFinalResult2",
                                                        degreeCode: dataRep["degCode"],
                                                        achedamicYear: dataRep["acYear"],
                                                        studentNo: student.studentNo,
                                                        studentName: student.studentName,
                                                        attampt: serchedAttemped,
                                                        attamptTime: repeatAttempt,
                                                        authcode: authcode,
                                                        username: dataRep['userId'],
                                                    };

                                                    // Await the result of this AJAX call
                                                    const responseData = await $.ajax({
                                                        type: 'POST',
                                                        url: 'rules/insertMarks.php',
                                                        data: getResult,
                                                        dataType: 'json'
                                                    });

                                                    let subjectDetails = {};
                                                    let st_no_data = "";
                                                    let st_name_data = "";
                                                    let st_programmeTypeCode_data = "";

                                                    $.each(response, function (subjectIndex, subject) {
                                                        $.each(responseData, function (resultIndex, result) {
                                                            if (subject.subjectCode == result.subjectCode) {
                                                                subjectDetails[result.subjectCode] = [
                                                                    result.degreeCode, result.subjectCode, result.grade,
                                                                    result.examiner1, result.examiner2, result.marks,
                                                                    result.semester, result.medium, result.GPA,
                                                                    result.firstAttempt,
                                                                    result.repeatAttempt,
                                                                    result.reRepeatAttempt1,
                                                                    result.reRepeatAttempt2,
                                                                    result.reRepeatAttempt3,
                                                                    result.reRepeatAttempt4,
                                                                    result.reRepeatAttempt5,
                                                                ];
                                                                if (st_no_data == "") {
                                                                    st_no_data = result.StudentNo;
                                                                    st_name_data = result.StudentName;
                                                                    st_programmeTypeCode_data = result.programmeTypeCode;
                                                                }
                                                            }
                                                        });
                                                    });
                                                    if (st_no_data != "") {
                                                        studentData.push([st_no_data, st_name_data, subjectDetails, st_programmeTypeCode_data]);
                                                    } else {
                                                        studentData.push([getResult.studentNo, getResult.studentName, subjectDetails, getResult.programmeTypeCode]);

                                                    }
                                                }
                                                // });


                                                // await Promise.all(promises);

                                                studentData.sort((a, b) => {
                                                    let extractNumber = (str) => {
                                                        // Use a regular expression to capture the last numeric part in the string
                                                        let match = str.match(/\d+$/); // This matches the last number in the string
                                                        return match ? parseInt(match[0], 10) : 0; // Convert the matched part to an integer
                                                    };

                                                    let numA = extractNumber(a[0]);
                                                    let numB = extractNumber(b[0]);

                                                    return numA - numB;
                                                });




                                                let BatchYear = document.getElementById('achedamicYear').value;
                                                let degTitle = $("#selectedDegreeName option:selected").text();


                                                let newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
                                                newStr += "<div id='topics1' class='info'></div>";
                                                newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
                                                newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
                                                newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
                                                newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";


                                                newStr += "<br>";
                                                newStr += "<table style='border-collapse: collapse;border: 1px solid #524f4f;'>";
                                                newStr += "<tr>";
                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan=''>No</th>";
                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan=''>Student No</th>";
                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan=''>Name</th>";
                                                newStr += "<th style='border: 1px solid #524f4f;' rowspan=''>Course Code</th>";



                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="2">First</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="2">Repeat</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="2">Re-Repeat 1</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="2">Re-Repeat 2</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="2">Re-Repeat 3</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="2">Re-Repeat 4</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="2">Re-Repeat 5</td>';
                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="2">Final</td>';


                                                newStr += "</tr>";

                                                let subject_count = response.length;;
                                                let st_count = 0;
                                                $.each(studentData, function (stIn, studentRe) {
                                                    st_count++;
                                                    newStr += "<tr>";
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center" rowspan="' + subject_count + '">' + st_count + '</td>';
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:left" rowspan="' + subject_count + '">' + studentRe[0] + '</td>';
                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:left" rowspan="' + subject_count + '">' + studentRe[1] + '</td>';



                                                    let studentPartisipateCredit = 0; // as a partisipate must be have 2.0 credits
                                                    let studentPartisipateSubject = 0; // 
                                                    let studentEarnCredit = 0;

                                                    let hasAbsent = false;
                                                    let hasRepeat = false;
                                                    let notContinue = true;
                                                    // console.log('-------------------------------------------------------');                                               
                                                    // console.log(studentRe[0] );
                                                    // console.log(studentRe[2]);
                                                    let subreccount = 0;
                                                    $.each(response, function (subjectIndex, subject) {
                                                        if (subreccount != 0) {
                                                            newStr += "<tr>";
                                                        }
                                                        subreccount++;
                                                        newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;">' + subject.subjectCode + '</td>';

                                                        if (studentRe[2][subject.subjectCode]) {
                                                            let color = "";

                                                            //First    
                                                            if (studentRe[2][subject.subjectCode][9]) {

                                                                if (studentRe[2][subject.subjectCode][9]['Marks'] == 125) {
                                                                    color = "#ff4747";
                                                                } else {
                                                                    color = "#000";
                                                                }
                                                                if (studentRe[2][subject.subjectCode][9]['Marks'] == 125) {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">-</td>';
                                                                } else {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][9]['Marks'] + '</td>';
                                                                }
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][9]['Grade'] + '</td>';
                                                            } else {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                            }

                                                            // Repaet
                                                            if (studentRe[2][subject.subjectCode][10]) {
                                                                if (studentRe[2][subject.subjectCode][10]['Marks'] == 125) {
                                                                    color = "#ff4747";
                                                                } else {
                                                                    color = "#000";
                                                                }
                                                                if (studentRe[2][subject.subjectCode][10]['Marks'] == 125) {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">-</td>';
                                                                } else {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][10]['Marks'] + '</td>';
                                                                }
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][10]['Grade'] + '</td>';
                                                            } else {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                            }


                                                            // ReRepaet 1
                                                            if (studentRe[2][subject.subjectCode][11]) {
                                                                if (studentRe[2][subject.subjectCode][11]['Marks'] == 125) {
                                                                    color = "#ff4747";
                                                                } else {
                                                                    color = "#000";
                                                                }
                                                                if (studentRe[2][subject.subjectCode][11]['Marks'] == 125) {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">-</td>';
                                                                } else {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][11]['Marks'] + '</td>';
                                                                }
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][11]['Grade'] + '</td>';
                                                            } else {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                            }

                                                            // ReRepaet 2
                                                            if (studentRe[2][subject.subjectCode][12]) {
                                                                if (studentRe[2][subject.subjectCode][12]['Marks'] == 125) {
                                                                    color = "#ff4747";
                                                                } else {
                                                                    color = "#000";
                                                                }
                                                                if (studentRe[2][subject.subjectCode][12]['Marks'] == 125) {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">-</td>';
                                                                } else {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][12]['Marks'] + '</td>';
                                                                }
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][12]['Grade'] + '</td>';
                                                            } else {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                            }

                                                            // ReRepaet 3
                                                            if (studentRe[2][subject.subjectCode][13]) {
                                                                if (studentRe[2][subject.subjectCode][13]['Marks'] == 125) {
                                                                    color = "#ff4747";
                                                                } else {
                                                                    color = "#000";
                                                                }
                                                                if (studentRe[2][subject.subjectCode][13]['Marks'] == 125) {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">-</td>';
                                                                } else {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][13]['Marks'] + '</td>';
                                                                }
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][13]['Grade'] + '</td>';
                                                            } else {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                            }

                                                            // ReRepaet 4
                                                            if (studentRe[2][subject.subjectCode][14]) {
                                                                if (studentRe[2][subject.subjectCode][14]['Marks'] == 125) {
                                                                    color = "#ff4747";
                                                                } else {
                                                                    color = "#000";
                                                                }
                                                                if (studentRe[2][subject.subjectCode][14]['Marks'] == 125) {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">-</td>';
                                                                } else {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][14]['Marks'] + '</td>';
                                                                }
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][14]['Grade'] + '</td>';
                                                            } else {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                            }

                                                            // ReRepaet 5
                                                            if (studentRe[2][subject.subjectCode][15]) {
                                                                if (studentRe[2][subject.subjectCode][15]['Marks'] == 125) {
                                                                    color = "#ff4747";
                                                                } else {
                                                                    color = "#000";
                                                                }
                                                                if (studentRe[2][subject.subjectCode][15]['Marks'] == 125) {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">-</td>';
                                                                } else {
                                                                    newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][15]['Marks'] + '</td>';
                                                                }
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][15]['Grade'] + '</td>';
                                                            } else {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;"></td>';
                                                            }

                                                            // Final
                                                            if (studentRe[2][subject.subjectCode][5] == 125 || parseFloat(studentRe[2][subject.subjectCode][8]) < parseFloat(GPAforPass)) {
                                                                color = "#ff4747";
                                                            } else {
                                                                color = "#000";
                                                            }
                                                            if (studentRe[2][subject.subjectCode][5] == 125) {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">-</td>';
                                                            } else {
                                                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][5] + '</td>';
                                                            }
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][2] + '</td>';

                                                        } else {
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';

                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';

                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';

                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';

                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';

                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';

                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';

                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                            newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                        }

                                                    });


                                                    newStr += "</tr>";
                                                });
                                                newStr += "</table>";

                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
                                                newStr += "<br>";
                                                newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";


                                                var exportFilename = BatchYear + " - English - " + degTitle + " Final Result Sheet.xls";
                                                var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

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



                                                // console.log(newStr);
                                                // console.log(studentData);








                                            }, error: function (error) {
                                                console.log(error)

                                            }
                                        });
                                    } else {
                                        Swal.fire({
                                            icon: 'warning',
                                            title: 'Alert',
                                            text: "Please select at least one student."
                                        });
                                    }
                                }
                            });
                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Alert',
                                text: "Batch not updated. This batch hasn't set the required GPA to qualify for the degree."
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Alert',
                            text: "Batch not updated. This batch hasn't set the required credit limit to qualify for the degree."
                        });
                    }

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Alert',
                        text: 'Batch Not Availble.'
                    });
                }
            }
        });


    }
}



function examDownloadSubjectGradesForNew() {
    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0
        && dataRep["selectedMedium"] != ""
        && dataRep["selectedAttempt"] != ""
        && dataRep["selectedSemester"] != ""
        && document.getElementById('selectedSubject').value != "") {
        let tmpDId = document.getElementById('selectedDegreeName').value;
        dataRep["degCode"] = tmpDId;
        dataRep["degSem"] = dataRep["selectedSemester"];
        dataRep["degAttmp"] = dataRep["selectedAttempt"];

        dataRep["degSub"] = document.getElementById('selectedSubject').value;
        dataRep["acYear"] = document.getElementById('achedamicYear').value;

        let degTitle = $("#selectedDegreeName option:selected").text();
        let SubName = $("#selectedSubject option:selected").text();
        let SubCode = document.getElementById('selectedSubject').value;
        let BatchYear = document.getElementById('achedamicYear').value;
        let showSem = dataRep["degSem"];

        let selectedAttmTime = 0;
        if (dataRep["degAttmp"] == "RR") {
            selectedAttmTime = document.getElementById('selectedAttemptTime').value;
        }
        resetResultUpload();
        let postData = {
            action: "getExamMarkSheetData",
            degreeCode: dataRep["degCode"],
            SubjectCode: dataRep["degSub"],
            Semester: dataRep["degSem"],
            AchademicYear: dataRep["acYear"],
            attemp: dataRep["degAttmp"],
            medium: dataRep["selectedMedium"],
            attemptime: selectedAttmTime,
            authcode: authcode,
            username: dataRep['userId'],
            // serchedAttemptTime = dataRep["selectedAttemptTime"];
        };

        $.ajax({
            type: 'POST',
            url: 'rules/students.php',
            data: postData,
            dataType: 'json',
            success: async function (response) {
                console.log(postData)
                let SubName = response[0].subjectTitle;

                tmpDownStudNoArr.length = 0;
                tmpDownStudNameArr.length = 0;
                tmpDownGradeArr.length = 0;
                tmpDownExm1Arr.length = 0;
                tmpDownExm2Arr.length = 0;
                tmpDownMarksArr.length = 0;
                ex_studentMediumArr.length = 0;
                ex_studentRStatusArr.length = 0;
                tmpDownLength = 0;
                console.log(response);
                $.each(response, function (index, data) {
                    tmpDownStudNoArr[tmpDownLength] = data.SudentNoSub;
                    tmpDownStudNameArr[tmpDownLength] = data.StudentName;
                    tmpDownGradeArr[tmpDownLength] = data.Grade;
                    tmpDownExm1Arr[tmpDownLength] = data.Examiner1;
                    tmpDownExm2Arr[tmpDownLength] = data.Examiner2;
                    tmpDownMarksArr[tmpDownLength] = data.Marks;
                    ex_studentMediumArr[tmpDownLength] = data.studentMedium;
                    ex_studentRStatusArr[tmpDownLength] = data.RStatus;
                    tmpDownLength++;
                });


                if (tmpDownLength != 0) {

                    let attempType = "";
                    if (postData.attemp == "F") {
                        attempType = "First Time Examination Results";
                    } else if (postData.attemp == "R") {
                        attempType = "Repeat Examination Results";
                    } else if (postData.attemp == "RR") {
                        if (postData.attemptime != 1) {
                            attempType = "Re-Repeat - Attempt " + postData.attemptime + " Examination Results";
                        } else {
                            attempType = "Re-Repeat Examination Results";
                        }

                    }

                    const response = await fetch(host + 'images/fgslogo.png'); // Replace with actual image URL
                    const imageBlob = await response.blob();
                    const imageArrayBuffer = await imageBlob.arrayBuffer();


                    const { Document, ImageRun, convertInchesToTwip, Packer, Paragraph, Table, TableRow, TableCell, TextRun, AlignmentType, WidthType, Footer, PageNumber } = docx;

                    let showSemValue = showSem == 0 ? "End Semester" : showSem;
                    let currentDate = new Date().toLocaleString();
                    let countEn = 0;
                    let docEn = new Document({
                        sections: [{
                            properties: {
                                page: {
                                    top: 0,  // 0.5 inches converted to twips (72 points per inch)
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                            footers: {
                                default: new Footer({
                                    children: [

                                        new Table({
                                            width: { size: 100, type: WidthType.PERCENTAGE },
                                            rows: [
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`${SubName} (${SubCode}) - ` + `Academic Year - ${BatchYear} - ` + `Semester - ${showSemValue} - ${attempType} (English Medium)`),
                                                                        // new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`Signature of the coordinator:____________________`),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun(` `),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun("Page "),
                                                                        new TextRun({
                                                                            children: [PageNumber.CURRENT],
                                                                        }),
                                                                        new TextRun(" of "),
                                                                        new TextRun({
                                                                            children: [PageNumber.TOTAL_PAGES],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],

                                            borders: {
                                                top: { size: 0 }, // No border for top
                                                bottom: { size: 0 }, // No border for bottom
                                                left: { size: 0 }, // No left border
                                                right: { size: 0 }, // No right border
                                                insideHorizontal: { size: 0 }, // No horizontal border inside
                                                insideVertical: { size: 0 }, // No vertical border inside
                                            },
                                        }),

                                    ],
                                }),
                            },

                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: imageArrayBuffer, // Use the fetched image
                                            transformation: {
                                                width: 300,
                                                height: 80,
                                            },
                                            altText: {
                                                title: "This is an ultimate title",
                                                description: "This is an ultimate image",
                                                name: "My Ultimate Image",
                                            },
                                        }),

                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [

                                        new TextRun({
                                            text: `${degTitle} Degree Programme`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${attempType}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${SubName} (${SubCode})`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Academic Year - ${BatchYear}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Semester - ${showSemValue}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Grade Sheet`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            tableHeader: true,
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    width: { size: 6, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Student No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    width: { size: 14, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Name",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    width: { size: 50, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Grade",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                            ],
                                        }),
                                        ...tmpDownStudNoArr
                                            .map((studNo, index) => {
                                                if (ex_studentMediumArr[index] === "en" && ex_studentRStatusArr[index] != 0) {
                                                    countEn++;
                                                    if (tmpDownExm1Arr[index] == '125') {
                                                        tmpDownExm1Arr[index] = '-';
                                                    }
                                                    if (tmpDownExm2Arr[index] == '125') {
                                                        tmpDownExm2Arr[index] = '-';
                                                    }
                                                    if (tmpDownMarksArr[index] == '125') {
                                                        tmpDownMarksArr[index] = '(ab)';
                                                    }
                                                    return new TableRow({
                                                        children: [
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: {
                                                                            line: 300                    // Increase the line height (you can adjust the value as needed)
                                                                        },
                                                                        // Center text vertically
                                                                        children: [new TextRun((countEn).toString())]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: { line: 300 },          // Increase the line height (adjust as needed)
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(studNo)]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.LEFT,   // Align text to the left
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        children: [new TextRun(tmpDownStudNameArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownGradeArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),

                                                        ],
                                                    })
                                                }
                                                return null;

                                            }).filter(row => row !== null)
                                    ],
                                }),

                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Coordinator:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Head of the Department: ____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`BoS Chair:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),

                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Dean/Faculty of Graduate Studies:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        })
                                    ],

                                    borders: {
                                        top: { size: 0 }, // No border for top
                                        bottom: { size: 0 }, // No border for bottom
                                        left: { size: 0 }, // No left border
                                        right: { size: 0 }, // No right border
                                        insideHorizontal: { size: 0 }, // No horizontal border inside
                                        insideVertical: { size: 0 }, // No vertical border inside
                                    },
                                }),
                            ],

                        }],
                    });

                    let countSi = 0;
                    let docSi = new Document({
                        sections: [{
                            properties: {
                                page: {
                                    top: 0,  // 0.5 inches converted to twips (72 points per inch)
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                            footers: {
                                default: new Footer({
                                    children: [

                                        new Table({
                                            width: { size: 100, type: WidthType.PERCENTAGE },
                                            rows: [
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`${SubName} (${SubCode}) - ` + `Academic Year - ${BatchYear} - ` + `Semester - ${showSemValue} - ${attempType} (English Medium)`),
                                                                        // new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`Signature of the coordinator:____________________`),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun(` `),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun("Page "),
                                                                        new TextRun({
                                                                            children: [PageNumber.CURRENT],
                                                                        }),
                                                                        new TextRun(" of "),
                                                                        new TextRun({
                                                                            children: [PageNumber.TOTAL_PAGES],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],

                                            borders: {
                                                top: { size: 0 }, // No border for top
                                                bottom: { size: 0 }, // No border for bottom
                                                left: { size: 0 }, // No left border
                                                right: { size: 0 }, // No right border
                                                insideHorizontal: { size: 0 }, // No horizontal border inside
                                                insideVertical: { size: 0 }, // No vertical border inside
                                            },
                                        }),

                                    ],
                                }),
                            },

                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: imageArrayBuffer, // Use the fetched image
                                            transformation: {
                                                width: 300,
                                                height: 80,
                                            },
                                            altText: {
                                                title: "This is an ultimate title",
                                                description: "This is an ultimate image",
                                                name: "My Ultimate Image",
                                            },
                                        }),

                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [

                                        new TextRun({
                                            text: `${degTitle} Degree Programme`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${attempType}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${SubName} (${SubCode})`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Academic Year - ${BatchYear}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Semester - ${showSemValue}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Grade Sheet`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            tableHeader: true,
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    width: { size: 6, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Student No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    width: { size: 14, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Name",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    width: { size: 50, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Grade",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                            ],
                                        }),
                                        ...tmpDownStudNoArr
                                            .map((studNo, index) => {
                                                if (ex_studentMediumArr[index] === "si" && ex_studentRStatusArr[index] != 0) {
                                                    countSi++;
                                                    if (tmpDownExm1Arr[index] == '125') {
                                                        tmpDownExm1Arr[index] = '-';
                                                    }
                                                    if (tmpDownExm2Arr[index] == '125') {
                                                        tmpDownExm2Arr[index] = '-';
                                                    }
                                                    if (tmpDownMarksArr[index] == '125') {
                                                        tmpDownMarksArr[index] = '(ab)';
                                                    }
                                                    return new TableRow({
                                                        children: [
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: {
                                                                            line: 300                    // Increase the line height (you can adjust the value as needed)
                                                                        },
                                                                        // Center text vertically
                                                                        children: [new TextRun((countSi).toString())]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: { line: 300 },          // Increase the line height (adjust as needed)
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(studNo)]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.LEFT,   // Align text to the left
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        children: [new TextRun(tmpDownStudNameArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownGradeArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),

                                                        ],
                                                    })
                                                }
                                                return null;

                                            }).filter(row => row !== null)
                                    ],
                                }),
                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Coordinator:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Head of the Department: ____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`BoS Chair:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),

                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Dean/Faculty of Graduate Studies:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        })
                                    ],

                                    borders: {
                                        top: { size: 0 }, // No border for top
                                        bottom: { size: 0 }, // No border for bottom
                                        left: { size: 0 }, // No left border
                                        right: { size: 0 }, // No right border
                                        insideHorizontal: { size: 0 }, // No horizontal border inside
                                        insideVertical: { size: 0 }, // No vertical border inside
                                    },
                                }),
                            ],

                        }],
                    });


                    if (countEn > 0) {
                        Packer.toBlob(docEn).then(blob => {
                            let exportFilename = `Grade Sheet - ${BatchYear} - ${SubCode} English Medium.docx`;
                            saveAs(blob, exportFilename);
                        });
                    }

                    if (countSi > 0) {
                        Packer.toBlob(docSi).then(blob => {
                            let exportFilename = `Grade Sheet - ${BatchYear} - ${SubCode} Sinhala Medium.docx`;
                            saveAs(blob, exportFilename);
                        });
                    }



                } else {
                    // resetResultDownload()
                    Swal.fire({
                        icon: 'warning',
                        title: 'Alert',
                        text: 'Data not available'
                    });

                }




            }, error: function (error) {
                console.log(error)

            }
        });


    } else {
        if (document.getElementById('selectedDegreeName').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Degree',
                text: 'Please select a degree from the list.'
            });
        } else if (document.getElementById('achedamicYear').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Academic Year',
                text: 'Please select an academic year from the list.'
            });
        } else if (dataRep["selectedMedium"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Medium',
                text: 'Please select a medium from the options.'
            });
        } else if (document.getElementById('selectedSubject').value == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Paper Code',
                text: 'Please enter a paper code.'
            });
        } else if (dataRep["selectedAttempt"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Attempt',
                text: 'Please select an attempt from the options.'
            });
        } else if (dataRep["selectedSemester"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Semester',
                text: 'Please select a semester from the options.'
            });
        }
    }
}


function examDownloadSubjectMarksForNew() {
    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0
        && dataRep["selectedMedium"] != ""
        && dataRep["selectedAttempt"] != ""
        && dataRep["selectedSemester"] != ""
        && document.getElementById('selectedSubject').value != "") {
        let tmpDId = document.getElementById('selectedDegreeName').value;
        dataRep["degCode"] = tmpDId;
        dataRep["degSem"] = dataRep["selectedSemester"];
        dataRep["degAttmp"] = dataRep["selectedAttempt"];

        dataRep["degSub"] = document.getElementById('selectedSubject').value;
        dataRep["acYear"] = document.getElementById('achedamicYear').value;

        let degTitle = $("#selectedDegreeName option:selected").text();
        let SubName = $("#selectedSubject option:selected").text();
        let SubCode = document.getElementById('selectedSubject').value;
        let BatchYear = document.getElementById('achedamicYear').value;
        let showSem = dataRep["degSem"];

        let selectedAttmTime = 0;
        if (dataRep["degAttmp"] == "RR") {
            selectedAttmTime = document.getElementById('selectedAttemptTime').value;
        }
        resetResultUpload();
        let postData = {
            action: "getExamMarkSheetData",
            degreeCode: dataRep["degCode"],
            SubjectCode: dataRep["degSub"],
            Semester: dataRep["degSem"],
            AchademicYear: dataRep["acYear"],
            attemp: dataRep["degAttmp"],
            medium: dataRep["selectedMedium"],
            attemptime: selectedAttmTime,
            authcode: authcode,
            username: dataRep['userId'],
            // serchedAttemptTime = dataRep["selectedAttemptTime"];


        };

        $.ajax({
            type: 'POST',
            url: 'rules/students.php',
            data: postData,
            dataType: 'json',
            success: async function (response) {
                console.log(postData)
                let SubName = response[0].subjectTitle;

                tmpDownStudNoArr.length = 0;
                tmpDownStudNameArr.length = 0;
                tmpDownGradeArr.length = 0;
                tmpDownExm1Arr.length = 0;
                tmpDownExm2Arr.length = 0;
                tmpDownMarksArr.length = 0;
                ex_studentMediumArr.length = 0;
                ex_studentRStatusArr.length = 0;
                tmpDownLength = 0;
                console.log(response);
                $.each(response, function (index, data) {
                    tmpDownStudNoArr[tmpDownLength] = data.SudentNoSub;
                    tmpDownStudNameArr[tmpDownLength] = data.StudentName;
                    tmpDownGradeArr[tmpDownLength] = data.Grade;
                    tmpDownExm1Arr[tmpDownLength] = data.Examiner1;
                    tmpDownExm2Arr[tmpDownLength] = data.Examiner2;
                    tmpDownMarksArr[tmpDownLength] = data.Marks;
                    ex_studentMediumArr[tmpDownLength] = data.studentMedium;
                    ex_studentRStatusArr[tmpDownLength] = data.RStatus;
                    tmpDownLength++;
                });


                if (tmpDownLength != 0) {

                    let attempType = "";
                    if (postData.attemp == "F") {
                        attempType = "First Time Examination Results";
                    } else if (postData.attemp == "R") {
                        attempType = "Repeat Examination Results";
                    } else if (postData.attemp == "RR") {
                        if (postData.attemptime != 1) {
                            attempType = "Re-Repeat - Attempt " + postData.attemptime + " Examination Results";
                        } else {
                            attempType = "Re-Repeat Examination Results";
                        }

                    }

                    const response = await fetch(host + 'images/fgslogo.png'); // Replace with actual image URL
                    const imageBlob = await response.blob();
                    const imageArrayBuffer = await imageBlob.arrayBuffer();


                    const { Document, ImageRun, convertInchesToTwip, Packer, Paragraph, Table, TableRow, TableCell, TextRun, AlignmentType, WidthType, Footer, PageNumber } = docx;

                    let showSemValue = showSem == 0 ? "End Semester" : showSem;
                    let currentDate = new Date().toLocaleString();
                    let countEn = 0;
                    let docEn = new Document({
                        sections: [{
                            properties: {
                                page: {
                                    top: 0,  // 0.5 inches converted to twips (72 points per inch)
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                            footers: {
                                default: new Footer({
                                    children: [

                                        new Table({
                                            width: { size: 100, type: WidthType.PERCENTAGE },
                                            rows: [
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`${SubName} (${SubCode}) - ` + `Academic Year - ${BatchYear} - ` + `Semester - ${showSemValue} - ${attempType} (English Medium)`),
                                                                        // new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`Signature of the coordinator:____________________`),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun(` `),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun("Page "),
                                                                        new TextRun({
                                                                            children: [PageNumber.CURRENT],
                                                                        }),
                                                                        new TextRun(" of "),
                                                                        new TextRun({
                                                                            children: [PageNumber.TOTAL_PAGES],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],

                                            borders: {
                                                top: { size: 0 }, // No border for top
                                                bottom: { size: 0 }, // No border for bottom
                                                left: { size: 0 }, // No left border
                                                right: { size: 0 }, // No right border
                                                insideHorizontal: { size: 0 }, // No horizontal border inside
                                                insideVertical: { size: 0 }, // No vertical border inside
                                            },
                                        }),

                                    ],
                                }),
                            },

                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: imageArrayBuffer, // Use the fetched image
                                            transformation: {
                                                width: 300,
                                                height: 80,
                                            },
                                            altText: {
                                                title: "This is an ultimate title",
                                                description: "This is an ultimate image",
                                                name: "My Ultimate Image",
                                            },
                                        }),

                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [

                                        new TextRun({
                                            text: `${degTitle} Degree Programme`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${attempType}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${SubName} (${SubCode})`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Academic Year - ${BatchYear}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Semester - ${showSemValue}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Mark Sheet`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            tableHeader: true,
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 6, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Student No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 14, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Name",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 50, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Examiner 1",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Examiner 2",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Average",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                            ],
                                        }),
                                        ...tmpDownStudNoArr
                                            .map((studNo, index) => {
                                                if (ex_studentMediumArr[index] === "en" && ex_studentRStatusArr[index] != 0) {
                                                    console.log(index)

                                                    countEn++;
                                                    if (tmpDownExm1Arr[index] == '125') {
                                                        tmpDownExm1Arr[index] = '-';
                                                    }
                                                    if (tmpDownExm2Arr[index] == '125') {
                                                        tmpDownExm2Arr[index] = '-';
                                                    }
                                                    if (tmpDownMarksArr[index] == '125') {
                                                        tmpDownMarksArr[index] = '(ab)';
                                                    }
                                                    return new TableRow({
                                                        children: [
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: {
                                                                            line: 300                    // Increase the line height (you can adjust the value as needed)
                                                                        },
                                                                        // Center text vertically
                                                                        children: [new TextRun((countEn).toString())]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: { line: 300 },          // Increase the line height (adjust as needed)
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(studNo)]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.LEFT,   // Align text to the left
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        children: [new TextRun(tmpDownStudNameArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownExm1Arr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownExm2Arr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),

                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownMarksArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                        ],
                                                    });
                                                }
                                                return null;

                                            }).filter(row => row !== null),
                                    ],
                                }),

                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Coordinator:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Head of the Department: ____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`BoS Chair:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),

                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Dean/Faculty of Graduate Studies:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        })
                                    ],

                                    borders: {
                                        top: { size: 0 }, // No border for top
                                        bottom: { size: 0 }, // No border for bottom
                                        left: { size: 0 }, // No left border
                                        right: { size: 0 }, // No right border
                                        insideHorizontal: { size: 0 }, // No horizontal border inside
                                        insideVertical: { size: 0 }, // No vertical border inside
                                    },
                                }),
                            ],

                        }],
                    });

                    let countSi = 0;
                    let docSi = new Document({
                        sections: [{
                            properties: {
                                page: {
                                    top: 0,  // 0.5 inches converted to twips (72 points per inch)
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                            footers: {
                                default: new Footer({
                                    children: [

                                        new Table({
                                            width: { size: 100, type: WidthType.PERCENTAGE },
                                            rows: [
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`${SubName} (${SubCode}) - ` + `Academic Year - ${BatchYear} - ` + `Semester - ${showSemValue} - ${attempType} (English Medium)`),
                                                                        // new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`Signature of the coordinator:____________________`),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun(` `),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun("Page "),
                                                                        new TextRun({
                                                                            children: [PageNumber.CURRENT],
                                                                        }),
                                                                        new TextRun(" of "),
                                                                        new TextRun({
                                                                            children: [PageNumber.TOTAL_PAGES],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],

                                            borders: {
                                                top: { size: 0 }, // No border for top
                                                bottom: { size: 0 }, // No border for bottom
                                                left: { size: 0 }, // No left border
                                                right: { size: 0 }, // No right border
                                                insideHorizontal: { size: 0 }, // No horizontal border inside
                                                insideVertical: { size: 0 }, // No vertical border inside
                                            },
                                        }),

                                    ],
                                }),
                            },

                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: imageArrayBuffer, // Use the fetched image
                                            transformation: {
                                                width: 300,
                                                height: 80,
                                            },
                                            altText: {
                                                title: "This is an ultimate title",
                                                description: "This is an ultimate image",
                                                name: "My Ultimate Image",
                                            },
                                        }),

                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [

                                        new TextRun({
                                            text: `${degTitle} Degree Programme`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${attempType}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${SubName} (${SubCode})`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Academic Year - ${BatchYear}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Semester - ${showSemValue}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Mark Sheet`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            tableHeader: true,
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 6, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Student No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 14, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Name",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 50, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Examiner 1",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Examiner 2",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Average",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                            ],
                                        }),

                                        ...tmpDownStudNoArr
                                            .map((studNo, index) => {
                                                if (ex_studentMediumArr[index] === "si" && ex_studentRStatusArr[index] != 0) {
                                                    console.log(index)

                                                    countSi++;
                                                    if (tmpDownExm1Arr[index] == '125') {
                                                        tmpDownExm1Arr[index] = '-';
                                                    }
                                                    if (tmpDownExm2Arr[index] == '125') {
                                                        tmpDownExm2Arr[index] = '-';
                                                    }
                                                    if (tmpDownMarksArr[index] == '125') {
                                                        tmpDownMarksArr[index] = '(ab)';
                                                    }
                                                    return new TableRow({
                                                        children: [
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: {
                                                                            line: 300                    // Increase the line height (you can adjust the value as needed)
                                                                        },
                                                                        // Center text vertically
                                                                        children: [new TextRun((countSi).toString())]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: { line: 300 },          // Increase the line height (adjust as needed)
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(studNo)]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.LEFT,   // Align text to the left
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        children: [new TextRun(tmpDownStudNameArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownExm1Arr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownExm2Arr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),

                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownMarksArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                        ],
                                                    });
                                                }
                                                return null;

                                            }).filter(row => row !== null),
                                    ],
                                }),

                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Coordinator:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Head of the Department: ____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`BoS Chair:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),

                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Dean/Faculty of Graduate Studies:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        })
                                    ],

                                    borders: {
                                        top: { size: 0 }, // No border for top
                                        bottom: { size: 0 }, // No border for bottom
                                        left: { size: 0 }, // No left border
                                        right: { size: 0 }, // No right border
                                        insideHorizontal: { size: 0 }, // No horizontal border inside
                                        insideVertical: { size: 0 }, // No vertical border inside
                                    },
                                }),
                            ],

                        }],
                    });


                    if (countEn > 0) {
                        Packer.toBlob(docEn).then(blob => {
                            let exportFilename = `Mark Sheet - ${BatchYear} - ${SubCode} English Medium.docx`;
                            saveAs(blob, exportFilename);
                        });
                    }

                    if (countSi > 0) {
                        Packer.toBlob(docSi).then(blob => {
                            let exportFilename = `Mark Sheet - ${BatchYear} - ${SubCode} Sinhala Medium.docx`;
                            saveAs(blob, exportFilename);
                        });
                    }



                } else {
                    // resetResultDownload()
                    Swal.fire({
                        icon: 'warning',
                        title: 'Alert',
                        text: 'Data not available'
                    });

                }




            }, error: function (error) {
                console.log(error)

            }
        });


    } else {
        if (document.getElementById('selectedDegreeName').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Degree',
                text: 'Please select a degree from the list.'
            });
        } else if (document.getElementById('achedamicYear').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Academic Year',
                text: 'Please select an academic year from the list.'
            });
        } else if (dataRep["selectedMedium"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Medium',
                text: 'Please select a medium from the options.'
            });
        } else if (document.getElementById('selectedSubject').value == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Paper Code',
                text: 'Please enter a paper code.'
            });
        } else if (dataRep["selectedAttempt"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Attempt',
                text: 'Please select an attempt from the options.'
            });
        } else if (dataRep["selectedSemester"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Semester',
                text: 'Please select a semester from the options.'
            });
        }
    }
}



function examDownloadSubjectMarksAndGradeForNew() {
    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0
        && dataRep["selectedMedium"] != ""
        && dataRep["selectedAttempt"] != ""
        && dataRep["selectedSemester"] != ""
        && document.getElementById('selectedSubject').value != "") {
        let tmpDId = document.getElementById('selectedDegreeName').value;
        dataRep["degCode"] = tmpDId;
        dataRep["degSem"] = dataRep["selectedSemester"];
        dataRep["degAttmp"] = dataRep["selectedAttempt"];

        dataRep["degSub"] = document.getElementById('selectedSubject').value;
        dataRep["acYear"] = document.getElementById('achedamicYear').value;

        let degTitle = $("#selectedDegreeName option:selected").text();
        let SubName = $("#selectedSubject option:selected").text();
        let SubCode = document.getElementById('selectedSubject').value;
        let BatchYear = document.getElementById('achedamicYear').value;
        let showSem = dataRep["degSem"];

        let selectedAttmTime = 0;
        if (dataRep["degAttmp"] == "RR") {
            selectedAttmTime = document.getElementById('selectedAttemptTime').value;
        }
        resetResultUpload();
        let postData = {
            action: "getExamMarkSheetData",
            degreeCode: dataRep["degCode"],
            SubjectCode: dataRep["degSub"],
            Semester: dataRep["degSem"],
            AchademicYear: dataRep["acYear"],
            attemp: dataRep["degAttmp"],
            medium: dataRep["selectedMedium"],
            attemptime: selectedAttmTime,
            authcode: authcode,
            username: dataRep['userId'],
            // serchedAttemptTime = dataRep["selectedAttemptTime"];


        };

        $.ajax({
            type: 'POST',
            url: 'rules/students.php',
            data: postData,
            dataType: 'json',
            success: async function (response) {
                // console.log(postData)
                let SubName = response[0].subjectTitle;

                tmpDownStudNoArr.length = 0;
                tmpDownStudNameArr.length = 0;
                tmpDownGradeArr.length = 0;
                tmpDownExm1Arr.length = 0;
                tmpDownExm2Arr.length = 0;
                tmpDownMarksArr.length = 0;
                ex_studentMediumArr.length = 0;
                ex_studentRStatusArr.length = 0;
                tmpDownLength = 0;
                console.log(response);
                $.each(response, function (index, data) {
                    tmpDownStudNoArr[tmpDownLength] = data.SudentNoSub;
                    tmpDownStudNameArr[tmpDownLength] = data.StudentName;
                    tmpDownGradeArr[tmpDownLength] = data.Grade;
                    tmpDownExm1Arr[tmpDownLength] = data.Examiner1;
                    tmpDownExm2Arr[tmpDownLength] = data.Examiner2;
                    tmpDownMarksArr[tmpDownLength] = data.Marks;
                    ex_studentMediumArr[tmpDownLength] = data.studentMedium;
                    ex_studentRStatusArr[tmpDownLength] = data.RStatus;
                    tmpDownLength++;
                });


                if (tmpDownLength != 0) {

                    let attempType = "";
                    if (postData.attemp == "F") {
                        attempType = "First Time Examination Results";
                    } else if (postData.attemp == "R") {
                        attempType = "Repeat Examination Results";
                    } else if (postData.attemp == "RR") {
                        if (postData.attemptime != 1) {
                            attempType = "Re-Repeat - Attempt " + postData.attemptime + " Examination Results";
                        } else {
                            attempType = "Re-Repeat Examination Results";
                        }

                    }

                    const response = await fetch(host + 'images/fgslogo.png'); // Replace with actual image URL
                    const imageBlob = await response.blob();
                    const imageArrayBuffer = await imageBlob.arrayBuffer();


                    const { Document, ImageRun, convertInchesToTwip, Packer, Paragraph, Table, TableRow, TableCell, TextRun, AlignmentType, WidthType, Footer, PageNumber } = docx;

                    let showSemValue = showSem == 0 ? "End Semester" : showSem;
                    let currentDate = new Date().toLocaleString();
                    let countEn = 0;
                    let docEn = new Document({
                        sections: [{
                            properties: {
                                page: {
                                    top: 0,  // 0.5 inches converted to twips (72 points per inch)
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                            footers: {
                                default: new Footer({
                                    children: [

                                        new Table({
                                            width: { size: 100, type: WidthType.PERCENTAGE },
                                            rows: [
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`${SubName} (${SubCode}) - ` + `Academic Year - ${BatchYear} - ` + `Semester - ${showSemValue} - ${attempType} (English Medium)`),
                                                                        // new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`Signature of the coordinator:____________________`),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun(` `),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun("Page "),
                                                                        new TextRun({
                                                                            children: [PageNumber.CURRENT],
                                                                        }),
                                                                        new TextRun(" of "),
                                                                        new TextRun({
                                                                            children: [PageNumber.TOTAL_PAGES],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],

                                            borders: {
                                                top: { size: 0 }, // No border for top
                                                bottom: { size: 0 }, // No border for bottom
                                                left: { size: 0 }, // No left border
                                                right: { size: 0 }, // No right border
                                                insideHorizontal: { size: 0 }, // No horizontal border inside
                                                insideVertical: { size: 0 }, // No vertical border inside
                                            },
                                        }),

                                    ],
                                }),
                            },

                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: imageArrayBuffer, // Use the fetched image
                                            transformation: {
                                                width: 300,
                                                height: 80,
                                            },
                                            altText: {
                                                title: "This is an ultimate title",
                                                description: "This is an ultimate image",
                                                name: "My Ultimate Image",
                                            },
                                        }),

                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [

                                        new TextRun({
                                            text: `${degTitle} Degree Programme`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${attempType}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${SubName} (${SubCode})`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Academic Year - ${BatchYear}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Semester - ${showSemValue}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Grade & Mark Sheet`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            tableHeader: true,
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 6, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Student No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 14, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Name",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 50, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Examiner 1",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Examiner 2",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Average",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Grade",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                            ],
                                        }),
                                        ...tmpDownStudNoArr
                                            .map((studNo, index) => {
                                                if (ex_studentMediumArr[index] === "en" && ex_studentRStatusArr[index] != 0) {
                                                    console.log(index)

                                                    countEn++;
                                                    if (tmpDownExm1Arr[index] == '125') {
                                                        tmpDownExm1Arr[index] = '-';
                                                    }
                                                    if (tmpDownExm2Arr[index] == '125') {
                                                        tmpDownExm2Arr[index] = '-';
                                                    }
                                                    if (tmpDownMarksArr[index] == '125') {
                                                        tmpDownMarksArr[index] = '(ab)';
                                                    }
                                                    return new TableRow({
                                                        children: [
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: {
                                                                            line: 300                    // Increase the line height (you can adjust the value as needed)
                                                                        },
                                                                        // Center text vertically
                                                                        children: [new TextRun((countEn).toString())]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: { line: 300 },          // Increase the line height (adjust as needed)
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(studNo)]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.LEFT,   // Align text to the left
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        children: [new TextRun(tmpDownStudNameArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownExm1Arr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownExm2Arr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),

                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownMarksArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),

                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownGradeArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),


                                                        ],
                                                    });
                                                }
                                                return null;

                                            }).filter(row => row !== null),
                                    ],
                                }),
                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Coordinator:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Head of the Department: ____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`BoS Chair:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),

                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Dean/Faculty of Graduate Studies:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        })
                                    ],

                                    borders: {
                                        top: { size: 0 }, // No border for top
                                        bottom: { size: 0 }, // No border for bottom
                                        left: { size: 0 }, // No left border
                                        right: { size: 0 }, // No right border
                                        insideHorizontal: { size: 0 }, // No horizontal border inside
                                        insideVertical: { size: 0 }, // No vertical border inside
                                    },
                                }),

                            ],

                        }],
                    });

                    let countSi = 0;
                    let docSi = new Document({
                        sections: [{
                            properties: {
                                page: {
                                    top: 0,  // 0.5 inches converted to twips (72 points per inch)
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                },
                            },
                            footers: {
                                default: new Footer({
                                    children: [

                                        new Table({
                                            width: { size: 100, type: WidthType.PERCENTAGE },
                                            rows: [
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`${SubName} (${SubCode}) - ` + `Academic Year - ${BatchYear} - ` + `Semester - ${showSemValue} - ${attempType} (English Medium)`),
                                                                        // new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(`Signature of the coordinator:____________________`),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                            columnSpan: 2
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun(` `),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.1),
                                                                bottom: convertInchesToTwip(0),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                new TableRow({
                                                    children: [
                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.LEFT,
                                                                    children: [
                                                                        new TextRun(new Date().toISOString().split('T')[0]),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),

                                                        new TableCell({
                                                            children: [
                                                                new Paragraph({
                                                                    alignment: AlignmentType.RIGHT,
                                                                    children: [
                                                                        new TextRun("Page "),
                                                                        new TextRun({
                                                                            children: [PageNumber.CURRENT],
                                                                        }),
                                                                        new TextRun(" of "),
                                                                        new TextRun({
                                                                            children: [PageNumber.TOTAL_PAGES],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ], margins: {
                                                                top: convertInchesToTwip(0.2),
                                                                bottom: convertInchesToTwip(0.2),
                                                                left: convertInchesToTwip(0.1),
                                                                right: convertInchesToTwip(0.1),
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],

                                            borders: {
                                                top: { size: 0 }, // No border for top
                                                bottom: { size: 0 }, // No border for bottom
                                                left: { size: 0 }, // No left border
                                                right: { size: 0 }, // No right border
                                                insideHorizontal: { size: 0 }, // No horizontal border inside
                                                insideVertical: { size: 0 }, // No vertical border inside
                                            },
                                        }),

                                    ],
                                }),
                            },

                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new ImageRun({
                                            data: imageArrayBuffer, // Use the fetched image
                                            transformation: {
                                                width: 300,
                                                height: 80,
                                            },
                                            altText: {
                                                title: "This is an ultimate title",
                                                description: "This is an ultimate image",
                                                name: "My Ultimate Image",
                                            },
                                        }),

                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [

                                        new TextRun({
                                            text: `${degTitle} Degree Programme`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${attempType}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${SubName} (${SubCode})`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Academic Year - ${BatchYear}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Semester - ${showSemValue}`,
                                            size: 22
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `Mark Sheet`,
                                            bold: true,
                                            size: 24
                                        }),
                                    ],
                                }),
                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            tableHeader: true,
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 6, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Student No",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 14, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Name",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 50, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Examiner 1",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Examiner 2",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER,  // Align text to the center
                                                            children: [new TextRun({
                                                                text: "Average",
                                                                bold: true  // Make the text bold
                                                            })]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    width: { size: 10, type: WidthType.PERCENTAGE }
                                                }),
                                            ],
                                        }),

                                        ...tmpDownStudNoArr
                                            .map((studNo, index) => {
                                                if (ex_studentMediumArr[index] === "si" && ex_studentRStatusArr[index] != 0) {
                                                    console.log(index)

                                                    countSi++;
                                                    if (tmpDownExm1Arr[index] == '125') {
                                                        tmpDownExm1Arr[index] = '-';
                                                    }
                                                    if (tmpDownExm2Arr[index] == '125') {
                                                        tmpDownExm2Arr[index] = '-';
                                                    }
                                                    if (tmpDownMarksArr[index] == '125') {
                                                        tmpDownMarksArr[index] = '(ab)';
                                                    }
                                                    return new TableRow({
                                                        children: [
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: {
                                                                            line: 300                    // Increase the line height (you can adjust the value as needed)
                                                                        },
                                                                        // Center text vertically
                                                                        children: [new TextRun((countSi).toString())]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.RIGHT,  // Align text to the right
                                                                        spacing: { line: 300 },          // Increase the line height (adjust as needed)
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(studNo)]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.LEFT,   // Align text to the left
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        children: [new TextRun(tmpDownStudNameArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownExm1Arr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownExm2Arr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),

                                                            new TableCell({
                                                                children: [
                                                                    new Paragraph({
                                                                        alignment: AlignmentType.CENTER, // Align text to the center
                                                                        spacing: { line: 300 },          // Increase the line height
                                                                        verticalAlign: 'center',         // Center text vertically
                                                                        children: [new TextRun(tmpDownMarksArr[index])]
                                                                    })
                                                                ],
                                                                verticalAlign: VerticalAlign.CENTER,
                                                                margins: {
                                                                    top: convertInchesToTwip(0.1),
                                                                    bottom: convertInchesToTwip(0.1),
                                                                    left: convertInchesToTwip(0.1),
                                                                    right: convertInchesToTwip(0.1),
                                                                },
                                                            }),
                                                        ],
                                                    });
                                                }
                                                return null;

                                            }).filter(row => row !== null),
                                    ],
                                }),
                                new Paragraph({ text: " " }),
                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Coordinator:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Head of the Department: ____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`BoS Chair:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),

                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Dean/Faculty of Graduate Studies:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        })
                                    ],

                                    borders: {
                                        top: { size: 0 }, // No border for top
                                        bottom: { size: 0 }, // No border for bottom
                                        left: { size: 0 }, // No left border
                                        right: { size: 0 }, // No right border
                                        insideHorizontal: { size: 0 }, // No horizontal border inside
                                        insideVertical: { size: 0 }, // No vertical border inside
                                    },
                                }),
                            ],

                        }],
                    });


                    if (countEn > 0) {
                        Packer.toBlob(docEn).then(blob => {
                            let exportFilename = `Grade and Mark Sheet - ${BatchYear} - ${SubCode} English Medium.docx`;
                            saveAs(blob, exportFilename);
                        });
                    }

                    if (countSi > 0) {
                        Packer.toBlob(docSi).then(blob => {
                            let exportFilename = `Grade and Mark Sheet - ${BatchYear} - ${SubCode} Sinhala Medium.docx`;
                            saveAs(blob, exportFilename);
                        });
                    }



                } else {
                    // resetResultDownload()
                    Swal.fire({
                        icon: 'warning',
                        title: 'Alert',
                        text: 'Data not available'
                    });

                }




            }, error: function (error) {
                console.log(error)

            }
        });


    } else {
        if (document.getElementById('selectedDegreeName').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Degree',
                text: 'Please select a degree from the list.'
            });
        } else if (document.getElementById('achedamicYear').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Academic Year',
                text: 'Please select an academic year from the list.'
            });
        } else if (dataRep["selectedMedium"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Medium',
                text: 'Please select a medium from the options.'
            });
        } else if (document.getElementById('selectedSubject').value == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Paper Code',
                text: 'Please enter a paper code.'
            });
        } else if (dataRep["selectedAttempt"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Attempt',
                text: 'Please select an attempt from the options.'
            });
        } else if (dataRep["selectedSemester"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Semester',
                text: 'Please select a semester from the options.'
            });
        }
    }
}


function examDownloadSubjectGradesForNew_update_2024_05_02() {
    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0
        && dataRep["selectedMedium"] != ""
        && dataRep["selectedAttempt"] != ""
        && dataRep["selectedSemester"] != ""
        && document.getElementById('selectedSubject').value != "") {
        let tmpDId = document.getElementById('selectedDegreeName').value;
        dataRep["degCode"] = tmpDId;
        dataRep["degSem"] = dataRep["selectedSemester"];
        dataRep["degAttmp"] = dataRep["selectedAttempt"];

        dataRep["degSub"] = document.getElementById('selectedSubject').value;
        dataRep["acYear"] = document.getElementById('achedamicYear').value;

        let degTitle = $("#selectedDegreeName option:selected").text();
        let SubName = $("#selectedSubject option:selected").text();
        let SubCode = document.getElementById('selectedSubject').value;
        let BatchYear = document.getElementById('achedamicYear').value;
        let selectedAttmTime = 0;
        if (dataRep["degAttmp"] == "RR") {
            selectedAttmTime = document.getElementById('selectedAttemptTime').value;
        }
        resetResultUpload();
        let postData = {
            action: "getExamMarkSheetData",
            degreeCode: dataRep["degCode"],
            SubjectCode: dataRep["degSub"],
            Semester: dataRep["degSem"],
            AchademicYear: dataRep["acYear"],
            attemp: dataRep["degAttmp"],
            medium: dataRep["selectedMedium"],
            attemptime: selectedAttmTime,
            authcode: authcode,
            username: dataRep['userId'],
            // serchedAttemptTime = dataRep["selectedAttemptTime"];


        };

        $.ajax({
            type: 'POST',
            url: 'rules/students.php',
            data: postData,
            dataType: 'json',
            success: function (response) {
                console.log(postData)
                let SubName = response[0].subjectTitle;

                tmpDownStudNoArr.length = 0;
                tmpDownStudNameArr.length = 0;
                tmpDownGradeArr.length = 0;
                tmpDownExm1Arr.length = 0;
                tmpDownExm2Arr.length = 0;
                tmpDownMarksArr.length = 0;
                ex_studentMediumArr.length = 0;
                ex_studentRStatusArr.length = 0;
                tmpDownLength = 0;
                console.log(response);
                $.each(response, function (index, data) {
                    tmpDownStudNoArr[tmpDownLength] = data.SudentNoSub;
                    tmpDownStudNameArr[tmpDownLength] = data.StudentName;
                    tmpDownGradeArr[tmpDownLength] = data.Grade;
                    tmpDownExm1Arr[tmpDownLength] = data.Examiner1;
                    tmpDownExm2Arr[tmpDownLength] = data.Examiner2;
                    tmpDownMarksArr[tmpDownLength] = data.Marks;
                    ex_studentMediumArr[tmpDownLength] = data.studentMedium;
                    ex_studentRStatusArr[tmpDownLength] = data.RStatus;
                    tmpDownLength++;
                });


                if (tmpDownLength != 0) {

                    let attempType = "";
                    if (postData.attemp == "F") {
                        attempType = "First Time Examination Results";
                    } else if (postData.attemp == "R") {
                        attempType = "Repeat Examination Results";
                    } else if (postData.attemp == "RR") {
                        if (postData.attemptime != 1) {
                            attempType = "Re-Repeat - Attempt " + postData.attemptime + " Examination Results";
                        } else {
                            attempType = "Re-Repeat Examination Results";
                        }

                    }
                    //en
                    let engCount = 0;
                    let engRowCount = 1;

                    let newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
                    newStr += "<div id='topics1' class='info'></div>";
                    newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
                    newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
                    newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
                    newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ") <br>" + attempType + "</div>";
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
                    newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ") <br>" + attempType + "</div>";
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

                        if (ex_studentRStatusArr[i] != 0) {
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
                                newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>'; newStr += "</tr>";
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
                                newStrSin += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
                                newStrSin += "</tr>";
                                newStrSin += "</div><dev><br>";
                                sinCount++;
                                sinRowCount++;
                            }
                            //si

                        }

                        // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
                        // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';
                        // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
                        // newStr += "</tr>";
                        // newStr += "</div><dev><br>";

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
                    Swal.fire({
                        icon: 'warning',
                        title: 'Alert',
                        text: 'Data not available'
                    });

                }




            }, error: function (error) {
                console.log(error)

            }
        });


    } else {
        if (document.getElementById('selectedDegreeName').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Degree',
                text: 'Please select a degree from the list.'
            });
        } else if (document.getElementById('achedamicYear').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Academic Year',
                text: 'Please select an academic year from the list.'
            });
        } else if (dataRep["selectedMedium"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Medium',
                text: 'Please select a medium from the options.'
            });
        } else if (document.getElementById('selectedSubject').value == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Paper Code',
                text: 'Please enter a paper code.'
            });
        } else if (dataRep["selectedAttempt"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Attempt',
                text: 'Please select an attempt from the options.'
            });
        } else if (dataRep["selectedSemester"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Semester',
                text: 'Please select a semester from the options.'
            });
        }
    }
}

function examDownloadSubjectMarksForNew_2024_05_02() {


    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0
        && dataRep["selectedMedium"] != ""
        && dataRep["selectedAttempt"] != ""
        && dataRep["selectedSemester"] != ""
        && document.getElementById('selectedSubject').value != "") {
        var tmpDId = document.getElementById('selectedDegreeName').value;
        dataRep["degCode"] = tmpDId;
        dataRep["degSem"] = dataRep["selectedSemester"];
        dataRep["degAttmp"] = dataRep["selectedAttempt"];
        dataRep["degSub"] = document.getElementById('selectedSubject').value;
        dataRep["acYear"] = document.getElementById('achedamicYear').value;

        var degTitle = $("#selectedDegreeName option:selected").text();
        var SubName = $("#selectedSubject option:selected").text();
        var SubCode = document.getElementById('selectedSubject').value;
        var BatchYear = document.getElementById('achedamicYear').value;



        resetResultUpload();
        let selectedAttmTime = 0;

        if (dataRep["degAttmp"] == "RR") {
            selectedAttmTime = document.getElementById('selectedAttemptTime').value;
        }
        let postData = {
            action: "getExamMarkSheetDataForNew",
            degreeCode: dataRep["degCode"],
            SubjectCode: dataRep["degSub"],
            Semester: dataRep["degSem"],
            AchademicYear: dataRep["acYear"],
            attemp: dataRep["degAttmp"],
            medium: dataRep["selectedMedium"],
            attemptime: selectedAttmTime,
            authcode: authcode,
            username: dataRep['userId'],

        };

        $.ajax({
            type: 'POST',
            url: 'rules/students.php',
            data: postData,
            dataType: 'json',
            success: function (response) {
                // let batch

                tmpDownStudNoArr.length = 0;
                tmpDownStudNameArr.length = 0;
                tmpDownGradeArr.length = 0;
                tmpDownExm1Arr.length = 0;
                tmpDownExm2Arr.length = 0;
                tmpDownMarksArr.length = 0;
                ex_studentMediumArr.length = 0;
                ex_studentRStatusArr.length = 0;
                tmpDownLength = 0;
                $.each(response, function (index, data) {
                    tmpDownStudNoArr[tmpDownLength] = data.SudentNoSub;
                    tmpDownStudNameArr[tmpDownLength] = data.StudentName;
                    tmpDownGradeArr[tmpDownLength] = data.Grade;
                    tmpDownExm1Arr[tmpDownLength] = data.Examiner1;
                    tmpDownExm2Arr[tmpDownLength] = data.Examiner2;
                    tmpDownMarksArr[tmpDownLength] = data.Marks;
                    ex_studentMediumArr[tmpDownLength] = data.studentMedium;
                    ex_studentRStatusArr[tmpDownLength] = data.RStatus;
                    tmpDownLength++;
                });

                let SubName = response[0].subjectTitle;

                if (tmpDownLength != 0) {
                    //en
                    var engCount = 0;
                    var engRowCount = 1;
                    let attempType = "";
                    console.log(postData.attemp);
                    console.log(postData.attemptime);
                    if (postData.attemp == "F") {
                        attempType = "First Time Examination Results";
                    } else if (postData.attemp == "R") {
                        attempType = "Repeat Examination Results";
                    } else if (postData.attemp == "RR") {
                        if (postData.attemptime != 1) {
                            attempType = "Re-Repeat - Attempt " + postData.attemptime + " Examination Results";
                        } else {
                            attempType = "Re-Repeat Examination Results";
                        }

                    }
                    var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
                    newStr += "<div id='topics1' class='info'></div>";
                    newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
                    newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
                    newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
                    newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ") <br>" + attempType + "</div>";
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
                    newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ") <br>" + attempType + "</div>";
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
                        if (ex_studentRStatusArr[i] != 0) {
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


    } else {
        if (document.getElementById('selectedDegreeName').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Degree',
                text: 'Please select a degree from the list.'
            });
        } else if (document.getElementById('achedamicYear').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Academic Year',
                text: 'Please select an academic year from the list.'
            });
        } else if (dataRep["selectedMedium"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Medium',
                text: 'Please select a medium from the options.'
            });
        } else if (document.getElementById('selectedSubject').value == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Paper Code',
                text: 'Please enter a paper code.'
            });
        } else if (dataRep["selectedAttempt"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Attempt',
                text: 'Please select an attempt from the options.'
            });
        } else if (dataRep["selectedSemester"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Semester',
                text: 'Please select a semester from the options.'
            });
        }
    }


}

function examDownloadFinalMarkSheetForNew() {


    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0
        && dataRep["selectedMedium"] != ""
        && dataRep["selectedAttempt"] != ""
        && dataRep["selectedSemester"] != ""
        && document.getElementById('selectedSubject').value != "") {
        var tmpDId = document.getElementById('selectedDegreeName').value;
        dataRep["degCode"] = tmpDId;
        dataRep["degSem"] = dataRep["selectedSemester"];
        dataRep["degAttmp"] = dataRep["selectedAttempt"];
        dataRep["degSub"] = document.getElementById('selectedSubject').value;
        dataRep["acYear"] = document.getElementById('achedamicYear').value;

        var degTitle = $("#selectedDegreeName option:selected").text();
        var SubName = "";
        var SubCode = document.getElementById('selectedSubject').value;
        var BatchYear = document.getElementById('achedamicYear').value;

        if (ex_CodeLength > 0) {

            let data = [
                ["Student No", "Name", "Examiner 1", "Examiner 2"]
            ];

            // Add rows with missing examiner marks
            for (let i = 0; i < ex_studentNoArr.length; i++) {
                if (ex_examiner1[i] === '' && ex_examiner2[i] === '') {
                    data.push([
                        ex_studentNoArr[i],
                        ex_studentNameArr[i],
                        "",  // Examiner 1
                        ""   // Examiner 2
                    ]);
                }
            }

            // Determine medium based on dataRep
            let mediumFile = "";
            if (dataRep["selectedMedium"] === "en") {
                mediumFile = "English";
            } else if (dataRep["selectedMedium"] === "si") {
                mediumFile = "Sinhala";
            }

            // Determine subject name based on SubCode
            let SubName = "";
            for (let j = 0; j < subjectCodeLength; j++) {
                if (SubCode === subjectCodeArr[j]) {
                    SubName = subjectTitleArr[j];
                    break;
                }
            }



            // Create the filename
            const invalidChars = /[<>:"/\\|?*\x00-\x1F]/g;
            let fileSubCode = SubCode.replace(invalidChars, '_');
            let exportFilename = `${dataRep["acYear"]} - ${mediumFile} - ${SubName} (${fileSubCode}) Mark Sheet.csv`;

            // Create a new workbook and add the data
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.aoa_to_sheet(data);

            // Append the worksheet to the workbook
            XLSX.utils.book_append_sheet(wb, ws, "Mark Sheet");

            // Generate and download the Excel file
            XLSX.writeFile(wb, exportFilename);
        }



    } else {
        if (document.getElementById('selectedDegreeName').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Degree',
                text: 'Please select a degree from the list.'
            });
        } else if (document.getElementById('achedamicYear').selectedIndex == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Select Academic Year',
                text: 'Please select an academic year from the list.'
            });
        } else if (dataRep["selectedMedium"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Medium',
                text: 'Please select a medium from the options.'
            });
        } else if (document.getElementById('selectedSubject').value == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Paper Code',
                text: 'Please enter a paper code.'
            });
        } else if (dataRep["selectedAttempt"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Attempt',
                text: 'Please select an attempt from the options.'
            });
        } else if (dataRep["selectedSemester"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Semester',
                text: 'Please select a semester from the options.'
            });
        }
    }


}



function ModelForDownlodGradeSheetMarkSheet() {

    let str = "";

    str += '<div class="modal fade " id="exampleModalLong" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >';
    str += '<div class="modal-dialog modal-md modal-dialog-centered" role="document">';
    str += '<div class="modal-content">';
    str += '<div class="modal-header">';
    str += '<h5 class="modal-title" id="exampleModalLongTitle">Download Options</h5>';
    str += '<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close" onclick="closeModelDownloadGradeSheetMarkSheet()">';
    str += '<span aria-hidden="true">&times;</span>';
    str += '</button>';
    str += '</div>';
    str += '<div class="modal-body" style="overflow-x: auto;">';

    str += '<div class="row" id="ex_downloadSub">';
    str += '<div class="col-sm-12"><div class="template-demo">';
    str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 2.6rem;font-size: 18px;font-weight: 500;">Subject Vise : </label>';
    str += '<input type="button" class="btn btn-primary" value="Grades" onclick="examDownloadSubjectGradesForNew()">';
    str += '<input type="button" class="btn btn-primary" value="Marks" onclick="examDownloadSubjectMarksForNew()">';
    str += '<input type="button" class="btn btn-primary" value="Grades & Marks Sheet" onclick="examDownloadSubjectMarksAndGradeForNew()">';
    str += '</div></div>';
    str += '</div>';




    // str += '<div class="row" id="ex_downloadSem">';
    // str += '<div class="col-sm-12"><div class="template-demo">';
    // str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 1.5rem;font-size: 18px;font-weight: 500;">Semester Vise : </label>';
    // str += '<input type="button" class="btn btn-primary" value="Grades" onclick="examDownloadSemesterGrades()">';
    // str += '<input type="button" class="btn btn-primary" value="Marks" onclick="examDownloadSemesterMarks()">';
    // str += '</div></div>';
    // str += '</div>';



    // str += '<div class="row" id="ex_downloadYear">';
    // str += '<div class="col-sm-12"><div class="template-demo">';
    // str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 4.3rem;font-size: 18px;font-weight: 500;">Year Vise : </label>';
    // str += '<input type="button" class="btn btn-primary" value="Grades" onclick="examDownloadYearGrades()">';
    // str += '<input type="button" class="btn btn-primary" value="Marks" onclick="examDownloadYearMarks()">';
    // str += '</div></div>';
    // str += '</div>';


    // str += '<div class="row" id="ex_fulReportDownload">';
    // str += '<div class="col-sm-12"><div class="template-demo">';
    // str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 3.2rem;font-size: 18px;font-weight: 500;">Final Result : </label>';
    // str += '<input type="button" class="btn btn-primary" value="Download" onclick="examDownloadFinalReportForNew()">';
    // str += '</div></div>';
    // str += '</div>';

    // str += '<div class="row" id="ex_passDownload">';
    // str += '<div class="col-sm-12"><div class="template-demo">';
    // str += '<label style="display: inline-block;padding-top: 1.4rem;padding-right: 4.8rem;font-size: 18px;font-weight: 500;">Pass List : </label>';
    // str += '<input type="button" class="btn btn-primary" value="Download" onclick="examDownloadPassReport()">';
    // str += '</div></div>';
    // str += '</div>';


    str += '</div>';
    str += '<div class="modal-footer">';
    str += '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeModelDownloadGradeSheetMarkSheet()">Close</button>';
    str += '</div>';
    str += '</div>';
    str += '</div>';
    str += '</div>';
    // -------------------------------- end the implementing check box set ------------------------------

    document.getElementById('selectedlistbtn').innerHTML = str;
    downloadOptionModel2 = new bootstrap.Modal(document.getElementById('exampleModalLong'), {
        keyboard: false,
        backdrop: true
    })

    // document.getElementById("View-List").disabled = true;
    // document.getElementById('list').style.display = "none";

}

function DataTableForExamAppliedListResultUpload() {

    var buttons = [];
    if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'Technical Coordinator') {
        buttons.push({
            text: 'Confirm Results',
            className: 'btn btn-success flBtn',
            action: function (e, dt, node, config) {
                let successCount = 0;
                let total = 0;

                if (serchedAttemped == "F") {
                    table.rows().every(function (index) {
                        // Get the data for the current row
                        var rowData = this.data();
                        var examiner1Ele = $(this.node()).find('input[type="text"][id="examiner1"]');
                        var examiner2Ele = $(this.node()).find('input[type="text"][id="examiner2"]');
                        var latesubChkEle = $(this.node()).find('input[type="checkbox"][id="latesubChk"]');
                        var efectiveDateEle = $(this.node()).find('input[type="date"][id="effectivedate"]');

                        if (!(examiner1Ele === undefined && examiner2Ele === undefined)) {
                            if (!(examiner1Ele.val() === undefined && examiner2Ele.val() === undefined)) {
                                if (!(examiner1Ele.val() == "" && examiner2Ele.val() == "")) {
                                    total++;
                                    let examiner1Marks = examiner1Ele.val();
                                    let examiner2Marks = examiner2Ele.val();
                                    let effectiveDate = "0000-00-00"
                                    if (!(efectiveDateEle === undefined)) {
                                        effectiveDate = efectiveDateEle.val();
                                    }
                                    let latesubMark = 0;
                                    if (!(latesubChkEle === undefined)) {
                                        latesubMark = latesubChkEle.is(':checked') ? 1 : 0;
                                    }
                                    let studentId = rowData[1];
                                    let Name = rowData[2];
                                    var postData = {
                                        action: "insertFirstTimerResult",
                                        interface: "uploadMarksListNew",
                                        SudentNo: studentId,
                                        StudentName: Name,
                                        Examiner1: examiner1Marks,
                                        Examiner2: examiner2Marks,
                                        LateSub: latesubMark,
                                        effectiveDate: effectiveDate,
                                        degreeCode: $('#selectedDegreeName').val(),
                                        achedamicYear: serchedAcadamicYear,
                                        subjectName: serchedSubjectName,
                                        NewStudentNo: '',
                                        Status: '1',
                                        authcode: authcode,
                                        username: dataRep['userId'],
                                    };
                                    console.log(postData)
                                    $.ajax({
                                        type: 'POST',
                                        url: 'rules/insertMarks.php', // Replace with your server-side script URL
                                        data: postData,
                                        dataType: 'json',
                                        success: function (response) {
                                            if (response.status == "success") {
                                                successCount++;
                                            } else {

                                            }
                                        },
                                        error: function (error) {
                                            console.log(error)
                                        }
                                    });
                                }
                            }
                        }

                    });
                } else if (serchedAttemped == "R") {
                    table.rows().every(function (index) {
                        // Get the data for the current row
                        var rowData = this.data();
                        var examiner1Ele = $(this.node()).find('input[type="text"][id="examiner1"]');
                        var examiner2Ele = $(this.node()).find('input[type="text"][id="examiner2"]');
                        var reasonCombo = $(this.node()).find('#reason');
                        var latesubChkEle = $(this.node()).find('input[type="checkbox"][id="latesubChk"]');
                        var efectiveDateEle = $(this.node()).find('input[type="date"][id="effectivedate"]');

                        if (!(examiner1Ele === undefined && examiner2Ele === undefined && reasonCombo === undefined)) {

                            if (!(examiner1Ele.val() === undefined && examiner2Ele.val() === undefined && reasonCombo.val() === undefined) && !(examiner1Ele.val() == "" && examiner2Ele.val() == "")) {
                                total++;
                                let examiner1Marks = examiner1Ele.val();
                                let examiner2Marks = examiner2Ele.val();
                                let reason = reasonCombo.val();
                                console.log(reason);
                                if (reason === undefined) {
                                    console.log(rowData[7]);

                                    if (rowData[7].includes("Repeat") || rowData[7].includes("Rejected Medical")) {
                                        reason = "R";
                                    } else if (rowData[7].includes("Medical") || rowData[7].includes("Approved Medical")) {
                                        reason = "M";
                                    } else {
                                        reason = "R";
                                    }
                                }
                                let effectiveDate = "0000-00-00"
                                if (!(efectiveDateEle === undefined)) {
                                    effectiveDate = efectiveDateEle.val();
                                }
                                let latesubMark = 0;
                                if (!(latesubChkEle === undefined)) {
                                    latesubMark = latesubChkEle.is(':checked') ? 1 : 0;
                                }


                                let studentId = rowData[1];
                                let Name = rowData[2];
                                var postData = {
                                    action: "insertRepeatersResult",
                                    interface: "uploadMarksListNew",
                                    SudentNo: studentId,
                                    StudentName: Name,
                                    Examiner1: examiner1Marks,
                                    Examiner2: examiner2Marks,
                                    LateSub: latesubMark,
                                    effectiveDate: effectiveDate,
                                    degreeCode: $('#selectedDegreeName').val(),
                                    achedamicYear: serchedAcadamicYear,
                                    subjectName: serchedSubjectName,
                                    NewStudentNo: '',
                                    Status: '1',
                                    Reason: reason,
                                    authcode: authcode,
                                    username: dataRep['userId'],
                                };
                                console.log(postData)
                                $.ajax({
                                    type: 'POST',
                                    url: 'rules/insertMarks.php', // Replace with your server-side script URL
                                    data: postData,
                                    dataType: 'json',
                                    success: function (response) {
                                        if (response.status == "success") {
                                            successCount++;
                                        } else {

                                        }
                                    },
                                    error: function (error) {
                                        console.log(error)
                                    }
                                });

                            }
                        }

                    });
                } else if (serchedAttemped == "RR") {
                    table.rows().every(function (index) {
                        // Get the data for the current row
                        var rowData = this.data();
                        var examiner1Ele = $(this.node()).find('input[type="text"][id="examiner1"]');
                        var examiner2Ele = $(this.node()).find('input[type="text"][id="examiner2"]');
                        var latesubChkEle = $(this.node()).find('input[type="checkbox"][id="latesubChk"]');
                        var efectiveDateEle = $(this.node()).find('input[type="date"][id="effectivedate"]');

                        if (!(examiner1Ele === undefined && examiner2Ele === undefined)) {
                            if (!(examiner1Ele.val() === undefined && examiner2Ele.val() === undefined)) {
                                if (!(examiner1Ele.val() == "" && examiner2Ele.val() == "")) {
                                    total++;
                                    let examiner1Marks = examiner1Ele.val();
                                    let examiner2Marks = examiner2Ele.val();

                                    let effectiveDate = "0000-00-00"
                                    if (!(efectiveDateEle === undefined)) {
                                        effectiveDate = efectiveDateEle.val();
                                    }

                                    let latesubMark = 0;
                                    if (!(latesubChkEle === undefined)) {
                                        latesubMark = latesubChkEle.is(':checked') ? 1 : 0;
                                    }


                                    let studentId = rowData[1];
                                    let Name = rowData[2];
                                    var postData = {
                                        action: "insertReRepeatersResult",
                                        interface: "uploadMarksListNew",
                                        SudentNo: studentId,
                                        StudentName: Name,
                                        Examiner1: examiner1Marks,
                                        Examiner2: examiner2Marks,
                                        LateSub: latesubMark,
                                        effectiveDate: effectiveDate,
                                        degreeCode: $('#selectedDegreeName').val(),
                                        achedamicYear: serchedAcadamicYear,
                                        subjectName: serchedSubjectName,
                                        re_repeat_attempt_time: serchedAttemptTime,
                                        NewStudentNo: '',
                                        Status: '1',
                                        authcode: authcode,
                                        username: dataRep['userId'],
                                    };
                                    console.log(postData);

                                    $.ajax({
                                        type: 'POST',
                                        url: 'rules/insertMarks.php', // Replace with your server-side script URL
                                        data: postData,
                                        dataType: 'json',
                                        success: function (response) {
                                            if (response.status == "success") {
                                                successCount++;
                                            } else {

                                            }
                                        },
                                        error: function (error) {
                                            console.log(error)
                                        }
                                    });

                                }
                            }
                        }

                    });
                }

                if (serchedAttemped == "F" || serchedAttemped == "R" || serchedAttemped == "RR") {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Results Succssfully! ' + successCount + ' of ' + total,
                        icon: 'success',
                        timer: 10000, // time in milliseconds (10 seconds in this case)
                    }).then(function () {
                        examAppliedListGetUpdateResult(dataRep['selectedType']);
                        DataTableForExamAppliedListResultUpload();
                    });
                }

            }
        });


        buttons.push({
            text: 'Download Mark Sheet',
            className: 'btn btn-primary frBtn',
            action: function (e, dt, node, config) {
                examDownloadFinalMarkSheetForNew();

            }
        });



        buttons.push({
            text: 'Upload Mark Sheet',
            className: 'btn btn-primary frBtn',
            action: function (e, dt, node, config) {
                Swal.fire({
                    title: 'Upload Final Mark Sheet',
                    html: `
                        <div class="form-group">
                            <label for="evidenceFile" class="form-label">Please select the final mark sheet for processing:</label>
                            <input type="file" id="evidenceFile" class="form-control" accept=".csv, .xls, .xlsx, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                        </div>
                    `,
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonText: 'Confirm',
                    preConfirm: () => {
                        const fileInput = $('#evidenceFile');
                        if (fileInput[0].files.length === 0) {
                            Swal.fire({
                                icon: 'warning',
                                title: 'No File Attached',
                                text: 'Please attach a file to proceed.',
                            });
                            return false;
                        }
                        return fileInput[0].files[0];
                    }
                }).then((attachResult) => {
                    if (attachResult.isConfirmed) {
                        const attachedFile = attachResult.value;
                        const fileName = attachedFile.name;
                        // Create the filename
                        const invalidChars = /[<>:"/\\|?*\x00-\x1F]/g;
                        let fileSubCode = serchedSubjectName.replace(invalidChars, '_');
                        // Check if the file name includes serchedSubjectName
                        if (!fileName.includes(fileSubCode)) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Incorrect File',
                                html: `The uploaded file does not match the required paper code: ${serchedSubjectName}<br>The name in the uploaded file must contain : ${fileSubCode}`,
                            });
                            return;
                        }

                        const reader = new FileReader();

                        reader.onload = (event) => {
                            const data = new Uint8Array(event.target.result);
                            const workbook = XLSX.read(data, { type: 'array' });

                            // Assume data is in the first sheet
                            const sheetName = workbook.SheetNames[0];
                            const worksheet = workbook.Sheets[sheetName];
                            const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

                            // Process rows (skip the first row)
                            const studentData = rows.slice(1).map(row => ({
                                stNo: row[0],             // 1st column - Student Number
                                studentName: row[1],      // 2nd column - Student Name
                                examiner1Mark: row[2],    // 3rd column - Examiner 1 Mark
                                examiner2Mark: row[3]     // 4th column - Examiner 2 Mark
                            }));

                            table.rows().every(function (index) {
                                // Get the data for the current row
                                const rowData = this.data();
                                const studentId = rowData[1]; // Assuming this is the column where Student No is stored

                                // Find the matching student in studentData
                                const student = studentData.find(item => item.stNo === studentId);

                                if (student) {
                                    // Get the input elements for examiner marks
                                    const examiner1Ele = $(this.node()).find('input[type="text"][id="examiner1"]');
                                    const examiner2Ele = $(this.node()).find('input[type="text"][id="examiner2"]');

                                    // Set values if elements are found
                                    if (examiner1Ele.length) examiner1Ele.val(student.examiner1Mark);
                                    if (examiner2Ele.length) examiner2Ele.val(student.examiner2Mark);
                                }
                            });
                            // Further processing or sending data can be done here
                        };

                        reader.readAsArrayBuffer(attachedFile);
                    }
                });


            }
        });


    }

    if (dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
        buttons.push({
            text: 'Release All Results',
            className: 'btn btn-primary flBtn',
            action: function (e, dt, node, config) {

                Swal.fire({
                    title: 'Are you sure?',
                    text: 'This action released all results you searched!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Released!',
                    cancelButtonText: 'No, Cancel!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        var postData = {
                            action: "ReleaseResult",
                            degreeCode: $('#selectedDegreeName').val(),
                            achedamicYear: serchedAcadamicYear,
                            subjectName: serchedSubjectName,
                            attempt: serchedAttemped,
                            re_repeat_attempt_time: serchedAttemptTime,
                            Status: '0',
                            authcode: authcode,
                            username: dataRep['userId'],
                        };
                        $.ajax({
                            type: 'POST',
                            url: 'rules/insertMarks.php',
                            data: postData,
                            dataType: 'json',
                            success: function (response) {
                                if (response.status == "success") {


                                    response.data.forEach(function (student) {

                                        const completeMessagesend = "Dear Student,\nThe subject-wise results for " + serchedSubjectName + " have been released.Please log in to https://sysfgs.kln.ac.lk/ to view results.\nThanks.";
                                        if (mobileNumberValid(student.studentContactMobile) != 0) {
                                            sendDirectSMS(mobileNumberValid(student.studentContactMobile), completeMessagesend);
                                            let subject = serchedSubjectName + " Subject Results Released";
                                            let body = "<h4>Dear " + student.StudentName + ",</h4>The subject-wise results for " + serchedSubjectName + " have been released.Please log in to the FGS MIS to view your results.";
                                            body += "<a href='" + baseUrl + "' style='display: block; text-align: center; font-weight: 500; padding: 12px 20px; background: #c0392b; border-radius: 3px; color: #eee; font-size: 14px; text-decoration: none; margin: 20px 10px 20px 0;width: 200px;'>Click Here to Login</a>";
                                            body += "<br>Thank you.<br><br>Best Regards,";
                                            sendDirectEmail("exam.fgsmis.noreply@kln.ac.lk", "FGS MIS", student.studentContactEmail, subject, body)
                                        }

                                    });


                                    //get users and send sms
                                    let findUserData = {
                                        action: "getCoordinatorsForSubject",
                                        subjectCode: serchedSubjectName,
                                        authcode: authcode,
                                        username: dataRep['userId'],
                                    };
                                    $.ajax({
                                        type: 'POST',
                                        url: 'rules/user.php',
                                        data: findUserData,
                                        dataType: 'json',
                                        success: function (response) {
                                            if (response[0].status == 200) {
                                                response.forEach(item => {
                                                    const userName = item.userName;
                                                    const email = item.email;
                                                    const mobile = item.mobile;

                                                    const completeMessagesend = "Dear Coordinator,\nThe subject-wise results for " + serchedSubjectName + " has been released.\nThanks.\n\nFGS Management Information System";

                                                    let subject = serchedSubjectName + " Subject Results Released";
                                                    let body = "<h4>Dear " + userName + ",</h4>The subject-wise results for " + serchedSubjectName + " has been released.";
                                                    body += "<br>Thank you.<br><br>Best Regards,";


                                                    sendDirectSMS(mobileNumberValid(mobile), completeMessagesend);
                                                    sendDirectEmail("exam.fgsmis.noreply@kln.ac.lk", "FGS MIS", email, subject, body)

                                                });
                                            }
                                        }
                                    });

                                    //get users and send sms
                                    let findUserData2 = {
                                        action: "getTechnicalCoordinatorsForSubject",
                                        subjectCode: serchedSubjectName,
                                        authcode: authcode,
                                        username: dataRep['userId'],
                                    };
                                    $.ajax({
                                        type: 'POST',
                                        url: 'rules/user.php',
                                        data: findUserData2,
                                        dataType: 'json',
                                        success: function (response) {
                                            if (response[0].status == 200) {
                                                response.forEach(item => {
                                                    const userName = item.userName;
                                                    const email = item.email;
                                                    const mobile = item.mobile;

                                                    const completeMessagesend = "Dear Technical Coordinator,\nThe subject-wise results for " + serchedSubjectName + " has been released.\nThanks.\n\nFGS Management Information System";

                                                    let subject = serchedSubjectName + " Subject Results Released";
                                                    let body = "<h4>Dear " + userName + ",</h4>The subject-wise results for " + serchedSubjectName + " has been released.";
                                                    body += "<br>Thank you.<br><br>Best Regards,";


                                                    sendDirectSMS(mobileNumberValid(mobile), completeMessagesend);
                                                    sendDirectEmail("exam.fgsmis.noreply@kln.ac.lk", "FGS MIS", email, subject, body)

                                                });
                                            }
                                        }
                                    });







                                    Swal.fire({
                                        title: 'Success!',
                                        text: response.message,
                                        icon: 'success',
                                        timer: 10000, // time in milliseconds (10 seconds in this case)
                                    }).then(function () {
                                        examAppliedListGetUpdateResult(dataRep['selectedType']);
                                        DataTableForExamAppliedListResultUpload();
                                    });
                                } else {
                                    Swal.fire({
                                        title: 'Error!',
                                        text: response.message,
                                        icon: 'error',
                                        timer: 10000, // time in milliseconds (10 seconds in this case)
                                    }).then(function () {
                                        examAppliedListGetUpdateResult(dataRep['selectedType']);
                                        DataTableForExamAppliedListResultUpload();
                                    });
                                }
                            },
                            error: function (error) {
                                console.log(error)
                                Swal.fire({
                                    title: 'Error!',
                                    text: error,
                                    icon: 'error',
                                    timer: 10000, // time in milliseconds (10 seconds in this case)
                                }).then(function () {
                                    examAppliedListGetUpdateResult(dataRep['selectedType']);
                                    DataTableForExamAppliedListResultUpload();
                                });
                            }
                        });
                    }
                });





            }
        });
    }

    buttons.push({
        text: 'Download',
        className: 'btn btn-primary flBtn',
        action: function (e, dt, node, config) {
            ModelForDownlodGradeSheetMarkSheet();
            openModelDownloadGradeSheetMarkSheet();

        }
    });

    if (serchedAttemped == "R" && (dataRep["selectedSubjectStatus"] != undefined && dataRep["selectedSubjectStatus"].toUpperCase() == 'T')) {

        if (!$.fn.DataTable.isDataTable('#examAppliedListTableForUploadRuslt'))
            var table = $('#examAppliedListTableForUploadRuslt').DataTable({
                dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
                    "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
                    "<'row'<'col-12't>>" + // Table in a single line
                    "<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
                buttons: buttons,
                columnDefs: [{
                    targets: 0,
                    orderable: false,
                    searchable: false,
                    className: 'selectall-checkbox',
                },
                { width: '5%', targets: 0 },
                { width: '10%', targets: 1 },
                { width: '15%', targets: 2 },
                { width: '5%', targets: 3 },
                { width: '5%', targets: 4 },
                { width: '5%', targets: 5 },
                { width: '5%', targets: 6 },
                { width: '10%', targets: 7 },
                { width: '10%', targets: 8 },
                { width: '10%', targets: 9 },
                { width: '10%', targets: 10 },
                // { width: '10%', targets: 8 },
                // { width: '10%', targets: 9 },
                // { width: '10%', targets: 10 },
                // { width: '10%', targets: 11 },
                // { "width": "15%", "targets": 2 },
                {
                    targets: 0,
                    orderable: false,
                    searchable: false
                },
                ],
                order: [1, 'asc'],
            });


    } else if (serchedAttemped == "R" || (dataRep["selectedSubjectStatus"] != undefined && dataRep["selectedSubjectStatus"].toUpperCase() == 'T')) {

        if (!$.fn.DataTable.isDataTable('#examAppliedListTableForUploadRuslt'))
            var table = $('#examAppliedListTableForUploadRuslt').DataTable({
                dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
                    "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
                    "<'row'<'col-12't>>" + // Table in a single line
                    "<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
                buttons: buttons,
                columnDefs: [{
                    targets: 0,
                    orderable: false,
                    searchable: false,
                    className: 'selectall-checkbox',
                },
                { width: '5%', targets: 0 },
                { width: '10%', targets: 1 },
                { width: '15%', targets: 2 },
                { width: '5%', targets: 3 },
                { width: '5%', targets: 4 },
                { width: '5%', targets: 5 },
                { width: '5%', targets: 6 },
                { width: '10%', targets: 7 },
                { width: '10%', targets: 8 },
                { width: '10%', targets: 9 },
                // { width: '10%', targets: 8 },
                // { width: '10%', targets: 9 },
                // { width: '10%', targets: 10 },
                // { width: '10%', targets: 11 },
                // { "width": "15%", "targets": 2 },
                {
                    targets: 0,
                    orderable: false,
                    searchable: false
                },
                ],
                order: [1, 'asc'],
            });


    }
    else {
        if (!$.fn.DataTable.isDataTable('#examAppliedListTableForUploadRuslt'))
            var table = $('#examAppliedListTableForUploadRuslt').DataTable({
                dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
                    "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
                    "<'row'<'col-12't>>" + // Table in a single line
                    "<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
                buttons: buttons,
                columnDefs: [{
                    targets: 0,
                    orderable: false,
                    searchable: false,
                    className: 'selectall-checkbox',
                },
                { width: '5%', targets: 0 },
                { width: '10%', targets: 1 },
                { width: '15%', targets: 2 },
                { width: '5%', targets: 3 },
                { width: '5%', targets: 4 },
                { width: '5%', targets: 5 },
                { width: '5%', targets: 6 },
                { width: '10%', targets: 7 },
                { width: '10%', targets: 8 },
                // { width: '10%', targets: 8 },
                // { width: '10%', targets: 9 },
                // { width: '10%', targets: 10 },
                // { width: '10%', targets: 11 },
                // { "width": "15%", "targets": 2 },
                {
                    targets: 0,
                    orderable: false,
                    searchable: false
                },
                ],
                order: [1, 'asc'],
            });
    }

}


function DataTableForExamAppliedListResultUploadFinal() {

    var buttons = [];

    buttons.push({
        text: 'Download Final Mark Sheet',
        className: 'btn btn-primary flBtn',
        action: function (e, dt, node, config) {
            examDownloadFinalReportForNew();
        }
    });

    if (dataRep['roleName'] == "Administrator" || dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar') {
        buttons.push({
            text: 'Download Final Mark Sheet 2',
            className: 'btn btn-primary flBtn',
            action: function (e, dt, node, config) {
                examDownloadFinalReportForNew2();
            }
        });
    }

    if (dataRep['roleName'] == "Examination Department" || dataRep['roleName'] == "Administrator" || dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar') {
        buttons.push({
            text: 'Download Detail Certificate',
            className: 'btn btn-primary flBtn',
            action: function (e, dt, node, config) {
                printdDetailCertificateNew();
            }
        });

        buttons.push({
            text: 'Download Academic Transcript',
            className: 'btn btn-primary flBtn',
            action: function (e, dt, node, config) {
                printTranscriptNew();
            }
        });
    }

    if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar') {
        if (!$.fn.DataTable.isDataTable('#examAppliedListTableForUploadRuslt'))
            tableFinalDataTable = $('#examAppliedListTableForUploadRuslt').DataTable({
                dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
                    "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
                    "<'row'<'col-12't>>" + // Table in a single line
                    "<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
                buttons: buttons,
                columnDefs: [{
                    targets: 0,
                    orderable: false,
                    searchable: false,
                    className: 'selectall-checkbox',
                },
                    // { width: '5%', targets: 0 },
                    // { width: '5%', targets: 1 },
                    // { width: '20%', targets: 2 },
                    // { width: '10%', targets: 3 },
                    // { width: '10%', targets: 4 },
                    // { width: '10%', targets: 5 },
                    // { width: '10%', targets: 6 },
                    // { width: '10%', targets: 7 },
                    // { width: '15%', targets: 8 },
                    // { width: '10%', targets: 9 },
                    // { width: '10%', targets: 7 },
                    // { width: '10%', targets: 8 },
                    // { width: '10%', targets: 9 },
                    // { width: '10%', targets: 10 },
                    // { width: '10%', targets: 11 },
                    // { "width": "15%", "targets": 2 },

                ],
                order: [1, 'asc'],
            });
    } else {

        if (!$.fn.DataTable.isDataTable('#examAppliedListTableForUploadRuslt'))
            tableFinalDataTable = $('#examAppliedListTableForUploadRuslt').DataTable({
                dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
                    "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
                    "<'row'<'col-12't>>" + // Table in a single line
                    "<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
                buttons: buttons,
                columnDefs: [{
                    targets: 0,
                    orderable: false,
                    searchable: false,
                    className: 'selectall-checkbox',
                },
                    // { width: '5%', targets: 0 },
                    // { width: '5%', targets: 1 },
                    // { width: '30%', targets: 2 },
                    // { width: '10%', targets: 3 },
                    // { width: '10%', targets: 4 },
                    // { width: '10%', targets: 5 },
                    // { width: '10%', targets: 6 },
                    // { width: '10%', targets: 7 },
                    // { width: '15%', targets: 8 },
                    // { width: '10%', targets: 7 },
                    // { width: '10%', targets: 8 },
                    // { width: '10%', targets: 9 },
                    // { width: '10%', targets: 10 },
                    // { width: '10%', targets: 11 },
                    // { "width": "15%", "targets": 2 },

                ],
                order: [1, 'asc'],
            });
    }
    tableFinalDataTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
        var countSelectedRows = tableFinalDataTable.rows({ selected: true }).count();
        var countItems = tableFinalDataTable.rows().count();

        if (countItems > 0) {
            if (countSelectedRows == countItems) {
                $('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
            } else {
                $('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
            }
        }

        if (e.type === 'select') {
            $('.selectall-checkbox input[type="checkbox"]', tableFinalDataTable.rows({ selected: true }).nodes()).prop('checked', true);
        } else {
            $('.selectall-checkbox input[type="checkbox"]', tableFinalDataTable.rows({ selected: false }).nodes()).prop('checked', false);
        }
    });

    // When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
    tableFinalDataTable.on('click', 'thead .selectall-checkbox', function () {
        $('input[type="checkbox"]', this).trigger('click');
    });


    // When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
    tableFinalDataTable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
        if (this.checked) {
            tableFinalDataTable.rows().select();
            for (i = 0; i < st_count2; i++) {
                var checkBoxDivIdRegistered = '#checkSelected' + i;
                if ($(checkBoxDivIdRegistered)) {
                    $(checkBoxDivIdRegistered).prop("checked", true);
                }
            }
        } else {
            tableFinalDataTable.rows().deselect();
            for (i = 0; i < st_count2; i++) {
                var checkBoxDivIdRegistered = '#checkSelected' + i;
                if ($(checkBoxDivIdRegistered)) {
                    $(checkBoxDivIdRegistered).prop("checked", false);
                }
            }
        }

        e.stopPropagation();
    });





}



function formResultUploadNew(dsp) {

    str = "";
    title = "Exam Result Upload";
    if (dataRep['roleName'] == 'Examination Department' || dataRep['roleName'] == 'Senior Assistant Registrar' || dataRep['roleName'] == 'Assistant Registrar') {
        title = "Exam Result Download";

    } else if (dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'FGS Deputy Registrar') {
        title = "Release Exam Results";

    }

    if (dsp == "formExamAppliedListForStudentsResultUpdate" || dsp == "formExamAppliedListSubjectForStudentsResultUpdate" || dsp == "formExamAppliedListForStudentsResultUpdate") {
        // if (dsp == "formExamAppliedList" || dsp == "formExamAppliedListSubject" || dsp == "formExamAppliedListStudent") {


        str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
        str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
        str += '<ul class="navbar-nav mr-lg-2">';
        str += '<li class="nav-item ml-0">';
        str += '<h4 class="mb-0">' + title + '</h4>';
        str += '</li></ul></div></nav>';

        str += "<div id='updateApplicantList'>";

        str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="form-group row">';

        str += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedDegreeName"  onchange="dataRep[this.id]=this.value;getSubjectForResultUpdate();hideMediums();">';
        str += '</select>';
        str += '</div></div>';

        let date = new Date().getFullYear();


        str += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">'
        str += '<div class="col-xm-3 col-lg-4 col-md-3 col-sm-3 col-xs-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';

        str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;getSubjectForResultUpdate();">';
        for (i = 2014; i <= date + 1; i++) {
            if (i == date + 1) {
                str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
            } else {
                str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
            }
        }
        str += '</select>';
        str += '</div>';
        str += '</div>';


        if (dataRep['selectMedium'] == 'mediumSinhala') {
            mediumSinhalaChecked = 'checked';
        } else if (dataRep['selectMedium'] == 'mediumEnglish') {
            mediumEnglishChecked = 'checked'
        }




        str += '<div class="col-xl-9 col-lg-9 MediumRadioFullBox">';
        str += '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 col-pl-27" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium</label></div>';
        str += '<div class="col-xl-7 col-lg-8 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';
        str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();' " + ((dataRep["selectMedium"] == 'mediumSinhala') ? "checked" : "") + ">Sinhala<i class='input-helper'></i></label></div>";
        str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();' " + ((dataRep["selectMedium"] == 'mediumEnglish') ? "checked" : "") + ">English<i class='input-helper'></i></label></div></div>";
        str += '</div>';




        str += '<div class="col-xl-9 col-lg-9">'
        str += '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 col-pl-27" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Semester</label></div>';
        str += '<div class="col-xl-7 col-lg-8 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';
        str += "<div class='form-check' style='margin-right: 25px;'> <label class='form-check-label'> <input type='radio' id='sem1' class='form-check-input' name='selectedSemester' value='1' onclick='dataRep[this.name]=this.value;getSubjectForResultUpdate();' " + ((dataRep["selectedSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div>";
        str += "<div class='form-check' style='margin-right: 25px;'> <label class='form-check-label'> <input type='radio' id='sem2' class='form-check-input' name='selectedSemester' value='2' onclick='dataRep[this.name]=this.value;getSubjectForResultUpdate();' " + ((dataRep["selectedSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div>";
        str += "<div class='form-check' style='margin-right: 25px;'> <label class='form-check-label'> <input type='radio' id='sem3' class='form-check-input' name='selectedSemester' value='3' onclick='dataRep[this.name]=this.value;getSubjectForResultUpdate();' " + ((dataRep["selectedSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div>";
        str += "<div class='form-check' style='margin-right: 25px;'> <label class='form-check-label'> <input type='radio' id='sem4' class='form-check-input' name='selectedSemester' value='4' onclick='dataRep[this.name]=this.value;getSubjectForResultUpdate();' " + ((dataRep["selectedSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div>";
        str += "<div class='form-check' style='margin-right: 25px;'> <label class='form-check-label'> <input type='radio' id='semEnd' class='form-check-input' name='selectedSemester' value='0' onclick='dataRep[this.name]=this.value;getSubjectForResultUpdate();' " + ((dataRep["selectedSemester"] == '0') ? "checked" : "") + ">End of Year<i class='input-helper'></i></label></div>";

        str += '</div>';
        str += '</div>';
        str += '</div>';


        subjetcs = "";
        if (subjectCodeLength > 0) {



            str += '<div class="form-group row"><div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">'
            str += '<div class="col-lg-3 col-md-3 col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Attempt</label></div>';
            str += '<div class="col-xl-9 col-lg-8 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';
            str += "<div class='form-check' style='margin-right: 10px;'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='attemptTimeChange(1);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div>";
            str += "<div class='form-check' style='margin-right: 10px;'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='attemptTimeChange(2);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div>";
            str += "<div class='form-check' style=''> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='attemptTimeChange(3);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-Repeat<i class='input-helper'></i></label></div>";
            // str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="RegStudentList1();DataTableForSelectedApplicantTable();">View List</button></div>';

            str += '</div>';
            str += '</div>';

            for (j = 0; j < subjectCodeLength; j++) {
                subjetcs += "<option " + ((dataRep["selectedSubject"] == subjectCodeArr[j]) ? "selected" : "") + " value='" + subjectCodeArr[j] + "'>" + subjectCodeArr[j] + " (" + subjectTitleArr[j] + ")</option>";
            }



            str += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 " id="attmeptTime" style="display:' + ((dataRep["selectedAttempt"] == "RR") ? "" : "none") + '">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Attempt Time</label></div>';
            str += '<div class="col-xl-9 col-lg-8 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';
            str += '<select class="form-control form-control-sm" id="selectedAttemptTime" onchange="dataRep[this.id]=this.value;">';
            str += '<option value="1" ' + ((dataRep["selectedAttemptTime"] == "1") ? "selected" : "") + '>1</option>';
            str += '<option value="2" ' + ((dataRep["selectedAttemptTime"] == "2") ? "selected" : "") + '>2</option>';
            str += '<option value="3" ' + ((dataRep["selectedAttemptTime"] == "3") ? "selected" : "") + '>3</option>';
            str += '<option value="4" ' + ((dataRep["selectedAttemptTime"] == "4") ? "selected" : "") + '>4</option>';
            str += '<option value="5" ' + ((dataRep["selectedAttemptTime"] == "5") ? "selected" : "") + '>5</option>';
            str += '<option value="6" ' + ((dataRep["selectedAttemptTime"] == "6") ? "selected" : "") + '>6</option>';
            str += '<option value="7" ' + ((dataRep["selectedAttemptTime"] == "7") ? "selected" : "") + '>7</option>';
            str += '<option value="8" ' + ((dataRep["selectedAttemptTime"] == "8") ? "selected" : "") + '>8</option>';
            str += '<option value="9" ' + ((dataRep["selectedAttemptTime"] == "9") ? "selected" : "") + '>9</option>';
            str += '<option value="10" ' + ((dataRep["selectedAttemptTime"] == "10") ? "selected" : "") + '>10</option>';
            str += '</select>';
            str += '</div></div>';


            str += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" style="padding-top: 8px;">'
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Paper Code</label></div>';
            str += '<div class="col-xl-9 col-lg-8 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';

            str += '<select class="form-control form-control-sm" id="selectedSubject" onchange="dataRep[this.id]=this.value;">';
            str += subjetcs;
            str += '</select>';
            str += '</div>';
            str += '</div>';

            str += '<div class="col-xl-12 mt-2">';
            str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="examAppliedListGetUpdateResult(1);DataTableForExamAppliedListResultUpload();">View List</button>';
            // if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Administrator') {
            //     str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="examAppliedListGetUpdateResult(2);DataTableForExamAppliedListResultUpload();">DR/Dean Not Approved</button>';
            // }
            // if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Assistant Bursar') {
            //     str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="examAppliedListGetUpdateResult(3);DataTableForExamAppliedListResultUpload();">Payment Not Approved</button>';
            // }
            str += '</div>';

            str += '</div>';


        }

        str += '</div></div>';
        str += '</div></div></div>';

        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="examAppliedListTableForUploadRuslt">';
        str += '<thead><tr>';
        str += '<th style="width:5%">#</th>';
        str += '<th style="width:20%">Student Number</th>';
        str += '<th style="width:10%">Student Name</th>';
        str += '<th style="width:10%">Examiner 1</th>';
        str += '<th style="width:10%">Examiner 2</th>';
        str += '<th style="width:10%">Marks</th>';
        str += '<th style="width:10%">Grade</th>';
        if (serchedAttemped == "R") {
            str += '<th style="width:10%">Reason</th>';
        }
        if (dataRep["selectedSubjectStatus"] != undefined) {
            if (dataRep["selectedSubjectStatus"].toUpperCase() == 'T') {
                str += '<th style="width:10%">Late Submission</th>';
                str += '<th style="width:10%">Effective Date</th>';
                str += '<th style="width:10%">Paid Amount</th>';
            }
        }
        str += '<th style="width:8%">Status</th>';
        if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Administrator') {
            str += '<th style="width:8%">Re-Scrutiny</th>';
        }
        if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Administrator') {
            str += '<th style="width:8%">Note</th>';
        }
        str += '<th style="width:8%">Released Date</th>';

        if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar') {
            str += '<th  style="width:7%">Remove Temp Hold</th>';
        }

        // if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Administrator') {
        //     str += '<th>Payment</th>';
        // }
        // if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Assistant Bursar') {
        //     str += '<th>Approve</th>';
        // }
        // if (dataRep['roleName'] == 'Administrator') {
        //     str += '<th>DR/Dean Approve</th>';
        // }
        str += '</tr></thead>';
        str += '<tbody>';

        if (ex_CodeLength > 0) {

            rcount = 0;
            for (var i = rcount; i < ex_studentNoArr.length; i++) {
                // console
                if (dataRep["selectedType"] == 1 || (ex_examiner1[i] != '' && ex_examiner2[i] != '' && (dataRep["selectedType"] == 2 || dataRep["selectedType"] == 3))) {
                    rcount++;
                    str += '<tr>';
                    str += '<td>' + rcount + '</td>';
                    str += '<td>' + ex_studentNoArr[i] + '</td>';
                    str += '<td>' + ex_studentNameArr[i] + '</td>';
                    // str += '<td>' + ex_appliedDateArr[i] + '</td>';
                    if (ex_examiner1[i] == '') {
                        if (ex_examsisMedical[i] == 1) {
                            if (ex_examsmedicalApprove[i] == 1) {
                                str += '<td></td>';
                            } else {
                                str += '<td><input type=text id="examiner1" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';
                            }
                        } else {
                            str += '<td><input type=text id="examiner1" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';
                        }
                    }

                    // else if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Administrator') {
                    //     if (ex_examiner1[i] == 125) {
                    //         str += '<td><input type=text id="examiner1" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';
                    //     } else {
                    //         str += '<td><input type=text value="' + ex_examiner1[i] + '" id="examiner1" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';
                    //     }
                    // }

                    // else if (ex_examiner1[i] == 125) {
                    //     str += '<td><input type=text id="examiner1" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';
                    // }
                    else if (ex_examiner1[i] == 125) {
                        str += '<td>ab</td>';
                    } else {
                        str += '<td>' + ex_examiner1[i] + '</td>';
                    }

                    if (ex_examiner2[i] == '') {
                        if (ex_examsisMedical[i] == 1) {
                            if (ex_examsmedicalApprove[i] == 1) {
                                str += '<td></td>';
                            } else {
                                str += '<td><input type=text id="examiner2" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';

                            }
                        } else {
                            str += '<td><input type=text id="examiner2" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';
                        }
                    }

                    // else if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Administrator') {
                    //     if (ex_examiner2[i] == 125) {
                    //         str += '<td><input type=text id="examiner2" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';

                    //     } else {
                    //         str += '<td><input type=text value="' + ex_examiner2[i] + '" id="examiner2" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';
                    //     }
                    // }

                    // else if (ex_examiner2[i] == 125) {
                    //     str += '<td><input type=text id="examiner2" class="form-control form-control-sm" style="border: 1px solid #000;" placeholder="Enter Result" onkeypress="return restrictInput(event)"></td>';

                    // }
                    else if (ex_examiner2[i] == 125) {
                        str += '<td>ab</td>';
                    } else {
                        str += '<td>' + ex_examiner2[i] + '</td>';
                    }

                    if (ex_examiner2[i] == 125) {
                        str += '<td>ab</td>';
                    } else {
                        str += '<td>' + ex_mark[i] + '</td>';
                    }
                    str += '<td>' + ex_grade[i] + '</td>';



                    if (serchedAttemped == "R") {


                        if (ex_examiner2[i] == '' || ex_examiner1[i] == '') {
                            str += '<td>'
                            if (ex_examsisMedical[i] == 1) {
                                // str += 'Medical';
                                if (ex_examsmedicalApprove[i] == 0) {
                                    str += ' <span style="color:#21BF06">Approved Medical</span>';
                                } else if (ex_examsmedicalApprove[i] == 2) {
                                    str += ' <span style="color:#F39915">Rejected Medical</span>';
                                } else {
                                    str += ' <span style="color:#ff4747">Pending Status (Medical)</span>';
                                }
                            } else {
                                str += 'Repeat';
                            }


                            str += '</td>'
                            // str += '<td><select class="form-control form-control-sm" id="reason" style="border: 1px solid #000;padding: 0px;">';
                            // str += "<option " + ((ex_examReasonDes[i] == "Repeat") ? "selected" : "") + " value='R'> Repeat </option>";
                            // str += "<option " + ((ex_examReasonDes[i] == "Medical/Other_Reasons") ? "selected" : "") + " value='M'>Medical</option>";
                            // str += '</select></td>';
                        } else {

                            if (ex_examReason[i] == "R") {
                                str += '<td>Repeat</td>';
                            } else if (ex_examReason[i] == "M") {
                                str += '<td>Medical</td>';
                            } else {
                                str += '<td>' + ex_examReason[i] + '</td>';
                            }
                        }

                    }

                    if (dataRep["selectedSubjectStatus"] != undefined) {
                        if (dataRep["selectedSubjectStatus"].toUpperCase() == 'T') {
                            let checkLateSub = "";
                            if (ex_latesubmission[i] == 1) {
                                checkLateSub = "checked";
                            }
                            if (ex_examiner2[i] == '' || ex_examiner1[i] == '') {
                                str += '<td style="text-align: center;"><input type="checkbox" id="latesubChk" style="border: 1px solid #000;text-align: center;" ' + checkLateSub + '></td>';
                                str += '<td><input type="date" class="form-control-sm" id="effectivedate" style="border: 1px solid #000;text-align: center;"></td>';
                            } else {
                                str += '<td style="text-align: center;"><input type="checkbox" id="latesubChk" style="border: 1px solid #000;text-align: center;" disabled ' + checkLateSub + '></td>';
                                str += '<td><input type="date" id="effectivedate" class="form-control-sm" style="border: 1px solid #000;text-align: center;" disabled value="' + ex_effectivedatethesis[i] + '"></td>';

                            }
                            str += '<td>' + (parseInt(ex_paidAmount[i]).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';

                        }
                    }

                    if (dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar') {


                        if (ex_examiner1[i] == '' || ex_examiner2[i] == '') {
                            str += '<td></td>';
                            if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Administrator') {

                                str += '<td></td>';
                            }
                        } else {
                            // console.log(ex_status)
                            // console.log(i)
                            if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Administrator') {
                                // str += '<th>Hold/Release</th>';



                                let op = "<option " + ((ex_cstatus[i] == 1 || ex_cstatus[i] == '') ? "selected" : "") + " value='1'>Not Released</option>";
                                op += "<option " + ((ex_cstatus[i] == 0) ? "selected" : "") + " value='0'>Released</option>";
                                op += "<option " + ((ex_cstatus[i] == 'H') ? "selected" : "") + " value='H'>Hold</option>";
                                // op += "<option " + ((ex_status[i] == 'NP') ? "selected" : "") + " value='NP'>Not Payed</option>";
                                let BGcolor = statusBackGroundColor(ex_cstatus[i]);
                                let resReleasedDisabled = "disabled";
                                if (dataRep['roleName'] == 'Administrator') {
                                    if (ex_cstatus[i] == 'H' || ex_cstatus[i] == 0) {
                                        resReleasedDisabled = "disabled";
                                    } else {
                                        resReleasedDisabled = "";
                                    }
                                } else {
                                    resReleasedDisabled = "";
                                }

                                str += '<td><select class="form-control form-control-sm" style="background-color:' + BGcolor + ';color:#FFF !important" id="resultStatus' + i + '" ' + resReleasedDisabled + '  onchange="updateResultStatus(this,' + i + ');">';
                                str += op;
                                str += '</select></td>';
                                str += '<td><button class="form-control btn btn-sm btn-warning" onclick="updateResultRescrutiny(this,' + i + ');">';
                                str += "Re-Scrutiny";
                                str += '</button></td>';


                            } else {
                                // str += '<td></td>';
                            }

                        }
                        str += '<td>' + ex_cstatusnotes[i] + '</td>';


                    } else {
                        if (ex_cstatus[i] == '') {
                            str += '<td></td>';
                        } else if (ex_cstatus[i] == 0) {
                            str += '<td>Released</td>';
                        } else if (ex_cstatus[i] == 'H') {
                            str += '<td>Hold</td>';
                        }
                        else if (ex_cstatus[i] == 'NP') {
                            str += '<td>Not Payed</td>';
                        } else if (ex_examiner1[i] == '' || ex_examiner2[i] == '') {
                            str += '<td></td>';
                        }
                        else {
                            str += '<td>Not Released</td>';
                        }
                    }

                    str += '<td>' + ex_releasedDate[i] + '</td>';

                    if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'FGS Deputy Registrar') {
                        let op = "<option " + ((ex_holdstatus[i] == 1) ? "selected" : "") + " value='1'>Hold</option>";
                        op += "<option " + ((ex_holdstatus[i] == 0 || ex_holdstatus[i] == '') ? "selected" : "") + " value='0'>Not Hold</option>";
                        let BGcolor = statusBackGroundColor(ex_holdstatus[i]);
                        let resReleasedDisabled = "disabled";

                        if (ex_holdstatus[i] != 1) {
                            resReleasedDisabled = "disabled";
                        } else {
                            resReleasedDisabled = "";
                        }

                        str += '<td><select class="form-control form-control-sm" style="width:120px;background-color:' + BGcolor + ';color:#FFF !important" id="resultStatus' + i + '"  ' + resReleasedDisabled + ' onchange="updateRemoveHoldResults(this,' + i + ');">';
                        str += op;
                        str += '</select></td>';
                    }

                    // if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Administrator') {
                    //     if (ex_paymentApprove[i] == 0) {
                    //         str += '<td><input type="button" class="btn btn-success" value="Approved" disabled style="width: 100%;background-color: #284e05!important;border-color: #5e9030!important;" /></td>';
                    //     } else {
                    //         str += '<td><input type="button" class="btn btn-danger" value="Not Approved" disabled /></td>';
                    //     }
                    //     // str += '<td>Not Approved</td>';
                    // }


                    // if (dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR') {
                    //     if (dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR') {
                    //         if (ex_examiner1[i] == '' || ex_examiner2[i] == '') {
                    //             str += '<td></td>';
                    //         } else {
                    //             str += '<td>';
                    //             if (ex_drApporve[i] == 0) {
                    //                 str += '<input type="button" class="btn btn-info" id="resultsApprove' + i + '" value="Approve" disabled onclick=approveDR(' + i + ')> ';
                    //             } else {
                    //                 str += '<input type="button" class="btn btn-info" id="resultsApprove' + i + '" value="Approve" onclick=approveDR(' + i + ')>';
                    //             }
                    //             str += '</td>';
                    //         }
                    //     }
                    // } else if (dataRep['roleName'] == 'Assistant Bursar') {
                    //     if (dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'SAR') {
                    //         if (ex_examiner1[i] == '' || ex_examiner2[i] == '') {
                    //             str += '<td></td>';
                    //         } else {
                    //             str += '<td>';
                    //             str += '<input type="button" class="btn btn-info" id="paymentApprove' + i + '" value="Approve" onclick=approvePayment(' + i + ')>';
                    //             str += '</td>';
                    //         }
                    //     }
                    // }

                    // if (dataRep['roleName'] == 'Administrator') {
                    //     str += '<td>';
                    //     if (ex_drApporve[i] == 0) {
                    //         str += '<input type="button" class="btn btn-info" id="resultsApprove' + i + '" value="Approve" disabled style="width: 100%;background-color: #284e05!important;border-color: #5e9030!important;"> ';
                    //     } else {
                    //         str += '<input type="button" class="btn btn-danger" id="resultsApprove' + i + '" value="Not Approve" disabled style="width: 100%;">';
                    //     }
                    //     str += '</td>';

                    // }

                    // ex_cstatus[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("sStatus");
                    // ex_drApporve[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("drApprove");
                    // ex_paymentApprove[ex_CodeLength] = xml.getElementsByTagName("record")[i].getAttribute("paymentApprove");








                    str += '</tr>';
                }
            }

        }



        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += "<div  id='selectedlistbtn' style='margin:clear:both'></div>";



    }
    return str;

}


function formResultUploadNewFinal(dsp) {

    str = "";
    title = "Final Result";

    if (dsp == "formExamAppliedListForGetFinalResult") {
        // if (dsp == "formExamAppliedList" || dsp == "formExamAppliedListSubject" || dsp == "formExamAppliedListStudent") {


        str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
        str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
        str += '<ul class="navbar-nav mr-lg-2">';
        str += '<li class="nav-item ml-0">';
        str += '<h4 class="mb-0">' + title + '</h4>';
        str += '</li></ul></div></nav>';

        str += "<div id='updateApplicantList'>";

        str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="form-group row">';

        str += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedDegreeName"  onchange="dataRep[this.id]=this.value;hideMediums();">';
        str += '</select>';
        str += '</div></div>';

        let date = new Date().getFullYear();


        str += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">'
        str += '<div class="col-xm-3 col-lg-4 col-md-3 col-sm-3 col-xs-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';

        str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;">';
        for (i = 2014; i <= date + 1; i++) {
            if (i == date + 1) {
                str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
            } else {
                str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
            }
        }
        str += '</select>';
        str += '</div>';
        str += '</div>';


        if (dataRep['selectMedium'] == 'mediumSinhala') {
            mediumSinhalaChecked = 'checked';
        } else if (dataRep['selectMedium'] == 'mediumEnglish') {
            mediumEnglishChecked = 'checked'
        }



        str += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-2">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Batch</label></div>';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedBatchNumber">';
        str += setBatchNumberNew();
        str += '</select>';
        str += '</div></div>';

        str += '<div class="col-xl-9 col-lg-9 MediumRadioFullBox">';
        str += '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 col-pl-27" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium ' + mediumEnglishChecked + '</label></div>';
        str += '<div class="col-xl-7 col-lg-8 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';
        str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();' " + ((dataRep["selectMedium"] == 'mediumSinhala') ? "checked" : "") + ">Sinhala<i class='input-helper'></i></label></div>";
        str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();' " + ((dataRep["selectMedium"] == 'mediumEnglish') ? "checked" : "") + ">English<i class='input-helper'></i></label></div></div>";
        str += '</div>';


        str += '<div class="col-xl-12 mt-2">';

        str += '<div class="form-group row"><div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">'
        str += '<div class="col-lg-3 col-md-3 col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Attempt</label></div>';
        str += '<div class="col-xl-9 col-lg-8 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';
        str += "<div class='form-check' style='margin-right: 10px;'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='attemptTimeChange(1);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div>";
        str += "<div class='form-check' style='margin-right: 10px;'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='attemptTimeChange(2);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div>";
        str += "<div class='form-check' style=''> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='attemptTimeChange(3);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-Repeat<i class='input-helper'></i></label></div>";
        str += "<div class='form-check' style='margin-right: 10px;'> <label class='form-check-label'> <input type='radio' id='attempt4' class='form-check-input' name='selectedAttempt' value='Final' onclick='attemptTimeChange(1);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'Final') ? "checked" : "") + ">Final<i class='input-helper'></i></label></div>";

        // str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="RegStudentList1();DataTableForSelectedApplicantTable();">View List</button></div>';

        str += '</div>';
        str += '</div>';




        str += '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 " id="attmeptTime" style="display:' + ((dataRep["selectedAttempt"] == "RR") ? "" : "none") + '">';
        str += '<div class="col-sm-4" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Attempt Time</label></div>';
        str += '<div class="col-xl-7 col-lg-7 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedAttemptTime" onchange="dataRep[this.id]=this.value;">';
        str += '<option value="1" ' + ((dataRep["selectedAttemptTime"] == "1") ? "selected" : "") + '>1</option>';
        str += '<option value="2" ' + ((dataRep["selectedAttemptTime"] == "2") ? "selected" : "") + '>2</option>';
        str += '<option value="3" ' + ((dataRep["selectedAttemptTime"] == "3") ? "selected" : "") + '>3</option>';
        str += '<option value="4" ' + ((dataRep["selectedAttemptTime"] == "4") ? "selected" : "") + '>4</option>';
        str += '<option value="5" ' + ((dataRep["selectedAttemptTime"] == "5") ? "selected" : "") + '>5</option>';
        str += '<option value="6" ' + ((dataRep["selectedAttemptTime"] == "6") ? "selected" : "") + '>6</option>';
        str += '<option value="7" ' + ((dataRep["selectedAttemptTime"] == "7") ? "selected" : "") + '>7</option>';
        str += '<option value="8" ' + ((dataRep["selectedAttemptTime"] == "8") ? "selected" : "") + '>8</option>';
        str += '<option value="9" ' + ((dataRep["selectedAttemptTime"] == "9") ? "selected" : "") + '>9</option>';
        str += '<option value="10" ' + ((dataRep["selectedAttemptTime"] == "10") ? "selected" : "") + '>10</option>';
        str += '</select>';
        str += '</div></div>';
        str += '</div>';


        str += '<div class="col-xl-12 mt-2">';
        str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="examDownloadFinalReportForTable()">View List</button>';
        
        str += '</div>';


        str += '</div></div>';
        str += '</div></div></div>';

        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="examAppliedListTableForUploadRuslt">';
        str += '<thead><tr>';
        str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
        str += '<th>No</th>';
        // str += '<th>Batch Number</th>';
        str += '<th>Student Number</th>';
        // str += '<th>Effective Date</th>';
        str += '<th>Passed Modules GPA</th>';
        str += '<th>Applied Modules GPA</th>';
        str += '<th>Final GPA</th>';
        // str += '<th>GPAT</th>';
        str += '<th>Total Credits</th>';
        str += '<th>Completed Credits</th>';
        str += '<th>Total Grade Value</th>';
        str += '<th>Status</th>';

        str += '</tr></thead>';
        str += '<tbody id="totalGradeBody">';




        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += "<div  id='selectedlistbtn' style='margin:clear:both'></div>";



    }
    return str;

}

// funtion
//-------------------------------------------------MAIN FUNCTION END--------------------------------------------- 

function restrictInput(event) {
    const charCode = event.charCode;
    // Allow only digits 0-9 (charCode 48-57) and letters 'a' (charCode 97) or 'b' (charCode 98)
    if (charCode >= 48 && charCode <= 57 || charCode === 65 || charCode === 66 || charCode === 97 || charCode === 98) {
        return true;
    }
    return false;
}

function getSubjectForResultUpdate() {
    ex_CodeLength = 0;
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" || document.getElementById('achedamicYear').value == "Please Select Academic Year" || dataRep["selectedSemester"] == "") {
        // alert("Please Select a value from the select Box(s)");

    } else {

        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        sendForm("data4ExamAppliedListSubjectForStudentsResultUpdate");
    }
}

function examAppliedListGetUpdateResult(type) {
    // 1 = all
    // 2 = list for dr/Dean approve
    // 3 = list for payement apporve
    dataRep["selectedMedium"] = md;

    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" ||
        document.getElementById('achedamicYear').value == "Please Select Academic Year" ||
        dataRep["selectedSubject"] == "" ||
        dataRep["selectedMedium"] == "" ||
        dataRep["selectedAttempt"] == "" ||
        dataRep["selectedSemester"] == "") {
        // alert("Please Select a value from the select Box(s)");
        if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Degree',
                text: 'Please scroll down and select a degree.'
            });
        } else if (document.getElementById('achedamicYear').value == "Please Select Academic Year") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Academic Year',
                text: 'Please select an academic year from the list.'
            });
        } else if (dataRep["selectedSubject"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Paper Code',
                text: 'Please enter a paper code.'
            });
        } else if (dataRep["selectedMedium"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Medium',
                text: 'Please select a medium from the options.'
            });
        } else if (dataRep["selectedAttempt"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Attempt',
                text: 'Please select an attempt from the options.'
            });
        } else if (dataRep["selectedSemester"] == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Select Semester',
                text: 'Please select a semester from the options.'
            });
        }
    } else {
        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        dataRep["selectedSubject"] = document.getElementById('selectedSubject').value;

        if (dataRep["selectedSubject"] != "") {
            for (j = 0; j < subjectCodeLength; j++) {
                if (subjectCodeArr[j] == dataRep["selectedSubject"]) {
                    dataRep["selectedSubjectStatus"] = subjectStatusArr[j]
                }
                // subjetcs += "<option " + ((dataRep["selectedSubject"] == subjectCodeArr[j]) ? "selected" : "") + ">" + subjectCodeArr[j] + "</option>";
            }
        }



        serchedAcadamicYear = dataRep["achedamicYear"];

        var selectElement = document.getElementById("selectedDegreeName");
        var selectedOption = selectElement.options[selectElement.selectedIndex];
        var title = selectedOption.title;

        serchedDegreeCode = $('#selectedDegreeName').val();
        serchedSubjectName = dataRep["selectedSubject"];
        serchedSemester = dataRep["selectedSemester"];
        serchedAttemped = dataRep["selectedAttempt"];
        dataRep["selectedMedium"] = md;

        let repeatAttempt = "1";
        if (serchedAttemped == "RR") {
            repeatAttempt = $('#selectedAttemptTime').val();
        }
        dataRep["selectedAttemptTime"] = repeatAttempt;
        serchedAttemptTime = dataRep["selectedAttemptTime"];
        dataRep["selectedType"] = type;



        sendForm("data4ExamAppliedListForStudentsResultUpdate");
    }
}



var tNo = 0;
var rcount = 0;

// examDownloadSubjectGradesForNewTest
async function DownloadSelectedApplicantListNew(Downloadtype) {
    var count = 1;
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
        alert("Please Select Programm and the Year.");
    }

    else {

        // var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
        // newStr += "<div id='topics1' class='info'></div>";
        // // newStr += '<img src="img/wordTitle3.png" width="700"/>';
        // // newStr += '<div style="display: flex; align-items: center; justify-content: center;">';
        // // newStr += '<img src="img/logo.png"  style="width: 10%;" />';
        // // newStr += "<div style='text-align: center;'><div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>Faculty of Graduate Studies</div>";
        // // newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>University of Kelaniya -Sri Lanka</div></div>";
        // // newStr += '<img src="img/fgs.jpg" width="10%" />';

        // // newStr += '</div>';
        // newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>" + document.getElementById('selectedDegreeName').value + "</div>";
        var newStr = "";

        newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
        newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
        newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";


        let sub = "";
        let currentSubCode = "";
        if (subjectCodeLength > 0) {
            for (j = 0; j < subjectCodeLength; j++) {
                if (dataRep["selectedSubject"] == subjectCodeArr[j]) {
                    sub = subjectTitleArr[j] + " (" + subjectCodeArr[j] + ")";
                    currentSubCode = subjectCodeArr[j];
                }
            }
        }

        let showSem = dataRep["selectedSemester"];
        if (showSem == "0") {
            showSem = "End of the Year";
        }
        // newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + sub + "</div>";
        // newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year " + document.getElementById('achedamicYear').value + " - Semester " + dataRep["selectedSemester"] + "</div>";
        newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + sub + "</div>";
        newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + " - Semester - " + showSem + "</div>";

        if (Downloadtype == "FullList") {
            newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List Of Exam Applied</div>";
            newStr += "<br/>";
            newStr += "<div  id='inputs' style='margin:0px 5px;clear:both'></div>";
            newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
            newStr += "<thead>";
            newStr += "<tr>";
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">No</th>';
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%;height: 50px;">Student No</th>';
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:50%;height: 50px;">Name With Initial</th>';
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">Applied Date</th>';
            newStr += "</tr>";
            newStr += "</thead>";

            for (i = 0; i < ex_CodeLength; i++) {
                newStr += "<tr>";
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">' + count + '</td>';
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%;height: 50px;" >' + ex_studentNoArr[i] + '</td>';
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:50%;height: 50px;" >' + ex_studentNameArr[i] + '</td>';
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%;height: 50px;">' + ex_appliedDateArr[i] + '</td>';
                newStr += "</tr>";
                count++;
            }
            var exportFilename = "Exam Applied List - " + document.getElementById('achedamicYear').value + " - " + currentSubCode + ".doc";
            newStr += "</table></div>";
            let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
            sendDataList += "&sheetName=" + "Exam Applied List";
            isrHandle.getDoc(newStr, exportFilename);

        }

        if (Downloadtype == "examAttendaceSheet") {




            let showSemValue = dataRep["selectedSemester"] == 0 ? "End Semester" : dataRep["selectedSemester"];
            let attempType = "";
            if (dataRep['selectedAttempt'] == "F") {
                attempType = "First Time Examination";
            } else if (dataRep['selectedAttempt'] == "R") {
                attempType = "Repeat Examination";
            } else if (dataRep['selectedAttempt'] == "RR") {
                if ($("#selectedAttemptTime option:selected").val() != 1) {
                    attempType = "Re-Repeat - Attempt " + $("#selectedAttemptTime option:selected").val() + " Examination";
                } else {
                    attempType = "Re-Repeat Examination";
                }

            }


            const response = await fetch(host + 'images/fgslogo.png'); // Replace with actual image URL
            const imageBlob = await response.blob();
            const imageArrayBuffer = await imageBlob.arrayBuffer();
            const { BorderStyle, Document, ImageRun, convertInchesToTwip, Packer, Paragraph, Table, TableRow, TableCell, TextRun, AlignmentType, WidthType, Footer, PageNumber } = docx;
            let medium = "";
            if (dataRep["selectedMedium"] == "en") {
                medium = "English Medium";
            } else if (dataRep["selectedMedium"] == "si") {
                medium = "Sinhala Medium";
            }

            let countEn = 0;
            let docEn = new Document({
                sections: [{
                    properties: {
                        page: {
                            top: 0,  // 0.5 inches converted to twips (72 points per inch)
                            right: 0,
                            bottom: 0,
                            left: 0,
                        },
                    },
                    footers: {
                        default: new Footer({
                            children: [

                                new Table({
                                    width: { size: 100, type: WidthType.PERCENTAGE },
                                    rows: [
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`Supervisor's Signature:____________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.4),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun(`Date: ________________`),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.4),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),


                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(`${sub} - ` + `Academic Year - ${document.getElementById('achedamicYear').value} - ` + `Semester - ${showSemValue} - ${attempType} (${medium})`),
                                                                // new TextRun(new Date().toISOString().split('T')[0]),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                    columnSpan: 2
                                                }),

                                            ],
                                        }),

                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,
                                                            children: [
                                                                new TextRun(``),
                                                                // new TextRun(new Date().toISOString().split('T')[0]),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,
                                                            children: [
                                                                new TextRun("Page "),
                                                                new TextRun({
                                                                    children: [PageNumber.CURRENT],
                                                                }),
                                                                new TextRun(" of "),
                                                                new TextRun({
                                                                    children: [PageNumber.TOTAL_PAGES],
                                                                }),
                                                            ],
                                                        }),
                                                    ], margins: {
                                                        top: convertInchesToTwip(0.2),
                                                        bottom: convertInchesToTwip(0.2),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],

                                    borders: {
                                        top: { size: 0 }, // No border for top
                                        bottom: { size: 0 }, // No border for bottom
                                        left: { size: 0 }, // No left border
                                        right: { size: 0 }, // No right border
                                        insideHorizontal: { size: 0 }, // No horizontal border inside
                                        insideVertical: { size: 0 }, // No vertical border inside
                                    },
                                }),

                            ],
                        }),


                    },

                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new ImageRun({
                                    data: imageArrayBuffer, // Use the fetched image
                                    transformation: {
                                        width: 300,
                                        height: 80,
                                    },
                                    altText: {
                                        title: "This is an ultimate title",
                                        description: "This is an ultimate image",
                                        name: "My Ultimate Image",
                                    },
                                }),

                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [

                                new TextRun({
                                    text: `${$("#selectedDegreeName option:selected").text()}`,
                                    bold: true,
                                    size: 24
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: `${attempType}`,
                                    size: 22
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: `${sub}`,
                                    size: 22
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: `Academic Year - ${document.getElementById('achedamicYear').value}`,
                                    size: 22
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: `Semester - ${showSemValue}`,
                                    size: 22
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: `Exam Attendance Sheet`,
                                    bold: true,
                                    size: 24
                                }),
                            ],
                        }),
                        new Paragraph({ text: " " }),
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({

                                            children: [new Paragraph({
                                                alignment: AlignmentType.LEFT,  // Align text to the center
                                                children: [new TextRun({
                                                    text: "Exam Hall",
                                                    bold: true  // Make the text bold
                                                })]
                                            })
                                            ],
                                            margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                            borders: {
                                                top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({
                                                alignment: AlignmentType.LEFT,  // Align text to the center
                                                children: [new TextRun({
                                                    text: ": ................................................",
                                                    bold: true  // Make the text bold
                                                })]
                                            })
                                            ], margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                            borders: {
                                                top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", alignment: AlignmentType.RIGHT })],
                                            borders: {
                                                top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "", alignment: AlignmentType.LEFT })],
                                            borders: {
                                                top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            },
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({

                                            children: [new Paragraph({
                                                alignment: AlignmentType.LEFT,  // Align text to the center
                                                children: [new TextRun({
                                                    text: "Exam Date",
                                                    bold: true  // Make the text bold
                                                })]
                                            })
                                            ],
                                            margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                            borders: {
                                                top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({
                                                alignment: AlignmentType.LEFT,  // Align text to the center
                                                children: [new TextRun({
                                                    text: ": ................................................",
                                                    bold: true  // Make the text bold
                                                })]
                                            })
                                            ], margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                            borders: {
                                                top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            },
                                        }),
                                        new TableCell({

                                            children: [new Paragraph({
                                                alignment: AlignmentType.RIGHT,  // Align text to the center
                                                children: [new TextRun({
                                                    text: "Exam Time",
                                                    bold: true  // Make the text bold
                                                })]
                                            })
                                            ],
                                            margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                            borders: {
                                                top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({
                                                alignment: AlignmentType.LEFT,  // Align text to the center
                                                children: [new TextRun({
                                                    text: ": ................................................",
                                                    bold: true  // Make the text bold
                                                })]
                                            })
                                            ],
                                            margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                            borders: {
                                                top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                                insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                                            },
                                        }),
                                    ],


                                }),
                            ],
                        }),
                        new Paragraph({ text: " " }),

                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    tableHeader: true,
                                    children: [
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    alignment: AlignmentType.CENTER,  // Align text to the center
                                                    children: [new TextRun({
                                                        text: "No",
                                                        bold: true  // Make the text bold
                                                    })]
                                                })
                                            ],
                                            width: { size: 6, type: WidthType.PERCENTAGE },
                                            margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                        }),
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    alignment: AlignmentType.CENTER,  // Align text to the center
                                                    children: [new TextRun({
                                                        text: "Student No",
                                                        bold: true  // Make the text bold
                                                    })]
                                                })
                                            ],
                                            width: { size: 14, type: WidthType.PERCENTAGE },
                                            margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                        }),
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    alignment: AlignmentType.CENTER,  // Align text to the center
                                                    children: [new TextRun({
                                                        text: "Full Name",
                                                        bold: true  // Make the text bold
                                                    })]
                                                })
                                            ],
                                            width: { size: 50, type: WidthType.PERCENTAGE },
                                            margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                        }),
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    alignment: AlignmentType.CENTER,  // Align text to the center
                                                    children: [new TextRun({
                                                        text: "Signature",
                                                        bold: true  // Make the text bold
                                                    })]
                                                })
                                            ],
                                            width: { size: 40, type: WidthType.PERCENTAGE },
                                            margins: {
                                                top: convertInchesToTwip(0.1),
                                                bottom: convertInchesToTwip(0.1),
                                                left: convertInchesToTwip(0.1),
                                                right: convertInchesToTwip(0.1),
                                            },
                                        }),
                                    ],
                                }),
                                // ex_studentNameArr
                                ...ex_studentNoArr
                                    .map((studNo, index) => {
                                        return new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,  // Align text to the right
                                                            spacing: {
                                                                line: 300                    // Increase the line height (you can adjust the value as needed)
                                                            },
                                                            // Center text vertically
                                                            children: [new TextRun((index + 1).toString())]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.RIGHT,  // Align text to the right
                                                            spacing: { line: 300 },          // Increase the line height (adjust as needed)
                                                            verticalAlign: 'center',         // Center text vertically
                                                            children: [new TextRun(studNo)]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.LEFT,   // Align text to the left
                                                            spacing: { line: 300 },          // Increase the line height
                                                            children: [new TextRun(ex_studentNameArr[index])]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            alignment: AlignmentType.CENTER, // Align text to the center
                                                            spacing: { line: 300 },          // Increase the line height
                                                            verticalAlign: 'center',         // Center text vertically
                                                            children: [new TextRun("")]
                                                        })
                                                    ],
                                                    verticalAlign: VerticalAlign.CENTER,
                                                    margins: {
                                                        top: convertInchesToTwip(0.1),
                                                        bottom: convertInchesToTwip(0.1),
                                                        left: convertInchesToTwip(0.1),
                                                        right: convertInchesToTwip(0.1),
                                                    },
                                                }),

                                            ],
                                        })

                                    }).filter(row => row !== null)
                            ],
                        }),
                    ],

                }],
            });


            Packer.toBlob(docEn).then(blob => {
                let exportFilename = `Exam Attendance Sheet - ${document.getElementById('achedamicYear').value} - ${sub}.docx`;
                saveAs(blob, exportFilename);
            });


        }

        if (Downloadtype == "examMarlSheet") {

            let DegreeName = $("#selectedDegreeName option:selected").text();
            let achedamicYear = document.getElementById('achedamicYear').value;
            let selectedSemester = dataRep["selectedSemester"];
            let sub = "";
            let currentSubCode = "";
            if (subjectCodeLength > 0) {
                for (j = 0; j < subjectCodeLength; j++) {
                    if (dataRep["selectedSubject"] == subjectCodeArr[j]) {
                        sub = subjectTitleArr[j] + " (" + subjectCodeArr[j] + ")";
                        currentSubCode = subjectCodeArr[j];
                    }
                }
            }
            examDownloadMarkSheetTempNew(DegreeName, sub, currentSubCode, achedamicYear, selectedSemester,);
        }
        if (Downloadtype == "en" || Downloadtype == "si") {
            DownloadSelectedApplicantList(Downloadtype);
        }
    }

}

function DownloadSelectedApplicantList(medium) {
    var count = 1;
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
        alert("Please Select Programm and the Year.");
    }

    else {
        let DegreeName = $("#selectedDegreeName option:selected").text();
        let achedamicYear = document.getElementById('achedamicYear').value;
        let selectedSemester = dataRep["selectedSemester"];
        let sub = "";
        let currentSubCode = "";
        if (subjectCodeLength > 0) {
            for (j = 0; j < subjectCodeLength; j++) {
                if (dataRep["selectedSubject"] == subjectCodeArr[j]) {
                    sub = subjectTitleArr[j] + " (" + subjectCodeArr[j] + ")";
                    currentSubCode = subjectCodeArr[j];
                }
            }
        }
        examDownloadMarkSheetTempNew(DegreeName, sub, currentSubCode, achedamicYear, selectedSemester, medium);
    }
}



function ExamStickersPrint() {
    let SubName = "";
    let SubCode = "";
    if (subjectCodeLength > 0) {
        for (j = 0; j < subjectCodeLength; j++) {
            if (dataRep["selectedSubject"] == subjectCodeArr[j]) {
                SubName = subjectTitleArr[j];
                SubCode = subjectCodeArr[j];
            }
        }
    }
    let BatchYear = document.getElementById('achedamicYear').value

    examDownloadStickersTempNew(SubName, SubCode, BatchYear);
}


function examDownloadStickersTempNew(SubName, SubCode, BatchYear) {
    if (ex_CodeLength != 0) {

        //eng
        var engCount = 0;
        var engRowCount = 1;
        var newStr = "<div  id='inputs' style='margin:0px 5px;clear:both'>";
        newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';


        //sin
        var sinCount = 0;
        var sinRowCount = 1;
        var newStrSIn = "<div  id='inputs' style='margin:0px 5px;clear:both'>";
        newStrSIn += '<table border="1" width="100%" style="border-collapse: collapse;">';


        for (i = 0; i < ex_CodeLength; i++) {
            //eng
            if (ex_studentMediumArr[i] == "en") {
                newStr += "<tr>";
                newStr += '<td style="font-size: 48px;font-weight: bolder; font-family: ' + "Times New Roman" + '; text-align: center; height: 100px;width:100%">' + ex_studentNoArr[i] + '</td>';
                newStr += "</tr>";
                engCount++;
                engRowCount++;
            }
            //eng

            //sin
            if (ex_studentMediumArr[i] == "si") {

                newStrSIn += "<tr>";
                newStrSIn += '<td style="font-size: 48px;font-weight: bolder; font-family: ' + "Times New Roman" + '; text-align: center; height: 100px;width:100%">' + ex_studentNoArr[i] + '</td>';
                newStrSIn += "</tr>";

                sinCount++;
                sinRowCount++;
            }
            //sin
        }

        // if (ex_CodeLength % 2 != 0) {

        // 	newStr += '<td style="font-size: 40px; font-family: ' + "Times New Roman" + '; text-align: center; height: 100px;width:100%"></td>';
        // 	newStr += "</tr>";

        // 	newStrSIn += '<td style="font-size: 40px; font-family: ' + "Times New Roman" + '; text-align: center; height: 100px;width:100%"></td>';
        // 	newStrSIn += "</tr>";

        // }


        //eng
        newStr += "</table></div>";
        //eng

        //sin
        newStrSIn += "</table></div>";
        //sin

        //eng
        var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ") Table Stickers.doc";
        // var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });
        //eng

        //sin
        var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ") Table Stickers.doc";
        // var csvDataSin = new Blob([newStrSIn], { type: '.ms-word;charset=utf-8;' });

        //sin

        //IE11 & Edge
        //eng

        if (engCount != 0) {

            let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
            sendDataList += "&sheetName=" + "Table Stickers Doc";
            isrHandle.getDoc(newStr, exportFilename);

            // if (navigator.msSaveBlob) {
            // 	navigator.msSaveBlob(csvData, exportFilename);
            // } else {
            // 	//In FF link must be added to DOM to be clicked
            // 	var link = document.createElement('a');
            // 	link.href = window.URL.createObjectURL(csvData);
            // 	link.setAttribute('download', exportFilename);
            // 	document.body.appendChild(link);
            // 	link.click();
            // 	document.body.removeChild(link);
            // }
        }
        //eng

        //sin
        if (sinCount != 0) {

            let sendDataList = "htmlContent=" + encodeURIComponent(newStrSIn);
            sendDataList += "&sheetName=" + "Table Stickers Doc";
            isrHandle.getDoc(newStrSIn, exportFilename);
            // if (navigator.msSaveBlob) {
            // 	navigator.msSaveBlob(csvDataSin, exportFilenameSin);
            // } else {
            // 	var link = document.createElement('a');
            // 	link.href = window.URL.createObjectURL(csvDataSin);
            // 	link.setAttribute('download', exportFilenameSin);
            // 	document.body.appendChild(link);
            // 	link.click();
            // 	document.body.removeChild(link);
            // }
        }
        //sin

    } else {
        alert("Data not available");
    }

}


//--------------------------------------------------------SEARCH FUNCTION START--------------------------------------------
function serachApplicant01() {

    var countSearch = 0;
    var c = 0;
    for (var i = 0; i < ex_CodeLength; i++) {
        searchApplicantID
        if (document.getElementById('searchApplicantID').value.toUpperCase() == ex_studentNoArr[i].toUpperCase()) {
            countSearch++;
            var element = document.getElementById('Alist' + i);
            if (element) {
                element.style.backgroundColor = '#80e732';
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            var element = document.getElementById('Alist' + i);
            if (element) {
                if (i % 2 == 0) {
                    document.getElementById('Alist' + i).style.backgroundColor = '#ffece6';
                }
                else {
                    document.getElementById('Alist' + i).style.backgroundColor = '#ffd9cc';
                }
            }
        }

    }

    if (countSearch == 0) {
        alert('There is No Matching Data');
    }
}




function printTranscriptNew() {
    //get subject
    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0) {



        Swal.fire({
            title: 'Deputy Registrar/Examinations',
            // text: 'Please ask the Registrar.',
            input: 'text', // Type of input
            inputValue: 'R.M.M.L.B. Wewegama', // Default value
            inputPlaceholder: 'Enter name here',
            showCancelButton: true, // Adds a cancel button
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {




                let tmpDId = document.getElementById('selectedDegreeName').value;
                dataRep["acYear"] = document.getElementById('achedamicYear').value;
                dataRep["degCode"] = tmpDId;
                dataRep["BatchNumber"] = $("#selectedBatchNumber option:selected").val();

                let getBatchData = {
                    action: "getDataForBatchUpdate",
                    degreeCode: dataRep["degCode"],
                    academicYear: dataRep["acYear"],
                    batchNumber: dataRep["BatchNumber"],
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                // totalGradeBody
                $.ajax({
                    type: 'POST',
                    url: 'rules/batch.php',
                    data: getBatchData,
                    dataType: 'json',
                    success: async function (batch) {
                        if (batch && batch[0].status === 200) {

                            if (batch[0].credits_complete > 0) {
                                if (batch[0].pass_gpa > 0) {

                                    let GPAforPass = batch[0].pass_gpa;
                                    let credits_complete = batch[0].credits_complete;

                                    let getSubject = {
                                        action: "getSubject2",
                                        degreeCode: dataRep["degCode"],
                                        achedamicYear: dataRep["acYear"],
                                        batchNumber: dataRep["BatchNumber"],
                                        authcode: authcode,
                                        username: dataRep['userId'],
                                    };

                                    $.ajax({
                                        type: 'POST',
                                        url: 'rules/subject.php',
                                        data: getSubject,
                                        dataType: 'json',
                                        success: function (response) {
                                            let havest = false;
                                            let chkstudnetNo = [];
                                            tableFinalDataTable.rows().every(function (index) {
                                                let rowData = this.data();
                                                let checkbox = $(this.node()).find('input[type="checkbox"]');
                                                let isChecked = checkbox.prop('checked');
                                                if (isChecked) {
                                                    chkstudnetNo.push(rowData[2]);
                                                    havest = true;

                                                }
                                            });

                                            if (havest) {

                                                let getStudent = {
                                                    action: "getStudentsinBatch_finalResult",
                                                    studentNo: chkstudnetNo,
                                                    degreeCode: dataRep["degCode"],
                                                    achedamicYear: dataRep["acYear"],
                                                    programmeTypeCode: dataRep["programmeTypeCode"],
                                                    authcode: authcode,
                                                    username: dataRep['userId'],
                                                };

                                                $.ajax({
                                                    type: 'POST',
                                                    url: 'rules/students.php',
                                                    data: getStudent,
                                                    dataType: 'json',
                                                    success: async function (response2) {
                                                        let studentData = [];
                                                        console.log(response2);
                                                        // Store all promises in an array
                                                        // const promises = response2.map(async (student) => {
                                                        for (const student of response2) {

                                                            let serchedAttemped = dataRep["selectedAttempt"];

                                                            let repeatAttempt = "1";
                                                            if (serchedAttemped == "RR") {
                                                                repeatAttempt = $('#selectedAttemptTime').val();
                                                            }

                                                            let getResult = {
                                                                action: "getFinalResult",
                                                                degreeCode: dataRep["degCode"],
                                                                achedamicYear: dataRep["acYear"],
                                                                studentNo: student.studentNo,
                                                                studentName: student.studentName,
                                                                programmeTypeCode: student.programmeTypeCode,
                                                                studentPersonalTitle: student.studentPersonalTitle,
                                                                studentInitial: student.studentInitial,
                                                                studentGender: student.studentGender,
                                                                degreeTitle: student.degreeTitle,
                                                                duration: student.duration,
                                                                medium: student.medium,
                                                                attampt: serchedAttemped,
                                                                attamptTime: repeatAttempt,
                                                                authcode: authcode,
                                                                username: dataRep['userId'],
                                                            };

                                                            // Await the result of this AJAX call
                                                            const responseData = await $.ajax({
                                                                type: 'POST',
                                                                url: 'rules/insertMarks.php',
                                                                data: getResult,
                                                                dataType: 'json'
                                                            });

                                                            let subjectDetails = {};
                                                            let st_no_data = "";
                                                            let st_name_data = "";
                                                            let st_programmeTypeCode_data = "";
                                                            let st_studentPersonalTitle_data = "";
                                                            let st_studentInitial_data = "";
                                                            let st_studentGender_data = "";
                                                            let st_DegreeTitel_data = "";
                                                            let st_Duration_data = "";

                                                            $.each(response, function (subjectIndex, subject) {
                                                                $.each(responseData, function (resultIndex, result) {
                                                                    if (subject.subjectCode == result.subjectCode) {
                                                                        subjectDetails[result.subjectCode] = [
                                                                            result.degreeCode, result.subjectCode, result.grade,
                                                                            result.examiner1, result.examiner2, result.marks,
                                                                            result.semester, result.medium, result.GPA
                                                                        ];
                                                                        if (st_no_data == "") {
                                                                            st_no_data = result.StudentNo;
                                                                            st_name_data = result.StudentName;
                                                                            st_programmeTypeCode_data = result.programmeTypeCode;
                                                                        }
                                                                    }
                                                                });
                                                            });
                                                            if (st_no_data != "") {
                                                                studentData.push([
                                                                    st_no_data,
                                                                    st_name_data,
                                                                    subjectDetails,
                                                                    st_programmeTypeCode_data,
                                                                    getResult.studentPersonalTitle,
                                                                    getResult.studentInitial,
                                                                    getResult.studentGender,
                                                                    getResult.degreeTitle,
                                                                    getResult.duration,
                                                                    getResult.medium
                                                                ]);
                                                            } else {
                                                                studentData.push([
                                                                    getResult.studentNo,
                                                                    getResult.studentName,
                                                                    subjectDetails,
                                                                    getResult.programmeTypeCode,
                                                                    getResult.studentPersonalTitle,
                                                                    getResult.studentInitial,
                                                                    getResult.studentGender,
                                                                    getResult.degreeTitle,
                                                                    getResult.duration,
                                                                    getResult.medium
                                                                ]);

                                                            }
                                                        }
                                                        // });


                                                        // await Promise.all(promises);

                                                        studentData.sort((a, b) => {
                                                            let extractNumber = (str) => {
                                                                // Use a regular expression to capture the last numeric part in the string
                                                                let match = str.match(/\d+$/); // This matches the last number in the string
                                                                return match ? parseInt(match[0], 10) : 0; // Convert the matched part to an integer
                                                            };

                                                            let numA = extractNumber(a[0]);
                                                            let numB = extractNumber(b[0]);

                                                            return numA - numB;
                                                        });

                                                        let BatchYear = document.getElementById('achedamicYear').value;
                                                        let degTitle = $("#selectedDegreeName option:selected").text();


                                                        let transDiv = "";
                                                        transDiv += `<style>
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
                                                           { size:595.3pt 841.9pt;
                                                    mso-page-orientation:potrate;
                                                    margin:4.5cm 36.0pt 3cm 36.0pt;
                                                    mso-header-margin:35.4pt;
                                                    mso-footer-margin:35.4pt;
                                                    mso-paper-source:0;}
                                                       div.WordSection1
                                                           {page:WordSection1;}
                                                       
                                                       </style>
                                                       `;



                                                        let count3 = 0;
                                                        // st_count2 = 0;
                                                        // tableFinalDataTable.clear();
                                                        let tblDat = [];
                                                        $.each(studentData, function (stIn, studentRe) {
                                                            count3++;
                                                            // st_count++;
                                                            let studentPartisipateCredit = 0;
                                                            let studentPartisipateSubject = 0;
                                                            let studentEarnCredit = 0;

                                                            let hasAbsent = false;
                                                            let hasRepeat = false;
                                                            let notContinue = true;
                                                            $.each(response, function (subjectIndex, subject) {

                                                                if (studentRe[2][subject.subjectCode]) {
                                                                    if (parseFloat(studentRe[2][subject.subjectCode][8]) >= parseFloat(GPAforPass)) {
                                                                        notContinue = false;
                                                                        studentEarnCredit = parseFloat(studentEarnCredit) + (parseFloat(studentRe[2][subject.subjectCode][8]) * parseFloat(subject.credits));
                                                                        studentPartisipateCredit = parseFloat(studentPartisipateCredit) + parseFloat(subject.credits);
                                                                        studentPartisipateSubject++;
                                                                    } else {
                                                                        if (studentRe[2][subject.subjectCode][5] == 125) {
                                                                            hasAbsent = true;
                                                                        }
                                                                        if (parseFloat(studentRe[2][subject.subjectCode][8]) < parseFloat(GPAforPass)) {
                                                                            hasRepeat = true;
                                                                        }
                                                                    }
                                                                    let color = "";
                                                                    if (studentRe[2][subject.subjectCode][5] == 125 || parseFloat(studentRe[2][subject.subjectCode][8]) < parseFloat(GPAforPass)) {
                                                                        color = "#ff4747";
                                                                    } else {
                                                                        color = "#000";

                                                                    }

                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][5] + '</td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][2] + '</td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][8] + '</td>';

                                                                } else {
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                                }
                                                            });

                                                            let credit = credits_complete;
                                                            let status = "";

                                                            let gpa = (studentEarnCredit / studentPartisipateCredit).toFixed(2);
                                                            let gpaT = (studentEarnCredit / studentPartisipateCredit).toFixed(4);

                                                            if (studentPartisipateCredit >= credit) {
                                                                if (gpa >= parseFloat(GPAforPass)) {
                                                                    status = "Pass";
                                                                } else {
                                                                    let hasAbsent = false;
                                                                    let hasRepeat = false;
                                                                    let notContinue = true;
                                                                    if (notContinue) {
                                                                        // status = "Not Participant";
                                                                        status = "Not Yet Completed";
                                                                    } else if (hasAbsent) {
                                                                        status = "Has absent subject/s";
                                                                    } else if (hasRepeat) {
                                                                        status = "Has repeat subject/s";
                                                                    } else {
                                                                        status = "Repeat/Fail";
                                                                    }
                                                                }
                                                            } else {
                                                                if (notContinue) {
                                                                    // status = "Not Participant";
                                                                    status = "Not Yet Completed";
                                                                } else if (hasAbsent) {
                                                                    status = "Has absent subject/s";
                                                                } else if (hasRepeat) {
                                                                    status = "Has repeat subject/s";
                                                                } else {
                                                                    status = "Not Yet Completed";
                                                                }
                                                            }

                                                            if (isNaN(gpa)) {
                                                                gpa = 0;
                                                            }

                                                            if (isNaN(gpaT)) {
                                                                gpaT = 0;
                                                            }

                                                            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                                            var dd = new Date();
                                                            var d = dd.getUTCDate();
                                                            var m = dd.getUTCMonth();
                                                            var y = dd.getUTCFullYear();
                                                            var mn = m + 1;
                                                            var mn = months[dd.getUTCMonth()];
                                                            var datelbl = d + "<sup>" + getOrdinalSuffix(d) + "</sup> " + mn + ", " + y;



                                                            if (count3 > 1) {
                                                                transDiv += "<p align=center style='text-align:center'><strong><u><o:p><span style='text-decoration:none'>&nbsp;</span></o:p></u></strong></p>";

                                                                transDiv += "<strong><u><span style='font-size:12.0pt;mso-fareast-font-family:'Times New Roman';mso-fareast-theme-font:minor-fareast;mso-ansi-language:EN-GB;mso-fareast-language:EN-GB;mso-bidi-language:SI-LK'><br clear=all style='mso-special-character:line-break;page-break-before:always'>";
                                                                transDiv += "</span></u></strong>";

                                                                transDiv += "<p class=MsoNormal><strong><u><o:p><span style='text-decoration:none'>&nbsp;</span></o:p></u></strong></p>";
                                                            }
                                                            // tblDat.push([st_count,studentRe[0],gpa,gpaT,credit,studentPartisipateCredit,studentEarnCredit.toFixed(2),status]);
                                                            transDiv += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
                                                            transDiv += '<p style="text-align: center;"><strong><u>STRICTLY CONFIDENTIAL </u></strong></p>';
                                                            transDiv += '<div style="width:100%;height:0%;float:right;text-align:right;margin-top:5px;margin-bottom:5px;font-family:tahoma;font-size:13px;"><span style="float:right; color:#000000"></span><span style="float:right; color:#000000">&nbsp;&nbsp;&nbsp;&nbsp;' + datelbl + '</span></div>';
                                                            transDiv += '<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
                                                            transDiv += '<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
                                                            transDiv += '<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
                                                            transDiv += '<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
                                                            transDiv += '<p>&nbsp;</p>';
                                                            let genderTitle = "";
                                                            if (studentRe[6] == "Female") {
                                                                genderTitle = "her";
                                                            } else if (studentRe[6] == "Male") {
                                                                genderTitle = "his";

                                                            } else {
                                                                genderTitle = "his/her";
                                                            }
                                                            transDiv += '<p style="text-align: center;"><strong><u>Academic Transcript &ndash; ' + studentRe[4] + '. ' + studentRe[5] + '</u></strong></p>';
                                                            transDiv += '<p>At the request of ' + studentRe[4] + '. ' + studentRe[5] + ', ' + genderTitle + ' performances at the University examinations are forwarded herewith:</p>';
                                                            transDiv += '<p>&nbsp;</p>';
                                                            transDiv += '<ol>';
                                                            transDiv += '<li>Full Name of the candidate&nbsp;&nbsp; :&nbsp;&nbsp; ' + studentRe[1] + '</li>';
                                                            transDiv += '<li>Faculty&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; Faculty of Graduate Studies</li>';
                                                            transDiv += '<li>Degree&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; :&nbsp;&nbsp;&nbsp;' + studentRe[7] + '</li>';
                                                            transDiv += '<li>Mode of Examination&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; :&nbsp; &nbsp; Course work &amp; Research</li>';

                                                            let st_medium = "";
                                                            if (studentRe[9] == "en") {
                                                                st_medium = "English";
                                                            } if (studentRe[9] == "si") {
                                                                st_medium = "Sinhala";

                                                            }

                                                            transDiv += '<li>Medium of Instruction&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;:&nbsp; &nbsp; ' + st_medium + '</li>';
                                                            transDiv += '<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; :&nbsp; &nbsp; ' + studentRe[8] + '</li>';
                                                            transDiv += '<li>Total no. of Credits&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;: &nbsp;&nbsp;' + studentPartisipateCredit + '</li>';
                                                            transDiv += '<li>Grade Point Average (GPA)&nbsp; : &nbsp; <strong>' + gpa + '</strong></li>';
                                                            transDiv += '<li><strong><u>' + studentRe[7] + '</u></strong><strong><u></u></strong>';
                                                            transDiv += '<br>&nbsp; &nbsp; &nbsp;&nbsp;a) Date of Examination&nbsp; : ';
                                                            transDiv += '<br>&nbsp; &nbsp; &nbsp;&nbsp;b) Index Number&nbsp; &nbsp; : ' + studentRe[0];
                                                            transDiv += '</li>';
                                                            transDiv += '</ol>';



                                                            //marks

                                                            transDiv += '<table align="center" style="width: -webkit-fill-available;margin: 10px 55px 0px; margin-top:10px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;" border=1>';
                                                            transDiv += '<thead>';
                                                            transDiv += '<tr>';
                                                            transDiv += '<td style="width: 100px; text-align: center;"><p><strong>Code</strong></p></td>';
                                                            transDiv += '<td style="width: 500px; text-align: center;"><p><strong>Title of Paper</strong></p></td>';
                                                            transDiv += '<td style="width: 50px; text-align: center;"><p><strong>No of Credits</strong></p></td>';
                                                            transDiv += '<td style="width: 50px; text-align: center;"><p><strong>Marks</strong></p></td>';
                                                            transDiv += '<td style="width: 50px; text-align: center;"><p><strong>Grade</strong></p></td>';
                                                            transDiv += '</tr>';
                                                            transDiv += '</thead>';
                                                            transDiv += '<tbody>';

                                                            $.each(response, function (subjectIndex, subject) {

                                                                if (studentRe[2][subject.subjectCode]) {
                                                                    console.log(studentRe[2]);
                                                                    console.log(subject);

                                                                    transDiv += '<tr>';
                                                                    transDiv += '<td style="width: 100px; text-align: center;"><p>' + studentRe[2][subject.subjectCode][1] + '</p></td>';
                                                                    transDiv += '<td style="width: 500px; text-align: left;"><p>' + subject.subjectTitle + '</p></td>';
                                                                    transDiv += '<td style="width: 50px; text-align: center;"><p>' + subject.credits + '</p></td>';
                                                                    transDiv += '<td style="width: 50px; text-align: center;"><p>' + studentRe[2][subject.subjectCode][5] + '</p></td>';
                                                                    transDiv += '<td style="width: 50px; text-align: center;"><p>' + studentRe[2][subject.subjectCode][2] + '</p></td>';
                                                                    transDiv += '</tr>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][5] + '</td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][2] + '</td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][8] + '</td>';

                                                                } else {
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                                }
                                                            });


                                                            transDiv += '</tbody>';
                                                            transDiv += '</table>';


                                                            //end marks

                                                            transDiv += '<ol start="10">';
                                                            transDiv += '<li>Key to Grades</li>';
                                                            transDiv += '</ol>';

                                                            transDiv += '<table align="center" style="width: -webkit-fill-available;margin: 10px 55px 0px; margin-top:10px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;">';
                                                            transDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Range of Marks</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade Point Value</b></td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Range of Marks</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade Point Value</b></td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Range of Marks</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade Point Value</b></td>";
                                                            transDiv += "</tr>";

                                                            transDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>85-100</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>A+</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>4.0</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>55-59</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>B</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>3.0</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>35-39</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>C-</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>1.7</td>";
                                                            transDiv += "</tr>";

                                                            transDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>70-84</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>A</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>4.0</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>50-54</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>B-</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>2.7</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>30-34</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>D+</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>1.3</td>";
                                                            transDiv += "</tr>";

                                                            transDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>65-69</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>A-</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>3.7</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>45-49</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>C+</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>2.3</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>25-29</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>D</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>1.0</td>";
                                                            transDiv += "</tr>";

                                                            transDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>60-64</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>B+</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>3.3</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>40-44</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>C</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>2.0</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>00-24</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>E</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>0.0</td>";
                                                            transDiv += "</tr>";

                                                            transDiv += "</table>";

                                                            if (status == "Pass") {
                                                                transDiv += '<ol start="11">';
                                                                transDiv += '<li>Result : Reached the standard required for <b>Pass</b></li>';
                                                                transDiv += '</ol>';
                                                            } else {
                                                                transDiv += '<ol start="10">';
                                                                transDiv += '<li>Result : Reached the standard required for <b>Incomplete</b></li>';
                                                                transDiv += '</ol>';
                                                            }

                                                            transDiv += '<ol start="12">';
                                                            transDiv += '<li>Results valid from : &nbsp;<strong></strong></li>';
                                                            transDiv += '</ol>';
                                                            transDiv += '<p>&nbsp;</p>';


                                                            transDiv += '<table align="center" style="width: 100%;margin: 10px 55px 0px; margin-top:10px; border-collapse: collapse;table-layout:fixed;">';
                                                            transDiv += '<tbody>';
                                                            transDiv += '<tr style="height: 30px;">';
                                                            transDiv += '<td style="width: 125px; text-align: center; height: 30px;">';
                                                            transDiv += '</td>';
                                                            transDiv += '<td style="width: 125px; text-align: center; height: 30px;">';

                                                            transDiv += '</td>';
                                                            transDiv += '<td style="width: 261px; height: 30px; ">';
                                                            // Swal.fire(Entered Name: ${result.value});

                                                            transDiv += '<p style="text-align: center;">(' + result.value + ')</p>';
                                                            transDiv += '</td>';
                                                            transDiv += '</tr>';

                                                            transDiv += '<tr style="height: 30px;">';
                                                            transDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
                                                            transDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
                                                            transDiv += '<td style="width: 261px; text-align: center; height: 30px;"><strong>Deputy Registrar/Examinations &nbsp; &nbsp;&nbsp;<br />for Registrar</strong>&nbsp;</td>';
                                                            transDiv += '</tr>';



                                                            transDiv += '<tr style="height: 30px;">';
                                                            transDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
                                                            transDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Prepared by:</p>';
                                                            transDiv += '</td>';
                                                            transDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
                                                            transDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Checked by:</p>';
                                                            transDiv += '</td>';
                                                            transDiv += '<td style="width: 261px; text-align: center; height: 30px;">';
                                                            transDiv += '</td>';
                                                            transDiv += '</tr>';
                                                            transDiv += '</tbody>';
                                                            transDiv += '</table>';


                                                        });

                                                        // var exportFilename = "Transcript.doc";
                                                        // var csvData = new Blob([transDiv], {type: '.ms-word;charset=utf-8;'});
                                                        var exportFilename = "Transcript.doc";
                                                        // let sendDataList = "htmlContent=" + encodeURIComponent(transDiv);
                                                        // sendDataList += "&sheetName=" + "Transcript";
                                                        // sendDataList += "&orientation=" + "l";
                                                        isrHandle.getDoc(transDiv, exportFilename);


                                                        // tableFinalDataTable.rows.add(tblDat);
                                                        // tableFinalDataTable.draw();

                                                    }
                                                });



                                            }

                                        }
                                    });
                                } else {
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'Alert',
                                        text: "Batch not updated. This batch hasn't set the required GPA to qualify for the degree."
                                    });
                                }
                            } else {
                                Swal.fire({
                                    icon: 'warning',
                                    title: 'Alert',
                                    text: "Batch not updated. This batch hasn't set the required credit limit to qualify for the degree."
                                });
                            }

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Alert',
                                text: 'Batch Not Availble.'
                            });
                        }
                    }
                });

                // Swal.fire(Entered Name: ${result.value});
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Swal.fire('Action canceled');
            }
        });


    }
}


function printdDetailCertificateNew() {
    //get subject
    if (document.getElementById('selectedDegreeName').selectedIndex != 0
        && document.getElementById('achedamicYear').selectedIndex != 0) {



        Swal.fire({
            title: 'Deputy Registrar/Examinations',
            // text: 'Please ask the Registrar.',
            input: 'text', // Type of input
            inputValue: 'R.M.M.L.B. Wewegama', // Default value
            inputPlaceholder: 'Enter name here',
            showCancelButton: true, // Adds a cancel button
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {




                let tmpDId = document.getElementById('selectedDegreeName').value;
                dataRep["acYear"] = document.getElementById('achedamicYear').value;
                dataRep["degCode"] = tmpDId;
                dataRep["BatchNumber"] = $("#selectedBatchNumber option:selected").val();

                let getBatchData = {
                    action: "getDataForBatchUpdate",
                    degreeCode: dataRep["degCode"],
                    academicYear: dataRep["acYear"],
                    batchNumber: dataRep["BatchNumber"],
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                // totalGradeBody
                $.ajax({
                    type: 'POST',
                    url: 'rules/batch.php',
                    data: getBatchData,
                    dataType: 'json',
                    success: async function (batch) {
                        if (batch && batch[0].status === 200) {

                            if (batch[0].credits_complete > 0) {
                                if (batch[0].pass_gpa > 0) {

                                    let GPAforPass = batch[0].pass_gpa;
                                    let credits_complete = batch[0].credits_complete;

                                    let getSubject = {
                                        action: "getSubject2",
                                        degreeCode: dataRep["degCode"],
                                        achedamicYear: dataRep["acYear"],
                                        batchNumber: dataRep["BatchNumber"],
                                        authcode: authcode,
                                        username: dataRep['userId'],
                                    };

                                    $.ajax({
                                        type: 'POST',
                                        url: 'rules/subject.php',
                                        data: getSubject,
                                        dataType: 'json',
                                        success: function (response) {

                                            console.log("My subject");
                                            console.log(response);
                                            let havest = false;
                                            let chkstudnetNo = [];
                                            tableFinalDataTable.rows().every(function (index) {
                                                let rowData = this.data();
                                                let checkbox = $(this.node()).find('input[type="checkbox"]');
                                                let isChecked = checkbox.prop('checked');
                                                if (isChecked) {
                                                    chkstudnetNo.push(rowData[2]);
                                                    havest = true;

                                                }
                                            });

                                            if (havest) {

                                                let getStudent = {
                                                    action: "getStudentsinBatch_finalResult",
                                                    studentNo: chkstudnetNo,
                                                    degreeCode: dataRep["degCode"],
                                                    achedamicYear: dataRep["acYear"],
                                                    programmeTypeCode: dataRep["programmeTypeCode"],
                                                    authcode: authcode,
                                                    username: dataRep['userId'],
                                                };

                                                $.ajax({
                                                    type: 'POST',
                                                    url: 'rules/students.php',
                                                    data: getStudent,
                                                    dataType: 'json',
                                                    success: async function (response2) {
                                                        let studentData = [];
                                                        console.log(response2);
                                                        // Store all promises in an array
                                                        // const promises = response2.map(async (student) => {
                                                        for (const student of response2) {
                                                            let serchedAttemped = dataRep["selectedAttempt"];

                                                            let repeatAttempt = "1";
                                                            if (serchedAttemped == "RR") {
                                                                repeatAttempt = $('#selectedAttemptTime').val();
                                                            }
                                                            let getResult = {
                                                                action: "getFinalResult",
                                                                degreeCode: dataRep["degCode"],
                                                                achedamicYear: dataRep["acYear"],
                                                                studentNo: student.studentNo,
                                                                studentName: student.studentName,
                                                                programmeTypeCode: student.programmeTypeCode,
                                                                studentPersonalTitle: student.studentPersonalTitle,
                                                                studentInitial: student.studentInitial,
                                                                studentGender: student.studentGender,
                                                                degreeTitle: student.degreeTitle,
                                                                duration: student.duration,
                                                                medium: student.medium,
                                                                attampt: serchedAttemped,
                                                                attamptTime: repeatAttempt,
                                                                authcode: authcode,
                                                                username: dataRep['userId'],

                                                            };

                                                            // Await the result of this AJAX call
                                                            const responseData = await $.ajax({
                                                                type: 'POST',
                                                                url: 'rules/insertMarks.php',
                                                                data: getResult,
                                                                dataType: 'json'
                                                            });

                                                            let subjectDetails = {};
                                                            let st_no_data = "";
                                                            let st_name_data = "";
                                                            let st_programmeTypeCode_data = "";
                                                            let st_studentPersonalTitle_data = "";
                                                            let st_studentInitial_data = "";
                                                            let st_studentGender_data = "";
                                                            let st_DegreeTitel_data = "";
                                                            let st_Duration_data = "";
                                                            console.log("My results")
                                                            console.log(responseData);
                                                            $.each(response, function (subjectIndex, subject) {
                                                                $.each(responseData, function (resultIndex, result) {
                                                                    if (subject.subjectCode == result.subjectCode) {
                                                                        subjectDetails[result.subjectCode] = [
                                                                            result.degreeCode, result.subjectCode, result.grade,
                                                                            result.examiner1, result.examiner2, result.marks,
                                                                            result.semester, result.medium, result.GPA
                                                                        ];
                                                                        if (st_no_data == "") {
                                                                            st_no_data = result.StudentNo;
                                                                            st_name_data = result.StudentName;
                                                                            st_programmeTypeCode_data = result.programmeTypeCode;
                                                                        }
                                                                    }
                                                                });
                                                            });
                                                            if (st_no_data != "") {
                                                                studentData.push([
                                                                    st_no_data,
                                                                    st_name_data,
                                                                    subjectDetails,
                                                                    st_programmeTypeCode_data,
                                                                    getResult.studentPersonalTitle,
                                                                    getResult.studentInitial,
                                                                    getResult.studentGender,
                                                                    getResult.degreeTitle,
                                                                    getResult.duration,
                                                                    getResult.medium
                                                                ]);
                                                            } else {
                                                                studentData.push([
                                                                    getResult.studentNo,
                                                                    getResult.studentName,
                                                                    subjectDetails,
                                                                    getResult.programmeTypeCode,
                                                                    getResult.studentPersonalTitle,
                                                                    getResult.studentInitial,
                                                                    getResult.studentGender,
                                                                    getResult.degreeTitle,
                                                                    getResult.duration,
                                                                    getResult.medium
                                                                ]);

                                                            }
                                                        }
                                                        // });


                                                        // await Promise.all(promises);

                                                        studentData.sort((a, b) => {
                                                            let extractNumber = (str) => {
                                                                // Use a regular expression to capture the last numeric part in the string
                                                                let match = str.match(/\d+$/); // This matches the last number in the string
                                                                return match ? parseInt(match[0], 10) : 0; // Convert the matched part to an integer
                                                            };

                                                            let numA = extractNumber(a[0]);
                                                            let numB = extractNumber(b[0]);

                                                            return numA - numB;
                                                        });

                                                        let BatchYear = document.getElementById('achedamicYear').value;
                                                        let degTitle = $("#selectedDegreeName option:selected").text();


                                                        let transDiv = "";
                                                        transDiv += `<style>
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
                                                           { size:595.3pt 841.9pt;
                                                    mso-page-orientation:potrate;
                                                    margin:4.5cm 36.0pt 3cm 36.0pt;
                                                    mso-header-margin:35.4pt;
                                                    mso-footer-margin:35.4pt;
                                                    mso-paper-source:0;}
                                                       div.WordSection1
                                                           {page:WordSection1;}
                                                       
                                                       </style>
                                                       `;



                                                        let count3 = 0;
                                                        // st_count2 = 0;
                                                        // tableFinalDataTable.clear();
                                                        let tblDat = [];
                                                        $.each(studentData, function (stIn, studentRe) {
                                                            count3++;
                                                            // st_count++;
                                                            let studentPartisipateCredit = 0;
                                                            let studentPartisipateSubject = 0;
                                                            let studentEarnCredit = 0;

                                                            let hasAbsent = false;
                                                            let hasRepeat = false;
                                                            let notContinue = true;
                                                            $.each(response, function (subjectIndex, subject) {

                                                                if (studentRe[2][subject.subjectCode]) {
                                                                    if (parseFloat(studentRe[2][subject.subjectCode][8]) >= parseFloat(GPAforPass)) {
                                                                        notContinue = false;
                                                                        studentEarnCredit = parseFloat(studentEarnCredit) + (parseFloat(studentRe[2][subject.subjectCode][8]) * parseFloat(subject.credits));
                                                                        studentPartisipateCredit = parseFloat(studentPartisipateCredit) + parseFloat(subject.credits);
                                                                        studentPartisipateSubject++;
                                                                    } else {
                                                                        if (studentRe[2][subject.subjectCode][5] == 125) {
                                                                            hasAbsent = true;
                                                                        }
                                                                        if (parseFloat(studentRe[2][subject.subjectCode][8]) < parseFloat(GPAforPass)) {
                                                                            hasRepeat = true;
                                                                        }
                                                                    }
                                                                    let color = "";
                                                                    if (studentRe[2][subject.subjectCode][5] == 125 || parseFloat(studentRe[2][subject.subjectCode][8]) < parseFloat(GPAforPass)) {
                                                                        color = "#ff4747";
                                                                    } else {
                                                                        color = "#000";

                                                                    }

                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][5] + '</td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][2] + '</td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center;color:' + color + '">' + studentRe[2][subject.subjectCode][8] + '</td>';

                                                                } else {
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                                    // newStr += '<td style="border:1px solid #524f4f;font-size:12px;font-family:tahoma;width:auto;text-align:center"></td>';
                                                                }
                                                            });

                                                            let credit = credits_complete;
                                                            let status = "";

                                                            let gpa = (studentEarnCredit / studentPartisipateCredit).toFixed(2);
                                                            let gpaT = (studentEarnCredit / studentPartisipateCredit).toFixed(4);

                                                            if (studentPartisipateCredit >= credit) {
                                                                if (gpa >= parseFloat(GPAforPass)) {
                                                                    status = "Pass";
                                                                } else {
                                                                    let hasAbsent = false;
                                                                    let hasRepeat = false;
                                                                    let notContinue = true;
                                                                    if (notContinue) {
                                                                        // status = "Not Participant";
                                                                        status = "Not Yet Completed";
                                                                    } else if (hasAbsent) {
                                                                        status = "Has absent subject/s";
                                                                    } else if (hasRepeat) {
                                                                        status = "Has repeat subject/s";
                                                                    } else {
                                                                        status = "Repeat/Fail";
                                                                    }
                                                                }
                                                            } else {
                                                                if (notContinue) {
                                                                    // status = "Not Participant";
                                                                    status = "Not Yet Completed";
                                                                } else if (hasAbsent) {
                                                                    status = "Has absent subject/s";
                                                                } else if (hasRepeat) {
                                                                    status = "Has repeat subject/s";
                                                                } else {
                                                                    status = "Not Yet Completed";
                                                                }
                                                            }

                                                            if (isNaN(gpa)) {
                                                                gpa = 0;
                                                            }

                                                            if (isNaN(gpaT)) {
                                                                gpaT = 0;
                                                            }

                                                            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                                            var dd = new Date();
                                                            var d = dd.getUTCDate();
                                                            var m = dd.getUTCMonth();
                                                            var y = dd.getUTCFullYear();
                                                            var mn = m + 1;
                                                            var mn = months[dd.getUTCMonth()];
                                                            var datelbl = d + "<sup>" + getOrdinalSuffix(d) + "</sup> " + mn + ", " + y;



                                                            if (count3 > 1) {
                                                                transDiv += "<p align=center style='text-align:center'><strong><u><o:p><span style='text-decoration:none'>&nbsp;</span></o:p></u></strong></p>";

                                                                transDiv += "<strong><u><span style='font-size:12.0pt;mso-fareast-font-family:'Times New Roman';mso-fareast-theme-font:minor-fareast;mso-ansi-language:EN-GB;mso-fareast-language:EN-GB;mso-bidi-language:SI-LK'><br clear=all style='mso-special-character:line-break;page-break-before:always'>";
                                                                transDiv += "</span></u></strong>";

                                                                transDiv += "<p class=MsoNormal><strong><u><o:p><span style='text-decoration:none'>&nbsp;</span></o:p></u></strong></p>";
                                                            }
                                                            // tblDat.push([st_count,studentRe[0],gpa,gpaT,credit,studentPartisipateCredit,studentEarnCredit.toFixed(2),status]);
                                                            transDiv += "<div class='WordSection1' ><div id='topics1' class='info'></div>";



                                                            transDiv += '<p style="text-align: center;">This is to certify that</p>';
                                                            transDiv += '<p style="text-align: center;"><strong>---------' + studentRe[1] + '--------</strong></p>';

                                                            if (studentRe[3] == "PRO0000013") {
                                                                transDiv += '<p>obtained the <strong>' + studentRe[7] + '</strong> and reached the standard required, offering the following course units:</p>';
                                                            }
                                                            else {
                                                                transDiv += '<p>obtained the <strong>' + studentRe[7] + ' degree</strong> and reached the standard required, offering the following course units:</p>';
                                                            }

                                                            //marks

                                                            transDiv += '<table align="center" style="width: -webkit-fill-available;margin: 10px 55px 0px; margin-top:10px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;" border=1>';
                                                            transDiv += '<thead>';
                                                            transDiv += '<tr>';
                                                            transDiv += '<td style="width: 100px; text-align: center;"><p><strong>Code</strong></p></td>';
                                                            transDiv += '<td style="width: 500px; text-align: center;"><p><strong>Title of Paper</strong></p></td>';
                                                            transDiv += '<td style="width: 50px; text-align: center;"><p><strong>Grade obtained</strong></p></td>';
                                                            transDiv += '<td style="width: 50px; text-align: center;"><p><strong>Credits</strong></p></td>';
                                                            transDiv += '<td style="width: 50px; text-align: center;"><p><strong>Status</strong></p></td>';

                                                            transDiv += '</tr>';
                                                            transDiv += '</thead>';
                                                            transDiv += '<tbody>';

                                                            $.each(response, function (subjectIndex, subject) {

                                                                if (studentRe[2][subject.subjectCode]) {
                                                                    console.log(studentRe[2]);
                                                                    console.log(subject);
                                                                    transDiv += '<tr>';
                                                                    transDiv += '<td style="width: 100px; text-align: center;"><p>' + studentRe[2][subject.subjectCode][1] + '</p></td>';
                                                                    transDiv += '<td style="width: 500px; text-align: left;"><p>' + subject.subjectTitle + '</p></td>';
                                                                    transDiv += '<td style="width: 50px; text-align: center;"><p>' + studentRe[2][subject.subjectCode][2] + '</p></td>';
                                                                    transDiv += '<td style="width: 50px; text-align: center;"><p>' + subject.credits + '</p></td>';
                                                                    var pFstatus1 = "";
                                                                    var tmpTestGrade1 = studentRe[2][subject.subjectCode][2];
                                                                    if (tmpTestGrade1 == '-') {
                                                                        pFstatus1 = "-";
                                                                    }
                                                                    else if (tmpTestGrade1 == "C+" || tmpTestGrade1 == "C" || tmpTestGrade1 == "C-" || tmpTestGrade1 == "D+" || tmpTestGrade1 == "D" || tmpTestGrade1 == "E" || tmpTestGrade1 == "(ab)") {
                                                                        pFstatus1 = "Repeat";
                                                                    } else if (tmpTestGrade1 == "A+" || tmpTestGrade1 == "A" ||
                                                                        tmpTestGrade1 == "A-" || tmpTestGrade1 == "B+" || tmpTestGrade1 == "B" ||
                                                                        tmpTestGrade1 == "B-") {
                                                                        pFstatus1 = "Pass";
                                                                    }
                                                                    // adfinaldsDiv += '<td style="width: 50px; text-align: center;">'+pFstatus1+'</td>';

                                                                    transDiv += '<td style="width: 50px; text-align: center;"><p>' + pFstatus1 + '</p></td>';
                                                                    transDiv += '</tr>';
                                                                } else {

                                                                }
                                                            });


                                                            transDiv += '</tbody>';
                                                            transDiv += '</table>';


                                                            //end marks



                                                            transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Student Number :</strong>&nbsp;&nbsp;' + studentRe[0] + '</p>';
                                                            transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Overall Grade Point Average :</strong>&nbsp;&nbsp;' + gpa + '</p>';
                                                            if (status == "Pass") {
                                                                transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Final Result :</strong>&nbsp;&nbsp;Pass</p>';
                                                            } else if (status == "Merit") {
                                                                transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Final Result :</strong>&nbsp;&nbsp;Merit</p>';
                                                            } else {
                                                                transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Final Result :</strong>&nbsp;&nbsp;Incomplete</p>';
                                                            }
                                                            transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Duration :</strong>&nbsp;' + studentRe[8] + ' </p>';


                                                            let st_medium = "";
                                                            if (studentRe[9] == "en") {
                                                                st_medium = "English";
                                                            } if (studentRe[9] == "si") {
                                                                st_medium = "Sinhala";

                                                            }
                                                            transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Medium&nbsp; :</strong>&nbsp;' + st_medium + '</p>';
                                                            if (studentRe[8] == "2 Years" || studentRe[8] == "2 Year" || studentRe[8] == "3 Years" || studentRe[8] == "3 Year") {
                                                                transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Title of the Thesis :</strong>&nbsp; </p>';

                                                            }



                                                            transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Total Credits :</strong>&nbsp;' + studentPartisipateCredit + ' </p>';

                                                            transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Exam Month & Year :</strong>&nbsp; </p>';
                                                            transDiv += '<p class=MsoNormal style="line-height:150%"><strong>Result valid from :</strong>&nbsp; </p>';



                                                            if (studentRe[8] == "2 Years" || studentRe[8] == "2 Year") {
                                                                transDiv += '<p class=MsoNormal style="line-height:150%"><strong>*SLQF Level :</strong>&nbsp;10 </p>';
                                                            }
                                                            else if (studentRe[8] == "1 Years" || studentRe[8] == "1 Year") {
                                                                transDiv += '<p class=MsoNormal style="line-height:150%"><strong>*SLQF Level :</strong>&nbsp;09 </p>';
                                                            }
                                                            else if (studentRe[8] == "PG") {
                                                                transDiv += '<p class=MsoNormal style="line-height:150%"><strong>*SLQF Level :</strong>&nbsp;08 </p>';
                                                            }
                                                            else if (studentRe[8] == "3 Years" || studentRe[8] == "3 Year") {
                                                                transDiv += '<p class=MsoNormal style="line-height:150%"><strong>*SLQF Level :</strong>&nbsp;12 </p>';
                                                            }
                                                            else {
                                                                transDiv += '<p class=MsoNormal style="line-height:150%"></p>';
                                                            }


                                                            transDiv += '<table align="center" style="width: 100%;margin: 10px 55px 0px; margin-top:10px; border-collapse: collapse;table-layout:fixed;">';
                                                            transDiv += '<tbody>';
                                                            transDiv += '<tr style="height: 30px;">';
                                                            transDiv += '<td style="width: 125px; text-align: center; height: 30px;">';
                                                            transDiv += '</td>';
                                                            transDiv += '<td style="width: 125px; text-align: center; height: 30px;">';

                                                            transDiv += '</td>';
                                                            transDiv += '<td style="width: 261px; height: 30px; ">';
                                                            // Swal.fire(Entered Name: ${result.value});

                                                            transDiv += '<p style="text-align: center;">(' + result.value + ')</p>';
                                                            transDiv += '</td>';
                                                            transDiv += '</tr>';

                                                            transDiv += '<tr style="height: 30px;">';
                                                            transDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
                                                            transDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
                                                            transDiv += '<td style="width: 261px; text-align: center; height: 30px;"><strong>Deputy Registrar/Examinations &nbsp; &nbsp;&nbsp;<br />for Registrar</strong>&nbsp;</td>';
                                                            transDiv += '</tr>';



                                                            transDiv += '<tr style="height: 30px;">';
                                                            transDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
                                                            transDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Prepared by:</p>';
                                                            transDiv += '</td>';
                                                            transDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
                                                            transDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Checked by:</p>';
                                                            transDiv += '</td>';
                                                            transDiv += '<td style="width: 261px; text-align: center; height: 30px;">';
                                                            transDiv += '</td>';
                                                            transDiv += '</tr>';
                                                            transDiv += '</tbody>';
                                                            transDiv += '</table>';

                                                            transDiv += '<p style="font-size:11px;"><u>Grading System</u></p>';

                                                            transDiv += '<table align="center" style="width: -webkit-fill-available;margin: 10px 55px 0px; margin-top:10px; border-collapse: collapse;border: 1px solid black; table-layout:fixed;">';
                                                            transDiv += "<thead><tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Range of Marks</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade Point Value</b></td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Range of Marks</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade Point Value</b></td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Range of Marks</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade</b></td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'><b>Grade Point Value</b></td>";
                                                            transDiv += "</tr></thead>";

                                                            transDiv += "<tbody><tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>85-100</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>A+</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>4.0</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>55-59</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>B</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>3.0</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>35-39</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>C-</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>1.7</td>";
                                                            transDiv += "</tr>";

                                                            transDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>70-84</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>A</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>4.0</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>50-54</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>B-</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>2.7</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>30-34</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>D+</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>1.3</td>";
                                                            transDiv += "</tr>";

                                                            transDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>65-69</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>A-</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>3.7</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>45-49</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>C+</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>2.3</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>25-29</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>D</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>1.0</td>";
                                                            transDiv += "</tr>";

                                                            transDiv += "<tr style='border: 1px solid black;font-size: 10px;'>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>60-64</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>B+</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>3.3</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>40-44</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>C</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>2.0</td>";

                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>00-24</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>E</td>";
                                                            transDiv += "<td style='border: 1px solid black;padding: 2px;text-align:center'>0.0</td>";
                                                            transDiv += "</tr></tbody>";

                                                            transDiv += "</table>";
                                                            transDiv += '<p style="font-size:11px;">*Sri Lanka Qualification Framework Level</p>';






                                                        });

                                                        // var exportFilename = "Transcript.doc";
                                                        // var csvData = new Blob([transDiv], {type: '.ms-word;charset=utf-8;'});
                                                        var exportFilename = "Detail Certificate.doc";
                                                        // let sendDataList = "htmlContent=" + encodeURIComponent(transDiv);
                                                        // sendDataList += "&sheetName=" + "Transcript";
                                                        // sendDataList += "&orientation=" + "l";
                                                        isrHandle.getDoc(transDiv, exportFilename);


                                                        // tableFinalDataTable.rows.add(tblDat);
                                                        // tableFinalDataTable.draw();

                                                    }
                                                });



                                            }

                                        }
                                    });
                                } else {
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'Alert',
                                        text: "Batch not updated. This batch hasn't set the required GPA to qualify for the degree."
                                    });
                                }
                            } else {
                                Swal.fire({
                                    icon: 'warning',
                                    title: 'Alert',
                                    text: "Batch not updated. This batch hasn't set the required credit limit to qualify for the degree."
                                });
                            }

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Alert',
                                text: 'Batch Not Availble.'
                            });
                        }
                    }
                });

                // Swal.fire(Entered Name: ${result.value});
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Swal.fire('Action canceled');
            }
        });


    }
}







function printTranscriptNew_() {

    var finalDiv = "";
    var addsDiv2 = "";
    var transDiv = "";
    var chechCount = 0;

    for (var i = 0; i < pr_Length; i++) {

        if (document.getElementById('checkSelectedPrint' + i)) {
            if (document.getElementById('checkSelectedPrint' + i).checked == true) {


                dataRep['printStudentNo'] = printStudNoArr[i];
                dataRep['printStudentName'] = printStuNameArr[i];
                dataRep['printYear'] = printYearArr[i];
                dataRep['printsemester'] = printsemArr[i];
                dataRep['finalGPA'] = printGPAArr[i];
                dataRep['finalResult'] = printResultArr[i];
                dataRep['printMedium'] = printMediumArr[i];
                dataRep['degreeTitle'] = PrintdegreeTitleArr[i];
                dataRep['cr_examHeld'] = printexamHeldArr[i];
                dataRep['cr_examValiddate'] = printexamValiddateArr[i];
                dataRep['cr_resit'] = printresitArr[i];
                //dataRep['Marks']= PrintMarksArr[i];


                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var dd = new Date();
                var d = dd.getUTCDate();
                var m = dd.getUTCMonth();
                var y = dd.getUTCFullYear();
                var mn = m + 1;
                var mn = months[dd.getUTCMonth()];
                var datelbl = d + " " + mn + "," + y;



                transDiv += '<p style="text-align: center;"><strong><u>STRICTLY CONFIDENTIAL </u></strong></p>';
                transDiv += '<div style="width:100%;height:0%;float:right;text-align:right;margin-top:5px;margin-bottom:5px;font-family:tahoma;font-size:13px;"><span style="float:right; color:#000000"></span><span style="float:right; color:#000000">&nbsp;&nbsp;&nbsp;&nbsp;' + datelbl + '</span></div>';
                transDiv += '<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
                transDiv += '<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
                transDiv += '<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
                transDiv += '<p>&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</p>';
                transDiv += '<p>&nbsp;</p>';
                transDiv += '<p style="text-align: center;"><strong><u>Academic Transcript &ndash; ' + dataRep['printStudentName'] + '.</u></strong></p>';
                //transDiv+='<p style="text-align: center;">&nbsp;</p>';
                transDiv += '<p>At the request of Mr./Mrs. ' + dataRep['printStudentName'] + ', his/her performances at the University examinations are forwarded herewith:</p>';
                transDiv += '<p>&nbsp;</p>';
                transDiv += '<ol>';
                transDiv += '<li>Full Name of the candidate :&nbsp;&nbsp; ' + dataRep['printStudentName'] + '</li>';
                transDiv += '</ol>';
                //transDiv+='<p>&nbsp;</p>';
                transDiv += '<ol start="2">';
                transDiv += '<li>Faculty&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp;&nbsp; Faculty of Graduate Studies</li>';
                transDiv += '<li>Degree&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp;&nbsp;' + dataRep['degreeTitle'] + '</li>';
                transDiv += '<li>Mode of Examination&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; Course work &amp; Research</li>';




                if (PrintdurationArr[i] == "2 Years") {
                    transDiv += '<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; 2 Years</li>';
                }
                else if (PrintdurationArr[i] == "1 Year") {
                    transDiv += '<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; 1 Year</li>';
                }
                else if (PrintdurationArr[i] == "PG") {
                    transDiv += '<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; 1 Year</li>';
                }
                else if (PrintdurationArr[i] == "3 Years") {
                    transDiv += '<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; 3 Years</li>';
                }
                else {
                    transDiv += '<li>Duration&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp; </li>';
                }


                if (dataRep['degreeTitle'] == "Master of Business in (Accounting/Finance)") {

                    transDiv += '<li>Total no. of Credits&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:&nbsp; 44</li>';
                }
                else {
                    transDiv += '<li>Total no. of Credits&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:&nbsp;' + dataRep['cr_credits'] + '</li>';
                }
                transDiv += '<li>Grade Point Average (GPA)&nbsp; :&nbsp; <strong>' + dataRep['finalGPA'] + '</strong></li>';
                transDiv += '</ol>';
                //transDiv+='<p>&nbsp;</p>';
                transDiv += '<ol start="8">';
                transDiv += '<li><strong><u>' + dataRep['degreeTitle'] + '</u></strong><strong><u> &ndash; Part I</u></strong></li>';
                transDiv += '</ol>';
                if (dataRep['degreeTitle'] == "Master of Business in (Accounting/Finance)") {
                    transDiv += '<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Course Work</u></strong></p>';
                }
                else {
                    transDiv += '<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>(40 Credits) Course Work</u></strong></p>';
                }
                //transDiv+='<p><strong><u>&nbsp;</u></strong></p>';
                transDiv += '<ol>';
                transDiv += '<li>a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date of Examination&nbsp;&nbsp;&nbsp;&nbsp; : ' + dataRep['cr_examHeld'] + '</li>';
                transDiv += '<li>b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Index Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <strong>' + dataRep['printStudentNo'] + '</strong></li>';
                transDiv += '</ol>';



                transDiv += '<table style="height: 52px; width: 606px; border-color: #404244; margin-left: auto; margin-right: auto;  border-collapse: collapse;" border="1">';
                transDiv += '<tbody>';
                transDiv += '<tr>';
                transDiv += '<td style="width: 100px; text-align: center;"><p><strong>Code</strong></p></td>';
                transDiv += '<td style="width: 500px; text-align: center;"><p><strong>Title of Paper</strong></p></td>';
                transDiv += '<td style="width: 50px; text-align: center;"><p><strong>No of Credits</strong></p></td>';
                transDiv += '<td style="width: 50px; text-align: center;"><p><strong>Marks</strong></p></td>';
                transDiv += '<td style="width: 50px; text-align: center;"><p><strong>Grade</strong></p></td>';
                transDiv += '</tr>';

                var gradeArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E', '(ab)', '-'];

                for (k = 0; k < cer_StudNoArr.length; k++) {


                    if (cer_StudNoArr[k] == printStudNoArr[i]) {

                        transDiv += '<tr>';
                        transDiv += '<td style="width: 100px; text-align: center;">&nbsp;' + PrintsubjectNameArr[k] + '</td>';
                        transDiv += '<td style="width: 500px; text-align: left;">&nbsp;' + PrintsubjectTitleArr[k] + '</td>';
                        transDiv += '<td style="width: 50px; text-align: center;">&nbsp;' + PrintsubjectCreditsArr[k] + '</td>';
                        transDiv += '<td style="width: 50px; text-align: center;">&nbsp;' + PrintMarksArr[k] + '</td>';
                        transDiv += '<td style="width: 50px; text-align: center;">&nbsp;' + PrintGradeArr[k] + '</td>';
                        transDiv += '</tr>';

                    }

                }
                transDiv += '</tbody>';
                transDiv += '</table>';

                transDiv += '<ol start="10">';
                transDiv += '<li>Key to Grades</li>';
                transDiv += '</ol>';

                transDiv += '<table style="width: 524px;border-color: #404244; margin-left: auto; margin-right: auto;  border-collapse: collapse; font-size:11px;" border="1">';
                transDiv += '<tbody>';
                transDiv += '<tr>';
                transDiv += '<td style="width: 105px; text-align: center;">';
                transDiv += '<p><strong>Range of Marks</strong></p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 28px; text-align: center;">';
                transDiv += '<p><strong>Grade</strong></p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p><strong>Grade Point Value</strong></p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 104px; text-align: center;">';
                transDiv += '<p><strong>Range of Marks</strong></p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 29px; text-align: center;">';
                transDiv += '<p><strong>Grade</strong></p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p><strong>Grade Point Value</strong></p>';
                transDiv += '</td>';
                transDiv += '</tr>';
                transDiv += '<tr>';
                transDiv += '<td style="width: 105px; text-align: center;">';
                transDiv += '<p>85 - 100</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 28px; text-align: center;">';
                transDiv += '<p>A+</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>4.0</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 104px; text-align: center;">';
                transDiv += '<p>45 - 49</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 29px; text-align: center;">';
                transDiv += '<p>C+</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>2.3</p>';
                transDiv += '</td>';
                transDiv += '</tr>';
                transDiv += '<tr>';
                transDiv += '<td style="width: 105px; text-align: center;">';
                transDiv += '<p>70 - 84</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 28px; text-align: center;">';
                transDiv += '<p>A</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>4.0</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 104px; text-align: center;">';
                transDiv += '<p>40 - 44</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 29px; text-align: center;">';
                transDiv += '<p>C</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>2.0</p>';
                transDiv += '</td>';
                transDiv += '</tr>';
                transDiv += '<tr>';
                transDiv += '<td style="width: 105px; text-align: center;">';
                transDiv += '<p>65 - 69</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 28px; text-align: center;">';
                transDiv += '<p>A-</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>3.7</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 104px; text-align: center;">';
                transDiv += '<p>35 - 39</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 29px; text-align: center;">';
                transDiv += '<p>C-</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>1.7</p>';
                transDiv += '</td>';
                transDiv += '</tr>';
                transDiv += '<tr>';
                transDiv += '<td style="width: 105px; text-align: center;">';
                transDiv += '<p>60 - 64</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 28px; text-align: center;">';
                transDiv += '<p>B+</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>3.3</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 104px; text-align: center;">';
                transDiv += '<p>30 - 34</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 29px; text-align: center;">';
                transDiv += '<p>D+</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>1.3</p>';
                transDiv += '</td>';
                transDiv += '</tr>';
                transDiv += '<tr>';
                transDiv += '<td style="width: 105px; text-align: center;">';
                transDiv += '<p>55 - 59</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 28px; text-align: center;">';
                transDiv += '<p>B</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>3.0</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 104px; text-align: center;">';
                transDiv += '<p>25 - 29</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 29px; text-align: center;">';
                transDiv += '<p>D</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>1.0</p>';
                transDiv += '</td>';
                transDiv += '</tr>';
                transDiv += '<tr>';
                transDiv += '<td style="width: 105px; text-align: center;">';
                transDiv += '<p>50 - 54</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 28px; text-align: center;">';
                transDiv += '<p>B-</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>2.7</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 104px; text-align: center;">';
                transDiv += '<p>20 - 24</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 29px; text-align: center;">';
                transDiv += '<p>E</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 112px; text-align: center;">';
                transDiv += '<p>0.0</p>';
                transDiv += '</td>';
                transDiv += '</tr>';
                transDiv += '</tbody>';
                transDiv += '</table>';


                transDiv += '<ol start="11">';
                if (dataRep['finalResult'] == "Pass") {
                    transDiv += '<li>Result : Reached the standard required for <strong>PASS</strong></li>';
                }
                if (dataRep['finalResult'] == "Merit") {
                    transDiv += '<li>Result : Reached the standard required for <strong>Merit</strong></li>';
                }
                if (dataRep['finalResult'] == "Repeat") {
                    transDiv += '<li>Result : Reached the standard required for <strong>Incomplete</strong></li>';
                }
                transDiv += '</ol>';

                //transDiv+='<p><strong>&nbsp;</strong></p>';

                transDiv += '<ol start="12">';
                transDiv += '<li>Results valid from : &nbsp;<strong>' + dataRep['cr_examValiddate'] + '</strong></li>';
                transDiv += '</ol>';
                transDiv += '<p>&nbsp;</p>';

                transDiv += '<table style="height: 120px; margin-left: auto; margin-right: auto; margin-top: 5px;" width="600">';
                transDiv += '<tbody>';
                transDiv += '<tr style="height: 30px;">';
                transDiv += '<td style="width: 125px; text-align: center; height: 30px;">';
                transDiv += '</td>';
                transDiv += '<td style="width: 125px; text-align: center; height: 30px;">';

                transDiv += '</td>';
                transDiv += '<td style="width: 261px; height: 30px; ">';
                transDiv += '<p style="text-align: center;">(R.M.M.L.B. Wewegama)</p>';
                transDiv += '</td>';
                transDiv += '</tr>';

                transDiv += '<tr style="height: 30px;">';
                transDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
                transDiv += '<td style="width: 125px; height: 30px; text-align: center;">&nbsp;</td>';
                transDiv += '<td style="width: 261px; text-align: center; height: 30px;"><strong>Deputy Registrar/Examinations &nbsp; &nbsp;&nbsp;<br />for Registrar</strong>&nbsp;</td>';
                transDiv += '</tr>';



                transDiv += '<tr style="height: 30px;">';
                transDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
                transDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Prepared by:</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 125px; height: 30px; text-align: center;">';
                transDiv += '<p style="font-size:11px;">............................... &nbsp; <br/>Checked by:</p>';
                transDiv += '</td>';
                transDiv += '<td style="width: 261px; text-align: center; height: 30px;">';
                transDiv += '</td>';
                transDiv += '</tr>';
                transDiv += '</tbody>';
                transDiv += '</table>';










            }
        }
    }



    var exportFilename = "Transcript.doc";
    var csvData = new Blob([transDiv], { type: '.ms-word;charset=utf-8;' });

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

//--------------------------------------------------------SEARCH FUNCTION END-----------------------------------------------



