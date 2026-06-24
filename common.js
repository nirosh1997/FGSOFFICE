function setDegrees(needAll = 0) {

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
            if (response && response.length > 0) {
                $('#selectedDegreeName').empty();
                // if(needAll==1){
                degreeOption = "<option value='0'>Please Select Programme</option>";
                $('#selectedDegreeName').append(degreeOption);
                // }
                if (needAll == 1) {
                    if (roleName == 'Administrator' || roleName == 'Assistant Registrar') {
                        degreeOption = "<option value='myDep'>In Faculty</option>";
                        $('#selectedDegreeName').append(degreeOption);
                    }

                }

                let facCode = "";
                let facTitle = "";
                degreeOption = "";

                degreeCodeLength = 0;
                departmentCodeappArr.length = 0;
                degreeCodappeArr.length = 0;
                programmeCodeappeArr.length = 0;
                degreeTitle1Arr.length = 0;
                medium2Arr.length = 0;

                let programmeArray = programmeCode.split(',');


                $.each(response, function (index, degree) {

                    departmentCodeappArr[degreeCodeLength] = degree.departmentCode;
                    degreeCodappeArr[degreeCodeLength] = degree.degreeCode;
                    programmeCodeappeArr[degreeCodeLength] = degree.programmeCode;
                    degreeTitle1Arr[degreeCodeLength] = degree.degreeTitle;
                    medium2Arr[degreeCodeLength] = degree.medium;


                    degreeCodeLength++;

                    if (facCode == "") {
                        facCode = degree.facultyCode;
                        facTitle = degree.facultyTitle;
                    } else if (facCode != degree.facultyCode) {
                        if (degreeOption != "") {
                            if ($('#selectedDegreeName')) {
                                $('#selectedDegreeName').append("<optgroup label='" + facTitle + "'>" + degreeOption + "</optgroup>");
                            }
                            if ($('#degreeWiseAdmision')) {
                                $('#degreeWiseAdmision').append("<optgroup label='" + facTitle + "'>" + degreeOption + "</optgroup>");
                            }
                        }
                        degreeOption = "";
                        facCode = degree.facultyCode;
                        facTitle = degree.facultyTitle;
                    }

                    if (programmeCode != "") {
                        if (programmeArray.includes(degree.degreeCode)) {
                            degreeOption += "<option value=" + degree.degreeCode + " " + ((dataRep["selectedDegreeName"] == degree.degreeCode) ? "selected" : "") + ">" + degree.degreeTitle + "</option>";
                        }
                    } else if (departmentCode != "") {
                        if (degree.departmentCode == departmentCode) {
                            degreeOption += "<option value=" + degree.degreeCode + " " + ((dataRep["selectedDegreeName"] == degree.degreeCode) ? "selected" : "") + ">" + degree.degreeTitle + "</option>";
                        }
                    } else if (facultyCode != "") {
                        if (degree.facultyCode == facultyCode) {
                            degreeOption += "<option value=" + degree.degreeCode + " " + ((dataRep["selectedDegreeName"] == degree.degreeCode) ? "selected" : "") + ">" + degree.degreeTitle + "</option>";
                        }
                    } else {
                        degreeOption += "<option value=" + degree.degreeCode + " " + ((dataRep["selectedDegreeName"] == degree.degreeCode) ? "selected" : "") + ">" + degree.degreeTitle + "</option>";
                    }
                });
                if (degreeOption != "") {
                    if ($('#selectedDegreeName')) {
                        $('#selectedDegreeName').append("<optgroup label='" + facTitle + "'>" + degreeOption + "</optgroup>");
                    }
                    if ($('#degreeWiseAdmision')) {
                        $('#degreeWiseAdmision').append("<optgroup label='" + facTitle + "'>" + degreeOption + "</optgroup>");
                    }

                }
                hideMediums();

            } else {

            }
        },
        error: function (error) {
            console.log(error)
        }
    });



    $(document).ready(function () {
        $('#selectedDegreeName').on('change', function () {
            // alert("call")
            if (degreeCodeLength > 0) {
                for (let index = 0; index < degreeCodeLength; index++) {
                    if (degreeCodappeArr[index] == document.getElementById('selectedDegreeName').value) {
                        if (medium2Arr[index] == "Sin/Eng") {
                            $('.SinMedium').css('display', 'inline-block');
                            $('.EngMedium').css('display', 'inline-block');
                        } else if (medium2Arr[index] == "Eng") {
                            $('.SinMedium').css('display', 'none');
                            $('.EngMedium').css('display', 'inline-block');
                        } else if (medium2Arr[index] == "Sin") {
                            $('.SinMedium').css('display', 'inline-block');
                            $('.EngMedium').css('display', 'none');
                        } else {
                            $('.SinMedium').css('display', 'inline-block');
                            $('.EngMedium').css('display', 'inline-block');
                        }
                        break;
                    }
                }
            } else {
                $('.SinMedium').css('display', 'inline-block');
                $('.EngMedium').css('display', 'inline-block');
            }

        });
    });
}

function hideMediums() {
    if (dataRep["selectedDegreeName"] != "") {
        if (degreeCodeLength > 0) {
            for (let index = 0; index < degreeCodeLength; index++) {
                if (degreeCodappeArr[index] == dataRep["selectedDegreeName"]) {
                    if (medium2Arr[index] == "Sin/Eng") {
                        $('.SinMedium').css('display', 'inline-block');
                        $('.EngMedium').css('display', 'inline-block');

                        $('.MediumRadioFullBox').attr('style', function (i, style) {
                            return (style || '') + 'display: inline-block !important;';
                        });
                        $('.SinMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: inline-block !important;';
                        });
                        $('.EngMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: inline-block !important;';
                        });

                        console.log(dataRep["selectMedium"]);
                        console.log(dataRep["selectMedium"]);
                        if (dataRep["selectMedium"] != undefined) {
                            if (dataRep["selectMedium"] == 'mediumSinhala') {
                                $('.SinMediumRadio').prop('checked', true);
                                md = 'si';
                            } else {
                                $('.SinMediumRadio').prop('checked', false);
                                md = '';
                            }
                        } else {
                            $('.SinMediumRadio').prop('checked', false);
                            md = '';
                        }


                        if (dataRep["selectMedium"] != undefined) {
                            if (dataRep["selectMedium"] == 'mediumEnglish') {
                                $('.EngMediumRadio').prop('checked', true);
                                md = 'en';
                            } else {
                                if (dataRep["selectMedium"] != 'mediumSinhala') {
                                    $('.EngMediumRadio').prop('checked', false);
                                    md = '';
                                }
                            }
                        } else {
                            $('.EngMediumRadio').prop('checked', false);
                            md = '';
                        }
                        console.log(md);



                    } else if (medium2Arr[index] == "Eng") {
                        $('.SinMedium').css('display', 'none');
                        $('.EngMedium').css('display', 'inline-block');
                        $('.MediumRadioFullBox').attr('style', function (i, style) {
                            return (style || '') + 'display: none !important;';
                        });
                        $('.SinMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: none !important;';
                        });
                        $('.EngMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: none !important;';
                        });
                        $('.SinMediumRadio').prop('checked', false);
                        $('.EngMediumRadio').prop('checked', true);
                        md = 'en';
                    } else if (medium2Arr[index] == "Sin") {
                        $('.SinMedium').css('display', 'inline-block');
                        $('.EngMedium').css('display', 'none');
                        $('.MediumRadioFullBox').attr('style', function (i, style) {
                            return (style || '') + 'display: none !important;';
                        });
                        $('.SinMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: none !important;';
                        });
                        $('.EngMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: none !important;';
                        });
                        $('.SinMediumRadio').prop('checked', true);
                        $('.EngMediumRadio').prop('checked', false);
                        md = 'si';
                    } else if (medium2Arr[index] == "Jap") {
                        $('.SinMedium').css('display', 'none');
                        $('.EngMedium').css('display', 'none');
                        $('.MediumRadioFullBox').attr('style', function (i, style) {
                            return (style || '') + 'display: none !important;';
                        });
                        $('.SinMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: none !important;';
                        });
                        $('.EngMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: none !important;';
                        });
                        $('.SinMediumRadio').prop('checked', true);
                        $('.EngMediumRadio').prop('checked', false);
                        md = 'jp';
                    } else {
                        $('.SinMedium').css('display', 'inline-block');
                        $('.EngMedium').css('display', 'inline-block');
                        $('.MediumRadioFullBox').attr('style', function (i, style) {
                            return (style || '') + 'display: inline-block !important;';
                        });
                        $('.SinMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: inline-block !important;';
                        });
                        $('.EngMediumRadioBox').attr('style', function (i, style) {
                            return (style || '') + 'display: inline-block !important;';
                        });
                        if (dataRep["selectMedium"] != undefined) {
                            if (dataRep["selectMedium"] == 'mediumSinhala') {
                                $('.SinMediumRadio').prop('checked', true);
                                md = 'si';
                            } else {
                                $('.SinMediumRadio').prop('checked', false);
                                md = '';
                            }
                        } else {
                            $('.SinMediumRadio').prop('checked', false);
                            md = '';
                        }


                        if (dataRep["selectMedium"] != undefined) {
                            if (dataRep["selectMedium"] == 'mediumEnglish') {
                                $('.EngMediumRadio').prop('checked', true);
                                md = 'en';
                            } else {
                                $('.EngMediumRadio').prop('checked', false);
                                md = '';
                            }
                        } else {
                            $('.EngMediumRadio').prop('checked', false);
                            md = '';
                        }

                    }
                    console.log(md);

                    break;
                }
            }
        } else {
            $('.SinMedium').css('display', 'inline-block');
            $('.EngMedium').css('display', 'inline-block');
            $('.MediumRadioFullBox').attr('style', function (i, style) {
                return (style || '') + 'display: inline-block !important;';
            });
            $('.SinMediumRadioBox').attr('style', function (i, style) {
                return (style || '') + 'display: inline-block !important;';
            });
            $('.EngMediumRadioBox').attr('style', function (i, style) {
                return (style || '') + 'display: inline-block !important;';
            });
            if (dataRep["selectMedium"] != undefined) {
                if (dataRep["selectMedium"] == 'mediumSinhala') {
                    $('.SinMediumRadio').prop('checked', true);
                    md = 'si';
                } else {
                    $('.SinMediumRadio').prop('checked', false);
                    md = '';
                }
            } else {
                $('.SinMediumRadio').prop('checked', false);
                md = '';
            }


            if (dataRep["selectMedium"] != undefined) {
                if (dataRep["selectMedium"] == 'mediumEnglish') {
                    $('.EngMediumRadio').prop('checked', true);
                    md = 'en';
                } else {
                    $('.EngMediumRadio').prop('checked', false);
                    md = '';
                }
            } else {
                $('.EngMediumRadio').prop('checked', false);
                md = '';
            }

        }
    }
}

function checkShowMediums(medium) {
    console.log(dataRep["selectedDegreeName"])
    if (dataRep["selectedDegreeName"] != "") {
        console.log(degreeCodeLength)

        if (degreeCodeLength > 0) {

            for (let index = 0; index < degreeCodeLength; index++) {
                if (degreeCodappeArr[index] == dataRep["selectedDegreeName"]) {
                    if (medium2Arr[index] == "Sin/Eng") {
                        return true;
                    } else if (medium2Arr[index] == "Eng") {
                        if (medium == "Eng") {
                            return true;
                        } else {
                            return false;
                        }
                    } else if (medium2Arr[index] == "Sin") {
                        if (medium == "Sin") {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                    break;
                }
            }
        } else {
            return true;
        }
    }
    return true;

}

function setAcademicYearNew() {
    let date = new Date().getFullYear();
    let AcademicYears = "";
    for (i = 2014; i <= date + 2; i++) {
        if (i == date + 1) {
            AcademicYears += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
        } else {
            AcademicYears += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
        }
    }
    return AcademicYears;
}

function setBatchNumberNew() {
    let BatchNumber = "";
    for (i = 1; i <= 5; i++) {
        BatchNumber += "<option " + ((dataRep["batchNumber"] == i) ? "selected" : "") + " value='" + i + "'>Batch " + i + "</option>";
    }
    return BatchNumber;
}

function setAcademicYearNewNear() {
    let date = new Date().getFullYear();
    let AcademicYears = "";
    AcademicYears += "<option " + ((dataRep["achedamicYear"] == (date - 1)) ? "selected" : "") + " value='" + (date - 1) + "'>" + (date - 1) + "</option>";
    AcademicYears += "<option " + ((dataRep["achedamicYear"] == date) ? "selected" : "") + " value='" + date + "'>" + date + "</option>";
    AcademicYears += "<option " + ((dataRep["achedamicYear"] == (date + 1)) ? "selected" : "") + " value='" + (date + 1) + "'>" + (date + 1) + "</option>";

    return AcademicYears;
}

function setBatches(degrreCode, academicYear) {
    let degreeOption = "";
    
    let postData = {
        action: "getAvailableBatches",
        degreeCode: degrreCode,
        academicYear: academicYear,
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
            if (response && response.length > 0 && response[0].status == 200) {
                let batches = "";
                $.each(response, function (index, batchesList) {
                    if (batchesList.batchNumber != "") {
                        batches += "<option " + ((dataRep["batchNumber"] == "") ? "selected" : "") + " value='" + batchesList.batchNumber + "'>Batch " + batchesList.batchName + "</option>";
                    }
                });
                $('#batchnumber').empty();
                $('#batchnumber').append(batches);
               
            }
        },
        error: function (error) {
            console.log(error)
        }
    });
}



function formatTimeWithAmPm(time) {
    // Create a Date object using the given time
    let date = new Date(`1970-01-01T${time}`);

    // Get the hours and minutes from the date
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Determine AM or PM
    let amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format minutes to always have two digits
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Combine hours, minutes, and AM/PM
    let formattedTime = `${hours}:${minutes} ${amPm}`;

    return formattedTime;
}

function setFacultys() {

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
                }
            }
        },
        error: function (error) {
            console.log(error)
        }
    });
}

function setDepartmentFacutlyWise() {

    let degreeOption = "";
    let postData = {
        action: "getDepartmentFacutlyWise",
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
                let faculty = "";
                $.each(response, function (index, departments) {
                    if (departments.departmentCode != "") {
                        faculty += "<option " + ((dataRep["departmentCode"] == "") ? "selected" : "") + " value='" + departments.departmentCode + "'>" + departments.departmentTitle + "</option>";
                    }
                });
                $('#selectedDepartmentName').empty();
                $('#selectedDepartmentName').append(faculty);

            }
        },
        error: function (error) {
            console.log(error)
        }
    });
}


function setProgrameTypeforCombo() {

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
            if (response && response.length > 0) {
                let faculty = "";
                $.each(response, function (index, programmeType) {
                    if (programmeType.programmeTypeCode != "") {
                        faculty += "<option " + ((dataRep["programmeTypeCode"] == "") ? "selected" : "") + " value='" + programmeType.programmeTypeCode + "'>" + programmeType.programmeTypeTitle + "</option>";
                    }
                });
                $('#selectedDegreeType').empty();
                $('#selectedDegreeType').append(faculty);

            }
        },
        error: function (error) {
            console.log(error)
        }
    });
}


//file upload
function loadDefaultFiles() {
    ul.innerHTML = "";
    document.getElementById("Filelist").innerHTML = "";
    if (AttachmentArray.length > 0) {
        AttachmentArray.forEach(element => {
            console.log("32342");
            RenderThumbnail(element.e, element.readerEvt);
        });
    }
}

function loadDefaultFiles2() {
    ul2.innerHTML = "";
    document.getElementById("Filelist2").innerHTML = "";
    if (AttachmentArray.length > 0) {
        AttachmentArray.forEach(element => {
            RenderThumbnail2(element.e, element.readerEvt);
        });
    }
}

function RenderThumbnail2(e, readerEvt) {
    var li = document.createElement("li");
    ul2.appendChild(li);
    let icon;
    let fileType = readerEvt.type;
    console.log(fileType)
    if (fileType != "image/jpeg" && fileType != "image/png" && fileType != "image/gif" && fileType != "application/pdf") {
        console.log(icon)

        icon = 'https://cdn-icons-png.flaticon.com/512/5968/5968517.png';
    } else if (fileType == "application/pdf") {
        icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png';
    } else {
        icon = e.target.result;
    }
    li.innerHTML = [
        '<div class="img-wrap"> <span class="close">&times;</span>' +
        '<img class="thumb-imageUpload" src="',
        icon,
        '" title="',
        escape(readerEvt.name),
        '" data-id="',
        readerEvt.name,
        '"/>' + "</div>"
    ].join("");

    var div = document.createElement("div");
    div.className = "FileNameCaptionStyle";
    li.appendChild(div);
    div.innerHTML = [readerEvt.name].join("");
    document.getElementById("Filelist2").insertBefore(ul2, null);
}

function showFile() {
    console.log(AttachmentArray)
}
//I added event handler for the file upload control to access the files properties.
// document.addEventListener("DOMContentLoaded", init, false);

//To save an array of attachments
var AttachmentArray = [];
// $(window).on('load', loadDefaultFiles());     


//counter for attachment array
var arrCounter = 0;

//to make sure the error message for number of files will be shown only one time.
var filesCounterAlertStatus = false;

//un ordered list to keep attachments thumbnails
var ul = document.createElement("ul");
var ul2 = document.createElement("ul");
ul.className = "thumb-Images";
ul.id = "imgList";

ul2.className = "thumb-Images";
ul2.id = "imgList";

function init() {
    //add javascript handlers for the file upload event
    document
        .querySelector("#files")
        .addEventListener("change", handleFileSelect, false);
}

//the handler for file upload event
function handleFileSelect(e) {
    //to make sure the user select file/files

    if (!e.target.files) return;

    //To obtaine a File reference
    var files = e.target.files;

    // Loop through the FileList and then to render image files as thumbnails.
    for (var i = 0, f; (f = files[i]); i++) {
        //instantiate a FileReader object to read its contents into memory
        var fileReader = new FileReader();

        // Closure to capture the file information and apply validation.
        fileReader.onload = (function (readerEvt) {
            return function (e) {
                //Apply the validation rules for attachments upload
                ApplyFileValidationRules(readerEvt);

                //Render attachments thumbnails.
                RenderThumbnail(e, readerEvt);
                console.log("123");

                //Fill the array of attachment
                FillAttachmentArray(e, readerEvt);
            };
        })(f);

        // Read in the image file as a data URL.
        // readAsDataURL: The result property will contain the file/blob's data encoded as a data URL.
        // More info about Data URI scheme https://en.wikipedia.org/wiki/Data_URI_scheme
        fileReader.readAsDataURL(f);
    }
    document
        .getElementById("files")
        .addEventListener("change", handleFileSelect, false);
}

//To remove attachment once user click on x button
function getEmailAttachments() {
    var attachments = [];
    for (var i = 0; i < AttachmentArray.length; i++) {
        var attachment = {
            filename: AttachmentArray[i].FileName,
            content: AttachmentArray[i].Content,
            encoding: 'base64'
        };
        attachments.push(attachment);
    }
    return attachments;
}

//Apply the validation rules for attachments upload
function ApplyFileValidationRules(readerEvt) {
    //To check file type according to upload conditions
    if (CheckFileType(readerEvt.type) == false) {
        alert(
            "The file (" +
            readerEvt.name +
            ") does not match the upload conditions, You can only upload jpg/png/gif files"
        );
        e.preventDefault();
        return;
    }

    //To check file Size according to upload conditions
    if (CheckFileSize(readerEvt.size) == false) {
        alert(
            "The file (" +
            readerEvt.name +
            ") does not match the upload conditions, The maximum file size for uploads should not exceed 300 KB"
        );
        e.preventDefault();
        return;
    }

    //To check files count according to upload conditions
    if (CheckFilesCount(AttachmentArray) == false) {
        if (!filesCounterAlertStatus) {
            filesCounterAlertStatus = true;
            alert(
                "You have added more than 10 files. According to upload conditions you can upload 10 files maximum"
            );
        }
        e.preventDefault();
        return;
    }
}

//To check file type according to upload conditions
function CheckFileType(fileType) {
    if (fileType == "image/jpeg") {
        return true;
    } else if (fileType == "image/png") {
        return true;
    } else if (fileType == "image/gif") {
        return true;
    }
    //   else {
    //     return false;
    //   }
    return true;
}

//To check file Size according to upload conditions
function CheckFileSize(fileSize) {
    if (fileSize < 3000000) {
        return true;
    } else {
        return false;
    }
    return true;
}

//To check files count according to upload conditions
function CheckFilesCount(AttachmentArray) {
    //Since AttachmentArray.length return the next available index in the array,
    //I have used the loop to get the real length
    var len = 0;
    for (var i = 0; i < AttachmentArray.length; i++) {
        if (AttachmentArray[i] !== undefined) {
            len++;
        }
    }
    //To check the length does not exceed 10 files maximum
    if (len > 9) {
        return false;
    } else {
        return true;
    }
}

//Render attachments thumbnails.
function RenderThumbnail(e, readerEvt) {
    var li = document.createElement("li");
    ul.appendChild(li);
    let icon;
    let fileType = readerEvt.type;
    console.log(fileType)
    if (fileType != "image/jpeg" && fileType != "image/png" && fileType != "image/gif" && fileType != "application/pdf") {
        console.log(icon)

        icon = 'https://cdn-icons-png.flaticon.com/512/5968/5968517.png';
    } else if (fileType == "application/pdf") {
        icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png';
    } else {
        icon = e.target.result;
        console.log(icon)
    }
    li.innerHTML = [
        '<div class="img-wrap"> <span class="close">&times;</span>' +
        '<img class="thumb-imageUpload 2" src="',
        icon,
        '" title="',
        escape(readerEvt.name),
        '" data-id="',
        readerEvt.name,
        '"/>' + "</div>"
    ].join("");
    console.log(li.innerHTML)


    var div = document.createElement("div");
    div.className = "FileNameCaptionStyle";
    li.appendChild(div);
    div.innerHTML = [readerEvt.name].join("");
    console.log(div.innerHTML)

    if (AttachmentArray.length == 1) {
        document.getElementById("Filelist").innerHTML = "";
    }
    console.log(ul)

    document.getElementById("Filelist").insertBefore(ul, null);
}

//Fill the array of attachment
function FillAttachmentArray(e, readerEvt) {
    console.log(AttachmentArray);
    AttachmentArray[arrCounter] = {
        AttachmentType: 1,
        ObjectType: 1,
        FileName: readerEvt.name,
        FileDescription: "Attachment",
        NoteText: "",
        MimeType: readerEvt.type,
        Content: e.target.result.split("base64,")[1],
        FileSizeInBytes: readerEvt.size,
        readerEvt: readerEvt,
        e: e
    };
    arrCounter = arrCounter + 1;
}


function removeMainData() {
    dataRep['selectedDegreeName'] = "";
    dataRep['achedamicYear'] = "";
    dataRep['achedamicYear'] = "";
    applicationNoLength = studentNoLength = 0;
}

function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) return "th"; // Special case for 11, 12, 13
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}


function getAllTemplate() {

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
            console.log(response)
            if (response && response.length > 0) {
                $('#selectedTemplateid').empty();
                // if(needAll==1){
                degreeOption = "<option value='0'>Please Select Template</option>";
                $.each(response, function (index, template) {
                    degreeOption += "<option value=" + template.id + " " + ((dataRep["selectedTemplateid"] == template.id) ? "selected" : "") + ">" + template.type + " : " + template.name + "</option>";

                });

                $('#selectedTemplateid').append(degreeOption);


            } else {

            }
        },
        error: function (error) {
            console.log(error)
        }
    });


}