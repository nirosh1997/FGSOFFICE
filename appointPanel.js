
function createInterViewShedule() {
    var dataArray = [];

    // Iterate through rows in the table

    Swal.fire({
        icon: 'question',
        title: 'Are you sure?',
        text: 'Do you want schedule?',
        showCancelButton: true,
        confirmButtonText: 'Yes, schedule it!',
        cancelButtonText: 'No, cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            if ($('#panelName').val() != "" && $('#interViewDate').val() != "" && $('#interViewTime').val() != "" && $("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "") {
                $("#vioApplicant tbody tr").each(function () {
                    var rowData = {
                        "Application No": $(this).find("td:eq(0)").text(),
                        "Student Name": $(this).find("td:eq(1)").text(),
                        "Student NIC": $(this).find("td:eq(2)").text(),
                        "Mobile": $(this).find("td:eq(3)").text(),
                        "Email": $(this).find("td:eq(4)").text()
                    };
                    dataArray.push(rowData);
                });

                var jsonData = JSON.stringify(dataArray);

                let formData = new FormData();
                formData.append('action', 'ShedueInterViewAndCreatePanel');
                formData.append('panelName', $('#panelName').val());
                formData.append('interViewDate', $('#interViewDate').val());
                formData.append('interViewTime', $('#interViewTime').val());
                formData.append('degreeCode', $("#selectedDegreeName").val());
                formData.append('academicYear', $("#achedamicYear").val());
                formData.append('stu_Data', jsonData);
                formData.append('authcode', authcode);
                formData.append('username', dataRep['userId']);


                $.ajax({
                    type: 'POST',
                    url: 'rules/applicant.php',
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
                                text: 'Successfully scheduled the interview list!',
                                timer: 5000, // Set a timer for 5 seconds
                                showConfirmButton: true,
                                didClose: () => {
                                    showMenu('appointPanelForm'); setDegrees(); DataTableInterViewAppointForm();
                                }
                            }).then((result) => {
                                if (result.dismiss === Swal.DismissReason.timer) {
                                    showMenu('appointPanelForm'); setDegrees(); DataTableInterViewAppointForm();
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

            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Please Check Form',
                    text: "Please fill all required fields.",
                });
            }
        }
    });


}


function UpdateInterViewShedule() {
    var dataArray = [];

    // Iterate through rows in the table
    Swal.fire({
        icon: 'question',
        title: 'Are you sure?',
        text: 'Do you want update schedule?',
        showCancelButton: true,
        confirmButtonText: 'Yes, update it!',
        cancelButtonText: 'No, cancel'
    }).then((result) => {
        if (result.isConfirmed) {

            if ($('#panelName').val() != "" && $('#interViewDate').val() != "" && $('#interViewTime').val() != "" && $("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "") {
                $("#vioApplicant tbody tr").each(function () {
                    var rowData = {
                        "Application No": $(this).find("td:eq(0)").text(),
                        "Student Name": $(this).find("td:eq(1)").text(),
                        "Student NIC": $(this).find("td:eq(2)").text(),
                        "Mobile": $(this).find("td:eq(3)").text(),
                        "Email": $(this).find("td:eq(4)").text()
                    };
                    dataArray.push(rowData);
                });

                var jsonData = JSON.stringify(dataArray);

                let formData = new FormData();
                formData.append('action', 'ShedueInterViewAndUpdatePanel');
                formData.append('panelName', $('#panelName').val());
                formData.append('panelId', $('#panelId').val());
                formData.append('interViewDate', $('#interViewDate').val());
                formData.append('interViewTime', $('#interViewTime').val());
                formData.append('degreeCode', $("#selectedDegreeName").val());
                formData.append('academicYear', $("#achedamicYear").val());
                formData.append('authcode', authcode);
                formData.append('username', dataRep['userId']);
                formData.append('stu_Data', jsonData);

                $.ajax({
                    type: 'POST',
                    url: 'rules/applicant.php',
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
                                text: 'Successfully updated the scheduled interview list!',
                                timer: 5000, // Set a timer for 5 seconds
                                showConfirmButton: true,
                                didClose: () => {
                                    showMenu('appointPanelForm'); setDegrees(); DataTableInterViewAppointForm();
                                }
                            }).then((result) => {
                                if (result.dismiss === Swal.DismissReason.timer) {
                                    showMenu('appointPanelForm'); setDegrees(); DataTableInterViewAppointForm();
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

            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Please Check Form',
                    text: "Please fill all required fields.",
                });
            }
        }
    });

}

function findApplicantsForInterviewPanel() {
    let getApplicant = {
        action: "data4ApplicantInterviewPanelAppoint",
        degreeCode: $("#selectedDegreeName").val(),
        academicYear: $("#achedamicYear").val(),
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/applicant.php',
        data: getApplicant,
        dataType: 'json',
        success: function (applicant) {
            console.log(applicant);

            if (applicant && applicant.length > 0 && applicant[0].status === 200) {
                let subSet = "<table class='table table-bordered'><tr><th style='width:10%'>Application No</th><th style='width:20%'>Name</th><th style='width:10%'>NIC</th><th></th></tr>";
                if (applicant && applicant.length > 0 && applicant[0].status === 200) {

                    $.each(applicant, function (index, applicantDetails) {
                        let has = false;
                        $("#vioApplicant tbody tr").each(function () {
                            if ($(this).find("td:eq(0)").text() == applicantDetails.applicationNo) {
                                has = true;
                            }
                        });
                        if (!has) {
                            subSet += "<tr class='subTabel" + applicantDetails.studentNIC + "' id='subTabel" + applicantDetails.applicationNo.replace(/\//g, "_") + "'>";
                            subSet += "<td style='width:10%'>" + applicantDetails.applicationNo + "</td>";
                            subSet += "<td style='width:20%'>" + applicantDetails.studentName + "</td>";
                            subSet += "<td style='width:10%;text-align:center'>" + applicantDetails.studentNIC + "</td>";

                            subSet += "<td style='width:10%;text-align:center'><button type='button' onclick=addtoPanelList('" + applicantDetails.applicationNo + "') class='btn btn-success'>Add </button></td>";
                            // subSet += '<td style="width:10%;text-align:center"><button type="button" class="btn btn-success" onclick=addtoPanelList("' + applicantDetails + '")>Add </button></td>';
                            subSet += "</tr>";
                        }


                    });

                    subSet += "</table>";
                    $("#subjectTable").html(subSet);
                }

            }
        },
        error: function (error) {
            console.log(error)

        }
    });
}



function addtoPanelList(applicationNo) {


    let getApplicant = {
        action: "data4ApplicantData",
        applicationNo: applicationNo,
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/applicant.php',
        data: getApplicant,
        dataType: 'json',
        success: function (applicant) {
            if (applicant && applicant.length > 0 && applicant[0].status === 200) {
                if (applicant && applicant.length > 0 && applicant[0].status === 200) {
                    $.each(applicant, function (index, applicantDetails) {
                        let has = false;
                        $("#vioApplicant tbody tr").each(function () {
                            if ($(this).find("td:eq(0)").text() == applicantDetails.applicationNo) {
                                has = true;
                            }
                        });
                        if (!has) {
                            var html = '<tr>';
                            html += '<td>' + applicantDetails.applicationNo + '</td>';
                            html += '<td style="text-wrap: wrap;">' + applicantDetails.studentName + '</td>';
                            html += '<td>' + applicantDetails.studentNIC + '</td>';
                            html += '<td>' + applicantDetails.studentContactMobile + '</td>';
                            html += '<td>' + applicantDetails.studentContactEmail + '</td>';
                            html += '<td><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowInterViewList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                            html += '</tr>';
                            $('#vioApplicant tbody').append(html);
                            $('#subTabel' + applicantDetails.applicationNo.replace(/\//g, "_")).hide();
                        }

                    });
                }

            }
        },
        error: function (error) {
            console.log(error)

        }
    });

}


function openModelAddInterViewApplicantList() {

    if ($("#selectedDegreeName").val() != "" && $("#achedamicYear").val() != "") {
        findApplicantsForInterviewPanel();
        $('#applicantAddInterViewApplicantModel').modal('show');
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Not select Programme',
            text: "Please select relevant programme and academic year",
        });
    }
}

function DataTableInterViewAppointForm() {
    if ($('#interViewShedculeForm')) {
        $('#interViewShedculeForm').submit(function (e) {
            e.preventDefault();
            createInterViewShedule();
        });
    }
    if ($('#interViewShedculeUpdateForm')) {
        $('#interViewShedculeUpdateForm').submit(function (e) {
            e.preventDefault();
            UpdateInterViewShedule();
        });
    }
}


function formAppointPanelForm(dsp, panelId = 0, panelName = "", panelDate = "", panelTime = "") {
    title = "Schedule Interview";
    let str = "";
    let disableField = "";
    if (dsp == "appointPanelForm" || dsp == "appointPanelEditForm") {
        if (dsp == "appointPanelEditForm") {
            console.log(panelName);
            console.log(panelDate);
            console.log(panelTime);
            title = "Edit InterView Panel";
            disableField = "disabled";
        }

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
        if (dsp == "appointPanelEditForm" && panelId != 0) {
            str += '<form id="interViewShedculeUpdateForm">';
        } else {
            str += '<form id="interViewShedculeForm">';

        }
        str += '<div class="row">';

        if (dsp == "appointPanelEditForm" && panelId != 0) {
            str += '<input type="hidden" id="panelId" class="form-control form-control-sm" value="' + panelId + '" required>';
        }

        str += '<div class="col col-md-12">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Programme :</label>';
        str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;" ' + disableField + '>';
        str += '</select>';
        str += '</div>';

        str += '<div class="col col-md-12">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2" >Academic Year :</label>';
        str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;" ' + disableField + '>';
        str += setAcademicYearNewNear();
        str += '</select>';
        str += '</div>';

        str += '<div class="col col-md-12">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Panel Name :</label>';
        str += '<input id="panelName" class="form-control form-control-sm" placeholder="Enter Panel Name" required value="' + panelName + '">';
        str += '</div>';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Interview Date :</label>';
        str += '<input id="interViewDate" class="form-control form-control-sm" type="date" placeholder="Enter Date" required value="' + panelDate + '">';
        str += '</div>';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Time :</label>';
        str += '<input type="time" id="interViewTime" class="form-control form-control-sm" placeholder="Enter Time" required value="' + panelTime + '">';
        str += '</div>';
        str += '</div>';


        str += '<br>';

        str += '<div class="row">';
        str += '<div class="col col-md-12">';
        if (dsp == "appointPanelEditForm" && panelId != 0) {
            str += '<button type="button" class="btn btn-primary" style="float:right" onclick="openModelAddInterViewApplicantList()">Add More Applicant</button>';
        } else {
            str += '<button type="button" class="btn btn-primary" style="float:right" onclick="openModelAddInterViewApplicantList()">Add Applicant</button>';
        }

        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col col-md-12">';
        str += '<br>';

        str += '<table class="table table-bordered" id="vioApplicant">';
        str += '<thead>';
        str += '<tr>';
        str += '<th scope="col">Application No</th>';
        str += '<th scope="col">Name</th>';
        str += '<th scope="col">NIC</th>';
        str += '<th scope="col">Mobile</th>';
        str += '<th scope="col">Email</th>';
        str += '<th scope="col"></th>';
        str += '</tr>';


        str += '</thead>';
        str += '<tbody>';

        if (dsp == "appointPanelEditForm" && panelId != 0) {

            for (var i = 0; i < applicationNoLength; i++) {

                if (applicationNoArr.indexOf(applicationNoArr[i]) == applicationNoArr.lastIndexOf(applicationNoArr[i]) || (applicationNoArr.indexOf(applicationNoArr[i]) != applicationNoArr.lastIndexOf(applicationNoArr[i]) && applicationNoArr.indexOf(applicationNoArr[i]) == i)) {

                    if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

                        str += '<tr>';
                        str += '<td>' + applicationNoArr[i] + '</td>';
                        str += '<td style="text-wrap: wrap;">' + studentNameArr[i] + '</td>';
                        str += '<td>' + studentNICArr[i] + '</td>';
                        str += '<td>' + studentContactMobileArr[i] + '</td>';
                        str += '<td>' + studentContactEmailArr[i] + '</td>';
                        str += '<td><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowInterViewList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                        str += '</tr>';
                    }
                }
            }
        }


        str += '</tbody>';
        str += '</table >';

        str += '</div>';



        str += '<div class="col col-md-12">';
        str += '<div class="col col-md-12">';
        str += '<br>';
        str += '<br>';
        if (dsp == "appointPanelEditForm" && panelId != 0) {
            str += '<button type="submit" class="btn btn-warning" style="float:right">Update Schedule interview</button>';

        } else {
            str += '<button type="submit" class="btn btn-primary" style="float:right">Schedule interview</button>';
        }

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



        str += '<div class="modal fade "  id="applicantAddInterViewApplicantModel" tabindex="-1" role="dialog" aria-labelledby="applicantAddInterViewApplicantModelLabel" aria-hidden="true">';
        str += '<div class="modal-dialog modal-lg" role="document">';
        str += '<div class="modal-content">';
        str += '<div class="modal-header">';
        str += '<h5 class="modal-title" id="applicantAddInterViewApplicantModelLabel">Applicant List</h5>';
        str += '</div>';
        str += '<div class="modal-body" style="overflow-y: scroll;height: 40rem;display: 30rem;">';
        str += '<div class="row">';
        str += '<div class="col col-md-12" id="subjectTable">';
        str += '</div>';

        str += '</div>';
        str += '</div>';
        str += '<div class="modal-footer">';
        str += '<button type="button" class="btn btn-secondary"onclick="closeModelInterViewPanelAppoint()">Okay</button>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
    }
    return str;
}

function closeModelInterViewPanelAppoint() {
    $('#applicantAddInterViewApplicantModel').modal('hide');
}

function deleteRowInterViewList(el) {
    $(el).closest('tr').remove();
}