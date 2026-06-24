
////Coded by S.Suraweera////
////24.05.2015-----


var testNum = 0;
	
dataRep["title"]="";
dataRep['notification']="";
dataRep['rDescription']="";
dataRep['RemDate']="";
dataRep['rDescription']="";
dataRep["selectedExaminer"]="";

patientID = new Array();
rDescription = new Array();
lecturerName = new Array();

function setValuesEvaluation(){

	for(i=0; i<studentNoLength;i++){

		if(dataRep["studentNo"]==studentNoArr[i]){

			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["facultyTitle"]=facultyTitleArr[i];
			dataRep["departmentTitle"]=departmentTitleArr[i];
			dataRep["departmentCode"]=studentNoArr[i];
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
			dataRep["rid"]=ridArr[i];
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			dataRep["RemDate"]=RemDateArr[i];
			dataRep["description"]=descriptionArr[i];
			dataRep["reminderMethod"]=reminderMethodArr[i];
		
		}
	}
		
} 


function callViewReminder(i){

if(lecturerEmpNoArr[i] == dataRep["lecturerEmpNo"] ){
			dataRep["lecturerName"]=lecturerNameArr[i];
			//dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			dataRep["RemDate"]=RemDateArr[i];
			dataRep["description"]=descriptionArr[i];
			dataRep["reminderMethod"]=reminderMethodArr[i];
			
		alert(dataRep["lecturerEmpNo"]);
		
	showMenu('formViewReminderDetails');
	}
}

function resetValues(){
tidNoLength=0;
//showMenu('formUpdateUGCStudent');

}

function formThesisEvaluation(dsp) {
		str = "";
		examinerStr = "";
		title = "Thesis Evaluation Reports";

		if(dsp == "formThesisEvaluation") { 
			
			
			
			str  = "<div id='formThesisEvaluation'>";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformThesisEvaluation">';
			
			for(studentNoLoop=0; studentNoLoop< studentNICLength; studentNoLoop++){
			
			if (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) == lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) || (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) != lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) && lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop])==studentNoLoop)){
				if(lecturerNameArr[studentNoLoop] != ""){
				lecturerNameList += "<option value='"+lecturerNameArr[studentNoLoop]+"'>";
				}
			}	
			if (studentNoArr.indexOf(tidArr[studentNoLoop]) == studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) || (studentNoArr.indexOf(studentNoArr[studentNoLoop]) != studentNoArr.lastIndexOf(studentNoArr[studentNoLoop]) && studentNoArr.indexOf(studentNoArr[studentNoLoop])==studentNoLoop)){
				if(studentNoArr[studentNoLoop] != ""){
				studentNoList += "<option value='"+studentNoArr[studentNoLoop]+"'>";
				}
			}
			// if (RemDateArr.indexOf(RemDateArr[studentNoLoop]) == RemDateArr.lastIndexOf(RemDateArr[studentNoLoop]) || (RemDateArr.indexOf(RemDateArr[studentNoLoop]) != RemDateArr.lastIndexOf(RemDateArr[studentNoLoop]) && RemDateArr.indexOf(RemDateArr[studentNoLoop])==studentNoLoop)){
				// if(RemDateArr[studentNoLoop] != ""){
				// RemDateList += "<option value='"+RemDateArr[studentNoLoop]+"'>";
				// }
			// }	
			// if (descriptionArr.indexOf(descriptionArr[studentNoLoop]) == descriptionArr.lastIndexOf(descriptionArr[studentNoLoop]) || (descriptionArr.indexOf(descriptionArr[studentNoLoop]) != descriptionArr.lastIndexOf(descriptionArr[studentNoLoop]) && descriptionArr.indexOf(descriptionArr[studentNoLoop])==studentNoLoop)){
				// if(descriptionArr[studentNoLoop] != ""){
				// dateDescriptionList += "<option value='"+RemDateArr[studentNoLoop]+"-"+descriptionArr[studentNoLoop]+"'>";
				// }
			// }
			
			}
			// for(examinerCounter=0; examinerCounter < studentNoLength; examinerCounter++){
			// if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[examinerCounter]) == lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[examinerCounter]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[examinerCounter]) != lecturerEmpNoArr.lastIndexOf(examinerCounter) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[examinerCounter])==examinerCounter)){
			
			// dataRep["lecturerEmpNo"]=lecturerEmpNoArr[examinerCounter];
			// dataRep["lecturerName"]=lecturerNameArr[examinerCounter];
			
			// dataRep["RemDate"]=RemDateArr[examinerCounter];
			// dataRep["description"]=descriptionArr[examinerCounter];
			
			
			// }
		// }
			str +="<div class='longIdentifier'>Student No</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesEvaluation();'>";
			str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
			str += "</div>"; 

			str += "<input type='button'  class='btnB' value='View' onclick=sendForm('data4ThesisEvaluation');searchReminders()>";
			str += '<input type="button" class="btnB" value = "Return" onclick = showMenu('+"'formThesisSubmitMenu'"+');>';
			str += '<input type = "button" class ="btnB" value="logout" onclick=logOut();>';
			
			
			//Evaluation Report
			
				str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
						str +="<fieldset  class='field'><legend class='fieldHead'> </legend><div style='clear:both'><div class='rdo'>";
				
							
				
					str +="<table style='width:890px;float:left'><tr><th style='width:2px'></th></tr></table>";			
						
						
							str +="<div  id='inputs' style='margin:clear:both'>";  //test333					
							
							str +="<div id='newRow"+testNum+"' style='margin:5px 10px;clear:both'>";
							
							
							
							examinerStr="<option>Please scroll down to see the records</option>";
							for(i = 0; i<studentNoLength; i++) {
							
							if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i])== lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i])!= lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i])== i)){					
					
							examinerStr += "<option>"+lecturerNameArr[i]+"-"+lecturerEmpNoArr[i]+"</option>";
								}
							}
							
							str += "<center><div class='identifiers'>Examiner Name</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selectedExaminer' onchange='dataRep[this.id]=this.selectedIndex;'>";
							str += examinerStr;
							str += "</select></center><br></div>";
							
						//hidelable starts
								str +="<div class='hideLabel'>";
								str +="<div class='longIdentifier' style='clear:none;'>Thesis ID</div>";
								str +="<div id='exid' class='viewArea' style='clear:none;'>"+dataRep['lecturerEmpNo']+"</div>";
								dataRep['eid']=dataRep['lecturerEmpNo'];
								str +="<div class=hideLabel>&nbsp;</div>";
								str +="</div>";	
								
						//hidelable starts
								str +="<div class='hideLabel'>";
								str +="<div class='longIdentifier' style='clear:none;'>Thesis ID</div>";
								str +="<div id='thesisid' class='viewArea' style='clear:none;'>"+dataRep['tid']+"</div>";
								dataRep['thesisid']=dataRep['tid'];
								str +="<div class=hideLabel>&nbsp;</div>";
								str +="</div>";	
						//alert(dataRep['thesisid']);
						
						//hidelable starts
						//str +="<div class='hideLabel'>";
						//str +="<div style='margin-top:20px;float:left;clear:both;'>";
						// str +="<div class='longIdentifier' style='clear:none;'></div><div class='colon'>&nbsp;&nbsp;</div>";
						// str +="<div class='viewArea' style='clear:none;margin-right:100px;' list='liststudentNo' id='studentName'>"+dataRep["lecturerName"]+"</div>";
						// str +="<datalist id='liststudentNo'>"+lecturerNameList+"</datalist>";
						//str +="<div class=hideLabel>&nbsp;</div>";
						//str +="</div>";
						//str +="<br/>";
						
						str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
						str +="<fieldset  class='field'><legend class='fieldHead'>Sending Thesis</legend><div style='clear:both;float:left'><div class='rdo'>";
				
								 dataRep['sendYYYY'] = year;
								 dataRep['sendMM'] = month;
								 dataRep['sendDD'] = date;
			
								 str +="<div class='longIdentifier'>Sending Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 str += "<select name='sendYYYY' value='sendYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['sendYYYY']);
								 str += "</select>";
								 str += "<select name='sendMM' value='sendMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['sendMM']);
								 str += "</select>";
								 str += "<select name='sendDD' value='sendDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['sendDD']);
								 str += "</select></div><br>";
				
					
								
								str +="<br/><div onclick='dataRep[this.name]=this.value;'><label>Inform By call</label>";
								str +="<input  type='checkbox' name='CallChecked' id='CallChecked' class='changeColor' value= 'Progress Report Three'>";
						
							
								str +="<onclick='dataRep[this.name]=this.value;'><label>Marks sheet</label>";
								str +="<input  type='checkbox' name='MarksChecked' id='MarksChecked' class='changeColor' value= 'Progress Report Three'>";
								
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>Voucher</label>";
								str +="<input  type='checkbox' name='VoucherChecked' id='VoucherChecked' class='changeColor' value= 'Progress Report Three'>";
			
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>Thesis</label>";
								str +="<input  type='checkbox' name='ThesisChecked' id='ThesisChecked' class='changeColor' value= 'Progress Report Three'>";
			
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>Covering Letter</label>";
								str +="<input  type='checkbox' name='CLChecked' id='CLChecked' class='changeColor' value= 'Progress Report Three'></div>";
			
								str += '<input type="button" class="btnB" value="Save"  onclick=formThesisEvaluationSendThesissendForm('+"'addThesisSending'"+');>';	
								
						str +="</div>";
													
					str +="</fieldset>";
					
					
					//Reminders
					
						str +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
			
						str +="<fieldset  class='field'><legend class='fieldHead'>Examiner Reminders </legend><div style='clear:both'><div class='rdo'>";
							
							//reminder1
							
							str +="<div id='newRow"+testNum+"' style='margin:5px 10px;clear:both'>";
							//
							str +="<table style='width:890px;float:left'><tr><th style='width:2px'></th></tr></table>";			
						
								 dataRep['rsentYYYY'] = year;
								 dataRep['rsentMM'] = month;
								 dataRep['rsentDD'] = date;
			
								 str +="<div class='longIdentifier'>Date Reminder Sent</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 str += "<select name='rsentYYYY' value='rsentYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['rsentYYYY']);
								 str += "</select>";
								 str += "<select name='rsentMM' value='rsentMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['rsentMM']);
								 str += "</select>";
								 str += "<select name='rsentDD' value='rsentDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['rsentDD']);
								 str += "</select></div><br>";
						
												
								str +="<div class='longIdentifier'>Note:&nbsp;<textarea rows='auto'  name='rDescription' id='rDescription'  style='float:left;width:250px'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
								str += dataRep["rDescription"];
								str +="</textarea></div><br>";
								
								str +="<div style='margin-top:5px;float:left;clear:both;' class = 'demoprint'>";
			
								str +="<br/><div onclick='dataRep[this.name]=this.value;'><label>Reminder Sent By a Call</label>";
								str +="<input  type='checkbox' name='progressReport' id='TCall' class='changeColor' value= 'Progress Report Three'>";
						
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>Reminder Sent By a E-Mail</label>";
								str +="<input  type='checkbox' name='progressReport' id='Email' class='changeColor' value= 'Progress Report Three'>";
								
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>Reminder Sent By a Letter</label>";
								str +="<input  type='checkbox' name='progressReport' id='Letter' class='changeColor' value= 'Progress Report Three'><br>";
			
								// str +="<div class='longIdentifier' style='clear:none;'>Sent Reminders</div><div class='colon'>&nbsp;:&nbsp;</div>";
								// str += "<textarea rows='auto'  name='title' id='title' list='listlecturerName' style='float:left;width:320px'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
								// str +=dataRep["description"];
								// //str += "<datalist id='listlecturerName'>"+dateDescriptionList+"</datalist></div >";
						
								//alert(dataRep["dateDescriptionList"]);
								str +=" </textarea></div>";
								
								str +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
								str += '<input type="button" class="btnB" value="Save"  onclick=formExaminerReminderssendForm('+"'addReminders'"+');>';	
								//str += '<td><button class="btn2" onclick="setValuesEvaluation('+studentNoLength+');" id="edit'+studentCounter+'"><b>Edit</b></button></td>';
			
								str += '<input type="button" class="btnB" value="ViewReminders" onclick = "resetValues();sendForm('+"'data4ThesisReminders'"+');">';//callViewReminder('+i+')
								str += '<input type="button" class="btnB" value="Clear"  onclick=clearSearch2();>';	
								str+="</div>";
								
									str += "<div id='rmndrDetails' >";
									
									
									
					str +="</fieldset>";
					
					
					//Returning Thesis
					
					str +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
			
						str +="<fieldset  class='field'><legend class='fieldHead'>Returning Thesis From Examiner</legend><div style='clear:both'><div class='rdo'>";
				
								 dataRep['rYYYY'] = year;
								 dataRep['rMM'] = month;
								 dataRep['rDD'] = date;
			
								 str +="<div class='longIdentifier'>Date Returned</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 str += "<select name='rYYYY' value='rYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['rYYYY']);
								 str += "</select>";
								 str += "<select name='rMM' value='rMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['rMM']);
								 str += "</select>";
								 str += "<select name='rDD' value='rDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['rDD']);
								 str += "</select></div><br>";
				
					
								
								str +="<br/><div onclick='dataRep[this.name]=this.value;'><label>Thesis</label>";
								str +="<input  type='checkbox' name='progressReport' id='Thesis' class='changeColor' value= 'Progress Report Three'>";
						
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>Marks sheet</label>";
								str +="<input  type='checkbox' name='progressReport' id='Markssheet' class='changeColor' value= 'Progress Report Three'>";
								
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>Voucher</label>";
								str +="<input  type='checkbox' name='progressReport' id='Voucher' class='changeColor' value= 'Progress Report Three'>";
			
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>Evaluation Report</label>";
								str +="<input  type='checkbox' name='progressReport' id='EvaluationReport' class='changeColor' value= 'Progress Report Three'></div>";
			
								str +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
								str += '<input type="button" class="btnB" value="Save"  onclick=formReturningThesissendForm('+"'addThesisReturn'"+');>';	
								//str += '<input type="button" class="btnB" value="Update"  onclick=sendForm("")>';	
								
								str+="</div>";
				
					str +="</fieldset>"; 
					
					
				
				str += '</td></tr></table></div>';
			
				str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
				
				str +="</fieldset>"; 
			
			
			str += "<center>";
			
			str += '</center></div></form>';
		}
		return str;
		}
		
function addNewExaminer(){

var a ="Examiner"+testNum;
// var c="dosage"+testNum;
// var d="studentName "+testNum;
// var f ="sentTo"+testNum;
 //alert (dataRep['commenceYYYY']);
 
 if((dataRep['commenceYYYY']).value !=""){
//if(document.getElementById(f).value !="" ){


dataRep['commenceYYYY'][testNum]=dataRep['degreeTitle'];
//dataRep['dosageArr'][testNum]=dataRep['dosage'];
dataRep['title'][testNum]=dataRep['title'];
dataRep['studentName'][testNum]=dataRep['studentName'];
dataRep['studentName'][testNum]=dataRep['studentName'];
dataRep['studentName'][testNum]=dataRep['studentName'];



//alert(dataRep['dosageArr'][testNum] + "   " + testNum);



e="sentTo"+ ++testNum;


 //alert(b);
 
 
 
 for(i=0; i< programmeTypeCode; i++){
				if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
					
					degreeTitleList+= "<option value='"+degreeTitleArr[i]+"'>";
				} 
										
			} 
 
        //.............................................................................
			
		//............................................................................
 
		var newRowstr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";  //test333
				
				newRowstr +="<div>========================================================================================================</div>";
		
					
				newRowstr +="<div id='newRow"+testNum+"' style='margin:clear:both'>";
		
				newRowstr +="<div style='margin-top:20px;float:left;clear:both;'>";
						newRowstr +="<div class='longIdentifier' style='clear:none;'>Examiner Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
						newRowstr +="<div class='viewArea' style='clear:none;margin-right:100px;' id='studentName'>"+dataRep["studentName"]+"</div>";
						newRowstr +="<div class=hideLabel>&nbsp;</div>";
						newRowstr +="</div>";
						//str +="<br/>";
						
						newRowstr +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
						newRowstr +="<fieldset  class='field'><legend class='fieldHead'>Sending Thesis</legend><div style='clear:both;float:left'><div class='rdo'>";
				
								 dataRep['commenceYYYY'] = year;
								 dataRep['commenceMM'] = month;
								 dataRep['commenceDD'] = date;
			
								 newRowstr +="<div class='longIdentifier'>Date Received</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 newRowstr += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['commenceMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['commenceDD']);
								 newRowstr += "</select></div><br>";
				
					
								newRowstr +=TwoChecked;
								newRowstr +="<br/><div onclick='dataRep[this.name]=this.value;'><label>Inform By call</label>";
								newRowstr +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'>";
						
								newRowstr +=TwoChecked;
								newRowstr +="<onclick='dataRep[this.name]=this.value;'><label>Marks sheet</label>";
								newRowstr +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'>";
								
								newRowstr +=TwoChecked;
								newRowstr +="<onclick='dataRep[this.name]=this.value;'><label>Voucher</label>";
								newRowstr +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'>";
			
								newRowstr +=TwoChecked;
								newRowstr +="<onclick='dataRep[this.name]=this.value;'><label>Thesis</label>";
								newRowstr +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'>";
			
								newRowstr +=TwoChecked;
								newRowstr +="<onclick='dataRep[this.name]=this.value;'><label>Covering Letter</label>";
								newRowstr +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'></div>";
			
						newRowstr +="</div>";
													
					newRowstr +="</fieldset>";
					
					
					//Reminders
					
						newRowstr +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
			
						newRowstr +="<fieldset  class='field'><legend class='fieldHead'>Examiner Reminders </legend><div style='clear:both'><div class='rdo'>";
							
										
							
							newRowstr +="<div id='newRow"+testNum+"' style='margin:5px 10px;clear:both'>";
							
					newRowstr +="<table style='width:890px;float:left'><tr><th style='width:2px'></th></tr></table>";			
						
								 dataRep['commenceYYYY'] = year;
								 dataRep['commenceMM'] = month;
								 dataRep['commenceDD'] = date;
			
								 newRowstr +="<div class='longIdentifier'>Date Reminder Sent</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 newRowstr += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['commenceMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['commenceDD']);
								 newRowstr += "</select></div><br>";
						
						
								newRowstr +="<div class='longIdentifier'>Note:&nbsp;<textarea rows='auto'  name='notification' id='notification'  style='float:left;width:250px'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
								newRowstr += dataRep["notification"];
								newRowstr +="</textarea></div><br>";
								
								newRowstr +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
								newRowstr += '<input type="button" class="btnB" value="Save"  onclick=sendForm("")>';	
								newRowstr += '<input type="button" class="btnB" value="Update"  onclick=sendForm("")>';	
								newRowstr += '<input type="button" class="btnB" value="Clear"  onclick="";>';
								newRowstr+="</div>";
																			
					newRowstr +="</fieldset>";
					
					
					//Returning Thesis
					
					newRowstr +="<div style='margin-top:10px;float:left;clear:both;' class = 'demoprint'>";
			
						newRowstr +="<fieldset  class='field'><legend class='fieldHead'>Returning Thesis From Examiner</legend><div style='clear:both'><div class='rdo'>";
				
								 dataRep['commenceYYYY'] = year;
								 dataRep['commenceMM'] = month;
								 dataRep['commenceDD'] = date;
			
								 newRowstr +="<div class='longIdentifier'>Date Returned</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 newRowstr += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['commenceMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['commenceDD']);
								 newRowstr += "</select></div><br>";
				
					
								newRowstr +=TwoChecked;
								newRowstr +="<br/><div onclick='dataRep[this.name]=this.value;'><label>Thesis</label>";
								newRowstr +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'>";
						
								newRowstr +=TwoChecked;
								newRowstr +="<onclick='dataRep[this.name]=this.value;'><label>Marks sheet</label>";
								newRowstr +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'>";
								
								newRowstr +=TwoChecked;
								newRowstr +="<onclick='dataRep[this.name]=this.value;'><label>Voucher</label>";
								newRowstr +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'>";
			
								newRowstr +=TwoChecked;
								newRowstr +="<onclick='dataRep[this.name]=this.value;'><label>Evaluation Report</label>";
								newRowstr +="<input  type='checkbox' name='progressReport' class='changeColor' value= 'Progress Report Three'></div>";
			
								newRowstr +="<div style='margin-top:2px;float:left;clear:both;' class = 'demoprint'>";
								newRowstr += '<input type="button" class="btnB" value="Save"  onclick=addNewExaminer();)>';	
								newRowstr += '<input type="button" class="btnB" value="Update"  onclick=sendForm("")>';	
								newRowstr +="</div>";
		

				newRowstr +="</div>";// end of orderItem
					
					
		newRowstr +="</div>";//test 333
		
		
		document.getElementById('inputs').innerHTML += newRowstr;
		
		//-----------------------------
  
	}

}



	function formThesisEvaluationSendThesissendForm(frm){

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
		
		
		if(frm == 'addThesisSending'){
 
			doc = document.maintainformThesisEvaluation;
		
			dataStr += "&interface="+frm;
				
										
			var tempid = document.getElementById('selectedExaminer').value;
				//alert(tempid);
			var	exid = tempid.split("-",2);	
				
			dataStr += "&eid="+(exid[exid.length-1]);
			
			dataStr += "&sendDate="+doc.sendYYYY.value+"/"+doc.sendMM.value+"/"+doc.sendDD.value;
				
						
			
			if(document.getElementById('CallChecked').checked == true){
				dataStr +="&informbycall="+"2";
			}
			else{
				dataStr +="&informbycall="+"1";
			}
			
			if(document.getElementById('MarksChecked').checked == true){
				dataStr +="&Marksheet="+"2";
			}
			else{
				dataStr +="&Marksheet="+"1";
			}
			
			if(document.getElementById('VoucherChecked').checked == true){
				dataStr +="&voucher="+"2";
			}
			else{
				dataStr +="&voucher="+"1";
			}
			
			if(document.getElementById('ThesisChecked').checked == true){
				dataStr +="&thesis="+"2";
			}
			else{
				dataStr +="&thesis="+"1";
			}
			
			if(document.getElementById('CLChecked').checked == true){
				dataStr +="&coverletter="+"2";
			}
			else{
				dataStr +="&coverletter="+"1";
			}

			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}	
		
	function formExaminerReminderssendForm(frm){

	var doc,dataStr,tempid,exid;
		
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		
		if(frm == 'addReminders'){
 
			doc = document.maintainformThesisEvaluation;
		
			dataStr += "&interface="+frm;
			
				var tempid = document.getElementById('selectedExaminer').value;
				//alert(tempid);
				var exid = tempid.split("-",2);	
				//alert(exid);			
										
			dataStr += "&rid="+dataRep["thesisid"];
			
			dataStr += "&reminderid="+exid[exid.length-1];
			
					
			dataStr += "&RemDate="+doc.rYYYY.value+"/"+doc.rMM.value+"/"+doc.rDD.value;
				
			
					
						
			if(document.getElementById('TCall').checked == true && document.getElementById('Email').checked == true && document.getElementById('Letter').checked == true){
				dataStr +="&reminderMethod="+"C:E:L";
			}
					
			else if(document.getElementById('TCall').checked == true && document.getElementById('Email').checked == true){
				dataStr +="&reminderMethod="+"C:E";
			}
			else if(document.getElementById('TCall').checked == true && document.getElementById('Letter').checked == true){
				dataStr +="&reminderMethod="+"C:L";
			}
			else if(document.getElementById('Email').checked == true && document.getElementById('Letter').checked == true){
				dataStr +="&reminderMethod="+"E:L";
			}
			else if(document.getElementById('Email').checked == true && document.getElementById('TCall').checked == true){
				dataStr +="&reminderMethod="+"E:C";
			}
			else if(document.getElementById('Letter').checked == true && document.getElementById('Email').checked == true){
				dataStr +="&reminderMethod="+"L:E";
			}
			else if(document.getElementById('Letter').checked == true && document.getElementById('TCall').checked == true){
				dataStr +="&reminderMethod="+"L:C";
			}
			else{
			dataStr +="&reminderMethod="+"N";
			
			}
			
			dataStr += "&description="+dataRep["rDescription"];
			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}	
		
		
		function formReturningThesissendForm(frm){

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
		
		
		if(frm == 'addThesisReturn'){
 
			doc = document.maintainformThesisEvaluation;
		
			dataStr += "&interface="+frm;
				
			dataStr += "&rid="+dataRep["tid"];
							
			
			//dataStr += "&eid="+dataRep["lecturerEmpNo"];
			dataStr += "&eid="+lecturerEmpNoArr[dataRep["selectedExaminer"]-1];
			
					
			
			dataStr += "&reportReceivedDate="+doc.rYYYY.value+"/"+doc.rMM.value+"/"+doc.rDD.value;
				
						
			
			if(document.getElementById('Thesis').checked == true){
				dataStr +="&ReceiveThesis="+"2";
			}
			else{
				dataStr +="&ReceiveThesis="+"1";
			}
			
			if(document.getElementById('Markssheet').checked == true){
				dataStr +="&ReceiveMarksheet="+"2";
			}
			else{
				dataStr +="&ReceiveMarksheet="+"1";
			}
			
			if(document.getElementById('Voucher').checked == true){
				dataStr +="&ReceiveVoucher="+"2";
			}
			else{
				dataStr +="&ReceiveVoucher="+"1";
			}
			
			if(document.getElementById('EvaluationReport').checked == true){
				dataStr +="&ReceiveReport="+"2";
			}
			else{
				dataStr +="&ReceiveReport="+"1";
			}
			
			
			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}	
		
		
function searchReminders(){

			if	(document.getElementById('studentNo').value==""){
			document.getElementById('studentNo').value="...";
			}	
		
	
	var c=0;
	
	for(j=0;j<studentNoArr.length;j++){
		
			
		
			if(studentNoArr[j]==document.getElementById('studentNo').value) {

	
	       //var PatientAddress = new Array;
			//PatientAddress[j]= patientAddressLine01Arr[j] + "," + patientAddressLine02Arr[j] + "," + patientAddressLine03Arr[j];
			
		    //str += "<div class='info' id='forprint' name='testInfo"+i+"'>";
				if(studentNoArr[j] != "1"){
					studentNo[c] = RemDateArr[j];
					lecturerName[c] = descriptionArr[j];
					
					c++;
				}
			}
			
		}
	   
	   return 0;
	}
	
	function MessageforWard(){
	var g=0;
		for(k=0;k<studentNo.length;k++){
			if(datarep['description'] == lecturerName[k]){
				g++;		
			}
		}
			if(g!=0){
					printValue();
			}
			else{
			//alert(hims['departmentCode']);
			document.getElementById("formArea").innerHTML += "<div class='MsgText' style='font-size: 18px;color:red;'>This  is not a record of your ward.</div>" ;
			}
	}
	
	function printValue(){
	var fill = "";
	
	
	    fill +="<div id = 'rmndrDetails2' class ='section1' style='float:left;'><fieldset  class='field'><legend class='fieldHead'></legend>";
	
			
		fill +="<div id='topics' class='info'>";
		fill +="<div class='investLabel' style='width:110px;'>Reminder Date</div>";
		fill +="<div class='investLabel' style='width:110px;'>Description</div>";
		fill +="<div></div>";
		fill +="</div><br/>";
		
		pharmacyIncriment++;
		
		
		for(k=0;k<patientID.length;k++){
		
			if(hims['departmentCode'] == dptCode[k]){
			//alert("wada");
				if(patientID[k]==""){
				fill += "<div class='investView' style='width:113px;' name='PatientID1"+k+"' id='PatientID1"+k+"' >&nbsp;</div>";
				}
				else{
				fill += "<div class='investView' style='width:113px;cursor:pointer;' name='PatientID1"+k+"' id='PatientID1"+k+"' onclick= 'buttonget("+k+");'>"+patientID[k]+"</div>";
			
				}
				if(patientName[k]==""){
				fill += "<div class='investView' style='width:113px;' name='patientName1"+k+"' id='patientName1"+k+"' >&nbsp;</div>";
				}
				else{
				fill += "<div class='investView' style='width:113px;cursor:pointer;' name='patientName1"+k+"' id='patientName1"+k+"' onclick= 'buttonget("+k+");'>"+patientName[k]+"</div>";
				}
				
				fill +="<div>&nbsp;</div><br>";
			}
			
		}
		
		fill += "</fieldset></div><br/>";	
		document.getElementById("rmndrDetails").innerHTML += fill;
	}
	
	function clearSearch2(){

document.getElementById("rDescription").value = "";

}