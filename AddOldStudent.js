dataRep["selectedprogrammeType"]= dataRep['selecteduniversity'] = "";
dataRep["selectedDegree"] = dataRep['applicationNo'] =""; "";
dataRep["tempNo"] = "";
		dataRep["renewalRegistrationFee"]=dataRep["annualBenchFee"]=dataRep['convocationFee']="";
var MaleChecked="";
var FemaleChecked=""

/*----Calculate Date of Birth _ Starts  test*/
var dat = new Date();
var curday = dat.getDate();
var curmon = dat.getMonth()+1;
var curyear = dat.getFullYear();

function DaysInMonth(Y, M) {
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}
function datediff(date1, date2) {
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
	 y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();
    if (d1 < d2) {
        m1--;
        d1 += DaysInMonth(y2, m2);
    }
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}
function calAge(){
	var doc = document.maintainformAddOldStudent;
	var calday = doc.dobDD.options[doc.dobDD.selectedIndex].value;
	var calmon = doc.dobMM.options[doc.dobMM.selectedIndex].value;
	var calyear = doc.dobYYYY.options[doc.dobYYYY.selectedIndex].value;
	var curd = new Date(curyear,curmon-1,curday);
	var cald = new Date(calyear,calmon-1,calday);
	var diff =  Date.UTC(curyear,curmon,curday,0,0,0) - Date.UTC(calyear,calmon,calday,0,0,0);
	var dife = datediff(curd,cald);
	doc.studentAge.value=dife[0]+" YY, "+dife[1]+" MM, "+dife[2]+" DD";
	dataRep['studentAge'] = doc.studentAge.value;
}
var doc = document.maintainformAddOldStudent;
/*----Calculate Date of Birth _ Ends*/



function callNextFunctionFormTwo(){
//alert("ok");
	 sendForm('data4addOldStudentFormTwo');
	 
	 sendForm('data4LecturerStudentFormTwo');
	 
	
		for(i = 0; i<studentNICLength; i++) { 
		//alert("ok123");
			if(studentNICArr[i] == dataRep["studentNIC"]){
			//alert(dataRep["degreeCode"]);
			
			//alert(dataRep["degreeTitle"]);
		
				dataRep["studentName"]=studentNameArr[i];
				dataRep["studentNo"]=studentNoArr[i];
				dataRep["degreeCode"]=degreeCodeArr[i];
				dataRep["degreeTitle"]=degreeTitleArr[i];
				

			} 
		}
}






	
	function formAddOldStudent(dsp){
		title = "Add Student Details";
		str = "";
var SelectedYear ="";
		var RevVenChecked = DrChecked = MrChecked = MrsChecked = MissChecked = "";
			var maleChecked = femaleChecked = correspondenceofficeChecked = correspondencehomeChecked ="";
		if(dsp== "addOldStudentOne"){// || dsp == "addOldStudentTwo"){
		
		
		
			str  = "<div id='addOldStudentOne'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
		

			str += "<div style='clear:both'>";
			
		if(dsp== "addOldStudentOne"){
			str += '<form name="maintainformAddOldStudent" >';
            str += "<div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			

			DepartmentCodeStr="<option>Please scroll down to see the records</option>";
				
				for(var deploop = 0; deploop<facultyCodeLength; deploop++){
					//DepartmentCodeStr  += "<option>"+facultyTitleArr[deploop]+" of "+universityTitleArr[deploop]+"</option>";
					//if (departmentTitleArr.indexOf(departmentTitleArr[deploop])== departmentTitleArr.lastIndexOf(departmentTitleArr[deploop]) || (departmentTitleArr.indexOf(departmentTitleArr[deploop])!= departmentTitleArr.lastIndexOf(departmentTitleArr[deploop]) && departmentTitleArr.indexOf(departmentTitleArr[deploop])== deploop)){
				
						DepartmentCodeStr  += "<option>"+facultyTitleArr[deploop]+"-"+universityTitleArr[deploop]+"</option>";
					//}	
				}
				
				str += "<select id='selecteduniversity' name='selecteduniversity'     onchange='dataRep[this.id]=this.selectedIndex; '>";
				str += DepartmentCodeStr ;
				str += "</select></div>";

			
			str += "<div class='longIdentifier'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
				
			programmeTypeCodeStr = "<option>Please scroll down to see the records</option>";
	
			for(var proLoop = 0; proLoop<programmeTypeCodeLength; proLoop++) {
				if (degreeTitleArr.indexOf(degreeTitleArr[proLoop])== degreeTitleArr.lastIndexOf(degreeTitleArr[proLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[proLoop])!= degreeTitleArr.lastIndexOf(degreeTitleArr[proLoop]) && degreeTitleArr.indexOf(degreeTitleArr[proLoop])== proLoop)){
					programmeTypeCodeStr += "<option>"+programmeTypeTitleArr[proLoop]+"--"+degreeTitleArr[proLoop]+"</option>";
				}
			}

			str += "<select id='selectedprogrammeType' name='selectedprogrammeType' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += programmeTypeCodeStr ;
			str += "</select></div>";
			
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>Application No</div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// str += "<input type='text' name='applicationNo'  id='applicationNo' value= '"+dataRep["applicationNo"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			// str += "</div>";
		
		
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Student NIC Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='studentNIC' name='studentNIC'  value= '"+dataRep["studentNIC"].trim()+"' maxLength='10' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Student Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentNo'  id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Full Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentName'  id='studentName' value= '"+dataRep["studentName"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Name with Initials(in English Block Letters)</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";

			
			if(dataRep['studentPersonalTitle']=='Rev/Ven'){
			RevVenChecked = 'checked';
			} else if(dataRep['studentPersonalTitle']=='Dr'){
			DrChecked = 'checked';
			} else if(dataRep['studentPersonalTitle']=='Mr'){
			MrChecked = 'checked';
			} else if(dataRep['studentPersonalTitle']=='Mrs'){
			MrsChecked = 'checked';
			} else if(dataRep['studentPersonalTitle']=='Miss'){
			MissChecked = 'checked';
			}
			
		
			
			str +="<div style='float:left' ><div style='clear:both'><div class='rdo' style=''>";
			str +='<span><input type="radio" name="studentPersonalTitle"  value= "Rev/Ven" ';
			str +=RevVenChecked;
			str +=" onclick='dataRep[this.name]=this.value;' >Rev./Ven.</span>";
			str +="<span>&nbsp;&nbsp;</span>";
			str +='<span><input type="radio" name="studentPersonalTitle"  value= "Dr" ';
			str +=DrChecked;
			str +=" onclick='dataRep[this.name]=this.value;' >Dr.</span>";
			str +="<span>&nbsp;&nbsp;</span>";
			str +='<span><input type="radio" name="studentPersonalTitle"  value= "Mr" ';
			str +=MrChecked;
			str +=" onclick='dataRep[this.name]=this.value;' >Mr.</span>";
			str +="<span>&nbsp;&nbsp;</span>";
			str +='<span><input type="radio" name="studentPersonalTitle"  value= "Mrs" ';
			str +=MrsChecked;
			str +=" onclick='dataRep[this.name]=this.value;' >Mrs.</span>";
			str +="<span>&nbsp;&nbsp;</span>";
			str +='<span><input type="radio" name="studentPersonalTitle"  value= "Miss"';
			str +=MissChecked;
			str +=" onclick='dataRep[this.name]=this.value;'>Miss</span>";
			str +="<span>&nbsp;&nbsp;</div></div></div><span>";

			str+="<br><input type='text' name='studentInitial'   size='150'value='"+dataRep['studentInitial']+"' "+fieldDisabled+" onchange='dataRep[this.name]=this.value;'><br><br></div>";

			
			
			
			
				if(dataRep["studentSex"]== 'Male'){
					MaleChecked = 'checked';
				}else if(dataRep["studentSex"]=='Female'){
					FemaleChecked = 'checked';
				}
				
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Gender</div><div class='colon'>&nbsp;:&nbsp;</div> "
				
			str +="<div style='float:left' ><div style='clear:both'><div class='rdo' style='width:220px'>";
			str +='<span><input type="radio" name="studentSex"  value= "Male" ';
			str +=MaleChecked;
			str +=" onclick='dataRep[this.name]=this.value;' >Male</span>";
			str +="<span>&nbsp;&nbsp;&nbsp;</span>";
			str +='<span><input type="radio" name="studentSex"  value= "Female"';
			str +=FemaleChecked;
			str +=" onclick='dataRep[this.name]=this.value;'>Female</span>";
			str +="<span>&nbsp;&nbsp;&nbsp;</div></div></div><span><br><br>";
		
			str +="<div class='longIdentifier'>Date of Birth</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='dobYYYY' value='dobYYYY'  onchange='dataRep[this.name]=this.value;'  class='dateSelect'>";
			str += generateNumberOptions(1970, 2050, 4, dataRep['dobYYYY']);
			str += "</select>";
			str += "<select name='dobMM' value='dobMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['dobMM']);
			str += "</select>";
			str += "<select name='dobDD' value='dobDD'  onchange='dataRep[this.name]=this.value;calAge();' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['dobDD']);
			str += "</select></div></div>";
				
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Age</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentAge' id='studentAge' value= '"+dataRep["studentAge"].trim()+"' onchange='dataRep[this.name]=this.value;' >";
			str += "</div>";
			
						str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nationality</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='studentNationality' name='studentNationality'  value= '"+dataRep["studentNationality"]+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Citizenship</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='studentCitizenship' name='studentCitizenship'  value= '"+dataRep["studentCitizenship"]+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Employment</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='studentEmployment' name='studentEmployment'  value= '"+dataRep["studentEmployment"]+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
					
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Permanent Address</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='studentPermanentAddress' name='studentPermanentAddress'  value= '"+dataRep["studentPermanentAddress"]+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Office Address</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='studentOfficeAddress' name='studentOfficeAddress'  value= '"+dataRep["studentOfficeAddress"]+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
				
			if(dataRep['correspondence']=='correspondenceoffice'){
					correspondenceofficeChecked = 'checked';
					} else if(dataRep['correspondence']=='correspondencehome'){
					correspondencehomeChecked = 'checked';
					} 
				
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Address for correspondence</div><div class='colon'>&nbsp;:&nbsp;</div> "		
			
			str +="<div style='float:left' ><div style='clear:both'><div class='rdo' style='width:220px'>";
			str +='<span><input type="radio" name="correspondence"  value= "Office" ';
			str +=correspondenceofficeChecked;
			str +=" onclick='dataRep[this.name]=this.value;' >Office</span>";
			str +="<span>&nbsp;&nbsp;&nbsp;</span>";
			str +='<span><input type="radio" name="correspondence"  value= "Home"';
			str +=correspondencehomeChecked;
			str +=" onclick='dataRep[this.name]=this.value;'>Home</span>";
			str +="<span>&nbsp;&nbsp;&nbsp;</div></div></div><span><br><br>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Telephone</div>"
			str += "<div>&nbsp;";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;Home</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentContactLan' id='studentContactLan'  value= '"+dataRep["studentContactLan"].trim()+"'  maxLength='10' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;Mobile</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentContactMobile' id='studentContactMobile' value= '"+dataRep["studentContactMobile"].trim()+"'  maxLength='10' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "</div></div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Email Address</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentContactEmail' id='studentContactEmail' value= '"+dataRep["studentContactEmail"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			str += "</div>";
		
		}	
			

			str += "<center>";
			str += "<div style='margin-top:50px;clear:both;'>";
			str += "<input type='button' class='btn' value='Save' id='save'  onclick=formAddOldStudentsendForm('addOldStudentOne');>"; 
			
			str += '<input type="button" class="btn" id="next" value = "Next" onclick = callNextFunctionFormTwo();>';

			str += '<input type="button" class="btn" value = "Return To Clerk Menu" onclick = showMenu('+"'formClerkMenu'"+');>';
			
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
	
	
	

	

	function formAddOldStudentsendForm(frm){

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

			
			if(frm == 'addOldStudentOne'){	
				doc = document.maintainformAddOldStudent;
				dataStr += "&interface="+frm;
				

				dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversity"]-1];
				dataStr += "&facultyCode="+facultyCodeArr[dataRep["selecteduniversity"]-1];
				dataStr += "&programmeTypeCode="+programmeTypeCodeArr[dataRep["selectedprogrammeType"]-1];
				dataStr += "&degreeCode="+degreeCodeArr[dataRep["selectedprogrammeType"]-1];

				dataStr += "&studentNIC="+dataRep["studentNIC"];
				dataStr += "&studentName="+dataRep["studentName"];
				dataStr += "&studentNo="+dataRep["studentNo"];			
				dataStr += "&studentPersonalTitle="+dataRep["studentPersonalTitle"];
				dataStr += "&studentInitial="+dataRep["studentInitial"];
				dataStr += "&studentSex="+dataRep["studentSex"];
				dataStr += "&studentAge="+dataRep["studentAge"];
				dataStr += "&studentDateofbirth="+doc.dobYYYY.value+"/"+doc.dobMM.value+"/"+doc.dobDD.value;//alert(dataStr);
				dataStr += "&studentNationality="+dataRep["studentNationality"];
				dataStr += "&studentCitizenship="+dataRep["studentCitizenship"];
				dataStr += "&studentEmployment="+dataRep["studentEmployment"];
				dataStr += "&studentPermanentAddress="+dataRep["studentPermanentAddress"];
				dataStr += "&studentOfficeAddress="+dataRep["studentOfficeAddress"];
				dataStr += "&correspondence="+dataRep["correspondence"];
				dataStr += "&studentContactLan="+dataRep["studentContactLan"];
				dataStr += "&studentContactMobile="+dataRep["studentContactMobile"];
				dataStr += "&studentContactEmail="+dataRep["studentContactEmail"];
				dataStr += "&registered="+"yes";
			//alert(dataStr);	
			
			
			//}
			isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
			}	

}
	
	
	
	
