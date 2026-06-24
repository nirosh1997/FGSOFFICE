var applicantDTable;
function DataTableForUser() {
    var buttons = [];
    applicantDTable = $('#applicantTable').DataTable({
        dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
            "<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
            "<'row'<'col-12't>>" + // Table in a single line
            "<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
        buttons: buttons,
        order: [1, 'asc'],
    });
}

var currentdate = "";
var datetime = "";
var TempUser = "";



function formAddViewUser(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "User Managment";

    if (dsp == "formAddViewUsers") {

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
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Role Name</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedRoleName">';
        // str += await setDegrees();
        str += '</select>';
        str += '</div>';
        str += '</div>';
        str += '</div>';


        str += '<div class="row mb-3">';
        str += '<div class="col col-md-6">';
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Assign to :</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedofferingBy" onchange="hideUserDepartments()">';
        str += '<option value="a" selected>All</option>';
        str += '<option value="f">BoS</option>';
        str += '<option value="d">Department</option>';
        str += '<option value="p">Programme</option>';
        str += '</select>';
        str += '</div>';
        str += '</div>';
        str += '</div>';


        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3" id="selecteFacultyDiv" style="display:none">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">BoS</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedFacultyName" onchange="setDepartmentFacutlyWise();setProgrammeFacultyWise();">';
        str += '</select>';
        str += '</div>';
        str += '</div>';

        str += '</div>';





        //4343
        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3" style="display:none" id="selectedDepartmentDiv">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Department</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedDepartmentName">';
        str += '</select>';
        str += '</div>';
        str += '</div>';
        str += '</div>';


        //4343422
        str += '<div class="row" style="display:none" id="selectedProgrammeDiv">';
        str += '<div class="col-sm-6 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Programme One</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        // str += '<select class="form-control form-control-sm" id="selectedProgrammesName1">';
        // str += '</select>';
        str += '<select class="selectedProgrammesName1" name="states[]" multiple="multiple" id="selectedProgrammesName1">';
        // str += '<option value="AL">Alabama</option>';
        // str += '<option value="WY">Wyoming</option>';
        str += '</select>';
        str += '</div>';
        str += '</div>';



        str += '</div>';





        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Name</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="fullName">';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">User Name <span style="color:#ff4747">*use kln email first part as user id </span></label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="username">';
        str += '</div>';
        str += '</div>';

        // str += '<div class="col-sm-6 mb-3">'
        // str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Password</label></div>';
        // str += '<div class="col-sm-6" style="display: inline-flex;">';
        // str += '<input type="password" class="form-control" id="departmentTitle">';
        // str += '</div>';
        // str += '</div>';
        str += '</div>';



        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Mobile</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="userMobile">';
        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-6 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Email</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="email" class="form-control" id="userEmail">';
        str += '</div>';
        str += '</div>';

        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3">'
        str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Expiration Date</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="date" class="form-control" id="userExpireDate">';
        str += '</div>';
        str += '</div>';
        str += '</div>';






        str += '<div class="row">';
        str += '<div class="col-sm-12" style="display: inline-flex;">';
        str += '<div class="col-sm-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="createUserAcc();">Create User</button></div>';
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
        str += '<th>User Id</th>';
        str += '<th>User Name</th>';
        // str += '<th>Department Name</th>';
        str += '<th>Role Name</th>';
        str += '<th>Faculty</th>';
        str += '<th>Department</th>';
        str += '<th>Active Programs</th>';
        str += '<th>Created Date</th>';
        str += '<th>Expire Date</th>';
        str += '<th>Status</th>';
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


function setProgrammeFacultyWise() {

    let degreeOption = "";
    let postData = {
        action: "geProgrammeFacutlyWise",
        facultyCode: $("#selectedFacultyName option:selected").val(),
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/department.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            if (response && response.length > 0) {
                $('#selectedProgrammesName1').empty();
                $.each(response, function (index, programme) {
                    if (programme.departmentCode !== "") {
                        $('#selectedProgrammesName1').append(
                            new Option(programme.degreeTitle, programme.degreeCode)
                        );
                    }
                });
                $('#selectedProgrammesName1').select2();

            } else {
                $('#selectedProgrammesName1').empty().append("<option value='0'>No Programmes Available</option>").select2();
            }
        },
        error: function (error) {
            console.log(error)
        }
    });
}




function hideUserDepartments() {
    if ($("#selectedofferingBy option:selected").val() == "d") {
        $("#selectedDepartmentDiv").show();
        $("#selectedProgrammeDiv").hide();
        $("#selecteFacultyDiv").show();
    } else if ($("#selectedofferingBy option:selected").val() == "p") {
        $("#selectedDepartmentDiv").hide();
        $("#selectedProgrammeDiv").show();
        $("#selecteFacultyDiv").show();
    } else if ($("#selectedofferingBy option:selected").val() == "f") {
        $("#selectedDepartmentDiv").hide();
        $("#selectedProgrammeDiv").hide();
        $("#selecteFacultyDiv").show();
    } else if ($("#selectedofferingBy option:selected").val() == "a") {
        $("#selectedDepartmentDiv").hide();
        $("#selectedProgrammeDiv").hide();
        $("#selecteFacultyDiv").hide();
    }
}


function setFacultysForUsers() {

    let degreeOption = "";
    let postData = {
        action: "getFacult",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/degree.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            if (response && response.length > 0) {
                let faculty = "";
                $.each(response, function (index, facult) {
                    if (facult.facultyCode != "") {
                        faculty += "<option " + ((dataRep["facultyCode"] == "") ? "selected" : "") + " value='" + facult.facultyCode + "'>" + facult.facultyTitle + "</option>";
                    }
                });
                $('#selectedFacultyName').empty();
                $('#selectedFacultyName').append(faculty);
                if ($('#selectedDepartmentName')) {
                    setDepartmentFacutlyWise();
                    setProgrammeFacultyWise();
                }
            }
        },
        error: function (error) {
            console.log(error)
        }
    });
}

var UserArray = new Array();
function setUserCreate() {

    let degreeOption = "";
    let postData = {
        action: "getUsers",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/user.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#UserTable').empty();
            UserArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, users) {
                    if (users.userId != "") {
                        UserArray[count] = [users.userId, users.userName, users.universityCode, users.facultyCode,
                        users.departmentCode, users.programmeCode, users.roleId, users.roleName,
                        users.assignedBy, users.position, users.createDateTime, users.expirationDate, , users.email, users.mobile
                        ];
                        let department = "";
                        department += "<tr>";
                        department += "<td >" + users.userId + "</td>";
                        department += "<td >" + users.userName + "</td>";
                        department += "<td >" + users.roleName + "</td>";
                        if (users.facultyTitle == null) {
                            department += "<td >All</td>";
                        } else {
                            department += "<td >" + users.facultyTitle + "</td>";
                        }
                        if (users.departmentTitle == null) {
                            department += "<td >All</td>";
                        } else {
                            department += "<td >" + users.departmentTitle + "</td>";
                        }
                        department += "<td >" + users.programmeCode + "</td>";
                        department += "<td >" + users.createDateTime + "</td>";
                        department += "<td >" + users.expirationDate + "</td>";
                        if (users.active == 1) {
                            department += "<td >Active</td>";
                        } else {
                            department += "<td >Disable</td>";
                        }
                        // department += "<td width='5%' ><button class='btn btn-warning  btn-sm' style='color:#fff' onclick=updateDepartment('" + count + "')>Update</button></td>";
                        if (users.active == 0) {
                            department += "<td width='5%' '><button class='btn btn-success btn-sm' style='color:#fff'  onclick=ActiveUser('" + count + "')>Activate Account</button></td>";
                        } else {
                            department += "<td width='5%' '><button class='btn btn-warning btn-sm' style='color:#fff'  onclick=DisabelUser('" + count + "')>Deactivate Account</button></td>";
                        }
                        department += "<td width='5%' '><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteUser('" + count + "')>Delete</button></td>";

                        department += "</tr>";
                        $('#UserTable').append(department);
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


function createUserAcc() {


    let name = $('#fullName').val();
    let userName = $('#username').val();
    let mobile = $('#userMobile').val();
    let email = $('#userEmail').val();
    let expireDate = $('#userExpireDate').val();

    if (name && userName && mobile && email && expireDate) {



        var postData = {
            action: "CreateUser",
            role: $("#selectedRoleName option:selected").val(),
            offerdBy: $("#selectedofferingBy option:selected").val(),
            facultyCode: $("#selectedFacultyName option:selected").val(),
            departmentCode: $("#selectedDepartmentName option:selected").val(),
            programme: $("#selectedProgrammesName1").val(),
            name: name,
            userID: userName,
            mobile: mobile,
            email: email,
            expireDate: expireDate,
            roleName: dataRep['roleName'],
            assignuserName: dataRep['userName'],
            authcode: authcode,
            username: dataRep['userId'],
        };


        $.ajax({
            type: 'POST',
            url: 'rules/user.php', // Replace with your server-side script URL
            data: postData,
            dataType: 'json',
            success: function (response) {
                console.log(response)
                if (response.status == 200) {
                    Swal.fire({
                        title: "Created!",
                        text: "User has been created.",
                        icon: "success"
                    });
                    let pw = response.pw;


                    const completeMessagesend = "Your FGS MIS account has been created. Please check your email. ";
                    sendDirectSMS(mobileNumberValid(mobile), completeMessagesend);


                    let subject = "FGS MIS | Account Login";
                    let body = "Dear " + name + ",<br><br> We are pleased to inform you that your FGS Management Information System (MIS) account has been successfully created. Please note the following login credentials:";
                    body += "<p><b>Username :</b> Use the first part of your Kelaniya email address (e.g., &quot;dasuni&quot; from dasuni@kln.ac.lk)";
                    body += "<p><b>Password :</b> Use the same password you currently have to log in to your KLN email account";
                    body += "<br><p>By following these instructions, you will be able to access the new FGS MIS platform.</p><br>";
                    body += "<p>Following these instructions will allow you to access the FGS MIS platform. The new user ";
                    body += "manuals for new interfaces and processes are available in the MIS (download section) for ";
                    body += "your reference, and you may download them as needed. If you require further clarification, ";
                    body += "please contact Ms. Poornima at 011-2903953</p><br>";

                    body += "<a href='" + baseUrl + "/staff' style='display: block; text-align: center; font-weight: 500; padding: 12px 20px; background: #c0392b; border-radius: 3px; color: #eee; font-size: 14px; text-decoration: none; margin: 20px 10px 20px 0;width: 200px;'>Click Here to Login</a>";

                    body += "<br>This is a system generated email.<br><br>Thank you.<br><br>Best Regards,<br>FGS/MIS Team";

                    sendDirectEmail("fgs@kln.ac.lk", "FGS MIS", email, subject, body)


                    showMenu('formAddViewUsers');
                    //     setFacultys();
                    //     setDepartment();
                    setFacultysForUsers();
                    setRoles();
                    setUserCreate();

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'username already have',
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
                console.log(error)
            }
        });

    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill in all the required fields.',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
    }


}


function setRoles() {

    let degreeOption = "";
    let postData = {
        action: "getRoles",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/user.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            if (response && response.length > 0) {
                let role = "";
                $.each(response, function (index, facult) {
                    if (facult.facultyCode != "") {
                        role += "<option " + ((dataRep["roleId"] == "") ? "selected" : "") + " value='" + facult.roleId + "'>" + facult.roleName + "</option>";
                    }
                });
                $('#selectedRoleName').empty();
                $('#selectedRoleName').append(role);

            }
        },
        error: function (error) {
            console.log(error)
        }
    });
}


function deleteUser(i) {
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
                action: "DeleteUser",
                userId: UserArray[i][0],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/user.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        showMenu('formAddViewUsers');
                        //     setFacultys();
                        //     setDepartment();
                        setFacultysForUsers();
                        setRoles();
                        setUserCreate();

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed2',
                            text: response.message,
                        });
                    }
                },
                error: function (error) {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed1',
                        text: error.message,
                    });
                }
            });

        }
    });
}

function ActiveUser(i) {
    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to activate this account?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Active it!"
    }).then((result) => {
        if (result.isConfirmed) {
            var postData = {
                action: "ActiveUser",
                userId: UserArray[i][0],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/user.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Activated!",
                            text: "The user has been successfully activated.",
                            icon: "success"
                        });
                        showMenu('formAddViewUsers');
                        //     setFacultys();
                        //     setDepartment();
                        setFacultysForUsers();
                        setRoles();
                        setUserCreate();

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed',
                            text: response.message,
                        });
                    }
                },
                error: function (error) {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed',
                        text: error.message,
                    });
                }
            });

        }
    });
}

function DisabelUser(i) {
    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to deactivate this account?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            var postData = {
                action: "DisabelUser",
                userId: UserArray[i][0],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/user.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Deactivated!",
                            text: "The user has been successfully deactivated.",
                            icon: "success"
                        });
                        showMenu('formAddViewUsers');
                        //     setFacultys();
                        //     setDepartment();
                        setFacultysForUsers();
                        setRoles();
                        setUserCreate();

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed2',
                            text: response.message,
                        });
                    }
                },
                error: function (error) {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed1',
                        text: error.message,
                    });
                }
            });

        }
    });
}


// function updateDepartment(i) {
//     Swal.fire({
//         title: 'Update Department',
//         html:
//             '<form>' +
//             '<div class="row mb-3">' +
//             '  <label for="faCode" class="col-sm-12 col-form-label" style="font-size: 14px;text-align:left"><b>Faculty Code:</b> ' + departmentArray[i][0] + '</label>' +
//             '</div>' +
//             '<div class="row mb-3">' +
//             '  <label for="faName" class="col-sm-12 col-form-label" style="font-size: 14px;text-align:left"><b>Faculty Name:</b> ' + departmentArray[i][1] + '</label>' +
//             '</div>' +
//             '<div class="row mb-3">' +
//             '  <label for="deCode" class="col-sm-12 col-form-label" style="font-size: 14px;text-align:left"><b>Department Code:</b> ' + departmentArray[i][2] + '</label>' +
//             '</div>' +
//             '<div class="row mb-3">' +
//             '  <label for="deName" class="col-sm-4 col-form-label" style="font-size: 14px;text-align:left"><b>Department Name:</b></label>' +
//             '  <div class="col-sm-8">' +
//             '    <input type="tel" class="form-control form-control-sm" id="depName" placeholder="Enter Department Name" required value="' + departmentArray[i][3] + '">' +
//             '  </div>' +
//             '</div>' +

//             '</form>',
//         focusConfirm: false,
//         showCancelButton: true,
//         confirmButtonText: 'Update',
//         preConfirm: () => {
//             const departmentName = Swal.getPopup().querySelector('#depName').value;
//             // Check if the message is longer than 1400 characters
//             if (departmentName.length <= 0) {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Department Name Required',
//                     text: "Department name cant be a blank.",
//                 });
//             } else {
//                 //ajax update
//                 var postData = {
//                     action: "updateDepartment",
//                     universityCode: "KLN",
//                     facultyCode: departmentArray[i][0],
//                     departmentCode: departmentArray[i][2],
//                     departmentTitle: departmentName
//                 };

//                 $.ajax({
//                     type: 'POST',
//                     url: 'rules/department.php', // Replace with your server-side script URL
//                     data: postData,
//                     dataType: 'json',
//                     success: function (response) {
//                         if (response.status == 200) {
//                             Swal.fire({
//                                 icon: 'success',
//                                 title: 'Successfully Updated',
//                                 text: response.message,
//                             });
//                             showMenu('formAddViewDepartment');
//                             setFacultys();
//                             setDepartment();

//                         } else {
//                             Swal.fire({
//                                 icon: 'error',
//                                 title: 'Updated Failed',
//                                 text: response.message,
//                             });
//                         }
//                     },
//                     error: function (error) {
//                         Swal.fire({
//                             icon: 'error',
//                             title: 'Updated Failed',
//                             text: error,
//                         });
//                     }
//                 });




//             }
//         }
//     });
// }