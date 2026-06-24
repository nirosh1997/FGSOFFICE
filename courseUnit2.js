dataRep['offering'] = dataRep['selectedOffering'] =   dataRep["selectedCourseUnit"] = "";
dataRep["courseUnitCode"] = dataRep["courseUnitTitle"] = "";
dataRep["universityCode"] = dataRep["universityTitle"] = "";
dataRep['facultyCode']=	dataRep['facultyTitle']= "";
dataRep['departmentCode']=dataRep['departmentTitle']="";
var CompusaryChecked = OptionalChecked ="";
dataRep["type"] ="";
dataRep["selectedProType"] = "";
dataRep['selectedTypeCode']=dataRep['selectedDegreeCode']="";/****************Added**********************/
dataRep['selectedCheckbox']= dataRep['typeCompusary'] =dataRep['typeOptional'] ="";

	function formCourseUnit(dsp) {
		var FacultyChecked = DepartmentChecked = "";
		keyDisabled = fieldDisabled = "";
		
		str = "";
		title = "Assign Course Unit for Degree Programme";
		
		if(dsp == "addCourseUnit" || dsp == "updateCourseUnit" || dsp == "deleteCourseUnit") {

			if(dsp == "updateCourseUnit" || dsp == "deleteCourseUnit"){
			//alert(dsp);
				title = "Update Course Unit";
				
				if(dsp == "deleteCourseUnit"){
				//alert(dsp);
					title = "Delete Course Unit";
					fieldDisabled = "Disabled";
				}

				keyDisabled = "Disabled";

				if(dataRep["selectedCourseUnit"] != "0"){
					dataRep["universityCode"] = universityCodeArr[dataRep["selectedCourseUnit"]-1];
					dataRep["universityTitle"] = universityTitleArr[dataRep["selectedCourseUnit"]-1];
					dataRep["facultyCode"] = facultyCodeArr[dataRep["selectedCourseUnit"]-1];
					dataRep["facultyTitle"] = facultyTitleArr[dataRep["selectedCourseUnit"]-1];
					dataRep["departmentCode"] = departmentCodeArr[dataRep["selectedCourseUnit"]-1];
					dataRep["departmentTitle"] = departmentTitleArr[dataRep["selectedCourseUnit"]-1];
					dataRep["programmeTypeCode"] = programmeTypeCodeArr[dataRep["selectedCourseUnit"]-1];
					dataRep["programmeTypeTitle"] = programmeTypeTitleArr[dataRep["selectedCourseUnit"]-1];
					dataRep["degreeCode"] = degreeCodeArr[dataRep["selectedCourseUnit"]-1];
					dataRep["degreeTitle"] = degreeTitleArr[dataRep["selectedCourseUnit"]-1];
					dataRep["courseUnitCode"] = courseUnitCodeArr[dataRep["selectedCourseUnit"]-1];
					dataRep["courseUnitTitle"] = courseUnitTitleArr[dataRep["selectedCourseUnit"]-1];
					dataRep["type"] = typeArr[dataRep["selectedCourseUnit"]-1];

				}

			} 
		
		
		universityCodeLength = courseUnitTitleLength;
		facultyCodeLength = courseUnitTitleLength;
		departmentCodeLength = courseUnitTitleLength;
		programmeTypeCodeLength =courseUnitTitleLength;
		degreeCodeLength =courseUnitTitleLength;
		
			str  = "<div id='addCourseUnit'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainCourseUnit">';

	if(dsp == "addCourseUnit"){
		 
		  
		
			universityCodeStr="<option>Please scroll down to see the records</option>";

				for(i = 0; i<courseUnitTitleLength; i++) {
					if (universityCodeArr[i] != universityCodeArr[i-1] && universityTitleArr[i] != ""){
						universityCodeStr += "<option>"+universityTitleArr[i]+"</option>";
					}	
				}
				str += "<br><div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div><select id='selectedUniversity' onchange='dataRep[this.id]=this.selectedIndex;'>";
				str += universityCodeStr;
				str += '</select><br>';
								
		

		
		facultyCodeStr="<option>Please scroll down to see the records</option>";
		for(i = 0; i<courseUnitTitleLength; i++) {
			
				
			//if (departmentCodeArr[i] != departmentCodeArr[i-1] && departmentTitleArr[i] != ""){
				if (departmentCodeArr.indexOf(departmentCodeArr[i])== departmentCodeArr.lastIndexOf(departmentCodeArr[i]) || (departmentCodeArr.indexOf(departmentCodeArr[i])!= departmentCodeArr.lastIndexOf(departmentCodeArr[i]) && departmentCodeArr.indexOf(departmentCodeArr[i])== i)){
					
					facultyCodeStr += "<option>"+facultyTitleArr[i]+"--"+departmentTitleArr[i]+"</option>";
					
				}
			//}
		}
			str += "<div class='longIdentifier'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<select id='selectedOffering' onchange='dataRep[this.id]=this.value;'>";
			str += facultyCodeStr;
			str += "</select>";
			

			programmeTypeCodeStr="<option>Please select Faculty or Department to see Programme Type</option>";
			
			for(i = 0; i<programmeTypeCodeLength; i++) {
			//	if (degreeTitleArr.indexOf(degreeTitleArr[i])== degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i])!= degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])== i)){
				
					programmeTypeCodeStr += "<option>"+programmeTypeTitleArr[i]+"--"+degreeTitleArr[i]+"</option>";
			//	}
			}
			str += "<div class='longIdentifier'>Programme Type</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<select id='selectedProType' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += programmeTypeCodeStr;
			str += "</select>"
			
			
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Course Unit</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str += "<div style='float:left' id='CourseDiv' >&nbsp;";
			
			
		for(courseLoop=0; courseLoop<courseUnitCodeLength; courseLoop++){
		
			if (courseUnitTitleArr.indexOf(courseUnitTitleArr[courseLoop]) == courseUnitTitleArr.lastIndexOf(courseUnitTitleArr[courseLoop]) || (courseUnitTitleArr.indexOf(courseUnitTitleArr[courseLoop]) != courseUnitTitleArr.lastIndexOf(courseUnitTitleArr[courseLoop]) && courseUnitTitleArr.indexOf(courseUnitTitleArr[courseLoop])==courseLoop)){
					str += "<div style='clear:both'>";
					str += "<div id='instituteDiv' class='investView' style='width:50px;'>";
					str += "<input type='checkbox'  class='viewArea' id='selectedCheckbox"+courseLoop+"' name='selectedCheckbox"+courseLoop+"' value ="+courseUnitCodeArr[courseLoop]+" onchange='dataRep[this.id]=this.value;' >";
					str += "</div>";
					str +="<div id='instituteDiv' class='investView' style='width:auto;'>"+courseUnitTitleArr[courseLoop]+"</div>";
					
					
					str +="<div class='rdo' style='width:auto;margin:0px 10px 10px 0px;'>";
					if(dataRep["type"]== 'Compulsory'){
					CompusaryChecked = 'checked';
					} else if(dataRep["type"]=='Optional'){
					OptionalChecked = 'checked';
					}


					str +="<input  type='radio' name='type"+courseLoop+"' id='typeCompusary"+courseLoop+"' value= 'Compulsory'";
					str +=CompusaryChecked;
					str +=" onclick='dataRep[this.name]=this.value;'>Compulsory";
					str +="<input  type='radio' name='type"+courseLoop+"' id='typeOptional"+courseLoop+"' value= 'Optional'";
					str +=OptionalChecked;
					str +=" onclick=dataRep[this.name]=this.value;>Optional</div></div>";

			}
	
		}
		
			//str += "</div></div>";	

	}
		
		
		 if(dsp != "addCourseUnit"){

			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["universityCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["universityTitle"]+"</div>";
			str += "</div>"
			
			if(dataRep["departmentCode"] == "000"){	
			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> "
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
			
			str += "<div class='hiddenInfo'>";
			str += "<div class='longIdentifier'>Degree</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["degreeCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["degreeTitle"]+"</div>";
			str += "</div>"
			

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Course Unit Code</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='courseUnitCode' id='courseUnitCode' value= '"+dataRep["courseUnitCode"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+keyDisabled+">";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Course Unit Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='courseUnitTitle' name='courseUnitTitle'  value= '"+dataRep["courseUnitTitle"].trim()+"' onchange='dataRep[this.name]=this.value;' >";
			str += "</div>";
			
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>Type</div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// str += "<input type='text' id='type' name='type'  value= '"+dataRep["type"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			// str += "</div>";
			}
			
		
		

		str +="<div style='float:left;clear:both' >";
		if(dsp == "addCourseUnit"){
				str += '<input type="button" class="btn" value="Save" onclick=formCourseUnitsendForm("addCourseUnit");>';
			} else if(dsp == "updateCourseUnit") {
				str += '<input type="button" class="btn" value="Update" onclick=formCourseUnitsendForm("updateCourseUnit");>';
			} else {
				str += '<input type="button" class="btn" value="Delete" onclick=formCourseUnitsendForm("deleteCourseUnit")>';
			}
			
		str += '<input type="button" class="btn" value = "View Course Unit" onclick ="sendForm('+"'data4ViewCourseUnit'"+')">';
		str += "<input type='button' class='btn' value='Reset Values'  onclick='refreshCourseUnit();' >";	
		str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
				
		str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			
			str += '</div></form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	

	function refreshCourseUnit(){    

	
	dataRep['selectedfaculty'] = "";
	dataRep['selecteduniversity'] = "";
	dataRep['selectedType'] = "";
	typeCompusaryChecked = typeOptionalChecked = "";
	
	sendForm('addCourseUnit');
	
	
	}



	function formViewCourseUnit(dsp) {

		str = "";
		courseUnitCodeStr = "";

		if(dsp == "formViewCourseUnit") {

		

			str  = "<div id='viewcourseunit'>";
			str += "<table><tr><td>"
			str += '<h2>View Course Unit</h2><hr>';
			str += '<form name="viewcourseunit" method="POST">';

			dataRep["selectedCourseUnit"]="";
			courseUnitCodeStr="<option>Please scroll down to see the records</option>";
			for(i = 0; i<courseUnitCodeLength; i++) {
				if (courseUnitCodeArr[i] != courseUnitCodeArr[i-1] && courseUnitTitleArr[i] != ""){
			
				courseUnitCodeStr += "<option>"+courseUnitTitleArr[i]+"</option>";
				}
			}
			str += "<br><center><select id='selectedCourseUnit' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += courseUnitCodeStr;
			str += "</select></center><br><br><br><br>";
			str += '<button class="btn" onclick=showMenu("updateCourseUnit");>Update</button>';
			str += '<button class="btn" onclick=showMenu("deleteCourseUnit")>Delete</button>';
			str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</form>';
			str += '</td></tr></table>';
			str += "</div>";
		}

		return str;
	}
	
	

	
function formCourseUnitsendForm(frm){

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

	if(frm == 'addCourseUnit' || frm == 'updateCourseUnit' || frm == 'deleteCourseUnit' ){
 
			doc = document.maintainCourseUnit;
			dataStr += "&interface="+frm;
			var courseStr = "";
		// if(frm != 'addCourseUnit'){

			// dataStr += "&programmeTypeCode="+programmeTypeCodeArr[dataRep["selectedCourseUnit"]-1];
			// dataStr += "&universityCode="+universityCodeArr[dataRep["selectedCourseUnit"]-1];
			// dataStr += "&facultyCode="+facultyCodeArr[dataRep["selectedCourseUnit"]-1];
			// dataStr += "&type="+typeArr[dataRep["selectedCourseUnit"]-1];
		// } 
//else {

	for(courseLoop=0; courseLoop<courseUnitCodeLength; courseLoop++){

		
			dataStr += "&universityCode="+universityCodeArr[dataRep["selectedUniversity"]-1];
			
			for(facLength=0; facLength<facultyTitleArr.length; facLength++){
					//alert(dataRep["selectedOffering"].substring(0, dataRep["selectedOffering"].indexOf('--')));	
				if(facultyTitleArr[facLength]==dataRep["selectedOffering"].substring(0, dataRep["selectedOffering"].indexOf('--'))){
					var faculty = facultyCodeArr[facLength];
					
				}
			}
		

			for(depLength=0; depLength<departmentTitleArr.length; depLength++){
						//alert(dataRep["selectedOffering"].substring(dataRep["selectedOffering"].indexOf('--'), dataRep["selectedOffering"].lenght));	
				if(departmentTitleArr[depLength].trim()==dataRep["selectedOffering"].substring(dataRep["selectedOffering"].indexOf('--')+2, dataRep["selectedOffering"].length)){
									
						var department = departmentCodeArr[depLength];
						
				}
			}	
			

			
			dataStr += "&departmentCode="+department;
			dataStr += "&facultyCode="+faculty;
			
			dataStr += "&programmeTypeCode="+programmeTypeCodeArr[dataRep["selectedProType"]-1];
			dataStr += "&degreeCode="+degreeCodeArr[dataRep["selectedProType"]-1];
			
			
			// for(proLength=0; proLength<programmeTypeTitleArr.length; proLength++){
					// //alert(dataRep["selectedProType"].substring(0, dataRep["selectedProType"].indexOf('--')));	
				// if(programmeTypeTitleArr[proLength]==dataRep["selectedProType"].substring(0, dataRep["selectedProType"].indexOf('--'))){
					// var programmeType = programmeTypeCodeArr[proLength];
					
				// }
			// }
		

			// for(degLength=0; degLength<degreeTitleArr.length; degLength++){
						// //alert(dataRep["selectedProType"].substring(dataRep["selectedProType"].indexOf('--'), dataRep["selectedProType"].lenght));	
				// if(degreeTitleArr[degLength].trim()==dataRep["selectedProType"].substring(dataRep["selectedProType"].indexOf('--')+2, dataRep["selectedProType"].length)){
									
						// var degree = degreeCodeArr[degLength];
						
				// }
			// }	
			
			// dataStr += "&programmeTypeCode="+programmeType;
			// dataStr += "&degreeCode="+degree;
			
			
			
			

			/*******************EDITED********************************************************************************************************/	
			// if(doc.selectedProType.value!=''){
				// for(typeCounter=0; typeCounter <programmeTypeTitleArr.length; typeCounter++){
					// if(doc.selectedProType.value == programmeTypeTitleArr[typeCounter]){
						// dataRep['selectedTypeCode'] = programmeTypeCodeArr[typeCounter];
					// }
				// }
			// }
			
			// dataStr += "&programmeTypeCode="+dataRep['selectedTypeCode'];//alert(dataRep['selectedTypeCode']);
			
			// if(doc.selectedDegreeCode.value!=''){
				// for(degreeCounter=0; degreeCounter <degreeTitleArr.length; degreeCounter++){
					// if(doc.selectedDegreeCode.value == degreeTitleArr[degreeCounter]){
						// dataRep['selectedDegreeCode'] = degreeCodeArr[degreeCounter];
					// }
				// }
			// }
			
			// dataStr += "&degreeCode="+dataRep['selectedDegreeCode'];alert(dataRep['selectedDegreeCode']);
			
		
		/**********************************************************************************************************************************/
			if(document.getElementById('selectedCheckbox'+courseLoop).checked == true){
                    courseStr += "&courseUnitCode="+courseUnitCodeArr[courseLoop];
               
			
				if(document.getElementById('typeCompusary'+courseLoop).checked == true){
						courseStr += "&type="+"Compulsory";
					}
				else if(document.getElementById('typeOptional'+courseLoop).checked == true){
						courseStr += "&type="+"Optional";
					}
			}
		
		courseTypeArr[courseLoop] = dataStr+courseStr; 
	//	alert(courseTypeArr[courseLoop]);
			
	}
	if(frm == 'addCourseUnit'){
            for(writeLoop=0; writeLoop<courseUnitCodeLength; writeLoop++){
                //alert(courseUnitCodeArr.length);
                if(courseTypeArr[writeLoop]!= "" || courseTypeArr[writeLoop]!= null){
                //alert(courseUnitTypeArr[writeLoop]+'--'+'second for');
                    isrHandle.getDataFromDB(eval("clientController"), "serverController.php", courseTypeArr[writeLoop]);
                }
            }
        }
}
			
 else{
    isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
    }    
        
    return 0;



}