function setTabelDataForreportHoldAndNotReleased() {
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
        SetreportHoldAndNotReleased.clear().draw();



        let postData;
        let type = "";
        if (programmeCode != "") {
            type = 'p';
            postData = {
                action: "ForholdNotReleasedReultReport",
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
                action: "ForholdNotReleasedReultReport",
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
                action: "ForholdNotReleasedReultReport",
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
                action: "ForholdNotReleasedReultReport",
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
                        let status = student.Status;
                        if (student.Status == 1) {
                            status = "Not Released";
                        } else if (student.Status == "H") {
                            status = "Hold";
                        } else if (student.Status == "NP") {
                            status = "Not Payed";
                        }
                        var rowNode = SetreportHoldAndNotReleased.row.add([
                            student.stNo,
                            student.name,
                            // student.address,
                            student.degreeCode,
                            student.degreeTitle,
                            student.achedamicYear,
                            student.attempt,
                            student.subjectCode,
                            student.createdDate,
                            status,
                        ]).node();

                        let createdDate = new Date(student.createdDate);
                        let currentDate = new Date();

                        let diffMonths = (currentDate.getFullYear() - createdDate.getFullYear()) * 12 + (currentDate.getMonth() - createdDate.getMonth());

                        if (diffMonths >= 3) {
                            rowNode.style.backgroundColor = "red";  // 3 months late -> Red
                        } else if (diffMonths >= 2) {
                            rowNode.style.backgroundColor = "yellow"; // 2 months late -> Yellow
                        }
                    });
                    SetreportHoldAndNotReleased.draw(false);

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
var SetreportHoldAndNotReleased;

function DataTableSetreportHoldAndNotReleased() {

    let excelTitle = "First Installment Paid Student List";

    if (dataRep["roleName"] == "Senior Assistant Librarian") {
        excelTitle = "Paid Student Count Report to Arrange Library Orientation";
    }

    var buttons = [
        {
            extend: 'excel',
            text: 'Export to Excel',
            exportOptions: {
                columns: ':visible'
            }
        }];

    SetreportHoldAndNotReleased = $('#DataTableSetPayedStCountReport').DataTable({
        dom: "<'row'<'col-12 text-right' B>>" +
            "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" +
            "<'row'<'col-12't>>" +
            "<'row'<'col-6'i><'col-6'p>>",
        buttons: [{
            extend: 'excel',
            text: 'Export to Excel',
            className: 'btn btn-primary',
            title: excelTitle,  // Set the title of the report
            filename: excelTitle
        }],
        // buttons: ['excel'],
        columnDefs: [{
            targets: 0,
            orderable: false,
            searchable: false,
        },
        ],
        order: [5, 'asc']

    });


}





function formreportHoldAndNotReleased(dsp) {
    title = "Hold/Not Released Results Report";
    let str = "";
    if (dsp == "reportHoldAndNotReleased") {

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
        str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="setTabelDataForreportHoldAndNotReleased();">View Report</button></div>';
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
        str += '<th>Student No</th>';
        str += '<th>Name</th>';
        // str += '<th>Address</th>';
        str += '<th>Degree Code</th>';
        str += '<th>Degree Name</th>';
        str += '<th>Academic Year</th>';
        str += '<th>Attempt</th>';
        str += '<th>Subject Code</th>';
        str += '<th>Created Date</th>';
        str += '<th>Status</th>';
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