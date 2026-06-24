var applicantDTable;
function DataTableForPaymentLogReport() {
    var buttons = [];
    excelTitle = "Payments Log Report";

    applicantDTable = $('#applicantTable').DataTable({
        dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
            "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
            "<'row'<'col-12't>>" + // Table in a single line
            "<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
        buttons: [{
            extend: 'excel',
            text: 'Export to Excel',
            className: 'btn btn-primary',
            title: excelTitle,  // Set the title of the report
            filename: excelTitle
        }],
        order: [4, 'desc'],
    });
}

var currentdate = "";
var datetime = "";
var TempUser = "";



function formPaymentLogReport(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "Payments Log Report";

    if (dsp == "formPaymentLogReport") {

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

        // str += '<div class="col-sm-4">';
        // str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
        // str += '<div class="col-sm-9" style="display: inline-flex;">';
        // str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;">';
        // // str += await setDegrees();
        // str += '</select>';
        // str += '</div></div>';

        str += '<div class="col-sm-3">';
        str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">To</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';
        str += '<input type="date" class="form-control form-control-sm" id="reportDateTo" onchange="dataRep[this.id]=this.value;">';

        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-3">';
        str += '<div class="col-sm-5" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">From</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';

        str += '<input type="date" class="form-control form-control-sm" id="reportDateFrom" onchange="dataRep[this.id]=this.value;">';

        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-5">'
        str += '<div class="col-sm-10" style="display: inline-flex;">';
        str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="setPaymentLogReport();">View Report</button></div>';
        str += '</div>';
        str += '</div>';

        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';


        str += "<div id='updateApplicantList'>";


        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="applicantTable">';
        str += '<thead><tr>';
        str += '<th>Ref No</th>';
        str += '<th>Student No</th>';
        str += '<th>Payment Mode</th>';
        str += '<th>Amount</th>';
        str += '<th>Date</th>';
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




var EmailArray = new Array();

function setPaymentLogReport() {

    if ($('#reportDateTo').val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'error',
            text: "Please Select To Date",
        });
    } else if ($('#reportDateFrom').val() == "") {
        Swal.fire({
            icon: 'error',
            title: 'error',
            text: "Please Select From Date",
        });
    } else {
        $('#loading-spinner').show();
        applicantDTable.clear().draw();



        let postData;
        let type = "";
        if (programmeCode != "") {
            type = 'p';
            postData = {
                action: "FoPaymentLogReport",
                reportDateTo: $('#reportDateTo').val(),
                reportDateFrom: $('#reportDateFrom').val(),
                type: type,
                programmeCode: programmeCode.split(','),
                authcode: authcode,
                username: dataRep['userId'],
            };
        } else if (departmentCode != "") {
            type = 'd';
            postData = {
                action: "FoPaymentLogReport",
                reportDateTo: $('#reportDateTo').val(),
                reportDateFrom: $('#reportDateFrom').val(),
                type: type,
                departmentCode: departmentCode,
                authcode: authcode,
                username: dataRep['userId'],
            };
        } else if (facultyCode != "") {
            type = 'f';
            postData = {
                action: "FoPaymentLogReport",
                reportDateTo: $('#reportDateTo').val(),
                reportDateFrom: $('#reportDateFrom').val(),
                type: type,
                facultyCode: facultyCode,
                authcode: authcode,
                username: dataRep['userId'],
            };
        } else {
            type = 'a';
            postData = {
                action: "FoPaymentLogReport",
                reportDateTo: $('#reportDateTo').val(),
                reportDateFrom: $('#reportDateFrom').val(),
                type: type,
                authcode: authcode,
                username: dataRep['userId'],
            };
        }



        $.ajax({
            type: 'POST',
            url: 'rules/report.php',
            data: postData,
            dataType: 'json',
            success: function (response) {
                console.log(response);
                if (response && response.length > 0 && response[0].status === 200) {
                    count = 0;
                    $.each(response, function (index, student) {
                        count++;
                        var rowNode = applicantDTable.row.add([
                            student.Pay_RefNo,
                            student.Pay_studentNo,
                            student.Pay_Method,
                            student.Pay_amount,
                            student.Response_Progress_Time
                        ]).node();
                    });
                    applicantDTable.draw(false);

                }
            }, complete: function () {
                // Hide loading spinner regardless of success or error
                $('#loading-spinner').hide();
            },
            error: function (error) {
                console.log(error)

            }
        });
    }
}

