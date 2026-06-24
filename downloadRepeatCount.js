function formDownloadRepeatCount(dsp) {

	str = ""; 
	title = ""; 
  
	if(dsp == "formDownloadRepeatCount") {    
		str  = "<div id='formDownloadRepeatCount'>";	
		str += "<table><tr><td>";
		str += '<h2 >'+title+'</h2><hr>';
		str += '<form id="formDownloadRepeatCount"><br>';
		str +="<div>";	
		
		str += "<div style='clear:both'>";
		//str += '<input type="button" id="gtPrint" class="btnD" value="Download List"  onclick= "DownloadadmissionList();" >';
		
		if (dataRep['roleName']=='Subject Clerk')
		{
		str += '<input type="button" class="btnD" value = "Return" onclick =showMenu('+"'formAdmissionMenu'"+')>';
		}
		else{
		str += '<input type="button" class ="btnD" value="Return to Examination Menu" onclick="showMenu('+"'formExamMenu'"+');">';
		}
		str += '<input type="button" id="btnDlog" class="btnD" value="logout"  onclick= logOut();>';
		str +="</div>";
		
		str += '</td></table></div>';
		str += '</form>';
	}		
	return str;
	
}



function DownloadadmissionList(degTitle, SubSem, BatchYear){
	
	if(degreeCodeLength != 0){
		
		
		var engRowCount=1;
		var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
		newStr +="<div id='topics1' class='info'></div>";
		
		newStr +="<br>";
		newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
			newStr +="<tr>";
				newStr +="<th style='border: 1px solid black;'>No</th>";
				newStr +="<th style='border: 1px solid black;'>Student Name</th>";
				newStr +="<th style='border: 1px solid black;'>Student No</th>";
				newStr +="<th style='border: 1px solid black;'>Number of Papers</th>";
			newStr +="</tr>"; 





		
		for(i = 0 ; i < degreeCodeLength ; i++){
			//if(dataRep["degCode"]==degreeCodeArr[i] & dataRep["acYear"]==achedamicYearArr[i]){
				newStr +="<tr>";
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+engRowCount+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+studentInitialArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
				newStr+='<td style="border:1px solid black;font-size:12px;font-family:tahoma;">'+studentCountArr[i]+'</td>';
				newStr +="</tr>";
				newStr += "</div><div><br>"; 
			
				engRowCount++;
			
			//}
		}
		
		
		
		var exportFilename = "repeat applied count.xls";

		var csvData = new Blob([newStr], {type: 'text/csv;charset=utf-8;'});
		
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
		
		sendForm('data4rep_examDownload');
		
	}else{
		
		sendForm('data4rep_examDownload');
		alert("Data not available");
		
	}
	
}	

//-------------------------------------------------Attendance Sheet ends--------------------------------------------------------------------------------------------------

