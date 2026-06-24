
function formReRepeatDownloadList(dsp) {

	str = ""; 
	title = "Re - Repeat Attempt Upload/Download Examination Results"; 
  
	if(dsp == "formReRepeatDownloadList") {    
		str  = "<div id='formReRepeatDownloadList'>";	
		str += "<table><tr><td>";
		str += '<h2 >'+title+'</h2><hr>';
		str += '<form id="formReRepeatDownloadList"><br>';
		str +="<div>";	
		
		str += "<div style='clear:both'>";
		str += '<input type="button" class ="btnD" value="Return to Examination Menu" onclick="resetRepResultUpload();resetReRepeatResultDownload();showMenu('+"'formExamMenu'"+');">';
		str += '<input type="button" id="btnDlog" class="btnD" value="logout"  onclick= logOut();>';
		str +="</div>";
		
		str += '</td></table></div>';
		str += '</form>';
	}		
	return str;
	
}


//------------------------------Enter Results Sheet Stars---------------------------------------------------------------------------------------------------------------------------
function ReRepatexamDownloadSheetTemp(degTitle, SubName, SubCode, BatchYear){
	if(ex_CodeLength != 0){
		//alert(ex_studentMediumArr);
		 
		//eng
		var data = new Array();
		var engCount=0;
		//sin
		var dataSin = new Array();
		var sinCount=0;
		//eng
		for(i = 0 ; i < ex_CodeLength ; i++){
				// var Repreason="";
				// if(ex_studentReasonArr[i]=="Repeat"){
					// Repreason ="R"
				// }
				// if(ex_studentReasonArr[i]=="Medical/Other_Reasons"){
					// Repreason ="M"
				// }
			if (ex_studentMediumArr[i]=="en")
			{
			data[i] = [[ex_studentNoArr[i],ex_studentNameArr[i],'','']];
			engCount++;
			}
			else if(ex_studentMediumArr[i]=="si")
			{
			dataSin[i] = [[ex_studentNoArr[i],ex_studentNameArr[i],'','']];
			sinCount++;
			}
		}
		
		//eng
		var csvHead = 'Student No,Name,Examiner 1,Examiner 2\n';
		data.forEach(function(row) {
				csvHead += row.join(',');
				csvHead += "\n";
		});
		
		//sin
		var csvHeadSin = 'Student No,Name,Examiner 1,Examiner 2\n';
		dataSin.forEach(function(row) {
				csvHeadSin += row.join(',');
				csvHeadSin += "\n";
		});
		
		
		//eng
		var exportFilename = BatchYear + " - English - " + SubName+" ("+SubCode+").csv";
		var csvData = new Blob([csvHead], {type: 'text/csv;charset=utf-8;'});
		
		//sin
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+").csv";
		var csvDataSin = new Blob([csvHeadSin], {type: 'text/csv;charset=utf-8;'});
		
		//IE11 & Edge
		//eng
		if(engCount!=0){
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
		if(sinCount!=0){
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



		
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
	}else{
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
		alert("Data not available");
		
	}
	
}

//------------------------------Enter Results Sheet Ends---------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------mark sheet starts---------------------------------------------------------------------------------------------------------------
function ReRepeatexamDownloadMarkSheetTemp(degTitle, SubName, SubCode, BatchYear){
		if(ex_CodeLength != 0){
		
		
			//eng 1examiner
		var engCount=0;
		var engEX1RowCount=1;
		var	newStr ="<div  id='inputs' style='clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		//newStr +="<img src='img/logo.png' style='width:80px;height:80px;align:center;'/>";
		newStr +="<h3 style='text-align:center;font-weight:bold;font-size:16px;'>Faculty of Graduate Studies</h3>";
		newStr +="<h3 style='text-align:center;font-weight:bold;font-size:16px;'>University of Kelaniya</h3>";
		newStr +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>"+degTitle+" Degree Programme</h4>";
		newStr +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>"+SubName+" ("+SubCode+")</h4>";
		newStr +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Academic Year - "+BatchYear+" - English Medium </h4>";
		newStr +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Mark Sheet - First Examiner</h4>";
		newStr +="<hr/>";
		newStr +="<div style='clear:both;text-align:justify;font-size:12px;'>The Supervisor should complete the relevant parts of sheet and enclose with answer scripts. Students who were not present for the examination, 'Absent' against their Student No. in the mark sheet. Examiner should sign each page.</div>";
		newStr +="<hr/>";
		newStr +="<br>";
		
		newStr +='<table width="705" cellspacing="1" cellpadding="1">';
		newStr +='<tbody>';
		newStr +='<tr>';
		newStr +='<td width="310">';
		newStr +='<p>Examination Hall :&nbsp; ........................................</p>';
		newStr +='</td>';
		newStr +='<td width="392">';
		newStr +='<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStr +='</td>';
		newStr +='</tr>';
		newStr +='<tr>';
		newStr +='<td width="310">';
		newStr +='<p>Examination Date &amp; Time :........................................................................</p>';
		newStr +='</td>';
		newStr +='<td width="392">';
		newStr +='<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStr +='</td>';
		newStr +='</tr>';
		newStr +='<tr>';
		newStr +='<td width="310">';
		newStr +='<p>No of Students :...............................................</p>';
		newStr +='</td>';
		newStr +='<td width="392">';
		newStr +='<p>&nbsp;</p>';
		newStr +='</td>';
		newStr +='</tr>';
		newStr +='</tbody>';
		newStr +='</table>';

		newStr +="<br>";
		//newStr +="<br>";
		newStr +="<table cellspacing='5' style='border-collapse: collapse;border: 1px solid #524f4f;'>";
			newStr +="<tr>";
				newStr +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>No</th>";
				newStr +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Student No</th>";
				newStr +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;Total&nbsp;&nbsp;</th>";
				for(var j = 1 ; j < 11 ; j++){
					newStr +="<th style='border: 1px solid #524f4f;width:300px;font-size:14px;font-family:Times New Roman;' >&nbsp;&nbsp;&nbsp;Q"+j+"&nbsp;&nbsp;&nbsp;</th>";
				}
				newStr +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-1</th>";
				newStr +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-2</th>";
			newStr +="</tr>";
		//eng 1examiner
		
		//eng 2examiner
		var engCount2=0;
		var engEX2RowCount=1;
		var	newStr2 ="<div  id='inputs' style='clear:both'>";
		newStr2 +="<div id='topics1' class='info'></div>";
		//newStr2 +="<img src='img/logo.png' style='width:80px;height:80px;align:center;'/>";
		newStr2 +="<h3 style='text-align:center;font-weight:bold;font-size:16px;'>Faculty of Graduate Studies</h3>";
		newStr2 +="<h3 style='text-align:center;font-weight:bold;font-size:16px;'>University of Kelaniya</h3>";
		newStr2 +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>"+degTitle+" Degree Programme</h4>";
		newStr2 +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>"+SubName+" ("+SubCode+")</h4>";
		newStr2 +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Academic Year - "+BatchYear+" - English Medium </h4>";
		newStr2 +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Mark Sheet - Second Examiner</h4>";
		newStr2 +="<hr/>";
		newStr2 +="<div style='clear:both;text-align:justify;font-size:12px;'>The Supervisor should complete the relevant parts of sheet and enclose with answer scripts. Students who were not present for the examination, 'Absent' against their Student No. in the mark sheet. Examiner should sign each page.</div>";
		newStr2 +="<hr/>";
		newStr2 +="<br>";
				
		newStr2 +='<table width="705" cellspacing="1" cellpadding="1">';
		newStr2 +='<tbody>';
		newStr2 +='<tr>';
		newStr2 +='<td width="310">';
		newStr2 +='<p>Examination Hall :&nbsp; ........................................</p>';
		newStr2 +='</td>';
		newStr2 +='<td width="392">';
		newStr2 +='<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStr2 +='</td>';
		newStr2 +='</tr>';
		newStr2 +='<tr>';
		newStr2 +='<td width="310">';
		newStr2 +='<p>Examination Date &amp; Time :........................................................................</p>';
		newStr2 +='</td>';
		newStr2 +='<td width="392">';
		newStr2 +='<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStr2 +='</td>';
		newStr2 +='</tr>';
		newStr2 +='<tr>';
		newStr2 +='<td width="310">';
		newStr2 +='<p>No of Students :...............................................</p>';
		newStr2 +='</td>';
		newStr2 +='<td width="392">';
		newStr2 +='<p>&nbsp;</p>';
		newStr2 +='</td>';
		newStr2 +='</tr>';
		newStr2 +='</tbody>';
		newStr2 +='</table>';

		newStr2 +="<br>";
		//newStr2 +="<br>";
		newStr2 +="<table cellspacing='5' style='border-collapse: collapse;border: 1px solid #524f4f;'>";
			newStr2 +="<tr>";
				newStr2 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>No</th>";
				newStr2 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Student No</th>";
				newStr2 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;Total&nbsp;&nbsp;</th>";
				for(var j = 1 ; j < 11 ; j++){
					newStr2 +="<th style='border: 1px solid #524f4f;width:300px;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;&nbsp;Q"+j+"&nbsp;&nbsp;&nbsp;</th>";
				}
				newStr2 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-1</th>";
				newStr2 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-2</th>";
			newStr2 +="</tr>";
		//eng 2examiner
		
		
		//sin 1examiner
		var sinCount=0;
		var sinEX1RowCount=1;
		var	newStrSIn ="<div  id='inputs' style='clear:both'>";
		newStrSIn +="<div id='topics1' class='info'></div>";
		//newStrSIn +="<img src='img/logo.png' style='width:80px;height:80px;align:center;'/>";
		newStrSIn +="<h3 style='text-align:center;font-weight:bold;font-size:16px;'>Faculty of Graduate Studies</h3>";
		newStrSIn +="<h3 style='text-align:center;font-weight:bold;font-size:16px;'>University of Kelaniya</h3>";
		newStrSIn +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>"+degTitle+" Degree Programme</h4>";
		newStrSIn +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>"+SubName+" ("+SubCode+")</h4>";
		newStrSIn +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Academic Year - "+BatchYear+" - Sinhala Medium </h4>";
		newStrSIn +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Mark Sheet - First Examiner</h4>";
		newStrSIn +="<hr/>";
		newStrSIn +="<div style='clear:both;text-align:justify;font-size:12px;'>The Supervisor should complete the relevant parts of sheet and enclose with answer scripts. Students who were not present for the examination, 'Absent' against their Student No. in the mark sheet. Examiner should sign each page.</div>";
		newStrSIn +="<hr/>";
		newStrSIn +="<br>";
		
		newStrSIn +='<table width="705" cellspacing="1" cellpadding="1">';
		newStrSIn +='<tbody>';
		newStrSIn +='<tr>';
		newStrSIn +='<td width="310">';
		newStrSIn +='<p>Examination Hall :&nbsp; ........................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='<td width="392">';
		newStrSIn +='<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='</tr>';
		newStrSIn +='<tr>';
		newStrSIn +='<td width="310">';
		newStrSIn +='<p>Examination Date &amp; Time :........................................................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='<td width="392">';
		newStrSIn +='<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='</tr>';
		newStrSIn +='<tr>';
		newStrSIn +='<td width="310">';
		newStrSIn +='<p>No of Students :...............................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='<td width="392">';
		newStrSIn +='<p>&nbsp;</p>';
		newStrSIn +='</td>';
		newStrSIn +='</tr>';
		newStrSIn +='</tbody>';
		newStrSIn +='</table>';

		newStrSIn +="<br>";
		//newStrSIn +="<br>";
		
		
		newStrSIn +="<table cellspacing='5' style='border-collapse: collapse;border: 1px solid #524f4f;'>";
			newStrSIn +="<tr>";
				newStrSIn +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>No</th>";
				newStrSIn +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Student No</th>";
				newStrSIn +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;Total&nbsp;&nbsp;</th>";
				for(var j = 1 ; j < 11 ; j++){
					newStrSIn +="<th style='border: 1px solid #524f4f;width:300px;font-size:14px;font-family:Times New Roman;width:100px;' >&nbsp;&nbsp;&nbsp;Q"+j+"&nbsp;&nbsp;&nbsp;</th>";
				}
				newStrSIn +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-1</th>";
				newStrSIn +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-2</th>";
			newStrSIn +="</tr>";
		//sin 1examiner

		//sin 2examiner
		var sinCount1=0;
		var sinEX2RowCount=1;
		var	newStrSIn1 ="<div  id='inputs' style='clear:both'>";
		newStrSIn1 +="<div id='topics1' class='info'></div>";
		//newStrSIn1 +="<img src='img/logo.png' style='width:80px;height:80px;align:center;'/>";
		newStrSIn1 +="<h3 style='text-align:center;font-weight:bold;font-size:16px;'>Faculty of Graduate Studies</h3>";
		newStrSIn1 +="<h3 style='text-align:center;font-weight:bold;font-size:16px;'>University of Kelaniya</h3>";
		newStrSIn1 +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>"+degTitle+" Degree Programme</h4>";
		newStrSIn1 +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>"+SubName+" ("+SubCode+")</h4>";
		newStrSIn1 +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Academic Year - "+BatchYear+" - Sinhala Medium </h4>";
		newStrSIn1 +="<h4 style='text-align:center;font-weight:bold;font-size:14px;'>Mark Sheet - Second Examiner</h4>";
		newStrSIn1 +="<hr/>";
		newStrSIn1 +="<div style='clear:both;text-align:justify;font-size:12px;'>The Supervisor should complete the relevant parts of sheet and enclose with answer scripts. Students who were not present for the examination, 'Absent' against their Student No. in the mark sheet. Examiner should sign each page.</div>";
		newStrSIn1 +="<hr/>";
		newStrSIn1 +="<br>";
		
		newStrSIn1 +='<table width="705" cellspacing="1" cellpadding="1">';
		newStrSIn1 +='<tbody>';
		newStrSIn1 +='<tr>';
		newStrSIn1 +='<td width="310">';
		newStrSIn1 +='<p>Examination Hall :&nbsp; ........................................</p>';
		newStrSIn1 +='</td>';
		newStrSIn1 +='<td width="392">';
		newStrSIn1 +='<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStrSIn1 +='</td>';
		newStrSIn1 +='</tr>';
		newStrSIn1 +='<tr>';
		newStrSIn1 +='<td width="310">';
		newStrSIn1 +='<p>Examination Date &amp; Time :........................................................................</p>';
		newStrSIn1 +='</td>';
		newStrSIn1 +='<td width="392">';
		newStrSIn1 +='<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStrSIn1 +='</td>';
		newStrSIn1 +='</tr>';
		newStrSIn1 +='<tr>';
		newStrSIn1 +='<td width="310">';
		newStrSIn1 +='<p>No of Students :...............................................</p>';
		newStrSIn1 +='</td>';
		newStrSIn1 +='<td width="392">';
		newStrSIn1 +='<p>&nbsp;</p>';
		newStrSIn1 +='</td>';
		newStrSIn1 +='</tr>';
		newStrSIn1 +='</tbody>';
		newStrSIn1 +='</table>';

		newStrSIn1 +="<br>";
		//newStrSIn1 +="<br>";
		
		
		newStrSIn1 +="<table cellspacing='5' style='border-collapse: collapse;border: 1px solid #524f4f;'>";
			newStrSIn1 +="<tr>";
				newStrSIn1 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>No</th>";
				newStrSIn1 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Student No</th>";
				newStrSIn1 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>&nbsp;&nbsp;Total&nbsp;&nbsp;</th>";
				for(var j = 1 ; j < 11 ; j++){
					newStrSIn1 +="<th style='border: 1px solid #524f4f;width:300px;font-size:14px;font-family:Times New Roman;width:100px;' >&nbsp;&nbsp;&nbsp;Q"+j+"&nbsp;&nbsp;&nbsp;</th>";
				}
				newStrSIn1 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-1</th>";
				newStrSIn1 +="<th style='border: 1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:100px;'>Assig-2</th>";
			newStrSIn1 +="</tr>";
		//sin 2examiner
		
		for(i = 0 ; i < ex_CodeLength ; i++){
			//eng 1examiner
			if (ex_studentMediumArr[i]=="en")
			{
			newStr +="<tr>";
				newStr+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:100px;heigth:200px;">'+engEX1RowCount+'</td>';
				newStr+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">'+ex_studentNoArr[i]+'&nbsp;&nbsp;</td>';
				newStr+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				for(var j = 1 ; j < 13 ; j++){
				newStr+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				}
			newStr +="</tr>";
			//newStr += "</div><br>"; 
			engCount++;
			engEX1RowCount++;
			
			}
			//eng 1examiner
			
			//eng 2examiner
			if (ex_studentMediumArr[i]=="en")
			{
			newStr2 +="<tr>";
				newStr2+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:100px;heigth:200px;">'+engEX2RowCount+'</td>';
				newStr2+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">'+ex_studentNoArr[i]+'&nbsp;&nbsp;</td>';
				newStr2+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				for(var j = 1 ; j < 13 ; j++){
				newStr2+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				}
				
			newStr2 +="</tr>";
			//newStr2 += "</div><br>"; 
			engCount2++;
			engEX2RowCount++;

			}
			//eng 2examiner
			
			//sin 1examiner
			if (ex_studentMediumArr[i]=="si")
			{
				newStrSIn +="<tr>";
				newStrSIn+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:100px;heigth:200px;">'+sinEX1RowCount+'</td>';
				newStrSIn+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">'+ex_studentNoArr[i]+'&nbsp;&nbsp;</td>';
				newStrSIn+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				for(var j = 1 ; j < 13 ; j++){
			   newStrSIn+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				}
				
			newStrSIn +="</tr>";
			//newStrSIn += "</div><br>"; 
			sinCount++;
			sinEX1RowCount++;

			
			}
			//sin 1examiner
			
			//sin 2examiner
			if (ex_studentMediumArr[i]=="si")
			{
				newStrSIn1 +="<tr>";
				newStrSIn1+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:100px;heigth:200px;">'+sinEX2RowCount+'</td>';
				newStrSIn1+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">'+ex_studentNoArr[i]+'&nbsp;&nbsp;</td>';
				newStrSIn1+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				for(var j = 1 ; j < 13 ; j++){
					newStrSIn1+='<td style="border:1px solid #524f4f;font-size:15px;font-family:Times New Roman;width:300px;heigth:200px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
				}
				
			newStrSIn1 +="</tr>";
			//newStrSIn1 += "</div><br>"; 
			sinCount1++;
			sinEX2RowCount++;

			}
			//sin 2examiner
			
		}
		
		//eng 1examiner
		newStr +="</table>";
		newStr +="<br>";
		newStr +="<div class='page-footer-space'>";
		newStr +="<p><i>I certify that all the answer scripts were marked by me.</i></p>";
		newStr +="<p>Name of Examiner: ............................................&nbsp;Signature of Examiner: ....................&nbsp;Date: ...............................</p>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Examiner: ...................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signature of Examiner: ............................... Date: ...............................</div>";
		newStr +="</div>";
		newStr +="<br>";


		//eng 1examiner
		
		//eng 2examiner
		newStr2 +="</table>";
		newStr2 +="<br>";
		newStr2 +="<div class='page-footer-space'>";
		newStr2 +="<p><i>I certify that all the answer scripts were marked by me.</i></p>";
		newStr2 +="<p>Name of Examiner: ............................................&nbsp;Signature of Examiner: ....................&nbsp;Date: ...............................</p>";
		// newStr2 +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Examiner: ...................................................</div>";
		// newStr2 +="<br>";
		// newStr2 +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signature of Examiner: ............................... Date: ...............................</div>";
		newStr2 +="</div>";
		newStr2 +="<br>";

		//eng 2examiner
		
		
		//sin 1examiner
		newStrSIn +="</table>";
		newStrSIn +="<br>";
		newStrSIn +="<div class='page-footer-space'>";
		newStrSIn +="<p><i>I certify that all the answer scripts were marked by me.</i></p>";
		newStrSIn +="<p>Name of Examiner: ............................................&nbsp;Signature of Examiner: ....................&nbsp;Date: ...............................</p>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Examiner: ...................................................</div>";
		// newStrSIn +="<br>";
		// newStrSIn +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signature of Examiner: ............................... Date: ...............................</div>";
		newStrSIn +="</div>";
		newStrSIn +="<br>";

		//sin 1examiner
		
		//sin 2examiner
		newStrSIn1 +="</table>";
		newStrSIn1 +="<br>";
		newStrSIn1 +="<div class='page-footer-space'>";
		newStrSIn1 +="<p><i>I certify that all the answer scripts were marked by me.</i></p>";
		newStrSIn1 +="<p>Name of Examiner: ............................................&nbsp;Signature of Examiner: ....................&nbsp;Date: ...............................</p>";
		// newStrSIn1 +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Examiner: ...................................................</div>";
		// newStrSIn1 +="<br>";
		// newStrSIn1 +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signature of Examiner: ............................... Date: ...............................</div>";
		newStrSIn1 +="</div>";
		newStrSIn1 +="<br>";

		//sin 2examiner
		
		//eng 1examiner
		var exportFilename = BatchYear + " - English - " + SubName+" ("+SubCode+") First Examiner Marks Sheet.doc";
		var csvData = new Blob([newStr], {type: '.ms-word;charset=utf-8;'});
		//eng 1examiner
		
		//eng 2examiner
		var exportFilename1 = BatchYear + " - English - " + SubName+" ("+SubCode+") Second Examiner Marks Sheet.doc";
		var csvData1 = new Blob([newStr2], {type: '.ms-word;charset=utf-8;'});
		//eng 2examiner
		
		
		//sin 1examiner
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+") First Examiner Marks Sheet.doc";
		var csvDataSin = new Blob([newStrSIn], {type: '.ms-word;charset=utf-8;'});
		//sin 1examiner
		
		//sin 2examiner
		var exportFilenameSin1 = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+") Second Examiner Marks Sheet.doc";
		var csvDataSin1 = new Blob([newStrSIn1], {type: '.ms-word;charset=utf-8;'});
		//sin 2examiner
		
		//IE11 & Edge
		
		//eng 1examiner
		if(engCount!=0)
		{
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
		if(engCount2!=0)
		{
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
		if(sinCount!=0)
		{
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
		if(sinCount1!=0)
		{
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
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
	}else{
		resetResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
		alert("Data not available");
		
	}
	
}

//------------------------------Marks sheets ends--------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------Attendance Sheet starts--------------------------------------------------------------------------------------------------
function ReRepeatexamDownloadAttendanceTemp(degTitle, SubName, SubCode, BatchYear){
	if(ex_CodeLength != 0){
		
		//eng
		var engCount=0;
		var engRowCount=1;
		var	newStr ="<div  id='inputs' style='margin:0px 5px;clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>Faculty of Graduate Studies</h3></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>University of Kelaniya</h3></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>"+degTitle+" Degree Programme</h4></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>"+SubName+" ("+SubCode+")</h4></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Academic Year - "+BatchYear+" - English Medium </h4></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Repeat Examination</h4></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Attendance Sheet</h4></div>";
		newStr +="<hr/>";
		newStr +="<br>";
		newStr +='<table width="705" cellspacing="1" cellpadding="1">';
		newStr +='<tbody>';
		newStr +='<tr>';
		newStr +='<td width="310">';
		newStr +='<p>Examination Hall :&nbsp; ........................................</p>';
		newStr +='</td>';
		newStr +='<td width="392">';
		newStr +='<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStr +='</td>';
		newStr +='</tr>';
		newStr +='<tr>';
		newStr +='<td width="310">';
		newStr +='<p>Examination Date &amp; Time :........................................................................</p>';
		newStr +='</td>';
		newStr +='<td width="392">';
		newStr +='<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStr +='</td>';
		newStr +='</tr>';
		newStr +='<tr>';
		newStr +='<td width="310">';
		newStr +='<p>No of Students :...............................................</p>';
		newStr +='</td>';
		newStr +='<td width="392">';
		newStr +='<p>&nbsp;</p>';
		newStr +='</td>';
		newStr +='</tr>';
		newStr +='</tbody>';
		newStr +='</table>';
		newStr +="<br>";
			newStr +="<br>";
		newStr +="<table style='border-collapse: collapse;border:1px solid;'>";
			newStr +="<tr>";
				newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>No</th>";
				newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Student No</th>";
				newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Name</th>";
				newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Signature</th>";
			newStr +="</tr>"; 


		//eng
		
		//sin
		var sinCount=0;
		var sinRowCount=1;
		var	newStrSIn ="<div  id='inputs' style='margin:0px 5px;clear:both'>";
		newStrSIn +="<div id='topics1' class='info'></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>Faculty of Graduate Studies</h3></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>University of Kelaniya</h3></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>"+degTitle+" Degree Programme</h4></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>"+SubName+" ("+SubCode+")</h4></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Academic Year - "+BatchYear+" - Sinhala Medium </h4></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Repeat Examination</h4></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Attendance Sheet</h4></div>";
		newStrSIn +="<hr/>";
		newStrSIn +="<br>";
		newStrSIn +='<table width="705" cellspacing="1" cellpadding="1">';
		newStrSIn +='<tbody>';
		newStrSIn +='<tr>';
		newStrSIn +='<td width="310">';
		newStrSIn +='<p>Examination Hall :&nbsp; ........................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='<td width="392">';
		newStrSIn +='<p>Name of the Supervisor:&nbsp;.......................................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='</tr>';
		newStrSIn +='<tr>';
		newStrSIn +='<td width="310">';
		newStrSIn +='<p>Examination Date &amp; Time :........................................................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='<td width="392">';
		newStrSIn +='<p>Signature of the Supervisor:&nbsp;..................................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='</tr>';
		newStrSIn +='<tr>';
		newStrSIn +='<td width="310">';
		newStrSIn +='<p>No of Students :...............................................</p>';
		newStrSIn +='</td>';
		newStrSIn +='<td width="392">';
		newStrSIn +='<p>&nbsp;</p>';
		newStrSIn +='</td>';
		newStrSIn +='</tr>';
		newStrSIn +='</tbody>';
		newStrSIn +='</table>';
		newStrSIn +="<br>";
		newStrSIn +="<br>";
		newStrSIn +="<table style='border-collapse: collapse;border:1px; solid'>";
			newStrSIn +="<tr>";
				newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>No</th>";
				newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Student No</th>";
				newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Name</th>";
				newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Signature</th>";
			newStrSIn +="</tr>";
		
		//sin

		
		for(i = 0 ; i < ex_CodeLength ; i++){
			//eng
			if (ex_studentMediumArr[i]=="en")
			{
				newStr +="<tr>";
				newStr+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">'+engRowCount+'</td>';
				newStr+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">'+ex_studentNoArr[i]+'</td>';
				newStr+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:400px;">'+ex_studentNameArr[i]+'</td>';
				newStr+='<td style="border:1px solid #524f4f;word-wrap:break-word;width:100px;font-size:14px;font-family:Times New Roman;"></td>';
				newStr +="</tr>";
				newStr += "</div><dev><br>"; 
				engCount++;
				engRowCount++;
			}
			//eng
			
			//sin
			if (ex_studentMediumArr[i]=="si")
			{
				newStrSIn +="<tr>";
				newStrSIn+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">'+sinRowCount+'</td>';
				newStrSIn+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">'+ex_studentNoArr[i]+'</td>';
				newStrSIn+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:400px;">'+ex_studentNameArr[i]+'</td>';
				newStrSIn+='<td style="border:1px solid #524f4f;word-wrap:break-word;width:100px;font-size:14px;font-family:Times New Roman;"></td>';
				newStrSIn +="</tr>";
				newStrSIn += "</div><dev><br>"; 
				sinCount++;
				sinRowCount++;
			}
			//sin
		}
		
		
		//eng
		newStr +="</table>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Supervisor: ................................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signatute of Supervisor: ...........................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Date: ...........................................</div>";
		//eng
		
		//sin
		newStrSIn +="</table>";
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
		
		var exportFilename = BatchYear + " - English - " + SubName+" ("+SubCode+") Attendance Sheet.doc";
		var csvData = new Blob([newStr], {type: '.ms-word;charset=utf-8;'});
		
		
		
		//eng
		
		//sin
		// var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+") Attendance Sheet.xls";
		// var csvDataSin = new Blob([newStrSIn], {type: 'text/csv;charset=utf-8;'});
		
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+") Attendance Sheet.doc";
		var csvDataSin = new Blob([newStrSIn], {type: '.ms-word;charset=utf-8;'});
		
		//sin
		
		//IE11 & Edge
		//eng
		if(engCount!=0)
		{
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
		if(sinCount!=0)
		{
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
		
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
	}else{
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
		alert("Data not available");
		
	}
	
}	

//-------------------------------------------------Attendance Sheet ends--------------------------------------------------------------------------------------------------

//----------------------------------------------Table Stickers starts---------------------------------------------------------------------------------------------------------------


function ReRepeatexamDownloadStickersTemp(degTitle, SubName, SubCode, BatchYear){
	if(ex_CodeLength != 0){
		
		//eng
		var engCount=0;
		var engRowCount=1;
		var	newStr ="<div  id='inputs' style='margin:0px 5px;clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>Faculty of Graduate Studies</h3></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>University of Kelaniya</h3></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>"+degTitle+" Degree Programme</h4></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>"+SubName+" ("+SubCode+")</h4></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Repeat Examination</h4></div>";
		newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Academic Year - "+BatchYear+" - English Medium </h4></div>";
		//newStr +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Exam Attendance Sheet</h4></div>";
		newStr +="<hr/>";
		newStr +="<br>";
		//newStr +="<div class='investLabel' style='text-align:left;font-weight:bold;font-size:14px;'>Examination Hall:.......................................................</div>";
		//newStr +="<br>";
		//newStr +="<div class='investLabel' style='text-align:left;font-weight:bold;font-size:14px;'>Examination Date:...........................................</div>";
		//newStr +="<br>";
			//newStr +="<br>";
		newStr +="<table style='border-collapse: collapse;border:1px solid;'>";
			newStr +="<tr>";
				newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>No</th>";
				newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Student No</th>";
				//newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Name</th>";
				//newStr +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Signature</th>";
			newStr +="</tr>"; 


		//eng
		
		//sin
		var sinCount=0;
		var sinRowCount=1;
		var	newStrSIn ="<div  id='inputs' style='margin:0px 5px;clear:both'>";
		newStrSIn +="<div id='topics1' class='info'></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>Faculty of Graduate Studies</h3></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:16px;'><h3>University of Kelaniya</h3></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>"+degTitle+" Degree Programme</h4></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>"+SubName+" ("+SubCode+")</h4></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Repeat Examination</h4></div>";
		newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Academic Year - "+BatchYear+" - Sinhala Medium </h4></div>";
		//newStrSIn +="<div style='text-align:center;font-weight:bold;font-size:14px;'><h4>Exam Attendance Sheet</h4></div>";
		newStrSIn +="<hr/>";
		newStrSIn +="<br>";
		//newStrSIn +="<div class='investLabel' style='text-align:left;font-weight:bold;font-size:14px;'>Examination Hall:.......................................................</div>";
		//newStrSIn +="<br>";
		//newStrSIn +="<div class='investLabel' style='text-align:left;font-weight:bold;font-size:14px;'>Examination Date:...........................................</div>";
		//newStrSIn +="<br>";
		//newStrSIn +="<br>";
		newStrSIn +="<table style='border-collapse: collapse;border:1px; solid'>";
			newStrSIn +="<tr>";
				newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>No</th>";
				newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Student No</th>";
				//newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Name</th>";
				//newStrSIn +="<th style='border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;'>Signature</th>";
			newStrSIn +="</tr>";
		
		//sin

		
		for(i = 0 ; i < ex_CodeLength ; i++){
			//eng
			if (ex_studentMediumArr[i]=="en")
			{
				newStr +="<tr>";
				newStr+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">'+engRowCount+'</td>';
				newStr+='<td style="border:1px solid #524f4f;font-size:50px;font-family:Times New Roman;text-align:center;width:300px;heigth:100px;">'+ex_studentNoArr[i]+'</td>';
				//newStr+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:400px;">'+ex_studentNameArr[i]+'</td>';
				//newStr+='<td style="border:1px solid #524f4f;word-wrap:break-word;width:100px;font-size:14px;font-family:Times New Roman;"></td>';
				newStr +="</tr>";
				newStr += "</div><div><br>"; 
				engCount++;
				engRowCount++;
			}
			//eng
			
			//sin
			if (ex_studentMediumArr[i]=="si")
			{
				newStrSIn +="<tr>";
				newStrSIn+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;">'+sinRowCount+'</td>';
				newStrSIn+='<td style="border:1px solid #524f4f;font-size:50px;font-family:Times New Roman;text-align:center;width:300px;heigth:100px;">'+ex_studentNoArr[i]+'</td>';
				//newStrSIn+='<td style="border:1px solid #524f4f;font-size:14px;font-family:Times New Roman;width:400px;">'+ex_studentNameArr[i]+'</td>';
				//newStrSIn+='<td style="border:1px solid #524f4f;word-wrap:break-word;width:100px;font-size:14px;font-family:Times New Roman;"></td>';
				newStrSIn +="</tr>";
				newStrSIn += "</div><div><br>"; 
				sinCount++;
				sinRowCount++;
			}
			//sin
		}
		
		
		//eng
		newStr +="</table>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Name of Supervisor: ................................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Signatute of Supervisor: ...........................................................</div>";
		// newStr +="<br>";
		// newStr +="<div class='investLabel' style='text-align:left;font-size:14px;font-family:Times New Roman;'>Date: ...........................................</div>";
		// //eng
		
		//sin
		newStrSIn +="</table>";
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
		
		var exportFilename = BatchYear + " - English - " + SubName+" ("+SubCode+") Attendance Sheet.doc";
		var csvData = new Blob([newStr], {type: '.ms-word;charset=utf-8;'});
		
		
		
		//eng
		
		//sin
		// var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+") Attendance Sheet.xls";
		// var csvDataSin = new Blob([newStrSIn], {type: 'text/csv;charset=utf-8;'});
		
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+") Attendance Sheet.doc";
		var csvDataSin = new Blob([newStrSIn], {type: '.ms-word;charset=utf-8;'});
		
		//sin
		
		//IE11 & Edge
		//eng
		if(engCount!=0)
		{
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
		if(sinCount!=0)
		{
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
		
		
		
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
	}else{
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
		alert("Data not available");
		
	}
	
}	


//------------------------------------------------Table Stickers ends------------------------------------------------------------------------------------------------------------

//------------------------------------------------Subject wise Grade & Marks Starts---------------------------------------------------------------------------------------

function ReRepeatexamDownloadSubjectGradeTemp(degTitle, SubName, SubCode, BatchYear){
	//alert(repDownLength);
	if(repDownLength != 0){
		
		//en
		var engCount=0;
		var engRowCount=1;
		
		var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+SubName+" ("+SubCode+") Repeat Examination Results</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";
		
		newStr +="<br>";
		newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStr +="<tr>";
				newStr +="<th style='border: 1px solid black;'>No</th>";
				newStr +="<th style='border: 1px solid black;'>Student No</th>";
				newStr +="<th style='border: 1px solid black;'>Name</th>";
				newStr +="<th style='border: 1px solid black;' >Grade</th>";
			newStr +="</tr>"; 
		
		//en
		
		//sin
		var sinCount=0;
		var sinRowCount=1;
		
		var	newStrSin ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStrSin +="<div id='topics1' class='info'></div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+SubName+" ("+SubCode+")Repeat Examination Results</div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";
		
		newStrSin +="<br>";
		newStrSin +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStrSin +="<tr>";
			newStrSin +="<th style='border: 1px solid black;'>No</th>";
				newStrSin +="<th style='border: 1px solid black;'>Student No</th>";
				newStrSin +="<th style='border: 1px solid black;'>Name</th>";
				newStrSin +="<th style='border: 1px solid black;' >Grade</th>";
			newStrSin +="</tr>"; 
		
		//sin
			
		for(i = 0 ; i < repDownLength ; i++){
			
		//en
			if (ex_studentMediumArr[i]=="en"){		
				if(repDownGradeArr[i] == '-'){
					repDownGradeArr[i] = '(ab)';
				}
				newStr +="<tr>";
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+engRowCount+'</td>';
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+repDownStudNoArr[i]+'</td>';
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">'+repDownStudNameArr[i]+'</td>';
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+repDownGradeArr[i]+'</td>';
				newStr +="</tr>";
				newStr += "</div><dev><br>";
				engCount++;
				engRowCount++;
			}
			//en
			
			//si
			if (ex_studentMediumArr[i]=="si"){		
				if(repDownGradeArr[i] == '-'){
					repDownGradeArr[i] = '(ab)';
				}
				newStrSin +="<tr>";
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+sinRowCount+'</td>';
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+repDownStudNoArr[i]+'</td>';
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">'+repDownStudNameArr[i]+'</td>';
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+repDownGradeArr[i]+'</td>';
				newStrSin +="</tr>";
				newStrSin += "</div><dev><br>";
				sinCount++;
				sinRowCount++;				
			}
			//si
		}
		
		//en
		newStr +="</table>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";
		//en
		
		//si
		newStrSin +="</table>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";
		//si
		
		//en
		var exportFilename = BatchYear + " - English - " + SubName+" ("+SubCode+")Subject Grades - Repeat.xls";
		var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
		//en
		
		//si
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+")Subject Grades - Repeat.xls";
		var csvDataSin = new Blob([newStrSin], {type: 'text/csv;charset=utf-8;'});
		//si
		
		//IE11 & Edge
		
		if(engCount!=0)
		{
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

		if(sinCount!=0)
		{
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
		
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
	}else{
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
		alert("Data not available");
		
	}
	
}



function ReRepeatexamDownloadSubjectMarksTemp(degTitle, SubName, SubCode, BatchYear){
	if(repDownLength != 0){
		//en
		var engCount=0;
		var engRowCount=1;
		
		var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+SubName+" ("+SubCode+")Repeat Examination Results</div>";
		newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";
		
		newStr +="<br>";
		newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStr +="<tr>";
				newStr +="<th style='border: 1px solid black;'>No</th>";
				newStr +="<th style='border: 1px solid black;'>Student No</th>";
				newStr +="<th style='border: 1px solid black;'>Name</th>";
				newStr +="<th style='border: 1px solid black;'>Examiner 1</th>";
				newStr +="<th style='border: 1px solid black;'>Examiner 2</th>";
				newStr +="<th style='border: 1px solid black;'>Average</th>";
			newStr +="</tr>";
		//en

		//sin
		var sinCount=0;
		var sinRowCount=1;
		
		var	newStrSin ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStrSin +="<div id='topics1' class='info'></div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Faculty of Graduate Studies</div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>University of Kelaniya</div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+degTitle+" Degree Programme</div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>"+SubName+" ("+SubCode+")Repeat Examination Results</div>";
		newStrSin +="<div class='investLabel' style='text-align:center;font-weight:bold;'>Academic Year - "+BatchYear+"</div>";
		
		newStrSin +="<br>";
		newStrSin +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStrSin +="<tr>";
				newStrSin +="<th style='border: 1px solid black;'>No</th>";
				newStrSin +="<th style='border: 1px solid black;'>Student No</th>";
				newStrSin +="<th style='border: 1px solid black;'>Name</th>";
				newStrSin +="<th style='border: 1px solid black;'>Examiner 1</th>";
				newStrSin +="<th style='border: 1px solid black;'>Examiner 2</th>";
				newStrSin +="<th style='border: 1px solid black;'>Average</th>";
			newStrSin +="</tr>";
		//sin
			
		for(i = 0 ; i < repDownLength ; i++){
			
			//en
			if (ex_studentMediumArr[i]=="en"){		
				if(repDownExm1Arr[i] == '125'){
					repDownExm1Arr[i] = '-';
				}
				if(repDownExm2Arr[i] == '125'){
					repDownExm2Arr[i] = '-';
				}
				if(repDownMarksArr[i] == '125'){
					repDownMarksArr[i] = '(ab)';
				}
				newStr +="<tr>";
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+engRowCount+'</td>';
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+repDownStudNoArr[i]+'</td>';
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">'+repDownStudNameArr[i]+'</td>';
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+repDownExm1Arr[i]+'</td>';
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+repDownExm2Arr[i]+'</td>';
					newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+repDownMarksArr[i]+'</td>';
				newStr +="</tr>";
				newStr += "</div><dev><br>"; 
				engCount++;
				engRowCount++;
			}
			//en
			
			//si
			if (ex_studentMediumArr[i]=="si"){		
				if(repDownExm1Arr[i] == '125'){
					repDownExm1Arr[i] = '-';
				}
				if(repDownExm2Arr[i] == '125'){
					repDownExm2Arr[i] = '-';
				}
				if(repDownMarksArr[i] == '125'){
					repDownMarksArr[i] = '(ab)';
				}
				newStrSin +="<tr>";
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+sinRowCount+'</td>';
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+repDownStudNoArr[i]+'</td>';
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;width:400px;">'+repDownStudNameArr[i]+'</td>';
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+repDownExm1Arr[i]+'</td>';
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+repDownExm2Arr[i]+'</td>';
					newStrSin+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;text-align:center">'+repDownMarksArr[i]+'</td>';
				newStrSin +="</tr>";
				newStrSin += "</div><dev><br>"; 
				sinCount++;
				sinRowCount++;	
			}
			//si
		}
		//en
		newStr +="</table>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStr +="<br>";
		newStr +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";
		//en
		
		//si
		newStrSin +="</table>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 1............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Coordinator...............................</div>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:left;'>Examiner 2............................... Date...............................</div><div class='investLabel' style='text-align:right;'>Head of the Department...............................</div>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:right;'>Dean...............................</div>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:right;'>Dean/Faculty of Graduate Studies...............................</div>";
		newStrSin +="<br>";
		newStrSin +="<div class='investLabel' style='text-align:right;'>Date..............................</div>";
		//si
		
		//en		
		var exportFilename = BatchYear + " - English - " + SubName+" ("+SubCode+")Subject Marks - Repeat.xls";
		var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
		//en
		
		//si
		var exportFilenameSin = BatchYear + " - Sinhala - " + SubName+" ("+SubCode+")Subject Marks - Repeat.xls";
		var csvDataSin = new Blob([newStrSin], {type: 'text/csv;charset=utf-8;'});
		//si
		
		//IE11 & Edge
		if(engCount!=0)
		{
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
		if(sinCount!=0)
		{
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
		
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
	}else{
		resetReRepeatResultDownload()
		sendForm('data4DownloadReRepeatsubjectDetails');
		sendForm('data4DownloadReRepeatdegreeSubjects');	
		alert("Data not available");
		
	}
	
}
// //------------------------------------------------Subject wise Grade & Marks Ends---------------------------------------------------------------------------------------




function resetReRepeatResultDownload(){
	dataRep["degCode"] = "";
	dataRep["degSem"] = "";
	dataRep["degSub"] = "";
	dataRep["acyear"] = "";
	repDownLength = 0;
	//subDownLength = 0;
	ex_CodeLength = 0;
	//fi_Length = 0;
	//finalLength =0;
}


