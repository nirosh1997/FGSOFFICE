dataRep["studentNo"]=dataRep["studentNIC"]=dataRep["studentName"]=dataRep["studentAge"] =dataRep["studentSex"]=dataRep["studentPermanentAddress"]=dataRep["studentAddressLine02"]=dataRep["studentContactLan"]=dataRep["studentContactMobile"]=dataRep["studentContactEmail"]="";
dataRep["studentDOB"]="";
dataRep["type"] ="";
dataRep['registrationFee']=dataRep['applicationFee']=dataRep['examinationFee']=dataRep['courseFeeTotal']=dataRep['libraryFeeRefundable']=dataRep['libraryFeeNonRefundable']=dataRep['textbookFee']=dataRep['internetFee']=dataRep['']="";
var courseUnitCodeStr = "";
var studentNameList = studentNoList = studentNICList = "";

 dataRep["selectedCompulsory"] = new Array();
 var selectedOptionalsArr = new Array();







function setValues1(){
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
			dataRep["registrationFee"]=registrationFeeArr[i];
			dataRep["applicationFee"]=applicationFeeArr[i];
			dataRep["examinationFee"]=examinationFeeArr[i];
			dataRep["courseFeeTotal"]=courseFeeTotalArr[i];
			dataRep["libraryFeeRefundable"]=libraryFeeRefundableArr[i];
			dataRep["libraryFeeNonRefundable"]=libraryFeeNonRefundableArr[i];
			dataRep["textbookFee"]=textbookFeeArr[i];
			dataRep["internetFee"]=internetFeeArr[i];
			dataRep["firstinstalment"]=firstinstalmentArr[i];
			dataRep["secondinstalment"]=secondinstalmentArr[i];
			dataRep["thirdinstalment"]=thirdinstalmentArr[i];
			dataRep["studentTotalAmount"]=studentTotalAmountArr[i];
			//dataRep["studentcourseunitId"] = studentcourseunitIdArr[i];
	
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
			dataRep["registrationFee"]=registrationFeeArr[i];
			dataRep["applicationFee"]=applicationFeeArr[i];
			dataRep["examinationFee"]=examinationFeeArr[i];
			dataRep["courseFeeTotal"]=courseFeeTotalArr[i];
			dataRep["libraryFeeRefundable"]=libraryFeeRefundableArr[i];
			dataRep["libraryFeeNonRefundable"]=libraryFeeNonRefundableArr[i];
			dataRep["textbookFee"]=textbookFeeArr[i];
			dataRep["internetFee"]=internetFeeArr[i];
			dataRep["firstinstalment"]=firstinstalmentArr[i];
			dataRep["secondinstalment"]=secondinstalmentArr[i];
			dataRep["thirdinstalment"]=thirdinstalmentArr[i];
			dataRep["studentTotalAmount"]=studentTotalAmountArr[i];
			//dataRep["studentcourseunitId"] = studentcourseunitIdArr[i];
			
			
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
			dataRep["registrationFee"]=registrationFeeArr[i];
			dataRep["applicationFee"]=applicationFeeArr[i];
			dataRep["examinationFee"]=examinationFeeArr[i];
			dataRep["courseFeeTotal"]=courseFeeTotalArr[i];
			dataRep["libraryFeeRefundable"]=libraryFeeRefundableArr[i];
			dataRep["libraryFeeNonRefundable"]=libraryFeeNonRefundableArr[i];
			dataRep["textbookFee"]=textbookFeeArr[i];
			dataRep["internetFee"]=internetFeeArr[i];
			dataRep["firstinstalment"]=firstinstalmentArr[i];
			dataRep["secondinstalment"]=secondinstalmentArr[i];
			dataRep["thirdinstalment"]=thirdinstalmentArr[i];
			dataRep["studentTotalAmount"]=studentTotalAmountArr[i];
		//	dataRep["studentcourseunitId"] = studentcourseunitIdArr[i];
			
		}
	}
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

var selectedCompulsoryArr = new Array();
var uncheckedBoxes ='';  
function selectedCompulsoryValues(frm){
var inptfields = frm.getElementsByTagName('input');
	var inptLength = inptfields.length;
	
	for(lp=0; lp<inptLength; lp++){
		if(inptfields[lp].type == 'checkbox' && inptfields[lp].checked == false){
			selectedCompulsoryArr.push(inptfields[lp].value);
		}
		uncheckedBoxes = selectedCompulsoryArr;
		//alert(uncheckedBoxes);
	}
	return selectedCompulsoryArr;
}


function refreshStudentCourseDetails(){

	dataRep["academicYear"] = dataRep["studentNo"]= dataRep["studentNIC"] = dataRep["studentName"]=dataRep["departmentTitle"]= dataRep['departmentCode'] ="";
	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep["programmeTypeTitle"]=dataRep["programmeTypeCode"]=dataRep["degreeTitle"]=dataRep["degreeCode"]= "";
	studentNICList = studentNoList = studentNameList = "";	
	//document.getElementById('selectedOptional').checked	= "";
	//courseUnitTitleArr 	= courseUnitCodeArr = "";
	//typeArr = "";
	var newStr="";
	sendForm('data4seeStudentDetails');
	//sendForm('data4StudentRequest');	
	
}

function refreshStudentDetails2(){

	dataRep["academicYear"] = dataRep["studentNo"]= dataRep["studentNIC"] = dataRep["studentName"]=dataRep["departmentTitle"]= dataRep['departmentCode'] ="";
	dataRep['universityCode'] = dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep["programmeTypeTitle"]=dataRep["programmeTypeCode"]=dataRep["degreeTitle"]=dataRep["degreeCode"]= "";
	studentNICList = studentNoList = studentNameList = "";	
	//document.getElementById('selectedOptional').checked	= "";
	courseUnitTitleArr 	= courseUnitCodeArr = "";
	typeArr = "";
	//sendForm('data4seeStudentDetails');
	
}



function generateSelectCourse(){
		
	var newStr="";
	
	sendForm('data4StudentRequest');
	sendForm('data4seeStudentDetails2');

			newStr += "<div style='clear:both'>";
			newStr += "<div class='longIdentifier'>Course Unit</div><div class='colon'>&nbsp;:&nbsp;</div>";
			newStr += "<div style='float:left' id='CourseDiv' >&nbsp;";
			
	// for(courseLoop=0; courseLoop<courseUnitCodeArr.length; courseLoop++){
	// //alert("ok");
		// if(dataRep["degreeCode"]==degreeCodeArr[courseLoop] && dataRep["programmeTypeCode"] == programmeTypeCodeArr[courseLoop]){// && dataRep["studentNo"]== studentNoArr[courseLoop]){
			// //alert("ok1");
			// if (courseUnitTitleArr.indexOf(courseUnitTitleArr[courseLoop]) == courseUnitTitleArr.lastIndexOf(courseUnitTitleArr[courseLoop]) || (courseUnitTitleArr.indexOf(courseUnitTitleArr[courseLoop]) != courseUnitTitleArr.lastIndexOf(courseUnitTitleArr[courseLoop]) && courseUnitTitleArr.indexOf(courseUnitTitleArr[courseLoop])==courseLoop)){
			
				// if(typeArr[courseLoop]== 'Optional'){
						// //alert(typeArr[courseLoop]);
					// newStr += "<div id='instituteDiv' class='investView_l' style='width:100px;'>";
					// newStr += "<input type='checkbox'  class='viewArea' id='selectedOptional"+courseLoop+"' name='selectedOptional"+courseLoop+"' value ="+courseUnitCodeArr[courseLoop]+" onchange='dataRep[this.id]=this.value;' >";
					// newStr += "</div>";
					// newStr +="<div id='instituteDiv' class='investView_l' style='width:250px;'>"+courseUnitTitleArr[courseLoop]+"</div><br/>";
			
				// }
				// else if(typeArr[courseLoop]== 'Compulsory'){
					// //dataRep["selectedCompulsory"] = courseUnitCodeArr[courseLoop];
					
					// //newStr +="<div class='hideLabel'>";
					// //newStr +="<div class='longIdentifier'>Compulsory Courses</div><div class='colon'>&nbsp;:&nbsp;</div>";
					// newStr += "<div style='float:right'>&nbsp;";
					// newStr += "<div id='instituteDiv' class='investView_l' style='width:100px;'>";
					// newStr += "<input type='checkbox'  disabled = 'disabled'  class='viewArea' id='selectedCompulsory"+courseLoop+"' name='selectedCompulsory"+courseLoop+"' value ="+courseUnitCodeArr[courseLoop]+" onchange='dataRep[this.id]=this.value;' >";
					// newStr += "</div>";
					// newStr +="<div id='instituteDiv' class='investView_l' style='width:250px;'>"+courseUnitTitleArr[courseLoop]+"</div><br/>";
					// //newStr +="<div class=hideLabel>&nbsp;</div>";
					// //newStr +="</div>";	
				// }
			// }
		// }
	// }	
	
	
	for(courseLoop=0; courseLoop<courseUnitCodeArr.length; courseLoop++){
		if(dataRep["degreeCode"]==degreeCodeArr[courseLoop] && dataRep["programmeTypeCode"] == programmeTypeCodeArr[courseLoop] && dataRep["studentNo"]== studentNoArr[courseLoop]){
            //if (courseUnitCodeArr.indexOf(courseUnitCodeArr[courseLoop]) == courseUnitCodeArr.lastIndexOf(courseUnitCodeArr[courseLoop]) || (courseUnitCodeArr.indexOf(courseUnitCodeArr[courseLoop]) != courseUnitCodeArr.lastIndexOf(courseUnitCodeArr[courseLoop]) && courseUnitCodeArr.indexOf(courseUnitCodeArr[courseLoop])==courseLoop)){
			if(courseUnitCodeArr[courseLoop] !=""){
				if(typeArr[courseLoop]== 'Optional'){
				
				
					newStr += "<div id='instituteDiv' class='investView_l' style='width:100px;'>";
					newStr += "<input type='checkbox'  class='viewArea' id='selectedOptional"+courseLoop+"' name='selectedOptional"+courseLoop+"' value ="+courseUnitCodeArr[courseLoop]+" onchange='dataRep[this.id]=this.value;' >";
					newStr += "</div>";
					newStr +="<div id='instituteDiv' class='investView_l' style='width:250px;'>"+courseUnitTitleArr[courseLoop]+"</div><br/>";
				}
				else if(typeArr[courseLoop]== 'Compulsory'){
				
					//newStr +="<div class='hideLabel'>";
					//newStr +="<div class='longIdentifier'>Compulsory Courses</div><div class='colon'>&nbsp;:&nbsp;</div>";
					//newStr += "<div style='float:right'>&nbsp;";
					newStr += "<div id='instituteDiv' class='investView_l' style='width:100px;'>";
					newStr += "<input type='checkbox'  disabled = 'disabled'  class='viewArea' id='selectedCompulsory"+courseLoop+"' name='selectedCompulsory"+courseLoop+"' value ="+courseUnitCodeArr[courseLoop]+" onchange='dataRep[this.id]=this.value;' >";
					//newStr += "<input type='checkbox'    class='viewArea' id='selectedCompulsory"+courseLoop+"' name='selectedCompulsory"+courseLoop+"' value ="+courseUnitCodeArr[courseLoop]+" onchange='dataRep[this.id]=this.value;' >";
					
					newStr += "</div>";
					newStr +="<div id='instituteDiv' class='investView_l' style='width:250px;'>"+courseUnitTitleArr[courseLoop]+"</div><br/>";
					//newStr +="<div class=hideLabel>&nbsp;</div>";
					//newStr +="</div>";
				}
			}
		}	
	}
	
			newStr += "</div>";

					

	document.getElementById('selectedDiv2').innerHTML=newStr;
}


function formStudentDeteilsRequest(dsp) {
		str = "";
		title = "Appoint Student for Course Unit";

		if(dsp == "formStudentDeteilsRequest") { 
			
			
			
			str  = "<div id='addStudentDeteilsRequest'>";
			str += "<table><tr><td>"
			str += '<h2>'+title+'</h2><hr>';
			str += '<form name="maintainStudentDetailRequest">';
			
			
			
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
			
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'></legend>";
			
			str +="<div class='longIdentifier'>Student NIC</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='studentNIC' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setValues1();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student Name</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentName' list='liststudentName' id='studentName' value= '"+dataRep["studentName"].trim()+"' onchange='dataRep[this.name]=this.value;setValues1();'>";
			str += "<datalist id='liststudentName'>"+studentNameList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student No</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentNo' list='liststudentNo' id='studentNo' value= '"+dataRep["studentNo"].trim()+"'  onchange='dataRep[this.name]=this.value;setValues1();'>";
			str += "<datalist id='liststudentNo'>"+studentNoList+"</datalist>";
			str += "</div><br>"; 

			//str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm('data4seeStudentDetails');generateSelectCourse();>";
			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=generateSelectCourse();>";
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick='refreshStudentCourseDetails();'>";
			
			str += "</fieldset></div></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str += '<center>';
			str += "<div  style='margin:0 auto; width:100; height:100; clear:both;'>";
			str += '<fieldset><legend style="font-weight:bolder; color:#666"></legend>';
			str += "<img style='float:left;width:100; height:100' src='studentPhotos/"+dataRep["degreeTitle"]+"/"+dataRep["studentNIC"]+".jpg'></fieldset></div></center>";
			
			
			
			str +="<div class='longIdentifier' style='clear:none;'>Student NIC</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='studentNIC'>"+dataRep["studentNIC"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Student Name</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;margin-right:100px;' id='studentName'>"+dataRep["studentName"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Student No</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='studentNo' >"+dataRep["studentNo"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Faculty</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='facultyTitle'>"+dataRep["facultyTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div class='longIdentifier' style='clear:none;'>Department</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='departmentTitle'>"+dataRep["departmentTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			
			str +="<div class='longIdentifier' style='clear:none;'>Programme Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;' id='programmeTypeTitle'>"+dataRep["programmeTypeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div></div>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			//hidelable starts
			str +="<div class='hideLabel'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Code</div>";
			str +="<div id='instituteDiv' class='viewArea' style='clear:none;'>"+dataRep['degreeCode']+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";
			

			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Academic Year</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='academicYear'>"+dataRep["academicYear"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div><br/>";
			
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str +="<div id='selectedDiv2'></div>";
			str +="</div>";
			
			str += "<br><center>";
			str +="<div style='margin-top:20px;float:left;clear:both;'>";
			str += "<input type='button' class='btn' value='Save'  onclick=selectedOptionalValues(this.form);selectedCompulsoryValues(this.form);formaddStudentDeteilsRequestsendForm('addStudentDeteilsRequest');>"; 
			//str += '<input type="button" class="btn" value = "Print Voucher" onclick =printVoucher();>';
			str += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formStudentMenu'"+');refreshStudentDetails2();>';
				
			str += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			str += '<input type = "button" class ="btn" value="logout" onclick=logOut();>';
			str += '</center></div></div></form>';
			str += '</td></tr></table>';
		
		}
		return str;
		}
		
		
		
// function formaddStudentDeteilsRequestsendForm(frm){

	// var doc, dataStr;
		// if(frm.substring(0,3)=="add"){
			// dataStr = "action=add";
		// } else if(frm.substring(0,6)=="update"){
				// dataStr = "action=update";
		// } else if(frm.substring(0,6)=="delete"){
				// dataStr = "action=delete";
		// } else if(frm.substring(0,6)=="search"){
				// dataStr = "action=get";
		// }

// //alert('awa');
// //alert(selectedCheckBoxes + "optional");
// //alert(uncheckedBoxes +"compulsary");

	// if(frm == 'addStudentDeteilsRequest'){
		// dataStr += "&interface="+frm;
		// var courseUnitStr = "";
		
			
		// for(courseLoop=0; courseLoop<courseUnitCodeArr.length; courseLoop++){	
			// if(dataRep["studentNo"] != ""){
				// dataStr += "&studentNo="+dataRep["studentNo"];;
			// }
			
			// if(dataRep["degreeCode"] != ""){
				// dataStr += "&degreeCode="+dataRep["degreeCode"];
			// }
			
			// if(dataRep["academicYear"] != ""){
				// dataStr += "&academicYear="+dataRep["academicYear"];
			// }
			
			
			// if(selectedCheckBoxes == ""){
				// //courseUnitStr += "&courseUnitCode="+dataRep["selectedCompulsory"];
				// courseUnitStr += "&courseUnitCode="+uncheckedBoxes;
				
			// }
	
			
			// if(selectedCheckBoxes != ""){
				// if(courseUnitCodeArr[courseLoop]!= "" || courseUnitCodeArr[courseLoop] != null){
				
					// //courseUnitStr += "&courseUnitCode="+dataRep["selectedCompulsory"]+","+selectedCheckBoxes;
					// courseUnitStr += "&courseUnitCode="+uncheckedBoxes+","+selectedCheckBoxes;
				// }
			// }
				
				
			// dataRep["studentcourseunitId"] = studentcourseunitIdArr[0];
				// if(dataRep["studentcourseunitId"]== null || dataRep["studentcourseunitId"]==""){
				// //alert("yes");
					// courseUnitStr += "&studentcourseunitId="+"1";
				// }else{
				// //alert("no");
					// var radioInvestId = (parseInt(dataRep["studentcourseunitId"])+1).toString();
					// dataRep["studentcourseunitId"] = radioInvestId;
					// courseUnitStr += "&studentcourseunitId="+dataRep["studentcourseunitId"];
				// }
				
				// courseUnitStr += "&appointed="+"yes";	
				
			// courseUnitTypeArr[courseLoop] = dataStr+courseUnitStr;	
			// //alert(regionTypeArr[courseLoop]);
		// }
			
			// if(frm == 'addStudentDeteilsRequest'){
			// for(writeLoop=0; writeLoop<courseUnitCodeArr.length; writeLoop++){
				// if(courseUnitTypeArr[writeLoop]!= "" || courseUnitTypeArr[writeLoop]!= null){
					// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", courseUnitTypeArr[writeLoop]);
				// }
			// }
		// }
	// }
	
	// else{
	// isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
	// }	
		
	// return 0;
	
// }



function formaddStudentDeteilsRequestsendForm(frm){

	var doc, dataStr;
		if(frm.substring(0,3)=="add"){
			dataStr = "action=add";
		} else if(frm.substring(0,6)=="update"){
				dataStr = "action=update";
		} else if(frm.substring(0,6)=="delete"){
				dataStr = "action=delete";
		} else if(frm.substring(0,6)=="search"){
				dataStr = "action=get";
		} else if(frm.substring(0,5) == 'data4'){
				dataStr = "action=get&interface="+frm;
		}


	if(frm == 'addStudentDeteilsRequest'){
        dataStr += "&interface="+frm;
        var courseUnitStr = "";
        
            
        for(courseLoop=0; courseLoop<courseUnitCodeArr.length; courseLoop++){    
            if(dataRep["degreeCode"]==degreeCodeArr[courseLoop] && dataRep["programmeTypeCode"] == programmeTypeCodeArr[courseLoop] && dataRep["studentNo"]== studentNoArr[courseLoop]){
				

				dataStr += "&studentNo="+dataRep["studentNo"];;
				dataStr += "&degreeCode="+dataRep["degreeCode"];
				dataStr += "&academicYear="+dataRep["academicYear"];

				if(typeArr[courseLoop]== 'Optional' && document.getElementById('selectedOptional'+courseLoop).checked == true){
						courseUnitStr += "&courseUnitCode="+courseUnitCodeArr[courseLoop];
				}else if(typeArr[courseLoop]== 'Compulsory'){
						courseUnitStr += "&courseUnitCode="+courseUnitCodeArr[courseLoop];
				}
				
				dataRep["studentcourseunitId"] = studentcourseunitIdArr[0];
					if(dataRep["studentcourseunitId"]== null || dataRep["studentcourseunitId"]==""){
						courseUnitStr += "&studentcourseunitId="+"1";
					}else{
						var radioInvestId = (parseInt(dataRep["studentcourseunitId"])+1).toString();
						dataRep["studentcourseunitId"] = radioInvestId;
						courseUnitStr += "&studentcourseunitId="+dataRep["studentcourseunitId"];
					}
				
                courseUnitStr += "&appointed="+"yes";
				
            }    
   
            courseUnitTypeArr[courseLoop] = dataStr+courseUnitStr;    
			//alert(courseUnitTypeArr[courseLoop]);
        }
            
        if(frm == 'addStudentDeteilsRequest'){
            for(writeLoop=0; writeLoop<courseUnitCodeArr.length; writeLoop++){
                //if(courseUnitTypeArr[writeLoop]!= "" || courseUnitTypeArr[writeLoop]!= null){
				if(dataRep["degreeCode"]==degreeCodeArr[writeLoop] && dataRep["programmeTypeCode"] == programmeTypeCodeArr[writeLoop] && dataRep["studentNo"]== studentNoArr[writeLoop]){
			
				  if(courseUnitTypeArr[writeLoop] != ""){
                    isrHandle.getDataFromDB(eval("clientController"), "serverController.php", courseUnitTypeArr[writeLoop]);
                }
				}
            }
        }
    }
    
    else{
    isrHandle.getDataFromDB(eval("clientController"), "serverController.php", dataStr);
    }    
        
    return 0;
    
	
}