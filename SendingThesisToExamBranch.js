////Coded by S.Suraweera////
////4.06.2015-----




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
			
		}
	}
} 

function formSendingThesisToExamBranch(dsp) {
		str = "";
		title = "Sending Documents To Exam Branch";

		if(dsp == "formSendingThesisToExamBranch") { 
			
			
			
			str  = "<div id='formSendingThesisToExamBranch'>";
			str += "<table align='center' border='1'><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainformSendingThesisToExamBranch">';
			
			
				for(studentNoLoop=0; studentNoLoop< studentNICLength; studentNoLoop++){
			
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
			}
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
						str +="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'>";
				
								
						
						//hidelable starts
								str +="<div class='hideLabel'>";
								str +="<div class='longIdentifier' style='clear:none;'>Thesis ID</div>";
								str +="<div id='thesisid' class='viewArea' style='clear:none;'>"+dataRep['lecturerEmpNo']+"</div>";
								dataRep['eid']=dataRep['lecturerEmpNo'];
								str +="<div class=hideLabel>&nbsp;</div>";
								str +="</div>";	
						
					str +="<div class='longIdentifier' style='float:left;clear:none;'>Student Name</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;' id='studentName'>"+dataRep["studentName"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='float:left;clear:none;'>Student No</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
						
						str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
						str +="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both;float:left'><div class='rdo'>";
				
								 dataRep['exsendYYYY'] = year;
								 dataRep['exsendMM'] = month;
								 dataRep['exsendDD'] = date;
			
								 str +="<div class='longIdentifier'>Sending Date</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
								 str += "<select name='exsendYYYY' value='exsendYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['exsendYYYY']);
								 str += "</select>";
								 str += "<select name='exsendMM' value='exsendMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['exsendMM']);
								 str += "</select>";
								 str += "<select name='exsendDD' value='exsendDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['exsendDD']);
								 str += "</select></div><br>";
				
					
								
								str +="<br/><div onclick='dataRep[this.name]=this.value;'><label>Personal File</label>";
								str +="<input  type='checkbox' name='PersonalFile' id='PersonalFile' class='changeColor' value= 'Progress Report Three'>";
						
							
								str +="<onclick='dataRep[this.name]=this.value;'><label>&nbsp;Evaluation Reports</label>";
								str +="<input  type='checkbox' name='EvaluationReports' id='EvaluationReports' class='changeColor' value= 'Progress Report Three'>";
								
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>&nbsp;Mark Sheets</label>";
								str +="<input  type='checkbox' name='MarkSheets' id='MarkSheets' class='changeColor' value= 'Progress Report Three'>";
			
								
								str +="<onclick='dataRep[this.name]=this.value;'><label>&nbsp;Thesis</label>";
								str +="<input  type='checkbox' name='ThesisChked' id='ThesisChked' class='changeColor' value= 'Progress Report Three'></div>";
			
								str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
						
								
								str += '<input type="button" class="btnB" value="Save"  onclick=formThesisSendToExamBranchsendForm('+"'addThesisSendToExamBranch'"+');>';	
								str += '<input type="button" class="btnB" value = "Return" onclick = showMenu('+"'formThesisSubmitMenu'"+');>';
			
						str +="</div>";
													
					str +="</fieldset>";
					
					
			
			}
			
			return str;
		}

function formThesisSendToExamBranchsendForm(frm){

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
		
		
		if(frm == 'addThesisSendToExamBranch'){
 
			var i = 2;
			doc = document.maintainformSendingThesisToExamBranch;
		
			dataStr += "&interface="+frm;
				
			//dataStr += "&tid="+"2";
			dataStr += "&studentNo="+dataRep["studentNo"];
			//dataStr += "&studentNo="+document.getElementById('studentName').value;
			
			dataStr += "&date="+doc.exsendYYYY.value+"/"+doc.exsendMM.value+"/"+doc.exsendDD.value;
			
			
			if(document.getElementById('PersonalFile').checked == true & document.getElementById('EvaluationReports').checked == true & document.getElementById('MarkSheets').checked == true & document.getElementById('ThesisChked').checked == true){
				dataStr +="&itemHandOver="+"2";
			}
			
						
			else if(document.getElementById('PersonalFile').checked == true & document.getElementById('EvaluationReports').checked == true & document.getElementById('MarkSheets').checked == true){
				dataStr +="&itemHandOver="+"2";
			}
			
			
			else if(document.getElementById('PersonalFile').checked == true & document.getElementById('EvaluationReports').checked == true){
				dataStr +="&itemHandOver="+"2";
			}
			
			else if(document.getElementById('PersonalFile').checked == true & document.getElementById('EvaluationReports').checked == true & document.getElementById('MarkSheets').checked == true){
				dataStr +="&itemHandOver="+"2";
			}
			
			else{
				dataStr +="&itemHandOver="+"N";
			}
			
			
			
						
			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}
		