
function emailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


//dialog campus university
function openInputBulkEmail(p_emails, msg = '', subject = "") {
    if (dataRep['userEmail'] != "" && dataRep['userEmail'] != null) {
        AttachmentArray.length = 0;
        arrCounter = 0;
        ul.innerHTML = "";
        let editor1;
        if (msg == 0) {
            msg = "";
        }

        if (subject == 0) {
            subject = "";
        }
        let processedEmails = p_emails.map((email) => {

            if (!emailValid(email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Email Alert',
                    text: "Error: Unable to send Emails to " + email,
                });
                return null; // Return null for invalid numbers
            } else {
                return email;
            }
        }).filter((mail) => mail !== null).join(', ');

        if (processedEmails === '') {
            // No valid numbers to display
            Swal.fire({
                icon: 'error',
                title: 'Email Alert',
                text: 'No valid emails available.',
            });
            return;
        }
        Swal.fire({
            title: 'Send Email',
            html:
                '<form>' +
                '<div class="row mb-3">' +
                '  <label for="emailAddress" class="col-sm-1 col-form-label" style="font-size: 14px;">To:</label>' +
                '  <div class="col-sm-11">' +
                '    <input type="tel" class="form-control form-control-sm" id="emailAddress" placeholder="Enter Emails" required value="' + processedEmails + '">' +
                '  </div>' +
                '</div>' +
                '<div class="row mb-3">' +
                '  <label for="emailAddress" class="col-sm-1 col-form-label" style="font-size: 14px;">Subject:</label>' +
                '  <div class="col-sm-11">' +
                '    <input type="tel" class="form-control form-control-sm" id="emailsubject" placeholder="Enter Subject" required value="' + subject + '">' +
                '  </div>' +
                '</div>' +
                '<div class="row mb-3">' +
                '  <label for="message" class="col-sm-1 col-form-label" style="font-size: 14px;">Message:</label>' +
                '  <div class="col-sm-11">' +
                '    <textarea class="form-control form-control-sm" id="message" placeholder="Enter Message" rows="50" required>' + msg + '</textarea>' +

                '  </div>' +
                '</div>' +
                '<div class="row mb-3">' +
                '<div class="col-sm-12" style="text-align:Left">' +
                '<label style="font-size: 14px;">' +
                '<span style="color: navy; font- weight: bold">Attachment Instructions :</span>' +
                '</label>' +
                '<ul>' +
                '<li>' +
                'Allowed only files with extension (jpg, png,doc,pdf)' +
                '</li>' +
                '<li>' +
                'Maximum number of allowed files 10 with 300 KB for each' +
                '</li>' +
                '<li>' +
                'you can select files from different folders' +
                '</li>' +
                '</ul>' +
                '<span class="btn-imageUpload btn-success-imageUpload fileinput-button">' +
                '<span>Select Attachment</span>' +
                '<input type="file" name="files[]" id="files" multiple><br />' +
                '</span>' +
                '<output id="Filelist" style="    display: block;"></output>' +
                '  </div>' +
                '</div>' +
                '</form>',
            customClass: 'swal-wide',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Send',
            preConfirm: () => {
                const emailAddress = Swal.getPopup().querySelector('#emailAddress').value.split(',').map((num) => num.trim());
                const message = Swal.getPopup().querySelector('#message').value;

                const completeMessagesend = message + "\n\n " + dataRep['userName'] + " - " + dataRep['roleName'];
                const completeMessage = message + "<br><p>" + dataRep['userName'] + " - " + dataRep['roleName'] + "</p>";
                const subject = Swal.getPopup().querySelector('#emailsubject').value;

                Swal.fire({
                    title: 'Are you sure?',
                    html: `<div class="msgSHow">
                <p style="font-size: 20px;text-align: justify;font-weight: bolder;">To:</p>
                <p style="font-size: 14px;text-align: justify;"> ${emailAddress.join(',')}</p><br>
                <p style="font-size: 20px;text-align: justify;font-weight: bolder;">Subject:</p>
                <p style="font-size: 14px;text-align: justify;"> ${subject}</p><br>
                <p style="font-size: 20px;text-align: justify;    font-weight: bolder;">Message:</p><div style="padding: 10px;border: 1px solid #ccc;"><p style="font-size: 14px;text-align: justify;"> ${completeMessage}</p></div><output id="Filelist2" style="    display: block;"></output></div>`,
                    customClass: 'swal-wide',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, send it!',
                    cancelButtonText: 'No, cancel!',
                    showDenyButton: true,
                    denyButtonText: 'Edit Email',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // User clicked "Yes", send SMS and show success message
                        const attachments = getEmailAttachments();
                        let campaignNo = 0;
                        var postData = {
                            action: "setEmailLog",
                            from: dataRep['userEmail'],
                            senderName: dataRep['userName'],
                            senderId: dataRep['userId'],
                            // to: email,
                            subject: subject,
                            text: completeMessage,
                            attachments: attachments,
                            authcode: authcode,
                            username: dataRep['userId'],
                        };

                        $.ajax({
                            type: 'POST',
                            url: 'rules/setCommunicationLog.php',
                            data: postData,
                            dataType: 'json',
                            success: function (response) {
                                // console.log(response);

                                campaignNo = response.campId;
                                // console.log(campaignNo);
                                emailAddress.forEach((email) => {
                                    var postData = {
                                        action: "sendEmail",
                                        from: dataRep['userEmail'],
                                        senderName: dataRep['userName'],
                                        to: email,
                                        subject: subject,
                                        text: completeMessage,
                                        attachments: attachments,
                                        authcode: authcode,
                                        username: dataRep['userId'],
                                    };

                                    // $.ajax({
                                    //     type: 'POST',
                                    //     url: 'rules/email.php', // Replace with your server-side script URL
                                    //     data: postData,
                                    //     dataType: 'json',
                                    //     success: function (response) {
                                            // console.log(response)

                                            // if (response == 200) {
                                                var postData = {
                                                    action: "setEmailLogUser",
                                                    campaignNo: campaignNo,
                                                    to: email,
                                                    authcode: authcode,
                                                    username: dataRep['userId'],
                                                };

                                                $.ajax({
                                                    type: 'POST',
                                                    url: 'rules/setCommunicationLog.php',
                                                    data: postData,
                                                    dataType: 'json',
                                                    success: function (response) {
                                                        // console.log(response)
                                                    },
                                                    error: function (error) {
                                                        console.log(error)
                                                    }
                                                });

                                            // } else {

                                            // }
                                            // console.log(response)
                                    //     },
                                    //     error: function (error) {
                                    //         console.log(error)
                                    //     }
                                    // });
                                });
                            },
                            error: function (error) {
                                console.log(error)
                            }
                        });



                        Swal.fire({
                            icon: 'success',
                            title: 'Message Sent',
                            text: 'Your message has been sent successfully!',
                        });
                    } else if (result.isDenied) {
                        const EditEmail = [];
                        emailAddress.forEach((email) => {
                            EditEmail.push(email);
                        });
                        openInputBulkEmail(EditEmail, message, subject);
                    } else {
                        // User clicked "No" or closed the dialog, you can handle this accordingly
                        // console.log('User canceled SMS sending');
                    }
                });
                loadDefaultFiles2();

            }
        });

        // editor1 = new RichTextEditor("#div_editor1");
        // const inputElement = document.querySelector('input[type="file"]');

        // Create a FilePond instance
        // const pond = FilePond.create(inputElement);
        // $('#message').richText();
        $('#message').summernote({
            height: 300
        });

        document
            .querySelector("#files")
            .addEventListener("change", handleFileSelect, false);


        if (AttachmentArray.length > 0) {
            loadDefaultFiles();
        }

        jQuery(function ($) {
            $("div").on("click", ".img-wrap .close", function () {
                var id = $(this)
                    .closest(".img-wrap")
                    .find("img")
                    .data("id");
                //to remove the deleted item from array
                var elementPos = AttachmentArray.map(function (x) {
                    return x.FileName;
                }).indexOf(id);
                if (elementPos !== -1) {
                    AttachmentArray.splice(elementPos, 1);
                }

                //to remove image tag
                $(this)
                    .parent()
                    .find("img")
                    .not()
                    .remove();

                //to remove div tag that contain the image
                $(this)
                    .parent()
                    .find("div")
                    .not()
                    .remove();

                //to remove div tag that contain caption name
                $(this)
                    .parent()
                    .parent()
                    .find("div")
                    .not()
                    .remove();

                //to remove li tag
                var lis = document.querySelectorAll("#imgList li");
                for (var i = 0; (li = lis[i]); i++) {
                    if (li.innerHTML == "") {
                        li.parentNode.removeChild(li);
                    }
                }
            });
        });


        $(".enter-mail-id").keydown(function (e) {
            if (e.keyCode == 13 || e.keyCode == 32) {
                var getValue = $(this).val();
                if (mobileNumberValid(getValue) != 0) {
                    let no = mobileNumberValid(getValue);
                    $('.all-mail').append('<span class="email-ids">' + no + ' <span class="cancel-email" onclick=removeNumber("' + no + '")>x</span></span>');
                    $(this).val('');
                } else {
                    $('#mobileEnter').css("color", "red");
                    $('#mobileEnter').val(getValue);
                }

            }
        });


        $(document).on('click', '.cancel-email', function () {

            $(this).parent().remove();

        });

    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Please set your primary email',
            text: 'You need to set a primary email before sending. Go to "Edit Profile" and set a primary email.',
            confirmButtonText: 'OK'
        });
    }

}

var emailList = [];
var nameMapping = {};
var completeMessage = "";
var subject = "";
var emailsender = "";



function openInputBulkEmailBultByDeveloper(msg = '', subject = "") {
    AttachmentArray.length = 0;
    arrCounter = 0;
    ul.innerHTML = "";
    let editor1;
    if (msg == 0) {
        msg = "";
    }

    if (subject == 0) {
        subject = "";
    }

    Swal.fire({
        title: 'Send Email',
        html:
            '<form>' +
            '<div class="row mb-3">' +
            '  <div class="col-sm-12">' +
            '    <label>* if you want set name on email containt set name positon as a [name_of_student]</lable>' +
            '  </div>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label class="col-sm-1 col-form-label" style="font-size: 14px;">Upload Excel:</label>' +
            '  <div class="col-sm-11">' +
            '    <input type="file" id="excelFile" accept=".xls,.xlsx" class="form-control form-control-sm">' +
            '  </div>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label for="emailAddress" class="col-sm-1 col-form-label" style="font-size: 14px;">Sender Email:</label>' +
            '  <div class="col-sm-11">' +
            '    <input type="sender" class="form-control form-control-sm" id="emailsender" placeholder="Sender Email" required value="' + subject + '">' +
            '  </div>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label for="emailAddress" class="col-sm-1 col-form-label" style="font-size: 14px;">Subject:</label>' +
            '  <div class="col-sm-11">' +
            '    <input type="tel" class="form-control form-control-sm" id="emailsubject" placeholder="Enter Subject" required value="' + subject + '">' +
            '  </div>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label for="message" class="col-sm-1 col-form-label" style="font-size: 14px;">Message:</label>' +
            '  <div class="col-sm-11">' +
            '    <textarea class="form-control form-control-sm" id="message" placeholder="Enter Message" rows="50" required>' + msg + '</textarea>' +

            '  </div>' +
            '</div>' +
            '<div class="row mb-3">' +
            '<div class="col-sm-12" style="text-align:Left">' +
            '<label style="font-size: 14px;">' +
            '<span style="color: navy; font- weight: bold">Attachment Instructions :</span>' +
            '</label>' +
            '<ul>' +
            '<li>' +
            'Allowed only files with extension (jpg, png,doc,pdf)' +
            '</li>' +
            '<li>' +
            'Maximum number of allowed files 10 with 300 KB for each' +
            '</li>' +
            '<li>' +
            'you can select files from different folders' +
            '</li>' +
            '</ul>' +
            '<span class="btn-imageUpload btn-success-imageUpload fileinput-button">' +
            '<span>Select Attachment</span>' +
            '<input type="file" name="files[]" id="files" multiple><br />' +
            '</span>' +
            '<output id="Filelist" style="    display: block;"></output>' +
            '  </div>' +
            '</div>' +
            '</form>',
        customClass: 'swal-wide',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Send',
        preConfirm: () => {
            return new Promise((resolve) => {
                console.log("343")
                const fileInput = Swal.getPopup().querySelector('#excelFile');
                // const emailAddress = Swal.getPopup().querySelector('#emailAddress').value.split(',').map((num) => num.trim());
                const message = Swal.getPopup().querySelector('#message').value;
                if (fileInput.files.length > 0) {
                    const file = fileInput.files[0];
                    const reader = new FileReader();
           

                    reader.onload = (e) => {
                        const data = new Uint8Array(e.target.result);
                        const workbook = XLSX.read(data, { type: 'array' });
                        const sheetName = workbook.SheetNames[0];
                        const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                        emailList = [];
                        nameMapping = {};
                        sheet.forEach(row => {
                            if (row.Email && row.Name) {
                                emailList.push(row.Email.trim());
                                nameMapping[row.Email.trim()] = row.Name.trim();
                            }
                        });
                        const completeMessagesend = message + "\n\n " + dataRep['userName'] + " - " + dataRep['roleName'];
                        completeMessage = message;
                        subject = Swal.getPopup().querySelector('#emailsubject').value;
                        emailsender = Swal.getPopup().querySelector('#emailsender').value;
                        resolve();
                    };
                    reader.readAsArrayBuffer(file);


                } else {
                    resolve();
                }

            });
        }
    }).then((result) => {
        if (result.isConfirmed) {

            Swal.fire({
                title: 'Are you sure?',
                html: `<div class="msgSHow">
    <p style="font-size: 20px;text-align: justify;font-weight: bolder;">To:</p>
    <p style="font-size: 14px;text-align: justify;"> ${emailList.join(',')}</p><br>
    <p style="font-size: 20px;text-align: justify;font-weight: bolder;">Subject:</p>
    <p style="font-size: 14px;text-align: justify;"> ${subject}</p><br>
    <p style="font-size: 20px;text-align: justify;    font-weight: bolder;">Message:</p><div style="padding: 10px;border: 1px solid #ccc;"><p style="font-size: 14px;text-align: justify;"> ${completeMessage}</p></div><output id="Filelist2" style="    display: block;"></output></div>`,
                customClass: 'swal-wide',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, send it!',
                cancelButtonText: 'No, cancel!',
                showDenyButton: true,
                denyButtonText: 'Edit Email',
            }).then((result) => {
                if (result.isConfirmed) {
                    // User clicked "Yes", send SMS and show success message
                    const attachments = getEmailAttachments();
                    let campaignNo = 0;
                    var postData = {
                        action: "setEmailLog",
                        from: emailsender,
                        senderName: dataRep['userName'],
                        senderId: dataRep['userId'],
                        // to: email,
                        subject: subject,
                        text: completeMessage,
                        attachments: attachments,
                        authcode: authcode,
                        username: dataRep['userId'],
                    };

                    $.ajax({
                        type: 'POST',
                        url: 'rules/setCommunicationLog.php',
                        data: postData,
                        dataType: 'json',
                        success: function (response) {
                            // console.log(response);

                            campaignNo = response.campId;
                            // const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
                            const sendEmails = async () => {
                                for (const email of emailList) {
                                    // await sleep(5000); // Wait for 5 seconds before sending the next email
                                    // console.log(email);

                                    // var postData = {
                                    //     action: "sendEmail",
                                    //     from: emailsender,
                                    //     senderName: dataRep['userName'],
                                    //     to: email,
                                    //     subject: subject,
                                    //     text: completeMessage.replace(/\[name_of_student\]/g, nameMapping[email]),
                                    //     attachments: attachments,
                                    //     authcode: authcode,
                                    //     username: dataRep['userId'],
                                    // };

                                    try {
                                        // const response = await $.ajax({
                                        //     type: 'POST',
                                        //     url: 'rules/email.php',
                                        //     data: postData,
                                        //     dataType: 'json'
                                        // });

                                        // if (response == 200) {
                                            var logPostData = {
                                                action: "setEmailLogUser",
                                                campaignNo: campaignNo,
                                                to: email,
                                                authcode: authcode,
                                                username: dataRep['userId'],
                                            };

                                            await $.ajax({
                                                type: 'POST',
                                                url: 'rules/setCommunicationLog.php',
                                                data: logPostData,
                                                dataType: 'json'
                                            });
                                        // }
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                            };

                            sendEmails();
                        },
                        error: function (error) {
                            console.log(error)
                        }
                    });



                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent',
                        text: 'Your message has been sent successfully!',
                    });
                } else if (result.isDenied) {
                    const EditEmail = [];
                    emailAddress.forEach((email) => {
                        EditEmail.push(email);
                    });
                    openInputBulkEmail(EditEmail, message, subject);
                } else {
                    // User clicked "No" or closed the dialog, you can handle this accordingly
                    // console.log('User canceled SMS sending');
                }

                loadDefaultFiles2();

            });

        }
    });

    $('#message').summernote({
        height: 300
    });

    document
        .querySelector("#files")
        .addEventListener("change", handleFileSelect, false);


    if (AttachmentArray.length > 0) {
        loadDefaultFiles();
    }

    jQuery(function ($) {
        $("div").on("click", ".img-wrap .close", function () {
            var id = $(this)
                .closest(".img-wrap")
                .find("img")
                .data("id");
            //to remove the deleted item from array
            var elementPos = AttachmentArray.map(function (x) {
                return x.FileName;
            }).indexOf(id);
            if (elementPos !== -1) {
                AttachmentArray.splice(elementPos, 1);
            }

            //to remove image tag
            $(this)
                .parent()
                .find("img")
                .not()
                .remove();

            //to remove div tag that contain the image
            $(this)
                .parent()
                .find("div")
                .not()
                .remove();

            //to remove div tag that contain caption name
            $(this)
                .parent()
                .parent()
                .find("div")
                .not()
                .remove();

            //to remove li tag
            var lis = document.querySelectorAll("#imgList li");
            for (var i = 0; (li = lis[i]); i++) {
                if (li.innerHTML == "") {
                    li.parentNode.removeChild(li);
                }
            }
        });
    });


    $(".enter-mail-id").keydown(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
            var getValue = $(this).val();
            if (mobileNumberValid(getValue) != 0) {
                let no = mobileNumberValid(getValue);
                $('.all-mail').append('<span class="email-ids">' + no + ' <span class="cancel-email" onclick=removeNumber("' + no + '")>x</span></span>');
                $(this).val('');
            } else {
                $('#mobileEnter').css("color", "red");
                $('#mobileEnter').val(getValue);
            }

        }
    });


    $(document).on('click', '.cancel-email', function () {

        $(this).parent().remove();

    });



}



function sendDirectEmail(from, senderName, email, subject, completeMessage) {
    var postData = {
        action: "sendEmail",
        from: from,
        senderName: senderName,
        to: email,
        subject: subject,
        text: completeMessage,
        authcode: authcode,
        username: dataRep['userId'],
    };

    $.ajax({
        type: 'POST',
        url: 'rules/email.php', // Replace with your server-side script URL
        data: postData,
        dataType: 'json',
        success: function (response) {
            console.log(response)
        },
        error: function (error) {
            console.log(error.responseText)
        }
    });

}



//new code
// let emailList = [];
// let nameMapping = {};
// let subject = '';
// let completeMessage = '';
// let emailsender = '';

function openInputBulkEmailBultByDeveloper2(msg = '', subjectVal = '') {

    emailList = [];
    nameMapping = {};
    AttachmentArray.length = 0;
    arrCounter = 0;
    ul.innerHTML = "";
    let selectLable;
    Swal.fire({
        title: 'Send Bulk Email',
        customClass: 'swal-wide',
        showCancelButton: true,
        confirmButtonText: 'Next',
        focusConfirm: false,

        html: `
        <form id="bulkEmailForm">

            <div class="row mb-2">
                <div class="col-sm-12">
                    <label style="font-size:13px">
                        Use <b>[name_of_student]</b> to personalize email content
                    </label>
                </div>
            </div>

            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">Recipient Group</label>
                <div class="col-sm-10">
                    <select id="emailLabel" class="form-control form-control-sm">
                        <option value="">Loading...</option>
                    </select>
                    <small id="recipientCount" style="color:green"></small>
                </div>
            </div>

            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">Sender Email</label>
                <div class="col-sm-10">
                    <input type="email" id="emailsender" class="form-control form-control-sm" required>
                </div>
            </div>

            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">Subject</label>
                <div class="col-sm-10">
                    <input type="text" id="emailsubject" class="form-control form-control-sm" value="${subjectVal}" required>
                </div>
            </div>

            <div class="row mb-3"> 
              <label for="message" class="col-sm-1 col-form-label" style="font-size: 14px;">Message:</label> 
              <div class="col-sm-11"> 
                <textarea class="form-control form-control-sm" id="message" placeholder="Enter Message" rows="50" required></textarea> 

              </div> 
            </div> 
            <div class="row mb-3"> 
            <div class="col-sm-12" style="text-align:Left"> 
            <label style="font-size: 14px;"> 
            <span style="color: navy; font- weight: bold">Attachment Instructions :</span> 
            </label> 
            <ul> 
            <li> 
            Allowed only files with extension (jpg, png,doc,pdf) 
            </li> 
            <li> 
            Maximum number of allowed files 10 with 300 KB for each 
            </li> 
            <li> 
            you can select files from different folders 
            </li> 
            </ul> 
            <span class="btn-imageUpload btn-success-imageUpload fileinput-button"> 
            <span>Select Attachment</span> 
            <input type="file" name="files[]" id="files" multiple><br /> 
            </span> 
            <output id="Filelist" style="    display: block;"></output> 
              </div> 
            </div> 
            </form>
        `,
        didOpen: () => {

            // Load recipient labels
            loadEmailLabels();
        },
        preConfirm: () => {

            // const fileInput = Swal.getPopup().querySelector('#excelFile');
            // const emailAddress = Swal.getPopup().querySelector('#emailAddress').value.split(',').map((num) => num.trim());
            const message = Swal.getPopup().querySelector('#message').value;
            emailsender = $('#emailsender').val();
            subject = $('#emailsubject').val();
            const completeMessagesend = message + "\n\n " + dataRep['userName'] + " - " + dataRep['roleName'];
            completeMessage = message;

            if (!emailsender || !subject || !completeMessage || emailList.length === 0) {
                Swal.showValidationMessage('All fields and recipient group are required');
                return false;
            }

            selectLable = $('#emailLabel').val();
            console.log("find");
            console.log("654")

        }
    }).then(result => {
        if (result.isConfirmed) {
            showConfirmAndSend(selectLable);
        }
    });

    $('#message').summernote({
        height: 300
    });

    document
        .querySelector("#files")
        .addEventListener("change", handleFileSelect, false);


    if (AttachmentArray.length > 0) {
        loadDefaultFiles();
    }

    jQuery(function ($) {
        $("div").on("click", ".img-wrap .close", function () {
            var id = $(this)
                .closest(".img-wrap")
                .find("img")
                .data("id");
            //to remove the deleted item from array
            var elementPos = AttachmentArray.map(function (x) {
                return x.FileName;
            }).indexOf(id);
            if (elementPos !== -1) {
                AttachmentArray.splice(elementPos, 1);
            }

            //to remove image tag
            $(this)
                .parent()
                .find("img")
                .not()
                .remove();

            //to remove div tag that contain the image
            $(this)
                .parent()
                .find("div")
                .not()
                .remove();

            //to remove div tag that contain caption name
            $(this)
                .parent()
                .parent()
                .find("div")
                .not()
                .remove();

            //to remove li tag
            var lis = document.querySelectorAll("#imgList li");
            for (var i = 0; (li = lis[i]); i++) {
                if (li.innerHTML == "") {
                    li.parentNode.removeChild(li);
                }
            }
        });
    });


    $(".enter-mail-id").keydown(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
            var getValue = $(this).val();
            if (mobileNumberValid(getValue) != 0) {
                let no = mobileNumberValid(getValue);
                $('.all-mail').append('<span class="email-ids">' + no + ' <span class="cancel-email" onclick=removeNumber("' + no + '")>x</span></span>');
                $(this).val('');
            } else {
                $('#mobileEnter').css("color", "red");
                $('#mobileEnter').val(getValue);
            }

        }
    });


    $(document).on('click', '.cancel-email', function () {

        $(this).parent().remove();

    });
}

function loadEmailLabels() {

    $.ajax({
        type: 'POST',
        url: 'rules/emaillog.php',
        dataType: 'json',
        data: {
            action: 'getEmailLable',
            authcode: authcode,
            username: dataRep['userId']
        },
        success: function (labels) {

            let html = `<option value="">-- Select Group --</option>`;
            html += `<option value="ALL">All Emails</option>`;

            labels.forEach(l => {
                html += `<option value="${l.id}">${l.label_name}</option>`;
            });

            $('#emailLabel').html(html);
        },
        error: function (err) {
            console.error('Failed to load email labels', err);
        }
    });

    // Avoid duplicate bindings
    $('#emailLabel').off('change').on('change', function () {
        loadRecipientsByLabel(this.value);
    });
}


function loadRecipientsByLabel(labelId) {

    emailList = [];
    nameMapping = {};

    if (!labelId) {
        $('#recipientCount').text('');
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'rules/emaillog.php',
        dataType: 'json',
        data: {
            action: 'getRecipientsByLabel',
            label_id: labelId,
            authcode: authcode,
            username: dataRep['userId']
        },
        success: function (response) {

            if (response.status !== 200) {
                $('#recipientCount').text('No recipients found');
                return;
            }

            response.data.forEach(r => {
                emailList.push(r.email);
                nameMapping[r.email] = r.full_name;
            });

            $('#recipientCount').text(
                'Total Recipients: ' + emailList.length
            );
        },
        error: function (err) {
            console.error('Recipient load failed', err);
        }
    });
}


function showConfirmAndSend(selectLable) {
    console.log("I am showConfirmAndSend");
    Swal.fire({
        title: 'Confirm Campaign',
        customClass: 'swal-wide',
        html: `
            <p><b>From:</b> ${emailsender}</p>
            <p><b>Subject:</b> ${subject}</p>
            <p><b>Total Recipients:</b> ${emailList.length}</p>
            <hr>
            <div style="max-height:200px;overflow:auto;border:1px solid #ccc;padding:10px">
                ${completeMessage}
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Send Emails'
    }).then(res => {
    console.log("I am showConfirmAndSend res"+ res);

        if (res.isConfirmed) {
    console.log("I am showConfirmAndSend is confirm");

            startEmailCampaign(selectLable);
        }
    });
}



function startEmailCampaign(selectLable) {
    console.log("I am startEmailCampaign");

    $.ajax({
        type: 'POST',
        url: 'rules/emaillog.php',
        dataType: 'json',
        data: {
            action: 'createEmailCampaign',
            from: emailsender,
            subject: subject,
            text: completeMessage,
            attachments: getEmailAttachments(),
            label_id: selectLable,
            authcode: authcode,
            username: dataRep['userId']
        },
        success: function (res) {
    console.log("I am startEmailCampaign res");

            console.log(res);
            if (res.status === 200) {
                Swal.fire(
                    'Campaign Started',
                    'Emails will be sent in background',
                    'success'
                );
            } else {
                Swal.fire('Error', res.message, 'error');
            }
        },error: function (err) {
            console.log("I am startEmailCampaign err");

            console.log(err);
        }
    });
}


async function sendBulkEmails() {

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const attachments = getEmailAttachments();

    Swal.fire({
        title: 'Sending...',
        html: `<b id="sentCount">0</b> / ${emailList.length}`,
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
    });

    let sent = 0;

    for (const email of emailList) {

        const body = completeMessage.replace(
            /\[name_of_student\]/g,
            nameMapping[email] || ''
        );

        try {
            await $.ajax({
                type: 'POST',
                url: 'rules/email.php',
                dataType: 'json',
                data: {
                    action: 'sendEmail',
                    from: emailsender,
                    to: email,
                    subject: subject,
                    text: body,
                    attachments: attachments,
                    authcode: authcode,
                    username: dataRep['userId']
                }
            });

            sent++;
            $('#sentCount').text(sent);

            await sleep(5000); // 5 sec throttle (ANTI-SPAM)

        } catch (e) {
            console.error('Failed:', email);
        }
    }

    Swal.fire(
        'Completed',
        `Successfully sent ${sent} emails`,
        'success'
    );
}
