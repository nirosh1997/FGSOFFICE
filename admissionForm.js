dataRep['examDateYYYY'] = dataRep['examDateMM'] = dataRep['examDateDD'] = "";
dataRep['examTimeHHFrom'] = dataRep['examTimeHHTo'] = dataRep['examTimeMMTo'] = dataRep['examTimeMMFrom'] = currentTime = "";
var repsemcount1 = repsemcount2 = repsemcount3 = repsemcount4 = repsemcount0 = 0;

currentdate = new Date();
var year = currentdate.getFullYear();
var month = (currentdate.getMonth() + 1);
var date = currentdate.getDate();
var hours = currentdate.getHours();
var min = currentdate.getMinutes();
var secnds = currentdate.getSeconds();
dataRep['examTimeHHFrom'] = hours;
dataRep['examTimeMMFrom'] = min;
dataRep['examTimeHHTo'] = hours;
dataRep['examTimeMMTo'] = min;


currentTime = hours + ":" + min + ":" + secnds;

dataRep['paperCode'] = "";

dataRep["substudentno"] = dataRep["substudentno"] = "";


dataRep["subjectTitle"] = dataRep["medium"] = "";

function refreshAdmission() {
	degreeCodeLength = studentNoLength = 0;
	studentNameList = studentNoList = "";
	dataRep["studentNo"] = dataRep["studentName"] = dataRep["subjectTitle"] = dataRep["medium"] = "";
	dataRep["studentInitial"] = dataRep['paperCode'] = "";
	dataRep["subjectCode"] = dataRep["studentPermanentAddress"] = dataRep["examdate"] = "";
	dataRep["starttime"] = dataRep["endtime"] = dataRep["hallno"] = dataRep["degreeTitle"] = currentTime = "";
	sendForm('data4getAdmissionStudent');
	sendForm('data4getAdmissionSubject');
}


function setValuesforAdmission() {

	for (var i = 0; i < studentNoArr.length; i++) {

		if (dataRep['studentNo'] == studentNoArr[i]) {

			dataRep['studentName'] = studentNameArr[i];
			dataRep["subjectCode"] = subjectCodeArr[i];
			dataRep["medium"] = mediumArr[i];
			dataRep["studentPermanentAddress"] = studentPermanentAddressArr[i];
			dataRep["examdate"] = examdateArr[i];
			dataRep["starttime"] = starttimeArr[i];
			dataRep["endtime"] = endtimeArr[i];
			dataRep["hallno"] = hallnoArr[i];
			dataRep["degreeTitle"] = degreeTitleArr[i];


		} else if (dataRep['studentName'] == studentNameArr[i]) {


			dataRep['studentNo'] = studentNoArr[i];
			dataRep["subjectCode"] = subjectCodeArr[i];
			dataRep["medium"] = mediumArr[i];
			dataRep["studentPermanentAddress"] = studentPermanentAddressArr[i];
			dataRep["examdate"] = examdateArr[i];
			dataRep["starttime"] = starttimeArr[i];
			dataRep["endtime"] = endtimeArr[i];
			dataRep["hallno"] = hallnoArr[i];
			dataRep["degreeTitle"] = degreeTitleArr[i];


		}
	}
}



function printAdmission() {
	//var gtDiv = document.getElementById('admissionFormTable').innerHTML;
	var addsDiv = "";
	var addsDiv2 = "";
	var addsDiv3 = "";
	var adfinaldsDiv = "";
	var chechCount = 0;






	for (var i = 0; i < studentNoLength; i++) {

		if (document.getElementById('checkSelectingAdd' + i)) {
			if (document.getElementById('checkSelectingAdd' + i).checked == true) {
				chechCount++;
				var moreThanOne = 0;

				//alert(dataRep['subsemester']);

				dataRep['studentName'] = studentNameArr[i];
				dataRep['studentPermanentAddress'] = studentPermanentAddressArr[i];
				dataRep['studentNo'] = studentNoArr[i];
				dataRep['faculty'] = facultyTitleArr[i];
				dataRep['degreeTitle1'] = degreeTitleArr[i];
				dataRep['subsemester'] = subjectSemesterArr[i];

				addsDiv = '<div style="width:100%;height:30px;">';

				addsDiv += "<div style='float:left;width:10%;'>";
				//addsDiv+="<img src='img/fgs.jpg' style='width:80px;height:80px;'/>";
				addsDiv += "<img src='img/logo.gif' style='width:80px;height:80px;'/>";
				addsDiv += "</div>";

				// addsDiv+="<div style='float:right;width:10%;'>";
				// addsDiv+="<img src='img/logo.gif' style='width:80px;height:80px;'/>";
				// addsDiv+="</div>";

				var d = new Date();
				var dYear = 0;
				var dYear = d.getFullYear();

				var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				var now = new Date();
				var thisMonth = months[now.getMonth()];

				var dd = new Date();
				var date = dd.getUTCDate();
				var mm = dd.getUTCMonth();
				//var mm = this.getMonth();
				var yr = dd.getUTCFullYear();
				var mn = ("0" + (mm + 1)).slice(-2);
				//var de=("0" + (dd.getUTCDate()).slice(-2);
				//var nn=mn+1;
				//var mn=('0'+mm+1).slice(-2);
				var currentdate = yr + "/" + mn + "/" + date;



				// var MyDate = new Date();
				// var MyDateString;

				// MyDate.setDate(MyDate.getDate() + 20);

				// MyDateString = MyDate.getFullYear() + '/'
				// + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/'
				// +('0' + MyDate.getDate()).slice(-2)
				// + ;


				var batchNo = document.getElementById('academicYear').value;

				addsDiv += "<div style='float:left;width:90%;'>";
				//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; "><b>'+facultyTitleArr[i]+'</b> - University of Kelaniya</h3></div>';
				addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; "><b>Faculty of Graduate Studies</b> - University of Kelaniya</h3></div>';
				addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">' + dataRep['degreeTitle1'] + ' - ' + batchNo + '</h3></div>';
				var selectedDegree = document.getElementById('degreeWiseAdmision').value;

				for (var n = 0; n < degreeCodeLength; n++) {
					if (admissionDegreeTitleArr.indexOf(admissionDegreeTitleArr[n]) == admissionDegreeTitleArr.lastIndexOf(admissionDegreeTitleArr[n]) || (admissionDegreeTitleArr.indexOf(admissionDegreeTitleArr[n]) != admissionDegreeTitleArr.lastIndexOf(admissionDegreeTitleArr[n]) && admissionDegreeTitleArr.indexOf(admissionDegreeTitleArr[n]) == n)) {


						if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "1") {
							addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">First Semester Examination</h3></div>';
							addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">February - ' + dYear + '</h3></div>'; //2023.01.19 Poornima

						}
						if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "2") {
							addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Second Semester Examination</h3></div>';
							//addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">XXX - '+dYear+'</h3></div>'; //Poornima
							addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">February - ' + dYear + '</h3></div>';
							// addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Second Semester Examination - October '+dYear+' </h3></div>';
						}

						if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "3") {
							addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Third Semester Examination</h3></div>';
							addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">February - ' + dYear + '</h3></div>';
						}
						if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "4") {
							addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Fourth Semester Examination</h3></div>';
							addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">February - ' + dYear + '</h3></div>';
						}
						if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "0") {
							addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">February - ' + dYear + '</h3></div>';
							// if(selectedDegree=="Master of Arts in Sinhala" && subjectSemesterArr[n]== "0"){
							// addsDiv+='<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">November - '+dYear+'</h3></div>';
						}

						//}


					}
				}
				addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">Admission Card</h3></div>';
				addsDiv += "</div>";



				addsDiv += '</div><hr style="clear:both;" />';
				addsDiv += "<div style='clear:both;width:100%;font-size:12px;font-family:tahoma;'><div style='float:left;font-weight:bold;margin-right:5px;'>Name in full</div><div style='float:left;'>&nbsp;:&nbsp;</div><div style='float:left;'>" + dataRep['studentName'] + "</div></div>";
				addsDiv += "<br/><div style='clear:both;width:100%;font-size:12px;font-family:tahoma;'>";
				addsDiv += "<div style='float:left;width:80%;'>";
				addsDiv += "<div style='float:left;margin-right:10px;font-weight:bold;'>Student Number</div><div style='float:left;'>&nbsp;&nbsp;:&nbsp;</div><div style='float:left;'>" + dataRep['studentNo'] + "</div>";
				addsDiv += "</div>";
				addsDiv += "<div style='float:left;width:20%;'>";
				//addsDiv+="<div style='float:left;'></div><div style='float:left;font-size:12px;width:60%;font-weight:bold;'>"+dataRep['subjectTitle']+"&nbsp;&nbsp;"+dataRep["medium"]+"&nbsp;"+"Medium"+"</div>";
				//addsDiv+="</div>";
				addsDiv += "</div>";

				addsDiv += "<br/><br/><div style='clear:both;font-family:tahoma;font-size:12px;font-weight:bold;width:100%;height:40px;border:1px solid #000000;'>";
				addsDiv += "<div style='float:left;width:24%;height:100%;border-right:1px solid #000000;text-align:center;'>Date/Time</div>";
				addsDiv += "<div style='float:left;width:25%;height:100%;border-right:1px solid #000000;text-align:center;'>Paper Code/Exam Hall</div>";
				addsDiv += "<div style='float:left;width:25%;height:100%;border-right:1px solid #000000;text-align:center;;'>Signature of the Applicant</div>";
				addsDiv += "<div style='float:left;width:25%;height:100%;text-align:center;'>Signature of the Supervisor</div>";
				addsDiv += "</div>";


				//if(dataRep["studentNo"] == studentNoArr[i] && dataRep["studentName"] == studentNameArr[i]){	

				//if (studentExamIdArr.indexOf(studentExamIdArr[i]) == studentExamIdArr.lastIndexOf(studentExamIdArr[i]) || (studentExamIdArr.indexOf(studentExamIdArr[i]) != studentExamIdArr.lastIndexOf(studentExamIdArr[i]) && studentExamIdArr.indexOf(studentExamIdArr[i])==i)){

				for (k = 0; k < substudentnoArr.length; k++) {

					if (document.getElementById('degreeWiseAdmision').value == degreeTitleArr[i] & substudentnoArr[k] == studentNoArr[i]) {
						//if(document.getElementById('academicYear').value==academicYearArr[i]){		
						//if (subjectCodeArr.indexOf(subjectCodeArr[k]) == subjectCodeArr.lastIndexOf(subjectCodeArr[k]) || (subjectCodeArr.indexOf(subjectCodeArr[k]) != subjectCodeArr.lastIndexOf(subjectCodeArr[k]) && subjectCodeArr.indexOf(subjectCodeArr[k])==k)){

						//if(document.getElementById('academicYear').value==academicYearArr[k]){
						moreThanOne++;
						if (moreThanOne == 1) {
							// if (k!=0)
							// {

							// }
							addsDiv2 = "<div style='clear:both;font-family:tahoma;font-size:12px;width:100%;height:50px;border:1px solid #000000;border-top:none'>";
						}
						else {
							addsDiv2 += "<div style='clear:both;font-family:tahoma;font-size:12px;width:100%;height:50px;border:1px solid #000000;border-top:none'>";
						}
						addsDiv2 += "<div style='float:left;width:24%;height:50px;border-right:1px solid #000000;text-align:center;'>";
						//addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>"+examdateArr[k]+" / "+starttimeArr[k]+"-"+endtimeArr[k]+"</div>";
						addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>" + examdateArr[k] + "</div>";

						addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>" + starttimeArr[k] + "-" + endtimeArr[k] + "</div>";
						addsDiv2 += '</div>';

						addsDiv2 += "<div style='float:left;width:25%;height:50px;border-right:1px solid #000000;text-align:center;'>";
						addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>" + subjectCodeArr[k] + "</div>";

						addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='width:170px;'>" + hallnoArr[k] + "</div>";

						addsDiv2 += '</div>';
						addsDiv2 += "<div style='float:left;width:25%;height:50px;border-right:1px solid #000000;text-align:center;;'></div>";
						addsDiv2 += "<div style='float:left;width:25%;height:50px;text-align:center;'></div>";
						addsDiv2 += "</div>";

						//}		


						addsDiv3 = "<br/>";


						addsDiv3 += "<div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;font-style: italic;text-decoration:underline;'>Certification of Signature and Name</div>";
						addsDiv3 += "<br/><div style='clear:both;width:100%;font-family:tahoma;font-size:12px;'>";
						addsDiv3 += "<div style='clear:both;width:100%;'>";
						addsDiv3 += "</div>";
						addsDiv3 += "<div style='clear:both;text-align:justify;line-height: 0.5cm;'>I certify that my name is correct in this admission and it will appear in my results sheet, certificates, and all other records accordingly. I understand that the name appears in this admission will appear in all records including certificates and requests received to correct the name after issuing results will not be accepted [If you have changed your name or if your name is not correct in our records/system please, inform immediately in writing with evidence to make corrections]. </div><br/>";
						addsDiv3 += "<div>Signature of the Student&nbsp;............................................ &nbsp;&nbsp;Date&nbsp;................................. &nbsp;&nbsp;NIC/Driving License/Passport No:...........................................</div><br/>";

						addsDiv3 += "<div>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div><br/>";


						//if(rep_facCodeArr[i]=="FAC03")
						{
							addsDiv3 += "<div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;text-decoration:underline;'><i>Certification of the Attester</i></div><br/>";
						}


						addsDiv3 += "<div style='clear:both;width:100%;'>";
						addsDiv3 += "<div style='float:left;text-align:justify;'>Signature of the Attester </div>";
						addsDiv3 += "<div style='float:left;width:25%;'>.............................................</div>";
						addsDiv3 += "<div style='margin-left: 630px;text-align:justify;'>Date ";//</div>  <div style='float:left;width:25%;'>
						addsDiv3 += "......................................</div>";//text-align:justify;
						addsDiv3 += "</div>";
						//addsDiv3+="<div style='clear:both;'>Name, Designation and official stamp of Attester</div>";

						addsDiv3 += "<div style='clear:both;text-align:justify;line-height: 1cm;'>Name:..................................................................................................................................................................................................................</div>";
						addsDiv3 += "<div style='clear:both;text-align:justify;line-height: 1cm;'>Designation:.....................................................................................</div>";
						addsDiv3 += "<div style='margin-left: 630px;text-align:justify;line-height: 1cm;'>Official stamp:</div>";

						addsDiv3 += "<div>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div><br/>";






						addsDiv3 += "&nbsp;&nbsp;<div style='clear:both;'>Sgd.</div>";
						addsDiv3 += "<div style='clear:both;'>Deputy Registrar</div>";
						addsDiv3 += "<div style='clear:both;'>Faculty of Graduate Studies</div>";
						addsDiv3 += "<div style='clear:both;'>University of Kelaniya</div>";

						//addsDiv3+="&nbsp;&nbsp;<img src='img/examdrsign.jpg' style='width:150px;height:80px;'/><br/><div style='clear:both;'>Deputy Registrar</div>";
						//addsDiv3+="<div style='clear:both;'>Examination</div>";
						addsDiv3 += "<div style='clear:both;'>" + currentdate + "</div>";
						addsDiv3 += "</div>";
						addsDiv3 += "<br/><div style='clear:both;width:100%;height:100px;font-family:tahoma;font-size:12px;border:1px solid #000000;'>";
						addsDiv3 += "<div style='float:left;width:40%;height:100%;border-right:1px solid #000000;margin-left:5px;'>";
						addsDiv3 += "<div style='clear:both;margin-top:5px;font-weight:bold;'>Return:</div>";
						addsDiv3 += "<div style='clear:both;'>Deputy Registrar</div>";
						addsDiv3 += "<div style='clear:both;'>Faculty of Graduate Studies</div>";
						addsDiv3 += "<div style='clear:both;'>University of Kelaniya</div>";
						//addsDiv3+="<div style='clear:both;'>Deputy Registrar,Examination,University of Kelaniya</div>";
						addsDiv3 += "</div>";
						addsDiv3 += "<div style='float:left;width:59%;'>";
						addsDiv3 += "<div style='clear:both;margin-top:5px;font-weight:bold;margin-left:5px;'>To:</div>";
						addsDiv3 += "<div style='clear:both;margin-left:50px;'>" + dataRep['studentName'] + "</div>";
						addsDiv3 += "<div style='clear:both;margin-left:50px;'>" + dataRep['studentPermanentAddress'] + "</div>";
						addsDiv3 += "</div>";
						addsDiv3 += "</div><br/><div style='page-break-after:always;'> </div>";


						// if(moreThanOne==1)
						// {
						// adfinaldsDiv+= dsDiv+addsDiv2+addsDiv3;
						// }
						// else
						// {
						// adfinaldsDiv+= dsDiv+addsDiv2+addsDiv3;
						// }


						// if(document.getElementById('degreeWiseAdmision').value==degreeTitleArr[i] & substudentnoArr[k]== studentNoArr[i]){	
						// if (substudentnoArr.indexOf(substudentnoArr[k]) == substudentnoArr.lastIndexOf(substudentnoArr[k]) || (substudentnoArr.indexOf(substudentnoArr[k]) != substudentnoArr.lastIndexOf(substudentnoArr[k]) && substudentnoArr.indexOf(substudentnoArr[k])==k)){
						var tempNo = k + 1;
						if (substudentnoArr[tempNo] != substudentnoArr[k]) {
							//alert(substudentnoArr[tempNo]+" = "+substudentnoArr[k]);
							adfinaldsDiv += addsDiv + addsDiv2 + addsDiv3;
						}

						// }
						// }

					}

					//}// academic year	


					//}
				}

			}

		}

	}
	if (chechCount != 0) {
		newPrint = window.open('', '');
		doc = newPrint.document;
		doc.open();
		doc.write('<html><head><title>Print</title><script type="text/javascript">function printReport(){document.getElementById("printButton").style.display="none";window.print();}</script>');
		doc.write('<style type="text/css">body{margin:10px auto;font-family:tahoma;width:800px;height:auto;text-align:left;padding:15px;}select{border:none;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;}</style>');
		doc.write('</head><body>');
		doc.write(adfinaldsDiv);
		//doc.write(gtDiv);
		doc.write('<button id="printButton" style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;text-align:center;" onclick=printReport();>Print</button>');
		doc.write('</body></html>');
		doc.close();
	}
	else {
		alert("Please select at least one student");
	}


}

function convertToSemesters(semesters) {
	// Helper function to convert number to ordinal (1 -> 1st, 2 -> 2nd, etc.)
	function ordinal(n) {
		if (n == 0) {
			return "End";
		}
		const suffix = ['th', 'st', 'nd', 'rd'];
		const remainder = n % 100;
		return n + "<sup>" + (suffix[(remainder - 20) % 10] || suffix[remainder] || suffix[0]) + "</sup>";
	}
	// console.log(semesters);

	// Split the values and convert them
	const semesterList = semesters.split(',').map(Number);
	// console.log(semesterList);

	const result = semesterList.map(sem => ordinal(sem));
	//   console.log(result);
	// Handle the "and" before the last item and append "Semester/Semesters"
	if (result.length > 1) {
		return result.slice(0, -1).join(', ') + ' and ' + result.slice(-1) + ' Semesters';
	} else {
		return result[0] + ' Semester';
	}
}


var studentNameList = studentNoList = studentNICList = "";
var examAdmissionFormDTable;
function initializedPrintAdmssionDataTable() {
	var buttons = [];
	var d = new Date();
	var dYear = 0;
	var dYear = d.getFullYear();

	var date = d.getUTCDate();
	var mm = d.getUTCMonth();
	var yr = d.getUTCFullYear();
	var mn = ("0" + (mm + 1)).slice(-2);
	var currentdate = yr + "/" + mn + "/" + date;

	let examYear = dYear;
	let examMonth = "September";

	// extend: 'excel',
	// 				text: 'Download Payment Details(Excel)', // Optional: Change the button text
	// 				filename: 'Payment Details', // Set a custom PDF file name
	// 				className: 'btn btn-primary',
	// 				exportOptions: {
	// 					columns: (dataRep['roleName'] == "Bursar" || dataRep['roleName'] == "Assistant Bursar" || dataRep['roleName'] == "Administrator") ? [0, 2, 3, 4, 7, 8, 9, 10] : [0, 1, 2, 3, 4, 7, 8, 9]
	// 				},

	// 				title: function () {
	// 					var printTitle = 'Student Payment Details\n' + $("#selectedDegreeName option:selected").text() + '\nAcademic Year - ' + document.getElementById('achedamicYear').value + '';
	// 					return printTitle
	// 				},
	buttons.push({
		text: 'Download Student List(Excel)',
		// filename: 'Student List',
		// extend: 'excel',
		className: 'btn btn-primary',

		action: function (e, dt, node, config) {

			let havest = false;
			examAdmissionFormDTable.rows().every(function (index) {
				let rowData = this.data();
				let checkbox = $(this.node()).find('input[type="checkbox"]');
				let isChecked = checkbox.prop('checked');
				if (isChecked) {
					havest = true;
				}
			});

			if (havest) {
				newStr = '<table border="1" width="100%" style="border-collapse: collapse;">';
				newStr += "<tr>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:50px;' ></th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:200px;' >Student Name</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >Student No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >NIC</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >Address</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >Mobile</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >Email</th>";
				newStr += "</tr>";

				let count = 1;
				examAdmissionFormDTable.rows().every(function (index) {
					let rowData = this.data();
					let checkbox = $(this.node()).find('input[type="checkbox"]');
					let isChecked = checkbox.prop('checked');
					if (isChecked) {
						newStr += "<tr>";
						newStr += '<td  style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;text-align: center;width:50px;">' + count + '</td>';
						newStr += '<td  style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:200px;">' + rowData[2] + '</td>';
						newStr += '<td  style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;text-align: center;width:150px;">' + rowData[3] + '</td>';
						newStr += '<td  style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:150px;">' + rowData[4] + '</td>';
						newStr += '<td  style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:250px;">' + rowData[5] + '</td>';
						newStr += '<td  style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:150px;">' + rowData[7] + '</td>';
						newStr += '<td  style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:200px;">' + rowData[6] + '</td>';
						newStr += "</tr>";
						count++;
					}
				});

				newStr += "</table>";

				var exportFilename = "Student List.xls";
				var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
				//eng
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


			} else {
				Swal.fire({
					title: "Warning!",
					text: "Please select at least one student.",
					icon: "warning"
				});
			}

		}
	});

	buttons.push({
		text: 'Download Student List (Word)',
		// filename: 'Student List',
		// extend: 'excel',
		className: 'btn btn-primary',

		action: function (e, dt, node, config) {

			let havest = false;
			examAdmissionFormDTable.rows().every(function (index) {
				let rowData = this.data();
				let checkbox = $(this.node()).find('input[type="checkbox"]');
				let isChecked = checkbox.prop('checked');
				if (isChecked) {
					havest = true;
				}
			});
			let newStr = "";
			if (havest) {
				newStr += `<style>
				@font-face
				{font-family:"Cambria Math";
				panose-1:2 4 5 3 5 4 6 3 2 4;
				mso-font-charset:0;
				mso-generic-font-family:roman;
				mso-font-pitch:variable;
				mso-font-signature:-536869121 1107305727 33554432 0 415 0;}
			 p.MsoNormal, li.MsoNormal, div.MsoNormal
				{mso-style-unhide:no;
				mso-style-qformat:yes;
				mso-style-parent:"";
				margin:0cm;
				mso-pagination:widow-orphan;
				font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;}
			p.MsoHeader, li.MsoHeader, div.MsoHeader
				{mso-style-priority:99;
				mso-style-link:"Header Char";
				margin:0cm;
				mso-pagination:widow-orphan;
				tab-stops:center 225.65pt right 451.3pt;
				font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;}
			p.MsoFooter, li.MsoFooter, div.MsoFooter
				{mso-style-priority:99;
				mso-style-link:"Footer Char";
				margin:0cm;
				mso-pagination:widow-orphan;
				tab-stops:center 225.65pt right 451.3pt;
				font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;}
			p
				{mso-style-noshow:yes;
				mso-style-priority:99;
				mso-margin-top-alt:auto;
				margin-right:0cm;
				mso-margin-bottom-alt:auto;
				margin-left:0cm;
				mso-pagination:widow-orphan;
				font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;}
			p.msonormal0, li.msonormal0, div.msonormal0
				{mso-style-name:msonormal;
				mso-style-noshow:yes;
				mso-style-priority:99;
				mso-style-unhide:no;
				mso-margin-top-alt:auto;
				margin-right:0cm;
				mso-margin-bottom-alt:auto;
				margin-left:0cm;
				mso-pagination:widow-orphan;
				font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;}
			span.HeaderChar
				{mso-style-name:"Header Char";
				mso-style-priority:99;
				mso-style-unhide:no;
				mso-style-locked:yes;
				mso-style-link:Header;
				mso-ansi-font-size:12.0pt;
				mso-bidi-font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-ascii-font-family:"Times New Roman";
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;
				mso-hansi-font-family:"Times New Roman";
				mso-bidi-font-family:"Times New Roman";}
			span.FooterChar
				{mso-style-name:"Footer Char";
				mso-style-priority:99;
				mso-style-unhide:no;
				mso-style-locked:yes;
				mso-style-link:Footer;
				mso-ansi-font-size:12.0pt;
				mso-bidi-font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-ascii-font-family:"Times New Roman";
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;
				mso-hansi-font-family:"Times New Roman";
				mso-bidi-font-family:"Times New Roman";}
			span.GramE
				{mso-style-name:"";
				mso-gram-e:yes;}
			.MsoChpDefault
				{mso-style-type:export-only;
				mso-default-props:yes;
				font-size:10.0pt;
				mso-ansi-font-size:10.0pt;
				mso-bidi-font-size:10.0pt;
				mso-font-kerning:0pt;
				mso-ligatures:none;}
			   @page WordSection1
				   { size:841.9pt 595.3pt;
			mso-page-orientation:landscape;
			margin:36.0pt 36.0pt 36.0pt 36.0pt;
			mso-header-margin:35.4pt;
			mso-footer-margin:35.4pt;
			mso-paper-source:0;}
			   div.WordSection1
				   {page:WordSection1;}
			   
			   </style>
			   `;

				newStr += "<div class='WordSection1' ><div id='topics1' class='info'></div>";
				newStr += '<p class=MsoNormal align=center style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;text-align:center"><span style="mso-fareast-font-family:"Times New Roman";mso-no-proof:yes"><img width=339 height=78 src="' + host + 'images/fgslogo.png" hspace=12 v:shapes="Picture_x0020_3"></span><span style="mso-fareast-font-family:Times New Roman"><o:p></o:p></span></p>';
				// newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>" + $("#selectedDegreeName option:selected").text() + "</div>";
				// newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Academic Year - " + academicYear + "</div>";
				// newStr += "<div class='investLabel' style='text-align:center;font-size: 16px;'>Batch - " + batch + "</div>";
				newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;font-size: 16px;'>Student List</div>";

				newStr += "<br/>";
				newStr += '<table border="1" width="100%" style="border-collapse: collapse;">';
				newStr += "<tr>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:50px;' ></th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:200px;' >Student Name</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >Student No</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >NIC</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >Address</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >Mobile</th>";
				newStr += "<th style='font-size: 12px; font-family: Times New Roman; text-align: center;width:150px;' >Email</th>";
				newStr += "</tr>";

				let count = 1;
				examAdmissionFormDTable.rows().every(function (index) {
					let rowData = this.data();
					let checkbox = $(this.node()).find('input[type="checkbox"]');
					let isChecked = checkbox.prop('checked');
					if (isChecked) {
						newStr += "<tr>";
						newStr += '<td style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;text-align: center;width:50px;">' + count + '</td>';
						newStr += '<td style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:200px;">' + rowData[2] + '</td>';
						newStr += '<td style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;text-align: center;width:150px;">' + rowData[3] + '</td>';
						newStr += '<td style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:150px;">' + rowData[4] + '</td>';
						newStr += '<td style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:250px;">' + rowData[5] + '</td>';
						newStr += '<td style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:150px;">' + rowData[7] + '</td>';
						newStr += '<td style="word-wrap:break-word;font-size:12px;font-family:Times New Roman;width:200px;">' + rowData[6] + '</td>';
						newStr += "</tr>";
						count++;
					}
				});

				newStr += "</table>";
				// newStr += "</div>"
				newStr += "</div>"
				console.log(newStr);
				var exportFilename = "Student List.doc";
				let sendDataList = "htmlContent=" + encodeURIComponent(newStr);
				sendDataList += "&sheetName=" + "Student List";
				sendDataList += "&orientation=" + "l";

				// if (type == "w") {
				isrHandle.getDoc(newStr, exportFilename, "landscape");
				// }
				// var exportFilename = "Student List.docx";
				// var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });

				// // var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
				// //eng
				// if (navigator.msSaveBlob) {
				// 	navigator.msSaveBlob(csvData, exportFilename);
				// } else {
				// 	//In FF link must be added to DOM to be clicked
				// 	var link = document.createElement('a');
				// 	link.href = window.URL.createObjectURL(csvData);
				// 	link.setAttribute('download', exportFilename);
				// 	document.body.appendChild(link);
				// 	link.click();
				// 	document.body.removeChild(link);
				// }


			} else {
				Swal.fire({
					title: "Warning!",
					text: "Please select at least one student.",
					icon: "warning"
				});
			}

		}
	});

	buttons.push({
		text: 'Print Admission',
		className: 'btn btn-primary',
		action: function (e, dt, node, config) {
			var postDataCheckExamHave = {
				action: "getExamPrimaryDataForAdmissionNew",
				degreeCode: batchArray[batchArray_id][0],
				achademicYear: batchArray[batchArray_id][1],
				semester: batchArray[batchArray_id][2],
				attempt: batchArray[batchArray_id][3],
				attempt_time: batchArray[batchArray_id][4],
				examid: batchArray[batchArray_id][11],
				authcode: authcode,
				username: dataRep['userId'],
			};

			$.ajax({
				type: 'POST',
				url: 'rules/admission.php',
				data: postDataCheckExamHave,
				dataType: 'json',
				success: function (availableTimeTableData) {
					if (availableTimeTableData && availableTimeTableData.length > 0 && availableTimeTableData[0].status === 200) {
						let examYear = availableTimeTableData[0].exam_year;
						let examMonth = availableTimeTableData[0].exam_month;


						var postData = {
							action: "getTimeTableForAdmissionNew",
							degreeCode: batchArray[batchArray_id][0],
							achademicYear: batchArray[batchArray_id][1],
							semester: batchArray[batchArray_id][2],
							attempt: batchArray[batchArray_id][3],
							attempt_time: batchArray[batchArray_id][4],
							examid: batchArray[batchArray_id][11],
							authcode: authcode,
							username: dataRep['userId'],
						};
						$.ajax({
							type: 'POST',
							url: 'rules/admission.php',
							data: postData,
							dataType: 'json',
							success: function (response) {

								if (response && response.length > 0 && response[0].status === 200) {
									let havest = false;
									let studnetNo = [];
									let studnetName = [];
									let studnetAddress = [];
									examAdmissionFormDTable.rows().every(function (index) {
										let rowData = this.data();
										let checkbox = $(this.node()).find('input[type="checkbox"]');
										let isChecked = checkbox.prop('checked');
										if (isChecked) {
											studnetNo.push(rowData[3]);
											studnetName.push(rowData[2]);
											studnetAddress.push(rowData[5]);
											havest = true;

										}
									});
									if (havest) {
										var postData = {
											action: "getApplyedSubjectSelectedStudentNew",
											studentNo: studnetNo,
											degreeCode: batchArray[batchArray_id][0],
											achademicYear: batchArray[batchArray_id][1],
											semester: batchArray[batchArray_id][2],
											attempt: batchArray[batchArray_id][3],
											attempt_time: batchArray[batchArray_id][4],
											examid: batchArray[batchArray_id][11],
											authcode: authcode,
											username: dataRep['userId'],
										};

										$.ajax({
											type: 'POST',
											url: 'rules/admission.php',
											data: postData,
											dataType: 'json',
											success: function (response2) {

												let addsDiv = "";
												$.each(studnetNo, function (selectedStNoIndex, selectedStNo) {
													if (selectedStNoIndex == 0) {
														addsDiv += '<div style="width:100%;height:30px;">';

													} else {
														addsDiv += '<div style="width:100%;height:30px;padding-top:30px">';

													}
													addsDiv += "<div style='float:left;width:10%;'>";
													addsDiv += "<img src='img/logo.gif' style='width:80px;height:80px;'/>";
													addsDiv += "</div>";
													addsDiv += "<div style='float:left;width:90%;'>";
													addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; "><b>Faculty of Graduate Studies</b> - University of Kelaniya</h3></div>';
													addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">' + batchArray[batchArray_id][10] + ' - ' + batchArray[batchArray_id][1] + '</h3></div>';

													addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">' + convertToSemesters(batchArray[batchArray_id][2]) + ' Examination</h3></div>';


													addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">' + batchArray[batchArray_id][9] + ' - ' + batchArray[batchArray_id][8] + '</h3></div>';

													let admisiionTitle = "";

													if (batchArray[batchArray_id][3] == 'First') {
														admisiionTitle = "Admission Card";

													} else if (batchArray[batchArray_id][3] == 'Repeat') {
														admisiionTitle = "Admission Card - Repeat";

													} else if (batchArray[batchArray_id][3] == 'Re-Repeat') {
														admisiionTitle = "Admission Card - Re-Repeat ";
														if (batchArray[batchArray_id][4] != 1) {
															admisiionTitle += "Attempt " + batchArray[batchArray_id][4];
														}

													}
													addsDiv += '<div style="width:100%;height:100%;float:left;text-align:center;"><h3 style="margin-top:-1px; ">' + admisiionTitle + '</h3></div>';
													addsDiv += "</div>";

													addsDiv += '</div><hr style="clear:both;" />';
													addsDiv += "<div style='clear:both;width:100%;font-size:12px;font-family:tahoma;'><div style='float:left;font-weight:bold;margin-right:5px;'>Full Name</div><div style='float:left;'>&nbsp;:&nbsp;</div><div style='float:left;'>" + studnetName[selectedStNoIndex] + "</div></div>";
													addsDiv += "<br/><div style='clear:both;width:100%;font-size:12px;font-family:tahoma;'>";
													addsDiv += "<div style='float:left;width:80%;'>";
													addsDiv += "<div style='float:left;margin-right:10px;font-weight:bold;'>Student Number</div><div style='float:left;'>&nbsp;&nbsp;:&nbsp;</div><div style='float:left;'>" + selectedStNo + "</div>";
													addsDiv += "</div>";
													addsDiv += "<div style='float:left;width:20%;'>";
													addsDiv += "</div>";

													addsDiv += "<br/><br/><div style='clear:both;font-family:tahoma;font-size:12px;font-weight:bold;width:100%;height:40px;border:1px solid #000000;'>";
													addsDiv += "<div style='float:left;width:24%;height:100%;border-right:1px solid #000000;text-align:center;'>Date/Time</div>";
													addsDiv += "<div style='float:left;width:25%;height:100%;border-right:1px solid #000000;text-align:center;'>Paper Code/Exam Hall</div>";
													addsDiv += "<div style='float:left;width:25%;height:100%;border-right:1px solid #000000;text-align:center;;'>Signature of the Applicant</div>";
													addsDiv += "<div style='float:left;width:25%;height:100%;text-align:center;'>Signature of the Supervisor</div>";
													addsDiv += "</div>";
													let addsDiv2 = "";
													$.each(response, function (index, data) {
														$.each(response2, function (getSelectedStIndex, getSelectedSt) {
															if (getSelectedSt.studentNo == selectedStNo) {
																if (getSelectedSt.subjectCode == data.subjectCode) {
																	addsDiv2 = "<div style='clear:both;font-family:tahoma;font-size:12px;width:100%;height:50px;border:1px solid #000000;border-top:none'>";
																	addsDiv2 += "<div style='float:left;width:24%;height:50px;border-right:1px solid #000000;text-align:center;'>";
																	addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='padding-top: 10px;'>" + data.examdate + "</div>";
																	addsDiv2 += "<div class='investView_l' name='outside' id='outside' style=''>" + data.starttime + "-" + data.endtime + "</div>";
																	addsDiv2 += '</div>';

																	addsDiv2 += "<div style='float:left;width:25%;height:50px;border-right:1px solid #000000;text-align:center;'>";
																	addsDiv2 += "<div class='investView_l' name='outside' id='outside' style='padding-top: 10px;'>" + data.subjectCode + "</div>";
																	addsDiv2 += "<div class='investView_l' name='outside' id='outside' style=''>" + data.hallno + "</div>";

																	addsDiv2 += '</div>';
																	addsDiv2 += "<div style='float:left;width:25%;height:50px;border-right:1px solid #000000;text-align:center;;'></div>";
																	addsDiv2 += "<div style='float:left;width:25%;height:50px;text-align:center;'></div>";
																	addsDiv2 += "</div>";
																	addsDiv += addsDiv2;
																}
															}

														});
													});


													let addsDiv3 = "<br/><div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;font-style: italic;text-decoration:underline;'>Certification of Signature and Name</div>";
													addsDiv3 += "<br/><div style='clear:both;width:100%;font-family:tahoma;font-size:12px;'>";
													addsDiv3 += "<div style='clear:both;width:100%;'>";
													addsDiv3 += "</div>";
													addsDiv3 += "<div style='clear:both;text-align:justify;line-height: 0.5cm;'>I certify that my name is correct in this admission and it will appear in my results sheet, certificates, and all other records accordingly. I understand that the name appears in this admission will appear in all records including certificates and requests received to correct the name after issuing results will not be accepted [If you have changed your name or if your name is not correct in our records/system please, inform immediately in writing with evidence to make corrections]. </div><br/>";
													addsDiv3 += "<div>Signature of the Student&nbsp;............................................ &nbsp;&nbsp;Date&nbsp;................................. &nbsp;&nbsp;NIC/Driving License/Passport No:...........................................</div><br/>";

													addsDiv3 += "<div>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div><br/>";




													addsDiv3 += "<div style='clear:both;width:100%;font-size:12px;font-tahoma:tahoma;font-weight:bold;text-decoration:underline;'><i>Certification of the Attester</i></div><br/>";



													addsDiv3 += "<div style='clear:both;width:100%;'>";
													addsDiv3 += "<div style='float:left;text-align:justify;'>Signature of the Attester </div>";
													addsDiv3 += "<div style='float:left;width:25%;'>.............................................</div>";
													addsDiv3 += "<div style='margin-left: 630px;text-align:justify;'>Date ";//</div>  <div style='float:left;width:25%;'>
													addsDiv3 += "......................................</div>";//text-align:justify;
													addsDiv3 += "</div>";
													//addsDiv3+="<div style='clear:both;'>Name, Designation and official stamp of Attester</div>";

													addsDiv3 += "<div style='clear:both;text-align:justify;line-height: 1cm;'>Name:..................................................................................................................................................................................................................</div>";
													addsDiv3 += "<div style='clear:both;text-align:justify;line-height: 1cm;'>Designation:.....................................................................................</div>";
													addsDiv3 += "<div style='margin-left: 630px;text-align:justify;line-height: 1cm;'>Official stamp:</div>";

													addsDiv3 += "<div>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div><br/>";


													addsDiv3 += "&nbsp;&nbsp;<div style='clear:both;'>Sgd.</div>";
													addsDiv3 += "<div style='clear:both;'>Deputy Registrar</div>";
													addsDiv3 += "<div style='clear:both;'>Faculty of Graduate Studies</div>";
													addsDiv3 += "<div style='clear:both;'>University of Kelaniya</div>";
													addsDiv3 += "<div style='clear:both;'>" + currentdate + "</div>";
													addsDiv3 += "</div>";
													addsDiv3 += "<br/><div style='clear:both;width:100%;height:100px;font-family:tahoma;font-size:12px;border:1px solid #000000;'>";
													addsDiv3 += "<div style='float:left;width:40%;height:100%;border-right:1px solid #000000;margin-left:5px;'>";
													addsDiv3 += "<div style='clear:both;margin-top:5px;font-weight:bold;'>Return:</div>";
													addsDiv3 += "<div style='clear:both;'>Deputy Registrar</div>";
													addsDiv3 += "<div style='clear:both;'>Faculty of Graduate Studies</div>";
													addsDiv3 += "<div style='clear:both;'>University of Kelaniya</div>";
													addsDiv3 += "</div>";
													addsDiv3 += "<div style='float:left;width:59%;'>";
													addsDiv3 += "<div style='clear:both;margin-top:5px;font-weight:bold;margin-left:5px;'>To:</div>";
													addsDiv3 += "<div style='clear:both;margin-left:50px;'>" + studnetName[selectedStNoIndex] + "</div>";
													addsDiv3 += "<div style='clear:both;margin-left:50px;'>" + studnetAddress[selectedStNoIndex] + "</div>";
													addsDiv3 += "</div>";
													addsDiv3 += "</div><br/><div style='page-break-after:always;'> </div> </div>";

													addsDiv += addsDiv3;

												});


												var doc = window.open('', '_blank');
												doc.document.write('<html><head>');
												doc.document.write('<style type="text/css">body{margin:10px auto;font-family:tahoma;width:800px;height:auto;text-align:left;padding:15px;}select{border:none;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;}</style>');
												doc.document.write('</head><body>');
												doc.document.write(addsDiv);
												doc.document.write('</body></html>');
												doc.document.close();
												doc.print();




											},
											error: function (error) {
												console.log(error)
											}
										});
									} else {
										Swal.fire({
											title: "Warning!",
											text: "Please select at least one student.",
											icon: "warning"
										});
									}
								} else {
									console.log("fdfsfsd1444");

								}
							},
							error: function (error) {
								console.log(error)

								Swal.fire({
									title: "Error!",
									text: "Please try again later!",
									icon: "error"
								});
							}
						});

					}

					else {
						Swal.fire({
							title: "No time table available",
							text: "No time table available at this movement!",
							icon: "warning"
						});
					}
				}, error: function (error) {
					console.log(error)
				}
			})

		}
	});



	if (!$.fn.DataTable.isDataTable('#studentAddmissionCardTabel'))
		examAdmissionFormDTable = $('#studentAddmissionCardTabel').DataTable({
			dom: "<'row'<'col-12 text-right' B>>" + // Search and buttons in a 1-line row
				"<'row mt-3'<'col col-md-6' l><'col col-md-6' f>>" + // Filtering input and pagination in a 2-line row
				"<'row'<'col-12't>>" + // Table in a single line
				"<'row'<'col-6'i><'col-6'p>>", // Processing display element right, pagination right
			buttons: buttons,
			columnDefs: [{
				targets: 0,
				orderable: false,
				searchable: false,
				className: 'selectall-checkbox',
			},
			],
			select: {
				style: 'multi',
				selector: 'td:first-child',
			},
			order: [1, 'asc'],
		});


	examAdmissionFormDTable.on('select.dt deselect.dt', function (e, dt, type, indexes) {
		var countSelectedRows = examAdmissionFormDTable.rows({ selected: true }).count();
		var countItems = examAdmissionFormDTable.rows().count();

		if (countItems > 0) {
			if (countSelectedRows == countItems) {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', true);
			} else {
				$('thead .selectall-checkbox input[type="checkbox"]', this).prop('checked', false);
			}
		}

		if (e.type === 'select') {
			$('.selectall-checkbox input[type="checkbox"]', examAdmissionFormDTable.rows({ selected: true }).nodes()).prop('checked', true);
		} else {
			$('.selectall-checkbox input[type="checkbox"]', examAdmissionFormDTable.rows({ selected: false }).nodes()).prop('checked', false);
		}
	});

	// When clicking on "thead .selectall-checkbox", trigger click on checkbox in that cell.
	examAdmissionFormDTable.on('click', 'thead .selectall-checkbox', function () {
		$('input[type="checkbox"]', this).trigger('click');
	});


	// When clicking on the checkbox in "thead .selectall-checkbox", define the actions.
	examAdmissionFormDTable.on('click', 'thead .selectall-checkbox input[type="checkbox"]', function (e) {
		if (this.checked) {
			examAdmissionFormDTable.rows().select();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", true);
				}
			}
		} else {
			examAdmissionFormDTable.rows().deselect();
			for (i = 0; i < applicationNoLength; i++) {
				var checkBoxDivIdRegistered = '#checkSelected' + i;
				if ($(checkBoxDivIdRegistered)) {
					$(checkBoxDivIdRegistered).prop("checked", false);
				}
			}
		}

		e.stopPropagation();
	});
}


function formAdmissionCardForm(dsp) {

	title1 = "Examination Admission Card";
	str = "";

	if (dsp == "formAdmissionCardForm") {
		keyDisabled = "Disabled";


		// var role;
		// var role1;
		// var role2;
		// var u = document.cookie;
		// var ur = (u.split(";", 2)[u.split(";", 2).length - 2]);
		// var use = (ur.split("=", 2)[ur.split(";", 2).length - 0]);
		// for (i = 0; i < userIdLength; i++) {
		// 	if (use == userIdArr[i]) {
		// 		TempUser = use;
		// 		dataRep['roleName'] = roleNameArr[i];
		// 		dataRep['departmentCode'] = departmentCodeArr[i];
		// 		dataRep['userName'] = userNameArr[i];
		// 		dataRep['programmeCode'] = programmeCodeArr[i];
		// 	}

		// }
		// if (dataRep['roleName'] == 'Coordinator') {
		// 	var dcode = dataRep['departmentCode']
		// 	role = "cordinator";

		// 	var pcode = dataRep['programmeCode']
		// 	role = "cordinator";

		// }
		// else if (dataRep['roleName'] == 'Head of the Department') {
		// 	var dcode1 = dataRep['departmentCode']
		// 	role1 = "head";

		// 	var pcode1 = dataRep['programmeCode']
		// 	role1 = "head";
		// }
		// else {

		// 	role2 = "other";
		// }

		// var programName1 = "";
		// if (role == "cordinator") {
		// 	programName = "<option>Please scroll down to see the records</option>";
		// 	for (j = 0; j < degreeCodeLength; j++) {
		// 		if (degreeCodappeArr[j] != null) {
		// 			if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 				if (degreeCodappeArr[j] == dataRep['departmentCode']) {
		// 					programName1 += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + ">" + degreeTitle1Arr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }


		// else if (role1 == "head") {
		// 	programName = "<option>Please scroll down to see the records</option>";
		// 	for (j = 0; j < degreeCodeLength; j++) {
		// 		if (degreeCodappeArr[j] != null) {
		// 			if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 				if (departmentCodeappArr[j] == dataRep['departmentCode']) {
		// 					programName1 += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + ">" + degreeTitle1Arr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		// if (role2 == "other") {
		// 	if (dataRep['userName'] == "ssdean" || dataRep['userName'] == "ssar" || dataRep['userName'] == "Asanka") {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (facultyCode3Arr[j] == "FAC03" & degreeTitle1Arr[j] != null) {
		// 				if (degreeCodappeArr[j] != null) {
		// 					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 						programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// 	else if (dataRep['userName'] == "SAR-GWAI") {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (facultyCode3Arr[j] == "FAC10" & degreeTitle1Arr[j] != null) {
		// 				if (degreeCodappeArr[j] != null) {
		// 					if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 						programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
		// 					}
		// 				}
		// 			}
		// 		}

		// 	}
		// 	else {
		// 		programName = "<option>Please scroll down to see the records</option>";
		// 		for (j = 0; j < degreeCodeLength; j++) {
		// 			if (degreeCodappeArr[j] != null) {
		// 				if (degreeCodappeArr.indexOf(degreeCodappeArr[j]) == degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) || (degreeCodappeArr.indexOf(degreeCodappeArr[j]) != degreeCodappeArr.lastIndexOf(degreeCodappeArr[j]) && degreeCodappeArr.indexOf(degreeCodappeArr[j]) == j)) {
		// 					programName += "<option " + ((dataRep["selectedDegreeName"] == degreeTitle1Arr[j]) ? "selected" : "") + " >" + degreeTitle1Arr[j] + "</option>";
		// 				}
		// 			}
		// 		}
		// 	}
		// }


		str = '<nav class="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0" style="margin-top: 0;margin-bottom: 1rem;">';
		str += '<div class="navbar-menu-wrapper d-flex align-items-center justify-content-end" style="width: auto;">';
		str += '<ul class="navbar-nav mr-lg-2">';
		str += '<li class="nav-item ml-0">';
		str += '<h4 class="mb-0">' + title1 + '</h4>';
		str += '</li></ul></div></nav>';


		// str += "<div id='updateApplicantList'>";

		// str += '<div class="row justify-content-md-center"><div class="col col-sm-12 col-md-12 col-lg-12 grid-margin stretch-card">';
		// str += '<div class="card">';
		// str += '<div class="card-body"><div class="form-group row">';

		// str += '<div class="col-xl-6 col-lg-6">';
		// str += '<div class="col-xl-4 col-sm-3" style="display: inline-flex;"><label for="exampleInputUsername2" class="label-r">Programme</label></div>';
		// str += '<div class="col-xl-8  col-sm-9" style="display: inline-flex;">';		
		// str += '<select class="form-control form-control-sm" id="degreeWiseAdmision" name="degreeWiseAdmision" onchange="dataRep[this.id]=this.value;">';

		// str += '</select>';
		// str += '</div></div>';

		// let date = new Date().getFullYear();


		// str += '<div class="col-xl-6 col-lg-6">'
		// str += '<div class="col-xl-5 col-lg-5 col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Academic Year</label></div>';
		// str += '<div class="col-xl-7 col-lg-7 col-sm-4" style="display: inline-flex;">';

		// str += '<select class="form-control form-control-sm" id="academicYear" onchange="dataRep[this.id]=this.value;">';
		// for (i = 2014; i <= date + 1; i++) {
		// 	if (i == date + 1) {
		// 		str += "<option " + ((dataRep["academicYear"] == "") ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
		// 	} else {
		// 		str += "<option " + ((dataRep["academicYear"] == i) ? "selected" : "") + " value='" + i + "'>" + i + "</option>";
		// 	}
		// }
		// str += '</select>';
		// str += '</div>';
		// str += '</div>';

		// str += '<div class="col-xl-6 col-lg-6">'
		// str += '<div class="col-xl-4 col-lg-3 col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Semester </label></div>';
		// str += '<div class="col-xl-8 col-lg-9 col-sm-9" style="display: inline-flex;">';
		// str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem1' class='form-check-input' name='appSemester' value='1' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '1') ? "checked" : "") + ">1<i class='input-helper'></i></label></div></div>";
		// str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem2' class='form-check-input' name='appSemester' value='2' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '2') ? "checked" : "") + ">2<i class='input-helper'></i></label></div></div>";
		// str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem3' class='form-check-input' name='appSemester' value='3' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '3') ? "checked" : "") + ">3<i class='input-helper'></i></label></div></div>";
		// str += "<div class='col-sm-2'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem4' class='form-check-input' name='appSemester' value='4' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '4') ? "checked" : "") + ">4<i class='input-helper'></i></label></div></div>";
		// str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='appSem0' class='form-check-input' name='appSemester' value='0' onchange='dataRep[this.name]=this.value;' " + ((dataRep["appSemester"] == '0') ? "checked" : "") + ">End of Year<i class='input-helper'></i></label></div></div>";

		// str += '</div>';
		// str += '</div>';
		// str += '</div>';


		// str += '<div class="form-group row"><div class="col-xl-6 col-lg-6">'
		// str += '<div class="col-xl-4 col-lg-3 col-sm-3" style="display: inline-flex;"><label for="exampleInputEmail2" class="label-r">Attempt </label></div>';
		// str += '<div class="col-xl-8 col-lg-9 col-sm-9" style="display: inline-flex;">';
		// str += "<div class='col-sm-3'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt1' class='form-check-input' name='selectedAttempt' value='F' onclick='dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'F') ? "checked" : "") + ">First<i class='input-helper'></i></label></div></div>";
		// str += "<div class='col-sm-4'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt2' class='form-check-input' name='selectedAttempt' value='R' onclick='dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'R') ? "checked" : "") + ">Repeat<i class='input-helper'></i></label></div></div>";
		// str += "<div class='col-sm-5'><div class='form-check'> <label class='form-check-label'> <input type='radio' id='attempt3' class='form-check-input' name='selectedAttempt' value='RR' onclick='dataRep[this.name]=this.value;' " + ((dataRep["selectedAttempt"] == 'RR') ? "checked" : "") + ">Re-Repeat<i class='input-helper'></i></label></div></div>";
		// str += '</div>';
		// str += '</div>';
		// str += '<div class="col-xl-6 col-lg-6"><button type="button" class="btn btn-info mr-2" style="float:left" onclick="viewAdmissionlist();">View List</button></div>';



		// str += '</div>';
		// str += '</div>';
		// str += '</div>';
		// str += '</div>';



		str += '<div class="col-lg-12 grid-margin stretch-card" style="padding: 0px;">';
		str += '<div class="card">';
		str += '<div class="card-body"><div class="table-responsive">';
		str += '<table class="table table-bordered" id="studentAddmissionCardTabel">';
		str += '<thead><tr>';
		str += '<th width="3%"><input type="checkbox" class="form-check-input" id="all" style="margin: 0;position: relative;"></th>';
		str += '<th width="3%">No</th>';
		str += '<th width="25%">Student Name</th>';
		str += '<th width="15%">Student No</th>';
		str += '<th width="10%">NIC/Passport</th>';
		str += '<th width="25%">Address</th>';
		str += '<th>Moblie</th>';
		str += '<th>Email</th>';
		str += '<th>Applied Date</th>';
		str += '</tr></thead>';
		str += '<tbody>';
		str += '</tbody>';
		str += '</table>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';

	}

	return str;
}

function AddRowColorAdmissionForm(q, _this) {
	if (change == 1) {
		change = 0;
		q.style.backgroundColor = _this.checked ? '#d0d0fb' : '#FDFDFD';

	}
	else {
		change++;
		q.style.backgroundColor = _this.checked ? '#e7e7fd' : '#FDFDFD';
	}

}

function AllStudentSelect1() {
	for (i = 0; i < studentNoLength; i++) {
		var checkBoxDivIdSelecting = 'checkSelectingAdd' + i;
		if (document.getElementById(checkBoxDivIdSelecting)) {
			document.getElementById(checkBoxDivIdSelecting).checked = true;
			document.getElementById("selectAllButt").disabled = true;
			document.getElementById("selectNonButt").disabled = false;

			var nameid = "letterList1";
			nameid += i;
			if (change == 1) {
				change = 0;

				document.getElementById(nameid).style.backgroundColor = '#d0d0fb';

			}
			else {

				change++;
				document.getElementById(nameid).style.backgroundColor = '#e7e7fd';

			}
		}
	}
}

function AllStudentUnselect() {
	for (i = 0; i < studentNoLength; i++) {
		var checkBoxDivIdSelecting = 'checkSelectingAdd' + i;
		if (document.getElementById(checkBoxDivIdSelecting)) {
			document.getElementById(checkBoxDivIdSelecting).checked = false;
			document.getElementById("selectAllButt").disabled = false;
			document.getElementById("selectNonButt").disabled = true;

			var idname = "letterList1";
			idname += i;
			if (change == 1) {
				change = 0;
				document.getElementById(idname).style.backgroundColor = '#FDFDFD';

			}
			else {
				change++;
				document.getElementById(idname).style.backgroundColor = '#FDFDFD';

			}
		}
	}

}

var selectedDegreeCode;
var selectedDegreeName;
var selectedAcademicYear;
var selectedAppSemester;
var selectedAttempt;
function viewAdmissionlist() {

	if (dataRep['selectedAttempt'] == "F" || dataRep['selectedAttempt'] == "R" || dataRep['selectedAttempt'] == "RR") {
		examAdmissionFormDTable.clear();
		var postData = {
			action: "getStudentForAdmission",
			degreeCode: $('#degreeWiseAdmision').val(),
			achademicYear: $('#academicYear').val(),
			semester: dataRep['appSemester'],
			attempt: dataRep['selectedAttempt'],
			authcode: authcode,
			username: dataRep['userId'],
		};

		selectedDegreeCode = $('#degreeWiseAdmision').val();
		selectedDegreeName = $("#degreeWiseAdmision option:selected").text();
		selectedAcademicYear = $('#academicYear').val();
		selectedAppSemester = dataRep['appSemester'];
		selectedAttempt = dataRep['selectedAttempt'];

		$.ajax({
			type: 'POST',
			url: 'rules/admission.php',
			data: postData,
			dataType: 'json',
			success: function (response) {
				if (response && response.length > 0 && response[0].status === 200) {
					$.each(response, function (index, student) {
						examAdmissionFormDTable.row.add([
							'<input type="checkbox" id="checkSelected' + index + '" name="checkSelected' + index + '" class="form-check-input" style="margin: 0;position: relative;">',  // Checkbox column
							index + 1,
							student.studentName,
							student.studentNo,
							student.studentNIC,
							student.studentAddress,
							student.studentContactMobile,
							student.studentContactEmail
						]).draw(false);
					});
					examAdmissionFormDTable.draw();
				} else {
					Swal.fire({
						title: "Error!",
						text: "No student available",
						icon: "error"
					});
				}
			},
			error: function (error) {
				Swal.fire({
					title: "Error!",
					text: "Please try again later!",
					icon: "error"
				});
			}
		});

	}
	else {
		Swal.fire({
			title: "Please Select Attempt",
			text: "Please select attempt and click view list button",
			icon: "warning"
		});
	}


}

// batchArray[count] = [
// 	batches.degreeCode,
// 	batches.academicYear,
// 	batches.semester,
// 	batches.attempt,
// 	batches.attempt_time,
// 	batches.startdate,
// 	batches.closingdate,
// 	batches.amount,
// 	batches.exam_year,
// 	batches.exam_month,
// ];

var batchArray_id = "";
function viewAdmissionlist2(batchArray_i) {
	batchArray_id = batchArray_i;
	var postData = {
		action: "getStudentForAdmissionNew",
		degreeCode: batchArray[batchArray_i][0],
		achademicYear: batchArray[batchArray_i][1],
		semester: batchArray[batchArray_i][2],
		attempt: batchArray[batchArray_i][3],
		attempt_time: batchArray[batchArray_i][4],
		examid: batchArray[batchArray_i][11],
		authcode: authcode,
		username: dataRep['userId'],
	};
	console.log(postData)

	$.ajax({
		type: 'POST',
		url: 'rules/admission.php',
		data: postData,
		dataType: 'json',
		success: function (response) {
			if (response && response.length > 0 && response[0].status === 200) {

				showMenu('formAdmissionCardForm');
				initializedPrintAdmssionDataTable();
				examAdmissionFormDTable.clear();

				$.each(response, function (index, student) {
					console.log(student);
					examAdmissionFormDTable.row.add([
						'<input type="checkbox" id="checkSelected' + index + '" name="checkSelected' + index + '" class="form-check-input" style="margin: 0;position: relative;">',  // Checkbox column
						index + 1,
						student.studentName,
						student.studentNo,
						student.studentNIC,
						student.studentAddress,
						student.studentContactMobile,
						student.studentContactEmail,
						student.appliedDate,
					]).draw(false);
				});
				examAdmissionFormDTable.draw();
			} else {
				Swal.fire({
					title: "Error!",
					text: "No student available",
					icon: "error"
				});
			}
		},
		error: function (error) {
			console.log(error);
			Swal.fire({
				title: "Error!",
				text: "Please try again later!",
				icon: "error"
			});
		}
	});




}


function viewAdmissionlist_() {
	var rwcnt = 1;
	if (document.getElementById('degreeWiseAdmision').value == "Please scroll down to see the records") {
		alert("Please Select a value from the select Box(s)");
	}
	else {
		var newStr = '<input type="button" id="selectAllButt" style="margin-top:1px;float:left" class="btnB" value="Select All" onclick=AllStudentSelect1();>';
		newStr += '<input type="button" id="selectNonButt" style="margin-top:1px;float:left" class="btnB" value="Unselect All" onclick=AllStudentUnselect();>';


		newStr += "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		//newStr +="<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='width:100;text-align:center'>List Selection</div>";
		newStr += "<div class='investLabel' style='width:100px;text-align:center'>Row Count</div>";
		newStr += "<div class='investLabel_l' style='width:200px;text-align:left'>Student Name</div>";
		newStr += "<div class='investLabel_l' style='width:200px;text-align:left'>Student No</div>";
		newStr += "<div class='investLabel_l' style='width:200px;text-align:left'>NIC Number</div>";
		newStr += "<div class='investLabel_l' style='width:200px;text-align:left'>Address</div>";

		for (i = 0; i < studentNoLength; i++) {


			for (k = 0; k < substudentnoArr.length; k++) {
				//alert(document.getElementById('academicYear').value);
				if (document.getElementById('degreeWiseAdmision').value == degreeTitleArr[i] & substudentnoArr[k] == studentNoArr[i]) {	 //& academicYearArr[k]== achedamicYearArr[i]
					if (document.getElementById('academicYear').value == academicYearArr[k]) {
						if (substudentnoArr.indexOf(substudentnoArr[k]) == substudentnoArr.lastIndexOf(substudentnoArr[k]) || (substudentnoArr.indexOf(substudentnoArr[k]) != substudentnoArr.lastIndexOf(substudentnoArr[k]) && substudentnoArr.indexOf(substudentnoArr[k]) == k)) {


							newStr += "<div class='info' id='letterList1" + i + "' style='clear:both;' name='testInfo" + i + "'>";// 

							newStr += "<div  class='investView' style='width:100px;text-align:center' name='SelectingAdd" + i + "' id='SelectingAdd" + i + "'>";
							newStr += "<input type='checkbox'  " + registeredChecked + "  id='checkSelectingAdd" + i + "' onChange='AddRowColorAdmissionForm(letterList1" + i + ", this)' name='checkSelectingAdd" + i + "' ' />";
							newStr += "</div>";

							newStr += "<div class='investView' style='width:100px;text-align:center' name='rowCount' id='rowCount' onchange='dataRep[this.name]=this.value;'>";
							newStr += rwcnt + "</div>";

							newStr += "<div class='investView_l' name='studentName" + inum + "' style='width:200px;text-align:left'  id='studentName" + inum + "' onchange='dataRep[this.name]=this.value;'>";
							newStr += studentNameArr[i] + "</div>";

							newStr += "<div  class='investView_l' name='applicationNo" + inum + "' style='width:200px;text-align:left' id='applicationNo1" + inum + "' onblur='alert(this.id); dataRep[this.name]=this.value;'>";
							newStr += studentNoArr[i] + "</div>";

							newStr += "<div class='investView_l'style='width:200px;text-align:left'  name='studentNIC" + inum + "' id='studentNIC" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + studentNICArr[i] + "</div>";

							newStr += "<div class='investView_l' style='width:200px;text-align:left'  name='studentPermanentAddress" + inum + "' id='studentPermanentAddress" + inum + "'";
							newStr += " onchange='dataRep[this.name]=this.value;'>" + studentPermanentAddressArr[i] + "</div>";

							// vID = 'applicationNo1'+inum;
							// AppNoArr[inum] = applicationNoArr[i];	


							newStr += "<br/>";
							newStr += "</div>";
							inum++;
							rwcnt++;

						}
					}
				}
			}
			newStr += "</div>";


		}
		newStr += '<input type="button" id="gtPrint" class="btnD" value="Print Admission"  onclick= "printAdmission()" >';


		document.getElementById('admissionFormTable').innerHTML = newStr;
		// document.getElementById("View-List").disabled= true; // idea
		// document.getElementById('select-all').style="display";
		// document.getElementById('select-non').style="display";
	}
}

function showSemesters() {
	var selectedDegree = document.getElementById('degreeWiseAdmision').value;
	var tStr = "";
	tStr += "<div class='longIdentifier' style='clear:none;'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
	tStr += "<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";

	for (var n = 0; n < degreeCodeLength; n++) {
		if (admissionDegreeTitleArr.indexOf(admissionDegreeTitleArr[n]) == admissionDegreeTitleArr.lastIndexOf(admissionDegreeTitleArr[n]) || (admissionDegreeTitleArr.indexOf(admissionDegreeTitleArr[n]) != admissionDegreeTitleArr.lastIndexOf(admissionDegreeTitleArr[n]) && admissionDegreeTitleArr.indexOf(admissionDegreeTitleArr[n]) == n)) {

			//alert(admissionDegreeTitleArr[n]);
			//if (subjectSemesterArr.indexOf(subjectSemesterArr[n]) == subjectSemesterArr.lastIndexOf(subjectSemesterArr[n]) || (subjectSemesterArr.indexOf(subjectSemesterArr[n]) != subjectSemesterArr.lastIndexOf(subjectSemesterArr[n]) && subjectSemesterArr.indexOf(subjectSemesterArr[n])==n)){
			if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "1") {	//alert(selectedDegree==admissionDegreeTitleArr[n] && subjectSemesterArr[n]);
				if (repsemcount1 == 0) { //alert(":p 2");
					tStr += "<input type='radio' name='appSemester' id='appSem1' value='1' onchange='dataRep[this.name]=this.value;viewAdmissionlist();'>1";
					repsemcount1++;
				}
			}
			if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "2") {
				if (repsemcount2 == 0) {
					tStr += "<input type='radio' name='appSemester' id='appSem2' value='2' onchange='dataRep[this.name]=this.value;viewAdmissionlist();'>2";
					repsemcount2++;
				}

			}
			if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "3") {
				if (repsemcount3 == 0) {
					tStr += "<input type='radio' name='appSemester' id='appSem3' value='3' onchange='dataRep[this.name]=this.value;viewAdmissionlist();'>3";
					repsemcount3++;
				}

			}
			if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "4") {
				if (repsemcount4 == 0) {
					tStr += "<input type='radio' name='appSemester' id='appSem4' value='4' onchange='dataRep[this.name]=this.value;viewAdmissionlist();'>4";
					repsemcount4++;
				}

			}

			if (selectedDegree == admissionDegreeTitleArr[n] && subjectSemesterArr[n] == "0") {
				//alert(selectedDegree);
				if (repsemcount0 == 0) {
					tStr += "<input type='radio' name='appSemester' id='appSem0' value='0' onchange='dataRep[this.name]=this.value;viewAdmissionlist();'>End of Year";
					repsemcount0++;
				}
			}

		}
		//}
	}


	tStr += "</div>";

	tStr += "</div></br>";

	document.getElementById('SemDiv').innerHTML = tStr;
	document.getElementById('academicYear').disabled = true;
	document.getElementById('degreeWiseAdmision').disabled = true;
}


//student one by one
/*function formAdmissionCardForm(dsp){
	
	
	
//title1 ="FACULTY OF SOCIAL SCIENCES - UNIVERSITY OF KELANIYA" 

//title2 = "MA/MSSC Examination 2013";
title1 = "Examination Admission Card";
		str = "";

	if(dsp == "formAdmissionCardForm"){
				//alert(studentNoArr);
			

			keyDisabled = "Disabled";	

			
			str  = "<div id='addApplicationForm'>";
			str += "<table  ><tr><td>"
			//str += '</br><h10><center><font color="#bd3303">'+title1+'</font></center></h10></br>';
			//str += '<center><font color="#bd3303">'+title2+'</font></center></br>';
			str += '<center><font color="#bd3303">'+title1+'</font></center></br>';
	
			
			str +="<div style='clear:both'>";
			str +='<hr>';
			str += '<form name="maintainAdmissionCardForm" >';
			

			
			for(studentNoLoop=0; studentNoLoop<studentNoArr.length; studentNoLoop++){
			
				if(studentNameArr[studentNoLoop] != ""){
						for(var i=0; i<studentNoLength; i++){
	
							if(studentNoArr[studentNoLoop]==substudentnoArr[i]){
					if (substudentnoArr.indexOf(substudentnoArr[i]) == substudentnoArr.lastIndexOf(substudentnoArr[i]) || (substudentnoArr.indexOf(substudentnoArr[i]) != substudentnoArr.lastIndexOf(substudentnoArr[i]) && substudentnoArr.indexOf(substudentnoArr[i])==i)){
							studentNameList += "<option value='"+studentNameArr[studentNoLoop]+"'>";
							}
						}
					}
				}
				if(studentNoArr[studentNoLoop] != ""){
						for(var i=0; i<studentNoLength; i++){
	
							if(studentNoArr[studentNoLoop]==substudentnoArr[i]){
						if (substudentnoArr.indexOf(substudentnoArr[i]) == substudentnoArr.lastIndexOf(substudentnoArr[i]) || (substudentnoArr.indexOf(substudentnoArr[i]) != substudentnoArr.lastIndexOf(substudentnoArr[i]) && substudentnoArr.indexOf(substudentnoArr[i])==i)){
						studentNoList += "<option value='"+studentNoArr[studentNoLoop]+"'>";
							}
						}
					}
				}
			
			}
			
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'></legend>";
			
		
			
			str +="<div class='longIdentifier'>Student Name</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentName' list='liststudentName' id='studentName' value= '"+dataRep["studentName"].trim()+"' onchange='dataRep[this.name]=this.value; setValuesforAdmission();'>";
			str += "<datalist id='liststudentName'>"+studentNameList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student No</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value; setValuesforAdmission();'>";
			str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
			str += "</div><br>"; 

			str += "<input type='button' id='searchButt' style='margin-top:18px' class='btnD' value='Search' onclick= AdmissionTable();>";
			
			str += "<input type='button' style='margin-top:18px' class='btnD' value='Reset' onclick='refreshAdmission();'>";
			
			str += "</fieldset></div></div>";
			
			
			
			
			
			
			
			str  += "<div id='admissionFormTable'></div>";


			str += "<div style='clear:both'>";
			str += "<center>";
	
			// str += '<input type="button" id="gtPrint" class="btnD" value="Print Admission"  onclick= "printAdmission()" >';
			// str += '<input type="button" id="btnDreset" class="btnD" value="Reset"  onclick= refreshAdmission();></div>';
			// str += '<input type="button" class="btnD" value = "Return" onclick = refreshAdmission();showMenu('+"'formExamMenu'"+')>';
		
			str += '<input type="button" id="btnDlogAdmi" class="btnD" value="logout"  onclick= logOut();></div>';
			
			str += "</div>";
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
			
	}

		return str;
}*/



function AdmissionTable() {


	var newtabStr = "";

	newtabStr += "<div id='admissionForm'>";


	newtabStr += "<div style='margin-top:20px;float:left;clear:both;'>";
	newtabStr += "<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
	newtabStr += "<div class='viewArea' style='clear:none;margin-right:100px;' id='studentName'>" + dataRep["studentName"] + "</div>";
	newtabStr += "<div class=hideLabel>&nbsp;</div>";
	newtabStr += "</div><br/>";

	newtabStr += "<div style='margin-top:20px;float:left;clear:both;'>";
	newtabStr += "<div class='longIdentifier' style='clear:none;'>Student Number</div><div class='colon'>&nbsp;:&nbsp;</div>";
	newtabStr += "<div class='viewArea' style='clear:none;' id='studentNo' >" + dataRep["studentNo"] + "</div>";
	newtabStr += "<div class=hideLabel>&nbsp;</div>";

	newtabStr += "</div><br/>";
	var setMedium = "";
	if (dataRep["medium"] == "si") {
		setMedium = "Sinhala";
	}
	else if (dataRep["medium"] == "en") {
		setMedium = "English";
	}
	newtabStr += "<div style='margin-top:20px;float:left;clear:both;'>";
	newtabStr += "<div class='longIdentifier' style='clear:none;'></div>&nbsp;&nbsp;&nbsp;&nbsp;<div class='colon'>&nbsp;&nbsp;</div>";
	newtabStr += "<div class='viewArea' style='clear:none;' id='degreeTitle' >" + dataRep["degreeTitle"] + "&nbsp;:&nbsp;&nbsp;" + setMedium + "&nbsp;" + "Medium" + "</div>";
	newtabStr += "<div class=hideLabel>&nbsp;</div>";

	newtabStr += "</div><br/>";
	newtabStr += "<div style='clear:both' ></div>";


	newtabStr += "<div id='admissionFormTable'>";
	newtabStr += "<table align='center' border=''><tr>";

	newtabStr += '<tr>';

	newtabStr += '<td align="center">Date/Time</td>';
	newtabStr += '<td align="center">Paper Code</td>';
	newtabStr += '<td align="center">Signatute of Applicant</td>';
	newtabStr += '<td align="center">Signature of Supervisor</td>';


	newtabStr += '</tr>';



	for (var i = 0; i < degreeCodeLength; i++) {
		//alert(studentNoLength);

		//alert(dataRep["studentNo"]);
		//if(dataRep["studentNo"] == studentNoArr[i] && dataRep["studentName"] == studentNameArr[i]){	

		//if (subjectCodeArr.indexOf(subjectCodeArr[i]) == subjectCodeArr.lastIndexOf(subjectCodeArr[i]) || (subjectCodeArr.indexOf(subjectCodeArr[i]) != subjectCodeArr.lastIndexOf(subjectCodeArr[i]) && subjectCodeArr.indexOf(subjectCodeArr[i])==i)){
		if (dataRep["studentNo"] == substudentnoArr[i]) {
			if (subjectCodeArr[i] != null) {
				if (hallnoArr[i] = "K1 201") {

					newtabStr += '<tr id="selectedStudent">';
					newtabStr += '<td>';
					newtabStr += "<div class='investLabel_l'>Date</div>";
					newtabStr += "</br><div class='investView_l' name='outside' id='outside' style='width:170px;'>" + examdateArr[i] + "";
					newtabStr += "</div>";
					newtabStr += "<div class='investView_l' name='outside' id='outside' style='width:110px;'>" + starttimeArr[i] + "-" + endtimeArr[i] + "";
					newtabStr += "</div>";
					newtabStr += '</td>';
					newtabStr += '<td>';
					newtabStr += "<center><div class='investView_l' name='outside' id='outside' style='width:170px;'>" + subjectCodeArr[i] + "</div></center></br>";
					newtabStr += "<div class='investView_l' name='outside' id='outside' style='width:auto;'>" + hallnoArr[i] + "</div>";
				}

				newtabStr += '</td>';
				newtabStr += '<td></td>';
				newtabStr += '<td></td>';
				newtabStr += '</tr>';
			}
		}



	}

	newtabStr += '</tr></table></br></br>';

	newtabStr += "</div>";

	newtabStr += "<div style='clear:both'>";
	newtabStr += "<center>";

	newtabStr += '<input type="button" id="gtPrint" class="btnD" value="Print Admission"  onclick= "printAdmission()" >';
	newtabStr += '<input type="button" id="btnDreset" class="btnD" value="Reset"  onclick= refreshAdmission();></div>';

	if (dataRep['roleName'] == 'Coordinator' || dataRep['roleName'] == 'Technical Coordinator') {
		newtabStr += '<input type="button" class="btnD" value = "Return to Coordinator Menu" onclick = "returnCreateTimeTable();showMenu(' + "'formCoordinatorMenu'" + ')">';
	}
	if (dataRep['roleName'] == 'Examination Department') {
		newtabStr += '<input type="button" class="btnD" value = "Return to Examination Menu" onclick = "returnCreateTimeTable();showMenu(' + "'formExamMenu'" + ')">';
	}


	//newtabStr += '<input type="button" class="btnD" value = "Return to Examination Menu" onclick =showMenu('+"'formExamMenu'"+')>';
	newtabStr += '<input type="button"  class="btnD" value="logout"  onclick= logOut();></div>';

	//	str += '<input type="button" id="btnDlog" class="btnD" value="logout"  onclick= logOut();></div>';

	newtabStr += "</div>";
	document.getElementById('searchButt').style.display = "none";
	document.getElementById('btnDlogAdmi').style.display = "none";

	document.getElementById('admissionFormTable').innerHTML = newtabStr;

}





