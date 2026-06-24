dataRep['dobYYYY'] = dataRep['dobMM'] = dataRep['dobDD'] = dataRep['lecturertype'] = dataRep["lecturerNIC"] ="";
dataRep['selecteduniversity']="";

var MaleChecked="";
var FemaleChecked=""
var VisitingChecked = PermanentChecked ="";
/*----Calculate Date of Birth _ Starts*/
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
function calage2()
{
	doc = document.maintainLectureRegistration;
	var calday = doc.dobDD.options[doc.dobDD.selectedIndex].value;
	var calmon = doc.dobMM.options[doc.dobMM.selectedIndex].value;
	var calyear = doc.dobYYYY.options[doc.dobYYYY.selectedIndex].value;
	var curd = new Date(curyear,curmon-1,curday);
	var cald = new Date(calyear,calmon-1,calday);
	var diff =  Date.UTC(curyear,curmon,curday,0,0,0) - Date.UTC(calyear,calmon,calday,0,0,0);
	var dife = datediff(curd,cald);
	doc.lectureAge.value=dife[0]+" YY, "+dife[1]+" MM, "+dife[2]+" DD";
	dataRep['lectureAge'] = doc.lectureAge.value;
}
var doc = document.maintainLectureRegistration;
/*----Calculate Date of Birth _ Ends*/

function resetLecture(){
dataRep['lectureEMPno']=dataRep['lecturerPersonalTitle']=dataRep['lectureName']= dataRep['lectureGender']=dataRep['lectureDOB']= dataRep["lecturerNIC"] ="";
dataRep['lectureAge']=dataRep['lectureAddressL1']=dataRep['lectureAddressL2']=dataRep['lectureContactLan']="";
dataRep['lectureContactMobile']=dataRep['lectureContactEmail']= dataRep['lecturertype'] ="";
dataRep['dobYYYY'] = dataRep['dobMM'] = dataRep['dobDD'] ="";	
	sendForm('data4addLectureRegistration');

}







function formLectureRegistration(dsp)
 {
 title = " Add New Lecturer";

		str = "";

		if(dsp == "formLectureRegistration") 
		{
		
		
		
			str  = "<div id='addLecture'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainLectureRegistration" >';
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div> "
				
		    str += "<div style='float:left' >&nbsp;";
			DepartmentCodeStr="<option>Please scroll down to see the records</option>";
				
			for(deploop = 0; deploop<departmentCodeLength; deploop++) {
					//DepartmentCodeStr  += "<option>"+facultyTitleArr[deploop]+" of "+universityTitleArr[deploop]+"</option>";
				if (departmentTitleArr.indexOf(departmentTitleArr[deploop]) == departmentTitleArr.lastIndexOf(departmentTitleArr[deploop]) || (departmentTitleArr.indexOf(departmentTitleArr[deploop]) != departmentTitleArr.lastIndexOf(departmentTitleArr[deploop]) && departmentTitleArr.indexOf(departmentTitleArr[deploop])==deploop)){
			
					DepartmentCodeStr  += "<option>"+departmentTitleArr[deploop]+"--"+facultyTitleArr[deploop]+"--"+universityTitleArr[deploop]+"</option>";
				}
			}	
			str += "<select id='selecteduniversity' name='selecteduniversity' onchange='dataRep[this.id]=this.selectedIndex;'>";
			str += DepartmentCodeStr ;
			str += "</select></div>";
			str += "<br><br><center>";
			
			
			if(dataRep['lecturertype']== 'Visiting'){
			VisitingChecked = 'checked';
			} else if(dataRep['lecturertype']=='Permanent'){
			PermanentChecked = 'checked'}

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Type</div><div class='colon'>&nbsp;:&nbsp;</div> "
				
			str +="<div style='float:left' ><div style='clear:both'><div class='rdo' style='width:220px'>";
			str +='<span><input type="radio" name="lecturertype"  value= "Visiting" ';
			str +=VisitingChecked;
			str +=" onclick='dataRep[this.name]=this.value;' >Visiting</span>";
			str +="<span>&nbsp;&nbsp;&nbsp;</span>";
			str +='<span><input type="radio" name="lecturertype"  value= "Permanent"';
			str +=PermanentChecked;
			str +=" onclick='dataRep[this.name]=this.value;'>Permanent</span>";
			str +="<span>&nbsp;&nbsp;&nbsp;</div></div></div><span><br><br>";
			

			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Employee Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='lectureEMPno' id='lectureEMPno' value= '"+dataRep["lectureEMPno"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+">";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Employee NIC Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='lecturerNIC' id='lecturerNIC' value= '"+dataRep["lecturerNIC"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+">";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Designation</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='lecturerPersonalTitle' name='lecturerPersonalTitle'  value= '"+dataRep["lecturerPersonalTitle"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Full Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='lectureName'  id='lectureName' value= '"+dataRep["lectureName"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			
			
				if(dataRep["lectureGender"]== 'Male'){
					MaleChecked = 'checked';
				}else if(dataRep["lectureGender"]=='Female'){
					FemaleChecked = 'checked';
				}
				
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Gender</div><div class='colon'>&nbsp;:&nbsp;</div> "
				
			str +="<div style='float:left' ><div style='clear:both'><div class='rdo' style='width:220px'>";
			str +='<span><input type="radio" name="lectureGender"  value= "Male" ';
			str +=MaleChecked;
			str +=" onclick='dataRep[this.name]=this.value;' >Male</span>";
			str +="<span>&nbsp;&nbsp;&nbsp;</span>";
			str +='<span><input type="radio" name="lectureGender"  value= "Female"';
			str +=FemaleChecked;
			str +=" onclick='dataRep[this.name]=this.value;'>Female</span>";
			str +="<span>&nbsp;&nbsp;&nbsp;</div></div></div><span><br><br>";
		
			
			str +="<div class='longIdentifier'>Date of Birth</div><div class='colon'>&nbsp;:&nbsp;</div><div style='float:left' >";
			str += "<select name='dobYYYY' value='dobYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(1940, 2050, 4, dataRep['dobYYYY']);
			str += "</select>";
			str += "<select name='dobMM' value='dobMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['dobMM']);
			str += "</select>";
			str += "<select name='dobDD' value='dobDD'  onchange='dataRep[this.name]=this.value;calage2();' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['dobDD']);
			str += "</select></div></div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Age</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='lectureAge' id='lectureAge' value= '"+dataRep["lectureAge"].trim()+"'  onchange='dataRep[this.name]=this.value;' >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Address Line 1</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='lectureAddressL1' id='lectureAddressL1' value= '"+dataRep["lectureAddressL1"].trim()+"' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'> Address Line 2</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='lectureAddressL2' id='lectureAddressL2' value= '"+dataRep["lectureAddressL2"].trim()+"'   onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Contact Home</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='lectureContactLan' id='lectureContactLan'  value= '"+dataRep["lectureContactLan"].trim()+"'  maxLength='10' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Contact Mobile</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='lectureContactMobile' id='lectureContactMobile' value= '"+dataRep["lectureContactMobile"].trim()+"' maxLength='10' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Email Address</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='lectureContactEmail' id='lectureContactEmail' value= '"+dataRep["lectureContactEmail"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			str += "<br><br><center>";
			
			str += "<input type='button' class='btn' value='Save'  onclick=formLectureRegistrationsendForm('addLecture');>"; 
			str += "<input type='button' class='btn' value='Reset Values'  onclick='resetLecture();' >"; 
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formLecturerMenu'"+')>';
			
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
	
	function formLectureRegistrationvalidate(frm){
//alert("val awa");
		var error = 0;
		var pattn=/[^0123456789]/g;

		
		 if(frm == "addLecture" ){

			if(frm == "addLecture"){
				dsp = "formLectureRegistration";
			} 

			doc = document.maintainLectureRegistration;
			document.getElementById("msgArea").innerHTML = "";


			if(dataRep["lectureEMPno"].trim().length != 10){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : Lecture Employee Number with less than 10 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}				
			
			

			if(dataRep["lectureTitle"]==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : Lectutre designation with non-blank.</div>";
					error++;
				}
			}			


			if(dataRep["lectureName"]==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E003") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E003 : Lectutre name with non-blank.</div>";
					error++;
				}
			}	
			


			if(dataRep["lectureGender"]==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E004") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E004 : Lectutre gender with non-blank.</div>";
					error++;
				}
			}	



			if(dataRep["lectureAge"]==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E005") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E005 : Lectutre age with non-blank.</div>";
					error++;
				}
			}	



			if(dataRep["lectureAddressL1"]==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E006") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E006 : Lectutre address line 01 with non-blank.</div>";
					error++;
				}
			}	



			if(dataRep["lectureAddressL2"]==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E007") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E007 : Lecture address line 02 with non-blank.</div>";
					error++;
				}
			}



			// if(dataRep["lectureContactLan"].trim() != "" && (pattn.test(dataRep["lectureContactLan"]) ||
			   // dataRep["lectureContactLan"].trim().substring(0,1) != "0" || 
			   // dataRep["lectureContactLan"].trim().length != 10)) {
				// if((document.getElementById("msgArea").innerHTML).indexOf("E008") == -1){
				 
					// document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E008 : Incorrect Telephone number.</div>";
					// error++;
				// }

			// }



			// if(dataRep["lectureContactMobile"].trim() != "" && (pattn.test(dataRep["lectureContactMobile"]) ||
			   // dataRep["lectureContactMobile"].trim().substring(0,1) != "0" || 
			   // dataRep["lectureContactMobile"].trim().length != 10)) {
				// if((document.getElementById("msgArea").innerHTML).indexOf("E009") == -1){
					// document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E009 : Incorrect Telephone number.</div>";
					// error++;
				// }

			// }

			
			
			
			
			if(dataRep["lectureContactEmail"]==""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E010") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E010 : Lecture contact email with non-blank.</div>";
					error++;
				}
			}
	}		

		if(error > 0 && error != ""){
			showMenu(dsp);
		} else {
			formLectureRegistrationsendForm(frm);
		}
		
}

	
	function formLectureRegistrationsendForm(frm){

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

		if(frm == 'addLecture'){
 
			doc = document.maintainLectureRegistration;
			dataStr += "&interface="+frm;
			dataStr += "&lecturerEmpNo="+dataRep["lectureEMPno"];
			dataStr += "&lecturerNIC="+dataRep["lecturerNIC"];
			dataStr += "&lecturerPersonalTitle="+dataRep["lecturerPersonalTitle"];
			dataStr += "&lecturerName="+dataRep["lectureName"];	
			dataStr += "&lecturerSex="+dataRep["lectureGender"];
			dataStr += "&lecturerDateofbirth="+doc.dobYYYY.value+"/"+doc.dobMM.value+"/"+doc.dobDD.value;
			dataStr += "&lecturerAge="+dataRep["lectureAge"];
			dataStr += "&lecturerAddressLine01="+dataRep["lectureAddressL1"];
			dataStr += "&lecturerAddressLine02="+dataRep["lectureAddressL2"];
			dataStr += "&lecturerContactLand01="+dataRep["lectureContactLan"];
			dataStr += "&lecturerContactMobile01="+dataRep["lectureContactMobile"];
			dataStr += "&lecturerContactEmail="+dataRep["lectureContactEmail"];
			
			dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversity"]-1];
			dataStr += "&facultyCode="+facultyCodeArr[dataRep["selecteduniversity"]-1];
			dataStr += "&departmentCode="+departmentCodeArr[dataRep["selecteduniversity"]-1];
			dataStr += "&registered="+"yes";
			dataStr += "&lecturertype="+dataRep['lecturertype'];
			//alert(dataStr);
			
			
		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
}
	
	
	
	
