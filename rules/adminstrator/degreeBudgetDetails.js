var applicantDTable;
function DataTableForBatch() {

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





function formAddViewBatch(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "Batch Managment";

    if (dsp == "formAddViewBatch") {

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
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Batch Number</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<select class="form-control form-control-sm" id="selectedBatchNumber">';
        str += setBatchNumberNew();
        str += '</select>';
        str += '</div>';
        str += '</div>';
        str += '</div>';

        str += '<div class="row">';
        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Course Fee</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="courseFee" placeholder="300000">';
        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Library Fee</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="libFee" placeholder="5000">';
        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Batch Name</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" class="form-control" id="batchName" placeholder="">';
        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Medium</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';

        str += "<div class='form-check form-check2-1'> <label class='form-check-label'> <input type='checkbox' id='mediumSinhala' class='form-check-input' value='si' onclick=''>Sinhala<i class='input-helper'></i></label></div>";
        str += "<div class='form-check form-check2-2'> <label class='form-check-label'> <input type='checkbox' id='mediumEnglish' class='form-check-input' value='en' onclick=''>English<i class='input-helper'></i></label></div>";


        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Program Commence Date</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="date" class="form-control" id="proCommenceDate" >';
        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Program End Date</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="date" class="form-control" id="proEndDate" >';
        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Application Calling Date</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="date" class="form-control" id="applicationCallingDate" >';
        str += '</div>';
        str += '</div>';


        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Application Closing Date</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="date" class="form-control" id="ApplicationClosingDate" >';
        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Credit for Complete</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="number" class="form-control" id="proCreditForComplete" >';
        str += '</div>';
        str += '</div>';

        str += '<div class="col-sm-6 mb-3">';
        str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">GPA for Pass</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="number" class="form-control" id="proGPAforPass" >';
        str += '</div>';
        str += '</div>';

        // str += '<div class="col-sm-6 mb-3">';
        // str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">No of Extenstion</label></div>';
        // str += '<div class="col-sm-6" style="display: inline-flex;">';
        // str += '<input type="number" class="form-control" id="pronoofExtension" value="0">';
        // str += '</div>';
        // str += '</div>';

        // str += '<div class="col-sm-6 mb-3">';
        // str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Extension Valid to</label></div>';
        // str += '<div class="col-sm-6" style="display: inline-flex;">';
        // str += '<input type="date" class="form-control" id="proExtenstionDateValid" >';
        // str += '</div>';
        // str += '</div><br>';

        str += '<div class="col-sm-9">';
        str += '<div class="col-sm-12" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r"><b>Installment Details</b></label></div>';
        str += '<div class="col-sm-12" style="display: inline-flex;">';
        str += '<table class="table table-bordered">';
        str += '<thead><tr>';
        str += '<th style="vertical-align: middle;">Income Category</th>';
        str += '<th style="vertical-align: middle;">Amount</th>';
        str += '<th style="vertical-align: middle;">Payment Deadline</th>';
        str += '<th style="text-align: center;"><button class="btn btn-success" onclick="addinstallment()">Add New</button></th>';
        str += '</tr></thead>';
        str += '<tbody id="IncomeCategoryTable">';

        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';


        str += '<div class="col-sm-9 mt-5">';
        str += '<div class="col-sm-12" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r"><b>Extension Fee</b></label></div>';
        str += '<div class="col-sm-12" style="display: inline-flex;">';
        str += '<table class="table table-bordered">';
        str += '<thead><tr>';
        str += '<th style="vertical-align: middle;">Income Category</th>';
        str += '<th style="vertical-align: middle;">Amount</th>';
        str += '<th style="vertical-align: middle;">Extensition From</th>';
        str += '<th style="text-align: center;"><button class="btn btn-success" onclick="addinstallment2()">Add New</button></th>';
        str += '</tr></thead>';
        str += '<tbody id="IncomeCategoryTable2">';

        str += '</tbody>';
        str += '</table>';
        str += '</div>';
        str += '</div>';

        str += '</div>';
        str += '<br><br>';

        str += '<div class="row">';
        str += '<div class="col-sm-12" style="display: inline-flex;">';
        str += '<div class="col-sm-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="createBatch();" id="createBtn" value=1>Create Batch</button></div>';
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
        str += '<th>Degree Name</th>';
        str += '<th>Code</th>';
        str += '<th>Year</th>';
        str += '<th>Batch Number</th>';
        str += '<th>Batch Name</th>';
        str += '<th>Course Fee</th>';
        str += '<th>Library Fee</th>';
        str += '<th>Course Commence</th>';
        str += '<th>Application Start</th>';
        str += '<th>Application Close</th>';
        str += '<th>Application Link</th>';
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


    }

    return str;
}


var batchArray = new Array();


function addinstallment() {

    let incomeCatOption = "<select class='form-control'><option value='0'> Select income category </option> ";
    $.each(incomeCatArray, function (index, incomeCat) {
        // console.log(incomeCat[0])
        if (incomeCat[3] == "applicationfee" || incomeCat[3] == "coursefee") {
            incomeCatOption += "<option value='" + incomeCat[0] + "'>" + incomeCat[1] + "</option>";
        }
    });
    incomeCatOption += "</select>";


    let tableappend = "<tr><td>" + incomeCatOption + "</td>";
    tableappend += "<td><input type=number placeholde='enter amount' class='form-control' id='cat_amount'></td>";
    tableappend += "<td><input type=date placeholde='enter payment deadline' class='form-control' id='cat_deadline'></td>";
    tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
    tableappend += "</tr>";

    $('#IncomeCategoryTable').append(tableappend);

}

function addinstallment2() {

    let incomeCatOption = "<select class='form-control'><option value='0'> Select income category </option> ";
    $.each(incomeCatArray, function (index, incomeCat) {
        // console.log(incomeCat)
        if (incomeCat[3] == "extensionfee") {
            incomeCatOption += "<option value='" + incomeCat[0] + "'>" + incomeCat[1] + "</option>";
        }
    });
    incomeCatOption += "</select>";


    let tableappend = "<tr><td>" + incomeCatOption + "</td>";
    tableappend += "<td><input type=number placeholde='enter amount' class='form-control' id='cat_amount'></td>";
    tableappend += "<td><input type=date placeholde='enter payment deadline' class='form-control' id='cat_deadline'></td>";
    tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
    tableappend += "</tr>";

    $('#IncomeCategoryTable2').append(tableappend);

}

var incomeCatArray = new Array();
function getallinstallment() {
    let postData = {
        action: "getIncomeCategory",
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/incomesource.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#IncomeCategoryTable').empty();
            $('#IncomeCategoryTable2').empty();
            incomeCatArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, incomeCat) {
                    if (incomeCat.IncomeCategoryCode != "") {
                        incomeCatArray[count] = [incomeCat.IncomeCategoryCode, incomeCat.IncomeCategoryTitle, incomeCat.payment_deadline, incomeCat.IncomeCategoryType];
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

function setBatch() {

    let degreeOption = "";
    let postData = {
        action: "getBatch",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/batch.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#batchTable').empty();
            batchArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, batches) {
                    if (batches.departmentCode != "") {
                        batchArray[count] = [batches.degreeCode, batches.academicYear, batches.batchNumber, batches.degreeTitle];


                        let department = "";
                        department += "<tr>";
                        department += "<td >" + batches.degreeTitle + "</td>";
                        department += "<td >" + batches.degreeCode + "</td>";
                        department += "<td >" + batches.academicYear + "</td>";
                        department += "<td >Batch " + batches.batchNumber + "</td>";
                        department += "<td >" + batches.batchName + "</td>";
                        department += "<td >" + batches.courseFee + "</td>";
                        department += "<td >" + batches.libraryFee + "</td>";
                        department += "<td >" + batches.coursecommence + "</td>";
                        department += "<td >" + batches.applicationstarts + "</td>";
                        department += "<td >" + batches.applicationclose + "</td>";
                        // department += "<td width='5%' ><button class='btn btn-warning  btn-sm' style='color:#fff' onclick=updateDepartment('" + count + "')>Update</button></td>";
                        department += "<td width='5%' '><button class='btn btn-primary btn-sm' style='color:#fff'  onclick=copyApplicationLink('" + count + "')>Copy Link</button></td>";
                        department += "<td width='5%' '><button class='btn btn-warning btn-sm' style='color:#fff'  onclick=updateBatch('" + count + "')>Update</button></td>";
                        department += "<td width='5%' '><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteBatch('" + count + "')>Delete</button></td>";
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

function copyApplicationLink(i) {

    const baseUrl = "https://sysfgs.kln.ac.lk/pgapplication/application/welcome";

    const url = baseUrl +
        "?program=" + encodeURIComponent(batchArray[i][3]) +
        "&academicYear=" + encodeURIComponent(batchArray[i][1]) +
        "&batchnumber=" + encodeURIComponent(batchArray[i][2]);

    navigator.clipboard.writeText(url).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Link Copied',
            text: 'Application link copied to clipboard',
            timer: 2000,
            showConfirmButton: false
        });
    });
}

function createBatch() {


    if ($('#createBtn').val() == 1) {
        if ($("#selectedDegreeName option:selected").val() == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Degree Required.',
                text: "Please select degree before create batch",
            });
        } else {

            var dataToSend = [];
            $("#IncomeCategoryTable tr").each(function (index, row) {
                var selectedValue = $(row).find("select").val();
                var amount = $(row).find("#cat_amount").val();
                var deadline = $(row).find("#cat_deadline").val();
                dataToSend.push({
                    category: selectedValue,
                    amount: amount,
                    deadline: deadline
                });
            });

            $("#IncomeCategoryTable2 tr").each(function (index, row) {
                var selectedValue = $(row).find("select").val();
                var amount = $(row).find("#cat_amount").val();
                var deadline = $(row).find("#cat_deadline").val();
                dataToSend.push({
                    category: selectedValue,
                    amount: amount,
                    deadline: deadline
                });
            });


            var postDataForCheck = {
                action: "checkBatchAlreadyhave",
                degreeCode: $("#selectedDegreeName option:selected").val(),
                academicYear: $("#selectedAcademicYear option:selected").val(),
                batchNumber: $("#selectedBatchNumber option:selected").val(),
                authcode: authcode,
                username: dataRep['userId'],
            };


            $.ajax({
                type: 'POST',
                url: 'rules/batch.php', // Replace with your server-side script URL
                data: postDataForCheck,
                dataType: 'json',
                success: function (response) {
                    if (response[0].status == 400) {
                        let medium = "";
                        if ($("#mediumEnglish").is(":checked") && $("#mediumSinhala").is(":checked")) {
                            medium = "both";
                        } else if ($("#mediumSinhala").is(":checked")) {
                            medium = "si";
                        } else if ($("#mediumEnglish").is(":checked")) {
                            medium = "en";
                        }

                        var postData = {
                            action: "CreateBatch",
                            degreeCode: $("#selectedDegreeName option:selected").val(),
                            academicYear: $("#selectedAcademicYear option:selected").val(),
                            batchNumber: $("#selectedBatchNumber option:selected").val(),
                            courseFee: $("#courseFee").val(),
                            libraryFee: $("#libFee").val(),
                            coursecommence: $("#proCommenceDate").val(),
                            applicationstarts: $("#applicationCallingDate").val(),
                            applicationclose: $("#ApplicationClosingDate").val(),
                            // extenstionDate: $("#proExtenstionDateValid").val(),
                            // noOfExtention: $("#pronoofExtension").val(),
                            pass_gpa: $("#proGPAforPass").val(),
                            credits_complete: $("#proCreditForComplete").val(),
                            courseend: $("#proEndDate").val(),
                            batchName: $("#batchName").val(),
                            mediums: medium,
                            incomeSource: dataToSend,
                            authcode: authcode,
                            username: dataRep['userId'],
                        };

                        $.ajax({
                            type: 'POST',
                            url: 'rules/batch.php', // Replace with your server-side script URL
                            data: postData,
                            dataType: 'json',
                            success: function (response) {
                                console.log(response)
                                if (response.status == 200) {
                                    Swal.fire({
                                        title: "Created!",
                                        text: "Batch has been created.",
                                        icon: "success"
                                    });
                                    showMenu('formAddViewBatch');
                                    getallinstallment();
                                    setDegrees();
                                    setBatch();

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
                            title: 'Already available',
                            text: "This batch already available.",
                        });
                    }
                    console.log(response[0].status)
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

        }
    } else if ($('#createBtn').val() == 2) {

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
                    action: "deleteBatch",
                    degreeCode: $("#selectedDegreeName option:selected").val(),
                    academicYear: $("#selectedAcademicYear option:selected").val(),
                    batchNumber: $("#selectedBatchNumber option:selected").val(),
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                $.ajax({
                    type: 'POST',
                    url: 'rules/batch.php', // Replace with your server-side script URL
                    data: postData,
                    dataType: 'json',
                    success: function (response) {
                        if (response.status == 200) {


                            var dataToSend = [];
                            $("#IncomeCategoryTable tr").each(function (index, row) {
                                var selectedValue = $(row).find("select").val();
                                var amount = $(row).find("#cat_amount").val();
                                var deadline = $(row).find("#cat_deadline").val();
                                dataToSend.push({
                                    category: selectedValue,
                                    amount: amount,
                                    deadline: deadline
                                });
                            });

                            $("#IncomeCategoryTable2 tr").each(function (index, row) {
                                var selectedValue = $(row).find("select").val();
                                var amount = $(row).find("#cat_amount").val();
                                var deadline = $(row).find("#cat_deadline").val();
                                dataToSend.push({
                                    category: selectedValue,
                                    amount: amount,
                                    deadline: deadline
                                });
                            });


                            var postDataForCheck = {
                                action: "checkBatchAlreadyhave",
                                degreeCode: $("#selectedDegreeName option:selected").val(),
                                academicYear: $("#selectedAcademicYear option:selected").val(),
                                batchNumber: $("#selectedBatchNumber option:selected").val(),
                                authcode: authcode,
                                username: dataRep['userId'],
                            };


                            $.ajax({
                                type: 'POST',
                                url: 'rules/batch.php', // Replace with your server-side script URL
                                data: postDataForCheck,
                                dataType: 'json',
                                success: function (response) {
                                    if (response[0].status == 400) {
                                        let medium = "";
                                        if ($("#mediumEnglish").is(":checked") && $("#mediumSinhala").is(":checked")) {
                                            medium = "both";
                                        } else if ($("#mediumSinhala").is(":checked")) {
                                            medium = "si";
                                        } else if ($("#mediumEnglish").is(":checked")) {
                                            medium = "en";
                                        }

                                        var postData = {
                                            action: "CreateBatch",
                                            degreeCode: $("#selectedDegreeName option:selected").val(),
                                            academicYear: $("#selectedAcademicYear option:selected").val(),
                                            batchNumber: $("#selectedBatchNumber option:selected").val(),
                                            courseFee: $("#courseFee").val(),
                                            libraryFee: $("#libFee").val(),
                                            coursecommence: $("#proCommenceDate").val(),
                                            applicationstarts: $("#applicationCallingDate").val(),
                                            applicationclose: $("#ApplicationClosingDate").val(),
                                            credits_complete: $("#proCreditForComplete").val(),
                                            // extenstionDate: $("#proExtenstionDateValid").val(),
                                            // noOfExtention: $("#pronoofExtension").val(),
                                            pass_gpa: $("#proGPAforPass").val(),
                                            courseend: $("#proEndDate").val(),
                                            batchName: $("#batchName").val(),
                                            mediums: medium,
                                            incomeSource: dataToSend,
                                            authcode: authcode,
                                            username: dataRep['userId'],
                                        };

                                        $.ajax({
                                            type: 'POST',
                                            url: 'rules/batch.php', // Replace with your server-side script URL
                                            data: postData,
                                            dataType: 'json',
                                            success: function (response) {
                                                console.log(response)
                                                if (response.status == 200) {
                                                    Swal.fire({
                                                        title: "Updated!",
                                                        text: "Batch has been updated.",
                                                        icon: "success"
                                                    });
                                                    showMenu('formAddViewBatch');
                                                    getallinstallment();
                                                    setDegrees();
                                                    setBatch();

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
                                            title: 'Already available',
                                            text: "This batch already available.",
                                        });
                                    }
                                    console.log(response[0].status)
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



function updateBatch(i) {
    let postData = {
        action: "getDataForBatchUpdate",
        degreeCode: batchArray[i][0],
        academicYear: batchArray[i][1],
        batchNumber: batchArray[i][2],
        authcode: authcode,
        username: dataRep['userId'],
    };

    let postData2 = {
        action: "getIncomeCatDataForBatchUpdate",
        degreeCode: batchArray[i][0],
        academicYear: batchArray[i][1],
        batchNumber: batchArray[i][2],
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/batch.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            $.ajax({
                type: 'POST',
                url: 'rules/batch.php', // Replace with your server-side script URL
                data: postData2,
                dataType: 'json',
                success: function (response2) {
                    $('#IncomeCategoryTable').html("");
                    $('#IncomeCategoryTable2').html("");
                    if (response[0].status == 200) {
                        response2.forEach((inc) => {
                            if (inc.status == 200) {
                                let found = false;
                                let incomeCatOption = "<select class='form-control'><option value='0'> Select income category </option> ";
                                $.each(incomeCatArray, function (index, incomeCat) {
                                    if (incomeCat[3] == "applicationfee" || incomeCat[3] == "coursefee") {
                                        if (inc.IncomeCategoryCode == incomeCat[0]) {
                                            found = true;
                                            incomeCatOption += "<option value='" + incomeCat[0] + "' selected>" + incomeCat[1] + "</option>";
                                        } else {
                                            incomeCatOption += "<option value='" + incomeCat[0] + "'>" + incomeCat[1] + "</option>";
                                        }
                                    }
                                });
                                incomeCatOption += "</select>";

                                if (found) {
                                    let tableappend = "<tr><td>" + incomeCatOption + "</td>";
                                    tableappend += "<td><input type='number' placeholde='enter amount' class='form-control' id='cat_amount' value = '" + inc.IncomeCategoryValue + "'></td>";
                                    tableappend += "<td><input type='date' placeholde='enter payment deadline' class='form-control' id='cat_deadline' value = '" + inc.payment_deadline + "'></td>";
                                    tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                                    tableappend += "</tr>";
                                    $('#IncomeCategoryTable').append(tableappend);
                                }
                            }
                        });

                        response2.forEach((inc) => {
                            if (inc.status == 200) {
                                let found = false;

                                let incomeCatOption = "<select class='form-control'><option value='0'> Select income category </option> ";
                                $.each(incomeCatArray, function (index, incomeCat) {
                                    if (incomeCat[3] == "extensionfee") {
                                        if (inc.IncomeCategoryCode == incomeCat[0]) {
                                            found = true;
                                            incomeCatOption += "<option value='" + incomeCat[0] + "' selected>" + incomeCat[1] + "</option>";
                                        } else {
                                            incomeCatOption += "<option value='" + incomeCat[0] + "'>" + incomeCat[1] + "</option>";
                                        }
                                    }
                                });
                                incomeCatOption += "</select>";
                                if (found) {
                                    let tableappend = "<tr><td>" + incomeCatOption + "</td>";
                                    tableappend += "<td><input type='number' placeholde='enter amount' class='form-control' id='cat_amount' value = '" + inc.IncomeCategoryValue + "'></td>";
                                    tableappend += "<td><input type='date' placeholde='enter payment deadline' class='form-control' id='cat_deadline' value = '" + inc.payment_deadline + "'></td>";
                                    tableappend += '<td style="text-align: center;"><button type="button" class="btn btn-danger" aria-hidden="true" onclick="deleteRowSuspendList(this);" style="font-size: 20px;padding: 5px 25px;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0 0 2v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4V9a1 1 0 0 0 0-2M8 6h7v1H8zm8 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9h9zm-7.5-6.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5m2 0c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5"/></svg></button></td>';
                                    tableappend += "</tr>";
                                    $('#IncomeCategoryTable2').append(tableappend);
                                }
                            }
                        });


                    }



                    //clear primary data
                    $('#mediumSinhala').prop('checked', false);
                    $('#mediumEnglish').prop('checked', false);
                    $('#selectedDegreeName').val("");
                    $('#selectedAcademicYear').val("");
                    $('#selectedBatchNumber').val("");
                    $('#courseFee').val("");
                    $('#libFee').val("");
                    $('#batchName').val("");
                    $('#proCommenceDate').val("");
                    $('#proEndDate').val("");
                    $('#applicationCallingDate').val("");
                    $('#ApplicationClosingDate').val("");
                    $('#proGPAforPass').val("");

                    // $('#proExtenstionDateValid').val("0");
                    // $('#pronoofExtension').val("");
                    $('#proCreditForComplete').val("");


                    //add primary data
                    $('#selectedDegreeName').val(response[0].degreeCode);
                    $('#selectedAcademicYear').val(response[0].academicYear);
                    $('#selectedBatchNumber').val(response[0].batchNumber);

                    $('#courseFee').val(response[0].courseFee);
                    $('#libFee').val(response[0].libraryFee);
                    $('#batchName').val(response[0].batchName);
                    if (response[0].medium == "both") {
                        $('#mediumSinhala').prop('checked', true);
                        $('#mediumEnglish').prop('checked', true);
                    } else if (response[0].medium == "si") {
                        $('#mediumSinhala').prop('checked', true);
                    } else if (response[0].medium == "en") {
                        $('#mediumEnglish').prop('checked', true);
                    }
                    $('#proCommenceDate').val(response[0].coursecommence);
                    $('#proEndDate').val(response[0].courseend);
                    $('#applicationCallingDate').val(response[0].applicationstarts);
                    $('#ApplicationClosingDate').val(response[0].applicationclose);
                    $('#proCreditForComplete').val(response[0].credits_complete);
                    $('#proGPAforPass').val(response[0].pass_gpa);
                    // $('#pronoofExtension').val(response[0].no_of_extension);
                    // $('#proExtenstionDateValid').val(response[0].extension_to);



                    $('#createBtn').text('Update Batch');
                    $('#createBtn').removeClass('btn-info').addClass('btn-warning').addClass('text-white');
                    $('#createBtn').val(2);

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    console.log(response[0].degreeCode);
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



function deleteBatch(i) {
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
                action: "deleteBatch",
                degreeCode: batchArray[i][0],
                academicYear: batchArray[i][1],
                batchNumber: batchArray[i][2],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/batch.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Batch has been deleted.",
                            icon: "success"
                        });
                        showMenu('formAddViewBatch');
                        getallinstallment();
                        setDegrees();
                        setBatch();

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
