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




function formVivaBoard(dsp) {
		str = "";
		title = "Viva Board";

		if(dsp == "formVivaBoard") { 
			
			
			
			str  = "<div id='formVivaBoard'  >";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformVivaBoard">';
			
			
			
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
			
			
		
			
			str +="<div class='longIdentifier'>Student No</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesProfile();'>";
			str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
			str += "<input type='button'  class='btnB' value='Search' onclick=sendForm('data4StudentProfileDetails');>";
		
			str += "</div><br>"; 

			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'><br>";
			//str += "<input type='button' style='margin-top:18px' class='btnB' value='Reset' onclick=''>";
			
			str += "<fieldset class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'></div>";
			
			
			
			str += '<center>';
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier'>Attempt</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str +="<select name='vivaboardAttempt' id='vivaboardAttempt' value='vivaboardAttempt'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str+="<option>Please scroll down to see the records</option>";
			str += "<option value='1'>First</option>";
			str += "<option value='2'>Second</option>";
			str += "<option value='3'>Third</option>";
			str+="</select></div>";
			

			dataRep['vivaYYYY'] = year;
			dataRep['vivaMM'] = month;
			dataRep['vivaDD'] = date;
			
			str +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier'>Viva Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='vivaYYYY' value='vivaYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['vivaYYYY']);
			str += "</select>";
			str += "<select name='vivaMM' value='vivaMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['vivaMM']);
			str += "</select>";
			str += "<select name='vivaDD' value='vivaDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['vivaDD']);
			str += "</select>";
			str += "</div>";
			
			
			
			dataRep['vivaiYYYY'] = year;
			dataRep['vivaiMM'] = month;
			dataRep['vivaiDD'] = date;
			
			str +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier'> Date Inform to the Viva Board</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='vivaiYYYY' value='vivaiYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['vivaiYYYY']);
			str += "</select>";
			str += "<select name='vivaiMM' value='vivaiMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['vivaMM']);
			str += "</select>";
			str += "<select name='vivaiDD' value='vivaiDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['vivaDD']);
			str += "</select>";
			str += "</div>";
			
			
			str +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
			
			str +="<div class='longIdentifier'>Board Decision</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='vivaboarddeci' id='vivaboarddeci' value='vivaboarddeci'  onchange='dataRep[this.name]=this.value;hidevalueviva();' class='dateSelect'>";
			str += "<option value='0' selected>Please scroll down to see the records</option>";
			str += "<option value='1'>Pass</option>";
			str += "<option value='2'>Accept with Minor Changes</option>";
			str += "<option value='3'>Accept with Major Changes</option>";
			str += "<option value='4'>Degrade</option>";	
			str += "<option value='5'>Fail</option>";	

			str += "</select>";
			str += "</div>";
			
			str +="<div class='longIdentifier'>Degrade Offered</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select id='dgrade' name='dgrade' value='dgrade'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += "<option value='0' selected>Please scroll down to see the Option</option>";
			str += "<option value='1'>PGDip</option>";
			str += "<option value='2'>MSc</option>";
			str += "<option value='3'>M.phill</option>";
			str += "</select>";
			str += "</div><br>";
			
			
			
			str +="<div class='longIdentifier'>Duration For Re-submission</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='reSubmit' id='reSubmit' value='reSubmit'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += "<option value='0' selected>Please scroll down to see the records</option>";
			str += "<option value='1'>3 Month</option>";
			str += "<option value='2'>6 Month</option>";
			str += "<option value='3'>9 Month</option>";
			str += "<option value='4'>12 Month</option>";
							
			str += "</select>";
			str += "</div>";				
			
			str +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier'>Upload CheckList</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left'>";
			str += "<input type='file'>"; 
			str += "</div></div>";
			
			
			str +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";

			
			dataRep['dResultYYYY'] = year;
			dataRep['dResultMM'] = month;
			dataRep['dResultDD'] = date;
			
			str +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
			
			
			str +="<div class='longIdentifier'>Date of result released</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='dResultYYYY' value='dResultYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(2015, 2025, 4, dataRep['dResultYYYY']);
			str += "</select>";
			str += "<select name='dResultMM' value='dResultMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['dResultMM']);
			str += "</select>";
			str += "<select name='dResultDD' value='dResultDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['dResultDD']);
			str += "</select>";
			
			str += "</div>";
			

			
			
			
			
			str += "<br><center>";
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str += '<input type="button" class="btnB" value="Save"  onclick= formVivaBoardsendForm('+"'addVivaBoard'"+');>';	
					
				
			str += '<input type="button" class="btnB" value = "Update" onclick = formUpdateVivaBoardsendForm('+"'updateVivaBoard'"+');>';
				
			str += '<input type="button" class="btnB" value = "Return" onclick = showMenu('+"'formThesisSubmitMenu'"+')>';
			
			//str += '<input type="button" class="btn" value = "FGS Borad Approved" onclick = showMenu('+"'formStudentProfileMenu'"+');>';
			//str += '<input type="button" class="btn" value = "FGS Borad Rejected" onclick = showMenu('+"'formStudentProfileMenu'"+');>';
			
			str += '<input type = "button" class ="btnB" value="logout" onclick=logOut();>';
			str += "</fieldset>";
			str += '</center></div></form>';
			str += '</td></tr></table></div>';
		
		}
		return str;
		}
		
		
	 function hidevalueviva(){
 //alert(document.getElementById('vivaboarddeci').value);
	
	if(document.getElementById('vivaboarddeci').value == "2" || document.getElementById('vivaboarddeci').value == "3"){
	
	 document.getElementById("dgrade").style.visibility = "hidden";
	 document.getElementById("reSubmit").style.visibility = "visible"; 
	}
	else if(document.getElementById('vivaboarddeci').value == "4"){
	
	document.getElementById("reSubmit").style.visibility = "hidden";
	document.getElementById("dgrade").style.visibility = "visible"; 
		//}
	}
	 else{
	 document.getElementById("dgrade").style.visibility = "hidden";
	 document.getElementById("reSubmit").style.visibility = "hidden"; 
	 }
		
 }	
		
function formVivaBoardsendForm(frm){

	var doc, dataStr,tempid,exid;
		
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		
		if(frm == 'addVivaBoard'){
 
			doc = document.maintainformVivaBoard;
		
			dataStr += "&interface="+frm;
				
				
				
			dataStr += "&tid="+dataRep["thesisid"];
			
			dataStr += "&attempt="+document.getElementById('vivaboardAttempt').value;
			
			dataStr += "&vivaDate="+doc.vivaYYYY.value+"/"+doc.vivaMM.value+"/"+doc.vivaDD.value;
			
			dataStr += "&informDate="+doc.vivaiYYYY.value+"/"+doc.vivaiMM.value+"/"+doc.vivaiDD.value;
						
			dataStr += "&decision="+document.getElementById('vivaboarddeci').value;
			
			dataStr += "&DeDeg="+document.getElementById('dgrade').value;
			
			dataStr += "&resubDuration="+document.getElementById('reSubmit').value;
															
			dataStr += "&resultReleaseDate="+doc.dResultYYYY.value+"/"+doc.dResultMM.value+"/"+doc.dResultDD.value;
			
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}
		
	function formUpdateVivaBoardsendForm(frm){

	var doc, dataStr,tempid,exid;
		
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		
		if(frm == 'updateVivaBoard'){
 
			doc = document.maintainformVivaBoard;
		
			dataStr += "&interface="+frm;
				
				
			
			dataStr += "&tid="+dataRep["thesisid"];
			
			dataStr += "&attempt="+document.getElementById('vivaboardAttempt').value;
			
			dataStr += "&vivaDate="+doc.vivaYYYY.value+"/"+doc.vivaMM.value+"/"+doc.vivaDD.value;
			
			dataStr += "&informDate="+doc.vivaiYYYY.value+"/"+doc.vivaiMM.value+"/"+doc.vivaiDD.value;
						
			dataStr += "&decision="+document.getElementById('vivaboarddeci').value;
			
			dataStr += "&resubDuration="+document.getElementById('reSubmit').value;
															
			dataStr += "&resultReleaseDate="+doc.dResultYYYY.value+"/"+doc.dResultMM.value+"/"+doc.dResultDD.value;
			
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}