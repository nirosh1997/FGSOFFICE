var applicantDTable;
function DataTableForEmailLog() {
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



function formEmailLog(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "Email Log";

    if (dsp == "formEmailLog" || dsp == "formMyEmailLog") {
        if( dsp == "formMyEmailLog"){
            title = "My Emails";
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
        str += '<th>Sender Email</th>';
        str += '<th>Send By</th>';
        str += '<th>Subject</th>';
        str += '<th>Date</th>';
        // str += '<th></th>';
        str += '<th></th>';
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




var EmailArray = new Array();
function setEmailLog() {

    let degreeOption = "";
    let postData = {
        action: "getEmailLog",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/emaillog.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#UserTable').empty();
            EmailArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, email) {
                    if (email.userId != "") {
                        EmailArray[count] = [
                            email.ref_no,
                            email.eid,
                            email.efrom,
                            email.senderName,
                            email.esubject,
                            email.etext,
                            email.eattachments,
                            email.date
                        ];
                        let department = "";
                        department += "<tr>";
                        department += "<td >" + email.ref_no + "</td>";
                        department += "<td >" + email.eid + "</td>";
                        department += "<td >" + email.efrom + "</td>";
                        department += "<td >" + email.senderName + "</td>";
                        department += "<td >" + email.esubject + "</td>";
                        department += "<td >" + email.date + "</td>";
                        department += "<td width='5%' '><button class='btn btn-warning btn-sm' style='color:#fff'  onclick=viewEmailList('" + email.ref_no + "')>View Contact List</button></td>";
                        department += "<td width='5%' '><button class='btn btn-success btn-sm' style='color:#fff'  onclick=viewEmailContent('" + count + "')>View Email</button></td>";
                        department += "</tr>";
                        $('#UserTable').append(department);
                        count++;
                    }
                });

            }
            DataTableForEmailLog();
        },
        error: function (error) {
            console.log(error)
        }
    });
}

function setMyEmailLog() {

    let degreeOption = "";
    let postData = {
        action: "getEmailLogMy",
        userName: dataRep['userId'],
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/emaillog.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#UserTable').empty();
            EmailArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, email) {
                    if (email.userId != "") {
                        EmailArray[count] = [
                            email.ref_no,
                            email.eid,
                            email.efrom,
                            email.senderName,
                            email.esubject,
                            email.etext,
                            email.eattachments,
                            email.date
                        ];
                        let department = "";
                        department += "<tr>";
                        department += "<td >" + email.ref_no + "</td>";
                        department += "<td >" + email.eid + "</td>";
                        department += "<td >" + email.efrom + "</td>";
                        department += "<td >" + email.senderName + "</td>";
                        department += "<td >" + email.esubject + "</td>";
                        department += "<td >" + email.date + "</td>";
                        department += "<td width='5%' '><button class='btn btn-warning btn-sm' style='color:#fff'  onclick=viewEmailList('" + email.ref_no + "')>View Contact List</button></td>";
                        department += "<td width='5%' '><button class='btn btn-success btn-sm' style='color:#fff'  onclick=viewEmailContent('" + count + "')>View Email</button></td>";
                        department += "</tr>";
                        $('#UserTable').append(department);
                        count++;
                    }
                });

            }
            DataTableForEmailLog();
        },
        error: function (error) {
            console.log(error)
        }
    });
}

// Swal.fire({
//     title: "Download Files",
//     html: files.map((file, index) => `
//         <button onclick="downloadFile(${index})" class="swal2-confirm swal2-styled">${file.filename}</button>
//     `).join("<br>"),
//     showCloseButton: true,
//     showConfirmButton: false
// });

function viewEmailList(refNo) {
    let degreeOption = "";
    let postData = {
        action: "getEmailContact",
        campId: refNo,
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/emaillog.php',
        data: postData,
        dataType: 'json',
        success: function (response) {           
            if (response && response.length > 0) { 
                let emailList = "<ul>";
                let count = 1;
                $.each(response, function (index, email) {
                    emailList += "<li  style='text-align:left'>"+(count++)+") "+email.eto+"</li>";
                });
                emailList += "</ul>";
                Swal.fire({
                    // title: EmailArray[count][4],
                    html: "<h4 style='text-align:left'>Email List</h4><br>" + emailList,
                    confirmButtonText: 'OK',
                    allowOutsideClick: true,
                    allowEscapeKey: true,
                   
                });
            }
        }
    });


}


function viewEmailContent(count) {
    let attchment = "";
    if(EmailArray[count][6]){
        let obj = JSON.parse(JSON.parse(EmailArray[count][6]));
     attchment = obj.map((file, index) => `
            <li><a onclick="downloadFile(${count},${index})" class="" style="float:left;cursor:pointer">${file.filename}</a></li>
       `).join("<br>");
    }
        Swal.fire({
            // title: EmailArray[count][4],
            html: "<h4 style='text-align:left'>Subject : " + EmailArray[count][4] + "</h4><br>" + EmailArray[count][5]+"<br><br><span style='float:left'>Attachment : </span><br><ul>"+attchment+"</ul>",
            confirmButtonText: 'OK',
            allowOutsideClick: false,
            allowEscapeKey: false,
            customClass: {
                popup: 'swal-wide' // Custom class to control size
            }
        });
}

function downloadFile(count,index) {
    let files = JSON.parse(JSON.parse(EmailArray[count][6]));

    let file = files[index];
    let byteCharacters = atob(file.content);
    let byteNumbers = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    let blob = new Blob([byteNumbers], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });

    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = file.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}