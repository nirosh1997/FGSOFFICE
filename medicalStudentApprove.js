
// function getSelectOptions(options) {
//     var selectOptions = '';
//     options.forEach(option => {
//         selectOptions += '<option value="' + option + '">' + option + '</option>';
//     });
//     return selectOptions;
// }

// function changeSubViolationAdd(sem) {
//     const isChecked = $("#subChangeTabelChk" + sem).is(":checked");
//     if (isChecked) {
//         $('.subTabel' + sem).attr("style", "display: table-row !important");
//     } else {
//         $('.subTabel' + sem).attr("style", "display: none !important");
//         $.each(subjectArr, function (index, subject) {
//             if (subject.subjectSemester == sem) {
//                 $("#co" + subject.subjectCode).prop("checked", false);
//             }
//         });
//     }
// }

var subjectArr;
function setTabelDataForExamMedicalApprove() {
    $("#subjectTable").html("");
    hideMediums();
    subjectArr = "";
    SetStudentsViolateExam.clear().draw();


    let postData = {
        action: "getRegStudentsWhoHoldResult",
        degreeCode: $("#selectedDegreeName").val(),
        achedamicYear: $("#achedamicYear").val(),
        medium: md,
        type: "m",
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
            if (response && response.length > 0 && response[0].status === 200) {
                count = 0;

                let getSubject = {
                    action: "getSubject",
                    degreeCode: $("#selectedDegreeName").val(),
                    achedamicYear: $("#achedamicYear").val(),
                    authcode: authcode,
                    username: dataRep['userId'],
                };
                $.ajax({
                    type: 'POST',
                    url: 'rules/subject.php',
                    data: getSubject,
                    dataType: 'json',
                    success: function (responseSub) {


                        if (responseSub && responseSub.length > 0 && responseSub[0].status === 200) {
                            console.log(responseSub);

                            subjectArr = responseSub;
                            let sem = "";
                            let semOption = "";
                            let endSemOption = "";
                            let subSet = "<table class='table table-bordered'><tr><td></td><td>Sem</td><td>Subject Code</td><td>Subject Name</td></tr>";
                            $.each(subjectArr, function (index, subject) {
                                if (sem != subject.subjectSemester) {
                                    if (subject.subjectSemester == 0) {
                                        endSemOption = '<input type="checkbox" id="subChangeTabelChk' + subject.subjectSemester + '" style="margin: auto;margin-right: 10px;" onchange="changeSubViolationAdd(' + subject.subjectSemester + ')"><label style="margin-right: 2rem;">End Sem</label>';
                                    } else {
                                        semOption += '<input type="checkbox"  id="subChangeTabelChk' + subject.subjectSemester + '" style="margin: auto;margin-right: 10px;" onchange="changeSubViolationAdd(' + subject.subjectSemester + ')"><label style="margin-right: 2rem;">' + subject.subjectSemester + ' Sem</label>';
                                    }
                                    sem = subject.subjectSemester;
                                }
                                subSet += "<tr class='subTabel" + subject.subjectSemester + "' style='display:none'>";
                                subSet += '<td><input type="checkbox" id="co' + subject.subjectCode + '" name="co' + subject.subjectCode + '"  style="margin: auto;width: -webkit-fill-available;"></td>';
                                subSet += "<td>" + subject.subjectSemester + "</td>";
                                subSet += "<td>" + subject.subjectCode + "</td>";
                                subSet += "<td class='text-wrap'>" + subject.subjectTitle + "</td>";
                                subSet += "</tr>";
                            });
                            subSet += "</table>";

                            let ShowSelect = semOption + endSemOption;
                            let HoldRe = "Hold Results";
                            let ReleaseRe = "Release Results";
                            $("#subjectTable").html(ShowSelect + subSet);

                            $.each(response, function (index, student) {
                                count++;

                                let rowNode;
                                if (dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "FGS Deputy Registrar" || dataRep['roleName'] == "Dean" || dataRep['roleName'] == "Coordinator") {
                                    let btnDisable = "";
                                    if (student.medicalApprove == 0 || student.medicalApprove == 2) {
                                        btnDisable = "disabled";
                                    }

                                    let attachBtn = ""
                                    if (student.document != "") {
                                        attachBtn = '<button class="btn btn-success" id="studentAttachEvidance" style="text-align:center;width:100%"><i class="fa fa-file" aria-hidden="true"></i></button>';
                                    }

                                    let attachEvidanceBtn = ""
                                    if (student.medicalApproveEvidence != "") {
                                        attachEvidanceBtn = '<button class="btn btn-success" id="approveEvidance" style="text-align:center;width:100%"><i class="fa fa-file" aria-hidden="true"></i></button>';
                                    }

                                    let medicalStatus
                                    if (student.medicalApprove == 0) {
                                        medicalStatus = '<span class="badge badge-success">Approved</span>';
                                    } else if (student.medicalApprove == 2) {
                                        medicalStatus = '<span class="badge badge-danger">Rejected</span>';
                                    } else {
                                        medicalStatus = '<span class="badge badge-warning">Pending</span>';
                                    }
                                    rowNode = SetStudentsViolateExam.row.add([
                                        // count,
                                        student.doc_no,
                                        student.report_date,
                                        student.studentName,
                                        student.studentNo,
                                        student.ssubject_code,
                                        attachBtn,
                                        attachEvidanceBtn,
                                        student.medicalApproveUser,
                                        medicalStatus,
                                        '<button class="btn btn-success" ' + btnDisable + ' id="approve" style="text-align:center;width:100%">Approve</button>',
                                        '<button class="btn btn-danger" ' + btnDisable + ' id="reject" style="text-align:center;width:100%">Reject</button>',
                                    ]).node();
                                    rowNode.classList.add(student.guilty > 0 ? 'has-violations' : 'no-violations');


                                } else {
                                    let btnDisable = "";
                                    if (student.medicalApprove == 0 || student.medicalApprove == 2) {
                                        btnDisable = "disabled";
                                    }
                                    let attachBtn = ""
                                    if (student.document != "") {
                                        attachBtn = '<button class="btn btn-success" id="studentAttachEvidance" style="text-align:center;width:100%"><i class="fa fa-file" aria-hidden="true"></i></button>';

                                    }
                                    rowNode = SetStudentsViolateExam.row.add([
                                        // count,
                                        student.doc_no,
                                        student.report_date,
                                        student.studentName,
                                        student.studentNo,
                                        student.ssubject_code,
                                        attachBtn,
                                        '<button class="btn btn-success" ' + btnDisable + ' id="approve" style="text-align:center;width:100%">Approve</button>',
                                        '<button class="btn btn-danger" ' + btnDisable + ' id="reject" style="text-align:center;width:100%">Reject</button>',

                                    ]).node();
                                    // rowNode.classList.add(student.guilty > 0 ? 'has-violations' : 'no-violations');

                                }


                                // Add event listener for the select dropdown
                                // $(rowNode).find('select').on('change', function () {
                                //     var selectedOptionValue = $(this).val();
                                //     addNewViolation(student.studentNo, student.studentNIC, selectedOptionValue);
                                // });

                                // Add event listener for the button
                                // $(rowNode).find('#hold').on('click', function () {
                                //     addNewViolation(student.studentNo, student.studentNIC, "Hold Results");
                                // });

                                // $(rowNode).find('#release').on('click', function () {
                                //     addNewViolation(student.studentNo, student.studentNIC, "Release Results");
                                // });
                                $(rowNode).find('#studentAttachEvidance').on('click', function () {
                                    showAttachment(student.doc_no, student.snote, student.report_date, student.ssubject_code, student.document, student.studentNo, student.studentNIC, student.doctype);
                                });
                                if (dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "FGS Deputy Registrar" || dataRep['roleName'] == "Dean") {
                                    $(rowNode).find('#approveEvidance').on('click', function () {
                                        showAttachment(student.doc_no, student.snote, student.report_date, student.ssubject_code, student.medicalApproveEvidence, student.studentNo, student.studentNIC, student.doctype);
                                    });
                                }
                                $(rowNode).find('#approve').on('click', function () {
                                    approveMedical(student.doc_no, student.snote, student.report_date, student.ssubject_code, student.document, student.studentNo, student.studentNIC);
                                });

                                $(rowNode).find('#reject').on('click', function () {
                                    rejectMedical(student.doc_no, student.snote, student.report_date, student.ssubject_code, student.document, student.studentNo, student.studentNIC);
                                });
                            });
                            SetStudentsViolateExam.draw(false);

                        }
                    },
                    error: function (error) {
                        console.log(error)

                    }

                });


            }
        },
        error: function (error) {
            console.log(error)

        }
    });
}


function showAttachment(docno, note, report_date, subjectCode, document, stNo, nic, doctype) {
    // Extract the file extension

    var fileExtension = document.split('.').pop().toLowerCase();

    // Check if the file extension indicates a supported type for iframe display
    var supportedTypes = ['pdf', 'txt', 'html', 'htm', 'png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg'];
    var isSupported = supportedTypes.includes(fileExtension);

    if (isSupported) {
        // console.log(docLocation + "doc/medical/" + document);
        // console.log(doctype);
        // console.log("historyShowModel");

        // If the file type is supported, display it in the iframe
        if (doctype == "m") {
            $('#iframeModelSRC').attr("src", docLocation + "doc/medical/" + document).css("width", "-webkit-fill-available");;
        } else if (doctype == "v") {
            $('#iframeModelSRC').attr("src", docLocation + "doc/violation/" + document).css("width", "-webkit-fill-available");;
        } else {
            $('#iframeModelSRC').attr("src", docLocation + "doc/violation/" + document).css("width", "-webkit-fill-available");;
        }
        $('#historyShowModel').modal('show');
    } else {
        if (doctype == "m") {
            var downloadLink = docLocation + "doc/medical/" + document;
        } else if (doctype == "v") {
            var downloadLink = docLocation + "doc/violation/" + document;
        } else {
            var downloadLink = docLocation + "doc/violation/" + document;
        }
        // console.log(downloadLink);
        // Open the download link in a new tab
        window.open(downloadLink, '_blank');
    }
}



function approveMedical(docno, note, report_date, subjectCode, document, stNo, nic) {
    // First SweetAlert confirmation
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to approve this medical report?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approve it!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Show the prompt for attaching evidence
            const isSARorDean = dataRep['roleName'] === 'FGS Deputy Registrar' || dataRep['roleName'] === 'Dean' || dataRep['roleName'] === 'Coordinator';
            Swal.fire({
                title: 'Attach Evidence',
                html: `
                    <div class="form-group">
                        <label for="evidenceFile" class="form-label">Please attach the necessary evidence before proceeding:</label>
                        <input type="file" id="evidenceFile" class="form-control" accept="application/pdf,image/*">
                    </div>
                `,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Approve with Evidence(attach the proof)',
                showDenyButton: isSARorDean, // Show deny button only for SAR or Dean
                denyButtonText: 'Approve',
                preConfirm: () => {
                    // Use jQuery to get the selected file
                    const fileInput = $('#evidenceFile');
                    // Check if the user clicked "Attach and Approve" and no file is attached
                    if (fileInput[0].files.length === 0) {
                        // Show a custom warning message if no file is attached
                        Swal.fire({
                            icon: 'warning',
                            title: 'No File Attached',
                            text: 'Please attach a file to proceed.',
                        });
                        return false; // Prevent submission if no file is attached
                    }
                    return fileInput[0].files[0]; // Return the file for further processing
                }
            }).then((attachResult) => {
                if (attachResult.isConfirmed) {
                    const attachedFile = attachResult.value; // The attached file
                    sendApprovalData(docno, note, report_date, subjectCode, document, stNo, nic, attachedFile);
                } else if (attachResult.isDenied && isSARorDean) {
                    // Call the function to approve without evidence for SAR or Dean
                    sendApprovalData(docno, note, report_date, subjectCode, document, stNo, nic, null);
                } else if (attachResult.isDenied) {
                    Swal.fire('Permission Denied', 'You cannot approve without evidence.', 'error');
                }
            });
        }
    });
}


function rejectMedical(docno, note, report_date, subjectCode, document, stNo, nic) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to reject this medical report?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reject it!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Show the prompt for attaching evidence
            const isSARorDean = dataRep['roleName'] === 'FGS Deputy Registrar' || dataRep['roleName'] === 'Dean' || dataRep['roleName'] === 'Coordinator';
            Swal.fire({
                title: 'Attach Evidence',
                html: `
                    <div class="form-group">
                        <label for="evidenceFile" class="form-label">Please attach the necessary evidence before proceeding:</label>
                        <input type="file" id="evidenceFile" class="form-control" accept="application/pdf,image/*">
                    </div>
                `,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Reject with Evidence(attach the proof)',
                showDenyButton: isSARorDean, // Show deny button only for SAR or Dean
                denyButtonText: 'Reject',
                preConfirm: () => {
                    // Use jQuery to get the selected file
                    const fileInput = $('#evidenceFile');
                    // Check if the user clicked "Attach and Approve" and no file is attached
                    if (fileInput[0].files.length === 0) {
                        // Show a custom warning message if no file is attached
                        Swal.fire({
                            icon: 'warning',
                            title: 'No File Attached',
                            text: 'Please attach a file to proceed.',
                        });
                        return false; // Prevent submission if no file is attached
                    }
                    return fileInput[0].files[0]; // Return the file for further processing
                }
            }).then((attachResult) => {
                if (attachResult.isConfirmed) {
                    const attachedFile = attachResult.value; // The attached file
                    sendRejectData(docno, note, report_date, subjectCode, document, stNo, nic, attachedFile);
                } else if (attachResult.isDenied && isSARorDean) {
                    // Call the function to approve without evidence for SAR or Dean
                    sendRejectData(docno, note, report_date, subjectCode, document, stNo, nic, null);
                } else if (attachResult.isDenied) {
                    Swal.fire('Permission Denied', 'You cannot reject without evidence.', 'error');
                }
            });
        }
    });
}


function sendRejectData(docno, note, report_date, subjectCode, document, stNo, nic, attachedFile) {
    // Create a FormData object to send the data and file
    const formData = new FormData();
    formData.append('action', 'RejectMedical');
    formData.append('docno', docno);
    formData.append('note', note);
    formData.append('report_date', report_date);
    formData.append('subjectCode', subjectCode);
    formData.append('document', document);
    formData.append('stNo', stNo);
    formData.append('nic', nic);
    formData.append('user', dataRep['userName']);
    formData.append('role', dataRep['roleName']);
    formData.append('authcode', authcode);
    formData.append('username', dataRep['userId']);

    if (attachedFile) {
        formData.append('evidenceFile', attachedFile);
    }

    // Send data to PHP using AJAX
    $.ajax({
        url: 'rules/students.php',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
            Swal.fire('Rejected!', 'The medical report has been rejected.', 'success');
            console.log('Server response:', response);
        },
        error: function (error) {
            // Swal.fire('Error', 'There was an error approving the report.', 'error');
            Swal.fire('Error', 'There was an error rejecting the medical.', 'error');
            console.error('Error:', error);
        }
    });
}

// Function to handle sending the data to the server with or without evidence
function sendApprovalData(docno, note, report_date, subjectCode, document, stNo, nic, attachedFile) {
    // Create a FormData object to send the data and file
    const formData = new FormData();
    formData.append('action', 'approveMedical');
    formData.append('docno', docno);
    formData.append('note', note);
    formData.append('report_date', report_date);
    formData.append('subjectCode', subjectCode);
    formData.append('document', document);
    formData.append('stNo', stNo);
    formData.append('nic', nic);
    formData.append('user', dataRep['userName']);
    formData.append('role', dataRep['roleName']);
    formData.append('authcode', authcode);
    formData.append('username', dataRep['userId']);

    if (attachedFile) {
        formData.append('evidenceFile', attachedFile);
    }

    // Send data to PHP using AJAX
    $.ajax({
        url: 'rules/students.php',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
            Swal.fire('Approved!', 'The medical report has been approved.', 'success');
            console.log('Server response:', response);
        },
        error: function (error) {
            Swal.fire('Error', 'There was an error approving the report.', 'error');
            console.error('Error:', error);
        }
    });
}



var SetStudentsViolateExam;
function DataTableExamMedicalApprove() {
    var buttons = [];

    SetStudentsViolateExam = $('#dataTableExamMedicalApprove').DataTable({
        dom: "<'row'<'col-12 text-right' B>>" +
            "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" +
            "<'row'<'col-12't>>" +
            "<'row'<'col-6'i><'col-6'p>>",
        buttons: buttons,

        order: [1, 'asc'],
    });


}


function formStudentMedicalApprove(dsp) {
    title = "Medical/Other Approved Reason Student List";
    let str = "";
    if (dsp == "medicalstudentlist") {

        //get Degree



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

        str += '<div class="col-sm-4">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;setTabelDataForExamMedicalApprove();">';
        // str += await setDegrees();
        str += '</select>';
        str += '</div></div>';



        str += '<div class="col-sm-3">';
        str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';

        str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="setTabelDataForExamMedicalApprove();">';
        str += setAcademicYearNew();
        str += '</select>';
        str += '</div>';
        str += '</div>';

        let mediumSinhalaChecked = mediumEnglishChecked = "";
        if (dataRep['selectMedium'] == 'si') {
            mediumSinhalaChecked = 'checked';
        } else if (dataRep['selectMedium'] == 'en') {
            mediumEnglishChecked = 'checked'
        }
        str += '<div class="col-sm-5">'
        str += '<div class="col-sm-2 MediumRadioFullBox" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium : </label></div>';
        str += '<div class="col-sm-10 " style="display: inline-flex;">';
        str += "<div class='col-sm-3 MediumRadioFullBox'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='si'  " + mediumSinhalaChecked + " onchange='setTabelDataForExamMedicalApprove();getMediumSinhala();'>Sinhala<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-3 MediumRadioFullBox'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='en'  " + mediumEnglishChecked + " onchange='setTabelDataForExamMedicalApprove();getMediumEnglish();'>English<i class='input-helper'></i></label></div></div>";
        str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="setTabelDataForExamMedicalApprove();">View List</button></div>';
        str += '</div>';

        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '</div>';
        str += '</div>';
        str += '</div>';


        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="dataTableExamMedicalApprove">';
        str += '<thead><tr>';
        str += '<th width="15%">Document Number</th>';
        str += '<th width="5%">Date</th>';
        str += '<th>Student Name</th>';
        str += '<th>Student No</th>';
        str += '<th>Subject Code</th>';
        str += '<th width="5%">Student Attachment</th>';
        if (dataRep['roleName'] == "Administrator" || dataRep['roleName'] == "FGS Deputy Registrar" || dataRep['roleName'] == "Dean" || dataRep['roleName'] == "Coordinator") {
            str += '<th width="5%">Approved Evidance</th>';
            str += '<th>Aproved By</th>';
            str += '<th>Status</th>';
        }

        // str += '<th>Attempt</th>';
        // str += '<th>Attempt Time</th>';
        str += '<th></th>';
        str += '<th></th>';
        str += '</tr></thead>';
        str += '<tbody>';
        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<div class="modal fade " data-bs-backdrop="static" id="historyShowModel" tabindex="-1" role="dialog" aria-labelledby="bosModalLabel" aria-hidden="true">';
        str += '<div class="modal-dialog modal-lg" role="document">';
        str += '<div class="modal-content">';
        str += '<div class="modal-header">';
        str += '<h5 class="modal-title" id="bosModalLabel">Documnet</h5>';
        str += '</div>';
        str += '<form id="bosForm">';
        str += '<div class="modal-body">';

        str += ' <iframe src="" width="100%" height="600px" id="iframeModelSRC"></iframe>';

        str += '</div>';
        str += '<div class="modal-footer">';
        str += '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>';
        str += '</form>';

        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
    }
    return str;
}