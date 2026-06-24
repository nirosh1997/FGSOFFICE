
function mobileNumberValid(number) {
    let mobileNumber = number.replace(/\s/g, '');
    mobileNumber = mobileNumber.replace(/\D/g, '');
    if (mobileNumber.startsWith('07')) {
        mobileNumber = '94' + mobileNumber.substring(1);
    }
    if (mobileNumber.startsWith('7')) {
        mobileNumber = '94' + mobileNumber;
    }
    if (mobileNumber.startsWith('+94')) {
        mobileNumber = mobileNumber.substring(1);
    }

    if (mobileNumber.startsWith('+9')) {
        mobileNumber = mobileNumber.substring(1);
    }
    // console.log(mobileNumber.length)
    if (!mobileNumber.startsWith('9') || mobileNumber.length != 11) {
        return 0;
    } else {
        return mobileNumber;
    }

}

function openInputDialogBulkSMS_(p_mobileNumbers, msg = '') {


    // $('.enter-mail-id').click()  

    // console.log(p_mobileNumbers);
    // Process each mobile number in the array
    let processedNumbers = p_mobileNumbers.map((mobileNumber) => {
        mobileNumber = mobileNumber.replace(/\s/g, ''); // Remove spaces
        mobileNumber = mobileNumber.replace(/\D/g, '');


        if (mobileNumberValid(mobileNumber) == 0) {
            Swal.fire({
                icon: 'error',
                title: 'SMS Alert',
                text: "Error: Unable to send SMS to " + mobileNumber,
            });
            return null; // Return null for invalid numbers
        } else {
            return mobileNumberValid(mobileNumber);
        }
    }).filter((number) => number !== null).join(', ');

    if (processedNumbers === '') {
        // No valid numbers to display
        Swal.fire({
            icon: 'error',
            title: 'SMS Alert',
            text: 'No valid mobile numbers available.',
        });
        return;
    }

    Swal.fire({
        title: 'Send SMS',
        html:
            '<form>' +
            '<div class="row mb-3">' +
            // '<div class="col-sm-12 email-id-row">' +
            // '<span class="to-input">To</span>' +
            // '<div class="all-mail">' +
            // '</div>' +
            // '<input type="text" id ="mobileEnter" name="email" class="enter-mail-id" placeholder="Enter the email id .." />' +
            // '</div>' +
            '  <label for="mobileNumbers" class="col-sm-4 col-form-label" style="font-size: 14px;">Mobile Numbers:</label>' +
            '  <div class="col-sm-8">' +
            '    <input type="tel" class="form-control form-control-sm" id="mobileNumbers" placeholder="Enter Mobile Numbers" required value="' + processedNumbers + '">' +
            '  </div>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label for="message" class="col-sm-4 col-form-label" style="font-size: 14px;">Message:</label>' +
            '  <div class="col-sm-8">' +
            '    <textarea class="form-control form-control-sm" id="message" maxlength="1400" placeholder="Enter Message" rows="10" required>' + msg + '</textarea>' +
            '  </div>' +
            '</div>' +
            '</form>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Send',
        preConfirm: () => {
            const mobileNumbers = Swal.getPopup().querySelector('#mobileNumbers').value.split(',').map((num) => num.trim());
            const message = Swal.getPopup().querySelector('#message').value;

            // Check if the message is longer than 1400 characters
            if (message.length > 1400) {
                Swal.fire({
                    icon: 'error',
                    title: 'SMS Alert',
                    text: "The message should be less than 1400 characters.",
                });
            } else {
                // Process each mobile number and send SMS
                // Use SweetAlert for confirmation
                const completeMessagesend = message + "\n\n " + dataRep['userName'] + " - " + dataRep['roleName'];
                const completeMessage = message + "<br>" + dataRep['userName'] + " - " + dataRep['roleName'];
                Swal.fire({
                    title: 'Are you sure?',
                    html: `<p style="font-size: 20px;text-align: justify;    font-weight: bolder;">Mobile Numbers:</p><p style="font-size: 14px;text-align: justify;"> ${mobileNumbers.join(',')}</p><br><p style="font-size: 20px;text-align: justify;    font-weight: bolder;">Message:</p><p style="font-size: 14px;text-align: justify;"> ${completeMessage}</p>`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, send it!',
                    cancelButtonText: 'No, cancel!',
                    showDenyButton: true,
                    denyButtonText: 'Edit SMS',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // User clicked "Yes", send SMS and show success message
                        mobileNumbers.forEach((mobileNumber) => {

                            isrHandle.sendSMS(mobileNumber, completeMessagesend);
                        });

                        Swal.fire({
                            icon: 'success',
                            title: 'Message Sent',
                            text: 'Your message has been sent successfully!',
                        });
                    } else if (result.isDenied) {
                        const EditMobileNumber = [];
                        mobileNumbers.forEach((mobileNumber) => {
                            EditMobileNumber.push(mobileNumber);
                        });
                        openInputDialogBulkSMS(EditMobileNumber, message);
                    } else {
                        // User clicked "No" or closed the dialog, you can handle this accordingly
                        // console.log('User canceled SMS sending');
                    }
                });

            }
        }
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

//dialog campus university
function openInputDialogBulkSMS(p_mobileNumbers, msg = '') {


    // $('.enter-mail-id').click()  

    // console.log(p_mobileNumbers);
    // Process each mobile number in the array
    let processedNumbers = p_mobileNumbers.map((mobileNumber) => {
        mobileNumber = mobileNumber.replace(/\s/g, ''); // Remove spaces
        mobileNumber = mobileNumber.replace(/\D/g, '');


        if (mobileNumberValid(mobileNumber) == 0) {
            Swal.fire({
                icon: 'error',
                title: 'SMS Alert',
                text: "Error: Unable to send SMS to " + mobileNumber,
            });
            return null; // Return null for invalid numbers
        } else {
            return mobileNumberValid(mobileNumber);
        }
    }).filter((number) => number !== null).join(', ');

    if (processedNumbers === '') {
        // No valid numbers to display
        Swal.fire({
            icon: 'error',
            title: 'SMS Alert',
            text: 'No valid mobile numbers available.',
        });
        return;
    }

    Swal.fire({
        title: 'Send SMS',
        html:
            '<form>' +
            '<div class="row mb-3">' +
            // '<div class="col-sm-12 email-id-row">' +
            // '<span class="to-input">To</span>' +
            // '<div class="all-mail">' +
            // '</div>' +
            // '<input type="text" id ="mobileEnter" name="email" class="enter-mail-id" placeholder="Enter the email id .." />' +
            // '</div>' +
            '  <label for="mobileNumbers" class="col-sm-4 col-form-label" style="font-size: 14px;">Mobile Numbers:</label>' +
            '  <div class="col-sm-8">' +
            '    <input type="tel" class="form-control form-control-sm" id="mobileNumbers" placeholder="Enter Mobile Numbers" required value="' + processedNumbers + '">' +
            '  </div>' +
            '</div>' +
            '<div class="row mb-3">' +
            '  <label for="message" class="col-sm-12 col-form-label" style="font-size: 14px;">Message: (Keep SMS under 1000 characters, including spaces.)</label>' +
            '  <div class="col-sm-12">' +
            '    <textarea class="form-control form-control-sm" id="message" maxlength="1000" placeholder="Enter Message" rows="10" required  style="min-height: 150px;">' + msg + '</textarea>' +
            '  </div>' +
            '</div>' +
            '</form>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Send',
        preConfirm: () => {
            const mobileNumbers = Swal.getPopup().querySelector('#mobileNumbers').value.split(',').map((num) => num.trim());
            const message = Swal.getPopup().querySelector('#message').value;

            // Check if the message is longer than 1400 characters
            if (message.length > 1000) {
                Swal.fire({
                    icon: 'error',
                    title: 'SMS Alert',
                    text: "The message should be less than 1000 characters.",
                });
            } else {
                // Process each mobile number and send SMS
                // Use SweetAlert for confirmation
                const completeMessagesend = message + "\n\n " + dataRep['userName'] + " - " + dataRep['roleName'];
                const completeMessage = message + "<br>" + dataRep['userName'] + " - " + dataRep['roleName'];
                Swal.fire({
                    title: 'Are you sure?',
                    html: `<p style="font-size: 20px;text-align: justify;    font-weight: bolder;">Mobile Numbers:</p><p style="font-size: 14px;text-align: justify;"> ${mobileNumbers.join(',')}</p><br><p style="font-size: 20px;text-align: justify;    font-weight: bolder;">Message:</p><p style="font-size: 14px;text-align: justify;"> ${completeMessage}</p>`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, send it!',
                    cancelButtonText: 'No, cancel!',
                    showDenyButton: true,
                    denyButtonText: 'Edit SMS',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // User clicked "Yes", send SMS and show success message
                        mobileNumbers.forEach((mobileNumber) => {

                            var postData = {
                                authcode: authcode,
                                username: dataRep['userId'],
                                mobile: mobileNumber,
                                text: completeMessagesend,
                            };
                            $.ajax({
                                type: 'POST',
                                url: 'https://sysfgs.kln.ac.lk/a_mphil_applicaiton/api/sms-received-msi',
                                data: postData,
                                dataType: 'json',  
                                success: function (response) {


                                },
                                error: function (error) {
                                    console.log(error);
                                }
                            });

                        });


                        let campaignNo = 0;
                        var postData = {
                            authcode: authcode,
                                username: dataRep['userId'],
                            action: "setSMSLog",
                            senderName: dataRep['userName'],
                            senderId: dataRep['userId'],
                            mobileNo: mobileNumbers,
                            text: completeMessagesend,
                        };

                        $.ajax({
                            type: 'POST',
                            url: 'rules/setCommunicationLog.php',
                            data: postData,
                            dataType: 'json',
                            success: function (response) {


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
                        const EditMobileNumber = [];
                        mobileNumbers.forEach((mobileNumber) => {
                            EditMobileNumber.push(mobileNumber);
                        });
                        openInputDialogBulkSMS(EditMobileNumber, message);
                    } else {
                        // User clicked "No" or closed the dialog, you can handle this accordingly
                        // console.log('User canceled SMS sending');
                    }
                });

            }
        }
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



function sendDirectSMS(mobileNumber, completeMessagesend) {

    var postData = {
        authcode: authcode,
        username: dataRep['userId'],
        mobile: mobileNumber,
        text: completeMessagesend,
    };
    $.ajax({
        type: 'POST',
        url: 'https://sysfgs.kln.ac.lk/a_mphil_applicaiton/api/sms-received-msi',
        data: postData,
        dataType: 'json',
        success: function (response) {

        },
        error: function (error) {
            console.log(error);
        }
    });
}



function openInputDialog(p_mobileNumber) {
    let mobileNumber = p_mobileNumber.replace(/\s/g, ''); // Remove spaces

    // Process the mobile number based on the rules you described
    if (mobileNumber.startsWith('07')) {
        mobileNumber = '94' + mobileNumber.substring(1); // Remove 0 and add 94
    }
    if (mobileNumber.startsWith('7')) {
        mobileNumber = '94' + mobileNumber; // Add 94
    }
    if (mobileNumber.startsWith('+94')) {
        mobileNumber = mobileNumber.substring(1); // Remove +
    }

    if (mobileNumber.startsWith('+9')) {
        mobileNumber = mobileNumber.substring(1); // Remove +
    }
    // Check if the processed mobile number starts with 9
    if (!mobileNumber.startsWith('9')) {
        Swal.fire({
            icon: 'error',
            title: 'SMS Alert',
            text: "Error: Unable to send SMS to " + mobileNumber,
        });
    } else {
        Swal.fire({
            title: 'Send SMS',
            html:
                '<form>' +
                '<div class="row mb-3">' +
                '  <label for="mobileNumber" class="col-sm-4 col-form-label" style="font-size: 14px;">Mobile Number:</label>' +
                '  <div class="col-sm-8">' +
                '    <input type="tel" class="form-control form-control-sm" id="mobileNumber" placeholder="Enter Mobile Number" required value="' + mobileNumber + '">' +
                '  </div>' +
                '</div>' +
                '<div class="row mb-3">' +
                '  <label for="message" class="col-sm-4 col-form-label" style="font-size: 14px;">Message:</label>' +
                '  <div class="col-sm-8">' +
                '    <textarea class="form-control form-control-sm" id="message" maxlength="1400" placeholder="Enter Message" rows="10" required></textarea>' +
                '  </div>' +
                '</div>' +
                '</form>',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Send',
            preConfirm: () => {
                const mobileNumber = Swal.getPopup().querySelector('#mobileNumber').value;
                const message = Swal.getPopup().querySelector('#message').value;

                // Check if the message is longer than 1400 characters
                if (message.length > 1400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'SMS Alert',
                        text: "The message should be less than 1400 characters.",
                    });
                } else {
                    isrHandle.sendSMS(mobileNumber, message);

                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent',
                        text: 'Your message has been sent successfully!',
                    });
                }
            }
        });

    }
}