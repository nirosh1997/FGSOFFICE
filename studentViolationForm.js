
function holdresult() {
    var dataArray = [];

    // Iterate through rows in the table
    $("#vioStudent tbody tr").each(function () {
        var rowData = {
            "Student No": $(this).find("td:eq(1)").text(),
            "Student Name": $(this).find("td:eq(2)").text(),
            "Attempt": $(this).find("td:eq(3)").text(),
            "AttemptTime": $(this).find("td:eq(4)").text(),
            "Subject Code": $(this).find("td:eq(5)").text()
        };
        dataArray.push(rowData);
    });

    var jsonData = JSON.stringify(dataArray);

    let formData = new FormData();
    formData.append('action', 'tempHoldResult');
    formData.append('docNumber', $('#docNumber').val());
    formData.append('docDate', $('#docDate').val());
    formData.append('holdnote', $('#holdnote').val());
    formData.append('holdReason', $('#holdReason').val());
    formData.append('docFile', $('#docFile').prop('files')[0]);
    formData.append('stu_Data', jsonData);
    formData.append('authcode', authcode);
    formData.append('username', dataRep['userId']);

    $.ajax({
        type: 'POST',
        url: 'rules/violation.php',
        data: formData,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            if (response.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Successfully Completed!',
                    timer: 5000, // Set a timer for 5 seconds
                    showConfirmButton: true,
                    didClose: () => {
                        showMenu('studentViolaionForm'); setDegrees(); DataTableExamViolationForm();
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        showMenu('studentViolaionForm'); setDegrees(); DataTableExamViolationForm();
                    }
                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: response.message,
                });
            }

            $('#bosModal').modal('hide');
        },
        error: function (error) {
            console.log(error);
        }
    });


    console.log(jsonData);
}

function findAppliedExam() {
    let getSubject = {
        action: "getSubjectBySubejctCode",
        subjectCode: $("#st_subjectCode").val(),
        authcode: authcode,
        username: dataRep['userId'],
        // academicYear: $("#st_academicYear").val()
    };

    $.ajax({
        type: 'POST',
        url: 'rules/subject.php',
        data: getSubject,
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if (response && response.length > 0 && response[0].status === 200) {
                let getResultsF = {
                    action: "getSubjectExamAppliedFirst",
                    subjectCode: $("#st_subjectCode").val(),
                    st_no: $("#st_regNo").val(),
                    academicYear: $("#st_academicYear").val(),
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                let getResultsR = {
                    action: "getSubjectExamAppliedRepeat",
                    subjectCode: $("#st_subjectCode").val(),
                    st_no: $("#st_regNo").val(),
                    academicYear: $("#st_academicYear").val(),
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                let getResultsRR = {
                    action: "getSubjectExamAppliedReRepeat",
                    subjectCode: $("#st_subjectCode").val(),
                    st_no: $("#st_regNo").val(),
                    academicYear: $("#st_academicYear").val(),
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                let subdata = [];
                $.ajax({
                    type: 'POST',
                    url: 'rules/subject.php',
                    data: getResultsF,
                    dataType: 'json',
                    success: function (sub) {
                        if (sub && sub.length > 0 && sub[0].status === 200) {
                            $.each(sub, function (index, subject) {
                                subdata.push(subject);
                            });
                        }
                        $.ajax({
                            type: 'POST',
                            url: 'rules/subject.php',
                            data: getResultsR,
                            dataType: 'json',
                            success: function (sub) {
                                if (sub && sub.length > 0 && sub[0].status === 200) {
                                    $.each(sub, function (index, subject) {
                                        subdata.push(subject);
                                    });
                                }

                                $.ajax({
                                    type: 'POST',
                                    url: 'rules/subject.php',
                                    data: getResultsRR,
                                    dataType: 'json',
                                    success: function (sub) {
                                        if (sub && sub.length > 0 && sub[0].status === 200) {
                                            $.each(sub, function (index, subject) {
                                                subdata.push(subject);
                                            });
                                        }

                                        let subSet = "<table class='table table-bordered'><tr><th style='width:10%'>Attempt</th><th style='width:10%'>Attempt Time</th><th style='width:20%'>Applied Date</th><th style='width:10%'>Grade</th><th style='width:10%'>Marks</th><th style='width:10%'>Examniner 1</th><th style='width:10%'>Examniner 2</th><th></th></tr>";
                                        $.each(subdata, function (index, subject) {
                                            subSet += "<tr class='subTabel" + subject.attempt + "'>";
                                            subSet += "<td style='width:10%'>" + subject.attempt + "</td>";
                                            subSet += "<td style='width:10%'>" + subject.attemptTime + "</td>";

                                            subSet += "<td style='width:20%'>" + subject.appliedDate + "</td>";
                                            if (subject.Grade != null) {
                                                subSet += "<td style='width:10%;text-align:center'>" + subject.Grade + "</td>";
                                            } else {
                                                subSet += "<td style='width:10%;text-align:center'></td>";
                                            }
                                            if (subject.Marks != null) {
                                                subSet += "<td style='width:10%;text-align:center'>" + subject.Marks + "</td>";
                                            } else {
                                                subSet += "<td style='width:10%;text-align:center'></td>";
                                            }
                                            if (subject.Examiner1 != null) {
                                                subSet += "<td style='width:10%;text-align:center'>" + subject.Examiner1 + "</td>";
                                            } else {
                                                subSet += "<td style='width:10%;text-align:center'></td>";
                                            }
                                            if (subject.Examiner2 != null) {
                                                subSet += "<td style='width:10%;text-align:center'>" + subject.Examiner2 + "</td>";
                                            } else {
                                                subSet += "<td style='width:10%;text-align:center'></td>";
                                            }
                                            // subSet += "<td style='width:10%;text-align:center'>" + subject.Marks + "</td>";
                                            // subSet += "<td style='width:10%;text-align:center'>" + subject.Examiner1 + "</td>";
                                            // subSet += "<td style='width:10%;text-align:center'>" + subject.Examiner2 + "</td>";
                                            subSet += "<td style='width:10%;text-align:center'><button type='button' onclick=addtoSuspendList('" + subject.attempt + "','" + $("#st_subjectCode").val() + "','" + $("#st_regNo").val() + "','" + $("#st_academicYear").val() + "','" + subject.attemptTime + "') class='btn btn-success'>Add </button></td>";
                                            subSet += "</tr>";
                                        });
                                        subSet += "</table>";
                                        $("#subjectTable").html(subSet);

                                        $("#subejctsModel").show();


                                        console.log(subdata)

                                    },
                                    error: function (error) {
                                        console.log(error)

                                    }
                                });
                            },
                            error: function (error) {
                                console.log(error)

                            }
                        });
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


function isValueInTable(searchValue) {
    var tableRows = $('#vioStudent tbody tr');

    var valueFound = false;

    tableRows.each(function () {
        var cells = $(this).find('td');

        cells.each(function () {
            var cellText = $(this).text();

            // Check if the cell text contains the search value
            if (cellText.includes(searchValue)) {
                valueFound = true;
                return false; // Exit the cells loop
            }
        });

        if (valueFound) {
            return false; // Exit the rows loop
        }
    });

    return valueFound;
}


function deleteRowSuspendList(el) {
    $(el).closest('tr').remove();
}

function addtoSuspendList(st_attempt, st_subjectCode, reg_no, st_academicyear, attemptTime) {
    // alert("ds")
    var html = '<tr>';
    html += '<td style="display:none">' + st_academicyear + '</td>';
    html += '<td>' + reg_no + '</td>';
    html += '<td>' + $("#st_regname").val() + '</td>';
    html += '<td>' + st_attempt + '</td>';
    html += '<td>' + attemptTime + '</td>';
    html += '<td>' + st_subjectCode + '</td>';
    html += '<td><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
    html += '</tr>';
    $('#vioStudent tbody').append(html);
}

function findStudent() {
    $("#st_subjectCode").val("");
    $("#subejctsModel").hide();
    let subSet = "<table class='table table-bordered'><tr><th>Attempt</th><th>Applied Date</th><th>Grade</th><th>Marks</th><th>Examniner 1</th><th>Examniner 2</th><th></th></tr></table>";
    $("#subjectTable").html(subSet);

    let postData = {
        action: "getsingelStudents",
        st_no: $("#st_regNo").val(),
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
                $("#st_regname").val(response[0].studentName);
                $("#st_nic").val(response[0].studentNIC);
                $("#stNameModel").show();
                $("#showSubejctModel").show();
                // $("#attemptModel").show();
            }
        },
        error: function (error) {
            console.log(error)

        }
    });
}


function getSubjectForAttempt() {
    let getSubject = {
        action: "getSubjectExamApplied",
        attempt: $("input[name='selectedAttempt']:checked").val(),
        st_no: $("#st_regNo").val(),
        authcode: authcode,
        username: dataRep['userId']
    };
    $.ajax({
        type: 'POST',
        url: 'rules/subject.php',
        data: getSubject,
        dataType: 'json',
        success: function (responseSub) {
            console.log(responseSub)

            // if (responseSub && responseSub.length > 0 && responseSub[0].status === 200) {
            //     console.log(responseSub);

            //     subjectArr = responseSub;
            //     let sem = "";
            //     let semOption = "";
            //     let endSemOption = "";
            //     let subSet = "<table class='table table-bordered'><tr><td></td><td>Sem</td><td>Subject Code</td><td>Subject Name</td></tr>";
            //     $.each(subjectArr, function (index, subject) {
            //         if (sem != subject.subjectSemester) {
            //             if (subject.subjectSemester == 0) {
            //                 endSemOption = '<input type="checkbox" id="subChangeTabelChk' + subject.subjectSemester + '" style="margin: auto;margin-right: 10px;" onchange="changeSubViolationAdd(' + subject.subjectSemester + ')"><label style="margin-right: 2rem;">End Sem</label>';
            //             } else {
            //                 semOption += '<input type="checkbox"  id="subChangeTabelChk' + subject.subjectSemester + '" style="margin: auto;margin-right: 10px;" onchange="changeSubViolationAdd(' + subject.subjectSemester + ')"><label style="margin-right: 2rem;">' + subject.subjectSemester + ' Sem</label>';
            //             }
            //             sem = subject.subjectSemester;
            //         }
            //         subSet += "<tr class='subTabel" + subject.subjectSemester + "' style='display:none'>";
            //         subSet += '<td><input type="checkbox" id="co' + subject.subjectCode + '" name="co' + subject.subjectCode + '"  style="margin: auto;width: -webkit-fill-available;"></td>';
            //         subSet += "<td>" + subject.subjectSemester + "</td>";
            //         subSet += "<td>" + subject.subjectCode + "</td>";
            //         subSet += "<td class='text-wrap'>" + subject.subjectTitle + "</td>";
            //         subSet += "</tr>";
            //     });
            //     subSet += "</table>";

            //     let ShowSelect = semOption + endSemOption;
            //     let HoldRe = "Hold Results";
            //     let ReleaseRe = "Release Results";
            //     $("#subjectTable").html(ShowSelect + subSet);

            //     $.each(response, function (index, student) {
            //         count++;
            //         // var selectedOptionValue = $(this).val();
            //         var rowNode = SetStudentsViolateExam.row.add([
            //             count,
            //             student.studentName,
            //             student.studentNIC,
            //             student.studentNo,
            //             // '<select id="selectOption' + index + '" name="selectOption' + index + '" class="form-control">'
            //             // + '<option value="0" selected disabled>Select an Option</option>'
            //             // + getSelectOptions(violationOptions) +
            //             // '</select>',

            //             '<button class="btn btn-info" id="hold" style="text-align:center;width:100%" onclick="addNewViolation(' + student.studentNo + ', ' + student.studentNIC + ', ' + HoldRe + ');">Hold</button>',
            //             '<button class="btn btn-danger" id="release" style="text-align:center;width:100%" onclick="addNewViolation(' + student.studentNo + ', ' + student.studentNIC + ', ' + ReleaseRe + ');">Release</button>',
            //             '<button class="btn btn-success" id="history" style="text-align:center;width:100%">Show</button>',
            //         ]).node();
            //         rowNode.classList.add(student.guilty > 0 ? 'has-violations' : 'no-violations');

            //         // Add event listener for the select dropdown
            //         // $(rowNode).find('select').on('change', function () {
            //         //     var selectedOptionValue = $(this).val();
            //         //     addNewViolation(student.studentNo, student.studentNIC, selectedOptionValue);
            //         // });

            //         // Add event listener for the button
            //         $(rowNode).find('#hold').on('click', function () {
            //             addNewViolation(student.studentNo, student.studentNIC, "Hold Results");
            //         });

            //         $(rowNode).find('#release').on('click', function () {
            //             addNewViolation(student.studentNo, student.studentNIC, "Release Results");
            //         });

            //         $(rowNode).find('#history').on('click', function () {
            //             showViolationHistory(student.studentNo, student.studentNIC);
            //         });
            //     });
            //     SetStudentsViolateExam.draw(false);

            // }
        },
        error: function (error) {
            console.log(error)

        }

    });

}



var subjectArr;


function openModel() {
    $('#bosModal').modal('show');
}




var SetStudentsViolateExam;
function DataTableExamViolationForm() {

    $('input[type=radio][name=selectedAttempt]').change(function () {
        getSubjectForAttempt();
        selected_value = $("input[name='selectedAttempt']:checked").val();
        alert(selected_value);
    });
    $('#bosForm').submit(function (e) {
        e.preventDefault();
        holdresult();
    });

    // var buttons = [];

    // SetStudentsViolateExam = $('#dataTableExamViolation').DataTable({
    //     dom: "<'row'<'col-12 text-right' B>>" +
    //         "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" +
    //         "<'row'<'col-12't>>" +
    //         "<'row'<'col-6'i><'col-6'p>>",
    //     buttons: buttons,
    //     columnDefs: [{
    //         targets: 0,
    //         orderable: false,
    //         searchable: false,
    //     },

    //     ],
    //     order: [0, 'asc'],
    // });


}


function formStudentViolationForm(dsp) {
    title = "Temporary suspension of results";
    let str = "";
    if (dsp == "studentViolaionForm") {

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


        str += '<div class="col-md-6" style="margin:auto">';

        str += '<form id="bosForm">';
        str += '<div class="row">';
        str += '<div class="col col-md-12">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Document Number :</label>';
        str += '<input id="docNumber" class="form-control form-control-sm" placeholder="Enter Document Number" required>';
        str += '</div>';
        str += '<div class="col col-md-12">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Request Date :</label>';
        str += '<input id="docDate" class="form-control form-control-sm" type="date" placeholder="Enter Date" required>';
        str += '</div>';

        str += '<div class="col col-md-12">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Reason :</label>';
        str += '<select id="holdReason" class="form-control form-control-sm" required><option value="Exam offence">Exam offence</option><option value="Due Payment">Due Payment</option></select>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col col-md-12">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Note :</label>';
        str += '<textarea id="holdnote" class="form-control form-control-sm" rows="5"></textarea>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col col-md-12">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Document :</label>';
        str += '<input id="docFile" class="form-control" type="file">';
        str += '</div>';
        str += '</div>';
        str += '<br>';

        str += '<div class="row">';
        str += '<div class="col col-md-12">';
        str += '<button type="button" class="btn btn-primary" style="float:right" onclick="openModel()">Add Student</button>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col col-md-12">';
        str += '<br>';

        str += '<table class="table table-bordered" id="vioStudent">';
        str += '<thead>';
        str += '<tr>';
        str += '<th scope="col">Student No</th>';
        str += '<th scope="col">Student Name</th>';
        str += '<th scope="col">Attempt</th>';
        str += '<th scope="col">Attempt Time</th>';
        str += '<th scope="col">Subject Code</th>';
        str += '<th scope="col"></th>';
        str += '</tr>';
        str += '</thead>';
        str += '<tbody>';
        str += '</tbody>';
        str += '</table >';

        str += '</div>';
        str += '<div class="col col-md-12">';
        str += '<div class="col col-md-12">';
        str += '<br>';
        str += '<br>';
        str += '<button type="submit" class="btn btn-primary" style="float:right">Temporary Hold Result</button>';

        str += '</div>';
        str += '</div>';

        str += '</div>';

        str += '</form>';
        str += '</div>';

        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '</div>';
        str += '</div>';
        str += '</div>';



        str += '<div class="modal fade " id="bosModal" tabindex="-1" role="dialog" aria-labelledby="bosModalLabel" aria-hidden="true">';
        str += '<div class="modal-dialog modal-lg" role="document">';
        str += '<div class="modal-content">';
        str += '<div class="modal-header">';
        str += '<h5 class="modal-title" id="bosModalLabel">Find Student</h5>';
        str += '</div>';
        str += '<form id="bosForm2">';
        str += '<div class="modal-body">';


        str += '<div class="row">';

        str += '<div class="col-md-12" style="margin;auto">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;">Enter Student No :</label>';
        str += '<input id="st_regNo" class="form-control form-control-sm" placeholder="" value="" style="display: inline;width: 50%;MARGIN-RIGHT: 10px;">';
        str += '<button type="button" class="btn btn-secondary"onclick="findStudent()">Find Student</button>';
        str += '</div>';

        str += '<div class="col-md-12" style="margin;auto;display:none"  id="stNameModel" >';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;">Student Name :</label>';
        str += '<input id="st_regname" class="form-control form-control-sm" placeholder="" value="" style="display: inline;width: 50%;MARGIN-RIGHT: 10px;" disabled>';
        str += '<input id="st_nic" class="form-control form-control-sm" placeholder="" value="" disabled style="display:none">';
        str += '</div>';

        str += '</div>';

        str += '<div class="row">';

        str += '<div class="col-md-12" style="margin;auto;display:none" id="showSubejctModel">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;">Enter Subject Code :</label>';
        str += '<input id="st_subjectCode" class="form-control form-control-sm" placeholder="" value="" style="display: inline;width: 50%;MARGIN-RIGHT: 10px;">';
        // str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;">Enter Subject Code :</label>';
        // str += '<select class="form-control form-control-sm" id="st_academicYear" style="display: inline;width: 50%;MARGIN-RIGHT: 10px;">';
        // str += setAcademicYearNew();
        // str += '</select>';
        str += '<button type="button" class="btn btn-secondary"onclick="findAppliedExam()">Get Applied List</button>';
        str += '</div>';

        str += '<div class="col-md-12" style="margin;auto;display:none"  id="stNameModel" >';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;">Subject Name :</label>';
        str += '<input id="st_regname" class="form-control form-control-sm" placeholder="" value="" style="display: inline;width: 50%;MARGIN-RIGHT: 10px;" disabled>';
        str += '<input id="st_nic" class="form-control form-control-sm" placeholder="" value="" disabled style="display:none">';
        str += '</div>';

        str += '</div>';


        str += '<div class="row" id="attemptModel" style="display:none">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Attempt :</label>';
        str += '<div class="col col-md-12" id="attempTable">';
        str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-5'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-Repeat<i class='input-helper'></i></label></div></div>";

        str += '</div>';
        str += '</div>';

        str += '<div id="subejctsModel" style="display:none;overflow-x: scroll;">';
        // str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Semester :</label>';
        str += '<div class="row">';
        str += '<div class="col col-md-12" id="subjectTable">';
        str += '</div>';

        str += '</div>';

        str += '</div>';
        str += '</div>';
        str += '<div class="modal-footer">';
        str += '<button type="button" class="btn btn-secondary"onclick="closeModel()">Cancel</button>';
        str += '<button type="submit" id="holdBtn" class="btn btn-primary" value="1">Add</button>';
        str += '</form>';

        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
    }
    return str;
}