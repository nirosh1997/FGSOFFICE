
var PaymentData = new Array();
dataRep["sessionID"] = dataRep["docName"] = dataRep["programYear"] = dataRep["setamount"] = dataRep['roleName'] = dataRep['userName'] = dataRep["achedamicYear"] = "";
var inum = 0;
var rcount = 1;
var tempid, exid;
var installmentChecked = false;
var installment = "";
var totalCourseFee = 0;
var totalLibraryFee = 0;
var tempStdNo = new Array();
var tempPayAmount = new Array();
var tempDueAmount = new Array();
var tempInstNo = tempAmount = tempDeadline = new Array();
var tempCount = jj = r = 0;
var selectedlist = new Array();
var p = 0;
var degCode = acYear = "";

var table;
function DataTableForStudentPayment() {
	var buttons = [];

	if (!$.fn.DataTable.isDataTable('#studentPaymentTable'))
		table = $('#studentPaymentTable').DataTable({
			dom: "<'row'<'col-12 text-right' B>>" +
				"<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
				"<'row'<'col-12't>>" + // Table in a single line
				"<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
			columnDefs: [
				{
					targets: 0,
					searchable: false
				},
				{
					targets: (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? 5 : 4,
					visible: false
				},
				{
					targets: (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? 6 : 5,
					visible: false
				}
			],
			buttons: [
				{
					extend: 'excel',
					text: 'Download Paid Student List with Contact(Excel)', // Optional: Change the button text
					filename: 'Payment Details', // Set a custom PDF file name
					className: 'btn btn-primary',
					exportOptions: {
						columns: (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? [2, 3, 4, 5, 6, 7, 8, 9, 10] : [1, 2, 3, 4, 5, 6, 7, 8, 9],

						rows: function (idx, data, node) {
							if (data[((dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? 9 : 8)] != 0 && data[((dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? 9 : 8)] != "0") {
								return true;
							}
						}

					},

					title: function () {
						var printTitle = 'Paid Student Details\n' + $("#selectedDegreeName option:selected").text() + '\nAcademic Year - ' + document.getElementById('achedamicYear').value + '';
						return printTitle
					},
				},

				{
					extend: 'excel',
					text: 'Download Paid Student List(Excel)', // Optional: Change the button text
					filename: 'Payment Details', // Set a custom PDF file name
					className: 'btn btn-primary',
					exportOptions: {
						columns: (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? [2, 3, 4, 7, 8, 9, 10] : [1, 2, 3, 6, 7, 8, 9],

						rows: function (idx, data, node) {
							if (data[((dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? 9 : 8)] != 0 && data[((dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? 9 : 8)] != "0") {
								return true;
							}
						}

					},

					title: function () {
						var printTitle = 'Paid Student Details\n' + $("#selectedDegreeName option:selected").text() + '\nAcademic Year - ' + document.getElementById('achedamicYear').value + '';
						return printTitle
					},
				},

				{
					extend: 'print',
					text: 'Print Paid Student', // Optional: Change the button text
					className: 'btn btn-primary',
					exportOptions: {
						columns: (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? [2, 3, 4, 7, 8, 9, 10] : [1, 2, 3, 6, 7, 8, 9],
						rows: function (idx, data, node) {
							if (data[((dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? 9 : 8)] != 0 && data[((dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? 9 : 8)] != "0") {
								// data[8]
								return true;
							}
						}
					},
					title: function () {
						var printTitle = '<div style="text-align:center;margin:10px">';
						printTitle += '<img src="img/wordTitle3.png" width="680"/>';
						printTitle += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
						printTitle += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
						printTitle += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Payment Details</div></div>";
						return printTitle
					},


				},


				{
					extend: 'excel',
					text: 'Download Payment Details(Excel)', // Optional: Change the button text
					filename: 'Payment Details', // Set a custom PDF file name
					className: 'btn btn-primary',
					exportOptions: {
						columns: (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? [0, 2, 3, 4, 7, 8, 9, 10] : [0, 1, 2, 3, 4, 7, 8, 9]
					},

					title: function () {
						var printTitle = 'Student Payment Details\n' + $("#selectedDegreeName option:selected").text() + '\nAcademic Year - ' + document.getElementById('achedamicYear').value + '';
						return printTitle
					},
				},
				{
					extend: 'print',
					text: 'Print Payment Details', // Optional: Change the button text
					className: 'btn btn-primary',
					exportOptions: {
						columns: (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? [0, 2, 3, 4, 7, 8, 9, 10] : [0, 1, 2, 3, 4, 7, 8, 9]
					},
					title: function () {
						var printTitle = '<div style="text-align:center;margin:10px">';
						printTitle += '<img src="img/wordTitle3.png" width="680"/>';
						printTitle += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
						printTitle += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + document.getElementById('achedamicYear').value + "</div>";
						printTitle += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Payment Details</div></div>";
						return printTitle
					},


				},
			],
			select: {
				style: 'multi',
				selector: 'td:first-child',
			},
			order: [0, 'asc'],
			initComplete: function () {
				// Center-align the table title
				$(this.api().table().header()).css({
					'text-align': 'center',
					'font-size': '18px' // Optional: Set the font size
				});
			}
		});

}
function form16DigitABPaymentViewNew(dsp) {

	str = "";

	title = "Student Payments";

	if (dsp == "formABPaymentViewNew") {

		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title + '</h4>';
		str += '</li></ul></div></nav>';



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

		str += '<div class="form-group row"><div class="col-sm-6">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;PayCalAmount1();ViewPaidStudentsList1();">';
		str += '</select>';
		str += '</div></div>';

		let date = new Date().getFullYear();


		str += '<div class="col-sm-4">'
		str += '<div class="col-sm-6" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		str += '<div class="col-sm-6" style="display: inline-flex;">';

		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;PayCalAmount1();ViewPaidStudentsList1();">';
		for (i = 2014; i <= date + 1; i++) {
			if (i == date + 1) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '<div class="form-group row mt-2"><div class="col-sm-6">';
		str += '<div class="col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Batch Number</label></div>';
		str += '<div class="col-sm-9" style="display: inline-flex;">';
		str += '<select class="form-control form-control-sm" id="selectedBatchNumber">';
		str += setBatchNumberNew();
		str += '</select>';
		str += '</div></div>';
		str += '</div>';


		if (dataRep['selectMedium'] == 'mediumSinhala') {
			mediumSinhalaChecked = 'checked';
		} else if (dataRep['selectMedium'] == 'mediumEnglish') {
			mediumEnglishChecked = 'checked'
		}
		str += '<div class="form-group row">';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 MediumRadioFullBox"><div class="row" style="padding-left: 10px;">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r" style="padding-top: 10px;">Medium </label></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7" style=""><div class="row">';
		str += "<div class='col-12 col-sm-12 col-md-12 col-lg-8 col-xl-5'>";
		str += "<div class='form-check form-check2-1 SinMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumSinhala' class='form-check-input SinMediumRadio' name='selectMedium' value='mediumSinhala' onclick='dataRep[this.name]=this.value;getMediumSinhala();PayCalAmount1();ViewPaidStudentsList1();' " + mediumSinhalaChecked + ">Sinhala<i class='input-helper'></i></label></div>";
		str += "<div class='form-check form-check2-2 EngMediumRadioBox'> <label class='form-check-label'> <input type='radio' id='mediumEnglish' class='form-check-input EngMediumRadio' name='selectMedium' value='mediumEnglish' onclick='dataRep[this.name]=this.value;getMediumEnglish();PayCalAmount1();ViewPaidStudentsList1();' " + mediumEnglishChecked + ">English<i class='input-helper'></i></label></div></div>";

		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';




		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><button type="button" class="btn btn-info mr-2" style="float:right" onclick="PayCalAmount1();ViewPaidStudentsList1();">View List</button></div>';

		str += '';

		str += '</div></div>';
		str += '</div></div></div>';


		let str2 = '<div class="row"><div class="col-lg-12 grid-margin stretch-card" ">';
		str2 += '<div class="card">';
		str2 += '<div class="card-body"><div class="table-responsive">';
		str2 += '<table class="table table-bordered" id="studentPaymentTable">';
		str2 += '<thead><tr>';
		str2 += '<th></th>';
		if (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") {
			str2 += '<th>Method</th>';
		}

		str2 += '<th>Student name</th>';
		str2 += '<th>Student Number</th>';
		str2 += '<th>NIC</th>';
		str2 += '<th class="hidden">Address</th>';
		str2 += '<th class="hidden">Email</th>';
		str2 += '<th>Total Course Fee</th>';
		str2 += '<th>Library Fee Paid</th>';
		str2 += '<th>Total Paid Amount</th>';
		str2 += '<th>Due amount </th>';
		if (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") {
			str2 += '<th>Add Payment</th>';
			str2 += '<th>Deduct Payment</th>';
		}

		str2 += '<th>#</th>';
		str2 += '</tr></thead>';
		str2 += '<tbody>';

		if (studentNoLength > 0) {

			var dueAmount = 0;
			var r;
			let check = true;
			totalCourseFee = 0;


			let incomeCat = "";
			if (IncomeCategoryCodeLength != 0) {
				for (i = 0; i < IncomeCategoryCodeLength; i++) {
					if (document.getElementById('selectedDegreeName').value == IncomedegreeCodeArr[i] && document.getElementById('achedamicYear').value == achedamicYearIncomeArr[i]) {
						if (IncomedegreeCodeArr[i] != "" && IncomeCategoryValueArr[i] != "") {
							check = false;
							incomeCat += '<tr>';
							incomeCat += '<td>' + IncomeCategoryTitleArr[i] + '</td>';
							incomeCat += '<td>' + IncomeCategoryValueArr[i] + '</td>';
							incomeCat += '</tr>';
						}
					}
				}
			}

			let paymentType;
			let paymentTypeStatus;
			let strCourseFee = "";
			if (check) {

				calInstallment2();
				strCourseFee += '<div class="col-lg-12 stretch-card mb-4" style="padding: 0px;">';
				strCourseFee += '<div class="card">';
				strCourseFee += '<div class="card-body">';
				// str += '<h5 style="margin-top: 10px;">Manual Payments</h5>';
				strCourseFee += '<h5 style="color: #ff4747;margin-top: 2rem;margin-bottom: 1rem;"> Total Course Fee : ' + totalCourseFee + '</h5>';
				strCourseFee += '</div>';
				strCourseFee += '</div>';
				strCourseFee += '</div>';
				paymentType = "Old";
				paymentTypeStatus = 2;

			} else {
				if (incomeCat != "") {

					strCourseFee += '<div class="row justify-content-md-center"><div class="col-lg-12 strCourseFeeetch-card" style="padding: 0px;">';
					strCourseFee += '<div class="col-lg-12 strCourseFeeetch-card mb-4" style="">';

					strCourseFee += '<div class="card">';
					strCourseFee += '<div class="card-body"><div class="table-responsive">';
					strCourseFee += '<div class="col-lg-6 strCourseFeeetch-card" style="padding: 0px;">';
					// strCourseFee += '<h5 style="margin-top: 10px;">16 Digit Payment</h5>';
					strCourseFee += '</div>';

					strCourseFee += '<div class="col-lg-6 strCourseFeeetch-card" style="padding: 0px;margin: auto;">';
					strCourseFee += '<table class="table table-bordered">';
					strCourseFee += '<thead><tr>';
					strCourseFee += '<th>Cost Component</th>';
					strCourseFee += '<th>Amount (LKR)</th>';
					strCourseFee += '</tr></thead>';
					strCourseFee += '<tbody>';
					strCourseFee += incomeCat;
					strCourseFee += '</tbody>';
					strCourseFee += '</table>';
					strCourseFee += '</div>';
					strCourseFee += '</div>';
					strCourseFee += '</div>';
					strCourseFee += '</div>';
					strCourseFee += '</div>';
					strCourseFee += '</div>';
					strCourseFee += '</div>';
					paymentType = "New";
					paymentTypeStatus = 1;

				}
				calTotalFee();
			}

			if (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Assistant Manager - Finance" || dataRep['roleName'] == "Administrator") {
				str += strCourseFee;
			}


			var degreeName = document.getElementById('selectedDegreeName').value;
			var degreeyear = document.getElementById('achedamicYear').value;


			str += str2;
			rcount = 0;
			for (i = 0; i < studentNoLength; i++) {
				var temtot = temdue = temlib = temCourseFee = totalCourseFee;
				var tempay = 0;
				// console.log("3453");
				// if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {
				// console.log("345345");

				if (document.getElementById('selectedDegreeName').value == degreeCodeArr[i] && document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					// console.log("----");


					rcount++;
					str += '<tr>';
					str += '<td>' + rcount + '</td>';
					if (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") {
						str += '<td>' + paymentType + '</td>';
					}
					str += '<td>' + studentInitialArr[i] + '</td>';
					str += '<td>' + studentNoArr[i] + "<input type='text' style='display:none;' id='studentNoPayment" + i + "' value= '" + studentNoArr[i] + "' ></input></td>";

					str += '<td>' + studentNICArr[i] + '</td>';
					str += '<td class="hidden">' + studentPermanentAddressArr[i] + '</td>';
					str += '<td class="hidden">' + studentContactEmailArr[i] + '</td>';

					temtot = Number(totalCourseFee);
					tempay = Number(tempPayAmount[i]);

					if (tempPayAmount[i] > totalLibraryFee) {
						temlib = Number(totalLibraryFee);
					} else {
						temlib = Number(0);
					}
					temCourseFee = temtot;
					temdue = Number(temtot - tempay);
					if (isNaN(temdue)) {
						temdue = Number((tempPayAmount[i] - temlib) - tempPayAmount[i]);
					}
					str += '<td>' + temtot.toLocaleString() + '</td>';
					str += '<td>' + temlib.toLocaleString() + '</td>';
					str += '<td id="statusTotalPaid' + i + '">' + tempay.toLocaleString() + '</td>';
					str += '<td id="statusDueAmmount' + i + '">' + temdue.toLocaleString() + '</td>';
					if (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") {
						str += '<td style="text-align: center;"><button id="Namebtn' + i + '" onclick="changePaymentNew(' + i + ',' + paymentTypeStatus + ',1,' + totalCourseFee + ',' + totalLibraryFee + ');" class="btn btn-success btn-rounded btn-fw" style="padding: 8px 20px;white-space: nowrap;">Add Payment</button></td>';
						str += '<td style="text-align: center;"><button id="NamebtnAdd' + i + '" onclick="changePaymentNew(' + i + ',' + paymentTypeStatus + ',2,' + totalCourseFee + ',' + totalLibraryFee + ');" class="btn btn-danger btn-rounded btn-fw" style="padding: 8px 20px;white-space: nowrap;">Deduct Payment</button></td>';


					}
					str += '<td style="text-align: center;"><button id="NamebtnDeduct' + i + '" onclick="loadProfileStudent(' + i + ');" class="btn btn-info btn-rounded btn-fw" style="padding: 8px 20px;white-space: nowrap;">Show Profile</button></td>';

					str += '</tr>';

				}
				// }
			}

		} else {
			str += str2;
		}


		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';


		str += '<div class="modal fade "  id="showPaymentDetailsModel" tabindex="-1" role="dialog" aria-labelledby="showPaymentDetailsModelLabel" aria-hidden="true">';
		str += '<div class="modal-dialog modal-lg" role="document">';
		str += '<div class="modal-content">';
		str += '<div class="modal-header">';
		str += '<h5 class="modal-title" id="showPaymentDetailsModelLabel">Payment Details</h5>';
		str += '</div>';

		str += '<div class="modal-body" style="overflow-y: scroll;height: 40rem;display: 30rem;">';
		str += '<div class="row">';
		str += '<div class="col col-md-12" id="PaymentDetailsTable">';
		str += '</div>';

		str += '</div>';
		str += '</div>';

		str += '<div class="modal-footer">';
		str += '<button type="button" class="btn btn-secondary"onclick="closeModelshowPaymentDetailsModel()">Okay</button>';
		str += '</div>';

		str += '</div>';
		str += '</div>';
		str += '</div>';

	}

	// console.log(str);
	return str;

}

function closeModelshowPaymentDetailsModel() {
	$('#showPaymentDetailsModel').modal('hide');
}


function findPaymentsForDeduct(index, paymentType, totalCourseFee, totalLibraryFee) {

	if (paymentType == 1) {
		let getData = {
			action: "getPaymentHistroy16Digit",
			stNo: studentNoArr[index],
			authcode: authcode,
			username: dataRep['userId'],
		};

		$.ajax({
			type: 'POST',
			url: 'rules/payment.php',
			data: getData,
			dataType: 'json',
			success: function (paymentData) {

				if (paymentData && paymentData.length > 0 && paymentData[0].status === 200) {
					let subSet = "<table class='table table-bordered'><tr><th style='width:10%'>Reference number</th><th style='width:20%'>Amount</th><th style='width:10%'>Paid Date (For Bank)</th><th>Slip Generated Date</th><th></th><th></th></tr>";
					let count = 0;
					$.each(paymentData, function (index2, paymentDatas) {
						count++;
						subSet += "<tr id='tr_tcodeP" + i + count + "'>";
						subSet += "<td style='width:20%'>" + paymentDatas.Pay_RefNo + "</td>";
						subSet += "<td style='width:10%'>" + paymentDatas.Pay_amount + "</td>";
						subSet += "<td style='width:12%;'>" + paymentDatas.Response_Progress_Time + "</td>";
						subSet += "<td style='width:12%;'>" + paymentDatas.Pay_Time_Stamp + "</td>";
						subSet += "<td style='width:20%;text-align: center;'><input type='text' class='form-control' style='display: inline;padding: 0px;height: 24px;width: 50%;'><button id='NamebtnAdd" + i + "' onclick='deduct16DigitPayment(" + index + "," + count + ",this," + totalCourseFee + "," + totalLibraryFee + ");' class='btn btn-danger btn-fw' style='padding: 8px 20px;white-space: nowrap;'>Deduct</button></td>";
						subSet += "<td style='width:16%;text-align: center;'><button id='NamebtnAdd" + i + "' onclick='remove16DigitPayment(" + index + "," + count + ",this," + totalCourseFee + "," + totalLibraryFee + ");' class='btn btn-warning btn-fw' style='padding: 8px 20px;white-space: nowrap;'>Remove</button></td>";

						subSet += "</tr>";
					});
					subSet += "</table>";
					$("#PaymentDetailsTable").html(subSet);

				}
			},
			error: function (error) {
				console.log(error)

			}
		});
	}

	if (paymentType == 2) {

		let getData = {
			action: "getPaymentHistroy",
			stNo: studentNoArr[index],
			authcode: authcode,
			username: dataRep['userId'],
		};

		$.ajax({
			type: 'POST',
			url: 'rules/payment.php',
			data: getData,
			dataType: 'json',
			success: function (paymentData) {

				if (paymentData && paymentData.length > 0 && paymentData[0].status === 200) {
					let subSet = "<table class='table table-bordered'><tr><th style='width:10%'>T_Code</th><th style='width:20%'>Amount</th><th style='width:10%'>Paid Date (For Bank)</th><th>System Update Date</th><th></th><th></th></tr>";
					let count = 0;
					$.each(paymentData, function (index2, paymentDatas) {
						count++;
						subSet += "<tr id='tr_tcodeP" + i + count + "'>";
						subSet += "<td style='width:20%'>" + paymentDatas.tCode + "</td>";
						subSet += "<td style='width:10%'>" + paymentDatas.amount + "</td>";
						subSet += "<td style='width:12%;'>" + paymentDatas.bankdate + "</td>";
						subSet += "<td style='width:12%;'>" + paymentDatas.paymentdate + "</td>";
						subSet += "<td style='width:20%;text-align: center;'><input type='text' class='form-control' style='display: inline;padding: 0px;height: 24px;width: 50%;'><button id='NamebtnAdd" + i + "' onclick='deductManualPayment(" + index + "," + count + ",this," + totalCourseFee + "," + totalLibraryFee + ");' class='btn btn-danger btn-fw' style='padding: 8px 20px;white-space: nowrap;'>Deduct</button></td>";
						subSet += "<td style='width:16%;text-align: center;'><button id='NamebtnAdd" + i + "' onclick='removeManualPayment(" + index + "," + count + ",this," + totalCourseFee + "," + totalLibraryFee + ");' class='btn btn-warning btn-fw' style='padding: 8px 20px;white-space: nowrap;'>Remove</button></td>";

						subSet += "</tr>";
					});
					subSet += "</table>";
					$("#PaymentDetailsTable").html(subSet);

				}
			},
			error: function (error) {
				console.log(error)

			}
		});
	}
}


function build16DigitCode() {
	var unitCode = "2";
	var sourceCode = document.getElementById('IncomeSourceCode').value;
	var CategoryCode = document.getElementById('IncomeCategoryCode').value;
	var academicYear = document.getElementById('academicYear').value;
	var yr = academicYear.substr(academicYear.length - 2);
	var yy = "0";
	var position = 0;
	var year = [yr.slice(0, position), yy, yr.slice(position)].join('');
	var studentNo = document.getElementById('studentNo').value;
	let ref = "";
	if (studentNo.substr(studentNo.length - 1) == "E") {
		var se = studentNo.substring(0, studentNo.length - 1);
		var stuE = se.substr(se.length - 3);
		var xy = "07";
		var position = 0;
		var stuNoE = [stuE.slice(0, position), xy, stuE.slice(position)].join('');
		var partcodeE = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuNoE);
		var ok = /^\d+$/.test(partcodeE)
		var checkdigit = ok ? luhn_caclulate(partcodeE) : ""
		var fullcode = ok ? partcodeE + checkdigit : ""
		ref = fullcode;
	}
	else {
		var ss = studentNo.substr(studentNo.length - 3);
		var xx = "00";
		var position = 0;
		var stuNo = [ss.slice(0, position), xx, ss.slice(position)].join('');
		var partcode = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuNo);
		var ok = /^\d+$/.test(partcode)
		var checkdigit = ok ? luhn_caclulate(partcode) : ""
		var fullcode = ok ? partcode + checkdigit : ""
		ref = fullcode;
	}
	return ref;
}




function deductManualPayment(index, count, el, totalCourseFee, totalLibraryFee) {
	const row = el.closest("tr");
	const tCode = row.cells[0].textContent;
	const amount = row.cells[1].textContent;

	const inputElement = row.querySelector("input.form-control");
	const deductAmount = inputElement ? inputElement.value : '';

	let data = {
		action: "data4DeductManualPayment",
		tCode: tCode,
		studentNo: studentNoArr[index],
		deductAmount: parseFloat(deductAmount).toFixed(2),
		authcode: authcode,
		username: dataRep['userId'],
	};

	$.ajax({
		type: 'POST',
		url: 'rules/payment.php',
		data: data,
		dataType: 'json',
		success: function (res) {
			if (res.status === 200) {
				row.cells[1].textContent = amount - deductAmount;
				let temtot = Number(totalCourseFee);
				let tempay = (Number(tempPayAmount[index])) - Number(deductAmount);
				let temlib;

				if (tempPayAmount[index] > totalLibraryFee) {
					temlib = Number(totalLibraryFee);
				} else {
					temlib = Number(0);
				}
				let temCourseFee = temtot;
				let temdue = Number(temtot - tempay);
				if (isNaN(temdue)) {
					temdue = Number((tempPayAmount[index] - temlib) - tempPayAmount[index]);
				}

				tempPayAmount[index] = tempay;
				table.cell("#statusTotalPaid" + index).data(tempay.toLocaleString());
				table.cell("#statusDueAmmount" + index).data(temdue.toLocaleString());
				table.draw();
			}
		},
		error: function (error) {
			console.log(error)

		}
	});
}

function deduct16DigitPayment(index, count, el, totalCourseFee, totalLibraryFee) {
	const row = el.closest("tr");
	const tCode = row.cells[0].textContent;
	const amount = row.cells[1].textContent;

	const inputElement = row.querySelector("input.form-control");
	const deductAmount = inputElement ? inputElement.value : '';

	let data = {
		action: "data4Deduct16DigitPayment",
		Pay_RefNo: tCode,
		Pay_studentNo: studentNoArr[index],
		deductAmount: parseFloat(deductAmount).toFixed(2),
		authcode: authcode,
		username: dataRep['userId'],
	};

	$.ajax({
		type: 'POST',
		url: 'rules/payment.php',
		data: data,
		dataType: 'json',
		success: function (res) {
			if (res.status === 200) {
				row.cells[1].textContent = amount - deductAmount;
				let temtot = Number(totalCourseFee);
				let tempay = (Number(tempPayAmount[index])) - Number(deductAmount);
				let temlib;

				if (tempPayAmount[index] > totalLibraryFee) {
					temlib = Number(totalLibraryFee);
				} else {
					temlib = Number(0);
				}
				let temCourseFee = temtot;
				let temdue = Number(temtot - tempay);
				if (isNaN(temdue)) {
					temdue = Number((tempPayAmount[index] - temlib) - tempPayAmount[index]);
				}

				tempPayAmount[index] = tempay;
				table.cell("#statusTotalPaid" + index).data(tempay.toLocaleString());
				table.cell("#statusDueAmmount" + index).data(temdue.toLocaleString());
				table.draw();
			}
		},
		error: function (error) {
			console.log(error)

		}
	});
}

function remove16DigitPayment(index, count, el, totalCourseFee, totalLibraryFee) {
	const row = el.closest("tr");
	const tCode = row.cells[0].textContent;
	const amount = row.cells[1].textContent;
	let data = {
		action: "data4Remove16DigitPayment",
		Pay_RefNo: tCode,
		Pay_studentNo: studentNoArr[index],
		authcode: authcode,
		username: dataRep['userId'],
	};

	$.ajax({
		type: 'POST',
		url: 'rules/payment.php',
		data: data,
		dataType: 'json',
		success: function (res) {
			if (res.status === 200) {
				$(el).closest('tr').remove();
				let temtot = Number(totalCourseFee);
				let tempay = (Number(tempPayAmount[index])) - Number(amount);
				let temlib;

				if (tempPayAmount[index] > totalLibraryFee) {
					temlib = Number(totalLibraryFee);
				} else {
					temlib = Number(0);
				}
				let temCourseFee = temtot;
				let temdue = Number(temtot - tempay);
				if (isNaN(temdue)) {
					temdue = Number((tempPayAmount[index] - temlib) - tempPayAmount[index]);
				}

				tempPayAmount[index] = tempay;
				table.cell("#statusTotalPaid" + index).data(tempay.toLocaleString());
				table.cell("#statusDueAmmount" + index).data(temdue.toLocaleString());
				table.draw();
			}
		},
		error: function (error) {
			console.log(error)

		}
	});
}

function removeManualPayment(index, count, el, totalCourseFee, totalLibraryFee) {
	const row = el.closest("tr");
	const tCode = row.cells[0].textContent;
	const amount = row.cells[1].textContent;
	let data = {
		action: "data4RemoveManualPayment",
		tCode: tCode,
		studentNo: studentNoArr[index],
		authcode: authcode,
		username: dataRep['userId'],
	};

	$.ajax({
		type: 'POST',
		url: 'rules/payment.php',
		data: data,
		dataType: 'json',
		success: function (res) {
			if (res.status === 200) {
				$(el).closest('tr').remove();
				let temtot = Number(totalCourseFee);
				let tempay = (Number(tempPayAmount[index])) - Number(amount);
				let temlib;

				if (tempPayAmount[index] > totalLibraryFee) {
					temlib = Number(totalLibraryFee);
				} else {
					temlib = Number(0);
				}
				let temCourseFee = temtot;
				let temdue = Number(temtot - tempay);
				if (isNaN(temdue)) {
					temdue = Number((tempPayAmount[index] - temlib) - tempPayAmount[index]);
				}

				tempPayAmount[index] = tempay;
				table.cell("#statusTotalPaid" + index).data(tempay.toLocaleString());
				table.cell("#statusDueAmmount" + index).data(temdue.toLocaleString());
				table.draw();
			}
		},
		error: function (error) {
			console.log(error)

		}
	});
}

function openModelShowPaymentsForDeduct(index, paymentType, totalCourseFee, totalLibraryFee) {

	if (studentNoArr[index] != "") {
		findPaymentsForDeduct(index, paymentType, totalCourseFee, totalLibraryFee);
		$('#showPaymentDetailsModel').modal('show');
	}
}

function luhn_caclulate(partcode) {
	var checksum = luhn_checksum(partcode + "0")
	return checksum == 0 ? 0 : 10 - checksum
}

function luhn_checksum(code) {
	var len = code.length
	var parity = len % 2
	var sum = 0
	for (var i = len - 1; i >= 0; i--) {
		var d = parseInt(code.charAt(i))
		if (i % 2 == parity) { d *= 2 }
		if (d > 9) { d -= 9 }
		sum += d
	}
	return sum % 10
}

function changePaymentNew(index, paymentType, jobStatus, totalCourseFee, totalLibraryFee) {
	//jobStatus 1 = add , 2 = deduct
	//paymentType 1 = 16digitpayment, 2 = ManualPayment

	if (jobStatus == 1) {
		if (paymentType == 1) {

			let getData = {
				action: "getIncomeCatDataForBatchUpdate",
				degreeCode: document.getElementById('selectedDegreeName').value,
				academicYear: document.getElementById('achedamicYear').value,
				batchNumber: $("#selectedBatchNumber option:selected").val(),
				authcode: authcode,
				username: dataRep['userId'],
			};

			$.ajax({
				type: 'POST',
				url: 'rules/batch.php',
				data: getData,
				dataType: 'json',
				success: function (incomeSource) {
					if (incomeSource && incomeSource.length > 0 && incomeSource[0].status === 200) {
						let incomeSourceData = "";
						$.each(incomeSource, function (index2, incomeSources) {
							incomeSourceData += '<option value="' + incomeSources.IncomeCategoryCode + '" data-amount="' + incomeSources.IncomeCategoryValue + '">' + incomeSources.IncomeCategoryTitle + '</option>';
						});

						Swal.fire({
							title: 'Payment Details',
							html: `
								<form>
									<div class="row mb-3">
									<div class="col-sm-12" style="text-align: left;">
										<div class="row">
											<div class="col-sm-4">
												<label class="form-label" for="paymentType">Select Payment Type:</label>
											</div>										
											<div class="col-sm-6">
												<select id="paymentType" class="form-control" onchange="updateAmount()">
												<option value="0" data-amount="0">Select Type</option>
												`+ incomeSourceData + `
												</select>
											</div>
										<div>
									</div>
									<div class="col-sm-12" style="text-align: left; margin-top: 10px;">
										<div class="row">
											<div class="col-sm-4">
												<label class="form-label" for="paymentAmount">Payment Amount:</label>
											</div>										
											<div class="col-sm-6">
												<input type="number" id="paymentAmount" name="paymentAmount" class="form-control" required>
											</div>
										<div>
									</div>
									<div class="col-sm-12" style="text-align: left;margin-top: 10px;">
										<div class="row">
											<div class="col-sm-4">
												<label class="form-label" for="paymentMethod">Payment Method:</label>
											</div>										
											<div class="col-sm-6">
												<select id="paymentMethod" class="form-control"">
												<option value="Bank">Bank</option>
												<option value="Card">Card</option>
												</select>
											</div>
										<div>
									</div>
									<div class="col-sm-12" style="text-align: left; margin-top: 10px;">
										<div class="row">
											<div class="col-sm-4">
												<label class="form-label" for="paidDate">Paid Date:</label><br>
											</div>										
											<div class="col-sm-6">
												<input type="date" id="paidDate" name="paidDate" class="form-control">
											</div>
										<div>
									</div>							
									
									</div>
								</form>   
								`,
							focusConfirm: false,
							showCancelButton: true,
							confirmButtonText: 'Save Payment',
							customClass: {
								popup: 'custom-width-popup'
							}
						}).then((result) => {
							if (result.isConfirmed) {
								const paymentAmount = document.getElementById('paymentAmount').value;
								const paidDate = document.getElementById('paidDate').value;
								const IncomeCategoryCode = document.getElementById('paymentType').value;
								const paymentMethod = document.getElementById('paymentMethod').value;


								let getData2 = {
									action: "getDataForBatchUpdate",
									degreeCode: document.getElementById('selectedDegreeName').value,
									academicYear: document.getElementById('achedamicYear').value,
									batchNumber: $("#selectedBatchNumber option:selected").val(),
									authcode: authcode,
									username: dataRep['userId'],
								};

								$.ajax({
									type: 'POST',
									url: 'rules/batch.php',
									data: getData2,
									dataType: 'json',
									success: function (batchData) {
										if (batchData && batchData.length > 0 && batchData[0].status === 200) {
											const IncomeSourceCode = batchData[0].dIncomeSourceCode;

											let unitCode = "2";
											let sourceCode = IncomeSourceCode;
											let CategoryCode = IncomeCategoryCode;
											let academicYear = document.getElementById('achedamicYear').value;
											let yr = academicYear.substr(academicYear.length - 2);
											let yy = "0";
											let position = 0;
											let year = [yr.slice(0, position), yy, yr.slice(position)].join('');
											let studentNo = studentNoArr[index];
											var ref = "";
											if (studentNo.substr(studentNo.length - 1) == "E") {
												let se = studentNo.substring(0, studentNo.length - 1);
												let stuE = se.substr(se.length - 3);
												let xy = "07";
												let position = 0;
												let stuNoE = [stuE.slice(0, position), xy, stuE.slice(position)].join('');
												let partcodeE = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuNoE);
												let ok = /^\d+$/.test(partcodeE)
												let checkdigit = ok ? luhn_caclulate(partcodeE) : ""
												let fullcode = ok ? partcodeE + checkdigit : ""
												ref = fullcode;


											}
											else {
												// let ss = studentNo.substr(studentNo.length - 3);
												// let xx = "00";
												// let position = 0;
												// let stuNo = [ss.slice(0, position), xx, ss.slice(position)].join('');
												let parts = studentNo.split("/");
												let lastPart = parts[parts.length - 1];
												let number = lastPart.match(/\d+/);
												let numericPart = number ? number[0] : "0";
												let stuNo = numericPart.padStart(5, "0");

												let partcode = unitCode.concat(sourceCode).concat(CategoryCode).concat(year).concat(stuNo);
												let ok = /^\d+$/.test(partcode)
												let checkdigit = ok ? luhn_caclulate(partcode) : ""
												let fullcode = ok ? partcode + checkdigit : ""
												ref = fullcode;


											}

											let bankdate = paidDate;
											let setData16Digit = {
												action: "data4Add16DigitPayment",
												Pay_RefNo: ref,
												Pay_studentNo: studentNo,
												Pay_sourceCode: sourceCode,
												Pay_CategoryCode: CategoryCode,
												Pay_amount: parseFloat(paymentAmount).toFixed(2),
												Response_Progress_Time: bankdate, //vf
												Pay_Method: paymentMethod,
												Response_Progress: 1,
												authcode: authcode,
												username: dataRep['userId'],
												// Response_Progress_Time: installment,
											};
											$.ajax({
												type: 'POST',
												url: 'rules/payment.php',
												data: setData16Digit,
												dataType: 'json',
												success: function (res) {
													if (res.status === 200) {
														Swal.fire({
															title: 'Payment Updated',
															icon: 'success',
															confirmButtonText: 'Okay',
															timer: 5000,
															timerProgressBar: true,
														});

														let temtot = Number(totalCourseFee);
														let tempay = (Number(tempPayAmount[index])) + Number(paymentAmount);
														let temlib;

														if (tempPayAmount[index] > totalLibraryFee) {
															temlib = Number(totalLibraryFee);
														} else {
															temlib = Number(0);
														}
														let temCourseFee = temtot;
														let temdue = Number(temtot - tempay);
														if (isNaN(temdue)) {
															temdue = Number((tempPayAmount[index] - temlib) - tempPayAmount[index]);
														}

														tempPayAmount[index] = tempay;
														table.cell("#statusTotalPaid" + index).data(tempay.toLocaleString());
														table.cell("#statusDueAmmount" + index).data(temdue.toLocaleString());
														table.draw();

													} else {

														Swal.fire({
															title: 'Warning',
															text: 'This payment already has a generated 16-digit code. Are you sure you want to process this payment? If you proceed, the existing amount in the student’s profile will be updated by adding the new amount to the current balance.',
															icon: 'warning',
															showCancelButton: true,
															confirmButtonText: 'Yes, Process',
															cancelButtonText: 'No, Cancel',
														}).then((result) => {
															if (result.isConfirmed) {

																let setData16Digit = {
																	action: "data4Update16DigitPayment",
																	Pay_RefNo: ref,
																	Pay_studentNo: studentNo,
																	Pay_sourceCode: sourceCode,
																	Pay_CategoryCode: CategoryCode,
																	Pay_amount: parseFloat(paymentAmount).toFixed(2),
																	Response_Progress_Time: bankdate, //vf
																	Pay_Method: paymentMethod,
																	Response_Progress: 1,
																	authcode: authcode,
																	username: dataRep['userId'],
																};
																$.ajax({
																	type: 'POST',
																	url: 'rules/payment.php',
																	data: setData16Digit,
																	dataType: 'json',
																	success: function (res) {
																		if (res.status === 200) {
																			let temtot = Number(totalCourseFee);
																			let tempay = (Number(tempPayAmount[index])) + Number(paymentAmount);
																			let temlib;

																			if (tempPayAmount[index] > totalLibraryFee) {
																				temlib = Number(totalLibraryFee);
																			} else {
																				temlib = Number(0);
																			}
																			let temCourseFee = temtot;
																			let temdue = Number(temtot - tempay);
																			if (isNaN(temdue)) {
																				temdue = Number((tempPayAmount[index] - temlib) - tempPayAmount[index]);
																			}

																			tempPayAmount[index] = tempay;
																			table.cell("#statusTotalPaid" + index).data(tempay.toLocaleString());
																			table.cell("#statusDueAmmount" + index).data(temdue.toLocaleString());
																			table.draw();

																			Swal.fire({
																				title: 'Success',
																				text: `The payment has been processed successfully.`,
																				icon: 'success',
																				confirmButtonText: 'Okay',
																			});
																		}
																	}, error: function (error) {
																		console.log(error)

																	}
																});

															} else {
																Swal.fire({
																	title: 'Cancelled',
																	text: 'The payment process was cancelled, and no changes were made to the student’s profile.',
																	icon: 'info',
																	confirmButtonText: 'Okay',
																});
															}
														});
													}
												},
												error: function (error) {
													console.log(error)

												}
											});



										}
									}
								});

							}
						});

					}
				},
				error: function (error) {
					console.log(error)

				}
			});


		}
		if (paymentType == 2) {
			Swal.fire({
				title: 'Payment Details',
				html: `
				  <form>
					<div class="row mb-3">
					  <div class="col-sm-12" style="text-align: left;">
						<label class="form-label" for="paymentAmount">Payment Amount:</label>
						<input type="number" id="paymentAmount" name="paymentAmount" class="form-control" required>
					  </div>
					  <div class="col-sm-12" style="text-align: left; margin-top: 10px;">
						<label class="form-label" for="paidDate">Paid Date (For Bank):</label>
						<input type="date" id="paidDate" name="paidDate" class="form-control" required>
					  </div>
					  <div class="col-sm-12" style="text-align: left; margin-top: 20px;">
						<label class="form-label">Select Installments:</label><br>
						<section>
						<input type="checkbox" id="firstInstallment" name="installment" value="1">
						<label for="firstInstallment" style="margin-right: 1rem; padding-left: 5px;">First Installment</label></section>
						<section>
						<input type="checkbox" id="secondInstallment" name="installment" value="2">
						<label for="secondInstallment" style="margin-right: 1rem; padding-left: 5px;">Second Installment</label></section>
						<section>
						<input type="checkbox" id="thirdInstallment" name="installment" value="3">
						<label for="thirdInstallment" style="margin-right: 1rem; padding-left: 5px;">Third Installment</label></section>
						<section>
						<input type="checkbox" id="fourthInstallment" name="installment" value="4">
						<label for="fourthInstallment" style="margin-right: 1rem; padding-left: 5px;">Fourth Installment</label></section>
					  </div>
					</div>
				  </form>
				`,
				focusConfirm: false,
				showCancelButton: true,
				confirmButtonText: 'Save Payment',
				customClass: {
					popup: 'custom-width-popup'
				}
			}).then((result) => {
				if (result.isConfirmed) {
					const paymentAmount = document.getElementById('paymentAmount').value;
					const paidDate = document.getElementById('paidDate').value;
					let installment = "";
					document.querySelectorAll('input[name="installment"]:checked').forEach((checkbox) => {
						installment += (checkbox.value);
					});

					let timestamp = new Date().getUTCMilliseconds();
					timestamp++;
					let tCode = "T" + studentNoArr[index] + timestamp;
					let studentNo = studentNoArr[index];
					let feeCat = "Total Course fee";
					let amount = paymentAmount;
					let bankdate = paidDate;
					let degreeCode = document.getElementById('selectedDegreeName').value;
					// let installment;

					let getApplicant = {
						action: "data4AddManualPayment",
						tCode: tCode,
						studentNo: studentNo,
						feeCat: feeCat,
						amount: parseFloat(amount).toFixed(2),
						bankdate: bankdate,
						degreeCode: degreeCode,
						installment: installment,
						authcode: authcode,
						username: dataRep['userId'],
					};
					$.ajax({
						type: 'POST',
						url: 'rules/payment.php',
						data: getApplicant,
						dataType: 'json',
						success: function (res) {
							if (res.status === 200) {
								Swal.fire({
									title: 'Payment Updated',
									icon: 'success',
									confirmButtonText: 'Okay',
									timer: 5000, // 5 seconds time limit
									timerProgressBar: true, // Show progress bar
								});

								let temtot = Number(totalCourseFee);
								let tempay = (Number(tempPayAmount[index])) + Number(amount);
								let temlib;

								if (tempPayAmount[index] > totalLibraryFee) {
									temlib = Number(totalLibraryFee);
								} else {
									temlib = Number(0);
								}
								let temCourseFee = temtot;
								let temdue = Number(temtot - tempay);
								if (isNaN(temdue)) {
									temdue = Number((tempPayAmount[index] - temlib) - tempPayAmount[index]);
								}

								tempPayAmount[index] = tempay;
								table.cell("#statusTotalPaid" + index).data(tempay.toLocaleString());
								table.cell("#statusDueAmmount" + index).data(temdue.toLocaleString());
								table.draw();
							} else {
								console.log(res);
							}
						},
						error: function (error) {
							console.log(error)

						}
					});



				}
			});
		}

	}


	if (jobStatus == 2) {
		if (paymentType == 1) {

			openModelShowPaymentsForDeduct(index, paymentType, totalCourseFee, totalLibraryFee);

		}
		if (paymentType == 2) {
			openModelShowPaymentsForDeduct(index, paymentType, totalCourseFee, totalLibraryFee);
		}
	}
}

function updateAmount() {
	const paymentType = document.getElementById('paymentType');
	const selectedOption = paymentType.options[paymentType.selectedIndex];
	const amount = selectedOption.getAttribute('data-amount');
	document.getElementById('paymentAmount').value = amount;
}
function loadProfileStudent(index) {
	returnStudentProfile();
	setSearchApplicantStudent('student');
	getStudentProfile(document.getElementById('studentNoPayment' + index).value);
}

//view list of 16 digit paid students and their payment status	
function ViewPaidStudentsList1() {
	// document.getElementById('ViewPaidlist').innerHTML = document.getElementById('ViewPaidlist').innerHTML.replace = "";

	dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
	dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
	dataRep["selectedMedium"] = md;
	dataRep["dataType"] = 1; //reg only
	if ((dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator")) {
		dataRep["dataType"] = 2; //all reg and pre-reg
	}
	// console.log(dataRep["selectedMedium"]);
	sendForm("data4NewStudentPaymentDetails");





}



//calculate paid amount (to view payment status)
function PayCalAmount1() {
	tempCount = 0;
	var j = add = 0;
	degCode = acYear = "";

	for (i = 0; i < IncomeCategoryCodeLength; i++) {

		if (document.getElementById('achedamicYear').value == achedamicYearIncomeArr[i] && document.getElementById('selectedDegreeName').value == IncomedegreeCodeArr[i]) {
			degCode = IncomedegreeCodeArr[i];
			acYear = achedamicYearIncomeArr[i];
		}
	}

	for (i = 0; i < RefNoLength; i++) {

		if (Pay_studentNoArr[i].includes(document.getElementById('achedamicYear').value) && degCode == paydegreeCodeArr[i]) {

			if (tempStdNo[j] == Pay_studentNoArr[i]) {
				//add +=parseInt(Pay_amountArr[i],10);
				add += Number(Pay_amountArr[i]);
				tempPayAmount[j] = add;
			}
			else {
				j++;
				tempStdNo[j] = Pay_studentNoArr[i];
				add = 0;
				//add +=parseInt(Pay_amountArr[i],10);
				add += Number(Pay_amountArr[i]);
				tempPayAmount[j] = add;
			}

		}

	}

}


//calculate installment details for selected degree
function calInstallment2() {

	tempInstNo = new Array();
	tempAmount = new Array();
	tempDeadline = new Array();
	totalCourseFee = 0;
	totalLibraryFee = 0;
	for (i = 0; i < installmentNoLength; i++) {
		if (document.getElementById('achedamicYear').value == academicYrForInstArr[i] && document.getElementById('selectedDegreeName').value == degreeCodeForInstArr[i]) {
			tempInstNo[i] = instNoForInstArr[i];
			tempAmount[i] = amountForInstArr[i];
			tempDeadline[i] = deadlineForInstArr[i];

			if (courseFeeForInstArr[i] != "" && libraryFeeForInstArr[i] != "") {
				totalCourseFee = parseInt(courseFeeForInstArr[i], 10) + parseInt(libraryFeeForInstArr[i], 10);
			}
			if (libraryFeeForInstArr[i] != "") {
				totalLibraryFee = parseInt(libraryFeeForInstArr[i], 10);
			}
		}
	}

}

function calTotalFee() {
	totalCourseFee = 0;
	totalLibraryFee = 0;
	for (i = 0; i < IncomeCategoryCodeLength; i++) {
		if (document.getElementById('selectedDegreeName').value == IncomedegreeCodeArr[i] && document.getElementById('achedamicYear').value == achedamicYearIncomeArr[i]) {
			if (IncomeCategoryTitleArr[i] != "" & IncomeCategoryTitleArr[i] == "Course fee - Total") {
				if (IncomeCategoryValueArr[i] != "") {
					totalCourseFee = IncomeCategoryValueArr[i];
				}
				if (libraryFeeForInstArr[i] != "") {
					totalLibraryFee = parseInt(libraryFeeForInstArr[i], 10);
				}
			}
		}
	}
}

//--------------------------------------------------------------------------------------------------------------------------------------

//function of Mark All button	
function MarkAll() {
	p = 0;
	for (i = 0; i < studentNoLength; i++) {
		var checkBoxDivIdRegistered16 = 'markRegistered16' + i;
		if (document.getElementById('markRegistered16' + i)) {

			document.getElementById('markRegistered16' + i).checked = true;
			document.getElementById("mark-all").disabled = true;
			document.getElementById("mark-non").disabled = false;

			var nam16 = "Alist16";
			nam16 += i;
			if (countId == 1) {
				countId = 0;
				document.getElementById(nam16).style.backgroundColor = '#d0d0fb';

			}
			else {
				countId++;
				document.getElementById(nam16).style.backgroundColor = '#e7e7fd';
			}


		}
	}
}

//function of Unmark All button
function UnmarkAll() {
	p = 0;
	selectedlist = new Array();
	for (i = 0; i < studentNoLength; i++) {
		var checkBoxDivIdRegistered16 = 'markRegistered16' + i;
		if (document.getElementById(checkBoxDivIdRegistered16)) {

			document.getElementById(checkBoxDivIdRegistered16).checked = false;
			document.getElementById("mark-all").disabled = false;
			document.getElementById("mark-non").disabled = true;

			var nam16 = "Alist16";
			nam16 += i;
			if (countId == 1) {
				countId = 0;
				//document.getElementById(nam16).style.backgroundColor =  '#FDFDFD' ;

			}
			else {
				countId++;
				//document.getElementById(nam16).style.backgroundColor = '#FDFDFD';
			}
		}

	}

}


//2023-09-25 Nirosh
function download16DigitStudentPayment() {

	var data = [
		['Student Payment Details'],
		[document.getElementById('selectedDegreeName').value + " - " + document.getElementById('achedamicYear').value, '', '', '', '', ''],
		['', '', '', '', '', ''],
		['Total Course Fee: ' + totalCourseFee, '', '', '', '', ''],
		['', '', '', '', '', ''],
		['No', 'Student Name', 'Student No', 'NIC Number', 'Paid Amount', 'Due Amount']
	];

	data.push();

	var chechCount = 0;

	for (var i = 0; i < studentNoLength; i++) {
		var temtot = temdue = totalCourseFee;
		var tempay = 0;
		if (document.getElementById('markRegistered16' + i)) {
			if (document.getElementById('markRegistered16' + i).checked == true) {
				chechCount++;

				var newRow = [];
				newRow.push(chechCount);
				newRow.push(studentInitialArr[i]);
				newRow.push(studentNoArr[i]);

				var nic = studentNICArr[i].replace(/\s+/g, "").trim();
				if (nic.length == 9) {
					nic = nic + "V";
				}
				newRow.push(nic);


				temtot = totalCourseFee;
				tempay = Number(tempPayAmount[i]);
				temdue = temtot - tempay;

				newRow.push(tempay.toLocaleString());
				newRow.push(temdue.toLocaleString());
				data.push(newRow);

			}

		}

	}
	if (chechCount == 0) {
		alert("Please select at least one student");
	} else {

		// Convert data to CSV format
		// const csvContent = data.map(row => row.join(',')).join('\n');
		const csvContent = data.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

		// Create a Blob (binary large object) containing the CSV data
		const blob = new Blob([csvContent], { type: 'text/csv' });

		// Create a temporary hidden anchor element
		const a = document.createElement('a');
		a.style.display = 'none';

		// Set the Blob URL as the anchor's href
		a.href = window.URL.createObjectURL(blob);

		// Specify the filename for the downloaded file
		a.download = document.getElementById('selectedDegreeName').value + " - " + document.getElementById('achedamicYear').value + ' Student Payments List.csv';

		// Append the anchor to the document body
		document.body.appendChild(a);

		// Programmatically trigger a click event on the anchor to initiate the download
		a.click();

		// Clean up by revoking the Blob URL and removing the anchor element
		window.URL.revokeObjectURL(a.href);
		document.body.removeChild(a);
	}


}


function AttendListDown16() {

	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {

		var count = 1;
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + " - " + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Registered Student List</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Name</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Student NIC</th>";
		newStr += "<th style='border: 1px solid black;'>Contact No</th>";
		newStr += "<th style='border: 1px solid black;'>Email</th>";
		newStr += "<th style='border: 1px solid black;'>Address</th>";
		newStr += "<th style='border: 1px solid black;'>Library ID</th>";
		newStr += "<th style='border: 1px solid black;'>Signature</th>";
		newStr += "</tr>";


		for (var i = 0; i < studentNoLength; i++) {
			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {
				if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {


					newStr += "<tr>";
					newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + count + '</td>';
					newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">' + studentPersonalTitleArr[i] + ". " + studentInitialArr[i] + '</td>';
					newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + studentNoArr[i] + '</td>';//studentNICArr
					newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + studentNICArr[i] + '</td>';
					newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">' + studentContactMobileArr[i] + '</td>';
					newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">' + studentContactEmailArr[i] + '</td>';
					newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">' + studentPermanentAddressArr[i] + '</td>';
					newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:200px;">' + librarycodeArr[i] + '</td>';
					newStr += '<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
					newStr += "</tr>";
					newStr += "</div><dev><br>";

					count++;

				}

			}
		}
		newStr += "</table>";
		newStr += "<br>";
	}


	var exportFilename = "Attendence Sheet.doc";
	var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });


	if (navigator.msSaveBlob) {
		navigator.msSaveBlob(csvData, exportFilename);
	} else {
		//In FF link must be added to DOM to be clicked
		var link = document.createElement('a');
		link.href = window.URL.createObjectURL(csvData);
		link.setAttribute('download', exportFilename);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}


}