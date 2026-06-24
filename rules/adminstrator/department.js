var applicantDTable;
function DataTableForDepartment() {

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





function formAddViewDepartment(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "Department Managment";

    if (dsp == "formAddViewDepartment") {

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

        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Faculty</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedFacultyName">';
        // str += await setDegrees();
        str += '</select>';
        str += '</div></div></div>';

        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Department Code</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="departmentCode">';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Department Title</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="departmentTitle">';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col-sm-9" style="display: inline-flex;">';
        str += '<div class="col-sm-6"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="createDepartment();">Create Department</button></div>';
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
        str += '<th>Faculty</th>';
        str += '<th>Department Code</th>';
        str += '<th>Department Name</th>';
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


var departmentArray = new Array();
function setDepartment() {

    let degreeOption = "";
    let postData = {
        action: "getDepartment",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/department.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#departmentTable').empty();
            departmentArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, departments) {
                    if (departments.departmentCode != "") {
                        departmentArray[count] = [departments.facultyCode, departments.facultyTitle, departments.departmentCode, departments.departmentTitle];


                        let department = "";
                        department += "<tr>";
                        department += "<td >" + departments.facultyTitle + "</td>";
                        department += "<td >" + departments.departmentCode + "</td>";
                        department += "<td >" + departments.departmentTitle + "</td>";
                        department += "<td width='5%' ><button class='btn btn-warning  btn-sm' style='color:#fff' onclick=updateDepartment('" + count + "')>Update</button></td>";
                        department += "<td width='5%' '><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteDepartment('" + count + "')>Delete</button></td>";
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


function createDepartment() {
    var postData = {
        action: "CreateDepartment",
        universityCode: "KLN",
        facultyCode: $("#selectedFacultyName option:selected").val(),
        departmentCode: $("#departmentCode").val(),
        departmentTitle: $("#departmentTitle").val(),
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/department.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            if (response.status == 200) {
                Swal.fire({
                    title: "Created!",
                    text: "Department has been created.",
                    icon: "success"
                });
                showMenu('formAddViewDepartment');
                setFacultys();
                setDepartment();

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


function deleteDepartment(i) {
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
                action: "DeleteDepartment",
                universityCode: "KLN",
                facultyCode: departmentArray[i][0],
                departmentCode: departmentArray[i][2],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/department.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Department has been deleted.",
                            icon: "success"
                        });
                        showMenu('formAddViewDepartment');
                        setFacultys();
                        setDepartment();

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


function updateDepartment(i) {
    Swal.fire({
        title: 'Update Department',
        html:
            '<form>' +
            '<div class="row mb-3">' +
            '  <label for="faCode" class="col-sm-12 col-form-label" style="font-size: 14px;text-align:left"><b>Faculty Code:</b> ' + departmentArray[i][0] + '</label>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label for="faName" class="col-sm-12 col-form-label" style="font-size: 14px;text-align:left"><b>Faculty Name:</b> ' + departmentArray[i][1] + '</label>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label for="deCode" class="col-sm-12 col-form-label" style="font-size: 14px;text-align:left"><b>Department Code:</b> ' + departmentArray[i][2] + '</label>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label for="deName" class="col-sm-4 col-form-label" style="font-size: 14px;text-align:left"><b>Department Name:</b></label>' +
            '  <div class="col-sm-8">' +
            '    <input type="tel" class="form-control form-control-sm" id="depName" placeholder="Enter Department Name" required value="' + departmentArray[i][3] + '">' +
            '  </div>' +
            '</div>' +

            '</form>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Update',
        preConfirm: () => {
            const departmentName = Swal.getPopup().querySelector('#depName').value;
            // Check if the message is longer than 1400 characters
            if (departmentName.length <= 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Department Name Required',
                    text: "Department name cant be a blank.",
                });
            } else {
                //ajax update
                var postData = {
                    action: "updateDepartment",
                    universityCode: "KLN",
                    facultyCode: departmentArray[i][0],
                    departmentCode: departmentArray[i][2],
                    departmentTitle: departmentName,
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                $.ajax({
                    type: 'POST',
                    url: 'rules/department.php', // Replace with your server-side script URL
                    data: postData,
                    dataType: 'json',
                    success: function (response) {
                        if (response.status == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Updated',
                                text: response.message,
                            });
                            showMenu('formAddViewDepartment');
                            setFacultys();
                            setDepartment();

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