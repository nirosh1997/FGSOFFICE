var applicantDTable;
function DataTableForProgrameType() {

    var buttons = [];


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
        order: [1, 'asc'],
    });




}

var currentdate = "";
var datetime = "";
var TempUser = "";





function formAddViewProgrameType(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "Programe Type Managment";

    if (dsp == "formAddViewProgrameType") {

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
        str += '<div class="col-sm-8 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Programme Type Code</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="ProgrameTypeCode" maxlength="10">';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col-sm-8 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Programme Type Name</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="ProgrameTypeTitle" maxlength="50">';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col-sm-8" style="display: inline-flex;">';
        str += '<div class="col-sm-9"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="createProgrameType();">Create Programme Type</button></div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';


        str += '</div></div>';
        str += '</div></div></div>';

        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="applicantTable">';
        str += '<thead><tr>';
        str += '<th>Programme Type Code</th>';
        str += '<th>Programme Type</th>';
        str += '<th></th>';
        str += '<th></th>';
        str += '</tr></thead>';
        str += '<tbody id="departmentTable">';

        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';


    }

    return str;
}


var programeTypeArray = new Array();
function setProgrameType() {

    let degreeOption = "";
    let postData = {
        action: "getProgrameType",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/programeType.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#departmentTable').empty();
            programeTypeArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, programmeType) {
                    if (programmeType.departmentCode != "") {
                        programeTypeArray[count] = [programmeType.programmeTypeCode, programmeType.programmeTypeTitle];

                        let department = "";
                        department += "<tr>";
                        department += "<td >" + programmeType.programmeTypeCode + "</td>";
                        department += "<td >" + programmeType.programmeTypeTitle + "</td>";
                        department += "<td width='5%' ><button class='btn btn-warning  btn-sm' style='color:#fff' onclick=updateProgrameType('" + count + "')>Update</button></td>";
                        department += "<td width='5%' '><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteProgrameType('" + count + "')>Delete</button></td>";
                        department += "</tr>";
                        $('#departmentTable').append(department);
                        count++;
                    }
                });

            }
            DataTableForDepartment();
        },
        error: function (error) {
            console.log(error)
        }
    });
}


function createProgrameType() {
    var postData = {
        action: "CreateProgrameType",
        universityCode: "KLN",
        programmeTypeCode: $("#ProgrameTypeCode").val(),
        programmeTypeTitle: $("#ProgrameTypeTitle").val(),
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/programeType.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            if (response.status == 200) {
                Swal.fire({
                    title: "Created!",
                    text: "Programme Type has been created.",
                    icon: "success"
                });
                showMenu('formAddViewProgrameType');
                setProgrameType();

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
                text: error,
            });
        }
    });



}


function deleteProgrameType(i) {
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
                action: "DeleteProgrameType",
                universityCode: "KLN",
                programmeTypeCode: programeTypeArray[i][0],
                programmeTypeTitle: programeTypeArray[i][1],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/programeType.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Programme Type has been deleted.",
                            icon: "success"
                        });
                        showMenu('formAddViewProgrameType');
                        setProgrameType();

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
                        text: error,
                    });
                }
            });

        }
    });
}


function updateProgrameType(i) {
    Swal.fire({
        title: 'Update Department',
        html:
            '<form>' +
            '<div class="row mb-3">' +
            '  <label for="faCode" class="col-sm-12 col-form-label" style="font-size: 14px;text-align:left"><b>Programme Type Code:</b> ' + programeTypeArray[i][0] + '</label>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label for="deName" class="col-sm-5 col-form-label" style="font-size: 14px;text-align:left"><b>Programme Type:</b></label>' +
            '  <div class="col-sm-7">' +
            '    <input type="tel" class="form-control form-control-sm" id="proTypeName" placeholder="Enter Programme Type" required value="' + programeTypeArray[i][1] + '">' +
            '  </div>' +
            '</div>' +

            '</form>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Update',
        preConfirm: () => {
            const proTypeName = Swal.getPopup().querySelector('#proTypeName').value;
            // Check if the message is longer than 1400 characters
            if (proTypeName.length <= 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Programme Type Name Required',
                    text: "Programme Type name can't be a blank.",
                });
            } else {
                //ajax update
                var postData = {
                    action: "updateProgrameType",
                    universityCode: "KLN",
                    programmeTypeCode: programeTypeArray[i][0],
                    programmeTypeTitle: proTypeName,
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                $.ajax({
                    type: 'POST',
                    url: 'rules/programeType.php', // Replace with your server-side script URL
                    data: postData,
                    dataType: 'json',
                    success: function (response) {
                        if (response.status == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Updated',
                                text: response.message,
                            });
                            showMenu('formAddViewProgrameType');
                            setProgrameType();

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
                            text: error,
                        });
                    }
                });




            }
        }
    });
}