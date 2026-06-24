var applicantDTable;
function DataTableForTimeTable() {

    var buttons = [];

    if (!$.fn.DataTable.isDataTable('#applicantTable'))
        applicantDTable = $('#applicantTable').DataTable({
            dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
                "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
                "<'row'<'col-12't>>" + // Table in a single line
                "<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
            buttons: buttons,
            // columnDefs: [{
            //     targets: 0,
            //     orderable: false,
            //     searchable: false,
            //     className: 'selectall-checkbox',
            // },
            // {
            // 	targets: 1,
            // 	orderable: false,
            // 	searchable: false
            // },
            // ],
            // select: {
            //     style: 'multi',
            //     selector: 'td:first-child',
            // },
            order: [4, 'desc'],
        });




}

var currentdate = "";
var datetime = "";
var TempUser = "";





function formAddViewTimeTable(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    if (dsp == "formAddViewTimeTable") {
        title = "Add Timetable";
    } else if (dsp == "formPrintAdmission") {
        title = "Examination Admission Card";
    }

    if (dsp == "formAddViewTimeTable" || dsp == "formPrintAdmission") {
        str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
        str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
        str += '<ul class="navbar-nav mr-lg-2">';
        str += '<li class="nav-item ml-0">';
        str += '<h4 class="mb-0">' + title + '</h4>';
        str += '</li></ul></div></nav>';
        if (dsp == "formAddViewTimeTable") {

            str += "<div id='updateApplicantList'>";

            str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
            str += '<div class="card">';
            str += '<div class="card-body">';
            str += '<div class="row">';
            str += '<div class="col-sm-6 ">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="">Degree</label></div>';
            str += '<div class="col-sm-6" style="display: inline-flex;">';
            str += '<select class="form-control form-control-sm" id="selectedDegreeName">';
            str += '</select>';
            str += '</div></div>';
            str += '<div class="col-sm-6 ">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Academic Year</label></div>';
            str += '<div class="col-sm-6" style="display: inline-flex;">';
            str += '<select class="form-control form-control-sm" id="selectedAcademicYear">';
            str += setAcademicYearNew();
            str += '</select>';
            str += '</div></div>';
            str += '<div class="col-sm-6 ">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Attempt</label></div>';
            str += '<div class="col-sm-6" style="display: inline-flex;">';
            str += "<div class='form-check' style='margin-right: 10px;'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='attemptTimeChange(1);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div>";
            str += "<div class='form-check' style='margin-right: 10px;'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='attemptTimeChange(2);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div>";
            str += "<div class='form-check' style=''> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='attemptTimeChange(3);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-Repeat<i class='input-helper'></i></label></div>";
            str += '</div></div>';

            str += '<div class="col-sm-6 " id="attmeptTime" style="display:none">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Attempt Time</label></div>';
            str += '<div class="col-sm-6" style="display: inline-flex;">';
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

            str += '<div class="row">';
            str += '<div class="col-xl-6 col-lg-6 col-md-12">'
            str += '<div class="col-xl-3 col-lg-3 col-md-12" style="display: inline-flex;"><label for="exampleInputEmail2" class="">Semester </label></div>';
            str += '<div class="col-xl-8 col-lg-8 col-md-12" style="display: inline-flex;">';
            str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='checkbox' id='Upsem1' class='form-check-input' name='uploadSemester' value='1' >1<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='checkbox' id='Upsem2' class='form-check-input' name='uploadSemester' value='2' >2<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='checkbox' id='Upsem3' class='form-check-input' name='uploadSemester' value='3' >3<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='checkbox' id='Upsem4' class='form-check-input' name='uploadSemester' value='4' >4<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='checkbox' id='Upsem0' class='form-check-input' name='uploadSemester' value='0' >All<i class='input-helper'></i></label></div></div>";
            str += '</div>';
            str += '</div>';
            str += '</div>';

            str += '<div class="row">';
            str += '<div class="col-sm-6">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="">Starting Data</label></div>';
            str += '<div class="col-sm-6" style="display: inline-flex;">';
            str += '<input type="date" class="form-control form-control-sm" id="startingDate">';
            str += '</div></div>';
            str += '<div class="col-sm-6">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Closing Date</label></div>';
            str += '<div class="col-sm-6" style="display: inline-flex;">';
            str += '<input type="date" class="form-control form-control-sm" id="closingDate">';
            str += '</div></div>';

            str += '<div class="col-sm-6">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Amount</label></div>';
            str += '<div class="col-sm-6" style="display: inline-flex;">';
            str += '<input type="number" class="form-control form-control-sm" id="examAmounToComplte" placeholder="713000">';
            str += '</div></div>';
            str += '</div>';



            str += '<div class="row">';
            str += '<div class="col-sm-6">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="">Exam Year</label></div>';
            str += '<div class="col-sm-6" style="display: inline-flex;">';
            str += '<input type="text" class="form-control form-control-sm" id="examYear" placeholder="2024/2025">';
            str += '</div></div>';
            str += '<div class="col-sm-6">';
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Exam Month</label></div>';
            str += '<div class="col-sm-6" style="display: inline-flex;">';
            str += '<input type="text" class="form-control form-control-sm" id="examMonth" placeholder="August/September">';
            str += '</div></div>';





            str += '</div><br>';


            str += '<div class="col-sm-12">';
            str += '<div class="col-sm-12" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r"><b>Timetable Subjects</b></label></div>';
            str += '<div class="col-sm-12" style="display: inline-flex;">';
            str += '<table class="table table-bordered">';
            str += '<thead><tr>';
            str += '<th style="vertical-align: middle;width:10%">Subject Code</th>';
            str += '<th style="vertical-align: middle;width:30%">Subject Title</th>';
            str += '<th style="vertical-align: middle;width:5%">Semester</th>';
            str += '<th style="vertical-align: middle;width:10%">Exam Date</th>';
            str += '<th style="vertical-align: middle;width:10%">Start Time</th>';
            str += '<th style="vertical-align: middle;width:10%">End Time</th>';
            str += '<th style="vertical-align: middle;width:20%">Hall No</th>';
            str += '<th style="vertical-align: middle;width:20%">Exam Fee per Paper</th>';
            str += '<th style="text-align: center;"><button class="btn btn-success" onclick="addSubjectForTimeTable()">Add New</button></th>';
            str += '</tr></thead>';
            str += '<tbody id="subjectTable">';

            str += '</tbody>';
            str += '</table>';
            str += '</div>';


            str += '</div>';

            // str += '</div>';
            str += '<br><br>';

            str += '<div class="row">';
            str += '<div class="col-sm-12" style="display: inline-flex;">';
            str += '<div class="col-sm-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="createTimeTableForBatch();" value="1" id="createSubjectBtn">Create Timetable</button></div>';
            str += '</div>';
            str += '</div>';
            str += '</div>';


            str += '</div></div>';
            str += '</div></div></div>';
        }

        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="applicantTable">';
        str += '<thead><tr>';
        str += '<th>Degree Title</th>';
        str += '<th>Degree Code</th>';
        str += '<th>Year</th>';
        str += '<th>Semester</th>';
        str += '<th>Closing Date</th>';
        str += '<th>Amount</th>';
        str += '<th>Attempt</th>';
        str += '<th>Attempt Time</th>';
        if (dsp == "formAddViewTimeTable") {
            str += '<th></th>';
            str += '<th></th>';
        }
        str += '<th></th>';
        if (dsp == "formAddViewTimeTable") {
            str += '<th></th>';
        }
        if (dsp == "formPrintAdmission") {

            str += '<th></th>';

        }
        str += '</tr></thead>';
        str += '<tbody id="batchTable">';
        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<datalist id="subjectcode">';
        str += '</datalist>';


    }

    return str;
}




function attemptTimeChange(atmp) {
    if (atmp != 3) {
        $('#attmeptTime').hide();
    } else {
        $('#attmeptTime').show();
    }
}

function addSubjectForTimeTable() {

    const radioButtons = document.getElementsByName('selectedAttempt');
    let selectedValue = null;

    for (const radio of radioButtons) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }


    if ($("#selectedDegreeName option:selected").val() == 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Degree Required.',
            text: "Please select degree before add subject",
        });
    } else if ($("#selectedAcademicYear option:selected").val() == 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Academic Year Required.',
            text: "Please select academic year before add subject",
        });
    } else if (!selectedValue) {
        Swal.fire({
            icon: 'warning',
            title: 'Attempt Required.',
            text: "Please select Attempt before add subject",
        });
    } else {

        let postData = {
            action: "getAllSubjectforBatch",
            degreeCode: $("#selectedDegreeName option:selected").val(),
            academicYear: $("#selectedAcademicYear option:selected").val(),
            authcode: authcode,
            username: dataRep['userId'],
        };

        $.ajax({
            type: 'POST',
            url: 'rules/subject.php',
            data: postData,
            dataType: 'json',
            success: function (response) {
                $('#subjectcode').empty();
                subejctArray.length = 0;
                if (response && response.length > 0) {
                    let count = 0;
                    let subjectshow = "<option value='0'>Select Paper Code</option>";

                    $.each(response, function (index, subject) {
                        if (subject.subjectCode != "") {
                            subejctArray[count] = [subject.subjectCode, subject.subjectTitle, subject.sstatus, subject.credits, subject.subjectSemester];
                            $('#subjectcode').append("<option value='" + subject.subjectCode + "'>" + subject.subjectCode + "</option>");
                            subjectshow = subjectshow + "<option value='" + subject.subjectCode + "'>" + subject.subjectCode + "</option>";
                            count++;
                        }
                    });

                    $('#selectedDegreeName').prop('disabled', true);
                    $('#selectedAcademicYear').prop('disabled', true);
                    $('#selectedAttemptTime').prop('disabled', true);
                    $("input[name=selectedAttempt]").prop('disabled', true);

                    let incomeCatOption = "<select class='form-control'><option value='0'> Select income category </option> ";
                    $.each(incomeCatArray, function (index, incomeCat) {
                        incomeCatOption += "<option value='" + incomeCat[0] + "'>" + incomeCat[1] + "</option>";
                    });
                    incomeCatOption += "</select>";

                    let sem = "<select class='form-control' ><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='0'>End</option></select>"
                    let optional = "<select class='form-control' ><option value='c'>Compulsory</option><option value='o'>Optional</option></select>";

                    let subjectselect = "<select class='form-control' onchange='handleSubjectCodeChangeTimTable(this)'>" + subjectshow + "</select>";

                    let tableappend = "<tr>";
                    // tableappend += "<td><input type=text placeholde='enter amount' class='form-control' list='subjectcode' onblur='handleSubjectCodeChangeTimTable(this)'></td>";
                    tableappend += "<td>" + subjectselect + "</td>";

                    tableappend += "<td><input type=text placeholde='enter amount' class='form-control'></td>";
                    tableappend += "<td>" + sem + "</td>";

                    tableappend += '<td><input type="date" class="form-control form-control-sm" id="startingDate1"></td>';
                    tableappend += '<td><input type="time" class="form-control form-control-sm" id="startingDate2"></td>';
                    tableappend += '<td><input type="time" class="form-control form-control-sm" id="startingDate3"></td>';
                    tableappend += '<td><input type="text" class="form-control form-control-sm" id="startingDate4"></td>';
                    if (dataRep['selectedAttempt'] == "F") {
                        tableappend += '<td><input type="number" class="form-control form-control-sm" id="examfee" value=0></td>';
                    } else {
                        tableappend += '<td><input type="number" class="form-control form-control-sm" id="examfee" value=1500></td>';

                    }

                    tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                    tableappend += "</tr>";

                    $('#subjectTable').append(tableappend);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Subjects not fount',
                        text: "For selected degree and academic year subjects are not availble. please add subjects for selected batch and try again.",
                    });
                }
            },
            error: function (error) {
                console.log(error)
            }
        });


    }

}

function handleSubjectCodeChangeTimTable(inputElement) {
    var row = $(inputElement).closest('tr');
    var subjectTitleInput = row.find('td:nth-child(2) input');
    var semesterSelect = row.find('td:nth-child(3) select');
    if (!semesterSelect) {
        semesterSelect = row.find('td:nth-child(3) input');
    }
    // var optionalCompulsorySelect = row.find('td:nth-child(4) select');
    // var creditInput = row.find('td:nth-child(5) input');

    var updatedSubjectCode = $(inputElement).val();

    subejctArray.forEach(subject => {
        if (subject[0] == updatedSubjectCode) {
            //check whether exam alreay held
            let atemptTime = 1;
            if ($('input[name="selectedAttempt"]:checked').val() == "RR") {
                atemptTime = $("#selectedAttemptTime option:selected").val()
            }

            let postData = {
                action: "checkAlreadyExamHeld",
                degreeCode: $("#selectedDegreeName option:selected").val(),
                academicYear: $("#selectedAcademicYear option:selected").val(),
                attempt: $('input[name="selectedAttempt"]:checked').val(),
                subjectCode: subject[0],
                atemptTime: atemptTime,
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/subject.php',
                data: postData,
                dataType: 'json',
                success: function (response) {
                    console.log(response);
                    console.log(response.rows);
                    if (response.rows == 0) {
                        subjectTitleInput.val(subject[1]);
                        semesterSelect.val(subject[4]);
                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Cannot add the selected subject',
                            text: "The subject and attempt you are trying to add have already been conducted.",
                        }).then(() => {
                            // clear and reset input to prevent selection
                            $(inputElement).val('');
                            subjectTitleInput.val('');
                            semesterSelect.val('');
                            $(inputElement).focus();
                        });
                    }
                },
                error: function (error) {
                    console.log(error)
                }
            });



            return;
        }

    });

}


var subejctArray = new Array();
function getSubejctsinTimeTable() {
    let postData = {
        action: "getAllSubject",
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/subject.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#subjectcode').empty();
            subejctArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, subject) {
                    if (subject.subjectCode != "") {
                        subejctArray[count] = [subject.subjectCode, subject.subjectTitle, subject.sstatus, subject.credits, subject.subjectSemester];
                        $('#subjectcode').append("<option value='" + subject.subjectCode + "'>" + subject.subjectCode + "</option>");
                        count++;
                    }
                });

            }
        },
        error: function (error) {
            console.log(error)
        }
    });
}



function createTimeTableForBatch() {

    if ($('#createSubjectBtn').val() == 1) {
        if ($("#selectedDegreeName option:selected").val() == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Degree Required.',
                text: "Please select degree before create batch",
            });
        } else if ($("#selectedAcademicYear option:selected").val() == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Academic Year Required.',
                text: "Please select academic year before create batch",
            });
        } else {

            var dataToSend = [];
            let somesubjectmissing = false;
            let atemptTime = 1;
            if ($('input[name="selectedAttempt"]:checked').val() == "RR") {
                atemptTime = $("#selectedAttemptTime option:selected").val()
            }

            $("#subjectTable tr").each(function (index, row) {
                var subjectCodeInput = $(row).find("td:nth-child(1) select").val();
                if (!subjectCodeInput) {
                    subjectCodeInput = $(row).find("td:nth-child(1) input").val();
                }
                var subjectTitleInput = $(row).find("td:nth-child(2) input").val();
                var semesterSelect = $(row).find('td:nth-child(3) select').val();
                if (!semesterSelect) {
                    semesterSelect = $(row).find('td:nth-child(3) input').val();
                }
                var examDateInput = $(row).find('td:nth-child(4) input').val();
                var startTimeInput = $(row).find('td:nth-child(5) input').val();
                var endTimeInput = $(row).find('td:nth-child(6) input').val();
                var HallNoInput = $(row).find('td:nth-child(7) input').val();
                var examPaperFee = $(row).find('td:nth-child(8) input').val();
                console.log(subjectCodeInput)

                if (subjectCodeInput == "" || subjectTitleInput == "" || examDateInput == "" || startTimeInput == "" || endTimeInput == "" || HallNoInput == "") {
                    somesubjectmissing = true;
                }

                dataToSend.push({
                    degreeCode: $("#selectedDegreeName option:selected").val(),
                    academicYear: $("#selectedAcademicYear option:selected").val(),
                    startdate: $("#startingDate").val(),
                    enddate: $("#closingDate").val(),
                    subjectCode: subjectCodeInput,
                    examdate: examDateInput,
                    starttime: startTimeInput,
                    endtime: endTimeInput,
                    hallno: HallNoInput,
                    examPaperFee: examPaperFee,
                    semester: semesterSelect,
                    exam_year: $("#examYear").val(),
                    exam_month: $("#examMonth").val(),
                    re_repeat_attempt_time: atemptTime,
                });

            });

            if (dataToSend.length == 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'At least 1 subject are required.',
                    text: "Please enter at least 1 subject before add the subejcts for batch",
                });
            } else if (somesubjectmissing) {
                Swal.fire({
                    icon: 'warning',
                    title: 'subject details are missing.',
                    text: "You have missed to enter a some data. Please check again",
                });
            } else {


                let attempt = "";
                if ($('input[name="selectedAttempt"]:checked').val() == "F") {
                    attempt = "First";
                } else if ($('input[name="selectedAttempt"]:checked').val() == "R") {
                    attempt = "Repeat";
                } else if ($('input[name="selectedAttempt"]:checked').val() == "RR") {
                    attempt = "Re-Repeat";
                }
                let semesterData = "";
                document.querySelectorAll('input[name="uploadSemester"]:checked').forEach((checkbox) => {
                    if (semesterData != "") {
                        semesterData += ",";
                    }
                    semesterData += (checkbox.value);
                });

                var postData = {
                    action: "CreateTimeTable",
                    degreeCode: $("#selectedDegreeName option:selected").val(),
                    academicYear: $("#selectedAcademicYear option:selected").val(),
                    semester: semesterData,
                    closingdate: $("#closingDate").val(),
                    startdate: $("#startingDate").val(),
                    amount: $("#examAmounToComplte").val(),
                    attempt: attempt,
                    exam_year: $("#examYear").val(),
                    exam_month: $("#examMonth").val(),
                    attempt_time: atemptTime,
                    timeTable: dataToSend,
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                $.ajax({
                    type: 'POST',
                    url: 'rules/timetable.php', // Replace with your server-side script URL
                    data: postData,
                    dataType: 'json',
                    success: function (response) {
                        console.log(response)
                        if (response.status == 200 || response.status == 201) {
                            if (response.status == 200) {
                                Swal.fire({
                                    title: "Created!",
                                    text: "Timetable has been created.",
                                    icon: "success"
                                });
                            } else {
                                Swal.fire({
                                    title: "Warning!",
                                    html: response.message,
                                    icon: "warning"
                                });
                            }
                            showMenu('formAddViewTimeTable');
                            setDegrees();
                            getSubejctsinTimeTable();
                            setTableForTimeTable(1);

                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Updated Failed',
                                text: response.message,
                            });
                        }
                    },
                    error: function (error) {
                        console.log(error)
                        Swal.fire({
                            icon: 'error',
                            title: 'Updated Failed',
                            text: error.responseText,
                        });
                    }
                });

            }




        }
    } else if ($('#createSubjectBtn').val() == 2) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                $('#selectedDegreeName').prop('disabled', false);
                $('#selectedAcademicYear').prop('disabled', false);
                $('#selectedAttemptTime').prop('disabled', false);
                $("input[name=selectedAttempt]").prop('disabled', false);
                $('input[name="uploadSemester"]').prop('disabled', false);


                if ($("#selectedDegreeName option:selected").val() == 0) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Degree Required.',
                        text: "Please select degree before create batch",
                    });
                } else if ($("#selectedAcademicYear option:selected").val() == 0) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Academic Year Required.',
                        text: "Please select academic year before create batch",
                    });
                } else {
                    var postData = {
                        action: "deleteAllSubSubDegree",
                        degreeCode: $("#selectedDegreeName option:selected").val(),
                        academicYear: $("#selectedAcademicYear option:selected").val(),
                    };

                    let semesterDataDelete = "";
                    document.querySelectorAll('input[name="uploadSemester"]:checked').forEach((checkbox) => {
                        if (semesterDataDelete != "") {
                            semesterDataDelete += ",";
                        }
                        semesterDataDelete += (checkbox.value);
                    });

                    let attemptDataDelete = "";
                    if ($('input[name="selectedAttempt"]:checked').val() == "F") {
                        attemptDataDelete = "First";
                    } else if ($('input[name="selectedAttempt"]:checked').val() == "R") {
                        attemptDataDelete = "Repeat";
                    } else if ($('input[name="selectedAttempt"]:checked').val() == "RR") {
                        attemptDataDelete = "Re-Repeat";
                    }

                    let atemptTimeDelete = 1;
                    if ($('input[name="selectedAttempt"]:checked').val() == "RR") {
                        atemptTimeDelete = $("#selectedAttemptTime option:selected").val()
                    }


                    // var postData = {
                    //     action: "deleteAllDataTimeTable",
                    //     degreeCode: $("#selectedDegreeName option:selected").val(),
                    //     academicYear: $("#selectedAcademicYear option:selected").val(),
                    //     semester: semesterDataDelete,
                    //     attempt: attemptDataDelete,
                    //     attempt_time: atemptTimeDelete,
                    // };

                    // $.ajax({
                    //     type: 'POST',
                    //     url: 'rules/timetable.php',
                    //     data: postData,
                    //     dataType: 'json',
                    //     success: function (response) {
                    //         if (response.status == 200) {

                    var dataToSend = [];
                    let somesubjectmissing = false;
                    let atemptTime = 1;
                    if ($('input[name="selectedAttempt"]:checked').val() == "RR") {
                        atemptTime = $("#selectedAttemptTime option:selected").val()
                    }

                    $("#subjectTable tr").each(function (index, row) {
                        var subjectCodeInput = $(row).find("td:nth-child(1) select").val();
                        if (!subjectCodeInput) {
                            subjectCodeInput = $(row).find("td:nth-child(1) input").val();
                        }
                        var subjectTitleInput = $(row).find("td:nth-child(2) input").val();
                        var semesterSelect = $(row).find('td:nth-child(3) select').val();
                        if (!semesterSelect) {
                            semesterSelect = $(row).find('td:nth-child(3) input').val();
                        }
                        var examDateInput = $(row).find('td:nth-child(4) input').val();
                        var startTimeInput = $(row).find('td:nth-child(5) input').val();
                        var endTimeInput = $(row).find('td:nth-child(6) input').val();
                        var HallNoInput = $(row).find('td:nth-child(7) input').val();
                        var examPaperFee = $(row).find('td:nth-child(8) input').val();


                        if (subjectCodeInput == "" || subjectTitleInput == "" || examDateInput == "" || startTimeInput == "" || endTimeInput == "" || HallNoInput == "") {
                            somesubjectmissing = true;
                        }

                        dataToSend.push({
                            degreeCode: $("#selectedDegreeName option:selected").val(),
                            academicYear: $("#selectedAcademicYear option:selected").val(),
                            startdate: $("#startingDate").val(),
                            enddate: $("#closingDate").val(),
                            subjectCode: subjectCodeInput,
                            examdate: examDateInput,
                            starttime: startTimeInput,
                            endtime: endTimeInput,
                            hallno: HallNoInput,
                            semester: semesterSelect,
                            exam_year: $("#examYear").val(),
                            exam_month: $("#examMonth").val(),
                            re_repeat_attempt_time: atemptTime,
                            examPaperFee: examPaperFee,

                        });

                    });

                    if (dataToSend.length == 0) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'At least 1 subject are required.',
                            text: "Please enter at least 1 subject before add the subejcts for batch",
                        });
                    } else if (somesubjectmissing) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'subject details are missing.',
                            text: "You have missed to enter a some data. Please check again",
                        });
                    } else {


                        let attempt = "";
                        if ($('input[name="selectedAttempt"]:checked').val() == "F") {
                            attempt = "First";
                        } else if ($('input[name="selectedAttempt"]:checked').val() == "R") {
                            attempt = "Repeat";
                        } else if ($('input[name="selectedAttempt"]:checked').val() == "RR") {
                            attempt = "Re-Repeat";
                        }
                        let semesterData = "";
                        document.querySelectorAll('input[name="uploadSemester"]:checked').forEach((checkbox) => {
                            if (semesterData != "") {
                                semesterData += ",";
                            }
                            semesterData += (checkbox.value);
                        });

                        var postData = {
                            action: "UpdateTimeTable",
                            degreeCode: $("#selectedDegreeName option:selected").val(),
                            academicYear: $("#selectedAcademicYear option:selected").val(),
                            semester: semesterData,
                            closingdate: $("#closingDate").val(),
                            startdate: $("#startingDate").val(),
                            amount: $("#examAmounToComplte").val(),
                            attempt: attempt,
                            exam_year: $("#examYear").val(),
                            exam_month: $("#examMonth").val(),
                            attempt_time: atemptTime,
                            timeTable: dataToSend,
                            examref_no: dataRep['examref_no'],
                            authcode: authcode,
                            username: dataRep['userId'],

                        };

                        $.ajax({
                            type: 'POST',
                            url: 'rules/timetable.php', // Replace with your server-side script URL
                            data: postData,
                            dataType: 'json',
                            success: function (response) {
                                console.log(response)
                                if (response.status == 200 || response.status == 201) {
                                    if (response.status == 200) {
                                        Swal.fire({
                                            title: "Updated!",
                                            text: "Timetable has been updated.",
                                            icon: "success"
                                        });
                                    } else {
                                        Swal.fire({
                                            title: "Warning!",
                                            html: response.message,
                                            icon: "warning"
                                        });
                                    }
                                    showMenu('formAddViewTimeTable');
                                    setDegrees();
                                    getSubejctsinTimeTable();
                                    setTableForTimeTable(1);

                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Updated Failed 5',
                                        text: response.message,
                                    });
                                }
                            },
                            error: function (error) {
                                console.log(error)
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Updated Failed 4',
                                    text: error.responseText,
                                });
                            }
                        });

                    }






                    // } else {
                    //     Swal.fire({
                    //         icon: 'error',
                    //         title: 'Updated Failed 43',
                    //         text: response.message,
                    //     });
                    // }
                    // },
                    // error: function (error) {
                    //     Swal.fire({
                    //         icon: 'error',
                    //         title: 'Updated Failed 32',
                    //         text: error.responseText,
                    //     });
                    // }
                    // });

                }



            }
        });
    }

}
var batchArray = new Array();
//statusView 1 = formAddViewTimeTable
//statusView 2 = formPrintAdmission
function setTableForTimeTable(statusView) {

    let degreeOption = "";
    let postData = {
        action: "getTimeTableBatchWise",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/timetable.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#batchTable').empty();
            batchArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;

                let postData = {
                    action: "getDegrees",
                    authcode: authcode,
                    username: dataRep['userId'],
                };
                $.ajax({
                    type: 'POST',
                    url: 'rules/degree.php',
                    data: postData,
                    dataType: 'json',
                    success: function (response2) {
                        if (response2 && response2.length > 0) {


                            let facCode = "";
                            let facTitle = "";
                            degreeOption = "";

                            degreeCodeLength = 0;
                            let departmentCodeappArr = new Array();
                            let degreeCodappeArr = new Array();
                            let programmeCodeappeArr = new Array();
                            let degreeTitle1Arr = new Array();


                            let programmeArray = programmeCode.split(',');

                            $.each(response2, function (index, degree) {
                                if (programmeCode != "") {
                                    if (programmeArray.includes(degree.degreeCode)) {
                                        departmentCodeappArr[degreeCodeLength] = degree.departmentCode;
                                        degreeCodappeArr[degreeCodeLength] = degree.degreeCode;
                                        programmeCodeappeArr[degreeCodeLength] = degree.programmeCode;
                                        degreeTitle1Arr[degreeCodeLength] = degree.degreeTitle;
                                        degreeCodeLength++;
                                    }
                                } else if (departmentCode != "") {
                                    if (degree.departmentCode == departmentCode) {
                                        departmentCodeappArr[degreeCodeLength] = degree.departmentCode;
                                        degreeCodappeArr[degreeCodeLength] = degree.degreeCode;
                                        programmeCodeappeArr[degreeCodeLength] = degree.programmeCode;
                                        degreeTitle1Arr[degreeCodeLength] = degree.degreeTitle;
                                        degreeCodeLength++;
                                    }
                                } else if (facultyCode != "") {
                                    if (degree.facultyCode == facultyCode) {
                                        departmentCodeappArr[degreeCodeLength] = degree.departmentCode;
                                        degreeCodappeArr[degreeCodeLength] = degree.degreeCode;
                                        programmeCodeappeArr[degreeCodeLength] = degree.programmeCode;
                                        degreeTitle1Arr[degreeCodeLength] = degree.degreeTitle;
                                        degreeCodeLength++;
                                    }
                                } else {
                                    departmentCodeappArr[degreeCodeLength] = degree.departmentCode;
                                    degreeCodappeArr[degreeCodeLength] = degree.degreeCode;
                                    programmeCodeappeArr[degreeCodeLength] = degree.programmeCode;
                                    degreeTitle1Arr[degreeCodeLength] = degree.degreeTitle;
                                    degreeCodeLength++;
                                }



                            });


                            $.each(response, function (index, batches) {
                                if (batches.departmentCode != "") {

                                    batchArray[count] = [
                                        batches.degreeCode,
                                        batches.academicYear,
                                        batches.semester,
                                        batches.attempt,
                                        batches.attempt_time,
                                        batches.startdate,
                                        batches.closingdate,
                                        batches.amount,
                                        batches.exam_year,
                                        batches.exam_month,
                                        batches.degreeTitle,
                                        batches.examref_no,
                                    ];

                                    if (degreeCodappeArr.includes(batches.degreeCode)) {

                                        let closingDate = new Date(batches.closingdate);
                                        let today = new Date();

                                        // Calculate closingdate - 14 days
                                        let minus14 = new Date(closingDate);
                                        minus14.setDate(closingDate.getDate() - 14);

                                        // Calculate closingdate + 30 days
                                        let plus30 = new Date(closingDate);
                                        plus30.setDate(closingDate.getDate() + 30);
                                        let backcolor = "#fff";
                                        if (minus14 < today && plus30 > today) {
                                            backcolor = "#f3b0b6"
                                        }

                                        let department = "";
                                        department += "<tr  style='background-color:" + backcolor + ";'>";
                                        department += "<td >" + batches.degreeTitle + "</td>";
                                        department += "<td >" + batches.degreeCode + "</td>";
                                        department += "<td >" + batches.academicYear + "</td>";
                                        department += "<td >" + batches.semester + "</td>";
                                        department += "<td >" + batches.closingdate + "</td>";
                                        department += "<td >" + batches.amount + "</td>";
                                        department += "<td >" + batches.attempt + "</td>";
                                        department += "<td >" + batches.attempt_time + "</td>";
                                        if (statusView == 1) {
                                            department += "<td width='5%' ><button class='btn btn-warning  btn-sm' style='color:#fff' onclick=copyBatchTimeTable('" + count + "')>Copy Subject</button></td>";
                                            department += "<td width='5%' ><button class='btn btn-warning  btn-sm' style='color:#fff' onclick=updateBatchTimeTable('" + count + "','" + batches.examref_no + "')>Update</button></td>";
                                        }
                                        department += "<td width='5%' '><button class='btn btn-success btn-sm' style='color:#fff'  onclick=viewTimeTableForBatch('" + count + "','" + statusView + "')>View Timetable</button></td>";
                                        if (statusView == 1) {
                                            department += "<td width='5%' '><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteAllTimeTableSubejct('" + count + "')>Delete All</button></td>";
                                        }
                                        if (statusView == 2) {
                                            let diseble;
                                            if (dataRep["roleName"] == "Administrator" || dataRep["roleName"] == "FGS Deputy Registrar" || dataRep["roleName"] == "Subject Clerk") {
                                                diseble = "";

                                            } else {
                                                diseble = "disabled";

                                            }
                                            department += "<td width='5%' '><button class='btn btn-secondary btn-sm' style='color:#fff' " + diseble + "  onclick=viewAdmissionlist2('" + count + "')>Print Admission</button></td>";
                                        }
                                        department += "</tr>";
                                        $('#batchTable').append(department);

                                    }
                                    count++;
                                }
                            });



                            DataTableForTimeTable();
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

var timeTableArray = new Array();

function viewTimeTableForBatch(i, statusView) {

    var postData = {
        action: "getTimeTableSpecificBatchWithRefno",
        degreeCode: batchArray[i][0],
        academicYear: batchArray[i][1],
        semester: batchArray[i][2],
        attempt: batchArray[i][3],
        attempt_time: batchArray[i][4],
        ref_no: batchArray[i][11],
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/timetable.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            if (response[0].status == 200) {
                let timetabledata = "";
                timeTableArray.length = 0;
                let count = 0;
                response.forEach(timetable => {
                    timeTableArray[count] = [timetable.degreeCode, timetable.academicYear, timetable.subjectCode, timetable.re_repeat_attempt_time];
                    timetabledata += "<tr>";
                    timetabledata += "<td>" + timetable.subjectCode + "</td>";

                    timetabledata += "<td>" + timetable.subjectTitle + "</td>";

                    let subjectSemester = "";
                    if (timetable.timeSem == "0") {
                        subjectSemester = "End";
                    } else {
                        subjectSemester = timetable.timeSem;
                    }


                    timetabledata += "<td style='text-align:center'>" + subjectSemester + "</td>";
                    timetabledata += "<td>" + timetable.examdate + "</td>";
                    timetabledata += "<td style='text-align:center'>" + timetable.starttime + "</td>";
                    timetabledata += "<td style='text-align:center'>" + timetable.endtime + "</td>";
                    timetabledata += "<td style='text-align:center'>" + timetable.hallno + "</td>";
                    if (batchArray[i][3] != "First") {
                        timetabledata += "<td style='text-align:center'>" + timetable.paper_fee + "</td>";
                    }
                    if (statusView == 1) {
                        timetabledata += "<td style='text-align:center' width='5%'><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteIndividualSubject('" + count + "','" + i + "','" + statusView + "')>Delete</button></td>";
                    }
                    timetabledata += "</tr>";
                    count++;

                });

                let theadDelete = "";
                if (statusView == 1) {
                    theadDelete = '<th style="vertical-align: middle;width:10%"></th>';
                }
                let textExamFee = "";
                if (batchArray[i][3] != "First") {
                    textExamFee = '<th style="vertical-align: middle;width:10%">Exam Fee per paper</th>';
                }
                Swal.fire({
                    title: 'Subjects',
                    html:
                        '<table class="table table-bordered">' +
                        '<thead><tr>' +
                        '<th style="vertical-align: middle;width:15%">Subject Code</th>' +
                        '<th style="vertical-align: middle;width:35%">Subject Title</th>' +
                        '<th style="vertical-align: middle;width:5%">Semester</th>' +
                        '<th style="vertical-align: middle;width:10%">Exam Date</th>' +
                        '<th style="vertical-align: middle;width:10%">Start Time</th>' +
                        '<th style="vertical-align: middle;width:10%">End Time</th>' +
                        '<th style="vertical-align: middle;width:10%">Hall No</th>' +
                        textExamFee +
                        theadDelete +
                        '</tr></thead>' +
                        '<tbody>' +
                        timetabledata +
                        '</tbody>' +
                        '</table>',
                    customClass: 'swal-wide'
                });



            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Timetable Not Available',
                    text: 'Timetable Not Available',
                });
            }
        },
        error: function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid',
                text: error.responseText,
            });
        }
    });

}

function deleteIndividualSubject(sub_location, degreelocation, statusView) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            var postData = {
                action: "deleteIndividualTimeTableSub",
                degreeCode: timeTableArray[sub_location][0],
                academicYear: timeTableArray[sub_location][1],
                subjectCode: timeTableArray[sub_location][2],
                re_repeat_attempt_time: timeTableArray[sub_location][3],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/timetable.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    viewTimeTableForBatch(degreelocation, statusView);
                }
            });
        } else {
            viewTimeTableForBatch(degreelocation, statusView);
        }

    });
}


function deleteAllTimeTableSubejct(i) {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            var postData = {
                action: "deleteAllDataTimeTable",
                degreeCode: batchArray[i][0],
                academicYear: batchArray[i][1],
                semester: batchArray[i][2],
                attempt: batchArray[i][3],
                attempt_time: batchArray[i][4],
                ref_no: batchArray[i][11],
                authcode: authcode,
                username: dataRep['userId'],

            };

            $.ajax({
                type: 'POST',
                url: 'rules/timetable.php',
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Subjects has been deleted.",
                            icon: "success"
                        });
                        showMenu('formAddViewTimeTable');
                        setDegrees();
                        getSubejctsinTimeTable();
                        setTableForTimeTable(1);

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Updated Failed',
                            text: response.message,
                        });
                    }
                },
                error: function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Updated Failed',
                        text: error.responseText,
                    });
                }
            });

        }
    });
}

function copyBatchTimeTable(i) {
    let postData = {
        action: "getTimeTableSpecificBatchWithRefno",
        degreeCode: batchArray[i][0],
        academicYear: batchArray[i][1],
        semester: batchArray[i][2],
        attempt: batchArray[i][3],
        attempt_time: batchArray[i][4],
        ref_no: batchArray[i][11],
        authcode: authcode,
        username: dataRep['userId'],

    };

    $.ajax({
        type: 'POST',
        url: 'rules/timetable.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            if (response[0].status == 200) {
                let subjectdata = "";
                subjectArray.length = 0;
                let count = 0;
                $('#subjectTable').empty();
                $.each(response, function (index, subject) {

                    let sem = "<select class='form-control'>";

                    if (subject.timeSem == "1") {
                        sem += "<option value='1' selected>1</option>";
                    } else {
                        sem += "<option value='1'>1</option>";
                    }

                    if (subject.timeSem == "2") {
                        sem += "<option value='2' selected>2</option>";
                    } else {
                        sem += "<option value='2'>2</option>";
                    }


                    if (subject.timeSem == "3") {
                        sem += "<option value='3' selected>3</option>";
                    } else {
                        sem += "<option value='3'>3</option>";
                    }


                    if (subject.timeSem == "4") {
                        sem += "<option value='4' selected>4</option>";
                    } else {
                        sem += "<option value='4'>4</option>";
                    }

                    if (subject.timeSem == "0") {
                        sem += "<option value='0' selected>End</option>";
                    } else {
                        sem += "<option value='0'>End</option>";
                    }

                    sem += "</select>";


                    let tableappend = "<tr>";
                    tableappend += "<td><input type=text class='form-control' list='subjectcode' onblur='handleSubjectCodeChangeTimTable(this)' value='" + subject.subjectCode + "'></td>";
                    tableappend += "<td><input type=text class='form-control' value='" + subject.subjectTitle + "'></td>";
                    tableappend += "<td>" + sem + "</td>";


                    tableappend += '<td><input type="date" class="form-control form-control-sm" id="startingDate1" value="' + subject.examdate + '"></td>';
                    tableappend += '<td><input type="time" class="form-control form-control-sm" id="startingDate2" value="' + subject.starttime + '"></td>';
                    tableappend += '<td><input type="time" class="form-control form-control-sm" id="startingDate3" value="' + subject.endtime + '"></td>';
                    tableappend += '<td><input type="text" class="form-control form-control-sm" id="startingDate4" value="' + subject.hallno + '"></td>';
                    tableappend += '<td><input type="text" class="form-control form-control-sm" id="examfee" value="' + subject.paper_fee + '"></td>';

                    tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                    tableappend += "</tr>";

                    $('#subjectTable').append(tableappend);

                });

                // $('#createSubjectBtn').text('Update Timetable');
                // $('#createSubjectBtn').removeClass('btn-info').addClass('btn-warning').addClass('text-white');
                // $('#createSubjectBtn').val(2);


                // $('#selectedDegreeName').val(batchArray[i][0]);
                // $('#selectedAcademicYear').val(batchArray[i][1]);
                // let radioVal = ""
                // $('#attmeptTime').hide();
                // if (batchArray[i][3] == "First") {
                //     radioVal = "F";
                // } else if (batchArray[i][3] == "Repeat") {
                //     radioVal = "R";
                // } else if (batchArray[i][3] == "Re-Repeat") {
                //     radioVal = "RR";
                //     $('#attmeptTime').show();
                // }
                // $('#selectedAttemptTime').val(batchArray[i][4]);
                // $("input[name=selectedAttempt][value=" + radioVal + "]").prop('checked', true);


                // let semesters = batchArray[i][2].split(',');
                // $('input[name="uploadSemester"]').prop('checked', false);
                // $('input[name="uploadSemester"]').each(function () {
                //     if (semesters.includes($(this).val())) {
                //         $(this).prop('checked', true);
                //     }
                // });


                // $('#startingDate').val(batchArray[i][5]);
                // $('#closingDate').val(batchArray[i][6]);
                // $('#examAmounToComplte').val(batchArray[i][7]);
                // $('#examYear').val(batchArray[i][8]);
                // $('#examMonth').val(batchArray[i][9]);
                // $('#selectedDegreeName').prop('disabled', true);
                // $('#selectedAcademicYear').prop('disabled', true);
                // $('#selectedAttemptTime').prop('disabled', true);
                // $("input[name=selectedAttempt]").prop('disabled', true);
                // $('input[name="uploadSemester"]').prop('disabled', true);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });


            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Subjects Not Available',
                    text: 'Subjects Not Available',
                });
            }
        },
        error: function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid',
                text: error.responseText,
            });
        }
    });
}



function updateBatchTimeTable(i, examref_no) {
    dataRep['examref_no'] = examref_no;
    let postData = {
        action: "getTimeTableSpecificBatchWithRefno",
        degreeCode: batchArray[i][0],
        academicYear: batchArray[i][1],
        semester: batchArray[i][2],
        attempt: batchArray[i][3],
        attempt_time: batchArray[i][4],
        ref_no: batchArray[i][11],
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/timetable.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            // if (response[0].status == 200) {
            let subjectdata = "";
            subjectArray.length = 0;
            let count = 0;
            $('#subjectTable').empty();
            $.each(response, function (index, subject) {



                let postData = {
                    action: "getAllSubjectforBatch",
                    degreeCode: batchArray[i][0],
                    academicYear: batchArray[i][1],
                    authcode: authcode,
                    username: dataRep['userId'],
                };
                console.log(postData);

                $.ajax({
                    type: 'POST',
                    url: 'rules/subject.php',
                    data: postData,
                    dataType: 'json',
                    success: function (response) {
                        $('#subjectcode').empty();
                        subejctArray.length = 0;
                        if (response && response.length > 0) {
                            let count = 0;
                            let subjectshow = "<option value='0'>Select Paper Code</option>";

                            $.each(response, function (index, subject3) {
                                if (subject3.subjectCode != "") {
                                    subejctArray[count] = [subject3.subjectCode, subject3.subjectTitle, subject3.sstatus, subject3.credits, subject3.subjectSemester];
                                    if (subject.subjectCode == subject3.subjectCode) {
                                        subjectshow = subjectshow + "<option value='" + subject3.subjectCode + "' selected >" + subject3.subjectCode + "</option>";
                                    } else {
                                        subjectshow = subjectshow + "<option value='" + subject3.subjectCode + "'>" + subject3.subjectCode + "</option>";
                                    }
                                    $('#subjectcode').append("<option value='" + subject3.subjectCode + "'>" + subject3.subjectCode + "</option>");

                                    count++;
                                }
                            });

                            $('#selectedDegreeName').prop('disabled', true);
                            $('#selectedAcademicYear').prop('disabled', true);
                            $('#selectedAttemptTime').prop('disabled', true);
                            $("input[name=selectedAttempt]").prop('disabled', true);


                            let sem = "<select class='form-control'>";

                            if (subject.timeSem == "1") {
                                sem += "<option value='1' selected>1</option>";
                            } else {
                                sem += "<option value='1'>1</option>";
                            }

                            if (subject.timeSem == "2") {
                                sem += "<option value='2' selected>2</option>";
                            } else {
                                sem += "<option value='2'>2</option>";
                            }


                            if (subject.timeSem == "3") {
                                sem += "<option value='3' selected>3</option>";
                            } else {
                                sem += "<option value='3'>3</option>";
                            }


                            if (subject.timeSem == "4") {
                                sem += "<option value='4' selected>4</option>";
                            } else {
                                sem += "<option value='4'>4</option>";
                            }

                            if (subject.timeSem == "0") {
                                sem += "<option value='0' selected>End</option>";
                            } else {
                                sem += "<option value='0'>End</option>";
                            }

                            sem += "</select>";
                            let subjectselect = "<select class='form-control' onchange='handleSubjectCodeChangeTimTable(this)'>" + subjectshow + "</select>";


                            let tableappend = "<tr>";

                            tableappend += "<td>" + subjectselect + "</td>";

                            // tableappend += "<td><input type=text class='form-control' list='subjectcode' onblur='handleSubjectCodeChangeTimTable(this)' value='" + subject.subjectCode + "'></td>";



                            tableappend += "<td><input type=text class='form-control' value='" + subject.subjectTitle + "'></td>";
                            tableappend += "<td>" + sem + "</td>";


                            tableappend += '<td><input type="date" class="form-control form-control-sm" id="startingDate1" value="' + subject.examdate + '"></td>';
                            tableappend += '<td><input type="time" class="form-control form-control-sm" id="startingDate2" value="' + subject.starttime + '"></td>';
                            tableappend += '<td><input type="time" class="form-control form-control-sm" id="startingDate3" value="' + subject.endtime + '"></td>';
                            tableappend += '<td><input type="text" class="form-control form-control-sm" id="startingDate4" value="' + subject.hallno + '"></td>';
                            tableappend += '<td><input type="text" class="form-control form-control-sm" id="examfee" value="' + subject.paper_fee + '"></td>';

                            tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                            tableappend += "</tr>";

                            $('#subjectTable').append(tableappend);



















                            // let incomeCatOption = "<select class='form-control'><option value='0'> Select income category </option> ";
                            // $.each(incomeCatArray, function (index, incomeCat) {
                            //     incomeCatOption += "<option value='" + incomeCat[0] + "'>" + incomeCat[1] + "</option>";
                            // });
                            // incomeCatOption += "</select>";

                            // let optional = "<select class='form-control' ><option value='c'>Compulsory</option><option value='o'>Optional</option></select>";

                            // let subjectselect = "<select class='form-control' onchange='handleSubjectCodeChangeTimTable(this)'>" + subjectshow + "</select>";

                            // let tableappend = "<tr>";
                            // // tableappend += "<td><input type=text placeholde='enter amount' class='form-control' list='subjectcode' onblur='handleSubjectCodeChangeTimTable(this)'></td>";

                            // tableappend += "<td><input type=text placeholde='enter amount' class='form-control'></td>";
                            // tableappend += "<td>" + sem + "</td>";

                            // tableappend += '<td><input type="date" class="form-control form-control-sm" id="startingDate1"></td>';
                            // tableappend += '<td><input type="time" class="form-control form-control-sm" id="startingDate2"></td>';
                            // tableappend += '<td><input type="time" class="form-control form-control-sm" id="startingDate3"></td>';
                            // tableappend += '<td><input type="text" class="form-control form-control-sm" id="startingDate4"></td>';
                            // if (dataRep['selectedAttempt'] == "F") {
                            //     tableappend += '<td><input type="number" class="form-control form-control-sm" id="examfee" value=0></td>';
                            // } else {
                            //     tableappend += '<td><input type="number" class="form-control form-control-sm" id="examfee" value=1500></td>';

                            // }

                            // tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                            // tableappend += "</tr>";

                            // $('#subjectTable').append(tableappend);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Subjects not fount',
                                text: "For selected degree and academic year subjects are not availble. please add subjects for selected batch and try again.",
                            });
                        }
                    },
                    error: function (error) {
                        console.log(error)
                    }
                });

            });

            $('#createSubjectBtn').text('Update Timetable');
            $('#createSubjectBtn').removeClass('btn-info').addClass('btn-warning').addClass('text-white');
            $('#createSubjectBtn').val(2);


            $('#selectedDegreeName').val(batchArray[i][0]);
            $('#selectedAcademicYear').val(batchArray[i][1]);
            let radioVal = ""
            $('#attmeptTime').hide();
            if (batchArray[i][3] == "First") {
                radioVal = "F";
            } else if (batchArray[i][3] == "Repeat") {
                radioVal = "R";
            } else if (batchArray[i][3] == "Re-Repeat") {
                radioVal = "RR";
                $('#attmeptTime').show();
            }
            $('#selectedAttemptTime').val(batchArray[i][4]);
            $("input[name=selectedAttempt][value=" + radioVal + "]").prop('checked', true);


            let semesters = batchArray[i][2].split(',');
            $('input[name="uploadSemester"]').prop('checked', false);
            $('input[name="uploadSemester"]').each(function () {
                if (semesters.includes($(this).val())) {
                    $(this).prop('checked', true);
                }
            });


            $('#startingDate').val(batchArray[i][5]);
            $('#closingDate').val(batchArray[i][6]);
            $('#examAmounToComplte').val(batchArray[i][7]);
            $('#examYear').val(batchArray[i][8]);
            $('#examMonth').val(batchArray[i][9]);
            $('#selectedDegreeName').prop('disabled', true);
            $('#selectedAcademicYear').prop('disabled', true);
            $('#selectedAttemptTime').prop('disabled', true);
            $("input[name=selectedAttempt]").prop('disabled', true);
            $('input[name="uploadSemester"]').prop('disabled', true);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });


            // } else {
            //     Swal.fire({
            //         icon: 'warning',
            //         title: 'Subjects Not Available',
            //         text: 'Subjects Not Available',
            //     });
            // }
        },
        error: function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid',
                text: error.responseText,
            });
        }
    });
}





































