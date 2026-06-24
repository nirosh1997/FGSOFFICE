dataRep['studentPersonalTitle'] = dataRep['studentInitial'] = dataRep["studentNationality"] = dataRep["studentEmployment"] = "";
dataRep["studentCitizenship"] = dataRep["studentPermanentAddress"] = dataRep["studentOfficeAddress"] = dataRep['correspondence'] ="";
dataRep["selectedprogrammeType"] =  dataRep["studentDateofbirth"] ="";
dataRep["studentName"] ="";

dataRep['temporaryNo']="";

function displaybutton(){
if(document.getElementById('save')){
document.getElementById('edit').style.display='block';
}
if(document.getElementById('edit')){
document.getElementById('save').style.display='none';
document.getElementById('save2').style.display='block';

}
}




function callNextFunctionApplicationTwo(){
//alert("ok");
	 sendForm('data4ApplicationFormTwo');
	 
	
		for(i = 0; i<studentNICLength; i++) { 
		//alert("ok123");
			if(studentNICArr[i] == dataRep["studentNIC"]){
		//	alert("ok456");
		
				dataRep["applicationNo"]=applicationNoArr[i];
				dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];

			} 
		}
}


function callNextFunctionEditApplicationForm(){
//alert("ok");
	 sendForm('data4EditApplicationForm');
	 
		for(i = 0; i<studentNICLength; i++) { 
		//alert("ok123");
			if(studentNICArr[i] == dataRep["studentNIC"]){
		//	alert("ok456");
		
				dataRep["applicationNo"]=applicationNoArr[i];
				dataRep["studentName"]=studentNameArr[i];
				dataRep["studentPersonalTitle"]=studentPersonalTitleArr[i];
				dataRep["studentInitial"]=studentInitialArr[i];
				dataRep["studentDateofbirth"]=studentDateofbirthArr[i];
				dataRep["studentNationality"]=studentNationalityArr[i];
				dataRep["studentCitizenship"]=studentCitizenshipArr[i];
				dataRep["studentEmployment"]=studentEmploymentArr[i];
				dataRep["studentPermanentAddress"]=studentPermanentAddressArr[i];
				dataRep["studentOfficeAddress"]=studentOfficeAddressArr[i];
				dataRep["correspondence"]=correspondenceArr[i];
				dataRep["studentContactLan"]=studentContactLanArr[i];
				dataRep["studentContactMobile"]=studentContactMobileArr[i];
				dataRep["studentContactEmail"]=studentContactEmailArr[i];

			} 
		}
}


function generateApplicationNo(){
//alert("ok");
document.getElementById('applicationNo').value = dataRep["degreeCode"]+"/"+dataRep["studentNIC"]+"/"+ + year;

dataRep['applicationNo'] =document.getElementById('applicationNo').value; 

// sendForm('data4ApplicationNo');

		// for(i = 0; i<maxapplicationNoArr.length; i++){
			
			// dataRep['applicationNo'] = maxapplicationNoArr[i];
		
			// if(dataRep['applicationNo']!=''){
			
				// var num = (parseInt(dataRep['applicationNo'].substring(0,5))+1).toString();
				// var newTCode = "";
		
				// for(var tCnt=1; tCnt< 6-(num.toString()).length; tCnt++){
					// newTCode += "0";
				
				// }			
					// newTCode += num.toString()+"/" + year;
					// dataRep['applicationNo'] = newTCode;
				
			// }
		// }
}


function formApplicationForm(dsp){

title1 ="UNIVERSITY OF KELANIYA, FACULTY OF GRADUATE STUDIES" 

title = "Application Form";
		str = "";

		if(dsp == "addApplicationForm" || dsp == "updateApplicationForm"){
				
			if(dsp == "updateApplicationForm"){
				
				keyDisabled = "Disabled";
				
			}

			keyDisabled = "Disabled";	

			var RevVenChecked = DrChecked = MrChecked = MrsChecked = MissChecked = "";
			var maleChecked = femaleChecked = correspondenceofficeChecked = correspondencehomeChecked ="";

			str  = "<div id='addApplicationForm'>";
			str += "<table  ><tr><td>"
			str += '</br><h10><center><font color="#bd3303">'+title1+'</font></center></h10></br>';
			str += '<center><font color="#bd3303">'+title+'</font></center></br>';
			str += '<center><font color="#bd3303">'+dataRep["degreeTitle"]+'</font></center>';
		
			
			str +="<div style='float:left;width:100%;'>";
			str +="<div style='float:right;padding:15px;'>";
			str +="<div class='longIdentifier' style='float:left;'>Application No:</div>";
			str += "<input style='width: 150px;'  type='text' name='applicationNo' id='applicationNo' value= '"+dataRep['applicationNo']+"'  "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' '></div>";
			str +="</div></div>";
			
			str +="<div style='float:left;width:100%;'>";
			str +="<div style='float:right;padding:15px;'>";
			str +="<div class='longIdentifier' style='float:left;'>Temporary No:</div>";
			str += "<input style='width: 150px;'  type='text' name='temporaryNo' id='temporaryNo' value= '"+dataRep['temporaryNo']+"'  "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' '></div>";
			str +="</div></div>";
			
			
			
			str +="<div style='clear:both'>";
			str +='<hr>';
			str += '<form name="maintainStudentApplication" >';

			//	str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
				
			// programmeTypeCodeStr = "<option>Please scroll down to see the records</option>";
	
			// for(var proLoop = 0; proLoop<programmeTypeCodeLength; proLoop++) {
				// if (degreeTitleArr.indexOf(degreeTitleArr[proLoop])== degreeTitleArr.lastIndexOf(degreeTitleArr[proLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[proLoop])!= degreeTitleArr.lastIndexOf(degreeTitleArr[proLoop]) && degreeTitleArr.indexOf(degreeTitleArr[proLoop])== proLoop)){
					// programmeTypeCodeStr += "<option>"+programmeTypeTitleArr[proLoop]+"--"+degreeTitleArr[proLoop]+"</option>";
				// }
			// }

			// str += "<select id='selectedprogrammeType' name='selectedprogrammeType' onchange='dataRep[this.id]=this.selectedIndex;'>";
			// str += programmeTypeCodeStr ;
			// str += "</select></div>";
			
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>Programme</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='programmeTypeTitle'>"+dataRep["programmeTypeCode"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
			
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Code</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeCode'>"+dataRep["degreeCode"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
			
			
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>Faculty Code</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='facultyCode'>"+dataRep["facultyCode"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
			
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>Department Code</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeCode'>"+dataRep["departmentCode"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
			
			// str +="<div style='clear:both'>";
			// str +="<div class='longIdentifier' style='clear:none;'>Degree</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// str +="<div style='float:left' >&nbsp;";
			// str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			// str +="<div class=hideLabel>&nbsp;</div>";
			// str +="</div>";
			
			

			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>Application No</div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// //str += "<input type='text' name='applicationNo'  id='applicationNo' value= '"+dataRep['applicationNo'].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			// str += "<input style='width: 100px'  type='text' name='applicationNo' id='applicationNo' value= '"+dataRep['applicationNo']+"'  "+fieldDisabled+" onchange='dataRep[this.name]=this.value;' onclick='generateApplicationNo();' ></div>";
			// str += "</div>";
			
			
			
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Name in Full(in English Block Letters)</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentName'  id='studentName' value= '"+dataRep["studentName"]+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
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

			str +="<div class='longIdentifier'>Date of Birth</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='dobYYYY' value='dobYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(1970, 2050, 4, dataRep['dobYYYY']);
			str += "</select>";
			str += "<select name='dobMM' value='dobMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['dobMM']);
			str += "</select>";
			str += "<select name='dobDD' value='dobDD'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['dobDD']);
			str += "</select></div></div>";
			
			// if(dataRep["studentSex"]== 'Male'){
			// MaleChecked = 'checked';
			// }else if(dataRep["studentSex"]=='Female'){
			// FemaleChecked = 'checked';
			// }
		
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>Gender</div><div class='colon'>&nbsp;:&nbsp;</div> "
				
			// str +="<div style='float:left' ><div style='clear:both'><div class='rdo' style='width:220px'>";
			// str +='<span><input type="radio" name="studentSex"  value= "Male" ';
			// str +=MaleChecked;
			// str +=" onclick='dataRep[this.name]=this.value;' >Male</span>";
			// str +="<span>&nbsp;&nbsp;&nbsp;</span>";
			// str +='<span><input type="radio" name="studentSex"  value= "Female"';
			// str +=FemaleChecked;
			// str +=" onclick='dataRep[this.name]=this.value;'>Female</span>";
			// str +="<span>&nbsp;&nbsp;&nbsp;</div></div></div><span><br><br>";
					
					
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Student NIC Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='studentNIC' name='studentNIC'  value= '"+dataRep["studentNIC"]+"' maxLength='10' onchange='dataRep[this.name]=this.value;generateApplicationNo();' "+fieldDisabled+" >";
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
			str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentContactLan' id='studentContactLan'  value= '"+dataRep["studentContactLan"]+"'  maxLength='10' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentContactMobile' id='studentContactMobile' value= '"+dataRep["studentContactMobile"]+"'  maxLength='10' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "</div></div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Email Address</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentContactEmail' id='studentContactEmail' value= '"+dataRep["studentContactEmail"]+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
	
			str += "<br><br><center>";
			
			
			//str += "<input type='button' class='btn' value='Save' id='save'  onclick=formApplicationFormsendForm('addApplicationForm');resetValuesApplication();>";
			
			str += "<input type='button' class='btn' value='Save' id='save'  onclick=formApplicationFormsendForm('addApplicationForm');displaybutton();>";
			
			str += "<input type='button' class='btn' value='Save' id='save2'  style='display:none;'  onclick=formApplicationFormsendForm('updateApplicationForm');>";
			
			
			str += "<input type='button' class='btn' value='Edit' id='edit'  style='display:none;'  onclick=callNextFunctionEditApplicationForm();displaybutton();>";

			//str +='<a href="http://selectpdf.com/save-as-pdf"><img src="http://selectpdf.com/buttons/save-as-pdf3.gif"/></a> ';
			
			//this link open a pdf but blank page//

			//str +='<a href="http://www.web2pdfconvert.com/convert">Save to PDF</a>';
			//str +='<a href="http://www.htm2pdf.co.uk/display?width=300">Save as PDF</a>';
			
			//str +='<a href="http://pdfmyurl.com/saveaspdf">Save this page as PDF</a>'; //only for http refers
			
			str += '<input type="button" class="btn" value = "Next" onclick = callNextFunctionApplicationTwo();>';
		
			
			//str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+');>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
			
		}

		return str;
	}
	
	
	
function formApplicationFormsendForm(frm){

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

		if(frm == 'addApplicationForm' || frm == 'updateApplicationForm'){
 
			doc = document.maintainStudentApplication;
			dataStr += "&interface="+frm;
			
			dataStr += "&universityCode="+"KLN";
			dataStr += "&facultyCode="+dataRep["facultyCode"];
			
			//dataStr += "&departmentCode="+dataRep["departmentCode"];
			
			// dataStr += "&programmeTypeCode="+programmeTypeCodeArr[dataRep["selectedprogrammeType"]-1];
			// dataStr += "&degreeCode="+degreeCodeArr[dataRep["selectedprogrammeType"]-1];//alert(degreeCodeArr[doc.selectedDegree.selectedIndex]);
			
			dataStr += "&programmeTypeCode="+dataRep["programmeTypeCode"];
			dataStr += "&degreeCode="+dataRep["degreeCode"];
			dataStr += "&studentNIC="+dataRep["studentNIC"];
			dataStr += "&applicationNo="+document.getElementById('applicationNo').value;
			dataStr += "&temporaryNo="+dataRep["temporaryNo"];
			
			dataStr += "&studentName="+dataRep["studentName"];	
			dataStr += "&studentPersonalTitle="+dataRep["studentPersonalTitle"];
			dataStr += "&studentInitial="+dataRep["studentInitial"];
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
//alert(dataStr);
		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);

		return 0;
		
}