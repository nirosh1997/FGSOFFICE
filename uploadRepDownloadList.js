
function formRepDownloadList(dsp) {

	str = "";
	title = "Repeat Attempt Upload/Download Examination Results";

	if (dsp == "formRepDownloadList") {
		str = "<div id='formRepDownloadList'>";
		str += "<table><tr><td>";
		str += '<h2 >' + title + '</h2><hr>';
		str += '<form id="formRepDownloadList"><br>';
		str += "<div>";

		str += "<div style='clear:both'>";
		str += '<input type="button" class ="btnD" value="Return to Examination Menu" onclick="resetRepResultUpload();resetRepResultDownload();showMenu(' + "'formExamMenu'" + ');">';
		str += '<input type="button" id="btnDlog" class="btnD" value="logout"  onclick= logOut();>';
		str += "</div>";

		str += '</td></table></div>';
		str += '</form>';
	}
	return str;

}
//--------------------------------------moderating sheet starts----------------------------------------------
function RepexamDownloadModeratingSheetTemp(degTitle, SubName, SubCode, BatchYear) {
	if (ex_CodeLength != 0) {
		//eng
		var engCount = 0;
		var engRowCount = 1;
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + " - English Medium </div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Repeat Examination</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Moderating Sheet</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examination Center:</div>";
		newStr += "<div class='investLabel' style='text-align:left;'>No of Students:</div>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examination Date/Time:</div>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;' >1st Examiner</th>";
		newStr += "<th style='border: 1px solid black;' >2nd Examiner</th>";
		newStr += "<th style='border: 1px solid black;' >Average</th>";
		newStr += "<th style='border: 1px solid black;' >Tute/Assignment</th>";
		newStr += "<th style='border: 1px solid black;' >Total</th>";
		newStr += "<th style='border: 1px solid black;' >Grade</th>";
		newStr += "</tr>";
		//eng

		//sin
		var sinCount = 0;
		var sinRowCount = 1;
		var newStrSIn = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStrSIn += "<div id='topics1' class='info'></div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + " - Sinhala Medium </div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Repeat Examination</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Moderating Sheet</div>";
		newStrSIn += "<br>";
		newStrSIn += "<div class='investLabel' style='text-align:left;'>Examination Center:</div>";
		newStrSIn += "<div class='investLabel' style='text-align:left;'>No of Students:</div>";
		newStrSIn += "<div class='investLabel' style='text-align:left;'>Examination Date/Time:</div>";
		newStrSIn += "<br>";
		newStrSIn += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStrSIn += "<tr>";
		newStrSIn += "<th style='border: 1px solid black;'>No</th>";
		newStrSIn += "<th style='border: 1px solid black;'>Student No</th>";
		newStrSIn += "<th style='border: 1px solid black;' >1st Examiner</th>";
		newStrSIn += "<th style='border: 1px solid black;' >2nd Examiner</th>";
		newStrSIn += "<th style='border: 1px solid black;' >Average</th>";
		newStrSIn += "<th style='border: 1px solid black;' >Tute/Assignment</th>";
		newStrSIn += "<th style='border: 1px solid black;' >Total</th>";
		newStrSIn += "<th style='border: 1px solid black;' >Grade</th>";
		newStrSIn += "</tr>";
		//sin


		//eng	
		for (i = 0; i < ex_CodeLength; i++) {
			if (ex_studentMediumArr[i] == "en") {
				newStr += "<tr>";
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + ex_studentNoArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr += "</tr>";
				newStr += "</div><dev><br>";
				engCount++;
				engRowCount++;
			}

			//eng	

			//sin	
			if (ex_studentMediumArr[i] == "si") {
				newStrSIn += "<tr>";
				newStrSIn += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
				newStrSIn += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + ex_studentNoArr[i] + '</td>';
				newStrSIn += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStrSIn += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStrSIn += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStrSIn += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStrSIn += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStrSIn += '<td style="border:1px solid black;word-wrap:break-word;width:75px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStrSIn += "</tr>";
				newStrSIn += "</div><dev><br>";
				sinCount++;
				sinRowCount++;
			}
		}
		//sin	

		//eng
		newStr += "</table>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Signature of</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Head of the Department...............................Date...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Dean...............................Date...............................</div>";
		newStr += "<br>";
		//eng


		//sin
		newStrSIn += "</table>";
		newStrSIn += "<br>";
		newStrSIn += "<div class='investLabel' style='text-align:left;'>Signature of</div>";
		newStrSIn += "<br>";
		newStrSIn += "<div class='investLabel' style='text-align:left;'>Head of the Department...............................Date...............................</div>";
		newStrSIn += "<br>";
		newStrSIn += "<div class='investLabel' style='text-align:left;'>Dean...............................Date...............................</div>";
		newStrSIn += "<br>";
		//sin

		//eng
		var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ") Moderating Sheet.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
		//eng

		//sin
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ") Moderating Sheet.xls";
		var csvDataSin = new Blob([newStrSIn], { type: 'text/csv;charset=utf-8;' });
		//sin


		//IE11 & Edge
		//eng
		if (engCount != 0) {
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
		//eng


		//sin
		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		//sin




		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}


//------------------------------moderating sheet ends --------------------------------------------------------------------------------------------------------------------------  


//------------------------------Enter Results Sheet Stars---------------------------------------------------------------------------------------------------------------------------
function RepexamDownloadSheetTemp(degTitle, SubName, SubCode, BatchYear) {
	if (ex_CodeLength != 0) {
		//alert(ex_studentMediumArr);

		//eng
		var data = new Array();
		var engCount = 0;
		//sin
		var dataSin = new Array();
		var sinCount = 0;
		//eng
		for (i = 0; i < ex_CodeLength; i++) {
			var Repreason = "";
			if (ex_studentReasonArr[i] == "Repeat") {
				Repreason = "R"
			}
			if (ex_studentReasonArr[i] == "Medical/Other_Reasons") {
				Repreason = "M"
			}
			if (ex_studentMediumArr[i] == "en") {
				data[i] = [[ex_studentNoArr[i], ex_studentNameArr[i], '', '', Repreason]];
				engCount++;
			}
			else if (ex_studentMediumArr[i] == "si") {
				dataSin[i] = [[ex_studentNoArr[i], ex_studentNameArr[i], '', '', Repreason]];
				sinCount++;
			}
		}

		//eng
		var csvHead = 'Student No,Name,Examiner 1,Examiner 2,Reason\n';
		data.forEach(function (row) {
			csvHead += row.join(',');
			csvHead += "\n";
		});

		//sin
		var csvHeadSin = 'Student No,Name,Examiner 1,Examiner 2,Reason\n';
		dataSin.forEach(function (row) {
			csvHeadSin += row.join(',');
			csvHeadSin += "\n";
		});


		//eng
		var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ").csv";
		var csvData = new Blob([csvHead], { type: 'text/csv;charset=utf-8;' });

		//sin
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ").csv";
		var csvDataSin = new Blob([csvHeadSin], { type: 'text/csv;charset=utf-8;' });

		//IE11 & Edge
		//eng
		if (engCount != 0) {
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

		//sin
		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}




		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}

//------------------------------Enter Results Sheet Ends---------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------mark sheet starts---------------------------------------------------------------------------------------------------------------
function RepexamDownloadMarkSheetTemp(degTitle, SubName, SubCode, BatchYear) {
	if (ex_CodeLength != 0) {


		//eng 1examiner
		var engCount = 0;
		var engEX1RowCount = 1;
		var newStr = "<div  id='inputs' style='clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		//newStr +="<img src='img/logo.png' style='width:80px;height:80px;align:center;'/>";
		newStr += "<h3 style='text-align:center;font-weight:bold;font-size:16px;'>Faculty of Graduate Studies</h3>";
		newStr += "<h3 style='text-align:center;font-weight:bold;font-size:16px;'>University of Kelaniya</h3>";
		newStr += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>" + degTitle + " Degree Programme</h4>";
		newStr += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>" + SubName + " (" + SubCode + ")</h4>";
		newStr += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Academic Year - " + BatchYear + " - English Medium </h4>";
		newStr += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Mark Sheet - First Examiner</h4>";
		newStr += "<hr/>";
		newStr += "<div style='clear:both;text-align:justify;font-size:12px;'>The Supervisor should complete the relevant parts of sheet and enclose with answer scripts. Students who were not present for the examination, 'Absent' against their Student No. in the mark sheet. Examiner should sign each page.</div>";
		newStr += "<hr/>";
		newStr += "<br>";

		newStr += '<table width="705" cellspacing="1" cellpadding="1">';
		newStr += '<tbody>';
		newStr += '<tr>';
		newStr += '<td width="310">';
		newStr += '<p>Examination Hall :&nbsp; ........................................</p>';
		newStr += '</td>';
		newStr += '<td width="392">';
		newStr += '<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStr += '</td>';
		newStr += '</tr>';
		newStr += '<tr>';
		newStr += '<td width="310">';
		newStr += '<p>Examination Date &amp; Time :........................................................................</p>';
		newStr += '</td>';
		newStr += '<td width="392">';
		newStr += '<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStr += '</td>';
		newStr += '</tr>';
		newStr += '<tr>';
		newStr += '<td width="310">';
		newStr += '<p>No of Students :...............................................</p>';
		newStr += '</td>';
		newStr += '<td width="392">';
		newStr += '<p>&nbsp;</p>';
		newStr += '</td>';
		newStr += '</tr>';
		newStr += '</tbody>';
		newStr += '</table>';

		newStr += "<br>";
		//newStr +="<br>";
		newStr += "<table cellspacing='5' style='border-collapse: collapse;border: 1px solid #524f4f;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>No</th>";
		newStr += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Student No</th>";
		newStr += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;Total&nbsp;&nbsp;</th>";
		for (var j = 1; j < 11; j++) {
			newStr += "<th style='border: 1px solid #524f4f;width:300px;font-size:14px;font-family:Times New Roman;' >&nbsp;&nbsp;&nbsp;Q" + j + "&nbsp;&nbsp;&nbsp;</th>";
		}
		newStr += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-1</th>";
		newStr += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-2</th>";
		newStr += "</tr>";
		//eng 1examiner

		//eng 2examiner
		var engCount2 = 0;
		var engEX2RowCount = 1;
		var newStr2 = "<div  id='inputs' style='clear:both'>";
		newStr2 += "<div id='topics1' class='info'></div>";
		//newStr2 +="<img src='img/logo.png' style='width:80px;height:80px;align:center;'/>";
		newStr2 += "<h3 style='text-align:center;font-weight:bold;font-size:16px;'>Faculty of Graduate Studies</h3>";
		newStr2 += "<h3 style='text-align:center;font-weight:bold;font-size:16px;'>University of Kelaniya</h3>";
		newStr2 += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>" + degTitle + " Degree Programme</h4>";
		newStr2 += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>" + SubName + " (" + SubCode + ")</h4>";
		newStr2 += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Academic Year - " + BatchYear + " - English Medium </h4>";
		newStr2 += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Mark Sheet - Second Examiner</h4>";
		newStr2 += "<hr/>";
		newStr2 += "<div style='clear:both;text-align:justify;font-size:12px;'>The Supervisor should complete the relevant parts of sheet and enclose with answer scripts. Students who were not present for the examination, 'Absent' against their Student No. in the mark sheet. Examiner should sign each page.</div>";
		newStr2 += "<hr/>";
		newStr2 += "<br>";

		newStr2 += '<table width="705" cellspacing="1" cellpadding="1">';
		newStr2 += '<tbody>';
		newStr2 += '<tr>';
		newStr2 += '<td width="310">';
		newStr2 += '<p>Examination Hall :&nbsp; ........................................</p>';
		newStr2 += '</td>';
		newStr2 += '<td width="392">';
		newStr2 += '<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStr2 += '</td>';
		newStr2 += '</tr>';
		newStr2 += '<tr>';
		newStr2 += '<td width="310">';
		newStr2 += '<p>Examination Date &amp; Time :........................................................................</p>';
		newStr2 += '</td>';
		newStr2 += '<td width="392">';
		newStr2 += '<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStr2 += '</td>';
		newStr2 += '</tr>';
		newStr2 += '<tr>';
		newStr2 += '<td width="310">';
		newStr2 += '<p>No of Students :...............................................</p>';
		newStr2 += '</td>';
		newStr2 += '<td width="392">';
		newStr2 += '<p>&nbsp;</p>';
		newStr2 += '</td>';
		newStr2 += '</tr>';
		newStr2 += '</tbody>';
		newStr2 += '</table>';

		newStr2 += "<br>";
		//newStr2 +="<br>";
		newStr2 += "<table cellspacing='5' style='border-collapse: collapse;border: 1px solid #524f4f;'>";
		newStr2 += "<tr>";
		newStr2 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>No</th>";
		newStr2 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Student No</th>";
		newStr2 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;Total&nbsp;&nbsp;</th>";
		for (var j = 1; j < 11; j++) {
			newStr2 += "<th style='border: 1px solid #524f4f;width:300px;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;&nbsp;Q" + j + "&nbsp;&nbsp;&nbsp;</th>";
		}
		newStr2 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-1</th>";
		newStr2 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-2</th>";
		newStr2 += "</tr>";
		//eng 2examiner


		//sin 1examiner
		var sinCount = 0;
		var sinEX1RowCount = 1;
		var newStrSIn = "<div  id='inputs' style='clear:both'>";
		newStrSIn += "<div id='topics1' class='info'></div>";
		//newStrSIn +="<img src='img/logo.png' style='width:80px;height:80px;align:center;'/>";
		newStrSIn += "<h3 style='text-align:center;font-weight:bold;font-size:16px;'>Faculty of Graduate Studies</h3>";
		newStrSIn += "<h3 style='text-align:center;font-weight:bold;font-size:16px;'>University of Kelaniya</h3>";
		newStrSIn += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>" + degTitle + " Degree Programme</h4>";
		newStrSIn += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>" + SubName + " (" + SubCode + ")</h4>";
		newStrSIn += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Academic Year - " + BatchYear + " - Sinhala Medium </h4>";
		newStrSIn += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Mark Sheet - First Examiner</h4>";
		newStrSIn += "<hr/>";
		newStrSIn += "<div style='clear:both;text-align:justify;font-size:12px;'>The Supervisor should complete the relevant parts of sheet and enclose with answer scripts. Students who were not present for the examination, 'Absent' against their Student No. in the mark sheet. Examiner should sign each page.</div>";
		newStrSIn += "<hr/>";
		newStrSIn += "<br>";

		newStrSIn += '<table width="705" cellspacing="1" cellpadding="1">';
		newStrSIn += '<tbody>';
		newStrSIn += '<tr>';
		newStrSIn += '<td width="310">';
		newStrSIn += '<p>Examination Hall :&nbsp; ........................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '<td width="392">';
		newStrSIn += '<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '</tr>';
		newStrSIn += '<tr>';
		newStrSIn += '<td width="310">';
		newStrSIn += '<p>Examination Date &amp; Time :........................................................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '<td width="392">';
		newStrSIn += '<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '</tr>';
		newStrSIn += '<tr>';
		newStrSIn += '<td width="310">';
		newStrSIn += '<p>No of Students :...............................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '<td width="392">';
		newStrSIn += '<p>&nbsp;</p>';
		newStrSIn += '</td>';
		newStrSIn += '</tr>';
		newStrSIn += '</tbody>';
		newStrSIn += '</table>';

		newStrSIn += "<br>";
		//newStrSIn +="<br>";


		newStrSIn += "<table cellspacing='5' style='border-collapse: collapse;border: 1px solid #524f4f;'>";
		newStrSIn += "<tr>";
		newStrSIn += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>No</th>";
		newStrSIn += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Student No</th>";
		newStrSIn += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;Total&nbsp;&nbsp;</th>";
		for (var j = 1; j < 11; j++) {
			newStrSIn += "<th style='border: 1px solid #524f4f;width:300px;font-size:14px;font-family:Times New Roman;width:100px;' >&nbsp;&nbsp;&nbsp;Q" + j + "&nbsp;&nbsp;&nbsp;</th>";
		}
		newStrSIn += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-1</th>";
		newStrSIn += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-2</th>";
		newStrSIn += "</tr>";
		//sin 1examiner

		//sin 2examiner
		var sinCount1 = 0;
		var sinEX2RowCount = 1;
		var newStrSIn1 = "<div  id='inputs' style='clear:both'>";
		newStrSIn1 += "<div id='topics1' class='info'></div>";
		//newStrSIn1 +="<img src='img/logo.png' style='width:80px;height:80px;align:center;'/>";
		newStrSIn1 += "<h3 style='text-align:center;font-weight:bold;font-size:16px;'>Faculty of Graduate Studies</h3>";
		newStrSIn1 += "<h3 style='text-align:center;font-weight:bold;font-size:16px;'>University of Kelaniya</h3>";
		newStrSIn1 += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>" + degTitle + " Degree Programme</h4>";
		newStrSIn1 += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>" + SubName + " (" + SubCode + ")</h4>";
		newStrSIn1 += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Academic Year - " + BatchYear + " - Sinhala Medium </h4>";
		newStrSIn1 += "<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Mark Sheet - Second Examiner</h4>";
		newStrSIn1 += "<hr/>";
		newStrSIn1 += "<div style='clear:both;text-align:justify;font-size:12px;'>The Supervisor should complete the relevant parts of sheet and enclose with answer scripts. Students who were not present for the examination, 'Absent' against their Student No. in the mark sheet. Examiner should sign each page.</div>";
		newStrSIn1 += "<hr/>";
		newStrSIn1 += "<br>";

		newStrSIn1 += '<table width="705" cellspacing="1" cellpadding="1">';
		newStrSIn1 += '<tbody>';
		newStrSIn1 += '<tr>';
		newStrSIn1 += '<td width="310">';
		newStrSIn1 += '<p>Examination Hall :&nbsp; ........................................</p>';
		newStrSIn1 += '</td>';
		newStrSIn1 += '<td width="392">';
		newStrSIn1 += '<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStrSIn1 += '</td>';
		newStrSIn1 += '</tr>';
		newStrSIn1 += '<tr>';
		newStrSIn1 += '<td width="310">';
		newStrSIn1 += '<p>Examination Date &amp; Time :........................................................................</p>';
		newStrSIn1 += '</td>';
		newStrSIn1 += '<td width="392">';
		newStrSIn1 += '<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStrSIn1 += '</td>';
		newStrSIn1 += '</tr>';
		newStrSIn1 += '<tr>';
		newStrSIn1 += '<td width="310">';
		newStrSIn1 += '<p>No of Students :...............................................</p>';
		newStrSIn1 += '</td>';
		newStrSIn1 += '<td width="392">';
		newStrSIn1 += '<p>&nbsp;</p>';
		newStrSIn1 += '</td>';
		newStrSIn1 += '</tr>';
		newStrSIn1 += '</tbody>';
		newStrSIn1 += '</table>';

		newStrSIn1 += "<br>";
		//newStrSIn1 +="<br>";


		newStrSIn1 += "<table cellspacing='5' style='border-collapse: collapse;border: 1px solid #524f4f;'>";
		newStrSIn1 += "<tr>";
		newStrSIn1 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>No</th>";
		newStrSIn1 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Student No</th>";
		newStrSIn1 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;Total&nbsp;&nbsp;</th>";
		for (var j = 1; j < 11; j++) {
			newStrSIn1 += "<th style='border: 1px solid #524f4f;width:300px;font-size:14px;font-family:Times New Roman;width:100px;' >&nbsp;&nbsp;&nbsp;Q" + j + "&nbsp;&nbsp;&nbsp;</th>";
		}
		newStrSIn1 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-1</th>";
		newStrSIn1 += "<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-2</th>";
		newStrSIn1 += "</tr>";
		//sin 2examiner

		for (i = 0; i < ex_CodeLength; i++) {
			//eng 1examiner
			if (ex_studentMediumArr[i] == "en") {
				newStr += "<tr>";
				newStr += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:100px;heigth:200px;">' + engEX1RowCount + '</td>';
				newStr += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">' + ex_studentNoArr[i] + '&nbsp;&nbsp;</td>';
				newStr += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				for (var j = 1; j < 13; j++) {
					newStr += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				}
				newStr += "</tr>";
				//newStr += "</div><br>"; 
				engCount++;
				engEX1RowCount++;

			}
			//eng 1examiner

			//eng 2examiner
			if (ex_studentMediumArr[i] == "en") {
				newStr2 += "<tr>";
				newStr2 += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:100px;heigth:200px;">' + engEX2RowCount + '</td>';
				newStr2 += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">' + ex_studentNoArr[i] + '&nbsp;&nbsp;</td>';
				newStr2 += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				for (var j = 1; j < 13; j++) {
					newStr2 += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				}

				newStr2 += "</tr>";
				//newStr2 += "</div><br>"; 
				engCount2++;
				engEX2RowCount++;

			}
			//eng 2examiner

			//sin 1examiner
			if (ex_studentMediumArr[i] == "si") {
				newStrSIn += "<tr>";
				newStrSIn += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:100px;heigth:200px;">' + sinEX1RowCount + '</td>';
				newStrSIn += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">' + ex_studentNoArr[i] + '&nbsp;&nbsp;</td>';
				newStrSIn += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				for (var j = 1; j < 13; j++) {
					newStrSIn += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				}

				newStrSIn += "</tr>";
				//newStrSIn += "</div><br>"; 
				sinCount++;
				sinEX1RowCount++;


			}
			//sin 1examiner

			//sin 2examiner
			if (ex_studentMediumArr[i] == "si") {
				newStrSIn1 += "<tr>";
				newStrSIn1 += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:100px;heigth:200px;">' + sinEX2RowCount + '</td>';
				newStrSIn1 += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">' + ex_studentNoArr[i] + '&nbsp;&nbsp;</td>';
				newStrSIn1 += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				for (var j = 1; j < 13; j++) {
					newStrSIn1 += '<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				}

				newStrSIn1 += "</tr>";
				//newStrSIn1 += "</div><br>"; 
				sinCount1++;
				sinEX2RowCount++;

			}
			//sin 2examiner

		}

		//eng 1examiner
		newStr += "</table>";
		newStr += "<br>";
		newStr += "<div class='page-footer-space'>";
		newStr += "<p><i>I certify that all the answer scripts were marked by me.</i></p>";
		newStr += "<p>Name of Examiner: ............................................&nbsp;Signature of Examiner: ....................&nbsp;Date: ...............................</p>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Examiner: ...................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signature of Examiner: ............................... Date: ...............................</div>";
		newStr += "</div>";
		newStr += "<br>";


		//eng 1examiner

		//eng 2examiner
		newStr2 += "</table>";
		newStr2 += "<br>";
		newStr2 += "<div class='page-footer-space'>";
		newStr2 += "<p><i>I certify that all the answer scripts were marked by me.</i></p>";
		newStr2 += "<p>Name of Examiner: ............................................&nbsp;Signature of Examiner: ....................&nbsp;Date: ...............................</p>";
		// newStr2 +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Examiner: ...................................................</div>";
		// newStr2 +="<br>";
		// newStr2 +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signature of Examiner: ............................... Date: ...............................</div>";
		newStr2 += "</div>";
		newStr2 += "<br>";

		//eng 2examiner


		//sin 1examiner
		newStrSIn += "</table>";
		newStrSIn += "<br>";
		newStrSIn += "<div class='page-footer-space'>";
		newStrSIn += "<p><i>I certify that all the answer scripts were marked by me.</i></p>";
		newStrSIn += "<p>Name of Examiner: ............................................&nbsp;Signature of Examiner: ....................&nbsp;Date: ...............................</p>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Examiner: ...................................................</div>";
		// newStrSIn +="<br>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signature of Examiner: ............................... Date: ...............................</div>";
		newStrSIn += "</div>";
		newStrSIn += "<br>";

		//sin 1examiner

		//sin 2examiner
		newStrSIn1 += "</table>";
		newStrSIn1 += "<br>";
		newStrSIn1 += "<div class='page-footer-space'>";
		newStrSIn1 += "<p><i>I certify that all the answer scripts were marked by me.</i></p>";
		newStrSIn1 += "<p>Name of Examiner: ............................................&nbsp;Signature of Examiner: ....................&nbsp;Date: ...............................</p>";
		// newStrSIn1 +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Examiner: ...................................................</div>";
		// newStrSIn1 +="<br>";
		// newStrSIn1 +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signature of Examiner: ............................... Date: ...............................</div>";
		newStrSIn1 += "</div>";
		newStrSIn1 += "<br>";

		//sin 2examiner

		//eng 1examiner
		var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ") First Examiner Marks Sheet.doc";
		var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });
		//eng 1examiner

		//eng 2examiner
		var exportFilename1 = BatchYear + " - English - " + SubName + " (" + SubCode + ") Second Examiner Marks Sheet.doc";
		var csvData1 = new Blob([newStr2], { type: '.ms-word;charset=utf-8;' });
		//eng 2examiner


		//sin 1examiner
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ") First Examiner Marks Sheet.doc";
		var csvDataSin = new Blob([newStrSIn], { type: '.ms-word;charset=utf-8;' });
		//sin 1examiner

		//sin 2examiner
		var exportFilenameSin1 = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ") Second Examiner Marks Sheet.doc";
		var csvDataSin1 = new Blob([newStrSIn1], { type: '.ms-word;charset=utf-8;' });
		//sin 2examiner

		//IE11 & Edge

		//eng 1examiner
		if (engCount != 0) {
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
		//eng 1examiner

		//eng 2examiner
		if (engCount2 != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvData1, exportFilename1);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvData1);
				link.setAttribute('download', exportFilename1);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		//eng 2examiner


		//sin 1examiner
		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		//sin 1examiner


		//sin 2examiner
		if (sinCount1 != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin1, exportFilenameSin1);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin1);
				link.setAttribute('download', exportFilenameSin1);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		//sin 2examiner




		resetResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}

//------------------------------Marks sheets ends--------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------Attendance Sheet starts--------------------------------------------------------------------------------------------------
function RepexamDownloadAttendanceTemp(degTitle, SubName, SubCode, BatchYear) {
	if (ex_CodeLength != 0) {

		//eng
		var engCount = 0;
		var engRowCount = 1;
		var newStr = "<div  id='inputs' style='margin:0px 5px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>Faculty of Graduate Studies</h3></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>University of Kelaniya</h3></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>" + degTitle + " Degree Programme</h4></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>" + SubName + " (" + SubCode + ")</h4></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Academic Year - " + BatchYear + " - English Medium </h4></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Repeat Examination</h4></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Exam Attendance Sheet</h4></div>";
		newStr += "<hr/>";
		newStr += "<br>";
		newStr += '<table width="705" cellspacing="1" cellpadding="1">';
		newStr += '<tbody>';
		newStr += '<tr>';
		newStr += '<td width="310">';
		newStr += '<p>Examination Hall :&nbsp; ........................................</p>';
		newStr += '</td>';
		newStr += '<td width="392">';
		newStr += '<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStr += '</td>';
		newStr += '</tr>';
		newStr += '<tr>';
		newStr += '<td width="310">';
		newStr += '<p>Examination Date &amp; Time :........................................................................</p>';
		newStr += '</td>';
		newStr += '<td width="392">';
		newStr += '<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStr += '</td>';
		newStr += '</tr>';
		newStr += '<tr>';
		newStr += '<td width="310">';
		newStr += '<p>No of Students :...............................................</p>';
		newStr += '</td>';
		newStr += '<td width="392">';
		newStr += '<p>&nbsp;</p>';
		newStr += '</td>';
		newStr += '</tr>';
		newStr += '</tbody>';
		newStr += '</table>';
		newStr += "<br>";
		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border:1px solid;'>";
		newStr += "<tr>";
		newStr += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>No</th>";
		newStr += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Student No</th>";
		newStr += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Name</th>";
		newStr += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Signature</th>";
		newStr += "</tr>";


		//eng

		//sin
		var sinCount = 0;
		var sinRowCount = 1;
		var newStrSIn = "<div  id='inputs' style='margin:0px 5px;clear:both'>";
		newStrSIn += "<div id='topics1' class='info'></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>Faculty of Graduate Studies</h3></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>University of Kelaniya</h3></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>" + degTitle + " Degree Programme</h4></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>" + SubName + " (" + SubCode + ")</h4></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Academic Year - " + BatchYear + " - Sinhala Medium </h4></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Repeat Examination</h4></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Exam Attendance Sheet</h4></div>";
		newStrSIn += "<hr/>";
		newStrSIn += "<br>";
		newStrSIn += '<table width="705" cellspacing="1" cellpadding="1">';
		newStrSIn += '<tbody>';
		newStrSIn += '<tr>';
		newStrSIn += '<td width="310">';
		newStrSIn += '<p>Examination Hall :&nbsp; ........................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '<td width="392">';
		newStrSIn += '<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '</tr>';
		newStrSIn += '<tr>';
		newStrSIn += '<td width="310">';
		newStrSIn += '<p>Examination Date &amp; Time :........................................................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '<td width="392">';
		newStrSIn += '<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '</tr>';
		newStrSIn += '<tr>';
		newStrSIn += '<td width="310">';
		newStrSIn += '<p>No of Students :...............................................</p>';
		newStrSIn += '</td>';
		newStrSIn += '<td width="392">';
		newStrSIn += '<p>&nbsp;</p>';
		newStrSIn += '</td>';
		newStrSIn += '</tr>';
		newStrSIn += '</tbody>';
		newStrSIn += '</table>';
		newStrSIn += "<br>";
		newStrSIn += "<br>";
		newStrSIn += "<table style='border-collapse: collapse;border:1px; solid'>";
		newStrSIn += "<tr>";
		newStrSIn += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>No</th>";
		newStrSIn += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Student No</th>";
		newStrSIn += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Name</th>";
		newStrSIn += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Signature</th>";
		newStrSIn += "</tr>";

		//sin


		for (i = 0; i < ex_CodeLength; i++) {
			//eng
			if (ex_studentMediumArr[i] == "en") {
				newStr += "<tr>";
				newStr += '<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">' + engRowCount + '</td>';
				newStr += '<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">' + ex_studentNoArr[i] + '</td>';
				newStr += '<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:400px;">' + ex_studentNameArr[i] + '</td>';
				newStr += '<td style="border:1px solid #524f4f;word-wrap:break-word;width:100px;font-size:14px;font-family:Times New Roman;"></td>';
				newStr += "</tr>";
				newStr += "</div><dev><br>";
				engCount++;
				engRowCount++;
			}
			//eng

			//sin
			if (ex_studentMediumArr[i] == "si") {
				newStrSIn += "<tr>";
				newStrSIn += '<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">' + sinRowCount + '</td>';
				newStrSIn += '<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">' + ex_studentNoArr[i] + '</td>';
				newStrSIn += '<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:400px;">' + ex_studentNameArr[i] + '</td>';
				newStrSIn += '<td style="border:1px solid #524f4f;word-wrap:break-word;width:100px;font-size:14px;font-family:Times New Roman;"></td>';
				newStrSIn += "</tr>";
				newStrSIn += "</div><dev><br>";
				sinCount++;
				sinRowCount++;
			}
			//sin
		}


		//eng
		newStr += "</table>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Supervisor: ................................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signatute of Supervisor: ...........................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Date: ...........................................</div>";
		//eng

		//sin
		newStrSIn += "</table>";
		// newStrSIn +="<br>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Supervisor: ................................................................</div>";
		// newStrSIn +="<br>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signatute of Supervisor: ...........................................................</div>";
		// newStrSIn +="<br>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Date:...........................................</div>";
		//sin

		//eng
		// var exportFilename = BatchYear + " - English - " + SubName+" ("+SubCode+") Attendance Sheet.xls";
		// var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});

		var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ") Attendance Sheet.doc";
		var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });



		//eng

		//sin
		// var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+") Attendance Sheet.xls";
		// var csvDataSin = new Blob([newStrSIn], {type: 'text/csv;charset=utf-8;'});

		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ") Attendance Sheet.doc";
		var csvDataSin = new Blob([newStrSIn], { type: '.ms-word;charset=utf-8;' });

		//sin

		//IE11 & Edge
		//eng
		if (engCount != 0) {
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
		//eng

		//sin
		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		//sin

		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}

//-------------------------------------------------Attendance Sheet ends--------------------------------------------------------------------------------------------------



//----------------------------------------------Table Stickers starts---------------------------------------------------------------------------------------------------------------


function examDownloadStickersTemp(degTitle, SubName, SubCode, BatchYear) {
	if (ex_CodeLength != 0) {

		//eng
		var engCount = 0;
		var engRowCount = 1;
		var newStr = "<div  id='inputs' style='margin:0px 5px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>Faculty of Graduate Studies</h3></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>University of Kelaniya</h3></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>" + degTitle + " Degree Programme</h4></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>" + SubName + " (" + SubCode + ")</h4></div>";
		newStr += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Academic Year - " + BatchYear + " - English Medium </h4></div>";
		//newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Exam Attendance Sheet</h4></div>";
		newStr += "<hr/>";
		newStr += "<br>";
		//newStr +="<div class='investLabel' style='text-align:left;font-weight:bold;font-size:14px;'>Examination Hall:.......................................................</div>";
		//newStr +="<br>";
		//newStr +="<div class='investLabel' style='text-align:left;font-weight:bold;font-size:14px;'>Examination Date:...........................................</div>";
		//newStr +="<br>";
		//newStr +="<br>";
		newStr += "<table style='border-collapse: collapse;border:1px solid;'>";
		newStr += "<tr>";
		newStr += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>No</th>";
		newStr += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Student No</th>";
		//newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Name</th>";
		//newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Signature</th>";
		newStr += "</tr>";


		//eng

		//sin
		var sinCount = 0;
		var sinRowCount = 1;
		var newStrSIn = "<div  id='inputs' style='margin:0px 5px;clear:both'>";
		newStrSIn += "<div id='topics1' class='info'></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>Faculty of Graduate Studies</h3></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>University of Kelaniya</h3></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>" + degTitle + " Degree Programme</h4></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>" + SubName + " (" + SubCode + ")</h4></div>";
		newStrSIn += "<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Academic Year - " + BatchYear + " - Sinhala Medium </h4></div>";
		//newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Exam Attendance Sheet</h4></div>";
		newStrSIn += "<hr/>";
		newStrSIn += "<br>";
		//newStrSIn +="<div class='investLabel' style='text-align:left;font-weight:bold;font-size:14px;'>Examination Hall:.......................................................</div>";
		//newStrSIn +="<br>";
		//newStrSIn +="<div class='investLabel' style='text-align:left;font-weight:bold;font-size:14px;'>Examination Date:...........................................</div>";
		//newStrSIn +="<br>";
		//newStrSIn +="<br>";
		newStrSIn += "<table style='border-collapse: collapse;border:1px; solid'>";
		newStrSIn += "<tr>";
		newStrSIn += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>No</th>";
		newStrSIn += "<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Student No</th>";
		//newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Name</th>";
		//newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Signature</th>";
		newStrSIn += "</tr>";

		//sin


		for (i = 0; i < ex_CodeLength; i++) {
			//eng
			if (ex_studentMediumArr[i] == "en") {
				newStr += "<tr>";
				newStr += '<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">' + engRowCount + '</td>';
				newStr += '<td style="border:1px solid #524f4f;font-size:50px;font-family:Times New Roman;text-align:center;width:300px;heigth:100px;">' + ex_studentNoArr[i] + '</td>';
				//newStr+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:400px;">'+ex_studentNameArr[i]+'</td>';
				//newStr+='<td style="border:1px solid #524f4f;word-wrap:break-word;width:100px;font-size:14px;font-family:Times New Roman;"></td>';
				newStr += "</tr>";
				newStr += "</div><div><br>";
				engCount++;
				engRowCount++;
			}
			//eng

			//sin
			if (ex_studentMediumArr[i] == "si") {
				newStrSIn += "<tr>";
				newStrSIn += '<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">' + sinRowCount + '</td>';
				newStrSIn += '<td style="border:1px solid #524f4f;font-size:50px;font-family:Times New Roman;text-align:center;width:300px;heigth:100px;">' + ex_studentNoArr[i] + '</td>';
				//newStrSIn+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:400px;">'+ex_studentNameArr[i]+'</td>';
				//newStrSIn+='<td style="border:1px solid #524f4f;word-wrap:break-word;width:100px;font-size:14px;font-family:Times New Roman;"></td>';
				newStrSIn += "</tr>";
				newStrSIn += "</div><div><br>";
				sinCount++;
				sinRowCount++;
			}
			//sin
		}


		//eng
		newStr += "</table>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Supervisor: ................................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signatute of Supervisor: ...........................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Date: ...........................................</div>";
		// //eng

		//sin
		newStrSIn += "</table>";
		// newStrSIn +="<br>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Supervisor: ................................................................</div>";
		// newStrSIn +="<br>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signatute of Supervisor: ...........................................................</div>";
		// newStrSIn +="<br>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Date:...........................................</div>";
		// //sin

		//eng
		// var exportFilename = BatchYear + " - English - " + SubName+" ("+SubCode+") Attendance Sheet.xls";
		// var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});

		var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ") Attendance Sheet.doc";
		var csvData = new Blob([newStr], { type: '.ms-word;charset=utf-8;' });



		//eng

		//sin
		// var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+") Attendance Sheet.xls";
		// var csvDataSin = new Blob([newStrSIn], {type: 'text/csv;charset=utf-8;'});

		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ") Attendance Sheet.doc";
		var csvDataSin = new Blob([newStrSIn], { type: '.ms-word;charset=utf-8;' });

		//sin

		//IE11 & Edge
		//eng
		if (engCount != 0) {
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
		//eng

		//sin
		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		//sin

		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}


//------------------------------------------------Table Stickers ends------------------------------------------------------------------------------------------------------------











//---------------------------------------------------------Medical List starts----------------------------------------------------------------------------------------------------


function RepexamDownloadMedicalListTemp(degTitle, SubName, SubCode, BatchYear) {
	if (ex_CodeLength != 0) {

		//eng
		var engCount = 0;
		var engRowCount = 1;
		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + " - English Medium </div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Repeat Examination</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Medical List</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Name</th>";
		//newStr +="<th style='border: 1px solid black;' >Signature</th>";
		newStr += "</tr>";


		//eng

		//sin
		var sinCount = 0;
		var sinRowCount = 1;
		var newStrSIn = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStrSIn += "<div id='topics1' class='info'></div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + " - Sinhala Medium </div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Repeat Examination</div>";
		newStrSIn += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Medical List</div>";

		newStrSIn += "<br>";
		newStrSIn += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStrSIn += "<tr>";
		newStrSIn += "<th style='border: 1px solid black;'>No</th>";
		newStrSIn += "<th style='border: 1px solid black;'>Student No</th>";
		newStrSIn += "<th style='border: 1px solid black;'>Name</th>";
		//newStrSIn +="<th style='border: 1px solid black;' >Signature</th>";
		newStrSIn += "</tr>";

		//sin


		for (i = 0; i < ex_CodeLength; i++) {
			//eng
			if (ex_studentMediumArr[i] == "en") {
				newStr += "<tr>";
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + ex_studentNoArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + ex_studentNameArr[i] + '</td>';
				//newStr+='<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStr += "</tr>";
				newStr += "</div><dev><br>";
				engCount++;
				engRowCount++;
			}
			//eng

			//sin
			if (ex_studentMediumArr[i] == "si") {
				newStrSIn += "<tr>";
				newStrSIn += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
				newStrSIn += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + ex_studentNoArr[i] + '</td>';
				newStrSIn += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + ex_studentNameArr[i] + '</td>';
				//newStrSIn+='<td style="border:1px solid black;word-wrap:break-word;width:100px;heigth:30%;font-size:12px;font-family:tahoma;"></td>';
				newStrSIn += "</tr>";
				newStrSIn += "</div><dev><br>";
				sinCount++;
				sinRowCount++;
			}
			//sin
		}


		//eng
		newStr += "</table>";
		newStr += "<br>";
		//newStr +="<div class='investLabel' style='text-align:left;'>Name of Supervisor ...............................</div>";
		//newStr +="<br>";
		//newStr +="<div class='investLabel' style='text-align:left;'>Signatute of Supervisor ...............................</div>";
		//newStr +="<br>";
		//newStr +="<div class='investLabel' style='text-align:left;'>Date ............................</div>";
		//eng

		//sin
		newStrSIn += "</table>";
		newStrSIn += "<br>";
		//newStrSIn +="<div class='investLabel' style='text-align:left;'>Name of Supervisor ...............................</div>";
		//newStrSIn +="<br>";
		//newStrSIn +="<div class='investLabel' style='text-align:left;'>Signatute of Supervisor ...............................</div>";
		//newStrSIn +="<br>";
		//newStrSIn +="<div class='investLabel' style='text-align:left;'>Date ............................</div>";
		//sin

		//eng
		var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ") Medical List.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
		//eng

		//sin
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ") Medical List.xls";
		var csvDataSin = new Blob([newStrSIn], { type: 'text/csv;charset=utf-8;' });
		//sin

		//IE11 & Edge
		//eng
		if (engCount != 0) {
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
		//eng

		//sin
		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		//sin

		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}

//----------------------------------------------------------Medical List ends---------------------------------------------------------------------------------------------------







//------------------------------------------------Subject wise Grade & Marks Starts---------------------------------------------------------------------------------------

function RepexamDownloadSubjectGradeTemp(degTitle, SubName, SubCode, BatchYear) {
	//alert(repDownLength);
	if (repDownLength != 0) {

		//en
		var engCount = 0;
		var engRowCount = 1;

		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ") Repeat Examination Results</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Name</th>";
		newStr += "<th style='border: 1px solid black;' >Grade</th>";
		newStr += "</tr>";

		//en

		//sin
		var sinCount = 0;
		var sinRowCount = 1;

		var newStrSin = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStrSin += "<div id='topics1' class='info'></div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")Repeat Examination Results</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

		newStrSin += "<br>";
		newStrSin += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStrSin += "<tr>";
		newStrSin += "<th style='border: 1px solid black;'>No</th>";
		newStrSin += "<th style='border: 1px solid black;'>Student No</th>";
		newStrSin += "<th style='border: 1px solid black;'>Name</th>";
		newStrSin += "<th style='border: 1px solid black;' >Grade</th>";
		newStrSin += "</tr>";

		//sin

		for (i = 0; i < repDownLength; i++) {

			//en
			if (ex_studentMediumArr[i] == "en") {
				if (repDownGradeArr[i] == '-') {
					repDownGradeArr[i] = '(ab)';
				}
				newStr += "<tr>";
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + repDownStudNoArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + repDownStudNameArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + repDownGradeArr[i] + '</td>';
				newStr += "</tr>";
				newStr += "</div><dev><br>";
				engCount++;
				engRowCount++;
			}
			//en

			//si
			if (ex_studentMediumArr[i] == "si") {
				if (repDownGradeArr[i] == '-') {
					repDownGradeArr[i] = '(ab)';
				}
				newStrSin += "<tr>";
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + repDownStudNoArr[i] + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + repDownStudNameArr[i] + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + repDownGradeArr[i] + '</td>';
				newStrSin += "</tr>";
				newStrSin += "</div><dev><br>";
				sinCount++;
				sinRowCount++;
			}
			//si
		}

		//en
		newStr += "</table>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
		//en

		//si
		newStrSin += "</table>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
		//si

		//en
		var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ")Subject Grades - Repeat.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
		//en

		//si
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ")Subject Grades - Repeat.xls";
		var csvDataSin = new Blob([newStrSin], { type: 'text/csv;charset=utf-8;' });
		//si

		//IE11 & Edge

		if (engCount != 0) {
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

		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}

		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}



function RepexamDownloadSubjectMarksTemp(degTitle, SubName, SubCode, BatchYear) {
	if (repDownLength != 0) {
		//en
		var engCount = 0;
		var engRowCount = 1;

		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")Repeat Examination Results</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Name</th>";
		newStr += "<th style='border: 1px solid black;'>Examiner 1</th>";
		newStr += "<th style='border: 1px solid black;'>Examiner 2</th>";
		newStr += "<th style='border: 1px solid black;'>Average</th>";
		newStr += "</tr>";
		//en

		//sin
		var sinCount = 0;
		var sinRowCount = 1;

		var newStrSin = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStrSin += "<div id='topics1' class='info'></div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + SubName + " (" + SubCode + ")Repeat Examination Results</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

		newStrSin += "<br>";
		newStrSin += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStrSin += "<tr>";
		newStrSin += "<th style='border: 1px solid black;'>No</th>";
		newStrSin += "<th style='border: 1px solid black;'>Student No</th>";
		newStrSin += "<th style='border: 1px solid black;'>Name</th>";
		newStrSin += "<th style='border: 1px solid black;'>Examiner 1</th>";
		newStrSin += "<th style='border: 1px solid black;'>Examiner 2</th>";
		newStrSin += "<th style='border: 1px solid black;'>Average</th>";
		newStrSin += "</tr>";
		//sin

		for (i = 0; i < repDownLength; i++) {

			//en
			if (ex_studentMediumArr[i] == "en") {
				if (repDownExm1Arr[i] == '125') {
					repDownExm1Arr[i] = '-';
				}
				if (repDownExm2Arr[i] == '125') {
					repDownExm2Arr[i] = '-';
				}
				if (repDownMarksArr[i] == '125') {
					repDownMarksArr[i] = '(ab)';
				}
				newStr += "<tr>";
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + repDownStudNoArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + repDownStudNameArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + repDownExm1Arr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + repDownExm2Arr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + repDownMarksArr[i] + '</td>';
				newStr += "</tr>";
				newStr += "</div><dev><br>";
				engCount++;
				engRowCount++;
			}
			//en

			//si
			if (ex_studentMediumArr[i] == "si") {
				if (repDownExm1Arr[i] == '125') {
					repDownExm1Arr[i] = '-';
				}
				if (repDownExm2Arr[i] == '125') {
					repDownExm2Arr[i] = '-';
				}
				if (repDownMarksArr[i] == '125') {
					repDownMarksArr[i] = '(ab)';
				}
				newStrSin += "<tr>";
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + repDownStudNoArr[i] + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + repDownStudNameArr[i] + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + repDownExm1Arr[i] + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + repDownExm2Arr[i] + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + repDownMarksArr[i] + '</td>';
				newStrSin += "</tr>";
				newStrSin += "</div><dev><br>";
				sinCount++;
				sinRowCount++;
			}
			//si
		}
		//en
		newStr += "</table>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
		//en

		//si
		newStrSin += "</table>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
		//si

		//en		
		var exportFilename = BatchYear + " - English - " + SubName + " (" + SubCode + ")Subject Marks - Repeat.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });
		//en

		//si
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName + " (" + SubCode + ")Subject Marks - Repeat.xls";
		var csvDataSin = new Blob([newStrSin], { type: 'text/csv;charset=utf-8;' });
		//si

		//IE11 & Edge
		if (engCount != 0) {
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
		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}
// //------------------------------------------------Subject wise Grade & Marks Ends---------------------------------------------------------------------------------------





//---------------------------------------Semester wise Grade & Marks starts--------------------------------------------------------------------------------------------------

function RepexamDownloadSemesterGradeTemp(degTitle, SubSem, BatchYear) {
	if (tmpDownLength != 0 && subDownLength != 0) {

		//en
		var engCount = 0;
		var engRowCount = 1;


		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Semester - " + SubSem + " Repeat Examination Results</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Name</th>";
		for (j = 0; j < subDownLength; j++) {
			newStr += "<th style='border: 1px solid black;' >" + tmpSubTitleArr[j] + "</th>";
		}
		newStr += "<th style='border: 1px solid black;'>GPA</th>";
		newStr += "</tr>";

		//en

		//si
		var sinCount = 0;
		var sinRowCount = 1;

		var newStrSin = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStrSin += "<div id='topics1' class='info'></div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Semester - " + SubSem + " Repeat Examination Results</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

		newStrSin += "<br>";
		newStrSin += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStrSin += "<tr>";
		newStrSin += "<th style='border: 1px solid black;'>No</th>";
		newStrSin += "<th style='border: 1px solid black;'>Student No</th>";
		newStrSin += "<th style='border: 1px solid black;'>Name</th>";
		for (j = 0; j < subDownLength; j++) {
			newStrSin += "<th style='border: 1px solid black;' >" + tmpSubTitleArr[j] + "</th>";
		}
		newStrSin += "<th style='border: 1px solid black;'>GPA</th>";
		newStrSin += "</tr>";

		//si





		for (i = 0; i < tmpDownLength; i++) {
			//en
			//alert(ex_studentMediumArr[i]);
			if (tmpDownstudentMediumArr[i] == "en") {

				var tmpStudent = tmpDownStudNoArr[i];
				newStr += "<tr>";
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';

				for (k = 0; k < subDownLength; k++) {
					//alert(i);
					if (tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]) {
						if (tmpDownGradeArr[i] == '-') {
							tmpDownGradeArr[i] = '(ab)';
						}
						newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
						if (k == subDownLength - 1) {

						} else {
							i++;
						}

					} else {
						newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
						if (k == subDownLength - 1) {
							i--;
						}
					}

				}
				var tmpGPAHolder = '0.0';
				for (var m = 0; m < fi_Length; m++) {
					if (fi_StudNoArr[m] == tmpStudent) {
						tmpGPAHolder = fi_GPAArr[m];
						tmpsem0Check = true;
						break;
					}
				}
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';


				newStr += "</tr>";
				newStr += "</div><dev><br>";
				engCount++;
				engRowCount++;
			}
			//en

			//si
			if (tmpDownstudentMediumArr[i] == "si") {

				var tmpStudent = tmpDownStudNoArr[i];
				newStrSin += "<tr>";
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';

				for (k = 0; k < subDownLength; k++) {
					//alert(i);
					if (tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]) {
						if (tmpDownGradeArr[i] == '-') {
							tmpDownGradeArr[i] = '(ab)';
						}
						newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
						if (k == subDownLength - 1) {

						} else {
							i++;
						}

					} else {
						newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
						if (k == subDownLength - 1) {
							i--;
						}
					}

				}
				var tmpGPAHolder = '0.0';
				for (var m = 0; m < fi_Length; m++) {
					if (fi_StudNoArr[m] == tmpStudent) {
						tmpGPAHolder = fi_GPAArr[m];
						tmpsem0Check = true;
						break;
					}
				}
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';


				newStrSin += "</tr>";
				newStrSin += "</div><dev><br>";
				sinCount++;
				sinRowCount++;
			}
			//si

		}

		//en

		newStr += "</table>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";

		//en 

		//si
		newStrSin += "</table>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";
		//si

		//en
		var exportFilename = BatchYear + " - English - " + degTitle + " (Semester - " + SubSem + ")Repeat Grades Sheet.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

		//en

		//si
		var exportFilenameSin = BatchYear + " - Sinhala - " + degTitle + " (Semester - " + SubSem + ")Repeat Grades Sheet.xls";
		var csvDataSin = new Blob([newStrSin], { type: 'text/csv;charset=utf-8;' });

		//si



		//IE11 & Edge
		if (engCount != 0) {
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
		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}


function RepexamDownloadSemesterMarksTemp(degTitle, SubSem, BatchYear) {
	if (tmpDownLength != 0 && subDownLength != 0) {

		//en
		var engCount = 0;
		var engRowCount = 1;


		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Semester - " + SubSem + " Repeat Examination Results</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;'>No</th>";
		newStr += "<th style='border: 1px solid black;'>Student No</th>";
		newStr += "<th style='border: 1px solid black;'>Name</th>";
		for (j = 0; j < subDownLength; j++) {
			newStr += "<th style='border: 1px solid black;' >" + tmpSubTitleArr[j] + "</th>";
		}

		newStr += "</tr>";

		//en

		//si
		var sinCount = 0;
		var sinRowCount = 1;

		var newStrSin = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStrSin += "<div id='topics1' class='info'></div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Semester - " + SubSem + " Repeat Examination Results</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";

		newStrSin += "<br>";
		newStrSin += "<table style='border-collapse: collapse;border: 1px solid black;'>";
		newStrSin += "<tr>";
		newStrSin += "<th style='border: 1px solid black;'>No</th>";
		newStrSin += "<th style='border: 1px solid black;'>Student No</th>";
		newStrSin += "<th style='border: 1px solid black;'>Name</th>";
		for (j = 0; j < subDownLength; j++) {
			newStrSin += "<th style='border: 1px solid black;' >" + tmpSubTitleArr[j] + "</th>";
		}

		newStrSin += "</tr>";

		//si

		for (i = 0; i < tmpDownLength; i++) {

			//en
			if (tmpDownstudentMediumArr[i] == "en") {
				newStr += "<tr>";
				var tmpStudent = tmpDownStudNoArr[i];
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + engRowCount + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';

				for (k = 0; k < subDownLength; k++) {
					//alert(i);
					if (tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]) {
						if (tmpDownMarksArr[i] == '125') {
							tmpDownMarksArr[i] = '(ab)';
						}
						newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
						if (k == subDownLength - 1) {

						} else {
							i++;
						}

					} else {
						newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
						if (k == subDownLength - 1) {
							i--;
						}
					}

				}


				newStr += "</tr>";
				newStr += "</div><dev><br>";
				engCount++;
				engRowCount++;
			}
			//en

			//si
			if (tmpDownstudentMediumArr[i] == "si") {
				newStrSin += "<tr>";
				var tmpStudent = tmpDownStudNoArr[i];
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + sinRowCount + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;">' + tmpDownStudNoArr[i] + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">' + tmpDownStudNameArr[i] + '</td>';

				for (k = 0; k < subDownLength; k++) {
					//alert(i);
					if (tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]) {
						if (tmpDownMarksArr[i] == '125') {
							tmpDownMarksArr[i] = '(ab)';
						}
						newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
						if (k == subDownLength - 1) {

						} else {
							i++;
						}

					} else {
						newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
						if (k == subDownLength - 1) {
							i--;
						}
					}

				}


				newStrSin += "</tr>";
				newStrSin += "</div><dev><br>";
				sinCount++;
				sinRowCount++;
			}
			//si
		}

		//en

		newStr += "</table>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";

		//en


		//si
		newStrSin += "</table>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";

		//si

		//en
		var exportFilename = BatchYear + " - English - " + degTitle + " (Semester - " + SubSem + ")Repeat Marks Sheet.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

		//en

		//si
		var exportFilenameSin = BatchYear + " - Sinhala - " + degTitle + " (Semester - " + SubSem + ")Repeat Marks Sheet.xls";
		var csvDataSin = new Blob([newStrSin], { type: 'text/csv;charset=utf-8;' });

		//si





		//IE11 & Edge
		if (engCount != 0) {
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
		if (sinCount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}
//---------------------------------------Semester wise Grade & Marks ends--------------------------------------------------------------------------------------------------



//---------------------------------------Year wise Grade & Marks starts--------------------------------------------------------------------------------------------------

// function examDownloadYearGradeTemp(degTitle, BatchYear){
// if(tmpDownLength != 0 && subDownLength != 0){
// //en
// var engCount=0;
// var engRowCount=1;

// var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
// newStr +="<div id='topics1' class='info'></div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";

// newStr +="<br>";
// newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";

// var sem0Count = 0;
// var sem1Count = 0;
// var sem2Count = 0;
// var sem3Count = 0;
// var sem4Count = 0;

// for(var j = 0 ; j < subDownLength ; j++){
// switch(tmpSemesterArr[j]) {	
// case '0': sem0Count++; break;
// case '1': sem1Count++; break;
// case '2': sem2Count++; break;
// case '3': sem3Count++; break;
// case '4': sem4Count++; break;
// }
// }

// var tmpsem0Count = sem0Count;
// var tmpsem1Count = sem1Count;
// var tmpsem2Count = sem2Count;
// var tmpsem3Count = sem3Count;
// var tmpsem4Count = sem4Count;

// var tmp_sem0Count = sem0Count;
// var tmp_sem1Count = sem1Count;
// var tmp_sem2Count = sem2Count;
// var tmp_sem3Count = sem3Count;
// var tmp_sem4Count = sem4Count;

// newStr +="<tr>";
// newStr +="<th style='border: 1px solid black;' rowspan='2'>No</th>";
// newStr +="<th style='border: 1px solid black;' rowspan='2'>Student No</th>";
// newStr +="<th style='border: 1px solid black;' rowspan='2'>Name</th>";

// for(var j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && sem0Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem0Count+1)+'">Semester 0</td>';
// sem0Count = 0;
// }else if(tmpSemesterArr[j] == '1' && sem1Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem1Count+1)+'">Semester 1</td>';
// sem1Count = 0;
// }else if(tmpSemesterArr[j] == '2' && sem2Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem2Count+1)+'">Semester 2</td>';
// sem2Count = 0;
// }else if(tmpSemesterArr[j] == '3' && sem3Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem3Count+1)+'">Semester 3</td>';
// sem3Count = 0;
// }else if(tmpSemesterArr[j] == '4' && sem4Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem4Count+1)+'">Semester 4</td>';
// sem4Count = 0;
// }
// }
// newStr +="</tr>";
// newStr +="<tr>";
// for(j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && tmpsem0Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem0Count--;
// if(tmpsem0Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '1' && tmpsem1Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem1Count--;
// if(tmpsem1Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '2' && tmpsem2Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem2Count--;
// if(tmpsem2Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '3' && tmpsem3Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem3Count--;
// if(tmpsem3Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '4' && tmpsem4Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem4Count--;
// if(tmpsem4Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }


// }

// newStr +="</tr>"; 

// //en


// //si
// var sinCount=0;
// var sinRowCount=1;


// var	newStrSin ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
// newStrSin +="<div id='topics1' class='info'></div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";

// newStrSin +="<br>";
// newStrSin +="<table style='border-collapse: collapse;border: 1px solid black;'>";

// var sem0Count = 0;
// var sem1Count = 0;
// var sem2Count = 0;
// var sem3Count = 0;
// var sem4Count = 0;

// for(var j = 0 ; j < subDownLength ; j++){
// switch(tmpSemesterArr[j]) {	
// case '0': sem0Count++; break;
// case '1': sem1Count++; break;
// case '2': sem2Count++; break;
// case '3': sem3Count++; break;
// case '4': sem4Count++; break;
// }
// }

// var tmpsem0Count = sem0Count;
// var tmpsem1Count = sem1Count;
// var tmpsem2Count = sem2Count;
// var tmpsem3Count = sem3Count;
// var tmpsem4Count = sem4Count;

// var tmp_sem0Count = sem0Count;
// var tmp_sem1Count = sem1Count;
// var tmp_sem2Count = sem2Count;
// var tmp_sem3Count = sem3Count;
// var tmp_sem4Count = sem4Count;

// newStrSin +="<tr>";
// newStrSin +="<th style='border: 1px solid black;' rowspan='2'>No</th>";
// newStrSin +="<th style='border: 1px solid black;' rowspan='2'>Student No</th>";
// newStrSin +="<th style='border: 1px solid black;' rowspan='2'>Name</th>";

// for(var j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && sem0Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem0Count+1)+'">Semester 0</td>';
// sem0Count = 0;
// }else if(tmpSemesterArr[j] == '1' && sem1Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem1Count+1)+'">Semester 1</td>';
// sem1Count = 0;
// }else if(tmpSemesterArr[j] == '2' && sem2Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem2Count+1)+'">Semester 2</td>';
// sem2Count = 0;
// }else if(tmpSemesterArr[j] == '3' && sem3Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem3Count+1)+'">Semester 3</td>';
// sem3Count = 0;
// }else if(tmpSemesterArr[j] == '4' && sem4Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem4Count+1)+'">Semester 4</td>';
// sem4Count = 0;
// }
// }
// newStrSin +="</tr>";
// newStrSin +="<tr>";
// for(j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && tmpsem0Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem0Count--;
// if(tmpsem0Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '1' && tmpsem1Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem1Count--;
// if(tmpsem1Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '2' && tmpsem2Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem2Count--;
// if(tmpsem2Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '3' && tmpsem3Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem3Count--;
// if(tmpsem3Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '4' && tmpsem4Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem4Count--;
// if(tmpsem4Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }


// }

// newStrSin +="</tr>"; 

// //si

// sem0Count = tmp_sem0Count;
// sem1Count = tmp_sem1Count;
// sem2Count = tmp_sem2Count;
// sem3Count = tmp_sem3Count;
// sem4Count = tmp_sem4Count;

// for(i = 0 ; i < tmpDownLength ; i++){

// //en	
// if (tmpDownstudentMediumArr[i]=="en"){		
// newStr +="<tr>";
// var tmpStudent = tmpDownStudNoArr[i];
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+engRowCount+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+tmpDownStudNoArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >'+tmpDownStudNameArr[i]+'</td>';

// if(tmpStudent == tmpDownStudNoArr[i]){
// tmp_sem0Count = sem0Count;
// tmp_sem1Count = sem1Count;
// tmp_sem2Count = sem2Count;
// tmp_sem3Count = sem3Count;
// tmp_sem4Count = sem4Count;

// var tmpsem0Check = false;
// var tmpsem1Check = false;
// var tmpsem2Check = false;
// var tmpsem3Check = false;
// var tmpsem4Check = false;
// }

// for(k = 0 ; k < subDownLength ; k++){
// //alert(i);
// if(tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]){
// if(tmpDownGradeArr[i] == '-'){
// tmpDownGradeArr[i] = '(ab)';
// }

// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem0Count--;
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }

// if(k == subDownLength-1){

// }else{
// i++;
// }

// }else{
// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem0Count--;							
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else{
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// }

// if(k == subDownLength-1){
// i--;
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(!tmpsem0Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem1Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem2Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem3Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem4Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else{
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }

// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';

// }
// }
// }


// newStr +="</tr>";
// newStr += "</div><dev><br>";
// engCount++;
// engRowCount++;
// }
// //en



// //si
// if (tmpDownstudentMediumArr[i]=="si"){		
// newStr +="<tr>";
// var tmpStudent = tmpDownStudNoArr[i];
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+sinRowCount+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+tmpDownStudNoArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >'+tmpDownStudNameArr[i]+'</td>';

// if(tmpStudent == tmpDownStudNoArr[i]){
// tmp_sem0Count = sem0Count;
// tmp_sem1Count = sem1Count;
// tmp_sem2Count = sem2Count;
// tmp_sem3Count = sem3Count;
// tmp_sem4Count = sem4Count;

// var tmpsem0Check = false;
// var tmpsem1Check = false;
// var tmpsem2Check = false;
// var tmpsem3Check = false;
// var tmpsem4Check = false;
// }

// for(k = 0 ; k < subDownLength ; k++){
// //alert(i);
// if(tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]){
// if(tmpDownGradeArr[i] == '-'){
// tmpDownGradeArr[i] = '(ab)';
// }

// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem0Count--;
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }

// if(k == subDownLength-1){

// }else{
// i++;
// }

// }else{
// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem0Count--;							
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else{
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// }

// if(k == subDownLength-1){
// i--;
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(!tmpsem0Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem1Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem2Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem3Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem4Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else{
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }

// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';

// }
// }
// }


// newStrSin +="</tr>";
// newStrSin += "</div><dev><br>";
// sinCount++;
// sinRowCount++;		
// }


// //si
// }

// //en
// newStr +="</table>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";
// //en

// //si
// newStrSin +="</table>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";

// //si

// //en
// var exportFilename = BatchYear + " - English - " + degTitle+" Grades Sheet.xls";
// var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
// //en

// //si
// var exportFilenameSin = BatchYear + " - Sinhala - " + degTitle+" Grades Sheet.xls";
// var csvDataSin = new Blob([newStrSin], {type: 'text/csv;charset=utf-8;'});

// //si



// //IE11 & Edge
// if(engCount!=0){
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
// if(sinCount!=0){
// if (navigator.msSaveBlob) {
// navigator.msSaveBlob(csvDataSin, exportFilenameSin);
// } else {
// //In FF link must be added to DOM to be clicked
// var link = document.createElement('a');
// link.href = window.URL.createObjectURL(csvDataSin);
// link.setAttribute('download', exportFilenameSin);
// document.body.appendChild(link);    
// link.click();
// document.body.removeChild(link);    
// }
// }

// resetRepResultDownload()
// sendForm('data4DownloadsubjectDetails');
// sendForm('data4DownloaddegreeSubjects');		
// }else{
// resetRepResultDownload()
// sendForm('data4DownloadsubjectDetails');
// sendForm('data4DownloaddegreeSubjects');
// alert("Data not available");

// }

// }



// function examDownloadYearMarksTemp(degTitle, BatchYear){
// if(tmpDownLength != 0 && subDownLength != 0){
// //en
// var engCount=0;
// var engRowCount=1;

// var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
// newStr +="<div id='topics1' class='info'></div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";


// newStr +="<br>";
// newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";

// var sem0Count = 0;
// var sem1Count = 0;
// var sem2Count = 0;
// var sem3Count = 0;
// var sem4Count = 0;

// for(var j = 0 ; j < subDownLength ; j++){
// switch(tmpSemesterArr[j]) {	
// case '0': sem0Count++; break;
// case '1': sem1Count++; break;
// case '2': sem2Count++; break;
// case '3': sem3Count++; break;
// case '4': sem4Count++; break;
// }
// }

// var tmpsem0Count = sem0Count;
// var tmpsem1Count = sem1Count;
// var tmpsem2Count = sem2Count;
// var tmpsem3Count = sem3Count;
// var tmpsem4Count = sem4Count;

// var tmp_sem0Count = sem0Count;
// var tmp_sem1Count = sem1Count;
// var tmp_sem2Count = sem2Count;
// var tmp_sem3Count = sem3Count;
// var tmp_sem4Count = sem4Count;

// newStr +="<tr>";
// newStr +="<th style='border: 1px solid black;' rowspan='2'>No</th>";
// newStr +="<th style='border: 1px solid black;' rowspan='2'>Student No</th>";
// newStr +="<th style='border: 1px solid black;' rowspan='2'>Name</th>";

// for(var j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && sem0Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem0Count+1)+'">Semester 0</td>';
// sem0Count = 0;
// }else if(tmpSemesterArr[j] == '1' && sem1Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem1Count+1)+'">Semester 1</td>';
// sem1Count = 0;
// }else if(tmpSemesterArr[j] == '2' && sem2Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem2Count+1)+'">Semester 2</td>';
// sem2Count = 0;
// }else if(tmpSemesterArr[j] == '3' && sem3Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem3Count+1)+'">Semester 3</td>';
// sem3Count = 0;
// }else if(tmpSemesterArr[j] == '4' && sem4Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem4Count+1)+'">Semester 4</td>';
// sem4Count = 0;
// }
// }
// newStr +="</tr>";
// newStr +="<tr>";
// for(j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && tmpsem0Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem0Count--;
// if(tmpsem0Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '1' && tmpsem1Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem1Count--;
// if(tmpsem1Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '2' && tmpsem2Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem2Count--;
// if(tmpsem2Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '3' && tmpsem3Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem3Count--;
// if(tmpsem3Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '4' && tmpsem4Count != 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem4Count--;
// if(tmpsem4Count == 0){
// newStr +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }


// }

// newStr +="</tr>"; 
// //en

// //si
// var sinCount=0;
// var sinRowCount=1;

// var	newStrSin ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
// newStrSin +="<div id='topics1' class='info'></div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";


// newStrSin +="<br>";
// newStrSin +="<table style='border-collapse: collapse;border: 1px solid black;'>";

// var sem0Count = 0;
// var sem1Count = 0;
// var sem2Count = 0;
// var sem3Count = 0;
// var sem4Count = 0;

// for(var j = 0 ; j < subDownLength ; j++){
// switch(tmpSemesterArr[j]) {	
// case '0': sem0Count++; break;
// case '1': sem1Count++; break;
// case '2': sem2Count++; break;
// case '3': sem3Count++; break;
// case '4': sem4Count++; break;
// }
// }

// var tmpsem0Count = sem0Count;
// var tmpsem1Count = sem1Count;
// var tmpsem2Count = sem2Count;
// var tmpsem3Count = sem3Count;
// var tmpsem4Count = sem4Count;

// var tmp_sem0Count = sem0Count;
// var tmp_sem1Count = sem1Count;
// var tmp_sem2Count = sem2Count;
// var tmp_sem3Count = sem3Count;
// var tmp_sem4Count = sem4Count;

// newStrSin +="<tr>";
// newStrSin +="<th style='border: 1px solid black;' rowspan='2'>No</th>";
// newStrSin +="<th style='border: 1px solid black;' rowspan='2'>Student No</th>";
// newStrSin +="<th style='border: 1px solid black;' rowspan='2'>Name</th>";

// for(var j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && sem0Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem0Count+1)+'">Semester 0</td>';
// sem0Count = 0;
// }else if(tmpSemesterArr[j] == '1' && sem1Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem1Count+1)+'">Semester 1</td>';
// sem1Count = 0;
// }else if(tmpSemesterArr[j] == '2' && sem2Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem2Count+1)+'">Semester 2</td>';
// sem2Count = 0;
// }else if(tmpSemesterArr[j] == '3' && sem3Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem3Count+1)+'">Semester 3</td>';
// sem3Count = 0;
// }else if(tmpSemesterArr[j] == '4' && sem4Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem4Count+1)+'">Semester 4</td>';
// sem4Count = 0;
// }
// }
// newStrSin +="</tr>";
// newStrSin +="<tr>";
// for(j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && tmpsem0Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem0Count--;
// if(tmpsem0Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '1' && tmpsem1Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem1Count--;
// if(tmpsem1Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '2' && tmpsem2Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem2Count--;
// if(tmpsem2Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '3' && tmpsem3Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem3Count--;
// if(tmpsem3Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }else if(tmpSemesterArr[j] == '4' && tmpsem4Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem4Count--;
// if(tmpsem4Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:auto;' >GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;' >Status</th>";
// }
// }


// }

// newStrSin +="</tr>"; 
// //si

// sem0Count = tmp_sem0Count;
// sem1Count = tmp_sem1Count;
// sem2Count = tmp_sem2Count;
// sem3Count = tmp_sem3Count;
// sem4Count = tmp_sem4Count;

// for(i = 0 ; i < tmpDownLength ; i++){

// //en
// if (tmpDownstudentMediumArr[i]=="en"){	

// newStr +="<tr>";
// var tmpStudent = tmpDownStudNoArr[i];
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+engRowCount+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+tmpDownStudNoArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >'+tmpDownStudNameArr[i]+'</td>';

// if(tmpStudent == tmpDownStudNoArr[i]){
// tmp_sem0Count = sem0Count;
// tmp_sem1Count = sem1Count;
// tmp_sem2Count = sem2Count;
// tmp_sem3Count = sem3Count;
// tmp_sem4Count = sem4Count;

// var tmpsem0Check = false;
// var tmpsem1Check = false;
// var tmpsem2Check = false;
// var tmpsem3Check = false;
// var tmpsem4Check = false;
// }

// for(k = 0 ; k < subDownLength ; k++){
// //alert(i);
// if(tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]){
// if(tmpDownMarksArr[i] == '125'){
// tmpDownMarksArr[i] = '(ab)';
// }

// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem0Count--;
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }

// if(k == subDownLength-1){

// }else{
// i++;
// }

// }else{
// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem0Count--;							
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else{
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// }

// if(k == subDownLength-1){
// i--;
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(!tmpsem0Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem1Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem2Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem3Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem4Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else{
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }

// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';

// }
// }
// }


// newStr +="</tr>";
// newStr += "</div><dev><br>";
// engCount++;
// engRowCount++;				
// }
// //en


// //si
// if (tmpDownstudentMediumArr[i]=="si"){	

// newStrSin +="<tr>";
// var tmpStudent = tmpDownStudNoArr[i];
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+sinRowCount+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+tmpDownStudNoArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >'+tmpDownStudNameArr[i]+'</td>';

// if(tmpStudent == tmpDownStudNoArr[i]){
// tmp_sem0Count = sem0Count;
// tmp_sem1Count = sem1Count;
// tmp_sem2Count = sem2Count;
// tmp_sem3Count = sem3Count;
// tmp_sem4Count = sem4Count;

// var tmpsem0Check = false;
// var tmpsem1Check = false;
// var tmpsem2Check = false;
// var tmpsem3Check = false;
// var tmpsem4Check = false;
// }

// for(k = 0 ; k < subDownLength ; k++){
// //alert(i);
// if(tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]){
// if(tmpDownMarksArr[i] == '125'){
// tmpDownMarksArr[i] = '(ab)';
// }

// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem0Count--;
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }

// if(k == subDownLength-1){

// }else{
// i++;
// }

// }else{
// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem0Count--;							
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else{
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// }

// if(k == subDownLength-1){
// i--;
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(!tmpsem0Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem1Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem2Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem3Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem4Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else{
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }

// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';

// }
// }
// }


// newStrSin +="</tr>";
// newStrSin += "</div><dev><br>";
// sinCount++;
// sinRowCount++;					
// }

// //si
// }
// //en
// newStr +="</table>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";
// //en

// //si
// newStrSin +="</table>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";
// //si

// //en
// var exportFilename = BatchYear + " - English - " + degTitle+" Marks Sheet.xls";
// var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
// //en


// //si
// var exportFilenameSin = BatchYear + " - Sinhala - " + degTitle+" Marks Sheet.xls";
// var csvDataSin = new Blob([newStrSin], {type: 'text/csv;charset=utf-8;'});
// //si



// //IE11 & Edge
// if(engCount!=0)
// {
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

// if(sinCount!=0)
// {
// if (navigator.msSaveBlob) {
// navigator.msSaveBlob(csvDataSin, exportFilenameSin);
// } else {
// //In FF link must be added to DOM to be clicked
// var link = document.createElement('a');
// link.href = window.URL.createObjectURL(csvDataSin);
// link.setAttribute('download', exportFilenameSin);
// document.body.appendChild(link);    
// link.click();
// document.body.removeChild(link);    
// }
// }
// resetRepResultDownload()
// sendForm('data4DownloadsubjectDetails');
// sendForm('data4DownloaddegreeSubjects');		
// }else{
// resetRepResultDownload()
// sendForm('data4DownloadsubjectDetails');
// sendForm('data4DownloaddegreeSubjects');
// alert("Data not available");

// }

// }

//---------------------------------------Year wise Grade & Marks ends--------------------------------------------------------------------------------------------------


//finalReport
//EDITED SEW

// function examDownloadFinalReportTemp(degTitle, BatchYear){
// if(tmpDownLength != 0 && subDownLength != 0){

// //en
// var engCount=0;
// var engRowCount=1;
// var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
// newStr +="<div id='topics1' class='info'></div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";


// newStr +="<br>";
// newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";

// var sem0Count = 0;
// var sem1Count = 0;
// var sem2Count = 0;
// var sem3Count = 0;
// var sem4Count = 0;

// for(var j = 0 ; j < subDownLength ; j++){
// switch(tmpSemesterArr[j]) {	
// case '0': sem0Count++; break;
// case '1': sem1Count++; break;
// case '2': sem2Count++; break;
// case '3': sem3Count++; break;
// case '4': sem4Count++; break;
// }
// }

// var tmpsem0Count = sem0Count;
// var tmpsem1Count = sem1Count;
// var tmpsem2Count = sem2Count;
// var tmpsem3Count = sem3Count;
// var tmpsem4Count = sem4Count;

// var tmp_sem0Count = sem0Count;
// var tmp_sem1Count = sem1Count;
// var tmp_sem2Count = sem2Count;
// var tmp_sem3Count = sem3Count;
// var tmp_sem4Count = sem4Count;

// newStr +="<tr>";
// newStr +="<th style='border: 1px solid black;' rowspan='2'>No</th>";
// newStr +="<th style='border: 1px solid black;' rowspan='2'>Student No</th>";
// newStr +="<th style='border: 1px solid black;' rowspan='2'>Name</th>";

// for(var j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && sem0Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem0Count+1)+'">Semester 0</td>';
// sem0Count = 0;
// }else if(tmpSemesterArr[j] == '1' && sem1Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem1Count+1)+'">Semester 1</td>';
// sem1Count = 0;
// }else if(tmpSemesterArr[j] == '2' && sem2Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem2Count+1)+'">Semester 2</td>';
// sem2Count = 0;
// }else if(tmpSemesterArr[j] == '3' && sem3Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem3Count+1)+'">Semester 3</td>';
// sem3Count = 0;
// }else if(tmpSemesterArr[j] == '4' && sem4Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem4Count+1)+'">Semester 4</td>';
// sem4Count = 0;
// }
// }
// newStr +="</tr>";
// newStr +="<tr>";
// for(j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && tmpsem0Count != 0){
// newStr +="<th style='border: 1px solid black;width:100px;text-align:center' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem0Count--;
// if(tmpsem0Count == 0){
// newStr +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }else if(tmpSemesterArr[j] == '1' && tmpsem1Count != 0){
// newStr +="<th style='border: 1px solid black;width:100px;' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem1Count--;
// if(tmpsem1Count == 0){
// newStr +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }else if(tmpSemesterArr[j] == '2' && tmpsem2Count != 0){
// newStr +="<th style='border: 1px solid black;width:100px;' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem2Count--;
// if(tmpsem2Count == 0){
// newStr +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }else if(tmpSemesterArr[j] == '3' && tmpsem3Count != 0){
// newStr +="<th style='border: 1px solid black;width:100px;' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem3Count--;
// if(tmpsem3Count == 0){
// newStr +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }else if(tmpSemesterArr[j] == '4' && tmpsem4Count != 0){
// newStr +="<th style='border: 1px solid black;width:100px;' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem4Count--;
// if(tmpsem4Count == 0){
// newStr +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStr +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }


// }

// newStr +="</tr>"; 

// //en

// //si
// var sinCount=0;
// var sinRowCount=1;

// var	newStrSin ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
// newStrSin +="<div id='topics1' class='info'></div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";


// newStrSin +="<br>";
// newStrSin +="<table style='border-collapse: collapse;border: 1px solid black;'>";

// var sem0Count = 0;
// var sem1Count = 0;
// var sem2Count = 0;
// var sem3Count = 0;
// var sem4Count = 0;

// for(var j = 0 ; j < subDownLength ; j++){
// switch(tmpSemesterArr[j]) {	
// case '0': sem0Count++; break;
// case '1': sem1Count++; break;
// case '2': sem2Count++; break;
// case '3': sem3Count++; break;
// case '4': sem4Count++; break;
// }
// }

// var tmpsem0Count = sem0Count;
// var tmpsem1Count = sem1Count;
// var tmpsem2Count = sem2Count;
// var tmpsem3Count = sem3Count;
// var tmpsem4Count = sem4Count;

// var tmp_sem0Count = sem0Count;
// var tmp_sem1Count = sem1Count;
// var tmp_sem2Count = sem2Count;
// var tmp_sem3Count = sem3Count;
// var tmp_sem4Count = sem4Count;

// newStrSin +="<tr>";
// newStrSin +="<th style='border: 1px solid black;' rowspan='2'>No</th>";
// newStrSin +="<th style='border: 1px solid black;' rowspan='2'>Student No</th>";
// newStrSin +="<th style='border: 1px solid black;' rowspan='2'>Name</th>";

// for(var j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && sem0Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem0Count+1)+'">Semester 0</td>';
// sem0Count = 0;
// }else if(tmpSemesterArr[j] == '1' && sem1Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem1Count+1)+'">Semester 1</td>';
// sem1Count = 0;
// }else if(tmpSemesterArr[j] == '2' && sem2Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem2Count+1)+'">Semester 2</td>';
// sem2Count = 0;
// }else if(tmpSemesterArr[j] == '3' && sem3Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem3Count+1)+'">Semester 3</td>';
// sem3Count = 0;
// }else if(tmpSemesterArr[j] == '4' && sem4Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="'+(sem4Count+1)+'">Semester 4</td>';
// sem4Count = 0;
// }
// }
// newStrSin +="</tr>";
// newStrSin +="<tr>";
// for(j = 0 ; j < subDownLength ; j++){
// if(tmpSemesterArr[j] == '0' && tmpsem0Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;text-align:center' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem0Count--;
// if(tmpsem0Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }else if(tmpSemesterArr[j] == '1' && tmpsem1Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem1Count--;
// if(tmpsem1Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }else if(tmpSemesterArr[j] == '2' && tmpsem2Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem2Count--;
// if(tmpsem2Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }else if(tmpSemesterArr[j] == '3' && tmpsem3Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem3Count--;
// if(tmpsem3Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }else if(tmpSemesterArr[j] == '4' && tmpsem4Count != 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;' colspan='3' >"+tmpSubCodeArr[j]+"</th>";
// tmpsem4Count--;
// if(tmpsem4Count == 0){
// newStrSin +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
// }
// }


// }

// newStrSin +="</tr>"; 
// //si

// sem0Count = tmp_sem0Count;
// sem1Count = tmp_sem1Count;
// sem2Count = tmp_sem2Count;
// sem3Count = tmp_sem3Count;
// sem4Count = tmp_sem4Count;

// for(i = 0 ; i < tmpDownLength ; i++){

// //en
// if (ex_studentMediumArr[i]=="en"){

// newStr +="<tr>";
// var tmpStudent = tmpDownStudNoArr[i];
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+engRowCount+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+tmpDownStudNoArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >'+tmpDownStudNameArr[i]+'</td>';

// if(tmpStudent == tmpDownStudNoArr[i]){
// tmp_sem0Count = sem0Count;
// tmp_sem1Count = sem1Count;
// tmp_sem2Count = sem2Count;
// tmp_sem3Count = sem3Count;
// tmp_sem4Count = sem4Count;

// var tmpsem0Check = false;
// var tmpsem1Check = false;
// var tmpsem2Check = false;
// var tmpsem3Check = false;
// var tmpsem4Check = false;
// }

// for(k = 0 ; k < subDownLength ; k++){
// //alert(i);
// if(tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]){
// if(tmpDownGradeArr[i] == '-'){
// tmpDownGradeArr[i] = '(ab)';
// }
// if(tmpDownMarksArr[i] == '125'){
// tmpDownMarksArr[i] = '(ab)';
// }

// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem0Count--;
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }

// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';


// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }

// if(k == subDownLength-1){

// }else{
// i++;
// }

// }else{
// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem0Count--;							
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else{
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// }

// if(k == subDownLength-1){
// i--;
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(!tmpsem0Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem1Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem2Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem3Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem4Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else{
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }

// }
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';

// }
// }
// }

// //alert(engRowCount);	
// newStr +="</tr>";
// newStr += "</div><dev><br>";
// engCount++;
// engRowCount++;			
// }
// //en

// //si
// if (ex_studentMediumArr[i]=="si"){
// newStrSin +="<tr>";
// var tmpStudent = tmpDownStudNoArr[i];
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+sinRowCount+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+tmpDownStudNoArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >'+tmpDownStudNameArr[i]+'</td>';

// if(tmpStudent == tmpDownStudNoArr[i]){
// tmp_sem0Count = sem0Count;
// tmp_sem1Count = sem1Count;
// tmp_sem2Count = sem2Count;
// tmp_sem3Count = sem3Count;
// tmp_sem4Count = sem4Count;

// var tmpsem0Check = false;
// var tmpsem1Check = false;
// var tmpsem2Check = false;
// var tmpsem3Check = false;
// var tmpsem4Check = false;
// }

// for(k = 0 ; k < subDownLength ; k++){
// //alert(i);
// if(tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]){
// if(tmpDownGradeArr[i] == '-'){
// tmpDownGradeArr[i] = '(ab)';
// }
// if(tmpDownMarksArr[i] == '125'){
// tmpDownMarksArr[i] = '(ab)';
// }

// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem0Count--;
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }

// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';


// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }

// if(k == subDownLength-1){

// }else{
// i++;
// }

// }else{
// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem0Count--;							
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else{
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// }

// if(k == subDownLength-1){
// i--;
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(!tmpsem0Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem1Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem2Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem3Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem4Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else{
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1'){
// tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }

// }
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';

// }
// }
// }


// newStrSin +="</tr>";
// newStrSin += "</div><dev><br>";
// sinCount++;
// sinRowCount++;				
// }

// }
// //en
// newStr +="</table>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";
// //en

// //si
// newStrSin +="</table>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";

// //si


// //en
// var exportFilename = BatchYear + " - English - " + degTitle+" Final Result Sheet.xls";
// var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});

// //en

// //si
// var exportFilenameSin = BatchYear + " - Sinhala - " + degTitle+" Final Result Sheet.xls";
// var csvDataSin = new Blob([newStrSin], {type: 'text/csv;charset=utf-8;'});
// //si

// //IE11 & Edge
// if(engCount!=0)
// {
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
// if(sinCount!=0)
// {
// if (navigator.msSaveBlob) {
// navigator.msSaveBlob(csvDataSin, exportFilenameSin);
// } else {
// //In FF link must be added to DOM to be clicked
// var link = document.createElement('a');
// link.href = window.URL.createObjectURL(csvDataSin);
// link.setAttribute('download', exportFilenameSin);
// document.body.appendChild(link);    
// link.click();
// document.body.removeChild(link);    
// }
// }

// resetRepResultDownload()
// sendForm('data4DownloadsubjectDetails');
// sendForm('data4DownloaddegreeSubjects');		
// }else{
// resetRepResultDownload()
// sendForm('data4DownloadsubjectDetails');
// sendForm('data4DownloaddegreeSubjects');
// alert("Data not available");

// }

// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//------------------------------------------------pass list download starts----------------------------------------------------------------------------------------------------------------------------


// function examDownloadPassReportTemp(degTitle, BatchYear){
// if(finalLength != 0 && subDownLength != 0){

// //en
// var engCount=0;
// var engRowCount=1;

// var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
// newStr +="<div id='topics1' class='info'></div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
// newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";


// newStr +="<br>";
// newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";

// var sem0Count = 0;
// var sem1Count = 0;
// var sem2Count = 0;
// var sem3Count = 0;
// var sem4Count = 0;

// for(var j = 0 ; j < subDownLength ; j++){
// switch(tmpSemesterArr[j]) {	
// case '0': sem0Count++; break;
// case '1': sem1Count++; break;
// case '2': sem2Count++; break;
// case '3': sem3Count++; break;
// case '4': sem4Count++; break;
// }
// }

// var tmpsem0Count = sem0Count;
// var tmpsem1Count = sem1Count;
// var tmpsem2Count = sem2Count;
// var tmpsem3Count = sem3Count;
// var tmpsem4Count = sem4Count;

// var tmp_sem0Count = sem0Count;
// var tmp_sem1Count = sem1Count;
// var tmp_sem2Count = sem2Count;
// var tmp_sem3Count = sem3Count;
// var tmp_sem4Count = sem4Count;

// newStr +="<tr>";
// newStr +="<th style='border: 1px solid black;width:auto;'>Student No</th>";
// newStr +="<th style='border: 1px solid black;width:auto;'>Name</th>";
// newStr +="<th style='border: 1px solid black;width:auto;'>Address</th>";


// newStr +="</tr>";

// //en

// //si
// var sinCount=0;
// var sinRowCount=1;

// var	newStrSin ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
// newStrSin +="<div id='topics1' class='info'></div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
// newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";


// newStrSin +="<br>";
// newStrSin +="<table style='border-collapse: collapse;border: 1px solid black;'>";

// var sem0Count = 0;
// var sem1Count = 0;
// var sem2Count = 0;
// var sem3Count = 0;
// var sem4Count = 0;

// for(var j = 0 ; j < subDownLength ; j++){
// switch(tmpSemesterArr[j]) {	
// case '0': sem0Count++; break;
// case '1': sem1Count++; break;
// case '2': sem2Count++; break;
// case '3': sem3Count++; break;
// case '4': sem4Count++; break;
// }
// }

// var tmpsem0Count = sem0Count;
// var tmpsem1Count = sem1Count;
// var tmpsem2Count = sem2Count;
// var tmpsem3Count = sem3Count;
// var tmpsem4Count = sem4Count;

// var tmp_sem0Count = sem0Count;
// var tmp_sem1Count = sem1Count;
// var tmp_sem2Count = sem2Count;
// var tmp_sem3Count = sem3Count;
// var tmp_sem4Count = sem4Count;

// newStrSin +="<tr>";
// newStrSin +="<th style='border: 1px solid black;width:auto;'>Student No</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;'>Name</th>";
// newStrSin +="<th style='border: 1px solid black;width:auto;'>Address</th>";


// newStrSin +="</tr>";


// //si


// sem0Count = tmp_sem0Count;
// sem1Count = tmp_sem1Count;
// sem2Count = tmp_sem2Count;
// sem3Count = tmp_sem3Count;
// sem4Count = tmp_sem4Count;

// for(i = 0 ; i < finalLength ; i++){

// //en 
// //if(fi_ResultArr[i] == "Pass"){

// if(fi_MediumArr[i]=="en"){	//if(fi_ResultArr[i] == "Pass"){

// newStr +="<tr>";
// var tmpStudent = fi_PassStudNoArr[i];
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+fi_PassStudNoArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >'+fi_PassStudNameArr[i]+'</td>';
// newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+fi_AddressArr[i]+'</td>';

// if(tmpStudent == fi_PassStudNoArr[i]){
// tmp_sem0Count = sem0Count;
// tmp_sem1Count = sem1Count;
// tmp_sem2Count = sem2Count;
// tmp_sem3Count = sem3Count;
// tmp_sem4Count = sem4Count;

// var tmpsem0Check = false;
// var tmpsem1Check = false;
// var tmpsem2Check = false;
// var tmpsem3Check = false;
// var tmpsem4Check = false;
// }

// for(k = 0 ; k < subDownLength ; k++){
// //alert(i);
// if(tmpStudent == fi_PassStudNoArr[i]){
// if(tmpDownGradeArr[i] == '-'){
// tmpDownGradeArr[i] = '(ab)';
// }
// if(tmpDownMarksArr[i] == '125'){
// tmpDownMarksArr[i] = '(ab)';
// }

// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem0Count--;
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }

// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';


// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }

// if(k == subDownLength-1){

// }else{
// i++;
// }

// }else{
// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem0Count--;							
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else{
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// }

// if(k == subDownLength-1){
// i--;
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(!tmpsem0Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem1Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem2Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem3Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem4Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else{
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }

// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';

// }
// }
// }


// newStr +="</tr>";
// newStr += "</div><dev><br>";
// engCount++;
// engRowCount++;
// }
// //en

// //si
// if(fi_MediumArr[i]=="si"){	//if(fi_ResultArr[i] == "Pass"){

// newStrSin +="<tr>";
// var tmpStudent = fi_PassStudNoArr[i];
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+fi_PassStudNoArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >'+fi_PassStudNameArr[i]+'</td>';
// newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >'+fi_AddressArr[i]+'</td>';


// if(tmpStudent == fi_PassStudNoArr[i]){
// tmp_sem0Count = sem0Count;
// tmp_sem1Count = sem1Count;
// tmp_sem2Count = sem2Count;
// tmp_sem3Count = sem3Count;
// tmp_sem4Count = sem4Count;

// var tmpsem0Check = false;
// var tmpsem1Check = false;
// var tmpsem2Check = false;
// var tmpsem3Check = false;
// var tmpsem4Check = false;
// }

// for(k = 0 ; k < subDownLength ; k++){
// //alert(i);
// if(tmpStudent == fi_PassStudNoArr[i]){
// if(tmpDownGradeArr[i] == '-'){
// tmpDownGradeArr[i] = '(ab)';
// }
// if(tmpDownMarksArr[i] == '125'){
// tmpDownMarksArr[i] = '(ab)';
// }

// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem0Count--;
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }

// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';


// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownMarksArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpDownGradeArr[i]+'</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpsubjectGPAArr[i]+'</td>';

// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }

// if(k == subDownLength-1){

// }else{
// i++;
// }

// }else{
// if(tmpsusSemArr[i] == '0' && tmp_sem0Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem0Count--;							
// if(tmp_sem0Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '1' && tmp_sem1Count != 0){
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// // newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem1Count--;
// if(tmp_sem1Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '2' && tmp_sem2Count != 0){
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem2Count--;
// if(tmp_sem2Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '3' && tmp_sem3Count != 0){
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem3Count--;
// if(tmp_sem3Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else if(tmpsusSemArr[i] == '4' && tmp_sem4Count != 0){
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// tmp_sem4Count--;
// if(tmp_sem4Count == 0){
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// tmpsem0Check = true;
// tmpsem1Check = true;
// tmpsem2Check = true;
// tmpsem3Check = true;
// tmpsem4Check = true;
// break;
// }
// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
// }
// }else{
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// //newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
// }

// if(k == subDownLength-1){
// i--;
// var tmpGPAHolder = '0.0';
// var tmpResultStatus="";
// for(var m = 0; m < fi_Length; m++){
// if(!tmpsem0Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem1Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem2Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem3Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else if(!tmpsem4Check){
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }else{
// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1'){
// //tmpGPAHolder = fi_GPAArr[m];
// tmpResultStatus = fi_ResultArr[m];
// break;
// }
// }

// }
// //newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';

// }
// }
// }


// newStrSin +="</tr>";
// newStrSin += "</div><dev><br>";
// sinCount++;
// sinRowCount++;
// }

// //si

// //}	

// }

// //en
// newStr +="</table>";
// newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:left;'>B.A.N. Krishantha/Deputy Registrar/Examinations/University of Kelaniya,Kelaniya</div>...............................</div><div class='investLabel' style='text-align:right;'>Professor D.M. Semasinghe/Vice - Chancellor/University of Kelaniya,Kelaniya...............................</div>";
// newStr +="<br>";
// // newStr +="<br>";
// // newStr +="<div class='investLabel' style='text-align:right;'>Professor D.M. Semasinghe/Vice - Chancellor/University of Kelaniya,Kelaniya</div>";
// // newStr +="<br>";
// newStr +="<div class='investLabel' style='text-align:left;'>Date..............................</div>";

// var exportFilename = BatchYear + " - English - " + degTitle+" Pass Sheet.xls";
// var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});



// //en

// //si
// newStrSin +="</table>";
// newStrSin +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:left;'>B.A.N. Krishantha/Deputy Registrar/Examinations/University of Kelaniya,Kelaniya</div>...............................</div><div class='investLabel' style='text-align:right;'>Professor D.M. Semasinghe/Vice - Chancellor/University of Kelaniya,Kelaniya...............................</div>";
// newStrSin +="<br>";
// // newStr +="<br>";
// // newStr +="<div class='investLabel' style='text-align:right;'>Professor D.M. Semasinghe/Vice - Chancellor/University of Kelaniya,Kelaniya</div>";
// // newStr +="<br>";
// newStrSin +="<div class='investLabel' style='text-align:left;'>Date..............................</div>";

// var exportFilenameSin = BatchYear + " - Sinhala - " + degTitle+" Pass Sheet.xls";
// var csvDataSin = new Blob([newStrSin], {type: 'text/csv;charset=utf-8;'});



// //si



// //IE11 & Edge
// //eng
// if(engCount!=0)
// {
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
// //eng


// //sin
// if(sinCount!=0)
// {
// if (navigator.msSaveBlob) {
// navigator.msSaveBlob(csvDataSin, exportFilenameSin);
// } else {
// //In FF link must be added to DOM to be clicked
// var link = document.createElement('a');
// link.href = window.URL.createObjectURL(csvDataSin);
// link.setAttribute('download', exportFilenameSin);
// document.body.appendChild(link);    
// link.click();
// document.body.removeChild(link);    
// }
// }
// //sin
// resetRepResultDownload()
// sendForm('data4DownloadsubjectDetails');
// sendForm('data4DownloaddegreeSubjects');		
// }else{
// resetRepResultDownload()
// sendForm('data4DownloadsubjectDetails');
// sendForm('data4DownloaddegreeSubjects');
// alert("Data not available");

// }

// }

//------------------------------------------------pass list download ends----------------------------------------------------------------------------------------------------------------------------



function resetRepResultDownload() {
	dataRep["degCode"] = "";
	dataRep["degSem"] = "";
	dataRep["degSub"] = "";
	dataRep["acyear"] = "";
	tmpDownLength = 0;
	subDownLength = 0;
	ex_CodeLength = 0;
	fi_Length = 0;
	finalLength = 0;
	repDownLength = 0;
}


//Edited-Final-Report-SEW-Starts--------------------------------------------------------------------------------------

function examDownloadFinalReportRepeatTemp(degTitle, BatchYear) {
	if (tmpDownLength != 0 && subDownLength != 0) {

		//en
		var engFICount = 0;
		var engFIRowCount = 1;

		var newStr = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr += "<div id='topics1' class='info'></div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStr += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";


		newStr += "<br>";
		newStr += "<table style='border-collapse: collapse;border: 1px solid black;'>";

		var sem0Count = 0;
		var sem1Count = 0;
		var sem2Count = 0;
		var sem3Count = 0;
		var sem4Count = 0;

		for (var j = 0; j < subDownLength; j++) {
			switch (tmpSemesterArr[j]) {
				case '0': sem0Count++; break;
				case '1': sem1Count++; break;
				case '2': sem2Count++; break;
				case '3': sem3Count++; break;
				case '4': sem4Count++; break;
			}
		}

		var tmpsem0Count = sem0Count;
		var tmpsem1Count = sem1Count;
		var tmpsem2Count = sem2Count;
		var tmpsem3Count = sem3Count;
		var tmpsem4Count = sem4Count;

		var tmp_sem0Count = sem0Count;
		var tmp_sem1Count = sem1Count;
		var tmp_sem2Count = sem2Count;
		var tmp_sem3Count = sem3Count;
		var tmp_sem4Count = sem4Count;

		newStr += "<tr>";
		newStr += "<th style='border: 1px solid black;' rowspan='2'>No</th>";
		newStr += "<th style='border: 1px solid black;' rowspan='2'>Student No</th>";
		newStr += "<th style='border: 1px solid black;' rowspan='2'>Name</th>";

		for (var j = 0; j < subDownLength; j++) {
			if (tmpSemesterArr[j] == '0' && sem0Count != 0) {
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem0Count + 1) + '">Semester 0</td>';
				sem0Count = 0;
			} else if (tmpSemesterArr[j] == '1' && sem1Count != 0) {
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem1Count + 1) + '">Semester 1</td>';
				sem1Count = 0;
			} else if (tmpSemesterArr[j] == '2' && sem2Count != 0) {
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem2Count + 1) + '">Semester 2</td>';
				sem2Count = 0;
			} else if (tmpSemesterArr[j] == '3' && sem3Count != 0) {
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem3Count + 1) + '">Semester 3</td>';
				sem3Count = 0;
			} else if (tmpSemesterArr[j] == '4' && sem4Count != 0) {
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem4Count + 1) + '">Semester 4</td>';
				sem4Count = 0;
			}
		}
		newStr += "</tr>";
		newStr += "<tr>";
		for (j = 0; j < subDownLength; j++) {
			if (tmpSemesterArr[j] == '0' && tmpsem0Count != 0) {
				newStr += "<th style='border: 1px solid black;width:100px;text-align:center' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem0Count--;
				if (tmpsem0Count == 0) {
					newStr += "<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
					newStr += "<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				}
			} else if (tmpSemesterArr[j] == '1' && tmpsem1Count != 0) {
				newStr += "<th style='border: 1px solid black;width:100px;' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem1Count--;
				// if(tmpsem1Count == 0){
				// newStr +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
				// newStr +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				// }
			} else if (tmpSemesterArr[j] == '2' && tmpsem2Count != 0) {
				newStr += "<th style='border: 1px solid black;width:100px;' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem2Count--;
				// if(tmpsem2Count == 0){
				// newStr +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
				// newStr +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				// }
			} else if (tmpSemesterArr[j] == '3' && tmpsem3Count != 0) {
				newStr += "<th style='border: 1px solid black;width:100px;' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem3Count--;
				// if(tmpsem3Count == 0){
				// newStr +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
				// newStr +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				// }
			} else if (tmpSemesterArr[j] == '4' && tmpsem4Count != 0) {
				newStr += "<th style='border: 1px solid black;width:100px;' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem4Count--;
				if (tmpsem4Count == 0) {
					newStr += "<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
					newStr += "<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				}
			}


		}

		newStr += "</tr>";
		//en


		//si
		var sinFICount = 0;
		var sinFIRowCount = 1;

		var newStrSin = "<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStrSin += "<div id='topics1' class='info'></div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>" + degTitle + " Degree Programme</div>";
		newStrSin += "<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - " + BatchYear + "</div>";


		newStrSin += "<br>";
		newStrSin += "<table style='border-collapse: collapse;border: 1px solid black;'>";

		var sem0Count = 0;
		var sem1Count = 0;
		var sem2Count = 0;
		var sem3Count = 0;
		var sem4Count = 0;

		for (var j = 0; j < subDownLength; j++) {
			switch (tmpSemesterArr[j]) {
				case '0': sem0Count++; break;
				case '1': sem1Count++; break;
				case '2': sem2Count++; break;
				case '3': sem3Count++; break;
				case '4': sem4Count++; break;
			}
		}

		var tmpsem0Count = sem0Count;
		var tmpsem1Count = sem1Count;
		var tmpsem2Count = sem2Count;
		var tmpsem3Count = sem3Count;
		var tmpsem4Count = sem4Count;

		var tmp_sem0Count = sem0Count;
		var tmp_sem1Count = sem1Count;
		var tmp_sem2Count = sem2Count;
		var tmp_sem3Count = sem3Count;
		var tmp_sem4Count = sem4Count;

		newStrSin += "<tr>";
		newStrSin += "<th style='border: 1px solid black;' rowspan='2'>No</th>";
		newStrSin += "<th style='border: 1px solid black;' rowspan='2'>Student No</th>";
		newStrSin += "<th style='border: 1px solid black;' rowspan='2'>Name</th>";

		for (var j = 0; j < subDownLength; j++) {
			if (tmpSemesterArr[j] == '0' && sem0Count != 0) {
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem0Count + 1) + '">Semester 0</td>';
				sem0Count = 0;
			} else if (tmpSemesterArr[j] == '1' && sem1Count != 0) {
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem1Count + 1) + '">Semester 1</td>';
				sem1Count = 0;
			} else if (tmpSemesterArr[j] == '2' && sem2Count != 0) {
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem2Count + 1) + '">Semester 2</td>';
				sem2Count = 0;
			} else if (tmpSemesterArr[j] == '3' && sem3Count != 0) {
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem3Count + 1) + '">Semester 3</td>';
				sem3Count = 0;
			} else if (tmpSemesterArr[j] == '4' && sem4Count != 0) {
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:auto;text-align:center" colspan="' + (sem4Count + 1) + '">Semester 4</td>';
				sem4Count = 0;
			}
		}
		newStrSin += "</tr>";
		newStrSin += "<tr>";
		for (j = 0; j < subDownLength; j++) {
			if (tmpSemesterArr[j] == '0' && tmpsem0Count != 0) {
				newStrSin += "<th style='border: 1px solid black;width:100px;text-align:center' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem0Count--;
				if (tmpsem0Count == 0) {
					newStrSin += "<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
					newStrSin += "<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				}
			} else if (tmpSemesterArr[j] == '1' && tmpsem1Count != 0) {
				newStrSin += "<th style='border: 1px solid black;width:100px;' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem1Count--;
				// if(tmpsem1Count == 0){
				// newStrSin +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
				// newStrSin +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				// }
			} else if (tmpSemesterArr[j] == '2' && tmpsem2Count != 0) {
				newStrSin += "<th style='border: 1px solid black;width:100px;' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem2Count--;
				// if(tmpsem2Count == 0){
				// newStrSin +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
				// newStrSin +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				// }
			} else if (tmpSemesterArr[j] == '3' && tmpsem3Count != 0) {
				newStrSin += "<th style='border: 1px solid black;width:100px;' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem3Count--;
				// if(tmpsem3Count == 0){
				// newStrSin +="<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
				// newStrSin +="<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				// }
			} else if (tmpSemesterArr[j] == '4' && tmpsem4Count != 0) {
				newStrSin += "<th style='border: 1px solid black;width:100px;' colspan='3' >" + tmpSubCodeArr[j] + "</th>";
				tmpsem4Count--;
				if (tmpsem4Count == 0) {
					newStrSin += "<th style='border: 1px solid black;width:100px;'>Final GPA</th>";
					newStrSin += "<th style='border: 1px solid black;width:auto;'>Result Status</th>";
				}
			}


		}

		newStrSin += "</tr>";
		//si

		sem0Count = tmp_sem0Count;
		sem1Count = tmp_sem1Count;
		sem2Count = tmp_sem2Count;
		sem3Count = tmp_sem3Count;
		sem4Count = tmp_sem4Count;

		for (i = 0; i < tmpDownLength; i++) {

			//en
			if (tmpDownstudentMediumArr[i] == "en") {

				newStr += "<tr>";
				var tmpStudent = tmpDownStudNoArr[i];
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >' + engFIRowCount + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >' + tmpDownStudNoArr[i] + '</td>';
				newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >' + tmpDownStudNameArr[i] + '</td>';

				if (tmpStudent == tmpDownStudNoArr[i]) {
					tmp_sem0Count = sem0Count;
					tmp_sem1Count = sem1Count;
					tmp_sem2Count = sem2Count;
					tmp_sem3Count = sem3Count;
					tmp_sem4Count = sem4Count;

					var tmpsem0Check = false;
					var tmpsem1Check = false;
					var tmpsem2Check = false;
					var tmpsem3Check = false;
					var tmpsem4Check = false;
				}

				for (k = 0; k < subDownLength; k++) {
					//alert(i);
					if (tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]) {
						if (tmpDownGradeArr[i] == '-') {
							tmpDownGradeArr[i] = '(ab)';
						}
						if (tmpDownMarksArr[i] == '125') {
							tmpDownMarksArr[i] = '(ab)';
						}

						if (tmpsusSemArr[i] == '0' && tmp_sem0Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem0Count--;
							if (tmp_sem0Count == 0) {
								var tmpGPAHolder = '0.0';
								var tmpResultStatus = "";
								for (var m = 0; m < fi_Length; m++) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										tmpsem0Check = true;
										break;
									}
								}

								newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';
								newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpResultStatus + '</td>';


							}
						} else if (tmpsusSemArr[i] == '1' && tmp_sem1Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem1Count--;
							// if(tmp_sem1Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// break;
							// }
							// }
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '2' && tmp_sem2Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem2Count--;
							// if(tmp_sem2Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// tmpsem2Check = true;
							// break;
							// }
							// }
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '3' && tmp_sem3Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem3Count--;
							// if(tmp_sem3Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// tmpsem2Check = true;
							// tmpsem3Check = true;
							// break;
							// }
							// }
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '4' && tmp_sem4Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem4Count--;
							if (tmp_sem4Count == 0) {
								var tmpGPAHolder = '0.0';
								var tmpResultStatus = "";
								for (var m = 0; m < fi_Length; m++) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										tmpsem0Check = true;
										tmpsem1Check = true;
										tmpsem2Check = true;
										tmpsem3Check = true;
										tmpsem4Check = true;
										break;
									}
								}
								newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';
								newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpResultStatus + '</td>';
							}
						}

						if (k == subDownLength - 1) {

						} else {
							i++;

						}

					} else {
						if (tmpsusSemArr[i] == '0' && tmp_sem0Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem0Count--;
							// if(tmp_sem0Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// break;
							// }
							// }
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '1' && tmp_sem1Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem1Count--;
							// if(tmp_sem1Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// break;
							// }
							// }
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '2' && tmp_sem2Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem2Count--;
							// if(tmp_sem2Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// tmpsem2Check = true;
							// break;
							// }
							// }
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '3' && tmp_sem3Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem3Count--;
							// if(tmp_sem3Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// tmpsem2Check = true;
							// tmpsem3Check = true;
							// break;
							// }
							// }
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStr +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '4' && tmp_sem4Count != 0) {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem4Count--;
							if (tmp_sem4Count == 0) {
								var tmpGPAHolder = '0.0';
								var tmpResultStatus = "";
								for (var m = 0; m < fi_Length; m++) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										tmpsem0Check = true;
										tmpsem1Check = true;
										tmpsem2Check = true;
										tmpsem3Check = true;
										tmpsem4Check = true;
										break;
									}
								}
								newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';
								newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpResultStatus + '</td>';
							}
						} else {
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
						}

						if (k == subDownLength - 1) {
							i--;
							var tmpGPAHolder = '0.0';
							var tmpResultStatus = "";
							for (var m = 0; m < fi_Length; m++) {
								if (!tmpsem0Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else if (!tmpsem1Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else if (!tmpsem2Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else if (!tmpsem3Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else if (!tmpsem4Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								}

							}
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';
							newStr += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpResultStatus + '</td>';

						}
					}
				}

				//alert(engRowCount);
				newStr += "</tr>";
				newStr += "</div><dev><br>";
				engFICount++;
				engFIRowCount++;
				//en
			}

			//si
			if (tmpDownstudentMediumArr[i] == "si") {

				newStrSin += "<tr>";
				var tmpStudent = tmpDownStudNoArr[i];
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >' + sinFIRowCount + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;" >' + tmpDownStudNoArr[i] + '</td>';
				newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;" >' + tmpDownStudNameArr[i] + '</td>';

				if (tmpStudent == tmpDownStudNoArr[i]) {
					tmp_sem0Count = sem0Count;
					tmp_sem1Count = sem1Count;
					tmp_sem2Count = sem2Count;
					tmp_sem3Count = sem3Count;
					tmp_sem4Count = sem4Count;

					var tmpsem0Check = false;
					var tmpsem1Check = false;
					var tmpsem2Check = false;
					var tmpsem3Check = false;
					var tmpsem4Check = false;
				}

				for (k = 0; k < subDownLength; k++) {
					//alert(i);
					if (tmpDownSubCodeArr[i] == tmpSubCodeArr[k] && tmpStudent == tmpDownStudNoArr[i]) {
						if (tmpDownGradeArr[i] == '-') {
							tmpDownGradeArr[i] = '(ab)';
						}
						if (tmpDownMarksArr[i] == '125') {
							tmpDownMarksArr[i] = '(ab)';
						}

						if (tmpsusSemArr[i] == '0' && tmp_sem0Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem0Count--;
							if (tmp_sem0Count == 0) {
								var tmpGPAHolder = '0.0';
								var tmpResultStatus = "";
								for (var m = 0; m < fi_Length; m++) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										tmpsem0Check = true;
										break;
									}
								}

								newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';
								newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpResultStatus + '</td>';


							}
						} else if (tmpsusSemArr[i] == '1' && tmp_sem1Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem1Count--;
							// if(tmp_sem1Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// break;
							// }
							// }
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '2' && tmp_sem2Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem2Count--;
							// if(tmp_sem2Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// tmpsem2Check = true;
							// break;
							// }
							// }
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '3' && tmp_sem3Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem3Count--;
							// if(tmp_sem3Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// tmpsem2Check = true;
							// tmpsem3Check = true;
							// break;
							// }
							// }
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '4' && tmp_sem4Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownMarksArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpDownGradeArr[i] + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpsubjectGPAArr[i] + '</td>';

							tmp_sem4Count--;
							if (tmp_sem4Count == 0) {
								var tmpGPAHolder = '0.0';
								var tmpResultStatus = "";
								for (var m = 0; m < fi_Length; m++) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										tmpsem0Check = true;
										tmpsem1Check = true;
										tmpsem2Check = true;
										tmpsem3Check = true;
										tmpsem4Check = true;
										break;
									}
								}
								newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';
								newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpResultStatus + '</td>';
							}
						}

						if (k == subDownLength - 1) {

						} else {
							i++;
						}

					} else {
						if (tmpsusSemArr[i] == '0' && tmp_sem0Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem0Count--;
							// if(tmp_sem0Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// break;
							// }
							// }
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '1' && tmp_sem1Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem1Count--;
							// if(tmp_sem1Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// break;
							// }
							// }
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '2' && tmp_sem2Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem2Count--;
							// if(tmp_sem2Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// tmpsem2Check = true;
							// break;
							// }
							// }
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '3' && tmp_sem3Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem3Count--;
							// if(tmp_sem3Count == 0){
							// var tmpGPAHolder = '0.0';
							// var tmpResultStatus="";
							// for(var m = 0; m < fi_Length; m++){
							// if(fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3'){
							// tmpGPAHolder = fi_GPAArr[m];
							// tmpResultStatus = fi_ResultArr[m];
							// tmpsem0Check = true;
							// tmpsem1Check = true;
							// tmpsem2Check = true;
							// tmpsem3Check = true;
							// break;
							// }
							// }
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpGPAHolder+'</td>';
							// newStrSin +='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+tmpResultStatus+'</td>';
							// }
						} else if (tmpsusSemArr[i] == '4' && tmp_sem4Count != 0) {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							tmp_sem4Count--;
							if (tmp_sem4Count == 0) {
								var tmpGPAHolder = '0.0';
								var tmpResultStatus = "";
								for (var m = 0; m < fi_Length; m++) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										tmpsem0Check = true;
										tmpsem1Check = true;
										tmpsem2Check = true;
										tmpsem3Check = true;
										tmpsem4Check = true;
										break;
									}
								}
								newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';
								newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpResultStatus + '</td>';
							}
						} else {
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">-</td>';
						}

						if (k == subDownLength - 1) {
							i--;
							var tmpGPAHolder = '0.0';
							var tmpResultStatus = "";
							for (var m = 0; m < fi_Length; m++) {
								if (!tmpsem0Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '0') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else if (!tmpsem1Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '1') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else if (!tmpsem2Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '2') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else if (!tmpsem3Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '3') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else if (!tmpsem4Check) {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '4') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								} else {
									if (fi_StudNoArr[m] == tmpStudent && fi_semArr[m] == '-1') {
										tmpGPAHolder = fi_GPAArr[m];
										tmpResultStatus = fi_ResultArr[m];
										break;
									}
								}

							}
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpGPAHolder + '</td>';
							newStrSin += '<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">' + tmpResultStatus + '</td>';

						}
					}
				}


				newStrSin += "</tr>";
				newStrSin += "</div><dev><br>";
				sinFICount++;
				sinFIRowCount++;

			}
			//si

		}



		//en
		newStr += "</table>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStr += "<br>";
		newStr += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";


		var exportFilename = BatchYear + " - English - " + degTitle + " Final Result Sheet.xls";
		var csvData = new Blob([newStr], { type: 'text/csv;charset=utf-8;' });

		//en

		//si
		newStrSin += "</table>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStrSin += "<br>";
		newStrSin += "<div class='investLabel' style='text-align:right;'>Date..............................</div>";

		var exportFilenameSin = BatchYear + " - Sinhala - " + degTitle + " Final Result Sheet.xls";
		var csvDataSin = new Blob([newStrSin], { type: 'text/csv;charset=utf-8;' });


		//si




		//IE11 & Edge
		if (engFICount != 0) {
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
		if (sinFICount != 0) {
			if (navigator.msSaveBlob) {
				navigator.msSaveBlob(csvDataSin, exportFilenameSin);
			} else {
				//In FF link must be added to DOM to be clicked
				var link = document.createElement('a');
				link.href = window.URL.createObjectURL(csvDataSin);
				link.setAttribute('download', exportFilenameSin);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		}

		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
	} else {
		resetRepResultDownload()
		sendForm('data4DownloadRepsubjectDetails');
		sendForm('data4DownloadRepdegreeSubjects');
		alert("Data not available");

	}

}

//Edited-Final-Report-SEW-Ends--------------------------------------------------------------------------------------







