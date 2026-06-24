var applicantDTable;
function DataTableForTemplates() {

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





function formAddViewTemplates(dsp) {

    var selectedChecked = "";
    var registeredChecked = "";
    str = "";
    title = "Template Mangement";

    if (dsp == "formAddViewTemplates") {

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
        str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Template Type</label></div>';
        str += '<div class="col-sm-4" style="display: inline-flex;">';
        str += '<input type="hidden" id="templateID" value="">';
        str += '<select class="form-control form-control-sm" id="selectedTemplate">';
        str += '<option value="Email">Email</option>';
        str += '<option value="Letter">Letter</option>';
        str += '</select>';
        str += '</div>';
        str += '</div><br>';


        str += '<div class="row">';
        str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Template Name</label></div>';
        str += '<div class="col-sm-6" style="display: inline-flex;">';
        str += '<input type="text" id="templateName" value="" class="form-control form-control-sm">';
        str += '</div>';
        str += '</div><br><br>';


        str += '<div class="row">';
        str += '<div class="col-sm-2" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Template</label></div>';
        str += '<div class="col-sm-7" style="display: inline-flex;">';
        str += '<textarea class="form-control form-control-sm" id="message" placeholder="Enter Message" rows="50" required></textarea>';
        // str += await setDegrees();
        str += '</select>';
        str += '</div>';
        str += '<div class="col-sm-3" style="">';
        str += '<p>Fields Name</p><ul>';
        str += '<li>Student Number : [student_no]</li>';
        str += '<li>Application Number : [application_number]</li>';
        str += '<li>Name With Inials : [name_of_student]</li>';
        str += '<li>Full Name : [full_name]</li>';
        str += '<li>Academic Year : [academic_year]</li>';
        str += '<li>Degree Name: [degree_name]</li>';
        str += '<li>NIC: [nic]</li>';
        str += '<li>Address: [address]</li>';
        str += '</ul>';
        // str += await setDegrees();
        str += '</div>';

        str += '</div>';


        str += '<br><br>';

        str += '<div class="row">';
        str += '<div class="col-sm-12" style="display: inline-flex;">';
        str += '<div class="col-sm-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="createEmailLetterTemplate();" id="createBtn" value=1>Create Templates</button>';
        str += '<button type="button" class="btn btn-primary mr-2" style="float:right" onclick="printLetterPreivew();" >Letter Print Preiview</button></div>';

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
        str += '<th>Type</th>';
        str += '<th>Template Name</th>';
        str += '<th>Template</th>';
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


function setSummonNote() {
    $('#message').summernote({
        height: 300,
        toolbar: [
            // Style
            ['style', ['style', 'bold', 'italic', 'underline', 'strikethrough', 'clear']],
            // Font
            ['font', ['fontname', 'fontsize', 'forecolor', 'backcolor']],
            // Paragraph
            ['para', ['ul', 'ol', 'paragraph', 'height']],
            // Insert
            ['insert', ['link', 'picture', 'video', 'table', 'hr', 'emoji']],
            // Misc
            ['misc', ['fullscreen', 'codeview', 'help', 'undo', 'redo']],
            // Custom: Font style / alignment
            //   ['fontstyle', ['superscript','subscript','justifyLeft','justifyCenter','justifyRight','justifyFull']]
        ],
        // fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Helvetica', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
        fontSizes: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '24', '28', '32', '36', '48', '64', '72']

    });
}


var templateArray = new Array();


function printLetterPreivew() {

    var gtDiv = ``;

    var c = 0;
    gtDiv += printHeader();
    let textFile = $("#message").val();

    // gtDiv += setDATAFILE(textFile);
    // Paginate automatically
    let pages = paginateContent(textFile);
    console.log(pages)
    // Build final HTML with repeated headers and footers
    let finalHtml = '';
    pages.forEach(pageHtml => {
        // finalHtml += printHeader();
        finalHtml += `<div class="page" style="margin-top:140px; margin-bottom:100px;">${pageHtml}</div>`;
        // finalHtml += printFooter();
        finalHtml += `<p style="page-break-after: always;"></p>`;
    });
    gtDiv += finalHtml;
    // setDATAFILE

    gtDiv += printFooter();

    firtspageheader = 0;
    var reportWindow = window.open();
    reportWindow.document.write(gtDiv);
    reportWindow.print();

    reportWindow.document.close();






}

function setTemplates() {

    let degreeOption = "";
    let postData = {
        action: "gettemplate",
        authcode: authcode,
        username: dataRep['userId'],
    };
    $.ajax({
        type: 'POST',
        url: 'rules/templates.php',
        data: postData,
        dataType: 'json',
        success: function (response) {
            $('#batchTable').empty();
            templateArray.length = 0;
            if (response && response.length > 0) {
                let count = 0;
                $.each(response, function (index, batches) {
                    if (batches.departmentCode != "") {
                        templateArray[count] = [batches.id];


                        let department = "";
                        department += "<tr>";
                        department += "<td >" + batches.type + "</td>";
                        department += "<td >" + batches.name + "</td>";

                        department += "<td >" + batches.template + "</td>";
                        // department += "<td width='5%' ><button class='btn btn-warning  btn-sm' style='color:#fff' onclick=updateDepartment('" + count + "')>Update</button></td>";
                        department += "<td width='5%' '><button class='btn btn-warning btn-sm' style='color:#fff'  onclick=updateTemplate('" + count + "')>Update</button></td>";
                        department += "<td width='5%' '><button class='btn btn-danger btn-sm' style='color:#fff'  onclick=deleteTemplate('" + count + "')>Delete</button></td>";
                        department += "</tr>";
                        $('#batchTable').append(department);
                        count++;
                    }
                });

            }
            console.log(response)
            DataTableForTemplates();
        },
        error: function (error) {
            console.log(error)
        }
    });

    setSummonNote();
}



function createEmailLetterTemplate() {


    if ($('#createBtn').val() == 1) {
        var postData = {
            action: "createEmailLetterTemplate",
            type: $("#selectedTemplate option:selected").val(),
            templateName: $("#templateName").val(),
            template: $("#message").val(),
            authcode: authcode,
            username: dataRep['userId'],
        };
        $.ajax({
            type: 'POST',
            url: 'rules/templates.php', // Replace with your server-side script URL
            data: postData,
            dataType: 'json',
            success: function (response) {
                console.log(response)
                if (response.status == 200) {
                    Swal.fire({
                        title: "Created!",
                        text: "Template has been created.",
                        icon: "success"
                    });
                    showMenu('formAddViewTemplates');
                    // getallinstallment();
                    // setDegrees();
                    setTemplates();

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
                    action: "deleteTempalte",
                    id: $("#templateID").val(),
                    authcode: authcode,
                    username: dataRep['userId'],
                };

                $.ajax({
                    type: 'POST',
                    url: 'rules/templates.php', // Replace with your server-side script URL
                    data: postData,
                    dataType: 'json',
                    success: function (response) {
                        if (response.status == 200) {
                            var postData = {
                                action: "createEmailLetterTemplate",
                                type: $("#selectedTemplate option:selected").val(),
                                templateName: $("#templateName").val(),
                                template: $("#message").val(),
                                authcode: authcode,
                                username: dataRep['userId'],
                            };
                            $.ajax({
                                type: 'POST',
                                url: 'rules/templates.php', // Replace with your server-side script URL
                                data: postData,
                                dataType: 'json',
                                success: function (response) {
                                    console.log(response)
                                    if (response.status == 200) {
                                        Swal.fire({
                                            title: "Updated!",
                                            text: "Template has been updated.",
                                            icon: "success"
                                        });
                                        showMenu('formAddViewTemplates');
                                        // getallinstallment();
                                        // setDegrees();
                                        setTemplates();

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



function updateTemplate(i) {
    let postData = {
        action: "getDataForTemplateUpdate",
        id: templateArray[i][0],
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/templates.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            console.log(response)
            $('#selectedTemplate').val("");
            $('#templateName').val("");
            // $('#message').val("");
            $('#message').summernote('code', "<p></p>");

            $('#templateID').val("");

            $('#templateName').val(response[0].name);
            $('#selectedTemplate').val(response[0].type);
            $('#message').summernote('code', response[0].template);
            // $('#message').val(response[0].template);
            $('#templateID').val(response[0].id);


            $('#createBtn').text('Update Template');
            $('#createBtn').removeClass('btn-info').addClass('btn-warning').addClass('text-white');
            $('#createBtn').val(2);

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
}



function deleteTemplate(i) {
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
                action: "deleteTempalte",
                id: templateArray[i][0],
                authcode: authcode,
                username: dataRep['userId'],
            };

            $.ajax({
                type: 'POST',
                url: 'rules/templates.php', // Replace with your server-side script URL
                data: postData,
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Template has been deleted.",
                            icon: "success"
                        });
                        showMenu('formAddViewTemplates');
                        // getallinstallment();
                        // setDegrees();
                        setTemplates();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Deleted Failed',
                            text: response.message,
                        });
                    }
                },
                error: function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Deleted Failed',
                        text: error,
                    });
                }
            });

        }
    });
}
