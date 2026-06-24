function setTabelDataForRegisterStCountDateReport() {
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
        SetPayedStCountReport.clear().draw();



        let postData;
        let type = "";
        if (programmeCode != "") {
            type = 'p';
            postData = {
                action: "ForRegisterStCountDateReport",
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
                action: "ForRegisterStCountDateReport",
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
                action: "ForRegisterStCountDateReport",
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
                action: "ForRegisterStCountDateReport",
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
                        var rowNode = SetPayedStCountReport.row.add([
                            student.facultyName,
                            student.programeName,
                            student.duration,
                            student.male,
                            student.female,
                            student.total,
                            student.totolEnrolledmale,
                            student.totolEnrolledfemale,
                            student.totolEnrolled,
                        ]).node();
                    });
                    SetPayedStCountReport.draw(false);

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

var SetPayedStCountReport;
function DataTableSetRegisterStCountDateReport() {
    var buttons = [
        {
            extend: 'excel',
            text: 'Export to Excel',
            exportOptions: {
                columns: ':visible'
            }
        }];

    SetPayedStCountReport = $('#DataTableSetPayedStCountReport').DataTable({
        dom: "<'row'<'col-12 text-right' B>>" +
            "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" +
            "<'row'<'col-12't>>" +
            "<'row'<'col-6'i><'col-6'p>>",
        buttons: [{
            extend: 'excel',
            text: 'Export to Excel',
            className: 'btn btn-primary',
            title: 'Paid Student Count Report',  // Set the title of the report
            filename: 'Paid Student Count Report'
        }],

        // buttons: ['excel'],
        columnDefs: [{
            targets: 0,
            orderable: false,
            searchable: false,
        },
        { width: '20%', targets: 0 },
        { width: '20%', targets: 1 },
        { width: '10%', targets: 2 }

        ]
    });


}


function formReportStRegisterDateCount(dsp) {
    title = "Number of Students Registered Date Filter Report";
    let str = "";
    if (dsp == "reportStRegisterDateCount") {

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

        // str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;">';
        // str += setAcademicYearNew();
        // str += '</select>';
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
        str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="setTabelDataForRegisterStCountDateReport();">View Report</button></div>';
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
        str += '<table class="table table-bordered" id="DataTableSetPayedStCountReport">';
        str += '<thead><tr>';
        str += '<th>Faculty</th>';
        str += '<th>Programme</th>';
        str += '<th>Duration</th>';
        str += '<th>New Registered Male</th>';
        str += '<th>New Registered Female</th>';
        str += '<th>New Registered Total</th>';
        str += '<th>Total Enrolment Male</th>';
        str += '<th>Total Enrolment Female</th>';
        str += '<th>Total Enrolment</th>';
        str += '</tr></thead>';
        str += '<tbody>';
        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

    }
    return str;
}