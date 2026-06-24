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

function DataTableForExamAppliedList() {

    var buttons = [];

    if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName']=='Technical Coordinator' 
        || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' 
        || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' 
        || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean' || dataRep['roleName'] == 'Program Assistant/Clerk') {
        // buttons.push({
        //     text: 'Download Raw Mark Sheet - English',
        //     className: 'btn btn-primary flBtn EngMedium ',
        //     action: function (e, dt, node, config) {
        //         DownloadSelectedApplicantListNew('en');
        //     }
        // });

        // buttons.push({
        //     text: 'Download Raw Mark Sheet - Sinhala',
        //     className: 'btn btn-primary flBtn SinMedium',
        //     action: function (e, dt, node, config) {
        //         DownloadSelectedApplicantListNew('si');

        //     }
        // });
        buttons.push({
            text: 'Download Full List',
            className: 'btn btn-primary',
            action: function (e, dt, node, config) {
                DownloadSelectedApplicantListNew('FullList');

            }
        });
        // buttons.push({
        //     text: 'Exam Attendance Sheet',
        //     className: 'btn btn-primary',
        //     action: function (e, dt, node, config) {
        //         DownloadSelectedApplicantListNew('examAttendaceSheet');

        //     }
        // });
        // buttons.push({
        //     text: 'Download Table Stickers',
        //     className: 'btn btn-primary',
        //     action: function (e, dt, node, config) {
        //         ExamStickersPrint();
        //     }
        // });
    }

    if (!$.fn.DataTable.isDataTable('#examAppliedListTable'))
        var table = $('#examAppliedListTable').DataTable({
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
            {
                targets: 0,
                orderable: false,
                searchable: false
            },
            ],
            order: [1, 'asc'],
        });

}

function DataTableForExamAppliedListForRawMarkSheet() {

    var buttons = [];

    if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName']=='Technical Coordinator' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
        buttons.push({
            text: 'Download Raw Mark Sheet - English',
            className: 'btn btn-primary flBtn EngMedium',
            action: function (e, dt, node, config) {
                DownloadSelectedApplicantListNew('en');
            }
        });

        buttons.push({
            text: 'Download Raw Mark Sheet - Sinhala',
            className: 'btn btn-primary flBtn SinMedium',
            action: function (e, dt, node, config) {
                DownloadSelectedApplicantListNew('si');

            }
        });        
    }

    if (!$.fn.DataTable.isDataTable('#examAppliedListTable'))
        var table = $('#examAppliedListTable').DataTable({
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
            {
                targets: 0,
                orderable: false,
                searchable: false
            },
            ],
            order: [1, 'asc'],
        });

}


function DataTableForExamAppliedListForStiker() {

    var buttons = [];

    if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Program Assistant/Clerk'  || dataRep['roleName']=='Technical Coordinator' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
       
        buttons.push({
            text: 'Exam Attendance Sheet',
            className: 'btn btn-primary',
            action: function (e, dt, node, config) {
                DownloadSelectedApplicantListNew('examAttendaceSheet');

            }
        });
        buttons.push({
            text: 'Download Table Stickers',
            className: 'btn btn-primary',
            action: function (e, dt, node, config) {
                ExamStickersPrint();
            }
        });
    }

    if (!$.fn.DataTable.isDataTable('#examAppliedListTable'))
        var table = $('#examAppliedListTable').DataTable({
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
            {
                targets: 0,
                orderable: false,
                searchable: false
            },
            ],
            order: [1, 'asc'],
        });

}


function formExamAppliedList(dsp) {

    str = "";
    title = "Exam Applied List";

    if (dsp == "formExamAppliedList" || dsp == "formExamAppliedListSubject" || dsp == "formExamAppliedListStudent") {


        str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
        str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
        str += '<ul class="navbar-nav mr-lg-2">';
        str += '<li class="nav-item ml-0">';
        str += '<h4 class="mb-2 mt-2">' + title + '</h4>';
        str += '</li></ul></div></nav>';


        str += "<div id='updateApplicantList'>";

        str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="form-group row">';

        str += '<div class="col-sm-4">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedDegreeName"  onchange="dataRep[this.id]=this.value;getSubject();">';
        str += programName;
        str += programName1;
        str += '</select>';
        str += '</div></div>';


        let date = new Date().getFullYear();


        str += '<div class="col-sm-3">'
        str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';

        str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;getSubject();">';
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

        str += '<div class="col-sm-5">'
        str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Semester : </label></div>';
        str += '<div class="col-sm-10" style="display: inline-flex;">';
        str += "<div class='col-sm-2'><div class='form-check'  style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem1' class='form-check-input' name='selectedSemester' value='1' onclick='dataRep[this.name]=this.value;getSubject();' " + ((dataRep["selectedSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-2'><div class='form-check'  style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem2' class='form-check-input' name='selectedSemester' value='2' onclick='dataRep[this.name]=this.value;getSubject();' " + ((dataRep["selectedSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-2'><div class='form-check'  style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem3' class='form-check-input' name='selectedSemester' value='3' onclick='dataRep[this.name]=this.value;getSubject();' " + ((dataRep["selectedSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-2'><div class='form-check'  style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem4' class='form-check-input' name='selectedSemester' value='4' onclick='dataRep[this.name]=this.value;getSubject();' " + ((dataRep["selectedSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-4'><div class='form-check'  style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='semEnd' class='form-check-input' name='selectedSemester' value='0' onclick='dataRep[this.name]=this.value;getSubject();' " + ((dataRep["selectedSemester"] == '0') ? "checked" : "") + ">End of Year<i class='input-helper'></i></label></div></div>";

        str += '</div>';
        str += '</div>';
        str += '</div>';


        subjetcs = "";
        if (subjectCodeLength > 0) {
            str += '<div class="form-group row"><div class="col-sm-4">'
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Attempt : </label></div>';
            str += '<div class="col-sm-9" style="display: inline-flex;">';
            str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='attemptTimeChange(1);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='attemptTimeChange(2);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-5'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='attemptTimeChange(3);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-repeat<i class='input-helper'></i></label></div></div>";
            str += '</div>';
            str += '</div>';

            str += '<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 " id="attmeptTime" style="display:' + ((dataRep["selectedAttempt"] == "RR") ? "" : "none") + '">';
            str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Attempt Time</label></div>';
            str += '<div class="col-sm-7" style="display: inline-flex;">';
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


            for (j = 0; j < subjectCodeLength; j++) {
                subjetcs += "<option " + ((dataRep["selectedSubject"] == subjectCodeArr[j]) ? "selected" : "") + ">" + subjectCodeArr[j] + "</option>";
            }


            
            str += '<div class="col-sm-3">'
            str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Paper Code</label></div>';
            str += '<div class="col-sm-7" style="display: inline-flex;">';

            str += '<select class="form-control form-control-sm" id="selectedSubject" onchange="dataRep[this.id]=this.value;">';
            str += subjetcs;
            str += '</select>';
            str += '</div>';
            str += '</div>';

            str += '<div class="col-sm-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="examAppliedListGet();DataTableForExamAppliedList();">View List</button></div>';
            str += '</div>';


        }

        str += '</div></div>';
        str += '</div></div></div>';

        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="examAppliedListTable">';
        str += '<thead><tr>';
        str += '<th>#</th>';
        str += '<th>Student Number</th>';
        str += '<th>Student Name</th>';
        str += '<th>Applied Date</th>';
        str += '</tr></thead>';
        str += '<tbody>';

        if (ex_CodeLength > 0) {

            rcount = 0;
            for (var i = rcount; i < ex_studentNoArr.length; i++) {

                rcount++;
                str += '<tr>';
                str += '<td>' + rcount + '</td>';
                str += '<td>' + ex_studentNoArr[i] + '</td>';
                str += '<td>' + ex_studentNameArr[i] + '</td>';
                str += '<td>' + ex_appliedDateArr[i] + '</td>';
                str += '</tr>';

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

function formExamAppliedListForStiker(dsp) {

    str = "";
    title = "Attendance sheet/Table stickers and etc.";

    if (dsp == "formExamAppliedListForStiker" || dsp == "formExamAppliedListSubjectForStiker" || dsp == "formExamAppliedListStudentForStiker") {


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
        str += '<select class="form-control form-control-sm" id="selectedDegreeName"  onchange="dataRep[this.id]=this.value;getSubjectForStiker();hideMediums();">';
        str += programName;
        str += programName1;
        str += '</select>';
        str += '</div></div>';


        let date = new Date().getFullYear();


        str += '<div class="col-sm-3">'
        str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';

        str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;getSubjectForStiker();">';
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

        //medium
        if (dataRep['selectMedium'] == 'mediumSinhala') {
            mediumSinhalaChecked = 'checked';
        } else if (dataRep['selectMedium'] == 'mediumEnglish') {
            mediumEnglishChecked = 'checked'
        }

        str += '<div class="col-xl-5 col-lg-5 MediumRadioFullBox">';
        str += '<div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 col-pl-27" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium</label></div>';
        str += '<div class="col-xl-7 col-lg-8 col-md-9 col-sm-9 col-xs-9" style="display: inline-flex;">';
        str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();getSubjectForStiker();' " + ((dataRep["selectMedium"] == 'mediumSinhala') ? "checked" : "") + ">Sinhala<i class='input-helper'></i></label></div>";
        str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();getSubjectForStiker();' " + ((dataRep["selectMedium"] == 'mediumEnglish') ? "checked" : "") + ">English<i class='input-helper'></i></label></div></div>";
        str += '</div>';


        str += '<div class="row col-sm-4">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Semester</label></div>';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += "<div class='col-sm-2'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem1' class='form-check-input' name='selectedSemester' value='1' onclick='dataRep[this.name]=this.value;getSubjectForStiker();' " + ((dataRep["selectedSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-2'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem2' class='form-check-input' name='selectedSemester' value='2' onclick='dataRep[this.name]=this.value;getSubjectForStiker();' " + ((dataRep["selectedSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-2'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem3' class='form-check-input' name='selectedSemester' value='3' onclick='dataRep[this.name]=this.value;getSubjectForStiker();' " + ((dataRep["selectedSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-2'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem4' class='form-check-input' name='selectedSemester' value='4' onclick='dataRep[this.name]=this.value;getSubjectForStiker();' " + ((dataRep["selectedSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-4'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='semEnd' class='form-check-input' name='selectedSemester' value='0' onclick='dataRep[this.name]=this.value;getSubjectForStiker();' " + ((dataRep["selectedSemester"] == '0') ? "checked" : "") + ">End of Year<i class='input-helper'></i></label></div></div>";

        str += '</div>';
        str += '</div>';
        str += '</div>';


        subjetcs = "";
        if (subjectCodeLength > 0) {
            str += '<div class="form-group row"><div class="col-sm-4">'
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Attempt</label></div>';
            str += '<div class="col-sm-9" style="display: inline-flex;">';
            str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='attemptTimeChange(1);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='attemptTimeChange(2);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-5'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='attemptTimeChange(3);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-repeat<i class='input-helper'></i></label></div></div>";
            str += '</div>';
            str += '</div>';
            

            str += '<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 " id="attmeptTime" style="display:' + ((dataRep["selectedAttempt"] == "RR") ? "" : "none") + '">';
            str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Attempt Time</label></div>';
            str += '<div class="col-sm-7" style="display: inline-flex;">';
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


            for (j = 0; j < subjectCodeLength; j++) {
                subjetcs += "<option " + ((dataRep["selectedSubject"] == subjectCodeArr[j]) ? "selected" : "") + ">" + subjectCodeArr[j] + "</option>";
            }




            str += '<div class="col-sm-3">'
            str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Paper Code</label></div>';
            str += '<div class="col-sm-7" style="display: inline-flex;">';

            str += '<select class="form-control form-control-sm" id="selectedSubject" onchange="dataRep[this.id]=this.value;">';
            str += subjetcs;
            str += '</select>';
            str += '</div>';
            str += '</div>';

            str += '<div class="col-sm-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="examAppliedListGetForStiker();DataTableForExamAppliedListForStiker();">View List</button></div>';
            str += '</div>';


        }

        str += '</div></div>';
        str += '</div></div></div>';

        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="examAppliedListTable">';
        str += '<thead><tr>';
        str += '<th>#</th>';
        str += '<th>Student Number</th>';
        str += '<th>Student Name</th>';
        str += '<th>Applied Date</th>';
        str += '</tr></thead>';
        str += '<tbody>';

        if (ex_CodeLength > 0) {

            rcount = 0;
            for (var i = rcount; i < ex_studentNoArr.length; i++) {

                rcount++;
                str += '<tr>';
                str += '<td>' + rcount + '</td>';
                str += '<td>' + ex_studentNoArr[i] + '</td>';
                str += '<td>' + ex_studentNameArr[i] + '</td>';
                str += '<td>' + ex_appliedDateArr[i] + '</td>';
                str += '</tr>';

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

function formExamAppliedListForRawMarkSheet(dsp) {

    str = "";
    title = "Raw Mark Sheets";

    if (dsp == "formExamAppliedListForRawMarkSheet" || dsp == "formExamAppliedListSubjectForRawMarkSheet" || dsp == "formExamAppliedListStudentForRawMarkSheet") {


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
        str += '<select class="form-control form-control-sm" id="selectedDegreeName"  onchange="dataRep[this.id]=this.value;getSubjectForRawMarkSheet();">';
        str += programName;
        str += programName1;
        str += '</select>';
        str += '</div></div>';


        let date = new Date().getFullYear();


        str += '<div class="col-sm-3">'
        str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';

        str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;getSubjectForRawMarkSheet();">';
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

        str += '<div class="col-sm-5">'
        str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Semester : </label></div>';
        str += '<div class="col-sm-10" style="display: inline-flex;">';
        str += "<div class='col-sm-2'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem1' class='form-check-input' name='selectedSemester' value='1' onclick='dataRep[this.name]=this.value;getSubjectForRawMarkSheet();' " + ((dataRep["selectedSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-2'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem2' class='form-check-input' name='selectedSemester' value='2' onclick='dataRep[this.name]=this.value;getSubjectForRawMarkSheet();' " + ((dataRep["selectedSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-2'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem3' class='form-check-input' name='selectedSemester' value='3' onclick='dataRep[this.name]=this.value;getSubjectForRawMarkSheet();' " + ((dataRep["selectedSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-2'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='sem4' class='form-check-input' name='selectedSemester' value='4' onclick='dataRep[this.name]=this.value;getSubjectForRawMarkSheet();' " + ((dataRep["selectedSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-4'><div class='form-check' style='margin-top:10px !important'> <label class='form-check-label'> <input type='radio' id='semEnd' class='form-check-input' name='selectedSemester' value='0' onclick='dataRep[this.name]=this.value;getSubjectForRawMarkSheet();' " + ((dataRep["selectedSemester"] == '0') ? "checked" : "") + ">End of Year<i class='input-helper'></i></label></div></div>";

        str += '</div>';
        str += '</div>';
        str += '</div>';


        subjetcs = "";
        if (subjectCodeLength > 0) {
            str += '<div class="form-group row"><div class="col-sm-4">'
            str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Attempt : </label></div>';
            str += '<div class="col-sm-9" style="display: inline-flex;">';
            str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='attemptTimeChange(1);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='attemptTimeChange(2);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div></div>";
            str += "<div class='col-sm-5'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='attemptTimeChange(3);dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-repeat<i class='input-helper'></i></label></div></div>";
            str += '</div>';
            str += '</div>';

            str += '<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 " id="attmeptTime" style="display:' + ((dataRep["selectedAttempt"] == "RR") ? "" : "none") + '">';
            str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Attempt Time</label></div>';
            str += '<div class="col-sm-7" style="display: inline-flex;">';
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


            for (j = 0; j < subjectCodeLength; j++) {
                subjetcs += "<option " + ((dataRep["selectedSubject"] == subjectCodeArr[j]) ? "selected" : "") + ">" + subjectCodeArr[j] + "</option>";
            }




            str += '<div class="col-sm-3">'
            str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Paper Code</label></div>';
            str += '<div class="col-sm-7" style="display: inline-flex;">';

            str += '<select class="form-control form-control-sm" id="selectedSubject" onchange="dataRep[this.id]=this.value;">';
            str += subjetcs;
            str += '</select>';
            str += '</div>';
            str += '</div>';

            str += '<div class="col-sm-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="examAppliedListGetForRawMarkSheet();DataTableForExamAppliedListForRawMarkSheet();">View List</button></div>';
            str += '</div>';


        }

        str += '</div></div>';
        str += '</div></div></div>';

        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="examAppliedListTable">';
        str += '<thead><tr>';
        str += '<th>#</th>';
        str += '<th>Student Number</th>';
        str += '<th>Student Name</th>';
        str += '<th>Applied Date</th>';
        str += '</tr></thead>';
        str += '<tbody>';

        if (ex_CodeLength > 0) {

            rcount = 0;
            for (var i = rcount; i < ex_studentNoArr.length; i++) {

                rcount++;
                str += '<tr>';
                str += '<td>' + rcount + '</td>';
                str += '<td>' + ex_studentNoArr[i] + '</td>';
                str += '<td>' + ex_studentNameArr[i] + '</td>';
                str += '<td>' + ex_appliedDateArr[i] + '</td>';
                str += '</tr>';

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
//-------------------------------------------------MAIN FUNCTION END--------------------------------------------- 




function getSubject() {
    ex_CodeLength = 0;
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" || document.getElementById('achedamicYear').value == "Please Select Academic Year" || dataRep["selectedSemester"] == "") {
        // alert("Please Select a value from the select Box(s)");

    } else {

        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        sendForm("data4ExamAppliedListSubject");
    }
}


function getSubjectForStiker() {
    ex_CodeLength = 0;
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" || document.getElementById('achedamicYear').value == "Please Select Academic Year" || dataRep["selectedSemester"] == "") {
        // alert("Please Select a value from the select Box(s)");

    } else {

        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        sendForm("data4ExamAppliedListSubjectForStiker");
    }
}


function getSubjectForRawMarkSheet() {
    ex_CodeLength = 0;
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" || document.getElementById('achedamicYear').value == "Please Select Academic Year" || dataRep["selectedSemester"] == "") {
        // alert("Please Select a value from the select Box(s)");

    } else {

        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        sendForm("data4ExamAppliedListSubjectForRawMarkSheet");
    }
}

function examAppliedListGet() {
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" || document.getElementById('achedamicYear').value == "Please Select Academic Year" || dataRep["selectedSemester"] == "") {
        alert("Please Select a value from the select Box(s)");
    } else {
        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        dataRep["selectedSubject"] = document.getElementById('selectedSubject').value;
        serchedAttemped = dataRep["selectedAttempt"];

        let repeatAttempt = "1";
        if (serchedAttemped == "RR") {
            repeatAttempt = $('#selectedAttemptTime').val();
        }
        dataRep["selectedAttemptTime"] = repeatAttempt;
        sendForm("data4ExamAppliedListStudents");
    }
}

function examAppliedListGetForStiker() {
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" || document.getElementById('achedamicYear').value == "Please Select Academic Year" || dataRep["selectedSemester"] == "" ||  md == "") {
        alert("Please Select a value from the select Box(s)");
    } else {
        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        dataRep["selectedSubject"] = document.getElementById('selectedSubject').value;
        serchedAttemped = dataRep["selectedAttempt"];
        dataRep["selectedMedium"] = md;
        console.log("fdsfsd");
        console.log(dataRep["selectedMedium"])
        console.log(md)
        let repeatAttempt = "1";
        if (serchedAttemped == "RR") {
            repeatAttempt = $('#selectedAttemptTime').val();
        }
        dataRep["selectedAttemptTime"] = repeatAttempt;
        sendForm("data4ExamAppliedListStudentsForStiker");
    }
}

function examAppliedListGetForRawMarkSheet() {
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" || document.getElementById('achedamicYear').value == "Please Select Academic Year" || dataRep["selectedSemester"] == "") {
        alert("Please Select a value from the select Box(s)");
    } else {
        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        dataRep["selectedSubject"] = document.getElementById('selectedSubject').value;
        serchedAttemped = dataRep["selectedAttempt"];
        
        let repeatAttempt = "1";
        if (serchedAttemped == "RR") {
            repeatAttempt = $('#selectedAttemptTime').val();
        }
        dataRep["selectedAttemptTime"] = repeatAttempt;
        sendForm("data4ExamAppliedListStudentsForRawMarkSheet");
    }
}



var tNo = 0;
var rcount = 0;


function DownloadSelectedApplicantListNew_(Downloadtype) {
    var count = 1;
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
        alert("Please Select Programm and the Year.");
    }

    else {
        var newStr = `<style>
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
		   {size:595.3pt 841.9pt;
			margin:36.0pt 36.0pt 36.0pt 36.0pt;
			mso-header-margin:35.4pt;
			mso-footer-margin:35.4pt;
		   mso-paper-source:0;}
	   div.WordSection1
		   {page:WordSection1;}
	   
	   </style>
	   	<link rel=File-List href="` + host + `wordFormat/MarkSheet/filelist.xml">
		<link rel=Edit-Time-Data href="` + host + `wordFormat/MarkSheet/editdata.mso">
		<link rel=themeData href="` + host + `wordFormat/MarkSheet/themedata.thmx">
		<link rel=colorSchemeMapping href="` + host + `wordFormat/MarkSheet/colorschememapping.xml">
	   `;

        newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
        newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
        newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
        // newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
        // newStr += "<div id='topics1' class='info'></div>";
        // newStr += '<img src="img/wordTitle3.png" width="700"/>';
        // newStr += '<div style="display: flex; align-items: center; justify-content: center;">';
        // newStr += '<img src="img/logo.png"  style="width: 10%;" />';
        // newStr += "<div style='text-align: center;'><div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>Faculty of Graduate Studies</div>";
        // newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>University of Kelaniya -Sri Lanka</div></div>";
        // newStr += '<img src="img/fgs.jpg" width="10%" />';

        // newStr += '</div>';
        // newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 20px;'>" + $( "#selectedDegreeName option:selected" ).text() + "</div>";
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
        newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + sub + "</div>";
        newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + " - Semester - " + dataRep["selectedSemester"] + "</div>";

        // newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + sub + "</div>";
        // newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year " + document.getElementById('achedamicYear').value + " - Semester " + dataRep["selectedSemester"] + "</div>";

        if (Downloadtype == "FullList") {
            newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>List Of Exam Applied</div>";
            newStr += "<br/>";
            newStr += "<div  id='inputs' style='margin:0px 5px;clear:both'></div>";
            newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
            newStr += "<tr>";
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%">No</th>';
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%">Student No</th>';
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:50%">Name With Initial</th>';
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%">Applied Date</th>';
            newStr += "</tr>";

            for (i = 0; i < ex_CodeLength; i++) {
                newStr += "<tr>";
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%">' + count + '</td>';
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%" >' + ex_studentNoArr[i] + '</td>';
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:50%" >' + ex_studentNameArr[i] + '</td>';
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%">' + ex_appliedDateArr[i] + '</td>';
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


            newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Exam Attendance Sheet</div>";
            newStr += "<br/>";

            newStr += '<table class=MsoTableGrid border=0 cellspacing=0 cellpadding=0 width=700 style="width:525.05pt;border-collapse:collapse;border:none;mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:none;mso-border-insidev:none">';
            newStr += '<tbody>';       
            newStr += '<tr>';
            newStr += '<td  width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt"><p class=MsoNormal><b><span style="font-size:10.0pt;mso-fareast-font-family:Times New Roman">Exam Hall<o:p></o:p></span></b></p></td>';

            newStr += "<td width=183 style='width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt'>";
            newStr += '<p><span style="font-size:10.0pt">:&nbsp;<o:p></o:p></span></p>';
            newStr += '</td>';

            newStr += '<td width=157 style="width:118.1pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt"><p class=MsoNormal><b><span style="font-size:10.0pt;mso-fareast-font-family:Times New Roman"><o:p></o:p></span></b></p></td>';
            newStr += '<td width=217 style="width:162.65pt;border:none;mso-border-top-alt:solid windowtext 1.5pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.1pt">';
            newStr += '<p><span style="font-size:10.0pt">:&nbsp;..................................................<o:p></o:p></span></p>';
            newStr += '</td>';
            newStr += '</tr>';



            newStr += '<tr style="mso-yfti-irow:2;height:20.5pt">';
            newStr += '<td width=143 style="width:106.95pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
            newStr += '<p><b><span style="font-size:10.0pt">Exam Date<o:p></o:p></span></b></p>';
            newStr += '</td>';
            newStr += '<td width=183 style="width:137.35pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
            newStr += '<p><span style="font-size:10.0pt">: .............................................<o:p></o:p></span></p>';
            newStr += '</td>';

            newStr += '<td width=157 style="width:118.1pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
            newStr += '<p><b><span style="font-size:10.0pt">Exam Time<o:p></o:p></span></b></p>';
            newStr += '</td>';
            newStr += '<td  width=217 style="width:162.65pt;padding:0cm 5.4pt 0cm 5.4pt;height:20.5pt">';
            newStr += '<p><span style="font-size:10.0pt">:&nbsp;..................................................<o:p></o:p></span></p>';
            newStr += '</td>';
            newStr += '</tr>';
            newStr += '</tbody>';
            newStr += '</table><br/>';


            newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
            newStr += "<tr>";
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%">No</th>';
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:30%">Student No</th>';
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:45%">Name With Initial</th>';
            newStr += '<th style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%">Signature</th>';
            newStr += "</tr>";

            for (i = 0; i < ex_CodeLength; i++) {
                newStr += "<tr>";
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:10%">' + count + '</td>';
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px; width:30%">' + ex_studentNoArr[i] + '</td>';
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: left;padding-left:10px;width:45%">' + ex_studentNameArr[i] + '</td>';
                newStr += '<td style="font-size: 12px; font-family: ' + "Times New Roman" + '; text-align: center; width:15%"></td>';
                newStr += "</tr>";
                count++;
            }

            var exportFilename = "Exam Attendace Sheet - " + document.getElementById('achedamicYear').value + " - " + currentSubCode + ".doc";
            newStr += "</table></div>";

            let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
            sendDataList += "&sheetName=" + "Exam Attendece Sheet";
            isrHandle.getDoc(newStr, exportFilename);

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
//--------------------------------------------------------SEARCH FUNCTION END-----------------------------------------------



