
function resetStudent(){

	dataRep["studentNIC"] = dataRep["studentName"] =  dataRep["studentNo"]= dataRep['universityCode'] = "";
	dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep['departmentCode']= dataRep['departmentTitle']= dataRep['programmeTypeCode']= dataRep["programmeTypeTitle"]= "";
	dataRep["degreeTitle"]=dataRep["degreeCode"] = "";
	 dataRep["instalmentType"]=dataRep["coursefeeType"]=dataRep["studentTotalAmount"]="";
	dataRep['paied1']=dataRep['paied2']=dataRep['paymentDate']=dataRep['paymentTime']="";
	studentNameList = studentNICList ="";
	sendForm('data4ViewStudentPayment');
}




function setValuesforStudentdetail(){
	for(i=0; i<studentNICLength;i++){

		if(dataRep["studentName"]==studentNameArr[i]){
			
			 dataRep["studentNIC"]=studentNICArr[i];
			 dataRep['universityCode']=universityCodeArr[i];
			 dataRep['universityTitle'] = universityTitleArr[i];
			 dataRep['facultyCode']=facultyCodeArr[i];
			 dataRep['facultyTitle']=facultyTitleArr[i];
			 dataRep['departmentCode']=departmentCodeArr[i];
			 dataRep['departmentTitle']=departmentTitleArr[i];
			 dataRep['programmeTypeCode']=programmeTypeCodeArr[i];
			 dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			 dataRep['degreeCode'] = degreeCodeArr[i];
			 dataRep["degreeTitle"]=degreeTitleArr[i];
			 dataRep["instalmentType"]=instalmentTypeArr[i];
			 dataRep["coursefeeType"]=coursefeeTypeArr[i];
			 dataRep["studentTotalAmount"]=studentTotalAmountArr[i];
			 dataRep['paied1']=paied1Arr[i];
			 dataRep['paied2']=paied2Arr[i];
			 dataRep['paymentDate']=paymentDateArr[i];
			 dataRep['paymentTime']=paymentTimeArr[i];

			
		}else if(dataRep["studentNIC"]==studentNICArr[i]){
			
			 dataRep["studentName"]=studentNameArr[i];
			
			 dataRep['universityCode']=universityCodeArr[i];
			 dataRep['universityTitle'] = universityTitleArr[i];
			 dataRep['facultyCode']=facultyCodeArr[i];
			 dataRep['facultyTitle']=facultyTitleArr[i];
			 dataRep['departmentCode']=departmentCodeArr[i];
			 dataRep['departmentTitle']=departmentTitleArr[i];
			 dataRep['programmeTypeCode']=programmeTypeCodeArr[i];
			 dataRep["programmeTypeTitle"]=programmeTypeTitleArr[i];
			 dataRep['degreeCode'] = degreeCodeArr[i];
			 dataRep["degreeTitle"]=degreeTitleArr[i];
			 dataRep["instalmentType"]=instalmentTypeArr[i];
			 dataRep["studentTotalAmount"]=studentTotalAmountArr[i];
			 dataRep['paied1']=paied1Arr[i];
			 dataRep['paied2']=paied2Arr[i];
			 dataRep['paymentDate']=paymentDateArr[i];
			 dataRep['paymentTime']=paymentTimeArr[i];
		}
	}
}

function formStudentReportDetails(dsp){
 
		title = "View Student Payment Details";
		str = "";

	if(dsp == "formStudentReportDetails") {
	
			str  = "<div id='addstudentreportpaymentdetails'>";
			str += "<table><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainstudentreportdetails">';

			
			for(studentNoLoop=0; studentNoLoop< studentNICLength; studentNoLoop++){
					
			if (studentNICArr.indexOf(studentNICArr[studentNoLoop]) == studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) || (studentNICArr.indexOf(studentNICArr[studentNoLoop]) != studentNICArr.lastIndexOf(studentNICArr[studentNoLoop]) && studentNICArr.indexOf(studentNICArr[studentNoLoop])==studentNoLoop)){
				studentNICList += "<option value='"+studentNICArr[studentNoLoop]+"'>";
			}
			if (studentNameArr.indexOf(studentNameArr[studentNoLoop]) == studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) || (studentNameArr.indexOf(studentNameArr[studentNoLoop]) != studentNameArr.lastIndexOf(studentNameArr[studentNoLoop]) && studentNameArr.indexOf(studentNameArr[studentNoLoop])==studentNoLoop)){
				studentNameList += "<option value='"+studentNameArr[studentNoLoop]+"'>";
			}
			
		}
				
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'></legend>";
			
			str +="<div class='longIdentifier'>Student NIC</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='studentNIC' list='liststudentNIC' id='studentNIC' value= '"+dataRep["studentNIC"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesforStudentdetail();'>";
			str += "<datalist id='liststudentNIC'>"+studentNICList+"</datalist>";
			str += "</div><br>";
			
			str +="<div class='longIdentifier'>Student Name</div>";
			str +="<div class='viewArea'>";
			
			str +="<input type='text' name='studentName' list='liststudentName' id='studentName' value= '"+dataRep["studentName"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesforStudentdetail();'>";
			str += "<datalist id='liststudentName'>"+studentNameList+"</datalist>";
			str += "</div><br>";
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=sendForm('data4viewstudentPayment2');generatetext();>";//
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick=resetStudent();>";//
			
			str += "</fieldset></div></div>";
			
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
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";	
			
			str +="<div style='margin-top:20px;float:left;clear:both;' class = 'demoprint'>";
			str +="<div class='longIdentifier' style='clear:none;'>Degree Title</div><div class='colon'>&nbsp;:&nbsp;</div>";
			str +="<div class='viewArea' style='clear:none;width:auto;' id='degreeTitle'>"+dataRep["degreeTitle"]+"</div>";
			str +="<div class=hideLabel>&nbsp;</div>";
			str +="</div>";	
			
			str +="<div id='selectedreportNewStr'></div>";
			
			}
	return str;
	
	}
	
	
	function generatetext()
	{
	
	title1 = "Payment List";
	
	var newStr="<br/><br/><br/>";
		newStr="";
		newStr +="<div id='topics' class='info'>";
		newStr += '<h2 >'+title1+'</h2><hr>';
		newStr +="<div class='investLabel_l'>Student NIC</div>";
		newStr +="<div class='investLabel_l' >Student Name</div>";
		newStr +="<div class='investLabel_l'>Instalment Type</div>";
		//newStr +="<div class='investLabel_l'>Total Amount</div>";
		//newStr +="<div class='investLabel_l'>Paied</div>";
		newStr +="<div class='investLabel_l'>Payment Date</div>";
		newStr +="<div class='investLabel_l'>Payment Time</div>";

		newStr +="</div></br>";
			
	for( var i=0; i<studentNICArr.length; i++){
		//if((dataRep["studentName"]==studentNameArr[i])&&(dataRep["studentNIC"]==studentNICArr[i])){
		if(dataRep["studentName"]==studentNameArr[i] && dataRep["studentNIC"]==studentNICArr[i]){
			newStr +="<div class='info'   name='testInfo"+i+"'>";
			newStr += "<div class='investView_l' name='studentNIC"+i+"' id='studentNIC"+i+"' onchange='hims[this.name]=this.value;'>";
			newStr += studentNICArr[i]+"</div>";
			
			newStr += "<div  class='investView_l' name='studentName"+i+"' id='studentName"+i+"' onchange='hims[this.name]=this.value;'>";
			newStr += studentNameArr[i]+"</div>";
			
			newStr += "<div class='investView_l' name='instalmentType"+i+"' id='instalmentType"+i+"' onchange='hims[this.name]=this.value;'>";
			newStr += instalmentTypeArr[i]+"</div>";

			// newStr += "<div class='investView_l' name='studentTotalAmount"+i+"' id='studentTotalAmount"+i+"' onchange='hims[this.name]=this.value;'>";
			// newStr += studentTotalAmountArr[i]+"</div>";
			
			// newStr += "<div class='investView_l' name='paied"+i+"' id='paied"+i+"'";
			// newStr += " onchange='hims[this.name]=this.value;'>"+paied1Arr[i]+"</div>";

			newStr += "<div class='investView_l' name='paymentDate"+i+"' id='paymentDate"+i+"'";
			newStr += " onchange='hims[this.name]=this.value;'>"+paymentDateArr[i]+"</div>";

			newStr += "<div class='investView_l' name='paymentTime"+i+"' id='paymentTime"+i+"'";
			newStr += " onchange='hims[this.name]=this.value;'>"+paymentTimeArr[i]+"</div>";
			newStr +="</div>";
		}
			
	}
			newStr +="<div >&nbsp;</div>"
			newStr += "<br/>";
			
			newStr +="<div style='float:left;margin-left:25px'>";  
			newStr +='<center>';
			newStr += '<input type="button" class="btn" value = "Return" onclick = showMenu('+"'formReports'"+')>';
			newStr += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			newStr += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			newStr +="</div>";
			 
			 newStr += '</form>';
			newStr += '</td></tr></table>';
			newStr += '</div>';
			 
			 
	document.getElementById('selectedreportNewStr').innerHTML=newStr;
	}