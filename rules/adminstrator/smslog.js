var applicantDTable;
function DataTableForSMSLog() {
    var buttons = [];
    applicantDTable = $('#applicantTable').DataTable({
        dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
            "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
            "<'row'<'col-12't>>" + // Table in a single line
            "<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
        buttons: buttons,
        order: [0, 'desc'],
    });
}

var currentdate = "";
var datetime = "";
var TempUser = "";



function formSMSLog(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "SMS Log";

    if (dsp == "formSMSLog" || dsp == "formMySMSLog") {
        if (dsp == "formMySMSLog") {
            title = "My SMS";
        }

        str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
        str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
        str += '<ul class="navbar-nav mr-lg-2">';
        str += '<li class="nav-item ml-0">';
        str += '<h4 class="mb-0">' + title + '</h4>';
        str += '</li></ul></div></nav>';

        str += "<div id='updateApplicantList'>";


        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="applicantTable">';
        str += '<thead><tr>';
        str += '<th>Camp Id</th>';
        str += '<th>User Name</th>';
        // str += '<th>Department Name</th>';
        // str += '<th>Sender Email</th>';
        str += '<th>Send By</th>';
        str += '<th>Message</th>';

        // str += '<th>Subject</th>';
        str += '<th>Date</th>';
        // str += '<th></th>';
        // str += '<th></th>';
        str += '<th></th>';
        str += '</tr></thead>';
        str += '<tbody id="UserTable">';



        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';


    }

    return str;
}




var SMSArray = new Array();
function setSMSLog() {

    let degreeOption = "";
    let postData = {
        action: "getSMSLog",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/smslog.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#UserTable').empty();
            SMSArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, email) {

                    if (email.userId != "") {
                        SMSArray[count] = [
                            email.ref_no,
                            email.eid,
                            email.senderName,
                            email.etext,
                            email.mobile_no,
                            email.date
                        ];
                        let department = "";
                        department += "<tr>";
                        department += "<td >" + email.ref_no + "</td>";
                        department += "<td >" + email.eid + "</td>";
                        department += "<td >" + email.senderName + "</td>";
                        department += "<td >" + email.etext + "</td>";
                        department += "<td >" + email.date + "</td>";
                        department += "<td width='5%' '><button class='btn btn-warning btn-sm' style='color:#fff'  onclick=viewSMSList('" + count + "')>View Contact List</button></td>";
                        // department += "<td width='5%' '><button class='btn btn-success btn-sm' style='color:#fff'  onclick=viewSMSContent('" + count + "')>View Message</button></td>";
                        department += "</tr>";
                        $('#UserTable').append(department);
                        count++;
                    }
                });

            }
            DataTableForSMSLog();
        },
        error: function (error) {
            console.log(error)
        }
    });
}

function setMySMSLog() {

    let degreeOption = "";
    let postData = {
        action: "getMySMSLog",
        userName: dataRep['userId'],
        authcode: authcode,
        username: dataRep['userId'],

    };
    $.ajax({
        type: 'POST',
        url: 'rules/smslog.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#UserTable').empty();
            SMSArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, email) {

                    if (email.userId != "") {
                        SMSArray[count] = [
                            email.ref_no,
                            email.eid,
                            email.senderName,
                            email.etext,
                            email.mobile_no,
                            email.date
                        ];
                        let department = "";
                        department += "<tr>";
                        department += "<td >" + email.ref_no + "</td>";
                        department += "<td >" + email.eid + "</td>";
                        department += "<td >" + email.senderName + "</td>";
                        department += "<td >" + email.etext + "</td>";
                        department += "<td >" + email.date + "</td>";
                        department += "<td width='5%' '><button class='btn btn-warning btn-sm' style='color:#fff'  onclick=viewSMSList('" + count + "')>View Contact List</button></td>";
                        // department += "<td width='5%' '><button class='btn btn-success btn-sm' style='color:#fff'  onclick=viewSMSContent('" + count + "')>View Message</button></td>";
                        department += "</tr>";
                        $('#UserTable').append(department);
                        count++;
                    }
                });

            }
            DataTableForSMSLog();
        },
        error: function (error) {
            console.log(error)
        }
    });
}




function viewSMSList(count) {

    let SMSList = "<ul>";
    $.each(JSON.parse(JSON.parse(SMSArray[count][4])), function (index, mobile) {
        SMSList += "<li  style='text-align:left'>" + mobile + "</li>";
    });
    SMSList += "</ul>";
    Swal.fire({
        // title: EmailArray[count][4],
        html: "<h4 style='text-align:left'>SMS List</h4><br>" + SMSList,
        confirmButtonText: 'OK',
        allowOutsideClick: true,
        allowEscapeKey: true,

    });


}

