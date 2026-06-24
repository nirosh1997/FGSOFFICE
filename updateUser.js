function updateUserDetails() {
    var postData = {
        action: "updateuserPrimaryData",
        u_id: dataRep["userId"],
        un: $('#username').val(),
        uemail: $('#useremail').val(),
        umobile: $('#userMobile').val(),
        authcode: authcode,
        username: dataRep['userId'],
        // pw:$('#pw').val()
    };

    if ($('#username').val() != "" && $('#useremail').val() != "" && $('#userMobile').val() != "") {
        // Show confirmation dialog
        Swal.fire({
            icon: 'question',
            title: 'Are you sure?',
            text: 'Do you want to update this user information?',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No, cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // If confirmed, proceed with AJAX request
                $.ajax({
                    type: 'POST',
                    url: 'rules/user.php', // Replace with your server-side script URL
                    data: postData,
                    dataType: 'json',
                    success: function (response) {
                        if (response.status == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully Updated',
                                text: response.message,
                                timer: 5000, // 5 seconds
                                timerProgressBar: true,
                                showConfirmButton: true, // Show OK button
                                allowOutsideClick: false,
                            }).then((result) => {
                                if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                                    logOut();
                                }
                            });


                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Update Failed',
                                text: response.message,
                            });
                        }
                    },
                    error: function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Update Failed',
                            text: 'An error occurred. Please try again later.',
                        });
                    }
                });
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Action Cancelled',
                    text: 'User information update was not completed.',
                });
            }
        });
    } else {
        let missingFields = [];

        if ($('#username').val() == "") {
            missingFields.push("User Name");
        }
        if ($('#useremail').val() == "") {
            missingFields.push("Email");
        }
        if ($('#userMobile').val() == "") {
            missingFields.push("Mobile Number");
        }

        Swal.fire({
            icon: 'warning',
            title: 'Missing Information',
            text: `${missingFields.join(' & ')} cannot be blank.`
        });
    }

}


function updateUserPassword() {
    if ($('#pwn').val() === $('#pwr').val()) {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to update your password?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                var postData = {
                    action: "updateuserpass",
                    u_id: dataRep["userId"],
                    pwold: $('#pwo').val(),
                    pwnew: $('#pwn').val(),
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
                                icon: 'success',
                                title: 'Successfully Updated',
                                text: response.message,
                                timer: 5000, // 5 seconds
                                timerProgressBar: true,
                                showConfirmButton: true, // Show OK button
                                allowOutsideClick: false,
                            }).then((result) => {
                                if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                                    logOut();
                                }
                            });

                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Update Failed',
                                text: response.message,
                            });
                        }
                        $('#pwo').val('');
                        $('#pwn').val('');
                        $('#pwr').val('');
                    },
                    error: function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Update Failed',
                            text: 'An error occurred. Please try again.',
                        });
                    }
                });
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Passwords Do Not Match',
            text: "Please ensure both password fields contain the same entry.",
        });
        $('#pwo').val('');
        $('#pwn').val('');
        $('#pwr').val('');
    }

}





function updateUser() {
    str = "";

    title = "Account Setting";

    str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
    str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
    str += '<ul class="navbar-nav mr-lg-2">';
    str += '<li class="nav-item ml-0">';
    str += '<h4 class="mb-0">' + title + '</h4>';
    str += '</li></ul></div></nav>';



    str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
    str += '<div class="card">';
    str += '<div class="card-body"><h5>Change Primary Data</h5><br><br>';

    str += '<div class="form-group row mb-2"><div class="col-sm-6">';
    str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">University : </label></div>';
    str += '<div class="col-sm-9" style="display: inline-flex;">';
    str += "<input type='text' class='form-control form-control-sm' id='university' name='university' value='University of Kelaniya' disabled>";
    str += '</div></div></div>';

    // str += '<div class="form-group row mb-2"><div class="col-sm-6">';
    // str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Faculty : </label></div>';
    // str += '<div class="col-sm-9" style="display: inline-flex;">';
    // str += "<input type='text' class='form-control form-control-sm' id='search' name='search' value='"+dataRep["facultyTitle1"]+"' disabled>";
    // str += '</div></div></div>';


    str += '<div class="form-group row mb-2"><div class="col-sm-6">';
    str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">User ID : </label></div>';
    str += '<div class="col-sm-9" style="display: inline-flex;">';
    str += "<input type='text' class='form-control form-control-sm' id='uid' name='uid' value='" + dataRep["userId"] + "' disabled>";
    str += '</div></div></div>';

    str += '<div class="form-group row mb-2"><div class="col-sm-6">';
    str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Name : </label></div>';
    str += '<div class="col-sm-9" style="display: inline-flex;">';
    str += "<input type='text' class='form-control form-control-sm' id='username' name='username' value='" + dataRep["userName"] + "'>";
    str += '</div></div></div>';

    str += '<div class="form-group row mb-2"><div class="col-sm-6">';
    str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Mobile : </label></div>';
    str += '<div class="col-sm-9" style="display: inline-flex;">';
    str += "<input type='text' class='form-control form-control-sm' id='userMobile' name='userMobile' value='" + dataRep["userMobile"] + "'>";
    str += '</div></div></div>';

    str += '<div class="form-group row mb-2"><div class="col-sm-6">';
    str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Email : </label></div>';
    str += '<div class="col-sm-9" style="display: inline-flex;">';
    str += "<input type='text' class='form-control form-control-sm' id='useremail' name='useremail' value='" + dataRep["userEmail"] + "'>";
    str += '</div></div></div>';
    str += '<button type="button" class="btn btn-info mr-2" style="float:right" onclick="updateUserDetails();">Update Primary Data</button>';

    str += "<br><hr><br><h5>Change Password</h5><br>"

    // str += '<div class="form-group row mb-2"><div class="col-sm-6">';
    // str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Current Password : </label></div>';
    // str += '<div class="col-sm-9" style="display: inline-flex;">';
    // str += "<input type='password' class='form-control form-control-sm' id='pwo' name='pwo' >";
    // str += '</div></div></div>';
    // str += '<div class="form-group row mb-2"><div class="col-sm-6">';
    // str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">New Password : </label></div>';
    // str += '<div class="col-sm-9" style="display: inline-flex;">';
    // str += "<input type='password' class='form-control form-control-sm' id='pwn' name='pwn' >";
    // str += '</div></div></div>';
    // str += '<div class="form-group row mb-2"><div class="col-sm-6">';
    // str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Re-Enter Password : </label></div>';
    // str += '<div class="col-sm-9" style="display: inline-flex;">';
    // str += "<input type='password' class='form-control form-control-sm' id='pwr' name='pwr' >";
    // str += '</div></div></div>';
    str += "<p>If you want to change your password, please click 'Change Password' to continue.<br>";

    str += "Please note that you should have a working username/password combination to use this feature.</p><br>";
    str += '<a href="https://sspr.kln.ac.lk/Password/Change" traget="_blank" class="btn btn-warning mr-2" style="float:left">Change Password</button>';


    document.getElementById("formArea").innerHTML = str;
}