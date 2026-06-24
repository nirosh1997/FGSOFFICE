
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




function formAppointExaminersBOSRejectModification(dsp) {
		str = "";
		title = "Appoint Examiners - BOS Reject Modification";

		if(dsp == "formAppointExaminersBOSRejectModification") { 
			
			
			
			str  = "<div id='formAppointExaminers'  >";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="formAppointExaminersBOSRejectModification">';
			
			
			
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
			str += "</div><br>"; 

			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm('data4StudentProfileDetails');>";
		
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick=''>";
			
			str += "</fieldset></div></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str += '<center>';
			str += "</fieldset></div></center>";
			
			
			
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			
			str +="</div><br/>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;margin-right:100px;' id='studentName'>"+dataRep["studentName"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			str +="<div class='longIdentifier' style='clear:none;'>BOS Date</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='programmeTypeTitle'>"+dataRep["programmeTypeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div></div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>BOS No</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
				
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier'>Examiner 1</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='Examiner 1' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesProfile();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Examiner 2</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='Examiner 2' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesProfile();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Examiner 3</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='Examiner 3' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesProfile();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			
			str +="<div style='margin-top:50px;clear:both;'></div>";
			str +="<fieldset class='field'><legend class='fieldHead'>Examiner Reject Check Box</legend><div style='clear:both'><div class='rdo'>";

			if(dataRep['progressReport']== 'Progress Report One'){
			OneChecked = 'checked';
			} else if(dataRep['progressReport']=='Progress Report Two'){
			TwoChecked = 'checked'
			} else if(dataRep['progressReport']=='Progress Report Three'){
			ThreeChecked = 'checked'
			}

			str +="<div style='float:left;margin-right:10px;'>";
			str +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report One'";
			str +=OneChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Examiner One</label>";
			str +="<br /><input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Two'";
			str +=TwoChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Examiner Two</label>";
			str +="<br /><input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'";
			str +=ThreeChecked;
			str +=" onclick='dataRep[this.name]=this.value;' /><label>Examiner Three</label>";
			//str +="<br /><input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'";
			str +="</div></div></div></fieldset>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			str +="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'>";

			
			dataRep['commenceYYYY'] = year;
			dataRep['commenceMM'] = month;
			dataRep['commenceDD'] = date;
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier'>Date of Send for Renomination to Head</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
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
			

			
			str += "<br><center>";
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<input type='button' class='btn' value='Save'  onclick=>"; 
		
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formAppointExaminersMenu'"+');>';
				
			//str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
			str += '</center></div></form>';
			str += '</td></tr></table></div>';
		
		}
		return str;
		}