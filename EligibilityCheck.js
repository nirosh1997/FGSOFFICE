// ////Coded by S.Suraweera////
// ////28.05.2015-----


var testNum = 0;
dataRep["facultyBoardNo"] = dataRep["boardOfStudyNo"] =dataRep['progressReport']= "";
dataRep["studentContactLand01"] = dataRep["studentContactMobile01"] ="";			
var	OneChecked = TwoChecked = ThreeChecked = FourChecked = FiveChecked = SixChecked = "";
dataRep['certifiedCertificates'] ="";	
var birthCertificateChecked = degreeCertificateChecked = OtherChecked ="";		
dataRep["title"]="";
dataRep['notification']="";

function setValuesExaminer(){
	for(i=0; i<studentNICLength;i++){

		if(dataRep["studentNo"]==studentNoArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["departmentCode"]=departmentCodeArr[i];
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
			dataRep["tid"]=tidArr[i];
			dataRep["title"]=titleArr[i];
			
	
		}else if(dataRep["studentName"]==studentNameArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["departmentCode"]=departmentCodeArr[i];
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
			dataRep["tid"]=tidArr[i];
			dataRep["title"]=titleArr[i];
			
			
		}else if(dataRep["studentNIC"]==studentNICArr[i]){

			dataRep["studentNo"]=studentNoArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["departmentCode"]=departmentCodeArr[i];
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
			dataRep["tid"]=tidArr[i];
			dataRep["title"]=titleArr[i];
			
		}
	}
} 




function formThesisSubmit(dsp) {
		str = "";
		title = "Thesis Submit";

		if(dsp == "formThesisSubmit") { 
			
			
			
			str  = "<div id='formThesisSubmit'>";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformThesisSubmit">';
			
			
			//Eligibility chk
			
						str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
						str +="<fieldset  class='field'><legend class='fieldHead'> </legend><div style='clear:both'><div class='rdo'>";
					
						str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>:&nbsp;</div>";
						str +="<div class='viewArea' style='clear:none;' id='studentName'>"+dataRep["studentName"]+"</div>";
						str +="<div class=hideLabel>&nbsp;</div>";
					
						str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>:&nbsp;</div>";
						str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
						str +="<div class=hideLabel>&nbsp;</div>";
						
						str +="<div class='longIdentifier' style='clear:none;'>Thesis ID</div><div class='colon'>:&nbsp;</div>";
						str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["tid"]+"</div>";
						str +="<div class=hideLabel>&nbsp;</div>";
					
						str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
								 dataRep['handYYYY'] = year;
								 dataRep['handMM'] = month;
								 dataRep['handDD'] = date;
			
								 str +="<div class='longIdentifier'>Date Received</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 str += "<select name='handYYYY' value='handYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['handYYYY']);
								 str += "</select>";
								 str += "<select name='handMM' value='handMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['handMM']);
								 str += "</select>";
								 str += "<select name='handDD' value='handDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['handDD']);
								 str += "</select></div><br>";
								 
								
								str +="<div class='longIdentifier' onclick='dataRep[this.name]=this.value;'><label>Ackknowledge Letter</label></div>";
								str +="<input  type='checkbox' id='ackLetter' name='progressReport' class='changeColor' value= 'Progress Report Three'>";
						
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>&nbsp;&nbsp;Three Copies</label>";
								str +="<input  type='checkbox' id='3Copys' name='progressReport' class='changeColor' value= 'Progress Report Three'></div><br>";
			
								str +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
								
								if(dataRep['roleName']=='Administrator') {
								
								str +="<br/><div class='longIdentifier'>Approved By</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								str += "<select id='approvedBy' name='approvedBy' value='approvedBy'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								str += "<option value='0' selected>Please scroll down to see the records</option>";
								str += "<option value='1'>Dean</option>";
								str += "<option value='2'>SAR of FGS</option>";
													

								str += "</select>";
								str += "</div>";
			
	
								str +="<div class='longIdentifier'>Remarks:&nbsp;<textarea rows='auto'  name='notification' id='notification'  style='float:left;width:250px'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
								str += dataRep["notification"];
								str +="</textarea></div><br>";
								}
								
								str +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
								str += '<input type="button" class="btnB" value="Save"  onclick=formThesisSubmitChecksendForm('+"'updateThesisSubmit'"+');>';	
								//str += '<input type="button" class="btnB" value="Update"  onclick=sendForm("")>';	
								str += '<input type="button" class="btnB" value="Return"  onclick=showMenu('+"'formThesisSubmitMenu'"+');>';	
								str += '<input type="button" class="btnB" value="Logout"  onclick=logOut();>';	
								str += '<input type="button" class="btnB" value="Save UnderCondition"  onclick=formThesisSubmitUnderConditionsendForm('+"'addThesisSubmitUnderCondition'"+');>';	
								
								str+="</div>";
					
							str +="</fieldset></div><br>";
							
			}
		return str;
		}
		

		
		function formThesisSubmitChecksendForm(frm){

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
		
		
		if(frm == 'updateThesisSubmit'){
 
			var i = 2;
			doc = document.maintainformThesisSubmit;
		
			dataStr += "&interface="+frm;
				
			//dataStr += "&tid="+"2";
			dataStr += "&tid="+dataRep["tid"];
			
			dataStr += "&dateHandOverToFgs="+doc.handYYYY.value+"/"+doc.handMM.value+"/"+doc.handDD.value;
			
				
			if(document.getElementById('ackLetter').checked == true){
				dataStr +="&ActLetterIssue="+"2";
			}
			else{
				dataStr +="&ActLetterIssue="+"1";
			}
			
				
			if(document.getElementById('3Copys').checked == true){
				dataStr +="&3copies="+"2";
			}
			else{
				dataStr +="&3copies="+"1";
			}
			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}


		
function formThesisSubmitUnderConditionsendForm(frm){

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
		
		
		if(frm == 'addThesisSubmitUnderCondition'){
 
			var i = 2;
			doc = document.maintainformThesisSubmit;
		
			dataStr += "&interface="+frm;
				
			dataStr += "&tid="+"2";
			//dataStr += "&tid="+dataRep["i"];
			
			dataStr += "&ApproveBy="+document.getElementById('approvedBy').value;
			
			
			dataStr += "&Remarks="+dataRep["notification"];
			
				
			
			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}