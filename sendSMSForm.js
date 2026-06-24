
dataRep["ApplicationNo"] = dataRep['senateYYYY'] = dataRep['senateMM'] = dataRep['senateDD'] = dataRep["senateNo"] = "";

dataRep['BOSYYYY'] = dataRep['BOSMM'] = dataRep['BOSDD'] = dataRep["boardOfStudyNo"] = "";

dataRep['FBYYYY'] = dataRep['FBMM'] = dataRep['FBDD'] = dataRep["facultyBoardNo"] = dataRep['userName'] = "";
dataRep['programmeCode'] = "";
var BulkNote;
var TempBulkNote;
var user;
var BulkNoteArr = new Array();
var newStr1;
var countviewList = 0;
var divid = 1;
var checkdeleteorsave = "";
var breakingpoint = 50;
var pagenew = " ";
var nextpage = 0;

var applicantDTable;
function DataTableForSendSMSBulk() {

    var buttons = [];

    if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
        buttons.push({
            text: 'Send Bulk SMS',
            className: 'btn btn-primary',
            action: function (e, dt, node, config) {
                const mobileNumber = [];
                applicantDTable.rows().every(function (index) {
                    // Get the data for the current row
                    var rowData = this.data();
                    var checkbox = $(this.node()).find('input[type="checkbox"]');
                    var isChecked = checkbox.prop('checked');

                    if (isChecked) {
                        if (mobileNumberValid(studentContactMobileArr[index]) != 0) {
                            mobileNumber.push(studentContactMobileArr[index]);
                        }
                    }
                });

                openInputDialogBulkSMS(mobileNumber);
            }
        });

        buttons.push({
            text: 'Send Bulk Email',
            className: 'btn btn-primary',
            action: function (e, dt, node, config) {
                const email = [];
                applicantDTable.rows().every(function (index) {
                    // Get the data for the current row
                    var rowData = this.data();
                    var checkbox = $(this.node()).find('input[type="checkbox"]');
                    var isChecked = checkbox.prop('checked');

                    if (isChecked) {
                        if (emailValid(studentContactEmailArr[index])) {
                            email.push(studentContactEmailArr[index]);
                        }
                    }
                });
                console.log(email)
                openInputBulkEmail(email);
            }
        });

    }

    if (!$.fn.DataTable.isDataTable('#applicantTable'))
        applicantDTable = $('#applicantTable').DataTable({
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
                // {
                // 	targets: 1,
                // 	orderable: false,
                // 	searchable: false
                // },
            ],
            select: {
                style: 'multi',
                selector: 'td:first-child',
            },
            order: [1, 'asc'],
        });


    applicantDTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
        var countSelectedRows = applicantDTable.rows({ selected: true }).count();
        var countItems = applicantDTable.rows().count();

        if (countItems > 0) {
            if (countSelectedRows == countItems) {
                $('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
            } else {
                $('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
            }
        }

        if (e.type === 'select') {
            $('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: true }).nodes()).prop('checked', true);
        } else {
            $('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: false }).nodes()).prop('checked', false);
        }
    });

    // When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
    applicantDTable.on('click', 'thead .selectall-checkbox', function () {
        $('input[type="checkbox"]', this).trigger('click');
    });


    // When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
    applicantDTable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
        if (this.checked) {
            applicantDTable.rows().select();
            for (i = 0; i < applicationNoLength; i++) {
                var checkBoxDivIdRegistered = '#checkSelected' + i;
                if ($(checkBoxDivIdRegistered)) {
                    $(checkBoxDivIdRegistered).prop("checked", true);
                }
            }
        } else {
            applicantDTable.rows().deselect();
            for (i = 0; i < applicationNoLength; i++) {
                var checkBoxDivIdRegistered = '#checkSelected' + i;
                if ($(checkBoxDivIdRegistered)) {
                    $(checkBoxDivIdRegistered).prop("checked", false);
                }
            }
        }

        e.stopPropagation();
    });

}



var currentdate = "";
var datetime = "";
var TempUser = "";

function viewSMSSendList() {
    let type = $('#setType').find(":selected").val();
    dataRep["setType"] = type;

    if (type == 1) {
        filterListApplicantSendSMS();
        DataTableForSendSMSBulk();
    }

    if (type == 2) {
        filterListSelectedApplicantSendSMS();
        DataTableForSendSMSBulk();
    }

    if (type == 3) {
        filterListPreRegStudentListSendSMS();
        DataTableForSendSMSBulk();
    }

    if (type == 4) {
        filterListRegStudentListSendSMS();
        DataTableForSendSMSBulk();
    }

    if (type == 5) {
        filterListDueAmmoutSendSMS();
        DataTableForSendSMSBulk();
    }
    setDegrees();
}


function filterListApplicantSendSMS() {
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
        alert("Please Select a value from the select Box(s)");
    } else {
        dataRep["selectedMedium"] = md;
        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        sendForm("data4SendSMApplicantList");
    }
}

function filterListSelectedApplicantSendSMS() {
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
        alert("Please Select a value from the select Box(s)");
    } else {
        dataRep["selectedMedium"] = md;
        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        sendForm("data4SendSMSelectedApplicantList");

    }
}

function filterListPreRegStudentListSendSMS() {
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
        alert("Please Select a value from the select Box(s)");
    } else {
        dataRep["selectedMedium"] = md;
        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        sendForm("data4SendSMPreRegStudentList");

    }
}

function filterListRegStudentListSendSMS() {
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
        alert("Please Select a value from the select Box(s)");
    } else {
        dataRep["selectedMedium"] = md;
        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;

        sendForm("data4SendSMRegStudentList");

    }
}

function filterListDueAmmoutSendSMS() {
    if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
        alert("Please Select a value from the select Box(s)");
    } else {
        dataRep["toPayed"] = 0;
        dataRep["selectedMedium"] = md;
        dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
        dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
        dataRep["requiredAmmout"] = document.getElementById('setInstallment').value;
        console.log(document.getElementById('setInstallment').value);
        dataRep["toPayed"] = document.getElementById('setInstallment').value;
        sendForm("data4SendSMtDueAmmoutList");

    }
}



function changeListSMS() {
    let type = $('#setType').find(":selected").val();
    dataRep["setType"] = type;
    $('#setInstallmentDiv').hide();

    if (type == 5) {
        $('#setInstallmentDiv').show();

    }
}

function formSendSMSBulk(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "SMS Communication";

    if (dsp == "formSendSMSBulk") {

        str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
        str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
        str += '<ul class="navbar-nav mr-lg-2">';
        str += '<li class="nav-item ml-0">';
        str += '<h4 class="mb-0">' + title + '</h4>';
        str += '</li></ul></div></nav>';

        str += "<div id='updateApplicantList'>";

        str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
        str += '<div class="card">';
        str += '<div class="card-body">';
        str += '<div class="row">';
        str += '<div class="col-sm-4">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Type</label></div>';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="setType" onchange="changeListSMS()">';
        str += '<option value="1" ' + ((dataRep["setType"] == 1) ? "selected" : "") + '>Applicant List</option>';
        str += '<option value="2" ' + ((dataRep["setType"] == 2) ? "selected" : "") + '>Selected Applicant List</option>';
        str += '<option value="3" ' + ((dataRep["setType"] == 3) ? "selected" : "") + '>Pre-Registered List</option>';
        str += '<option value="4" ' + ((dataRep["setType"] == 4) ? "selected" : "") + '>Registered List</option>';
        str += '<option value="5" ' + ((dataRep["setType"] == 5) ? "selected" : "") + '>Due Payment Reminder</option>';
        str += '</select>';
        str += '</div></div>';
         
        let toPayedShow = "";
        if (dataRep["setType"] != 5) {
            toPayedShow = "display:none"
        }

        str += '<div class="col-sm-4" style="'+toPayedShow+'" id="setInstallmentDiv">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">To Payed</label></div>';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += '<input type="number" class="form-control form-control-sm" id="setInstallment" value="'+dataRep["toPayed"]+'">';
        str += '</div></div>';

        str += '</div><br>';

        str += '<div class="row">';

        str += '<div class="col-sm-4">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedDegreeName">';
        // str += await setDegrees();
        str += '</select>';
        str += '</div></div>';

        str += '<div class="col-sm-3">'
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;">';
        str += setAcademicYearNew();
        str += '</select>';
        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-5">'
        str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium : </label></div>';
        str += '<div class="col-sm-10" style="display: inline-flex;">';
        str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input' name='selectedMedium' value='si' onclick='getMediumSinhala();' " + ((dataRep["selectedMedium"] == 'si') ? "checked" : "") + ">Sinhala<i class='input-helper'></i></label></div></div>";
        str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input' name='selectedMedium' value='en' onclick='getMediumEnglish();' " + ((dataRep["selectedMedium"] == 'en') ? "checked" : "") + ">English<i class='input-helper'></i></label></div></div>";
        str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="viewSMSSendList();">View List</button></div>';

        str += '</div>';
        str += '</div>';
        str += '</div>';


        str += '</div></div>';
        str += '</div></div></div>';



        if (applicationNoLength > 0) {
            str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
            str += '<div class="card">';
            str += '<div class="card-body"><div class="table-responsive">';
            str += '<table class="table table-bordered" id="applicantTable">';
            str += '<thead><tr>';
            str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
            // str += '<th></th>';
            // str += '<th>#</th>';
            str += '<th>Name</th>';
            if (dataRep["setType"] == 1 || dataRep["setType"] == 2) {
            str += '<th>Application No</th>';
            }else{
            str += '<th>Student No</th>';
            }
            str += '<th>NIC</th>';
            str += '<th>Address</th>';
            str += '<th>Mobile No</th>';
            str += '<th>Email</th>';
            if (dataRep["setType"] == 5) {
                str += '<th>Total Payed</th>';
                str += '<th>Total Due</th>';
            }
            str += '</tr></thead>';
            str += '<tbody>';
            count = 0;
            for (var i = 0; i < applicationNoLength; i++) {
                if(dataRep["toPayed"]-studenttotalPayedArr[i]> 0 && dataRep["setType"] == 5){
                count++;
                str += '<tr>';
                varselectedChecked = "";

                str += "<td><input type='checkbox'   id='checkSelected" + i + "' name='checkSelected" + i + "''/></td>";
                str += '<td style="text-align: left;">' + studentNameArr[i] + '</td>';

                // str += '<td>' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</td>';
                str += '<td>' + applicationNoArr[i] + "</td>";
                str += '<td>' + studentNICArr[i] + '</td>';
                str += '<td>' + truncateString(studentPermanentAddressArr[i], 35) + '</td>';

                str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactMobileArr[i].replace(/\s/g, '') + '"])>' + studentContactMobileArr[i] + '</span></td>';
                str += '<td><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + studentContactEmailArr[i] + '" target="_blank"> ' + studentContactEmailArr[i] + '</a></td>';
                if (dataRep["setType"] == 5) {
                    str += '<td>' + studenttotalPayedArr[i] + '</td>';
                    str += '<td>' + (dataRep["toPayed"]-studenttotalPayedArr[i])  + '</td>';
                }
                str += '</tr>';
                }else if(dataRep["setType"] != 5){
                    count++;
                    str += '<tr>';
                    varselectedChecked = "";
    
                    str += "<td><input type='checkbox'   id='checkSelected" + i + "' name='checkSelected" + i + "''/></td>";
                    str += '<td style="text-align: left;">' + studentNameArr[i] + '</td>';
    
                    // str += '<td>' + studentPersonalTitleArr[i] + '.' + studentInitialArr[i] + '</td>';
                    str += '<td>' + applicationNoArr[i] + "</td>";
                    str += '<td>' + studentNICArr[i] + '</td>';
                    str += '<td>' + truncateString(studentPermanentAddressArr[i], 35) + '</td>';
    
                    str += '<td> <span class="moblieNoShow" onclick=openInputDialogBulkSMS(["' + studentContactMobileArr[i].replace(/\s/g, '') + '"])>' + studentContactMobileArr[i] + '</span></td>';
                    str += '<td><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + studentContactEmailArr[i] + '" target="_blank"> ' + studentContactEmailArr[i] + '</a></td>';
                    if (dataRep["setType"] == 5) {
                        str += '<td>' + studenttotalPayedArr[i] + '</td>';
                        str += '<td>' +dataRep["toPayed"]+" - "+ (dataRep["toPayed"]-studenttotalPayedArr[i]) + '</td>';
                    }
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

    }

    return str;
}

