// ////Coded by S.Suraweera////
// ////14.05.2015-----
facTitle="";
depTitle="";

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
	

		function setValuesExaminer(){
		
	for(i=0; i<studentNICLength;i++){

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

		function formReceivingNotificationForThesisSubmission(dsp) {

		
		str = ""; 
		title = "Receiving Notification For Thesis Submission"; 
  
	if(dsp == "formReceivingNotificationForThesisSubmission") {    

		
			//str  = "<div id='AddAppointExaminer'>";
			
				str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
			
				str += "<table><tr><td>";
				str += '<h2 >'+title+'</h2><hr>';
			
					str += '<form name="maintainReceivingNotificationForThesisSubmission"><br>';
						str +="<div>";
						 str +="<div style='float:left;'><fieldset  class='field'><legend class='fieldHead'></legend>";
							
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
			if (studentNICArr.indexOf(studentNICArr[studentNoLoop]) == studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) || (studentNICArr.indexOf(studentNICArr[studentNoLoop]) != studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) && studentNICArr.indexOf(studentNICArr[studentNoLoop])==studentNoLoop)){
				if(studentNICArr[studentNoLoop] != ""){
				studentNICList += "<option value='"+studentNICArr[studentNoLoop]+"'>";
				}
			}
			if (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) == lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) || (lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop]) != lecturerNameArr.lastIndexOf(lecturerNameArr[studentNoLoop]) && lecturerNameArr.indexOf(lecturerNameArr[studentNoLoop])==studentNoLoop)){
				if(lecturerNameArr[studentNoLoop] != ""){
				lecturerNameList += "<option value='"+lecturerNameArr[studentNoLoop]+"'>";
				}
			}
			if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[studentNoLoop]) == lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[studentNoLoop]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[studentNoLoop]) != lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[studentNoLoop]) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[studentNoLoop])==studentNoLoop)){
				if(lecturerEmpNoArr[studentNoLoop] != ""){
				lecturerEmpNoList += "<option value='"+lecturerNameArr[studentNoLoop]+"-"+lecturerEmpNoArr[studentNoLoop]+"'>";
				}
			}
			
			if (facultyTitleArr.indexOf(facultyTitleArr[studentNoLoop]) == facultyTitleArr.lastIndexOf(facultyTitleArr[studentNoLoop]) || (facultyTitleArr.indexOf(facultyTitleArr[studentNoLoop]) != facultyTitleArr.lastIndexOf(facultyTitleArr[studentNoLoop]) && facultyTitleArr.indexOf(facultyTitleArr[studentNoLoop])==studentNoLoop)){
				if(facultyTitleArr[studentNoLoop] != ""){
					if (departmentTitleArr.indexOf(departmentTitleArr[studentNoLoop]) == departmentTitleArr.lastIndexOf(departmentTitleArr[studentNoLoop]) || (departmentTitleArr.indexOf(departmentTitleArr[studentNoLoop]) != departmentTitleArr.lastIndexOf(departmentTitleArr[studentNoLoop]) && departmentTitleArr.indexOf(departmentTitleArr[studentNoLoop])==studentNoLoop)){
						if(departmentTitleArr[studentNoLoop] != ""){
							facTitle += "<option value='"+"Dean "+facultyTitleArr[studentNoLoop]+"'>";
							facTitle += "<option value='"+"HOD "+departmentTitleArr[studentNoLoop]+"'>";
							facTitle += "<option value='"+"Supervisor"+"'>";
							facTitle += "<option value='"+"Dean FGS"+"'>";
							//alert (facTitle);				
						}
					}
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

			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm('data4AppointExaminers');>";
		
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick=clearSearch2()>";
			 
							str +="</fieldset></div><br/>";
			
							
								str +="<div style='margin-top:20px;float:center;clear:both;'>";
			
								// e = studentNameArr[1];
								 //alert(document.getElementById("userName").innerHTML = studentNameArr[0]);

					str += "</div>";
					str += "</div>";		
					
			str +="<div>";
			
			
			
			
			
			str += "<table ><tr><td>";
				str += "<h2 >Notification For Thesis Submission </h2>";
				
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
			
			
			
					// str += "<div style='margin-left:20px;float:left;'>Student No : </div>";
						// str += "<div class='viewArea' style='margin-left:10px;float:left;'id='studentNo'> "+dataRep['studentNo']+" </div>";
					// str += "<div style='margin-left:30px;float:left;'>Student Name: </div>";
						// str += "<div  class='viewArea' style='margin-left:10px;float:left;'id='studentName'> "+dataRep['studentName']+" </div>";
					// str += "<div style='margin-left:30px;float:left'>Student NIC: </div>";
						// str += "<div class='viewArea' style='margin-left:10px;float:left;'id='studentNIC'> "+dataRep['studentNIC']+" </div>";
					
		
					str +="<div style='clear:both;float:left;width:100%;margin-top:10px'><hr></div>";
            			  
								 dataRep['notifyYYYY'] = "";
								 dataRep['notifyMM'] = "";
								 dataRep['notifyDD'] = "";
			
								 str += "<div class='longIdentifier' style='float:left;'>Notify Date</div >";
								 str += "<select name='notifyYYYY' value='notifyYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['notifyYYYY']);
								 str += "</select>";
								 str += "<select name='notifyMM' value='notifyMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['notifyMM']);
								 str += "</select>";
								 str += "<select name='notifyDD' value='notifyDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['notifyDD']);
								 str += "</select><br>";
								 
								 str += '<br/>&nbsp;<input type="button" class="btnB" value="Save"  onclick=formThesisNotifiDatesendForm('+"'updateThesisNotifiDate'"+');>';	
								 //str += '<input type="button" class="btnB" value="Update"  onclick=sendForm("")>';	
								 str+="</div>";
			
				str +="<div  style='margin:0px 5px;width:100%;clear:both'>";	// test111	
				str +="<div style='float:left;width:100%'>"; //test222
			
					str +="<table style='width:800px;float:left'><tr><th style='width:260px'>Received By</th>";			
						str +="<th style='width:160px'>Received Date</th>";
						str +="<th style='width:300px'>Forward To</th>";
						str +="<th style='width:170px'>Forward Date </th>";
						str +="<th style='width:0px'></tr></table>";				
			
			
						str +="<div  id='inputs' style='margin:clear:both'>";  //test333					
							
							str +="<div id='newRow"+testNum+"' style='margin:0px 10px;clear:both'>";
							
								str +="<div style='float:left;width:225px'><input type='text' name='receivedBy' list='listlecturerName' id='receivedBy"+testNum+"' style='width:205px' ";
								str += "value= '"+dataRep['receivedBy'].trim()+"' onchange='dataRep[this.name]=this.value;setValuesExaminer();'>";
								str += "<datalist id='listlecturerName'>"+facTitle+"</datalist></div >";
						
														
								 dataRep['receivedYYYY'] = "";
								 dataRep['receivedMM'] = "";
								 dataRep['receivedDD'] = "";
			
								 str +="<div style='float:left;width:200px'></div >";
								 str += "<select name='receivedYYYY' value='receivedYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['receivedYYYY']);
								 str += "</select>";
								 str += "<select name='receivedMM' value='receivedMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['receivedMM']);
								 str += "</select>";
								 str += "<select name='receivedDD' value='receivedDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['receivedDD']);
								 str += "</select>";			
									
								 str += "<div style='float:left;width:235px'><input type='text' name='sentTo' list='listlecturerName' id='sentTo"+testNum+"' style='width:205px'";
								 str += "value= '"+dataRep['sentTo'].trim()+"' onchange='dataRep[this.name]=this.value;setValuesExaminer();'>";
								 str += "<datalist id='listlecturerName'>"+lecturerNameList+"</datalist></div >";
								 
								 dataRep['sentYYYY'] = "";
								 dataRep['sentMM'] = "";
								 dataRep['sentDD'] = "";
			
								 str +="<div style='float:left;width:200px'></div >";
								 str += "<select name='sentYYYY' value='sentYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(2015, 2025, 4, dataRep['sentYYYY']);
								 str += "</select>";
								 str += "<select name='sentMM' value='sentMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 str += generateNumberOptions(0, 12, 2, dataRep['sentMM']);
								 str += "</select>";
								 str += "<select name='sentDD' value='sentDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 str += generateNumberOptions(0, 31, 2, dataRep['sentDD']);
								 str += "</select>";	
							
							
								 
							
								//hidelable starts
								str +="<div class='hideLabel'>";
								str +="<div class='longIdentifier' style='clear:none;'>Thesis ID</div>";
								str +="<div id='thesisid' class='viewArea' style='clear:none;'>"+dataRep['tid']+"</div>";
								dataRep['thesisid']=dataRep['tid'];
								str +="<div class=hideLabel>&nbsp;</div>";
								str +="</div>";
								
							
							str +="</div>";					
							
						str +="</div>";//test 333
				
							
				str +="</div>";// test 222
				str +="</div>";// test 111

						//str += '</form>';
		str += '</td></tr></table>';
		str += "</div>";

					str +="<div id='invest2' style='margin:2px 10px;width:100%;clear:both'></div>";	
				
					str += '<input type="button" class="btn" value="Save Notification"  onclick=formReceivingNotificationForThesisSubmissionsendForm('+"'addThesisNotification'"+');addNewRow();>';		
					str += '<input type="button" class="btn" value="View Notification"  onclick=viewElements();sendForm('+"'data4ThesisNotifyView'"+');>';		
					str += '<input type="button" class="btn" value="Return"  onclick=showMenu('+"'formThesisSubmitMenu'"+');>';		
					str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';

					
					
					
		
		}
		
	//____________________
			
		return str;
	}
	
	function viewElements(){
	tidNoLength=0;
	
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
	
	//Thesis notify date1
	function formThesisNotifiDatesendForm(frm){

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
		
		
		if(frm == 'updateThesisNotifiDate'){
 
			doc = document.maintainReceivingNotificationForThesisSubmission;
		
			dataStr += "&interface="+frm;
				
			dataStr += "&tid="+dataRep["thesisid"];
			
			dataStr += "&notifyDate="+doc.notifyYYYY.value+"/"+doc.notifyMM.value+"/"+doc.notifyDD.value;
			
			alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}
	
	// date recived and sent 2
	function formReceivingNotificationForThesisSubmissionsendForm(frm){

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
		
		
		if(frm == 'addThesisNotification'){
 
			doc = document.maintainReceivingNotificationForThesisSubmission;
		
			dataStr += "&interface="+frm;
				
			dataStr += "&tid="+dataRep["thesisid"];
			dataStr += "&receivedBy="+dataRep["receivedBy"];
			
			dataStr += "&receivedDate="+doc.receivedYYYY.value+"/"+doc.receivedMM.value+"/"+doc.receivedDD.value;
			
			dataStr += "&forwardTo="+dataRep["sentTo"];
			
			dataStr += "&forwardedDate="+doc.sentYYYY.value+"/"+doc.sentMM.value+"/"+doc.sentDD.value;
		alert(dataStr);
		}
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		}
	
	//BOS--------------------------------------------------
	
	
	
//____________________________________________________________________	
	function addNewRow(){

var a ="receivedBy"+testNum;
var c="dosage"+testNum;
var d="studentName "+testNum;
var f ="sentTo"+testNum;
 //alert (dataRep['sentTo']);
 
 if((dataRep['sentTo']).value !=""){
//if(document.getElementById(f).value !="" ){


dataRep['itemTitle'][testNum]=dataRep['degreeTitle'];
//dataRep['dosageArr'][testNum]=dataRep['dosage'];
dataRep['sentTo'][testNum]=dataRep['sentTo'];
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
				
					
				newRowstr +="<div id='newRow"+testNum+"' style='margin:clear:both'>";
					
					
							newRowstr +="<div style='float:left;width:225px'><input type='text' name='receivedBy' list='listDrugID1' id='receivedBy"+testNum+"' style='width:205px' ";
								newRowstr += "value= '"+dataRep['receivedBy'].trim()+"' onchange='dataRep[this.name]=this.value;removeDuplicateEntry();'>";
								newRowstr += "<datalist id='listDrugID1'>"+degreeTitleList+"</datalist></div >";
						
														
								 dataRep['commenceYYYY'] = year;
								 dataRep['commenceMM'] = month;
								 dataRep['commenceDD'] = date;
			
								 newRowstr +="<div style='float:left;width:200px'></div >";
								 newRowstr += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['commenceMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['commenceDD']);
																
								 newRowstr +="<div style='float:left;width:235px'><input type='text' name='sentTo' id='sentTo"+testNum+"' style='width:205px'";
								 newRowstr += "value= '"+dataRep['sentTo'].trim()+"' onchange='dataRep[this.name]=this.value;'></div>";
							
								 dataRep['commenceYYYY'] = year;
								 dataRep['commenceMM'] = month;
								 dataRep['commenceDD'] = date;
			
								 newRowstr +="<div style='float:left;width:200px'></div >";
								 newRowstr += "<select name='commenceYYYY' value='commenceYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
								 newRowstr += generateNumberOptions(2015, 2025, 4, dataRep['commenceYYYY']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceMM' value='commenceMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
								 newRowstr += generateNumberOptions(0, 12, 2, dataRep['commenceMM']);
								 newRowstr += "</select>";
								 newRowstr += "<select name='commenceDD' value='commenceDD'  onchange='dataRep[this.name]=this.value;addNewRow();' class='dateSelect'>";
								 newRowstr += generateNumberOptions(0, 31, 2, dataRep['commenceDD']);
								
								//hidelable starts
								str +="<div class='hideLabel'>";
								str +="<div class='longIdentifier' style='clear:none;'>department Code</div>";
								str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['tid']+"</div>";
								str +="<div class=hideLabel>&nbsp;</div>";
								str +="</div>";
							
					
					
		
					
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


document.getElementById('errorMsg').innerHTML="You can't prescribe same drug twice ";


		break;
			}
			else{
	document.getElementById('errorMsg').innerHTML="";		
			
			
			}
		}
	}







