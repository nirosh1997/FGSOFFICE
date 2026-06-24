
function getSelectOptions(options) {
    var selectOptions = '';
    options.forEach(option => {
        selectOptions += '<option value="' + option + '">' + option + '</option>';
    });
    return selectOptions;
}

function changeSubViolationAdd(sem) {
    const isChecked = $("#subChangeTabelChk" + sem).is(":checked");
    if (isChecked) {
        $('.subTabel' + sem).attr("style", "display: table-row !important");
    } else {
        $('.subTabel' + sem).attr("style", "display: none !important");
        $.each(subjectArr, function (index, subject) {
            if (subject.subjectSemester == sem) {
                $("#co" + subject.subjectCode).prop("checked", false);
            }
        });
    }
}

var subjectArr;
function setTabelDataForExamViolation() {
    $("#subjectTable").html("");
    subjectArr = "";

    let violationOptions = [
        'Temporary Hold',
        'Examination Offences Committee',
        'Appeal Committee',
        'Others'
    ];
    SetStudentsViolateExam.clear().draw();


    let postData = {
        action: "getRegStudentsWhoHoldResult",
        degreeCode: $("#selectedDegreeName").val(),
        achedamicYear: $("#achedamicYear").val(),
        medium: $('input:radio[name=selectMedium]:checked').val(),
        authcode: authcode,
        username: dataRep['userId'],
        // type:"all"
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
                                // var selectedOptionValue = $(this).val();
                                let btn = '';
                                if (student.document != "") {
                                    btn = '<button class="btn btn-success" id="history" style="text-align:center;width:100%"><i class="fa fa-file" aria-hidden="true"></i></button>';
                                }
                                var rowNode = SetStudentsViolateExam.row.add([
                                    count,
                                    student.doc_no,
                                    student.report_date,
                                    student.studentName,
                                    student.studentNo,
                                    student.ssubject_code,
                                    student.sattempt,
                                    student.attempt_time,
                                    student.reason,
                                    student.snote,
                                    // '<select id="selectOption' + index + '" name="selectOption' + index + '" class="form-control">'
                                    // + '<option value="0" selected disabled>Select an Option</option>'
                                    // + getSelectOptions(violationOptions) +
                                    // '</select>',

                                    // '<button class="btn btn-info" id="hold" style="text-align:center;width:100%" onclick="addNewViolation(' + student.studentNo + ', ' + student.studentNIC + ', ' + HoldRe + ');">Hold</button>',
                                    // '<button class="btn btn-danger" id="release" style="text-align:center;width:100%" onclick="addNewViolation(' + student.studentNo + ', ' + student.studentNIC + ', ' + ReleaseRe + ');">Release</button>',
                                    btn,
                                ]).node();
                                rowNode.classList.add(student.guilty > 0 ? 'has-violations' : 'no-violations');

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

                                $(rowNode).find('#history').on('click', function () {
                                    showViolationHistory(student.doc_no, student.snote, student.report_date, student.ssubject_code, student.document, student.studentNo, student.studentNIC, student.doctype);
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



function addNewViolation(stNo, nic, option) {

    $("#bosForm").trigger("reset");
    let postData = {
        action: "getViolations",
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/violation.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            if (response && response.length > 0) {
                let violationOption = "";
                $.each(response, function (index, violation) {
                    violationOption += "<option value=" + violation.violation_name + " >" + violation.violation_name + "</option>";
                });
                violationOption += "<option value='Other' >Other</option>";

                if (option == "Others") {
                    $('#commityName').val("");
                    $("#commityName").prop("disabled", false);
                } else {
                    $('#commityName').val(option);
                    $("#commityName").prop("disabled", true);

                }


                $('#st_nic').val(nic);
                $('#st_regNo').val(stNo);

                // Populate the Offences dropdown
                $('#offencesType').html(violationOption);
                $('#holdBtn').hide();
                $('#releaseBtn').hide();
                if (option == "Hold Results") {
                    $('#holdBtn').show();
                    $('#bosModalLabel').html("Hold Results");
                }
                if (option == "Release Results") {
                    $('#releaseBtn').show();
                    $('#bosModalLabel').html("Release Results");
                }


                // Show Bootstrap modal
                $('#bosModal').modal('show');

                $('#offencesType').change(function () {
                    if ($(this).val() === 'Other') {
                        $('#offencesName').show();
                        $('#offencesNameLabel').show();
                    } else {
                        $('#offencesName').hide();
                        $('#offencesNameLabel').hide();
                    }
                });



            } else {
                // Handle the case where there are no violations
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function closeModel() {
    $('#bosModal').modal('hide');
}

function submitForm_(result) {
    let formData = new FormData();
    var attempt = $("input[name='selectedAttempt']:checked").val();
    formData.append('action', 'setViolation');
    formData.append('attempt', attempt);

    formData.append('st_regNo', $('#st_regNo').val());
    formData.append('st_nic', $('#st_nic').val());
    formData.append('commityName', $('#commityName').val());
    if (offencesType == "Other") {
        formData.append('offencesType', $('#offencesName').val());
    } else {
        formData.append('offencesType', $('#offencesType').val());
    }
    formData.append('bosNumber', $('#bosNumber').val());
    formData.append('bosDate', $('#bosDate').val());
    formData.append('note', $('#note').val());
    formData.append('bosFile', $('#bosFile').prop('files')[0]);
    formData.append('result', result);
    formData.append('authcode', authcode);
    formData.append('username', dataRep['userId']);

    $.each(subjectArr, function (index, subject) {
        let chk = $("#co" + subject.subjectCode).is(":checked");
        if (chk) {
            formData.append('subjectCodes[]', subject.subjectCode);
        }
    });








    $.ajax({
        type: 'POST',
        url: 'rules/violation.php',
        data: formData,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            if (response.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: 'Successfully Completed!',
                });
                SetStudentsViolateExam.rows().every(function (index) {
                    var rowData = this.data();
                    if (rowData[3] == $('#st_regNo').val()) {
                        SetStudentsViolateExam.row(index).node().classList.add(result == 1 ? 'has-violations' : 'no-violations');
                        SetStudentsViolateExam.row(index).node().classList.remove(result == 1 ? 'no-violations' : 'has-violations');
                        return false;
                    }
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: response.message,
                });
            }

            $('#bosModal').modal('hide');
        },
        error: function (error) {
            console.log(error);
        }
    });

}

function showViolationHistory(docno, note, report_date, subjectCode, document, stNo, nic, doctype) {
    // Extract the file extension

    var fileExtension = document.split('.').pop().toLowerCase();

    // Check if the file extension indicates a supported type for iframe display
    var supportedTypes = ['pdf', 'txt', 'html', 'htm', 'png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg'];
    var isSupported = supportedTypes.includes(fileExtension);

    if (isSupported) {
        // If the file type is supported, display it in the iframe
        if (doctype == "m") {
            $('#iframeModelSRC').attr("src", docLocation + "doc/medical/" + document);
        } else if (doctype == "v") {
            $('#iframeModelSRC').attr("src", docLocation + "doc/violation/" + document);
        } else {
            $('#iframeModelSRC').attr("src", docLocation + "doc/violation/" + document);
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
        // Open the download link in a new tab
        window.open(downloadLink, '_blank');
    }
}



var SetStudentsViolateExam;
function DataTableExamViolation() {

    $('#bosForm').submit(function (e) {
        e.preventDefault();
        let result = $('button[type="submit"]:focus').val();

        if (result === '1') {
            // Guilty button was clicked
            console.log('Guilty button clicked');
        } else if (result === '0') {
            // Not Guilty button was clicked
            console.log('Not Guilty button clicked');
        }
        submitForm_(result);
    });

    var buttons = [];

    // if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'SAR-GWAI') {
    // 	buttons.push({
    // 		text: 'Register',
    // 		className: 'btn btn-primary',
    // 		action: function (e, dt, node, config) {
    // 			formSelectedStudentListsendForm("addSelectedStudentList");
    // 			CreateStudentUserAccount("addStudentAccounts");
    // 			formRegisterBulkNotesendFormNew("addBulkRegisterNotes");
    // 			resetdata();
    // 			// sendForm('data4returnStudent');
    // 			// sendForm('data4checkUserRegisterStudent');
    // 			// sendForm('data4checkdepartmentRegisterStudent');
    // 			// sendForm('data4getLibCode');
    // 		}
    // 	});

    // 	buttons.push({
    // 		text: 'Add Note',
    // 		className: 'btn btn-primary',
    // 		action: function (e, dt, node, config) {
    // 			generateBulkNote01();
    // 		}
    // 	});

    // }

    SetStudentsViolateExam = $('#dataTableExamViolation').DataTable({
        dom: "<'row'<'col-12 text-right' B>>" +
            "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" +
            "<'row'<'col-12't>>" +
            "<'row'<'col-6'i><'col-6'p>>",
        buttons: buttons,
        columnDefs: [{
            targets: 0,
            orderable: false,
            searchable: false,
        },

        ],
        order: [0, 'asc'],
    });


}


function formStudentViolation(dsp) {
    title = "Suspension of Results";
    let str = "";
    if (dsp == "studentViolaion") {

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
        str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="setTabelDataForExamViolation();">';
        // str += await setDegrees();
        str += '</select>';
        str += '</div></div>';



        str += '<div class="col-sm-3">';
        str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';

        str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="setTabelDataForExamViolation();">';
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
        str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium : </label></div>';
        str += '<div class="col-sm-10" style="display: inline-flex;">';
        str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input' name='selectMedium' value='si'  " + mediumSinhalaChecked + " onchange='setTabelDataForExamViolation();'>Sinhala<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input' name='selectMedium' value='en'  " + mediumEnglishChecked + " onchange='setTabelDataForExamViolation();'>English<i class='input-helper'></i></label></div></div>";
        str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="setTabelDataForExamViolation();">View List</button></div>';
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
        str += '<table class="table table-bordered" id="dataTableExamViolation">';
        str += '<thead><tr>';
        str += '<th width="5%">#</th>';
        str += '<th width="5%">Document Number</th>';
        str += '<th width="5%">Repored Date</th>';
        str += '<th>Student Name</th>';
        str += '<th>Student No</th>';
        str += '<th>Subject Code</th>';
        str += '<th>Attempt</th>';
        str += '<th>Attempt Time</th>';
        str += '<th>Reason</th>';
        str += '<th>Notes</th>';
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