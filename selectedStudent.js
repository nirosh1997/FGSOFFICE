dataRep["selectedprogrammeType"]= dataRep['selecteduniversity'] = "";
dataRep["selectedDegree"] = dataRep['applicationNo'] =""; "";
dataRep["tempNo"] = "";
		dataRep["renewalRegistrationFee"]=dataRep["annualBenchFee"]=dataRep['convocationFee']="";
var MaleChecked="";
var FemaleChecked=""

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
function calculateage(){
	var doc = document.maintainSelectedStudent;
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
var doc = document.maintainSelectedStudent;
/*----Calculate Date of Birth _ Ends*/


function refreshSelectedStudent(){

	dataRep["studentNIC"] = dataRep["applicationNo"] = dataRep["studentName"] = dataRep["studentSex"] = "";
	dataRep['dobYYYY'] = dataRep['dobMM'] = dataRep['dobDD'] ="";
	dataRep["studentAge"] = dataRep["studentPermanentAddress"]=dataRep["studentAddressLine02"]=dataRep["studentContactLan"]=dataRep["studentContactMobile"]=dataRep["studentContactEmail"]="";
	dataRep["selectedprogrammeType"]= dataRep['selecteduniversity'] = "";
	MaleChecked = FemaleChecked = "";
	//var DepartmentCodeStr = programmeTypeCodeStr = "";
	sendForm('data4addSelectedStudent');
	sendForm('data4SelectedStudent');
	
	}
	
// function callNextFunctionVoucher(){
	// sendForm('data4VoucherDetails');
	// sendForm('data4VoucherDetails2');
	// sendForm('data4VoucherId');

		// for(i = 0; i<studentNICLength; i++) { 
			// if(studentNICArr[i] == dataRep["studentNIC"]){
		
						// dataRep["studentName"]=studentNameArr[i];
						// dataRep["universityCode"]=universityCodeArr[i];
						// dataRep["universityTitle"]=universityTitleArr[i];
						// dataRep["facultyCode"]=facultyCodeArr[i];
						// dataRep["facultyTitle"]=facultyTitleArr[i];
						// dataRep["departmentCode"]=departmentCodeArr[i];
						// dataRep["departmentTitle"]=departmentTitleArr[i];
						// dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
						// dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
						// dataRep["degreeCode"]=degreeCodeArr[i];
						// dataRep["degreeTitle"]=degreeTitleArr[i];
						
						// dataRep["batchNo"]=batchNoArr[i];
						// dataRep["academicYear"]=academicYearArr[i];
						// dataRep["calenderYear"]=calenderYearArr[i];
						// dataRep["extendedDuration"]=extendedDurationArr[i];
						// dataRep["commenceDate"]=commenceDateArr[i];
						// dataRep["fullpaymentDeadlineDate"]=fullpaymentDeadlineDateArr[i];
						// dataRep['halfpaymentDeadlineDate']=halfpaymentDeadlineDateArr[i];
						// dataRep['invoiceNo']=invoiceNoArr[i];
						
						// dataRep["voucherId"]=voucherIdArr[i];
						// dataRep['rate1']=rate1Arr[i];
						// dataRep['categoryCode']= categoryCodeArr[i];
						// dataRep['categoryTitle']= categoryTitleArr[i];
						
						// // if(invoiceNoArr.length!=0){
						// // var num=parseInt(invoiceNoArr[invoiceNoArr.length-1]);
						// // num=num+1;	
						// // dataRep['invoiceNo']=num;
						// // }
						// // else{
						// // //alert("vcv");
						// // var num=parseInt('1');
						// // dataRep['invoiceNo']=num;
						// // }
			// } 
		// }

	// sendForm('data4VoucherDetails');

	
// }


function callNextFunctionVoucher(){
	 sendForm('data4VoucherDetails');
	 sendForm('data4VoucherDetails2');
	
		for(i = 0; i<studentNICLength; i++) { 
			if(studentNICArr[i] == dataRep["studentNIC"]){
		
				dataRep["studentName"]=studentNameArr[i];
				dataRep["universityCode"]=universityCodeArr[i];
				dataRep["universityTitle"]=universityTitleArr[i];
				dataRep["facultyCode"]=facultyCodeArr[i];
				dataRep["facultyTitle"]=facultyTitleArr[i];
				dataRep["departmentCode"]=departmentCodeArr[i];
				dataRep["departmentTitle"]=departmentTitleArr[i];
				dataRep["programmeTypeCode"]=programmeTypeCodeArr[i];
				dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
				dataRep["degreeCode"]=degreeCodeArr[i];
				dataRep["degreeTitle"]=degreeTitleArr[i];
				
				dataRep["batchNo"]=batchNoArr[i];
				dataRep["academicYear"]=academicYearArr[i];
				dataRep["calenderYear"]=calenderYearArr[i];
				dataRep["extendedDuration"]=extendedDurationArr[i];
				dataRep["commenceDate"]=commenceDateArr[i];
				dataRep["fullpaymentDeadlineDate"]=fullpaymentDeadlineDateArr[i];
				dataRep['halfpaymentDeadlineDate']=halfpaymentDeadlineDateArr[i];
				dataRep['invoiceNo']=invoiceNoArr[i];
				
				dataRep["voucherId"]=voucherIdArr[i];
				dataRep['rate1']=rate1Arr[i];
				dataRep['categoryCode']= categoryCodeArr[i];
				dataRep['categoryTitle']= categoryTitleArr[i];
				dataRep["budgetId"]=budgetIdArr[i];
			} 
		}

			if(invoiceNoArr.length!=0) 
			{
			var num=parseInt(invoiceNoArr[invoiceNoArr.length-1]);
			//alert(num);
			num=num+1;	
			dataRep['invoiceNo']=num;
			//alert(num);
			}
		
			else
			{
			var num=parseInt('1');
			dataRep['invoiceNo']=num;
			}
 
	
	sendForm('data4VoucherId');

}

	
	function formSelectedStudentRegistration(dsp){
		title = "Register Student for a Degree Programme";
		str = "";

		//if(dsp == "formSelectedStudentRegistration") {
		if(dsp == "addSelectedStudent" || dsp == "updateSelectedStudent"){
				
			if(dsp == "updateSelectedStudent"){
				
				keyDisabled = "Disabled";
				
			}
		
		
			str  = "<div id='addSelectedStudent'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainSelectedStudent" >';

			str += "<div style='clear:both'>";
			
		if(dsp == "addSelectedStudent"){
            str += "<div class='longIdentifier'>University</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			

			DepartmentCodeStr="<option>Please scroll down to see the records</option>";
				
				for(var deploop = 0; deploop<departmentCodeLength; deploop++){
					//DepartmentCodeStr  += "<option>"+facultyTitleArr[deploop]+" of "+universityTitleArr[deploop]+"</option>";
					if (departmentTitleArr.indexOf(departmentTitleArr[deploop])== departmentTitleArr.lastIndexOf(departmentTitleArr[deploop]) || (departmentTitleArr.indexOf(departmentTitleArr[deploop])!= departmentTitleArr.lastIndexOf(departmentTitleArr[deploop]) && departmentTitleArr.indexOf(departmentTitleArr[deploop])== deploop)){
				
						DepartmentCodeStr  += "<option>"+departmentTitleArr[deploop]+"-"+facultyTitleArr[deploop]+"-"+universityTitleArr[deploop]+"</option>";
					}	
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
			// str += "<div class='longIdentifier'>Batch No</div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// str += "<input type='text' name='batchNo' id='batchNo' value= '"+batchNoArr[0]+"' onchange='dataRep[this.name]=this.value' "+keyDisabled+">";
			// str += "</div>"
			
		}
		
		if(dsp != "addSelectedStudent"){
		
			tr += "<div class='hiddenInfo'>";
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
			str += "<div class='longIdentifier'>Programme Type</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div class='viewArea'>&nbsp;"+dataRep["degreeCode"].trim()+"&nbsp;&nbsp;&nbsp;&nbsp;"+dataRep["degreeTitle"]+"</div>";
			str += "</div>"
		
		}
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Student NIC Number</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' id='studentNIC' name='studentNIC'  value= '"+dataRep["studentNIC"].trim()+"' maxLength='10' onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Application No</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='applicationNo'  id='applicationNo' value= '"+dataRep["applicationNo"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>T.No</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='tempNo'  id='tempNo' value= '"+dataRep["tempNo"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Full Name</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentName'  id='studentName' value= '"+dataRep["studentName"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			
			
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
			str += "<select name='dobYYYY' value='dobYYYY'  onchange='dataRep[this.name]=this.value;' class='dateSelect'>";
			str += generateNumberOptions(1970, 2050, 4, dataRep['dobYYYY']);
			str += "</select>";
			str += "<select name='dobMM' value='dobMM' ' onchange='dataRep[this.name]=this.value;' class='dateSelect' >";
			str += generateNumberOptions(0, 12, 2, dataRep['dobMM']);
			str += "</select>";
			str += "<select name='dobDD' value='dobDD'  onchange='dataRep[this.name]=this.value;calculateage();' class='dateSelect'>";
			str += generateNumberOptions(0, 31, 2, dataRep['dobDD']);
			str += "</select></div></div>";
				
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Age</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentAge' id='studentAge' value= '"+dataRep["studentAge"].trim()+"' onchange='dataRep[this.name]=this.value;' >";
			str += "</div>";
			
			str += "<div style='clear:both'>";
			str += "<div class='longIdentifier'>Address</div><div class='colon'>&nbsp;:&nbsp;</div> "
			str += "<div style='float:left' >&nbsp;";
			str += "<input type='text' name='studentPermanentAddress' id='studentPermanentAddress' value= '"+dataRep["studentPermanentAddress"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			str += "</div>";
			
			// str += "<div style='clear:both'>";
			// str += "<div class='longIdentifier'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='colon'>&nbsp;:&nbsp;</div> "
			// str += "<div style='float:left' >&nbsp;";
			// str += "<input type='text' name='studentAddressLine02' id='studentAddressLine02' value= '"+dataRep["studentAddressLine02"].trim()+"'   onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			// str += "</div>";
			
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
			
		
			
			
			str += "<br><br><center>";
			if(dsp == "addSelectedStudent"){
			str += "<input type='button' class='btn' value='Register' id='save'  onclick=formSelectedStudentsendForm('addSelectedStudent');callNextFunctionVoucher();>"; 
			}
			// else if(dsp == "updateSelectedStudent") {
			// else if(dsp == "deleteSelectedStudent") {
			// str += "<input type='button' class='btn'>";
			// }
			// str += "<input type='button' class='btn' value='Edit Details' id='save'  onclick=formSelectedStudentsendForm('updateSelectedStudent');callNextFunctionVoucher();>"; 
			// }
			//str += '<input type="button" class="btn" value = "View Student Details" onclick ="sendForm('+"'data4ViewSelectedStudent'"+')">';
			
			str += "<input type='button' class='btn' value='Reset Values'  onclick='refreshSelectedStudent();' >"; 
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formStudentMenu'"+');>';
					
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+');>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center></form>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
	
	
	
	// function formViewStudent(dsp) {

		// str = "";
		// studentNICLStr = "";

		// if(dsp == "formViewStudent") {

			// programmeTypeCode = programmeTypeTitle = "";

			// str  = "<div id='viewdegree'>";
			// str += "<table><tr><td>"
			// str += '<h2>View Student Details</h2><hr>';
			// str += '<form name="viewstudentdetails" method="POST">';

			// dataRep["selectedStudent"]="";
			// studentNICLStr="<option>Please scroll down to see the records</option>";
			// for(i = 0; i<studentNICLength; i++) {
				
					// studentNICLStr += "<option>"+studentNICArr[i]+"</option>";
				
			// }
			// str += "<br><center><select id='selectedStudent' onchange='dataRep[this.id]=this.selectedIndex;'>";
			// str += studentNICLStr;
			// str += "</select></center><br><br><br><br>";
			// str += '<button class="btn" onclick=showMenu("updateSelectedStudent");>Update</button>';
			// //str += '<button class="btn" onclick=showMenu("deleteDegree");>Delete</button>';
			// str += '<input type="button" class="btn" value = "Back to Administrator Menu" onclick = showMenu('+"'formAdministratorMenu'"+')>';
			// str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			// str += '</form>';
			// str += '</td></tr></table>';
			// str += "</div>";
		// }

		// return str;
	// }
	

	
	function formStudentRegistrationvalidate(frm){
//alert("val awa");
		var error = 0;
		var pattn=/[^0123456789]/g;

		 if(frm == "addStudent" ){

			if(frm == "addStudent"){
				dsp = "formStudentRegistration";
			} 

			doc = document.maintainStudentRegistration;
			document.getElementById("msgArea").innerHTML = "";
			
			if(dataRep["studentNo"].trim().length != 10){
				if((document.getElementById("msgArea").innerHTML).indexOf("E001") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E001 : Student Number with less than 10 non-blank alpha numeric characters is not acceptable.</div>";
					error++;
				}
			}

 
			

			if(dataRep["studentNIC"].trim() != "" && (pattn.test(dataRep["studentNIC"].substring(0,9)) ||
			  (dataRep["studentNIC"].trim().substring(9,10) != "V" && dataRep["studentNIC"].trim().substring(9,10) != "X" ) ||
			   dataRep["studentNIC"].trim().length != 10)) {
				if((document.getElementById("msgArea").innerHTML).indexOf("E002") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E002 : Incorrect NIC number.</div>";
					error++;
				}

			}



			
			if(dataRep["studentName"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E003") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E003 : Student name with non-blank.</div>";
					error++;
				}
			}			
			
			
			if(dataRep["studentSex"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E004") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E004 : Student sex with non-blank.</div>";
					error++;
				}
			}			
			

			
			
			if(dataRep["studentAge"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E005") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E005 : Student age with non-blank.</div>";
					error++;
				}
			}				




			if(dataRep["studentPermanentAddress"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E006") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E006 : Student address line 01 with non-blank.</div>";
					error++;
				}
			}



			if(dataRep["studentAddressLine02"] == ""){
				if((document.getElementById("msgArea").innerHTML).indexOf("E007") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E007 : Student address line 02 with non-blank.</div>";
					error++;
				}
			}



		
			

			if(dataRep["studentContactLan"].trim() != "" && (pattn.test(dataRep["studentContactLan"]) ||
			   dataRep["studentContactLan"].trim().substring(0,1) != "0" || 
			   dataRep["studentContactLan"].trim().length != 10)) {
				if((document.getElementById("msgArea").innerHTML).indexOf("E008") == -1){
				 
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E008 : Incorrect Telephone number.</div>";
					error++;
				}

			}



			if(dataRep["studentContactMobile"].trim() != "" && (pattn.test(dataRep["studentContactMobile"]) ||
			   dataRep["studentContactMobile"].trim().substring(0,1) != "0" || 
			   dataRep["studentContactMobile"].trim().length != 10)) {
				if((document.getElementById("msgArea").innerHTML).indexOf("E009") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E009 : Incorrect Telephone number.</div>";
					error++;
				}

			}
			
			
			
			if((dataRep["studentContactEmail"] == "")){
				if((document.getElementById("msgArea").innerHTML).indexOf("E010") == -1){
					document.getElementById("msgArea").innerHTML += "<div class='MsgText'>E010 : Student email with non-blank.</div>";
					error++;
			}
		}
			
	}		
		if(error > 0 && error != ""){
			showMenu(dsp);
		} else {
			formStudentRegistrationsendForm(frm);
		}
		
}
	
	function formSelectedStudentsendForm(frm){

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

		if(frm == 'addSelectedStudent' || frm == 'updateSelectedStudent'){
 
			doc = document.maintainSelectedStudent;
			dataStr += "&interface="+frm;
			
			dataStr += "&universityCode="+universityCodeArr[dataRep["selecteduniversity"]-1];
			dataStr += "&facultyCode="+facultyCodeArr[dataRep["selecteduniversity"]-1];
			dataStr += "&departmentCode="+departmentCodeArr[dataRep["selecteduniversity"]-1];
			dataStr += "&programmeTypeCode="+programmeTypeCodeArr[dataRep["selectedprogrammeType"]-1];
			dataStr += "&degreeCode="+degreeCodeArr[dataRep["selectedprogrammeType"]-1];//alert(degreeCodeArr[doc.selectedDegree.selectedIndex]);
			dataStr += "&studentNIC="+dataRep["studentNIC"];
			dataStr += "&studentName="+dataRep["studentName"];	
			dataStr += "&studentSex="+dataRep["studentSex"];
			dataStr += "&studentAge="+dataRep["studentAge"];
			dataStr += "&studentDateofbirth="+doc.dobYYYY.value+"/"+doc.dobMM.value+"/"+doc.dobDD.value;//alert(dataStr);
			dataStr += "&studentPermanentAddress="+dataRep["studentPermanentAddress"];
			//dataStr += "&studentAddressLine02="+dataRep["studentAddressLine02"];
			dataStr += "&studentContactLand01="+dataRep["studentContactLan"];
			dataStr += "&studentContactMobile01="+dataRep["studentContactMobile"];
			dataStr += "&studentContactEmail="+dataRep["studentContactEmail"];
			dataStr += "&applicationNo="+doc.applicationNo.value;
			dataStr += "&tempNo="+dataRep["tempNo"];
			dataStr += "&selected="+"selected";
			
			//dataStr +="&temp="+dataRep["temp"];
			//alert(dataStr);
			//isrHandle.getDataFromDB(eval("clientController"),"serverController.php",dataStr);

//alert(dataStr);
		} 
		
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);


		return 0;
		
}
	
	
	
	
