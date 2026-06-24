dataRep["studentNo"]=dataRep["studentNIC"]=dataRep["studentName"]=dataRep["studentAge"] =dataRep["studentSex"]=dataRep["studentAddressLine01"]=dataRep["studentAddressLine02"]=dataRep["studentContactLan"]=dataRep["studentContactMobile"]=dataRep["studentContactEmail"]="";
dataRep["studentDOB"]="";
dataRep["type"] ="";
dataRep['registrationFee']=dataRep['applicationFee']=dataRep['examinationFee']=dataRep['courseFeeTotal']=dataRep['libraryFeeRefundable']=dataRep['libraryFeeNonRefundable']=dataRep['textbookFee']=dataRep['internetFee']=dataRep['']="";
var courseUnitCodeStr = "";
var studentNameList = studentNoList = studentNICList = "";
dataRep["extendedDuration"] = dataRep["addtionalPayments"] = "";
 dataRep["selectedCompulsory"] = new Array();
 var selectedOptionalsArr = new Array();


function setStudentDetails(){
	for(i=0; i<studentNICLength;i++){

		if(dataRep["studentNo"]==studentNoArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["universityTitle"]=universityTitleArr[i];
			dataRep["facultyCode"]=facultyCodeArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentCode"]=departmentCodeArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["duration"]=durationArr[i];
			//dataRep["addtionalPayments"] = addtionalPaymentsArr[i];
	
		}else if(dataRep["studentName"]==studentNameArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["universityTitle"]=universityTitleArr[i];
			dataRep["facultyCode"]=facultyCodeArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentCode"]=departmentCodeArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["duration"]=durationArr[i];
			//dataRep["addtionalPayments"] = addtionalPaymentsArr[i];
	
		}else if(dataRep["studentNIC"]==studentNICArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["universityCode"]=universityCodeArr[i];
			dataRep["universityTitle"]=universityTitleArr[i];
			dataRep["facultyCode"]=facultyCodeArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentCode"]=departmentCodeArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
			dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["degreeTitle"]=degreeTitleArr[i];
			dataRep["duration"]=durationArr[i];
			//dataRep["addtionalPayments"] = addtionalPaymentsArr[i];
	
		}
	}
} 




function refreshStudentDetails(){

	dataRep["academicYear"] = dataRep["studentNo"]= dataRep["studentNIC"] = dataRep["studentName"]=dataRep["departmentTitle"]= dataRep['departmentCode'] ="";
	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep["programmeTypeTitle"]=dataRep["programmeTypeCode"]=dataRep["degreeTitle"]=dataRep["degreeCode"]= "";
	dataRep["extendedDuration"] = dataRep["addtionalPayments"] = dataRep["duration"] = "";
	studentNICList = studentNoList = studentNameList = "";	
		
	sendForm('data4studentaddiDetails');	
	
}

function refreshStudentDetails2(){

	dataRep["academicYear"] = dataRep["studentNo"]= dataRep["studentNIC"] = dataRep["studentName"]=dataRep["departmentTitle"]= dataRep['departmentCode'] ="";
	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep["programmeTypeTitle"]=dataRep["programmeTypeCode"]=dataRep["degreeTitle"]=dataRep["degreeCode"]= "";
	dataRep["extendedDuration"] = dataRep["addtionalPayments"] = dataRep["duration"] ="";
	studentNICList = studentNoList = studentNameList = "";	
	//document.getElementById('selectedOptional').checked	= "";
	
	
}


function formStudentAdditionalDetails(dsp) {
		str = "";
		title = "Student Additional Details";

		if(dsp == "formStudentAdditionalDetails") { 
			
			
			
			str  = "<div id='updateStudentAdditionalDetails'>";
			str += "<table><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainStudentAdditionalDetails">';
			
			
			
			for(stuLoop=0; stuLoop< studentNICLength; stuLoop++){
			
			if (studentNameArr.indexOf(studentNameArr[stuLoop]) == studentNameArr.lastIndexOf(studentNameArr[stuLoop]) || (studentNameArr.indexOf(studentNameArr[stuLoop]) != studentNameArr.lastIndexOf(studentNameArr[stuLoop]) && studentNameArr.indexOf(studentNameArr[stuLoop])==stuLoop)){
				studentNameList += "<option value='"+studentNameArr[stuLoop]+"'>";
			}
			
			if (studentNoArr.indexOf(studentNoArr[stuLoop]) == studentNoArr.lastIndexOf(studentNoArr[stuLoop]) || (studentNoArr.indexOf(studentNoArr[stuLoop]) != studentNoArr.lastIndexOf(studentNoArr[stuLoop]) && studentNoArr.indexOf(studentNoArr[stuLoop])==stuLoop)){
				studentNoList += "<option value='"+studentNoArr[stuLoop]+"'>";
			}
			if (studentNICArr.indexOf(studentNICArr[stuLoop]) == studentNICArr.lastIndexOf(studentNICArr[stuLoop]) || (studentNICArr.indexOf(studentNICArr[stuLoop]) != studentNICArr.lastIndexOf(studentNICArr[stuLoop]) && studentNICArr.indexOf(studentNICArr[stuLoop])==stuLoop)){
				studentNICList += "<option value='"+studentNICArr[stuLoop]+"'>";
			}
			}
				
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'></legend>";
			
			str +="<div class='longIdentifier'>Student NIC</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='studentNIC' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setStudentDetails();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student Name</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentName' list='liststudentName' id='studentName' value= '"+dataRep["studentName"].trim()+"' onchange='dataRep[this.name]=this.value;setStudentDetails();'>";
			str += "<datalist id='liststudentName'>"+studentNameList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student No</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;setStudentDetails();'>";
			str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
			str += "</div><br>"; 

			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm('data4studentaddiDetails');>";
			//str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=>";
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick='refreshStudentDetails();'>";
			
			str += "</fieldset></div></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='studentNIC'>"+dataRep["studentNIC"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;margin-right:100px;' id='studentName'>"+dataRep["studentName"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='facultyTitle'>"+dataRep["facultyTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Department</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='departmentTitle'>"+dataRep["departmentTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Programme Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='programmeTypeTitle'>"+dataRep["programmeTypeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			//hidelable starts
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Code</div>";
			str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['degreeCode']+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
			
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>University Code</div>";
			str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['universityCode']+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Duration</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='duration'>"+dataRep["duration"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";

			// str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			// str +="<div class='longIdentifier' style='clear:none;'>Extended Time Period</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str +="<div class='viewArea' style='clear:none;width:auto;' id='extendedDuration'>"+dataRep["extendedDuration"]+"</div>";
			// str +="<div class=hideLabel>&nbsp;</div>";
			// str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Extended Time Period</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='extendedDuration' name='extendedDuration'  value= '"+dataRep["extendedDuration"].trim()+"' onchange='dataRep[this.name]=this.value;'>";
			str += "</div>";
			
			
			// str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			// str +="<div class='longIdentifier' style='clear:none;'>Addtional Payments(for extended time period)</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str +="<div class='viewArea' style='clear:none;width:auto;' id='addtionalPayments'>"+dataRep["addtionalPayments"]+"</div>";
			// str +="<div class=hideLabel>&nbsp;</div>";
			// str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Addtional Payments(for extended time period)</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='addtionalPayments' name='addtionalPayments'  value= '"+dataRep["addtionalPayments"].trim()+"' onchange='dataRep[this.name]=this.value;'>";
			str += "</div>";
			
			str += "<br><center>";
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<input type='button' class='btn' value='Save'  onclick=formStudentAdditionalDetailssendForm('updateStudentAdditionalDetails');>"; 
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formStudentMenu'"+');refreshStudentDetails2();>';
				
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
			str += '</center></div></div></form>';
			str += '</td></tr></table>';
		
		}
		return str;
	}
	


	function formStudentAdditionalDetailssendForm(frm){

		var doc, dataStr;

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}	
		
		if(frm == 'updateStudentAdditionalDetails'){
			doc = document.maintainStudentAdditionalDetails;
			dataStr = "action=update&interface="+frm;

			for (stuLoop=0; stuLoop<studentNICLength; stuLoop++){
			
				if(dataRep['studentNIC'] == studentNICArr[stuLoop] && dataRep['studentNo'] == studentNoArr[stuLoop] ){

					dataStr += "&universityCode="+dataRep['universityCode']+"&facultyCode="+dataRep['facultyCode']+"&departmentCode="+dataRep['departmentCode']+"&programmeTypeCode="+dataRep['programmeTypeCode']+"&degreeCode="+dataRep['degreeCode']+"&studentNo="+dataRep['studentNo'];

					if(dataRep['extendedDuration'] != ""){
							dataStr += "&extendedDuration="+document.getElementById('extendedDuration').value;
							}
					if(dataRep['addtionalPayments']!= ""){
							dataStr += "&addtionalPayments="+document.getElementById('addtionalPayments').value;
							}
					//alert(dataStr);		
				}
			}
		}
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
			
	return 0;
}


