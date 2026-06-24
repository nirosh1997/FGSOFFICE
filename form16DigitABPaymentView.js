
var PaymentData = new Array();
dataRep["sessionID"] = dataRep["docName"] = dataRep["programYear"] = dataRep["setamount"] = dataRep['roleName'] = dataRep['userName'] = dataRep["achedamicYear"] = "";
var inum = 0;
var rcount = 1;
var tempid, exid;
var installmentChecked = false;
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

function form16DigitABPaymentView(dsp) {


	str = "";

	title = "View 16 Digit Student Payments";

	if (dsp == "form16DigitABPaymentView") {


		str = "<div id='form16DigitABPaymentView'>";
		var role;
		var role1;
		var role2;
		var u = document.cookie;
		var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		for (i = 0; i < userIdLength; i++) {
			if (use == userIdArr[i]) {
				TempUser = use;
				dataRep['roleName'] = roleNameArr[i];
				dataRep['departmentCode'] = departmentCodeArr[i];
				dataRep['userName'] = userNameArr[i];
				dataRep['programmeCode'] = programmeCodeArr[i];
				//alert(dataRep['programmeCode']);
			}
		}
		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName']=='Technical Coordinator') {
			//alert("ok");
			var dcode = dataRep['departmentCode']
			role = "cordinator";


			var pcode = dataRep['programmeCode']
			role = "cordinator";

		}
		else if (dataRep['roleName'] == 'Head of the Department') {
			var dcode1 = dataRep['departmentCode']
			role1 = "head";

			var pcode1 = dataRep['programmeCode']
			role1 = "head";
		}
		else {

			role2 = "other";
		}

		str += "<div style='float:left;width:100%;height:50px;'>";
		str += "<div style='float:right;padding:15px;'>";
		str += "<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
		str += "<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>" + '&nbsp;' + dataRep['userName'] + '&nbsp;' + '|' + "</div>";
		str += "<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
		str += "</div></div><br/>";

		str += "<table><tr><td>";
		str += '<h2 >' + title + '</h2><hr>';

		str += '<form name="maintainform16DigitABPaymentView"><br>';
		str += "<div>";


		//alert("yes");studentNoLength
		if (role == "cordinator") {
			//alert("yes");
			programName = "<option>Please scroll down to see the records</option>";
			for (i = 0; i < studentNoLength; i++) {
				if (degreeTitleArr[i] != null) {
					if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i]) == i)) {

						if (degreeCodeArr[i] == dataRep['departmentCode'] || degreeCodeArr[i] == dataRep['programmeCode']) {//|| departmentCodeappArr[j]== 

							programName += "<option>" + degreeTitleArr[i] + "</option>";

						}
					}

				}
			}
			for (j = 0; j < degreeCodeLength; j++) {
				if (degreeCodappeArr[j] != null) {
					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
						if (departmentCodeappArr[j] == dataRep['departmentCode']) {
							programName1 += "<option>" + degreeTitle1Arr[j] + "</option>";
						}
					}
				}
			}
		}

		else if (role1 == "head") {
			programName = "<option>Please scroll down to see the records</option>";
			for (i = 0; i < studentNoLength; i++) {
				if (degreeTitleArr[i] != null) {
					if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i]) == i)) {

						if (degreeCodeArr[i] == dataRep['departmentCode'] || degreeCodeArr[i] == dataRep['programmeCode']) {//|| departmentCodeappArr[j]== 

							programName += "<option>" + degreeTitleArr[i] + "</option>";

						}
					}

				}
			}
			for (j = 0; j < degreeCodeLength; j++) {
				if (degreeCodappeArr[j] != null) {
					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
						if (departmentCodeappArr[j] == dataRep['departmentCode']) {
							programName1 += "<option>" + degreeTitle1Arr[j] + "</option>";
						}
					}
				}
			}
		}

		if (role2 == "other") {
			if (dataRep['userName'] == "ssdean" || dataRep['userName'] == "ssar" || dataRep['userName'] == "Asanka") {
				//alert(dataRep['userName']);
				programName = "<option>Please scroll down to see the records</option>";

				for (i = 0; i < studentNoLength; i++) {
					if (facultyCodeArr[i] == "FAC03" & degreeTitleArr[i] != null) {
						if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i]) == i)) {
							programName += "<option>" + degreeTitleArr[i] + "</option>";

						}
					}
				}
			}
			else {
				programName = "<option>Please scroll down to see the records</option>";
				for (i = 0; i < studentNoLength; i++) {
					if (degreeTitleArr[i] != null) {
						if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i]) == i)) {
							programName += "<option>" + degreeTitleArr[i] + "</option>";

						}
					}
				}
			}
		}

		if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Head of the Department' || dataRep['roleName']=='Technical Coordinator') {
			str += "<div class='identifiers'>Select Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += programName;
			str += programName1;
			str += "</select>";
		}
		else {
			str += "<div class='identifiers'>Select Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += programName;
			str += "</select>";
		}


		dataRep['achedamicYear'] = "";
		str += "<div class='identifiers'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
		str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
		str += generateNumberOptions(2021, 2030, 4, dataRep['achedamicYear']);
		str += "</select>";


		//str += '<input type="button" id="View-List" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=calTotalFee();PayCalAmount();ViewStudentsList();>';
		str += '<input type="button" id="View-List" style="margin-top:1px;float:left" class="btnB" value="View List" onclick=calTotalFee();PayCalAmount();ViewPaidStudentsList();>';

		str += '<input type="button" id="mark-all" style="margin-top:1px;float:left" class="btnB" value="Mark All" onclick=MarkAll();>';
		str += '<input type="button" id="mark-non" style="margin-top:1px;float:left" class="btnB" value="Unmark All" onclick=UnmarkAll();>';


		str += "<div>_____________________________________________________________________________________________________________________________________________</div>";

		str += "<div style='clear:both'>&nbsp;</div>";

		str += "<div  id='ViewPaidlist' >";

		str += "</div>";
		str += '</td></table></div>';
		str += '</form>';
	}
	return str;

}



//view list of 16 digit paid students and their payment status	
function ViewPaidStudentsList() {

	rcount = 0;


	document.getElementById('ViewPaidlist').innerHTML = document.getElementById('ViewPaidlist').innerHTML.replace = "";
	if (document.getElementById('selectedDegreeName').value == "Please scroll down to see the records") {

		alert("Please Select a value from the select Box(s)");

	}
	else {
		var dueAmount = 0;
		var r;
		var degreeName = document.getElementById('selectedDegreeName').value;
		var newStr = "&nbsp;<h3>&nbsp;&nbsp;<b><u>" + degreeName + " - Payment Details</u></b></h3>";


		if (IncomeCategoryCodeLength != 0) {


			newStr += "<hr>";
			newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStr += '<tbody>';

			newStr += "<tr style='border: 1px solid black;'>";
			newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'><strong>Cost Component</strong></td>";
			newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'><strong>Amount (LKR)</strong></td>";
			newStr += '</tr>';

			for (i = 0; i < IncomeCategoryCodeLength; i++) {
				if (document.getElementById('selectedDegreeName').value == IncomedegreeTitleArr[i] && document.getElementById('achedamicYear').value == achedamicYearIncomeArr[i]) {
					if (IncomeCategoryTitleArr[i] != "" & IncomeCategoryTitleArr[i] == "Course fee - Total") {
						//var CourseFeetotal = IncomeCategoryTitleArr[i];
						newStr += "<tr style='border: 1px solid black;'>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>Course fee - Total</td>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + IncomeCategoryValueArr[i] + "</td>";
						newStr += '</tr>';
					}
					if (IncomeCategoryTitleArr[i] != "" & IncomeCategoryTitleArr[i] == "Course fee - 1st installment") {
						newStr += "<tr style='border: 1px solid black;'>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>Course fee - 1st installment</td>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + IncomeCategoryValueArr[i] + "</td>";
						newStr += '</tr>';
					}
					if (IncomeCategoryTitleArr[i] != "" & IncomeCategoryTitleArr[i] == "Course fee - 2nd installment") {
						newStr += "<tr style='border: 1px solid black;'>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>Course fee - 2nd installment</td>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + IncomeCategoryValueArr[i] + "</td>";
						newStr += '</tr>';
					}
					if (IncomeCategoryTitleArr[i] != "" & IncomeCategoryTitleArr[i] == "Course fee - 3rd installment") {
						newStr += "<tr style='border: 1px solid black;'>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>Course fee - 3rd installment</td>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + IncomeCategoryValueArr[i] + "</td>";
						newStr += '</tr>';
					}
					if (IncomeCategoryTitleArr[i] != "" & IncomeCategoryTitleArr[i] == "Course fee - 4th installment") {
						newStr += "<tr style='border: 1px solid black;'>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>Course fee - 4th installment</td>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + IncomeCategoryValueArr[i] + "</td>";
						newStr += '</tr>';
					}
					if (IncomeCategoryTitleArr[i] != "" & IncomeCategoryTitleArr[i] == "Course fee - 5th installment") {
						newStr += "<tr style='border: 1px solid black;'>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>Course fee - 5th installment</td>";
						newStr += "<td style='border: 1px solid black;width:200px;font-size:12px;text-align:center;'>" + IncomeCategoryValueArr[i] + "</td>";
						newStr += '</tr>';
					}
				}
			}

			newStr += '</tbody>';
			newStr += '</table>';
		}

		newStr += "<br>";
		newStr += "<hr>";

		newStr += "<table id='myTable' style='margin-left:8px;border-collapse:separate;border-spacing:2px 0;'>";
		newStr += "<tr style='background-Color:#ff9f80'>";
		newStr += "<th style='width:60px;' align='center'><div class='investLabel' style='width:50px;'><font color='black'>Selection</font></div></th>";
		newStr += "<th style='width:80px;' align='center'><div class='investLabel_l' style='width:80px;'><font color='black'>Count</font></div></th>";
		newStr += "<th style='width:300px;' align='center'><div class='investLabel' style='width:300px;'><font color='black'>Student Name &nbsp;&nbsp;</font></div></th>";
		newStr += "<th style='width:250px;' align='center'><div class='investLabel' style='width:250px;'><font color='black'>Student No &nbsp;&nbsp;</font></div></th>";
		newStr += "<th style='width:200px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>NIC Number &nbsp;&nbsp;</font></div></th>";
		newStr += "<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Paid Amount &nbsp;&nbsp;</font></div></th>";
		newStr += "<th style='width:60px;' align='center'><div class='investLabel' style='width:200px;'><font color='black'>Due Amount &nbsp;&nbsp;</font></div></th>";


		newStr += "</tr>";

		for (i = 0; i < studentNoLength; i++) {
			//alert("ok1");
			var temtot = temdue = totalCourseFee;
			var tempay = 0;
			//if(Pay_studentNoArr.indexOf(Pay_studentNoArr[i]) == Pay_studentNoArr.lastIndexOf(Pay_studentNoArr[i]) || (Pay_studentNoArr.indexOf(Pay_studentNoArr[i]) != Pay_studentNoArr.lastIndexOf(Pay_studentNoArr[i]) && Pay_studentNoArr.indexOf(Pay_studentNoArr[i])==i)){
			if (studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i]) == i)) {

				if (document.getElementById('selectedDegreeName').value == degreeTitleArr[i] && document.getElementById('achedamicYear').value == achedamicYearArr[i]) {
					//if (IncomeSourceCodeArr[i] == Pay_sourceCodeArr[i]){



					rcount++;
					if (rcount % 2 == 0) {
						newStr += "<tr style='background-Color:#ffece6;>";
					}
					else {
						newStr += "<tr style='background-Color:#ffd9cc;>";
					}

					newStr += "<div class='info' id='Alist16" + i + "'  name='testInfo" + i + "'>";

					newStr += "<td style='width:60px;' align='center'><div  class='investView' style='text-align:center'  name='registered" + i + "' id='registered" + i + "'>";
					newStr += "<input type='checkbox'  " + registeredChecked + "  id='markRegistered16" + i + "' name='markRegistered16" + i + "' onchange='AddRowColorsid(Alist16" + i + ", this);selectedStudentList(" + i + ")'/>";
					newStr += "</div></td>";

					newStr += "<td style='width:80px;' align='center'><div style='width:80px;' class='investView' name='rc" + i + "' id='rc" + i + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + rcount + "</div></td>";

					newStr += "<td style='width:300px;' align='center'><div style='width:300px;' class='investView_l' name='studentNo" + i + "' id='studentNo" + i + "' onchange='dataRep[this.name]=this.value;'>";
					newStr += studentInitialArr[i] + "</div></td>";

					newStr += "<td style='width:250px;' align='center'><div style='width:250px;' class='investView' name='studentName" + i + "' id='studentName" + i + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNoArr[i] + "</div></td>";

					newStr += "<td style='width:200px;' align='center'><div style='width:200px;' class='investView' name='studentNIC" + i + "' id='studentNIC" + i + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNICArr[i] + "</div></td>";

					if (dataRep['roleName'] == 'Subject Clerk' || dataRep['roleName'] == 'FGS Deputy Registrar') {
						var checkBoxDivIdRegistered16 = 'markRegistered16' + i;
						if (document.getElementById(checkBoxDivIdRegistered16)) {
							if (document.getElementById(checkBoxDivIdRegistered16).checked) {
								registeredChecked = 'checked';
							}
						}

					}

					for (jj = 0; jj < tempStdNo.length; jj++) {
						if (studentNoArr[i] == tempStdNo[jj]) {
							temtot = totalCourseFee;
							//tempay=parseInt(tempPayAmount[jj],10);
							tempay = Number(tempPayAmount[jj]);
							temdue = temtot - tempay;

						}

					}

					newStr += "<td style='width:200px;' align='center'><div style='width:200px;color=red' class='investView' name='paymentStatus" + i + "' id='paymentStatus" + i + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'><font color=black>" + tempay.toLocaleString() + "</font></div></td>";

					newStr += "<td style='width:200px;' align='center'><div style='width:200px;color=red' class='investView' name='balancepaymentStatus" + i + "' id='balancepaymentStatus" + i + "'";
					newStr += " onchange='dataRep[this.name]=this.value;'><font color=red>" + temdue.toLocaleString() + "</font></div></td>";


					newStr += "</tr>";
					//}
				}

			}
		}
		//rcount=0;	
		newStr += "</table></br>";


		//newStr += '&nbsp;<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentList" value="Download Balance Payment List" onclick=PayCalAmount();getStudentPaymentlist();>';

		//newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" id="getPaymentComList" value="Download Payment Complete List" onclick=PayCalAmount();downloadStudentPaymentCompletelist();>';

		//newStr += '<input type="button" style="background-Color:#ff6633;padding-right:20px;height:30px;" class="btnB" value="Save Payment Complete" onclick=formUpdatePaymentList('+"'updatePaymentList'"+');>'; //
		


		newStr += '<input id="downloadPaidStudent" type = "button" class ="btnB" value="Download 16 Digit Paid List" style="background-Color:#940100;padding-right:20px;height:30px;color:#fff" onclick=download16DigitStudentPayment();>';


		newStr += '<input type = "button" class ="btnB" value="logout" style="background-Color:#ff6633;padding-right:20px;height:30px;" onclick=logOut();>';

		// if (rcount == 0) {
		// 	document.getElementById("downloadPaidStudent").disabled = true;
		// } else{
		// 	document.getElementById("downloadPaidStudent").disabled = false;
		// }



		document.getElementById('ViewPaidlist').innerHTML += newStr;
	}
}



//calculate paid amount (to view payment status)
function PayCalAmount() {
	tempCount = 0;
	var j = add = 0;
	degCode = acYear = "";

	for (i = 0; i < IncomeCategoryCodeLength; i++) {

		if (document.getElementById('achedamicYear').value == achedamicYearIncomeArr[i] && document.getElementById('selectedDegreeName').value == IncomedegreeTitleArr[i]) {
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
function calTotalFee() {

	// tempInstNo=new Array();
	// tempAmount=new Array();
	// tempDeadline=new Array();
	// for( i=0; i<installmentNoLength; i++){

	// if(document.getElementById('achedamicYear').value==academicYrForInstArr[i] && document.getElementById('selectedDegreeName').value==degreeTitleForInstArr[i]){
	// tempInstNo[i]=instNoForInstArr[i];
	// tempAmount[i]=amountForInstArr[i];
	// tempDeadline[i]=deadlineForInstArr[i];
	// totalCourseFee=parseInt(courseFeeForInstArr[i],10)+parseInt(libraryFeeForInstArr[i],10);			
	// }
	// }



	for (i = 0; i < IncomeCategoryCodeLength; i++) {
		if (document.getElementById('selectedDegreeName').value == IncomedegreeTitleArr[i] && document.getElementById('achedamicYear').value == achedamicYearIncomeArr[i]) {
			if (IncomeCategoryTitleArr[i] != "" & IncomeCategoryTitleArr[i] == "Course fee - Total") {
				//	totalCourseFee=parseInt(IncomeCategoryTitleArr[i],10);
				totalCourseFee = IncomeCategoryValueArr[i];
				//alert(totalCourseFee);				

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
		['No', 'Student Name', 'Student No', 'NIC Number', 'Paid Amount','Due Amount']
	];
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



				for (jj = 0; jj < tempStdNo.length; jj++) {
					if (studentNoArr[i] == tempStdNo[jj]) {
						temtot = totalCourseFee;
						//tempay=parseInt(tempPayAmount[jj],10);
						tempay = Number(tempPayAmount[jj]);
						temdue = temtot - tempay;

					}

				}

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
		a.download = '16 Digit Student Payments List.csv';

		// Append the anchor to the document body
		document.body.appendChild(a);

		// Programmatically trigger a click event on the anchor to initiate the download
		a.click();

		// Clean up by revoking the Blob URL and removing the anchor element
		window.URL.revokeObjectURL(a.href);
		document.body.removeChild(a);
	}


}