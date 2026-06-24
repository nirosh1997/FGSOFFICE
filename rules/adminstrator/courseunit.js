var applicantDTable;
function DataTableForBatch() {

    var buttons = [];

    if (!$.fn.DataTable.isDataTable('#applicantTable'))
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





function formAddViewSubject(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "Add Subjects for Batch";

    if (dsp == "formAddViewSubject") {

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
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Degree</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedDegreeName">';
        // str += await setDegrees();
        str += '</select>';
        str += '</div></div></div>';

        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedAcademicYear">';
        str += setAcademicYearNew();
        str += '</select>';
        str += '</div>';
        str += '</div>';
        str += '</div><br>';


        str += '<div class="col-sm-12">';
        str += '<div class="col-sm-12" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r"><b>Subject Details</b></label></div>';
        str += '<div class="col-sm-12" style="display: inline-flex;">';
        str += '<table class="table table-bordered">';
        str += '<thead><tr>';
        str += '<th style="vertical-align: middle;width:25%">Subject Code</th>';
        str += '<th style="vertical-align: middle;width:35%">Subject Title</th>';
        str += '<th style="vertical-align: middle;width:5%">Semester</th>';
        str += '<th style="vertical-align: middle;width:10%">Optional/Compulsory</th>';
        str += '<th style="vertical-align: middle;width:10%">Credit</th>';
        str += '<th style="text-align: center;"><button class="btn btn-success" onclick="addSubject()">Add New</button></th>';
        str += '</tr></thead>';
        str += '<tbody id="subjectTable">';

        str += '</tbody>';
        str += '</table>';
        str += '</div>';


        str += '</div>';

        // str += '</div>';
        str += '<br><br>';

        str += '<div class="row">';
        str += '<div class="col-sm-12" style="display: inline-flex;">';
        str += '<div class="col-sm-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="createSubejctForBatch();" value="1" id="createSubjectBtn">Add Subjects For Batch</button></div>';
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
        str += '<th>Degree Title</th>';
        str += '<th>Degree Code</th>';
        str += '<th>Year</th>';
        str += '<th></th>';
        str += '<th></th>';
        str += '<th></th>';
        str += '</tr></thead>';
        str += '<tbody id="batchTable">';
        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<datalist id="subjectcode">';
        str += '</datalist>';


    }

    return str;
}




function addSubject() {

    let incomeCatOption = "<select class='form-control'><option value='0'> Select income category </option> ";
    $.each(incomeCatArray, function (index, incomeCat) {
        console.log(incomeCat[0])
        incomeCatOption += "<option value='" + incomeCat[0] + "'>" + incomeCat[1] + "</option>";
    });
    incomeCatOption += "</select>";

    let sem = "<select class='form-control' ><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='0'>End</option></select>"
    let optional = "<select class='form-control' ><option value='c'>Compulsory</option><option value='o'>Optional</option><option value='t'>Thesis</option></select>";

    let tableappend = "<tr>";
    tableappend += "<td><input type=text placeholde='enter amount' class='form-control' list='subjectcode' onblur='handleSubjectCodeChange(this)'></td>";
    tableappend += "<td><input type=text placeholde='enter amount' class='form-control'></td>";
    tableappend += "<td>" + sem + "</td>";

    tableappend += "<td>" + optional + "</td>";
    tableappend += "<td><input type=number placeholde='enter Credit' class='form-control'></td>";

    tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
    tableappend += "</tr>";

    $('#subjectTable').append(tableappend);

}

function handleSubjectCodeChange(inputElement) {
    var row = $(inputElement).closest('tr');
    var subjectTitleInput = row.find('td:nth-child(2) input');
    var semesterSelect = row.find('td:nth-child(3) select');
    var optionalCompulsorySelect = row.find('td:nth-child(4) select');
    var creditInput = row.find('td:nth-child(5) input');

    var updatedSubjectCode = $(inputElement).val();

    subejctArray.forEach(subject => {
        if (subject[0] == updatedSubjectCode) {
            subjectTitleInput.val(subject[1]);
            semesterSelect.val(subject[4]);
            optionalCompulsorySelect.val(subject[2]);
            creditInput.val(subject[3]);
            return;
        }

    });

}



var subejctArray = new Array();
function getSubejcts() {
    let postData = {
        action: "getAllSubject",
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/subject.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#subjectcode').empty();
            subejctArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, subject) {
                    if (subject.subjectCode != "") {
                        subejctArray[count] = [subject.subjectCode, subject.subjectTitle, subject.sstatus, subject.credits, subject.subjectSemester];
                        $('#subjectcode').append("<option value='" + subject.subjectCode + "'>" + subject.subjectCode + "</option>");
                        count++;
                    }
                });

            }
        },
        error: function (error) {
            console.log(error)
        }
    });
}


var batchArray = new Array();
var subjectArray = new Array();
function setBatchsForSubject() {

    let degreeOption = "";
    let postData = {
        action: "getSubjectBatchWise",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/subject.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#batchTable').empty();
            batchArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, batches) {
                    if (batches.departmentCode != "") {
                        batchArray[count] = [batches.degreeCode, batches.academicYear];

                        let department = "";
                        department += "<tr>";
                        department += "<td >" + batches.degreeTitle + "</td>";
                        department += "<td >" + batches.degreeCode + "</td>";
                        department += "<td >" + batches.academicYear + "</td>";
                        department += "<td width='5%' ><button class='btn btn-warning  btn-sm' style='color:#fff' onclick=updateBatchSubject('" + count + "')>Update</button></td>";
                        department += "<td width='5%' '><button class='btn btn-success btn-sm' style='color:#fff'  onclick=viewSubjectsForBatch('" + count + "')>View Subjects</button></td>";
                        department += "<td width='5%' '><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteAllSubejct('" + count + "')>Delete All</button></td>";
                        department += "</tr>";
                        $('#batchTable').append(department);
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




function createSubejctForBatch() {

    if ($('#createSubjectBtn').val() == 1) {
        if ($("#selectedDegreeName option:selected").val() == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Degree Required.',
                text: "Please select degree before create batch",
            });
        } else if ($("#selectedAcademicYear option:selected").val() == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Academic Year Required.',
                text: "Please select academic year before create batch",
            });
        } else {

            var dataToSend = [];
            let somesubjectmissing = false;
            $("#subjectTable tr").each(function (index, row) {
                var subjectCodeInput = $(row).find("td:nth-child(1) input").val();
                var subjectTitleInput = $(row).find("td:nth-child(2) input").val();
                var semesterSelect = $(row).find('td:nth-child(3) select').val();
                var optionalCompulsorySelect = $(row).find('td:nth-child(4) select').val();
                var creditInput = $(row).find('td:nth-child(5) input').val();

                if (subjectCodeInput == "" || subjectTitleInput == "") {
                    somesubjectmissing = true;
                }

                dataToSend.push({
                    subjectCode: subjectCodeInput,
                    subjectTitle: subjectTitleInput,
                    semester: semesterSelect,
                    optionalCompulsory: optionalCompulsorySelect,
                    creditOfSubject: creditInput,
                });

            });

            if (dataToSend.length == 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'At least 1 subject are required.',
                    text: "Please enter at least 1 subject before add the subejcts for batch",
                });
            } else if (somesubjectmissing) {
                Swal.fire({
                    icon: 'warning',
                    title: 'subject details are missing.',
                    text: "You have missed to enter a subject, subject code or subject name",
                });
            } else {
                var postData = {
                    action: "CreateSubject",
                    degreeCode: $("#selectedDegreeName option:selected").val(),
                    academicYear: $("#selectedAcademicYear option:selected").val(),
                    subjects: dataToSend,
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                $.ajax({
                    type: 'POST',
                    url: 'rules/subject.php', // Replace with your server-side script URL
                    data: postData,
                    dataType: 'json',
                    success: function (response) {
                        console.log(response)
                        if (response.status == 200 || response.status == 201) {
                            if (response.status == 200) {
                                Swal.fire({
                                    title: "Created!",
                                    text: "Subjects has been created.",
                                    icon: "success"
                                });
                            } else {
                                Swal.fire({
                                    title: "Warning!",
                                    html: response.message,
                                    icon: "warning"
                                });
                            }
                            showMenu('formAddViewSubject');
                            setDegrees();
                            getSubejcts();
                            setBatchsForSubject();

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
                            text: error.responseText,
                        });
                    }
                });

            }


        }
    } else if ($('#createSubjectBtn').val() == 2) {
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



                if ($("#selectedDegreeName option:selected").val() == 0) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Degree Required.',
                        text: "Please select degree before create batch",
                    });
                } else if ($("#selectedAcademicYear option:selected").val() == 0) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Academic Year Required.',
                        text: "Please select academic year before create batch",
                    });
                } else {
                    var postData = {
                        action: "deleteAllSubSubDegree",
                        degreeCode: $("#selectedDegreeName option:selected").val(),
                        academicYear: $("#selectedAcademicYear option:selected").val(),
                        authcode: authcode,
                        username: dataRep['userId'],
                    };

                    $.ajax({
                        type: 'POST',
                        url: 'rules/subject.php',
                        data: postData,
                        dataType: 'json',
                        success: function (response) {
                            if (response.status == 200) {

                                var dataToSend = [];
                                let somesubjectmissing = false;
                                $("#subjectTable tr").each(function (index, row) {
                                    var subjectCodeInput = $(row).find("td:nth-child(1) input").val();
                                    var subjectTitleInput = $(row).find("td:nth-child(2) input").val();
                                    var semesterSelect = $(row).find('td:nth-child(3) select').val();
                                    var optionalCompulsorySelect = $(row).find('td:nth-child(4) select').val();
                                    var creditInput = $(row).find('td:nth-child(5) input').val();

                                    if (subjectCodeInput == "" || subjectTitleInput == "") {
                                        somesubjectmissing = true;
                                    }

                                    dataToSend.push({
                                        subjectCode: subjectCodeInput,
                                        subjectTitle: subjectTitleInput,
                                        semester: semesterSelect,
                                        optionalCompulsory: optionalCompulsorySelect,
                                        creditOfSubject: creditInput,
                                    });

                                });

                                if (dataToSend.length == 0) {
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'At least 1 subject are required.',
                                        text: "Please enter at least 1 subject before add the subejcts for batch",
                                    });
                                } else if (somesubjectmissing) {
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'subject details are missing.',
                                        text: "You have missed to enter a subject, subject code or subject name",
                                    });
                                } else {
                                    var postData = {
                                        action: "CreateSubject",
                                        degreeCode: $("#selectedDegreeName option:selected").val(),
                                        academicYear: $("#selectedAcademicYear option:selected").val(),
                                        subjects: dataToSend,
                                        authcode: authcode,
                                        username: dataRep['userId'],
                                    };

                                    $.ajax({
                                        type: 'POST',
                                        url: 'rules/subject.php', // Replace with your server-side script URL
                                        data: postData,
                                        dataType: 'json',
                                        success: function (response) {
                                            console.log(response)
                                            if (response.status == 200 || response.status == 201) {
                                                if (response.status == 200) {
                                                    Swal.fire({
                                                        title: "Updated!",
                                                        text: "Subjects has been updated.",
                                                        icon: "success"
                                                    });
                                                } else {
                                                    Swal.fire({
                                                        title: "Warning!",
                                                        html: response.message,
                                                        icon: "warning"
                                                    });
                                                }
                                                showMenu('formAddViewSubject');
                                                setDegrees();
                                                getSubejcts();
                                                setBatchsForSubject();

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
                                                text: error.responseText,
                                            });
                                        }
                                    });

                                }


                                showMenu('formAddViewSubject');
                                setDegrees();
                                getSubejcts();
                                setBatchsForSubject();

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
                                text: error.responseText,
                            });
                        }
                    });

                }



            }
        });
    }

}


function deleteIndividualSubject(sub_location, degreelocation) {

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
                action: "deleteIndividualSub",
                degreeCode: batchArray[degreelocation][0],
                academicYear: batchArray[degreelocation][1],
                subjectSemester: subjectArray[sub_location][0],
                subjectCode: subjectArray[sub_location][1],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/subject.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    viewSubjectsForBatch(degreelocation);
                }
            });
        } else {
            viewSubjectsForBatch(degreelocation);
        }

    });
}

function updateBatchSubject(i) {
    let postData = {
        action: "getSubjectSpecificBatch",
        degreeCode: batchArray[i][0],
        academicYear: batchArray[i][1],
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/subject.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            if (response[0].status == 200) {
                let subjectdata = "";
                subjectArray.length = 0;
                let count = 0;
                $.each(response, function (index, subject) {

                    let sem = "<select class='form-control'>";

                    if (subject.subjectSemester == "1") {
                        sem += "<option value='1' selected>1</option>";
                    } else {
                        sem += "<option value='1'>1</option>";
                    }

                    if (subject.subjectSemester == "2") {
                        sem += "<option value='2' selected>2</option>";
                    } else {
                        sem += "<option value='2'>2</option>";
                    }


                    if (subject.subjectSemester == "3") {
                        sem += "<option value='3' selected>3</option>";
                    } else {
                        sem += "<option value='3'>3</option>";
                    }


                    if (subject.subjectSemester == "4") {
                        sem += "<option value='4' selected>4</option>";
                    } else {
                        sem += "<option value='4'>4</option>";
                    }

                    if (subject.subjectSemester == "0") {
                        sem += "<option value='0' selected>End</option>";
                    } else {
                        sem += "<option value='0'>End</option>";
                    }

                    sem += "</select>";


                    let optional = "<select class='form-control' >";
                    if (subject.subejctstatus == "c") {
                        optional += "<option value='c' selected>Compulsory</option>";
                    } else {
                        optional += "<option value='c'>Compulsory</option>";
                    }

                    if (subject.subejctstatus == "o") {
                        optional += "<option value='o' selected>Optional</option>";
                    } else {
                        optional += "<option value='o'>Optional</option>";
                    }

                    if (subject.subejctstatus == "t") {
                        optional += "<option value='t' selected>Thesis</option>";
                    } else {
                        optional += "<option value='t'>Thesis</option>";
                    }
                    optional += "</select>";


                    let tableappend = "<tr>";
                    tableappend += "<td><input type=text class='form-control' list='subjectcode' onblur='handleSubjectCodeChange(this)' value='" + subject.subjectCode + "'></td>";
                    tableappend += "<td><input type=text class='form-control' value='" + subject.subjectTitle + "'></td>";
                    tableappend += "<td>" + sem + "</td>";

                    tableappend += "<td>" + optional + "</td>";
                    tableappend += "<td><input type=number class='form-control' value='" + subject.credits + "'></td>";

                    tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                    tableappend += "</tr>";

                    $('#subjectTable').append(tableappend);


                    // if (subject.departmentCode != "") {
                    //     let subjectdata = "";
                    //     subjectdata += "<tr>";
                    //     subjectdata += "<td>" + subject.subjectCode + "</td>";

                    //     subjectdata += "<td>" + subject.subjectTitle + "</td>";

                    //     let subjectSemester = "";
                    //     if (subject.subjectSemester == "0") {
                    //         subjectSemester = "End";
                    //     } else {
                    //         subjectSemester = subject.subjectSemester;
                    //     }


                    //     subjectdata += "<td style='text-align:center'>" + subjectSemester + "</td>";
                    //     let subjectStatus = "";
                    //     if (subject.subejctstatus == "c") {
                    //         subjectStatus = "Compulsory";
                    //     } else if (subject.subejctstatus == "o") {
                    //         subjectStatus = "Optional";
                    //     }
                    //     subjectdata += "<td>" + subjectStatus + "</td>";
                    //     subjectdata += "<td style='text-align:center'>" + subject.credits + "</td>";
                    //     subjectdata += "<td style='text-align:center' width='5%'><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteIndividualSubject('" + count + "','" + i + "')>Delete</button></td>";
                    //     subjectdata += "</tr>";

                    //     $('#batchTable').append(subjectData);
                    //     count++;
                    // }
                });

                $('#createSubjectBtn').text('Update Subjects For Batch');
                $('#createSubjectBtn').removeClass('btn-info').addClass('btn-warning').addClass('text-white');
                $('#createSubjectBtn').val(2);

                $('#selectedDegreeName').val(batchArray[i][0]);
                $('#selectedAcademicYear').val(batchArray[i][1]);

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });


            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Subjects Not Available',
                    text: 'Subjects Not Available',
                });
            }
        },
        error: function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid',
                text: error.responseText,
            });
        }
    });
}

function viewSubjectsForBatch(i) {
    var postData = {
        action: "getSubjectSpecificBatch",
        degreeCode: batchArray[i][0],
        academicYear: batchArray[i][1],
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/subject.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            if (response[0].status == 200) {
                let subjectdata = "";
                subjectArray.length = 0;
                let count = 0;
                response.forEach(subject => {
                    subjectArray[count] = [subject.subjectSemester, subject.subjectCode];
                    subjectdata += "<tr>";
                    subjectdata += "<td>" + subject.subjectCode + "</td>";

                    subjectdata += "<td>" + subject.subjectTitle + "</td>";

                    let subjectSemester = "";
                    if (subject.subjectSemester == "0") {
                        subjectSemester = "End";
                    } else {
                        subjectSemester = subject.subjectSemester;
                    }


                    subjectdata += "<td style='text-align:center'>" + subjectSemester + "</td>";
                    let subjectStatus = "";
                    if (subject.subejctstatus == "c") {
                        subjectStatus = "Compulsory";
                    } else if (subject.subejctstatus == "o") {
                        subjectStatus = "Optional";
                    } else if (subject.subejctstatus == "t") {
                        subjectStatus = "Thesis";
                    }
                    subjectdata += "<td>" + subjectStatus + "</td>";
                    subjectdata += "<td style='text-align:center'>" + subject.credits + "</td>";
                    subjectdata += "<td style='text-align:center' width='5%'><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteIndividualSubject('" + count + "','" + i + "')>Delete</button></td>";
                    subjectdata += "</tr>";
                    count++;

                });


                Swal.fire({
                    title: 'Subjects',
                    html:
                        '<table class="table table-bordered" style="overflow: auto;display: block;">' +
                        '<thead><tr>' +
                        '<th style="vertical-align: middle;width:15%">Subject Code</th>' +
                        '<th style="vertical-align: middle;width:35%">Subject Title</th>' +
                        '<th style="vertical-align: middle;width:5%">Semester</th>' +
                        '<th style="vertical-align: middle;width:10%">Optional/Compulsory</th>' +
                        '<th style="vertical-align: middle;width:10%">Credit</th>' +
                        '<th style="vertical-align: middle;width:10%"></th>' +
                        '</tr></thead>' +
                        '<tbody>' +
                        subjectdata +
                        '</tbody>' +
                        '</table>',
                    customClass: 'swal-wide'
                });



            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Subjects Not Available',
                    text: 'Subjects Not Available',
                });
            }
        },
        error: function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid',
                text: error.responseText,
            });
        }
    });

}



function deleteAllSubejct(i) {
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
                action: "deleteAllSubSubDegree",
                degreeCode: batchArray[i][0],
                academicYear: batchArray[i][1],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/subject.php',
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Subjects has been deleted.",
                            icon: "success"
                        });
                        showMenu('formAddViewSubject');
                        setDegrees();
                        getSubejcts();
                        setBatchsForSubject();

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
                        text: error.responseText,
                    });
                }
            });

        }
    });
}
