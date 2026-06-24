var applicantDTable;
function DataTableForCordinatoDetailsrReport() {
    var buttons = [];
    excelTitle = "Coordinator's Detailed Report";

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
        order: [0, 'desc'],
    });
}

var currentdate = "";
var datetime = "";
var TempUser = "";



function formCordinatoDetailsrReport(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "Coordinator's Detailed Report";

    if (dsp == "formCordinatoDetailsrReport") {

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
        str += '<th>Name</th>';
        str += '<th>Email</th>';
        // str += '<th>Department Name</th>';
        str += '<th>Mobile Number</th>';
        str += '<th>Programme</th>';
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

function setCordinatoDetailsrReport() {

    let degreeOption = "";
    let postData = {
        action: "getCordinatoDetailsrReport",
        userName: dataRep['userId'],
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/report.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#UserTable').empty();
            EmailArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, email) {
                    if (email.userId != "") {
                        let department = "";
                        department += "<tr>";
                        department += "<td >" + email.userName + "</td>";
                        department += "<td >" + email.email + "</td>";
                        department += "<td >" + email.mobile + "</td>";
                        department += "<td >" + email.programmeCode + "</td>";
                        department += "</tr>";
                        $('#UserTable').append(department);
                        count++;
                    }
                });

            }
            DataTableForCordinatoDetailsrReport();
        },
        error: function (error) {
            console.log(error)
        }
    });
}

