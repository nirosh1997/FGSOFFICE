////Coded by S.Suraweera////
////05.05.2015-----

dataRep["facultyBoardNo"] = dataRep["boardOfStudyNo"] =dataRep['progressReport']= "";
dataRep["studentContactLand01"] = dataRep["studentContactMobile01"] ="";			
var	OneChecked = TwoChecked = ThreeChecked = FourChecked = FiveChecked = SixChecked = "";
dataRep['certifiedCertificates'] ="";	
var birthCertificateChecked = degreeCertificateChecked = OtherChecked ="";		

function setValuesProfile(){
	for(i=0; i<studentNoLength;i++){

		if(dataRep["studentNo"]==studentNoArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			dataRep["studentContactLand01"]=studentContactLanArr[i];
			dataRep["studentContactMobile01"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			
	
		}else if(dataRep["studentName"]==studentNameArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			dataRep["studentContactLand01"]=studentContactLanArr[i];
			dataRep["studentContactMobile01"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			
			
			
		}else if(dataRep["studentNIC"]==studentNICArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["academicYear"]=academicYearArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
			dataRep["studentContactLand01"]=studentContactLanArr[i];
			dataRep["studentContactMobile01"]=studentContactMobileArr[i];
			dataRep["studentContactEmail"]=studentContactEmailArr[i];
			
			
		}
	}
} 




function formViva(dsp) {
		str = "";
		title = "Viva Check List";

		if(dsp == "formViva") { 
			
			
			
			str  = "<div id='formViva'  >";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="formViva">';
			
			
			
			for(studentNoLoop=0; studentNoLoop< studentNoLength; studentNoLoop++){
			
			if (studentNameArr.indexOf(studentNameArr[studentNoLoop]) == studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) || (studentNameArr.indexOf(studentNameArr[studentNoLoop]) != studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) && studentNameArr.indexOf(studentNameArr[studentNoLoop])==studentNoLoop)){
				if(studentNameArr[studentNoLoop] != ""){
				studentNameList += "<option value='"+studentNameArr[studentNoLoop]+"'>";
			}
			}
			if (studentNoArr.indexOf(studentNoArr[studentNoLoop]) == studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) || (studentNoArr.indexOf(studentNoArr[studentNoLoop]) != studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) && studentNoArr.indexOf(studentNoArr[studentNoLoop])==studentNoLoop)){
				if(studentNoArr[studentNoLoop] != ""){
				studentNoList += "<option value='"+studentNoArr[studentNoLoop]+"'>";
				}
			}
			if (studentNICArr.indexOf(studentNICArr[studentNoLoop]) == studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) || (studentNICArr.indexOf(studentNICArr[studentNoLoop]) != studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) && studentNICArr.indexOf(studentNICArr[studentNoLoop])==studentNoLoop)){
				if(studentNICArr[studentNoLoop] != ""){
				studentNICList += "<option value='"+studentNICArr[studentNoLoop]+"'>";
				}
			}
			}
			
			
			str +="<div class='longIdentifier'>Student NIC</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='studentNIC' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesProfile();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student Name</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentName' list='liststudentName' id='studentName' value= '"+dataRep["studentName"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesProfile();'>";
			str += "<datalist id='liststudentName'>"+studentNameList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student No</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesProfile();'>";
			str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
			str += "</div><br/>"; 

			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm;>";
		
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick=''>";
			
			str += "</fieldset></div></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str += '<center>';
			str += "</fieldset></div></center>";
			
			
			
			
			
			// str +="<div style='margin-top:20px;float:left;clear:both;'>";
			// str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
			// str +="<div class=hideLabel>&nbsp;</div>";
			
			// str +="</div><br/>";
			
			
			// str +="<div style='margin-top:20px;float:left;clear:both;'>";
			// str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str +="<div class='viewArea' style='clear:none;margin-right:100px;' id='studentName'>"+dataRep["studentName"]+"</div>";
			// str +="<div class=hideLabel>&nbsp;</div>";
			// str +="</div><br/>";
			
			
			str +="<div style='margin-top:50px;clear:both;'></div>";
			str +="<fieldset class='field'><legend class='fieldHead'>Requirement</legend><div style='clear:both'><div class='rdo'>";

			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Thesis</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='programmeTypeTitle'>"+dataRep["programmeTypeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div></div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Progress Report</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div></div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Payments</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='Payments'>"+dataRep["programmeTypeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div></div><br/></fieldset> ";
				
				
				
			str +="<div style='margin-top:50px;clear:both;'></div>";
			str +="<fieldset class='field'><legend class='fieldHead'>Examiner Report Requirements</legend><div style='clear:both'><div class='rdo'>";
				
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Examiner 1</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:2px;float:left;clear:both;'>";
			
			str +="</br><div class='longIdentifier'><u><b>Examiner 1 Reminders</b></u></div>";
			
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";	
			str += "<textarea rows='auto'  name='notification' id='notification'  style='float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			str +=dataRep["notification"];
			str +=" </textarea></div>";
			
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Examiner 2</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			str +="<div style='margin-top:2px;float:left;clear:both;'>";
			
			str +="</br><div class='longIdentifier'><u><b>Examiner 2 Reminders</b></u></div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";	
			str += "<textarea rows='auto'  name='notification' id='notification'  style='float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			str +=dataRep["notification"];
			str +=" </textarea></div>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Examiner 3</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:2px;float:left;clear:both;'>";
			
			str +="</br><div class='longIdentifier'><u><b>Examiner 3 Reminders</b></u></div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";	
			str += "<textarea rows='auto'  name='notification' id='notification'  style='float:left;'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
			str +=dataRep["notification"];
			str +=" </textarea></div></fieldset>";
			
			
			str +="<div style='margin-top:50px;clear:both;'></div>";
			str +="<fieldset class='field'><legend class='fieldHead'>Viva & Inform Dates</legend><div style='clear:both'><div class='rdo'>";

			// if(dataRep['progressReport']== 'Progress Report One'){
			// OneChecked = 'checked';
			// } else if(dataRep['progressReport']=='Progress Report Two'){
			// TwoChecked = 'checked'
			// } else if(dataRep['progressReport']=='Progress Report Three'){
			// ThreeChecked = 'checked'
			// }

			// str +="<div style='float:left;margin-right:10px;'>";
			// str +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report One'";
			// str +=OneChecked;
			// str +=" onclick='dataRep[this.name]=this.value;' /><label>Examiner One Received</label>";
			// str +="<br /><input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Two'";
			// str +=TwoChecked;
			// str +=" onclick='dataRep[this.name]=this.value;' /><label>Examiner Two Received</label>";
			// str +="<br /><input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'";
			// str +=ThreeChecked;
			// str +=" onclick='dataRep[this.name]=this.value;' /><label>Examiner Three Received</label>";
			// //str +="<br /><input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'";
			// str +="</div></div></div></fieldset>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			//str +="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'>";

			
			dataRep['commenceYYYY'] = year;
			dataRep['commenceMM'] = month;
			dataRep['commenceDD'] = date;
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier'>Viva Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
			str += "</select>";
			str += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['commenceMM']);
			str += "</select>";
			str += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['commenceDD']);
			str += "</select>";
			
			str += "</div>";
			

			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			//str +="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'>";

			
			dataRep['commenceYYYY'] = year;
			dataRep['commenceMM'] = month;
			dataRep['commenceDD'] = date;
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier'>Viva Inform Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
			str += "</select>";
			str += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['commenceMM']);
			str += "</select>";
			str += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['commenceDD']);
			str += "</select>";
			
			str += "</div></fieldset>";
			
			
			str += "<br><center>";
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<input type='button' class='btn' value='Save'  onclick=>"; 
			str += "<input type='button' class='btn' value='Update'  onclick=>"; 
			str += "<input type='button' class='btn' value='Delete'  onclick=>"; 
		
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formThesisSubmitMenu'"+');>';
				
			//str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
			str += '</center></div></form>';
			str += '</td></tr></table></div>';
		
		}
		return str;
		}