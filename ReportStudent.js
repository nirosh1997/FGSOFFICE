
var inum=0;
var rwcnt=1;
var count=0;

function formstudentReport(dsp){
		title = "Student report";
		var keyDisabled = fieldDisabled = "";
 
		str = "";

			
		if(dsp == "formstudentReport") {
	
			
	
	
		
			str  = "<div id='studentReport'>";
			str += "<table><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainstudentReport" >';

			programName="<option>Please scroll down to see the records</option>";
			programName+="<option>All Students</option>";
				//alert (studentNoLength);
							for(i = 0; i<studentNoLength; i++) {

							
							if(degreeTitleArr[i] != null){	
							
							   if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
							
							programName += "<option>"+degreeTitleArr[i]+"</option>";

									}
								 }
							}
							
				
				
				
				//str +="<div>";
				str +="<div class='identifiers'>Select the Programm</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='selectedDegreeName' onchange='dataRep[this.id]=this.selectedIndex;selectTransacType();ViewList();'>";
				str += programName;
				str += "</select>";
				
				dataRep['achedamicYear']="";
				str +="<div class='identifiers'>Achedamic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
				str += "<class='longIdentifier'><div class='colon'>&nbsp;&nbsp;</div><select id='achedamicYear' value='achedamicYear' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += generateNumberOptions(2014, 2025, 4, dataRep['achedamicYear']);
				str += "</select>";
				str +="</div>";
				
				//str +="<input type='checkbox' id='select-all' name='select-all' onClick='toggle(this)' style='display:none' />";
		
			str +="<div style='clear:both'>&nbsp;</div>"
	        str += '<input type="button" class="btn" value = "Get Report " onclick=getSReport();>';
			//str += '<input type="button" class="btn" value = "View Course Unit" onclick="sendForm('+"'data4ViewNewCourseUnit'"+')">';
			str += '<input type="button" class="btn" value = "Return to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</div></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		
		}
		return str;
 
	}
	
	
	function getSReport()
{
//	alert(document.getElementById('selectedDegreeName').value);
	var count1=1;
	var Rcount=1;
	
	
				var	newStr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";
					newStr +="<div id='topics1' class='info'></div>";
				    newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'>selected Degree Name :"+document.getElementById('selectedDegreeName').value+"</div>";
					newStr +="<div class='investLabel' style='text-align:center;font-weight:bold;'> selected Year :"+document.getElementById('achedamicYear').value+"</div>";
                    newStr +="<br>";
				    newStr +="<table style='border-collapse: collapse;border: 1px solid black;'>";
					newStr +="<tr style='border: 1px solid black;'>";
					newStr +="<th style='border: 1px solid black;'></th>";
					newStr +="<th style='border: 1px solid black;'>Student Initial</th>";
					newStr +="<th style='border: 1px solid black;'>Student Personal Title</th>";
					newStr +="<th style='border: 1px solid black;'>Student Name</th>";
					newStr +="<th style='border: 1px solid black;'>Student No</th>";
					newStr +="<th style='border: 1px solid black;'>NIC Number</th>";
					newStr +="<th style='border: 1px solid black;'>Permanet Address</th>";			
					newStr +="<th style='border: 1px solid black;'>Student Date of birth</th>";
					newStr +="<th style='border: 1px solid black;'>Student Nationality</th>";
					newStr +="<th style='border: 1px solid black;'>Student Citizenship</th>";
					newStr +="<th style='border: 1px solid black;'>Student Employment</th>";
					newStr +="<th style='border: 1px solid black;'>Student Office Address</th>";
					newStr +="<th style='border: 1px solid black;'>Correspondence</th>";					
					newStr +="<th style='border: 1px solid black;'>Student Contact Lan</th>";
					newStr +="<th style='border: 1px solid black;'>Student Contact Mobile</th>";
					newStr +="<th style='border: 1px solid black;'>Student Contact Email</th>";
					newStr +="<th style='border: 1px solid black;'>Registered Status</th>";
					newStr +="<th style='border: 1px solid black;'>Notes</th>";
					newStr +="<th style='border: 1px solid black;'>Application No</th>";					
					newStr +="<th style='border: 1px solid black;'>University Title</th>";
					newStr +="<th style='border: 1px solid black;'>Faculty Title</th>";
					newStr +="<th style='border: 1px solid black;'>Degree Title</th>";
					newStr +="<th style='border: 1px solid black;'>Programme Type Title</th>";
					newStr +="<th style='border: 1px solid black;'>Medium</th>";
					newStr +="<th style='border: 1px solid black;'>Achedamic Year</th>";
					newStr +="</tr>";
					
				
				
		
			for( i=0; i<studentNoLength; i++){
		//alert(document.getElementById('achedamicYear').value);
		//alert(academicYearArr[i]);
			if(studentNoArr.indexOf(studentNoArr[i]) == studentNoArr.lastIndexOf(studentNoArr[i]) || (studentNoArr.indexOf(studentNoArr[i]) != studentNoArr.lastIndexOf(studentNoArr[i]) && studentNoArr.indexOf(studentNoArr[i])==i)){
			if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i]  &  document.getElementById('achedamicYear').value==academicYearArr[i] ){	
		//if(document.getElementById('selectedDegreeName').value==degreeTitleArr[i] & registeredArr[i]=="YES" &  document.getElementById('achedamicYear').value==achedamicYearArr[i] & degreeMediumArr[i]=="en"){	
		
			
			newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitial1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitle1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddress1Arr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentDateofbirth1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNationality1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentCitizenship1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentEmployment1Arr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentOfficeAddress1Arr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+correspondence1Arr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLan1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobile1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmail1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+registeredArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+notesArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+universityTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+facultyTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+programmeTypeTitleArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+mediumArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+academicYearArr[i]+'</td>';
			newStr +="</tr>";	
			newStr += "</div><dev><br>"; 
			inum++				
			Rcount++;			
				
			}
			else if(document.getElementById('selectedDegreeName').value=="All Students"  &  document.getElementById('achedamicYear').value==academicYearArr[i] )
			{
				newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr +="<tr style='border: 1px solid black;'>";
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+Rcount+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentInitial1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPersonalTitle1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNameArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNoArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNICArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentPermanentAddress1Arr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentDateofbirth1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentNationality1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentCitizenship1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentEmployment1Arr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentOfficeAddress1Arr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+correspondence1Arr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactLan1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactMobile1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+studentContactEmail1Arr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+registeredArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+notesArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+applicationNoArr[i]+'</td>';			
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+universityTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+facultyTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+degreeTitleArr[i]+'</td>';
			newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+programmeTypeTitleArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+mediumArr[i]+'</td>';
            newStr+='<td  style="border:1px solid black;width:300px;heigth:30%;font-size:12px;font-family:tahoma;">'+academicYearArr[i]+'</td>';
			newStr +="</tr>";	
			newStr += "</div><dev><br>"; 
			inum++				
			Rcount++;	
			}
					
		
	}
	
}
newStr +="</table>";

if (Rcount==1)
{
	alert("No records to display ");
	return 0;
}
	var csvData = new Array();
	
	csvData.push(newStr);
	// download stuff 
	var fileName = "data.";
	var buffer = csvData.join("\n");
	var blob = new Blob([buffer], {
	  "type": "text/doc;charset=utf8;"			  
	});
	var link = document.createElement("a");
				
	if(link.download !== undefined) { // feature detection
	  // Browsers that support HTML5 download attribute
	  link.setAttribute("href", window.URL.createObjectURL(blob));
	  link.setAttribute("download", fileName);
	 }
	else {
	  // it needs to implement server side export
	  link.setAttribute("href", "http://www.example.com/export");
	}
	//link.innerHTML = "<input type='button' id='exportBtn' value='Export to CSV' class='btn2'>";
	//document.getElementById('btnContainer').appendChild(link);
	//document.body.appendChild(link);
	link.innerHTML = "";
	document.body.appendChild(link);
	window.location.replace(link);
}