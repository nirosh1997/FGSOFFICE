dataRep['offering'] = "";
dataRep['selectedOfferingDEP'] = "";
dataRep["universityCode"] = dataRep["universityTitle"] = "";
dataRep['facultyCode']=	dataRep['facultyTitle']= "";
dataRep['departmentCode']=dataRep['departmentTitle']="";
dataRep["degreeCode"] =dataRep["selectedOffering2"]="";
dataRep["paymentRate"]=dataRep["RegstationFee"]=dataRep["ApplicationFee"]=dataRep["ExaminationFee"]=dataRep["CourseFee"]="";
dataRep["libraryFeeRefundable"]=dataRep["libraryFeeNonRefundable"]=dataRep["textbookFee"]=dataRep["internetFee"]="";
dataRep["Fee4UsingComputerLab"]=dataRep["InternetUsagesAndProcessingCharges"]=dataRep["Fee4UsingOtherLaboratories"]= "" ;
dataRep['academicYear']=dataRep["degreeTitle"]=dataRep["programmeTypeTitle"]= dataRep["instalmentType"] = "";
dataRep["courseFeeTotal"] = dataRep["firstinstalment"] = dataRep["secondinstalment"] = dataRep["thirdinstalment"] = "";
dataRep["forthinstalment"] = dataRep["fifthinstalment"] = dataRep["sixthinstalment"] = "";
dataRep["IncomeSourceCode"]="";
var TotalChecked = InstalmentChecked = "";
var FirstChecked = SecondChecked = ThirdChecked = ForthChecked = FifthChecked = SixthChecked =  "";
var selectedCheckboxArr = new Array();
var updateData = new Array();

var criteriaChecked ="";

var selectedBoxArr =  new Array();
var selectedCheckBoxes = '';
function selectedOptionalValues(frm){
	var inptfields = frm.getElementsByTagName('input');
	var inptLength = inptfields.length;
	
	for(lp=0; lp<inptLength; lp++){
		if(inptfields[lp].type == 'checkbox' && inptfields[lp].checked == true){
			selectedBoxArr.push(inptfields[lp].value);
		}
		selectedCheckBoxes = selectedBoxArr;
		//alert(selectedCheckBoxes);
	}
	return selectedBoxArr;
}





function generateSelectBox(){
	var newStr="";

	if(dataRep['offering']=='Faculty / BOS'){
			offering = "Faculty / BOS";
		}
		else if (dataRep['offering']=='Department'){
			offering = "Department";
		}
	
		universityCodeLength = programmeTypeTitleLength ;
		facultyCodeLength = programmeTypeTitleLength ;
		programmeTypeCodeLength = programmeTypeTitleLength ;

	facultyCodeStr="<option>Please scroll down to see the records</option>";
		for(i = 0; i<programmeTypeTitleLength; i++) {
			//alert(i);
				if(dataRep['offering']=='Faculty / BOS'){
				//if (facultyCodeArr[i] != facultyCodeArr[i-1] && facultyTitleArr[i] != ""){
					if (facultyCodeArr.indexOf(facultyCodeArr[i])== facultyCodeArr.lastIndexOf(facultyCodeArr[i]) || (facultyCodeArr.indexOf(facultyCodeArr[i])!= facultyCodeArr.lastIndexOf(facultyCodeArr[i]) && facultyCodeArr.indexOf(facultyCodeArr[i])== i)){
						//alert(facultyTitleArr[i]+"--"+i);					
						facultyCodeStr += "<option>"+facultyTitleArr[i]+"</option>";
					}
				
				}
				else if(dataRep['offering']=='Department'){
				//if (departmentTitleArr[i] != departmentTitleArr[i-1] && departmentTitleArr[i] != ""){
					//if (departmentTitleArr.indexOf(departmentTitleArr[i])== departmentTitleArr.lastIndexOf(departmentTitleArr[i]) || (departmentTitleArr.indexOf(departmentTitleArr[i])!= departmentTitleArr.lastIndexOf(departmentTitleArr[i]) && departmentTitleArr.indexOf(departmentTitleArr[i])== i)){
					if (departmentCodeArr.indexOf(departmentCodeArr[i])== departmentCodeArr.lastIndexOf(departmentCodeArr[i]) || (departmentCodeArr.indexOf(departmentCodeArr[i])!= departmentCodeArr.lastIndexOf(departmentCodeArr[i]) && departmentCodeArr.indexOf(departmentCodeArr[i])== i)){					
						//alert(facultyTitleArr[i]+"--"+i);
						facultyCodeStr += "<option>"+facultyTitleArr[i]+"--"+departmentTitleArr[i]+"</option>";
					//alert(departmentCodeArr[i]);
					
					}
				}
		}
			newStr += "<div class='longIdentifier'>"+offering+"</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr += "<select id='selectedOffering2' onchange='dataRep[this.id]=this.value;'>";
			newStr += facultyCodeStr;
			newStr += "</select>";
			
			
			programmeTypeCodeStr="<option>Please scroll down to see the records</option>";
			mediumStr="<option>Select Medium</option>";
			mediumStr +="<option>Sinhala and English</option>";
			mediumStr +="<option>Sinhala</option>";
			mediumStr +="<option>English</option>";
			
			for(i = 0; i<programmeTypeTitleLength; i++) {
					if (programmeTypeCodeArr.indexOf(programmeTypeCodeArr[i])== programmeTypeCodeArr.lastIndexOf(programmeTypeCodeArr[i]) || (programmeTypeCodeArr.indexOf(programmeTypeCodeArr[i])!= programmeTypeCodeArr.lastIndexOf(programmeTypeCodeArr[i]) && programmeTypeCodeArr.indexOf(programmeTypeCodeArr[i])== i)){
						programmeTypeCodeStr += "<option>"+programmeTypeTitleArr[i]+"</option>";	
					}
				}

				
				
			newStr += "<br><div class='longIdentifier'>Type</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selectedType' onchange='dataRep[this.id]=this.selectedIndex;'>";
			newStr += programmeTypeCodeStr;
			newStr += '</select><br>';

			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Degree Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='degreeCode' id= 'degreeCode' value= '"+dataRep["degreeCode"]+"'   onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			newStr += "</div>";

			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='degreeTitle' value= '"+dataRep["degreeTitle"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			newStr += "</div>";

			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Income Source Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='IncomeSourceCode' value= '"+dataRep["IncomeSourceCode"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			newStr += "</div>";

			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='academicYear' value= '"+dataRep["academicYear"]+"' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			newStr += "</div>";

			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Duration</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='duration' value= '"+dataRep["duration"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			newStr += "</div>";
			newStr +="</div></br>";
			
			newStr += "<br><div class='longIdentifier'>Medium</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selectedMedium' onchange='dataRep[this.id]=this.selectedIndex;'>";
			newStr += mediumStr;
			newStr += '</select><br>';
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Degree Eligible Criteria</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' id='' >&nbsp;";

			for(criteriaLoop=0; criteriaLoop<criteriaCodeArr.length; criteriaLoop++){
		
					newStr += "<div style='clear:both'>";
					newStr += "<div id='instituteDiv' class='investView' style='width:50px;'>";
					newStr += "<input type='checkbox'  class='viewArea' "+criteriaChecked+" id='selectedCheckbox"+criteriaLoop+"' name='selectedCheckbox"+criteriaLoop+"' value ="+criteriaCodeArr[criteriaLoop]+" onchange='dataRep[this.id]=this.value;' >";
					newStr += "</div>";
					newStr +="<div id='instituteDiv' class='checkView' style='width:auto;'>"+criteriaTitleArr[criteriaLoop]+"</div></br>";
			}
			
			newStr += "</fieldset>";

		
	document.getElementById('selectedDiv').innerHTML=newStr;
}



	function formDegree(dsp) {
		var FacultyChecked = DepartmentChecked = "";
		keyDisabled = fieldDisabled = "";
		
		str = "";
		title = "New Degree Programme";
		
		if(dsp == "addDegree" || dsp == "updateDegree" || dsp == "deleteDegree") {

			if(dsp == "updateDegree" || dsp == "deleteDegree"){
		
				title = "Update Degree Programme";
				
				if(dsp == "deleteDegree"){
	
					title = "Delete Degree Programme";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

				if(dataRep["selectedDegree"] != "0"){
					dataRep["degreeCode"] = degreeCodeArr[dataRep["selectedDegree"]-1];
					dataRep["degreeTitle"] = degreeTitleArr[dataRep["selectedDegree"]-1];
					dataRep["academicYear"] = academicYearArr[dataRep["selectedDegree"]-1];
					dataRep["duration"] = durationArr[dataRep["selectedDegree"]-1];
					dataRep["programmeTypeCode"] = programmeTypeCodeArr[dataRep["selectedDegree"]-1];
					dataRep["programmeTypeTitle"] = programmeTypeTitleArr[dataRep["selectedDegree"]-1];
					dataRep["universityCode"] = universityCodeArr[dataRep["selectedDegree"]-1];
					dataRep["universityTitle"] = universityTitleArr[dataRep["selectedDegree"]-1];
					dataRep["facultyCode"] = facultyCodeArr[dataRep["selectedDegree"]-1];
					dataRep["facultyTitle"] = facultyTitleArr[dataRep["selectedDegree"]-1];
					dataRep["departmentCode"] = departmentCodeArr[dataRep["selectedDegree"]-1];
					dataRep["departmentTitle"] = departmentTitleArr[dataRep["selectedDegree"]-1];
					dataRep["criteriaTitle"] =criteriaTitleArr[dataRep["selectedDegree"]-1];
					dataRep["criteriaCode"] =criteriaCodeArr[dataRep["selectedDegree"]-1];
					dataRep["selectedCheckbox"] =selectedCheckboxArr[dataRep["selectedDegree"]-1];
					
					// if(criteriaCodeArr[immrLoop] == "Male"){
						// patientSexMaleChecked = "checked";
			
					// } else {
						// patientSexMaleChecked= "";
					// }
					
					
				}

			} 
		
		
		universityCodeLength = programmeTypeTitleLength ;
		facultyCodeLength = programmeTypeTitleLength ;
		programmeTypeCodeLength = programmeTypeTitleLength ;
		
			str  = "<div id='addDegree'>";
			str +="<div style='float:left;width:100%;height:50px;'>";
				str +="<div style='float:right;padding:15px;'>";
					str +="<div class='viewArea' style='float:left;'> You are Logged In As :</div>";
					str +="<div class='viewArea' style='float:left;' name='userName' id='userName' onchange='dataRep[this.name]=this.value;'>"+'&nbsp;'+dataRep['userName']+'&nbsp;'+'|'+"</div>";
					str +="<div class='viewArea' style='float:left;margin-left:15px;' ><label style='cursor:pointer;' onclick= logOut();>logout</label></div>";
				str +="</div></div><br/>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainDegree">';

		 if(dsp == "addDegree"){
		
			universityCodeStr="<option>Please scroll down to see the records</option>";

				for(i = 0; i<programmeTypeTitleLength; i++) {
					if (universityCodeArr[i] != universityCodeArr[i-1] && universityTitleArr[i] != ""){
						universityCodeStr += "<option>"+universityTitleArr[i]+"</option>";
					}	
				}
				str += "<br><div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selectedUniversity' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += universityCodeStr;
				str += '</select><br>';
								
		str +="<div class='longIdentifier' >&nbsp;&nbsp;</div><div class='colon'>&nbsp;&nbsp;</div><div style='float:left' >";
	

		str +="<div class='rdo' style='width:auto;margin:0px 30px 10px 0px;' onchange=generateSelectBox();>";
			if(dataRep['offering']== 'Faculty / BOS'){
			FacultyChecked = 'checked';
			} else if(dataRep['offering']=='Department'){
			DepartmentChecked = 'checked'}


		str +="<input  type='radio' name='offering' id='offeringFaculty' value= 'Faculty / BOS'";
		str +=FacultyChecked;
		str +=" onclick='dataRep[this.name]=this.value;'>Offering Faculty / BOS";
		str +="<input  type='radio' name='offering' id='offeringDepartment' value= 'Department'";
		str +=DepartmentChecked;
		str +=" onclick=dataRep[this.name]=this.value;>Offering Department</div></div>";
		
		str += "</div>";

		str +="</div>";	
			

		
		}
		str +="<div id='selectedDiv'></div>";
		
		if(dsp != "addDegree"){

			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["universityCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["universityTitle"]+"</div>";
			str += "</div>"
			
			if(dataRep["departmentCode"] == "000"){	
			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Faculty/ BOS</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["facultyCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["facultyTitle"]+"</div>";
			str += "</div>"
			}
			if(dataRep["facultyCode"] == "000"){
			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Department</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["departmentCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["departmentTitle"]+"</div>";
			str += "</div>"
			}	
			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Programme Type</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["programmeTypeCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["programmeTypeTitle"]+"</div>";
			str += "</div>"
				
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Programme Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='degreeCode' id= 'degreeCode' value= '"+dataRep["degreeCode"]+"'   onchange='dataRep[this.name]=this.value;' "+keyDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Programme Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='degreeTitle' value= '"+dataRep["degreeTitle"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Income Source Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='IncomeSourceCode' value= '"+dataRep["IncomeSourceCode"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";


			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='academicYear' value= '"+dataRep["academicYear"]+"' onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Duration</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='duration' value= '"+dataRep["duration"]+"'  onchange='dataRep[this.name]=this.value' "+fieldDisabled+">";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Degree Eligible Criteria</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<div style='float:left'>&nbsp;";

			for(criteriaLoop=0; criteriaLoop<criteriaCodeArr.length; criteriaLoop++){
				if(degreeCodeArr[criteriaLoop] == dataRep["degreeCode"]){
					str += "<div style='clear:both'>";
					//str += "<div id='instituteDiv' class='investView' style='width:50px;'>";
					//str += "<input type='checkbox'  class='viewArea' "+criteriaChecked+" id='selectedCheckbox"+criteriaLoop+"' name='selectedCheckbox"+criteriaLoop+"' value ="+criteriaCodeArr[criteriaLoop]+" onchange='dataRep[this.id]=this.value;' >";
					//str += "</div>";
					str +="<div id='instituteDiv' class='viewArea' style='width:auto;'>"+criteriaTitleArr[criteriaLoop]+"</div></br>";
				}
			}
			
			
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>Degree Eligible Criteria</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str += "<div style='float:left'>&nbsp;";
			// for(criteriaLoop=0; criteriaLoop<criteriaCodeArr.length; criteriaLoop++){
				// //if(degreeCodeArr[criteriaLoop] == dataRep["degreeCode"]){
					// str += "<div style='clear:both'>";
					// str += "<div id='instituteDiv' class='investView' style='width:50px;'>";
					// str += "<input type='checkbox'  class='viewArea' "+criteriaChecked+" id='selectedCheckbox"+criteriaLoop+"' name='selectedCheckbox"+criteriaLoop+"' value ="+criteriaCodeArr[criteriaLoop]+" onchange='dataRep[this.id]=this.value;' >";
					// str += "</div>";
					// str +="<div id='instituteDiv' class='viewArea' style='width:auto;'>"+criteriaTitleArr[criteriaLoop]+"</div></br>";
				// //}
			// }
			
			

		}

		str +="<div style='float:left;clear:both' >";
		if(dsp == "addDegree"){
				str += '<input type="button" class="btn" value="Save" onclick=formDegreesendForm("addDegree");>';
			} else if(dsp == "updateDegree") {
				str += '<input type="button" class="btn" value="Update" onclick=formDegreesendForm("updateDegree");>';
			} else {
				str += '<input type="button" class="btn" value="Delete" onclick=formDegreesendForm("deleteDegree");>';
			}

		str += '<input type="button" class="btn" value = "View Degree Programme" onclick ="sendForm('+"'data4ViewDegree'"+')">';
		str += "<input type='button' class='btn' value='Reset Values'  onclick='refreshDegree();' >";	
		str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
				
		str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			
		str += '</div></form>';
		str += '</td></tr></table>';
		str += "</div>";
		}

		return str;
	}
	   
	function refreshDegree(){    

	dataRep["degreeCode"] = dataRep["degreeTitle"] = dataRep["academicYear"] = dataRep["duration"] = "";
	dataRep['selectedfaculty'] = "";
	dataRep['selecteduniversity'] = "";
	dataRep['selectedType'] = "";
    sendForm('addDegree');
	dataRep['selectedMedium'] = "";
	
	}
	
	function formViewDegree(dsp) {

		str = "";
		//testCodeStr = "";

		if(dsp == "formViewDegree") {

			programmeTypeCode = programmeTypeTitle = "";

			str  = "<div id='viewdegree'>";
			str += "<table><tr><td>"
			str += '<h2>View Degree Programme</h2><hr>';
			str += '<form name="viewDegree" method="POST">';

			dataRep["selectedDegree"]="";
			degreeCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<degreeCodeLength; i++) {
				//if (degreeTitleArr[i] != degreeTitleArr[i-1] && degreeTitleArr[i] != ""){
					degreeCodeStr += "<option>"+degreeTitleArr[i]+" "+programmeTypeTitleArr[i]+"</option>";
				//alert(dataRep["selectedDegree"]);
				//}
			}
			str += "<br><center><select id='selectedDegree' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += degreeCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updateDegree");>Update</button>';
			str += '<button class="btn" onclick=showMenu("deleteDegree");>Delete</button>';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	

	
		function formDegreevalidate(frm){
//alert("val awa");
		var error = 0;

		if(frm == "addDegree" || frm == "updateDegree"){

			if(frm == "addDegree"){
				dsp = "addDegree";
			} else if(frm == "updateDegree"){
				dsp = "updateDegree";
			} 

			doc = document.maintainDegree;
			document.getElementById("msgArea").innerHTML = "";
			
			if((dataRep["degreeCode"].trim()).length != 10){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : Programme Code with less than 10 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}

			if(dataRep["degreeTitle"] ==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : Programme Title cannot be blank.</div>";
					error++;
				} 
			}
			
			if((dataRep["academicYear"].trim())==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E003") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E003 : Academic Year cannot be blank.</div>";
					error++;
				}
			}

			
			if((dataRep["duration"].trim())==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E004") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E004 : duration cannot be blank.</div>";
					error++;
				}
			}
			
			
			// if((dataRep["credits"].trim())==""){
				// if((document.getElementById("msgArea").innerHTML).indexOf("E005") == -1){
					// document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E005 : Credits cannot be blank.</div>";
					// error++;
				// }
			// }
			
			
			
		}
		
		
		if(error > 0){
			showMenu(dsp);
		} else {
			formDegreesendForm(frm);
		}
		
	}
	

function formDegreesendForm(frm){
	var doc, dataStr;
	var catSrt ="";
	var newStr ="";

		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		}
		
		
		//alert(dataRep['selectedOffering2']);

 
	if(frm == 'addDegree'){
			doc = document.maintainDegree;

			dataStr += "&interface="+frm;
			var mediumSelected;
		
		for (var a=0; a<criteriaCodeArr.length; a++){
			if(document.getElementById('selectedCheckbox'+a).checked){
		
				dataStr += "&programmeTypeCode="+programmeTypeCodeArr[dataRep["selectedType"]-1];//alert(programmeTypeCodeArr[dataRep["selectedType"]-1]);
				dataStr += "&universityCode="+universityCodeArr[dataRep["selectedUniversity"]-1];
				
				//dataStr += "&medium="+ dataRep["selectedMedium"]-1;
				
			
				for(facCounter=0; facCounter <facultyTitleArr.length; facCounter++){
					if (facultyTitleArr[facCounter] == dataRep['selectedOffering2']){
						dataRep['selectedOffering2']=facCounter;
					}

				}

				if(document.getElementById('offeringFaculty').checked == true){
					dataStr += "&facultyCode="+facultyCodeArr[dataRep["selectedOffering2"]];//alert(facultyCodeArr[dataRep["selectedOffering2"]]);
					dataStr += "&departmentCode="+"000";
				}
			
			  
				if(document.getElementById('offeringDepartment').checked == true){
				  
					for(facLength=0; facLength<facultyTitleArr.length; facLength++){
							//alert(dataRep["selectedOffering2"].substring(0, dataRep["selectedOffering2"].indexOf('--')));	
						if(facultyTitleArr[facLength]==dataRep["selectedOffering2"].substring(0, dataRep["selectedOffering2"].indexOf('--'))){
							var faculty = facultyCodeArr[facLength];
							//alert(faculty);
							
						}
					}
			

					for(depLength=0; depLength<departmentTitleArr.length; depLength++){
							//alert(departmentTitleArr[depLength].trim()==dataRep["selectedOffering2"].substring(dataRep["selectedOffering2"].indexOf('--')+2, dataRep["selectedOffering2"].length));	
						if(departmentTitleArr[depLength].trim()==dataRep["selectedOffering2"].substring(dataRep["selectedOffering2"].indexOf('--')+2, dataRep["selectedOffering2"].length)){
									//alert(departmentTitleArr[depLength]);	
							var department = departmentCodeArr[depLength];
							//alert(department);
							
						}
					}


					
					dataStr += "&departmentCode="+department;
					dataStr += "&facultyCode="+faculty;
			
				}
			
					dataStr += "&degreeCode="+dataRep["degreeCode"];
					dataStr += "&degreeTitle="+doc.degreeTitle.value;
					dataStr += "&IncomeSourceCode="+doc.IncomeSourceCode.value;
					dataStr += "&academicYear="+doc.academicYear.value;
					dataStr += "&duration="+doc.duration.value;
					
					//mediumSelected=doc.selectedMedium.value;
					if(doc.selectedMedium.value=='Sinhala and English'){
						mediumSelected='Sin/Eng';
					}
					else if(doc.selectedMedium.value=='Sinhala'){
						mediumSelected='Sin';
					}
					else if(doc.selectedMedium.value=='English'){
						mediumSelected='Eng';
					}
					
					dataStr += "&medium="+mediumSelected;
					
					
					
					// if(document.getElementById('selectedCheckbox'+a).checked){
					
					//dataStr += "&criteriaCode="+document.getElementById('selectedCheckbox'+a).value;
                    catSrt += "&criteriaCode="+criteriaCodeArr[a];
			}
			//}
			
				criteriaData[a] = dataStr + catSrt ;
		
		}

			if(frm == 'addDegree'){
				for(x=0; x<criteriaCodeArr.length; x++){
					if(criteriaData[x]!= "" || criteriaData[x]!= null){
					
					//alert(criteriaData[x]);
						isrHandle.getDataFromDB(eval("clientController"), "serverController.php", criteriaData[x]);
					}
					
				}	
			}

	}
//****this is commented bcz null field is adding bcz of this field******//
		// else{
			// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		 // }

	else if(frm == 'updateDegree' || frm == 'deleteDegree'){
		var updateDataStr="";
		doc = document.maintainDegree;
		dataStr += "&interface="+frm;

			dataStr += "&programmeTypeCode="+programmeTypeCodeArr[dataRep["selectedDegree"]-1];
			dataStr += "&universityCode="+universityCodeArr[dataRep["selectedDegree"]-1];
			dataStr += "&facultyCode="+facultyCodeArr[dataRep["selectedDegree"]-1];
			dataStr += "&degreeCode="+degreeCodeArr[dataRep["selectedDegree"]-1];
			dataStr += "&departmentCode="+departmentCodeArr[dataRep["selectedDegree"]-1];
		
			dataStr += "&degreeTitle="+dataRep["degreeTitle"];
			dataStr += "&academicYear="+dataRep["academicYear"];
			dataStr += "&duration="+dataRep["duration"];
			
			if(doc.selectedMedium.value=='Sinhala and English'){
						mediumSelected='Sin/Eng';
					}
					else if(doc.selectedMedium.value=='Sinhala'){
						mediumSelected='Sin';
					}
					else if(doc.selectedMedium.value=='English'){
						mediumSelected='Eng';
					}
					
					dataStr += "&medium="+mediumSelected;
			
			
			// for (var k=0; k<criteriaCodeArr.length; k++){
				// if(document.getElementById('selectedCheckbox'+k).checked){
					
					// //updateDataStr += "&criteriaCode="+document.getElementById('selectedCheckbox'+k).value;
					// updateDataStr += "&criteriaCode="+criteriaCodeArr[k];
				// }
				// updateData[k] = dataStr + updateDataStr;
			// }
			// alert(updateData[k]);
			
			
			// if(frm == 'updateDegree' || frm == 'deleteDegree'){
				// for(j=0; j<criteriaCodeArr.length; j++){
					// if(updateData[j]!= "" || updateData[j]!= null){
					
					// //alert(updateData[j]);
						// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", updateData[j]);
					// }
					
				// }	
			// }
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		 		
			
	}		
	
	return 0;
		
}
