dataRep['appointmentStartDate']=dataRep['appointmentEndDate']="";
dataRep['lecturerName'] = dataRep['lecturerEmpNo'] = dataRep['lecturerAge'] = dataRep['lecturerSex'] = dataRep['lecturerDateofbirth'] ="";
dataRep['lecturerAddressLine02'] = dataRep['lecturerPersonalTitle'] = dataRep['lecturerContactLand01']= dataRep['lecturerContactMobile01'] = dataRep['lecturerContactEmail'] = "";
var lecturerNameList = "";
var lecturerEmpNoList = ""; 
var lecturerNICList = ""; 

//dataRep['selectedCourseUnit'] = "";
dataRep['selectedDegreeType'] = dataRep['selectedPaymentRate'] = "";
dataRep["hours"]  ="";

	function disableButtonsave(){
		document.getElementById('savebtn').style.display='block';

	}

	
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

function refreshLecturerCourseDetails(){

	dataRep['lecturerEmpNo']=dataRep['lecturerPersonalTitle']=dataRep['lectureName']= dataRep['lectureGender']=dataRep['lectureDOB']= dataRep["lecturerNIC"] ="";
	dataRep['lectureAge']=dataRep['lectureAddressL1']=dataRep['lectureAddressL2']=dataRep['lectureContactLan']="";
	dataRep['lectureContactMobile']=dataRep['lectureContactEmail']= dataRep['lecturertype'] ="";
	dataRep["departmentTitle"]= dataRep['departmentCode'] ="";
	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep["programmeTypeTitle"]=dataRep["programmeTypeCode"]=dataRep["degreeTitle"]=dataRep["degreeCode"]= "";
	lecturerNameList = lecturerEmpNoList =  lecturerNICList = ""; 
	dataRep['rate2'] = dataRep['lecturerName'] = "";
	dataRep['appointmentStartDate']=dataRep['appointmentEndDate']="";
	dataRep["hours"]  = dataRep["academicYear"] = dataRep["semester"] = "";
	sendForm('data4seeLecturerDetails');
	
	
}

function refreshLecturerDetails2(){

	dataRep['lecturerEmpNo']=dataRep['lecturerPersonalTitle']=dataRep['lectureName']= dataRep['lectureGender']=dataRep['lectureDOB']= dataRep["lecturerNIC"] ="";
	dataRep['lectureAge']=dataRep['lectureAddressL1']=dataRep['lectureAddressL2']=dataRep['lectureContactLan']="";
	dataRep['lectureContactMobile']=dataRep['lectureContactEmail']= dataRep['lecturertype'] ="";
	dataRep["departmentTitle"]= dataRep['departmentCode'] ="";
	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep["programmeTypeTitle"]=dataRep["programmeTypeCode"]=dataRep["degreeTitle"]=dataRep["degreeCode"]= "";
	dataRep['rate2'] = dataRep['lecturerName'] = "";
		dataRep['appointmentStartDate']=dataRep['appointmentEndDate']="";
	dataRep["hours"]  = dataRep["academicYear"] = dataRep["semester"] = "";
}	
	
	
	
	
	
	
// function printAdmission2(){
		// var divText = "";
		// divText += "<div>";
		// divText += "<table ><tr><td>"
		// divText += '<center><img src ="img/nciNew.gif" width:150px; height:350px;"/></center>';
		// divText += '<center><h3>UNIVERSITY OF KELANIYA,SRI LANKA</h3></center>'
		// divText += "<form>";
		// //divText += "<div style='clear:both;margin:25px 40px;'>";
		
		
		// //divText += "<div class='divLeft'>"+document.getElementById('LName').innerHTML+"<br>"+document.getElementById('faculty').innerHTML+"</div>";
		
		// divText += "<div class='divLeft'>Sir/Madam,</div><br><br>";
		
		// var selectedBoxArr =  new Array();
		// var selectedCheckBoxes = '';
		// var inptfields = document.getElementsByTagName('input');
		// var inptLength = inptfields.length;
	
		// for(lp=0; lp<inptLength; lp++){
		// if(inptfields[lp].type == 'checkbox' && inptfields[lp].checked == true){
			// selectedBoxArr.push(inptfields[lp].value);
		// }
		// selectedCheckBoxes = selectedBoxArr;
		// //alert(selectedCheckBoxes);
		// }
		// divText += "<div class='divLeft'><b>Post of Visiting Lecturer- '"+document.getElementById('selectedDegreeType').value+"' "+document.getElementById('academicYear').value+" (Batch No- '"+document.getElementById('batchNo').innerHTML+"' )<hr></b></div>";
		
		// divText += "<div class='divRight'>The "+document.getElementById('faculty').innerHTML+"  University of Kelaniya are pleased to inform that  your are given the opportunity to commence lectures on the topic of the '"+document.getElementById('selectedCourse').value+"' held from "+document.getElementById('appointmentStartDate').value+" to "+document.getElementById('appointmentEndDate').value+".</div>";
		
		// //divText += "<div class='divRight'>The "+document.getElementById('faculty').innerHTML+"  University of Kelaniya are pleased to inform that  your are given the opportunity to commence lectures on the topic of the '"+selectedCheckBoxes+"' held from "+document.getElementById('appointmentStartDate').value+" to "+document.getElementById('appointmentEndDate').value+".</div>";

		// divText += "<div class='divRight'>You will have to prepare "+document.getElementById('hours').value+" lectures for a time period of one hour each. An amount of Rs '"+document.getElementById('lecturerFee').innerHTML+"'  will be paid for an each hour.</div>";
		
		// divText += "<div class='divRight'> And also to be reminded that compensation will be allowed on each extra lectures given after two hours.</div>";
		
		// divText += "<div class='divLeft'>Yours Sincerely</div>";
		
		// divText += "<div class='divLeft'>Professor Sunanda Madduma Bandara</div>";
		// divText += "<div class='divLeft'>Vice-Chancellor</div>";
		// divText += "<div class='divLeft'>Dean,"+document.getElementById('faculty').innerHTML+"</div>";
		// divText += "<div class='divLeft'>Head of the Department,"+document.getElementById('department').innerHTML+"</div>";
		// divText += "<div class='divLeft'>Bursar</div>";
		// divText += "<div class='divLeft'>Personal.File</div>";
		
		// divText += "</div>";
		// divText += '<input type="button" id="prbtn"  style="width:100px;left:30px;top:100%;background-color:#0086c6;border-radius:15px;color:#ffffff;padding:3px 5px;margin:30% 40%;" onclick=toPrint(); value="Print"/>';
		// divText += "</form></td></tr></table></div>";
		
		// var myWindow = window.open('','');
		// var doc = myWindow.document;
		// doc.open();
	
		
		// doc.write('<html><head><title>Print</title>');
		// doc.write('<script type="text/javascript">function toPrint(){document.getElementById("prbtn").style.display="none"; window.print();}</script>');
		// doc.write('<style>body{margin:10px auto;font-family:tahoma;width:600px;height:110%;border:1px solid #000000;text-align:center;padding:15px;}.divLeft{clear:left;float:left;font-family:tahoma;font-size:12px;width:auto;margin:10px 0px;}.colonDiv{float:left;font-size: 12px;font-weight:bold;margin:0px 5px;width: 10px;margin:10px 0px;}.divRight{margin:10px 0px;float:left;font-family:tahoma;font-size:12px;width:auto;clear:right;}body{font-family:tahoma;}#genderDiv{clear:left;}#btnsub,#getbtn,#btnbk,#btnsrch{display:none}.forview{float:left;width:150px;margin-left:10px;font-family:tahoma;font-size:12px;}#invest1{margin:25px 0px;font-size:12px;}img{margin:10px; width:80px;height:80px;}p,h2{text-align:center;}.longIdentifier{float:left;width: 120px;margin:0px 10px;font-size:12px; } .shortIdentifier{float:left;width:100px;margin:10px;font-size:12px;} input,textarea{border:none;font-family:tahoma;font-size:12px}.viewArea{float:left;font-family:tahoma;font-size:12px;width:auto;min-width:150px;} textarea{min-width:150px;width:450px}</style></head>');
		// doc.write('<body>');
		// doc.write(divText);
		// //doc.write(divText2);
		
		// //doc.write('');
		// doc.write('</body>');
		// doc.close();

// }


function setValuesForLec(){
	for(i=0; i<lecturerEmpNoLength; i++){

		if(dataRep['lecturerEmpNo']==lecturerEmpNoArr[i]){

			dataRep['lecturerNIC']=lecturerNICArr[i];
			dataRep['lecturerName']=lecturerNameArr[i];
			dataRep['lecturerPersonalTitle'] = lecturerPersonalTitleArr[i];
			dataRep['facultyCode']=facultyCodeArr[i];
			dataRep['facultyTitle']=facultyTitleArr[i];
			dataRep['departmentCode']=departmentCodeArr[i];
			dataRep['departmentTitle']=departmentTitleArr[i];
			dataRep['rate2']=rate2Arr[i];
			dataRep['batchNo']=batchNoArr[i];
			
		

		}else if(dataRep['lecturerName']==lecturerNameArr[i]){
		
			dataRep['lecturerNIC']=lecturerNICArr[i];
			dataRep['lecturerEmpNo']=lecturerEmpNoArr[i];
			dataRep['lecturerPersonalTitle'] = lecturerPersonalTitleArr[i];
			dataRep['facultyCode']=facultyCodeArr[i];
			dataRep['facultyTitle']=facultyTitleArr[i];
			dataRep['departmentCode']=departmentCodeArr[i];
			dataRep['departmentTitle']=departmentTitleArr[i];
			dataRep['rate2']=rate2Arr[i];
			dataRep['batchNo']=batchNoArr[i];
		}else if(dataRep['lecturerNIC']==lecturerNICArr[i]){
		
			dataRep['lecturerEmpNo']=lecturerEmpNoArr[i];
			dataRep['lecturerName']=lecturerNameArr[i];
			dataRep['lecturerPersonalTitle'] = lecturerPersonalTitleArr[i];
			dataRep['facultyCode']=facultyCodeArr[i];
			dataRep['facultyTitle']=facultyTitleArr[i];
			dataRep['departmentCode']=departmentCodeArr[i];
			dataRep['departmentTitle']=departmentTitleArr[i];
			dataRep['rate2']=rate2Arr[i];
			dataRep['batchNo']=batchNoArr[i];
		}
		
	}
}

function generateSelect(){
	var newStr="";

	sendForm('data4LecturerRequest');
	sendForm('data4seeLecturerDetails2');		
		degreeCodeLength = degreeTitleLength;
		courseUnitCodeLength = degreeTitleLength;

			degreeCodeStr="<option>Please scroll down to see the records</option>";
				for(i = 0; i<degreeTitleLength; i++) {

					if (degreeTitleArr.indexOf(degreeTitleArr[i])== degreeTitleArr.lastIndexOf(degreeTitleArr[i]) || (degreeTitleArr.indexOf(degreeTitleArr[i])!= degreeTitleArr.lastIndexOf(degreeTitleArr[i]) && degreeTitleArr.indexOf(degreeTitleArr[i])== i)){
						degreeCodeStr += "<option>"+degreeTitleArr[i]+"</option>";
					}
				}

			newStr += "<div class='longIdentifier'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div> "
			newStr += "<select id='selectedDegreeType' onchange='dataRep[this.id]=this.value;selectCourse(this.value);'>";
			//newStr += "<select id='selectedDegreeType' onchange='dataRep[this.id]=this.value;selectCourse();'>";
			newStr += degreeCodeStr;
			newStr += "</select>";
			
			// newStr += "<div class='longIdentifier' style='float:left'>Course Unit</div><div class='colon'>&nbsp;:&nbsp;</div>";
			// newStr += "<div id='CourseDiv' ></div>";
			// newStr += "</div></br></br>";
		
			courseUnitCodeStr="<option>Please scroll down to see the records</option>";
			
			newStr += "<div class='longIdentifier' style='float:left'>Course Unit</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div id='CourseDiv' >";
			newStr += "<select id='selectedCourse' onchange='dataRep[this.id]=this.selectedIndex;'>";
			newStr += courseUnitCodeStr;
			newStr += "</select>"
			newStr += "</div>";
		
		

			newStr += "<div style='clear:both'><br>";
			newStr += "<div class='longIdentifier'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='academicYear' id='academicYear' value= '"+dataRep["academicYear"].trim()+"'onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Semester</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='semester' id='semester' value= '"+dataRep["semester"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Hours</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='hours' id='hours' value= '"+dataRep["hours"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";

			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Appointment Start Date</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='appointmentStartDate' id='appointmentStartDate' value= '"+dataRep["appointmentStartDate"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";
			
			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Appoinment End Date</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' >&nbsp;";
			newStr += "<input type='text' name='appointmentEndDate' id='appointmentEndDate' value= '"+dataRep["appointmentEndDate"].trim()+"'  onchange='dataRep[this.name]=this.value;' "+fieldDisabled+" >";
			newStr += "</div>";

		
	document.getElementById('selectedDivNewStr').innerHTML=newStr;
}

	function formLecturerDeteilsRequest(dsp) {

		str = "";
		title = "Appoint Lecturers for Course Units";

		if(dsp == "formLecturerDeteilsRequest") { 
		
			str  = "<div id='addFormLecturerRequest'>";
			str += "<table  ><tr><td>"
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainformLecturerDetailRequest">';
			
			
			str +="<div style='float:left;'><fieldset  class='field'><legend class='fieldHead'></legend>";
			

			for(i=0; i< lecturerEmpNoLength; i++){
			
			if (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) == lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) || (lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i]) != lecturerEmpNoArr.lastIndexOf(lecturerEmpNoArr[i]) && lecturerEmpNoArr.indexOf(lecturerEmpNoArr[i])==i)){
				lecturerEmpNoList += "<option value='"+lecturerEmpNoArr[i]+"'>";	
				}
				
			if (lecturerNameArr.indexOf(lecturerNameArr[i]) == lecturerNameArr.lastIndexOf(lecturerNameArr[i]) || (lecturerNameArr.indexOf(lecturerNameArr[i]) != lecturerNameArr.lastIndexOf(lecturerNameArr[i]) && lecturerNameArr.indexOf(lecturerNameArr[i])==i)){
				lecturerNameList += "<option value='"+lecturerNameArr[i]+"'>";
				}

			if (lecturerNICArr.indexOf(lecturerNICArr[i]) == lecturerNICArr.lastIndexOf(lecturerNICArr[i]) || (lecturerNICArr.indexOf(lecturerNICArr[i]) != lecturerNICArr.lastIndexOf(lecturerNICArr[i]) && lecturerNICArr.indexOf(lecturerNICArr[i])==i)){
				lecturerNICList += "<option value='"+lecturerNICArr[i]+"'>";
				}
			}

			str +="<div class='longIdentifier'>Lecturer Employee No</div>";
			str +="<div class='viewArea'>";
			str +="<input type='text' name='lecturerEmpNo' list='listlecturerEmpNo' id='lecturerEmpNo'   ";
			str += "value= '"+dataRep['lecturerEmpNo'].trim()+"' onchange='dataRep[this.name]=this.value;setValuesForLec();' >";
			str += "<datalist id='listlecturerEmpNo'>"+lecturerEmpNoList+"</datalist>";
			str += "</div><br>"; 

			str +="<div class='longIdentifier'>Lecturer Name</div>";
			str +="<div class='viewArea'>";
			str +="<input type='text' name='lecturerName' list='listlecturerName' id='lecturerName'  ";
			str += "value= '"+dataRep['lecturerName'].trim()+"'  onchange='dataRep[this.name]=this.value;setValuesForLec();' >";
			str += "<datalist id='listlecturerName'>"+lecturerNameList+"</datalist>";
			str += "</datalist></div><br>"; 
			
			str +="<div class='longIdentifier'  >Employee NIC Number</div>";
			str +="<div  class='viewArea'>";
			str +="<input type='text' name='lecturerNIC' list='listlecturerNIC' id='lecturerNIC'   ";
			str += "value= '"+dataRep['lecturerNIC'].trim()+"' onchange='dataRep[this.name]=this.value;setValuesForLec();' >";
			str += "<datalist id='listlecturerNIC'>"+lecturerNICList+"</datalist>";
			str += "</div><br>"; 
			str += "<input type='button' class='btn' value='Search' onclick=generateSelect();>";
			str += "<input type='button'  class='btn' value='Reset' onclick='refreshLecturerCourseDetails();'>";
			
			str +="</fieldset></div>";

			str += '<center>';
			str += "<div  style='margin:0 auto; width:100; height:100; clear:both;'>";
			str += '<fieldset><legend style="font-weight:bolder; color:#666"></legend>';
			str += "<img style='float:left;width:100; height:100' src='lecturerPhotos/"+dataRep["lecturerNIC"]+".jpg'></fieldset></div></center>";
			
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Lecturer NIC No</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div  class='viewArea'  id='EmpNIC' style='clear:none;'>"+dataRep['lecturerNIC']+"</div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Lecturee Employee No</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div  class='viewArea'  id='EmpNo' style='clear:none;'>"+dataRep['lecturerEmpNo']+"</div>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Lecturer Name</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='LName' style='clear:none;'>"+dataRep['lecturerPersonalTitle']+"."+dataRep['lecturerName']+"</div>";
			str +="</div><br/>";
		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'  id='faculty' style='clear:none;'>"+dataRep['facultyTitle']+"</div>";
			str +="</div><br/>";
			
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Department</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea'   id='department' style='clear:none;'>"+dataRep['departmentTitle']+"</div>";
			str +="</div><br/>";
			
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Lecturer fee</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='lecturerFee' style='clear:none;'>"+dataRep['rate2']+"</div>";
			str +="</div><br/><br/>";
			
			
			str +="<div class='hideLabel'>";
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Batch No</div><div class='colon'>&nbsp;:&nbsp;</div> ";
			str +="<div class='viewArea' id='batchNo' style='clear:none;'>"+dataRep['batchNo']+"</div>";
			str +="</div><br/><br/>";
			str += "</div>";
			
		
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div id='selectedDivNewStr'></div>";
			
			//str += "<input type='button' class='btn' id='savebtn' value='Save' style='display:none;' onclick=formaddLectureRequestsendForm('addFormLecturerRequest');>"; 
			
			//str += "<input type='button' class='btn' id='savebtn' value='Save'  onclick=selectedOptionalValues(this.form);formaddLectureRequestsendForm('addFormLecturerRequest');>"; 
			
			str += "<input type='button' class='btn' id='savebtn' value='Save'  onclick=formaddLectureRequestsendForm('addFormLecturerRequest');>"; 
			
			
			str += '<input type="button" class="btn" id="print" value="Print Appoinment Letter" onclick="printAdmission();disableButtonsave();">';
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formLecturerMenu'"+')>';
			
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			str += '</center>';
			str += '</form>';
			str += '</div>';
			str += '</td></tr></table>';
			str += "</div>";
		
		}

		return str;
	}
			
	
			
	// function selectCourse(selectedDegreeType){

	// var constr = "";

		// for(courseLoop = 0; courseLoop<degreeTitleLength; courseLoop++) {
		
					// constr += "<div style='float:right'>&nbsp;";
					// constr += "<div id='instituteDiv' class='investView_l' style='width:100px;'>";
					// constr += "<input type='checkbox' class='viewArea' id='selectedCourseUnit"+courseLoop+"' name='selectedCourseUnit"+courseLoop+"' value ="+courseUnitCodeArr[courseLoop]+" onchange='dataRep[this.id]=this.value;' onclick= >";
					// constr += "</div>";
					// constr +="<div id='instituteDiv' class='investView_l' style='width:250px;'>"+courseUnitTitleArr[courseLoop]+"</div><br/>";
	
			
		
	// }
	// document.getElementById('CourseDiv').innerHTML = constr;
	
	
	
// }	
	function selectCourse(selectedDegreeType){

	var constr = "<select id='selectedCourse' onchange='dataRep[this.id]=this.selectedIndex;'>";
	
	courseUnitCodeStr="";
	
	for(i = 0; i<courseUnitCodeLength; i++) {
		if (degreeTitleArr[i] == selectedDegreeType){
			if (courseUnitCodeArr.indexOf(courseUnitCodeArr[i]) == courseUnitCodeArr.lastIndexOf(courseUnitCodeArr[i]) || (courseUnitCodeArr.indexOf(courseUnitCodeArr[i]) != courseUnitCodeArr.lastIndexOf(courseUnitCodeArr[i]) && courseUnitCodeArr.indexOf(courseUnitCodeArr[i])==i)){
				
				courseUnitCodeStr += "<option>"+courseUnitTitleArr[i]+"</option>";
			}
		}
	}


	
	constr += courseUnitCodeStr;
	constr += "</select>";
	document.getElementById('CourseDiv').innerHTML = constr;
	
	
}

	
			
	function formaddLectureRequestsendForm(frm){

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

		if(frm == 'addFormLecturerRequest'){
				
				doc = document.maintainformLecturerDetailRequest;
				dataStr += "&interface="+frm;
				var lecStr ="";
				
			//for(courseLoop=0; courseLoop<degreeTitleLength; courseLoop++){    
				
				dataStr += "&lecturerEmpNo="+dataRep["lecturerEmpNo"];
				
				if(doc.selectedDegreeType.value!=''){
					for(degCounter=0; degCounter <degreeTitleArr.length; degCounter++){
						if(doc.selectedDegreeType.value == degreeTitleArr[degCounter]){
							dataRep['selectedDegreeType'] = degreeCodeArr[degCounter];
						}
					}
				}
					
				dataStr += "&degreeCode="+dataRep['selectedDegreeType'];
					
				if(doc.selectedCourse.value!=''){
					for(degCounter=0; degCounter <courseUnitTitleArr.length; degCounter++){
						if(doc.selectedCourse.value == courseUnitTitleArr[degCounter]){
							dataRep['selectedCourse'] = courseUnitCodeArr[degCounter];
						}
					}
				}

				dataStr += "&courseUnitCode="+dataRep['selectedCourse'];
		
		
			
			//if(degreeTitleArr[courseLoop] == selectedDegreeType){	
				//if(document.getElementById('selectedCourseUnit'+courseLoop).checked){
					//lecStr += "&courseUnitCode="+courseUnitCodeArr[courseLoop];
				//}
			//}
				dataStr += "&academicYear="+dataRep["academicYear"];
				dataStr += "&semester="+dataRep["semester"];
				dataStr += "&duration="+dataRep["hours"];
				dataStr += "&appointmentStartDate="+dataRep["appointmentStartDate"];
				dataStr += "&appointmentEndDate="+dataRep["appointmentEndDate"];
				dataStr += "&appointed="+"yes";
				dataStr += "&paymentRate="+dataRep["rate2"];
				
				
				dataRep["lecturercourseunitId"] = lecturercourseunitIdArr[0];
                if(dataRep["lecturercourseunitId"]== null || dataRep["lecturercourseunitId"]==""){
				//alert("yes");
                    dataStr += "&lecturercourseunitId="+"1";
				}else{
				//alert("no");
                   var radioInvestId = (parseInt(dataRep["lecturercourseunitId"])+1).toString();
                   dataRep["lecturercourseunitId"] = radioInvestId;
					dataStr += "&lecturercourseunitId="+dataRep["lecturercourseunitId"];
				}
				
				//courseUnitTypeArr[courseLoop] = dataStr+lecStr;
				//alert(courseUnitTypeArr[courseLoop]);
			//}
			
				
			// if(frm == 'addFormLecturerRequest'){
				// for(writeLoop=0; writeLoop<degreeTitleLength; writeLoop++){
                // //alert(courseUnitCodeArr.length);
					// if(courseUnitTypeArr[writeLoop]!= "" || courseUnitTypeArr[writeLoop]!= null){
                // //alert(courseUnitTypeArr[writeLoop]+'--'+'second for');
						// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", courseUnitTypeArr[writeLoop]);
					// }
				// }
			// }
		}
    
	//	else{
		isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
		//}    
        
    return 0;
    
	
}
		
		
		
				