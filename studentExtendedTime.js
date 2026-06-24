var batchNoList = "";

function disableButton(id){
	if(!document.getElementById('timeExtended'+id).checked){
		document.getElementById('printBtn'+id).style.display='none';
	}else{
		document.getElementById('printBtn'+id).style.display='block';
	}
}

function refreshStudentExtendedTime(){

	dataRep["studentNIC"] = dataRep["studentName"] =  dataRep["studentNo"]= dataRep['universityCode'] = "";
	dataRep['universityTitle'] = dataRep['facultyCode']= dataRep['facultyTitle']= "";
	dataRep['departmentCode']= dataRep['departmentTitle']= dataRep['programmeTypeCode']= dataRep["programmeTypeTitle"]= "";
	dataRep["degreeTitle"]=dataRep["degreeCode"] = "";
	dataRep["batchNo"]=dataRep["academicYear"]=dataRep["renewalRegistrationFee"]=dataRep['convocationFee']="";
	dataRep["repeatExamFee"]=dataRep['certificateFee']="";
	degreeTitleList = "";
	sendForm('data4studentExtendedTime');


}




function callNextFunctionExtendedVoucher(index){ 

	j=0;
	do{
		if (index == j ){

						dataRep["studentNIC"] = studentNICArr[j];
						dataRep["studentName"]=studentNameArr[j];
						dataRep["studentNo"]=studentNoArr[j];
						dataRep["universityCode"]=universityCodeArr[j];
						dataRep["universityTitle"]=universityTitleArr[j];
						dataRep["facultyCode"]=facultyCodeArr[j];
						dataRep["facultyTitle"]=facultyTitleArr[j];
						dataRep["departmentCode"]=departmentCodeArr[j];
						dataRep["departmentTitle"]=departmentTitleArr[j];
						dataRep["programmeTypeCode"]=programmeTypeCodeArr[j];
						dataRep["programmeTypeTitle"]=programmeTypeTitleArr[j];
						dataRep["degreeCode"]=degreeCodeArr[j];
						dataRep["degreeTitle"]=degreeTitleArr[j];
						dataRep["batchNo"]=batchNoArr[j];
						dataRep["academicYear"]=academicYearArr[j];	
						
						dataRep["renewalRegistrationFee"]=renewalRegistrationFeeArr[j];
						dataRep['convocationFee']=convocationFeeArr[j];
						dataRep["repeatExamFee"]=repeatExamFeeArr[j];
						dataRep['certificateFee']=certificateFeeArr[j];
						// dataRep['amount']=amountArr[j];			
						// dataRep['paymentId']= paymentIdArr[j];
						// dataRep['paymentTitle']= paymentTitleArr[j];
						// dataRep["voucherId"]=voucherIdArr[i];
		
		
						
		
		
			if(document.getElementById('printBtn'+j)){
			sendForm('data4ExtendedVoucherInvoiceNo');
						if(invoiceNoArr.length!=0){
						var num=parseInt(invoiceNoArr[invoiceNoArr.length-1]);
						num=num+1;	
						dataRep['invoiceNo']=num;
						}
						else{
						var num=parseInt('1');
						dataRep['invoiceNo']=num;
						}
		
			
			
					//showMenu('formStudentExtendedVoucher');
					sendForm('data4VoucherId2');
					sendForm('data4studentExtendedTime2');
					
			}
			
		}
	} while(index != j++);
}


// function callNextFunctionExtendedVoucher(j){
	
		// for(j = 0; j<degreeCodeLength; j++) { 
			// //if(studentNICArr[j] == dataRep["studentNIC"]){
						// dataRep["studentNIC"] = studentNICArr[j];
						// dataRep["studentName"]=studentNameArr[j];
						// dataRep["studentNo"]=studentNoArr[j];
						// dataRep["universityCode"]=universityCodeArr[j];
						// dataRep["universityTitle"]=universityTitleArr[j];
						// dataRep["facultyCode"]=facultyCodeArr[j];
						// dataRep["facultyTitle"]=facultyTitleArr[j];
						// dataRep["departmentCode"]=departmentCodeArr[j];
						// dataRep["departmentTitle"]=departmentTitleArr[j];
						// dataRep["programmeTypeCode"]=programmeTypeCodeArr[j];
						// dataRep["programmeTypeTitle"]=programmeTypeTitleArr[j];
						// dataRep["degreeCode"]=degreeCodeArr[j];
						// dataRep["degreeTitle"]=degreeTitleArr[j];
						// dataRep["batchNo"]=batchNoArr[j];
						// dataRep["academicYear"]=academicYearArr[j];	
						// dataRep["renewalRegistrationFee"]=renewalRegistrationFeeArr[j];
						// dataRep['convocationFee']=convocationFeeArr[j];
						// dataRep["repeatExamFee"]=repeatExamFeeArr[j];
						// dataRep['certificateFee']=certificateFeeArr[j];
						
				// if(document.getElementById('printBtn'+j)){
			
					// //showMenu('formStudentExtendedVoucher');
					// sendForm('data4studentExtendedTime2');
					
				// }
			// //} 
		// }
	// //sendForm('data4studentExtendedTime2');
	
// }


function setValuesforStudentExtendedTime(){
	for(i=0; i<degreeCodeLength;i++){

		if(dataRep['degreeTitle']==degreeTitleArr[i]){
		 
			dataRep['universityCode'] = universityCodeArr[i];
			dataRep['universityTitle'] = universityTitleArr[i];
			dataRep['facultyCode']=facultyCodeArr[i];
			dataRep['facultyTitle']=facultyTitleArr[i];
			dataRep['departmentCode']=departmentCodeArr[i];
			dataRep['departmentTitle']=departmentTitleArr[i];
			dataRep["degreeCode"]=degreeCodeArr[i];
			dataRep["studentNIC"]=studentNICArr[i];
			dataRep["studentName"]=studentNameArr[i];
			dataRep["studentNo"]=studentNoArr[i];
			dataRep["batchNo"]=batchNoArr[i];
			dataRep["extendedDuration"]=extendedDurationArr[i];
			//dataRep['amount']=amountArr[i];			
			//dataRep['paymentId']= paymentIdArr[i];
			//dataRep['paymentTitle']= paymentTitleArr[i];
			dataRep["renewalRegistrationFee"]=renewalRegistrationFeeArr[i];	
			dataRep['convocationFee']=convocationFeeArr[i];
			dataRep["repeatExamFee"]=repeatExamFeeArr[i];
			dataRep['certificateFee']=certificateFeeArr[i];

		}
		
		// else if(dataRep['batchNo']==batchNoArr[i]){
		 
			// dataRep['universityCode'] = universityCodeArr[i];
			// dataRep['universityTitle'] = universityTitleArr[i];
			// dataRep['facultyCode']=facultyCodeArr[i];
			// dataRep['facultyTitle']=facultyTitleArr[i];
			// dataRep['departmentCode']=departmentCodeArr[i];
			// dataRep['departmentTitle']=departmentTitleArr[i];
			// dataRep["degreeCode"]=degreeCodeArr[i];
			// dataRep['degreeTitle']=degreeTitleArr[i]
			// dataRep["studentNIC"]=studentNICArr[i];
			// dataRep["studentName"]=studentNameArr[i];
			// dataRep["studentNo"]=studentNoArr[i];
			// dataRep["extendedDuration"]=extendedDurationArr[i];
			// dataRep["renewalRegistrationFee"]=renewalRegistrationFeeArr[i];	
			// dataRep['convocationFee']=convocationFeeArr[i];
			// dataRep["repeatExamFee"]=repeatExamFeeArr[i];
			// dataRep['certificateFee']=certificateFeeArr[i];


		// }
	}
}



function formStudentExtendedTime(dsp){
 
		title = "Extend Duration for Student";
		str = "";

	if(dsp == "formStudentExtendedTime") {
	
			str  = "<div id='addstudentExtendedTime'>";
			str += "<table><tr><td>";
			str += '<h2 >'+title+'</h2><hr>';
			str += '<form name="maintainstudentExtendedTime">';

			
			for(degreeLoop=0; degreeLoop< degreeCodeLength; degreeLoop++){
					
			if (degreeTitleArr.indexOf(degreeTitleArr[degreeLoop]) == degreeTitleArr.lastIndexOf(degreeTitleArr[degreeLoop]) || (degreeTitleArr.indexOf(degreeTitleArr[degreeLoop]) != degreeTitleArr.lastIndexOf(degreeTitleArr[degreeLoop]) && degreeTitleArr.indexOf(degreeTitleArr[degreeLoop])==degreeLoop)){
				degreeTitleList += "<option value='"+degreeTitleArr[degreeLoop]+"'>";
			}
			//if (studentNameArr.indexOf(studentNameArr[degreeLoop]) == studentNameArr.lastIndexOf(studentNameArr[degreeLoop]) || (studentNameArr.indexOf(studentNameArr[degreeLoop]) != studentNameArr.lastIndexOf(studentNameArr[degreeLoop]) && studentNameArr.indexOf(studentNameArr[degreeLoop])==degreeLoop)){
				//batchNoList += "<option value='"+batchNoArr[degreeLoop]+"'>";
			//}
			
		}
				
			str +="<div style ='clear:both;'>";
			str +="<div id = 'noprint' class ='section1' style='float:left;'><fieldset class='field'><legend class='fieldHead'></legend>";
			
			str +="<div class='longIdentifier'>Degree Title</div>";
			str +="<div class='viewArea'>";
		
			str +="<input type='text' name='degreeTitle' list='listdegreeTitle' id='degreeTitle' value= '"+dataRep["degreeTitle"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesforStudentExtendedTime();'>";
			str += "<datalist id='listdegreeTitle'>"+degreeTitleList+"</datalist>";
			str += "</div><br>";
			
			// str +="<div class='longIdentifier'>Batch</div>";
			// str +="<div class='viewArea'>";
			
			// str +="<input type='text' name='batchNo' list='listbatchNo' id='batchNo' value= '"+dataRep["batchNo"].trim()+"' onchange='dataRep[this.name]=this.value;setValuesforStudentExtendedTime();'>";
			// str += "<datalist id='listbatchNo'>"+batchNoList+"</datalist>";
			// str += "</div><br>";
			
			str += "<input type='button' style='margin-top:18px' class='btn' value='Search' onclick=generatetextforextendedTime();>";//
			str += "<input type='button' style='margin-top:18px' class='btn' value='Reset' onclick=refreshStudentExtendedTime();>";//
			str += "<input type='button' style='margin-top:18px' class='btn' value='Logout' onclick=logOut();>";//
			
		
			
			str += "</fieldset></div></div>";
			
			str +="<div id='NewDivStudent'></div>";
			str += '</form>';
			str += '</td></tr></table>';
			str += '</div>';
			}
	return str;
	
	}
	
	
function generatetextforextendedTime(){
	
	
	
	var newStr="";
		
		
		newStr +="<div id='topics' class='info'>";
		newStr +="<br>";
		newStr +="<div class='investLabel_l'>Student photo&nbsp;&nbsp;</div>";
		newStr +="<div class='investLabel_l'>Student NIC</div>";
		newStr +="<div class='investLabel_l' >Student Name</div>";
		newStr +="<div class='investLabel_l'>Student No</div>";
		newStr +="<div class='investLabel_l'>Degree Title</div>";
		newStr +="<div class='investLabel_l'>Extended Duration</div>";
		newStr +="<div class='investLabel_l'>&nbsp;</div>";
		newStr +="<div class='investLabel'>&nbsp;</div>";
		
		newStr +="</div></br>";
			
	for( var i=0; i<degreeCodeLength; i++){
		if(dataRep["studentName"]==studentNameArr[i] && dataRep["studentNIC"]==studentNICArr[i] || dataRep['degreeTitle']==degreeTitleArr[i]){
			if (studentNICArr.indexOf(studentNICArr[i]) == studentNICArr.lastIndexOf(studentNICArr[i]) || (studentNICArr.indexOf(studentNICArr[i]) != studentNICArr.lastIndexOf(studentNICArr[i]) && studentNICArr.indexOf(studentNICArr[i])==i)){
			
			newStr +="<div class='info'   name='testInfo"+i+"'>";
			
			newStr += "<img style='float:left;width:100; height:100' src='studentPhotos/"+degreeTitleArr[i]+"/"+studentNICArr[i]+".jpg'>";
			
			
			newStr += "<div class='investView_l' name='studentNIC"+i+"' id='studentNIC"+i+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += studentNICArr[i]+"</div>";
			
			newStr += "<div  class='investView_l' name='studentName"+i+"' id='studentName"+i+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += studentNameArr[i]+"</div>";
			
			newStr += "<div class='investView_l' name='studentNo"+i+"' id='studentNo"+i+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += studentNoArr[i]+"</div>";
			
			
			newStr += "<div class='investView_l' name='degreeTitle"+i+"' id='degreeTitle"+i+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += degreeTitleArr[i]+"</div>";

			newStr += "<div class='investView_l' name='extendedDuration"+i+"' id='extendedDuration"+i+"' onchange='dataRep[this.name]=this.value;'>";
			newStr += extendedDurationArr[i]+"</div>";

			
			if(timeExtendedArr[i] == "YES" || timeExtendedArr[i] == "Yes" || timeExtendedArr[i] == "yes"){
				timeExtendedChecked = "checked";
			} else {
				timeExtendedChecked= "";
			}

			var checkBoxDivId = 'timeExtended'+i;
			if(document.getElementById(checkBoxDivId)){
				if(document.getElementById(checkBoxDivId).checked){
					timeExtendedChecked='checked';
				}
			}

			newStr += "<div  class='investView' name='extended"+i+"' id='extended"+i+"'>";
			newStr += "<input type='checkbox' "+ timeExtendedChecked+" id='timeExtended"+i+"' name='timeExtended"+i+"' onchange='dataRep[this.name]=this.value;'  onclick='disableButton("+i+");'/>";
			newStr += "</div>";
			
			
			newStr += "<div class='investView' name='print"+i+"' id='print"+i+"'>";
			newStr += '<input type="button" class="btn" value="Print" id="printBtn'+i+'"  style="cursor:pointer;display:none;" onclick=callNextFunctionExtendedVoucher('+i+');></div>';
			//newStr += '<input type="button" class="btn" value="Print" id="printBtn'+i+'"  style="cursor:pointer;display:none;" onclick=printExtendedVoucher('+i+');></div>';
			
			newStr +="</div>";
			
			
			}
		}
			
	}
			newStr +="<div >&nbsp;</div>"
			newStr += "<br/>";
			
			newStr +="<div style='float:left;margin-left:25px'>";  
			newStr +='<center>';
			//newStr += '<input type="button" class="btn" value = "Back" onclick = showMenu('+"'formReports'"+')>';
			newStr += '<input type="button" class="btn" value = "Return to Coordinator Menu" onclick = showMenu('+"'formCoordinatorMenu'"+')>';
			newStr += '<input type="button" id="btnlog" class="btn" value="logout"  onclick= logOut();></div>';
			newStr +="</div>";
			 
			
			 
			 
	document.getElementById('NewDivStudent').innerHTML=newStr;
	}
	
	
	
	
	