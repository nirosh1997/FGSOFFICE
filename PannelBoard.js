function setValuesEvaluation(){
	for(i=0; i<studentNoLength;i++){

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
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			
		
		}
	}
} 


dataRep["pannelboarddeci"]="";
dataRep["pannelNo"]="";
dataRep["dgrade"]="";
dataRep["ReSubmit"]="";

function formPannelBoard(dsp) {
		str = "";
		title = "Pannel Board";

		if(dsp == "formPannelBoard") { 
			
			
			
			str  = "<div id='formPannelBoard'>";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformPannelBoard">';
			
			for(studentNoLoop=0; studentNoLoop< studentNICLength; studentNoLoop++){
			
			if (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) == lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) || (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) != lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) && lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop])==studentNoLoop)){
				if(lecturerNameArr[studentNoLoop] != ""){
				lecturerNameList += "<option value='"+lecturerNameArr[studentNoLoop]+"'>";
				}
			}
			
			}
			
			str +="<div class='longIdentifier'>Student No</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesEvaluation();'>";
			str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
			str += "</div>"; 

			str += "<input type='button' class='btnB' value='View' onclick=sendForm('data4ThesisEvaluation');>";
		
		//pannel board
			
				str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
						str +="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'>";
				
								 
								str +="<div class='longIdentifier'>Attempt</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								str += "<select id='pannelNo' name='pannelNo' value='pannelNo'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								str += "<option value='0' selected>Please scroll down to see the records</option>";
								str += "<option value='1'>First</option>";
								str += "<option value='2'>Second</option>";
								str += "<option value='3'>Third</option>";
								str += "<option value='4'>Fourth</option>";					
								str += "</select>";
								str += "</div>";
								 
								 
								 dataRep['LreqYYYY'] = year;
								 dataRep['LreqMM'] = month;
								 dataRep['LreqDD'] = date;
			
								 str +="<div class='longIdentifier'> Date of Sending Request Letter to Pannel Board</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 str += "<select name='LreqYYYY' value='LreqYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['LreqYYYY']);
								 str += "</select>";
								 str += "<select name='LreqMM' value='LreqMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['LreqMM']);
								 str += "</select>";
								 str += "<select name='LreqDD' value='LreqDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['LreqDD']);
								 str += "</select></div>";
				
								
								 dataRep['pannelYYYY'] = year;
								 dataRep['pannelMM'] = month;
								 dataRep['pannelDD'] = date;
			
								 str +="<div class='longIdentifier'>Pannel Board Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 str += "<select name='pannelYYYY' value='pannelYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['pannelYYYY']);
								 str += "</select>";
								 str += "<select name='pannelMM' value='pannelMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['pannelMM']);
								 str += "</select>";
								 str += "<select name='pannelDD' value='pannelDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['pannelDD']);
								 str += "</select></div>";
								 
								str +="<div class='longIdentifier'>Pannel Board Decision</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								str += "<select id='pannelboarddeci' name='pannelboarddeci' value='pannelboarddeci'  onchange='dataRep[this.name]=this.value;hidevalue();' class='dateSelect;'>";
								str += "<option value='0' selected>Please scroll down to see the records</option>";
								str += "<option value='1'>Re-Submit</option>";
								str += "<option value='2'>Degrade</option>";
								str += "<option value='3'>Viva</option>";
								str += "</select>";
								str += "</div><br>";
								
								
								str +="<div style='margin-top:2px;float:center;clear:both;'></div>";
							
								
						
								
								str +="<div class='longIdentifier'>Degrade Offered</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								str += "<select id='dgrade' name='dgrade' value='dgrade'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								str += "<option value='0' selected>Please scroll down to see the Option</option>";
								str += "<option value='1'>PGDip</option>";
								str += "<option value='2'>MSc</option>";
								str += "<option value='3'>M.phill</option>";
								str += "</select>";
								str += "</div><br>";
							
								
								// str +="<div class='longIdentifier'>Duration for Re-Submit</div><div class='colon'>&nbsp;:&nbsp;</div>";
								// str +="<div class='viewArea'>";
			
								// str +="<div input type='text' style='width:180px' name='ReSubmit' id='ReSubmit' value= '"+dataRep["ReSubmit"].trim()+"'onchange='dataRep[this.name]=this.value;'>";
								// str += dataRep["ReSubmit"];
								// str +="</div><br>";
								
								
								str +="<div class='longIdentifier'>Duration for Re-Submit</div><div class='colon'>&nbsp;:&nbsp;</div>";
								str +="<div class='viewArea'>";
			
								str +="<input type='text' style='width:180px';visibility:'hidden' name='ReSubmit'  id='ReSubmit' value= '"+dataRep["ReSubmit"].trim()+"'  onchange='dataRep[this.name]=this.value;'>";
								str += "</div>"; 
								
								str +="<div class='longIdentifier'>Remark</div><div class='colon'>&nbsp;:&nbsp;</div>";	
								str +="<textarea rows='auto'  name='remarks' id='remarks'  style='float:left;width:200px;height:120px'  onchange='dataRep[this.name]=this.value'"+fieldDisabled+">";
								str += dataRep["remarks"];
								str +=" </textarea>";
								
								str += "</div>"; 
								str +="<div style='margin-top:20px;float:center;clear:both;'>";
			
								str += '<input type="button" class="btnB" value="Save"  onclick= formPannelBoardsendForm('+"'addPannelBoard'"+');>';	
								str += '<input type="button"  class="btnB" value="Update" onclick= formUpdatePannelBoardsendForm('+"'updatePannelBoard'"+');>';
								str += '<input type="button" class="btnB" value = "Return" onclick = showMenu('+"'formThesisSubmitMenu'"+');>';
			
				str +="</fieldset>";
		}
		return str;
	}
	
 function hidevalue(){
 //alert(document.getElementById('pannelboarddeci').value);
	//if(document.getElementById('pannelboarddeci').value == "1" || document.getElementById('pannelboarddeci').value == "2"){
	
	if(document.getElementById('pannelboarddeci').value == "1"){
	
	 document.getElementById("dgrade").style.visibility = "hidden";
	 document.getElementById("ReSubmit").style.visibility = "visible"; 
	}
	else if(document.getElementById('pannelboarddeci').value == "2"){
	
	document.getElementById("ReSubmit").style.visibility = "hidden";
	document.getElementById("dgrade").style.visibility = "visible"; 
		//}
	}
	 else{
	  document.getElementById("dgrade").style.visibility = "hidden";
	 document.getElementById("ReSubmit").style.visibility = "hidden"; 
	 }
	
	
	
 }
	
	
function formPannelBoardsendForm(frm){

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
		
		
		if(frm == 'addPannelBoard'){
 
			doc = document.maintainformPannelBoard;
		
			dataStr += "&interface="+frm;
				
										
			dataStr += "&studentNo="+dataRep["studentNo"];
			
						
			
			dataStr += "&serialNo="+doc.LreqYYYY.value+"/"+doc.LreqMM.value+"/"+doc.LreqDD.value;
				
			dataStr += "&PBDate="+doc.pannelYYYY.value+"/"+doc.pannelMM.value+"/"+doc.pannelDD.value;
						
			dataStr += "&PBDecision="+document.getElementById('pannelboarddeci').value;
			
			dataStr += "&DeDeg="+document.getElementById('dgrade').value;
			
			dataStr += "&ReSubDuration="+dataRep["ReSubmit"];

			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}	
		
		
function formUpdatePannelBoardsendForm(frm){

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
		
		
		if(frm == 'updatePannelBoard'){
 
			doc = document.maintainformPannelBoard;
		
			dataStr += "&interface="+frm;
				
										
			dataStr += "&studentNo="+dataRep["studentNo"];
			
						
			
			dataStr += "&serialNo="+doc.LreqYYYY.value+"/"+doc.LreqMM.value+"/"+doc.LreqDD.value;
				
			dataStr += "&PBDate="+doc.pannelYYYY.value+"/"+doc.pannelMM.value+"/"+doc.pannelDD.value;
						
			dataStr += "&PBDecision="+document.getElementById('pannelboarddeci').value;
			
			dataStr += "&DeDeg="+document.getElementById('dgrade').value;
			
			dataStr += "&ReSubDuration="+dataRep["ReSubmit"];

			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}			