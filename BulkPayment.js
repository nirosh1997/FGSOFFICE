//Coded By S.Suraweera
//Edited by Nishadi

var PaymentData = new Array();
dataRep["sessionID"] = dataRep["docName"] = dataRep["programYear"] = dataRep["setamount"] = dataRep['roleName'] = dataRep['userName'] = dataRep["achedamicYear"] = "";
var inum = 0;
var rcount = 1;
var tempid, exid;
var installmentChecked = "";
var installment = "";
var totalCourseFee = 0;
var tempStdNo = new Array();
var tempPayAmount = new Array();
var tempDueAmount = new Array();
var tempInstNo = tempAmount = tempDeadline = new Array();
var tempCount = jj = r = 0;
var selectedlist = new Array();
var p = 0;
var degCode = acYear = "";
dataRep['payYYYY'] = dataRep['payMM'] = dataRep['payDD'] = dataRep["amount"] = "";
var installmentChecked1 = installmentChecked2 = installmentChecked3 = installmentChecked4 = "";



function DataTableForformBulkPayment() {

	var buttons = [];

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName']=='Technical Coordinator'  || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
		buttons.push({
			text: '<i class="fa fa-file-excel-o"></i> Sinhala Medium List - Excel',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				CompleteApplicationSin('e');
			}
		});

		buttons.push({
			text: '<i class="fa fa-file-excel-o"></i> English Medium List - Excel',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				CompleteApplicationEng('e');
			}
		});

		buttons.push({
			text: '<i class="fa fa-file-word-o"></i> Sinhala Medium List - Word',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				CompleteApplicationSin('w');
			}
		});

		buttons.push({
			text: '<i class="fa fa-file-word-o"></i> English Medium List - Word',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				CompleteApplicationEng('w');
			}
		});
	}

	if (dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Assistant Registrar') {
		buttons.push({
			text: 'Remove Application',
			className: 'btn btn-primary',
			action: function (e, dt, node, config) {
				checkdeleteorsaveapplication();
				formDeleteApplicationsendFormSwal('deleteApplicationForm');
			}
		});

	}

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName']=='Technical Coordinator'  || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'Assistant Registrar' || dataRep['roleName'] == 'Administrator' || dataRep['roleName'] == 'Dean') {
		buttons.push({
			text: 'Send SMS',
			className: 'btn btn-primary h-46',
			action: function (e, dt, node, config) {
				const mobileNumber = [];
				applicantDTable.rows().every(function (index) {
					// Get the data for the current row
					var rowData = this.data();
					var checkbox = $(this.node()).find('input[type="checkbox"]');
					var isChecked = checkbox.prop('checked');

					if (isChecked) {
						if (mobileNumberValid(studentContactLanArr[index]) != 0) {
							mobileNumber.push(studentContactLanArr[index]);
						} else if (mobileNumberValid(studentContactMobileArr[index]) != 0) {
							mobileNumber.push(studentContactMobileArr[index]);
						}
					}
				});

				openInputDialogBulkSMS(mobileNumber);
			}
		});

	}


	applicantDTable = $('#applicantTable').DataTable({
		dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
			"<'row'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
			"<'row'<'col-12't>>" + // Table in a single line
			"<'row'<'col-12 col-md-6'i><'col-12 col-md-6'p>>", // Processing display element right, pagination right
		buttons: buttons,
		"language": {
			"lengthMenu": "Display _MENU_ applicants per page",
			"zeroRecords": "Applicants not found. please select valid program and year",
			// "info": "Found _MAX_ Applicants",
			"info": "Showing page _PAGE_ of _PAGES_ | Total Applicants : _MAX_",
			"infoEmpty": "",
			"infoFiltered": "(filtered from _MAX_ total records)",
			"sSearch": "Find Applicant: "
		},
		"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
		columnDefs: [{
			targets: 0,
			orderable: false,
			searchable: false,
			className: 'selectall-checkbox',
		},
			// {
			// 	targets: 1,
			// 	orderable: false,
			// 	searchable: false
			// },
		],
		select: {
			style: 'multi',
			selector: 'td:first-child',
		},
		order: [1, 'asc'],
	});


	applicantDTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		var countSelectedRows = applicantDTable.rows({ selected: true }).count();
		var countItems = applicantDTable.rows().count();

		if (countItems > 0) {
			if (countSelectedRows == countItems) {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
			} else {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
			}
		}

		if (e.type === 'select') {
			$('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: true }).nodes()).prop('checked', true);
		} else {
			$('.selectall-checkbox input[type="checkbox"]', applicantDTable.rows({ selected: false }).nodes()).prop('checked', false);
		}
	});

	// When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	applicantDTable.on('click', 'thead .selectall-checkbox', function () {
		$('input[type="checkbox"]', this).trigger('click');
	});


	// When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	applicantDTable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
		if (this.checked) {
			applicantDTable.rows().select();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
				}
			}
		} else {
			applicantDTable.rows().deselect();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", false);
				}
			}
		}

		e.stopPropagation();
	});









	// $('#all').click(function (e) {
	// 	// $('#applicantTable tbody :checkbox').prop('checked', $(this).is(':checked'));
	// 	// e.stopImmediatePropagation();
	// 	console.log($('#all').is(':checked'))
	// 	if ($('#all').is(':checked')) {
	// 		for (i = 0; i < applicationNoLength; i++) {
	// 			var checkBoxDivIdRegistered = '#checkSelected' + i;
	// 			if ($(checkBoxDivIdRegistered)) {
	// 				$(checkBoxDivIdRegistered).prop("checked", true);
	// 				console.log($(checkBoxDivIdRegistered));
	// 			}
	// 		}
	// 	} else {
	// 		for (i = 0; i < applicationNoLength; i++) {
	// 			var checkBoxDivIdRegistered = '#checkSelected' + i;
	// 			if ($(checkBoxDivIdRegistered)) {
	// 				$(checkBoxDivIdRegistered).prop("checked", false);
	// 			}
	// 		}
	// 	}
	// });
}





function formBulkPayment(dsp) {


	str = "";

	title = "Add Student Payments";

	if (dsp == "formBulkPayment") {

		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center" style="width: 100%;">';
		str += '<ul class="navbar-nav mr-lg-2" style="display: block;">';
		str += '<li class="nav-item ml-0">';
		str += '<div class="row" style="padding:3px 0">';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex align-items-center"><h4 class="navTitle">' + title + '</h4></div>';
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">';
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName']=='Technical Coordinator'  || dataRep['roleName'] == 'Program Assistant/Clerk' || dataRep['roleName'] == 'Head of the Department') {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListApplicantOnchange();" >';
			str += programName;
			str += programName1;
			str += '</select>';
		}
		else {
			str += '<select class="form-control form-control-sm" id="selectedDegreeName" onchange="dataRep[this.id]=this.value;filterListApplicantOnchange();" >';
			str += programName;
			str += '</select>';
		}
		str += '</div>';
		let date = new Date().getFullYear();
		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">';
		str += '<div class="row">';
		str += '<div class="col-12 col-sm-4 col-md-4 col-lg-5 col-xl-5">';
		str += '<select class="form-control form-control-sm" id="achedamicYear" onchange="dataRep[this.id]=this.value;filterListApplicantOnchange();">';
		for (i = 2014; i <= date + 1; i++) {
			if (i == date + 1) {
				str += "<option " + ((dataRep["achedamicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			} else {
				str += "<option " + ((dataRep["achedamicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
			}
		}
		str += '</select>';
		str += '</div>';

		str += '<div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 d-flex align-items-center">';
		// str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="filterListApplicant();" id="filterBtn">View List</button>';
		str += '<button type="button" class="btn btn-info" style="float:right;    height: 100%;" onclick="calInstallment();calPayAmount();ViewStudentsList();" id="filterBtn">View List</button>';
		// calInstallment();calPayAmount();ViewStudentsList();
		str += '</div>';
		str += '</div>';
		str += '</div>';

		str += '</div>';
		str += '</li>';
		str += '</ul>';
		str += '</div>';
		str += '</nav >';




		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="applicantTable">';
		str += '<thead><tr>';
		str += '<th><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		str += '<th></th>';
		// str += '<th>#</th>';
		str += '<th width="25%">Student Name</th>';
		str += '<th width="20%">Registration No</th>';
		str += '<th width="15%">NIC</th>';
		str += '<th width="10%">Paid Amount</th>';
		str += '<th width="10%">Due Amount</th>';
		str += '<th width="7%">Payment Completed   </th>';
		// str += '<th>PIN No</th>';
		str += '</tr></thead>';
		str += '<tbody>';

		if (studentNoLength > 0 && document.getElementById('selectedDegreeName')) {
			for (i = 0; i < studentNoLength; i++) {
				var temtot = temdue = totalCourseFee;
				var tempay = 0;
				if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

					if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] && document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

						rcount++;
						if (rcount % 2 == 0) {
							newStr += "<tr style='background-Color:#ffece6;>";
						}
						else {
							newStr += "<tr style='background-Color:#ffd9cc;>";
						}

						newStr += "<div class='info' id='Alist" + i + "'  name='testInfo" + i + "'>";
						newStr += "<td style='width:60px;' align='center'><div  class='investView' style='text-align:center'  name='registered" + i + "' id='registered" + i + "'>";
						newStr += "<input type='checkbox'  " + registeredChecked + "  id='markRegistered" + i + "' name='markRegistered" + i + "' onchange='AddRowColorsid(Alist" + i + ", this);selectedStudentList(" + i + ")'/>";
						newStr += "</div></td>";
						newStr += "<td style='width:80px;' align='center'><div style='width:80px;' class='investView' name='rc" + i + "' id='rc" + i + "'";
						newStr += " onchange='dataRep[this.name]=this.value;'>" + rcount + "</div></td>";
						newStr += "<td style='width:300px;' align='center'><div style='width:300px;' class='investView_l' name='studentNo" + i + "' id='studentNo" + i + "' onchange='dataRep[this.name]=this.value;'>";
						newStr += studentInitialArr[i] + "</div></td>";
						newStr += "<td style='width:250px;' align='center'><div style='width:250px;' class='investView' name='studentName" + i + "' id='studentName" + i + "'";
						newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNoArr[i] + "</div></td>";
						newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='studentNIC" + i + "' id='studentNIC" + i + "'";
						newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNICArr[i] + "</div></td>";

						if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar' || dataRep['roleName'] == 'Assistant Bursar') {
							var checkBoxDivIdRegistered = 'markRegistered' + i;
							if (document.getElementById(checkBoxDivIdRegistered)) {
								if (document.getElementById(checkBoxDivIdRegistered).checked) {
									registeredChecked = 'checked';
								}
							}

						}

						for (jj = 0; jj < tempStdNo.length; jj++) {
							if (studentNoArr[i] == tempStdNo[jj]) {
								temtot = totalCourseFee;
								tempay = parseInt(tempPayAmount[jj], 10);
								temdue = temtot - tempay;

							}

						}

						newStr += "<td style='width:200px;' align='center'><div style='width:200px;color=red' class='investView' name='paymentStatus" + i + "' id='paymentStatus" + i + "'";
						newStr += " onchange='dataRep[this.name]=this.value;'><font color=black>" + tempay + "</font></div></td>";

						newStr += "<td style='width:200px;' align='center'><div style='width:200px;color=red' class='investView' name='balancepaymentStatus" + i + "' id='balancepaymentStatus" + i + "'";
						newStr += " onchange='dataRep[this.name]=this.value;'><font color=red>" + temdue + "</font></div></td>";

						newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentCompletedDiv" + i + "' id='paymentCompletedDiv" + i + "'";
						newStr += " onchange='dataRep[this.name]=this.value;'><font color=red>" + paymentCompletedArr[i] + "</font></div></td>";

						// if(paymentCompletedArr[i]=="YES"){
						// newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentCompletedDiv"+i+"' id='paymentCompletedDiv"+i+"'";
						// newStr += " onchange='dataRep[this.name]=this.value;'><font color=red>YES</font></div></td>";
						// }
						// else{
						// newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentCompletedDiv"+i+"' id='paymentCompletedDiv"+i+"'";
						// newStr += " onchange='dataRep[this.name]=this.value;'>NO</div></td>";
						// }


						//var confirmed=0;
						if (sarConfirmationArr[i] == "Course fee Completed Confirmed by SAR") {
							newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentConfirmed" + i + "' id='paymentConfirmed" + i + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>YES</div></td>";
						}
						else {
							newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentConfirmed" + i + "' id='paymentConfirmed" + i + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>NO</div></td>";
						}
						newStr += "</tr>";
					}
				}
			}

		}
		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';








































		str += "<div id='formBulkPayment'>";
		var u = document.cookie;
		var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		for (i = 0; i < userIdLength; i++) {
			if (use == userIdArr[i]) {
				dataRep['roleName'] = roleNameArr[i];
				dataRep['userName'] = userNameArr[i]
			}

		}

		str += "<div style='float:left;width:100%;height:50px;'>";
		str += "<div style='float:right;padding:15px;'>";
		str += "<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
		str += "<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>" + '&nbsp;' + dataRep['userName'] + '&nbsp;' + '|' + "</div>";
		str += "<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
		str += "</div></div><br/>";

		str += "<table><tr><td>";
		str += '<h2 >' + title + '</h2><hr>';

		str += '<form name="maintainBulkPayment"><br>';
		str += "<div>";



		programName = "<option>Please scroll down to see the records</option>";

		for (i = 0; i < studentNoLength; i++) {


			if (degreeTitleArr[i] != null) {

				if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i]) == i)) {

					programName += "<option>" + degreeTitleArr[i] + "</option>";

				}
			}
		}


		str += "<div class='identifiers'>Select Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
		str += programName;
		str += "</select>";



		dataRep['achedamicYear'] = "";
		str += "<div class='identifiers'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
		str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
		str += "</select>";


		str += '<input type="button" id="View-List" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=calInstallment();calPayAmount();ViewStudentsList();>';

		str += "<div>_____________________________________________________________________________________________________________________________________________</div>";


		str += "<div id='paymentDivDisplay' style=''>";

		documentNameView = "<option>Please scroll down to see the records</option>";
		documentNameView += "<option>Total Course fee</option>";

		str += "&nbsp;<h3>&nbsp;&nbsp;<b><u>Add Payments</u></b></h3>";

		str += "<br><div class='identifiers'>Select Payment Category</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='payCategory' onchange='dataRep[this.id]=this.selectedIndex;installmentView();'>";
		str += documentNameView;
		str += "</select>";
		str += '<input type="button" id="mark-all" style="margin-top:1px;float:left" class="btnB" value="Mark All" onclick=MarkAll();>';
		str += '<input type="button" id="mark-non" style="margin-top:1px;float:left" class="btnB" value="Unmark All" onclick=UnmarkAll();>';
		str += "<br><div id='payAmount' class='identifiers'>Payment Amount</div><div class='colon'>&nbsp;:&nbsp;</div>";

		str += "<div class='colon'>&nbsp;&nbsp;</div><div class='viewArea' id='enterAmount' style='float:left;'>";

		str += "<input type='text' style='width:205px';visibility:'hidden' name='Amount'  id='Amount' value= '" + dataRep["amount"].trim() + "'  onchange='dataRep[this.name]=this.value;'>";
		str += "</div>";

		str += "</br>";
		var installmentChecked = "";
		str += "<div id='installmentDivDisplay' style='margin-top:1px;float:left;'>";
		str += "<div class='colon'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
		str += "<input  type='checkbox' " + installmentChecked + " name='installmentChecked1'  id='installmentChecked1' value='first' ><font color='#bd3303'>First Installment &nbsp;&nbsp;</font>";
		str += "<input  type='checkbox' " + installmentChecked + " name='installmentChecked2'  id='installmentChecked2' value='second' ><font color='#bd3303'>Second Installment &nbsp;&nbsp;</font>";
		str += "<input  type='checkbox' " + installmentChecked + " name='installmentChecked3'  id='installmentChecked3' value='third' ><font color='#bd3303'>Third Installment &nbsp;&nbsp;</font>";
		str += "<input  type='checkbox' " + installmentChecked + " name='installmentChecked4'  id='installmentChecked4' value='fourth' ><font color='#bd3303'>Fourth Installment &nbsp;&nbsp;</font>";
		str += "</div>";

		str += "<div style='clear:both'>";
		str += "<div class='longIdentifier'>Paid Date (For Bank)</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str += "<select name='payYYYY' value='payYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
		str += generateNumberOptions(2016, 2050, 4, dataRep['payYYYY']);
		str += "</select>";
		str += "<select name='payMM' value='payMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
		str += generateNumberOptions(1, 12, 2, dataRep['payMM']);
		str += "</select>";
		str += "<select name='payDD' value='payDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
		str += generateNumberOptions(1, 31, 2, dataRep['payDD']);
		str += "</select>";
		str += "</div>";


		str += "<div style='clear:both'>&nbsp;</div>";


		str += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payments" onclick=formAddStudentsPayments(' + "'addStudentsPayments'" + ');showMenu(' + "'main'" + ');>';

		str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=calPayAmount();getStudentPaymentlist();>';

		// newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getBalance" value="Get Balance" onclick=calPayAmount();getPaymentDegreeWise();>';

		str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentComList" value="Download Payment Complete List" onclick=calPayAmount();downloadStudentPaymentCompletelist();>';


		str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payment Complete" onclick=formUpdatePaymentList(' + "'updatePaymentList'" + ');>'; //

		//newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB"  value="SAR- Confirmation" onclick=formUpdatePaymentConfirmList('+"'updatePaymentConfirmList'"+');>';


		str += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';



		if (dataRep['roleName'] == 'Dean') {
			// //str += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formDeanMenu'"+');>';
			dataRep['userName'] = "Dean Faculty of Graduate Studies"
		}

		//}




		str += "<div  id='list' ></div>";
		str += '</td></table></div>';
		str += '</form>';
	}
	return str;

}

//reset variables and arrays
function resetInstallment() {
	sendForm('data4returnBulkPayment');
	sendForm('data4StudentPaymentRecord');
	sendForm('data4InstallmentDetails');
	sendForm('data4StudentPaymentDetails');
	sendForm('data4StudentPaymentDetails1');
	sendForm('data4StudentPaymentDetails2');

	installment = "";
	//totalCourseFee=tempCount=jj=r=p=0;
	//selectedlist=tempStdNo=tempPayAmount=tempDueAmount=tempInstNo=tempAmount=tempDeadline=new Array();	
	dataRep['payYYYY'] = dataRep['payMM'] = dataRep['payDD'] = dataRep["amount"] = "";
}

//enable to record payment installments	
function installmentView() {
	if (document.getElementById('payCategory').value == "Total Course fee")
		document.getElementById("installmentDivDisplay").style = "display";
	else
		document.getElementById("installmentDivDisplay").style = "display:none";
}


// function disableDivforAB(){
// if(dataRep['roleName']=='Assistant Bursar'){

// document.getElementById("saveList").style.display = "none";
// document.getElementById("paycompleteList").style.display = "none";
// document.getElementById("payConfirmList").style.display = "none";
// document.getElementById("getPaymentComList").style.display = "none";
// document.getElementById("getPaymentList").style.display = "none";
// document.getElementById('mark-all').style.display = "none";
// document.getElementById('mark-non').style.display = "none";
// document.getElementById('Amount').style.display = "none";
// document.getElementById('installmentDivDisplay').style.display = "none";
// document.getElementById("payCategory").style.display = "none";
// document.getElementById('enterAmount').style.display = "none";

// }
// }



//calculate paid amount (to view payment status)
function calPayAmount() {
	tempCount = 0;
	var j = add = 0;
	degCode = acYear = "";

	for (i = 0; i < degreeCodeLength; i++) {

		if (document.getElementById('achedamicYear').value == acYearArr[i] && document.getElementById('selectedDegreeName').value == degreeTitleArr2[i]) {
			degCode = degreeCodeNewArr2[i];
			acYear = acYearArr[i];
		}
	}

	for (i = 0; i < tCLength; i++) {

		if (studentNoNewArr[i].includes(document.getElementById('achedamicYear').value) && degCode == degreeCodeNewArr[i]) {

			if (tempStdNo[j] == studentNoNewArr[i]) {
				add += parseInt(payAmountArr[i], 10);
				tempPayAmount[j] = add;
			}
			else {
				j++;
				tempStdNo[j] = studentNoNewArr[i];
				add = 0;
				add += parseInt(payAmountArr[i], 10);
				tempPayAmount[j] = add;
			}

		}

	}

}

//calculate installment details for selected degree
function calInstallment() {

	tempInstNo = new Array();
	tempAmount = new Array();
	tempDeadline = new Array();
	for (i = 0; i < installmentNoLength; i++) {

		if (document.getElementById('achedamicYear').value == academicYrForInstArr[i] && document.getElementById('selectedDegreeName').value == degreeTitleForInstArr[i]) {
			tempInstNo[i] = instNoForInstArr[i];
			tempAmount[i] = amountForInstArr[i];
			tempDeadline[i] = deadlineForInstArr[i];
			totalCourseFee = parseInt(courseFeeForInstArr[i], 10) + parseInt(libraryFeeForInstArr[i], 10);
		}
	}

}

//view list of students and their payment status	
function ViewStudentsList() {
	rcount = 0;

	document.getElementById('list').innerHTML = document.getElementById('list').innerHTML.replace = "";
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

		alert("Please Select a value from the select Box(s)");

	}
	else {

		if (document.getElementById('selectedDegreeName').value == "Please Select Programme") {
			alert("Please Select a value from the select Box(s)");
		} else {
			dataRep["achedamicYear"] = document.getElementById('achedamicYear').value;
			dataRep["selectedDegreeName"] = document.getElementById('selectedDegreeName').value;
			$.ajax({
				type: 'POST',
				url: 'rules/batch.php',
				data: postData,
				dataType: 'json',
				success: function (response) {
					console.log(response)
					let batch;
					if (response[0].status === 200) {
						batch = response[0].batchName
					}

				}
			});
		}
		// var dueAmount = 0;
		// var r;
		// var degreeName = document.getElementById('selectedDegreeName').value;
		// var newStr = "&nbsp;<h3>&nbsp;&nbsp;<b><u>" + degreeName + " - Payment Details</u></b></h3>";

		// newStr += "<br><div class='identifiers' style='width:150px;'>Total Course Fee</div><div class='colon'>&nbsp;:&nbsp;</div>";
		// newStr += "<div class='colon'>" + totalCourseFee + "</div>";
		// newStr += "<br>";
		// // for(r=0;r<tempInstNo.length;r++){
		// // if(tempInstNo[r]!==undefined && tempAmount[r]!==undefined && tempDeadline[r]!==undefined){
		// // newStr +="<br><div class='identifiers' style='width:150px;'><font color='black'>Installment "+tempInstNo[r]+" Amount</font></div><div class='colon'>&nbsp;:&nbsp;</div>";
		// // newStr +="<div class='colon' style='width:50px;'>"+tempAmount[r]+"</div>";
		// // newStr +="<div class='identifiers' style='width:80px;clear:none'><font color='black'>Deadline</font></div><div class='colon'>&nbsp;:&nbsp;</div>";
		// // newStr +="<div class='colon'>"+tempDeadline[r]+"</div>";
		// // }
		// // }

		// newStr += "<table id='myTable' style='margin-left:8px;border-collapse:separate;border-spacing:2px 0;'>";
		// newStr += "<tr style='background-Color:#ff9f80'>";
		// newStr += "<th style='width:60px;' align='center'><div class='investLabel' style='width:50px;'><font color='black'>Selection</font></div></th>";
		// newStr += "<th style='width:80px;' align='center'><div class='investLabel_l' style='width:80px;'><font color='black'>Count</font></div></th>";
		// newStr += "<th style='width:300px;' align='center'><div class='investLabel' style='width:300px;'><font color='black'>Student Name &nbsp;&nbsp;</font></div></th>";
		// newStr += "<th style='width:250px;' align='center'><div class='investLabel' style='width:250px;'><font color='black'>Registration No &nbsp;&nbsp;</font></div></th>";
		// newStr += "<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>NIC Number &nbsp;&nbsp;</font></div></th>";
		// newStr += "<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Paid Amount &nbsp;&nbsp;</font></div></th>";
		// newStr += "<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Due Amount &nbsp;&nbsp;</font></div></th>";
		// newStr += "<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Payment Completed &nbsp;&nbsp;</font></div></th>";
		// newStr += "<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Confirmed by SAR &nbsp;&nbsp;</font></div></th>";

		// newStr += "</tr>";
		// for (i = 0; i < studentNoLength; i++) {
		// 	var temtot = temdue = totalCourseFee;
		// 	var tempay = 0;
		// 	if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

		// 		if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] && document.getElementById('achedamicYear').value == achedamicYearArr[i]) {

		// 			rcount++;
		// 			if (rcount % 2 == 0) {
		// 				newStr += "<tr style='background-Color:#ffece6;>";
		// 			}
		// 			else {
		// 				newStr += "<tr style='background-Color:#ffd9cc;>";
		// 			}

		// 			newStr += "<div class='info' id='Alist" + i + "'  name='testInfo" + i + "'>";
		// 			newStr += "<td style='width:60px;' align='center'><div  class='investView' style='text-align:center'  name='registered" + i + "' id='registered" + i + "'>";
		// 			newStr += "<input type='checkbox'  " + registeredChecked + "  id='markRegistered" + i + "' name='markRegistered" + i + "' onchange='AddRowColorsid(Alist" + i + ", this);selectedStudentList(" + i + ")'/>";
		// 			newStr += "</div></td>";
		// 			newStr += "<td style='width:80px;' align='center'><div style='width:80px;' class='investView' name='rc" + i + "' id='rc" + i + "'";
		// 			newStr += " onchange='dataRep[this.name]=this.value;'>" + rcount + "</div></td>";
		// 			newStr += "<td style='width:300px;' align='center'><div style='width:300px;' class='investView_l' name='studentNo" + i + "' id='studentNo" + i + "' onchange='dataRep[this.name]=this.value;'>";
		// 			newStr += studentInitialArr[i] + "</div></td>";
		// 			newStr += "<td style='width:250px;' align='center'><div style='width:250px;' class='investView' name='studentName" + i + "' id='studentName" + i + "'";
		// 			newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNoArr[i] + "</div></td>";
		// 			newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='studentNIC" + i + "' id='studentNIC" + i + "'";
		// 			newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNICArr[i] + "</div></td>";

		// 			if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Assistant Bursar') {
		// 				var checkBoxDivIdRegistered = 'markRegistered' + i;
		// 				if (document.getElementById(checkBoxDivIdRegistered)) {
		// 					if (document.getElementById(checkBoxDivIdRegistered).checked) {
		// 						registeredChecked = 'checked';
		// 					}
		// 				}

		// 			}

		// 			for (jj = 0; jj < tempStdNo.length; jj++) {
		// 				if (studentNoArr[i] == tempStdNo[jj]) {
		// 					temtot = totalCourseFee;
		// 					tempay = parseInt(tempPayAmount[jj], 10);
		// 					temdue = temtot - tempay;

		// 				}

		// 			}

		// 			newStr += "<td style='width:200px;' align='center'><div style='width:200px;color=red' class='investView' name='paymentStatus" + i + "' id='paymentStatus" + i + "'";
		// 			newStr += " onchange='dataRep[this.name]=this.value;'><font color=black>" + tempay + "</font></div></td>";

		// 			newStr += "<td style='width:200px;' align='center'><div style='width:200px;color=red' class='investView' name='balancepaymentStatus" + i + "' id='balancepaymentStatus" + i + "'";
		// 			newStr += " onchange='dataRep[this.name]=this.value;'><font color=red>" + temdue + "</font></div></td>";

		// 			newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentCompletedDiv" + i + "' id='paymentCompletedDiv" + i + "'";
		// 			newStr += " onchange='dataRep[this.name]=this.value;'><font color=red>" + paymentCompletedArr[i] + "</font></div></td>";

		// 			// if(paymentCompletedArr[i]=="YES"){
		// 			// newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentCompletedDiv"+i+"' id='paymentCompletedDiv"+i+"'";
		// 			// newStr += " onchange='dataRep[this.name]=this.value;'><font color=red>YES</font></div></td>";
		// 			// }
		// 			// else{
		// 			// newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentCompletedDiv"+i+"' id='paymentCompletedDiv"+i+"'";
		// 			// newStr += " onchange='dataRep[this.name]=this.value;'>NO</div></td>";
		// 			// }


		// 			//var confirmed=0;
		// 			if (sarConfirmationArr[i] == "Course fee Completed Confirmed by SAR") {
		// 				newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentConfirmed" + i + "' id='paymentConfirmed" + i + "'";
		// 				newStr += " onchange='dataRep[this.name]=this.value;'>YES</div></td>";
		// 			}
		// 			else {
		// 				newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='paymentConfirmed" + i + "' id='paymentConfirmed" + i + "'";
		// 				newStr += " onchange='dataRep[this.name]=this.value;'>NO</div></td>";
		// 			}
		// 			newStr += "</tr>";
		// 		}
		// 	}
		// }

		// newStr += "</table></br>";


		// if (rcount >= 1) {

		// 	if (dataRep['roleName'] == 'SAR' || dataRep['roleName'] == 'Assistant Bursar') {

		// 		newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payments" onclick=formAddStudentsPayments(' + "'addStudentsPayments'" + ');showMenu(' + "'main'" + ');>';

		// 		newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=calPayAmount();getStudentPaymentlist();>';

		// 		// newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getBalance" value="Get Balance" onclick=calPayAmount();getPaymentDegreeWise();>';

		// 		newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentComList" value="Download Payment Complete List" onclick=calPayAmount();downloadStudentPaymentCompletelist();>';


		// 		newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payment Complete" onclick=formUpdatePaymentList(' + "'updatePaymentList'" + ');>'; //

		// 		//newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB"  value="SAR- Confirmation" onclick=formUpdatePaymentConfirmList('+"'updatePaymentConfirmList'"+');>';


		// 		newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

		// 	}




		// 	if (dataRep['roleName'] == 'Dean') {
		// 		newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Get Payment List" onclick=calPayAmount();getStudentPaymentlist();>';
		// 		newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getBalance" value="Get Balance" onclick=calPayAmount();getPaymentDegreeWise();>';
		// 		//newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Reset" onclick ="resetInstallment();">';
		// 		//newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value = "Return" onclick = ResetAll();showMenu('+"'formDeanMenu'"+');>';
		// 		newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

		// 	}

		// 	if (dataRep['roleName'] == 'Administrator') {
		// 		newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=calPayAmount();getStudentPaymentlist();>';

		// 		newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentComList" value="Download Payment Complete List" onclick=calPayAmount();downloadStudentPaymentCompletelist();>';

		// 		newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getBalance" value="Get Balance" onclick=calPayAmount();getPaymentDegreeWise();>';
		// 		newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payments" onclick=formAddStudentsPayments(' + "'addStudentsPayments'" + ');showMenu(' + "'main'" + ');>';
		// 		newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payment Complete" onclick=formUpdatePaymentList(' + "'updatePaymentList'" + ');>'; //


		// 		newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB"  value="SAR- Confirmation" onclick=formUpdatePaymentConfirmList(' + "'updatePaymentConfirmList'" + ');>';


		// 		newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

		// 	}


		// }

		// document.getElementById('list').innerHTML += newStr;
	}
}

//Add marked student list to a temporary array - avoid slow down of saving process
function selectedStudentList(i) {

	if (document.getElementById('markRegistered' + i).checked) {
		selectedlist[p] = i;
		p++;

	}
	else {
		var ii;
		for (ii = 0; ii < selectedlist.length; ii++) {
			if (selectedlist[ii] == i)
				selectedlist[ii] = null;
		}
	}
}


function buttondisable() {
	document.getElementById("payCategory").disabled = false;

}

//function of Mark All button	
function MarkAll() {
	p = 0;
	for (i = 0; i < studentNoLength; i++) {
		var checkBoxDivIdRegistered = 'markRegistered' + i;
		if (document.getElementById('markRegistered' + i)) {

			document.getElementById('markRegistered' + i).checked = true;
			selectedStudentList(i);
			document.getElementById("mark-all").disabled = true;
			document.getElementById("mark-non").disabled = false;

			var nam = "Alist";
			nam += i;
			if (countId == 1) {
				countId = 0;
				document.getElementById(nam).style.backgroundColor = '#d0d0fb';

			}
			else {
				countId++;
				document.getElementById(nam).style.backgroundColor = '#e7e7fd';
			}


		}
	}
}

//function of Unmark All button
function UnmarkAll() {
	p = 0;
	selectedlist = new Array();
	for (i = 0; i < studentNoLength; i++) {
		var checkBoxDivIdRegistered = 'markRegistered' + i;
		if (document.getElementById(checkBoxDivIdRegistered)) {

			document.getElementById(checkBoxDivIdRegistered).checked = false;
			document.getElementById("mark-all").disabled = false;
			document.getElementById("mark-non").disabled = true;

			var nam = "Alist";
			nam += i;
			if (countId == 1) {
				countId = 0;
				//document.getElementById(nam).style.backgroundColor =  '#FDFDFD' ;

			}
			else {
				countId++;
				//document.getElementById(nam).style.backgroundColor = '#FDFDFD';
			}
		}

	}

}


// function markonlypaymentcompleteList(){


// if(temdue=='0'){
// alert("ok1");
// p=0;
// for( i=0; i<studentNoLength; i++)
// var checkBoxDivIdRegistered = 'markRegistered'+i;

// {
// if(document.getElementById(checkBoxDivIdRegistered))
// {
// alert("ok2");
// document.getElementById('markRegistered'+i).checked = true;
// selectedStudentList(i);
// }

// }
// }
// }	



//Get printable document of list of students and their payment details
// function getStudentPaymentlist(){

// var count2=1;
// var Rcount=1;
// if(document.getElementById('selectedDegreeName').value == "Please scroll down to see the records"){		
// alert("Please Select Programm and the Year.");
// }
// else{
// var cfee=0;
// var libraryfee=0;
// var paidfee=0;
// var duefee=0;
// var total=0;
// var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
// newStr +="<div id='topics1' class='info'></div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+document.getElementById('selectedDegreeName').value+" - "+document.getElementById('achedamicYear').value+"</div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Student Payment Details</div>";

// newStr +="<br>";
// newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
// newStr +="<tr style='border: 1px solid black;'>";
// newStr +="<th style='border: 1px solid black;'></th>";
// newStr +="<th style='border: 1px solid black;'>Student No</th>";
// newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
// newStr +="<th style='border: 1px solid black;'>Student Name</th>";					
// newStr +="<th style='border: 1px solid black;'>Total Course Fee(Rs)</th>";
// newStr +="<th style='border: 1px solid black;'>Course Fee Paid(Rs)</th>";
// newStr +="<th style='border: 1px solid black;'>Library Fee Paid(Rs)</th>";
// newStr +="<th style='border: 1px solid black;'>Due Amount(Rs)</th>";
// newStr +="</tr>";  

// for( i=0; i<tCodeLength; i++){
// cfee=parseInt(courseFeeArr2[i],10)+parseInt(libraryFeeArr2[i],10);
// libraryfee=0;				
// total=cfee+libraryfee;
// paidfee=0;
// duefee=cfee;
// if(studentNoArr2.indexOf(studentNoArr2[i]) == studentNoArr2.lastIndexOf(studentNoArr2[i]) || (studentNoArr2.indexOf(studentNoArr2[i]) != studentNoArr2.lastIndexOf(studentNoArr2[i]) && studentNoArr2.indexOf(studentNoArr2[i])==i)){


// if(document.getElementById('achedamicYear').value==achedamicYearArr2[i] && document.getElementById('selectedDegreeName').value==degreeTitleArr2[i]){

// for(jj=0;jj<tempStdNo.length;jj++){
// if(studentNoArr2[i]==tempStdNo[jj]){
// libraryfee=parseInt(libraryFeeArr2[i],10);
// paidfee=parseInt(tempPayAmount[jj],10)-libraryfee;
// duefee=cfee-parseInt(tempPayAmount[jj],10);			
// }

// }

// newStr +="<tr style='border: 1px solid black;'>";
// newStr+='<td  style="border:1px solid black;width:50px;heigth:30%;font-size:12px;font-family:tahoma;">'+count2+'</td>';
// newStr+='<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr2[i]+'</td>';
// newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr2[i]+'</td>';
// newStr+='<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitialArr2[i]+'</td>';

// newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+total.toFixed(2)+'</td>';

// newStr+='<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+paidfee.toFixed(2)+'</td>';

// newStr+='<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+libraryfee.toFixed(2)+'</td>';

// newStr+='<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">'+duefee.toFixed(2)+'</td>';

// newStr +="</tr>";
// newStr += "</div><dev><br>"; 
// inum++;	
// rwcnt++;	
// count2++;

// }
// }				
// }

// newStr +="</table>";



// var exportFilename = "Student Payment Details.xls";
// var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});

// if (navigator.msSaveBlob) {
// navigator.msSaveBlob(csvData, exportFilename);
// } else {
// //In FF link must be added to DOM to be clicked
// var link = document.createElement('a');
// link.href = window.URL.createObjectURL(csvData);
// link.setAttribute('download', exportFilename);
// document.body.appendChild(link);    
// link.click();
// document.body.removeChild(link);    
// }

// }
// }	

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function getStudentPaymentlist() {

	var count = 1;
	var Rcount = 1;
	var markboxCount = 0;

	for (i = 0; i < tCodeLength; i++) {
		if (studentNoArr1.indexOf(studentNoArr1[i]) == studentNoArr1.lastIndexOf(studentNoArr1[i]) || (studentNoArr1.indexOf(studentNoArr1[i]) != studentNoArr1.lastIndexOf(studentNoArr1[i]) && studentNoArr1.indexOf(studentNoArr1[i]) == i)) {
			if (document.getElementById('achedamicYear').value == achedamicYearArr1[i] && document.getElementById('selectedDegreeName').value == degreeTitleArr1[i]) {
				if (document.getElementById(checkBoxDivIdRegistered)) {
					if (document.getElementById(checkBoxDivIdRegistered).checked == true) {
						markboxCount++;
					}
				}
			}

		}
	}

	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		var cfee = 0;
		var libfee = 0;
		var pfee = 0;
		var dfee = 0;
		var tot = 0;
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + " - " + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Student Payment Details</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		newStr += "<th style='border: 1px solid black;'>Student Name</th>";
		newStr += "<th style='border: 1px solid black;'>Total Course Fee(Rs)</th>";
		newStr += "<th style='border: 1px solid black;'>Course Fee Paid(Rs)</th>";
		newStr += "<th style='border: 1px solid black;'>Library Fee Paid(Rs)</th>";
		newStr += "<th style='border: 1px solid black;'>Due Amount(Rs)</th>";
		newStr += "</tr>";

		for (i = 0; i < tCodeLength; i++) {
			cfee = parseInt(courseFeeArr[i], 10) + parseInt(libraryFeeArr[i], 10);
			libfee = 0;
			tot = cfee + libfee;
			pfee = 0;
			dfee = cfee;
			if (studentNoArr1.indexOf(studentNoArr1[i]) == studentNoArr1.lastIndexOf(studentNoArr1[i]) || (studentNoArr1.indexOf(studentNoArr1[i]) != studentNoArr1.lastIndexOf(studentNoArr1[i]) && studentNoArr1.indexOf(studentNoArr1[i]) == i)) {


				if (document.getElementById('achedamicYear').value == achedamicYearArr1[i] && document.getElementById('selectedDegreeName').value == degreeTitleArr1[i]) {
					if (document.getElementById(checkBoxDivIdRegistered)) {
						if (document.getElementById(checkBoxDivIdRegistered).checked == true) {
							for (jj = 0; jj < tempStdNo.length; jj++) {
								if (studentNoArr1[i] == tempStdNo[jj]) {
									libfee = parseInt(libraryFeeArr[i], 10);
									pfee = parseInt(tempPayAmount[jj], 10) - libfee;
									dfee = cfee - parseInt(tempPayAmount[jj], 10);
								}

							}

							newStr += "<tr style='border: 1px solid black;'>";
							newStr += '<td  style="border:1px solid black;width:50px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';
							newStr += '<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr1[i] + '</td>';
							newStr += '<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr1[i] + '</td>';
							newStr += '<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr1[i] + '</td>';

							newStr += '<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + tot.toFixed(2) + '</td>';

							newStr += '<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + pfee.toFixed(2) + '</td>';

							newStr += '<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + libfee.toFixed(2) + '</td>';

							newStr += '<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + dfee.toFixed(2) + '</td>';

							newStr += "</tr>";
							newStr += "</div><dev><br>";
							inum++;
							rwcnt++;
							count++;
						}
					}
				}
			}
		}

		newStr += "</table>";



		var exportFilename = "Student Payment Details.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

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
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------


//Get printable document of payment details for the degree program
function getPaymentDegreeWise() {
	var jj = 0;
	var count = 1;
	var Rcount = 1;
	var pvalue = 0;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {

		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + " - " + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Degree Payment Details</div>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Degree Title</th>";
		newStr += "<th style='border: 1px solid black;'>Degree Code</th>";
		newStr += "<th style='border: 1px solid black;'>Paid Amount(Rs)</th>";
		newStr += "</tr>";
		for (jj = 0; jj < tempPayAmount.length; jj++) {
			if (tempPayAmount[jj] != undefined) {
				pvalue += parseInt(tempPayAmount[jj], 10);
			}
		}

		newStr += "<tr style='border: 1px solid black;'>";

		newStr += '<td  style="border:1px solid black;width:50px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';
		newStr += '<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">' + document.getElementById('selectedDegreeName').value + '</td>';

		newStr += '<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + degCode + '</td>';

		newStr += '<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + pvalue + '</td>';

		newStr += "</tr>";
		newStr += "</div><dev><br>";
		inum++;
		rwcnt++;
		count++;

		newStr += "</table>";


		var exportFilename = "Balance Payment Details.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

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
}



//save installment to table
function calculateInstallment() {
	if (document.getElementById('installmentChecked1').checked == true) {
		installment = "1";
	}
	if (document.getElementById('installmentChecked2').checked == true) {
		installment += "2";
	}
	if (document.getElementById('installmentChecked3').checked == true) {
		installment += "3";
	}
	if (document.getElementById('installmentChecked4').checked == true) {
		installment += "4";
	}
}

//save student payments
function formAddStudentsPayments(frm) {

	var doc, dataStr, timestamp;
	var r = 0;

	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records" || document.getElementById('payCategory').value == "Please scroll down to see the records") {
		alert("Please Select Relevant Program and Category");
	}
	else {
		if (document.getElementById('Amount').value == "") {
			alert("Please Enter a Payment Amount");
		}

		else {

			if (frm.substring(0, 3) == "add") {
				dataStr = "action=add";
			} else if (frm.substring(0, 6) == "update") {
				dataStr = "action=update";
			} else if (frm.substring(0, 6) == "delete") {
				dataStr = "action=delete";
			} else if (frm.substring(0, 6) == "search") {
				dataStr = "action=get";
			}


			if (frm == 'addStudentsPayments') {

				if (document.getElementById('payCategory').value == "Total Course fee") {
					calculateInstallment();
				}

				doc = document.maintainBulkPayment;

				dataStr += "&interface=" + frm;



				for (var i = 0; i < selectedlist.length; i++) {
					r = selectedlist[i];
					if (document.getElementById('selectedDegreeName').value == degreeTitleArr[r] & document.getElementById('achedamicYear').value == achedamicYearArr[r]) {

						if (r != null) {
							timestamp = new Date().getUTCMilliseconds();
							timestamp++;

							dataStr += "&tCode=" + "T" + studentNoArr[r] + timestamp;

							dataStr += "&studentNo=" + studentNoArr[r];

							dataStr += "&feeCat=" + document.getElementById('payCategory').value;

							dataStr += "&amount=" + document.getElementById('Amount').value;

							dataStr += "&bankdate=" + doc.payYYYY.value + "/" + doc.payMM.value + "/" + doc.payDD.value;

							tempid = studentNoArr[r];

							exid = tempid.split("/", 2);

							dataStr += "&degreeCode=" + degreeCodeArr[r];

							/*installments are recorded in coursefeepayments table as a code
							eg: if 3 installments are paid once, installment collum value is 123*/

							dataStr += "&installment=" + installment;
							PaymentData[i] = dataStr;

						}
					}
				}

				for (var j = 0; j < selectedlist.length; j++) {

					if (PaymentData[j] != "") {

						isrHandle.getDataFromDB(eval("clientController"), "serverController.php", PaymentData[j]);
					}
				}
			}
		}

	}
}


//------------------------------------------------------UPDATE SELECTED FUNCTION START - Staff---------------------------	
function formUpdatePaymentList(frm) {

	var doc, dataStr;
	var k = 0;

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}
	if (confirm("Confirm Save!") == true) {
		if (frm == 'updatePaymentList') {

			doc = document.maintainBulkPayment;
			dataStr += "&interface=" + frm;
			var newStr = "";

			for (var i = 0; i < studentNoLength; i++) {
				//k=selectedlist[i];
				if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					//if(temdue == '0'){
					if (document.getElementById('markRegistered' + i)) {
						if (document.getElementById('markRegistered' + i).checked == true) {

							newStr = "&degreeCode=" + degreeCodeArr[i] + "&studentNIC=" + studentNICArr[i] + "&studentNo=" + studentNoArr[i];


							newStr += "&paymentCompleted=" + "YES";


							paymentCompleteData[i] = dataStr + newStr;
							//alert(paymentCompleteData[i]);

						}
					}

					//}

				}

			}

			for (var j = 0; j < studentNoLength; j++) {
				//alert("ok");
				if (paymentCompleteData[j] != "") {
					//alert("ok2");				
					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", paymentCompleteData[j]);
				}
			}


		}
	}
	else {
		//x = "You pressed Cancel!";
	}
	return 0;

}
//------------------------------------------------------UPDATE SELECTED FUNCTION END - Staff ---------------------------



//------------------------------------------------------UPDATE SELECTED FUNCTION START - SAR---------------------------	
function formUpdatePaymentConfirmList(frm) {

	var doc, dataStr;

	if (frm.substring(0, 3) == "add") {
		dataStr = "action=add";
	} else if (frm.substring(0, 6) == "update") {
		dataStr = "action=update";
	} else if (frm.substring(0, 6) == "delete") {
		dataStr = "action=delete";
	} else if (frm.substring(0, 6) == "search") {
		dataStr = "action=get";
	}
	if (confirm("Confirm Save!") == true) {
		if (frm == 'updatePaymentConfirmList') {

			doc = document.maintainBulkPayment;
			dataStr += "&interface=" + frm;
			var newStr = "";

			for (var i = 0; i < studentNoArr.length; i++) {
				//r=selectedlist[i];
				if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] & document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					if (document.getElementById('markRegistered' + i)) {
						if (document.getElementById('markRegistered' + i).checked == true) {

							newStr = "&degreeCode=" + degreeCodeArr[i] + "&studentNIC=" + studentNICArr[i] + "&studentNo=" + studentNoArr[i];


							newStr += "&sarConfirmation=" + "Course fee Completed Confirmed by SAR";


							paymentConfirmData[i] = dataStr + newStr;


						}

					}

				}

			}

			for (var j = 0; j < studentNoArr.length; j++) {

				if (paymentConfirmData[j] != "") {

					isrHandle.getDataFromDB(eval("clientController"), "serverController.php", paymentConfirmData[j]);
				}
			}


		}
	}
	else {
		//x = "You pressed Cancel!";
	}
	return 0;

}
//------------------------------------------------------UPDATE SELECTED FUNCTION END - SAR ---------------------------




//Get printable document of list of students WHO COMPLETED PAYMENT
function downloadStudentPaymentCompletelist() {

	var count = 1;
	var Rcount = 1;
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {
		alert("Please Select Programm and the Year.");
	}
	else {
		var cfee = 0;
		var libfee = 0;
		var pfee = 0;
		var dfee = 0;
		var tot = 0;
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + document.getElementById('selectedDegreeName').value + " - " + document.getElementById('achedamicYear').value + "</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Student Payment Details</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr style='border: 1px solid black;'>";
		newStr += "<th style='border: 1px solid black;'></th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>NIC Number</th>";
		newStr += "<th style='border: 1px solid black;'>Student Name</th>";
		newStr += "<th style='border: 1px solid black;'>Total Course Fee(Rs)</th>";
		newStr += "<th style='border: 1px solid black;'>Course Fee Paid(Rs)</th>";
		newStr += "<th style='border: 1px solid black;'>Library Fee Paid(Rs)</th>";
		newStr += "<th style='border: 1px solid black;'>Due Amount(Rs)</th>";
		newStr += "</tr>";

		for (i = 0; i < tCodeLength; i++) {
			cfee = parseInt(courseFeeArr[i], 10) + parseInt(libraryFeeArr[i], 10);
			libfee = 0;
			tot = cfee + libfee;
			pfee = 0;
			dfee = cfee;

			if (studentNoArr1.indexOf(studentNoArr1[i]) == studentNoArr1.lastIndexOf(studentNoArr1[i]) || (studentNoArr1.indexOf(studentNoArr1[i]) != studentNoArr1.lastIndexOf(studentNoArr1[i]) && studentNoArr1.indexOf(studentNoArr1[i]) == i)) {


				if (document.getElementById('achedamicYear').value == achedamicYearArr1[i] && document.getElementById('selectedDegreeName').value == degreeTitleArr1[i]) {
					if (paymentCompletedArr1[i] == 'YES') {

						for (jj = 0; jj < tempStdNo.length; jj++) {
							if (studentNoArr1[i] == tempStdNo[jj]) {
								libfee = parseInt(libraryFeeArr[i], 10);
								pfee = parseInt(tempPayAmount[jj], 10) - libfee;
								dfee = cfee - parseInt(tempPayAmount[jj], 10);
							}

						}

						newStr += "<tr style='border: 1px solid black;'>";
						newStr += '<td  style="border:1px solid black;width:50px;heigth:30%;font-size:12px;font-family:tahoma;">' + count + '</td>';
						newStr += '<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNoArr1[i] + '</td>';
						newStr += '<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentNICArr1[i] + '</td>';
						newStr += '<td  style="border:1px solid black;width:200px;heigth:30%;font-size:12px;font-family:tahoma;">' + studentInitialArr1[i] + '</td>';

						newStr += '<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + tot.toFixed(2) + '</td>';

						newStr += '<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + pfee.toFixed(2) + '</td>';

						newStr += '<td  style="border:1px solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + libfee.toFixed(2) + '</td>';

						newStr += '<td  style="border:1px  solid black;width:100px;heigth:30%;font-size:12px;font-family:tahoma;">' + dfee.toFixed(2) + '</td>';

						newStr += "</tr>";
						newStr += "</div><dev><br>";
						inum++;
						rwcnt++;
						count++;

					}
				}
			}
		}

		newStr += "</table>";



		var exportFilename = "Student Payment Complete List.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

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
}


function AddRowColorsid(x, _this) {
	//	 if (y.checked)
	//    x.style.backgroundColor = '#0000FF';
	// else
	//    x.style.backgroundColor = '#FF0000';
	if (countId == 1) {
		countId = 0;
		x.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';

	}
	else {
		countId++;
		x.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';

	}

	//alert(x);
}
