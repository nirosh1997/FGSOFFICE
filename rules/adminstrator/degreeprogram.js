function hideDepartment() {
    if ($("#selectedofferingBy option:selected").val() == "f") {
        $("#selectedDepartmentNameDiv").hide()
    } else if ($("#selectedofferingBy option:selected").val() == "d") {
        $("#selectedDepartmentNameDiv").show()

    }
}



function formAddViewDegreeProgramme(dsp) {
    title = "Degree Programme";
    let str = "";
    if (dsp == "formAddViewDegreeProgramme") {

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


        str += '<div class="col-md-9" style="margin:auto">';

        str += '<div class="row">';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Offering By :</label>';
        str += '<select class="form-control form-control-sm" id="selectedofferingBy" onchange="hideDepartment()">';
        str += '<option value="f">Faculty</option>';
        str += '<option value="d">Department</option>';
        str += '</select>';
        str += '</div>';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Faculty :</label>';
        str += '<select class="form-control form-control-sm" id="selectedFacultyName" onchange="setDepartmentFacutlyWise()">';
        str += '</select>';
        str += '</div>';

        str += '<div class="col col-md-6"  id="selectedDepartmentNameDiv" style="display:none">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Department :</label>';
        str += '<select class="form-control form-control-sm" id="selectedDepartmentName">';
        str += '</select>';
        str += '</div>';


        str += '</div>';


        str += '<div class="row">';
        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Type :</label>';
        str += '<select class="form-control form-control-sm" id="selectedDegreeType">';
        str += '</select>';
        str += '</div>';

        str += '</div>';

        str += '<div class="row">';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Degree Code :</label>';
        str += '<input id="OlddegreeCode" class="form-control form-control-sm" placeholder="Enter Degree Code (ex: MALING1)" type="hidden">';
        str += '<input id="degreeCode" class="form-control form-control-sm" placeholder="Enter Degree Code (ex: MALING1)" required>';
        str += '</div>';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Degree Title :</label>';
        str += '<input id="degreeTitle" class="form-control form-control-sm" placeholder="Enter Degree Title (ex: Master of Arts in Linguistics - One Year)" required>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Income Source Code :</label>';
        str += '<input id="IncomeSourceCode" class="form-control form-control-sm" placeholder="Enter Income Source Code (ex: 014)" required>';
        str += '</div>';
        str += '</div>';
        str += '<div class="row">';
        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Entry SLQF level :</label>';
        str += '<select id="slql" class="form-control form-control-sm" required><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option> </select>';
        str += '</div>';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Exit SLQF level :</label>';
        str += '<select id="exitslql" class="form-control form-control-sm" required><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option> </select>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';

        // str += '<div class="col col-md-6">';
        // str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Academic Year :</label>';
        // str += '<select class="form-control form-control-sm" id="selectedAcademicYear">';          
        // str += setAcademicYearNew();
        // str += '</select>';        
        // str += '</div>';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Duration :</label>';
        str += '<input id="degreeDuration" class="form-control form-control-sm" placeholder="Enter Duration (1 year, 2 year)" required>';
        str += '</div>';

        str += '<div class="col col-md-6">';

        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Medium :</label>';
        str += '<select class="form-control form-control-sm" id="selectedmedium">';
        str += '<option value="Sin/Eng">Sinhala and English</option>';
        str += '<option value="Sin">Sinhala</option>';
        str += '<option value="Eng">English</option>';
        str += '<option value="Jap">Japanese</option>';
        str += '</select>';
        str += '</div>';
        str += '</div>';


        str += '<div class="row">';
        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Library Programe Code :</label>';
        str += '<input id="NewLibProgrammeCode" class="form-control form-control-sm" placeholder="Enter Library Programe Code (MS,MA,MC)" required>';
        str += '</div>';

        str += '<div class="col col-md-6">';
        str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Library Degree Code :</label>';
        str += '<input id="NewLibDegreeCode" class="form-control form-control-sm" placeholder="Enter Library Degree Code (BU,CH,DA)" required>';
        str += '</div>';
        str += '<br>';

        str += '<div class="col-sm-12">';
        str += '<div class="col-sm-12" style="display: inline-flex;"><label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Admission Criteria :</label></div>';
        str += '<div class="col-sm-12" style="display: inline-flex;">';
        str += '<table class="table table-bordered">';
        str += '<thead><tr>';
        str += '<th style="vertical-align: middle;width:80%;font-size: 15px;">Criteria Name</th>';
        str += '<th style="text-align: center;"><button class="btn btn-success" onclick="addCriteria()">Add New</button></th>';
        str += '</tr></thead>';
        str += '<tbody id="CriteriaTable">';

        str += '</tbody>';
        str += '</table>';
        str += '</div>';


        str += '</div>';

        str += '</div>';

        str += '<div class="row">';
        // str += '<div class="col col-md-12">';
        // str += '<label style="text-align: left; display: block; width: 100%; font-size: 15px;font-weight: 700;" class="mt-2">Admission Criteria :</label>';
        // str += '<div id="criteriaData">';
        // str += '</div>';
        // str += '</div>';
        str += '<div class="col col-md-12">';
        str += '<div class="col col-md-12">';
        str += '<br>';
        str += '<br>';
        str += '<button type="button" class="btn btn-primary" style="float:right" onclick="createDegreeProgram()" id="createDegreeBtn" value=1>Create Degree</button>';

        str += '</div>';
        str += '</div>';

        str += '</div>';

        str += '</div>';

        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '</div>';
        str += '</div>';

        str += '<div class="row " style="margin:0 5px">';
        str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
        str += '<div class="card">';
        str += '<div class="card-body"><div class="table-responsive">';
        str += '<table class="table table-bordered" id="applicantTable">';
        str += '<thead><tr>';
        str += '<th>Degree Name</th>';
        str += '<th>Degree Code</th>';
        str += '<th>Income Source Code</th>';
        str += '<th>Entry SLQF level</th>';
        str += '<th>Exit SLQF level</th>';
        str += '<th>Duration </th>';
        str += '<th>Medium </th>';
        str += '<th></th>';
        str += '<th></th>';
        str += '</tr></thead>';
        str += '<tbody id="degreeTable">';
        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';


        str += '</div>';
        str += '</div>';


        str += '</div>';
    }
    return str;
}

var degree_Array = new Array();

function setDegreeForNew() {

    let degreeOption = "";
    let postData = {
        action: "getDegrees",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/degree.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            $('#degreeTable').empty();
            degree_Array.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, degress) {
                    if (degress.degreeCode != "") {
                        degree_Array[count] = [degress.degreeCode];

                        let degreeData = "";
                        degreeData += "<tr>";
                        degreeData += "<td >" + degress.degreeTitle + "</td>";
                        degreeData += "<td >" + degress.degreeCode + "</td>";
                        degreeData += "<td >" + degress.IncomeSourceCode + "</td>";
                        degreeData += "<td >" + degress.slql + "</td>";
                        degreeData += "<td >" + degress.exitslql + "</td>";
                        degreeData += "<td >" + degress.duration + "</td>";
                        degreeData += "<td >" + degress.medium + "</td>";
                        // department += "<td width='5%' ><button class='btn btn-warning  btn-sm' style='color:#fff' onclick=updateDepartment('" + count + "')>Update</button></td>";
                        degreeData += "<td width='5%' '><button class='btn btn-warning btn-sm' style='color:#fff'  onclick=updateDegree('" + count + "')>Update</button></td>";
                        degreeData += "<td width='5%' '><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteDegree('" + count + "')>Delete</button></td>";
                        degreeData += "</tr>";
                        $('#degreeTable').append(degreeData);
                        count++;
                    }
                });

            }
            console.log(response)
            DataTableForBatch();
        },
        error: function (error) {
            console.log(error)
        }
    });
}


function deleteDegree(i) {
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
                action: "deleteDegree",
                degreeCode: degree_Array[i][0],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/degree.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Degree has been deleted.",
                            icon: "success"
                        });
                        showMenu('formAddViewDegreeProgramme');
                        setFacultys();
                        setProgrameTypeforCombo();
                        getcriteriaCheckbox();
                        setDegreeForNew();

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


function updateDegree(i) {
    let postData = {
        action: "getDataForDegreeUpdate",
        degreeCode: degree_Array[i][0],
        authcode: authcode,
        username: dataRep['userId'],
    };

    let postData2 = {
        action: "getCreteriaDataForDegreeUpdate",
        degreeCode: degree_Array[i][0],
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/degree.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            $.ajax({
                type: 'POST',
                url: 'rules/degree.php', // Replace with your server-side script URL
                data: postData2,
                dataType: 'json',
                success: function (response2) {
                    console.log(response2)

                    $('#CriteriaTable').html("");
                    if (response[0].status == 200) {
                        response2.forEach((inc) => {
                            if (inc.status == 200) {
                                let tableappend = "<tr>";
                                tableappend += "<td><input type=text placeholde='enter criteria name' class='form-control' value = '" + inc.criteriaTitle + "'></td>";
                                tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                                tableappend += "</tr>";

                                $('#CriteriaTable').append(tableappend);
                            }
                        });
                    }
                    //clear primary data
                    $('#selectedDegreeName').val('');
                    $('#selectedDepartmentName').val('');
                    $('#selectedFacultyName').val('');
                    $('#selectedDegreeType').val('');
                    $('#degreeCode').val('');
                    $('#OlddegreeCode').val('');
                    $('#degreeTitle').val('');
                    $('#IncomeSourceCode').val('');
                    $('#slql').val('');
                    $('#exitslql').val('');
                    $('#selectedmedium').val('');
                    $('#degreeDuration').val('');
                    $('#NewLibProgrammeCode').val('');
                    $('#NewLibDegreeCode').val('');

                    //add primary data
                    if (response[0].departmentCode == "0000000000" && response[0].departmentCode == "000") {
                        $('#selectedDegreeName').val('f');
                    } else {
                        $('#selectedDegreeName').val('d');
                        $('#selectedDepartmentName').val(response[0].departmentCode);
                    }

                    $('#selectedFacultyName').val(response[0].facultyCode);
                    $('#selectedDegreeType').val(response[0].programmeTypeCode);
                    $('#degreeCode').val(response[0].degreeCode);
                    $('#OlddegreeCode').val(response[0].degreeCode);
                    $('#degreeTitle').val(response[0].degreeTitle);
                    $('#IncomeSourceCode').val(response[0].IncomeSourceCode);
                    $('#slql').val(response[0].slql);
                    $('#exitslql').val(response[0].exitslql);
                    $('#selectedmedium').val(response[0].medium);
                    $('#degreeDuration').val(response[0].duration);
                    $('#NewLibProgrammeCode').val(response[0].NewLibProgrammeCode);
                    $('#NewLibDegreeCode').val(response[0].NewLibDegreeCode);


                    $('#createDegreeBtn').text('Update Degree');
                    $('#createDegreeBtn').removeClass('btn-info').addClass('btn-warning').addClass('text-white');
                    $('#createDegreeBtn').val(2);

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                },
                error: function (error) {
                    console.log(error);

                    Swal.fire({
                        icon: 'error',
                        title: 'Updated Failed',
                        text: error,
                    });
                }
            });


        },
        error: function (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Updated Failed',
                text: error,
            });
        }
    });
}



function addCriteria() {


    let tableappend = "<tr>";
    tableappend += "<td><input type='text' placeholde='Enter Criteria Name' class='form-control'></td>";
    tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
    tableappend += "</tr>";

    $('#CriteriaTable').append(tableappend);

}

function getcriteriaCheckbox() {
    let degreeOption = "";
    let postData = {
        action: "getcriteria",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/programeType.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#criteriaData').empty();
            programeTypeArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                let cretria = "";
                cretria += "<table class='table table-bordered'";
                $.each(response, function (index, cretrias) {

                    if (cretrias.criteriaCode != "") {
                        cretria += '</tr><td><input type="checkbox" name="cretriachk" id="checkbox-1" value="' + cretrias.criteriaCode + '" class="custom" /></td>';
                        cretria += '<td style="    text-wrap: wrap;"><label for="checkbox-1">' + cretrias.criteriaTitle + '</label></td></tr>';
                    }
                });
                cretria += "</table>";

                $('#criteriaData').append(cretria);


            }

        },
        error: function (error) {
            console.log(error)
        }
    });

}


function createDegreeProgram() {
    // var cretriachk = $('input[name="cretriachk"]:checked').map(function () {
    //     return this.value;
    // }).get();


    if ($('#createDegreeBtn').val() == 1) {

        $depCode = "0000000000";
        if ($("#selectedofferingBy option:selected").val() == "d") {
            $depCode = $("#selectedDepartmentName option:selected").val();
        }

        let cretriachk = [];
        $("#CriteriaTable tr").each(function (index, row) {
            var cretriaName = $(row).find("input").val();
            cretriachk.push({
                cretriaName: cretriaName
            });
        });

        var postData = {
            action: "CreateDegree",
            universityCode: "KLN",
            facultyCode: $("#selectedFacultyName option:selected").val(),
            departmentCode: $depCode,
            programmeTypeCode: $("#selectedDegreeType option:selected").val(),
            slql: $("#slql").val(),
            exitslql: $("#exitslql").val(),
            degreeCode: $("#degreeCode").val(),
            degreeTitle: $("#degreeTitle").val(),
            duration: $("#degreeDuration").val(),
            medium: $("#selectedmedium option:selected").val(),
            IncomeSourceCode: $("#IncomeSourceCode").val(),
            criteriaCodes: cretriachk,
            LibProgrammeCode: $("#selectedDegreeType option:selected").text(),
            LibDegreeCode: $("#degreeCode").val(),
            NewLibProgrammeCode: $("#NewLibProgrammeCode").val(),
            NewLibDegreeCode: $("#NewLibDegreeCode").val(),
            authcode: authcode,
            username: dataRep['userId'],

        };

        $.ajax({
            type: 'POST',
            url: 'rules/degree.php', // Replace with your server-side script URL
            data: postData,
            dataType: 'json',
            success: function (response) {
                if (response.status == 200) {
                    Swal.fire({
                        title: "Created!",
                        text: "Degree has been created.",
                        icon: "success"
                    });

                    showMenu('formAddViewDegreeProgramme');
                    setFacultys();
                    setProgrameTypeforCombo();
                    getcriteriaCheckbox();
                    setDegreeForNew();

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Updated Failed',
                        text: response.message,
                    });
                }
            },
            error: function (error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Updated Failed',
                    text: error,
                });
            }
        });


    } else if ($('#createDegreeBtn').val() == 2) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                var postData = {
                    action: "deleteDegree",
                    degreeCode: $("#OlddegreeCode").val(),
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                $.ajax({
                    type: 'POST',
                    url: 'rules/degree.php', // Replace with your server-side script URL
                    data: postData,
                    dataType: 'json',
                    success: function (response) {
                        if (response.status == 200) {

                            $depCode = "0000000000";
                            if ($("#selectedofferingBy option:selected").val() == "d") {
                                $depCode = $("#selectedDepartmentName option:selected").val();
                            }

                            let cretriachk = [];
                            $("#CriteriaTable tr").each(function (index, row) {
                                var cretriaName = $(row).find("input").val();
                                cretriachk.push({
                                    cretriaName: cretriaName
                                });
                            });

                            var postData = {
                                action: "CreateDegree",
                                universityCode: "KLN",
                                facultyCode: $("#selectedFacultyName option:selected").val(),
                                departmentCode: $depCode,
                                programmeTypeCode: $("#selectedDegreeType option:selected").val(),
                                slql: $("#slql").val(),
                                exitslql: $("#exitslql").val(),
                                degreeCode: $("#degreeCode").val(),
                                degreeTitle: $("#degreeTitle").val(),
                                duration: $("#degreeDuration").val(),
                                medium: $("#selectedmedium option:selected").val(),
                                IncomeSourceCode: $("#IncomeSourceCode").val(),
                                criteriaCodes: cretriachk,
                                LibProgrammeCode: $("#selectedDegreeType option:selected").text(),
                                LibDegreeCode: $("#degreeCode").val(),
                                NewLibProgrammeCode: $("#NewLibProgrammeCode").val(),
                                NewLibDegreeCode: $("#NewLibDegreeCode").val(),
                                authcode: authcode,
                                username: dataRep['userId'],

                            };

                            $.ajax({
                                type: 'POST',
                                url: 'rules/degree.php', // Replace with your server-side script URL
                                data: postData,
                                dataType: 'json',
                                success: function (response) {
                                    if (response.status == 200) {
                                        Swal.fire({
                                            title: "Updated!",
                                            text: "Degree has been updated.",
                                            icon: "success"
                                        });

                                        showMenu('formAddViewDegreeProgramme');
                                        setFacultys();
                                        setProgrameTypeforCombo();
                                        getcriteriaCheckbox();
                                        setDegreeForNew();

                                    } else {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Updated Failed',
                                            text: response.message,
                                        });
                                    }
                                },
                                error: function (error) {
                                    console.log(error)
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Updated Failed',
                                        text: error,
                                    });
                                }
                            });




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



}