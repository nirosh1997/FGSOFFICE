// ////Coded by S.Suraweera////
// ////14.05.2015-----

dataRep['receivedBy']="";
dataRep['thesisid']="";
dataRep['sentTo']= "";
dataRep['bosNo']= "";
dataRep['fgsNo']= "";
dataRep['senateNo']= "";
dataRep['examinerNameId']= "";
dataRep['examinerId']= "";
dataRep['bosReject']= "";
dataRep['remarks']="";

testTitleStr= new Array();
var testNum = 0;
var BHTList, programmeTypeCode,drugNameList,brandNameList,studentNameList,studentNameList,consultantNameList="";
var studentName =new Array("After breakfast","After Dinner","After lunch","After meals","At bedtime","Before Breakfast","Before Dinner","Before lunch","Before meals","Four times a day","In between Foods","On Empty stomach","Once a day","3 times a day","2 times a day","with milk","with water");
var BOSChecked = ListexaminerNameStr= "";

dataRep["selectedType"]="";		

		function setValuesExaminer(){
		
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
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			
			
	
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
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
			
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
			dataRep["lecturerName"]=lecturerNameArr[i];
			dataRep["title"]=titleArr[i];
			dataRep["tid"]=tidArr[i];
			dataRep["lecturerEmpNo"]=lecturerEmpNoArr[i];
		}
	}
} 

function setTransactions(){

	for(i=0; i<transactionCodeNoLength;i++){
	
		if(dataRep["transactionCode"]==transactionCodeArr[i]){
		
		dataRep["transactionCode"]=transactionCodeArr[i];
		dataRep["transactionSubCode"]=transactionSubCodeArr[i];
		dataRep["transacDescription"]=transacDescriptionArr[i];
		dataRep["infaceEleName1"]=infaceEleName1Arr[i];
		dataRep["infaceEleName2"]=infaceEleName2Arr[i];
		
		}
	
	}

}


function resetValues(){
lecturerEmpNoLength=0;
//showMenu('formUpdateUGCStudent');

}

		function formBoardReccomendation(dsp) {

		
		str = ""; 
		title = "Board Recommendation"; 
  
	if(dsp == "formBoardReccomendation") {    

		
			str  = "<div id='formAppointExaminers'>";
			
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
			
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
				
					str += '<form name="maintainBoardReccomendation"><br>';
						str +="<div>";
						 str +="<div style='float:left;'><fieldset  class='field'><legend class='fieldHead'></legend>";
							
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
					
			
			
				for(i=0; i<lecturerEmpNoLength;i++){

			
			if (lecturerNameArr.indexOf(lecturerNameArr[i]) == lecturerNameArr.lastIndexOf(lecturerNameArr[i]) || (lecturerNameArr.indexOf(lecturerNameArr[i]) != lecturerNameArr.lastIndexOf(lecturerNameArr[i]) && lecturerNameArr.indexOf(lecturerNameArr[i])==i)){
				if(lecturerNameArr[i] != ""){
				lecturerNameList += "<option value='"+lecturerNameArr[i]+"'>";
				}
			}
			
			if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) == lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) != lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i])==i)){
				if(lecturerEmpNoArr[i] != ""){
				lecturerEmpNoList += "<option value='"+lecturerNameArr[i]+"-"+lecturerEmpNoArr[i]+"'>";
				}
			}

	}
			
			str +="<div class='longIdentifier'>Student NIC</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='studentNIC' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesExaminer();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student Name</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentName' list='liststudentName' id='studentName' value= '"+dataRep["studentName"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesExaminer();'>";
			str += "<datalist id='liststudentName'>"+studentNameList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student No</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesExaminer();'>";
			str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
			str += "</div><br>"; 

			str += '<input type="button" style="margin-top:18px" class="btn" value="Search" onclick=sendForm('+"'data4StudentTransaction'"+');>';
		
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick=sendForm('');>";
			
			str += '<input type="button" style="margin-top:18px" class="btn" value = "Return" onclick = showMenu('+"'formThesisSubmitMenu'"+');>';
			
			str += '<input type = "button" style="margin-top:18px" class ="btn" value="View Transaction" onclick="resetValues();showMenu('+"'formTransactionsDetailsView'"+');">';

				
			 
							str +="</fieldset></div><br/>";
			
							
								str +="<div style='margin-top:20px;float:center;clear:both;'>";
			
								// e = studentNameArr[1];
								 //alert(document.getElementById("userName").innerHTML = studentNameArr[0]);

					str += "</div>";
					str += "</div>";		
					
			str +="<div>";
			
			
			
			
			
			str += "<table ><tr><td>";
				//str += "<h2 >Notification For Thesis Submission </h2>";
				
					str +="<br><br>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;width:auto;' id='studentNIC'>"+dataRep["studentNIC"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;' id='studentName'>"+dataRep["studentName"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>:&nbsp;</div>";
					str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
					str +="<div class=hideLabel>&nbsp;</div>";
					
					str +="<div class='longIdentifier' style='clear:none;'>Thesis Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
					str += "<textarea rows='auto'  name='title' id='title'  style='float:left;width:220px'  onchange='dataRep[this.name]=this.value'  "+fieldDisabled+">";
					str +=dataRep["title"];
					str +=" </textarea></div>";
			
			
							
								 
							
								// //hidelable starts
								str +="<div class='hideLabel'>";
								str +="<div class='longIdentifier' style='clear:none;'>Thesis ID</div>";
								str +="<div id='thesisid' class='viewArea' style='clear:none;'>"+dataRep['tid']+"</div>";
								dataRep['thesisid']=dataRep['tid'];
								str +="<div class=hideLabel>&nbsp;</div>";
								str +="</div>";
								
						
						
						transactionTitle="<option>Please scroll down to see the records</option>";
							for(i = 0; i<transactionCodeNoLength; i++) {
							
								
							
						if (transacDescriptionArr.indexOf(transacDescriptionArr[i])== transacDescriptionArr.lastIndexOf(transacDescriptionArr[i]) || (transacDescriptionArr.indexOf(transacDescriptionArr[i])!= transacDescriptionArr.lastIndexOf(transacDescriptionArr[i]) && transacDescriptionArr.indexOf(transacDescriptionArr[i])== i)){					
					
							transactionTitle += "<option>"+transacDescriptionArr[i]+"-"+transactionCodeArr[i]+"</option>";
								//alert(infaceEleName1Arr[i]);
								}
							
							}
						str += "<center><div class='longIdentifier'>Select The Transaction Type</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selectedType' onchange='dataRep[this.id]=this.selectedIndex;selectTransacType()'>";
						str += transactionTitle;
						str += "</select></center><br></div>";
						
						
						// str +="<div class='longIdentifier'>Select The Transaction Type</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
						// str += "<select id='selectType' name='selectType' value='selectType'  onchange='dataRep[this.name]=this.value;selectTransacType();' class='dateSelect;'>";
						// str += "<option value='0' selected>Please scroll down to see the records</option>";
						// str += "<option value='1'>Submission of thesis title</option>";
						// str += "<option value='2'>Appoint Examiners</option>";
						// str += "<option value='3'>Extension</option>";
						// str += "</select>";
						str += "</div><br>";
						
						str +="<div id ='Element1'>";
						str +="<br/><div id='thesisTopic' class='longIdentifier'>Enter the New Thesis Topic</div><div class='colon'>&nbsp;:&nbsp;</div>";
		
						str +="<textarea rows='auto'  name='newThesisTopic' id='newThesisTopic'  style='float:left;width:450px;height:100px'  onchange='dataRep[this.name]=this.value'"+fieldDisabled+">";
						str += dataRep["newThesisTopic"];
						str +="</textarea>";
						str +="</div>";
						
						
						str +="<div id ='Element2'>";
						str +="<div id='examinerLbl' class='longIdentifier'>Select the Examiner</div><div class='colon'>&nbsp;:&nbsp;</div>";
						str +="<div style='float:left;width:225px'><input type='text' name='examinerNameId' list='listexaminerId' id='examinerNameId' style='width:205px' ";
						str += "value= '"+dataRep['examinerNameId'].trim()+"' onchange='dataRep[this.name]=this.value;'>";
						str += "<datalist id='listexaminerId'>"+lecturerEmpNoList+"</datalist></div >";
						str +="</div>";		
						
					//Examiner Appoint
						str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
						str +="<fieldset  class='field'><legend class='fieldHead'>Board Recommendation</legend><div style='clear:both'><div class='rdo'>";

					
						
						str +="<table style='width:870px;float:left'><tr><th style='width:200px'>BOS</th>";			
						str +="<th style='width:170px'>FGS</th>";
						str +="<th style='width:200px'>Senate</th>";
						//str +="<th style='width:280px'>Senate</th>";
						str +="<th style='float:left;width:300px'>Remark</th></tr></table>";		
					
			
						str +="<div  id='inputs' style='margin:clear:both'>";  //test333					
							
							str +="<div id='newRow"+testNum+"' style='margin:0px 10px;clear:both'>";
							
							
							
								// str +="<div style='float:left;width:225px'><input type='text' name='examinerNameId' list='listexaminerId' id='examinerNameId' style='width:205px' ";
								// str += "value= '"+dataRep['examinerNameId'].trim()+"' onchange='dataRep[this.name]=this.value;'>";
								// str += "<datalist id='listexaminerId'>"+lecturerEmpNoList+"</datalist></div >";
								
								
								
								//BOS
								
								
								//str+="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'>";
								
								str+="<div style='float:left;'>";
								str+="<div style='clear:both;'><div>BOS No</div><div class='colon'></div>";
								str +="<div style='float:left;width:205px'><input type='text' name='bosNo' id='bosNo"+testNum+"' style='width:160px'";
								str += "value= '"+dataRep['bosNo'].trim()+"' onchange='dataRep[this.name]=this.value;'></div></div>";
								 
								//str+="<div class='viewArea' contentEditable='true' style='border:1px solid #F98342;width:200px;min-height:20px;'></div></div>";
								
								 str+="<div>Received Date From HOD</div>";
								 
								 dataRep['receivedhYYYY'] = "";
								 dataRep['receivedhMM'] = "";
								 dataRep['receivedhDD'] = "";
			
								 str += "<select name='receivedhYYYY' value='receivedhYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['receivedhYYYY']);
								 str += "</select>";
								 str += "<select name='receivedhMM' value='receivedhMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['receivedhMM']);
								 str += "</select>";
								 str += "<select name='receivedhDD' value='receivedhDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['receivedhDD']);
								 str += "</select><br>";
																
								 str+="<br/><class='colon'><div style='margin-top:0px;'>BOS Date</div>";
								 
								 dataRep['bosYYYY'] = "";
								 dataRep['bosMM'] = "";
								 dataRep['bosDD'] = "";
			
								 
								 str += "<select name='bosYYYY' value='bosYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['bosYYYY']);
								 str += "</select>";
								 str += "<select name='bosMM' value='bosMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['bosMM']);
								 str += "</select>";
								 str += "<select name='bosDD' value='bosDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['bosDD']);
								 str += "</select><br>";
								
								
								str +="<br/><div onclick='dataRep[this.name]=this.value;enableElements();'><label>Reject</label>";
								str +="<input  type='checkbox' name='bosReject'  id='bosRejectChk' class='changeColor'  value='Bos Reject'></div>";
								str +=BOSChecked;
								
							
								
								
								 //str +="<div class='hideLabel'>";
								 str +="<div id ='Element8'>";
								 str+="<div id='rnDateBOSLbl' >Renominate Date</div>";
								 
								 dataRep['renominateYYYY'] = "";
								 dataRep['renominateMM'] = "";
								 dataRep['renominateDD'] = "";
			
								 str += "<select name='renominateYYYY' id='rndatey'  disabled='disabled' value='renominateYYYY'  renominateYYYY='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
								 str += "</select>";
								 str += "<select name='renominateMM' id='rndatem' disabled='disabled' value='renominateMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['renominateMM']);
								 str += "</select>";
								 str += "<select name='renominateDD' id='rndated' disabled='disabled' value='renominateDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['renominateDD']);
								 str += "</select><br>";
								 str += "</div>";
								
								//str += '<input type="button" class="btn" value="Save"  onclick=formAllTransactionssendForm('+"'addTransactionDetails'"+');formExaminerRemarkssendForm('+"'addExaminerRemarks'"+');addRecommondationRow();>';	
								str += '<input type="button" class="btn" value="Save"  onclick=formSend()>';	
								
								str += "</div>";
								//str+="</fieldset></div>";
								
								
								//FGS
								//str+="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'>";
								
								str+="<div style='float:left;'>";
								str+="<div style='clear:both;'><div>FGS No</div><div class='colon'></div>";
								str +="<div style='float:left;width:205px'><input type='text' name='fgsNo' id='fgsNo"+testNum+"' style='width:160px'";
								str += "value= '"+dataRep['fgsNo'].trim()+"' onchange='dataRep[this.name]=this.value;'></div></div>";
								 
								str+="<div>Received Date From BOS</div>";
								
								 dataRep['receivedbYYYY'] = "";
								 dataRep['receivedbMM'] = "";
								 dataRep['receivedbDD'] = "";
			
								 
								 str += "<select name='receivedbYYYY' value='receivedbYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['receivedbYYYY']);
								 str += "</select>";
								 str += "<select name='receivedbMM' value='receivedbMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['receivedbMM']);
								 str += "</select>";
								 str += "<select name='receivedbDD' value='receivedbDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['receivedbDD']);
								 str += "</select><br>";
																
								 str+="<br/><class='colon'><div style='margin-top:0px;'>FGS Date</div>";
								 
								 dataRep['fgsYYYY'] = "";
								 dataRep['fgsMM'] = "";
								 dataRep['fgsDD'] = "";
			
								 
								 str += "<select name='fgsYYYY' value='fgsYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['fgsYYYY']);
								 str += "</select>";
								 str += "<select name='fgsMM' value='fgsMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['fgsMM']);
								 str += "</select>";
								 str += "<select name='fgsDD' value='fgsDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['fgsDD']);
								 str += "</select><br>";
								
								str +=TwoChecked;
								str +="<br/><div onclick='dataRep[this.name]=this.value;enableElementsfgs();'/><label>Reject</label>";
								str +="<input  type='checkbox' name='fgsReject' id='fgsRejectChk' class='changeColor' value= 'Progress Report Three'></div>";
			
								 str +="<div id ='Element10'>";
								 str+="<div  id='rnDateFGSLbl'>Renominate Date</div>";
								 
								 dataRep['renominatefYYYY'] = "";
								 dataRep['renominatefMM'] = "";
								 dataRep['renominatefDD'] = "";
			
								 str += "<select name='renominatefYYYY' id='rndateyfgs'  disabled='disabled' value='renominatefYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['renominatefYYYY']);
								 str += "</select>";
								 str += "<select name='renominatefMM' id='rndatemfgs'  disabled='disabled' value='renominatefMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['renominatefMM']);
								 str += "</select>";
								 str += "<select name='renominatefDD' id='rndatedfgs'  disabled='disabled' value='renominatefDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['renominatefDD']);
								 str += "</select><br>";
								 str +="</div>";  
						
								str += '<input type="button" class="btn" value="Update FGS"  onclick=formTransactionDetailsFGSsendForm('+"'updateTransactionDetailsFGS'"+');>';	
								//str += '<input type="button" class="btnB" value="Update"  onclick=formUpdateExaminerReccomandFGSsendForm('+"'updateExaminerReccomandFGS'"+')>';	
								str += "</div>";
								//str+="</fieldset></div>";
								
								///////
								
								
								//Senate
								//str+="<fieldset class='field'><legend class='fieldHead'></legend><div style='clear:both'></div><div class='rdo'>";
																
								str+="<div style='float:left;'>";
								str+="<div style='clear:both;'><div>Senate Board No</div><div class='colon'></div>";
								str +="<div style='float:left;width:205px'><input type='text' name='senateNo' id='senateNo"+testNum+"' style='width:160px'";
								str += "value= '"+dataRep['senateNo'].trim()+"' onchange='dataRep[this.name]=this.value;'></div></div>";
								 
								 str+="<div>Received Date From FGS</div>";
								 
								 dataRep['receivedfYYYY'] = "";
								 dataRep['receivedfMM'] = "";
								 dataRep['receivedfDD'] = "";
			
								 
								 str += "<select name='receivedfYYYY' value='receivedfYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['receivedfYYYY']);
								 str += "</select>";
								 str += "<select name='receivedfMM' value='receivedfMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['receivedfMM']);
								 str += "</select>";
								 str += "<select name='receivedfDD' value='receivedfDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['receivedfDD']);
								 str += "</select><br>";
																
								 str+="<br/><class='colon'><div style='margin-top:0px;'>Senate Date</div>";
								 
								 dataRep['senateYYYY'] = "";
								 dataRep['senateMM'] = "";
								 dataRep['senateDD'] = "";
			
								 
								 str += "<select name='senateYYYY' value='senateYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['senateYYYY']);
								 str += "</select>";
								 str += "<select name='senateMM' value='senateMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['senateMM']);
								 str += "</select>";
								 str += "<select name='senateDD' value='senateDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['senateDD']);
								 str += "</select><br>";
								
								
								str +=TwoChecked;
								str +="<br/><div onclick='dataRep[this.name]=this.value;enableElementssenate();'/><label>Reject</label>";
								str +="<input  type='checkbox' name='senateReject' id='senateRejectChk' class='changeColor' value= 'Progress Report Three'></div>";
			
								 str +="<div id ='Element12'>";
								 str+="<div id='rnDateSenateLbl'>Renominate Date</div>";
								 
								 dataRep['renominatesYYYY'] = "";
								 dataRep['renominatesMM'] = "";
								 dataRep['renominatesDD'] = "";
			
								 str += "<select name='renominatesYYYY' id='rndateys'  disabled='disabled' value='renominatesYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['renominatesYYYY']);
								 str += "</select>";
								 str += "<select name='renominatesMM' id='rndatems'  disabled='disabled' value='renominatesMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['renominatesMM']);
								 str += "</select>";
								 str += "<select name='renominatesDD' id='rndateds'  disabled='disabled' value='renominatesDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['renominatesDD']);
								 str += "</select><br>";
								 str +="</div>";  
								 
								str += '<br/><input type="button" class="btn" value="Update Senate"  onclick=formTransactionDetailsSenatesendForm('+"'updateTransactionDetailsSenate'"+');>';	
								//str += '<input type="button" class="btnB" value="Update"  onclick=formUpdateExaminerReccomandSenatesendForm('+"'updateExaminerReccomandSenate'"+')></div>';	
								str += "</div>";
								//str+="</fieldset>";
								
								/////////
								
								
								
								//remarks
								//str+="<br>"
								
								//str+="<fieldset  class='field'><div legend class='rdo'></legend><div style='float:right;clear:both'><div class='rdo'>";
								
								str+="<div>Remark</div>";	
								str +="<div><textarea rows='auto'  name='remarks' id='remarks'  style='float:left;width:200px;height:120px'  onchange='dataRep[this.name]=this.value'"+fieldDisabled+">";
								str += dataRep["remarks"];
								str +=" </textarea></div><br>";
								
								str +="<div id ='Element13'>";
								str+="<br/><div style='float:left;'></div>";
								str +=TwoChecked;
								str +="<br><br/><br><br/><div onclick='dataRep[this.name]=this.value;enableElementsremarks();'><div id='rejectedLbl'><label>Rejected By Examiner</label>";
								str +="<input  type='checkbox' name='examinerReject' id='examinerRejectChk' class='changeColor' value= 'Progress Report Three'></div></div>";
			
								
								 str+="<div id='rejectedDateLbl'>Rejected Date</div>";
								 
								 dataRep['rejectedYYYY'] = "";
								 dataRep['rejectedMM'] = "";
								 dataRep['rejectedDD'] = "";
		
								 
								 str += "<select input type='hidden' name='rejectedYYYY' id='rndateyr'  disabled='disabled' value='rejectedYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['rejectedYYYY']);
								 str += "</select>";
								 str += "<select name='rejectedMM' id='rndatemr'  disabled='disabled' value='rejectedMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['rejectedMM']);
								 str += "</select>";
								 str += "<select name='rejectedDD' id='rndatedr'  disabled='disabled' value='rejectedDD'   onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['rejectedDD']);
								 str += "</select><br><br/>";
								 str += "</div>";
								 
								 
								//str += '<input type="button" class="btnB" value="Save"  onclick=formExaminerRemarkssendForm('+"'addExaminerRemarks'"+')>';	
								//str += '<input type="button" class="btnB" value="Update"  onclick=UpdateExaminerRemarkssendForm('+"'updateExaminerRemarks'"+')>';	
								str +="</div></div>";			
							
								//str+="</fieldset>";
								
								
								//-------------------------
								// str+="<fieldset class='field'><div style='clear:both'><div class='rdo'>";
								
								// str+="</fieldset></div>";
								
		str += '</form>';
		
		str += '</td></tr></table>';
		str += '</fieldset>';
		
		}
		
	//____________________
	//prescription history
	// if(dsp == "ReceivingNotificationForThesisSubmission") {
	

		// str +="</td></tr></table>";	
		
	// }		
		return str;
	}
	
	var form1 = "addThesisTitle";
	var form2 = "addExaminerRemarks";
	var alltransac = "addTransactionDetails";
	
	function formSend(){
	
	
	if(sendformuseArr[dataRep["selectedType"]-1] == "form1"){
		
	  formaddThesisDetailssendForm(form1);
	  formAllTransactionssendForm(alltransac);
	
	}
	else if(sendformuseArr[dataRep["selectedType"]-1] == "form2"){
		
	  formExaminersendForm(form2);
	  formAllTransactionssendForm(alltransac);	
	
	}
	
	}
	
	//function for visibility control
	
	function selectTransacType(){
	
	//alert(dataRep["selectedType"]-1);
	
	if(infaceEleName1Arr[dataRep["selectedType"]-1] == "1"){
		
		document.getElementById("Element1").style.visibility = "visible"; 
	
	}
	else {
	
	   document.getElementById("Element1").style.visibility = "hidden"; 
	}
	
	
	
	
	
	 if (infaceEleName2Arr[dataRep["selectedType"]-1] == "1"){
		
		document.getElementById("Element2").style.visibility = "visible"; 
	
	}
	
	
	else{
	
	   document.getElementById("Element2").style.visibility = "hidden"; 
	}
	
	
	
	
	
	if (infaceEleName8Arr[dataRep["selectedType"]-1] == "1"){
	
	document.getElementById("Element8").style.visibility = "visible"; 
	
	}
	else{
	
	   document.getElementById("Element8").style.visibility = "hidden"; 
	}
	
	
	
	
	
			if (infaceEleName10Arr[dataRep["selectedType"]-1] == "1"){
		
		document.getElementById("Element10").style.visibility = "visible"; 
	
	}
	else{
	
	   document.getElementById("Element10").style.visibility = "hidden"; 
	}
	
	
	
	
			if(infaceEleName12Arr[dataRep["selectedType"]-1] == "1"){
		
		document.getElementById("Element12").style.visibility = "visible"; 
	
	}
	else{
	
	   document.getElementById("Element12").style.visibility = "hidden"; 
	}

	
	
	
	if(infaceEleName13Arr[dataRep["selectedType"]-1] == "1"){
		
		document.getElementById("Element13").style.visibility = "visible"; 
	
	}
	else{
	
	   document.getElementById("Element13").style.visibility = "hidden"; 
	}	
}
	
	function viewElements(){
	
	
	}
	
	function disableElements()
{
	document.getElementById("rndatey").disabled=true;
	document.getElementById("rndatem").disabled=true;
	document.getElementById("rndated").disabled=true;
	
	}
	
	function enableElements()
	{
	document.getElementById("rndatey").disabled=false;
	document.getElementById("rndatem").disabled=false;
	document.getElementById("rndated").disabled=false;
	
	}
	
	function enableElementsfgs()
	{
	document.getElementById("rndateyfgs").disabled=false;
	document.getElementById("rndatemfgs").disabled=false;
	document.getElementById("rndatedfgs").disabled=false;
	
	}
	
	function enableElementssenate()
	{
	document.getElementById("rndateys").disabled=false;
	document.getElementById("rndatems").disabled=false;
	document.getElementById("rndateds").disabled=false;
	
	}
	function enableElementsremarks()
	{
	document.getElementById("rndateyr").disabled=false;
	document.getElementById("rndatemr").disabled=false;
	document.getElementById("rndatedr").disabled=false;
	
	}
	
	function formaddThesisDetailssendForm(frm){

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
		
		
		if(frm == 'addThesisTitle'){
 
			doc = document.maintainBoardReccomendation;
		
			dataStr += "&interface="+frm;
				
										
			dataStr += "&tid="+dataRep["studentNo"]+"/"+"01";
			
			dataStr += "&studentNo="+dataRep["studentNo"];
			
			//dataStr += "&title="+document.getElementById('selectedTitle').value;
			
			alert(dataStr);
	}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
}	
//_____________________________________________________________________________		
	
	//BOS--------------------------------------------------
	
	function formAllTransactionssendForm(frm){

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
		
		
		if(frm == 'addTransactionDetails'){
 
			doc = document.maintainBoardReccomendation;
		
			dataStr += "&interface="+frm;
				
					
				tempid = dataRep["examinerNameId"];
				//alert(tempid);
				exid = tempid.split("-",2);	
				
						
			dataStr += "&eid="+(exid[exid.length-1]);
			
			dataStr += "&studentNo="+dataRep["studentNo"];
			
			dataStr += "&transactionCode="
			
			dataStr += "&transactionSubCode="
			
			dataStr += "&sequenceNo="
			
			dataStr += "&BOSNo="+dataRep["bosNo"];
			
			dataStr += "&DateReceivefromHead="+doc.receivedhYYYY.value+"/"+doc.receivedhMM.value+"/"+doc.receivedhDD.value;
				
			dataStr += "&BOSDate="+doc.bosYYYY.value+"/"+doc.bosMM.value+"/"+doc.bosDD.value;
			
			
			if(document.getElementById('bosRejectChk').checked == true){
				dataStr +="&BOSDecision="+"2";
			}
			else{
				dataStr +="&BOSDecision="+"1";
			}
			
			
			dataStr += "&DateRequestRenominate="+doc.renominateYYYY.value+"/"+doc.renominateMM.value+"/"+doc.renominateDD.value;
			
			dataStr += "&BOSTransactionDateTime="

			dataStr += "&BOSuserId="
			
			
			//fgs
			
			dataStr += "&FGSBoardNo="+dataRep["fgsNo"];
			
			dataStr += "&DateReceivefromBOS="+doc.receivedbYYYY.value+"/"+doc.receivedbMM.value+"/"+doc.receivedbDD.value;
				
			dataStr += "&FGSBoardDate="+doc.fgsYYYY.value+"/"+doc.fgsMM.value+"/"+doc.fgsDD.value;
			
			if(document.getElementById('fgsRejectChk').checked == true){
				dataStr +="&FGSDecision="+"2";
			}
			else{
				dataStr +="&FGSDecision="+"1";
			}
			
			dataStr += "&DateRequestRenominateFgs="+doc.renominatefYYYY.value+"/"+doc.renominatefMM.value+"/"+doc.renominatefDD.value;
		
			dataStr += "&FGSTransactionDateTime="

			dataStr += "&FGSuserId="
			
			//Senate
			
			dataStr += "&SenateNo="+dataRep["senateNo"];
			
			dataStr += "&DateReceivefromFGSBoad="+doc.receivedfYYYY.value+"/"+doc.receivedfMM.value+"/"+doc.receivedfDD.value;
				
			dataStr += "&SenateDate="+doc.senateYYYY.value+"/"+doc.senateMM.value+"/"+doc.senateDD.value;
			
			if(document.getElementById('senateRejectChk').checked == true){
				dataStr +="&SenateDecision="+"2";
			}
			else{
				dataStr +="&SenateDecision="+"1";
			}
			
			dataStr += "&DateRequestRenominateSenate="+doc.renominatesYYYY.value+"/"+doc.renominatesMM.value+"/"+doc.renominatesDD.value;
	
			
			dataStr += "&SenateTransactionDateTime="

			dataStr += "&SenateuserId="
			
			dataStr += "&ItemDescription="
			
			dataStr += "&note="
			
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}
		
//_____________________________________________________________________________	
	
		//FGS--------------------------------------------------
	
		function formTransactionDetailsFGSsendForm(frm){

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
		
		
		if(frm == 'updateTransactionDetailsFGS'){
 
			doc = document.maintainBoardReccomendation;
		
			dataStr += "&interface="+frm;
				
					
				tempid = dataRep["examinerNameId"];
				//alert(tempid);
				exid = tempid.split("-",2);	
				
			dataStr += "&studentNo="+dataRep["studentNo"];
			
			dataStr += "&transactionCode=";
			
			dataStr += "&sequenceNo=";
						
			//dataStr += "&eid="+(exid[exid.length-1]);
			
			dataStr += "&FGSNo="+dataRep["fgsNo"];
			
			//dataStr += "&DateReceivefromBOS="+doc.receivedbYYYY.value+"/"+doc.receivedbMM.value+"/"+doc.receivedbDD.value;
				
			dataStr += "&FGSDate="+doc.fgsYYYY.value+"/"+doc.fgsMM.value+"/"+doc.fgsDD.value;
			
			if(document.getElementById('fgsRejectChk').checked == true){
				dataStr +="&FGSDecision="+"2";
			}
			else{
				dataStr +="&FGSDecision="+"1";
			}
			
			dataStr += "&DateRequestRenominateFgs="+doc.renominatefYYYY.value+"/"+doc.renominatefMM.value+"/"+doc.renominatefDD.value;
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}
//_____________________________________________________________________________		
		
		
		
		//Senate--------------------------------------------------
	
		function formTransactionDetailsSenatesendForm(frm){

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
		
		
		if(frm == 'updateTransactionDetailsSenate'){
 
			doc = document.maintainBoardReccomendation;
		
			dataStr += "&interface="+frm;
				
					
				tempid = dataRep["examinerNameId"];
				//alert(tempid);
				exid = tempid.split("-",2);	
				
			dataStr += "&studentNo="+dataRep["studentNo"];
			
			dataStr += "&transactionCode=";
			
			dataStr += "&sequenceNo=";
			
			//dataStr += "&eid="+(exid[exid.length-1]);
			
			dataStr += "&SenateNo="+dataRep["senateNo"];
			
			//dataStr += "&DateReceivefromFGSBoad="+doc.receivedfYYYY.value+"/"+doc.receivedfMM.value+"/"+doc.receivedfDD.value;
				
			dataStr += "&SenateDate="+doc.senateYYYY.value+"/"+doc.senateMM.value+"/"+doc.senateDD.value;
			
			if(document.getElementById('senateRejectChk').checked == true){
				dataStr +="&SenateDecision="+"2";
			}
			else{
				dataStr +="&SenateDecision="+"1";
			}
			
			dataStr += "&DateRequestRenominateSenate="+doc.renominatesYYYY.value+"/"+doc.renominatesMM.value+"/"+doc.renominatesDD.value;
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}
		
//_____________________________________________________________________________	



//Remarks--------------------------------------------------
		
		function formExaminersendForm(frm){

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
		
		
		if(frm == 'addExaminerRemarks'){
 
			doc = document.maintainBoardReccomendation;
		
			dataStr += "&interface="+frm;
				
					
				tempid = dataRep["examinerNameId"];
				//alert(tempid);
				exid = tempid.split("-",2);	
				
						
			dataStr += "&eid="+(exid[exid.length-1]);
			
			dataStr += "&tid="+dataRep["thesisid"];
			
			if(document.getElementById('examinerRejectChk').checked == true){
				dataStr +="&RejectedByExaminer="+"2";
			}
			else{
				dataStr +="&RejectedByExaminer="+"1";
			}
			
									
			dataStr += "&DateRejected="+doc.rejectedYYYY.value+"/"+doc.rejectedMM.value+"/"+doc.rejectedDD.value;
			
			dataStr += "&Remarks="+dataRep["remarks"];
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}
	
	
	//Remarks--------------------------------------------------
		
		function UpdateExaminerRemarkssendForm(frm){

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
		
		
		if(frm == 'updateExaminerRemarks'){
 
			doc = document.maintainBoardReccomendation;
		
			dataStr += "&interface="+frm;
				
					
				tempid = dataRep["examinerNameId"];
				//alert(tempid);
				exid = tempid.split("-",2);	
				
						
			dataStr += "&eid="+(exid[exid.length-1]);
			
			dataStr += "&tid="+dataRep["thesisid"];
			
			if(document.getElementById('examinerRejectChk').checked == true){
				dataStr +="&RejectedByExaminer="+"2";
			}
			else{
				dataStr +="&RejectedByExaminer="+"1";
			}
			
									
			dataStr += "&DateRejected="+doc.rejectedYYYY.value+"/"+doc.rejectedMM.value+"/"+doc.rejectedDD.value;
			
			dataStr += "&Remarks="+dataRep["remarks"];
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}
//____________________________________________________________________	

	function addRecommondationRow(){

var a ="degreeTitle"+testNum;
//var c="dosage"+testNum;
var d="studentName "+testNum;
var e ="bosNo"+testNum;

//alert (dataRep['bosNo']);

if((dataRep['bosNo']).value !=""){
//if(document.getElementById(e).value !="" ){


dataRep['itemTitle'][testNum]=dataRep['degreeTitle'];

dataRep['bosNo'][testNum]=dataRep['bosNo'];
dataRep['studentName'][testNum]=dataRep['studentName'];
dataRep['studentName'][testNum]=dataRep['studentName'];
dataRep['studentName'][testNum]=dataRep['studentName'];






e="studentName"+ ++testNum;

 //alert (e);
 //alert(b);
 
 
 
 for(i=0; i< programmeTypeCode; i++){
				if (degreeTitleArr.indexOf(degreeTitleArr[i]) == degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i]) != degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])==i)){
					
					degreeTitleList+= "<option value='"+degreeTitleArr[i]+"'>";
				} 		
			} 
 
        //.............................................................................
			
		//............................................................................
 
		var newRowstr ="<div  id='inputs' style='margin:0px 10px;clear:both'>";  //test333
		newRowstr +="<div>_______________________________________________________________________________________________________________________________________________________________</div>";
				  
					//str +="<div id='test1'></div>";
					
				newRowstr +="<div id='newRow"+testNum+"' style='margin:clear:both'>";
					
					
								newRowstr +="<div style='float:left;width:225px'><input type='text' name='examinerNameId' list='listexaminerId' id='examinerNameId' style='width:205px' ";
								newRowstr += "value= '"+dataRep['examinerNameId'].trim()+"' onchange='dataRep[this.name]=this.value;'>";
								newRowstr += "<datalist id='listexaminerId'>"+lecturerEmpNoList+"</datalist></div >";
								
								
								
								//BOS
								
								
								//str+="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'>";
								
								newRowstr+="<div style='float:left;'>";
								newRowstr+="<div style='clear:both;'><div>BOS No</div><div class='colon'></div>";
								newRowstr +="<div style='float:left;width:205px'><input type='text' name='bosNo' id='bosNo"+testNum+"' style='width:160px'";
								newRowstr += "value= '"+dataRep['bosNo'].trim()+"' onchange='dataRep[this.name]=this.value;'></div></div>";
								 
								//str+="<div class='viewArea' contentEditable='true' style='border:1px solid #F98342;width:200px;min-height:20px;'></div></div>";
								
								 newRowstr+="<div>Received Date From HOD</div>";
								 
								 dataRep['receivedhYYYY'] = "";
								 dataRep['receivedhMM'] = "";
								 dataRep['receivedhDD'] = "";
			
								 newRowstr += "<select name='receivedhYYYY' value='receivedhYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['receivedhYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='receivedhMM' value='receivedhMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['receivedhMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='receivedhDD' value='receivedhDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['receivedhDD']);
								 newRowstr += "</select><br>";
																
								 newRowstr+="<br/><class='colon'><div style='margin-top:0px;'>BOS Date</div>";
								 
								 dataRep['bosYYYY'] = "";
								 dataRep['bosMM'] = "";
								 dataRep['bosDD'] = "";
			
								 
								 newRowstr += "<select name='bosYYYY' value='bosYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['bosYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='bosMM' value='bosMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['bosMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='bosDD' value='bosDD'  onchange='dataRep[this.name]=this.value;addRecommondRow();' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['bosDD']);
								 newRowstr += "</select><br>";
								
								
								newRowstr +="<br/><div onclick='dataRep[this.name]=this.value;enableElements();'><label>Reject</label>";
								newRowstr +="<input  type='checkbox' name='bosReject'  id='bosRejectChk' class='changeColor'  value='Bos Reject'></div>";
								newRowstr +=BOSChecked;
								
							
								
								
								 //str +="<div class='hideLabel'>";
								 newRowstr+="<div>Renominate Date</div>";
								 
								 dataRep['renominateYYYY'] = "";
								 dataRep['renominateMM'] = "";
								 dataRep['renominateDD'] = "";
			
								 newRowstr += "<select name='renominateYYYY' id='rndatey'  disabled='disabled' value='renominateYYYY'  renominateYYYY='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='renominateMM' id='rndatem' disabled='disabled' value='renominateMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['renominateMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='renominateDD' id='rndated' disabled='disabled' value='renominateDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['renominateDD']);
								 newRowstr += "</select><br>";
								 
								
								newRowstr += '<input type="button" class="btnB" value="Save"  onclick=formExaminerReccomandBOSsendForm('+"'addExaminerReccomandBOS'"+');addRecommondationRow();>';	
								newRowstr += '<input type="button" class="btnB" value="Update"  onclick=formBOSUpdatesendForm('+"'updateExaminerReccomandBOS'"+')>';	
								newRowstr += "</div>";
								//str+="</fieldset></div>";
								
								
								//FGS
								//str+="<fieldset  class='field'><legend class='fieldHead'></legend><div style='clear:both'><div class='rdo'>";
								
								newRowstr +="<div style='float:left;'>";
								newRowstr +="<div style='clear:both;'><div>FGS No</div><div class='colon'></div>";
								newRowstr +="<div style='float:left;width:205px'><input type='text' name='fgsNo' id='fgsNo"+testNum+"' style='width:160px'";
								newRowstr += "value= '"+dataRep['fgsNo'].trim()+"' onchange='dataRep[this.name]=this.value;'></div></div>";
								 
								newRowstr+="<div>Received Date From BOS</div>";
								
								 dataRep['receivedbYYYY'] = "";
								 dataRep['receivedbMM'] = "";
								 dataRep['receivedbDD'] = "";
			
								 
								 newRowstr += "<select name='receivedbYYYY' value='receivedbYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['receivedbYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='receivedbMM' value='receivedbMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['receivedbMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='receivedbDD' value='receivedbDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['receivedbDD']);
								 newRowstr += "</select><br>";
																
								 newRowstr+="<br/><class='colon'><div style='margin-top:0px;'>FGS Date</div>";
								 
								 dataRep['fgsYYYY'] = "";
								 dataRep['fgsMM'] = "";
								 dataRep['fgsDD'] = "";
			
								 
								 newRowstr += "<select name='fgsYYYY' value='fgsYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['fgsYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='fgsMM' value='fgsMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['fgsMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='fgsDD' value='fgsDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['fgsDD']);
								 newRowstr += "</select><br>";
								
								newRowstr +=TwoChecked;
								newRowstr +="<br/><div onclick='dataRep[this.name]=this.value;'/><label>Reject</label>";
								newRowstr +="<input  type='checkbox' name='fgsReject' id='fgsRejectChk' class='changeColor' value= 'Progress Report Three'></div>";
			
			
								 newRowstr+="<div>Renominate Date</div>";
								 
								 dataRep['renominatefYYYY'] = "";
								 dataRep['renominatefMM'] = "";
								 dataRep['renominatefDD'] = "";
			
								 newRowstr += "<select name='renominatefYYYY' id='rndateyfgs'  disabled='disabled' value='renominatefYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['renominatefYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='renominatefMM' id='rndatemfgs'  disabled='disabled' value='renominatefMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['renominatefMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='renominatefDD' id='rndatedfgs'  disabled='disabled' value='renominatefDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['renominatefDD']);
								 newRowstr += "</select><br>";
				
						
								newRowstr += '<input type="button" class="btnB" value="Save"  onclick=formExaminerReccomandFGSsendForm('+"'addExaminerReccomandFGS'"+');>';	
								newRowstr += '<input type="button" class="btnB" value="Update"  onclick=formUpdateExaminerReccomandFGSsendForm('+"'updateExaminerReccomandFGS'"+')>';	
								newRowstr += "</div>";
								//str+="</fieldset></div>";
								
								///////
								
								
								//Senate
								//str+="<fieldset class='field'><legend class='fieldHead'></legend><div style='clear:both'></div><div class='rdo'>";
																
								newRowstr+="<div style='float:left;'>";
								newRowstr+="<div style='clear:both;'><div>Senate Board No</div><div class='colon'></div>";
								newRowstr +="<div style='float:left;width:205px'><input type='text' name='senateNo' id='senateNo"+testNum+"' style='width:160px'";
								newRowstr += "value= '"+dataRep['senateNo'].trim()+"' onchange='dataRep[this.name]=this.value;'></div></div>";
								 
								 newRowstr+="<div>Received Date From FGS</div>";
								 
								 dataRep['receivedfYYYY'] = "";
								 dataRep['receivedfMM'] = "";
								 dataRep['receivedfDD'] = "";
			
								 
								 newRowstr += "<select name='receivedfYYYY' value='receivedfYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['receivedfYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='receivedfMM' value='receivedfMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['receivedfMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='receivedfDD' value='receivedfDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['receivedfDD']);
								 newRowstr += "</select><br>";
																
								 newRowstr+="<br/><class='colon'><div style='margin-top:0px;'>Senate Date</div>";
								 
								 dataRep['senateYYYY'] = "";
								 dataRep['senateMM'] = "";
								 dataRep['senateDD'] = "";
			
								 
								 newRowstr += "<select name='senateYYYY' value='senateYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['senateYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='senateMM' value='senateMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['senateMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='senateDD' value='senateDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['senateDD']);
								 newRowstr += "</select><br>";
								
								
								newRowstr +=TwoChecked;
								newRowstr +="<br/><div onclick='dataRep[this.name]=this.value;'/><label>Reject</label>";
								newRowstr +="<input  type='checkbox' name='senateReject' id='senateRejectChk' class='changeColor' value= 'Progress Report Three'></div>";
			
								 newRowstr+="<div>Renominate Date</div>";
								 
								 dataRep['renominatesYYYY'] = "";
								 dataRep['renominatesMM'] = "";
								 dataRep['renominatesDD'] = "";
			
								 newRowstr += "<select name='renominatesYYYY' id='rndateys'  disabled='disabled' value='renominatesYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['renominatesYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='renominatesMM' id='rndatems'  disabled='disabled' value='renominatesMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['renominatesMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='renominatesDD' id='rndateds'  disabled='disabled' value='renominatesDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['renominatesDD']);
								 newRowstr += "</select><br>";
									
								newRowstr += '<br/><input type="button" class="btnB" value="Save"  onclick=formExaminerReccomandSenatesendForm('+"'addExaminerReccomandSenate'"+');>';	
								newRowstr += '<input type="button" class="btnB" value="Update"  onclick=formUpdateExaminerReccomandSenatesendForm('+"'updateExaminerReccomandSenate'"+')></div>';	
								newRowstr += "</div>";
								//str+="</fieldset>";
								
								/////////
								
								
								
								//remarks
								//str+="<br>"
								
								//str+="<fieldset  class='field'><div legend class='rdo'></legend><div style='float:right;clear:both'><div class='rdo'>";
								
								newRowstr+="<div>Remarks</div>";	
								newRowstr +="<textarea rows='auto'  name='remarks' id='remarks'  style='float:left;width:200px;height:188px'  onchange='dataRep[this.name]=this.value'"+fieldDisabled+">";
								newRowstr += dataRep["remarks"];
								newRowstr +=" </textarea></div>";
								newRowstr+="<div style='float:left;'>";
								newRowstr +=TwoChecked;
								newRowstr +="<div onclick='dataRep[this.name]=this.value;'><label>Rejected By Examiner</label>";
								newRowstr +="<input  type='checkbox' name='examinerReject' id='examinerRejectChk' class='changeColor' value= 'Progress Report Three'></div>";
			
								 newRowstr+="<div>Rejected Date</div>";
								 
								 dataRep['rejectedYYYY'] = "";
								 dataRep['rejectedMM'] = "";
								 dataRep['rejectedDD'] = "";
		
								 
								 newRowstr += "<select input type='hidden' name='rejectedYYYY' id='rndateyr'  disabled='disabled' value='rejectedYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['rejectedYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='rejectedMM' id='rndatemr'  disabled='disabled' value='rejectedMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['rejectedMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='rejectedDD' id='rndatedr'  disabled='disabled' value='rejectedDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['rejectedDD']);
								 newRowstr += "</select><br><br/>";
								
								newRowstr += '<input type="button" class="btnB" value="Save"  onclick=formExaminerRemarkssendForm('+"'addExaminerRemarks'"+')>';	
								newRowstr += '<input type="button" class="btnB" value="Update"  onclick=UpdateExaminerRemarkssendForm('+"'updateExaminerRemarks'"+')>';	
								newRowstr +="</div>";					
								
					
				newRowstr +="</div>";// end of orderItem
					
					
		newRowstr +="</div>";//test 333
		
		
		document.getElementById('inputs').innerHTML += newRowstr;
		//-----------------------------
  
}

//document.getElementById("e").innerHTML="";
//document.getElementById("e").innerHTML = "";

}
	




//_____________________
function clearSearch2(){

document.getElementById("studentNo").value = "";
document.getElementById("studentName").value = "";
document.getElementById("studentNIC").value = "";

// dataRep["studentName"]= "";
// dataRep["studentNIC"]= "";
// dataRep["studentNo"]= "";
}


//____________________
function removeDuplicateEntry(){

for(i=0;i<testNum;i++){



if(dataRep['degreeTitle'] == dataRep['itemTitle'][i]){


document.getElementById('errorMsg').innerHTML="xxx";


		break;
			}
			else{
	document.getElementById('errorMsg').innerHTML="";		
			
			
			}
		}
	}







